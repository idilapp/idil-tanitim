// Filiz sahne parçaları (18 Kasım 2026): deneme dosyasındaki (tasarim/filiz/sahneler.js) parçaların kalıcı hâli.
// Her parça kart-gorsel.js motorunun (sahneSvg) öğe dizisini döndürür. Sahne: 240 genişlik; boy sayfaya göre.
// Renk adları İngilizce ya da motor anahtarı olabilir: 'red' → 'kirmizi' vb.
// İki ders: kol sahnenin sağ altına (senin eline) bakar; el açık avuçtur (dört parmak + başparmak).
// Dönüş: ok() ve halka() dizi değil TEK öğe döndürür (çağıran açar [...] ya da [ ] içine alır). Diğer parçalar dizi döndürür.
// ok(): ok ucu sabit biçimdir, sağa ya da sağ alta giden oklar için çizilir; ters yönde uç sabit kalır (yön buna göre dönmez).
// İçerik sınırı: yalnız yetişkin nesneleri; oyuncak ya da çocuksu gereç yok.

const RENK = { red: 'kirmizi', green: 'yesil', yellow: 'sari', blue: 'su', white: 'beyaz', brown: 'kahve', orange: 'turuncu', pink: 'pembe', gray: 'gri' };
const r = f => RENK[f] || f;

export const KISI_EL = [100, 74];  // kişinin elinin yanı
export const SEN_EL = [185, 146];  // senin elin

// Elma: tek parça elma silueti (üstte çukur, altta iki yumru), sap, yaprak ve küçük parlaklık. 19 Kasım 2026 düzeltmesi:
// eski çizim iki üst üste daireydi ve çizgileri ortada kesiştiği için "iki top" gibi okunuyordu (kullanıcı bildirimi).
export const elma = (x, y, f, rr = 16) => {
  f = r(f);
  const k = v => +(v * rr).toFixed(2);
  const d = `M${x} ${y - k(.62)} C${x - k(.3)} ${y - k(1)} ${x - k(1.08)} ${y - k(.82)} ${x - k(1.02)} ${y - k(.08)} `
    + `C${x - k(.98)} ${y + k(.62)} ${x - k(.5)} ${y + k(1.02)} ${x - k(.18)} ${y + k(.92)} Q${x} ${y + k(.84)} ${x + k(.18)} ${y + k(.92)} `
    + `C${x + k(.5)} ${y + k(1.02)} ${x + k(.98)} ${y + k(.62)} ${x + k(1.02)} ${y - k(.08)} `
    + `C${x + k(1.08)} ${y - k(.82)} ${x + k(.3)} ${y - k(1)} ${x} ${y - k(.62)} Z`;
  return [
    { t: 'p', d, f },
    { t: 'e', x: x - k(.48), y: y - k(.22), rx: k(.14), ry: k(.24), f: 'beyaz' },
    { t: 'l', d: `M${x} ${y - k(.6)} Q${x + k(.04)} ${y - k(.92)} ${x + k(.16)} ${y - k(1.08)}`, w: 1.8, k: 'kahve' },
    { t: 'e', x: x + k(.42), y: y - k(.98), rx: k(.28), ry: k(.13), f: f === 'yesil' ? '#3FA34D' : 'yesil' },
  ];
};

export const leke = f => [{ t: 'r', x: 75, y: 35, w: 90, h: 90, rx: 22, f: r(f) }];

export const araba = (x, y, f) => [
  { t: 'p', d: `M${x + 12} ${y} L${x + 20} ${y - 15} L${x + 46} ${y - 15} L${x + 56} ${y} Z`, f: 'buz' },
  { t: 'r', x, y, w: 68, h: 20, rx: 7, f: r(f) },
  { t: 'c', x: x + 15, y: y + 20, r: 7, f: '#4B4B52' }, { t: 'c', x: x + 53, y: y + 20, r: 7, f: '#4B4B52' },
];

export const top = (x, y, f) => [
  { t: 'c', x, y, r: 20, f: r(f) },
  { t: 'l', d: `M${x - 20} ${y} Q${x} ${y - 9} ${x + 20} ${y} M${x} ${y - 20} Q${x - 8} ${y} ${x} ${y + 20}`, w: 1.3 },
];

export const gomlek = (x, y, f) => [{ t: 'p', d: `M${x - 12} ${y - 22} L${x - 26} ${y - 14} L${x - 20} ${y - 2} L${x - 14} ${y - 6} L${x - 14} ${y + 22} L${x + 14} ${y + 22} L${x + 14} ${y - 6} L${x + 20} ${y - 2} L${x + 26} ${y - 14} L${x + 12} ${y - 22} Q${x} ${y - 14} ${x - 12} ${y - 22} Z`, f: r(f) }];

// Senin elin (alttan uzanır): açık avuç; avucunda istenirse elma
export const el = (x, y, iciRenk) => [
  { t: 'r', x: x - 12, y: y + 8, w: 24, h: 44, rx: 6, f: '#7FDFFF' },
  ...[-12, -5, 2, 9].map((dx, k) => ({ t: 'r', x: x + dx - 1, y: y - 22 + Math.abs(k - 1.5) * 2, w: 7, h: 18, rx: 3.5, f: 'ten' })),
  { t: 'e', x: x - 17, y: y - 2, rx: 4.5, ry: 9, f: 'ten' },
  { t: 'r', x: x - 15, y: y - 9, w: 30, h: 22, rx: 9, f: 'ten' },
  ...(iciRenk ? elma(x, y - 18, iciRenk, 13) : []),
];

