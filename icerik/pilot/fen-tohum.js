// iDil › Fen bilimleri › Tohum bankaları.
// Tümü özgün: Claude yazdı (13 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (yalnız olgular; metin özgün; çoğaltma planı analiz/cogaltma-2-plani.md §4.7 ve yerleşik bilgi):
// - Svalbard Küresel Tohum Deposu (Norveç, Spitsbergen): 2008'de açıldı; dağın içine, donmuş zemine oyuldu; tohumlar yaklaşık
//   −18 °C'de saklanır; bir milyonu aşkın örnek (temkinli). Örnekler gen bankalarının yedek kopyalarıdır; kapalı kutular
//   bırakan bankanın malı olarak kalır ve yalnız o geri isteyebilir. Soğutma bozulursa çevredeki donmuş kaya tohumları bir
//   süre soğuk tutmaya yardım eder (temkinli).
// - İlk çekiş (2015): savaş yüzünden Halep'ten (Suriye) taşınan ICARDA, Halep yakınındaki koleksiyonunu tam kullanamaz olunca
//   Svalbard'a bıraktığı tohumları geri aldı; tohumlar Fas ve Lübnan'da ekilerek koleksiyon yeniden kuruldu.
// - Nikolay Vavilov: 1920'ler ve 1930'larda onlarca ülkeye toplama gezileri; Leningrad'daki koleksiyon; köken merkezleri kuramı;
//   1940'ta tutuklandı, 1943'te cezaevinde öldü. Leningrad kuşatması Eylül 1941'de başladı (1944'e dek sürdü); enstitü
//   çalışanlarından bazılarının tohumları korurken açlıktan öldüğü anlatılır (temkinli).
// - Genel ve yerleşik bilgi: tohumların kurutulup dondurularak saklanması (nem yaşlanmayı hızlandırır); çimlenme testleri ve
//   tohumların tarlada yeniden üretilmesi; ekinlerin yabani akrabalarının kuraklığa dayanıklılık genleri taşıması, ıslahta
//   kullanılması ve bir kısmının yaşam alanı kaybıyla tehlikede olması; modern çeşitlerin genetik olarak birbirine benzemesi;
//   çiftçilerin hasadın bir kısmını tohumluk ayırması; buğday, arpa ve mercimeğin Bereketli Hilal'deki ilk ekinlerden olması;
//   İrlanda'da 1840'lardaki patates hastalığı (mildiyö) ve yoksul ailelerin patatese bağımlılığı.

const T = 'taslak';
const C = 'fen';
const U = 'Tohum bankaları';

