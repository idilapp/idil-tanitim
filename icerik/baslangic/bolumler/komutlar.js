// Başlangıç Kitabı · Bölüm 8: Komutlar (taslak, 18 Kasım 2026). Kurallar: ../README.md. Bütün metin özgündür.
// Duy hedefleri: barinma 19 "Open." · varis 15 "Passport, please." (please ile tam komut Yolculuk'ta henüz yok; please'li istek) ·
// barinma 21 "Close." (Don't Yolculuk'ta henüz yok; yakını karşıtı olan komut) · is 7 "Give me the drill."
export default {
  id: 'komutlar',
  no: 8,
  title: 'Komutlar',
  en: 'Imperatives',
  seviye: 'A1',
  sure: 16,
  durum: 'taslak',
  hedefler: [
    'Fiilin yalın hâliyle komut vermek: *Open the door.*',
    '*Please* ile nazik istek yapmak ve yerini bilmek.',
    '*Don’t* ile “yapma” demek.',
    '*Give me* ve *Help me* ile bir şey istemek.',
  ],
  konular: [],

  yokla: [
    { ders: 'a', soru: 'Ev sahibi sana “Anahtarı al.” diyor. Hangisini söyler?', secenekler: ['Take the key.', 'Takes the key.', 'You takes the key.'], dogru: 0,
      aciklama: 'Komutta fiil yalın hâlinde durur, ek almaz: *Take the key.* *Takes* üçüncü kişi içindir; *You takes* ise hem yanlış ek hem gereksiz özne taşır.' },
    { ders: 'b', soru: 'Pencereyi kapatmanı rica ediyorsun. Hangisi doğru?', secenekler: ['Close the please window.', 'Please the window close.', 'Please close the window.'], dogru: 2,
      aciklama: '*Please* ya başa ya sona gelir: *Please close the window.* ya da *Close the window, please.* Öteki iki seçenekte sıra bozulmuştur.' },
    { ders: 'c', soru: 'Çekicin ağır; arkadaşına “Onu alma.” diyorsun.', secenekler: ['Not take it.', 'Don’t take it.', 'Don’t takes it.'], dogru: 1,
      aciklama: 'Olumsuz komut *Don’t* + yalın fiil ile yapılır: *Don’t take it.* *Not take* ve *Don’t takes* bu kalıba uymaz.' },
    { ders: 'd', soru: 'Ustabaşından matkabı vermesini istiyorsun. Ne dersin?', secenekler: ['Give I the drill.', 'Give my the drill.', 'Give me the drill.'], dogru: 2,
      aciklama: '“Bana” için *me* gelir: *Give me the drill.* *I* özne olarak kullanılır; *my* ise isimden önce gelen iyelik sözcüğüdür.' },
  ],

  dersler: [
    {
      id: 'a', baslik: 'Open, close, take, give', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Ev sahibi sana “Open.” der; sen kapıyı açarsın. Bu cümleye **komut** (*imperative*) denir. Türkçede “aç!” der gibi, İngilizcede de **fiilin yalın hâli** tek başına cümle olur: *Open.* *Close.* *Take.* Özne söylenmez; zaten karşındaki kişiye konuşursun. Fiil ek almaz; bir kişiye de birçok kişiye de aynı: *Take the key.* Sonuna bir nesne ekleyebilirsin: *Open the door.* Söylerken fiili net söyle; *open* “opın”, *close* “klouz” gibi.' },
        { tur: 'tablo', baslik: 'Dört sık komut', sutunlar: ['Komut', 'Anlamı'], satirlar: [
          ['*Open the door.*', 'Kapıyı aç.'],
          ['*Close the window.*', 'Pencereyi kapat.'],
          ['*Take the key.*', 'Anahtarı al.'],
          ['*Give me the key.*', 'Bana anahtarı ver.'],
        ] },
        { tur: 'ornekler', liste: [
          { en: '==Open== the window.', tr: 'Pencereyi aç.' },
          { en: '==Close== the door.', tr: 'Kapıyı kapat.' },
          { en: '==Take== the hammer.', tr: 'Çekici al.' },
          { en: '==Take== the red box.', tr: 'Kırmızı kutuyu al.' },
        ] },
        { tur: 'dogruMu', cumle: 'Opens the door. (Komut olarak söylüyorsun.)', dogru: false, duzeltme: '==Open== the door.',
          aciklama: 'Komutta fiil yalın hâlinde durur: *Open the door.* *Opens* üçüncü kişinin yaptığı işi anlatır, komut olarak kullanılmaz.' },
        { tur: 'duy', durak: 'barinma', sayfa: 19 },
      ],
    },
    {
      id: 'b', baslik: 'Please ile istek', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Komut tek başına biraz sert gelebilir. Nazik olmak için **please** (lütfen) eklersin. Yeri iki türlüdür: **başa** ya da **sona**. Sona gelirse önüne virgül konur: *Close the window, please.* *Please* fiil ile nesnenin arasına girmez. Varış durağında bunu bir isimle duydun: *Passport, please.* Tam komutla (*Please take the key.*) Yolculuk’ta henüz geçmiyor; yakını bu sahne.' },
        { tur: 'ornekler', liste: [
          { en: '==Please== open the door.', tr: 'Lütfen kapıyı aç.' },
          { en: 'Close the window, ==please==.', tr: 'Pencereyi kapat, lütfen.' },
          { en: '==Please== take the key.', tr: 'Lütfen anahtarı al.' },
          { en: 'Give me the box, ==please==.', tr: 'Bana kutuyu ver, lütfen.' },
        ] },
        { tur: 'hataBul', parcalar: ['Please', 'closes', 'the window.'], yanlis: 1,
          duzeltme: 'Please ==close== the window.',
          aciklama: 'Komutta fiil yalın hâlinde durur: *close*. *Closes* yanlıştır. *Please* ve *the window* doğrudur.' },
        { tur: 'duy', durak: 'varis', sayfa: 15 },
      ],
    },
    {
      id: 'c', baslik: 'Don’t ...', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: '“Yapma” demek için komutun başına **don’t** (= *do not*) koyarsın; fiil yalın kalır: *Don’t open the door.* Türkçede olumsuzluk fiilin içine girer (aç → açma); İngilizcede ise **başa** bir sözcük eklersin. Bu yapı Yolculuk’ta henüz geçmiyor; yakını *Open.* ve *Close.* gibi karşıt komutlar.' },
        { tur: 'turkce', metin: 'Türkçe: “aç” → “açma”; fiilin sonuna -ma eklenir. İngilizce: *open* → *don’t open*; fiil değişmez, önüne *don’t* gelir.' },
        { tur: 'ornekler', liste: [
          { en: '==Don’t open== the door.', tr: 'Kapıyı açma.' },
          { en: '==Don’t close== the window.', tr: 'Pencereyi kapatma.' },
          { en: '==Don’t take== the hammer.', tr: 'Çekici alma.' },
        ] },
        { tur: 'dene', soru: 'Hangisi doğru? “Pencereyi açma.”', secenekler: ['Not open the window.', 'Don’t open the window.', 'Don’t opens the window.'], dogru: 1,
          aciklama: 'Olumsuz komut *Don’t* + yalın fiil: *Don’t open the window.* *Not open* bu kalıpta kullanılmaz; *Don’t opens* ise fiile yanlış ek getirir.' },
        { tur: 'duy', durak: 'barinma', sayfa: 21 },
      ],
    },
    {
      id: 'd', baslik: 'Give me ve help me', sure: 4, konular: [],
      bloklar: [
        { tur: 'hatirlat', bolum: 'iyelik', ders: 'a', metin: '*My* isimden önce gelen iyelik sözcüğüdür; *me* ise “bana, beni” anlamında fiilden sonra gelir.' },
        { tur: 'metin', metin: 'Birinden bir şey ya da yardım isterken komutun içine **me** (“bana, beni”) koyarsın: **Give me** the drill. **Help me.** *Me* fiilin hemen arkasından gelir. *Please* eklersen nazikleşir: *Help me, please.* *Me* yerine *I* demezsin; *I* “ben” diye özne olur, komutta özne söylenmez. İş yerinde en sık duyacağın ikisi bunlardır.' },
        { tur: 'ornekler', liste: [
          { en: 'Give ==me== the drill.', tr: 'Bana matkabı ver.' },
          { en: 'Give ==me== the key, please.', tr: 'Bana anahtarı ver, lütfen.' },
          { en: 'Help ==me==.', tr: 'Bana yardım et.' },
          { en: 'Help ==me==, please.', tr: 'Bana yardım et, lütfen.' },
        ] },
        { tur: 'dene', soru: 'Yardım istiyorsun. “Bana yardım et.” Help ----.', secenekler: ['my', 'me', 'I'], dogru: 1,
          aciklama: 'Fiilden sonra “bana” için *me* gelir: *Help me.* *My* bir isimle gelir (*my key*); *I* özne olur.' },
        { tur: 'duy', durak: 'is', sayfa: 7 },
      ],
    },
  ],

  ozet: {
    maddeler: [
      '**Komut**: fiilin yalın hâli, özne yok: *Open the door.*',
      '**Please** başa ya da sona gelir: *Please close the window.* / *Close the window, please.*',
      '**Don’t** + yalın fiil: “yapma”: *Don’t take the hammer.*',
      '**Give me** ve **Help me**: “bana ver”, “bana yardım et”.',
    ],
    tablo: { sutunlar: ['Ne yapmak istiyorsun?', 'Kalıp'], satirlar: [
      ['yap', '*Open the door.*'],
      ['nazikçe yap', '*Please open the door.*'],
      ['yapma', '*Don’t open the door.*'],
      ['bana ver', '*Give me the key.*'],
    ] },
  },
};
