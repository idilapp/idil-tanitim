// Filiz durağı 1: Varış (18 Kasım 2026). Onaylı taslak: taslak/durak-taslaklari.md §2 (29 sayfa, 3 yoklama sorusu).
// Havalimanı, pasaport masası. Kahraman "sen"sin: memur sana konuşur, sağ alttaki el senin elin. Sıfır İngilizce varsayılır, Türkçe yok.
// `the` ve `thank you` Pazar'da öğretilir: burada "Where?" ve "Here." tek sözcüktür. Sayılar çoğul -s'siz.
// Görev 4 (21 Kasım 2026; taslak §9, düzeltme 1): temel ifadeler sahneye eklendi (sayfa 29–43: sorry, no, yes,
// I don't understand, speak slowly, goodbye; kurucu kararı), ardından pratik (5 oyun, 36 etkileşim) ve iki hikâyecik.
// Bilet ve bagaj işleri havayolu görevlisinde (kisi 'gorevli': mavi uçak tabelası ve tezgâh; sesi 'memur' rolü, ev sahibi gibi).
// Söz simgeleri (parca.js): onay = evet, çarpı = hayır, soru işareti = anlamadım; sık zikzak = hızlı söz, aralıklı üç çizgi =
// yavaş söz; "yavaş konuş" isteği zikzak → ok → aralıklı çizgi karşıtlığıyla çizilir. Balonda pasaport ya da bilet = o belge
// isteniyor. Selam: el sallama çizgileri ve masaya gelen ok (çanta elde); veda: açık kapı ve çıkış oku.
import { canta, cantaSira, pasaport, bilet, balon, masa, el, kisi, ok, halka, kapi, isaret, konusma, carpma, okSag, okSol, salla, ucak, SEN_EL } from '../parca.js';

const H = 180;
const sahne = (o, alt) => ({ boy: H, alt, o });
const anl = metin => ({ rol: 'anlatici', metin });
const sen = metin => ({ rol: 'sen', metin });
const mem = metin => ({ rol: 'memur', metin });

const memur = (kol, yuz) => kisi('memur', kol, yuz);
const yer = () => [{ t: 'r', x: 10, y: 126, w: 220, h: 30, rx: 4, f: 'yol' }]; // boş zemin şeridi (nesne yerde)
// sec seçeneği (boy 120'ye sığar): senin elin tek nesnenin hemen altında; nesne parmak uçlarına oturur.
const nesneEl = nesne => sahne([...el(120, 92), ...nesne(120, 54)], 'senin elin ve tek nesne');
const elAlti = ad => nesneEl({ canta: (x, y) => canta(x, y), pasaport, bilet }[ad]);
// Sana uzanan ok: memur isterken (sen -> memur yönü), verirken (memur -> sen).
const iste = () => ok(166, 104, 112, 80);
const ver = nesne => [...memur('ileri'), iste(), ...el(...SEN_EL), ...nesne(185, 116)];

// ---- Görev 4 sahne yardımcıları (gor: boy 180; sec ve eşleştir seçenekleri: her şey y ≤ 112, boy 120–130'a sığar) ----
const gorevli = (kol, yuz) => kisi('gorevli', kol, yuz);                 // havayolu görevlisi (bilet, bagaj)
const verG = nesne => [...gorevli('ileri'), iste(), ...el(...SEN_EL), ...nesne(185, 116)];
const HIZLI = 'Can you put the bag up here on the scale for me, please?';        // görevlinin hızlı ve uzun sözü (anlaşılmaz)
const HIZLI2 = "No, no, that's an old ticket. I need the one for today's flight."; // hikâye 2'de görevlinin hızlı sözü
const KUCUK = [134, 170, 206]; // üç küçük çantanın x'i (aralarında boşluk kalır)
const kucukCantalar = () => KUCUK.flatMap(x => canta(x, 104, 'kahve', .7));
// Selam: memur iki elini sallıyor (sallama çizgileri); sen çantanla masaya geliyorsun (sola ok). Kapı yok.
const sallar = (x, y) => [...salla(x + 24, y, 1), ...salla(x - 24, y, -1)];
const selam = () => [...memur('yukari'), ...sallar(60, 58), ...okSol(178, 122, 100), ...canta(206, 102, 'kahve', .8), ...el(...SEN_EL)];
// Kuyrukta çantan bir yolcuya çarptı (yolcu çerçevesiz figür, şaşkın); çantanın arkasında hareket çizgileri (sağdan sola geldi).
const iz = (x, y, a) => ({ t: 'l', d: [0, 1, 2].map(i => `M${x} ${y + i * a} L${x + 14} ${y + i * a}`).join(' '), w: 1.6, k: 'gri' });
const carpisma = () => [{ t: 'k', x: 98, y: 140, s: 2, kol: 'asagi', yuz: 'sasir' }, ...canta(138, 120), ...carpma(116, 102), iz(166, 110, 10), ...el(...SEN_EL)];
// Kişi konuşuyor (balonunun içi ic); dedin: senin balonunun içi (yoksa balon yok). kim: memur ya da gorevli.
const konusuyor = (kim, ic, dedin, kol = 'ileri', yuz) => [...kim(kol, yuz), ...konusma(132, 30, ic), ...el(...SEN_EL),
  ...(dedin ? balon(200, 96, dedin, dedin === 'yavasla' ? 1.3 : 1) : [])];
