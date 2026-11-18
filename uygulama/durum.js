// iDil tanıtım sürümü: ilerleme durumu (14 Kasım 2026). Yalnız bu tarayıcıda (localStorage) tutulur; sunucu ve hesap yok.
// Kurallar iLaw'ın motorundan (src/engine.js): XP ve haftalık lig, aralıklı tekrar kutuları (INTERVALS), günlük hedef (50 XP),
// görevler, düello XP'si (kazanan 40, berabere 25, kaybeden 15). Tahmini puan iDil'e özgü: türe göre isabet × sınavdaki soru sayısı.
import { SORULAR, SORU, KARTLAR, KART, TURLER, DUELLO_TURLERI, YAZILI, BOLUM, parcalar, rastgele, tohum, uretec, SINAV_ALANI, B_YAZILI, B_BOLUM } from './veri.js';

const ANAHTAR = 'idil-tanitim-v1';
export const ARALIK = [0, 1, 3, 7, 16, 35]; // kutu → bir sonraki tekrar için gün
export const OGRENILDI = 3; // bu kutuya çıkan kart öğrenilmiş sayılır
// ders: okunan ders (iLaw'da konu kartı 3 XP); dene: dersin içindeki alıştırma (iLaw'da alıştırma 5 XP).
export const XP = { dogru: 10, yanlis: 2, bildim: 3, zor: 2, bilmedim: 1, kazandi: 40, berabere: 25, kaybetti: 15, gorev: 30, kusursuz: 15, deneme: 2,
  ders: 3, dene: 5, deneYanlis: 1 };
export const GUNLUK_HEDEF = 50;
export const GOREVLER = [
  { id: 'dogru', ad: '15 doğru cevap ver', hedef: 15 },
  { id: 'kart', ad: '20 kart tekrarla', hedef: 20 },
  { id: 'duello', ad: '1 düello oyna', hedef: 1 },
];
export const LIG_ADI = 'Bronz lig';
// Ligdeki öteki oyuncular ve arkadaşlar: hepsi kurgusal, tanıtımda bot oynar (isabet: düelloda doğru cevap olasılığı).
export const RAKIPLER = [
  { ad: 'Elif', sinav: 'YDS', isabet: 0.66, taban: 430, seri: 12 },
  { ad: 'Mert', sinav: 'YÖKDİL Fen', isabet: 0.58, taban: 360, seri: 4 },
  { ad: 'Zeynep', sinav: 'YDS', isabet: 0.74, taban: 520, seri: 31 },
  { ad: 'Selin', sinav: 'YDS', isabet: 0.62, taban: 380, seri: 9 },
  { ad: 'Ece', sinav: 'YÖKDİL Sağlık', isabet: 0.7, taban: 470, seri: 18 },
  { ad: 'Can', sinav: 'YÖKDİL Sağlık', isabet: 0.55, taban: 300, seri: 2 },
  { ad: 'Burak', sinav: 'YÖKDİL Sosyal', isabet: 0.5, taban: 250, seri: 1 },
  { ad: 'Emre', sinav: 'YDS', isabet: 0.47, taban: 210, seri: 0 },
  { ad: 'Duru', sinav: 'YÖKDİL Sağlık', isabet: 0.6, taban: 340, seri: 6 },
];
export const ARKADAS_SAYISI = 5; // RAKIPLER'in ilk beşi arkadaş listesinde
export const SINAVLAR = ['YDS', 'YÖKDİL Sağlık', 'YÖKDİL Fen', 'YÖKDİL Sosyal'];

