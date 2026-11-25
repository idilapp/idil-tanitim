// iDil › Fen bilimleri › Deniz suyunu içilir kılmak.
// Tümü özgün: Claude yazdı (17 Kasım 2026, çoğaltma 3. tur, dalga B). ÖSYM sorusu, yayınevi, ders kitabı ya da gazete metni
// kopyalanmadı, uyarlanmadı. Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir.
// Biçim: ../README.md. Plan: ../analiz/cogaltma-3-plani.md §7.11.
// Olgular (plan §7.11 ve yerleşik bilgi; yalnız olgular, metin özgün). Her olgu tek öğede kullanıldı:
// - dünyadaki suyun yaklaşık %97'si tuzlu (fa-c4; "about");
// - iki ana yöntem: ısıl damıtma (buharlaştırıp yoğuşturma) ve ters ozmoz (basınçla yarı geçirgen zardan geçirme); yeni
//   tesislerin çoğu ters ozmoz kullanır, daha az enerji ister (fa-o1). Ön arıtma (kaba süzgeç, zarı temiz tutan kimyasallar),
//   zarların birkaç yılda bir değiştirilmesi ve ucuz ısının bulunduğu yerde (ör. santral yanı) damıtmanın sürmesi yerleşik
//   bilgi; sayı yazılmadı, "every few years", "for example" diye temkinli;
// - enerji: ters ozmoz metreküp başına yaklaşık 3–4 kWh (temkinli, "about"); nehir ya da göl suyunu taşıyıp arıtmaktan
//   fazla (fa-o2);
// - tuzlu atık: her litre tatlı su için yaklaşık bir buçuk litre (Jones ve ark. 2019; temkinli "estimated", "about");
//   denizden yoğun, dibe çöker ve yayılır; dipteki canlıları etkileyebilir; temizlik kimyasallarının izlerini taşıyabilir;
//   uzun boru ve hızlı karıştıran ağızlıklarla zarar azaltılabilir (yerleşik bilgi, "may", "can") (fa-o2);
// - arıtma kapasitesinin büyük bölümü Orta Doğu ve Kuzey Afrika'da; Suudi Arabistan en büyük üreticilerden (temkinli,
//   "is thought to be"); bazı Körfez ülkelerinde musluk suyunun büyük kısmı arıtılmış deniz suyu ("much of") (fa-b1);
// - kıyı akiferlerinden aşırı çekim → deniz suyu sızar, kuyular tuzlanır; düzelmesi uzun sürebilir ("may") (fa-b2);
// - gemilerde yüzyıllardır küçük damıtıcılar; Aristoteles'in buharlaşan deniz suyunun tatlılaştığını yazması (temkinli,
//   "is thought to have noted"); güneşli damıtıcının (solar still) düzeni ve düşük verimi ("only a few litres", sayı yok)
//   (fa-z1);
// - eski kentlerde arıtılmış suyun bir bölümünün sızıntılarla kaybolması (yerleşik bilgi, oran yazılmadı) (fa-p2); damla
//   sulama ve açık kanalla sulamanın kayıpları (yerleşik bilgi, sayı yok) (fa-p1).
// Öteki cümleler (köy kuyusu, kamp, tatil, filtre, baraj gölünün dolması) kurgusal ve genel.
// Görev 20 (25 Kasım 2026): çeviri çeldiricileri biçim kestirmesine karşı yeniden kuruldu.

const T = 'taslak';
const C = 'fen';
const U = 'Deniz suyunu içilir kılmak';

