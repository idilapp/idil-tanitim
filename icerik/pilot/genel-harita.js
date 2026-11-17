// iDil › Genel › Haritalar ve dünyayı görme biçimimiz.
// Tümü özgün: Claude yazdı (17 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (çoğaltma 4. tur planı §7.5 ve yerleşik bilgi; yalnız olgular, metin özgün). Her olgu tek öğede:
// - Klaudios Ptolemaios (Batlamyus), 2. yüzyıl, İskenderiye; Geographia'da binlerce yeri enlem ve boylamla verdi, birçok
//   değeri yanlıştı (özellikle uzak bölgeler). Eserin 15. yüzyılın başında Bizans'tan İtalya'ya ulaşıp Latinceye çevrildiği
//   temkinli yazıldı ("is thought to") (gh-z1);
// - Piri Reis haritası: 1513, ceylan derisi; 1929'da Topkapı Sarayı'nda bulundu; korunan parça Avrupa ve Afrika'nın Atlas
//   kıyılarıyla Güney Amerika'nın doğu kıyısını gösterir; Piri Reis notlarında Kolomb'un bir haritası dahil eski haritaları
//   birleştirdiğini yazar. Piri Reis'in andığı Kolomb haritasının bugüne ulaşmadığı yerleşik bilgi, temkinli ("is not known
//   to survive"). Kolomb'un ilk Atlas geçişinden (1492) "about two decades" sonra: yerleşik bilgi. Haritayla ilgili aşırı
//   iddialar adsız ve genel anıldı (gh-o1);
// - Kitab-ı Bahriye: 1521, genişletilmiş hâli 1526; Akdeniz kıyıları için denizcilik kılavuzu (gh-p1);
// - Mercator, 1569, Flaman coğrafyacı; sabit pusula rotası düz çizgi; boylamlar paralel, ekvatordan uzaklaştıkça bölgeler
//   gerilir. Arno Peters (Alman tarihçi) 1973'te alanları doğru oranda gösteren izdüşümünü tanıttı; eleştirmenler şekilleri
//   bozduğunu ve İskoç din adamı James Gall'ın 1855'teki izdüşümüne çok benzediğini söyledi. Çevrim içi haritaların çoğunun
//   Mercator'un bir türevini kullanması (Web Mercator) yerleşik bilgi, temkinli ("many", "largely because") (gh-o2);
// - Grönland Mercator haritasında Afrika kadar görünür; Afrika yaklaşık 14 kat büyüktür (30,4 ve 2,2 milyon km²). Diyalogda
//   "roughly fourteen times", Mercator adı geçmeden (gh-d2);
// - kürenin yüzeyi düz kâğıda bozulmadan aktarılamaz; alan, şekil, uzaklık ya da yön (gh-p2);
// - kuzeyin yukarıda olması gelenek; el-İdrisi'nin 1154 dünya haritasında güney yukarıda (gh-b2);
// - GPS: alıcı birkaç uydunun sinyalinin ulaşma süresinden uzaklık ve konum hesaplar; yüksek binalar arasında sinyal
//   engellenir ya da yansır (genel, tarih yok) (gh-b1);
// - Avrupa'dan Hindistan'a deniz yolunun eskiden Afrika'nın güney ucunu dolaşması (yerleşik bilgi; gh-k2);
// - Greenwich'in sıfır boylamında olması (yerleşik bilgi; longitude kartının örneği).

const T = 'taslak';
const C = 'genel';
const U = 'Haritalar ve dünyayı görme biçimimiz';

