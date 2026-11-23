// Düello süresi (kurucu isteği, 23 Kasım 2026; brif: .superpowers/sdd/ICERIK_GENISLEME_DALGA1_PLAN/ek-duello-sure-brief.md).
// Eskiden her soruya sabit 20 sn veriliyordu; uzun paragraflı sorularda (ör. akışı bozan cümle) bu yetmiyordu. Ek süre yalnız uzun
// metne: ilk 45 kelime 20 sn'ye dahil, ötesi dakikada ~110 kelime hızıyla eklenir, 5'e yuvarlanır, en çok 120 sn
// (kontrolcü kararı, tur 1: ilk formül tek cümlelik sorulara da ek süre veriyordu). Eşik kararda 40'tı; 40'ta tek cümlelik
// dil bilgisi sorularının yalnız %75'i 20 sn kalıyordu (iki boşluklu, iki sözcüklü şıklar yüzünden), 45'te %88'i kalıyor;
// paragraf soruları yine uzun (akışı bozan ort. ~55, paragraf tamamlama ~77 sn).
// Saf modül: tarayıcıya ve uygulama/ klasörüne bağlı değil (icerik/test/bagimlilik.test.mjs); mobil uygulama da kullanabilir.

export const SURE_EN_AZ = 20;
export const SURE_EN_COK = 120;

// Boşlukla ayrılan sözcükler; içinde harf ya da rakam olmayan parça (noktalama, "____" boşluğu, tire) sayılmaz.
export function kelimeSay(metin) {
  if (typeof metin !== 'string') return 0;
  return metin.split(/\s+/).filter(w => /[\p{L}\p{N}]/u.test(w)).length;
}

// Ekranda okunacak metin: soru kökü + (varsa) paragraf cümleleri ya da okuma metni + bütün şıklar. Hem içerikteki ham öğeyi
// ({ q, options, sentences, text }) hem uygulamanın soru nesnesini ({ q, options, it: { sentences, text } }) kabul eder.
// Akışı bozan cümlede şıklar yalnız I–V etiketidir ("III. cümle"), sayılmaz. Bozuk girdi 0 kelime verir.
export function duelloKelime(soru) {
  if (!soru || typeof soru !== 'object' || Array.isArray(soru)) return 0;
  const it = soru.it && typeof soru.it === 'object' ? soru.it : {};
  const dizi = x => (Array.isArray(x) ? x : []);
  const cumleler = Array.isArray(soru.sentences) ? soru.sentences : dizi(it.sentences);
  const metin = typeof soru.text === 'string' ? soru.text : typeof it.text === 'string' ? it.text : '';
  const siklar = soru.tur === 'bozan' ? [] : dizi(soru.options);
  return [soru.q, metin, ...cumleler, ...siklar].reduce((a, x) => a + kelimeSay(x), 0);
}

export const DAHIL_KELIME = 45; // 20 sn'ye dahil kelime sayısı

// sure = min(120, 20 + 5 × ⌈0,55 × max(0, kelime − 45) / 5⌉). Kayan nokta hatası olmasın diye tam sayıyla:
// 0,55x / 5 = 11x / 100.
export function sureHesapla(kelime) {
  const k = Number.isFinite(kelime) && kelime > 0 ? Math.floor(kelime) : 0;
  const fazla = Math.max(0, k - DAHIL_KELIME);
  return Math.min(SURE_EN_COK, SURE_EN_AZ + 5 * Math.ceil((11 * fazla) / 100));
}

export const duelloSuresi = soru => sureHesapla(duelloKelime(soru));

// Bir düello adımının süre hakkı. Bu kural gelmeden önce kurulan adımda alan yoktur; o adım 20 sn sayılır.
export function adimSuresi(adim) {
  const h = adim?.hak;
  return Number.isFinite(h) && h >= SURE_EN_AZ && h <= SURE_EN_COK ? h : SURE_EN_AZ;
}

// Botun cevap süresi: eskiden 20 sn içinde doğruda 5–16, yanlışta 8–19 sn idi; şimdi sürenin aynı oranları
// (doğru %25–%80, yanlış %40–%95). r: 0–1 arası rastgele sayı. Her zaman 1 ile hak − 1 arasında tam sayı.
export function botSuresi(hak, dogru, r = Math.random()) {
  const h = Number.isFinite(hak) && hak >= SURE_EN_AZ ? hak : SURE_EN_AZ;
  const x = Number.isFinite(r) ? Math.min(1, Math.max(0, r)) : 0.5;
  const oran = (dogru ? 0.25 : 0.4) + x * 0.55;
  return Math.min(h - 1, Math.max(1, Math.round(h * oran)));
}
