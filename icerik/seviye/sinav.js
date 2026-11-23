// Seviye sonu sınavı: biçim, puan, kayıt okuyucusu ve yerleştirme (Dalga 1 Görev 2, 23 Kasım 2026; tasarım ICERIK_GENISLEME §4.5).
// Saf modül: DOM yok, depolama yok, Date.now yok. Tarayıcı tanıtımı ve mobil uygulama aynı dosyayı kullanır.
//
// Biçim
//   seviye.sinav: SinavSorusu[]   SinavSorusu = Alistirma & { birimler: string[] }
//     Alistirma: Ders alıştırması (../baslangic/README.md §2a; doğruluk kuralı ../kitap/alistirma.js): tur 'sec' | 'yaz' | 'duzelt' | 'cevir' | 'dinle'.
//     birimler: sorunun ölçtüğü birimler (en:s|k|y:ad); seviyenin envanterinden olmalı. Yanlış cevabın dersi ya da durağı buradan bulunur.
//   Dolu sınav tam SINAV_SAYI (40) öğedir: en az DINLEME_EN_AZ (16) 'dinle' (dinleme), gerisi kural. Bugün (Görev 2) A1 ve A2'nin
//   sinav alanı boştur; gerçek 40 soruyu Görev 15 yazar. Boş sınav "henüz hazır değil" sayılır ve denetleyiciden geçer.
//
// API
//   SINAV_SAYI, DINLEME_EN_AZ
//   sinavSorulari(seviyeYaDaDizi) -> SinavSorusu[]          bozuk girdide [] (nesne olmayan öğeler atılır)
//   sinavHazirMi(seviyeYaDaDizi) -> boolean                  en az bir soru var mı
//   sinavPuani(cevaplar, sinav) -> { dogru, n, oran }        cevaplar: dizi ya da { [j]: cevap }; boş cevap yanlış sayılır.
//                                                            oran = dogru / n (n = 0 ise 0). 40'ta 28 doğru → oran 0.7.
//   sinavDenetle(sinav, seviye?, { tam = true }?) -> { kod, yer, mesaj }[]
//                                                            kodlar: seviye-sinav-sayi (tam iken 40 öğe ve ≥ 16 dinleme),
//                                                            seviye-sinav-bicim (tür, alan, şık, birimler), seviye-sinav-birim
//                                                            (birim seviyenin envanterinde yok). Boş sınavda hata yok.
//   sinavKaydi(x) -> { oran, yerlestirme, tarih, son: { oran, yerlestirme, tarih } } | null
//                                                            durum katmanının kaydını (nesne ya da JSON metni) doğrular; bozuk ya da
//                                                            eksik kayıtta null (istisna atmaz). oran 0–1 arası sonlu sayı;
//                                                            yerlestirme boolean; tarih 'YYYY-MM-DD'. Üstteki alanlar EN İYİ sonuçtur
//                                                            (kapı bunu okur); son: son deneme (yoksa ya da bozuksa en iyinin kopyası).
//   sinavKaydiBirlestir(eski, yeni, esik = 0.7) -> kayıt     en iyi sonuç tutulur, açılan kapı kapanmaz (düzeltme 1, kontrolcü kararı):
//                                                            sıra önce "yerleştirmeyle eşiği geçti mi", sonra oran. Yeni deneme
//                                                            yalnız daha iyiyse en iyinin yerine geçer; son her zaman yeni denemedir.
//                                                            Eşitlikte eski kalır (ilk başarının tarihi).
//   yerlestir(h, seviye, gun) -> Hafiza                      seviye envanterindeki her birime anlamIsle(h, id, 'yerlestirme/<seviyeId>',
//                                                            true, gun): duyumu olmayan birim 'kural' (anlam tamam, duyum bekliyor),
//                                                            duyumu olan 'tam' olur. Girdi değişmez; bozuk h boş hafıza sayılır.
//                                                            Yalnız yerleştirme sınavı geçilince çağrılır (inceleme odağı 5).
import { anlamIsle } from '../filiz/kanat.js';
import { cevapDogruMu } from '../kitap/alistirma.js';

