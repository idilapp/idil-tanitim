// Öğretmen yönlendirmesi (kurucu geri bildirimi, 23 Kasım 2026; brif ek-ogretmen-mantik-brief.md).
// Saf modül: DOM yok, depolama yok, Date.now yok. Tarayıcı tanıtımı ve mobil uygulama aynı dosyayı kullanır.
// Öğrenen durak durak ilerler; her durağın sabit yolu: sahne → pratik → hikâye → ders (kalıp ve yapıların kuralı, anlam kanadı)
// → kelime kartları (sözcüklerin kart arkası, anlam kanadı). Öğretmen her an yalnız tek bir "şimdi" adımı gösterir.
// Yazılı durakların hepsi bitince adım seviye sonu sınavıdır; sınav yazılmamışsa "Yeni duraklar yolda" (eksik varsa Yolum).
//
// API
//   ogretmen(girdi, kaynak?) -> { seviye: { id, ad, yuzde, tam, toplam }, durak: { id, no, ad, ilerleme } | null, adimlar: Adim[],
//                                 simdi: Adim | null, yapilan: string, soz: string, bitti: boolean }
//     durak.ilerleme = { tamam, toplam, oran } (ilerleme göstergesi, heyet kararı ve kurucu onayı 23 Kasım 2026; ek-gosterge-brief.md):
//       toplam = adimlar.length; tamam = durumu 'tamam' olan adım sayısı; oran = adımların Adim.oran ortalaması (0–1, sonlu).
//   durakIlerlemeleri(girdi, kaynak?) -> { [durakId]: { tamam, toplam, oran } }   yazılı her durak için aynı ölçü (Yolum'daki durak
//     listesi "Bitti" yazısını bununla verir: yalnız tamam === toplam iken; durakDurumu'nun 'tamam'ı ekranda "Dinleme bitti"dir).
//   adimBitince(girdi, kaynak?, bitenTur) -> { kutlama: string, sonraki: Adim | null }
//   adimBitince(girdi, kaynak?, bitenTur, durakId?) -> { kutlama, sonraki, bitti? } (bitti: adım tamam mı; Tur 2: adım gerçekten bitmediyse kutlama ara durumu
//     söyler, ör. "Sahnede 3 soru kaldı.", ve sonraki aynı adımın kalan yeridir; durakId verilirse o durağın adımı).
//   Adim = { tur: 'sahne'|'pratik'|'hikaye'|'ders'|'kart'|'sinav'|'yolum', ad, durum: 'tamam'|'simdi'|'sonra',
//            ilerleme: { yapilan, toplam, birim }, href: string | null, sure: dakika (tam sayı ≥ 1), neden }
//   Adim.oran: adımın doluluk oranı (0–1, sonlu): durumu 'tamam' olan adım 1 (yoklamayla geçilen adımın ham ilerlemesi 0/36 olsa
//     da); öteki adım yapilan / toplam, 0–1 arasına kısılır; toplam 0 ise 0.
//   ilerleme.birim: sayılan şeyin adı ('sayfa' | 'ekran' | 'ders' | 'kart' | 'soru' | 'eksik'); ekranda "1/3 ders" gibi yazılır.
// girdi = { h, yolculuk, ders, sinav, gecilen }: buradasin() girdisi (kanat hafızası, D.yolculuk, D.ders), seviye sınavı kaydı
//   (sinav.js sinavKaydi biçimi { oran, yerlestirme, tarih } ya da null) ve geçilen durakların kimlikleri (string[]; yoklama ya da
//   yerleştirmeyle geçilen duraklar). gecilen'i uygulama kendi kaydından doldurur (ekran işi, 23 Kasım 2026); öğretmen hafızadan
//   tahmin etmez. Verilmezse boş sayılır.
//   yerlesilen (Tur 3): yerleştirme sınavıyla geçilen durakların kimlikleri (string[]); bu durakların ders adımı da tamamdır
//   (yerleştirme sınavı kuralları ölçtü). Yoklamayla geçilen durakta dersler yine beklenir. Verilmezse boş sayılır.
// kaynak = { duraklar, bolumler, kartlar, sinav? }: ilerleme.js'teki gibi; testler için. sinav: seviye sınavının soru dizisi
//   (verilmezse seviye nesnesinin sinav alanı; uygulama örnek sınavı buradan verebilir). Verilmeyen alan gerçek veriden gelir.
//
// Adım kuralları (brif):
//   sahne   tamam: akis.sahneBitti (Tur 2: bütün sec sayfaları bir kez CEVAPLANDI, doğru ya da yanlış; duyum eşiği ayrı bir şeydir).
//           ilerleme: görülen sayfa / sayfa (son yapılan sec sayfasına ya da D.yolculuk konumuna kadarki sayfalar).
//   pratik, hikâye: akis.parcaDurumu durumu; ilerleme etkileşim ekranı (yapılan / etkileşim); href akis.parcaEksigi. Parça yoksa adım yok.
//   Geçilen durak (girdi.gecilen'de): sahne, pratik ve hikâye tamam sayılır; öğretmen geri çağırmaz. Yerleştirmede anlam kanadı
//   işlendiği için ders ve kart da tamamdır; böylece öğretmen geçilmemiş ilk durağa gider. Bütün birimleri duyumda tamam olan ama
//   gecilen'de olmayan durak geçilmiş sayılmaz (sahneyi iki gün dinleyen öğrenen pratiği atlamaz).
//   ders    (Tur 3 kararı) durağın dersleri: ev durağı bu durak olan yazılı dersler (dersEvi), bölüm ve ders sırasıyla. Dersin ev
//           durağı, birimler alanındaki birimlerin ev durakları içinde en geç olanıdır: öğrenen dersin bütün birimlerini derse
//           gelmeden duymuş olur. Ders tamamı uygulamanın ders kaydına göredir (girdi.ders; alıştırmalı derste %80 eşiği, alıştırmasız
//           derste okundu); birimlerin anlam kanadına göre değil. Kayıt yoksa ya da bozuksa hiçbir ders tamam değildir.
//           href bekleyen ilk ders; ilerleme: biten ders / durağın dersleri (birim 'ders'). Dersi olmayan durakta adım yok.
//           Durağın dersleri dağıtımdaki payıdır (aşağıda "dersleri duraklara dağıtma"; Ek iş E düzeltme 1: önce kapsama, sonra
//           bölüm sırasıyla 4'e kadar; kapsama 4'ü aşarsa sınır kapsama sayısıdır. Tur 2: kapsama dersEvi'nden önce gelir, bu yüzden
//           kapsama dersinin evi payın durağından sonra olabilir).
//   kart    durağın kartı olan en:s: sözcükleri; anlamı eksik olanlar bekler (ders bir sözcüğün anlamını işlediyse o kart
//           bekleyen iş değildir). href #/kelime/<ilk eksik>. Kartlı sözcük yoksa adım yok.
//   Şimdiki durak: kaynak sırasıyla yolu tamamlanmamış ilk yazılı durak (D.yolculuk ilerideyse geri çağrılır, söz bunu söyler).
//   Süre: sahne kalan sayfa × 10 sn; pratik kalan etkileşim × 8 sn; hikâye kalan sayfa × 10 sn; ders dersin sure alanı (yoksa 4 dk);
//         kart kalan kart × 30 sn; sınav soru × 40 sn (seviye testindeki 18 soru ≈ 12 dk oranı). Dakikaya yuvarlanır, en az 1.
// Sağlamlık: boş, bozuk ya da eski girdide istisna yok, NaN yok; ilk durağın ilk adımı döner. Yazılı durak yoksa durak null,
// adimlar [], simdi null.
import { SEVIYELER, birimYeri } from './index.js';
import { durakDurumu, dersBirimleri, eksikler, seviyeYuzdesi, kapiDurumu, yolculukAdresi, sayiEki } from './ilerleme.js';
import { sinavSorulari, sinavKaydi } from './sinav.js';
import { durum as kanatDurumu, durakBirimleri } from '../filiz/kanat.js';
import { DURAKLAR } from '../filiz/index.js';
import { BASLANGIC } from '../baslangic/index.js';
import { KARTLAR, kartBul } from '../baslangic/kartlar.js';
import { parcaDurumu, parcaEksigi, sahneBitti, sahneSayfasiYapildi, akis, konumCoz, konumSirasi } from '../filiz/akis.js';

