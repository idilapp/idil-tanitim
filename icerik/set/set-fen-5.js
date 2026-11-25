// iDil › Fen bilimleri › Alan seti 5: Tarım ve gıda teknolojisi (YÖKDİL biçiminde yarım deneme).
// Görev 20 (25 Kasım 2026): çeviri çeldiricileri biçim kestirmesine karşı yeniden kuruldu.
// Tümü özgün: Claude yazdı (17 Kasım 2026). ÖSYM sorusu, yayınevi, ders kitabı ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Tohum bankaları (fen-tohum), tozlaşma (genel-ari) ve gen düzenleme (fen-crispr) bu sette işlenmedi.
// Olgular (çoğaltma 4. tur planı §7.20; yalnız olgular, metin özgün). Her olgu tek öğede:
// - O1 (xf5-o1): Fritz Haber 1909'da havadaki azotu hidrojenle birleştirip laboratuvarda amonyak elde etti; Carl Bosch
//   (BASF) yöntemi sanayi ölçeğine taşıdı, ilk fabrika 1913; Haber 1918 Nobel Kimya Ödülü, Bosch 1931'de ödülü paylaştı;
//   bugün insanların büyük bir bölümünün bu yolla üretilen gübreyle yetişen besinlerle beslendiği tahmini (temkinli: "It is
//   often estimated", oran yok). Ek yerleşik bilgi: azot havanın çoğunu oluşturur ama iki atomu sıkıca bağlı olduğu için
//   bitkiler kullanamaz; eskiden gübre olarak hayvan gübresi, önceki ekinlerin artıkları ve uzaktan gemiyle getirilen doğal
//   yataklar; tepkimenin yüksek sıcaklık ve çok yüksek basınç istemesi; Bosch'un ekibinin buna dayanan kazanlar geliştirmesi;
//   yöntemin çok enerji harcaması; tarlaya serpilen azotun bir bölümünün ekinlere geçmeden ırmak ve göllere karışması;
// - O2 ve O3 (xf5-o2): Norman Borlaug, Meksika, hastalığa dayanıklı ve kısa boylu buğday; 1960'larda Hindistan ve Pakistan'da
//   verimin birkaç yılda büyük ölçüde artması; "Yeşil Devrim"; 1970 Nobel Barış Ödülü; yeni çeşitlerin bol su ve gübreyle en
//   iyi sonucu vermesi, sulamaya ve satın alınan girdilere bağımlılık; bazı bölgelerde yeraltı suyunun düşmesi ve toprağın
//   zarar gördüğünün düşünülmesi (temkinli: "In some regions", "are thought to"). Ek yerleşik bilgi: yüzyıl ortasında
//   Asya'da üretimin nüfusa yetişemeyeceği kaygısı; geleneksel buğdayın bol gübreyle boy atıp ağır başakları yüzünden hasattan
//   önce yatması; kısa çeşitlerin enerjisini saptan çok tanelere vermesi;
// - O4 (xf5-z1): baklagillerin kökündeki bakteriler sayesinde havadaki azotu bağlaması; ekim nöbeti; 18. yüzyıl İngiltere'sinde
//   yoncayı da içeren dört yıllık nöbetin yayılması (temkinli: "is thought to"). Ek yerleşik bilgi: bezelye, fasulye, mercimek
//   ve yoncanın baklagil olması; baklagilden sonra buğdayın daha iyi yetişmesi; öncesinde tarlanın bir bölümünün bir yıl boş
//   bırakılması; yoncanın hayvan yemi olması; tek ekinde zararlı ve hastalıkların birikmesi;
// - O5 (xf5-p2): birkaç santimetrelik verimli toprağın oluşması yüzyıllar alabilir (temkinli: "may take"). Ek yerleşik bilgi:
//   kayanın don, yağmur ve köklerle parçalanması; bitki ve hayvan kalıntılarıyla karışması;
// - O6 (xf5-p1): 1930'lar, ABD Büyük Ovalar, kuraklık ve aşırı sürülmüş topraklar, toz fırtınaları, "Dust Bowl". Ek yerleşik
//   bilgi: doğal çayırların önceki on yıllarda buğday için sürülmesi; çim köklerinin toprağı tutması; fırtınaların gökyüzünü
//   saatlerce karartması; birçok ailenin çiftliğini bırakması;
// - O7 (xf5-p3): kalorinin büyük bölümü birkaç bitkiden, özellikle pirinç, buğday ve mısırdan (temkinli: "are thought to
//   provide a large share", oran yok).
// Tek sorular ve bozan cümleler genel ve yerleşik bilgi kullanır, sayı, tarih ya da ad yazmaz: don tehlikesi geçmeden tohum
// ekilmemesi; solucanların toprağı zenginleştirmesi; aşırı otlatmanın yamaçları çoraklaştırması; bazı pirinç çeşitlerinin su
// basılmamış tarlada yağmurla yetişmesi; yeşil toplanan domatesin olgunlaşması ama çoğu zaman o kadar tatlı olmaması; sütün
// kısa süre ısıtılması; çöl bitkisi tohumlarının az suyla çimlenmesi; tahılın serin ve kuru yerde yıllarca saklanabilmesi;
// buğday ve mısırın makineyle, çileğin çoğunlukla elle toplanması; dik tarlalarda hâlâ hayvan gücü kullanılması; melez tohumun
// her yıl yeniden satın alınması (melezin özellikleri sonraki kuşağa aynen geçmez); ot yiyen hayvanların ekime elverişsiz
// araziyi besin kaynağına çevirmesi; damla sulama; çok ıslak toprağın sürülünce sıkışması; keçilerin yaprakla da beslenmesi;
// toprağın su tutmasının verime etkisi; azotlu gübrede azalan getiri; dikey tarım (yapay ışık ve elektrik gideri, suyun
// yeniden kullanılması); sera; yoksul ülkelerde kaybın tarlada ve depoda, varlıklı ülkelerde dükkânda ve evde olması.

const T = 'taslak';
const C = 'fen';
const U = 'Fen seti 5: Tarım ve gıda teknolojisi';

