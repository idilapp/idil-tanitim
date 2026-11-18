// Başlangıç Kitabı · Bölüm 12: Soru kalıpları (taslak, 18 Kasım 2026). Kurallar: ../README.md. Bütün metin özgündür.
// Duy hedefleri: varis 18 "Where?" · varis 26 "One, two, three, four, five." (How many? sorusu Yolculuk'ta henüz yok; sayma) ·
// varis 11 "This is a bag." (What ve who Yolculuk'ta henüz yok; What is this? sorusunun cevabı) · varis 19 "Here." (Where? sorusunun cevabı)
// Yeni sözcükler (Yolculuk dışı): where is/are, how much, how many, what, who, euro; derste Türkçesi verilir.
export default {
  id: 'soru-kaliplari',
  no: 12,
  title: 'Soru kalıpları',
  en: 'Question words',
  seviye: 'A1',
  sure: 17,
  durum: 'taslak',
  hedefler: [
    '*Where is ...?* ile bir şeyin yerini sormak.',
    '*How much* (fiyat ya da miktar) ile *how many* (sayı) arasındaki farkı bilmek.',
    '*What* ve *who* ile “ne?” ve “kim?” diye sormak.',
    'Soruya sorunun sorduğu bilgiyle cevap vermek.',
  ],
  konular: [],

  yokla: [
    { ders: 'a', soru: 'Anahtarı bulamıyorsun. Ne sorarsın?', secenekler: ['What is the key?', 'Where is the key?', 'Who is the key?'], dogru: 1,
      aciklama: '*Where* yer sorar: *Where is the key?* *What* şey, *who* kişi sorar.' },
    { ders: 'b', soru: 'Biletin fiyatını soruyorsun.', secenekler: ['How many is the ticket?', 'What much is the ticket?', 'How much is the ticket?'], dogru: 2,
      aciklama: 'Fiyat için *how much* kullanılır: *How much is the ticket?* *How many* sayı sorar ve çoğul isimle gelir.' },
    { ders: 'c', soru: 'Masada bir şey var; ne olduğunu soruyorsun.', secenekler: ['Who is this?', 'What is this?', 'Where is this?'], dogru: 1,
      aciklama: 'Şeyi *what* ile sorarsın: *What is this?* *Who* kişi, *where* yer sorar.' },
    { ders: 'd', soru: '“How many bags?” sorusunun cevabı hangisi?', secenekler: ['Here.', 'Ali.', 'Three.'], dogru: 2,
      aciklama: '*How many* sayı sorar; cevap sayıdır: *Three.* *Here* yer, *Ali* kişi bildirir.' },
  ],

  dersler: [
    {
      id: 'a', baslik: 'Where?', sure: 4, konular: [],
      bloklar: [
        { tur: 'hatirlat', bolum: 'be', ders: 'c', metin: '*Where is ...?* sorusunu *be* fiilinden hatırlıyorsun.' },
        { tur: 'metin', metin: 'Bir şeyin **yerini** sormak için **where** (nerede) dersin. Soru sözcüğü başa gelir, ardından *is* ya da *are*, sonra şey: *Where is the key?* Şey çoğulsa *are* gelir: *Where are the keys?* Cevap bir yer ya da *here* (burada), *there* (orada) olur. Varış durağında memur sana “Where?” diye sorar; sen de “Here.” dersin.' },
        { tur: 'ornekler', liste: [
          { en: '==Where is== the key?', tr: 'Anahtar nerede?' },
          { en: '==Where is== my passport?', tr: 'Pasaportum nerede?' },
          { en: '==Where are== the keys?', tr: 'Anahtarlar nerede?' },
          { en: '==Where is== the hammer? It’s here.', tr: 'Çekiç nerede? Burada.' },
        ] },
        { tur: 'dene', soru: 'Üç bilet var. Nerede olduklarını soruyorsun. Where ---- the tickets?', secenekler: ['are', 'is', 'am'], dogru: 0,
          aciklama: '*Tickets* çoğuldur; çoğul isimle *are* gelir: *Where are the tickets?* *Is* tek şeyle, *am* yalnız *I* ile kullanılır.' },
        { tur: 'duy', durak: 'varis', sayfa: 18 },
      ],
    },
    {
      id: 'b', baslik: 'How much? ve how many?', sure: 5, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'İki kalıp “kaç?” anlamına gelir; ikisini ayırmak lazım. **How much** fiyat ya da sayılamayan bir şeyin miktarını sorar: *How much is the ticket?* Cevap para olur: *It’s five euros.* *How much water?* ise “ne kadar su?” demektir. **How many** sayılabilir şeylerin sayısını sorar ve isim çoğul olur: *How many bags?* Cevap sayıdır: *Three.* Kısaca: fiyat ya da miktar → *how much*, sayılabilir şey → *how many* + çoğul isim. *How much* ve *how many* Yolculuk’ta henüz geçmiyor; sayıları ise Varış’ta duydun.' },
        { tur: 'tablo', baslik: 'İki “kaç”', sutunlar: ['Soru', 'Ne sorar?', 'Cevap'], satirlar: [
          ['*How much is the ticket?*', 'fiyat', '*It’s five euros.*'],
          ['*How much water?*', 'miktar (sayılamayan)', '*A lot.*'],
          ['*How many bags?*', 'sayı (sayılabilir)', '*Three.*'],
        ] },
        { tur: 'ornekler', liste: [
          { en: '==How much== is the key?', tr: 'Anahtar kaç para?' },
          { en: '==How much== are the apples?', tr: 'Elmalar kaç para?' },
          { en: '==How much== water?', tr: 'Ne kadar su?' },
          { en: '==How many== bags?', tr: 'Kaç çanta?' },
          { en: '==How many== keys?', tr: 'Kaç anahtar?' },
        ] },
        { tur: 'dene', soru: 'Masada kutular var; sayısını soruyorsun. ---- boxes?', secenekler: ['How much', 'Where', 'How many'], dogru: 2,
          aciklama: 'Sayılabilir bir şeyin sayısını *how many* sorar: *How many boxes?* *How much* fiyat içindir; *where* yer sorar.' },
        { tur: 'dogruMu', cumle: 'How much keys?', dogru: false, duzeltme: '==How many== keys?',
          aciklama: '*Key* sayılabilir bir şeydir; sayısını *how many* sorar ve isim çoğul olur: *How many keys?* *How much* fiyat ya da sayılamayan miktar içindir.' },
        { tur: 'duy', durak: 'varis', sayfa: 26 },
      ],
    },
    {
      id: 'c', baslik: 'What ve who', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: '**What** (ne) bir **şeyi**, **who** (kim) bir **kişiyi** sorar. *What is this?* *It’s a key.* *Who is he?* *He is Ali.* İkisinde de soru sözcüğü başta gelir, arkasından *is*. Kural şu: şeyi soruyorsan *what*, kişiyi soruyorsan *who*. *What is this?* (şey), *Who is this?* (kişi): sorulan şeye ya da kişiye göre seçersin, *this* ya da *it* gibi sözcüğe göre değil. Bu kalıplar Yolculuk’ta henüz geçmiyor; “What is this?” sorusunun cevabını ise *This is a bag.* sahnesinde duyarsın.' },
        { tur: 'ornekler', liste: [
          { en: '==What is== this?', tr: 'Bu ne?' },
          { en: '==What is== it? It’s a drill.', tr: 'O ne? Bir matkap.' },
          { en: '==Who is== he?', tr: 'O kim?' },
          { en: '==Who is== this? This is Ali.', tr: 'Bu kim? Bu Ali.' },
        ] },
        { tur: 'dene', soru: 'Kapıda Ayşe var. Kim olduğunu soruyorsun. ---- is she?', secenekler: ['What', 'Who', 'Where'], dogru: 1,
          aciklama: 'Kişi için *who* gelir: *Who is she?* *What* şey, *where* yer sorar.' },
        { tur: 'hataBul', parcalar: ['Who', 'is', 'this?', 'It’s a key.'], yanlis: 0,
          duzeltme: '==What== is this? It’s a key.',
          aciklama: 'Cevap bir şey (*a key*) olduğu için soru *what* ile sorulur: *What is this?* *Who* kişi sorardı.' },
        { tur: 'duy', durak: 'varis', sayfa: 11 },
      ],
    },
    {
      id: 'd', baslik: 'Cevap verme', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'İyi cevap, sorunun istediği bilgiyi verir. **Where?** → yer: *Here.* **How many?** → sayı: *Three.* **How much?** → fiyat: *Five euros.* **What?** → şey: *A key.* **Who?** → kişi: *Ali.* Cevap kısa olabilir; tam cümle şart değil. İstersen *It’s* ile de başlarsın: *It’s here.*' },
        { tur: 'tablo', baslik: 'Soru ve cevap', sutunlar: ['Soru', 'Cevap'], satirlar: [
          ['*Where is the key?*', '*Here.* / *It’s here.*'],
          ['*How many bags?*', '*Three.*'],
          ['*How much is it?*', '*Five euros.*'],
          ['*What is this?*', '*A key.*'],
          ['*Who is he?*', '*Ali.*'],
        ] },
        { tur: 'ornekler', liste: [
          { en: 'Where is the passport? ==Here.==', tr: 'Pasaport nerede? Burada.' },
          { en: 'How many keys? ==Two.==', tr: 'Kaç anahtar? İki.' },
          { en: 'What is this? ==A hammer.==', tr: 'Bu ne? Bir çekiç.' },
        ] },
        { tur: 'dene', soru: 'Where is the key? — ----', secenekler: ['Ali.', 'Three.', 'Here.'], dogru: 2,
          aciklama: '*Where* yer sorar; cevap yerdir: *Here.* *Ali* kişi, *three* sayı bildirir.' },
        { tur: 'dogruMu', cumle: 'How much is the key? — Three.', dogru: false, duzeltme: 'How much is the key? — ==Three euros.==',
          aciklama: '*How much* fiyat sorar; cevap para olur. *Three* tek başına sayı bildirir ve *How many ...?* sorusunun cevabıdır.' },
        { tur: 'duy', durak: 'varis', sayfa: 19 },
      ],
    },
  ],

  ozet: {
    maddeler: [
      '**Where** yer, **what** şey, **who** kişi sorar.',
      '**How much** fiyat ya da miktar sorar (*How much water?*); **how many** sayılabilir şeyin sayısını sorar ve çoğul isim ister.',
      'Cevap, sorunun istediği bilgiyi verir: *Here. / Three. / Five euros. / A key. / Ali.*',
    ],
    tablo: { sutunlar: ['Soru sözcüğü', 'Ne sorar?'], satirlar: [
      ['*where*', 'yer'],
      ['*what*', 'şey'],
      ['*who*', 'kişi'],
      ['*how much*', 'fiyat ya da miktar'],
      ['*how many*', 'sayı'],
    ] },
  },
};
