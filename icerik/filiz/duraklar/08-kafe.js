// Filiz durağı 8: Kafe (Dalga 1 Görev 9, 23 Kasım 2026). Taslak: taslak/durak-taslaklari.md §17 (30 sahne sayfası, 3 yoklama
// sorusu, 5 oyun dizisi ve 37 etkileşim, iki hikâyecik).
// Fincan, kahve, çay, su, ekmek; sıcak; büyük ve küçük; içmek ve yemek; arkadaşa "I want", tezgâhta "Can I have …, please?",
// fiyat için "How much is it?". Kahraman "sen"sin (adın Deniz) ve çizilmezsin: sağ alttaki el, avucundaki nesne ve balonun.
// Türkçe yok. Bütün roller iDil sesiyle konuşur: kafe çalışanı 'pazarci' (çizim rolü kisi('kafe'); kontrolcü kararı), arkadaşın 'is',
// Anna 'memur' (İnsanlar'daki kişiler). Bir hikâyede iki konuşan aynı rolü paylaşmaz.
// Yeni birimler (13): cup, coffee, tea, water, bread, hot, big, small, drink, eat, i-want, can-i-have, how-much.
// Geri dönenler: hello, here, here is, your, please, thank you, yes, no, sorry, apples, key, bed, red, yellow, green, four, 11-19
// (thirteen, eighteen), I like, my, friend.
// Uzlaşımlar: kahve = koyu yüzey ve köpük halkası; çay = kehribar yüzey, dışarı sarkan ip ve beyaz etiket; su = kulpsuz uzun bardak
// (ayrım yalnız renkle değil, biçimle). Büyük ve küçük: tabak aynı, fincan büyür ya da küçülür; iki boy yan yana çizilince halka
// "bu". Sıcak = buhar. Balonda yalnız nesne = istemek; nesne ve kalp = sevmek; nesne ve soru işareti = soru; para ve soru işareti =
// "ne kadar?". Fiyat = menü panosunda fincan simgesi ve plaka rakamı (yazı yok).
// Sızıntı önlemi: sahne ve pratikte fincanlar beyaz, ekmek tabağında en çok iki dilim, 18 yok, Anna kahveyle görünmez; sarı ve
// yeşil fincan, dört dilim ve 18 yalnız hikâyelerde.
// Sec seçenekleri oynatıcıda boy 120 penceresinde çizilir; ana öğeler y ≤ 112.
import { balon, bardak, dilim, ekmek, el, elma, figurSac, fincan, halka, isaret, kalp, kisi, konusma, masa, ok,
  para, paraSira, plaka, salla, anahtar, yatak, SEN_EL } from '../parca.js';

const H = 180;
const sahne = (o, alt) => ({ boy: H, alt, o });
const anl = metin => ({ rol: 'anlatici', metin });
const sen = metin => ({ rol: 'sen', metin });
const ark = metin => ({ rol: 'is', metin });       // arkadaşın
const kaf = metin => ({ rol: 'pazarci', metin });  // kafe çalışanı
const kom = metin => ({ rol: 'memur', metin });    // Anna
const r2 = v => +v.toFixed(2);
// Görev 16 Tur 2: sıcak = parmak uçlarında kırmızı zikzak (Sağlık'ın ağrı uzlaşımı; çarpma ışınları "çarptın" demektir). (x, y) elin ortası.
const yanik = (x, y) => [{ t: 'l', d: [[-14, -26], [0, -32], [14, -26]].map(([dx, dy]) => `M${r2(x + dx - 3)} ${r2(y + dy - 6)} L${r2(x + dx + 2)} ${r2(y + dy - 2)} L${r2(x + dx - 2)} ${r2(y + dy + 1)} L${r2(x + dx + 3)} ${r2(y + dy + 6)}`).join(' '), w: 2.2, k: 'kirmizi' }];

const SAYI_AD = { 11: 'on bir', 13: 'on üç', 15: 'on beş', 16: 'on altı', 17: 'on yedi', 18: 'on sekiz', 2: 'iki', 3: 'üç', 4: 'dört' };
const KAFE_YESIL = '#3F6E63';

// ---- Kişiler (İnsanlar'daki uzlaşım: kadın omuza inen saç, erkek kısa saç ve sakal; renk cinsiyete bağlı değil) ----
const fig = (x, y, s, cins, sac, govde, kol = 'asagi', yuz = 'mutlu', ek = {}) => [
  { t: 'k', x, y, s, kol, yuz, f: govde },
  ...figurSac(x, y, s, ek.tur || (cins === 'k' ? 'uzun' : 'kisa'), sac, { sakal: cins === 'e', gozluk: ek.gozluk }),
];
const arkadas = (x, y, s, kol, yuz) => fig(x, y, s, 'e', 'kahve', 'kahve', kol, yuz, { gozluk: true });  // gözlük, kahverengi gövde
const anna = (x, y, s, kol, yuz) => fig(x, y, s, 'k', 'siyah', 'turuncu', kol, yuz);
// Kafe çalışanı: kisi('kafe') (raf, makine, koyu yeşil uzun tezgâh, beyaz gömlek ve önlük) ve kızıl at kuyruğu.
const kafeci = (kol = 'asagi', yuz = 'mutlu') => [...kisi('kafe', kol, yuz), ...figurSac(60, 112, 2, 'atkuyrugu', 'kizil')];
// Seçenek çerçevesi için küçük kafe çalışanı: (x, 100, 1.7); arkada rafta iki fincan, önde koyu yeşil tezgâh şeridi.
const kafeK = (x, kol = 'asagi') => [{ t: 'r', x: x - 46, y: 14, w: 92, h: 3, rx: 1, f: 'iz' }, ...fincan(x - 34, 14, 'bos', .3), ...fincan(x + 34, 14, 'bos', .3),
  { t: 'k', x, y: 100, s: 1.7, kol, yuz: 'mutlu', f: 'kar' }, { t: 'r', x: x - 8.5, y: 69, w: 17, h: 21, rx: 3, f: KAFE_YESIL },
  ...figurSac(x, 100, 1.7, 'atkuyrugu', 'kizil'), { t: 'r', x: x - 50, y: 100, w: 210, h: 20, rx: 4, f: KAFE_YESIL }];
const elim = () => el(...SEN_EL);
const sallar = (x, y) => [...salla(x + 18, y, 1), ...salla(x - 18, y, -1)];
// Soru işareti (balon içi; sozIci'nin 'soru' çizimiyle aynı).
const soruIsareti = (x, y, s = 1) => {
  const n = (dx, dy) => `${r2(x + dx * s)} ${r2(y + dy * s)}`;
  return [{ t: 'l', d: `M${n(-5, -6)} Q${n(-5, -11)} ${n(0, -11)} Q${n(6, -11)} ${n(6, -6)} Q${n(6, -2)} ${n(0, 0)} L${n(0, 4)}`, w: r2(2.6 * s), k: 'vurgu' },
    { t: 'c', x, y: r2(y + 9.5 * s), r: r2(2 * s), f: 'vurgu' }];
};

