// iDil › Fen bilimleri › Lityum iyon piller.
// Tümü özgün: Claude yazdı (13 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (yalnız olgular; metin özgün): Whittingham'ın 1970'lerde titanyum disülfit katot ve metalik lityum anotla yaptığı
// pil (2 voltun biraz üstü, patlama riski), Goodenough'un 1980'de kobalt oksit katotla yaklaşık 4 volt elde etmesi, Yoshino'nun
// 1985'te anotta metalik lityumun yerine petrol koku koyması, Sony'nin 1991'de satışa başlaması, 2019 Nobel Kimya Ödülü ve
// 97 yaşındaki Goodenough'un en yaşlı Nobel sahibi olması (Kraliyet İsveç Bilimler Akademisi, 2019 Nobel Kimya Ödülü duyurusu).
// Pilin işleyişi, kapasite kaybı, ısıl kaçak, geri dönüşüm ve sodyumun bolluğu: genel ve yerleşik bilgiler (çoğaltma planı
// §4.6). Öteki yerleşik olgular: kobalt madenciliğinin kötü çalışma koşullarıyla anılması; hücre fiyatlarının 1991'den bu
// yana çok düşmesi (Ziegler ve Trancik 2021); Güney Amerika'daki tuz düzlüklerinde tuzlu suyun havuzlarda buharlaştırılması;
// nikel-kadmiyum pillerdeki "bellek etkisi"; araçta ömrünü dolduran pillerin enerji depolamada yeniden kullanılması; evsel
// çöpe atılan pillerin yangın çıkarabilmesi. Sayı verilmeyen yerlerde dil temkinli.

const T = 'taslak';
const C = 'fen';
const U = 'Lityum iyon piller';

