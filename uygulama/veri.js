// iDil tanıtım sürümü: içerik dizini (14 Kasım 2026). İçeriği doğrudan okur: ../icerik/pilot (üniteler), ../icerik/turler.js,
// ../icerik/hap (hap kartları), ../icerik/kelime (kelime desteleri). Oynatıcıyla (../oynatici/oynatici.js) aynı soru kimliklerini kullanır.
import { PILOT_UNITS } from '../icerik/pilot/index.js';
import { TURLER, ALANLAR } from '../icerik/turler.js';

let HAP = null;
try { HAP = await import('../icerik/hap/index.js'); } catch (e) { console.warn('Hap kartları yüklenemedi:', e); }
let DESTELER = [];
try { DESTELER = (await import('../icerik/kelime/index.js')).KELIME_DESTELERI; } catch (e) { console.warn('Kelime desteleri yüklenemedi:', e); }
let SEVIYE = null;
try { SEVIYE = await import('../icerik/seviye-testi.js'); } catch (e) { console.warn('Seviye testi yüklenemedi:', e); }
let KITAP_MOD = null;
try { KITAP_MOD = await import('../icerik/kitap/index.js'); } catch (e) { console.warn('Ders kitabı yüklenemedi:', e); }
// iDil sesi (18 Kasım, PLAN §2.5): önceden üretilmiş ses dosyaları (metin → dosya). Yoksa cihaz sesi kullanılır.
let SES_MOD = null;
try { SES_MOD = await import('../icerik/ses/index.js'); } catch (e) { console.warn('Ses dosyaları yüklenemedi:', e); }
export const SES = SES_MOD?.SES || {};
// Kelime kartı görselleri (18 Kasım 2026, tarz v11): kart sözcüğü → sahne. Yoksa kart görselsiz açılır.
let GORSEL_MOD = null;
try { GORSEL_MOD = await import('../icerik/gorsel/index.js'); } catch (e) { console.warn('Kart görselleri yüklenemedi:', e); }
export const GORSEL = GORSEL_MOD?.GORSEL || {};
// Sözcük kökleri (18 Kasım 2026; pilot ve 163 aileye genişleme): kök → aile; kart sözcüğü → kök. Yalnız çok yönlü denetimden geçen kökler (../icerik/kok/README.md).
let KOK_MOD = null;
try { KOK_MOD = await import('../icerik/kok/index.js'); } catch (e) { console.warn('Kökler yüklenemedi:', e); }
export const KOKLER = KOK_MOD?.KOKLER || {};
export const KOK_SOZCUK = Object.fromEntries(Object.entries(KOKLER).flatMap(([id, k]) => Object.keys(k.sozcukler).map(s => [s, id])));
export const SES_SANATCI = SES_MOD?.SES_SANATCI || '';

export { PILOT_UNITS, TURLER, ALANLAR };
export const HARF = ['A', 'B', 'C', 'D', 'E'];
export const ROMA = ['I', 'II', 'III', 'IV', 'V'];
export const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const sayi = (x, k = 1) => Number(x).toLocaleString('tr-TR', { maximumFractionDigits: k });

// Bir ünitenin soruları: tek soru, akışı bozan cümle ve parça adımları tek tek (denetle.mjs questionsOf ile aynı kimlikler).
export function sorulari(unit) {
  const out = [];
  for (const it of unit.items) {
    const ortak = { unit, it, tur: it.tur, level: it.level };
    if (it.type === 'pratik') {
      it.steps.forEach((s, k) => out.push({ ...ortak, id: `${it.id}-a${k + 1}`, k, konu: s.konu, cefr: s.cefr || it.cefr, q: s.q, options: s.options, answer: s.answer, explain: s.explain }));
    } else if (it.tur === 'bozan') {
      out.push({ ...ortak, id: it.id, konu: it.konu, cefr: it.cefr, q: null, options: ROMA, answer: it.answer, explain: it.explain });
    } else {
      out.push({ ...ortak, id: it.id, konu: it.konu, cefr: it.cefr, q: it.q, options: it.options, answer: it.answer, explain: it.explain });
    }
  }
  return out;
}

