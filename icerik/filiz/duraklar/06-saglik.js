// Filiz durağı 6: Sağlık (Dalga 1 Görev 7, 23 Kasım 2026). Taslak: taslak/durak-taslaklari.md §15 (29 sahne sayfası, 3 yoklama
// sorusu, 5 oyun dizisi ve 37 etkileşim, iki hikâyecik).
// İşte elin incinir, eczaneye gidersin; ilaç, yasak ("don't"), hastalık ve uyku; doktor. Kahraman "sen"sin ve çizilmezsin: sağ
// alttaki el senin elin; senin başın, gözün, bacağın ve hasta yatışın yalnız balonunun içinde küçük resimle görünür. Büyük ayakta
// figür ve yatakta yatan kişi anlatıcının "bir kişi"sidir. Türkçe yok. Bütün roller iDil sesiyle konuşur; doktorun ses rolü
// 'eczaci'dir (kontrolcü kararı 23 Kasım; çerçeve ayırır: kisi('doktor') beyaz önlük, stetoskop, bej masa).
// Yeni birimler (13): head, eye, leg, hand, it-hurts, pharmacy, medicine, i-need, i-cant, dont, sick, sleep, doctor.
// Geri dönenler: hello, my, your, here, here is, please, thank you, sorry, yes, no, goodbye, one, two, eight, o'clock, open, bed,
// box, hammer, drill, key, form, passport, can you, help me, I can, I am, name, my name is, red, green, 11-19.
// Uzlaşımlar: ağrı = kırmızı zikzaklar (Varış'ın mor çarpma ışınlarından ayrı); yapamamak = senin balonunda kırmızı çarpı; yasak =
// içi boş kırmızı halka ve çapraz çizgi; hasta = yatakta gözler açık, üzgün, ateş ve ter; uyku = gözler kapalı, rahat. Kırmızı haç ya
// da kırmızı hilal çizilmez. Sec seçenekleri oynatıcıda boy 120 penceresinde çizilir; ana öğeler y ≤ 112.
import { balon, carpma, cekic, el, form, FORM_SATIR, halka, hapSira, ilac, isaret, kapi, kisi, konusma, kutu, matkap, ok, okSag,
  pasaport, pencere, plaka, salla, saat, yasak, yatak, yatanFigur, anahtar, SEN_EL } from '../parca.js';

const H = 180;
const sahne = (o, alt) => ({ boy: H, alt, o });
const anl = metin => ({ rol: 'anlatici', metin });
const sen = metin => ({ rol: 'sen', metin });
const ust = metin => ({ rol: 'is', metin });
const ecz = metin => ({ rol: 'eczaci', metin });
const dok = metin => ({ rol: 'eczaci', metin });  // doktorun sesi eczacı rolüyle (çerçeve ayırır)

const SAYI_AD = { 8: 'sekiz', 10: 'on', 11: 'on bir', 13: 'on üç', 15: 'on beş', 17: 'on yedi', 19: 'on dokuz' };
const RENK_AD = { su: 'mavi', green: 'yeşil', red: 'kırmızı' };
const r2 = v => +v.toFixed(2);

