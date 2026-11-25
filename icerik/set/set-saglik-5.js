// iDil › Sağlık bilimleri › Alan seti 5: Beslenme ve vitaminler (YÖKDİL biçiminde yarım deneme; 31 öğe, 41 soru, 12 kart).
// Tümü özgün: Claude yazdı (17 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Metinler genel bilgi verir; tanı, tedavi ya da takviye önerisi değildir. Diyabet ve bağırsak bakterileri bilerek dışarıda
// bırakıldı (saglik-diyabet ve saglik-mikrobiyota üniteleri işliyor).
// Olgular (çoğaltma 4. tur planı §7.19; yalnız olgular, metin özgün; her olgu yalnız gösterildiği öğede):
// - O1 (xs5-o1): James Lind, 1747, HMS Salisbury; iskorbütlü on iki denizci ikişerli gruplara ayrıldı, her gruba farklı
//   bir ek verildi; portakal ve limon alanlar hızla iyileşti; Kraliyet Donanması limon suyunu ancak 1795'te düzenli verdi.
//   Ek yerleşik bilgi (temkinli): iskorbüt belirtileri (halsizlik, şişip kanayan diş etleri, eski yaraların açılması);
//   öteki gruplara elma şarabı, sirke ve deniz suyu da verildi; denizciler aynı yerde tutulup aynı temel yemeği yedi;
//   iyileşen ikisinden biri ötekilere bakmaya yardım etti; deneme "ilk kontrollü deneylerden biri" diye anılır; taze meyve
//   pahalıydı ve uzun yolculukta saklanması zordu; donanmanın kararından sonra iskorbüt İngiliz gemilerinde çok azaldı.
// - O2 (xs5-p3): iskorbüt C vitamini eksikliğidir; insan, çoğu memeliden farklı olarak C vitaminini kendi yapamaz. Ek
//   yerleşik bilgi (temkinli): C vitamini deri, diş eti ve damarları bir arada tutan dokuların yapımında gerekir; öteki
//   memeliler onu basit şekerlerden yapar; bu yeteneği yitiren birkaç başka hayvan grubu da var (maymunlar, kobaylar).
// - O3 (xs5-p2): raşitizm çocuklarda D vitamini eksikliğiyle kemiklerin yumuşamasıdır; güneş ışığı deride D vitamini
//   yapımını sağlar; 20. yüzyıl başında morina karaciğeri yağı ve güneş ışığıyla tedavi edildi (temkinli). Ek yerleşik
//   bilgi (temkinli): vücut kalsiyumu kullanmak için D vitaminine ihtiyaç duyar; hastalık bir zamanlar dumanlı sanayi
//   kentlerinde yaygındı.
// - O4 (xs5-p1): Christiaan Eijkman, 1890'lar, Java; cilalanmış pirinçle beslenen tavuklarda beriberiye benzer hastalık;
//   neden sonradan B1 vitamini eksikliği olarak anlaşıldı; 1929 Nobel'i Frederick Gowland Hopkins ile paylaştı. Ek yerleşik
//   bilgi: Eijkman önce bir mikrop arıyordu; kuşlar cilasız pirince dönünce iyileşti; B1 vitamini cilalamada atılan dış
//   katmanda bulunur; beriberi sinirlere ve kalbe zarar verebilir.
// - O5 (xs5-z1): Casimir Funk 1912'de "vitamine" sözcüğünü "yaşamsal amin" anlamında önerdi; sondaki "e" sonradan düştü
//   (temkinli). Ek yerleşik bilgi (temkinli): bu maddelerin çoğunun amin olmadığı anlaşılınca "e" düşürüldü; vitaminler
//   bugün harflerle anılır.
// - O6 (xs5-o2): dengeli beslenen sağlıklı insanlarda pek çok takviyenin yararı sınırlıdır; A ve D gibi bazı vitaminler
//   fazla alınınca zararlı olabilir (temkinli). Ek yerleşik bilgi (temkinli): yağda çözünen vitaminler vücutta depolanır;
//   fazlası çoğu zaman vücuttan atılır; doktorlar tanı konmuş eksiklikte takviye önerebilir.
// Tek sorular ve "(genel)" öğeler yalnız yerleşik genel bilgi kullanır (sayı, tarih, ad yok): proteinin bir kısmı vücudun
// yapamadığı birimlerden oluşur; bazı ülkelerde süte ve kahvaltılık gevreğe D vitamini, sofra tuzuna iyot eklenir;
// kaynatılan sebzeden suya vitamin geçer; uzun süre kötü beslenen çocukta büyüme yavaşlar ve enfeksiyona yatkınlık artar;
// çok işlenmiş besinle bol enerji alan kişi yine de yetersiz beslenebilir; tuzlu beslenme tansiyonu yükseltebilir; süt ve
// yoğurt kalsiyum içerir; lifin sindirilmemesi ve tok tutması; suyun soluk, ter ve idrarla yitirilmesi.
// Görev 20 (25 Kasım 2026): çeviri çeldiricileri biçim kestirmesine karşı yeniden kuruldu.

const T = 'taslak';
const C = 'saglik';
const U = 'Sağlık seti 5: Beslenme ve vitaminler';

