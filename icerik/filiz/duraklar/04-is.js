// Filiz durağı 4: İş (18 Kasım 2026). Onaylı taslak: taslak/durak-taslaklari.md §4 (30 sayfa, 3 yoklama sorusu).
// Şantiye ya da atölye. Kahraman "sen"sin: ustabaşı (rol 'is', kahverengi tezgâh) sana konuşur, sağ alttaki el senin elin. Türkçe yok.
// Durak 1-3'ten dönenler (yeni sayılmaz): hello, a, the, take the, give me, thank you, red, two, çoğul -s ("two hammers").
// help ve o'clock soyut sözcük (kısa tr); help me, can you, I can kalıp (tr yok). 6-10 beş ayrı sayfada (§8/2).
import { balon, cekic, el, halka, kisi, kutu, kutuSira, matkap, ok, saat, KISI_EL, SEN_EL } from '../parca.js';

const H = 180;
const sahne = (o, alt) => ({ boy: H, alt, o });
const anl = metin => ({ rol: 'anlatici', metin });
const sen = metin => ({ rol: 'sen', metin });
const ust = metin => ({ rol: 'is', metin });

const usta = (kol, yuz) => kisi('is', kol, yuz);
const yer = () => [{ t: 'r', x: 10, y: 126, w: 220, h: 30, rx: 4, f: 'yol' }]; // boş zemin şeridi
const ver = () => ok(112, 84, 168, 112); // ustabaşından sana yönelen ok
const iste = () => ok(158, 100, 114, 80); // senden ustabaşına (isterken)
// Ustabaşının elindeki nesne (KISI_EL civarı) ve senin avucundaki nesne (parmak uçlarına oturur).
const ustaElinde = (nesne, s) => nesne(KISI_EL[0] + 4, 58, s);
const senElinde = nesne => nesne(178, 112, .7);
const cek = (x, y, s) => cekic(x, y, s);
const mat = (x, y, s) => matkap(x, y, s);
const kut = (f = 'kraft') => (x, y, s) => kutu(x, y, f, s);

// n çekiç yan yana (sec ve yoklama için); y orta, s ölçek.
const cekicler = (n, y, s) => Array.from({ length: n }, (_, i) => cekic(120 + (i - (n - 1) / 2) * 50, y, s)).flat();
// sec seçeneği (boy 120'ye sığar): tek nesne boş zeminde; her şey y ≤ 105.
const tek = nesne => sahne(nesne(120, 58, 1.1));
// Can you give me the hammer? seçeneği: ustabaşı ve senin elin aynı yerde; yalnız senin avucundaki nesne değişir.
const avucta = nesne => sahne([{ t: 'k', x: 60, y: 100, s: 2, kol: 'ileri' }, ...el(185, 92), ...nesne(180, 56, .9)]);
const saatSec = n => sahne(saat(120, 62, n));

