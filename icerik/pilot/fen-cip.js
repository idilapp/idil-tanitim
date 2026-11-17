// iDil › Fen bilimleri › Yarı iletkenler ve çipler.
// Tümü özgün: Claude yazdı (17 Kasım 2026, çoğaltma 3. tur, dalga B). ÖSYM sorusu, yayınevi, ders kitabı ya da gazete metni
// kopyalanmadı, uyarlanmadı. Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir.
// Biçim: ../README.md. Plan: ../analiz/cogaltma-3-plani.md §7.10.
// Olgular (plan §7.10 ve yerleşik bilgi; yalnız olgular, metin özgün):
// - transistör: Aralık 1947, Bell Laboratuvarları (ABD); John Bardeen ve Walter Brattain gösterdi, William Shockley kısa
//   sürede üretimi kolay bir tasarım geliştirdi; üçü 1956 Nobel Fizik Ödülü'nü paylaştı (fy-z1). Öncesinde radyo, telefon
//   santrali ve ilk bilgisayarlarda büyük, çok enerji harcayan, sık bozulan vakum tüpleri vardı; transistörlerin gündelik
//   ürünlerde tüplerin yerini alması "birkaç yıl" sürdü (yerleşik bilgi, temkinli; tarih yazılmadı);
// - tümleşik devre: Jack Kilby 1958, Robert Noyce ertesi yıl, birbirinden ayrı (fy-c3; şirket adları yazılmadı);
// - Gordon Moore 1965: bir çipe konabilen bileşen sayısı aşağı yukarı her yıl ikiye katlanıyordu; 1975'te iki yıla
//   düzeltti; bir doğa yasası değil, sektörün gözlemi ve hedefi (fy-o1). Bugünkü en güçlü işlemcilerde milyarlarca transistör
//   (temkinli, "are thought to"); atom ölçeğine yaklaştıkça sızıntı ve ısı sorunları; katman katman yığma ve özel görevli
//   çipler (yerleşik bilgi); ikiye katlanmanın eskisi gibi sürmesinden kuşku (temkinli, "many engineers doubt");
// - üretim: kuvarslı kumdan silisyum, neredeyse saf olana dek arıtılır; eritilip tek kristal silindir olarak çekilir; ince
//   yuvarlak levhalara kesilip parlatılır (fy-b1). Devre ışıkla basılır: ışığa duyarlı kaplama, kalıptan geçen ışık, açıkta
//   kalan yerlerin kimyasal ya da gazla aşındırılması, katman katman yineleme; en ileri baskı makinelerini yalnız
//   Hollanda'daki ASML'in yaptığı (fy-b2; temkinli, "are currently made");
// - çip kıtlığı 2020–2023: salgında otomobil üreticileri satış düşer diye siparişlerini kıstı, evden çalışanlar elektronik
//   aldı, fabrikalar boşalan üretim zamanını elektronik firmalarına verdi; satış erken toparlanınca otomobilciler sıranın
//   sonuna düştü, üretim hatları yavaşladı ya da durdu, kimi araçlar parça bekleyerek yarım kaldı (temkinli, "in some
//   cases"); en ileri çip üretiminin büyük bölümü birkaç fabrikada, önemli bir kısmı Tayvan'da (yalnız üretim yeri olgusu;
//   temkinli, "a large share"); 2023'e doğru durum büyük ölçüde düzeldi (temkinli) (fy-o2). Siyasi yorum yok;
// - çiftçilerin makinelerini kendileri onarabilme hakkı için uğraşı (fy-p2; temkinli, "some farmers"; ad, ülke yok);
// - yeni bir çip fabrikası kurmanın yıllar sürmesi (fy-c6; yerleşik bilgi, sayı yok).
// Her olgu tek öğede sorulur; öteki öğeler gündelik, olgu taşımayan cümlelerdir.

const T = 'taslak';
const C = 'fen';
const U = 'Yarı iletkenler ve çipler';

