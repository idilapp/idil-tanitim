// Başlangıç Kitabı · Bölüm 9: Can (taslak, 18 Kasım 2026). Kurallar: ../README.md. Bütün metin özgündür.
// Duy hedefleri: is 15 "I can." · is 14 "Can you help me?" · is 15 "I can." (can't Yolculuk'ta henüz yok; olumlu kısa cevap) ·
// is 17 "Can you give me the drill?" (Can I ...? izin sorusu Yolculuk'ta henüz yok; rica sorusu)
// Yeni sözcükler (Yolculuk dışı): he, she; derste Türkçesi verilir.
export default {
  id: 'can',
  no: 9,
  title: 'Can',
  en: 'Can',
  seviye: 'A1',
  sure: 16,
  durum: 'taslak',
  hedefler: [
    '*Can* + yalın fiil ile yapabildiğin şeyi söylemek: *I can help.*',
    '*Can you ...?* sorusunu sormak, *Yes, I can.* / *No, I can’t.* diye cevaplamak.',
    '*Can’t* ve *cannot* ile “yapamam” demek.',
    '*Can you ...?* ile rica, *Can I ...?* ile izin istemek.',
  ],
  konular: [],

  yokla: [
    { ders: 'a', soru: 'Ustabaşı için “Yardım edebilir.” diyorsun. He ---- help.', secenekler: ['cans', 'can to', 'can'], dogru: 2,
      aciklama: '*Can* hiçbir özneyle değişmez ve ardından *to* gelmez: *He can help.* *Cans* ve *can to* yanlıştır.' },
    { ders: 'b', soru: '“Can you open the door?” sorusuna olumlu kısa cevap hangisi?', secenekler: ['Yes, I do.', 'Yes, I can.', 'Yes, I am.'], dogru: 1,
      aciklama: 'Soru *can* ile başladığı için cevap da *can* ile verilir: *Yes, I can.* *Do* ve *am* bu soruya karşılık gelmez.' },
    { ders: 'c', soru: 'Kutu çok ağır; alamıyorsun, taşıyamıyorsun. Ne dersin?', secenekler: ['I not can take the box.', 'I can’t to take the box.', 'I can’t take the box.'], dogru: 2,
      aciklama: 'Olumsuz hâl *can’t* + yalın fiil: *I can’t take the box.* *Not can* sırası yanlıştır; *to* kullanılmaz.' },
    { ders: 'd', soru: 'Kapıyı sen açmak istiyorsun ve izin istiyorsun.', secenekler: ['Can I open the door?', 'Can you open the door?', 'I can open the door.'], dogru: 0,
      aciklama: 'İzin isterken *Can I ...?* denir. *Can you ...?* kapıyı karşındakinin açmasını ister; *I can open the door.* ise bir soru değil, düz cümledir.' },
  ],

  dersler: [
    {
      id: 'a', baslik: 'I can', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Ustabaşı “Can you help me?” diye sorar, sen “I can.” dersin. **Can**, “yapabilmek” demektir. Hep fiilin önüne gelir ve fiil **yalın** kalır: *I can help.* *Can*’den sonra **to** gelmez ve özne ne olursa olsun *can* değişmez; *he* (o, erkek) ya da *she* (o, kadın) ile bile *-s* almaz. Türkçede “-ebilmek” fiile eklenir; İngilizcede ise *can* ayrı bir sözcüktür. Söylerken *can* zayıftır, “kın” gibi; kısa cevapta “I can.” derken ise net ve vurgulu söylenir.' },
        { tur: 'ornekler', liste: [
          { en: 'I ==can help==.', tr: 'Yardım edebilirim.' },
          { en: 'I ==can open== the door.', tr: 'Kapıyı açabilirim.' },
          { en: 'He ==can take== the box.', tr: 'O (erkek) kutuyu alabilir.' },
          { en: 'She ==can give== me the key.', tr: 'O (kadın) bana anahtarı verebilir.' },
        ] },
        { tur: 'dikkat', yanlis: 'He cans help.', dogru: 'He ==can== help.', not: '*Can* hiçbir özneyle *-s* almaz.' },
        { tur: 'dogruMu', cumle: 'I can to open the window.', dogru: false, duzeltme: 'I ==can open== the window.',
          aciklama: '*Can*’den sonra *to* gelmez; yalın fiil gelir: *I can open the window.*' },
        { tur: 'duy', durak: 'is', sayfa: 15 },
      ],
    },
    {
      id: 'b', baslik: 'Can you ...?', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Soru yapmak için **can**’i özneden önceye alırsın: *You can help.* → **Can you help?** Başka bir yardımcı fiil gerekmez. Cevap kısadır: **Yes, I can.** ya da **No, I can’t.** Burada *do* kullanılmaz; çünkü sorudaki fiil *can*’dir. Bu, *be* fiilindeki sıra değişimine benzer.' },
        { tur: 'hatirlat', bolum: 'be', ders: 'd', metin: '*Is it ...?* sorusunda da fiil özneden önce gelir.' },
        { tur: 'ornekler', liste: [
          { en: '==Can you help== me?', tr: 'Bana yardım edebilir misin?' },
          { en: '==Can you take== the box?', tr: 'Kutuyu alabilir misin?' },
          { en: '==Can you open== the window?', tr: 'Pencereyi açabilir misin?' },
          { en: 'Can you help me? Yes, ==I can==.', tr: 'Bana yardım edebilir misin? Evet, edebilirim.' },
        ] },
        { tur: 'dene', soru: 'He open the door? Soru yap: ---- he open the door?', secenekler: ['Can', 'Does', 'Is'], dogru: 0,
          aciklama: '*Can* kendi başına soru yapar: *Can he open the door?* *Does* ve *Is* bu cümlede yanlıştır; *can* zaten yardımcı fiildir.' },
        { tur: 'dogruMu', cumle: 'Do you can help me?', dogru: false, duzeltme: '==Can you== help me?',
          aciklama: '*Can* kendi başına soru yapar; başına *do* eklenmez: *Can you help me?*' },
        { tur: 'duy', durak: 'is', sayfa: 14 },
      ],
    },
    {
      id: 'c', baslik: 'Cannot', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Yapamadığını söylemek için **can’t** ya da **cannot** dersin. İkisi de aynıdır; *can’t* konuşmada çok daha yaygındır. *Cannot* tek sözcük yazılır; “can not” diye genelde ayırmazsın. Sonrasında yine yalın fiil gelir: *I can’t open it.* *Can’t*’te ünlü uzun ve güçlüdür; *can* ise kısa ve zayıftır. Bu yapı Yolculuk’ta henüz geçmiyor; olumlu cevap *I can.* sahnesinde var.' },
        { tur: 'ornekler', liste: [
          { en: 'I ==can’t open== the door.', tr: 'Kapıyı açamıyorum.' },
          { en: 'I ==cannot help== you.', tr: 'Sana yardım edemiyorum.' },
          { en: 'He ==can’t take== the box.', tr: 'O (erkek) kutuyu alamıyor.' },
          { en: 'No, ==I can’t==.', tr: 'Hayır, yapamıyorum.' },
        ] },
        { tur: 'dene', soru: 'Sana yardım edemiyorsun. Hangisi doğru?', secenekler: ['I cannot to help you.', 'I cannot help you.', 'I not cannot help you.'], dogru: 1,
          aciklama: '*Cannot* tek sözcüktür ve ardından yalın fiil gelir: *I cannot help you.* *To* kullanılmaz; ikinci bir *not* da eklenmez.' },
        { tur: 'hataBul', parcalar: ['I', 'can’t', 'opens', 'the door.'], yanlis: 2,
          duzeltme: 'I can’t ==open== the door.',
          aciklama: '*Can’t*’ten sonra fiil yalın gelir: *open*. *Opens* yanlıştır. Öteki parçalar doğrudur.' },
        { tur: 'duy', durak: 'is', sayfa: 15 },
      ],
    },
    {
      id: 'd', baslik: 'Can ile rica ve izin', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: '*Can* iki iş görür. **Can you ...?** karşındakinden bir şey **rica** eder: *Can you give me the drill?* **Can I ...?** ise bir şey yapmak için **izin** ister: *Can I open the window?* Fark öznede: *you* karşındaki kişi, *I* sensin. Nazik olmak için sonuna *please* ekleyebilirsin. Yolculuk’ta rica sorusunu duyarsın; *Can I ...?* henüz geçmiyor.' },
        { tur: 'ornekler', liste: [
          { en: '==Can you give== me the drill?', tr: 'Bana matkabı verebilir misin?' },
          { en: '==Can you close== the window, please?', tr: 'Pencereyi kapatabilir misin, lütfen?' },
          { en: '==Can I open== the window?', tr: 'Pencereyi açabilir miyim?' },
          { en: '==Can I take== the key?', tr: 'Anahtarı alabilir miyim?' },
        ] },
        { tur: 'dene', soru: 'Ustabaşından yardım rica ediyorsun. Hangisi doğru?', secenekler: ['Can you help me?', 'Can I help me?', 'You can help me.'], dogru: 0,
          aciklama: 'Karşındakinden rica ederken *Can you ...?* denir: *Can you help me?* *Can I help me?* anlamsızdır; *You can help me.* soru değil, düz cümledir.' },
        { tur: 'duy', durak: 'is', sayfa: 17 },
      ],
    },
  ],

  ozet: {
    maddeler: [
      '**Can** + yalın fiil: *I can help.* *To* ve *-s* yok.',
      'Soru: *Can you help me?* Cevap: *Yes, I can.* / *No, I can’t.*',
      'Olumsuz: **can’t** ya da **cannot** (tek sözcük).',
      '**Can you ...?** rica; **Can I ...?** izin.',
    ],
    tablo: { sutunlar: ['Ne demek istiyorsun?', 'Kalıp'], satirlar: [
      ['yapabilirim', '*I can help.*'],
      ['yapamam', '*I can’t help.*'],
      ['rica', '*Can you help me?*'],
      ['izin', '*Can I take it?*'],
    ] },
  },
};