// ---- Balon içi simgeler: (cx, cy) simgenin ortası, k ölçek. Fincanların tabağı her boyda aynı (boy tabağa göre okunur). ----
const SIMGE = {
  kahve: (x, y, k) => fincan(x, r2(y + 8 * k), 'kahve', r2(.5 * k)),
  kahveB: (x, y, k) => fincan(x, r2(y + 10 * k), 'kahve', r2(.5 * k), { boy: 'buyuk' }),
  kahveK: (x, y, k) => fincan(x, r2(y + 7 * k), 'kahve', r2(.5 * k), { boy: 'kucuk' }),
  cay: (x, y, k) => fincan(x, r2(y + 8 * k), 'cay', r2(.5 * k)),
  cayB: (x, y, k) => fincan(x, r2(y + 10 * k), 'cay', r2(.5 * k), { boy: 'buyuk' }),
  cayK: (x, y, k) => fincan(x, r2(y + 7 * k), 'cay', r2(.5 * k), { boy: 'kucuk' }),
  cayH: (x, y, k) => fincan(x, r2(y + 12 * k), 'cay', r2(.45 * k), { buhar: true }),
  su: (x, y, k) => bardak(x, r2(y + 10 * k), r2(.5 * k)),
  ekmek: (x, y, k) => ekmek(x, r2(y + 5 * k), r2(.36 * k)),
  para: (x, y, k) => para(x, y, r2(1.1 * k)),
  kalp: (x, y, k) => kalp(x, y, r2(.9 * k)),
  soru: (x, y, k) => soruIsareti(x, r2(y - 1 * k), r2(.9 * k)),
  evet: (x, y, k) => isaret(x, y, 'evet', r2(.8 * k)),
  elma: (x, y, k) => elma(x, y, 'red', r2(9 * k)),
};
const SIMGE_AD = { kahve: 'kahve fincanı', kahveB: 'büyük kahve fincanı', kahveK: 'küçük kahve fincanı', cay: 'çay fincanı (ipli etiket)',
  cayB: 'büyük çay fincanı', cayK: 'küçük çay fincanı', cayH: 'buharlı fincan', su: 'su bardağı', ekmek: 'tabakta ekmek', para: 'para (sikke)',
  kalp: 'kırmızı kalp', soru: 'soru işareti', evet: 'yeşil onay', elma: 'kırmızı elma' };
const icerik = (cx, cy, k, ogeler) => ogeler.flatMap((t, i) => SIMGE[t](r2(cx + (i - (ogeler.length - 1) / 2) * 26 * k), cy, k));
const icerikAd = ogeler => ogeler.map(t => SIMGE_AD[t]).join(', ');
// Senin balonun (sahnede sağ üstte) ve karşıdakinin balonu.
const senBalon = (ogeler, x = 162, y = 40, s = 1.55, k = ogeler.length > 2 ? 1.15 : 1.45) => balon(x, y, icerik(x, r2(y - 5 * s), k, ogeler), s);
const onunBalon = (ogeler, x = 150, y = 34, s = 1.45, k = ogeler.length > 2 ? 1.1 : 1.4) => konusma(x, y, icerik(x, y, k, ogeler), s);

// ---- Kafe masası ve tezgâh ----
// Masa: masa() (üst yüz y 114). Masadaki nesne (x, 114).
// Menü panosu: (x, y) sol üst; satırlar [simge, fiyat]; her satırda küçük beyaz fincan simgesi ve sağında plaka rakamı.
const menu = (x, y, satirlar, halkaSatir = -1) => [
  { t: 'r', x, y, w: 72, h: 10 + 24 * satirlar.length, rx: 4, f: '#3F3A45' },
  ...satirlar.flatMap(([t, n], i) => [...SIMGE[t](x + 19, y + 15 + 24 * i, 1.05), ...plaka(x + 52, y + 17 + 24 * i, n === null ? '' : String(n), .48),
    ...(n === null ? soruIsareti(x + 52, y + 14 + 24 * i, .7) : [])]),
  ...(halkaSatir >= 0 ? [halka(x + 52, y + 17 + 24 * halkaSatir, 17)] : []),
];
const MENU = [['kahve', 15], ['cay', 13]];  // sahnenin panosu: kahve 15, çay 13
const menuAd = satirlar => satirlar.map(([t, n]) => `${SIMGE_AD[t]} ve plaka ${n === null ? 'soru işaretli (boş)' : SAYI_AD[n]}`).join('; ');

// ---- Seçenek resimleri (boy 120) ----
const serit = (f = 'gri') => ({ t: 'r', x: 30, y: 100, w: 180, h: 10, rx: 3, f });
const FINCAN_AD = { bos: 'boş beyaz fincan', kahve: 'beyaz fincanda kahve (köpük halkası)', cay: 'beyaz fincanda çay (dışarı sarkan ip ve etiket)' };
const fincanS = (tur, ic = {}) => sahne([serit(), ...fincan(120, 100, tur, 1.7, ic)], `masada ${FINCAN_AD[tur]}${ic.buhar ? ', buharlı' : ', buharsız'}`);
const bardakS = () => sahne([serit(), ...bardak(120, 100, 1.7)], 'masada su bardağı (kulpsuz, uzun), buharsız');
const ekmekS = () => sahne([serit(), ...ekmek(120, 101, 1.5)], 'masada tabakta somun ekmek ve iki dilim');
const elmalarS = () => sahne([...elma(100, 70, 'red', 20), ...elma(142, 74, 'red', 20)], 'iki kırmızı elma');
const anahtarS = () => sahne(anahtar(124, 60, 'sari', 2), 'sarı anahtar');
const yatakS = () => sahne(yatak(120, 64), 'boş yatak');
// Dört fincanlı kare: büyük kahve, küçük kahve, büyük çay, küçük çay (hepsi beyaz, buharsız; tabaklar aynı). halka: 'bk' | 'kk' | 'bc' | 'kc'.
const DORT = { bk: [36, 'kahve', 'buyuk'], kk: [94, 'kahve', 'kucuk'], bc: [150, 'cay', 'buyuk'], kc: [204, 'cay', 'kucuk'] };
const DORT_AD = { bk: 'büyük kahvede', kk: 'küçük kahvede', bc: 'büyük çayda', kc: 'küçük çayda' };
const dortS = yer => sahne([{ t: 'r', x: 6, y: 100, w: 228, h: 10, rx: 3, f: 'gri' },
  ...Object.values(DORT).flatMap(([x, tur, boy]) => fincan(x, 100, tur, .95, { boy })),
  halka(DORT[yer][0], DORT[yer][2] === 'buyuk' ? 80 : 90, DORT[yer][2] === 'buyuk' ? 28 : 17)],
  `masada soldan büyük kahve, küçük kahve, büyük çay, küçük çay (hepsi beyaz, tabaklar aynı); halka ${DORT_AD[yer]}`);
// Üç fincanlı kare (sahne 11–13): büyük kahve, küçük kahve, büyük çay.
const UC = { bk: [50, 'kahve', 'buyuk'], kk: [112, 'kahve', 'kucuk'], bc: [180, 'cay', 'buyuk'] };
const ucS = yer => sahne([serit(), ...Object.values(UC).flatMap(([x, tur, boy]) => fincan(x, 100, tur, 1.05, { boy })),
  halka(UC[yer][0], UC[yer][2] === 'buyuk' ? 78 : 89, UC[yer][2] === 'buyuk' ? 30 : 18)],
  `masada soldan büyük kahve, küçük kahve, büyük çay (beyaz, tabaklar aynı); halka ${DORT_AD[yer]}`);
