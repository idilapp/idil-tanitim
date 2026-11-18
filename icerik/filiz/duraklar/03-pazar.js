// Filiz durağı 3: Pazar (18 Kasım 2026). Denemedeki (tasarim/filiz/sahneler.js) 23 sayfanın yeni biçimi.
// Kahraman "sen"sin: pazarcı sana konuşur, sağ alttaki el senin elin. Türkçe yok; her gor sayfasında en çok bir yeni birim.
import { elma, leke, araba, top, gomlek, el, kisi, ok, halka, KISI_EL, SEN_EL } from '../parca.js';

const H = 180;
const sahne = (o, alt) => ({ boy: H, alt, o });
const anl = metin => ({ rol: 'anlatici', metin });
const paz = metin => ({ rol: 'pazarci', metin });

const ucNesne = f => [...araba(14, 92, f), ...top(120, 100, f), ...gomlek(196, 98, f)];
const ucElma = () => [...elma(55, 96, 'green', 20), ...elma(120, 96, 'yellow', 20), ...elma(185, 96, 'red', 20)];
const pazarci = (kol, yuz) => kisi('pazarci', kol, yuz);

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
};
