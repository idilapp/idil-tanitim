// iDil › Tam deneme 6 (YDS biçimi; 80 soru, gerçek kitapçık sırası). Görev 17, Adım 1 (23 Kasım 2026).
// Tümü özgün: Claude yazdı. ÖSYM sorusu, yayınevi, ders kitabı (Murphy, Azar), uygulama ya da gazete metni kopyalanmadı,
// uyarlanmadı; ÖSYM kitapçıkları yazarken açılmadı, yalnız etiket sayımları (analiz/agirlik.json, analiz/dagilim.md) kullanıldı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md (ünite öğesiyle aynı).
//
// Sıra (analiz/dagilim.md §2): 1–6 kelime, 7–16 dil bilgisi, 17–26 boşluklu metin (2 × 5), 27–36 cümle tamamlama,
// 37–39 çeviri İng.→Tr., 40–42 çeviri Tr.→İng., 43–62 okuma (5 × 4), 63–67 diyalog, 68–71 yakın anlam, 72–75 paragraf
// tamamlama, 76–80 akışı bozan cümle. `sorular` dizisinde parçalar tek öğedir (type 'pratik', adımlarıyla); açılınca 80 soru.
// Kelime sırası YDS 2017–2026 şablonu: isim, isim, sıfat, zarf, fiil, öbek fiil. Dil bilgisi şablonu: 7–9 fiil yapıları,
// 10–11 edat, 12–14 bağlaç ve bağlantı zarfı, 15 eşleşik bağlaç, 16 edat. İlk dil bilgisi sorusu present perfect continuous ile
// present perfect ayrımıdır ('for nearly a decade … so far'); deneme 01–05'in ilk soru kalıplarından (by the time + past
// perfect, since + V2 / has + V3, future perfect continuous, past perfect edilgen) farklıdır.
// Parça konuları (deneme 01–05, set/ ve pilot/ konularıyla çakışmaz; en çok bir fen, en çok bir sağlık parçası): boşluklu
// z1 A serisi kâğıt ölçüleri (genel), z2 IKEA etkisi (psikoloji, sosyal); okuma o1 Galton'ın öküzü ve kalabalığın bilgeliği
// (psikoloji, sosyal), o2 Rowland Hill ve tek ücretli posta (tarih, sosyal), o3 periyodik ağustosböcekleri (biyoloji, fen),
// o4 ağızdan sıvı tedavisi (tıp tarihi, sağlık), o5 Hollanda lale çılgınlığı (iktisat tarihi, sosyal).
//
// Olgular (yerleşik bilgi; her biri yalnız gösterildiği öğede; metinler özgün; sayılar yuvarlak ve temkinli):
// - d06-z1: A serisi kâğıt ölçüleri: kenar oranı yaklaşık 1,41 (√2); uzun kenarından ikiye kesilen sayfa aynı biçimi korur;
//   A0 bir metrekare, her küçük ölçü bir üsttekinin yarısı, A4 metrekarenin on altıda biri; oranın üstünlüklerini 1786'da bir
//   mektupta anlatan Alman bilim insanı (Georg Christoph Lichtenberg; parçada ad yok, "in the 1780s"); bir Alman standart
//   kurumunun 1922'de benimsemesi (DIN 476, Walter Porstmann; parçada ad yok); uluslararası standart onlarca yıl sonra
//   (ISO 216, 1975; parçada "decades later"); ABD ve Kanada'nın çoğunlukla 'letter' gibi başka ölçüler kullanması; iki A4
//   sayfanın küçültülünce bir A4'e yan yana sığması.
// - d06-z2: IKEA etkisi (Norton, Mochon ve Ariely, Journal of Consumer Psychology, 2012; parçada ad ve dergi yok): düz paket
//   saklama kutusunu kuranların, kurulu gelen özdeş kutu için başkalarının önerdiğinden belirgin biçimde yüksek fiyat önermesi;
//   kâğıt katlama (origami) deneyinde katlayanların kendi beceriksiz işlerine uzmanlarınkine yakın değer vermesi, katılmayanların
//   pek değer vermemesi; kurup sökenlerde ve tamamlayamayanlarda etkinin büyük ölçüde kaybolması ("appeared to").
// - d06-o1: Francis Galton, 1906 sonbaharı, Plymouth'taki hayvancılık sergisi (West of England Fat Stock and Poultry
//   Exhibition; parçada ad yok); kesilip satışa hazırlanmış bir öküzün ağırlığı için bilet karşılığı tahmin; yaklaşık 800 bilet
//   (Galton 787 okunaklı bileti kullandı; parçada "about eight hundred"); katılanlar arasında kasap ve çiftçiler; ortanca tahmin
//   1.207 libre, gerçek ağırlık 1.198 libre (yüzde birden az fark; parçada sayı yok); Nature, 1907 ("Vox Populi"; parçada "the
//   following year"); Galton'ın sıradan insanların yargısına güvenmemesi (yaygın anlatım; temkinli "apparently expecting");
//   "wisdom of crowds" adı (Surowiecki, 2004; parçada ad yok); toplumsal etkinin tahminleri birbirine yaklaştırıp isabeti
//   artırmadan güveni artırabileceği (Lorenz ve arkadaşları, PNAS, 2011; parçada ad yok, temkinli "Later research suggests").
// - d06-o2: 1840'tan önce Britanya'da posta ücretinin uzaklığa ve sayfa sayısına göre değişmesi ve çoğunlukla alıcının ödemesi;
//   ödeyemeyenlerin mektubu geri çevirmesi; Rowland Hill, eski okul öğretmeni, 1837'de "Post Office Reform: Its Importance and
//   Practicability" broşürü (parçada ad yok); giderin çoğunun taşımadan değil işlemden doğduğu savı; uzaklıktan bağımsız,
//   gönderenin önceden ödediği tek ücret ve yapıştırılan etiket önerisi; Posta İdaresi'nin üst görevlilerinin karşı çıkması;
//   tek peni ücretinin Ocak 1840'ta yürürlüğe girmesi; ilk yapışkanlı pul Penny Black'in Mayıs 1840'ta satışa çıkması; mektup
//   sayısının bir yılda kabaca iki katına çıkması (1839'da yaklaşık 76 milyon, 1840'ta yaklaşık 169 milyon; parçada "roughly
//   doubled"); gelirin çok daha geç toparlanması; Penny Black'in kırmızı iptal damgasının siyah zeminde zor görülmesi yüzünden
//   kısa sürede değiştirilmesi (1841, Penny Red; parçada "partly because"); birkaç on yılda başka ülkelerin de pul kullanması.
// - d06-o3: Periyodik ağustosböcekleri (Magicicada), Kuzey Amerika'nın doğusu: nimflerin 13 ya da 17 yıl toprak altında ağaç
//   köklerinin sıvısıyla beslenmesi; birkaç hafta içinde topluca çıkış, son deri değiştirme; yetişkinlerin birkaç hafta yaşaması,
//   erkeklerin yüksek sesli ötüşü, dişilerin yumurtayı ince dallara bırakması; avcı doygunluğu (predator satiation); asal sayı
//   varsayımı (temkinli: "One proposal", "difficult to test"); nimflerin konak ağacın sıvısındaki yıllık değişimleri izliyor
//   olabileceğini gösteren deneyler (Karban ve arkadaşları, Ecology Letters, 2000; parçada ad yok, temkinli "may").
// - d06-o4: Kolera ve öteki ishalli hastalıkların başlıca susuzluk (su ve tuz kaybı) yoluyla öldürmesi; 20. yüzyılın büyük
//   bölümünde ağır olgularda damar yoluyla sıvı; steril malzeme ve eğitimli personel gereksinimi; 1960'larda Güney Asya'da
//   (Dakka ve Kalküta'daki araştırma merkezleri; parçada ad yok) glikozun bağırsakta sodyum emilimini artırdığının ve suyun
//   sodyumu izlediğinin ağızdan tedaviye uygulanması; 1971'de savaştan kaçan milyonlarca mültecinin bugünkü Bangladeş'ten
//   Hindistan'daki kamplara gelmesi ve kolera salgını; bir ekibin (Dilip Mahalanabis ve arkadaşları; parçada ad yok) içeceği
//   binlerce hastaya, büyük ölçüde yakınların hazırlayıp içirmesiyle vermesi ve ölümlerin alışılmış olandan çok daha az olması
//   (parçada oran yok); dünya çapında yaygınlaştırılması ve milyonlarca hayat kurtardığının yaygın kabulü ("widely credited");
//   içeceğin enfeksiyonu iyileştirmemesi ve ishali durdurmaması. Genel bilgi; tanı ya da tedavi önerisi değildir.
// - d06-o5: Lalenin 16. yüzyılda Osmanlı topraklarından Batı Avrupa'ya ulaşması; çizgili ("kırık") lalelerin desenini bitkiyi
//   de zayıflatan bir virüsün yaptığının 20. yüzyılda anlaşılması; 1630'ların ortasında fiyatların yükselmesi; alışverişin
//   kışın, soğanlar topraktayken meyhanelerde yapılması; Şubat 1637'de Haarlem'deki bir açık artırmaya alıcıların gelmemesi ve
//   birkaç gün içinde çöküş; 1841'de yayımlanan popüler kitap (Charles Mackay, Extraordinary Popular Delusions and the Madness of
//   Crowds; parçada ad yok); sözleşme, mahkeme kaydı ve mektupları inceleyen yeni tarihçiler (ör. Anne Goldgar, Tulipmania,
//   2007; parçada ad yok): alışverişin çoğunun tüccar ve zanaatkâr arasında olması, az kişinin iflas etmesi ("appear to");
//   Haarlem belediyesinin alıcılara anlaşılan fiyatın küçük bir payını (yüzde 3,5) ödeyerek sözleşmeyi bozma izni vermesi
//   (parçada oran yok); öykünün açgözlülük dersi olarak yaşaması (temkinli: "Some historians argue").
// - d06-p1: Sylvan Goldman, Oklahoma City'deki marketleri (Humpty Dumpty; paragrafta ad yok), 1937'de ilk tekerlekli alışveriş
//   arabası; arabanın katlanır sandalyeye tekerlek ve sepet takılarak yapılması (yalnız çeldiricide); erkeklerin ve kadınların
//   başta çekinmesi (temkinli: "apparently"); arabayı itip alışveriş ediyormuş gibi yapan kişiler tutması ("is said to").
// - d06-p2: Tuzak (decoy) seçenek etkisi (asimetrik baskın seçenek; Huber, Payne ve Puto, 1982; paragrafta ad yok; temkinli
//   "studies … suggest"); patlamış mısır örneği kurgusaldır.
// - d06-p3: Buzun kayganlığını paten bıçağının basıncıyla erimeye bağlayan eski açıklamanın yetersizliği (basınç erime noktasını
//   çok az düşürür; ör. Rosenberg, Physics Today, 2005; paragrafta ad yok); buzun yüzeyindeki moleküllerin daha gevşek bağlı
//   olduğu açıklamasının tartışmalı olması ("appear", "still debated").
// - d06-p4: Öğretmeyi beklemenin öğrenmeye etkisi (Nestojko, Bui, Kornell ve Bjork, Memory & Cognition, 2014; paragrafta ad
//   yok): deneylerde kimse gerçekte ders vermedi (temkinli: "some research suggests", "may").
// - d06-b1: Arthur Wynne, 21 Aralık 1913, New York World (paragrafta gazete adı ve gün yok); bulmacanın birkaç yıl az sayıda
//   gazetede kalması; 1924'te yeni bir yayınevinin (Simon & Schuster; paragrafta ad yok) bulmaca kitabının çok satması ve
//   Atlantik'in iki yakasında yayılan çılgınlık.
// - d06-b2: László Bíró, Macar gazeteci; çabuk kuruyan gazete mürekkebi; kimyacı kardeşi György ile ucunda bilye olan kalem
//   (1938'de Britanya'da patent; paragrafta yok); kardeşlerin Arjantin'e yerleşip 1940'ların başında geliştirilmiş biçimin
//   patentini alması (1943). "Owes much to": daha önceki patentler (ör. John Loud, 1888) yüzünden temkinli.
// - d06-b3: Panter bukalemununda renk değişimi (Teyssier ve arkadaşları, Nature Communications, 2015; paragrafta ad yok):
//   iridofor hücrelerindeki guanin nanokristallerinin düzeni; sakin durumda mavi yansıma ve sarı pigmentle yeşil; heyecanda
//   kristal aralıklarının açılması ve yansımanın sarı, turuncu ve kırmızıya kayması. Aykırı cümlede: renk değişiminin başlıca
//   çevreye uyum için olduğu sanısı (yalnız "Many people assume").
// - d06-b4: .99 ile biten fiyatlar ve "sol basamak etkisi" (ör. Thomas ve Morwitz, Journal of Consumer Research, 2005;
//   paragrafta ad yok; temkinli "may", "seem").
// - d06-b5: Jonas Hanway, 18. yüzyılın ortası, Londra; şemsiyeyi düzenli taşıyan ilk erkeklerden biri olduğu anlatısı ("is often
//   said"); şemsiyenin İngiltere'de çoğunlukla kadın aksesuarı sayılması; bir kuşak içinde erkekler için de saygın bir eşya
//   olması (temkinli: "Within a generation"). Aykırı cümlede: dönemin şemsiyelerinde sık balina çubuğu ve mumlu ya da yağlı bez.
// - d06-t4: Bambu ot ailesindendir (buğday ve pirinçle aynı aile); bazı türleri birçok ağaçtan uzun olur; gövdesi çoğunlukla
//   boğumlu ve içi boştur; dev pandaların başlıca besinidir (yerleşik bilgi).
// - Öteki öğelerde ad, sayı ya da tarih yok; cümleler genel bilgi ya da kurgusaldır.

