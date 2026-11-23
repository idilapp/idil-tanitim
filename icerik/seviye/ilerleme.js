// İlerleme, kazanım ve eksik haritası (Görev 7, 21 Kasım 2026; tasarım ICERIK_GENISLEME §4.5 ve §4.6).
// Saf modül: DOM yok, depolama yok, Date.now yok. Tarayıcı tanıtımı ve mobil uygulama aynı dosyayı kullanır.
// Tek doğruluk kaynağı kanat hafızasıdır (h, icerik/filiz/kanat.js): bütün sayılar buradan hesaplanır, ayrı sayaç tutulmaz.
// Birimin durumu yalnız kanat.durum ile okunur; h'nin içine (gunler) bakılmaz.
//
// Boş ya da bozuk girdi (inceleme odağı 1): h, seviye, kazanım, yolculuk ve ders null, metin, sayı, dizi ya da eski kayıt olabilir.
// Hiçbir işlev istisna atmaz; sayılar 0, durumlar 'yok' / 'baslanmadi' döner, çıktıda NaN ya da undefined olmaz.
//
// API
//   seviyeYuzdesi(h, seviye) -> { tam, toplam, yuzde }      toplam = seviye.envanter.length (yazılmamış durakların birimleri dahil);
//                                                            yuzde tam sayı 0–100; %100 yalnız bütün envanter tamken, %0 yalnız hiç yokken.
//   kazanimDurumu(h, kazanim) -> 'kazanildi' | 'yarim' | 'yok'
//   kazanimListesi(h, seviye) -> { id, metin, durum, tam, toplam }[]   (seviyedeki sırayla)
//   kapiDurumu(h, seviye, sinav: { oran, yerlestirme? } | null)
//     -> { acik, yerlestirme, sinav: { gerekli, son, tamam }, birim: { gerekli, oran, tam, toplam, tamam } }
//                                                            seviye.kapi ÇIKIŞ kapısıdır (A1.kapi A2'yi açar). sinav yoksa son null, kapı kapalı.
//                                                            Yerleştirme dalı (Dalga 1 Görev 2): sinav.yerlestirme === true ve oran ≥ sinavEsik
//                                                            ise acik ve yerlestirme true; birim şartı aranmaz. Öteki durumlarda iki şart.
//   sinavEksikleri(sinav, cevaplar, kaynak?) -> { birim, ad, git }[]   seviye sınavının yanlış ya da boş sorularının birimleri, tekil,
//                                                            sınav sırasıyla; git eksikler'deki gibi { tur, id, birim, href | null, ad }.
//   seviyeKilidi(h, seviye, sinav) -> null (ilk seviye) | kapiDurumu(önceki seviye) & { seviye: önceki seviyenin id'si }
//   eksikler(h, seviye, kaynak?) -> { kazanimId, metin, zayif: string[], toplam, git }[]   yalnız 'yarim' kazanımlar, zayıf sayısı çoktan aza
//                                                            git.tur 'pratik' | 'ders' | 'kelime' (sözcüğün kart arkası, #/kelime/<id>)
//   durakDurumu(h, durak, kaynak?) -> { durum, duyulan, tam, toplam, yazili }   durum durağın kendi kanadına (duyum) göre
//   bolumDurumu(h, bolum, ders?, kaynak?) -> { durum, olcu, yapilan, toplam, anlam, tam, bekleyen, yazili }
//                                                            durum bölümün YAZILI derslerinin öğrettiği birimlere (anlam kanadı) göre;
//                                                            ders öğretmiyorsa ders okumaya göre (düzeltme 1, aşağıda)
//   yaziliPay(seviye, kaynak?) -> { yazili, toplam, yazilmamisYuzde }   yazılı duraklardaki birimler / envanter
//   yolculukSirasi(yolculuk, h, duraklar?) -> { d, konum, bitti }   uygulamanın Yolculuk sırası (Görev 3 kuralı, buraya taşındı)
//   yolculukAdresi(d, konum) -> '#/yolculuk/…'   konumYazisi(d, konum) -> 'sayfa 3 / 44' …
//   dersBirimleri(ders, duraklar?) -> string[]   dersin anlam kanadını işlediği birimler (uygulamanın kuralı, buraya taşındı)
//   buradasin({ h, seviye?, yolculuk, ders }, kaynak?) -> { seviye: { id, ad }, yuzde, tam, toplam, yer, sonraki: { ad, href } }
//   birimAdi(birimId) -> 'thank you'
// kaynak = { duraklar: yazılı Yolculuk durakları (icerik/filiz), bolumler: Başlangıç Kitabı bölümleri (icerik/baslangic),
//           kartlar: kelime kartları (icerik/baslangic/kartlar.js KARTLAR) }; testler için. Verilmeyen alan gerçek veriden gelir.
// Durum adları: öğe 'tamam' | 'yarim' | 'baslanmadi' (akis.js parcaDurumu ile aynı); kazanım 'kazanildi' | 'yarim' | 'yok'.
import { SEVIYELER, seviyeBul, birimYeri } from './index.js';
import { durum as kanatDurumu, durakBirimleri } from '../filiz/kanat.js';
import { DURAKLAR } from '../filiz/index.js';
import { BIRIMLER } from '../filiz/birimler.js';
import { BASLANGIC } from '../baslangic/index.js';
import { KARTLAR } from '../baslangic/kartlar.js';
import { akis, konumCoz, konumSirasi, konumKuyrugu } from '../filiz/akis.js';
import { cevapDogruMu } from '../kitap/alistirma.js';

