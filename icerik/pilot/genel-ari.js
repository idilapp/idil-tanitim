// iDil › Genel › Arılar ve tozlaşma.
// Tümü özgün: Claude yazdı (17 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (çoğaltma 4. tur planı §7.2 ve yerleşik bilgi; yalnız olgular, metin özgün). Her olgu tek öğede:
// - Karl von Frisch: bal arısı yiyecek kaynağını salınım dansıyla (waggle dance) bildirir; dikey çizgiyle yapılan açı kaynağın
//   güneşe göre yönünü, salınım süresi uzaklığını gösterir. 1973 Nobel Fizyoloji veya Tıp Ödülü'nü Konrad Lorenz ve Nikolaas
//   Tinbergen ile paylaştı (nobelprize.org) (gr-z1). Uyruk ve yıl verilmedi; "ilk başta herkes kabul etmedi, sonraki deneyler
//   doğruladı" genel ve temkinli bir özet;
// - tozlaşmanın tanımı (çiçek tozunun aynı türden bir çiçeğin dişi organına taşınması); tahılların (buğday, pirinç, mısır)
//   hayvan olmadan tozlaşması: mısırda rüzgârla, buğday ve pirinçte çoğunlukla kendi çiçeğinde (denetçi düzeltmesi, kör
//   denetim grup 3: "rüzgârla tozlaşır" buğday ve pirinç için eksikti); başlıca besin bitkisi türlerinin yaklaşık dörtte
//   üçünün bir ölçüde hayvan tozlaşmasından yararlanması (Klein ve arkadaşları, 2007, Proc. R. Soc. B; metinde
//   "around three quarters … to some degree"). Çeşitli böceklerin ziyaret ettiği ürünlerin daha iyi verim verebileceği
//   "some studies suggest" diye temkinli (Garibaldi ve arkadaşları, 2013, yerleşik bilgi) (gr-o1);
// - koloni çöküş bozukluğu 2006 dolayında ABD'de adlandırıldı; tek neden bulunmadı; Varroa akarı ve virüsler, böcek ilaçları
//   (neonikotinoidler), tek ürünlü arazide beslenme yetersizliği birlikte etkili sayılıyor (temkinli). Kraliçenin ve bal
//   stokunun kalıp işçilerin kaybolması, yakında az ölü arı bulunması bozukluğun bilinen tarifi (yerleşik bilgi) (gr-o2);
// - Avrupa Birliği 2018'de üç neonikotinoidin açık alanda kullanımını yasakladı (gr-p2). Kararı bazı çiftçilerin eski
//   ilaçlara dönmek zorunda kalacakları gerekçesiyle eleştirmesi genel ve temkinli ("some farmers");
// - arılar morötesi ışığı görür; bazı çiçeklerde insanın göremediği desenler arıyı nektara yönlendirir (gr-p1). Arıların
//   kırmızıyı iyi ayırt edemediği çeldiricide "are thought to" diye temkinli;
// - dünyada yaklaşık 20.000 arı türü olduğu tahmini; çoğunun koloni kurmaması (temkinli, "Scientists estimate") (gr-b1).
//   Balın eskiden yara tedavisinde de kullanılması yerleşik bilgi (gr-b1, bozan cümle);
// - nektarın bala dönüşmesi: işçi arı nektarı bal midesinde taşır, kovanda başka arılara aktarır, petek gözlerine konur,
//   kanat çırpılarak suyu buharlaştırılır; polen arka bacaklardaki sepetlerde taşınır (yerleşik bilgi; sayı yok) (gr-b2);
// - yerleşik bilgi: arı kuşunun (bee-eater) arı ve yaban arısını havada yakalaması (gr-k3); oğul vermede koloninin bir
//   bölümünün kovandan ayrılıp bir dalda toplanması (gr-d2); bazı çiçeklerin nektar değil yalnız polen sunması (gr-y2).

const T = 'taslak';
const C = 'genel';
const U = 'Arılar ve tozlaşma';