const nesne = x => x !== null && typeof x === 'object' && !Array.isArray(x);
const dizi = x => (Array.isArray(x) ? x : []);
const metinler = x => dizi(x).filter(y => typeof y === 'string' && y);
const hafiza = h => (nesne(h) ? h : {});
const sayi = x => (typeof x === 'number' && Number.isFinite(x) ? x : 0);
const dakika = sn => Math.max(1, Math.round(sayi(sn) / 60));
const guvenli = (f, yedek) => { try { return f(); } catch { return yedek; } };

const KAYNAK = { duraklar: DURAKLAR, bolumler: BASLANGIC.bolumler, kartlar: null };
const kaynakOf = k => ({
  // Verilmeyen ya da dizi olmayan alan gerçek veriden gelir (bozuk kaynak öğreneni boş ekranda bırakmasın).
  duraklar: nesne(k) && Array.isArray(k.duraklar) ? k.duraklar : KAYNAK.duraklar,
  bolumler: nesne(k) && Array.isArray(k.bolumler) ? k.bolumler : KAYNAK.bolumler,
  kartlar: nesne(k) && nesne(k.kartlar) ? k.kartlar : null, // null: gerçek kartlar (kartBul)
  sinav: nesne(k) && Array.isArray(k.sinav) ? k.sinav : null,
});
const ilerlemeKaynagi = k => ({ duraklar: k.duraklar, bolumler: k.bolumler, kartlar: k.kartlar || KARTLAR });
const kartVar = (k, id) => (k.kartlar ? Object.prototype.hasOwnProperty.call(k.kartlar, id) && nesne(k.kartlar[id]) : !!kartBul(id));

const birimDurumu = (h, id) => guvenli(() => kanatDurumu(h, id), 'yeni');
const ANLAMLI = new Set(['kural', 'tam']);
const yaziliMi = d => nesne(d) && typeof d.id === 'string' && d.durum !== 'yazilacak';
const birimleriOf = d => guvenli(() => durakBirimleri(d), []);
const gecilenOf = g => new Set(metinler(nesne(g) ? g.gecilen : null));
const yerlesilenOf = g => new Set(metinler(nesne(g) ? g.yerlesilen : null));

// ---------- Türkçe ekler (özel adın ardından kesme işaretiyle) ----------
const UNLU = 'aıoueiöüAIOUEİÖÜ';
const sonUnlu = ad => { for (let i = ad.length - 1; i >= 0; i--) if (UNLU.includes(ad[i])) return ad[i].toLocaleLowerCase('tr'); return 'e'; };
const unluyleBiter = ad => UNLU.includes(ad.slice(-1));
const kalin = u => 'aıou'.includes(u);
// Tamlayan: Varış'ın, Barınma'nın, İş'in, Pazar'ın.
const in_ = ad => { const u = sonUnlu(ad), e = 'aı'.includes(u) ? 'ın' : 'ei'.includes(u) ? 'in' : 'ou'.includes(u) ? 'un' : 'ün'; return `${ad}'${unluyleBiter(ad) ? 'n' : ''}${e}`; };
// Yönelme: Pazar'a, İş'e, Barınma'ya.
const a_ = ad => `${ad}'${unluyleBiter(ad) ? 'y' : ''}${kalin(sonUnlu(ad)) ? 'a' : 'e'}`;