const nesne = x => x !== null && typeof x === 'object' && !Array.isArray(x);
const dizi = x => (Array.isArray(x) ? x : []);
const metinler = x => dizi(x).filter(y => typeof y === 'string' && y);
const hafiza = h => (nesne(h) ? h : {});
const seviyeOf = s => (typeof s === 'string' ? seviyeBul(s) : nesne(s) ? s : undefined);
const KAYNAK = { duraklar: DURAKLAR, bolumler: BASLANGIC.bolumler, kartlar: KARTLAR };
const kaynakOf = k => ({ duraklar: dizi(k?.duraklar ?? KAYNAK.duraklar), bolumler: dizi(k?.bolumler ?? KAYNAK.bolumler),
  kartlar: nesne(k?.kartlar) ? k.kartlar : KAYNAK.kartlar });

// Birimin kanat durumu; bozuk kayıt 'yeni' sayılır (kanat.durum h[id] nesne değilse de 'yeni' döner, h nesne olmalı).
const birimDurumu = (h, id) => { try { return kanatDurumu(h, id); } catch { return 'yeni'; } };
const DUYUMLU = new Set(['duyum', 'tam']);
const ANLAMLI = new Set(['kural', 'tam']);
const ogeDurumu = (yapilan, toplam) => (toplam > 0 && yapilan >= toplam ? 'tamam' : yapilan > 0 ? 'yarim' : 'baslanmadi');

export const birimAdi = id => (typeof id !== 'string' ? '' : BIRIMLER[id]?.en || (id.split(':')[2] || id).replace(/-/g, ' '));

// ---------- seviye yüzdesi ----------
export function seviyeYuzdesi(h, seviye) {
  const s = seviyeOf(seviye), hz = hafiza(h);
  const envanter = metinler(s?.envanter);
  const toplam = envanter.length;
  const tam = envanter.filter(id => birimDurumu(hz, id) === 'tam').length;
  // Yuvarlama uçları yanıltmasın: bir birim bile tamsa en az %1, biri bile eksikse en çok %99.
  const yuzde = !toplam || !tam ? 0 : tam >= toplam ? 100 : Math.min(99, Math.max(1, Math.round((100 * tam) / toplam)));
  return { tam, toplam, yuzde };
}

// ---------- kazanımlar ----------
export function kazanimDurumu(h, kazanim) {
  const hz = hafiza(h), birimler = metinler(kazanim?.birimler);
  if (!birimler.length) return 'yok';
  const d = birimler.map(id => birimDurumu(hz, id));
  if (d.every(x => x === 'tam')) return 'kazanildi';
  return d.some(x => x !== 'yeni') ? 'yarim' : 'yok';
}
export function kazanimListesi(h, seviye) {
  const hz = hafiza(h);
  return dizi(seviyeOf(seviye)?.kazanimlar).filter(nesne).map(k => {
    const birimler = metinler(k.birimler);
    return { id: String(k.id ?? ''), metin: String(k.metin ?? ''), durum: kazanimDurumu(hz, k),
      tam: birimler.filter(id => birimDurumu(hz, id) === 'tam').length, toplam: birimler.length };
  });
}