// ---------- tarih (yerel saat) ----------
const iki = n => String(n).padStart(2, '0');
export const ymd = d => `${d.getFullYear()}-${iki(d.getMonth() + 1)}-${iki(d.getDate())}`;
export const bugun = () => ymd(new Date());
const tarih = t => new Date(`${t}T12:00:00`);
export function gunEkle(t, n) { const d = tarih(t); d.setDate(d.getDate() + n); return ymd(d); }
export const gunFarki = (a, b) => Math.round((tarih(b) - tarih(a)) / 864e5);
export function haftaBasi(t = bugun()) { const d = tarih(t); d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); return ymd(d); }
const AYLAR = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
const GUNLER = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
export function tarihYaz(t, gunlu = true) { const d = tarih(t); return `${d.getDate()} ${AYLAR[d.getMonth()]}${gunlu ? ` ${GUNLER[d.getDay()]}` : ''}`; }
export function gecenZaman(t) {
  const f = gunFarki(t, bugun());
  return f <= 0 ? 'bugün' : f === 1 ? 'dün' : `${f} gün önce`;
}

// ---------- kayıt ----------
let D = null;
export const durum = () => D;
export function yukle() {
  try { const s = localStorage.getItem(ANAHTAR); D = s ? JSON.parse(s) : null; } catch { D = null; }
  if (D && D.surum !== 1) D = null;
  return D;
}
export function kaydet() {
  try { localStorage.setItem(ANAHTAR, JSON.stringify(D)); } catch { /* özel pencere ya da kapalı depolama: bellekte sürer */ }
}
export function sifirla() {
  try { localStorage.removeItem(ANAHTAR); } catch { /* yok say */ }
  D = null;
}
// yol: 'sinav' (Sınav İngilizcesi) ya da 'genel' (Genel İngilizce); genel: { baslangic: 'hic' | 'okul', yoklandi }.
export function baslat({ ad, sinav, tarih: sinavTarihi, hedef, ornek, yol: secilenYol = 'sinav', genel = null }) {
  D = {
    surum: 1, yol: secilenYol === 'genel' ? 'genel' : 'sinav', ...(genel ? { genel } : {}),
    ad: (ad || '').trim(), sinav: { tur: sinav, tarih: sinavTarihi, hedef }, acilis: bugun(), xp: 0, gunluk: {}, hafta: {},
    seri: { gun: 0, son: null, enUzun: 0 }, cevaplar: {}, kartlar: {}, duellolar: [], notlar: [], tahmin: {}, lig: {},
    plan: null, davet: null, hapAcilan: [], denemeler: [], ayar: { ses: true, konu: 'karisik' },
    kitap: { okunan: {}, dene: {}, test: {}, son: null },
  };
  if (ornek) ornekIlerleme();
  tahminYaz();
  kaydet();
}
export const adim = () => D.ad || 'Sen';
// Yol (18 Kasım 2026, mimari PLAN §2): alanı olmayan eski kayıt Sınav İngilizcesi sayılır (geriye uyum). Değiştirmek ilerlemeyi silmez.
export const yol = () => (D?.yol === 'genel' ? 'genel' : 'sinav');
export function yolDegistir(y) {
  D.yol = y === 'genel' ? 'genel' : 'sinav';
  if (D.yol === 'genel') D.genel ||= { baslangic: 'hic' };
  kaydet();
}

// ---------- XP, seri ve görevler ----------
export const gun = (t = bugun()) => (D.gunluk[t] ||= { xp: 0, dogru: 0, kart: 0, duello: 0, odul: [] });
export const seriGun = () => (D.seri.son === bugun() || D.seri.son === gunEkle(bugun(), -1) ? D.seri.gun : 0);
export const buHaftaXp = () => D.hafta[haftaBasi()] || 0;

// XP ekler; seriyi ve görevleri günceller. Döner: bu eklemeyle biten görevler (ödülleri eklenmiş olarak).
export function xpEkle(n) {
  const t = bugun();
  const g = gun(t);
  if (D.seri.son !== t) {
    D.seri.gun = D.seri.son === gunEkle(t, -1) ? D.seri.gun + 1 : 1;
    D.seri.son = t;
    D.seri.enUzun = Math.max(D.seri.enUzun, D.seri.gun);
  }
  const ekle = k => { g.xp += k; D.xp += k; const h = haftaBasi(t); D.hafta[h] = (D.hafta[h] || 0) + k; };
  ekle(n);
  const biten = GOREVLER.filter(m => g[m.id] >= m.hedef && !g.odul.includes(m.id));
  for (const m of biten) { g.odul.push(m.id); ekle(XP.gorev); }
  kaydet();
  return biten;
}

