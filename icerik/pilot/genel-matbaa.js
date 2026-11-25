// iDil › Genel › Matbaa ve bilginin yayılışı.
// Tümü özgün: Claude yazdı (13 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (analiz/cogaltma-2-plani.md §4.2; metin özgün): Johannes Gutenberg, Mainz, 1450 dolayı: seri dökülen metal harf, yağlı
// mürekkep ve üzüm ile zeytin sıkmakta kullanılan türden, uyarlanmış bir pres. Gutenberg İncili'nden yaklaşık 180 kopya basıldığı
// düşünülür (temkinli). Öncesi: Avrupa'da kitaplar elle kopyalanırdı; Çin'de tahta kalıpla baskı vardı; 11. yüzyılda Bi Sheng
// pişmiş topraktan hareketli harf yaptı; Kore'de metal harfle basılan Jikji 1377 tarihlidir. Yayılış: 1500'e kadar Avrupa'da iki
// yüzü aşkın kentte matbaa kuruldu (temkinli); kitaplar ucuzladı, yazım birörnekleşmeye başladı. Osmanlı: İstanbul'da 1493'te
// İbranice baskı başladı, Ermeni ve Rum matbaaları da kuruldu; İbrahim Müteferrika 1727'de izinle ilk Osmanlı Türkçesi matbaasını
// kurdu; gecikmenin nedenleri (hattatlar, maliyet, dinî kaygılar) tarihçilerce tartışılır.
// Planda olmayan yerleşik bilgiler (temkinli yazıldı): Gutenberg 1468'de öldü; o sırada Almanya'nın başka kentlerinde ve İtalya'da
// (Subiaco 1465, Roma 1467) matbaa vardı. El presi döneminde kâğıt basılmadan önce nemlendirilirdi. Gutenberg İncili kopyalarının
// çoğu kâğıda, kalanı parşömene basıldı. Çin'de hareketli harf tahta kalıpla baskının yerini almadı; en sık gösterilen neden
// Çince yazının binlerce karakter gerektirmesidir. Tarihçiler geçmişteki okuryazarlığı çoğu zaman evlilik kayıtlarındaki
// imzalardan tahmin eder. Avrupa'da basım izinle, yasaklı kitap listeleriyle ve cezalarla denetlenmeye çalışıldı; yasaklı kitaplar
// yine de yurt dışında basılıp gizlice getirildi. Tutan bir kitabı başka kentlerdeki matbaacılar çoğu zaman izinsiz yeniden
// basardı. Bazı varlıklı koleksiyoncular el yazması ısmarlamayı sürdürdü, bazı kâtipler matbaalarda iş buldu; ilk basılı kitaplar
// el yazmalarına benzetilirdi. Müteferrika'nın matbaası az sayıda kitap bastı; Türkçe baskı ancak 19. yüzyılda yaygınlaştı. Hat
// sanatı bugün de İstanbul'da öğretiliyor. Diyalogdaki kitap (Venedik, 1497) kurgusaldır.
// Görev 20 (25 Kasım 2026): çeviri çeldiricileri biçim kestirmesine karşı yeniden kuruldu.

const T = 'taslak';
const C = 'genel';
const U = 'Matbaa ve bilginin yayılışı';