// ---------- kapı (tasarım §4.5) ----------
// Sınav oranı 0–1 arası sonlu sayı olmalı; değilse "henüz yok" (null). Birim oranı tam sayıyla karşılaştırılır (kayan nokta hatası yok).
export function kapiDurumu(h, seviye, sinav) {
  const s = seviyeOf(seviye);
  const gerekliSinav = Number.isFinite(s?.kapi?.sinavEsik) ? s.kapi.sinavEsik : 0.7;
  const gerekliBirim = Number.isFinite(s?.kapi?.birimOrani) ? s.kapi.birimOrani : 0.8;
  const o = nesne(sinav) ? sinav.oran : undefined;
  const son = typeof o === 'number' && Number.isFinite(o) && o >= 0 && o <= 1 ? o : null;
  const { tam, toplam } = seviyeYuzdesi(h, s);
  const oran = toplam ? tam / toplam : 0;
  const birimTamam = toplam > 0 && tam * 1000 >= toplam * Math.round(gerekliBirim * 1000);
  const sinavTamam = son !== null && Math.round(son * 1000) >= Math.round(gerekliSinav * 1000);
  // Yerleştirme ("Okulda öğrendim", tasarım §4.5): geçen öğrenenin A1 birimleri 'kural' olur (sinav.js yerlestir); kapı sınavla açılır.
  const yerlestirme = sinavTamam && nesne(sinav) && sinav.yerlestirme === true;
  return { acik: yerlestirme || (birimTamam && sinavTamam), yerlestirme, sinav: { gerekli: gerekliSinav, son, tamam: sinavTamam },
    birim: { gerekli: gerekliBirim, oran, tam, toplam, tamam: birimTamam } };
}
// Bir seviyenin giriş kilidi: önceki seviyenin çıkış kapısı. İlk seviyenin kilidi yoktur (null).
export function seviyeKilidi(h, seviye, sinav) {
  const s = seviyeOf(seviye), i = SEVIYELER.findIndex(x => x.id === s?.id);
  if (i <= 0) return null;
  return { ...kapiDurumu(h, SEVIYELER[i - 1], sinav), seviye: SEVIYELER[i - 1].id };
}

