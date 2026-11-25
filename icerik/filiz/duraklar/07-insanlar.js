// Filiz durağı 7: İnsanlar (Dalga 1 Görev 8, 23 Kasım 2026). Taslak: taslak/durak-taslaklari.md §16 (29 sahne sayfası, 3 yoklama
// sorusu, 5 oyun dizisi ve 37 etkileşim, iki hikâyecik).
// Kadın ve erkek, he ve she; koridorda yeni komşu Anna: tanışma, nereli olmak, arkadaşın, his ve her, kardeşler, I have, I like.
// Kahraman "sen"sin (adın Deniz) ve çizilmezsin: sağ alttaki el, balonun ve kapının kenarı; aile şemasında senin yerin senin elinin
// simgesidir. Türkçe yok; yalnız özel ad "Türkiye" (kontrolcü kararı). Bütün roller iDil sesiyle konuşur: Anna ve kız kardeş 'memur',
// yeni komşu ve arkadaşın 'is' (kontrolcü kararı; çerçeve ve figür ayırır). Bir hikâyede iki konuşan aynı rolü paylaşmaz.
// Yeni birimler (15): man, woman, he, she, nice-to-meet-you, neighbour, i-am-from, friend, his, her, sister, brother, i-have, i-like,
// do-you-like.
// Geri dönenler: hello, my, your, this is, here, goodbye, thank you, sorry, yes, no, where, a, bag, key, box, apples, red, green,
// yellow, doctor, pharmacy, name, my name is, I am, 11-19 (twelve).
// Uzlaşımlar: kadın = omuza inen saç; erkek = kısa saç ve kısa sakal (figurSac; renk cinsiyete bağlı değil); tanışma = tokalaşma;
// ülke = uçaklı kartta ülkenin İngilizce adının baş harfi (bayrak ve siluet yok); sevmek = kırmızı kalp; "seviyor musun?" = kalp ve
// soru işareti; kardeş = aile şeması (üstte gri saçlı iki kişi). Sahne ve pratikte saçlar kahve ve siyah, ebeveynler gri; sarı ve
// kızıl saç, kırmızı çanta, yeşil elma, sarı top, üst üste iki kutu ve kapı numarası yalnız hikâyelerde (sızıntı önlemi; sahnede üç kutu yan yana).
// Sec seçenekleri oynatıcıda boy 120 penceresinde çizilir; ana öğeler y ≤ 112.
import { balon, canta, el, elma, figurSac, form, FORM_SATIR, halka, isaret, kapi, kisi, konusma, kutu, okSag, okSol, pencere,
  plaka, salla, anahtar, ulkeKarti, yatak, gomlek, SEN_EL } from '../parca.js';

const H = 180;
const sahne = (o, alt) => ({ boy: H, alt, o });
const anl = metin => ({ rol: 'anlatici', metin });
const sen = metin => ({ rol: 'sen', metin });
const kom = metin => ({ rol: 'memur', metin });  // Anna (ve Hikâye 2'de kız kardeş)
const kar = metin => ({ rol: 'memur', metin });  // Hikâye 2: arkadaşının kız kardeşi
const ys = metin => ({ rol: 'is', metin });      // Hikâye 1: yeni komşu
const ark = metin => ({ rol: 'is', metin });     // arkadaşın
const r2 = v => +v.toFixed(2);

const SAYI_AD = { 12: 'on iki', 15: 'on beş', 18: 'on sekiz' };
const SAC_AD = { kahve: 'kahverengi', siyah: 'siyah', sari: 'sarı', kizil: 'kızıl', gri: 'gri' };
const GOVDE_AD = { yesil: 'yeşil', turuncu: 'turuncu', su: 'mavi', sari: 'sarı', kar: 'beyaz önlük', kahve: 'kahverengi' };