const cards = [
  { code: 'literacy', title: 'okuryazarlık', pos: 'isim', cefr: 'C1', ipa: '/ˈlɪtərəsi/',
    text: "Okuma yazma bilme durumu: literacy rate (okuryazarlık oranı). Sıfatı 'literate' (okuryazar), karşıtı 'illiteracy' (okuma yazma bilmeme). Bir alandaki temel beceri için de kullanılır: digital literacy. Biçimce benzeyen 'literature' ise edebiyattır.",
    example: 'Free village schools helped to raise literacy among the children of farm workers.',
    exampleTr: 'Köylerdeki ücretsiz okullar, tarım işçilerinin çocukları arasında okuryazarlığın artmasına yardım etti.',
    synonyms: [], family: ['literate', 'illiterate', 'illiteracy'] },
  { code: 'manuscript', title: 'el yazması; (yayımlanmamış) metin, müsvedde', pos: 'isim', cefr: 'C1', ipa: '/ˈmænjuskrɪpt/',
    text: "Matbaadan önce elle yazılarak çoğaltılmış kitap ya da belge: a medieval manuscript. Bugün yazarın yayınevine gönderdiği, henüz basılmamış metin için de kullanılır. Latince 'manu' (elle) ve 'scriptus' (yazılmış) sözcüklerinden gelir.",
    example: 'The library keeps its oldest manuscripts in a cool, dark room to protect the ink.',
    exampleTr: 'Kütüphane, mürekkebi korumak için en eski el yazmalarını serin ve karanlık bir odada saklıyor.',
    synonyms: [], family: ['script'] },
  { code: 'scribe', title: 'kâtip, müstensih (kitapları elle kopyalayan kişi)', pos: 'isim', cefr: 'C1', ipa: '/skraɪb/',
    text: "Matbaadan önce kitapları ve belgeleri elle kopyalayan ya da yazıya geçiren kişi. 'Script' (yazı), 'describe' (betimlemek) ve 'inscription' (yazıt) ile aynı Latince kökten gelir: scribere (yazmak).",
    example: 'Working by candlelight, the scribe copied the old text letter by letter onto fresh parchment.',
    exampleTr: 'Mum ışığında çalışan kâtip, eski metni harf harf yeni bir parşömene geçirdi.',
    synonyms: ['copyist'], family: ['script', 'inscribe'] },
  { code: 'censorship', title: 'sansür', pos: 'isim', cefr: 'C1', ipa: '/ˈsensəʃɪp/',
    text: "Kitap, gazete, film ya da mektupların yetkililerce denetlenmesi, sakıncalı bulunan bölümlerinin yasaklanması ya da çıkarılması. Fiil ve kişi adı 'censor' (sansürlemek; sansürcü). Biçimce benzeyen 'censure' ise kınama demektir.",
    example: 'Under strict censorship, newspapers were not allowed to report on the protests.',
    exampleTr: 'Sıkı sansür altında gazetelerin protestolarla ilgili haber yapmasına izin verilmiyordu.',
    synonyms: [], family: ['censor', 'censored'] },
  { code: 'pioneer', title: 'öncü; bir alanda ilk adımları atan kişi', pos: 'isim', cefr: 'C1', ipa: '/ˌpaɪəˈnɪə(r)/',
    text: "Bir alanda ilk çalışanlardan olup başkalarına yol açan kişi: a pioneer of photography. Fiil olarak 'öncülük etmek' (pioneer a new method) anlamına gelir; sıfatı 'pioneering' (çığır açan).",
    example: 'Ada Lovelace is often described as a pioneer of computer programming.',
    exampleTr: 'Ada Lovelace, çoğu zaman bilgisayar programcılığının öncülerinden biri olarak anılır.',
    synonyms: ['trailblazer', 'innovator'], family: ['pioneering'] },
  { code: 'smuggle', title: 'kaçak yoldan sokmak ya da çıkarmak, kaçırmak', pos: 'fiil', cefr: 'C1', ipa: '/ˈsmʌɡl/',
    text: "Bir şeyi yasaları çiğneyerek, gizlice bir ülkeye sokmak ya da bir ülkeden çıkarmak: smuggle goods across the border. Yön çoğu zaman edatla belirtilir: smuggle in (içeri sokmak), smuggle out (dışarı çıkarmak). Yasak bir şeyi bir yere gizlice götürmek için de kullanılır. Kişi adı 'smuggler' (kaçakçı), eylem adı 'smuggling' (kaçakçılık).",
    example: 'Customs officers caught two men trying to smuggle rare birds into the country.',
    exampleTr: 'Gümrük memurları, nadir kuşları ülkeye kaçak yoldan sokmaya çalışan iki adamı yakaladı.',
    synonyms: ['sneak', 'traffic'], family: ['smuggler', 'smuggling'] },
  { code: 'reproduce', title: 'kopyasını çıkarmak, çoğaltmak; (canlılar) üremek', pos: 'fiil', cefr: 'B2', ipa: '/ˌriːprəˈdjuːs/',
    text: "Bir metnin, resmin ya da sesin aynısını yapmak: reproduce a photograph. Biyolojide 'üremek' demektir. Adı 'reproduction': kopya, röprodüksiyon; üreme.",
    example: 'The museum shop sells cheap posters that reproduce the most famous paintings in its collection.',
    exampleTr: 'Müze dükkânı, koleksiyondaki en ünlü tabloların kopyası olan ucuz posterler satıyor.',
    synonyms: ['copy', 'duplicate'], family: ['reproduction'] },
  { code: 'disseminate', title: '(bilgi, fikir) yaymak, geniş bir kitleye ulaştırmak', pos: 'fiil', cefr: 'C1', ipa: '/dɪˈsemɪneɪt/',
    text: "Bilgiyi, fikri ya da bulguyu çok sayıda kişiye ulaştırmak: disseminate research findings. 'Spread' ile yakın anlamlıdır ama daha resmîdir; akademik ve resmî metinlerde sık geçer. Adı 'dissemination'.",
    example: 'Health officials used local radio stations to disseminate advice about clean drinking water.',
    exampleTr: 'Sağlık yetkilileri, temiz içme suyuyla ilgili önerileri yaymak için yerel radyo istasyonlarını kullandı.',
    synonyms: ['spread', 'distribute'], family: ['dissemination'] },
  { code: 'standardise', title: 'standartlaştırmak, birörnek hâle getirmek', pos: 'fiil', cefr: 'C1', ipa: '/ˈstændədaɪz/',
    text: "Bir şeyi belli bir kurala ya da ölçüye uydurup her yerde aynı olmasını sağlamak: standardise weights and measures. Amerikan yazımıyla 'standardize'. Adı 'standardisation'.",
    example: 'The company decided to standardise the forms used in all of its branches.',
    exampleTr: 'Şirket, bütün şubelerinde kullanılan formları birörnek hâle getirmeye karar verdi.',
    synonyms: ['regularise', 'unify'], family: ['standard', 'standardisation'] },
  { code: 'mass-produce', title: 'seri üretmek, çok sayıda üretmek', pos: 'fiil', cefr: 'C1', ipa: '/ˌmæs prəˈdjuːs/',
    text: "Makineyle ya da bir düzen içinde aynı üründen çok sayıda yapmak. Sıfat olarak 'mass-produced' (seri üretim), adı 'mass production'. Karşıtı 'handmade' (el yapımı) ya da 'made to order' (ısmarlama).",
    example: 'Once the factory learned how to mass-produce its bicycles, their price fell sharply.',
    exampleTr: 'Fabrika bisikletleri seri üretmeyi öğrenince fiyatları hızla düştü.',
    synonyms: ['manufacture'], family: ['mass production'] },
  { code: 'forbid', title: 'yasaklamak, izin vermemek', pos: 'fiil', cefr: 'B2', ipa: '/fəˈbɪd/',
    text: "Bir şeyin yapılmasını kesin olarak yasaklamak: forbid somebody to do something. Düzensiz fiildir: forbid, forbade, forbidden. Edilgeni çok yaygındır: Smoking is forbidden here. 'Ban' ve 'prohibit' ile yakın anlamlıdır.",
    example: 'The library forbids readers to take the old maps out of the reading room.',
    exampleTr: 'Kütüphane, okurların eski haritaları okuma salonunun dışına çıkarmasını yasaklıyor.',
    synonyms: ['ban', 'prohibit'], family: ['forbidden'] },
  { code: 'unprecedented', title: 'eşi görülmemiş, emsalsiz, daha önce hiç olmamış', pos: 'sıfat', cefr: 'C1', ipa: '/ʌnˈpresɪdentɪd/',
    text: "Daha önce benzeri yaşanmamış: an unprecedented rise in prices. 'Precedent' (emsal, örnek olay) sözcüğünden gelir. Sık eşdizimleri: on an unprecedented scale, at an unprecedented rate.",
    example: 'The city welcomed an unprecedented number of visitors during the summer festival.',
    exampleTr: 'Kent, yaz festivali boyunca eşi görülmemiş sayıda ziyaretçi ağırladı.',
    synonyms: ['unparalleled', 'unheard-of'], family: ['precedent'] },
  { code: 'affordable', title: 'uygun fiyatlı, (birinin) alabileceği', pos: 'sıfat', cefr: 'B2', ipa: '/əˈfɔːdəbl/',
    text: "Çoğu insanın parasının yetebileceği: affordable housing (uygun fiyatlı konut). Fiili 'afford' (-e gücü yetmek): We can't afford a new car. Adı 'affordability'.",
    example: 'The new model is light, reliable and affordable for most students.',
    exampleTr: 'Yeni model hafif ve güvenilir; üstelik çoğu öğrencinin alabileceği bir fiyatta.',
    synonyms: ['inexpensive', 'reasonably priced'], family: ['afford', 'affordability'] },
  { code: 'sweeping', title: 'kapsamlı, köklü, geniş çaplı', pos: 'sıfat', cefr: 'C1', ipa: '/ˈswiːpɪŋ/',
    text: "Birçok şeyi birden etkileyen: sweeping changes, sweeping reforms. 'A sweeping statement' ise ayrıntıları hesaba katmayan, aşırı genel bir yargıdır. 'Sweep' (süpürmek) fiilinden gelir.",
    example: 'The new government promised sweeping changes to the tax system.',
    exampleTr: 'Yeni hükûmet, vergi sisteminde köklü değişiklikler sözü verdi.',
    synonyms: ['far-reaching', 'wide-ranging'], family: ['sweep'] },
  { code: 'gradually', title: 'yavaş yavaş, giderek, aşama aşama', pos: 'zarf', cefr: 'B2', ipa: '/ˈɡrædʒuəli/',
    text: "Bir değişimin birden değil, adım adım olduğunu bildirir: gradually improve, gradually disappear. Sıfatı 'gradual' (aşamalı); karşıtı 'suddenly' ya da 'abruptly'.",
    example: 'The fog gradually cleared, and the mountains came into view.',
    exampleTr: 'Sis yavaş yavaş dağıldı ve dağlar göründü.',
    synonyms: ['slowly', 'progressively'], family: ['gradual'] },
  { code: 'subsequently', title: 'daha sonra, ardından, sonradan', pos: 'zarf', cefr: 'C1', ipa: '/ˈsʌbsɪkwəntli/',
    text: "Bir olaydan sonra gelen durumu bildirir; resmî ve yazılı dilde 'later' ya da 'afterwards' yerine kullanılır. Sıfatı 'subsequent' (sonraki): in subsequent years. 'Consequently' (bu yüzden) ile karıştırılmamalı.",
    example: 'The bridge was damaged in a storm and was subsequently rebuilt in stone.',
    exampleTr: 'Köprü bir fırtınada hasar gördü ve sonradan taştan yeniden yapıldı.',
    synonyms: ['later', 'afterwards'], family: ['subsequent'] },
  { code: 'take off', title: '(iş, ürün, fikir) tutmak, hızla yaygınlaşmak; (uçak) havalanmak', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌteɪk ˈɒf/',
    text: "Bir şeyin birden başarılı ya da yaygın olması: Sales really took off in May. En bilinen anlamı uçağın havalanmasıdır; 'giysiyi çıkarmak' anlamı da vardır. Ünitede 'tutmak, yaygınlaşmak' anlamında geçer.",
    example: 'Her small baking business began to take off after a food blogger praised her bread.',
    exampleTr: 'Küçük fırıncılık işi, bir yemek blogcusu ekmeğini övdükten sonra tutmaya başladı.',
    synonyms: ['catch on', 'boom'], family: [] },
  { code: 'carry out', title: '(bir işi, görevi, araştırmayı) yapmak, yürütmek, gerçekleştirmek', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌkæri ˈaʊt/',
    text: "Bir işi, deneyi, görevi ya da planı yerine getirmek: carry out a survey, carry out repairs. 'Do' fiilinin resmî bir karşılığı gibi kullanılır.",
    example: 'Volunteers will carry out a count of the birds that nest in the park.',
    exampleTr: 'Gönüllüler, parkta yuva yapan kuşların sayımını yapacak.',
    synonyms: ['conduct', 'perform'], family: [] },
];

