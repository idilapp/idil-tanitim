// Filiz durağı 2: Barınma (18 Kasım 2026). Onaylı taslak: taslak/durak-taslaklari.md §3 (28 sayfa, 3 yoklama sorusu).
// Apartman koridoru ve oda. Kahraman "sen"sin: ev sahibi sana konuşur, sağ alttaki el senin elin. Ev sahibi ayrı rol değil:
// `memur` çerçevesi (gri masa) + anahtar tahtası (§8/3). Türkçe yok. `the` ve `thank you` Pazar'da öğretilir; burada geçmez.
// Durak 1'den dönenler (yeni sayılmaz): hello, a, here. Sayılar "Room one/two/three" kalıbında döner.
// my/your resimde sahiplik olarak okunur: anahtar ev sahibinin elinde (my) ya da senin elinde (your).
// Görev 3 (Dalga 1, 23 Kasım 2026; taslak §10): pratik (5 oyun dizisi, 5 tür, 37 etkileşim) ve iki hikâyecik ("Room two? No." yanlış
// oda; "My key? Where?" içeride kalan anahtar). Yeni birim yok; Varış birimleri geri döner (passport, here, sorry, where, sayılar,
// I don't understand, speak slowly). Bütün roller iDil sesiyle konuşur; ev sahibi `memur` rolü. Balonda nesne ya da plaka = o şeyden
// söz ediliyor (Varış'taki "balonda belge = isteniyor" uzlaşımı). Senin anahtarın sarı, ev sahibinin yedek anahtarı gri.
import { anahtar, anahtarTahtasi, balon, bilet, canta, el, halka, kapi, kisi, konusma, odaIci, ok, pasaport, pencere, plaka, salla, yatak, KISI_EL, SEN_EL } from '../parca.js';

const H = 180;
const sahne = (o, alt) => ({ boy: H, alt, o });
const anl = metin => ({ rol: 'anlatici', metin });
const sen = metin => ({ rol: 'sen', metin });
const ev = metin => ({ rol: 'memur', metin });

const evSahibi = (kol, yuz) => kisi('memur', kol, yuz);
const yer = () => [{ t: 'r', x: 10, y: 126, w: 220, h: 30, rx: 4, f: 'yol' }]; // boş zemin şeridi
const SEN_ANAHTAR = () => anahtar(185, 118); // senin avucunda anahtar (parmak uçlarına oturur)
const ver = () => ok(120, 86, 170, 114); // ev sahibinden sana yönelen ok
const kapat = () => ok(34, 70, 92, 84); // kapanma yönü oku (kapı ve pencere solundan)

// sec seçeneği (boy 120'ye sığar): anahtar yalnız bir yerde; ev sahibinin elinde, senin elinde ya da hiçbirinde.
// Ev sahibi ve senin elin her üç resimde aynı yerde; yalnız anahtarın yeri değişir. Her şey y ≤ 105.
const anahtarYeri = kim => [
  { t: 'k', x: 60, y: 100, s: 2, kol: 'ileri' },
  ...el(185, 92),
  ...(kim === 'ev' ? anahtar(104, 62) : kim === 'sen' ? anahtar(185, 62) : []),
];
const plakaSec = n => sahne(plaka(120, 62, n, 1.2));
const kapatSec = () => ok(34, 56, 86, 68); // Close sorularında yalnız DOĞRU seçeneğe: kapanma oku (kapalı = yakın diye okunmasın)
const kapiSec = (acik, kapan) => sahne([...kapi(120, 64, acik), ...(kapan ? [kapatSec()] : [])]);
const pencereSec = (acik, kapan) => sahne([...pencere(120, 62, acik), ...(kapan ? [kapatSec()] : [])]);