// ---------- durak parçaları ----------
// Sahne bitişi, sahne anahtarı ve pratik/hikâyenin ilk eksik yeri akis.js'ten (Tur 2: sahneBitti, sahneAnahtari, parcaEksigi).
// gecildi: durak girdi.gecilen'de (yoklama ya da yerleştirmeyle geçildi; ekran işi, 23 Kasım 2026): sahne, pratik ve hikâye tamam
// sayılır, öğretmen bu durağı geri çağırmaz. Hafızadan tahmin yok: duyum eşiği doğal dinlemeyle de dolar.
const GECILDI_NEDEN = 'Yoklamada bu durağı geçtin; istersen yine de bakabilirsin.';

// D.yolculuk kaydının bu duraktaki konumu (akış sırası) ya da -1.
function kayitSirasi(d, yolculuk) {
  if (!nesne(yolculuk) || yolculuk.durak !== d.id) return -1;
  return guvenli(() => { const k = konumCoz(d, yolculuk.parca || 'sahne', yolculuk.sayfa); return k ? konumSirasi(d, k) : -1; }, -1);
}

function sahneAdimi(d, h, yolculuk, gecildi) {
  const S = dizi(d.sayfalar);
  const toplam = S.filter(nesne).length;
  const secler = S.map((p, no) => ({ p, no })).filter(x => nesne(x.p) && x.p.tur === 'sec');
  // İlerleme: son yapılan sec sayfasına ya da D.yolculuk konumuna kadarki sayfalar görülmüş sayılır.
  let gorulen = 0;
  secler.forEach(x => { if (guvenli(() => sahneSayfasiYapildi(h, d, x.no), false)) gorulen = Math.max(gorulen, x.no + 1); });
  const kalanSoru = secler.filter(x => !guvenli(() => sahneSayfasiYapildi(h, d, x.no), false)).length;
  const ks = kayitSirasi(d, yolculuk);
  if (ks >= 0) gorulen = Math.max(gorulen, Math.min(toplam, ks)); // kaydın gösterdiği ekran henüz bitmedi; ondan öncekiler görüldü
  const bitti = guvenli(() => sahneBitti(h, d), false);
  const tamam = toplam > 0 && (bitti || gecildi || (!secler.length && gorulen >= toplam));
  const yapilan = tamam ? toplam : Math.min(gorulen, toplam);
  const no = tamam ? 0 : Math.min(yapilan, Math.max(0, toplam - 1));
  return { tur: 'sahne', ad: `${d.ad} sahnesi`, tamam, ilerleme: { yapilan, toplam, birim: 'sayfa' }, kalanSoru,
    href: toplam ? yolculukAdresi(d, { parca: 'sahne', no }) : null, sure: dakika((toplam - yapilan || toplam) * 10),
    neden: gecildi && !bitti ? GECILDI_NEDEN : 'Önce resimlere bakıp sesleri duyarsın; anlam sonra gelir.' };
}

function pratikAdimi(d, h, pd, gecildi) {
  if (!pd) return null;
  const e = guvenli(() => parcaEksigi(d, h, 'pratik'), null);
  const tamam = pd.durum === 'tamam' || gecildi;
  return { tur: 'pratik', ad: `${d.ad} pratiği`, tamam, ilerleme: { yapilan: pd.yapilan, toplam: pd.etkilesim, birim: 'ekran' },
    href: yolculukAdresi(d, e && !tamam ? e.konum : { parca: 'pratik', k: 0 }), sure: dakika((e && !tamam ? e.kalan : pd.etkilesim) * 8),
    neden: gecildi && pd.durum !== 'tamam' ? GECILDI_NEDEN : 'Duyduklarını oyunlarla pekiştirirsin.' };
}

function hikayeAdimi(d, h, pd, gecildi) {
  if (!pd) return null;
  const e = guvenli(() => parcaEksigi(d, h, 'hikaye'), null);
  const tamam = pd.durum === 'tamam' || gecildi;
  const bas = akis(d).find(x => x.parca === 'hikaye') || { parca: 'hikaye', h: 0, s: 0 };
  return { tur: 'hikaye', ad: `${d.ad} hikâyeciği`, tamam, ilerleme: { yapilan: pd.yapilan, toplam: pd.etkilesim, birim: 'soru' },
    href: yolculukAdresi(d, e && !tamam ? e.konum : bas), sure: dakika((e && !tamam ? e.kalan : pd.ekran) * 10),
    neden: gecildi && pd.durum !== 'tamam' ? GECILDI_NEDEN : 'Duyduklarını kısa bir hikâyede bir arada dinlersin.' };
}

