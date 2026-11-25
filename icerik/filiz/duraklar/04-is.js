// Filiz durağı 4: İş (18 Kasım 2026). Onaylı taslak: taslak/durak-taslaklari.md §4 (30 sayfa, 3 yoklama sorusu).
// Şantiye ya da atölye. Kahraman "sen"sin: ustabaşı (rol 'is', kahverengi tezgâh) sana konuşur, sağ alttaki el senin elin. Türkçe yok.
// Durak 1-3'ten dönenler (yeni sayılmaz): hello, a, the, take the, give me, thank you, red, two, çoğul -s ("two hammers").
// help ve o'clock soyut sözcük (kısa tr); help me, can you, I can kalıp (tr yok). 6-10 beş ayrı sayfada (§8/2).
// Görev 5 (Dalga 1, 23 Kasım 2026; taslak §12): pratik (5 oyun dizisi, 5 tür, 37 etkileşim) ve iki hikâyecik ("Eight o'clock"
// işte ilk gün, erken geliş ve büyük kutu; "Speak slowly, please" hızlı konuşan ustabaşı ve kayıp matkap). Yeni birim yok; Varış,
// Barınma ve Pazar birimleri geri döner (key, the, red, green, yellow, take the, give me, thank you, here, here is, hello, goodbye,
// yes, no, sorry, where, please, I don't understand, speak slowly, two, three). Bütün roller iDil sesiyle konuşur; ustabaşı
// `kisi('is')` (kahverengi raf çizgisi ve kahverengi tezgâh). Uzlaşımlar (onaylı sahneyle aynı): "take" = ustabaşından sana ok;
// "give me" = senden ustabaşına ok, nesne senin avucunda; "Can you help me?" = ustabaşı büyük kutunun yanında, ondan sana ok;
// "I can." = kutunun öbür ucu senin elinde, balon ve yeşil onay; "the X" = üç nesneden biri halkalı. Balonda nesne = ondan söz
// ediliyor ya da o isteniyor (Barınma ve Pazar'la aynı). Sec seçenekleri oynatıcıda boy 120 penceresinde çizilir; ana öğeler y ≤ 112.
import { anahtar, balon, canta, cekic, el, halka, kisi, konusma, kutu, kutuSira, matkap, ok, okSag, saat, salla, KISI_EL, SEN_EL } from '../parca.js';

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
// Balon içi yukarı ok (Görev 16 Tur 3): (x, y) ok ucu, boy uzunluk; kaldırmak.
const yukariOk = (x, y, boy) => [{ t: 'l', d: `M${x} ${y + boy} L${x} ${y + 1}`, w: 2, k: 'vurgu' }, { t: 'l', d: `M${x - 4} ${y + 5} L${x} ${y} L${x + 4} ${y + 5}`, w: 2, k: 'vurgu' }];
// Balon içi soru işareti (Görev 16 Tur 2; parca.js sozIci 'soru' ile aynı çizim, mutlak konum).
const soruK = (x, y, s = 1) => {
  const n = (dx, dy) => `${+(x + dx * s).toFixed(2)} ${+(y + dy * s).toFixed(2)}`;
  return [{ t: 'l', d: `M${n(-5, -6)} Q${n(-5, -11)} ${n(0, -11)} Q${n(6, -11)} ${n(6, -6)} Q${n(6, -2)} ${n(0, 0)} L${n(0, 4)}`, w: +(2.6 * s).toFixed(2), k: 'vurgu' },
    { t: 'c', x, y: +(y + 9.5 * s).toFixed(2), r: +(2 * s).toFixed(2), f: 'vurgu' }];
};
const mat = (x, y, s) => matkap(x, y, s);
const kut = (f = 'kraft') => (x, y, s) => kutu(x, y, f, s);

// n çekiç yan yana (sec ve yoklama için); y orta, s ölçek.
const cekicler = (n, y, s) => Array.from({ length: n }, (_, i) => cekic(120 + (i - (n - 1) / 2) * 50, y, s)).flat();
// sec seçeneği (boy 120'ye sığar): tek nesne boş zeminde; her şey y ≤ 105.
const tek = nesne => sahne(nesne(120, 58, 1.1));
// Can you give me the hammer? seçeneği: ustabaşı ve senin elin aynı yerde; yalnız senin avucundaki nesne değişir.
const avucta = nesne => sahne([{ t: 'k', x: 60, y: 100, s: 2, kol: 'ileri' }, ...el(185, 92), ...nesne(180, 56, .9)]);
const saatSec = n => sahne(saat(120, 62, n));

