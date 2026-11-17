// iDil Ders Kitabı (taslak, 14 Kasım 2026): YDS ve YÖKDİL için dil bilgisi ve sınav becerileri kitabı.
// Yöntem ve kurallar: README.md. Araştırma: arastirma-yabanci.md, arastirma-yds.md. Bütün metin ve örnekler özgündür.
// Kitap sırası aşağıdaki KISIMLAR'dır; bölüm numarası buradan gelir (bölüm dosyasındaki no'nun yerine geçer). Yazılan bölüm
// bolumler/ klasöründen gelir; yazılmamış bölüm yalnız künyesiyle ve kapsamıyla durur (ekranda "yazılacak").
// Sıra: Türkiye'deki YDS derslerinin ortak omurgası (arastirma-yds.md §4.2); derinlik iDil'in ÖSYM ağırlıklarından.
import zamanlar1 from './bolumler/01-zamanlar-1.js';
import kosul from './bolumler/10-kosul.js';
import baglayicilar from './bolumler/11-baglayicilar.js';
import b_zamanlar_2 from './bolumler/zamanlar-2.js';
import b_sifat_cumlecikleri from './bolumler/sifat-cumlecikleri.js';
import b_kipler from './bolumler/kipler.js';
import b_edilgen from './bolumler/edilgen.js';
import b_kisaltmalar from './bolumler/kisaltmalar.js';
import b_isim_cumlecikleri from './bolumler/isim-cumlecikleri.js';
import b_zarf_cumlecikleri from './bolumler/zarf-cumlecikleri.js';
import b_karsitlik from './bolumler/karsitlik.js';
import b_neden_sonuc from './bolumler/neden-sonuc.js';
import b_eslesik from './bolumler/eslesik.js';
import b_edatlar from './bolumler/edatlar.js';
import b_fiilimsiler from './bolumler/fiilimsiler.js';
import b_nicelik from './bolumler/nicelik.js';
import b_gonderim from './bolumler/gonderim.js';
import b_karsilastirma from './bolumler/karsilastirma.js';
import b_devrik from './bolumler/devrik.js';
import b_akademik from './bolumler/akademik.js';
import b_cumle_yapisi from './bolumler/cumle-yapisi.js';
import b_cumle_tamamlama from './bolumler/cumle-tamamlama.js';
import b_ceviri from './bolumler/ceviri.js';
import b_paragraf from './bolumler/paragraf.js';
import b_okuma from './bolumler/okuma.js';

const YAZILAN = new Map([b_okuma, b_paragraf, b_ceviri, b_cumle_tamamlama, b_cumle_yapisi, b_akademik, b_devrik, b_karsilastirma, b_gonderim, b_nicelik, b_fiilimsiler, b_edatlar, b_eslesik, b_neden_sonuc, b_karsitlik, b_zarf_cumlecikleri, b_isim_cumlecikleri, b_kisaltmalar, b_edilgen, b_kipler, b_sifat_cumlecikleri, b_zamanlar_2, zamanlar1, kosul, baglayicilar].map(b => [b.id, b]));