// Veda: kişi el sallıyor, sağda açık kapı, çıkışa ok. sozun: sen de el sallayıp konuşuyorsun; yoksa elinde pasaport.
const veda = (sozun, kim = memur) => [...kim('yukari'), ...sallar(60, 58), ...kapi(198, 80, true), ...okSag(116, 168, 96),
  ...el(...SEN_EL), ...(sozun ? [...balon(140, 46), ...salla(204, 134, 1)] : pasaport(185, 116))];
// Alçak platform (bagaj tartısı): görevliyle senin aranda.
const alcak = y => [{ t: 'r', x: 120, y, w: 116, h: 8, rx: 3, f: 'gri' }];

// sec ve eşleştir seçenekleri (boy 120)
const tekSec = nesne => sahne(nesne(120, 80));
const cantaSec = n => sahne(cantaSira(n, 'kahve', 102));
const memurSec = (kol, yuz = 'mutlu') => [{ t: 'r', x: 25, y: 12, w: 54, h: 34, rx: 4, f: 'buz' }, { t: 'k', x: 52, y: 100, s: 1.7, kol, yuz },
  { t: 'r', x: 6, y: 100, w: 92, h: 20, rx: 4, f: 'gri' }];
const gorevliSec = (kol, yuz = 'mutlu') => [{ t: 'r', x: 25, y: 8, w: 54, h: 26, rx: 4, f: 'su' }, ...ucak(52, 21, 'kar', 1.1),
  { t: 'k', x: 52, y: 100, s: 1.7, kol, yuz }, { t: 'r', x: 6, y: 100, w: 92, h: 20, rx: 4, f: 'su' }];
const sallarSec = () => [...salla(76, 54, 1), ...salla(28, 54, -1)];
const dedinSec = ic => sahne([...el(100, 108), ...balon(130, 52, ic, 1.6)]);                            // senin sözün: büyük balon
const selamSec = () => sahne([...memurSec('yukari'), ...sallarSec(), ...okSol(178, 110, 80), ...canta(206, 76, 'kahve', .7)]); // gelen yolcu
const vedaSec = () => sahne([...memurSec('yukari'), ...sallarSec(), ...kapi(196, 62, true), ...okSag(108, 166, 78)]);    // açık kapı, çıkış
const carpismaSec = () => sahne([{ t: 'k', x: 84, y: 112, s: 1.7, kol: 'asagi', yuz: 'sasir' }, ...canta(118, 96, 'kahve', .85), ...carpma(101, 80), iz(142, 88, 8), ...el(190, 106)]);
const derSec = kimSec => (ic, dedin, ek = []) => sahne([...kimSec('ileri'), ...konusma(140, 26, ic),
  ...(dedin ? balon(204, 84, dedin, dedin === 'yavasla' ? 1.2 : 1) : []), ...ek]);
const memurDerSec = derSec(memurSec), gorevliDerSec = derSec(gorevliSec);
// Çantanın içindeki şey: önce nesne, sonra çanta (çantanın gövdesi alt yarısını örter, üstü dışarıda görünür).
const icinde = (i, nesne) => sahne([...nesne([64, 120, 176][i], 66), ...cantaSira(3, 'kahve', 102)]);
// Hikâye 1 arama sayfası (boy 180): üç çanta; i. çanta halkalı, içinde (varsa) nesne; senin balonun (ic).
const ara = (i, nesne, ic) => [...(nesne ? nesne([64, 120, 176][i], nesne === bilet ? 64 : 70) : []), ...cantaSira(3), halka([64, 120, 176][i], 93, 28),
  ...el(...SEN_EL), ...balon(210, 26, ic)];
// Avucunda n bilet, yelpaze gibi (hikâye 2 sorusu: kaç bilet). Hikâyedeki iki bilet sarı ve beyaz; üçüncüsü pembe.
// Zaman sabit: her seçenekte görevli bilet istiyor (hikâyenin 1. karesi), avucunda n bilet (Görev 4 ikinci kör denetim düzeltmesi).
const ELDE = { 1: [['kar', 170, 72]], 2: [['sari', 158, 62], ['kar', 174, 76]], 3: [['sari', 150, 56], ['kar', 166, 70], ['pembe', 182, 84]] };
const eldeBilet = n => sahne([...gorevliSec('ileri'), ...konusma(140, 26, 'bilet'), ...el(186, 108), ...ELDE[n].flatMap(([f, x, y]) => bilet(x, y, f))]);
// Görevlinin hikâyede istedikleri: her istek ayrı balon (biri üstte, biri altta).
const istedi = icler => sahne([...gorevliSec('ileri'), ...icler.flatMap((ic, i) => konusma(150, 26 + i * 44, ic))]);

