// Filiz durağı 9: Şehir (Dalga 1 Görev 10, 24 Kasım 2026). Taslak: taslak/durak-taslaklari.md §18 (28 sahne sayfası, 3 yoklama
// sorusu, 5 oyun dizisi ve 37 etkileşim, iki hikâyecik).
// Sokak, otobüs, taksi, tren, istasyon, dükkân, banka; 20 ve onluklar (hat ve fiyat); there is / there are; in, on, next to, near; go.
// Kahraman "sen"sin (adın Deniz) ve çizilmezsin: sağ alttaki el, avucundaki nesne ve balonun. Türkçe yok. Bütün roller iDil sesiyle
// konuşur: durak kadını 'eczaci', taksi şoförü 'pazarci' (kontrolcü kararı; yeni rol yok, kişiler çizimle ayrışır), arkadaşın 'is', Anna
// 'memur'. Bir hikâyede iki konuşan aynı rolü paylaşmaz.
// Yeni birimler (16): street, bus, taxi, train, station, shop, bank, twenty, onluklar, there-is, there-are, in, on, next-to, near, go.
// Geri dönenler: please, thank you, goodbye, hello, here, where, my, your, bag, key, box, bed, ticket, man, woman, two, three, 11-19
// (thirteen), I need, how much, pharmacy, bread.
// Yer uzlaşımı (tek anlam): in = camdan içeride görünür; on = üst yüzeyde; next to = aynı zeminde değer (ortak duvar); near = arada
// yarım bina boşluk ve tek lamba; uzak (birim değil, çeldirici) = arada bina ya da iki lamba. Near sorusunun şıklarında bitişik, içinde ya
// da üstünde duran hâl yok; next to ile near aynı soruda aday değil; otobüs ve trenle in/on cümlesi yok ("on the bus" deyimi).
// Sızıntı önlemi: sahne ve pratikte otobüs 50 ve fiyat 40 yok (yalnız sahne 12'nin toplu sayımında), taksi tavanında çanta yok (yalnız
// kutu), durak kadını eli boş, Anna otobüsle görünmez, banka ile istasyon hiçbir resimde yan yana ya da yakın değil.
// Sec seçenekleri oynatıcıda boy 120 penceresinde çizilir; ana öğeler y ≤ 112.
import { anahtar, araba, balon, bankaCephe, canta, dukkan, ekmek, el, fincan, figurSac, halka, isaret, istasyon, kapi, konusma, kutu, lamba,
  otobus, para, paraSira, plaka, salla, sokak, taksi, tren, yatak, bilet, SEN_EL } from '../parca.js';

const H = 180;
const sahne = (o, alt) => ({ boy: H, alt, o });
const anl = metin => ({ rol: 'anlatici', metin });
const sen = metin => ({ rol: 'sen', metin });
const ark = metin => ({ rol: 'is', metin });        // arkadaşın
const kom = metin => ({ rol: 'memur', metin });     // Anna
const yol = metin => ({ rol: 'eczaci', metin });    // durak kadını
const kad = metin => ({ rol: 'memur', metin });     // C kadını (yalnız Hikâye 1'de konuşur; tur 1)
const sof = metin => ({ rol: 'pazarci', metin });   // taksi şoförü
const r2 = v => +v.toFixed(2);

const SAYI_AD = { 2: 'iki', 3: 'üç', 7: 'yedi', 8: 'sekiz', 9: 'dokuz', 12: 'on iki', 13: 'on üç', 14: 'on dört', 15: 'on beş', 17: 'on yedi', 18: 'on sekiz',
  19: 'on dokuz', 20: 'yirmi', 30: 'otuz', 40: 'kırk', 50: 'elli', 60: 'altmış', 70: 'yetmiş', 80: 'seksen', 90: 'doksan' };

// ---- Kişiler (İnsanlar'daki uzlaşım: kadın omuza inen saç ya da topuz, erkek kısa saç ve sakal; renk cinsiyete bağlı değil) ----
const fig = (x, y, s, cins, sac, govde, kol = 'asagi', yuz = 'mutlu', ek = {}) => [
  { t: 'k', x, y, s, kol, yuz, f: govde },
  ...figurSac(x, y, s, ek.tur || (cins === 'k' ? 'uzun' : 'kisa'), sac, { sakal: cins === 'e', gozluk: ek.gozluk }),
];
const arkadas = (x, y, s, kol, yuz) => fig(x, y, s, 'e', 'kahve', 'kahve', kol, yuz, { gozluk: true });   // gözlük, kahverengi gövde
const anna = (x, y, s, kol, yuz) => fig(x, y, s, 'k', 'siyah', 'turuncu', kol, yuz);
const durakKadini = (x, y, s, kol, yuz) => fig(x, y, s, 'k', 'gri', 'su', kol, yuz, { tur: 'topuz' });   // gri topuz, mavi gövde
const sofor = (x, y, s, kol, yuz) => fig(x, y, s, 'e', 'siyah', 'yesil', kol, yuz);                       // kısa siyah saç, sakal, yeşil
const kadinC = (x, y, s, kol, yuz) => fig(x, y, s, 'k', 'sari', '#C9A6FF', kol, yuz);                     // sarı uzun saç, mor gövde
const elim = () => el(...SEN_EL);
const sallar = (x, y) => [...salla(x + 18, y, 1), ...salla(x - 18, y, -1)];

// Her yöne ok (parça ok() yalnız sağa ve sağ alta doğru çizilir): kesik eğri ve ucun yönüne dönen ok başı.
const okY = (x1, y1, x2, y2) => {
  const cx = (x1 + x2) / 2, cy = Math.min(y1, y2) - 14, a = Math.atan2(y2 - cy, x2 - cx), L = 7, b = .5;
  const u = d => `${r2(x2 - L * Math.cos(a + d))} ${r2(y2 - L * Math.sin(a + d))}`;
  return [{ t: 'l', d: `M${x1} ${y1} Q${r2(cx)} ${r2(cy)} ${x2} ${y2}`, w: 2, k: 'vurgu', kesik: true },
    { t: 'l', d: `M${u(-b)} L${x2} ${y2} L${u(b)}`, w: 2, k: 'vurgu' }];
};
// Soru işareti (balon içi).
const soruIsareti = (x, y, s = 1) => {
  const n = (dx, dy) => `${r2(x + dx * s)} ${r2(y + dy * s)}`;
  return [{ t: 'l', d: `M${n(-5, -6)} Q${n(-5, -11)} ${n(0, -11)} Q${n(6, -11)} ${n(6, -6)} Q${n(6, -2)} ${n(0, 0)} L${n(0, 4)}`, w: r2(2.6 * s), k: 'vurgu' },
    { t: 'c', x, y: r2(y + 9.5 * s), r: r2(2 * s), f: 'vurgu' }];
};
// Otobüs durağı direği: (x, y) dibi; üstte yuvarlak mavi tabela ve içinde küçük beyaz otobüs, altında hat plakaları.
const durakDiregi = (x, y, hatlar = [], s = 1) => [
  { t: 'r', x: r2(x - 1.5 * s), y: r2(y - 78 * s), w: r2(3 * s), h: r2(78 * s), rx: 1, f: '#7C8290' },
  { t: 'c', x, y: r2(y - 86 * s), r: r2(10 * s), f: 'su' },
  { t: 'r', x: r2(x - 6 * s), y: r2(y - 91 * s), w: r2(12 * s), h: r2(7 * s), rx: r2(1.5 * s), f: 'kar' },
  { t: 'c', x: r2(x - 3 * s), y: r2(y - 83.5 * s), r: r2(1.2 * s), f: '#3A3540' }, { t: 'c', x: r2(x + 3 * s), y: r2(y - 83.5 * s), r: r2(1.2 * s), f: '#3A3540' },
  ...hatlar.flatMap((n, i) => plaka(x, r2(y - 64 * s + i * 14 * s), String(n), r2(.34 * s))),
];
// Eczane cephesi (Sağlık'taki çizimin aynısı; yeşil haçlı tabela, vitrin, kapı): (x0, y0) sol üst, s=1'de 200x130.
const eczane = (x0, y0, s = 1) => {
  const X = v => r2(x0 + v * s), Y = v => r2(y0 + v * s), h = v => r2(v * s);
  return [
    { t: 'r', x: X(0), y: Y(0), w: h(200), h: h(124), rx: h(3), f: 'bulut' },
    { t: 'r', x: X(86), y: Y(8), w: h(28), h: h(28), rx: h(5), f: 'yesil' },
    { t: 'l', d: `M${X(100)} ${Y(13)} L${X(100)} ${Y(31)} M${X(91)} ${Y(22)} L${X(109)} ${Y(22)}`, w: h(2.6), k: 'beyaz' },
    { t: 'r', x: X(12), y: Y(48), w: h(74), h: h(56), rx: h(2), f: 'buz' },
    { t: 'l', d: `M${X(49)} ${Y(48)} L${X(49)} ${Y(104)}`, w: h(1.4) },
    { t: 'r', x: X(126), y: Y(42), w: h(44), h: h(82), rx: h(2), f: 'iz' },
    { t: 'r', x: X(130), y: Y(46), w: h(36), h: h(78), rx: h(1), f: 'agac' },
    { t: 'c', x: X(160), y: Y(86), r: h(2.6), f: 'sari' },
    { t: 'r', x: X(-6), y: Y(124), w: h(212), h: h(6), rx: h(2), f: 'tas' },
  ];
};