const cards = [
  // ---------- isim ----------
  { code: 'shortage', title: 'kıtlık, eksiklik, yetersizlik', pos: 'isim', cefr: 'B2', ipa: '/ˈʃɔːtɪdʒ/',
    text: "Bir şeyin gerekenden az bulunması: a shortage of water/staff/doctors. Ardından 'of' gelir. Yakın anlamlıları 'lack' (yokluk, eksiklik) ve daha resmî 'scarcity' (kıtlık). Karşıtı 'surplus' (fazlalık).",
    example: 'A shortage of nurses at the local hospital means that some patients wait for hours to be seen.',
    exampleTr: 'Yerel hastanedeki hemşire eksikliği yüzünden bazı hastalar muayene olmak için saatlerce bekliyor.',
    synonyms: ['scarcity', 'lack'], family: [] },
  { code: 'transistor', title: 'transistör', pos: 'isim', cefr: 'C1', ipa: '/trænˈzɪstə/',
    text: "Elektrik akımını açıp kapayan ya da bir sinyali güçlendiren küçük yarı iletken parça. Bugünkü çiplerin temel yapı taşıdır; bir işlemcide çok sayıda transistör bulunur ve her biri bir anahtar gibi çalışır.",
    example: 'A single transistor works like a tiny switch, either letting current through or blocking it.',
    exampleTr: 'Tek bir transistör minik bir anahtar gibi çalışır: akımı ya geçirir ya da durdurur.',
    synonyms: ['semiconductor switch'], family: [] },
  { code: 'silicon', title: 'silisyum, silikon (element)', pos: 'isim', cefr: 'C1', ipa: '/ˈsɪlɪkən/',
    text: "Kumda ve kayalarda bol bulunan, çiplerin yapıldığı yarı iletken element. Dikkat: sonu -e ile biten 'silicone' ayrı bir sözcüktür; mutfak kalıplarında ve yapıştırıcılarda kullanılan esnek malzemedir. 'Silicon Valley': Silikon Vadisi.",
    example: 'Most of the solar panels on rooftops today use cells made of silicon.',
    exampleTr: 'Bugün çatılardaki güneş panellerinin çoğu silisyumdan yapılmış hücreler kullanır.',
    synonyms: [], family: [] },
  { code: 'wafer', title: '(çip yapımında) ince levha, yonga plakası; gofret', pos: 'isim', cefr: 'C1', ipa: '/ˈweɪfə/',
    text: "İlk anlamı ince, gevrek bisküvidir (gofret). Elektronikte üzerine birçok çip birden işlenen ince, yuvarlak silisyum levhadır: a silicon wafer. 'Wafer-thin' (kâğıt gibi ince) kalıbı da sık geçer.",
    example: 'Hundreds of chips are made on each wafer and are only cut apart at the very end.',
    exampleTr: 'Her levhanın üzerinde yüzlerce çip yapılır; bunlar ancak en sonda birbirinden ayrılır.',
    synonyms: ['thin slice', 'disc'], family: [] },
  { code: 'circuit', title: 'devre', pos: 'isim', cefr: 'B2', ipa: '/ˈsɜːkɪt/',
    text: "Elektriğin içinden geçtiği kapalı yol: an electric circuit. 'Integrated circuit' tümleşik devre, yani çip demektir; 'short circuit' kısa devre. Başka anlamı yarış pisti ya da turdur. Bir aygıttaki devrelerin tümüne 'circuitry' denir.",
    example: 'The lamp stopped working because a wire in the circuit had come loose.',
    exampleTr: 'Devredeki bir tel gevşediği için lamba çalışmaz oldu.',
    synonyms: ['electrical path'], family: ['circuitry'] },
  { code: 'processor', title: 'işlemci', pos: 'isim', cefr: 'B2', ipa: '/ˈprəʊsesə/',
    text: "Bilgisayarın ya da telefonun hesapları yapan, komutları yürüten ana çipi; 'central processing unit (CPU)' diye de geçer. Fiili 'process' (işlemek), adı 'processing' (işleme). Mutfakta 'food processor' mutfak robotudur.",
    example: 'Video editing needs a powerful processor, so the cheaper laptop would struggle with it.',
    exampleTr: 'Video düzenlemek güçlü bir işlemci ister; bu yüzden ucuz dizüstü bilgisayar bu işte zorlanırdı.',
    synonyms: ['CPU', 'chip'], family: ['process', 'processing'] },
  // ---------- fiil ----------
  { code: 'fabricate', title: '(fabrikada, özel bir süreçle) üretmek, imal etmek; (yalan, kanıt) uydurmak', pos: 'fiil', cefr: 'C1', ipa: '/ˈfæbrɪkeɪt/',
    text: "Teknik metinlerde parçaları ya da çipleri özel bir süreçle üretmek: fabricate chips/parts. Haber dilinde olumsuz anlamı da yaygındır: fabricate evidence/a story (kanıt, hikâye uydurmak). Adı 'fabrication'.",
    example: 'The steel parts are fabricated in one plant and then sent to another to be assembled.',
    exampleTr: 'Çelik parçalar bir tesiste üretilir, sonra birleştirilmek üzere başka bir tesise gönderilir.',
    synonyms: ['manufacture', 'produce'], family: ['fabrication'] },
  { code: 'etch', title: '(asitle, gazla) aşındırmak; (yüzeye) oymak, kazımak', pos: 'fiil', cefr: 'C1', ipa: '/etʃ/',
    text: "Bir yüzeyi asit, gaz ya da sivri bir araçla aşındırarak üzerine çizgi ya da desen işlemek: etch glass/metal. Çip yapımında yüzeyin açıkta kalan kısımlarını kimyasallarla aşındırıp gidermek anlamında kullanılır. Mecazı: 'etched in my memory' (belleğime kazındı). Adı 'etching'.",
    example: 'The artist used acid to etch fine lines into the copper plate.',
    exampleTr: 'Sanatçı, bakır levhaya ince çizgiler oymak için asit kullandı.',
    synonyms: ['engrave', 'eat away'], family: ['etching'] },
  { code: 'amplify', title: '(ses, sinyal) güçlendirmek, yükseltmek; (etkiyi) artırmak', pos: 'fiil', cefr: 'C1', ipa: '/ˈæmplɪfaɪ/',
    text: "Bir sesi ya da elektrik sinyalini güçlendirmek: amplify a signal. Mecaz olarak bir etkiyi, duyguyu ya da sorunu büyütmek: amplify fears (korkuları büyütmek). Aleti 'amplifier' (amfi), adı 'amplification'.",
    example: 'A hearing aid picks up sounds and uses a tiny chip to amplify them, so the wearer can hear more clearly.',
    exampleTr: 'İşitme cihazı sesleri alır ve küçük bir çiple güçlendirir; böylece takan kişi daha net duyar.',
    synonyms: ['boost', 'strengthen'], family: ['amplifier', 'amplification'] },
  { code: 'shrink', title: 'küçülmek; küçültmek', pos: 'fiil', cefr: 'B2', ipa: '/ʃrɪŋk/',
    text: "Boyutu ya da miktarı azalmak: The shirt shrank in the wash (gömlek yıkanınca çekti). Düzensiz fiildir: shrink – shrank – shrunk. Hem geçişsiz (küçülmek) hem geçişli (küçültmek) kullanılır. Adı 'shrinkage'.",
    example: 'Wash this jumper in cold water, or it may shrink.',
    exampleTr: 'Bu kazağı soğuk suda yıka, yoksa çekebilir.',
    synonyms: ['get smaller', 'contract'], family: ['shrinkage'] },
  // ---------- sıfat ----------
  { code: 'compact', title: 'az yer kaplayan, küçük ve derli toplu', pos: 'sıfat', cefr: 'B2', ipa: '/kəmˈpækt/',
    text: "Küçük bir alana sığacak biçimde tasarlanmış: a compact camera/car/kitchen. 'Small'dan farklı olarak çoğu zaman olumlu bir tasarım özelliğini, yerin iyi kullanıldığını anlatır. Adı 'compactness'.",
    example: 'Our flat is tiny, so we bought a compact washing machine that fits under the kitchen counter.',
    exampleTr: 'Dairemiz çok küçük; bu yüzden mutfak tezgâhının altına sığan, az yer kaplayan bir çamaşır makinesi aldık.',
    synonyms: ['small', 'space-saving'], family: ['compactness'] },
  { code: 'flawless', title: 'kusursuz, hatasız', pos: 'sıfat', cefr: 'C1', ipa: '/ˈflɔːləs/',
    text: "Hiçbir kusuru, hatası, bozukluğu olmayan: a flawless performance (kusursuz bir gösteri), a flawless surface. Kökü 'flaw' (kusur) + '-less' (-sız). 'Flawed' ise kusurlu demektir.",
    example: 'Diamonds that are completely flawless are extremely rare and expensive.',
    exampleTr: 'Hiç kusuru olmayan pırlantalar son derece nadir ve pahalıdır.',
    synonyms: ['perfect', 'faultless'], family: ['flaw', 'flawed'] },
  { code: 'cutting-edge', title: 'en ileri, son teknoloji, öncü', pos: 'sıfat', cefr: 'C1', ipa: '/ˌkʌtɪŋ ˈedʒ/',
    text: "Bir alanda en yeni ve en gelişmiş olan: cutting-edge technology/research. İsimden önce tireli yazılır; isim olarak 'at the cutting edge of' (bir alanın en önünde) kalıbıyla geçer. Yakın anlamlısı 'state-of-the-art'.",
    example: 'The hospital has bought cutting-edge scanners that produce much clearer images.',
    exampleTr: 'Hastane, çok daha net görüntü veren son teknoloji tarayıcılar satın aldı.',
    synonyms: ['state-of-the-art', 'advanced'], family: [] },
  { code: 'dependent', title: '(bir şeye, birine) bağımlı, bağlı', pos: 'sıfat', cefr: 'B2', ipa: '/dɪˈpendənt/',
    text: "Bir şeye ya da birine gereksinim duyan, onsuz olamayan: be dependent on something. Edatı 'on'dur. Karşıtı 'independent' (bağımsız). Fiili 'depend', adı 'dependence'. İngiliz yazımında isim olan 'dependant', bakmakla yükümlü olunan kişidir.",
    example: 'The island is largely dependent on tourism, so a rainy summer hurts almost every business.',
    exampleTr: 'Ada büyük ölçüde turizme bağımlı; bu yüzden yağmurlu bir yaz neredeyse her işletmeyi zarara sokuyor.',
    synonyms: ['reliant', 'relying'], family: ['depend', 'dependence', 'dependency'] },
  // ---------- zarf ----------
  { code: 'exponentially', title: 'katlanarak, üstel olarak; giderek hızlanarak', pos: 'zarf', cefr: 'C1', ipa: '/ˌekspəˈnenʃəli/',
    text: "Matematikte bir niceliğin her adımda belli bir oranla katlanarak artması: grow exponentially. Günlük dilde 'çok hızlı ve giderek hızlanarak' anlamında da kullanılır. Sıfatı 'exponential' (üstel).",
    example: 'If each person passes a rumour on to two others, the number who have heard it grows exponentially.',
    exampleTr: 'Her kişi bir söylentiyi iki kişiye daha anlatırsa, onu duyanların sayısı katlanarak artar.',
    synonyms: ['rapidly', 'dramatically'], family: ['exponential'] },
  { code: 'roughly', title: 'aşağı yukarı, yaklaşık olarak; kabaca', pos: 'zarf', cefr: 'B2', ipa: '/ˈrʌfli/',
    text: "Bir sayının ya da bilginin tam değil yaklaşık olduğunu anlatır: roughly 200 people. 'Approximately'den daha az resmîdir. Başka anlamı 'kaba, sert biçimde'dir: handle something roughly. Sıfatı 'rough'.",
    example: 'The journey takes roughly three hours, depending on the traffic.',
    exampleTr: 'Yolculuk, trafiğe bağlı olarak aşağı yukarı üç saat sürüyor.',
    synonyms: ['about', 'approximately'], family: ['rough'] },
  // ---------- öbek fiil ----------
  { code: 'keep up with', title: '(birine, bir şeye) yetişmek, ayak uydurmak', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌkiːp ˈʌp wɪð/',
    text: "Hız, değişim ya da talep karşısında geride kalmamak: keep up with demand (talebe yetişmek), keep up with the news (haberleri izlemek). Düzensiz fiil: keep – kept – kept. Karşıt anlamlısı 'fall behind' (geride kalmak).",
    example: 'The bakery hired two more staff because it could not keep up with the morning rush.',
    exampleTr: 'Fırın, sabah yoğunluğuna yetişemediği için iki kişiyi daha işe aldı.',
    synonyms: ['keep pace with'], family: [] },
  { code: 'scale up', title: '(üretimi, işi) büyütmek, ölçeğini artırmak', pos: 'öbek fiil', cefr: 'C1', ipa: '/ˌskeɪl ˈʌp/',
    text: "Bir üretimi, yöntemi ya da projeyi daha büyük bir boyuta taşımak: scale up production. Karşıtı 'scale down' (küçültmek). Bilimde, laboratuvarda işe yarayan bir yöntemi fabrika ölçeğine çıkarmak için sık kullanılır.",
    example: 'After the trial run went well, the company scaled up production to meet orders from abroad.',
    exampleTr: 'Deneme üretimi iyi geçince şirket, yurt dışından gelen siparişleri karşılamak için üretimi büyüttü.',
    synonyms: ['expand', 'increase'], family: [] },
];

