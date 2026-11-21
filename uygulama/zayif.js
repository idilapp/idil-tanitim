// Sınavda zayıf nokta haritası: saf işlevler (Görev 8, 22 Kasım 2026; tasarım ICERIK_GENISLEME §4.6). DOM ve depolama yok;
// veri parametreyle gelir. uygulama.js kullanır; mobil uygulama da aynısını kullanabilir.
//   cevaplar: D.cevaplar biçimi, soru kimliği → { n, d, son: son cevap doğru mu, t: 'YYYY-AA-GG' }
//   sorular: { id, konu: string[] , … }[] (veri.js SORULAR ya da denetle.mjs questionsOf)
// Etiketsiz ya da haritada olmayan etiketli soru yok sayılır. Boş, eski ya da bozuk cevaplar istisna atmaz (inceleme odağı 1 ve 4).
import { KONULAR, konuBul } from '../icerik/konu-haritasi.js';
import { havuz } from './durum.js';

const nesne = v => (v && typeof v === 'object' && !Array.isArray(v) ? v : null);
const kayitMi = c => !!nesne(c) && typeof c.son === 'boolean';
const tamSayi = (x, ontanimli) => (Number.isInteger(x) && x > 0 ? x : ontanimli);

// Sorunun düştüğü konular (tekrarsız): iki etiketi aynı konudaysa soru o konuda bir kez sayılır.
function konulari(s) {
  if (!nesne(s) || !Array.isArray(s.konu)) return [];
  return [...new Set(s.konu.map(konuBul).filter(Boolean))];
}

// Her konu için: cevaplanmış sorular t'ye göre en yeniden en çok `son` tane alınır, her sorunun son cevabı sayılır.
// Döner: { konu, ad, dogru, toplam, oran (0–1), yeterli: toplam ≥ enAz, kitap }[]; yalnız en az bir cevabı olan konular.
// Sıra: önce yeterli olanlar orana göre artan (en zayıf başta; eşitlikte çok cevaplı önce), sonra yeterli olmayanlar aynı kuralla.
export function zayifKonular(cevaplar, sorular, secenek = {}) {
  const C = nesne(cevaplar);
  if (!C || !Array.isArray(sorular)) return [];
  const o = nesne(secenek) || {};
  const son = tamSayi(o.son, 30);
  const enAz = tamSayi(o.enAz, 5);
  const gorulen = new Set();
  const kovalar = new Map(); // konu → [{ t, son }]
  for (const s of sorular) {
    if (!nesne(s) || typeof s.id !== 'string' || gorulen.has(s.id)) continue;
    gorulen.add(s.id);
    const c = Object.hasOwn(C, s.id) ? C[s.id] : null;
    if (!kayitMi(c)) continue;
    for (const k of konulari(s)) {
      if (!kovalar.has(k)) kovalar.set(k, []);
      kovalar.get(k).push({ id: s.id, t: typeof c.t === 'string' ? c.t : '', n: Number.isFinite(c.n) ? c.n : 0, son: c.son });
    }
  }
  const satirlar = [...kovalar].map(([konu, l]) => {
    // Pencere sırası: t (gün) en yeniden; aynı günde çok çözülen (n büyük) önce; en son kimlik (belirlenimci olsun diye).
    // Sınır: D.cevaplar cevap başına sıra ya da saat tutmaz (t yalnız gün), bu yüzden aynı gün içindeki gerçek sıra bilinmez;
    // n tekrar sayısıdır, yakınlık değil. Pencere (son) yalnız aynı günün cevapları sınırda bölündüğünde bundan etkilenir.
    const pencere = l.sort((a, b) => (a.t < b.t ? 1 : a.t > b.t ? -1 : 0) || b.n - a.n || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0)).slice(0, son);
    const dogru = pencere.filter(x => x.son).length;
    const toplam = pencere.length;
    return { konu, ad: KONULAR[konu].ad, dogru, toplam, oran: dogru / toplam, yeterli: toplam >= enAz, kitap: [...KONULAR[konu].kitap] };
  });
  return satirlar.sort((a, b) => Number(b.yeterli) - Number(a.yeterli) || a.oran - b.oran || b.toplam - a.toplam || a.ad.localeCompare(b.ad, 'tr'));
}

// Konunun soruları içinden n soruluk set; seçim bugünkü havuz kuralıyla (durum.js): önce çözülmemiş, sonra son cevabı yanlış,
// en son doğru olanlar, her grup kendi içinde karışık. Geçersiz konu ya da bozuk sorular: [].
export function konuSeti(konuId, sorular, cevaplar, n = 10) {
  if (typeof konuId !== 'string' || !Object.hasOwn(KONULAR, konuId) || !Array.isArray(sorular)) return [];
  const liste = sorular.filter(s => konulari(s).includes(konuId));
  return havuz(liste, tamSayi(n, 10), nesne(cevaplar) || {});
}