export const SORULAR = PILOT_UNITS.flatMap(sorulari);
// Tam denemeler (../icerik/deneme, Görev 9): sabit kitapçık; sorular SORULAR havuzuna girmez (rastgele deneme, düello ve tür
// çalışması denemeyi karıştırmasın), ama SORU dizininde durur: cevaplar tür isabetine ve zayıf nokta haritasına sayılır.
// Her öğe kendi alanını taşır; s.unit denemenin adını ve öğenin alanını verir.
let DENEME_MOD = null;
try { DENEME_MOD = await import('../icerik/deneme/index.js'); } catch (e) { console.warn('Tam denemeler yüklenemedi:', e); }
export const DENEMELER = (DENEME_MOD?.DENEMELER || []).map(d => ({
  ...d, sorular: d.sorular.flatMap(it => sorulari({ id: d.id, title: d.ad, course: it.course, deneme: true, items: [it] })),
}));
export const DENEME_SORULARI = DENEMELER.flatMap(d => d.sorular);
export const SORU = new Map([...SORULAR, ...DENEME_SORULARI].map(s => [s.id, s]));
export const UNITE = new Map(PILOT_UNITS.map(u => [u.id, u]));
export const UNITE_SORULARI = new Map(PILOT_UNITS.map(u => [u.id, SORULAR.filter(s => s.unit === u)]));
// Ünite kartları önce, sonra ünitesiz "sınav kelimeleri" desteleri (3. çoğaltma turu; kartın unit'i deste, unit.deste true).
export const KARTLAR = [...PILOT_UNITS, ...DESTELER].flatMap(u => u.cards.map(c => ({ ...c, key: `${u.id}/${c.code}`, unit: u })));
export { DESTELER };
export const KART = new Map(KARTLAR.map(k => [k.key, k]));

export const HAP_KARTLARI = HAP?.HAP_KARTLARI || [];
export const KATEGORILER = HAP?.KATEGORILER || {};
export const HAPK = new Map(HAP_KARTLARI.map(k => [k.id, k]));
export const hapIcin = s => (HAP ? HAP.hapFor({ tur: s.tur, konu: s.konu || [] }).filter(id => HAPK.has(id)) : []);
export const HAP_BAGLI = new Map(HAP_KARTLARI.map(k => [k.id, []]));
for (const s of SORULAR) for (const id of hapIcin(s)) HAP_BAGLI.get(id).push(s);

// ---------- ders kitabı (../icerik/kitap) ----------
// KITAP.kisimlar: kitabın kısımları (I–VI); KITAP.bolumler: kitap sırasıyla bütün bölümler. Yazılmamış bölüm yalnız künyesiyle
// durur (dersler boş). Bölüm → dersler (A, B, C…) → bloklar (anlatım, tablo, örnek, sık hata, sınavda, kendini dene…).
export const KITAP = KITAP_MOD?.KITAP || { kisimlar: [], bolumler: [], yontem: [] };
export const BOLUMLER = KITAP.bolumler;
export const BOLUM = new Map(BOLUMLER.map(b => [b.id, b]));
export const YAZILI = BOLUMLER.filter(b => b.dersler?.length);
export const dersBul = (bId, dId) => BOLUM.get(bId)?.dersler?.find(d => d.id === dId) || null;
// Genel İngilizce, Ders yolu (../icerik/baslangic, 18 Kasım 2026): Başlangıç Kitabı. Biçim YDS kitabıyla aynı; ek olarak `duy` bloğu.
let BASLANGIC_MOD = null;
try { BASLANGIC_MOD = await import('../icerik/baslangic/index.js'); } catch (e) { console.warn('Başlangıç Kitabı yüklenemedi:', e); }
export const BASLANGIC = BASLANGIC_MOD?.BASLANGIC || { kisimlar: [], bolumler: [] };
export const B_BOLUMLER = BASLANGIC.bolumler;
export const B_BOLUM = new Map(B_BOLUMLER.map(b => [b.id, b]));
export const B_YAZILI = B_BOLUMLER.filter(b => b.dersler?.length);
export const bDersBul = (bId, dId) => B_BOLUM.get(bId)?.dersler?.find(d => d.id === dId) || null;
const konuKesisir = (a = [], b = []) => a.some(t => b.includes(t));
// Yanlış cevaptan sonra "Ders kitabında": sorunun konu etiketini anlatan ilk ders (önce ders düzeyinde, sonra bölüm düzeyinde).
export function dersIcin(s) {
  const k = s.konu || [];
  if (!k.length) return null;
  for (const b of YAZILI) { const d = b.dersler.find(x => konuKesisir(x.konular, k)); if (d) return { b, d }; }
  for (const b of YAZILI) if (konuKesisir(b.konular, k)) return { b, d: b.dersler[0] };
  return null;
}
// Bölüm testi: bölümün seçtiği sorular ve konu etiketleri bölümle kesişen sorular.
export function bolumSorulari(b) {
  const secili = new Set(b.test || []);
  return SORULAR.filter(s => secili.has(s.id) || konuKesisir(s.konu, b.konular));
}

// Parçalı türlerde (okuma, boşluklu) parça kimliği → o parçanın adımları.
export function parcalar(tur) {
  const m = new Map();
  for (const s of SORULAR.filter(x => x.tur === tur)) { if (!m.has(s.it.id)) m.set(s.it.id, []); m.get(s.it.id).push(s); }
  return m;
}