// ---- Yardımcılar (parça değil) ----
// Ağrı işareti: noktaların her birinde kısa kırmızı zikzak (şimşek gibi). Varış'ın carpma'sı mor ışındır ("çarptı").
const agri = (noktalar, s = 1) => [{ t: 'l', d: noktalar.map(([x, y]) => `M${r2(x - 3 * s)} ${r2(y - 6 * s)} L${r2(x + 2 * s)} ${r2(y - 2 * s)} L${r2(x - 2 * s)} ${r2(y + 1 * s)} L${r2(x + 3 * s)} ${r2(y + 6 * s)}`).join(' '), w: 2.2, k: 'kirmizi' }];
// Senin elin (sahnede), istenirse ağrılı.
const elim = () => el(...SEN_EL);
const elAgri = () => [...elim(), ...agri([[164, 122], [185, 110], [206, 122]])];
// Elips halka.
const halkaE = (x, y, rx, ry) => ({ t: 'l', d: `M${r2(x - rx)} ${r2(y)} a${r2(rx)} ${r2(ry)} 0 1 0 ${r2(2 * rx)} 0 a${r2(rx)} ${r2(ry)} 0 1 0 ${r2(-2 * rx)} 0`, w: 2.4, k: 'vurgu' });
// Büyük ayakta figür (motor figürü): (x, y) ayak tabanı; parca 'bas' | 'goz' | 'bacak' halkalı; agriVar ise o yerde ağrı işareti.
const beden = (x, y, s, parca, agriVar = false) => {
  const fig = { t: 'k', x, y, s, kol: 'asagi', yuz: 'mutlu', f: 'su' };
  const yer = { bas: [x, y - 30 * s], goz: [x + 3 * s, y - 31 * s], bacak: [x - 4 * s, y - 3.5 * s] }[parca];
  const isaretler = parca === 'bas' ? halka(r2(yer[0]), r2(yer[1]), r2(10.5 * s))
    : parca === 'goz' ? halka(r2(yer[0]), r2(yer[1]), r2(2.4 * s)) : parca === 'bacak' ? halkaE(yer[0], yer[1], 2.6 * s, 5 * s) : null;
  const ag = !agriVar ? [] : parca === 'bas' ? agri([[x - 13 * s, y - 38 * s], [x + 13 * s, y - 38 * s]], s / 2.5)
    : parca === 'goz' ? agri([[x + 9 * s, y - 34 * s]], s / 2.5) : agri([[x - 10 * s, y - 6 * s], [x - 10 * s, y + 1 * s]], s / 2.5);
  return [fig, ...(isaretler ? [isaretler] : []), ...ag];
};
// Büyük yüz yakından (balon içi): (x, y) yüzün ortası; parca 'bas' | 'goz' halkalı; agriVar ise ağrı işareti.
const yuzYakin = (x, y, s, parca, agriVar = false) => {
  const X = v => r2(x + v * s), Y = v => r2(y + v * s);
  return [
    { t: 'c', x, y, r: r2(14 * s), f: 'ten' },
    { t: 'c', x: X(-5), y: Y(-2), r: r2(1.7 * s), f: '#4B2E5E' }, { t: 'c', x: X(5), y: Y(-2), r: r2(1.7 * s), f: '#4B2E5E' },
    { t: 'l', d: `M${X(-4)} ${Y(6)} Q${X(0)} ${Y(8)} ${X(4)} ${Y(6)}`, w: r2(1.2 * s), k: '#4B2E5E' },
    parca === 'goz' ? halka(X(5), Y(-2), r2(4.5 * s)) : halka(x, y, r2(18 * s)),
    ...(!agriVar ? [] : parca === 'goz' ? agri([[X(13), Y(-6)]], s * .8) : agri([[X(-17), Y(-14)], [X(17), Y(-14)]], s * .8)),
  ];
};
// Küçük ayakta figür, bacak halkalı (balon içi).
const minikBacak = (x, y, s, agriVar = false) => beden(x, y, s, 'bacak', agriVar);
// Kişiler (sahne: kisi çerçevesi).
const eczaci = (kol = 'ileri', yuz = 'mutlu') => kisi('eczaci', kol, yuz);
const doktor = (kol = 'ileri', yuz = 'mutlu') => kisi('doktor', kol, yuz);
const usta = (kol = 'ileri', yuz = 'mutlu') => kisi('is', kol, yuz);
const sallar = (x, y) => [...salla(x + 24, y, 1), ...salla(x - 24, y, -1)];
const ver = () => ok(112, 84, 168, 112);   // ondan sana
const iste = () => ok(158, 100, 114, 80);  // senden ona
// Eczane cephesi: (x0, y0) sol üst, s ölçek (s=1'de 200x130). Yeşil haçlı kare tabela, vitrin, kapı; n verilirse kapının yanında plaka.
const eczane = (x0, y0, s = 1, n = null) => {
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
    ...(n === null ? [] : plaka(X(186), Y(62), String(n), r2(.5 * s))),
  ];
};
// Tezgâhta kapsüller yakından: durum 'dogru' (tek onaylı, iki yasak içinde) | 'ters' (iki onaylı, tek yasak içinde) |
// 'hepsi' (ikisi de onaylı); kucuk: sec boyu (120); kutuRenk: solda tezgâhta ilaç kutusu (yalnız Hikâye 1).
const tezgah = (durum, kucuk = false, kutuRenk = null) => {
  const k = kucuk ? .72 : 1, Y = v => r2(v * k), ty = kucuk ? 96 : 134;
  const sol = kutuRenk ? 100 : 70, sag = kutuRenk ? 182 : 168;
  const tek = x => [...hapSira(1, x, Y(108), 2.4 * k)], iki = x => hapSira(2, x, Y(108), 2.4 * k);
  const onay = x => isaret(x, Y(72), 'evet', 1.3 * k), yas = (x, ic) => yasak(x, Y(104), r2(40 * k), ic);
  const solG = durum === 'ters' ? [...yas(sol, tek(sol))] : [...tek(sol), ...onay(sol)];
  const sagG = durum === 'dogru' ? [...yas(sag, iki(sag))] : [...iki(sag), ...onay(sag)];
  return [
    { t: 'r', x: 6, y: ty, w: 228, h: kucuk ? 22 : 40, rx: 4, f: 'kar' },
    { t: 'r', x: 8, y: 8, w: r2(22 * k), h: r2(22 * k), rx: 4, f: 'yesil' },
    { t: 'l', d: `M${r2(8 + 11 * k)} ${r2(8 + 4 * k)} L${r2(8 + 11 * k)} ${r2(8 + 18 * k)} M${r2(8 + 4 * k)} ${r2(8 + 11 * k)} L${r2(8 + 18 * k)} ${r2(8 + 11 * k)}`, w: 2, k: 'beyaz' },
    ...(kutuRenk ? ilac(34, Y(112), 'kutu', .8, kutuRenk) : []),
    ...solG, ...sagG,
  ];
};
const TEZGAH_AD = { dogru: 'tek kapsül ve yeşil onay; iki kapsül yasak işaretinin içinde', ters: 'iki kapsül ve yeşil onay; tek kapsül yasak işaretinin içinde', hepsi: 'tek kapsül ve yeşil onay; iki kapsül ve yeşil onay' };
// Şişe senin elinde (sahne): kapalı, kapakta zorlanma çizgileri.
const zorla = (x, y) => ({ t: 'l', d: `M${x - 14} ${y - 4} l-7 -3 M${x + 14} ${y - 4} l7 -3 M${x - 10} ${y - 12} l-5 -6 M${x + 10} ${y - 12} l5 -6`, w: 1.8, k: 'vurgu' });
const sisedeEl = () => [...elim(), ...ilac(185, 112, 'sise', .9), zorla(185, 89)];
// Kafes kişiler (sec boyu 120): küçük çerçeveler; x figürün yeri.
const kucukKisi = (rol, x = 120, kol = 'asagi') => {
  const fig = { t: 'k', x, y: 100, s: 1.7, kol, yuz: 'mutlu' };
  if (rol === 'eczaci') return [{ t: 'r', x: x - 12, y: 6, w: 24, h: 24, rx: 4, f: 'yesil' }, { t: 'l', d: `M${x} 10 L${x} 26 M${x - 8} 18 L${x + 8} 18`, w: 2.2, k: 'beyaz' }, fig, { t: 'r', x: x - 46, y: 100, w: 92, h: 20, rx: 4, f: 'kar' }];
  if (rol === 'doktor') return [{ ...fig, f: 'kar' },
    { t: 'l', d: `M${r2(x - 5.95)} ${r2(100 - 36.55)} Q${r2(x - 8.5)} ${r2(100 - 22.1)} ${x} ${r2(100 - 20.4)} Q${r2(x + 8.5)} ${r2(100 - 22.1)} ${r2(x + 5.95)} ${r2(100 - 36.55)}`, w: 1.4, k: '#4B4B52' },
    { t: 'c', x, y: r2(100 - 15.5), r: 2.7, f: 'gri' }, { t: 'r', x: x - 46, y: 100, w: 92, h: 20, rx: 4, f: 'tas' }];
  return [{ t: 'r', x: x - 30, y: 8, w: 52, h: 32, rx: 4, f: 'buz' }, ...plaka(x + 44, 22, '', .5), fig, { t: 'r', x: x - 46, y: 100, w: 92, h: 20, rx: 4, f: 'gri' }];
};
const KISI_AD = { eczaci: 'eczacı: yeşil haçlı tabela, beyaz tezgâh', doktor: 'doktor: beyaz önlük, stetoskop, bej masa', memur: 'kayıt memuru: açık mavi cam pano, gri tezgâh, boş sıra ekranı' };
const kisiS = rol => sahne(kucukKisi(rol), KISI_AD[rol]);