// ---------- sorular ----------
export function cevapKaydet(s, dogru, { xp = true } = {}) {
  const c = D.cevaplar[s.id] || { n: 0, d: 0 };
  D.cevaplar[s.id] = { n: c.n + 1, d: c.d + (dogru ? 1 : 0), son: dogru, t: bugun() };
  if (dogru) gun().dogru++;
  tahminYaz();
  if (!xp) { kaydet(); return { xp: 0, biten: [] }; }
  const k = dogru ? XP.dogru : XP.yanlis;
  return { xp: k, biten: xpEkle(k) };
}
export const yanlislar = () => SORULAR.filter(s => D.cevaplar[s.id] && !D.cevaplar[s.id].son);
export function turIsabeti() {
  const st = {};
  for (const [id, c] of Object.entries(D.cevaplar)) {
    const s = SORU.get(id);
    if (!s) continue;
    const x = (st[s.tur] ||= { n: 0, d: 0, cozulen: 0 });
    x.n += c.n; x.d += c.d; x.cozulen++;
  }
  return st;
}
// Önce hiç çözülmemiş, sonra son cevabı yanlış olan, en son öteki sorular.
export function havuz(liste, n) {
  const once = liste.filter(s => !D.cevaplar[s.id]);
  const sonra = liste.filter(s => D.cevaplar[s.id] && !D.cevaplar[s.id].son);
  const kalan = liste.filter(s => D.cevaplar[s.id]?.son);
  return [...rastgele(once, n), ...rastgele(sonra, n), ...rastgele(kalan, n)].slice(0, n);
}
// En az çözülmüş parça (okuma ya da boşluklu); eşitlikte güne göre değişen sıra.
export function parcaSec(tur = 'okuma') {
  const g = [...parcalar(tur).entries()];
  const cozulen = l => l.filter(s => D.cevaplar[s.id]).length;
  g.sort((a, b) => cozulen(a[1]) - cozulen(b[1]) || tohum(a[0] + bugun()) - tohum(b[0] + bugun()));
  return g[0][0];
}

// ---------- tahmini puan ----------
// Türe göre isabet (Laplace: (doğru + 1) / (deneme + 2); hiç çözülmeyen tür %50 sayılır) × sınavdaki soru sayısı × 1,25.
const sinavAnahtari = () => (D.sinav.tur === 'YDS' ? 'YDS' : 'YOKDIL');
export function tahminiPuan() {
  const st = turIsabeti();
  const sv = sinavAnahtari();
  let t = 0;
  for (const [tur, x] of Object.entries(TURLER)) {
    const k = x.sinav[sv] || 0;
    if (!k) continue;
    const a = st[tur] || { n: 0, d: 0 };
    t += (k * (a.d + 1)) / (a.n + 2);
  }
  return Math.round(t * 1.25);
}
export function tahminYaz() { D.tahmin[bugun()] = tahminiPuan(); }
export function tahminOnceki() {
  const t = bugun();
  const g = Object.keys(D.tahmin).filter(x => x < t).sort();
  return g.length ? D.tahmin[g[g.length - 1]] : null;
}
export function haftalikFark() {
  const sinir = gunEkle(bugun(), -7);
  const g = Object.keys(D.tahmin).sort();
  const eski = g.filter(x => x <= sinir).pop() || g[0];
  return eski ? tahminiPuan() - D.tahmin[eski] : 0;
}
// Doğru sayısı en düşük oranlı, sınavda ağırlığı yüksek düello türü (günün sorusu buradan).
export function zayifTur() {
  const st = turIsabeti();
  const sv = sinavAnahtari();
  let en = 'dilbilgisi';
  let enDeger = Infinity;
  for (const t of DUELLO_TURLERI) {
    const k = TURLER[t].sinav[sv] || 0;
    if (!k) continue;
    const x = st[t] || { n: 0, d: 0 };
    const deger = (x.d + 1) / (x.n + 2) - k / 200;
    if (deger < enDeger) { enDeger = deger; en = t; }
  }
  return en;
}

