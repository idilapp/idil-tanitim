// Yolculuk durak akışı (Görev 3, 21 Kasım 2026). Saf modül: DOM yok, depolama yok, Date.now yok.
// Yeri (Görev 7 düzeltme 1): icerik/filiz/akis.js; tasarim/filiz/akis.js yalnız buraya yönlendirir (oynatıcı ve site yolu çalışsın diye).
// Böylece içerik katmanı (icerik/seviye/ilerleme.js) tasarım katmanına bağımlı olmaz.
// Oynatıcı (oynatici.js) ve tanıtım uygulaması (uygulama/uygulama.js) aynı akışı ve aynı hafıza anahtarlarını buradan alır.
// Bir durak üç parçadır: sahne (sayfalar) → pratik (oyunlar) → hikâyecik (her hikâyenin sayfaları, sonra 3 sorusu).
// Konum: { parca: 'sahne', no } | { parca: 'pratik', k } | { parca: 'hikaye', h, s } | { parca: 'hikaye', h, soru }.
// Ekran sayıları denetleyicinin ekranSay(...).sahne/pratik/hikaye sayılarıyla aynıdır (denetle-filiz.mjs ekranlar()); eşitliği
// icerik/filiz/test/akis.test.mjs denetler. Bu yüzden dizi, nesne ve birim düzeltici denetleyicidekilerle aynı kuraldır:
// dizi olmayan değer tek öğeli dizi sayılır (undefined boş), nesne olmayan öğe atlanır, birimler tekil dizgelerdir.
import { duyumYapildi } from './kanat.js';

const dizi = x => (x === undefined ? [] : Array.isArray(x) ? x : [x]);
const nesne = x => x !== null && typeof x === 'object';
const birimler = x => [...new Set(dizi(x).filter(b => typeof b === 'string'))];
const OYUN_TURLERI = new Set(['sec', 'eslestir', 'sirala', 'bosluk', 'nederdin', 'hizli']);
const tamSayi = x => (typeof x === 'number' || (typeof x === 'string' && /^\d+$/.test(x))) && Number.isInteger(+x) && +x >= 0;

// Hafıza anahtarları (brif): pratik oyunu 'p:<durakId>/<k>', hikâye sorusu 'h:<durakId>/<h>/<j>'.
// Hikâyenin içindeki sec sayfası (brifte yok; Görev 3 kararı): 'h:<durakId>/<h>/sayfa/<s>'.
export const pratikAnahtari = (id, k) => `p:${id}/${k}`;
export const hikayeAnahtari = (id, h, j) => `h:${id}/${h}/${j}`;
export const hikayeSayfaAnahtari = (id, h, s) => `h:${id}/${h}/sayfa/${s}`;

// Durağın bütün ekranları akış sırasıyla. Konumlar dizideki gerçek sırayı taşır; nesne olmayan öğe ve bilinmeyen oyun türü atlanır.
// Oynatıcı yalnız dizi alanlarını gezer (denetleyici dizi olmayan pratik ya da sayfalar alanını tek öğe sayıp hata verir).
export function akis(durak) {
  const A = [];
  if (!nesne(durak)) return A;
  const liste = x => (Array.isArray(x) ? x : []);
  liste(durak.sayfalar).forEach((p, no) => { if (nesne(p)) A.push({ parca: 'sahne', no }); });
  liste(durak.pratik).forEach((o, k) => { if (nesne(o) && OYUN_TURLERI.has(o.tur)) A.push({ parca: 'pratik', k }); });
  liste(durak.hikayeler).forEach((hk, h) => {
    if (!nesne(hk)) return;
    liste(hk.sayfalar).forEach((p, s) => { if (nesne(p)) A.push({ parca: 'hikaye', h, s }); });
    liste(hk.sorular).forEach((q, soru) => { if (nesne(q)) A.push({ parca: 'hikaye', h, soru }); });
  });
  return A;
}

const esit = (x, y) => x.parca === y.parca && x.no === y.no && x.k === y.k && x.h === y.h && x.s === y.s && x.soru === y.soru;
export const konumSirasi = (durak, konum) => (konum ? akis(durak).findIndex(x => esit(x, konum)) : -1);

// Adres kuyruğundan konum: parca 'sahne' | 'pratik' | 'hikaye'; kuyruk sahne/pratik için '<n>', hikâye için '<h>/<s>' ya da
// '<h>/soru/<j>' (sayı da olur). Geçersizse null; hiçbir girdi istisna atmaz.
export function konumCoz(durak, parca, kuyruk) {
  try {
    if (!nesne(durak)) return null;
    const p = String(kuyruk ?? '').split('/');
    let konum = null;
    if ((parca === 'sahne' || parca === undefined) && p.length === 1 && tamSayi(p[0])) konum = { parca: 'sahne', no: +p[0] };
    else if (parca === 'pratik' && p.length === 1 && tamSayi(p[0])) konum = { parca: 'pratik', k: +p[0] };
    else if (parca === 'hikaye' && p.length === 2 && tamSayi(p[0]) && tamSayi(p[1])) konum = { parca: 'hikaye', h: +p[0], s: +p[1] };
    else if (parca === 'hikaye' && p.length === 3 && p[1] === 'soru' && tamSayi(p[0]) && tamSayi(p[2])) konum = { parca: 'hikaye', h: +p[0], soru: +p[2] };
    return konum && konumSirasi(durak, konum) >= 0 ? konum : null;
  } catch { return null; }
}