const cards = [
  // ---------- isim ----------
  { code: 'projection', title: '(harita) izdüşümü; (gelecek için) tahmin', pos: 'isim', cefr: 'C1', ipa: '/prəˈdʒekʃn/',
    text: "Haritacılıkta, kürenin yüzeyini düz bir kâğıda aktarma yöntemi: a map projection (harita izdüşümü). Her yöntemin kendine göre bir adı olur: the Mercator projection. Ekonomi metinlerinde 'tahmin' anlamına da gelir: sales projections (satış tahminleri). Fiili 'project' (izdüşürmek; tahmin etmek).",
    example: 'The atlas opens with a short note explaining which projection was chosen for each of its maps.',
    exampleTr: 'Atlas, haritalarının her biri için hangi izdüşümünün seçildiğini açıklayan kısa bir notla başlıyor.',
    synonyms: ['forecast', 'estimate'], family: ['project'] },
  { code: 'latitude', title: 'enlem', pos: 'isim', cefr: 'C1', ipa: '/ˈlætɪtjuːd/',
    text: "Bir yerin ekvatorun ne kadar kuzeyinde ya da güneyinde olduğunu gösteren derece: at a latitude of 40 degrees north. Çoğulu 'latitudes' bir bölgeyi de anlatır: northern latitudes (kuzey enlemleri). 'Longitude' (boylam) ile karıştırılmamalı.",
    example: 'Two towns at the same latitude can have very different winters, depending on how close they are to the sea.',
    exampleTr: 'Aynı enlemdeki iki kasabanın kışları, denize ne kadar yakın olduklarına bağlı olarak çok farklı olabilir.',
    synonyms: ['parallel'], family: ['latitudinal'] },
  { code: 'longitude', title: 'boylam', pos: 'isim', cefr: 'C1', ipa: '/ˈlɒŋɡɪtjuːd/',
    text: "Bir yerin başlangıç boylamının ne kadar doğusunda ya da batısında olduğunu gösteren derece. Enlemle birlikte bir yerin konumunu verir: latitude and longitude (enlem ve boylam). Sıfatı 'longitudinal'; bilimde 'longitudinal study' (aynı kişileri uzun süre izleyen çalışma) diye de geçer.",
    example: 'Greenwich, in south-east London, lies at a longitude of zero degrees.',
    exampleTr: "Londra'nın güneydoğusundaki Greenwich sıfır derece boylamında bulunur.",
    synonyms: ['meridian'], family: ['longitudinal'] },
  { code: 'voyage', title: '(özellikle denizde ya da uzayda) uzun yolculuk, sefer', pos: 'isim', cefr: 'B2', ipa: '/ˈvɔɪɪdʒ/',
    text: "Uzun ve çoğu zaman zorlu bir yolculuk, en çok deniz ya da uzay yolculuğu: a voyage of discovery (keşif seferi). Kısa bir gezi için 'trip' denir. Fiil olarak da kullanılır ama seyrektir. Yolculuğa çıkan kişi 'voyager'.",
    example: 'In bad weather, the voyage from the island to the mainland could take three whole days.',
    exampleTr: 'Kötü havada adadan anakaraya yolculuk tam üç gün sürebiliyordu.',
    synonyms: ['journey', 'expedition'], family: ['voyager'] },
  { code: 'compass', title: 'pusula', pos: 'isim', cefr: 'B2', ipa: '/ˈkʌmpəs/',
    text: "İğnesi her zaman kuzeyi gösteren yön bulma aracı: a compass needle (pusula iğnesi), a compass bearing (pusula yönü, rota açısı). Geometride daire çizmeye yarayan 'pergel' için de 'a pair of compasses' denir.",
    example: 'When the fog came down, we had to rely on a compass to find our way back to the hut.',
    exampleTr: 'Sis çökünce kulübeye dönüş yolunu bulmak için bir pusulaya güvenmek zorunda kaldık.',
    synonyms: ['direction finder'], family: [] },
  { code: 'cartographer', title: 'haritacı, harita çizen kişi', pos: 'isim', cefr: 'C1', ipa: '/kɑːˈtɒɡrəfə/',
    text: "Harita çizen ya da hazırlayan uzman. Günlük dilde 'mapmaker' de denir. Haritacılık bilimi 'cartography', sıfatı 'cartographic' (haritacılıkla ilgili).",
    example: 'The cartographer spent weeks checking the spelling of every village name before the new edition was printed.',
    exampleTr: 'Haritacı, yeni baskı basılmadan önce her köy adının yazılışını haftalarca denetledi.',
    synonyms: ['mapmaker'], family: ['cartography', 'cartographic'] },
  { code: 'territory', title: '(bir devlete ait) toprak, ülke toprağı; bölge, alan', pos: 'isim', cefr: 'B2', ipa: '/ˈterətri/',
    text: "Bir devletin ya da bir kişinin, hayvanın denetimindeki alan: national territory, a wolf's territory. Mecaz olarak bir bilgi ya da deneyim alanı da olur: unfamiliar territory, uncharted territory (bilinmeyen alan). Sıfatı 'territorial' (toprakla ilgili).",
    example: 'For centuries, the two countries argued over a small strip of territory along the river.',
    exampleTr: 'İki ülke, nehir boyundaki küçük bir toprak şeridi için yüzyıllarca anlaşmazlık yaşadı.',
    synonyms: ['land', 'region'], family: ['territorial'] },
  // ---------- fiil ----------
  { code: 'sail', title: '(gemi) denizde yol almak; yelkenliyle gitmek', pos: 'fiil', cefr: 'B1', ipa: '/seɪl/',
    text: "Bir geminin ya da teknenin suda yol alması, ya da birinin gemiyle bir yere gitmesi: sail across the Atlantic, sail into the harbour. Yalnız yelkenli için değil, büyük gemiler için de kullanılır. Gemici 'sailor', yelkencilik 'sailing'. İsim olarak 'yelken' demektir.",
    example: 'We sailed along the coast for a week, stopping at a different harbour every night.',
    exampleTr: 'Bir hafta boyunca kıyı boyunca yol aldık, her gece başka bir limanda durduk.',
    synonyms: ['navigate', 'cruise'], family: ['sailor', 'sailing'] },
  { code: 'survey', title: '(araziyi) ölçüp haritasını çıkarmak; incelemek; anket yapmak', pos: 'fiil', cefr: 'B2', ipa: '/səˈveɪ/',
    text: "Haritacılıkta bir arazinin biçimini, uzaklıklarını ve yüksekliklerini ölçmek: survey the coast. Genel anlamda bir şeyi baştan sona incelemek ya da insanlara soru sorarak bilgi toplamaktır. İsim olarak vurgu başa kayar: a survey /ˈsɜːveɪ/ (ölçüm; anket). Arazi ölçen kişi 'surveyor'.",
    example: 'Before the new road could be built, a team of engineers spent a month surveying the land along the river.',
    exampleTr: 'Yeni yol yapılmadan önce bir mühendis ekibi nehir boyundaki araziyi ölçmek için bir ay harcadı.',
    synonyms: ['measure', 'examine'], family: ['surveyor'] },
  { code: 'enlarge', title: 'büyütmek, genişletmek', pos: 'fiil', cefr: 'B2', ipa: '/ɪnˈlɑːdʒ/',
    text: "Bir şeyi daha büyük hâle getirmek: enlarge a photograph (fotoğrafı büyütmek), an enlarged edition (genişletilmiş baskı). Adı 'enlargement'. Gündelik dilde 'make bigger' ile aynı anlamdadır.",
    example: 'I asked the shop to enlarge the old photograph so that we could hang it in the hall.',
    exampleTr: 'Holde asabilmek için dükkândan eski fotoğrafı büyütmelerini istedim.',
    synonyms: ['expand', 'magnify'], family: ['enlargement'] },
  { code: 'portray', title: 'tasvir etmek, (belli bir biçimde) göstermek, betimlemek', pos: 'fiil', cefr: 'C1', ipa: '/pɔːˈtreɪ/',
    text: "Bir kişiyi, yeri ya da olayı resimde, yazıda ya da filmde belli bir biçimde göstermek: portray someone as a hero (birini kahraman olarak göstermek). Çoğu zaman 'as' ile kullanılır. Adı 'portrayal' (tasvir).",
    example: 'The film portrays the explorer as a hero, but his own letters tell a far less flattering story.',
    exampleTr: 'Film kâşifi bir kahraman olarak gösteriyor ama kendi mektupları çok daha az övücü bir hikâye anlatıyor.',
    synonyms: ['depict', 'represent'], family: ['portrayal'] },
  { code: 'stretch', title: 'germek, esnetmek; gerilip uzamak', pos: 'fiil', cefr: 'B2', ipa: '/stretʃ/',
    text: "Bir şeyi çekerek uzatmak ya da genişletmek; bir şeyin çekilince uzaması: stretch a rubber band. Mecaz anlamları da var: stretch the truth (gerçeği abartmak), stretch a budget (bütçeyi zorlamak). İsim olarak 'bir uzanım, bir parça' demektir: a stretch of coast (kıyının bir bölümü).",
    example: 'If you stretch a rubber band too far, it will eventually snap.',
    exampleTr: 'Bir lastik bandı fazla gerersen sonunda kopar.',
    synonyms: ['extend', 'pull'], family: [] },
  // ---------- sıfat ----------
  { code: 'misleading', title: 'yanıltıcı', pos: 'sıfat', cefr: 'B2', ipa: '/ˌmɪsˈliːdɪŋ/',
    text: "Yanlış bir izlenim bırakan, insanı yanlış bir sonuca götüren: misleading information, a misleading headline. Bir şeyin yalan olması gerekmez; doğru bilgiyi eksik ya da çarpık sunması da yanıltıcıdır. Fiili 'mislead' (yanıltmak; düzensiz: misled), zarfı 'misleadingly'.",
    example: "The advert was misleading: the 'free' gift cost almost as much as the product itself.",
    exampleTr: "Reklam yanıltıcıydı: 'bedava' hediye neredeyse ürünün kendisi kadar pahalıya geliyordu.",
    synonyms: ['deceptive', 'confusing'], family: ['mislead', 'misleadingly'] },
  { code: 'spherical', title: 'küre biçiminde, küresel', pos: 'sıfat', cefr: 'C1', ipa: '/ˈsferɪkl/',
    text: "Top gibi yuvarlak, küre biçimli: a spherical object. 'Global' (dünya çapında) ile karıştırılmamalı; 'spherical' yalnız biçimi anlatır. Kökü 'sphere' (küre; alan: sphere of influence).",
    example: 'Raindrops are often drawn as teardrops, but small ones are actually almost spherical.',
    exampleTr: 'Yağmur damlaları çoğu zaman gözyaşı biçiminde çizilir ama küçük damlalar aslında neredeyse küre biçimindedir.',
    synonyms: ['round', 'globular'], family: ['sphere'] },
  { code: 'uncharted', title: 'haritası çıkarılmamış; bilinmeyen, keşfedilmemiş', pos: 'sıfat', cefr: 'C1', ipa: '/ˌʌnˈtʃɑːtɪd/',
    text: "Haritaya geçirilmemiş, haritası yapılmamış: uncharted waters (haritası çıkarılmamış sular). Mecaz olarak daha önce kimsenin denemediği, bilinmeyen bir durum için de kullanılır: in uncharted territory (bilinmeyen bir alanda). 'Chart' (deniz haritası; haritasını çıkarmak) kökünden, olumsuzluk öneki (un-) ve -ed ekiyle türemiştir.",
    example: 'Much of the deep seabed is still uncharted in any real detail.',
    exampleTr: 'Derin deniz tabanının büyük bölümünün hâlâ ayrıntılı bir haritası yok.',
    synonyms: ['unmapped', 'unexplored'], family: [] },
  // ---------- zarf ----------
  { code: 'grossly', title: 'fena hâlde, son derece (olumsuz bir durum için)', pos: 'zarf', cefr: 'C1', ipa: '/ˈɡrəʊsli/',
    text: "Bir hatanın, eksikliğin ya da haksızlığın çok büyük olduğunu vurgular; çoğu zaman olumsuz sıfat ya da fiillerle gelir: grossly unfair, grossly exaggerated, grossly overweight. Olumlu sözcüklerle kullanılmaz. Kökü 'gross' (kaba, apaçık; brüt).",
    example: 'The old bridge was grossly overloaded when the heavy lorry tried to cross it.',
    exampleTr: 'Ağır kamyon geçmeye çalıştığında eski köprü fena hâlde aşırı yüklenmişti.',
    synonyms: ['seriously', 'hugely'], family: ['gross'] },
  // ---------- öbek fiil ----------
  { code: 'map out', title: 'ayrıntılı biçimde planlamak; haritasını çıkarmak', pos: 'öbek fiil', cefr: 'C1', ipa: '/ˌmæp ˈaʊt/',
    text: "Bir yolu, bir planı ya da bir işi adım adım, ayrıntılarıyla belirlemek: map out a route, map out your career. Nesne iki sözcüğün arasına da girebilir: map it out.",
    example: 'Before the trip, we mapped out a route that kept us away from the busiest motorways.',
    exampleTr: 'Yolculuktan önce bizi en kalabalık otoyollardan uzak tutan bir güzergâh belirledik.',
    synonyms: ['plan', 'lay out'], family: [] },
  { code: 'look up', title: '(sözlükte, haritada, internette) bakmak, aramak', pos: 'öbek fiil', cefr: 'B1', ipa: '/ˌlʊk ˈʌp/',
    text: "Bir bilgiyi bir kaynakta aramak: look up a word in a dictionary. Nesne zamir olunca araya girer: look it up. Nesnesiz 'look up' ise 'yukarı bakmak' ya da 'işler düzelmek' (things are looking up) demektir.",
    example: "If you don't know where the town is, look it up in the atlas.",
    exampleTr: 'Kasabanın nerede olduğunu bilmiyorsan atlasa bak.',
    synonyms: ['search for', 'check'], family: [] },
];