// ---- Seçenek resimleri (boy 120) ----
const BEDEN_AD = { bas: 'baş', goz: 'göz', bacak: 'bacak' };
const bedenS = (parca, agriVar = false) => sahne(beden(120, 108, 2.4, parca, agriVar), `ayakta figür; ${BEDEN_AD[parca]} halkalı${agriVar ? ', kırmızı ağrı zikzakları' : ''}`);
const elS = (agriVar = false) => sahne([...el(120, 76), halka(120, 64, 30), ...(agriVar ? agri([[90, 52], [120, 34], [150, 52]]) : [])], `senin elin (açık avuç) halkalı${agriVar ? ', kırmızı ağrı zikzakları' : ''}`);
// Senin balonunda vücut (yakın çekim, büyük balon): baş ve göz yüz yakından, bacak küçük figür.
const balonVucut = (parca, agriVar = true) => sahne([...balon(120, 64, parca === 'bacak' ? minikBacak(120, 88, 1.75, agriVar) : yuzYakin(120, 52, 1.4, parca, agriVar), 2.2)],
  `senin büyük balonun: ${parca === 'bacak' ? 'küçük figür, bacak' : `yüz yakından, ${BEDEN_AD[parca]}`} halkalı${agriVar ? ' ve kırmızı ağrı zikzaklı' : ''}`);
// Sahne 28 (düzeltme turu 1): üç şık aynı biçimde, senin balonunda küçük ayakta figür; bölüm halkalı ve ağrılı.
const balonFigur = parca => sahne([...balon(120, 64, beden(120, 88, 1.75, parca, true), 2.2)],
  `senin büyük balonun: küçük figür, ${BEDEN_AD[parca]} halkalı ve kırmızı ağrı zikzaklı`);
const ilacS = () => sahne([...ilac(86, 66, 'kutu', 1.2), ...ilac(168, 66, 'sise', 1.2)], 'mavi bantlı ilaç kutusu ve kahverengi ilaç şişesi');
const TEK = {
  kutu: [() => kutu(120, 60, 'kraft', 1.3), 'kraft kutu (bantlı, kare)'],
  ilacKutu: [() => ilac(120, 60, 'kutu', 1.4), 'mavi bantlı ilaç kutusu'],
  form: [() => form(120, 58, 1), 'boş form'],
  anahtar: [() => anahtar(124, 60, 'sari', 2), 'sarı anahtar'],
  cekic: [() => cekic(120, 60, 1.3), 'çekiç'],
  pasaport: [() => pasaport(120, 58), 'pasaport'],
  kapi: [() => kapi(120, 62), 'kapalı kapı'],
  yatak: [() => yatak(120, 64), 'boş yatak'],
};
const tekS = ne => sahne(TEK[ne][0](), TEK[ne][1]);
const eczaneS = () => sahne(eczane(54, 10, .66), 'eczane cephesi: yeşil haçlı tabela, vitrin, kapı');
const odaS = () => sahne([...pencere(50, 40), ...yatak(140, 70), { t: 'r', x: 6, y: 100, w: 228, h: 4, rx: 2, f: 'tas' }], 'oda içi: pencere ve yatak');
const yatanS = tur => sahne(yatanFigur(120, 66, 1.15, tur === 'hasta' ? { goz: 'acik', yuz: 'uzgun', ates: true, ter: true } : {}),
  tur === 'hasta' ? 'yatakta yatan kişi: gözler açık, ağız üzgün, ateş dalgaları ve ter damlası' : 'yatakta yatan kişi: gözler kapalı, ağız rahat');
const ayaktaS = () => sahne([{ t: 'k', x: 120, y: 108, s: 2.3, kol: 'asagi', yuz: 'mutlu', f: 'su' }], 'ayakta, gülen figür');
const kapsulS = n => sahne(hapSira(n, 120, 60, 2.6), `${['', 'tek', 'iki', 'üç'][n]} kapsül`);
const tezgahS = durum => sahne(tezgah(durum, true), `tezgâh yakından: ${TEZGAH_AD[durum]}`);
// "I can't open it." hızlı tur: senin elinde şişe ve balonun.
// Düzeltme turu 1: "yapamıyorum" şıkkında kapakta zorlanma çizgileri; "yaptım" şıkkında kapak şişenin yanında (açık). Resimler
// sesten bağımsız ayrışır: kapalı + çarpı / açık + onay / kapalı + soru işareti.
const siseBalonS = (bal, acik) => sahne([...el(170, 104), ...ilac(170, 70, 'sise', .9, 'su', { acik }), ...(bal === 'hayir' ? [zorla(170, 47)] : []), ...balon(70, 40, bal, 1.1)],
  `senin balonunda ${{ hayir: 'kırmızı çarpı', evet: 'yeşil onay', soru: 'soru işareti' }[bal]}; senin elinde ${acik ? 'kapağı açılmış (kapak yanında)' : 'kapağı kapalı'} ilaç şişesi${bal === 'hayir' ? ', kapakta zorlanma çizgileri' : ''}`);
// H1 S1: elinin üstüne düşen nesne (yakın çekim).
const DUSEN = { cekic: () => cekic(120, 58, 1), matkap: () => matkap(120, 58, .9), kutu: () => kutu(120, 62, 'kraft', 1) };
const dusenS = ne => sahne([...el(120, 98), ...DUSEN[ne](), ...carpma(120, 30), ...agri([[88, 72], [152, 72]])],
  `senin elinin üstünde ${{ cekic: 'çekiç', matkap: 'matkap', kutu: 'kraft kutu' }[ne]}; mor çarpma ışınları; kırmızı ağrı zikzakları`);
// H1 S2: eczane cephesi, kapı yanında plaka n.
const eczaneNoS = n => sahne(eczane(42, 8, .76, n), `eczane cephesi; kapının yanında numara plakası ${SAYI_AD[n]}`);
// H1 S3: eczacı ilaç kutusunu uzatıyor; bandın rengi f.
const kutuVerS = f => sahne([...kucukKisi('eczaci', 52, 'ileri'), ...ilac(98, 60, 'kutu', .8, f), ok(116, 72, 176, 92), ...el(190, 108)],
  `eczacı ${RENK_AD[f]} bantlı ilaç kutusunu sana uzatıyor, eczacıdan sana ok`);