// ---------- durak ve bölüm durumu ----------
const yaziliDurak = (id, kaynak) => kaynak.duraklar.find(d => nesne(d) && d.id === id) || null;
const yaziliBolum = (id, kaynak) => kaynak.bolumler.find(b => nesne(b) && b.id === id && dizi(b.dersler).length) || null;
export function durakDurumu(h, durak, kaynak) {
  const hz = hafiza(h), k = kaynakOf(kaynak), birimler = metinler(durak?.birimler);
  const duyulan = birimler.filter(id => DUYUMLU.has(birimDurumu(hz, id))).length;
  const tam = birimler.filter(id => birimDurumu(hz, id) === 'tam').length;
  return { durum: ogeDurumu(duyulan, birimler.length), duyulan, tam, toplam: birimler.length,
    yazili: nesne(durak) && durak.durum !== 'yazilacak' && !!yaziliDurak(durak.id, k) };
}
// Bölüm durumu (Görev 7 düzeltme 1). Müfredat bölüme bugünkü derslerin öğrettiğinden çok birim bağlıyor (ör. selam-sayilar 22, dersler
// 12'sini öğretiyor); bütün listeye göre ölçülen bölüm, dersleri bitse de "Yarım" kalırdı. Bu yüzden:
//   olcu 'birim': yazılı derslerin öğrettiği birimler (dersBirimleri birleşimi ∩ müfredatın bölüm birimleri) payda; durum bunların anlam
//     kanadına göre. bekleyen = müfredatta olup yazılı derslerin henüz öğretmediği birim sayısı ("N birim sonraki derslerde").
//   olcu 'ders': yazılı dersler hiç birim öğretmiyorsa (ör. renk-sifat) ders başına: okundu ya da alıştırmaların ≥ %80'i doğru.
//   Yazılmamış bölüm: müfredatın bütün birimleri, olcu 'birim'.
// Seviye yüzdesi, kapı ve kazanımlar müfredatın tam listesiyle kalır (kapı dürüst kalsın).
// ders: uygulamanın ders defteri (D.ders: { okunan: { 'b/d': tarih }, alistirma: { 'b/d': { [j]: { d } } } }); bozuksa boş sayılır.
const GECME = 0.8; // uygulama/alistirma.js ESIK ile aynı (ICERIK_GENISLEME §4.3)
function dersBittiMi(ders, bId, d) {
  const anahtar = `${bId}/${d.id}`;
  if (nesne(ders?.okunan) && ders.okunan[anahtar]) return true;
  const n = dizi(d.alistirmalar).filter(nesne).length;
  const L = nesne(ders?.alistirma) && nesne(ders.alistirma[anahtar]) ? ders.alistirma[anahtar] : {};
  const dogru = Object.values(L).filter(c => nesne(c) && c.d === true).length;
  return n > 0 && dogru * 100 >= n * Math.round(GECME * 100);
}
export function bolumDurumu(h, bolum, ders, kaynak) {
  const hz = hafiza(h), k = kaynakOf(kaynak), mufredat = metinler(bolum?.birimler);
  const yb = nesne(bolum) && bolum.durum !== 'yazilacak' ? yaziliBolum(bolum.id, k) : null;
  const dersler = yb ? dizi(yb.dersler).filter(nesne) : [];
  const ogretilen = yb ? [...new Set(dersler.flatMap(d => dersBirimleri(d, k.duraklar)))].filter(id => mufredat.includes(id)) : mufredat;
  const bekleyen = mufredat.filter(id => !ogretilen.includes(id)).length;
  const anlam = ogretilen.filter(id => ANLAMLI.has(birimDurumu(hz, id))).length;
  const tam = ogretilen.filter(id => birimDurumu(hz, id) === 'tam').length;
  if (yb && !ogretilen.length) {
    const yapilan = dersler.filter(d => dersBittiMi(ders, yb.id, d)).length;
    return { durum: ogeDurumu(yapilan, dersler.length), olcu: 'ders', yapilan, toplam: dersler.length, anlam, tam, bekleyen, yazili: true };
  }
  return { durum: ogeDurumu(anlam, ogretilen.length), olcu: 'birim', yapilan: anlam, toplam: ogretilen.length, anlam, tam, bekleyen, yazili: !!yb };
}

// Seviyenin yazılmış payı: yazılı (içeriği olan) durakların ev birimleri / envanter. Kapı kartında "neden %80'e henüz ulaşılamaz".
export function yaziliPay(seviye, kaynak) {
  const s = seviyeOf(seviye), k = kaynakOf(kaynak);
  const toplam = metinler(s?.envanter).length;
  const yazili = dizi(s?.duraklar).filter(d => nesne(d) && d.durum !== 'yazilacak' && yaziliDurak(d.id, k)).flatMap(d => metinler(d.birimler)).length;
  return { yazili, toplam, yazilmamisYuzde: toplam ? Math.round((100 * (toplam - yazili)) / toplam) : 0 };
}