// ---------- dersin ev durağı (Tur 3, kontrolcü kararı 23 Kasım 2026) ----------
// Birimin ev durağı: kaynağın yazılı durakları içinde birimin ilk göründüğü durak; yoksa seviye envanterindeki ev durağı
// (seviye/index.js birimYeri; yazılmamış durak da olabilir). Gerçek veride ikisi aynıdır (ilk görünüş = envanter).
// Durak sırası: seviyelerin durak sırası (SEVIYELER); orada olmayan (sahte) durak kaynak sırasıyla, hepsinden sonra.
const SIRA = SEVIYELER.flatMap(s => dizi(s.duraklar).map(x => x?.id));
function birimEvi(id, k) {
  for (const d of k.duraklar) if (yaziliMi(d) && birimleriOf(d).includes(id)) return d.id;
  return guvenli(() => birimYeri(id)?.durak, null) || null;
}
const durakSirasi = (id, k) => { const i = SIRA.indexOf(id); return i >= 0 ? i : 100000 + k.duraklar.findIndex(d => nesne(d) && d.id === id); };
// Dersin ev durağı: birimler alanındaki birimlerin ev durakları içinde en geç olanı. birimler alanı boşsa ya da hiçbir birimin
// ev durağı bilinmiyorsa null. Saf; istisna atmaz. kaynak: { duraklar? } (verilmezse gerçek duraklar).
export function dersEvi(ders, kaynak) {
  try {
    const k = kaynakOf(kaynak);
    const evler = [...new Set(metinler(nesne(ders) ? ders.birimler : null).map(id => birimEvi(id, k)).filter(Boolean))];
    if (!evler.length) return null;
    return evler.reduce((a, b) => (durakSirasi(b, k) > durakSirasi(a, k) ? b : a));
  } catch { return null; }
}
// ---------- dersleri duraklara dağıtma (Tur 4, kontrolcü kararı 23 Kasım 2026: kuyruk kuralı; Ek iş E düzeltme 1: önce kapsama) ----------
// Bir durağa normalde en çok DURAK_DERS_SINIRI ders düşer. Durak i'nin "uygun dersleri": ev durağı durak i ya da daha önceki bir durak
// olan, henüz başka durağa atanmamış yazılı dersler, bölüm ve ders sırasıyla (bölüm sırası ön koşulu korur). Duraklar sırayla:
//   1) Kapsama (Ek iş E düzeltme 1 ve tur 2, kontrolcü kararları 23 Kasım 2026): durağın ders yoluyla öğrenilen birimleri (kartı
//      olmayan ve atanmamış bir dersin dersBirimleri'nde geçen birimler) içinden önceki duraklara atanmış derslerce henüz
//      öğretilmeyenler "gereken"dir. Kapsama dersEvi'nden önce gelir: ders, kapsadığı birimi olan EN ERKEN durağa atanır, evi daha
//      sonraki (ya da yazılmamış) bir durak olsa bile (ör. komutlar/d give-me için Pazar'a; anlamı duyumdan önce öğrenmek serbest).
//      Açgözlü küme kapsaması: her adımda gerekenlerden en çoğunu öğreten uygun ders alınır (eşitlikte bölüm ve ders sırası), gereken
//      bitene ya da hiçbir uygun ders yenisini öğretmeyene kadar. Böylece durak "bitti" dendiğinde kalıp ve yapıları ders adımında
//      öğretilmiş olur (Varış'ta komutlar/e, Pazar'da the/a gibi).
//   2) Doldurma: kalan yer DURAK_DERS_SINIRI'na kadar uygun kuyruğun (evi bu durak ya da önceki) başından doldurulur. Kapsama 4'ü aşarsa sınır o durak için
//      kapsama sayısına çıkar (doldurma yapılmaz).
// Durağın listesi kitap sırasıyla verilir. Dağıtım tamamlanma durumundan BAĞIMSIZDIR ve deterministiktir: durağın ders listesi
// sabittir; öğrenen bir ders bitirince liste kaymaz. Son yazılı duraktan sonra artanlar "kalan dersler"dir. Ev durağı yazılmamış
// durak olan ders hiçbir yere girmez (o durak yazılınca kendiliğinden yerine oturur).
export const DURAK_DERS_SINIRI = 4;
const DAGITIM = new WeakMap(); // duraklar dizisi → (bolumler dizisi → (kartlar → dağıtım)); kaynak değişmedikçe yeniden hesaplanmaz
function dagitim(k) {
  let ic = DAGITIM.get(k.duraklar);
  if (!ic) { ic = new WeakMap(); DAGITIM.set(k.duraklar, ic); }
  let ic2 = ic.get(k.bolumler);
  if (!ic2) { ic2 = new Map(); ic.set(k.bolumler, ic2); }
  const hazir = ic2.get(k.kartlar);
  if (hazir) return hazir;
  const D = k.duraklar.filter(yaziliMi);
  const sira = new Map(D.map((d, i) => [d.id, i]));
  const L = [];
  for (const b of k.bolumler) {
    if (!nesne(b)) continue;
    for (const x of dizi(b.dersler)) {
      if (!nesne(x)) continue;
      // Tur 2: evi yazılmamış ders de listede (evSira sonsuz): yalnız kapsamayla bir durağa girebilir; doldurmaya ve kalana girmez.
      const ev = dersEvi(x, k);
      const birimler = new Set(guvenli(() => dersBirimleri(x, k.duraklar), []));
      const yazili = !!ev && sira.has(ev);
      if (yazili || birimler.size) L.push({ b, d: x, ev, evSira: yazili ? sira.get(ev) : Infinity, sira: L.length, birimler });
    }
  }
  const alinan = new Set(), ogretilen = new Set(), pay = new Map();
  const al = x => { alinan.add(x); x.birimler.forEach(id => ogretilen.add(id)); };
  D.forEach((d, i) => {
    const bos = L.filter(x => !alinan.has(x));            // kapsama adayı: atanmamış her ders (evi daha sonraki bir durak olsa da)
    const uygun = bos.filter(x => x.evSira <= i);           // doldurma adayı: evi bu durak ya da önceki
    const gereken = new Set(birimleriOf(d).filter(id => !kartVar(k, id) && !ogretilen.has(id) && bos.some(x => x.birimler.has(id))));
    const P = [];
    while (gereken.size) {
      let enIyi = null, enCok = 0;
      for (const x of bos) {
        if (P.includes(x)) continue;
        let n = 0;
        x.birimler.forEach(id => { if (gereken.has(id)) n++; });
        if (n > enCok) { enIyi = x; enCok = n; }
      }
      if (!enIyi) break;
      P.push(enIyi);
      enIyi.birimler.forEach(id => gereken.delete(id));
    }
    for (const x of uygun) { if (P.length >= DURAK_DERS_SINIRI) break; if (!P.includes(x)) P.push(x); }
    P.sort((a, b) => a.sira - b.sira).forEach(al);
    pay.set(d.id, P);
  });
  const sonuc = { pay, kalan: L.filter(x => !alinan.has(x) && Number.isFinite(x.evSira)) };
  ic2.set(k.kartlar, sonuc);
  return sonuc;
}
const durakPayi = (d, k) => dagitim(k).pay.get(d.id) || [];
// Dışa açık: durağın ders listesi (en çok 4 ders nesnesi, sırasıyla) ve yazılı son duraktan sonra kalan dersler.
export function durakDersleri(durakId, kaynak) {
  try { return (dagitim(kaynakOf(kaynak)).pay.get(durakId) || []).map(x => x.d); } catch { return []; }
}
export function kalanDersler(kaynak) {
  try { return dagitim(kaynakOf(kaynak)).kalan.map(x => x.d); } catch { return []; }
}
// Ders tamam mı (uygulamanın ders kaydı, durum.js D.ders ile aynı kural): alıştırmalı derste alıştırmaların en az %80'i doğru
// (alistirma['<bölüm>/<ders>'][j].d; uygulama/alistirma.js ESIK ve gectiMi), alıştırmasız derste okunan['<bölüm>/<ders>'].
const ESIK_YUZDE = 80;
function dersTamamMi(kayit, b, x) {
  if (!nesne(kayit)) return false;
  const anahtar = `${b.id}/${x.id}`;
  const n = dizi(x.alistirmalar).filter(nesne).length;
  if (n) {
    const L = nesne(kayit.alistirma) ? kayit.alistirma[anahtar] : null;
    if (!nesne(L)) return false;
    let dogru = 0;
    for (let j = 0; j < n; j++) if (nesne(L[j]) && L[j].d === true) dogru++;
    return dogru * 100 >= n * ESIK_YUZDE;
  }
  return nesne(kayit.okunan) && !!kayit.okunan[anahtar];
}
const dersAdi = (b, d) => `Ders ${b.no}${String(d.id).toUpperCase()} · ${d.baslik}`;