// ---- Binalar: yarım genişlik (s=1) ve çizim; dizi { t, x } ile tek çerçeve ----
const YARIM = { dukkan: 35, banka: 40, istasyon: 55, eczane: 48 };
const BINA = { dukkan: (x, y, s, ic) => dukkan(x, y, s, ic), banka: (x, y, s) => bankaCephe(x, y, s), istasyon: (x, y, s) => istasyon(x, y, s),
  eczane: (x, y, s) => eczane(r2(x - 48 * s), r2(y - 62.4 * s), r2(.48 * s)) };
const BINA_AD = { dukkan: 'dükkân', banka: 'banka', istasyon: 'istasyon', eczane: 'eczane' };
const bina = (t, x, y, s, ic) => BINA[t](r2(x), y, s, ic);
// Bitişik çift: a'nın sağ kenarına b değer (ortak duvar); a'nın ortası x.
const bitisik = (a, b, x, y, s) => [...bina(a, x, y, s), ...bina(b, x + (YARIM[a] + YARIM[b]) * s, y, s)];

// ---- Balon içi simgeler: (x, y) simgenin ortası, k ölçek ----
const SIMGE = {
  banka: (x, y, k) => bankaCephe(x, r2(y + 9 * k), r2(.21 * k)),
  dukkan: (x, y, k) => dukkan(x, r2(y + 8 * k), r2(.24 * k)),
  istasyon: (x, y, k) => istasyon(x, r2(y + 8 * k), r2(.18 * k)),
  otobus: (x, y, k) => otobus(x, r2(y + 7 * k), r2(.19 * k)),
  taksi: (x, y, k) => taksi(x, r2(y + 6 * k), r2(.24 * k)),
  para: (x, y, k) => para(x, y, r2(1.1 * k)),
  soru: (x, y, k) => soruIsareti(x, r2(y - 1 * k), r2(.9 * k)),
  evet: (x, y, k) => isaret(x, y, 'evet', r2(.8 * k)),
  hayir: (x, y, k) => isaret(x, y, 'hayir', r2(.8 * k)),
  h15: (x, y, k) => plaka(x, y, '15', r2(.42 * k)),
};
const SIMGE_AD = { banka: 'küçük banka', dukkan: 'küçük dükkân', istasyon: 'küçük istasyon', otobus: 'küçük otobüs', taksi: 'küçük taksi',
  para: 'para (sikke)', soru: 'soru işareti', evet: 'yeşil onay', hayir: 'kırmızı çarpı', h15: 'plaka on beş' };
const icerik = (cx, cy, k, ogeler) => ogeler.flatMap((t, i) => SIMGE[t](r2(cx + (i - (ogeler.length - 1) / 2) * 26 * k), cy, k));
const icerikAd = ogeler => ogeler.map(t => SIMGE_AD[t]).join(', ');
const senBalon = (ogeler, x = 162, y = 40, s = 1.55, k = ogeler.length > 2 ? 1.1 : 1.4) => balon(x, y, icerik(x, r2(y - 5 * s), k, ogeler), s);
const onunBalon = (ogeler, x = 150, y = 34, s = 1.45, k = ogeler.length > 2 ? 1.05 : 1.35) => konusma(x, y, icerik(x, y, k, ogeler), s);

// ---- Seçenek resimleri (boy 120; öğeler y ≤ 112) ----
const kaldirim = () => ({ t: 'r', x: 0, y: 104, w: 240, h: 8, rx: 0, f: '#E6DFD3' });
const sokakS = () => sahne(sokak(62, { alt: 112, lamba: [120] }), 'boş sokak: kaldırım, lamba, asfalt ve kesik şerit');
const otobusS = (hat = null) => sahne(otobus(120, 104, 1.05, { hat }), hat === null ? 'otobüs (hat tabelası boş)' : `otobüs; hat tabelasında ${SAYI_AD[hat]}`);
const taksiS = () => sahne(taksi(120, 104, 1.3), 'sarı taksi (tavanda beyaz tabela, gövdede dama şeridi)');
const arabaS = () => sahne(araba(86, 76, 'red'), 'kırmızı araba (tabelasız, damasız)');
const trenS = () => sahne(tren(120, 104, .75, { ray: 120 }), 'rayda iki vagonlu tren');
const dukkanS = () => sahne(dukkan(120, 106, 1.25), 'dükkân cephesi: çizgili tente, vitrinde iki gömlek, cam kapı');
const bankaS = () => sahne(bankaCephe(120, 106, 1.15), 'banka cephesi: alınlıkta sikke, dört sütun, basamaklar');
const istasyonS = () => sahne(istasyon(120, 106, 1.05), 'istasyon cephesi: kemerli cam giriş, tren simgeli tabela');
const eczaneS = () => sahne(eczane(54, 10, .66), 'eczane cephesi: yeşil haçlı tabela, vitrin, kapı');
const anahtarS = () => sahne(anahtar(124, 60, 'sari', 2), 'sarı anahtar');
// Hat ya da fiyat: otobüsün ön üstündeki tabela büyük (plaka); yalnız sayı değişir.
const hatS = n => sahne(otobus(84, 112, 1.35, { hat: n }), `otobüs; hat tabelasında ${SAYI_AD[n]}`);
const plakaS = n => sahne(plaka(120, 60, String(n), 1.6), `plaka ${SAYI_AD[n]}`);
// Taksi ve kutu (sahne 17–20, yoklama 2): kutunun yeri değişir. 'ic' arka camda, 'tavan' tavanda, 'yan' yerde arka tampona değiyor.
const KUTU_AD = { ic: 'kutu taksinin arka camından görünüyor (içinde)', tavan: 'kutu taksinin tavanında (üstünde)', yan: 'kutu yerde, taksinin arkasına değiyor (yanında)' };
const taksiKutu = (yer, x, y, s) => taksi(x, y, s, {
  icinde: yer === 'ic' ? kutu(r2(x - 11 * s), r2(y - 32 * s), 'kraft', r2(.27 * s)) : [],
  tavan: yer === 'tavan' ? kutu(r2(x - 7 * s), r2(y - 42 * s - 13 * s), 'kraft', r2(.33 * s)) : [] });
const taksiKutuS = yer => sahne([kaldirim(), ...taksiKutu(yer, 128, 104, 1.15), ...(yer === 'yan' ? kutu(r2(128 - 40 * 1.15 - 11), 93, 'kraft', .55) : [])],
  `yakın çekim taksi: ${KUTU_AD[yer]}`);