const cards = [
  // ---------- isim ----------
  { code: 'harvest', title: 'hasat; (bir dönemde toplanan) ürün, rekolte', pos: 'isim', cefr: 'B2', ipa: '/ˈhɑːvɪst/',
    text: "Hem toplama işini ve mevsimini (at harvest time: hasat zamanında) hem toplanan ürünün miktarını anlatır: a poor harvest (kötü bir rekolte). Fiil olarak 'hasat etmek' demektir. 'Crop' tarlada yetişen ekindir; yakın anlamlıdır ama hasat mevsimini anlatmaz.",
    example: 'Weeks of heavy rain in August ruined much of the wheat harvest in the north.',
    exampleTr: 'Ağustosta haftalarca süren şiddetli yağmur, kuzeydeki buğday hasadının büyük bölümünü mahvetti.',
    synonyms: ['crop', 'yield'], family: ['harvester'] },
  { code: 'crop', title: 'ekin, tarım ürünü; (bir mevsimde alınan) ürün', pos: 'isim', cefr: 'B2', ipa: '/krɒp/',
    text: "Tarlada yetiştirilen bitki ya da bir mevsimde ondan alınan ürün: food crops (gıda ürünleri), a cash crop (satmak için yetiştirilen ürün). Öbek fiil 'crop up' ise 'beklenmedik biçimde ortaya çıkmak' demektir.",
    example: 'Rice is the main crop in this part of the country, and most families depend on it.',
    exampleTr: 'Pirinç ülkenin bu bölgesindeki başlıca ekindir ve ailelerin çoğu ona bağımlıdır.',
    synonyms: ['harvest', 'produce'], family: ['cropland'] },
  { code: 'drought', title: 'kuraklık', pos: 'isim', cefr: 'B2', ipa: '/draʊt/',
    text: "Uzun süre yağmur yağmaması: a severe drought (şiddetli bir kuraklık), drought-resistant crops (kuraklığa dayanıklı ekinler). Okunuşa dikkat: 'gh' okunmaz, 'ou' Türkçedeki 'av' sesine yakın okunur.",
    example: 'The drought lasted for three summers, and many farmers had to sell their animals.',
    exampleTr: 'Kuraklık üç yaz sürdü ve birçok çiftçi hayvanlarını satmak zorunda kaldı.',
    synonyms: ['dry spell'], family: ['drought-resistant'] },
  { code: 'variety', title: '(bitki, ekin) çeşit; çeşitlilik', pos: 'isim', cefr: 'B2', ipa: '/vəˈraɪəti/',
    text: "Tarımda bir ekinin kendine özgü özellikleri olan türüdür: a new variety of rice (yeni bir pirinç çeşidi). 'A variety of' ise 'çeşitli, türlü türlü' demektir: for a variety of reasons. Çoğulu 'varieties'.",
    example: 'This old variety of apple stays fresh all winter if it is kept somewhere cool.',
    exampleTr: 'Bu eski elma çeşidi serin bir yerde tutulursa bütün kış taze kalır.',
    synonyms: ['type', 'kind'], family: ['various', 'vary', 'varied'] },
  { code: 'vault', title: '(bankada) kasa dairesi; korunaklı yeraltı deposu', pos: 'isim', cefr: 'C1', ipa: '/vɔːlt/',
    text: "Değerli şeylerin saklandığı, sağlam kapılı oda ya da yeraltı deposu: a bank vault. Svalbard'daki tohum deposunun adında geçer (Global Seed Vault). Fiil olarak 'üstünden atlamak' anlamı da var; 'pole vault' sırıkla atlamadır.",
    example: "The bank keeps its customers' gold in a vault deep beneath the building.",
    exampleTr: 'Banka, müşterilerinin altınını binanın çok altındaki bir kasa dairesinde saklar.',
    synonyms: ['strongroom', 'cellar'], family: [] },

  // ---------- fiil ----------
  { code: 'safeguard', title: 'korumak, güvence altına almak', pos: 'fiil', cefr: 'C1', ipa: '/ˈseɪfɡɑːd/',
    text: "Bir şeyi ileride doğabilecek zarara karşı korumak: safeguard workers' rights, safeguard the future. 'Safeguard against' kalıbıyla da kullanılır. İsim olarak 'güvence, önlem' demektir: a safeguard against fraud.",
    example: 'The new law is meant to safeguard the rights of people who work only during the summer.',
    exampleTr: 'Yeni yasa, yalnızca yaz aylarında çalışan kişilerin haklarını korumayı amaçlıyor.',
    synonyms: ['protect', 'secure'], family: ['safe', 'safety'] },
  { code: 'cultivate', title: '(toprağı) işlemek; (bitki) yetiştirmek', pos: 'fiil', cefr: 'C1', ipa: '/ˈkʌltɪveɪt/',
    text: "Tarımda toprağı ekip biçmek ya da bir bitkiyi yetiştirmek: cultivate land, cultivate rice. 'Cultivated plants' insanların yetiştirdiği bitkilerdir; karşıtı 'wild' (yabani). Mecaz anlamda bir beceriyi ya da ilişkiyi geliştirmek demektir. Adı 'cultivation'.",
    example: 'Olives have been cultivated on these hillsides for thousands of years.',
    exampleTr: 'Bu yamaçlarda binlerce yıldır zeytin yetiştiriliyor.',
    synonyms: ['grow', 'farm'], family: ['cultivation', 'cultivated'] },
  { code: 'deposit', title: '(saklanmak üzere) bırakmak, emanet etmek; (para) yatırmak', pos: 'fiil', cefr: 'C1', ipa: '/dɪˈpɒzɪt/',
    text: "Bir şeyi korunsun diye bir yere bırakmak ya da bankaya para yatırmak: deposit money in an account. İsim olarak 'mevduat, depozito' ve yer bilimde 'yatak' demektir: oil deposits (petrol yatakları). Karşıtı 'withdraw'. Bırakan kişi ya da kurum 'depositor'.",
    example: 'Guests can deposit their passports and jewellery in the hotel safe at reception.',
    exampleTr: 'Konuklar pasaportlarını ve mücevherlerini resepsiyondaki otel kasasına bırakabilir.',
    synonyms: ['lodge', 'leave'], family: ['depositor'] },
  { code: 'withdraw', title: '(bir yerden) çekmek, geri almak; geri çekilmek', pos: 'fiil', cefr: 'B2', ipa: '/wɪðˈdrɔː/',
    text: "Bankadan para çekmek (withdraw money) ya da bir şeyi bulunduğu yerden geri almak. 'Bir teklifi geri almak' ve 'askerleri geri çekmek' anlamları da var. Biçimleri düzensizdir: withdrew, withdrawn. Adı 'withdrawal'.",
    example: 'You can withdraw cash from this machine even on public holidays.',
    exampleTr: 'Bu makineden resmî tatillerde bile nakit çekebilirsiniz.',
    synonyms: ['take out', 'remove'], family: ['withdrawal'] },
  { code: 'adapt', title: 'uyum sağlamak; uyarlamak', pos: 'fiil', cefr: 'B2', ipa: '/əˈdæpt/',
    text: "'Adapt to something' (bir şeye uyum sağlamak) kalıbıyla kullanılır: adapt to a new climate. 'Adopt' (benimsemek, evlat edinmek) ile karıştırma. Adı 'adaptation', sıfatı 'adaptable'.",
    example: 'Children often adapt to a new school more quickly than their parents expect.',
    exampleTr: 'Çocuklar yeni bir okula çoğu zaman anne babalarının beklediğinden daha çabuk uyum sağlar.',
    synonyms: ['adjust', 'acclimatise'], family: ['adaptation', 'adaptable'] },
  { code: 'preserve', title: 'korumak, muhafaza etmek; (yiyecek) saklamak', pos: 'fiil', cefr: 'B2', ipa: '/prɪˈzɜːv/',
    text: "Bir şeyi bozulmadan, kaybolmadan korumak: preserve old buildings, preserve a tradition. Yiyecek için 'saklamak, konserve etmek' demektir. Adı 'preservation'; 'preservative' gıdalardaki koruyucu maddedir.",
    example: 'Volunteers are working to preserve the old mill exactly as it was a century ago.',
    exampleTr: 'Gönüllüler eski değirmeni tam bir yüzyıl önceki hâliyle korumak için çalışıyor.',
    synonyms: ['conserve', 'protect'], family: ['preservation', 'preservative'] },
  { code: 'germinate', title: 'çimlenmek; çimlendirmek', pos: 'fiil', cefr: 'C1', ipa: '/ˈdʒɜːmɪneɪt/',
    text: "Tohumun filizlenmeye başlaması: the seeds germinated after the first rain. Adı 'germination' (çimlenme). Mecaz anlamda bir fikrin yavaş yavaş oluşması için de kullanılır: an idea germinated in her mind.",
    example: 'Bean seeds usually germinate within a week if the soil is kept warm.',
    exampleTr: 'Fasulye tohumları, toprak ılık tutulursa genellikle bir hafta içinde çimlenir.',
    synonyms: ['sprout'], family: ['germination'] },

  // ---------- sıfat ----------
  { code: 'resilient', title: 'dayanıklı, zorluklara göğüs geren; çabuk toparlanan', pos: 'sıfat', cefr: 'C1', ipa: '/rɪˈzɪliənt/',
    text: "Zor koşullara dayanabilen ya da bir sarsıntıdan sonra kolayca eski hâline dönebilen: a resilient economy, resilient crops. Adı 'resilience'. 'Resistant' (dirençli) ile yakındır ama 'resilient' toparlanma gücünü de anlatır.",
    example: 'Small shops in the town proved surprisingly resilient during the long economic crisis.',
    exampleTr: 'Kasabadaki küçük dükkânlar uzun ekonomik kriz boyunca şaşırtıcı biçimde dayanıklı çıktı.',
    synonyms: ['tough', 'hardy'], family: ['resilience'] },
  { code: 'indigenous', title: 'yerli; (bir bölgeye) özgü', pos: 'sıfat', cefr: 'C1', ipa: '/ɪnˈdɪdʒənəs/',
    text: "İnsanlar için 'bir bölgenin yerli halkından' demektir: indigenous peoples, indigenous farmers. Bitki ve hayvanlar için 'oraya özgü, dışarıdan getirilmemiş' anlamındadır: indigenous plants. 'Native' ile yakın anlamlıdır.",
    example: 'Indigenous communities in the region have their own names for hundreds of local plants.',
    exampleTr: 'Bölgedeki yerli toplulukların yüzlerce yerel bitki için kendi adları var.',
    synonyms: ['native', 'local'], family: [] },
  { code: 'endangered', title: '(nesli) tükenme tehlikesi altındaki', pos: 'sıfat', cefr: 'B2', ipa: '/ɪnˈdeɪndʒəd/',
    text: "Çoğunlukla canlı türleri için kullanılır: an endangered species (nesli tehlikedeki tür). Bir dil ya da gelenek için de kullanılabilir. 'Dangerous' (tehlikeli) ile karıştırma: 'endangered' tehlike yaratan değil, tehlikede olandır.",
    example: 'The island is one of the last places where this endangered bird still builds its nest.',
    exampleTr: 'Ada, nesli tehlike altındaki bu kuşun hâlâ yuva yaptığı son yerlerden biri.',
    synonyms: ['threatened', 'at risk'], family: ['endanger', 'danger'] },

  // ---------- öbek fiil ----------
  { code: 'run out of', title: '(bir şeyi) tüketmek, -sız kalmak', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌrʌn ˈaʊt əv/',
    text: "Elde bir şey kalmaması: run out of money, run out of time. Özne tükenen şeyin kendisiyse 'of' düşer: our food ran out (yiyeceğimiz tükendi). Geçmiş biçimi 'ran out of'.",
    example: 'We are running out of milk, so could you buy some on your way home?',
    exampleTr: 'Sütümüz bitmek üzere; eve gelirken biraz alabilir misin?',
    synonyms: ['use up'], family: [] },
  { code: 'fall back on', title: '(zor durumda) -e başvurmak, yedek olarak -e dönmek', pos: 'öbek fiil', cefr: 'C1', ipa: '/ˌfɔːl ˈbæk ɒn/',
    text: "Başka çare kalmayınca güvenilecek bir şeye dönmek: fall back on your savings (birikimlerine başvurmak). 'Something to fall back on' (gerektiğinde başvurulacak bir yedek) kalıbı sık geçer. İsim 'fallback' yedek seçenek demektir: a fallback plan.",
    example: 'If the new job does not work out, she can always fall back on her teaching diploma.',
    exampleTr: 'Yeni işi yolunda gitmezse her zaman öğretmenlik diplomasına güvenebilir.',
    synonyms: ['resort to', 'rely on'], family: ['fallback'] },

  // ---------- zarf ----------
  { code: 'genetically', title: 'genetik olarak, genetik bakımdan', pos: 'zarf', cefr: 'C1', ipa: '/dʒəˈnetɪkli/',
    text: "Genlerle ilgili bir özelliği niteler: genetically identical (genetik olarak aynı), genetically diverse (genetik bakımdan çeşitli), genetically modified (genetiği değiştirilmiş). Sıfatı 'genetic', bilim dalı 'genetics'.",
    example: 'Identical twins are genetically almost the same, yet they can grow up with very different personalities.',
    exampleTr: 'Tek yumurta ikizleri genetik olarak neredeyse aynıdır, yine de çok farklı kişiliklerle büyüyebilirler.',
    synonyms: [], family: ['genetic', 'genetics', 'gene'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'ft-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['harvest', 'drought'],
    level: 'orta', cefr: 'B2', konu: ['isim'],
    q: "For thousands of years, farmers kept back part of each year's ---- to sow the following season, and in many villages they still do.",
    options: ['income', 'harvest', 'drought', 'harness', 'rainfall'], answer: 1,
    explain: "'Harvest' hasat, yani bir yılda toplanan üründür: çiftçiler binlerce yıl boyunca her yılın hasadının bir kısmını ertesi mevsim ekmek için ayırdı. 'Income' (gelir) ve 'rainfall' (yağış) 'part of each year's …' kalıbına uyuyor ama ekilemez; cümledeki 'to sow' (ekmek için) ikisini de eler. 'Drought' (kuraklık) tarımla ilgili bir sözcük ama ayrılıp ekilecek bir şey değildir. 'Harness' (koşum takımı) 'harvest'e biçimce benzer; anlam kurmaz." },

  // ---------- dil bilgisi ----------
  { id: 'ft-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['variety', 'crop'],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: '---- a sudden outbreak of disease, a crop variety grown by only a handful of farmers can disappear within a single season.',
    options: ['In the event of', 'In spite of', 'On behalf of', 'Prior to', 'For the sake of'], answer: 0,
    explain: "'In the event of' (… olursa, … durumunda) bir olasılığı koşul olarak verir: ani bir hastalık salgını çıkarsa, yalnızca birkaç çiftçinin yetiştirdiği bir ekin çeşidi tek bir mevsimde ortadan kalkabilir. 'In spite of' (-e rağmen) ilişkiyi tersine çevirir: salgın çeşidin kaybolmasını engellemez, ona yol açar. 'Prior to' (-den önce) çeşidin salgından önce kaybolduğunu söyler; anlamsız. 'On behalf of' (… adına) ve 'for the sake of' (… uğruna) da anlam kurmaz." },
  { id: 'ft-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: 'Because moisture speeds up the chemical changes that make seeds age, ---- a seed is when it goes into the freezer, ---- it is likely to survive in storage.',
    options: ['drier / longer', 'the more dry / the more long', 'the drier / the longer', 'the wetter / the longer', 'as dry / as long'], answer: 2,
    explain: "'The + -er …, the + -er …' iki şeyin birlikte değiştiğini anlatır: tohum dondurucuya girerken ne kadar kuruysa depoda o kadar uzun yaşar. Cümlenin başı da bunu gerektiriyor: nem, tohumu yaşlandıran kimyasal değişimleri hızlandırır. 'The wetter / the longer' yapı olarak doğru ama mantığı tersine çevirir. 'Drier / longer' 'the' olmadan bu kalıbı kuramaz. 'The more dry / the more long' yanlıştır, çünkü kısa sıfatlar -er alır (drier, longer). 'As dry / as long' eşitlik bildirir ve burada cümle kurmaz." },
  { id: 'ft-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['fall back on', 'crop'],
    level: 'orta', cefr: 'B2', konu: ['bağlaç', 'amaç'],
    q: 'Plant breeders value the old varieties kept in gene banks because they provide useful genes to fall back on ---- a new disease attacks the crops that farmers grow today.',
    options: ['so that', 'unless', 'whereas', 'as long as', 'in case'], answer: 4,
    explain: "'In case' (… olur diye, … ihtimaline karşı) bir önlemi anlatır: ıslahçılar gen bankalarındaki eski çeşitlere değer verir, çünkü bu çeşitler, yeni bir hastalığın bugünkü ekinlere saldırma ihtimaline karşı başvurulabilecek yararlı genler sağlar. 'So that' (-sın diye) amaç bildirir; hastalığın saldırmasını amaç hâline getirir. 'Unless' (-medikçe) anlamı tersine çevirir: genler tam hastalık çıktığında gerekir. 'Whereas' (oysa) karşıtlık, 'as long as' (-dığı sürece) koşul kurar; ikisi de anlam vermez." },

  { id: 'ft-g4', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['variety', 'drought'],
    level: 'orta', cefr: 'B2', konu: ['kip (modal)'],
    q: 'Faced with the choice, many farmers today ---- sow a modern high-yielding variety than keep planting the local one their grandparents grew, even though the old variety may cope better with drought.',
    options: ['had better', 'should', 'would rather', 'would like to', 'are able to'], answer: 2,
    explain: "Boşluktan sonra yalın fiil (sow) ve ardından 'than' geliyor: iki seçenek tartılıyor. Tercihi 'would rather' + yalın fiil + 'than' + yalın fiil kurar. Cümlenin anlamı: bugün birçok çiftçi, eski çeşit kuraklığa daha iyi dayanabilse bile, dedelerinin ektiği yerel çeşidi ekmeyi sürdürmektense verimli modern bir çeşit ekmeyi tercih ediyor. 'Had better' belli bir durum için bir uyarıdır, 'should' bir öneri; ikisi de 'than' ile iki seçeneği karşılaştırmaz. 'Would like to' bir istek, 'are able to' bir yetenek bildirir; ikisi de 'than' ile kurulmaz ve tercih anlamı vermez." },

  // ---------- cümle tamamlama ----------
  { id: 'ft-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['preserve', 'adapt', 'indigenous'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although a well-run gene bank can preserve seeds for many decades, ----.',
    options: [
      'some of the samples in the largest collections were first gathered more than fifty years ago',
      'only crops that are grown year after year in the field keep adapting to new pests and a changing climate',
      'plant breeders regularly ask such collections for seeds when they set out to develop new varieties',
      'indigenous farmers in many countries have shared seeds of their own local varieties with such banks',
      'this long storage life makes it a valuable source of genetic material for breeders around the world',
    ], answer: 1,
    explain: "'Although' karşıtlık ister: iyi yönetilen bir gen bankası tohumları onlarca yıl koruyabilir, ama yeni zararlılara ve değişen iklime uyum sağlamayı yalnız her yıl tarlada yetiştirilen ekinler sürdürür; dondurucudaki tohumlar bu uyumun dışında kalır. Öteki seçenekler ilk yarıyla çelişmiyor: elli yıldan eski örnekler uzun saklamayı destekliyor; ıslahçıların bankalardan tohum istemesi ve yerli çiftçilerin tohum paylaşması bilgi ekliyor; uzun saklama ömrünün bankayı değerli kılması da bir sonuç bildiriyor." },
  { id: 'ft-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['germinate'],
    level: 'orta', cefr: 'B2', konu: ['zaman'],
    q: '----, the gene bank grows a new generation of plants from it to replace the ageing seeds.',
    options: [
      'Until a newly arrived sample has been counted, labelled and sealed in its packet',
      'As soon as a sample has been placed in the freezer for the very first time',
      'Ever since a sample first arrived at the gene bank several decades ago',
      'By the time a sample has been brought in from the fields of a local farmer',
      "Once tests show that too few of a sample's seeds can still germinate",
    ], answer: 4,
    explain: "Ana cümle, bankanın eskiyen tohumların yerine yenilerini koymak için örnekten yeni bir kuşak bitki yetiştirdiğini söylüyor. Bu, tohumlar yaşlanıp çimlenme gücünü yitirince gerekir: 'once' (-ince, -dikten sonra) testler, örnekteki tohumların çok azının hâlâ çimlenebildiğini gösterince. Yeni gelip sayılan ya da dondurucuya ilk kez konan bir örnekte eskiyen tohum yoktur; tarladan getirildiği anda da yoktur. 'Ever since' (-den beri) anlam vermez; üstelik ana cümlede present perfect ister." },

  // ---------- çeviri ----------
  { id: 'ft-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: 'Because poor families in Ireland depended on the potato far more heavily than people elsewhere in Europe, the blight of the 1840s did much greater damage there than in neighbouring countries.',
    options: [
      "İrlanda'daki yoksul aileler patatese Avrupa'nın başka yerlerindeki insanlar kadar bağımlı olduğu için 1840'lardaki patates hastalığı orada da komşu ülkelerdeki kadar büyük zarar verdi.",
      "İrlanda'daki yoksul aileler patatese Avrupa'nın başka yerlerindeki insanlardan çok daha fazla bağımlı olduğu için 1840'lardaki patates hastalığı orada komşu ülkelerdekinden çok daha büyük zarar verdi.",
      "İrlanda'daki yoksul aileler patatese Avrupa'nın başka yerlerindeki insanlardan biraz daha fazla bağımlı olduğu için 1840'lardaki patates hastalığı orada komşu ülkelerdekinden biraz daha büyük zarar verdi.",
      "1840'lardaki patates hastalığı İrlanda'da komşu ülkelerdekinden çok daha büyük zarar verdiği için oradaki yoksul aileler patatese Avrupa'nın başka yerlerindeki insanlardan çok daha fazla bağımlı hâle geldi.",
      "İrlanda'daki yoksul aileler patatese Avrupa'nın başka yerlerindeki insanlardan çok daha fazla bağımlıydı; buna karşın 1840'lardaki patates hastalığı en büyük zararı komşu ülkelerde verdi.",
    ], answer: 1,
    explain: "Doğru çeviri karşılaştırmanın iki ayağını da korur: İrlanda'daki yoksul aileler patatese Avrupa'nın başka yerlerindekilerden çok daha fazla bağımlıydı ('far more heavily'), bu yüzden 1840'lardaki hastalık orada komşu ülkelerdekinden çok daha büyük zarar verdi ('much greater damage'). 'Blight' bitkilerde hızla yayılan bir hastalıktır (burada patates mildiyösü). Yanlışlardan biri karşılaştırmayı eşitliğe ('kadar') çeviriyor; biri 'far' ve 'much'ı 'biraz' diye zayıflatıyor; biri neden ile sonucun yerini değiştiriyor; biri de zararın en çok komşu ülkelerde olduğunu söyleyerek sonucu tersine çeviriyor." },

  // ---------- okuma parçası (3 soru, YÖKDİL biçimi) ----------
  { id: 'ft-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T,
    cards: ['vault', 'deposit', 'withdraw', 'safeguard'],
    level: 'orta', cefr: 'C1', title: 'Dağın içindeki yedek: Svalbard Tohum Deposu',
    text: "On the Arctic island of Spitsbergen, a tunnel cut deep into a mountainside leads to the Svalbard Global Seed Vault. Opened by Norway in 2008, the vault now holds more than a million seed samples, yet hardly any of them are unique. Gene banks around the world deposit copies of their collections there to safeguard them against wars, natural disasters or simple accidents such as a broken freezer. The seeds are kept at about −18 °C, and the frozen rock around the vault would help to keep them cold even if the cooling system failed. Each sealed box remains the property of the gene bank that sent it, and nobody else may open it or ask for it back. For seven years after the vault opened, no depositor asked for anything back. Then, in 2015, the International Center for Agricultural Research in the Dry Areas (ICARDA) became the first to withdraw seeds. Its gene bank near Aleppo held one of the most important collections of wheat, barley and lentils from the dry regions of the Middle East, but the war in Syria had forced the centre to move away, and it could no longer make full use of the collection. The seeds that came back from Svalbard were sown in Morocco and Lebanon, where the plants produced enough fresh seed to rebuild the collection. The episode showed that the system works. It also showed, however, that the vault is only a backup: its seeds are useful only if a working gene bank can grow them again.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the sealed boxes in the Svalbard vault ----.',
        options: [
          'can be taken back only by the organisations that first placed them there',
          'are opened from time to time so that staff can check the seeds inside',
          "hold the only surviving samples of many of the world's food crops",
          'were all placed there by Norway when the vault first opened in 2008',
          'would be at risk of thawing within days if the cooling system failed',
        ], answer: 0,
        explain: "Parçaya göre her kapalı kutu onu gönderen gen bankasının malı olarak kalır; başka hiç kimse onu açamaz ya da geri isteyemez. Yani kutuları ancak oraya bırakan kuruluşlar geri alabilir. Kutuların ara sıra açıldığı söylenmiyor; tersine, başkalarının açması yasak. Örneklerin hemen hiçbiri tek değil, kopyadır. Örnekleri Norveç değil, dünyanın dört bir yanındaki gen bankaları bırakıyor. Soğutma bozulsa bile çevredeki donmuş kaya tohumları soğuk tutmaya yardım eder; günler içinde çözülme tehlikesinden söz edilmiyor." },
      { konu: ['ayrıntı'],
        q: 'It is stated in the passage that ICARDA ----.',
        options: [
          'had lost every seed in its collection near Aleppo by 2015',
          'was the first organisation to send seeds to the vault in 2008',
          'moved its gene bank to Svalbard as soon as the war in Syria began',
          'rebuilt its collection with seeds bought from farmers in Morocco and Lebanon',
          'grew new plants in two other countries from the seeds it got back',
        ], answer: 4,
        explain: "Parçaya göre Svalbard'dan dönen tohumlar Fas ve Lübnan'da ekildi ve bitkiler koleksiyonu yeniden kurmaya yetecek kadar taze tohum verdi; yani ICARDA geri aldığı tohumlardan iki başka ülkede yeni bitkiler yetiştirdi. Halep yakınındaki koleksiyonun tamamen yok olduğu söylenmiyor; merkez onu yalnızca tam olarak kullanamıyordu. ICARDA depoya ilk tohum bırakan değil, depodan ilk tohum çeken kuruluştur. Gen bankasını Svalbard'a taşımadı. Fas ve Lübnan'da çiftçilerden tohum satın alındığı da parçada geçmiyor." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that ----.',
        options: [
          "the vault's cooling system had failed on at least one occasion before 2015",
          'most of the gene banks that use the vault have since asked for their seeds back',
          'the seeds that ICARDA took back were duplicates of samples stored in Syria',
          'Norway now decides which gene banks are allowed to take seeds out of the vault',
          'the seeds were sown in Morocco and Lebanon because the soil there suits them best',
        ], answer: 2,
        explain: "Parçaya göre gen bankaları Svalbard'a kendi koleksiyonlarının kopyalarını bırakıyor; ICARDA'nın gen bankası da Halep yakınındaydı. İkisi birleşince ICARDA'nın geri aldığı tohumların Suriye'de saklanan örneklerin kopyaları olduğu sonucu çıkar. Soğutma sisteminin daha önce bozulduğu, bankaların çoğunun tohumlarını geri istediği ya da Fas ve Lübnan'ın toprağı nedeniyle seçildiği parçada geçmiyor. Norveç'in kimin tohum çekeceğine karar verdiği seçeneği parçayla çelişiyor: kutuyu yalnız onu gönderen banka geri isteyebilir." },
    ] },

  // ---------- paragraf tamamlama ----------
  { id: 'ft-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T,
    cards: ['run out of', 'safeguard', 'preserve', 'cultivate'],
    level: 'orta', cefr: 'C1', konu: ['akış'],
    q: "In the 1920s and 1930s, the Soviet botanist Nikolai Vavilov organised expeditions to dozens of countries to collect the seeds of crops and their wild relatives. The vast collection that resulted was kept at his institute in Leningrad, today's St Petersburg. ----. As the siege dragged on through the winter, the scientists who stayed at the institute to safeguard the collection grew as hungry as everyone else, and several of them are said to have starved to death rather than eat the seeds in their care. Thanks partly to their sacrifice, much of the collection was preserved.",
    options: [
      'Vavilov believed that most crops had first been domesticated in just a few regions, which he called centres of origin',
      "Vavilov himself was arrested in 1940 and died in prison in 1943, having fallen out of favour with Stalin's government",
      'Wheat, barley and lentils were among the first plants ever to be cultivated, on the hilly edges of the Fertile Crescent',
      'In September 1941, German forces cut the last land route into the city, and within weeks its people were running out of food',
      "Some of the local varieties he gathered have since vanished from farmers' fields, which makes his samples all the more valuable",
    ], answer: 3,
    explain: "Boşluktan sonraki cümle 'the siege' (kuşatma) diyerek bir kuşatmanın daha önce anıldığını varsayıyor ve herkesin aç kaldığını söylüyor. Bunu yalnız, Eylül 1941'de Alman kuvvetlerinin kente giden son kara yolunu kestiğini ve birkaç hafta içinde halkın yiyeceğinin tükenmeye başladığını söyleyen cümle hazırlar. Vavilov'un 1940'ta tutuklanıp 1943'te cezaevinde ölmesi doğru bir bilgi ama ne kuşatmayı ne açlığı açıklar. Köken merkezleri, Bereketli Hilal'de ilk yetiştirilen bitkiler ve topladığı çeşitlerin bugünkü değeri de konuyla ilgili, ama sonraki cümleye bağlanmıyor." },

  // ---------- akışı bozan cümle ----------
  { id: 'ft-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T,
    cards: ['drought', 'genetically', 'endangered', 'adapt', 'resilient', 'crop'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'As dry years become more common in many farming regions, plant breeders are under pressure to develop crops that can cope with less water.',
      'Some of the most useful genes for this purpose are found not in modern varieties, many of which are genetically very similar, but in the wild relatives of crops.',
      'In many countries, the grasslands and hillsides where these wild plants grow are being turned into farms, roads and housing, and some of these species are now endangered.',
      'Wild relatives of wheat that grow on dry, stony slopes, for instance, have had to adapt to long periods without rain.',
      'By crossing such plants with modern varieties, breeders hope to produce crops that give good yields and are also resilient in times of drought.',
    ], answer: 2,
    explain: "Parça kuraklığa dayanıklı ekin arayışını anlatıyor. Kurak yıllar artıyor ve ıslahçılar az suyla yetinen ekinler arıyor. Bunun için en yararlı genler ekinlerin yabani akrabalarında bulunuyor; kurak yamaçlarda yetişen yabani buğdaylar buna örnek veriliyor. Islahçılar da bu bitkileri modern çeşitlerle melezleyerek kuraklığa dayanıklı ekinler elde etmeyi umuyor. III. cümle, yabani bitkilerin yaşadığı alanların yok edilmesine ve bu türlerin bazılarının tehlikeye girmesine geçerek akışı kesiyor. IV. cümledeki 'for instance' de II. cümledeki savı örnekliyor; III. cümleyle bağı yok." },
];

export default { id: 'fen-tohum', course: C, title: U, order: 5, cards, items };