// ---------- kelime kartları (aralıklı tekrar) ----------
function notKarti(n) {
  return { key: `not/${n.id}`, code: n.en, title: n.tr, pos: 'Notlarım', cefr: '', ipa: '', example: n.ornek || '', exampleTr: '',
    text: 'Kitapta işaretlediğin ya da kendin eklediğin sözcük; karta dönüşür ve öteki kartlar gibi tekrar gelir.', synonyms: [], family: [], unit: null, not: n };
}
export const tumKartlar = () => [...D.notlar.map(notKarti), ...KARTLAR];
export function kartBul(key) {
  if (key.startsWith('not/')) { const n = D.notlar.find(x => `not/${x.id}` === key); return n ? notKarti(n) : null; }
  return KART.get(key) || null;
}
export const kartDurumu = key => D.kartlar[key] || null;
export const vadesiGelen = () => tumKartlar().filter(k => { const s = D.kartlar[k.key]; return s && s.sonraki <= bugun(); });
// Yeni kart sırası (4. tur): YÖKDİL adayına kendi alanının destesi (unit.alan) önce; öteki alanların desteleri sona.
// YDS adayı alan destelerini en sonda görür. Öteki kartların sırası değişmez.
export const yeniKartlar = () => {
  const alan = SINAV_ALANI[D.sinav?.tur];
  const sira = k => (!k.unit?.alan ? 1 : k.unit.course === alan ? 0 : 2);
  return tumKartlar().filter(k => !D.kartlar[k.key]).map((k, i) => [k, i]).sort((a, b) => sira(a[0]) - sira(b[0]) || a[1] - b[1]).map(([k]) => k);
};
export const ogrenilenSayisi = () => Object.values(D.kartlar).filter(s => s.kutu >= OGRENILDI).length;
export const sonrakiAralik = key => ARALIK[Math.min(5, (D.kartlar[key]?.kutu || 0) + 1)];
export function kutuSayilari() {
  const say = [0, 0, 0, 0, 0, 0];
  let yeni = 0;
  for (const k of tumKartlar()) { const s = D.kartlar[k.key]; if (!s || !s.gorulme) yeni++; else say[s.kutu]++; }
  return { yeni, say };
}
// sonuc: 'bildim' (üst kutu), 'zor' (aynı kutu, yarın), 'bilmedim' (ilk kutu, bugün yine).
export function kartCevap(key, sonuc) {
  const s = D.kartlar[key] || { kutu: 0, sonraki: bugun(), gorulme: 0 };
  const kutu = sonuc === 'bildim' ? Math.min(5, s.kutu + 1) : sonuc === 'zor' ? Math.max(1, s.kutu) : 0;
  const gunSonra = sonuc === 'bildim' ? ARALIK[kutu] : sonuc === 'zor' ? 1 : 0;
  D.kartlar[key] = { kutu, sonraki: gunEkle(bugun(), gunSonra), gorulme: s.gorulme + 1, son: bugun() };
  gun().kart++;
  return { xp: XP[sonuc], biten: xpEkle(XP[sonuc]), gunSonra };
}
export function notEkle({ en, tr, ornek }) {
  const id = Date.now().toString(36);
  D.notlar.unshift({ id, en: en.trim(), tr: tr.trim(), ornek: (ornek || '').trim(), tarih: bugun() });
  D.kartlar[`not/${id}`] = { kutu: 0, sonraki: bugun(), gorulme: 0 };
  kaydet();
  return id;
}
export function notSil(id) {
  D.notlar = D.notlar.filter(n => n.id !== id);
  delete D.kartlar[`not/${id}`];
  kaydet();
}