// ---------- Yolculuk sırası (Görev 3 kuralı; uygulamadan taşındı) ----------
// yolculuk: uygulamanın D.yolculuk kaydı ({ durak, sayfa } sahne sayfası ya da { durak, sayfa: '<kuyruk>', parca: 'pratik'|'hikaye' }).
// Kayıttaki konum durağın son ekranı değilse orası; son ekranıysa sonraki durak; son durağın sonuysa aynı durağın başı (bitti).
// Kayıt yoksa duyumu eksik ilk durak; hepsi duyulduysa ilk durak (bitti). Eski ya da bozuk kayıt: sahnenin son sayfası ve ötesindeki
// sayı (parca yok) durağı bitmiş sayar, ötekiler durağın başına döner. bitti: yazılı durakların hepsi geçildi.
export const ILK = Object.freeze({ parca: 'sahne', no: 0 });
export function yolculukSirasi(yolculuk, h, duraklar = DURAKLAR) {
  const D = dizi(duraklar).filter(nesne), hz = hafiza(h);
  if (!D.length) return { d: null, konum: ILK, bitti: true };
  const s = nesne(yolculuk) ? yolculuk : null;
  const d = s && D.find(x => x.id === s.durak);
  if (d) {
    const A = akis(d), konum = konumCoz(d, s.parca || 'sahne', s.sayfa);
    const i = konum ? konumSirasi(d, konum) : !s.parca && Number(s.sayfa) >= A.length - 1 ? A.length - 1 : 0;
    if (i < A.length - 1) return { d, konum: A[Math.max(0, i)] || ILK, bitti: false };
    const sonraki = D[D.indexOf(d) + 1];
    return sonraki ? { d: sonraki, konum: ILK, bitti: false } : { d, konum: ILK, bitti: true };
  }
  const eksik = D.find(x => { const b = durakBirimleri(x); return b.filter(id => DUYUMLU.has(birimDurumu(hz, id))).length < b.length; });
  return { d: eksik || D[0], konum: ILK, bitti: !eksik };
}
export const yolculukAdresi = (d, k) => `#/yolculuk/${d.id}/${k.parca === 'sahne' ? k.no : `${k.parca}/${konumKuyrugu(k)}`}`;
export function konumYazisi(d, k) {
  if (k.parca === 'pratik') return `pratik ${k.k + 1} / ${dizi(d.pratik).length}`;
  if (k.parca === 'hikaye') {
    const hk = dizi(d.hikayeler)[k.h] || {};
    return k.soru !== undefined ? `hikâye ${k.h + 1} · soru ${k.soru + 1} / ${dizi(hk.sorular).length}` : `hikâye ${k.h + 1} · sayfa ${k.s + 1} / ${dizi(hk.sayfalar).length}`;
  }
  return `sayfa ${k.no + 1} / ${dizi(d.sayfalar).length}`;
}
const PARCA_ADI = { sahne: 'Sahne', pratik: 'Pratik', hikaye: 'Hikâye' };
const parcaHedefi = (d, parca) => (parca === 'pratik' ? `${d.ad} pratiği` : parca === 'hikaye' ? `${d.ad} hikâyeciği` : `${d.ad} sahnesi`);

// ---------- ders birimleri (uygulamadan taşındı) ----------
// Dersin `birimler` alanı doluysa o; alıştırmalı derste (Görev 5) yalnız alan; alıştırmasız ve alanı boş derste dersin `duy` bloğunun
// gösterdiği Yolculuk sayfasının birimleri (gor: yeni; sec ve yazi: birimler).
export function dersBirimleri(d, duraklar = DURAKLAR) {
  if (!nesne(d)) return [];
  const alan = metinler(d.birimler);
  if (alan.length) return [...new Set(alan)];
  if (dizi(d.alistirmalar).some(nesne)) return [];
  const sira = [];
  for (const x of dizi(d.bloklar)) {
    if (!nesne(x) || x.tur !== 'duy') continue;
    const p = dizi(dizi(duraklar).find(y => nesne(y) && y.id === x.durak)?.sayfalar)[x.sayfa];
    if (nesne(p)) metinler(p.tur === 'gor' ? [].concat(p.yeni || []) : p.birimler).forEach(b => sira.includes(b) || sira.push(b));
  }
  return sira;
}
const dersAdi = (b, d) => `Ders ${b.no}${String(d.id).toUpperCase()} · ${d.baslik}`;
const dersHref = (b, d) => `#/ders/${b.id}/${d.id}`;

