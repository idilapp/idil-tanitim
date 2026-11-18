// Başlangıç Kitabı · Bölüm 3: This ve that, here ve there (taslak, 18 Kasım 2026). Kurallar: ../README.md. Bütün metin özgündür.
// Duy hedefleri: varis 11 "This is a bag." · varis 12 "This is a passport." · barinma 18 "Here is your key."
// Not: that ve there Yolculuk'ta henüz geçmiyor (yalnız this ve here); dersler bunu açıkça söyler.
export default {
  id: 'this-that',
  no: 3,
  title: 'This ve that, here ve there',
  en: 'This, that, here and there',
  seviye: 'A1',
  sure: 12,
  durum: 'taslak',
  hedefler: [
    'Yakındaki bir şeyi *This is ...* ile göstermek.',
    'Uzaktaki bir şeyi *That is ...* ile göstermek.',
    'Bir şeyi uzatırken *Here is ...* demek; *there* ile uzağı göstermek.',
  ],
  konular: [],

  yokla: [
    { ders: 'a', soru: 'Elin çantanın üstünde. Ne dersin?', secenekler: ['That is a bag.', 'This is a bag.', 'Here is bag.'], dogru: 1,
      aciklama: 'Elin çantaya değiyorsa şey yakındır: *This is a bag.* *That* uzaktaki şey içindir. *Here is bag* da *a* eksik olduğu için yanlıştır.' },
    { ders: 'b', soru: 'Odanın öbür ucundaki kapıyı gösteriyorsun. Ne dersin?', secenekler: ['This is a door.', 'That is a door.', 'Here is door.'], dogru: 1,
      aciklama: 'Kapı uzaktaysa *that* kullanılır: *That is a door.* *This* yakındaki şey içindir. *Here is door* ise *a* eksik olduğu için yanlıştır.' },
    { ders: 'c', soru: 'Ev sahibi sana anahtarı uzatırken ne der?', secenekler: ['That is key.', 'Here is your key.', 'There your key.'], dogru: 1,
      aciklama: 'Bir şeyi uzatırken *Here is ...* denir: *Here is your key.* *That is key* cümlesinde *a* eksiktir (ayrıca *that* uzak şey içindir); *There your key* ise fiilsizdir.' },
  ],

  dersler: [
    {
      id: 'a', baslik: 'This is ...', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Elinin altındaki ya da yanındaki bir şeyi göstermek için **this** dersin. *This* “bu” demektir ve **yakın** şeyi gösterir. Cümleyi şöyle kurarsın: **This is** + a/an + şey. *Is* burada “...dir” anlamındadır; Türkçede “Bu bir çanta” derken “dir” bile yazmayız, İngilizcede *is* yazılır. Yakınlık metreyle ölçülmez; elini uzatıp dokunabildiğin ya da kendi yanında saydığın şey “yakın”dır.' },
        { tur: 'ornekler', liste: [
          { en: '==This is== a bag.', tr: 'Bu bir çanta.' },
          { en: '==This is== a passport.', tr: 'Bu bir pasaport.' },
          { en: '==This is== a ticket.', tr: 'Bu bir bilet.' },
          { en: '==This is== an apple.', tr: 'Bu bir elma.' },
        ] },
        { tur: 'turkce', metin: 'Türkçede “Bu bir çanta” cümlesinde fiil görünmez, “bir çanta” yeter. İngilizcede cümlede **mutlaka** bir fiil olmalıdır: *This a bag* yanlıştır, *This is a bag* doğrudur. Bu küçük *is* İngilizcenin “-dir”idir.' },
        { tur: 'dogruMu', cumle: 'This a ticket.', dogru: false, duzeltme: 'This ==is== a ticket.',
          aciklama: 'İngilizce cümlede fiil gerekir; *This* ile *a ticket* arasına *is* girer: *This is a ticket.*' },
        { tur: 'duy', durak: 'varis', sayfa: 11 },
      ],
    },
    {
      id: 'b', baslik: 'That is ...', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: '**That** “şu, o” demektir ve **uzaktaki** şeyi gösterir: odanın öbür ucundaki kapı, masanın karşısındaki pencere. Cümleyi *this*’le aynı kurarsın: **That is** + a/an + şey. İki sözcük birbirinin karşıtıdır: *this* yakında, *that* uzakta. Yolculuk’ta şu ana kadar yalnız *this*’i duydun; *that* onun uzaktaki kardeşidir ve aynı kalıpta kullanılır.' },
        { tur: 'tablo', sutunlar: ['Nerede?', 'Söz', 'Örnek'], satirlar: [
          ['yakın', '*this*', '*This is a key.*'],
          ['uzak', '*that*', '*That is a door.*'],
        ] },
        { tur: 'ornekler', liste: [
          { en: '==That is== a door.', tr: 'Şu bir kapı.' },
          { en: '==That is== a window.', tr: 'Şu bir pencere.' },
          { en: '==That is== a bed.', tr: 'Şu bir yatak.' },
        ] },
        { tur: 'ipucu', metin: '*That is* günlük konuşmada çoğunlukla **that’s** diye kısalır: *That’s a door.* İkisi de doğrudur.' },
        { tur: 'dene', soru: 'Odanın öbür ucundaki yatağı gösteriyorsun. Hangisi doğru?', secenekler: ['This is a bed.', 'That is a bed.', 'That a bed.'], dogru: 1,
          aciklama: 'Yatak uzaktaysa *that* kullanılır ve cümlede *is* bulunmalıdır: *That is a bed.* *This* yakındaki şey içindir; *That a bed* ise *is* eksik olduğu için yanlıştır.' },
        { tur: 'duy', durak: 'varis', sayfa: 12 },
      ],
    },
    {
      id: 'c', baslik: 'Here is ...', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: '**Here** “burada” demektir. Birine bir şey uzatırken ya da bir şeyi gösterirken **Here is** + şey dersin: *Here is your key.* “Buyur, anahtarın.” Bunun karşıtı **there**, yani “orada”dır: uzaktaki yeri gösterir. *Here* ve *there* yer bildirir; *this* ve *that* ise şeyi bildirir. Kısa söylemek de yeter: sadece *Here.* Pasaport masasında bunu zaten kullandın (*Here.*, varış durağı).' },
        { tur: 'ornekler', liste: [
          { en: '==Here is== your key.', tr: 'Buyur, anahtarın.' },
          { en: '==Here is== a ticket.', tr: 'Buyur, bir bilet.' },
          { en: '==Here is== my passport.', tr: 'Buyur, pasaportum.' },
          { en: 'The key is ==there==.', tr: 'Anahtar orada.' },
        ] },
        { tur: 'ipucu', metin: '*There is* ayrı bir yapıdır ve “var” anlamına gelir (*There is a key.* = Bir anahtar var). Burada *there* yalnız “orada” demektir. Çoğul şeyde *is* yerine *are* gelir: *Here are your keys.*' },
        { tur: 'dikkat', yanlis: 'Here your key.', dogru: '==Here is== your key.', not: 'Burada da fiil gerekir: *is*.' },
        { tur: 'dene', soru: 'Ev sahibine anahtarı uzatıyorsun. Ne dersin?', secenekler: ['Here a key.', 'Here is a key.', 'Here, this key is.'], dogru: 1,
          aciklama: 'Uzatırken kalıp *Here is* + şey’dir: *Here is a key.* *Here a key* fiilsizdir, üçüncü cümle ise sözcük sırasını bozar.' },
        { tur: 'duy', durak: 'barinma', sayfa: 18 },
      ],
    },
  ],

  ozet: {
    maddeler: [
      '**This is** + a/an + şey: yakındaki şey. **That is** + a/an + şey: uzaktaki şey.',
      'İngilizce cümlede fiil gerekir: *This is a bag*, *This a bag* değil.',
      '**Here is** + şey: bir şeyi uzatırken ya da gösterirken. **There** “orada” demektir.',
      'Günlük konuşmada *that is* → *that’s* diye kısalır.',
    ],
    tablo: { sutunlar: ['Yakın', 'Uzak'], satirlar: [
      ['*this* (bu)', '*that* (şu, o)'],
      ['*here* (burada)', '*there* (orada)'],
    ] },
  },
};