const cards = [
  // ---------- isim ----------
  { code: 'pest', title: '(tarım) zararlı; zararlı böcek ya da hayvan', pos: 'isim', cefr: 'B2', ipa: '/pest/',
    text: "Ekinlere, depolanan ürüne ya da evlere zarar veren böcek, kemirgen gibi canlılar: crop pests (ekin zararlıları), pest control (zararlıyla mücadele). Gündelik dilde can sıkan kişi için de kullanılır (Don't be a pest!), ama fen metinlerinde hep tarım ya da sağlık zararlısıdır.",
    example: "A tiny moth that lays its eggs inside apples has become a serious pest in the valley's orchards.",
    exampleTr: 'Yumurtalarını elmaların içine bırakan küçük bir güve, vadideki meyve bahçelerinde ciddi bir zararlıya dönüştü.',
    synonyms: ['vermin'], family: [] },
  { code: 'soil', title: 'toprak (bitkilerin yetiştiği üst katman)', pos: 'isim', cefr: 'B1', ipa: '/sɔɪl/',
    text: "Bitkilerin kök saldığı, mineral ve çürümüş canlı kalıntılarından oluşan üst katman: fertile soil (verimli toprak), sandy soil (kumlu toprak). 'Ground' yerin kendisi ya da zemin, 'land' arazi ya da mülktür; ekinin büyüdüğü maddeyi anlatırken 'soil' kullanılır. Üstteki en verimli katman 'topsoil'dur.",
    example: 'Carrots grow best in light, sandy soil that lets rainwater drain away quickly.',
    exampleTr: 'Havuç, yağmur suyunun çabucak süzülüp gitmesine izin veren hafif ve kumlu toprakta en iyi yetişir.',
    synonyms: ['earth'], family: ['topsoil'] },
  { code: 'nitrogen', title: 'azot, nitrojen', pos: 'isim', cefr: 'B2', ipa: '/ˈnaɪtrədʒən/',
    text: "Havanın büyük bölümünü oluşturan gaz ve bütün canlıların proteinlerinde bulunan element. Tarım metinlerinde çoğu zaman gübreyle birlikte geçer: nitrogen fertiliser (azotlu gübre). Bitkilerin büyümesi için en çok gereken besinlerden biridir.",
    example: 'Leaves that slowly turn pale yellow can be a sign that a plant is not getting enough nitrogen.',
    exampleTr: 'Yavaş yavaş soluk sarıya dönen yapraklar, bitkinin yeterince azot alamadığının bir işareti olabilir.',
    synonyms: [], family: [] },
  { code: 'hybrid', title: 'melez; karma, iki şeyin birleşimi', pos: 'isim', cefr: 'C1', ipa: '/ˈhaɪbrɪd/',
    text: "İki farklı çeşidin ya da türün çaprazlanmasıyla elde edilen bitki ya da hayvan. Başka bir ismin önünde sıfat gibi de kullanılır: hybrid maize (melez mısır), hybrid seed (melez tohum). Gündelik dilde iki şeyi birleştiren her şey için geçer: a hybrid car (hem benzinle hem elektrikle çalışan araba).",
    example: 'The mule, a hybrid of a horse and a donkey, is valued on mountain farms because it is strong and sure-footed.',
    exampleTr: 'At ile eşeğin melezi olan katır, güçlü olduğu ve ayağını sağlam bastığı için dağ çiftliklerinde değerlidir.',
    synonyms: ['cross', 'crossbreed'], family: [] },
  { code: 'staple', title: 'temel besin, ana gıda; (ekonomide) temel ürün', pos: 'isim', cefr: 'C1', ipa: '/ˈsteɪpl/',
    text: "Bir topluluğun her gün ve en çok yediği temel besin: Rice is the staple of their diet. Sıfat gibi de geçer: staple foods, staple crops (temel ekinler). Başka bir anlamı 'zımba teli'dir; fen ve sosyal metinlerinde hemen hep 'temel besin, temel ürün' anlamında kullanılır.",
    example: "Beans and maize remain the staples of the family's diet and are eaten in some form almost every day.",
    exampleTr: 'Fasulye ve mısır ailenin temel besini olmayı sürdürüyor; neredeyse her gün bir biçimde yeniyor.',
    synonyms: ['basic food', 'mainstay'], family: [] },
  { code: 'grain', title: 'tahıl; tane', pos: 'isim', cefr: 'B2', ipa: '/ɡreɪn/',
    text: "Buğday, arpa, pirinç, mısır gibi bitkilerin yenen tohumları ve bu bitkilerin genel adı: grain crops (tahıl ekinleri), a grain store (tahıl ambarı). Sayılabilir kullanımda tek bir taneyi anlatır: a grain of rice, a grain of sand (bir kum tanesi).",
    example: 'The farmer kept the grain in a dry, airy barn so that it would not go mouldy over the winter.',
    exampleTr: 'Çiftçi, kış boyunca küflenmesin diye tahılı kuru ve havadar bir ambarda sakladı.',
    synonyms: ['cereal'], family: [] },
  // ---------- fiil ----------
  { code: 'plough', title: '(tarlayı) sürmek, toprağı pullukla işlemek', pos: 'fiil', cefr: 'B2', ipa: '/plaʊ/',
    text: "Toprağı ekime hazırlamak için pullukla altüst etmek: plough a field. Doğal bir çayırı tarlaya çevirmek 'plough up' diye anlatılır. Amerikan yazımı 'plow'dur. İsim olarak 'pulluk, saban' demektir.",
    example: 'Before tractors became common, the family ploughed its fields with a pair of oxen.',
    exampleTr: 'Traktörler yaygınlaşmadan önce aile tarlalarını bir çift öküzle sürerdi.',
    synonyms: ['till'], family: [] },
  { code: 'sow', title: '(tohum) ekmek', pos: 'fiil', cefr: 'B2', ipa: '/səʊ/',
    text: "Tohumu toprağa saçmak ya da gömmek: sow seeds, sow wheat. Düzensizdir: sow, sowed, sown (ya da sowed). Aynı okunan 'sew' dikiş dikmektir; /saʊ/ diye okunan isim 'sow' ise dişi domuzdur. Mecazda 'sow doubt' (kuşku tohumu ekmek) denir.",
    example: 'We sow the lettuce seeds in small pots indoors and move the young plants outside a few weeks later.',
    exampleTr: 'Marul tohumlarını içeride küçük saksılara ekiyor, fideleri birkaç hafta sonra dışarı taşıyoruz.',
    synonyms: ['plant', 'seed'], family: [] },
  { code: 'graze', title: '(hayvan) otlamak; otlatmak', pos: 'fiil', cefr: 'C1', ipa: '/ɡreɪz/',
    text: "Hayvanların çayırda ot yemesi (Sheep graze on the hills) ya da birinin hayvanlarını otlatması (graze cattle on a field). Aşırı otlatma 'overgrazing'dir. Başka bir anlamı 'sıyırmak'tır: graze your knee (dizini sıyırmak).",
    example: 'Every summer, the villagers take their goats up to graze on the high meadows.',
    exampleTr: 'Köylüler her yaz keçilerini otlamaları için yüksek çayırlara çıkarır.',
    synonyms: ['feed', 'pasture'], family: [] },
  // ---------- sıfat ----------
  { code: 'barren', title: '(toprak) çorak, verimsiz; ıssız', pos: 'sıfat', cefr: 'C1', ipa: '/ˈbærən/',
    text: "Üzerinde pek bir şey yetişmeyen toprak ya da arazi: barren land, a barren hillside. Karşıtı 'fertile' (verimli). Eski dilde 'kısır' anlamı da vardır; fen metinlerinde çoğu zaman toprağı ya da bir bölgeyi niteler.",
    example: 'After years of drought, the once green valley had become a barren stretch of dust and stones.',
    exampleTr: 'Yıllarca süren kuraklıktan sonra bir zamanlar yeşil olan vadi, toz ve taştan oluşan çorak bir düzlüğe dönmüştü.',
    synonyms: ['infertile', 'unproductive'], family: [] },
  { code: 'arable', title: 'ekilebilir, ekime elverişli (tarla)', pos: 'sıfat', cefr: 'C1', ipa: '/ˈærəbl/',
    text: "Sürülüp ekin ekilmeye elverişli ya da bunun için kullanılan: arable land (ekili, ekilebilir arazi), arable farming (bitkisel üretim). Hayvancılığa ayrılmış çayırla karşıtlık kurar: arable and pasture land. Hemen hep 'land, farming, field' gibi bir ismin önünde kullanılır.",
    example: 'Most of the farm is arable land, but the steep fields near the river are kept for cattle.',
    exampleTr: 'Çiftliğin çoğu ekilebilir arazi; ama ırmağın yanındaki dik tarlalar sığırlara ayrılıyor.',
    synonyms: ['cultivable', 'farmable'], family: [] },
  // ---------- zarf ----------
  { code: 'manually', title: 'elle, el emeğiyle', pos: 'zarf', cefr: 'C1', ipa: '/ˈmænjuəli/',
    text: "Bir işin makineyle değil elle yapıldığını anlatır: picked manually (elle toplanmış), operated manually (elle çalıştırılan). Karşıtı 'automatically' ya da 'mechanically'. Sıfatı 'manual' (el ile yapılan); 'manual labour' beden işçiliğidir.",
    example: 'Before the new machine arrived, every bottle in the dairy had to be labelled manually.',
    exampleTr: 'Yeni makine gelmeden önce mandıradaki her şişenin etiketi elle yapıştırılmak zorundaydı.',
    synonyms: ['by hand'], family: ['manual'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'xf5-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['sow', 'plough', 'graze'],
    level: 'orta', cefr: 'B2', konu: ['fiil'],
    q: 'In cooler regions, gardeners usually wait until the danger of frost has passed before they ---- their seeds, because a single cold night can kill the young shoots.',
    options: ['sow', 'graze', 'plough', 'harvest', 'store'], answer: 0,
    explain: "Cümle, don tehlikesi geçmeden tohumla yapılmaması gereken bir işi anlatıyor; gerekçe de soğuk bir gecenin genç filizleri öldürebilmesi. Filizlenecek olan tohum toprağa yeni girmiştir: tohumu ekmek 'sow'dur. 'Graze' (otlamak, otlatmak) hayvanlar için kullanılır, tohumla bağ kurmaz. 'Plough' (sürmek) tarlayı ya da toprağı nesne alır, tohumu değil. 'Harvest' (hasat etmek) mevsimin sonundaki işi anlatır; ardından filizlerden söz edilmesiyle çelişir. 'Store' (saklamak) tohumu depoya koymaktır; depodaki tohum dondan filiz kaybetmez." },
  { id: 'xf5-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['soil', 'pest', 'grain'],
    level: 'kolay', cefr: 'B1', konu: ['isim'],
    q: 'Earthworms make the ---- richer by breaking down dead leaves and mixing them into the ground.',
    options: ['pest', 'grain', 'river', 'air', 'soil'], answer: 4,
    explain: "Solucanlar ölü yaprakları parçalayıp yere karıştırarak toprağı zenginleştirir; bitkilerin yetiştiği üst katman 'soil'dur. 'Pest' (zararlı) zenginleşen bir şey değildir. 'Grain' (tahıl) solucanların yere karıştırdığı yapraklarla zenginleşmez. Yapraklar yere karıştırıldığı için zenginleşen şey ırmak ('river') ya da hava ('air') olamaz." },
  { id: 'xf5-k3', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['barren', 'arable'],
    level: 'zor', cefr: 'C1', konu: ['sıfat'],
    q: 'Centuries of heavy grazing and the loss of their trees had left the hillsides so ---- that hardly anything except thorny bushes could grow on them.',
    options: ['fertile', 'arable', 'humid', 'barren', 'abundant'], answer: 3,
    explain: "'So … that' yapısındaki sonuç, yamaçlarda dikenli çalılardan başka neredeyse hiçbir şeyin yetişmediğini söylüyor; neden de yüzyıllarca süren otlatma ve ağaçların yok olması. Üzerinde pek bir şey yetişmeyen toprak 'barren'dır (çorak). 'Fertile' (verimli) ve 'arable' (ekime elverişli) tersini söyler; hiçbir şeyin yetişmemesiyle çelişir. 'Humid' (nemli) havayı niteler ve bitkisizliği açıklamaz. 'Abundant' (bol) bir kaynağın çokluğunu anlatır, yamacı nitelemez." },

  // ---------- dil bilgisi ----------
  { id: 'xf5-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['zaman'],
    q: 'Last spring, the farmer ---- tomatoes in the field behind his house, but this year he is growing beans there.',
    options: ['grows', 'grew', 'has grown', 'will grow', 'is growing'], answer: 1,
    explain: "'Last spring' (geçen bahar) geçmişte bitmiş belli bir zamanı gösterir; bu yüzden simple past gerekir: 'grew'. 'Grows' ve 'is growing' bugünü anlatır; cümlenin ikinci yarısı da bu yıl orada fasulye yetiştiğini söylüyor. 'Has grown' geçmişteki belli bir zaman bildiren 'last spring' ile kullanılmaz. 'Will grow' geleceği anlatır." },
  { id: 'xf5-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'Rice is usually grown in flooded fields, but some varieties can be cultivated ---- standing water, relying only on rainfall.',
    options: ['because of', 'along with', 'without', 'through', 'by means of'], answer: 2,
    explain: "'But' birinci yarıyla karşıtlık kuruyor: pirinç genellikle su basılmış tarlada yetişir, ama bazı çeşitler yalnız yağmura dayanarak yetiştirilebilir. Yani bu çeşitlerin durgun suya gerek yoktur: 'without' (-sız, olmadan). 'Because of', 'through' ve 'by means of' durgun suyu yetiştirmenin nedeni ya da aracı yapar; 'relying only on rainfall' ile çelişir. 'Along with' (ile birlikte) da durgun suyun bulunduğunu söyler." },
  { id: 'xf5-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Tomatoes that are picked while still green will ripen on a windowsill, ---- they rarely taste as sweet as those left to ripen on the plant.',
    options: ['although', 'because', 'so that', 'unless', 'as soon as'], answer: 0,
    explain: "Birinci yarı iyi bir haber veriyor (yeşil toplanan domates pencere önünde de olgunlaşır), ikinci yarı ise bir eksiği söylüyor (dalında olgunlaşanlar kadar tatlı olmaz). Bu karşıtlığı 'although' (-e karşın) kurar. 'Because' tadın az tatlı olmasını olgunlaşmanın nedeni yapar; mantık bozulur. 'So that' amaç bildirir; domates daha az tatlı olsun diye olgunlaşmaz. 'Unless' (-mezse) ve 'as soon as' (-ir -mez) koşul ve zaman bağı kurar; iki yargı arasında böyle bir bağ yok." },
  { id: 'xf5-g4', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edilgen'],
    q: 'Before it reaches the shops, most of the milk we drink ---- briefly in order to kill harmful bacteria.',
    options: ['is heated', 'heats', 'has heated', 'was heating', 'heated'], answer: 0,
    explain: "Sütü ısıtan insanlardır; özne 'most of the milk' eylemden etkilenendir, yani edilgen gerekir. 'Before it reaches the shops' (dükkânlara ulaşmadan önce) bugün düzenli yinelenen bir işi anlattığı için geniş zamanlı edilgen olur: 'is heated'. 'Heats', 'has heated' ve 'was heating' etkendir; ya sütün bir şeyi ısıttığı ya da kendiliğinden ısındığı anlamı çıkar, oysa 'in order to kill' amacını güden biri olmalı. Ayrıca 'has heated' ve 'was heating' düzenli yinelenen bir işe uymaz. 'Heated' de burada geçmiş zamanlı etken fiil olur; hem sütü ısıtan yapar hem de 'reaches' ile zaman uyumunu bozar." },
  { id: 'xf5-g5', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['nicelik'],
    q: 'The seeds of this desert plant need only ---- water to sprout, so even a brief shower is enough to bring them to life.',
    options: ['a little', 'a few', 'plenty of', 'a great deal of', 'no'], answer: 0,
    explain: "'Water' sayılamaz bir isimdir ve cümlenin sonu kısa bir sağanağın bile yettiğini söylüyor; demek ki tohumların azıcık suya ihtiyacı var: 'only a little water'. 'A few' sayılabilir isimlerle kullanılır. 'Plenty of' ve 'a great deal of' (bol, çok) dil bilgisi açısından uyar ama kısa bir sağanağın yetmesiyle çelişir. 'Only no water' kurulmaz; susuz çimlenme de 'shower' ile anlamsızlaşır." },
  { id: 'xf5-g6', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['grain'],
    level: 'zor', cefr: 'C1', konu: ['ortaç öbeği'],
    q: '---- in cool, dry conditions, grain can last for several years without losing much of its quality.',
    options: ['Storing', 'Having stored', 'Stored', 'To store', 'Store'], answer: 2,
    explain: "Ana cümlenin öznesi 'grain'; ortaç öbeği bu özneyi niteler. Tahıl kendini saklamaz, saklanır; edilgen anlam past participle ile kurulur: 'Stored in cool, dry conditions' (serin ve kuru koşullarda saklanırsa). 'Storing' ve 'Having stored' etkendir; tahılın bir şeyi sakladığı anlamı çıkar. 'To store' amaç bildirir ve tahılı saklama işinin öznesi yapar. 'Store' yalın fiildir; cümlenin başında emir olur ve virgülden sonraki ana cümleye bağlanmaz." },
  { id: 'xf5-g7', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['manually'],
    level: 'zor', cefr: 'C1', konu: ['bağlantı zarfı'],
    q: 'Machines now harvest crops such as wheat and maize quickly and cheaply. ----, soft fruits such as strawberries are still mostly picked manually, since they bruise so easily.',
    options: ['Therefore', 'Similarly', 'In other words', 'For instance', 'Nevertheless'], answer: 4,
    explain: "Birinci cümle makinelerin hasadı hızlı ve ucuz yaptığını söylüyor; ikinci cümle buna ters düşen bir durumu veriyor: çilek gibi yumuşak meyveler hâlâ çoğunlukla elle toplanıyor. Beklenene ters düşen bilgiyi 'Nevertheless' (yine de) bağlar. 'Therefore' (bu yüzden) elle toplamayı makinelerin sonucu yapar. 'Similarly' (benzer biçimde) iki durumu aynı yönde gösterir. 'In other words' ilk cümleyi başka sözlerle yineler; 'For instance' de ilk cümleye örnek verir; ikinci cümle ne yineleme ne örnek." },

  // ---------- boşluklu metin (5 boşluk) ----------
  { id: 'xf5-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: ['nitrogen', 'soil', 'pest', 'graze'],
    level: 'orta', cefr: 'B2', title: 'Bezelye, fasulye ve yonca',
    text: "Peas, beans, lentils and clover all belong to a family known as legumes, and they share an unusual talent. (1) ---- bacteria that live in small swellings on their roots, they can take nitrogen from the air and turn it into a form that living things can use. When their roots and leaves rot, part of this nitrogen stays behind in the soil, ready for whatever grows there next. Long before scientists could explain why, farmers had noticed that wheat tended to do better in a field where beans had grown the year before. This is the idea behind crop rotation: rather than growing the same crop in a field year after year, the farmer (2) ---- something different there each season, so that the soil is not drained of the same nutrients again and again. In eighteenth-century England, a four-year cycle that included clover is thought to have become widespread. Until then, many farmers (3) ---- usually left part of their land bare for a whole year to let it recover. (4) ---- that old method lost a whole year on every resting field, the new cycle kept all of the land productive, and the clover also provided food for cattle. Rotation also helps against the pests and diseases (5) ---- tend to build up when one crop is grown in the same place for too long.",
    steps: [
      { konu: ['edat'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['Despite', 'Thanks to', 'Instead of', 'Apart from', 'Regardless of'], answer: 1,
        explain: "Baklagillerin havadaki azotu kullanabilmesini köklerindeki bakteriler sağlıyor; olumlu bir sonucun kaynağını 'thanks to' (sayesinde) gösterir. 'Despite' (-e karşın) ve 'regardless of' (-e bakmaksızın) bakterileri bir engel ya da önemsiz bir ayrıntı gibi gösterir. 'Instead of' (yerine) bakterilerin işe karışmadığını söyler. 'Apart from' (dışında) da bakterileri işin dışında bırakır; oysa işi yapan onlardır." },
      { konu: ['kelime', 'fiil'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['sells', 'plants', 'grazes', 'stores', 'imports'], answer: 1,
        explain: "Ekim nöbetinde çiftçi aynı tarlaya her mevsim başka bir ekin diker; toprağın aynı besinlerden yoksun kalmaması da buna bağlı. Bir ekini tarlaya dikmek 'plants'tır. 'Grazes' (otlatır) hayvanlar için kullanılır; ekinle ilgisi yok. 'Sells' (satar), 'stores' (saklar) ve 'imports' (dışarıdan getirir) tarlada ne yetiştiğini belirlemez, bu yüzden toprağın besinlerini korumayı açıklamaz." },
      { konu: ['zaman uyumu'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['have', 'will have', 'were', 'would have', 'had'], answer: 4,
        explain: "'Until then' (o zamana kadar) 18. yüzyıldaki değişimden önceki dönemi gösterir; geçmişteki bir andan önce süregelmiş bir alışkanlık past perfect ile anlatılır: 'had usually left'. 'Have' bugüne bağlanır, geçmişte bitmiş bir döneme uymaz. 'Will have' geleceği anlatır. 'Were' edilgen kurar ve çiftçileri boş bırakılan şey yapar. 'Would have left' gerçekleşmemiş bir durumu anlatır; oysa tarlaları boş bırakmak gerçek bir uygulamaydı." },
      { konu: ['bağlaç'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['So that', 'Unless', 'In case', 'Whereas', 'As soon as'], answer: 3,
        explain: "Eski yöntem ile yeni nöbet karşılaştırılıyor: eskisi dinlenen her tarlada bir yıl kaybediyordu, yenisi bütün araziyi verimli tutuyordu. İki durumu karşılaştırıp karşıtlığını gösteren 'Whereas'tır (oysa, -diği hâlde). 'So that' amaç, 'Unless' koşul, 'In case' önlem bildirir; eski yöntemin kayıpları yeninin amacı, koşulu ya da önlemi değildir. 'As soon as' (-ir -mez) iki durumu art arda olan olaylar gibi bağlar; oysa ikisi aynı anda süren iki ayrı uygulama." },
      { konu: ['sıfat cümleciği'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['that', 'what', 'whose', 'where', 'who'], answer: 0,
        explain: "Boşluk 'the pests and diseases' ismini niteleyen bir sıfat cümleciği başlatıyor ve cümlecikte özne eksik ('---- tend to build up'). Canlı olmayan ya da insan dışı bir isim için özne yerine 'that' (ya da 'which') kullanılır. 'What' önünde bir isim olmadan kullanılır. 'Whose' ardından bir isim ister ('whose numbers'). 'Where' yer bildirir ve özne eksiğini doldurmaz. 'Who' insanlar için kullanılır; zararlılar ve hastalıklar için uymaz." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'xf5-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['plough'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although a tractor can plough a field far faster than a team of horses, ----.',
    options: [
      'it saves the farmer a great deal of time in the busy spring weeks',
      'some small farms on steep hillsides still rely on working animals',
      'it can also pull heavy loads of produce to the market in town',
      'many farmers replaced their horses with one a long time ago',
      'the work is usually finished well before the rain arrives',
    ], answer: 1,
    explain: "'Although' ana cümlede beklenene ters düşen bir bilgi ister. Traktör tarlayı atlardan çok daha hızlı sürüyorsa herkesin traktör kullanması beklenir; oysa dik yamaçlardaki bazı küçük çiftlikler hâlâ iş hayvanlarına dayanıyor. Bahar haftalarında zaman kazandırması, yük taşıyabilmesi, birçok çiftçinin atlarını çoktan traktörle değiştirmesi ve işin yağmurdan önce bitmesi traktörün hızlı olmasıyla aynı yönde; karşıtlık kurmuyor." },
  { id: 'xf5-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['neden-sonuç'],
    q: '----, the farmer covered his young plants with plastic sheets for the night.',
    options: [
      'Although the night was expected to be warm and calm',
      'As soon as the plants had been picked and sold',
      'So that the plants would get more sunlight at night',
      'Unless the weather forecast had predicted frost',
      'Because a sharp frost was expected after dark',
    ], answer: 4,
    explain: "Ana cümle bir önlemi anlatıyor: çiftçi genç bitkileri gece için naylonla örttü. Boşluk bu önlemin nedenini istiyor: hava karardıktan sonra sert bir don bekleniyordu. 'Although' ile gecenin ılık beklenmesi önlemi gereksiz kılar; mantık bozulur. Toplanıp satılmış bitkiler örtülmez. Gece güneş ışığı yoktur; örtmek ışık da vermez. 'Unless' ile kurulan koşul, don beklenmezse örttüğünü söyler; mantığı tersine çevirir." },
  { id: 'xf5-t3', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['koşul'],
    q: 'If fresh milk is not kept cold after it leaves the farm, ----.',
    options: [
      'it will taste sweeter and stay fresh for much longer',
      'the cows will produce less of it on the following day',
      'bacteria in it can multiply and make it go sour',
      'it would have stayed fresh for several weeks',
      'it is usually sold in glass bottles rather than cartons',
    ], answer: 2,
    explain: "Birinci tip koşul ('If … is not kept') ana cümlede geniş zaman ya da 'will, can' gibi bir kip ister. Süt soğuk tutulmazsa içindeki bakteriler çoğalır ve süt ekşir. Daha tatlı olup daha uzun taze kalacağını söyleyen tamamlama anlamı tersine çevirir. İneklerin ertesi gün daha az süt vermesi, çiftlikten çıkmış sütün nasıl saklandığına bağlı değildir. Sütün cam şişede satılması koşulla bağ kurmaz. 'Would have stayed' olmamış bir geçmişi anlatır; birinci tip koşulla uyuşmaz." },
  { id: 'xf5-t4', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['grain', 'plough'],
    level: 'orta', cefr: 'B2', konu: ['zaman'],
    q: '----, the wheat is cut and the grain is separated from the stalks.',
    options: [
      'Before any seeds have been planted in the field',
      'While the plants are still short and green',
      'Until the first shoots appear above the ground',
      'Once the ears have turned golden and dry',
      'As soon as the field has been ploughed in autumn',
    ], answer: 3,
    explain: "Ana cümle hasadı anlatıyor: buğday biçilir ve taneler saplardan ayrılır. Bu, başaklar sararıp kuruduktan sonra yapılır: 'Once' (-ince, -dikten sonra). Tohum ekilmeden önce biçilecek buğday yoktur. Bitkiler henüz kısa ve yeşilken tane olgunlaşmamıştır. 'Until' ile ilk filizler görünene kadar biçmek anlamsızdır. Tarla sonbaharda sürülür sürülmez de henüz ekin yoktur." },
  { id: 'xf5-t5', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['hybrid'],
    level: 'zor', cefr: 'C1', konu: ['karşıtlık'],
    q: '----, farmers who grow hybrid maize usually buy fresh seed every year.',
    options: [
      'Because the seed they keep from their own harvest is free',
      'Even though saving part of the harvest would cost nothing',
      'Since the next generation keeps exactly the same qualities',
      'Just as their grandparents always did with their own seed',
      'Unless the shops have run out of seed in the spring',
    ], answer: 1,
    explain: "Ana cümle, melez mısır yetiştirenlerin her yıl yeni tohum satın aldığını söylüyor. Bunun beklenmedik yanı, kendi hasatlarından tohum ayırmanın bedava olması; karşıtlığı 'Even though' kurar. Melez bitkinin özellikleri sonraki kuşağa aynen geçmez, satın alma bu yüzden sürer. 'Because' ile bedava tohum satın almanın nedeni olur; mantık bozulur. Sonraki kuşağın aynı özellikleri koruması doğru değildir; doğru olsaydı satın almaya gerek kalmazdı. Dedelerinin kendi tohumlarını saklaması satın almayla çelişir. Dükkânlarda tohum bitmezse satın almak da anlamsız bir koşul." },
  { id: 'xf5-t6', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['arable'],
    level: 'zor', cefr: 'C1', konu: ['neden-sonuç'],
    q: 'Because cattle and sheep can live on grass that people are unable to digest, ----.',
    options: [
      'they can turn land that is not arable into a source of food',
      'they are usually kept indoors and fed on grain all year round',
      'farmers have stopped keeping them on hills and dry plains',
      'their meat contains far less protein than that of other animals',
      'they need to be given the same food that people eat every day',
    ], answer: 0,
    explain: "Neden cümlesi, sığır ve koyunun insanların sindiremediği otla yaşayabildiğini söylüyor. Sonucu: ekime elverişli olmayan araziyi bir besin kaynağına çevirebilirler. Yıl boyu içeride tahılla beslenmeleri otla yaşayabilmeleriyle çelişir. Çiftçilerin onları tepelerden ve kuru ovalardan çekmesi de bu nedenden çıkmaz, tersini düşündürür. Etlerindeki protein ot sindirmekle bağ kurmaz ve doğru da değildir. İnsanların yediği yiyeceğe muhtaç olmaları neden cümlesine ters düşer." },

  // ---------- çeviri: İngilizceden Türkçeye ----------
  { id: 'xf5-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'Drip irrigation, which delivers water directly to the roots of each plant, wastes far less water than spraying a whole field.',
    options: [
      'Suyu doğrudan her ağacın köklerine ulaştıran damla sulama, bütün bir tarlayı yağmurlamaya göre biraz daha az su israf eder.',
      'Suyu doğrudan her bitkinin köklerine ulaştıran damla sulama, bütün bir tarlayı yağmurlamaya göre biraz daha az su israf eder.',
      'Suyu doğrudan her bitkinin köklerine ulaştıran damla sulama, bütün bir tarlayı yağmurlamaya göre çok daha az su israf eder.',
      'Suyu doğrudan her ağacın köklerine ulaştıran damla sulama, bütün bir tarlayı yağmurlamaya göre çok daha az su israf eder.',
      'Suyu doğrudan her bitkinin köklerine ulaştıran damla sulama, tarlanın bir bölümünü yağmurlamaya göre biraz daha az su israf eder.',
    ], answer: 2,
    explain: "'Which delivers water directly to the roots of each plant' damla sulamayı niteleyen ek bilgidir (suyu doğrudan her bitkinin köklerine ulaştıran). 'Wastes far less water than spraying a whole field' bütün bir tarlayı yağmurlamaya göre çok daha az su israf etmektir. 'Her bitkinin … biraz daha az' diyen çeviri 'far less' farkını küçültüyor. 'Her ağacın … biraz daha az' seçeneğinde bitki ağaca dönmüş, fark da küçülmüş. 'Tarlanın bir bölümünü yağmurlamaya göre' cümlesi karşılaştırmayı bütün tarla yerine tarlanın bir kısmıyla kuruyor ve farkı küçültüyor. 'Her ağacın … çok daha az' diyen çeviri farkı koruyor ama 'each plant'i yalnız ağaçlara daraltıyor." },
  { id: 'xf5-c2', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['edilgen'],
    q: 'Apples are picked in autumn and kept in cold rooms until spring.',
    options: [
      'Elmalar yazın toplandı ve ilkbahara kadar soğuk odalarda saklandı.',
      'Elmalar sonbaharda toplandı ve ilkbahara kadar soğuk odalarda saklandı.',
      'Elmalar sonbaharda toplanır ve ilkbahara kadar soğuk odalarda saklanır.',
      'Elmalar sonbaharda toplanır ve kışa kadar soğuk odalarda saklanır.',
      'Elmalar sonbaharda toplandı ve kışa kadar soğuk odalarda saklandı.',
    ], answer: 2,
    explain: "İki edilgen fiil var: 'are picked in autumn' (sonbaharda toplanır) ve 'kept in cold rooms until spring' (ilkbahara kadar soğuk odalarda saklanır); geniş zaman düzenli yinelenen bir işi anlatıyor. 'Sonbaharda toplandı … saklandı' diyen çeviri bu düzenli işi geçmişte bir kez olmuş gibi anlatıyor. 'Yazın toplandı' seçeneği hem zamanı geçmişe çeviriyor hem sonbaharı yaza. 'Toplandı … kışa kadar' cümlesinde geçmiş zaman var, 'until spring' de kışa kaymış. 'Toplanır … kışa kadar' diyen çeviri zamanı doğru veriyor ama saklama süresini kısaltıyor." },
  { id: 'xf5-c3', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['nitrogen'],
    level: 'zor', cefr: 'C1', konu: ['karşılaştırma'],
    q: 'The more nitrogen fertiliser a field receives, the less each extra bag tends to add to the harvest.',
    options: [
      'Bir tarlaya ne kadar sık azotlu gübre verilirse, hasat da o kadar azalma eğilimindedir.',
      'Bir tarlaya ne kadar çok azotlu gübre verilirse, eklenen her torbanın hasada katkısı o kadar azalma eğilimindedir.',
      'Bir tarlaya ne kadar çok azotlu gübre verilirse, hasat da o kadar azalma eğilimindedir.',
      'Bir tarlaya ne kadar çok azotlu gübre verilirse, hasat da o kadar artış gösterme eğilimindedir.',
      'Bir tarlaya ne kadar çok azotlu gübre verilirse, eklenen her torbanın hasada katkısı o kadar artış gösterme eğilimindedir.',
    ], answer: 1,
    explain: "'The more …, the less …' (ne kadar çok …, o kadar az …) ters yönde bir değişim anlatır; ikinci yarıda azalan şey 'each extra bag'in hasada kattığıdır, hasadın kendisi değil. 'Hasat da o kadar azalma eğilimindedir' diyen çeviri her torbanın katkısını bırakıp hasadın tümünden söz ediyor. 'Ne kadar sık' ile başlayan seçenek gübrenin miktarını sıklığa çeviriyor ve hasadın tümünü azaltıyor. 'Hasat da o kadar artış gösterme eğilimindedir' cümlesi hem azalanı değiştiriyor hem yönü tersine çeviriyor. 'Her torbanın hasada katkısı o kadar artış gösterme eğilimindedir' diyen çeviri doğru şeyden söz ediyor ama 'the less'i artışa çeviriyor." },

  // ---------- çeviri: Türkçeden İngilizceye ----------
  { id: 'xf5-c4', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['plough', 'soil'],
    level: 'orta', cefr: 'B2', konu: ['koşul'],
    q: 'Toprak çok ıslakken sürülürse sıkışır ve bitki kökleri içinde zor ilerler.',
    options: [
      'If soil is ploughed when it is slightly damp, it becomes compacted and roots find it hard to grow through it.',
      'If soil had been ploughed when it was too wet, it would have become compacted and roots would have found it hard to grow through it.',
      'If soil is ploughed when it is too wet, it becomes loose and roots find it easy to grow through it.',
      'If soil is ploughed when it is too wet, it becomes compacted and roots find it hard to reach water.',
      'If soil is ploughed when it is too wet, it becomes compacted and roots find it hard to grow through it.',
    ], answer: 4,
    explain: "Türkçe cümle genel geçer bir koşul anlatıyor: toprak çok ıslakken sürülürse ('If soil is ploughed when it is too wet') sıkışır ('becomes compacted') ve kökler içinde zor ilerler ('roots find it hard to grow through it'). Üçüncü tip koşul ('had been … would have') gerçekleşmemiş bir geçmişi anlatıyor. 'Slightly damp' 'çok ıslak'ı 'biraz nemli'ye indiriyor. 'Reach water' köklerin toprakta ilerlemesini suya ulaşmaya çeviriyor. 'Becomes loose … easy' ise sıkışmayı gevşemeye çevirip sonucu tersine döndürüyor." },
  { id: 'xf5-c5', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Keçiler yalnız otla değil, çalıların ve ağaçların yapraklarıyla da beslenebilir.',
    options: [
      'Goats usually feed not only on grass but also on the bark of bushes and trees.',
      'Goats can feed not only on grass but also on the bark of bushes and trees.',
      'Goats can feed on the leaves of bushes and trees rather than on grass.',
      'Goats can feed not only on grass but also on the leaves of bushes and trees.',
      'Goats can feed not only on grass but also on the bark of young trees.',
    ], answer: 3,
    explain: "'Yalnız otla değil, … yapraklarıyla da' iki besin kaynağının birlikte geçerli olduğunu söyler; bunu 'not only … but also' kurar, '-ebilir' de 'can' ile verilir. 'Can feed … on the bark of bushes and trees' diyen çeviri yaprakları ağaç kabuğuna çeviriyor. 'Usually feed' ile başlayan seçenek olanağı bir alışkanlığa çeviriyor ve yaprak yerine kabuktan söz ediyor. 'The bark of young trees' cümlesi çalıları atıyor, ağaçları da genç ağaçlara daraltıyor ve yaprakları kabuğa çeviriyor. 'Rather than on grass' diyen çeviri yaprakları otun yerine koyuyor; keçilerin ot yemediği anlamı çıkıyor." },
  { id: 'xf5-c6', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['soil'],
    level: 'zor', cefr: 'C1', konu: ['isim cümleciği'],
    q: 'Bir tarlanın ne kadar ürün vereceği, büyük ölçüde toprağının ne kadar su tutabildiğine bağlıdır.',
    options: [
      'How much a field will produce depends partly on how much fertiliser its soil can hold.',
      'Whether a field will produce anything depends partly on how much water its soil can hold.',
      'How much a field will produce depends partly on how much water its soil can hold.',
      'How much a field will produce depends largely on how much water its soil can hold.',
      'How much a field will produce depends largely on how much fertiliser its soil can hold.',
    ], answer: 3,
    explain: "Türkçe cümlenin öznesi bir isim cümleciği: 'Bir tarlanın ne kadar ürün vereceği' = 'How much a field will produce'. Yüklem 'büyük ölçüde … bağlıdır' = 'depends largely on', tamlayıcı da ikinci isim cümleciği: 'how much water its soil can hold'. 'Depends partly on how much water' diyen çeviri 'büyük ölçüde'yi 'kısmen'e indiriyor. 'Whether a field will produce anything' ile başlayan seçenek 'ne kadar'ı ürün verip vermeyeceğine çeviriyor ve 'kısmen' diyor. 'Partly … fertiliser' cümlesinde derece de toprağın tuttuğu şey de değişmiş. 'Largely … fertiliser' diyen çeviri dereceyi koruyor ama suyu gübreye çeviriyor." },

  // ---------- okuma 1 ----------
  { id: 'xf5-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['nitrogen'],
    level: 'orta', cefr: 'B2', title: 'Her yerdeki gaz',
    text: "Every crop needs nitrogen, and for most of history farmers had only a few ways to supply it: animal manure, the remains of earlier crops and, later, natural deposits shipped from distant parts of the world. The irony was that nitrogen surrounds us. It forms the bulk of the atmosphere, yet plants cannot use it directly, because its two atoms are bound together extremely tightly. Breaking that bond on a large scale, many chemists believed, would be the key to feeding a growing world. In 1909, Fritz Haber found a way to do it in his laboratory, combining nitrogen from the air with hydrogen to make ammonia, a compound from which fertiliser can be produced. His apparatus, however, yielded only small amounts. The reaction needed high temperatures and enormous pressures that would have destroyed ordinary equipment, so scaling it up was a formidable challenge. That task fell to Carl Bosch of the chemical company BASF, whose team developed vessels strong enough to withstand such conditions. By 1913, the first factory was running. Both men later received the Nobel Prize in Chemistry: Haber the prize for 1918, and Bosch a share of the prize in 1931. It is often estimated that a large part of humanity today is fed by crops grown with fertiliser made in this way. Yet the method consumes vast quantities of energy, and a good deal of the nitrogen spread on fields is never taken up by crops; some of it ends up in rivers and lakes instead.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, plants are unable to use the nitrogen in the air because ----.',
        options: [
          'there is too little of it close to the ground where crops grow',
          'it is mixed with hydrogen in a way that damages their roots',
          'it is washed into rivers before the roots are able to absorb it',
          'animal manure prevents it from passing into the soil',
          'it exists in a form whose chemical bond is very hard to break',
        ], answer: 4,
        explain: "Parçaya göre azot atmosferin büyük bölümünü oluşturur, ama bitkiler onu kullanamaz, çünkü iki atomu birbirine son derece sıkı bağlıdır. Doğru seçenek bunu başka sözlerle söylüyor: kimyasal bağı çok zor kırılan bir biçimde bulunur. Havada azotun az olduğu parçayla çelişir; atmosferin büyük bölümü azottur. Hidrojenle karışması Haber'in laboratuvardaki yöntemidir, köklere zarar vermesi parçada yok. Irmaklara karışan, tarlaya serpilen gübredeki azottur, havadaki değil. Hayvan gübresinin azotu engellemesi de parçada geçmiyor; tersine gübre bir azot kaynağı olarak anılıyor." },
      { konu: ['ana fikir'],
        q: 'The passage is mainly concerned with ----.',
        options: [
          'the rivalry between two chemists who competed with each other for the same Nobel Prize',
          'the reasons why animal manure remains the best fertiliser for most crops',
          'the damage that fertiliser factories have done to rivers and lakes',
          'the difficulties of shipping natural fertiliser across the oceans',
          'how a way of drawing nitrogen from the air was developed and what it has meant',
        ], answer: 4,
        explain: "Parça, havadaki azottan gübre yapmanın yolunun nasıl bulunduğunu (Haber'in laboratuvarı), nasıl sanayiye taşındığını (Bosch ve ilk fabrika) ve bunun sonuçlarını (insanlığın beslenmesi, enerji harcaması, ırmaklara karışan azot) anlatıyor. Doğru seçenek bunların hepsini kapsıyor. İki kimyagerin aynı ödül için yarıştığı parçada yok; ödülleri ayrı yıllarda aldılar. Hayvan gübresinin hâlâ en iyi gübre olduğu söylenmiyor. Irmaklara verilen zarar ve doğal gübrenin gemiyle taşınması parçanın yalnız birer ayrıntısı." },
      { konu: ['çıkarım'],
        q: 'The passage suggests that ----.',
        options: [
          'Haber built the first factory himself without any help from industry',
          "Haber's laboratory method alone could not have met the needs of farmers",
          'fertiliser made from the air causes no harm once it reaches the fields',
          'the method has become cheap because it requires very little energy',
          'farmers stopped using manure as soon as the first factory opened',
        ], answer: 1,
        explain: "Parçaya göre Haber'in düzeneği yalnız küçük miktarlar veriyordu ve yöntemi büyütmek, sıradan aletleri yok edecek sıcaklık ve basınç yüzünden çok güç bir işti; bunu Bosch'un ekibi başardı. Demek ki laboratuvardaki yöntem tek başına çiftçilerin ihtiyacını karşılayamazdı. İlk fabrikayı Haber'in tek başına kurduğu parçayla çelişir; işi BASF'tan Bosch üstlendi. Gübrenin zararsız olduğu ve yöntemin az enerji harcadığı da parçanın son cümlesiyle çelişir. Çiftçilerin hayvan gübresini hemen bıraktığı ise parçada yok." },
      { konu: ['gönderim'],
        q: "The phrase 'That task' in the passage refers to ----.",
        options: [
          'breaking ammonia down into nitrogen and hydrogen again',
          'shipping natural deposits of fertiliser from distant parts of the world',
          'turning a small laboratory method into large-scale production',
          'measuring how much of the nitrogen crops actually take up',
          'persuading farmers to stop spreading animal manure',
        ], answer: 2,
        explain: "'That task fell to Carl Bosch' cümlesinden hemen önce, Haber'in düzeneğinin yalnız küçük miktarlar verdiği ve yöntemi büyütmenin çok güç olduğu söyleniyor; ardından Bosch'un ekibinin gereken kazanları geliştirdiği ve ilk fabrikanın çalıştığı anlatılıyor. Öyleyse 'that task', laboratuvardaki yöntemi büyük ölçekli üretime çevirmektir. Amonyağı yeniden azota ve hidrojene ayırmak yöntemin tersidir. Doğal yatakların taşınması parçanın başında, eski bir yol olarak geçiyor. Ekinlerin azotu ne kadar aldığını ölçmek ve çiftçileri hayvan gübresinden vazgeçirmek parçada Bosch'un işi olarak geçmiyor." },
    ] },

  // ---------- okuma 2 ----------
  { id: 'xf5-o2', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['grain'],
    level: 'zor', cefr: 'C1', title: "Meksika'dan Hindistan'a",
    text: "In the middle of the twentieth century, many experts feared that food production in parts of Asia would not keep pace with rapidly growing populations. One of the people who set out to change this was Norman Borlaug, a plant scientist working in Mexico. There he spent years crossing wheat varieties in search of plants that could resist a fungal disease that regularly ruined harvests. He also faced a less obvious problem. When traditional wheat was given plenty of fertiliser, it grew tall, and its heavy heads of grain made the stems bend and collapse before they could be cut. Borlaug's answer was to breed short, sturdy varieties that put more of their energy into the grain and less into the stalk. In the 1960s, these varieties were introduced in India and Pakistan, where wheat yields rose dramatically within a few years. The changes that followed came to be called the Green Revolution, and in 1970 Borlaug received the Nobel Peace Prize. The story, however, is not one of unmixed success. The new varieties gave their best results only with generous supplies of water and fertiliser, which tied farmers more closely to irrigation and to inputs they had to buy. In some regions, heavy pumping has lowered the water underground, and years of intensive farming are thought to have damaged soils. None of this erases the enormous rise in harvests, but it suggests that the next gains will have to be won more carefully.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'The passage states that traditional wheat varieties ----.',
        options: [
          'tended to fall over when they received a lot of fertiliser',
          'were naturally protected against the disease Borlaug studied',
          'were the varieties introduced in India in the 1960s',
          'produced more grain than the varieties Borlaug bred',
          'had been developed by Borlaug before he went to Mexico',
        ], answer: 0,
        explain: "Parçaya göre geleneksel buğdaya bol gübre verildiğinde boy atıyor ve ağır başakları sapları hasattan önce eğip çökertiyordu. Doğru seçenek bunu başka sözlerle söylüyor: çok gübre aldıklarında yatma eğilimindeydiler. Hastalığa karşı doğal olarak korunmuş olsalardı Borlaug dayanıklı bitki aramazdı. Hindistan'a getirilen, Borlaug'un yeni kısa çeşitleriydi. Yeni çeşitler enerjisini daha çok taneye verdiği için geleneksel buğdayın daha çok tane verdiği de parçaya ters düşer. Geleneksel buğdayı Borlaug geliştirmedi; o, Meksika'da yeni çeşitler üretti." },
      { konu: ['başlık'],
        q: 'Which of the following would be the most suitable title for the passage?',
        options: [
          'How Chemical Fertiliser Was First Invented',
          'A Disease That Destroyed the Wheat of Asia',
          'A Harvest Revolution and Its Hidden Costs',
          'Why Mexican Farmers Gave Up Growing Wheat',
          'The Childhood of a Nobel Prize Winner',
        ], answer: 2,
        explain: "Parçanın ilk yarısı yeni buğday çeşitlerinin hasatları nasıl büyük ölçüde artırdığını, ikinci yarısı da bu başarının bedellerini (suya ve gübreye bağımlılık, düşen yeraltı suyu, zarar gören toprak) anlatıyor. Bir hasat devrimini ve gizli bedellerini anan başlık ikisini birden kapsıyor. Kimyasal gübrenin icadı parçada yok. Hastalık parçada geçiyor ama Asya buğdayını yok ettiği söylenmiyor. Meksikalı çiftçilerin buğdayı bırakması ve Borlaug'un çocukluğu da parçada geçmiyor." },
      { konu: ['çıkarım'],
        q: 'One can conclude from the passage that ----.',
        options: [
          'the new varieties would have done just as well on dry, unfertilised land',
          'Borlaug was awarded the Nobel Prize before he began working in Mexico',
          'the Green Revolution put an end to the need for irrigation in Asia',
          'farmers short of water or money tended to gain less from the new wheat',
          'the fears of the experts mentioned at the start proved fully justified',
        ], answer: 3,
        explain: "Parçaya göre yeni çeşitler en iyi sonucu ancak bol su ve gübreyle veriyordu ve çiftçileri satın almak zorunda oldukları girdilere bağladı. Öyleyse suyu az olan ya da gübreye ve sulamaya para ayıramayan çiftçiler yeni buğdaydan daha az yararlanmış olmalı. Kuru ve gübresiz toprakta aynı verimi verecekleri bu cümleyle çelişir. Ödül 1970'te, Meksika'daki çalışmadan sonra geldi. Yeşil Devrim sulamayı ortadan kaldırmadı; tersine çiftçileri sulamaya daha çok bağladı. Uzmanların kaygısı da tam olarak doğrulanmadı; verimler birkaç yılda büyük ölçüde arttı." },
      { konu: ['yazarın tutumu'],
        q: "The writer's attitude towards the Green Revolution can best be described as ----.",
        options: [
          'appreciative but aware of its drawbacks',
          'openly hostile to its methods and aims',
          'indifferent to its effects on farmers',
          'wholly enthusiastic and uncritical',
          'mocking towards those who supported it',
        ], answer: 0,
        explain: "Yazar hasatlardaki büyük artışı yok saymıyor ('None of this erases the enormous rise in harvests'), ama öykünün katışıksız bir başarı olmadığını söylüyor ve bedellerini sıralıyor; sonraki kazanımların daha dikkatle elde edilmesi gerektiğini de ekliyor. Bu takdir eden ama sakıncaları gören bir tutumdur. Açıkça düşmanca bir tutum, yazarın artışı 'enormous' diye anmasıyla çelişir. Çiftçilere etkisine ilgisiz olduğu, bedelleri tek tek saymasıyla uyuşmaz. Tümüyle coşkulu ve eleştirisiz olduğu 'not one of unmixed success' ile çelişir. Destekçileriyle alay ettiği de parçada yok." },
    ] },

  // ---------- paragraf tamamlama ----------
  { id: 'xf5-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['plough', 'graze'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'In the 1930s, a long drought struck the Great Plains of the United States, a region where vast stretches of native grassland had been ploughed up for wheat in the decades before. ----. Without that protection, the dry topsoil was easily lifted by strong winds, and enormous dust storms swept across the region, at times darkening the sky for hours. The disaster, remembered as the Dust Bowl, drove many families to abandon their farms.',
    options: [
      'Wheat prices had risen sharply in those years, which encouraged farmers to plant even more of it',
      'The deep roots of the grasses had once held the earth in place, but most of that cover was now gone',
      'Many of the families who settled there had come from regions with a much wetter climate',
      'Cattle had grazed parts of the plains for decades, often on land that was too dry for crops',
      'Most of the rain in the region tends to fall in heavy storms in late spring and early summer',
    ], answer: 1,
    explain: "Boşluktan sonraki cümle 'Without that protection' (o koruma olmadan) diye başlıyor; demek ki boşlukta toprağı koruyan bir şeyden ve onun yok olmasından söz edilmeli. Çayır otlarının derin köklerinin toprağı yerinde tuttuğunu, ama bu örtünün artık büyük ölçüde gittiğini söyleyen cümle bunu sağlıyor ve ilk cümledeki çayırların sürülmesine de bağlanıyor. Buğday fiyatlarının artması, göçmenlerin yağışlı bölgelerden gelmesi, sığırların otlatılması ve yağışın mevsimi bir koruma anlatmıyor; 'that protection' hiçbirini göstermez." },
  { id: 'xf5-p2', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['soil', 'arable'],
    level: 'orta', cefr: 'B2', konu: ['gönderim'],
    q: 'Farmers and gardeners often treat soil as if it were an endless resource, yet nature replaces it at a remarkably slow pace. ----. This slow process begins when rock is broken down by frost, rain and the roots of plants, and it continues as the resulting particles mix with the remains of countless plants and animals. For this reason, soil that is washed or blown away in a single season may, in human terms, be lost for good.',
    options: [
      'Many crops grow best in soil that is neither too sandy nor too heavy with clay',
      'Some farmers test their fields every year to decide which fertiliser to buy',
      'Arable land, however, can quickly lose its best layer if it is left bare',
      'A fertile layer just a few centimetres deep may take centuries to form',
      'Plants take water and minerals from the ground through tiny hairs on their roots',
    ], answer: 3,
    explain: "Boşluktan sonraki cümle 'This slow process' (bu yavaş süreç) diye başlıyor ve kayanın parçalanmasından başlayan bir oluşumu anlatıyor. Demek ki boşlukta yavaş işleyen bir süreç, yani toprağın oluşması anılmalı: yalnız birkaç santimetre kalınlığındaki verimli bir katmanın oluşması yüzyıllar alabilir. Ekilebilir arazinin çıplak kalınca en iyi katmanını çabucak yitirmesi de topraktan söz ediyor ama hızlı bir kaybı anlatıyor; 'this slow process' onu gösteremez. Toprağın kumlu ya da killi olması, gübre seçmek için yapılan ölçümler ve köklerin su alması da bir oluşum süreci değildir." },
  { id: 'xf5-p3', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['staple', 'grain'],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    q: 'Over the course of history, humans have eaten thousands of different plant species. ----. Rice, wheat and maize, in particular, are thought to provide a large share of the calories that people consume worldwide. Such dependence has clear advantages, since these grains can be grown on a vast scale and stored for long periods. Yet it also carries a risk: a disease or a run of bad weather affecting just one of them could threaten the food supply of millions.',
    options: [
      'Many of these plants were gathered in the wild long before anyone began to farm',
      'Some of them, such as certain wild berries, can be poisonous if eaten raw',
      'Today, however, much of our energy comes from a surprisingly small number of staples',
      'Farmers in different regions have always grown the crops that best suit their climate',
      'Wheat was among the earliest of them to be cultivated, many thousands of years ago',
    ], answer: 2,
    explain: "İlk cümle insanların tarih boyunca binlerce bitki türü yediğini söylüyor; boşluktan sonraki cümle ise 'in particular' ile üç tahıla daralıyor ve ardından 'Such dependence' (böyle bir bağımlılık) geliyor. Demek ki boşlukta bir karşıtlık ve bir bağımlılık kurulmalı: bugün enerjimizin büyük bölümü şaşırtıcı ölçüde az sayıda temel besinden geliyor. Bitkilerin tarımdan önce yabanda toplanması, bazı yaban meyvelerinin zehirli olması ve her bölgenin iklimine uygun ekin yetiştirmesi bir bağımlılık anlatmıyor. Buğdayın en erken ekilen bitkilerden biri olması da üç tahılın 'in particular' ile öne çıkarılmasına ve 'Such dependence'a bağlanmıyor." },

  // ---------- akışı bozan cümle ----------
  { id: 'xf5-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['pest'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Vertical farms grow vegetables on shelves stacked one above another inside buildings, often in the middle of cities.',
      'Because the plants are indoors, they are sheltered from pests, storms and frost and can be harvested all year round.',
      'Water can also be collected and reused within the building, so such farms may need far less of it than fields outdoors.',
      'On the other hand, the plants depend largely on artificial light, and the electricity it requires can make the produce expensive.',
      'Many people who live in cities have never seen how the vegetables they eat every day are actually grown.',
    ], answer: 4,
    explain: "Parça dikey tarımı tanıtıyor ve artılarını, eksilerini sıralıyor: raflar binaların içinde üst üste dizilir (I); bitkiler zararlılardan, fırtınadan ve dondan korunur, yıl boyu hasat edilir (II); su binada toplanıp yeniden kullanılabilir (III); öte yandan bitkiler büyük ölçüde yapay ışığa bağlıdır ve elektrik gideri ürünü pahalılaştırabilir (IV). V. cümle de kentlerden ve sebzelerden söz ediyor, ama dikey tarımın artı ve eksilerinden kentlilerin sebzenin nasıl yetiştiğini bilmemesine kayıyor; IV. cümlenin açtığı maliyet konusunu sürdürmüyor ve akışı bozuyor." },
  { id: 'xf5-b2', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['manually'],
    level: 'kolay', cefr: 'B2', konu: ['akış'],
    sentences: [
      'A greenhouse allows growers to produce vegetables such as tomatoes and cucumbers even when the weather outside is cold.',
      'Cucumbers consist mostly of water, which is one reason why they are popular in summer salads.',
      'Its glass or plastic walls let sunlight in but slow down the escape of heat, so the air inside stays warm.',
      'Even so, growers must open the windows on hot days, because too much heat and moisture can harm the plants.',
      'Inside, many tasks, from tying up the stems to picking the ripe fruit, are still done manually.',
    ], answer: 1,
    explain: "Parça seranın nasıl çalıştığını anlatıyor: sera dışarısı soğukken de sebze yetiştirmeyi sağlar (I); cam ya da plastik duvarları ışığı içeri alır ama ısının kaçmasını yavaşlatır (III); yine de sıcak günlerde pencereler açılmalıdır (IV); içerideki birçok iş hâlâ elle yapılır (V). III. cümledeki 'Its' I. cümledeki seraya döner. II. cümle de salatalıktan söz ediyor, ama konuyu seradan salatalığın su oranına ve yaz salatalarına kaydırıyor; akışı bozan budur." },
  { id: 'xf5-b3', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    sentences: [
      'A considerable share of the food produced around the world is thought never to be eaten.',
      'In poorer countries, much of this loss happens early, when crops spoil in the field or in storage because of poor roads and a lack of cooling.',
      'In wealthier countries, by contrast, more food tends to be thrown away near the end of the chain, by shops and households.',
      'Cold storage also allows fruit to be sold in markets far from the place where it was grown.',
      'Cutting such waste could therefore ease the pressure on farmland without a single new field being cleared.',
    ], answer: 3,
    explain: "Parça gıda kaybını anlatıyor: üretilen besinin önemli bir bölümünün hiç yenmediği düşünülüyor (I); yoksul ülkelerde kayıp erkenden, tarlada ve depoda olur (II); varlıklı ülkelerde ise zincirin sonunda, dükkânlarda ve evlerde atılır (III); bu yüzden israfı azaltmak yeni tarla açmadan tarım arazisi üzerindeki baskıyı hafifletebilir (V). IV. cümle de soğuk depolamadan söz ediyor ve II. cümledeki soğutma eksikliğini çağrıştırıyor, ama konuyu kayıptan meyvenin uzak pazarlarda satılabilmesine kaydırıyor; V. cümledeki 'such waste' de IV'e değil I–III'teki kayba döner." },
];

export default { id: 'set-fen-5', course: C, title: U, order: 5, set: true, cards, items };
