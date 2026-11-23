// Filiz durağı 5: Resmî işler (Dalga 1 Görev 6, 23 Kasım 2026). Taslak: taslak/durak-taslaklari.md §13 (30 sayfa, 3 yoklama
// sorusu, 5 oyun dizisi ve 37 etkileşim, iki hikâyecik). İlk kez sıfırdan yazılan durak: sahne, pratik ve hikâyecik birlikte.
// Kayıt masası. Kahraman "sen"sin (adın Deniz; kontrolcü kararı 23 Kasım): kayıt memuru (rol 'memur', `kisi('memur')` çerçevesi:
// buz cam pano, gri tezgâh) sana konuşur; sağ üstteki sıra ekranı (plaka) onu pasaport memurundan ayırır. Sağ alttaki el senin elin.
// Türkçe yok. Bütün roller iDil sesiyle konuşur.
// Yeni birimler (11): eleven, twelve, sayilar-13-19 (-teen), number, am-are, form, alfabe, name, what-is-your-name, my-name-is,
// sign-here. Geri dönenler: hello, please, here, here is, your, my, passport, key, room, thank you, sorry, no, yes, goodbye,
// I don't understand, speak slowly, yellow, five, nine, ten, o'clock.
// Uzlaşımlar: 11–19 rakamla plaka üstünde; sıra fişi = avuçta küçük plaka, sıra ekranı = sağ üstte plaka. Harf kartı = söylenen harf;
// formdaki harf = memurun el yazısı. Formun satırları yazısız simgeyle ayrışır (ad, numara, imza). Balonda küçük form ve ad satırı
// halkalı = ad soruluyor (soru işareti Varış'tan beri "anlamadım" demektir; kullanılmaz). Kontrolcü kararı (23 Kasım): harf kartı
// yazı perdesinden önce, yalnız tek harf ve ad (DENIZ ve yanlış yazılışları DENIS, DEMIZ, TENIZ, DANIZ); 11–19 sıra ve oda numarasıyla. Sec seçenekleri oynatıcıda
// boy 120 penceresinde çizilir; ana öğeler y ≤ 112.
import { anahtar, balon, bilet, el, form, FORM_SATIR, harfKarti, harfYazi, kapi, kisi, konusma, ok, okSag, pasaport, plaka, salla, saat, halka, KISI_EL, SEN_EL } from '../parca.js';

const H = 180;
const sahne = (o, alt) => ({ boy: H, alt, o });
const anl = metin => ({ rol: 'anlatici', metin });
const sen = metin => ({ rol: 'sen', metin });
const mem = metin => ({ rol: 'memur', metin });

const SAYI_AD = { 1: 'bir', 2: 'iki', 3: 'üç', 4: 'dört', 5: 'beş', 7: 'yedi', 8: 'sekiz', 9: 'dokuz', 10: 'on', 11: 'on bir', 12: 'on iki',
  13: 'on üç', 14: 'on dört', 15: 'on beş', 16: 'on altı', 17: 'on yedi', 18: 'on sekiz', 19: 'on dokuz' };
const RENK_AD = { yellow: 'sarı', red: 'kırmızı', green: 'yeşil' };
const DENIZ = ['D', 'E', 'N', 'I', 'Z'], DENIS = ['D', 'E', 'N', 'I', 'S'];

// Kayıt memuru: kisi('memur') ve sağ üstte sıra ekranı (n null ise ekran yok, '' ise boş ekran).
const ekran = n => plaka(200, 24, n, .7);
const memur = (kol = 'ileri', yuz = 'mutlu', n = '') => [...kisi('memur', kol, yuz), ...(n === null ? [] : ekran(n))];
const sallar = (x, y) => [...salla(x + 24, y, 1), ...salla(x - 24, y, -1)];
const ver = () => ok(112, 84, 168, 112);   // memurdan sana
const iste = () => ok(158, 100, 114, 80);  // senden memura
const fis = n => plaka(184, 116, n, .5);   // avucunda sıra fişi
const elim = () => el(...SEN_EL);
// Elips halka (form satırı için): halka() dairedir, satırı yatayda sarmak için elips.
const halkaE = (x, y, rx, ry) => ({ t: 'l', d: `M${x - rx} ${y} a${rx} ${ry} 0 1 0 ${2 * rx} 0 a${rx} ${ry} 0 1 0 ${-2 * rx} 0`, w: 2.4, k: 'vurgu' });
// Form satırının halkası: form(x, y, s) için satırın ortası.
const satirHalka = (x, y, s, satir, rx = 30 * s) => halkaE(+(x + 6 * s).toFixed(2), +(y + (FORM_SATIR[satir] + 1) * s).toFixed(2), +rx.toFixed(2), +(6 * s).toFixed(2));
// Formdaki i. el yazısı harfin ortası (form() ile aynı ölçü).
const harfYeri = (x, y, s, i) => [+(x + (-12 + i * 8.6) * s).toFixed(2), +(y + (FORM_SATIR.ad - 3) * s).toFixed(2)];
// Küçük formda tek harfi işaretlemek: halka komşu harfleri örttüğü için harfin altına kalın vurgu çizgisi (Görev 6 gözle denetimi).
const harfAlti = (x, y, s) => ({ t: 'l', d: `M${+(x - 4 * s).toFixed(2)} ${+(y + 7 * s).toFixed(2)} L${+(x + 4 * s).toFixed(2)} ${+(y + 7 * s).toFixed(2)}`, w: 3, k: 'vurgu' });
// Yan yana harf kartları.
const harfSira = (harfler, x, y, s = 1) => harfler.flatMap((c, i) => harfKarti(+(x + (i - (harfler.length - 1) / 2) * 30 * s).toFixed(2), y, c, s));
// Memurun balonunda küçük form, ad satırı halkalı ("What is your name?").
const adSoruBalon = () => [...konusma(132, 30), ...form(132, 30, .3), satirHalka(132, 30, .3, 'ad', 11)];
// Senin balonunda beş küçük harf kartı (D E N I Z).
const adBalon = (x = 166, y = 74) => balon(x, y, harfSira(DENIZ, x, y - 9, .45), 1.6);