const cards = [
  { code: 'phase out', title: 'aşama aşama kaldırmak, kullanımdan yavaş yavaş çekmek', pos: 'öbek fiil', cefr: 'C1', ipa: '/ˌfeɪz ˈaʊt/',
    text: "Bir şeyi bir anda değil, belli bir süreye yayarak ortadan kaldırmak: phase out coal, phase out a product. Tersi 'phase in' (aşama aşama yürürlüğe koymak). Adı tireyle yazılır: the phase-out of diesel cars.",
    example: 'The city is phasing out its old diesel buses and replacing them with electric ones.',
    exampleTr: 'Belediye, eski dizel otobüslerini aşama aşama hizmetten çekip yerlerine elektrikli otobüsler getiriyor.',
    synonyms: ['discontinue', 'withdraw gradually'], family: ['phase-out'] },
  { code: 'rechargeable', title: 'yeniden doldurulabilen, şarj edilebilen', pos: 'sıfat', cefr: 'B2', ipa: '/ˌriːˈtʃɑːdʒəbl/',
    text: "'re-' (yeniden), 'charge' (şarj etmek) ve '-able' (-ebilir) parçalarından oluşur. Tek kullanımlık pile 'disposable battery' ya da 'single-use battery' denir.",
    example: 'These wireless headphones run on a rechargeable battery that lasts about twenty hours.',
    exampleTr: 'Bu kablosuz kulaklıklar, yaklaşık yirmi saat dayanan şarj edilebilir bir pille çalışıyor.',
    synonyms: [], family: ['recharge', 'charger'] },
  { code: 'capacity', title: 'kapasite; alabilme ya da yapabilme gücü; (pilde) depolayabildiği elektrik miktarı', pos: 'isim', cefr: 'B2', ipa: '/kəˈpæsəti/',
    text: "Pillerde depolanabilen elektrik yükünün miktarıdır; telefonlarda mAh (miliamper saat) ile verilir. Genel anlamda bir yerin alabileceği miktarı ya da bir yeteneği anlatır: a capacity for hard work.",
    example: 'The new concert hall has a capacity of about two thousand people.',
    exampleTr: 'Yeni konser salonu yaklaşık iki bin kişi alıyor.',
    synonyms: ['volume', 'ability'], family: ['capable', 'capability'] },
  { code: 'degrade', title: 'bozulmak, niteliği düşmek; ayrışmak', pos: 'fiil', cefr: 'C1', ipa: '/dɪˈɡreɪd/',
    text: "Fen metinlerinde bir malzemenin zamanla bozulması ya da daha basit maddelere ayrışmasıdır. Adı 'degradation'; 'biodegradable' doğada kendiliğinden ayrışabilen demektir. Gündelik dilde 'küçük düşürmek' anlamı da var.",
    example: 'Some plastics can take hundreds of years to degrade in the sea.',
    exampleTr: 'Bazı plastiklerin denizde ayrışması yüzlerce yıl sürebilir.',
    synonyms: ['deteriorate', 'break down'], family: ['degradation', 'biodegradable'] },
  { code: 'scarce', title: 'kıt, az bulunan', pos: 'sıfat', cefr: 'B2', ipa: '/skeəs/',
    text: "Gereksinime göre az bulunan şeyler için kullanılır: scarce resources. Adı 'scarcity' (kıtlık). Zarfı 'scarcely' ise 'hemen hemen hiç, ancak' demektir; anlamını ayrı öğren.",
    example: 'Food was scarce in the village during the long, hard winter.',
    exampleTr: 'Uzun ve sert kış boyunca köyde yiyecek kıttı.',
    synonyms: ['rare', 'in short supply'], family: ['scarcity', 'scarcely'] },
  { code: 'extract', title: 'çıkarmak, elde etmek (bir maddeyi kaynağından)', pos: 'fiil', cefr: 'C1', ipa: '/ɪkˈstrækt/',
    text: "Bir maddeyi bulunduğu yerden çekip çıkarmak: extract oil, extract a tooth, extract information. İsim olarak vurgu başa kayar: an extract /ˈekstrækt/ (öz; alıntı). Adı 'extraction'.",
    example: 'Olive oil is extracted by crushing and pressing the fruit.',
    exampleTr: 'Zeytinyağı, meyve ezilip sıkılarak elde edilir.',
    synonyms: ['remove', 'obtain'], family: ['extraction'] },
  { code: 'ignite', title: 'tutuşmak; tutuşturmak, ateşlemek', pos: 'fiil', cefr: 'C1', ipa: '/ɪɡˈnaɪt/',
    text: "Hem nesneli (tutuşturmak) hem nesnesiz (tutuşmak) kullanılır. Mecaz anlamda bir tartışmayı ya da duyguyu alevlendirmektir: ignite a debate. Adı 'ignition' (ateşleme; arabada kontak).",
    example: 'In a dry summer, a single spark can ignite the grass.',
    exampleTr: 'Kurak bir yazda tek bir kıvılcım otları tutuşturabilir.',
    synonyms: ['set fire to', 'catch fire'], family: ['ignition'] },
  { code: 'compound', title: 'bileşik (kimya)', pos: 'isim', cefr: 'C1', ipa: '/ˈkɒmpaʊnd/',
    text: "Kimyada iki ya da daha çok elementin belli oranlarda birleşmesiyle oluşan maddedir; karışımla (mixture) karıştırma. Fiil olarak vurgu sona kayar: /kəmˈpaʊnd/ (bir sorunu ağırlaştırmak).",
    example: 'Table salt is a compound of sodium and chlorine.',
    exampleTr: 'Sofra tuzu, sodyum ile klorun oluşturduğu bir bileşiktir.',
    synonyms: [], family: [] },
  { code: 'breakthrough', title: 'çığır açan buluş, büyük ilerleme', pos: 'isim', cefr: 'B2', ipa: '/ˈbreɪkθruː/',
    text: "Uzun uğraşın sonunda gelen önemli buluş ya da ilerleme: make a breakthrough, a medical breakthrough. İsim bitişik yazılır; öbek fiil 'break through' (yarıp geçmek, aşmak) ile karıştırma.",
    example: 'After years of failed experiments, the team finally made a breakthrough.',
    exampleTr: 'Yıllarca süren başarısız deneylerin ardından ekip sonunda önemli bir buluş yaptı.',
    synonyms: ['advance', 'discovery'], family: ['break through'] },
  { code: 'commercially', title: 'ticari olarak, ticari açıdan', pos: 'zarf', cefr: 'C1', ipa: '/kəˈmɜːʃəli/',
    text: "Satılıp kâr getirebilecek biçimde: commercially viable (ticari açıdan uygulanabilir), commercially available (piyasada satılan). Sıfatı 'commercial', fiili 'commercialise' (ticarileştirmek).",
    example: 'The drug works well in the laboratory, but it is not yet commercially available.',
    exampleTr: 'İlaç laboratuvarda iyi sonuç veriyor ama henüz piyasada satılmıyor.',
    synonyms: [], family: ['commercial', 'commerce', 'commercialise'] },
  { code: 'durable', title: 'dayanıklı, uzun ömürlü', pos: 'sıfat', cefr: 'B2', ipa: '/ˈdjʊərəbl/',
    text: "Kolay eskimeyen, uzun süre kullanılabilen: durable materials. 'Durable goods' dayanıklı tüketim mallarıdır (buzdolabı, araba gibi). Adı 'durability'.",
    example: 'Hiking boots need to be light but also durable.',
    exampleTr: 'Yürüyüş botlarının hafif ama aynı zamanda dayanıklı olması gerekir.',
    synonyms: ['long-lasting', 'hard-wearing'], family: ['durability'] },
  { code: 'recover', title: 'geri kazanmak, geri almak; iyileşmek', pos: 'fiil', cefr: 'B2', ipa: '/rɪˈkʌvə(r)/',
    text: "Kaybedilen ya da atılan bir şeyi geri almak: recover metals from waste. Hastalıktan sonra 'iyileşmek' anlamında 'from' ile gelir: recover from an illness. Adı 'recovery'.",
    example: 'Workers at the plant recover copper and gold from old computers.',
    exampleTr: 'Tesisteki işçiler eski bilgisayarlardan bakır ve altın geri kazanıyor.',
    synonyms: ['retrieve', 'get back'], family: ['recovery'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'fp-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['phase out'],
    level: 'orta', cefr: 'C1', konu: ['öbek fiil'],
    q: 'Because cobalt is expensive and its mining has been linked to poor working conditions, many battery makers aim to ---- its use over the coming years by switching to cathodes that contain little or none of the metal.',
    options: ['build up', 'keep up', 'phase out', 'look into', 'give off'], answer: 2,
    explain: "Kobalt pahalı ve çıkarıldığı madenler kötü çalışma koşullarıyla anılıyor; üreticiler de kobaltı az içeren ya da hiç içermeyen katotlara geçiyor. Demek ki kobaltı zamanla kullanımdan kaldırmak istiyorlar: 'phase out' (aşama aşama kaldırmak). Build up (artırmak, biriktirmek) ve keep up (sürdürmek) bu geçişle çelişir. Look into (araştırmak, incelemek) ve give off (ısı, koku gibi bir şeyi yaymak) cümleye anlam katmaz." },

  // ---------- dil bilgisi ----------
  { id: 'fp-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['eşleşik bağlaç'],
    q: 'Old phone batteries should be taken ---- to a recycling centre ---- to a shop that collects them, whichever is closer; they must never go in the household bin, because they can start fires.',
    options: ['either / or', 'not only / but also', 'neither / nor', 'no sooner / than', 'not / but'], answer: 0,
    explain: "Cümledeki 'whichever is closer' (hangisi daha yakınsa) iki yerden birinin seçileceğini söylüyor: eski pil ya geri dönüşüm merkezine ya da pil toplayan bir dükkâna götürülmeli. Bunu 'either … or' kurar. 'Not only … but also' pilin iki yere birden götürülmesini ister, 'not … but' ise yalnız dükkânı gösterir; ikisi de 'hangisi daha yakınsa' ile çelişir. 'Neither … nor' iki yeri de dışarıda bırakır; o zaman ortada seçilecek bir yer kalmaz. 'No sooner … than' bir olayın hemen ardından ötekinin geldiğini anlatan bir zaman yapısıdır; bu cümlede dil bilgisi açısından kurulamaz." },

  { id: 'fp-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['zaman: present perfect', 'zaman uyumu'],
    q: 'Since lithium-ion batteries first ---- on sale in the early 1990s, their price ---- so sharply that electric cars are now within reach of far more buyers.',
    options: ['had gone / fell', 'have gone / has fallen', 'were going / will fall', 'went / has fallen', 'go / had fallen'], answer: 3,
    explain: "'Since' ile kurulan zaman cümleciği geçmişteki belli bir başlangıcı veriyor ('in the early 1990s'); bunu geçmiş zaman (went) anlatır. Ana cümle o günden bugüne süren bir değişimi anlatıyor ve sonucu bugüne bağlıyor ('are now'); bu yüzden present perfect (has fallen) gerekir. 'Have gone' belli bir geçmiş zamanla kullanılamaz. 'Had gone / fell' değişimin bugünle bağını koparır. 'Were going / will fall' ve 'go / had fallen' zaman uyumunu bozar." },

  // ---------- boşluklu metin (5 boşluk) ----------
  { id: 'fp-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T,
    cards: ['rechargeable', 'breakthrough', 'commercially'],
    level: 'orta', cefr: 'B2', title: 'Lityum iyon pili kimler geliştirdi?',
    text: "Like many great inventions, the lithium-ion battery was the work of several people rather than a single genius. (1) ---- the oil crisis of 1973, which pushed researchers to look for new ways of storing energy, the British-born chemist M. Stanley Whittingham built a rechargeable battery with a cathode of titanium disulphide and an anode of metallic lithium. Metallic lithium is highly reactive, however, and the design carried a risk of explosion. In 1980, John B. Goodenough showed that a cathode made of cobalt oxide could deliver about four volts, (2) ---- Whittingham's battery had produced only a little over two. The next breakthrough came in 1985, when Akira Yoshino (3) ---- the metallic lithium in the anode with a carbon-based material known as petroleum coke. (4) ---- this change, the battery became far safer, and the first commercially viable version was born; Sony began selling lithium-ion batteries in 1991. In the years that followed, they came to power mobile phones, laptops and, eventually, electric cars. (5) ----, the three scientists had to wait until 2019 to share the Nobel Prize in Chemistry. Goodenough, who was then 97, became the oldest person ever to receive a Nobel Prize.",
    steps: [
      { konu: ['edat'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['In spite of', 'At the expense of', 'On behalf of', 'In contrast to', 'In the wake of'], answer: 4,
        explain: "Sıfat cümleciği petrol krizinin araştırmacıları enerjiyi depolamanın yeni yollarını aramaya ittiğini söylüyor; Whittingham'ın pili de bu krizin ardından ve onun etkisiyle yapıldı: 'in the wake of' (… -in ardından, … -in sonucunda). 'In spite of' krizin bir engel olduğunu söylerdi; oysa kriz araştırmayı hızlandırdı. 'At the expense of' (… pahasına), 'on behalf of' (… adına) ve 'in contrast to' (… -in aksine) burada anlam kurmaz." },
      { konu: ['bağlaç'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['since', 'despite', 'whereas', 'so that', 'unless'], answer: 2,
        explain: "Goodenough'un kobalt oksit katodu yaklaşık dört volt veriyordu, Whittingham'ın pili ise iki voltun biraz üstündeydi. İki durum karşılaştırılıyor: 'whereas' (-ken, oysa). 'Despite' edattır; ardından özneli, yüklemli bir cümle gelmez. 'Since' bir neden bildirir; Whittingham'ın pilinin düşük voltajı kobalt oksidin yüksek voltajının nedeni değildir. 'So that' (-sın diye) ve 'unless' (-medikçe) anlamı bozar." },
      { konu: ['kelime', 'fiil'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['compared', 'charged', 'replaced', 'associated', 'confused'], answer: 2,
        explain: "Sonraki cümle 'this change' (bu değişiklik) diyor; demek ki Yoshino anotta bir değişiklik yaptı ve metalik lityumun yerine karbon esaslı bir malzeme koydu: 'replace X with Y' (X'in yerine Y'yi koymak). Compare (karşılaştırmak), associate (ilişkilendirmek) ve confuse (karıştırmak) da 'with' alır ama bir değişiklik anlatmaz. 'Charge … with' (doldurmak; suçlamak) pil bağlamına yakın görünse de burada anlam kurmaz." },
      { konu: ['edat'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['Despite', 'Prior to', 'Instead of', 'Unlike', 'Thanks to'], answer: 4,
        explain: "Patlama riskini metalik lityum taşıyordu; onun anottan çıkarılması pili çok daha güvenli yaptı. Değişiklik sonucun nedenidir: 'thanks to' (… sayesinde). 'Despite' bu neden-sonuç bağıyla çelişir. 'Prior to' (… -den önce) zamanı ters çevirir: pil değişiklikten önce değil, sonra güvenli hâle geldi. 'Instead of' (… yerine) ve 'unlike' (… -in aksine) anlam kurmaz." },
      { konu: ['bağlantı zarfı'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['Nevertheless', 'Consequently', 'Furthermore', 'Similarly', 'Otherwise'], answer: 0,
        explain: "Önceki cümle bu pillerin telefonlardan elektrikli arabalara kadar her yere girdiğini söylüyor; buna karşın üç bilim insanı ödül için 2019'a kadar beklemek zorunda kaldı. Bu beklenmedik durumu 'nevertheless' (buna rağmen) bağlar. 'Consequently' neden-sonuç, 'furthermore' ekleme, 'similarly' benzerlik kurar; 'otherwise' (aksi hâlde) burada anlamsızdır." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'fp-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['scarce', 'extract'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although lithium is far scarcer than sodium, ----.',
    options: [
      'many researchers have begun to develop batteries that use sodium instead',
      'its price tends to rise sharply whenever demand for electric cars grows',
      "most of the world's supply is extracted in just a handful of countries",
      'recycling old batteries could become an important source of the metal',
      'it is still used in the batteries of most electric cars sold today',
    ], answer: 4,
    explain: "'Although' karşıtlık ister: lityum sodyumdan çok daha kıt, yine de bugün satılan elektrikli arabaların çoğunun pilinde kullanılıyor. Öteki seçenekler kıtlıkla uyumlu: araştırmacıların sodyuma yönelmesi kıtlığın sonucudur; fiyatın talep artınca hızla yükselmesi ve arzın birkaç ülkede toplanması kıtlığı destekler; eski pilleri geri dönüştürmek de kıtlığa bir çaredir. İlk yarıyla çelişmedikleri için karşıtlık kurmuyorlar." },
  { id: 'fp-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['capacity'],
    level: 'orta', cefr: 'B2', konu: ['koşul'],
    q: '----, a battery that is no longer good enough for an electric car can be given a second life storing energy from solar panels.',
    options: [
      'Unless it still holds a reasonable share of its original capacity',
      'As long as it still holds a reasonable share of its original capacity',
      'Even if it can no longer hold more than a tiny fraction of its original charge',
      'Provided that it has never been used in any kind of vehicle before',
      'In case it overheats while the car is being driven on a hot day',
    ], answer: 1,
    explain: "Arabada kullanılamayacak kadar yıpranmış bir pilin güneş panellerinden gelen enerjiyi depolamak için ikinci bir hayat bulabilmesi, özgün kapasitesinin makul bir bölümünü hâlâ tutabilmesine bağlı: 'as long as' (-dığı sürece) bu koşulu kurar. 'Unless' (-medikçe) koşulu tersine çevirir. Neredeyse hiç yük tutamayan bir pil enerji depolayamaz; 'even if' ile kurulan seçenek bu yüzden mantıksız. Pil zaten bir arabada kullanılmış; 'hiç araçta kullanılmamışsa' diyen seçenek cümleyle çelişir. Sıcak bir günde aşırı ısınma ise ikinci hayatın koşulu olamaz." },

  // ---------- çeviri ----------
  { id: 'fp-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['ortaç öbeği'],
    q: 'Salt water pumped from beneath dry lake beds is left in shallow ponds for many months, allowing the sun to evaporate most of the water and leaving behind a liquid rich in lithium.',
    options: [
      'Kurumuş göl yataklarının altından pompalanan tuzlu su sığ havuzlarda birkaç gün bekletilir; böylece güneş suyun büyük kısmını buharlaştırır ve geriye lityumca zengin bir sıvı kalır.',
      'Kurumuş göl yataklarının altından pompalanan tuzlu su sığ havuzlarda aylarca bekletilir; böylece güneş suyun tamamını buharlaştırır ve geriye yalnızca saf lityum kalır.',
      'Sığ havuzlarda aylarca bekletilen tuzlu su, güneş suyun büyük kısmını buharlaştırdıktan sonra kurumuş göl yataklarının altına geri pompalanır.',
      'Kurumuş göl yataklarının altından pompalanan tuzlu su sığ havuzlarda aylarca bekletilir, ama güneş suyun ancak küçük bir kısmını buharlaştırabildiği için sıvıdaki lityum oranı pek artmaz.',
      'Kurumuş göl yataklarının altından pompalanan tuzlu su sığ havuzlarda aylarca bekletilir; böylece güneş suyun büyük kısmını buharlaştırır ve geriye lityumca zengin bir sıvı kalır.',
    ], answer: 4,
    explain: "'Pumped from beneath dry lake beds' tuzlu suyu niteleyen bir ortaç öbeğidir: kurumuş göl yataklarının altından pompalanan tuzlu su. 'Allowing …' ve 'leaving behind …' havuzlarda bekletmenin sonucunu anlatır: güneş suyun büyük kısmını buharlaştırır, geriye lityumca zengin bir sıvı kalır. Doğru çeviri süreyi (aylarca), miktarı (büyük kısmı) ve sonucu korur. Yanlışlardan biri süreyi birkaç güne indiriyor. Biri 'suyun tamamı' ve 'saf lityum' diyerek abartıyor. Biri suyun ancak küçük bir kısmının buharlaştığını söyleyerek anlamı tersine çeviriyor. Biri de suyun göl yataklarının altına geri pompalandığını söyleyerek sırayı bozuyor." },
  { id: 'fp-c2', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['durable'],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: 'Telefon pilleri ne kadar dayanıklı olursa, insanlar telefonlarını o kadar uzun süre kullanabilir.',
    options: [
      'The more durable phone batteries are, the longer people can keep using their phones.',
      'The longer people keep using their phones, the more durable their batteries become.',
      'The more durable phone batteries are, the sooner people tend to replace their phones.',
      'Because phone batteries are more durable than before, people now keep their phones for longer.',
      'No matter how durable phone batteries are, people replace their phones just as often.',
    ], answer: 0,
    explain: "Türkçe cümle iki şey arasında orantı kuruyor: pil ne kadar dayanıklıysa telefon o kadar uzun kullanılabilir. İngilizcede bu 'the more durable …, the longer …' yapısıyla verilir. Orantıyı tersinden kuran seçenek, telefonu uzun kullanmayı pilin dayanıklılığının nedeni yapıyor. Bir seçenek yönü ters çeviriyor: pil dayanıklıysa telefon daha erken değiştiriliyor. 'Because … than before' ile kurulan seçenek orantıyı atıyor ve pillerin eskisinden dayanıklı olduğunu söyleyen bir neden-sonuç cümlesi kuruyor. 'No matter how' ile kurulan seçenek ise dayanıklılığın hiçbir etkisi olmadığını söylüyor." },

  // ---------- okuma parçası (3 soru, YÖKDİL biçimi) ----------
  { id: 'fp-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['compound', 'capacity', 'degrade', 'ignite'],
    level: 'orta', cefr: 'B2', title: 'Pilin içinde neler oluyor?',
    text: "A lithium-ion battery has two electrodes: the anode, and the cathode, which is usually made of a compound containing lithium and other metals. Between them lies a liquid called the electrolyte, together with a thin, porous sheet that keeps the two electrodes from touching. When the battery powers a device, lithium ions leave the anode, pass through the electrolyte and settle in the cathode. Electrons cannot cross the electrolyte, so they travel from the anode to the cathode by another route, through the external circuit, and this flow of electrons is what powers the device. Charging the battery reverses the process, pushing the ions back into the anode. In theory, the cycle could be repeated endlessly, but in practice every battery gradually loses capacity. With each cycle, small unwanted reactions use up some of the lithium and leave deposits on the electrodes, which slowly degrade. A battery also loses capacity while it sits unused, and the rate of loss varies: heat appears to increase it, and so does keeping a battery fully charged for long periods. Lost capacity is a nuisance, but a battery can also pose a more serious danger. The electrolyte is flammable, and if a cell is damaged or overheats, reactions inside it can release heat, which makes the reactions faster still. This self-feeding process, known as thermal runaway, can cause a cell to ignite, and the fire may then spread to the cells around it.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, while a lithium-ion battery is powering a device, ----.',
        options: [
          'lithium ions move from the cathode back into the anode',
          'electrons reach the cathode by way of the external circuit',
          'electrons cross the electrolyte together with the lithium ions',
          'the thin, porous sheet allows the anode and the cathode to touch',
          'unwanted reactions create new lithium ions inside the cathode',
        ], answer: 1,
        explain: "Parçaya göre elektronlar elektrolitin içinden geçemez; anottan katoda dış devre üzerinden giderler ve aygıtı çalıştıran da bu akıştır. İyonların katottan anoda dönmesi şarj sırasında olur, pil aygıtı çalıştırırken değil. Elektronların iyonlarla birlikte elektrolitten geçtiği parçayla çelişiyor. İnce, gözenekli tabaka iki elektrotun birbirine değmesini önlüyor; değmelerine izin vermiyor. İstenmeyen tepkimeler de yeni iyon üretmiyor, tersine lityumun bir kısmını tüketiyor." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that a phone left unused for several months in a hot car with its battery fully charged ----.',
        options: [
          'will lose no capacity, since its battery is neither being charged nor powering anything',
          'may gain capacity, because heat speeds up the reactions inside its battery',
          'will end up with more lithium ions available than it had when it was new',
          'is likely to recover all the capacity it has lost once it is moved somewhere cool',
          'is likely to lose capacity faster than one kept half charged in a cool place',
        ], answer: 4,
        explain: "Parçaya göre pil kullanılmadan dururken de kapasite kaybeder; ısı ve uzun süre tam dolu bekletmek bu kaybı hızlandırır. Sıcak bir arabada, pili tam dolu hâlde aylarca bekleyen telefonda iki etken birden var; bu yüzden yarı dolu ve serin bir yerde duran telefondan büyük olasılıkla daha hızlı kapasite kaybeder. Hiç kapasite kaybetmeyeceğini söyleyen seçenek, kullanılmayan pilin de kapasite yitirdiği bilgisiyle çelişir. Isı kapasiteyi artırmaz, kaybı hızlandırır. İstenmeyen tepkimeler lityumu tükettiği için kullanılabilir iyon artmaz, azalır. Serin bir yere taşınınca kaybedilen kapasitenin geri geleceği de parçada söylenmiyor." },
      { konu: ['ayrıntı'],
        q: 'According to the passage, thermal runaway ----.',
        options: [
          'is the main reason why batteries gradually lose capacity over many cycles',
          'can only start in batteries that have already lost much of their capacity',
          'is a process in which heat speeds up reactions that then release more heat',
          'happens most often while a battery is being stored at half charge',
          'is prevented by the porous sheet placed between the two electrodes',
        ], answer: 2,
        explain: "Parçaya göre ısıl kaçakta (thermal runaway) hasar gören ya da aşırı ısınan hücredeki tepkimeler ısı açığa çıkarır, bu ısı da tepkimeleri daha da hızlandırır; süreç kendi kendini besler. Kapasite kaybı başka bir süreçtir: istenmeyen tepkimelerin lityumu yavaş yavaş tüketmesi. Isıl kaçağın yalnız yıpranmış pillerde başladığı, en çok yarı dolu pillerde görüldüğü ya da gözenekli tabakanın onu önlediği parçada söylenmiyor." },
    ] },

  // ---------- paragraf tamamlama ----------
  { id: 'fp-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['rechargeable', 'capacity'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'Many people still let their phone battery run completely flat before charging it again, in the belief that this keeps the battery healthy. ----. Those batteries gradually lost usable capacity if they were repeatedly recharged before being fully drained, as if they remembered the shorter cycle. Lithium-ion batteries do not suffer from this so-called memory effect, so there is no need to drain them completely; in fact, frequent deep discharges may even shorten their life.',
    options: [
      'The habit goes back to older rechargeable batteries made with nickel and cadmium',
      'Lithium-ion batteries are now found in almost every mobile phone, laptop and electric car',
      'Running a battery flat also means that a phone may switch off at an awkward moment',
      'Phone makers rarely explain in their manuals how a battery should be charged',
      'Most phones today show the remaining charge as a percentage on the screen',
    ], answer: 0,
    explain: "Boşluktan sonraki cümle 'Those batteries' (o piller) diye başlıyor ve bu pillerin tam boşalmadan şarj edildiklerinde kapasite yitirdiğini geçmiş zamanla anlatıyor; son cümle de lityum iyon pillerde bu sorunun olmadığını söylüyor. Demek ki boşlukta lityum iyondan farklı, daha eski bir pil türü tanıtılmalı: alışkanlığın kaynağı olan nikel-kadmiyum piller. Lityum iyon pillerden söz eden seçenekten sonra 'Those batteries' lityum iyon pilleri gösterir ve son cümleyle çelişir. Telefonun uygunsuz bir anda kapanması, kullanım kılavuzları ve ekrandaki yüzde ise 'Those batteries' için bir pil türü vermiyor." },

  // ---------- akışı bozan cümle ----------
  { id: 'fp-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['recover', 'extract'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'As electric cars become more common, the number of lithium-ion batteries reaching the end of their working life is expected to rise sharply.',
      'These batteries contain valuable metals such as cobalt, nickel and lithium, which can be recovered and used to make new ones.',
      'In a typical recycling plant, the batteries are first shredded, and the metals are then extracted from the resulting powder using heat or chemicals.',
      'For now, however, collecting spent batteries is often difficult and costly, so many of them never reach a recycling plant.',
      'Many battery makers are also working on new cells that can be fully charged in just a few minutes.',
    ], answer: 4,
    explain: "Parça, ömrünü dolduran lityum iyon pillerin geri dönüşümünü anlatıyor. I. cümle sorunu verir: elektrikli arabalar yaygınlaştıkça ömrünü dolduran pil sayısı artacak. II. cümle ('These batteries') fırsatı verir: içlerindeki metaller geri kazanılabilir. III. cümle yöntemi, IV. cümle de 'however' ile bugünkü durumu anlatır: yöntem var, ama kullanılmış pilleri toplamak zor ve pahalı olduğu için birçoğu geri dönüşüm tesisine hiç ulaşmıyor. V. cümle konuyu birkaç dakikada dolan yeni pillere kaydırıyor; 'also' bir devam izlenimi verse de ne geri dönüşümle ne de IV. cümledeki toplama sorunuyla bağı var. Bozan cümlenin sonda olması seyrektir; burada akış IV. cümlede tamamlanıyor ve V. cümle ona hiçbir şey eklemiyor." },
];

export default { id: 'fen-pil', course: C, title: U, order: 2, cards, items };