// ---------- ders kitabı ----------
// okunan: 'bölüm/ders' → tarih; dene: 'bölüm/ders/blok' → { s: seçilen, d: doğru mu }; test: bölüm → son bölüm testi; son: kaldığın yer.
export const kitap = () => (D.kitap ||= { okunan: {}, dene: {}, test: {}, son: null });
export const okunduMu = (bId, dId) => !!kitap().okunan[`${bId}/${dId}`];
export function dersOkundu(bId, dId) {
  const K = kitap();
  K.son = { bolum: bId, ders: dId };
  if (K.okunan[`${bId}/${dId}`]) { kaydet(); return { xp: 0, biten: [] }; }
  K.okunan[`${bId}/${dId}`] = bugun();
  return { xp: XP.ders, biten: xpEkle(XP.ders) };
}
export function deneKaydet(anahtar, secilen, dogru) {
  const K = kitap();
  if (K.dene[anahtar]) return { xp: 0, biten: [] };
  K.dene[anahtar] = { s: secilen, d: dogru, t: bugun() };
  if (dogru) gun().dogru++;
  const k = dogru ? XP.dene : XP.deneYanlis;
  return { xp: k, biten: xpEkle(k) };
}
export function bolumTestiKaydet(bId, dogru, n) { kitap().test[bId] = { dogru, n, t: bugun() }; kaydet(); }
export function bolumIlerleme(b) {
  const okunan = (b.dersler || []).filter(d => okunduMu(b.id, d.id)).length;
  return { okunan, toplam: (b.dersler || []).length, test: kitap().test[b.id] || null };
}
export const okunanDersSayisi = () => Object.keys(kitap().okunan).length;
// Sıradaki ders: kaldığın bölümde okunmamış ilk ders; o bölüm bittiyse kitap sırasıyla okunmamış ilk ders.
export function siradakiDers() {
  const son = kitap().son && BOLUM.get(kitap().son.bolum);
  const sira = son ? [son, ...YAZILI.filter(b => b !== son)] : YAZILI;
  for (const b of sira) { const d = b.dersler.find(x => !okunduMu(b.id, x.id)); if (d) return { bolum: b.id, ders: d.id }; }
  return null;
}

// ---------- Ders (Genel İngilizce, Başlangıç Kitabı) ----------
// Sınav Kitabı'ndan ayrı defter (D.ders): okunan 'bölüm/ders' → tarih; son: kaldığın yer. Alıştırma cevapları kitap().dene'de
// 'ders:' ön ekli anahtarla durur (deneKaydet). Sınav Kitabı'nın sayaçları, tekrar planı ve rozetleri bu defteri görmez.
export const dersDefteri = () => (D.ders ||= { okunan: {}, son: null });
export const dOkunduMu = (bId, dId) => !!dersDefteri().okunan[`${bId}/${dId}`];
export function dDersOkundu(bId, dId) {
  const K = dersDefteri();
  K.son = { bolum: bId, ders: dId };
  if (K.okunan[`${bId}/${dId}`]) { kaydet(); return { xp: 0, biten: [] }; }
  K.okunan[`${bId}/${dId}`] = bugun();
  return { xp: XP.ders, biten: xpEkle(XP.ders) };
}
export function dBolumIlerleme(b) {
  const okunan = (b.dersler || []).filter(d => dOkunduMu(b.id, d.id)).length;
  return { okunan, toplam: (b.dersler || []).length, test: null };
}
export const dOkunanSayisi = () => Object.keys(dersDefteri().okunan).length;
export function dSiradaki() {
  const son = dersDefteri().son && B_BOLUM.get(dersDefteri().son.bolum);
  const sira = son ? [son, ...B_YAZILI.filter(b => b !== son)] : B_YAZILI;
  for (const b of sira) { const d = b.dersler.find(x => !dOkunduMu(b.id, x.id)); if (d) return { bolum: b.id, ders: d.id }; }
  return null;
}