// ---- Görev 5 (Dalga 1) yardımcıları: gor boy 180; sec ve eşleştir seçenekleri boy 120–130 (ana öğeler y ≤ 112) ----
const RENK_AD = { red: 'kırmızı', green: 'yeşil', yellow: 'sarı' };
const SAYI_AD = { 1: 'bir', 2: 'iki', 3: 'üç', 4: 'dört', 5: 'beş', 6: 'altı', 7: 'yedi', 8: 'sekiz', 9: 'dokuz', 10: 'on', 11: 'on bir' };
const sallar = (x, y) => [...salla(x + 24, y, 1), ...salla(x - 24, y, -1)];
const onay = () => [{ t: 'l', d: 'M190 92 l8 9 l16 -18', w: 3.4, k: 'yesil' }];   // sahnedeki "I can." onayı
const duvarSaati = n => saat(196, 40, n, .6);                                     // gor sahnelerinde sağ üstte duvar saati
// Boş atölye: ustabaşının raf çizgisi ve kahverengi tezgâhı, kimse yok.
const atolye = () => [{ t: 'l', d: 'M24 30 L96 30', w: 2.2, k: 'kahve' }, { t: 'r', x: 8, y: 112, w: 104, h: 24, rx: 4, f: 'kahve' }];
// Tek nesne seçenekleri: hepsi yaklaşık 50 birim genişlik ya da yükseklik (aynı boy); tarifler aynı kalıpta.
const TEK = {
  cekic: [() => cekic(120, 58, 1.05), 'çekiç'],
  matkap: [() => matkap(126, 56, .8), 'matkap'],
  kutu: [() => kutu(120, 60, 'kraft', 1.2), 'kutu'],
  anahtar: [() => anahtar(124, 60, 'sari', 2), 'sarı anahtar'],
  saat: [() => saat(120, 60, 3, .8), 'duvar saati'],
};
const tekS = ne => sahne(TEK[ne][0](), TEK[ne][1]);
const renkKutu = f => sahne(kutu(120, 60, f, 1.2), `${RENK_AD[f]} kutu`);
const saatS = n => sahne(saat(120, 60, n, 1), `saat tam ${SAYI_AD[n]}`);
const kutularS = n => sahne(kutuSira(n, 'kraft', 102), `${SAYI_AD[n]} kutu`);
const cekicS = n => sahne(Array.from({ length: n }, (_, i) => cekic(120 + (i - (n - 1) / 2) * 46, 58, .85)).flat(), `${SAYI_AD[n]} çekiç yan yana`);
// Üç renkli kutu yan yana (kırmızı, yeşil, sarı); i: halkalı olan.
const UC_X = [52, 120, 188], UC_F = ['red', 'green', 'yellow'];
const ucKutuS = i => sahne([...UC_X.flatMap((x, k) => kutu(x, 62, UC_F[k], .9)), halka(UC_X[i], 62, 30)],
  `kırmızı, yeşil ve sarı kutu; ${RENK_AD[UC_F[i]]} kutu halkalı`);
// Küçük ustabaşı (boy 120): kahverengi raf çizgisi ve kahverengi tezgâh (pazarcının tentesinden, ev sahibinin anahtar tahtasından ayrışır).
const ustaSec = (kol = 'ileri', yuz = 'mutlu') => [{ t: 'l', d: 'M14 22 L90 22', w: 2, k: 'kahve' },
  { t: 'k', x: 52, y: 100, s: 1.7, kol, yuz }, { t: 'r', x: 6, y: 100, w: 92, h: 20, rx: 4, f: 'kahve' }];
const USTA_EL = [88, 66];
const ALET_K = { matkap: (x, y) => matkap(x + 8, y, .5), cekic: (x, y) => cekic(x, y - 2, .62), kutu: (x, y) => kutu(x, y, 'kraft', .6) };
const ALET_AD = { matkap: 'matkap', cekic: 'çekiç', kutu: 'kutu' };
// Hızlı tur: "Take the drill." (ustabaşından sana) ve karşıtı.
const alSec = () => sahne([...ustaSec('ileri'), ...ALET_K.matkap(...USTA_EL), ok(100, 72, 172, 92), ...el(190, 108)],
  'ustabaşının elinde matkap; ustabaşından sana ok; senin elin boş');
const verSec = () => sahne([...ustaSec('ileri'), ok(166, 92, 106, 66), ...el(190, 108), ...matkap(196, 84, .5)],
  'senin avucunda matkap; senden ustabaşına ok');
const selamSec = () => sahne([...ustaSec('yukari'), ...salla(76, 54, 1), ...salla(28, 54, -1), ...el(190, 108)],
  'ustabaşı iki elini sallıyor; senin elin boş');
// Hikâye 1 soru 1 (kare 1): boş atölye, duvarda saat n.
const bosAtolyeSec = n => sahne([{ t: 'l', d: 'M14 22 L90 22', w: 2, k: 'kahve' }, { t: 'r', x: 6, y: 100, w: 92, h: 20, rx: 4, f: 'kahve' },
  ...saat(170, 54, n, .8)], `boş tezgâh, kimse yok; duvarda saat tam ${SAYI_AD[n]}`);
// Hikâye 1 soru 2 (kare 3): ustabaşı f renkli büyük kutunun yanında, ondan sana ok.
const yardimSec = f => sahne([...ustaSec('ileri'), ...kutu(128, 74, f, 1.1), ok(98, 44, 176, 92), ...el(190, 108)],
  `ustabaşının yanında büyük ${RENK_AD[f]} kutu; ustabaşından sana ok`);