// ---- Seçenek resimleri (boy 120; ana öğeler y ≤ 112) ----
const plakaS = n => sahne(plaka(120, 60, String(n), 1.4), `plaka ${SAYI_AD[n]}`);
const harfS = c => sahne(harfKarti(120, 58, c, 2), `harf kartı ${c}`);
const formS = (satir, ic = {}) => sahne([...form(120, 58, 1.2, ic), ...(satir ? [satirHalka(120, 58, 1.2, satir)] : [])],
  satir ? `form; ${{ ad: 'ad satırı', numara: 'numara satırı', imza: 'imza çizgisi' }[satir]} halkalı` : 'boş form');
const fisS = n => sahne([...el(150, 104), ...plaka(146, 64, String(n), .8)], `avucunda sıra fişi ${SAYI_AD[n]}`);
const kapiS = n => sahne([...kapi(90, 66), ...plaka(168, 40, String(n), .9)], `kapı; yanında plaka ${SAYI_AD[n]}`);
const saatS = n => sahne(saat(120, 60, n, 1), `saat tam ${SAYI_AD[n]}`);
const TEK = {
  form: [() => form(120, 58, 1), 'boş form'],
  pasaport: [() => [...pasaport(120, 58)], 'pasaport'],
  bilet: [() => bilet(120, 50), 'bilet'],
  anahtar: [() => anahtar(124, 60, 'sari', 2), 'sarı anahtar'],
};
const tekS = ne => sahne(TEK[ne][0](), TEK[ne][1]);
// Küçük kayıt memuru (boy 120): buz cam pano, gri tezgâh.
const memurSec = (kol = 'ileri', yuz = 'mutlu') => [{ t: 'r', x: 22, y: 8, w: 52, h: 32, rx: 4, f: 'buz' },
  { t: 'k', x: 52, y: 100, s: 1.7, kol, yuz }, { t: 'r', x: 6, y: 100, w: 92, h: 20, rx: 4, f: 'gri' }];
// "You are number 13." seçenekleri: kim konuşuyor (memurun balonu ve ondan sana ok ya da senin balonun ve senden ona ok), avuçta fiş.
const kimS = (kim, n) => sahne(kim === 'memur'
  ? [...memurSec(), ...konusma(130, 24, undefined, .7), ok(100, 72, 172, 92), ...el(190, 108), ...plaka(190, 78, String(n), .45)]
  : [...memurSec('asagi'), ...balon(200, 30, undefined, .8), ok(166, 92, 106, 66), ...el(190, 108), ...plaka(190, 78, String(n), .45)],
  kim === 'memur' ? `memurun konuşma balonu, memurdan sana ok; avucunda sıra fişi ${SAYI_AD[n]}`
    : `senin konuşma balonun, senden memura ok; avucunda sıra fişi ${SAYI_AD[n]}`);
const balonSec = ic => sahne([...memurSec(), ...(ic === 'ad' ? [...konusma(130, 26), ...form(130, 26, .3), satirHalka(130, 26, .3, 'ad', 11)]
  : konusma(130, 26, ic)), ...el(190, 108)], ic === 'ad' ? 'memurun balonunda küçük form, ad satırı halkalı' : 'memurun balonunda pasaport');
const selamSec = () => sahne([...memurSec('yukari'), ...salla(76, 54, 1), ...salla(28, 54, -1), ...el(190, 108)], 'memur iki elini sallıyor');

// ---- Hikâye seçenekleri ----
// H1 kare 8 ve S1 (düzeltme turu 1): yalnız ad satırı yakından (form başlığı ve rengi yok: S3'ü göstermez); senin balonunda çarpı.
// i: halkalı harf (yalnız hikâye karesinde); şıklarda halka yok, üç şık birbirine çok yakın üç yazılış (DENIS, DENNIS, DENISE).
const adSatir = (harfler, i = null) => {
  const ad = harfler.length > 5 ? 22 : 26, x0 = harfler.length > 5 ? 60 : 64;
  return [{ t: 'r', x: 14, y: 26, w: 174, h: 66, rx: 4, f: 'kar' },
    { t: 'c', x: 30, y: 52, r: 5, f: 'gri' }, { t: 'l', d: 'M21 68 Q30 58 39 68', w: 1.6, k: 'gri' },
    { t: 'l', d: 'M48 76 L180 76', w: 1.4, k: 'gri' },
    ...harfler.flatMap((c, k) => harfYazi(x0 + k * ad, 70, c, 28)), ...(i === null ? [] : [halka(x0 + i * ad, 60, 15)]),
    ...balon(208, 28, 'hayir', .8)];
};
const adSatirS = harfler => sahne(adSatir(harfler), `ad satırı yakından: ${harfler.join(' ')}; senin balonunda kırmızı çarpı`);
// H1 S2 (kare 4): memur hızlı konuşuyor, senin balonunda "yavaş konuş" isteği, sağ üstte sıra ekranı n.
const yavaslaS = n => sahne([...memurSec(), ...konusma(130, 28, 'hizli', .6), ...plaka(196, 22, String(n), .8), ...balon(194, 84, 'yavasla', 1)],
  `memurun balonunda sık zikzak; sıra ekranında ${SAYI_AD[n]}; senin balonunda küçük zikzak, ok ve aralıklı üç çizgi`);