// ---- Yardımcılar (parça değil) ----
// Figür: (x, y) ayak tabanı; cins 'k' kadın (omuza inen saç) | 'e' erkek (kısa saç ve sakal); govde gövde rengi (açıkça verilir).
// ek: { tur?: 'topuz' | 'atkuyrugu' (kadın saç biçimi), gozluk?: true } (düzeltme turu 1).
const fig = (x, y, s, cins, sac, govde, kol = 'asagi', yuz = 'mutlu', ek = {}) => [
  { t: 'k', x, y, s, kol, yuz, f: govde },
  ...figurSac(x, y, s, ek.tur || (cins === 'k' ? 'uzun' : 'kisa'), sac, { sakal: cins === 'e', gozluk: ek.gozluk }),
];
const BICIM_AD = { uzun: 'omuza inen', topuz: 'topuz', atkuyrugu: 'at kuyruğu' };
const kisiAd = (cins, sac, govde, tur) => `${cins === 'k' ? `kadın, ${BICIM_AD[tur || 'uzun']}` : 'erkek, kısa'} ${SAC_AD[sac]} saç${cins === 'e' ? ' ve sakal' : ''}, ${GOVDE_AD[govde]} gövde`;
const anna = (x, y, s, kol, yuz) => fig(x, y, s, 'k', 'siyah', 'turuncu', kol, yuz);
// Arkadaşın: imzası gözlük ve kahverengi gövde (düzeltme turu 1–2: kardeşlerden, komşulardan ve sahnenin yeşil gövdeli genel
// erkek figüründen belirgin ayrılsın).
const arkadas = (x, y, s, kol, yuz) => fig(x, y, s, 'e', 'kahve', 'kahve', kol, yuz, { gozluk: true });
const elim = () => el(...SEN_EL);
const sallar = (x, y) => [...salla(x + 18, y, 1), ...salla(x - 18, y, -1)];
// Kırmızı kalp ("like"): (x, y) ortası, s ölçek (s=1'de ≈ 20x18).
const kalp = (x, y, s = 1) => {
  const P = (dx, dy) => `${r2(x + dx * s)} ${r2(y + dy * s)}`;
  return [{ t: 'p', d: `M${P(0, 8)} C${P(-12, 0)} ${P(-10, -11)} ${P(0, -5)} C${P(10, -11)} ${P(12, 0)} ${P(0, 8)} Z`, f: 'kirmizi' }];
};
// Soru işareti (balon içi); sozIci'nin 'soru' çizimiyle aynı.
const soruIsareti = (x, y, s = 1) => {
  const n = (dx, dy) => `${r2(x + dx * s)} ${r2(y + dy * s)}`;
  return [{ t: 'l', d: `M${n(-5, -6)} Q${n(-5, -11)} ${n(0, -11)} Q${n(6, -11)} ${n(6, -6)} Q${n(6, -2)} ${n(0, 0)} L${n(0, 4)}`, w: r2(2.6 * s), k: 'vurgu' },
    { t: 'c', x, y: r2(y + 9.5 * s), r: r2(2 * s), f: 'vurgu' }];
};
// Küçük top (Hikâye 1; parçanın topu sabit boydadır): (x, y) ortası, yarıçap rr.
const topK = (x, y, rr, f = 'sari') => [
  { t: 'c', x, y, r: rr, f },
  { t: 'l', d: `M${r2(x - rr)} ${y} Q${x} ${r2(y - rr * .45)} ${r2(x + rr)} ${y} M${x} ${r2(y - rr)} Q${r2(x - rr * .4)} ${y} ${x} ${r2(y + rr)}`, w: 1.2 },
];
// Balon içeriği: nesne ve işaretler yan yana. nesne: 'elma-red' | 'elma-green' | 'top' | 'kutu' | 'anahtar' | 'form' | 'elmalar';
// isaretler: 'kalp' | 'soru' | 'hayir' dizisi. (x, y) içeriğin ortası, s ölçek.
const NESNE = {
  'elma-red': (x, y, s) => elma(x, y, 'red', r2(10 * s)),
  'elma-green': (x, y, s) => elma(x, y, 'green', r2(10 * s)),
  elmalar: (x, y, s) => [...elma(r2(x - 7 * s), y, 'red', r2(8 * s)), ...elma(r2(x + 7 * s), r2(y + 1 * s), 'red', r2(8 * s))],
  top: (x, y, s) => topK(x, y, r2(10 * s)),
  kutu: (x, y, s) => kutu(x, y, 'kraft', r2(.5 * s)),
  anahtar: (x, y, s) => anahtar(r2(x - 3 * s), y, 'sari', r2(.8 * s)),
  form: (x, y, s) => form(x, y, r2(.26 * s)),
  gomlek: (x, y, s) => gomlek(x, y, 'turuncu').map(o => ({ ...o, d: o.d.replace(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g, (m, a, b) => `${r2(x + (a - x) * .45 * s)} ${r2(y + (b - y) * .45 * s)}`) })),
};
const icerik = (x, y, s, nesne, isaretler = []) => {
  const n = isaretler.length, ara = 24 * s, x0 = x - (n * ara) / 2;
  return [...NESNE[nesne](r2(x0), y, s), ...isaretler.flatMap((i, k) => {
    const cx = r2(x0 + (k + 1) * ara);
    return i === 'kalp' ? kalp(cx, y, .9 * s) : i === 'soru' ? soruIsareti(cx, r2(y - 1 * s), .9 * s) : isaret(cx, y, 'hayir', .8 * s);
  })];
};
const ICERIK_AD = { 'elma-red': 'kırmızı elma', 'elma-green': 'yeşil elma', elmalar: 'kırmızı elmalar', top: 'sarı top', kutu: 'kraft kutu', anahtar: 'sarı anahtar', form: 'form', gomlek: 'turuncu gömlek' };
const ISARET_AD = { kalp: 'kırmızı kalp', soru: 'soru işareti', hayir: 'kırmızı çarpı' };
const icerikAd = (nesne, isaretler) => [ICERIK_AD[nesne], ...isaretler.map(i => ISARET_AD[i])].join(', ');
// Koridor: zemin şeridi; isteğe bağlı Anna'nın kapısı (solda) ve senin kapının pervazı (sağ kenar).
const koridor = ({ annaKapi = true, acik = true, senKapi = true, kx = 56 } = {}) => [
  ...(annaKapi ? kapi(kx, 104, acik) : []),
  ...(senKapi ? [{ t: 'r', x: 222, y: 34, w: 18, h: 116, rx: 2, f: 'iz' }] : []),
  { t: 'r', x: -2, y: 150, w: 244, h: 6, rx: 2, f: 'tas' },
];
// Tokalaşma (yakın çekim): solda karşıdakinin kolu (gövde renginde), sağda senin kolun (senin elinin açık mavi kolu), ortada
// kenetlenmiş iki el. (x, y) ellerin ortası.
const tokalasma = (x, y, renk) => [
  { t: 'p', d: `M${x - 104} ${y + 44} L${x - 40} ${y - 10} L${x - 26} ${y + 8} L${x - 92} ${y + 60} Z`, f: renk },
  { t: 'p', d: `M${x + 104} ${y + 44} L${x + 40} ${y - 10} L${x + 26} ${y + 8} L${x + 92} ${y + 60} Z`, f: '#7FDFFF' },
  { t: 'e', x, y, rx: 34, ry: 17, f: 'ten' },
  { t: 'e', x: x + 8, y: y - 14, rx: 11, ry: 5, f: 'ten' },
  { t: 'l', d: `M${x - 18} ${y - 8} Q${x - 12} ${y} ${x - 18} ${y + 8} M${x - 8} ${y - 10} Q${x - 2} ${y} ${x - 8} ${y + 10} M${x + 2} ${y - 10} Q${x + 8} ${y} ${x + 2} ${y + 10}`, w: 1.2 },
];
// Aile şeması: (x, y) şemanın ortası, s ölçek. Üstte gri saçlı kadın ve erkek; altta kardeşler (alt: 'anna' | 'sen' (senin elin) |
// 'soru' (boş figür ve soru işareti) | [cins, sac, govde]). halka: alt dizinindeki kişi halkalı (-1 yok; 'ana' gri saçlı kadın,
// 'baba' gri saçlı erkek).
const aile = (x, y, s, alt, halkaYer = -1) => {
  const X = v => r2(x + v * s), Y = v => r2(y + v * s), fs = .78 * s;
  const ustY = -6, altY = 44, ara = 38;
  const ux = [-17, 17], ax = alt.map((_, i) => (i - (alt.length - 1) / 2) * ara);
  const kisiCiz = (k, cx) => k === 'anna' ? anna(X(cx), Y(altY), fs)
    : k === 'sen' ? [{ t: 'r', x: X(cx - 7), y: Y(altY - 12), w: r2(14 * s), h: r2(12 * s), rx: r2(3 * s), f: '#7FDFFF' },
      ...[-6, -2, 2, 6].map(dx => ({ t: 'r', x: X(cx + dx - 1.6), y: Y(altY - 28), w: r2(3.2 * s), h: r2(9 * s), rx: r2(1.6 * s), f: 'ten' })),
      { t: 'r', x: X(cx - 8), y: Y(altY - 22), w: r2(16 * s), h: r2(11 * s), rx: r2(4.5 * s), f: 'ten' }]
    : k === 'soru' ? [{ t: 'k', x: X(cx), y: Y(altY), s: fs, kol: 'asagi', yuz: 'mutlu', f: 'gri' }, ...soruIsareti(X(cx + 16), Y(altY - 26), .7 * s)]
    : fig(X(cx), Y(altY), fs, ...k);
  const hk = halkaYer === 'ana' ? [ux[0], ustY] : halkaYer === 'baba' ? [ux[1], ustY] : halkaYer >= 0 ? [ax[halkaYer], altY] : null;
  return [
    { t: 'l', d: `M${X(ux[0])} ${Y(ustY + 4)} L${X(ux[1])} ${Y(ustY + 4)} M${X(0)} ${Y(ustY + 4)} L${X(0)} ${Y(ustY + 12)} M${X(ax[0])} ${Y(ustY + 12)} L${X(ax[ax.length - 1])} ${Y(ustY + 12)}`
      + ax.map(a => ` M${X(a)} ${Y(ustY + 12)} L${X(a)} ${Y(ustY + 16)}`).join(''), w: 1.4, k: 'gri' },
    ...fig(X(ux[0]), Y(ustY), fs, 'k', 'gri', 'yesil'),
    ...fig(X(ux[1]), Y(ustY), fs, 'e', 'gri', 'kraft'),
    ...alt.flatMap((k, i) => kisiCiz(k, ax[i])),
    ...(hk ? [halka(X(hk[0]), Y(hk[1] - 17), r2(17 * s))] : []),
  ];
};
const ALT_ANNA = ['anna', ['k', 'siyah', 'sari'], ['e', 'siyah', 'su']];
// Şema paneli (konuşma balonu yerine büyük beyaz pano; şema balona sığmıyordu): (x0, y0) sol üst, w x h; kuyruk 'sol' (sol alttaki
// konuşana) | 'sag' (sağ alttaki senin eline) | null.
const pano = (x0, y0, w, h, kuyruk) => {
  const x1 = x0 + w, y1 = y0 + h;
  const k = kuyruk === 'sag' ? ` L${x1 - 24} ${y1} L${x1 - 14} ${y1 + 18} L${x1 - 40} ${y1}` : kuyruk === 'sol' ? ` L${x0 + 40} ${y1} L${x0 + 16} ${y1 + 18} L${x0 + 24} ${y1}` : '';
  return [{ t: 'p', d: `M${x0 + 8} ${y0} L${x1 - 8} ${y0} Q${x1} ${y0} ${x1} ${y0 + 8} L${x1} ${y1 - 8} Q${x1} ${y1} ${x1 - 8} ${y1}${k} L${x0 + 8} ${y1} Q${x0} ${y1} ${x0} ${y1 - 8} L${x0} ${y0 + 8} Q${x0} ${y0} ${x0 + 8} ${y0} Z`, f: 'kar' }];
};
// Anna'nın şeması (sahne): solda altta küçük Anna, üstte büyük pano.
const annaAile = halkaYer => [...pano(14, 6, 212, 122, 'sol'), ...aile(120, 52, 1.3, ALT_ANNA, halkaYer), ...anna(26, 180, 1.2)];
// Kişiler (kisi çerçevesi) ve saç: kisi figürü (60, 112, s 2).
const doktorSac = (cins, kol = 'asagi') => [...kisi('doktor', kol), ...figurSac(60, 112, 2, cins === 'k' ? 'uzun' : 'kisa', 'kahve', { sakal: cins === 'e' })];