const cards = [
  // ---------- isim ----------
  { code: 'beekeeper', title: 'arıcı', pos: 'isim', cefr: 'B2', ipa: '/ˈbiːkiːpə/',
    text: "Arı yetiştiren, kovan bakan ve bal üreten kişi. Bileşik bir isimdir: bee (arı) + keeper (bakan, tutan). İşin kendisi 'beekeeping' (arıcılık). Bilimsel metinlerde 'apiarist' de geçer.",
    example: 'Our neighbour has been a beekeeper for thirty years and sells her honey at the Saturday market.',
    exampleTr: 'Komşumuz otuz yıldır arıcılık yapıyor ve balını cumartesi pazarında satıyor.',
    synonyms: ['apiarist', 'bee farmer'], family: ['beekeeping'] },
  { code: 'hive', title: 'kovan; (mecaz) arı kovanı gibi kalabalık, hareketli yer', pos: 'isim', cefr: 'C1', ipa: '/haɪv/',
    text: "Arıların yaşadığı yer; arıcının kurduğu kutu da, içindeki arı topluluğu da bu adla anılır. Mecaz kullanımı yaygındır: a hive of activity (arı kovanı gibi işleyen yer). 'Beehive' aynı anlamdadır.",
    example: 'On cold mornings, the bees stay inside the hive until the sun has warmed the wooden walls.',
    exampleTr: 'Soğuk sabahlarda arılar, güneş tahta duvarları ısıtana kadar kovanın içinde kalır.',
    synonyms: ['beehive', 'nest'], family: [] },
  { code: 'nectar', title: 'nektar, çiçek özü', pos: 'isim', cefr: 'C1', ipa: '/ˈnektə/',
    text: "Çiçeklerin salgıladığı şekerli sıvı; arılar, kelebekler, sinek kuşları bununla beslenir. Sayılamaz isimdir. Mecazen çok tatlı, lezzetli içecek için de kullanılır.",
    example: 'Hummingbirds hover in front of flowers while they drink the nectar inside.',
    exampleTr: 'Sinek kuşları, içindeki nektarı içerken çiçeklerin önünde havada asılı durur.',
    synonyms: ['flower juice', 'sweet liquid'], family: [] },
  { code: 'swarm', title: '(arı) oğul; (böcek, insan) sürü, kalabalık', pos: 'isim', cefr: 'C1', ipa: '/swɔːm/',
    text: "Birlikte uçan çok sayıda böcek, özellikle yeni bir yuva arayan arı topluluğu (oğul). Kalabalık insan için de kullanılır: a swarm of reporters. Aynı sözcük fiil olarak 'sürü hâlinde akın etmek' demektir.",
    example: 'The swarm hung from the fence for about an hour before it rose into the air and flew away.',
    exampleTr: 'Oğul, yaklaşık bir saat çitte asılı kaldıktan sonra havalanıp uçup gitti.',
    synonyms: ['cluster', 'throng'], family: [] },
  { code: 'pesticide', title: 'tarım ilacı, zararlı öldürücü (böcek ilacı vb.)', pos: 'isim', cefr: 'C1', ipa: '/ˈpestɪsaɪd/',
    text: "Ürüne zarar veren böcek, mantar ya da yabani otları öldürmek için kullanılan kimyasal. Kökü 'pest' (zararlı) ve '-cide' (öldüren). Böcek ilacı özel olarak 'insecticide', yabani ot ilacı 'herbicide'.",
    example: 'The farmer stopped using pesticides near the stream after fish began to die further down.',
    exampleTr: 'Çiftçi, derenin aşağısında balıklar ölmeye başlayınca dere yakınında tarım ilacı kullanmayı bıraktı.',
    synonyms: ['insecticide', 'crop spray'], family: [] },
  // ---------- fiil ----------
  { code: 'dwindle', title: 'gittikçe azalmak, erimek', pos: 'fiil', cefr: 'C1', ipa: '/ˈdwɪndl/',
    text: "Sayı, miktar ya da büyüklüğün yavaş yavaş azalması: dwindle to almost nothing (neredeyse sıfıra inmek). Nesnesizdir; 'bir şeyi azaltmak' anlamında kullanılmaz. Sıfat olarak 'dwindling' sık geçer: dwindling supplies.",
    example: 'As the evening went on, the crowd outside the stadium slowly dwindled to a few dozen fans.',
    exampleTr: 'Akşam ilerledikçe stadyumun önündeki kalabalık yavaş yavaş birkaç düzine taraftara indi.',
    synonyms: ['decrease', 'shrink'], family: ['dwindling'] },
  { code: 'forage', title: 'yiyecek aramak, yiyecek toplamak', pos: 'fiil', cefr: 'C1', ipa: '/ˈfɒrɪdʒ/',
    text: "Hayvanların doğada yiyecek araması ve toplaması: forage for food, forage on flowers. Mecazen insanlar için de kullanılır: forage in the cupboard (dolapta yiyecek aramak). Yiyecek arayan arıya 'forager' denir.",
    example: 'In autumn, squirrels forage among the fallen leaves for nuts to store for the winter.',
    exampleTr: 'Sonbaharda sincaplar, dökülmüş yapraklar arasında kış için saklayacakları cevizleri arar.',
    synonyms: ['search', 'scavenge'], family: ['forager'] },
  { code: 'sting', title: '(arı, akrep vb.) sokmak; (deri, göz) yanmak, sızlamak', pos: 'fiil', cefr: 'B2', ipa: '/stɪŋ/',
    text: "Düzensiz fiildir: sting, stung, stung. Edilgen sık kullanılır: I was stung by a bee. Gözün ya da derinin yanması için de geçer: the smoke made my eyes sting. İsim olarak 'arı sokması' ya da 'iğne' demektir.",
    example: 'Be careful with that wasp; unlike a honeybee, it can sting you more than once.',
    exampleTr: 'O yaban arısına dikkat et; bal arısının tersine seni birden çok kez sokabilir.',
    synonyms: ['prick', 'smart'], family: ['stinger'] },
  { code: 'communicate', title: 'iletişim kurmak; (bilgi, duygu) iletmek, bildirmek', pos: 'fiil', cefr: 'B1', ipa: '/kəˈmjuːnɪkeɪt/',
    text: "Söz, işaret ya da başka yollarla bilgi alışverişinde bulunmak: communicate with someone. Geçişli de kullanılır: communicate an idea (bir düşünceyi aktarmak). Adı 'communication', sıfatı 'communicative' (konuşkan, iletişime açık).",
    example: 'Dolphins communicate with one another using clicks and whistles.',
    exampleTr: 'Yunuslar birbirleriyle tıkırtı ve ıslık sesleriyle iletişim kurar.',
    synonyms: ['convey', 'pass on'], family: ['communication', 'communicative'] },
  { code: 'pollinate', title: 'tozlaştırmak', pos: 'fiil', cefr: 'C1', ipa: '/ˈpɒləneɪt/',
    text: "Çiçek tozunu (pollen) aynı türden bir çiçeğin dişi organına taşıyıp tohum ve meyve oluşmasını sağlamak. Adı 'pollination' (tozlaşma); bu işi yapan hayvan 'pollinator'. Edilgen sık geçer: plants pollinated by the wind.",
    example: 'Without insects to pollinate them, the melon plants in the greenhouse flowered but produced almost no fruit.',
    exampleTr: 'Onları tozlaştıracak böcekler olmayınca seradaki kavun bitkileri çiçek açtı ama neredeyse hiç meyve vermedi.',
    synonyms: ['fertilise', 'cross-pollinate'], family: ['pollination', 'pollinator'] },
  { code: 'buzz', title: 'vızıldamak; (yer) cıvıl cıvıl olmak', pos: 'fiil', cefr: 'B2', ipa: '/bʌz/',
    text: "Arı ya da sinek gibi sürekli, alçak bir ses çıkarmak. Mecazen bir yerin hareketli, coşkulu olması: the city was buzzing with excitement. Kapı zili ya da sesli uyarı veren aygıta 'buzzer' denir.",
    example: 'A fly kept buzzing against the window, trying to find a way out.',
    exampleTr: 'Bir sinek, dışarı çıkacak yol arayarak cama çarpıp vızıldayıp durdu.',
    synonyms: ['hum', 'drone'], family: ['buzzer'] },
  // ---------- sıfat ----------
  { code: 'wild', title: 'yabani, vahşi; kendiliğinden yetişen', pos: 'sıfat', cefr: 'B1', ipa: '/waɪld/',
    text: "İnsan eliyle yetiştirilmemiş, evcilleştirilmemiş: wild animals (vahşi hayvanlar), wild flowers (kır çiçekleri). Mecaz anlamları da var: wild party (çılgın parti), a wild guess (kafadan atılmış tahmin). Zarfı 'wildly'.",
    example: 'Wild strawberries are much smaller than the ones you buy in shops, but they taste sweeter.',
    exampleTr: 'Yabani çilekler dükkânlarda satılanlardan çok daha küçüktür ama tadı daha tatlıdır.',
    synonyms: ['untamed', 'uncultivated'], family: ['wildly', 'wildness'] },
  { code: 'agricultural', title: 'tarımsal, tarıma ilişkin', pos: 'sıfat', cefr: 'B2', ipa: '/ˌæɡrɪˈkʌltʃərəl/',
    text: "Tarımla, çiftçilikle ilgili: agricultural land (tarım arazisi), agricultural products (tarım ürünleri). Adı 'agriculture' (tarım). İsimden önce kullanılır; 'the land is agricultural' de doğrudur.",
    example: 'Much of the agricultural land in the valley is now used for growing cotton.',
    exampleTr: 'Vadideki tarım arazisinin büyük bölümü artık pamuk yetiştirmek için kullanılıyor.',
    synonyms: ['farming', 'rural'], family: ['agriculture', 'agriculturally'] },
  { code: 'vibrant', title: '(renk) canlı, parlak; hayat dolu, hareketli', pos: 'sıfat', cefr: 'C1', ipa: '/ˈvaɪbrənt/',
    text: "Renkler için parlak ve göz alıcı: vibrant colours. Yer ve kişiler için enerji dolu, canlı: a vibrant city. Adı 'vibrancy'. 'Bright'tan güçlüdür; çoğu zaman olumlu bir izlenim bildirir.",
    example: 'The market stalls were piled high with vibrant red peppers and bright yellow lemons.',
    exampleTr: 'Pazar tezgâhları canlı kırmızı biberler ve parlak sarı limonlarla doluydu.',
    synonyms: ['bright', 'lively'], family: ['vibrancy', 'vibrantly'] },
  // ---------- zarf ----------
  { code: 'collectively', title: 'topluca, hep birlikte; bir bütün olarak', pos: 'zarf', cefr: 'C1', ipa: '/kəˈlektɪvli/',
    text: "Bir topluluğun üyelerinin tek tek değil, bir bütün olarak: collectively responsible (ortak sorumlu). Tek tek küçük olan şeylerin toplam etkisini anlatırken sık geçer. Sıfatı 'collective'.",
    example: 'The residents collectively decided to turn the empty plot into a vegetable garden.',
    exampleTr: 'Sakinler boş arsayı bir sebze bahçesine dönüştürmeye hep birlikte karar verdi.',
    synonyms: ['together', 'jointly'], family: ['collective'] },
  { code: 'tirelessly', title: 'yorulmadan, durup dinlenmeden', pos: 'zarf', cefr: 'C1', ipa: '/ˈtaɪələsli/',
    text: "Uzun süre ve büyük bir enerjiyle, ara vermeden: work tirelessly. Çoğu zaman övgü bildirir. Sıfatı 'tireless' (yorulmak bilmez); 'tiresome' (bıktırıcı) ile karıştırma.",
    example: 'The volunteers worked tirelessly through the night to fill sandbags before the river rose.',
    exampleTr: 'Gönüllüler, nehir yükselmeden kum torbalarını doldurmak için bütün gece yorulmadan çalıştı.',
    synonyms: ['untiringly', 'relentlessly'], family: ['tireless'] },
  // ---------- öbek fiil ----------
  { code: 'feed on', title: 'ile beslenmek', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌfiːd ˈɒn/',
    text: "Bir hayvanın belli bir şeyi yiyerek yaşaması: cows feed on grass. Mecazen bir duygunun ya da durumun bir şeyden güç alması: fear feeds on ignorance. 'Feed' düzensizdir: fed, fed.",
    example: 'Many owls feed on mice and other small animals that they catch at night.',
    exampleTr: 'Birçok baykuş, geceleri yakaladığı fareler ve başka küçük hayvanlarla beslenir.',
    synonyms: ['live on', 'eat'], family: [] },
  { code: 'head for', title: '-e doğru gitmek, yönelmek', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌhed ˈfɔː/',
    text: "Bir yere doğru yola çıkmak ya da o yöne ilerlemek: head for home (eve doğru yola çıkmak). Mecazen bir sonuca doğru gitmek: be heading for trouble (başını belaya sokmak üzere olmak).",
    example: 'As soon as the meeting ended, she headed for the station to catch the last train.',
    exampleTr: 'Toplantı biter bitmez son treni yakalamak için istasyonun yolunu tuttu.',
    synonyms: ['make for', 'go towards'], family: [] },
];

