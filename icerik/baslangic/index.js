// iDil Başlangıç Kitabı A1 (taslak, 18 Kasım 2026): "İki Kanat" / Yolculuk'un dört durağının (Varış, Barınma, Pazar, İş) dil bilgisi.
// Yöntem ve kurallar: README.md. Plan: ../filiz/taslak/durak-taslaklari.md §6. Bütün metin ve örnekler özgündür.
// Yapı icerik/kitap/index.js ile aynıdır; bölüm numarası buradan gelir. Yazılan bölüm bolumler/ klasöründen gelir;
// yazılmamış bölüm yalnız künyesiyle ve ders başlıklarıyla durur (ekranda "yazılacak"). Bölümler sonraki görevlerde yazılır.
// Her dersin sonunda ilgili Yolculuk sayfasına `duy` bloğu bağlanır; `durak` alanı Yolculuk durak kimlikleridir (../filiz/index.js).
//
// Bölüm eklemek: bolumler/<kimlik>.js yazılır, aşağıda import edilip YAZILAN listesine konur.
import selamSayilar from './bolumler/selam-sayilar.js';
import aAn from './bolumler/a-an.js';
import thisThat from './bolumler/this-that.js';
import be from './bolumler/be.js';
import iyelik from './bolumler/iyelik.js';
import cogul from './bolumler/cogul.js';
import the from './bolumler/the.js';
import komutlar from './bolumler/komutlar.js';
import can from './bolumler/can.js';
import saat from './bolumler/saat.js';
import renkSifat from './bolumler/renk-sifat.js';
import soruKaliplari from './bolumler/soru-kaliplari.js';

const YAZILAN = new Map([selamSayilar, aAn, thisThat, be, iyelik, cogul, the, komutlar, can, saat, renkSifat, soruKaliplari].map(b => [b.id, b]));

const KISIMLAR = [
  { id: 'I', ad: 'İlk kelimeler', bolumler: [
    { no: 1, id: 'selam-sayilar', title: 'Selam ve sayılar', en: 'Greetings and numbers', seviye: 'A1', duraklar: ['varis', 'barinma', 'is'],
      kapsam: 'Selamlaşma, nezaket, sayılar 1–10.',
      dersler: ['Hello ve please', 'Sayılar 1–5', 'Sayılar 6–10', 'Sayıları söylemek'] },
    { no: 2, id: 'a-an', title: 'A ve an', en: 'A and an', seviye: 'A1', duraklar: ['varis', 'pazar'],
      kapsam: 'Tek nesne için a ve an.',
      dersler: ['a nerede, an nerede', 'Sesle belirlenir', 'Sayılabilir tek nesne'] },
    { no: 3, id: 'this-that', title: 'This ve that, here ve there', en: 'This, that, here and there', seviye: 'A1', duraklar: ['varis', 'barinma'],
      kapsam: 'Yakındaki ve uzaktaki şey.',
      dersler: ['This is ...', 'That is ...', 'Here is ...'] },
  ] },
  { id: 'II', ad: 'Olmak ve sahip olmak', bolumler: [
    { no: 4, id: 'be', title: 'Be: is, am, are', en: 'The verb be', seviye: 'A1', duraklar: ['varis', 'barinma', 'is'],
      kapsam: 'Olmak fiili, soru ve olumsuz.',
      dersler: ['This is ve it is', 'I am ve you are', 'Where is ...?', 'Is ... ? sorusu'] },
    { no: 5, id: 'iyelik', title: 'My, your ve ötekileri', en: 'Possessive adjectives', seviye: 'A1', duraklar: ['barinma'],
      kapsam: 'İyelik sıfatları.',
      dersler: ['My ve your', 'His, her, our, their', 'Whose? ve sahiplik'] },
    { no: 6, id: 'cogul', title: 'Çoğul -s', en: 'Plural -s', seviye: 'A1', duraklar: ['pazar', 'is'],
      kapsam: 'Düzenli çoğul ve sık düzensizler.',
      dersler: ['-s, -es, -ies', 'Düzensizler', 'Sayı + çoğul isim'] },
    { no: 7, id: 'the', title: 'The', en: 'The', seviye: 'A1', duraklar: ['pazar', 'is'],
      kapsam: 'Belirli ve belirsiz isim.',
      dersler: ['the ne zaman', 'a ya da the', 'Tekrar ve belirlilik'] },
  ] },
  { id: 'III', ad: 'Yapmak ve sormak', bolumler: [
    { no: 8, id: 'komutlar', title: 'Komutlar', en: 'Imperatives', seviye: 'A1', duraklar: ['barinma', 'pazar', 'is'],
      kapsam: 'Emir kipi ve nazik istek: take, give, open.',
      dersler: ['Open, close, take, give', 'Please ile istek', 'Don\'t ...', 'Give me ve help me'] },
    { no: 9, id: 'can', title: 'Can', en: 'Can', seviye: 'A1', duraklar: ['is'],
      kapsam: 'Yapabilmek ve rica.',
      dersler: ['I can', 'Can you ...?', 'Cannot', 'Can ile rica ve izin'] },
    { no: 10, id: 'saat', title: 'Saat', en: 'Telling the time', seviye: 'A1', duraklar: ['is'],
      kapsam: 'Saat sorma ve söyleme.',
      dersler: ['It is eight o\'clock', 'Yarım, çeyrek, geçe, kala', 'What time is it?'] },
    { no: 11, id: 'renk-sifat', title: 'Renkler ve sıfat', en: 'Colours and adjectives', seviye: 'A1', duraklar: ['pazar'],
      kapsam: 'Renk; sıfat isimden önce gelir.',
      dersler: ['Renkler', 'Sıfat ve isim sırası', 'Soru: What colour?'] },
    { no: 12, id: 'soru-kaliplari', title: 'Soru kalıpları', en: 'Question words', seviye: 'A1', duraklar: ['varis', 'pazar'],
      kapsam: 'Where, how much, who, what.',
      dersler: ['Where?', 'How much?', 'What ve who', 'Cevap verme'] },
  ] },
];

const bolumler = KISIMLAR.flatMap(k => k.bolumler.map(p => {
  const y = YAZILAN.get(p.id);
  return y ? { ...y, no: p.no, kisim: k.id } : { ...p, kisim: k.id, durum: 'plan', dersler: [] };
}));

export const BASLANGIC = {
  ad: 'Başlangıç Kitabı',
  seviye: 'A1',
  kisimlar: KISIMLAR.map(k => ({ id: k.id, ad: k.ad, bolumler: k.bolumler.map(b => b.id) })),
  bolumler,
  // Planlanan ders başlıkları: yazılmamış bölümün dersleri (bolumler[i].dersler boş olduğu için) buradan okunur.
  plan: Object.fromEntries(KISIMLAR.flatMap(k => k.bolumler.map(b => [b.id, b.dersler]))),
};