// Bina dizilişleri (s .55; y 104): dizi [[tur, x]], lambalar x dizisi.
const dizilis = (binalar, lambalar = [], ekler = [], s = .55) => [...sokak(100, { alt: 112, serit: false, lamba: lambalar }), ...binalar.flatMap(([t, x]) => bina(t, x, 104, s)), ...ekler];
// Çiftin ilk binasının ortası: sol kenar 8'den başlar.
const ciftX = (a, b) => { const s = .55, x1 = 8 + YARIM[a] * s; return [[a, r2(x1)], [b, r2(x1 + (YARIM[a] + YARIM[b]) * s)]]; };
const sagX = t => r2(232 - YARIM[t] * .55);
// Sahne 25 ve 26 (tur 2, kontrolcü kararı): "uzak" = arada en az bir bina ve açıkça geniş boşluk (iki lamba); near = tek lamba arayla,
// değmez. Üç şıkta da aynı üç bina ve aynı ölçek (.5); banka ile istasyon hiç bir arada değil.
// Sahne 25: dükkân, banka, eczane. 'uzak' dükkân, lamba, eczane, iki lamba ve geniş boşluk, banka; 'bitisik' eczane, lamba, dükkân ve ona
// bitişik banka; 'dukEcz' dükkân ve ona bitişik eczane, iki lamba ve geniş boşluk, banka.
const NEXT_AD = { uzak: 'solda dükkân; lamba; eczane; iki lamba ve geniş boşluk; sağda banka (banka ile dükkân arasında eczane ve geniş boşluk)',
  bitisik: 'solda eczane; lamba; dükkân ve ona bitişik banka (ortak duvar)',
  dukEcz: 'solda dükkân ve ona bitişik eczane; iki lamba ve geniş boşluk; sağda banka' };
const nextS = d => sahne(d === 'uzak' ? dizilis([['dukkan', 22], ['eczane', 92], ['banka', 212]], [56, 140, 165], [], .5)
  : d === 'bitisik' ? dizilis([['eczane', 30], ['dukkan', 116], ['banka', 153.5]], [76], [], .5)
    : dizilis([['dukkan', 22], ['eczane', 63.5], ['banka', 212]], [130, 160], [], .5), NEXT_AD[d]);
// Sahne 26: istasyon, dükkân, eczane. 'yakin' istasyon, tek lamba, dükkân (değmiyor), iki lamba, eczane; 'uzak' dükkân, lamba, eczane, iki
// lamba ve geniş boşluk, istasyon; 'eczYakin' istasyon, iki lamba ve geniş boşluk, eczane, tek lamba, dükkân (dükkân eczaneye yakın,
// istasyondan uzak).
const NEAR_AD = { yakin: 'solda istasyon; tek lamba ve boşluk arayla dükkân (değmiyor); iki lamba arayla sağda eczane',
  uzak: 'solda dükkân; lamba; eczane; iki lamba ve geniş boşluk; sağda istasyon (dükkân ile istasyon arasında eczane ve geniş boşluk)',
  eczYakin: 'solda istasyon; iki lamba ve geniş boşluk; eczane; tek lamba arayla sağda dükkân (dükkân ile istasyon arasında eczane ve geniş boşluk)' };
const nearS = d => sahne(d === 'yakin' ? dizilis([['istasyon', 30], ['dukkan', 112], ['eczane', 214]], [76, 160, 180], [], .5)
  : d === 'uzak' ? dizilis([['dukkan', 22], ['eczane', 92], ['istasyon', 212]], [56, 140, 168], [], .5)
    : dizilis([['istasyon', 28], ['eczane', 150], ['dukkan', 222]], [80, 105, 190], [], .5), NEAR_AD[d]);
// Senin elinden kesik ok bir binaya (üç bina her şıkta aynı yerde).
const GIT_X = { banka: 40, dukkan: 120, istasyon: 200 };
const gitS = hedef => sahne([...dizilis([['banka', 40], ['dukkan', 120], ['istasyon', 200]]), ...okY(170, 112, GIT_X[hedef], 84)],
  `solda banka, ortada dükkân, sağda istasyon; senden ${BINA_AD[hedef]}ya giden kesik ok`.replace('dükkânya', 'dükkâna').replace('istasyonya', 'istasyona'));
// Boşluk 8: dükkâna bitişik bina.
const dukYanS = t => sahne([...sokak(100, { alt: 112, serit: false }), ...bina('dukkan', 76, 104, .85), ...bina(t, 76 + (35 + YARIM[t]) * .85, 104, .85)], `dükkân ve ona bitişik ${BINA_AD[t]} (ortak duvar)`);
// Boşluk 5 (tur 1): B adamı ve dükkân; dükkânın kapısı her şıkta açık (koyu iç). 'ic' adam açık kapının içinde, 'yan' kaldırımda duvara
// değiyor, 'yakin' kaldırımda lamba arayla.
const ADAM_AD = { ic: 'dükkânın kapısı açık; B adamı açık kapıdan içeride görünüyor', yan: 'dükkânın kapısı açık, içi boş; B adamı kaldırımda, dükkânın duvarına değiyor',
  yakin: 'dükkânın kapısı açık, içi boş; B adamı kaldırımda, dükkâna yakın (arada lamba)' };
const acikKapi = (x, y, s) => [{ t: 'r', x: r2(x + 8 * s), y: r2(y - 40 * s), w: r2(20 * s), h: r2(40 * s), rx: r2(1.5 * s), f: '#4B4B5A' }];
const kapiKanadi = (x, y, s) => [{ t: 'p', d: `M${r2(x + 28 * s)} ${r2(y - 40 * s)} L${r2(x + 34 * s)} ${r2(y - 43 * s)} L${r2(x + 34 * s)} ${r2(y + 2 * s)} L${r2(x + 28 * s)} ${r2(y)} Z`, f: 'buz' }];
const adamDukkanS = yer => sahne([...sokak(100, { alt: 112, serit: false, lamba: yer === 'yakin' ? [182] : [] }),
  ...dukkan(96, 104, 1.25), ...acikKapi(96, 104, 1.25), ...(yer === 'ic' ? sofor(r2(96 + 18 * 1.25), 103, .95) : []), ...kapiKanadi(96, 104, 1.25),
  ...(yer === 'yan' ? sofor(152, 108, 1.15) : yer === 'yakin' ? sofor(212, 108, 1.15) : [])], ADAM_AD[yer]);
// Hızlı tur: C kadını ve araç. 'ic' taksinin arka camında, 'taksiYan' taksiye değiyor, 'otobusYan' otobüse değiyor.
const KADIN_AD = { ic: 'C kadını (sarı uzun saç) taksinin arka camında', taksiYan: 'C kadını yerde, taksinin arkasına değiyor', otobusYan: 'C kadını yerde, otobüsün arkasına değiyor' };
const kadinAracS = yer => sahne([kaldirim(), ...(yer === 'otobusYan' ? otobus(140, 108, 1.0) : taksi(140, 108, 1.4, {
  icinde: yer === 'ic' ? [...kadinC(r2(140 - 10 * 1.4), r2(108 - 20 * 1.4), .62)] : [] })),
  ...(yer === 'taksiYan' ? kadinC(70, 108, 1.2) : yer === 'otobusYan' ? kadinC(72, 108, 1.2) : [])], KADIN_AD[yer]);
// Hızlı tur: kutu ve yatak. 'ust' yatağın üstünde, 'yan' yatağın yanında yerde, 'kapi' kapının yanında yerde.
const KUTU_YATAK_AD = { ust: 'kraft kutu yatağın üstünde', yan: 'kraft kutu yerde, yatağın yanında', kapi: 'kraft kutu yerde, kapının yanında; yatak uzakta' };
const kutuYatakS = yer => sahne([{ t: 'r', x: 0, y: 96, w: 240, h: 16, rx: 0, f: 'tas' }, ...kapi(196, 56), ...yatak(84, 72),
  ...(yer === 'ust' ? kutu(98, 50, 'kraft', .45) : yer === 'yan' ? kutu(146, 92, 'kraft', .45) : kutu(158, 92, 'kraft', .4))], KUTU_YATAK_AD[yer]);
// Hızlı tur "Go.": C kadını el sallıyor, içiyor ya da bankaya yürüyor (ok).
const GO_AD = { salla: 'C kadını iki elini sallıyor', ic: 'C kadını fincanı eğip ağzına götürmüş (içiyor)', yuru: 'C kadını kaldırımda; ayağından sağdaki bankaya kesik ok (gidiyor)' };
const goS = e => sahne([...sokak(100, { alt: 112, serit: false }), ...bankaCephe(196, 104, .55),
  ...(e === 'salla' ? [...kadinC(80, 108, 1.7, 'yukari'), ...sallar(80, 50)] : e === 'ic' ? [...kadinC(80, 108, 1.7, 'bas'), ...fincan(98, 66, 'kahve', .75, { egik: -60 })]
    : [...kadinC(60, 108, 1.7), ...okY(78, 96, 168, 98)])], GO_AD[e]);