// ---- Seçenek resimleri (boy 120) ----
const tekKisiS = (cins, sac = 'kahve', govde = 'yesil') => sahne(fig(120, 108, 2.3, cins, sac, govde), `ayakta figür: ${kisiAd(cins, sac, govde)}`);
// Küçük çerçeveler (Sağlık'ın kucukKisi'si gibi): figür (x, 100, 1.7); saç verilirse figurSac.
const kucuk = (rol, cins = null, x = 120) => {
  const sac = cins ? figurSac(x, 100, 1.7, cins === 'k' ? 'uzun' : 'kisa', 'kahve', { sakal: cins === 'e' }) : [];
  const f = { t: 'k', x, y: 100, s: 1.7, kol: 'asagi', yuz: 'mutlu' };
  if (rol === 'eczaci') return [{ t: 'r', x: x - 12, y: 6, w: 24, h: 24, rx: 4, f: 'yesil' }, { t: 'l', d: `M${x} 10 L${x} 26 M${x - 8} 18 L${x + 8} 18`, w: 2.2, k: 'beyaz' }, { ...f, f: 'sari' }, ...sac, { t: 'r', x: x - 46, y: 100, w: 92, h: 20, rx: 4, f: 'kar' }];
  if (rol === 'doktor') return [{ ...f, f: 'kar' },
    { t: 'l', d: `M${r2(x - 5.95)} ${r2(100 - 36.55)} Q${r2(x - 8.5)} ${r2(100 - 22.1)} ${x} ${r2(100 - 20.4)} Q${r2(x + 8.5)} ${r2(100 - 22.1)} ${r2(x + 5.95)} ${r2(100 - 36.55)}`, w: 1.4, k: '#4B4B52' },
    { t: 'c', x, y: r2(100 - 15.5), r: 2.7, f: 'gri' }, ...sac, { t: 'r', x: x - 46, y: 100, w: 92, h: 20, rx: 4, f: 'tas' }];
  return [{ t: 'r', x: x - 30, y: 8, w: 52, h: 32, rx: 4, f: 'buz' }, ...plaka(x + 44, 22, '', .5), { ...f, f: 'yesil' }, ...sac, { t: 'r', x: x - 46, y: 100, w: 92, h: 20, rx: 4, f: 'gri' }];
};
const KUCUK_AD = { eczaci: 'eczacı: yeşil haçlı tabela, beyaz tezgâh', doktor: 'doktor: beyaz önlük, stetoskop, bej masa', memur: 'kayıt memuru: açık mavi cam pano, gri tezgâh, boş sıra ekranı' };
const kucukS = (rol, cins = null) => sahne(kucuk(rol, cins), `${KUCUK_AD[rol]}${cins ? (cins === 'k' ? '; kadın, omuza inen kahverengi saç' : '; erkek, kısa kahverengi saç ve sakal') : ''}`);
// Anna kendi kapısının önünde (koridor, küçük).
const annaKapiS = () => sahne([...kapi(120, 58, true), ...anna(120, 112, 1.9), { t: 'r', x: 40, y: 112, w: 160, h: 4, rx: 2, f: 'tas' }], 'koridorda açık kapısının önünde kadın: omuza inen siyah saç, turuncu gövde (komşu Anna)');
// Ülke kartı balonda: kim 'sen' (senin balonun) | 'anna' (Anna'nın balonu, solda küçük Anna).
const ULKE_AD = { T: 'T (Türkiye)', I: 'I (Italy)', A: 'A (Avustralya; adı söylenmez)', null: 'soru işareti' };
const ulkeBalonS = (kim, harf) => kim === 'sen'
  ? sahne([...balon(120, 56, ulkeKarti(120, 50, harf, 1.1), 2.2), ...el(196, 112)], `senin balonunda uçaklı ülke kartı, harf ${ULKE_AD[harf]}`)
  : sahne([...anna(36, 116, 1.6), ...konusma(140, 46, ulkeKarti(140, 46, harf, 1.1), 1.9)], `Anna'nın balonunda uçaklı ülke kartı, harf ${ULKE_AD[harf]}`);
// Çantalar: Anna ve arkadaşın yan yana, ayaklarının dibinde birer kahverengi çanta; senin kapının önünde üçüncü çanta (seçenekte).
// halkaYer: 'ark' | 'anna' | 'kapi' | null.
const cantalar = (halkaYer, kucukMu = false) => {
  if (kucukMu) {
    const cy = 98;
    const yer = { anna: 74, ark: 152, kapi: 214 };
    return [{ t: 'r', x: 222, y: 30, w: 16, h: 80, rx: 2, f: 'iz' }, ...anna(46, 112, 1.6), ...arkadas(124, 112, 1.6),
      ...canta(74, cy, 'kahve', .5), ...canta(152, cy, 'kahve', .5), ...canta(204, cy, 'kahve', .5),
      { t: 'r', x: 0, y: 112, w: 240, h: 4, rx: 2, f: 'tas' },
      ...(halkaYer ? [halka(halkaYer === 'kapi' ? 204 : yer[halkaYer], cy + 3, 18)] : [])];
  }
  return [...koridor(), ...anna(50, 150, 2.1), ...arkadas(134, 150, 2.1), ...canta(76, 136, 'kahve', .55), ...canta(164, 136, 'kahve', .55),
    ...(halkaYer === 'ark' ? [halka(164, 138, 22)] : halkaYer === 'anna' ? [halka(76, 138, 22)] : []), ...el(212, 156)];
};
const CANTA_AD = { ark: 'arkadaşının yanındaki çanta', anna: "Anna'nın yanındaki çanta", kapi: 'senin kapının önündeki üçüncü çanta' };
const cantaS = halkaYer => sahne(cantalar(halkaYer, true), `Anna ve arkadaşın; ikisinin dibinde ve senin kapının önünde birer kahverengi çanta; halka ${CANTA_AD[halkaYer]}da`);
// Aile şeması seçenekleri: Anna'nınki (halka yeri) ve seninki (alt dizisi).
const AILE_AD = { 0: 'Anna (siyah saç, turuncu gövde)', 1: 'kadın (siyah saç, sarı gövde)', 2: 'erkek (siyah saç ve sakal, mavi gövde)', ana: 'gri saçlı kadın', baba: 'gri saçlı erkek' };
const annaAileS = halkaYer => sahne([...pano(10, 4, 220, 112, null), ...aile(120, 48, 1.2, ALT_ANNA, halkaYer)],
  `Anna'nın şeması: üstte gri saçlı kadın ve erkek; altta Anna, bir kadın ve bir erkek; halkalı: ${AILE_AD[halkaYer]}`);
const SEN_KARDES = { erkek: ['e', 'kahve', 'turuncu'], kadin: ['k', 'kahve', 'yesil'], kadin2: ['k', 'siyah', 'sari'] };
const senAile = (kardesler, x, y, s) => aile(x, y, s, ['sen', ...kardesler.map(k => SEN_KARDES[k])], kardesler.length === 1 ? 1 : -1);
const senAileS = kardesler => sahne([...pano(10, 4, 220, 112, null), ...senAile(kardesler, 120, 48, 1.2)],
  `senin şeman: üstte gri saçlı iki kişi; altta senin elin ve ${kardesler.map(k => ({ erkek: 'bir erkek (kısa kahve saç, sakal, turuncu gövde)', kadin: 'bir kadın (omuza inen kahve saç)', kadin2: 'bir kadın (omuza inen siyah saç)' }[k])).join(' ve ')}`);
// Balon içerik seçenekleri: kim 'anna' | 'sen'.
const icerikS = (kim, nesne, isaretler) => kim === 'sen'
  ? sahne([...balon(120, 56, icerik(120, 50, 1.4, nesne, isaretler), 2.2), ...el(196, 112)], `senin balonunda ${icerikAd(nesne, isaretler)}`)
  : sahne([...anna(36, 116, 1.6), ...konusma(142, 46, icerik(142, 46, 1.2, nesne, isaretler), 1.9)], `Anna'nın balonunda ${icerikAd(nesne, isaretler)}`);
