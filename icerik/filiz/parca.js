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

// Kişi: solda, tezgâh ya da masa arkasında; rolü tezgâh/masa rengi ve tabela ayırt eder (kafe ve doktor ayrıca biçimle: raf, makine,
// önlük; önlük ve stetoskop).
// Kolu 'ileri' ise sağ alta, senin eline (SEN_EL) uzanır.
const KAFE_YESIL = '#3F6E63';  // kafe tezgâhı ve önlüğü (Görev 9)
const ROLLER = {
  pazarci: () => ({ ust: [{ t: 'p', d: 'M14 18 L106 18 L98 34 L22 34 Z', f: '#FF9EC7' }, { t: 'l', d: 'M24 34 L24 120 M96 34 L96 120', w: 1.6 }], on: [{ t: 'r', x: 8, y: 112, w: 104, h: 24, rx: 4, f: 'kraft' }] }),
  eczaci: () => ({ ust: [{ t: 'r', x: 46, y: 16, w: 28, h: 28, rx: 5, f: 'yesil' }, { t: 'l', d: 'M60 21 L60 39 M51 30 L69 30', w: 2.4, k: 'beyaz' }], on: [{ t: 'r', x: 8, y: 112, w: 104, h: 24, rx: 4, f: 'beyaz' }] }),
  memur: () => ({ ust: [{ t: 'r', x: 30, y: 22, w: 60, h: 40, rx: 4, f: 'buz' }], on: [{ t: 'r', x: 8, y: 112, w: 104, h: 24, rx: 4, f: 'gri' }] }),
  is: () => ({ ust: [{ t: 'l', d: 'M24 30 L96 30', w: 2.2, k: 'kahve' }], on: [{ t: 'r', x: 8, y: 112, w: 104, h: 24, rx: 4, f: 'kahve' }] }),
  // Havayolu görevlisi (Görev 4, düzeltme 1): bilet ve bagaj işleri pasaport memurundan ayrıldı. Mavi uçak tabelası ve mavi tezgâh.
  // Sesi 'memur' rolüdür (ev sahibi örneği gibi: ayrı rol yok, çerçeve ayırır).
  gorevli: () => ({ ust: [{ t: 'r', x: 22, y: 12, w: 76, h: 30, rx: 5, f: 'su' }, ...ucak(60, 27, 'kar', 1.5)], on: [{ t: 'r', x: 8, y: 112, w: 104, h: 24, rx: 4, f: 'su' }] }),
  // Doktor (Görev 7 Dalga 1, Durak 6 Sağlık): beyaz önlük (figürün gövdesi 'kar'; motor 'beyaz'ı pastel tona boyar), stetoskop ve
  // açık bej masa. Duvar sade; kırmızı haç ya da kırmızı hilal çizilmez (amblem koruma altında). Sesi 'eczaci' rolüdür (çerçeve ayırır).
  // fig: figüre eklenen alanlar; ek: figürün üstüne çizilen öğeler. İkisi isteğe bağlıdır; öteki roller vermez, çizimleri aynen kalır.
  doktor: () => ({ ust: [], on: [{ t: 'r', x: 8, y: 112, w: 104, h: 24, rx: 4, f: 'tas' }], fig: { f: 'kar' },
    ek: [{ t: 'l', d: 'M53 69 Q50 86 60 88 Q70 86 67 69', w: 1.6, k: '#4B4B52' }, { t: 'l', d: 'M60 88 L60 93', w: 1.6, k: '#4B4B52' },
      { t: 'c', x: 60, y: 96, r: 3.2, f: 'gri' }] }),
  // Kafe çalışanı (Görev 9 Dalga 1, Durak 8 Kafe): arkada üst rafta dört boş beyaz fincan, solda tezgâhta gri kahve makinesi; önde
  // koyu yeşil UZUN tezgâh (x 4…236: fincanlar senin önüne konabilsin); beyaz gömlek ve koyu yeşil önlük (askılı). pazarci'dan ayrılış:
  // tente ve direk yok, raf, fincan, makine ve önlük var (ayrım biçimle). Stetoskop yok (doktordan ayrılır). Sesi 'pazarci' rolüdür.
  // Saç parçada değil: durak dosyası figurSac ile ekler.
  kafe: () => ({ ust: [{ t: 'r', x: 8, y: 30, w: 104, h: 4, rx: 1, f: 'iz' }, ...[18, 34, 88, 104].flatMap(x => fincan(x, 30, 'bos', .4)),
    { t: 'r', x: 10, y: 76, w: 30, h: 8, rx: 2, f: '#6B6F78' }, { t: 'r', x: 12, y: 84, w: 26, h: 28, rx: 3, f: 'gri' },
    { t: 'r', x: 22, y: 92, w: 6, h: 5, rx: 1, f: '#6B6F78' }],
  on: [{ t: 'r', x: 4, y: 112, w: 232, h: 24, rx: 4, f: KAFE_YESIL }], fig: { f: 'kar' },
  ek: [{ t: 'r', x: 50, y: 76, w: 20, h: 24, rx: 3, f: KAFE_YESIL }, { t: 'l', d: 'M51 77 L47 69 M69 77 L73 69', w: 1.6, k: KAFE_YESIL }] }),
};
export const kisi = (rol, kol = 'ileri', yuz = 'mutlu') => {
  if (!ROLLER[rol]) throw new Error(`kisi: bilinmeyen rol '${rol}' (pazarci, eczaci, memur, is, gorevli, doktor, kafe)`);
  const { ust, on, fig, ek } = ROLLER[rol]();
  return [...ust, { t: 'k', x: 60, y: 112, s: 2, kol, yuz, ...(fig || {}) }, ...(ek || []), ...on];
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
// simge (Görev 10, yalnız ek): 'ucak' (varsayılan, Varış) ya da 'otobus' (Şehir: otobüs bileti; küçük mavi otobüs ve iki teker).
export const bilet = (x, y, f = 'kar', simge = 'ucak') => [
  { t: 'r', x: x - 32, y: y - 6, w: 64, h: 26, rx: 4, f: r(f) },
  ...(simge === 'otobus' ? [
    { t: 'r', x: x - 28, y: y + 1, w: 18, h: 10, rx: 2, f: 'su' }, { t: 'r', x: x - 26, y: y + 3, w: 4, h: 3, rx: .5, f: 'kar' },
    { t: 'r', x: x - 21, y: y + 3, w: 4, h: 3, rx: .5, f: 'kar' }, { t: 'c', x: x - 24, y: y + 12, r: 1.8, f: '#4B4B52' }, { t: 'c', x: x - 14, y: y + 12, r: 1.8, f: '#4B4B52' },
  ] : [
    { t: 'e', x: x - 19, y: y + 8, rx: 9, ry: 2.5, f: 'su' },
    { t: 'p', d: `M${x - 21} ${y + 8} L${x - 25} ${y} L${x - 19} ${y} L${x - 13} ${y + 8} Z M${x - 21} ${y + 8} L${x - 25} ${y + 16} L${x - 19} ${y + 16} L${x - 13} ${y + 8} Z`, f: 'su' },
  ]),
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
// Görev 11 (Durak 10 Gündelik hayat, 24 Kasım 2026), yalnız ek: ic.dakika 30 → yelkovan 6'da (aşağı), akrep hour ile hour+1'in tam
// ortasında (buçuk); ic.kalin → yelkovan uzun (26s) ve kalın, akrep daha kalın (küçük şıkta yelkovan seçilsin). ic verilmezse çizim aynı.
export const saat = (x, y, hour, s = 1, ic = {}) => {
  const h = v => +(v * s).toFixed(2), yarim = ic.dakika === 30, a = ((hour % 12) + (yarim ? .5 : 0)) * Math.PI / 6;
  const nokta = (rr, ac) => [+(x + rr * s * Math.sin(ac)).toFixed(2), +(y - rr * s * Math.cos(ac)).toFixed(2)];
  const [ex, ey] = nokta(15, a), [mx, my] = nokta(ic.kalin ? 26 : 20, yarim ? Math.PI : 0);
  return [
    { t: 'c', x, y, r: h(37), f: 'agac' },
    { t: 'c', x, y, r: h(33), f: 'kar' },
    ...Array.from({ length: 12 }, (_, i) => {
      const [tx, ty] = nokta(24, (i + 1) * Math.PI / 6);
      return { t: 'y', x: tx, y: +(ty + h(3)).toFixed(2), m: String(i + 1), b: h(8) };
    }),
    { t: 'l', d: `M${x} ${y} L${mx} ${my}`, w: ic.kalin ? 2.4 : 1.2, k: 'koyu' },
    { t: 'l', d: `M${x} ${y} L${ex} ${ey}`, w: ic.kalin ? 3.6 : 3, k: 'kirmizi' },
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

// ---- Durak 6 (Sağlık) parçaları (Görev 7 Dalga 1, 23 Kasım 2026): ilaç, yasak işareti, yatan kişi ----
// Kırmızı haç ve kırmızı hilal hiçbir parçada çizilmez (amblem koruma altında). Eczanenin yeşil haçı kisi('eczaci')'nın tabelasıdır.
const SISE = '#C8792B';
// Kapsül: (x, y) ortası, 14x7 (s=1); sol yarısı renkli, sağ yarısı beyaz.
const kapsul = (x, y, s, f) => {
  const h = v => +(v * s).toFixed(2), X = v => +(x + v * s).toFixed(2), Y = v => +(y + v * s).toFixed(2);
  return [
    { t: 'r', x: X(-7), y: Y(-3.5), w: h(14), h: h(7), rx: h(3.5), f: 'kar' },
    { t: 'r', x: X(-7), y: Y(-3.5), w: h(7.5), h: h(7), rx: h(3.5), f: r(f) },
  ];
};
// İlaç: (x, y) şeklin ortası; s ölçek. tur:
// - 'kutu': beyaz yatay kutu 44x28 (üst yüz ve sağ yan yüzle derinlikli; x-22..x+30, y-21..y+14), önde üstte renkli bant (renk;
//   null ise bant yok, üst yüz açık gri), solda iki gri çizgi, sağda küçük kapsül simgesi.
//   İş'in kutusundan (kraft, kare, dik beyaz bant) ayrışır.
// - 'sise': kehribar cam şişe 22x32, boyun ve beyaz kapak (y-26..y+20), beyaz etiket ve küçük kapsül. ic.acik: kapak şişenin
//   sağında yatar, boyun açık.
// - 'hap': tek kapsül (14x7; sol yarısı renk).
export const ilac = (x, y, tur = 'kutu', s = 1, renk = 'su', ic = {}) => {
  const h = v => +(v * s).toFixed(2), X = v => +(x + v * s).toFixed(2), Y = v => +(y + v * s).toFixed(2);
  if (tur === 'hap') return kapsul(x, y, s, renk || 'su');
  if (tur === 'sise') return [
    { t: 'r', x: X(-6), y: Y(-18), w: h(12), h: h(8), rx: h(1), f: SISE },
    { t: 'r', x: X(-11), y: Y(-12), w: h(22), h: h(32), rx: h(4), f: SISE },
    { t: 'r', x: X(-9), y: Y(-4), w: h(18), h: h(14), rx: h(2), f: 'kar' },
    ...kapsul(x, y + 3 * s, s * .7, renk || 'su'),
    ...(ic.acik
      ? [{ t: 'r', x: X(14), y: Y(11), w: h(16), h: h(9), rx: h(2), f: 'kar' }, { t: 'c', x, y: Y(-18), r: h(3.4), f: '#6B3F14' }]
      : [{ t: 'r', x: X(-8), y: Y(-26), w: h(16), h: h(9), rx: h(2), f: 'kar' }]),
  ];
  // Kutu derinliği (düzeltme, gözle denetim): üst yüz ve sağ yan yüz; düz kart ya da kimlik kartı gibi okunmasın.
  return [
    { t: 'p', d: `M${X(-22)} ${Y(-14)} L${X(-14)} ${Y(-21)} L${X(30)} ${Y(-21)} L${X(22)} ${Y(-14)} Z`, f: renk ? r(renk) : 'bulut' },
    { t: 'p', d: `M${X(22)} ${Y(-14)} L${X(30)} ${Y(-21)} L${X(30)} ${Y(7)} L${X(22)} ${Y(14)} Z`, f: 'bulut' },
    { t: 'r', x: X(-22), y: Y(-14), w: h(44), h: h(28), rx: h(2), f: 'kar' },
    ...(renk ? [{ t: 'r', x: X(-22), y: Y(-14), w: h(44), h: h(9), rx: h(2), f: r(renk) }] : []),
    { t: 'l', d: `M${X(-17)} ${Y(2)} L${X(-3)} ${Y(2)} M${X(-17)} ${Y(8)} L${X(-8)} ${Y(8)}`, w: h(1.1), k: 'gri' },
    ...kapsul(x + 11 * s, y + 4 * s, s * .9, renk || 'gri'),
  ];
};
// n kapsül yan yana, (x, y) ortalı; aralık 18s.
export const hapSira = (n, x, y, s = 1, renk = 'su') => Array.from({ length: n }, (_, i) => kapsul(+(x + (i - (n - 1) / 2) * 18 * s).toFixed(2), y, s, renk)).flat();

// Yasak işareti: (x, y) ortalı, yarıçap rr; içi boş kırmızı halka ve sol üstten sağ alta çapraz çizgi. ic (öğe dizisi, mutlak
// konum) halkanın altında görünür: yasaklanan şey. isaret('hayir') (dolu kırmızı daire, beyaz çarpı = "hayır") ile karışmaz.
export const yasak = (x, y, rr = 20, ic = []) => {
  const d = +(rr * .7).toFixed(2);
  return [...ic,
    { t: 'l', d: `M${x - rr} ${y} a${rr} ${rr} 0 1 0 ${2 * rr} 0 a${rr} ${rr} 0 1 0 ${-2 * rr} 0`, w: 3.4, k: 'kirmizi' },
    { t: 'l', d: `M${+(x - d).toFixed(2)} ${+(y - d).toFixed(2)} L${+(x + d).toFixed(2)} ${+(y + d).toFixed(2)}`, w: 3.4, k: 'kirmizi' },
  ];
};

// Yatakta yatan kişi: (x, y) yatağın ortası (yatak() ölçüsü, s=1'de ≈ 94x50). Başlık, şilte, ayaklar, yastıkta önden yuvarlak yüz,
// mavi yorgan altında kabarık gövde. ic: goz 'acik' | 'kapali' (varsayılan 'kapali'), yuz 'uzgun' | 'rahat' | 'mutlu' (varsayılan
// 'rahat'), ates (başın üstünde üç kırmızı dalga), ter (başın sağında mavi damla). Hasta: { goz:'acik', yuz:'uzgun', ates:true,
// ter:true }; uyku: varsayılan. "Z" harfi çizilmez.
const YUZ_RENK = '#4B2E5E';
export const yatanFigur = (x, y, s = 1, ic = {}) => {
  const h = v => +(v * s).toFixed(2), X = v => +(x + v * s).toFixed(2), Y = v => +(y + v * s).toFixed(2);
  const goz = ic.goz || 'kapali', yuz = ic.yuz || 'rahat';
  const bx = -28, by = -14;  // başın ortası (dx, dy)
  const agiz = {
    uzgun: `M${X(bx - 3.5)} ${Y(by + 5)} Q${X(bx)} ${Y(by + 2)} ${X(bx + 3.5)} ${Y(by + 5)}`,
    mutlu: `M${X(bx - 3.5)} ${Y(by + 3)} Q${X(bx)} ${Y(by + 6)} ${X(bx + 3.5)} ${Y(by + 3)}`,
    rahat: `M${X(bx - 2.5)} ${Y(by + 4)} L${X(bx + 2.5)} ${Y(by + 4)}`,
  };
  return [
    { t: 'r', x: X(-48), y: Y(-24), w: h(8), h: h(46), rx: h(3), f: 'agac' },
    { t: 'r', x: X(-42), y: Y(4), w: h(88), h: h(16), rx: h(4), f: 'kraft' },
    { t: 'r', x: X(-42), y: Y(20), w: h(6), h: h(6), rx: h(1), f: 'iz' },
    { t: 'r', x: X(40), y: Y(20), w: h(6), h: h(6), rx: h(1), f: 'iz' },
    { t: 'r', x: X(-41), y: Y(-8), w: h(26), h: h(13), rx: h(6), f: 'kar' },
    { t: 'c', x: X(bx), y: Y(by), r: h(9), f: 'ten' },
    { t: 'p', d: `M${X(-20)} ${Y(6)} Q${X(-18)} ${Y(-6)} ${X(-6)} ${Y(-8)} Q${X(12)} ${Y(-14)} ${X(28)} ${Y(-6)} Q${X(42)} ${Y(-4)} ${X(46)} ${Y(6)} Z`, f: 'su' },
    ...(goz === 'acik'
      ? [{ t: 'c', x: X(bx - 3.2), y: Y(by - 1.5), r: h(1.2), f: YUZ_RENK }, { t: 'c', x: X(bx + 3.2), y: Y(by - 1.5), r: h(1.2), f: YUZ_RENK }]
      : [{ t: 'l', d: `M${X(bx - 5)} ${Y(by - 2)} Q${X(bx - 3.2)} ${Y(by)} ${X(bx - 1.4)} ${Y(by - 2)} M${X(bx + 1.4)} ${Y(by - 2)} Q${X(bx + 3.2)} ${Y(by)} ${X(bx + 5)} ${Y(by - 2)}`, w: h(1), k: YUZ_RENK }]),
    { t: 'l', d: agiz[yuz] || agiz.rahat, w: h(1), k: YUZ_RENK },
    ...(ic.ates ? [{ t: 'l', d: [-6, 0, 6].map(dx => `M${X(bx + dx - 2)} ${Y(by - 17)} q${h(1.5)} ${h(-2.5)} 0 ${h(-5)}`).join(' '), w: h(1.4), k: 'kirmizi' }] : []),
    ...(ic.ter ? [{ t: 'p', d: `M${X(bx + 12)} ${Y(by - 6)} Q${X(bx + 15)} ${Y(by - 1)} ${X(bx + 12)} ${Y(by + 1)} Q${X(bx + 9)} ${Y(by - 1)} ${X(bx + 12)} ${Y(by - 6)} Z`, f: 'su' }] : []),
  ];
};

// ---- Durak 7 (İnsanlar) parçaları (Görev 8 Dalga 1, 23 Kasım 2026): saç ve sakal, ülke kartı ----
// Kadın ve erkek BİÇİMLE ayrışır, renkle değil (kontrolcü kararı): kadın omuza inen saç; erkek kısa saç ve kısa çene sakalı. Saç ve
// gövde rengi cinsiyetten bağımsız dağıtılır. Pembe-mavi kodlaması, etek, makyaj, kirpik ve küpe yok.
export const SAC_RENK = { kahve: '#6B4226', siyah: '#2F2A33', sari: '#E9C46A', kizil: '#B8532A', gri: '#B8BCC6' };
// Saç (ve sakal): motor figürünün ({ t:'k', x, y, s }) başına. (x, y, s) figürünkiyle aynıdır: baş merkezi (x, y-30s), yarıçap 8s,
// gözler y-31s, ağız y-27…-24.5s. Dizide figürden SONRA gelir (motor göz ve ağzı en üste çizer; saç yüzü örtmez).
// tur: 'kisa' (başı üstten saran kep; alın çizgisi gözlerin üstünde) | 'uzun' (kep ve yüzün dışından omuza inen iki perçem) |
// 'topuz' | 'atkuyrugu' (kadın; düzeltme turu 1). ic.gozluk: gözlük.
// ic.sakal: ağzın altından çeneyi saran hilal (ağız ve yanaklar açıkta). Erkek uzlaşımı 'kisa' + sakaldır.
// renk: SAC_RENK anahtarı ya da hex (palet anahtarı değil: motorun 'koyu'su mordur).
export const figurSac = (x, y, s = 1, tur = 'kisa', renk = 'kahve', ic = {}) => {
  const f = SAC_RENK[renk] || renk, P = (dx, dy) => `${+(x + dx * s).toFixed(2)} ${+(y + dy * s).toFixed(2)}`;
  const kep = { t: 'p', d: `M${P(-8.6, -29)} Q${P(-9.4, -39.6)} ${P(0, -39.8)} Q${P(9.4, -39.6)} ${P(8.6, -29)} Q${P(7, -34.5)} ${P(2, -35)} Q${P(-4, -35.2)} ${P(-8.6, -29)} Z`, f };
  const percem = k => ({ t: 'p', d: `M${P(-8.6 * k, -31)} Q${P(-11.5 * k, -24)} ${P(-10.5 * k, -17.5)} L${P(-6.8 * k, -18.5)} Q${P(-8 * k, -24)} ${P(-7.6 * k, -30)} Z`, f });
  const sakal = { t: 'p', d: `M${P(-7.8, -28)} Q${P(-7.5, -21.2)} ${P(0, -20.8)} Q${P(7.5, -21.2)} ${P(7.8, -28)} Q${P(5, -23.6)} ${P(0, -23.4)} Q${P(-5, -23.6)} ${P(-7.8, -28)} Z`, f };
  // Düzeltme turu 1 (Görev 8): iki kadın saç biçimi daha (kişiler saçla da ayrışsın): topuz (başın üstünde yuvarlak) ve at kuyruğu
  // (başın sağından omuza inen tek perçem). ic.gozluk: iki yuvarlak cam ve köprü (arkadaşın imzası); gözlerin üstüne çizilir.
  const topuz = { t: 'c', x: +(x + .5 * s).toFixed(2), y: +(y - 42.5 * s).toFixed(2), r: +(4.6 * s).toFixed(2), f };
  const kuyruk = { t: 'p', d: `M${P(6.5, -36)} Q${P(15, -36)} ${P(14, -26)} Q${P(13.5, -20)} ${P(11, -16.5)} Q${P(9.5, -22)} ${P(8.6, -29)} Z`, f };
  const gozluk = { t: 'l', d: `M${P(-5.6, -31)} a${(2.6 * s).toFixed(2)} ${(2.6 * s).toFixed(2)} 0 1 0 ${(5.2 * s).toFixed(2)} 0 a${(2.6 * s).toFixed(2)} ${(2.6 * s).toFixed(2)} 0 1 0 ${(-5.2 * s).toFixed(2)} 0 M${P(.4, -31)} a${(2.6 * s).toFixed(2)} ${(2.6 * s).toFixed(2)} 0 1 0 ${(5.2 * s).toFixed(2)} 0 a${(2.6 * s).toFixed(2)} ${(2.6 * s).toFixed(2)} 0 1 0 ${(-5.2 * s).toFixed(2)} 0 M${P(-.4, -31.4)} L${P(.4, -31.4)}`, w: +(.9 * s).toFixed(2), k: '#2F2A33' };
  return [...(tur === 'uzun' ? [percem(1), percem(-1)] : []), ...(tur === 'atkuyrugu' ? [kuyruk] : []), ...(tur === 'topuz' ? [topuz] : []), kep,
    ...(ic.sakal ? [sakal] : []), ...(ic.gozluk ? [gozluk] : [])];
};

// Ülke kartı: (x, y) kartın ortası; s=1'de 46x32 beyaz kart, sol üstte küçük mavi uçak (yer, yolculuk), ortada ülkenin İngilizce
// adının baş harfi (motorun el yazısı; I serifli). Bayrak, harita silueti ve ulusal simge yok (kontrolcü kararı 23 Kasım: ikisi de
// hassasiyet taşır). Ülke sesle söylenir, kart yalnız ayırt eder. harf null ya da ic.soru: harf yerine soru işareti ("nerelisin?").
// harfKarti'ndan (açık mavi dik kart, uçaksız) ve plaka'dan (rakam) ayrışır.
export const ulkeKarti = (x, y, harf, s = 1, ic = {}) => {
  const h = v => +(v * s).toFixed(2), X = v => +(x + v * s).toFixed(2), Y = v => +(y + v * s).toFixed(2);
  const soru = ic.soru || harf === null || harf === undefined;
  return [
    { t: 'r', x: X(-23), y: Y(-16), w: h(46), h: h(32), rx: h(4), f: 'kar' },
    ...ucak(X(-15), Y(-9), 'su', .5 * s),
    ...(soru ? [
      { t: 'l', d: `M${X(-4)} ${Y(-5)} Q${X(-4)} ${Y(-10)} ${X(1)} ${Y(-10)} Q${X(7)} ${Y(-10)} ${X(7)} ${Y(-5)} Q${X(7)} ${Y(-1)} ${X(1.5)} ${Y(1)} L${X(1.5)} ${Y(5)}`, w: h(2.4), k: 'vurgu' },
      { t: 'c', x: X(1.5), y: Y(10), r: h(1.8), f: 'vurgu' },
    ] : harfYazi(X(3), Y(10), harf, h(24))),
  ];
};

// ---- Durak 8 (Kafe) parçaları (Görev 9 Dalga 1, 23 Kasım 2026): fincan, bardak, ekmek, dilim, buhar, kalp ----
// Kahve ile çay yalnız renkle ayrılmaz: kahvede açık kahverengi köpük halkası, çayda fincanın solundan dışarı sarkan ip ve beyaz
// etiket (çay poşeti). Su ayrı biçimdir: kulpsuz, uzun, düz bardak (tabaksız). Büyük ve küçük: tabak her boyda AYNI kalır, yalnız
// fincan büyür ya da küçülür (tek fincanlı karede de boy tabağa göre okunur). Sıcak: üç dalgalı gri buhar çizgisi.
const r2k = v => +v.toFixed(2);
const FINCAN_BOY = { normal: 1, buyuk: 1.4, kucuk: .65 };
const FINCAN_IC = { bos: '#EDE8F0', kahve: '#4A2C1A', cay: '#C8651B' };
// Döndürülmüş elips yolu (motor elipsi döndürmez): merkez (cx, cy), yarıçaplar, derece.
const elipsYol = (cx, cy, rx, ry, der = 0) => {
  const a = der * Math.PI / 180, dx = rx * Math.cos(a), dy = rx * Math.sin(a);
  return `M${r2k(cx - dx)} ${r2k(cy - dy)} A${r2k(rx)} ${r2k(ry)} ${der} 1 0 ${r2k(cx + dx)} ${r2k(cy + dy)} A${r2k(rx)} ${r2k(ry)} ${der} 1 0 ${r2k(cx - dx)} ${r2k(cy - dy)} Z`;
};
// Fincan: (x, y) tabağın ortası; tabak rx 24s. tur 'bos' | 'kahve' | 'cay'. ic.boy 'normal' | 'buyuk' | 'kucuk' (yalnız fincan
// ölçeklenir); ic.renk fincanın rengi (varsayılan beyaz 'kar'); ic.buhar; ic.egik: tabaksız, sola eğik (true 35°, ya da negatif derece;
// içmek; (x, y) fincanın taban ortası). Normal boyda fincan y-25.5s'e kadar çıkar; büyük boyda y-35s; sec seçeneğinde y ≈ 90 ve s ≤ 1.8 yeter.
export const fincan = (x, y, tur = 'bos', s = 1, ic = {}) => {
  const c = s * (FINCAN_BOY[ic.boy] || 1), der = ic.egik === true ? -35 : (+ic.egik || 0), a = der * Math.PI / 180;
  const ox = x, oy = ic.egik ? y : y - 1.5 * s;  // gövdenin tabanı
  const P = (dx, dy) => { const X = dx * c, Y = dy * c; return `${r2k(ox + X * Math.cos(a) - Y * Math.sin(a))} ${r2k(oy + X * Math.sin(a) + Y * Math.cos(a))}`; };
  const N = (dx, dy) => P(dx, dy).split(' ').map(Number);
  const renk = r(ic.renk || 'kar');
  const [mx, my] = N(0, -24);
  const o = [];
  if (!ic.egik) o.push({ t: 'e', x, y: r2k(y), rx: r2k(24 * s), ry: r2k(4.5 * s), f: 'kar' });
  o.push({ t: 'p', d: `M${P(14, -20)} C${P(27, -22)} ${P(26, -4)} ${P(11.5, -6)} L${P(12, -9.5)} C${P(21, -9)} ${P(21, -17)} ${P(14.4, -16)} Z`, f: renk });
  o.push({ t: 'p', d: `M${P(-15, -24)} Q${P(-14, -4)} ${P(-10, 0)} L${P(10, 0)} Q${P(14, -4)} ${P(15, -24)} Z`, f: renk });
  o.push({ t: 'p', d: elipsYol(mx, my, 15 * c, 3.6 * c, der), f: FINCAN_IC[tur] || FINCAN_IC.bos });
  if (tur === 'kahve') o.push({ t: 'l', d: elipsYol(mx, my, 8.5 * c, 1.9 * c, der), w: r2k(1.8 * c), k: '#C89B6D' });
  if (tur === 'cay') {
    o.push({ t: 'l', d: `M${P(-6, -24.5)} Q${P(-14, -28)} ${P(-15.5, -24.5)} Q${P(-17.5, -18)} ${P(-18, -12)}`, w: r2k(1.1 * c), k: '#8E97A5' });
    o.push({ t: 'p', d: `M${P(-22, -12)} L${P(-14, -12)} L${P(-14, -3)} L${P(-22, -3)} Z`, f: 'kar' });
    o.push({ t: 'c', x: N(-18, -9.5)[0], y: N(-18, -9.5)[1], r: r2k(1.2 * c), f: '#C8651B' });
  }
  if (ic.buhar && !ic.egik) o.push(...buhar(x, r2k(my - 5 * c), c));
  return o;
};
// Su bardağı: (x, y) tabanın ortası; kulpsuz, uzun (40s), düz; alt %75 su. ic.bos: su yok; ic.yarim: su yarıya kadar (Görev 9 tur 2);
// ic.boy fincandaki gibi.
export const bardak = (x, y, s = 1, ic = {}) => {
  const c = s * (FINCAN_BOY[ic.boy] || 1), X = v => r2k(x + v * c), Y = v => r2k(y + v * c);
  return [
    { t: 'p', d: `M${X(-11)} ${Y(-40)} L${X(11)} ${Y(-40)} L${X(9)} ${Y(0)} L${X(-9)} ${Y(0)} Z`, f: '#EAF8FF' },
    ...(ic.bos ? [] : ic.yarim ? [{ t: 'p', d: `M${X(-9.9)} ${Y(-18)} L${X(9.9)} ${Y(-18)} L${X(9)} ${Y(0)} L${X(-9)} ${Y(0)} Z`, f: 'buz' }]
      : [{ t: 'p', d: `M${X(-10.5)} ${Y(-30)} L${X(10.5)} ${Y(-30)} L${X(9)} ${Y(0)} L${X(-9)} ${Y(0)} Z`, f: 'buz' }]),
    { t: 'e', x, y: Y(-40), rx: r2k(11 * c), ry: r2k(2.4 * c), f: '#EAF8FF' },
    { t: 'l', d: `M${X(-6)} ${Y(-35)} L${X(-5)} ${Y(-6)} M${X(-2)} ${Y(-35)} L${X(-1.6)} ${Y(-26)}`, w: r2k(1.6 * c), k: 'kar' },
  ];
};
// Ekmek dilimi: (x, y) dilimin taban ortası; s=1'de 13x17, üstü yuvarlak, kahverengi kabuk. ic.isirik: sağ üstte ısırık oyuğu ve
// iki kırıntı (yemek).
export const dilim = (x, y, s = 1, ic = {}) => {
  const X = v => r2k(x + v * s), Y = v => r2k(y + v * s), a = -6.5;
  const d = ic.isirik
    ? `M${X(a)} ${Y(-1)} L${X(a)} ${Y(-11)} Q${X(a)} ${Y(-17)} ${X(a + 6.5)} ${Y(-17)} L${X(a + 8)} ${Y(-17)} A${r2k(5 * s)} ${r2k(4.5 * s)} 0 0 0 ${X(a + 13)} ${Y(-12.5)} L${X(a + 13)} ${Y(-1)} Z`
    : `M${X(a)} ${Y(-1)} L${X(a)} ${Y(-11)} Q${X(a)} ${Y(-17)} ${X(a + 6.5)} ${Y(-17)} Q${X(a + 13)} ${Y(-17)} ${X(a + 13)} ${Y(-11)} L${X(a + 13)} ${Y(-1)} Z`;
  return [{ t: 'p', d, f: '#F3DDB0' }, { t: 'l', d, w: r2k(2.2 * s), k: '#B07A3E' },
    ...(ic.isirik ? [{ t: 'c', x: X(10), y: Y(-15), r: r2k(1 * s), f: '#B07A3E' }, { t: 'c', x: X(12), y: Y(-10), r: r2k(.8 * s), f: '#B07A3E' }] : [])];
};
// Tabakta ekmek: (x, y) tabağın ortası (rx 34s). ic.somun (varsayılan true): solda somun (bej, üstte üç çentik); ic.dilim (varsayılan
// 2): dik dilimler; somunsuz çağrıda dilimler tabağın ortasında (en çok 4). ic.tabak false: tabaksız (Görev 10: kucakta somun).
export const ekmek = (x, y, s = 1, ic = {}) => {
  const somun = ic.somun !== false, n = ic.dilim ?? 2, X = v => r2k(x + v * s), Y = v => r2k(y + v * s);
  const lx = n ? -12 : 0, ilk = somun ? 9 : -(n - 1) * 7.5;
  return [
    ...(ic.tabak === false ? [] : [{ t: 'e', x, y: r2k(y), rx: r2k(34 * s), ry: r2k(6.5 * s), f: 'kar' }]),
    ...(somun ? [{ t: 'p', d: `M${X(lx - 17)} ${Y(-1)} Q${X(lx - 18)} ${Y(-20)} ${X(lx)} ${Y(-20)} Q${X(lx + 18)} ${Y(-20)} ${X(lx + 17)} ${Y(-1)} Z`, f: 'tas' },
      { t: 'l', d: [-8, 0, 8].map(dx => `M${X(lx + dx - 3)} ${Y(-17)} L${X(lx + dx + 2)} ${Y(-12)}`).join(' '), w: r2k(1.3 * s), k: 'iz' }] : []),
    ...Array.from({ length: n }, (_, i) => dilim(X(ilk + i * 15), Y(-.5), s)).flat(),
  ];
};
// Buhar: (x, y) tabanı; üç dikey S çizgisi (x-7s, x, x+7s), gri. salla (yay) ve carpma (ışınsal kısa çizgi) ile karışmaz.
export const buhar = (x, y, s = 1) => [{ t: 'l', d: [-7, 0, 7].map(dx => {
  const b = dx === 0 ? 2 : 0, X = v => r2k(x + (dx + v) * s), Y = v => r2k(y - (b + v) * s);
  return `M${X(0)} ${Y(0)} Q${X(-4)} ${Y(6)} ${X(0)} ${Y(12)} Q${X(4)} ${Y(18)} ${X(0)} ${Y(24)}`;
}).join(' '), w: r2k(1.8 * Math.max(s, .6)), k: '#B8BCC6' }];
// Kırmızı kalp ("like"; İnsanlar'ın durak yardımcısının aynısı, Görev 9'da parçaya alındı): (x, y) ortası, s=1'de ≈ 20x18.
export const kalp = (x, y, s = 1) => {
  const K = (dx, dy) => `${r2k(x + dx * s)} ${r2k(y + dy * s)}`;
  return [{ t: 'p', d: `M${K(0, 8)} C${K(-12, 0)} ${K(-10, -11)} ${K(0, -5)} C${K(10, -11)} ${K(12, 0)} ${K(0, 8)} Z`, f: 'kirmizi' }];
};

// ---- Durak 9 (Şehir) parçaları (Görev 10 Dalga 1, 24 Kasım 2026): sokak, lamba, otobüs, taksi, tren, istasyon, dükkân, banka ----
// (x, y) her parçada ZEMİN ÇİZGİSİNİN ORTASIDIR (tekerlerin ya da binanın alt kenarı): aynı y'ye konan parçalar aynı kaldırımda durur.
// Araçlar ve binalar biçimle ayrışır, yalnız renkle değil: otobüs uzun, dört kare pencereli, hat tabelalı; taksi araba silueti, tavanda
// beyaz tabela ve yan gövdede dama şeridi (Pazar'ın arabasından ayrılır); tren rayda, iki vagonlu, yuvarlak burunlu. Dükkân çizgili
// tente ve vitrin; banka üçgen alınlıkta sikke ve sütunlar; istasyon kemerli cam giriş ve tren simgeli tabela.
// Motor çizgileri (t:'l') bütün dolguların üstüne koyar: şerit, direk, ray ve dama bu yüzden DOLGU dikdörtgendir.
const KALDIRIM = '#E6DFD3', BORDUR = '#B9B2A6', ASFALT = '#A7ADB7', DEMIR = '#7C8290', KOYU = '#3A3540';
const dk = (x, y, w, h, f, rx = 0) => ({ t: 'r', x: r2k(x), y: r2k(y), w: r2k(w), h: r2k(h), rx: r2k(rx), f });
// Sokak lambası: (x, y) direğin dibi; gri direk (62s), sola uzanan kol ve sarı fener.
export const lamba = (x, y, s = 1) => [
  dk(x - 2 * s, y - 62 * s, 4 * s, 62 * s, DEMIR, s), dk(x - 14 * s, y - 64 * s, 16 * s, 3 * s, DEMIR, 1.5 * s),
  { t: 'e', x: r2k(x - 13 * s), y: r2k(y - 59 * s), rx: r2k(5 * s), ry: r2k(3.5 * s), f: 'sari' },
];
// Sokak: kaldırım y…y+10, bordür, asfalt y+13…alt (ic.alt, varsayılan 180), ortada beyaz kesik şerit (ic.serit false ise yok).
// ic.lamba: lamba x'leri (kaldırımda). ic.x0, ic.x1: yatay sınırlar (varsayılan 0…240).
export const sokak = (y = 118, ic = {}) => {
  const alt = ic.alt ?? 180, x0 = ic.x0 ?? 0, x1 = ic.x1 ?? 240, w = x1 - x0, sy = y + 13 + Math.min(16, (alt - y - 13) / 2);
  return [
    dk(x0, y, w, 10, KALDIRIM), dk(x0, y + 10, w, 3, BORDUR), dk(x0, y + 13, w, Math.max(0, alt - y - 13), ASFALT),
    ...(ic.serit === false || alt - y < 30 ? [] : Array.from({ length: Math.ceil(w / 30) }, (_, i) => dk(x0 + 6 + i * 30, sy, 14, 3, 'kar'))),
    ...(ic.lamba || []).flatMap(lx => lamba(lx, y + 4)),
  ];
};
// Otobüs: (x, y) tekerlerin altı. Gövde 100s × 44s (ic.renk, varsayılan 'su'); ön ic.yon 1 sağda (varsayılan), -1 solda. Ön cam,
// dört kare yan pencere, iki panelli kapı, iki büyük teker; ön üstte koyu hat tabelası ve içinde plaka (ic.hat; yoksa boş tabela).
// ic.sofor: ön camda küçük baş (saçı çağıran ekler).
export const otobus = (x, y, s = 1, ic = {}) => {
  const yn = ic.yon === -1 ? -1 : 1, X = v => x + v * s * yn, Y = v => y + v * s;
  const R = (x1, y1, w, h, f, rx = 0) => dk(yn === 1 ? X(x1) : X(x1) - w * s, Y(y1), w * s, h * s, f, rx * s);
  return [
    R(22, -66, 26, 15, KOYU, 2),
    R(-50, -54, 100, 44, r(ic.renk || 'su'), 7),
    R(38, -48, 10, 24, 'buz', 2),
    ...[-44, -29, -14, 1].map(px => R(px, -48, 12, 13, 'buz', 2)),
    R(19, -46, 15, 34, 'buz', 1), R(26, -46, 1.2, 34, KOYU),
    R(-50, -22, 100, 3, 'kar'),
    ...[-30, 30].flatMap(px => [{ t: 'c', x: r2k(X(px)), y: r2k(Y(-8)), r: r2k(8 * s), f: '#4B4B52' }, { t: 'c', x: r2k(X(px)), y: r2k(Y(-8)), r: r2k(3 * s), f: 'gri' }]),
    ...(ic.hat === undefined || ic.hat === null ? [R(26, -63, 18, 9, 'kar', 1.5)] : plaka(r2k(X(35)), r2k(Y(-58.5)), String(ic.hat), r2k(.34 * s))),
    ...(ic.sofor ? [{ t: 'c', x: r2k(X(43)), y: r2k(Y(-38)), r: r2k(4 * s), f: 'ten' }] : []),
  ];
};
// Taksi: (x, y) tekerlerin altı. Sarı gövde 80s × 18s, kabin ve iki yan cam; tavanda beyaz tabela (sağda); gövdede iki sıra dama.
// Arka yan camın ortası (x - 12s, y - 33s); tavanın boş yeri (x - 6s, y - 42s): ic.icinde ve ic.tavan öğe dizileri çağıranın verdiği
// mutlak konumla bu yerlere çizilir (içinde: camın üstüne, tavan: tavanın üstüne). ic.yolcu: arka camda baş (saçı çağıran ekler).
// ic.hiz: arkada (solda) üç hız çizgisi. ic.bagaj (Görev 10 tur 1): tavanda iki ayaklı gri bagaj rafı (tavana konan çanta inandırıcı dursun).
export const taksi = (x, y, s = 1, ic = {}) => {
  const X = v => x + v * s, Y = v => y + v * s, P = (dx, dy) => `${r2k(X(dx))} ${r2k(Y(dy))}`;
  return [
    ...(ic.hiz ? [-30, -22, -14].map(py => dk(X(-58), Y(py), 12 * s, 2.4 * s, DEMIR, 1)) : []),
    ...(ic.bagaj ? [dk(X(-19), Y(-46), 21 * s, 2.4 * s, DEMIR, 1 * s), dk(X(-17), Y(-44), 2 * s, 3 * s, DEMIR), dk(X(-1), Y(-44), 2 * s, 3 * s, DEMIR)] : []),
    dk(X(4), Y(-49), 13 * s, 7 * s, 'kar', 1.5 * s),
    { t: 'p', d: `M${P(-27, -25)} L${P(-19, -42)} L${P(18, -42)} L${P(29, -25)} Z`, f: 'sari' },
    { t: 'p', d: `M${P(-22, -26)} L${P(-16, -38.5)} L${P(-2, -38.5)} L${P(-2, -26)} Z`, f: 'buz' },
    { t: 'p', d: `M${P(2, -26)} L${P(2, -38.5)} L${P(16, -38.5)} L${P(24, -26)} Z`, f: 'buz' },
    ...(ic.yolcu ? [{ t: 'c', x: r2k(X(-10)), y: r2k(Y(-31)), r: r2k(4.6 * s), f: 'ten' }] : []),
    ...(ic.icinde || []),
    dk(X(-40), Y(-26), 80 * s, 18 * s, 'sari', 6 * s),
    ...Array.from({ length: 20 }, (_, i) => dk(X(-30 + (i % 10) * 6), Y(-20 + Math.floor(i / 10) * 3), 6 * s, 3 * s, (i + Math.floor(i / 10)) % 2 ? 'kar' : KOYU)),
    dk(X(36), Y(-22), 4 * s, 4 * s, 'kar', 1 * s),
    ...[-24, 24].flatMap(px => [{ t: 'c', x: r2k(X(px)), y: r2k(Y(-7)), r: r2k(7 * s), f: '#4B4B52' }, { t: 'c', x: r2k(X(px)), y: r2k(Y(-7)), r: r2k(2.6 * s), f: 'gri' }]),
    ...(ic.tavan || []),
  ];
};
// Tren: (x, y) rayın ortası. İki koyu ray şeridi ve kraft traversler (ic.ray: rayın yarı uzunluğu, varsayılan 110s); üstte birbirine
// bağlı iki vagon (beyaz, kırmızı şerit, gri çatı), öndeki (sağdaki) vagonun burnu yuvarlak; her vagonda dört küçük teker.
// ic.vagon 1: yalnız öndeki vagon (ortalanmış).
export const tren = (x, y, s = 1, ic = {}) => {
  const tek = ic.vagon === 1, ox = tek ? -38 : 0, X = v => x + (v + ox) * s, Y = v => y + v * s, P = (dx, dy) => `${r2k(X(dx))} ${r2k(Y(dy))}`;
  const ry = (ic.ray ?? 110) * s;
  const vagon = x0 => [dk(X(x0), Y(-47), 70 * s, 4 * s, 'gri', 2 * s), dk(X(x0), Y(-44), 70 * s, 32 * s, 'kar', 4 * s),
    ...[6, 22, 38, 54].map(px => dk(X(x0 + px), Y(-38), 11 * s, 10 * s, 'buz', 1.5 * s))];
  return [
    ...Array.from({ length: Math.ceil(2 * ry / (12 * s)) }, (_, i) => dk(x - ry + i * 12 * s, Y(-3), 5 * s, 5 * s, 'kraft')),
    dk(x - ry, Y(-4), 2 * ry, 2.4 * s, '#5A5560'),
    ...(tek ? [] : [...vagon(-73), dk(X(-73), Y(-20), 70 * s, 4 * s, 'kirmizi'), dk(X(-4), Y(-23), 8 * s, 5 * s, KOYU)]),
    dk(X(3), Y(-47), 55 * s, 4 * s, 'gri', 2 * s),
    { t: 'p', d: `M${P(3, -12)} L${P(3, -44)} L${P(56, -44)} Q${P(74, -44)} ${P(74, -26)} L${P(74, -12)} Z`, f: 'kar' },
    ...[8, 24, 40].map(px => dk(X(px), Y(-38), 11 * s, 10 * s, 'buz', 1.5 * s)),
    { t: 'p', d: `M${P(57, -40)} Q${P(69, -40)} ${P(70, -29)} L${P(57, -29)} Z`, f: 'buz' },
    dk(X(3), Y(-20), 71 * s, 4 * s, 'kirmizi'),
    ...(tek ? [] : [-66, -54, -22, -10]).concat([10, 22, 50, 62]).map(px => ({ t: 'c', x: r2k(X(px)), y: r2k(Y(-8)), r: r2k(4 * s), f: '#4B4B52' })),
  ];
};
// İstasyon: (x, y) cephenin alt ortası. 110s × 72s açık taş cephe, koyu çatı kenarı, ortada büyük kemerli cam giriş (iki kayıt), iki yan
// pencere, kemerin üstünde beyaz tabela ve içinde küçük tren simgesi (tek vagon, burun ve iki teker).
export const istasyon = (x, y, s = 1) => {
  const X = v => x + v * s, Y = v => y + v * s, P = (dx, dy) => `${r2k(X(dx))} ${r2k(Y(dy))}`;
  return [
    dk(X(-55), Y(-72), 110 * s, 72 * s, '#E7D9C4'), dk(X(-58), Y(-77), 116 * s, 6 * s, '#8B7F70', 1.5 * s),
    { t: 'p', d: `M${P(-24, 0)} L${P(-24, -34)} Q${P(-24, -56)} ${P(0, -56)} Q${P(24, -56)} ${P(24, -34)} L${P(24, 0)} Z`, f: 'buz' },
    dk(X(-9), Y(-54), 2 * s, 54 * s, '#8B7F70'), dk(X(7), Y(-54), 2 * s, 54 * s, '#8B7F70'),
    dk(X(-48), Y(-50), 14 * s, 16 * s, 'buz', 1.5 * s), dk(X(34), Y(-50), 14 * s, 16 * s, 'buz', 1.5 * s),
    dk(X(-18), Y(-70), 36 * s, 12 * s, 'kar', 2 * s),
    { t: 'p', d: `M${P(-10, -61)} L${P(-10, -67)} L${P(6, -67)} Q${P(10, -67)} ${P(10, -63)} L${P(10, -61)} Z`, f: 'kirmizi' },
    { t: 'c', x: r2k(X(-6)), y: r2k(Y(-60.5)), r: r2k(1.6 * s), f: KOYU }, { t: 'c', x: r2k(X(6)), y: r2k(Y(-60.5)), r: r2k(1.6 * s), f: KOYU },
  ];
};
// Dükkân: (x, y) cephenin alt ortası. 70s × 62s açık cephe, üstte yeşil-beyaz çizgili tente (alt kenarı dalgalı), solda vitrin (buz) ve
// içinde iki küçük gömlek (ic.mal false ise boş), sağda cam kapı ve kulp. ic.vitrin: vitrine çağıranın öğe dizisi (vitrin ortası
// (x - 14s, y - 22s)). pazarci'nın tentesinden (pembe yamuk, direkler) duvar, vitrin ve kapıyla ayrılır.
export const dukkan = (x, y, s = 1, ic = {}) => {
  const X = v => x + v * s, Y = v => y + v * s, P = (dx, dy) => `${r2k(X(dx))} ${r2k(Y(dy))}`;
  const gom = (cx, cy, f) => ({ t: 'p', d: `M${P(cx - 4, cy - 7)} L${P(cx - 9, cy - 4)} L${P(cx - 7, cy)} L${P(cx - 5, cy - 1.5)} L${P(cx - 5, cy + 7)} L${P(cx + 5, cy + 7)} L${P(cx + 5, cy - 1.5)} L${P(cx + 7, cy)} L${P(cx + 9, cy - 4)} L${P(cx + 4, cy - 7)} Q${P(cx, cy - 4.5)} ${P(cx - 4, cy - 7)} Z`, f });
  return [
    dk(X(-35), Y(-62), 70 * s, 62 * s, '#FCEBD5'), dk(X(-37), Y(-65), 74 * s, 4 * s, 'iz', 1 * s),
    dk(X(-31), Y(-38), 34 * s, 32 * s, 'buz', 1.5 * s),
    ...(ic.mal === false ? [] : [gom(-22, -22, 'su'), gom(-6, -22, 'turuncu')]),
    ...(ic.vitrin || []),
    dk(X(8), Y(-40), 20 * s, 40 * s, 'buz', 1.5 * s), { t: 'c', x: r2k(X(12)), y: r2k(Y(-20)), r: r2k(1.6 * s), f: KOYU },
    ...Array.from({ length: 6 }, (_, i) => dk(X(-37 + i * 74 / 6), Y(-58), 74 / 6 * s, 12 * s, i % 2 ? 'kar' : 'yesil')),
    ...Array.from({ length: 6 }, (_, i) => ({ t: 'c', x: r2k(X(-37 + (i + .5) * 74 / 6)), y: r2k(Y(-46)), r: r2k(74 / 12 * s), f: i % 2 ? 'kar' : 'yesil' })),
  ];
};
// Banka: (x, y) cephenin alt ortası. 80s × 70s gri taş cephe, üçgen alınlık ve içinde sarı sikke (para), dört beyaz sütun, ortada koyu
// kapı, altta iki basamak.
export const bankaCephe = (x, y, s = 1) => {
  const X = v => x + v * s, Y = v => y + v * s, P = (dx, dy) => `${r2k(X(dx))} ${r2k(Y(dy))}`;
  return [
    dk(X(-40), Y(-56), 80 * s, 56 * s, '#D5D9E0'),
    { t: 'p', d: `M${P(-45, -55)} L${P(0, -78)} L${P(45, -55)} Z`, f: '#C4C9D2' },
    ...para(r2k(X(0)), r2k(Y(-63)), r2k(.85 * s)),
    dk(X(-43), Y(-56), 86 * s, 6 * s, '#C4C9D2'),
    ...[-31, -18, 11, 24].map(px => dk(X(px), Y(-50), 7 * s, 42 * s, 'kar')),
    dk(X(-8), Y(-34), 16 * s, 26 * s, '#4B4B5A', 1.5 * s),
    dk(X(-40), Y(-8), 80 * s, 4 * s, 'tas'), dk(X(-44), Y(-4), 88 * s, 4 * s, 'tas'),
  ];
};

// ---- Durak 10 (Gündelik hayat) parçaları (Görev 11 Dalga 1, 24 Kasım 2026): güneş, ay, haftalık takvim, ev cephesi ----
// Sabah ve akşam biçimle ayrışır: sabah = ufukta DOĞAN yarım güneş (tepede güneş çizilmez); akşam = hilal ay ve iki yıldız.
// Takvim: pazartesiden başlayan yedi sütun; halka = sözü edilen gün, kırmızı raptiye = bugün, sayfa çerçevesi = hafta.
const GUNES = '#F4A63A', AY_SARI = '#F6E7A6';
// Güneş: (x, y) ufuk çizgisinin ortası; yarım daire (r 14s) ve üstünde yelpaze gibi beş kısa ışın.
export const gunes = (x, y, s = 1) => {
  const P = (dx, dy) => `${r2k(x + dx * s)} ${r2k(y + dy * s)}`;
  const isin = [30, 60, 90, 120, 150].map(d => { const a = d * Math.PI / 180, c = Math.cos(a), n = Math.sin(a);
    return `M${P(18 * c, -18 * n)} L${P(25 * c, -25 * n)}`; }).join(' ');
  return [{ t: 'p', d: `M${P(-14, 0)} A${r2k(14 * s)} ${r2k(14 * s)} 0 0 1 ${P(14, 0)} Z`, f: GUNES },
    { t: 'l', d: isin, w: r2k(Math.max(1.4, 2 * s)), k: GUNES }];
};
// Ay: (x, y) hilalin dış dairesinin ortası (r 12s); hilal sağa açık (yol: iki yay, gökyüzü rengine bağlı değil); sağ üstte iki küçük
// dört köşeli yıldız.
export const ay = (x, y, s = 1) => {
  const P = (dx, dy) => `${r2k(x + dx * s)} ${r2k(y + dy * s)}`, R = r2k(12 * s);
  const yildiz = (cx, cy, k) => ({ t: 'p', d: `M${P(cx, cy - 4 * k)} L${P(cx + 1.2 * k, cy - 1.2 * k)} L${P(cx + 4 * k, cy)} L${P(cx + 1.2 * k, cy + 1.2 * k)} L${P(cx, cy + 4 * k)} L${P(cx - 1.2 * k, cy + 1.2 * k)} L${P(cx - 4 * k, cy)} L${P(cx - 1.2 * k, cy - 1.2 * k)} Z`, f: AY_SARI });
  return [{ t: 'p', d: `M${P(3, -11.62)} A${R} ${R} 0 1 0 ${P(3, 11.62)} A${R} ${R} 0 0 1 ${P(3, -11.62)} Z`, f: AY_SARI },
    yildiz(16, -12, 1), yildiz(22, 2, .7)];
};
// Haftalık takvim: (x, y) sayfanın alt ortası; s=1'de 140x76 beyaz kâğıt, üstte koyu şerit (10s) ve iki halka; altında yedi eşit sütun
// (pazartesi → pazar; 6. ve 7. sütun gri; yazı ve rakam yok). Sütun ortası: takvimSutun(x, s, i) (i 1..7), y - 33s.
// ic.halka: sütun no ya da dizi (vurgu çerçeve: sözü edilen gün); ic.raptiye: sütun no (şeridin üstünde kırmızı raptiye: bugün);
// ic.ok [a, b]: a'nın tepesinden b'ye kesik ok; ic.simge: { [sütun]: tur } ya da { hepsi: tur } (tur 'kahve' | 'cay' | 'su' | 'cekic' |
// 'ay' | 'gunes'); ic.isaret: { [sütun]: 'evet' | 'hayir' }; ic.cerceve: bütün sayfayı saran vurgu çerçevesi (hafta).
const TK = { w: 140, h: 76, serit: 10 };
export const takvimSutun = (x, s, i) => r2k(x + (-TK.w / 2 + 4 + (i - .5) * (TK.w - 8) / 7) * s);
export const takvim = (x, y, s = 1, ic = {}) => {
  const X = v => x + v * s, Y = v => y + v * s, cw = (TK.w - 8) / 7, cx = i => takvimSutun(x, s, i), cy = r2k(Y(-33));
  const dizi = v => v === undefined || v === null ? [] : Array.isArray(v) ? v : [v];
  const SIMGE = {
    kahve: (i, k) => fincan(cx(i), r2k(cy + 10 * s), 'kahve', r2k(.36 * k)),
    cay: (i, k) => fincan(cx(i), r2k(cy + 10 * s), 'cay', r2k(.36 * k)),
    su: (i, k) => bardak(cx(i), r2k(cy + 12 * s), r2k(.42 * k)),
    cekic: (i, k) => cekic(r2k(cx(i) - 2 * s), r2k(cy + 1 * s), r2k(.42 * k)),
    ay: (i, k) => ay(r2k(cx(i) - 3 * s), cy, r2k(.6 * k)),
    gunes: (i, k) => gunes(cx(i), r2k(cy + 6 * s), r2k(.5 * k)),
  };
  const simgeler = ic.simge ? Object.entries(ic.simge).flatMap(([k, t]) => (k === 'hepsi' ? [1, 2, 3, 4, 5, 6, 7] : [+k]).flatMap(i => SIMGE[t](i, s))) : [];
  const halkaYol = i => { const a = cx(i) - cw / 2 * s + .6 * s, b = cx(i) + cw / 2 * s - .6 * s, u = Y(-TK.h + TK.serit + 2), d = Y(-2), q = 3 * s;
    return `M${r2k(a + q)} ${r2k(u)} L${r2k(b - q)} ${r2k(u)} Q${r2k(b)} ${r2k(u)} ${r2k(b)} ${r2k(u + q)} L${r2k(b)} ${r2k(d - q)} Q${r2k(b)} ${r2k(d)} ${r2k(b - q)} ${r2k(d)} L${r2k(a + q)} ${r2k(d)} Q${r2k(a)} ${r2k(d)} ${r2k(a)} ${r2k(d - q)} L${r2k(a)} ${r2k(u + q)} Q${r2k(a)} ${r2k(u)} ${r2k(a + q)} ${r2k(u)} Z`; };
  const ok2 = ic.ok ? (() => { const [a, b] = ic.ok, y0 = r2k(Y(-TK.h - 3)), y1 = r2k(Y(-TK.h - 13)), bx = cx(b);
    return [{ t: 'l', d: `M${cx(a)} ${y0} Q${r2k((cx(a) + bx) / 2)} ${y1} ${bx} ${y0}`, w: r2k(Math.max(1.4, 2 * s)), k: 'vurgu', kesik: true },
      { t: 'l', d: `M${r2k(bx - 4 * s)} ${r2k(y0 - 4 * s)} L${bx} ${y0} L${r2k(bx + 1 * s)} ${r2k(y0 - 5.5 * s)}`, w: r2k(Math.max(1.4, 2 * s)), k: 'vurgu' }]; })() : [];
  return [
    dk(X(-TK.w / 2), Y(-TK.h), TK.w * s, TK.h * s, 'kar', 3 * s),
    ...[1, 2, 3, 4, 5, 6, 7].map(i => dk(X(-TK.w / 2 + 4 + (i - 1) * cw), Y(-TK.h + TK.serit + 3), cw * s, (TK.h - TK.serit - 6) * s, i > 5 ? '#E2E4EA' : 'kar')),
    dk(X(-TK.w / 2), Y(-TK.h), TK.w * s, TK.serit * s, '#8C86A0', 3 * s),
    // Tur 1 (M-5): halka delikleri 2.–3. ve 5.–6. sütunların arasında (raptiye deliğin üstüne düşmesin).
    ...[-28.3, 28.3].map(dx => ({ t: 'c', x: r2k(X(dx)), y: r2k(Y(-TK.h)), r: r2k(3 * s), f: 'gri' })),
    ...simgeler,
    ...(ic.isaret ? Object.entries(ic.isaret).flatMap(([k, t]) => isaret(r2k(cx(+k) + 5 * s), r2k(cy + 22 * s), t, r2k(.42 * s))) : []),
    ...dizi(ic.raptiye).flatMap(i => [{ t: 'c', x: cx(i), y: r2k(Y(-TK.h + TK.serit / 2)), r: r2k(Math.max(4.6 * s, 3.6)), f: 'kirmizi' },
      { t: 'c', x: r2k(cx(i) - 1.4 * s), y: r2k(Y(-TK.h + TK.serit / 2) - 1.4 * s), r: r2k(1.3 * s), f: 'kar' }]),
    ...dizi(ic.halka).map(i => ({ t: 'l', d: halkaYol(i), w: r2k(Math.max(1.8, 2.6 * s)), k: 'vurgu' })),
    ...ok2,
    ...(ic.cerceve ? [{ t: 'l', d: `M${r2k(X(-TK.w / 2 - 5))} ${r2k(Y(-TK.h - 5))} L${r2k(X(TK.w / 2 + 5))} ${r2k(Y(-TK.h - 5))} L${r2k(X(TK.w / 2 + 5))} ${r2k(Y(5))} L${r2k(X(-TK.w / 2 - 5))} ${r2k(Y(5))} Z`, w: r2k(Math.max(2, 3 * s)), k: 'vurgu' }] : []),
  ];
};
// Ev cephesi: (x, y) zemin çizgisinin ortası. İki katlı küçük apartman 70s × 64s; üçgen kiremit çatı ve sağda baca (dükkân, banka ve
// istasyondan çatı ve bacayla ayrılır); dört pencere (ic.isik: sarı ışıklı, akşam), ortada kapı ve üstünde küçük lamba. ic.kapiAcik.
export const evCephe = (x, y, s = 1, ic = {}) => {
  const X = v => x + v * s, Y = v => y + v * s, P = (dx, dy) => `${r2k(X(dx))} ${r2k(Y(dy))}`, cam = ic.isik ? '#FFE9A8' : 'buz';
  return [
    dk(X(16), Y(-92), 9 * s, 20 * s, '#A9543F', 1 * s),
    dk(X(-35), Y(-64), 70 * s, 64 * s, '#F2D7C9'),
    { t: 'p', d: `M${P(-42, -62)} L${P(0, -92)} L${P(42, -62)} Z`, f: '#C8654B' },
    ...[[-27, -56], [11, -56], [-27, -34], [11, -34]].map(([px, py]) => dk(X(px), Y(py), 16 * s, 14 * s, cam, 1.5 * s)),
    dk(X(-8), Y(-27), 16 * s, 27 * s, ic.kapiAcik ? BOSLUK : 'agac', 1.5 * s),
    ...(ic.kapiAcik ? [] : [{ t: 'c', x: r2k(X(4)), y: r2k(Y(-13)), r: r2k(1.4 * s), f: 'sari' }]),
    { t: 'c', x: r2k(X(0)), y: r2k(Y(-31)), r: r2k(2 * s), f: 'sari' },
  ];
};
