// Başlangıç Kitabı · Bölüm 7: The (taslak, 18 Kasım 2026). Kurallar: ../README.md. Bütün metin özgündür.
// Duy hedefleri: pazar 16 "Take the apple." · pazar 13 "The red apple." (önce an apple, sonra the) · pazar 14 "The green apple."
export default {
  id: 'the',
  no: 7,
  title: 'The',
  en: 'The',
  seviye: 'A1',
  sure: 12,
  durum: 'taslak',
  hedefler: [
    'Karşındaki hangisini kastettiğini biliyorsa *the* kullanmak: *Open the door.*',
    'Bir şeyden ilk kez söz ederken *a / an*, sonra *the* kullanmak.',
    '*The* ile *my / your*’u yan yana koymamak.',
  ],
  konular: [],

  yokla: [
    { ders: 'a', soru: 'A: “This is a window.” B: “Close ---- window.”', secenekler: ['Close a window.', 'Close the windows.', 'Close the window.'], dogru: 2,
      aciklama: 'Pencereden az önce söz edildi; B de aynı pencereyi kastediyor: *Close the window.* *A window* “herhangi bir pencere” gibi olurdu; *windows* çoğuldur, konuşulan tek pencere.' },
    { ders: 'b', soru: 'This is a ticket. Take ---- ticket.', secenekler: ['an', 'the', 'my the'], dogru: 1,
      aciklama: 'Biletten az önce söz edildi; artık belli: *the ticket*. *An* *ticket*’tan önce gelmez (ünsüz sesle başlar); *my the* yan yana kullanılmaz.' },
    { ders: 'c', soru: 'Üç elma var; sarı olanı istiyorsun. “Sarı elmayı ver.”', secenekler: ['Give me yellow the apple.', 'Give me the apple yellow.', 'Give me the yellow apple.'], dogru: 2,
      aciklama: '*The* sıfattan önce gelir ve sıfat isimden önce durur: *the yellow apple*. Öteki iki seçenekte sıra bozuktur.' },
  ],

  dersler: [
    {
      id: 'a', baslik: 'The ne zaman', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Pazarda satıcı “Take **the** apple.” diyor. Hangi elma olduğu ikiniz için de belli: eline uzattığı elma. İşte **the** böyle zamanlarda gelir: **konuştuğun kişi hangi şeyden söz ettiğini biliyorsa**. *A* ya da *an* ise “herhangi bir” demektir. Türkçede “the” diye bir sözcük yoktur; çoğu zaman “şu”, “o” ya da hiçbir şey gibi karşılanır. Bu yüzden *the*’yi bilerek kullanmak gerekir. *The* tek şeyle de, çoğul şeyle de kullanılır: *the apple, the apples*. Sesi: **the** ünsüzle başlayan sözcüğün önünde kısa, “dı” gibi söylenir; ünlüyle başlayan sözcüğün önünde “dhi” gibi okunur: *the apple*. *Th* dilin ucunu dişlere değdirerek çıkar.' },
        { tur: 'ornekler', liste: [
          { en: 'Take ==the== hammer.', tr: 'Çekici al.' },
          { en: 'Open ==the== door.', tr: 'Kapıyı aç.' },
          { en: 'Close ==the== window.', tr: 'Pencereyi kapat.' },
          { en: 'Give me ==the== key.', tr: 'Bana anahtarı ver.' },
        ] },
        { tur: 'dene', soru: 'Ev sahibi kapıyı gösteriyor, ikiniz de ona bakıyorsunuz: “Open ---- door.”', secenekler: ['an', 'a', 'the'], dogru: 2,
          aciklama: 'İkiniz de hangi kapı olduğunu görüyorsunuz: *the door*. *An* *door*’dan önce gelmez (ünsüz sesle başlar). *A door* “herhangi bir kapı” olurdu; burada hangisi olduğu belli.' },
        { tur: 'duy', durak: 'pazar', sayfa: 16 },
      ],
    },
    {
      id: 'b', baslik: 'A ya da the', sure: 4, konular: [],
      bloklar: [
        { tur: 'hatirlat', bolum: 'a-an', metin: 'Tek ve sayılabilir bir şeyden ilk kez söz ederken *a* ya da *an* kullandın.' },
        { tur: 'metin', metin: 'Basit bir düzen var: bir şeyi **ilk kez** söylerken **a / an**, ondan **ikinci kez** söz ederken **the**. Çünkü artık o şey bilinmektedir. Bu kural her duruma uymaz; ama başlangıçta işini görür. Örneğin kutuyu önce tanıtırsın, sonra “o kutu” dersin.' },
        { tur: 'ornekler', liste: [
          { en: 'This is ==a== hammer. Take ==the== hammer.', tr: 'Bu bir çekiç. Çekici al.' },
          { en: 'This is ==a== box. Open ==the== box.', tr: 'Bu bir kutu. Kutuyu aç.' },
          { en: 'This is ==an== apple. Give me ==the== apple.', tr: 'Bu bir elma. Bana elmayı ver.' },
        ] },
        { tur: 'dogruMu', cumle: 'This is a drill. Take a drill. (Aynı matkabı kastediyorsun.)', dogru: false, duzeltme: 'This is a drill. Take ==the== drill.',
          aciklama: 'Matkaptan ilk cümlede söz edildi; ikincisinde aynı matkap olduğu için *the drill* gelir. *Take a drill* “herhangi bir matkap al” demek olurdu.' },
        { tur: 'metin', metin: 'Yolculuk’ta de bu sırayı duyarsın: önce *An apple.*, sonra üç elmanın arasından *The red apple.*' },
        { tur: 'duy', durak: 'pazar', sayfa: 13 },
      ],
    },
    {
      id: 'c', baslik: 'The ve seçim', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Sıfat varsa **the** sıfattan önce gelir: *the red apple*. Üç elmanın içinden birini seçtiğinde *the* gerekir. Bu ikinci söz etme değil, bir **seçimdir**: hangisi olduğunu söylüyorsun. *The* ile **my** ya da **your** birlikte kullanılmaz; ikisi de “hangi şey” sorusunu cevaplar. *My key* ya da *the key* dersin; *the my key* demezsin.' },
        { tur: 'hatirlat', bolum: 'iyelik', ders: 'a', metin: '*My* ve *your* isimden önce gelir; yanlarına ayrıca *the* konmaz.' },
        { tur: 'ornekler', liste: [
          { en: 'Take ==the== green apple.', tr: 'Yeşil elmayı al.' },
          { en: 'Take ==the== red box.', tr: 'Kırmızı kutuyu al.' },
          { en: 'Give me ==my== key.', tr: 'Bana anahtarımı ver.' },
          { en: 'Open ==your== door.', tr: 'Kapını aç.' },
        ] },
        { tur: 'dene', soru: 'Anahtar senin. “Anahtarımı ver.” Give me ---- key.', secenekler: ['the my', 'a my', 'my'], dogru: 2,
          aciklama: '*My* tek başına yeter: *Give me my key.* *The my* ve *a my* yan yana kullanılmaz; çünkü *my* zaten hangi anahtar olduğunu söyler.' },
        { tur: 'duy', durak: 'pazar', sayfa: 14 },
      ],
    },
  ],

  ozet: {
    maddeler: [
      '**The**: konuştuğun kişi hangi şeyden söz ettiğini biliyorsa kullanılır: *Open the door.*',
      'İlk söz edişte **a / an**, sonra **the**: *a hammer → the hammer*. Bu bir başlangıç kuralıdır; her durumu kapsamaz.',
      '*The* sıfattan önce gelir: *the red apple*. *The* ile *my / your* birlikte kullanılmaz.',
    ],
    tablo: { sutunlar: ['Durum', 'Örnek'], satirlar: [
      ['ilk söz', '*a key, an apple*'],
      ['belli, bilinen', '*the key, the apple*'],
      ['sıfatlı', '*the red apple*'],
      ['iyelikli', '*my key* (*the my key* değil)'],
    ] },
  },
};