// Hikâye 1 soru 3 (kare 5): ustabaşı elindekini sana uzatıyor.
const uzatSec = ne => sahne([...ustaSec('ileri'), ...ALET_K[ne](...USTA_EL), ok(100, 72, 172, 92), ...el(190, 108)],
  `ustabaşının elinde ${ALET_AD[ne]}; ustabaşından sana ok; senin elin boş`);
// Hikâye 2 soru 1 (kare 3): ustabaşı hızlı konuşuyor; duvarda saat n; senin balonunda "yavaş konuş" isteği.
const yavaslaSec = n => sahne([...ustaSec('ileri'), ...konusma(130, 24, 'hizli', .75), ...saat(208, 30, n, .62),
  ...balon(188, 90, 'yavasla', 1.1)], `ustabaşının balonunda sık zikzak; duvarda saat tam ${SAYI_AD[n]}; senin balonunda küçük zikzak, ok ve aralıklı üç çizgi`);
// Hikâye 2: üç kutu yakından (kırmızı solda, yeşil ortada, sarı sağda); üstünde: { kutu sırası: alet }; halkaI: halkalı kutu.
const KX = [56, 120, 184];
const USTUNDE = {
  cekic: x => cekic(x, 80, .72), anahtar: x => anahtar(x + 3, 100, 'sari', 1), matkap: x => matkap(x + 10, 88, .62),
};
const USTUNDE_AD = { cekic: 'çekiç', anahtar: 'sarı anahtar', matkap: 'matkap' };
const ucKutuYakin = (ustunde = {}, halkaI = null) => [
  ...KX.flatMap((x, k) => kutu(x, 128, UC_F[k], 1)),
  ...Object.entries(ustunde).flatMap(([k, ne]) => USTUNDE[ne](KX[k])),
  ...(halkaI === null ? [] : [halka(KX[halkaI], 112, 40)]),
];
// Hikâye 2 soru 2 (kare 6) ve soru 3 (kare 8), boy 120: üç kutu, birinin üstünde bir nesne, o kutu halkalı; senin balonunda işaret.
// Düzeltme 1: şıklarda yalnız sorunun nesnesi çizilir (öteki kutular boş: sızıntı yok). i = 'yer': nesne yerde, kırmızı ile yeşil
// kutunun arasında, kutuların önünde (halkalı).
const SKX = [52, 120, 188], SKY = 76;
const SUSTUNDE = { cekic: x => cekic(x, SKY - 38, .6), anahtar: x => anahtar(x + 3, SKY - 22, 'sari', .85), matkap: x => matkap(x + 8, SKY - 32, .52),
  canta: x => canta(x, SKY - 27, 'kahve', .5) };
const SUSTUNDE_AD = { ...USTUNDE_AD, canta: 'kahverengi çanta' };
const kutudaSec = (i, ne, ic) => sahne([...SKX.flatMap((x, k) => kutu(x, SKY, UC_F[k], .85)),
  ...(i === 'yer' ? [...matkap(94, 96, .52), halka(86, 100, 18)] : [...SUSTUNDE[ne](SKX[i]), halka(SKX[i], SKY - 12, 34)]),
  ...balon(204, 22, ic, .7)],
  `kırmızı, yeşil ve sarı kutu; ${i === 'yer' ? `${SUSTUNDE_AD[ne]} yerde, kutuların önünde, halkalı` : `${RENK_AD[UC_F[i]]} kutunun üstünde ${SUSTUNDE_AD[ne]}, ${RENK_AD[UC_F[i]]} kutu halkalı`}; senin balonunda ${ic === 'evet' ? 'yeşil onay' : 'kırmızı çarpı'}`);
const HIZLI_IS = "Morning! Could you grab the drill for me? I left it somewhere over there.";
// Ek iş G (duyum yolu, 23 Kasım 2026): help, I can, clock ve eight için pratik sonuna üç oyun. "Help." = iki kişi büyük kutuyu
// birlikte taşıyor (sahne 13'ün küçüğü); "I can." = büyük kutu ustabaşı ile senin elin arasında, senin balonunda yeşil onay
// (sahne 16'nın küçüğü).
const tasiSec = () => sahne([{ t: 'k', x: 72, y: 112, s: 1.5, kol: 'tasi' }, { t: 'k', x: 168, y: 112, s: 1.5, kol: 'tasi' }, ...kutu(120, 74, 'kraft', 1.32)],
  'iki kişi büyük bir kutuyu birlikte taşıyor');
