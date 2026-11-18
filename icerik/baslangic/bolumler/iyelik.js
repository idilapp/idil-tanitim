// Başlangıç Kitabı · Bölüm 5: My, your ve ötekileri (taslak, 18 Kasım 2026). Kurallar: ../README.md. Bütün metin özgündür.
// Duy hedefleri: barinma 14 "My key. Your key." · barinma 17 "Room two. Your room." (his/her/our/their Yolculuk'ta henüz yok; yalnız your) ·
// barinma 12 "My key." (Whose? ve 's Yolculuk'ta henüz yok; sahiplik kalıbı olarak my).
export default {
  id: 'iyelik',
  no: 5,
  title: 'My, your ve ötekileri',
  en: 'Possessive adjectives',
  seviye: 'A1',
  sure: 12,
  durum: 'taslak',
  hedefler: [
    '*My* ve *your* ile “benim, senin” demek.',
    '*His, her, our, their* ile başkasının şeyinden söz etmek.',
    '*Whose ...?* ile “kimin?” diye sormak ve *Ali’s key* gibi sahipliği söylemek.',
  ],
  konular: [],

  yokla: [
    { ders: 'a', soru: 'Ev sahibi anahtarı gösterip “senin anahtarın” diyor. Hangisi?', secenekler: ['your key', 'my key', 'a your key'], dogru: 0,
      aciklama: '“Senin” karşındakine aittir: *your key*. *My* “benim” demektir. *A your key* de yanlıştır: iyelik sözcüğüyle *a* birlikte kullanılmaz.' },
    { ders: 'b', soru: 'Ayşe’nin odası iki numara. ---- room is two.', secenekler: ['His', 'Her', 'Our'], dogru: 1,
      aciklama: 'Oda bir kadına aittir: *her*. *His* erkek, *our* “bizim” demektir. Hangisini kullanacağın, nesneye değil sahibine bağlıdır.' },
    { ders: 'b', soru: 'Biz iki kişiyiz ve oda bizim. ---- room is here.', secenekler: ['Our', 'Your', 'Their'], dogru: 0,
      aciklama: 'Kendini de katan “biz”in odası: *our room*. *Your* karşındakilerin, *their* ise başkalarının odası olurdu.' },
    { ders: 'c', soru: 'Bu anahtar kimin? sorusu hangisi?', secenekler: ['Who key is this?', 'Whose is key this?', 'Whose key is this?'], dogru: 2,
      aciklama: '“Kimin?” diye *whose* sorar ve hemen ardından şey gelir: *Whose key is this?* *Who* “kim” demektir, sahiplik bildirmez.' },
  ],

  dersler: [
    {
      id: 'a', baslik: 'My ve your', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: '“Benim anahtarım” ve “senin anahtarın” demek için **my** ve **your** kullanırsın. **My** “benim”, **your** “senin ya da sizin” demektir. İkisi de ismin **önüne** gelir ve isimle birlikte tek bir öbek olur: **my key**, **your room**. Bu sözcüklerden sonra *a* ya da *an* gelmez: *my key* der, *a my key* demezsin. Çünkü “benim” zaten hangi anahtar olduğunu söyler.' },
        { tur: 'ornekler', liste: [
          { en: '==My== key.', tr: 'Benim anahtarım.' },
          { en: '==Your== key.', tr: 'Senin anahtarın.' },
          { en: 'Here is ==your== room.', tr: 'İşte senin odan.' },
          { en: 'Where is ==my== passport?', tr: 'Pasaportum nerede?' },
        ] },
        { tur: 'turkce', metin: 'Türkçede iyelik **ismin sonuna** eklenir: anahtar-**ım**, oda-**n**. İngilizcede ise isimden **önce** ayrı bir sözcük gelir: **my** key, **your** room. Eki aramayacaksın; iyelik sözcüğünü isimden önce koyman yeter.' },
        { tur: 'dogruMu', cumle: 'This is a my key.', dogru: false, duzeltme: 'This is ==my== key.',
          aciklama: '*My* hangi anahtar olduğunu zaten belirtir; yanında *a* gerekmez. Doğrusu *This is my key.*' },
        { tur: 'duy', durak: 'barinma', sayfa: 14 },
      ],
    },
    {
      id: 'b', baslik: 'His, her, our, their', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Başkalarının şeyleri için de benzer sözcükler vardır: **his** (onun, erkeğin), **her** (onun, kadının), **its** (onun, nesnenin), **our** (bizim), **their** (onların). Her biri isimden önce durur, *my* ve *your* gibi. Burada önemli olan iyelik sözcüğünü **sahibe** göre seçmendir; şeye değil: Ali’nin odası *his room*, Ayşe’nin odası *her room*. Türkçede “onun” için tek sözcük olduğu için bu ayrımı yapmak ilk başta zor gelebilir. Yolculuk’ta şimdilik yalnız *your*’u duydun; öteki sözcükler aynı kalıpta çalışır.' },
        { tur: 'tablo', baslik: 'İyelik sıfatları', sutunlar: ['Özne', 'İyelik', 'Örnek'], satirlar: [
          ['*I*', '*my*', '*my key*'],
          ['*you*', '*your*', '*your room*'],
          ['*he*', '*his*', '*his bag*'],
          ['*she*', '*her*', '*her ticket*'],
          ['*it*', '*its*', '*its door*'],
          ['*we*', '*our*', '*our room*'],
          ['*they*', '*their*', '*their keys*'],
        ] },
        { tur: 'ornekler', liste: [
          { en: 'Ali is here. ==His== room is two.', tr: 'Ali burada. Onun odası iki numara.' },
          { en: 'Ayşe is here. ==Her== key is red.', tr: 'Ayşe burada. Onun anahtarı kırmızı.' },
          { en: 'This is ==our== room.', tr: 'Bu bizim odamız.' },
          { en: 'Where is ==their== bag?', tr: 'Onların çantası nerede?' },
        ] },
        { tur: 'dikkat', yanlis: 'Ayşe is here. His key is red.', dogru: 'Ayşe is here. ==Her== key is red.', not: 'Sahip kadınsa *her*, erkekse *his*.' },
        { tur: 'ipucu', metin: '*Its* (onun) ile *it’s* (= it is) karıştırılır: *Its door is red.* ama *It’s a door.*' },
        { tur: 'dene', soru: 'Ali is here. ---- bag is red.', secenekler: ['Her', 'Their', 'His'], dogru: 2,
          aciklama: 'Sahip Ali, yani bir erkek: *his*. *Her* kadın için, *their* birden fazla kişi için kullanılır.' },
        { tur: 'duy', durak: 'barinma', sayfa: 17 },
      ],
    },
    {
      id: 'c', baslik: 'Whose? ve sahiplik', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Bir şeyin kime ait olduğunu sormak için **Whose** dersin: “kimin?” Kalıp: **Whose** + şey + **is this?** Cevap iyelik sözcüğüyle ya da kişinin adına **’s** ekleyerek verilir: *It is my key* ya da *It is Ali’s key.* Apostrof ve s (**’s**) “-in” ekinin işini yapar: *Ali’s key* “Ali’nin anahtarı”. Kısa cevap da olur: *It is Ali’s.* Dikkat: *’s* bazen *is* demektir (*It’s my key* = *It is my key*), bazen sahiplik (*Ali’s key*); anlamdan ayırırsın.' },
        { tur: 'ornekler', liste: [
          { en: '==Whose== key is this?', tr: 'Bu kimin anahtarı?' },
          { en: 'It is ==my== key.', tr: 'O benim anahtarım.' },
          { en: 'It is ==Ali’s== key.', tr: 'O Ali’nin anahtarı.' },
          { en: '==Whose== bag is that?', tr: 'Şu kimin çantası?' },
        ] },
        { tur: 'turkce', metin: 'Türkçede “Ali’nin anahtarı” iki ek taşır: Ali-**nin** anahtar-**ı**. İngilizcede tek ek yeter: Ali**’s** key. Önce sahip, sonra eşya gelir, sıra Türkçeyle aynıdır.' },
        { tur: 'dene', soru: 'Bu çanta kimin? ---- bag is this?', secenekler: ['Whose', 'Who', 'Who is'], dogru: 0,
          aciklama: '“Kimin?” diye *whose* sorar. *Who* “kim” demektir; sahiplik bildirmez, *Who is* de bu yapıya uymaz.' },
        { tur: 'metin', metin: 'Not: *Whose* ve *’s* Yolculuk’ta geçmez; orada yalnız *My key.* gibi iyelik sözcüğünü duyarsın.' },
        { tur: 'duy', durak: 'barinma', sayfa: 12 },
      ],
    },
  ],

  ozet: {
    maddeler: [
      '**My** (benim) ve **your** (senin) isimden önce gelir: *my key, your room*. Yanlarına *a/an* konmaz.',
      'Sahibe göre seç: **his** (erkek), **her** (kadın), **its** (nesne), **our** (bizim), **their** (onların).',
      '**Whose ...?** “kimin?” demektir: *Whose key is this?* Cevap: *It is my key* ya da *It is Ali’s key.*',
      'Kişi adına **’s** eklenirse sahiplik olur: *Ali’s key* = Ali’nin anahtarı.',
    ],
    tablo: { sutunlar: ['Özne', 'İyelik'], satirlar: [
      ['*I / you*', '*my / your*'],
      ['*he / she / it*', '*his / her / its*'],
      ['*we / they*', '*our / their*'],
    ] },
  },
};
