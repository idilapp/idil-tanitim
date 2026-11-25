// iDil › Genel › Gönüllülük ve yardımlaşma (tür dengesi 2 ünitesi; Görev 18).
// Tümü özgün: Claude yazdı (24 Kasım 2026). ÖSYM sorusu, yayınevi, ders kitabı (Murphy, Azar), uygulama ya da gazete metni
// kopyalanmadı, uyarlanmadı; ÖSYM kitapçıkları yazarken açılmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Dağılım (görev brifi): kelime 8, anlamca en yakın cümle 12, diyalog 10, çeviri İngilizceden Türkçeye 9, Türkçeden
// İngilizceye 9; 48 soru, 8 kart. Kimlik öneki 'ggo-' ('gg-' kuş göçü, 'gk-' kahve ünitesinde kullanılıyor).
// Konu seçimi: gönüllü çalışma, komşuluk ve yardımlaşma, mahalle ve dernek hayatı, iş birliği. Siyasi taraf tutulmadı.
// Öteki ünitelerin, alan setlerinin ve denemelerin Olgular listeleri tarandı; satılmayan gıdanın hayır kurumlarına
// bağışlanması ve Fransa'nın 2016 yasası (genel-mutfak), gönüllülerde tükenmişlik ve Freudenberger (genel-is-hayati),
// kumsal ve park temizliği olguları (genel-plastik) tekrarlanmadı; deprem yardımı ve kan bağışı gibi alan konularına girilmedi.
//
// Olgular (yerleşik bilgi; her biri yalnız gösterildiği öğede; metinler özgün):
// - ggo-y5: Amerikalı hukukçu Edgar Cahn'ın 1980'lerden başlayarak yaydığı zaman bankaları: bir saatlik yardım, işin türü ne
//   olursa olsun aynı krediyi (bir saat) kazandırır. Yıl verilmedi ("from the 1980s onwards").
// - ggo-y12: İlk Repair Café 2009'da Amsterdam'da açıldı (kurucusu Martine Postma; parçada ad yok); amacın para kazandırmaktan
//   çok bozuk eşyanın çöpe gitmesini önlemek olduğu öğenin dil bilgisi kurgusudur ve yerleşik anlatımla uyumludur.
// - ggo-c1: Uluslararası Gönüllüler Günü, BM Genel Kurulu'nun 1985 kararıyla (A/RES/40/212) belirlendi; her yıl 5 Aralık'ta
//   anılır.
// - ggo-c4: Askıda kahve (caffè sospeso) geleneğinin Napoli kahvelerinde başladığı yaygın görüştür ("is generally thought",
//   temkinli; tarih verilmedi).
// - ggo-t1: İmece: Anadolu köylerinde bir ailenin tek başına bitiremeyeceği işin (hasat, ev yapımı gibi) komşularca ücret almadan
//   ve birlikte yapılması geleneği (genel tanım).
// - ggo-c2 (genel): karşılıklı yardımlaşmanın güçlü olduğu toplulukların krizden daha çabuk toparlanma eğiliminde olması
//   ("tend to", temkinli; topluluk dayanıklılığı araştırmalarının genel bulgusu, kişi ve yıl verilmedi).
// Düzeltme turu 1 (24 Kasım, kör çözüm 48/48): desen kuralları (task-18-desen-kurallari.md) uygulandı; yakın anlamda
// çeldiriciler yeniden yazıldı, çevirilerde c2, c5, c7, c8, t2, t6, t8 tek öğe üzerinde kuruldu; kelime cevaplarının ünite
// içinde çeldirici olarak dönmesi 8'den 2'ye indi; d4, d5, d8, y1, k1, c4, t1 denetçi önerisiyle düzeltildi.
// Düzeltme turu 2 (24 Kasım, yeniden kör çözüm 31/31): yakın anlamın 12 sorusu madde 8'e göre yeniden kuruldu (doğru şık
// hiçbir yüzey özelliğinde tek değil; açılış, biçim sınıfı, uzunluk, kalıp, yön ve mutlak sözcük bir çeldiricide de var);
// k2, t2, t5 düzeltildi.
// Düzeltme turu 3 (24 Kasım): yakın anlamda doğru şıkkın aynı açılışlı ikizi her soruda ikinci bir aynı açılışlı çeldirici
// çiftiyle dengelendi (y1, y2, y4, y8, y11, y12); y1-E ve y12 "founders" düzeltildi; t2 ve t5'te çoğunluk kesişimi kırıldı.
// Öteki öğelerde (kelime, yakın anlam, diyalog, kalan çeviriler) olgu yok; kişiler, dernekler ve olaylar kurgusal, genellemeler
// temkinli ("many", "some", "tend to", "may").

const T = 'taslak';
const C = 'genel';
const U = 'Gönüllülük ve yardımlaşma';

const cards = [
  // ---------- isim ----------
  { code: 'reciprocity', title: 'karşılıklılık; karşılıklı yardımlaşma', pos: 'isim', cefr: 'C1', ipa: '/ˌresɪˈprɒsəti/',
    text: "Bir iyiliğin, yardımın ya da hakkın iki yönlü olması: bir taraf ne veriyorsa öteki de benzerini verir. A relationship based on reciprocity (karşılıklılığa dayanan bir ilişki). Sıfatı 'reciprocal' (karşılıklı: reciprocal help), fiili 'reciprocate' (karşılık vermek). Toplum bilimi metinlerinde komşuluk, gönüllülük ve güven konularında sık geçer; tek yönlü yardım ise 'charity' ile anlatılır.",
    example: "Our street runs on reciprocity: I water your plants when you're away, and you feed my cat when I am.",
    exampleTr: 'Sokağımız karşılıklılıkla yürüyor: sen yokken ben senin çiçeklerini sularım, ben yokken sen benim kedimi beslersin.',
    synonyms: ['give and take', 'mutual exchange'], family: ['reciprocal', 'reciprocate'] },
  { code: 'upkeep', title: 'bakım; bakım gideri', pos: 'isim', cefr: 'C1', ipa: '/ˈʌpkiːp/',
    text: "Bir binayı, bahçeyi ya da aracı iyi durumda tutmak için yapılan iş ve harcanan para: the upkeep of a building, pay for the upkeep. Sayılamaz isimdir, çoğul almaz. 'Keep up' (sürdürmek; ayak uydurmak) öbek fiiliyle karıştırılmamalı. Daha resmî ve teknik eş anlamlısı 'maintenance'.",
    example: 'Volunteers have taken on the upkeep of the old cemetery, cutting the grass and mending its walls every spring.',
    exampleTr: 'Gönüllüler eski mezarlığın bakımını üstlendi; her bahar otlarını biçip duvarlarını onarıyorlar.',
    synonyms: ['maintenance', 'running costs'], family: [] },
  // ---------- sıfat ----------
  { code: 'selfless', title: 'özverili, kendini düşünmeyen, çıkar gözetmeyen', pos: 'sıfat', cefr: 'B2', ipa: '/ˈselfləs/',
    text: "Kendi çıkarını bir yana bırakıp başkalarını düşünen: selfless work, a selfless act. '-less' eki 'yoksun' anlamı katar; burada bencillikten yoksun olmak demektir. Karşıtı 'selfish' (bencil). Zarfı 'selflessly', adı 'selflessness'. Yakın anlamlısı 'unselfish'.",
    example: 'Her selfless work at the night shelter went largely unnoticed until a local newspaper wrote about it.',
    exampleTr: 'Gece barınağındaki özverili çalışması, yerel bir gazete onu yazana kadar pek fark edilmedi.',
    synonyms: ['unselfish', 'altruistic'], family: ['selflessly', 'selflessness'] },
  { code: 'communal', title: 'ortak (kullanılan), topluluğa ait; topluca yapılan', pos: 'sıfat', cefr: 'C1', ipa: '/ˈkɒmjʊnl/',
    text: "Bir grubun birlikte kullandığı ya da birlikte yaptığı: a communal kitchen, communal meals. 'Common' ile yakındır, ama 'communal' özellikle birlikte paylaşılan yer, eşya ve etkinlikler için kullanılır. İngiliz İngilizcesinde /kəˈmjuːnl/ diye de okunur. Zarfı 'communally'.",
    example: 'The flats are built around a communal courtyard, where residents grow herbs and share a long meal every summer.',
    exampleTr: 'Daireler ortak bir avlunun çevresine kurulmuş; sakinler orada ot yetiştiriyor ve her yaz birlikte uzun bir sofraya oturuyor.',
    synonyms: ['shared', 'collective'], family: ['communally'] },
  // ---------- fiil ----------
  { code: 'befriend', title: 'dostluk kurmak; (yalnız ya da yeni birine) arkadaş olmak, sahip çıkmak', pos: 'fiil', cefr: 'C1', ipa: '/bɪˈfrend/',
    text: "Birine, özellikle arkadaşa ya da yardıma ihtiyacı olan birine yaklaşıp onunla dostluk kurmak: befriend a newcomer. Nesne alır, edat istemez ('befriend with' denmez). Yalnız yaşayanlara düzenli arkadaşlık eden gönüllü programlarına İngiltere'de 'befriending schemes' denir.",
    example: 'A retired teacher befriended the young couple next door and showed them where to buy the best bread.',
    exampleTr: 'Emekli bir öğretmen yan dairedeki genç çiftle dostluk kurdu ve onlara en iyi ekmeğin nereden alınacağını gösterdi.',
    synonyms: ['make friends with', 'take under your wing'], family: ['befriending'] },
  { code: 'pledge', title: 'söz vermek, taahhüt etmek; (para, zaman) vermeyi üstlenmek', pos: 'fiil', cefr: 'C1', ipa: '/pledʒ/',
    text: "Bir şeyi yapacağına ya da vereceğine resmî ya da herkesin önünde söz vermek: pledge support, pledge to do something, pledge money to a cause. İsim olarak da kullanılır: make a pledge (taahhütte bulunmak). 'Promise'tan daha resmî ve bağlayıcıdır; bağış kampanyalarında sık geçer.",
    example: 'Dozens of residents pledged to plant a tree in front of their building before the end of the year.',
    exampleTr: 'Onlarca sakin, yıl bitmeden binasının önüne bir ağaç dikmeye söz verdi.',
    synonyms: ['promise', 'commit'], family: [] },
  // ---------- öbek fiil ----------
  { code: 'pitch in', title: '(ortak bir işe) el atmak, katkıda bulunmak', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌpɪtʃ ˈɪn/',
    text: "Bir grubun ortak işine katılıp emek ya da para vermek: Everyone pitched in. Nesne almaz; neye katkı verildiği 'pitch in with something' ya da 'pitch in to do something' ile söylenir. Gündelik ve sıcak bir söyleyiştir; resmî metinlerde 'contribute' yeğlenir.",
    example: "If everyone pitches in, we'll have the kitchen cleaned up in half an hour.",
    exampleTr: 'Herkes el atarsa mutfağı yarım saatte toparlarız.',
    synonyms: ['help out', 'chip in'], family: [] },
  { code: 'rally round', title: '(zor durumdaki birinin) çevresinde toplanıp destek olmak, yardımına koşmak', pos: 'öbek fiil', cefr: 'C1', ipa: '/ˌræli ˈraʊnd/',
    text: "Biri zor bir durumdayken insanların bir araya gelip ona yardım etmesi: Her friends rallied round. Nesneyle de kullanılır: rally round someone. İngiliz İngilizcesine özgü bir söyleyiştir; Amerikan İngilizcesinde 'rally around' daha yaygındır. 'Rally' tek başına 'toplantı, miting' ya da 'toparlanmak' anlamına da gelir.",
    example: 'When her laptop was stolen just before her exams, her flatmates did their best to rally round, lending her theirs and helping her rewrite her notes.',
    exampleTr: 'Sınavlarından hemen önce dizüstü bilgisayarı çalınınca ev arkadaşları ona destek olmak için ellerinden geleni yaptı; kendi bilgisayarlarını ödünç verip notlarını yeniden yazmasına yardım ettiler.',
    synonyms: ['stand by', 'come to the aid of'], family: [] },
];