const tokalasmaS = () => sahne(tokalasma(120, 58, 'turuncu'), 'yakın çekim: tokalaşma; solda turuncu kol, sağda senin kolun, ortada kenetlenmiş iki el');
const sallamaS = () => sahne([...anna(70, 112, 2, 'yukari'), ...sallar(70, 46), ...okSag(140, 220, 60)], 'Anna iki elini sallıyor; sağa ok (gidiyorsun)');
const formS = () => sahne([{ t: 'r', x: 20, y: 86, w: 200, h: 24, rx: 4, f: 'gri' }, ...form(120, 58, .8)], 'tezgâhta boş form');
const anahtarS = () => sahne(anahtar(124, 60, 'sari', 2), 'sarı anahtar');
const bosMasaS = () => sahne([{ t: 'r', x: 74, y: 100, w: 92, h: 20, rx: 4, f: 'tas' }, { t: 'l', d: 'M110 98 Q108 88 116 86 Q124 88 122 98', w: 1.4, k: '#4B4B52' }], 'boş doktor masası; masada stetoskop (kimse yok)');
const doktorS = () => sahne(kucuk('doktor'), KUCUK_AD.doktor);
const eczaneS = () => sahne([
  { t: 'r', x: 54, y: 10, w: 132, h: 82, rx: 2, f: 'bulut' }, { t: 'r', x: 111, y: 15, w: 18, h: 18, rx: 3, f: 'yesil' },
  { t: 'l', d: 'M120 18 L120 30 M114 24 L126 24', w: 2, k: 'beyaz' }, { t: 'r', x: 62, y: 42, w: 49, h: 37, rx: 1, f: 'buz' },
  { t: 'r', x: 137, y: 38, w: 29, h: 54, rx: 1, f: 'agac' }, { t: 'r', x: 50, y: 92, w: 140, h: 4, rx: 2, f: 'tas' }], 'eczane cephesi: yeşil haçlı tabela, vitrin, kapı');

// ---- Hikâye yardımcıları ----
// Hikâye 1: yeni komşu (erkek, kısa kızıl saç ve sakal, sarı gövde; düzeltme turu 1); yanında n kutu üst üste.
const yeni = (x, y, s, kol = 'asagi', yuz = 'mutlu') => fig(x, y, s, 'e', 'kizil', 'sari', kol, yuz);
const kutuYigin = (n, x, taban, s) => Array.from({ length: n }, (_, i) => kutu(x, r2(taban - 20 * s - i * 40 * s), 'kraft', s)).flat();
const senKapi = () => [{ t: 'r', x: 214, y: 30, w: 26, h: 120, rx: 2, f: 'iz' }, { t: 'r', x: 218, y: 36, w: 22, h: 114, rx: 1, f: 'buz' }];
const kutuluS = n => sahne([...yeni(80, 112, 2), ...kutuYigin(n, 134, 112, .5), { t: 'r', x: 30, y: 112, w: 180, h: 4, rx: 2, f: 'tas' }],
  `yeni komşu (kısa kızıl saç ve sakal, sarı gövde); yanında üst üste ${['', 'bir', 'iki', 'üç', 'dört'][n]} kraft kutu`);
const ELMA_AD = { red: 'kırmızı', green: 'yeşil', yellow: 'sarı' };
const kutuElma = (x, y, f, s = 1) => [...elma(r2(x - 12 * s), r2(y - 22 * s), f, r2(10 * s)), ...elma(r2(x + 12 * s), r2(y - 22 * s), f, r2(10 * s)), ...elma(x, r2(y - 28 * s), f, r2(10 * s)), ...kutu(x, y, 'kraft', s)];
const elmaKutuS = f => sahne(kutuElma(120, 78, f, 1.1), `yakın çekim: açık kraft kutuda ${ELMA_AD[f]} elmalar`);
// Hikâye 2: arkadaşının kız kardeşi (sarı saç topuz, mavi gövde; düzeltme turu 1).
const kardes = (x, y, s, kol = 'asagi', yuz = 'mutlu') => fig(x, y, s, 'k', 'sari', 'su', kol, yuz, { tur: 'topuz' });
// H2 S1 (düzeltme turu 1): üç kadın; saç rengi ve biçimi üçünde de ayrı (doğru şık iki çeldiriciyle özellik paylaşmaz).
const ikiliS = (sac, tur) => sahne([...arkadas(70, 112, 2.1, 'ileri'), ...fig(160, 112, 2.1, 'k', sac, 'su', 'asagi', 'mutlu', { tur })],
  `arkadaşın (kısa kahve saç, sakal, gözlük, kahverengi gövde) kolunu yanındakine uzatıyor; yanında ${kisiAd('k', sac, 'su', tur)}`);
const CANTA_RENK = { kahve: 'kahverengi', sari: 'sarı', red: 'kırmızı' };
const cantaSoruS = f => sahne([...arkadas(36, 116, 1.6), ...konusma(142, 46, [...canta(128, 44, f, .45), ...soruIsareti(166, 44, .9)], 1.9)],
  `arkadaşının balonunda ${CANTA_RENK[f]} çanta ve soru işareti`);
const kapiNoS = n => sahne([...senKapi().map(o => ({ ...o, x: o.x - 30, y: o.y - 20, h: o.h - 20 })), ...plaka(160, 40, String(n), .55),
  ...arkadas(80, 112, 2, 'yukari'), ...sallar(80, 46), { t: 'r', x: 20, y: 112, w: 200, h: 4, rx: 2, f: 'tas' }],
  `arkadaşın el sallıyor; senin kapının yanında numara plakası ${SAYI_AD[n]}`);
const SEN_KAPI_PLAKA = n => [...senKapi(), ...plaka(196, 64, String(n), .5)];

