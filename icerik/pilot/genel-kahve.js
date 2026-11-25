// iDil › Genel › Kahvenin dünyaya yayılışı.
// Tümü özgün: Claude yazdı (17 Kasım 2026). ÖSYM sorusu, yayınevi, ders kitabı ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (çoğaltma 3. tur planı §7.2 ve yerleşik bilgi; yalnız olgular, metin özgün):
// - Arabica'nın anayurdu Etiyopya; çoban Kaldi ve keçileri söylencesi çok sonra yazıya geçti (metinde açıkça söylence);
// - kahve içmenin güvenilir ilk izleri 15. yüzyılda Yemen'deki sufi tarikatlarından; gece ibadetinde uyanık kalmak için
//   (temkinli, "are thought to");
// - Mekke ve Kahire, 16. yüzyılın ortasında İstanbul; ilk kahvehaneler 1550'lerde (temkinli, "are said to");
// - Mekke'de 1511'de yasak girişimi; nedenin kahvehanelerdeki konuşmalar olması (temkinli, "partly, it seems");
//   17. yüzyılda IV. Murad'ın İstanbul kahvehanelerini kapattırması (temkinli, "is reported to"); yasaklar uzun sürmedi;
// - Venedik 17. yüzyıl; İngiltere'de ilk kahvehane Oxford, 1650 dolayı (temkinli); Londra'da ilki 1652; "penny
//   universities"; Lloyd's sigortacılığı 17. yüzyıl sonunda Edward Lloyd'un kahvehanesinde başladı;
// - Hollandalılar 17. yüzyıl sonunda Java'da kahve yetiştirdi; Fransa'da yetişen bir fidanın 1720'lerde Martinik'e
//   götürüldüğü anlatılır (temkinli, "is said to"; oradan Amerika'daki öteki kolonilere yayıldığı da yalnız "some accounts
//   claim" diye); Brezilya 19. yüzyıldan beri en büyük üretici;
// - plantasyonlarda köle emeği, sonra düşük ücretli işçiler (yerleşik tarih bilgisi; ayrıntı ve sayı yazılmadı);
// - Türk kahvesi kültürü ve geleneği 2013'te UNESCO Somut Olmayan Kültürel Miras listesine girdi; "Bir fincan kahvenin kırk
//   yıl hatırı vardır" atasözü; köpük, telvenin fincanda dibe çökmesi (yerleşik bilgi);
// - kafein beyindeki adenozin almaçlarını engelleyerek uyanıklık verir; etkisi birkaç saat sürebilir, geç içilince uykuyu
//   bozabilir (temkinli, "tend to", "may"); kafeinin hafif bağımlılık yapabilmesi (temkinli, "mildly");
// - çiğ (yeşil) kahve çekirdeğinin kavrulmadan bildiğimiz kokuyu taşımaması; kahve meyvesinin aynı dalda farklı zamanlarda
//   olgunlaşması, dağlık arazide elle toplama (yerleşik bilgi, sayı yazılmadı);
// - Türkiye'de çay tüketiminin kahveden çok yüksek olması (yerleşik bilgi, sayı yazılmadı).
// Görev 20 (25 Kasım 2026): çeviri çeldiricileri biçim kestirmesine karşı yeniden kuruldu.

const T = 'taslak';
const C = 'genel';
const U = 'Kahvenin dünyaya yayılışı';

