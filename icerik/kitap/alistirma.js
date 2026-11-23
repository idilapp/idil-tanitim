// Alıştırma cevabının doğruluk kuralı (Dalga 1 Görev 2 düzeltme 1, 23 Kasım 2026; önce uygulama/alistirma.js'teydi, Görev 5).
// Saf modül: DOM yok, depolama yok. Ders alıştırması, bölüm sonu testi ve seviye sınavı (icerik/seviye/sinav.js) aynı kuralı kullanır;
// uygulama/alistirma.js bunları yeniden dışa aktarır. icerik/ altındaki modüller uygulama/'yı içe aktarmaz (icerik/test/bagimlilik.test.mjs).
// Biçim: ../baslangic/README.md §2a.
//   Alistirma = { tur: 'sec' | 'duzelt' | 'cevir' | 'dinle', …, secenekler, dogru, aciklama } | { tur: 'yaz', soru, cevaplar, aciklama }

// yaz: büyük-küçük harf ve baştaki, sondaki boşluk yok sayılır. Telefon klavyesinin ’ ve ‘ işaretleri ' sayılır.
// Cevabın sonundaki nokta, ünlem ve soru işareti de yok sayılır ("please." = "please"; Görev 6 düzeltme 1). Virgül ve aradakiler kalır.
// Türkçe klavye (Ek iş E düzeltme 1, 23 Kasım 2026): "SELİM" ve "selım" de "Selim" sayılır. İ ve ı küçültmeden önce I ve i olur;
// yoksa toLocaleLowerCase('en-US') "İ"yi "i̇" (noktalı i + birleşen nokta) yapar ve cevap reddedilir.
const yazNormal = m => String(m ?? '').replace(/[’‘]/g, "'").replace(/İ/g, 'I').replace(/ı/g, 'i').trim().replace(/[\s.!?…]+$/, '').toLocaleLowerCase('en-US');
export function yazDogruMu(girdi, cevaplar) {
  const g = yazNormal(girdi);
  return !!g && Array.isArray(cevaplar) && cevaplar.some(c => typeof c === 'string' && yazNormal(c) === g);
}
// cevap: yaz türünde yazılan metin, öteki türlerde seçilen şıkkın dizini.
export function cevapDogruMu(x, cevap) {
  if (!x || typeof x !== 'object') return false;
  if (x.tur === 'yaz') return yazDogruMu(cevap, x.cevaplar);
  return Number.isInteger(cevap) && cevap === x.dogru;
}