const KISIMLAR = [
  { id: 'I', ad: 'Cümle ve fiil', bolumler: [
    { no: 0, id: 'cumle-yapisi', title: 'Başlarken: cümlenin yapısı', en: 'Sentence structure: clauses and phrases',
      kapsam: 'Özne, yüklem, nesne; isim cümlesi ve fiil cümlesi; cümle (*clause*) ile öbek (*phrase*) ayrımı; ana cümle ve yan cümle; çekimli fiil; sınavdaki soru türlerine kısa giriş.' },
    { no: 1, id: 'zamanlar-1', title: 'Zamanlar I: basit ve sürekli zamanlar', en: 'Simple and continuous tenses',
      kapsam: 'Geniş zaman, şimdiki zaman, geçmiş zaman ve gelecek; durum fiilleri; zaman sözcükleri; akademik metinde geniş zaman.' },
    { no: 2, id: 'zamanlar-2', title: 'Zamanlar II: perfect zamanlar ve zaman uyumu', en: 'Perfect tenses and sequence of tenses',
      kapsam: 'Present perfect, past perfect, future perfect ve sürekli biçimleri; *since, for, by the time, until*; ana cümleyle yan cümlenin zaman uyumu; zaman sorusunun çözüm yolu.' },
    { no: 3, id: 'kipler', title: 'Kipler', en: 'Modal verbs',
      kapsam: 'Olasılık, zorunluluk, izin, yetenek ve tavsiye; geçmişe dönük kipler (*must have, should have, could have*); *need, had better, would rather*.' },
    { no: 4, id: 'edilgen', title: 'Edilgen ve ettirgen yapı', en: 'The passive and the causative',
      kapsam: 'Bütün zamanlarda edilgen; kanaat edilgeni (*it is believed that, is thought to have*); ettirgen (*have something done*); edilgen mastar ve -ing.' },
    { no: 5, id: 'fiilimsiler', title: 'Fiilimsiler: -ing ve to', en: 'Gerunds and infinitives',
      kapsam: 'Fiilden sonra -ing ya da to; edattan sonra -ing; anlamı değişen fiiller (*stop, remember, try*); *be used to* ile *used to*; *too* ve *enough* + to.' },
  ] },
  { id: 'II', ad: 'İsim öbeği', bolumler: [
    { no: 6, id: 'nicelik', title: 'Belirleyiciler ve nicelik sözcükleri', en: 'Determiners and quantifiers',
      kapsam: 'Sayılabilen ve sayılamayan isimler; *few, a few, little, a little*; *most, most of, almost all*; *each, every, either, neither*; *all, none*; *the number of* ile *a number of*.' },
    { no: 7, id: 'gonderim', title: 'Zamirler ve gönderim', en: 'Pronouns and reference',
      kapsam: '*it, they, this, these, such, one, ones, the former, the latter, do so*; gönderimin paragraf ve okuma sorularında çözümü.' },
    { no: 8, id: 'karsilastirma', title: 'Sıfat, zarf ve karşılaştırma', en: 'Adjectives, adverbs and comparison',
      kapsam: '*-er/more, -est/most*; *as … as*; *far, much, considerably* + karşılaştırma; *the more … the more*; *twice as … as*.' },
  ] },
  { id: 'III', ad: 'Yan cümleler', bolumler: [
    { no: 9, id: 'sifat-cumlecikleri', title: 'Sıfat cümlecikleri', en: 'Relative clauses',
      kapsam: '*who, which, that, whose, where, when*; edat + *which/whom*; tanımlayan ve ek bilgi veren cümlecik; *some of which, all of whom*; Türkçedeki -an, -dığı ile karşılaştırma.' },
    { no: 10, id: 'kisaltmalar', title: 'Kısaltmalar: ortaç öbekleri', en: 'Participle clauses and reduction',
      kapsam: 'Sıfat ve zarf cümleciğinin kısaltılması; -ing, -ed ve *having* + V3; gizli öznenin ana cümleninkiyle aynı olması; kısaltmayı çözme yolu.' },
    { no: 11, id: 'isim-cumlecikleri', title: 'İsim cümlecikleri', en: 'Noun clauses',
      kapsam: '*that, whether, if* ve soru sözcükleriyle kurulan cümlecikler; *the fact that*; özne olarak cümlecik; *it is essential that* + yalın fiil.' },
    { no: 12, id: 'zarf-cumlecikleri', title: 'Zarf cümlecikleri', en: 'Adverbial clauses',
      kapsam: 'Zaman (*when, while, as soon as, once, until, by the time*), neden (*because, since, as, now that*), sonuç (*so … that, such … that*) ve amaç (*so that*).' },
    { no: 13, id: 'kosul', title: 'Koşul cümleleri ve wish', en: 'Conditionals and wishes',
      kapsam: 'Sıfırıncı tipten üçüncü tipe ve karışık koşul; *unless, provided that, as long as, in case, otherwise, but for*; devrik koşul; *wish, if only, as if*.' },
  ] },
  { id: 'IV', ad: 'Bağlayıcılar', bolumler: [
    { no: 14, id: 'baglayicilar' },
    { no: 15, id: 'karsitlik', title: 'Karşıtlık ve ödünleme', en: 'Contrast and concession',
      kapsam: '*although, even though, though, while, whereas*; *despite, in spite of, unlike*; *however, nevertheless, on the other hand, in contrast*; beklentinin tersi mi, iki şeyin farkı mı?' },
    { no: 16, id: 'neden-sonuc', title: 'Neden, sonuç ve amaç', en: 'Cause, effect and purpose',
      kapsam: '*because, since, as, due to, owing to, thanks to*; *therefore, thus, hence, consequently*; *so that, in order to, so as to*; *so … that, such … that*.' },
    { no: 17, id: 'eslesik', title: 'Eşleşik bağlaçlar ve koşut yapı', en: 'Correlative conjunctions and parallelism',
      kapsam: '*both … and, either … or, neither … nor, not only … but also, whether … or*; fiilin hangi ögeyle uyuştuğu; koşut yapı.' },
    { no: 18, id: 'edatlar', title: 'Edatlar ve edatlı kalıplar', en: 'Prepositions and prepositional patterns',
      kapsam: 'Çok sözcüklü edatlar (*in terms of, with regard to, regardless of, apart from*); fiil, sıfat ve isimle gelen edatlar (*depend on, responsible for, increase in*).' },
  ] },
  { id: 'V', ad: 'İleri yapılar ve akademik dil', bolumler: [
    { no: 19, id: 'devrik', title: 'Devrik yapı ve vurgu', en: 'Inversion and emphasis',
      kapsam: '*not only, never, rarely, hardly … when, no sooner … than, only after* ile devrik cümle; *it is … that* ve *what … is* ile vurgu.' },
    { no: 20, id: 'akademik', title: 'Akademik metnin dili: uzun cümleyi çözmek', en: 'Academic English: unpacking long sentences',
      kapsam: 'Temkinli dil (*may, appear to, tend to, it is likely that*); adlaştırma; uzun isim öbekleri; birden çok yüklemli ve yan cümleli cümleyi ögelerine ayırmak (çeviriye ve okumaya köprü).' },
  ] },
  { id: 'VI', ad: 'Sınav becerileri', bolumler: [
    { no: 21, id: 'cumle-tamamlama', title: 'Cümle tamamlama ve boşluklu metin', en: 'Sentence completion and cloze',
      kapsam: 'Bağlacın söylediği ilişki; zaman uyumu; boşluğun komşu cümlesindeki ipucu; ilişkisi ters şık tuzağı.' },
    { no: 22, id: 'ceviri', title: 'Çeviri ve yakın anlam', en: 'Translation and restatement',
      kapsam: 'İngilizceden Türkçeye ve Türkçeden İngilizceye: ana yüklemi, zamanı ve bağlacı eşle; tek sapma şıkkı eler; anlamca en yakın cümle.' },
    { no: 23, id: 'paragraf', title: 'Paragraf: tamamlama ve akışı bozan cümle', en: 'Paragraph completion and irrelevant sentence',
      kapsam: 'Konu ve odak; gönderim ve geçiş sözcükleri; boşluktan önceki ve sonraki cümle; aynı konudan ama başka odaktan söz eden cümle.' },
    { no: 24, id: 'okuma', title: 'Okuma ve diyalog', en: 'Reading and dialogue completion',
      kapsam: 'Ana fikir, ayrıntı, çıkarım, yazarın amacı ve tutumu, gönderim soruları; soru kökünden parçaya; diyalogda boşluktan sonraki satır.' },
  ] },
];

