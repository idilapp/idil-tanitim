// Başlangıç Kitabı · Bölüm 1: Selam ve sayılar (taslak, 18 Kasım 2026). Kurallar: ../README.md. Bütün metin özgündür.
// Duy hedefleri (Yolculuk sayfa sırası 0'dan): varis 15 "Passport, please." · varis 26 "One, two, three, four, five." · is 20 "Six." · barinma 4 "Room two."
export default {
  id: 'selam-sayilar',
  no: 1,
  title: 'Selam ve sayılar',
  en: 'Greetings and numbers',
  seviye: 'A1',
  sure: 16,
  durum: 'taslak',
  hedefler: [
    'Merhaba demek (*Hello*) ve bir şeyi kibarca istemek (*please*).',
    'Bir’den beşe kadar sayıları söylemek ve tanımak.',
    'Altıdan ona kadar sayıları söylemek ve tanımak.',
    'Oda numarası gibi sayıları doğru sırayla söylemek: *Room two.*',
  ],
  konular: [],

  yokla: [
    { ders: 'a', soru: 'Bileti kibarca istiyorsun. Ne dersin?', secenekler: ['Ticket, hello.', 'Please, please.', 'Ticket, please.'], dogru: 2,
      aciklama: '*Ticket, please* istediğin şeyin adını söyler ve sonuna *please* ekler: nazik bir istek. *Ticket, hello* selamla karışık, bir şey istemeyen bir söz. *Please, please* ise istenen şeyi söylemez.' },
    { ders: 'b', soru: 'One, two, ----, four, five.', secenekler: ['six', 'three', 'ten'], dogru: 1,
      aciklama: 'İkiden sonra üç, dörtten önce üç gelir: *three*. *Six* ve *ten* bu sıraya uymaz.' },
    { ders: 'c', soru: 'Hangi sözcük 8 demektir?', secenekler: ['seven', 'nine', 'eight'], dogru: 2,
      aciklama: '8 = *eight*. *Seven* 7, *nine* 9 demektir.' },
    { ders: 'd', soru: 'Kapıdaki plakada 3 yazıyor. İngilizcesi?', secenekler: ['Room three.', 'Three room.', 'Room, three, please, three.'], dogru: 0,
      aciklama: 'Oda numarası İngilizcede *Room* + sayı diye söylenir: *Room three*. Türkçeye benzetip sayıyı öne alırsan (*Three room*) cümle bozulur; üçüncüsü ise gereksiz tekrar ve yığılmadır.' },
  ],

  dersler: [
    {
      id: 'a', baslik: 'Hello ve please', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: '**Hello** “merhaba” demektir. Günün her saatinde, tanıdığına da tanımadığına da söyleyebilirsin; havalimanında memura da, kapıda ev sahibine de. **Please** “lütfen” demektir. İstediğin şeyin adını söyler, cümlenin sonuna *please* eklersin. Böylece kısa bir söz bile kibar olur. Bu iki sözcük, yeni bir ülkede en çok işine yarayacak ilk iki sözcüktür.' },
        { tur: 'ornekler', liste: [
          { en: '==Hello.==', tr: 'Merhaba.' },
          { en: 'Passport, ==please.==', tr: 'Pasaport, lütfen.' },
          { en: 'Key, ==please.==', tr: 'Anahtar, lütfen.' },
          { en: '==Hello.== Ticket, please.', tr: 'Merhaba. Bilet, lütfen.' },
        ] },
        { tur: 'turkce', metin: 'Türkçede “lütfen” çoğu zaman başa gelir: “Lütfen pasaportunuzu verin.” İngilizcede *please* en çok sona gelir: *Passport, please.* Başa koymak da yanlış değildir, ama başlangıçta cümlenin sonuna koymayı alışkanlık yap; bu hem kısa hem doğal.' },
        { tur: 'dene', soru: 'Ev sahibinden anahtarı kibarca istiyorsun. Hangisini söylersin?', secenekler: ['Key, hello.', 'Key, please.', 'Key, key.'], dogru: 1,
          aciklama: '*Key, please* hem istediğin şeyi söyler hem de nazik bir istektir. *Key, hello* selamdır, bir şey istemez. *Key, key* sadece tekrardır.' },
        { tur: 'duy', durak: 'varis', sayfa: 15 },
      ],
    },
    {
      id: 'b', baslik: 'Sayılar 1–5', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'İlk beş sayıyı öğren: **one, two, three, four, five**. Bunlar sayıların temelidir; bilet, oda, saat, fiyat hepsinde karşına çıkacak. Sayılar kısadır, ama bir yerine dikkat et: **three** sözcüğündeki *th* sesinde dilin ucu dişlerin arasındadır; Türkçede böyle bir ses yoktur, o yüzden “tri” gibi söylenmez. Önce yavaş söyle, sonra hızlan.' },
        { tur: 'tablo', baslik: 'Bir’den beşe', sutunlar: ['Sayı', 'İngilizce', 'Okunuşa yardım'], satirlar: [
          ['1', '*one*', '“wan” (v değil, w)'],
          ['2', '*two*', '“tu”'],
          ['3', '*three*', 'dil dişlerin arasında + r'],
          ['4', '*four*', '“for”'],
          ['5', '*five*', '“fayv”'],
        ] },
        { tur: 'ornekler', liste: [
          { en: 'Room ==one.==', tr: 'Bir numaralı oda.' },
          { en: 'Room ==two.==', tr: 'İki numaralı oda.' },
          { en: 'Room ==three.==', tr: 'Üç numaralı oda.' },
          { en: 'Room ==five.==', tr: 'Beş numaralı oda.' },
        ] },
        { tur: 'dene', soru: 'Kapıdaki plakada 4 yazıyor. Hangi sözcüğü söylersin? Room ----.', secenekler: ['three', 'five', 'four'], dogru: 2,
          aciklama: '4 = *four*. *Three* 3, *five* 5 demektir.' },
        { tur: 'duy', durak: 'varis', sayfa: 26 },
      ],
    },
    {
      id: 'c', baslik: 'Sayılar 6–10', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Şimdi altıdan ona: **six, seven, eight, nine, ten**. Bunları da bir sıra halinde ezberle; tek tek değil, “six, seven, eight...” diye. Bir şeye dikkat: **eight** yazıldığı gibi okunmaz, “eyt” gibi söylenir. **Nine** “nayn”, **ten** “ten”dir. Sayıları sırayla söylemek bir tekerleme gibi akılda kalır. Yolculuk’ta bu beş sayı ayrı sayfalarda geçer; bağlantı ilk sayfaya, *Six*’e gider.' },
        { tur: 'tablo', baslik: 'Altıdan ona', sutunlar: ['Sayı', 'İngilizce', 'Okunuşa yardım'], satirlar: [
          ['6', '*six*', '“siks”'],
          ['7', '*seven*', '“sevın”'],
          ['8', '*eight*', '“eyt”'],
          ['9', '*nine*', '“nayn”'],
          ['10', '*ten*', '“ten”'],
        ] },
        { tur: 'ornekler', liste: [
          { en: 'Room ==six.==', tr: 'Altı numaralı oda.' },
          { en: 'Room ==eight==, please.', tr: 'Sekiz numaralı oda, lütfen.' },
          { en: 'Room ==ten.==', tr: 'On numaralı oda.' },
        ] },
        { tur: 'dogruMu', cumle: 'Nine, 10 demektir.', dogru: false, duzeltme: 'Nine, 9 demektir; 10 *ten*’dir.',
          aciklama: '*Nine* = 9 ve *ten* = 10. Dokuz ile on sık karıştırılır; sırayı söyleyerek ayır: eight, nine, ten.' },
        { tur: 'duy', durak: 'is', sayfa: 20 },
      ],
    },
    {
      id: 'd', baslik: 'Sayıları söylemek', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Sayıyı gündelik hayatta iki biçimde kullanırsın. Biri **numara**: oda numarası, bilet numarası. Bu durumda önce şeyin adı, sonra sayı gelir: **Room two**. Öbürü **adet**: kaç tane olduğunu söylersin. Bu durumda önce sayı, sonra şey gelir: **two hammers** (iki çekiç). Türkçede ikisinde de sayı öne gelir (“iki çekiç”, “iki numaralı oda”); İngilizcede ise numara sona gider. Adette çoğul -s ayrı bir konudur; şimdilik yalnızca sırayı gör.' },
        { tur: 'ornekler', liste: [
          { en: '==Room two.==', tr: 'İki numaralı oda.', not: 'Numara: ad önce, sayı sonra.' },
          { en: '==Two== hammers.', tr: 'İki çekiç.', not: 'Adet: sayı önce, ad sonra; çoğul -s ayrı konu.' },
          { en: 'Room ==nine.==', tr: 'Dokuz numaralı oda.' },
        ] },
        { tur: 'dene', soru: 'Ev sahibi “Room eight.” diyor. Hangi kapıya gidersin?', secenekler: ['6', '8', '10'], dogru: 1,
          aciklama: '*Room eight* sekiz numaralı odadır: *eight* = 8. *Six* 6, *ten* 10 demektir.' },
        { tur: 'dogruMu', cumle: 'Room seven.', dogru: true,
          aciklama: 'Doğru. Numara söylerken önce *Room*, sonra sayı gelir; *seven* 7’dir.' },
        { tur: 'duy', durak: 'barinma', sayfa: 4 },
      ],
    },
  ],

  ozet: {
    maddeler: [
      '**Hello** merhaba, **please** lütfen demektir. *Please* çoğunlukla cümlenin sonuna gelir: *Key, please.*',
      'Sayılar 1–5: *one, two, three, four, five*. *Three*’de *th* sesinde dil dişlerin arasındadır.',
      'Sayılar 6–10: *six, seven, eight, nine, ten*. *Eight* “eyt” diye söylenir.',
      'Numara için önce ad, sonra sayı: *Room two*. Adet için önce sayı, sonra ad: *two hammers*.',
    ],
    tablo: { sutunlar: ['Sayı', 'İngilizce', 'Sayı', 'İngilizce'], satirlar: [
      ['1', '*one*', '6', '*six*'],
      ['2', '*two*', '7', '*seven*'],
      ['3', '*three*', '8', '*eight*'],
      ['4', '*four*', '9', '*nine*'],
      ['5', '*five*', '10', '*ten*'],
    ] },
  },
};