const cards = [
  // ---------- isim ----------
  { code: 'monopoly', title: 'tekel', pos: 'isim', cefr: 'C1', ipa: '/məˈnɒpəli/',
    text: "Bir malın ya da hizmetin üretimi veya satışı üzerinde tek bir kişinin, şirketin ya da devletin denetimi. 'Have/hold a monopoly on (ya da of) something' kalıbıyla kullanılır. Fiili İngiliz yazımıyla 'monopolise' (tekeline almak).",
    example: 'For decades the state had a monopoly on selling salt, so nobody else was allowed to open a salt shop.',
    exampleTr: 'Devlet onlarca yıl tuz satışını tekelinde tuttu; bu yüzden başka hiç kimsenin tuz dükkânı açmasına izin verilmedi.',
    synonyms: ['exclusive control', 'sole right'], family: ['monopolise'] },
  { code: 'caffeine', title: 'kafein', pos: 'isim', cefr: 'B2', ipa: '/ˈkæfiːn/',
    text: "Kahvede, çayda ve bazı içeceklerde bulunan, insanı uyanık tutan madde. Sayılamaz isimdir: too much caffeine (fazla kafein). 'Caffeinated' kafeinli, 'decaffeinated' (kısaca decaf) kafeinsiz demektir.",
    example: 'Energy drinks often contain far more caffeine than a glass of cola.',
    exampleTr: 'Enerji içecekleri çoğu zaman bir bardak koladan çok daha fazla kafein içerir.',
    synonyms: ['stimulant'], family: ['caffeinated', 'decaffeinated'] },
  { code: 'plantation', title: 'plantasyon, (tek ürünün yetiştirildiği) büyük çiftlik', pos: 'isim', cefr: 'C1', ipa: '/plɑːnˈteɪʃn/',
    text: "Sıcak ülkelerde kahve, şeker kamışı, pamuk ya da çay gibi tek bir ürünün geniş alanda yetiştirildiği büyük tarım işletmesi. Tarih metinlerinde sık geçer: sugar/coffee/cotton plantation. Ağaç dikilmiş alan anlamı da var: a pine plantation.",
    example: "The family's old sugar plantation on the island is now a museum that tells the story of the people who worked there.",
    exampleTr: 'Ailenin adadaki eski şeker kamışı çiftliği bugün, orada çalışmış insanların öyküsünü anlatan bir müze.',
    synonyms: ['estate', 'large farm'], family: ['planter'] },
  { code: 'consumption', title: 'tüketim', pos: 'isim', cefr: 'B2', ipa: '/kənˈsʌmpʃn/',
    text: "Bir şeyin yenmesi, içilmesi ya da kullanılması ve bunun miktarı: energy consumption (enerji tüketimi), alcohol consumption. Fiili 'consume', tüketen kişi 'consumer'. 'Unfit for human consumption' insanların yemesine uygun olmayan demektir.",
    example: 'The government wants to cut the consumption of sugary drinks among schoolchildren.',
    exampleTr: 'Hükümet, okul çocukları arasında şekerli içecek tüketimini azaltmak istiyor.',
    synonyms: ['use', 'intake'], family: ['consume', 'consumer'] },
  { code: 'legend', title: 'söylence, efsane; efsaneleşmiş kişi', pos: 'isim', cefr: 'B2', ipa: '/ˈledʒənd/',
    text: "Kuşaktan kuşağa anlatılan, doğruluğu kanıtlanamayan eski öykü: according to legend (söylenceye göre). Bir alanda çok ünlü kişi için de kullanılır: a football legend. Sıfatı 'legendary' (efsanevi).",
    example: 'According to local legend, a giant once lived in the cave above the village.',
    exampleTr: 'Yöredeki söylenceye göre köyün yukarısındaki mağarada bir zamanlar bir dev yaşarmış.',
    synonyms: ['myth', 'folk tale'], family: ['legendary'] },
  { code: 'aroma', title: '(hoş, belirgin) koku, rayiha', pos: 'isim', cefr: 'B2', ipa: '/əˈrəʊmə/',
    text: "Yiyecek ve içeceklerin, özellikle kahvenin, ekmeğin ve baharatın hoş ve belirgin kokusu. 'Smell' genel sözcüktür; 'aroma' çoğunlukla yemekle ilgili güzel kokular için kullanılır. Sıfatı 'aromatic' (güzel kokulu).",
    example: 'The aroma of fresh bread drifted out of the bakery and into the street.',
    exampleTr: 'Taze ekmeğin kokusu fırından sokağa yayıldı.',
    synonyms: ['scent', 'fragrance'], family: ['aromatic'] },

  // ---------- fiil ----------
  { code: 'roast', title: 'kavurmak; (fırında) kızartmak', pos: 'fiil', cefr: 'B2', ipa: '/rəʊst/',
    text: "Çekirdek, fındık ya da nohut gibi şeyleri kuru ısıda kavurmak; eti ya da sebzeyi fırında pişirmek. Sıfat olarak 'roasted' (kavrulmuş) yaygındır; kahve kavuran kişi ya da makine 'roaster'.",
    example: 'My grandfather used to roast chickpeas in an iron pan over the fire.',
    exampleTr: 'Dedem ateşin üstünde demir bir tavada nohut kavururdu.',
    synonyms: ['toast', 'cook'], family: ['roasted', 'roaster'] },
  { code: 'brew', title: '(çay, kahve) demlemek, pişirmek; (bira) yapmak', pos: 'fiil', cefr: 'C1', ipa: '/bruː/',
    text: "Çayı ya da kahveyi sıcak suyla hazırlamak: brew a pot of tea/coffee. Bira yapmak anlamı da var; bira fabrikası 'brewery'. Mecaz olarak 'something is brewing' kötü bir şeyin hazırlandığını anlatır.",
    example: 'She brewed a pot of strong tea as soon as her guests arrived.',
    exampleTr: 'Konukları gelir gelmez bir demlik koyu çay demledi.',
    synonyms: ['make', 'steep'], family: ['brewery', 'brewer'] },
  { code: 'prohibit', title: 'yasaklamak', pos: 'fiil', cefr: 'C1', ipa: '/prəˈhɪbɪt/',
    text: "Bir şeyi yasa ya da kuralla yasaklamak; 'ban' ve 'forbid' ile yakın anlamlıdır ama daha resmîdir. Edilgen kullanımı sıktır: Smoking is prohibited. Kalıbı 'prohibit someone from doing something'. Adı 'prohibition'.",
    example: 'Smoking is prohibited in every part of the hospital, including the garden.',
    exampleTr: 'Hastanenin bahçe dahil her yerinde sigara içmek yasaktır.',
    synonyms: ['ban', 'forbid'], family: ['prohibition'] },
  { code: 'export', title: 'ihraç etmek, dışarıya satmak', pos: 'fiil', cefr: 'B2', ipa: '/ɪkˈspɔːt/',
    text: "Malı başka bir ülkeye satmak ya da göndermek. Fiilde vurgu sondadır /ɪkˈspɔːt/; isim olarak (ihracat, ihraç malı) başa kayar: /ˈekspɔːt/. Karşıtı 'import' (ithal etmek). İhracatçı 'exporter'.",
    example: 'The region exports most of its hazelnuts to countries in Europe.',
    exampleTr: 'Bölge fındığının büyük kısmını Avrupa ülkelerine ihraç ediyor.',
    synonyms: ['sell abroad', 'ship'], family: ['exporter'] },
  { code: 'grind', title: 'öğütmek', pos: 'fiil', cefr: 'B2', ipa: '/ɡraɪnd/',
    text: "Tahılı, kahveyi ya da baharatı ezerek toz hâline getirmek. Düzensiz fiildir: grind, ground, ground. Bu yüzden 'ground coffee' öğütülmüş kahve demektir. Öğütücü 'grinder': a coffee grinder.",
    example: 'The miller used a heavy stone wheel to grind the wheat into flour.',
    exampleTr: 'Değirmenci buğdayı öğütüp un yapmak için ağır bir taş çark kullanıyordu.',
    synonyms: ['crush', 'mill'], family: ['grinder'] },

  // ---------- sıfat ----------
  { code: 'bitter', title: 'acı (tat); (mecaz) kırgın, öfkeli', pos: 'sıfat', cefr: 'B2', ipa: '/ˈbɪtə/',
    text: "Tatlının karşıtı olan keskin, hoş olmayan tat: bitter medicine. 'Hot' ya da 'spicy' biberin acısıdır; 'bitter' ilacın, koyu kahvenin acısıdır. Mecazda kırgın ve öfkeli: a bitter argument. Adı 'bitterness'.",
    example: 'This medicine has a bitter taste, so the doctor suggested taking it with a spoonful of honey.',
    exampleTr: 'Bu ilacın tadı acı; bu yüzden doktor bir kaşık balla içmeyi önerdi.',
    synonyms: ['sharp', 'acrid'], family: ['bitterness', 'bitterly'] },
  { code: 'lucrative', title: 'kârlı, kazançlı, çok para getiren', pos: 'sıfat', cefr: 'C1', ipa: '/ˈluːkrətɪv/',
    text: "Çok para kazandıran iş, anlaşma ya da ticaret için kullanılır: a lucrative contract, a lucrative trade. 'Profitable' ile yakın anlamlıdır ama daha güçlüdür: yalnız kâr getiren değil, çok para kazandıran demektir.",
    example: 'After years of small jobs, the young designer finally signed a lucrative contract with a large fashion house.',
    exampleTr: 'Genç tasarımcı yıllarca küçük işler yaptıktan sonra sonunda büyük bir moda eviyle çok kazançlı bir sözleşme imzaladı.',
    synonyms: ['profitable', 'well-paid'], family: [] },
  { code: 'addictive', title: 'bağımlılık yapan, alışkanlık yaratan', pos: 'sıfat', cefr: 'B2', ipa: '/əˈdɪktɪv/',
    text: "Bırakılması zor olan madde ya da etkinlik için kullanılır: an addictive drug, an addictive game. Bağımlı kişi 'addict', bağımlılık 'addiction', bağımlı olmuş 'addicted (to)'.",
    example: 'Some mobile games are designed to be addictive, so children find it hard to put their phones down.',
    exampleTr: 'Bazı telefon oyunları bağımlılık yapacak biçimde tasarlanıyor; bu yüzden çocuklar telefonu elinden bırakmakta zorlanıyor.',
    synonyms: ['habit-forming'], family: ['addict', 'addiction', 'addicted'] },

  // ---------- zarf ----------
  { code: 'widely', title: 'yaygın olarak, geniş çapta', pos: 'zarf', cefr: 'B2', ipa: '/ˈwaɪdli/',
    text: "Bir şeyin birçok yerde ya da birçok kişi arasında olduğunu anlatır. Çoğu zaman edilgen ortaçla gelir: widely used, widely believed, widely available. Kökü 'wide' (geniş); 'widen' genişletmek.",
    example: 'English is widely spoken in the hotels along this part of the coast.',
    exampleTr: 'Kıyının bu kesimindeki otellerde İngilizce yaygın olarak konuşuluyor.',
    synonyms: ['broadly', 'extensively'], family: ['wide', 'widen'] },
  { code: 'allegedly', title: 'iddiaya göre, söylendiğine göre', pos: 'zarf', cefr: 'C1', ipa: '/əˈledʒɪdli/',
    text: "Söylenen ama kanıtlanmamış bir şeyi aktarırken kullanılır; yazar böylece sorumluluğu üstlenmez. Haber dilinde sıktır. Fiili 'allege' (iddia etmek), adı 'allegation' (iddia), sıfatı 'alleged' (iddia edilen).",
    example: 'The painting was allegedly sold to a private collector, but nobody has been able to confirm it.',
    exampleTr: 'İddiaya göre tablo özel bir koleksiyoncuya satıldı ama bunu kimse doğrulayamadı.',
    synonyms: ['reportedly', 'supposedly'], family: ['allege', 'allegation', 'alleged'] },

  // ---------- öbek fiil ----------
  { code: 'catch on', title: 'tutmak, rağbet görmek, yaygınlaşmak', pos: 'öbek fiil', cefr: 'C1', ipa: '/ˌkætʃ ˈɒn/',
    text: "Yeni bir ürünün, modanın ya da fikrin beğenilip yayılmasını anlatır. Nesne almaz: The idea never caught on. Gündelik dilde 'anlamak, çakmak' anlamı da var (catch on to a joke) ama ünitedeki anlam 'tutmak'tır.",
    example: 'Nobody expected the board game to catch on, but within a year it was on sale in shops across the country.',
    exampleTr: 'Kutu oyununun tutacağını kimse beklemiyordu ama bir yıl içinde ülkenin her yerindeki dükkânlarda satılıyordu.',
    synonyms: ['become popular', 'take off'], family: [] },
  { code: 'stay up', title: '(yatmayıp) geç saate kadar oturmak, uyumamak', pos: 'öbek fiil', cefr: 'B1', ipa: '/ˌsteɪ ˈʌp/',
    text: "Her zamanki yatma saatinden sonra uyanık kalmak: stay up late, stay up all night. 'Wake up' (uyanmak) ve 'get up' (yataktan kalkmak) ile karıştırılmamalı.",
    example: 'We stayed up until after midnight to watch the fireworks over the harbour.',
    exampleTr: 'Limanın üstündeki havai fişekleri izlemek için gece yarısını geçene kadar uyumadık.',
    synonyms: ['sit up', 'stay awake'], family: [] },
];