// ---- Görev 3 (Dalga 1) yardımcıları: gor boy 180; sec ve eşleştir seçenekleri boy 120–130 (her şey y ≤ 112) ----
const tahtaK = () => anahtarTahtasi(176, 6, .6);              // küçük anahtar tahtası (sağ üst): ev sahibi, konuşma balonuyla
const sallar = (x, y) => [...salla(x + 24, y, 1), ...salla(x - 24, y, -1)];
const iste = () => ok(166, 104, 112, 80);                     // senden ev sahibine (verirken)
const anahtarEl = (f = 'sari') => anahtar(185, 118, f);       // senin avucunda anahtar; gri = ev sahibinin yedek anahtarı
const balonPlaka = (n, x = 132, y = 30) => [...konusma(x, y), ...plaka(x, y, n, .6)];   // ev sahibinin balonunda oda numarası
// Aç ve kapat (düzeltme 2): onaylı sahnenin uzlaşımı. "open" = açık hâl (oksuz); "close" = kapalı hâl + kapanma oku (nesnenin
// solundan ona doğru). Sec şıklarında kapanma oku yalnız doğru "close" şıkkında (kapiSec, pencereSec; sahneyle aynı).
const kapanOk = (x, y) => ok(x - 86, y - 26, x - 34, y - 14);
// Koridor kapısı: kapı (x, 96), üstünde plaka; durum: undefined (kapalı), 'acik' (açık), 'kapan' (kapalı + kapanma oku).
const koridor = (n, durum, x = 110) => [...kapi(x, 96, durum === 'acik'), ...plaka(x, 40, n), ...(durum === 'kapan' ? [kapanOk(x, 96)] : [])];
const ozur = () => balon(196, 40, 'hayir');                    // senin balonunda çarpı
// Oda içi (hikâye): duvarda plaka n, pencere, yatak; ustunde: yatağın üstündeki şey.
const odaGor = (n, ustunde) => [...odaIci(), ...plaka(62, 34, n, .8), ...pencere(168, 58), ...yatak(100, 106), ...(ustunde || [])];
// Hızlı ve uzun söz (anlaşılmaz; zikzak balon): ev sahibi yedek anahtardan söz ediyor. Anlamı resim ve sonraki yavaş söz taşır.
const HIZLI = "Oh, you locked yourself out? Don't worry, I keep a spare one right here.";
// Ev sahibi konuşuyor (balonunun içi ic); dedin: senin balonunun içi (yoksa balon yok).
const konusuyor = (ic, dedin) => [...evSahibi('ileri'), ...konusma(132, 30, ic), ...tahtaK(), ...el(...SEN_EL),
  ...(dedin ? balon(200, 96, dedin, dedin === 'yavasla' ? 1.3 : 1) : [])];
// Yanlış oda: koridorda açık kapı 2; kapıda şaşkın biri (çerçevesiz figür); senin elinde anahtar.
const yanlisKapi = () => [...kapi(110, 96, true), ...plaka(110, 40, 2), { t: 'k', x: 110, y: 134, s: 1.5, kol: 'asagi', yuz: 'sasir' }, ...el(...SEN_EL), ...anahtarEl()];
// sec seçenekleri
const anahtarSec = (f = 'sari') => anahtar(120, 60, f, 2);
// Ev sahibi (sec, boy 120): anahtar tahtası ve gri masa (pasaport memurunun cam panosu yok; memurdan ayrışsın).
const evSec = (kol = 'ileri', yuz = 'mutlu') => [...anahtarTahtasi(18, 6, .7), { t: 'k', x: 52, y: 100, s: 1.7, kol, yuz },
  { t: 'r', x: 6, y: 100, w: 92, h: 20, rx: 4, f: 'gri' }];
const sallarSec = () => [...salla(76, 54, 1), ...salla(28, 54, -1)];
// Küçük oda (boy 120): duvarda plaka n, yatak; ustunde: yatağın üstündeki şey.
const odaSec = (n, ustunde) => [...plaka(40, 28, n, .9), ...yatak(140, 80), ...(ustunde || [])];
const yatakCanta = f => canta(150, 58, f, .8);
// Senin elinden ev sahibine (sec, boy 120): ok ve avucundaki şey. Hikâye 1 soru 3 (kare 3: pasaport, bilet ya da ikisi).
const VERILEN = { pasaport: () => pasaport(186, 80), bilet: () => bilet(184, 84), ikisi: () => [...bilet(184, 94), ...pasaport(176, 74)] };
const verSec = (ne, alt) => sahne([...evSec('ileri'), ok(164, 92, 108, 66), ...el(186, 108), ...VERILEN[ne]()], alt);
// Hikâye 2 soru 1 (kare 11'in üç hâli): anahtar nerede (küçük oda: pencere ve yatak; anahtar halkalı).
const ANAHTAR_YER = { yatak: [130, 70], pencere: [50, 66], yer: [204, 106] };
const anahtarNerede = nerede => sahne([...pencere(50, 40), ...yatak(130, 82), { t: 'r', x: 6, y: 112, w: 228, h: 4, rx: 2, f: 'tas' },
  ...anahtar(...ANAHTAR_YER[nerede]), halka(ANAHTAR_YER[nerede][0], ANAHTAR_YER[nerede][1], 16)]);
// Hikâye 2 soru 2 (kare 3'ün üç hâli; düzeltme 3): kapalı kapı 3, senin balonunda çarpı; avucunda: hiçbir şey, sarı anahtar
// (içeride kalmıştı) ya da gri anahtar (o anda henüz verilmemişti). avuc: null ya da anahtar rengi.
const kapidaSec = avuc => sahne([...kapi(70, 60), ...plaka(124, 28, 3, .7), ...balon(196, 30, 'hayir'), ...el(190, 90),
  ...(avuc ? anahtar(190, 66, avuc) : [])]);
// Hikâye 2 soru 3 (kare 10'un üç hâli): açık kapı 3, senin balonunda onay; avucunda gri anahtar, sarı anahtar ya da hiçbir şey.
const acildiSec = avuc => sahne([...kapi(70, 60, true), ...plaka(124, 28, 3, .7), ...balon(196, 30, 'evet'), ...el(190, 90),
  ...(avuc ? anahtar(190, 66, avuc) : [])]);