// Kişi: solda, tezgâh ya da masa arkasında; rolü yalnız tezgâh/masa rengi ayırt eder.
// Kolu 'ileri' ise sağ alta, senin eline (SEN_EL) uzanır.
const ROLLER = {
  pazarci: () => ({ ust: [{ t: 'p', d: 'M14 18 L106 18 L98 34 L22 34 Z', f: '#FF9EC7' }, { t: 'l', d: 'M24 34 L24 120 M96 34 L96 120', w: 1.6 }], on: [{ t: 'r', x: 8, y: 112, w: 104, h: 24, rx: 4, f: 'kraft' }] }),
  eczaci: () => ({ ust: [{ t: 'r', x: 46, y: 16, w: 28, h: 28, rx: 5, f: 'yesil' }, { t: 'l', d: 'M60 21 L60 39 M51 30 L69 30', w: 2.4, k: 'beyaz' }], on: [{ t: 'r', x: 8, y: 112, w: 104, h: 24, rx: 4, f: 'beyaz' }] }),
  memur: () => ({ ust: [{ t: 'r', x: 30, y: 22, w: 60, h: 40, rx: 4, f: 'buz' }], on: [{ t: 'r', x: 8, y: 112, w: 104, h: 24, rx: 4, f: 'gri' }] }),
  is: () => ({ ust: [{ t: 'l', d: 'M24 30 L96 30', w: 2.2, k: 'kahve' }], on: [{ t: 'r', x: 8, y: 112, w: 104, h: 24, rx: 4, f: 'kahve' }] }),
  // Havayolu görevlisi (Görev 4, düzeltme 1): bilet ve bagaj işleri pasaport memurundan ayrıldı. Mavi uçak tabelası ve mavi tezgâh.
  // Sesi 'memur' rolüdür (ev sahibi örneği gibi: ayrı rol yok, çerçeve ayırır).
  gorevli: () => ({ ust: [{ t: 'r', x: 22, y: 12, w: 76, h: 30, rx: 5, f: 'su' }, ...ucak(60, 27, 'kar', 1.5)], on: [{ t: 'r', x: 8, y: 112, w: 104, h: 24, rx: 4, f: 'su' }] }),
};
export const kisi = (rol, kol = 'ileri', yuz = 'mutlu') => {
  if (!ROLLER[rol]) throw new Error(`kisi: bilinmeyen rol '${rol}' (pazarci, eczaci, memur, is, gorevli)`);
  const { ust, on } = ROLLER[rol]();
  return [...ust, { t: 'k', x: 60, y: 112, s: 2, kol, yuz }, ...on];
};

export const ok = (x1, y1, x2, y2) => ({ t: 'l', d: `M${x1} ${y1} Q${(x1 + x2) / 2 - 20} ${(y1 + y2) / 2} ${x2} ${y2} m-7 -1 l7 1 l-2 -7`, w: 2, k: 'vurgu', kesik: true });
export const halka = (x, y, rr = 24) => ({ t: 'l', d: `M${x - rr} ${y} a${rr} ${rr} 0 1 0 ${2 * rr} 0 a${rr} ${rr} 0 1 0 ${-2 * rr} 0`, w: 2.4, k: 'vurgu' });

// ---- Durak 1 (Varış) parçaları: çanta, pasaport, bilet, balon, masa ----
// Ortak ölçü: canta, pasaport ve bilet y'den 20 aşağıya iner (taban y+20); aynı y'ye konan nesneler aynı çizgide durur.
// Ayrışma: çanta kahverengi ve saplı, pasaport mavi kapaklı ve daire amblemli, bilet beyaz uzun şerit ve uçak simgeli.
export const canta = (x, y, f = 'kahve', s = 1) => {
  const h = v => +(v * s).toFixed(2);
  return [
    { t: 'l', d: `M${x - h(10)} ${y - h(14)} Q${x - h(10)} ${y - h(26)} ${x} ${y - h(26)} Q${x + h(10)} ${y - h(26)} ${x + h(10)} ${y - h(14)}`, w: 2.4 },
    { t: 'r', x: x - h(22), y: y - h(14), w: h(44), h: h(34), rx: h(8), f: r(f) },
    { t: 'l', d: `M${x - h(22)} ${y + h(2)} L${x + h(22)} ${y + h(2)}`, w: 1.4 },
    { t: 'r', x: x - h(4), y: y - h(2), w: h(8), h: h(8), rx: h(2), f: 'sari' },
  ];
};

// 1-5 çanta yan yana; n >= 4 ise küçültülür, taban çizgisi aynı kalır (varsayılan 116; sec seçeneklerinde 102, boy 120'ye sığsın).
export const cantaSira = (n, f = 'kahve', taban = 116) => {
  const s = n >= 4 ? .8 : 1, ara = n >= 4 ? 44 : 56;
  return Array.from({ length: n }, (_, i) => canta(120 + (i - (n - 1) / 2) * ara, taban - 20 * s, f, s)).flat();
};

export const pasaport = (x, y) => [
  { t: 'r', x: x - 15, y: y - 20, w: 30, h: 40, rx: 3, f: '#3B5BA9' },
  { t: 'c', x, y: y - 5, r: 7, f: 'sari' },
  { t: 'l', d: `M${x - 8} ${y + 10} L${x + 8} ${y + 10}`, w: 1.2, k: 'beyaz' },
];