const cards = [
  // ---------- isim ----------
  { code: 'desalination', title: 'tuzdan arındırma, (deniz suyunu) arıtma', pos: 'isim', cefr: 'C1', ipa: '/diːˌsælɪˈneɪʃn/',
    text: "Deniz suyundan ya da tuzlu yeraltı suyundan tuzu ayırıp içilebilir ya da kullanılabilir su elde etme işi: a desalination plant (arıtma tesisi). Fiili 'desalinate', sıfat olarak 'desalinated water' (tuzu giderilmiş su). Kökte 'saline' (tuzlu) vardır; 'de-' öneki 'gidermek' anlamı katar.",
    example: 'The island used to bring in fresh water by ship, but since the desalination plant opened, it has produced its own.',
    exampleTr: 'Ada eskiden tatlı suyu gemiyle getirtirdi; arıtma tesisi açıldığından beri kendi suyunu üretiyor.',
    synonyms: ['desalting'], family: ['desalinate', 'desalinated'] },
  { code: 'brine', title: 'tuzlu su, salamura; (arıtmada) tuzlu atık su', pos: 'isim', cefr: 'C1', ipa: '/braɪn/',
    text: "İçinde çok tuz çözünmüş su. Mutfakta salamuradır: olives in brine (salamura zeytin). Arıtma tesislerinde tatlı su ayrıldıktan sonra geriye kalan, denizden çok daha tuzlu atık suya da 'brine' denir. Sayılamaz bir isimdir.",
    example: 'After the fresh water has been removed, the plant is left with brine, which is far saltier than the sea it came from.',
    exampleTr: 'Tatlı su ayrıldıktan sonra tesiste, alındığı denizden çok daha tuzlu bir atık su kalır.',
    synonyms: ['salt water'], family: ['briny'] },
  { code: 'membrane', title: 'zar; ince örtü, membran', pos: 'isim', cefr: 'C1', ipa: '/ˈmembreɪn/',
    text: "Canlıda bir hücreyi ya da organı saran ince doku: the cell membrane (hücre zarı). Teknikte, bazı maddeleri geçirip bazılarını tutan ince tabakadır: a semi-permeable membrane (yarı geçirgen zar). Ters ozmozda su bu zardan geçer, tuz geçemez.",
    example: 'In this method, seawater is pushed against a membrane that lets water through but holds back most of the salt.',
    exampleTr: 'Bu yöntemde deniz suyu, suyu geçiren ama tuzun çoğunu tutan bir zara doğru itilir.',
    synonyms: ['film', 'layer'], family: [] },
  { code: 'reservoir', title: 'baraj gölü, su haznesi; (bir şeyin) birikimi', pos: 'isim', cefr: 'C1', ipa: '/ˈrezəvwɑː/',
    text: "Bir yerleşimin suyunu sağlamak için suyun biriktirildiği yapay göl ya da depo. Mecaz olarak bir şeyin büyük birikimi anlamına da gelir: a reservoir of knowledge. Okunuşuna dikkat: sondaki '-voir' /vwɑː/ diye söylenir.",
    example: 'After three dry winters, the reservoir was so low that the roofs of the old village it had covered could be seen again.',
    exampleTr: 'Üç kurak kıştan sonra baraj gölü öyle alçalmıştı ki suyun altında kalan eski köyün damları yeniden görünür olmuştu.',
    synonyms: ['artificial lake', 'basin'], family: [] },
  { code: 'aquifer', title: 'akifer, yeraltı su katmanı', pos: 'isim', cefr: 'C1', ipa: '/ˈækwɪfə/',
    text: "Suyu içinde tutan ve kuyularla çekilebilen yeraltı kaya, kum ya da çakıl katmanı. Latince 'aqua' (su) ile 'ferre' (taşımak) sözcüklerinden gelir. Kıyı akiferlerinden fazla su çekilirse deniz suyu içeri sızabilir.",
    example: 'The farm has no river nearby, so all of its water comes from an aquifer about forty metres below the fields.',
    exampleTr: 'Çiftliğin yakınında nehir yok; bu yüzden bütün suyu, tarlaların yaklaşık kırk metre altındaki bir akiferden geliyor.',
    synonyms: ['groundwater layer'], family: [] },
  // ---------- fiil ----------
  { code: 'purify', title: 'arıtmak, saflaştırmak, temizlemek', pos: 'fiil', cefr: 'C1', ipa: '/ˈpjʊərɪfaɪ/',
    text: "Bir maddeden kiri, mikropları ya da zararlı maddeleri ayırıp onu temiz ve güvenli kılmak: purify water/air. 'Clean'den daha tekniktir. Adı 'purification' (arıtma), aracı 'purifier' (arıtıcı): an air purifier.",
    example: "Engineers purify the city's water in three stages before it is pumped to homes and schools.",
    exampleTr: 'Mühendisler kentin suyunu, evlere ve okullara pompalanmadan önce üç aşamada arıtıyor.',
    synonyms: ['clean', 'cleanse'], family: ['purification', 'purifier'] },
  { code: 'filter', title: 'süzmek, süzgeçten geçirmek; ayıklamak', pos: 'fiil', cefr: 'B2', ipa: '/ˈfɪltə/',
    text: "Bir sıvıyı ya da gazı, içindeki parçacıkları tutan bir şeyden geçirmek: filter water/coffee. Mecaz olarak istenmeyeni ayıklamaktır: filter out spam. Ad olarak 'süzgeç, filtre' demektir; adı 'filtration' (süzme).",
    example: 'We filter the rainwater from the roof through a layer of sand before it goes into the tank.',
    exampleTr: 'Çatıdan gelen yağmur suyunu depoya girmeden önce bir kum katmanından süzüyoruz.',
    synonyms: ['strain', 'sieve'], family: ['filtration'] },
  { code: 'evaporate', title: 'buharlaşmak; buharlaştırmak', pos: 'fiil', cefr: 'B2', ipa: '/ɪˈvæpəreɪt/',
    text: "Bir sıvının ısınarak gaza, buhara dönüşmesi: the water evaporated. Geçişli de kullanılır: evaporate seawater (deniz suyunu buharlaştırmak). Mecaz olarak umudun, öfkenin yok olup gitmesi. Adı 'evaporation' (buharlaşma).",
    example: 'If you leave a glass of salty water in the sun for a few days, the water evaporates and a thin crust of salt is left.',
    exampleTr: 'Bir bardak tuzlu suyu birkaç gün güneşte bırakırsanız su buharlaşır ve geriye ince bir tuz kabuğu kalır.',
    synonyms: ['vaporise', 'dry up'], family: ['evaporation'] },
  { code: 'condense', title: '(buhar) yoğuşmak, sıvılaşmak; yoğunlaştırmak', pos: 'fiil', cefr: 'C1', ipa: '/kənˈdens/',
    text: "Buharın ya da gazın soğuyarak sıvıya dönüşmesi: steam condenses on a cold window. Karşıtı 'evaporate'. Başka anlamı bir metni kısaltıp özünü korumaktır: condense a report. Adı 'condensation' (yoğuşma; camdaki buğu).",
    example: 'When you take a cold bottle out of the fridge on a hot day, water from the air condenses on the outside of it.',
    exampleTr: 'Sıcak bir günde buzdolabından soğuk bir şişe çıkardığınızda, havadaki su şişenin dış yüzeyinde yoğuşur.',
    synonyms: ['liquefy'], family: ['condensation'] },
  { code: 'discharge', title: '(sıvı, gaz) boşaltmak, salmak; taburcu etmek', pos: 'fiil', cefr: 'C1', ipa: '/dɪsˈtʃɑːdʒ/',
    text: "Bir sıvıyı ya da gazı bir yere bırakmak, akıtmak: discharge waste into a river (atığı nehre boşaltmak). Hastanede 'taburcu etmek' anlamına gelir: She was discharged from hospital. Ad olarak vurgu çoğu zaman baştadır: /ˈdɪstʃɑːdʒ/ (boşaltım, akıntı).",
    example: 'The factory was fined for discharging dirty water into the river without treating it first.',
    exampleTr: 'Fabrika, kirli suyu önce arıtmadan nehre boşalttığı için para cezasına çarptırıldı.',
    synonyms: ['release', 'empty'], family: [] },
  { code: 'irrigate', title: '(tarlayı) sulamak', pos: 'fiil', cefr: 'C1', ipa: '/ˈɪrɪɡeɪt/',
    text: "Ekinlerin büyümesi için tarlaya kanal, boru ya da yağmurlama ile su vermek: irrigate fields/crops. Bahçeyi hortumla sulamak için 'water' yeterlidir; 'irrigate' tarımsal ve geniş ölçeklidir. Adı 'irrigation' (sulama): drip irrigation (damla sulama).",
    example: 'Water from the river is used to irrigate the cotton fields along the valley.',
    exampleTr: 'Nehrin suyu, vadi boyunca uzanan pamuk tarlalarını sulamakta kullanılıyor.',
    synonyms: ['water'], family: ['irrigation'] },
  // ---------- sıfat ----------
  { code: 'arid', title: 'kurak, çorak', pos: 'sıfat', cefr: 'C1', ipa: '/ˈærɪd/',
    text: "Çok az yağmur alan, bu yüzden bitki örtüsü zayıf olan: an arid region/climate. 'Dry'dan daha resmî ve coğrafyaya özgüdür. Adı 'aridity' (kuraklık). 'Semi-arid' yarı kurak demektir.",
    example: 'Only a few hardy shrubs and lizards manage to survive on this arid plateau.',
    exampleTr: 'Bu kurak yaylada yalnız birkaç dayanıklı çalı ve kertenkele yaşamayı başarıyor.',
    synonyms: ['dry', 'parched'], family: ['aridity'] },
  { code: 'saline', title: 'tuzlu, tuz içeren', pos: 'sıfat', cefr: 'C1', ipa: '/ˈseɪlaɪn/',
    text: "İçinde tuz bulunan: saline water/soil (tuzlu su, tuzlu toprak). 'Salty' gündelik, 'saline' bilimsel sözcüktür. Tıpta isim olarak serum fizyolojiktir: a saline drip. Adı 'salinity' (tuzluluk).",
    example: 'Few crops can grow in saline soil, because the salt makes it hard for their roots to take up water.',
    exampleTr: 'Tuzlu toprakta pek az ürün yetişebilir, çünkü tuz köklerin su almasını güçleştirir.',
    synonyms: ['salty', 'briny'], family: ['salinity'] },
  { code: 'drinkable', title: 'içilebilir, içmeye uygun', pos: 'sıfat', cefr: 'B1', ipa: '/ˈdrɪŋkəbl/',
    text: "Sağlığa zarar vermeden içilebilen: drinkable water. Resmî ve teknik metinde 'potable' da kullanılır. Karşıtı 'undrinkable'. Gündelik dilde bir içeceğin 'idare eder, içilir' olduğunu da anlatır: The wine was drinkable.",
    example: 'After the flood, the tap water in the town was not drinkable for almost a week.',
    exampleTr: 'Selden sonra kasabadaki musluk suyu neredeyse bir hafta içilebilir değildi.',
    synonyms: ['potable', 'safe to drink'], family: ['undrinkable'] },
  { code: 'costly', title: 'pahalı, masraflı; (sonucu) ağır', pos: 'sıfat', cefr: 'B2', ipa: '/ˈkɒstli/',
    text: "Çok paraya mal olan: a costly repair. '-ly' ile bittiği hâlde zarf değil sıfattır. Mecaz olarak ağır bedeli olan: a costly mistake (pahalıya patlayan bir hata). Karşılaştırmada 'more costly' ya da 'costlier' denir.",
    example: 'Repairing the roof after the storm turned out to be far more costly than we had expected.',
    exampleTr: 'Fırtınadan sonra çatıyı onarmak, beklediğimizden çok daha masraflı çıktı.',
    synonyms: ['expensive', 'pricey'], family: [] },
  // ---------- zarf ----------
  { code: 'heavily', title: 'büyük ölçüde, yoğun biçimde; çok', pos: 'zarf', cefr: 'B2', ipa: '/ˈhevɪli/',
    text: "Bir şeyin derecesinin ya da miktarının çok yüksek olduğunu anlatır: rely heavily on (büyük ölçüde dayanmak), rain heavily (şiddetli yağmak), heavily polluted (çok kirlenmiş). Ağırlık bildirmez; 'ağır' için 'heavy' sıfatı kullanılır.",
    example: 'The small island relies heavily on tourism, so a bad summer hurts almost every family.',
    exampleTr: 'Küçük ada büyük ölçüde turizme dayanıyor; bu yüzden kötü geçen bir yaz neredeyse her aileyi etkiliyor.',
    synonyms: ['greatly', 'largely'], family: [] },
  // ---------- öbek fiil ----------
  { code: 'run low on', title: '(bir şey) azalmak, tükenmek üzere olmak', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌrʌn ˈləʊ ɒn/',
    text: "Elde bir şeyin pek az kaldığını anlatır; özne kişidir: We're running low on milk. Şey özne olursa 'on' düşer: Our supplies are running low. Tamamen bitince 'run out of' kullanılır.",
    example: "We're running low on petrol, so let's stop at the next station before it gets dark.",
    exampleTr: 'Benzinimiz azalıyor; hava kararmadan bir sonraki istasyonda duralım.',
    synonyms: ['be short of'], family: [] },
  { code: 'draw on', title: '(birikime, kaynağa) başvurmak, -den yararlanmak', pos: 'öbek fiil', cefr: 'C1', ipa: '/ˌdrɔː ˈɒn/',
    text: "Bir kaynaktan, birikimden ya da deneyimden yararlanmak, gerektiğinde ondan almak: draw on savings/reserves/experience. Nesne hep 'on'dan sonra gelir: draw on it. 'Draw upon' daha resmî biçimidir.",
    example: 'During the long dry season, the farm draws on the rainwater it stored in large tanks over the winter.',
    exampleTr: 'Uzun kurak mevsimde çiftlik, kış boyunca büyük depolarda biriktirdiği yağmur suyuna başvuruyor.',
    synonyms: ['make use of', 'rely on'], family: [] },
];

