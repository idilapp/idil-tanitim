// Filiz durağı 3: Pazar (18 Kasım 2026). Denemedeki (tasarim/filiz/sahneler.js) 23 sayfanın yeni biçimi.
// Kahraman "sen"sin: pazarcı sana konuşur, sağ alttaki el senin elin. Türkçe yok; her gor sayfasında en çok bir yeni birim.
// Görev 4 (Dalga 1, 23 Kasım 2026; taslak §11): pratik (5 oyun dizisi, 5 tür, 37 etkileşim) ve iki hikâyecik ("Apples, please"
// pazarlık; "Sorry!" yanlış elma ve tezgâhta unutulan anahtar). Yeni birim yok; Varış ve Barınma birimleri geri döner (sayılar,
// bag, key, passport, ticket, hello, here, goodbye, yes, no, sorry, please, speak slowly, my, your). Bütün roller iDil sesiyle
// konuşur; pazarcı `kisi('pazarci')` (pembe tente, kraft tezgâh). Uzlaşımlar (onaylı sahneyle aynı): "take" = pazarcıdan sana ok,
// "give me" = senden pazarcıya ok, "the X" = üç nesneden biri halkalı. Yeni: balonda para = söylenen fiyat; avuçta para = ödenen.
// Sec seçenekleri oynatıcıda boy 120 penceresinde çizilir (sahne boyu 180 olsa da y > 120 kesilir); ana öğeler y ≤ 112.
import { elma, leke, araba, top, gomlek, el, kisi, ok, halka, canta, anahtar, pasaport, bilet, balon, konusma, salla, okSag, paraSira, KISI_EL, SEN_EL } from '../parca.js';

const H = 180;
const sahne = (o, alt) => ({ boy: H, alt, o });
const anl = metin => ({ rol: 'anlatici', metin });
const paz = metin => ({ rol: 'pazarci', metin });

const ucNesne = f => [...araba(14, 92, f), ...top(120, 100, f), ...gomlek(196, 98, f)];
const ucElma = () => [...elma(55, 96, 'green', 20), ...elma(120, 96, 'yellow', 20), ...elma(185, 96, 'red', 20)];
const pazarci = (kol, yuz) => kisi('pazarci', kol, yuz);

// ---- Görev 4 (Dalga 1) yardımcıları ----
const sen = metin => ({ rol: 'sen', metin });
const vers = () => ok(112, 84, 168, 112);   // pazarcıdan sana (take), onaylı sahnedeki ok
const iste = () => ok(166, 104, 112, 80);   // senden pazarcıya (give me), onaylı sahnedeki ok
const sallar = (x, y) => [...salla(x + 24, y, 1), ...salla(x - 24, y, -1)];
const TEZ_X = [28, 50, 72];
// Pazarcının tezgâhının üstünde üç elma (tezgâhın önünde, pazarcının hizasında); halkaI: halkalı elma; anahtarVar: tezgâhın
// sağ ucunda senin sarı anahtarın (anahtarHalka: halkalı). Sağ taraf ok, balon ve senin elin için boş kalır.
const tezgah = (renkler, halkaI = null, anahtarVar = false, anahtarHalka = false) => [
  ...renkler.flatMap((f, i) => elma(TEZ_X[i], 103, f, 9)),
  ...(halkaI === null ? [] : [halka(TEZ_X[halkaI], 101, 14)]),
  ...(anahtarVar ? anahtar(100, 106, 'sari', .7) : []),
  ...(anahtarHalka ? [halka(98, 106, 15)] : []),
];
const RGY = ['red', 'green', 'yellow'];
const kucukElmalar = (x, y, renkler = RGY, rr = 6) => renkler.flatMap((f, i) => elma(x + (i - (renkler.length - 1) / 2) * 14, y, f, rr));
const benimBalon = ic => balon(200, 40, ic);                        // senin balonun (sağ üst)
const pazBalon = ic => konusma(132, 30, ic);                         // pazarcının balonu
const paraBalonPaz = n => pazBalon(paraSira(n, 132, 30, .72));       // pazarcının söylediği fiyat
const paraBalonSen = n => benimBalon(paraSira(n, 200, 35, .62));     // senin söylediğin fiyat

// sec ve eşleştir seçenekleri (oynatıcı boy 120/130 penceresinde çizer; ana öğeler y ≤ 112)
const s1 = (o, alt) => sahne(o, alt);
const UC_X = [52, 120, 188];
const ucCanta = i => s1([...UC_X.flatMap((x, k) => canta(x, 72, RGY[k], .85)), ...(i === null ? [] : [halka(UC_X[i], 66, 34)])],
  'kırmızı, yeşil ve sarı çanta' + (i === null ? '' : `; ${['kırmızı', 'yeşil', 'sarı'][i]} çanta halkalı`));
const ucAnahtar = i => s1([...UC_X.flatMap((x, k) => anahtar(x + 4, 60, RGY[k], 1.4)), ...(i === null ? [] : [halka(UC_X[i], 60, 34)])],
  'kırmızı, yeşil ve sarı anahtar' + (i === null ? '' : `; ${['kırmızı', 'yeşil', 'sarı'][i]} anahtar halkalı`));