// Konumun adres kuyruğu ('3', '0/2', '0/soru/1') ve oynatıcı adresi.
export const konumKuyrugu = k => (k.parca === 'sahne' ? `${k.no}` : k.parca === 'pratik' ? `${k.k}` : k.soru !== undefined ? `${k.h}/soru/${k.soru}` : `${k.h}/${k.s}`);
export const oynaticiAdresi = (id, k) => (k.parca === 'sahne' ? `#/durak/${id}/${k.no}` : `#/${k.parca}/${id}/${konumKuyrugu(k)}`);

// Parçanın etkileşim ekranları ve her birinin hafıza anahtarı (yapıldı mı sorusu için).
// pratik: sec, sirala, bosluk, nederdin birer ekran; eslestir her çifti, hizli her sorusu bir ekran (denetleyiciyle aynı).
// Anahtarda gerçek dizi sırası kullanılır (oynatıcının yazdığı anahtarla aynı); nesne olmayan öğe ekran sayılmaz.
function pratikEkranlari(durak) {
  const E = [];
  dizi(durak.pratik).forEach((o, k) => {
    if (!nesne(o)) return;
    const key = pratikAnahtari(durak.id, k);
    if (o.tur === 'eslestir') dizi(o.ciftler).filter(nesne).forEach(c => E.push({ birimler: birimler(c.birim), key }));
    else if (o.tur === 'hizli') dizi(o.sorular).filter(nesne).forEach(q => E.push({ birimler: birimler(q.birimler), key }));
    else if (['sec', 'sirala', 'bosluk', 'nederdin'].includes(o.tur)) E.push({ birimler: birimler(o.birimler), key });
  });
  return E;
}
// hikâye: her sayfa bir ekran (gor etkileşimsiz), her soru bir ekran.
function hikayeEkranlari(durak) {
  const E = [];
  dizi(durak.hikayeler).forEach((hk, h) => {
    if (!nesne(hk)) return;
    dizi(hk.sayfalar).forEach((p, s) => {
      if (nesne(p)) E.push(p.tur === 'sec' ? { birimler: birimler(p.birimler), key: hikayeSayfaAnahtari(durak.id, h, s) } : { birimler: [], key: null });
    });
    dizi(hk.sorular).forEach((q, j) => { if (nesne(q)) E.push({ birimler: birimler(q.birimler), key: hikayeAnahtari(durak.id, h, j) }); });
  });
  return E;
}

// Bir ekran doğru cevaplandı mı: ekranın bütün birimleri bu anahtarla en az bir kez doğru duyuldu mu (kanat.js duyumYapildi;
// gunler'e burada bakılmaz).
export function ekranYapildi(h, birimler, key) {
  if (typeof key !== 'string' || !Array.isArray(birimler) || !birimler.length) return false;
  return birimler.every(b => duyumYapildi(h, b, key));
}

// Parça durumu: 'tamam' | 'yarim' | 'baslanmadi'.
const durumu = (yapilan, toplam) => (toplam > 0 && yapilan >= toplam ? 'tamam' : yapilan > 0 ? 'yarim' : 'baslanmadi');

// Uygulamanın üç alt satırı için: { sahne: { ekran }, pratik: { ekran, etkilesim, yapilan, durum } | null, hikaye: {...} | null }.
// Pratik ya da hikâyesi olmayan durakta o parça null'dır. Boş ya da bozuk hafızada sayılar 0'dır.
export function parcaDurumu(durak, h) {
  const hz = nesne(h) ? h : {};
  const ozet = E => {
    const et = E.filter(e => e.key);
    const yapilan = et.filter(e => ekranYapildi(hz, e.birimler, e.key)).length;
    return { ekran: E.length, etkilesim: et.length, yapilan, durum: durumu(yapilan, et.length) };
  };
  const p = pratikEkranlari(nesne(durak) ? durak : {}), hk = hikayeEkranlari(nesne(durak) ? durak : {});
  return {
    sahne: { ekran: nesne(durak) ? dizi(durak.sayfalar).filter(nesne).length : 0 },
    pratik: p.length ? ozet(p) : null,
    hikaye: hk.length ? ozet(hk) : null,
  };
}

// Sabit karıştırma (aynı tohum, aynı sıra): n öğenin dizin sırası. n ≥ 2 ise sıra hiçbir zaman 0, 1, 2 … olmaz.
export function karistir(n, tohum = '') {
  const s = [...Array(Math.max(0, n | 0)).keys()];
  let t = 2166136261;
  for (const c of String(tohum)) t = Math.imul(t ^ c.charCodeAt(0), 16777619) >>> 0;
  for (let i = s.length - 1; i > 0; i--) {
    t = Math.imul(t ^ (t >>> 15), 2246822507) >>> 0;
    const j = t % (i + 1);
    [s[i], s[j]] = [s[j], s[i]];
  }
  if (s.length > 1 && s.every((x, i) => x === i)) s.push(s.shift());
  return s;
}