// f: bilet rengi (varsayılan beyaz; Görev 4: hikâyedeki eski bilet sarı, ikisi yan yana ayrışsın).
export const bilet = (x, y, f = 'kar') => [
  { t: 'r', x: x - 32, y: y - 6, w: 64, h: 26, rx: 4, f: r(f) },
  { t: 'e', x: x - 19, y: y + 8, rx: 9, ry: 2.5, f: 'su' },
  { t: 'p', d: `M${x - 21} ${y + 8} L${x - 25} ${y} L${x - 19} ${y} L${x - 13} ${y + 8} Z M${x - 21} ${y + 8} L${x - 25} ${y + 16} L${x - 19} ${y + 16} L${x - 13} ${y + 8} Z`, f: 'su' },
  { t: 'l', d: `M${x + 2} ${y - 6} L${x + 2} ${y + 20}`, w: 1, k: 'gri', kesik: true },
  { t: 'l', d: `M${x + 9} ${y + 3} L${x + 26} ${y + 3} M${x + 9} ${y + 11} L${x + 22} ${y + 11}`, w: 1.2, k: 'gri' },
];

// Konuşma balonu (senin sözün): kuyruğu sol alta, senin eline doğru.
// ic (Görev 4, isteğe bağlı): balonun içi; yoksa iki gri çizgi (genel söz). 'evet' yeşil onay, 'hayir' kırmızı çarpı,
// 'soru' soru işareti (anlamadım), 'yavas' aralıklı üç kısa çizgi (ayrı ayrı, yavaş söz). s ölçek (sec seçeneğinde büyütmek için).
// ic öğe dizisi de olabilir (Görev 3 Dalga 1): dizi balonun içine olduğu gibi konur; s ve balon konumu ona uygulanmaz, çağıran
// öğeleri mutlak konumla çizer.
export const balon = (x, y, ic, s = 1) => {
  const n = (dx, dy) => `${+(x + dx * s).toFixed(2)} ${+(y + dy * s).toFixed(2)}`;
  return [
    { t: 'p', d: `M${n(-26, -14)} Q${n(-26, -22)} ${n(-18, -22)} L${n(18, -22)} Q${n(26, -22)} ${n(26, -14)} L${n(26, 4)} Q${n(26, 12)} ${n(18, 12)} L${n(-6, 12)} L${n(-16, 22)} L${n(-14, 12)} L${n(-18, 12)} Q${n(-26, 12)} ${n(-26, 4)} Z`, f: 'kar' },
    ...sozIci(x, y - 5 * s, ic, s, `M${n(-14, -8)} L${n(14, -8)} M${n(-14, 0)} L${n(8, 0)}`),
  ];
};

// Boş masa (kişisiz sahnede nesne üstünde durur): üst yüz y=114.
export const masa = () => [
  { t: 'r', x: 30, y: 114, w: 180, h: 12, rx: 3, f: 'gri' },
  { t: 'l', d: 'M44 126 L44 164 M196 126 L196 164', w: 1.6 },
];

// ---- Durak 2 (Barınma) parçaları: oda içi, kapı, pencere, yatak, anahtar, anahtar tahtası, plaka ----
// Ortak ölçü: açık ve kapalı hâller aynı çerçevede çizilir (yalnız boşluk ve açı değişir); açık hâlde boşluk koyu ('#4B4B5A') görünür.
// Sec seçeneklerinde (boy 120) y ≤ 105 kalsın: kapı y±40, pencere y-28..y+34, yatak y-24..y+26, anahtar y±9 (s=1).
const BOSLUK = '#4B4B5A';

// Boş oda: arka duvar, iki yan duvar ve zemin (y 2..170). Yatak ve pencere ayrıca eklenir.
export const odaIci = () => [
  { t: 'p', d: 'M4 2 L30 8 L30 128 L4 170 Z', f: 'kraft' },
  { t: 'p', d: 'M236 2 L210 8 L210 128 L236 170 Z', f: 'kraft' },
  { t: 'r', x: 30, y: 8, w: 180, h: 120, rx: 0, f: 'bulut' },
  { t: 'p', d: 'M30 128 L210 128 L236 170 L4 170 Z', f: 'tas' },
];

// Kapı: orta nokta (x, y), 52x80. Kapalı: tek kahverengi kanat ve topuz. Açık: koyu boşluk, solda içe dönmüş dar kanat.
export const kapi = (x, y, acik = false) => acik ? [
  { t: 'r', x: x - 26, y: y - 40, w: 52, h: 80, rx: 3, f: 'iz' },
  { t: 'r', x: x - 21, y: y - 35, w: 42, h: 75, rx: 1, f: BOSLUK },
  { t: 'p', d: `M${x - 21} ${y - 35} L${x - 5} ${y - 28} L${x - 5} ${y + 33} L${x - 21} ${y + 40} Z`, f: 'agac' },
  { t: 'c', x: x - 8, y: y + 3, r: 2.4, f: 'sari' },
] : [
  { t: 'r', x: x - 26, y: y - 40, w: 52, h: 80, rx: 3, f: 'iz' },
  { t: 'r', x: x - 21, y: y - 35, w: 42, h: 75, rx: 1, f: 'agac' },
  { t: 'l', d: `M${x - 13} ${y - 26} L${x + 13} ${y - 26} L${x + 13} ${y - 4} L${x - 13} ${y - 4} Z M${x - 13} ${y + 6} L${x + 13} ${y + 6} L${x + 13} ${y + 30} L${x - 13} ${y + 30} Z`, w: 1 },
  { t: 'c', x: x + 14, y: y + 3, r: 3.2, f: 'sari' },
];