// Dersten tekrar (aralıklı geri çağırma): 1, 3, 7, 14 ya da 30 gün önce okunan derslerin konusundan 2 soru; o günlere düşen ders
// yoksa bugünden önce okunan son dersten. Parçalı türler (okuma, boşluklu) girmez.
function dersTekrari(haric) {
  const t = bugun();
  const okunan = Object.entries(kitap().okunan).filter(([, g]) => g < t).map(([k, g]) => ({ k, fark: gunFarki(g, t) }));
  if (!okunan.length) return [];
  let secilen = okunan.filter(x => [1, 3, 7, 14, 30].includes(x.fark));
  if (!secilen.length) secilen = [okunan.sort((a, b) => a.fark - b.fark)[0]];
  const konular = new Set(secilen.flatMap(({ k }) => { const [b, d] = k.split('/'); return BOLUM.get(b)?.dersler?.find(x => x.id === d)?.konular || []; }));
  if (!konular.size) return [];
  const aday = SORULAR.filter(s => !haric.includes(s.id) && TURLER[s.tur]?.bicim !== 'parca' && (s.konu || []).some(x => konular.has(x)));
  return havuz(aday, 2).map(s => s.id);
}

// ---------- günün turu ve düello daveti ----------
export function gunPlani(yeni = false) {
  const t = bugun();
  if (D.plan?.tarih === t && !yeni && 'ders' in D.plan && 'tekrar' in D.plan) return D.plan;
  let kartlar = vadesiGelen().slice(0, 10).map(k => k.key);
  if (!kartlar.length) kartlar = yeniKartlar().slice(0, 6).map(k => k.key);
  const tur = zayifTur();
  const sorular = havuz(SORULAR.filter(s => s.tur === tur), 5).map(s => s.id);
  // Tur bir dersle açılır (iLaw'da oturum okunmamış konu kartlarıyla başlar): önce öğren, sonra önceki derslerden tekrar, sonra uygula.
  D.plan = { tarih: t, ders: siradakiDers(), tekrar: dersTekrari(sorular), kartlar, tur, sorular, parca: parcaSec('okuma'), bitti: false, tur_sayisi: (D.plan?.tarih === t ? D.plan.tur_sayisi : 0) + (yeni ? 1 : 0) };
  kaydet();
  return D.plan;
}
export function davetGuncelle() {
  const t = bugun();
  if (gun().duello > 0) { if (D.davet) { D.davet = null; kaydet(); } return null; }
  if (D.davet?.tarih === t) return D.davet;
  D.davet = { rakip: RAKIPLER[Math.floor(tohum(t) * ARKADAS_SAYISI)].ad, tarih: t };
  kaydet();
  return D.davet;
}

// ---------- haftalık lig ----------
// Öteki oyuncuların XP'si haftanın geçen kısmına göre artar (aynı hafta için hep aynı sayılar).
export function ligTablosu() {
  const h = haftaBasi();
  const gecen = Math.min(1, Math.max(0.06, (Date.now() - new Date(`${h}T00:00:00`).getTime()) / (7 * 864e5)));
  const l = RAKIPLER.map(r => ({ ad: r.ad, xp: Math.round(r.taban * gecen * (0.8 + 0.4 * tohum(h + r.ad))), ben: false }));
  l.push({ ad: adim(), xp: buHaftaXp(), ben: true });
  l.sort((a, b) => b.xp - a.xp || (a.ben ? -1 : b.ben ? 1 : 0));
  return l.map((x, i) => ({ ...x, sira: i + 1 }));
}
export const ligSiram = () => ligTablosu().find(x => x.ben).sira;
export function ustLigeKalan() {
  const l = ligTablosu();
  const ben = l.find(x => x.ben);
  return ben.sira <= 3 ? 0 : l[2].xp - ben.xp + 1;
}
export const ligSonunaGun = () => 7 - gunFarki(haftaBasi(), bugun());
// Sabah sırası: bugün ilk bakıldığındaki sıra (üstü çizilen eski değer için).
export function sabahSirasi() {
  const t = bugun();
  if (!D.lig[t]) { D.lig = { [t]: ligSiram() }; kaydet(); }
  return D.lig[t];
}