function dersAdimi(d, k, dersler, kayit, yerlesti) {
  if (!dersler.length) return null;
  const bekleyen = yerlesti ? [] : dersler.filter(x => !dersTamamMi(kayit, x.b, x.d));
  const hedef = bekleyen[0] || dersler[0];
  const sure = Number.isFinite(hedef.d.sure) && hedef.d.sure > 0 ? Math.max(1, Math.round(hedef.d.sure)) : 4;
  return { tur: 'ders', ad: dersAdi(hedef.b, hedef.d), tamam: !bekleyen.length,
    ilerleme: { yapilan: dersler.length - bekleyen.length, toplam: dersler.length, birim: 'ders' },
    href: `#/ders/${hedef.b.id}/${hedef.d.id}`, sure, neden: 'Duyduklarının kuralını öğrenirsin.',
    bolum: `Bölüm ${hedef.b.no} · ${hedef.b.title}`, kalanDers: bekleyen.length };
}

function kartAdimi(d, h, k, birimler) {
  const kartli = birimler.filter(id => id.startsWith('en:s:') && kartVar(k, id));
  if (!kartli.length) return null;
  const eksik = kartli.filter(id => !ANLAMLI.has(birimDurumu(h, id)));
  return { tur: 'kart', ad: `${d.ad} kelime kartları`, tamam: !eksik.length,
    ilerleme: { yapilan: kartli.length - eksik.length, toplam: kartli.length, birim: 'kart' },
    href: `#/kelime/${eksik[0] || kartli[0]}`, sure: dakika((eksik.length || kartli.length) * 30),
    neden: 'Sözcüklerin anlamını kart arkasında görürsün.', kalanBirim: eksik.length };
}

// Durağın yolu (iç alanlarla; dışa verilmeden önce temizlenir).
function durakYolu(d, h, k, yolculuk, gecilen, dersKaydi, yerlesilen = new Set()) {
  const birimler = birimleriOf(d);
  const dd = durakDurumu(h, { id: d.id, birimler }, ilerlemeKaynagi(k));
  const pd = guvenli(() => parcaDurumu(d, h), { sahne: { ekran: 0 }, pratik: null, hikaye: null });
  const gecildi = gecilen.has(d.id);
  const A = [sahneAdimi(d, h, yolculuk, gecildi), pratikAdimi(d, h, pd.pratik, gecildi), hikayeAdimi(d, h, pd.hikaye, gecildi),
    dersAdimi(d, k, durakPayi(d, k), dersKaydi, yerlesilen.has(d.id)), kartAdimi(d, h, k, birimler)].filter(Boolean);
  return { A, birimler, dd, tamam: A.every(x => x.tamam) };
}

// Adımın doluluk oranı (ilerleme göstergesi): tamam adım 1; öteki yapilan / toplam, 0–1 arasına kısılır; toplam 0 ise 0.
const adimOrani = (tamam, yapilan, toplam) => {
  if (tamam) return 1;
  const t = sayi(toplam), y = sayi(yapilan);
  return t > 0 ? Math.min(1, Math.max(0, y / t)) : 0;
};
// Durağın ilerlemesi: { tamam, toplam, oran } (oran adım oranlarının ortalaması; adım yoksa 0).
const durakOlcusu = A => {
  const toplam = A.length, tamam = A.filter(x => x.tamam).length;
  const oran = toplam ? A.reduce((t, x) => t + adimOrani(x.tamam, x.ilerleme.yapilan, x.ilerleme.toplam), 0) / toplam : 0;
  return { tamam, toplam, oran: Number.isFinite(oran) ? Math.min(1, Math.max(0, oran)) : 0 };
};
const disari = (x, durum) => ({ tur: x.tur, ad: String(x.ad), durum, oran: adimOrani(durum === 'tamam' || x.tamam, x.ilerleme.yapilan, x.ilerleme.toplam),
  ilerleme: { yapilan: Math.max(0, sayi(x.ilerleme.yapilan)), toplam: Math.max(0, sayi(x.ilerleme.toplam)), birim: String(x.ilerleme.birim || '') },
  href: typeof x.href === 'string' ? x.href : null, sure: Math.max(1, Math.round(sayi(x.sure)) || 1), neden: String(x.neden) });
const durumla = A => { let s = false; return A.map(x => { if (x.tamam) return 'tamam'; if (!s) { s = true; return 'simdi'; } return 'sonra'; }); };

