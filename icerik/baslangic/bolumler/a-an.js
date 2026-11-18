// Başlangıç Kitabı · Bölüm 2: A ve an (taslak, 18 Kasım 2026). Kurallar: ../README.md. Bütün metin özgündür.
// Duy hedefleri: varis 3 "A bag." · pazar 8 "An apple." · is 2 "A hammer."
export default {
  id: 'a-an',
  no: 2,
  title: 'A ve an',
  en: 'A and an',
  seviye: 'A1',
  sure: 12,
  durum: 'taslak',
  hedefler: [
    'Tek bir şeyin önüne *a* ya da *an* koymak.',
    '*A* ile *an* arasında harfe değil sese bakarak seçmek.',
    '*A* ile *an*’ı yalnız sayılabilir ve tek şeyle kullanmak.',
  ],
  konular: [],

  yokla: [
    { ders: 'a', soru: '---- apple', secenekler: ['a', 'an'], dogru: 1,
      aciklama: '*Apple* ünlü bir sesle başlar (“e”), o yüzden *an apple*. *A apple* söylemesi zor ve yanlıştır.' },
    { ders: 'b', soru: '---- hour (saat, 60 dakika)', secenekler: ['a', 'an'], dogru: 1,
      aciklama: '*Hour*’daki *h* okunmaz; sözcük ünlü sesle başlar (“auır”), o yüzden *an hour*. Harfe değil sese bak.' },
    { ders: 'c', soru: 'Hangisi doğru?', secenekler: ['a bags', 'a bag', 'an bag'], dogru: 1,
      aciklama: '*A* tek şey içindir: *a bag*. *Bags* çoğuldur, önüne *a* gelmez. *Bag* ünsüz sesle başlar, o yüzden *an* da yanlıştır.' },
  ],

  dersler: [
    {
      id: 'a', baslik: 'a nerede, an nerede', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'İngilizcede tek bir şeyden söz ederken önüne küçük bir sözcük koyarsın: **a** ya da **an**. İkisi de “bir” anlamına yakındır; Türkçedeki “bir çanta”nın “bir”i gibi düşün. Fark şu: **a** bir ünsüz sesle başlayan sözcüğün önüne, **an** bir ünlü sesle başlayan sözcüğün önüne gelir. Ünlü sesler a, e, i, o, u sesleridir. Böylece iki ünlü yan yana gelmez ve söylemesi kolaylaşır.' },
        { tur: 'ornekler', liste: [
          { en: '==A== bag.', tr: 'Bir çanta.' },
          { en: '==A== ticket.', tr: 'Bir bilet.' },
          { en: '==A== key.', tr: 'Bir anahtar.' },
          { en: '==An== apple.', tr: 'Bir elma.' },
        ] },
        { tur: 'turkce', metin: 'Türkçede “bir” de bazen “a”ya benzer iş yapar: “bir çanta”. İngilizcede ise bu küçük sözcük çoğu zaman **zorunludur**. “Çanta” diye tek başına söylemek *Bag* olur, bu bir etiket gibidir; “bir çanta” demek istersen *a bag* dersin.' },
        { tur: 'dene', soru: '---- ticket', secenekler: ['an', 'a'], dogru: 1,
          aciklama: '*Ticket* ünsüz sesle başlar (“t”), o yüzden *a ticket*. *An* ünlü sesle başlayan sözcüklerin önüne gelir.' },
        { tur: 'ipucu', metin: '*Please* ile kısa isteklerde a/an düşebilir: *Passport, please.* Cümle kurarken ise gerekir: *This is a passport.*' },
        { tur: 'duy', durak: 'varis', sayfa: 3 },
      ],
    },
    {
      id: 'b', baslik: 'Sesle belirlenir', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Dikkat: **a** ya da **an** seçerken harfe değil, sözcüğün **ilk sesine** bakarsın. Çoğu sözcükte harf ile ses aynıdır: *apple* a ile başlar ve ünlü sesle başlar. Ama bazı sözcükte ikisi ayrılır. *Hour* h ile yazılır, ama h okunmaz; ses ünlüyle başlar: **an hour**. *University* u ile yazılır, ama “yu” diye okunur; ses ünsüzle başlar: **a university**. Bu iki sözcüğü böyle ezberleyebilirsin; öteki sözcüklerde sese bak.' },
        { tur: 'tablo', baslik: 'Harf değil ses', sutunlar: ['Sözcük', 'İlk ses', 'Hangisi?'], satirlar: [
          ['*apple*', 'ünlü', '*an apple*'],
          ['*key*', 'ünsüz', '*a key*'],
          ['*hour*', 'ünlü (h okunmaz)', '*an hour*'],
          ['*university*', 'ünsüz (“yu”)', '*a university*'],
        ] },
        { tur: 'ornekler', liste: [
          { en: '==An== hour, please.', tr: 'Bir saat, lütfen.' },
          { en: 'I’m at ==a== university.', tr: 'Bir üniversitedeyim.' },
          { en: '==An== open window.', tr: 'Açık bir pencere.', not: '*Open* ünlü sesle başlar.' },
          { en: '==A== yellow apple.', tr: 'Sarı bir elma.', not: '*Yellow* ünsüz sesle başlar (“y”), o yüzden *a*.' },
        ] },
        { tur: 'ipucu', metin: 'Sıfat varsa *a* ya da *an* o sıfata bakar, isme değil: *an apple* ama *a yellow apple*; *a window* ama *an open window*.' },
        { tur: 'dogruMu', cumle: 'a hour', dogru: false, duzeltme: '==an== hour',
          aciklama: '*Hour*’daki *h* okunmaz, sözcük ünlü sesle başlar: *an hour*. Yazıdaki h’ye değil sese bak.' },
        { tur: 'duy', durak: 'pazar', sayfa: 8 },
      ],
    },
    {
      id: 'c', baslik: 'Sayılabilir tek nesne', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: '**A** ve **an** “bir tane” demektir. Bu yüzden yalnız **sayabildiğin** ve **tek** olan şeylerle kullanılır: bir çanta, bir anahtar, bir elma. İki ya da daha çok olunca *a* düşer, sayı gelir: *two bags*. Çoğul kısmı ileride göreceksin; şimdilik tek bir kural: **a/an + tek nesne**.' },
        { tur: 'ornekler', liste: [
          { en: '==A== hammer.', tr: 'Bir çekiç.' },
          { en: '==A== drill.', tr: 'Bir matkap.' },
          { en: '==A== box.', tr: 'Bir kutu.' },
          { en: '==An== apple.', tr: 'Bir elma.' },
        ] },
        { tur: 'dikkat', yanlis: 'a bags', dogru: '==a== bag', not: '*A* tek şey içindir; çoğul isimle birlikte kullanılmaz.' },
        { tur: 'hataBul', parcalar: ['Here is', 'an', 'key.'], yanlis: 1,
          duzeltme: 'Here is ==a== key.',
          aciklama: '*Key* ünsüz sesle başlar (“k”), o yüzden *a key*; *an* ünlü sesten önce gelir. *Here is* ve *key* doğrudur.' },
        { tur: 'dene', soru: 'Hangisi doğru?', secenekler: ['an box', 'a box', 'a boxes'], dogru: 1,
          aciklama: '*Box* ünsüz sesle başlar ve tektir: *a box*. *An box* ses kuralına uymaz, *a boxes* ise çoğuldur.' },
        { tur: 'duy', durak: 'is', sayfa: 2 },
      ],
    },
  ],

  ozet: {
    maddeler: [
      '**A** ve **an** “bir tane” demektir; tek ve sayılabilir şeyle kullanılır: *a key, an apple*.',
      '**A** ünsüz sesten önce, **an** ünlü sesten önce gelir. Harfe değil sese bak: *an hour, a university*.',
      'Sıfat varsa sıfata bak: *an apple* ama *a yellow apple*.',
      'Çoğul isimle *a/an* kullanılmaz: *a bag*, ama *bags* (iki ya da daha çok).',
    ],
    tablo: { sutunlar: ['İlk ses', 'Söz', 'Örnek'], satirlar: [
      ['ünsüz', '*a*', '*a bag, a key, a university*'],
      ['ünlü', '*an*', '*an apple, an hour, an open door*'],
    ] },
  },
};
