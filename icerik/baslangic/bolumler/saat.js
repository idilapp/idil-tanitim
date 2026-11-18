// Başlangıç Kitabı · Bölüm 10: Saat (taslak, 18 Kasım 2026). Kurallar: ../README.md. Bütün metin özgündür.
// Duy hedefleri: is 25 "Eight o'clock." · is 26 "Nine o'clock." (half past / quarter Yolculuk'ta henüz yok; tam saat yakını) ·
// is 28 "Eight o'clock. Take the hammer." (What time is it? sorusu Yolculuk'ta henüz yok; cevabı)
// Yeni sözcükler (Yolculuk dışı): eleven, twelve, half, quarter, past, to, time; derste Türkçesi verilir.
export default {
  id: 'saat',
  no: 10,
  title: 'Saat',
  en: 'Telling the time',
  seviye: 'A1',
  sure: 13,
  durum: 'taslak',
  hedefler: [
    'Tam saatleri söylemek: *It’s eight o’clock.*',
    'Buçuk ve çeyrek saatleri söylemek: *half past, quarter past, quarter to.*',
    '*What time is it?* diye sormak ve cevaplamak.',
  ],
  konular: [],

  yokla: [
    { ders: 'a', soru: 'Saat tam on. Ne dersin?', secenekler: ['It’s o’clock ten.', 'It’s ten o’clock.', 'It are ten o’clock.'], dogru: 1,
      aciklama: 'Tam saatte sayı önce, *o’clock* sonra gelir ve fiil *is* olur: *It’s ten o’clock.* Sıra bozulursa ya da *are* kullanılırsa cümle yanlış olur.' },
    { ders: 'b', soru: 'Saat 3:30. Hangisi doğru?', secenekler: ['It’s half to three.', 'It’s quarter past three.', 'It’s half past three.'], dogru: 2,
      aciklama: '*Half past three* üç buçuk demektir (3:30). *Quarter past three* 3:15’tir; *half to three* diye bir söyleyiş yoktur.' },
    { ders: 'c', soru: 'Saati sormak için ne dersin?', secenekler: ['What is time it?', 'What time is it?', 'Where time is it?'], dogru: 1,
      aciklama: 'Doğru sıra *What time is it?*’tir. Öteki ikisinde sıra bozuktur ya da yanlış soru sözcüğü (*where*) vardır.' },
  ],

  dersler: [
    {
      id: 'a', baslik: 'It is eight o’clock', sure: 4, konular: [],
      bloklar: [
        { tur: 'hatirlat', bolum: 'be', ders: 'a', metin: '*It is* bir şeyi tanıtır; saatte de aynı *it is* kullanılır.' },
        { tur: 'metin', metin: 'Saat tam başındaysa sayıyı söyler, sonuna **o’clock** eklersin: *eight o’clock*, “sekiz”. Önüne konuşmada **it’s** koyarsın: *It’s eight o’clock.* Sayıları bir’den ona kadar Yolculuk’ta duydun. Saat için iki sayı daha lazım: **eleven** (on bir) ve **twelve** (on iki). *O’clock* “of the clock”un kısaltmasıdır; yalnız tam saatle kullanılır.' },
        { tur: 'ornekler', liste: [
          { en: 'It’s ==eight o’clock==.', tr: 'Saat sekiz.' },
          { en: 'It’s ==nine o’clock==.', tr: 'Saat dokuz.' },
          { en: 'It’s ==ten o’clock==.', tr: 'Saat on.' },
          { en: 'It’s ==twelve o’clock==.', tr: 'Saat on iki.' },
        ] },
        { tur: 'dogruMu', cumle: 'Saat tam on bir. It’s eleven clock.', dogru: false, duzeltme: 'It’s eleven ==o’clock==.',
          aciklama: 'Tam saatte sayıdan sonra *o’clock* gelir; *clock* (duvar saati) bu yerde kullanılmaz: *It’s eleven o’clock.*' },
        { tur: 'duy', durak: 'is', sayfa: 25 },
      ],
    },
    {
      id: 'b', baslik: 'Yarım, çeyrek, geçe, kala', sure: 5, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Saat tam değilse ilk üç kalıp şunlardır. **Half past** (buçuk): *half past eight*, 8:30. **Quarter past** (çeyrek geçe): *quarter past eight*, 8:15. **Quarter to** (çeyrek kala): *quarter to nine*, 8:45. **Past** “geçe”, **to** “kala” demektir. Yolculuk’ta şimdilik yalnız tam saatler var; yakını *Nine o’clock.* sahnesi.' },
        { tur: 'tablo', baslik: 'Üç yeni kalıp', sutunlar: ['Saat', 'İngilizce', 'Türkçesi'], satirlar: [
          ['8:30', '*half past eight*', 'sekiz buçuk'],
          ['8:15', '*quarter past eight*', 'sekizi çeyrek geçiyor'],
          ['8:45', '*quarter to nine*', 'dokuza çeyrek var'],
        ] },
        { tur: 'turkce', metin: 'Türkçedeki gibi İngilizcede de buçuk ve çeyrek vardır. “Sekiz buçuk” gibi *half past eight* de 8:30’dur; “dokuza çeyrek var” gibi *quarter to nine* de bir sonraki saate bakar (8:45). Türkçedeki “geçiyor” ise İngilizcede *past*’tır.' },
        { tur: 'ornekler', liste: [
          { en: 'It’s ==half past== ten.', tr: 'Saat on buçuk.' },
          { en: 'It’s ==quarter past== nine.', tr: 'Saat dokuzu çeyrek geçiyor.' },
          { en: 'It’s ==quarter to== eight.', tr: 'Saat sekize çeyrek var.' },
        ] },
        { tur: 'dene', soru: 'Saat 8:45. It’s ---- nine.', secenekler: ['quarter to', 'quarter past', 'half past'], dogru: 0,
          aciklama: '8:45’te dokuza çeyrek vardır: *quarter to nine*. *Quarter past nine* 9:15, *half past nine* 9:30 olurdu.' },
        { tur: 'dogruMu', cumle: 'Saat 10:15. It’s half past ten.', dogru: false, duzeltme: 'It’s ==quarter past== ten.',
          aciklama: '*Half past ten* on buçuktur (10:30). 10:15 için *quarter past ten* denir.' },
        { tur: 'duy', durak: 'is', sayfa: 26 },
      ],
    },
    {
      id: 'c', baslik: 'What time is it?', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Saati sormanın kalıbı **What time is it?** Bu, “Ne zaman?” demek değil; “saat kaç?” demektir. Cevap, az önce öğrendiğin kalıptır: *It’s eight o’clock.* *What* soru sözcüğüdür ve cümlenin başında durur; ardından *time*, sonra *is it*. Yolculuk’ta saat sorusu henüz yok; cevap biçimini duyarsın.' },
        { tur: 'ornekler', liste: [
          { en: '==What time is it?== It’s nine o’clock.', tr: 'Saat kaç? Saat dokuz.' },
          { en: '==What time is it?== It’s half past ten.', tr: 'Saat kaç? On buçuk.' },
          { en: '==What time is it?== It’s quarter to eight.', tr: 'Saat kaç? Sekize çeyrek var.' },
        ] },
        { tur: 'dene', soru: 'Saat 9:30; biri saati soruyor. — ----', secenekler: ['It’s nine half past.', 'I am half past nine.', 'It’s half past nine.'], dogru: 2,
          aciklama: 'Saatte özne *it*’tir: *It’s half past nine.* *I am* saati söylemez; *nine half past* sırası bozuktur.' },
        { tur: 'hataBul', parcalar: ['What time is it?', 'Is', 'nine o’clock.'], yanlis: 1,
          duzeltme: 'What time is it? ==It’s== nine o’clock.',
          aciklama: 'Saati söylerken cümle *It’s* ile başlar: *It’s nine o’clock.* *Is nine o’clock* düz bir cümle olarak yanlıştır; soru sırası yalnız soruda kullanılır. Soru ve *nine o’clock* doğrudur.' },
        { tur: 'duy', durak: 'is', sayfa: 28 },
      ],
    },
  ],

  ozet: {
    maddeler: [
      'Tam saat: sayı + **o’clock**: *It’s eight o’clock.*',
      '**Half past** = buçuk, **quarter past** = çeyrek geçe, **quarter to** = çeyrek kala.',
      'Soru: **What time is it?** Cevap: **It’s ...**',
    ],
    tablo: { sutunlar: ['Saat', 'Söylenişi'], satirlar: [
      ['8:00', '*It’s eight o’clock.*'],
      ['8:15', '*It’s quarter past eight.*'],
      ['8:30', '*It’s half past eight.*'],
      ['8:45', '*It’s quarter to nine.*'],
    ] },
  },
};
