// Başlangıç Kitabı · Bölüm 4: Be: is, am, are (taslak, 18 Kasım 2026). Kurallar: ../README.md. Bütün metin özgündür.
// Duy hedefleri: varis 11 "This is a bag." · is 15 "I can." (am/are Yolculuk'ta henüz yok; yalnız "I" öznesi) · varis 18 "Where?" ·
// is 14 "Can you help me?" (Is ...? sorusu Yolculuk'ta henüz yok; evirmeli soru kalıbı Can you ...? ile aynı mantık).
export default {
  id: 'be',
  no: 4,
  title: 'Be: is, am, are',
  en: 'The verb be',
  seviye: 'A1',
  sure: 17,
  durum: 'taslak',
  hedefler: [
    '*This is* ve *it is* ile bir şeyi tanıtmak.',
    '*I am* ve *you are* ile kendinden ve karşındakinden söz etmek.',
    '*Where is ...?* ile bir şeyin nerede olduğunu sormak.',
    '*Is ...?* ile evet-hayır sorusu sormak ve *not* ile olumsuz yapmak.',
  ],
  konular: [],

  yokla: [
    { ders: 'a', soru: 'This is a key. ---- red.', secenekler: ['It is', 'It are', 'Is'], dogru: 0,
      aciklama: 'Az önce söz edilen bir şeyin yerine *it* gelir ve *it*’le *is* kullanılır: *It is red.* *It are* yanlıştır; *Is* tek başına cümleyi öznesiz bırakır.' },
    { ders: 'b', soru: 'Karşındaki kişiye “Sen buradasın.” diyorsun.', secenekler: ['You am here.', 'You is here.', 'You are here.'], dogru: 2,
      aciklama: '*You* ile her zaman *are* gelir: *You are here.* *Am* yalnız *I* ile, *is* ise tek şeyle (*he, she, it*) kullanılır.' },
    { ders: 'c', soru: 'Anahtarını bulamıyorsun. Ne sorarsın?', secenekler: ['Where my key?', 'Where is my key?', 'Is where my key?'], dogru: 1,
      aciklama: 'Soru sözcüğü başta, ardından *is*, sonra şey: *Where is my key?* Birinci seçenekte fiil eksik, üçüncüsünde sıra bozuk.' },
    { ders: 'd', soru: 'Bu bir çanta mı? sorusu hangisidir?', secenekler: ['This is a bag?', 'Is this a bag?', 'Is a bag this?'], dogru: 1,
      aciklama: 'Soru yapmak için *is* özne olan *this*’in önüne geçer: *Is this a bag?* Sıra *this is* kalırsa cümle düz cümle olur; üçüncüsünde sıra bozulur.' },
  ],

  dersler: [
    {
      id: 'a', baslik: 'This is ve it is', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Fiillerin en önemlisi **be** fiilidir: “olmak, ...dir”. *Be* bir şeyin ne olduğunu ya da nasıl olduğunu söyler. Şimdiye kadar *this is* diye onu duydun. **This** yakındaki şeyi gösterir. Aynı şeyden bir daha söz edeceğin zaman tekrar etmez, yerine **it** (“o”) koyarsın. *It* ile gelen fiil de **is**’tir. Konuşmada **it is** çoğunlukla **it’s** diye kısalır; apostrof (’) harf düşürdüğünü gösterir.' },
        { tur: 'tablo', baslik: 'Be ile bir şeyi tanıtmak', sutunlar: ['Kısa hâl', 'Tam hâl', 'Anlamı'], satirlar: [
          ['*It’s a bag.*', '*It is a bag.*', 'O bir çanta.'],
          ['*It’s red.*', '*It is red.*', 'O kırmızı.'],
        ] },
        { tur: 'ornekler', liste: [
          { en: 'This is a key. ==It is== a red key.', tr: 'Bu bir anahtar. O kırmızı bir anahtar.' },
          { en: 'This is a bag. ==It’s== a green bag.', tr: 'Bu bir çanta. O yeşil bir çanta.' },
          { en: '==It is== a ticket.', tr: 'O bir bilet.' },
          { en: '==It’s== a window.', tr: 'O bir pencere.' },
        ] },
        { tur: 'turkce', metin: 'Türkçede “Bu bir çanta” ya da “O kırmızı” derken fiil söylemeyiz. İngilizcede cümlenin içinde **mutlaka** bir fiil bulunur: *It red* değil, *It is red*. Bunu bir kural olarak düşün: *is*, *am*, *are* sözcükleri “-dir, -im, -sin” ekinin İngilizcedeki ayrı sözcük hâlidir.' },
        { tur: 'dene', soru: 'This is a ticket. ---- green.', secenekler: ['It', 'It is', 'It am'], dogru: 1,
          aciklama: '*It* tek başına öznedir ve cümle fiilsiz kalır. *It is green* doğrudur. *It am* yanlıştır, çünkü *am* yalnız *I* ile kullanılır.' },
        { tur: 'duy', durak: 'varis', sayfa: 11 },
      ],
    },
    {
      id: 'b', baslik: 'I am ve you are', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: '*Be* fiilinin kişiye göre üç biçimi vardır: **am**, **is**, **are**. **I** ile **am**, **you** ile **are**, **he, she, it** ile **is** gelir. Bunu ezberlemen gerekir, çünkü İngilizcede özneyi söylemek şarttır: Türkçede “Buradayım” yeter, İngilizcede *I am here* dersin. Konuşmada *am, are* kısalır: **I’m**, **you’re**. Yolculuk’ta henüz *am* ve *are* geçmedi; burada yalnız *I* özneli kısa cümleyi (*I can*) duyacaksın.' },
        { tur: 'tablo', baslik: 'Be fiili', sutunlar: ['Özne', 'Be', 'Kısa hâl'], satirlar: [
          ['*I*', '*am*', '*I’m*'],
          ['*you*', '*are*', '*you’re*'],
          ['*he, she, it*', '*is*', '*he’s, she’s, it’s*'],
          ['*we, they*', '*are*', '*we’re, they’re*'],
        ] },
        { tur: 'ornekler', liste: [
          { en: '==I am== here.', tr: 'Buradayım.' },
          { en: '==You are== here.', tr: 'Buradasın.' },
          { en: '==I’m== here, room two.', tr: 'Buradayım, iki numaralı oda.' },
          { en: '==You’re== here.', tr: 'Buradasın.' },
        ] },
        { tur: 'dikkat', yanlis: 'I are here.', dogru: '==I am== here.', not: '*Are* yalnız *you, we, they* ile gelir.' },
        { tur: 'dene', soru: '---- here. (Sen buradasın.)', secenekler: ['You is', 'You are', 'You am'], dogru: 1,
          aciklama: '*You* ile *are* gelir: *You are here.* *Is* tek şeye (*he, she, it*), *am* yalnız *I*’ya aittir.' },
        { tur: 'duy', durak: 'is', sayfa: 15 },
      ],
    },
    {
      id: 'c', baslik: 'Where is ...?', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Bir şeyin nerede olduğunu sormak için **Where is ...?** dersin. **Where** “nerede” demektir ve cümlenin başına gelir; ardından **is**, sonra aradığın şey. Pasaport masasında memurun *Where?* dediğini duydun; tam cümle *Where is your passport?* demektir. Cevap olarak kısa söylersin: *Here.* Konuşmada *where is* çoğunlukla **where’s** diye kısalır.' },
        { tur: 'ornekler', liste: [
          { en: '==Where is== my key?', tr: 'Anahtarım nerede?' },
          { en: '==Where is== your ticket?', tr: 'Biletin nerede?' },
          { en: '==Where is== room two?', tr: 'İki numaralı oda nerede?' },
          { en: '==Where’s== my passport?', tr: 'Pasaportum nerede?' },
        ] },
        { tur: 'turkce', metin: 'Türkçede “nerede” çoğunlukla cümlenin sonunda durur: “Anahtarım **nerede**?” İngilizcede soru sözcüğü **başa** gelir: *Where is my key?* Sözcük sırasını Türkçeden çevirmeye çalışırsan cümle bozulur.' },
        { tur: 'ipucu', metin: 'Çoğul şeyde *is* yerine *are* gelir: *Where are my keys?*' },
        { tur: 'dogruMu', cumle: 'My key where is?', dogru: false, duzeltme: '==Where is== my key?',
          aciklama: 'İngilizcede soru sözcüğü cümlenin başına gelir ve ardından *is* durur: *Where is my key?* Türkçe sırayı kopyalamak cümleyi bozar.' },
        { tur: 'dene', soru: 'Pasaportunu bulamıyorsun. Ne sorarsın?', secenekler: ['Where my passport?', 'Is where my passport?', 'Where is my passport?'], dogru: 2,
          aciklama: 'Doğru sıra: *Where* + *is* + şey. *Where my passport?* fiilsizdir; *Is where my passport?* sırayı bozar.' },
        { tur: 'duy', durak: 'varis', sayfa: 18 },
      ],
    },
    {
      id: 'd', baslik: 'Is ... ? sorusu ve not', sure: 5, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Evet-hayır sorusu yapmak kolaydır: **be** fiilini özneden önceye alırsın. *It is a key* → **Is it** a key? *You are here* → **Are you** here? Olumsuz yapmak içinse fiilden sonra **not** koyarsın: *It is not a key.* Konuşmada **isn’t** (= is not) ve **aren’t** (= are not) kullanılır; *I am not* ise **I’m not** diye kısalır (*amn’t* diye bir biçim yoktur). Yolculuk’ta aynı sıra değişimini *Can you ...?* sorularında duydun; kalıp aynıdır: fiil özneden önce gelir.' },
        { tur: 'tablo', baslik: 'Düz cümle, soru, olumsuz', sutunlar: ['Düz', 'Soru', 'Olumsuz'], satirlar: [
          ['*It is a key.*', '*Is it a key?*', '*It isn’t a key.*'],
          ['*You are here.*', '*Are you here?*', '*You aren’t here.*'],
          ['*I am here.*', '*Am I here?*', '*I’m not here.*'],
        ] },
        { tur: 'ornekler', liste: [
          { en: '==Is it== a bag?', tr: 'O bir çanta mı?' },
          { en: '==Is this== your key?', tr: 'Bu senin anahtarın mı?' },
          { en: '==Are you== here?', tr: 'Burada mısın?' },
          { en: 'It ==isn’t== a window.', tr: 'O bir pencere değil.' },
        ] },
        { tur: 'dene', soru: 'Bu bir bilet mi? sorusunu hangisi doğru sorar?', secenekler: ['This is a ticket?', 'Is a ticket this?', 'Is this a ticket?'], dogru: 2,
          aciklama: 'Soruda *is*, özne olan *this*’in önüne geçer: *Is this a ticket?* Birincisi düz cümle sırasıdır, ikincisi sözcük sırasını bozar.' },
        { tur: 'dogruMu', cumle: 'It are not a key.', dogru: false, duzeltme: 'It ==is not== a key.',
          aciklama: '*It* ile *are* değil *is* gelir: *It is not a key.* (kısa: *It isn’t a key.*)' },
        { tur: 'duy', durak: 'is', sayfa: 14 },
      ],
    },
  ],

  ozet: {
    maddeler: [
      '**Be** fiili: *I am*, *you are*, *he/she/it is*, *we/they are*. İngilizcede özneyi söylemek şarttır.',
      'Konuşmada kısalır: *I’m, you’re, it’s, where’s*. Apostrof düşen harfin yerindedir.',
      '**Where is ...?** bir şeyin yerini sorar; soru sözcüğü başta durur.',
      '**Soru:** be fiili özneden önceye geçer: *Is it a key?* **Olumsuz:** fiilden sonra *not*: *It isn’t a key.*',
    ],
    tablo: { sutunlar: ['Özne', 'Düz', 'Soru', 'Olumsuz'], satirlar: [
      ['*I*', '*I am*', '*Am I?*', '*I’m not*'],
      ['*you*', '*you are*', '*Are you?*', '*you aren’t*'],
      ['*it*', '*it is*', '*Is it?*', '*it isn’t*'],
    ] },
  },
};