// Arkadaşın içiyor, yiyor ya da el sallıyor (s 2; baş ortası 120, 52).
const ARK_EYLEM = {
  ic: () => [...arkadas(120, 112, 2, 'bas'), ...fincan(144, 70, 'kahve', .9, { egik: -60 })],
  ye: () => [...arkadas(120, 112, 2, 'bas'), ...dilim(129, 71, 1.05, { isirik: true })],
  salla: () => [...arkadas(120, 112, 2, 'yukari'), ...sallar(120, 56)],
};
const ARK_EYLEM_AD = { ic: 'fincanı eğip ağzına götürmüş (içiyor)', ye: 'ısırılmış ekmek dilimi ağzında (yiyor)', salla: 'iki elini sallıyor' };
const arkEylemS = e => sahne(ARK_EYLEM[e](), `arkadaşın (kısa kahverengi saç, sakal, gözlük, kahverengi gövde): ${ARK_EYLEM_AD[e]}`);
// Boşluk 4 (düzeltme turu 1): Anna arkadaşına "Eat your bread, please." der. Her şıkta Anna (solda, küçük), arkadaşın ve ekmek var;
// fark eylemde: yiyor, ekmeği sana uzatıyor (ok), ekmek tabakta dururken el sallıyor.
const EKMEK_EYLEM = {
  ye: () => [...anna(28, 112, 1.4), ...arkadas(132, 112, 2, 'bas'), ...dilim(141, 71, 1.05, { isirik: true })],
  uzat: () => [...anna(28, 112, 1.4), ...arkadas(120, 112, 2, 'ileri'), ...dilim(156, 82, 1.1), ok(166, 80, 214, 100)],
  salla: () => [...anna(28, 112, 1.4), ...arkadas(120, 112, 2, 'yukari'), ...sallar(120, 56), ...ekmek(186, 110, .6, { dilim: 1 })],
};
const EKMEK_EYLEM_AD = { ye: 'ısırılmış ekmek dilimi ağzında (yiyor)', uzat: 'elindeki ekmek dilimini sana uzatıyor (ok)', salla: 'iki elini sallıyor; yanında tabakta ekmek' };
const ekmekEylemS = e => sahne(EKMEK_EYLEM[e](), `solda Anna (küçük); arkadaşın (gözlük, kahverengi gövde): ${EKMEK_EYLEM_AD[e]}`);
// Balon seçenekleri: senin balonun, arkadaşının ya da Anna'nın balonu.
const senBalonS = ogeler => sahne([...balon(120, 56, icerik(120, 49, ogeler.length > 1 ? 1.75 : 2, ogeler), 2.2), ...el(196, 112)], `senin balonunda ${icerikAd(ogeler)}`);
const arkBalonS = ogeler => sahne([...arkadas(36, 116, 1.6), ...konusma(142, 46, icerik(142, 46, 1.8, ogeler), 1.9)], `arkadaşının balonunda ${icerikAd(ogeler)}`);
const annaBalonS = ogeler => sahne([...anna(36, 116, 1.6), ...konusma(142, 46, icerik(142, 46, 1.8, ogeler), 1.9)], `Anna'nın balonunda ${icerikAd(ogeler)}`);
// Kafe çalışanı tezgâhta sana bir şey uzatıyor (küçük çerçeve).
const UZAT_AD = { kahve: 'kahve fincanı', cay: 'çay fincanı', su: 'su bardağı' };
const uzatS = tur => sahne([...kafeK(56, 'ileri'), ...(tur === 'su' ? bardak(140, 100, 1.1) : fincan(140, 100, tur, 1.1, { buhar: true })), ok(92, 70, 196, 98)],
  `kafe çalışanı (kızıl at kuyruğu, önlük) tezgâhta sana ${UZAT_AD[tur]} uzatıyor`);
const plakaS = n => sahne(plaka(120, 60, String(n), 1.6), `plaka ${SAYI_AD[n]}`);

// ---- Sahne kareleri ----
const masaF = (...o) => [...masa(), ...o, ...elim()];
const UC_SAHNE = { bk: [56, 'kahve', 'buyuk'], kk: [122, 'kahve', 'kucuk'], bc: [186, 'cay', 'buyuk'] };
const ucSahne = yer => [...masa(), ...Object.values(UC_SAHNE).flatMap(([x, tur, boy]) => fincan(x, 114, tur, 1.3, { boy })),
  halka(UC_SAHNE[yer][0], UC_SAHNE[yer][2] === 'buyuk' ? 88 : 103, UC_SAHNE[yer][2] === 'buyuk' ? 36 : 20), ...elim()];
// Arkadaşın masanın arkasında (x 70; masa gövdesinin altını örter).
const arkMasa = (kol = 'asagi', ...o) => [...arkadas(70, 150, 2.4, kol), ...masa(), ...o, ...elim()];
// Tezgâh: kafe çalışanı ve sağ duvarda menü panosu.
const tezgah = (kol, yuz, ...o) => [...kafeci(kol, yuz), ...o, ...elim()];

// ---- Hikâye yardımcıları ----
// Düzeltme turu 1 (kör çözüm): H1'de ilk gelen küçük fincan SARI, büyük kahve BEYAZ (renk sorusunun doğrusu beyaz olabilsin; tek
// renk sorusu durakta H1 S3); fiyat 16 (sahnenin 13 ve 15'inin üstünde, doğru en küçük değer). H2'de Anna ÇAY, sen KAHVE içersin
// (sahnedeki "sen çay, karşındaki kahve" deseninin tersi); H2 S3 renk değil boy sorusu (büyük su bardağı).
const MENU1 = [['kahveB', 16]];  // Hikâye 1'in panosu: büyük kahve 16
// H1 S1: tezgâhta senin önündeki fincan(lar) (yakın çekim; sarı fincan, tabak sabit). 'bk' büyük kahve, 'ikk' iki küçük kahve, 'kk' küçük kahve.
const TEZ_AD = { bk: 'büyük kahve', ikk: 'yan yana iki küçük kahve', kk: 'tek küçük kahve' };
const tezgahFincanS = yer => sahne([{ t: 'r', x: 20, y: 100, w: 200, h: 20, rx: 4, f: KAFE_YESIL },
  ...(yer === 'ikk' ? [...fincan(92, 100, 'kahve', 1.5, { boy: 'kucuk', renk: 'sari' }), ...fincan(148, 100, 'kahve', 1.5, { boy: 'kucuk', renk: 'sari' })]
    : fincan(120, 100, 'kahve', 1.5, { boy: yer === 'bk' ? 'buyuk' : 'kucuk', renk: 'sari' }))],
  `yakın çekim: koyu yeşil tezgâhta senin önünde ${TEZ_AD[yer]} (sarı fincan, tabak aynı boy), buharsız`);
// H1 S2: menü panosu yakın çekim (büyük kahve simgesi ve plaka).
const menuS = n => sahne([{ t: 'r', x: 40, y: 16, w: 160, h: 76, rx: 6, f: '#3F3A45' }, ...SIMGE.kahveB(88, 50, 1.8), ...plaka(158, 54, String(n), 1.1)],
  `yakın çekim: menü panosunda büyük kahve simgesi ve plaka ${SAYI_AD[n]}`);
