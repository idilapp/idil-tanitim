// Filiz durağı 10: Gündelik hayat (Dalga 1 Görev 11, 24 Kasım 2026). Taslak: taslak/durak-taslaklari.md §19 (30 sahne sayfası, 3 yoklama
// sorusu, 5 oyun dizisi ve 37 etkileşim, iki hikâyecik). A1'in son durağı.
// Sabah ve akşam; ev ve iş; I work, she works; haftanın günleri, hafta, bugün, yarın, every day; saat sormak ve buçuk; Do you …?, I don't ….
// Kahraman "sen"sin (adın Deniz) ve çizilmezsin: sağ alttaki el, avucundaki nesne ve balonun. Türkçe yok. Bütün roller iDil sesiyle
// konuşur: ustabaşı ve arkadaşın 'is' (hiçbir hikâyede birlikte konuşmazlar), Anna 'memur'. Yeni rol yok.
// Yeni birimler (15): morning, evening, home, work, genis-zaman, ucuncu-tekil-s, days-of-the-week, week, today, tomorrow, every-day,
// what-time, half-past, do-you, i-dont.
// Geri dönenler: hello, goodbye, thank you, please, yes, no, where, here, this is, my, he, she, brother, key, box, clock, o'clock, four,
// nine, ten, eleven, onluklar, drink, coffee, tea, water, go, bus, taxi, train, bank, shop, in, I can.
// Uzlaşımlar (tek anlam, taslak §19):
// - Sabah = ufukta doğan yarım güneş, açık krem gökyüzü; akşam = hilal ay ve iki yıldız, lacivert gökyüzü, ışıklı pencereler. Tepede
//   güneş, yatak ve uyku resmi yok. Saat soran ekranda güneş ve ay yok; sabah/akşam soran ekranda saat yok (kadran 12 saatlik).
// - Saat: bütün kadranlar kalın yelkovanlı (ic.kalin); o'clock = yelkovan yukarı, half past = yelkovan aşağı, akrep iki rakamın ortasında.
//   "half past X" sorusunda "half past X−1" şıkkı yok.
// - Takvim: pazartesiden başlayan yedi sütun, son ikisi gri; halka = sözü edilen gün, kırmızı raptiye = bugün, yarın = raptiyenin sağı,
//   sayfa çerçevesi = hafta; yedi sütunda aynı simge = every day.
// - I = yalnız senin elin (matkapla); she = Anna; he = ustabaşı (kısa gri saç ve sakal) ya da adam. Karşıdakinin balonunda soru işareti =
//   soru (Do you …?); senin balonunda kırmızı çarpı = I don't ….
// Sızıntı önlemi: sahne ve pratikte 7:30, 6:00, cumartesi, avuçta anahtar, elma ve Anna'nın evinde kahve doğru cevap değildir; 8:30, 5:00
// ve 6:30 hiç görünmez. Sec seçenekleri oynatıcıda boy 120 penceresinde çizilir; ana öğeler y ≤ 112.
import { anahtar, ay, balon, bankaCephe, bardak, bilet, cekic, dukkan, ekmek, el, elma, evCephe, figurSac, fincan, gunes, isaret, istasyon, kapi,
  kisi, konusma, masa, matkap, otobus, para, paraSira, plaka, saat, salla, sokak, taksi, takvim, takvimSutun, tren, yatak,
  SEN_EL } from '../parca.js';

const H = 180;
const sahne = (o, alt) => ({ boy: H, alt, o });
const anl = metin => ({ rol: 'anlatici', metin });
const sen = metin => ({ rol: 'sen', metin });
const ust = metin => ({ rol: 'is', metin });      // ustabaşı
const ark = metin => ({ rol: 'is', metin });      // arkadaşın (ustabaşıyla hiçbir hikâyede birlikte konuşmaz)
const kom = metin => ({ rol: 'memur', metin });   // Anna (komşun)
const r2 = v => +v.toFixed(2);

const GUN_AD = { 1: 'pazartesi', 2: 'salı', 3: 'çarşamba', 4: 'perşembe', 5: 'cuma', 6: 'cumartesi', 7: 'pazar' };
const SAAT_AD = { 4: 'dört', 6: 'altı', 5: 'beş', 7: 'yedi', 8: 'sekiz', 9: 'dokuz', 10: 'on', 11: 'on bir', 12: 'on iki', 1: 'bir', 2: 'iki', 3: 'üç' };
const IN_EKI = { 1: "'in", 2: "'nin", 3: "'ün", 4: "'ün", 5: "'in", 6: "'nın", 7: "'nin", 8: "'in", 9: "'un", 10: "'un", 11: "'in", 12: "'nin" };
const saatAd = (h, dk) => dk === 30 ? `${SAAT_AD[h]} buçuk (yelkovan aşağıda, akrep ${h} ile ${h % 12 + 1}${IN_EKI[h % 12 + 1]} ortasında)` : `tam ${SAAT_AD[h]} (yelkovan yukarıda)`;
const GOK = { sabah: '#FFF1D6', aksam: '#2E3A6B' };

// ---- Kişiler (İnsanlar uzlaşımı: kadın omuza inen saç, erkek kısa saç ve sakal; renk cinsiyete bağlı değil) ----
const fig = (x, y, s, cins, sac, govde, kol = 'asagi', yuz = 'mutlu', ek = {}) => [
  { t: 'k', x, y, s, kol, yuz, f: govde },
  ...figurSac(x, y, s, ek.tur || (cins === 'k' ? 'uzun' : 'kisa'), sac, { sakal: cins === 'e', gozluk: ek.gozluk }),
];
const arkadas = (x, y, s, kol, yuz) => fig(x, y, s, 'e', 'kahve', 'kahve', kol, yuz, { gozluk: true });   // gözlük, kahverengi gövde
const anna = (x, y, s, kol, yuz) => fig(x, y, s, 'k', 'siyah', 'turuncu', kol, yuz);
const kardes = (x, y, s, kol, yuz) => fig(x, y, s, 'e', 'kahve', 'gri', kol, yuz);                       // arkadaşının kardeşi: gözlüksüz, gri
const ustaFig = (x, y, s, kol, yuz) => fig(x, y, s, 'e', 'gri', 'kraft', kol, yuz);                       // ustabaşı (küçük): gri saç ve sakal
// Ustabaşı çerçevesi (İş: kahverengi raf çizgisi ve tezgâh) ve bu durakta kısa gri saç ve sakal ("he" uzlaşımı).
// Tur 1 (M-1): gövde bej (kraft), küçük ustaFig ile aynı kişi; kisi('is')'in motor sırasıyla gelen gövde rengi geçersiz kılınır.
const usta = (kol = 'ileri', yuz = 'mutlu') => [...kisi('is', kol, yuz).map(o => (o.t === 'k' ? { ...o, f: 'kraft' } : o)), ...figurSac(60, 112, 2, 'kisa', 'gri', { sakal: true })];
const elim = () => el(...SEN_EL);
const senElinde = (f, ...a) => f(178, 112, ...a);
const sallar = (x, y) => [...salla(x + 18, y, 1), ...salla(x - 18, y, -1)];

// Her yöne ok (Şehir'deki gibi): kesik eğri ve ucun yönüne dönen ok başı.
const okY = (x1, y1, x2, y2) => {
  const cx = (x1 + x2) / 2, cy = Math.min(y1, y2) - 14, a = Math.atan2(y2 - cy, x2 - cx), L = 7, b = .5;
  const u = d => `${r2(x2 - L * Math.cos(a + d))} ${r2(y2 - L * Math.sin(a + d))}`;
  return [{ t: 'l', d: `M${x1} ${y1} Q${r2(cx)} ${r2(cy)} ${x2} ${y2}`, w: 2, k: 'vurgu', kesik: true },
    { t: 'l', d: `M${u(-b)} L${x2} ${y2} L${u(b)}`, w: 2, k: 'vurgu' }];
};
const soruIsareti = (x, y, s = 1) => {
  const n = (dx, dy) => `${r2(x + dx * s)} ${r2(y + dy * s)}`;
  return [{ t: 'l', d: `M${n(-5, -6)} Q${n(-5, -11)} ${n(0, -11)} Q${n(6, -11)} ${n(6, -6)} Q${n(6, -2)} ${n(0, 0)} L${n(0, 4)}`, w: r2(2.6 * s), k: 'vurgu' },
    { t: 'c', x, y: r2(y + 9.5 * s), r: r2(2 * s), f: 'vurgu' }];
};
// Akrepsiz küçük saat yüzü ("saat kaç?" simgesi): çerçeve, beyaz yüz, dört çentik.
const saatYuzu = (x, y, s = 1) => [{ t: 'c', x, y, r: r2(16 * s), f: 'agac' }, { t: 'c', x, y, r: r2(13.5 * s), f: 'kar' },
  { t: 'l', d: `M${x} ${r2(y - 11 * s)} L${x} ${r2(y - 8 * s)} M${x} ${r2(y + 8 * s)} L${x} ${r2(y + 11 * s)} M${r2(x - 11 * s)} ${y} L${r2(x - 8 * s)} ${y} M${r2(x + 8 * s)} ${y} L${r2(x + 11 * s)} ${y}`, w: 1.4, k: 'koyu' },
  { t: 'c', x, y, r: r2(1.8 * s), f: 'koyu' }];