// Tur 1 (kontrolcü kararı): üç şık biçimce eşit; yalnız senin balonundaki işaret değişir (evet: yeşil onay, hayir: kırmızı çarpı,
// soru: soru işareti = anlamadım, Varış'tan beri).
const ICAN_AD = { evet: 'yeşil onay', hayir: 'kırmızı çarpı', soru: 'soru işareti' };
const icanSec = ic => sahne([...ustaSec('ileri'), ...kutu(142, 82, 'kraft', 1.5), ...el(190, 108), ...balon(194, 30, ic, .75)],
  `ustabaşı ile senin elin arasında büyük kutu; senin balonunda ${ICAN_AD[ic]}`);

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

  // ---- Pratik (Görev 5, Dalga 1; taslak §12.1): 5 oyun dizisi = 5 tür, 37 etkileşim (eşleştir 2 tahta, boşluk 6, ne derdin 6,
  // sırala 5, hızlı tur 1 × 12 soru). Varış, Barınma ve Pazar birimleri geri döner (≥ %30). Oynatıcı sec, boşluk ve ne derdin
  // şıklarını karıştırmaz: doğru şıkların sırası elle düzensiz.
  pratik: [
    // Oyun 1 · eşleştir (2 tahta, 8 çift): aletler ve Barınma'nın anahtarı; sonra tam saatler
    { tur: 'eslestir', ciftler: [
      { ses: [anl('A hammer.')], S: tekS('cekic'), birim: 'en:s:hammer' },
      { ses: [anl('A drill.')], S: tekS('matkap'), birim: 'en:s:drill' },
      { ses: [anl('A box.')], S: tekS('kutu'), birim: 'en:s:box' },
      { ses: [anl('A key.')], S: tekS('anahtar'), birim: 'en:s:key' },
    ] },
    { tur: 'eslestir', ciftler: [
      { ses: [anl("Six o'clock.")], S: saatS(6), birim: 'en:s:six' },
      { ses: [anl("Seven o'clock.")], S: saatS(7), birim: 'en:s:seven' },
      { ses: [anl("Nine o'clock.")], S: saatS(9), birim: 'en:s:nine' },
      { ses: [anl("Ten o'clock.")], S: saatS(10), birim: 'en:s:ten' },
    ] },
    // Oyun 2 · boşluk (6): cümle çalar, eksik sözcüğün resmi seçilir
    { tur: 'bosluk', ses: [ust('Give me the hammer.')], metin: 'Give me the ___.',
      secenek: [tekS('matkap'), tekS('cekic'), tekS('kutu')], dogru: 1, birimler: ['en:k:give-me', 'en:s:hammer'] },
    { tur: 'bosluk', ses: [anl("Seven o'clock.")], metin: "___ o'clock.",
      secenek: [saatS(9), saatS(8), saatS(7)], dogru: 2, birimler: ['en:s:seven', 'en:s:oclock'] },
    { tur: 'bosluk', ses: [ust('Take the red box.')], metin: 'Take the ___ box.',
      secenek: [renkKutu('red'), renkKutu('green'), renkKutu('yellow')], dogru: 0, birimler: ['en:k:take-the', 'en:s:red', 'en:s:box'] },
    { tur: 'bosluk', ses: [ust('Can you take the drill?')], metin: 'Can you take the ___?',
      secenek: [tekS('matkap'), tekS('cekic'), tekS('anahtar')], dogru: 0, birimler: ['en:k:can-you', 'en:s:drill'] },
    { tur: 'bosluk', ses: [anl('Three hammers.')], metin: '___ hammers.',
      secenek: [cekicS(2), cekicS(4), cekicS(3)], dogru: 2, birimler: ['en:s:three', 'en:s:hammer'] },
    { tur: 'bosluk', ses: [sen('Here is the box.')], metin: 'Here is the ___.',
      secenek: [tekS('cekic'), tekS('kutu'), tekS('saat')], dogru: 1, birimler: ['en:k:here-is', 'en:s:box'] },
    // Oyun 3 · ne derdin? (6): durum resmi, senin ağzından üç sesli cevap. Resim cevabı göstermez (senin balonun yok).
    // Görev 16 Tur 2: ok "verilen şey" diye okunuyordu; ok kalktı, ustabaşının balonunda kutu ve soru işareti (soru kuruluyor).
    // Tur 3: balonda kutunun üstünde yukarı ok (kaldırma sorusu; "kutu nerede?" okunmasın).
    { tur: 'nederdin', S: sahne([...usta('ileri'), ...konusma(132, 30, [...kutu(110, 38, 'kraft', .4), ...yukariOk(128, 21, 15), ...soruK(154, 28, .9)]), ...kutu(160, 84, 'kraft', 1.3), halka(160, 84, 40), ...el(...SEN_EL)],
      'ustabaşı yerdeki büyük kutuyu gösterip sana dönüyor, kutu halkalı; ustabaşının balonunda küçük kutu, yanında yukarı ok (kaldırmak) ve soru işareti; senin elin boş'),
      secenekSes: [[sen('Thank you.')], [sen('I can.')], [sen('The red box? No.')]], dogru: 1, birimler: ['en:k:i-can'] },
    { tur: 'nederdin', S: sahne([...usta('asagi'), ...kutu(180, 100, 'kraft', 1.6), ...el(...SEN_EL)], 'büyük kutu tek başına senin elinde; ustabaşı tezgâhın arkasında, kolları aşağıda'),
      secenekSes: [[sen("I don't understand. Speak slowly, please.")], [sen('The drill? Where?')], [sen('Can you help me?')]], dogru: 2, birimler: ['en:k:can-you', 'en:k:help-me'] },
    { tur: 'nederdin', S: sahne([...usta('ileri'), ...konusma(132, 30, matkap(140, 28, .5)), iste(), ...el(...SEN_EL), ...senElinde(mat)], 'ustabaşının balonunda matkap; senin avucunda matkap, senden ustabaşına ok'),
      secenekSes: [[sen('Here is the drill.')], [sen('Two hammers, please.')], [sen('A drill! Thank you.')]], dogru: 0, birimler: ['en:k:here-is', 'en:s:drill'] },
    { tur: 'nederdin', S: sahne([...usta('ileri'), ...konusma(132, 30, 'hizli'), ...el(...SEN_EL)], 'ustabaşı; balonunda üç sıra sık zikzak çizgi; senin elin boş'),
      secenekSes: [[sen('Speak slowly, please.')], [sen('Hello?')], [sen('Two hammers.')]], dogru: 0, birimler: ['en:k:speak-slowly'] },
    { tur: 'nederdin', S: sahne([...usta('yukari'), ...sallar(60, 58), ...okSag(128, 226, 70), ...el(...SEN_EL)], 'ustabaşı iki elini sallıyor; sen sağa gidiyorsun (sağa ok); senin elin boş'),
      secenekSes: [[sen('Hello.')], [sen('Sorry.')], [sen('Goodbye.')]], dogru: 2, birimler: ['en:s:goodbye'] },
    // Görev 16 Tur 2: an "yanlış alet verildikten sonra": çekiç ustabaşının elinde, ok yok.
    { tur: 'nederdin', S: sahne([...usta('ileri', 'sasir'), ...ustaElinde(cek, .6), ...konusma(132, 30, matkap(140, 28, .5)), ...el(...SEN_EL)], 'ustabaşı şaşkın, elinde çekiç; balonunda matkap; senin elin boş'),
      secenekSes: [[sen('Sorry.')], [sen('Here is the hammer.')], [sen('Six.')]], dogru: 0, birimler: ['en:s:sorry'] },
    // Oyun 4 · sırala (5): duyduğun cümleyi sözcük kartlarıyla kur. Her cümlede tek büyük harfli kart ve tek noktalı kart: tek sıra.
    { tur: 'sirala', ses: [ust('Can you help me?')], parcalar: ['Can', 'you', 'help', 'me?'], birimler: ['en:k:can-you', 'en:k:help-me'] },
    { tur: 'sirala', ses: [ust('Give me the red box.')], parcalar: ['Give', 'me', 'the', 'red', 'box.'], birimler: ['en:k:give-me', 'en:s:red', 'en:s:box'] },
    { tur: 'sirala', ses: [ust('Take the drill, please.')], parcalar: ['Take', 'the', 'drill,', 'please.'], birimler: ['en:k:take-the', 'en:s:drill', 'en:s:please'] },
    { tur: 'sirala', ses: [sen('Here is the hammer.')], parcalar: ['Here', 'is', 'the', 'hammer.'], birimler: ['en:k:here-is', 'en:s:the', 'en:s:hammer'] },
    { tur: 'sirala', ses: [sen('Two hammers, please.')], parcalar: ['Two', 'hammers,', 'please.'], birimler: ['en:s:two', 'en:s:hammer', 'en:s:please'] },
    // Oyun 5 · hızlı tur (60 sn, 12 soru); doğru şık sırası elle düzensiz (A 4, B 4, C 4): B A C A C B A C B B C A
    { tur: 'hizli', sure: 60, sorular: [
      { tur: 'sec', ses: [anl('A hammer.')], dogruSes: [anl('A hammer.')], secenek: [tekS('kutu'), tekS('cekic'), tekS('matkap')], dogru: 1, birimler: ['en:s:hammer'] },
      { tur: 'sec', ses: [anl('A box.')], dogruSes: [anl('A box.')], secenek: [tekS('kutu'), tekS('saat'), tekS('cekic')], dogru: 0, birimler: ['en:s:box'] },
      { tur: 'sec', ses: [anl('A drill.')], dogruSes: [anl('A drill.')], secenek: [tekS('cekic'), tekS('kutu'), tekS('matkap')], dogru: 2, birimler: ['en:s:drill'] },
      { tur: 'sec', ses: [anl('A clock.')], dogruSes: [anl('A clock.')], secenek: [tekS('saat'), tekS('matkap'), tekS('kutu')], dogru: 0, birimler: ['en:s:clock'] },
      { tur: 'sec', ses: [anl('Six.')], dogruSes: [anl('Six.')], secenek: [kutularS(8), kutularS(10), kutularS(6)], dogru: 2, birimler: ['en:s:six'] },
      { tur: 'sec', ses: [anl('Nine.')], dogruSes: [anl('Nine.')], secenek: [kutularS(7), kutularS(9), kutularS(10)], dogru: 1, birimler: ['en:s:nine'] },
      { tur: 'sec', ses: [anl('Seven.')], dogruSes: [anl('Seven.')], secenek: [kutularS(7), kutularS(9), kutularS(6)], dogru: 0, birimler: ['en:s:seven'] },
      { tur: 'sec', ses: [anl('Ten.')], dogruSes: [anl('Ten.')], secenek: [kutularS(6), kutularS(8), kutularS(10)], dogru: 2, birimler: ['en:s:ten'] },
      { tur: 'sec', ses: [anl("Eight o'clock.")], dogruSes: [anl("Eight o'clock.")], secenek: [saatS(10), saatS(8), saatS(6)], dogru: 1, birimler: ['en:s:eight', 'en:s:oclock'] },
      { tur: 'sec', ses: [anl("Six o'clock.")], dogruSes: [anl("Six o'clock.")], secenek: [saatS(9), saatS(6), saatS(7)], dogru: 1, birimler: ['en:s:six', 'en:s:oclock'] },
      { tur: 'sec', ses: [anl('The red box.')], dogruSes: [anl('The red box.')], secenek: [ucKutuS(1), ucKutuS(2), ucKutuS(0)], dogru: 2, birimler: ['en:s:the', 'en:s:red', 'en:s:box'] },
      { tur: 'sec', ses: [ust('Take the drill.')], dogruSes: [ust('Take the drill.')], secenek: [alSec(), verSec(), selamSec()], dogru: 0, birimler: ['en:k:take-the', 'en:s:drill'] },
    ] },
    // ---- Ek iş G (duyum yolu, 23 Kasım 2026): sona eklenen üç oyun (eski oyunların sırası ve anahtarı değişmez). help yalnız resim ve
    // yazı sayfasındaydı; I can, clock ve eight birer sorulu ekrandaydı. Doğrular C, B, C. Satırların hepsi durakta zaten var (yeni ses yok).
    // Oyun 6 · dinle-seç: "Help." (sahne 13'ün sözü ve resmi).
    { tur: 'sec', ses: [anl('Help.')], dogruSes: [anl('Help.')], secenek: [alSec(), selamSec(), tasiSec()], dogru: 2, birimler: ['en:s:help'] },
    // Oyun 7 · boşluk: saat ve sekiz birlikte duyulur; boşluğa duyulan sayı.
    { tur: 'bosluk', ses: [anl('A clock.'), anl("Eight o'clock.")], metin: "A clock. ___ o'clock.",
      secenek: [saatS(9), saatS(8), saatS(6)], dogru: 1, birimler: ['en:s:clock', 'en:s:eight', 'en:s:oclock'] },
    // Oyun 8 · dinle-seç: soru ve cevap ("Can you help me?" / "I can."); doğru resim cevabın hâli. Tur 1: üç şık aynı kare (kutu
    // aranızda), yalnız senin balonundaki işaret değişir: çarpı / soru işareti / onay.
    { tur: 'sec', ses: [ust('Can you help me?'), sen('I can.')], dogruSes: [ust('Can you help me?'), sen('I can.')], secenek: [icanSec('hayir'), icanSec('soru'), icanSec('evet')], dogru: 2,
      birimler: ['en:k:can-you', 'en:k:help-me', 'en:s:help', 'en:k:i-can'] },
  ],

  // ---- Hikâyecikler (Görev 5, Dalga 1; taslak §12.2): yeni birim yok, yalnız İş, Pazar, Barınma ve Varış birimleri. Sonunda 3
  // anlama sorusu. Tek kural: kök hikâyede bir kez geçen satırdır; şıklar o karenin üç hâlidir; doğru şık hikâyede olan hâldir.
  // Kök tek başına cevabı vermez; bir sorunun şıkları başka bir sorunun cevabını göstermez; bir hikâyede iki soru aynı türden değil.
  hikayeler: [
    // 1 · İşte ilk gün (müfredat: işte ilk gün, aletler, yardım istemek). Erken gelirsin: atölye boş, saat altı. Ustabaşı sekizde
    // gelir. Büyük sarı kutuyu birlikte taşırsınız; ustabaşı teşekkür edip sana bir matkap verir. Saat beşte gün biter.
    { id: 'ilk-gun', ad: "Eight o'clock",
      sayfalar: [
        { tur: 'gor', ses: [sen('Hello?')], S: sahne([...atolye(), ...duvarSaati(6), ...el(...SEN_EL)], 'boş tezgâh, kimse yok; duvarda saat tam altı; senin elin boş') },
        { tur: 'gor', ses: [ust("Eight o'clock!")], S: sahne([...usta('yukari'), ...sallar(60, 58), ...duvarSaati(8), ...el(...SEN_EL)], 'ustabaşı iki elini sallıyor; duvarda saat tam sekiz; senin elin boş') },
        { tur: 'gor', ses: [ust('Can you help me?')], S: sahne([...usta('ileri'), ...kutu(160, 80, 'yellow', 1.3), halka(160, 80, 40), ok(112, 54, 152, 112), ...el(...SEN_EL)], 'ustabaşı yerdeki büyük sarı kutuyu gösterip sana dönüyor, kutu halkalı, ondan senin eline ok') },
        { tur: 'gor', ses: [sen('I can.')], S: sahne([...usta('ileri'), ...kutu(142, 100, 'yellow', 1.6), ...el(...SEN_EL), ...balon(196, 50), ...onay()], 'büyük sarı kutunun bir ucu ustabaşında, öbür ucu senin elinde; senin balonun ve yeşil onay') },
        { tur: 'gor', ses: [ust('Thank you! Here.')], S: sahne([...usta('ileri'), ...ustaElinde(mat, .7), ver(), ...el(...SEN_EL)], 'ustabaşı matkabı sana uzatıyor, ondan senin eline ok') },
        { tur: 'gor', ses: [sen('A drill! Thank you.')], S: sahne([...usta('asagi'), ...el(...SEN_EL), ...senElinde(mat), ...balon(204, 50)], 'matkap senin avucunda; senin konuşma balonun') },
        { tur: 'gor', ses: [ust("Five o'clock! Thank you.")], S: sahne([...usta('ileri'), ...duvarSaati(5), ...el(...SEN_EL), ...senElinde(mat)], 'ustabaşı gülüyor; duvarda saat tam beş; matkap senin avucunda') },
        { tur: 'gor', ses: [sen('Thank you. Goodbye.')], S: sahne([...usta('yukari'), ...sallar(60, 58), ...okSag(128, 226, 70), ...el(...SEN_EL)], 'ustabaşı iki elini sallıyor; sen sağa gidiyorsun (sağa ok)') },
      ],
      sorular: [
        // Soru 1 (kare 1): "Hello?" — duvardaki saat; şıklar kare 1'in üç hâli. Hikâyede altı (en küçük şık). Sekiz, ustabaşının geldiği
        // saattir (tuzak); "sekizden hemen önce" tahmini yediye götürür; yalnız hatırlayan altıyı seçer.
        { tur: 'sec', ses: [sen('Hello?')], dogruSes: [sen('Hello?')], dogru: 2,
          secenek: [bosAtolyeSec(7), bosAtolyeSec(8), bosAtolyeSec(6)], birimler: ['en:s:hello'] },
        // Soru 2 (kare 3): "Can you help me?" — büyük kutunun rengi; şıklar kare 3'ün üç hâli. Hikâyede sarı.
        { tur: 'sec', ses: [ust('Can you help me?')], dogruSes: [ust('Can you help me?')], dogru: 0,
          secenek: [yardimSec('yellow'), yardimSec('red'), yardimSec('green')], birimler: ['en:k:can-you', 'en:k:help-me'] },
        // Soru 3 (kare 5): "Thank you! Here." — ustabaşının sana verdiği; şıklar kare 5'in üç hâli. Hikâyede matkap. Kök nesneyi söylemez;
        // sahnede ustabaşı en çok çekiç uzatır ("Take the hammer."), bu yüzden "tipik olan" tahmini çekice götürür.
        { tur: 'sec', ses: [ust('Thank you! Here.')], dogruSes: [ust('Thank you! Here.')], dogru: 2,
          secenek: [uzatSec('cekic'), uzatSec('kutu'), uzatSec('matkap')], birimler: ['en:k:thank-you', 'en:s:here', 'en:s:drill'] },
      ] },
    // 2 · Hızlı konuşan ustabaşı ve kayıp matkap. Saat dokuz. Ustabaşı hızlı konuşur; anlamazsın, yavaş konuşmasını istersin. Matkabı
    // ister. Üç kutuya bakarsın: kırmızının üstünde çekiç, sarının üstünde anahtar, matkap yeşilin üstünde. Matkabı ustabaşına verirsin.
    { id: 'kayip-matkap', ad: 'Speak slowly, please',
      sayfalar: [
        { tur: 'gor', ses: [ust("Hello. Nine o'clock.")], S: sahne([...usta('yukari'), ...sallar(60, 58), ...duvarSaati(9), ...el(...SEN_EL)], 'ustabaşı iki elini sallıyor; duvarda saat tam dokuz; senin elin boş') },
        { tur: 'gor', ses: [ust(HIZLI_IS)], S: sahne([...usta('ileri'), ...konusma(132, 30, 'hizli'), ...saat(212, 30, 9, .5), ...el(...SEN_EL)], 'ustabaşı; balonunda üç sıra sık zikzak çizgi; duvarda saat tam dokuz; senin elin boş') },
        { tur: 'gor', ses: [sen("I don't understand. Speak slowly, please.")], S: sahne([...usta('ileri'), ...konusma(132, 30, 'hizli'), ...saat(212, 30, 9, .5), ...el(...SEN_EL), ...balon(200, 96, 'yavasla', 1.3)], 'ustabaşının balonunda sık zikzak; duvarda saat tam dokuz; senin balonunda küçük zikzak, ok ve aralıklı üç çizgi') },
        { tur: 'gor', ses: [ust('The drill... here... please.')], S: sahne([...usta('ileri'), ...konusma(132, 30, matkap(140, 28, .5)), ...el(...SEN_EL)], 'ustabaşının balonunda matkap; ustabaşının eli boş; senin elin boş') },
        { tur: 'gor', ses: [sen('The drill? Where?')], S: sahne([...ucKutuYakin(), ...balon(200, 36, matkap(208, 32, .45))], 'yerde kırmızı, yeşil ve sarı kutu; senin balonunda matkap') },
        { tur: 'gor', ses: [sen('The red box? No.')], S: sahne([...ucKutuYakin({ 0: 'cekic' }, 0), ...balon(200, 36, 'hayir')], 'kırmızı kutunun üstünde çekiç, kırmızı kutu halkalı; senin balonunda kırmızı çarpı') },
        { tur: 'gor', ses: [sen('A key? No.')], S: sahne([...ucKutuYakin({ 0: 'cekic', 2: 'anahtar' }, 2), ...balon(200, 36, 'hayir')], 'kırmızı kutunun üstünde çekiç; sarı kutunun üstünde sarı anahtar, sarı kutu halkalı; senin balonunda kırmızı çarpı') },
        { tur: 'gor', ses: [sen('Yes! The drill!')], S: sahne([...ucKutuYakin({ 0: 'cekic', 1: 'matkap', 2: 'anahtar' }, 1), ...balon(200, 36, 'evet')], 'kırmızı kutunun üstünde çekiç; sarı kutunun üstünde sarı anahtar; yeşil kutunun üstünde matkap, yeşil kutu halkalı; senin balonunda yeşil onay') },
        { tur: 'gor', ses: [sen('Here is the drill.')], S: sahne([...usta('ileri'), iste(), ...el(...SEN_EL), ...senElinde(mat)], 'senin avucunda matkap, senden ustabaşına ok') },
        { tur: 'gor', ses: [ust('Thank you!')], S: sahne([...usta('ileri'), ...ustaElinde(mat, .7), ...el(...SEN_EL)], 'matkap ustabaşının elinde, ustabaşı gülüyor; senin elin boş') },
      ],
      sorular: [
        // Soru 1 (kare 3): "I don't understand. Speak slowly, please." — duvardaki saat; şıklar kare 3'ün üç hâli. Hikâyede dokuz
        // (kare 1'de söylenir). Düzeltme 1: şıklar 8 / 9 / 7, doğru en büyük şık (H1 S1'de en küçüktü; "en küçüğü seç" alışkanlığı olmasın).
        { tur: 'sec', ses: [sen("I don't understand. Speak slowly, please.")], dogruSes: [sen("I don't understand. Speak slowly, please.")], dogru: 1,
          secenek: [yavaslaSec(8), yavaslaSec(9), yavaslaSec(7)], birimler: ['en:k:i-dont-understand', 'en:k:speak-slowly', 'en:s:nine', 'en:s:oclock'] },
        // Soru 2 (kare 6): "The red box? No." — kırmızı kutunun üstündeki; şıklar kare 6'nın üç hâli. Hikâyede çekiç. Anahtar sarı
        // kutunun üstündeydi (tuzak). Düzeltme 1: aranan matkap şıktan çıktı ("No" ile mantıkla eleniyordu); yerine aranmayan çanta.
        { tur: 'sec', ses: [sen('The red box? No.')], dogruSes: [sen('The red box? No.')], dogru: 0,
          secenek: [kutudaSec(0, 'cekic', 'hayir'), kutudaSec(0, 'canta', 'hayir'), kutudaSec(0, 'anahtar', 'hayir')], birimler: ['en:s:the', 'en:s:red', 'en:s:box', 'en:s:no'] },
        // Soru 3 (kare 8): "Yes! The drill!" — matkabın yeri; şıklar kare 8'in üç hâli. Hikâyede yeşil kutunun üstünde. Kök rengi
        // söylemez; soru 2'nin şıklarında yeşil kutu boş. Düzeltme 1: kırmızı kutu şıkkı (soru 2'nin kökü "The red box? No." ile
        // eleniyordu) "yerde, kutuların önünde" oldu. Şıklarda çekiç ve anahtar çizilmez (soru 2'yi göstermesin).
        { tur: 'sec', ses: [sen('Yes! The drill!')], dogruSes: [sen('Yes! The drill!')], dogru: 2,
          secenek: [kutudaSec('yer', 'matkap', 'evet'), kutudaSec(2, 'matkap', 'evet'), kutudaSec(1, 'matkap', 'evet')], birimler: ['en:s:yes', 'en:s:drill'] },
      ] },
  ],
};