// "Bu kitap nasıl yazıldı?" sayfası (README.md §2). Kitaplardan yöntem alındı, içerik alınmadı.
const YONTEM = [
  { baslik: 'Kısaca', metin: 'Bu kitap, dünyada ve Türkiye\'de en çok kullanılan dil bilgisi kitaplarının **yöntemleri** incelenerek tasarlandı. Hiçbir kitaptan metin, örnek cümle, alıştırma ya da tablo alınmadı; bütün içerik iDil için özgün yazıldı. Sınavla ilgili sayılar iDil\'in ÖSYM soru analizinden gelir.' },
  { baslik: 'Dünyadaki kitaplardan', maddeler: [
    '**Kısa ders, tek fikir** (Murphy, English Grammar in Use): her bölüm A, B, C diye harflenen 4–7 dakikalık derslere bölünür; anlatımın hemen altında alıştırma vardır.',
    '**Önce tanı, sonra ders** (Murphy, Azar, Swan): bölüm "Kendini yokla" ön testiyle açılır; yanlış cevap seni ilgili derse götürür.',
    '**Tablo ve örnek** (Azar, Understanding and Using English Grammar): kural tabloda toplanır, akademik örnek cümlelerde gösterilir.',
    '**Yanlış ve doğru yan yana** (Swan, Practical English Usage): sık hatanın üstü çizilir, doğrusu altına yazılır; tek sorun, tek madde.',
    '**Test ve tekrar döngüsü** (Eastwood, Oxford Practice Grammar): bölüm sonunda karışık test; "Yanlışı bul" alıştırmaları.',
    '**Akademik kayıt** (Biber vd., Longman Student Grammar; Oxford Grammar for EAP): örnekler akademik metinden, konular akademik metinde sık olan yapılardan seçilir.',
    '**Önceki konuya köprü** (Hewings, Advanced Grammar in Use): ileri derslerde ön koşul konuya "Hatırla" bağlantısı.',
  ] },
  { baslik: 'Türkiye\'deki YDS kitaplarından', maddeler: [
    '**Türkçe anlatım, İngilizce örnek, örneğin Türkçesi**: Türk öğrencinin en çok övdüğü kalıp. Bütünüyle İngilizce anlatım yorucu bulunuyor.',
    '**"Türkçede" kutusu**: Türkçede ekle ve cümle sonunda yapılan işin İngilizcede öndeki sözcükle yapılması gibi farklar adıyla anılır.',
    '**Çözüm tekniği**: kural soru türüne bağlanır; her bölümde bir "Sınav yolu" dersi ve çözümlü örnek vardır.',
    '**Bağlaçlar geniş**: anlam grubu (karşıtlık, neden, koşul) ve ardından gelen yapı (cümle, isim, yeni cümle) birlikte verilir.',
    '**Metinde gör**: yapı, bölümün sonunda kısa ve özgün bir akademik paragrafta gösterilir.',
    '**Gerekçeli çözüm**: her alıştırmada doğrunun neden doğru, ötekilerin neden yanlış olduğu yazılır.',
    '**Sıra**: cümlenin yapısı, zamanlar, kipler, edilgen, isim öbeği, yan cümleler, koşul, bağlaçlar, ileri yapılar. Bu sıra Türkiye\'deki YDS derslerinin ortak sırasıdır.',
  ] },
  { baslik: 'Araştırmadan', maddeler: [
    '**Açık anlatım işe yarar**: kuralı açıkça öğretmek, kendiliğinden fark ettirmekten daha etkili ve kalıcıdır (Norris ve Ortega 2000; Spada ve Tomita 2010).',
    '**Sınanmak, yeniden okumaktan iyidir**: her derste alıştırma var; günün turu önceki derslerden tekrar sorusu getirir (Roediger ve Karpicke 2006).',
    '**Aralıklı ve karışık tekrar**: tekrarlar 1, 3, 7, 14 gün aralıkla gelir; bölüm testinde konular karışır (Kim ve Webb 2022; Nakata ve Suzuki 2019).',
    '**Ayrıntılı geri bildirim**: "doğru" ya da "yanlış" demekle yetinilmez, nedeni yazılır (Shute 2008; Li 2010).',
    '**Yalnız renkli vurgu yetmez**: fosforlu işaret açıklama ve alıştırmayla birlikte kullanılır (Lee ve Huang 2008).',
  ] },
  { baslik: 'Kaynaklar', metin: 'Ayrıntı ve kaynak listesi iki araştırma dosyasında: icerik/kitap/arastirma-yabanci.md ve arastirma-yds.md (yaklaşık 80 kaynak, erişim 14 Kasım 2026). Bütün içerik taslaktır; İngilizce öğretmeninin onayını bekliyor.' },
];

const bolumler = KISIMLAR.flatMap(k => k.bolumler.map(p => {
  const y = YAZILAN.get(p.id);
  return y ? { ...y, no: p.no, kisim: k.id } : { ...p, kisim: k.id, durum: 'plan', dersler: [] };
}));

export const KITAP = {
  ad: 'Ders Kitabı',
  kisimlar: KISIMLAR.map(k => ({ id: k.id, ad: k.ad, bolumler: k.bolumler.map(b => b.id) })),
  bolumler,
  yontem: YONTEM,
};