const cards = [
  // ---------- isim ----------
  { code: 'vitamin', title: 'vitamin', pos: 'isim', cefr: 'B2', ipa: '/ˈvɪtəmɪn/',
    text: "Vücudun çok az miktarda ihtiyaç duyduğu, çoğunu besinlerden aldığı maddeler; harfle anılır: vitamin C, vitamin D (Türkçede 'C vitamini'). İngiliz söylenişi /ˈvɪt-/, Amerikan söylenişi /ˈvaɪt-/ ile başlar; dinleme sorularında ikisi de duyulabilir.",
    example: 'Eggs, milk and green vegetables each provide a different set of vitamins.',
    exampleTr: 'Yumurta, süt ve yeşil sebzelerin her biri farklı vitaminler sağlar.',
    synonyms: [], family: [] },
  { code: 'mineral', title: 'mineral (besindeki demir, kalsiyum gibi madde); maden', pos: 'isim', cefr: 'B2', ipa: '/ˈmɪnərəl/',
    text: "Beslenme metinlerinde demir (iron), kalsiyum (calcium), çinko (zinc), iyot (iodine) gibi vücudun besinden alması gereken inorganik maddeler. Çoğu zaman 'vitamins and minerals' öbeğinde geçer. Jeolojide 'maden, mineral' anlamı da var; 'mineral water' maden suyudur.",
    example: 'Iron and zinc are minerals that the body needs only in small amounts.',
    exampleTr: 'Demir ve çinko, vücudun yalnız az miktarda ihtiyaç duyduğu minerallerdir.',
    synonyms: [], family: [] },
  { code: 'scurvy', title: 'iskorbüt', pos: 'isim', cefr: 'C1', ipa: '/ˈskɜːvi/',
    text: "Uzun süre taze meyve ve sebze yememekten doğan eksiklik hastalığı; halsizlik, diş etlerinde şişme ve kanama, yaraların geç iyileşmesi belirtileridir. Eskiden uzun deniz yolculuklarının korkulan hastalığıydı. Sayılamayan isimdir: 'a scurvy' denmez.",
    example: 'Scurvy is rare today, but doctors still see it now and then in people who eat almost no fresh food.',
    exampleTr: 'İskorbüt bugün nadirdir, ama doktorlar onu hemen hiç taze besin yemeyen kişilerde hâlâ ara sıra görür.',
    synonyms: [], family: [] },
  { code: 'supplement', title: 'takviye, besin desteği; ek', pos: 'isim', cefr: 'C1', ipa: '/ˈsʌplɪmənt/',
    text: "Beslenmede vitamin, mineral ya da başka bir maddeyi tablet, kapsül veya toz olarak veren ürün: a dietary supplement (besin takviyesi), a vitamin supplement. Genel anlamı 'bir şeye eklenen ek' (a newspaper supplement: gazete eki). Aynı biçimle fiil de olur (supplement a diet: beslenmeyi desteklemek); sıfatı 'supplementary' (ek, tamamlayıcı).",
    example: 'The label on the supplement listed far more ingredients than she had expected.',
    exampleTr: 'Takviyenin etiketinde beklediğinden çok daha fazla içerik yazıyordu.',
    synonyms: [], family: ['supplementary'] },
  { code: 'protein', title: 'protein', pos: 'isim', cefr: 'B2', ipa: '/ˈprəʊtiːn/',
    text: "Vücudun dokuları kurmak ve onarmak için kullandığı, daha küçük birimlerden (amino asitler) oluşan besin öğesi. Hem sayılamayan (enough protein: yeterli protein) hem sayılabilir (plant proteins: bitkisel proteinler) kullanılır. Söylenişte ikinci hece uzundur: /ˈprəʊtiːn/.",
    example: 'Lentils are a cheap source of protein for families who eat little meat.',
    exampleTr: 'Mercimek, az et yiyen aileler için ucuz bir protein kaynağıdır.',
    synonyms: [], family: [] },
  { code: 'rickets', title: 'raşitizm', pos: 'isim', cefr: 'C1', ipa: '/ˈrɪkɪts/',
    text: "Çocuklarda kemiklerin yumuşayıp zayıfladığı, bacakların eğrilebildiği hastalık; çoğu zaman D vitamini eksikliğinden olur. Sonu -s ile bitse de tekil fiil alır: 'Rickets is…'. Yetişkinlerdeki benzer kemik yumuşaması ayrı bir adla anılır.",
    example: "The X-ray showed that the boy's curved legs were caused by rickets.",
    exampleTr: 'Röntgen, çocuğun eğri bacaklarının raşitizmden kaynaklandığını gösterdi.',
    synonyms: [], family: [] },
  // ---------- fiil ----------
  { code: 'lack', title: '-den yoksun olmak, -si eksik olmak', pos: 'fiil', cefr: 'B1', ipa: '/læk/',
    text: "Fiil olarak doğrudan nesne alır: lack vitamins (vitaminden yoksun olmak); 'lack of' denmez. 'Of' yalnız isimle gelir: a lack of sleep (uykusuzluk). Sıfat gibi kullanılan 'lacking in' da var: a diet lacking in iron (demirden yoksun bir beslenme).",
    example: 'Many quick snacks lack the fibre that keeps us feeling full.',
    exampleTr: 'Pek çok hazır atıştırmalıkta bizi tok tutan lif yoktur.',
    synonyms: ['be short of', 'be without'], family: [] },
  { code: 'cure', title: '(hastalığı, hastayı) iyileştirmek, tedavi edip gidermek', pos: 'fiil', cefr: 'B2', ipa: '/kjʊə(r)/',
    text: "Bir hastalığı tamamen ortadan kaldırmak: cure a disease; kişiyle 'of' kullanılır: cure someone of an illness. 'Treat' (tedavi etmek) yalnız tedaviyi anlatır, sonucun iyileşme olduğunu söylemez. Aynı biçimle isim de olur (a cure: çare); sıfatı 'curable' (tedavi edilebilir).",
    example: 'In the past, many people believed that sea air could cure almost any illness.',
    exampleTr: 'Eskiden pek çok insan deniz havasının hemen her hastalığı iyileştirebileceğine inanırdı.',
    synonyms: ['heal'], family: ['curable'] },
  { code: 'crave', title: '(bir şeyi, özellikle bir yiyeceği) çok istemek, canı çekmek', pos: 'fiil', cefr: 'C1', ipa: '/kreɪv/',
    text: "Bir şeyi güçlü ve çoğu zaman karşı konulmaz biçimde istemek: crave sugar (canı şeker çekmek), crave attention (ilgi istemek). Doğrudan nesne alır; resmî dilde 'crave for' da görülür. Adı 'craving' (aşırı istek): a craving for chocolate.",
    example: 'During the long journey, the children began to crave fresh fruit.',
    exampleTr: 'Uzun yolculuk sırasında çocukların canı taze meyve çekmeye başladı.',
    synonyms: ['long for', 'yearn for'], family: ['craving'] },
  // ---------- sıfat ----------
  { code: 'malnourished', title: 'yetersiz beslenmiş, kötü beslenmiş', pos: 'sıfat', cefr: 'C1', ipa: '/ˌmælˈnʌrɪʃt/',
    text: "Vücudu gereken besinleri yeterince alamamış: severely malnourished children (ağır biçimde yetersiz beslenmiş çocuklar). Yalnız az yemeyi değil, dengesiz beslenmeyi de anlatabilir. 'Mal-' öneki 'kötü' demektir; adı 'malnourishment'.",
    example: 'The rescued dog was so malnourished that it could barely stand.',
    exampleTr: 'Kurtarılan köpek o kadar kötü beslenmişti ki güçlükle ayakta durabiliyordu.',
    synonyms: ['underfed', 'undernourished'], family: ['malnourishment'] },
  { code: 'dietary', title: 'beslenmeyle ilgili, beslenmeye ait', pos: 'sıfat', cefr: 'C1', ipa: '/ˈdaɪətəri/',
    text: "Yalnız isimden önce kullanılır: dietary fibre (diyet lifi, besin lifi), dietary needs (beslenme ihtiyaçları), dietary advice (beslenme önerisi). 'Diet' sözcüğünden türer; 'zayıflama rejimi' anlamı taşımaz, kişinin ne yediğiyle ilgilidir.",
    example: 'The hospital asks every patient about any dietary needs, such as allergies or religious rules.',
    exampleTr: 'Hastane her hastaya alerjiler ya da dinî kurallar gibi beslenme ihtiyaçlarını sorar.',
    synonyms: ['nutritional'], family: ['diet'] },
  // ---------- zarf ----------
  { code: 'sparingly', title: 'az az, idareli, ölçülü biçimde', pos: 'zarf', cefr: 'C1', ipa: '/ˈspeərɪŋli/',
    text: "Bir şeyi az miktarda, gereğinden fazla harcamadan kullanmayı anlatır: use something sparingly (idareli kullanmak). Karşıtı 'generously' (bol bol) ya da 'liberally'dir. Sıfatı 'sparing' (tutumlu, az kullanan).",
    example: 'The paint was so expensive that the young artist used it sparingly.',
    exampleTr: 'Boya o kadar pahalıydı ki genç ressam onu idareli kullandı.',
    synonyms: ['economically', 'in small amounts'], family: ['sparing'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'xs5-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['cure', 'crave'],
    level: 'orta', cefr: 'B2', konu: ['fiil'],
    q: 'Whereas many long-term conditions can only be controlled, doctors can often ---- an illness caused by a shortage of one nutrient completely, simply by adding that nutrient to the patient\'s diet.',
    options: ['cure', 'crave', 'inherit', 'transmit', 'worsen'], answer: 0,
    explain: "'Whereas' (oysa) iki durumu karşılaştırıyor: uzun süreli hastalıklar yalnız denetim altında tutulabilir, tek bir besinin eksikliğinden doğan hastalık ise o besin beslenmeye eklenince çoğu zaman tamamen iyileştirilebilir. 'Completely' ile birlikte bu anlamı 'cure' (iyileştirmek, tedavi edip gidermek) verir. 'Crave' (çok istemek) bir yiyeceğe duyulan isteği anlatır; doktorun hastalığı gidermesini anlatmaz. 'Inherit' (kalıtımla almak) ve 'transmit' (bulaştırmak, aktarmak) doktorun yaptığı bir iş değil. 'Worsen' (kötüleştirmek) eksik maddenin eklenmesiyle çelişir." },
  { id: 'xs5-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['lack', 'cure'],
    level: 'kolay', cefr: 'B1', konu: ['fiil'],
    q: 'Children who eat only white bread and sweets often ---- important vitamins, so they may get ill more easily.',
    options: ['lack', 'cure', 'enjoy', 'share', 'sell'], answer: 0,
    explain: "Yalnız beyaz ekmek ve şekerleme yiyen çocukların vitamini eksik kalır; cümlenin sonu da bunun hastalığa yol açabileceğini söylüyor. Bir şeyden yoksun olmak 'lack' ile anlatılır. 'Cure' (iyileştirmek) vitaminle anlam kurmaz; çocuklar vitamini iyileştirmez. 'Enjoy' (tadını çıkarmak), 'share' (paylaşmak) ve 'sell' (satmak) daha kolay hastalanmanın nedenini açıklamaz." },
  { id: 'xs5-k3', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['sparingly'],
    level: 'zor', cefr: 'C1', konu: ['zarf'],
    q: 'Because they contain a lot of energy but few other nutrients, sugar and honey are best used ----, as small additions to a meal rather than as its main part.',
    options: ['vigorously', 'sparingly', 'generously', 'permanently', 'accidentally'], answer: 1,
    explain: "Şeker ve bal bol enerji ama az başka besin içeriyor; cümlenin sonu da onları yemeğin ana parçası değil, küçük bir eki olarak kullanmayı söylüyor. Az miktarda, idareli kullanmayı 'sparingly' anlatır. 'Generously' (bol bol) anlamı tersine çevirir ve 'small additions' sözüyle çelişir. 'Vigorously' (güçlü, yoğun biçimde) bir hareketin gücünü anlatır, miktarı değil. 'Permanently' (kalıcı olarak) ve 'accidentally' (kazara) miktar bildirmez." },

  // ---------- dil bilgisi ----------
  { id: 'xs5-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['zaman'],
    q: 'Last year, our school ---- free fruit to every pupil at break time.',
    options: ['gave', 'has given', 'gives', 'will give', 'is giving'], answer: 0,
    explain: "'Last year' (geçen yıl) bitmiş bir geçmiş zamanı gösteriyor; bu yüzden past simple gerekir: 'gave'. 'Has given' present perfect'tir ve 'last year' gibi belli bir geçmiş zamanla kullanılmaz. 'Gives' ve 'is giving' şimdiyi, 'will give' geleceği anlatır; geçen yıl olmuş bir şeyle uyuşmaz." },
  { id: 'xs5-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'A diet that is low ---- iron can leave a person feeling tired and weak.',
    options: ['at', 'for', 'by', 'in', 'to'], answer: 3,
    explain: "Bir besinin bir maddeyi az ya da çok içerdiği 'low in' ve 'high in' (… bakımından düşük, yüksek) kalıplarıyla anlatılır: a diet low in iron (demiri az olan bir beslenme). 'At' bir nokta ya da düzey bildirir ('low at night' gibi); içeriği anlatmaz. 'For' amaç ya da süre bildirir. 'By' ve 'to' bu sıfatla içerik anlamında kullanılmaz." },
  { id: 'xs5-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: '---- they are needed only in tiny amounts, vitamins are essential for many processes in the body.',
    options: ['Since', 'Unless', 'In case', 'Although', 'Whenever'], answer: 3,
    explain: "İki yarı karşıt bilgi veriyor: vitaminlere çok az miktarda ihtiyaç vardır, yine de vücuttaki pek çok süreç için vazgeçilmezdirler. Karşıtlık 'Although' (-e karşın) ile kurulur. 'Since' (-diği için) az miktarı vazgeçilmezliğin nedeni yapar ve mantığı bozar. 'Unless' (-medikçe) bir koşul kurar ve anlamı tersine çevirir. 'In case' (… diye, olasılığa karşı) bir önlem bildirir. 'Whenever' (-dığı her zaman) vitaminlerin bazen az, bazen çok gerektiğini ima eder; cümle genel bir gerçeği anlatıyor." },
  { id: 'xs5-g4', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edilgen'],
    q: 'In some countries, vitamin D ---- to certain types of milk and breakfast cereal by the companies that produce them.',
    options: ['adds', 'has added', 'is adding', 'was adding', 'is added'], answer: 4,
    explain: "D vitamini bir şeyi eklemez, eklenen şeydir; eylemi yapanlar da 'by the companies' (üretici şirketlerce) diye ayrıca belirtilmiş. Bu yüzden edilgen gerekir; cümle bugün süren bir uygulamayı anlattığı için geniş zamanlı edilgen uygun: 'is added'. 'Adds', 'has added', 'is adding' ve 'was adding' etkendir; vitaminin bir şeyi eklediğini söyler ve 'by' öbeğiyle uyuşmaz." },
  { id: 'xs5-g5', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['protein'],
    level: 'orta', cefr: 'B2', konu: ['kip (modal)'],
    q: 'You ---- eat meat to get enough protein; beans, eggs and nuts are also good sources.',
    options: ["mustn't", "shouldn't", "don't have to", "can't", "won't"], answer: 2,
    explain: "Noktalı virgülden sonraki bölüm proteinin başka kaynakları da olduğunu söylüyor; demek ki et yemek zorunlu değil. Gereklilik olmadığını 'don't have to' (zorunda değilsin) anlatır. 'Mustn't' (yememelisin, yasak) ve 'shouldn't' (yemesen iyi olur) eti yasaklar ya da kötüler; cümle yalnız seçenek olduğunu söylüyor. 'Can't' (yiyemezsin) ve 'won't' (yemeyeceksin) protein almakla anlam kurmaz." },
  { id: 'xs5-g6', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['protein'],
    level: 'zor', cefr: 'C1', konu: ['sıfat cümleciği'],
    q: 'Protein is made up of smaller units called amino acids, some of ---- the body cannot produce and must therefore obtain from food.',
    options: ['them', 'that', 'which', 'what', 'whom'], answer: 2,
    explain: "Virgülden sonra 'amino acids' sözcüğünü niteleyen bir sıfat cümleciği geliyor: 'some of which' (bunlardan bazılarını). Nicelik sözcüğü ve edattan sonra cansız varlıklar için 'which' kullanılır. 'Them' ile ikinci bir ana cümle kurulur ve iki cümle bağlaçsız, virgülle birleşmiş olur. 'That' edattan sonra kullanılmaz. 'What' bir öğeyi nitelemez. 'Whom' insanlar içindir; amino asitler için kullanılmaz." },
  { id: 'xs5-g7', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['devrik yapı'],
    q: '---- fresh fruit provide several vitamins, but it also contains fibre and plenty of water.',
    options: ['Seldom does', 'Hardly does', 'Not only does', 'Not only', 'Nor does'], answer: 2,
    explain: "Cümlenin ikinci yarısındaki 'but it also' (ama aynı zamanda) 'not only … but also' (yalnız … değil, aynı zamanda) yapısını tamamlıyor. 'Not only' cümle başına gelince yardımcı fiil özneden önce gelir: 'Not only does fresh fruit provide'. Devriksiz 'Not only' ardından 'fresh fruit provide' geldiği için dil bilgisi açısından yanlıştır. 'Seldom does' ve 'Hardly does' devrik yapıya uyar ama meyvenin vitamin vermediğini söyleyerek 'but it also' ile çelişir. 'Nor does' önceki olumsuz bir cümleye eklenir; burada öyle bir cümle yok ve anlam da olumsuza döner." },

  // ---------- boşluklu metin ----------
  { id: 'xs5-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: ['vitamin', 'supplement'],
    level: 'orta', cefr: 'B2', title: 'Bir sözcüğün hikâyesi',
    text: "Around the start of the last century, researchers were becoming convinced that ordinary food contained small amounts of substances that the body could not do without, even though nobody yet knew exactly what they were. In 1912, the biochemist Casimir Funk (1) ---- a name for them. He suspected that all of these substances belonged to a group of chemical (2) ---- known as amines, and because they appeared to be necessary for life, he called them 'vital amines', or 'vitamines'. The word was short and easy to remember, and it soon spread well beyond the laboratory. As more of the substances were studied, however, it became clear that Funk's assumption had been only partly right: many of them turned out to have nothing to do (3) ---- amines. Rather than invent a completely new term, scientists are said to have simply dropped the final 'e', (4) ---- the word would no longer suggest a chemical link that did not exist. The name 'vitamin' has been used ever since, and today the individual vitamins (5) ---- by letters, such as A, C and D.",
    steps: [
      { konu: ['zaman: past simple'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['has proposed', 'proposed', 'had proposed', 'proposes', 'was proposing'], answer: 1,
        explain: "'In 1912' geçmişte belli bir zamanı gösteriyor ve öneri o yıl yapılmış, bitmiş bir eylem; bu yüzden past simple gerekir: 'proposed'. 'Has proposed' present perfect'tir; belli bir geçmiş tarihle kullanılmaz. 'Had proposed' geçmişteki başka bir andan önceyi anlatır; cümlede böyle bir an yok. 'Proposes' geniş zamandır. 'Was proposing' süren bir eylemi anlatır; bir ad önermek tek seferlik bir iştir." },
      { konu: ['kelime', 'isim'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['diseases', 'symptoms', 'compounds', 'supplements', 'meals'], answer: 2,
        explain: "Funk bu maddelerin aminler adlı bir kimyasal madde grubuna girdiğini düşünüyordu; 'chemical compounds' (kimyasal bileşikler) bu anlamı verir. 'Supplements' (takviyeler) satılan ürünlerdir; bir kimyasal madde grubunun adı değildir. 'Diseases' (hastalıklar) ve 'symptoms' (belirtiler) yaşam için gerekli maddeleri tanımlamaz. 'Meals' (öğünler) kimyasal bir grup değildir." },
      { konu: ['edat'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['with', 'for', 'from', 'about', 'at'], answer: 0,
        explain: "'Have nothing to do with' (… ile hiçbir ilgisi olmamak) kalıp bir öbektir: maddelerin çoğunun aminlerle ilgisi olmadığı anlaşıldı. 'For', 'from', 'about' ve 'at' bu kalıpta kullanılmaz; 'nothing to do for' gibi bir kullanım 'yapacak iş olmaması' anlamına kayar ve bağlama uymaz." },
      { konu: ['bağlaç'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['even though', 'unless', 'as if', 'in case', 'so that'], answer: 4,
        explain: "Bilim insanları sondaki 'e'yi bir amaçla düşürdü: sözcük artık var olmayan bir kimyasal bağı çağrıştırmasın diye. Amaç 'so that' (… için, … diye) ile kurulur; ardından gelen 'would' da amaç cümleciğine uyar. 'Even though' (-e karşın) karşıtlık kurar ve mantığı bozar. 'Unless' (-medikçe) bir koşul kurar. 'As if' (-mış gibi) bir benzetme yapar. 'In case' (olasılığa karşı) bir önlem bildirir; 'would no longer suggest' ile anlam kurmaz." },
      { konu: ['edilgen'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['identify', 'have identified', 'are identifying', 'are identified', 'will identify'], answer: 3,
        explain: "Vitaminler bir şeyi adlandırmaz; harflerle adlandırılan, tanımlanan şeylerdir. Ardından 'by letters' (harflerle) geliyor; bugün geçerli bir durum anlatıldığı için geniş zamanlı edilgen gerekir: 'are identified'. 'Identify', 'have identified', 'are identifying' ve 'will identify' etkendir; vitaminlerin bir şeyi tanımladığını söyler." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'xs5-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although the body needs only tiny amounts of most vitamins, ----.',
    options: [
      'they are found in a wide range of ordinary foods',
      'it is able to make every one of them by itself',
      'a long shortage of just one can do real harm',
      'small amounts are enough for most healthy people',
      'large doses are the safest way to take them',
    ], answer: 2,
    explain: "'Although' (-e karşın) karşıt bir bilgi ister: vücut vitaminlerden çok az miktarda ister, yine de birinin bile uzun süre eksik kalması ciddi zarar verebilir. Az miktarın sıradan pek çok besinde bulunması ve az miktarın çoğu sağlıklı insana yetmesi karşıtlık kurmaz; ilk yarıyı yalnız sürdürür. Vücudun bütün vitaminleri kendi yapabilmesi yanlıştır. Yüksek dozun en güvenli yol olduğu söylemi yanlıştır; görünüşte 'az miktar' ile karşıt dursa da mantık kurmaz: az miktar yetiyorsa yüksek doz 'en güvenli yol' olamaz." },
  { id: 'xs5-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['neden-sonuç'],
    q: '----, so eating fruit and vegetables in a range of colours is a sensible habit.',
    options: [
      'Most fruit tastes better when it has been kept cold',
      'Vegetables are often cheaper in summer than in winter',
      'Many children refuse to eat green vegetables at all',
      'Each plant food tends to offer its own mix of vitamins',
      'Fruit juice often contains a surprising amount of sugar',
    ], answer: 3,
    explain: "'So' (bu yüzden) bir sonuç bildiriyor: farklı renklerde meyve ve sebze yemek iyi bir fikir. Bunun nedeni, her bitkisel besinin kendine özgü bir vitamin karışımı vermesidir. Meyvenin soğukken daha lezzetli olması ve sebzenin yazın ucuz olması renk çeşitliliğinin nedeni değildir. Çocukların yeşil sebzeyi reddetmesi bu sonuca bağlanmaz. Meyve suyundaki şeker ise renk çeşitliliğiyle ilgisizdir." },
  { id: 'xs5-t3', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['koşul'],
    q: 'If vegetables are boiled for a long time in plenty of water, ----.',
    options: [
      'some of their vitamins may pass into the liquid',
      'they will contain even more vitamins than raw ones',
      'they can be grown more quickly in the garden',
      'the cooking water will lose all of its minerals',
      'their colour usually becomes much brighter',
    ], answer: 0,
    explain: "Koşul, sebzenin uzun süre bol suda kaynatılması; bunun bilinen sonucu, bazı vitaminlerin pişirme suyuna geçmesidir. Sebzenin çiğinden daha çok vitamin içermesi bu sonucun tersidir. Sebzenin bahçede daha hızlı yetişmesi pişirmeyle ilgisizdir. Pişirme suyunun minerallerini yitirmesi de ters: kaynatılan sebzeden suya madde geçer. Rengin parlaklaşması da yanlış; uzun kaynatılan sebze çoğu zaman solar." },
  { id: 'xs5-t4', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['malnourished'],
    level: 'orta', cefr: 'B2', konu: ['zaman'],
    q: '----, their growth may slow down and they may catch infections more easily.',
    options: [
      'When children stay malnourished for a long period',
      'Before children start to eat solid food at home',
      'As soon as children drink a glass of fresh milk',
      'Until children are old enough to cook alone',
      'After children have eaten well for many years',
    ], answer: 0,
    explain: "Ana cümle bir sorunu anlatıyor: büyüme yavaşlayabilir, enfeksiyonlar kolay kapılabilir. Bunun zamanını, çocukların uzun süre yetersiz beslendiği dönem verir. Katı besine geçmeden önceki dönem ve bir bardak süt içer içmez kurulan zaman bu sorunlara yol açmaz. Kendi başına yemek yapabilecek yaşa gelene kadar büyümenin yavaşlaması anlam kurmaz. Yıllarca iyi beslendikten sonra hastalığa yatkınlığın artması mantığı tersine çevirir." },
  { id: 'xs5-t5', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['karşıtlık'],
    q: '----, a person who eats large amounts of cheap, highly processed food can still be poorly nourished.',
    options: [
      'Since such a person rarely takes in enough energy',
      'Because food of this kind contains little fat or sugar',
      'As long as they avoid sugary drinks completely',
      'Once they have stopped eating processed food',
      'Even though they may get more than enough energy',
    ], answer: 4,
    explain: "Ana cümledeki 'still' (yine de) bir karşıtlık bekliyor: çok işlenmiş besini bol yiyen kişi, gereğinden fazla enerji alsa bile yetersiz beslenmiş olabilir; çünkü bu besinler enerji verir ama vitamin ve mineral bakımından yoksul olabilir. Kişinin yeterli enerji almaması bir neden bildirir ve 'still' ile uyuşmaz; ayrıca bol yemekle çelişir. İşlenmiş besinin az yağ ve şeker içermesi yanlıştır. Şekerli içecekten kaçınma koşulu yetersiz beslenmeyi açıklamaz. İşlenmiş besini bırakmış olmak, onu bol yiyen kişiyle çelişir." },
  { id: 'xs5-t6', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['lack'],
    level: 'zor', cefr: 'C1', konu: ['amaç'],
    q: 'Many countries add iodine, a mineral the body needs in small amounts, to ordinary table salt in order to ----.',
    options: [
      'make the salt taste less bitter and more natural',
      'reduce the number of people whose diets lack it',
      'encourage people to use as much salt as they can',
      'make the salt last longer once a packet is open',
      'stop the salt from taking in water in damp weather',
    ], answer: 1,
    explain: "Kök iyotun vücudun az miktarda ihtiyaç duyduğu bir mineral olduğunu söylüyor; sofra tuzuna eklenmesinin amacı, beslenmesinde iyot eksik olan insanların sayısını azaltmaktır. Tuzun tadını düzeltmek, tuzun daha uzun dayanması ve nemli havada su çekmemesi iyotun bir besin öğesi olduğu bilgisine bağlanmaz. İnsanları olabildiğince çok tuz kullanmaya özendirmek hem yanlış hem de sağlık amacına ters." },

  // ---------- çeviri: İngilizceden Türkçeye ----------
  { id: 'xs5-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['mineral'],
    level: 'orta', cefr: 'B2', konu: ['edilgen'],
    q: 'Most of the minerals that the body needs are obtained from food and drinking water.',
    options: [
      'Vücudun ihtiyaç duyduğu minerallerin bir kısmı besinlerden ve içme suyundan elde edilir.',
      'Vücudun ihtiyaç duyduğu minerallerin çoğu besinlerden ve içme suyundan elde edilir.',
      'Vücudun depoladığı minerallerin çoğu besinlerden ve takviyelerden elde edilir.',
      'Vücudun ihtiyaç duyduğu minerallerin çoğu besinlerden ve takviyelerden elde edilir.',
      'Vücudun ihtiyaç duyduğu minerallerin bir kısmı besinlerden ve takviyelerden elde edilir.',
    ], answer: 1,
    explain: "'Most of the minerals' minerallerin çoğu, 'that the body needs' vücudun ihtiyaç duyduğu, 'are obtained from food and drinking water' besinlerden ve içme suyundan elde edilir demektir; edilgen yapı Türkçede de edilgen kalır. Doğru çeviri bunları karşılıyor. 'Bir kısmı' diyen ve kaynakları doğru veren çeviri 'most' sözünü daraltıyor. 'Besinlerden ve takviyelerden' diyen ve 'çoğu'nu koruyan çeviride kaynak değişmiş: kökte takviye yok, içme suyu var. 'Bir kısmı … takviyelerden' çevirisi hem nicelikte hem kaynakta yanılıyor. Vücudun 'depoladığı' minerallerden söz eden çeviri ise ihtiyaç duyulan mineralleri başka bir gruba çeviriyor; içme suyunun yerine de takviye koyuyor." },
  { id: 'xs5-c2', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['karşılaştırma'],
    q: 'Fresh vegetables usually contain more vitamins than vegetables that have been stored for a long time.',
    options: [
      'Taze sebzeler genellikle kısa süre saklanmış sebzelerden daha çok vitamin içerir.',
      'Taze sebzeler genellikle uzun süre saklanmış sebzelerden daha çok lif içerir.',
      'Taze sebzeler her zaman uzun süre saklanmış sebzelerden daha çok lif içerir.',
      'Taze sebzeler genellikle kısa süre saklanmış sebzelerden daha çok lif içerir.',
      'Taze sebzeler genellikle uzun süre saklanmış sebzelerden daha çok vitamin içerir.',
    ], answer: 4,
    explain: "'More … than' (-den daha çok) taze sebzeyi uzun süre saklanmış sebzeyle karşılaştırıyor; 'usually' genellikle, 'vitamins' vitamin demektir. Doğru çeviri bunları karşılıyor. 'Kısa süre saklanmış sebzelerden' daha çok vitamin içerdiğini söyleyen çeviri, karşılaştırılan sebzeleri 'stored for a long time' sözüne aykırı biçimde tanımlıyor. Uzun süre saklanmış sebzelerle karşılaştırıp 'lif' diyen çeviride ölçülen besin öğesi değişmiş. 'Her zaman … lif' çevirisi 'usually' sözünü kesinliğe çeviriyor, vitaminden de söz etmiyor. Kısa süre saklanmış sebzelerle lifi karşılaştıran çeviri ise hem saklama süresini hem besin öğesini değiştiriyor." },
  { id: 'xs5-c3', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['crave'],
    level: 'zor', cefr: 'C1', konu: ['isim cümleciği'],
    q: 'What many people do not realise is that they may crave salty or sweet food simply because they are tired.',
    options: [
      'Pek çok insanın iyi bildiği şey, yalnızca yorgun oldukları için canlarının tuzlu ya da tatlı yiyecekler çekebileceğidir.',
      'Pek çok insanın fark etmediği şey, yalnızca susuz kaldıkları için canlarının tuzlu ya da tatlı yiyecekler çekebileceğidir.',
      'Pek çok insanın iyi bildiği şey, yalnızca susuz kaldıkları için canlarının tuzlu ya da tatlı yiyecekler çekebileceğidir.',
      'Pek çok insanın fark etmediği şey, yalnızca yorgun oldukları için canlarının tuzlu ya da tatlı yiyecekler çekebileceğidir.',
      'Pek çok insanın fark etmediği şey, yalnızca susuz kaldıkları için canlarının tuzlu ya da acı yiyecekler çekebileceğidir.',
    ], answer: 3,
    explain: "'What many people do not realise' (pek çok insanın fark etmediği şey) cümlenin öznesi olan isim cümleciğidir; 'is that …' bu şeyin ne olduğunu söyler: yalnızca yorgun oldukları için ('simply because they are tired') canlarının tuzlu ya da tatlı yiyecekler çekebileceği ('may crave'). Doğru çeviri bunu karşılıyor. 'İyi bildiği şey' diye başlayan ve yorgunluğu koruyan çeviri 'do not realise' sözünü tersine çeviriyor. 'Susuz kaldıkları için' diyen ama 'fark etmediği'yi koruyan çeviride neden değişmiş: kökte yorgunluk var. 'İyi bildiği … susuz kaldıkları' çevirisi hem bilinmeyeni bilinene hem yorgunluğu susuzluğa çeviriyor. 'Tuzlu ya da acı' diyen çeviri ise tatlıyı acıya çeviriyor; nedeni de susuzluk olarak veriyor." },

  // ---------- çeviri: Türkçeden İngilizceye ----------
  { id: 'xs5-c4', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['koşul'],
    q: 'Çok tuzlu yemek yersen zamanla tansiyonun yükselebilir.',
    options: [
      'If you eat very salty food, your blood pressure may rise within a few days.',
      'If you eat very salty food, your blood pressure may rise over time.',
      'If you eat very fatty food, your blood pressure may rise within a few days.',
      'If you eat very fatty food, your blood pressure may rise over time.',
      'If you eat very salty food, your heart rate may rise within a few days.',
    ], answer: 1,
    explain: "'-rsen' bugün ya da gelecekte olası bir koşul kurar (if + geniş zaman); '-ebilir' olasılık bildirir (may), 'zamanla' over time demektir. Doğru çeviri bunları karşılıyor. Tuzlu yemeği koruyup 'within a few days' diyen çeviri, yavaş gelişen bir sonucu birkaç güne sıkıştırıyor. 'Very fatty food' diyen ve 'over time'ı koruyan çeviride koşul değişmiş: kökte tuzlu yemek var, yağlı değil. Yağlı yemeği birkaç günle birleştiren çeviri koşulda da zamanda da yanılıyor. 'Your heart rate' diyen çeviri ise tansiyonun yerine nabızdan söz ediyor ve zamanı da birkaç gün olarak veriyor." },
  { id: 'xs5-c5', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Hem süt hem de yoğurt bol kalsiyum içerir; bu yüzden ikisi de kemikler için önemlidir.',
    options: [
      'Both milk and yoghurt contain plenty of calcium, so they are both important for the bones.',
      'Both milk and yoghurt contain plenty of calcium, so they are both important for the teeth.',
      'Either milk or yoghurt contains plenty of calcium, so one of them a day is enough for the bones.',
      'Milk contains more calcium than yoghurt, so it is more important for the bones.',
      'Both milk and yoghurt contain some calcium, but neither is enough for the bones on its own.',
    ], answer: 0,
    explain: "'Hem … hem de' sütü ve yoğurdu birlikte kapsar: 'both … and'. 'Bol kalsiyum' plenty of calcium, 'bu yüzden' so, 'ikisi de kemikler için önemlidir' they are both important for the bones demektir. Doğru çeviri bunların hepsini taşıyor. 'For the teeth' diyen çeviri sonucu kemiklerden dişlere kaydırıyor. 'Either … or' ile kurulan çeviri sütten ve yoğurttan yalnız birini yeterli sayıyor ve kökte olmayan 'günde bir' ölçüsünü ekliyor. Sütü yoğurttan üstün tutan çeviri kökte olmayan bir karşılaştırma kuruyor. 'Some calcium … neither is enough' çevirisi ise 'bol'u 'biraz'a indiriyor ve sütün de yoğurdun da tek başına yetmediğini söyleyerek sonucu değiştiriyor." },
  { id: 'xs5-c6', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['isim-fiil ve mastar'],
    q: 'Yağlı ve şekerli yiyecekleri ölçülü tüketmek, çoğu insan için onlardan tamamen vazgeçmekten daha kolaydır.',
    options: [
      'Eating fatty and salty foods in moderation is easier for most people than giving them up completely.',
      'Eating fatty and sugary foods in moderation is harder for most people than giving them up completely.',
      'Eating fatty and sugary foods in moderation is easier for most people than giving them up completely.',
      'Eating fatty and salty foods in moderation is harder for most people than giving them up completely.',
      'Eating fatty and sugary foods in moderation is harder for some people than giving them up completely.',
    ], answer: 2,
    explain: "Cümlenin öznesi bir isim-fiildir: 'ölçülü tüketmek' (eating … in moderation). 'Vazgeçmekten daha kolaydır' 'easier than giving them up', 'çoğu insan için' 'for most people' ile karşılanır. Doğru çeviri bunları karşılıyor. 'Fatty and salty foods' diyen ve 'easier'ı koruyan çeviri şekerli yiyecekleri tuzlu yiyeceklere çeviriyor. Şekerli yiyeceklerde kalıp 'harder' diyen çeviri karşılaştırmayı tersine döndürüyor: ölçülü tüketmek daha zor hâle geliyor. Tuzlu yiyecekleri 'harder' ile birleştiren çeviri hem yiyecek türünde hem karşılaştırmanın yönünde yanılıyor. 'Harder for some people' çevirisi ise karşılaştırmayı tersine çevirirken 'çoğu insan'ı da 'bazı insanlar'a daraltıyor." },

  // ---------- okuma ----------
  { id: 'xs5-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['scurvy'],
    level: 'orta', cefr: 'B2', title: 'Salisbury gemisindeki denizciler',
    text: "In 1747, a ship's surgeon named James Lind was serving aboard HMS Salisbury when many of the crew fell ill with scurvy. The disease was a familiar danger on long voyages: sufferers grew weak, their gums swelled and bled, and old wounds could open again. Many remedies had been suggested over the years, but nobody knew which of them, if any, actually worked. Lind decided to compare them. He chose twelve sailors whose illness seemed to be at a similar stage, kept them in the same part of the ship and gave them the same basic meals. He then divided them into pairs and gave each pair a different addition to their diet, such as cider, vinegar or seawater. One pair received two oranges and a lemon every day. Within a short time, these two men had improved so much that one of them was able to help look after the others, whereas most of the remaining sailors showed little change. Because his patients were treated alike in every way except one, Lind's experiment is often described as one of the earliest controlled trials in medicine. Yet his result did not change practice quickly. Fresh fruit was expensive and hard to keep on long journeys, and other explanations of the disease remained popular. It was not until 1795 that the Royal Navy began to give its sailors lemon juice as a regular part of their rations, and after that scurvy became far less common on British ships.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, before dividing the twelve sailors into pairs, Lind made sure that they ----.',
        options: [
          'had all been ill for the same number of days',
          'had already tried each of the well-known remedies',
          'came from several ships in the same fleet',
          'were allowed to choose their own remedy',
          'shared the same living conditions and ordinary food',
        ], answer: 4,
        explain: "Parçaya göre Lind hastalığı benzer evrede görünen denizcileri seçti, onları geminin aynı bölümünde tuttu ve hepsine aynı temel yemeği verdi; doğru seçenek bunu başka sözlerle söylüyor. Parça hastalığın 'benzer evrede' olduğunu söylüyor; hepsinin aynı gün sayısı kadar hasta olduğunu söylemiyor. Denizcilerin bilinen çareleri önceden denemesi, birkaç farklı gemiden gelmesi ve çarelerini kendilerinin seçmesi parçada geçmiyor." },
      { konu: ['ana fikir'],
        q: 'The main point of the passage is that ----.',
        options: [
          'scurvy vanished from ships as soon as Lind made his results widely known',
          'sailors of that period preferred cider and vinegar to fresh fruit',
          'a careful comparison showed what worked, yet the navy was slow to act',
          'Lind found the exact substance in citrus fruit that prevents scurvy',
          'long voyages were dangerous mainly because of storms and old ships',
        ], answer: 2,
        explain: "Parça Lind'in denizcileri her yönden eşit tutup yalnız bir şeyi değiştirerek hangi çarenin işe yaradığını gösterdiğini, ama donanmanın bu sonucu ancak çok sonra uyguladığını anlatıyor. İskorbütün sonuçlar duyurulur duyurulmaz gemilerden kalktığı söylemi, sonucun 'uygulamayı çabuk değiştirmediği' bilgisiyle çelişir. Denizcilerin elma şarabını meyveye yeğlemesi parçada yok. Lind'in turunçgildeki maddeyi tam olarak bulduğu da parçada yok; parça yalnız portakal ve limon alanların iyileştiğini söylüyor. Fırtınalar ve eski gemiler parçanın konusu değil." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that the long delay before the navy acted on Lind\'s finding ----.',
        options: [
          'was due to the fact that his trial had produced no clear result',
          'ended only because sailors themselves began to demand oranges',
          'made no real difference to the health of British sailors',
          'was shorter than the time other navies took to make a similar change',
          'was partly due to practical difficulties, not to doubt alone',
        ], answer: 4,
        explain: "Parça gecikmenin iki nedenini sayıyor: taze meyve pahalıydı ve uzun yolculukta saklanması zordu (pratik güçlük), ayrıca hastalığın başka açıklamaları da revaçtaydı. Demek ki gecikmenin bir kısmı pratik sorunlardan kaynaklandı. Denemenin açık bir sonuç vermediği, portakal alan iki denizcinin hızla iyileşmesiyle çelişir. Denizcilerin portakal istemesi ve öteki donanmalarla karşılaştırma parçada yok. Gecikmenin sağlığa etkisi olmadığı söylemi de yanlış: donanma limon suyu verince iskorbüt çok azaldı; demek ki o zamana kadar yaygındı." },
      { konu: ['gönderim'],
        q: "The phrase 'these two men' in the passage refers to the sailors who ----.",
        options: [
          'were given cider as an addition to their meals',
          'helped Lind to look after the rest of the crew',
          'were not chosen to take part in the experiment',
          'were given citrus fruit as part of their diet',
          'drank seawater instead of their usual drink',
        ], answer: 3,
        explain: "'These two men' hemen önceki cümledeki çifti gösterir: her gün iki portakal ve bir limon alan denizciler; doğru seçenek bunu 'citrus fruit' (turunçgil) diye söylüyor. Elma şarabı ve deniz suyu başka çiftlere verilen eklerdir. Ötekilere bakmaya yardım eden yalnız bu iki kişiden biriydi; ikisi değil. Deneye seçilmeyen denizciler parçada anılmıyor." },
    ] },
  { id: 'xs5-o2', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['supplement', 'dietary', 'mineral', 'vitamin'],
    level: 'zor', cefr: 'C1', title: 'Eczane rafındaki kutular',
    text: "Walk into almost any pharmacy and you will find shelves full of dietary supplements: tablets, capsules and powders that promise to deliver vitamins and minerals in a convenient form. Many people take them every day, apparently in the belief that more of a good thing must be better. The evidence, however, suggests a more complicated picture. For healthy adults who already eat a varied diet, many supplements appear to offer little measurable benefit, since such a diet usually provides most of what the body needs. In these cases, much of the extra amount is often simply passed out of the body. The situation is different for some vitamins, such as A and D, which dissolve in fat. Because the body tends to store these rather than removing any excess quickly, taking large doses over a long period may allow them to build up to harmful levels. None of this means that supplements are worthless. Doctors may recommend them for people with a diagnosed deficiency or with particular medical needs, and in such cases they can be genuinely valuable. The point is rather that a supplement is designed to fill a specific gap, not to take the place of ordinary food. A tablet cannot offer the fibre, the variety of other useful substances or the simple pleasure that comes with a well-prepared meal. Anyone who is unsure whether they need one would be wise to ask a doctor or pharmacist, rather than relying on the claims printed on the packet.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'The passage states that taking large amounts of vitamins A and D for a long time ----.',
        options: [
          'is the most effective way of correcting a deficiency',
          'has no effect, as the body removes the excess quickly',
          'is advisable for every healthy adult who eats well',
          'may cause them to accumulate to unsafe levels',
          'is safe as long as a varied diet is also eaten',
        ], answer: 3,
        explain: "Parçaya göre vücut A ve D vitaminlerinin fazlasını çabuk atmak yerine depolama eğilimindedir; bu yüzden uzun süre yüksek doz almak bunların zararlı düzeylere birikmesine yol açabilir. Doğru seçenek bunu 'accumulate to unsafe levels' diye söylüyor. Fazlanın hızla atılması parçada başka vitaminler için söyleniyor; A ve D için tersi geçerli. Eksikliği gidermenin en etkili yolu olması, her sağlıklı yetişkine önerilmesi ve çeşitli beslenmeyle güvenli olması parçada yok; parçanın uyarısıyla da çelişir." },
      { konu: ['başlık'],
        q: 'Which of the following would be the most suitable title for the passage?',
        options: [
          'How the First Vitamins Were Discovered',
          'The Rising Cost of Pharmacy Products',
          'Why Cooked Food Is Less Healthy Than Raw',
          'Supplements: Useless Products to Avoid',
          'Supplements: Gap Fillers, Not Meals',
        ], answer: 4,
        explain: "Parçanın ana düşüncesi takviyelerin belirli bir eksikliği kapatmak için yararlı olabileceği, ama sıradan yemeğin yerini tutamayacağıdır; doğru başlık bunu özetliyor. Takviyelerin işe yaramaz olduğunu söyleyen başlık, parçadaki 'None of this means that supplements are worthless' cümlesiyle çelişir. Vitaminlerin keşfi, eczane ürünlerinin fiyatı ve pişmiş yemeğin sağlığa etkisi parçanın konusu değil." },
      { konu: ['çıkarım'],
        q: 'The passage implies that a healthy adult with a varied diet who starts taking a daily multivitamin ----.',
        options: [
          'will probably develop a serious deficiency without it',
          'ought to cut down on fruit and vegetables at once',
          'is certain to be harmed by the vitamins A and D in it',
          'needs to take it with a fatty meal for it to work',
          'is unlikely to see much difference in their health',
        ], answer: 4,
        explain: "Parçaya göre çeşitli beslenen sağlıklı yetişkinlerde pek çok takviye ölçülebilir bir yarar sağlamıyor, çünkü böyle bir beslenme gerekenin çoğunu zaten veriyor. Demek ki böyle biri günlük multivitaminle sağlığında büyük bir fark görmeyecektir. Takviye olmadan ciddi eksiklik gelişeceği bu bilgiyle çelişir. Meyve ve sebzeyi azaltma önerisi parçada yok. A ve D vitaminlerinin zararı yalnız uzun süre yüksek dozda olasıdır; 'kesin zarar' parçanın temkinli diliyle çelişir. Takviyenin yağlı yemekle alınması gerektiği de parçada geçmiyor." },
      { konu: ['yazarın tutumu'],
        q: "The writer's attitude towards dietary supplements can best be described as ----.",
        options: [
          'cautious but not dismissive',
          'enthusiastic and uncritical',
          'hostile and entirely dismissive',
          'neutral and purely descriptive',
          'puzzled and openly uncertain',
        ], answer: 0,
        explain: "Yazar takviyelerin sağlıklı ve iyi beslenen insanlara çoğu zaman az yarar sağladığını ve bazılarının yüksek dozda zararlı olabileceğini söylüyor; ama bunların değersiz olmadığını, belirli durumlarda gerçekten yararlı olabileceğini de ekliyor. Bu, temkinli ama küçümsemeyen bir tutumdur. Yazar takviyeleri övmüyor; tamamen karşı da değil. Okura bir doktora danışmasını önerdiği için yalnız betimleyen, tarafsız bir anlatım da değil. Yazar kararsız ya da şaşkın görünmüyor; görüşünü açıkça veriyor." },
    ] },

  // ---------- paragraf tamamlama ----------
  { id: 'xs5-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'In the 1890s, the doctor Christiaan Eijkman was working in Java, searching for the cause of beriberi, a disease that can damage the nerves and the heart. At first he expected to find a germ responsible for it. ----. When the birds were given unpolished rice instead, they recovered. It was later understood that the outer layer removed during polishing contains vitamin B1, and in 1929 Eijkman shared the Nobel Prize with Frederick Gowland Hopkins.',
    options: [
      'However, he then noticed that chickens fed on polished white rice became similarly ill',
      'As a result, he concluded that the disease had nothing at all to do with what people ate',
      'He also kept a number of chickens, which he planned to use in his experiments on infection',
      'Polished rice was popular in the region because it kept for longer and looked cleaner',
      'He therefore gave the patients in his hospital much larger doses of the usual medicine',
    ], answer: 0,
    explain: "Boşluktan sonraki cümle 'the birds' (kuşlar) diye başlıyor ve kuşların cilasız pirinçle iyileştiğini söylüyor; demek ki boşlukta hasta kuşlar ve cilalı pirinç tanıtılmalı. Doğru seçenek, Eijkman'ın mikrop ararken cilalı beyaz pirinçle beslenen tavuklarda benzer bir hastalık fark ettiğini söyleyerek iki cümleyi bağlıyor; 'However' de beklentiyle gözlem arasındaki karşıtlığı veriyor. Tavukların deney için tutulduğunu söyleyen seçenek kuşları tanıtıyor ama hasta olduklarını söylemiyor; 'iyileştiler' sözü boşta kalır. Hastalığın beslenmeyle ilgisi olmadığı sonucu paragrafın sonuyla çelişir. Cilalı pirincin neden sevildiği ve hastalara daha çok ilaç verilmesi 'the birds' sözüne bağlanmaz." },
  { id: 'xs5-p2', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['rickets', 'vitamin'],
    level: 'orta', cefr: 'B2', konu: ['gönderim'],
    q: "Rickets is a condition in which children's bones become soft and weak, so that the legs may bend under the body's weight. It is usually caused by a shortage of vitamin D, which the body needs in order to use calcium properly. ----. This is why the disease was once common among children in crowded industrial cities, where smoke often hid the sun and many young people rarely played outdoors. In the early twentieth century, doctors found that cod liver oil and sunlight could help to treat it.",
    options: [
      'Calcium itself is found in milk, cheese, yoghurt and some green vegetables',
      'Some of it comes from food, but much is made in the skin in sunlight',
      'Adults, too, can suffer from a similar softening of the bones',
      'Children with the disease often feel pain in their legs, hips and back',
      'Unlike most vitamins, it is found naturally in only a few foods',
    ], answer: 1,
    explain: "Boşluktan sonraki cümle 'This is why' (bu yüzden) ile başlıyor ve hastalığın dumanın güneşi kapattığı, çocukların dışarıda pek oynamadığı kentlerde yaygın olduğunu söylüyor. 'This' güneş ışığıyla ilgili bir bilgiyi göstermeli: D vitamininin önemli bir kısmının güneş ışığında deride yapılması. Doğru seçenek bunu veriyor. D vitamininin az sayıda besinde bulunması gerçek bir bilgi, ama dumanın ve kapalı yerde kalmanın neden önemli olduğunu açıklamaz. Kalsiyumun bulunduğu besinler, yetişkinlerdeki benzer hastalık ve çocukların ağrısı da 'This is why' ile kurulan sonuca bağlanmaz." },
  { id: 'xs5-p3', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['scurvy', 'vitamin'],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    q: 'Scurvy is caused by a shortage of vitamin C, a substance the body needs to build and repair the tissues that hold skin, gums and blood vessels together. For most mammals, this is not a problem. ----. Humans, however, along with a few other groups of animals, such as monkeys and guinea pigs, lost this ability long ago and must therefore obtain the vitamin from their food. If fresh fruit and vegetables are missing from the diet for long enough, the signs of scurvy begin to appear.',
    options: [
      'Many of them eat large amounts of fresh plants that contain the vitamin',
      'Sailors on long voyages were once especially likely to develop the disease',
      'Their bodies are able to make the vitamin themselves, so they need not eat it',
      'The vitamin is also lost quickly when food is cooked or stored for long',
      'Some of them, in fact, suffer from the disease far more often than humans do',
    ], answer: 2,
    explain: "Boşluktan sonraki cümle 'this ability' (bu yetenek) diyor ve insanların bu yeteneği yitirdiğini söylüyor; demek ki boşlukta öteki memelilerin bir yeteneği anlatılmalı. Doğru seçenek, bu hayvanların vitamini kendilerinin yapabildiğini ve yemeleri gerekmediğini söylüyor; 'For most mammals, this is not a problem' cümlesini de açıklıyor. Memelilerin çok bitki yemesi bir yetenek değil, bir alışkanlık; 'this ability' sözüne bağlanmaz. Denizciler ve pişirmede vitamin kaybı konuyu başka yöne çeker. Bazı memelilerin hastalığa insandan sık yakalandığı söylemi, 'sorun değil' cümlesiyle çelişir." },

  // ---------- akışı bozan cümle ----------
  { id: 'xs5-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['mineral', 'protein'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'A simple way to plan a balanced meal is to picture the plate as divided into several sections.',
      'In some cultures, it is considered polite to leave a little food uneaten at the end of a meal.',
      'The largest part of it can be filled with vegetables and fruit, which supply vitamins, minerals and fibre.',
      'A smaller section is kept for starchy foods such as bread, rice or potatoes, preferably wholegrain ones.',
      'The remaining space is for protein foods such as fish, eggs, beans or meat.',
    ], answer: 1,
    explain: "Parça dengeli bir öğünü planlamanın yolunu anlatıyor: tabağı bölümlere ayrılmış düşünmek (I); en büyük kısmı sebze ve meyveye ayırmak (III); daha küçük bir bölümü nişastalı besinlere (IV) ve kalan yeri proteinli besinlere (V) bırakmak. III. cümledeki 'it' I. cümledeki tabağı gösterir. II. cümle de yemekten söz ediyor, ama tabağın planlanmasından sofra görgüsüne geçiyor ve I ile III arasındaki bağı koparıyor." },
  { id: 'xs5-b2', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Water makes up a large part of the human body and is needed for almost every process that keeps us alive.',
      'Bottled water is often sold in plastic containers that can take a very long time to break down.',
      'We lose some of it all the time, through breathing, sweating and going to the toilet.',
      'This lost water has to be replaced, either from drinks or from foods such as fruit and soup.',
      'On hot days or during exercise, we lose more than usual, so we generally need to drink more as well.',
    ], answer: 1,
    explain: "Parça suyun vücuttaki yerini anlatıyor: su vücudun büyük bir kısmını oluşturur (I); onu soluk, ter ve idrarla sürekli yitiririz (III); yitirilen su içecek ve besinlerle yerine konmalıdır (IV); sıcakta ve egzersizde daha çok yitirir, daha çok içeriz (V). II. cümle de sudan söz ediyor, ama vücuttan çevreye, plastik şişelerin doğada bozulmasına geçiyor; akışa bağlanmıyor." },
  { id: 'xs5-b3', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['dietary'],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    sentences: [
      'Dietary fibre is the part of plant foods that the human body cannot fully digest.',
      'Although it passes through the digestive system largely unchanged, it plays several useful roles along the way.',
      'It adds bulk to the contents of the intestine, which helps waste to move through more easily.',
      'The amount of fibre shown on food labels is measured in different ways in different countries, which can make comparisons difficult.',
      'It also tends to make meals more filling, which may help people avoid eating more than they need.',
    ], answer: 3,
    explain: "Parça lifin ne olduğunu ve vücuttaki işlerini anlatıyor: lif bitkisel besinlerin sindirilemeyen kısmıdır (I); sindirim sisteminden pek değişmeden geçse de yararlı işler görür (II); bağırsak içeriğine hacim katar (III); öğünleri daha doyurucu yapar (V). V. cümledeki 'It also' (o da ayrıca) III. cümledeki işe eklenen ikinci bir işi bildirir. IV. cümle de liften söz ediyor, ama lifin vücuttaki işlevinden etiketlerdeki ölçüm farklarına geçiyor ve iki işlev arasına giriyor." },
];

export default { id: 'set-saglik-5', course: C, title: U, order: 5, set: true, cards, items };