const items = [
  // ---------- kelime ----------
  { id: 'ggo-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['upkeep', 'reciprocity'],
    level: 'orta', cefr: 'C1', konu: ['isim'],
    q: 'The council handed the old fire station over to the residents\' association for a nominal rent, on condition that the members would cover its ----, from heating bills to roof repairs.',
    options: ['scrutiny', 'reciprocity', 'upkeep', 'tenure', 'surplus'], answer: 2,
    explain: "Üyelerin ısınma faturalarından çatı onarımına kadar karşılayacağı şey binanın bakım masraflarıdır; bu anlam 'upkeep' (bakım, bakım gideri) ile verilir. 'Reciprocity' (karşılıklılık) iki taraf arasındaki yardım alışverişini anlatır; bir binanın faturaları için kullanılmaz. 'Scrutiny' (sıkı inceleme) ve 'tenure' (bir yeri ya da görevi elde tutma süresi) ödenecek bir gider değil. 'Surplus' (fazla, artan) da karşılanacak bir masrafı değil, harcamadan sonra kalanı anlatır." },

  { id: 'ggo-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B2', konu: ['isim'],
    q: 'Most of the money for the new playground came from a ---- organised by local parents, who ran a bake sale and a sponsored walk over two weekends.',
    options: ["fundraiser", "subsidy", "tariff", "grievance", "surcharge"], answer: 0,
    explain: "Para, yerel velilerin düzenlediği ve kek satışıyla sponsorlu bir yürüyüşü içeren bir etkinlikten gelmiş; bağış toplamak için düzenlenen etkinliğe 'fundraiser' denir. 'Subsidy' (devlet ya da kurum desteği) velilerin kek satarak düzenlediği bir şey değildir. 'Tariff' (gümrük vergisi; tarife) ve 'surcharge' (ek ücret) bir fiyata ya da mala konan paradır, düzenlenen bir etkinlik değil. 'Grievance' (şikâyet, yakınma) da bağlama uymaz." },

  { id: 'ggo-k3', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['selfless', 'communal'],
    level: 'orta', cefr: 'B2', konu: ['sıfat'],
    q: 'Nobody in the village was surprised when the retired nurse received the award; for decades she had looked after sick neighbours in a quiet, ---- way, never expecting anything in return.',
    options: ['grudging', 'communal', 'lavish', 'boastful', 'selfless'], answer: 4,
    explain: "'Never expecting anything in return' (karşılığında hiçbir şey beklemeden) emekli hemşirenin kendini düşünmeden yardım ettiğini gösteriyor; bu 'selfless' (özverili, çıkar gözetmeyen) ile anlatılır. 'Communal' (ortak, topluluğa ait) bir şeyin birlikte kullanıldığını ya da yapıldığını anlatır; tek bir kişinin yardım etme biçimini nitelemez. 'Grudging' (gönülsüz) yıllarca süren bu emekle, 'boastful' (övüngen) de 'quiet' (sessiz, gösterişsiz) sözüyle çelişir. 'Lavish' (bol keseden, savurgan) ise daha çok para, ikram ya da övgü için kullanılır." },

  { id: 'ggo-k4', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['communal'],
    level: 'orta', cefr: 'B2', konu: ['sıfat'],
    q: 'Instead of each flat having its own washing machine, the block has a ---- laundry room in the basement, and residents book the machines by the hour.',
    options: ["vacant", "private", "neighbourly", "communal", "redundant"], answer: 3,
    explain: "'Instead of each flat having its own' (her dairenin kendi makinesi yerine) ve makinelerin saat saat ayrılması, çamaşır odasını bütün sakinlerin birlikte kullandığını gösteriyor: 'communal' (ortak kullanılan). 'Private' (özel, tek kişiye ait) bu ortak kullanımla çelişir. 'Neighbourly' (komşuluğa yakışır, yardımsever) insanların davranışını niteler, bir odayı nitelemez. 'Vacant' (boş) odada makine olmadığını düşündürür; 'redundant' (gereksiz) de sakinlerin düzenli kullandığı bir odaya uymaz." },

  { id: 'ggo-k5', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['pledge', 'befriend'],
    level: 'orta', cefr: 'C1', konu: ['fiil'],
    q: 'At the end of the meeting, several local firms ---- to give a total of five hundred hours of staff time to the clean-up campaign, and the first of their employees will join it next Monday.',
    options: ['threatened', 'pledged', 'befriended', 'hesitated', 'pretended'], answer: 1,
    explain: "Firmalar kampanyaya toplam beş yüz saatlik personel zamanı vermeyi üstlenmiş; ilk çalışanların gelecek pazartesi katılacak olması bunun bağlayıcı bir söz olduğunu gösteriyor. Bu anlam 'pledge' (söz vermek, taahhüt etmek) ile verilir. 'Befriend' (dostluk kurmak) bir kişiyi nesne olarak ister, ardından 'to' ile mastar gelmez. 'Hesitate' (tereddüt etmek) çalışanların gelecek hafta geleceği bilgisiyle çelişir. 'Threaten' (tehdit etmek) bir yardım sözü için kullanılmaz; 'pretend' (-miş gibi yapmak) da sözün tutulacağını gösteren ikinci bölümle bağdaşmaz." },

  { id: 'ggo-k6', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['befriend'],
    level: 'orta', cefr: 'B2', konu: ['fiil'],
    q: 'Volunteers on the scheme are asked to ---- people who have just moved to the city, showing them around and inviting them to local events so that they feel less like outsiders.',
    options: ["dismiss", "abandon", "imitate", "befriend", "supervise"], answer: 3,
    explain: "Gönüllüler kente yeni taşınanları gezdiriyor, yerel etkinliklere çağırıyor ve onların kendilerini yabancı hissetmemesini istiyor; bu, onlarla dostluk kurmaktır: 'befriend'. 'Supervise' (denetlemek, gözetmek) bir yetki ilişkisi anlatır; yabancılık duygusunu gidermeyi amaçlamaz. 'Abandon' (yüzüstü bırakmak) ve 'dismiss' (önemsememek) bu amaçla çelişir; 'imitate' (taklit etmek) de bağlama uymaz." },

  { id: 'ggo-k7', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['rally round', 'pitch in'],
    level: 'zor', cefr: 'C1', konu: ['öbek fiil'],
    q: 'When the owner of the corner shop fell ill, his regular customers were quick to ---- him, taking turns to open up in the mornings until he was back on his feet.',
    options: ['turn against', 'fall out with', 'rally round', 'pitch in', 'look down on'], answer: 2,
    explain: "Müşteriler sabahları dükkânı sırayla açarak hastalanan sahibine destek oluyor; zor durumdaki birinin çevresinde toplanıp ona yardım etmek 'rally round' ile anlatılır. 'Pitch in' (işe el atmak) de yardımlaşmayı anlatır, ama nesne almaz: 'pitch in him' denmez, ancak 'pitch in to help him' denebilirdi. 'Turn against' (cephe almak), 'fall out with' (bozuşmak) ve 'look down on' (küçümsemek) müşterilerin dükkânı açık tutmasıyla çelişir." },

  { id: 'ggo-k8', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['pitch in'],
    level: 'orta', cefr: 'B2', konu: ['öbek fiil'],
    q: 'So many people offered to help after the storm that the organisers had to ---- some of them and ask them to come back the following weekend.',
    options: ["turn away", "pitch in", "look out for", "take over", "cheer up"], answer: 0,
    explain: "Fırtınadan sonra o kadar çok kişi yardım etmek istemiş ki düzenleyiciler bazılarını geri çevirip ertesi hafta sonu gelmelerini istemek zorunda kalmış; birini kabul etmeyip geri göndermek 'turn away' ile anlatılır. 'Pitch in' (işe el atmak) nesne almaz ve gönüllülerin yaptığı işi anlatır, düzenleyicilerin onlara ne yaptığını değil. 'Look out for' (kollamak, gözetmek) gönüllüleri gelecek hafta sonuna göndermekle bağdaşmaz. 'Take over' (devralmak) ve 'cheer up' (neşelendirmek) 'so many … that' ile kurulan sonuca bağlanmaz." },

  // ---------- anlamca en yakın cümle ----------
  { id: 'ggo-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['kapsam'],
    q: 'Not all of the volunteers who signed up in spring were still coming to the garden by the end of the summer.',
    options: [
      "The garden will probably no longer have all of its spring volunteers by the time September comes.",
      "Some of the volunteers who signed up in spring were no longer coming to the garden by the end of the summer.",
      "Every one of those who joined in spring had stopped visiting the garden before summer was over.",
      "Every one of those who joined in spring kept visiting the garden until summer was over.",
      "Some of the volunteers who signed up in spring did not start coming to the garden until the end of the summer.",
    ], answer: 1,
    explain: "'Not all … were still coming' (hepsi hâlâ gelmiyordu) gönüllülerin bir kısmının yaz sonunda artık gelmediğini söyler; doğru seçenek bunu 'bazıları yaz sonunda artık gelmiyordu' (no longer coming) diye, kökün sözcüklerine yakın kalarak veriyor. Aynı açılışlı öteki seçenek ters bir durum anlatıyor: o gönüllüler bahçeye ancak yaz sonunda gelmeye başlamış. 'Will probably … by the time September comes' olmuş bir durumu geleceğe ait bir tahmine çeviriyor. 'Every one' ile başlayan iki seçenek kapsamı bütüne genişletiyor: biri herkesin gelmeyi sürdürdüğünü ('not all' ile çelişir), öteki herkesin bıraktığını söylüyor; kök yalnız bir kısmın bıraktığını söylüyor." },

  { id: 'ggo-y2', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['devrik koşul cümlesi'],
    q: "Had the residents' association not stepped in, the old bathhouse would almost certainly have been turned into a car park.",
    options: [
      "It was too late for the residents' association to stop the old bathhouse becoming a car park.",
      "If the residents' association does not step in soon, the old bathhouse will almost certainly be turned into a car park.",
      "It was too late for local campaigners to save the historic baths, so the site became a parking area.",
      "The old bathhouse was almost certainly saved from becoming a car park by the residents' association.",
      "The old bathhouse would have been turned into a car park even if the residents' association had intervened.",
    ], answer: 3,
    explain: "'Had … not stepped in' devrik bir üçüncü tip koşuldur: dernek araya girmeseydi eski hamam neredeyse kesin otoparka dönüşecekti. Demek ki dernek araya girdi ve hamam kurtuldu; doğru seçenek bunu 'hamam neredeyse kesin olarak dernek sayesinde otopark olmaktan kurtuldu' diye anlatıyor. 'It was too late' ile başlayan iki seçenek, derneğin ya da yerel kampanyacıların hamamı kurtarmakta geç kaldığını söyleyerek sonucu tersine çeviriyor. 'If … does not step in soon' geçmişteki olayı geleceğe taşıyor. 'Even if … had intervened' ise müdahalenin hiçbir şeyi değiştirmeyeceğini söyleyerek koşulu ortadan kaldırıyor." },

  { id: 'ggo-y3', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['kip (modal)'],
    q: "Volunteers at the community centre don't have to stay for the whole evening, but they are expected to tell the coordinator when they leave.",
    options: [
      "Volunteers at the community centre mustn't stay for the whole evening, but they are expected to tell the coordinator when they leave.",
      "For volunteers at the community centre, staying until the end is optional, but they should let the coordinator know as they go.",
      "Helpers at the centre must remain until closing time unless the person in charge lets them go early.",
      "For volunteers at the community centre, staying until the end is compulsory, and they need not tell anyone when they go.",
      "Volunteers at the community centre don't have to tell the coordinator when they leave, but they are expected to stay for the whole evening.",
    ], answer: 1,
    explain: "'Don't have to' bir zorunluluğun olmadığını söyler: gönüllüler bütün akşam kalmak zorunda değil, isterlerse kalabilir. 'Are expected to' ise beklenen bir davranıştır: çıkarken koordinatöre haber vermek. Doğru seçenek sona kadar kalmayı isteğe bağlı (optional) sayıyor ve haber vermeyi koruyor. Aynı açılışlı öteki seçenek iki bölümü de tersine çeviriyor: kalmak zorunlu, haber vermek gereksiz. 'Mustn't stay' kalmayı yasaklıyor; 'don't have to' ile 'mustn't' aynı şey değildir. İki bölümün yerini değiştiren seçenek ve kapanışa kadar kalmayı zorunlu tutan seçenek de birinci bölümü tersine çeviriyor." },

  { id: 'ggo-y4', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: 'The more often people help out in their neighbourhood, the more connected to it they tend to feel.',
    options: [
      "Helping out in the neighbourhood, however frequently, seldom changes how attached residents are to it.",
      "People who help out in their neighbourhood too often may come to feel less connected to it.",
      "Helping out in the neighbourhood makes people feel connected to it only if they do it every day.",
      "People tend to feel more connected to their neighbourhood when others help out there more often.",
      "People who help out in their neighbourhood more frequently tend to feel more connected to it.",
    ], answer: 4,
    explain: "'The more …, the more …' (ne kadar …, o kadar …) iki şeyin birlikte arttığını söyler: insanlar mahallelerinde ne kadar sık yardım ederse kendilerini oraya o kadar bağlı hisseder; 'tend to' da temkin katar. Doğru seçenek aynı ilişkiyi 'more frequently … tend to feel more connected' diye, kökün sözcüklerine yakın kalarak kuruyor. Aynı açılışlı öteki seçenek ilişkiyi tersine çeviriyor: çok sık yardım edenler kendini daha az bağlı hissedebilir. Başkalarının yardımından söz eden seçenek ilişkinin öznesini değiştiriyor. Sık yardımın bağı pek değiştirmediğini söyleyen seçenek ilişkiyi ortadan kaldırıyor. 'Only if … every day' ise cümlede olmayan katı bir koşul ekliyor." },

  { id: 'ggo-y5', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['karşılaştırma'],
    q: "In the time banks that the American lawyer Edgar Cahn promoted from the 1980s onwards, an hour spent mending a neighbour's fence earns the same credit as an hour of legal advice.",
    options: [
      "In Edgar Cahn's time banks, an hour spent mending a neighbour's fence earns more credit than an hour of legal advice.",
      "In Edgar Cahn's time banks, an hour of advice from a lawyer earns twice the credit of an hour of fence repair.",
      "In Edgar Cahn's time banks, an hour of advice from a lawyer and an hour of fence repair earn exactly the same credit.",
      "In Edgar Cahn's time banks, whoever mends a neighbour's fence must later repay that neighbour with legal advice.",
      "In Edgar Cahn's time banks, an hour spent mending a neighbour's fence earns no credit, unlike an hour of legal advice.",
    ], answer: 2,
    explain: "Cümle, Cahn'ın yaydığı zaman bankalarında bir saatlik çit onarımının bir saatlik hukuki danışmanlıkla aynı krediyi kazandırdığını söylüyor. Doğru seçenek bunu 'bir avukattan bir saatlik danışmanlık ile bir saatlik çit onarımı tam olarak aynı krediyi kazandırır' diye veriyor ('advice from a lawyer' = 'legal advice'). Avukatın danışmanlığına iki kat kredi veren, çit onarımına daha çok kredi veren ya da hiç kredi vermeyen seçenekler eşitliği bozuyor. Çiti onaranın aynı komşuya borcunu hukuki danışmanlıkla ödemesi gerektiği de cümlede yok; cümle yalnız kredinin değerinden söz ediyor." },

  { id: 'ggo-y6', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['olumsuzluk'],
    q: 'Hardly any of the people who listen to the local radio station realise that it is run entirely by volunteers.',
    options: [
      "Scarcely anyone tuning in to the local station knows that everyone working there is unpaid.",
      "Hardly any of the people who listen to the local radio station would be surprised to hear that it is run entirely by volunteers.",
      "Hardly any of the people who listen to the local radio station realise that some of its staff are volunteers.",
      "Very few people who listen to the station give it their time for free, so most of its workers are paid.",
      "Scarcely anyone tuning in to the local station would be willing to work there without pay.",
    ], answer: 0,
    explain: "'Hardly any' (neredeyse hiçbiri) olumsuz bir anlam taşır: radyoyu dinleyenlerin çok azı onun tamamen gönüllülerce yürütüldüğünü biliyor. Doğru seçenek 'yerel istasyonu dinleyenlerden pek azı orada çalışan herkesin ücretsiz çalıştığını biliyor' diyerek hem azlığı hem 'entirely' (tamamen) bilgisini koruyor. Aynı açılışlı öteki seçenek konuyu değiştiriyor: dinleyicilerin orada ücretsiz çalışmaya istekli olup olmadığı. En yakın çeldirici çalışanların yalnızca 'bazılarının' gönüllü olduğunu söyleyerek 'entirely' bilgisini daraltıyor. Dinleyicilerin neredeyse hiçbirinin buna şaşırmayacağını, yani çoğunun bunu bildiğini söyleyen seçenek anlamı tersine çeviriyor; çalışanların çoğunun ücretli olduğunu söyleyen seçenek de cümleyle çelişiyor." },

  { id: 'ggo-y7', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['zaman: past perfect'],
    q: 'By the time the new association was officially registered, its members had already been cleaning the riverbank every Sunday for two years.',
    options: [
      "The group's weekly riverside clean-ups began a couple of years after it received legal recognition.",
      "By the time the new association is officially registered, its members will have been cleaning the riverbank every Sunday for two years.",
      "By the time the new association was officially registered, its members had only just started cleaning the riverbank on Sundays.",
      "For two years after their association became official, its members spent their Sundays cleaning the riverbank.",
      "For two years before their association became official, its members had spent their Sundays cleaning the riverbank.",
    ], answer: 4,
    explain: "'By the time' ve past perfect continuous ('had been cleaning') temizliğin kayıttan önce başlayıp iki yıl sürdüğünü gösterir. Doğru seçenek aynı sırayı 'dernek resmîleşmeden önceki iki yıl boyunca' diye kuruyor. Aynı açılışlı en güçlü çeldirici yalnız tek sözcüğü değiştiriyor: 'after' ile iki yıllık temizliği kayıttan sonraya taşıyor. 'Had only just started' temizliğin kayıt sırasında yeni başladığını söylüyor. 'Will have been cleaning' olayı geleceğe taşıyor. Temizliklerin kayıttan birkaç yıl sonra başladığını söyleyen seçenek de sırayı tersine çeviriyor." },

  { id: 'ggo-y8', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['neden-sonuç'],
    q: 'Because volunteers now look after the park, the council can spend that part of its budget on other services.',
    options: [
      "The council cut its budget for the park, which is why volunteers had to start looking after it.",
      "Since volunteers now look after the park, the council is able to spend that part of its budget on other services.",
      "The council cut its spending on gardeners and now pays the helpers a small wage instead.",
      "Since volunteers now look after the park, the council has had to cut back its spending on several other services.",
      "Although volunteers look after the park, the council still spends a large part of its budget on it.",
    ], answer: 1,
    explain: "Cümle bir neden-sonuç bağı kuruyor: parka artık gönüllüler baktığı için belediye o parayı başka hizmetlere harcayabiliyor. Doğru seçenek aynı bağı 'since' (-diği için) ile, kökün sözcüklerine yakın kalarak kuruyor. Aynı açılışlı öteki seçenek sonucu tersine çeviriyor: belediye başka hizmetlerdeki harcamayı kısmak zorunda kalmış. Belediyenin bütçeyi kestiğini ve bu yüzden gönüllülerin işe başladığını söyleyen seçenek neden ile sonucu yer değiştiriyor. Belediyenin parka yine büyük pay ayırdığı cümlede yok. Belediyenin bahçıvan harcamasını kesip gönüllülere küçük bir ücret ödediğini söyleyen seçenek de 'gönüllü' sözüyle çelişiyor." },

  { id: 'ggo-y9', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['karşıtlık'],
    q: 'However unselfish her work at the animal shelter may appear, she admits that she does it partly because it makes her feel useful.',
    options: [
      "However unselfish her work at the animal shelter may appear, she admits that she does it mainly because it makes her feel useful.",
      "People see her work at the animal shelter as unselfish mainly because she keeps quiet about feeling useful.",
      "However unselfish her work at the animal shelter may appear, she denies that she does it because it makes her feel useful.",
      "Her shelter work may look purely altruistic, yet by her own account feeling useful is among her reasons for doing it.",
      "Her shelter work may look purely altruistic, yet by her own account feeling useful is her only reason for doing it.",
    ], answer: 3,
    explain: "'However unselfish … may appear' (ne kadar özverili görünse de) bir karşıtlık kurar: işi özverili görünüyor, ama kadın bunu kısmen kendini işe yarar hissetmek için yaptığını kabul ediyor. Doğru seçenek 'tamamen özgecil görünebilir, ama kendi söylediğine göre işe yarar hissetmek nedenlerinden biri' diyerek hem karşıtlığı hem 'partly' (kısmen) bilgisini koruyor. Aynı açılışlı öteki seçenek 'her only reason' diyerek kısmi nedeni tek nedene çeviriyor. Kökün sözcüklerini koruyan iki seçenekten biri 'mainly' (asıl olarak) ile 'partly'yi büyütüyor, öteki 'denies' ile kabulü inkâra çeviriyor. İşinin özverili görünmesini onun bu duygudan söz etmemesine bağlayan seçenek cümlede olmayan bir neden ekliyor." },

  { id: 'ggo-y10', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edilgen'],
    q: 'More than two hundred residents were persuaded to set aside an hour a month for the neighbourhood scheme.',
    options: [
      "Unprompted, a couple of hundred locals offered the project an hour of their time every month.",
      "More than two hundred residents were persuaded to set aside an hour a week for the neighbourhood scheme.",
      "Over two hundred residents were talked into committing an hour a month to the neighbourhood scheme.",
      "More than two hundred residents were asked to set aside an hour a month for the scheme, but few agreed.",
      "Over two hundred residents talked the organisers into committing an hour a month to the scheme.",
    ], answer: 2,
    explain: "'Were persuaded to set aside' edilgen bir yapıdır: iki yüzü aşkın sakin, biri tarafından ikna edilerek ayda bir saat ayırmayı kabul etti. Doğru seçenek 'were talked into' (ikna edilip bir şeye razı edilmek) ile aynı anlamı veriyor. Aynı açılışlı öteki seçenek etken ile edilgeni karıştırıyor: sakinler düzenleyicileri ikna etmiş. 'An hour a week' ayda bir saati haftada bir saate çeviriyor. Sakinlere sorulduğunu ama çoğunun kabul etmediğini söyleyen seçenek iknanın başarılı olduğu bilgisini siliyor. 'Unprompted' (kimse istemeden) diyen seçenek de 'persuaded' ile çelişiyor." },

  { id: 'ggo-y11', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['unless'],
    q: 'Unless more neighbours come forward, the weekly visits to elderly residents will have to be cut to once a month.',
    options: [
      "If no more neighbours come forward, the weekly visits to elderly residents will have to be cut to once a month.",
      "Even if more neighbours come forward, the weekly visits to elderly residents will have to be cut to once a month.",
      "Because more neighbours have offered their help, elderly residents will now be visited weekly instead of monthly.",
      "If no more neighbours come forward, the weekly visits to elderly residents will be increased to twice a week.",
      "Because more neighbours have stopped helping, older people in the area now receive a visit only once a month.",
    ], answer: 0,
    explain: "'Unless' (… olmazsa, -medikçe) bir koşul kurar: daha fazla komşu gönüllü olmazsa haftalık ziyaretler ayda bire inecek. Doğru seçenek aynı koşulu 'if no more neighbours' ile, kökün sözcüklerine yakın kalarak kuruyor. Aynı açılışlı öteki seçenek sonucu tersine çeviriyor: gönüllü çıkmazsa ziyaretler artacakmış gibi. 'Even if' koşulu ortadan kaldırıyor: ne olursa olsun ziyaretler azalacakmış gibi. 'Because … have offered' gerçekleşmemiş bir koşulu olmuş gibi anlatıyor. Komşular yardımı bıraktığı için ziyaretlerin şimdiden ayda bire indiğini söyleyen seçenek de olası bir sonucu gerçekleşmiş gibi anlatıyor." },

  { id: 'ggo-y12', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['karşılaştırma'],
    q: 'The first Repair Café, which opened in Amsterdam in 2009, was intended not so much to save people money as to keep broken objects out of the bin.',
    options: [
      "Opened in Amsterdam in 2009, the first Repair Café saved people so much money that far fewer broken things were thrown away.",
      "The first Repair Café, which opened in Amsterdam in 2009, was intended both to save people money and to keep broken objects out of the bin.",
      "The first Repair Café, which opened in Amsterdam in 2009, was intended neither to save people money nor to keep broken objects out of the bin.",
      "When the Dutch capital got its first Repair Café in 2009, cutting waste mattered more to the people who started it than cutting household bills.",
      "When the Dutch capital got its first Repair Café in 2009, cutting household bills mattered more to the people who started it than cutting waste.",
    ], answer: 3,
    explain: "'Not so much X as Y' (X'ten çok Y) iki amacı tartar ve ağırlığı ikinciye verir: ilk Repair Café'nin asıl amacı insanlara para kazandırmaktan çok bozuk eşyaların çöpe gitmesini önlemekti. Doğru seçenek aynı tartıyı 'atığı azaltmak, onu başlatanlar için faturaları azaltmaktan daha önemliydi' diye veriyor (Hollanda'nın başkenti = Amsterdam). Aynı açılışlı öteki seçenek ağırlığı tersine çeviriyor. 'Both … and' iki amacı eşitliyor; 'neither … nor' ikisini de reddediyor. 'So much … that' ise cümlede olmayan bir neden-sonuç ilişkisi kuruyor." },

  // ---------- diyalog tamamlama ----------
  { id: 'ggo-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['soru-cevap uyumu'],
    q: "Coordinator: Thanks for signing up for Saturday's clean-up. Have you done anything like this before?\nMerve: ----\nCoordinator: Not at all. Most people learn as they go. We'll give you gloves and pair you with someone experienced.",
    options: [
      "Not really. I hope that won't slow everyone else down.",
      'Yes, quite often. What time should I get there on Saturday?',
      "Only once, but I'd rather work on my own this time.",
      "No, and I'm afraid I can't make it on Saturday now.",
      'A few times. Is there anywhere to park near the entrance?',
    ], answer: 0,
    explain: "Koordinatörün 'Not at all' (hiç de değil) cevabı bir kaygıyı yatıştırıyor; ardından çoğu kişinin işi yaparken öğrendiğini söylemesi Merve'nin deneyimsiz olduğunu gösteriyor. Daha önce pek yapmadığını söyleyip başkalarını yavaşlatmaktan çekinen cümle ikisine de uyuyor. Sık sık ya da birkaç kez yaptığını söyleyen seçenekler deneyimsizliğe uymuyor; sordukları saat ve otopark soruları da 'Not at all' ile cevaplanmaz. Tek başına çalışmak isteyen seçenek koordinatörün onu deneyimli biriyle eşleştirmesiyle, cumartesi gelemeyeceğini söyleyen seçenek de koordinatörün sürdürdüğü hazırlıkla çelişiyor." },

  { id: 'ggo-d2', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['bağlam'],
    q: "Hakan: The tenants' association is looking for someone to keep the accounts this year.\nPelin: Why don't you do it? You're an accountant, after all.\nHakan: I'd like to, but I'm already working most weekends.\nPelin: ----",
    options: [
      "Great, so you'll have plenty of free time for it, then.",
      "Shame. I didn't know you'd stopped being an accountant.",
      'Then maybe you could just check the figures once a month.',
      "Fine. I'll tell them you've agreed to do it this year.",
      "Really? I thought they'd decided not to keep accounts.",
    ], answer: 2,
    explain: "Hakan isteyip de vakti olmadığını söylüyor; Pelin'in son sözü bu engele uygun bir ara yol önermeli. Hesapları tümüyle üstlenmek yerine ayda bir rakamlara göz atmasını önermek tam bunu yapıyor. Bol boş vakti olacağını söyleyen seçenek Hakan'ın hafta sonları çalıştığı bilgisiyle, muhasebeciliği bıraktığını sanan seçenek de 'You're an accountant' sözüyle çelişiyor. Kabul ettiğini derneğe söyleyeceğini bildiren seçenek Hakan'ın geri çevirmesini görmezden geliyor. Derneğin hesap tutmama kararı da ilk satırla bağdaşmıyor." },

  { id: 'ggo-d3', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlam'],
    q: "Ayla: I've been thinking about volunteering at the hospice, but I'm not sure I could cope emotionally.\nBurak: ----\nAyla: That's reassuring. I didn't realise they looked after their volunteers like that.",
    options: [
      "I'd think twice. Most people who start there give up within a few weeks.",
      "Why not? They're always short of people to help in the gift shop.",
      "Honestly, it's easier to give them money than to give them your time.",
      'My aunt volunteered there for years, and she found it very hard at times.',
      "They train you first, and there's a counsellor to talk to after a hard day.",
    ], answer: 4,
    explain: "Ayla 'Bu içimi rahatlattı; gönüllülerine böyle baktıklarını bilmiyordum' diyor; demek ki Burak hospisin (ağır hastaların son dönem bakımevi) gönüllülerini nasıl desteklediğini anlatmış. Önce eğitim verildiği ve zor bir günün ardından konuşulabilecek bir danışman olduğu bilgisi bunu karşılıyor. Çoğu kişinin birkaç haftada bıraktığını ya da teyzesinin zorlandığını söyleyen seçenekler Ayla'yı rahatlatmaz, kaygısını artırır. Hediyelik eşya dükkânında yardım ve para bağışı önerileri de gönüllülere gösterilen ilgiden söz etmiyor." },

  { id: 'ggo-d4', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['bağlam'],
    q: "Neighbour: Excuse me, are you the one organising the street party next month?\nDeniz: I am, yes. Is the noise likely to be a problem for you?\nNeighbour: Not at all. In fact, ----",
    options: [
      "I'd rather you cancelled it and held it next year instead.",
      "I've got some folding chairs you're more than welcome to borrow.",
      "I've already complained to the council about last year's party.",
      "I was hoping it could finish a bit earlier than last year.",
      "I'm so glad you've moved it to this weekend instead.",
    ], answer: 1,
    explain: "Komşu 'Not at all. In fact, …' (Hiç de değil. Hatta …) diyor; 'in fact' burada gürültünün sorun olmadığı sözünü güçlendiren olumlu bir ek bekletir. Katlanır sandalyelerini seve seve ödünç verebileceğini söylemek bunu yapıyor. Partinin bu hafta sonuna alınmasına sevinen seçenek de olumlu, ama Deniz'in partinin gelecek ay olduğunu onaylamasıyla çelişiyor. Partinin iptalini istemek, geçen yılki partiyi belediyeye şikâyet etmek ve daha erken bitmesini dilemek ise 'sorun değil' sözüyle çelişen yakınmalar." },

  { id: 'ggo-d5', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['pitch in'],
    level: 'orta', cefr: 'B2', konu: ['bağlam'],
    q: "Emre: The roof of the village hall is leaking again, and the council says it can't pay for repairs until next year.\nSelin: So what's the plan? Wait until the ceiling comes down?\nEmre: Some of us think we could all pitch in and fix it ourselves.\nSelin: ----",
    options: [
      "Good. Then we can all stop worrying until the council pays next year.",
      "Why bother? The roof hasn't leaked once since I moved here.",
      "Shame. I'd have been glad to help if anyone had bothered to ask me.",
      "Count me in. My brother's a roofer, so I'll ask him to take a look.",
      "You're right. It's far too dangerous for any of us to go up there ourselves.",
    ], answer: 3,
    explain: "Emre herkesin el atıp çatıyı kendilerinin onarabileceğini söylüyor; Selin'in son sözü bu öneriye uygun bir karşılık olmalı. 'Ben de varım' deyip çatı ustası olan kardeşinden çatıya bakmasını isteyeceğini söylemek öneriyi kabul edip somut bir katkı ekliyor. Belediye ödeyene kadar dertlenmemeyi öneren seçenek Emre'nin önerisini görmezden geliyor. Çatının hiç akmadığını söyleyen seçenek ilk satırla çelişiyor. Kendisine sorulsaydı yardım edeceğini söyleyen seçenek, ona tam o anda sorulduğunu görmüyor. 'You're right' deyip işin çok tehlikeli olduğunu söylemek de Emre'nin söylemediği bir şeyi onaylıyor." },

  { id: 'ggo-d6', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['soru-cevap uyumu'],
    q: "Gizem: I'm thinking of stepping down as chair of the residents' association.\nOzan: Really? ----\nGizem: Partly, yes. But mostly I just think it's time someone with fresh ideas had a go.",
    options: [
      "Is it because it's taking up too much of your time?",
      'When does your term as chair officially come to an end?',
      'Who do you think is most likely to take over from you?',
      "Didn't you only join the association a few weeks ago?",
      'Will you stay on as an ordinary member afterwards?',
    ], answer: 0,
    explain: "Gizem 'Kısmen evet. Ama asıl neden, yeni fikirleri olan birinin denemesinin zamanı geldiğini düşünmem' diyor; yani Ozan ona bir neden önermiş, Gizem de bu nedeni kısmen kabul edip asıl nedenini eklemiş. Görevin çok vaktini alıp almadığını soran cümle bu cevaba uyuyor. Görev süresinin ne zaman bittiği ve yerine kimin geleceği soruları 'Partly, yes' ile cevaplanmaz. Derneğe birkaç hafta önce katıldığını söyleyen seçenek onun başkan olmasıyla çelişiyor. Sıradan üye olarak kalıp kalmayacağı sorusu da bir neden sormadığı için ardından gelen gerekçeye bağlanmıyor." },

  { id: 'ggo-d7', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlam'],
    q: "Manager: From next month, the company will give everyone one paid day a year to volunteer for a local charity.\nTolga: That sounds great, but does it have to be a charity the company has chosen?\nManager: No, you can pick any registered charity, as long as you tell HR a month in advance.\nTolga: ----",
    options: [
      "That's a pity. I was hoping I'd be able to choose one myself.",
      "So it's unpaid, then? I'm not sure I can afford to take it.",
      "Perfect. I'll ask the wildlife centre near me if they need help.",
      "Great. I'll just turn up there tomorrow and let HR know afterwards.",
      'Right. Which charity has the company picked for us this year?',
    ], answer: 2,
    explain: "Müdür, kayıtlı herhangi bir yardım kuruluşunun seçilebileceğini, yeter ki insan kaynaklarına bir ay önceden haber verilsin diyor. Tolga'nın yakınındaki yaban hayvanları merkezine yardım gerekip gerekmediğini soracağını söylemesi iki koşula da uyuyor: kurumu kendisi seçiyor ve önceden planlıyor. Kurumu kendisi seçemeyeceğini sanan ve şirketin hangi kurumu seçtiğini soran seçenekler müdürün 'Hayır' cevabıyla çelişiyor. Ücretsiz izin sanan seçenek 'paid day' sözüyle, yarın gidip sonra haber vereceğini söyleyen seçenek de bir ay önceden haber verme koşuluyla çelişiyor." },

  { id: 'ggo-d8', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlam'],
    q: "Aslı: Did you hear that the Demirs' flat flooded last week?\nKerem: Yes, ----\nAslı: That's so typical of this building. Everyone looks out for each other here.",
    options: [
      "but nobody in the building seems to have offered them any help.",
      "and apparently the landlord is refusing to pay for any of the damage.",
      "and they're planning to move somewhere else as soon as they can.",
      "and her sister came over from Ankara to help them clear up.",
      "and half the building turned up with towels and fans within an hour.",
    ], answer: 4,
    explain: "Aslı 'Bu binanın tam huyu; burada herkes birbirini kollar' diyor; demek ki Kerem komşuların Demirlere yardım ettiğini anlatmış. Binanın yarısının bir saat içinde havlu ve vantilatörle geldiğini söyleyen seçenek buna uyuyor. Kız kardeşin Ankara'dan yardıma geldiğini söyleyen seçenek de bir yardım anlatıyor, ama yardım binadan değil aileden geliyor; Aslı'nın 'bu binanın huyu' sözüne bağlanmaz. Kimsenin yardım etmediğini söyleyen seçenek Aslı'nın sözüyle çelişiyor. Ev sahibinin zararı ödememesi ve ailenin taşınmayı düşünmesi de komşuların birbirini kollamasıyla ilgili değil." },

  { id: 'ggo-d9', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['soru-cevap uyumu'],
    q: "Cem: I'm thinking of spending the summer volunteering on a building project abroad.\nNil: ----\nCem: Fair point. The organisation does charge quite a lot, and I've never built anything in my life.\nNil: Then maybe look for something closer to home where your skills would actually be useful.",
    options: [
      'That sounds amazing. Which country are you hoping to go to this time?',
      'Have you checked what it costs and what kind of help they need?',
      'You should. Projects like that always need as many people as possible.',
      "Wouldn't you rather spend the summer with your family for once?",
      "Lucky you. I'd love to spend a whole summer building houses.",
    ], answer: 1,
    explain: "Cem 'Haklısın' dedikten sonra iki sakınca sayıyor: kuruluş epey ücret istiyor ve kendisi hayatında hiçbir şey inşa etmemiş. Demek ki Nil maliyeti ve ne tür yardıma ihtiyaç duyulduğunu sormuş. Hangi ülkeye gideceğini soran, projeyi öven ve böyle bir yaza imrenen seçenekler 'Fair point' ile karşılanacak bir itiraz içermiyor. Ailesiyle vakit geçirme önerisi bir itiraz, ama Cem'in saydığı ücret ve beceri sorunlarına bağlanmıyor." },

  { id: 'ggo-d10', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlam'],
    q: "Lale: I've been volunteering at the library's reading club for adults for almost a year now.\nMert: How do you find the time? You work full-time, don't you?\nLale: ----\nMert: I suppose that's true. A couple of hours a week isn't much when you put it like that.",
    options: [
      "I don't, really. That's why I'm thinking of giving it up soon.",
      'I took a year off work so that I could do it properly.',
      "Actually, I've just been promoted, so I'm working even longer hours.",
      "It's only Saturday mornings, so it's easier than it sounds.",
      "I'm lucky. My company counts it as part of my working hours.",
    ], answer: 3,
    explain: "Mert 'Sanırım doğru; böyle söyleyince haftada birkaç saat pek bir şey sayılmaz' diyor; demek ki Lale işin az vakit aldığını, yalnızca cumartesi sabahlarını tuttuğunu söylemiş. İşi bırakmayı düşündüğünü ya da terfi edip daha uzun çalıştığını söyleyen seçenekler vaktin az olduğu fikrine uymuyor. Bir yıl izin aldığını söylemek Mert'in 'tam gün çalışıyorsun, değil mi?' sorusuyla çelişiyor. Şirketin bu saatleri mesaiden saydığını söylemek de işin ne kadar az vakit aldığını anlatmıyor; Mert'in 'böyle söyleyince' diye onayladığı şey bir süre hesabı." },

  // ---------- çeviri: İngilizceden Türkçeye ----------
  { id: 'ggo-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['ortaç öbeği'],
    q: 'Established by the UN General Assembly in 1985, International Volunteer Day has been marked on 5 December every year since then.',
    options: [
      "BM Genel Kurulu'nun 1985'te ilan ettiği Uluslararası Gönüllüler Günü ilk yıllarda 5 Aralık'ta kutlanmış, sonra başka bir tarihe alınmıştır.",
      "BM Genel Kurulu tarafından 1985'te ilan edilen Uluslararası Gönüllüler Günü, o zamandan beri her yıl 5 Aralık'ta kutlanıyor.",
      "Uluslararası Gönüllüler Günü 1985'ten önce de kutlanıyordu, ama BM Genel Kurulu onu ancak o yıl 5 Aralık'a sabitledi.",
      "BM Genel Kurulu, 1985'ten bu yana her yıl 5 Aralık'ta toplanarak Uluslararası Gönüllüler Günü'nü yeniden ilan ediyor.",
      "BM Genel Kurulu'nun 1985'te önerdiği Uluslararası Gönüllüler Günü, o zamandan beri yalnızca bazı yıllarda 5 Aralık'ta kutlanmıştır.",
    ], answer: 1,
    explain: "Cümle bir ortaç öbeğiyle açılıyor: 'Established by the UN General Assembly in 1985' (1985'te BM Genel Kurulu tarafından ilan edilen). Ana cümledeki 'has been marked … every year since then' (o zamandan beri her yıl kutlanıyor) süren bir durumu anlatıyor. Doğru çeviri ikisini de koruyor. En güçlü çeldirici 'yalnızca bazı yıllarda' diyerek 'every year' (her yıl) bilgisini daraltıyor; 'önerdiği' de 'established'i (ilan edilen) zayıflatıyor. Günün sonradan başka bir tarihe alındığını, 1985'ten önce de kutlandığını ya da Genel Kurul'un her yıl toplanıp günü yeniden ilan ettiğini söyleyen seçenekler cümlede olmayan bilgiler ekliyor." },

  { id: 'ggo-c2', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['reciprocity'],
    level: 'zor', cefr: 'C1', konu: ['sıfat cümleciği'],
    q: 'Neighbourhoods in which reciprocity is the norm tend to recover more quickly from a crisis than those where people rarely help one another.',
    options: [
      "Karşılıklı yardımlaşmanın olağan sayıldığı mahalleler, insanların birbirine pek yardım etmediği mahallelere göre bir krizden genellikle daha yavaş toparlanır.",
      "Karşılıklı yardımlaşmanın olağan sayıldığı mahalleler, insanların birbirine sık sık yardım ettiği mahallelere göre bir krizden genellikle daha yavaş toparlanır.",
      "Karşılıklı yardımlaşmanın olağan sayıldığı mahalleler, insanların birbirine pek yardım etmediği mahallelere göre bir krizden genellikle daha iyi toparlanır.",
      "Karşılıklı yardımlaşmanın olağan sayıldığı mahalleler, insanların birbirine pek yardım etmediği mahallelere göre bir krizden genellikle daha zor toparlanır.",
      "Karşılıklı yardımlaşmanın olağan sayıldığı mahalleler, insanların birbirine pek yardım etmediği mahallelere göre bir krizden genellikle daha çabuk toparlanır.",
    ], answer: 4,
    explain: "Cümlede iki sıfat cümleciği var: 'in which reciprocity is the norm' (karşılıklı yardımlaşmanın olağan sayıldığı) ve 'where people rarely help one another' (insanların birbirine pek yardım etmediği). 'Tend to recover more quickly' de temkinli bir karşılaştırma: genellikle daha çabuk toparlanır. Doğru çeviri bunların hepsini koruyor. Çeldiricilerin hepsi karşılaştırmanın kendisini değiştiriyor. En güçlü çeldirici 'daha yavaş' diyerek yönü tersine çeviriyor; aynı yanlışa 'sık sık yardım ettiği' kaymasını ekleyen seçenek ikinci cümleciği de bozuyor. 'Daha iyi' toparlanmanın hızını değil ne kadar tam olduğunu, 'daha zor' ise güçlüğünü anlatır; 'more quickly' ikisini de karşılamaz." },

  { id: 'ggo-c3', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['üçüncü tip'],
    q: 'If the residents had not agreed to share the cost, the community garden would have been sold to a developer years ago.',
    options: [
      'Sakinler masrafı paylaşmayı kabul etmeseydi, mahalle bahçesi yıllar önce bir müteahhide satılmış olurdu.',
      'Sakinler masrafı paylaşmayı kabul etmeseydi, mahalle bahçesi yıllar önce bir müteahhide satılmış olabilirdi.',
      'Sakinler masrafı paylaşmayı kabul ettiği için mahalle bahçesi yıllar önce bir müteahhide satıldı.',
      'Sakinler masrafı paylaşmayı kabul etmezse mahalle bahçesi gelecek yıl bir müteahhide satılacak.',
      'Mahalle bahçesi yıllar önce bir müteahhide satılınca sakinler masrafı paylaşmayı kabul etmedi.',
    ], answer: 0,
    explain: "'If … had not agreed …, … would have been sold' üçüncü tip koşuldur: geçmişte gerçekleşmemiş bir durumu ve onun sonucunu anlatır. Sakinler masrafı paylaşmayı kabul etti, bahçe de satılmadı. Doğru çeviri 'kabul etmeseydi … satılmış olurdu' diyerek hem koşulu hem sonucun kesinliğini koruyor. En güçlü çeldirici yalnızca kipi değiştiriyor: 'satılmış olabilirdi' yalnızca bir olasılık bildirir ('might have been sold'), oysa 'would have been sold' sonucu kesin sayar. 'Kabul ettiği için … satıldı' olayı gerçekleşmiş gösterip anlamı tersine çeviriyor. 'Kabul etmezse … satılacak' geçmişi geleceğe taşıyor; satıştan sonra kabul etmediklerini söyleyen seçenek de koşulu zaman sırasına çeviriyor." },

  { id: 'ggo-c4', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['edilgen kanaat'],
    q: 'The custom of paying for an extra coffee that a stranger in need can claim later is generally thought to have begun in the cafés of Naples.',
    options: [
      'Muhtaç bir yabancının sonradan alabileceği fazladan bir kahvenin parasını ödeme geleneğinin Napoli kahvehanelerinde başladığı kesin olarak bilinmektedir.',
      'Muhtaç bir yabancının sonradan alabileceği fazladan bir kahvenin parasını ödeme geleneğinin Napoli kahvehanelerinde başladığı yaygın olarak düşünülür.',
      'Napoli kahvehanelerinde başladığı düşünülen bu gelenekte, muhtaç bir yabancı içtiği fazladan kahvenin parasını sonradan öder.',
      "Muhtaç bir yabancıya fazladan bir kahve ısmarlama geleneğinin Napoli'de değil, başka bir kentte başladığı düşünülür.",
      'Muhtaç bir yabancının sonradan alabileceği fazladan bir kahvenin parasını ödeme geleneği, Napoli kahvehanelerinde bugün de yaygın biçimde sürüyor.',
    ], answer: 1,
    explain: "'Is generally thought to have begun' bir edilgen kanaat yapısıdır: geleneğin Napoli kahvehanelerinde başladığı yaygın olarak düşünülüyor; 'to have begun' da başlangıcın geçmişte olduğunu gösterir. Doğru çeviri hem kanaati hem temkini koruyor. En güçlü çeldirici kahvenin parasını kimin ödediğini değiştiriyor: parayı önceden başka bir müşteri öder, muhtaç kişi değil. 'Kesin olarak bilinmektedir' temkinli bir kanaati kesinliğe çeviriyor. Başka bir kentte başladığını söyleyen seçenek anlamı tersine çeviriyor; geleneğin bugün Napoli'de yaygın olarak sürdüğü ise cümlede yok." },

  { id: 'ggo-c5', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: 'Many associations find it far harder to attract young members than to keep the ones they already have.',
    options: [
      "Derneklerin çoğu, genç üye çekmeyi elindeki üyeleri tutmaktan çok daha zor bulur.",
      "Derneklerin çoğu, elindeki üyeleri tutmayı genç üye çekmekten çok daha zor bulur.",
      "Birçok dernek, genç üye çekmeyi elindeki üyeleri tutmaktan çok daha zor bulur.",
      "Birkaç dernek, genç üye çekmeyi elindeki üyeleri tutmaktan çok daha zor bulur.",
      "Derneklerin hepsi, genç üye çekmeyi elindeki üyeleri tutmaktan çok daha zor bulur.",
    ], answer: 2,
    explain: "'Many associations' (birçok dernek) bir çokluk bildirir, ama çoğunluk ya da bütünlük iddia etmez; 'find it far harder to … than to …' de iki işi karşılaştırır: genç üye çekmek, var olan üyeleri tutmaktan çok daha zor. Doğru çeviri hem 'birçok'u hem karşılaştırmanın yönünü koruyor. En güçlü çeldirici yalnızca 'many'yi 'derneklerin çoğu' diye çeviriyor; bu, kapsamı çoğunluğa genişletir. Aynı kaymayı yapıp karşılaştırmayı da tersine çeviren seçenek iki yerden yanlış. 'Birkaç' (a few) kapsamı daraltıyor; 'derneklerin hepsi' ise bütüne genişletiyor." },

  { id: 'ggo-c6', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['so/such … that'],
    q: 'So many neighbours offered to help that the move was finished before lunch, even though the van turned up an hour late.',
    options: [
      'Kamyonet bir saat geç geldiği için, yardım etmeyi öneren birçok komşuya rağmen taşınma ancak öğleden sonra bitti.',
      'Kamyonet bir saat geç gelmesine rağmen o kadar çok komşu yardım etmeyi önerdi ki taşınma öğle yemeğinden önce bitti.',
      'O kadar çok komşu yardım etmeyi önerdi ki taşınma öğle yemeğinden önce bitebilirdi, ama kamyonet bir saat geç geldi.',
      'Kamyonet bir saat erken geldiği için çok sayıda komşu yardım edebildi ve taşınma öğle yemeğinden önce bitti.',
      'Kamyonet bir saat geç gelmesine rağmen, yardım etmeyi öneren birkaç komşu sayesinde taşınma öğle yemeğinden önce bitti.',
    ], answer: 1,
    explain: "'So many … that …' (o kadar çok … ki …) bir sonuç bağlar: komşuların çokluğu taşınmanın öğleden önce bitmesini sağladı. 'Even though' (… -e rağmen) da bunun kamyonetin bir saat gecikmesine karşın olduğunu söylüyor. Doğru çeviri iki bağı da koruyor. En güçlü çeldirici yalnızca 'so many'yi 'birkaç' yapıyor; sonucu sağlayan çokluk kayboluyor. 'Bitebilirdi, ama' taşınmanın bitmediğini ima ediyor. Taşınmanın ancak öğleden sonra bittiğini ya da kamyonetin erken geldiğini söyleyen seçenekler cümleyle çelişiyor." },

  { id: 'ggo-c7', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B2', konu: ['zaman: present perfect'],
    q: 'The tenants have been running the library in the lobby themselves ever since the council withdrew its funding.',
    options: [
      "Belediye ödeneği kesene kadar lobideki kütüphaneyi kiracılar kendileri işletiyordu.",
      "Belediye ödeneği kesene kadar lobideki kütüphaneyi kiracılardan biri tek başına işletiyordu.",
      "Belediye ödeneği keserse lobideki kütüphaneyi kiracılar kendileri işletecek.",
      "Belediye ödeneği kestiğinden beri lobideki kütüphaneyi kiracılar kendileri işletmeyi düşünüyor.",
      "Belediye ödeneği kestiğinden beri lobideki kütüphaneyi kiracılar kendileri işletiyor.",
    ], answer: 4,
    explain: "'Have been running … ever since …' geçmişte başlayıp bugün de süren bir durumu anlatır: belediye ödeneği kestiğinden beri kiracılar kütüphaneyi kendileri işletiyor. Doğru çeviri hem 'beri'yi hem süreği koruyor. En güçlü çeldirici yalnızca zaman bağını değiştiriyor: 'kesene kadar … işletiyordu' kiracıların işi ödenek kesilince bıraktığını düşündürür, oysa cümlede iş o anda başlıyor. Aynı kaymaya 'kiracılardan biri tek başına' diye bir kapsam değişikliği ekleyen seçenek iki yerden yanlış. 'Keserse … işletecek' olmuş bir olayı koşula çeviriyor; 'işletmeyi düşünüyor' ise süren bir işi yalnızca bir niyete indiriyor." },

  { id: 'ggo-c8', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['kip (modal)'],
    q: 'Volunteers who regularly visit isolated older people may benefit from the visits almost as much as the people they visit.',
    options: [
      "Yalnız kalmış yaşlıları düzenli olarak ziyaret eden gönüllüler, bu ziyaretlerden neredeyse ziyaret ettikleri kişiler kadar yarar görebilir.",
      "Yalnız kalmış yaşlıları düzenli olarak ziyaret eden gönüllüler, bu ziyaretlerden neredeyse ziyaret ettikleri kişiler kadar yarar görür.",
      "Yalnız kalmış yaşlıları düzenli olarak ziyaret eden gönüllüler, bu ziyaretlerden ziyaret ettikleri kişilerden çok daha fazla yarar görür.",
      "Yalnız kalmış yaşlıları düzenli olarak ziyaret eden gönüllüler, bu ziyaretlerden neredeyse ziyaret ettikleri kişiler kadar yarar görmeli.",
      "Yalnız kalmış yaşlıları düzenli olarak ziyaret eden gönüllüler, bu ziyaretlerden neredeyse ziyaret ettikleri kişiler kadar yarar görmeyebilir.",
    ], answer: 0,
    explain: "Cümlede üç öğe var: 'who regularly visit isolated older people' (yalnız kalmış yaşlıları düzenli olarak ziyaret eden), 'may' (-ebilir) ve 'almost as much as' (neredeyse … kadar). Doğru çeviri üçünü de koruyor. Çeldiricilerin hepsi kipi değiştiriyor. En güçlü çeldirici yalnızca 'may'i atıp 'yarar görür' diyor; olasılığı kesinliğe çeviriyor. 'Görmeli' olasılığı bir gerekliliğe, 'görmeyebilir' ise olumsuz bir olasılığa çeviriyor. 'Çok daha fazla yarar görür' hem kipi hem karşılaştırmayı değiştiriyor." },

  { id: 'ggo-c9', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'While some volunteers prefer a regular weekly commitment, others would rather help out now and then, whenever their schedule allows.',
    options: [
      'Bazı gönüllüler haftalık düzenli bir görevi tercih ettiği için, başkaları ancak programları elverdikçe ara sıra yardım edebiliyor.',
      'Gönüllülerin çoğu, programları elverdiği sürece haftalık düzenli bir görevi ara sıra yardım etmeye tercih eder.',
      'Bazı gönüllüler haftalık düzenli bir görevi tercih ederken, başkaları programları elverdikçe ara sıra yardım etmeyi yeğler.',
      'Bazı gönüllüler haftalık düzenli bir görevi tercih etse de, programları elverdiğinde onlar da ara sıra yardım eder.',
      'Bazı gönüllüler ara sıra yardım etmeyi tercih ederken, başkaları programları elvermese bile haftalık düzenli bir görev üstlenir.',
    ], answer: 2,
    explain: "'While' burada iki grubu karşılaştırır: bazı gönüllüler haftalık düzenli bir görevi tercih ederken başkaları programları elverdikçe ara sıra yardım etmeyi yeğler. Doğru çeviri bu karşıtlığı ve iki ayrı grubu koruyor. En güçlü çeldirici iki grubu tek gruba indiriyor: 'onlar da' diyerek aynı gönüllülerin hem düzenli hem ara sıra çalıştığını söylüyor. 'Tercih ettiği için' karşıtlığı nedene çeviriyor. 'Gönüllülerin çoğu' cümlede olmayan bir çoğunluk ekliyor. Grupların tercihlerinin yerini değiştiren seçenek de 'elvermese bile' diye bir koşul ekliyor." },

  // ---------- çeviri: Türkçeden İngilizceye ----------
  { id: 'ggo-t1', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: "Anadolu köylerinde imece, bir ailenin tek başına bitiremeyeceği işlerin komşular tarafından ücret almadan ve birlikte yapılmasıdır.",
    options: [
      'In Anatolian villages, imece is the practice of neighbours being paid to do the work that a single family could not finish on its own.',
      'In Anatolian villages, imece is the practice of a single family doing, without payment, the work that its neighbours could not finish alone.',
      'In Anatolian villages, imece was once the practice of neighbours doing together, without payment, the work a single family could not finish.',
      'In Anatolian villages, imece is the practice of neighbours doing together, without payment, the work that one family could not finish alone.',
      'In Anatolian villages, imece is the practice of neighbours doing together, without payment, whatever work a single family would rather not do.',
    ], answer: 3,
    explain: "Türkçe cümlede bir sıfat cümleciği ('bir ailenin tek başına bitiremeyeceği işler': the work that one family could not finish alone), iki niteleme ('ücret almadan': without payment; 'birlikte': together) ve geniş zaman ('-dır': is) var. Doğru seçenek hepsini koruyor. En güçlü çeldirici yalnızca zamanı değiştiriyor: 'was once' imecenin artık yapılmadığını ima eder. 'Would rather not do' (yapmak istemediği) 'bitiremeyeceği'nin yerine isteksizlik koyuyor. Komşulara ücret ödendiğini söyleyen seçenek 'ücret almadan' ile çelişiyor; ailenin komşuları için çalıştığını söyleyen seçenek de rolleri tersine çeviriyor." },

  { id: 'ggo-t2', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['zaman: past perfect'],
    q: 'Gönüllüler geldiğinde parkın yarısı çoktan temizlenmişti.',
    options: [
      "When the volunteers arrived, half of the park had already been cleaned.",
      "When the volunteers arrived, half of the park was still being cleaned.",
      "When the volunteers arrive, half of the park will have been cleaned.",
      "When the volunteers arrived, half of the park was being cleaned by them.",
      "When the volunteers arrived, they had already cleaned half of the park.",
    ], answer: 0,
    explain: "'Geldiğinde … temizlenmişti' iki geçmiş olayı sıralar: temizlik gönüllüler gelmeden önce bitmişti. Bu, edilgen past perfect ('had been cleaned') ile karşılanır; 'çoktan' da 'already'nin karşılığıdır. Bütün seçenekler 'yarısı'nı (half) koruyor; ayrım zamandan ve özneden. En güçlü çeldirici 'was still being cleaned' diyor: temizlik o sırada sürüyormuş, bitmemiş. 'Will have been cleaned' olayı geleceğe taşıyor. 'Was being cleaned by them' hem temizliği o ana taşıyor hem gönüllüleri temizleyen yapıyor. 'They had already cleaned' temizliği gönüllülere yüklüyor; Türkçede kimin temizlediği söylenmiyor, gönüllüler ise o sırada yeni geliyor." },

  { id: 'ggo-t3', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['kip geçmiş (modal perfect)'],
    q: 'Bağış kutusunu kimin bıraktığını bilmiyoruz, ama mahallede oturan biri olmalı.',
    options: [
      "We don't know who left the donation box, but it can't have been someone who lives in the neighbourhood.",
      "We know that someone who lives in the neighbourhood left the donation box, but we don't know who.",
      "We don't know who left the donation box, but it must have been someone who lives in the neighbourhood.",
      "We don't know who left the donation box, so we've asked everyone who lives in the neighbourhood.",
      "We don't know who left the donation box, but it may have been someone who lives in the neighbourhood.",
    ], answer: 2,
    explain: "'Olmalı' burada güçlü bir çıkarımdır: konuşan kesin bilmiyor, ama kutuyu bırakanın mahalleden biri olduğuna büyük olasılıkla inanıyor. Bırakma işi geçmişte olduğu için İngilizcede 'must have been' kullanılır. En güçlü çeldirici 'may have been' diyor; bu yalnızca bir olasılık bildirir ve güçlü çıkarımı zayıflatır. 'Can't have been' çıkarımı tersine çeviriyor. 'We know that' diyen seçenek çıkarımı kesin bilgiye çeviriyor. Mahalledeki herkese sorulduğunu söyleyen seçenek ise Türkçe cümlede olmayan bir eylem ekliyor." },

  { id: 'ggo-t4', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['kapsam'],
    q: 'Kuruluşundan bu yana dernek, yalnızca üyelerinin bağışlarıyla ayakta kalmıştır.',
    options: [
      'Since it was founded, the association has survived largely on donations from its members.',
      "The association was founded with its members' donations, but it has since relied on other sources.",
      'Since it was founded, the association has given away all the donations it has received from its members.',
      'Since it was founded, the association has survived largely on donations from people who are not members.',
      'Since it was founded, the association has survived solely on donations from its own members.',
    ], answer: 4,
    explain: "'Kuruluşundan bu yana … ayakta kalmıştır' geçmişte başlayıp bugüne uzanan bir durumdur; 'since it was founded' ve present perfect ile karşılanır. 'Yalnızca' da kapsamı sınırlar: 'solely'. Doğru seçenek ikisini de koruyor. En güçlü çeldirici yalnızca 'yalnızca'yı 'largely' (büyük ölçüde) yapıyor; başka kaynakların da olabileceğini ima ederek kapsamı genişletiyor. Üye olmayanların bağışından söz eden seçenek hem kaynağı tersine çeviriyor hem 'yalnızca'yı 'largely' yapıyor. Derneğin sonradan başka kaynaklara yöneldiği ya da bağışları dağıttığı Türkçe cümlede yok." },

  { id: 'ggo-t5', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: 'Gönüllü sayısı arttıkça her birine düşen iş azalır; bu da insanların uzun süre kalmasını kolaylaştırır.',
    options: [
      "The more volunteers there are, the more work falls to each of them, which makes it harder for people to stay for long.",
      "The more volunteers there are, the less work falls to each of them, which makes it easier for people to stay for long.",
      "When people stay for a long time, the number of volunteers grows, so each of them ends up with less work to do.",
      "The more volunteers there are, the less work falls to each of them, which makes it harder for people to stay for long.",
      "The more volunteers there are, the more work falls to each of them, so fewer people are willing to stay for long.",
    ], answer: 1,
    explain: "Türkçe cümle iki bağ kuruyor: '-dıkça … azalır' (the more …, the less …) ve 'bu da … kolaylaştırır' (which makes it easier). Doğru seçenek ikisini de koruyor. En güçlü çeldirici ilk bağı doğru kuruyor, ama 'harder' (zorlaştırır) diyerek sonucu tersine döndürüyor. 'The more work' karşılaştırmanın yönünü değiştiriyor. İnsanların uzun kalmasını gönüllü sayısının artmasına neden yapan seçenek neden ile sonucu yer değiştiriyor. 'The more work' ile 'so fewer people are willing to stay' diyen seçenek hem karşılaştırmayı hem sonucu tersine çeviriyor." },

  { id: 'ggo-t6', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['isim cümleciği'],
    q: 'Kooperatifin kurucuları, ortak bir fırının köydeki bütün ailelere yarayıp yaramayacağını önceden tartışmıştı.',
    options: [
      "The founders of the cooperative had discussed beforehand how a shared oven would benefit every family in the village.",
      "The founders of the cooperative had agreed beforehand that a shared oven would benefit every family in the village.",
      "The founders of the cooperative had discussed beforehand why a shared oven would benefit every family in the village.",
      "The founders of the cooperative had discussed beforehand whether a shared oven would benefit every family in the village.",
      "The founders of the cooperative had discussed beforehand how a shared oven would benefit some families in the village.",
    ], answer: 3,
    explain: "'Yarayıp yaramayacağını' bir evet-hayır isim cümleciğidir ve 'whether' ile kurulur: kurucular fırının bütün ailelere yarayıp yaramayacağını önceden tartışmıştı; sonuç açık bırakılıyor. En güçlü çeldirici 'whether' yerine 'how' koyuyor: fırının yarayacağını kesin sayıp yalnızca nasıl yarayacağını tartışmışlar gibi gösteriyor. 'Why' de yararı baştan kabul edip nedenini soruyor. 'Agreed that' tartışmayı bir uzlaşmaya çeviriyor. 'How' ile birlikte 'some families' diyen seçenek ayrıca 'bütün aileler'in kapsamını daraltıyor." },

  { id: 'ggo-t7', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['amaç'],
    q: 'Komşuları da katılsın diye kendi gönüllülük saatlerini herkesin görebileceği bir panoya yazdı.',
    options: [
      'She wrote her own volunteering hours on a board where everyone could see them so that her neighbours would join in too.',
      'She wrote her own volunteering hours on a board where everyone could see them because her neighbours had joined in too.',
      "She wrote her neighbours' volunteering hours on a board where everyone could see them so that they would join in too.",
      'She wrote her own volunteering hours on a board that nobody else could see so that her neighbours would not feel pressured.',
      'Although her neighbours would not join in, she wrote her own volunteering hours on a board where everyone could see them.',
    ], answer: 0,
    explain: "'Katılsın diye' bir amaç bildirir ve 'so that … would' ile kurulur; 'kendi gönüllülük saatleri' de panoya yazılanın onun saatleri olduğunu söyler. Doğru seçenek ikisini de koruyor. En güçlü çeldirici yalnızca kimin saatlerinin yazıldığını değiştiriyor: komşularının saatleri. 'Because … had joined in' amacı nedene çeviriyor. 'Although … would not join in' cümlede olmayan bir karşıtlık kuruyor. Panoyu kimsenin göremediğini söyleyen seçenek de 'herkesin görebileceği' bilgisini tersine çeviriyor." },

  { id: 'ggo-t8', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['olumsuzluk'],
    q: 'Gönüllülerin hiçbiri ne bir ücret ne de bir teşekkür bekliyordu.',
    options: [
      "Few of the volunteers expected either a fee or a word of thanks.",
      "Few of the volunteers expected both a fee and a word of thanks.",
      "None of the volunteers expected either a fee or a word of thanks.",
      "Some of the volunteers expected either a fee or a word of thanks.",
      "All of the volunteers expected either a fee or a word of thanks.",
    ], answer: 2,
    explain: "'Hiçbiri … ne … ne de …' iki şeyi birlikte olumsuzlar: gönüllülerden hiçbiri ücret de teşekkür de beklemiyordu. 'None' olumsuzluğu zaten taşıdığı için ardından 'either … or' gelir. Çeldiricilerin hepsi 'hiçbiri'nin kapsamını değiştiriyor. En güçlü çeldirici 'few' (pek azı) diyor; bu, birkaç gönüllünün beklediğini söyler. 'Some' (bazıları) ve 'all' (hepsi) de olumsuzluğu kaldırıyor. 'Few' ile birlikte 'both … and' diyen seçenek ayrıca iki şeyin birlikte beklendiğini söylüyor." },

  { id: 'ggo-t9', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['zarf cümleciği'],
    q: 'Dernek, gönüllüleri ancak kısa bir eğitimden geçtikten sonra yaşlıların evlerine gönderiyor.',
    options: [
      "The association sends volunteers to older people's homes before they have done a short training course.",
      "Only volunteers who have completed a long training course are sent to older people's homes by the association.",
      "The association sends volunteers on a short training course only after they have visited older people's homes.",
      "The association sends volunteers to older people's homes even if they have not done a short training course.",
      "The association sends volunteers to older people's homes only once they have completed a short training course.",
    ], answer: 4,
    explain: "'Ancak … geçtikten sonra' bir zaman koşulu kurar: gönüllüler yaşlıların evlerine eğitim bittikten sonra gönderiliyor, daha önce değil. 'Only once they have completed' bu sırayı ve 'ancak'ın sınırlamasını birlikte veriyor. En güçlü çeldirici sırayı koruyup eğitimin niteliğini değiştiriyor: 'kısa' yerine 'long' (uzun). 'Before' ve 'even if … not' eğitimin önce gelmesi koşulunu ortadan kaldırıyor. Eğitimi ziyaretlerden sonraya koyan seçenek de sırayı tersine çeviriyor." },
];

export default { id: 'genel-gonulluluk', course: C, title: U, order: 22, cards, items };
