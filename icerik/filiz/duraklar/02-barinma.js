// Filiz durağı 2: Barınma (18 Kasım 2026). Onaylı taslak: taslak/durak-taslaklari.md §3 (28 sayfa, 3 yoklama sorusu).
// Apartman koridoru ve oda. Kahraman "sen"sin: ev sahibi sana konuşur, sağ alttaki el senin elin. Ev sahibi ayrı rol değil:
// `memur` çerçevesi (gri masa) + anahtar tahtası (§8/3). Türkçe yok. `the` ve `thank you` Pazar'da öğretilir; burada geçmez.
// Durak 1'den dönenler (yeni sayılmaz): hello, a, here. Sayılar "Room one/two/three" kalıbında döner.
// my/your resimde sahiplik olarak okunur: anahtar ev sahibinin elinde (my) ya da senin elinde (your).
import { anahtar, anahtarTahtasi, balon, el, halka, kapi, kisi, odaIci, ok, pencere, plaka, yatak, KISI_EL, SEN_EL } from '../parca.js';

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
};