// ---------- eksikler (tasarım §4.6 "Eksiklerin") ----------
// git hedefi zayıf birimin eksik kanadından seçilir (Görev 7 kontrolcü kararı):
//   duyum eksik → { tur: 'pratik', id: <ev durağı> }: durağın pratiği; durağın pratiği yoksa sahnesi (tur 'pratik' kalır).
//   anlam eksik, sözcük birimi (en:s:) ve kartı var → { tur: 'kelime', id: <birimId> }: kart arkası, #/kelime/<birimId>
//     (Dalga 1 Görev 1; IKI_KANAT §11/2: sözcüğün anlam kanadı kart arkasıyla kazanılır). Dersten önce gelir.
//   anlam eksik → { tur: 'ders', id: '<bölüm>/<ders>' }: dersBirimleri'nde birimi listeleyen kitap sırasıyla ilk ders.
//   anlam eksik, kart ve ders yok → { tur: 'pratik', id: <ev durağı> } (yedek hedef).
//   Yeni birimde iki kanat da eksiktir: önce duyum (doğal yol), sonra anlam (kart, sonra ders) denenir.
// Hangi zayıf birim: kazanımın bütün zayıf birimlerinin hedefleri şu sırayla denenir ve açılabilir (yazılı) ilk hedef seçilir:
//   1) eksik kanadı gerçekten tamamlayan hedef (duyum için durak, anlam için ders); içinde önce yarım birimler (tek kanadı eksik,
//      tamamlanmaya en yakın), sonra yeniler, kazanımdaki sırayla;
//   2) yedek hedef (anlam eksik ama ders yok → durağın pratiği), aynı sırayla.
// Böylece öğrenen, anlamı hiçbir derste olmayan bir birim yüzünden bitirdiği pratiğe geri gönderilmez; başka bir birimin gerçek
// eksiği varsa oraya gider. Hiçbir hedef yazılı değilse ilk adayın hedefi href: null ile döner ("yazılacak").
// git = { tur: 'pratik' | 'ders' | 'kelime', id, birim, href: string | null, ad }.
function hedefler(id, durumu, kaynak) {
  const H = [];
  const yer = birimYeri(id);
  const durakHedefi = () => {
    if (!yer) return null;
    const d = yaziliDurak(yer.durak, kaynak);
    const seviyeDurak = seviyeBul(yer.seviye)?.duraklar.find(x => x.id === yer.durak);
    const ad = d?.ad || seviyeDurak?.ad || yer.durak;
    if (!d) return { tur: 'pratik', id: yer.durak, birim: id, href: null, ad: `${ad} · yazılacak` };
    const pratikli = dizi(d.pratik).some(nesne);
    return { tur: 'pratik', id: d.id, birim: id, href: pratikli ? `#/yolculuk/${d.id}/pratik/0` : `#/yolculuk/${d.id}/0`, ad: parcaHedefi(d, pratikli ? 'pratik' : 'sahne') };
  };
  const dersHedefi = () => {
    for (const b of kaynak.bolumler) {
      if (!nesne(b)) continue;
      for (const d of dizi(b.dersler)) {
        if (nesne(d) && dersBirimleri(d, kaynak.duraklar).includes(id)) return { tur: 'ders', id: `${b.id}/${d.id}`, birim: id, href: dersHref(b, d), ad: dersAdi(b, d) };
      }
    }
    return null;
  };
  // Sözcük biriminin kart arkası (kartı yoksa hedef yok; kartsız sözcükte bugünkü kural sürer).
  const kelimeHedefi = () => (id.startsWith('en:s:') && Object.prototype.hasOwnProperty.call(kaynak.kartlar, id) && nesne(kaynak.kartlar[id])
    ? { tur: 'kelime', id, birim: id, href: `#/kelime/${id}`, ad: `Kelime kartı · ${birimAdi(id)}` } : null);
  // uygun: hedef eksik kanadı tamamlar mı (duyum eksik → durak; anlam eksik → kart ya da ders). Yedek hedef uygun: false.
  const isaretle = (x, uygun) => (x ? { x, uygun } : null);
  if (durumu === 'kural') H.push(isaretle(durakHedefi(), true));
  else if (durumu === 'duyum') H.push(isaretle(kelimeHedefi(), true) || isaretle(dersHedefi(), true) || isaretle(durakHedefi(), false));
  else H.push(isaretle(durakHedefi(), true), isaretle(kelimeHedefi(), true), isaretle(dersHedefi(), true));
  return H.filter(Boolean);
}
export function eksikler(h, seviye, kaynak) {
  const hz = hafiza(h), k = kaynakOf(kaynak);
  const liste = [];
  dizi(seviyeOf(seviye)?.kazanimlar).filter(nesne).forEach((kz, sira) => {
    if (kazanimDurumu(hz, kz) !== 'yarim') return;
    const birimler = metinler(kz.birimler);
    const zayif = birimler.filter(id => birimDurumu(hz, id) !== 'tam');
    const aday = [...zayif.filter(id => birimDurumu(hz, id) !== 'yeni'), ...zayif.filter(id => birimDurumu(hz, id) === 'yeni')];
    const H = aday.flatMap(id => hedefler(id, birimDurumu(hz, id), k));
    const secilen = H.find(y => y.uygun && y.x.href) || H.find(y => y.x.href) || H[0];
    const git = secilen ? secilen.x : { tur: 'pratik', id: '', birim: aday[0] || '', href: null, ad: 'yazılacak' };
    liste.push({ kazanimId: String(kz.id ?? ''), metin: String(kz.metin ?? ''), zayif, toplam: birimler.length, git, sira });
  });
  return liste.sort((a, b) => b.zayif.length - a.zayif.length || a.sira - b.sira).map(({ sira, ...x }) => x);
}