// Hızlı tur: üç otobüs / üç taksi / iki otobüs.
const aracSiraS = (t, n) => sahne(Array.from({ length: n }, (_, i) => { const x = r2(120 + (i - (n - 1) / 2) * (n === 3 ? 76 : 100));
  return t === 'otobus' ? otobus(x, 100, .7) : taksi(x, 100, .85); }).flat(), n === 1 ? `tek ${t === 'otobus' ? 'otobüs' : 'taksi'}` : `${n === 3 ? 'üç' : 'iki'} ${t === 'otobus' ? 'otobüs' : 'taksi'} yan yana`);
const otobusSiraS = n => aracSiraS('otobus', n);
// Hızlı tur: taksi dükkâna mı bankaya mı yakın (tur 1, kontrolcü kararı: near = tek lamba arayla boşluk, değmez; uzak = arada bina ya
// da iki lamba ve geniş boşluk). 'dukkan': dükkân, lamba, taksi; iki lamba; banka. 'bankaSag': dükkân; iki lamba; banka, lamba, taksi.
// 'bankaSol': taksi, lamba, banka; iki lamba; dükkân. Taksi hiçbir binaya değmez; yalnız 'dukkan'da dükkâna yakın.
// Tur 2: ölçek .5; uzak çeldiricilerde taksi ile dükkân arasında banka ve iki lamba (geniş boşluk).
const TY = {
  dukkan: [[['dukkan', 22], ['banka', 214]], [54, 150, 170], 88],
  bankaSag: [[['dukkan', 22], ['banka', 136]], [66, 94, 182], 214],
  bankaSol: [[['banka', 96], ['dukkan', 220]], [60, 150, 172], 26],
};
const TY_AD = { dukkan: 'solda dükkân; tek lamba arayla yolda taksi (dükkâna değmiyor); iki lamba ve geniş boşluk arayla sağda banka',
  bankaSag: 'solda dükkân; iki lamba ve geniş boşluk arayla banka; tek lamba arayla sağda yolda taksi',
  bankaSol: 'solda yolda taksi; tek lamba arayla banka; iki lamba ve geniş boşluk arayla sağda dükkân' };
const taksiYakinS = t => sahne([...dizilis(TY[t][0], TY[t][1], [], .5), ...taksi(TY[t][2], 111, .5)], TY_AD[t]);

// ---- Sahne kareleri (y 118 kaldırım; binalar 122'de, araçlar 165'te) ----
const SK = (o = [], lambalar = []) => [...sokak(118, { lamba: lambalar }), ...o];
const peron = () => [{ t: 'r', x: 0, y: 112, w: 240, h: 18, rx: 0, f: '#D9CFC0' }, { t: 'r', x: 0, y: 128, w: 240, h: 4, rx: 0, f: 'kar' },
  { t: 'r', x: 0, y: 132, w: 240, h: 48, rx: 0, f: '#CFC8BC' }];
const taksiKutuSahne = yer => [...SK(), ...taksiKutu(yer, 110, 165, 1.5), ...(yer === 'yan' ? kutu(r2(110 - 60 - 13), 152, 'kraft', .65) : [])];

// ---- Hikâye 1 ----
// Durak B'nin direği (15 ve 60), kadının kucağında tabaksız somun.
const kadinEkmek = (x, y, s, kol = 'tasi', yuz = 'mutlu') => [...durakKadini(x, y, s, kol, yuz), ...ekmek(x, r2(y - 7 * s), r2(.6 * s), { tabak: false, dilim: 0 })];
const KUCAK_AD = { canta: 'kahverengi çanta', ekmek: 'somun ekmek', kutu: 'kraft kutu' };
const kucakS = t => sahne([...durakKadini(120, 112, 2.1, 'tasi'),
  ...(t === 'ekmek' ? ekmek(120, 97, 1.2, { tabak: false, dilim: 0 }) : t === 'kutu' ? kutu(120, 84, 'kraft', .55) : canta(120, 80, 'kahve', .55))],
  `yakın çekim: durak kadını (gri topuz, mavi gövde) kucağında ${KUCAK_AD[t]}`);
// Tur 1 (kontrolcü kararı): durak A'da kadın "Bus fifteen." der; direkte 15 ve 60 var, 50 yok. Gelen otobüs 50; sen yanlış duyup binersin.
// Durak B'de C kadını yolu gösterir.
const h1DurakA = (kadin = [], ekler = []) => [...SK(), ...durakDiregi(108, 124, [15, 60]), ...kadin, ...ekler, ...elim()];
const h1DurakB = (ekler = []) => [...SK(), ...dukkan(40, 122, 1.0), ...durakDiregi(92, 124), ...otobus(272, 165, 1.1, { hat: 50 }),
  ...kadinC(130, 126, 1.7), ...ekler, ...elim()];
// H1 S2: üç dizilişte çift solda bitişik, üçüncü bina sağda iki lamba arayla.
const H1_DIZ = { dukIst: ['dukkan', 'istasyon', 'banka'], bankDuk: ['banka', 'dukkan', 'istasyon'], bankIst: ['banka', 'istasyon', 'dukkan'] };
const H1_DIZ_AD = { dukIst: 'dükkân ve istasyon bitişik; sağda iki lamba arayla banka (uzak)', bankDuk: 'banka ve dükkân bitişik; sağda iki lamba arayla istasyon (uzak)',
  bankIst: 'banka ve istasyon bitişik; sağda iki lamba arayla dükkân (uzak)' };
const h1DizS = d => { const [a, b, c] = H1_DIZ[d]; return sahne(dizilis([...ciftX(a, b), [c, sagX(c)]], [158, 178]), `yakın çekim sokak: ${H1_DIZ_AD[d]}`); };

// ---- Hikâye 2 ----
// Anna'nın çantası: kahverengi canta. Taksinin tavanında (x - 6s, y - 42s'nin üstü).
const tavanCanta = (x, y, s) => canta(r2(x - 8 * s), r2(y - 46 * s - 20 * .3 * s), 'kahve', r2(.3 * s));
const h2Taksi = (x, y, s, ic = {}) => taksi(x, y, s, { ...ic, bagaj: true, tavan: ic.cantaYok ? [] : tavanCanta(x, y, s),
  icinde: ic.sofor ? sofor(r2(x + 10 * s), r2(y - 20 * s), r2(.45 * s)) : [] });
const CANTA_AD = { ic: 'çanta taksinin arka camından görünüyor (içinde)', yan: 'çanta yerde, taksinin arkasına değiyor (yanında)', tavan: 'çanta taksinin tavanında (üstünde)' };
const cantaTaksiS = yer => sahne([kaldirim(), ...taksi(132, 104, 1.15, { hiz: true, bagaj: true,
  icinde: yer === 'ic' ? canta(r2(132 - 12.6), r2(104 - 41), 'kahve', .27) : [], tavan: yer === 'tavan' ? tavanCanta(132, 104, 1.15) : [] }),
  ...(yer === 'yan' ? canta(r2(132 - 46 - 11), 86, 'kahve', .45) : [])], `yakın çekim, giden taksi (hız çizgileri): ${CANTA_AD[yer]}`);
const ARAC_AD = { otobus: 'otobüs (yandan; hat tabelasında otuz)', araba: 'kırmızı araba (tabelasız, damasız)', tren: 'rayda tek vagonlu tren' };
const annaAracS = t => sahne([kaldirim(), ...(t === 'otobus' ? otobus(170, 108, .8, { hat: 30 }) : t === 'araba' ? araba(140, 82, 'red') : tren(178, 108, .95, { vagon: 1, ray: 60 })),
  ...anna(58, 110, 1.7), ...canta(82, 92, 'kahve', .4)], `yakın çekim: Anna (siyah uzun saç, turuncu gövde) elinde kahverengi çantayla; arkasında ${ARAC_AD[t]}`);

