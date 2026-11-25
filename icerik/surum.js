// iDil sürüm numarası ve sürüm notları (kurucu isteği, 23 Kasım 2026): tek kaynak. Uygulama (durum çubuğu, Profil, #/surum) ve
// Yolculuk oynatıcısı buradan okur. Kural icerik/README.md "Sürüm" bölümünde: v0.x test dönemi; ortadaki hane ciddi yeni özellik
// ya da büyük içerik, son hane düzeltme ve küçük iyileştirme. Siteye giden her yüklemeden önce numara artırılır ve notu yazılır.
// Notlar kullanıcının anlayacağı dille, kısa; en yeni sürüm başta.
export const SURUM = '0.4.3';
export const SURUM_TARIHI = '2026-11-25';
export const SURUM_NOTLARI = [
  {
    surum: '0.4.3', tarih: '2026-11-25', notlar: [
      'Sınav İngilizcesi\'nin bütün çeviri soruları (395 soru: denemeler, üniteler, alan setleri) yenilendi: yanlış şıklar artık doğruyu ele vermiyor; doğru cevaba soruyu okuyarak ulaşılıyor.',
      'Çeviri açıklamaları her şıkkın neden yanlış olduğunu tek tek anlatıyor.',
      'Bazı cümle tamamlama, dil bilgisi ve anlamca en yakın cümle soruları düzeltildi; birkaç kelime kartında sözcük türü ve sözcük ailesi düzeltildi.',
    ],
  },
  {
    surum: '0.4.2', tarih: '2026-11-25', notlar: [
      'Sınav İngilizcesi\'ne 15 yeni kelime destesi, 750 kart: fiiller, isimler, sıfatlar, zarflar, öbek fiiller, edatlı kalıplar, bağlaçlar, karıştırılan sözcükler; sağlık, fen ve sosyal alan desteleri.',
      'Her kartın sözcüğü ve örnek cümlesi sesli; İngiliz telaffuzuna göre denetlendi.',
    ],
  },
  {
    surum: '0.4.1', tarih: '2026-11-25', notlar: [
      'Sınav İngilizcesi\'ne 5 yeni ünite: Zamanı ölçmek, Renkler, Gönüllülük, Koku ve tat, Köprüler (240 soru, 40 kelime kartı). Anlamca en yakın cümle, diyalog, kelime ve çeviri soruları çoğaldı.',
      'Barınma durağına yeni sahne: "Is this your key?" Ders\'teki "Is …?" dersi artık bu sahneyi dinletiyor.',
      'Ders bölüm testleri ve A1 sonu sınavı daha adil: bir sorunun cevabı artık başka bir soruda görünmüyor; doğru sayılan yazım biçimleri arttı.',
      'Pratik oyunlarında "Ne derdin?" şıkları yenilendi; Gündelik hayat\'ta "yarın" soruları ve bazı resimler netleşti.',
    ],
  },
  {
    surum: '0.4.0', tarih: '2026-11-24', notlar: [
      'A1 tamamlandı: on durak, on beş ders bölümü ve A1 sonu sınavı.',
      'A1 sonu sınavı: 40 soru, 18\'i dinleme. Her durak ve her ders bölümünden soru var. Yolum\'da A1 çubuğunun altında.',
      'A2\'ye geçmek için sınavdan en az 28 doğru (%70) gerekir. Kelime ve kalıpların çoğunu tam öğrenmen de gerekir. "Okulda öğrendim" yolunda sınav tek başına yeterlidir.',
    ],
  },
  {
    surum: '0.3.9', tarih: '2026-11-24', notlar: [
      'Yeni durak: Gündelik hayat. Haftanı öğrenirsin, saati sorarsın, işe gidersin; iki hikâyecik ve pratik oyunları.',
      'Ders\'e yeni bölüm: "Geniş zaman" (I work, she works, Do you …?, I don\'t …). Ders\'in 15 bölümü de artık yazılı.',
      'Gündelik hayat için kelime kartları: morning, evening, home, work, haftanın günleri, week, today, tomorrow.',
      'Saat dersindeki "half past" ve "What time is it?" dinleme bağlantıları artık Gündelik hayat\'ı açıyor.',
    ],
  },
  {
    surum: '0.3.8', tarih: '2026-11-24', notlar: [
      'Yeni durak: Şehir. Otobüse, taksiye binersin, istasyonu sorarsın; iki hikâyecik ve pratik oyunları.',
      'Ders\'e yeni bölüm: "There is ve there are" (var olmak; in, on, next to, near). Yeni ders: "Sayılar 20, 30 … 90".',
      'Şehir için kelime kartları: street, bus, taxi, train, station, shop, bank, twenty, in, on, near, go.',
      'Sayılar 11–19 dersinde sesler düzeldi: fifteen, sixteen gibi sayılar artık sondan vurgulu, fifty ile karışmaz.',
    ],
  },
  {
    surum: '0.3.7', tarih: '2026-11-24', notlar: [
      'Yeni sürüm yüklendikten sonra sayfa "Yükleniyor…"da takılırsa uygulama kendini bir kez yeniler; yine açılmazsa "Yenile" düğmesi çıkar.',
      'Sayfa yalnız yavaş açılıyorsa kendiliğinden bir şey indirmez; "Sayfa yavaş açılıyor" notu ve "Yenile" düğmesi gösterir.',
    ],
  },
  {
    surum: '0.3.6', tarih: '2026-11-24', notlar: [
      'Yeni durak: Kafe. Kahve ve çay ısmarlarsın, boy seçersin, fiyat sorarsın; iki hikâyecik ve pratik oyunları.',
      'Yeni ders: "Can I have …, please?" (kibar istek). "I want" dersinin dinleme bağlantısı artık Kafe\'de.',
      'Kafe için kelime kartları: water, coffee, tea, bread, cup, eat, drink, hot, big, small.',
    ],
  },
  {
    surum: '0.3.5', tarih: '2026-11-23', notlar: [
      'Yeni durak: İnsanlar. Yeni komşunla tanışırsın, nereli olduğunu söylersin, kardeşlerini anlatırsın; iki hikâyecik ve pratik oyunları.',
      'Ders\'e yeni bölüm: "Have ve like" (I have, I like, Do you like?, I need, I want). Ayrıca "Nice to meet you" ve "I am from" dersleri.',
      'Kişiler için kelime kartları: man, woman, friend, neighbour, sister, brother ve öbürleri.',
    ],
  },
  {
    surum: '0.3.4', tarih: '2026-11-23', notlar: [
      'Düello\'da süre sorunun uzunluğuna göre: kısa sorular 20 saniye, uzun paragraflı sorular 2 dakikaya kadar.',
      'Kalan süre ekranın üstünde hep görünür; metni kaydırırken de kaybolmaz.',
    ],
  },
  {
    surum: '0.3.3', tarih: '2026-11-23', notlar: [
      'Yeni durak: Sağlık. Elin incinir, eczacıya derdini anlatırsın; iki hikâyecik ve pratik oyunları.',
      'Yeni ders: "It hurts / I need". Baş, el, bacak, göz, hasta, uyku, ilaç, eczane ve doktor için kelime kartları.',
    ],
  },
  {
    surum: '0.3.2', tarih: '2026-11-23', notlar: [
      'Varış, İş ve Resmî işler pratiklerine 5 kısa oyun eklendi; artık her durağın bütün kelime ve kalıplarını dinleyerek tamamlayabilirsin.',
      'Bu duraklarda pratiği bitirdiysen yeni oyunlar yüzünden yeniden "yarım" görünebilir; yaptıkların silinmedi.',
    ],
  },
  {
    surum: '0.3.1', tarih: '2026-11-23', notlar: [
      'Yolunu tek dokunuşla değiştir: başlıktaki "Genel İngilizce" ya da "Sınav İngilizcesi" yazısına dokun; Profil\'de de iki yol yan yana. İlerlemen silinmez.',
      'Beş yeni ders: Thank you, Sayılar 11–19, Harf harf söylemek, Anlamadığında, Sign here.',
      'Öğretmen her durakta önce o durağın kelime ve kalıplarını öğreten dersleri önerir; ders listen değişmiş olabilir.',
      'Türkçe klavyeyle yazılan büyük İ artık doğru sayılır.',
    ],
  },
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