const items = [
  // ---------- kelime ----------
  { id: 'fy-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['shortage', 'wafer'],
    level: 'kolay', cefr: 'B2', konu: ['isim'],
    q: 'Because the factory that makes them was closed for several months, there was a serious ---- of replacement screens, and customers had to wait weeks to get their phones repaired.',
    options: ['variety', 'wafer', 'shortage', 'abundance', 'display'], answer: 2,
    explain: "Ekranları yapan fabrika aylarca kapalı kalmış ve müşteriler telefonlarını onartmak için haftalarca beklemiş. Yani yedek ekran gerekenden az bulunuyordu: 'a serious shortage of replacement screens' (ciddi bir yedek ekran kıtlığı). 'Wafer' (yonga plakası) çiplerin üzerine işlendiği silisyum levhadır; ekran sıkıntısını anlatmaz. 'Abundance' (bolluk) tam tersini söyler; ekran bolken haftalarca beklenmez. 'Variety' (çeşit) de beklemeyi açıklamaz. 'Display' (sergi, gösterim) da bir eksikliği bildirmez." },

  { id: 'fy-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['fabricate', 'amplify'],
    level: 'orta', cefr: 'C1', konu: ['fiil'],
    q: 'The company designs its own chips but owns no factories, so it pays specialist firms in other countries to ---- them according to its detailed plans.',
    options: ['amplify', 'imitate', 'fabricate', 'reconsider', 'abandon'], answer: 2,
    explain: "Şirket çiplerini kendisi tasarlıyor ama fabrikası yok; bu yüzden başka firmalara para ödüyor. Bu firmaların yaptığı iş, çipleri şirketin planlarına göre üretmektir: 'fabricate' (özel bir süreçle üretmek, imal etmek). 'Amplify' (güçlendirmek) bir sinyal ya da ses için kullanılır; çip üretmeyi anlatmaz. 'Imitate' (taklit etmek) başkasının yaptığını kopyalamaktır; şirket kendi planını üretime veriyor. 'Reconsider' (yeniden düşünmek) ve 'abandon' (bırakmak, terk etmek) da fabrikası olmayan bir şirketin dışarıya yaptırdığı işi karşılamaz." },

  // ---------- dil bilgisi ----------
  { id: 'fy-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['processor'],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'The engineers fitted a second, larger fan inside the laptop ---- keeping the processor from overheating during long video calls.',
    options: ['instead of', 'in spite of', 'in accordance with', 'with the aim of', 'on account of'], answer: 3,
    explain: "Mühendisler dizüstü bilgisayara ikinci, daha büyük bir fan takmış. Fanın amacı, uzun görüntülü görüşmelerde işlemcinin aşırı ısınmasını önlemek. Amaç 'with the aim of' (… amacıyla) ve ardından gelen -ing ile kurulur. 'Instead of' (… yerine) fanı serinletmenin karşıtı gibi gösterir; mantık ters. 'In spite of' (… -e rağmen) bir karşıtlık bildirir; fan ile serinletme arasında karşıtlık yok. 'In accordance with' (… uyarınca, … -e uygun olarak) bir kurala ya da plana uygunluğu anlatır. 'On account of' (… yüzünden) bir neden bildirir; serinletme fanın nedeni değil, amacıdır." },

  { id: 'fy-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['bağlaç'],
    q: 'My new phone is much faster than my old one, ---- it was not very expensive.',
    options: ['because', 'so', 'although', 'unless', 'as long as'], answer: 2,
    explain: "Hızlı bir telefonun pahalı olması beklenir; oysa bu telefon pek pahalı değilmiş. Beklenene ters düşen bu ilişki 'although' (… -e rağmen, gerçi) ile kurulur. 'Because' ucuzluğu hızın nedeni yapar; 'so' ucuzluğu hızın sonucu yapar; ikisi de anlamsız bir neden-sonuç kurar. 'Unless' (… -medikçe) bir koşul bildirir ve geçmişte olmuş bir satın almayla uyuşmaz. 'As long as' (… olduğu sürece) da bir koşul kurar; telefonun hızını fiyatın koşuluna bağlamak anlamsız." },

  { id: 'fy-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['devrik koşul cümlesi'],
    q: '---- the engineers ---- the tiny flaw in the design, millions of faulty chips would have been sold to customers.',
    options: ['Should / notice', 'Had / not noticed', 'Had / noticed', 'Were / not to notice', 'Did / not notice'], answer: 1,
    explain: "Ana cümle 'would have been sold' ile gerçekleşmemiş bir geçmiş durumu anlatıyor: milyonlarca kusurlu çip satılırdı (ama satılmadı). Bu, üçüncü tip koşuldur ve 'if' atılınca 'Had + özne + past participle' biçiminde devrik kurulur. Anlam da olumsuz koşul ister: mühendisler kusuru fark etmeseydi. Bu yüzden 'Had the engineers not noticed'. 'Had … noticed' biçimce doğru ama anlamı tersine çevirir: kusuru fark etselerdi kusurlu çipler satılırdı demek mantıksız. 'Should … notice' gelecekteki bir olasılığı, 'Were … not to notice' şimdiki ya da gelecekteki varsayımı anlatır; ikisi de 'would have been sold' ile zaman bakımından uyuşmaz. 'Did … not notice' ise bir koşul değil, soru kurar." },

  // ---------- boşluklu metin (5 boşluk) ----------
  { id: 'fy-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: ['transistor', 'amplify', 'circuit'],
    level: 'orta', cefr: 'B2', title: 'Cam tüplerden transistöre',
    text: "Until the late 1940s, radios, telephone exchanges and the earliest computers relied on vacuum tubes to switch and strengthen electrical signals. The tubes did their job, but they were bulky, used a great deal of power and burned out with annoying (1) ----. In December 1947, at Bell Laboratories in the United States, the physicists John Bardeen and Walter Brattain showed that a small piece of semiconductor material could amplify a signal (2) ---- any glass tube at all. Their colleague William Shockley, who (3) ---- on the same problem for some time, soon developed an improved design that was easier to manufacture. (4) ---- the first transistor looked rather crude, with its parts assembled by hand, engineers quickly saw what it could mean: circuits might become smaller, cooler and far more reliable. (5) ----, it was some years before transistors began to replace tubes in everyday products such as radios. In 1956, Bardeen, Brattain and Shockley shared the Nobel Prize in Physics.",
    steps: [
      { konu: ['kelime', 'isim'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['capacity', 'tension', 'permission', 'frequency', 'density'], answer: 3,
        explain: "Cümle vakum tüplerinin kusurlarını sayıyor: büyüktüler, çok enerji harcıyorlardı ve bozuluyorlardı. 'Burn out with annoying frequency' (can sıkacak sıklıkta yanıp bozulmak) tüplerin çok sık bozulduğunu anlatır. 'Capacity' (kapasite), 'density' (yoğunluk) ve 'tension' (gerilim) 'with annoying …' kalıbında bozulmanın ne kadar sık olduğunu bildirmez. 'Permission' (izin) ise bağlamla hiç ilgili değil." },
      { konu: ['edat'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['through', 'inside', 'without', 'despite', 'towards'], answer: 2,
        explain: "Parça yeni aygıtı tüplerle karşılaştırıyor: küçük bir yarı iletken parçası, hiç cam tüp kullanmadan bir sinyali güçlendirebiliyordu. 'At all' vurgusu da bir yokluğu pekiştirir: 'without any glass tube at all'. 'Through' (… içinden) ve 'inside' (… içinde) sinyali yine bir tüpe bağlar; bu, buluşun anlamını tersine çevirir. 'Despite' (… -e rağmen) bir karşıtlık edatıdır, 'towards' (… -e doğru) bir yön bildirir; ikisi de cümleye anlam vermez." },
      { konu: ['zaman uyumu'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['had been working', 'has been working', 'would be working', 'is working', 'works'], answer: 0,
        explain: "Anlatım geçmişte: Shockley kısa süre sonra daha iyi bir tasarım geliştirdi ('soon developed'). Ondan önce bir süredir aynı sorun üzerinde çalışıyordu; geçmişteki bir andan önce başlayıp süren eylem 'had been working' ile verilir. 'Has been working' ve 'is working' şimdiye bağlanır, 'works' genel bir durum bildirir; üçü de geçmişteki anlatımla uyuşmaz. 'Would be working' ise geçmişten bakılan bir geleceği ya da varsayımı anlatır; 'for some time' ile süregelen işi karşılamaz." },
      { konu: ['bağlaç'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['Although', 'Because', 'Unless', 'Once', 'In case'], answer: 0,
        explain: "Cümlenin iki bölümü birbirine ters düşüyor: ilk transistör oldukça kaba görünüyordu, parçaları elle birleştirilmişti; yine de mühendisler onun neler getirebileceğini hemen gördü. Bu karşıtlık 'Although' (… -e rağmen) ile kurulur. 'Because' kaba görünüşü mühendislerin heyecanının nedeni yapar; mantık ters. 'Unless' (… -medikçe) ve 'In case' (… olur diye) geçmişte olmuş bir durumu koşula ya da önleme çevirir. 'Once' (… -ince) da kaba görünüşü bir zaman sırasına bağlar; anlam kurmaz." },
      { konu: ['bağlantı zarfı'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['As a result', 'For example', 'Similarly', 'In other words', 'Even so'], answer: 4,
        explain: "Önceki cümle mühendislerin transistörün getireceklerini hemen gördüğünü söylüyor. Bu cümle ise beklenene ters bir bilgi veriyor: transistörlerin gündelik ürünlerde tüplerin yerini alması yine de birkaç yıl sürdü. Bu karşıtlık 'Even so' (yine de, buna karşın) ile kurulur. 'As a result' gecikmeyi heyecanın sonucu yapar; mantık ters. 'For example' bir örnek, 'Similarly' bir benzerlik, 'In other words' aynı şeyi başka sözlerle söyleme bildirir; gecikme bunların hiçbiri değil." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'fy-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['compact'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: "The new phone is far more compact than last year's model, ----.",
    options: [
      'because it has a bigger screen and a much heavier battery',
      'but it still manages to hold a larger battery',
      "so it no longer fits into most people's pockets",
      'unless the company decides to make it any smaller',
      'although it takes up less space in a bag than before',
    ], answer: 1,
    explain: "Ana cümle yeni telefonun geçen yılki modelden çok daha az yer kapladığını söylüyor. Küçülen bir telefonda pilin de küçülmesi beklenir; oysa telefon daha büyük bir pil taşımayı başarıyor. Bu beklenmedik durum 'but … still' ile karşıtlık olarak kurulur. Daha büyük ekran ve daha ağır pil, telefonun küçülmesini açıklamaz; mantık ters. Cebe artık sığmaması da küçülmeyle çelişiyor. 'Unless' ile kurulan koşul ana cümleye anlam vermiyor. 'Although' ile gelen bölüm ise ana cümleyle aynı yönde, çantada daha az yer kaplamayı söylüyor; karşıtlık kurmuyor." },

  { id: 'fy-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['zaman'],
    q: '----, the factory has been producing almost twice as many chips as before.',
    options: [
      'Before the factory was even built',
      'Until the new machines arrive next week',
      'While the workers were on strike',
      'As soon as orders begin to fall',
      'Since a second production line opened',
    ], answer: 4,
    explain: "Ana cümle 'has been producing' ile geçmişte başlayıp bugüne süren bir durumu anlatıyor: fabrika eskisinin neredeyse iki katı çip üretiyor. Bu yapı, başlangıç noktasını 'since' ile ister: ikinci üretim hattı açıldığından beri. Fabrika daha kurulmadan üretim yapamaz. 'Until … next week' ve 'As soon as …' geleceğe bakar; 'has been producing' ile uyuşmaz, üstelik siparişler düşerken üretimin artması mantığa ters. İşçiler greveyken üretimin ikiye katlanması da mantıksız." },

  { id: 'fy-t3', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['wafer'],
    level: 'orta', cefr: 'B2', konu: ['amaç'],
    q: 'Workers in chip factories wear special suits that cover them from head to toe ----.',
    options: [
      'because dust has hardly any effect on the finished circuits',
      'so that visitors can easily recognise each one of them from afar',
      'so that dust from their skin and hair stays off the wafers',
      'unless the machines have already been switched off for the night',
      'in order to let more dust into the air of the room',
    ], answer: 2,
    explain: "İşçiler tepeden tırnağa örten özel giysiler giyiyor. Bunun amacı, derilerinden ve saçlarından dökülen tozun levhalara ulaşmasını önlemek. Amaç 'so that' ile kurulur. Aynı bağlaçla gelen öteki seçenek, ziyaretçilerin işçileri kolayca tanımasını amaç yapıyor; oysa her yeri örten bir giysi tanımayı zorlaştırır. Tozun bitmiş devrelere neredeyse hiç etkisi olmaması özel giysiyi gereksiz kılar; mantık ters. Odaya daha çok toz sokmak da bu giysilerin amacının tersi. 'Unless' ile kurulan koşul ise cümleye anlam vermiyor." },

  { id: 'fy-t4', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['keep up with'],
    level: 'zor', cefr: 'C1', konu: ['karşıtlık'],
    q: '----, the firm has decided against building a new factory, arguing that the boom may not last.',
    options: [
      'Because it can no longer keep up with all the orders it receives',
      'Unless its rivals start building factories of their own',
      'Much as demand for its chips has grown in recent months',
      'Since there is barely any demand for its chips at present',
      'So that it could meet the growing demand for its chips',
    ], answer: 2,
    explain: "Ana cümle firmanın yeni fabrika kurmamaya karar verdiğini ve gerekçe olarak patlamanın sürmeyebileceğini söylediğini anlatıyor. Demek ki talep şu an yüksek, ama firma buna rağmen yatırım yapmıyor. 'Much as …' (… -se de, … -e rağmen) bu karşıtlığı kurar: çiplerine talep son aylarda artmış olsa da. Siparişlere yetişememek yeni fabrika kurmanın nedeni olurdu; kurmamanın nedeni olarak mantık ters. Talebin neredeyse hiç olmaması 'boom' (patlama, hızlı büyüme) sözüyle çelişiyor. 'So that' ile verilen amaç da kurmama kararıyla çelişiyor. 'Unless' ile kurulan koşul ise alınmış bir karara anlam vermiyor." },

  // ---------- çeviri: İngilizceden Türkçeye ----------
  { id: 'fy-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['flawless'],
    level: 'orta', cefr: 'B2', konu: ['edilgen'],
    q: 'Every chip is tested carefully before it is shipped, and only those that are found to be flawless are sent on to customers.',
    options: [
      'Her çip sevk edilmeden önce dikkatle test edilir; kusurlu bulunanlar ise ayrıca müşterilere gönderilir.',
      'Her çip sevk edilmeden önce dikkatle test edilir ve yalnız kusursuz olduğu anlaşılanlar müşterilere gönderilir.',
      'Müşteriler kendilerine gönderilen her çipi kullanmadan önce dikkatle test eder ve yalnız kusursuz olanları saklar.',
      'Her çip sevk edildikten sonra dikkatle test edilir ve kusursuz çıkanların tümü müşterilere geri gönderilir.',
      'Çiplerin yalnız bir kısmı sevk edilmeden önce test edilir ve kusursuz bulunanlar müşterilere gönderilir.',
    ], answer: 1,
    explain: "Cümlenin iki bölümü de edilgen: 'Every chip is tested' (her çip test edilir) ve 'only those that are found to be flawless are sent on' (yalnız kusursuz olduğu anlaşılanlar gönderilir). Test sevkiyattan önce yapılıyor ('before it is shipped'). Doğru çeviri edilgen yapıyı, sırayı ve 'only' kısıtını korur. Yanlışlardan biri kusurlu çiplerin de gönderildiğini söyleyerek anlamı tersine çeviriyor. Biri testi yapanı müşteri yapıyor. Biri testi sevkiyattan sonraya alıp 'geri gönderilir' diyor. Kalan yanlış seçenek de 'every' (her) sözünü 'bir kısmı'na daraltıyor." },

  { id: 'fy-c2', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['processor'],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: 'Thanks to its new processor, the laptop is nearly twice as fast as the previous model, although it costs about the same.',
    options: [
      'Dizüstü bilgisayar, yeni işlemcisine karşın önceki modelden pek hızlı değil, ama fiyatı aşağı yukarı aynı.',
      'Önceki model, eski işlemcisine karşın yeni dizüstü bilgisayardan neredeyse iki kat hızlıydı ve fiyatı da aynıydı.',
      'Dizüstü bilgisayar, yeni işlemcisi sayesinde önceki modelden neredeyse iki kat hızlı, ama fiyatı da iki katına çıkmış.',
      'Dizüstü bilgisayar, yeni işlemcisi sayesinde önceki modelden neredeyse iki kat hızlı, ama fiyatı aşağı yukarı aynı.',
      'Dizüstü bilgisayar, yeni işlemcisi sayesinde önceki modelle aşağı yukarı aynı hızda çalışıyor, üstelik fiyatı da aynı.',
    ], answer: 3,
    explain: "'Nearly twice as fast as the previous model' (önceki modelden neredeyse iki kat hızlı) bir karşılaştırmadır; 'thanks to its new processor' bunun nedenini, 'although it costs about the same' da beklenmedik bir bilgiyi veriyor: fiyat aşağı yukarı aynı. Doğru çeviri üçünü de korur. Yanlışlardan biri bilgisayarın pek hızlı olmadığını söyleyerek karşılaştırmayı bozuyor. Biri karşılaştırmayı tersine çevirip eski modeli hızlı yapıyor. Biri hızı doğru veriyor ama fiyatın iki katına çıktığını ekliyor. Kalan yanlış seçenek de iki modeli aynı hızda gösteriyor." },

  { id: 'fy-c3', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['circuit'],
    level: 'zor', cefr: 'C1', konu: ['ortaç öbeği'],
    q: 'Developed separately by Jack Kilby in 1958 and by Robert Noyce the following year, the integrated circuit allowed many components to be built together on a single piece of semiconductor.',
    options: [
      "Jack Kilby tarafından 1958'de, Robert Noyce tarafından da ertesi yıl ayrı ayrı geliştirilen tümleşik devre, birçok bileşenin tek bir yarı iletken parçası üzerinde birlikte yapılmasını sağladı.",
      "Jack Kilby ile Robert Noyce'un 1958'de birlikte geliştirdiği tümleşik devre, birçok bileşenin tek bir yarı iletken parçası üzerinde bir arada yapılabilmesini sağladı.",
      "Jack Kilby 1958'de tümleşik devreyi geliştirdikten sonra Robert Noyce ertesi yıl birçok bileşeni tek bir yarı iletken parçası üzerinde bir araya getirmeyi başardı.",
      "Jack Kilby tarafından 1958'de, Robert Noyce tarafından da ertesi yıl ayrı ayrı geliştirilen tümleşik devre, her bileşenin ayrı bir yarı iletken parçası üzerinde yapılmasını gerektirdi.",
      "Tümleşik devre, birçok bileşenin tek bir yarı iletken parçası üzerinde birlikte yapılabilmesi amacıyla 1958'de Jack Kilby ve Robert Noyce tarafından ayrı ayrı geliştirildi.",
    ], answer: 0,
    explain: "Cümle 'Developed separately by …' diye başlayan edilgen bir ortaç öbeğiyle açılıyor; öbek, cümlenin öznesi olan 'the integrated circuit'i niteler: Kilby tarafından 1958'de, Noyce tarafından ertesi yıl birbirinden ayrı olarak geliştirilen tümleşik devre. Yüklem 'allowed many components to be built together' (birçok bileşenin birlikte yapılmasını sağladı). Yanlışlardan biri 'separately' sözünü 'birlikte'ye çeviriyor ve iki tarihi birleştiriyor. Biri ortaç öbeğini zaman cümlesine çevirip birleştirme işini yalnız Noyce'a veriyor. Biri sonucu tersine çevirip her bileşenin ayrı bir parça üzerinde yapılması gerektiğini söylüyor. Kalan yanlış seçenek de sonucu amaç yapıyor ve iki geliştirmeyi aynı yıla koyuyor." },

  // ---------- çeviri: Türkçeden İngilizceye ----------
  { id: 'fy-c4', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['processor'],
    level: 'kolay', cefr: 'B1', konu: ['bağlaç'],
    q: 'İşlemci çok ısındığı için bilgisayar kendini kapattı.',
    options: [
      'The processor got too hot because the computer switched itself off.',
      'The computer switched itself off, so the processor got too hot.',
      'Although the processor got too hot, the computer did not switch off.',
      'The computer switched itself off because the processor got too hot.',
      'The computer switched itself off before the processor got too hot.',
    ], answer: 3,
    explain: "Türkçe cümlede '-dığı için' bir neden bildiriyor: neden işlemcinin çok ısınması, sonuç bilgisayarın kendini kapatması. Doğru seçenek bu ilişkiyi 'because' ile kurar. Bir seçenek 'because' kullanıyor ama neden ile sonucun yerini değiştiriyor. 'So' kullanan seçenek de kapanmayı ısınmanın nedeni yapıyor. 'Although' kullanan seçenek bilgisayarın kapanmadığını söylüyor. Kalan yanlış seçenek ise kapanmayı ısınmadan önceye koyuyor ve neden-sonuç bağını koparıyor." },

  { id: 'fy-c5', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['circuit'],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'Çipin içindeki devreleri tasarlayan mühendisler, işlerinin çoğunu bilgisayar programlarıyla yapar.',
    options: [
      'The engineers who design the circuits inside a chip do most of their work with computer programs.',
      'The computer programs that engineers use to design the circuits inside a chip do most of the work.',
      'The engineers whose circuits are designed by computer programs do very little work on the chip itself.',
      'Most engineers who use computer programs to design chips never work on the circuits inside them.',
      'Engineers design the circuits inside a chip with computer programs, which do some of their work.',
    ], answer: 0,
    explain: "Türkçe cümlede 'çipin içindeki devreleri tasarlayan' bir sıfat cümleciğidir ve 'mühendisler'i niteler; yüklem 'işlerinin çoğunu bilgisayar programlarıyla yapar'. İngilizcede bu 'The engineers who design the circuits inside a chip do most of their work with …' diye verilir. Yanlışlardan biri işin çoğunu yapanı mühendis değil program yapıyor. Biri devreleri programların tasarladığını ve mühendislerin az iş yaptığını söylüyor. Biri mühendislerin devreler üzerinde hiç çalışmadığını söyleyerek anlamı tersine çeviriyor. Kalan yanlış seçenek de 'çoğu'nu 'bir kısmı'na çeviriyor ve işi yapanı değiştiriyor." },

  { id: 'fy-c6', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['isim cümleciği'],
    q: 'Yeni bir çip fabrikası kurmanın neden yıllar sürdüğü, sektörün dışındakileri çoğu zaman şaşırtır.',
    options: [
      'People outside the industry are often surprised that a new chip factory can now be built in a few months.',
      'It often takes years for people outside the industry to understand why so many new chip factories are needed.',
      'Why people outside the industry want new chip factories to be built so quickly often surprises the engineers.',
      'Building a new chip factory takes years, which is why people outside the industry are rarely surprised.',
      'Why it takes years to build a new chip factory often comes as a surprise to people outside the industry.',
    ], answer: 4,
    explain: "Türkçe cümlenin öznesi bir isim cümleciğidir: 'yeni bir çip fabrikası kurmanın neden yıllar sürdüğü'. İngilizcede bu 'Why it takes years to build a new chip factory' diye kurulur ve cümlenin öznesi olur; 'çoğu zaman şaşırtır' da 'often comes as a surprise to …' ile karşılanır. Yanlışlardan biri fabrikanın birkaç ayda kurulabildiğini söyleyerek anlamı tersine çeviriyor. Biri yılların, insanların anlamasına harcandığını söylüyor. Biri isim cümleciğinin içeriğini değiştirip şaşıranı mühendisler yapıyor. Kalan yanlış seçenek de şaşkınlığı 'rarely' ile olumsuza çeviriyor." },

  // ---------- okuma parçası (4 soru, YDS biçimi) ----------
  { id: 'fy-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['exponentially', 'shrink', 'roughly', 'transistor', 'processor', 'keep up with'],
    level: 'orta', cefr: 'B2', title: 'Moore yasası',
    text: "In 1965 the American engineer Gordon Moore published a short article about the future of electronics. He pointed out that the number of components that could be placed on a single chip had roughly doubled every year, and he predicted that the trend would continue for some years. In 1975 he revised his estimate, suggesting that a doubling every two years was more realistic. The idea soon became known as 'Moore's law', but the name is misleading. It is not a law of nature like gravity; it is an observation about an industry, and over the years it also turned into a target. Chip makers planned their research around it, knowing that if they fell behind the expected pace, their rivals would not. When a quantity doubles again and again, it grows exponentially, and the results soon become enormous: today's most powerful processors are thought to contain billions of transistors, each far too small to be seen with an ordinary microscope. Yet this progress is becoming harder to sustain. As transistors shrink towards the scale of individual atoms, electric current can leak through barriers that are supposed to block it, and packing so many switches so closely together produces heat that is difficult to remove. Engineers have responded by stacking parts of a chip in layers and by designing chips for specialised tasks. Whether such ideas can keep the old pace going is an open question, and many engineers doubt that the doubling will continue as smoothly as it once did.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, in 1975 Moore ----.',
        options: [
          'said that the trend he had described would soon come to an end',
          'urged chip makers to stop treating his idea as a target to meet',
          'decided that each doubling would take twice as long',
          'claimed that his forecast was as reliable as a law of nature',
          'published his first article on the future of electronics',
        ], answer: 2,
        explain: "Parçaya göre Moore 1965'te bileşen sayısının aşağı yukarı her yıl ikiye katlandığını yazmış, 1975'te ise tahminini düzeltip iki yılda bir ikiye katlanmanın daha gerçekçi olduğunu söylemiş. Bir yıldan iki yıla çıkmak, her ikiye katlanmanın iki kat uzun sürmesi demektir. Eğilimin yakında biteceğini söylediği parçada geçmiyor. Fikrin hedef olarak görülmesini bırakmalarını istediği de parçada yok; hedef olmasını sektör kendisi sağlamış. Tahminin bir doğa yasası kadar güvenilir olduğu da parçayla çelişiyor. Elektroniğin geleceğine dair ilk makalesi ise 1975'te değil, 1965'te yayımlanmış." },
      { konu: ['ayrıntı'],
        q: 'It is stated in the passage that, as transistors get smaller, ----.',
        options: [
          'current may escape through parts meant to stop it',
          'they become easier to see with an ordinary microscope',
          'chips may need fewer layers to perform the same tasks',
          'they produce less heat and so need no extra cooling',
          'the doubling pace becomes faster than ever before',
        ], answer: 0,
        explain: "Parçaya göre transistörler atom ölçeğine doğru küçüldükçe elektrik akımı, onu durdurması gereken engellerin içinden sızabiliyor. Doğru seçenek bunu 'akım, onu durdurması gereken kısımlardan kaçabilir' diye veriyor. Küçüldükçe sıradan bir mikroskopla daha kolay görülmeleri parçayla çelişiyor; zaten görülemeyecek kadar küçükler. Daha az ısı üretmeleri de parçaya ters; çok sayıda anahtarın sıkıştırılması uzaklaştırılması zor bir ısı yaratıyor. Daha az katman gerekmesi ve ikiye katlanmanın hızlanması da parçada yok; mühendisler tersine katman ekliyor ve ilerleme zorlaşıyor." },
      { konu: ['çıkarım'],
        q: "It can be inferred from the passage that Moore's law held for so long partly because ----.",
        options: [
          'it was based on a physical principle that scientists fully understood',
          'companies worked hard to keep up with the pace it predicted',
          'transistors stopped getting any smaller after the year 1975',
          'heat and leaking current never caused trouble for any processor',
          'Moore himself kept revising his figure every few years',
        ], answer: 1,
        explain: "Parça bu 'yasa'nın zamanla bir hedefe dönüştüğünü, şirketlerin araştırmalarını ona göre planladığını ve geride kalırlarsa rakiplerinin kalmayacağını bildiklerini söylüyor. Buradan, eğilimin uzun süre sürmesinde şirketlerin bu hıza yetişmek için çabalamasının da payı olduğu çıkar. Bir fizik ilkesine dayandığı parçayla çelişiyor; parça onun bir doğa yasası olmadığını vurguluyor. Transistörlerin 1975'ten sonra küçülmeyi bıraktığı da parçaya ters. Isının ve sızıntının hiç sorun yaratmadığı parçayla çelişiyor. Moore'un rakamı birkaç yılda bir düzelttiği ise parçada yok; yalnız bir kez, 1975'te düzeltmiş." },
      { konu: ['ana fikir'],
        q: 'Which of the following best expresses the main idea of the passage?',
        options: [
          'Gordon Moore was the first engineer to place transistors on a single chip.',
          'Now that chips are so tiny, engineers have gone back to larger transistors.',
          "Moore's law has been proven to be a law of nature, just like gravity.",
          'Stacking components in layers has fully solved the problem of heat.',
          'A trend the industry relied on for decades now faces physical limits.',
        ], answer: 4,
        explain: "Parça önce Moore'un gözlemini ve onun sektörün hedefi hâline gelişini, sonra transistörler atom ölçeğine yaklaştıkça bu hızı sürdürmenin neden zorlaştığını anlatıyor. Bütünü, sektörün onlarca yıl dayandığı bir eğilimin artık fiziksel sınırlara dayandığını söyleyen cümle özetler. Moore'un transistörleri tek çipe koyan ilk mühendis olduğu parçada yok. Mühendislerin daha büyük transistörlere döndüğü de parçada geçmiyor. Moore yasasının bir doğa yasası olduğu parçayla çelişiyor. Katman katman yığmak bir çözüm denemesi olarak geçiyor; ısı sorununu tamamen çözdüğü söylenmiyor, sonuç 'açık bir soru'." },
    ] },

  // ---------- okuma parçası (3 soru, YÖKDİL biçimi) ----------
  { id: 'fy-o2', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['dependent', 'scale up', 'cutting-edge'],
    level: 'zor', cefr: 'C1', title: 'Çip kıtlığı ve tedarik zinciri',
    text: "When the COVID-19 pandemic began in early 2020, many car makers expected sales to fall sharply, so they reduced or cancelled their orders for chips. At the same time, people who were suddenly working and studying at home rushed to buy laptops, webcams and games consoles, all of which are dependent on chips. Chip factories, which usually run day and night and take orders months in advance, passed the freed-up production time to electronics firms. When car sales recovered sooner than expected, the car makers found themselves at the back of the queue, and chip makers could not scale up production overnight. A modern car contains a large number of chips, many of them simple and cheap, but the lack of just one can stop a vehicle from being finished. Over the following months, a number of manufacturers had to slow or temporarily halt their assembly lines, and in some cases cars were parked half-built while they waited for parts. The crisis also drew attention to how concentrated production had become. Much of the world's most cutting-edge chipmaking takes place in a small number of factories, a large share of them in Taiwan, so a fire, drought or earthquake in one place can be felt around the world. By 2023 the situation had largely eased, but many governments and companies concluded that relying so heavily on a few suppliers was a risk they could no longer ignore.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, car makers struggled to get chips mainly because ----.',
        options: [
          'other buyers had taken over the slots they had given up',
          'chip factories had closed down for most of the year 2020',
          'cars depend on the most advanced chips that factories make',
          'governments had stopped chip exports to countries making cars',
          'they had ordered far more chips than they actually needed',
        ], answer: 0,
        explain: "Parçaya göre otomobil üreticileri salgının başında siparişlerini kısmış; fabrikalar boşalan üretim zamanını elektronik firmalarına vermiş. Satışlar toparlanınca otomobilciler sıranın sonunda kalmış. Doğru seçenek bunu 'bıraktıkları üretim sırasını başka müşteriler almıştı' diye veriyor. Fabrikaların 2020'nin çoğunda kapalı kaldığı parçayla çelişiyor; gece gündüz çalışıyorlar. Otomobillerin en ileri çiplere dayandığı da parçaya ters; çiplerin çoğu basit ve ucuz. Hükümetlerin ihracatı durdurduğu parçada yok. Gereğinden fazla sipariş verdikleri de parçayla çelişiyor; siparişlerini azaltmışlardı." },
      { konu: ['çıkarım'],
        q: "It can be inferred from the passage that the car makers' difficulties ----.",
        options: [
          'could have been solved quickly simply by building new factories',
          'were mainly caused by a single fire at one chip factory',
          'ended as soon as most people went back to their offices',
          'affected only the most expensive and most modern vehicles',
          'stemmed partly from their own early forecast about sales',
        ], answer: 4,
        explain: "Parça otomobil üreticilerinin satışların sert düşeceğini beklediğini ve bu yüzden siparişlerini kıstığını, satışların ise beklenenden erken toparlandığını söylüyor. Buradan, sıkıntının bir kısmının kendi yanlış çıkan tahminlerinden kaynaklandığı çıkar. Yeni fabrikalarla hızla çözülebileceği parçayla çelişiyor; üretim bir gecede büyütülemiyordu. Yangın parçada yalnız olası bir risk örneği olarak geçiyor; krizin nedeni olarak değil. İnsanların işe dönmesiyle krizin bittiği parçada yok. Yalnız pahalı ve yeni araçların etkilendiği de parçada geçmiyor; tek bir ucuz çipin eksikliği bile bir aracı yarım bırakabiliyor." },
      { konu: ['yazarın amacı'],
        q: "The author's main purpose in the passage is to ----.",
        options: [
          'show how shifting demand caused a crisis and exposed a deeper risk',
          'argue that car makers ought to build chip factories of their own',
          'criticise people who bought electronics during the pandemic',
          'compare the chips found in cars with those found in laptops',
          'predict when the next worldwide chip crisis is likely to start',
        ], answer: 0,
        explain: "Yazar önce salgında talebin nasıl yer değiştirdiğini ve bunun otomobil üretiminde nasıl bir krize yol açtığını, sonra krizin üretimin birkaç yerde toplanmasının yarattığı daha derin riski nasıl gün ışığına çıkardığını anlatıyor. Amacı bu süreci açıklamak. Otomobil üreticilerinin kendi fabrikalarını kurması gerektiğini savunmuyor. Elektronik alanları eleştiren bir söz yok. Arabalardaki ve dizüstü bilgisayarlardaki çipler yalnız geçerken anılıyor, karşılaştırılmıyor. Bir sonraki krizin ne zaman başlayacağına dair bir tahmin de yok." },
    ] },

  // ---------- diyalog tamamlama ----------
  { id: 'fy-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B2', konu: ['bağlam'],
    q: "Elif: My phone has become so slow lately. Even opening the camera takes forever.\nCan: How old is it?\nElif: Nearly five years. I've been thinking about getting a new one, but they're so expensive.\nCan: ----\nElif: Really? I didn't know that could make such a difference. I'll try it tonight.",
    options: [
      'Before you buy one, try deleting old photos and apps. A full phone often slows down.',
      'Why not buy one this week? Prices usually go up when the new models come out.',
      "Mine is even older, and it still works perfectly. Maybe you've just been unlucky.",
      "Five years? That's quite old. Most people I know change theirs every two years.",
      "Have you asked your brother? He bought a new phone last month, didn't he?",
    ], answer: 0,
    explain: "Elif'in son sözü ('Gerçekten mi? Bunun bu kadar fark yaratabileceğini bilmiyordum. Bu akşam deneyeceğim.') iki şey gösteriyor: Can bir şey denemesini önermiş ve bu öneri telefonun yavaşlığına bir çare. Bunu, yeni telefona para harcamadan önce eski fotoğraf ve uygulamaları silmesini, dolu bir telefonun çoğu zaman yavaşladığını söyleyen cevap karşılar. Bu hafta telefon almasını öneren soru da bir öneri ama 'bu kadar fark yaratabileceğini bilmiyordum' ona uymaz. Ağabeyine sormasını öneren soru 'deneyeceğim' sözüyle bağlanmaz. Kendi telefonunun daha eski olduğunu söyleyen ve beş yılın uzun olduğunu belirten cevaplarda denenecek bir şey yok." },

  // ---------- anlamca en yakın cümle ----------
  { id: 'fy-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: ['circuit'],
    level: 'orta', cefr: 'B2', konu: ['kip (modal)'],
    q: "The technicians didn't need to replace the whole circuit board, as changing a single chip was enough.",
    options: [
      "The technicians needn't have replaced the whole circuit board, but they did so anyway.",
      'Changing a single chip was not enough, so the technicians had to replace the whole board.',
      'The technicians should have replaced the whole circuit board instead of a single chip.',
      'The technicians had no need to change the whole board, since one new chip did the job.',
      "The technicians couldn't change a single chip, so they replaced the whole circuit board.",
    ], answer: 3,
    explain: "Verilen cümleye göre teknisyenlerin bütün devre kartını değiştirmesi gerekmedi, çünkü tek bir çipi değiştirmek yetti; yani kartı değiştirmediler. 'Didn't need to' tek başına işin yapılıp yapılmadığını her zaman söylemez; burada bunu 'changing a single chip was enough' gösteriyor. Doğru seçenek aynı şeyi söylüyor: bütün kartı değiştirmelerine gerek yoktu, tek bir yeni çip yeterliydi. 'Needn't have replaced' ince bir farkla ayrılıyor: gereksiz olduğu hâlde kartı değiştirdiklerini anlatır. Tek çipin yetmediğini ve kartı değiştirmek zorunda kaldıklarını söyleyen seçenek anlamı tersine çeviriyor. 'Should have replaced' kartı değiştirmeleri gerektiğini söyleyerek eleştiri bildiriyor. Kalan yanlış seçenek de çipi değiştiremediklerini ve kartı değiştirdiklerini söylüyor." },

  // ---------- paragraf tamamlama ----------
  { id: 'fy-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['processor'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: "When people hear the word 'chip', they usually picture the powerful processor inside a computer or a phone. Most chips, however, are far simpler. ----. A washing machine, for instance, needs only a basic chip to time each stage of its cycle, and a greeting card that plays a tune needs even less.",
    options: [
      'The most powerful processors contain more transistors than ever before',
      'As a result, they usually cost far more than the ones found in phones',
      'Washing machines were in use long before the first chips appeared',
      'They carry out one small task over and over and cost very little',
      'Nevertheless, they are hardly ever used in household appliances',
    ], answer: 3,
    explain: "Paragraf, çiplerin çoğunun güçlü işlemcilerden çok daha basit olduğunu söylüyor. Boşluktan sonraki cümle 'for instance' ile örnek veriyor: çamaşır makinesinin yalnız her aşamayı zamanlayan basit bir çipe ihtiyacı var, şarkı çalan bir tebrik kartının daha da azına. Boşluk, bu örneklerin neyin örneği olduğunu söylemeli: bu çipler küçük bir işi tekrar tekrar yapar ve çok ucuzdur. En güçlü işlemcilerdeki transistör sayısı konuyu basit çiplerden uzaklaştırıyor. Basit çiplerin telefondakilerden pahalı olduğu ve ev aletlerinde neredeyse hiç kullanılmadığı, ardından gelen örneklerle çelişiyor. Çamaşır makinelerinin tarihi de örneklere bağlanmıyor." },

  { id: 'fy-p2', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['dependent'],
    level: 'zor', cefr: 'C1', konu: ['gönderim'],
    q: 'Farming might seem a world away from high technology, yet it has become surprisingly dependent on chips. Many modern tractors are steered by satellite navigation and controlled by dozens of small onboard computers. ----. This is one reason why some farmers have campaigned for the right to fix their own machines.',
    options: [
      'These machines allow a farmer to plough a field in perfectly straight lines',
      'Such machines can easily be repaired by anyone with a few basic tools',
      'Satellite navigation also helps drivers find their way around unfamiliar cities',
      'If one of them breaks, the owner often cannot fix it without special software',
      'Farmers have always had to adapt to new tools and to changing weather',
    ], answer: 3,
    explain: "Boşluktan sonraki cümle 'This is one reason why …' (Bu, … nedenlerinden biri) diye başlıyor. 'This' bir önceki cümlede anlatılan bir soruna gönderme yapar ve bu sorun, çiftçilerin makinelerini kendileri onarma hakkı için uğraşmasının nedeni olmalı. Boşluktaki cümle de 'one of them' ile bir önceki cümledeki küçük bilgisayarlara bağlanmalı. Bunu, bunlardan biri bozulduğunda sahibinin onu çoğu zaman özel bir yazılım olmadan onaramadığını söyleyen cümle sağlar. Makinelerin tarlayı dümdüz sürmeyi sağladığını söyleyen cümle de 'These machines' ile önceki cümleye bağlanıyor ama bir sorun bildirmiyor; 'This is one reason' ona uymaz. Her makinenin birkaç basit aletle kolayca onarılabilmesi, onarım hakkı için uğraşmayı gereksiz kılar. Uydu navigasyonunun kentte yol bulmaya yaraması ve çiftçilerin hep yeni koşullara uyum sağlaması da onarım hakkına bağlanmıyor." },

  // ---------- akışı bozan cümle ----------
  { id: 'fy-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['silicon', 'wafer', 'flawless'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Making a chip begins with one of the most common materials on Earth: sand that is rich in quartz.',
      'Glass, which is also made mainly from sand, has been produced by people for thousands of years.',
      'The silicon extracted from it is purified until almost nothing else remains, since even tiny traces of other substances can change how a chip behaves.',
      'This pure silicon is then melted, and a single large crystal shaped like a cylinder is slowly drawn up out of the liquid.',
      'Finally, the crystal is sliced into thin, round wafers, which are polished until their surfaces are almost flawless.',
    ],
    answer: 1,
    explain: "Parça kumdan levhaya giden yolu adım adım anlatıyor: çip yapımı kuvarslı kumla başlar (I); ondan elde edilen silisyum neredeyse başka hiçbir şey kalmayana dek arıtılır (III); saf silisyum eritilir ve sıvıdan tek bir büyük silindir kristal çekilir (IV); kristal ince, yuvarlak levhalara kesilip parlatılır (V). II. cümle de kumdan söz ediyor ama konuyu camın tarihine kaydırıyor. Üstelik III'teki 'extracted from it' (ondan elde edilen) I'deki kuma gönderme yapıyor; II araya girince 'it' cama bağlanıyor gibi görünür ve bağ kopar." },

  { id: 'fy-b2', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['etch', 'wafer'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'The circuits on a chip are far too small to be cut by any tool, so instead they are printed with light.',
      'A wafer is first coated with a material that changes when light falls on it, and light is then shone onto it through a pattern, rather like a stencil.',
      'Light also plays a major role in modern communication, carrying huge amounts of data through glass fibres under the oceans.',
      'The coating is then treated so that parts of the wafer are left bare, and chemicals or gases etch away the uncovered areas.',
      'Repeating these steps many times builds the chip up layer by layer; the most advanced machines for this kind of printing are currently made by just one company, ASML in the Netherlands.',
    ],
    answer: 2,
    explain: "Parça devrelerin ışıkla nasıl basıldığını anlatıyor: devreler hiçbir aletle kesilemeyecek kadar küçük olduğu için ışıkla basılır (I); levha ışığa duyarlı bir maddeyle kaplanır ve ışık bir kalıptan geçirilerek üzerine düşürülür (II); kaplama işlenir, açıkta kalan yerler kimyasal ya da gazla aşındırılır (IV); adımlar yinelenerek çip katman katman kurulur (V). III. cümle de ışıktan söz ediyor ama konuyu okyanus altındaki fiber kablolarla veri taşımaya kaydırıyor. IV'teki 'The coating' (kaplama) II'deki kaplamaya gönderme yapıyor; III araya girince bu bağ kopuyor." },
];

export default { id: 'fen-cip', course: C, title: U, order: 7, cards, items };