// H2 S2: doktor el sallıyor, duvarda saat n.
const doktorSaatS = n => sahne([...kucukKisi('doktor', 70, 'yukari'), ...salla(90, 50, 1), ...salla(50, 50, -1), ...saat(180, 44, n, .75)],
  `doktor iki elini sallıyor; duvarda saat tam ${SAYI_AD[n]}`);
// H2 S3: senin avucunda (yakın çekim).
const AVUC = { kutu: () => ilac(120, 62, 'kutu', 1.1), sise: () => ilac(120, 58, 'sise', 1), hap: () => hapSira(1, 120, 66, 2.2) };
const avucS = ne => sahne([...el(120, 104), ...AVUC[ne]()], `senin avucunda ${{ kutu: 'mavi bantlı ilaç kutusu', sise: 'kahverengi ilaç şişesi', hap: 'tek kapsül' }[ne]}`);
// Pratik: eczacının rafı, ilaç kutusu halkalı.
const raf = () => [{ t: 'r', x: 128, y: 22, w: 48, h: 56, rx: 2, f: 'kraft' }, { t: 'l', d: 'M128 52 L176 52', w: 1.4 }, ...ilac(150, 40, 'kutu', .6), halka(152, 38, 20)];
// Doktorun balonunda küçük form, ad satırı halkalı (Resmî işler uzlaşımı: adın soruluyor).
const adSoruBalon = () => [...konusma(132, 30), ...form(132, 30, .3), halkaE(r2(132 + 6 * .3), r2(30 + (FORM_SATIR.ad + 1) * .3), 11, r2(6 * .3))];
const HASTA = { goz: 'acik', yuz: 'uzgun', ates: true, ter: true };
// Duvar saati (Hikâye 2): sağ üstte.
const duvarSaati = n => saat(212, 24, n, .5);