const items = [
  // ---------- kelime ----------
  { id: 'gr-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['dwindle', 'forage'],
    level: 'zor', cefr: 'C1', konu: ['fiil'],
    q: 'Butterflies were once common in the meadows around the village, but their numbers have ---- over the past twenty years, and now only a handful can be seen each summer.',
    options: ['foraged', 'flourished', 'hibernated', 'multiplied', 'dwindled'], answer: 4,
    explain: "Bir zamanlar yaygın olan kelebeklerin sayısı yirmi yılda değişmiş ve artık her yaz yalnız birkaç tane görülüyor. Yavaş yavaş azalmayı 'dwindle' anlatır. 'Forage' (yiyecek aramak) hayvanların yaptığı bir iştir; sayıların değişimini anlatmaz. 'Flourish' (gelişip serpilmek) ve 'multiply' (çoğalmak) cümlenin sonuyla çelişir: sayılar artsaydı her yaz yalnız birkaç kelebek görülmezdi. 'Hibernate' (kış uykusuna yatmak) bir mevsimlik durumdur; yirmi yıllık bir değişimi ve 'numbers' öznesini karşılamaz." },

  { id: 'gr-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['wild', 'agricultural'],
    level: 'kolay', cefr: 'B1', konu: ['sıfat'],
    q: "We didn't plant those flowers on the hillside; they are ----, and they come back by themselves every spring.",
    options: ['agricultural', 'expensive', 'frozen', 'artificial', 'wild'], answer: 4,
    explain: "Çiçekleri kimse dikmemiş ve her bahar kendiliğinden yeniden çıkıyorlar: kendiliğinden yetişen çiçeklere 'wild' (yabani) denir. 'Agricultural' (tarımsal) tarlada yetiştirilen ürünler için kullanılır; kimsenin dikmediği çiçekleri anlatmaz. 'Artificial' (yapay) çiçekler her bahar kendiliğinden çıkmaz. 'Expensive' (pahalı) ve 'frozen' (donmuş) cümlenin açıkladığı durumla ilgisizdir." },

  { id: 'gr-k3', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['feed on', 'head for', 'beekeeper'],
    level: 'orta', cefr: 'B2', konu: ['öbek fiil'],
    q: 'Bee-eaters are colourful birds that ---- flying insects, especially bees and wasps, so beekeepers are not always pleased to see them.',
    options: ['head for', 'look after', 'take after', 'feed on', 'give off'], answer: 3,
    explain: "Arı kuşları uçan böceklerle, özellikle arı ve yaban arısıyla besleniyor; arıcıların bu kuşları görmekten pek hoşlanmaması da bundan. 'Bir şeyle beslenmek' anlamı 'feed on' ile verilir. 'Head for' (bir yere doğru gitmek) ardından bir yer ister; böcekler bir varış yeri değildir ve bir kuş türünü tanıtan cümle onun nereye gittiğini değil, neyle yaşadığını söyler. 'Look after' (bakmak, ilgilenmek) yakalanan avla çelişir. 'Take after' (birine benzemek) ve 'give off' (koku, ısı yaymak) anlamca uymaz." },

  // ---------- dil bilgisi ----------
  { id: 'gr-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['hive'],
    level: 'orta', cefr: 'B2', konu: ['edilgen'],
    q: 'Hives ---- regularly during the summer so that any signs of disease can be spotted early.',
    options: ['should be checked', 'should have checked', 'were being checked', 'had been checked', 'are checking'], answer: 0,
    explain: "Kovanlar kimseyi denetlemez, denetlenen şeydir; bu yüzden edilgen gerekir. 'So that … can be spotted' bugüne ve genele dair bir amaç bildiriyor; bir öneri olarak 'should be checked' (denetlenmeli) cümleye uyar. 'Should have checked' ve 'are checking' etkendir; kovanları bir şeyi denetleyen yapar. 'Were being checked' ve 'had been checked' edilgen ama geçmişe aittir; 'can be spotted' ile kurulan şimdiki zamanlı amaçla zaman uyumu bozulur." },

  { id: 'gr-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['nicelik'],
    q: 'It was already October, but luckily there were still ---- flowers in the garden for the bees.',
    options: ['a great deal of', 'much', 'a few', 'few', 'a little'], answer: 2,
    explain: "'Flowers' sayılabilir ve çoğul; 'luckily' (neyse ki) de olumlu bir durum bildiriyor: arılar için hâlâ birkaç çiçek vardı. Sayılabilir isimle olumlu 'birkaç' anlamı 'a few' ile verilir. 'Few' de sayılabilir isimle kullanılır ama 'pek az, yok denecek kadar' diye olumsuz bir anlam taşır ve 'luckily' ile çelişir. 'A great deal of', 'a little' ve 'much' sayılamaz isimlerle kullanılır; 'flowers' ile uymaz." },

  { id: 'gr-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['hive'],
    level: 'zor', cefr: 'C1', konu: ['isim cümleciği'],
    q: 'The visitors wanted to know ---- the bees would sting them if they stood close to the hive and ---- they should do if one landed on their arm.',
    options: ['what / whether', 'how / that', 'that / which', 'if / how', 'whether / what'], answer: 4,
    explain: "İki isim cümleciği de 'know' fiilinin nesnesi. İlki evet-hayır sorusunun dolaylı biçimi (arılar onları sokar mı?): eksiksiz bir cümleyi 'whether' bağlar. İkincisinde 'do' fiilinin nesnesi eksik (ne yapmalılar?); bu eksik nesnenin yerini 'what' tutar. Ters sıra ('what / whether') ilk cümlecikte nesne eksiği arar, ikincide 'do'yu nesnesiz bırakır. 'If' ilk boşluğa uyar ama ardından gelen 'how they should do' 'do'yu nesnesiz bırakır. 'That' ile kurulan cümlecik bir bilgiyi bildirir, 'want to know' ile soru anlamı kurmaz; 'which' de ardından bir isim ister." },

  // ---------- boşluklu metin ----------
  { id: 'gr-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: ['communicate', 'hive'],
    level: 'orta', cefr: 'B2', title: 'Karl von Frisch ve arılar',
    text: "For centuries, beekeepers noticed that once a single bee had found a rich patch of flowers, many others from the same hive soon arrived there too. (1) ---- the pattern was familiar, nobody could say how the news travelled. Karl von Frisch, who studied bees for most of his long career, eventually offered an (2) ----. He showed that a bee returning with food performs a 'waggle dance' on the comb, running in a straight line while shaking her body from side to side and then circling back to repeat the movement. The angle of the straight run (3) ---- the vertical tells the other bees the direction of the food in relation to the sun, while the length of the waggling indicates how far away it is. In this way, bees can communicate the position of a place that their nestmates have never visited. Von Frisch's ideas were not accepted by everyone at first, but they (4) ---- by many careful experiments in the years that followed. (5) ----, in 1973 he shared the Nobel Prize in Physiology or Medicine with Konrad Lorenz and Nikolaas Tinbergen.",
    steps: [
      { konu: ['bağlaç'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['Although', 'Because', 'Unless', 'In case', 'So that'], answer: 0,
        explain: "Cümlenin iki bölümü birbirine aykırı: örüntü herkesçe biliniyordu, yine de kimse haberin nasıl yayıldığını açıklayamıyordu. Bu karşıtlığı 'Although' (-e rağmen) kurar. 'Because' bilinmeyi açıklayamamanın nedeni yapar; mantık ters döner. 'Unless' (-medikçe) koşul, 'In case' (… diye, … ihtimaline karşı) önlem, 'So that' (-sın diye) amaç bildirir; hiçbiri iki bölüm arasındaki aykırılığı kurmaz." },
      { konu: ['kelime', 'isim'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['instrument', 'apology', 'explanation', 'income', 'invitation'], answer: 2,
        explain: "Önceki cümle bir bilmeceyi anlatıyor: kimse haberin arılar arasında nasıl yayıldığını söyleyemiyordu. Von Frisch bu bilmeceye bir açıklama getirdi: 'explanation'. Sonraki cümle de bu açıklamayı (salınım dansını) anlatıyor. 'Apology' (özür) ve 'invitation' (davet) 'offer' ile kullanılabilir ama bilmeceyi çözmez. 'Instrument' (alet) ve 'income' (gelir) bağlamla ilgisizdir." },
      { konu: ['edat'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['instead of', 'relative to', 'apart from', 'in spite of', 'on behalf of'], answer: 1,
        explain: "Dansın düz koşusunun bir açısı var ve açı iki şey arasında ölçülür: koşu ile dikey çizgi arasında. 'Relative to' (… -e göre) açının neye göre ölçüldüğünü bildirir. 'Instead of' (yerine) koşuyu dikey çizginin yerine koyar; açıdan söz edilemez. 'In spite of' (-e rağmen) bir engel, 'on behalf of' (adına) bir temsil bildirir. 'Apart from' (… dışında) dikey çizgiyi açının dışında bırakır; açı yine neye göre ölçüldüğünü yitirir." },
      { konu: ['edilgen'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['were confirming', 'had been confirmed', 'confirmed', 'will be confirmed', 'were confirmed'], answer: 4,
        explain: "Özne 'they', yani von Frisch'in düşünceleri; düşünceler deneyleri doğrulamaz, deneylerle doğrulanır. Edilgen gerekir ve 'in the years that followed' (sonraki yıllarda) geçmişte, ilk kabul görmemeden sonra olan bir şeyi anlatır: 'were confirmed'. 'Were confirming' ve 'confirmed' etkendir; düşünceleri bir şeyi doğrulayan yapar. 'Had been confirmed' edilgen ama doğrulamayı ilk kuşkulardan önceye taşır ve 'sonraki yıllarda' ile çelişir. 'Will be confirmed' de geçmişte olmuş bir şeyi geleceğe atar." },
      { konu: ['bağlantı zarfı'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['Otherwise', 'As a result', 'Instead', 'Nevertheless', 'For instance'], answer: 1,
        explain: "Önceki cümle von Frisch'in düşüncelerinin deneylerle doğrulandığını söylüyor; son cümle de bunun ardından gelen ödülü bildiriyor. Doğrulanmanın sonucu olarak ödül 'As a result' (bunun sonucunda) ile bağlanır. 'Nevertheless' (yine de) ödülü doğrulanmaya aykırı bir şeymiş gibi gösterir. 'Otherwise' (aksi hâlde) ve 'Instead' (onun yerine) iki cümle arasında bir seçenek ya da koşul kurar. 'For instance' (örneğin) ödülü önceki cümlenin bir örneği yapar; ödül bir deney değildir." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'gr-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['beekeeper'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Most beekeepers wear a protective suit and gloves when they open a hive, ----.',
    options: [
      'since a sting is rarely painful for people who are new to the job',
      'although a few experienced keepers prefer to work bare-handed',
      'so that the bees will learn to recognise their faces more quickly',
      'even though the suit keeps out the great majority of bee stings',
      'unless they want the bees to stay calm and gentle while they work',
    ], answer: 1,
    explain: "Ana cümle bir alışkanlığı anlatıyor: arıcıların çoğu kovanı açarken koruyucu giysi ve eldiven giyer. Buna aykırı küçük bir durum, birkaç deneyimli arıcının çıplak elle çalışmayı yeğlemesi, 'although' ile anlamlı bir karşıtlık kurar. 'Even though' ile kurulan seçenek de karşıtlık bağlacı taşıyor ama giysinin sokmaların çoğunu engellemesi giymenin gerekçesidir, ona aykırı değil. Sokmanın acıtmaması giysi giymenin nedeni olamaz. Arılar yüzleri tanısın diye giysi giymek de mantıksızdır; giysi yüzü örter. Arılar sakin kalsın istemedikçe giysi giymek anlamsız bir koşuldur." },

  { id: 'gr-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['zaman'],
    q: '----, the bees stopped flying and stayed inside their hive.',
    options: [
      'After the sun had come out and warmed the whole garden',
      'While the flowers were opening in the bright morning sun',
      'As soon as the farmer had planted new flowers nearby',
      'When dark clouds came over and it began to rain hard',
      'Once the long, cold winter had finally come to an end',
    ], answer: 3,
    explain: "Arılar uçmayı bırakıp kovanda kalmış; bunun zamanı, kara bulutların gelip sağanağın başladığı andır. Arılar yağmurda dışarı çıkmaz. Güneşin çıkıp bahçeyi ısıtması, çiçeklerin sabah güneşinde açması ve uzun kışın bitmesi arıların dışarı çıkacağı zamanlardır; mantık ters. Yakına yeni çiçek dikilmesi de arıların kovanda kalmasının zamanı olamaz; tersine onları dışarı çeker." },

  { id: 'gr-t3', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['neden-sonuç'],
    q: 'In midsummer, the beekeeper moved her hives to a large field of sunflowers ----.',
    options: [
      'although bees tend to collect food from flowers close to their hive',
      'unless the farmer who owned the field had already cut the flowers down',
      'so that her bees would have to fly much further to find their food',
      'even though bees are known to collect food from sunflowers',
      'because by then few other plants in the area were in flower',
    ], answer: 4,
    explain: "Arıcı kovanlarını yaz ortasında büyük bir ayçiçeği tarlasına taşımış. Mantıklı neden, o mevsimde yakında açık çiçeği olan başka bitki pek kalmamasıdır; 'because' bu nedeni bağlar. Arıların kovanlarına yakın çiçeklerden yiyecek toplaması kovanı tarlaya taşımanın gerekçesidir, ona aykırı değil; 'although' ile karşıtlık kurulamaz. Arılar yiyecek için çok daha uzağa uçsun diye kovan taşımak mantıksızdır. Arıların ayçiçeğinden yiyecek toplaması taşımanın gerekçesidir; 'even though' ile karşıtlık kurulamaz. Tarla sahibinin çiçekleri kesmiş olması da 'unless' ile taşımaya koşul yapılamaz; kesilmiş çiçeklere kovan götürülmez." },

  { id: 'gr-t4', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['hive'],
    level: 'zor', cefr: 'C1', konu: ['koşul'],
    q: '----, the colony would almost certainly have died during that long, cold winter.',
    options: [
      'If the beekeeper had not opened the hive so often during the cold months',
      'Provided that the hive is kept dry and sheltered from the north wind',
      'Since the beekeeper had left plenty of honey in the hive for the bees',
      'Had the bees been given enough food and shelter before the first frost',
      'Had the beekeeper not wrapped the hive and left it some extra honey',
    ], answer: 4,
    explain: "Ana cümle gerçekleşmemiş bir geçmişi anlatıyor: koloni o kışı neredeyse kesin olarak atlatamayacaktı (ama atlattı). Bunun koşulu, gerçekte yapılmış koruyucu bir işin yapılmamış olmasıdır: arıcı kovanı sarmasaydı ve fazladan bal bırakmasaydı. 'Had … not wrapped' 'if … had not wrapped' yapısının devrik biçimidir. Arılara yeterli yiyecek ve barınak verilmesi de devrik koşul ama ölümle sonuçlanmaz; mantık ters. Kovanın soğukta sık açılmaması da arıları korur; 'if … had not' yapısı doğru ama sonuç ters. 'Since' bir koşul değil, gerçek bir neden bildirir ve bal bırakmayı ölümün nedeni yapar. 'Provided that … is kept' şimdiki zamanlı gerçek bir koşul; 'would have died' ile zaman uyumu yok." },

  // ---------- çeviri ----------
  { id: 'gr-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'Gardeners who want to help bees are advised to choose plants that flower at different times of the year.',
    options: [
      'Arılara yardım etmek isteyen bahçıvanlar, yılın her mevsiminde çiçek açan bitkileri seçmeyi tercih ediyor.',
      'Bahçıvanlar, arılara yardım etmek için yılın aynı döneminde çiçek açan bitkileri seçmeye teşvik ediliyor.',
      'Arılara yardım etmek isteyen bahçıvanlara, yılın farklı zamanlarında çiçek açan bitkileri seçmeleri öneriliyor.',
      'Arılara yardım etmek isteyen bahçıvanlara, bitkilerini yılın farklı zamanlarında dikmeleri öneriliyor.',
      'Arıların yardımına ihtiyaç duyan bahçıvanlar, yılın farklı zamanlarında çiçek açan bitkileri seçiyor.',
    ], answer: 2,
    explain: "Cümlede iki sıfat cümleciği var: 'who want to help bees' (arılara yardım etmek isteyen) bahçıvanları, 'that flower at different times of the year' (yılın farklı zamanlarında çiçek açan) bitkileri niteliyor. 'Are advised to' ise 'öneriliyor' demektir. Doğru çeviri hepsini korur. Yanlışlardan biri öneriyi bahçıvanların kendi tercihine, 'farklı zamanlar'ı 'her mevsim'e çeviriyor. Biri 'farklı'yı 'aynı'ya çevirip anlamı tersine döndürüyor. Biri çiçek açma zamanını dikim zamanına kaydırıyor. Biri de arılara yardımı arıların yardımına çeviriyor ve 'öneriliyor'u düşürüyor." },

  { id: 'gr-c2', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['beekeeper'],
    level: 'orta', cefr: 'B2', konu: ['isim-fiil ve mastar'],
    q: 'Learning to handle bees calmly takes time, and many beginners find it useful to work alongside an experienced beekeeper for their first season.',
    options: [
      'Arıları sakin bir biçimde idare etmeyi öğrenmek hiç de zor değildir; yine de birçok yeni başlayan, ilk sezonunda deneyimli bir arıcının yanında çalışır.',
      'Arıları sakin bir biçimde idare etmeyi öğrenmek zaman alır ve birçok yeni başlayan, ilk sezonunda deneyimli bir arıcının yanında çalışmayı yararlı bulur.',
      'Deneyimli bir arıcının yanında çalışmak, yeni başlayanlara arıları sakin bir biçimde idare etmeyi tek bir sezonda öğretir.',
      'Arıları sakin bir biçimde idare etmeyi öğrenmek zaman aldığından, bütün yeni başlayanların ilk sezonlarında deneyimli bir arıcının yanında çalışması zorunludur.',
      'Birçok deneyimli arıcı, ilk sezonunda yeni başlayanların yanında çalışmanın arıları sakinleştirdiğini düşünür.',
    ], answer: 1,
    explain: "Cümlenin öznesi bir isim-fiil: 'Learning to handle bees calmly' (arıları sakin bir biçimde idare etmeyi öğrenmek). İkinci bölümde 'find it useful to work' (çalışmayı yararlı bulmak) mastarla kurulmuş. 'Many beginners' 'birçok yeni başlayan' demektir. Doğru çeviri bunların hepsini korur. Yanlışlardan biri 'zaman alır'ı 'zor değildir'e çeviriyor ve 'yararlı bulur'u düşürüyor. Biri isim-fiili özne yapmak yerine deneyimli arıcının yanında çalışmayı özne yapıp öğrenmeyi bir sezona sığdırıyor. Biri 'birçok'u 'bütün'e, 'yararlı bulur'u 'zorunludur'a çevirerek kapsamı genişletiyor. Biri de yeni başlayanlarla deneyimli arıcıların yerini değiştiriyor." },

  { id: 'gr-c3', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['hive', 'beekeeper'],
    level: 'kolay', cefr: 'B1', konu: ['edilgen'],
    q: 'Kovanlar her ilkbahar arıcılar tarafından ormanın kenarına taşınır.',
    options: [
      'Every spring, the beekeepers are moved to the edge of the forest with their hives.',
      'Every spring, the hives are moved to the edge of the forest by the beekeepers.',
      'Every spring, the hives were moved away from the edge of the forest by beekeepers.',
      'Every spring, the beekeepers have to move away from the hives at the forest edge.',
      'Every spring, the hives at the edge of the forest are visited by the beekeepers.',
    ], answer: 1,
    explain: "Türkçe cümle edilgen ve geniş zamanlı: kovanlar taşınır, taşıyan arıcılardır ('tarafından' = 'by'). İngilizcede 'the hives are moved … by the beekeepers' karşılar. Yanlışlardan biri taşınanı arıcılar yapıyor. Biri zamanı geçmişe çeviriyor ve kovanları ormanın kenarından uzaklaştırıyor. Biri arıcıların kovanlardan uzaklaşmasından söz ediyor. Biri de taşımayı ziyarete çeviriyor." },

  { id: 'gr-c4', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['karşılaştırma'],
    q: 'Bu yıl, geçen yıl topladığımızın yarısı kadar bile bal toplayamadık.',
    options: [
      "This year we didn't collect even half as much honey as we did last year.",
      'This year we collected almost twice as much honey as we did last year.',
      'This year we collected only slightly less honey than we had collected last year.',
      "Last year we didn't collect even half as much honey as we did this year.",
      'This year we collected at least half as much honey as we did last year.',
    ], answer: 0,
    explain: "'Yarısı kadar bile … -madık' bu yılki balın geçen yılkinin yarısına bile ulaşmadığını söylüyor. İngilizcede 'didn't … even half as much … as' ile kurulur. Yanlışlardan biri azalmayı iki kat artışa çeviriyor. Biri büyük düşüşü 'biraz daha az'a indiriyor. Biri yılların yerini değiştirip karşılaştırmayı tersine döndürüyor. Biri de 'yarısı kadar bile değil' üst sınırını 'en az yarısı kadar' alt sınırına çeviriyor." },

  // ---------- okuma parçası 1 (4 soru, YDS biçimi) ----------
  { id: 'gr-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['pollinate', 'agricultural', 'forage', 'tirelessly'],
    level: 'orta', cefr: 'B2', title: 'Çiçekten çiçeğe',
    text: "Pollination is the transfer of pollen to the female part of a flower of the same species, and without it many plants cannot produce seeds or fruit. Some plants manage without animals: their pollen is carried by the wind or never needs to leave the flower at all. The great grain crops, such as wheat, rice and maize, belong to this group, which is one reason why a world without pollinating animals would not be a world without food. It would, however, be a world with a much poorer diet. A widely cited review published in 2007 by Klein and colleagues estimated that around three quarters of the leading food crops grown worldwide benefit to some degree from animal pollination. Many fruits, nuts and vegetables are among them, and for some of these how large and how good the harvest is can depend heavily on visits from insects. Asked to name a pollinator, most people think of the honeybee working tirelessly from flower to flower, and in many agricultural regions honeybee colonies are brought to the fields for exactly this purpose. Yet honeybees do not work alone. Bumblebees and many other kinds of bee, as well as hoverflies, butterflies and moths, forage on flowers and pick up pollen as they move between them; in certain regions, birds and bats do the same. Some studies suggest that crops visited by a wide variety of insects can give better harvests than those that depend on honeybees alone. This does not make honeybees unimportant. It does suggest, though, that the hedges and rough field edges where other pollinators live may be worth as much to a farmer as an extra row of hives.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, wheat, rice and maize ----.',
        options: [
          'do not depend on animals to move their pollen',
          "make up about three quarters of the world's leading crops",
          'give better harvests when many kinds of insect visit them',
          'would no longer be grown if pollinating animals disappeared',
          'are usually grown in fields that are bordered by hedges',
        ], answer: 0,
        explain: "Parçaya göre bazı bitkiler hayvan olmadan tozlaşır: çiçek tozunu rüzgâr taşır ya da toz çiçekten hiç çıkmaz. Buğday, pirinç, mısır gibi büyük tahıllar bu gruptadır. Doğru seçenek bunu 'çiçek tozlarını taşımak için hayvanlara bağlı değiller' diye anlatıyor. Dörtte üç oranı tahıllara değil, hayvan tozlaşmasından yararlanan başlıca besin bitkilerine ait; kısmen doğru ama yanlış yere bağlanmış. Çeşitli böceklerin verimi artırması böceklerle tozlaşan ürünler için söyleniyor. Tozlaştırıcılar yok olursa tahılların yetişmeyeceği parçanın söylediğinin tersidir. Çitlerle çevrili tarlalar da tahıllarla ilişkilendirilmiyor." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that ----.',
        options: [
          'honeybees bring little real benefit to the farms where their hives are placed',
          'a diet made up only of grain crops would be a healthy and varied one',
          'birds and bats pollinate more crops than insects do in most regions',
          'clearing away hedges could lower the harvest of some insect-pollinated crops',
          'every fruit and vegetable crop depends entirely on regular visits from insects',
        ], answer: 3,
        explain: "Parça, başka tozlaştırıcıların çitlerde ve tarla kenarlarında yaşadığını, çeşitli böceklerin ziyaret ettiği ürünlerin daha iyi verim verebileceğini söylüyor. Buradan çitlerin sökülmesinin böceklerle tozlaşan bazı ürünlerin verimini düşürebileceği çıkar. Bal arılarının önemsiz olmadığı açıkça söyleniyor. Yalnız tahıla dayalı beslenmenin 'çok daha yoksul' olacağı belirtiliyor; sağlıklı ve çeşitli olacağı parçayla çelişiyor. Kuşların ve yarasaların böceklerden daha çok ürün tozlaştırdığı parçada yok. Bütün meyve ve sebzelerin tümüyle böceklere bağlı olduğu da abartı; parça yalnız bazılarının verimi böceklere çok bağlı diyor." },
      { konu: ['gönderim'],
        q: "In the passage, the phrase 'this group' refers to ----.",
        options: [
          'flowers that belong to one and the same species',
          'animals that carry pollen between plants',
          'plants that do not need animals for pollination',
          'crops that depend on regular visits from insects',
          'the fruits, nuts and vegetables we eat',
        ], answer: 2,
        explain: "'This group' bir önceki cümledeki bitkilere döner: hayvan olmadan tozlaşabilen, tozunu rüzgârın taşıdığı ya da tozu çiçekten hiç çıkmayan bitkiler. Buğday, pirinç ve mısır bu gruba giriyor. Aynı türden çiçekler tozlaşmanın tanımında geçiyor, bir grup olarak sunulmuyor. Tozlaştırıcı hayvanlar ve böceklere bağlı ürünler tahılların ait olduğu grup değil; parça tahılların tersine hayvanlara bağlı olmadığını söylüyor. Meyve, kuruyemiş ve sebzeler de sonraki cümlelerde, hayvan tozlaşmasından yararlanan ürünler olarak geçiyor." },
      { konu: ['ana fikir'],
        q: 'Which of the following best summarises the passage?',
        options: [
          'Grain crops such as wheat could not be grown without the help of honeybees.',
          'Farmers ought to rent more hives rather than spend money on protecting their field edges.',
          'Birds and bats have now replaced insects as the most important pollinators of food crops.',
          'Animal pollination matters a great deal to farming, and honeybees are only part of it.',
          "The 2007 review greatly overstated how much the world's food crops depend on insects.",
        ], answer: 3,
        explain: "Parça önce hayvan tozlaşmasının besin bitkileri için ne kadar önemli olduğunu anlatıyor, sonra bu işi bal arısının yanında başka arıların, sineklerin, kelebeklerin, kuşların ve yarasaların da yaptığını ve onların yaşam alanlarının çiftçi için değerli olduğunu söylüyor. Bu bütünü özetleyen, hayvan tozlaşmasının tarım için önemli ve bal arısının bu işin yalnız bir parçası olduğunu söyleyen seçenektir. Tahıllar hayvan olmadan tozlaştığı için bal arısına bağlı değildir. Parça çit ve tarla kenarlarının ek kovan kadar değerli olabileceğini söylüyor; kovan kiralamayı öne çıkarmıyor. Kuşların ve yarasaların böceklerin yerini aldığı parçada yok. 2007 incelemesi eleştirilmiyor, kaynak olarak kullanılıyor." },
    ] },

  // ---------- okuma parçası 2 (4 soru, YDS biçimi) ----------
  { id: 'gr-o2', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['pesticide'],
    level: 'zor', cefr: 'C1', title: 'Kovanlardaki gizem',
    text: "Around 2006, beekeepers in the United States began to describe a puzzling pattern. Colonies that had seemed healthy only weeks earlier were found almost deserted. The queen and some young bees were often still there, and the stores of honey had not been touched, but most of the adult workers had vanished, and few dead bees could be found nearby. The problem soon acquired a name, colony collapse disorder, and it drew intense attention from scientists and journalists alike. Early reports tended to look for a single culprit. A newly identified virus and a particular group of pesticides, the neonicotinoids, were each put forward at different times as the explanation. Years of research, however, have not delivered the simple verdict that many people hoped for. Instead, most researchers now describe the losses as the result of several pressures acting together. A parasitic mite known as Varroa attaches itself to bees and spreads viruses among them. Some pesticides, even in doses too small to kill, may affect the insects' ability to find their way back to the hive. And where a single crop covers the landscape, bees may struggle to find a varied diet for much of the year, which can leave them less able to resist disease. An account of this kind is less satisfying than a single villain, and it rarely makes a good headline. It is, however, more likely to lead to useful action, because it implies that no one ban or treatment is likely to solve the problem on its own.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the colonies affected by the disorder ----.',
        options: [
          'still held food but had lost most of their grown worker bees',
          'were surrounded by the bodies of very large numbers of dead bees',
          'had been visibly weak and sick for a good many months beforehand',
          'had lost their queen some time before the workers disappeared',
          'were found only on farms where neonicotinoids had been used',
        ], answer: 0,
        explain: "Parçaya göre etkilenen kolonilerde bal stokuna dokunulmamıştı, kraliçe ve bazı genç arılar çoğu zaman yerindeydi, ama yetişkin işçilerin çoğu kaybolmuştu. Doğru seçenek bunu 'yiyecek duruyordu ama yetişkin işçilerin çoğu yoktu' diye anlatıyor. Yakında az ölü arı bulunduğu söyleniyor; çok sayıda ölü arı parçayla çelişiyor. Koloniler birkaç hafta önce sağlıklı görünüyordu; aylardır hasta oldukları da çelişiyor. Kraliçe çoğu zaman yerindeydi. Neonikotinoidler yalnız bir zamanlar öne sürülen açıklamalardan biri; bozukluğun yalnız bu ilaçların kullanıldığı çiftliklerde görüldüğü parçada yok." },
      { konu: ['sözcük anlamı'],
        q: "The word 'culprit' in the passage is closest in meaning to ----.",
        options: ['cause', 'remedy', 'victim', 'witness', 'symptom'], answer: 0,
        explain: "'Culprit' suçlu demektir; bir sorundan söz edilirken sorunun sorumlusu, nedeni anlamına gelir. Parçada ilk haberlerin kayıplar için tek bir suçlu aradığı, sonra bir virüsün ve bir ilaç grubunun açıklama diye öne sürüldüğü anlatılıyor; en yakın sözcük 'cause' (neden). 'Victim' (kurban) anlamın tersidir: arılar kurbandır, aranan şey suçlu. 'Symptom' (belirti) sorunun kendini gösterme biçimidir, nedeni değil. 'Remedy' (çare) ve 'witness' (tanık) bağlama uymaz." },
      { konu: ['yazarın tutumu'],
        q: "The author regards the view that several pressures act together as ----.",
        options: [
          'a convenient excuse for scientists who cannot find a clear answer',
          'proof that pesticides play no part at all in the loss of colonies',
          'less striking than a single cause but a better basis for action',
          'too complicated to be of any practical use to ordinary beekeepers',
          'likely to be replaced soon by the discovery of one main cause',
        ], answer: 2,
        explain: "Yazar son paragrafta bu açıklamanın tek bir kötü karakter kadar doyurucu olmadığını ve iyi bir manşet olmadığını kabul ediyor; ama yararlı bir eyleme götürme olasılığının daha yüksek olduğunu söylüyor. Bu, açıklamayı daha az çarpıcı ama eylem için daha iyi bir dayanak sayan tutumdur. Yazar açıklamayı bilim insanlarının bir kaçamağı olarak görmüyor. Böcek ilaçlarını aklamıyor; tersine onları baskılardan biri sayıyor. Açıklamanın pratikte işe yaramadığını da söylemiyor, işe yarar diyor. Yakında tek bir ana nedenin bulunacağı da parçada yok." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that ----.',
        options: [
          'a ban on neonicotinoids would on its own be enough to end colony losses',
          "treating hives for mites alone may not save a beekeeper's colonies",
          'colony collapse disorder has now disappeared from the United States',
          'bees in varied landscapes are completely protected against viruses',
          'journalists were the first to identify the role of the Varroa mite',
        ], answer: 1,
        explain: "Parçaya göre kayıplar birlikte etkili olan birkaç baskının sonucu ve tek bir yasak ya da tedavi sorunu kendi başına çözmeye yetmeyecek. Buradan yalnız akara karşı tedavi uygulayan bir arıcının yine de koloni kaybedebileceği çıkar. Neonikotinoid yasağının yeterli olacağı bu sonuçla çelişiyor. Bozukluğun ABD'de ortadan kalktığı parçada yok. Çeşitli beslenme arıları hastalığa daha dayanıklı yapabilir, ama virüslere karşı tümüyle korunmuş oldukları abartıdır. Varroa'nın rolünü ilk gazetecilerin bulduğu da parçada yok." },
    ] },

  // ---------- diyalog ----------
  { id: 'gr-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['sting', 'buzz'],
    level: 'kolay', cefr: 'B1', konu: ['bağlam'],
    q: "Ece: Ow! Something just stung me on the arm!\nMert: Let me see. Yes, it looks like a bee sting. Is it very painful?\nEce: ----\nMert: OK, I'll get some ice from the cool box. Hold it on the spot for a few minutes.",
    options: [
      "Not really. I've almost forgotten about it already.",
      "I didn't see it, but I heard something buzzing.",
      'Yes, quite. And the skin around it is going red now.',
      "Let's move our blanket a bit nearer to the lake.",
      'I think I left the sandwiches at home this time.',
    ], answer: 2,
    explain: "Mert sokmanın çok acıyıp acımadığını soruyor; ardından buz getirip sokulan yere tutmasını öneriyor. Arada Ece'nin acıdığını söylemesi gerekir: 'Evet, epey. Çevresindeki deri de kızarıyor.' Acımadığını, neredeyse unuttuğunu söylemek buz önerisini anlamsız kılar. Arıyı görmediğini ama vızıltı duyduğunu söylemek Mert'in sorusunu cevaplamıyor. Battaniyeyi göle yaklaştırma önerisi ve sandviçlerin evde unutulması da sokmayla ve buzla ilgili değil." },

  { id: 'gr-d2', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['beekeeper', 'swarm', 'head for'],
    level: 'orta', cefr: 'B2', konu: ['soru-cevap uyumu'],
    q: "Visitor: Look at all those bees hanging from that branch like a big brown ball. Is something wrong?\nBeekeeper: ----\nVisitor: So where are they going to live now?\nBeekeeper: Some of them are out looking for a new place. If I'm quick, I can put them in an empty box before they head for the woods.",
    options: [
      "Not really. They're only resting there after a long, hot day.",
      "Not at all. It's a swarm that has just left one of my hives.",
      "Yes, I'm afraid so. I think a bird has been eating some of them.",
      "No. They're collecting nectar from the blossom on that tree.",
      "Yes. They're angry because I opened their hive this morning.",
    ], answer: 1,
    explain: "Ziyaretçinin bir sonraki sorusu ('Peki şimdi nerede yaşayacaklar?') arıların evlerini bırakmış olduğunu varsayıyor. Bunu arıcının 'Hayır, bir şey yok. Kovanlarımdan birinden az önce çıkmış bir oğul bu.' cevabı sağlar; arıcının son sözü de yeni yer arayışını anlatıyor. Sıcak bir günden sonra dalda dinlendiklerini, ağacın çiçeğinden nektar topladıklarını ya da kovan açıldığı için kızgın olduklarını söyleyen cevaplarda arılar evlerini bırakmamış; ziyaretçinin sorusu anlamsız kalır. Bir kuşun bazı arıları yediğini söylemek de arıların yeni bir yuvaya ihtiyacını açıklamaz." },

  { id: 'gr-d3', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['vibrant'],
    level: 'orta', cefr: 'B2', konu: ['bağlam'],
    q: "Selin: Your balcony looks so vibrant this year! What are all those purple flowers?\nBurak: Lavender. I'd read that bees love it, so I bought a few pots in the spring.\nSelin: ----\nBurak: Not at all. They're far too busy with the flowers to take any notice of me.",
    options: [
      'Did you grow them all from seed, or were they already in flower?',
      "Isn't it a bit risky to sit out there with so many bees around?",
      'How long does lavender usually take to come into flower?',
      'Could you tell me which shop you bought the pots from?',
      'Do they need a lot of water when the weather gets hot?',
    ], answer: 1,
    explain: "Burak'ın son sözü ('Hiç de değil. Çiçeklerle uğraşmaktan beni fark etmiyorlar bile.') arılar hakkında bir kaygıya verilmiş cevap; 'they' arılardır. Selin'in sorusu bu yüzden çok sayıda arının arasında balkonda oturmanın riskli olup olmadığıdır. Tohumdan mı yetiştirdiği ve hangi dükkândan aldığı sorularına 'Not at all' cevabı uymaz; ayrıca konuşmanın başında saksıları aldığını söylemişti. Lavantanın ne kadar sürede çiçek açtığı sorusu 'Hiç de değil' ile cevaplanmaz. Sıcakta çok su isteyip istemedikleri sorusunda 'they' bitkileri gösterir; bitkiler kimseyi fark etmez." },

  // ---------- anlamca en yakın cümle ----------
  { id: 'gr-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: 'Our new hive produced far less honey than the old one, even though it had more bees.',
    options: [
      'The new hive had more bees, so it produced more honey than the old one did.',
      'The two hives had the same number of bees and made about the same honey.',
      'The old hive had fewer bees but produced much more honey than the new one did.',
      'The new hive had fewer bees than the old one and so produced less honey.',
      'The old hive had more bees than the new one but made a little less honey.',
    ], answer: 2,
    explain: "Verilen cümleye göre yeni kovanda daha çok arı vardı ama çok daha az bal verdi. Aynı durum eski kovan açısından da anlatılabilir: eski kovanda daha az arı vardı ama yeni kovandan çok daha fazla bal verdi. Yeni kovanın daha çok bal verdiğini söyleyen seçenek karşılaştırmayı tersine çeviriyor. İki kovanın eşit olduğu cümlede yok. Yeni kovanda daha az arı olduğunu söyleyen seçenek arı sayısını tersine çeviriyor ve 'even though' karşıtlığını bir neden-sonuca dönüştürüyor. Eski kovanda daha çok arı olup biraz daha az bal verdiğini söyleyen seçenek ise iki karşılaştırmayı da ters kuruyor." },

  { id: 'gr-y2', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: ['nectar'],
    level: 'zor', cefr: 'C1', konu: ['olumsuzluk', 'kapsam'],
    q: 'Not every flower that a bee visits offers it nectar; some provide only pollen.',
    options: [
      'None of the flowers that bees visit provide them with any nectar at all.',
      'Every flower that a bee visits gives it both nectar and some pollen.',
      'Bees visit only those flowers that give them nectar rather than pollen.',
      'Some of the flowers that bees go to give them pollen but no nectar.',
      'Most of the flowers that bees go to supply nectar but not any pollen.',
    ], answer: 3,
    explain: "'Not every' (her … değil) kapsamı daraltır: arının uğradığı çiçeklerin hepsi nektar vermez; bazıları yalnız polen verir. Bu, bazı çiçeklerin polen verip nektar vermediği anlamına gelir. 'None' (hiçbiri) olumsuzluğu bütün çiçeklere yayar; kapsam aşırı genişler. Her çiçeğin hem nektar hem polen verdiğini söyleyen seçenek olumsuzluğu kaldırıyor. Arıların yalnız nektar veren çiçeklere uğradığı da cümleyle çelişiyor. Çiçeklerin çoğunun polen vermediği ise verilen cümlede hiç yok." },

  // ---------- paragraf tamamlama ----------
  { id: 'gr-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['nectar'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'Bees do not see the world in quite the same way as we do. ----. As a result, a flower that looks plain yellow or white to us may appear to a bee to have dark lines or a bright centre that guide it to the nectar.',
    options: [
      'Their eyes can detect ultraviolet light, which the human eye cannot see at all',
      'Some flowers close their petals at night and open them again at sunrise',
      'Bees can also recognise the scent of flowers that they have visited before',
      'Many gardeners grow yellow and white flowers because bees seem to like them',
      'They are thought to have difficulty in telling red apart from darker colours',
    ], answer: 0,
    explain: "Boşluktan sonraki cümle 'As a result' ile bir sonuç bildiriyor: bize düz sarı ya da beyaz görünen bir çiçek, arıya nektara götüren çizgiler ya da parlak bir merkez taşıyormuş gibi görünebilir. Demek ki boşluğa, arının bizim göremediğimiz bir şeyi görmesini sağlayan bir neden gelmeli: gözleri insan gözünün hiç göremediği morötesi ışığı algılayabilir. Arıların kırmızıyı ayırt etmekte zorlandığı da arının görüşüyle ilgili ama bir yeteneği değil bir eksikliği anlatıyor; bizim görmediğimiz desenleri açıklamaz. Çiçeklerin geceleri kapanması, arıların kokuyu tanıması ve bahçıvanların sarı ve beyaz çiçek yetiştirmesi görmedeki farka bağlanmıyor." },

  { id: 'gr-p2', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['pesticide'],
    level: 'zor', cefr: 'C1', konu: ['gönderim'],
    q: 'In 2018, the European Union banned the outdoor use of three neonicotinoid pesticides, chemicals that had been suspected of harming bees. ----. They argued that without these products they would have to go back to older sprays, which might do even more damage.',
    options: [
      'Such chemicals are taken up by the whole plant, including its pollen and nectar',
      'Many beekeepers had been calling for this step for a number of years',
      'Bees are far from the only insects that visit the flowers of treated crops',
      'The decision was welcomed by conservation groups but opposed by some farmers',
      'Researchers in several countries had studied their effects on bee colonies',
    ], answer: 3,
    explain: "Boşluktan sonraki cümle 'They argued' (… diye savundular) diye başlıyor ve bu kişilerin o ürünler olmadan eski ilaçlara dönmek zorunda kalacaklarını söylüyor. Ürünü tarlada kullanan ve karara karşı çıkan biri olmalı: çiftçiler. Kararın doğa koruma gruplarınca sevinçle karşılandığını ama bazı çiftçilerce karşı çıkıldığını söyleyen cümle 'They' için bu kişileri tanıtır. Arıcılar da kişidir ama yasağı isteyen taraftır ve tarlaya ilaç atmazlar; eski ilaçlara dönme kaygısı onlara uymaz. Araştırmacılar da ilaç kullanmaz. Kimyasallar ve böcekler bir şey savunamaz." },

  // ---------- akışı bozan cümle ----------
  { id: 'gr-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['collectively'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'When people talk about bees, they usually mean the honeybee, but it is only one of a very large number of bee species.',
      'Scientists estimate that there are about 20,000 species of bee around the world, and new ones are still being described.',
      'Most of them do not live in colonies at all; instead, each female builds and stocks a small nest of her own.',
      'Honey has been used for thousands of years, not only as a food but also as a way of treating wounds.',
      'Collectively, these lesser-known bees are thought to pollinate a great many plants, even though very few of them make any honey.',
    ], answer: 3,
    explain: "Parça bal arısı dışındaki arıları anlatıyor: bal arısı pek çok türden yalnız biri (I), dünyada yaklaşık 20.000 tür olduğu tahmin ediliyor (II), çoğu koloni kurmadan yaşıyor (III) ve bu az bilinen arılar hep birlikte pek çok bitkiyi tozlaştırıyor (V). IV. cümle balın tarih boyunca besin ve yara tedavisi için kullanılmasına geçiyor; az bilinen arı türleri konusundan kopuyor. V'teki bal sözü bu cümleyi bağlı gibi gösterse de V, bu arıların çoğunun bal yapmadığını söyleyerek III'ün akışını sürdürüyor." },

  { id: 'gr-b2', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['nectar'],
    level: 'kolay', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Honey begins as nectar, a sugary liquid that bees collect from flowers.',
      'A worker bee stores the nectar in a special stomach and carries it back to the hive.',
      'There, it is passed on to other bees, who place it in the small wax cells of the comb.',
      'The bees then fan it with their wings until much of the water has gone and the liquid has become thick.',
      'Bees also gather pollen, which they carry home in small baskets on their back legs.',
    ], answer: 4,
    explain: "Parça nektarın bala dönüşmesini adım adım anlatıyor: bal nektar olarak başlar (I), işçi arı nektarı özel bir midede kovana taşır (II), orada başka arılara aktarılır ve petek gözlerine konur (III), arılar kanatlarıyla yelleyip suyunu azaltır ve sıvı koyulaşır (IV). V. cümle de arıların topladığı bir şeyden söz ediyor ama nektardan polene geçiyor; balın yapılışı konusundan kopuyor." },
];

export default { id: 'genel-ari', course: C, title: U, order: 11, cards, items };