export default {
  dil: 'en', id: 'is', no: 4, ad: 'İş',
  yoklama: [
    { tur: 'sec', ses: [ust('Give me the drill.')], dogruSes: [ust('Give me the drill.')], dogru: 1,
      secenek: [
        sahne([...usta('ileri'), ...ustaElinde(mat, .7), ver(), ...el(...SEN_EL)]),
        sahne([...usta('ileri'), iste(), ...el(...SEN_EL), ...senElinde(mat)]),
        sahne([...usta('ileri'), iste(), ...el(...SEN_EL), ...senElinde(cek)]),
      ],
      birimler: ['en:s:drill'] },
    { tur: 'sec', ses: [anl('Two hammers.')], dogruSes: [anl('Two hammers.')], dogru: 1,
      secenek: [sahne(cekicler(1, 84, 1.3)), sahne(cekicler(2, 84, 1.3)), sahne(cekicler(3, 84, 1.3))],
      birimler: ['en:s:hammer'] },
    { tur: 'sec', ses: [anl("Nine o'clock.")], dogruSes: [anl("Nine o'clock.")], dogru: 2,
      secenek: [sahne(saat(120, 84, 10, 1.3)), sahne(saat(120, 84, 8, 1.3)), sahne(saat(120, 84, 9, 1.3))],
      birimler: ['en:s:oclock', 'en:s:nine'] },
  ],
  sayfalar: [
    // 1-2: selam
    { tur: 'gor', ses: [ust('Hello.')], S: sahne(usta('yukari'), 'ustabaşı el sallıyor'), degisen: 'kisi' },
    { tur: 'gor', ses: [sen('Hello.')], S: sahne([...usta('asagi'), ...balon(150, 60), ...el(...SEN_EL)], 'senin elin sallıyor, konuşma balonu'), degisen: 'eylem' },
    // 3-6: üç alet, üç ayrı silüet
    { tur: 'gor', ses: [anl('A hammer.')], S: sahne([...yer(), ...cekic(120, 84, 1.5)], 'boş zeminde tek çekiç'), yeni: 'en:s:hammer', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('A drill.')], S: sahne([...yer(), ...matkap(120, 82, 1.5)], 'boş zeminde tek matkap'), yeni: 'en:s:drill', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('A box.')], S: sahne([...yer(), ...kutu(120, 88, 'kraft', 1.8)], 'boş zeminde tek kapalı kutu'), yeni: 'en:s:box', degisen: 'nesne' },
    { tur: 'sec', ses: [anl('A drill?')], dogruSes: [anl('A drill.')], dogru: 1,
      secenek: [tek(cek), tek(mat), tek(kut())], birimler: ['en:s:drill'] },
    // 7-10: al, ver, teşekkür, renk
    { tur: 'gor', ses: [ust('Take the hammer.')], S: sahne([...usta('ileri'), ...ustaElinde(cek, .8), ver(), ...el(...SEN_EL)], 'ustabaşı çekici sana uzatıyor'), degisen: 'eylem' },
    { tur: 'gor', ses: [ust('Give me the drill.')], S: sahne([...usta('ileri'), iste(), ...el(...SEN_EL), ...senElinde(mat)], 'matkap senin avucunda, ok ustabaşına'), degisen: 'eylem' },
    { tur: 'gor', ses: [ust('Thank you.')], S: sahne([...usta('ileri'), ...ustaElinde(mat, .7), ...el(...SEN_EL)], 'matkap ustabaşının elinde, senin elin boş'), degisen: 'eylem' },
    { tur: 'gor', ses: [ust('Take the red box.')], S: sahne([...usta('ileri'), ...ustaElinde(kut('red'), .7), ver(), ...el(...SEN_EL)], 'ustabaşı kırmızı kutuyu sana uzatıyor'), degisen: 'renk' },
    // 11-12: çoğul
    { tur: 'gor', ses: [anl('Two hammers.')], S: sahne([...yer(), ...cekicler(2, 84, 1.3)], 'iki çekiç yan yana'), degisen: 'nesne' },
    { tur: 'sec', ses: [anl('Two hammers.')], dogruSes: [anl('Two hammers.')], dogru: 1,
      secenek: [sahne(cekicler(1, 60, .9)), sahne(cekicler(2, 60, .9)), sahne(cekicler(3, 60, .9))], birimler: ['en:s:hammer'] },
    // 13-19: help, help me, can you, I can
    { tur: 'gor', ses: [anl('Help.')],
      S: sahne([{ t: 'k', x: 70, y: 130, s: 1.7, kol: 'tasi' }, { t: 'k', x: 170, y: 130, s: 1.7, kol: 'tasi' }, ...kutu(120, 88, 'kraft', 1.5)], 'iki kişi büyük bir kutuyu birlikte taşıyor'),
      yeni: 'en:s:help', degisen: 'eylem' },
    { tur: 'gor', ses: [ust('Help me.')], S: sahne([...usta('ileri'), ...kutu(131, 100, 'kraft', 1.5), ok(112, 50, 172, 108), ...el(...SEN_EL)], 'ustabaşı büyük kutunun bir ucunu tutuyor, ok senin elinde'), yeni: 'en:k:help-me', degisen: 'eylem' },
    { tur: 'gor', ses: [ust('Can you help me?')], S: sahne([...usta('ileri'), ...kutu(160, 80, 'kraft', 1.3), halka(160, 80, 40), ok(112, 54, 152, 112), ...el(...SEN_EL)], 'ustabaşı yerdeki kutuyu gösterip sana dönüyor, el açık'), yeni: 'en:k:can-you', degisen: 'eylem' },
    { tur: 'gor', ses: [sen('I can.')],
      S: sahne([...usta('ileri'), ...kutu(142, 100, 'kraft', 1.6), ...el(...SEN_EL), ...balon(196, 50), { t: 'l', d: 'M190 92 l8 9 l16 -18', w: 3.4, k: 'yesil' }], 'kutunun öbür ucunu senin elin tutuyor, onay işareti'),
      yeni: 'en:k:i-can', degisen: 'kisi' },
    { tur: 'gor', ses: [ust('Can you take the box?')], S: sahne([...usta('ileri'), ...ustaElinde(kut(), .7), ver(), ...el(...SEN_EL)], 'ustabaşı kutuyu sana uzatıyor'), degisen: 'nesne' },
    { tur: 'gor', ses: [ust('Can you give me the drill?')], S: sahne([...usta('ileri'), iste(), ...el(...SEN_EL), ...senElinde(mat)], 'senin elin matkabı ustabaşına uzatıyor'), degisen: 'nesne' },
    { tur: 'sec', ses: [ust('Can you give me the hammer?')], dogruSes: [ust('Can you give me the hammer?')], dogru: 0,
      secenek: [avucta(cek), avucta(mat), avucta(kut())], birimler: ['en:k:can-you', 'en:s:hammer'] },
    // 20: saat
    { tur: 'gor', ses: [anl('A clock.')], S: sahne(saat(120, 80, 3, 1.3), 'duvar saati, tam üçü gösteriyor'), yeni: 'en:s:clock', degisen: 'nesne' },
    // 21-25: sayılar 6-10, beş ayrı sayfa (§8/2)
    { tur: 'gor', ses: [anl('Six.')], S: sahne(kutuSira(6), 'altı kutu'), yeni: 'en:s:six', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Seven.')], S: sahne(kutuSira(7), 'yedi kutu'), yeni: 'en:s:seven', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Eight.')], S: sahne(kutuSira(8), 'sekiz kutu'), yeni: 'en:s:eight', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Nine.')], S: sahne(kutuSira(9), 'dokuz kutu'), yeni: 'en:s:nine', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Ten.')], S: sahne(kutuSira(10), 'on kutu'), yeni: 'en:s:ten', degisen: 'nesne' },
    // 26-28: tam saat
    { tur: 'gor', ses: [anl("Eight o'clock.")], S: sahne(saat(120, 84, 8, 1.4), 'saat tam sekizi gösteriyor'), yeni: 'en:s:oclock', degisen: 'nesne' },
    { tur: 'gor', ses: [anl("Nine o'clock.")], S: sahne(saat(120, 84, 9, 1.4), 'saat tam dokuzu gösteriyor'), degisen: 'nesne' },
    { tur: 'sec', ses: [anl("Ten o'clock?")], dogruSes: [anl("Ten o'clock.")], dogru: 1,
      secenek: [saatSec(9), saatSec(10), saatSec(8)], birimler: ['en:s:oclock', 'en:s:ten'] },
    // 29: ilk gün başlıyor
    { tur: 'gor', ses: [ust("Eight o'clock. Take the hammer.")], S: sahne([...usta('ileri'), ...ustaElinde(cek, .8), ver(), ...saat(190, 46, 8, .7), ...el(...SEN_EL)], 'saat sekiz, ustabaşı çekici sana uzatıyor'), degisen: 'eylem' },
    // Yazı perdesi
    { tur: 'yazi', birimler: ['en:s:hammer', 'en:s:drill', 'en:s:box', 'en:s:help', 'en:k:help-me', 'en:k:can-you', 'en:k:i-can', 'en:s:clock', 'en:s:oclock', 'en:s:six', 'en:s:seven', 'en:s:eight', 'en:s:nine', 'en:s:ten'] },
  ],
};