const ELMA_AD = { red: 'kırmızı', green: 'yeşil', yellow: 'sarı' };
const tekElma = f => s1(elma(120, 62, f, 30), `${ELMA_AD[f]} elma`);
const SAYI_AD = { 1: 'bir', 2: 'iki', 3: 'üç', 4: 'dört', 5: 'beş' };
const elmaSira = n => s1(Array.from({ length: n }, (_, i) => elma(120 + (i - (n - 1) / 2) * 38, 66, 'red', 16)).flat(), n === 1 ? 'bir kırmızı elma' : `${SAYI_AD[n]} kırmızı elma yan yana`);
const anahtarR = f => s1(anahtar(124, 60, f, 2), `${ELMA_AD[f]} anahtar`);
const cantaR = f => s1(canta(120, 62, f), `${ELMA_AD[f]} çanta`);
// Sahnedeki gibi üç elma (yeşil, sarı, kırmızı); i: halkalı olan.
const UC_E = [['green', 55], ['yellow', 120], ['red', 185]];
const ucElmaSec = i => s1([...UC_E.flatMap(([f, x]) => elma(x, 64, f, 22)), halka(UC_E[i][1], 60, 32)], `yeşil, sarı ve kırmızı elma; ${ELMA_AD[UC_E[i][0]]} elma halkalı`);
const tekCanta = () => s1(canta(120, 62), 'kahverengi çanta');
const tekAnahtar = () => s1(anahtar(120, 60, 'sari', 2), 'sarı anahtar');
const tekPasaport = () => s1(pasaport(120, 60), 'pasaport');
const tekBilet = () => s1(bilet(120, 54), 'bilet');
// Küçük pazarcı (boy 120): pembe tente, direkler, kraft tezgâh (memurun gri masası ve ev sahibinin anahtar tahtasından ayrışır).
const pazarciSec = (kol = 'ileri', yuz = 'mutlu') => [{ t: 'p', d: 'M8 8 L96 8 L89 22 L15 22 Z', f: '#FF9EC7' },
  { t: 'l', d: 'M18 22 L18 100 M86 22 L86 100', w: 1.4 }, { t: 'k', x: 52, y: 100, s: 1.7, kol, yuz },
  { t: 'r', x: 6, y: 100, w: 92, h: 20, rx: 4, f: 'kraft' }];
const sallarSec = () => [...salla(76, 54, 1), ...salla(28, 54, -1)];
const PAZ_EL = [88, 66];   // küçük pazarcının eli
const takeSec = () => s1([...pazarciSec('ileri'), ...elma(...PAZ_EL, 'red', 11), ok(100, 70, 172, 92), ...el(190, 108)],
  'pazarcının elinde kırmızı elma; pazarcıdan sana ok; senin elin boş');
const giveSec = () => s1([...pazarciSec('ileri'), ok(166, 92, 106, 66), ...el(190, 108, 'red')],
  'senin avucunda kırmızı elma; senden pazarcıya ok');
const selamSec = () => s1([...pazarciSec('yukari'), ...sallarSec(), ...el(190, 108)], 'pazarcı iki elini sallıyor; senin elin boş');
// Hikâye 1 soru 1 (kare 5): tezgâhta üç elma (renk f), pazarcının balonunda beş para.
const fiyatSec = f => s1([...pazarciSec('ileri'), ...konusma(150, 26, paraSira(5, 150, 26, .72)),
  ...[24, 44, 64].flatMap(x => elma(x, 92, f, 8))], `pazarcının balonunda beş para; tezgâhta üç ${ELMA_AD[f]} elma`);
// Hikâye 1 soru 2 (kare 9): senin avucunda n para, senden pazarcıya ok.
const odeSec = n => s1([...pazarciSec('ileri'), ok(166, 92, 106, 66), ...el(190, 108), ...paraSira(n, 190, 86, .85)],
  `senin avucunda ${SAYI_AD[n]} para; senden pazarcıya ok`);
// Hikâye 1 soru 3 (kare 12) ve hikâye 2 soru 3 (kare 8): avucunda f renkli elma, senin konuşma balonun (ic).
const avucSec = (yuz, ic, ek = []) => f => s1([...pazarciSec(yuz === 'salla' ? 'yukari' : 'asagi'), ...(yuz === 'salla' ? sallarSec() : []), ...ek,
  ...el(190, 108, f), ...balon(204, 34, ic)], `${yuz === 'salla' ? 'pazarcı el sallıyor; ' : ''}senin avucunda ${ELMA_AD[f]} elma; ${ic === 'evet' ? 'senin balonunda yeşil onay' : 'senin konuşma balonun'}`);
const vedaSec = avucSec('salla');
// Hikâye 1 soru 1 (kare 10; düzeltme 1): pazarcıdan sana ok; elinde kahverengi çanta, içinden f renkli elmalar görünüyor.
const cantaElmaSec = f => s1([...pazarciSec('ileri'), ok(100, 70, 172, 86), ...el(190, 108), ...elma(182, 84, f, 7), ...elma(196, 82, f, 7),
  ...canta(190, 102, 'kahve', .7)], `pazarcıdan sana ok; senin elinde kahverengi çanta, içinden ${ELMA_AD[f]} elmalar görünüyor`);