// ---------- cümleler ----------
const PARCA_YONELME = { sahne: 'sahnesine', pratik: 'pratiğine', hikaye: 'hikâyesine', ders: 'dersine', kart: 'kartlarına' };
// "4 dersinden 1'ini" kalıbı: sayının belirtme hâli (iyelik ekinin ardından n + son ünlü).
const sayiBelirtme = n => { const i = sayiIyelik(n); return `${i}n${sonUnlu(i)}`; };
function yarimCumlesi(x, d) {
  const t = sayi(x.ilerleme.toplam), y = sayiBelirtme(x.ilerleme.yapilan);
  if (x.tur === 'sahne') return `${in_(d.ad)} sahnesinde ${t} sayfanın ${y} gördün.`;
  if (x.tur === 'pratik') return `${in_(d.ad)} pratiğinde ${t} ekranın ${y} yaptın.`;
  if (x.tur === 'hikaye') return `${in_(d.ad)} hikâyeciğinde ${t} sorunun ${y} cevapladın.`;
  if (x.tur === 'ders') return `${in_(d.ad)} ${t} dersinden ${y} bitirdin.`;
  if (x.tur === 'kart') return `${in_(d.ad)} ${t} kartından ${y} bitirdin.`;
  return '';
}
function yapilanCumlesi(tur, d, yol) {
  const n = yol.birimler.length;
  const x = yol.A.find(a => a.tur === tur);
  if (tur === 'sahne') return `${in_(d.ad)} sahnesini bitirdin: ${n} kelime ve kalıbı duydun.`;
  if (tur === 'pratik') return `${in_(d.ad)} pratiğini bitirdin: ${x ? x.ilerleme.toplam : 0} oyun ekranını yaptın.`;
  if (tur === 'hikaye') return `${in_(d.ad)} hikâyeciğini dinledin ve sorularını cevapladın.`;
  if (tur === 'ders') return `${in_(d.ad)} derslerini bitirdin: ${x ? x.ilerleme.toplam : 0} ders.`;
  if (tur === 'kart') return `${in_(d.ad)} kelime kartlarını bitirdin: ${x ? x.ilerleme.toplam : 0} kart.`;
  return '';
}
// "21 birimin 21'i" kalıbı: sayının iyelik eki (ünlü uyumu sayının okunuşuna göre).
const SAYI_EKI = { 0: "'ı", 1: "'i", 2: "'si", 3: "'ü", 4: "'ü", 5: "'i", 6: "'sı", 7: "'si", 8: "'i", 9: "'u" };
const ONLAR_EKI = { 10: "'u", 20: "'si", 30: "'u", 40: "'ı", 50: "'si", 60: "'ı", 70: "'i", 80: "'i", 90: "'ı" };
const sayiIyelik = n => { const s = Math.abs(Math.trunc(sayi(n))); if (s === 0) return "0'ı"; if (s % 10) return `${s}${SAYI_EKI[s % 10]}`; if (s % 100) return `${s}${ONLAR_EKI[s % 100]}`; return `${s}'ü`; };
// Yol bittiğinde birimlerin hepsi 'tam' olmayabilir (yazılı dersi olmayan kalıp, eşiğe ulaşmamış duyum); cümle bunu dürüstçe söyler.
const durakTamam = (d, yol) => {
  const n = yol.birimler.length, t = yol.dd.tam;
  // Ekranda iç terim yok (ilerleme göstergesi, düzeltme turu 2): "Varış bitti: 21 kelime ve kalıbın 21'ini tam öğrendin."
  return t >= n ? `${d.ad} bitti: ${n} kelime ve kalıbın ${sayiEki(t, 'belirtme')} tam öğrendin.`
    : `${d.ad} bitti: ${n} kelime ve kalıbın ${sayiEki(t, 'belirtme')} tam öğrendin; kalanlar tekrarla ve sonraki derslerle tamamlanır.`;
};

function simdiSozu(x, d, yol, onceki) {
  const dk = `${x.sure} dakika`;
  if (x.tur === 'sahne') {
    if (x.ilerleme.yapilan > 0) return `${in_(d.ad)} sahnesinde kaldığın yerden devam edelim; yaklaşık ${dk}.`;
    if (onceki) return `Sıradaki durak ${d.ad}. Önce resimlere bak ve sesleri dinle; yaklaşık ${dk}.`;
    return `${d.ilk ? 'İlk durağımız' : 'Bu durağımız'} ${d.ad}. Önce resimlere bak ve sesleri dinle; yaklaşık ${dk}.`;
  }
  // Tur 4: adım yarımsa söz kaldığı yerden devam eder (yapılan cümlesi ilerlemeyi zaten söylüyor).
  if (x.ilerleme.yapilan > 0) {
    if (x.tur === 'ders') return `Derslere devam edelim: ${x.ad}, ${dk}.`;
    return `Kaldığın yerden devam edelim: ${x.ad}, ${dk}.`;
  }
  if (x.tur === 'pratik') return `Şimdi bunları oyunlarla pekiştirelim; ${dk}.`;
  if (x.tur === 'hikaye') return `Şimdi duyduklarını kısa bir hikâyede dinleyelim; ${dk}.`;
  const dinlemeBitti = yol.A.filter(a => ['sahne', 'pratik', 'hikaye'].includes(a.tur)).every(a => a.tamam);
  if (x.tur === 'ders') return `${dinlemeBitti ? 'Dinlemeyi bitirdin. ' : ''}Şimdi duyduklarının kuralına bakalım: ${x.ad}, ${dk}.`;
  if (x.tur === 'kart') return `Şimdi bu durağın sözcüklerinin anlamına bakalım: ${x.kalanBirim} kart, ${dk}.`;
  return '';
}

// ---------- seviye ----------
const seviyeOfDurak = id => SEVIYELER.find(s => s.duraklar.some(x => x.id === id)) || SEVIYELER[0];
const seviyeCiktisi = (h, sv) => { const y = seviyeYuzdesi(h, sv); return { id: String(sv.id), ad: String(sv.ad), yuzde: y.yuzde, tam: y.tam, toplam: y.toplam }; };