const kadran = (x, y, h, dk, s) => saat(x, y, h, s, { dakika: dk, kalin: true });

// ---- Gökyüzü, atölye, gişe ----
// Pencere içinde sabah ya da akşam gökyüzü: (x, y) sol üst, w × h; sabah ufukta doğan güneş, akşam hilal ay ve yıldızlar.
const pencereGok = (t, x, y, w, h, k = 1) => [{ t: 'r', x: x - 4, y: y - 4, w: w + 8, h: h + 8, rx: 3, f: 'kar' },
  { t: 'r', x, y, w, h, rx: 2, f: GOK[t] },
  ...(t === 'sabah' ? gunes(r2(x + w / 2), y + h, r2(1.5 * k)) : ay(r2(x + w / 2 - 6 * k), r2(y + h * .48), r2(1.5 * k)))];
const PENCERE_AD = { sabah: 'pencerede ufukta doğan yarım güneş, açık krem gökyüzü', aksam: 'pencerede hilal ay ve iki yıldız, lacivert gökyüzü' };
// Gökyüzü bandı (dış sahneler): üstte tam genişlik; sabah güneş ufukta (bandın altında), akşam ay ve yıldızlar.
const gokBant = (t, h = 56, k = 1.1) => [{ t: 'r', x: 0, y: 0, w: 240, h, rx: 0, f: GOK[t] },
  ...(t === 'sabah' ? gunes(120, h, k) : ay(114, r2(h * .5), k))];
// Atölye cephesi: (x, y) alt orta; 70s × 56s, düz koyu çatı kenarı, ortada geniş kapı, kapının üstünde beyaz tabela ve içinde çekiç,
// iki yanda pencere (ic.isik: sarı ışıklı).
const atolyeCephe = (x, y, s = 1, ic = {}) => {
  const X = v => r2(x + v * s), Y = v => r2(y + v * s), h = v => r2(v * s), cam = ic.isik ? '#FFE9A8' : 'buz';
  return [{ t: 'r', x: X(-35), y: Y(-56), w: h(70), h: h(56), rx: 0, f: '#D8CFC2' }, { t: 'r', x: X(-38), y: Y(-60), w: h(76), h: h(5), rx: h(1.5), f: '#6B6F78' },
    { t: 'r', x: X(-13), y: Y(-30), w: h(26), h: h(30), rx: h(1.5), f: '#8E97A5' },
    { t: 'r', x: X(-14), y: Y(-48), w: h(28), h: h(14), rx: h(2), f: 'kar' }, ...cekic(X(-1), Y(-39), r2(.3 * s)),
    { t: 'r', x: X(-30), y: Y(-44), w: h(12), h: h(14), rx: h(1.5), f: cam }, { t: 'r', x: X(18), y: Y(-44), w: h(12), h: h(14), rx: h(1.5), f: cam }];
};
// Banka gişesi: gri tezgâh, arkasında kişi, önünde paralar, arka duvarda küçük üçgen alınlık ve sikke (bankanın imi).
const banImi = (x, y, s = 1) => [{ t: 'p', d: `M${r2(x - 22 * s)} ${r2(y + 10 * s)} L${x} ${r2(y - 6 * s)} L${r2(x + 22 * s)} ${r2(y + 10 * s)} Z`, f: '#C4C9D2' },
  ...para(x, r2(y + 4 * s), r2(.6 * s))];
const KISI = { anna, arkadas, kardes, usta: ustaFig };
const KISI_AD = { anna: 'Anna (siyah uzun saç, turuncu gövde)', arkadas: 'arkadaşın (gözlük, sakal, kahverengi gövde)', kardes: 'arkadaşının kardeşi (kısa kahve saç, sakal, gözlüksüz, gri gövde)',
  usta: 'ustabaşı (kısa gri saç ve sakal)' };
const gise = (kim, y = 100, s = 1.7) => [...banImi(48, 30), ...KISI[kim](120, y, s), { t: 'r', x: 22, y, w: 196, h: 20, rx: 3, f: '#C9CED6' },
  ...paraSira(3, 170, r2(y - 6), .8)];
const giseS = kim => sahne(gise(kim), `banka gişesi (duvarda üçgen alınlık ve sikke): gri tezgâhın arkasında ${KISI_AD[kim]}, önünde paralar`);
// Atölye seçenekleri (boy 120): ustabaşının raf çizgisi ve kahverengi tezgâhı.
const tezgahK = () => [{ t: 'l', d: 'M14 22 L90 22', w: 2, k: 'kahve' }, { t: 'r', x: 6, y: 100, w: 92, h: 20, rx: 4, f: 'kahve' }];
const atolyeElS = () => sahne([...tezgahK(), ...el(190, 108), ...matkap(196, 84, .5)], 'atölye: boş kahverengi tezgâh; senin elinde matkap (kimse yok)');
const ustaCekicS = () => sahne([{ t: 'l', d: 'M14 22 L90 22', w: 2, k: 'kahve' }, ...ustaFig(52, 100, 1.7, 'yukari'), ...cekic(70, 46, .55),
  { t: 'r', x: 6, y: 100, w: 92, h: 20, rx: 4, f: 'kahve' }, ...kutu2(150, 96)], 'atölye: ustabaşı (kısa gri saç ve sakal) tezgâhta çekici kaldırmış, çalışıyor');
function kutu2(x, y) { return [{ t: 'r', x: x - 20, y: y - 30, w: 40, h: 30, rx: 3, f: 'kraft' }, { t: 'r', x: x - 20, y: y - 18, w: 40, h: 5, rx: 0, f: 'kar' }]; }

// ---- Seçenek resimleri (boy 120; öğeler y ≤ 112) ----
const sabahS = () => sahne(pencereGok('sabah', 64, 14, 112, 88, 1.3), PENCERE_AD.sabah);
const aksamS = () => sahne(pencereGok('aksam', 64, 14, 112, 88, 1.3), PENCERE_AD.aksam);
const evS = () => sahne([...sokak(100, { alt: 112, serit: false }), ...evCephe(120, 104, 1.05)], 'ev: iki katlı küçük apartman, üçgen kiremit çatı ve baca, dört pencere, kapı (gökyüzü yok)');
const bankaS = () => sahne(bankaCephe(120, 106, 1.15), 'banka cephesi: alınlıkta sikke, dört sütun, basamaklar');
const dukkanS = () => sahne(dukkan(120, 106, 1.25), 'dükkân cephesi: çizgili tente, vitrinde iki gömlek, cam kapı');
const taksiS = () => sahne(taksi(120, 104, 1.3), 'sarı taksi (tavanda beyaz tabela, gövdede dama şeridi)');
const otobusS = () => sahne(otobus(120, 104, 1.05), 'otobüs (hat tabelası boş)');
const trenS = () => sahne(tren(120, 104, .75, { ray: 120 }), 'rayda iki vagonlu tren');
const duvarSaatiS = () => sahne(saat(120, 60, 3, .8, { kalin: true }), 'duvar saati (tam üç)');
const saatS = (h, dk = 0) => sahne(kadran(120, 62, h, dk, 1.25), `saat ${saatAd(h, dk)}`);
const plakaS = n => sahne(plaka(120, 60, String(n), 1.6), `plaka ${n}`);
const icecekAd = { kahve: 'kahve fincanı (köpük halkası)', cay: 'çay fincanı (poşet ipi ve etiket)', su: 'su bardağı' };
const icecekS = t => sahne(t === 'su' ? bardak(120, 100, 1.9) : fincan(120, 100, t, 2.2), icecekAd[t]);