export const SINAV_SAYI = 40;
export const DINLEME_EN_AZ = 16;

const nesne = x => x !== null && typeof x === 'object' && !Array.isArray(x);
const dizi = x => (Array.isArray(x) ? x : []);
const doluMetin = x => typeof x === 'string' && x.trim().length > 0;

export const sinavSorulari = s => dizi(Array.isArray(s) ? s : nesne(s) ? s.sinav : null).filter(nesne);
export const sinavHazirMi = s => sinavSorulari(s).length > 0;

export function sinavPuani(cevaplar, sinav) {
  const S = sinavSorulari(sinav);
  const C = Array.isArray(cevaplar) || nesne(cevaplar) ? cevaplar : {};
  const dogru = S.filter((x, j) => C[j] !== undefined && C[j] !== null && cevapDogruMu(x, C[j])).length;
  return { dogru, n: S.length, oran: S.length ? dogru / S.length : 0 };
}

// ---------- denetim ----------
const ALAN = { sec: 'soru', yaz: 'soru', duzelt: 'cumle', cevir: 'tr', dinle: 'ses' }; // tür → öğeyi taşıyan alan (Ders ile aynı)
const BIRIM = /^en:[sky]:[a-z0-9][a-z0-9'-]*$/;
export function sinavDenetle(sinav, seviye, { tam = true } = {}) {
  const H = [];
  const hata = (kod, yer, mesaj) => H.push({ kod, yer, mesaj });
  if (sinav === undefined || sinav === null) return H;
  if (!Array.isArray(sinav)) { hata('seviye-sinav-bicim', 'sinav', 'sinav dizi olmalı'); return H; }
  if (!sinav.length) return H; // henüz yazılmadı (Görev 15)
  const envanter = new Set(dizi(seviye?.envanter));
  if (tam) {
    if (sinav.length !== SINAV_SAYI) hata('seviye-sinav-sayi', 'sinav', `${SINAV_SAYI} öğe olmalı (şu an ${sinav.length})`);
    const dinleme = sinav.filter(x => nesne(x) && x.tur === 'dinle').length;
    if (dinleme < DINLEME_EN_AZ) hata('seviye-sinav-sayi', 'sinav', `en az ${DINLEME_EN_AZ} dinleme (dinle) olmalı (şu an ${dinleme})`);
  }
  sinav.forEach((x, j) => {
    const yer = `sinav[${j}]`;
    const B = m => hata('seviye-sinav-bicim', yer, m);
    if (!nesne(x)) { B('öğe nesne değil'); return; }
    const alan = ALAN[x.tur];
    if (!alan) { B(`bilinmeyen tür: ${x.tur} (${Object.keys(ALAN).join(', ')})`); return; }
    if (!doluMetin(x[alan])) B(`${alan} yok`);
    if (!doluMetin(x.aciklama)) B('aciklama yok');
    if (x.tur === 'yaz') {
      if (doluMetin(x.soru) && (x.soru.match(/-{4}/g) || []).length !== 1) B('yaz sorusunda tek bir ---- boşluğu olmalı');
      if (!Array.isArray(x.cevaplar) || !x.cevaplar.length || !x.cevaplar.every(doluMetin)) B('cevaplar en az bir dolu metin olmalı');
    } else if (!Array.isArray(x.secenekler) || x.secenekler.length < 2 || x.secenekler.length > 5) B('secenekler 2–5 olmalı');
    else {
      if (!Number.isInteger(x.dogru) || x.dogru < 0 || x.dogru >= x.secenekler.length) B(`dogru geçerli bir şık dizini değil (${x.dogru})`);
      if (new Set(x.secenekler).size !== x.secenekler.length) B('aynı şık iki kez');
    }
    if (!Array.isArray(x.birimler) || !x.birimler.length) { B('birimler boş ya da dizi değil'); return; }
    x.birimler.forEach((b, k) => {
      if (typeof b !== 'string' || !BIRIM.test(b)) B(`birimler[${k}] en:s|k|y:ad biçiminde değil: ${JSON.stringify(b)}`);
      else if (seviye && !envanter.has(b)) hata('seviye-sinav-birim', yer, `${b} ${seviye.id ?? 'seviye'} envanterinde yok`);
    });
  });
  return H;
}

// ---------- kayıt ----------
const TARIH = /^\d{4}-\d{2}-\d{2}$/;
const deneme = k => {
  if (!nesne(k)) return null;
  const { oran, yerlestirme, tarih } = k;
  if (typeof oran !== 'number' || !Number.isFinite(oran) || oran < 0 || oran > 1) return null;
  if (typeof yerlestirme !== 'boolean') return null;
  if (typeof tarih !== 'string' || !TARIH.test(tarih)) return null;
  return { oran, yerlestirme, tarih };
};
export function sinavKaydi(x) {
  let k = x;
  if (typeof k === 'string') { try { k = JSON.parse(k); } catch { return null; } }
  const enIyi = deneme(k);
  if (!enIyi) return null;
  return { ...enIyi, son: deneme(k.son) || { ...enIyi } };
}
// Sınav şartı tam sayıyla karşılaştırılır (ilerleme.js kapiDurumu ile aynı: binde bir duyarlık).
const gecti = (oran, esik) => Math.round(oran * 1000) >= Math.round(esik * 1000);
const sira = (k, esik) => [k.yerlestirme && gecti(k.oran, esik) ? 1 : 0, Math.round(k.oran * 1000)];
export function sinavKaydiBirlestir(eski, yeni, esik = 0.7) {
  const y = deneme(yeni);
  const e = sinavKaydi(eski);
  const es = Number.isFinite(esik) ? esik : 0.7;
  if (!y) return e;
  if (!e) return { ...y, son: { ...y } };
  const [a1, a2] = sira(y, es), [b1, b2] = sira(e, es);
  const dahaIyi = a1 > b1 || (a1 === b1 && a2 > b2);
  const enIyi = dahaIyi ? y : { oran: e.oran, yerlestirme: e.yerlestirme, tarih: e.tarih };
  return { ...enIyi, son: { ...y } };
}

// ---------- yerleştirme ----------
const sayac = x => typeof x === 'number' && Number.isFinite(x) && x >= 0;
const saglamKayit = k => nesne(k) && sayac(k.d) && sayac(k.a) && nesne(k.gunler);
const onar = k => (nesne(k) ? { ...k, d: sayac(k.d) ? k.d : 0, a: sayac(k.a) ? k.a : 0, gunler: nesne(k.gunler) ? k.gunler : {} } : { d: 0, a: 0, gunler: {} });
export function yerlestir(h, seviye, gun) {
  let hz = nesne(h) ? h : {};
  const id = nesne(seviye) && typeof seviye.id === 'string' ? seviye.id : '';
  const envanter = dizi(seviye?.envanter).filter(x => typeof x === 'string' && x);
  if (!id || !envanter.length) return hz;
  const anahtar = `yerlestirme/${id}`;
  for (const b of envanter) {
    // Bozuk birim kaydı onarılır (düzeltme 1, Minor 3): nesne olmayan kayıt boş sayılır; d ya da a sonlu sayı (≥ 0) değilse 0,
    // gunler nesne değilse {}. Sağlam alan (ör. duyum sayısı) korunur. kanat.anlamIsle sağlam kayıt bekler; yoksa a += 1 NaN olur.
    if (Object.prototype.hasOwnProperty.call(hz, b) && !saglamKayit(hz[b])) hz = { ...hz, [b]: onar(hz[b]) };
    hz = anlamIsle(hz, b, anahtar, true, gun);
  }
  return hz;
}