// ---------- ana işlev ----------
function hesapla(girdi, kaynak) {
  const g = nesne(girdi) ? girdi : {};
  const h = hafiza(g.h), k = kaynakOf(kaynak);
  const yolculuk = nesne(g.yolculuk) ? g.yolculuk : null;
  const gecilen = gecilenOf(g);
  const D = k.duraklar.filter(yaziliMi);
  if (!D.length) {
    return { seviye: seviyeCiktisi(h, SEVIYELER[0]), durak: null, adimlar: [], simdi: null, yapilan: 'Henüz yazılı durak yok.',
      soz: 'Duraklar henüz hazır değil. Yeni duraklar yolda; hazır olunca ilk durağa birlikte bakalım.', bitti: false };
  }
  const yollar = D.map(d => ({ d, yol: durakYolu(d, h, k, yolculuk, gecilen, nesne(g.ders) ? g.ders : null, yerlesilenOf(g)) }));
  const i = yollar.findIndex(y => !y.yol.tamam);

  if (i >= 0) {
    const { d, yol } = yollar[i];
    const durumlar = durumla(yol.A);
    const adimlar = yol.A.map((x, j) => disari(x, durumlar[j]));
    const j = durumlar.indexOf('simdi');
    const ham = yol.A[j];
    const dIlk = { ...d, ilk: i === 0 };
    const onceki = i > 0 ? yollar[i - 1] : null;
    // yapılan: bu duraktaki son biten adım; yoksa önceki durağın tamamı; o da yoksa başlanmadı.
    const sonBiten = j > 0 ? yol.A[j - 1] : null;
    // Tur 3: şimdiki adım yarımsa yapılan onun ilerlemesini söyler ("Varış'ın 4 dersinden 1'ini bitirdin.").
    const yapilan = ham.ilerleme.yapilan > 0 ? yarimCumlesi(ham, d)
      : sonBiten ? yapilanCumlesi(sonBiten.tur, d, yol)
      : onceki ? durakTamam(onceki.d, onceki.yol) : 'Henüz başlamadın.';
    let soz = simdiSozu(ham, dIlk, yol, onceki && !sonBiten);
    // Geri çağırma: D.yolculuk daha ilerideki bir durağı gösteriyorsa.
    const ileri = yolculuk ? D.findIndex(x => x.id === yolculuk.durak) : -1;
    if (ileri > i) soz = `${a_(D[ileri].ad)} geçmişsin; önce ${in_(d.ad)} ${PARCA_YONELME[ham.tur]} bakalım, ${ham.sure} dakika.`;
    return { seviye: seviyeCiktisi(h, seviyeOfDurak(d.id)), durak: { id: d.id, no: sayi(d.no), ad: String(d.ad), ilerleme: durakOlcusu(yol.A) }, adimlar,
      simdi: adimlar[j], yapilan, soz, bitti: false };
  }

  // Yazılı durakların hepsi bitti. Tur 4: dağıtımdan artan dersler varsa önce "Kalan dersler" adımı; sonra seviye sonu sınavı ya da
  // "Yeni duraklar yolda".
  const son = yollar[yollar.length - 1];
  const kalan = dagitim(k).kalan, dersKaydi = nesne(g.ders) ? g.ders : null;
  if (kalan.length) {
    // Yerleştirmeyle geçilen durağın evindeki kalan ders de tamamdır (Tur 4 onayı: yerleştirmede ders adımı tamam).
    const yerlesilen = yerlesilenOf(g);
    const bekleyen = kalan.filter(x => !yerlesilen.has(x.ev) && !dersTamamMi(dersKaydi, x.b, x.d));
    if (bekleyen.length) {
      const hedef = bekleyen[0];
      const sure = Number.isFinite(hedef.d.sure) && hedef.d.sure > 0 ? Math.max(1, Math.round(hedef.d.sure)) : 4;
      const adim = { tur: 'ders', ad: dersAdi(hedef.b, hedef.d), durum: 'simdi', oran: adimOrani(false, kalan.length - bekleyen.length, kalan.length),
        ilerleme: { yapilan: kalan.length - bekleyen.length, toplam: kalan.length, birim: 'ders' },
        href: `#/ders/${hedef.b.id}/${hedef.d.id}`, sure, neden: 'Yazılı durakların derslerinden kalanlar; yeni duraklar gelene kadar.' };
      return { seviye: seviyeCiktisi(h, seviyeOfDurak(son.d.id)), durak: null, adimlar: [adim], simdi: adim,
        yapilan: adim.ilerleme.yapilan ? `Kalan ${kalan.length} dersten ${sayiBelirtme(adim.ilerleme.yapilan)} bitirdin.` : durakTamam(son.d, son.yol),
        soz: `Yeni duraklar gelene kadar kalan derslere bakalım: ${adim.ad}, ${sure} dakika.`, bitti: false };
    }
  }
  const sv = seviyeOfDurak(son.d.id);
  const sorular = k.sinav ? k.sinav.filter(nesne) : sinavSorulari(sv);
  const kayit = sinavKaydi(g.sinav);
  const gecti = guvenli(() => kapiDurumu(h, sv, kayit).sinav.tamam, false);
  const yapilan = durakTamam(son.d, son.yol);
  const seviye = seviyeCiktisi(h, sv);
  if (sorular.length && !gecti) {
    const adim = { tur: 'sinav', ad: `${sv.id} sonu sınavı`, durum: 'simdi', oran: 0, ilerleme: { yapilan: 0, toplam: sorular.length, birim: 'soru' },
      href: `#/seviye-sinavi/${sv.id}`, sure: dakika(sorular.length * 40), neden: 'Yazılı bütün durakları bitirdin; sınav öğrendiklerini ölçer.' };
    return { seviye, durak: null, adimlar: [adim], simdi: adim, yapilan,
      soz: `Yazılı bütün durakları bitirdin. Şimdi ${sv.id} sonu sınavına bakalım: ${sorular.length} soru, yaklaşık ${adim.sure} dakika.`, bitti: false };
  }
  const eksik = guvenli(() => eksikler(h, sv, ilerlemeKaynagi(k)).length, 0);
  const adim = { tur: 'yolum', ad: 'Yeni duraklar yolda', durum: 'simdi', oran: 0, ilerleme: { yapilan: 0, toplam: eksik, birim: 'eksik' },
    href: eksik ? '#/yolum' : null, sure: 1, neden: eksik ? 'Yeni duraklar yazılana kadar eksiklerini tamamlarsın.' : 'Yazılı her şeyi bitirdin.' };
  const soz = gecti
    ? `${sv.id} sonu sınavını da geçtin. Yeni duraklar yolda${eksik ? '; bu arada Yolum\'da eksiklerine bakalım.' : '.'}`
    : `Yazılı bütün durakları bitirdin. Yeni duraklar yolda${eksik ? '; bu arada Yolum\'da eksiklerine bakalım.' : '.'}`;
  return { seviye, durak: null, adimlar: [adim], simdi: adim, yapilan, soz, bitti: true };
}