// H1 S3: tezgâhta büyük buharlı kahve, fincan rengi (küçük fincan kadraj dışında).
// Tur 2 (kontrolcü kararı): durakta renk sorusu yok. H1 S3 nesne sorusu: büyük kahvenin yanında çalışanın ikram ettiği şey (tabakta ekmek).
const EK_AD = { su: 'su bardağı', ekmek: 'tabakta iki dilim ekmek', cay: 'beyaz fincanda çay (ipli etiket), normal boy' };
const ekstraS = tur => sahne([{ t: 'r', x: 20, y: 100, w: 200, h: 20, rx: 4, f: KAFE_YESIL }, ...fincan(92, 100, 'kahve', 1.2, { boy: 'buyuk', buhar: true }),
  ...(tur === 'su' ? bardak(172, 100, 1.1) : tur === 'ekmek' ? ekmek(172, 100, 1, { somun: false, dilim: 2 }) : fincan(172, 100, 'cay', 1))],
  `yakın çekim: tezgâhta büyük beyaz fincanda kahve, buharlı; yanında ${EK_AD[tur]}`);
// H1 kareleri: tezgâh, sağ duvarda pano (her karede), küçük sarı fincan (x 96) ve büyük beyaz fincan (x 132).
const h1 = (kol, yuz, { kucuk = null, buyuk = false, ekmekVar = false, halka = -1, ekler = [] } = {}) => [...kafeci(kol, yuz), ...menu(162, 52, MENU1, halka),
  ...(ekmekVar ? ekmek(182, 112, .72, { somun: false, dilim: 2 }) : []),
  ...(kucuk === 'on' ? fincan(132, 112, 'kahve', 1.1, { boy: 'kucuk', renk: 'sari' }) : kucuk === 'yan' ? fincan(96, 112, 'kahve', 1, { boy: 'kucuk', renk: 'sari' }) : []),
  ...(buyuk ? fincan(132, 112, 'kahve', 1, { boy: 'buyuk', buhar: true }) : []), ...ekler, ...elim()];
// H2 S1: Anna ve önündeki içecek (yakın çekim; senin fincanın kadraj dışında).
const ICECEK_AD = { cay: 'beyaz fincanda çay (ipli etiket)', kahve: 'beyaz fincanda kahve (köpük halkası)', su: 'su bardağı' };
const annaIcecekS = tur => sahne([...anna(70, 112, 1.9), serit(), ...(tur === 'su' ? bardak(148, 100, 1.3) : fincan(148, 100, tur, 1.3))],
  `yakın çekim: Anna masada; önünde ${ICECEK_AD[tur]}`);
// H2 S2: Anna'nın uzattığı tabak (yakın çekim; çayı kadraj dışında).
const annaTabakS = n => sahne([...anna(60, 112, 1.9, 'ileri'), ...ekmek(128, 84, .9, { somun: false, dilim: n })],
  `yakın çekim: Anna tabağı sana uzatıyor; tabakta ${SAYI_AD[n]} dilim ekmek (somun yok)`);
// H2 S3: senin önündeki su (yakın çekim; masa şeridi ve senin elin). 'b' büyük bardak, 'k' küçük bardak, 'ik' iki küçük bardak.
// Tur 3: şıklar birbirinden ayrı özelliklerle (ortak özellik kalıbı yok); boy sabit nesneye (senin elin) göre: büyük dolu su bardağı
// (doğru), küçük boş fincan, tabakta ekmek.
const SU_AD = { b: 'büyük su bardağı, ağzına kadar dolu', f: 'küçük boş fincan', e: 'tabakta iki dilim ekmek' };
const senSuS = yer => sahne([serit(), ...(yer === 'b' ? bardak(130, 100, 1.3, { boy: 'buyuk' }) : yer === 'f' ? fincan(130, 100, 'bos', 1.3, { boy: 'kucuk' })
  : ekmek(130, 100, .9, { somun: false, dilim: 2 })), ...el(204, 112)], `yakın çekim: masada senin önünde ${SU_AD[yer]}; yanında senin elin`);
// H2 masası: Anna (x 60) ve çayı (x 102), isteğe bağlı tabak, senin kahven (x 212, beyaz, buharlı) ve elin.
const h2Masa = ({ kol = 'asagi', tabak = 'masa', su = false, ekler = [] } = {}) => [
  ...anna(60, 150, 2.4, kol), ...masa(), ...fincan(102, 114, 'cay', 1.1),
  ...(tabak === 'masa' ? ekmek(150, 113, .72, { somun: false, dilim: 4 }) : []),
  ...(su ? bardak(178, 113, 1.1, { boy: 'buyuk' }) : []), ...fincan(214, 114, 'kahve', 1.1, { buhar: true }),
  ...(tabak === 'el' ? ekmek(142, 98, .8, { somun: false, dilim: 4 }) : []), ...ekler, ...el(206, 154)];