export default {
  dil: 'en', id: 'sehir', no: 9, ad: 'Şehir',
  yoklama: [
    { tur: 'sec', ses: [anl('A shop.')], dogruSes: [anl('A shop.')], dogru: 2,
      secenek: [bankaS(), istasyonS(), dukkanS()], birimler: ['en:s:shop'] },
    { tur: 'sec', ses: [anl('The box is in the taxi.')], dogruSes: [anl('The box is in the taxi.')], dogru: 0,
      secenek: [taksiKutuS('ic'), taksiKutuS('yan'), taksiKutuS('tavan')], birimler: ['en:s:in', 'en:s:taxi'] },
    { tur: 'sec', ses: [anl('Seventy.')], dogruSes: [anl('Seventy.')], dogru: 1,
      secenek: [plakaS(17), plakaS(70), plakaS(7)], birimler: ['en:y:onluklar'] },
  ],
  sayfalar: [
    // 1-4: street, bus, taxi
    { tur: 'gor', ses: [anl('A street.')], S: sahne([...SK([], [60]), ...elim()], 'boş sokak: kaldırım, lamba, asfalt ve kesik şerit; senin elin'), yeni: 'en:s:street', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('A bus.')], S: sahne(SK(otobus(100, 165, 1.3)), 'aynı sokakta mavi otobüs (dört kare pencere, kapı; hat tabelası boş)'), yeni: 'en:s:bus', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('A taxi.')], S: sahne(SK(taksi(105, 165, 1.5)), 'otobüsün yerinde sarı taksi: tavanda beyaz tabela, gövdede dama şeridi'), yeni: 'en:s:taxi', degisen: 'nesne' },
    { tur: 'sec', ses: [anl('A street.')], dogruSes: [anl('A street.')], dogru: 0,
      secenek: [sokakS(), otobusS(), taksiS()], birimler: ['en:s:street'] },
    // 5-7: train, station
    { tur: 'gor', ses: [anl('A train.')], S: sahne([...peron(), ...tren(120, 160, 1.45, { ray: 120 })], 'peron kenarı ve ray; rayda iki vagonlu tren'), yeni: 'en:s:train', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('A station.')], S: sahne([...peron(), ...istasyon(120, 114, 1.2), ...tren(120, 160, 1.45, { ray: 120 })],
      'aynı tren; arkada istasyon binası (kemerli cam giriş, tren simgeli tabela)'), yeni: 'en:s:station', degisen: 'nesne' },
    { tur: 'sec', ses: [anl('A taxi.')], dogruSes: [anl('A taxi.')], dogru: 2,
      secenek: [otobusS(), arabaS(), taksiS()], birimler: ['en:s:taxi'] },
    // 8-10: shop, bank
    { tur: 'gor', ses: [anl('A shop.')], S: sahne(SK(dukkan(120, 122, 1.5)), 'sokakta dükkân: çizgili tente, vitrinde iki gömlek, cam kapı'), yeni: 'en:s:shop', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('A bank.')], S: sahne(SK(bankaCephe(120, 122, 1.4)), 'dükkânın yerinde banka: alınlıkta sikke, dört sütun, basamaklar'), yeni: 'en:s:bank', degisen: 'nesne' },
    { tur: 'sec', ses: [anl('A station.')], dogruSes: [anl('A station.')], dogru: 1,
      secenek: [bankaS(), istasyonS(), dukkanS()], birimler: ['en:s:station'] },
    // 11-13: twenty, onluklar
    { tur: 'gor', ses: [anl('Bus twenty.')], S: sahne(SK([...otobus(100, 165, 1.3, { hat: 20 }), halka(145.5, 89, 17)]), 'sokakta otobüs; hat tabelasında yirmi, halkalı'), yeni: 'en:s:twenty', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Thirty, forty, fifty, sixty, seventy, eighty, ninety.')],
      S: sahne([30, 40, 50, 60].flatMap((n, i) => plaka(36 + i * 56, 52, String(n), .9)).concat([70, 80, 90].flatMap((n, i) => plaka(64 + i * 56, 108, String(n), .9))),
        'boş zeminde yedi plaka iki sırada: otuz, kırk, elli, altmış; yetmiş, seksen, doksan'), yeni: 'en:y:onluklar', degisen: 'nesne' },
    { tur: 'sec', ses: [anl('Eighty.')], dogruSes: [anl('Eighty.')], dogru: 2,
      secenek: [plakaS(18), plakaS(8), plakaS(80)], birimler: ['en:y:onluklar'] },
    // 14-16: there is, there are
    { tur: 'gor', ses: [anl('There is a bus.')], S: sahne(SK(otobus(105, 165, 1.3)), 'sokakta tek otobüs (hat tabelası boş)'), yeni: 'en:k:there-is', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('There are two taxis.')], S: sahne(SK([...taksi(58, 165, 1.05), ...taksi(168, 165, 1.05)]), 'sokakta arka arkaya iki taksi'), yeni: 'en:k:there-are', degisen: 'nesne' },
    { tur: 'sec', ses: [anl('There are two buses.')], dogruSes: [anl('There are two buses.')], dogru: 1,
      secenek: [otobusSiraS(1), otobusSiraS(2), aracSiraS('taksi', 2)], birimler: ['en:k:there-are', 'en:s:bus'] },
    // 17-20: in, on, next to (kutu ve taksi; tek değişken kutunun yeri)
    { tur: 'gor', ses: [anl('The box is in the taxi.')], S: sahne(taksiKutuSahne('ic'), 'duran taksi; arka yan camından kraft kutu görünüyor'), yeni: 'en:s:in', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('The box is on the taxi.')], S: sahne(taksiKutuSahne('tavan'), 'aynı taksi; kutu tavanda, tabelanın yanında'), yeni: 'en:s:on', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('The box is next to the taxi.')], S: sahne(taksiKutuSahne('yan'), 'aynı taksi; kutu yerde, taksinin arkasına değiyor'), yeni: 'en:k:next-to', degisen: 'nesne' },
    { tur: 'sec', ses: [anl('The box is next to the taxi.')], dogruSes: [anl('The box is next to the taxi.')], dogru: 0,
      secenek: [taksiKutuS('yan'), taksiKutuS('ic'), taksiKutuS('tavan')], birimler: ['en:k:next-to', 'en:s:taxi'] },
    // 21-22: near, go
    { tur: 'gor', ses: [anl('The shop is near the station.')], S: sahne(SK([...istasyon(54, 122, .8), ...dukkan(166, 122, 1.0)], [114]),
      'sokak: solda istasyon; arada yarım bina boşluk ve tek lamba; sağda dükkân (yakın, değmiyor)'), yeni: 'en:s:near', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Go.')], S: sahne(SK([...dukkan(190, 122, 1.05), ...sofor(46, 126, 1.7), ...okY(64, 116, 176, 112)]),
      'kaldırımda B adamı (kısa siyah saç, sakal, yeşil gövde); ayağından sağdaki dükkânın kapısına kesik ok (gidiyor)'), yeni: 'en:s:go', degisen: 'eylem' },
    // 23-25: durakta yol sormak
    { tur: 'gor', ses: [sen('Where is the bank?')], S: sahne([...SK(), ...durakDiregi(64, 124), ...durakKadini(98, 126, 1.8), ...senBalon(['banka', 'soru'], 170, 40), ...elim()],
      'otobüs durağı direği; yanında durak kadını (gri topuz, mavi gövde) gülüyor, elleri boş; senin balonunda küçük banka ve soru işareti'), degisen: 'kisi' },
    { tur: 'gor', ses: [yol('The bank? It is next to the shop.')], S: sahne([...SK(), ...durakDiregi(22, 124, [], .85), ...durakKadini(46, 126, 1.4, 'ileri'),
      ...bitisik('dukkan', 'banka', 108, 122, .85), ...okY(62, 96, 172, 98), ...elim()],
      'geniş: solda durak ve kadın; sağda dükkân ve ona bitişik banka (ortak duvar); kadından bankaya kesik ok'), degisen: 'nesne' },
    { tur: 'sec', ses: [yol('The bank is next to the shop.')], dogruSes: [yol('The bank is next to the shop.')], dogru: 1,
      secenek: [nextS('uzak'), nextS('bitisik'), nextS('dukEcz')], birimler: ['en:k:next-to', 'en:s:bank', 'en:s:shop'] },
    // 26-27
    { tur: 'sec', ses: [anl('The shop is near the station.')], dogruSes: [anl('The shop is near the station.')], dogru: 0,
      secenek: [nearS('yakin'), nearS('uzak'), nearS('eczYakin')], birimler: ['en:s:near', 'en:s:shop', 'en:s:station'] },
    { tur: 'sec', ses: [anl('Bus twenty.')], dogruSes: [anl('Bus twenty.')], dogru: 2,
      secenek: [hatS(12), hatS(2), hatS(20)], birimler: ['en:s:twenty', 'en:s:bus'] },
    // Yazı perdesi
    { tur: 'yazi', birimler: ['en:s:street', 'en:s:bus', 'en:s:taxi', 'en:s:train', 'en:s:station', 'en:s:shop', 'en:s:bank', 'en:s:twenty',
      'en:y:onluklar', 'en:k:there-is', 'en:k:there-are', 'en:s:in', 'en:s:on', 'en:k:next-to', 'en:s:near', 'en:s:go'] },
  ],

  // ---- Pratik (taslak §18.4): 5 oyun dizisi = 5 tür, 37 etkileşim (eşleştir 2 tahta, boşluk 6, ne derdin 6, sırala 5, hızlı tur
  // 1 × 12 soru). Geri dönüş ≥ %30. Oynatıcı şıkları karıştırmaz: doğru şık sırası elle düzensiz.
  pratik: [
    // Oyun 1 · eşleştir: araçlar; yerler
    { tur: 'eslestir', ciftler: [
      { ses: [anl('A train.')], S: trenS(), birim: 'en:s:train' },
      { ses: [anl('A taxi.')], S: taksiS(), birim: 'en:s:taxi' },
      { ses: [anl('A bus.')], S: otobusS(), birim: 'en:s:bus' },
      { ses: [anl('A key.')], S: anahtarS(), birim: 'en:s:key' },
    ] },
    { tur: 'eslestir', ciftler: [
      { ses: [anl('A street.')], S: sokakS(), birim: 'en:s:street' },
      { ses: [anl('A shop.')], S: dukkanS(), birim: 'en:s:shop' },
      { ses: [anl('A bank.')], S: bankaS(), birim: 'en:s:bank' },
      { ses: [anl('A pharmacy.')], S: eczaneS(), birim: 'en:s:pharmacy' },
    ] },
    // Oyun 2 · boşluk (6; doğrular B A C B C A)
    { tur: 'bosluk', ses: [anl('There is a train.')], metin: 'There is a ___.',
      secenek: [otobusS(), trenS(), taksiS()], dogru: 1, birimler: ['en:k:there-is', 'en:s:train'] },
    { tur: 'bosluk', ses: [sen('I need a taxi.')], metin: 'I need a ___.',
      secenek: [taksiS(), arabaS(), otobusS()], dogru: 0, birimler: ['en:k:i-need', 'en:s:taxi'] },
    { tur: 'bosluk', ses: [ark('The man is in the shop.')], metin: 'The man is ___ the shop.',
      secenek: [adamDukkanS('yan'), adamDukkanS('yakin'), adamDukkanS('ic')], dogru: 2, birimler: ['en:s:in', 'en:s:man', 'en:s:shop'] },
    { tur: 'bosluk', ses: [anl('Bus thirty.')], metin: 'Bus ___.',
      secenek: [hatS(13), hatS(30), hatS(3)], dogru: 1, birimler: ['en:y:onluklar', 'en:s:bus'] },
    { tur: 'bosluk', ses: [kom('Go to the station, please.')], metin: 'Go to the ___, please.',
      secenek: [gitS('banka'), gitS('dukkan'), gitS('istasyon')], dogru: 2, birimler: ['en:s:go', 'en:s:station', 'en:s:please'] },
    { tur: 'bosluk', ses: [yol('The shop is next to the bank.')], metin: 'The shop is next to the ___.',
      secenek: [dukYanS('banka'), dukYanS('istasyon'), dukYanS('eczane')], dogru: 0, birimler: ['en:k:next-to', 'en:s:shop', 'en:s:bank'] },
    // Oyun 3 · ne derdin? (6; senin balonun yok; karşıdakinin yüzü hep gülen; neyin sorulduğu balonda açık; doğrular A C C B A B)
    { tur: 'nederdin', S: sahne([...SK(), ...taksi(96, 160, 1.6, { icinde: sofor(r2(96 + 10 * 1.6), r2(160 - 20 * 1.6), r2(.45 * 1.6)) }),
      ...onunBalon(['banka', 'dukkan', 'istasyon', 'soru'], 150, 34, 1.5, .95), ...elim()],
      'taksi; ön camda şoför (B adamı) dönmüş; balonunda küçük banka, dükkân, istasyon ve soru işareti ("nereye?"); senin elin arka kapıda'),
      secenekSes: [[sen('The station, please.')], [sen('Where is the station?')], [sen('Thank you. Goodbye.')]], dogru: 0, birimler: ['en:s:station', 'en:s:please'] },
    { tur: 'nederdin', S: sahne([...SK(), ...bitisik('dukkan', 'banka', 132, 122, .8), ...durakDiregi(20, 124, [], .8), ...durakKadini(52, 126, 1.6),
      ...onunBalon(['banka', 'soru'], 118, 30, 1.35)],
      'durakta durak kadını (gri topuz, mavi gövde); balonunda küçük banka ve soru işareti; arkada dükkân ve ona bitişik banka'),
      secenekSes: [[sen('It is near the station.')], [sen('It is in the shop.')], [sen('It is next to the shop.')]], dogru: 2, birimler: ['en:k:next-to', 'en:s:shop'] },
    { tur: 'nederdin', S: sahne([...SK(), ...durakDiregi(150, 124, [20]), ...arkadas(178, 126, 1.6), ...otobus(52, 165, 1.0, { hat: 20 }),
      ...onunBalon(['otobus', 'soru'], 160, 28, 1.3)],
      'durakta arkadaşın (gözlük); balonunda küçük otobüs ve soru işareti; direkte tek plaka yirmi; soldan hat tabelası yirmi olan otobüs geliyor'),
      secenekSes: [[sen('Bus thirty.')], [sen('Taxi! Taxi!')], [sen('Bus twenty.')]], dogru: 2, birimler: ['en:s:bus', 'en:s:twenty'] },
    { tur: 'nederdin', S: sahne([...SK(), ...dukkan(56, 122, 1.25), ...anna(132, 128, 1.8), ...onunBalon(['dukkan', 'soru'], 190, 34, 1.3), ...elim()],
      "kaldırımda Anna; balonunda küçük dükkân ve soru işareti; hemen arkanızda dükkân"),
      secenekSes: [[sen('Sorry. Where is the station?')], [sen('There is a shop here.')], [sen('Thank you.')]], dogru: 1, birimler: ['en:k:there-is', 'en:s:shop', 'en:s:here'] },
    { tur: 'nederdin', S: sahne([...SK([...istasyon(176, 122, .9)], [108]), ...arkadas(54, 128, 1.7), ...onunBalon(['istasyon', 'soru'], 110, 30, 1.35)],
      'kaldırımda arkadaşın; balonunda küçük istasyon ve soru işareti; sağda tek lamba arayla istasyon (yakın)'),
      secenekSes: [[sen('It is near here.')], [sen('The station, please.')], [sen('Goodbye.')]], dogru: 0, birimler: ['en:s:near', 'en:s:here'] },
    { tur: 'nederdin', S: sahne([...SK(), ...dukkan(90, 122, 1.5, { mal: false, vitrin: [...canta(r2(90 - 21), 84, 'kahve', .7), ...plaka(r2(90 - 5), 102, '', .4), ...soruIsareti(r2(90 - 5), 98, .55)] }),
      ...elim(), ...paraSira(3, 186, 150, .8)],
      'dükkânın vitrininde çanta ve yanında soru işaretli boş fiyat plakası; senin avucunda paralar'),
      secenekSes: [[sen('Here.')], [sen('How much is it?')], [sen('Where is the bank?')]], dogru: 1, birimler: ['en:k:how-much'] },
    // Oyun 4 · sırala (5): tek büyük harfli kart ve tek bitiş noktalamalı kart, tek sıra; ortada "I" ve özel ad yok.
    { tur: 'sirala', ses: [anl('There are two taxis.')], parcalar: ['There', 'are', 'two', 'taxis.'], birimler: ['en:k:there-are', 'en:s:taxi', 'en:s:two'] },
    { tur: 'sirala', ses: [sen('My bag is on the bed.')], parcalar: ['My', 'bag', 'is', 'on', 'the', 'bed.'], birimler: ['en:s:on', 'en:s:my', 'en:s:bag', 'en:s:bed'] },
    { tur: 'sirala', ses: [kom('Go to the station, please.')], parcalar: ['Go', 'to', 'the', 'station,', 'please.'], birimler: ['en:s:go', 'en:s:station', 'en:s:please'] },
    { tur: 'sirala', ses: [ark('The key is in the box.')], parcalar: ['The', 'key', 'is', 'in', 'the', 'box.'], birimler: ['en:s:in', 'en:s:key', 'en:s:box'] },
    { tur: 'sirala', ses: [anl('The shop is near the station.')], parcalar: ['The', 'shop', 'is', 'near', 'the', 'station.'], birimler: ['en:s:near', 'en:s:shop', 'en:s:station'] },
    // Oyun 5 · hızlı tur (60 sn, 12 soru); doğrular B C A C B A A C B C A B (A 4, B 4, C 4)
    { tur: 'hizli', sure: 60, sorular: [
      { tur: 'sec', ses: [anl('A street.')], dogruSes: [anl('A street.')], secenek: [dukkanS(), sokakS(), bankaS()], dogru: 1, birimler: ['en:s:street'] },
      { tur: 'sec', ses: [anl('Ninety.')], dogruSes: [anl('Ninety.')], secenek: [plakaS(19), plakaS(9), plakaS(90)], dogru: 2, birimler: ['en:y:onluklar'] },
      { tur: 'sec', ses: [anl('A station.')], dogruSes: [anl('A station.')], secenek: [istasyonS(), dukkanS(), eczaneS()], dogru: 0, birimler: ['en:s:station'] },
      { tur: 'sec', ses: [anl('There is a woman in the taxi.')], dogruSes: [anl('There is a woman in the taxi.')], secenek: [kadinAracS('taksiYan'), kadinAracS('otobusYan'), kadinAracS('ic')], dogru: 2, birimler: ['en:k:there-is', 'en:s:woman', 'en:s:in', 'en:s:taxi'] },
      { tur: 'sec', ses: [anl('Twenty.')], dogruSes: [anl('Twenty.')], secenek: [plakaS(12), plakaS(20), plakaS(2)], dogru: 1, birimler: ['en:s:twenty'] },
      { tur: 'sec', ses: [anl('A taxi.')], dogruSes: [anl('A taxi.')], secenek: [taksiS(), otobusS(), trenS()], dogru: 0, birimler: ['en:s:taxi'] },
      { tur: 'sec', ses: [anl('The box is on the bed.')], dogruSes: [anl('The box is on the bed.')], secenek: [kutuYatakS('ust'), kutuYatakS('yan'), kutuYatakS('kapi')], dogru: 0, birimler: ['en:s:on', 'en:s:box', 'en:s:bed'] },
      { tur: 'sec', ses: [anl('Go.')], dogruSes: [anl('Go.')], secenek: [goS('salla'), goS('ic'), goS('yuru')], dogru: 2, birimler: ['en:s:go'] },
      { tur: 'sec', ses: [anl('There are three buses.')], dogruSes: [anl('There are three buses.')], secenek: [aracSiraS('taksi', 3), otobusSiraS(3), otobusSiraS(2)], dogru: 1, birimler: ['en:k:there-are', 'en:s:bus', 'en:s:three'] },
      { tur: 'sec', ses: [anl('Thirteen.')], dogruSes: [anl('Thirteen.')], secenek: [plakaS(30), plakaS(3), plakaS(13)], dogru: 2, birimler: ['en:y:sayilar-13-19'] },
      { tur: 'sec', ses: [anl('A train.')], dogruSes: [anl('A train.')], secenek: [trenS(), otobusS(), taksiS()], dogru: 0, birimler: ['en:s:train'] },
      { tur: 'sec', ses: [anl('The taxi is near the shop.')], dogruSes: [anl('The taxi is near the shop.')], secenek: [taksiYakinS('bankaSag'), taksiYakinS('dukkan'), taksiYakinS('bankaSol')], dogru: 1, birimler: ['en:s:near', 'en:s:taxi', 'en:s:shop'] },
    ] },
  ],

  // ---- Hikâyecikler (taslak §18.5): yeni birim yok. Kök hikâyede bir kez geçen satırdır; şıklar o karenin ya da olgunun üç hâlidir
  // (yakın çekim); doğru şık hikâyede olan hâldir. Bir sorunun şıkları başka bir sorunun cevabını ya da tuzağını göstermez; bir hikâyede
  // iki soru aynı türden değil; renk sorusu yok. Doğrular H1 A C B, H2 C B A.
  hikayeler: [
    // 1 · Müfredat fikri: yanlış otobüse binilir, durakta biri yolu gösterir. Tur 1: durak A'da kadın "Bus fifteen." der (direkte 15 ve
    // 60); sen 50'ye binersin. Durak B'de C kadını istasyonu gösterir. Kadının kucağında somun ekmek, banka ile istasyon bitişik.
    { id: 'otobus', ad: 'The station',
      sayfalar: [
        { tur: 'gor', ses: [sen('Where is the station?')], S: sahne(h1DurakA(kadinEkmek(140, 126, 1.7), senBalon(['istasyon', 'soru'], 190, 34, 1.25)),
          'durak A: direkte plakalar on beş ve altmış; yanında durak kadını (gri topuz, mavi gövde), kucağında somun ekmek; senin balonunda küçük istasyon ve soru işareti') },
        { tur: 'gor', ses: [yol('Bus fifteen.')], S: sahne(h1DurakA(kadinEkmek(140, 126, 1.7), onunBalon(['otobus', 'h15'], 196, 30, 1.25)),
          'aynı kare; kadın gülüyor; balonunda küçük otobüs ve plaka on beş') },
        { tur: 'gor', ses: [sen('The station, please.')], S: sahne([...SK(), ...durakDiregi(22, 124, [15, 60], .85), ...kadinEkmek(50, 126, 1.35),
          ...otobus(140, 165, 1.2, { hat: 50, sofor: true }), ...elim()],
          'durak A: solda direk (on beş, altmış) ve kadın; gelen otobüsün hat tabelasında elli, kapısı açık, ön camda küçük şoför; senin elin kapıda') },
        { tur: 'gor', ses: [sen('Thank you.')], S: sahne([{ t: 'r', x: 0, y: 30, w: 240, h: 120, rx: 10, f: 'su' }, ...[20, 80, 140].map(x => ({ t: 'r', x, y: 44, w: 44, h: 40, rx: 4, f: 'buz' })),
          ...el(...SEN_EL), ...bilet(178, 118, 'kar', 'otobus')],
          'yakın çekim: senin avucunda otobüs bileti (küçük otobüs simgeli); arkada otobüsün mavi gövdesi ve pencereleri') },
        { tur: 'gor', ses: [sen('Sorry. Where is the station?')], S: sahne(h1DurakB(senBalon(['istasyon', 'soru'], 196, 34, 1.2)),
          'durak B: solda dükkân; ortada plakasız durak direği; yanında C kadını (sarı uzun saç, mor gövde); sağda otobüs gidiyor (kenarda yarısı); senin balonunda küçük istasyon ve soru işareti') },
        { tur: 'gor', ses: [kad('The station is near here.')], S: sahne(h1DurakB(onunBalon(['istasyon'], 186, 30, 1.25)),
          'aynı kare; C kadının balonunda küçük istasyon') },
        { tur: 'gor', ses: [kad('Go to the bank.')], S: sahne([...SK([], [86]), ...durakDiregi(18, 124, [], .85), ...kadinC(44, 126, 1.3, 'ileri'),
          ...bitisik('banka', 'istasyon', 138, 122, .82), ...okY(58, 100, 128, 100)],
          'geniş: solda durak ve C kadını; sağda banka ve ona bitişik istasyon; kadından bankaya kesik ok') },
        { tur: 'gor', ses: [kad('The station is next to the bank.')], S: sahne(SK(bitisik('banka', 'istasyon', 60, 122, 1.05)),
          'yakın çekim: banka ve ona bitişik istasyon (ortak duvar)') },
        { tur: 'gor', ses: [sen('Thank you. Goodbye.')], S: sahne([...h1DurakB(), ...salla(206, 118, 1)],
          'C kadını gülüyor; senin elin sallıyor') },
        { tur: 'gor', ses: [sen('Here is the station.')], S: sahne([...SK(bitisik('banka', 'istasyon', 34, 122, 1.0)), ...elim()],
          'istasyonun kemerli girişi; solunda bankanın sütunları; senin elin girişte') },
      ],
      sorular: [
        // Soru 1 (kare 3, sayı): bindiğin otobüsün hattı. 15 kadının söylediği ve direkteki, 60 direkteki (hikâye tuzakları). Doğru orta değer, A.
        { tur: 'sec', ses: [sen('The station, please.')], dogruSes: [sen('The station, please.')], dogru: 0,
          secenek: [hatS(50), hatS(15), hatS(60)], birimler: ['en:s:station', 'en:s:please', 'en:s:bus'] },
        // Soru 2 (kare 10, yer; tur 1): istasyon neyin yanında. Kök near değil (near sorusunda bitişik şık olmaz). Tuzaklar sahnenin near
        // (dükkân–istasyon) ve next to (banka–dükkân) çiftleri.
        { tur: 'sec', ses: [sen('Here is the station.')], dogruSes: [sen('Here is the station.')], dogru: 2,
          secenek: [h1DizS('dukIst'), h1DizS('bankDuk'), h1DizS('bankIst')], birimler: ['en:s:here', 'en:s:station', 'en:k:next-to', 'en:s:bank'] },
        // Soru 3 (kare 1, nesne): durak kadınının kucağındaki. Çanta "tipik" ve Hikâye 2'nin çantası; kutu sahnenin kutusu.
        { tur: 'sec', ses: [sen('Where is the station?')], dogruSes: [sen('Where is the station?')], dogru: 1,
          secenek: [kucakS('canta'), kucakS('ekmek'), kucakS('kutu')], birimler: ['en:s:where', 'en:s:station'] },
      ] },
    // 2 · Anna otobüsle gelir; taksiye binersiniz; Anna çantasını taksinin tavanında unutur. Otobüs 30, fiyat 40.
    { id: 'taksi', ad: 'Anna',
      sayfalar: [
        { tur: 'gor', ses: [kom('Hello.')], S: sahne([...SK([...istasyon(64, 122, .9)]), ...taksi(30, 176, .7, { bagaj: true }), ...otobus(176, 162, 1.0, { hat: 30 }), ...anna(120, 172, 1.8), ...canta(142, 150, 'kahve', .45)],
          'istasyon meydanı: arkada istasyon; solda taksi durağında bir taksi; Anna (siyah uzun saç, turuncu gövde) elinde kahverengi çantayla; arkasından hat tabelası otuz olan otobüs kalkıyor') },
        { tur: 'gor', ses: [sen('Hello, Anna. Taxi?')], S: sahne([...SK(), ...h2Taksi(168, 170, 1.3, { cantaYok: true, hiz: true }), ...anna(64, 172, 1.9), ...canta(88, 150, 'kahve', .45), ...senBalon(['taksi', 'soru'], 120, 34, 1.3)],
          'Anna gülüyor, çanta elinde; taksi yanaşıyor; senin balonunda küçük taksi ve soru işareti') },
        { tur: 'gor', ses: [kom('Yes. The bank, please.')], S: sahne([...SK(), ...h2Taksi(146, 172, 1.4), ...anna(56, 174, 1.9, 'ileri'), ...onunBalon(['banka'], 118, 30, 1.2), ...elim()],
          'Anna taksinin yanında; çantasını taksinin tavanına koymuş, kapıya uzanıyor; balonunda küçük banka; senin elin kapıda') },
        { tur: 'gor', ses: [sen('How much is it?')], S: sahne([...SK(bankaCephe(54, 122, 1.0)), ...h2Taksi(150, 172, 1.4, { sofor: true }), ...anna(52, 176, 1.7), ...senBalon(['para', 'soru'], 196, 30, 1.2)],
          'taksi bankanın önünde; ön camda şoför (B adamı); Anna yanında; çanta hâlâ tavanda; senin balonunda para ve soru işareti') },
        { tur: 'gor', ses: [sof('Forty, please.')], S: sahne([...SK(bankaCephe(54, 122, 1.0)), ...h2Taksi(150, 172, 1.4, { sofor: true }), ...anna(52, 176, 1.7), ...elim(), ...paraSira(3, 186, 150, .8)],
          'şoför ön camdan konuşuyor; senin avucunda paralar; çanta tavanda') },
        { tur: 'gor', ses: [kom('Thank you. Goodbye.')], S: sahne([...SK(bankaCephe(54, 122, 1.0)), ...h2Taksi(178, 172, 1.2, { hiz: true }), ...anna(70, 176, 1.8, 'yukari'), ...sallar(70, 118)],
          'taksi sağa gidiyor (hız çizgileri), tavanında çanta; Anna el sallıyor') },
        { tur: 'gor', ses: [kom('My bag!')], S: sahne([...SK(bankaCephe(54, 122, 1.0)), ...h2Taksi(212, 168, .7, { hiz: true }), ...anna(84, 176, 1.9, 'yukari', 'sasir')],
          'Anna şaşırmış; taksi uzakta, tavanında çanta') },
        { tur: 'gor', ses: [sen('Taxi! Taxi!')], S: sahne([...SK(), ...h2Taksi(112, 170, 1.3), ...anna(30, 176, 1.6), ...el(...SEN_EL), ...salla(206, 118, 1), ...salla(164, 118, -1)],
          'senin elin havada sallıyor; taksi kaldırıma yanaşmış, tavanında çanta') },
        { tur: 'gor', ses: [sof('Here is your bag.')], S: sahne([...SK(), ...taksi(190, 170, 1.0, { bagaj: true }), ...sofor(150, 176, 1.8, 'ileri'), ...canta(118, 140, 'kahve', .5), ...anna(64, 176, 1.8), ...okY(136, 128, 92, 132)],
          'şoför (B adamı) taksiden inmiş, çantayı Anna’ya uzatıyor (ok şoförden Anna’ya)') },
        { tur: 'gor', ses: [kom('Thank you.')], S: sahne([...SK(), ...taksi(190, 170, 1.0, { bagaj: true }), ...anna(84, 176, 1.9), ...canta(108, 152, 'kahve', .5)],
          'Anna gülüyor, çanta elinde; arkada taksi') },
      ],
      sorular: [
        // Soru 1 (kare 6, yer): çanta nerede. "İçinde" taksi unutmasının tipik hâli (tuzak); sahnede tavanda yalnız kutu görünür.
        { tur: 'sec', ses: [kom('Thank you. Goodbye.')], dogruSes: [kom('Thank you. Goodbye.')], dogru: 2,
          secenek: [cantaTaksiS('ic'), cantaTaksiS('yan'), cantaTaksiS('tavan')], birimler: ['en:k:thank-you', 'en:s:goodbye', 'en:s:taxi', 'en:s:bag'] },
        // Soru 2 (kare 4, sayı): fiyat. Tur 1: soru 3'ün otobüs şıkkı 30'u gösterdiği için 30 çıktı; 14 (-teen tuzağı) ve 20 (sahnenin
        // "Bus twenty."si). Doğru en büyük değer, B.
        { tur: 'sec', ses: [sen('How much is it?')], dogruSes: [sen('How much is it?')], dogru: 1,
          secenek: [plakaS(14), plakaS(40), plakaS(20)], birimler: ['en:k:how-much', 'en:y:onluklar'] },
        // Soru 3 (kare 1, araç): Anna neyle geldi. Tren istasyon meydanında "tipik" (tuzak); araba hikâyede yok. Tur 1: otobüste hikâyenin
        // tabelası (30); taksi şıktan çıktı (kare 1–2'de görünüyordu).
        { tur: 'sec', ses: [kom('Hello.')], dogruSes: [kom('Hello.')], dogru: 0,
          secenek: [annaAracS('otobus'), annaAracS('araba'), annaAracS('tren')], birimler: ['en:s:hello', 'en:y:onluklar'] },
      ] },
  ],
};