// Takvim tarifi (alt): halka, raptiye, simge, çerçeve.
const sut = i => `${i}. sütun (${GUN_AD[i]})`;
const takvimAd = (ic = {}) => {
  const p = [];
  if (ic.cerceve) p.push('bütün sayfa vurgu çerçevesinde');
  if (ic.raptiye) p.push(`kırmızı raptiye ${sut(ic.raptiye)} tepesinde`);
  [].concat(ic.halka ?? []).forEach(i => p.push(`${sut(i)} halkalı`));
  if (ic.ok) p.push(`raptiyeden ${ic.ok[1]}. sütuna kesik ok`);
  if (ic.simge) Object.entries(ic.simge).forEach(([k, t]) => p.push(`${k === 'hepsi' ? 'yedi sütunun hepsinde' : sut(k) + ' içinde'} küçük ${{ kahve: 'kahve fincanı', cay: 'çay fincanı', su: 'su bardağı', cekic: 'çekiç', ay: 'ay', gunes: 'güneş' }[t]}`));
  if (ic.isaret) Object.entries(ic.isaret).forEach(([k, t]) => p.push(`${sut(k)} içinde ${t === 'evet' ? 'yeşil onay' : 'kırmızı çarpı'}`));
  return `haftalık takvim (yedi sütun, son ikisi gri)${p.length ? ': ' + p.join('; ') : ''}`;
};
const takvimS = (ic = {}) => sahne(takvim(120, 110, 1.2, ic), takvimAd(ic));
const bugunS = i => takvimS({ raptiye: i, halka: i });
const yarinS = (r, h) => takvimS({ raptiye: r, halka: h });
const simgeS = (t, sutunlar) => takvimS({ simge: Object.fromEntries((sutunlar === 'hepsi' ? [['hepsi', t]] : sutunlar.map(i => [i, t]))) });

// Balon simgeleri: (x, y) simgenin ortası, k ölçek; ic isteğe bağlı (takvim ve saat).
const SIMGE = {
  soru: (x, y, k) => soruIsareti(x, r2(y - 1 * k), r2(.9 * k)),
  evet: (x, y, k) => isaret(x, y, 'evet', r2(.8 * k)),
  hayir: (x, y, k) => isaret(x, y, 'hayir', r2(.8 * k)),
  saatYuzu: (x, y, k) => saatYuzu(x, y, r2(.8 * k)),
  saat: (x, y, k, ic) => kadran(x, y, ic.h, ic.dk || 0, r2(.42 * k)),
  gunes: (x, y, k) => gunes(x, r2(y + 6 * k), r2(.6 * k)),
  ay: (x, y, k) => ay(r2(x - 3 * k), y, r2(.62 * k)),
  kahve: (x, y, k) => fincan(x, r2(y + 9 * k), 'kahve', r2(.42 * k)),
  cay: (x, y, k) => fincan(x, r2(y + 9 * k), 'cay', r2(.42 * k)),
  su: (x, y, k) => bardak(x, r2(y + 12 * k), r2(.5 * k)),
  ev: (x, y, k) => evCephe(x, r2(y + 13 * k), r2(.28 * k)),
  annaYuz: (x, y, k) => anna(x, r2(y + 13 * k), r2(.55 * k)),
  arkYuz: (x, y, k) => arkadas(x, r2(y + 13 * k), r2(.55 * k)),
  takvim: (x, y, k, ic) => takvim(x, r2(y + 19 * k), r2(.5 * k), ic),
};
const GEN = { takvim: 76 };
const SIMGE_AD = { soru: 'soru işareti', evet: 'yeşil onay', hayir: 'kırmızı çarpı', saatYuzu: 'akrepsiz küçük saat yüzü', gunes: 'doğan güneş', ay: 'hilal ay',
  kahve: 'kahve fincanı', cay: 'çay fincanı', su: 'su bardağı', ev: 'küçük ev', annaYuz: "Anna'nın küçük yüzü", arkYuz: 'arkadaşının küçük yüzü (gözlük)' };
const ogeAd = o => { const [a, ic] = Array.isArray(o) ? o : [o]; return a === 'takvim' ? `küçük ${takvimAd(ic)}` : a === 'saat' ? `saat ${saatAd(ic.h, ic.dk || 0)}` : SIMGE_AD[a]; };
const icerik = (cx, cy, k, ogeler) => {
  const L = ogeler.map(o => (Array.isArray(o) ? o : [o])), w = L.map(([a]) => (GEN[a] || 26) * k);
  let x = cx - w.reduce((a, b) => a + b, 0) / 2;
  return L.flatMap(([a, ic = {}], i) => { const m = x + w[i] / 2; x += w[i]; return SIMGE[a](r2(m), cy, k, ic); });
};
const icerikAd = ogeler => ogeler.map(ogeAd).join(', ');
const senBalon = (ogeler, x = 162, y = 40, s = 1.55, k = 1.3) => balon(x, y, icerik(x, r2(y - 5 * s), k, ogeler), s);
const onunBalon = (ogeler, x = 150, y = 34, s = 1.6, k = 1.2) => konusma(x, y, icerik(x, y, k, ogeler), s);

// ---- Sahne yardımcıları (boy 180) ----
const SK = (o = [], lambalar = []) => [...sokak(118, { lamba: lambalar }), ...o];
// Ev ve atölye arasında gidiş: yon 'ise' (evden atölyeye) | 'eve'; vakit 'sabah' | 'aksam'.
const gidis = (yon, vakit) => [...gokBant(vakit), ...sokak(130), ...evCephe(56, 132, .9, { isik: vakit === 'aksam' }),
  ...atolyeCephe(186, 132, 1.0, { isik: vakit === 'aksam' }), ...(yon === 'ise' ? okY(76, 112, 168, 112) : okY(168, 112, 76, 112))];
const gidisS = (yon, vakit) => sahne([...gokBant(vakit, 30, .75), ...sokak(98, { alt: 112, serit: false }), ...evCephe(52, 100, .62, { isik: vakit === 'aksam' }),
  ...atolyeCephe(188, 100, .7, { isik: vakit === 'aksam' }), ...(yon === 'ise' ? okY(70, 86, 166, 86) : okY(166, 86, 70, 86))],
  `${vakit === 'sabah' ? 'üstte doğan güneş, açık gökyüzü' : 'üstte hilal ay, lacivert gökyüzü, pencereler ışıklı'}; solda ev, sağda atölye (çekiç tabelalı); ${yon === 'ise' ? 'evden atölyeye' : 'atölyeden eve'} kesik ok`);
const odaKapi = (ekler = []) => [{ t: 'r', x: 0, y: 150, w: 240, h: 30, rx: 0, f: 'tas' }, ...kapi(70, 110, true), ...ekler];
const koridor = (ekler = []) => [...kapi(56, 104, true), { t: 'r', x: 222, y: 34, w: 18, h: 116, rx: 2, f: 'iz' }, { t: 'r', x: -2, y: 150, w: 244, h: 6, rx: 2, f: 'tas' }, ...ekler];

// ---- Hikâye 1 yardımcıları ----
const H_GUNLER = { 1: 'cekic', 2: 'cekic', 3: 'cekic', 4: 'cekic', 5: 'cekic' };
// Panodaki haftalık takvim: pazartesi–cuma çekiçli; aksam: o sütunun üstünde küçük ay (akşam vardiyası).
const pano = (x, y, s, aksam = null) => [...takvim(x, y, s, { simge: H_GUNLER }), ...(aksam ? ay(r2(takvimSutun(x, s, aksam) - 3 * s), r2(y - 54 * s), r2(.5 * s)) : [])];
const panoAd = aksam => `haftalık takvim: pazartesi–cuma sütunlarında küçük çekiç${aksam ? `; ${sut(aksam)} üstünde küçük ay` : '; cumartesi ve pazar boş'}`;
// Tur 1 (I-2): balonlu karelerde (saatVar false) pencere de çizilmez: motor çizgileri dolguların üstüne koyar, güneş ışınları balonun içinden
// görünüyordu. Balonlar raf çizgisinin (x ≤ 96) sağında durur. Tur 1 (karar 1): kare 1'in duvar saati tam sekiz (hikâyede buçuklu tek saat 7:30).
const h1Atolye = (kol, yuz, ekler = [], aksam = null, saatVar = true) => [...usta(kol, yuz), ...(saatVar ? pencereGok('sabah', 122, 8, 52, 34, .7) : []), ...pano(172, 108, .62, aksam),
  ...(saatVar ? kadran(214, 26, 8, 0, .45) : []), ...ekler, ...elim()];