export default {
  dil: 'en', id: 'barinma', no: 2, ad: 'Barınma',
  yoklama: [
    { tur: 'sec', ses: [anl('Your key.')], dogruSes: [anl('Your key.')], dogru: 2,
      secenek: [sahne(anahtarYeri(null)), sahne(anahtarYeri('ev')), sahne(anahtarYeri('sen'))],
      birimler: ['en:s:key', 'en:s:your'] },
    { tur: 'sec', ses: [anl('Close.')], dogruSes: [anl('Close.')], dogru: 0,
      secenek: [kapiSec(false, true), kapiSec(true), pencereSec(true)],
      birimler: ['en:s:close', 'en:s:door'] },
    { tur: 'sec', ses: [anl('Room three.')], dogruSes: [anl('Room three.')], dogru: 1,
      secenek: [plakaSec(2), plakaSec(3), plakaSec(1)],
      birimler: ['en:s:room', 'en:s:three'] },
  ],
  sayfalar: [
    // 1-2: selam
    { tur: 'gor', ses: [ev('Hello.')], S: sahne([...evSahibi('yukari'), ...anahtarTahtasi()], 'ev sahibi kapıda el sallıyor, duvarda anahtar tahtası'), degisen: 'kisi' },
    { tur: 'gor', ses: [sen('Hello.')], S: sahne([...evSahibi('asagi'), ...balon(150, 60), ...el(...SEN_EL)], 'senin elin sallıyor, konuşma balonu'), degisen: 'eylem' },
    // 3-7: oda ve oda numarası
    { tur: 'gor', ses: [anl('A room.')], S: sahne(odaIci(), 'boş oda, dört duvar'), yeni: 'en:s:room', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Room one.')], S: sahne([...plaka(120, 80, 1, 1.5), halka(120, 80, 52)], 'kapı plakasında 1, halkalı'), degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Room two.')], S: sahne([...plaka(120, 80, 2, 1.5), halka(120, 80, 52)], 'kapı plakasında 2, halkalı'), degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Room three.')], S: sahne([...plaka(120, 80, 3, 1.5), halka(120, 80, 52)], 'kapı plakasında 3, halkalı'), degisen: 'nesne' },
    { tur: 'sec', ses: [anl('Room two?')], dogruSes: [anl('Room two.')], dogru: 1,
      secenek: [plakaSec(1), plakaSec(2), plakaSec(3)],
      birimler: ['en:s:room'] },
    // 8-11: kapı, pencere, yatak
    { tur: 'gor', ses: [anl('A door.')], S: sahne([...yer(), ...kapi(120, 86)], 'kapalı tek kapı'), yeni: 'en:s:door', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('A window.')], S: sahne(pencere(120, 80), 'kapalı tek pencere'), yeni: 'en:s:window', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('A bed.')], S: sahne([...yer(), ...yatak(120, 100)], 'boş zeminde tek yatak'), yeni: 'en:s:bed', degisen: 'nesne' },
    { tur: 'sec', ses: [anl('A bed?')], dogruSes: [anl('A bed.')], dogru: 2,
      secenek: [kapiSec(false), pencereSec(false), sahne(yatak(120, 62))],
      birimler: ['en:s:bed'] },
    // 12-17: anahtar, my, your
    { tur: 'gor', ses: [anl('A key.')], S: sahne([...el(120, 116), ...anahtar(120, 84)], 'avuçta tek anahtar'), yeni: 'en:s:key', degisen: 'nesne' },
    { tur: 'gor', ses: [ev('My key.')], S: sahne([...evSahibi('ileri'), ...anahtar(...KISI_EL), ...el(...SEN_EL)], 'anahtar ev sahibinin elinde, senin elin boş'), yeni: 'en:s:my', degisen: 'kisi' },
    { tur: 'gor', ses: [ev('Your key.')], S: sahne([...evSahibi('ileri'), ...anahtar(...KISI_EL), ver(), ...el(...SEN_EL)], 'ev sahibi anahtarı sana uzatıyor, ok senin elinde'), yeni: 'en:s:your', degisen: 'eylem' },
    { tur: 'gor', ses: [ev('My key. Your key.')], S: sahne([...evSahibi('ileri'), ...anahtar(...KISI_EL), ...el(...SEN_EL), ...SEN_ANAHTAR()], 'iki anahtar: biri ev sahibinin, biri senin elinde'), degisen: 'nesne' },
    { tur: 'gor', ses: [sen('My key.')], S: sahne([...evSahibi('asagi'), ...balon(150, 60), ...el(...SEN_EL), ...SEN_ANAHTAR()], 'senin elinde anahtar, konuşma balonu'), degisen: 'kisi' },
    { tur: 'sec', ses: [ev('Your key.')], dogruSes: [ev('Your key.')], dogru: 0,
      secenek: [sahne(anahtarYeri('sen')), sahne(anahtarYeri('ev')), sahne(anahtarYeri(null))],
      birimler: ['en:s:key', 'en:s:your'] },
    // 18-19: senin odan, anahtar avucuna
    { tur: 'gor', ses: [ev('Room two. Your room.')], S: sahne([...plaka(70, 66, 2, 1.2), ok(100, 82, 168, 116), ...el(...SEN_EL)], 'plakada 2, ok senin eline'), degisen: 'nesne' },
    { tur: 'gor', ses: [ev('Here is your key.')], S: sahne([...evSahibi('ileri'), ver(), ...el(...SEN_EL), ...SEN_ANAHTAR()], 'anahtar senin avucuna geldi, ev sahibinin eli boş'), yeni: 'en:k:here-is', degisen: 'eylem' },
    // 20-25: open, close
    { tur: 'gor', ses: [ev('Open.')], S: sahne([...kapi(100, 84, true), ...el(...SEN_EL), ...SEN_ANAHTAR()], 'senin elinde anahtar, kapı açık'), yeni: 'en:s:open', degisen: 'eylem' },
    { tur: 'gor', ses: [ev('Open.')], S: sahne(pencere(120, 80, true), 'pencere açık'), degisen: 'nesne' },
    { tur: 'gor', ses: [ev('Close.')], S: sahne([...kapi(120, 84), kapat()], 'kapı kapalı, ok kapanma yönünde'), yeni: 'en:s:close', degisen: 'eylem' },
    { tur: 'gor', ses: [ev('Close.')], S: sahne([...pencere(120, 80), kapat()], 'pencere kapalı, ok kapanma yönünde'), degisen: 'nesne' },
    { tur: 'sec', ses: [ev('Open.')], dogruSes: [ev('Open.')], dogru: 1,
      secenek: [kapiSec(false), kapiSec(true), pencereSec(false)],
      birimler: ['en:s:open'] },
    { tur: 'sec', ses: [ev('Close.')], dogruSes: [ev('Close.')], dogru: 1,
      secenek: [pencereSec(true), pencereSec(false, true), kapiSec(true)],
      birimler: ['en:s:close'] },
    // 26-27: odan, yatağın
    { tur: 'gor', ses: [sen('My room.')], S: sahne([...odaIci(), ...pencere(168, 58), ...yatak(96, 106), ...el(...SEN_EL)], 'içeridesin: yatak ve pencere, senin elin'), degisen: 'kisi' },
    { tur: 'gor', ses: [sen('My bed.')], S: sahne([...odaIci(), ...yatak(150, 104), ...el(...SEN_EL)], 'senin elin yatağa dokunuyor'), degisen: 'nesne' },
    // Yazı perdesi
    { tur: 'yazi', birimler: ['en:s:room', 'en:s:door', 'en:s:window', 'en:s:bed', 'en:s:key', 'en:s:my', 'en:s:your', 'en:s:open', 'en:s:close', 'en:k:here-is'] },
  ],

  // ---- Pratik (Görev 3, Dalga 1; taslak §10.1, düzeltme 1 §10.4): 5 oyun dizisi = 5 tür, 37 etkileşim. Bir "oyun" aynı türden
  // art arda gelen turlardır (eşleştir 2 tahta, boşluk 6, ne derdin 6, sırala 5, hızlı tur 1 × 12 soru). Varış birimleri geri
  // döner (≥ %30). Oynatıcı sec, boşluk ve ne derdin şıklarını karıştırmaz: doğru şıkların sırası elle düzensiz.
  pratik: [
    // Oyun 1 · eşleştir (2 tahta, 8 çift): odadaki şeyler; sonra oda numaraları ve Varış belgeleri
    { tur: 'eslestir', ciftler: [
      { ses: [anl('A door.')], S: kapiSec(false), birim: 'en:s:door' },
      { ses: [anl('A window.')], S: pencereSec(false), birim: 'en:s:window' },
      { ses: [anl('A bed.')], S: sahne(yatak(120, 62)), birim: 'en:s:bed' },
      { ses: [anl('A key.')], S: sahne(anahtarSec()), birim: 'en:s:key' },
    ] },
    { tur: 'eslestir', ciftler: [
      { ses: [anl('Room two.')], S: plakaSec(2), birim: 'en:s:two' },
      { ses: [anl('Room five.')], S: plakaSec(5), birim: 'en:s:five' },
      { ses: [anl('A passport.')], S: sahne(pasaport(120, 60)), birim: 'en:s:passport' },
      { ses: [anl('A ticket.')], S: sahne(bilet(120, 54)), birim: 'en:s:ticket' },
    ] },
    // Oyun 2 · boşluk (6): cümle çalar, eksik sözcüğün resmi seçilir
    { tur: 'bosluk', ses: [ev('Here is your key.')], metin: 'Here is your ___.',
      secenek: [sahne(anahtarSec()), sahne(pasaport(120, 60)), sahne(bilet(120, 54))], dogru: 0, birimler: ['en:s:key'] },
    { tur: 'bosluk', ses: [ev('Room three. Your room.')], metin: 'Room ___. Your room.',
      secenek: [plakaSec(2), plakaSec(1), plakaSec(3)], dogru: 2, birimler: ['en:s:three', 'en:s:room'] },
    { tur: 'bosluk', ses: [anl('This is a bed.')], metin: 'This is a ___.',
      secenek: [kapiSec(false), sahne(yatak(120, 62)), pencereSec(false)], dogru: 1, birimler: ['en:k:this-is', 'en:s:bed'] },
    { tur: 'bosluk', ses: [sen('My key? Where?')], metin: 'My ___? Where?',
      secenek: [sahne(anahtarSec()), sahne(canta(120, 62)), sahne(pasaport(120, 60))], dogru: 0, birimler: ['en:s:key', 'en:s:where'] },
    { tur: 'bosluk', ses: [ev('Open, please.')], metin: '___, please.',
      secenek: [kapiSec(false), pencereSec(false), kapiSec(true)], dogru: 2, birimler: ['en:s:open', 'en:s:please'] },
    { tur: 'bosluk', ses: [ev('Close, please.')], metin: '___, please.',
      secenek: [pencereSec(true), kapiSec(false, true), kapiSec(true)], dogru: 1, birimler: ['en:s:close', 'en:s:please'] },
    // Oyun 3 · ne derdin? (6): durum resmi, senin ağzından üç sesli cevap. Resim cevabı göstermez (senin balonun yok).
    { tur: 'nederdin', S: sahne([...evSahibi('yukari'), ...sallar(60, 58), ...anahtarTahtasi(), ...el(...SEN_EL)], 'ev sahibi iki elini sallıyor, duvarda anahtar tahtası; senin elin'),
      secenekSes: [[sen('My bed.')], [sen('Hello.')], [sen('Sorry.')]], dogru: 1, birimler: ['en:s:hello'] },
    { tur: 'nederdin', S: sahne([...evSahibi('ileri'), ...konusma(132, 30, anahtar(132, 30, 'sari', .9)), ...tahtaK(), ...el(...SEN_EL), ...anahtarEl()], 'ev sahibi kolunu uzatmış, balonunda anahtar; senin elinde sarı anahtar'),
      secenekSes: [[sen('Here.')], [sen('My room.')], [sen('Where?')]], dogru: 0, birimler: ['en:s:here'] },
    { tur: 'nederdin', S: sahne(konusuyor('hizli'), 'ev sahibi; balonunda üç sıra sık zikzak çizgi; senin elin'),
      secenekSes: [[sen('My key.')], [sen('Hello.')], [sen("I don't understand.")]], dogru: 2, birimler: ['en:k:i-dont-understand'] },
    { tur: 'nederdin', S: sahne(yanlisKapi(), 'koridorda açık kapı, plakasında 2; kapıda şaşkın yüzlü biri duruyor; senin elinde anahtar'),
      secenekSes: [[sen('Sorry.')], [sen('My bed.')], [sen('Yes.')]], dogru: 0, birimler: ['en:s:sorry'] },
    { tur: 'nederdin', S: sahne([...koridor(3), ...el(...SEN_EL)], 'koridorda kapalı kapı, plakasında 3; senin elin boş'),
      secenekSes: [[sen('Room one.')], [sen('Yes.')], [sen('My key? Where?')]], dogru: 2, birimler: ['en:s:key', 'en:s:where'] },
    { tur: 'nederdin', S: sahne([...evSahibi('asagi'), iste(), ...tahtaK(), ...el(...SEN_EL), ...anahtarEl('gri')], 'ev sahibi; senin elinde gri anahtar, ev sahibine doğru ok'),
      secenekSes: [[sen('Where?')], [sen('Here is your key.')], [sen("I don't understand.")]], dogru: 1, birimler: ['en:k:here-is', 'en:s:your', 'en:s:key'] },
    // Oyun 4 · sırala (5): duyduğun cümleyi sözcük kartlarıyla kur. Her cümlede tek büyük harfli kart ve tek noktalı kart: tek sıra.
    { tur: 'sirala', ses: [ev('Here is your key.')], parcalar: ['Here', 'is', 'your', 'key.'], birimler: ['en:k:here-is', 'en:s:your', 'en:s:key'] },
    { tur: 'sirala', ses: [sen('This is my room.')], parcalar: ['This', 'is', 'my', 'room.'], birimler: ['en:k:this-is', 'en:s:my', 'en:s:room'] },
    { tur: 'sirala', ses: [ev('Here is room three.')], parcalar: ['Here', 'is', 'room', 'three.'], birimler: ['en:k:here-is', 'en:s:room', 'en:s:three'] },
    { tur: 'sirala', ses: [sen('Room two, please.')], parcalar: ['Room', 'two,', 'please.'], birimler: ['en:s:room', 'en:s:two', 'en:s:please'] },
    { tur: 'sirala', ses: [sen('Here is my passport.')], parcalar: ['Here', 'is', 'my', 'passport.'], birimler: ['en:k:here-is', 'en:s:my', 'en:s:passport'] },
    // Oyun 5 · hızlı tur (60 sn, 12 soru); doğru şık sırası elle düzensiz (A 4, B 4, C 4)
    { tur: 'hizli', sure: 60, sorular: [
      { tur: 'sec', ses: [anl('A door.')], dogruSes: [anl('A door.')], secenek: [pencereSec(false), sahne(yatak(120, 62)), kapiSec(false)], dogru: 2, birimler: ['en:s:door'] },
      { tur: 'sec', ses: [anl('A window.')], dogruSes: [anl('A window.')], secenek: [pencereSec(false), kapiSec(false), sahne(yatak(120, 62))], dogru: 0, birimler: ['en:s:window'] },
      { tur: 'sec', ses: [anl('A bed.')], dogruSes: [anl('A bed.')], secenek: [sahne(yatak(120, 62)), kapiSec(false), sahne(anahtarSec())], dogru: 0, birimler: ['en:s:bed'] },
      { tur: 'sec', ses: [anl('A key.')], dogruSes: [anl('A key.')], secenek: [sahne(pasaport(120, 60)), sahne(bilet(120, 54)), sahne(anahtarSec())], dogru: 2, birimler: ['en:s:key'] },
      { tur: 'sec', ses: [anl('Room one.')], dogruSes: [anl('Room one.')], secenek: [plakaSec(3), plakaSec(1), plakaSec(2)], dogru: 1, birimler: ['en:s:room', 'en:s:one'] },
      { tur: 'sec', ses: [anl('Room two.')], dogruSes: [anl('Room two.')], secenek: [plakaSec(5), plakaSec(2), plakaSec(3)], dogru: 1, birimler: ['en:s:room', 'en:s:two'] },
      { tur: 'sec', ses: [anl('Room three.')], dogruSes: [anl('Room three.')], secenek: [plakaSec(2), plakaSec(4), plakaSec(3)], dogru: 2, birimler: ['en:s:room', 'en:s:three'] },
      { tur: 'sec', ses: [anl('Room five.')], dogruSes: [anl('Room five.')], secenek: [plakaSec(5), plakaSec(4), plakaSec(1)], dogru: 0, birimler: ['en:s:room', 'en:s:five'] },
      { tur: 'sec', ses: [anl('Open.')], dogruSes: [anl('Open.')], secenek: [kapiSec(false), pencereSec(false), pencereSec(true)], dogru: 2, birimler: ['en:s:open'] },
      { tur: 'sec', ses: [anl('Close.')], dogruSes: [anl('Close.')], secenek: [kapiSec(true), pencereSec(false, true), pencereSec(true)], dogru: 1, birimler: ['en:s:close'] },
      { tur: 'sec', ses: [anl('A bag.')], dogruSes: [anl('A bag.')], secenek: [sahne(canta(120, 62)), sahne(anahtarSec()), sahne(yatak(120, 62))], dogru: 0, birimler: ['en:s:bag'] },
      { tur: 'sec', ses: [anl('A passport.')], dogruSes: [anl('A passport.')], secenek: [sahne(bilet(120, 54)), sahne(pasaport(120, 60)), sahne(anahtarSec())], dogru: 1, birimler: ['en:s:passport'] },
    ] },
  ],

  // ---- Hikâyecikler (Görev 3, Dalga 1; taslak §10.2 ve §10.4): yeni birim yok, yalnız Barınma ve Varış birimleri. Sonunda 3 anlama
  // sorusu. Tek kural (düzeltme 1): kök hikâyede bir kez geçen satırdır; şıklar o karenin üç hâlidir; doğru şık hikâyede olan
  // hâldir. Kök tek başına cevabı vermez; mantık ya da dünya bilgisi şıklardan birini seçtirmez.
  hikayeler: [
    // 1 · Yanlış oda (müfredat ve tasarım §4.2 örneği "otelde yanlış oda"). Ev sahibi pasaport ister ve "Room two" der. İki numaralı
    // odada yatakta mavi bir çanta var: senin değil (seninki kahverengi). Geri dönersin; ev sahibi özür diler, üç numaralı odayı verir.
    { id: 'yanlis-oda', ad: 'Your room',
      sayfalar: [
        { tur: 'gor', ses: [ev('Hello.'), sen('Hello.')], S: sahne([...evSahibi('yukari'), ...sallar(60, 58), ...anahtarTahtasi(), ...el(...SEN_EL), ...canta(185, 104, 'kahve', .8)], 'ev sahibi iki elini sallıyor, duvarda anahtar tahtası; senin elinde kahverengi çanta') },
        { tur: 'gor', ses: [ev('Passport, please.')], S: sahne([...evSahibi('ileri'), ...konusma(132, 30, 'pasaport'), ...tahtaK(), ...el(...SEN_EL), ...pasaport(185, 116)], 'ev sahibi kolunu uzatmış, balonunda pasaport; küçük anahtar tahtası; senin elinde pasaport') },
        { tur: 'gor', ses: [sen('Here.')], S: sahne([...evSahibi('ileri'), iste(), ...tahtaK(), ...el(...SEN_EL), ...pasaport(185, 116)], 'senin elinde pasaport, ev sahibine doğru ok') },
        { tur: 'gor', ses: [ev('Room two. Here is your key.')], S: sahne([...evSahibi('ileri'), ...balonPlaka(2), ver(), ...tahtaK(), ...el(...SEN_EL), ...anahtarEl()], 'ev sahibinin balonunda 2 numaralı plaka; ondan sana ok; senin avucunda anahtar') },
        { tur: 'gor', ses: [sen('Room two. Open.')], S: sahne([...koridor(2, 'acik'), ...el(...SEN_EL), ...anahtarEl()], 'koridorda kapı 2 açık; senin elinde anahtar') },
        { tur: 'gor', ses: [sen('A bag?')], S: sahne([...odaGor(2, [...canta(108, 84, 'su', .8), halka(108, 80, 22)]), ...el(...SEN_EL)], 'oda 2 (duvarda plaka 2): yatağın üstünde halkalı mavi bir çanta; senin elin') },
        { tur: 'gor', ses: [sen('My bag? No.')], S: sahne([...odaGor(2, canta(108, 84, 'su', .8)), ...el(...SEN_EL), ...ozur()], 'oda 2: yatakta mavi çanta; senin balonunda kırmızı çarpı') },
        { tur: 'gor', ses: [sen('Sorry. Room two... a bag.')], S: sahne([...evSahibi('asagi', 'sasir'), ...tahtaK(), ...el(...SEN_EL), ...balon(182, 72, [...plaka(166, 66, 2, .55), ...canta(200, 72, 'su', .5)], 1.5)], 'ev sahibi şaşkın; senin büyük balonunda 2 numaralı plaka ve küçük mavi çanta') },
        { tur: 'gor', ses: [ev('Sorry! Room three. Here is your key.')], S: sahne([...evSahibi('ileri'), ...balonPlaka(3), ver(), ...tahtaK(), ...el(...SEN_EL), ...anahtarEl()], 'ev sahibinin balonunda 3 numaralı plaka; ondan sana ok; senin avucunda anahtar') },
        { tur: 'gor', ses: [sen('Room three. Open.')], S: sahne([...koridor(3, 'acik'), ...el(...SEN_EL), ...anahtarEl()], 'kapı 3 açık; senin elinde anahtar') },
        { tur: 'gor', ses: [sen('My room. My bed.')], S: sahne([...odaGor(3, canta(108, 84, 'kahve', .8)), ...el(...SEN_EL)], 'oda 3 (duvarda plaka 3): yatağın üstünde senin kahverengi çantan; senin elin') },
      ],
      sorular: [
        // Soru 1 (kare 6): "A bag?" — yataktaki çantanın rengi; şıklar kare 6'nın üç hâli. Hikâyede mavi.
        { tur: 'sec', ses: [sen('A bag?')], dogruSes: [sen('A bag?')], dogru: 2,
          secenek: [sahne(odaSec(2, yatakCanta('kahve')), 'duvarda plaka 2; yatakta kahverengi çanta'), sahne(odaSec(2, yatakCanta('sari')), 'duvarda plaka 2; yatakta sarı çanta'), sahne(odaSec(2, yatakCanta('su')), 'duvarda plaka 2; yatakta mavi çanta')],
          birimler: ['en:y:a', 'en:s:bag'] },
        // Soru 2 (kare 11): "My room. My bed." — duvardaki plaka; şıklar kare 11'in üç hâli. Hikâyede 3.
        { tur: 'sec', ses: [sen('My room. My bed.')], dogruSes: [sen('My room. My bed.')], dogru: 1,
          secenek: [1, 3, 2].map(n => sahne(odaSec(n, yatakCanta('kahve')), `duvarda plaka ${n}; yatakta kahverengi çanta`)),
          birimler: ['en:s:my', 'en:s:room', 'en:s:bed', 'en:s:three'] },
        // Soru 3 (kare 3; düzeltme 2): "Here." — ev sahibine verdiğin; şıklar kare 3'ün üç hâli. Hikâyede yalnız pasaport.
        // Çanta rengine dayanmaz (soru 1'den ayrı olgu); "pasaport ve bilet birlikte" şıkkı dünya bilgisiyle elenmez.
        { tur: 'sec', ses: [sen('Here.')], dogruSes: [sen('Here.')], dogru: 1,
          secenek: [verSec('ikisi', 'ev sahibi (anahtar tahtası); senden ona doğru ok; senin elinde pasaport ve bilet birlikte'),
            verSec('pasaport', 'ev sahibi (anahtar tahtası); senden ona doğru ok; senin elinde pasaport'),
            verSec('bilet', 'ev sahibi (anahtar tahtası); senden ona doğru ok; senin elinde bilet')],
          birimler: ['en:s:here', 'en:s:passport', 'en:s:ticket'] },
      ] },
    // 2 · İçeride kalan anahtar. Kapıyı kapatırsın; anahtarın içeride. Ev sahibi hızlı konuşur; anlamazsın, yavaş konuşmasını istersin.
    // Ev sahibi yedek anahtarı (gri) verir. Kapı açılır; senin anahtarın (sarı) yatakta. Yedek anahtarı geri verirsin.
    { id: 'anahtar', ad: 'My key? Where?',
      sayfalar: [
        { tur: 'gor', ses: [sen('Room three. Close.')], S: sahne([...koridor(3, 'kapan'), ...el(...SEN_EL)], 'koridorda kapı 3 kapalı, solunda kapıya doğru kapanma oku; senin elin boş') },
        { tur: 'gor', ses: [sen('My key? Where?')], S: sahne([...koridor(3), ...el(...SEN_EL), ...balon(196, 40, anahtar(196, 34, 'sari', .9))], 'kapı 3 kapalı; senin elin boş; senin balonunda anahtar') },
        { tur: 'gor', ses: [sen('Open? No.')], S: sahne([...koridor(3), ...el(...SEN_EL), ...ozur()], 'kapı 3 kapalı; senin elin boş; senin balonunda kırmızı çarpı') },
        { tur: 'gor', ses: [sen('Sorry. My key? Where?')], S: sahne([...evSahibi('asagi'), ...tahtaK(), ...el(...SEN_EL), ...balon(196, 78, anahtar(196, 72, 'sari', .9))], 'ev sahibi; küçük anahtar tahtası; senin elin boş, balonunda anahtar') },
        { tur: 'gor', ses: [ev(HIZLI)], S: sahne(konusuyor('hizli'), 'ev sahibi; balonunda üç sıra sık zikzak çizgi; senin elin') },
        { tur: 'gor', ses: [sen("I don't understand.")], S: sahne(konusuyor('hizli', 'soru'), 'ev sahibinin balonunda sık zikzak; senin balonunda soru işareti') },
        { tur: 'gor', ses: [sen('Speak slowly, please.')], S: sahne(konusuyor('hizli', 'yavasla'), 'ev sahibinin balonunda sık zikzak; senin balonunda küçük zikzak, ok ve aralıklı üç çizgi') },
        { tur: 'gor', ses: [ev('Room three... key... here.')], S: sahne([...evSahibi('ileri'), ...konusma(132, 30, 'yavas'), ...anahtar(...KISI_EL, 'gri', 1.2), ...tahtaK(), ...el(...SEN_EL)], 'ev sahibinin balonunda aralıklı üç çizgi; ev sahibinin elinde gri anahtar') },
        { tur: 'gor', ses: [ev('Here is a key.')], S: sahne([...evSahibi('ileri'), ver(), ...tahtaK(), ...el(...SEN_EL), ...anahtarEl('gri')], 'ev sahibinden sana ok; senin avucunda gri anahtar') },
        { tur: 'gor', ses: [sen('Open. Yes!')], S: sahne([...koridor(3, 'acik'), ...el(...SEN_EL), ...anahtarEl('gri'), ...balon(196, 40, 'evet')], 'kapı 3 açık; senin elinde gri anahtar; senin balonunda yeşil onay') },
        { tur: 'gor', ses: [sen('My key! Here.')], S: sahne([...odaGor(3, [...anahtar(112, 92, 'sari', 1.3), halka(112, 92, 18)]), ...el(...SEN_EL)], 'oda 3: yatağın üstünde halkalı sarı anahtar; senin elin') },
        { tur: 'gor', ses: [sen('Here is your key.')], S: sahne([...evSahibi('asagi', 'mutlu'), iste(), ...tahtaK(), ...el(...SEN_EL), ...anahtarEl('gri')], 'senin elinde gri anahtar, ev sahibine doğru ok') },
      ],
      sorular: [
        // Soru 1 (kare 11): "My key! Here." — anahtarın yeri; şıklar kare 11'in üç hâli (küçük oda). Hikâyede yatakta.
        { tur: 'sec', ses: [sen('My key! Here.')], dogruSes: [sen('My key! Here.')], dogru: 2,
          secenek: [anahtarNerede('pencere'), anahtarNerede('yer'), anahtarNerede('yatak')], birimler: ['en:s:my', 'en:s:key', 'en:s:here'] },
        // Soru 2 (kare 3; düzeltme 3): "Open? No." — avucundaki; şıklar kare 3'ün üç hâli. Hikâyede elin boş: sarı anahtar
        // içeride kalmıştı, gri yedek anahtar henüz verilmemişti.
        { tur: 'sec', ses: [sen('Open? No.')], dogruSes: [sen('Open? No.')], dogru: 1,
          secenek: [kapidaSec('sari'), kapidaSec(null), kapidaSec('gri')], birimler: ['en:s:open', 'en:s:no', 'en:s:key'] },
        // Soru 3 (kare 10; düzeltme 2): "Open. Yes!" — kapıyı açan; şıklar kare 10'un üç hâli. Hikâyede gri (yedek) anahtar:
        // sarı anahtar içeride kalmıştı. Kök kimin anahtarı olduğunu söylemez; yalnız hikâyeyi hatırlayan bilir.
        { tur: 'sec', ses: [sen('Open. Yes!')], dogruSes: [sen('Open. Yes!')], dogru: 0,
          secenek: [acildiSec('gri'), acildiSec('sari'), acildiSec(null)], birimler: ['en:s:open', 'en:s:yes', 'en:s:key'] },
      ] },
  ],
};
