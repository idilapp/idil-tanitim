// iDil › Sosyal bilimler › Mağara resimleri.
// Tümü özgün: Claude yazdı (13 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Plan: ../analiz/cogaltma-2-plani.md §4.9. Olgular (yalnız olgular; metin özgün):
// - Altamira (İspanya): tavan resimleri 1879'da fark edildi; mağarayı inceleyen amatör arkeolog resimlerin çok eski olduğuna
//   inandı; dönemin önde gelen uzmanları resimleri fazla ustalıklı ve renklerini fazla taze bulup tarih öncesine ait olduklarına
//   inanmadı; resimler 20. yüzyılın başında, Fransa'daki birkaç mağarada benzerleri bulunduktan sonra gerçek kabul edildi.
// - Lascaux (Fransa): 1940'ta dört genç buldu; İkinci Dünya Savaşı'ndan sonra halka açıldı; ziyaretçilerin nefesi karbondioksiti
//   ve nemi artırdı, resimler zarar gördü; 1963'te halka kapatıldı, bugün yalnız birkaç uzman girebiliyor. Kopyalar: Lascaux II
//   (1983; en bilinen bölümler), Lascaux IV (2016; çok daha eksiksiz).
// - Chauvet (Fransa, Ardèche): 1994'te bulundu; en eski resimleri yaklaşık 36.000 yıllık (temkinli); 400'ü aşkın hayvan
//   resmi, aralarında aslan ve gergedan; asıl girişi binlerce yıl bir kaya düşmesiyle kapalı kaldı.
// - Teknik: kırmızı ve sarı aşı boyası (demir oksit), siyah için kömür ya da mangan oksit; el izleri: el kayaya konup
//   çevresine boya üflenerek yapıldı. Anlam: av büyüsü, simgesel anlatı, ruhlar dünyasıyla bağ kuran törenler gibi yorumlar
//   tartışmalıdır; resimlerin anlamı kesin bilinmiyor.
// Yerleşik genel bilgi: hayvan yağı yakan taş lambalar; mağaralarda kayaya oyulmuş figürlerin boyalı figürlerle bir arada
// bulunması; bazı mağaraların binlerce yıl boyunca resim yapmak için kullanılması; bazı mağaralarda en çok avlanan hayvanın
// (ör. Lascaux'da ren geyiği) resimlerde pek görülmemesi; aşı boyasının bugün de sanat boyası olarak satılması; resimli
// mağaraların Avrupa dışında da (ör. Endonezya, Avustralya) bulunması.

const T = 'taslak';
const C = 'sosyal';
const U = 'Mağara resimleri';

