// Ders alıştırmaları ve bölüm sonu testi: saf kurallar (Görev 5, 21 Kasım 2026). DOM yok, depolama yok; durum.js ve
// uygulama.js kullanır, mobil uygulama da aynısını kullanabilir. Biçim: ../icerik/baslangic/README.md §2a.
//   Alistirma = { tur: 'sec' | 'duzelt' | 'cevir' | 'dinle', …, secenekler, dogru, aciklama } | { tur: 'yaz', soru, cevaplar, aciklama }
//   Test öğesi = Alistirma & { ders }

// Anlam kanadı eşiği: dersin alıştırmalarının en az %80'i doğru (ICERIK_GENISLEME §4.3, IKI_KANAT §3.3).
export const ESIK = 0.8;

// Cevabın doğruluk kuralı (yazDogruMu, cevapDogruMu) icerik/kitap/alistirma.js'te; seviye sınavı da onu kullanır (Dalga 1 Görev 2
// düzeltme 1). Buradan yeniden dışa aktarılır; uygulamanın içe aktarmaları değişmez.
export { yazDogruMu, cevapDogruMu } from '../icerik/kitap/alistirma.js';
// Tam sayıyla karşılaştırılır (0,8 × n kayan nokta hatası yok): 10'da 8, 15'te 12, 20'de 16.
export const gectiMi = (dogru, n) => Number.isFinite(dogru) && Number.isInteger(n) && n > 0 && dogru * 100 >= n * Math.round(ESIK * 100);
export function ilerlemeDurumu(cevaplanan, toplam) {
  if (!(toplam > 0) || !(cevaplanan > 0)) return 'baslanmadi';
  return cevaplanan >= toplam ? 'tamam' : 'yarim';
}
// Yanlış cevaplanan test öğelerinin dersleri, testteki ilk görünüş sırasıyla ve tekil. cevaplar: { [j]: { d } }.
export function yanlisDersler(test, cevaplar) {
  const sira = [];
  if (!Array.isArray(test) || !cevaplar || typeof cevaplar !== 'object') return sira;
  test.forEach((x, j) => { const c = cevaplar[j]; if (c && c.d === false && x?.ders && !sira.includes(x.ders)) sira.push(x.ders); });
  return sira;
}
// İçerikten güvenli okuma: alan yoksa ya da bozuksa boş dizi. Sınav Kitabı'nın test alanı soru kimliği listesidir (metin);
// Ders'in bölüm sonu testi yalnız nesne öğelerden oluşur.
export const dersAlistirmalari = d => (Array.isArray(d?.alistirmalar) ? d.alistirmalar.filter(x => x && typeof x === 'object') : []);
export const bolumTesti = b => (Array.isArray(b?.test) ? b.test.filter(x => x && typeof x === 'object') : []);
