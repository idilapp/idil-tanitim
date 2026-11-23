// iDil sürüm numarası ve sürüm notları (kurucu isteği, 23 Kasım 2026): tek kaynak. Uygulama (durum çubuğu, Profil, #/surum) ve
// Yolculuk oynatıcısı buradan okur. Kural icerik/README.md "Sürüm" bölümünde: v0.x test dönemi; ortadaki hane ciddi yeni özellik
// ya da büyük içerik, son hane düzeltme ve küçük iyileştirme. Siteye giden her yüklemeden önce numara artırılır ve notu yazılır.
// Notlar kullanıcının anlayacağı dille, kısa; en yeni sürüm başta.
export const SURUM = '0.3.0';
export const SURUM_TARIHI = '2026-11-23';
export const SURUM_NOTLARI = [
  {
    surum: '0.3.0', tarih: '2026-11-23', notlar: [
      'Yeni durak: Resmî işler. Kayıt masasında form doldurur, adını harf harf söylersin; iki hikâyecik ve pratik oyunları.',
      'İlerleme daha anlaşılır: Bugün\'de "Varış: 5 adımın 2\'si bitti" çubuğu; Yolum\'da A1 çubuğu ve ne yapman gerektiğini söyleyen cümle.',
      'A2 şartı tek cümlede: kaç kelime ve kalıbı tam öğrenmen gerektiği ve sınav puanı.',
      'Ekranlarda daha sade sözler: "kelime ve kalıp", "duydun", "tam öğrendin".',
    ],
  },
  {
    surum: '0.2.2', tarih: '2026-11-23', notlar: [
      'Sitede yeni sürüm çıkınca ekranın üstünde "Yeni sürüm hazır · Yenile" bandı görünür; tek dokunuşla güncellenirsin.',
    ],
  },
  {
    surum: '0.2.1', tarih: '2026-11-23', notlar: [
      'İş durağında pratik oyunları ve iki hikâyecik.',
      'Tam deneme 10.',
      'Telefonda sürüm numarası uygulama adının yanında görünür.',
    ],
  },
  {
    surum: '0.2.0', tarih: '2026-11-23', notlar: [
      'Öğretmen yönlendirmesi: Bugün ekranında tek bir "şimdi" adımı, parça sonlarında "Şimdi: …" geçişi.',
      'Yolculuk’ta yazılış ve okunuş balonu; istersen "Aa" ile kapatırsın.',
      'Yanlış seçtiğin cevap kırmızı çerçeveyle görünür.',
      'Kelime kartının arka yüzü: anlam, sözcük ailesi, kısa soru ve ses.',
      'A1 sonu sınavı ekranı ve A2 kapısı.',
      'Barınma ve Pazar duraklarında pratik oyunları ve hikâyecikler.',
      'Ders bölüm 2–12’de alıştırmalar ve bölüm testleri.',
      'Tam deneme 6–9.',
      'Sürüm numarası ve "Neler değişti" sayfası.',
    ],
  },
  {
    surum: '0.1.0', tarih: '2026-11-22', notlar: [
      'İlk deneme sürümü: Genel İngilizce pilotu ve Sınav hazırlığının ilk adımı.',
      'Varış durağı, pratik oyunları ve hikâyecikleriyle.',
      'Ders Bölüm 1 alıştırmaları.',
      'Yolum ekranı ve ilerleme.',
      'Sınavda zayıf nokta haritası.',
      'Tam deneme 1–5.',
      '750 yeni kelime kartı.',
      'Soru türlerini dengeleyen üniteler.',
    ],
  },
];
export const surumYazisi = () => `v${SURUM}`;

// Yeni sürüm bandı (kurucu onayı, 23 Kasım 2026). Açık kalan sekme ya da önbellekteki eski kopya yeni yüklemeyi kendiliğinden
// almaz; uygulama sitedeki bu dosyanın metnini önbelleksiz ister, numarayı okur ve kendi numarasıyla karşılaştırır.
// Saf işlevler: DOM ve ağ yok.
const SURUM_BICIMI = /^\d+\.\d+\.\d+$/;
export function surumOku(metin) {
  if (typeof metin !== 'string') return null;
  const m = metin.match(/export\s+const\s+SURUM\s*=\s*['"](\d+\.\d+\.\d+)['"]/);
  return m ? m[1] : null;
}
export function surumYeniMi(uzak, yerel) {
  if (typeof uzak !== 'string' || typeof yerel !== 'string' || !SURUM_BICIMI.test(uzak) || !SURUM_BICIMI.test(yerel)) return false;
  const [u, y] = [uzak, yerel].map(v => v.split('.').map(Number));
  for (let i = 0; i < 3; i++) if (u[i] !== y[i]) return u[i] > y[i];
  return false;
}

// "Yenile" hangi dosyaları yeniden isteyeceğini modül bağlantılarını izleyerek bulur (tarayıcının kaynak listesi 250 kayıtla
// sınırlıdır, uygulama daha fazlasını yükleyebilir). Bir modül metnindeki göreli içe aktarma yollarını verir: `from '…'`,
// yalın `import '…'` ve sabit metinli `import('…')`. Paket adları ve tam adresler alınmaz. Yorum içindeki örnek bir satır da
// yakalanabilir; fazladan bir istek zararsızdır.
export function iceAktarimlar(metin) {
  if (typeof metin !== 'string') return [];
  const desen = /\b(?:import|export)\b[^'"`;()]*?\bfrom\s*['"]([^'"\n]+)['"]|\bimport\s*['"]([^'"\n]+)['"]|\bimport\s*\(\s*['"]([^'"\n]+)['"]\s*\)/g;
  const yollar = new Set();
  for (const m of metin.matchAll(desen)) {
    const y = m[1] || m[2] || m[3];
    if (y.startsWith('./') || y.startsWith('../')) yollar.add(y);
  }
  return [...yollar];
}