const panoS = aksam => sahne(pano(120, 110, 1.2, aksam), `yakın çekim panodaki ${panoAd(aksam)}`);
const AVUC_AD = { para: 'üç sikke (para)', bilet: 'otobüs bileti (beyaz şerit, küçük otobüs simgesi)', anahtar: 'küçük gri anahtar', matkap: 'matkap', cekic: 'çekiç', ekmek: 'somun ekmek', fincan: 'kahve fincanı', elma: 'üç kırmızı elma' };
const AVUC = {
  anahtar: () => anahtar(184, 98, 'gri', 1.5), matkap: () => matkap(196, 84, .5), cekic: () => cekic(184, 72, .62),
  para: () => paraSira(3, 184, 98, 1.1), bilet: () => bilet(184, 92, 'kar', 'otobus'),
  ekmek: () => ekmek(186, 98, .62, { tabak: false, dilim: 0 }), fincan: () => fincan(186, 100, 'kahve', .7),
  elma: () => [...elma(172, 98, 'red', 9), ...elma(194, 98, 'red', 9), ...elma(183, 82, 'red', 9)],
};
// Hızlı tur e (tur 1, karar 3): Anna'nın haftası: solda küçük Anna, sağda takvim; çekiç simgesi çalıştığı günler.
const ANNA_HAFTA = { 'pzt-cmt': { 1: 'cekic', 2: 'cekic', 3: 'cekic', 4: 'cekic', 5: 'cekic', 6: 'cekic' }, hepsi: { hepsi: 'cekic' }, paz: { 7: 'cekic' } };
const ANNA_HAFTA_AD = { 'pzt-cmt': 'pazartesi–cumartesi sütunlarında çekiç, pazar boş', hepsi: 'yedi sütunun hepsinde çekiç', paz: 'yalnız pazar sütununda çekiç' };
const annaHaftaS = t => sahne([...anna(30, 108, 1.6), ...takvim(140, 108, 1.08, { simge: ANNA_HAFTA[t] })], `solda Anna; sağda haftalık takvim: ${ANNA_HAFTA_AD[t]}`);
const avucS = t => sahne([...el(190, 108), ...AVUC[t]()], `yakın çekim: senin avucunda ${AVUC_AD[t]}`);

// ---- Hikâye 2 yardımcıları ----
const ikiFincan = (x, y, s = .8) => [...fincan(r2(x - 18 * s), y, 'kahve', s), ...fincan(r2(x + 18 * s), y, 'kahve', s)];
const YER_AD = { kafe: "kafenin koyu yeşil tezgâhı; arkasında Anna; tezgâhta iki kahve fincanı", anna: "Anna'nın açık kapısı (koridor); önünde Anna; yanındaki küçük masada iki kahve fincanı",
  oda: 'senin odan (yatak); Anna; küçük masada iki kahve fincanı' };
const yerS = t => sahne(t === 'kafe' ? [...anna(120, 100, 1.7), { t: 'r', x: 20, y: 100, w: 200, h: 20, rx: 4, f: '#3F6E63' }, ...fincan(56, 100, 'kahve', .9), ...fincan(184, 100, 'kahve', .9)]
  : t === 'anna' ? [{ t: 'r', x: 0, y: 106, w: 240, h: 6, rx: 2, f: 'tas' }, ...kapi(52, 64, true), ...anna(112, 106, 1.7), { t: 'r', x: 156, y: 84, w: 70, h: 6, rx: 2, f: 'gri' }, ...ikiFincan(191, 84, .7)]
    : [{ t: 'r', x: 0, y: 106, w: 240, h: 6, rx: 2, f: 'tas' }, ...yatak(64, 80), ...anna(140, 106, 1.7), { t: 'r', x: 166, y: 84, w: 66, h: 6, rx: 2, f: 'gri' }, ...ikiFincan(199, 84, .7)],
  `yakın çekim: ${YER_AD[t]}`);

const YAZI = ['en:s:morning', 'en:s:evening', 'en:s:home', 'en:s:work', 'en:y:genis-zaman', 'en:y:ucuncu-tekil-s', 'en:s:days-of-the-week', 'en:s:week',
  'en:s:today', 'en:s:tomorrow', 'en:k:every-day', 'en:k:what-time', 'en:k:half-past', 'en:k:do-you', 'en:k:i-dont'];