const cards = [
  // ---------- isim ----------
  { code: 'pigment', title: 'boya maddesi, renk veren madde (pigment)', pos: 'isim', cefr: 'C1', ipa: '/ˈpɪɡmənt/',
    text: "Bir boyaya, mürekkebe ya da canlı bir dokuya rengini veren maddedir. Boya (paint) çoğu zaman pigmentin su ya da yağ gibi bir bağlayıcıyla karıştırılmasıyla elde edilir; yani pigment boyanın kendisi değil, ona rengini veren tozdur. Fen ve sağlık metinlerinde deri, saç ve bitkilerdeki renk maddeleri için de geçer. Sıfatı 'pigmented' (renkli, pigmentli), adı 'pigmentation' (renklenme).",
    example: 'The painter mixed the blue pigment with oil until it was smooth enough to spread on the canvas.',
    exampleTr: 'Ressam mavi boya maddesini, tuvale sürülebilecek kıvama gelene kadar yağla karıştırdı.',
    synonyms: ['colourant'], family: ['pigmented', 'pigmentation'] },
  { code: 'ancestor', title: 'ata, cet', pos: 'isim', cefr: 'B2', ipa: '/ˈænsestə(r)/',
    text: "Bir kişinin ya da topluluğun eskiden yaşamış büyükleri; çoğunlukla dede ve nineden daha uzak kuşaklar için kullanılır. Karşıtı 'descendant' (torun, soyundan gelen). Biyolojide bir türün evrimsel atası için de geçer: a common ancestor (ortak ata). Sıfatı 'ancestral' (atalardan kalma), adı 'ancestry' (soy).",
    example: 'She found an old photograph of her ancestors standing in front of the family farm.',
    exampleTr: 'Atalarının aile çiftliğinin önünde durduğu eski bir fotoğraf buldu.',
    synonyms: ['forebear', 'forefather'], family: ['ancestral', 'ancestry'] },
  { code: 'chamber', title: '(mağarada, yapıda) oda, salon, bölme', pos: 'isim', cefr: 'C1', ipa: '/ˈtʃeɪmbə(r)/',
    text: "Kapalı, çoğu zaman yer altındaki geniş boşluk ya da oda: an underground chamber (yer altı odası). Mağaralarda dar geçitlerle birbirine bağlanan 'salonlar' için kullanılır. Kalbin odacıkları (the chambers of the heart) ve meclislerin kamaraları (the upper chamber) için de geçer.",
    example: 'A narrow tunnel led the explorers into a huge chamber with stalactites hanging from its roof.',
    exampleTr: 'Dar bir tünel, kâşifleri tavanı sarkıtlarla dolu devasa bir salona çıkardı.',
    synonyms: ['hall', 'cavern'], family: [] },
  { code: 'replica', title: 'birebir kopya, aslına uygun yapılmış örnek', pos: 'isim', cefr: 'C1', ipa: '/ˈreplɪkə/',
    text: "Bir yapının, eserin ya da nesnenin aslına sadık kopyası: a full-size replica (gerçek boyutlu kopya). 'Copy'den daha resmîdir ve çoğu zaman aslını korumak ya da sergilemek için özenle yapılan kopyayı anlatır. Fiili 'replicate' (aynısını yapmak; bilimde bir deneyi yinelemek).",
    example: 'The museum displays a replica of the ancient helmet, while the original is kept in a dark, cool room.',
    exampleTr: 'Müze antik miğferin bir kopyasını sergiliyor; aslı ise karanlık ve serin bir odada saklanıyor.',
    synonyms: ['copy', 'reproduction'], family: ['replicate'] },
  { code: 'ritual', title: 'ayin, tören; alışkanlık hâline gelmiş düzen', pos: 'isim', cefr: 'C1', ipa: '/ˈrɪtʃuəl/',
    text: "Belli kurallara göre, belli bir sırayla yapılan dinî ya da toplumsal tören: a religious ritual (dinî ayin). Gündelik dilde her gün aynı biçimde yinelenen alışkanlık için de kullanılır: my morning ritual. Sıfat olarak da geçer (ritual objects: tören eşyaları); 'ritualistic' törensel demektir.",
    example: 'Every year, the monks perform an ancient ritual to mark the first day of spring.',
    exampleTr: 'Keşişler her yıl ilkbaharın ilk gününü kutlamak için eski bir ayin yapar.',
    synonyms: ['ceremony', 'rite'], family: ['ritualistic'] },

  // ---------- fiil ----------
  { code: 'depict', title: 'betimlemek, resmetmek; (bir biçimde) göstermek', pos: 'fiil', cefr: 'C1', ipa: '/dɪˈpɪkt/',
    text: "Bir şeyi resimle, heykelle ya da sözle göstermek: The mural depicts a battle (duvar resmi bir savaşı betimliyor). Edilgeni sık geçer: be depicted as (… olarak gösterilmek). Adı 'depiction' (betimleme, tasvir).",
    example: 'The large mosaic depicts a group of fishermen pulling their nets out of the sea.',
    exampleTr: 'Büyük mozaik, ağlarını denizden çeken bir grup balıkçıyı betimliyor.',
    synonyms: ['portray', 'represent'], family: ['depiction'] },
  { code: 'fade', title: '(renk) solmak; (ışık, ses) giderek zayıflamak', pos: 'fiil', cefr: 'B2', ipa: '/feɪd/',
    text: "Bir rengin, ışığın ya da sesin yavaş yavaş zayıflaması: the colours faded in the sun (renkler güneşte soldu). 'fade away' (giderek yok olmak) kalıbı da sık geçer. Sıfatı 'faded' (solmuş, soluk).",
    example: 'After years in a sunny window, the red curtains had faded to a pale pink.',
    exampleTr: 'Yıllarca güneş alan bir pencerede asılı kalan kırmızı perdeler solup açık pembeye dönmüştü.',
    synonyms: ['dim', 'pale'], family: ['faded'] },
  { code: 'interpret', title: 'yorumlamak, anlamlandırmak; sözlü çeviri yapmak', pos: 'fiil', cefr: 'B2', ipa: '/ɪnˈtɜːprɪt/',
    text: "Bir şeyin anlamını açıklamak ya da onu belli bir biçimde anlamak: interpret the results (sonuçları yorumlamak). 'interpret something as …' (bir şeyi … olarak yorumlamak) kalıbı sık geçer. Konuşmayı anında başka bir dile aktarmak anlamı da vardır; bu işi yapana 'interpreter' (tercüman) denir. Adı 'interpretation' (yorum).",
    example: 'The judge interpreted his long silence as a sign that he had something to hide.',
    exampleTr: 'Yargıç onun uzun suskunluğunu, saklayacak bir şeyi olduğunun işareti olarak yorumladı.',
    synonyms: ['explain', 'construe'], family: ['interpretation', 'interpreter'] },
  { code: 'carve', title: 'oymak, yontmak; (taşa, ağaca) kazımak', pos: 'fiil', cefr: 'B2', ipa: '/kɑːv/',
    text: "Taşı, ağacı ya da başka bir sert maddeyi keserek biçim vermek ya da yüzeyine şekil, yazı kazımak: carve a statue (heykel yontmak), carve your name into a tree (adını ağaca kazımak). Adı 'carving' (oyma; oyma eser). Mutfakta 'eti dilimlemek' anlamına da gelir.",
    example: 'Someone had carved two names and a heart into the trunk of the old oak tree.',
    exampleTr: 'Biri yaşlı meşenin gövdesine iki ad ve bir kalp kazımıştı.',
    synonyms: ['engrave', 'sculpt'], family: ['carving'] },
  { code: 'conceal', title: 'gizlemek, saklamak, örtmek', pos: 'fiil', cefr: 'C1', ipa: '/kənˈsiːl/',
    text: "Bir şeyi görünmez kılmak ya da bilinmesini engellemek: conceal the truth (gerçeği gizlemek), a concealed entrance (gizli giriş). 'Hide'dan daha resmîdir. Adı 'concealment' (gizleme).",
    example: 'The old map had been concealed behind a painting for more than a century.',
    exampleTr: 'Eski harita yüz yılı aşkın bir süre bir tablonun arkasında gizlenmişti.',
    synonyms: ['hide', 'cover up'], family: ['concealment'] },

  // ---------- sıfat ----------
  { code: 'authentic', title: 'gerçek, sahte olmayan; aslına uygun', pos: 'sıfat', cefr: 'B2', ipa: '/ɔːˈθentɪk/',
    text: "Bir eserin, belgenin ya da nesnenin sahte olmadığını, gerçekten iddia edilen kişiye ya da döneme ait olduğunu anlatır: an authentic signature (gerçek imza). Yemekte ve müzikte 'aslına uygun' anlamında da geçer: authentic Italian cooking. Adı 'authenticity' (gerçeklik, sahicilik).",
    example: 'The dealer showed us a certificate proving that the old coin was authentic.',
    exampleTr: 'Satıcı bize eski paranın sahte olmadığını kanıtlayan bir belge gösterdi.',
    synonyms: ['genuine', 'real'], family: ['authenticity', 'authenticate'] },
  { code: 'symbolic', title: 'simgesel, sembolik', pos: 'sıfat', cefr: 'C1', ipa: '/sɪmˈbɒlɪk/',
    text: "Bir şeyin kendisinden çok başka bir düşünceyi ya da değeri temsil ettiğini anlatır: a symbolic gesture (simgesel bir davranış). 'be symbolic of' (… simgesi olmak) kalıbı sık geçer. Adı 'symbol' (simge), fiili 'symbolise' (simgelemek).",
    example: 'Handing a visitor the keys to the city is a symbolic act; it gives them no real power.',
    exampleTr: 'Bir konuğa kentin anahtarlarını vermek simgesel bir davranıştır; ona gerçek bir yetki vermez.',
    synonyms: ['emblematic', 'representative'], family: ['symbol', 'symbolise'] },
  { code: 'fragile', title: 'kırılgan, kolay zarar gören, narin', pos: 'sıfat', cefr: 'B2', ipa: '/ˈfrædʒaɪl/',
    text: "Kolayca kırılan, bozulan ya da zarar gören şeyleri anlatır: a fragile vase (kırılgan bir vazo). Mecaz olarak da kullanılır: a fragile peace (kırılgan bir barış), a fragile ecosystem. Adı 'fragility' (kırılganlık). İngiliz söylenişi /ˈfrædʒaɪl/, Amerikan söylenişi /ˈfrædʒəl/.",
    example: 'The old silk dress is so fragile that it can no longer be put on display.',
    exampleTr: 'Eski ipek elbise o kadar kolay zarar görüyor ki artık sergilenemiyor.',
    synonyms: ['delicate', 'breakable'], family: ['fragility'] },
  { code: 'vivid', title: '(renk) canlı, parlak; (anlatım, anı) canlı', pos: 'sıfat', cefr: 'B2', ipa: '/ˈvɪvɪd/',
    text: "Renkler için 'canlı, parlak', anlatımlar ve anılar için 'gözünde canlanacak kadar açık ve ayrıntılı' demektir: vivid colours, a vivid description, a vivid memory. Zarfı 'vividly' (canlı biçimde).",
    example: 'The market stalls were piled high with fruit in vivid shades of orange, red and green.',
    exampleTr: 'Pazar tezgâhları turuncunun, kırmızının ve yeşilin canlı tonlarındaki meyvelerle doluydu.',
    synonyms: ['bright', 'brilliant'], family: ['vividly'] },
  { code: 'prehistoric', title: 'tarih öncesi, yazıdan önceki döneme ait', pos: 'sıfat', cefr: 'C1', ipa: '/ˌpriːhɪˈstɒrɪk/',
    text: "Yazılı kayıtların başlamasından önceki dönemi anlatır: prehistoric tools (tarih öncesi aletler). 'Historic' (tarihî önemi olan) ve 'historical' (tarihle ilgili) ile karıştırma. Adı 'prehistory' (tarih öncesi).",
    example: 'Workers building the new road found a prehistoric stone axe buried in the mud.',
    exampleTr: 'Yeni yolu yapan işçiler çamura gömülü, tarih öncesinden kalma bir taş balta buldu.',
    synonyms: [], family: ['prehistory'] },

  // ---------- öbek fiil ----------
  { code: 'stumble upon', title: 'rastlamak, tesadüfen bulmak', pos: 'öbek fiil', cefr: 'C1', ipa: '/ˌstʌmbl əˈpɒn/',
    text: "Bir şeyi aramadan, şans eseri bulmak: stumble upon a secret (bir sırra rastlamak). 'stumble on' ve 'stumble across' da aynı anlamdadır. 'Stumble' tek başına 'sendelemek, ayağı takılmak' demektir.",
    example: 'While looking for a cheap hotel, we stumbled upon a tiny restaurant that served the best fish in town.',
    exampleTr: 'Ucuz bir otel ararken kasabanın en iyi balığını yapan küçücük bir lokantaya rastladık.',
    synonyms: ['come across', 'chance upon'], family: [] },
  { code: 'date back', title: '(bir zamana) uzanmak, (… -den) kalma olmak', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌdeɪt ˈbæk/',
    text: "Bir şeyin ne kadar eski olduğunu söyler: date back to the twelfth century (12. yüzyıldan kalma olmak), date back 2,000 years (2.000 yıl öncesine uzanmak). 'date from' da aynı anlamdadır. Etken kullanılır: 'The castle dates back to …' denir, 'is dated back' denmez.",
    example: 'The custom of decorating eggs in spring dates back hundreds of years.',
    exampleTr: 'İlkbaharda yumurta süsleme geleneği yüzlerce yıl öncesine uzanıyor.',
    synonyms: ['date from', 'go back'], family: [] },

  // ---------- zarf ----------
  { code: 'skilfully', title: 'ustalıkla, becerikli biçimde', pos: 'zarf', cefr: 'C1', ipa: '/ˈskɪlfəli/',
    text: "Bir işin ustalık isteyen biçimde yapıldığını anlatır: skilfully made (ustalıkla yapılmış). İngiliz yazımı 'skilfully', Amerikan yazımı 'skillfully'dir. Sıfatı 'skilful' (usta, becerikli), adı 'skill' (beceri).",
    example: 'The old shoemaker skilfully repaired my boots in less than an hour.',
    exampleTr: 'Yaşlı ayakkabıcı botlarımı bir saatten kısa sürede ustalıkla onardı.',
    synonyms: ['expertly', 'deftly'], family: ['skilful', 'skill'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'sr-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['pigment', 'replica', 'prehistoric'],
    level: 'orta', cefr: 'C1', konu: ['isim'],
    q: 'Prehistoric painters could not simply buy their colours, so every ---- they used had to be prepared by hand, usually by grinding a coloured earth such as ochre into a fine powder.',
    options: ['pigment', 'fragment', 'replica', 'texture', 'sediment'], answer: 0,
    explain: "Tarih öncesi ressamlar renklerini satın alamıyordu; kullandıkları her renk maddesini, aşı boyası gibi renkli bir toprağı ince toz hâline getirerek kendileri hazırlıyordu: 'pigment' (boyaya rengini veren madde). Biçimce benzeyen 'fragment' (kırık parça) toz hâline getirilerek hazırlanmaz. 'Sediment' (tortu, çökelti) suyun bıraktığı doğal bir birikintidir; ressamın elde hazırladığı bir şey değildir. 'Texture' (doku) bir yüzeyin niteliğidir, toprak öğütülerek elde edilmez. Ünitenin kart sözcüğü 'replica' (birebir kopya) da renklerden söz eden bu bağlama uymaz." },

  // ---------- dil bilgisi ----------
  { id: 'sr-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['carve', 'prehistoric'],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'Prehistoric artists often combined two techniques: in many caves, figures carved into the rock with stone tools appear ---- painted ones, and some animals were both carved and painted.',
    options: ['instead of', 'alongside', 'despite', 'on behalf of', 'regardless of'], answer: 1,
    explain: "'Alongside' (… ile yan yana, … ile birlikte) iki şeyin aynı yerde bir arada bulunduğunu anlatır: birçok mağarada taş aletlerle kayaya oyulmuş figürler boyalı figürlerle yan yana görülür. Cümlenin başı (sanatçılar iki tekniği çoğu zaman bir arada kullandı) ve sonu (bazı hayvanlar hem oyuldu hem boyandı) da bunu doğruluyor. 'Instead of' (… yerine) oyma figürlerin boyalıların yerini aldığını söyler; iki yöntemin bir arada kullanıldığı bilgisiyle çelişir. 'Despite' (-e rağmen) burada olmayan bir karşıtlık kurar. 'On behalf of' (… adına) ve 'regardless of' (… ne olursa olsun) anlam kurmaz." },

  { id: 'sr-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['conceal', 'depict'],
    level: 'zor', cefr: 'C1', konu: ['sıfat cümleciği'],
    q: 'Chauvet Cave in southern France, ---- entrance was concealed by a rockfall for thousands of years, contains hundreds of animal images, ---- depict lions, rhinoceroses and other animals no longer found in Europe.',
    options: ['which / many of them', 'whose / most of them', 'where / most of whom', 'of which / some of what', 'whose / many of which'], answer: 4,
    explain: "İlk boşluktan sonra gelen 'entrance' (giriş) mağaraya ait; bu iyelik ilişkisini 'whose' kurar: 'whose entrance was concealed' (girişi gizli kalmış olan). İkinci boşluktan sonra yeni bir yüklem ('depict') geliyor; virgülden sonra 'images'ı niteleyen bir sıfat cümleciği gerekir: 'many of which depict' (pek çoğu … betimleyen). 'Many of them' ve 'most of them' iki cümleyi bağlaçsız birleştirir; bu yüzden ilk yarısı doğru olan 'whose / most of them' da olmaz. 'Which entrance' ve 'of which entrance' bu biçimde kurulamaz; 'where' ise yer bildirir, iyelik bildirmez (üstelik tekil 'entrance' önünde 'the' ya da 'its' olmadan kullanılamaz). 'Whom' insanlar içindir; 'some of what' da burada dil bilgisi açısından yanlış." },

  { id: 'sr-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['nicelik'],
    q: 'Ochre and manganese oxide, unlike charcoal, are minerals rather than the remains of living things, so ---- contains the kind of carbon that radiocarbon dating relies on, and paintings made only with these two materials usually have to be dated in other ways.',
    options: ['both of them', 'either of them', 'none of them', 'every one of them', 'neither of them'], answer: 4,
    explain: "Cümle iki maddeden söz ediyor: aşı boyası (ochre) ve mangan oksit. İkisi de canlı kalıntısı değil, mineral; bu yüzden ikisi de radyokarbon tarihlemesinin dayandığı türden karbonu içermez. İki şey için 'hiçbiri' 'neither'dır; 'neither of them' resmî yazıda tekil fiil alır: 'contains'. 'None of them' aynı anlamı ikiden çok şey için verir; burada yalnız iki madde var. 'Both of them' 'ikisi de içerir' der ve çoğul fiil ister; hem tekil 'contains' ile hem de bu resimlerin başka yollarla tarihlendirilmesi gerektiği bilgisiyle çelişir. 'Either of them' olumlu cümlede 'hangisi olursa' der; maddelerden birinin bu karbonu içerdiğini söyler ve cümlenin geri kalanıyla çelişir. 'Every one of them' en az üç şeyden oluşan bir grup için kullanılır; anlamı da 'hepsi içerir'e döner." },

  // ---------- cümle tamamlama ----------
  { id: 'sr-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['skilfully', 'date back'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: '----, the paintings in Chauvet Cave are as skilfully drawn as anything found in caves such as Lascaux, which were decorated many thousands of years later.',
    options: [
      'Because they were made when people had only just begun to paint',
      'Even though their makers could build on a long tradition of painting',
      'Although the oldest of them date back around 36,000 years',
      'Unless they are compared with the work of painters from later periods',
      'Since many of them have been damaged by water seeping into the cave',
    ], answer: 2,
    explain: "Ana cümle, Chauvet'deki resimlerin binlerce yıl sonra süslenen Lascaux gibi mağaralardaki resimler kadar ustalıklı olduğunu söylüyor. Karşıtlığı resimlerin çok eski olması kurar: en eskileri yaklaşık 36.000 yıl öncesine uzansa da (although) ustalıkları sonrakilerden geri kalmıyor. Uzun bir resim geleneğine dayanabilmek ustalığın nedenidir, karşıtı değil; 'even though' ile bağlanamaz. İnsanların resim yapmaya yeni başladığı bir dönem ustalığı açıklamaz; tersine, düşük bir beceri beklenmesine yol açar. Suyun verdiği zarar ustalığın nedeni olamaz. 'Unless' ile kurulan koşul da anlamsızdır, çünkü karşılaştırmayı ana cümlenin kendisi yapıyor." },

  { id: 'sr-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['vivid', 'fade'],
    level: 'orta', cefr: 'B2', konu: ['neden-sonuç'],
    q: 'Because the cave had been sealed off from the outside air for thousands of years, ----.',
    options: [
      'researchers can no longer work out with any accuracy how old its paintings are',
      'most of its paintings had faded so badly that they could hardly be seen at all',
      'its painters must have worked in daylight close to the entrance',
      'the colours of its paintings were still vivid when explorers first entered it',
      'it was opened to the public almost as soon as it had been discovered',
    ], answer: 3,
    explain: "'Because' bir neden veriyor: mağara binlerce yıl dış havadan yalıtılmıştı. Bunun doğal sonucu, kâşifler mağaraya ilk girdiğinde resimlerin renklerinin hâlâ canlı olmasıdır. Resimlerin neredeyse görünmeyecek kadar solması bu nedenin tersini söyler. Mağaranın kapalı kalması resimlerin yaşını ölçmeyi engellemez, ressamların gün ışığında çalıştığını göstermez ve mağaranın bulunur bulunmaz halka açılmasını açıklamaz." },

  // ---------- çeviri ----------
  { id: 'sr-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['chamber'],
    level: 'orta', cefr: 'B2', konu: ['ortaç öbeği'],
    q: 'Working by the light of small stone lamps that burned animal fat, the artists painted horses and bison on the walls of chambers far from the cave entrance.',
    options: [
      'Sanatçılar, mağara girişinden uzaktaki salonlarda çalışabilmek için hayvan yağı yakan küçük taş lambalar yaptı ve duvarlara at ve bizon çizdi.',
      'Hayvan yağı yakan küçük taş lambaların ışığında çalışan sanatçılar, at ve bizon resimlerini mağara girişine yakın salonların duvarlarına yaptı.',
      'Hayvan yağı yakan küçük taş lambaların ışığında çalışan sanatçılar, mağara girişinden uzaktaki salonların duvarlarına at ve bizon resimleri yaptı.',
      'Sanatçıların bir kısmı, girişten uzak salonlarda at ve bizon resimleri yaparken hayvan yağı yakan taş lambaların ışığından yararlandı.',
      'Mağara girişinden uzaktaki salonların duvarlarına at ve bizon resimleri yapan sanatçılar, bu salonları sonradan yağ lambalarıyla aydınlattı.',
    ], answer: 2,
    explain: "'Working by the light of …' bir ortaç öbeğidir ve ana cümlenin öznesini (the artists) niteler: sanatçılar resimleri yaparken lambaların ışığında çalışıyordu. Doğru çeviri bunu 'ışığında çalışan sanatçılar' diye karşılar; 'far from the cave entrance' de 'mağara girişinden uzaktaki' olur. Yanlışlardan biri lambaların bu salonlarda çalışabilmek için yapıldığını ekliyor; İngilizcede böyle bir amaç yok. Biri salonları girişe yakın gösteriyor. Biri 'sanatçıların bir kısmı' diyerek kapsamı daraltıyor. Kalan yanlış seçenek sırayı bozuyor: salonların resimler yapıldıktan sonra aydınlatıldığını söylüyor." },

  { id: 'sr-c2', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['depict'],
    level: 'zor', cefr: 'C1', konu: ['sıfat cümleciği'],
    q: 'Bazı mağaralarda, duvarlara en sık resmedilen hayvanlar ressamların en çok avladığı hayvanlar değildi.',
    options: [
      'In some caves, the animals that the painters hunted most were also the ones depicted most often on the walls.',
      'In some caves, none of the animals that the painters hunted were ever depicted on the walls.',
      'In some caves, the painters who hunted the most animals were not the ones who depicted them on the walls.',
      'In some caves, the painters chose to depict animals on the walls because they had failed to hunt them.',
      'In some caves, the animals most often depicted on the walls were not those the painters hunted most.',
    ], answer: 4,
    explain: "Türkçe cümlede iki sıfat cümleciği var: 'duvarlara en sık resmedilen hayvanlar' (the animals depicted most often on the walls) ve 'ressamların en çok avladığı hayvanlar' (the ones that the painters hunted most). Cümle bu ikisinin aynı hayvanlar olmadığını söylüyor; doğru çeviri iki cümleciği de doğru isme bağlar ve olumsuzluğu korur. Yanlışlardan biri olumsuzluğu atıp ikisini aynı hayvanlar yapıyor. Biri avlanan hayvanların hiçbirinin resmedilmediğini söyleyerek kapsamı genişletiyor. Biri cümleciği hayvanlara değil ressamlara bağlıyor. Kalan yanlış seçenek Türkçede olmayan bir neden ekliyor." },

  // ---------- okuma parçası (4 soru) ----------
  { id: 'sr-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T,
    cards: ['skilfully', 'prehistoric', 'authentic', 'stumble upon', 'fragile', 'replica'],
    level: 'zor', cefr: 'C1', title: 'Altamira ve Lascaux',
    text: "When paintings were noticed on the ceiling of a cave at Altamira, in northern Spain, in 1879, the amateur archaeologist who explored it was convinced that they were extremely old. Most of the leading experts of the day disagreed. Their doubts did not arise because the images were crude; on the contrary, the bison had been painted so skilfully, and their colours looked so fresh, that many specialists refused to believe that prehistoric people could have produced them. It was only in the early twentieth century, after comparable paintings had turned up in several caves in France, that the Altamira images were widely accepted as authentic. Lascaux, in south-western France, faced a very different problem. Stumbled upon by four teenagers in 1940, the cave was opened to the public after the Second World War and was soon receiving large numbers of visitors. Their breath, however, raised the levels of carbon dioxide and moisture inside, and the fragile paintings began to suffer. This led the authorities to close the cave in 1963, and today only a handful of specialists are allowed to enter it. Since then, the public has had to make do with replicas: Lascaux II, which reproduces the best-known parts of the cave, opened nearby in 1983, and a far more complete copy, Lascaux IV, followed in 2016.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, many experts at first refused to accept the paintings at Altamira because ----.',
        options: [
          'they seemed too accomplished to be the work of people from such a distant age',
          'the animals on the ceiling looked crude and had clearly been painted in a hurry',
          'the man who explored the cave would not allow anyone else to examine them',
          'their colours had faded so much that the images were difficult to make out',
          'similar images in France had already been exposed as recent forgeries',
        ], answer: 0,
        explain: "Parçaya göre uzmanların kuşkusu resimlerin kaba olmasından değil, tersine fazla iyi olmasından doğdu: bizonlar o kadar ustalıkla boyanmış, renkleri o kadar taze görünüyordu ki pek çok uzman tarih öncesi insanların bunları yapabileceğine inanmadı. Resimlerin kaba ve aceleyle yapılmış görünmesi bunun tersidir. Renklerin solduğu da parçayla çelişiyor; renkler taze görünüyordu. Mağarayı inceleyen kişinin başkalarını resimlere yaklaştırmadığı parçada geçmiyor. Fransa'daki benzer resimler sahte çıkmadı; tersine, onların bulunmasıyla Altamira'nın resimleri gerçek kabul edildi." },
      { konu: ['ayrıntı'],
        q: 'It is stated in the passage that Lascaux IV ----.',
        options: [
          'was the first copy of the cave that members of the public could visit',
          'covers much more of the original cave than Lascaux II does',
          'was built so that specialists could study the paintings in safety',
          'opened in the same year as the original cave was closed to visitors',
          'shows only the best-known parts of the cave, just as Lascaux II does',
        ], answer: 1,
        explain: "Parçaya göre 1983'te açılan Lascaux II mağaranın en bilinen bölümlerini yeniden üretiyor; 2016'da açılan Lascaux IV ise çok daha eksiksiz bir kopya. Demek ki Lascaux IV, asıl mağaranın çok daha büyük bir bölümünü kapsıyor. Halkın gezebildiği ilk kopya Lascaux IV değil, Lascaux II'dir. Uzmanların çalışması için yapıldığı parçada geçmiyor. Mağara 1963'te kapandı, Lascaux IV ise 2016'da açıldı. Yalnız en bilinen bölümleri gösteren kopya Lascaux II'dir." },
      { konu: ['gönderim'],
        q: 'The word "This" in the passage refers to ----.',
        options: [
          'the doubts that experts once had about the paintings at Altamira',
          'the harm that changes in the air were doing to the paintings',
          'the discovery of the cave by a group of young people in 1940',
          'the building of a copy of the cave close to the original site',
          'the end of the Second World War in Europe',
        ], answer: 1,
        explain: "'This', hemen önceki cümlede anlatılan durumu gösteriyor: ziyaretçilerin nefesi mağaradaki karbondioksiti ve nemi artırdı ve kolay zarar gören resimler bozulmaya başladı. Yetkilileri mağarayı 1963'te kapatmaya götüren budur. Altamira'daki kuşkular parçanın ilk yarısında anlatılıyor ve başka bir mağarayla ilgili. Mağaranın 1940'ta gençlerce bulunması kapanmanın nedeni değil. Yakına kopya yapılması kapanmadan sonra geldi. Savaşın sonu ise yalnız mağaranın ne zaman açıldığını belirtiyor." },
      { konu: ['yazarın amacı'],
        q: 'The primary purpose of the passage is to ----.',
        options: [
          'explain the methods that prehistoric artists used to produce their colours',
          'argue that famous painted caves should no longer be shown to the public',
          'show that experts are usually right to doubt surprising discoveries',
          'compare the ages of the paintings found at Altamira and at Lascaux',
          'show how two famous painted caves each ran into a different difficulty',
        ], answer: 4,
        explain: "Parça iki ünlü mağaranın bulunduktan sonra karşılaştığı farklı sorunları anlatıyor: Altamira'daki resimlerin gerçek olduğu uzun süre kabul edilmedi; Lascaux ise ziyaretçilerin verdiği zarar yüzünden halka kapatıldı. Ressamların renkleri nasıl elde ettiği parçada geçmiyor. Parça resimli mağaraların halka hiç gösterilmemesi gerektiğini savunmuyor; yalnız Lascaux'da olanı aktarıyor. Uzmanların şaşırtıcı buluşlardan kuşkulanmakta çoğunlukla haklı olduğunu da göstermiyor; Altamira'da uzmanlar yanıldı. İki mağaradaki resimlerin yaşı da karşılaştırılmıyor." },
    ] },

  // ---------- anlamca en yakın cümle ----------
  { id: 'sr-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['olumsuzluk', 'kapsam'],
    q: 'It would be wrong to assume that all the images in a decorated cave were painted at the same time, since some caves were used by artists over many thousands of years.',
    options: [
      'Since some caves were used by artists over many thousands of years, none of the images in a decorated cave can have been painted at the same time.',
      'In most decorated caves, the images were probably painted over many thousands of years rather than all at the same time.',
      'As artists returned to some caves over a long period, the images in one cave were not necessarily all painted at once.',
      'All the images in a decorated cave were painted at the same time, even though artists used some caves for thousands of years.',
      'We can only tell whether the images in a cave were painted at the same time if we know how long it was used.',
    ], answer: 2,
    explain: "Asıl cümle, resimli bir mağaradaki bütün resimlerin aynı anda yapıldığını varsaymanın yanlış olacağını söylüyor, çünkü bazı mağaralar binlerce yıl boyunca kullanıldı. Yani bir mağaradaki resimlerin hepsi aynı dönemden olmayabilir; 'hepsi değil' demek 'hiçbiri' demek değildir. Doğru seçenek bunu 'not necessarily all' ile korur. Hiçbir resmin aynı anda yapılmadığını söyleyen seçenek kapsamı aşırı genişletiyor. 'Mağaraların çoğunda' diyen seçenek 'bazı mağaralar'ı 'çoğu'na çeviriyor. Bütün resimlerin aynı anda yapıldığını söyleyen seçenek asıl cümleyle çelişiyor. Mağaranın ne kadar kullanıldığını bilme koşulu ise asıl cümlede yok." },

  // ---------- paragraf tamamlama ----------
  { id: 'sr-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T,
    cards: ['ancestor', 'interpret', 'symbolic', 'ritual'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'Ever since the first painted caves were found, scholars have tried to work out why our prehistoric ancestors went to such trouble to decorate them. ----. Others have interpreted the images as symbolic records of myths, or as part of rituals through which people hoped to make contact with a world of spirits. Each of these ideas fits some of the evidence, but none of them explains it all, and many specialists now doubt that the caves were ever painted for a single reason.',
    options: [
      'For decades, many scholars believed that painting an animal was a way of making sure it would be caught',
      'Some researchers now think that the oldest of these paintings may be more than 40,000 years old',
      'Few scholars today doubt that the paintings were made for no other purpose than decoration',
      'Many of the finest paintings lie deep underground, far from the places where people actually lived',
      'Painted caves have been found on several continents, although the best known are in France and Spain',
    ], answer: 0,
    explain: "Boşluktan sonraki cümle 'Others' (başkaları) diye başlıyor ve resimlere ilişkin başka yorumlar sıralıyor: mitlerin simgesel kayıtları ya da ruhlar dünyasıyla bağ kurmayı amaçlayan törenler. Demek ki boşluk ilk yorumu ve onu öne süren ilk grubu vermeli: uzun yıllar pek çok araştırmacı, bir hayvanı resmetmenin o hayvanın avlanmasını sağlamanın bir yolu olduğuna inandı. Resimlerin yaşıyla ilgili seçenek 'Some … Others' bağını biçimce kuruyor ama bir yorum değil, bir tarih veriyor. Resimlerin yalnız süs için yapıldığından pek az kişinin kuşkulandığını söyleyen seçenek son cümleyle çelişiyor. Resimlerin yer altındaki konumu ve resimli mağaraların bulunduğu kıtalar konuya yakın ama 'Others' için bir ilk grup vermiyor." },

  // ---------- akışı bozan cümle ----------
  { id: 'sr-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['prehistoric'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Prehistoric painters had only a handful of colours, and they made every one of them from natural materials.',
      'Ochre is still sold in art shops today, and many painters value it for its warm and long-lasting colours.',
      'Red and yellow came from ochre, an earth coloured by iron oxide, while black was usually made from charcoal or from manganese oxide.',
      'The same colours were also used for one of the oldest and most widespread kinds of image: the outline of a human hand.',
      'The painter placed a hand flat against the rock and blew paint around it, so that when the hand was lifted, its shape was left as a bare patch surrounded by colour.',
    ], answer: 1,
    explain: "Parça tarih öncesi ressamların renklerini neyden elde ettiğini ve bu renklerle el izlerini nasıl yaptığını sırayla anlatıyor: kırmızı ve sarı aşı boyasından, siyah kömürden ya da mangan oksitten geliyordu; aynı renklerle kayaya el izleri bırakıldı. II. cümle bugün sanat mağazalarında satılan aşı boyasına geçerek akışı kesiyor; üstelik aşı boyasını, onu tanıtan III. cümleden önce anıyor. IV. cümledeki 'The same colours' de III. cümledeki renklere bağlanıyor, II. cümleye değil." },
];

export default { id: 'sosyal-magara', course: C, title: U, order: 5, cards, items };