export default {
  dil: 'en', id: 'varis', no: 1, ad: 'Varış',
  yoklama: [
    // Görev 4: 1. soru temel ifadeye çevrildi ("A passport?" ile 2. soru aynı şeyi yokluyordu; durağın üçte biri artık temel ifade).
    { tur: 'sec', ses: [anl("I don't understand.")], dogruSes: [anl("I don't understand.")], dogru: 2,
      secenek: [dedinSec('evet'), selamSec(), memurDerSec('hizli', 'soru')],
      birimler: ['en:k:i-dont-understand'] },
    { tur: 'sec', ses: [anl('This is a ticket.')], dogruSes: [anl('This is a ticket.')], dogru: 1,
      secenek: [elAlti('canta'), elAlti('bilet'), elAlti('pasaport')],
      birimler: ['en:k:this-is', 'en:s:ticket'] },
    { tur: 'sec', ses: [anl('Three.')], dogruSes: [anl('Three.')], dogru: 0,
      secenek: [sahne(cantaSira(3, 'kahve', 102)), sahne(cantaSira(4, 'kahve', 102)), sahne(cantaSira(2, 'kahve', 102))],
      birimler: ['en:s:three'] },
  ],
  sayfalar: [
    // 1-2: selam
    { tur: 'gor', ses: [mem('Hello.')], S: sahne(selam(), 'memur camın arkasında iki elini sallıyor (sallama çizgileri); sen elinde çantayla masaya geliyorsun (masaya ok)'), yeni: 'en:s:hello', degisen: 'kisi' },
    { tur: 'gor', ses: [sen('Hello.')], S: sahne([...memur('asagi'), ...balon(150, 60), ...el(...SEN_EL), ...salla(204, 134, 1)], 'senin elin sallıyor (sallama çizgileri), konuşma balonu'), degisen: 'eylem' },
    // 3-7: çanta, a, pasaport
    { tur: 'gor', ses: [anl('Bag.')], S: sahne([...yer(), ...canta(120, 106)], 'yerde tek seyahat çantası'), yeni: 'en:s:bag', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('A bag.')], S: sahne([...masa(), ...canta(120, 94)], 'çanta masanın üstünde'), yeni: 'en:y:a', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Passport.')], S: sahne([...el(120, 116), ...pasaport(120, 86)], 'boş avuçta kapaklı pasaport'), yeni: 'en:s:passport', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('A passport.')], S: sahne([...masa(), ...pasaport(80, 94)], 'pasaport masada, yanında boş yer'), degisen: 'nesne' },
    { tur: 'sec', ses: [anl('A passport?')], dogruSes: [anl('A passport.')], dogru: 1,
      secenek: [sahne(canta(120, 80)), sahne(pasaport(120, 80)), sahne(el(120, 80))],
      birimler: ['en:s:passport', 'en:y:a'] },
    // 8-10: bilet
    { tur: 'gor', ses: [anl('Ticket.')], S: sahne(bilet(120, 90), 'uçak simgeli uzun bilet'), yeni: 'en:s:ticket', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('A ticket.')], S: sahne([...masa(), ...pasaport(70, 94), ...bilet(155, 94)], 'bilet masada, pasaportun yanında'), degisen: 'nesne' },
    { tur: 'sec', ses: [anl('A ticket?')], dogruSes: [anl('A ticket.')], dogru: 2,
      secenek: [sahne(pasaport(120, 80)), sahne(canta(120, 80)), sahne(bilet(120, 80))],
      birimler: ['en:s:ticket', 'en:y:a'] },
    // 11-15: this, this is
    { tur: 'gor', ses: [anl('This.')], S: sahne([...canta(185, 106), ...el(...SEN_EL)], 'senin parmağın yakındaki çantaya dokunuyor'), yeni: 'en:s:this', degisen: 'eylem' },
    { tur: 'gor', ses: [anl('This is a bag.')], S: sahne([...canta(185, 106), ...el(...SEN_EL)], 'senin elin çantanın üstünde'), yeni: 'en:k:this-is', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('This is a passport.')], S: sahne([...pasaport(185, 106), ...el(...SEN_EL)], 'senin elin pasaportun üstünde'), degisen: 'nesne' },
    { tur: 'gor', ses: [anl('This is a ticket.')], S: sahne([...bilet(185, 106), ...el(...SEN_EL)], 'senin elin biletin üstünde'), degisen: 'nesne' },
    { tur: 'sec', ses: [anl('This is a passport.')], dogruSes: [anl('This is a passport.')], dogru: 2,
      secenek: [elAlti('canta'), elAlti('bilet'), elAlti('pasaport')],
      birimler: ['en:k:this-is', 'en:s:passport'] },
    // 16-21: please, here, where
    { tur: 'gor', ses: [mem('Passport, please.')], S: sahne([...memur('ileri'), iste(), ...el(...SEN_EL)], 'memur elini sana uzatıyor'), yeni: 'en:s:please', degisen: 'eylem' },
    { tur: 'gor', ses: [sen('Here.')], S: sahne(ver(pasaport), 'senin elin pasaportu uzatıyor'), yeni: 'en:s:here', degisen: 'eylem' },
    { tur: 'gor', ses: [mem('Ticket, please.'), sen('Here.')], S: sahne(verG(bilet), 'havayolu görevlisi (mavi uçak tabelası); senin elinde bilet, görevliye doğru ok'), degisen: 'kisi' },
    { tur: 'gor', ses: [mem('Where?')], S: sahne([...memur('yukari', 'sasir'), ...el(...SEN_EL)], 'memur şaşkın, masa boş, senin elin de boş'), yeni: 'en:s:where', degisen: 'kisi' },
    { tur: 'gor', ses: [sen('Here.')], S: sahne([...memur('asagi'), iste(), ...el(...SEN_EL), ...pasaport(185, 116)], 'senin elin pasaportu memura gösteriyor'), degisen: 'eylem' },
    { tur: 'sec', ses: [anl('Here.')], dogruSes: [anl('Here.')], dogru: 0,
      secenek: [
        sahne([...el(120, 92), ...pasaport(120, 62), ok(100, 70, 50, 30)]),
        sahne(el(120, 92)),
        sahne([{ t: 'r', x: 40, y: 100, w: 160, h: 8, rx: 3, f: 'yol' }, ...canta(120, 80)]),
      ],
      birimler: ['en:s:here'] },
    // 22-28: sayılar 1-5
    { tur: 'gor', ses: [anl('One.')], S: sahne(cantaSira(1), 'tek çanta'), yeni: 'en:s:one', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Two.')], S: sahne(cantaSira(2), 'iki çanta'), yeni: 'en:s:two', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Three.')], S: sahne(cantaSira(3), 'üç çanta'), yeni: 'en:s:three', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Four.')], S: sahne(cantaSira(4), 'dört çanta'), yeni: 'en:s:four', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Five.')], S: sahne(cantaSira(5), 'beş çanta'), yeni: 'en:s:five', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('One, two, three, four, five.')],
      S: sahne([...cantaSira(5), ...[0, 1, 2, 3, 4].map(i => halka(120 + (i - 2) * 44, 96, 20))], 'beş çanta, sırayla halkayla işaretli'), degisen: 'eylem' },
    { tur: 'sec', ses: [anl('Three?')], dogruSes: [anl('Three.')], dogru: 1,
      secenek: [sahne(cantaSira(4, 'kahve', 102)), sahne(cantaSira(3, 'kahve', 102)), sahne(cantaSira(2, 'kahve', 102))],
      birimler: ['en:s:three'] },
    // ---- Görev 4: temel ifadeler (29–43). Kuyrukta çarparsın; havayolu görevlisine yanlış belge verirsin, görevli hızlı
    // konuşur; sonra memurla vedalaşırsın. ----
    // 29: sorry (kuyrukta çarpma)
    { tur: 'gor', ses: [sen('Sorry.')], S: sahne(carpisma(), 'şaşkın yüzlü bir yolcu; çanta ona değiyor, arada çarpma ışınları, çantanın arkasında hareket çizgileri; sağ altta senin elin'), yeni: 'en:s:sorry', degisen: 'kisi' },
    // 30-33: no, yes (sen "This?" diye sorarsın, görevli cevap verir; sonra görevli sorar, sen cevap verirsin)
    { tur: 'gor', ses: [mem('Ticket, please.'), sen('This?'), mem('No.')],
      S: sahne([...verG(pasaport), ...konusma(132, 30, 'hayir')], 'havayolu görevlisi; senin elinde pasaport, görevliye doğru ok; görevlinin balonunda kırmızı çarpı'), yeni: 'en:s:no', degisen: 'kisi' },
    { tur: 'gor', ses: [sen('Sorry. This?'), mem('Yes.')],
      S: sahne([...verG(bilet), ...konusma(132, 30, 'evet')], 'senin elinde bilet, görevliye doğru ok; görevlinin balonunda yeşil onay'), yeni: 'en:s:yes', degisen: 'nesne' },
    { tur: 'sec', ses: [anl('Yes.')], dogruSes: [anl('Yes.')], dogru: 1,
      secenek: [gorevliDerSec('hayir', null, pasaport(196, 84)), gorevliDerSec('evet', null, bilet(196, 92)), carpismaSec()],
      birimler: ['en:s:yes'] },
    { tur: 'gor', ses: [mem('Three?'), sen('Yes.')],
      S: sahne([...gorevli('ileri'), ...kucukCantalar(), ...el(...SEN_EL), ...balon(200, 40, 'evet')], 'görevli kolunu uzatmış; yerde üç küçük çanta; senin elin ve balonunda yeşil onay'), degisen: 'eylem' },
    { tur: 'sec', ses: [anl('Sorry.')], dogruSes: [anl('Sorry.')], dogru: 0,
      secenek: [carpismaSec(), dedinSec('evet'), selamSec()],
      birimler: ['en:s:sorry'] },
    // 35-40: I don't understand, speak slowly (görevli hızlı ve uzun konuşur; yavaşlayınca anlaşılır)
    { tur: 'gor', ses: [mem(HIZLI)], S: sahne(konusuyor(gorevli, 'hizli'), 'görevli; balonunda üç sıra sık zikzak çizgi; senin elin'), degisen: 'kisi' },
    { tur: 'gor', ses: [sen("I don't understand.")], S: sahne(konusuyor(gorevli, 'hizli', 'soru'), 'görevlinin balonunda sık zikzak; senin balonunda soru işareti'), yeni: 'en:k:i-dont-understand', degisen: 'eylem' },
    { tur: 'gor', ses: [sen('Speak slowly, please.')], S: sahne(konusuyor(gorevli, 'hizli', 'yavasla'), 'görevlinin balonunda sık zikzak; senin balonunda küçük zikzak, ok ve aralıklı üç çizgi'), yeni: 'en:k:speak-slowly', degisen: 'eylem' },
    { tur: 'gor', ses: [mem('Bag... here... please.')],
      S: sahne([...gorevli('ileri'), ...konusma(132, 30, 'yavas'), ...alcak(110), ...canta(165, 90, 'kahve', .8), halka(165, 88, 26), ...el(...SEN_EL)], 'görevlinin balonunda aralıklı üç çizgi; alçak tartıda halkalı bir çanta; senin elin'), degisen: 'eylem' },
    { tur: 'sec', ses: [anl("I don't understand.")], dogruSes: [anl("I don't understand.")], dogru: 2,
      secenek: [carpismaSec(), dedinSec('evet'), gorevliDerSec('hizli', 'soru')],
      birimler: ['en:k:i-dont-understand'] },
    { tur: 'sec', ses: [anl('Speak slowly, please.')], dogruSes: [anl('Speak slowly, please.')], dogru: 1,
      secenek: [dedinSec('hayir'), gorevliDerSec('hizli', 'yavasla'), selamSec()],
      birimler: ['en:k:speak-slowly'] },
    // 41-43: goodbye (açık kapı ve çıkış oku; selamda masaya gelen ok)
    { tur: 'gor', ses: [mem('Goodbye.')], S: sahne(veda(false), 'memur iki elini sallıyor (sallama çizgileri); sağda açık kapı ve kapıya giden ok; senin elinde pasaport'), yeni: 'en:s:goodbye', degisen: 'kisi' },
    { tur: 'gor', ses: [sen('Goodbye.')], S: sahne(veda(true), 'memur el sallıyor; sen de el sallıyorsun (sallama çizgileri), konuşma balonun; sağda açık kapı ve ok'), degisen: 'eylem' },
    { tur: 'sec', ses: [anl('Goodbye.')], dogruSes: [anl('Goodbye.')], dogru: 0,
      secenek: [vedaSec(), gorevliDerSec('hizli', 'soru'), carpismaSec()],
      birimler: ['en:s:goodbye'] },
    // Yazı perdesi
    { tur: 'yazi', birimler: ['en:s:hello', 'en:s:bag', 'en:y:a', 'en:s:passport', 'en:s:ticket', 'en:s:this', 'en:k:this-is', 'en:s:please', 'en:s:here', 'en:s:where', 'en:s:one', 'en:s:two', 'en:s:three', 'en:s:four', 'en:s:five',
      'en:s:sorry', 'en:s:no', 'en:s:yes', 'en:k:i-dont-understand', 'en:k:speak-slowly', 'en:s:goodbye'] },
  ],

  // ---- Pratik (Görev 4; taslak §9.2): 5 oyun = 5 tür, 36 etkileşim. Bir "oyun" aynı türden art arda gelen turlardır
  // (eşleştir 2 tahta, boşluk 5, ne derdin 6, sırala 5, hızlı tur 1 × 12 soru). Yalnız Varış birimleri (durak 1'de önceki durak yok).
  pratik: [
    // Oyun 1 · eşleştir (2 tahta, 8 çift): nesne ve sayı; sonra temel ifadeler
    { tur: 'eslestir', ciftler: [
      { ses: [anl('Passport.')], S: tekSec(pasaport), birim: 'en:s:passport' },
      { ses: [anl('Ticket.')], S: tekSec(bilet), birim: 'en:s:ticket' },
      { ses: [anl('Three.')], S: cantaSec(3), birim: 'en:s:three' },
      { ses: [anl('Five.')], S: cantaSec(5), birim: 'en:s:five' },
    ] },
    { tur: 'eslestir', ciftler: [
      { ses: [sen('Yes.')], S: dedinSec('evet'), birim: 'en:s:yes' },
      { ses: [sen('Sorry.')], S: carpismaSec(), birim: 'en:s:sorry' },
      { ses: [sen("I don't understand.")], S: memurDerSec('hizli', 'soru'), birim: 'en:k:i-dont-understand' },
      { ses: [mem('Goodbye.')], S: vedaSec(), birim: 'en:s:goodbye' },
    ] },
    // Oyun 2 · boşluk (5): cümle çalar, eksik sözcüğün resmi seçilir
    { tur: 'bosluk', ses: [mem('Passport, please.')], metin: '___, please.',
      secenek: [tekSec(bilet), tekSec(pasaport), tekSec(canta)], dogru: 1, birimler: ['en:s:passport'] },
    { tur: 'bosluk', ses: [anl('This is a bag.')], metin: 'This is a ___.',
      secenek: [tekSec(pasaport), tekSec(bilet), tekSec(canta)], dogru: 2, birimler: ['en:s:bag'] },
    { tur: 'bosluk', ses: [mem('Ticket, please.')], metin: '___, please.',
      secenek: [tekSec(pasaport), tekSec(canta), tekSec(bilet)], dogru: 2, birimler: ['en:s:ticket'] },
    { tur: 'bosluk', ses: [anl('One, two, three, four.')], metin: 'One, two, three, ___.',
      secenek: [cantaSec(4), cantaSec(5), cantaSec(3)], dogru: 0, birimler: ['en:s:four'] },
    { tur: 'bosluk', ses: [sen('This?'), mem('No.')], metin: 'This? ___.',
      secenek: [gorevliDerSec('evet'), gorevliDerSec('hizli'), gorevliDerSec('hayir')], dogru: 2, birimler: ['en:s:no'] },
    // Oyun 3 · ne derdin? (6): durum resmi, üç sesli cevaptan uygun olanı. Resim cevabı göstermez (senin balonun yok).
    { tur: 'nederdin', S: sahne(selam(), 'memur iki elini sallıyor; sen elinde çantayla masaya geliyorsun'),
      secenekSes: [[sen('Hello.')], [sen('Sorry.')], [sen('Speak slowly, please.')]], dogru: 0, birimler: ['en:s:hello'] },
    { tur: 'nederdin', S: sahne(carpisma(), 'şaşkın yüzlü bir yolcu; çanta ona değiyor, çarpma ışınları; senin elin'),
      secenekSes: [[sen('Yes.')], [sen('Sorry.')], [sen('Goodbye.')]], dogru: 1, birimler: ['en:s:sorry'] },
    { tur: 'nederdin', S: sahne(konusuyor(memur, 'hizli'), 'memur; balonunda üç sıra sık zikzak çizgi; senin elin'),
      secenekSes: [[sen('Hello.')], [sen('Here.')], [sen("I don't understand.")]], dogru: 2, birimler: ['en:k:i-dont-understand'] },
    { tur: 'nederdin', S: sahne([...memur('ileri'), ...konusma(132, 30, 'pasaport'), ...el(...SEN_EL), ...pasaport(185, 116)], 'memur kolunu uzatmış, balonunda pasaport; senin elinde pasaport'),
      secenekSes: [[sen('Here.')], [sen('Where?')], [sen('Goodbye.')]], dogru: 0, birimler: ['en:s:here'] },
    { tur: 'nederdin', S: sahne(veda(false), 'memur iki elini sallıyor; sağda açık kapı ve kapıya giden ok; senin elinde pasaport'),
      secenekSes: [[sen('Sorry.')], [sen('No.')], [sen('Goodbye.')]], dogru: 2, birimler: ['en:s:goodbye'] },
    { tur: 'nederdin', S: sahne(konusuyor(gorevli, 'hizli'), 'havayolu görevlisi; balonunda üç sıra sık zikzak çizgi; senin elin'),
      secenekSes: [[sen('Goodbye.')], [sen('Speak slowly, please.')], [sen('Yes.')]], dogru: 1, birimler: ['en:k:speak-slowly'] },
    // Oyun 4 · sırala (5): duyduğun cümleyi sözcük kartlarıyla kur
    { tur: 'sirala', ses: [anl('This is a ticket.')], parcalar: ['This', 'is', 'a', 'ticket.'], birimler: ['en:k:this-is', 'en:y:a', 'en:s:ticket'] },
    { tur: 'sirala', ses: [mem('Hello. Passport, please.')], parcalar: ['Hello.', 'Passport,', 'please.'], birimler: ['en:s:hello', 'en:s:passport', 'en:s:please'] },
    { tur: 'sirala', ses: [sen("Sorry, I don't understand.")], parcalar: ['Sorry,', 'I', "don't", 'understand.'], birimler: ['en:s:sorry', 'en:k:i-dont-understand'] },
    { tur: 'sirala', ses: [mem('No. This is a passport.')], parcalar: ['No.', 'This', 'is', 'a', 'passport.'], birimler: ['en:s:no', 'en:k:this-is', 'en:s:passport'] },
    { tur: 'sirala', ses: [sen('Speak slowly, please.')], parcalar: ['Speak', 'slowly,', 'please.'], birimler: ['en:k:speak-slowly', 'en:s:please'] },
    // Oyun 5 · hızlı tur (60 sn, 12 soru)
    { tur: 'hizli', sure: 60, sorular: [
      { tur: 'sec', ses: [anl('Passport.')], dogruSes: [anl('Passport.')], secenek: [tekSec(pasaport), tekSec(canta), tekSec(bilet)], dogru: 0, birimler: ['en:s:passport'] },
      { tur: 'sec', ses: [anl('Bag.')], dogruSes: [anl('Bag.')], secenek: [tekSec(bilet), tekSec(canta), tekSec(pasaport)], dogru: 1, birimler: ['en:s:bag'] },
      { tur: 'sec', ses: [anl('Ticket.')], dogruSes: [anl('Ticket.')], secenek: [tekSec(canta), tekSec(pasaport), tekSec(bilet)], dogru: 2, birimler: ['en:s:ticket'] },
      { tur: 'sec', ses: [anl('Two.')], dogruSes: [anl('Two.')], secenek: [cantaSec(2), cantaSec(1), cantaSec(3)], dogru: 0, birimler: ['en:s:two'] },
      { tur: 'sec', ses: [anl('Five.')], dogruSes: [anl('Five.')], secenek: [cantaSec(4), cantaSec(5), cantaSec(3)], dogru: 1, birimler: ['en:s:five'] },
      { tur: 'sec', ses: [anl('One.')], dogruSes: [anl('One.')], secenek: [cantaSec(3), cantaSec(2), cantaSec(1)], dogru: 2, birimler: ['en:s:one'] },
      { tur: 'sec', ses: [anl('Four.')], dogruSes: [anl('Four.')], secenek: [cantaSec(4), cantaSec(2), cantaSec(5)], dogru: 0, birimler: ['en:s:four'] },
      { tur: 'sec', ses: [anl('Hello.')], dogruSes: [anl('Hello.')], secenek: [carpismaSec(), selamSec(), dedinSec('evet')], dogru: 1, birimler: ['en:s:hello'] },
      { tur: 'sec', ses: [anl('Sorry.')], dogruSes: [anl('Sorry.')], secenek: [dedinSec('hayir'), selamSec(), carpismaSec()], dogru: 2, birimler: ['en:s:sorry'] },
      { tur: 'sec', ses: [anl('Yes.')], dogruSes: [anl('Yes.')], secenek: [dedinSec('evet'), dedinSec('hayir'), dedinSec('soru')], dogru: 0, birimler: ['en:s:yes'] },
      { tur: 'sec', ses: [anl('No.')], dogruSes: [anl('No.')], secenek: [dedinSec('soru'), dedinSec('hayir'), dedinSec('evet')], dogru: 1, birimler: ['en:s:no'] },
      { tur: 'sec', ses: [anl('Goodbye.')], dogruSes: [anl('Goodbye.')], secenek: [carpismaSec(), memurDerSec('hizli', 'soru'), vedaSec()], dogru: 2, birimler: ['en:s:goodbye'] },
    ] },
    // ---- Ek iş G (duyum yolu, 23 Kasım 2026): sona eklenen oyun (eski oyunların sırası ve anahtarı değişmez). this yalnız bir hikâye
    // sorusundaydı. Oyun 6 · ne derdin?: görevli bilet istiyor, sen pasaportu uzatıyorsun (sahne 31'in hâli, görevlinin cevabı yok);
    // "Here." şıkta yok (o da uyardı). Senin balonun yok.
    { tur: 'nederdin', S: sahne([...verG(pasaport), ...konusma(132, 30, 'bilet')], 'havayolu görevlisi kolunu uzatmış, balonunda bilet; senin elinde pasaport, görevliye doğru ok'),
      secenekSes: [[sen('Goodbye.')], [sen('This?')], [sen('Speak slowly, please.')]], dogru: 1, birimler: ['en:s:this'] },
  ],

  // ---- Hikâyecikler (Görev 4; taslak §9.3): yeni birim yok, yalnız Varış birimleri. Sonunda 3 anlama sorusu; sorular hikâyeyi
  // hatırlamayı ister (Codex düzeltmesi: ilk iki soru "Passport? Where?" ve "Ticket? Where?" kalıbında; "is the" bu durakta yok).
  hikayeler: [
    // 1 · Pasaport nerede? Memur pasaport ister; elin boş. Üç çantana bakarsın: birincide bilet, ikinci boş, üçüncüde pasaport.
    { id: 'pasaport', ad: 'Passport? Where?',
      sayfalar: [
        { tur: 'gor', ses: [mem('Hello.')], S: sahne([...memur('yukari'), ...sallar(60, 58), ...kucukCantalar(), ...el(...SEN_EL)], 'memur iki elini sallıyor; yerde üç küçük çanta; senin elin') },
        { tur: 'gor', ses: [sen('Hello.')], S: sahne([...memur('asagi'), ...kucukCantalar(), ...el(...SEN_EL), ...salla(204, 134, 1), ...balon(200, 40)], 'sen el sallıyorsun, konuşma balonun; yerde üç küçük çanta') },
        { tur: 'gor', ses: [mem('Passport, please.')], S: sahne([...memur('ileri'), ...konusma(132, 30, 'pasaport'), ...el(...SEN_EL)], 'memur kolunu uzatmış, balonunda pasaport; senin elin boş') },
        { tur: 'gor', ses: [sen('Passport? Where?')], S: sahne([...cantaSira(3), ...el(...SEN_EL), ...balon(210, 26, 'pasaport')], 'üç çanta; senin boş elin; senin balonunda pasaport') },
        { tur: 'gor', ses: [sen('One? No. A ticket.')], S: sahne(ara(0, bilet, 'hayir'), 'birinci çanta halkalı, içinden bilet görünüyor; senin balonunda kırmızı çarpı') },
        { tur: 'gor', ses: [sen('Two? No.')], S: sahne(ara(1, null, 'hayir'), 'ikinci çanta halkalı, içi boş; senin balonunda kırmızı çarpı') },
        { tur: 'gor', ses: [sen('Three? Yes!')], S: sahne(ara(2, pasaport, 'evet'), 'üçüncü çanta halkalı, içinden pasaport görünüyor; senin balonunda yeşil onay') },
        { tur: 'gor', ses: [sen('Sorry. Here.')], S: sahne(ver(pasaport), 'memur kolunu uzatmış; senin elinde pasaport, memura doğru ok') },
        { tur: 'gor', ses: [mem('Goodbye.'), sen('Goodbye.')], S: sahne(veda(true), 'memur ve sen el sallıyorsunuz; senin konuşma balonun; sağda açık kapı ve ok') },
      ],
      sorular: [
        // Codex düzeltmesi (22 Kasım): "is the" durakta öğretilmedi; kökler hikâyenin kendi kalıbıyla, dogruSes hikâye satırına bağlı.
        { tur: 'sec', ses: [sen('Passport? Where?')], dogruSes: [sen('Three? Yes!')], dogru: 2,
          secenek: [icinde(0, pasaport), icinde(1, pasaport), icinde(2, pasaport)], birimler: ['en:s:passport', 'en:s:where', 'en:s:three'] },
        { tur: 'sec', ses: [sen('Ticket? Where?')], dogruSes: [sen('One? No. A ticket.')], dogru: 0,
          secenek: [icinde(0, bilet), icinde(1, bilet), icinde(2, bilet)], birimler: ['en:s:ticket', 'en:s:where', 'en:s:one'] },
        // Görev 10 düzeltmesi: yalnız Varış birimleriyle; hikâyedeki "Two? No." satırına dayanır (ikinci çanta boştu).
        { tur: 'sec', ses: [anl('Two? Passport?')], dogruSes: [sen('Two? No.')], dogru: 1,
          secenek: [dedinSec('evet'), dedinSec('hayir'), carpismaSec()], birimler: ['en:s:two', 'en:s:passport', 'en:s:no'] },
      ] },
    // 2 · Yanlış bilet: havayolu görevlisi bilet ister; elinde iki bilet var (sarı eski, beyaz yeni). Sarıyı verirsin; görevli
    // "No." der ve hızlı konuşur. Anlamazsın, yavaş konuşmasını istersin; görevli yavaşça gösterir: sarı hayır, beyaz evet.
    { id: 'bilet', ad: 'Ticket, please',
      sayfalar: [
        { tur: 'gor', ses: [mem('Hello. Ticket, please.')], S: sahne([...gorevli('ileri'), ...konusma(132, 30, 'bilet'), ...el(...SEN_EL), ...bilet(172, 104, 'sari'), ...bilet(190, 118)], 'havayolu görevlisi kolunu uzatmış, balonunda bilet; senin elinde iki bilet, sarı ve beyaz') },
        { tur: 'gor', ses: [sen('This?')], S: sahne([...gorevli('ileri'), iste(), ...el(...SEN_EL), ...bilet(185, 116, 'sari')], 'senin elinde sarı bilet, görevliye doğru ok') },
        { tur: 'gor', ses: [mem('No.')], S: sahne([...gorevli('ileri'), ...konusma(132, 30, 'hayir'), ...el(...SEN_EL), ...bilet(185, 116, 'sari')], 'görevlinin balonunda kırmızı çarpı; senin elinde sarı bilet') },
        { tur: 'gor', ses: [mem(HIZLI2)], S: sahne(konusuyor(gorevli, 'hizli'), 'görevli; balonunda üç sıra sık zikzak çizgi; senin elin') },
        { tur: 'gor', ses: [sen("Sorry, I don't understand.")], S: sahne(konusuyor(gorevli, 'hizli', 'soru'), 'görevlinin balonunda sık zikzak; senin balonunda soru işareti') },
        { tur: 'gor', ses: [sen('Speak slowly, please.')], S: sahne(konusuyor(gorevli, 'hizli', 'yavasla'), 'görevlinin balonunda sık zikzak; senin balonunda küçük zikzak, ok ve aralıklı üç çizgi') },
        { tur: 'gor', ses: [mem('This... no. This... yes.')],
          S: sahne([...gorevli('ileri'), ...konusma(132, 30, 'yavas'), ...bilet(164, 86, 'sari'), ...bilet(164, 124), ...isaret(218, 93, 'hayir'), ...isaret(218, 131, 'evet')], 'görevlinin balonunda aralıklı üç çizgi; sarı bilet ve yanında kırmızı çarpı; altında beyaz bilet ve yanında yeşil onay') },
        { tur: 'gor', ses: [sen('Sorry. Here.')], S: sahne(verG(bilet), 'senin elinde beyaz bilet, görevliye doğru ok') },
        { tur: 'gor', ses: [mem('Passport, please.')], S: sahne([...gorevli('ileri'), ...konusma(132, 30, 'pasaport'), ...el(...SEN_EL), ...pasaport(185, 116)], 'görevlinin balonunda pasaport; senin elinde pasaport') },
        { tur: 'gor', ses: [sen('Here.')], S: sahne(verG(pasaport), 'senin elinde pasaport, görevliye doğru ok') },
        { tur: 'gor', ses: [mem('Goodbye.'), sen('Goodbye.')], S: sahne(veda(true, gorevli), 'görevli ve sen el sallıyorsunuz; senin konuşma balonun; sağda açık kapı ve ok') },
      ],
      sorular: [
        // Görev 10 ve ikinci kör denetim düzeltmesi: soru 1 baştaki bilet sayısı (iki; resimler görevlinin bilet istediği anı
        // gösterir), soru 2 hangi bilet (beyaz), soru 3 görevli ne istedi (bilet ve pasaport): üç ayrı olgu, yalnız Varış birimleriyle.
        // Dördüncü kör denetim: kök hikâyede bir kez geçen satır (kare 1); şıklar o karenin üç hâli, yalnız avuçtaki bilet sayısı değişir.
        { tur: 'sec', ses: [mem('Hello. Ticket, please.')], dogruSes: [mem('Hello. Ticket, please.')], dogru: 1,
          secenek: [eldeBilet(1), eldeBilet(2), eldeBilet(3)], birimler: ['en:s:ticket', 'en:s:two'] },
        { tur: 'sec', ses: [mem('This... yes.')], dogruSes: [mem('This... yes.')], dogru: 2,
          secenek: [sahne(bilet(120, 80, 'sari')), tekSec(pasaport), tekSec(bilet)], birimler: ['en:s:this', 'en:s:yes', 'en:s:ticket'] },
        { tur: 'sec', ses: [anl('Passport? Ticket?')], dogruSes: [mem('Ticket, please.'), mem('Passport, please.')], dogru: 1,
          secenek: [istedi(['pasaport']), istedi(['bilet', 'pasaport']), istedi(['bilet'])], birimler: ['en:s:passport', 'en:s:ticket', 'en:s:please'] },
      ] },
  ],
};