// ---------- seviye sınavının yanlışları (Dalga 1 Görev 2) ----------
// Yanlış ya da boş cevaplanan soruların birimleri (soru.birimler), sınav sırasıyla ve tekil. Gideceği yer eksikler'in hedef
// kuralıyla seçilir: dinleme sorusunda önce duyum (durağın pratiği ya da sahnesi), kural sorusunda önce anlam (sözcüğün kartı,
// sonra ders); o yer yazılı değilse öteki kanadın yeri, o da yoksa href: null ("yazılacak").
// Doğruluk kuralı sinav.js sinavPuani ile aynıdır (icerik/kitap/alistirma.js cevapDogruMu). cevaplar { [j]: cevap } ya da dizi.
export function sinavEksikleri(sinav, cevaplar, kaynak) {
  const k = kaynakOf(kaynak);
  const S = dizi(Array.isArray(sinav) ? sinav : nesne(sinav) ? sinav.sinav : null).filter(nesne);
  const C = Array.isArray(cevaplar) || nesne(cevaplar) ? cevaplar : {};
  const liste = [], gorulen = new Set();
  S.forEach((x, j) => {
    const c = C[j];
    if (c !== undefined && c !== null && cevapDogruMu(x, c)) return;
    for (const id of metinler(x.birimler)) {
      if (gorulen.has(id)) continue;
      gorulen.add(id);
      const H = [...hedefler(id, x.tur === 'dinle' ? 'kural' : 'duyum', k), ...hedefler(id, 'yeni', k)];
      const secilen = H.find(y => y.uygun && y.x.href) || H.find(y => y.x.href) || H[0];
      liste.push({ birim: id, ad: birimAdi(id), git: secilen ? secilen.x : { tur: 'pratik', id: '', birim: id, href: null, ad: 'yazılacak' } });
    }
  });
  return liste;
}