const items = [
  // ---------- kelime ----------
  { id: 'gh-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['misleading', 'uncharted'],
    level: 'orta', cefr: 'B2', konu: ['sıfat'],
    q: 'The tourist map we were given at the hotel was rather ----: it made the castle look like a short walk from the station, but it took us almost an hour to get there.',
    options: ['generous', 'uncharted', 'misleading', 'reliable', 'detailed'], answer: 2,
    explain: "Haritada kale istasyondan kısa bir yürüyüş uzaklığında görünüyor, oysa yol neredeyse bir saat sürmüş: harita yanlış bir izlenim bırakmış. Bunu 'misleading' (yanıltıcı) anlatır. 'Uncharted' (haritası çıkarılmamış) bir yerin niteliğidir; bir haritanın kendisi için kullanılmaz. 'Reliable' (güvenilir) ve 'detailed' (ayrıntılı) haritayı övüyor; cümledeki şikâyetle çelişir. 'Generous' (cömert) bir haritanın uzaklıkları yanlış göstermesini anlatmaz." },

  { id: 'gh-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['sail', 'enlarge'],
    level: 'kolay', cefr: 'B1', konu: ['fiil'],
    q: 'In the past, ships travelling from Europe to India had to ---- all the way around the southern tip of Africa.',
    options: ['enlarge', 'borrow', 'arrive', 'remain', 'sail'], answer: 4,
    explain: "Gemilerin Afrika'nın güney ucunu dolaşarak Avrupa'dan Hindistan'a gitmesi anlatılıyor; bir geminin denizde yol alması 'sail' ile söylenir. 'Enlarge' (büyütmek) nesne ister ve yolculuğu anlatmaz. 'Arrive' (varmak) bir yere ulaşmaktır; 'around … tip' ile bir güzergâhı izlemeyi anlatmaz. 'Remain' (kalmak) hareketi, 'borrow' (ödünç almak) ise bağlamı tümden kaçırır." },

  { id: 'gh-k3', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['grossly', 'survey'],
    level: 'zor', cefr: 'C1', konu: ['zarf'],
    q: 'Because the valley had been surveyed in a great hurry, the distances on the first edition of the map were ---- inaccurate; some farms appeared several kilometres from their real position and had to be moved in the next edition.',
    options: ['grossly', 'irreversibly', 'slightly', 'politely', 'evenly'], answer: 0,
    explain: "Bazı çiftlikler gerçek yerlerinden kilometrelerce uzakta görünüyor: hata çok büyük. Olumsuz bir sıfatı (inaccurate) 'fena hâlde, son derece' diye güçlendiren zarf 'grossly'. 'Slightly' (biraz) hatayı küçültür; kilometrelerce kaymayla çelişir. 'Irreversibly' (geri dönülmez biçimde) cümlenin sonuyla çelişir: hatalar bir sonraki baskıda düzeltilmiş. 'Politely' (kibarca) ve 'evenly' (eşit biçimde) 'inaccurate' sözcüğünü anlamlı biçimde nitelemez." },

  // ---------- dil bilgisi ----------
  { id: 'gh-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['eşleşik bağlaç'],
    q: 'Far out on the open ocean, early seafarers had ---- landmarks to guide them ---- any reliable way of measuring how far east or west they had travelled, so they depended on the sun and the stars.',
    options: ['both / and', 'neither / nor', 'either / or', 'whether / or', 'more / than'], answer: 1,
    explain: "Cümlenin sonu denizcilerin güneşe ve yıldızlara bağımlı olduğunu söylüyor; demek ki ne yol gösterecek bir işaretleri ne de doğu-batı yönünde ne kadar yol aldıklarını ölçecek güvenilir bir yolları vardı. İki şeyi birlikte olumsuzlayan yapı 'neither … nor'. 'Both … and' ikisinin de var olduğunu söyler; 'so they depended on the sun' sonucuyla çelişir. 'Either … or' ikisinden birinin var olduğunu söyler; hem anlam tutmaz hem de 'any' olumlu cümlede yerinde durmaz. 'More … than' işaretlerle ölçme yolunu anlamsız biçimde karşılaştırır. 'Whether … or' ise 'had' fiilinin nesnesi olamaz." },

  { id: 'gh-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['zaman'],
    q: 'When I was a child, my family ---- to the same island every summer, and one year, while we ---- along its coast by boat, we saw a group of dolphins.',
    options: ['have travelled / travel', 'travel / have travelled', 'will travel / are travelling', 'was travelling / used to travel', 'used to travel / were travelling'], answer: 4,
    explain: "İlk boşluk çocuklukta her yaz tekrarlanan bir alışkanlığı anlatıyor: 'used to travel'. İkinci boşluk, yunusları gördükleri anda sürmekte olan bir eylem: 'while' ile geçmişte süren eylem 'were travelling'. Ters sıralanan seçenek her yaz tekrarlanan alışkanlığı sürmekte olan tek bir eyleme, yunusların görüldüğü andaki eylemi de alışkanlığa çeviriyor; 'while' ile 'used to' birlikte o anı anlatamaz. Geniş zaman, 'have travelled' ve 'will travel' ise 'When I was a child' ile başlayan geçmiş zaman çerçevesine uymaz." },

  { id: 'gh-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['cartographer'],
    level: 'zor', cefr: 'C1', konu: ['devrik koşul cümlesi'],
    q: '---- the cartographer ---- the coastline more carefully, the error would have been noticed before the map was printed.',
    options: ['Should / check', 'Were / to check', 'If / checks', 'Unless / had checked', 'Had / checked'], answer: 4,
    explain: "Ana cümle 'would have been noticed' ile geçmişte gerçekleşmemiş bir sonucu anlatıyor; koşul da geçmişte olmamış bir durum olmalı: haritacı kıyıyı daha dikkatli denetlemiş olsaydı. 'If' atılıp 'had' başa alınınca devrik yapı kurulur: 'Had the cartographer checked'. 'Should … check' ve 'Were … to check' de devrik koşuldur ama şimdiyi ya da geleceği anlatır; 'would have been' ile uyuşmaz. 'If … checks' gerçek koşuldur, yine zaman uyuşmaz. 'Unless … had checked' zaman açısından uyar ama anlamı ters çevirir: dikkatli denetlemeseydi hata fark edilirdi demek olur." },

  // ---------- boşluklu metin ----------
  { id: 'gh-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: ['latitude', 'longitude', 'territory'],
    level: 'orta', cefr: 'B2', title: "İskenderiye'den bir koordinat listesi",
    text: "In the second century AD, the scholar Claudius Ptolemy, who worked in Alexandria, produced a work known as the Geography. Instead of simply describing places in words, as many earlier writers (1) ----, he listed thousands of locations together with their latitude and longitude, so that a reader could, in principle, draw the map for himself. Many of his figures were inaccurate, especially for distant regions, but the (2) ---- itself was remarkably modern. (3) ---- many centuries, however, the work was hardly known in Western Europe. Around the beginning of the fifteenth century, Greek copies of it are thought to have been brought from the Byzantine world to Italy, where it (4) ---- into Latin and copied again and again. (5) ----, Ptolemy's coordinates shaped the way European mapmakers pictured the world at the very moment when their ships were beginning to explore distant coasts.",
    steps: [
      { konu: ['zaman'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['will have done', 'had done', 'will do', 'are doing', 'do'], answer: 1,
        explain: "'Earlier writers' Batlamyus'tan önce yaşamış yazarlar; onların yerleri sözle anlatması, Batlamyus'un eserinden de önce olmuş bir eylem. Geçmişteki bir eylemden önce olanı 'had done' (past perfect) anlatır. 'Do' ve 'are doing' eylemi şimdiye, 'will do' ve 'will have done' ise geleceğe taşır; yüzyıllar önce yaşamış yazarlar için hiçbiri uymaz." },
      { konu: ['kelime', 'isim'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['territory', 'voyage', 'reward', 'debate', 'method'], answer: 4,
        explain: "Cümle Batlamyus'un sayılarının çoğu zaman yanlış olduğunu ama yaptığı şeyin, yani yerleri enlem ve boylamla listeleme yolunun çok çağdaş olduğunu söylüyor: 'method' (yöntem). 'Territory' (toprak, bölge) haritacılıkla ilgili görünse de 'çağdaş olan' bir yol ya da yaklaşım değildir. 'Voyage' (yolculuk), 'reward' (ödül) ve 'debate' (tartışma) parçada anlatılan işi karşılamaz." },
      { konu: ['edat'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['Since', 'Despite', 'For', 'Within', 'Beyond'], answer: 2,
        explain: "Eserin Batı Avrupa'da uzun bir süre boyunca pek bilinmediği anlatılıyor; bir sürenin uzunluğu 'for' ile verilir: 'for many centuries'. 'Since' bir başlangıç noktası ister (since the second century), süre almaz. 'Despite' (-e rağmen) yüzyılları bilinmemeye bir engel gibi gösterir; anlam tutmaz. 'Within' (… içinde) ve 'Beyond' (… ötesinde) cümleye 'yüzyıllar boyunca' anlamını vermez." },
      { konu: ['edilgen'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['translated', 'has translated', 'had translated', 'was translating', 'was translated'], answer: 4,
        explain: "'It' eseri gösteriyor; eser kimseyi çevirmez, çevrilen şeydir. Bu yüzden edilgen gerekir; olay geçmişte olduğu için 'was translated'. 'Translated', 'has translated', 'had translated' ve 'was translating' etken yapılardır ve eseri çeviriyi yapan yapar. 'Has translated' ayrıca 15. yüzyıldaki bir olayı şimdiye bağlar." },
      { konu: ['bağlantı zarfı'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['Nevertheless', 'In contrast', 'For instance', 'Otherwise', 'As a result'], answer: 4,
        explain: "Önceki cümle eserin Latinceye çevrilip tekrar tekrar kopyalandığını söylüyor; boşluklu cümle bunun sonucunu veriyor: Batlamyus'un koordinatları Avrupalı haritacıların dünyayı nasıl canlandırdığını biçimlendirdi. Sonuç bildiren bağlantı 'As a result'. 'Nevertheless' (yine de) ve 'In contrast' (buna karşılık) bir karşıtlık bekler; yaygınlaşmayla etkili olmak arasında karşıtlık yok. 'For instance' (örneğin) bir örnek, 'Otherwise' (aksi hâlde) bir koşul kurar." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'gh-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'My phone can show me the quickest route to almost anywhere in the city, ----.',
    options: [
      'yet I still get lost whenever its battery runs out in the middle of a trip',
      'although it is able to find the fastest way to any address that I type in',
      'because I always forget where I have parked my car by the end of the day',
      'unless I have printed the whole route out on paper before I leave home',
      'even though the maps on it are updated automatically every few weeks',
    ], answer: 0,
    explain: "Ana cümle telefonun neredeyse her yere en kısa yolu gösterebildiğini söylüyor. Buna rağmen süren bir sorun karşıtlığı anlamlı kurar: pil yolun ortasında bitince yine kayboluyorum. 'Although' ile kurulan seçenek karşıtlık bağlacı taşıyor ama ana cümleyle aynı şeyi tekrarlıyor; karşıtlık yok. Haritaların otomatik güncellenmesi de 'even though' ile karşıtlık kurulacak bir durum değil, telefonun bir üstünlüğüdür. Arabanın park yerini unutmak telefonun yol göstermesinin nedeni olamaz. Rotayı kâğıda basmadıkça telefonun yol gösterebilmesi de anlamsız bir koşuldur." },

  { id: 'gh-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['zaman'],
    q: '----, we had already walked about five kilometres in the wrong direction.',
    options: [
      'As soon as we leave the station tomorrow morning',
      'By the time we looked at the map again',
      'Before we set off from the hotel that morning',
      'Whenever we go walking in the hills in spring',
      "While we are planning next summer's holiday",
    ], answer: 1,
    explain: "Ana cümle past perfect ('had already walked'): geçmişteki bir andan önce tamamlanmış bir eylem. O an boşluğa gelir: haritaya yeniden baktığımızda beş kilometre kadar yanlış yöne yürümüştük. 'Before we set off' zaman açısından uyar ama anlamı bozar: yola çıkmadan önce beş kilometre yürünmüş olamaz. 'As soon as we leave … tomorrow' geleceği, 'While we are planning' şimdiyi anlatır; past perfect ile uyuşmaz. 'Whenever we go' ise bir alışkanlık bildirir; tek bir geçmiş olaya bağlanmaz." },

  { id: 'gh-t3', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['map out'],
    level: 'orta', cefr: 'B2', konu: ['amaç'],
    q: 'Before the expedition set off, its leaders spent weeks mapping out a safe route along the coast ----.',
    options: [
      'because the whole route had already been checked by everyone in the team',
      'even though they knew that a good route would help them avoid danger',
      'so that the boats could keep clear of the rocks hidden under the water',
      'in case they had forgotten to pack enough food and water for the trip',
      'so that the boats would be more likely to drift onto the hidden rocks',
    ], answer: 2,
    explain: "Liderler haftalarca kıyı boyunca güvenli bir rota belirlemiş; bunun amacı boşluğa gelir: tekneler su altındaki kayalardan uzak dursun diye. 'So that' ile kurulan öteki seçenek de amaç bağlacı taşıyor ama amacı tersine çeviriyor: kimse teknelerin kayalara sürüklenmesi için güvenli rota çizmez. Rotanın zaten herkesçe denetlenmiş olması haftalarca rota çizmenin nedeni olamaz. İyi bir rotanın tehlikeden koruyacağını bilmek rota çizmeye engel değil, nedenidir; 'even though' yanlış yerde. Yiyecek ve suyu unutma olasılığı da rota çizmekle ilgili değil." },

  { id: 'gh-t4', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['survey', 'territory'],
    level: 'zor', cefr: 'C1', konu: ['karşıtlık'],
    q: '----, the old survey remained the most reliable guide to the territory for several decades.',
    options: [
      'As soon as sailors discovered how many serious errors it contained',
      'Although it had been carried out with only the simplest instruments',
      'Even though its measurements were later confirmed to be very precise',
      'Since nobody who used it had ever fully trusted the figures it gave',
      'Unless a newer and more accurate one had been made in the meantime',
    ], answer: 1,
    explain: "Ana cümle eski ölçümün bölge için onlarca yıl en güvenilir kaynak olarak kaldığını söylüyor. Beklentiye aykırı bir durum 'although' ile anlam kazanır: ölçüm en basit araçlarla yapılmıştı, yine de en güvenilir kaynak olarak kaldı. 'Even though' ile kurulan seçenek de karşıtlık bağlacı taşıyor ama ölçümlerin çok kesin çıkması güvenilir kalmaya aykırı değil, onun nedenidir. Hataların ortaya çıkması ve kimsenin sayılara güvenmemesi ana cümleyle çelişir. 'Unless … had been made' ise gerçekleşmiş bir geçmiş olguya koşul bağlar; anlam kurulmaz." },

  // ---------- çeviri ----------
  { id: 'gh-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['cartographer'],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'The cartographer who made this map had never visited most of the villages that she included on it.',
    options: [
      'Bu haritayı yapan haritacı, haritaya koyduğu köylerin hepsini daha önce ziyaret etmişti.',
      'Bu haritayı yapan haritacı, haritaya koyduğu köylerin birkaçını hiç ziyaret etmemişti.',
      'Bu haritayı yapan haritacı, haritaya koyduğu köylerin çoğunu hiç ziyaret etmemişti.',
      'Bu haritacının hiç ziyaret etmediği köylerin çoğu, onun yaptığı haritada yer almıyordu.',
      'Haritacı, daha önce ziyaret ettiği köylerin çoğunu bu haritaya koymamayı seçmişti.',
    ], answer: 2,
    explain: "Cümlede iki sıfat cümleciği var: 'who made this map' (bu haritayı yapan) haritacıyı, 'that she included on it' (haritaya koyduğu) köyleri niteliyor. 'Had never visited most of' ise 'çoğunu hiç ziyaret etmemişti' demektir. Doğru çeviri bunların hepsini korur. Yanlışlardan biri olumsuzluğu kaldırıp 'çoğu'nu 'hepsi'ne çeviriyor. Biri 'most'u 'birkaç'a indirerek kapsamı daraltıyor. Biri ilişkiyi tersine çevirip ziyaret edilmeyen köylerin haritada olmadığını söylüyor. Biri de ziyaret edilen köylerin bilerek haritaya konmadığını söylüyor; cümlede böyle bir seçim yok." },

  { id: 'gh-c2', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['survey'],
    level: 'zor', cefr: 'C1', konu: ['karşılaştırma'],
    q: 'Satellite surveys are considerably more accurate than the measurements that were once made on foot, although even they are not entirely free of error.',
    options: [
      'Uydu ölçümleri, bir zamanlar yaya olarak yapılan ölçümler kadar doğrudur ve onlar gibi hiçbir hata içermez.',
      'Bir zamanlar yaya olarak yapılan ölçümler uydu ölçümlerinden çok daha doğruydu; yine de onlar da hatasız değildi.',
      'Uydu ölçümleri, eskiden yaya olarak yapılan ölçümlerden biraz daha doğru olsa da onlardan çok daha fazla hata içerir.',
      'Uydu ölçümleri, bir zamanlar yaya olarak yapılan ölçümlerden epeyce daha doğrudur, ancak onlar bile tümüyle hatasız değildir.',
      'Uydu ölçümleri, bir zamanlar yaya olarak yapılan ölçümlerden epeyce daha doğrudur ve bu yüzden hiçbir hata içermez.',
    ], answer: 3,
    explain: "'Considerably more accurate than' 'epeyce daha doğru' demektir; karşılaştırılan iki şey uydu ölçümleri ile eskiden yaya yapılan ölçümler. 'Although even they are not entirely free of error' ise 'onlar bile tümüyle hatasız değildir' diye bir sınır koyar. Doğru çeviri ikisini de korur. Yanlışlardan biri karşılaştırmayı eşitliğe çeviriyor. Biri karşılaştırmanın yönünü tersine çeviriyor. Biri 'considerably'yi 'biraz'a indiriyor ve uydu ölçümlerine daha çok hata yüklüyor. Biri de ilk yarıyı doğru verip ikinci yarıyı 'hiçbir hata içermez' diye ters yüz ediyor." },

  { id: 'gh-c3', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['edilgen'],
    q: 'Bu eski harita yüz yıldan uzun bir süre önce elle çizildi.',
    options: [
      'This old map has been drawn by hand for over a hundred years.',
      'Someone drew this old map by hand less than a hundred years ago.',
      'This old map was drawn by hand more than a hundred years ago.',
      'This old map was copied by hand more than a hundred years ago.',
      'This old map was drawn by a hand that is over a hundred years old.',
    ], answer: 2,
    explain: "Türkçe cümle edilgen ('çizildi') ve geçmişte bitmiş bir olayı anlatıyor; 'yüz yıldan uzun bir süre önce' 'more than a hundred years ago' ile karşılanır. Doğru seçenek 'was drawn by hand' ile bunu verir. 'Has been drawn … for over a hundred years' haritanın yüz yıldır çizilmekte olduğunu söyler; zaman yanlış. 'Less than' süreyi ters çeviriyor. 'Copied' (kopyalandı) çizmekle aynı şey değil. Yüz yaşındaki bir elden söz eden seçenek ise cümleyi anlamsızlaştırıyor." },

  { id: 'gh-c4', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Bölgenin sınırları birkaç kez değiştiğinden okuldaki eski atlas artık güncel değil.',
    options: [
      'Although the borders of the region have changed several times, the old atlas at school is still up to date.',
      'The borders of the region have changed several times since the old atlas at school was last updated.',
      'Unless the borders of the region change again, the old atlas at school will soon be out of date.',
      'As the borders of the region have changed several times, the old atlas at school is no longer up to date.',
      'The old atlas at school is no longer up to date, so the borders of the region have changed several times.',
    ], answer: 3,
    explain: "'-diğinden' bir neden bildirir: sınırların değişmesi atlasın eskimesinin nedenidir. İngilizcede bu 'as' (çünkü) ile kurulur; 'artık güncel değil' de 'no longer up to date' demektir. 'Although' nedeni karşıtlığa çevirip atlası güncel gösteriyor. 'Since' ile kurulan seçenek 'since'i 'beri' anlamında kullanıyor; neden-sonuç ilişkisi kaybolur. 'Unless' bir koşul kurup geleceğe taşıyor. 'So' ile kurulan seçenek ise neden ile sonucu yer değiştiriyor: atlasın eskimesi sınırları değiştirmez." },

  // ---------- okuma parçası 1 (4 soru, YDS biçimi) ----------
  { id: 'gh-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['voyage', 'cartographer'],
    level: 'orta', cefr: 'B2', title: 'Sarayda bulunan bir parça',
    text: "In 1929, part of a world map drawn on gazelle skin was found at the Topkapı Palace in Istanbul. Notes on the map give its date as 1513 and name its maker as Piri Reis, an Ottoman sea captain. Only a fragment has survived. It shows the Atlantic coasts of Europe and Africa on one side and the eastern coast of South America on the other, with an ocean full of islands in between. The map is remarkable for its age, since it was produced only about two decades after Columbus first crossed the Atlantic, but what interests historians most is the way it was put together. Piri Reis did not present it as the record of a single voyage of his own. In notes written on the map itself, he explains that he combined a number of older maps, and he states that one of them had been drawn by Columbus. The Columbus map that he mentions is not known to survive today. Over the years, a few writers have gone much further, claiming that the map reveals knowledge that no one could have had in 1513. Most historians reject such ideas. For them, the map is valuable for a more ordinary reason: it shows how quickly news of the Atlantic crossings spread among seafarers and cartographers, and how a skilled mapmaker could gather scattered reports into one picture at a time when the outline of the Americas was still being pieced together.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the part of the map that has survived ----.',
        options: [
          'was found during repairs to a mosque in Istanbul',
          'shows coastlines that lie on both sides of one ocean',
          'covers the whole world as Piri Reis knew it',
          'was signed by the Ottoman sultan in 1513',
          'includes the western coast of South America',
        ], answer: 1,
        explain: "Parçaya göre korunan bölüm bir yanda Avrupa ve Afrika'nın Atlas kıyılarını, öbür yanda Güney Amerika'nın doğu kıyısını gösteriyor; yani bir okyanusun iki yakasındaki kıyıları. Harita bir camide değil, Topkapı Sarayı'nda bulundu. Yalnız bir parçanın kaldığı söylendiği için bütün dünyayı kapsaması parçayla çelişir. Haritayı sultanın imzaladığı parçada yok; notlar yapımcı olarak Piri Reis'i gösteriyor. Güney Amerika'nın batı değil doğu kıyısı geçiyor; o seçenek ayrıntıyı tersine çeviriyor." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that ----.',
        options: [
          'Piri Reis had personally crossed the Atlantic more than once before 1513',
          'most historians believe the map contains knowledge nobody had at the time',
          'the map was kept on public display in the palace from 1513 until 1929',
          'the fragment may preserve details from a map that has since been lost',
          'Columbus learnt how to draw his own maps by studying the work of Piri Reis',
        ], answer: 3,
        explain: "Piri Reis, birleştirdiği eski haritalardan birinin Kolomb'a ait olduğunu yazıyor; parça ise Piri Reis'in andığı bu Kolomb haritasının bugüne ulaşmadığını söylüyor. Buradan Piri Reis'in haritasının, kaybolmuş bir haritadan alınmış bilgileri taşıyor olabileceği çıkar. Piri Reis'in Atlas'ı bizzat aştığı parçada yok; tersine, haritayı kendi yolculuğunun kaydı olarak sunmadığı söyleniyor. Tarihçilerin çoğu aşırı iddiaları reddediyor; o seçenek parçayı tersine çeviriyor. Haritanın sarayda sergilendiği ve Kolomb'un Piri Reis'ten öğrendiği de parçada yok; ikincisi zaman sırasıyla da çelişir." },
      { konu: ['gönderim'],
        q: "The phrase 'such ideas' in the passage refers to ----.",
        options: [
          'claims that the map holds knowledge impossible for its period',
          'notes that Piri Reis wrote about the maps he had brought together',
          'reports of the Atlantic crossings that reached Mediterranean ports',
          'the view that only a small fragment of the map has survived',
          'plans to display the map in a museum in Istanbul after 1929',
        ], answer: 0,
        explain: "'Most historians reject such ideas' cümlesinden hemen önce bazı yazarların haritanın 1513'te kimsenin sahip olamayacağı bilgileri ortaya koyduğunu iddia ettiği söyleniyor. Tarihçilerin reddettiği 'bu tür fikirler' işte bu iddialardır. Piri Reis'in notları ve haberlerin denizciler arasında yayılması parçada geçiyor ama tarihçiler bunları reddetmiyor; tersine, haritanın değerini bunlarla açıklıyorlar. Haritanın yalnız bir parçasının kaldığı bir görüş değil, olgudur. Haritayı müzede sergileme planı ise parçada yok." },
      { konu: ['ana fikir'],
        q: 'The passage is mainly concerned with ----.',
        options: [
          'what makes a surviving piece of an early map important to historians',
          'how Piri Reis crossed the Atlantic himself and drew its coasts in 1513',
          'why most historians now doubt that the map is really a genuine work',
          'how the Topkapı Palace came to hold so many old documents',
          'the life of Columbus and the maps he drew of the Americas',
        ], answer: 0,
        explain: "Parça, Topkapı'da bulunan haritanın korunan parçasını tanıtıyor ve tarihçilerin onu neden değerli bulduğunu anlatıyor: eski haritaları bir araya getirme biçimi ve haberlerin denizciler arasında nasıl yayıldığını göstermesi. Ana konu budur. Piri Reis'in Atlas'ı aştığı parçada yok. Tarihçilerin haritanın sahte olduğunu düşündüğü de yok; reddettikleri yalnız abartılı iddialar. Sarayın belgeleri ve Kolomb'un hayatı ise parçada yalnız birer ayrıntı olarak geçiyor." },
    ] },

  // ---------- okuma parçası 2 (4 soru, YDS biçimi) ----------
  { id: 'gh-o2', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['projection', 'compass', 'stretch'],
    level: 'zor', cefr: 'C1', title: "1569'dan kalan bir dünya haritası",
    text: "In 1569 the Flemish geographer Gerardus Mercator published a world map intended above all for navigators. Its great strength was a property that sounds technical but mattered enormously at sea: any course that kept to one compass bearing appeared on the map as a straight line. A navigator could therefore draw a line between two ports, measure its angle and hold that heading for the whole journey. This convenience came at a cost. On Mercator's projection, the lines of longitude, which on a globe meet at the poles, run side by side, and regions are stretched more and more the further they lie from the equator. As a result, lands in the far north and south look much larger than they really are. At sea, this hardly mattered. The trouble began when the map moved from the ship's cabin to the classroom wall, where generations of pupils formed their picture of the world from it. In 1973 the German historian Arno Peters presented a projection that showed every region at its true relative size, arguing that Mercator's map had made Europe and North America look more important than the lands near the equator. The debate that followed was lively. Critics replied that Peters's map badly distorted the shapes of continents, and that a very similar projection had been described by the Scottish clergyman James Gall as early as 1855. Mercator's design, meanwhile, has never disappeared: many online maps still use a version of it, largely because it keeps streets and buildings in their true shapes when a user zooms in.",
    steps: [
      { konu: ['ayrıntı'],
        q: "According to the passage, Mercator's map was especially useful to navigators because ----.",
        options: [
          'it showed the shortest possible route between any two ports',
          'it presented every region of the world at its true relative size',
          'a journey on one fixed heading could be drawn with a ruler',
          'its lines of longitude met at the poles, just as on a globe',
          'it was the first map ever to mark lines of longitude',
        ], answer: 2,
        explain: "Parçaya göre haritanın gücü şuydu: tek bir pusula yönünü izleyen her rota haritada düz bir çizgi olarak görünüyordu; denizci iki liman arasına çizgi çekip o açıyla yol alabiliyordu. Doğru seçenek bunu 'tek ve sabit bir yöndeki yolculuk cetvelle çizilebiliyordu' diye anlatıyor. En kısa rotayı gösterdiği parçada yok. Her bölgeyi gerçek oranında göstermek Peters'in haritasının iddiasıdır; Mercator'unki tam tersine uzak bölgeleri büyütüyor. Boylamların kutuplarda birleşmesi küre için söyleniyor; Mercator'un haritasında yan yana uzanıyorlar. Boylam çizgilerini ilk kez kullanan harita olduğu da parçada yok." },
      { konu: ['sözcük anlamı'],
        q: "The word 'property' in the passage is closest in meaning to ----.",
        options: ['possession', 'building', 'measurement', 'feature', 'decision'], answer: 3,
        explain: "'Property' sözcüğünün birkaç anlamı var; parçada haritanın denizde çok işe yarayan bir niteliğini anlatıyor: sabit pusula rotasının düz çizgi olarak görünmesi. Bu anlamda en yakın sözcük 'feature' (özellik). 'Possession' (mülk, sahip olunan şey) ve 'building' (bina) sözcüğün başka bağlamlardaki anlamlarıdır; burada uymaz. 'Measurement' (ölçüm) ve 'decision' (karar) haritanın taşıdığı bir niteliği anlatmaz." },
      { konu: ['yazarın amacı'],
        q: 'The author most probably mentions James Gall in order to ----.',
        options: [
          'prove that Mercator had copied his projection from an earlier map',
          "indicate that Peters's approach was not as original as it seemed",
          "suggest that Peters's map was more accurate than his critics said",
          "explain why navigators preferred Mercator's map to its rivals",
          "give an example of a mapmaker who defended Mercator's design",
        ], answer: 1,
        explain: "James Gall, eleştirmenlerin Peters'e yönelttiği itirazların içinde anılıyor: çok benzer bir izdüşümü Gall daha 1855'te tanımlamıştı. Yazar bu adı, Peters'in yaklaşımının sanıldığı kadar yeni olmadığını göstermek için veriyor. Gall'ın çalışması 1569'dan çok sonra; Mercator'un ondan kopya çektiği söylenemez. Gall eleştirmenlerin kanıtı olarak geçtiği için Peters'i savunmak amacıyla da anılmıyor. Denizcilerin tercihi ve Mercator'u savunan bir haritacı ise Gall'la ilgili değil." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that ----.',
        options: [
          'Peters managed to design a projection that avoided distortion of any kind',
          'a feature that helps one kind of map user may cause problems for another',
          'sixteenth-century navigators were often confused by the size of polar lands',
          'Mercator originally designed his map as a teaching aid for school pupils',
          "online maps rely on Mercator's design because it shows areas correctly",
        ], answer: 1,
        explain: "Parça, düz pusula rotası için yapılan germenin denizde pek sorun olmadığını ama harita sınıf duvarına geçince sorun yarattığını anlatıyor. Buradan, bir harita kullanıcısına yarayan bir özelliğin başka bir kullanıcı için sorun olabileceği çıkar. Peters'in haritası da kıtaların şeklini bozuyordu; hiç bozulma olmadığı parçayla çelişir. Denizcilerin kutup bölgelerinin büyüklüğüne şaşırdığı da çelişir; parça 'denizde bu pek önemli değildi' diyor. Haritanın okullar için tasarlandığı parçanın tersidir: denizciler için yapılmıştı. Çevrim içi haritalar ise alanları değil, sokak ve binaların şeklini doğru tuttuğu için Mercator'u kullanıyor." },
    ] },

  // ---------- diyalog ----------
  { id: 'gh-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['look up'],
    level: 'kolay', cefr: 'B1', konu: ['bağlam'],
    q: "Ece: I think we've gone the wrong way. I don't recognise any of these streets.\nMert: Me neither. Can you look up the museum on your phone?\nEce: ----\nMert: No problem, I'll use mine. Hmm, it says we're about ten minutes away.",
    options: [
      'Sure. It says the museum is just around the corner.',
      'Yes, I already bought our tickets for it online.',
      'Good idea. Shall we stop for a coffee first?',
      'I would, but my battery died about an hour ago.',
      'I think it closes quite early on Sundays.',
    ], answer: 3,
    explain: "Mert 'Sorun değil, benimkini kullanırım' diyor; demek ki Ece kendi telefonunu kullanamıyor. 'Bakardım ama pilim bir saat önce bitti' bu cevabı karşılar. Müzenin hemen köşede olduğunu söyleyen seçenek Ece'nin telefona baktığını gösterir; Mert'in kendi telefonunu kullanmasına gerek kalmaz ve 'on dakika uzaktayız' sözüyle de çelişir. Biletleri internetten almak, kahve önerisi ve müzenin pazar günleri erken kapanması Mert'in 'benimkini kullanırım' cevabına bağlanmıyor." },

  { id: 'gh-d2', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['soru-cevap uyumu'],
    q: "Selin: ----\nMr Aksoy: Not really. It only looks that way on this kind of map. In fact, Africa is roughly fourteen times larger.\nSelin: So I shouldn't trust the sizes on our classroom map?\nMr Aksoy: Not for comparing areas, no. Check them on a globe instead.",
    options: [
      'Is Greenland really as big as Africa?',
      'Why is Greenland coloured white on this map?',
      'How many people live in Greenland these days?',
      'Is Greenland much smaller than it looks here?',
      'Could we use a globe in our next lesson?',
    ], answer: 0,
    explain: "Öğretmen 'Pek değil; yalnız bu tür haritada öyle görünüyor, Afrika aslında yaklaşık on dört kat büyük' diyor. Bu cevap, Grönland'ın gerçekten Afrika kadar büyük olup olmadığını soran soruyu karşılar. Grönland'ın göründüğünden çok daha küçük olup olmadığı sorusuna 'Not really' denirse öğretmen kendi açıklamasıyla çelişir. Gelecek derste küre kullanma sorusu 'pek değil' cevabıyla ve öğretmenin küreye bakmayı önermesiyle uyuşmaz. Grönland'ın beyaz boyanması ve nüfusu soruları 'Not really' ile cevaplanmaz." },

  { id: 'gh-d3', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlam'],
    q: "Customer: How much is the map of the Black Sea coast in the window?\nShopkeeper: That one's quite rare, I'm afraid. It's a little over two hundred years old, so it isn't cheap.\nCustomer: ----\nShopkeeper: Not at all. Here, I'll take it out of the frame so that you can see the detail.",
    options: [
      'Has anyone else asked about it this week?',
      "Then I'll take two of them, if that's all right.",
      'Do you have anything newer at a lower price?',
      'Is it all right if I pay for it by card?',
      'Would you mind if I had a closer look at it?',
    ], answer: 4,
    explain: "Satıcının cevabı 'Not at all' (hiç sakıncası yok) ile başlıyor ve haritayı çerçeveden çıkarıp ayrıntıları gösteriyor; demek ki müşteri haritaya yakından bakmak için izin istemiş. 'Would you mind if …?' sorusu 'Not at all' ile cevaplanır. Kartla ödeme sorusu da bir izin isteği ama 'Is it all right' sorusuna 'Not at all' denmez ve haritayı çerçeveden çıkarmak ödemeyle ilgili değil. Nadir bir haritadan iki tane istemek anlamsız. Daha yeni ve ucuz bir harita sorusu ve başka birinin sorup sormadığı da satıcının cevabına bağlanmıyor." },

  // ---------- anlamca en yakın cümle ----------
  { id: 'gh-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: "None of the other maps in the museum shows the old harbour in anything like as much detail as this one.",
    options: [
      'This map shows the old harbour in far more detail than any other map in the museum.',
      'Several maps in the museum show the old harbour in just as much detail as this one.',
      'This map shows the old harbour in less detail than most of the other maps in the museum.',
      'Only a few maps in the museum show the old harbour, and this one is the least detailed.',
      'The other maps in the museum are more detailed, but none of them shows the old harbour.',
    ], answer: 0,
    explain: "'None of the other maps … in anything like as much detail as this one' öteki haritaların hiçbirinin bu harita kadar, hatta ona yakın bir ayrıntıda bile limanı göstermediğini söyler; yani bu harita limanı çok daha ayrıntılı gösteriyor. Doğru seçenek bunu 'far more detail than any other' ile verir. Birkaç haritanın aynı ayrıntıda gösterdiğini söyleyen seçenek 'none' ile çelişir. Daha az ayrıntı ve en az ayrıntılı olma karşılaştırmayı tersine çevirir. Öteki haritaların limanı hiç göstermediği ise verilen cümlede yok; onlar da limanı gösteriyor, yalnız daha az ayrıntıyla." },

  { id: 'gh-y2', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: ['uncharted'],
    level: 'zor', cefr: 'C1', konu: ['koşul'],
    q: 'But for the old fisherman who agreed to guide them, the explorers would never have found a way through the uncharted reefs.',
    options: [
      'The explorers found a way through the uncharted reefs, although the old fisherman refused to guide them.',
      'Even with the old fisherman as their guide, the explorers were unable to find a way through the uncharted reefs.',
      'It was only thanks to an old fisherman who guided them that the explorers got through the uncharted reefs.',
      'If the old fisherman had not guided them, the explorers would have found an easier way through the uncharted reefs.',
      'The explorers would have got through the uncharted reefs sooner if they had not waited for the old fisherman.',
    ], answer: 2,
    explain: "'But for …' 'eğer … olmasaydı' demektir: yaşlı balıkçı onlara yol göstermeyi kabul etmeseydi kâşifler resiflerin arasından asla geçemezdi. Demek ki geçebildiler ve bunu balıkçıya borçlular. Doğru seçenek bunu 'only thanks to' ile verir. Balıkçının yol göstermeyi reddettiğini söyleyen seçenek olguyu tersine çeviriyor. Balıkçıyla bile geçemediklerini söyleyen seçenek sonucu tersine çeviriyor. 'If … had not guided' ile kurulan seçenek de balıkçının yardımını bir engel gibi gösteriyor; kalan yanlış seçenek ise balıkçıyı beklemeyi gecikmenin nedeni yapıyor." },

  // ---------- paragraf tamamlama ----------
  { id: 'gh-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['enlarge'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: "Piri Reis completed his Kitab-ı Bahriye, usually translated as the Book of Navigation, in 1521, and an enlarged version followed in 1526. The work is not a single map but a guide to the coasts of the Mediterranean. ----. For each part of the coast, it describes harbours, islands, sources of fresh water and the rocks or shallows that a ship's captain would need to avoid.",
    options: [
      'Even so, it was never meant to help ships keep clear of danger',
      'The Mediterranean has been crossed by traders since ancient times',
      'Today, most ships rely on satellites rather than printed guides',
      'It was written for working captains rather than for scholars',
      'Nevertheless, it says very little about the islands of that sea',
    ], answer: 3,
    explain: "Boşluktan sonraki cümle kitabın limanları, adaları, tatlı su kaynaklarını ve bir kaptanın kaçınması gereken kayaları anlattığını söylüyor: bunlar uygulamaya dönük bilgiler. Boşluğa bu ayrıntılara geçişi hazırlayan cümle gelir: eser bilginler için değil, işini yapan kaptanlar için yazılmıştı. Tehlikeden korumak için yazılmadığını söyleyen seçenek kayaların anlatılmasıyla çelişir; adalardan pek söz etmediğini söyleyen seçenek de adaların sayılmasıyla çelişir. Akdeniz'in çok eski çağlardan beri tüccarlarca geçilmesi ve bugün gemilerin uydu kullanması konuyla ilgili ama kitaptan söz etmiyor; akışı keser." },

  { id: 'gh-p2', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['spherical', 'stretch', 'projection'],
    level: 'zor', cefr: 'C1', konu: ['gönderim'],
    q: "Peel an orange and try to press the skin flat on a table, and it will either split or stretch. Mapmakers face the same difficulty whenever they transfer the spherical surface of the Earth onto a flat sheet of paper. ----. Choosing a projection, therefore, means deciding which of these qualities matter most for the job in hand and accepting errors in the rest.",
    options: [
      'A map can keep areas, shapes, distances or directions true, but never all of them at once',
      'Some globes are made from narrow strips of paper that have been cut into the shape of orange segments',
      'That is why a few modern maps are now able to show the whole surface of the Earth without any error',
      'Early mapmakers often had to work from the reports of sailors and travellers',
      'Oranges were among the goods traded most widely across the Mediterranean',
    ], answer: 0,
    explain: "Son cümle 'which of these qualities' (bu niteliklerden hangileri) diye bir nitelik listesine gönderme yapıyor; demek ki boşluktaki cümle bu nitelikleri saymalı. Alan, şekil, uzaklık ve yönü sayan ve hepsinin birden doğru tutulamayacağını söyleyen cümle bunu yapar; son cümledeki 'accepting errors in the rest' de buna bağlanır. Portakal dilimi biçimindeki kâğıt şeritlerden yapılan küreler konuya yakın ama nitelik saymıyor. Bazı haritaların dünyayı hatasız gösterebildiği önceki cümleyle ve 'therefore' ile kurulan sonuçla çelişir. Eski haritacıların denizci raporlarına dayanması ve portakal ticareti de 'these qualities' sözünün gösterebileceği bir şey içermiyor." },

  // ---------- akışı bozan cümle ----------
  { id: 'gh-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'A satellite navigation receiver, such as the one inside a phone, works out its position by listening to signals from several satellites at once.',
      'Each signal carries the exact time at which it was sent, so the receiver can tell how long it took to arrive.',
      'Because radio signals travel at a known speed, these delays can be turned into distances, and the distances to several satellites fix a single point on the ground.',
      'Many drivers say that they would now feel lost without a phone, even in streets they have known for years.',
      'This is also why accuracy tends to suffer in narrow streets between tall buildings, where some signals are blocked or bounce off walls before reaching the receiver.',
    ], answer: 3,
    explain: "Parça uydu konum alıcısının nasıl çalıştığını anlatıyor: birkaç uydudan sinyal alır (I), her sinyal gönderildiği anı taşır (II), gecikmeler uzaklığa çevrilir ve konum bulunur (III), yüksek binalar arasında sinyaller engellendiği ya da yansıdığı için doğruluk düşer (V). V'teki 'This is also why' III'teki zamanlama ve uzaklık hesabına dayanıyor. IV. cümle de telefonla yol bulmaktan söz ediyor ama konuyu sürücülerin telefona bağımlılığına kaydırıyor; III ile V arasındaki bağı koparıyor." },

  { id: 'gh-b2', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['portray'],
    level: 'kolay', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Most of us are so used to seeing north at the top of a map that it seems the only natural way to draw the world.',
      "Yet there is nothing on the Earth itself that makes north 'up'; the choice is simply a convention.",
      'Some older maps were drawn quite differently: the world map made by al-Idrisi in 1154, for example, places south at the top.',
      'Looking at such a map can therefore be a useful reminder that the way we portray the world is only one of several possible choices.',
      'Paper maps are still sold in most bookshops, although far fewer people buy them than in the past.',
    ], answer: 4,
    explain: "Parça kuzeyin haritada yukarıda olmasının doğal bir zorunluluk değil, bir gelenek olduğunu anlatıyor: alışkanlığımız (I), bunun bir gelenek olduğu (II), güneyi yukarıda gösteren el-İdrisi haritası (III) ve buradan çıkan ders (IV). V. cümle de haritalardan söz ediyor ama konuyu kitapçılarda satılan kâğıt haritalara ve satışların düşmesine kaydırıyor; kuzeyin yönüyle ilgisi yok." },
];

export default { id: 'genel-harita', course: C, title: U, order: 14, cards, items };
