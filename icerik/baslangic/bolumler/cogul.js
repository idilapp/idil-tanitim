// Başlangıç Kitabı · Bölüm 6: Çoğul -s (taslak, 18 Kasım 2026). Kurallar: ../README.md. Bütün metin özgündür.
// Duy hedefleri: pazar 11 "Apples." · pazar 11 "Apples." (düzensiz çoğul Yolculuk'ta henüz yok; düzenli çoğulla karşılaştırma) · is 10 "Two hammers."
// Yeni sözcükler (Yolculuk dışı): bus, city, watch, man/men, woman/women, child/children, person/people; derste Türkçesi verilir.
export default {
  id: 'cogul',
  no: 6,
  title: 'Çoğul -s',
  en: 'Plural -s',
  seviye: 'A1',
  sure: 13,
  durum: 'taslak',
  hedefler: [
    'Birçok ismin çoğulunu *-s* ile yapmak: *bags, keys*.',
    '*-s*, *-es* ve *-ies* sonlarından hangisinin geleceğini ayırt etmek.',
    'Sık kullanılan dört düzensiz çoğulu bilmek: *men, women, children, people*.',
    'Sayıdan sonra ismi çoğul kullanmak: *two bags*.',
  ],
  konular: [],

  yokla: [
    { ders: 'a', soru: 'Bu odada iki ---- var.', secenekler: ['windows', 'windowes', 'windowies'], dogru: 0,
      aciklama: '*Window* sıradan bir isimdir; çoğulu *-s* ile yapılır: *windows*. *-es* *s, x, z, ch, sh* ile bitenlerde, *-ies* ise ünsüz + y sonundan sonra gelir.' },
    { ders: 'a', soru: 'Hangisi doğru?', secenekler: ['two boxs', 'two boxes', 'two boxies'], dogru: 1,
      aciklama: '*Box* *x* ile biter; çoğulu *-es* alır: *boxes*. *Boxs* söylenemez, *boxies* ise *y* sonundan sonra yapılan bir biçimdir.' },
    { ders: 'b', soru: 'Hangisi doğru?', secenekler: ['childs', 'children', 'childes'], dogru: 1,
      aciklama: '*Child*’ın çoğulu düzensizdir: *children*. Düzenli çoğul kuralı bunda işlemez.' },
    { ders: 'c', soru: 'Bu masada ---- var. (üç çanta)', secenekler: ['three bag', 'a three bags', 'three bags'], dogru: 2,
      aciklama: 'Bir’den çok şey için isim çoğul olur: *three bags*. *Three bag* çoğul eki eksik olduğu için yanlıştır; *a three bags* ise *a* yüzünden yanlıştır.' },
  ],

  dersler: [
    {
      id: 'a', baslik: '-s, -es, -ies', sure: 5, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Bir’den çok şeyden söz ederken ismin sonuna **-s** eklersin: *a bag* → *two bags*. Buna **çoğul** (*plural*) denir. Türkçede çoğul eki -ler/-lar’dır; İngilizcede tek ek vardır: -s. Bazı sözcüklerde kural biraz değişir. **s, x, z, ch, sh** ile biten isimler **-es** alır: *box → boxes*. **Ünsüz + y** ile biten isimlerde *y* düşer, **-ies** gelir: *city → cities*. **Ünlü + y** (*key*) sıradan kuralı izler: *key → keys*.' },
        { tur: 'tablo', baslik: 'Çoğulu nasıl yaparsın?', sutunlar: ['Sonu', 'Ne yaparsın?', 'Tek', 'Çoğul'], satirlar: [
          ['çoğu isim', '+ *-s*', '*bag, ticket, key*', '*bags, tickets, keys*'],
          ['*s, x, z, ch, sh*', '+ *-es*', '*box, bus, watch*', '*boxes, buses, watches*'],
          ['ünsüz + *y*', '*y* → *-ies*', '*city, baby*', '*cities, babies*'],
        ] },
        { tur: 'ornekler', liste: [
          { en: 'Two ==bags==, please.', tr: 'İki çanta, lütfen.' },
          { en: 'Three ==keys==.', tr: 'Üç anahtar.' },
          { en: 'Four ==boxes==.', tr: 'Dört kutu.' },
          { en: 'Five ==cities==.', tr: 'Beş şehir.' },
        ] },
        { tur: 'ipucu', metin: '*-es* ile biten çoğulda ek ayrı bir hece olur: *boxes* “boksiz” diye okunur; sonda ayrı bir hece vardır. *Knife → knives* gibi *-ves*’li çoğullar bu seviyenin dışındadır. Düzenli çoğulda -s sondan çıkan bir tıslama sesidir; *bags* “bägz”, *tickets* “tikıts” diye söylenir.' },
        { tur: 'hataBul', parcalar: ['Three', 'boxs,', 'please.'], yanlis: 1,
          duzeltme: 'Three ==boxes==, please.',
          aciklama: '*Box* *x* ile biter; çoğul eki *-es* olur: *boxes*. *Boxs* söylenemez. *Three* ve *please* doğrudur.' },
        { tur: 'dene', soru: 'Hangisi doğru? Two ----.', secenekler: ['keies', 'keys', 'keyes'], dogru: 1,
          aciklama: '*Key* ünlü + *y* ile biter; bu durumda *y* düşmez, sadece *-s* eklenir: *keys*. *Keies* ve *keyes* bu kurala uymaz.' },
        { tur: 'duy', durak: 'pazar', sayfa: 11 },
      ],
    },
    {
      id: 'b', baslik: 'Düzensizler', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Bazı çok kullanılan sözcüklerin çoğulu kurala uymaz. Bunları tek tek ezberlemelisin; ama sayıları azdır, dört tanesi gündelik konuşmada en çok karşına çıkar. **man → men** (erkek), **woman → women** (kadın), **child → children** (çocuk) ve **person → people** (kişi). *People* bir çoğuldur: *peoples* demezsin.' },
        { tur: 'tablo', baslik: 'Dört düzensiz çoğul', sutunlar: ['Tek', 'Çoğul', 'Anlamı'], satirlar: [
          ['*man*', '*men*', 'erkek'],
          ['*woman*', '*women*', 'kadın'],
          ['*child*', '*children*', 'çocuk'],
          ['*person*', '*people*', 'kişi'],
        ] },
        { tur: 'ornekler', liste: [
          { en: 'Two ==men== are here.', tr: 'Burada iki erkek var.' },
          { en: 'Three ==women== are here.', tr: 'Üç kadın burada.' },
          { en: 'Five ==children==.', tr: 'Beş çocuk.' },
          { en: 'Six ==people==.', tr: 'Altı kişi.' },
        ] },
        { tur: 'turkce', metin: 'Türkçede “kişi” sözcüğü sayıyla birlikte çoğul eki almaz: “altı kişi”. İngilizcede ise sayıdan sonra isim çoğul olur: *six people*; *person*’ın çoğulu da düzensizdir (*people*). Yani Türkçede sayıdan sonra çoğul eki yoktur, İngilizcede vardır.' },
        { tur: 'dogruMu', cumle: 'Two mans.', dogru: false, duzeltme: 'Two ==men==.',
          aciklama: '*Man*’in çoğulu düzensizdir: *men*. *Mans* diye bir çoğul yoktur.' },
        { tur: 'metin', metin: 'Not: bu düzensiz çoğullar Yolculuk’ta geçmez; orada yalnız düzenli *-s* çoğulunu (*Apples.*) duyarsın.' },
        { tur: 'duy', durak: 'pazar', sayfa: 11 },
      ],
    },
    {
      id: 'c', baslik: 'Sayı + çoğul isim', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Bir ile iki arasında bir sınır var: **one** ile tekil, **two** ve sonrasıyla çoğul. *One bag* ama *two bags*. Çoğul ek, sayıdan sonra **mutlaka** gelir; sayı yetmez. Türkçede “iki çanta” der, “iki çantalar” demeyiz; çünkü sayı çoğulu zaten söyler. İngilizcede ise isim sayıya uyar: **two bags**.' },
        { tur: 'ornekler', liste: [
          { en: '==One bag.==', tr: 'Bir çanta.' },
          { en: '==Two hammers.==', tr: 'İki çekiç.' },
          { en: '==Five keys.==', tr: 'Beş anahtar.' },
          { en: '==Ten boxes.==', tr: 'On kutu.' },
        ] },
        { tur: 'turkce', metin: 'Türkçe: “iki çanta” (ek yok). İngilizce: *two bags* (ek var). Sayıdan sonra çoğul eki koymak, Türkçe konuşanların ilk başta unuttuğu şeylerden biridir; *two bag* yazma.' },
        { tur: 'dikkat', yanlis: 'two bag', dogru: '==two bags==', not: '*Two* ve daha büyük sayıdan sonra isim çoğul olur.' },
        { tur: 'dene', soru: 'Masada dokuz anahtar var. Nine ----.', secenekler: ['key', 'keies', 'keys'], dogru: 2,
          aciklama: 'Sayı birden büyükse isim çoğul olur: *keys*. *Key* tekildir, *keies* ise yazım yanlışıdır (ünlü + *y*’de *-s* eklenir).' },
        { tur: 'duy', durak: 'is', sayfa: 10 },
      ],
    },
  ],

  ozet: {
    maddeler: [
      'Çoğul çoğu isimde **-s** ile yapılır: *bags, keys, tickets*.',
      '*s, x, z, ch, sh* ile biten isimler **-es** alır: *boxes*. Ünsüz + *y*: **-ies**: *cities*. Ünlü + *y*: sadece -s: *keys*.',
      'Dört sık düzensiz: *man → men, woman → women, child → children, person → people*.',
      'Sayı birden büyükse isim çoğul olur: *two bags*; *one bag*. İsim çoğul eki almadan sayıyla kalmaz.',
    ],
    tablo: { sutunlar: ['Tek', 'Çoğul'], satirlar: [
      ['*bag*', '*bags*'],
      ['*box*', '*boxes*'],
      ['*city*', '*cities*'],
      ['*man / woman*', '*men / women*'],
      ['*child / person*', '*children / people*'],
    ] },
  },
};