// ---------- Buradasın (tasarım §4.6) ----------
// Yer: seviyenin omurgası Yolculuk durağıdır. Yolculuk kaydı geçerliyse (ya da Ders'e hiç başlanmadıysa) yolculukSirasi'nın konumu;
// yalnız Ders'ten başlayan (D.yolculuk yok, D.ders.son geçerli) için kaldığı ders. Sonraki adım:
//   Yolculuk konumu → o ekran ("Pazar pratiği"); yazılı durakların hepsi geçildiyse okunmamış ilk ders, o da yoksa Yolum (#/yolum).
//   Ders konumu → okunmamış sıradaki ders (uygulamanın dSiradaki kuralı: önce kalınan bölüm, sonra kitap sırası); hepsi okunduysa Yolculuk.
// seviye verilmezse yerin seviyesi (durak ya da bölüm hangi seviyedeyse), o da yoksa ilk seviye.
// Döner: { seviye: { id, ad }, yuzde, tam, toplam, yer, sonraki: { ad, href } }
//   yer = { tur: 'durak', baslandi, bitti, metin: 'Durak 3 · Pazar', parca: 'Sahne'|'Pratik'|'Hikâye', ayrinti, durak: { id, no, ad } }
//       | { tur: 'ders', baslandi: true, bitti: false, metin: 'Bölüm 1 · Selam ve sayılar', parca: 'Ders', ayrinti, bolum, ders }
function siradakiDers(ders, kaynak) {
  const okunan = nesne(ders?.okunan) ? ders.okunan : {};
  const yazili = kaynak.bolumler.filter(b => nesne(b) && dizi(b.dersler).some(nesne));
  const sonB = nesne(ders?.son) ? yazili.find(b => b.id === ders.son.bolum) : null;
  for (const b of sonB ? [sonB, ...yazili.filter(x => x !== sonB)] : yazili) {
    const d = dizi(b.dersler).find(x => nesne(x) && !okunan[`${b.id}/${x.id}`]);
    if (d) return { b, d };
  }
  return null;
}
const buyukHarf = m => m.charAt(0).toLocaleUpperCase('tr') + m.slice(1);
export function buradasin(girdi, kaynak) {
  const { h, seviye, yolculuk, ders } = nesne(girdi) ? girdi : {};
  const hz = hafiza(h), k = kaynakOf(kaynak), dr = nesne(ders) ? ders : {};
  const yKaydi = nesne(yolculuk) && k.duraklar.some(d => nesne(d) && d.id === yolculuk.durak);
  const sonB = nesne(dr.son) ? k.bolumler.find(b => nesne(b) && b.id === dr.son.bolum) : null;
  const sonD = sonB && dizi(sonB.dersler).find(x => nesne(x) && x.id === dr.son.ders);
  let yer, sonraki, seviyeId;
  if (!yKaydi && sonD) {
    const sira = siradakiDers(dr, k);
    yer = { tur: 'ders', baslandi: true, bitti: false, metin: `Bölüm ${sonB.no} · ${sonB.title}`, parca: 'Ders', ayrinti: dersAdi(sonB, sonD),
      bolum: { id: sonB.id, no: sonB.no, ad: sonB.title }, ders: { id: sonD.id, ad: sonD.baslik } };
    seviyeId = SEVIYELER.find(s => s.bolumler.some(b => b.id === sonB.id))?.id;
    if (sira) sonraki = { ad: dersAdi(sira.b, sira.d), href: dersHref(sira.b, sira.d) };
    else {
      const y = yolculukSirasi(null, hz, k.duraklar);
      sonraki = y.d ? { ad: parcaHedefi(y.d, y.konum.parca), href: yolculukAdresi(y.d, y.konum) } : { ad: 'Yolum', href: '#/yolum' };
    }
  } else {
    const y = yolculukSirasi(yKaydi ? yolculuk : null, hz, k.duraklar);
    if (!y.d) {
      yer = { tur: 'durak', baslandi: false, bitti: true, metin: 'Yolculuk', parca: 'Sahne', ayrinti: 'durak yok', durak: { id: '', no: 0, ad: '' } };
      sonraki = { ad: 'Yolum', href: '#/yolum' };
    } else {
      const s = seviyeOf(seviye);
      const baslandi = yKaydi || metinler(s?.envanter || SEVIYELER[0].envanter).some(id => birimDurumu(hz, id) !== 'yeni') || !!sonD;
      yer = { tur: 'durak', baslandi, bitti: y.bitti, metin: `Durak ${y.d.no} · ${y.d.ad}`, parca: PARCA_ADI[y.konum.parca] || 'Sahne',
        ayrinti: y.bitti ? 'yazılı duraklar bitti' : !baslandi ? 'başlanmadı'
          : y.konum.parca === 'sahne' ? `Sahne · ${konumYazisi(y.d, y.konum)}` : buyukHarf(konumYazisi(y.d, y.konum)),
        durak: { id: y.d.id, no: y.d.no, ad: y.d.ad } };
      seviyeId = SEVIYELER.find(x => x.duraklar.some(d => d.id === y.d.id))?.id;
      if (y.bitti) {
        const sira = siradakiDers(dr, k);
        sonraki = sira ? { ad: dersAdi(sira.b, sira.d), href: dersHref(sira.b, sira.d) } : { ad: 'Yolum: eksiklerini tamamla', href: '#/yolum' };
      } else sonraki = { ad: parcaHedefi(y.d, y.konum.parca), href: yolculukAdresi(y.d, y.konum) };
    }
  }
  const sv = seviyeOf(seviye) || seviyeBul(seviyeId) || SEVIYELER[0];
  const { yuzde, tam, toplam } = seviyeYuzdesi(hz, sv);
  return { seviye: { id: String(sv.id), ad: String(sv.ad) }, yuzde, tam, toplam, yer, sonraki };
}