export default {
  dil: 'en', id: 'saglik', no: 6, ad: 'Sağlık',
  yoklama: [
    { tur: 'sec', ses: [anl('A doctor.')], dogruSes: [anl('A doctor.')], dogru: 0,
      secenek: [kisiS('doktor'), kisiS('eczaci'), kisiS('memur')], birimler: ['en:s:doctor'] },
    { tur: 'sec', ses: [anl('Sleep.')], dogruSes: [anl('Sleep.')], dogru: 1,
      secenek: [yatanS('hasta'), yatanS('uyku'), ayaktaS()], birimler: ['en:s:sleep'] },
    { tur: 'sec', ses: [ecz("Don't take two.")], dogruSes: [ecz("Don't take two.")], dogru: 0,
      secenek: [tezgahS('dogru'), tezgahS('ters'), tezgahS('hepsi')], birimler: ['en:k:dont'] },
  ],
  sayfalar: [
    // 1-5: vücut
    { tur: 'gor', ses: [anl('Head.')], S: sahne(beden(120, 166, 3.6, 'bas'), 'büyük ayakta figür, önden; baş halkalı'), yeni: 'en:s:head', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Eye.')], S: sahne(beden(120, 166, 3.6, 'goz'), 'aynı figür; sağ gözü küçük halkalı'), yeni: 'en:s:eye', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Leg.')], S: sahne(beden(120, 166, 3.6, 'bacak'), 'aynı figür; sol bacağı dik elips halkalı'), yeni: 'en:s:leg', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Hand.')], S: sahne([...el(120, 104), halka(120, 92, 40)], 'boş zeminde senin elin (açık avuç), halkalı'), yeni: 'en:s:hand', degisen: 'nesne' },
    { tur: 'sec', ses: [anl('Eye?')], dogruSes: [anl('Eye.')], dogru: 1,
      secenek: [bedenS('bas'), bedenS('goz'), bedenS('bacak')], birimler: ['en:s:eye'] },
    // 6-8: işte elin incinir
    { tur: 'gor', ses: [ust('Hello.')], S: sahne([...usta('yukari'), ...sallar(60, 58), ...cekic(96, 92, .7), ...elim()], 'ustabaşı iki elini sallıyor; tezgâhta çekiç; senin elin'), degisen: 'kisi' },
    { tur: 'gor', ses: [sen('It hurts.')], S: sahne([...usta('asagi', 'sasir'), ...elAgri(), ...cekic(185, 106, .9), ...carpma(185, 80)],
      'çekiç senin elinin üstüne düşmüş; mor çarpma ışınları; elinin çevresinde kırmızı ağrı zikzakları; ustabaşı şaşkın'), yeni: 'en:k:it-hurts', degisen: 'eylem' },
    { tur: 'gor', ses: [ust('Your hand?')], S: sahne([...usta('ileri', 'uzgun'), ...cekic(146, 140, .8), ...elAgri(), halka(185, 146, 34)],
      'ustabaşı üzgün, kolunu sana uzatıyor; çekiç elinin yanında; senin elin halkalı, ağrı zikzakları sürüyor'), degisen: 'kisi' },
    // 9-10: eczane
    { tur: 'gor', ses: [anl('A pharmacy.')], S: sahne([...eczane(10, 8, .9), ...elAgri()], 'eczane cephesi: yeşil haçlı tabela, vitrin, kapı; sağ altta ağrılı elin'), yeni: 'en:s:pharmacy', degisen: 'nesne' },
    { tur: 'sec', ses: [anl('A pharmacy?')], dogruSes: [anl('A pharmacy.')], dogru: 2,
      secenek: [odaS(), kisiS('memur'), eczaneS()], birimler: ['en:s:pharmacy'] },
    // 11-16: eczacı, ilaç, I need
    { tur: 'gor', ses: [ecz('Hello.')], S: sahne([...eczaci('yukari'), ...sallar(60, 58), ...elAgri()], 'eczacı (yeşil haçlı tabela, beyaz tezgâh) iki elini sallıyor; ağrılı elin'), degisen: 'kisi' },
    { tur: 'gor', ses: [sen('My hand. It hurts.')], S: sahne([...eczaci('asagi'), ...elAgri(), halka(185, 146, 34), ...balon(140, 56)],
      'eczacı; senin elin halkalı, ağrı zikzakları; senin konuşma balonun'), degisen: 'eylem' },
    { tur: 'gor', ses: [anl('Medicine.')], S: sahne([...ilac(80, 96, 'kutu', 1.6), ...ilac(172, 96, 'sise', 1.6)], 'boş zeminde mavi bantlı ilaç kutusu ve kahverengi ilaç şişesi'), yeni: 'en:s:medicine', degisen: 'nesne' },
    { tur: 'gor', ses: [sen('I need medicine.')], S: sahne([...eczaci('asagi'), ...balon(160, 54, ilac(160, 48, 'kutu', .7, null), 1.4), iste(), ...elAgri()],
      'eczacı; senin balonunda bantsız ilaç kutusu; senden eczacıya ok'), yeni: 'en:k:i-need', degisen: 'eylem' },
    { tur: 'gor', ses: [ecz('Here is your medicine.')], S: sahne([...eczaci(), ...ilac(106, 62, 'sise', .6), ver(), ...elAgri()],
      'eczacı kapağı kapalı ilaç şişesini sana uzatıyor, eczacıdan sana ok'), degisen: 'eylem' },
    { tur: 'sec', ses: [anl('Medicine?')], dogruSes: [anl('Medicine.')], dogru: 0,
      secenek: [ilacS(), tekS('kutu'), tekS('form')], birimler: ['en:s:medicine'] },
    // 17-20: I can't, don't
    { tur: 'gor', ses: [sen("I can't open it.")], S: sahne([...eczaci('asagi'), ...sisedeEl(), ...balon(140, 50, 'hayir', 1.2)],
      'senin elinde kapağı kapalı ilaç şişesi, kapakta zorlanma çizgileri; senin balonunda kırmızı çarpı'), yeni: 'en:k:i-cant', degisen: 'eylem' },
    { tur: 'gor', ses: [ecz('Here.')], S: sahne([...eczaci(), ...ilac(104, 66, 'sise', .6, 'su', { acik: true }), ver(), ...elim()],
      'eczacı kapağı açılmış şişeyi sana uzatıyor (kapak yanında), eczacıdan sana ok'), degisen: 'eylem' },
    { tur: 'gor', ses: [ecz("Take one. Don't take two.")], S: sahne(tezgah('dogru'), `tezgâh yakından (sol üstte yeşil haçlı tabela): ${TEZGAH_AD.dogru}`), yeni: 'en:k:dont', degisen: 'eylem' },
    { tur: 'sec', ses: [ecz("Don't take two.")], dogruSes: [ecz("Don't take two.")], dogru: 0,
      secenek: [tezgahS('dogru'), tezgahS('ters'), tezgahS('hepsi')], birimler: ['en:k:dont'] },
    // 21-23: sick, sleep
    { tur: 'gor', ses: [anl('Sick.')], S: sahne(yatanFigur(120, 112, 1.6, HASTA), 'yatakta yatan kişi: gözler açık, ağız üzgün, ateş dalgaları ve ter damlası'), yeni: 'en:s:sick', degisen: 'nesne' },
    { tur: 'gor', ses: [anl('Sleep.')], S: sahne(yatanFigur(120, 112, 1.6), 'aynı yatak ve kişi: gözler kapalı, ağız rahat'), yeni: 'en:s:sleep', degisen: 'eylem' },
    { tur: 'sec', ses: [anl('Sleep?')], dogruSes: [anl('Sleep.')], dogru: 2,
      secenek: [yatanS('hasta'), ayaktaS(), yatanS('uyku')], birimler: ['en:s:sleep'] },
    // 24-28: doctor
    { tur: 'gor', ses: [anl('A doctor.')], S: sahne(doktor('asagi'), 'doktor (beyaz önlük, stetoskop) bej masasının arkasında'), yeni: 'en:s:doctor', degisen: 'kisi' },
    { tur: 'sec', ses: [anl('A doctor?')], dogruSes: [anl('A doctor.')], dogru: 1,
      secenek: [kisiS('eczaci'), kisiS('doktor'), kisiS('memur')], birimler: ['en:s:doctor'] },
    { tur: 'gor', ses: [sen('I am sick.')], S: sahne([...doktor('asagi'), ...balon(162, 62, yatanFigur(162, 58, .42, HASTA), 1.8), ...elim()],
      'doktor; senin balonunda küçük yatan kişi: gözler açık, üzgün, ateşli'), degisen: 'kisi' },
    { tur: 'gor', ses: [dok('Sleep, please.')], S: sahne([...doktor(), ...konusma(150, 34, yatanFigur(150, 36, .36), 1.3), ...elim()],
      'doktorun balonunda küçük yatan kişi: gözler kapalı'), degisen: 'eylem' },
    { tur: 'sec', ses: [sen('My leg. It hurts.')], dogruSes: [sen('My leg. It hurts.')], dogru: 1,
      secenek: [balonFigur('bas'), balonFigur('bacak'), balonFigur('goz')], birimler: ['en:s:leg', 'en:k:it-hurts'] },
    // Yazı perdesi
    { tur: 'yazi', birimler: ['en:s:head', 'en:s:eye', 'en:s:leg', 'en:s:hand', 'en:k:it-hurts', 'en:s:pharmacy', 'en:s:medicine',
      'en:k:i-need', 'en:k:i-cant', 'en:k:dont', 'en:s:sick', 'en:s:sleep', 'en:s:doctor'] },
  ],

  // ---- Pratik (taslak §15.4): 5 oyun dizisi = 5 tür, 37 etkileşim (eşleştir 2 tahta, boşluk 6, ne derdin 6, sırala 5, hızlı tur
  // 1 × 12 soru). Önceki duraklardan birimler geri döner (≥ %30). Oynatıcı şıkları karıştırmaz: doğru şık sırası elle düzensiz.
  // Sızıntı önlemi: pratikte duvar saati, numaralı eczane, kırmızı bantlı ilaç kutusu, ele düşen kutu, doktorla göz ya da baş ağrısı
  // ve "seventeen" yok (hikâye cevaplarını göstermesin).
  pratik: [
    // Oyun 1 · eşleştir: vücut; sonra ilaç, eczane, doktor, yatak
    { tur: 'eslestir', ciftler: [
      { ses: [anl('Head.')], S: bedenS('bas'), birim: 'en:s:head' },
      { ses: [anl('Eye.')], S: bedenS('goz'), birim: 'en:s:eye' },
      { ses: [anl('Leg.')], S: bedenS('bacak'), birim: 'en:s:leg' },
      { ses: [anl('Hand.')], S: elS(), birim: 'en:s:hand' },
    ] },
    { tur: 'eslestir', ciftler: [
      { ses: [anl('Medicine.')], S: ilacS(), birim: 'en:s:medicine' },
      { ses: [anl('A pharmacy.')], S: eczaneS(), birim: 'en:s:pharmacy' },
      { ses: [anl('A doctor.')], S: kisiS('doktor'), birim: 'en:s:doctor' },
      { ses: [anl('A bed.')], S: tekS('yatak'), birim: 'en:s:bed' },
    ] },
    // Oyun 2 · boşluk (6; doğrular B C A B A C)
    { tur: 'bosluk', ses: [sen('My head. It hurts.')], metin: 'My ___. It hurts.',
      secenek: [bedenS('bacak', true), bedenS('bas', true), elS(true)], dogru: 1, birimler: ['en:s:my', 'en:s:head', 'en:k:it-hurts'] },
    { tur: 'bosluk', ses: [sen('I need medicine.')], metin: 'I need ___.',
      secenek: [tekS('cekic'), tekS('anahtar'), tekS('ilacKutu')], dogru: 2, birimler: ['en:k:i-need', 'en:s:medicine'] },
    { tur: 'bosluk', ses: [ecz("Don't take two.")], metin: "Don't take ___.",
      secenek: [kapsulS(2), kapsulS(1), kapsulS(3)], dogru: 0, birimler: ['en:k:dont', 'en:s:two'] },
    { tur: 'bosluk', ses: [dok('Sleep, please.')], metin: '___, please.',
      secenek: [yatanS('hasta'), yatanS('uyku'), ayaktaS()], dogru: 1, birimler: ['en:s:sleep', 'en:s:please'] },
    { tur: 'bosluk', ses: [sen('I am sick.')], metin: 'I am ___.',
      secenek: [yatanS('hasta'), ayaktaS(), yatanS('uyku')], dogru: 0, birimler: ['en:y:am-are', 'en:s:sick'] },
    { tur: 'bosluk', ses: [ecz('Here is your medicine.')], metin: 'Here is your ___.',
      secenek: [tekS('form'), tekS('pasaport'), tekS('ilacKutu')], dogru: 2, birimler: ['en:k:here-is', 'en:s:your', 'en:s:medicine'] },
    // Oyun 3 · ne derdin? (6; senin balonun yok; karşıdakinin yüzü hep gülen; doğrular B A C B A B)
    { tur: 'nederdin', S: sahne([...eczaci('asagi'), ...elAgri(), halka(185, 146, 34)], 'eczacı; senin elin halkalı ve kırmızı ağrı zikzaklı'),
      secenekSes: [[sen('Goodbye.')], [sen('My hand. It hurts.')], [sen('Nineteen.')]], dogru: 1, birimler: ['en:s:my', 'en:s:hand', 'en:k:it-hurts'] },
    { tur: 'nederdin', S: sahne([...eczaci('asagi'), ...raf(), ...elim()], 'eczacının arkasındaki rafta mavi bantlı ilaç kutusu, halkalı; senin elin boş'),
      secenekSes: [[sen('I need medicine.')], [sen('Sign here, please.')], [sen('Eleven.')]], dogru: 0, birimler: ['en:k:i-need', 'en:s:medicine'] },
    { tur: 'nederdin', S: sahne([...eczaci('asagi'), ...sisedeEl()], 'senin elinde kapağı kapalı ilaç şişesi, kapakta zorlanma çizgileri; eczacı bakıyor'),
      secenekSes: [[sen('Thank you.')], [sen('Eleven.')], [sen("I can't open it.")]], dogru: 2, birimler: ['en:k:i-cant', 'en:s:open'] },
    { tur: 'nederdin', S: sahne([...eczaci(), ...ilac(104, 66, 'sise', .6, 'su', { acik: true }), ver(), ...elim()], 'eczacı kapağı açılmış şişeyi sana uzatıyor, eczacıdan sana ok'),
      secenekSes: [[sen('Nineteen.')], [sen('Thank you.')], [sen('Sorry.')]], dogru: 1, birimler: ['en:k:thank-you'] },
    { tur: 'nederdin', S: sahne([...eczaci(), ...konusma(146, 36, minikBacak(146, 58, 1.2), 1.6), ...elim()], 'eczacının balonunda küçük figür, bacak halkalı (ağrı işareti yok)'),
      secenekSes: [[sen('Yes. It hurts.')], [sen('My name is Deniz.')], [sen('Eleven.')]], dogru: 0, birimler: ['en:s:yes', 'en:k:it-hurts'] },
    { tur: 'nederdin', S: sahne([...doktor(), ...form(144, 98, .4), ...adSoruBalon(), ...elim()], 'doktor masasında form; doktorun balonunda küçük form, ad satırı halkalı'),
      secenekSes: [[sen('Goodbye.')], [sen('My name is Deniz.')], [sen("I can't open it.")]], dogru: 1, birimler: ['en:k:my-name-is'] },
    // Oyun 4 · sırala (5): tek büyük harfli kart ve tek noktalı kart, tek sıra. "My head. It hurts." alınmadı (iki cümle).
    { tur: 'sirala', ses: [sen('I need medicine.')], parcalar: ['I', 'need', 'medicine.'], birimler: ['en:k:i-need', 'en:s:medicine'] },
    { tur: 'sirala', ses: [sen("I can't open it.")], parcalar: ['I', "can't", 'open', 'it.'], birimler: ['en:k:i-cant', 'en:s:open'] },
    { tur: 'sirala', ses: [ecz("Don't take two.")], parcalar: ["Don't", 'take', 'two.'], birimler: ['en:k:dont', 'en:s:two'] },
    { tur: 'sirala', ses: [sen('I am sick.')], parcalar: ['I', 'am', 'sick.'], birimler: ['en:y:am-are', 'en:s:sick'] },
    { tur: 'sirala', ses: [ecz('Here is your medicine.')], parcalar: ['Here', 'is', 'your', 'medicine.'], birimler: ['en:k:here-is', 'en:s:your', 'en:s:medicine'] },
    // Oyun 5 · hızlı tur (60 sn, 12 soru); doğrular A C B A C A B B C A B C (A 4, B 4, C 4)
    { tur: 'hizli', sure: 60, sorular: [
      { tur: 'sec', ses: [anl('Head.')], dogruSes: [anl('Head.')], secenek: [bedenS('bas'), bedenS('goz'), bedenS('bacak')], dogru: 0, birimler: ['en:s:head'] },
      { tur: 'sec', ses: [anl('Leg.')], dogruSes: [anl('Leg.')], secenek: [bedenS('goz'), bedenS('bas'), bedenS('bacak')], dogru: 2, birimler: ['en:s:leg'] },
      { tur: 'sec', ses: [anl('Eye.')], dogruSes: [anl('Eye.')], secenek: [bedenS('bacak'), bedenS('goz'), bedenS('bas')], dogru: 1, birimler: ['en:s:eye'] },
      { tur: 'sec', ses: [anl('Hand.')], dogruSes: [anl('Hand.')], secenek: [elS(), bedenS('bacak'), bedenS('bas')], dogru: 0, birimler: ['en:s:hand'] },
      { tur: 'sec', ses: [anl('Medicine.')], dogruSes: [anl('Medicine.')], secenek: [tekS('kutu'), tekS('form'), ilacS()], dogru: 2, birimler: ['en:s:medicine'] },
      { tur: 'sec', ses: [anl('A pharmacy.')], dogruSes: [anl('A pharmacy.')], secenek: [eczaneS(), odaS(), kisiS('memur')], dogru: 0, birimler: ['en:s:pharmacy'] },
      { tur: 'sec', ses: [anl('A doctor.')], dogruSes: [anl('A doctor.')], secenek: [kisiS('memur'), kisiS('doktor'), kisiS('eczaci')], dogru: 1, birimler: ['en:s:doctor'] },
      { tur: 'sec', ses: [anl('Sick.')], dogruSes: [anl('Sick.')], secenek: [yatanS('uyku'), yatanS('hasta'), ayaktaS()], dogru: 1, birimler: ['en:s:sick'] },
      { tur: 'sec', ses: [anl('Sleep.')], dogruSes: [anl('Sleep.')], secenek: [yatanS('hasta'), ayaktaS(), yatanS('uyku')], dogru: 2, birimler: ['en:s:sleep'] },
      { tur: 'sec', ses: [sen("I can't open it.")], dogruSes: [sen("I can't open it.")], secenek: [siseBalonS('hayir', false), siseBalonS('evet', true), siseBalonS('soru', false)], dogru: 0, birimler: ['en:k:i-cant'] },
      { tur: 'sec', ses: [anl('A box.')], dogruSes: [anl('A box.')], secenek: [tekS('anahtar'), tekS('kutu'), tekS('form')], dogru: 1, birimler: ['en:s:box'] },  // düzeltme turu 1: ilaç kutusu da box; A anahtar
      { tur: 'sec', ses: [anl('A bed.')], dogruSes: [anl('A bed.')], secenek: [ilacS(), tekS('kapi'), tekS('yatak')], dogru: 2, birimler: ['en:s:bed'] },
    ] },
  ],

  // ---- Hikâyecikler (taslak §15.5): yeni birim yok. Kök hikâyede bir kez geçen satırdır; şıklar o karenin üç hâlidir; doğru şık
  // hikâyede olan hâldir. Kök tek başına cevabı vermez; bir sorunun şıkları başka bir sorunun cevabını göstermez; bir hikâyede iki
  // soru aynı türden değil. Doğrular H1 C B C, H2 B A B (düzeltme turu 1).
  hikayeler: [
    // 1 · Müfredat fikri: elin işte incinir (kutu düşer), eczacıya derdini anlatırsın. Eczanenin numarası 17; ilaç kutusu kırmızı bantlı.
    { id: 'eczane', ad: 'It hurts',
      sayfalar: [
        { tur: 'gor', ses: [ust('Can you help me?')], S: sahne([...usta('ileri'), ...kutu(150, 96, 'kraft', 1.3), ok(112, 54, 168, 112), ...elim()], 'ustabaşı büyük kraft kutunun yanında, kolu sana; ondan sana ok') },
        { tur: 'gor', ses: [sen('I can.')], S: sahne([...usta('ileri'), ...kutu(160, 108, 'kraft', 1.3), ...elim(), ...balon(196, 40, 'evet', .9)], 'kutunun bir ucu senin elinde; senin balonunda yeşil onay') },
        { tur: 'gor', ses: [sen('My hand. It hurts.')], S: sahne([...usta('asagi', 'sasir'), ...elAgri(), ...kutu(185, 112, 'kraft', 1), ...carpma(185, 86)], 'kraft kutu senin elinin üstüne düşmüş; mor çarpma ışınları; kırmızı ağrı zikzakları; ustabaşı şaşkın') },
        { tur: 'gor', ses: [ust('Sorry.')], S: sahne([...usta('ileri', 'uzgun'), ...kutu(140, 150, 'kraft', .8), ...elAgri()], 'ustabaşı üzgün, kolu sana; kutu yerde; ağrılı elin') },
        { tur: 'gor', ses: [anl('A pharmacy.')], S: sahne([...eczane(10, 8, .9, 17), ...elAgri()], 'eczane cephesi; kapının yanında numara plakası on yedi; sağ altta ağrılı elin') },
        { tur: 'gor', ses: [ecz('Hello.')], S: sahne([...eczaci('yukari'), ...sallar(60, 58), ...elAgri()], 'eczacı iki elini sallıyor; ağrılı elin') },
        { tur: 'gor', ses: [sen('Hello. My hand. It hurts.')], S: sahne([...eczaci('asagi'), ...elAgri(), halka(185, 146, 34), ...balon(140, 56)], 'senin elin halkalı, ağrı zikzakları; senin konuşma balonun') },
        { tur: 'gor', ses: [sen('I need medicine.')], S: sahne([...eczaci('asagi'), ...balon(160, 54, ilac(160, 48, 'kutu', .7, null), 1.4), iste(), ...elAgri()], 'senin balonunda bantsız ilaç kutusu; senden eczacıya ok') },
        { tur: 'gor', ses: [ecz('Here is your medicine.')], S: sahne([...eczaci(), ...ilac(108, 66, 'kutu', .7, 'red'), ver(), ...elAgri()], 'eczacı kırmızı bantlı ilaç kutusunu sana uzatıyor, eczacıdan sana ok') },
        { tur: 'gor', ses: [ecz("Take one. Don't take two.")], S: sahne(tezgah('dogru', false, 'red'), `tezgâh yakından: solda kırmızı bantlı ilaç kutusu; ${TEZGAH_AD.dogru}`) },
        { tur: 'gor', ses: [sen('Thank you. Goodbye.')], S: sahne([...eczaci('yukari'), ...sallar(60, 58), ...elAgri(), ...ilac(185, 124, 'kutu', .7, 'red'), ...okSag(128, 226, 64)], 'eczacı iki elini sallıyor; senin avucunda kırmızı bantlı ilaç kutusu; sen sağa gidiyorsun (sağa ok)') },
      ],
      sorular: [
        // Soru 1 (kare 3, nesne): elinin üstüne düşen. Çekiç sahne 7'nin hâlidir (tuzak). Şıklarda eczane, renk ve sayı yok.
        { tur: 'sec', ses: [sen('My hand. It hurts.')], dogruSes: [sen('My hand. It hurts.')], dogru: 2,
          secenek: [dusenS('cekic'), dusenS('matkap'), dusenS('kutu')], birimler: ['en:s:my', 'en:s:hand', 'en:k:it-hurts', 'en:s:box'] },
        // Soru 2 (kare 5, sayı): eczanenin numarası. 17 yalnız o karede; durakta "seventeen" söylenmez. Düzeltme turu 1 (M-1): doğru
        // B'de ve orta değer (19 / 17 / 13); H2 S2'deki "A'da uç değer"den ayrışır.
        { tur: 'sec', ses: [anl('A pharmacy.')], dogruSes: [anl('A pharmacy.')], dogru: 1,
          secenek: [eczaneNoS(19), eczaneNoS(17), eczaneNoS(13)], birimler: ['en:s:pharmacy', 'en:y:sayilar-13-19'] },
        // Soru 3 (kare 9, renk): ilaç kutusunun bandı. Mavi durağın varsayılanı, yeşil eczane haçının rengi (iki tuzak).
        { tur: 'sec', ses: [ecz('Here is your medicine.')], dogruSes: [ecz('Here is your medicine.')], dogru: 2,
          secenek: [kutuVerS('su'), kutuVerS('green'), kutuVerS('red')], birimler: ['en:k:here-is', 'en:s:your', 'en:s:medicine', 'en:s:red', 'en:s:green'] },
      ] },
    // 2 · Göz ağrısı ve uykusuzluk; doktor. Duvarda saat sekiz; doktor başı sorar, ağrıyan göz; doktor şişe verir.
    { id: 'doktor', ad: "I can't sleep",
      sayfalar: [
        { tur: 'gor', ses: [dok('Hello.')], S: sahne([...doktor('yukari'), ...sallar(60, 58), ...duvarSaati(8), ...elim()], 'doktor iki elini sallıyor; duvarda saat tam sekiz') },
        { tur: 'gor', ses: [sen('Hello. I am sick.')], S: sahne([...doktor('asagi'), ...duvarSaati(8), ...balon(160, 74, yatanFigur(160, 70, .42, HASTA), 1.8), ...elim()], 'senin balonunda küçük yatan kişi: gözler açık, üzgün, ateşli; duvarda saat tam sekiz') },
        { tur: 'gor', ses: [dok('Your head?')], S: sahne([...doktor(), ...duvarSaati(8), ...konusma(140, 36, yuzYakin(140, 36, .75, 'bas'), 1.3), ...elim()], 'doktorun balonunda yüz yakından, baş halkalı (ağrı işareti yok); duvarda saat tam sekiz') },
        { tur: 'gor', ses: [sen('No. Here.')], S: sahne([...doktor('asagi'), ...duvarSaati(8), ...balon(160, 76, yuzYakin(160, 64, 1, 'goz', true), 1.8), ...elim()], 'senin balonunda yüz yakından, göz halkalı ve kırmızı ağrı zikzaklı; duvarda saat tam sekiz') },
        { tur: 'gor', ses: [sen("It hurts. I can't sleep.")], S: sahne([...doktor('asagi'), ...duvarSaati(8), ...balon(160, 76, [...yatanFigur(156, 72, .42), ...isaret(184, 56, 'hayir', .7)], 1.8), ...elim()], 'senin balonunda küçük yatan kişi gözleri kapalı ve kırmızı çarpı; duvarda saat tam sekiz') },
        { tur: 'gor', ses: [dok('Take one, please.')], S: sahne([...doktor(), ...duvarSaati(8), ...ilac(106, 62, 'sise', .6), ver(), ...elim()], 'doktor kahverengi ilaç şişesini sana uzatıyor, doktordan sana ok; duvarda saat tam sekiz') },
        { tur: 'gor', ses: [dok('Sleep, please.')], S: sahne([...doktor(), ...duvarSaati(8), ...konusma(140, 36, yatanFigur(140, 38, .36), 1.3), ...elim()], 'doktorun balonunda küçük yatan kişi: gözler kapalı; duvarda saat tam sekiz') },
        { tur: 'gor', ses: [sen('Thank you. Goodbye.')], S: sahne([...doktor('yukari'), ...sallar(60, 58), ...duvarSaati(8), ...elim(), ...ilac(185, 116, 'sise', .8), ...okSag(128, 226, 74)], 'doktor iki elini sallıyor; senin avucunda kahverengi ilaç şişesi; sen sağa gidiyorsun (sağa ok); duvarda saat tam sekiz') },
      ],
      sorular: [
        // Soru 1 (kare 4, yer): ağrıyan yer. Yalnız balon (yakın çekim; saat görünmez). Doktorun yanlış tahmini (baş) tuzak şıktır.
        { tur: 'sec', ses: [sen('No. Here.')], dogruSes: [sen('No. Here.')], dogru: 1,
          secenek: [balonVucut('bas'), balonVucut('goz'), balonVucut('bacak')], birimler: ['en:s:no', 'en:s:here', 'en:s:eye'] },
        // Soru 2 (kare 1, saat): duvardaki saat. Doğru A, en küçük değer (H1 S2'deki "A'da en büyük"ün tersi). Şıklarda şişe ve balon yok.
        { tur: 'sec', ses: [dok('Hello.')], dogruSes: [dok('Hello.')], dogru: 0,
          secenek: [doktorSaatS(8), doktorSaatS(11), doktorSaatS(10)], birimler: ['en:s:hello', 'en:s:eight', 'en:s:oclock'] },
        // Soru 3 (kare 8, nesne): avucundaki. Yakın çekim (saat görünmez). Kapsül kare 6'daki "Take one"ın tuzağıdır; kutu mavi bantlı
        // (H1 S3'ün kırmızısını göstermez).
        { tur: 'sec', ses: [sen('Thank you. Goodbye.')], dogruSes: [sen('Thank you. Goodbye.')], dogru: 1,
          secenek: [avucS('kutu'), avucS('sise'), avucS('hap')], birimler: ['en:k:thank-you', 'en:s:goodbye', 'en:s:medicine'] },
      ] },
  ],
};