export default {
  dil: 'en', id: 'gun', no: 10, ad: 'Gündelik hayat',
  yoklama: [
    { tur: 'sec', ses: [anl('It is morning.')], dogruSes: [anl('It is morning.')], dogru: 1,
      secenek: [aksamS(), sabahS(), evS()], birimler: ['en:s:morning'] },
    { tur: 'sec', ses: [anl('It is half past ten.')], dogruSes: [anl('It is half past ten.')], dogru: 0,
      secenek: [saatS(10, 30), saatS(10), saatS(12, 30)], birimler: ['en:k:half-past', 'en:s:ten'] },
    { tur: 'sec', ses: [anl('Today is Sunday.')], dogruSes: [anl('Today is Sunday.')], dogru: 2,
      // Tur 1 (karar 6): yoklama raptiye uzlaşımı öğretilmeden sorulur; her şıkta raptiye ve halka aynı sütunda, yalnız gün değişir.
      secenek: [bugunS(1), bugunS(5), bugunS(7)], birimler: ['en:s:today', 'en:s:days-of-the-week'] },
  ],
  sayfalar: [
    // 1-4: morning, evening, home
    { tur: 'gor', ses: [anl('It is morning.')], S: sahne([...pencereGok('sabah', 50, 20, 140, 104, 1.6), ...elim()], `${PENCERE_AD.sabah}; senin elin`), yeni: 'en:s:morning', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('It is evening.')], S: sahne([...pencereGok('aksam', 50, 20, 140, 104, 1.6), ...elim()], `aynı pencere: ${PENCERE_AD.aksam}`), yeni: 'en:s:evening', degisen: 'nesne' },
    { tur: 'gor', ses: [sen('This is my home.')], S: sahne([...sokak(140), ...evCephe(104, 142, 1.35), ...elim()], 'boş zeminde ev: iki katlı küçük apartman, üçgen kiremit çatı ve baca; senin elin açık, eve doğru (elinde bir şey yok)'),
      yeni: 'en:s:home', degisen: 'nesne' },
    { tur: 'sec', ses: [anl('It is evening.')], dogruSes: [anl('It is evening.')], dogru: 2,
      secenek: [sabahS(), evS(), aksamS()], birimler: ['en:s:evening'] },
    // 5-8: work, I work, she works
    { tur: 'gor', ses: [anl('Work.')], S: sahne([...usta('yukari'), ...cekic(84, 50, .8), ...kutu2(94, 112)],
      'atölye: ustabaşı (kısa gri saç ve sakal) kahverengi tezgâhta çekici kaldırmış, çalışıyor; tezgâhta kutu'), yeni: 'en:s:work', degisen: 'eylem' },
    { tur: 'gor', ses: [sen('I work.')], S: sahne([...usta('asagi'), ...kutu2(94, 112), ...elim(), ...senElinde(matkap, .7)],
      'aynı atölye; ustabaşı arkada gülüyor; senin elinde matkap'), yeni: 'en:y:genis-zaman', degisen: 'kisi' },
    { tur: 'gor', ses: [anl('She works.')], S: sahne([...banImi(46, 44, 1.4), ...anna(120, 128, 2.4), { t: 'r', x: 16, y: 128, w: 208, h: 28, rx: 4, f: '#C9CED6' },
      ...paraSira(3, 176, 120, 1)], 'banka gişesi (duvarda üçgen alınlık ve sikke): gri tezgâhın arkasında Anna (siyah uzun saç, turuncu gövde), önünde paralar'),
    yeni: 'en:y:ucuncu-tekil-s', degisen: 'kisi' },
    { tur: 'sec', ses: [anl('She works.')], dogruSes: [anl('She works.')], dogru: 0,
      secenek: [giseS('anna'), atolyeElS(), giseS('arkadas')], birimler: ['en:y:ucuncu-tekil-s', 'en:s:work'] },
    // 9-11: go to work, go home
    { tur: 'gor', ses: [sen('I go to work in the morning.')], S: sahne(gidis('ise', 'sabah'), 'üstte doğan güneş, açık gökyüzü; solda ev, sağda atölye (kapısının üstünde çekiç tabelası); evden atölyeye kesik ok'), degisen: 'eylem' },
    { tur: 'gor', ses: [sen('I go home in the evening.')], S: sahne(gidis('eve', 'aksam'), 'üstte hilal ay, lacivert gökyüzü; aynı ev ve atölye, pencereler ışıklı; atölyeden eve kesik ok'), degisen: 'eylem' },
    { tur: 'sec', ses: [sen('I go home in the evening.')], dogruSes: [sen('I go home in the evening.')], dogru: 1,
      secenek: [gidisS('ise', 'sabah'), gidisS('eve', 'aksam'), gidisS('eve', 'sabah')], birimler: ['en:s:home', 'en:s:evening', 'en:y:genis-zaman', 'en:s:work'] },
    // 12-14: günler
    { tur: 'gor', ses: [anl('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.')], S: sahne(takvim(120, 150, 1.55), 'boş zeminde büyük haftalık takvim: yedi sütun, son ikisi gri, halka yok'),
      yeni: 'en:s:days-of-the-week', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Sunday.')], S: sahne(takvim(120, 150, 1.55, { halka: 7 }), 'aynı takvim; 7. sütun (son) halkalı'), degisen: 'nesne' },
    { tur: 'sec', ses: [anl('Monday.')], dogruSes: [anl('Monday.')], dogru: 2,
      secenek: [takvimS({ halka: 7 }), takvimS({ halka: 6 }), takvimS({ halka: 1 })], birimler: ['en:s:days-of-the-week'] },
    // 15-18: week, today, tomorrow
    { tur: 'gor', ses: [anl('A week.')], S: sahne(takvim(120, 150, 1.55, { cerceve: true }), 'aynı takvim; bütün sayfa vurgu çerçevesinde'), yeni: 'en:s:week', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Today is Monday.')], S: sahne(takvim(120, 150, 1.55, { raptiye: 1, halka: 1 }), 'takvim; 1. sütunun tepesinde kırmızı raptiye, 1. sütun halkalı'), yeni: 'en:s:today', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Tomorrow is Tuesday.')], S: sahne(takvim(120, 150, 1.55, { raptiye: 1, halka: 2, ok: [1, 2] }), 'aynı takvim; raptiye 1. sütunda kalıyor, halka 2. sütunda; raptiyeden halkaya kısa kesik ok'),
      yeni: 'en:s:tomorrow', degisen: 'nesne' },
    { tur: 'sec', ses: [anl('Tomorrow is Friday.')], dogruSes: [anl('Tomorrow is Friday.')], dogru: 1,
      secenek: [yarinS(5, 5), yarinS(4, 5), yarinS(4, 4)], birimler: ['en:s:tomorrow', 'en:s:days-of-the-week'] },
    // 19-20: every day
    { tur: 'gor', ses: [sen('I drink coffee every day.')], S: sahne([...takvim(120, 112, 1.45, { simge: { hepsi: 'kahve' } }), ...elim(), ...fincan(176, 118, 'kahve', .75)],
      'takvim; yedi sütunun hepsinde küçük kahve fincanı; senin elinde kahve fincanı'), yeni: 'en:k:every-day', degisen: 'nesne' },
    { tur: 'sec', ses: [sen('I drink coffee every day.')], dogruSes: [sen('I drink coffee every day.')], dogru: 0,
      secenek: [simgeS('kahve', 'hepsi'), simgeS('kahve', [1]), simgeS('kahve', [6, 7])], birimler: ['en:k:every-day'] },
    // 21-23: what time, half past
    { tur: 'gor', ses: [sen('What time is it?')], S: sahne(odaKapi([...arkadas(70, 150, 2.2), ...kadran(196, 50, 4, 30, .55), ...senBalon(['saatYuzu', 'soru'], 164, 100, 1.45), ...elim()]),
      'odanın açık kapısında arkadaşın (gözlük); duvarda saat; senin balonunda akrepsiz küçük saat yüzü ve soru işareti'), yeni: 'en:k:what-time', degisen: 'kisi' },
    { tur: 'gor', ses: [ark('It is half past four.')], S: sahne([...kadran(138, 86, 4, 30, 1.6), ...arkadas(34, 170, 1.6, 'ileri')],
      `yakın çekim duvar saati: ${saatAd(4, 30)}; solda arkadaşın saati gösteriyor`), yeni: 'en:k:half-past', degisen: 'nesne' },
    { tur: 'sec', ses: [anl('It is half past four.')], dogruSes: [anl('It is half past four.')], dogru: 1,
      secenek: [saatS(4), saatS(4, 30), saatS(10, 30)], birimler: ['en:k:half-past'] },
    // 24-27: Do you …?, I don't …
    { tur: 'gor', ses: [ark('Do you drink tea?')], S: sahne([...arkadas(70, 150, 2.4, 'ileri'), ...masa(), ...fincan(112, 114, 'cay', .9), ...onunBalon(['cay', 'soru'], 156, 32), ...elim()],
      'masada arkadaşın; elinin önünde çay fincanı (poşet ipi); balonunda çay fincanı ve soru işareti'), yeni: 'en:k:do-you', degisen: 'kisi' },
    { tur: 'gor', ses: [sen("No. I don't drink tea.")], S: sahne([...arkadas(70, 150, 2.4, 'ileri'), ...masa(), ...fincan(112, 114, 'cay', .9), ...senBalon(['cay', 'hayir'], 182, 74, 1.4), ...elim()],
      'aynı kare; senin balonunda çay fincanı ve kırmızı çarpı'), yeni: 'en:k:i-dont', degisen: 'nesne' },
    { tur: 'sec', ses: [sen("I don't drink tea.")], dogruSes: [sen("I don't drink tea.")], dogru: 2,
      secenek: [['cay', 'evet'], ['kahve', 'hayir'], ['cay', 'hayir']].map(o => sahne([...balon(120, 56, icerik(120, 49, 1.7, o), 2.2), ...el(196, 112)], `senin balonunda ${icerikAd(o)}`)),
      birimler: ['en:k:i-dont'] },
    { tur: 'sec', ses: [ark('Do you drink coffee?')], dogruSes: [ark('Do you drink coffee?')], dogru: 0,
      secenek: [['kahve', 'soru'], ['kahve', 'evet'], ['cay', 'soru']].map(o => sahne([...arkadas(44, 108, 1.7), ...konusma(152, 46, icerik(152, 46, 1.4, o), 1.6)],
        `arkadaşın (gözlük); balonunda ${icerikAd(o)}`)), birimler: ['en:k:do-you'] },
    // 28-29: Does she …? / She doesn't … (kontrolcü notu: genis-zaman bölümü; düzenli iş için on Sundays)
    { tur: 'gor', ses: [ark('Does she work on Sundays?')], S: sahne(SK([...bankaCephe(196, 122, 1.0), ...anna(196, 114, .75), ...arkadas(50, 126, 1.7),
      ...onunBalon([['takvim', { halka: 7 }], 'annaYuz', 'soru'], 124, 36, 1.75, .85)]),
      'sokakta arkadaşın; sağda banka, kapısında Anna görünüyor; arkadaşının balonunda küçük takvim (pazar sütunu halkalı), Anna\'nın küçük yüzü ve soru işareti'), degisen: 'kisi' },
    { tur: 'gor', ses: [sen("No. She doesn't work on Sundays.")], S: sahne(SK([...bankaCephe(196, 122, 1.0), ...anna(196, 114, .75), ...arkadas(50, 126, 1.7),
      ...senBalon([['takvim', { halka: 7 }], 'annaYuz', 'hayir'], 124, 42, 2.0, .8), ...elim()]),
      'aynı kare; senin balonunda küçük takvim (pazar sütunu halkalı), Anna\'nın küçük yüzü ve kırmızı çarpı'), degisen: 'nesne' },
    // Yazı perdesi
    { tur: 'yazi', birimler: YAZI },
  ],

  // ---- Pratik (taslak §19.4): 5 oyun dizisi = 5 tür, 37 etkileşim. Geri dönüş ≥ %30. Oynatıcı şıkları karıştırmaz.
  pratik: [
    // Oyun 1 · eşleştir: zaman; ev ve iş
    { tur: 'eslestir', ciftler: [
      { ses: [anl('It is morning.')], S: sabahS(), birim: 'en:s:morning' },
      { ses: [anl('It is evening.')], S: aksamS(), birim: 'en:s:evening' },
      { ses: [anl('A week.')], S: takvimS({ cerceve: true }), birim: 'en:s:week' },
      { ses: [anl('A clock.')], S: duvarSaatiS(), birim: 'en:s:clock' },
    ] },
    { tur: 'eslestir', ciftler: [
      { ses: [sen('This is my home.')], S: evS(), birim: 'en:s:home' },
      { ses: [anl('She works.')], S: giseS('anna'), birim: 'en:y:ucuncu-tekil-s' },
      { ses: [sen('I work.')], S: atolyeElS(), birim: 'en:y:genis-zaman' },
      { ses: [anl('A taxi.')], S: taksiS(), birim: 'en:s:taxi' },
    ] },
    // Oyun 2 · boşluk (6; doğrular B C A A C B)
    { tur: 'bosluk', ses: [anl('Today is Wednesday.')], metin: 'Today is ___.',
      secenek: [bugunS(1), bugunS(3), bugunS(7)], dogru: 1, birimler: ['en:s:today', 'en:s:days-of-the-week'] },
    { tur: 'bosluk', ses: [sen('I go to work by bus.')], metin: 'I go to work by ___.',
      secenek: [taksiS(), trenS(), otobusS()], dogru: 2, birimler: ['en:s:work', 'en:y:genis-zaman', 'en:s:go', 'en:s:bus'] },
    { tur: 'bosluk', ses: [ark('My brother works in a shop.')], metin: 'My brother works in a ___.',
      secenek: [sahne([...sokak(100, { alt: 112, serit: false }), ...dukkan(96, 104, 1.25), { t: 'r', x: 106, y: 54, w: 25, h: 50, rx: 1.9, f: '#4B4B5A' }, ...kardes(118.5, 103, .95),
        { t: 'p', d: 'M131 54 L138.5 50.25 L138.5 106.5 L131 104 Z', f: 'buz' }], "dükkânın kapısı açık; arkadaşının kardeşi açık kapıdan içeride görünüyor"),
      giseS('kardes'),
      sahne([...sokak(100, { alt: 112, serit: false }), ...istasyon(100, 104, 1.0), ...kardes(196, 108, 1.2)], 'istasyon (kemerli giriş); arkadaşının kardeşi istasyonun sağında kaldırımda')],
      dogru: 0, birimler: ['en:y:ucuncu-tekil-s', 'en:s:shop', 'en:s:in', 'en:s:brother', 'en:s:my'] },
    { tur: 'bosluk', ses: [ark('What time is it? It is half past nine.')], metin: 'What time is it? It is half past ___.',
      secenek: [saatS(9, 30), saatS(11, 30), saatS(2, 30)], dogru: 0, birimler: ['en:k:what-time', 'en:k:half-past', 'en:s:nine'] },
    { tur: 'bosluk', ses: [ust('Do you work tomorrow?')], metin: 'Do you work ___?',
      secenek: [takvimS({ cerceve: true }), bugunS(2), yarinS(2, 3)], dogru: 2, birimler: ['en:k:do-you', 'en:s:tomorrow', 'en:s:work'] },
    { tur: 'bosluk', ses: [kom("I don't drink coffee.")], metin: "I don't drink ___.",
      secenek: [icecekS('cay'), icecekS('kahve'), icecekS('su')], dogru: 1, birimler: ['en:k:i-dont', 'en:s:drink', 'en:s:coffee'] },
    // Oyun 3 · ne derdin? (6; senin balonun yok; karşıdakinin yüzü hep gülen; doğrular A C B B A C)
    { tur: 'nederdin', S: sahne(odaKapi([...arkadas(70, 150, 2.2), ...kadran(200, 106, 10, 0, .62), ...onunBalon(['saatYuzu', 'soru'], 156, 34, 1.5)]),
      `odanın açık kapısında arkadaşın; balonunda akrepsiz küçük saat yüzü ve soru işareti; duvarda saat ${saatAd(10, 0)}`),
      secenekSes: [[sen("It is ten o'clock.")], [sen('It is half past ten.')], [sen('Nice to meet you.')]], dogru: 0, birimler: ['en:s:oclock', 'en:s:ten'] },
    { tur: 'nederdin', S: sahne(koridor([...anna(96, 150, 2.2), ...takvim(164, 128, .72, { raptiye: 1 }), ...onunBalon([['takvim', {}], 'soru'], 150, 34, 1.6, 1.0)]),
      'koridorda Anna kendi açık kapısının önünde; duvarda haftalık takvim, kırmızı raptiye 1. sütunda (pazartesi); Anna\'nın balonunda küçük takvim ve soru işareti'),
      secenekSes: [[sen('Tomorrow is Monday.')], [sen('Goodbye.')], [sen('Today is Monday.')]], dogru: 2, birimler: ['en:s:today', 'en:s:days-of-the-week'] },
    { tur: 'nederdin', S: sahne([...arkadas(70, 150, 2.4), ...masa(), ...fincan(150, 114, 'kahve', 1.0), ...onunBalon(['kahve', 'soru'], 156, 32), ...elim()],
      'kafede masada arkadaşın; balonunda kahve fincanı ve soru işareti; senin önünde kahve fincanı'),
      secenekSes: [[sen("No. She doesn't drink coffee.")], [sen('Yes. I drink coffee every day.')], [sen('Yes. She drinks coffee every day.')]], dogru: 1, birimler: ['en:k:every-day', 'en:y:genis-zaman', 'en:s:drink', 'en:s:coffee'] },
    { tur: 'nederdin', S: sahne([...gokBant('aksam', 50, .9), ...sokak(130), ...atolyeCephe(64, 132, 1.0, { isik: true }), ...ustaFig(122, 140, 1.9), ...onunBalon(['ev', 'ay', 'soru'], 194, 56, 1.35, 1.0)],
      'akşam: üstte hilal ay; atölyenin önünde ustabaşı (kısa gri saç ve sakal); balonunda küçük ev, hilal ay ve soru işareti'),
      secenekSes: [[sen('It is morning.')], [sen('Yes. I go home in the evening.')], [sen('My name is Deniz.')]], dogru: 1, birimler: ['en:s:home', 'en:y:genis-zaman', 'en:s:go', 'en:s:evening'] },
    { tur: 'nederdin', S: sahne([...usta('asagi'), ...kadran(206, 104, 4, 30, .58), ...onunBalon(['saatYuzu', 'soru'], 162, 42, 1.5)],
      `atölyede ustabaşı; balonunda akrepsiz küçük saat yüzü ve soru işareti; duvarda saat ${saatAd(4, 30)}`),
      secenekSes: [[sen('It is half past four.')], [sen("It is four o'clock.")], [sen('Thank you.')]], dogru: 0, birimler: ['en:k:half-past', 'en:s:four'] },
    { tur: 'nederdin', S: sahne(SK([...bankaCephe(196, 122, 1.0), ...anna(196, 114, .75), ...arkadas(50, 126, 1.7), ...onunBalon(['annaYuz', 'soru'], 130, 40, 1.5)]),
      'sokakta arkadaşın; balonunda Anna\'nın küçük yüzü ve soru işareti; sağda banka, kapısında Anna görünüyor'),
      secenekSes: [[sen('I work in a bank.')], [sen('He works in a bank.')], [sen('She works in a bank.')]], dogru: 2, birimler: ['en:y:ucuncu-tekil-s', 'en:s:in', 'en:s:bank'] },
    // Oyun 4 · sırala (5): tek büyük harfli kart ve tek bitiş noktalamalı kart; ortada "I", gün adı ve özel ad yok.
    { tur: 'sirala', ses: [sen('I go home in the evening.')], parcalar: ['I', 'go', 'home', 'in', 'the', 'evening.'], birimler: ['en:y:genis-zaman', 'en:s:home', 'en:s:evening', 'en:s:go'] },
    { tur: 'sirala', ses: [anl('She works in a bank.')], parcalar: ['She', 'works', 'in', 'a', 'bank.'], birimler: ['en:y:ucuncu-tekil-s', 'en:s:work', 'en:s:in', 'en:s:bank'] },
    { tur: 'sirala', ses: [ark('Do you drink coffee?')], parcalar: ['Do', 'you', 'drink', 'coffee?'], birimler: ['en:k:do-you', 'en:s:drink', 'en:s:coffee'] },
    { tur: 'sirala', ses: [ark('My brother works every day.')], parcalar: ['My', 'brother', 'works', 'every', 'day.'], birimler: ['en:y:ucuncu-tekil-s', 'en:k:every-day', 'en:s:my', 'en:s:brother'] },
    { tur: 'sirala', ses: [ark('What time is it?')], parcalar: ['What', 'time', 'is', 'it?'], birimler: ['en:k:what-time'] },
    // Oyun 5 · hızlı tur (60 sn, 12 soru); doğrular B C A C A B A C B C B A (A 4, B 4, C 4)
    { tur: 'hizli', sure: 60, sorular: [
      { tur: 'sec', ses: [anl('It is evening.')], dogruSes: [anl('It is evening.')], secenek: [sabahS(), aksamS(), evS()], dogru: 1, birimler: ['en:s:evening'] },
      { tur: 'sec', ses: [anl('Sunday.')], dogruSes: [anl('Sunday.')], secenek: [takvimS({ halka: 1 }), takvimS({ halka: 6 }), takvimS({ halka: 7 })], dogru: 2, birimler: ['en:s:days-of-the-week'] },
      { tur: 'sec', ses: [anl('It is half past eleven.')], dogruSes: [anl('It is half past eleven.')], secenek: [saatS(11, 30), saatS(11), saatS(1, 30)], dogru: 0, birimler: ['en:k:half-past', 'en:s:eleven'] },
      { tur: 'sec', ses: [anl('A week.')], dogruSes: [anl('A week.')], secenek: [takvimS({ halka: 3 }), duvarSaatiS(), takvimS({ cerceve: true })], dogru: 2, birimler: ['en:s:week'] },
      // Tur 1 (karar 3): Does she / she doesn't yapısının sorulu öğesi (önce "This is my home.").
      { tur: 'sec', ses: [anl("She doesn't work on Sundays.")], dogruSes: [anl("She doesn't work on Sundays.")], secenek: [annaHaftaS('pzt-cmt'), annaHaftaS('hepsi'), annaHaftaS('paz')], dogru: 0, birimler: ['en:y:ucuncu-tekil-s', 'en:k:i-dont', 'en:s:work', 'en:s:days-of-the-week'] },
      { tur: 'sec', ses: [anl('He works.')], dogruSes: [anl('He works.')], secenek: [giseS('anna'), ustaCekicS(), atolyeElS()], dogru: 1, birimler: ['en:y:ucuncu-tekil-s', 'en:s:he'] },
      { tur: 'sec', ses: [anl('Today is Friday.')], dogruSes: [anl('Today is Friday.')], secenek: [bugunS(5), bugunS(1), bugunS(7)], dogru: 0, birimler: ['en:s:today', 'en:s:days-of-the-week'] },
      { tur: 'sec', ses: [anl('Tomorrow is Wednesday.')], dogruSes: [anl('Tomorrow is Wednesday.')], secenek: [yarinS(3, 3), yarinS(2, 2), yarinS(2, 3)], dogru: 2, birimler: ['en:s:tomorrow', 'en:s:days-of-the-week'] },
      { tur: 'sec', ses: [anl('She drinks tea every day.')], dogruSes: [anl('She drinks tea every day.')], secenek: [simgeS('cay', [1]), simgeS('cay', 'hepsi'), simgeS('cay', [6, 7])], dogru: 1, birimler: ['en:k:every-day', 'en:y:ucuncu-tekil-s', 'en:s:drink', 'en:s:tea'] },
      { tur: 'sec', ses: [anl('Forty.')], dogruSes: [anl('Forty.')], secenek: [plakaS(14), plakaS(4), plakaS(40)], dogru: 2, birimler: ['en:y:onluklar'] },
      { tur: 'sec', ses: [sen("I don't drink water.")], dogruSes: [sen("I don't drink water.")],
        secenek: [['su', 'evet'], ['su', 'hayir'], ['kahve', 'hayir']].map(o => sahne([...balon(120, 56, icerik(120, 49, 1.7, o), 2.2), ...el(196, 112)], `senin balonunda ${icerikAd(o)}`)),
        dogru: 1, birimler: ['en:k:i-dont', 'en:s:drink', 'en:s:water'] },
      { tur: 'sec', ses: [sen('I go to work in the morning.')], dogruSes: [sen('I go to work in the morning.')], secenek: [gidisS('ise', 'sabah'), gidisS('eve', 'sabah'), gidisS('ise', 'aksam')], dogru: 0, birimler: ['en:s:work', 'en:s:morning', 'en:y:genis-zaman', 'en:s:go'] },
    ] },
  ],

  // ---- Hikâyecikler (taslak §19.5): yeni birim yok. Kök hikâyede bir kez geçen satırdır; şıklar o karenin ya da olgunun üç hâlidir;
  // doğru şık hikâyede olan hâldir. Bir sorunun kökü ya da şıkları başka bir sorunun cevabını ya da tuzağını göstermez; renk sorusu yok.
  // Doğrular H1 B C A, H2 A C B (tur 1, M-6: H2 sıralı görünmesin).
  hikayeler: [
    // 1 · Müfredat fikri: vardiya değişir, pazar günü çalışılıp çalışılmayacağı sorulur. Cumartesi akşamı 7:30 vardiyası; anahtar.
    { id: 'vardiya', ad: 'The week',
      sayfalar: [
        { tur: 'gor', ses: [ust('Hello. This is your week.')], S: sahne(h1Atolye('ileri'),
          `atölye: ustabaşı (kısa gri saç ve sakal) duvardaki panoyu gösteriyor; panoda ${panoAd()}; küçük pencerede doğan güneş; duvar saati ${saatAd(8, 0)}; senin elin`) },
        { tur: 'gor', ses: [ust('Do you work on Sundays?')], S: sahne(h1Atolye('asagi', 'mutlu', onunBalon([['takvim', { halka: 7, simge: { 7: 'cekic' } }], 'soru'], 160, 42, 1.6, 1.15), null, false),
          'ustabaşı; balonunda küçük takvim (pazar sütunu halkalı, içinde çekiç) ve soru işareti') },
        { tur: 'gor', ses: [sen("No. I don't work on Sundays.")], S: sahne(h1Atolye('asagi', 'mutlu', senBalon([['takvim', { halka: 7, simge: { 7: 'cekic' } }], 'hayir'], 160, 48, 2.1, 1.0), null, false),
          'senin balonunda küçük takvim (pazar sütunu halkalı, içinde çekiç) ve kırmızı çarpı') },
        { tur: 'gor', ses: [ust('Can you work on Saturday?')], S: sahne(h1Atolye('asagi', 'mutlu', onunBalon([['takvim', { halka: 6, simge: { 6: 'cekic' } }], 'soru'], 160, 42, 1.6, 1.15), null, false),
          'ustabaşının balonunda küçük takvim (cumartesi sütunu halkalı, içinde çekiç) ve soru işareti') },
        { tur: 'gor', ses: [sen('Yes, I can.')], S: sahne(h1Atolye('asagi', 'mutlu', senBalon([['takvim', { halka: 6, simge: { 6: 'cekic' } }], 'evet'], 160, 48, 2.1, 1.0), null, false),
          'senin balonunda küçük takvim (cumartesi sütunu halkalı, içinde çekiç) ve yeşil onay') },
        { tur: 'gor', ses: [ust('Saturday. Half past seven.')], S: sahne(h1Atolye('asagi', 'mutlu', onunBalon([['saat', { h: 7, dk: 30 }]], 160, 42, 1.6, 1.25), null, false),
          `ustabaşı gülüyor; balonunda saat ${saatAd(7, 30)}`) },
        { tur: 'gor', ses: [sen('In the morning?')], S: sahne(h1Atolye('asagi', 'mutlu', senBalon(['gunes', 'soru'], 160, 48, 1.7, 1.3), null, false),
          'senin balonunda doğan güneş ve soru işareti') },
        { tur: 'gor', ses: [ust('No. In the evening.')], S: sahne(h1Atolye('ileri', 'mutlu', onunBalon(['ay'], 166, 30, 1.2, 1.3), 6, false),
          `ustabaşı panodaki takvimi gösteriyor; panoda ${panoAd(6)}; balonunda hilal ay`) },
        { tur: 'gor', ses: [ust('Your friend works on Sunday.')], S: sahne(h1Atolye('asagi', 'mutlu', onunBalon([['takvim', { halka: 7 }], 'arkYuz'], 160, 42, 1.6, 1.15), 6, false),
          'ustabaşının balonunda küçük takvim (pazar sütunu halkalı) ve yanında arkadaşının küçük yüzü (gözlük)') },
        { tur: 'gor', ses: [ust('Here is the key.')], S: sahne([...usta('ileri'), ...anahtar(106, 74, 'gri', 1.1), ...okY(118, 80, 172, 118), ...pano(172, 108, .62, 6), ...elim()],
          'ustabaşı küçük gri anahtarı sana uzatıyor (ondan senin eline kesik ok)') },
        { tur: 'gor', ses: [sen('Thank you. Goodbye.')], S: sahne([...usta('yukari'), ...sallar(60, 58), ...pano(172, 108, .62, 6), ...elim(), ...anahtar(184, 112, 'gri', 1.2)],
          'ustabaşı el sallıyor; senin avucunda küçük gri anahtar; panoda takvim') },
      ],
      sorular: [
        // Soru 1 (kare 8, gün): akşam vardiyası hangi gün. Tuzak pazar (kare 2–3'te sorulan), cuma (son iş günü). Şıklarda saat ve kişi yok.
        { tur: 'sec', ses: [ust('No. In the evening.')], dogruSes: [ust('No. In the evening.')], dogru: 1,
          secenek: [panoS(7), panoS(6), panoS(5)], birimler: ['en:s:no', 'en:s:evening', 'en:s:days-of-the-week', 'en:s:week'] },
        // Soru 2 (kare 7, saat): vardiyanın saati. Tur 1 (karar 1): kare 1'in saati tam sekiz; şıklardaki 8:30 ve 9:30 hikâyede hiç geçmez.
        // Üçü de buçuk; 6:30 yok. Doğru en küçük değer.
        { tur: 'sec', ses: [sen('In the morning?')], dogruSes: [sen('In the morning?')], dogru: 2,
          secenek: [saatS(8, 30), saatS(9, 30), saatS(7, 30)], birimler: ['en:s:in', 'en:s:morning', 'en:k:half-past'] },
        // Soru 3 (kare 11, nesne): avucundaki. Tur 1 (karar 5): çeldiriciler de verilebilir küçük nesneler: para (iş yerinde "tipik"),
        // otobüs bileti (Şehir); atölye aleti yok (mantıkla elenmesin).
        { tur: 'sec', ses: [sen('Thank you. Goodbye.')], dogruSes: [sen('Thank you. Goodbye.')], dogru: 0,
          secenek: [avucS('anahtar'), avucS('para'), avucS('bilet')], birimler: ['en:k:thank-you', 'en:s:goodbye'] },
      ] },
    // 2 · Komşuya kahve: Anna akşam sorar, ertesi akşam saat altıda kendi evinde; sen üç elma götürürsün.
    { id: 'kahve', ad: 'Tomorrow',
      sayfalar: [
        { tur: 'gor', ses: [kom('Hello. Do you work tomorrow?')], S: sahne(koridor([...pencereGok('aksam', 128, 26, 60, 44, .7), ...anna(110, 150, 2.2), ...elim()]),
          'akşam: koridor, küçük pencerede hilal ay; Anna kendi açık kapısının önünde; senin elin') },
        { tur: 'gor', ses: [sen('Yes. I work tomorrow.')], S: sahne(koridor([...anna(110, 150, 2.2), ...senBalon([['takvim', { raptiye: 2, halka: 3, simge: { 3: 'cekic' } }], 'evet'], 184, 46, 2.1, 1.0), ...elim()]),
          'senin balonunda küçük takvim (raptiye 2. sütunda, 3. sütun halkalı, içinde çekiç) ve yeşil onay') },
        { tur: 'gor', ses: [kom('Coffee? Tomorrow evening?')], S: sahne(koridor([...anna(110, 150, 2.2), ...onunBalon(['kahve', 'ay', 'soru'], 168, 42, 1.5, 1.0), ...elim()]),
          'Anna\'nın balonunda kahve fincanı, hilal ay ve soru işareti') },
        { tur: 'gor', ses: [sen('Yes, please. What time?')], S: sahne(koridor([...anna(110, 150, 2.2), ...senBalon(['saatYuzu', 'soru'], 186, 44, 1.5), ...elim()]),
          'senin balonunda akrepsiz küçük saat yüzü ve soru işareti') },
        { tur: 'gor', ses: [kom('Six o\'clock.')], S: sahne(koridor([...anna(110, 150, 2.2), ...onunBalon([['saat', { h: 6, dk: 0 }]], 168, 42, 1.5, 1.25), ...elim()]),
          `Anna'nın balonunda saat ${saatAd(6, 0)}`) },
        { tur: 'gor', ses: [sen('Where?')], S: sahne(koridor([...anna(110, 150, 2.2), ...senBalon(['soru'], 188, 44, 1.3), ...elim()]),
          'senin balonunda soru işareti') },
        { tur: 'gor', ses: [kom('My home. Here.')], S: sahne(koridor([...anna(110, 150, 2.2, 'ileri'), ...okY(96, 104, 66, 100), ...elim()]),
          'Anna kendi açık kapısını gösteriyor (Anna\'dan kapısına kesik ok)') },
        { tur: 'gor', ses: [anl('It is six o\'clock.')], S: sahne([{ t: 'r', x: 0, y: 150, w: 240, h: 30, rx: 0, f: 'tas' }, ...pencereGok('aksam', 30, 24, 70, 56, .8),
          ...kadran(184, 56, 6, 0, .62), ...masa(), ...elma(96, 104, 'red', 10), ...elma(120, 104, 'red', 10), ...elma(144, 104, 'red', 10)],
          `ertesi akşam, senin odan: pencerede hilal ay; duvar saati ${saatAd(6, 0)}; masada üç kırmızı elma`) },
        { tur: 'gor', ses: [sen('Hello, Anna.')], S: sahne(koridor([...anna(110, 150, 2.2), ...elim(), ...elma(170, 110, 'red', 8), ...elma(190, 110, 'red', 8), ...elma(180, 96, 'red', 8)]),
          'Anna kendi açık kapısının önünde gülüyor; senin avucunda üç kırmızı elma') },
        { tur: 'gor', ses: [kom('Apples! Thank you.')], S: sahne(koridor([{ t: 'r', x: 36, y: 118, w: 40, h: 5, rx: 1, f: 'gri' }, ...ikiFincan(56, 118, .5), ...anna(118, 150, 2.2, 'tasi'),
          ...elma(108, 126, 'red', 8), ...elma(128, 126, 'red', 8), ...elma(118, 114, 'red', 8), ...elim()]),
          'Anna elmaları kucağına almış; açık kapının içinde küçük masada iki kahve fincanı') },
      ],
      sorular: [
        // Soru 1 (kare 4, saat): buluşma saati. Tur 1 (karar 2): kare 8 de "It is six o'clock."; 5:00 ve 6:30 hikâyede hiç geçmez. Doğru orta değer, A.
        { tur: 'sec', ses: [sen('Yes, please. What time?')], dogruSes: [sen('Yes, please. What time?')], dogru: 0,
          secenek: [saatS(6), saatS(5), saatS(6, 30)], birimler: ['en:s:yes', 'en:s:please', 'en:k:what-time', 'en:s:oclock'] },
        // Soru 2 (kare 6, yer): kahve nerede. Tuzaklar kafe ("tipik"), senin odan (kare 8). Şıklarda saat ve elma yok.
        { tur: 'sec', ses: [sen('Where?')], dogruSes: [sen('Where?')], dogru: 2,
          secenek: [yerS('kafe'), yerS('oda'), yerS('anna')], birimler: ['en:s:where', 'en:s:home'] },
        // Soru 3 (kare 9, nesne): avucundaki. Tuzaklar ekmek (Şehir H1'in cevabı), fincan (kahve daveti).
        { tur: 'sec', ses: [sen('Hello, Anna.')], dogruSes: [sen('Hello, Anna.')], dogru: 1,
          secenek: [avucS('ekmek'), avucS('elma'), avucS('fincan')], birimler: ['en:s:hello'] },
      ] },
  ],
};