// H1 S3 (kare 11): form, başlık şeridi f, imza çizgisi halkalı. Düzeltme turu 2: ad satırında DENIZ (kare 10–11'deki gibi; Z'de
// iz ya da halka yok: S1'i göstermez).
const imzaRenkS = f => sahne([...form(120, 58, 1.2, { renk: f, ad: DENIZ }), satirHalka(120, 58, 1.2, 'imza')],
  `${RENK_AD[f]} başlıklı form; ad satırında D E N I Z; imza çizgisi halkalı`);
// H2 S1 (kare 2): memur, duvarda saat n, avucunda fiş 12. Düzeltme turu 1: şıklar 10 / 8 / 9 (doğru A, en büyük değer).
const saatliS = n => sahne([...memurSec(), ...saat(166, 40, n, .7), ...el(190, 108), ...plaka(190, 78, '12', .45)],
  `memur; duvarda saat tam ${SAYI_AD[n]}; avucunda sıra fişi on iki`);
// H2 S2 (kare 7): ilk imza nerede; form yakından ve başlık bandı çerçeve dışında (rengi görünmez: S3'ü göstermez); senin konuşma
// balonun. Düzeltme turu 2: üç şık formun üç gerçek satırı (ad, oda numarası, numara); imza çizgisi şıklarda yok.
const SATIR_AD = { ad: 'ad satırında', numara: 'numara satırında', oda: 'oda numarası satırında' };
const imzaYerS = yer => sahne([...form(120, 40, 1.4, { imza: yer }), ...balon(204, 26, undefined, .7)],
  `form yakından; imza ${SATIR_AD[yer]}; senin konuşma balonun`);
// H2 S3 (kare 5): memur formu sana uzatıyor; formun başlık bandı f. Düzeltme turu 2: hikâyede turuncu (bu durağın öteki formları
// mavi; mavi şık "tipik renk" tuzağıdır; turuncu başka hiçbir yerde yok; yeşil, turuncudan ve maviden açıkça ayrışır). Kök kare 5'in satırı.
const formVerS = f => sahne([...memurSec(), ...form(112, 46, .72, { renk: f }), ok(102, 80, 172, 96), ...el(190, 108)],
  `memur sana ${{ orange: 'turuncu', su: 'mavi', green: 'yeşil' }[f]} başlıklı boş formu uzatıyor, memurdan sana ok`);

// ---- Hikâye kareleri ----
const duvarSaati = n => saat(150, 20, n, .42);
const masadaForm = ic => form(150, 92, .8, ic);  // tezgâhın sağında, memurun önünde
// Form yakından (H2 kare 6–9): başlık bandı çerçevenin üstünde kalır, yalnız satırlar görünür (düzeltme turu 2).
const yakinForm = ic => form(120, 52, 1.7, ic);
const HIZLI_RESMI = "Right, I'll need your full name for the form, first name and surname, as it's written on your passport.";