// Hikâye 2 soru 1 (kare 6; düzeltme 1): pazarcı şaşkın; avucunda f renkli elma, senden pazarcıya ok.
const geriSec = f => s1([...pazarciSec('ileri', 'sasir'), ok(166, 92, 106, 66), ...el(190, 108, f)], `pazarcı şaşkın; senin avucunda ${ELMA_AD[f]} elma, senden pazarcıya ok`);
// Hikâye 2 soru 3 (kare 8; düzeltme 1): avucunda n kırmızı elma, senin balonunda onay.
const UC_AVUC = { 1: [[190, 90]], 2: [[182, 90], [198, 90]], 3: [[178, 92], [194, 92], [186, 78]] };
const avucElma = (n, x0 = 0, y0 = 0) => UC_AVUC[n].flatMap(([x, y]) => elma(x + x0, y + y0, 'red', 8));
const kacSec = n => s1([...pazarciSec('asagi'), ...el(190, 108), ...avucElma(n), ...balon(204, 34, 'evet')], `senin avucunda ${SAYI_AD[n]} kırmızı elma; senin balonunda yeşil onay`);
// Hikâye 2 soru 2 (kare 9): sen gidiyorsun (sağa ok); tezgâhın sağ ucunda halkalı bir şey kaldı. Düzeltme 2: üç nesne aynı boyda
// (yaklaşık 26 birim), tarifler aynı kalıpta.
const KALAN = {
  anahtar: [() => anahtar(86, 94, 'sari', .8), 'sarı anahtar'],
  pasaport: [() => [{ t: 'r', x: 77, y: 79, w: 18, h: 24, rx: 2, f: '#3B5BA9' }, { t: 'c', x: 86, y: 88, r: 4, f: 'sari' }], 'mavi pasaport'],
  canta: [() => canta(86, 93, 'kahve', .55), 'kahverengi çanta'],
};
const kaldiSec = ne => s1([...pazarciSec('yukari'), ...sallarSec(), ...KALAN[ne][0](), halka(86, 91, 16), ...okSag(130, 230, 40)],
  `pazarcı el sallıyor; tezgâhın sağ ucunda halkalı ${KALAN[ne][1]}; sağa giden ok`);

const HIK1_TEZ = () => tezgah(RGY, 1);   // kare 5–8: yeşil elma halkalı kalır (seçilen)
const HIK2_TEZ = (halkaI = null) => tezgah(['yellow', 'red', 'green'], halkaI, true);