// ---------- rastgelelik ----------
export function karisik(n, rnd = Math.random) {
  const a = [...Array(n).keys()];
  for (let i = n - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
export const rastgele = (dizi, n, rnd = Math.random) => karisik(dizi.length, rnd).slice(0, n).map(i => dizi[i]);
// Aynı girdiye hep aynı sayıyı veren üreteç (lig ve örnek ilerleme bununla; sayfa yenilenince değişmesin).
export function tohum(metin) {
  let h = 2166136261;
  for (const c of String(metin)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); }
  return (h >>> 0) / 4294967296;
}
export function uretec(baslangic) {
  let a = Math.floor(tohum(baslangic) * 4294967296);
  return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

// YDS düzeninde 80 soru (oynatıcıdaki denemeKur ile aynı): kelime 6, dil bilgisi 10, boşluklu 2 parça, cümle tamamlama 10,
// çeviri 3 + 3, okuma 5 parça (4'er soru), diyalog 5, yakın anlam 4, paragraf tamamlama 4, akışı bozan cümle 5.
// Deneme sınavı. YDS: bütün havuzdan, ÖSYM düzeninde 80 soru. YÖKDİL (3. tur): adayın alanından (sağlık, fen, sosyal);
// alanda eksik kalan tür genel üniteden tamamlanır. YÖKDİL'de diyalog ve yakın anlam yok; okuma parça başına 3 soru.
export const SINAV_ALANI = { 'YÖKDİL Sağlık': 'saglik', 'YÖKDİL Fen': 'fen', 'YÖKDİL Sosyal': 'sosyal' };
export function denemeKur(sinav = 'YDS') {
  const alan = SINAV_ALANI[sinav];
  if (!alan) {
    const tur = t => SORULAR.filter(s => s.tur === t);
    const parca = (t, adim, n) => rastgele([...parcalar(t).values()].filter(g => g.length === adim), n).flat();
    return [
      ...rastgele(tur('kelime'), 6), ...rastgele(tur('dilbilgisi'), 10), ...parca('bosluklu', 5, 2),
      ...rastgele(tur('cumle-tamamlama'), 10), ...rastgele(tur('ceviri-et'), 3), ...rastgele(tur('ceviri-te'), 3),
      ...parca('okuma', 4, 5), ...rastgele(tur('diyalog'), 5), ...rastgele(tur('yakin-anlam'), 4),
      ...rastgele(tur('paragraf-tamamlama'), 4), ...rastgele(tur('bozan'), 5),
    ];
  }
  // Önce alanın sorularından, yetmezse genel ünitelerden.
  const sec = (havuz, n) => { const a = rastgele(havuz.filter(s => s.unit.course === alan), n); return a.length >= n ? a : [...a, ...rastgele(havuz.filter(s => s.unit.course === 'genel'), n - a.length)]; };
  const tur = t => SORULAR.filter(s => s.tur === t);
  const gruplar = t => [...parcalar(t).values()];
  const parcaSec = (t, n, adim) => sec(gruplar(t).map(g => ({ unit: g[0].unit, g })), n).flatMap(x => x.g.slice(0, adim));
  return [
    ...sec(tur('kelime'), 6), ...sec(tur('dilbilgisi'), 14), ...parcaSec('bosluklu', 2, 5),
    ...sec(tur('cumle-tamamlama'), 11), ...sec(tur('ceviri-et'), 6), ...sec(tur('ceviri-te'), 6),
    ...parcaSec('okuma', 5, 3), ...sec(tur('paragraf-tamamlama'), 6), ...sec(tur('bozan'), 6),
  ];
}

// Seviye testi (../icerik/seviye-testi.js): basamak sırasıyla 18 soru; adımın basamağı `seviyeBasamak` alanında.
export const SEVIYE_TESTI = SEVIYE?.SEVIYE_TESTI || null;
export const seviyeBul = SEVIYE?.seviyeBul || (() => 'B2');
export function seviyeTestiKur() {
  if (!SEVIYE_TESTI) return [];
  return SEVIYE_TESTI.basamaklar.flatMap((b, k) => b.sorular.filter(id => SORU.has(id)).map(id => ({ s: SORU.get(id), k })));
}

// Düelloya giren türler (turler.js duello: true) ve kısa adları (düello tablosu dar).
export const DUELLO_TURLERI = Object.entries(TURLER).filter(([t, x]) => x.duello && SORULAR.some(s => s.tur === t)).map(([t]) => t);
export const KISA_AD = {
  kelime: 'Kelime', dilbilgisi: 'Dil bilgisi', bosluklu: 'Boşluklu metin', 'cumle-tamamlama': 'Cümle tamamlama',
  'ceviri-et': 'Çeviri (İng → Tr)', 'ceviri-te': 'Çeviri (Tr → İng)', okuma: 'Okuma', diyalog: 'Diyalog',
  'yakin-anlam': 'Yakın anlam', 'paragraf-tamamlama': 'Paragraf tamamlama', bozan: 'Akışı bozan cümle',
};