export default {
  dil: 'en', id: 'resmi', no: 5, ad: 'Resmî işler',
  yoklama: [
    { tur: 'sec', ses: [mem('What is your name?')], dogruSes: [mem('What is your name?')], dogru: 1,
      secenek: [balonSec('pasaport'), balonSec('ad'), selamSec()], birimler: ['en:k:what-is-your-name'] },
    { tur: 'sec', ses: [anl('Fifteen.')], dogruSes: [anl('Fifteen.')], dogru: 0,
      secenek: [plakaS(15), plakaS(5), plakaS(14)], birimler: ['en:y:sayilar-13-19'] },
    { tur: 'sec', ses: [mem('Sign here, please.')], dogruSes: [mem('Sign here, please.')], dogru: 0,
      secenek: [formS('imza'), formS('ad'), formS('numara')], birimler: ['en:k:sign-here'] },
  ],
  sayfalar: [
    // 1-2: selam
    { tur: 'gor', ses: [mem('Hello.')], S: sahne([...memur('yukari'), ...sallar(60, 58)], 'kayıt memuru iki elini sallıyor; sağ üstte boş sıra ekranı'), degisen: 'kisi' },
    { tur: 'gor', ses: [sen('Hello.')], S: sahne([...memur('asagi'), ...balon(150, 60), ...elim()], 'senin elin, konuşma balonu'), degisen: 'eylem' },
    // 3-13: 11-19 rakamla plaka üstünde
    { tur: 'gor', ses: [anl('Eleven.')], S: sahne(plaka(120, 84, '11', 1.8), 'büyük plaka on bir'), yeni: 'en:s:eleven', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Twelve.')], S: sahne(plaka(120, 84, '12', 1.8), 'büyük plaka on iki'), yeni: 'en:s:twelve', degisen: 'nesne' },
    { tur: 'sec', ses: [anl('Twelve?')], dogruSes: [anl('Twelve.')], dogru: 1,
      secenek: [plakaS(2), plakaS(12), plakaS(11)], birimler: ['en:s:twelve'] },
    { tur: 'gor', ses: [anl('Thirteen.')], S: sahne(plaka(120, 84, '13', 1.8), 'büyük plaka on üç'), yeni: 'en:y:sayilar-13-19', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Fourteen.')], S: sahne(plaka(120, 84, '14', 1.8), 'büyük plaka on dört'), degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Fifteen.')], S: sahne(plaka(120, 84, '15', 1.8), 'büyük plaka on beş'), degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Sixteen.')], S: sahne(plaka(120, 84, '16', 1.8), 'büyük plaka on altı'), degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Seventeen.')], S: sahne(plaka(120, 84, '17', 1.8), 'büyük plaka on yedi'), degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Eighteen.')], S: sahne(plaka(120, 84, '18', 1.8), 'büyük plaka on sekiz'), degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Nineteen.')], S: sahne(plaka(120, 84, '19', 1.8), 'büyük plaka on dokuz'), degisen: 'nesne' },
    { tur: 'sec', ses: [anl('Fifteen?')], dogruSes: [anl('Fifteen.')], dogru: 2,
      secenek: [plakaS(5), plakaS(14), plakaS(15)], birimler: ['en:y:sayilar-13-19'] },
    // 14-18: number, I am, you are
    { tur: 'gor', ses: [anl('Number fourteen.')], S: sahne([...plaka(120, 40, '14', 1.1), ...el(...SEN_EL), ...plaka(184, 112, '14', .7), halka(184, 112, 26)],
      'üstte sıra ekranı on dört; avucunda sıra fişi on dört, fiş halkalı'), yeni: 'en:s:number', degisen: 'nesne' },
    { tur: 'gor', ses: [mem('Number fourteen, please.')], S: sahne([...memur('ileri', 'mutlu', '14'), ...elim(), ...fis('14')],
      'sıra ekranında on dört; memur kolunu sana uzatıyor; avucunda sıra fişi on dört'), degisen: 'eylem' },
    { tur: 'gor', ses: [sen('I am number fourteen.')], S: sahne([...memur('ileri', 'mutlu', '14'), iste(), ...elim(), ...fis('14'), ...balon(146, 58)],
      'fişi memura uzatıyorsun, senden memura ok; senin konuşma balonun'), yeni: 'en:y:am-are', degisen: 'kisi' },
    { tur: 'gor', ses: [mem('You are number fourteen.')], S: sahne([...memur('ileri', 'mutlu', '14'), ...plaka(KISI_EL[0] + 4, 60, '14', .45), ver(), ...elim()],
      'sıra fişi memurun elinde, memur gülüyor; memurdan sana ok; senin elin boş'), degisen: 'kisi' },
    { tur: 'sec', ses: [mem('You are number thirteen.')], dogruSes: [mem('You are number thirteen.')], dogru: 0,
      secenek: [kimS('memur', 13), kimS('sen', 13), kimS('memur', 15)], birimler: ['en:y:am-are', 'en:s:number', 'en:y:sayilar-13-19'] },
    // 19-20: form
    { tur: 'gor', ses: [anl('A form.')], S: sahne(form(120, 88, 1.5), 'boş zeminde tek boş form: renkli başlık, iki satır ve imza çizgisi'), yeni: 'en:s:form', degisen: 'nesne' },
    { tur: 'gor', ses: [mem('Here is your form.')], S: sahne([...memur(), ...form(KISI_EL[0] + 8, 58, .45), ver(), ...elim()],
      'memur formu sana uzatıyor, memurdan sana ok'), degisen: 'eylem' },
    // 21-26: alfabe, name, what is your name, my name is, heceleme
    { tur: 'gor', ses: [anl('A, B, C.')], S: sahne(harfSira(['A', 'B', 'C'], 120, 90, 1.6), 'üç harf kartı yan yana: A, B, C'), yeni: 'en:y:alfabe', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Name.')], S: sahne([...form(120, 88, 1.5, { ad: DENIZ }), satirHalka(120, 88, 1.5, 'ad')],
      'form; ad satırında el yazısıyla D E N I Z, ad satırı halkalı'), yeni: 'en:s:name', degisen: 'nesne' },
    { tur: 'gor', ses: [mem('What is your name?')], S: sahne([...memur(), ...adSoruBalon(), ver(), ...elim()],
      'memurun balonunda küçük form, ad satırı halkalı ve boş; memurdan sana ok'), yeni: 'en:k:what-is-your-name', degisen: 'eylem' },
    { tur: 'gor', ses: [sen('My name is Deniz.')], S: sahne([...memur('asagi'), ...adBalon(), ...elim()],
      'senin balonunda beş küçük harf kartı: D E N I Z'), yeni: 'en:k:my-name-is', degisen: 'kisi' },
    { tur: 'gor', ses: [sen('D, E, N, I, Z.')], S: sahne([...memur(), ...form(140, 92, .75, { ad: DENIZ }), ...balon(204, 66), ...elim()],
      'memur formun ad satırına D E N I Z yazıyor; senin konuşma balonun'), degisen: 'eylem' },
    { tur: 'sec', ses: [anl('E?')], dogruSes: [anl('E.')], dogru: 1,
      secenek: [harfS('I'), harfS('E'), harfS('A')], birimler: ['en:y:alfabe'] },
    // 27-29: sign here
    { tur: 'gor', ses: [mem('Sign here, please.')], S: sahne([...memur(), ...form(160, 82, .9), satirHalka(160, 82, .9, 'imza'), ...elim()],
      'tezgâhta form, imza çizgisi halkalı; memur kolunu forma uzatıyor'), yeni: 'en:k:sign-here', degisen: 'eylem' },
    { tur: 'gor', ses: [mem('Thank you.')], S: sahne([...memur(), ...form(KISI_EL[0] + 8, 58, .45, { adCizgi: true, imza: 'imza' }), ...elim()],
      'imzalı form memurun elinde, memur gülüyor; senin elin boş'), degisen: 'eylem' },
    { tur: 'sec', ses: [mem('Sign here, please.')], dogruSes: [mem('Sign here, please.')], dogru: 0,
      secenek: [formS('imza'), formS('ad'), formS('numara')], birimler: ['en:k:sign-here'] },
    // Yazı perdesi
    { tur: 'yazi', birimler: ['en:s:eleven', 'en:s:twelve', 'en:y:sayilar-13-19', 'en:s:number', 'en:y:am-are', 'en:s:form', 'en:y:alfabe',
      'en:s:name', 'en:k:what-is-your-name', 'en:k:my-name-is', 'en:k:sign-here'] },
  ],

  // ---- Pratik (taslak §13.4): 5 oyun dizisi = 5 tür, 37 etkileşim (eşleştir 2 tahta, boşluk 6, ne derdin 6, sırala 5, hızlı tur
  // 1 × 12 soru). Önceki duraklardan birimler geri döner (≥ %30). Oynatıcı şıkları karıştırmaz: doğru şık sırası elle düzensiz.
  // Pratikte 16 çizilmez, yanlış harf M'dir, saat 10 yoktur (hikâye cevaplarını göstermesin).
  pratik: [
    // Oyun 1 · eşleştir: -teen karşıtlığı (5 ve 15, 9 ve 19); sonra 11, 12, form, pasaport
    { tur: 'eslestir', ciftler: [
      { ses: [anl('Five.')], S: plakaS(5), birim: 'en:s:five' },
      { ses: [anl('Fifteen.')], S: plakaS(15), birim: 'en:y:sayilar-13-19' },
      { ses: [anl('Nine.')], S: plakaS(9), birim: 'en:s:nine' },
      { ses: [anl('Nineteen.')], S: plakaS(19), birim: 'en:y:sayilar-13-19' },
    ] },
    { tur: 'eslestir', ciftler: [
      { ses: [anl('Eleven.')], S: plakaS(11), birim: 'en:s:eleven' },
      { ses: [anl('Twelve.')], S: plakaS(12), birim: 'en:s:twelve' },
      { ses: [anl('A form.')], S: tekS('form'), birim: 'en:s:form' },
      { ses: [anl('A passport.')], S: tekS('pasaport'), birim: 'en:s:passport' },
    ] },
    // Oyun 2 · boşluk (6; doğrular B A C A B C)
    { tur: 'bosluk', ses: [mem('Number seventeen, please.')], metin: 'Number ___, please.',
      secenek: [plakaS(7), plakaS(17), plakaS(13)], dogru: 1, birimler: ['en:s:number', 'en:y:sayilar-13-19', 'en:s:please'] },
    { tur: 'bosluk', ses: [sen('My name is Deniz.')], metin: 'My ___ is Deniz.',
      secenek: [formS('ad', { ad: DENIZ }), formS('imza'), fisS(12)], dogru: 0, birimler: ['en:k:my-name-is', 'en:s:name'] },
    { tur: 'bosluk', ses: [mem('Here is your form.')], metin: 'Here is your ___.',
      secenek: [tekS('pasaport'), tekS('anahtar'), tekS('form')], dogru: 2, birimler: ['en:k:here-is', 'en:s:your', 'en:s:form'] },
    { tur: 'bosluk', ses: [sen('I am number eighteen.')], metin: 'I am number ___.',
      secenek: [fisS(18), fisS(8), fisS(13)], dogru: 0, birimler: ['en:y:am-are', 'en:s:number', 'en:y:sayilar-13-19'] },
    { tur: 'bosluk', ses: [mem('Room thirteen.')], metin: 'Room ___.',
      secenek: [kapiS(3), kapiS(13), kapiS(14)], dogru: 1, birimler: ['en:s:room', 'en:y:sayilar-13-19'] },
    { tur: 'bosluk', ses: [anl("Eleven o'clock.")], metin: "___ o'clock.",
      secenek: [saatS(7), saatS(1), saatS(11)], dogru: 2, birimler: ['en:s:eleven', 'en:s:oclock'] },
    // Oyun 3 · ne derdin? (6; senin balonun yok; doğrular B A C C A B)
    { tur: 'nederdin', S: sahne([...memur(), ...adSoruBalon(), ver(), ...elim()], 'memurun balonunda küçük form, ad satırı halkalı; memurdan sana ok; senin elin boş'),
      secenekSes: [[sen('Goodbye.')], [sen('My name is Deniz.')], [sen('Eleven.')]], dogru: 1, birimler: ['en:k:my-name-is'] },
    { tur: 'nederdin', S: sahne([...memur('ileri', 'mutlu', '17'), ...elim(), ...fis('17')], 'sıra ekranında on yedi; memur kolunu sana uzatıyor; avucunda sıra fişi on yedi'),
      secenekSes: [[sen('I am number seventeen.')], [sen('Goodbye.')], [sen('A form.')]], dogru: 0, birimler: ['en:y:am-are', 'en:s:number', 'en:y:sayilar-13-19'] },
    { tur: 'nederdin', S: sahne([...memur(), ...konusma(132, 30, 'hizli'), ...form(KISI_EL[0] + 6, 70, .4), ...elim()], 'memurun elinde form; balonunda üç sıra sık zikzak çizgi; senin elin boş'),
      secenekSes: [[sen('I am number twelve.')], [sen('Thank you.')], [sen('Speak slowly, please.')]], dogru: 2, birimler: ['en:k:speak-slowly'] },
    { tur: 'nederdin', S: sahne([...memur(), ...form(KISI_EL[0] + 8, 58, .45), ver(), ...elim()], 'memur formu sana uzatıyor, memurdan sana ok; senin elin boş'),
      secenekSes: [[sen('Sorry.')], [sen('Nineteen.')], [sen('Thank you.')]], dogru: 2, birimler: ['en:k:thank-you'] },
    { tur: 'nederdin', S: sahne([...memur(), ...konusma(132, 30, 'pasaport'), ...elim(), ...pasaport(182, 108)], 'memurun balonunda pasaport; senin avucunda pasaport'),
      secenekSes: [[sen('Here is my passport.')], [sen('What is your name?')], [sen('Eleven.')]], dogru: 0, birimler: ['en:k:here-is', 'en:s:my', 'en:s:passport'] },
    { tur: 'nederdin', S: sahne([...form(116, 52, 1.7, { ad: ['D', 'A', 'N', 'I', 'Z'] }), harfAlti(...harfYeri(116, 52, 1.7, 1), 1.7), ...elim()],
      'form yakından (yalnız satırlar); ad satırında el yazısıyla D A N I Z, A harfinin altı çizili; senin elin'),
      secenekSes: [[sen('Yes. Thank you.')], [sen('No, sorry. D, E, N, I, Z.')], [sen('Sign here, please.')]], dogru: 1,
      birimler: ['en:s:no', 'en:s:sorry', 'en:s:please', 'en:y:alfabe'] },
    // Oyun 4 · sırala (5): tek büyük harfli kart ve tek noktalı kart, tek sıra. "My name is Deniz." alınmadı (iki büyük harf).
    { tur: 'sirala', ses: [mem('What is your name?')], parcalar: ['What', 'is', 'your', 'name?'], birimler: ['en:k:what-is-your-name'] },
    { tur: 'sirala', ses: [sen('I am number twelve.')], parcalar: ['I', 'am', 'number', 'twelve.'], birimler: ['en:y:am-are', 'en:s:number', 'en:s:twelve'] },
    { tur: 'sirala', ses: [mem('Sign here, please.')], parcalar: ['Sign', 'here,', 'please.'], birimler: ['en:k:sign-here', 'en:s:please'] },
    { tur: 'sirala', ses: [mem('Here is your form.')], parcalar: ['Here', 'is', 'your', 'form.'], birimler: ['en:k:here-is', 'en:s:your', 'en:s:form'] },
    { tur: 'sirala', ses: [sen('Here is my passport.')], parcalar: ['Here', 'is', 'my', 'passport.'], birimler: ['en:k:here-is', 'en:s:my', 'en:s:passport'] },
    // Oyun 5 · hızlı tur (60 sn, 12 soru); doğrular A C B B A C C A B A B C (A 4, B 4, C 4)
    { tur: 'hizli', sure: 60, sorular: [
      { tur: 'sec', ses: [anl('Eleven.')], dogruSes: [anl('Eleven.')], secenek: [plakaS(11), plakaS(7), plakaS(12)], dogru: 0, birimler: ['en:s:eleven'] },
      { tur: 'sec', ses: [anl('Twelve.')], dogruSes: [anl('Twelve.')], secenek: [plakaS(2), plakaS(11), plakaS(12)], dogru: 2, birimler: ['en:s:twelve'] },
      { tur: 'sec', ses: [anl('Fourteen.')], dogruSes: [anl('Fourteen.')], secenek: [plakaS(4), plakaS(14), plakaS(15)], dogru: 1, birimler: ['en:y:sayilar-13-19'] },
      { tur: 'sec', ses: [anl('Seventeen.')], dogruSes: [anl('Seventeen.')], secenek: [plakaS(13), plakaS(17), plakaS(7)], dogru: 1, birimler: ['en:y:sayilar-13-19'] },
      { tur: 'sec', ses: [anl('A form.')], dogruSes: [anl('A form.')], secenek: [tekS('form'), tekS('pasaport'), tekS('bilet')], dogru: 0, birimler: ['en:s:form'] },
      { tur: 'sec', ses: [anl('E.')], dogruSes: [anl('E.')], secenek: [harfS('A'), harfS('I'), harfS('E')], dogru: 2, birimler: ['en:y:alfabe'] },
      { tur: 'sec', ses: [anl('I.')], dogruSes: [anl('I.')], secenek: [harfS('E'), harfS('A'), harfS('I')], dogru: 2, birimler: ['en:y:alfabe'] },
      { tur: 'sec', ses: [anl('Number twelve.')], dogruSes: [anl('Number twelve.')], secenek: [fisS(12), fisS(2), fisS(11)], dogru: 0, birimler: ['en:s:number', 'en:s:twelve'] },
      { tur: 'sec', ses: [anl('Sign here.')], dogruSes: [anl('Sign here.')], secenek: [formS('ad'), formS('imza'), formS('numara')], dogru: 1, birimler: ['en:k:sign-here'] },
      { tur: 'sec', ses: [anl('A passport.')], dogruSes: [anl('A passport.')], secenek: [tekS('pasaport'), tekS('bilet'), tekS('form')], dogru: 0, birimler: ['en:s:passport'] },
      { tur: 'sec', ses: [anl('Room fifteen.')], dogruSes: [anl('Room fifteen.')], secenek: [kapiS(5), kapiS(15), kapiS(14)], dogru: 1, birimler: ['en:s:room', 'en:y:sayilar-13-19'] },
      { tur: 'sec', ses: [anl('A key.')], dogruSes: [anl('A key.')], secenek: [tekS('form'), tekS('pasaport'), tekS('anahtar')], dogru: 2, birimler: ['en:s:key'] },
    ] },
  ],

  // ---- Hikâyecikler (taslak §13.5): yeni birim yok. Tek kural: kök hikâyede bir kez geçen satırdır; şıklar o karenin üç hâlidir;
  // doğru şık hikâyede olan hâldir. Kök tek başına cevabı vermez; bir sorunun şıkları başka bir sorunun cevabını göstermez; bir
  // hikâyede iki soru aynı türden değil. Doğrular H1 B C B, H2 A C A (düzeltme turu 1).
  hikayeler: [
    // 1 · Müfredat fikri: memur adı yanlış yazar; sen yavaş konuşmasını rica eder, adını harf harf düzeltirsin. Sıra numaran 16.
    // Memur hızlı konuşur; yavaş konuşmasını istersin. "Deniz"i DENIS yazar; harf harf hecelersin, Z'yi düzeltir. Form sarı başlıklı.
    { id: 'harf-harf', ad: 'D, E, N, I, Z',
      sayfalar: [
        { tur: 'gor', ses: [mem('Number sixteen, please.')], S: sahne([...memur('ileri', 'mutlu', '16'), ...elim(), ...fis('16')], 'sıra ekranında on altı; memur kolunu sana uzatıyor; avucunda sıra fişi on altı') },
        { tur: 'gor', ses: [sen('Hello. I am number sixteen.')], S: sahne([...memur('ileri', 'mutlu', '16'), iste(), ...elim(), ...fis('16'), ...balon(146, 58)], 'fişi memura uzatıyorsun, senden memura ok; senin konuşma balonun; sıra ekranında on altı') },
        { tur: 'gor', ses: [mem(HIZLI_RESMI)], S: sahne([...memur('ileri', 'mutlu', '16'), ...konusma(132, 30, 'hizli'), ...elim()], 'memurun balonunda üç sıra sık zikzak çizgi; sıra ekranında on altı') },
        { tur: 'gor', ses: [sen("Sorry, I don't understand. Speak slowly, please.")], S: sahne([...memur('ileri', 'mutlu', '16'), ...konusma(132, 30, 'hizli'), ...elim(), ...balon(196, 96, 'yavasla', 1.3)], 'memurun balonunda sık zikzak; senin balonunda küçük zikzak, ok ve aralıklı üç çizgi; sıra ekranında on altı') },
        { tur: 'gor', ses: [mem('What... is... your... name?')], S: sahne([...memur('ileri', 'mutlu', '16'), ...konusma(132, 30, 'yavas'), ...elim()], 'memurun balonunda aralıklı üç çizgi; sıra ekranında on altı') },
        { tur: 'gor', ses: [sen('My name is Deniz.')], S: sahne([...memur('asagi', 'mutlu', '16'), ...adBalon(166, 76), ...elim()], 'senin balonunda beş küçük harf kartı: D E N I Z; sıra ekranında on altı') },
        { tur: 'gor', ses: [mem('Deniz. Thank you.')], S: sahne([...memur('ileri', 'mutlu', '16'), ...masadaForm({ renk: 'yellow', ad: DENIS }), ...elim()], 'tezgâhta sarı başlıklı form; memur ad satırına D E N I S yazıyor') },
        { tur: 'gor', ses: [sen('No, sorry.')], S: sahne(adSatir(DENIS, 4), 'ad satırı yakından: D E N I S, S halkalı; senin balonunda kırmızı çarpı') },
        { tur: 'gor', ses: [sen('D, E, N, I, Z.')], S: sahne([...form(64, 118, 1, { renk: 'yellow', ad: DENIS }), ...balon(168, 52, harfSira(DENIZ, 168, 40, .45), 2.2)], 'sarı başlıklı formda D E N I S; senin büyük balonunda beş harf kartı: D E N I Z') },
        { tur: 'gor', ses: [mem('Sorry! Z.')], S: sahne([...memur('ileri', 'sasir', '16'), ...masadaForm({ renk: 'yellow', ad: DENIZ }), harfAlti(...harfYeri(150, 92, .8, 4), .8), ...elim()], 'memur şaşkın; formun ad satırında D E N I Z, Z harfinin altı çizili') },
        { tur: 'gor', ses: [mem('Sign here, please.')], S: sahne([...memur('ileri', 'mutlu', '16'), ...masadaForm({ renk: 'yellow', ad: DENIZ }), satirHalka(150, 92, .8, 'imza'), ...elim()], 'sarı başlıklı form; imza çizgisi halkalı') },
        { tur: 'gor', ses: [sen('Thank you. Goodbye.')], S: sahne([...memur('yukari', 'mutlu', '16'), ...sallar(60, 58), ...form(150, 104, .6, { renk: 'yellow', ad: DENIZ, imza: 'imza' }), ...okSag(128, 226, 46), ...elim()], 'memur iki elini sallıyor; tezgâhta imzalı sarı form; sen sağa gidiyorsun (sağa ok)') },
      ],
      sorular: [
        // Soru 1 (kare 8, yazılış): "No, sorry." — memurun yazdığı; şıklar yalnız ad satırı (form başlığı yok: soru 3'ü göstermez).
        // Düzeltme turu 1: üç yakın yazılış DENNIS / DENIS / DENISE (üçü de gerçek ad; "en olası yanlış duyuş" tahmini ayırmaz).
        // Hikâyede DENIS (kare 7–8).
        { tur: 'sec', ses: [sen('No, sorry.')], dogruSes: [sen('No, sorry.')], dogru: 1,
          secenek: [adSatirS(['D', 'E', 'M', 'I', 'Z']), adSatirS(DENIS), adSatirS(['T', 'E', 'N', 'I', 'Z'])], birimler: ['en:s:no', 'en:s:sorry', 'en:y:alfabe'] },
        // Soru 2 (kare 4, sayı): sıra ekranı; şıklar kare 4'ün üç hâli. Hikâyede 16 (orta değer, C).
        { tur: 'sec', ses: [sen("Sorry, I don't understand. Speak slowly, please.")], dogruSes: [sen("Sorry, I don't understand. Speak slowly, please.")], dogru: 2,
          secenek: [yavaslaS(13), yavaslaS(19), yavaslaS(16)], birimler: ['en:k:i-dont-understand', 'en:k:speak-slowly', 'en:y:sayilar-13-19'] },
        // Soru 3 (kare 11, renk): formun başlık şeridi; ad satırı boş (soru 1'i göstermez). Hikâyede sarı; varsayılan mavi şıkta yok.
        { tur: 'sec', ses: [mem('Sign here, please.')], dogruSes: [mem('Sign here, please.')], dogru: 1,
          secenek: [imzaRenkS('red'), imzaRenkS('yellow'), imzaRenkS('green')], birimler: ['en:k:sign-here', 'en:s:please', 'en:s:form', 'en:s:yellow'] },
      ] },
    // 2 · Yanlış yere imza. Saat on, sıra numaran 12. Memur pasaportunu ister, turuncu başlıklı formu verir. İmzayı numara satırına atarsın; memur imza
    // çizgisini gösterir. Pasaportun geri gelir.
    { id: 'imza', ad: 'Sign here, please',
      sayfalar: [
        { tur: 'gor', ses: [mem('Number twelve, please.')], S: sahne([...memur('ileri', 'mutlu', '12'), ...duvarSaati(10), ...elim(), ...fis('12')], 'sıra ekranında on iki; duvarda saat tam on; memur kolunu uzatıyor; avucunda sıra fişi on iki') },
        { tur: 'gor', ses: [sen('Hello. I am number twelve.')], S: sahne([...memur('ileri', 'mutlu', '12'), ...duvarSaati(10), iste(), ...elim(), ...fis('12'), ...balon(146, 58)], 'fişi uzatıyorsun, senden memura ok; senin konuşma balonun; duvarda saat tam on') },
        { tur: 'gor', ses: [mem('Hello. Passport, please.')], S: sahne([...memur('ileri', 'mutlu', '12'), ...duvarSaati(10), ...konusma(128, 58, 'pasaport', .75), ...elim()], 'memurun balonunda pasaport; duvarda saat tam on') },
        { tur: 'gor', ses: [sen('Here.')], S: sahne([...memur('ileri', 'mutlu', '12'), ...duvarSaati(10), iste(), ...elim(), ...pasaport(182, 108)], 'pasaport senin avucunda, senden memura ok; duvarda saat tam on') },
        { tur: 'gor', ses: [mem('Thank you. Here is your form.')], S: sahne([...memur('ileri', 'mutlu', '12'), ...duvarSaati(10), ...pasaport(26, 100), ...plaka(88, 124, '12', .4), ...form(KISI_EL[0] + 10, 56, .55, { renk: 'orange' }), ver(), ...elim()], 'pasaport ve sıra fişi on iki tezgâhta; memur turuncu başlıklı boş formu sana uzatıyor, memurdan sana ok; duvarda saat tam on') },
        { tur: 'gor', ses: [mem('Sign here, please.')], S: sahne([...yakinForm(), ...konusma(202, 30, undefined, .6)], 'form yakından (yalnız satırlar); memurun konuşma balonu') },
        { tur: 'gor', ses: [sen('Here?')], S: sahne([...yakinForm({ imza: 'numara' }), ...balon(204, 34)], 'form yakından; imza numara satırında; senin konuşma balonun') },
        { tur: 'gor', ses: [mem('No, sorry. Here.')], S: sahne([...yakinForm({ imza: 'numara' }), satirHalka(120, 52, 1.7, 'imza'), ...konusma(202, 30, 'hayir', .6)], 'form yakından; imza numara satırında; imza çizgisi halkalı; memurun balonunda kırmızı çarpı') },
        { tur: 'gor', ses: [sen('Sorry.')], S: sahne([...yakinForm({ imza: ['numara', 'imza'] }), ...balon(204, 34)], 'form yakından; iki imza: numara satırında ve imza çizgisinde') },
        { tur: 'gor', ses: [mem('Thank you. Here is your passport.')], S: sahne([...memur('ileri', 'mutlu', '12'), ...duvarSaati(10), ...form(30, 96, .4, { renk: 'orange', imza: ['numara', 'imza'] }), ...plaka(88, 124, '12', .4), ...pasaport(KISI_EL[0] + 4, 58), ver(), ...elim()], 'imzalı form ve sıra fişi on iki tezgâhta; memur pasaportu sana uzatıyor, memurdan sana ok; duvarda saat tam on') },
        { tur: 'gor', ses: [sen('Thank you. Goodbye.')], S: sahne([...memur('yukari', 'mutlu', '12'), ...sallar(60, 58), ...duvarSaati(10), ...form(30, 96, .4, { renk: 'orange', imza: ['numara', 'imza'] }), ...plaka(88, 124, '12', .4), ...okSag(128, 226, 74), ...elim(), ...pasaport(182, 108)], 'memur iki elini sallıyor; imzalı form ve sıra fişi on iki tezgâhta; avucunda pasaport; sen sağa gidiyorsun (sağa ok); duvarda saat tam on') },
      ],
      sorular: [
        // Soru 1 (kare 2, saat): duvardaki saat; yalnız resimde verilir. Hikâyede on. Düzeltme turu 1 (M-5): doğru A'da ve en büyük
        // değer (H1 S2'de C'deki orta değerdi).
        { tur: 'sec', ses: [sen('Hello. I am number twelve.')], dogruSes: [sen('Hello. I am number twelve.')], dogru: 0,
          secenek: [saatliS(10), saatliS(8), saatliS(9)], birimler: ['en:s:hello', 'en:y:am-are', 'en:s:number', 'en:s:twelve', 'en:s:ten', 'en:s:oclock'] },
        // Soru 2 (kare 7, yer): ilk imza nerede. Hikâyede numara satırında. Düzeltme turu 2: şıklar formun üç gerçek satırı (ad, oda
        // numarası, numara); imza çizgisi yok; kare 6'da ok yok.
        { tur: 'sec', ses: [sen('Here?')], dogruSes: [sen('Here?')], dogru: 2,
          secenek: [imzaYerS('ad'), imzaYerS('oda'), imzaYerS('numara')], birimler: ['en:s:here', 'en:s:form'] },
        // Soru 3 (kare 5, renk): memurun uzattığı formun başlık bandı. Düzeltme turu 2: dünya bilgisiyle bulunamayan, yalnız bu
        // hikâyeye özgü olgu (bu durağın öteki formları mavi; H2'ninki turuncu). Kare 6–9 yakın çekimlerinde bant görünmez.
        { tur: 'sec', ses: [mem('Thank you. Here is your form.')], dogruSes: [mem('Thank you. Here is your form.')], dogru: 0,
          secenek: [formVerS('orange'), formVerS('su'), formVerS('green')], birimler: ['en:k:thank-you', 'en:k:here-is', 'en:s:your', 'en:s:form'] },
      ] },
  ],
};