export default {
  dil: 'en', id: 'kafe', no: 8, ad: 'Kafe',
  yoklama: [
    { tur: 'sec', ses: [anl('Tea.')], dogruSes: [anl('Tea.')], dogru: 0,
      secenek: [fincanS('cay'), fincanS('kahve'), bardakS()], birimler: ['en:s:tea'] },
    { tur: 'sec', ses: [anl('A small coffee.')], dogruSes: [anl('A small coffee.')], dogru: 2,
      secenek: [dortS('bk'), dortS('kc'), dortS('kk')], birimler: ['en:s:small', 'en:s:coffee'] },
    { tur: 'sec', ses: [sen('How much is it?')], dogruSes: [sen('How much is it?')], dogru: 1,
      secenek: [senBalonS(['cay', 'soru']), senBalonS(['para', 'soru']), senBalonS(['kalp', 'soru'])], birimler: ['en:k:how-much'] },
  ],
  sayfalar: [
    // 1-4: cup, coffee, tea
    { tur: 'gor', ses: [anl('A cup.')], S: sahne(masaF(...fincan(120, 114, 'bos', 1.8)), 'kafe masası; tabağıyla boş beyaz fincan; senin elin'), yeni: 'en:s:cup', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Coffee.')], S: sahne(masaF(...fincan(120, 114, 'kahve', 1.8)), 'aynı fincan dolu: koyu kahve ve açık kahverengi köpük halkası'), yeni: 'en:s:coffee', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Tea.')], S: sahne(masaF(...fincan(120, 114, 'cay', 1.8)), 'aynı fincan: kehribar çay; kenardan dışarı sarkan ip ve beyaz etiket (çay poşeti); köpük yok'), yeni: 'en:s:tea', degisen: 'nesne' },
    { tur: 'sec', ses: [anl('Coffee.')], dogruSes: [anl('Coffee.')], dogru: 1,
      secenek: [fincanS('cay'), fincanS('kahve'), fincanS('bos')], birimler: ['en:s:coffee'] },
    // 5-8: water, bread
    { tur: 'gor', ses: [anl('Water.')], S: sahne(masaF(...bardak(120, 113, 1.8)), 'fincanın yerinde su bardağı (kulpsuz, uzun, düz)'), yeni: 'en:s:water', degisen: 'nesne' },
    { tur: 'sec', ses: [anl('Tea.')], dogruSes: [anl('Tea.')], dogru: 0,
      secenek: [fincanS('cay'), bardakS(), fincanS('kahve')], birimler: ['en:s:tea'] },
    { tur: 'gor', ses: [anl('Bread.')], S: sahne(masaF(...ekmek(120, 113, 1.6)), 'masada tabakta somun ekmek ve iki dilim'), yeni: 'en:s:bread', degisen: 'nesne' },
    { tur: 'sec', ses: [anl('A cup.')], dogruSes: [anl('A cup.')], dogru: 2,
      secenek: [bardakS(), ekmekS(), fincanS('bos')], birimler: ['en:s:cup'] },
    // 9-10: hot
    { tur: 'gor', ses: [anl('Hot.')], S: sahne(masaF(...fincan(120, 114, 'cay', 1.8, { buhar: true })), 'masada çay fincanı; üstünden üç dalgalı buhar çizgisi yükseliyor'), yeni: 'en:s:hot', degisen: 'nesne' },
    { tur: 'sec', ses: [anl('Hot.')], dogruSes: [anl('Hot.')], dogru: 2,
      secenek: [fincanS('cay'), bardakS(), fincanS('cay', { buhar: true })], birimler: ['en:s:hot'] },
    // 11-13: big, small
    { tur: 'gor', ses: [anl('A big coffee.')], S: sahne(ucSahne('bk'), 'masada soldan büyük kahve, küçük kahve, büyük çay (beyaz, buharsız; tabaklar aynı boy); büyük kahve halkalı'), yeni: 'en:s:big', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('A small coffee.')], S: sahne(ucSahne('kk'), 'aynı kare; halka küçük kahvede'), yeni: 'en:s:small', degisen: 'nesne' },
    { tur: 'sec', ses: [anl('A small coffee.')], dogruSes: [anl('A small coffee.')], dogru: 1,
      secenek: [ucS('bk'), ucS('kk'), ucS('bc')], birimler: ['en:s:small', 'en:s:coffee'] },
    // 14-16: drink, eat
    { tur: 'gor', ses: [anl('Drink.')], S: sahne(arkMasa('bas', ...fincan(96, 98, 'kahve', 1.05, { egik: -60 }), ...ekmek(166, 113, 1.1)),
      'arkadaşın (kısa kahverengi saç, sakal, gözlük, kahverengi gövde) masanın arkasında; fincanı eğip ağzına götürmüş; masada tabakta somun ve iki dilim'), yeni: 'en:s:drink', degisen: 'eylem' },
    { tur: 'gor', ses: [anl('Eat.')], S: sahne(arkMasa('bas', ...dilim(84, 98, 1.25, { isirik: true }), ...fincan(126, 114, 'kahve', 1.1), ...ekmek(176, 113, 1.1, { dilim: 1 })),
      'aynı kare; elinde ısırılmış ekmek dilimi ağzında, yanında iki kırıntı; fincan tabağında masada; tabakta somun ve bir dilim'), yeni: 'en:s:eat', degisen: 'eylem' },
    { tur: 'sec', ses: [anl('Drink.')], dogruSes: [anl('Drink.')], dogru: 0,
      secenek: [arkEylemS('ic'), arkEylemS('ye'), arkEylemS('salla')], birimler: ['en:s:drink'] },
    // 17-20: I want
    { tur: 'gor', ses: [ark('Coffee? Tea?')], S: sahne(arkMasa('asagi', ...fincan(126, 114, 'bos', 1.1), ...onunBalon(['kahve', 'cay', 'soru'], 156, 40, 1.5)),
      'arkadaşın masada gülüyor, önünde boş fincan (kahvesi bitti); balonunda kahve fincanı, çay fincanı ve soru işareti'), degisen: 'eylem' },
    { tur: 'gor', ses: [sen('I want tea.')], S: sahne(arkMasa('asagi', ...fincan(126, 114, 'bos', 1.1), ...senBalon(['cay'], 168, 44)),
      'arkadaşın masada; senin balonunda çay fincanı'), yeni: 'en:k:i-want', degisen: 'eylem' },
    { tur: 'gor', ses: [ark('I want coffee.')], S: sahne(arkMasa('asagi', ...fincan(126, 114, 'bos', 1.1), ...onunBalon(['kahve'], 156, 40, 1.5)),
      'arkadaşının balonunda kahve fincanı'), degisen: 'eylem' },
    { tur: 'sec', ses: [ark('I want coffee.')], dogruSes: [ark('I want coffee.')], dogru: 0,
      secenek: [arkBalonS(['kahve']), arkBalonS(['cay']), arkBalonS(['ekmek'])], birimler: ['en:k:i-want', 'en:s:coffee'] },
    // 21-29: tezgâh: can I have, how much
    { tur: 'gor', ses: [kaf('Hello.')], S: sahne(tezgah('yukari', 'mutlu', ...sallar(60, 54), ...menu(162, 52, MENU)),
      `tezgâh: kafe çalışanı (kızıl at kuyruğu, beyaz gömlek, koyu yeşil önlük; arkada fincanlı raf ve kahve makinesi; koyu yeşil uzun tezgâh) iki elini sallıyor; sağ duvarda menü panosu: ${menuAd(MENU)}; senin elin`), degisen: 'kisi' },
    { tur: 'gor', ses: [sen('Can I have a tea, please?')], S: sahne(tezgah('asagi', 'mutlu', ...menu(162, 52, MENU), ...senBalon(['cay'], 150, 34, 1.45)),
      'aynı kare; senin balonunda çay fincanı'), yeni: 'en:k:can-i-have', degisen: 'eylem' },
    { tur: 'gor', ses: [kaf('A big tea?')], S: sahne(tezgah('asagi', 'mutlu', ...menu(162, 52, MENU), ...onunBalon(['cayB', 'soru'], 142, 30, 1.35)),
      'çalışanın balonunda büyük çay fincanı ve soru işareti'), degisen: 'eylem' },
    { tur: 'gor', ses: [sen('No. A small tea, please.')], S: sahne(tezgah('asagi', 'mutlu', ...menu(162, 52, MENU), ...senBalon(['cayK'], 150, 34, 1.45)),
      'senin balonunda küçük çay fincanı'), degisen: 'eylem' },
    { tur: 'gor', ses: [sen('How much is it?')], S: sahne(tezgah('asagi', 'mutlu', ...menu(162, 52, MENU), ...senBalon(['para', 'soru'], 150, 34, 1.45)),
      'senin balonunda para ve soru işareti; menü panosu görünüyor'), yeni: 'en:k:how-much', degisen: 'eylem' },
    { tur: 'gor', ses: [kaf('Thirteen.')], S: sahne(tezgah('ileri', 'mutlu', ...menu(162, 52, MENU, 1), ok(92, 76, 150, 80)),
      'çalışan menü panosundaki çay satırını gösteriyor (ok); plaka on üç halkalı'), degisen: 'eylem' },
    { tur: 'gor', ses: [kaf('Here is your tea.')], S: sahne(tezgah('ileri', 'mutlu', ...menu(162, 52, MENU), ...fincan(124, 112, 'cay', 1.1, { boy: 'kucuk', buhar: true }), ok(136, 104, 178, 132)),
      'tezgâhta senin önünde küçük çay fincanı, buharlı; çalışanın kolu sana uzanmış; fincandan senin eline ok'), degisen: 'nesne' },
    { tur: 'sec', ses: [sen('How much is it?')], dogruSes: [sen('How much is it?')], dogru: 2,
      secenek: [senBalonS(['cay', 'kalp']), senBalonS(['cay', 'soru']), senBalonS(['para', 'soru'])], birimler: ['en:k:how-much'] },
    { tur: 'sec', ses: [sen('Can I have a coffee, please?')], dogruSes: [sen('Can I have a coffee, please?')], dogru: 1,
      secenek: [senBalonS(['su']), senBalonS(['kahve']), senBalonS(['ekmek'])], birimler: ['en:k:can-i-have', 'en:s:coffee'] },
    // Yazı perdesi
    { tur: 'yazi', birimler: ['en:s:cup', 'en:s:coffee', 'en:s:tea', 'en:s:water', 'en:s:bread', 'en:s:hot', 'en:s:big', 'en:s:small',
      'en:s:drink', 'en:s:eat', 'en:k:i-want', 'en:k:can-i-have', 'en:k:how-much'] },
  ],

  // ---- Pratik (taslak §17.4): 5 oyun dizisi = 5 tür, 37 etkileşim (eşleştir 2 tahta, boşluk 6, ne derdin 6, sırala 5, hızlı tur
  // 1 × 12 soru). Geri dönüş ≥ %30. Oynatıcı şıkları karıştırmaz: doğru şık sırası elle düzensiz.
  pratik: [
    // Oyun 1 · eşleştir: içecekler; masa
    { tur: 'eslestir', ciftler: [
      { ses: [anl('Coffee.')], S: fincanS('kahve'), birim: 'en:s:coffee' },
      { ses: [anl('Tea.')], S: fincanS('cay'), birim: 'en:s:tea' },
      { ses: [anl('Water.')], S: bardakS(), birim: 'en:s:water' },
      { ses: [anl('Apples.')], S: elmalarS(), birim: 'en:s:apples' },
    ] },
    { tur: 'eslestir', ciftler: [
      { ses: [anl('Bread.')], S: ekmekS(), birim: 'en:s:bread' },
      { ses: [anl('A cup.')], S: fincanS('bos'), birim: 'en:s:cup' },
      { ses: [anl('A key.')], S: anahtarS(), birim: 'en:s:key' },
      { ses: [anl('A bed.')], S: yatakS(), birim: 'en:s:bed' },
    ] },
    // Oyun 2 · boşluk (6; doğrular B C A B A C; düzeltme turu 1)
    { tur: 'bosluk', ses: [kaf('A big coffee.')], metin: 'A ___ coffee.',
      secenek: [dortS('kk'), dortS('bk'), dortS('kc')], dogru: 1, birimler: ['en:s:big', 'en:s:coffee'] },
    { tur: 'bosluk', ses: [sen('I want water.')], metin: 'I want ___.',
      secenek: [senBalonS(['cay']), senBalonS(['kahve']), senBalonS(['su'])], dogru: 2, birimler: ['en:k:i-want', 'en:s:water'] },
    { tur: 'bosluk', ses: [sen('Can I have a coffee, please?')], metin: 'Can I have a ___, please?',
      secenek: [senBalonS(['kahve']), senBalonS(['cay']), senBalonS(['ekmek'])], dogru: 0, birimler: ['en:k:can-i-have', 'en:s:coffee', 'en:s:please'] },
    { tur: 'bosluk', ses: [kom('Eat your bread, please.')], metin: '___ your bread, please.',
      secenek: [ekmekEylemS('salla'), ekmekEylemS('ye'), ekmekEylemS('uzat')], dogru: 1, birimler: ['en:s:eat', 'en:s:your', 'en:s:bread'] },
    { tur: 'bosluk', ses: [sen('How much is it?')], metin: 'How ___ is it?',
      secenek: [senBalonS(['para', 'soru']), senBalonS(['cay', 'soru']), senBalonS(['kalp', 'soru'])], dogru: 0, birimler: ['en:k:how-much'] },
    { tur: 'bosluk', ses: [kom('I like coffee.')], metin: 'I like ___.',
      secenek: [annaBalonS(['cay', 'kalp']), annaBalonS(['elma', 'kalp']), annaBalonS(['kahve', 'kalp'])], dogru: 2, birimler: ['en:k:i-like', 'en:s:coffee'] },
    // Oyun 3 · ne derdin? (6; senin balonun yok; karşıdakinin yüzü hep gülen; neyin sorulduğu balonda açık; doğrular C A B B C A; düzeltme turu 1)
    { tur: 'nederdin', S: sahne(tezgah('asagi', 'mutlu', ...onunBalon(['kahveB', 'kahveK', 'soru'], 150, 34, 1.45)),
      'kafe çalışanı tezgâhta; balonunda büyük ve küçük kahve fincanı ve soru işareti ("hangisi?")'),
      secenekSes: [[sen('A small tea, please.')], [sen('I want water.')], [sen('A small coffee, please.')]], dogru: 2, birimler: ['en:s:small', 'en:s:coffee', 'en:s:please'] },
    { tur: 'nederdin', S: sahne(arkMasa('asagi', ...fincan(126, 114, 'bos', 1.1), ...onunBalon(['kahve', 'cay', 'soru'], 156, 40, 1.5)),
      'arkadaşın masada; balonunda kahve fincanı, çay fincanı ve soru işareti'),
      secenekSes: [[sen('I want tea.')], [sen('Yes.')], [sen('Can I have water, please?')]], dogru: 0, birimler: ['en:k:i-want', 'en:s:tea'] },
    { tur: 'nederdin', S: sahne([...kafeci('asagi'), ...menu(162, 40, [['cay', null]]), ...el(186, 146), ...paraSira(3, 186, 150, .8)],
      'tezgâh: kafe çalışanı; menü panosunda çay simgesi ve yanında soru işaretli boş plaka; senin avucunda paralar'),
      secenekSes: [[sen('Sorry.')], [sen('How much is it?')], [sen('Can I have a cup, please?')]], dogru: 1, birimler: ['en:k:how-much'] },
    { tur: 'nederdin', S: sahne(arkMasa('ileri', ...ekmek(138, 98, .8), ...onunBalon(['ekmek', 'soru'], 168, 34, 1.35)),
      'arkadaşın ekmek tabağını (somun ve iki dilim) sana uzatıyor; balonunda ekmek ve soru işareti'),
      secenekSes: [[sen('Here.')], [sen('Yes, please.')], [sen('How much is it?')]], dogru: 1, birimler: ['en:s:yes', 'en:s:please'] },
    { tur: 'nederdin', S: sahne([...arkadas(60, 150, 2.4), ...masa(), ...fincan(150, 114, 'cay', 1.3, { renk: 'yesil', buhar: true }), ...el(212, 150), ...yanik(212, 150),
      ...onunBalon(['cayH', 'soru'], 132, 34, 1.35)],
      'senin elin buharlı yeşil çay fincanından geri çekilmiş, parmak uçlarında kırmızı ağrı zikzakları; arkadaşının balonunda buharlı fincan ve soru işareti'),
      secenekSes: [[sen('Goodbye.')], [sen('I am from Türkiye.')], [sen('It is hot.')]], dogru: 2, birimler: ['en:s:hot'] },
    { tur: 'nederdin', S: sahne(tezgah('ileri', 'mutlu', ...fincan(124, 112, 'cay', 1.1, { buhar: true }), ok(136, 104, 178, 132)),
      'kafe çalışanı sana buharlı çay fincanı uzatıyor (kolu ileri); balonu yok'),
      secenekSes: [[sen('Thank you.')], [sen('Hello.')], [sen('Can I have a tea, please?')]], dogru: 0, birimler: ['en:k:thank-you'] },
    // Oyun 4 · sırala (5): tek büyük harfli kart ve tek bitiş noktalamalı kart, tek sıra; "Can I …" iki büyük harfli kart verdiği için alınmadı.
    { tur: 'sirala', ses: [sen('I want water.')], parcalar: ['I', 'want', 'water.'], birimler: ['en:k:i-want', 'en:s:water'] },
    { tur: 'sirala', ses: [sen('How much is it?')], parcalar: ['How', 'much', 'is', 'it?'], birimler: ['en:k:how-much'] },
    { tur: 'sirala', ses: [sen('A small tea, please.')], parcalar: ['A', 'small', 'tea,', 'please.'], birimler: ['en:s:small', 'en:s:tea', 'en:s:please'] },
    { tur: 'sirala', ses: [kom('Eat your bread, please.')], parcalar: ['Eat', 'your', 'bread,', 'please.'], birimler: ['en:s:eat', 'en:s:your', 'en:s:bread', 'en:s:please'] },
    { tur: 'sirala', ses: [kom('Drink your water, please.')], parcalar: ['Drink', 'your', 'water,', 'please.'], birimler: ['en:s:drink', 'en:s:your', 'en:s:water', 'en:s:please'] },
    // Oyun 5 · hızlı tur (60 sn, 12 soru); doğrular C A B A B C B C A C A B (A 4, B 4, C 4; düzeltme turu 1)
    { tur: 'hizli', sure: 60, sorular: [
      { tur: 'sec', ses: [anl('Coffee.')], dogruSes: [anl('Coffee.')], secenek: [fincanS('cay'), bardakS(), fincanS('kahve')], dogru: 2, birimler: ['en:s:coffee'] },
      { tur: 'sec', ses: [anl('A cup.')], dogruSes: [anl('A cup.')], secenek: [fincanS('bos'), bardakS(), ekmekS()], dogru: 0, birimler: ['en:s:cup'] },
      { tur: 'sec', ses: [anl('Hot.')], dogruSes: [anl('Hot.')], secenek: [bardakS(), fincanS('kahve', { buhar: true }), fincanS('kahve')], dogru: 1, birimler: ['en:s:hot'] },
      { tur: 'sec', ses: [kaf('Here is your tea.')], dogruSes: [kaf('Here is your tea.')], secenek: [uzatS('cay'), uzatS('kahve'), uzatS('su')], dogru: 0, birimler: ['en:k:here-is', 'en:s:your', 'en:s:tea'] },
      { tur: 'sec', ses: [anl('Bread.')], dogruSes: [anl('Bread.')], secenek: [elmalarS(), ekmekS(), anahtarS()], dogru: 1, birimler: ['en:s:bread'] },
      { tur: 'sec', ses: [anl('A big tea.')], dogruSes: [anl('A big tea.')], secenek: [dortS('kc'), dortS('bk'), dortS('bc')], dogru: 2, birimler: ['en:s:big', 'en:s:tea'] },
      { tur: 'sec', ses: [sen('Can I have water, please?')], dogruSes: [sen('Can I have water, please?')], secenek: [senBalonS(['cay']), senBalonS(['su']), senBalonS(['ekmek'])], dogru: 1, birimler: ['en:k:can-i-have', 'en:s:water', 'en:s:please'] },
      { tur: 'sec', ses: [anl('Drink.')], dogruSes: [anl('Drink.')], secenek: [arkEylemS('ye'), arkEylemS('salla'), arkEylemS('ic')], dogru: 2, birimler: ['en:s:drink'] },
      { tur: 'sec', ses: [anl('Thirteen.')], dogruSes: [anl('Thirteen.')], secenek: [plakaS(13), plakaS(15), plakaS(11)], dogru: 0, birimler: ['en:y:sayilar-13-19'] },
      { tur: 'sec', ses: [ark('I like tea.')], dogruSes: [ark('I like tea.')], secenek: [arkBalonS(['kahve', 'kalp']), arkBalonS(['cay', 'soru']), arkBalonS(['cay', 'kalp'])], dogru: 2, birimler: ['en:k:i-like', 'en:s:tea'] },
      { tur: 'sec', ses: [anl('A small coffee.')], dogruSes: [anl('A small coffee.')], secenek: [dortS('kk'), dortS('bk'), dortS('kc')], dogru: 0, birimler: ['en:s:small', 'en:s:coffee'] },
      { tur: 'sec', ses: [anl('Eat.')], dogruSes: [anl('Eat.')], secenek: [arkEylemS('ic'), arkEylemS('ye'), arkEylemS('salla')], dogru: 1, birimler: ['en:s:eat'] },
    ] },
  ],

  // ---- Hikâyecikler (taslak §17.5): yeni birim yok. Kök hikâyede bir kez geçen satırdır; şıklar o karenin üç hâlidir (yakın çekim);
  // doğru şık hikâyede olan hâldir. Bir sorunun şıkları başka bir sorunun cevabını göstermez; bir hikâyede iki soru aynı türden değil.
  // Doğrular H1 C A B, H2 B C A.
  hikayeler: [
    // 1 · Müfredat fikri: sipariş karışır, büyük yerine küçük kahve gelir. Küçük sarı fincan, pano 16, büyük beyaz fincan.
    { id: 'siparis', ad: 'Hello',
      sayfalar: [
        { tur: 'gor', ses: [kaf('Hello.')], S: sahne(h1('yukari', 'mutlu', { ekler: sallar(60, 54) }),
          'tezgâh; kafe çalışanı (kızıl at kuyruğu, önlük) iki elini sallıyor; sağ duvarda menü panosunda tek satır: büyük kahve simgesi ve plaka on altı; tezgâhta fincan yok; senin elin') },
        { tur: 'gor', ses: [sen('Can I have a big coffee, please?')], S: sahne(h1('asagi', 'mutlu', { ekler: senBalon(['kahveB'], 150, 34, 1.45) }),
          'aynı kare (pano görünüyor); senin balonunda büyük kahve fincanı') },
        { tur: 'gor', ses: [kaf('Here.')], S: sahne(h1('ileri', 'mutlu', { kucuk: 'on' }),
          'tezgâhta senin önünde küçük sarı kahve fincanı, buharsız; çalışanın kolu sana uzanmış') },
        { tur: 'gor', ses: [sen('Sorry. A big coffee, please.')], S: sahne(h1('asagi', 'sasir', { kucuk: 'on', ekler: senBalon(['kahveB'], 150, 34, 1.45) }),
          'senin balonunda büyük kahve; tezgâhta küçük sarı kahve; çalışan şaşırmış') },
        { tur: 'gor', ses: [kaf('A big coffee. It is hot.')], S: sahne(h1('ileri', 'mutlu', { kucuk: 'yan', buyuk: true, ekmekVar: true }),
          'tezgâhta senin önünde büyük beyaz fincanda kahve, buharlı; yanında tabakta iki dilim ekmek (ikram); küçük sarı fincan çalışanın yanında; çalışan gülüyor') },
        { tur: 'gor', ses: [sen('How much is it?')], S: sahne(h1('asagi', 'mutlu', { kucuk: 'yan', buyuk: true, ekmekVar: true, ekler: senBalon(['para', 'soru'], 198, 22, .95, 1.05) }),
          'menü panosu (büyük kahve ve plaka on altı); sağ üstte senin balonunda para ve soru işareti; büyük beyaz fincan ve tabakta ekmek tezgâhta') },
        { tur: 'gor', ses: [kaf('Sixteen.')], S: sahne(h1('ileri', 'mutlu', { kucuk: 'yan', buyuk: true, ekmekVar: true, halka: 0, ekler: [ok(92, 70, 150, 68)] }),
          'çalışan panoyu gösteriyor (ok); plaka on altı halkalı') },
        { tur: 'gor', ses: [sen('Thank you.')], S: sahne([...kafeci('yukari'), ...sallar(60, 54), ...menu(162, 52, MENU1), ...fincan(96, 112, 'kahve', 1, { boy: 'kucuk', renk: 'sari' }), ...ekmek(138, 112, .72, { somun: false, dilim: 2 }), ...el(...SEN_EL), ...fincan(186, 140, 'kahve', .85, { boy: 'buyuk', buhar: true })],
          'senin avucunda büyük beyaz fincanda kahve, buharlı; çalışan el sallıyor; tezgâhta küçük sarı fincan ve tabakta ekmek') },
      ],
      sorular: [
        // Soru 1 (kare 3, boy): tezgâhta önüne konan. Büyük kahve siparişin; iki küçük kahve sayı tuzağı. Hepsi kahve, sarı fincan.
        { tur: 'sec', ses: [kaf('Here.')], dogruSes: [kaf('Here.')], dogru: 2,
          secenek: [tezgahFincanS('bk'), tezgahFincanS('ikk'), tezgahFincanS('kk')], birimler: ['en:s:here', 'en:s:coffee'] },
        // Soru 2 (kare 6, sayı): panodaki fiyat. Doğru en küçük değer, A. Üç şık da sahnenin 13 ve 15'inin üstünde.
        { tur: 'sec', ses: [sen('How much is it?')], dogruSes: [sen('How much is it?')], dogru: 0,
          secenek: [menuS(16), menuS(18), menuS(17)], birimler: ['en:k:how-much', 'en:y:sayilar-13-19'] },
        // Soru 3 (kare 5, nesne; tur 2–3): büyük kahvenin yanındaki ikram. Su ve çay kafede eşit inandırıcı tuzaklar; ekmeği hikâye verir.
        { tur: 'sec', ses: [kaf('A big coffee. It is hot.')], dogruSes: [kaf('A big coffee. It is hot.')], dogru: 1,
          secenek: [ekstraS('su'), ekstraS('ekmek'), ekstraS('cay')], birimler: ['en:s:big', 'en:s:coffee', 'en:s:hot'] },
      ] },
    // 2 · Anna ile kafede: kahven çok sıcak, Anna su getirir. Anna'nın çayı, dört dilim, büyük su bardağı.
    { id: 'sicak', ad: 'It is hot',
      sayfalar: [
        { tur: 'gor', ses: [kom('Hello.')], S: sahne(h2Masa({ tabak: null }),
          'kafe masası; Anna (omuza inen siyah saç, turuncu gövde) masanın arkasında gülüyor, önünde beyaz fincanda çay; sağda senin beyaz fincanında kahve, buharlı; senin elin') },
        { tur: 'gor', ses: [kom('Bread?')], S: sahne(h2Masa({ kol: 'ileri', tabak: 'el' }),
          'Anna elindeki tabağı sana uzatıyor: tabakta dört dilim ekmek (somun yok); çayı masada') },
        { tur: 'gor', ses: [sen('Yes, please.')], S: sahne(h2Masa({ ekler: senBalon(['evet'], 168, 40, 1.3) }),
          'tabak masanın ortasında (dört dilim); senin balonunda yeşil onay') },
        { tur: 'gor', ses: [sen('It is hot.')], S: sahne([...fincan(104, 150, 'kahve', 2, { buhar: true }), ...el(206, 150), ...yanik(206, 150)],
          'yakın çekim: senin kahvenden yoğun buhar; elin fincandan geri çekilmiş, parmak uçlarında kırmızı ağrı zikzakları') },
        { tur: 'gor', ses: [kom('Water?')], S: sahne(h2Masa({ ekler: onunBalon(['su', 'soru'], 128, 30, 1.35) }),
          "Anna'nın balonunda su bardağı ve soru işareti") },
        { tur: 'gor', ses: [sen('Yes. I want water.')], S: sahne(h2Masa({ ekler: senBalon(['su'], 168, 40, 1.4) }),
          'senin balonunda su bardağı') },
        { tur: 'gor', ses: [kom('Can I have water, please?')], S: sahne([...kafeci('asagi'), ...anna(178, 166, 2.2)],
          'tezgâh: kafe çalışanı gülüyor (balonu yok); Anna tezgâhın önünde, sağda') },
        { tur: 'gor', ses: [kom('Here.')], S: sahne(h2Masa({ su: true }),
          "masa: senin önünde ağzına kadar dolu büyük su bardağı; yanında kahven; tabakta dört dilim ve Anna'nın çayı masada; Anna gülüyor") },
        { tur: 'gor', ses: [sen('Thank you.')], S: sahne([...anna(60, 150, 2.4), ...masa(), ...fincan(102, 114, 'cay', 1.1), ...ekmek(150, 113, .72, { somun: false, dilim: 4 }),
          ...fincan(214, 114, 'kahve', 1.1, { buhar: true }), ...el(...SEN_EL), ...bardak(185, 140, .9, { boy: 'buyuk' })],
          'senin avucunda büyük su bardağı; Anna gülüyor') },
      ],
      sorular: [
        // Soru 1 (kare 1, nesne): Anna'nın içeceği. Kahve senin içeceğin ve pratikte Anna "I like coffee." der; su sonra gelir (tuzaklar).
        { tur: 'sec', ses: [kom('Hello.')], dogruSes: [kom('Hello.')], dogru: 1,
          secenek: [annaIcecekS('kahve'), annaIcecekS('cay'), annaIcecekS('su')], birimler: ['en:s:hello'] },
        // Soru 2 (kare 2, sayı): tabaktaki dilim sayısı. Doğru en büyük değer, C. 2 sahnenin ve pratiğin tabağı (tuzak).
        { tur: 'sec', ses: [kom('Bread?')], dogruSes: [kom('Bread?')], dogru: 2,
          secenek: [annaTabakS(3), annaTabakS(2), annaTabakS(4)], birimler: ['en:s:bread'] },
        // Soru 3 (kare 8, nesne ve boy; tur 3): Anna'nın getirdiği. Şıklar ayrı özellikli; doğru büyük dolu su bardağı (sahne ve pratikte bardaklar normal boy).
        { tur: 'sec', ses: [kom('Here.')], dogruSes: [kom('Here.')], dogru: 0,
          secenek: [senSuS('b'), senSuS('f'), senSuS('e')], birimler: ['en:s:here', 'en:s:water'] },
      ] },
  ],
};