// Pencere: orta nokta (x, y), 56x56 çerçeve ve denizlik (y-28..y+34). Kapalı: tam cam ve çarpı. Açık: solda cam, sağda içe açılmış dar kanat, aradan koyu boşluk.
export const pencere = (x, y, acik = false) => [
  { t: 'r', x: x - 28, y: y - 28, w: 56, h: 56, rx: 3, f: 'kar' },
  ...(acik ? [
    { t: 'r', x: x - 23, y: y - 23, w: 46, h: 46, rx: 1, f: BOSLUK },
    { t: 'r', x: x - 23, y: y - 23, w: 20, h: 46, rx: 1, f: 'buz' },
    { t: 'p', d: `M${x + 23} ${y - 23} L${x + 9} ${y - 27} L${x + 9} ${y + 27} L${x + 23} ${y + 23} Z`, f: 'buz' },
  ] : [
    { t: 'r', x: x - 23, y: y - 23, w: 46, h: 46, rx: 1, f: 'buz' },
    { t: 'l', d: `M${x} ${y - 23} L${x} ${y + 23} M${x - 23} ${y} L${x + 23} ${y}`, w: 1.4 },
  ]),
  { t: 'r', x: x - 32, y: y + 28, w: 64, h: 6, rx: 2, f: 'tas' },
];

// Yatak: orta nokta (x, y), yaklaşık 94x50: başlık, yastık, mavi örtü, ayak.
export const yatak = (x, y) => [
  { t: 'r', x: x - 48, y: y - 24, w: 8, h: 46, rx: 3, f: 'agac' },
  { t: 'r', x: x - 42, y: y + 4, w: 88, h: 16, rx: 4, f: 'kraft' },
  { t: 'r', x: x - 34, y: y - 10, w: 80, h: 18, rx: 6, f: 'su' },
  { t: 'r', x: x - 40, y: y - 14, w: 24, h: 12, rx: 6, f: 'kar' },
  { t: 'r', x: x - 42, y: y + 20, w: 6, h: 6, rx: 1, f: 'iz' },
  { t: 'r', x: x + 40, y: y + 20, w: 6, h: 6, rx: 1, f: 'iz' },
];

// Anahtar: orta nokta (x, y), yatay: halka solda, gövde ve iki diş sağda; s ölçek.
export const anahtar = (x, y, f = 'sari', s = 1) => {
  const h = v => +(v * s).toFixed(2);
  return [
    { t: 'r', x: x - h(7), y: y - h(2.5), w: h(25), h: h(5), rx: h(2), f: r(f) },
    { t: 'r', x: x + h(11), y: y + h(2.5), w: h(3.5), h: h(5), rx: 0, f: r(f) },
    { t: 'r', x: x + h(16), y: y + h(2.5), w: h(3.5), h: h(7), rx: 0, f: r(f) },
    { t: 'c', x: x - h(13), y, r: h(7), f: r(f) },
    { t: 'c', x: x - h(13), y, r: h(2.6), f: 'zemin' },
  ];
};

// Anahtar tahtası (ev sahibinin duvarı): sağ üstte, üç asılı anahtar. Varsayılan sol üst (128, 14), 96x38.
// s (Görev 3 Dalga 1, 23 Kasım 2026): ölçek; küçük tahta (s=.6, 58x23) ev sahibinin konuşma balonuyla aynı sahneye sığar.
// s=1 eski çizimin aynısıdır.
export const anahtarTahtasi = (x = 128, y = 14, s = 1) => {
  const h = v => +(v * s).toFixed(2);
  return [
    { t: 'r', x, y, w: h(96), h: h(38), rx: h(4), f: 'kraft' },
    ...[0, 1, 2].flatMap(i => {
      const cx = +(x + h(20) + i * h(28)).toFixed(2);
      return [
        { t: 'r', x: +(cx - h(1.5)).toFixed(2), y: +(y + h(16)).toFixed(2), w: h(3), h: h(15), rx: h(1), f: 'sari' },
        { t: 'r', x: +(cx + h(1.5)).toFixed(2), y: +(y + h(24)).toFixed(2), w: h(4), h: h(3), rx: 0, f: 'sari' },
        { t: 'c', x: cx, y: +(y + h(12)).toFixed(2), r: h(4), f: 'sari' },
      ];
    }),
  ];
};

// Kapı plakası: orta nokta (x, y), 52x36 beyaz plaka ve rakam; s ölçek.
export const plaka = (x, y, n, s = 1) => {
  const h = v => +(v * s).toFixed(2);
  return [
    { t: 'r', x: x - h(26), y: y - h(18), w: h(52), h: h(36), rx: h(5), f: 'kar' },
    { t: 'y', x, y: y + h(9), m: String(n), b: h(28) },
  ];
};

// ---- Durak 4 (İş) parçaları: çekiç, matkap, kutu, kutu sırası, saat ----
// Üç alet üç ayrı silüet: çekiç dikey T, matkap yatay tabanca biçimi (gövde + sap + uç), kutu düz kare (bant ve kulp deliği).
// Hepsinde (x, y) şeklin yatay ortasıdır; s ölçek. s=1: çekiç y-22..y+26, matkap y-10..y+28, kutu y±20.
// sec seçeneklerinde (boy 120) y ≤ 105 kalsın: s ≤ 1.1 ve y ≈ 60 yeter.
const ALET = '#8E97A5';

// Çekiç: dikey ahşap sap, üstte yatay gri kafa, solda pençe ucu. Yatay genişlik x-22..x+22 (s=1).
export const cekic = (x, y, s = 1) => {
  const h = v => +(v * s).toFixed(2), X = x + h(4);
  return [
    { t: 'r', x: X - h(3.5), y: y - h(8), w: h(7), h: h(34), rx: h(2), f: 'agac' },
    { t: 'r', x: X - h(18), y: y - h(22), w: h(36), h: h(14), rx: h(3), f: ALET },
    { t: 'p', d: `M${X - h(18)} ${y - h(22)} L${X - h(26)} ${y - h(8)} L${X - h(18)} ${y - h(8)} Z`, f: ALET },
  ];
};