const items = [
  // ---------- kelime ----------
  { id: 'gc-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['monopoly', 'plantation'],
    level: 'zor', cefr: 'C1', konu: ['isim'],
    q: 'Because a single trading company held a ---- on bringing coffee into the colony, it could charge whatever price it liked, and local merchants had nowhere else to buy their beans.',
    options: ['shortage', 'monopoly', 'plantation', 'restriction', 'surplus'], answer: 1,
    explain: "Cümleye göre tek bir ticaret şirketi istediği fiyatı koyabiliyor ve yerel tüccarların çekirdek alabilecekleri başka bir yer yok. Bu, kahvenin koloniye getirilmesinin yalnız o şirketin elinde olduğunu gösterir: 'hold a monopoly on' (… üzerinde tekeli olmak). 'Plantation' (büyük çiftlik) kahvenin yetiştirildiği yerdir; dışarıdan getirme işini anlatmaz. 'Shortage' (kıtlık) ve 'surplus' (fazlalık) bir şirketin elinde tuttuğu bir hak değildir. 'Restriction' (kısıtlama) şirkete fiyat belirleme gücü verdiğini anlatmaz; 'hold a restriction on' kalıbı da yoktur." },

  { id: 'gc-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['catch on', 'stay up'],
    level: 'orta', cefr: 'C1', konu: ['öbek fiil'],
    q: 'At first, iced coffee was sold in only a couple of cafés in our town, but it began to ---- once young people started posting photos of it online.',
    options: ['catch on', 'stay up', 'wear off', 'die out', 'hold back'], answer: 0,
    explain: "'But' bir karşıtlık kuruyor: buzlu kahve önce kasabada yalnız bir iki kafede satılıyordu, ama gençler internette fotoğrafını paylaşmaya başlayınca yaygınlaştı. Bir ürünün tutmasını, rağbet görmesini 'catch on' anlatır. 'Stay up' (geç saate kadar uyumamak) insanlar için kullanılır, bir içecek için değil. 'Wear off' (etkisi geçmek) ve 'die out' (yok olmak) karşıtlığı tersine çevirir; fotoğraf paylaşımı bir ürünü unutturmaz. 'Hold back' (çekinmek, geri durmak) de bir içeceğin yayılmasını anlatmaz." },

  { id: 'gc-k3', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['widely', 'allegedly'],
    level: 'kolay', cefr: 'B2', konu: ['zarf'],
    q: 'Today coffee is ---- drunk around the world; you can find it in almost every country, from small mountain villages to huge cities.',
    options: ['allegedly', 'barely', 'slowly', 'widely', 'secretly'], answer: 3,
    explain: "Noktalı virgülden sonraki bölüm ilk bölümü açıklıyor: kahve küçük dağ köylerinden büyük kentlere kadar hemen her ülkede bulunuyor. Bu, kahvenin dünyada yaygın olarak içildiğini gösterir: 'widely'. 'Allegedly' (iddiaya göre) kanıtlanmamış bir bilgiyi aktarır; oysa cümle bunu herkesin görebileceği bir gerçek olarak veriyor. 'Barely' (neredeyse hiç) cümlenin ikinci yarısıyla çelişir. 'Slowly' (yavaşça) ve 'secretly' (gizlice) de kahvenin her yerde bulunmasıyla bağlanmaz." },

  // ---------- dil bilgisi ----------
  { id: 'gc-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['roast'],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'When coffee beans became too expensive to buy, many families began drinking roasted barley ---- coffee, although few of them claimed to enjoy the taste.',
    options: ['for the sake of', 'along with', 'in terms of', 'in place of', 'on behalf of'], answer: 3,
    explain: "Kahve çekirdekleri alınamayacak kadar pahalanınca aileler kavrulmuş arpa içmeye başlamış; 'although' ile gelen bölüm de bu içeceği pek az kişinin sevdiğini söylüyor. Arpa burada kahvenin yerine içiliyor: 'in place of' (… yerine). 'Along with' (… ile birlikte) kahvenin de içildiğini söyler; oysa kahve alınamıyordu. 'For the sake of' (… uğruna, … için) ve 'on behalf of' (… adına) cümleye anlam vermez. 'In terms of' (… bakımından) da iki içecek arasında bir ilişki kurmaz." },

  { id: 'gc-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['edilgen'],
    q: 'Since the nineteenth century, more coffee ---- in Brazil than in any other country.',
    options: ['has produced', 'was produced', 'is producing', 'had been produced', 'has been produced'], answer: 4,
    explain: "Kahve kendisi üretmez, üretilir; bu yüzden edilgen yapı gerekir. 'Since the nineteenth century' (19. yüzyıldan beri) geçmişte başlayıp bugüne uzanan bir süreyi anlatır ve present perfect ister: 'has been produced'. 'Has produced' ve 'is producing' etken yapıdır; kahveyi üreten yapar. 'Was produced' 'since' ile kurulmaz ve durumu geçmişte bırakır. 'Had been produced' geçmişteki başka bir zamandan önceyi anlatır; cümlede böyle bir zaman yok." },

  { id: 'gc-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['aroma', 'grind', 'brew'],
    level: 'orta', cefr: 'B2', konu: ['bağlaç', 'zaman'],
    q: 'Because ground coffee loses its aroma quickly, many coffee lovers prefer not to grind their beans ---- they are about to brew a fresh pot.',
    options: ['as soon as', 'whenever', 'while', 'until', 'since'], answer: 3,
    explain: "Öğütülmüş kahve kokusunu çabuk kaybettiği için birçok kahve sever çekirdeği taze bir demlik hazırlamak üzere olana dek öğütmez. 'Not … until' (… -e kadar …-mez, ancak … olunca) bu beklemeyi anlatır. 'As soon as' (… -ir -mez) ve 'whenever' (ne zaman … -se) olumsuz ana cümleyle birleşince, tam demleyecekleri anda öğütmediklerini söyler; bu da nedenle çelişir. 'While' (… iken) iki işi aynı zamana koyar ve anlam kurmaz. 'Since' burada neden bildirir; demlemeye hazır olmak öğütmemenin nedeni olamaz." },

  // ---------- boşluklu metin (5 boşluk) ----------
  { id: 'gc-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: ['consumption'],
    level: 'orta', cefr: 'B2', title: "Londra kahvehaneleri ve Lloyd's",
    text: "Coffee arrived in England in the seventeenth century. The first English coffee house is generally said to have opened in Oxford around 1650, and London's first followed in 1652. (1) ---- taverns were noisy places where people went mainly to drink alcohol, coffee houses offered something quite different. For the price of a penny, a customer could sit for hours, read the newspapers and join the conversation, and coffee houses soon gained a (2) ---- as places where a great deal could be learnt for very little money; some people even called them 'penny universities'. In many of them, anyone could take part in the discussions (3) ---- their rank or wealth. Over time, different coffee houses attracted different groups of customers. By the end of the century, one run by a man named Edward Lloyd (4) ---- the favourite meeting place of ship owners, captains and merchants who wanted the latest news from the sea. People who needed to insure a ship and its cargo would meet there with others who were willing to share the risk. (5) ----, the insurance market known as Lloyd's of London grew out of these meetings, and it still carries his name today.",
    steps: [
      { konu: ['bağlaç'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['Unless', 'Whereas', 'Once', 'So that', 'In case'], answer: 1,
        explain: "Cümle meyhanelerle kahvehaneleri karşılaştırıyor: meyhaneler insanların çoğunlukla içki içmek için gittiği gürültülü yerlerdi, kahvehaneler ise bambaşka bir şey sunuyordu. İki durumu karşı karşıya koyan bağlaç 'Whereas'tır (… -iken, oysa). 'Unless' (-medikçe) ve 'In case' (… olur diye) koşul ve önlem bildirir. 'Once' (… -ince) zaman, 'So that' (… sın diye) amaç bildirir; meyhanelerin gürültülü olması kahvehanelerin varlığı için bir zaman, koşul ya da amaç değildir." },
      { konu: ['kelime', 'isim'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['reputation', 'consumption', 'permission', 'shortage', 'tendency'], answer: 0,
        explain: "Cümleye göre kahvehaneler kısa sürede çok az parayla çok şey öğrenilen yerler olarak tanındı; bazıları onlara 'peni üniversiteleri' bile dedi. 'Gain a reputation as' (… olarak ün kazanmak) bu anlamı verir. 'Consumption' (tüketim) kahveyle ilgili görünür ama 'gain a consumption as' kalıbı yoktur. 'Permission' (izin) ve 'shortage' (kıtlık) cümleye anlam vermez. 'Tendency' (eğilim) 'as places where …' ile kurulmaz." },
      { konu: ['edat'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['according to', 'regardless of', 'in favour of', 'on account of', 'by means of'], answer: 1,
        explain: "'Anyone' (herkes) sözü, tartışmalara katılmanın kişinin rütbesine ya da varlığına bağlı olmadığını gösteriyor: 'regardless of' (… -e bakılmaksızın). 'According to' (… -e göre) ve 'on account of' (… yüzünden) rütbeyi ve varlığı katılmanın ölçütü ya da nedeni yapar; bu da 'anyone' ile çelişir. 'In favour of' (… -den yana) ve 'by means of' (… yoluyla) cümleye anlam vermez." },
      { konu: ['zaman uyumu'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['has become', 'had become', 'becomes', 'will have become', 'is becoming'], answer: 1,
        explain: "'By the end of the century' (yüzyılın sonuna gelindiğinde) geçmişteki bir zamanı gösteriyor; o zamana kadar tamamlanmış bir değişiklik past perfect ile anlatılır: 'had become'. Parçanın geri kalanı da geçmiş zamanla yazılmış. 'Has become' ve 'is becoming' olayı bugüne bağlar. 'Becomes' geniş zamandır; 'will have become' ise geleceği anlatır." },
      { konu: ['bağlantı zarfı'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['Instead', 'Nevertheless', 'Otherwise', 'On the contrary', 'Eventually'], answer: 4,
        explain: "Önceki cümle gemisini sigortalatmak isteyenlerin riski paylaşmaya hazır kişilerle bu kahvehanede buluştuğunu anlatıyor. Boşluklu cümle bu buluşmalardan zamanla ne çıktığını söylüyor: Lloyd's of London sigorta piyasası. Zaman içinde varılan sonucu 'Eventually' (sonunda, zamanla) bildirir. 'Instead' (bunun yerine) ve 'On the contrary' (tam tersine) önceki cümleyle bir karşıtlık kurar; oysa ikinci cümle birincinin devamıdır. 'Nevertheless' (yine de) beklenene aykırı bir sonuç bildirir. 'Otherwise' (aksi hâlde) anlam kurmaz." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'gc-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['bitter'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Many people find black coffee unpleasantly bitter the first time they try it, but ----.',
    options: [
      'this is the main reason why they decide never to drink it again',
      'the taste is enough to put quite a few of them off coffee for good',
      'the bitterness is even stronger in beans that are roasted for longer',
      'most of them go on avoiding strong coffee until they are much older',
      'many of them come to enjoy it once they get used to it',
    ], answer: 4,
    explain: "'But' bir karşıtlık bekliyor: birçok kişi sade kahveyi ilk denediğinde tatsız derecede acı bulur, ama bir süre içtikten sonra pek çoğu onu sevmeye başlar. Bir daha içmemeye karar vermek, kahveden büsbütün soğumak ve sert kahveden yıllarca uzak durmak ilk bölümün doğal devamıdır; 'but' ile bağlanmaz. Acılığın uzun kavrulan çekirdeklerde daha da güçlü olduğunu söyleyen seçenek ise ilk bölümle karşıtlık kurmuyor; acılığı pekiştiren ek bir bilgi veriyor." },

  { id: 'gc-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['caffeine'],
    level: 'kolay', cefr: 'B1', konu: ['zaman'],
    q: '----, Ayşe always makes herself a strong cup of coffee.',
    options: [
      'Now that she has stopped drinking anything with caffeine',
      'Until she goes to bed at night',
      'As soon as she arrives at the office in the morning',
      'Whenever she wants to fall asleep quickly',
      'Before she had ever tasted coffee',
    ], answer: 2,
    explain: "Ana cümle Ayşe'nin her zaman kendine sert bir kahve yaptığını söylüyor; boşluğa bunun ne zaman olduğunu anlatan bir zaman cümleciği gelir: sabah ofise varır varmaz. Kafeinli hiçbir şey içmeyi bırakmış olması sert kahveyle çelişir. Çabuk uyumak istediği zamanlar da kahveyle çelişir. 'Until she goes to bed' (yatana kadar) tek bir fincanla anlam kurmaz. 'Before she had ever tasted coffee' (kahveyi hiç tatmadan önce) hem anlamca hem de zamanca ana cümleye uymaz." },

  { id: 'gc-t3', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['aroma', 'roast'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: '----, raw green coffee beans have little of the smell we associate with coffee until they are roasted.',
    options: [
      'Even though a freshly made pot of coffee can fill a room with its aroma',
      'Since many of the finest beans come from high mountain slopes',
      'Unless they have been picked by hand and dried slowly in the sun',
      'Now that most people buy their coffee already roasted and ground',
      'Just as the leaves of the tea plant are dried before they are sold',
    ], answer: 0,
    explain: "Ana cümle şaşırtıcı bir bilgi veriyor: çiğ, yeşil kahve çekirdekleri kavrulana kadar kahveden bildiğimiz kokuyu pek taşımaz. Bunu beklentiyle karşılaştıran cümle 'Even though' ile kurulur: taze demlenmiş kahve bir odayı kokusuyla doldurabilir, ama çiğ çekirdek öyle değildir. En iyi çekirdeklerin yüksek dağ yamaçlarından gelmesi kokusuzluğun nedeni değildir. Elle toplanma koşulu ve insanların kahveyi hazır kavrulmuş alması da çekirdeğin kokusuyla bağlanmaz. Çay yapraklarının kurutulmasıyla kurulan benzetme ise iki bölüm arasında anlam ilişkisi kurmaz." },

  { id: 'gc-t4', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['lucrative'],
    level: 'zor', cefr: 'C1', konu: ['neden-sonuç'],
    q: 'Since the price that farmers receive for their beans can fall sharply when an unusually large harvest floods the world market, ----.',
    options: [
      'a good harvest is always the best news that a coffee farmer could hope for',
      'most small growers prefer to depend on coffee as their only source of income',
      'many small growers try to protect themselves by planting other crops as well',
      'coffee is seen as a more lucrative crop in years when the harvest is very large',
      'buyers in rich countries usually agree to pay more for coffee after a record crop',
    ], answer: 2,
    explain: "'Since' bir neden veriyor: olağandışı büyük bir hasat dünya pazarını doldurunca çiftçinin çekirdeğe aldığı fiyat birden düşebilir. Bu riskin mantıklı sonucu, küçük üreticilerin kendilerini korumak için kahvenin yanında başka ürünler de yetiştirmesidir. İyi hasadın her zaman en iyi haber olduğunu söyleyen seçenek nedenle çelişir; büyük hasat fiyatı düşürebilir. Tek gelir kaynağı olarak kahveye bağlı kalmayı yeğlemek riski artırır. Büyük hasat yıllarında kahvenin daha kârlı sayılması ve alıcıların rekor hasattan sonra daha çok ödemesi de nedenin tam tersidir." },

  // ---------- çeviri ----------
  { id: 'gc-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['roast'],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'Much of the flavour that makes beans from different regions taste distinct is lost when coffee is roasted for too long.',
    options: [
      'Farklı bölgelerden gelen çekirdeklerin tadını birbirinden ayıran aromanın bir kısmı, kahve çok ince öğütülünce kaybolur.',
      'Farklı bölgelerden gelen çekirdeklerin tadını birbirinden ayıran aromanın büyük kısmı, kahve çok ince öğütülünce kaybolur.',
      'Farklı bölgelerden gelen çekirdeklerin tadını birbirinden ayıran aromanın büyük kısmı, kahve çok uzun kavrulunca daha da belirginleşir.',
      'Farklı bölgelerden gelen çekirdeklerin tadını birbirinden ayıran aromanın büyük kısmı, kahve çok uzun kavrulunca kaybolur.',
      'Farklı türlerden gelen çekirdeklerin tadını birbirinden ayıran aromanın büyük kısmı, kahve çok ince öğütülünce kaybolur.',
    ], answer: 3,
    explain: "İngilizce cümlenin öznesi bir sıfat cümleciğiyle genişletilmiş: 'Much of the flavour that makes beans from different regions taste distinct' (farklı bölgelerden gelen çekirdeklerin tadını birbirinden ayıran aromanın büyük kısmı). Yüklem edilgendir: 'is lost' (kaybolur); 'when coffee is roasted for too long' de 'kahve çok uzun kavrulunca' demektir. Doğru çeviri bunların hepsini korur. 'Roast' kavurmaktır; 'aromanın büyük kısmı, kahve çok ince öğütülünce kaybolur' aromayı kaybettiren işlemi değiştiriyor. 'Aromanın bir kısmı' diyen çeviri 'much of'u küçültüyor ve kavurmanın yerine öğütmeyi koyuyor. 'Farklı türlerden gelen' diye başlayan çeviri 'regions'ı (bölgeler) türlere çeviriyor, işlemi de öğütme yapıyor. 'Daha da belirginleşir' diyen çeviri kavurmayı doğru veriyor ama sonucu tersine çeviriyor." },

  { id: 'gc-c2', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['zaman'],
    q: 'By the time coffee reached Venice in the seventeenth century, people in Istanbul had already been drinking it for decades.',
    options: [
      "Kahve 17. yüzyılın sonunda Venedik'e ulaştığında İstanbul'da birkaç yıldır içiliyordu.",
      "Kahve 17. yüzyılda Venedik'e ulaştığında İstanbul'da onlarca yıldır satılıyordu.",
      "Kahve 17. yüzyılda Venedik'e ulaştığında İstanbul'da onlarca yıldır içiliyordu.",
      "Kahve 17. yüzyılda Venedik'e ulaştığında İstanbul'da birkaç yıldır içiliyordu.",
      "Kahve 17. yüzyılda Venedik'e ulaşmadan önce İstanbul'da birkaç yıl içilmişti.",
    ], answer: 2,
    explain: "'By the time' (… -diği zaman) geçmişteki bir anı gösteriyor; 'had already been drinking it for decades' de o ana kadar onlarca yıldır süren bir eylemi anlatıyor: kahve Venedik'e ulaştığında İstanbul'da insanlar onu zaten onlarca yıldır içiyordu. 'Decades' onlarca yıl demektir; 'Venedik'e ulaştığında İstanbul'da birkaç yıldır içiliyordu' süreyi kısaltıyor. 'Yüzyılın sonunda' diyen çeviri süreyi kısalttığı gibi 'in the seventeenth century'yi de yüzyılın son yıllarına daraltıyor. 'Ulaşmadan önce … birkaç yıl içilmişti' o ana kadar süren eylemi kısa, bitmiş bir döneme çeviriyor. 'Onlarca yıldır satılıyordu' süreyi koruyor ama 'drinking'i (içmek) satmaya çeviriyor." },

  { id: 'gc-c3', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['roast'],
    level: 'kolay', cefr: 'B1', konu: ['edilgen'],
    q: 'Kahve çekirdekleri öğütülmeden önce kavrulur.',
    options: [
      'Coffee beans are dried before they are ground.',
      'Coffee beans are roasted before they are ground.',
      'Coffee beans were roasted before they were sold.',
      'Coffee beans are roasted before they are sold.',
      'Coffee beans were roasted before they were ground.',
    ], answer: 1,
    explain: "Türkçe cümlede bir sıra var: çekirdekler önce kavrulur ('are roasted'), sonra öğütülür ('are ground'; 'grind' düzensizdir: grind, ground, ground). Doğru çeviri bu sırayı ve geniş zamanı korur. 'Before they are sold' (satılmadan önce) ikinci eylemi değiştiriyor; Türkçede söz konusu olan öğütmek. 'Were roasted before they were ground' eylemleri doğru veriyor ama genel bir bilgiyi geçmişte kalmış bir olay gibi anlatıyor. 'Were roasted before they were sold' zamanı da ikinci eylemi de bozuyor. 'Are dried before they are ground' kavurmayı kurutmaya çeviriyor." },

  { id: 'gc-c4', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['bağlaç'],
    q: 'Kahve ne yorgunluğun nedenini ortadan kaldırır ne de uykunun yerini tutar; yalnızca yorgunluğu bir süreliğine hissetmememizi sağlar.',
    options: [
      'Coffee neither removes the cause of tiredness nor improves the quality of sleep; it does, however, help us concentrate for a while.',
      'Coffee does not remove the cause of tiredness, and it should not take the place of sleep; it only stops us from feeling tired for a while.',
      'Coffee neither removes the cause of tiredness nor takes the place of sleep; it only stops us from feeling tired for a while.',
      'Coffee neither removes the cause of tiredness nor improves the quality of sleep; it only stops us from feeling tired for a while.',
      'Coffee neither makes up for a poor diet nor improves the quality of sleep; it only stops us from feeling tired for a while.',
    ], answer: 2,
    explain: "'Ne … ne de …' sıralanan şeylerin hepsini olumsuzlar ve İngilizcede 'neither … nor …' ile karşılanır: kahve yorgunluğun nedenini ortadan kaldırmaz, uykunun yerini de tutmaz. Noktalı virgülden sonraki 'yalnızca' da 'it only stops us from feeling tired for a while' ile verilir. 'Nor improves the quality of sleep; it only stops us …' diyen çeviride 'uykunun kalitesini artırmaz' 'uykunun yerini tutmaz' demek değildir. 'Makes up for a poor diet' diye süren çeviri yorgunluğun nedenini kötü beslenmeye, uykunun yerini tutmayı da uyku kalitesine çeviriyor. 'It does, however, help us concentrate' diyen çeviri 'yalnızca … hissetmememizi sağlar' bölümünü odaklanmaya çeviriyor ve uykudan kalite olarak söz ediyor. 'It should not take the place of sleep' Türkçedeki bir olgu bildirimini bir öğüde çeviriyor: kahve uykunun yerini tutmaz; 'tutmamalı' denmiyor." },

  // ---------- okuma parçası 1 (4 soru) ----------
  { id: 'gc-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['legend', 'allegedly', 'prohibit'],
    level: 'orta', cefr: 'B2', title: "Kahvenin ilk yüzyılları",
    text: "Nobody knows exactly when people first began to drink coffee. A popular legend tells of an Ethiopian goat herder named Kaldi, who allegedly noticed that his animals became unusually lively after eating the red berries of a certain bush. The story, however, was written down many centuries later, and few historians treat it as anything more than a charming tale. The earliest reliable evidence of coffee drinking comes from fifteenth-century Yemen, where members of Sufi religious orders are thought to have used the drink to keep themselves awake during night-time prayers. From Yemen, coffee travelled to Mecca and Cairo, and by the middle of the sixteenth century it had reached Istanbul, where the first coffee houses are said to have opened in the 1550s. Not everyone welcomed the new drink. In 1511 the authorities in Mecca tried to prohibit it, partly, it seems, because they disliked what was being said in the places where it was served. In the following century, the Ottoman sultan Murad IV is reported to have ordered the coffee houses of Istanbul to be closed. Yet none of these bans lasted very long. Coffee had already become part of daily life, and coffee houses, where people met to talk, play games and listen to storytellers, were simply too popular to disappear.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, members of Sufi orders in Yemen drank coffee ----.',
        options: [
          'because they believed it could cure common illnesses',
          'only on the most important religious holidays',
          'to help them stay alert while they prayed at night',
          'after hearing the story of the Ethiopian goat herder',
          'as a way of welcoming travellers from Mecca and Cairo',
        ], answer: 2,
        explain: "Parçaya göre Yemen'deki sufi tarikatlarının üyelerinin kahveyi gece ibadetleri sırasında uyanık kalmak için içtiği düşünülüyor ('to keep themselves awake during night-time prayers'). Kahvenin hastalıkları iyileştirdiğine inanılması ve yalnız dinî bayramlarda içilmesi parçada geçmiyor. Kaldi söylencesinin çok sonra yazıya geçtiği söyleniyor; sufilerin kahveyi bu öyküden öğrendiği yazmıyor. Mekke ve Kahire ise kahvenin Yemen'den sonra ulaştığı yerler; oradan gelen yolcuları karşılamakla ilgisi yok." },
      { konu: ['ayrıntı'],
        q: 'It is stated in the passage that the authorities in Mecca ----.',
        options: [
          'managed to keep coffee out of the city for a whole century',
          'acted only after the sultan had closed the coffee houses of Istanbul',
          'may have objected to the talk heard in places that served coffee',
          'were the first to open coffee houses outside Yemen in the 1550s',
          'tried to ban coffee after it had made a number of animals ill',
        ], answer: 2,
        explain: "Parçaya göre Mekke'deki yöneticiler 1511'de kahveyi yasaklamaya çalıştı; bunun bir nedeni, görünüşe göre, kahvenin sunulduğu yerlerde konuşulanlardan hoşlanmamalarıydı ('partly, it seems, because they disliked what was being said'). 'It seems' temkinli bir dil; doğru seçenekteki 'may have' de bunu karşılıyor. Kahvenin kentten bir yüzyıl uzak tutulduğu parçayla çelişiyor: yasakların hiçbiri uzun sürmedi. Mekke'deki yasak 1511'de, IV. Murad'ın kararı ise sonraki yüzyılda; sıra tersine çevrilmiş. 1550'lerde açılan kahvehaneler İstanbul'daydı. Hayvanların hastalanması da parçada yok; Kaldi'nin keçileri hastalanmadı, canlandı." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that when Murad IV acted against the coffee houses of Istanbul, ----.',
        options: [
          'coffee had not yet become known in Mecca or Cairo',
          'the ban introduced in Mecca in 1511 was still in force',
          'coffee had been known in the city for several decades',
          'most people in the city had never actually tasted coffee',
          'the coffee houses had already lost much of their popularity',
        ], answer: 2,
        explain: "Parçaya göre İstanbul'daki ilk kahvehanelerin 1550'lerde açıldığı anlatılıyor; IV. Murad ise kahvehaneleri sonraki yüzyılda, yani 17. yüzyılda kapattırdı. Bu iki bilgiden, kapatma kararı verildiğinde kahvenin kentte onlarca yıldır bilindiği çıkar. Kahve İstanbul'dan önce Mekke ve Kahire'ye ulaşmıştı; tersi parçayla çelişiyor. Yasakların hiçbiri uzun sürmediği için 1511 yasağı o sırada yürürlükte olamaz. Kahvenin gündelik yaşamın parçası olduğu ve kahvehanelerin çok sevildiği söylendiğinden kalan iki seçenek de parçayla çelişiyor." },
      { konu: ['başlık'],
        q: 'Which of these titles best sums up the passage as a whole?',
        options: [
          "Coffee's Early Spread and the Attempts to Stop It",
          'How Ethiopian Farmers First Learnt to Grow Coffee',
          'The True Story of Kaldi and His Lively Goats',
          'Why the Coffee Houses of Istanbul Closed for Good',
          'Religious Life in the Sufi Orders of Yemen',
        ], answer: 0,
        explain: "Parça iki bölümden oluşuyor: kahvenin Yemen'den Mekke, Kahire ve İstanbul'a yayılışı ve ona karşı konan, ama uzun sürmeyen yasaklar. Bu ikisini birlikte kapsayan başlık, kahvenin erken yayılışı ve onu durdurma girişimleridir. Etiyopyalı çiftçilerin kahveyi nasıl yetiştirdiği parçada yok. Kaldi öyküsü yalnız bir söylence olarak anılıyor; 'gerçek öykü' başlığı parçayla çelişiyor. İstanbul kahvehaneleri temelli kapanmadı. Sufi tarikatlarındaki dinî yaşam da yalnız bir ayrıntı." },
    ] },

  // ---------- okuma parçası 2 (4 soru) ----------
  { id: 'gc-o2', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['export', 'plantation', 'lucrative'],
    level: 'zor', cefr: 'C1', title: 'Fidanların dünyaya yayılışı',
    text: "For much of the seventeenth century, almost all the coffee drunk in the Ottoman Empire and Europe came from Yemen, and the merchants who controlled the trade had little reason to share the plant with anyone else. Sooner or later, however, living plants were bound to leave the region. Towards the end of the century, the Dutch began cultivating coffee on the island of Java, and before long their colonies were exporting beans to European ports. A plant raised in France is said to have been carried across the Atlantic to the Caribbean island of Martinique in the 1720s, and some accounts claim that coffee spread from there to other colonies in the Americas. Such tales are appealing, but they are usually told with so many dramatic details that it is hard to know how much of them is true. What is beyond doubt is the result. In the nineteenth century, coffee was grown on plantations across the tropics, and Brazil became the world's largest producer, a position it has held ever since. These plantations proved highly lucrative for their owners, yet much of the hard work on them was done by enslaved people and, later, by poorly paid labourers. The ordinary cup of coffee in a European café was, in other words, the product of a long and often painful history.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the Dutch ----.',
        options: [
          'bought nearly all of their coffee from Yemen until the nineteenth century',
          'had started to cultivate coffee in one of their island colonies by about 1700',
          'were responsible for carrying the first coffee plant to Martinique',
          'became the biggest coffee producers in the world in the nineteenth century',
          'refused to sell the beans grown in their colonies to other European nations',
        ], answer: 1,
        explain: "Parçaya göre Hollandalılar yüzyılın sonuna doğru, yani 1700 dolayında, Java adasında kahve yetiştirmeye başladı ve çok geçmeden kolonileri Avrupa limanlarına çekirdek ihraç ediyordu. 19. yüzyıla kadar kahveyi Yemen'den aldıkları parçayla çelişiyor. Martinik'e götürülen fidan Fransa'da yetişmişti; onu Hollandalıların götürdüğü yazmıyor. 19. yüzyılda en büyük üretici Brezilya oldu. Çekirdekleri başka Avrupa ülkelerine satmadıkları da parçada yok; tersine, Avrupa limanlarına gönderiyorlardı." },
      { konu: ['gönderim'],
        q: "The phrase 'Such tales' in the passage refers to ----.",
        options: [
          'reports of Dutch ships bringing beans from Java to European ports',
          'descriptions of the working conditions on Brazilian plantations',
          'old legends about how coffee was first discovered in Ethiopia',
          'claims made by Yemeni merchants about the quality of their beans',
          'stories of a young plant taken from France to the Caribbean',
        ], answer: 4,
        explain: "'Such tales' (bu tür öyküler) hemen önceki cümleye gönderme yapıyor: Fransa'da yetişen bir fidanın 1720'lerde Atlas Okyanusu'nu aşıp Martinik'e götürüldüğü ve kahvenin oradan yayıldığı anlatılıyor. Parça bu öykülerin dramatik ayrıntılarla süslendiğini söylüyor. Hollanda gemileri ve Java öyküleştirilmiyor; parça bunu olgu olarak veriyor. Brezilya plantasyonlarındaki çalışma koşulları 'such tales'ten sonra geliyor. Etiyopya'daki keşif söylencesi bu parçada geçmiyor. Yemenli tüccarların çekirdekleri hakkındaki iddiaları da parçada yok." },
      { konu: ['yazarın tutumu'],
        q: "The author's attitude towards the story of the plant taken to Martinique can best be described as ----.",
        options: [
          'fully convinced, since the author regards it as well documented',
          'dismissive, as the author is certain that the plant never left France',
          'enthusiastic, because it shows how one person can change history',
          'indifferent, since the author sees it as unrelated to the spread of coffee',
          'doubtful about its details yet sure of the wider change that followed',
        ], answer: 4,
        explain: "Yazar öyküyü 'is said to' ve 'some accounts claim' diye temkinle aktarıyor; ardından bu tür öykülerin çekici olduğunu ama o kadar çok dramatik ayrıntıyla anlatıldığını ki ne kadarının doğru olduğunu bilmenin zor olduğunu söylüyor. Hemen sonra da 'What is beyond doubt is the result' (kuşku götürmeyen şey sonuçtur) diyerek kahvenin tropik kuşakta yayıldığını kesin dille anlatıyor. Yani ayrıntılara kuşkuyla bakıyor ama ardından gelen büyük değişikliğe emin. Öyküyü belgelenmiş saymıyor; fidanın Fransa'dan hiç çıkmadığını da söylemiyor. Tek bir kişinin tarihi değiştirdiğine dair bir coşku göstermiyor. Öyküyü kahvenin yayılışıyla ilgisiz de bulmuyor." },
      { konu: ['ana fikir'],
        q: 'The main idea of the passage is that ----.',
        options: [
          'the Dutch deserve most of the credit for turning coffee into a drink enjoyed all over the world',
          'the story of the plant taken to Martinique is the most reliable account we have of how coffee spread',
          'Brazil overtook Java as a producer because its climate suited the coffee plant far better',
          'coffee spread from Yemen to plantations across the tropics, enriching owners at a heavy human cost',
          'coffee remained a luxury that only wealthy Europeans could afford until well into the nineteenth century',
        ], answer: 3,
        explain: "Parça kahvenin Yemen'in elinden çıkıp Java'ya, Karayiplere ve sonunda tropik kuşaktaki plantasyonlara yayılışını anlatıyor; son bölümde de bu plantasyonların sahiplerine çok kazandırdığını ama işin büyük kısmının köleleştirilmiş insanlara ve düşük ücretli işçilere yaptırıldığını vurguluyor. Ana fikir bu iki yanı birlikte taşır. Hollandalılar yalnız bir halka; bütün övgüyü onlara veren bir yargı yok. Martinik öyküsünün en güvenilir anlatı olduğu parçayla çelişiyor. Brezilya'nın iklimi ve kahvenin bir lüks olarak kalması da parçada geçmiyor." },
    ] },

  // ---------- diyalog tamamlama ----------
  { id: 'gc-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['caffeine', 'stay up'],
    level: 'kolay', cefr: 'B1', konu: ['bağlam'],
    q: "Ece: Shall we order another coffee before we leave?\nTom: Not for me, thanks. It's already after eight.\nEce: ----\nTom: Lucky you! Caffeine affects me for hours. If I have a cup now, I'll still be wide awake at two in the morning.",
    options: [
      "Really? Coffee in the evening never stops me from sleeping.",
      "Are you sure? I thought you wanted to stay up and finish your essay.",
      "Me neither. I've already had three cups since lunch, and I feel a bit shaky.",
      "Good point. The café closes in about ten minutes anyway.",
      "Why not? You said you'd had a tiring day.",
    ], answer: 0,
    explain: "Tom'un son sözü 'Lucky you!' (Ne şanslısın!) ile başlıyor ve kafeinin kendisini saatlerce uyanık tuttuğunu anlatıyor. Demek ki Ece, kahvenin kendi uykusunu etkilemediğini söylemiş olmalı: akşam içtiği kahve onu hiç uykusuz bırakmıyor. Tom'un ödevini bitirmek için geç saate kadar oturmak istediğini hatırlatmak 'Lucky you!' ile bağlanmaz. Ece'nin de kahve istemediğini söylemesi ve kafenin kapanmak üzere olması da Tom'un cevabına yol açmaz. 'Why not?' ile başlayan soru ise Tom'un neden kahve içmediğini sorar; Tom'un cevabı bu soruya değil, Ece'nin şansına değiniyor." },

  { id: 'gc-d2', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['grind', 'brew'],
    level: 'orta', cefr: 'B2', konu: ['soru-cevap uyumu'],
    q: "Paul: This coffee is delicious, Deniz. How do you make it?\nDeniz: First you grind the beans very finely, almost like flour. Then you brew the coffee slowly in a small pot with cold water and a little sugar if you like.\nPaul: ----\nDeniz: No, never. Once it starts to boil, the foam on top disappears, and that's the best part.",
    options: [
      "Do you leave it on the stove until it's bubbling hard?",
      "Can I use the coffee I usually put in my filter machine?",
      "Do you ever drink it with milk, like a latte?",
      "How long does it take to make a single cup?",
      "Where do you manage to buy beans that are ground so finely?",
    ], answer: 0,
    explain: "Deniz'in cevabı 'No, never' (Hayır, asla) ile başlıyor ve nedenini açıklıyor: kahve kaynamaya başlayınca üstteki köpük kaybolur. Bu, Paul'ün kahveyi ocakta iyice fokurdayana kadar bırakıp bırakmadığını sorduğunu gösterir. Filtre kahve kullanmak ve sütle içmek de evet-hayır sorusu ama Deniz'in verdiği neden, yani kaynayınca köpüğün kaybolması, bu sorulara uymuyor. Bir fincanın ne kadar sürede yapıldığı ve çekirdeklerin nereden alındığı sorularına da 'No, never' ile cevap verilmez." },

  // ---------- anlamca en yakın cümle ----------
  { id: 'gc-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: ['consumption'],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: 'Tea consumption in Turkey is far higher than coffee consumption, even though Turkish coffee is much better known abroad.',
    options: [
      'Turkish coffee is much better known abroad because people in Turkey drink far more coffee than tea.',
      'People in Turkey drink tea and coffee about equally often, although coffee is the one famous abroad.',
      'Although Turkish coffee is far better known in other countries, Turks drink a lot more tea than coffee.',
      'People in Turkey drink much more tea than coffee, which is why Turkish tea is better known abroad.',
      'Turkish coffee is less famous abroad than Turkish tea, even though people in Turkey drink more coffee.',
    ], answer: 2,
    explain: "Verilen cümle iki karşılaştırmayı bir karşıtlıkla bağlıyor: Türkiye'de çay tüketimi kahve tüketiminden çok daha yüksek, ama yurt dışında çok daha tanınan Türk kahvesidir. Doğru seçenek iki karşılaştırmayı da korur ve karşıtlığı 'Although' ile kurar. Yanlışlardan biri karşılaştırmayı tersine çevirip neden-sonuç ilişkisi ekliyor. Biri çay ve kahvenin eşit içildiğini söylüyor. Biri çayın yurt dışında daha tanınmış olduğunu söylüyor. Biri de iki karşılaştırmayı birden tersine çeviriyor." },

  // ---------- paragraf tamamlama ----------
  { id: 'gc-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['plantation'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'On many coffee plantations, especially those on steep mountain slopes, the fruit is still picked by hand. This is slow and costly work. ----. A single branch may carry ripe red cherries right next to green ones that need several more weeks, so careful pickers return to the same bushes again and again, taking only the fruit that is ready. On flat land, farmers can use machines instead, but these tend to strip ripe and unripe fruit together, which can lower the quality of the coffee.',
    options: [
      'Picking by hand, however, has become far cheaper than it used to be',
      'Most coffee drinkers rarely stop to think where their beans come from',
      'Machines, on the other hand, can harvest a whole field in a single day',
      'Part of the problem is that the fruit does not all ripen at the same time',
      'As a result, hand-picked coffee is seldom sold for a higher price',
    ], answer: 3,
    explain: "Boşluktan önce elle toplamanın yavaş ve pahalı olduğu söyleniyor; boşluktan sonra da aynı dalda olgun kırmızı meyvelerle haftalarca daha bekleyecek yeşil meyvelerin yan yana durduğu anlatılıyor. Arada bir köprü gerekir: sorunun bir kısmı, meyvenin hep birden olgunlaşmamasıdır. Elle toplamanın ucuzladığını söyleyen cümle önceki cümleyle çelişiyor. Kahve içenlerin çekirdeğin nereden geldiğini düşünmemesi konuyu değiştiriyor. Makinelerden ise paragrafın sonunda, düz arazi için söz ediliyor; burada akışı keser. Elle toplanan kahvenin daha pahalıya satılmadığı da 'as a result' ile önceki cümleye bağlanmıyor." },

  { id: 'gc-p2', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    q: 'When coffee first arrived in Venice in the seventeenth century, it was sold as an exotic and rather expensive novelty, and some sellers even praised it as a kind of medicine. ----. Within a few generations, however, the situation had changed completely: coffee houses had opened in many European cities, prices had fallen, and the drink had become an ordinary part of the working day for merchants, clerks and students alike.',
    options: [
      'Doctors in the city therefore warned their patients to avoid it altogether',
      'As a result, it quickly became the daily drink of ordinary working people',
      'Venetian merchants had long grown rich by trading in spices and silk',
      'Its price, however, fell almost at once as ships brought in larger cargoes',
      'For a while, then, it remained a luxury enjoyed mainly by the wealthy',
    ], answer: 4,
    explain: "Paragraf bir değişimi anlatıyor: kahve Venedik'e ilk geldiğinde pahalı ve yabancı bir yenilikti; 'however' ile başlayan cümle ise birkaç kuşak içinde her şeyin değiştiğini, kahvenin herkesin gündelik içeceği olduğunu söylüyor. Boşluğa ilk durumu pekiştiren bir cümle gerekir: bir süre kahve çoğunlukla varlıklıların tadını çıkardığı bir lüks olarak kaldı. Kahvenin hemen sıradan çalışanların içeceği olduğunu söyleyen cümle, 'however' ile gelen değişimi anlamsız kılar. Hekimlerin kahveden uzak durmayı öğütlemesi 'therefore' ile ilaç gibi övülmesine bağlanmaz. Venedikli tüccarların baharat ve ipekten zenginleşmesi konuyu kaydırır. Fiyatın hemen düştüğünü söyleyen cümle de sonraki cümleyle çelişir: fiyatlar ancak birkaç kuşak içinde düştü." },

  // ---------- akışı bozan cümle ----------
  { id: 'gc-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['brew'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Turkish coffee is made by slowly heating very finely ground coffee, cold water and, if desired, sugar in a small pot.',
      'Instant coffee, by contrast, is made from brewed coffee that has been dried into a powder which dissolves in hot water.',
      'It is served unfiltered in small cups, usually with a glass of water, and the grounds are left to settle at the bottom.',
      'Yet the drink is about more than taste: offering it to guests is a sign of hospitality, and a well-known saying claims that a single cup is remembered for forty years.',
      "In recognition of these traditions, Turkish coffee culture was added to UNESCO's list of the Intangible Cultural Heritage of Humanity in 2013.",
    ], answer: 1,
    explain: "Parça Türk kahvesini anlatıyor: nasıl pişirildiği (I), nasıl sunulduğu (III), misafirlikteki yeri ve 'bir fincan kahvenin kırk yıl hatırı' sözü (IV) ve bu geleneklerin 2013'te UNESCO listesine girmesi (V). II. cümle de kahve hazırlamaktan söz ediyor ama konuyu hazır kahveye kaydırıyor. Üstelik III. cümledeki 'It' Türk kahvesini gösteriyor; II araya girince bu gönderim hazır kahveye kayıyor ve akış kopuyor." },

  { id: 'gc-b2', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['caffeine', 'addictive'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Caffeine, the mildly addictive substance found in coffee and tea, is what makes us feel more alert after a cup.',
      'During the day, a chemical called adenosine slowly builds up in the brain, and the more of it there is, the sleepier we tend to feel.',
      'Some people also enjoy coffee simply for its rich smell and for the small ritual of preparing it.',
      'Caffeine is similar enough in shape to adenosine to block the receptors that adenosine would normally attach to, so the signal of tiredness is weakened.',
      'Because this effect can last for several hours, a cup of coffee late in the afternoon may make it harder to fall asleep at night.',
    ], answer: 2,
    explain: "Parça kafeinin insanı nasıl uyanık tuttuğunu adım adım açıklıyor: kafein bizi daha dinç hissettirir (I); gün boyunca beyinde adenozin birikir ve uyku hâli artar (II); kafein şekilce adenozine benzediği için onun bağlanacağı almaçları tıkar ve yorgunluk sinyali zayıflar (IV); etki saatlerce sürebildiği için öğleden sonra içilen kahve uykuyu zorlaştırabilir (V). III. cümle de kahveden söz ediyor ama konuyu kahvenin kokusu ve hazırlanma keyfine kaydırıyor; II'den IV'e uzanan açıklamayı kesiyor." },
];

export default { id: 'genel-kahve', course: C, title: U, order: 8, cards, items };