export default {
  dil: 'en', id: 'insanlar', no: 7, ad: 'İnsanlar',
  yoklama: [
    { tur: 'sec', ses: [anl('A woman.')], dogruSes: [anl('A woman.')], dogru: 0,
      secenek: [tekKisiS('k'), tekKisiS('e'), kucukS('doktor', 'e')], birimler: ['en:s:woman'] },
    { tur: 'sec', ses: [kom('My brother.')], dogruSes: [kom('My brother.')], dogru: 1,
      secenek: [annaAileS(1), annaAileS(2), annaAileS(0)], birimler: ['en:s:brother'] },
    { tur: 'sec', ses: [kom('Do you like apples?')], dogruSes: [kom('Do you like apples?')], dogru: 0,
      secenek: [icerikS('anna', 'elma-red', ['kalp', 'soru']), icerikS('anna', 'elma-red', ['kalp']), icerikS('anna', 'elma-red', ['soru'])], birimler: ['en:k:do-you-like'] },
  ],
  sayfalar: [
    // 1-3: man, woman
    { tur: 'gor', ses: [anl('A man.')], S: sahne(fig(120, 168, 3.4, 'e', 'kahve', 'yesil'), 'boş zeminde büyük ayakta figür, önden: erkek, kısa kahverengi saç ve sakal, yeşil gövde'), yeni: 'en:s:man', degisen: 'kisi' },
    { tur: 'gor', ses: [anl('A woman.')], S: sahne(fig(120, 168, 3.4, 'k', 'kahve', 'yesil'), 'aynı yerde büyük figür: kadın, omuza inen kahverengi saç, sakal yok, yeşil gövde'), yeni: 'en:s:woman', degisen: 'kisi' },
    { tur: 'sec', ses: [anl('A man?')], dogruSes: [anl('A man.')], dogru: 1,
      secenek: [tekKisiS('k', 'kahve'), tekKisiS('e', 'kahve'), tekKisiS('k', 'siyah')], birimler: ['en:s:man'] },
    // 4-6: he, she
    { tur: 'gor', ses: [anl('He is a doctor.')], S: sahne(doktorSac('e'), 'doktor (beyaz önlük, stetoskop) bej masada: kısa kahverengi saç ve sakal'), yeni: 'en:s:he', degisen: 'kisi' },
    { tur: 'gor', ses: [anl('She is a doctor.')], S: sahne(doktorSac('k'), 'aynı masada doktor: omuza inen kahverengi saç, sakal yok'), yeni: 'en:s:she', degisen: 'kisi' },
    { tur: 'sec', ses: [anl('He is a doctor.')], dogruSes: [anl('He is a doctor.')], dogru: 2,
      secenek: [kucukS('doktor', 'k'), kucukS('eczaci', 'e'), kucukS('doktor', 'e')], birimler: ['en:s:he'] },
    // 7-12: Anna, tanışma, komşu
    { tur: 'gor', ses: [kom('Hello.')], S: sahne([...koridor(), ...anna(56, 150, 2.2, 'yukari'), ...sallar(56, 72), ...kutu(104, 138, 'kraft', .55), ...kutu(126, 138, 'kraft', .55), ...kutu(148, 138, 'kraft', .55), ...elim()],
      'koridor: solda açık kapısının önünde kadın (omuza inen siyah saç, turuncu gövde) iki elini sallıyor; yerde üç kraft kutu; sağ kenarda senin kapının pervazı; senin elin'), degisen: 'kisi' },
    { tur: 'gor', ses: [kom('My name is Anna.')], S: sahne([...koridor(), ...anna(56, 150, 2.2), ...kutu(104, 138, 'kraft', .55), ...kutu(126, 138, 'kraft', .55), ...kutu(148, 138, 'kraft', .55),
      ...konusma(150, 40, [...form(150, 40, .3), halka(r2(150 + 6 * .3), r2(40 + (FORM_SATIR.ad + 1) * .3), 9)], 1.3), ...elim()],
      'Anna gülüyor; konuşma balonunda küçük form, ad satırı halkalı'), degisen: 'eylem' },
    { tur: 'gor', ses: [sen('My name is Deniz.')], S: sahne([...koridor(), ...anna(56, 150, 2.2), ...kutu(104, 138, 'kraft', .55), ...kutu(126, 138, 'kraft', .55), ...kutu(148, 138, 'kraft', .55),
      ...balon(160, 52, [...form(160, 46, .3), halka(r2(160 + 6 * .3), r2(46 + (FORM_SATIR.ad + 1) * .3), 9)], 1.4), ...elim()],
      'Anna; senin balonunda küçük form, ad satırı halkalı'), degisen: 'eylem' },
    { tur: 'gor', ses: [sen('Nice to meet you.')], S: sahne([...anna(70, 70, 1.6), ...tokalasma(120, 128, 'turuncu')],
      'yakın çekim: tokalaşma; solda Anna\'nın turuncu kolu, sağda senin kolun, ortada kenetlenmiş iki el; üstte gülen Anna'), yeni: 'en:k:nice-to-meet-you', degisen: 'eylem' },
    { tur: 'gor', ses: [anl('A neighbour.')], S: sahne([...koridor({ kx: 56, senKapi: false }), ...kapi(176, 104, false), ...kutu(104, 138, 'kraft', .55), ...kutu(126, 138, 'kraft', .55), ...kutu(148, 138, 'kraft', .55), ...anna(56, 150, 2.2), halka(56, 112, 46), ...anahtar(176, 104, 'sari', 1.2), ...elim()],
      'geniş çekim koridor: iki kapı yan yana; solda Anna kendi kapısının önünde, halkalı; yerde üç kraft kutu; sağdaki kapı senin kapın: senin elin ve sarı anahtar (düzeltme turu 1: tek kapı)'), yeni: 'en:s:neighbour', degisen: 'kisi' },
    { tur: 'sec', ses: [anl('A neighbour?')], dogruSes: [anl('A neighbour.')], dogru: 0,
      secenek: [annaKapiS(), kucukS('memur', 'e'), kucukS('eczaci', 'k')], birimler: ['en:s:neighbour'] },
    // 13-15: I am from
    { tur: 'gor', ses: [kom('I am from Italy.')], S: sahne([...koridor(), ...anna(56, 150, 2.2), ...konusma(156, 40, ulkeKarti(156, 40, 'I', 1.1), 1.5), ...elim()],
      'Anna; konuşma balonunda uçaklı ülke kartı, harf I'), yeni: 'en:k:i-am-from', degisen: 'eylem' },
    { tur: 'gor', ses: [sen('I am from Türkiye.')], S: sahne([...koridor(), ...anna(56, 150, 2.2), ...balon(160, 54, ulkeKarti(160, 48, 'T', 1.1), 1.7), ...elim()],
      'Anna; senin balonunda uçaklı ülke kartı, harf T'), degisen: 'eylem' },
    { tur: 'sec', ses: [sen('I am from Türkiye.')], dogruSes: [sen('I am from Türkiye.')], dogru: 2,
      secenek: [ulkeBalonS('anna', 'I'), ulkeBalonS('sen', 'A'), ulkeBalonS('sen', 'T')], birimler: ['en:k:i-am-from'] },
    // 16-19: friend, his, her
    { tur: 'gor', ses: [sen('This is my friend.')], S: sahne([...cantalar(null), ...okSol(198, 156, 100)],
      'koridor: solda Anna; sağda senin yanında bir erkek (kısa kahverengi saç, sakal, gözlük, kahverengi gövde) gülüyor; senin elinden ona ok; ikisinin dibinde, ayaklarının yanında birer kahverengi çanta'), yeni: 'en:s:friend', degisen: 'kisi' },
    { tur: 'gor', ses: [anl('His bag.')], S: sahne(cantalar('ark'), 'aynı kare: arkadaşının yanındaki kahverengi çanta halkalı'), yeni: 'en:s:his', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Her bag.')], S: sahne(cantalar('anna'), 'aynı kare: halka Anna\'nın yanındaki kahverengi çantada'), yeni: 'en:s:her', degisen: 'nesne' },
    { tur: 'sec', ses: [anl('Her bag.')], dogruSes: [anl('Her bag.')], dogru: 1,
      secenek: [cantaS('ark'), cantaS('anna'), cantaS('kapi')], birimler: ['en:s:her'] },
    // 20-23: sister, brother, I have
    { tur: 'gor', ses: [kom('My sister.')], S: sahne(annaAile(1), 'Anna; panoda (kuyruğu Anna\'ya) aile şeması: üstte gri saçlı kadın ve erkek; altta Anna, bir kadın (siyah saç, sarı gövde) ve bir erkek (siyah saç ve sakal, mavi gövde); kadın halkalı'), yeni: 'en:s:sister', degisen: 'kisi' },
    { tur: 'gor', ses: [kom('My brother.')], S: sahne(annaAile(2), 'aynı şema; halka erkekte'), yeni: 'en:s:brother', degisen: 'kisi' },
    { tur: 'sec', ses: [kom('My brother.')], dogruSes: [kom('My brother.')], dogru: 0,
      secenek: [annaAileS(2), annaAileS(1), annaAileS(0)], birimler: ['en:s:brother'] },
    { tur: 'gor', ses: [sen('I have a brother.')], S: sahne([...pano(14, 6, 200, 112, 'sag'), ...senAile(['erkek'], 114, 50, 1.25), ...elim()],
      'senin sözün (pano, kuyruğu senin eline): aile şeması; üstte gri saçlı iki kişi; altta senin elin ve bir erkek (kısa kahverengi saç, sakal, turuncu gövde); erkek halkalı'), yeni: 'en:k:i-have', degisen: 'eylem' },
    // 24-28: I like, Do you like
    { tur: 'gor', ses: [kom('I like apples.')], S: sahne([...koridor(), ...anna(56, 150, 2.2, 'ileri'), ...elma(96, 110, 'red', 9), ...kutuElma(130, 136, 'red', .6), ...konusma(160, 40, icerik(160, 40, 1.2, 'elma-red', ['kalp']), 1.5), ...elim()],
      'Anna elinde kırmızı elma; yerde açık kutuda kırmızı elmalar; konuşma balonunda elma ve kırmızı kalp'), yeni: 'en:k:i-like', degisen: 'eylem' },
    { tur: 'gor', ses: [kom('Do you like apples?')], S: sahne([...koridor(), ...anna(56, 150, 2.2, 'ileri'), ...elma(96, 110, 'red', 9), ...kutuElma(130, 136, 'red', .6), ...okSag(108, 160, 104), ...konusma(160, 40, icerik(160, 40, 1.2, 'elma-red', ['kalp', 'soru']), 1.5), ...elim()],
      'Anna elmayı sana uzatıyor, ondan sana ok; balonunda elma, kırmızı kalp ve soru işareti'), yeni: 'en:k:do-you-like', degisen: 'eylem' },
    { tur: 'gor', ses: [sen('Yes. I like apples.')], S: sahne([...koridor(), ...anna(56, 150, 2.2), ...kutuElma(130, 136, 'red', .6), ...el(...SEN_EL, 'red'), ...balon(160, 52, icerik(160, 46, 1.2, 'elma-red', ['kalp']), 1.6)],
      'avucunda kırmızı elma; senin balonunda elma ve kırmızı kalp'), degisen: 'eylem' },
    { tur: 'sec', ses: [kom('Do you like apples?')], dogruSes: [kom('Do you like apples?')], dogru: 1,
      secenek: [icerikS('anna', 'elma-red', ['kalp']), icerikS('anna', 'elma-red', ['kalp', 'soru']), icerikS('anna', 'elma-red', ['soru'])], birimler: ['en:k:do-you-like'] },
    { tur: 'sec', ses: [anl('A woman?')], dogruSes: [anl('A woman.')], dogru: 2,
      secenek: [tekKisiS('e', 'kahve'), kucukS('doktor', 'e'), tekKisiS('k', 'kahve')], birimler: ['en:s:woman'] },
    // Yazı perdesi
    { tur: 'yazi', birimler: ['en:s:man', 'en:s:woman', 'en:s:he', 'en:s:she', 'en:k:nice-to-meet-you', 'en:s:neighbour', 'en:k:i-am-from',
      'en:s:friend', 'en:s:his', 'en:s:her', 'en:s:sister', 'en:s:brother', 'en:k:i-have', 'en:k:i-like', 'en:k:do-you-like'] },
  ],

  // ---- Pratik (taslak §16.4): 5 oyun dizisi = 5 tür, 37 etkileşim (eşleştir 2 tahta, boşluk 6, ne derdin 6, sırala 5, hızlı tur
  // 1 × 12 soru). Önceki duraklardan birimler geri döner (≥ %30). Oynatıcı şıkları karıştırmaz: doğru şık sırası elle düzensiz.
  // Sızıntı önlemi: pratikte kapı numarası, kırmızı çanta, yeşil elma, top, sarı ya da kızıl saç ve kutu yok.
  pratik: [
    // Oyun 1 · eşleştir: kişiler; komşu ve aile
    { tur: 'eslestir', ciftler: [
      { ses: [anl('A man.')], S: tekKisiS('e'), birim: 'en:s:man' },
      { ses: [anl('A woman.')], S: tekKisiS('k'), birim: 'en:s:woman' },
      { ses: [anl('A bed.')], S: sahne(yatak(120, 64), 'boş yatak'), birim: 'en:s:bed' },  // düzeltme turu 1: saçsız doktor "A man."a da uyabiliyordu
      { ses: [anl('A pharmacy.')], S: eczaneS(), birim: 'en:s:pharmacy' },
    ] },
    { tur: 'eslestir', ciftler: [
      { ses: [kom('My sister.')], S: annaAileS(1), birim: 'en:s:sister' },
      { ses: [kom('My brother.')], S: annaAileS(2), birim: 'en:s:brother' },
      { ses: [anl('A neighbour.')], S: annaKapiS(), birim: 'en:s:neighbour' },
      { ses: [anl('A key.')], S: anahtarS(), birim: 'en:s:key' },
    ] },
    // Oyun 2 · boşluk (6; doğrular C A B A C B; düzeltme turu 1)
    { tur: 'bosluk', ses: [kom('I am from Italy.')], metin: 'I am from ___.',
      secenek: [ulkeBalonS('anna', 'T'), ulkeBalonS('anna', 'A'), ulkeBalonS('anna', 'I')], dogru: 2, birimler: ['en:k:i-am-from'] },
    { tur: 'bosluk', ses: [anl('His bag.')], metin: '___ bag.',
      secenek: [cantaS('ark'), cantaS('anna'), cantaS('kapi')], dogru: 0, birimler: ['en:s:his', 'en:s:bag'] },
    { tur: 'bosluk', ses: [sen('I have a brother.')], metin: 'I have a ___.',
      secenek: [senAileS(['kadin']), senAileS(['erkek']), senAileS(['kadin', 'kadin2'])], dogru: 1, birimler: ['en:k:i-have', 'en:s:brother'] },
    { tur: 'bosluk', ses: [kom('I like apples.')], metin: 'I like ___.',
      secenek: [icerikS('anna', 'elmalar', ['kalp']), icerikS('anna', 'anahtar', ['kalp']), icerikS('anna', 'form', ['kalp'])], dogru: 0, birimler: ['en:k:i-like', 'en:s:apples'] },
    { tur: 'bosluk', ses: [anl('She is a doctor.')], metin: '___ is a doctor.',
      secenek: [kucukS('doktor', 'e'), bosMasaS(), kucukS('doktor', 'k')], dogru: 2, birimler: ['en:s:she', 'en:s:doctor'] },  // düzeltme turu 1: kadın eczacı "She"ye de uyuyordu
    { tur: 'bosluk', ses: [sen('Nice to meet you.')], metin: 'Nice to ___ you.',
      secenek: [sallamaS(), tokalasmaS(), formS()], dogru: 1, birimler: ['en:k:nice-to-meet-you'] },
    // Oyun 3 · ne derdin? (6; senin balonun yok; karşıdakinin yüzü hep gülen; doğrular B A C A C B)
    { tur: 'nederdin', S: sahne([...anna(70, 70, 1.6), ...tokalasma(120, 128, 'turuncu')],
      'yakın çekim: Anna ile tokalaşıyorsun (onun turuncu kolu, senin kolun, ortada kenetlenmiş eller); üstte gülen Anna (ilk karşılaşma)'),
      secenekSes: [[sen('Goodbye.')], [sen('Nice to meet you.')], [sen('Thank you.')]], dogru: 1, birimler: ['en:k:nice-to-meet-you'] },
    { tur: 'nederdin', S: sahne([...koridor(), ...anna(56, 150, 2.2), ...konusma(156, 40, ulkeKarti(156, 40, null, 1.1), 1.5), ...elim()],
      'Anna; konuşma balonunda soru işaretli uçaklı ülke kartı ("nerelisin?")'),
      secenekSes: [[sen('I am from Türkiye.')], [sen('My name is Deniz.')], [sen('Yes. I like it.')]], dogru: 0, birimler: ['en:k:i-am-from'] },
    { tur: 'nederdin', S: sahne([...koridor(), ...anna(56, 150, 2.2, 'ileri'), ...elma(96, 110, 'red', 9), ...okSag(108, 160, 104), ...konusma(160, 40, icerik(160, 40, 1.2, 'elma-red', ['kalp', 'soru']), 1.5), ...elim()],
      'Anna kırmızı elma uzatıyor, ondan sana ok; balonunda elma, kırmızı kalp ve soru işareti'),
      secenekSes: [[sen('Hello. Nice to meet you.')], [sen('I have a brother.')], [sen('Yes. I like apples.')]], dogru: 2, birimler: ['en:k:i-like', 'en:s:yes', 'en:s:apples'] },
    { tur: 'nederdin', S: sahne([...pano(14, 6, 212, 122, 'sol'), ...aile(120, 52, 1.3, ['sen', 'soru']), ...anna(26, 180, 1.2), ...elim()],
      'Anna; panoda (kuyruğu Anna\'ya) aile şeması: üstte gri saçlı iki kişi; altta senin elin ve soru işaretli boş figür ("kardeşin var mı?")'),
      secenekSes: [[sen('I have a sister.')], [sen('He is my friend.')], [sen('I am from Türkiye.')]], dogru: 0, birimler: ['en:k:i-have', 'en:s:sister'] },
    { tur: 'nederdin', S: sahne([...koridor({ senKapi: false }), ...anna(56, 150, 2.2), ...konusma(140, 38, [...fig(128, 50, .9, 'e', 'kahve', 'kahve', 'asagi', 'mutlu', { gozluk: true }), ...soruIsareti(154, 34, .9)], 1.3), ...arkadas(160, 150, 2.1), ...el(214, 154)],
      'koridor: Anna sana bakıyor; balonunda arkadaşının küçük figürü (gözlük) ve soru işareti ("bu kim?"); senin yanında arkadaşın (kısa kahverengi saç, sakal, gözlük, kahverengi gövde)'),
      secenekSes: [[sen('Nice to meet you.')], [sen('I have a sister.')], [sen('This is my friend.')]], dogru: 2, birimler: ['en:s:friend', 'en:k:this-is', 'en:s:my'] },
    { tur: 'nederdin', S: sahne([...kisi('memur', 'asagi'), ...konusma(138, 34, [...fig(126, 46, .9, 'e', 'kahve', 'kahve', 'asagi', 'mutlu', { gozluk: true }), ...soruIsareti(152, 30, .9)], 1.3), ...arkadas(160, 160, 1.9), ...el(214, 154)],
      'kayıt memuru masada; balonunda arkadaşının küçük figürü (kısa kahverengi saç, sakal, gözlük) ve soru işareti; senin yanında arkadaşın'),
      secenekSes: [[sen('Yes. I like apples.')], [sen('He is my friend.')], [sen('Sign here, please.')]], dogru: 1, birimler: ['en:s:he', 'en:s:friend', 'en:s:my'] },
    // Oyun 4 · sırala (5): tek büyük harfli kart ve tek bitiş noktalamalı kart, tek sıra; özel adlı cümle alınmadı.
    { tur: 'sirala', ses: [sen('Nice to meet you.')], parcalar: ['Nice', 'to', 'meet', 'you.'], birimler: ['en:k:nice-to-meet-you'] },
    { tur: 'sirala', ses: [sen('This is my friend.')], parcalar: ['This', 'is', 'my', 'friend.'], birimler: ['en:s:friend', 'en:k:this-is', 'en:s:my'] },
    { tur: 'sirala', ses: [sen('I have a sister.')], parcalar: ['I', 'have', 'a', 'sister.'], birimler: ['en:k:i-have', 'en:s:sister'] },
    { tur: 'sirala', ses: [kom('Do you like apples?')], parcalar: ['Do', 'you', 'like', 'apples?'], birimler: ['en:k:do-you-like', 'en:s:apples'] },
    { tur: 'sirala', ses: [kom('Where is his bag?')], parcalar: ['Where', 'is', 'his', 'bag?'], birimler: ['en:s:his', 'en:s:where', 'en:s:bag'] },
    // Oyun 5 · hızlı tur (60 sn, 12 soru); doğrular A B B C A C C A B C A B (A 4, B 4, C 4; düzeltme turu 1: ilk altı sahne seçimlerinin sırasından ayrıldı)
    { tur: 'hizli', sure: 60, sorular: [
      { tur: 'sec', ses: [anl('A man.')], dogruSes: [anl('A man.')], secenek: [tekKisiS('e'), tekKisiS('k'), kucukS('doktor', 'k')], dogru: 0, birimler: ['en:s:man'] },
      { tur: 'sec', ses: [anl('A woman.')], dogruSes: [anl('A woman.')], secenek: [kucukS('doktor', 'e'), tekKisiS('k'), tekKisiS('e')], dogru: 1, birimler: ['en:s:woman'] },
      { tur: 'sec', ses: [anl('She is a doctor.')], dogruSes: [anl('She is a doctor.')], secenek: [kucukS('doktor', 'e'), kucukS('doktor', 'k'), kucukS('eczaci', 'k')], dogru: 1, birimler: ['en:s:she', 'en:s:doctor'] },
      { tur: 'sec', ses: [anl('Her bag.')], dogruSes: [anl('Her bag.')], secenek: [cantaS('ark'), cantaS('kapi'), cantaS('anna')], dogru: 2, birimler: ['en:s:her', 'en:s:bag'] },
      { tur: 'sec', ses: [anl('His bag.')], dogruSes: [anl('His bag.')], secenek: [cantaS('ark'), cantaS('kapi'), cantaS('anna')], dogru: 0, birimler: ['en:s:his', 'en:s:bag'] },
      { tur: 'sec', ses: [kom('My sister.')], dogruSes: [kom('My sister.')], secenek: [annaAileS(2), annaAileS('ana'), annaAileS(1)], dogru: 2, birimler: ['en:s:sister', 'en:s:my'] },
      { tur: 'sec', ses: [kom('My brother.')], dogruSes: [kom('My brother.')], secenek: [annaAileS(1), annaAileS('baba'), annaAileS(2)], dogru: 2, birimler: ['en:s:brother', 'en:s:my'] },
      { tur: 'sec', ses: [anl('A neighbour.')], dogruSes: [anl('A neighbour.')], secenek: [annaKapiS(), kucukS('eczaci', 'k'), kucukS('memur', 'e')], dogru: 0, birimler: ['en:s:neighbour'] },
      { tur: 'sec', ses: [kom('I like apples.')], dogruSes: [kom('I like apples.')], secenek: [icerikS('anna', 'elma-red', ['hayir']), icerikS('anna', 'elma-red', ['kalp']), icerikS('anna', 'elma-red', ['soru'])], dogru: 1, birimler: ['en:k:i-like', 'en:s:apples'] },
      { tur: 'sec', ses: [kom('I am from Italy.')], dogruSes: [kom('I am from Italy.')], secenek: [ulkeBalonS('anna', 'T'), ulkeBalonS('anna', 'A'), ulkeBalonS('anna', 'I')], dogru: 2, birimler: ['en:k:i-am-from'] },
      { tur: 'sec', ses: [sen('Nice to meet you.')], dogruSes: [sen('Nice to meet you.')], secenek: [tokalasmaS(), sallamaS(), formS()], dogru: 0, birimler: ['en:k:nice-to-meet-you'] },
      { tur: 'sec', ses: [anl('He is a doctor.')], dogruSes: [anl('He is a doctor.')], secenek: [kucukS('doktor', 'k'), kucukS('doktor', 'e'), kucukS('eczaci', 'e')], dogru: 1, birimler: ['en:s:he', 'en:s:doctor'] },
    ] },
  ],

  // ---- Hikâyecikler (taslak §16.5): yeni birim yok. Kök hikâyede bir kez geçen satırdır; şıklar o karenin üç hâlidir; doğru şık
  // hikâyede olan hâldir. Kök tek başına cevabı vermez; bir sorunun şıkları başka bir sorunun cevabını göstermez; bir hikâyede iki
  // soru aynı türden değil. Doğrular H1 C B A, H2 A C B.
  hikayeler: [
    // 1 · Müfredat fikri: kapıda yeni bir komşu; ikisinin de sevdiği bir şey bulunur. İki kutu, yeşil elma, sarı top.
    { id: 'komsu', ad: 'A new neighbour',
      sayfalar: [
        { tur: 'gor', ses: [ys('Hello. I am your neighbour.')], S: sahne([...senKapi(), ...yeni(84, 160, 2.4), ...kutuYigin(2, 148, 160, .75), ...gomlek(148, 82, 'turuncu'), { t: 'r', x: -2, y: 160, w: 244, h: 6, rx: 2, f: 'tas' }, ...elim()],
          'senin kapın açık (sağ kenar); koridorda yeni komşu (kısa kızıl saç ve sakal, sarı gövde), yanında üst üste iki kraft kutu ve kutuların üstünde turuncu bir gömlek') },
        { tur: 'gor', ses: [sen('Hello. Nice to meet you.')], S: sahne([...tokalasma(120, 64, 'sari'), ...[90, 150].flatMap(x => kutu(x, 150, 'kraft', .6)), ...gomlek(196, 150, 'turuncu')],
          'yakın çekim: tokalaşma (onun sarı kolu, senin kolun); aşağıda yerde yan yana iki kraft kutu ve turuncu gömlek') },
        { tur: 'gor', ses: [ys('Do you like apples?')], S: sahne([...yeni(60, 160, 2.2, 'ileri'), ...kutuElma(140, 140, 'green', 1), ...konusma(164, 36, icerik(164, 36, 1.2, 'elma-green', ['kalp', 'soru']), 1.4)],
          'komşu bir kutuyu açmış: içinde yeşil elmalar; balonunda yeşil elma, kırmızı kalp ve soru işareti') },
        { tur: 'gor', ses: [sen('No, sorry.')], S: sahne([...yeni(60, 160, 2.2), ...kutuElma(140, 140, 'green', 1), ...balon(166, 50, icerik(166, 44, 1.2, 'elma-green', ['hayir']), 1.5), ...elim()],
          'senin balonunda yeşil elma ve kırmızı çarpı') },
        { tur: 'gor', ses: [ys('Do you like it?')], S: sahne([...yeni(60, 160, 2.2, 'ileri'), ...topK(104, 104, 14), ...konusma(164, 36, icerik(164, 36, 1.2, 'top', ['kalp', 'soru']), 1.4)],
          'komşu ikinci kutudan sarı top çıkarmış; balonunda sarı top, kırmızı kalp ve soru işareti') },
        { tur: 'gor', ses: [sen('Yes. I like it.')], S: sahne([...yeni(60, 160, 2.2), ...topK(104, 104, 14), ...balon(166, 50, icerik(166, 44, 1.2, 'top', ['kalp']), 1.5), ...elim()],
          'senin balonunda sarı top ve kırmızı kalp; komşu gülüyor') },
        { tur: 'gor', ses: [ys('I like it.')], S: sahne([...yeni(60, 160, 2.2), ...topK(104, 104, 14), ...konusma(164, 36, icerik(164, 36, 1.2, 'top', ['kalp']), 1.4), ...elim()],
          'komşunun balonunda sarı top ve kırmızı kalp (ikiniz de seviyorsunuz)') },
        { tur: 'gor', ses: [ys('Goodbye.')], S: sahne([...kapi(56, 112, true), ...anahtar(66, 116, 'sari', .9), ...yeni(110, 160, 2.2, 'yukari'), ...sallar(110, 82), ...topK(146, 124, 12), ...kutuElma(180, 148, 'green', .5), ...kutu(204, 148, 'kraft', .5), ...gomlek(214, 116, 'turuncu'), { t: 'r', x: -2, y: 160, w: 244, h: 6, rx: 2, f: 'tas' }],
          'komşu kendi açık kapısının önünde iki elini sallıyor; kapısının kilidinde sarı anahtar; yanında sarı top; yerde iki kraft kutu, birinde yeşil elmalar; kutunun üstünde turuncu gömlek') },
      ],
      sorular: [
        // Soru 1 (kare 1, sayı): yanındaki üst üste kutu sayısı (iki). Sahnede yerde üç kutu var (tuzak); iki yalnız bu hikâyede. Şıklarda elma
        // ve top yok. Görev 16: birimler yalnız kökte duyulanlar (box ve sayı adı hikâyede söylenmez; kutu sayısı görsel hatırlamadır).
        { tur: 'sec', ses: [ys('Hello. I am your neighbour.')], dogruSes: [ys('Hello. I am your neighbour.')], dogru: 2,
          secenek: [kutuluS(3), kutuluS(4), kutuluS(2)], birimler: ['en:s:hello', 'en:y:am-are', 'en:s:your', 'en:s:neighbour'] },
        // Soru 2 (kare 3, renk): kutudaki elmalar (yakın çekim; komşu görünmez). Kırmızı Pazar'ın ve sahnenin elmasıdır (tuzak).
        { tur: 'sec', ses: [ys('Do you like apples?')], dogruSes: [ys('Do you like apples?')], dogru: 1,
          secenek: [elmaKutuS('red'), elmaKutuS('green'), elmaKutuS('yellow')], birimler: ['en:k:do-you-like', 'en:s:apples'] },
        // Soru 3 (kare 6, nesne): senin balonunda kalp ve sevdiğin şey. Elma kırmızı çizilir (S2'nin yeşilini göstermez).
        { tur: 'sec', ses: [sen('Yes. I like it.')], dogruSes: [sen('Yes. I like it.')], dogru: 0,
          secenek: [icerikS('sen', 'top', ['kalp']), icerikS('sen', 'anahtar', ['kalp']), icerikS('sen', 'gomlek', ['kalp'])], birimler: ['en:s:yes', 'en:k:i-like'] },
      ] },
    // 2 · Arkadaşın kız kardeşini getirir; çanta kaybolur. Plaka 12, sarı saçlı kız kardeş, kırmızı çanta.
    { id: 'kardes', ad: 'His sister',
      sayfalar: [
        { tur: 'gor', ses: [ark('Hello.')], S: sahne([...SEN_KAPI_PLAKA(12), ...arkadas(100, 160, 2.3, 'yukari'), ...sallar(100, 78), { t: 'r', x: -2, y: 160, w: 244, h: 6, rx: 2, f: 'tas' }, ...elim()],
          'senin kapın açık; kapının yanında numara plakası on iki; koridorda arkadaşın yalnız, iki elini sallıyor') },
        { tur: 'gor', ses: [ark('She is my sister.')], S: sahne([...arkadas(70, 170, 3, 'ileri'), ...kardes(170, 170, 3)],
          'yakın çekim (plaka görünmez): arkadaşın kolunu yanındakine uzatıyor; yanında kız kardeşi: sarı saç topuz, mavi gövde') },
        { tur: 'gor', ses: [sen('Nice to meet you.')], S: sahne([...kardes(60, 84, 1.6), ...tokalasma(130, 128, 'su')],
          'yakın çekim: tokalaşma (onun mavi kolu, senin kolun); üstte gülen kız kardeş') },
        { tur: 'gor', ses: [kar('I am from Italy.')], S: sahne([...kardes(60, 166, 2.4), ...konusma(160, 40, ulkeKarti(160, 40, 'I', 1.1), 1.5), ...elim()],
          'kız kardeşin balonunda uçaklı ülke kartı, harf I') },
        { tur: 'gor', ses: [ark('She is a doctor.')], S: sahne([...arkadas(50, 166, 2.2), ...konusma(150, 44, [...fig(150, 70, 1.15, 'k', 'sari', 'kar', 'asagi', 'mutlu', { tur: 'topuz' }),
          { t: 'l', d: 'M145.9 44.95 Q144.25 54.15 150 55.4 Q155.75 54.15 154.1 44.95', w: 1.2, k: '#4B4B52' }], 1.8), ...elim()],
          'arkadaşının balonunda kız kardeşi beyaz önlük ve stetoskopla') },
        { tur: 'gor', ses: [ark('Where is her bag?')], S: sahne([...arkadas(50, 166, 2.2), ...kardes(104, 166, 2.2, 'asagi', 'uzgun'), ...konusma(124, 36, [...canta(112, 34, 'red', .45), ...soruIsareti(148, 34, .9)], 1.4)],
          'kız kardeş üzgün; arkadaşının balonunda kırmızı çanta ve soru işareti') },
        { tur: 'gor', ses: [sen('Here.')], S: sahne([...pencere(64, 64), ...canta(64, 138, 'red', .7), { t: 'r', x: -2, y: 156, w: 244, h: 6, rx: 2, f: 'tas' }, ...okSol(166, 96, 130), ...elim()],
          'koridorun pencere tarafı (plaka görünmez): pencerenin altında kırmızı çanta; senin elinden ona ok') },
        { tur: 'gor', ses: [kar('Thank you.')], S: sahne([...kardes(90, 166, 2.4, 'ileri'), ...canta(140, 120, 'red', .6), ...elim()],
          'kız kardeş kırmızı çantayı almış, gülüyor') },
        { tur: 'gor', ses: [ark('Goodbye.')], S: sahne([...SEN_KAPI_PLAKA(12), ...arkadas(60, 160, 2.1, 'yukari'), ...sallar(60, 84), ...kardes(130, 160, 2.1, 'yukari'), ...canta(164, 140, 'red', .5), { t: 'r', x: -2, y: 160, w: 244, h: 6, rx: 2, f: 'tas' }],
          'senin kapında (plaka on iki) arkadaşın ve kız kardeşi el sallıyor; kırmızı çanta kız kardeşin yanında') },
      ],
      sorular: [
        // Soru 1 (kare 2, kişi): arkadaşının yanındaki kız kardeş. "She" ve "sister" erkeği eler; kahve saç arkadaşına benzeyen tuzaktır.
        { tur: 'sec', ses: [ark('She is my sister.')], dogruSes: [ark('She is my sister.')], dogru: 0,
          secenek: [ikiliS('sari', 'topuz'), ikiliS('kizil', 'uzun'), ikiliS('kahve', 'atkuyrugu')], birimler: ['en:s:she', 'en:s:my', 'en:s:sister'] },
        // Soru 2 (kare 6, renk): balondaki çanta. Kahve sahne ve pratiğin çantasıdır (tuzak). Şıklarda kişi ve plaka yok.
        { tur: 'sec', ses: [ark('Where is her bag?')], dogruSes: [ark('Where is her bag?')], dogru: 2,
          secenek: [cantaSoruS('kahve'), cantaSoruS('sari'), cantaSoruS('red')], birimler: ['en:s:where', 'en:s:her', 'en:s:bag'] },
        // Soru 3 (kare 1, sayı): senin kapının plakası. Doğru en küçük değer, B (H1 S1'in "C'de orta değer"inden ayrı). "twelve"
        // durakta söylenmez. Şıklarda kız kardeş ve çanta yok.
        { tur: 'sec', ses: [ark('Hello.')], dogruSes: [ark('Hello.')], dogru: 1,
          secenek: [kapiNoS(18), kapiNoS(12), kapiNoS(15)], birimler: ['en:s:hello'] },
      ] },
  ],
};