// Matkap: yatay turuncu gövde, aşağı inen koyu sap, sağda gri mandren ve zikzaklı uç. Yatay genişlik x-34..x+34 (s=1).
export const matkap = (x, y, s = 1) => {
  const h = v => +(v * s).toFixed(2), X = x - h(14);
  return [
    { t: 'r', x: X - h(20), y: y - h(10), w: h(40), h: h(18), rx: h(5), f: 'turuncu' },
    { t: 'r', x: X - h(14), y: y + h(8), w: h(12), h: h(20), rx: h(3), f: '#4B4B52' },
    { t: 'r', x: X + h(20), y: y - h(7), w: h(10), h: h(12), rx: h(2), f: ALET },
    { t: 'l', d: `M${X + h(30)} ${y - h(1)} l${h(4)} ${-h(3)} l${h(4)} ${h(6)} l${h(4)} ${-h(6)} l${h(4)} ${h(3)}`, w: 2, k: ALET },
  ];
};

// Kutu: kare, renkli gövde, ortada beyaz bant, altta kulp deliği. s ölçek (yarı kenar 20s).
export const kutu = (x, y, f = 'kraft', s = 1) => {
  const h = v => +(v * s).toFixed(2);
  return [
    { t: 'r', x: x - h(20), y: y - h(20), w: h(40), h: h(40), rx: h(3), f: r(f) },
    { t: 'r', x: x - h(4), y: y - h(20), w: h(8), h: h(40), rx: 0, f: 'kar' },
    { t: 'l', d: `M${x - h(14)} ${y + h(9)} L${x - h(8)} ${y + h(9)}`, w: 1.4 },
  ];
};

// 6-10 kutu: her kutu ayrı ve tam çerçeveli (s=.6, 24 birim; yatay ve dikey boşluk 6). Üst sıra en çok 5, kalanı alt sırada;
// iki sıra aynı soldan başlar (sola hizalı); alt sıranın tabanı `taban` (varsayılan 116; sec için 102).
export const kutuSira = (n, f = 'kraft', taban = 116) => {
  const ara = 30, x0 = 120 - 2 * ara;
  return Array.from({ length: n }, (_, i) => {
    const sira = Math.floor(i / 5), kol = i % 5;
    const y = taban - 12 - (n > 5 ? (1 - sira) * ara : 0);
    return kutu(x0 + kol * ara, y, f, .6);
  }).flat();
};

// Analog saat: koyu çerçeve, 1-12 rakamlı yüz, kırmızı kısa kalın akrep (saat), ince uzun yelkovan hep 12'de. hour 1-12 (tam saat).
// s ölçek (yüz yarıçapı 33s; sec seçeneğinde y=62, s=1 yeter).
export const saat = (x, y, hour, s = 1) => {
  const h = v => +(v * s).toFixed(2), a = (hour % 12) * Math.PI / 6;
  const nokta = (rr, ac) => [+(x + rr * s * Math.sin(ac)).toFixed(2), +(y - rr * s * Math.cos(ac)).toFixed(2)];
  const [ex, ey] = nokta(15, a), [mx, my] = nokta(20, 0);
  return [
    { t: 'c', x, y, r: h(37), f: 'agac' },
    { t: 'c', x, y, r: h(33), f: 'kar' },
    ...Array.from({ length: 12 }, (_, i) => {
      const [tx, ty] = nokta(24, (i + 1) * Math.PI / 6);
      return { t: 'y', x: tx, y: +(ty + h(3)).toFixed(2), m: String(i + 1), b: h(8) };
    }),
    { t: 'l', d: `M${x} ${y} L${mx} ${my}`, w: 1.2, k: 'koyu' },
    { t: 'l', d: `M${x} ${y} L${ex} ${ey}`, w: 3, k: 'kirmizi' },
    { t: 'c', x, y, r: h(2.6), f: 'koyu' },
  ];
};

// ---- Durak 1 (Varış) ek parçaları (Görev 4, 21 Kasım 2026): işaret, karşıdakinin konuşma balonu, çarpma, sağa ok ----
// Söz simgeleri yazı değildir: onay = evet, çarpı = hayır, soru işareti = anlamadım; yoğun zikzak = hızlı söz, aralıklı üç
// kısa çizgi = yavaş söz. Aynı simge senin balonunda (balon) ve karşıdakinin balonunda (konusma) aynı anlamı taşır.

// İşaret: (x, y) ortalı daire; 'evet' yeşil daire ve beyaz onay, 'hayir' kırmızı daire ve beyaz çarpı. s ölçek (yarıçap 11s).
export const isaret = (x, y, tur, s = 1) => {
  const h = v => +(v * s).toFixed(2), n = (dx, dy) => `${+(x + dx * s).toFixed(2)} ${+(y + dy * s).toFixed(2)}`;
  return tur === 'evet' ? [
    { t: 'c', x, y, r: h(11), f: 'yesil' },
    { t: 'l', d: `M${n(-5, 0)} L${n(-1.5, 4)} L${n(5.5, -4.5)}`, w: h(2.4), k: 'kar' },
  ] : [
    { t: 'c', x, y, r: h(11), f: 'kirmizi' },
    { t: 'l', d: `M${n(-4.5, -4.5)} L${n(4.5, 4.5)} M${n(4.5, -4.5)} L${n(-4.5, 4.5)}`, w: h(2.4), k: 'kar' },
  ];
};