// ---------- düello ----------
export function duelloKaydet(k) {
  const xp = XP[k.sonuc];
  D.duellolar.unshift({ ...k, tarih: bugun(), xp });
  D.duellolar = D.duellolar.slice(0, 20);
  gun().duello++;
  if (D.davet?.rakip === k.rakip) D.davet = null;
  return { xp, biten: xpEkle(xp) };
}

// ---------- rozetler ----------
export function rozetler() {
  const cozulen = Object.keys(D.cevaplar).length;
  const ogr = ogrenilenSayisi();
  return [
    { ad: 'İlk adım', alt: 'İlk sorunu çözdün', tamam: cozulen >= 1 },
    { ad: 'Yüz soru', alt: `100 farklı soru çöz · ${Math.min(cozulen, 100)}/100`, tamam: cozulen >= 100 },
    { ad: 'Bir hafta', alt: `7 günlük seri · en uzun ${D.seri.enUzun} gün`, tamam: D.seri.enUzun >= 7 },
    { ad: 'İlk zafer', alt: 'Bir düello kazan', tamam: D.duellolar.some(d => d.sonuc === 'kazandi') },
    { ad: 'Elli kelime', alt: `${OGRENILDI}. kutuya çıkan 50 kart · ${Math.min(ogr, 50)}/50`, tamam: ogr >= 50 },
    { ad: 'Prova', alt: 'Bir deneme sınavı bitir', tamam: D.denemeler.length > 0 },
    { ad: 'Hap okuru', alt: `5 hap kartı oku · ${Math.min(D.hapAcilan.length, 5)}/5`, tamam: D.hapAcilan.length >= 5 },
    { ad: 'İlk ders', alt: 'Sınav Kitabı\'ndan bir ders oku', tamam: okunanDersSayisi() >= 1 },
    { ad: 'Bölüm bitti', alt: 'Bir bölümün bütün derslerini oku ve testini çöz', tamam: YAZILI.some(b => { const p = bolumIlerleme(b); return p.okunan === p.toplam && p.test; }) },
  ];
}
export function hapOkundu(id) {
  if (!D.hapAcilan.includes(id)) { D.hapAcilan.push(id); kaydet(); }
}