export default {
  dil: 'en', id: 'pazar', no: 3, ad: 'Pazar',
  // Okulda öğrenmiş birinin hızlı dinleme yoklaması: 3/3 doğruysa durak atlanır.
  yoklama: [
    { tur: 'sec', ses: [anl('The red apple?')], dogruSes: [anl('The red apple.')], dogru: 2,
      secenek: [sahne([...ucElma(), halka(55, 92, 30)]), sahne([...ucElma(), halka(120, 92, 30)]), sahne([...ucElma(), halka(185, 92, 30)])],
      birimler: ['en:s:apple', 'en:s:red'] },
    { tur: 'sec', ses: [anl('Apples?')], dogruSes: [anl('Apples.')], dogru: 1,
      secenek: [sahne(elma(120, 96, 'red', 34)), sahne(ucElma()), sahne(araba(86, 80, 'red'))],
      birimler: ['en:s:apples'] },
    { tur: 'sec', ses: [anl('Give me the apple.')], dogruSes: [anl('Give me the apple.')], dogru: 1,
      secenek: [
        sahne([...pazarci('ileri'), ...elma(...KISI_EL, 'red', 14), ok(112, 84, 168, 112), ...el(...SEN_EL)]),
        sahne([...pazarci('ileri'), ok(166, 104, 112, 80), ...el(...SEN_EL, 'green')]),
        sahne([...pazarci('asagi'), ...el(...SEN_EL, 'red')]),
      ],
      birimler: ['en:k:give-me'] },
  ],
  sayfalar: [
    // 1-8: renkler (renk adı, sonra üç nesnede aynı renk)
    { tur: 'gor', ses: [anl('Red.')], S: sahne(leke('red'), 'kırmızı renk'), yeni: 'en:s:red', degisen: 'renk' },
    { tur: 'gor', ses: [anl('Red, red, red.')], S: sahne(ucNesne('red'), 'kırmızı araba, top, gömlek'), degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Green.')], S: sahne(leke('green'), 'yeşil renk'), yeni: 'en:s:green', degisen: 'renk' },
    { tur: 'gor', ses: [anl('Green, green, green.')], S: sahne(ucNesne('green'), 'yeşil araba, top, gömlek'), degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Yellow.')], S: sahne(leke('yellow'), 'sarı renk'), yeni: 'en:s:yellow', degisen: 'renk' },
    { tur: 'gor', ses: [anl('Yellow, yellow, yellow.')], S: sahne(ucNesne('yellow'), 'sarı araba, top, gömlek'), degisen: 'nesne' },
    { tur: 'sec', ses: [anl('Red?')], dogruSes: [anl('Red.')], dogru: 1,
      secenek: [sahne(leke('yellow')), sahne(leke('red')), sahne(leke('green'))], birimler: ['en:s:red'] },
    { tur: 'sec', ses: [anl('Green?')], dogruSes: [anl('Green.')], dogru: 2,
      secenek: [sahne(araba(86, 80, 'red')), sahne(araba(86, 80, 'yellow')), sahne(araba(86, 80, 'green'))], birimler: ['en:s:green'] },
    // 9-13: elma (renk değişir, nesne aynı kalır), sonra çoğul
    { tur: 'gor', ses: [anl('An apple.')], S: sahne(elma(120, 96, 'green', 34), 'yeşil elma'), yeni: 'en:s:apple', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('An apple.')], S: sahne(elma(120, 96, 'yellow', 34), 'sarı elma'), degisen: 'renk' },
    { tur: 'gor', ses: [anl('An apple.')], S: sahne(elma(120, 96, 'red', 34), 'kırmızı elma'), degisen: 'renk' },
    { tur: 'gor', ses: [anl('Apples.')], S: sahne(ucElma(), 'üç elma'), yeni: 'en:s:apples', degisen: 'nesne' },
    // Renk aynı, nesne farklı
    { tur: 'sec', ses: [anl('An apple?')], dogruSes: [anl('An apple.')], dogru: 1,
      secenek: [sahne(top(120, 96, 'red')), sahne(elma(120, 96, 'red', 30)), sahne(araba(86, 80, 'red'))], birimler: ['en:s:apple'] },
    // 14-15: üç elmadan biri (the + renk + elma birlikte, yeni birim yok)
    { tur: 'gor', ses: [anl('The red apple.')], S: sahne([...ucElma(), halka(185, 92, 30)], 'üç elma, kırmızısı işaretli'), yeni: 'en:s:the', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('The green apple.')], S: sahne([...ucElma(), halka(55, 92, 30)], 'üç elma, yeşili işaretli'), degisen: 'renk' },
    { tur: 'sec', ses: [anl('The yellow apple?')], dogruSes: [anl('The yellow apple.')], dogru: 2,
      secenek: [sahne(elma(120, 96, 'red', 30)), sahne(elma(120, 96, 'green', 30)), sahne(elma(120, 96, 'yellow', 30))],
      birimler: ['en:s:apple', 'en:s:yellow'] },
    // 17-21: al, ver (pazarcı sana konuşur)
    { tur: 'gor', ses: [paz('Take the apple.')], S: sahne([...pazarci('ileri'), ...elma(...KISI_EL, 'red', 14), ok(112, 84, 168, 112), ...el(...SEN_EL)], 'pazarcı elmayı sana uzatıyor'), yeni: 'en:k:take-the', degisen: 'eylem' },
    { tur: 'gor', ses: [paz('Take the apple.')], S: sahne([...pazarci('asagi'), ...el(...SEN_EL, 'red')], 'elma senin elinde'), degisen: 'eylem' },
    { tur: 'gor', ses: [paz('Take the green apple.')], S: sahne([...pazarci('ileri'), ...elma(...KISI_EL, 'green', 14), ok(112, 84, 168, 112), ...el(...SEN_EL)], 'pazarcı yeşil elmayı uzatıyor'), degisen: 'renk' },
    { tur: 'gor', ses: [paz('Give me the apple.')], S: sahne([...pazarci('ileri'), ok(166, 104, 112, 80), ...el(...SEN_EL, 'green')], 'pazarcı elini uzatıp elmayı istiyor'), yeni: 'en:k:give-me', degisen: 'eylem' },
    { tur: 'gor', ses: [paz('Thank you.')], S: sahne([...pazarci('ileri'), ...elma(...KISI_EL, 'green', 14), ...el(...SEN_EL)], 'elma pazarcının elinde, pazarcı gülüyor'), yeni: 'en:k:thank-you', degisen: 'eylem' },
    { tur: 'sec', ses: [anl('Take the red apple.')], dogruSes: [anl('Take the red apple.')], dogru: 2,
      secenek: [sahne(el(120, 92, 'yellow')), sahne(el(120, 92, 'green')), sahne(el(120, 92, 'red'))],
      birimler: ['en:s:apple', 'en:s:red', 'en:k:take-the'] },
    // Yazı perdesi: duyulan şeyler ancak şimdi yazıyla görünür
    { tur: 'yazi', birimler: ['en:s:red', 'en:s:green', 'en:s:yellow', 'en:s:apple', 'en:s:apples', 'en:s:the', 'en:k:take-the', 'en:k:give-me', 'en:k:thank-you'] },
  ],

  // ---- Pratik (Görev 4, Dalga 1; taslak §11.1): 5 oyun dizisi = 5 tür, 37 etkileşim (eşleştir 2 tahta, boşluk 6, ne derdin 6,
  // sırala 5, hızlı tur 1 × 12 soru). Varış ve Barınma birimleri geri döner (≥ %30). Oynatıcı sec, boşluk ve ne derdin şıklarını
  // karıştırmaz: doğru şıkların sırası elle düzensiz.
  pratik: [
    // Oyun 1 · eşleştir (2 tahta, 8 çift): "the + renk" çanta ve anahtarla; sonra sayı + apples
    { tur: 'eslestir', ciftler: [
      { ses: [anl('The red bag.')], S: ucCanta(0), birim: 'en:s:bag' },
      { ses: [anl('The green bag.')], S: ucCanta(1), birim: 'en:s:green' },
      { ses: [anl('The yellow key.')], S: ucAnahtar(2), birim: 'en:s:key' },
      { ses: [anl('The red key.')], S: ucAnahtar(0), birim: 'en:s:red' },
    ] },
    { tur: 'eslestir', ciftler: [
      { ses: [anl('An apple.')], S: elmaSira(1), birim: 'en:s:apple' },
      { ses: [anl('Two apples.')], S: elmaSira(2), birim: 'en:s:two' },
      { ses: [anl('Three apples.')], S: elmaSira(3), birim: 'en:s:three' },
      { ses: [anl('Five apples.')], S: elmaSira(5), birim: 'en:s:five' },
    ] },
    // Oyun 2 · boşluk (6): cümle çalar, eksik sözcüğün resmi seçilir
    { tur: 'bosluk', ses: [paz('Take the green apple.')], metin: 'Take the ___ apple.',
      secenek: [tekElma('yellow'), tekElma('green'), tekElma('red')], dogru: 1, birimler: ['en:k:take-the', 'en:s:green'] },
    { tur: 'bosluk', ses: [paz('Give me the bag.')], metin: 'Give me the ___.',
      secenek: [tekAnahtar(), tekCanta(), tekElma('red')], dogru: 1, birimler: ['en:k:give-me', 'en:s:bag'] },
    { tur: 'bosluk', ses: [anl('Three apples.')], metin: '___ apples.',
      secenek: [elmaSira(2), elmaSira(5), elmaSira(3)], dogru: 2, birimler: ['en:s:three', 'en:s:apples'] },
    { tur: 'bosluk', ses: [paz('Take the key.')], metin: 'Take the ___.',
      secenek: [tekAnahtar(), tekPasaport(), tekBilet()], dogru: 0, birimler: ['en:k:take-the', 'en:s:key'] },
    { tur: 'bosluk', ses: [sen('Apples, please.')], metin: '___, please.',
      secenek: [tekCanta(), tekAnahtar(), elmaSira(3)], dogru: 2, birimler: ['en:s:apples', 'en:s:please'] },
    { tur: 'bosluk', ses: [anl('The yellow apple.')], metin: 'The ___ apple.',
      secenek: [ucElmaSec(1), ucElmaSec(0), ucElmaSec(2)], dogru: 0, birimler: ['en:s:the', 'en:s:yellow'] },
    // Oyun 3 · ne derdin? (6): durum resmi, senin ağzından üç sesli cevap. Resim cevabı göstermez (senin balonun yok).
    { tur: 'nederdin', S: sahne([...pazarci('yukari'), ...sallar(60, 58), ...tezgah(RGY), ...el(...SEN_EL)], 'pazarcı iki elini sallıyor; tezgâhta kırmızı, yeşil ve sarı elma; senin elin boş'),
      secenekSes: [[sen('Here.')], [sen('My key.')], [sen('Hello.')]], dogru: 2, birimler: ['en:s:hello'] },
    { tur: 'nederdin', S: sahne([...pazarci('asagi'), ...tezgah(['green', 'yellow', 'red'], 2), ...el(...SEN_EL)], 'pazarcı; tezgâhta yeşil, sarı ve kırmızı elma, kırmızı elma halkalı; senin elin boş'),
      secenekSes: [[sen('The red apple, please.')], [sen('The green apple, please.')], [sen('Goodbye.')]], dogru: 0, birimler: ['en:s:the', 'en:s:red', 'en:s:please'] },
    { tur: 'nederdin', S: sahne([...pazarci('ileri'), ...elma(...KISI_EL, 'red', 14), vers(), ...el(...SEN_EL)], 'pazarcı kırmızı elmayı sana uzatıyor, ok senin eline; senin elin boş'),
      secenekSes: [[sen('Thank you.')], [sen('Sorry.')], [sen('Where?')]], dogru: 0, birimler: ['en:k:thank-you'] },
    { tur: 'nederdin', S: sahne([...pazarci('ileri'), ...paraBalonPaz(2), ...el(...SEN_EL), ...paraSira(2, 185, 116, 1.15)], 'pazarcının balonunda iki para; senin avucunda iki para'),
      secenekSes: [[sen('Hello.')], [sen('Here.')], [sen('Sorry.')]], dogru: 1, birimler: ['en:s:here'] },
    { tur: 'nederdin', S: sahne([...pazarci('ileri'), ...pazBalon('hizli'), ...el(...SEN_EL)], 'pazarcı; balonunda üç sıra sık zikzak çizgi; senin elin boş'),
      secenekSes: [[sen('Thank you.')], [sen('Goodbye.')], [sen('Speak slowly, please.')]], dogru: 2, birimler: ['en:k:speak-slowly'] },
    { tur: 'nederdin', S: sahne([...pazarci('yukari'), ...sallar(60, 58), ...okSag(128, 226, 70), ...el(...SEN_EL)], 'pazarcı iki elini sallıyor; sen sağa gidiyorsun (sağa ok); senin elin boş'),
      secenekSes: [[sen('Where?')], [sen('Goodbye.')], [sen('Sorry.')]], dogru: 1, birimler: ['en:s:goodbye'] },
    // Oyun 4 · sırala (5): duyduğun cümleyi sözcük kartlarıyla kur. Her cümlede tek büyük harfli kart ve tek noktalı kart: tek sıra.
    { tur: 'sirala', ses: [paz('Take the red apple.')], parcalar: ['Take', 'the', 'red', 'apple.'], birimler: ['en:k:take-the', 'en:s:red', 'en:s:apple'] },
    { tur: 'sirala', ses: [paz('Give me the bag.')], parcalar: ['Give', 'me', 'the', 'bag.'], birimler: ['en:k:give-me', 'en:s:the', 'en:s:bag'] },
    { tur: 'sirala', ses: [sen('The green apple, please.')], parcalar: ['The', 'green', 'apple,', 'please.'], birimler: ['en:s:the', 'en:s:green', 'en:s:apple', 'en:s:please'] },
    { tur: 'sirala', ses: [anl('Two red apples.')], parcalar: ['Two', 'red', 'apples.'], birimler: ['en:s:two', 'en:s:red', 'en:s:apples'] },
    { tur: 'sirala', ses: [sen('Five apples, please.')], parcalar: ['Five', 'apples,', 'please.'], birimler: ['en:s:five', 'en:s:apples', 'en:s:please'] },
    // Oyun 5 · hızlı tur (60 sn, 12 soru); doğru şık sırası elle düzensiz (A 4, B 4, C 4)
    { tur: 'hizli', sure: 60, sorular: [
      { tur: 'sec', ses: [anl('Green.')], dogruSes: [anl('Green.')], secenek: [anahtarR('red'), anahtarR('green'), anahtarR('yellow')], dogru: 1, birimler: ['en:s:green'] },
      { tur: 'sec', ses: [anl('Yellow.')], dogruSes: [anl('Yellow.')], secenek: [cantaR('red'), cantaR('green'), cantaR('yellow')], dogru: 2, birimler: ['en:s:yellow'] },
      { tur: 'sec', ses: [anl('Red.')], dogruSes: [anl('Red.')], secenek: [tekElma('green'), tekElma('yellow'), tekElma('red')], dogru: 2, birimler: ['en:s:red'] },
      { tur: 'sec', ses: [anl('An apple.')], dogruSes: [anl('An apple.')], secenek: [tekElma('green'), tekCanta(), tekAnahtar()], dogru: 0, birimler: ['en:s:apple'] },
      { tur: 'sec', ses: [anl('Apples.')], dogruSes: [anl('Apples.')], secenek: [tekCanta(), elmaSira(3), elmaSira(1)], dogru: 1, birimler: ['en:s:apples'] },
      { tur: 'sec', ses: [anl('Two apples.')], dogruSes: [anl('Two apples.')], secenek: [elmaSira(2), elmaSira(3), elmaSira(5)], dogru: 0, birimler: ['en:s:two', 'en:s:apples'] },
      { tur: 'sec', ses: [anl('Five apples.')], dogruSes: [anl('Five apples.')], secenek: [elmaSira(4), elmaSira(2), elmaSira(5)], dogru: 2, birimler: ['en:s:five', 'en:s:apples'] },
      { tur: 'sec', ses: [anl('The yellow key.')], dogruSes: [anl('The yellow key.')], secenek: [ucAnahtar(2), ucAnahtar(0), ucAnahtar(1)], dogru: 0, birimler: ['en:s:the', 'en:s:yellow', 'en:s:key'] },
      { tur: 'sec', ses: [anl('The red bag.')], dogruSes: [anl('The red bag.')], secenek: [ucCanta(1), ucCanta(0), ucCanta(2)], dogru: 1, birimler: ['en:s:the', 'en:s:red', 'en:s:bag'] },
      { tur: 'sec', ses: [paz('Take the apple.')], dogruSes: [paz('Take the apple.')], secenek: [giveSec(), takeSec(), selamSec()], dogru: 1, birimler: ['en:k:take-the', 'en:s:apple'] },
      { tur: 'sec', ses: [paz('Give me the apple.')], dogruSes: [paz('Give me the apple.')], secenek: [takeSec(), selamSec(), giveSec()], dogru: 2, birimler: ['en:k:give-me', 'en:s:apple'] },
      { tur: 'sec', ses: [anl('The green apple.')], dogruSes: [anl('The green apple.')], secenek: [ucElmaSec(0), ucElmaSec(2), ucElmaSec(1)], dogru: 0, birimler: ['en:s:the', 'en:s:green', 'en:s:apple'] },
    ] },
  ],

  // ---- Hikâyecikler (Görev 4, Dalga 1; taslak §11.2): yeni birim yok, yalnız Pazar, Barınma ve Varış birimleri. Sonunda 3 anlama
  // sorusu. Tek kural: kök hikâyede bir kez geçen satırdır; şıklar o karenin üç hâlidir; doğru şık hikâyede olan hâldir. Kök tek
  // başına cevabı vermez; bir sorunun şıkları başka bir sorunun cevabını göstermez.
  hikayeler: [
    // 1 · Pazarlık (müfredat; tasarım §4.2 "pazarda pazarlık"). Yeşil elma istersin. Pazarcı "Five." der (balonda beş para); sen
    // "Two." dersin; pazarcı "Three." der; kabul edersin ve üç para verirsin (düzeltme 1: eskiden dört). Pazarcı elmaları çantayla verir, bir de sarı elma ekler.
    { id: 'pazarlik', ad: 'Apples, please',
      sayfalar: [
        { tur: 'gor', ses: [paz('Hello.'), sen('Hello.')], S: sahne([...pazarci('yukari'), ...sallar(60, 58), ...tezgah(RGY), ...el(...SEN_EL)], 'pazarcı iki elini sallıyor; tezgâhta kırmızı, yeşil ve sarı elma; senin elin') },
        { tur: 'gor', ses: [sen('Apples, please.')], S: sahne([...pazarci('asagi'), ...tezgah(RGY), ...el(...SEN_EL), ...benimBalon(kucukElmalar(200, 36))], 'senin balonunda üç küçük elma (kırmızı, yeşil, sarı)') },
        { tur: 'gor', ses: [paz('Red? Green? Yellow?')], S: sahne([...pazarci('ileri'), ...pazBalon(kucukElmalar(132, 30, RGY, 7)), ...tezgah(RGY), ...el(...SEN_EL)], 'pazarcının balonunda kırmızı, yeşil ve sarı küçük elma; tezgâhta üç elma') },
        { tur: 'gor', ses: [sen('Green, please.')], S: sahne([...pazarci('asagi'), ...tezgah(RGY, 1), ...el(...SEN_EL), ...benimBalon(elma(200, 36, 'green', 8))], 'tezgâhta yeşil elma halkalı; senin balonunda yeşil elma') },
        { tur: 'gor', ses: [paz('Five.')], S: sahne([...pazarci('ileri'), ...paraBalonPaz(5), ...HIK1_TEZ(), ...el(...SEN_EL)], 'tezgâhta yeşil elma halkalı; pazarcının balonunda beş para') },
        { tur: 'gor', ses: [sen('Five? No. Two.')], S: sahne([...pazarci('asagi'), ...HIK1_TEZ(), ...el(...SEN_EL), ...paraBalonSen(2)], 'tezgâhta yeşil elma halkalı; senin balonunda iki para') },
        { tur: 'gor', ses: [paz('Two? No. Three.')], S: sahne([...pazarci('ileri', 'sasir'), ...paraBalonPaz(3), ...HIK1_TEZ(), ...el(...SEN_EL)], 'pazarcı şaşkın; balonunda üç para') },
        { tur: 'gor', ses: [sen('Three? Yes.')], S: sahne([...pazarci('asagi'), ...HIK1_TEZ(), ...el(...SEN_EL), ...benimBalon('evet')], 'senin balonunda yeşil onay') },
        { tur: 'gor', ses: [paz('Thank you.')], S: sahne([...pazarci('ileri'), iste(), ...el(...SEN_EL), ...paraSira(3, 185, 118, .9)], 'senin avucunda üç para, pazarcıya doğru ok') },
        { tur: 'gor', ses: [paz('Take the apples.')], S: sahne([...pazarci('ileri'), vers(), ...el(...SEN_EL), ...elma(176, 104, 'green', 8), ...elma(192, 102, 'green', 8), ...canta(185, 124, 'kahve', .8)], 'pazarcıdan sana ok; senin elinde kahverengi çanta, içinden yeşil elmalar görünüyor') },
        { tur: 'gor', ses: [paz('Take the yellow apple.')], S: sahne([...pazarci('ileri'), ...elma(...KISI_EL, 'yellow', 14), vers(), ...el(...SEN_EL)], 'pazarcı gülerek sarı bir elmayı sana uzatıyor, ok senin eline') },
        { tur: 'gor', ses: [sen('Thank you. Goodbye.')], S: sahne([...pazarci('yukari'), ...sallar(60, 58), ...el(...SEN_EL, 'yellow'), ...balon(200, 60)], 'pazarcı el sallıyor; senin avucunda sarı elma; senin konuşma balonun') },
      ],
      sorular: [
        // Soru 1 (kare 10; düzeltme 1): "Take the apples." — çantadaki elmaların rengi; şıklar kare 10'un üç hâli. Hikâyede yeşil.
        // Kök fiyat söylemez (eski kök "Five." ilk fiyatı gösterip soru 2'yi daraltıyordu).
        { tur: 'sec', ses: [paz('Take the apples.')], dogruSes: [paz('Take the apples.')], dogru: 2,
          secenek: [cantaElmaSec('yellow'), cantaElmaSec('red'), cantaElmaSec('green')], birimler: ['en:k:take-the', 'en:s:apples', 'en:s:green'] },
        // Soru 2 (kare 9; düzeltme 1): "Thank you." — avucundaki para; şıklar kare 9'un üç hâli. Hikâyede üç (en küçük şık):
        // "orta değer" tahmini dörde, ilk fiyat beşe götürür; yalnız hatırlayan üçü seçer.
        { tur: 'sec', ses: [paz('Thank you.')], dogruSes: [paz('Thank you.')], dogru: 2,
          secenek: [odeSec(4), odeSec(5), odeSec(3)], birimler: ['en:k:thank-you', 'en:s:three'] },
        // Soru 3 (kare 12): "Thank you. Goodbye." — avucundaki elma (pazarcının eklediği); şıklar kare 12'nin üç hâli. Hikâyede sarı.
        { tur: 'sec', ses: [sen('Thank you. Goodbye.')], dogruSes: [sen('Thank you. Goodbye.')], dogru: 0,
          secenek: [vedaSec('yellow'), vedaSec('red'), vedaSec('green')], birimler: ['en:k:thank-you', 'en:s:goodbye', 'en:s:yellow'] },
      ] },
    // 2 · Yanlış elma. Kırmızı elma istersin; anahtarını tezgâha koyarsın. Pazarcı yanlışlıkla yeşil elma verir; "Green? No." dersin.
    // Pazarcı özür diler, yeşili geri alır, üç kırmızı elma verir (düzeltme 1). Giderken anahtarın tezgâhta kalır; pazarcı seslenir: "Your key!"
    { id: 'yanlis-elma', ad: 'Sorry!',
      sayfalar: [
        { tur: 'gor', ses: [paz('Hello.')], S: sahne([...pazarci('yukari'), ...sallar(60, 58), ...tezgah(['yellow', 'red', 'green']), ...el(...SEN_EL), ...anahtar(185, 118)], 'pazarcı iki elini sallıyor; tezgâhta sarı, kırmızı ve yeşil elma; senin elinde sarı anahtar') },
        { tur: 'gor', ses: [sen('The red apple, please.')], S: sahne([...pazarci('asagi'), ...HIK2_TEZ(), ...el(...SEN_EL), ...benimBalon(elma(200, 36, 'red', 8))], 'senin sarı anahtarın tezgâhın sağ ucunda; senin elin boş; senin balonunda kırmızı elma') },
        { tur: 'gor', ses: [paz('Take the apple.')], S: sahne([...pazarci('ileri'), vers(), ...HIK2_TEZ(), ...el(...SEN_EL, 'green')], 'pazarcıdan sana ok; senin avucunda yeşil elma; anahtarın tezgâhta') },
        { tur: 'gor', ses: [sen('Green? No.')], S: sahne([...pazarci('asagi'), ...HIK2_TEZ(), ...el(...SEN_EL, 'green'), ...benimBalon('hayir')], 'senin avucunda yeşil elma; senin balonunda kırmızı çarpı') },
        { tur: 'gor', ses: [sen('Red, please.')], S: sahne([...pazarci('asagi'), ...HIK2_TEZ(), ...el(...SEN_EL, 'green'), ...benimBalon(elma(200, 36, 'red', 8))], 'senin avucunda yeşil elma; senin balonunda kırmızı elma') },
        { tur: 'gor', ses: [paz('Sorry! Give me the apple.')], S: sahne([...pazarci('ileri', 'sasir'), iste(), ...HIK2_TEZ(), ...el(...SEN_EL, 'green')], 'pazarcı şaşkın; senin avucunda yeşil elma, pazarcıya doğru ok') },
        { tur: 'gor', ses: [paz('Take the red apples.')], S: sahne([...pazarci('ileri'), ...elma(92, 80, 'red', 11), ...elma(108, 76, 'red', 11), ...elma(100, 62, 'red', 11), vers(), ...HIK2_TEZ(), ...el(...SEN_EL)], 'pazarcı üç kırmızı elmayı sana uzatıyor, ok senin eline') },
        { tur: 'gor', ses: [sen('Yes! Thank you.')], S: sahne([...pazarci('asagi'), ...HIK2_TEZ(), ...el(...SEN_EL), ...avucElma(3, -5, 30), ...benimBalon('evet')], 'senin avucunda üç kırmızı elma; senin balonunda yeşil onay') },
        { tur: 'gor', ses: [sen('Goodbye.')], S: sahne([...pazarci('yukari'), ...sallar(60, 58), ...tezgah(['yellow', 'red', 'green'], null, true, true), ...okSag(128, 226, 70), ...el(...SEN_EL), ...avucElma(3, -5, 30)], 'pazarcı el sallıyor; sen sağa gidiyorsun (sağa ok); tezgâhın sağ ucunda halkalı sarı anahtar; senin avucunda üç kırmızı elma') },
        { tur: 'gor', ses: [paz('Your key!')], S: sahne([...pazarci('ileri'), ...pazBalon(anahtar(132, 30, 'sari', .9)), ...anahtar(...KISI_EL, 'sari', 1.2), ...tezgah(['yellow', 'red', 'green']), ...el(...SEN_EL), ...avucElma(3, -5, 30)], 'pazarcının elinde sarı anahtar, balonunda anahtar; senin avucunda üç kırmızı elma') },
        { tur: 'gor', ses: [sen('My key! Thank you.')], S: sahne([...pazarci('ileri', 'mutlu'), vers(), ...el(...SEN_EL), ...anahtar(185, 118)], 'pazarcıdan sana ok; senin elinde sarı anahtar') },
      ],
      sorular: [
        // Soru 1 (kare 6; düzeltme 1): "Sorry! Give me the apple." — geri verdiğin elma; şıklar kare 6'nın üç hâli. Hikâyede yeşil
        // (pazarcının yanlışı). Kök tek kareye bağlı ("Take the …" köklerinden ayrı).
        { tur: 'sec', ses: [paz('Sorry! Give me the apple.')], dogruSes: [paz('Sorry! Give me the apple.')], dogru: 1,
          secenek: [geriSec('red'), geriSec('green'), geriSec('yellow')], birimler: ['en:k:give-me', 'en:s:apple', 'en:s:green'] },
        // Soru 2 (kare 9): "Goodbye." — tezgâhta kalan; şıklar kare 9'un üç hâli. Hikâyede senin anahtarın.
        { tur: 'sec', ses: [sen('Goodbye.')], dogruSes: [sen('Goodbye.')], dogru: 0,
          secenek: [kaldiSec('anahtar'), kaldiSec('pasaport'), kaldiSec('canta')], birimler: ['en:s:goodbye', 'en:s:key'] },
        // Soru 3 (kare 8; düzeltme 1): "Yes! Thank you." — avucundaki elma sayısı; şıklar kare 8'in üç hâli. Hikâyede üç (özür için;
        // "the red apple" istendiği için mantık bire götürür). Renk sorusu değil: soru 1'den ayrı olgu.
        { tur: 'sec', ses: [sen('Yes! Thank you.')], dogruSes: [sen('Yes! Thank you.')], dogru: 0,
          secenek: [kacSec(3), kacSec(1), kacSec(2)], birimler: ['en:s:yes', 'en:k:thank-you', 'en:s:three', 'en:s:apples'] },
      ] },
  ],
};