// Balonun içi (balon ve konusma ortak). (x, y) iç ortası; genel: ic yokken çizilecek yol.
function sozIci(x, y, ic, s, genel) {
  const n = (dx, dy) => `${+(x + dx * s).toFixed(2)} ${+(y + dy * s).toFixed(2)}`, h = v => +(v * s).toFixed(2);
  // Görev 3 Dalga 1 (Barınma): ic bir öğe dizisiyse balonun içine olduğu gibi konur (ör. küçük plaka, anahtar ya da çanta;
  // çağıran mutlak konumla çizer). Balonda nesne = o şeyden söz ediliyor ya da o isteniyor.
  if (Array.isArray(ic)) return ic;
  if (ic === 'evet' || ic === 'hayir') return isaret(x, y, ic, .85 * s);
  // İstenen belge (Görev 4, düzeltme 1): "Passport, please." balonunda küçük pasaport, "Ticket, please." balonunda küçük bilet.
  if (ic === 'pasaport') return [
    { t: 'r', x: +(x - 7 * s).toFixed(2), y: +(y - 9 * s).toFixed(2), w: h(14), h: h(18), rx: h(1.5), f: '#3B5BA9' },
    { t: 'c', x, y: +(y - 2 * s).toFixed(2), r: h(3.2), f: 'sari' },
  ];
  if (ic === 'bilet') return [{ t: 'r', x: +(x - 15 * s).toFixed(2), y: +(y - 6 * s).toFixed(2), w: h(30), h: h(12), rx: h(2), f: 'kar' }, ...ucak(x - 6 * s, y, 'su', .7 * s)];
  // "Yavaş konuş" isteği: solda sık zikzak, ok, sağda aralıklı üç çizgi (hızlıdan yavaşa; karşıtlık çifti).
  if (ic === 'yavasla') return [
    { t: 'l', d: `M${n(-21, 0)}` + Array.from({ length: 5 }, (_, i) => ` L${n(-21 + (i + 1) * 2.6, i % 2 ? 0 : -3)}`).join(''), w: h(1.1), k: 'gri' },
    { t: 'l', d: `M${n(-6, 0)} L${n(0, 0)} M${n(-3, -3)} L${n(0, 0)} L${n(-3, 3)}`, w: h(1.4), k: 'vurgu' },
    { t: 'l', d: [5, 13, 21].map(dx => `M${n(dx - 2, 0)} L${n(dx + 2, 0)}`).join(' '), w: h(2.6), k: 'gri' },
  ];
  if (ic === 'soru') return [
    { t: 'l', d: `M${n(-5, -6)} Q${n(-5, -11)} ${n(0, -11)} Q${n(6, -11)} ${n(6, -6)} Q${n(6, -2)} ${n(0, 0)} L${n(0, 4)}`, w: h(2.6), k: 'vurgu' },
    { t: 'c', x, y: +(y + 9.5 * s).toFixed(2), r: h(2), f: 'vurgu' },
  ];
  if (ic === 'yavas') return [{ t: 'l', d: [-15, 0, 15].map(dx => `M${n(dx - 3.5, 0)} L${n(dx + 3.5, 0)}`).join(' '), w: h(2.6), k: 'gri' }];
  if (ic === 'hizli') return [{ t: 'l', d: [-8, 0, 8].map(dy => `M${n(-22, dy)}` + Array.from({ length: 11 }, (_, i) => ` L${n(-22 + (i + 1) * 4, dy + (i % 2 ? 0 : -3))}`).join('')).join(' '), w: h(1.1), k: 'gri' }];
  return genel ? [{ t: 'l', d: genel, w: 1.4, k: 'gri' }] : [];
}

// Karşıdakinin (memurun) konuşma balonu: 68x32 kutu, kuyruğu solda, aşağı sola (kişinin başına) bakar. ic: 'hizli' (yoğun
// zikzak), 'yavas', 'evet', 'hayir'. Memur (kisi) başı (60, 52) iken (132, 30) uygun yerdir. s ölçek.
// ic öğe dizisi de olabilir (ör. küçük plaka): olduğu gibi konur, s ve konum uygulanmaz; çağıran mutlak konumla çizer.
export const konusma = (x, y, ic, s = 1) => {
  const n = (dx, dy) => `${+(x + dx * s).toFixed(2)} ${+(y + dy * s).toFixed(2)}`;
  return [
    { t: 'p', d: `M${n(-28, -16)} L${n(28, -16)} Q${n(34, -16)} ${n(34, -10)} L${n(34, 10)} Q${n(34, 16)} ${n(28, 16)} L${n(-28, 16)} Q${n(-34, 16)} ${n(-34, 10)} L${n(-34, 8)} L${n(-48, 16)} L${n(-34, -1)} L${n(-34, -10)} Q${n(-34, -16)} ${n(-28, -16)} Z`, f: 'kar' },
    ...sozIci(x, y, ic, s),
  ];
};

// Uçak simgesi (bilet ve havayolu tabelası): gövde elipsi ve iki kanat. (x, y) gövde ortası; f renk; s ölçek.
export const ucak = (x, y, f = 'su', s = 1) => {
  const n = (dx, dy) => `${+(x + dx * s).toFixed(2)} ${+(y + dy * s).toFixed(2)}`;
  return [
    { t: 'e', x, y, rx: +(9 * s).toFixed(2), ry: +(2.5 * s).toFixed(2), f },
    { t: 'p', d: `M${n(-2, 0)} L${n(-6, -8)} L${n(0, -8)} L${n(6, 0)} Z M${n(-2, 0)} L${n(-6, 8)} L${n(0, 8)} L${n(6, 0)} Z`, f },
  ];
};

