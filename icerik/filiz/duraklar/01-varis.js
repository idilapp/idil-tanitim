// Filiz durağı 1: Varış (18 Kasım 2026). Onaylı taslak: taslak/durak-taslaklari.md §2 (29 sayfa, 3 yoklama sorusu).
// Havalimanı, pasaport masası. Kahraman "sen"sin: memur sana konuşur, sağ alttaki el senin elin. Sıfır İngilizce varsayılır, Türkçe yok.
// `the` ve `thank you` Pazar'da öğretilir: burada "Where?" ve "Here." tek sözcüktür. Sayılar çoğul -s'siz.
import { canta, cantaSira, pasaport, bilet, balon, masa, el, kisi, ok, halka, SEN_EL } from '../parca.js';

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

export default {
  dil: 'en', id: 'varis', no: 1, ad: 'Varış',
  yoklama: [
    { tur: 'sec', ses: [anl('A passport?')], dogruSes: [anl('A passport.')], dogru: 2,
      secenek: [sahne(canta(120, 80)), sahne(bilet(120, 80)), sahne(pasaport(120, 80))],
      birimler: ['en:s:passport', 'en:y:a'] },
    { tur: 'sec', ses: [anl('This is a ticket.')], dogruSes: [anl('This is a ticket.')], dogru: 1,
      secenek: [elAlti('canta'), elAlti('bilet'), elAlti('pasaport')],
      birimler: ['en:k:this-is', 'en:s:ticket'] },
    { tur: 'sec', ses: [anl('Three.')], dogruSes: [anl('Three.')], dogru: 0,
      secenek: [sahne(cantaSira(3, 'kahve', 102)), sahne(cantaSira(4, 'kahve', 102)), sahne(cantaSira(2, 'kahve', 102))],
      birimler: ['en:s:three'] },
  ],
  sayfalar: [
    // 1-2: selam
    { tur: 'gor', ses: [mem('Hello.')], S: sahne(memur('yukari'), 'memur camdan gülümseyip el sallıyor'), yeni: 'en:s:hello', degisen: 'kisi' },
    { tur: 'gor', ses: [sen('Hello.')], S: sahne([...memur('asagi'), ...balon(150, 60), ...el(...SEN_EL)], 'senin elin sallıyor, konuşma balonu'), degisen: 'eylem' },
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
    { tur: 'gor', ses: [mem('Ticket, please.'), sen('Here.')], S: sahne(ver(bilet), 'senin elinde bilet, memura uzatıyorsun'), degisen: 'nesne' },
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
    // Yazı perdesi
    { tur: 'yazi', birimler: ['en:s:hello', 'en:s:bag', 'en:y:a', 'en:s:passport', 'en:s:ticket', 'en:s:this', 'en:k:this-is', 'en:s:please', 'en:s:here', 'en:s:where', 'en:s:one', 'en:s:two', 'en:s:three', 'en:s:four', 'en:s:five'] },
  ],
};