// ---------- örnek ilerleme (tanıtım için: "Örnek ilerlemeyle başla") ----------
// Altı gündür çalışan bir kullanıcı: 70 soru çözülmüş, dört ünitenin kartları kutularda, üç not, iki düello.
function ornekIlerleme() {
  const r = uretec('idil-ornek');
  const t = bugun();
  if (!D.ad) D.ad = 'Deniz';
  for (let i = 6; i >= 1; i--) {
    const g = gunEkle(t, -i);
    const xp = 45 + Math.round(r() * 50);
    D.gunluk[g] = { xp, dogru: 8 + Math.round(r() * 10), kart: 10 + Math.round(r() * 15), duello: i <= 2 ? 1 : 0, odul: [] };
    D.xp += xp;
    const h = haftaBasi(g);
    D.hafta[h] = (D.hafta[h] || 0) + xp;
  }
  D.xp += 620;
  D.seri = { gun: 6, son: gunEkle(t, -1), enUzun: 9 };
  const isabet = { kelime: 0.78, dilbilgisi: 0.58, bosluklu: 0.55, 'cumle-tamamlama': 0.52, 'ceviri-et': 0.7, 'ceviri-te': 0.62, okuma: 0.6,
    diyalog: 0.72, 'yakin-anlam': 0.6, 'paragraf-tamamlama': 0.5, bozan: 0.45 };
  const uniteler = ['genel-aliskanlik', 'genel-kervansaray', 'genel-goc', 'saglik-uyku', 'saglik-antibiyotik', 'fen-mercan', 'fen-pil',
    'sosyal-gobeklitepe', 'sosyal-baski'];
  for (const s of rastgele(SORULAR.filter(x => uniteler.includes(x.unit.id)), 70, r)) {
    const dogru = r() < (isabet[s.tur] ?? 0.6);
    const n = r() < 0.25 ? 2 : 1;
    D.cevaplar[s.id] = { n, d: dogru ? n : n > 1 ? 1 : 0, son: dogru, t: gunEkle(t, -1 - Math.floor(r() * 6)) };
  }
  const kartUniteleri = ['genel-aliskanlik', 'genel-kervansaray', 'saglik-uyku', 'fen-mercan'];
  KARTLAR.filter(k => kartUniteleri.includes(k.unit.id)).forEach((k, i) => {
    const kutu = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5][Math.floor(r() * 11)];
    const sonraki = i % 4 === 0 ? gunEkle(t, -Math.floor(r() * 2)) : gunEkle(t, 1 + Math.floor(r() * ARALIK[kutu]));
    D.kartlar[k.key] = { kutu, sonraki, gorulme: kutu + Math.floor(r() * 3), son: gunEkle(t, -1 - Math.floor(r() * 5)) };
  });
  [
    { en: 'albeit', tr: '-se de, -e rağmen; gerçi', ornek: 'The plan was approved, albeit with some changes.' },
    { en: 'notwithstanding', tr: '-e karşın, -e rağmen', ornek: 'Notwithstanding the cost, the project went ahead.' },
    { en: 'whereby', tr: 'ki bununla, … yoluyla', ornek: 'They set up a system whereby patients could book online.' },
  ].forEach((n, i) => {
    const id = `ornek${i + 1}`;
    D.notlar.push({ id, ...n, tarih: gunEkle(t, -3 - i), isaretli: true });
    D.kartlar[`not/${id}`] = { kutu: 1, sonraki: i === 0 ? t : gunEkle(t, 1), gorulme: 1, son: gunEkle(t, -2) };
  });
  D.duellolar = [
    { tarih: gunEkle(t, -1), rakip: 'Zeynep', ben: 2, o: 3, sonuc: 'kaybetti', xp: XP.kaybetti },
    { tarih: gunEkle(t, -2), rakip: 'Mert', ben: 4, o: 2, sonuc: 'kazandi', xp: XP.kazandi },
  ];
  // Ders kitabı: ilk yazılı bölüm okunmuş ve testi çözülmüş; ikinci bölümün ilk iki dersi okunmuş, kaldığı yer orası.
  const [b1, b2] = YAZILI;
  if (b1) {
    b1.dersler.forEach((d, i) => { D.kitap.okunan[`${b1.id}/${d.id}`] = gunEkle(t, -5 + Math.min(i, 3)); });
    D.kitap.test[b1.id] = { dogru: 7, n: 10, t: gunEkle(t, -2) };
    D.kitap.son = { bolum: b1.id, ders: b1.dersler[b1.dersler.length - 1].id };
  }
  if (b2) {
    b2.dersler.slice(0, 2).forEach(d => { D.kitap.okunan[`${b2.id}/${d.id}`] = gunEkle(t, -1); });
    D.kitap.son = { bolum: b2.id, ders: b2.dersler[Math.min(1, b2.dersler.length - 1)].id };
  }
  const p = tahminiPuan();
  D.tahmin[gunEkle(t, -8)] = p - 7;
  D.tahmin[gunEkle(t, -1)] = p - 4;
}