// El sallama çizgileri: (x, y) elin yanında iki kısa yay; yon 1 sağ, -1 sol (Görev 4, düzeltme 1: selam ve veda).
export const salla = (x, y, yon = 1) => [{ t: 'l', d: `M${x + 4 * yon} ${y - 7} Q${x + 9 * yon} ${y} ${x + 4 * yon} ${y + 7} M${x + 9 * yon} ${y - 11} Q${x + 16 * yon} ${y} ${x + 9 * yon} ${y + 11}`, w: 1.6, k: 'vurgu' }];

// Sola giden yatay ok (masaya varış): xBas sağda, xUc solda.
export const okSol = (xBas, xUc, y) => [
  { t: 'l', d: `M${xBas} ${y} L${xUc + 3} ${y}`, w: 2, k: 'vurgu', kesik: true },
  { t: 'l', d: `M${xUc + 8} ${y - 6} L${xUc} ${y} L${xUc + 8} ${y + 6}`, w: 2, k: 'vurgu' },
];

// Çarpma: (x, y) çevresinde beş kısa ışın (bir şey bir şeye çarptı).
export const carpma = (x, y) => [{ t: 'l', d: `M${x - 12} ${y - 10} L${x - 5} ${y - 4} M${x} ${y - 15} L${x} ${y - 7} M${x + 12} ${y - 10} L${x + 5} ${y - 4} M${x - 15} ${y + 3} L${x - 7} ${y + 2} M${x + 15} ${y + 3} L${x + 7} ${y + 2}`, w: 2, k: 'vurgu' }];

// Sağa giden yatay ok (çıkışa yönelme): kesik gövde ve düz uç; ok()'un sabit ucu yatayda doğru durmadığı için ayrı parça.
export const okSag = (x1, x2, y) => [
  { t: 'l', d: `M${x1} ${y} L${x2 - 3} ${y}`, w: 2, k: 'vurgu', kesik: true },
  { t: 'l', d: `M${x2 - 8} ${y - 6} L${x2} ${y} L${x2 - 8} ${y + 6}`, w: 2, k: 'vurgu' },
];

// ---- Durak 3 (Pazar) ek parçası (Görev 4 Dalga 1, 23 Kasım 2026): para ----
// Para: (x, y) ortalı altın sikke (koyu altın dış daire, açık iç daire, ortada iki kısa kabartma çizgisi; düzeltme 1: halka
// ya da simit gibi okunmasın); s ölçek (yarıçap 7s). Balonda para = fiyat (söylenen
// sayı kadar para); avuçta para = ödenen. Yeni çağrı; eski parçaların çizimi değişmez.
export const para = (x, y, s = 1) => [
  { t: 'c', x, y, r: +(7 * s).toFixed(2), f: '#D9A21E' },
  { t: 'c', x, y, r: +(4.4 * s).toFixed(2), f: '#F5D36A' },
  { t: 'l', d: `M${+(x - 1.6 * s).toFixed(2)} ${+(y - 2.4 * s).toFixed(2)} L${+(x - 1.6 * s).toFixed(2)} ${+(y + 2.4 * s).toFixed(2)} M${+(x + 1.6 * s).toFixed(2)} ${+(y - 2.4 * s).toFixed(2)} L${+(x + 1.6 * s).toFixed(2)} ${+(y + 2.4 * s).toFixed(2)}`, w: +(1.1 * s).toFixed(2), k: 'kahve' },
];
// n para yan yana, (x, y) ortalı; aralık 15s.
export const paraSira = (n, x, y, s = 1) => Array.from({ length: n }, (_, i) => para(+(x + (i - (n - 1) / 2) * 15 * s).toFixed(2), y, s)).flat();