const T = 'taslak';
const U = 'Tam deneme 6';
const G = 'genel';
const S = 'saglik';
const F = 'fen';
const SO = 'sosyal';

const sorular = [
  // ---------- 1–6: kelime ----------
  { id: 'd06-k1', course: SO, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['isim'],
    q: 'Voter ---- in the local elections fell to its lowest level in decades, with fewer than a third of registered voters casting a ballot.',
    options: ['loyalty', 'margin', 'turnout', 'outcome', 'consent'], answer: 2,
    explain: "Boşluktan sonraki bilgi, kayıtlı seçmenlerin üçte birinden azının oy kullandığını söylüyor; bu, seçime katılım oranıdır: 'voter turnout'. 'Margin' (iki aday arasındaki oy farkı) da düşebilir, ama oy kullananların oranını anlatmaz. 'Loyalty' (bir partiye bağlılık) ve 'outcome' (sonuç) seçmenin sandığa gidip gitmemesiyle ölçülmez; 'consent' (onay, rıza) da 'voter' ile bu anlamda bir öbek kurmaz." },
  { id: 'd06-k2', course: G, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['isim'],
    q: 'Rather than take the dispute to court, the two neighbours agreed to a ---- under which each would pay half the cost of repairing the wall between their gardens.',
    options: ['verdict', 'compromise', 'concession', 'precedent', 'grievance'], answer: 1,
    explain: "İki komşu mahkemeye gitmek yerine ortada buluşuyor: duvarın onarım giderini yarı yarıya ödüyorlar. Karşılıklı ödünle varılan bu uzlaşma 'compromise' ile anlatılır. 'Concession' (ödün) en güçlü çeldiricidir, ama çoğunlukla bir tarafın ötekine verdiği tek yönlü ödünü anlatır; burada iki taraf da ödün veriyor ve 'each would pay half' bir orta yolu tarif ediyor. 'Verdict' (mahkeme kararı) 'rather than take the dispute to court' ile çelişir. 'Precedent' (emsal) ve 'grievance' (yakınma) bir anlaşmanın adı değildir." },
  { id: 'd06-k3', course: SO, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['sıfat'],
    q: 'The wording of the survey question was so ---- that participants understood it in two quite different ways, which made many of the answers impossible to compare.',
    options: ['ambiguous', 'lengthy', 'offensive', 'precise', 'redundant'], answer: 0,
    explain: "Katılımcılar soruyu iki ayrı biçimde anlamış; bu, sorunun iki anlama gelebildiğini, yani 'ambiguous' (belirsiz, iki anlamlı) olduğunu gösterir. 'Precise' (kesin, açık) sonucu tersine çevirir. 'Lengthy' (uzun) en güçlü çeldiricidir: uzun bir soru zor okunabilir, ama uzunluk tek başına iki ayrı anlama yol açmaz. 'Offensive' (kırıcı) ve 'redundant' (gereksiz, fazlalık) da sorunun iki biçimde anlaşılmasını açıklamaz." },
  { id: 'd06-k4', course: G, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['zarf'],
    q: "The museum's director ---- denied the rumours, insisting that not a single painting from the collection had ever been sold.",
    options: ['tentatively', 'partially', 'gratefully', 'casually', 'firmly'], answer: 4,
    explain: "Müdür söylentileri yalanlıyor ve koleksiyondan tek bir tablonun bile satılmadığında diretiyor ('insisting that not a single painting'); bu kararlılık 'firmly' (kesin bir dille) ile anlatılır. 'Tentatively' (çekinerek) ve 'casually' (üstünkörü) diretmekle bağdaşmaz. 'Partially' (kısmen) yalanlamayı söylentilerin bir bölümüyle sınırlar; oysa müdür hiçbir tablonun satılmadığını söylüyor. 'Gratefully' (minnetle) bir yalanlamaya uymaz." },
  { id: 'd06-k5', course: G, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['fiil'],
    q: 'After the storm, insurance experts were sent to the coastal villages to ---- the damage, so that the compensation each household should receive could be calculated.',
    options: ['repair', 'inflict', 'prevent', 'exaggerate', 'assess'], answer: 4,
    explain: "Uzmanların gönderilme amacı, her haneye ödenecek tazminatın hesaplanabilmesidir; bunun için önce hasarın ne kadar olduğunu belirlemek gerekir: 'assess the damage' (hasarı değerlendirmek). 'Repair' (onarmak) en güçlü çeldiricidir, ama onarım tazminatın hesaplanmasını sağlamaz ve sigorta uzmanının işi değildir. 'Prevent' (önlemek) fırtınadan sonra anlamsızdır; 'inflict' (zarar vermek) ve 'exaggerate' (abartmak) da cümlenin amacıyla çelişir." },
  { id: 'd06-k6', course: SO, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['öbek fiil'],
    q: 'The charity was forced to ---- several of its summer projects when one of its largest donors unexpectedly withdrew its support.',
    options: ['call off', 'take on', 'set up', 'carry out', 'look into'], answer: 0,
    explain: "Büyük bir bağışçının desteğini çekmesi derneği bazı yaz projelerinden vazgeçmeye zorluyor: 'call off' (iptal etmek). 'Was forced to' da istenmeyen bir zorunluluğu gösterir. 'Take on' (üstlenmek), 'set up' (kurmak) ve 'carry out' (yürütmek) para kaybının ardından beklenecek işlerin tersidir. 'Look into' (incelemek) de destek çekilince zorunlu kalınan bir iş değildir." },

  // ---------- 7–16: dil bilgisi ----------
  { id: 'd06-g1', course: F, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['zaman', 'zaman: present perfect'],
    q: 'The research team ---- the coastline for nearly a decade, and so far they ---- more than forty shipwrecks, some of them over two centuries old.',
    options: ['surveyed / were identifying', 'had surveyed / will identify', 'is surveying / identified', 'has been surveying / have identified', 'was surveying / have been identified'], answer: 3,
    explain: "'For nearly a decade' (yaklaşık on yıldır) geçmişte başlayıp hâlâ süren bir işi, 'so far' (şimdiye dek) de bugüne kadar varılan sonucu gösteriyor. Süren iş present perfect continuous ('has been surveying'), bugüne dek biriken sonuç present perfect ('have identified') ile anlatılır. 'Surveyed / were identifying' en güçlü çeldiricidir: geçmiş zaman işi bitmiş gösterir ve 'so far' ile uyuşmaz. 'Is surveying' 'for nearly a decade' ile kurulmaz. 'Have been identified' edilgendir; 'they' öznesiyle 'more than forty shipwrecks' nesnesini alamaz. 'Had surveyed / will identify' de iki işi zamanda birbirinden koparıyor." },
  { id: 'd06-g2', course: G, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['kip geçmiş (modal perfect)'],
    q: 'The organisers ---- a larger hall; dozens of guests had to stand at the back throughout the three-hour ceremony.',
    options: ['should have booked', 'must have booked', "needn't have booked", 'may have booked', 'would rather book'], answer: 0,
    explain: "Konukların üç saat ayakta kalması, düzenleyicilerin daha büyük bir salon ayırtmadığını ve bunun bir hata olduğunu gösteriyor. Geçmişte yapılmamış bir işe yönelik eleştiri 'should have + V3' ile kurulur. 'Must have booked' ve 'may have booked' düzenleyicilerin büyük salonu ayırttığını güçlü ya da olası bir çıkarım olarak söyler; konukların ayakta kalmasıyla çelişir. 'Needn't have booked' büyük salonun gereksiz olduğunu söyler; durum bunun tersini gösteriyor. 'Would rather book' bir tercih bildirir ve geçmişteki bu olaya uymaz." },
  { id: 'd06-g3', course: SO, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edilgen', 'fiil yapıları'],
    q: 'Before the exhibition opened, the museum had several of the damaged frames ---- by a specialist who usually works on antique furniture.',
    options: ['restore', 'restoring', 'restored', 'to restore', 'been restored'], answer: 2,
    explain: "'Have something done' bir işi başkasına yaptırmayı anlatır: müze hasarlı çerçeveleri bir uzmana onarttı. Bu yapıda nesneden ('several of the damaged frames') sonra edilgen anlamlı V3 gelir: 'restored'; işi yapan da 'by a specialist' ile veriliyor. Yalın 'restore' ve 'restoring' etken anlamlıdır: 'have someone do' ya da 'have someone doing' kalıbında nesne işi yapan kişidir, oysa burada nesne onarılan çerçevelerdir. 'To restore' bu kalıpta kullanılmaz; 'been restored' de nesneden sonra 'had' ile birleşip bir zaman kuramaz." },
  { id: 'd06-g4', course: G, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['edat'],
    q: 'The new rules on working hours apply equally ---- full-time and part-time employees, regardless of how long they have been with the company.',
    options: ['for', 'with', 'at', 'on', 'to'], answer: 4,
    explain: "'Apply to someone' (birini kapsamak, birine uygulanmak) yerleşik bir fiil-edat bağıdır: yeni kurallar tam ve yarı zamanlı bütün çalışanları kapsıyor. 'Apply for' en güçlü çeldiricidir, ama 'bir şeye başvurmak' anlamındadır (apply for a job); kuralların kimi kapsadığını anlatmaz. 'With', 'at' ve 'on' bu cümlede 'apply' ile kapsama anlamı kurmaz." },
  { id: 'd06-g5', course: SO, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['çok sözcüklü edat'],
    q: '---- its modest size, the village has produced a remarkable number of well-known musicians over the past century.',
    options: ['Due to', 'Despite', 'Apart from', 'Instead of', 'In terms of'], answer: 1,
    explain: "Köyün küçük olması, çok sayıda ünlü müzisyen yetiştirmesini beklenmedik kılar; bu karşıtlık 'despite' (… e karşın) ile kurulur; 'remarkable' da sonucun şaşırtıcı olduğunu vurgular. 'Due to' (… yüzünden) en güçlü çeldiricidir, ama küçüklüğü çok müzisyen yetiştirmenin nedeni yapar; mantık ters döner. 'Apart from' (… dışında), 'instead of' (… yerine) ve 'in terms of' (… bakımından) köyün küçüklüğüyle müzisyen sayısı arasında anlamlı bir bağ kurmaz." },
  { id: 'd06-g6', course: SO, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: '---- the museum is free to enter, it attracts fewer visitors each year than most of the paid attractions in the city.',
    options: ['Because', 'Unless', 'Although', 'Once', 'So that'], answer: 2,
    explain: "Müzenin ücretsiz olması daha çok ziyaretçi beklentisi doğurur; buna karşın kentteki ücretli yerlerin çoğundan az ziyaretçi alıyor. Bu beklenmedik durum 'although' (… e karşın) ile bağlanır. 'Because' en güçlü çeldiricidir, ama ücretsiz olmayı az ziyaretçinin nedeni yapar; mantık ters döner. 'Unless' ve 'once' cümleyi koşula ya da zamana çevirir; müzenin ücretsiz olması bir koşul ya da bir an değil, süregelen bir durumdur. 'So that' (… sın diye) ücretsizliği az ziyaretçi amacına bağlar." },
  { id: 'd06-g7', course: G, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlantı zarfı'],
    q: 'Passengers must show a valid ticket before boarding the train; ----, they may be asked to pay a fine on top of the full fare.',
    options: ['moreover', 'otherwise', 'nevertheless', 'similarly', 'in other words'], answer: 1,
    explain: "Noktalı virgülden önce bir zorunluluk, sonra ona uyulmazsa ne olacağı geliyor: geçerli bilet gösterilmezse para cezası istenebilir. 'Otherwise' (yoksa, aksi hâlde) bu bağı kurar. 'Nevertheless' (yine de) en güçlü çeldiricidir, ama bilet gösteren yolcudan yine de ceza istenebileceğini söyler; anlam bozulur. 'Moreover' (üstelik) ve 'similarly' (benzer biçimde) cezayı ek ya da benzer bir kural yapar. 'In other words' (başka bir deyişle) ise ceza cümlesini bilet kuralının yeniden söylenişi sayar." },
  { id: 'd06-g8', course: G, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['zarf cümleciği'],
    q: '---- you have registered with the library, you can borrow up to ten books at a time and renew them online.',
    options: ['Although', 'As if', 'Whereas', 'Unless', 'Once'], answer: 4,
    explain: "Kayıt, kitap ödünç almanın ön koşuludur ve ondan önce gelir: kütüphaneye kaydolduktan sonra bir seferde on kitaba kadar ödünç alınabilir. Bu bağ 'once' (… dıktan sonra) ile kurulur. 'Unless' (… medikçe) en güçlü çeldiricidir, ama kayıt olmayanların kitap alabileceğini söyler; anlam tersine döner. 'Although' (… e karşın) ve 'whereas' (oysa) karşıtlık kurar, 'as if' (sanki) benzetme yapar; kayıtla ödünç alma arasında karşıtlık ya da benzetme yoktur." },
  { id: 'd06-g9', course: SO, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['eşleşik bağlaç', 'isim cümleciği'],
    q: 'The committee has not yet decided ---- the festival will be moved indoors ---- simply postponed until the weather improves.',
    options: ['whether / or', 'either / or', 'both / and', 'neither / nor', 'rather / than'], answer: 0,
    explain: "'Has not yet decided' fiilinden sonra dolaylı bir soru gelir: kurul festivalin kapalı alana mı taşınacağına, yoksa yalnız ertelenip mi kalacağına henüz karar vermedi. İki seçenek arasında karar bekleyen dolaylı soru 'whether … or' ile kurulur ve 'decide' fiilinin nesnesi olur. 'Either … or' en güçlü çeldiricidir: o da iki seçenek sunar, ama bir dolaylı soru açmaz; 'decided' fiilinin nesnesi olacak bir yan cümle kuramaz. 'Both … and' festivalin hem taşınıp hem ertelenmesini söyler ve iki seçenek arasındaki kararla çelişir; 'neither … nor' iki yolu da kapatır. 'Rather … than' de bu cümlede 'decided' fiilinden sonra bir yan cümle kurmaz." },
  { id: 'd06-g10', course: SO, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['çok sözcüklü edat'],
    q: '---- any reliable census records, historians can only estimate how many people lived in the medieval town at its height.',
    options: ['In the light of', 'In addition to', 'In the absence of', 'In the course of', 'At the expense of'], answer: 2,
    explain: "'Any reliable census records' ve 'can only estimate' güvenilir kayıtların bulunmadığını gösteriyor: güvenilir nüfus sayımı kayıtları olmadığı için tarihçiler kentin nüfusunu ancak tahmin edebilir. Bu 'in the absence of' (… yokluğunda, … olmadığından) ile anlatılır. 'In the light of' (… ışığında) en güçlü çeldiricidir: kayıtları elde var sayar ve tarihçilerin bunlara dayandığını söyler; o zaman 'can only estimate' ile çelişir ve olumlu anlamda 'any' de doğal durmaz. 'In addition to' (… e ek olarak) kayıtların yanında başka bir kaynak bekletir; 'in the course of' (… sırasında) ve 'at the expense of' (… pahasına) kayıtlarla tahmin arasında anlamlı bir bağ kurmaz." },

  // ---------- 17–26: boşluklu metin ----------
  { id: 'd06-z1', course: G, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Kâğıdın ölçüsü',
    text: "Anyone who has folded a sheet of A4 paper in half has seen a small piece of geometry at work. The paper sizes used in most countries belong to a single series in which every sheet has the same proportions: the long side is about 1.41 times the short side, a figure equal to the square root of two. These proportions were not chosen (1) ---- chance. When such a sheet is cut in half across its long side, each half keeps exactly the same shape as the original. (2) ----, a sheet with any other proportions produces halves that are noticeably squatter or narrower than the sheet they came from. The largest size, A0, has an area of one square metre, and each smaller size is made by (3) ---- the one above it in two, so a sheet of A4 is one sixteenth of a square metre. The idea is older than the system itself: a German scientist described the advantages of the ratio in a letter in the 1780s, but a German standards body adopted it only in 1922, and international agreement came decades later. The United States and Canada still mainly use other formats, (4) ---- the familiar 'letter' size. Elsewhere, the benefits are practical: two pages can be reduced to fit side by side on a single sheet without awkward empty margins, and the makers of printers and copiers (5) ---- design their machines for dozens of unrelated shapes.",
    steps: [
      { konu: ['edatlı kalıp'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['in', 'at', 'by', 'on', 'for'], answer: 2,
        explain: "'By chance' (rastlantıyla) yerleşik bir edat öbeğidir; 'not chosen by chance' bu oranların rastlantıyla seçilmediğini söylüyor ve sonraki cümle nedenini veriyor. 'In', 'at' ve 'on' 'chance' ile 'rastlantıyla' anlamını kurmaz. 'For' bir amaç ya da neden bildirir; 'not chosen for chance' anlamsız kalır." },
      { konu: ['bağlantı zarfı'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['By contrast', 'As a result', 'For instance', 'In addition', 'Likewise'], answer: 0,
        explain: "Önceki cümle bu oranlı kâğıdın ikiye bölününce biçimini koruduğunu, boşluktan sonraki cümle ise başka oranlı kâğıdın biçimini koruyamadığını söylüyor. İki zıt durumu karşılaştırmak 'By contrast' (buna karşılık) ile olur. 'Likewise' (aynı biçimde) en güçlü çeldiricidir, ama iki durumu benzer sayar; oysa sonuçları zıttır. 'As a result' (sonuç olarak) başka oranların bozulmasını önceki cümlenin sonucu yapar. 'For instance' (örneğin) ve 'in addition' (ayrıca) da karşıtlığı göstermez." },
      { konu: ['by + -ing'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['cut', 'to cut', 'cutting', 'having cut', 'being cut'], answer: 2,
        explain: "'By' bir edattır; edattan sonra fiil -ing biçiminde gelir ve 'by + -ing' bir işin nasıl yapıldığını anlatır: her küçük ölçü, bir üsttekini ikiye keserek elde edilir. 'Cut' ve 'to cut' edattan sonra gelemez. 'Being cut' edilgendir ve ardından 'the one above it' nesnesini alamaz. 'Having cut' işi önceden bitmiş gösterir; bir yöntemi anlatan bu cümleye uymaz." },
      { konu: ['çok sözcüklü edat'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['instead of', 'such as', 'because of', 'in spite of', 'according to'], answer: 1,
        explain: "Boşluktan sonra gelen 'letter' ölçüsü, ABD ve Kanada'da kullanılan öteki biçimlere bir örnektir; örnek 'such as' (… gibi) ile verilir. 'Instead of' (… yerine) en güçlü çeldiricidir, ama 'letter' ölçüsünü bu ülkelerin kullanmadığı bir biçim yapar; oysa en tanınmış örnekleridir. 'Because of' (… yüzünden), 'in spite of' (… e karşın) ve 'according to' (… e göre) örnek bildirmez." },
      { konu: ['kip (modal)'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['must', 'ought to', 'can', 'would rather', "needn't"], answer: 4,
        explain: "Cümle tek bir ölçü dizisinin pratik yararlarını sayıyor: yazıcı ve fotokopi makinesi üreticilerinin onlarca ilgisiz biçim için tasarım yapmasına gerek kalmaz. Gereksizlik 'needn't' ile anlatılır. 'Must' ve 'ought to' bunu bir zorunluluk ya da öneri yapar; yararlar listesiyle çelişir. 'Can' bunu bir olanak gibi sunar; onlarca biçim için tasarım yapabilmek bir yarar değildir. 'Would rather' de üreticilere bir tercih yükler." },
    ] },

  { id: 'd06-z2', course: SO, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Kendi elimizle yaptığımız',
    text: "Why do people often value things they have made themselves more highly than identical items made by someone else? In a series of studies published in 2012, a team of researchers asked volunteers to assemble plain storage boxes sold in flat packs by a well-known furniture company. Afterwards, those who had built a box were willing to pay noticeably more for it than other participants offered for an identical box that came (1) ---- assembled. The researchers named this the 'IKEA effect'. In a related experiment, people who had folded paper animals valued their own rather clumsy creations almost as highly (2) ---- models made by experts, (3) ---- people who had not taken part saw little worth in the amateurs' work. The effect, however, appeared to depend on finishing the job: when participants built something and then took it apart, or (4) ---- to complete it, the extra value largely vanished. Effort, it seems, makes people fond of a product mainly when it ends in success. The findings have practical (5) ----: a company that leaves part of the work to its customers may make its products more attractive rather than less, as long as the task is not too hard.",
    steps: [
      { konu: ['zarf'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['loosely', 'already', 'rarely', 'yet', 'hardly'], answer: 1,
        explain: "Karşılaştırılan kutu, katılımcının kurmadığı, kurulmuş olarak gelen özdeş kutudur: 'came already assembled' (kurulu olarak geldi). 'Loosely assembled' (gevşek, özensiz kurulmuş) ve 'hardly assembled' (neredeyse hiç kurulmamış) kutuyu özdeş olmaktan çıkarır; karşılaştırma ise kurulu ve sağlam bir kutuyla yapılıyor. 'Yet' olumlu bir cümlede 'assembled' sıfatından önce bu anlamı kurmaz; 'rarely' (seyrek) de tek bir kutunun durumunu anlatamaz." },
      { konu: ['karşılaştırma'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['as', 'than', 'so', 'like', 'that'], answer: 0,
        explain: "'As highly as' eşitlik karşılaştırmasıdır: katılımcılar kendi beceriksiz kâğıt hayvanlarını uzmanlarınkine neredeyse denk değerde buldu; 'almost' da bu eşitliğe yaklaşıldığını söyler. 'Than' üstünlük karşılaştırmasında ('more highly than') kullanılır ve 'as highly' ile kurulmaz. 'So', 'like' ve 'that' 'as … as' kalıbını tamamlamaz." },
      { konu: ['bağlaç'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['so that', 'because', 'unless', 'whereas', 'as if'], answer: 3,
        explain: "Cümle iki grubu karşılaştırıyor: kâğıdı katlayanlar kendi işlerini değerli buldu, katılmayanlar ise aynı işe pek değer vermedi. Karşıtlık 'whereas' (oysa, -iken) ile bağlanır. 'Because' en güçlü çeldiricidir, ama ikinci grubun düşük değerlendirmesini birinci grubun yüksek değerlendirmesinin nedeni yapar; aralarında böyle bir bağ yok. 'So that' (… sın diye) amaç, 'unless' (… medikçe) koşul, 'as if' (sanki) benzetme bildirir." },
      { konu: ['fiil'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['managed', 'hurried', 'chose', 'offered', 'failed'], answer: 4,
        explain: "Cümlenin başı etkinin işin bitirilmesine bağlı olduğunu söylüyor; ardından işin bitmediği iki durum geliyor: kurulan şeyin sökülmesi ve tamamlanamaması. 'Failed to complete' (tamamlayamamak) ikinci durumu anlatır. 'Managed to complete' (tamamlamayı başarmak) ve 'chose to complete' (tamamlamayı seçmek) işin bittiğini söyler; o zaman ek değer kaybolmazdı. 'Hurried to complete' (tamamlamak için acele etmek) ve 'offered to complete' (tamamlamayı önermek) işin bitip bitmediğini söylemez; bitmemiş iş örneği olarak akışa uymaz." },
      { konu: ['isim'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['origins', 'obstacles', 'ingredients', 'implications', 'precautions'], answer: 3,
        explain: "İki noktadan sonra bulguların iş dünyası için ne anlama geldiği anlatılıyor: işin bir bölümünü müşteriye bırakmak ürünü daha çekici kılabilir. Bu, bulguların uygulamadaki sonuçlarıdır: 'practical implications'. 'Obstacles' (engeller) en güçlü çeldiricidir, ama iki noktadan sonra gelen yorum bir engel değil, bir fırsattır. 'Origins' (kökenler), 'ingredients' (bileşenler) ve 'precautions' (önlemler) bulgulardan çıkan bir yorumu anlatmaz." },
    ] },

  // ---------- 27–36: cümle tamamlama ----------
  { id: 'd06-t1', course: SO, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'While most visitors come to the island for its sandy beaches, ----.',
    options: [
      'the sand there is said to be among the finest in the region',
      'a growing number are drawn by its quiet mountain villages',
      'many of them return every summer with their whole families',
      'its hotels are usually fully booked from June to August',
      'the local council spends heavily on keeping them clean',
    ], answer: 1,
    explain: "'While' burada 'oysa, -se de' anlamında bir karşıtlık kurar: ziyaretçilerin çoğu kumsallar için gelir, ama giderek artan bir kesim adanın sakin dağ köylerine ilgi duyar. Öteki seçenekler kumsallarla ya da kumsal ziyaretçileriyle uyumlu bilgiler veriyor: kumun bölgenin en ince kumları arasında sayılması, ziyaretçilerin her yaz ailecek dönmesi, otellerin yazın dolu olması ve belediyenin kumsalları temiz tutmak için harcaması. Hiçbiri 'while' ile beklenen karşıt durumu sunmaz." },
  { id: 'd06-t2', course: G, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['karşıtlık'],
    q: '----, the restaurant has never once been fully booked on a weekday evening.',
    options: [
      'Since it can seat only a dozen diners at any one time',
      'Now that its head chef has won a major national award',
      'As long as it stays open until well after midnight',
      'Despite glowing reviews in several national papers',
      'In order that local families could afford to eat there',
    ], answer: 3,
    explain: "Ana cümle restoranın hafta içi akşamlarında bir kez bile dolmadığını söylüyor; 'never once' bunun beklenmedik olduğunu vurguluyor. Ulusal gazetelerdeki övgü dolu eleştiriler doluluk beklentisi yaratır; 'despite' ile bağlanınca karşıtlık doğar. Yalnız on iki kişilik yer, restoranı doldurmayı kolaylaştırır; 'since' onu dolmamanın nedeni yapamaz. Şefin büyük bir ödül alması da doluluğu artırması beklenen bir durumdur; 'now that' onu dolmamanın nedeni yapar ve mantık ters döner. Gece yarısına kadar açık kalma koşulu ve yerel ailelerin karşılayabilmesi amacı da 'hiç dolmadı' sonucuna bağlanmaz." },
  { id: 'd06-t3', course: SO, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Even though it was written nearly two centuries ago, ----.',
    options: [
      'the author first published it under a different name',
      'it was translated into several languages within a decade',
      'its language can be hard for younger readers to follow',
      'few copies of the first edition have survived to this day',
      'the novel still feels remarkably fresh to many of its readers',
    ], answer: 4,
    explain: "'Even though' (… e karşın) bir karşıtlık bekler: roman iki yüzyıl önce yazıldığı hâlde pek çok okuruna şaşırtıcı ölçüde taze geliyor; 'still' de bu beklenmedik durumu vurgular. Dilinin genç okurlarca zor izlenmesi ve ilk baskıdan az kopya kalması, eski bir kitaptan beklenen durumlardır; karşıtlık kurmaz. Yazarın kitabı başka bir adla yayımlaması ve on yıl içinde birkaç dile çevrilmesi de kitabın yaşıyla çelişen bilgiler değildir." },
  { id: 'd06-t4', course: F, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although bamboo is botanically a type of grass, ----.',
    options: [
      'it grows best in places with warm and wet climates',
      'its stems are hollow and divided into sections',
      'some species can grow taller than many trees',
      'it belongs to the same family as wheat and rice',
      'large amounts of it are eaten by giant pandas',
    ], answer: 2,
    explain: "'Although' bir karşıtlık bekler: bambu botanik açıdan bir ot türüdür, ama bazı türleri birçok ağaçtan uzun olabilir; 'ot' sözcüğünün çağrıştırdığı kısa boyla bu uzunluk çelişir. Buğday ve pirinçle aynı aileden olması bambunun ot olduğunu doğrular; karşıtlık değil, destek bildirir. Gövdesinin içi boş ve boğumlu olması, sıcak ve nemli yerlerde iyi yetişmesi ve dev pandaların onu bolca yemesi de ot olmasıyla çelişmeyen ek bilgilerdir." },
  { id: 'd06-t5', course: S, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['karşıtlık'],
    q: '----, the clinic is already struggling to cope with the number of patients registering there.',
    options: [
      'Since it serves one of the least populated districts',
      'Although it opened its doors only six months ago',
      'Once a second clinic opens nearby early next year',
      'So that patients would not have to travel so far',
      'Unless more doctors are recruited in the coming weeks',
    ], answer: 1,
    explain: "Ana cümledeki 'already' (şimdiden) kliniğin erken bir dönemde zorlandığını düşündürüyor; açılalı yalnız altı ay olması, 'although' ile bağlanınca bu karşıtlığı kurar. En az nüfuslu ilçelerden birine hizmet vermek hasta yoğunluğunun nedeni olamaz; 'since' ile mantık ters döner. Gelecek yıl açılacak ikinci klinik ve önümüzdeki haftalarda alınacak hekimler geleceğe bakar; 'is already struggling' ile anlatılan bugünkü durumu açıklamaz. 'So that' ile kurulan amaç da kliniğin zorlanmasını açıklamaz." },
  { id: 'd06-t6', course: G, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['neden-sonuç'],
    q: '----, the ferry service between the two islands was suspended for three days.',
    options: [
      'As storms had made the crossing far too dangerous',
      'Even though the crossing had become far too rough',
      'So that more passengers could travel at the weekend',
      'Unless the weather improves before the holiday begins',
      'Now that a new bridge links the two islands directly',
    ], answer: 0,
    explain: "Ana cümle feribot seferlerinin üç gün durdurulduğunu söylüyor; bunun nedeni fırtınaların geçişi çok tehlikeli kılmasıdır ve 'as' (… dığı için) nedeni bağlar. Denizin çok dalgalı olmasını 'even though' ile bağlayan seçenek en güçlü çeldiricidir: dalgalı deniz seferin durmasının nedenidir, ona karşın durmasının değil. Hafta sonu daha çok yolcu taşıma amacı seferi durdurmayla çelişir. 'Unless … improves' geleceğe bakar ve geçmişteki olaya uymaz. Yeni bir köprü de seferleri yalnız üç gün değil, kalıcı olarak gereksiz kılardı." },
  { id: 'd06-t7', course: SO, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['neden-sonuç'],
    q: 'Many young people have been leaving the countryside for jobs in the cities, ----.',
    options: [
      'although wages in the cities are generally much higher',
      'unless rural schools receive considerably more funding',
      'because village life has become far too crowded for them',
      'so that the price of farmland would continue to rise',
      'leaving some villages with hardly any residents under sixty',
    ], answer: 4,
    explain: "Gençlerin kentlere göçünün doğal sonucu, bazı köylerde altmış yaşın altında neredeyse kimsenin kalmamasıdır; '-ing' ile başlayan 'leaving …' öbeği ana cümlenin sonucunu verir. Kentlerde ücretlerin yüksek olması göçün nedenidir; 'although' ile karşıtlık gibi bağlanınca mantık ters döner. Köy hayatının fazla kalabalık olması kırdan göçün nedeni olamaz. 'Unless' ile kurulan koşul 'have been leaving' ile anlatılan, süregelen bir duruma uymaz; tarla fiyatlarının artması da gençlerin göç amacı değildir." },
  { id: 'd06-t8', course: G, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['koşul', 'unless'],
    q: 'Unless the council finds extra funding by the end of March, ----.',
    options: [
      "it will be able to keep the town's pool open for longer",
      'the swimming pool would have stayed open all year round',
      'the only public pool in the town will have to close',
      'the pool had already been closed for urgent repairs',
      'many residents protested against closing the pool',
    ], answer: 2,
    explain: "'Unless' (… mezse) gerçekleşebilir bir koşul kurar ve ana cümle geleceğe bakar: belediye mart sonuna kadar ek kaynak bulamazsa kentin tek havuzu kapanmak zorunda kalacak. Havuzu daha uzun süre açık tutabileceğini söyleyen seçenek yapıca uyar ama mantığı ters çevirir: kaynak bulunmazsa havuz açık kalamaz. 'Would have stayed' gerçekleşmemiş bir geçmişi, 'had already been closed' ve 'protested' de geçmişte olmuş bir şeyi anlatır; mart sonuna bağlanan bu gelecek koşuluna uymaz." },
  { id: 'd06-t9', course: SO, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['zaman'],
    q: 'The moment the doors of the new library opened, ----.',
    options: [
      'dozens of people who had queued outside hurried in',
      'the builders had not yet started work on its roof',
      'the council will announce its regular opening hours',
      'it had been closed to the public for several years',
      'hardly anyone in the town knew it was being built',
    ], answer: 0,
    explain: "'The moment' (… dığı anda, … ır … maz) iki olayı aynı ana bağlar: yeni kütüphanenin kapıları açılır açılmaz dışarıda sıra bekleyen onlarca kişi içeri koştu. Çatı işine henüz başlanmamış olması ve kütüphanenin yıllardır halka kapalı olması, ilk kez açılan yeni bir binayla çelişir. 'Will announce' geçmişteki bu ana gelecek zamanla bakar. Kasabada neredeyse kimsenin binanın yapıldığını bilmemesi de açılış anında olan bir olay değil, öncesine ait bir durumdur." },
  { id: 'd06-t10', course: G, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['amaç'],
    q: 'Several cities have painted their cycle lanes in bright colours ----.',
    options: [
      'even though few drivers ever notice them',
      'whereas pedestrians prefer quieter side streets',
      'until the paint begins to fade in the summer sun',
      'unless cyclists choose to ride on the pavement',
      'so that drivers can spot them more easily',
    ], answer: 4,
    explain: "Bisiklet yollarını parlak renge boyamanın amacı sürücülerin onları daha kolay fark etmesidir; amaç 'so that' (… sın diye) ile bağlanır. Sürücülerin onları neredeyse hiç fark etmemesini 'even though' ile bağlayan seçenek en güçlü çeldiricidir: uygulamanın amacını vermez, onu bir karşıtlığa çevirir. Yayaların sakin sokakları yeğlemesi, boyanın solmasına kadar süren bir zaman ve bisikletlilerin kaldırımdan gitmesi koşulu da boyamanın amacını açıklamaz." },

  // ---------- 37–39: çeviri, İngilizceden Türkçeye ----------
  { id: 'd06-c1', course: SO, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'The letters that the poet wrote to her sister during the war were not published until long after both women had died.',
    options: [
      'Şairin savaş sırasında kız kardeşine yazdığı mektuplar, ancak kız kardeşinin ölümünden çok sonra yayımlandı.',
      'Şairin savaş sırasında kız kardeşinden aldığı mektuplar, ancak iki kadının da ölümünden çok sonra yayımlandı.',
      'Şairin savaş sırasında kız kardeşine yazdığı mektuplar, iki kadın da henüz hayattayken yayımlanmıştı.',
      'Şairin savaş sırasında kız kardeşine yazdığı mektuplar, ancak iki kadının da ölümünden çok sonra yayımlandı.',
      'Şairin savaş sırasında kız kardeşine yazdığı mektupların, iki kadının ölümünden sonra yayımlanması bekleniyor.',
    ], answer: 3,
    explain: "'That the poet wrote to her sister' mektupları niteleyen bir sıfat cümleciğidir: şairin kız kardeşine yazdığı mektuplar. 'Were not published until long after both women had died' de 'ancak iki kadının da ölümünden çok sonra yayımlandı' demektir. Yalnız kız kardeşin ölümünü anan çeviri 'both women' sözünün kapsamını daraltıyor. 'Kız kardeşinden aldığı' mektupların yönünü tersine çeviriyor. 'Hayattayken yayımlanmıştı' zamanı tersine çeviriyor. 'Yayımlanması bekleniyor' ise olmuş bir yayımı geleceğe atıyor." },
  { id: 'd06-c2', course: SO, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['isim cümleciği'],
    q: 'How much the population of the ancient city declined after the earthquake remains a matter of debate among historians.',
    options: [
      'Antik kentin nüfusunun depremden sonra azalıp azalmadığı, tarihçiler arasında hâlâ tartışma konusudur.',
      'Antik kentin nüfusunun depremden sonra ne kadar azaldığı, tarihçiler arasında hâlâ tartışma konusudur.',
      'Antik kentin nüfusunun depremden sonra ne kadar azaldığı, tarihçiler arasında uzun bir süre boyunca tartışılmıştı.',
      'Tarihçilere göre antik kentin nüfusu depremden sonra beklenenden çok daha az azaldı.',
      'Antik kentin nüfusunun depremden sonra ne kadar azaldığını tarihçiler kesin olarak ortaya koydu.',
    ], answer: 1,
    explain: "'How much the population … declined' bir isim cümleciğidir ve cümlenin öznesidir: 'nüfusun ne kadar azaldığı'. 'Remains a matter of debate' de tartışmanın sürdüğünü söyler: 'hâlâ tartışma konusudur'. 'Azalıp azalmadığı' sorunun kapsamını değiştiriyor: kaynak cümlede azalmanın kendisi değil, yalnız miktarı tartışılıyor. 'Uzun bir süre boyunca tartışılmıştı' tartışmayı geçmişte bitmiş gösteriyor. 'Kesin olarak ortaya koydu' süren tartışmayı kesinleşmiş bir bulguya çeviriyor. 'Beklenenden çok daha az azaldı' ise kaynak cümlede olmayan bir hüküm kuruyor." },
  { id: 'd06-c3', course: G, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['ortaç öbeği'],
    q: 'Having been abandoned for nearly a century, the railway station was restored by volunteers and reopened as a museum.',
    options: [
      'Yaklaşık bir yüzyıl boyunca terk edilmiş olan tren istasyonu, gönüllülerce onarılıp müze olarak yeniden açıldı.',
      'Gönüllüler, yaklaşık bir yüzyıldır terk edilmiş olan tren istasyonunu onarıp müze olarak açmayı planlıyor.',
      'Yaklaşık bir yüzyıl boyunca terk edilmiş olan tren istasyonunun bir bölümü gönüllülerce onarılıp müze yapıldı.',
      'Yaklaşık bir yüzyıl önce terk edilen tren istasyonu, gönüllülerce onarıldıktan sonra yeniden istasyon olarak açıldı.',
      'Yaklaşık bir yüzyıl boyunca müze olarak kullanılan tren istasyonu, gönüllülerce onarılıp yeniden açıldı.',
    ], answer: 0,
    explain: "'Having been abandoned for nearly a century' edilgen ve geçmişte tamamlanmış bir ortaç öbeğidir: istasyon yaklaşık bir yüzyıl boyunca terk edilmiş durumdaydı. Ana cümle iki iş söylüyor: istasyon gönüllülerce onarıldı ve müze olarak yeniden açıldı. 'Açmayı planlıyor' olmuş bir işi geleceğe atıyor. 'Bir bölümü' onarımın kapsamını daraltıyor. 'Yeniden istasyon olarak açıldı' müzeyi istasyona çeviriyor. 'Bir yüzyıl boyunca müze olarak kullanılan' ise terk edilmiş olmayı müze olmaya çevirip olayların sırasını bozuyor." },

  // ---------- 40–42: çeviri, Türkçeden İngilizceye ----------
  { id: 'd06-c4', course: G, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Yağmur başlar başlamaz seyirciler stadyumdan çıkmaya başladı.',
    options: [
      'Before the rain started, the spectators had begun to leave the stadium.',
      'As soon as the rain started, some of the spectators began to leave the stadium.',
      'As soon as the rain stops, the spectators will begin to leave the stadium.',
      'As soon as the rain started, the spectators had to leave the stadium.',
      'As soon as the rain started, the spectators began to leave the stadium.',
    ], answer: 4,
    explain: "'-ar -maz' iki olayı hemen ardı ardına bağlar; İngilizcede 'as soon as' ile kurulur ve olay geçmişte olduğu için iki fiil de past simple olur: 'started … began'. 'Before … had begun' seyircilerin yağmurdan önce çıkmaya başladığını söylüyor. 'Some of the spectators' kapsamı daraltıyor: Türkçe cümle seyircilerin bir kısmını ayırmıyor. 'Had to leave' bir zorunluluk ekliyor; Türkçede 'çıkmak zorunda kaldı' denmiyor. 'The rain stops … will begin' hem olayı hem zamanı değiştiriyor." },
  { id: 'd06-c5', course: SO, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['sıfat cümleciği'],
    q: 'Kentin en eski mahallesinde yaşayanların çoğu, ailelerinin orada en az üç kuşaktır oturduğunu söylüyor.',
    options: [
      "All of the people who live in the city's oldest neighbourhood say that their families have lived there for at least three generations.",
      "Most of the people who live in the city's oldest neighbourhood say that their families have lived there for at least three generations.",
      "Most of the people who used to live in the city's oldest neighbourhood say that their families had lived there for three generations.",
      "Most of the people who live in the city's oldest neighbourhood say that their families may have lived there for at least three generations.",
      "Most of the people who live in the city's oldest neighbourhood say that their families lived there for three generations before moving.",
    ], answer: 1,
    explain: "'Kentin en eski mahallesinde yaşayanlar' bir sıfat cümleciğiyle verilir: 'the people who live in the city's oldest neighbourhood'. 'En az üç kuşaktır oturduğu' geçmişte başlayıp süren bir durumdur ve present perfect ile kurulur: 'have lived there for at least three generations'. 'All of' çoğunluğu herkese genişletiyor. 'Used to live … had lived' bugün orada yaşayanları eskiden yaşamış olanlara çeviriyor. 'May have lived' kişilerin söylediği bir bilgiyi olasılığa çeviriyor. 'Lived there … before moving' ise ailelerin oradan taşındığını ekliyor; Türkçe cümlede böyle bir bilgi yok." },
  { id: 'd06-c6', course: F, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['edilgen kanaat', 'ortaç öbeği'],
    q: 'Köprünün yapımında kullanılan çeliğin büyük kısmının yurt dışından getirildiği bildiriliyor.',
    options: [
      'Most of the steel used in building the bridge is reported to have been bought from local suppliers.',
      'Some of the steel used in building the bridge is reported to have been brought from abroad.',
      'Most of the steel used in building the bridge is reported to have been brought from abroad.',
      'Most of the steel used in building the bridge is expected to be brought in from abroad.',
      'Most of the steel used in building the bridge reportedly had to be brought all the way from abroad.',
    ], answer: 2,
    explain: "'Getirildiği bildiriliyor' bir haber edilgenidir: 'is reported to …'. Getirme işi haberden önce tamamlandığı için mastar geçmiş biçimde olur: 'to have been brought'. 'Kullanılan çelik' de edilgen bir ortaçla verilir: 'the steel used in building the bridge'. 'Bought from local suppliers' yurt dışından getirilen çeliği yerli tedarikçilerden alınmış gösteriyor; kaynağı tersine çeviriyor. 'Some of' büyük kısmı bir kısma indiriyor. 'Is expected to be brought' olmuş bir işi beklentiye çeviriyor. 'Had to be brought' Türkçede olmayan bir zorunluluk ekliyor." },

  // ---------- 43–62: okuma parçaları ----------
  { id: 'd06-o1', course: SO, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Kalabalığın tahmini',
    text: "In the autumn of 1906, the scientist Francis Galton visited a livestock show in Plymouth, in the south-west of England, where visitors could buy a ticket and guess how much a particular ox would weigh once it had been slaughtered and prepared for sale. About eight hundred people took part. Some were butchers and farmers, but many had no special knowledge of cattle at all. Galton, who held a rather low opinion of the judgement of ordinary people, collected the tickets afterwards, apparently expecting the crowd to have done badly. Instead, he found that the middle value of all the guesses differed from the true weight by less than one per cent, which was closer than most of the individual entries. He described the result in a short article in the journal Nature the following year. Galton's ox is now a standard example of what has come to be called the 'wisdom of crowds'. The basic idea is that when many people make independent estimates, their individual errors, some too high and some too low, tend to cancel each other out. The word 'independent', however, is essential. Later research suggests that when members of a group can see one another's guesses before making their own, their answers tend to drift together, and the group as a whole may grow more confident without becoming more accurate. A crowd, in other words, is wise only under certain conditions; one in which everyone follows everyone else may simply repeat the same mistake many times over.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the people who entered the competition at the show ----.',
        options: [
          'were mostly butchers and farmers whom Galton had invited',
          'included a good many people with no expertise in cattle',
          'were allowed to look at the guesses made before their own',
          'paid nothing to enter, which encouraged large numbers',
          'had to guess its live weight rather than its slaughtered weight',
        ], answer: 1,
        explain: "Parçaya göre yarışmaya katılanların bir kısmı kasap ve çiftçiydi, ama birçoğunun sığır konusunda özel bir bilgisi yoktu. Doğru seçenek bunu 'sığır konusunda hiç uzmanlığı olmayan epeyce kişi' diye veriyor. Katılanların çoğunun Galton'ın çağırdığı kasap ve çiftçiler olduğunu söyleyen seçenek kısmen doğru bir bilgiyi çarpıtıyor: parça kasaplardan söz ediyor, ama ne çoğunluktan ne çağrıdan. Bilet satın alındığı için 'hiç ödemediler' parçanın tersidir. Tahmin hayvanın canlı ağırlığı için değil, kesilip satışa hazırlandıktan sonraki ağırlığı için yapıldı; canlı ağırlığı soran seçenek bu yüzden parçanın tersidir. Başkalarının tahminlerini görmeye dair bir bilgi de parçada yok." },
      { konu: ['ayrıntı'],
        q: 'It is stated in the passage that the middle value of all the guesses ----.',
        options: [
          'was further from the truth than most of the single guesses',
          'was worked out by the organisers of the show on the same day',
          'was too high because most people overestimated the weight',
          'matched exactly the guess made by one of the local butchers',
          'missed the true weight of the ox by a tiny margin',
        ], answer: 4,
        explain: "Parçaya göre bütün tahminlerin ortanca değeri gerçek ağırlıktan yüzde birden az sapıyordu. Doğru seçenek bunu 'öküzün gerçek ağırlığını çok küçük bir farkla kaçırdı' diye veriyor. Tek tek tahminlerin çoğundan uzak olduğunu söyleyen seçenek parçanın tersidir: ortanca değer çoğu tahminden daha yakındı. Hesabı sergiyi düzenleyenler değil, biletleri sonradan toplayan Galton yaptı. Tahminlerin çoğunun yüksek olduğu ya da ortanca değerin bir kasabın tahminine birebir denk geldiği parçada geçmiyor." },
      { konu: ['çıkarım'],
        q: "It can be inferred from the passage that a group's combined estimate is most likely to be accurate when ----.",
        options: [
          'most of its members share the same background and training',
          'its members discuss the problem until they all agree',
          'each member decides without seeing what others think',
          'it includes at least a few recognised experts in the field',
          'its members feel highly confident about their own answers',
        ], answer: 2,
        explain: "Parçanın ikinci yarısı 'independent' (bağımsız) sözünün önemini vurguluyor: insanlar birbirinin tahminini görünce cevaplar birbirine yaklaşıyor ve grup daha isabetli olmadan daha emin hâle gelebiliyor. Buradan grup tahmininin en çok, herkes başkalarının ne düşündüğünü görmeden karar verdiğinde isabetli olacağı çıkar. Üyelerin sorunu tartışıp uzlaşması bu bağımsızlığı ortadan kaldırır. Kendinden emin olmak parçaya göre isabeti artırmıyor. Uzmanların varlığı ve üyelerin aynı geçmişten gelmesi ise parçada isabetin koşulu olarak anılmıyor." },
      { konu: ['yazarın amacı'],
        q: "The author's main purpose in the passage is to ----.",
        options: [
          'criticise Galton for underestimating the judgement of ordinary people',
          'argue that experts should not be consulted on practical questions',
          'describe how livestock shows were organised in the early 1900s',
          'use a historical case to show when group judgements can be trusted',
          'prove that a larger crowd always produces a more accurate estimate',
        ], answer: 3,
        explain: "Yazar önce Galton'ın 1906'daki gözlemini anlatıyor, sonra bu örnekten genel bir ilke çıkarıp sınırlarını gösteriyor: kalabalık yalnız belli koşullarda, kişiler birbirinden bağımsız tahmin yaptığında isabetlidir. Amaç, tarihsel bir örnekle grup yargısına ne zaman güvenilebileceğini göstermektir. Galton'ın sıradan insanların yargısına güvenmemesi yalnız sonucun neden şaşırtıcı olduğunu anlatmak için anılıyor; yazar onu eleştirmiyor. Uzmanlara danışılmaması gerektiği ve sergilerin düzeni parçanın konusu değil. Kalabalık büyüdükçe tahminin hep daha isabetli olduğu ise parçanın son cümlesiyle çelişir." },
    ] },

  { id: 'd06-o2', course: SO, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', title: 'Bir penilik mektup',
    text: "Until 1840, sending a letter in Britain was a complicated and often costly business. The charge depended on how far the letter travelled and how many sheets it contained, and it was usually paid not by the sender but by the person who received it. Clerks had to work out the fee for each letter separately, and many people, especially poorer ones, simply refused letters they could not afford. In 1837, Rowland Hill, a former schoolmaster with a keen interest in reform, published a pamphlet arguing that the system should be turned upside down. Most of the cost of the post, he claimed, lay not in carrying letters from one town to another but in handling them and keeping accounts. He therefore proposed a single low rate for any letter sent within the country, whatever the distance, paid in advance by the sender, who could prove payment with a small printed label stuck to the envelope. Many senior officials in the Post Office opposed the plan, fearing that lower charges would ruin its finances, but Parliament approved the reform, and a uniform penny rate came into force in January 1840. In May of that year, the first adhesive postage stamp, later known as the Penny Black, went on sale. The number of letters sent roughly doubled within a year, although the Post Office's income took far longer to recover. The Penny Black itself was soon replaced, partly because the red ink used to cancel it was hard to see on a black background. Within a few decades, however, prepaid stamps had been adopted by countries around the world.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, before 1840, the cost of sending a letter in Britain ----.',
        options: [
          'was usually borne by the addressee, not the sender',
          'was the same however far the letter had to travel',
          'was paid in advance by means of a printed label',
          'was set by Parliament at one penny for every sheet',
          'was reduced for poorer people who could not afford it',
        ], answer: 0,
        explain: "Parçaya göre 1840'tan önce ücret mektubun gittiği uzaklığa ve sayfa sayısına göre değişiyordu ve çoğunlukla gönderen değil, mektubu alan kişi ödüyordu. Doğru seçenek bunu 'gönderen değil alıcı karşılıyordu' diye veriyor. Uzaklıktan bağımsız tek ücret ve önceden ödemeyi gösteren etiket Hill'in reformuyla gelen yeniliklerdir; reformdan önceki dönemi anlatmaz. Parlamentonun sayfa başına bir peni koyması ve yoksullara indirim yapılması parçada geçmiyor; parça tersine yoksulların ödeyemedikleri mektupları geri çevirdiğini söylüyor." },
      { konu: ['ayrıntı'],
        q: 'It is stated in the passage that Rowland Hill believed ----.',
        options: [
          'the Post Office should charge more for longer journeys',
          'senders would be unwilling to pay for their letters in advance',
          'printed labels would prove too expensive to produce in bulk',
          'carrying the mail was only a small part of the total cost',
          'the postal service ought to be run by private companies',
        ], answer: 3,
        explain: "Parçaya göre Hill postanın giderinin çoğunun mektupları kentten kente taşımaktan değil, onları işlemekten ve hesabını tutmaktan doğduğunu ileri sürdü. Doğru seçenek bunu 'postayı taşımak toplam giderin yalnız küçük bir bölümüydü' diye veriyor. Uzun yollar için daha çok ücret istemek Hill'in uzaklıktan bağımsız tek ücret önerisiyle çelişir. Gönderenlerin önceden ödemek istemeyeceği ve etiketlerin pahalıya mal olacağı kaygısı parçada kimseye yüklenmiyor; görevlilerin korkusu postanın gelirinin çökmesiydi. Özel şirketlerden de söz edilmiyor." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that the reform ----.',
        options: [
          'brought the Post Office no immediate financial gain',
          'was rejected by Parliament when it was first proposed',
          'was welcomed by most of the officials in the Post Office',
          'reduced the number of letters sent within the country',
          'had already been tried out in several other countries',
        ], answer: 0,
        explain: "Parçaya göre mektup sayısı bir yıl içinde kabaca iki katına çıktı, ama Posta İdaresi'nin geliri toparlanmak için çok daha uzun süre bekledi. Buradan reformun idareye hemen parasal kazanç getirmediği çıkar. Mektup sayısının azaldığını söyleyen seçenek parçanın tersidir. Parlamento planı onayladı; üst görevlilerin çoğu ise ona karşı çıktı. Öteki ülkeler önceden ödenen pulu reformdan sonraki on yıllarda benimsedi; daha önce denendiğine dair bir bilgi yok." },
      { konu: ['başlık'],
        q: 'Which of the following could be the best title for the passage?',
        options: [
          'A Black Stamp and Its Many Imitators Around the World',
          'How the Post Office Grew Rich in the Nineteenth Century',
          'The Long Struggle to Reduce the Cost of Paper and Ink',
          'Why Poorer Families Stopped Writing Letters After 1840',
          'Paid by the Sender: How Britain Reformed Its Postal Charges',
        ], answer: 4,
        explain: "Parça 1840 öncesindeki karmaşık ve pahalı düzeni, Hill'in önerisini ve uzaklıktan bağımsız, gönderenin önceden ödediği tek ücretli posta düzenine geçişi anlatıyor. 'Gönderen öder: Britanya'nın posta ücretlerindeki reform' bu bütünü kapsar. Penny Black ve öteki ülkeler yalnız parçanın sonunda geçiyor; başlık olamayacak kadar dardır. Posta İdaresi'nin zenginleştiği parçanın tersidir: geliri uzun süre toparlanamadı. Kâğıt ve mürekkep maliyeti ile yoksul ailelerin mektup yazmayı bırakması ise parçada yok." },
    ] },

  { id: 'd06-o3', course: F, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'On yedi yıl toprak altında',
    text: "In parts of eastern North America, the ground beneath certain forests hides an extraordinary number of insects. Periodical cicadas spend almost their entire lives underground as nymphs, feeding on fluid drawn from tree roots. Then, after 13 or 17 years depending on the species, vast numbers of them dig their way to the surface within a few weeks of one another, climb the nearest tree trunk and shed their skins for the last time. The adults live for only a few weeks, during which the males fill the air with loud calls, the females lay eggs in slender twigs, and the cycle begins again. Emerging all at once appears to be a survival strategy. Birds, squirrels and other predators feast on the cicadas, but there are simply too many of them to be eaten, so large numbers survive to reproduce. Biologists call this 'predator satiation'. A cicada that came out in the wrong year, by contrast, would face its enemies alone. Why the cycles are so long, and why they last 13 or 17 years rather than, say, 12 or 16, is less clear. One proposal points out that both are prime numbers, divisible only by themselves and one, so a predator whose population rose and fell every few years would seldom peak at the same time as the cicadas. The idea is attractive, but it has proved difficult to test. How the nymphs keep count is also uncertain, although experiments suggest that they may track the yearly changes in the fluid of their host trees rather than relying on an internal clock alone.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'It is stated in the passage that adult periodical cicadas ----.',
        options: [
          'feed mainly on fluid that they draw from tree roots',
          'come out at different times so as to avoid birds',
          'lay their eggs in the soil at the foot of trees',
          'survive above ground for a fairly brief period',
          'can remain active for up to seventeen years',
        ], answer: 3,
        explain: "Parçaya göre yetişkin ağustosböcekleri yalnız birkaç hafta yaşar. Doğru seçenek bunu 'yer üstünde oldukça kısa bir süre yaşarlar' diye veriyor. Ağaç köklerinden sıvı emmek, toprak altında yaşayan genç evreye (nimf) özgüdür; en güçlü çeldirici iki evreyi karıştırıyor. Ağustosböcekleri kuşlardan kaçmak için farklı zamanlarda değil, hep birlikte çıkar. Yumurtalar toprağa değil ince dallara bırakılır. On üç ya da on yedi yıl yetişkinlerin değil, toprak altındaki evrenin süresidir." },
      { konu: ['ayrıntı'],
        q: "According to the passage, the term 'predator satiation' refers to ----.",
        options: [
          'the point at which predators cannot eat all of the prey',
          'the habit of predators of avoiding insects with loud calls',
          'a cycle in which predator numbers peak every few years',
          'the way young cicadas hide from birds under the ground',
          'the decline in predator numbers after a mass emergence',
        ], answer: 0,
        explain: "Parçaya göre kuşlar, sincaplar ve öteki avcılar ağustosböceklerini bolca yer, ama böcekler yenip bitirilemeyecek kadar çoktur; bu yüzden birçoğu üreyecek kadar yaşar. Biyologlar buna 'predator satiation' (avcı doygunluğu) diyor. Doğru seçenek bunu 'avcıların avın hepsini yiyemediği nokta' diye veriyor. Avcı sayısının birkaç yılda bir zirveye çıkması asal sayı varsayımında geçen ayrı bir düşüncedir. Gürültülü böceklerden kaçınma, toprak altında saklanma ve avcı sayısının düşmesi parçada bu terimle anlatılmıyor." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that a periodical cicada emerging a year earlier than the rest of its population ----.',
        options: [
          'would be ignored by predators because it was so easy to overlook',
          'would live considerably longer than the cicadas that came out on time',
          'would be less likely than the others to live long enough to breed',
          'would stay above ground until the rest of its population appeared',
          'would be unable to climb the trunks of the trees around it',
        ], answer: 2,
        explain: "Parçaya göre hep birlikte çıkmak bir hayatta kalma yoludur; yanlış yılda çıkan bir ağustosböceği düşmanlarıyla tek başına karşılaşır. Buradan bir yıl erken çıkan böceğin üreyecek kadar yaşama olasılığının ötekilerden düşük olduğu çıkar. Avcıların onu gözden kaçırması ve daha uzun yaşaması parçanın mantığıyla çelişir: korumayı sağlayan, kalabalığın içinde olmaktır. Yetişkinler yalnız birkaç hafta yaşadığı için bir yıl bekleyemez. Ağaca tırmanamaması ise parçada geçmiyor." },
      { konu: ['yazarın tutumu'],
        q: 'The author\'s attitude towards the idea that the cycles last 13 or 17 years because these are prime numbers can best be described as ----.',
        options: [
          'dismissive, as the author regards it as a mere coincidence',
          'enthusiastic, since experiments have firmly confirmed it',
          'sceptical, since it seems to ignore how predators behave',
          'indifferent, as the length of the cycles is unimportant',
          'open but guarded, as it still lacks solid evidence',
        ], answer: 4,
        explain: "Yazar asal sayı açıklamasını 'attractive' (çekici) buluyor, ama sınanmasının güç olduğunu ekliyor. Bu, fikre ilgi duyan ama onu kanıtlanmış saymayan, açık ama temkinli bir tutumdur. Deneylerle doğrulandığını söyleyen seçenek parçanın tersidir; deneylerden yalnız nimflerin yılları nasıl saydığı konusunda söz ediliyor. Yazar fikri bir rastlantı diye küçümsemiyor, avcıların davranışını yok saydığını da söylemiyor. Döngülerin uzunluğunun önemsiz olduğu da parçada yok; yazar tersine bunu açıklanmayı bekleyen bir soru olarak sunuyor." },
    ] },

  { id: 'd06-o4', course: S, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', title: 'Tuz, şeker ve su',
    text: "Cholera and many other infections of the gut kill mainly through dehydration. A patient can lose large amounts of water and salts within hours, and if these are not replaced, the circulation may fail. For much of the twentieth century, the standard treatment for severe cases was to give fluids directly into a vein. This worked well in hospitals, but it required sterile equipment and trained staff, both of which were scarce in the places where such diseases struck hardest. During the 1960s, researchers working in South Asia found a way round the problem. Simply drinking salty water did little good, because the gut of a cholera patient absorbs it poorly. Studies had shown, however, that the intestine takes up sodium far more readily when glucose is present, and that water follows the sodium. A carefully balanced drink of water, salt and sugar could therefore replace much of what the body was losing, even while the illness ran its course. The method faced an early and dramatic test in 1971, when war drove millions of refugees from what is now Bangladesh into camps in India and cholera broke out among them. With intravenous supplies running short, one medical team gave the drink to thousands of patients, relying largely on relatives to prepare it and help the sick to swallow it, and reported far fewer deaths than were usual in such conditions. Oral rehydration has since been promoted worldwide and is widely credited with saving millions of lives, particularly among young children. It does not cure the infection or stop the diarrhoea; it buys the body time to recover.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, giving fluids directly into a vein was difficult in many of the worst-affected areas because ----.',
        options: [
          'patients there could not absorb fluids given in this way',
          'it relied on equipment and skills that were in short supply',
          'it worked far less well than drinking ordinary salty water',
          'it had not yet been tested on patients with cholera',
          'local hospitals refused to admit patients with infections',
        ], answer: 1,
        explain: "Parçaya göre damar yoluyla sıvı vermek hastanelerde iyi sonuç veriyordu, ama steril malzeme ve eğitimli personel istiyordu; hastalığın en ağır vurduğu yerlerde ikisi de kıttı. Doğru seçenek bunu 'eksik olan malzeme ve beceriye dayanıyordu' diye veriyor. Hastaların sıvıyı ememesi bağırsağın tuzlu suyu iyi emmemesiyle ilgili bir bilgiydi; damar yoluna aktarılamaz. Tuzlu suyun damar yolundan daha etkili olduğu parçanın tersidir. Kolera hastalarında denenmemiş olması ve hastanelerin hasta kabul etmemesi parçada geçmiyor." },
      { konu: ['ayrıntı'],
        q: 'It is stated in the passage that the glucose in the drink ----.',
        options: [
          'gives patients the energy they need to fight the infection',
          'destroys the bacteria responsible for the diarrhoea',
          'helps the gut to absorb salt and, along with it, water',
          'makes the drink pleasant enough for children to accept',
          'reduces the amount of salt that the body loses each day',
        ], answer: 2,
        explain: "Parçaya göre bağırsak glikoz varken sodyumu çok daha kolay alır ve su da sodyumun peşinden gider. Doğru seçenek bunu 'bağırsağın tuzu ve onunla birlikte suyu emmesine yardım eder' diye veriyor. Glikozun hastaya enfeksiyonla savaşacak enerji vermesi akla yatkın görünür, ama parçada geçmiyor; en güçlü çeldirici budur. Bakterileri öldürmesi parçanın son cümlesiyle çelişir: içecek enfeksiyonu iyileştirmez. İçeceğin tadı ve vücudun kaybettiği tuzun azalması da parçada yok." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that during the 1971 outbreak ----.',
        options: [
          'the drink was given only to patients who had no access to hospitals',
          'trained staff had to prepare every dose of the drink themselves',
          'cholera spread mainly among the youngest children in the camps',
          'people with no medical training could help to treat the sick',
          'the drink was already in use all over the world for decades',
        ], answer: 3,
        explain: "Parçaya göre 1971'de bir ekip içeceği binlerce hastaya verdi; içeceği hazırlayıp hastalara içirmek için büyük ölçüde yakınlarına dayandı ve ölümler bu koşullarda alışılmış olandan çok daha az oldu. Buradan tıp eğitimi olmayan kişilerin de hastaların tedavisine yardım edebildiği çıkar. Her dozu eğitimli personelin hazırladığını söyleyen seçenek parçanın tersidir. İçeceğin yalnız hastaneye ulaşamayanlara verildiği ve hastalığın en çok küçük çocuklarda yayıldığı parçada geçmiyor. İçeceğin dünyada yaygınlaşması 1971'den sonra gelir." },
      { konu: ['ana fikir'],
        q: 'Which of the following best expresses the main idea of the passage?',
        options: [
          'Intravenous fluids remain the best treatment for every case of cholera.',
          'Cholera largely disappeared from South Asia during the 1970s.',
          'Refugee camps in 1971 suffered more from hunger than from disease.',
          'A simple, cheap drink proved a vital way of replacing lost fluids.',
          'A new drink was found that stops people from catching cholera.',
        ], answer: 3,
        explain: "Parça, ishalli hastalıkların öldürücülüğünün susuzluktan geldiğini, damar yolunun her yerde uygulanamadığını ve tuz, şeker ve sudan yapılan basit bir içeceğin kaybedilen sıvıyı yerine koyarak milyonlarca hayat kurtardığının kabul edildiğini anlatıyor. Ana fikir budur. Damar yolunun her olguda en iyi tedavi olduğu parçanın vurgusuyla çelişir. İçeceğin koleradan koruduğunu söyleyen seçenek son cümleyle çelişir: içecek enfeksiyonu önlemez ya da iyileştirmez, yalnız vücuda zaman kazandırır. Koleranın 1970'lerde Güney Asya'dan kalkması ve kamplarda açlık parçada yok." },
    ] },

  { id: 'd06-o5', course: SO, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', title: 'Lale çılgınlığı',
    text: "Tulips reached Western Europe from the Ottoman Empire in the sixteenth century, and in the Dutch Republic they soon became a symbol of wealth and refined taste. The most prized varieties had petals marked with dramatic, flame-like streaks. Growers could not produce these patterns reliably, because, as was discovered only in the twentieth century, they were caused by a virus that also weakened the plants. Such bulbs were therefore genuinely rare. In the mid-1630s, prices for some varieties rose to remarkable levels. Much of the trade took place in taverns during the winter, while the bulbs were still in the ground, so buyers were often promising to pay for bulbs they could not yet collect. In February 1637, buyers failed to appear at an auction in Haarlem, and within days prices collapsed. For a long time, the episode was told as a tale of national madness. A popular book published in 1841 described people from every walk of life selling houses and land to buy bulbs, and an entire economy ruined overnight. More recent historians, working through contracts, court records and letters of the period, have painted a far more modest picture. Most of the trade, they found, involved merchants and skilled craftsmen rather than the poor, and few traders appear to have been ruined. Many contracts were simply never honoured, and in Haarlem the town council eventually allowed buyers to cancel them by paying a small share of the agreed price. Some historians argue that the dramatic version survived partly because it made such a satisfying lesson about greed, a role it is still given whenever a financial bubble bursts.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the most highly valued tulips were scarce because ----.',
        options: [
          'they could be grown only within the Ottoman Empire',
          'a virus destroyed most of the bulbs every winter',
          'nobody could breed their striking streaks at will',
          'the Dutch authorities limited the number that were sold',
          'their streaks of colour faded after only one season',
        ], answer: 2,
        explain: "Parçaya göre en değerli laleler yapraklarında çarpıcı alev biçimli çizgiler olanlardı ve yetiştiriciler bu desenleri güvenilir biçimde elde edemiyordu; desenleri, yüzyıllar sonra anlaşıldığı gibi, bir virüs oluşturuyordu. Doğru seçenek bunu 'kimse o çarpıcı çizgileri istediği gibi üretemiyordu' diye veriyor. Virüsün her kış soğanların çoğunu yok ettiği en güçlü çeldiricidir: parça virüsün bitkiyi zayıflattığını söylüyor, soğanları yok ettiğini değil. Lalelerin yalnız Osmanlı topraklarında yetişebilmesi, yetkililerin satışı sınırlaması ve renklerin bir mevsimde solması parçada geçmiyor." },
      { konu: ['ayrıntı'],
        q: 'It is stated in the passage that much of the trade in the mid-1630s ----.',
        options: [
          'took place in spring, while the tulips were in full flower',
          'involved mainly the poorest members of Dutch society',
          'was carried out at auctions run by the town of Haarlem',
          'was regulated by contracts that the courts had approved',
          'concerned bulbs that had not yet been dug up',
        ], answer: 4,
        explain: "Parçaya göre alışverişin çoğu kışın, soğanlar hâlâ topraktayken meyhanelerde yapılıyordu; alıcılar çoğu zaman henüz teslim alamayacakları soğanlar için ödeme sözü veriyordu. Doğru seçenek bunu 'henüz topraktan çıkarılmamış soğanlar' diye veriyor. Haarlem'deki açık artırma yalnız çöküşün başladığı yer olarak geçiyor; alışverişin çoğu orada yapılmıyordu. İlkbahar parçanın tersidir. Alışverişin en yoksulları kapsadığı görüşü yeni tarihçilerin bulgularıyla çelişir; sözleşmelerin mahkemece onaylandığı da parçada yok." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that the book published in 1841 ----.',
        options: [
          'was based on a careful reading of contracts and court records',
          'may have overstated the harm the crash did to the economy',
          'was the first to explain how a virus affects tulip petals',
          'may have been written by one of the merchants who lost money',
          'played no part in shaping later views of financial bubbles',
        ], answer: 1,
        explain: "Parçaya göre 1841'de yayımlanan kitap her kesimden insanın evini ve toprağını satıp soğan aldığını ve bütün bir ekonominin bir gecede çöktüğünü anlatıyordu; sözleşme, mahkeme kaydı ve mektupları inceleyen yeni tarihçiler ise iflas edenlerin az olduğunu buldu. Buradan kitabın çöküşün ekonomiye verdiği zararı abartmış olabileceği çıkar. Kitabın sözleşme ve mahkeme kayıtlarına dayandığını söyleyen seçenek tersini söylüyor: bu kaynakları yeni tarihçiler inceledi. Virüs çok sonra, 20. yüzyılda anlaşıldı. Kitabın yazarının parasını yitiren bir tüccar olabileceği parçada yok. Öykünün her balon patladığında ders olarak anlatılması da kitabın sonraki görüşleri etkilemediği yargısıyla çelişir." },
      { konu: ['yazarın amacı'],
        q: 'The primary purpose of the passage is to ----.',
        options: [
          'explain how a virus alters the colour of tulip petals',
          'argue that financial bubbles can be predicted from history',
          'describe how the Dutch Republic grew wealthy through trade',
          'compare a popular account of the episode with later work',
          'defend the traders who refused to honour their contracts',
        ], answer: 3,
        explain: "Parça önce lale çılgınlığının yaygın anlatısını, yani ulusal bir delilik ve bir gecede çöken ekonomi öyküsünü veriyor, sonra yeni tarihçilerin belgelerle çok daha ölçülü bir tablo çizdiğini anlatıyor. Amaç, ünlü bir anlatıyı sonraki bulgularla karşılaştırmaktır. Virüs yalnız soğanların neden az olduğunu açıklamak için geçiyor. Balonların önceden kestirilebileceği, Hollanda'nın ticaretle zenginleşmesi ve sözleşmelere uymayanları savunmak parçanın amacı değildir." },
    ] },

  // ---------- 63–67: diyalog tamamlama ----------
  { id: 'd06-d1', course: G, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: "Elif: I've been asked to say a few words at my cousin's wedding, and I'm dreading it.\nOkan: Why? You're good at speaking in front of people.\nElif: ----\nOkan: Then don't write a speech at all. Just jot down three or four points on a card and talk as if you were chatting with friends.",
    options: [
      'At work, maybe, but anything personal I write comes out stiff.',
      "I've already written it, but my cousin says it's far too long.",
      "I know, but I've hardly met any of the guests, so they won't laugh.",
      'The wedding is on a weekday, so I have to take a day off work.',
      'My cousin has asked me to keep it to under five minutes.',
    ], answer: 0,
    explain: "Okan'ın cevabı ('O zaman hiç konuşma metni yazma. Bir karta üç dört madde not et ve arkadaşlarınla sohbet ediyormuş gibi konuş.') Elif'in sorununun yazmakta olduğunu gösteriyor. İşte belki iyi olduğunu, ama kişisel bir şey yazınca yapay durduğunu söyleyen cümle buna uyar; 'At work, maybe' de Okan'ın 'insanların önünde konuşmada iyisin' sözüne cevap verir. Metni çoktan yazdığını söyleyen cümle en güçlü çeldiricidir: yazmaktan söz ediyor, ama yazılmış bir metin için 'hiç yazma' denmez. Konukları tanımaması, düğünün hafta içi olması ve beş dakika sınırı da 'hiç metin yazma' önerisine bağlanmaz." },
  { id: 'd06-d2', course: S, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlam'],
    q: "Pharmacist: Is this the first time you've taken these tablets?\nCustomer: Yes. My doctor said they should help with the pain in my knee.\nPharmacist: ----\nCustomer: Right, so with breakfast and dinner rather than first thing in the morning. I'll make a note of that.",
    options: [
      'Take one a day, ideally in the morning before you eat anything.',
      'They can make some people drowsy, so avoid driving after a dose.',
      "If the pain hasn't eased within a week, go back to your doctor.",
      'Take them twice a day with food, as they can upset an empty stomach.',
      'Keep them somewhere cool and dry, out of the reach of children.',
    ], answer: 3,
    explain: "Müşterinin cevabı ('Yani sabah ilk iş değil, kahvaltı ve akşam yemeğiyle. Not alayım.') eczacının ilacı günde iki kez ve yemekle almasını söylediğini gösteriyor. Boş mideyi rahatsız edebileceği için ilacı yemekle, günde iki kez almasını söyleyen cümle buna uyar. Günde bir kez, sabah bir şey yemeden almasını söyleyen cümle en güçlü çeldiricidir: zamanlamadan söz ediyor, ama müşterinin 'sabah ilk iş değil' sözüyle çelişir. Uyku yapabileceği uyarısı, bir hafta sonra hekime dönme önerisi ve saklama koşulları da 'kahvaltı ve akşam yemeğiyle' cevabını açıklamaz." },
  { id: 'd06-d3', course: SO, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlam'],
    q: "Student: I've chosen the history of our neighbourhood as the topic for my project.\nTeacher: Good idea. Where are you going to find your information?\nStudent: ----\nTeacher: That can be a rich source. Just remember that people's memories aren't always reliable, so check dates against written records where you can.",
    options: [
      'The local library keeps a collection of old maps and council records.',
      "I haven't decided yet, but I'd like to include plenty of photographs.",
      "I'm going to interview residents who've lived there for decades.",
      'Mostly online, since websites are quicker to search than books.',
      'From the newspaper archive, which goes back to the early 1900s.',
    ], answer: 2,
    explain: "Öğretmenin cevabı ('Zengin bir kaynak olabilir. Yalnız insanların anılarının her zaman güvenilir olmadığını unutma; tarihleri olabildiğince yazılı kayıtlarla karşılaştır.') öğrencinin bilgiyi insanların anılarından toplayacağını gösteriyor. Mahallede onlarca yıldır yaşayanlarla görüşeceğini söyleyen cümle buna uyar. Kütüphanedeki eski haritalar ve belediye kayıtları ile gazete arşivi zaten yazılı kaynaktır; 'anılar güvenilir değil, yazılı kayıtlarla karşılaştır' uyarısı bunlara uymaz. Fotoğraf eklemek ve internetten aramak da anılarla ilgili değildir." },
  { id: 'd06-d4', course: G, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['soru-cevap uyumu'],
    q: "Ayşe: The heating in our office has been broken since Monday.\nEmre: Has anyone reported it?\nAyşe: ----\nEmre: In that case, there's no point waiting any longer. I'll call an engineer myself and send the bill to the building management.",
    options: [
      'Yes, and the engineer managed to fix it within an hour.',
      'Several times, but the manager keeps putting it off.',
      "It hardly matters, since the weather's been so mild.",
      "I'd rather wear a coat than make a fuss about it.",
      'The manager says a new boiler will be fitted tomorrow.',
    ], answer: 1,
    explain: "Emre'nin cevabı ('O zaman daha fazla beklemenin anlamı yok. Teknisyeni kendim çağırırım.') arızanın bildirildiğini ama boşuna beklendiğini gösteriyor. Birkaç kez bildirildiğini ama yöneticinin işi sürekli ertelediğini söyleyen cümle buna uyar. Yöneticinin yarın yeni kazan takılacağını söylemesi en güçlü çeldiricidir: bildirime cevap verildiğini gösteriyor, ama ertesi gün çözülecek bir arıza için 'daha fazla beklemenin anlamı yok' denmez. Teknisyenin arızayı bir saatte onarması kaloriferin hâlâ bozuk olmasıyla çelişir. Havanın ılık geçmesi ve palto giymeyi yeğlemek ise Emre'nin sorusunu cevaplamıyor; hemen teknisyen çağırma kararını da açıklamıyor." },
  { id: 'd06-d5', course: G, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: "Can: I hear you've moved into the new flat by the river. How do you like it?\nDefne: ----\nCan: Well, a bit of noise is a small price to pay for a view like that.",
    options: [
      "It's much quieter than my old place, and the rent is lower too.",
      "It's rather small and dark, but the neighbours are very friendly.",
      'I love the view, though I miss living close to my office.',
      'The view is stunning, but the trains going past keep me awake.',
      "It's noisy at night, and every window faces a brick wall.",
    ], answer: 3,
    explain: "Can'ın cevabı ('Böyle bir manzara için biraz gürültü küçük bir bedel.') Defne'nin hem manzaradan hem gürültüden söz ettiğini gösteriyor. Manzaranın çok güzel olduğunu ama geçen trenlerin uyutmadığını söyleyen cümle ikisini de içeriyor. Manzarayı sevdiğini ama işyerine uzak düştüğünü söyleyen cümle yalnız manzaraya uyar; gürültü yok. Geceleri gürültülü olduğunu ve pencerelerin tuğla duvara baktığını söyleyen cümle gürültüye uyar ama manzarayı ortadan kaldırır. Eskisinden sessiz olması ile küçük ve karanlık olması da Can'ın cevabıyla bağdaşmaz." },

  // ---------- 68–71: anlamca en yakın cümle ----------
  { id: 'd06-y1', course: SO, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: 'The museum attracted twice as many visitors this year as it did last year.',
    options: [
      'Last year, the museum had only half the number of visitors it had this year.',
      'This year, the museum attracted half as many visitors as it did last year.',
      'The museum attracted almost as many visitors this year as it did last year.',
      'The number of visitors to the museum has doubled every year since it opened.',
      'This year, the museum attracted more visitors than any other museum in the city.',
    ], answer: 0,
    explain: "'Twice as many … as' (… in iki katı) bu yılki ziyaretçi sayısının geçen yılınkinin iki katı olduğunu söyler; demek ki geçen yılki sayı bu yılkinin yarısıdır. Doğru cümle aynı ilişkiyi geçen yıldan bakarak kuruyor. Bu yıl ziyaretçinin yarıya indiğini söyleyen cümle ilişkiyi tersine çeviriyor. 'Almost as many' iki yılı neredeyse eşit yapıyor. Sayının her yıl ikiye katlandığını söyleyen cümle kapsamı iki yıldan müzenin açıldığı günden beri geçen bütün yıllara genişletiyor. Kentteki öteki müzelerle karşılaştırma ise verilen cümlede yok." },
  { id: 'd06-y2', course: G, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['koşul', 'kip geçmiş (modal perfect)'],
    q: "You might have caught the earlier train if you hadn't stopped to buy a newspaper.",
    options: [
      'Because you stopped to buy a newspaper, you were certain to miss the earlier train.',
      'You caught the earlier train even though you stopped to buy a newspaper.',
      'Stopping to buy a newspaper may have cost you the chance to catch the earlier train.',
      'You should have bought a newspaper before you caught the earlier train.',
      'If you stop to buy a newspaper, you might miss the earlier train.',
    ], answer: 2,
    explain: "Verilen cümle gerçekleşmemiş bir geçmişi anlatır: gazete almak için durmasaydın erken trene yetişebilirdin. Demek ki kişi erken treni kaçırdı ve gazete için durması bunda rol oynamış olabilir; 'might' bu bağı olasılık olarak bırakır. Doğru cümle aynı olasılığı 'may have cost you the chance' ile veriyor. 'Were certain to miss' olasılığı kesinliğe çeviriyor. 'If you stop … might miss' geçmişteki bir olayı geleceğe dair genel bir uyarıya çeviriyor. Treni yakaladığını söyleyen cümle anlamı tersine çeviriyor; 'should have bought' ise verilen cümlede olmayan bir eleştiri ekliyor." },
  { id: 'd06-y3', course: F, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['olumsuzluğun kapsamı', 'nicelik'],
    q: 'Hardly any of the samples collected near the factory showed signs of contamination.',
    options: [
      'Only a very small proportion of the samples taken near the factory appeared to be contaminated.',
      'None of the samples collected near the factory showed any sign of contamination at all.',
      'Most of the samples collected near the factory showed at least some sign of contamination.',
      'Hardly any samples could be collected near the factory because of the contamination.',
      'Few samples were collected near the factory, but most of them showed signs of contamination.',
    ], answer: 0,
    explain: "'Hardly any' (neredeyse hiç) olumsuz anlamlıdır ama 'hiç' demek değildir: örneklerin çok azında kirlilik izi vardı. Doğru cümle bunu 'örneklerin yalnız çok küçük bir bölümü kirli görünüyordu' diye veriyor. 'None … at all' çok azı hiçe indiriyor. 'Most' anlamı tersine çeviriyor. Kirlilik yüzünden neredeyse hiç örnek toplanamadığını söyleyen cümle kirliliği örneklerin sonucundan toplama engeline çeviriyor. Az örnek toplanıp çoğunun kirli çıktığını söyleyen cümle ise 'hardly any' sözünü örneklerin sayısına kaydırıyor." },
  { id: 'd06-y4', course: SO, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['isim cümleciği', 'kapsam'],
    q: 'It was not the cost of the project but its timing that worried the committee.',
    options: [
      'The committee was worried both about the cost of the project and about its timing.',
      'The committee was less worried about the timing of the project than about its cost.',
      'The committee would have worried about the cost if the timing had been different.',
      'Neither the cost of the project nor its timing caused the committee any concern.',
      "The committee's concern lay with when the project would happen, not its price.",
    ], answer: 4,
    explain: "'It was not … but … that' vurgulu bir yapıdır: kurulu kaygılandıran projenin maliyeti değil, zamanlamasıydı. Doğru cümle aynı ayrımı 'when the project would happen' isim cümleciğiyle kuruyor: kurulun kaygısı projenin ne zaman yapılacağıydı, fiyatı değil. 'Both … and' maliyeti de kaygının içine alıyor; verilen cümle onu dışarıda bırakıyor. Kurulun maliyetten daha çok kaygılandığını söyleyen cümle ilişkiyi tersine çeviriyor. 'Would have worried … if' verilen cümlede olmayan bir koşul kuruyor; 'neither … nor' ise iki kaygıyı da ortadan kaldırıyor." },

  // ---------- 72–75: paragraf tamamlama ----------
  { id: 'd06-p1', course: G, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: "When the American grocer Sylvan Goldman introduced wheeled shopping trolleys in his Oklahoma supermarkets in the late 1930s, he expected them to be an instant success, since customers could now buy far more than they could carry in a basket. ----. Men apparently felt that pushing one made them look weak, while many women said it reminded them of the prams they had only recently stopped pushing. Goldman is said to have solved the problem by hiring people to wheel trolleys around the store, pretending to shop, until the sight became ordinary.",
    options: [
      'At first, though, hardly anyone was willing to use them',
      'The trolleys were therefore a hit with shoppers of all ages',
      'Each one was built from a folding chair fitted with wheels',
      'Other grocers soon complained that he had copied their idea',
      'His customers, as a result, began to spend less time shopping',
    ], answer: 0,
    explain: "Boşluktan önce Goldman'ın arabaların hemen tutulacağını beklediği, sonra da erkeklerin ve kadınların arabayı itmekten neden çekindiği anlatılıyor. Boşluğa bu beklentiyle çelişen ve çekinme açıklamasını başlatan bir cümle gelmeli: başta neredeyse kimse onları kullanmak istemedi. Arabaların her yaştan alışverişçinin gözdesi olduğu sonraki cümlelerle çelişir. Arabanın katlanır bir sandalyeden yapılması konuyla ilgilidir, ama ardından gelen çekinme açıklamasına bağlanmaz. Öteki bakkalların yakınması ve alışverişin kısalması da paragrafın akışında yer almıyor." },
  { id: 'd06-p2', course: SO, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['gönderim'],
    q: "Shops and cinemas sometimes offer a choice that few customers are expected to take. A cinema, for example, might sell a small box of popcorn at a low price, a large box at a higher one, and a medium box that costs only slightly less than the large. ----. Its real purpose is to make the large box look like a bargain by comparison, and studies of consumer choice suggest that adding such an option can indeed push people towards the more expensive item. Marketers call it a 'decoy'.",
    options: [
      'Small portions appeal to people who are trying to eat less',
      'Most cinemas earn more from snacks than from ticket sales',
      'The large box is, therefore, the least profitable for the cinema',
      'People who buy the medium box tend to regret it afterwards',
      'The medium box is seldom chosen, and it is not meant to be',
    ], answer: 4,
    explain: "Boşluktan sonraki cümle 'Its real purpose' (asıl amacı) diye tekil bir şeyden söz ediyor ve onun büyük kutuyu ucuz gösterdiğini söylüyor. Bu tekil gönderim orta boy kutuya dayanmalı: orta kutu nadiren seçilir ve zaten seçilmesi amaçlanmaz. Küçük porsiyonların az yemek isteyenlere çekici gelmesi çoğuldur ve büyük kutuyu ucuz göstermeyle ilgisi yoktur. Sinemaların atıştırmalıktan çok kazanması ve büyük kutunun en az kâr getirmesi 'Its' gönderimini orta kutuya bağlamaz. Orta kutuyu alanların pişman olması da 'onun asıl amacı' sözüne geçiş sağlamaz." },
  { id: 'd06-p3', course: F, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    q: "For more than a century, many textbooks explained the slipperiness of ice in a simple way: the pressure of a skater's blade was thought to melt a thin layer of ice, so that the skate glided on water. ----. Calculations show that the pressure under an ordinary shoe or skate lowers the melting point only very slightly, yet ice can be slippery at temperatures far below zero. Most researchers now look instead at the surface of the ice itself, where the molecules appear to be less firmly held than those deeper inside, although exactly how this layer behaves is still debated.",
    options: [
      'Skating, as a result, became popular in countries with cold winters',
      'This is why rinks are kept at very low temperatures for skating',
      'The same process explains why fresh snow squeaks underfoot',
      'This explanation, however, does not survive close examination',
      'Ice on frozen lakes is usually rougher than the ice in rinks',
    ], answer: 3,
    explain: "Boşluktan önce ders kitaplarının eski açıklaması (paten bıçağının basıncının ince bir buz katmanını eritmesi), sonra hesapların bu açıklamayı çürüttüğü anlatılıyor: basınç erime noktasını çok az düşürür, buz ise sıfırın çok altında da kaygandır. Boşluğa açıklamayı sorgulayan bir geçiş cümlesi gelmeli: bu açıklama yakından incelenince tutmuyor. Pistlerin çok soğuk tutulmasını eski açıklamaya bağlayan cümle akla yatkın görünür, ama hem 'Calculations show …' itirazına geçiş sağlamaz hem de basınçla erime düşüncesiyle bağdaşmaz. Patenin soğuk ülkelerde yaygınlaşması, karın gıcırdaması ve göl buzunun pürüzlülüğü de paragrafın akışından sapar." },
  { id: 'd06-p4', course: SO, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    q: 'Teachers have long joked that the best way to learn a subject is to teach it, and some research suggests the joke may contain a grain of truth. In several experiments, students who were told that they would later have to explain a text to others remembered it better than students who expected only to be tested on it, even though neither group was in fact asked to teach anyone. ----.',
    options: [
      'Teachers should therefore be paid according to what their students recall',
      'Students who sat the test had been given more time to read the text',
      'Simply expecting to teach, it seems, may change the way people study',
      'Many of those students later decided to become teachers themselves',
      'Explaining a text aloud to others is, it seems, what makes it memorable',
    ], answer: 2,
    explain: "Paragraf, başkalarına anlatacağını düşünen öğrencilerin, hiçbir grup gerçekte kimseye ders vermediği hâlde metni daha iyi hatırladığını söylüyor. Bunun doğal sonucu, yalnız öğretmeyi beklemenin bile çalışma biçimini değiştirebileceğidir; 'it seems' ve 'may' de bulgunun temkinli diline uyar. Metni başkalarına yüksek sesle anlatmanın akılda kalıcı kıldığını söyleyen cümle en güçlü çeldiricidir, ama deneyde kimse anlatmadı; fark yalnız beklentiden geliyor. Öğretmen ücretinin öğrencinin hatırladığına bağlanması aşırı bir genellemedir. Sınava girenlere daha çok süre verilmesi ve öğrencilerin öğretmen olması paragrafta yok." },

  // ---------- 76–80: akışı bozan cümle ----------
  { id: 'd06-b1', course: G, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'The crossword puzzle is a younger invention than many people imagine.',
      'A well-made clue should be fair, so that a careful solver can reach the answer without having to guess.',
      'The first puzzle generally recognised as a crossword appeared in a New York newspaper in December 1913, devised by a journalist named Arthur Wynne.',
      'For some years afterwards, it remained a feature of only a few American papers.',
      'Then, in 1924, a new publishing firm brought out a book of crosswords that sold in huge numbers and set off a craze on both sides of the Atlantic.',
    ], answer: 1,
    explain: "Paragraf bulmacanın tarihini sırayla anlatıyor: bulmaca sanıldığından genç bir buluştur (I), ilk bulmaca 1913'te bir New York gazetesinde çıktı (III), birkaç yıl yalnız birkaç gazetede kaldı (IV) ve 1924'te bir bulmaca kitabının büyük satışıyla çılgınlığa dönüştü (V). V'teki 'Then' IV'te anlatılan durgun dönemin ardından gelen değişikliği bağlıyor. II. cümle de bulmacadan söz ediyor, ama tarihsel anlatıyı bırakıp iyi bir ipucunun nasıl yazılacağına dair genel bir ilkeye geçiyor; I'deki 'sanıldığından genç' savı da ancak III'teki tarihle desteklenir. Bu yüzden akışı bozan II'dir." },
  { id: 'd06-b2', course: SO, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'The modern ballpoint pen owes much to László Bíró, a Hungarian journalist who was frustrated by the fountain pens of the 1930s.',
      'He had noticed that the ink used to print newspapers dried quickly and rarely smudged, but it was far too thick to flow through an ordinary nib.',
      'Working with his brother György, a chemist, he designed a pen with a tiny ball at its tip that picked up ink as it rolled across the page.',
      'A good fountain pen was an expensive possession, and many people kept the same one for most of their lives.',
      'The brothers later settled in Argentina, where they patented an improved version of their pen in the early 1940s.',
    ], answer: 3,
    explain: "Paragraf tükenmez kalemin doğuşunu sorun ve çözüm sırasıyla anlatıyor: Bíró dolma kalemlerden bıkmıştı (I), gazete mürekkebinin çabuk kuruduğunu ama uca akmayacak kadar koyu olduğunu fark etti (II), kardeşiyle ucunda küçük bir bilye olan bir kalem tasarladı (III) ve kardeşler sonra Arjantin'de geliştirilmiş biçimin patentini aldı (V). V'teki 'The brothers' III'te anılan iki kardeşe dayanıyor. IV. cümle de kalemlerden söz ediyor, ama buluş öyküsünü bırakıp dolma kalemin değerine ve uzun süre kullanılmasına geçiyor; bu yüzden akışı bozuyor." },
  { id: 'd06-b3', course: F, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    sentences: [
      'Chameleons are famous for changing colour, but how they actually do so was poorly understood until fairly recently.',
      'Studies of one species found that many of its colours come not from pigment alone but from tiny crystals arranged in a regular pattern inside certain skin cells.',
      'When the animal is calm, the crystals lie close together and reflect mainly blue light, which combines with a yellow pigment in the skin to give green.',
      'When it becomes excited, the gaps between the crystals widen, and the light they reflect shifts towards yellows, oranges and reds.',
      'Many people assume that chameleons change colour mainly so as to blend in with whatever they are sitting on.',
    ], answer: 4,
    explain: "Paragraf I. cümlede bir soru açıyor: bukalemunlar rengi nasıl değiştirir? Sonraki cümleler düzeneği adım adım anlatıyor: renklerin çoğu deri hücrelerindeki düzenli dizilmiş küçük kristallerden gelir (II), hayvan sakinken kristaller sık durur ve mavi yansıyan ışık sarı pigmentle yeşil verir (III), heyecanlanınca aralıklar açılır ve renk sarı ve kırmızıya kayar (IV). V. cümle de renk değişiminden söz ediyor, ama 'nasıl' sorusunu bırakıp insanların 'neden' konusundaki sanısına geçiyor; düzeneğe bir şey eklemediği için akışı bozuyor." },
  { id: 'd06-b4', course: G, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Prices ending in .99 are so common that most shoppers barely notice them.',
      'One explanation for their popularity is that people read prices from left to right and pay most attention to the first digit.',
      'Some shops round all their prices to whole numbers so that paying in cash is quicker for their customers.',
      'A price of 4.99 may therefore feel closer to 4 than to 5, even though it is only a cent below 5.',
      'Retailers, for their part, seem convinced that this small difference has a real effect on what people buy.',
    ], answer: 2,
    explain: "Paragraf .99 ile biten fiyatların neden yaygın olduğunu açıklıyor: bu fiyatlar her yerdedir (I), insanlar fiyatı soldan sağa okur ve ilk basamağa en çok dikkat eder (II), bu yüzden 4,99 5'ten çok 4'e yakın gelebilir (IV) ve satıcılar bu küçük farkın satışı etkilediğine inanıyor gibidir (V). IV'teki 'therefore' II'deki açıklamaya dayanıyor. III. cümle de fiyatlardan söz ediyor, ama .99 açıklamasını bırakıp fiyatı tam sayıya yuvarlayan dükkânlara geçiyor ve II ile IV arasındaki neden-sonuç bağını koparıyor." },
  { id: 'd06-b5', course: SO, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'In mid-eighteenth-century London, a man carrying an umbrella risked being jeered at in the street.',
      'Umbrellas were then seen in England largely as an accessory for women, and a man who used one could be thought foreign or rather weak.',
      'A merchant named Jonas Hanway is often said to have been among the first men to carry one regularly, ignoring the insults.',
      'Umbrellas of that period were heavy objects, with ribs often made of whalebone and covers of waxed or oiled cloth.',
      'Within a generation, however, the umbrella had become a perfectly respectable thing for a man to carry.',
    ], answer: 3,
    explain: "Paragraf şemsiyenin erkekler arasında nasıl kabul gördüğünü anlatıyor: şemsiyeli erkek sokakta alaya alınırdı (I), çünkü şemsiye kadın aksesuarı sayılırdı (II), Hanway hakaretlere aldırmadan şemsiye taşıdı (III) ve bir kuşak içinde şemsiye erkekler için de saygın bir eşya oldu (V). V'teki 'however', III'te anlatılan hakaretlerle sonraki kabul arasındaki karşıtlığı kuruyor. IV. cümle de şemsiyeden söz ediyor, ama toplumun tutumunu bırakıp dönemin şemsiyelerinin yapısına geçiyor; bu yüzden akışı bozuyor." },
];

export const DENEME_06 = { id: 'deneme-06', sinav: 'YDS', ad: 'Tam deneme 6', sorular };