const items = [
  // ---------- kelime ----------
  { id: 'gm-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['literacy', 'censorship'],
    level: 'orta', cefr: 'C1', konu: ['isim'],
    q: 'Since few ordinary people in early modern Europe left diaries or letters behind, historians often estimate levels of ---- by counting how many brides and grooms signed the marriage register with their own names rather than with a simple cross.',
    options: ['literature', 'censorship', 'fertility', 'legibility', 'literacy'], answer: 4,
    explain: "'Literacy' okuryazarlık demektir. Sıradan insanlar pek günlük ya da mektup bırakmadığı için tarihçiler dolaylı bir ölçüye başvuruyor: evlilik kaydını basit bir çarpı işaretiyle değil, kendi adıyla imzalayan gelin ve damatların sayısı. Adını yazabilen biri büyük olasılıkla okuyabiliyordu da; bu sayı okuryazarlık düzeyini gösterir. 'Literature' (edebiyat) biçimce benzer ama imza saymakla ölçülmez. 'Legibility' (okunaklılık) bir yazının niteliğidir; kaç kişinin imza atabildiğini göstermez. 'Fertility' (doğurganlık) de kilise kayıtlarından incelenir, ama imza atabilmekle ilgisi yok. 'Censorship' (sansür) ünitenin bir kart sözcüğü; imzalarla ölçülecek bir şey değil." },

  // ---------- dil bilgisi ----------
  { id: 'gm-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'In early printing shops, each sheet of paper was usually dampened slightly ---- being printed, as damp paper took up the ink more evenly and gave a sharper impression.',
    options: ['prior to', 'instead of', 'in the wake of', 'as a result of', 'in spite of'], answer: 0,
    explain: "'Prior to' (… -den önce) bir zaman sırası kurar: ilk matbaalarda her kâğıt basılmadan önce hafifçe nemlendirilirdi, çünkü nemli kâğıt mürekkebi daha eşit alır ve daha keskin bir baskı verirdi. Nemlendirmenin mürekkebin tutmasına yaraması için baskıdan önce yapılması gerekir. 'In the wake of' (… -in ardından) bu sırayı tersine çevirir; basılmış bir kâğıdı nemlendirmek mürekkebin tutmasına yaramaz. 'As a result of' (… sonucunda) nemlendirmeyi baskının sonucu gibi gösterir, oysa nemlendirme baskının hazırlığıdır. 'Instead of' (… yerine) kâğıdın hiç basılmadığını söyler; 'in spite of' (… -e rağmen) ise baskıyla nemlendirme arasında olmayan bir karşıtlık kurar." },
  { id: 'gm-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['unprecedented'],
    level: 'orta', cefr: 'B2', konu: ['bağlaç', 'zaman'],
    q: '---- Gutenberg died in 1468, printing with movable metal type ---- far beyond Mainz with unprecedented speed: presses were already at work in several other German towns and even in Italy.',
    options: ['Until / has spread', 'By the time / had spread', 'As soon as / had spread', 'Ever since / spread', 'Whereas / would spread'], answer: 1,
    explain: "'By the time' (… -dığında, … -dığı zamana kadar) ile kurulan zaman cümleciği geçmiş zamandadır; ana cümle o andan önce tamamlanmış olanı past perfect ile anlatır: Gutenberg 1468'de öldüğünde hareketli metal harfle baskı Mainz'ın çok ötesine yayılmıştı. İki noktadan sonraki 'already' (çoktan) da bunu doğruluyor. 'As soon as' (-ır -maz) aynı zaman biçimiyle gelse de yayılmayı ölümün hemen ardından olmuş gibi gösterir ve 'already' ile çelişir. 'Until / has spread' geçmişteki bir tarihi present perfect ile birleştiriyor; zaman uyumu bozuk. 'Ever since' ana cümlede perfect bir zaman ister, düz geçmiş zamanla kurulmaz. 'Whereas' karşıtlık kurar ama ölümle yayılma arasında karşıtlık yok; 'would spread' de yayılmayı sonraya atıp 'already' ile çelişiyor." },

  { id: 'gm-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['devrik yapı'],
    q: 'In an early print shop, metal type was costly and often in short supply. Only after ---- enough copies of one sheet ---- the type apart, so that its letters could be reused for the next sheet.',
    options: ['had the workers printed / did they take', 'the workers had printed / they took', 'had the workers printed / they took', 'the workers had printed / they did take', 'the workers had printed / did they take'], answer: 4,
    explain: "'Only after' + yan cümle başta: yan cümle düz kalır (the workers had printed enough copies), devrik olan ardından gelen ana cümledir: 'did they take the type apart'. Cümlenin anlamı: ilk matbaalarda metal harf pahalıydı ve çoğu zaman azdı; işçiler harfleri ancak bir sayfadan yeterince kopya bastıktan sonra söküyordu, böylece harfler sonraki sayfada yeniden kullanılabiliyordu. 'Had the workers printed / did they take' devriği iki kez kurar; yan cümlede devrik olmaz. 'Had the workers printed / they took' devriği yanlış yere, yan cümleye koyar. 'The workers had printed / they took' ve 'the workers had printed / they did take' ana cümleyi düz bırakır; 'only after' başa geçince ana cümle devrik olmalı." },

  // ---------- cümle tamamlama ----------
  { id: 'gm-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['forbid', 'smuggle', 'censorship'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although the authorities in many parts of Europe tried hard to control what could be printed, ----.',
    options: [
      'printers in many cities needed official permission before a new title could be printed',
      'forbidden books circulated widely, often printed abroad and smuggled in',
      'lists of banned books were drawn up and brought up to date from time to time',
      'a printer caught producing banned works could face heavy fines or even prison',
      'censorship came to be regarded as one of the ordinary duties of a good ruler',
    ], answer: 1,
    explain: "'Although' karşıtlık ister: yetkililer neyin basılabileceğini denetlemek için çok uğraştı, buna karşın yasaklı kitaplar geniş çapta elden ele dolaştı; birçoğu yurt dışında basılıp gizlice getirildi. Yani denetim amacına ulaşamadı. Öteki seçenekler denetimin nasıl yürütüldüğünü anlatmayı sürdürüyor: yeni bir kitap için resmî izin, zaman zaman güncellenen yasaklı kitap listeleri, yasaklı kitap basarken yakalanan matbaacıya ağır para cezası ya da hapis, sansürün iyi bir hükümdarın olağan görevlerinden sayılması. Bunlar ilk yarıyı destekler; karşıtlık kurmaz." },
  { id: 'gm-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['reproduce'],
    level: 'orta', cefr: 'B2', konu: ['zaman'],
    q: "----, printers in other towns would often reproduce it in cheaper editions, usually without asking the author's permission.",
    options: [
      'Long before a new book had even been written',
      'Now that most countries protect authors with copyright laws',
      'As soon as a new book turned out to be popular',
      'While the author was still looking for a printer',
      'Even though few readers showed any interest in a new book',
    ], answer: 2,
    explain: "Ana cümle ilk matbaacıların bir alışkanlığını anlatıyor: başka kentlerdeki matbaacılar bir kitabın daha ucuz baskılarını çoğu zaman yazarına sormadan çıkarırdı. Bunun için kitabın basılmış olması ve satacağının anlaşılması gerekir; zaman ilişkisi 'as soon as' (-ır -maz) ile kurulur: yeni bir kitap tutar tutmaz. Kitap daha yazılmadan çok önce ya da yazar henüz bir matbaacı ararken çoğaltılacak bir kitap yoktur. 'Now that' (-dığına göre) bugünü anlatır ve geçmişteki bir alışkanlıkla zaman bakımından uyuşmaz; üstelik telif yasaları izinsiz baskıyı önlemek içindir. Yazarın matbaacı aradığını ve telif yasalarını anlatan seçeneklerde 'it' sözcüğünün göstereceği bir kitap da geçmiyor. 'Even though' (-e rağmen) ise kimsenin ilgilenmediği bir kitabın ucuz baskılarla çoğaltıldığını söyler; ucuz baskı satmak için çıkarıldığından bu, cümlenin mantığıyla çelişiyor." },

  // ---------- çeviri ----------
  { id: 'gm-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edilgen'],
    q: 'Around 180 copies of the Gutenberg Bible are thought to have been printed in Mainz, most of them on paper and the rest on more costly vellum.',
    options: [
      "Mainz'da Gutenberg İncili'nden, çoğu kâğıda, geri kalanı ise daha dayanıklı olan parşömene olmak üzere yaklaşık 180 kopya basıldığı kesin olarak bilinmektedir.",
      "Mainz'da Gutenberg İncili'nden, çoğu parşömene, geri kalanı ise daha ucuz olan kâğıda olmak üzere yaklaşık 180 kopya basıldığı düşünülmektedir.",
      "Mainz'da Gutenberg İncili'nden, çoğu kâğıda, geri kalanı ise daha dayanıklı olan parşömene olmak üzere yaklaşık 180 kopya basıldığı düşünülmektedir.",
      "Mainz'da Gutenberg İncili'nden, çoğu kâğıda, geri kalanı ise daha pahalı olan parşömene olmak üzere yaklaşık 180 kopya basıldığı düşünülmektedir.",
      "Mainz'da basılan Gutenberg İncili'nin günümüze ulaşan yaklaşık 180 kopyasının çoğunun kâğıda, geri kalanının ise daha dayanıklı olan parşömene basıldığı düşünülmektedir.",
    ], answer: 3,
    explain: "İngilizce cümlede edilgen bir kanaat yapısı var: 'are thought to have been printed', yani basıldığı düşünülüyor; sayı kesin bilgi olarak verilmiyor. Doğru çeviri bunu 'basıldığı düşünülmektedir' diye korur ve 'most of them on paper and the rest on more costly vellum' bölümünü de doğru aktarır: çoğu kâğıda, geri kalanı daha pahalı parşömene. 'Costly' pahalı demektir; parşömeni 'daha dayanıklı' diye niteleyen 'basıldığı düşünülmektedir' çevirisi bu yüzden yanlış. 'Kesin olarak bilinmektedir' diyen çeviri kanaati kesinliğe çeviriyor ve parşömeni dayanıklılıkla niteliyor. 'Günümüze ulaşan yaklaşık 180 kopyası' diyen çeviri 180'i bugün kalan kopyaların sayısı yapıyor; İngilizce cümle bundan söz etmiyor. 'Çoğu parşömene, geri kalanı ise daha ucuz olan kâğıda' oranı tersine çeviriyor." },
  { id: 'gm-c2', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['bağlaç'],
    q: "Bi Sheng hareketli harfi Gutenberg'den yaklaşık dört yüzyıl önce icat etmiş olsa da, kısmen Çince yazının binlerce ayrı karakter gerektirmesi yüzünden bu yöntem Çin'de tahta kalıpla baskının yerini hiçbir zaman tam olarak alamadı.",
    options: [
      'Although Bi Sheng invented movable type some four centuries before Gutenberg, the method never fully replaced woodblock printing in China, partly because written Chinese requires thousands of different characters.',
      'Although Bi Sheng invented movable type some four centuries before Gutenberg, the method was never used for printing in China, mainly because written Chinese requires thousands of different characters.',
      'Although Bi Sheng invented movable type some four centuries before Gutenberg, the method never fully replaced woodblock printing in China, mainly because written Chinese requires thousands of different characters.',
      'Although Bi Sheng invented movable type some four centuries after Gutenberg, the method never fully replaced woodblock printing in China, partly because written Chinese requires thousands of different characters.',
      'Although Bi Sheng invented movable type some two centuries before Gutenberg, the method never fully replaced woodblock printing in China, mainly because written Chinese requires thousands of different characters.',
    ], answer: 0,
    explain: "Türkçe cümle bir kabulle başlıyor: '-sa da' (although) Bi Sheng'in hareketli harfi Gutenberg'den yaklaşık dört yüzyıl önce icat ettiğini kabul ediyor. 'Kısmen … yüzünden' (partly because) nedenlerden yalnız birini veriyor: Çince yazı binlerce ayrı karakter gerektiriyor. Ana yargı olumsuz: yöntem Çin'de tahta kalıpla baskının yerini hiçbir zaman tam olarak alamadı. Doğru seçenek bunların hepsini korur. 'Never fully replaced …, mainly because' (başlıca … yüzünden) nedeni ana neden yapıyor. 'Some two centuries before Gutenberg' diyen çeviri süreyi yarıya indiriyor ve nedeni 'mainly' ile ana neden yapıyor. 'Was never used for printing in China' yerini tam alamamayı hiç kullanılmamaya çeviriyor, nedeni de başlıca neden sayıyor. 'Four centuries after Gutenberg' 'partly'yi koruyor ama 'önce'yi 'sonra' yapıyor." },

  // ---------- okuma parçası (4 soru, YDS biçimi) ----------
  { id: 'gm-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T,
    cards: ['manuscript', 'scribe', 'mass-produce', 'sweeping', 'affordable', 'gradually', 'standardise'],
    level: 'zor', cefr: 'C1', title: 'Bir buluştan çok bir düzen',
    text: 'Printing was not invented in Europe. In China, whole pages had been carved into wooden blocks and printed for centuries, and in the eleventh century a craftsman named Bi Sheng made movable type from baked clay. In Korea, a Buddhist text known as Jikji was printed with metal type in 1377. In Europe, by contrast, almost every book was still a manuscript, copied slowly by hand, often by monks or professional scribes. What Johannes Gutenberg developed in Mainz around 1450 was less a single invention than a working system. He found a way to mass-produce metal letters of exactly the same height, mixed an oil-based ink that would cling to them, and adapted the kind of screw press that had long been used to squeeze grapes and olives. Each of these drew on older crafts, but together they made printing fast and reliable. The effects were sweeping. Before the century was out, presses are thought to have been set up in more than two hundred European towns, and books had become affordable for many merchants, teachers and other readers who could never have paid for a manuscript. Printers, who hoped to sell the same edition in many different places, also gradually settled on a single spelling for many common words, which helped to standardise written languages that had varied greatly from one region to another.',
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the press that Gutenberg used ----.',
        options: [
          'grew out of a device already used to make wine and olive oil',
          'had first been built by Bi Sheng to print with baked clay type',
          'could only print with an ink that was made from grapes and olives',
          'was too costly for printers in most European towns to buy',
          'had earlier been used in Korea to print the Buddhist text Jikji',
        ], answer: 0,
        explain: "Parçaya göre Gutenberg, uzun süredir üzüm ve zeytin sıkmakta kullanılan türden bir vidalı presi uyarladı ('adapted the kind of screw press that had long been used to squeeze grapes and olives'); yani pres, şarap ve zeytinyağı yapımında zaten kullanılan bir aletten geliştirildi. Bi Sheng'in pişmiş topraktan harf yaptığı söyleniyor ama bir pres yaptığı söylenmiyor. Üzüm ve zeytin mürekkeple değil, presin geçmişiyle ilgili; Gutenberg'in mürekkebi yağlıydı. Presin pahalılığı parçada geçmiyor; yüzyıl bitmeden iki yüzü aşkın kentte matbaa kurulduğu düşünülüyor. Jikji ise Kore'de metal harfle basıldı; Gutenberg'in presiyle bir ilgisi yok." },
      { konu: ['gönderim'],
        q: 'What does the word "they" in the passage refer to?',
        options: [
          'the monks and the professional scribes',
          'the craftsmen of China and Korea',
          'the letters, ink and press Gutenberg used',
          'the grapes and olives squeezed in old presses',
          'the merchants and teachers who bought books',
        ], answer: 2,
        explain: "'They', 'Each of these drew on older crafts, but together they made printing fast and reliable' cümlesinde geçiyor ve bir önceki cümlede sayılan üç öğeyi gösteriyor: Gutenberg'in seri ürettiği metal harfler, harflere yapışan yağlı mürekkep ve uyarladığı pres. Baskıyı hızlı ve güvenilir kılan, bunların birleşimiydi. Hemen önceki cümlenin sonundaki üzüm ve zeytin en yakın çoğul isim olduğu için bir tuzak; baskıyı onlar hızlandırmadı. Keşişler ve kâtipler, Çinli ve Koreli zanaatkârlar, tüccarlar ve öğretmenler başka cümlelerde geçiyor ve cümlenin anlamına uymuyor." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that ----.',
        options: [
          'commercial motives played a part in making spelling more uniform',
          'spelling in most European languages had largely been fixed long before 1450',
          'monks were probably the first people in Europe to print books with metal type',
          'most Europeans could afford to buy books by the end of the fifteenth century',
          'Gutenberg learnt how to make metal type from Korean printers',
        ], answer: 0,
        explain: "Parçaya göre aynı baskıyı pek çok farklı yerde satmayı uman matbaacılar, birçok yaygın sözcük için zamanla tek bir yazımda karar kıldı; bu da bölgeden bölgeye çok değişen yazı dillerinin birörnekleşmesine yardım etti. Satış kaygısının yazımın birörnekleşmesinde bir payı olduğu buradan çıkar. Yazımın 1450'den çok önce büyük ölçüde yerleştiğini söyleyen seçenek parçayla çelişiyor: yazı dillerinin bölgeden bölgeye çok değiştiği söyleniyor. Avrupa'da metal harfle ilk basanların keşişler olduğu ve Gutenberg'in Koreli matbaacılardan öğrendiği parçada geçmiyor. Avrupalıların çoğunun kitap alabildiği de aşırı bir genelleme: parça yalnız el yazmasına hiç para veremeyecek birçok tüccardan, öğretmenden ve başka okurdan söz ediyor." },
      { konu: ['yazarın amacı'],
        q: 'The primary purpose of the passage is to ----.',
        options: [
          'argue that Gutenberg deserves little credit, as printing began in East Asia',
          'compare the daily work of medieval scribes with that of the first printers',
          'explain why printing spread more slowly in Europe than in China and Korea',
          'describe how Gutenberg built his press and how much it cost him to do so',
          "show what was new in Gutenberg's work and what it changed in Europe",
        ], answer: 4,
        explain: "Parça önce baskının Avrupa'da icat edilmediğini Çin ve Kore'deki örneklerle gösteriyor. Sonra Gutenberg'in asıl yeniliğinin tek bir buluş değil, metal harf, mürekkep ve presten oluşan işleyen bir düzen olduğunu anlatıyor. Son olarak bunun Avrupa'da neleri değiştirdiğini sıralıyor: matbaanın iki yüzü aşkın kente yayılması, kitapların daha geniş bir okur kitlesine ulaşması ve yazımın birörnekleşmesi. Doğru seçenek Gutenberg'in getirdiği yeniliği ve bunun Avrupa'da neleri değiştirdiğini özetliyor. Gutenberg'in pek az övgü hak ettiği iddiası parçanın tutumuyla çelişiyor; parça onun kurduğu düzeni önemli buluyor. Kâtiplerle matbaacıların gündelik işini karşılaştırmak ve baskının Avrupa'da Doğu Asya'dakinden yavaş yayılması parçada yok. Presin nasıl yapıldığı ve maliyeti de anlatılmıyor; pres yalnız bir cümlede geçiyor." },
    ] },

  // ---------- diyalog tamamlama ----------
  { id: 'gm-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['soru-cevap uyumu'],
    q: "Emre: Excuse me, is this book really more than five hundred years old?\nClara: Yes, it was printed in Venice in 1497. It's one of the oldest books in our collection.\nEmre: ----\nClara: An artist painted them in by hand after the pages had been printed. That's why no two copies look exactly the same.\nEmre: So in a way, every copy is one of a kind!",
    options: [
      'How many copies of this book were printed in Venice that year?',
      'Is it all right if I take a photo of the pages?',
      'Who wrote this book, and what is it mainly about?',
      'How were the large coloured letters on this page made?',
      'Why do some of the pages look so yellow and worn?',
    ], answer: 3,
    explain: "Clara'nın cevabı, sayfalar basıldıktan sonra bir sanatçının 'onları' elle boyadığını söylüyor; bu yüzden hiçbir kopya ötekinin tıpatıp aynısı değil. 'Them' (onları) boyanabilecek, çoğul bir şeyi gösteriyor: sayfadaki büyük renkli harfler. Demek ki soru, bu harflerin nasıl yapıldığı. Venedik'te kaç kopya basıldığı sorusu önceki satıra uyar, ama cevap bir sayı vermiyor. Fotoğraf çekmek için izin isteyen soru bir evet-hayır sorusu; cevap izin de vermiyor, reddetmiyor da. Kitabı kimin yazdığı ve sayfaların neden sararıp yıprandığı soruları da bir sanatçının elle boyadığı şeylerle cevaplanmaz. 'Paint in' sonradan boyayarak eklemek, 'one of a kind' eşi benzeri olmayan demektir." },

  // ---------- anlamca en yakın cümle ----------
  { id: 'gm-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: ['disseminate'],
    level: 'zor', cefr: 'C1', konu: ['karşılaştırma'],
    q: 'What worried some rulers was not so much the printing press itself as the speed with which a single pamphlet could now disseminate new ideas among thousands of readers.',
    options: [
      'Some rulers were less troubled by the printing press itself than by how quickly one pamphlet could now spread new ideas to thousands of readers.',
      'Some rulers were more troubled by the printing press itself than by how quickly one pamphlet could now spread new ideas to thousands of readers.',
      'Some rulers were troubled both by the printing press itself and by how quickly one pamphlet could now spread new ideas to thousands of readers.',
      'Some rulers welcomed the printing press because one pamphlet could now spread new ideas to thousands of readers far more quickly than before.',
      'Some rulers feared that the printing press would slow down the spread of new ideas from a single pamphlet to thousands of readers.',
    ], answer: 0,
    explain: "'Not so much X as Y' (X'ten çok Y) iki şeyi tartar ve ağırlığı ikinciye verir: bazı hükümdarları kaygılandıran, matbaanın kendisinden çok tek bir broşürün yeni fikirleri binlerce okura ne kadar hızlı yayabildiğiydi. Doğru seçenek aynı karşılaştırmayı 'less … than' ile kuruyor: matbaanın kendisi, broşürün hızından daha az kaygı veriyordu. Ağırlığı matbaanın kendisine veren seçenek karşılaştırmayı tersine çeviriyor. 'Both … and' ikisini eşit kaygı nedenleri gibi gösteriyor ve aradaki farkı siliyor. Hükümdarların matbaayı memnuniyetle karşıladığını söyleyen seçenek kaygıyı yok sayıyor. Matbaanın fikirlerin yayılmasını yavaşlatacağından korkulduğunu söyleyen seçenek de cümlenin anlamını tersine çeviriyor." },

  // ---------- paragraf tamamlama ----------
  { id: 'gm-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['scribe', 'manuscript', 'carry out'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: "Printing did not put Europe's scribes out of work overnight. ----. Some wealthy collectors, for example, went on ordering finely decorated manuscripts, which they regarded as far more elegant than any printed book. Some scribes also found new work in the print shops themselves, carrying out tasks such as preparing texts for the press and checking printed sheets for mistakes.",
    options: [
      'Early printers often designed their books to look as much like handwritten ones as possible',
      'Within a few years, almost every scribe in Europe had been forced to find a new trade',
      'As printed books were cheaper, few buyers were willing to pay for a manuscript any more',
      'For several decades, books copied out by hand continued to find buyers',
      'In many monasteries, monks had been copying books by hand for hundreds of years',
    ], answer: 3,
    explain: "Boşluktan önce, matbaa yüzünden kâtiplerin bir gecede işsiz kalmadığı söyleniyor; boşluktan sonra 'for example' ile bir örnek geliyor: bazı varlıklı koleksiyoncular, basılı kitaplardan çok daha zarif buldukları süslü el yazmalarını ısmarlamayı sürdürdü. Bu örneğin açıkladığı genel yargı, elle kopyalanan kitapların onlarca yıl daha alıcı bulduğudur; son cümledeki 'also' da kâtiplerin iş bulmayı sürdürdüğü fikrine bir ekleme yapıyor. Kâtiplerin birkaç yıl içinde başka bir meslek bulmak zorunda kaldığını ya da alıcıların artık el yazmasına para vermediğini söyleyen seçenekler hem ilk cümleyle hem de sonraki örnekle çelişiyor. İlk matbaacıların kitaplarını el yazmasına benzetmeye çalışması ve manastırlarda yüzyıllardır kitap kopyalanması konuyla ilgili, ama 'for example' ile verilen örnek bunları açıklamıyor." },

  // ---------- akışı bozan cümle ----------
  { id: 'gm-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['subsequently', 'pioneer', 'take off'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Printing reached Istanbul early: Jewish printers are thought to have begun producing books in Hebrew there as early as 1493, and Armenian and Greek presses were subsequently set up in the city as well.',
      'Yet it was not until 1727 that İbrahim Müteferrika, a pioneer of Ottoman printing, received official permission to open a press for books in Ottoman Turkish.',
      'Historians still debate the reasons for this long delay, pointing to religious concerns, the cost of printing in Arabic script and the influence of the calligraphers who copied books by hand.',
      "Calligraphy is still taught in Istanbul today, and fine works by the old masters can be seen in several of the city's museums.",
      "Whatever the reasons, Müteferrika's press printed only a small number of books, and printing in Turkish did not really take off until the nineteenth century.",
    ], answer: 3,
    explain: "Parça Osmanlı'da matbaanın geç gelişini anlatıyor: İstanbul'da Yahudi matbaacıların büyük olasılıkla 1493'te İbranice kitap basmaya başladığını, Ermeni ve Rum matbaalarının da sonradan kurulduğunu (I); Osmanlı Türkçesiyle kitap basacak bir matbaa için İbrahim Müteferrika'nın ancak 1727'de izin aldığını (II); tarihçilerin bu uzun gecikmenin nedenlerini hâlâ tartıştığını (III); nedenler ne olursa olsun Müteferrika'nın matbaasının az sayıda kitap bastığını ve Türkçe baskının ancak 19. yüzyılda gerçekten yaygınlaştığını (V). IV. cümle ise bugün İstanbul'da hat sanatının öğretildiğini ve eski ustaların eserlerinin müzelerde görülebildiğini söylüyor. III. cümledeki hattatlara bağlanıyormuş gibi görünse de matbaanın gecikmesiyle ilgisi yok ve akışı kesiyor; V. cümlenin başındaki 'Whatever the reasons' (nedenler ne olursa olsun) da doğrudan III. cümledeki tartışmayı sürdürüyor." },
];

export default { id: 'genel-matbaa', course: C, title: U, order: 5, cards, items };
