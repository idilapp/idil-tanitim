// Başlangıç Kitabı · Bölüm 11: Renkler ve sıfat (taslak, 18 Kasım 2026). Kurallar: ../README.md. Bütün metin özgündür.
// Duy hedefleri: pazar 5 "Yellow, yellow, yellow." · pazar 13 "The red apple." · pazar 14 "The green apple." (What colour? Yolculuk'ta henüz yok; renk sahnesi)
// Yeni sözcükler (Yolculuk dışı): blue, black, white, colour; derste Türkçesi verilir. Yazım İngiliz: colour.
export default {
  id: 'renk-sifat',
  no: 11,
  title: 'Renkler ve sıfat',
  en: 'Colours and adjectives',
  seviye: 'A1',
  sure: 12,
  durum: 'taslak',
  hedefler: [
    'Altı rengi söylemek: *red, green, yellow, blue, black, white.*',
    'Sıfatı isimden önce kullanmak ve sıfata *-s* eklememek: *two red apples.*',
    '*What colour is ...?* diye sorup cevaplamak.',
  ],
  konular: [],

  yokla: [
    { ders: 'a', soru: '“Sarı” İngilizcede hangisidir?', secenekler: ['yellow', 'green', 'red'], dogru: 0,
      aciklama: '*Yellow* sarıdır. *Green* yeşil, *red* kırmızıdır.' },
    { ders: 'b', soru: 'Üç yeşil elma var. Hangisi doğru?', secenekler: ['three greens apples', 'three apples green', 'three green apples'], dogru: 2,
      aciklama: 'Sıfat isimden önce gelir ve *-s* almaz; çoğulu isim taşır: *three green apples.* Öteki seçeneklerde ya sıfata *-s* eklenmiş ya da sıra bozulmuş.' },
    { ders: 'c', soru: 'Anahtarın rengini soruyorsun.', secenekler: ['Where colour is the key?', 'What colour is the key?', 'What the key is colour?'], dogru: 1,
      aciklama: '*What colour is ...?* renk sorusudur: *What colour is the key?* *Where* yer sorar; *What the key is colour?* sırası bozuktur.' },
  ],

  dersler: [
    {
      id: 'a', baslik: 'Renkler', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Pazarda üç rengi duydun: **red** (kırmızı), **green** (yeşil), **yellow** (sarı). Üç tane daha ekleyelim: **blue** (mavi), **black** (siyah), **white** (beyaz). Bir şeyin rengini söylerken **it’s** + renk dersin: *It’s red.* Söylerken **yellow** “yelou” gibi okunur; başındaki ses *y*, *j* değildir. **Blue** “blu”, **white** “wayt” diye okunur; *white*’ta dudaklarını yuvarlayarak başlarsın.' },
        { tur: 'tablo', baslik: 'Altı renk', sutunlar: ['İngilizce', 'Türkçesi'], satirlar: [
          ['*red*', 'kırmızı'],
          ['*green*', 'yeşil'],
          ['*yellow*', 'sarı'],
          ['*blue*', 'mavi'],
          ['*black*', 'siyah'],
          ['*white*', 'beyaz'],
        ] },
        { tur: 'ornekler', liste: [
          { en: 'It’s ==red==.', tr: 'O kırmızı.' },
          { en: 'It’s ==green==.', tr: 'O yeşil.' },
          { en: 'It’s ==blue==.', tr: 'O mavi.' },
          { en: 'It’s ==white==.', tr: 'O beyaz.' },
        ] },
        { tur: 'dene', soru: 'Kömür siyahtır. Kömürün rengi: It’s ----.', secenekler: ['white', 'blue', 'black'], dogru: 2,
          aciklama: 'Siyah *black*’tir. *White* beyaz, *blue* mavidir.' },
        { tur: 'duy', durak: 'pazar', sayfa: 5 },
      ],
    },
    {
      id: 'b', baslik: 'Sıfat ve isim sırası', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Rengi söyleyen sözcük bir **sıfattır** (*adjective*): ismi anlatır. İngilizcede sıfat **isimden önce** gelir: *a red apple*. Türkçeyle aynı sırada: “kırmızı elma”. Türkçe de sıfata çoğul eki getirmez (“iki kırmızı elma”); bu konuda iki dil aynıdır. Sıfat **-s almaz**: *two red apples*, *two reds apples* değil. Çoğul eki isme gelir. *A* ya da *an*’ı da **sıfata göre** seçersin; çünkü o, bir sonraki sözcüğün hemen önünde durur: *an apple* ama *a red apple*.' },
        { tur: 'hatirlat', bolum: 'a-an', metin: '*A* ünsüz sesten önce, *an* ünlü sesten önce gelir; seçim, hemen sonraki sözcüğe bağlıdır.' },
        { tur: 'ornekler', liste: [
          { en: 'It’s a ==red apple==.', tr: 'O kırmızı bir elma.' },
          { en: 'It’s a ==green bag==.', tr: 'O yeşil bir çanta.' },
          { en: 'Take two ==yellow boxes==.', tr: 'İki sarı kutu al.' },
          { en: 'Take the ==red apple==.', tr: 'Kırmızı elmayı al.' },
        ] },
        { tur: 'dogruMu', cumle: 'Take two reds boxes.', dogru: false, duzeltme: 'Take two ==red boxes==.',
          aciklama: 'Sıfat *-s* almaz: *red*. Çoğul eki yalnız isme gelir: *boxes*.' },
        { tur: 'hataBul', parcalar: ['Take', 'the', 'apple green.'], yanlis: 2,
          duzeltme: 'Take the ==green apple==.',
          aciklama: 'Sıfat isimden önce gelir: *green apple*. *Take* ve *the* doğrudur.' },
        { tur: 'duy', durak: 'pazar', sayfa: 13 },
      ],
    },
    {
      id: 'c', baslik: 'Soru: What colour?', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Bir şeyin rengini sormak için **What colour is ...?** dersin. *Colour* “renk” demektir; İngiltere’de **colour** yazılır, *color* Amerikan yazımıdır. Biz kitapta *colour* yazıyoruz. Cevap *It’s* + renktir: *It’s red.* Bu soru Yolculuk’ta henüz geçmiyor; renkler ve “kırmızı elma” kalıbı ise var.' },
        { tur: 'ornekler', liste: [
          { en: '==What colour is== the apple? It’s red.', tr: 'Elma ne renk? Kırmızı.' },
          { en: '==What colour is== the key? It’s yellow.', tr: 'Anahtar ne renk? Sarı.' },
          { en: '==What colour is== the door? It’s white.', tr: 'Kapı ne renk? Beyaz.' },
        ] },
        { tur: 'dene', soru: 'Elmanın rengini soruyorsun. What ---- is the apple?', secenekler: ['red', 'time', 'colour'], dogru: 2,
          aciklama: 'Renk sorusunda *colour* gelir: *What colour is the apple?* *Red* bir renktir, cevap olur, soru sözcüğü olmaz; *time* saati sorar.' },
        { tur: 'dogruMu', cumle: 'What colour is the key? — It’s a key.', dogru: false, duzeltme: 'What colour is the key? — It’s ==blue==.',
          aciklama: 'Renk sorusuna renkle cevap verilir. *It’s a key.* ise “o bir anahtar” der; rengi söylemez.' },
        { tur: 'duy', durak: 'pazar', sayfa: 14 },
      ],
    },
  ],

  ozet: {
    maddeler: [
      'Altı renk: *red, green, yellow, blue, black, white.*',
      'Sıfat isimden önce gelir ve **-s almaz**: *two red apples.*',
      '*A / an* sıfata göre seçilir: *a red apple*, *an apple*.',
      'Soru: **What colour is ...?** Cevap: **It’s red.**',
    ],
    tablo: { sutunlar: ['Ne?', 'Örnek'], satirlar: [
      ['renk', '*It’s blue.*'],
      ['sıfat + isim', '*a red apple*'],
      ['çoğul', '*two red apples*'],
      ['soru', '*What colour is the key?*'],
    ] },
  },
};