// ---- Durak 5 (Resmî işler) parçaları (Görev 6 Dalga 1, 23 Kasım 2026): form ve harf kartı ----
// Form: (x, y) kâğıdın ortası; s=1'de 64x84 (x-32..x+32, y-42..y+42). Yazısız resmî kâğıt: üstte renkli başlık şeridi, ad satırı
// (solda baş ve omuz simgesi), numara satırı (solda küçük plaka simgesi), oda numarası satırı (solda küçük kapı simgesi; düzeltme
// turu 2), en altta imza çizgisi (solda küçük çarpı, kalın çizgi).
// ic (isteğe bağlı): renk (başlık şeridi; varsayılan 'su'), ad (harf dizisi; ad satırına el yazısıyla), adCizgi (ad satırı dolu ama
// okunmaz: kısa dalgalı çizgi), numara ve oda (rakam dizgesi; o satıra el yazısıyla), imza ('ad' | 'numara' | 'oda' | 'imza' ya da dizi:
// oraya imza yolu). Halka ve oklar çağıranın işidir: satırın dy'si FORM_SATIR'dadır (s=1). Sec seçeneğinde form(120, 60, 1.2)
// boy 120'ye sığar. Formdaki harf memurun el yazısıdır (kartsız); söylenen harf harfKarti'dır.
// Görev 6 düzeltme turu 2: üçüncü gerçek satır (oda numarası; solda küçük kapı simgesi). Satırlar 17 birim arayla.
export const FORM_SATIR = { ad: -20, numara: -3, oda: 14, imza: 31 };
export const form = (x, y, s = 1, ic = {}) => {
  const h = v => +(v * s).toFixed(2), X = v => +(x + v * s).toFixed(2), Y = v => +(y + v * s).toFixed(2);
  const { ad: adS, numara: nuS, oda: odS, imza: imS } = FORM_SATIR;
  const cizgiY = dy => Y(dy + 2);
  const imzaYolu = dy => ({ t: 'l', d: `M${X(-14)} ${Y(dy)} q${h(4)} ${h(-9)} ${h(7)} ${h(-1)} t${h(7)} ${h(-1)} t${h(7)} ${h(1)} t${h(8)} ${h(-2)}`, w: h(1.6), k: 'su' });
  const yer = [].concat(ic.imza || []);
  return [
    { t: 'r', x: X(-32), y: Y(-42), w: h(64), h: h(84), rx: h(3), f: 'kar' },
    { t: 'r', x: X(-32), y: Y(-42), w: h(64), h: h(10), rx: h(3), f: r(ic.renk || 'su') },
    // ad satırı: baş ve omuz simgesi, çizgi
    { t: 'c', x: X(-25), y: Y(adS - 3), r: h(2.6), f: 'gri' },
    { t: 'l', d: `M${X(-29)} ${Y(adS + 4)} Q${X(-25)} ${Y(adS - 1)} ${X(-21)} ${Y(adS + 4)}`, w: h(1.2), k: 'gri' },
    { t: 'l', d: `M${X(-17)} ${cizgiY(adS)} L${X(28)} ${cizgiY(adS)}`, w: h(1.1), k: 'gri' },
    // numara satırı: küçük plaka simgesi, çizgi
    { t: 'r', x: X(-29), y: Y(nuS - 4), w: h(8), h: h(6), rx: h(1), f: 'gri' },
    { t: 'l', d: `M${X(-17)} ${cizgiY(nuS)} L${X(28)} ${cizgiY(nuS)}`, w: h(1.1), k: 'gri' },
    // oda numarası satırı: küçük kapı simgesi (kahverengi, sarı topuz), çizgi
    { t: 'r', x: X(-28), y: Y(odS - 6), w: h(6), h: h(9), rx: h(1), f: 'agac' },
    { t: 'c', x: X(-23.6), y: Y(odS - 1.5), r: h(.9), f: 'sari' },
    { t: 'l', d: `M${X(-17)} ${cizgiY(odS)} L${X(28)} ${cizgiY(odS)}`, w: h(1.1), k: 'gri' },
    // imza çizgisi: küçük çarpı ve kalın koyu çizgi
    { t: 'l', d: `M${X(-29)} ${Y(imS - 5)} L${X(-24)} ${Y(imS)} M${X(-24)} ${Y(imS - 5)} L${X(-29)} ${Y(imS)}`, w: h(1.2), k: 'gri' },
    { t: 'l', d: `M${X(-17)} ${cizgiY(imS)} L${X(28)} ${cizgiY(imS)}`, w: h(1.8) },
    ...(ic.ad ? ic.ad.flatMap((c, i) => harfYazi(X(-12 + i * 8.6), Y(adS + 1), c, h(10))) : []),
    ...(ic.adCizgi ? [{ t: 'l', d: `M${X(-14)} ${Y(adS - 1)} q${h(5)} ${h(-5)} ${h(10)} 0 t${h(10)} 0 t${h(10)} 0`, w: h(1.2), k: 'gri' }] : []),
    ...(ic.numara ? [{ t: 'y', x: X(-6), y: Y(nuS + 1), m: String(ic.numara), b: h(10) }] : []),
    ...(ic.oda ? [{ t: 'y', x: X(-6), y: Y(odS + 1), m: String(ic.oda), b: h(10) }] : []),
    ...yer.map(k => imzaYolu(FORM_SATIR[k])),
  ];
};

// Harf yazısı: motorun el yazısı (t:'y'). Büyük I, Kalam yazısında tek dik çizgi olup l ya da 1 gibi okunduğu için (Görev 6
// gözle denetimi) üst ve alt çizgili (serifli) çizilir; renk motorun yazı rengi ('yazi'). (x, y) yazı tabanı, b yazı boyu.
export const harfYazi = (x, y, harf, b) => String(harf) === 'I' ? [{ t: 'l', d: `M${+(x - b * .17).toFixed(2)} ${+(y - b * .66).toFixed(2)} L${+(x + b * .17).toFixed(2)} ${+(y - b * .66).toFixed(2)} M${x} ${+(y - b * .66).toFixed(2)} L${x} ${+(y - b * .02).toFixed(2)} M${+(x - b * .17).toFixed(2)} ${+(y - b * .02).toFixed(2)} L${+(x + b * .17).toFixed(2)} ${+(y - b * .02).toFixed(2)}`, w: +(b * .09).toFixed(2), k: 'yazi' }]
  : [{ t: 'y', x, y, m: String(harf), b }];

// Harf kartı: (x, y) kartın ortası; s=1'de 26x32 açık mavi dik kart, altında ince gölge şeridi, ortada tek büyük harf (motorun el
// yazısı). Beyaz ve yatay plaka'dan (rakam) rengi ve oranıyla ayrışır. I noktasızdır (İngilizce).
export const harfKarti = (x, y, harf, s = 1) => {
  const h = v => +(v * s).toFixed(2);
  return [
    { t: 'r', x: +(x - 12 * s).toFixed(2), y: +(y - 14 * s).toFixed(2), w: h(26), h: h(32), rx: h(4), f: 'tas' },
    { t: 'r', x: +(x - 13 * s).toFixed(2), y: +(y - 16 * s).toFixed(2), w: h(26), h: h(32), rx: h(4), f: 'buz' },
    ...harfYazi(x, +(y + 9 * s).toFixed(2), harf, h(24)),
  ];
};