// Son çare: beklenmeyen bir istisnada boş hafızayla hesaplanır (ilk durağın ilk adımı).
export function ogretmen(girdi, kaynak) {
  try { return hesapla(girdi, kaynak); } catch {
    try { return hesapla({}, kaynak); } catch { return hesapla({}, undefined); }
  }
}

// Yazılı her durağın ilerlemesi (ilerleme göstergesi; Yolum'daki durak listesi). ogretmen() ile aynı girdi ve adım kuralları.
// Saf; istisna atmaz: bozuk girdide boş hafızayla, o da olmazsa {} döner.
export function durakIlerlemeleri(girdi, kaynak) {
  const hesap = g => {
    const x = nesne(g) ? g : {};
    const h = hafiza(x.h), k = kaynakOf(kaynak);
    const yolculuk = nesne(x.yolculuk) ? x.yolculuk : null;
    const sonuc = {};
    for (const d of k.duraklar.filter(yaziliMi)) {
      sonuc[d.id] = durakOlcusu(durakYolu(d, h, k, yolculuk, gecilenOf(x), nesne(x.ders) ? x.ders : null, yerlesilenOf(x)).A);
    }
    return sonuc;
  };
  try { return hesap(girdi); } catch { try { return hesap({}); } catch { return {}; } }
}

// Bir adım bitince gösterilecek kısa geçiş: kutlama ve sıradaki adım. girdi biten adımdan SONRAKİ hafızadır.
// durakId verilirse o durağın adımına bakılır; verilmezse öğretmenin şimdiki durağına, o adım orada tamamsa ve durak az önce bittiyse
// bir önceki durağa. Adım tamamsa kutlama "…bitirdin" cümlesidir (durak da bittiyse durağın özeti eklenir), sonraki öğretmenin şimdi
// adımıdır. Adım bitmediyse (Tur 2 kararı) kutlama ara durumu söyler ("Sahnede 3 soru kaldı.") ve sonraki aynı adımın kalan yeridir.
const BITEN = new Set(['sahne', 'pratik', 'hikaye', 'ders', 'kart']);
function araDurum(a) {
  const n = a.tur === 'sahne' ? sayi(a.kalanSoru) : a.tur === 'ders' ? sayi(a.kalanDers) : a.tur === 'kart' ? sayi(a.kalanBirim)
    : Math.max(0, sayi(a.ilerleme.toplam) - sayi(a.ilerleme.yapilan));
  if (a.tur === 'sahne') return n ? `Sahnede ${n} soru kaldı.` : 'Sahnede birkaç sayfa kaldı.';
  if (a.tur === 'pratik') return `Pratikte ${n} ekran kaldı.`;
  if (a.tur === 'hikaye') return `Hikâyecikte ${n} soru kaldı.`;
  if (a.tur === 'ders') return `Bu durağın derslerinden ${n} tane kaldı.`;
  return `${n} kart kaldı.`;
}
export function adimBitince(girdi, kaynak, bitenTur, durakId) {
  const o = ogretmen(girdi, kaynak);
  const sonraki = o.simdi;
  try {
    const g = nesne(girdi) ? girdi : {};
    const h = hafiza(g.h), k = kaynakOf(kaynak);
    const D = k.duraklar.filter(yaziliMi);
    if (!BITEN.has(bitenTur) || !D.length) return { kutlama: 'Bu adımı bitirdin.', sonraki };
    const yolOf = d => durakYolu(d, h, k, nesne(g.yolculuk) ? g.yolculuk : null, gecilenOf(g), nesne(g.ders) ? g.ders : null, yerlesilenOf(g));
    const i = o.durak ? D.findIndex(x => x.id === o.durak.id) : D.length;
    const j = typeof durakId === 'string' ? D.findIndex(x => x.id === durakId) : -1;
    const adaylar = j >= 0 ? [j] : [i, i - 1].filter(x => x >= 0 && x < D.length);
    // Önce adımın tamam olduğu aday (şimdiki durak, ya da az önce biten önceki durak); yoksa ilk adayın ara durumu.
    const yollar = adaylar.map(x => ({ d: D[x], yol: yolOf(D[x]) }));
    for (const { d, yol } of yollar) {
      const a = yol.A.find(y => y.tur === bitenTur);
      if (a && a.tamam) {
        const c = yapilanCumlesi(bitenTur, d, yol);
        return { kutlama: yol.tamam ? `${c} ${durakTamam(d, yol)}` : c, sonraki, bitti: true };
      }
    }
    const a = yollar.length ? yollar[0].yol.A.find(y => y.tur === bitenTur) : null;
    if (a) return { kutlama: araDurum(a), sonraki: disari(a, 'simdi'), bitti: false };
    return { kutlama: 'Bu adımı bitirdin.', sonraki };
  } catch {
    return { kutlama: 'Bu adımı bitirdin.', sonraki };
  }
}