const items = [
  // ---------- kelime ----------
  { id: 'fa-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['arid', 'saline'],
    level: 'orta', cefr: 'C1', konu: ['sıfat'],
    q: 'The southern part of the country is so ---- that it sometimes goes two or three years without a single drop of rain.',
    options: ['saline', 'fertile', 'humid', 'arid', 'remote'], answer: 3,
    explain: "Cümle bölgenin bazen iki üç yıl hiç yağmur almadığını söylüyor; 'so … that' yapısı da boşluktaki sıfatın bu sonuca yol açmasını istiyor. Yağmurun çok az yağdığı yer 'arid' (kurak) bir yerdir. 'Saline' (tuzlu) toprağın ya da suyun tuz içerdiğini anlatır; yağmur almamanın nedeni olamaz. 'Fertile' (verimli) ve 'humid' (nemli) kuraklıkla çelişir. 'Remote' (uzak, ıssız) bir yerin uzaklığını anlatır; yağmursuzluğu açıklamaz." },

  { id: 'fa-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['purify', 'discharge'],
    level: 'orta', cefr: 'C1', konu: ['fiil'],
    q: 'Before there were treatment plants, many villagers used to boil their water for several minutes to ---- it and make it safe to drink.',
    options: ['dilute', 'discharge', 'freeze', 'purify', 'waste'], answer: 3,
    explain: "Köylüler suyu kaynatıyor ve amaç onu içmeye güvenli hâle getirmek. Kaynatarak mikroplardan arındırmak 'purify' (arıtmak) ile anlatılır. 'Discharge' (boşaltmak, salmak) suyu bir yere akıtmaktır; içmek için saklanan suyla anlam kurmaz. 'Dilute' (seyreltmek) başka bir sıvı katmayı gerektirir ve kaynatmayla yapılmaz. 'Freeze' (dondurmak) kaynatmayla çelişiyor. 'Waste' (israf etmek) ise suyu güvenli kılma amacına ters." },

  // ---------- dil bilgisi ----------
  { id: 'fa-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['reservoir'],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: '---- the heavy rain last winter, the reservoir that supplies our town is still only half full.',
    options: ['Because of', 'In spite of', 'Instead of', 'By means of', 'In addition to'], answer: 1,
    explain: "Kışın bol yağmur yağmış, ama baraj gölü hâlâ yarı yarıya dolu. Beklenene ters düşen bu ilişki 'in spite of' (… -e rağmen) ile kurulur; 'still' de karşıtlığı destekliyor. 'Because of' yağmuru gölün yarı boş kalmasının nedeni yapar; mantığa ters. 'Instead of' (… yerine) ve 'by means of' (… yoluyla) yağmurla gölün durumu arasında anlamlı bir ilişki kurmaz. 'In addition to' (… -e ek olarak) ise ardından eklenen bir bilgi bekler; karşıtlığı karşılamaz." },

  { id: 'fa-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['zaman'],
    q: 'The village well ---- dry since last summer, so people now have to carry water from the river.',
    options: ['has been', 'was', 'is', 'will be', 'had been'], answer: 0,
    explain: "'Since last summer' (geçen yazdan beri) geçmişte başlayıp bugüne süren bir durumu anlatır; cümlenin ikinci yarısındaki 'now' da bugünü gösteriyor. Bu anlam 'has been' (present perfect) ile kurulur: kuyu geçen yazdan beri kuru. 'Was' ve 'is' 'since' ile süreyi bugüne bağlayamaz. 'Will be' geleceği anlatır. 'Had been' geçmişteki başka bir andan önceyi anlatır; cümlede böyle bir an yok." },

  { id: 'fa-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'The engineer ---- design was chosen for the new plant had worked on similar projects in Spain.',
    options: ['who', 'which', 'where', 'whose', 'whom'], answer: 3,
    explain: "Boşluktan hemen sonra bir isim ('design') geliyor ve tasarım mühendise ait: tasarımı yeni tesis için seçilen mühendis. Sahiplik bildiren ilgi zamiri 'whose'tur. 'Who' ve 'which' cümlecikte özne ya da nesne olur; ardından doğrudan bir isim alamaz. 'Whom' nesne yerindeki kişi içindir; burada da arkasından isim gelemez. 'Where' bir yer bildirir; mühendis bir yer değil." },

  // ---------- boşluklu metin (5 boşluk) ----------
  { id: 'fa-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: ['evaporate', 'condense'],
    level: 'orta', cefr: 'B2', title: 'Güneşle damıtmadan gemilere',
    text: "People have known for a very long time that the sun can turn seawater into fresh water. The Greek philosopher Aristotle is thought to have noted that seawater which evaporates becomes sweet, leaving its salt behind. The idea behind a simple solar still has hardly changed (1) ---- then. Salty water is poured into a shallow black tray under a sloping sheet of glass or clear plastic. As the sun warms the tray, some of the water turns into vapour, which then (2) ---- on the cooler sheet and trickles down into a narrow channel. The salt cannot rise with the vapour, (3) ---- the drops that are collected are fresh. Sailors on long voyages faced a similar problem, and for centuries small stills heated by a fire (4) ---- on board some ships to provide drinking water. Such devices work, but they are far (5) ---- than modern plants: a solar still the size of a door may produce only a few litres on a sunny day.",
    steps: [
      { konu: ['edat'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['until', 'for', 'since', 'by', 'during'], answer: 2,
        explain: "Cümle present perfect ile kurulmuş ('has hardly changed') ve 'then' Aristoteles'in dönemine gönderme yapıyor: o zamandan beri pek değişmedi. Geçmişteki bir başlangıç noktasından bugüne uzanan süre 'since then' ile anlatılır. 'Until then' (o zamana kadar) ve 'by then' (o zamana gelindiğinde) geçmişte biten bir süreyi anlatır; bugüne uzanmaz. 'For' ardından bir süre ister ('for centuries'), bir zaman noktası değil. 'During then' İngilizcede kullanılmaz." },
      { konu: ['kelime', 'fiil'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['condenses', 'evaporates', 'dissolves', 'boils', 'freezes'], answer: 0,
        explain: "Su buhara dönüşmüş; buhar daha serin yüzeye değiyor ve damla damla kanala süzülüyor. Buharın soğuyup yeniden sıvıya dönmesi 'condense' (yoğuşmak) ile anlatılır. 'Evaporates' (buharlaşır) buharın zaten geçtiği bir aşamadır; sıvının aşağı akmasını açıklamaz. 'Boils' (kaynar) serin bir yüzeyde olmaz. 'Freezes' (donar) güneş altındaki bir düzenekte beklenmez ve donan su akmaz. 'Dissolves' (çözünür) bir maddenin sıvıya karışmasıdır; buhar için anlam kurmaz." },
      { konu: ['bağlaç'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['because', 'so', 'unless', 'although', 'whereas'], answer: 1,
        explain: "İlk bölüm bir neden veriyor (tuz buharla birlikte yükselemez), ikinci bölüm de onun sonucunu (toplanan damlalar tatlıdır). Nedenden sonuca geçiş 'so' (bu yüzden) ile kurulur. 'Because' sırayı tersine çevirir: damlaların tatlı olması tuzun yükselememesinin nedeni olur. 'Although' ve 'whereas' iki bölüm arasında olmayan bir karşıtlık kurar. 'Unless' (… -medikçe) ise bir koşul bildirir ve cümleye anlam vermez." },
      { konu: ['edilgen'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['used', 'have used', 'were using', 'were used', 'had used'], answer: 3,
        explain: "Cümlenin öznesi 'small stills heated by a fire' (ateşle ısıtılan küçük damıtıcılar). Damıtıcılar kendileri bir şey kullanmaz; denizciler tarafından kullanılır. Boşluktan sonra nesne de yok. Bu yüzden edilgen ve geçmiş zamanlı 'were used' gerekir. 'Used', 'were using' ve 'had used' etkendir; damıtıcıları kullanan yapar ve bir nesne ister. 'Have used' hem etken hem de 'for centuries' ile anlatılan geçmiş bağlamla uyuşmuyor." },
      { konu: ['karşılaştırma'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['less productive', 'more productive', 'more reliable', 'less wasteful', 'larger'], answer: 0,
        explain: "İki noktadan sonraki bölüm karşılaştırmanın ne olduğunu açıklıyor: kapı büyüklüğündeki bir damıtıcı güneşli bir günde yalnız birkaç litre su üretebilir. Bu, modern tesislere göre çok daha az ürettiklerini gösterir: 'far less productive'. 'More productive' anlamı tersine çeviriyor. 'Larger' kapı büyüklüğündeki bir düzenekle çelişiyor. 'More reliable' ve 'less wasteful' cümlenin başındaki 'but' ile gelen çekinceye uymuyor; iki noktadan sonraki bilgi de güvenilirliği ya da israfı değil, düşük üretimi anlatıyor." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'fa-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['costly'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'A pipeline from the mountains would bring clean water to the valley, ----.',
    options: [
      'so the villagers there have always depended on that pipeline',
      'because the valley already has more clean water than it needs',
      'whereas the water up in the mountains is full of salt and mud',
      'but the council has turned the plan down as far too costly',
      'and the valley has therefore never had to worry about drought',
    ], answer: 3,
    explain: "'Would bring' boru hattının henüz yapılmadığını, yalnız bir olasılık olduğunu gösteriyor. Bu olumlu olasılığa bir engel ekleyen karşıtlık cümleyi tamamlar: belediye planı fazla masraflı bulup reddetti. Köylülerin hep o boru hattına dayandığını söyleyen seçenek, henüz var olmayan bir hattı varmış gibi anlatıyor. Vadinin zaten fazla suyu olması, hattın neden düşünüldüğünü açıklamıyor; tersine onu gereksiz kılıyor. 'Whereas' de bir karşıtlık kurar, ama dağdaki suyun tuzlu ve çamurlu olduğu bilgisi 'clean water' ile çelişiyor. Kalan yanlış seçenek de varsayımsal bir hattı geçmişteki bir sonuca bağlıyor." },

  { id: 'fa-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['koşul'],
    q: '----, we will have to drive to the next village to fill our bottles.',
    options: [
      'Since the well at the campsite has plenty of water',
      'If the old well at the campsite runs dry',
      'Unless the water from the well tastes salty',
      'Although there is a clean spring next to our tent',
      'When we had filled all our bottles at the well',
    ], answer: 1,
    explain: "Ana cümle gelecekte yapılması gerekebilecek bir işi söylüyor: şişeleri doldurmak için öteki köye gitmek. Bunun nedeni kamp yerinde su kalmaması olabilir; bu da 'if' ile kurulan bir koşuldur: kamp yerindeki kuyu kurursa. Kuyuda bol su olduğunu söyleyen seçenek ve çadırın yanında temiz bir kaynak olduğunu söyleyen seçenek, başka köye gitmeyi gereksiz kılıyor. 'Unless' ile kurulan seçenek ters bir sonuç verir: su tuzlu değilse gitmek zorunda kalırız. Kalan yanlış seçenek geçmiş zamanlıdır ('had filled') ve gelecekle uyuşmuyor; şişeler zaten doluysa da yolculuğa gerek kalmaz." },

  { id: 'fa-t3', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['irrigate'],
    level: 'orta', cefr: 'B2', konu: ['neden-sonuç'],
    q: 'Because the farmers had irrigated their fields day and night throughout the drought, ----.',
    options: [
      'the lake was fuller that August than it had been for years',
      'they were praised for using so little water that summer',
      'the drought came to an end far sooner than anyone expected',
      'they will save a great deal of water when it rains next year',
      'the river that fed the lake had almost dried up by August',
    ], answer: 4,
    explain: "'Because' ile verilen neden şu: çiftçiler kuraklık boyunca tarlalarını gece gündüz sulamış. Bunun mantıklı sonucu suyun azalmasıdır: gölü besleyen nehir ağustosa kadar neredeyse kurumuştu. Gölün yıllardır olmadığı kadar dolu olması bu nedenle çelişiyor. Çiftçilerin az su kullandıkları için övülmesi de gece gündüz sulamayla çelişiyor. Kuraklığın erken bitmesi sulamanın sonucu olamaz. Kalan yanlış seçenek gelecekten söz ediyor ve geçmişteki nedene bağlanmıyor." },

  { id: 'fa-t4', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['heavily', 'desalination'],
    level: 'zor', cefr: 'C1', konu: ['karşıtlık'],
    q: '----, the coastal town still relies heavily on water brought in by lorries during the summer months.',
    options: [
      'Because its new plant produces more water than the town can ever use',
      'Despite the opening of a large desalination plant two years ago',
      'Since the town has never been short of fresh water in summer',
      'As a result of the heavy rain that falls there all summer long',
      'Even if a desalination plant were to open beside the harbour',
    ], answer: 1,
    explain: "Ana cümledeki 'still' (hâlâ) beklenene ters bir durum anlatıldığını gösteriyor: kasaba yazın hâlâ kamyonla getirilen suya büyük ölçüde dayanıyor. Bunu tamamlayan, böyle bir şeyin beklenmeyeceği bir olgudur: iki yıl önce büyük bir arıtma tesisi açılmasına rağmen. Tesisin gereğinden fazla su ürettiğini, kasabanın yazın hiç susuz kalmadığını ve bütün yaz bol yağmur yağdığını söyleyen seçenekler kamyonla su getirmeyi açıklamak bir yana onunla çelişiyor. 'Even if' de bir karşıtlık kurar, ama gelecekteki varsayımsal bir durumdan söz eder; ana cümle ise bugünkü gerçek bir durumu anlatıyor ve 'still' ile bu varsayıma bağlanmıyor." },

  // ---------- çeviri: İngilizceden Türkçeye ----------
  { id: 'fa-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['aquifer'],
    level: 'orta', cefr: 'B2', konu: ['edilgen'],
    q: 'Much of the water used in the region is pumped from an aquifer that lies deep beneath the desert.',
    options: [
      'Bölgede kullanılan suyun bir kısmı, çölün çok altında yer alan bir akiferden pompalanırdı.',
      'Bölgede kullanılan suyun büyük kısmı, çölün hemen altında yer alan bir akiferden pompalanıyor.',
      'Bölgede kullanılan suyun bir kısmı, çölün çok altında yer alan bir akiferden pompalanıyor.',
      'Bölgede kullanılan suyun büyük kısmı, çölün çok altında yer alan bir akiferden pompalanıyor.',
      'Bölgede kullanılan suyun bir kısmı, çölün hemen altında yer alan bir akiferden pompalanıyor.',
    ], answer: 3,
    explain: "Cümle edilgendir: bölgede kullanılan suyun büyük kısmı ('much of the water') bir akiferden pompalanıyor ('is pumped from'); akifer de çölün çok altında yer alıyor ('lies deep beneath the desert'). Doğru çeviri niceliği, derinliği ve geniş zamanı korur. 'Bir kısmı … çok altında … pompalanıyor' diyen çeviride 'much of' büyük kısım yerine sıradan bir kısma inmiş. 'Pompalanırdı' ile biten seçenek niceliği daraltıyor ve bugünkü durumu geçmişte kalmış bir alışkanlık gibi anlatıyor. Akiferi 'hemen altında' gösterip 'büyük kısmı' diyen çeviri derinliği bozuyor: 'deep beneath' çok derinde demektir. Suyun bir kısmının hemen alttaki bir akiferden geldiğini söyleyen seçenekte hem nicelik hem derinlik yanlış." },

  { id: 'fa-c2', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['saline', 'evaporate'],
    level: 'orta', cefr: 'B2', konu: ['neden-sonuç'],
    q: 'Because the lake has no outlet to the sea and loses water only through evaporation, it has slowly become more saline than the ocean itself.',
    options: [
      'Denize çıkışı olmadığından ve yalnız buharlaşma yoluyla su kaybettiğinden göl, yavaş yavaş okyanustan bile daha tuzlu hâle gelecek.',
      'Denize çıkışı olmadığından ve yalnız buharlaşma yoluyla su kaybettiğinden göl, yavaş yavaş okyanustan bile daha tuzlu hâle geldi.',
      'Denize çıkışı olmadığından ve buharlaşma yoluyla da su kaybettiğinden göl, yavaş yavaş okyanus kadar tuzlu hâle geldi.',
      'Denize çıkışı olmadığından ve yalnız buharlaşma yoluyla su kaybettiğinden göl, yavaş yavaş okyanus kadar tuzlu hâle geldi.',
      'Denize çıkışı olmadığından ve yalnız buharlaşma yoluyla su kaybettiğinden göl, yavaş yavaş okyanus kadar tuzlu hâle gelecek.',
    ], answer: 1,
    explain: "'Because' iki neden veriyor: gölün denize çıkışı yok ve göl suyunu yalnız buharlaşmayla kaybediyor. Sonuç 'has slowly become more saline than the ocean itself': göl yavaş yavaş okyanusun kendisinden bile daha tuzlu hâle geldi. 'Okyanus kadar tuzlu hâle geldi' diyen çeviri üstünlük karşılaştırmasını ('more saline than') eşitliğe çeviriyor. 'Buharlaşma yoluyla da' ifadesi 'only' kısıtını kaldırıyor; bu seçenek tuzluluğu ayrıca okyanusla eşitliyor. 'Okyanustan bile daha tuzlu hâle gelecek' seçeneğinde karşılaştırma yerinde, ama 'has become' ile anlatılan, olmuş bir değişim geleceğe taşınmış. 'Okyanus kadar tuzlu hâle gelecek' diyen çeviride hem karşılaştırmanın türü hem zaman bozuk." },

  { id: 'fa-c3', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['draw on'],
    level: 'zor', cefr: 'C1', konu: ['koşul'],
    q: 'Should the autumn rains fail again, the town will have no choice but to draw on its emergency wells for a second year running.',
    options: [
      'Sonbahar yağmurları yine gelmeseydi kasaba, acil durum kuyularına üst üste ikinci yıl başvurmayı düşünebilirdi.',
      'Sonbahar yağmurları yine gelmeseydi kasabanın acil durum kuyularına üst üste ikinci yıl başvurmaktan başka çaresi kalmazdı.',
      'Sonbahar yağmurları yine gelmezse kasabanın acil durum kuyularına üst üste ikinci yıl başvurmaktan başka çaresi kalmaz.',
      'Sonbahar yağmurları yine gelmezse kasaba, acil durum kuyularına üst üste ikinci yıl başvurmayı düşünebilir.',
      'Sonbahar yağmurları yine gelmeseydi kasabanın acil durum kuyularına üst üste üçüncü yıl başvurmaktan başka çaresi kalmazdı.',
    ], answer: 2,
    explain: "'Should the autumn rains fail' devrik bir koşul cümlesidir ('If the autumn rains should fail'): sonbahar yağmurları yine gelmezse. Gelecekte gerçekleşebilecek bir koşuldur; ana cümle de 'will have no choice but to' ile kaçınılmaz bir sonucu anlatır: kasabanın acil durum kuyularına başvurmaktan başka çaresi kalmaz. 'Gelmeseydi … çaresi kalmazdı' biçimi gerçek bir olasılığı gerçekleşmemiş bir varsayıma çeviriyor. 'Üçüncü yıl' diyen seçenekte bu varsayıma yanlış bir sayı eklenmiş; 'for a second year running' üst üste ikinci yıl demektir. 'Başvurmayı düşünebilirdi' ile biten çeviri varsayımın yanında zorunluluğu da bir seçeneğe indiriyor. Koşulu 'gelmezse' diye doğru kurup 'başvurmayı düşünebilir' diyen çeviride ise 'no choice but' zorunluluğu kaybolmuş." },

  // ---------- çeviri: Türkçeden İngilizceye ----------
  { id: 'fa-c4', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['drinkable'],
    level: 'kolay', cefr: 'B1', konu: ['nicelik'],
    q: "Dünyadaki suyun yaklaşık yüzde 97'si tuzludur; bu yüzden içmeye uygun değildir.",
    options: [
      'About 97 per cent of the water on Earth is salty, so it is not drinkable.',
      'About 97 per cent of the water on Earth is in the oceans, so it is not drinkable.',
      'About 97 per cent of the water on Earth is in the oceans, so it is costly to make drinkable.',
      'About 97 per cent of the water on Earth is in the oceans, so it is not used in farming.',
      'About 97 per cent of the water on Earth is salty, so it is costly to use.',
    ], answer: 0,
    explain: "Türkçe cümle iki bilgi veriyor: dünyadaki suyun yaklaşık yüzde 97'si tuzlu ve bu yüzden içmeye uygun değil. Doğru seçenek niceliği 'about 97 per cent of the water', niteliği 'is salty', sonucu 'so it is not drinkable' ile verir. 'Is in the oceans, so it is not drinkable' diyen seçenek 'tuzludur' yerine suyun nerede bulunduğunu söylüyor. 'Is in the oceans, so it is costly to make drinkable' hem niteliği hem sonucu değiştiriyor: içilemezlik yerine suyu içilir hâle getirmenin pahalılığından söz ediyor. 'Is in the oceans, so it is not used in farming' okyanus bilgisine bir tarım sonucu bağlıyor. 'Is salty, so it is costly to use' niteliği doğru veriyor, ama sonucu içmeye uygun olmamaktan kullanımın pahalı olmasına kaydırıyor." },

  { id: 'fa-c5', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['filter'],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: 'Yeni cihaz, eskisinin iki katı kadar su süzebiliyor ama onun kadar uzun dayanmıyor.',
    options: [
      'The new unit can filter half as much water as the old one, and it lasts just as long.',
      'The new unit can filter twice as much water as the old one, but it does not last as long.',
      'The new unit has to filter twice as much water as the old one, but it does not last as long.',
      'The new unit has to filter twice as much water as the old one, and it lasts just as long.',
      'The new unit can filter twice as much water as the old one, and it lasts just as long.',
    ], answer: 1,
    explain: "Türkçe cümlede iki karşılaştırma var: yeni cihaz eskisinin iki katı kadar su süzebiliyor ('twice as much water as the old one') ama onun kadar uzun dayanmıyor ('does not last as long'). Doğru seçenek bunları 'but' ile bağlar. 'Can filter twice as much … and it lasts just as long' diyen çeviri dayanıklılıkta bir eşitlik kurup karşıtlığı yok ediyor. 'Half as much water' ifadesinde miktar iki kattan yarıya inmiş, dayanıklılık da eşitlenmiş. 'Has to filter … but it does not last as long' seçeneği karşıtlığı doğru kuruyor, ama 'süzebiliyor' yeteneğini bir zorunluluğa çeviriyor. Zorunluluktan söz edip dayanıklılığı eşit gösteren çeviride kip de karşılaştırma da yanlış." },

  { id: 'fa-c6', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['reservoir'],
    level: 'zor', cefr: 'C1', konu: ['edilgen'],
    q: 'Kentin ana baraj gölünün, her yıl içinde biriken çamur yüzünden yüzyılın sonuna kadar kapasitesinin yarısını yitirmiş olacağı tahmin ediliyor.',
    options: [
      "The city's main reservoir is expected to have lost half its capacity by the end of the decade due to mud building up in it each year.",
      "The city's main reservoir is expected to have lost a quarter of its capacity by the end of the century due to mud building up in it each year.",
      "The city's main reservoir was expected to have lost half its capacity by the end of the decade due to mud building up in it each year.",
      "The city's main reservoir is expected to have lost a quarter of its capacity by the end of the decade due to mud building up in it each year.",
      "The city's main reservoir is expected to have lost half its capacity by the end of the century due to mud building up in it each year.",
    ], answer: 4,
    explain: "Türkçe cümle bir tahmin bildiren edilgen yapıdır ('… tahmin ediliyor'); İngilizcede 'is expected to' ile verilir. Tahmin edilen şey gelecekte bir noktaya kadar tamamlanmış olacak bir kayıptır: 'to have lost half its capacity by the end of the century'; nedeni her yıl biriken çamur. 'Half its capacity by the end of the decade' diyen seçenekte süre yüzyıldan on yıla inmiş. 'Was expected' ile başlayan çeviri bugünkü tahmini geçmişte yapılmış bir tahmine çeviriyor ve süreyi on yıla indiriyor. 'A quarter of its capacity by the end of the century' seçeneğinde süre yerinde, ama kayıp yarıdan çeyreğe düşmüş. Kapasitenin çeyreğinin on yıl içinde yitirileceğini söyleyen çeviride hem kayıp hem süre yanlış." },

  // ---------- okuma parçası (4 soru, YDS biçimi) ----------
  { id: 'fa-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['membrane'],
    level: 'orta', cefr: 'B2', title: 'Deniz suyundan içme suyuna',
    text: "There are two main ways of turning seawater into fresh water. The older one, thermal distillation, copies what the sun does to the oceans. Seawater is heated until part of it becomes vapour; the vapour, which leaves the salt behind, is then cooled until it turns back into liquid. Large plants recover some of the heat and use it again, but boiling huge quantities of water still demands a great deal of fuel. The second method, reverse osmosis, works in a completely different way. Instead of changing water into vapour, it forces seawater at high pressure against a membrane, a thin sheet whose pores are so tiny that water molecules can pass through them while most of the dissolved salt cannot. Because no boiling is involved, this method generally needs much less energy, and most of the plants built in recent decades have used it. It is not without difficulties, though. Seawater carries sand, algae and bacteria, and if these were allowed to reach the membranes, they would soon clog them. For that reason, the water is first passed through coarser filters, and chemicals are often added to keep the membranes clean. Even so, the membranes wear out and must be replaced every few years. Distillation has not disappeared: it is still chosen where cheap heat is available, for example next to power stations whose waste heat would otherwise be lost.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, in reverse osmosis, seawater ----.',
        options: [
          'is heated until most of the salt has been turned into vapour',
          'is mixed with a little fresh water before it reaches the pump',
          'loses its salt mainly because chemicals are added to it early on',
          'is stored for several days so that the sand can sink to the bottom',
          'is pressed hard against a thin sheet that holds back most salt',
        ], answer: 4,
        explain: "Parçaya göre ters ozmozda deniz suyu yüksek basınçla bir zara doğru itilir; zarın gözenekleri su moleküllerini geçirir, çözünmüş tuzun çoğunu tutar. Doğru seçenek bunu başka sözlerle söylüyor: zarı 'tuzun çoğunu tutan ince bir tabaka', yüksek basıncı 'pressed hard' diye veriyor. Isıtma damıtmanın işidir; üstelik buhara dönüşen tuz değil sudur. Suya biraz tatlı su katılması ve kumun dibe çökmesi için günlerce bekletilmesi parçada geçmiyor. Kimyasallar tuzu gidermek için değil, zarları temiz tutmak için ekleniyor; tuzu zar ayırıyor." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that distillation is still used in some places because ----.',
        options: [
          'its membranes need replacing less often than other kinds',
          'its main drawback matters less where heat costs very little',
          'power stations need the water it produces to keep cool',
          'it uses far less energy than reverse osmosis in most cases',
          'it can remove the sand and bacteria that membranes cannot',
        ], answer: 1,
        explain: "Parça damıtmanın büyük eksiğini söylüyor: çok miktarda suyu kaynatmak çok yakıt ister. Sonra damıtmanın ucuz ısının bulunduğu yerlerde, örneğin santrallerin yanında hâlâ seçildiğini ekliyor. Buradan, ısı ucuz olunca damıtmanın asıl zayıf yanının önemini yitirdiği çıkar. Damıtmada zar kullanılmaz; zar ters ozmozun parçasıdır. Santrallerin soğumak için bu suya ihtiyaç duyduğu parçada geçmiyor; parça santralin atık ısısından söz ediyor. Damıtmanın daha az enerji harcadığını söyleyen seçenek parçayla çelişiyor. Kum ve bakteriyi zarın tutamadığı da parçada yok; onları zara ulaşmadan süzgeçler tutuyor." },
      { konu: ['gönderim'],
        q: "The word 'these' in the passage refers to ----.",
        options: [
          'the membranes that separate the salt from the water',
          'the tiny pores through which water molecules pass',
          'the particles and organisms carried by seawater',
          'the chemicals that keep the membranes clean',
          'the coarser filters that are used first',
        ], answer: 2,
        explain: "'These' parçada tek bir yerde geçiyor: 'Seawater carries sand, algae and bacteria, and if these were allowed to reach the membranes, they would soon clog them.' Zarlara ulaşırsa onları tıkayacak olan şey, hemen önce sayılan kum, alg ve bakteridir; yani deniz suyunun taşıdığı parçacıklar ve canlılar. Zarlar cümlede 'them' ile karşılanıyor; 'these' zarlara ulaşan şeydir, zarların kendisi olamaz. Gözenekler, kimyasallar ve süzgeçler ya önceki ya sonraki cümlelerde geçiyor ve zarları tıkayan şey değil." },
      { konu: ['ana fikir'],
        q: 'The passage is mainly concerned with ----.',
        options: [
          'why reverse osmosis has completely replaced distillation',
          'the damage that desalination plants cause to life in the sea',
          'how the first plants were built near power stations',
          'how membranes are produced and why they wear out',
          'how two ways of removing salt work and what each needs',
        ], answer: 4,
        explain: "Parça deniz suyundan tatlı su elde etmenin iki yolunu anlatıyor: damıtmanın nasıl çalıştığı ve çok yakıt istediği, ters ozmozun nasıl çalıştığı, neden daha az enerji harcadığı ve hangi bakımları gerektirdiği. Bu bütünü 'iki yöntemin nasıl çalıştığı ve her birinin neye ihtiyaç duyduğu' karşılar. Ters ozmozun damıtmanın yerini tamamen aldığı parçayla çelişiyor; son cümle damıtmanın sürdüğünü söylüyor. Tesislerin deniz canlılarına verdiği zarar parçada hiç yok. İlk tesislerin santrallerin yanına kurulduğu da geçmiyor. Zarların yıpranması yalnız bir ayrıntı; üretimleri ise anlatılmıyor." },
    ] },

  // ---------- okuma parçası (3 soru, YÖKDİL biçimi) ----------
  { id: 'fa-o2', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['brine', 'discharge'],
    level: 'zor', cefr: 'C1', title: 'Arıtma, tuzlu atık ve enerji',
    text: "Turning seawater into drinking water has a price that does not appear on anyone's water bill. A study published in 2019 estimated that, for every litre of fresh water they deliver, the world's desalination plants leave behind about one and a half litres of brine, water so salty that it is denser than the sea around it. Most of this brine is discharged back into the sea, often close to the shore. Being heavy, it tends to sink and creep along the seabed instead of mixing, and in calm, shallow bays it may form a layer in which plants and animals living on the bottom struggle to survive. It may also carry traces of the chemicals used to keep the equipment clean. The damage can be reduced by releasing the brine through long pipes fitted with nozzles that mix it rapidly with seawater, but such measures add to the bill. Energy is the other hidden cost. Even efficient plants need a few kilowatt-hours of electricity, about three to four, to produce a cubic metre of water, considerably more than it usually takes to move and treat water from a river or a lake. Where that electricity comes from burning oil or gas, every glass of desalinated water adds a little to the warming of the climate, which in turn may make droughts more common. None of this means that desalination should be abandoned; for some dry regions there is no realistic alternative. It does mean that its true costs deserve to be counted honestly.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the brine released near the shore can be harmful mainly because ----.',
        options: [
          'it weighs more than seawater and so stays down near the bottom',
          'it is usually much warmer than the seawater into which it is being released',
          'it carries large amounts of sand, algae and bacteria away from the plant',
          'it is released through long pipes that reach far out to sea',
          'it is pumped into the rivers that flow into the shallow bays',
        ], answer: 0,
        explain: "Parçaya göre tuzlu atık su çevresindeki denizden daha yoğundur; bu yüzden karışmak yerine dibe çöküp deniz tabanında yayılır ve sakin, sığ koylarda dipte yaşayan canlıların zorlandığı bir katman oluşturabilir. Doğru seçenek bunu 'deniz suyundan ağır olduğu için dipte kalır' diye veriyor. Atık suyun daha sıcak olduğu ve kum ile bakteri taşıdığı parçada geçmiyor; parça yalnız kimyasal izlerinden söz ediyor. Uzun borular zararın nedeni değil, onu azaltmanın yoludur. Atık suyun nehirlere pompalandığı da parçada yok." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that a plant powered by electricity from oil or gas ----.',
        options: [
          'produces water more cheaply than a river or a lake can',
          'leaves behind much less brine than other kinds of plant',
          'does not need to release its brine through long pipes',
          'may worsen the very problem it is meant to help solve',
          'is the only realistic choice left for all dry regions',
        ], answer: 3,
        explain: "Parçaya göre elektrik petrol ya da gaz yakılarak üretiliyorsa her bardak arıtılmış su iklimin ısınmasına biraz katkıda bulunur; bu da kuraklıkları daha sık hâle getirebilir. Arıtma tesisi su kıtlığını gidermek için kurulduğuna göre, böyle bir tesis çözmeye çalıştığı sorunu ağırlaştırabilir. Arıtmanın nehir ya da göl suyundan daha ucuz olduğunu söyleyen seçenek parçayla çelişiyor; enerji ihtiyacı daha fazla. Bu tür tesislerin daha az atık bıraktığı ve uzun borulara ihtiyaç duymadığı parçada geçmiyor. Parça bazı kurak bölgeler için gerçekçi bir seçenek olmadığını söylüyor; bütün kurak bölgeler için değil." },
      { konu: ['yazarın tutumu'],
        q: "The author's attitude towards desalination can best be described as ----.",
        options: [
          'firmly opposed, since the harm it does is greater than its benefits',
          'accepting that it is needed while insisting that its costs be admitted',
          'enthusiastic, as new technology has already solved its main problems',
          'indifferent, because its costs are paid mostly by other countries',
          'unsure, since there is still too little research to judge it fairly',
        ], answer: 1,
        explain: "Yazar arıtmanın gizli bedellerini, yani tuzlu atığı ve enerjiyi anlatıyor; ama sonunda bunun arıtmadan vazgeçilmesi gerektiği anlamına gelmediğini, bazı kurak bölgeler için gerçekçi bir seçenek olmadığını söylüyor. Son cümlede de gerçek bedellerin dürüstçe hesaba katılması gerektiğini vurguluyor. Bu tutum 'gerekli olduğunu kabul eden ama bedellerinin açıkça kabul edilmesini isteyen' bir tutumdur. Kesin karşı çıkış, yazarın arıtmanın bırakılmamasını söylemesiyle çelişiyor. Yazar sorunların çözüldüğünü düşünmüyor; ilgisiz ya da kararsız da değil. Bedellerin başka ülkelere yüklendiği ve araştırmanın yetersiz olduğu da parçada geçmiyor." },
    ] },

  // ---------- diyalog tamamlama ----------
  { id: 'fa-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['drinkable', 'run low on'],
    level: 'kolay', cefr: 'B1', konu: ['bağlam'],
    q: "Ece: Phew, it's so hot today. I've finished my water already.\nBen: Me too. Do you think it's OK to drink the water from the tap here?\nEce: ----\nBen: Right. Then let's pick up a few big bottles on our way back from the beach.",
    options: [
      "Of course it is. People here drink it every day, and nobody gets ill.",
      "I don't think so. Luckily, there are still six full bottles in the fridge in our room.",
      "I've already had some. It tasted fine, and I haven't felt ill at all.",
      "Yes, it is. The sign in the bathroom says it's perfectly safe to drink.",
      "Better not. The sign says it isn't drinkable, and we're running low on bottles.",
    ], answer: 4,
    explain: "Ben'in son sözü ('Peki. O zaman plajdan dönerken birkaç büyük şişe alalım.') iki şey gösteriyor: musluk suyu içilmemeli ve ellerindeki şişe su azalmış. Bunu ikisini birden söyleyen cevap karşılar: tabela suyun içilebilir olmadığını söylüyor ve şişelerimiz azalıyor. Buzdolabında hâlâ altı dolu şişe olduğunu söyleyen cevap da suyun içilmemesi gerektiğini söylüyor, ama o zaman yeni şişe almaya gerek kalmaz. Suyun güvenli olduğunu söyleyen ya da zaten içip bir şey olmadığını anlatan cevaplardan sonra şişe su almak için bir neden kalmıyor." },

  // ---------- anlamca en yakın cümle ----------
  { id: 'fa-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: ['reservoir'],
    level: 'orta', cefr: 'B2', konu: ['olumsuzluk'],
    q: 'Hardly any of the rain that falls on the island ends up in its reservoirs.',
    options: [
      'Most of the rain that falls on the island is stored in its reservoirs.',
      "None of the island's rainfall is ever collected in its reservoirs.",
      "Only a tiny fraction of the island's rainfall is collected in its reservoirs.",
      "Hardly any of the island's reservoirs can hold all the rain that falls there.",
      'The rain that falls on the island hardly ever reaches its reservoirs in time for summer.',
    ], answer: 2,
    explain: "'Hardly any' (neredeyse hiç) çok az bir miktar bildirir ama sıfır demek değildir: adaya yağan yağmurun pek azı baraj göllerine ulaşıyor. Doğru seçenek aynı anlamı 'only a tiny fraction' (yalnız çok küçük bir bölümü) ile veriyor. 'Most of' anlamı tersine çeviriyor. 'None … ever' çok az olanı hiç yok sayıyor; olumsuzluğu fazla güçlendiriyor. 'Hardly any of the island's reservoirs' olumsuzluğu yağmurdan baraj göllerine kaydırıyor ve göllerin kapasitesinden söz ediyor. Kalan yanlış seçenekteki 'hardly ever' (neredeyse hiçbir zaman) bir sıklık bildiriyor ve 'in time' ile verilen cümlede olmayan bir zaman koşulu ekliyor." },

  // ---------- paragraf tamamlama ----------
  { id: 'fa-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['irrigate', 'evaporate'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'In many dry regions, farmers have traditionally irrigated their fields by letting water flow along open channels between the crops. This method is cheap, but a large part of the water evaporates in the heat or soaks into the ground beyond the reach of the roots. ----. Although such systems cost more to install, farmers who use them often find that they can grow the same crops with far less water.',
    options: [
      'Open channels have carried water to crops since the earliest days of farming',
      'As a result, most farmers in dry regions now prefer to grow crops that need a lot of water',
      'Drip systems avoid much of this waste by sending small amounts of water through pipes to each plant',
      'Many farmers also keep sheep and goats, which need a steady supply of drinking water in summer',
      'In these regions, rain tends to fall only a few times a year, mostly during the short winter',
    ], answer: 2,
    explain: "Paragraf açık kanallarla sulamanın ucuz ama savurgan olduğunu söylüyor: suyun büyük kısmı buharlaşıyor ya da köklerin ulaşamadığı derinliğe sızıyor. Boşluktan sonraki cümle 'such systems' (bu tür sistemler) diyor ve bunların kurulumunun daha pahalı olduğunu, ama çok daha az suyla aynı ürünü yetiştirdiğini söylüyor. Demek ki boşlukta, bu kaybı azaltan yeni bir sistem tanıtılmalı. Bunu damla sulama sistemlerini anlatan cümle yapar: su borularla her bitkiye az az gidiyor. Açık kanalların çiftçiliğin ilk günlerinden beri kullanılması ve yağmurun yılda birkaç kez yağması 'such systems' için bir dayanak oluşturmuyor. Çiftçilerin çok su isteyen ürünlere yöneldiği bilgisi paragrafın akışıyla çelişiyor. Koyun ve keçilerin içme suyu ihtiyacı da tarla sulamasından konuyu uzaklaştırıyor." },

  { id: 'fa-p2', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['gönderim'],
    q: 'In many older cities, a surprising share of the water that has been treated and pumped into the network never reaches a tap. ----. Fixing them, however, means digging up busy streets one section at a time, and the work rarely wins much praise, since a repaired leak buried under the road is invisible to voters. Politicians may therefore find it more appealing to announce a large new project, even when mending the old network would supply more water for less money.',
    options: [
      'Water companies usually measure how much each household uses with a meter',
      'Many residents, as a result, still prefer to buy bottled water for drinking',
      'Most of this water is used in homes for washing, cooking and cleaning',
      'New pipes made of plastic are lighter and cheaper to lay than old ones',
      'Instead, it escapes through countless cracks in pipes laid long ago',
    ], answer: 4,
    explain: "Boşluktan sonraki cümle 'Fixing them' (onları onarmak) diye başlıyor ve onarımın işlek sokakları kazmayı gerektirdiğini, onarılmış bir sızıntının da seçmenlere görünmediğini söylüyor. Demek ki 'them' onarılması gereken, yer altındaki bir şeye gönderme yapıyor ve boşlukta sızıntıdan söz edilmeli. Suyun musluğa ulaşmadan, çok önce döşenmiş borulardaki sayısız çatlaktan kaçtığını söyleyen cümle hem 'them' için çoğul bir dayanak veriyor hem de ilk cümledeki kaybı açıklıyor. Sayaçlar ve şişe su alan sakinler onarılacak şeyler değil. Suyun evlerde kullanıldığını söyleyen cümle, suyun musluğa hiç ulaşmadığını söyleyen ilk cümleyle çelişiyor. Plastik borular yeni borulardır; 'however' ile başlayan onarım güçlüğü ve gömülü sızıntı onlara bağlanmıyor." },

  // ---------- akışı bozan cümle ----------
  { id: 'fa-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['desalination'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Desalination matters most in places where rain is scarce and rivers are few.',
      "Not surprisingly, a large share of global capacity has been built across North Africa and the Middle East, with Saudi Arabia believed to rank among the biggest producers.",
      'In several Gulf states, desalinated seawater supplies much of the water that comes out of household taps.',
      'Many visitors to the region are surprised by how cold the desert can become at night.',
      'For these countries, a breakdown at a major plant is therefore not a mere inconvenience but a threat to daily life.',
    ],
    answer: 3,
    explain: "Parça arıtmaya en çok dayanan bölgeleri anlatıyor: arıtma yağmurun az, nehirlerin seyrek olduğu yerlerde en önemlidir (I); bu yüzden dünya kapasitesinin büyük bölümü Kuzey Afrika ve Orta Doğu'da kurulmuştur (II); bazı Körfez ülkelerinde musluktan akan suyun büyük kısmı arıtılmış deniz suyudur (III); bu ülkeler için büyük bir tesisin arızalanması gündelik hayatı tehdit eder (V). IV. cümle de aynı bölgeden söz ediyor ama konuyu çölde gecelerin soğukluğuna kaydırıyor. Üstelik V'teki 'these countries' ve 'therefore' III'teki Körfez ülkelerine ve onların arıtılmış suya bağımlılığına dayanıyor; IV araya girince bu bağ kopuyor." },

  { id: 'fa-b2', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['aquifer'],
    level: 'kolay', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Many coastal towns get their water from aquifers, layers of rock and sand that hold fresh water underground.',
      'In summer, bottled water is sold in almost every shop and kiosk along the seafront.',
      'Normally, the fresh water in such an aquifer keeps the heavier seawater from moving inland.',
      'When too much water is pumped out, however, the seawater can push in and slowly turn the wells salty.',
      'Once this has happened, it may take many years for the aquifer to become fresh again.',
    ],
    answer: 1,
    explain: "Parça kıyıdaki yeraltı su katmanlarının nasıl tuzlandığını anlatıyor: kıyı kasabaları suyunu akiferlerden alır (I); normalde akiferdeki tatlı su ağır deniz suyunun içeri girmesini engeller (III); fazla su çekilince deniz suyu içeri sızıp kuyuları tuzlandırır (IV); bu olunca akiferin yeniden tatlılaşması yıllar sürebilir (V). II. cümle de kıyı kasabalarında sudan söz ediyor ama konuyu sahildeki dükkânlarda satılan şişe suya kaydırıyor. III'teki 'such an aquifer' I'deki akiferlere gönderme yapıyor; II araya girince bu bağ kopuyor." },
];

export default { id: 'fen-aritma', course: C, title: U, order: 8, cards, items };
