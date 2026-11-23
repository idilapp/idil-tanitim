// iDil › Tam deneme 9 (YÖKDİL Fen biçimi; 80 soru, kitapçık sırası). Görev 17, Sınav S2 (23 Kasım 2026).
// Tümü özgün: Claude yazdı. ÖSYM sorusu, yayınevi, ders kitabı (Murphy, Azar), uygulama ya da gazete metni kopyalanmadı,
// uyarlanmadı; ÖSYM kitapçıkları yazarken açılmadı, yalnız etiket sayımları (analiz/agirlik.json, analiz/dagilim.md,
// analiz/tahmin.md) kullanıldı. Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir.
// Biçim: ../README.md (ünite öğesiyle aynı).
//
// Sıra (turler.js YÖKDİL notu): 1–6 kelime, 7–20 dil bilgisi, 21–30 boşluklu metin (2 × 5), 31–41 cümle tamamlama,
// 42–47 çeviri İng.→Tr., 48–53 çeviri Tr.→İng., 54–59 paragraf tamamlama, 60–65 akışı bozan cümle, 66–80 okuma (5 × 3).
// `sorular` dizisinde parçalar tek öğedir (type 'pratik', adımlarıyla); açılınca 80 soru. YÖKDİL'de diyalog ve yakın anlam yok.
// Kelime sırası (dagilim.md §3.1): isim, isim, sıfat, zarf, fiil, öbek fiil. Dil bilgisi şablonu (dagilim.md §3.2, YÖKDİL):
// 7–8 fiil yapıları (geçmişe dair kip çıkarımı, edilgen geçmiş ortaç), 9–11 edat (in response to, attributable to, impervious to),
// 12–16 bağlaç, bağlantı zarfı ve zarf cümleciği (because, nevertheless, so that, once, devrik no sooner … than),
// 17–18 edat (invisible to, in terms of), 19 eşleşik bağlaç, 20 sıfat cümleciği (whose). İlk dil bilgisi sorusu geçmişe dair
// kip çıkarımıdır (must have been); deneme 01–06'nın zaman uyumu ve deneme 07'nin mastar kalıbından farklı. Cümle tamamlama
// ilişkileri (dagilim.md §3.3, YÖKDİL): 8 karşıtlık, 1 neden-sonuç, 1 koşul, 1 zaman.
// Bütün metinler fen bilimleri alanından. Alt grup dağılımı (soru başına; tahmin.md §5.4 hedefi parantezde): biyoloji 26 (26,
// %80 aralığı 20–32), teknoloji 12 (17; 12–22), kimya 11 (10; 6–14), çevre 9 (13; 9–18), astronomi 11, fizik 9, yer bilimi 2
// (kalan pay). Deneme 07'ye göre biyoloji, astronomi ve fizik payı arttı, teknoloji azaldı (görev notu).
// Parça konuları (deneme 01–08, set/set-fen-*.js, pilot fen ünitelerinin Olgular listeleri ve Sınav Kitabı örnekleriyle
// çakışmaz; aynı anda yazılan deneme 08 ile çakışan Physarum, bayatlama, ısı kalkanı ve hidrojeni tüketen yıldız konuları
// çıkarıldı): okuma o1 Bates ve Müller taklitçiliği (biyoloji), o2 Jocelyn Bell'in pulsarları bulması
// (astronomi), o3 GPS uydu saatleri ve görelilik (teknoloji ve fizik), o4 derin denizde ve ateşböceklerinde biyolüminesans
// (biyoloji), o5 Nyos Gölü felaketi (çevre ve yer bilimi); boşluklu z1 Kevlar'ın buluşu (kimya), z2 kutup ışıkları (fizik).
//
// Olgular (yerleşik bilgi; her biri yalnız gösterildiği öğede; metinler özgün; sayılar yuvarlak ve temkinli):
// - d09-z1: Stephanie Kwolek, DuPont, ABD, 1965; araba lastiklerindeki çeliğin yerini alacak hafif ve güçlü lif arayışı;
//   alışılmışın tersine ince (akışkan) ve bulanık polimer çözeltisi, çoğu kimyacının atacağı türden; eğirme işini yapan
//   isteksiz bir meslektaş (teknisyen Charles Smullen; parçada ad yok); liflerin çok güçlü ve sert çıkması; Kevlar'ın
//   1970'lerin başında satışa çıkması (1971; parçada yıl yok); ağırlığına göre çelikten yaklaşık beş kat güçlü olduğunun
//   söylenmesi (DuPont'un yaygın tanıtım sayısı; temkinli: "is often described as"); halat, koruyucu eldiven ve polis
//   yelekleri; Kwolek'in söyleşilerde hayat kurtarmanın verdiği hoşnutluğu anlatması (alıntı yok, dolaylı ve genel).
// - d09-z2: Kutup ışıkları: yüksek enlemler; Güneş'ten gelen yüklü parçacık akışı (güneş rüzgârı; parçada terim yok);
//   parçacıkların çoğunun Dünya'nın manyetik alanınca saptırılması, bir kısmının alan boyunca kutuplara yönelmesi;
//   atmosferin yükseklerindeki atom ve moleküllerle çarpışma ve ışık salma; oksijen yeşil, daha yüksekte kırmızı; azot mavi
//   ve mor tonlar; güçlü Güneş fırtınalarında kutuplardan uzak yerlerde görülebilmesi (yerleşik bilgi; sayı yok).
// - d09-o1: Uyarı renkleri ve yırtıcıların tek kötü deneyimden öğrenmesi; Henry Walter Bates, İngiliz doğa bilimci, Amazon'da
//   yıllarca böcek toplaması (yaklaşık 11 yıl; parçada sayı yok), 1860'ların başı (1862 makalesi; parçada yıl yok), zararsız
//   kelebeklerin aynı ormandaki tatsız türlere benzemesi; Bates taklitçiliği; zararsız süt yılanlarının (bazı alt türler)
//   zehirli mercan yılanlarının kırmızı, siyah ve sarı kuşaklarına benzemesi; taklitçiler çoğalınca korumanın zayıflaması
//   (sıklığa bağlı seçilim; terim yok); Fritz Müller, Alman doğa bilimci, birkaç yıl sonra (1878; parçada yıl yok:
//   "Some years later"), zararlı türlerin aynı deseni paylaşması; çiçek sineklerinin (hoverflies) eşek arılarına kaba
//   benzerliği ve nedeninin tartışılması (temkinli: "One suggestion is … may not").
// - d09-o2: Jocelyn Bell (bugün Jocelyn Bell Burnell), Cambridge Üniversitesi'nde araştırma öğrencisi, 1967 yazı; kurulmasına
//   yardım ettiği radyo teleskobu; kayıtların kâğıt rulolar üzerindeki dalgalı çizgiler olması ve gözle incelenmesi;
//   yaklaşık 1,3 saniyede bir gelen düzenli atımlar (1,337 s); danışmanı Antony Hewish; yarı şaka "LGM-1" ("little green
//   men"); kısa süre sonra gökyüzünün başka yerlerinde benzer sinyaller; pulsar adı; hızla dönen nötron yıldızları ve deniz
//   feneri benzetmesi; 1974 Nobel Fizik Ödülü'nün Hewish ile Martin Ryle'a verilmesi (parçada Ryle'ın adı yok: "another
//   Cambridge astronomer"; temkinli: "awarded partly for this discovery", çünkü Ryle'ın payı başka bir çalışma içindi);
//   kararın eleştirilmesi; Bell'in genellikle kırgınlık göstermeden konuşması ve ödüllerin kıdemlilere gitme eğilimine
//   değinmesi (dolaylı, alıntı yok); 2018'de büyük bir bilim ödülü (Breakthrough Prize; parçada ad ve tutar yok) ve parasını
//   azınlıkta kalan gruplardan fizik öğrencilerine bağışlaması.
// - d09-o3: GPS: uydularda atom saatleri; konum ve gönderim anı yayımı; alıcının en az dört uydudan gelen sinyallerle konum
//   hesaplaması; ışık hızı yaklaşık 300.000 km/s, milyonda bir saniye yaklaşık 300 m; uyduların hızı yaklaşık 14.000 km/sa,
//   yüksekliği yaklaşık 20.000 km (20.200 km); özel görelilik saati yavaşlatır (günde yaklaşık 7 mikrosaniye; parçada sayı
//   yok), genel görelilik hızlandırır (yaklaşık 45; parçada sayı yok); toplamda günde yaklaşık 38 mikrosaniye ileri; düzeltme
//   olmazsa konumun günde birkaç kilometre kayması (sık anılan tahmin yaklaşık 10 km; temkinli: "several kilometres");
//   saatlerin fırlatmadan önce biraz yavaş ayarlanması ve yazılımla ek düzeltme.
// - d09-o4: Biyolüminesans: karada seyrek (ateşböcekleri, bazı mantarlar ve solucanlar); açık okyanusun ışıklı yüzey
//   katmanının altındaki hayvanların büyük çoğunluğunun ışık üretebilmesi (Martini ve Haddock, Scientific Reports, 2017,
//   uzaktan kumandalı araç görüntüleri, yaklaşık dörtte üç; parçada ad ve oran yok; temkinli: "suggest that a large
//   majority"); lusiferin, oksijen ve bir enzim (lusiferaz; parçada ad yok); enerjinin büyük ölçüde ışık olarak salınması,
//   çok az ısı; fener balığının parlayan yemi; küçük balık ve kalamarlarda karın ışıklarıyla gölgeyi silme (karşı aydınlatma;
//   parçada terim yok); ateşböceklerinde türe özgü ışık düzenleri; bazı türlerin dişilerinin başka türlerin işaretini taklit
//   edip erkeği yemesi (Photuris; parçada ad yok).
// - d09-o5: Nyos Gölü, Kamerun'un kuzeybatısı, 21 Ağustos 1986 gecesi; karbondioksit bulutu, havadan ağır, vadiler boyunca
//   akış; yaklaşık 1.700 ölü ("some 1,700") ve binlerce büyükbaş hayvan; kurbanların çoğunun uykuda olması; volkanik bölge,
//   dipten sızan karbondioksit; basınçla derin katmanlarda çözünmüş kalması ve katmanların pek karışmaması; tetikleyicinin
//   kesin bilinmemesi (temkinli: "perhaps a landslide or a sudden cooling … appears to have"); 2001'den beri dipteki suyu
//   yüzeye taşıyan gaz giderme boruları, kendi kendini sürdüren akış ve fıskiye; benzer kimyadaki Kivu Gölü (Ruanda ve Kongo
//   Demokratik Cumhuriyeti sınırı), çevresinde milyonlarca insan.
// - d09-p1: Tembel hayvanlar: Orta ve Güney Amerika ormanları, baş aşağı asılı yaşam; kürklerinde alg yetişmesi; yaprak
//   ağırlıklı, enerjisi az ve zor sindirilen besin; bir öğünün bağırsaktan geçmesinin günler sürebilmesi ("may take days");
//   yavaş hareket ve görece düşük vücut sıcaklığıyla enerji tasarrufu (yerleşik bilgi).
// - d09-p2: Kendi kendini onaran beton: çatlaklardan giren suyun çelik donatıyı paslandırması; betona yıllarca uykuda kalabilen
//   bakteri (spor) katma önerisi ve suyla etkinleşip kireçtaşı üretmeleri (Henk Jonkers, Delft Teknik Üniversitesi; paragrafta
//   ad yok); bugün sıradan betondan pahalı olması. Çeldiricide: pasın çelikten fazla yer kaplaması (yerleşik); Roma betonunda
//   volkanik kül, kireç ve deniz suyu (yerleşik).
// - d09-p3: Gübre akıntısı, alg patlaması, ölü alglerin bakterilerce ayrıştırılıp oksijenin tükenmesi, "ölü bölgeler"; Meksika
//   Körfezi'nde her yaz oluşan büyük ölü bölge ve Mississippi (yerleşik). Çeldiricide: bazı alglerin zehir salması.
// - d09-p4: Ay yanılsaması: ufka yakın Ay'ın büyük görünmesi, aynı ayarlı fotoğraflarda diskin neredeyse aynı büyüklükte
//   çıkması, beyinden doğan bir yanılsama ve açıklamasının tartışmalı olması (yerleşik). Çeldiricide: ufuktaki havanın
//   büyüteç gibi davrandığı yanlış inanışı; dolunayın gün batımı sıralarında doğması.
// - d09-p5: Süperiletkenlik: belirli bir sıcaklığın altında direncin sıfıra düşmesi; halkada kayıpsız süren akım; hastane
//   tarayıcılarının (MR; paragrafta terim yok) süperiletken telden mıknatısları; çoğunun çok düşük sıcaklık istemesi ve sıvı
//   helyumla soğutma (yerleşik). Çeldiricide: sıradan metallerin direncinin ısındıkça artması (açıklamada).
// - d09-p6: Bakırın açık havada önce donuk kahverengiye dönmesi, yıllar ya da on yıllar içinde mavi-yeşil patinaya dönüşmesi;
//   patinanın yüzeye sıkıca yapışıp alttaki metali koruması, demir pasının ise pul pul dökülmesi; bakır çatıların yüzyılı
//   aşkın dayanabilmesi ("can last"; yerleşik bilgi).
// - d09-b1: Sinekkuşları: çok yüksek metabolizma, gündüz sürekli beslenme; gece uyuşukluk (torpor), kalp atışının yavaşlaması
//   ve vücut sıcaklığının düşmesi; sabah ısınma (yerleşik). Aykırı cümlede: uzun ve ince gaganın borumsu çiçeklerdeki nektara
//   ulaşması.
// - d09-b2: Optik lif: ışık atımları, saç telinden ince cam; kenara yatık açıyla çarpan ışığın içeri yansıması (tam iç yansıma;
//   terim yok); uzun hatlarda soğurulma ve aralıklarla güçlendirme (yerleşik). Aykırı cümlede: plastik koruyucu kaplama.
// - d09-b3: Sert su: kireçtaşı ve tebeşirden alınan kalsiyum ve magnezyum; içmeye zararsız; ısıtılınca çökelen beyaz katı ve
//   kireçlenme (yerleşik). Aykırı cümlede: granit taban kayalı bölgelerde yumuşak suyun yaygın olması.
// - d09-b4: İnşaat kumu: betonun temel bileşeni, en çok kullanılan doğal kaynaklardan; rüzgârın yuvarlattığı çöl kumunun
//   iyi bağlanmaması; kumun ırmak, göl ve kıyılardan alınması ve doğaya zararı (yerleşik; BM Çevre Programı raporlarında
//   anılır, ad yok). Aykırı cümlede: bazı kum tepelerinin yılda metrelerce yer değiştirebilmesi ("can move many metres").
// - d09-b5: Venüs: ekseni çevresindeki bir turun (yaklaşık 243 gün) Güneş çevresindeki turdan (yaklaşık 225 gün) uzun
//   sürmesi (sayı yok); ters yönde dönme ve Güneş'in batıdan doğacak olması; nedenin bilinmemesi, büyük çarpışma ve Güneş'in
//   yoğun atmosfer üzerindeki çekimi önerileri (temkinli: "may have", "suggestion"). Aykırı cümlede: kalın bulutların ışığı
//   yansıtması ve gökyüzündeki en parlak gezegen olması.
// - d09-b6: Gökkuşağı: Güneş gözlemcinin arkasındayken; damlaya girişte kırılma ve renklere ayrılma, arka yüzden yansıma,
//   çıkışta yeniden kırılma; kırmızının daha yüksek, morun daha alçak damlalardan gelmesi (yerleşik). Aykırı cümlede: çift
//   gökkuşağının dış yayında renklerin ters sırada olması.
// - Tek sorular (yerleşik bilgi; sayı yalnız temkinli ve yuvarlak): k3 altının ışık geçirecek kadar ince dövülebilmesi;
//   k4 Güneş'in Güneş sistemi kütlesinin yüzde 99'undan fazlası olması; g1 yalnız tuzlu suda yaşayan canlıların fosillerinden
//   eski bir deniz çıkarımı (kurgusal bölge); g2 buzda binlerce yıl kalmış bakterilerden bazılarının çözülünce üremesi
//   (genel; ad ve yer yok); g3 bitkilerin kuraklıkta yaprak gözeneklerini kapatması; g4 elmas ve grafitin yalnız karbondan
//   oluşması ve farkın atom dizilişinden gelmesi; g5 titanyumun korozyona dayanıklılığı; g6 Ay'da gece ile gündüz arasında iki yüz dereceyi aşan sıcaklık farkı;
//   g7 yarasaların yankıya dayanması ama kör olmaması; g8 gemi gövdelerine kaya midyesi ve yosun tutmasını önleyen boyalar; g9
//   tırtılın pupa evresinde vücudunun büyük kısmının çözülüp ergin böcek olarak yeniden kurulması; g11 bazı yılanların ısıyı algılaması (çukurlu engereklerde, pitonlarda ve boalarda; cümlede ad
//   yok); g12 bilinen tür sayısında böceklerin başta gelmesi (yaklaşık bir milyon tanımlı tür; "around a million"); g13
//   virüslerin çoğalmak için hücreye girmesi; g14 likenlerin mantar ve alg ortaklığı; t1 Güneş'in görünür hareketinin
//   Dünya'nın dönüşünden doğması; t2 örümcek ipeğinin ağırlığına göre çelikten güçlü olduğunun söylenmesi ("is often said");
//   t3 saf suyun elektriği iyi iletmemesi, musluk suyundaki minerallerin iletkenliği artırması; t5 tropik yağmur ormanlarının
//   karaların küçük bir bölümünü kaplayıp kara türlerinin yarıdan fazlasını barındırdığının düşünülmesi ("are thought to");
//   t6 bazı yılan ve kertenkelelerin canlı doğurması; t7 Uluslararası Uzay İstasyonu yüksekliğinde çekimin yerdekine yakın
//   olması (yaklaşık yüzde 90; cümlede sayı yok), yaklaşık doksan dakikalık tur (çeldiricide); t8 yıldızların uzaydan
//   titreşmeden görünmesi; t9 çam yapraklarının su tutması; t10 alçak yörüngede seyrek havanın uyduyu yavaşlatması;
//   c1 küçük memelilerde yüzey alanı-hacim oranı ve ısı kaybı; c2 Europa'nın buz kabuğu altında okyanus bulunduğu kanaati
//   ("is thought to"); c4 alüminyum ve bakırın mıknatısla çekilmemesi; c6 köpekbalıklarının avın kas elektriğini kum
//   altında bile algılaması (Kalmijn, 1970'ler; cümlede ad yok); c7 sıcak bölge tilkilerinin daha büyük kulakları (çöl
//   tilkisi ve kutup tilkisi; ad yok; "generally"); c9 Jüpiter'in kütlesinin öteki gezegenlerin toplamının iki katından fazla
//   olması (yaklaşık 2,5 kat); c11 çeliğin ısıtılıp hızla soğutulunca sertleşip kırılganlaşabilmesi (su verme; "can");
//   c12 bazı balinaların seslerinin yüzlerce kilometre öteden duyulabilmesinin 20. yüzyılda fark edilmesi.
// - Öteki öğelerde ad, sayı ya da tarih yok; cümleler genel bilgi ya da kurgusaldır.

const T = 'taslak';
const U = 'Tam deneme 9 (YÖKDİL Fen)';
const C = 'fen';

const sorular = [
  // ---------- 1–6: kelime ----------
  { id: 'd09-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['isim'],
    q: 'Many flowering plants rely on a single species of insect to carry their pollen, so a sharp ---- in the numbers of that insect can put the plant itself at risk.',
    options: ['abundance', 'emergence', 'camouflage', 'adaptation', 'decline'], answer: 4,
    explain: "Bitki tozlaşmak için tek bir böcek türüne dayanıyorsa, o böceğin sayısındaki sert bir düşüş bitkiyi de tehlikeye sokar: 'a sharp decline in the numbers' (sayıda keskin bir düşüş). 'Abundance' (bolluk) en güçlü çeldiricidir, çünkü böceğin sayısıyla ilgili bir isimdir; ama böceğin bol olması bitkiyi tehlikeye sokmaz, tersine korur. 'Emergence' (ortaya çıkış), 'camouflage' (kamuflaj) ve 'adaptation' (uyum) da sayıdaki bir değişimi anlatmaz ve 'sharp … in the numbers' kalıbına oturmaz." },
  { id: 'd09-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['isim'],
    q: 'Before the self-driving software was allowed onto public roads, engineers ran it through millions of simulated journeys to test its ---- in unusual situations.',
    options: ['popularity', 'ownership', 'scarcity', 'reliability', 'symmetry'], answer: 3,
    explain: "Mühendisler yazılımı milyonlarca benzetim yolculuğundan geçirerek alışılmadık durumlarda ne kadar güvenilir çalıştığını sınıyor: 'test its reliability' (güvenilirliğini sınamak). 'Popularity' (beğenilme) en güçlü çeldiricidir, çünkü yeni bir ürünle ilgili bir isimdir; ama benzetim yolculukları beğeniyi değil, aracın doğru davranıp davranmadığını ölçer. 'Ownership' (sahiplik), 'scarcity' (kıtlık) ve 'symmetry' (bakışım) de bir yazılımın sınanan niteliği olamaz." },
  { id: 'd09-k3', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['sıfat'],
    q: 'Gold is so ---- that a small piece of it can be hammered into a sheet thin enough for light to pass through.',
    options: ['brittle', 'volatile', 'porous', 'abundant', 'malleable'], answer: 4,
    explain: "Cümlenin ikinci yarısı sözcüğü tanımlıyor: küçük bir altın parçası, ışığın geçebileceği kadar ince bir levha olana dek dövülebilir. Kırılmadan dövülüp inceltilebilen metale 'malleable' (dövülebilir) denir. 'Brittle' (kırılgan) en güçlü çeldiricidir, çünkü o da bir malzemenin darbeye nasıl tepki verdiğini anlatır; ama kırılgan bir madde dövülünce incelmez, parçalanır. 'Volatile' (uçucu), 'porous' (gözenekli) ve 'abundant' (bol) dövülerek incelmeyle ilgili değildir." },
  { id: 'd09-k4', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['zarf'],
    q: 'The Sun ---- contains more than 99 per cent of all the mass in the solar system, leaving only a tiny share for the planets, moons and asteroids.',
    options: ['barely', 'alone', 'rarely', 'partly', 'formerly'], answer: 1,
    explain: "Cümle Güneş'i bütün öteki gök cisimlerinden ayırıyor: Güneş tek başına Güneş sistemindeki kütlenin yüzde 99'undan fazlasını içerir, gezegenlere, uydulara ve asteroitlere çok küçük bir pay kalır. İsimden hemen sonra gelip 'yalnız o, tek başına' anlamı veren sözcük 'alone' olur. 'Partly' (kısmen) en güçlü çeldiricidir, çünkü bir pay bildirir; ama 'yüzde 99'dan fazlası' zaten bir paydır ve 'kısmen içerir' bu sayıyla anlamsız kalır. 'Barely' (ancak, güçbela) 'more than' ile çelişir; 'rarely' (seyrek) ve 'formerly' (eskiden) de süren bir gerçeği anlatmaz." },
  { id: 'd09-k5', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['fiil'],
    q: 'Farmers in some windy, dry regions plant long rows of trees along the edges of their fields to ---- the force of the wind and keep the soil from blowing away.',
    options: ['exacerbate', 'mitigate', 'emulate', 'generate', 'forecast'], answer: 1,
    explain: "Ağaç sıraları toprağın rüzgârla savrulmasını önlemek için dikiliyor; bunu ancak rüzgârın gücünü hafifleterek yapabilir: 'mitigate the force of the wind' (rüzgârın gücünü hafifletmek, etkisini azaltmak). 'Exacerbate' (kötüleştirmek, şiddetlendirmek) en güçlü çeldiricidir, çünkü o da bir etkinin derecesini değiştiren biçimsel bir fiildir; ama anlamı tersine çevirir ve toprağı daha çok savurur. 'Emulate' (öykünmek), 'generate' (üretmek) ve 'forecast' (önceden kestirmek) de toprağı korumaya yaramaz." },
  { id: 'd09-k6', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['öbek fiil'],
    q: 'During the long winter, when there is little or nothing to eat, some animals ---- the fat that they built up by feeding heavily in autumn.',
    options: ['give up', 'put off', 'live on', 'take over', 'turn down'], answer: 2,
    explain: "Kışın yiyecek yok denecek kadar az; hayvanlar sonbaharda bol beslenerek biriktirdikleri yağla geçinir: 'live on something' (bir şeyle geçinmek, bir şeyle beslenerek yaşamak). 'Give up' (bırakmak, vazgeçmek) en güçlü çeldiricidir, çünkü yağı elden çıkarmayı düşündürebilir; ama yağın kışın vazgeçilecek değil, kullanılacak bir kaynak olduğunu söyleyen cümleyle çelişir. 'Put off' (ertelemek), 'take over' (devralmak) ve 'turn down' (geri çevirmek) de yağla yaşamayı anlatmaz." },

  // ---------- 7–20: dil bilgisi ----------
  { id: 'd09-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['kip geçmiş (modal perfect)'],
    q: 'The rocks in this desert contain the fossils of many fish and shellfish that could live only in salt water, so the whole region ---- covered by a shallow sea at some point in the distant past.',
    options: ['must have been', 'cannot have been', 'need not have been', 'ought to have been', 'might be'], answer: 0,
    explain: "Cümle güçlü bir kanıttan geçmişe dair bir sonuç çıkarıyor: kayalarda yalnız tuzlu suda yaşayabilen canlıların fosilleri var, öyleyse bölge uzak geçmişte bir noktada sığ bir denizle kaplı olmalı. Geçmişe dair güçlü çıkarım 'must have been' ile kurulur. 'Cannot have been' de geçmişe dair bir çıkarımdır, ama kanıtın tersini söyler. 'Need not have been' bir şeyin gereksiz yere yapıldığını, 'ought to have been' de beklenen ama olmamış bir durumu anlatır; ikisi de fosillerden çıkarılan bir sonuç değildir. 'Might be' ise şimdiki bir olasılık bildirir ve 'in the distant past' ile uyuşmaz." },
  { id: 'd09-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['ortaç öbeği'],
    q: '---- in ice for thousands of years, the bacteria were not expected to revive, yet some of them began to grow once the samples were carefully thawed.',
    options: ['Having trapped', 'Trapping', 'To trap', 'Having been trapped', 'Had been trapped'], answer: 3,
    explain: "Boşluk ana cümlenin öznesi olan bakterilerle ilgili bir ortaç öbeği açıyor. Bakteriler buzu hapsetmedi, buzda hapsoldu; demek ki edilgen gerekir. Hapsolma da beklentiden önce, binlerce yıl sürmüş bir durumdur; bu yüzden geçmiş edilgen ortaç: 'Having been trapped' (binlerce yıl buzda kapalı kalmış olan). 'Having trapped' zamanı doğru verir, ama etkendir ve bakterileri bir şeyi hapseden yapar; 'Trapping' de aynı yanlışa düşer. 'To trap' bir amaç bildirir. 'Had been trapped' ise öznesi ve bağlacı olmayan çekimli bir fiildir; bir ortaç öbeğinin yerine geçemez." },
  { id: 'd09-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['çok sözcüklü edat'],
    q: 'Many plants close the tiny pores on their leaves ---- drought, which reduces the amount of water they lose but also slows their growth.',
    options: ['in favour of', 'in charge of', 'in terms of', 'in place of', 'in response to'], answer: 4,
    explain: "Bitkiler kuraklığa karşılık olarak yapraklarındaki gözenekleri kapatır; bir tepkinin neye karşı verildiği 'in response to' (… e tepki olarak, … karşısında) ile anlatılır. 'In terms of' (… bakımından) en güçlü çeldiricidir, çünkü dil bilgisi açısından uyar; ama kuraklığı bir tepkinin nedeni değil, bir ölçüt gibi gösterir. 'In favour of' (… den yana), 'in charge of' (… den sorumlu) ve 'in place of' (… yerine) de kuraklıkla gözeneklerin kapanması arasında bir bağ kurmaz." },
  { id: 'd09-g4', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['edat'],
    q: 'The striking differences between diamond and graphite are attributable ---- the way their atoms are arranged, since both consist entirely of carbon.',
    options: ['for', 'to', 'with', 'from', 'on'], answer: 1,
    explain: "'Be attributable to something' (bir şeyden kaynaklanmak, bir şeye bağlanabilmek) kalıplaşmış bir sıfat-edat bağıdır: elmas ile grafit arasındaki çarpıcı farklar atomlarının diziliş biçiminden kaynaklanır, çünkü ikisi de yalnız karbondan oluşur. 'From' en güçlü çeldiricidir, çünkü yakın anlamlı 'result from' ve 'stem from' kalıplarını çağrıştırır; ama 'attributable' nedeni 'to' ile bağlar. 'For', 'with' ve 'on' da 'attributable' ile kullanılmaz." },
  { id: 'd09-g5', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['edat'],
    q: 'Titanium is almost impervious ---- corrosion in sea water, which is one reason why it is chosen for parts that must stay submerged for long periods.',
    options: ['from', 'to', 'of', 'for', 'with'], answer: 1,
    explain: "'Impervious to something' (bir şeyden etkilenmeyen, bir şeye karşı geçirimsiz) kalıplaşmış bir sıfat-edat bağıdır: titanyum deniz suyunda aşınmadan (korozyondan) neredeyse hiç etkilenmez; uzun süre suyun altında kalacak parçalarda seçilmesinin bir nedeni de budur. 'From' en güçlü çeldiricidir, çünkü korunma bildiren 'safe from' ve 'protected from' kalıplarını çağrıştırır; ama 'impervious' etkilenilmeyen şeyi 'to' ile bağlar. 'Of', 'for' ve 'with' de bu sıfatla kullanılmaz." },
  { id: 'd09-g6', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['bağlaç'],
    q: '---- the Moon has almost no atmosphere to trap heat and spread it around, the temperature on its surface can differ by more than two hundred degrees between day and night.',
    options: ['Although', 'Unless', 'Because', 'So that', 'As if'], answer: 2,
    explain: "Birinci yan cümle bir neden, ana cümle onun sonucunu veriyor: Ay'da ısıyı tutup yayacak bir atmosfer neredeyse yok, bu yüzden yüzeyinde gece ile gündüz arasındaki sıcaklık farkı iki yüz dereceyi aşabilir. Neden 'Because' ile bağlanır. 'Although' (… e karşın) en güçlü çeldiricidir, çünkü iki yan cümleyi dil bilgisi açısından bağlar; ama atmosferin yokluğu büyük sıcaklık farkıyla çelişmez, onu açıklar. 'Unless' (… medikçe) olumsuz bir koşul, 'So that' (… sın diye) bir amaç, 'As if' (sanki) bir benzetme kurar." },
  { id: 'd09-g7', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlantı zarfı'],
    q: 'Bats rely heavily on the echoes of their own calls to find insects in the dark; ----, they are not blind, and many species can see quite well.',
    options: ['consequently', 'nevertheless', 'for instance', 'likewise', 'in other words'], answer: 1,
    explain: "Noktalı virgülden önce yarasaların karanlıkta yollarını büyük ölçüde yankıyla bulduğu söyleniyor; bu, gözlerinin işe yaramadığını düşündürebilir. Sonra bu beklentinin tersi geliyor: yarasalar kör değildir, birçok tür oldukça iyi görür. Beklenenin tersi 'nevertheless' (yine de, buna karşın) ile bağlanır. 'Consequently' (bu yüzden) en güçlü çeldiricidir, çünkü iki bölümü bağlar; ama yankıya dayanmak iyi görmenin nedeni değildir. 'For instance' (örneğin) bir örnek, 'likewise' (aynı biçimde) bir benzerlik, 'in other words' (başka bir deyişle) aynı düşünceyi yeniden söyleme bildirir." },
  { id: 'd09-g8', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['zarf cümleciği'],
    q: 'Shipbuilders often coat the bottoms of ships with special paints ---- barnacles and seaweed cannot easily attach themselves to the hull.',
    options: ['even though', 'as if', 'unless', 'so that', 'whereas'], answer: 3,
    explain: "Özel boyanın bir amacı var: kaya midyeleri ve deniz yosunları gövdeye kolayca tutunamasın. Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' (… sın diye) olur. 'Unless' (… medikçe) en güçlü çeldiricidir, çünkü bir koşul kurar; ama boyamayı canlıların tutunamadığı durumlara bağlar ve mantığı ters çevirir. 'Even though' (… e karşın) bir karşıtlık, 'as if' (sanki) bir benzetme, 'whereas' (oysa) iki durumun karşılaştırmasını bildirir." },
  { id: 'd09-g9', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: '---- a caterpillar has become a pupa, much of its body breaks down and is rebuilt into the very different body of an adult insect.',
    options: ['Unless', 'Although', 'Once', 'Whereas', 'Even if'], answer: 2,
    explain: "Cümle iki aşamayı sıraya koyuyor: tırtıl pupaya dönüşünce vücudunun büyük kısmı çözülür ve çok farklı bir ergin böcek vücudu olarak yeniden kurulur. Bir olay tamamlandıktan sonra ötekinin başladığını 'Once' (… ince, … dikten sonra) bildirir. 'Even if' (… se bile) en güçlü çeldiricidir, çünkü o da bir koşul ya da olasılık kurar; ama pupaya dönüşmeyi bu değişime engel gibi gösterir, oysa değişim pupa evresinde olur. 'Unless' (… medikçe) aynı ilişkiyi tersine çevirir. 'Although' (… e karşın) ve 'Whereas' (oysa) da bir karşıtlık kurar." },
  { id: 'd09-g10', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['devrik yapı'],
    q: 'No sooner had the volcano begun to erupt ---- ash started falling on villages dozens of kilometres away.',
    options: ['when', 'that', 'then', 'as', 'than'], answer: 4,
    explain: "'No sooner … than' (… er … mez) kalıplaşmış bir yapıdır: yanardağ püskürmeye başlar başlamaz kilometrelerce ötedeki köylere kül yağmaya başladı. 'No sooner' cümle başına gelince yardımcı fiil öne geçer ('had the volcano begun') ve ikinci bölüm 'than' ile bağlanır. 'When' en güçlü çeldiricidir, çünkü aynı anlamdaki 'Hardly had … when' kalıbında kullanılır; ama 'No sooner' ile kurulmaz. 'That', 'then' ve 'as' da bu yapının ikinci bölümünü bağlamaz." },
  { id: 'd09-g11', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'Some snakes can sense the heat given off by warm-blooded animals, so even on a pitch-dark night a mouse is far from invisible ---- them.',
    options: ['with', 'by', 'from', 'to', 'for'], answer: 3,
    explain: "'Invisible to someone' (birine görünmez) kalıplaşmış bir sıfat-edat bağıdır: bazı yılanlar sıcakkanlı hayvanların yaydığı ısıyı algılayabildiği için zifiri karanlıkta bile bir fare onlara görünmez olmaktan çok uzaktır. 'By' en güçlü çeldiricidir, çünkü edilgen yapılarda işi yapanı gösterir ve yılanları gören olarak düşündürür; ama 'invisible' kime görünmediğini 'to' ile bildirir. 'With', 'from' ve 'for' da bu anlamı vermez." },
  { id: 'd09-g12', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['çok sözcüklü edat'],
    q: '---- the number of known species, insects are the most varied group of animals on Earth, with around a million already described by scientists.',
    options: ['In spite of', 'On behalf of', 'In place of', 'In terms of', 'By way of'], answer: 3,
    explain: "Cümle böcekleri bir ölçüte göre değerlendiriyor: bilinen tür sayısı bakımından böcekler dünyadaki en çeşitli hayvan grubudur. Hangi açıdan bakıldığını 'In terms of' (… bakımından, … açısından) bildirir. 'In spite of' (… e karşın) en güçlü çeldiricidir, çünkü dil bilgisi açısından uyar; ama tür sayısını çeşitliliğe engel gibi gösterir, oysa çeşitliliğin ölçüsü odur. 'On behalf of' (… adına), 'In place of' (… yerine) ve 'By way of' (… yoluyla, … olarak) da bir ölçüt bildirmez." },
  { id: 'd09-g13', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['eşleşik bağlaç'],
    q: 'Viruses can ---- grow ---- reproduce on their own; they have to enter a living cell and use its machinery to make copies of themselves.',
    options: ['either / or', 'both / and', 'whether / or', 'rather / than', 'neither / nor'], answer: 4,
    explain: "Noktalı virgülden sonraki bölüm ipucu veriyor: virüsler kendilerini çoğaltmak için canlı bir hücreye girmek zorundadır. Demek ki kendi başlarına ne büyüyebilir ne de çoğalabilirler: 'neither … nor' (ne … ne de). 'Either … or' (ya … ya da) en güçlü çeldiricidir, çünkü dil bilgisi açısından uyar; ama virüslerin bu iki işten birini kendi başına yapabildiğini söyler ve ikinci bölümle çelişir. 'Both … and' ikisini de yapabildiklerini söyler. 'Whether … or' bir belirsizlik bildirir; 'rather … than' de iki işten birinin yeğlendiğini anlatır." },
  { id: 'd09-g14', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['sıfat cümleciği'],
    q: 'Lichens are partnerships between a fungus and an alga, ---- combined abilities allow them to grow on bare rock where neither partner could easily survive alone.',
    options: ['which', 'whose', 'where', 'that', 'whom'], answer: 1,
    explain: "Boşluktan sonra bir isim geliyor ('combined abilities') ve bu yetenekler ortaklıklara, yani likenlere aittir: likenlerin birleşik yetenekleri onların çıplak kayada yetişmesini sağlar. İyelik bildiren ilgi zamiri 'whose' olur. 'Which' en güçlü çeldiricidir, çünkü virgülden sonra nesneleri niteler; ama cümlecikte bir özne ya da nesnenin yerini tutmalıdır, oysa öznesi ('combined abilities') ve nesnesi ('them') zaten var. 'Where' bir yer bildirir; 'that' virgülden sonra kullanılmaz; 'whom' de insanlar için kullanılır ve ardından isim almaz." },

  // ---------- 21–30: boşluklu metin ----------
  { id: 'd09-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Bulanık bir çözeltinin gücü',
    text: 'In 1965, Stephanie Kwolek, a chemist working for the DuPont company in the United States, was searching for a light but very strong fibre that could replace the steel used to reinforce car tyres. One day she produced a polymer solution that looked quite unlike the thick, clear liquids her team usually worked with: it was thin and cloudy, and many chemists would probably have thrown it away. Kwolek, however, was curious (1) ---- it, and she persuaded a reluctant colleague to spin it into fibres. The results were astonishing. The new fibres were far stronger and stiffer than any fibre (2) ---- the laboratory had produced before. (3) ----, turning the discovery into a product proved slow, and the material, named Kevlar, did not go on sale until the early 1970s. Weight for weight, it is often described as about five times stronger than steel, and it soon found uses (4) ---- tyres, including ropes, protective gloves and the body armour worn by police officers. In later interviews, Kwolek said that few things satisfied her more than knowing that her discovery (5) ---- to save the lives of many people.',
    steps: [
      { konu: ['edat'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['for', 'with', 'about', 'at', 'on'], answer: 2,
        explain: "'Curious about something' (bir şeyi merak etmek) kalıplaşmış bir sıfat-edat bağıdır: Kwolek bu ince ve bulanık çözeltiyi merak etti. 'For' en güçlü çeldiricidir, çünkü 'eager for' gibi istek bildiren kalıpları çağrıştırır; ama 'curious' merak edilen şeyi 'about' ile bağlar. 'With', 'at' ve 'on' da 'curious' ile kullanılmaz." },
      { konu: ['sıfat cümleciği'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['which', 'whose', 'where', 'what', 'who'], answer: 0,
        explain: "Boşluk 'any fibre' öbeğini niteleyen bir sıfat cümleciği açıyor: laboratuvarın daha önce ürettiği herhangi bir lif. Cümlecikte lif 'produced' fiilinin nesnesidir ve nesneler için 'which' kullanılır. 'Whose' en güçlü çeldiricidir, çünkü o da bir ismi niteler; ama ardından bir isim ister ('whose strength'), oysa burada hemen 'the laboratory' ile cümleciğin öznesi geliyor ve 'produced' nesnesiz kalıyor. 'Where' bir yer, 'who' bir insan bildirir; 'what' de bir ismi nitelemez." },
      { konu: ['bağlantı zarfı'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['Even so', 'Likewise', 'For example', 'In other words', 'Otherwise'], answer: 0,
        explain: "Önceki cümleler sonuçların şaşırtıcı olduğunu ve liflerin çok güçlü çıktığını söylüyor; boşluklu cümle ise beklenenin tersini getiriyor: buluşu bir ürüne dönüştürmek yavaş oldu ve malzeme ancak 1970'lerin başında satışa çıktı. Bu karşıtlık 'Even so' (yine de, buna karşın) ile bağlanır. 'Likewise' (aynı biçimde) en güçlü çeldiricidir, çünkü iki cümleyi birbirine bağlar; ama ikinci cümleyi birincinin benzeri gibi gösterir. 'For example' (örneğin) bir örnek, 'In other words' (başka bir deyişle) yeniden anlatım, 'Otherwise' (yoksa) tersi durumda olacak olanı bildirir." },
      { konu: ['edat'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['behind', 'between', 'beneath', 'against', 'beyond'], answer: 4,
        explain: "Malzeme ilk düşünülen iş olan araba lastiklerinin ötesinde, başka alanlarda da kullanıldı: halat, koruyucu eldiven ve polislerin giydiği yelek. Bir sınırın ötesine geçmeyi 'beyond' (… in ötesinde) bildirir: 'uses beyond tyres'. 'Behind' (… in arkasında) en güçlü çeldiricidir, çünkü o da bir yer edatıdır; ama lastiklerin gerisinde kalan bir kullanım anlamsızdır. 'Between' iki şey ister, 'beneath' (… in altında) ve 'against' (… e karşı) de 'including' ile sıralanan yeni kullanımları bağlamaz." },
      { konu: ['zaman uyumu'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['was helped', 'had helped', 'will help', 'would have helped', 'has been helped'], answer: 1,
        explain: "Cümle geçmişte söylenmiş bir sözü aktarıyor ('Kwolek said that few things satisfied her'); buluşun birçok insanın hayatını kurtarmaya yardım etmesi bu sözden önce olmuştur. Aktarılan geçmişteki bir andan daha önceki iş 'had helped' ile verilir. 'Would have helped' en güçlü çeldiricidir, çünkü geçmişe uzanan bir yapı kullanır; ama gerçekleşmemiş bir durumu anlatır, oysa yelekler gerçekten hayat kurtardı. 'Will help' gelecek zamandır ve geçmiş zamanlı aktarmaya uymaz. 'Was helped' ve 'has been helped' de edilgendir ve buluşu yardım edilen taraf yapar." },
    ] },
  { id: 'd09-z2', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Kutup ışıklarının kaynağı',
    text: "The shimmering curtains of light known as auroras are most often seen in the night sky at high latitudes, close to the Arctic and the Antarctic. They are caused (1) ---- activity on the Sun, which constantly releases a stream of charged particles into space. When these particles reach the Earth, most of them are turned aside by the planet's magnetic field, (2) ---- acts as a protective shield. Some, however, are guided along the field towards the polar regions, where they collide (3) ---- atoms and molecules high in the atmosphere. These collisions give the gases extra energy, which they then release as light. The colour of the light depends on the gas involved: oxygen usually produces green or, at greater heights, red light, (4) ---- nitrogen can add shades of blue and purple. During powerful solar storms, the stream of particles becomes much stronger, and auroras may become (5) ---- far from the poles, in places where people rarely have the chance to see them.",
    steps: [
      { konu: ['edat'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['by', 'from', 'with', 'of', 'to'], answer: 0,
        explain: "Boşluk edilgen bir fiilden sonra geliyor ('are caused') ve kutup ışıklarına neyin yol açtığını söylüyor: Güneş'teki etkinlik. Edilgen yapıda işi yapan ya da nedeni 'by' bildirir: 'caused by'. 'From' en güçlü çeldiricidir, çünkü kaynak bildirir ve parçacıklar gerçekten Güneş'ten gelir; ama 'caused' nedeni 'from' ile değil 'by' ile bağlar. 'With', 'of' ve 'to' da 'are caused' ile nedeni göstermez." },
      { konu: ['sıfat cümleciği'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['which', 'where', 'whose', 'what', 'who'], answer: 0,
        explain: "Virgülden sonraki cümlecik 'the planet's magnetic field' öbeğini niteliyor ve cümlecikte manyetik alan öznedir: koruyucu bir kalkan işi gören manyetik alan. Virgülden sonra bir nesneyi özne olarak niteleyen ilgi zamiri 'which' olur. 'Where' en güçlü çeldiricidir, çünkü manyetik alan bir bölge gibi düşünülebilir; ama 'where' ardından tam bir cümle ister, oysa burada 'acts' fiilinin öznesi eksik. 'Whose' ardından bir isim ister, 'who' insanlar için kullanılır; 'what' de bir ismi nitelemez." },
      { konu: ['edat'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['at', 'to', 'with', 'for', 'over'], answer: 2,
        explain: "'Collide with something' (bir şeyle çarpışmak) kalıplaşmış bir fiil-edat bağıdır: parçacıklar atmosferin yükseklerindeki atom ve moleküllerle çarpışır; sonraki cümle de 'These collisions' diye bu çarpışmayı sürdürüyor. 'At' en güçlü çeldiricidir, çünkü bir hedef ya da nokta bildirir; ama 'collide' bu anlamda 'at' almaz. 'To', 'for' ve 'over' da çarpışılan şeyi göstermez." },
      { konu: ['bağlaç'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['unless', 'so that', 'while', 'as if', 'because'], answer: 2,
        explain: "Cümle iki gazın verdiği renkleri karşılaştırıyor: oksijen genellikle yeşil, daha yüksekte kırmızı ışık verir; azot ise mavi ve mor tonlar katabilir. İki durumu yan yana koyup karşılaştıran bağlaç 'while' (… iken, oysa) olur. 'Because' (çünkü) en güçlü çeldiricidir, çünkü iki yan cümleyi bağlar; ama azotun mavi ton katması oksijenin yeşil ışık vermesinin nedeni değildir. 'Unless' (… medikçe) bir koşul, 'so that' (… sın diye) bir amaç, 'as if' (sanki) bir benzetme kurar." },
      { konu: ['sıfat'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['absent', 'fragile', 'obsolete', 'reluctant', 'visible'], answer: 4,
        explain: "Cümle güçlü Güneş fırtınalarında kutup ışıklarının kutuplardan uzak yerlerde de görülebildiğini söylüyor: 'in places where people rarely have the chance to see them' (insanların onları görme fırsatını pek bulamadığı yerlerde). Bu, 'visible' (görülebilir) sözcüğüyle tamamlanır. 'Absent' (olmayan) en güçlü çeldiricidir, çünkü kutuplardan uzak yerlerde ışıkların genellikle görülmediği doğrudur; ama cümle parçacık akışının güçlendiğini söylüyor, bu da ışıkları azaltmaz, artırır. 'Fragile' (kırılgan), 'obsolete' (eskimiş) ve 'reluctant' (isteksiz) de bağlama uymaz." },
    ] },

  // ---------- 31–41: cümle tamamlama ----------
  { id: 'd09-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although the Sun appears to travel across the sky from east to west every day, ----.',
    options: [
      'this movement is really caused by the Earth turning on its axis',
      'it rises at a slightly different point on the horizon each morning',
      'the time of sunset changes gradually over the course of the year',
      'its path across the sky is higher in summer than it is in winter',
      'it looks far larger than any of the stars that are visible at night',
    ], answer: 0,
    explain: "'Although' görünüş ile gerçek arasında bir karşıtlık ister: Güneş her gün gökyüzünde doğudan batıya gidiyor gibi görünür, ama bu hareketin asıl nedeni Dünya'nın kendi ekseni çevresinde dönmesidir. Görünüşü düzelten bilgi yalnız bu tamamlamada var. Güneş'in her sabah ufkun biraz farklı bir noktasından doğması en güçlü çeldiricidir, çünkü Güneş'in gökteki hareketiyle ilgilidir; ama görünen hareketi sürdürür, ona karşıt bir gerçek getirmez. Gün batımı saatinin değişmesi ve yazın daha yüksekten geçmesi de aynı görünüşe ek ayrıntıdır; yıldızlardan büyük görünmesi ise girişle hiçbir karşıtlık kurmaz." },
  { id: 'd09-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Even though a single thread of spider silk is far thinner than a human hair, ----.',
    options: [
      'spiders can produce several kinds of silk for different tasks',
      'it is made of proteins produced in glands in the abdomen',
      'weight for weight it is often said to be stronger than steel',
      'many spiders eat their old webs in order to reuse the silk',
      'the webs of some species are built anew every single day',
    ], answer: 2,
    explain: "'Even though' beklenmedik bir durum ister: örümcek ipeğinin tek bir teli insan saçından çok daha incedir, buna karşın ağırlığına göre çelikten güçlü olduğu sıkça söylenir. İncelik ile güç arasındaki karşıtlığı yalnız bu tamamlama kuruyor; 'often said' de bilgiyi temkinli veriyor. Örümceklerin farklı işler için birkaç tür ipek üretmesi en güçlü çeldiricidir, çünkü ipekle ilgili doğru bir bilgidir; ama telin inceliğiyle bir karşıtlık kurmaz. İpeğin karındaki bezlerde üretilen proteinlerden oluşması, eski ağların yenmesi ve bazı ağların her gün yeniden örülmesi de inceliğe karşıt bir durum getirmez." },
  { id: 'd09-t3', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'While pure water is a poor conductor of electricity, ----.',
    options: [
      'it freezes at zero degrees Celsius at normal atmospheric pressure',
      'each of its molecules is made of two hydrogen atoms and an oxygen',
      'it can be produced in a laboratory by collecting and cooling steam',
      'tap water conducts it fairly well because of the minerals in it',
      'it has no colour, taste or smell when kept in a clean container',
    ], answer: 3,
    explain: "'While' burada iki durumu karşılaştırıyor: saf su elektriği iyi iletmez, musluk suyu ise içinde çözünmüş mineraller yüzünden elektriği oldukça iyi iletir. Karşılaştırmanın öteki ucu yalnız bu tamamlamada var. Saf suyun laboratuvarda buharı toplayıp soğutarak elde edilebilmesi en güçlü çeldiricidir, çünkü saf suyla ilgilidir; ama elektrik iletkenliğiyle bir karşıtlık kurmaz. Donma noktası, molekülün yapısı ve renksiz, tatsız, kokusuz olması da saf suyla ilgili ek bilgilerdir, girişe karşıt bir durum getirmez." },
  { id: 'd09-t4', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Whereas the magnetic tapes used by early computers had to be wound forward until they reached the right place, ----.',
    options: [
      'modern solid-state drives can reach any stored item almost at once',
      'the machines that read them were often as large as a wardrobe',
      'programmers in that period often wrote instructions on punched cards',
      'finding a file near the end of a long reel could take several minutes',
      'the reels had to be stored carefully, away from both heat and dust',
    ], answer: 0,
    explain: "'Whereas' iki şeyi karşılaştırır. Kök eski bilgisayarların manyetik bantlarını anlatıyor: bant doğru yere gelene dek ileri sarılmalıydı. Karşılaştırmanın öteki ucu bugünkü bir saklama aracı olmalı: katı hâl sürücüleri saklanan herhangi bir veriye neredeyse anında ulaşır. Uzun bir makaranın sonundaki dosyayı bulmanın dakikalar sürmesi en güçlü çeldiricidir, çünkü ileri sarma işiyle doğrudan ilgilidir; ama aynı tarafta kalır ve bandın yavaşlığını sürdürür. Okuyucu makinelerin büyüklüğü, delikli kartlar ve makaraların özenle saklanması da eski düzenin öteki ayrıntılarıdır." },
  { id: 'd09-t5', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: "Despite covering only a small share of the Earth's land surface, tropical rainforests ----.",
    options: [
      'are thought to contain more than half of all land species',
      'receive heavy rain during most months of the year',
      'lie mainly in a broad belt running close to the equator',
      'often grow on soils that are rather poor in essential nutrients',
      'have been cleared at a rapid rate over the past few decades',
    ], answer: 0,
    explain: "'Despite' küçüklükle çelişen büyük bir şey bekler: tropik yağmur ormanları karaların küçük bir kısmını kaplar, buna karşın kara türlerinin yarıdan fazlasını barındırdığı düşünülür. 'Are thought to' bu tahmini temkinli veriyor. Toprağın besince fakir olması en güçlü çeldiricidir, çünkü yağmur ormanlarıyla ilgili şaşırtıcı bir bilgidir; ama kapladıkları alanın küçüklüğüyle bir karşıtlık kurmaz. Bol yağış, ekvator kuşağında bulunma ve hızla kesilme de alanın küçüklüğüyle çelişen bir durum anlatmaz." },
  { id: 'd09-t6', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['karşıtlık'],
    q: 'Unlike most reptiles, which lay eggs, ----.',
    options: [
      'crocodiles bury their eggs in sand or rotting plants',
      'some snakes and lizards give birth to live young',
      'birds also lay eggs, protected by a hard shell',
      'all reptiles rely on outside heat to stay warm',
      'many tortoises can live for over a hundred years',
    ], answer: 1,
    explain: "'Unlike' ana cümlenin öznesini yumurtlayan sürüngenlerden ayırır: bazı yılanlar ve kertenkeleler yumurtlamaz, canlı yavru doğurur. Bu tamamlama girişteki özelliğe karşıt bir özellik getiriyor. Kuşların da yumurtlaması en güçlü çeldiricidir, çünkü yumurtadan söz ediyor; ama 'Unlike' ile kurulan bir karşıtlığın içinde 'also' ile benzerlik bildirir ve kendi içinde çelişir. Timsahların yumurtalarını gömmesi de yumurtlayan sürüngenlerin yanında yer alır. Bütün sürüngenlerin dış ısıya dayanması ve kaplumbağaların uzun yaşaması ise yumurtlamayla karşıtlık kurmaz." },
  { id: 'd09-t7', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['karşıtlık'],
    q: 'Although astronauts on board the International Space Station appear to float freely, ----.',
    options: [
      'the station travels around the whole Earth roughly every ninety minutes',
      'they sleep in bags that are fixed to the walls of the station',
      'their food and drink have to be packed in special containers',
      'the station is large enough to be seen from the ground at night',
      'gravity at that height is still nearly as strong as on the ground',
    ], answer: 4,
    explain: "'Although' görünüşle çelişen bir gerçek ister: astronotlar istasyonda serbestçe süzülüyor gibi görünür, ama o yükseklikte yer çekimi hâlâ yerdekine yakın güçtedir. Süzülmenin nedeni çekimin yokluğu değil, istasyonun astronotlarla birlikte sürekli düşerek Dünya'nın çevresinde dolanmasıdır. Astronotların duvara bağlı torbalarda uyuması en güçlü çeldiricidir, çünkü süzülmeyle ilgilidir; ama onun bir sonucudur, karşıtı değildir. Yiyeceklerin özel kaplarda saklanması da aynı nedenle uyumludur. İstasyonun doksan dakikada bir tur atması ve yerden görülebilmesi de süzülmeyle çelişen bir durum anlatmaz." },
  { id: 'd09-t8', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'While stars seem to twinkle when they are seen from the ground, ----.',
    options: [
      'the effect is usually strongest close to the horizon',
      'this is caused by moving layers of air in the atmosphere',
      'they shine with a steady light when observed from space',
      'some of them are many times larger than the Sun is',
      'the light from most of them set out many years ago',
    ], answer: 2,
    explain: "'While' iki durumu karşılaştırıyor: yıldızlar yerden bakınca titreşiyor gibi görünür, uzaydan gözlenince ise sabit bir ışıkla parlar. Karşılaştırmanın öteki ucu, yani atmosferin dışındaki durum, yalnız bu tamamlamada var. Titreşimin hareketli hava katmanlarından doğması en güçlü çeldiricidir, çünkü doğru bir açıklamadır ve doğru tamamlamanın neden doğru olduğunu da gösterir; ama karşılaştırma kurmaz, yalnız titreşimin nedenini verir. Ufka yakın yerde güçlenmesi de aynı tarafta kalır. Yıldızların büyüklüğü ve ışıklarının yıllar önce yola çıkması ise titreşimle bir karşıtlık kurmaz." },
  { id: 'd09-t9', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['neden-sonuç'],
    q: 'Since the needle-like leaves of pine trees are narrow and coated with wax, ----.',
    options: [
      'they turn bright red and yellow before falling in autumn',
      'the wood of these trees is widely used to make furniture',
      'they lose little water during cold, dry winters',
      'pine trees grow mainly in warm, wet lowlands near the equator',
      'they need much more water in winter than they do in summer',
    ], answer: 2,
    explain: "'Since' burada bir neden veriyor; ardından onun sonucu gelmeli. Dar ve mumla kaplı yapraklar buharlaşmayla az su yitirir, bu yüzden çam ağaçları soğuk ve kuru kışlarda görece az su kaybeder. Kışın yazdan çok daha fazla su gerekmesi en güçlü çeldiricidir, çünkü suyla ve kışla ilgilidir; ama yaprakların su tutan yapısıyla çelişir. Sonbaharda kızarıp dökülme iğne yapraklı ağaçlara uymaz. Kerestenin mobilyada kullanılması ve ekvator yakınındaki ılık ovalarda yetişme de yaprakların yapısından doğan bir sonuç değildir." },
  { id: 'd09-t10', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['koşul'],
    q: 'Unless a satellite in a low orbit is given an occasional push by its engines, ----.',
    options: [
      'the thin air at that height will slowly drag it down towards the Earth',
      'it will gradually drift further away from the Earth into deep space',
      'its orbit will stay at exactly the same height for many centuries',
      'its solar panels will produce far more electricity than it actually needs',
      'it can easily be seen from the ground at night without a telescope',
    ], answer: 0,
    explain: "'Unless' (… medikçe) olumsuz bir koşul kurar: alçak yörüngedeki bir uyduya motorlarıyla ara sıra itki verilmezse, o yükseklikteki çok seyrek hava onu yavaş yavaş Dünya'ya doğru çeker. Bütün tamamlamalar zaman bakımından uyuyor; ayrım anlamda. Uydunun yavaş yavaş Dünya'dan uzaklaşıp uzaya sürüklenmesi en güçlü çeldiricidir, çünkü itki olmadan yörüngenin değiştiğini söylüyor; ama yönü tersine çeviriyor: hava direnci uyduyu yavaşlatır ve aşağı indirir. Yörüngenin yüzyıllarca aynı yükseklikte kalması koşulu anlamsız kılar, çünkü itkiye o zaman gerek kalmazdı. Güneş panellerinin fazla elektrik üretmesi ve uydunun yerden görülebilmesi de itki eksikliğinin sonucu değildir." },
  { id: 'd09-t11', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['zaman'],
    q: 'Once a seed has taken up enough water from the surrounding soil, ----.',
    options: [
      'it swells, and a tiny root soon breaks its coat',
      'it stops growing and stays dormant for several more years',
      'its outer coat hardens so that no more water can enter',
      'birds are likely to carry it far away from its parent',
      'it loses the ability to produce either roots or leaves',
    ], answer: 0,
    explain: "'Once' (… ince, … dikten sonra) bir olay tamamlandıktan sonra gelen olayı ister: tohum topraktan yeterince su alınca şişer ve küçük bir kök kısa sürede kabuğunu yarar. Bütün tamamlamalar geniş zamanlı girişle zaman bakımından uyuyor; ayrım anlamda. Tohumun büyümeyi durdurup birkaç yıl daha uykuda kalması en güçlü çeldiricidir, çünkü tohumların gerçekten uzun süre uykuda kalabildiği bilinir; ama su almak uykuyu sürdürmez, çimlenmeyi başlatır. Kabuğun sertleşip suyu geçirmemesi ve tohumun kök ya da yaprak üretme yetisini yitirmesi de su almanın sonucunu tersine çevirir. Kuşların tohumu uzağa taşıması ise su almaktan sonra gelen bir adım değildir." },

  // ---------- 42–47: çeviri İng. → Tr. ----------
  { id: 'd09-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Many small mammals lose heat quickly because their bodies have a large surface area compared with their volume.',
    options: [
      'Birçok küçük memelinin vücut yüzeyi, çabuk ısı kaybetsinler diye hacimlerine göre büyük tutulmuştur.',
      'Birçok küçük memeli, vücutlarının yüzey alanı hacimlerine göre büyüdükçe daha çabuk ısı kaybetmeye başlar.',
      'Birçok küçük memeli, vücutlarının yüzey alanı hacimlerine göre büyük olduğu için çabuk ısı kaybeder.',
      'Birçok küçük memeli, vücutlarının hacmi yüzey alanlarından büyük olduğu için ısıyı uzun süre korur.',
      'Birçok küçük memeli çabuk ısı kaybettiği için vücutlarının yüzey alanı hacimlerine göre büyüktür.',
    ], answer: 2,
    explain: "Cümle bir sonucu ve nedenini 'because' ile bağlıyor: birçok küçük memeli çabuk ısı kaybeder, çünkü vücutlarının yüzey alanı hacimlerine göre büyüktür. Neden ile sonucu yer değiştiren çeviri en güçlü çeldiricidir, çünkü bütün sözcükleri koruyor; ama ısı kaybını büyük yüzey alanının nedeni yapıyor. 'Kaybetsinler diye … büyük tutulmuştur' nedeni bir amaca çeviriyor ve cümleyi edilgen bir düzenlemeye dönüştürüyor. 'Büyüdükçe … kaybetmeye başlar' sabit bir özelliği zamanla gelişen bir değişime çeviriyor. Hacmin yüzeyden büyük olduğunu söyleyen çeviri de karşılaştırmayı ve sonucu tersine çeviriyor." },
  { id: 'd09-c2', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['edilgen kanaat'],
    q: "Jupiter's moon Europa is thought to have an ocean of liquid water hidden beneath its icy surface.",
    options: [
      "Jüpiter'in uydusu Europa'nın buzlu yüzeyinin altında gizli, sıvı sudan bir okyanus bulunduğu kanıtlandı.",
      "Jüpiter'in uydusu Europa'nın buzlu yüzeyinin altında gizli, sıvı sudan bir okyanus bulunduğu düşünülüyor.",
      "Jüpiter'in uydusu Europa'nın buzlu yüzeyinin altında gizli, sıvı sudan bir okyanus bulunduğu düşünülüyordu.",
      "Jüpiter'in uydusu Europa'nın buzlu yüzeyinin altındaki okyanusun bir zamanlar sıvı olduğu düşünülüyor.",
      "Jüpiter'in uydusu Europa'nın buzlu yüzeyinin altında sıvı su bulunup bulunmadığı yeni araştırılmaya başlandı.",
    ], answer: 1,
    explain: "'Is thought to have' bugünkü bir kanaati bildiren edilgen yapıdır: Europa'nın buzlu yüzeyinin altında sıvı sudan bir okyanus bulunduğu düşünülüyor. 'Düşünülüyordu' diyen çeviri en güçlü çeldiricidir, çünkü bütün içeriği koruyor; ama kanaati geçmişe taşıyor ve artık savunulmadığını düşündürüyor. 'Kanıtlandı' bir kanaati kesinleşmiş bir bulguya çeviriyor. Okyanusun bir zamanlar sıvı olduğunu söyleyen çeviri zamanı ve içeriği değiştiriyor. Sıvı suyun yeni araştırılmaya başlandığını söyleyen çeviri de var olan bir kanaati açık bir soruya çeviriyor." },
  { id: 'd09-c3', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['kip (modal)'],
    q: 'Engineers had to redesign the bridge after tests showed that it might sway dangerously in strong winds.',
    options: [
      'Testler köprünün kuvvetli rüzgârda tehlikeli biçimde sallanabileceğini gösterince mühendisler köprüyü yeniden tasarlamak zorunda kaldı.',
      'Testler köprünün kuvvetli rüzgârda tehlikeli biçimde sallanacağını gösterince mühendisler köprüyü yeniden tasarlamak zorunda kaldı.',
      'Testler köprünün kuvvetli rüzgârda tehlikeli biçimde sallanabileceğini gösterince mühendisler köprüyü yeniden tasarlayabildi.',
      'Mühendisler köprüyü yeniden tasarladıktan sonra yapılan testler, köprünün kuvvetli rüzgârda tehlikeli biçimde sallanabileceğini gösterdi.',
      'Testler köprünün kuvvetli rüzgârda tehlikeli biçimde sallanabileceğini gösterirse mühendisler köprüyü yeniden tasarlamak zorunda kalacak.',
    ], answer: 0,
    explain: "Cümlede iki kip var: 'had to redesign' bir zorunluluk (yeniden tasarlamak zorunda kaldı), 'might sway' bir olasılık (sallanabileceği). İş sırası da önce testler, sonra yeniden tasarımdır. 'Sallanacağını' diyen çeviri en güçlü çeldiricidir, çünkü yalnız bir eki değiştiriyor; ama olasılığı kesinliğe çeviriyor. 'Tasarlayabildi' zorunluluğu bir yapabilmeye çeviriyor. Testleri yeniden tasarımdan sonraya koyan çeviri olayların sırasını ters çeviriyor. 'Gösterirse … kalacak' da olmuş bir olayı geleceğe ait bir koşula dönüştürüyor." },
  { id: 'd09-c4', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['olumsuzluğun kapsamı'],
    q: 'Not every metal is attracted by a magnet; aluminium and copper, for example, are not.',
    options: [
      'Mıknatıs alüminyum ve bakır dışında bütün metalleri çeker.',
      'Alüminyum ve bakır mıknatısla çekilmediği için mıknatıs öteki metalleri de çekmez.',
      'Mıknatıs hiçbir metali çekmez; alüminyum ve bakır da bunlara örnektir.',
      'Mıknatısın her metali çekmediği, alüminyum ve bakırla yapılan deneylerden sonra anlaşıldı.',
      'Mıknatıs her metali çekmez; örneğin alüminyum ve bakır mıknatısla çekilmez.',
    ], answer: 4,
    explain: "'Not every metal' olumsuzluğu bütüne değil 'her' sözcüğüne bağlar: mıknatıs her metali çekmez, yani bazılarını çeker, bazılarını çekmez; alüminyum ve bakır çekilmeyenlere örnektir. Alüminyum ve bakır dışındaki bütün metallerin çekildiğini söyleyen çeviri en güçlü çeldiricidir, çünkü iki örneği koruyor; ama 'for example' ile verilen örneği eksiksiz bir liste yapıyor. Alüminyum ve bakırın çekilmemesini öteki metallerin de çekilmemesinin nedeni yapan çeviri, örneği bir neden-sonuç ilişkisine çeviriyor ve olumsuzluğu bütün metallere yayıyor. 'Hiçbir metali' de aynı yayılmayı açıkça yapıyor. Deneylerden sonra anlaşıldığını söyleyen çeviri ise genel bir bilgiyi geçmişteki bir keşfe çeviriyor." },
  { id: 'd09-c5', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['isim cümleciği'],
    q: 'What worries many scientists is not just how much the climate is warming but also how quickly the change is happening.',
    options: [
      'Birçok bilim insanını iklimin ne kadar ısındığı değil, yalnızca değişimin ne kadar hızlı gerçekleştiği kaygılandırıyor.',
      'Birçok bilim insanı, iklimin ne kadar ısındığını değişimin hızından daha kaygı verici buluyor.',
      'İklim çok hızlı değiştiği için birçok bilim insanı onun ne kadar ısındığını ölçmekte zorlanıyor.',
      'Birçok bilim insanını yalnızca iklimin ne kadar ısındığı değil, değişimin ne kadar hızlı gerçekleştiği de kaygılandırıyor.',
      'Birçok bilim insanı, iklimin ne kadar ısındığını ve değişimin ne kadar hızlı gerçekleştiğini henüz bilmiyor.',
    ], answer: 3,
    explain: "Cümlenin öznesi bir isim cümleciğidir ('What worries many scientists'); 'not just … but also' de iki şeyi birlikte verir: birçok bilim insanını yalnızca iklimin ne kadar ısındığı değil, değişimin ne kadar hızlı gerçekleştiği de kaygılandırıyor. 'Değil, yalnızca' diyen çeviri en güçlü çeldiricidir, çünkü yapıyı büyük ölçüde koruyor; ama 'not just' sözünü 'not' gibi okuyup ısınma miktarını kaygının dışına atıyor. Isınma miktarını hızdan daha kaygı verici bulan çeviri iki kaygıyı eşit tutmak yerine sıralıyor. Hızlı değişimi ölçme güçlüğünün nedeni yapan çeviri olmayan bir neden-sonuç ilişkisi kuruyor. Son çeviri de kaygıyı bilgisizliğe çeviriyor." },
  { id: 'd09-c6', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['zarf cümleciği'],
    q: 'Sharks can detect the weak electric fields produced by the muscles of their prey, even when the prey is hidden under sand.',
    options: [
      'Köpekbalıkları, avlarının kaslarının ürettiği zayıf elektrik alanlarını yalnız avları kumun altına gizlendiğinde algılayabilir.',
      'Köpekbalıklarının kaslarının ürettiği zayıf elektrik alanlarını, kumun altına gizlenmiş olsalar bile avları algılayabilir.',
      'Köpekbalıkları, avları kumun altına gizlenmiş olsa bile avlarının kaslarının ürettiği zayıf elektrik alanlarını algılamak zorundadır.',
      'Köpekbalıkları avlarının kaslarının ürettiği zayıf elektrik alanlarını algılayabildiği için avları kumun altına gizlenir.',
      'Köpekbalıkları, avları kumun altına gizlenmiş olsa bile avlarının kaslarının ürettiği zayıf elektrik alanlarını algılayabilir.',
    ], answer: 4,
    explain: "Cümlede bir yetenek ('can detect': algılayabilir), bir ortaç öbeği ('produced by the muscles of their prey': avlarının kaslarının ürettiği) ve bir ödünleme ('even when': … olsa bile) var. 'Yalnız … gizlendiğinde' diyen çeviri en güçlü çeldiricidir, çünkü bütün sözcükleri koruyor; ama 'bile' anlamını 'yalnız' koşuluna çevirip yeteneği bir duruma sınırlıyor. Köpekbalıklarının ürettiği alanları avların algıladığını söyleyen çeviri avcı ile avı yer değiştiriyor. 'Algılamak zorundadır' yeteneği zorunluluğa çeviriyor. Son çeviri de avların gizlenmesini köpekbalığının yeteneğine bağlayan bir neden ilişkisi ekliyor." },

  // ---------- 48–53: çeviri Tr. → İng. ----------
  { id: 'd09-c7', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: 'Sıcak bölgelerde yaşayan tilkilerin kulakları, soğuk bölgelerde yaşayanlarınkinden genellikle daha büyüktür; büyük kulaklar fazla ısının atılmasına yardım eder.',
    options: [
      'Foxes living in cold regions generally have larger ears than those living in hot regions; large ears help to get rid of excess heat.',
      'Foxes living in hot regions generally have larger ears than those living in cold regions; large ears help to get rid of excess heat.',
      'Foxes living in hot regions generally have larger ears than those living in cold regions; large ears help to keep body heat in.',
      'All foxes living in hot regions have larger ears than those living in cold regions; large ears help to get rid of excess heat.',
      'Foxes living in hot regions generally have larger ears than those living in cold regions; large ears may help to store excess heat.',
    ], answer: 1,
    explain: "Türkçe cümlede bir karşılaştırma ('soğuk bölgelerde yaşayanlarınkinden daha büyük': 'larger … than those living in cold regions'), bir temkin ('genellikle': 'generally') ve bir işlev ('fazla ısının atılmasına yardım eder': 'help to get rid of excess heat') var. Karşılaştırmayı tersine çeviren çeviri en güçlü çeldiricidir, çünkü bütün yapıyı koruyor; ama büyük kulakları soğuk bölgedeki tilkilere veriyor. 'Keep body heat in' işlevi tersine çeviriyor. 'All foxes' Türkçedeki 'genellikle' temkinini atıp bir genellemeye dönüştürüyor. Son çeviri hem işlevi ısıyı saklamaya çeviriyor hem de bilgiye Türkçede olmayan bir olasılık katıyor." },
  { id: 'd09-c8', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edilgen', 'zarf cümleciği'],
    q: 'Bu yazılım, kullanıcıların verilerini izinleri olmadan üçüncü kişilerle paylaşmayacak biçimde tasarlandı.',
    options: [
      'This software was designed so that users could not share their own data with third parties without permission.',
      "This software was designed so that it would not share users' data with third parties without their permission.",
      "This software is being designed so that it will not share users' data with third parties without their permission.",
      "This software should have been designed so that it would not share users' data with third parties without permission.",
      "This software was designed so that it would never share any of its users' data with other people or companies.",
    ], answer: 1,
    explain: "Türkçe cümlede bitmiş bir edilgen eylem ('tasarlandı': 'was designed') ve onun amacı var: yazılım kullanıcıların verilerini izinleri olmadan üçüncü kişilerle paylaşmasın. Amaç 'so that it would not share' ile kurulur. Paylaşmayı kullanıcılara yükleyen çeviri en güçlü çeldiricidir, çünkü yapıyı koruyor; ama paylaşmayan yazılımı değil, paylaşamayan kullanıcıları anlatıyor. 'Is being designed' bitmiş işi sürmekte olan bir işe çeviriyor. 'Should have been designed' gerçekleşmiş bir tasarımı yapılmamış bir yükümlülüğe çeviriyor. 'Never … with other people' da izin koşulunu atıp paylaşmayı her durumda yasaklıyor." },
  { id: 'd09-c9', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['karşılaştırma'],
    q: "Jüpiter'in kütlesi, Güneş sistemindeki öteki bütün gezegenlerin toplam kütlesinin iki katından fazladır.",
    options: [
      'The mass of Jupiter is more than twice that of all the other planets in the solar system combined.',
      'The mass of Jupiter is more than twice that of any other single planet in the solar system.',
      'The mass of Jupiter is nearly twice that of all the other planets in the solar system combined.',
      'The combined mass of all the other planets in the solar system is more than twice that of Jupiter.',
      'The mass of Jupiter may once have been more than twice that of all the other planets combined.',
    ], answer: 0,
    explain: "Türkçe cümle Jüpiter'i tek tek gezegenlerle değil, öteki bütün gezegenlerin toplamıyla karşılaştırıyor ('all the other planets … combined') ve oranı 'iki katından fazla' diye veriyor ('more than twice'). 'Any other single planet' diyen çeviri en güçlü çeldiricidir, çünkü yapıyı ve oranı koruyor; ama karşılaştırmanın kapsamını toplamdan tek bir gezegene daraltıyor. 'Nearly twice' oranı iki katın altına indiriyor. Toplamı Jüpiter'den büyük yapan çeviri karşılaştırmayı tersine çeviriyor. 'May once have been' de bugünkü bir gerçeği geçmişe ait bir olasılığa çeviriyor." },
  { id: 'd09-c10', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['koşul'],
    q: 'Ormanlar kesilmeye devam ederse, birçok türün yaşam alanı, bu türler daha keşfedilmeden yok olabilir.',
    options: [
      'If forests had continued to be cleared, the habitats of many species might have disappeared before those species were discovered.',
      'Unless forests continue to be cleared, the habitats of many species may disappear before those species have even been discovered.',
      'If forests continue to be cleared, the habitats of most species will disappear before those species have even been discovered.',
      'If forests continue to be cleared, the habitats of many species may disappear before those species have even been discovered.',
      'If forests continue to be cleared, many species may disappear soon after their habitats have finally been discovered.',
    ], answer: 3,
    explain: "Türkçe cümle gerçek bir koşul kuruyor: ormanlar kesilmeye devam ederse ('If forests continue to be cleared') birçok türün yaşam alanı, türler daha keşfedilmeden yok olabilir ('may disappear before those species have even been discovered'). Üçüncü tip koşula geçen çeviri en güçlü çeldiricidir, çünkü içeriği koruyor; ama geleceğe dönük bir uyarıyı gerçekleşmemiş bir geçmişe çeviriyor. 'Unless' koşulu tersine çeviriyor. 'Most species … will' hem kapsamı genişletiyor hem de olasılığı kesinliğe çeviriyor. Son çeviri de olayların sırasını değiştiriyor ve yok olanı yaşam alanı değil türler yapıyor." },
  { id: 'd09-c11', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['isim-fiil ve mastar'],
    q: 'Çeliği ısıtıp ardından hızla soğutmak, onu daha sert ama daha kırılgan yapabilir.',
    options: [
      'Heating steel and then cooling it rapidly can make it softer and less brittle.',
      'Heating steel after it has been cooled rapidly can make it harder but more brittle.',
      'Heating steel and then cooling it rapidly always makes it harder and less brittle.',
      'Heating steel and then cooling it rapidly could have made it harder but more brittle.',
      'Heating steel and then cooling it rapidly can make it harder but more brittle.',
    ], answer: 4,
    explain: "Türkçe cümlenin öznesi bir isim-fiil öbeğidir ('Çeliği ısıtıp ardından hızla soğutmak': 'Heating steel and then cooling it rapidly'); yüklem de bir olasılık bildirir ('yapabilir': 'can make'). İşlerin sırasını değiştiren çeviri en güçlü çeldiricidir, çünkü sözcükleri ve sonucu koruyor; ama önce soğutup sonra ısıtmayı anlatıyor. 'Softer and less brittle' sonucu tersine çeviriyor. 'Always makes … less brittle' olasılığı kesinliğe çeviriyor ve kırılganlığı da tersine çeviriyor. 'Could have made' de genel bir olasılığı geçmişe ait, gerçekleşmemiş bir duruma taşıyor." },
  { id: 'd09-c12', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['isim cümleciği'],
    q: 'Bilim insanları, bazı balinaların seslerinin yüzlerce kilometre öteden duyulabildiğini ancak 20. yüzyılda fark etti.',
    options: [
      'Since the twentieth century, scientists have gradually realised that the calls of some whales can be heard hundreds of kilometres away.',
      'Not until the twentieth century did some whales begin to make calls that could be heard hundreds of kilometres away.',
      'It was not until the twentieth century that scientists realised that some whales could hear calls from hundreds of kilometres away.',
      'It was not until the twentieth century that scientists realised that the calls of some whales could be heard hundreds of kilometres away.',
      'In the twentieth century, scientists realised that the calls of all whales could be heard hundreds of kilometres away.',
    ], answer: 3,
    explain: "Türkçedeki 'ancak 20. yüzyılda fark etti' geç gelen bir fark edişi vurgular ve 'It was not until the twentieth century that …' ile kurulur; fark edilen şey de bir isim cümleciğidir: bazı balinaların seslerinin yüzlerce kilometre öteden duyulabildiği. Balinaları duyan taraf yapan çeviri en güçlü çeldiricidir, çünkü vurgu yapısını ve zamanı koruyor; ama seslerin uzaktan duyulmasını balinaların uzaktaki sesleri duyabilmesine çeviriyor. 'Since … have realised' 'ancak' vurgusunu yitiriyor. Balinaların bu sesleri 20. yüzyılda çıkarmaya başladığını söyleyen çeviri fark edişi balinaların davranışına çeviriyor. 'All whales' de 'bazı' sözcüğünün kapsamını bütün balinalara genişletiyor." },

  // ---------- 54–59: paragraf tamamlama ----------
  { id: 'd09-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: "Sloths spend most of their lives hanging upside down in the treetops of Central and South American forests, and they move so little that algae can grow in their fur. ----. Their diet consists mainly of leaves, which provide very little energy and are hard to digest; a single meal may take days to pass through a sloth's gut. Moving slowly and keeping a relatively low body temperature allow them to survive on such poor food.",
    options: [
      'As a result, they are among the fastest climbers in the forest',
      'Most other mammals in these forests, in contrast, are active only at night',
      'For this reason, they spend much of the day searching for fruit and insects',
      'Their long, curved claws are also used to defend themselves when attacked',
      'This extreme slowness is largely a way of saving energy',
    ], answer: 4,
    explain: 'Boşluktan önce tembel hayvanların o kadar az kıpırdadığı söyleniyor ki kürklerinde yosun (alg) bile yetişiyor. Boşluktan sonra ise yapraktan oluşan, enerjisi az ve zor sindirilen bir besinle yaşadıkları anlatılıyor; son cümle de yavaş hareketin bu fakir besinle yaşamayı sağladığını söylüyor. Boşluğa bu iki bölümü bağlayan cümle gelir: bu aşırı yavaşlık büyük ölçüde enerji tasarrufunun bir yoludur. Gün boyu meyve ve böcek arandığını söyleyen cümle en güçlü çeldiricidir, çünkü beslenmeye geçiyor; ama sonraki cümledeki yaprak ağırlıklı besinle ve yavaşlıkla çelişir. Ormanın en hızlı tırmanıcıları olmaları ilk cümleyle çelişir. Öteki memelilerin gece etkinliği ve pençelerle savunma da akışı başka bir yöne çeker.' },
  { id: 'd09-p2', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['gönderim'],
    q: 'Concrete is strong and cheap, but over time it develops small cracks that let in water, which can then reach the steel bars inside and cause them to rust. ----. When a crack forms and water seeps in, the bacteria become active and produce limestone, which gradually fills the gap. Researchers hope that such materials could reduce the cost of repairing bridges and tunnels, although at present they are more expensive than ordinary concrete.',
    options: [
      'Rust takes up more space than the original steel, so it can widen the cracks even further',
      'As a result, concrete is rarely chosen today for building large bridges or long tunnels',
      'Bacteria, however, cannot survive for long inside a material as dry and hard as concrete',
      'Ancient Roman builders made their concrete from volcanic ash, lime and sea water instead',
      'One proposed solution is to mix in bacteria that can lie dormant in the concrete for years',
    ], answer: 4,
    explain: "Boşluktan sonraki cümle 'the bacteria' diye başlıyor; demek ki bakteriler boşlukta ilk kez tanıtılmalı. Doğru tamamlama betona yıllarca uykuda kalabilen bakteriler katmayı bir çözüm olarak öneriyor; sonraki cümle de çatlağa su girince bu bakterilerin etkinleşip çatlağı kireçtaşıyla doldurduğunu anlatıyor. Pasın çeliğin kendisinden fazla yer kaplayıp çatlakları genişletmesi en güçlü çeldiricidir, çünkü bir önceki cümleyi doğal biçimde sürdürür; ama bakterilerden söz etmez, bu yüzden 'the bacteria' dayanaksız kalır. Bakterilerin betonda yaşayamaması paragrafın geri kalanıyla çelişir. Betonun büyük yapılarda seyrek kullanılması gerçeğe de paragrafa da aykırıdır; Roma betonu ise akışı başka bir konuya taşır." },
  { id: 'd09-p3', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'In many coastal areas, fertilisers washed off farmland by rain eventually reach the sea. There, the extra nutrients feed enormous blooms of algae near the surface. ----. As bacteria break down the dead algae, they use up much of the oxygen in the water, creating so-called dead zones in which fish and many other animals cannot survive. One of the largest forms each summer in the Gulf of Mexico, fed by nutrients carried down the Mississippi River.',
    options: [
      'Some of these algae release toxins that can harm shellfish',
      'As a result, the water becomes much richer in oxygen than before',
      'When the algae die, they sink slowly towards the sea floor',
      'Fish are therefore drawn to these areas in very large numbers',
      'Farmers in most regions have now stopped using such fertilisers',
    ], answer: 2,
    explain: "Boşluktan önce gübrelerin denize ulaşıp yüzeyde büyük alg patlamalarını beslediği söyleniyor; boşluktan sonra ise bakterilerin 'ölü algleri' ayrıştırırken suyun oksijenini tükettiği anlatılıyor. Aradaki adım alglerin ölmesidir: algler ölünce yavaş yavaş deniz tabanına çöker. Bazı alglerin kabuklu deniz canlılarına zarar veren zehirler salması en güçlü çeldiricidir, çünkü alg patlamalarıyla ilgili gerçek bir bilgidir; ama alglerin ölümünden söz etmez, 'the dead algae' sözü dayanaksız kalır. Suyun oksijence zenginleşmesi ve balıkların bölgeye toplanması sonraki cümleyle çelişir; çiftçilerin gübreyi bırakması da paragrafın geri kalanına ters düşer." },
  { id: 'd09-p4', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    q: 'The Moon often looks much larger when it is close to the horizon than when it is high in the sky. ----. Photographs taken with the same camera settings show a disc of almost exactly the same size in both positions. The effect is therefore an illusion produced by the brain, although psychologists still disagree about exactly how it arises.',
    options: [
      'This is because the air near the horizon acts like a giant magnifying lens',
      'As a result, the Moon appears smaller to people who live near the equator',
      'The full moon, for instance, rises at about the same time as the sun sets',
      'Yet the size of its image does not actually change in any noticeable way',
      'Ancient sailors used the position of the Moon to help them find their way',
    ], answer: 3,
    explain: "Paragraf bir görünüşü ve onun yanıltıcı olduğunu anlatıyor: Ay ufka yakınken çok daha büyük görünür; boşluktan sonra ise iki konumda çekilen fotoğrafların neredeyse aynı büyüklükte bir disk gösterdiği ve etkinin bir yanılsama olduğu söyleniyor. Boşluğa görünüşle gerçeği karşı karşıya koyan cümle gelir: Ay'ın görüntüsünün büyüklüğü aslında fark edilir biçimde değişmez. Ufuktaki havanın dev bir büyüteç gibi davrandığını söyleyen cümle en güçlü çeldiricidir, çünkü büyük görünüşü açıklamaya çalışıyor; ama fotoğraflardaki eşit büyüklükle ve 'illusion produced by the brain' sözüyle çelişir. Ekvatordakilere küçük görünmesi, dolunayın doğuş saati ve denizcilerin Ay'la yön bulması da akışı keser." },
  { id: 'd09-p5', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    q: 'When certain materials are cooled below a particular temperature, their electrical resistance suddenly drops to zero. ----. This property is put to use in the scanners that hospitals use to produce detailed images of the body, whose powerful magnets are made from coils of superconducting wire. The drawback is cost: most superconductors work only at extremely low temperatures, so the wire must be kept cold with liquid helium.',
    options: [
      'Most ordinary metals, in contrast, conduct electricity better as they become warmer',
      'A current in a loop of such a material can then flow on with almost no loss',
      'This makes these materials especially useful for heating homes cheaply in winter',
      'The copper wires used in houses, for example, lose no energy at all as heat',
      'Because of this, superconductors must be kept warm in order to work properly',
    ], answer: 1,
    explain: "Boşluktan önce bazı maddelerin belirli bir sıcaklığın altında elektrik direncinin sıfıra düştüğü söyleniyor; boşluktan sonra ise 'This property' (bu özellik) hastane tarayıcılarının güçlü mıknatıslarında kullanılıyor. Boşluğa sıfır direncin sonucunu veren cümle gelir: böyle bir maddeden yapılmış bir halkada akan akım neredeyse hiç kayıp olmadan sürebilir; güçlü mıknatıslar da bu sürekli akıma dayanır. Sıradan metallerin ısındıkça daha iyi iletmesi en güçlü çeldiricidir, çünkü bir karşılaştırma kuruyor; ama yanlıştır, sıradan metallerin direnci ısındıkça artar ve cümle akışı tarayıcılardan uzaklaştırır. Evleri ucuza ısıtmak, ev kablolarının hiç ısı kaybetmemesi ve süperiletkenlerin sıcak tutulması da paragrafla ya da gerçekle çelişir." },
  { id: 'd09-p6', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['gönderim'],
    q: 'When copper is first used for roofs or statues, it has a bright, reddish-brown shine. ----. Over years or decades, as the metal goes on reacting with oxygen, water and other substances in the air, this dull layer gradually changes into the familiar blue-green coating known as a patina. Unlike rust on iron, which flakes away and exposes fresh metal to further attack, the patina sticks firmly to the surface and protects the copper beneath it. This is one reason why copper roofs can last for a century or more.',
    options: [
      'It turns green almost at once when it first comes into contact with rain',
      'As a result, it keeps its original bright colour for many decades',
      'Builders therefore paint most copper roofs green to protect them',
      'Left out in the weather, however, it soon darkens to a dull brown',
      'Iron, by contrast, does not react with oxygen or water at all',
    ], answer: 3,
    explain: "Boşluktan sonraki cümle 'this dull layer' (bu donuk katman) diye başlıyor; demek ki boşlukta donuk bir katmanın oluştuğu söylenmeli. Doğru tamamlama parlak bakırın açık havada kısa sürede donuk bir kahverengiye döndüğünü söylüyor; 'however' de ilk cümledeki parlaklığa karşıtlık kuruyor. Bakırın yağmura değince hemen yeşile dönmesi en güçlü çeldiricidir, çünkü renk değişiminden söz ediyor; ama sonraki cümle yeşil katmanın yıllar ya da on yıllar içinde oluştuğunu söylüyor ve 'this dull layer' dayanaksız kalıyor. Parlak rengin onlarca yıl korunması da aynı nedenle çelişir. Çatıların yeşile boyanması paragrafta anlatılan doğal süreçle, demirin hiç tepkimeye girmemesi de pasla ilgili cümleyle çelişir." },

  // ---------- 60–65: akışı bozan cümle ----------
  { id: 'd09-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Hummingbirds have one of the highest metabolic rates of any animal, and during the day they must feed almost constantly to fuel their rapid wingbeats.',
      'At night, however, they cannot feed, and a bird this small could run out of energy before morning.',
      'Their long, slender bills allow them to reach the nectar hidden deep inside tube-shaped flowers.',
      'To avoid this, many species enter a state called torpor, in which their heart rate slows and their body temperature falls sharply.',
      'In the morning they gradually warm themselves up again, a process that can take some minutes, before setting off to feed.',
    ], answer: 2,
    explain: "Parça sinekkuşlarının enerji sorununu ve çözümünü anlatıyor: gündüz durmadan beslenmeleri gerekir (I), gece beslenemezler ve sabaha kadar enerjileri tükenebilir (II), bunu önlemek için birçok tür kalp atışının yavaşladığı ve vücut sıcaklığının düştüğü bir uyuşukluk hâline girer (IV), sabah da yeniden ısınırlar (V). IV'teki 'To avoid this' II'deki enerjinin tükenmesi tehlikesine dayanıyor. III. cümle de sinekkuşlarının beslenmesiyle ilgilidir, ama gagalarının biçimine geçiyor; II'deki sorun ile IV'teki çözüm arasına girerek 'this' bağını koparıyor." },
  { id: 'd09-b2', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Optical fibres carry information as pulses of light through strands of glass that are thinner than a human hair.',
      'The strands are usually wrapped in a layer of plastic that protects them from scratches and moisture.',
      'The light stays inside the glass because, each time it meets the edge of the strand at a shallow angle, it is reflected back into the centre.',
      'In this way it can travel for many kilometres, bouncing from side to side, without escaping.',
      'Even so, a small amount of the light is gradually absorbed, so on very long routes the signal has to be strengthened at intervals.',
    ], answer: 1,
    explain: "Parça ışığın optik lif içinde nasıl ilerlediğini anlatıyor: bilgi ışık atımlarıyla taşınır (I), ışık lifin kenarına her yatık açıyla çarptığında içeri yansıdığı için camın içinde kalır (III), böylece kaçmadan kilometrelerce yol alır (IV), yine de bir kısmı yavaş yavaş soğurulur ve uzun hatlarda sinyal güçlendirilir (V). III'teki 'The light' I'deki ışık atımlarına, IV'teki 'In this way' de III'teki yansımaya dayanıyor. II. cümle de liflerle ilgilidir, ama ışıktan liflerin plastik kaplamasına geçiyor; ışığın tanıtıldığı I ile ışığın nasıl içeride kaldığını anlatan III arasına girerek açıklama zincirini kesiyor." },
  { id: 'd09-b3', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      "Water is described as 'hard' when it contains high levels of dissolved calcium and magnesium, which it picks up as it flows through rocks such as limestone and chalk.",
      'These minerals are harmless to drink, and some people even prefer the taste of hard water.',
      'When hard water is heated, however, some of the dissolved minerals come out of solution as a white, chalky solid.',
      'Soft water, which contains only small amounts of these minerals, is common in areas where the bedrock is granite.',
      'This solid, known as limescale, builds up inside kettles and pipes and gradually makes them less efficient.',
    ], answer: 3,
    explain: "Parça sert suyu ve ısıtıldığında doğan sorunu anlatıyor: su kireçtaşı gibi kayalardan kalsiyum ve magnezyum alır (I), bu mineraller içmeye zararsızdır (II), ama su ısıtılınca bir kısmı beyaz, tebeşirimsi bir katı olarak ayrılır (III), kireç denen bu katı da su ısıtıcılarında ve borularda birikir (V). V'teki 'This solid' III'teki katıya dayanıyor. IV. cümle de sudaki minerallerle ilgilidir, ama sert sudan yumuşak suyun bulunduğu bölgelere geçiyor; III ile onu sürdüren V arasına girip 'This solid' bağını koparıyor." },
  { id: 'd09-b4', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    sentences: [
      'Sand is one of the most heavily used natural resources in the world, mainly because it is a key ingredient of concrete.',
      "It might seem that the world's vast deserts could easily supply all the sand that builders need.",
      'Desert sand, however, is usually unsuitable, because the wind wears its grains into smooth, rounded shapes that do not bind together well.',
      'Sand dunes in some deserts can move many metres in a single year as the wind pushes grains up one side and down the other.',
      'As a result, builders rely mostly on sand taken from rivers, lakes and coasts, where its removal can damage habitats and speed up erosion.',
    ], answer: 3,
    explain: "Parça inşaat kumunun nereden geldiğini anlatıyor: kum betonun temel bileşeni olduğu için çok kullanılır (I), çöllerin bu kumu sağlayabileceği düşünülebilir (II), ama rüzgârın düzgün ve yuvarlak yaptığı çöl kumu iyi bağlanmaz (III), bu yüzden kum ırmaklardan, göllerden ve kıyılardan alınır ve bu doğaya zarar verir (V). V'teki 'As a result' III'teki uygunsuzluğa dayanıyor. IV. cümle de çöl kumundan ve rüzgârdan söz ediyor, ama inşaattaki kullanımdan kum tepelerinin hareketine geçiyor; III ile onun sonucunu veren V arasına girerek bağı koparıyor." },
  { id: 'd09-b5', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    sentences: [
      'Venus spins on its axis extremely slowly, taking longer to turn once than to travel all the way around the Sun.',
      'Its thick clouds reflect most of the sunlight that reaches them, which is why it is the brightest planet in our sky.',
      'Stranger still, it turns in the opposite direction to most of the planets, so that on Venus the Sun would rise in the west.',
      'Astronomers are not sure why; one idea is that a huge collision early in its history may have reversed its spin.',
      'Another suggestion is that the pull of the Sun on its dense atmosphere gradually altered its rotation over billions of years.',
    ], answer: 1,
    explain: "Parça Venüs'ün olağan dışı dönüşünü anlatıyor: kendi ekseni çevresinde o kadar yavaş döner ki bir turu Güneş çevresindeki turundan uzun sürer (I), daha da tuhafı öteki gezegenlerin çoğunun tersine döner (III); bunun nedeni bilinmiyor ve iki açıklama öneriliyor (IV, V). III'teki 'Stranger still' (daha da tuhafı) I'deki tuhaf yavaşlığa dayanıyor. II. cümle de Venüs'ü anlatıyor, ama dönüşten bulutların ışığı yansıtmasına ve gezegenin parlaklığına geçiyor; I ile onu 'Stranger still' diye sürdüren III arasındaki bağı koparıyor." },
  { id: 'd09-b6', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'A rainbow appears when sunlight shines on falling raindrops while the Sun is behind the observer.',
      'As the light enters each drop, it bends, and because different colours bend by slightly different amounts, the white light is spread out into its colours.',
      'In a double rainbow, the colours of the fainter outer arc appear in the reverse order.',
      'The light is then reflected off the back of the drop and bends again as it leaves, heading back towards the observer.',
      'Since each colour leaves the drop at its own angle, the observer sees red light from drops higher in the sky and violet light from drops lower down, producing the familiar bands.',
    ], answer: 2,
    explain: "Parça gökkuşağının nasıl oluştuğunu adım adım anlatıyor: ışık damlaya girerken kırılır ve renklerine ayrılır (II), sonra damlanın arka yüzünden yansıyıp çıkarken yeniden kırılır (IV), her renk kendi açısıyla çıktığı için gözlemci renk kuşaklarını görür (V). IV'teki 'then' II'deki ilk adımın ardından gelen adımı bildiriyor. III. cümle de gökkuşağıyla ilgilidir, ama tek bir gökkuşağının oluşumundan çift gökkuşağındaki ikinci yaya geçiyor; II ile 'then' ile bağlanan IV arasındaki sırayı bozuyor." },

  // ---------- 66–80: okuma ----------
  { id: 'd09-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Ödünç alınmış renkler',
    text: 'Many animals that are dangerous or unpleasant to eat advertise the fact with bright warning colours, and a predator that has had one bad experience soon learns to leave them alone. In the early 1860s, the English naturalist Henry Walter Bates, who had spent years collecting insects in the Amazon, noticed that some harmless butterflies closely resembled distasteful species living in the same forests. He suggested that by copying the warning colours, the harmless species gained protection without paying the cost of producing any defences of their own. This kind of deception, now known as Batesian mimicry, has since been found in many groups of animals. Some harmless milk snakes, for example, have red, black and yellow bands that resemble those of venomous coral snakes. The trick works, however, only up to a point. If the mimics become too common, predators will often catch a harmless one and learn that the colours are not a reliable warning, so the protection weakens for mimics and models alike. Some years later, the German naturalist Fritz Müller described a different arrangement, in which several harmful species share the same warning pattern. In this case every member of the group benefits, because predators need to learn only one lesson to avoid all of them. Not every resemblance is convincing to human eyes. Many hoverflies, harmless flies with yellow and black stripes, look only roughly like wasps, and biologists still debate why natural selection has not made the copies more exact. One suggestion is that the birds that hunt them may not look closely enough for a better copy to make much difference.',
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the protection that Batesian mimicry offers weakens when ----.',
        options: [
          'harmless look-alikes far outnumber the species they copy',
          'predators have had an unpleasant experience with the harmful species',
          'several harmful species share one and the same warning pattern',
          'the mimics and the species they copy live in the same forests',
          'the copies resemble the original only roughly, as in hoverflies',
        ], answer: 0,
        explain: "Parçaya göre taklitçiler çok yaygınlaşırsa yırtıcılar sık sık zararsız birini yakalar ve renklerin güvenilir bir uyarı olmadığını öğrenir; koruma hem taklitçiler hem de taklit edilen türler için zayıflar. Doğru seçenek bunu başka sözcüklerle veriyor: zararsız benzerler kopyaladıkları zararlı türlerden çok daha kalabalık olunca. Yırtıcının zararlı türle kötü bir deneyim yaşaması en güçlü çeldiricidir, çünkü parçada geçiyor; ama korumayı zayıflatmaz, tersine onun temelidir. Birkaç zararlı türün aynı deseni paylaşması Müller'in anlattığı ve herkesin yararlandığı düzendir. Aynı ormanda yaşamak taklidin koşuludur. Çiçek sineklerinin (hoverflies) eşek arılarına kaba benzerliği ise korumayı zayıflatan bir etken olarak anılmıyor; parça yalnız nedeninin tartışıldığını söylüyor." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that, unlike Batesian mimicry, the arrangement described by Müller ----.',
        options: [
          'protects harmless species at the expense of the harmful ones they copy',
          'is not weakened as the animals sharing the pattern multiply',
          'was first noticed by Bates among the butterflies of the Amazon forests',
          'requires predators to learn a separate lesson for each species involved',
          'has so far been found only among butterflies and never in other animals',
        ], answer: 1,
        explain: "Bates'in anlattığı düzende koruma, taklitçiler çoğalınca zayıflar, çünkü yırtıcılar zararsız bireyler yakalar. Müller'in anlattığı düzende ise deseni paylaşan bütün türler zararlıdır; bu yüzden desen çoğaldıkça yırtıcıya yanlış bir ders verilmez, tersine aynı ders daha çabuk öğrenilir. Buradan bu düzenin, deseni paylaşan hayvanlar çoğaldığında zayıflamadığı sonucu çıkar. Her tür için ayrı bir ders gerektirmesi en güçlü çeldiricidir, çünkü öğrenmeden söz ediyor; ama parça yırtıcının tek bir dersle hepsinden kaçındığını söylüyor. Zararsızları zararlılar pahasına korumak Bates'in düzenini anlatır. Bates'in bu düzeni fark etmesi ve yalnız kelebeklerde görülmesi de parçada yok." },
      { konu: ['ana fikir'],
        q: 'What is the passage mainly about?',
        options: [
          'The life and travels of Henry Walter Bates in the Amazon',
          'How predators learn to recognise venomous snakes',
          'How animals gain protection by resembling one another',
          'Why hoverflies are far less dangerous than wasps',
          'The chemistry of the toxins in distasteful insects',
        ], answer: 2,
        explain: "Parça hayvanların birbirine benzeyerek nasıl korunduğunu anlatıyor: zararsız türlerin zararlıları taklit etmesi (Bates), zararlı türlerin aynı deseni paylaşması (Müller) ve kaba taklitlerin neden sürdüğü tartışması. Ana konu benzerlik yoluyla korunmadır. Henry Walter Bates'in Amazon'daki yaşamı en güçlü çeldiricidir, çünkü parçada adı ve Amazon'daki yılları geçiyor; ama yalnız taklidi ilk açıklayan kişi olarak anılıyor. Yırtıcıların zehirli yılanları tanıması ve çiçek sineklerinin eşek arılarından zararsız olması birer örnektir. Böceklerdeki zehirlerin kimyası ise parçanın konusu değildir." },
    ] },
  { id: 'd09-o2', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Düzenli bir sinyalin sırrı',
    text: "In the summer of 1967, Jocelyn Bell, now known as Jocelyn Bell Burnell, was a research student at the University of Cambridge, checking the output of a new radio telescope that she had helped to build. The instrument recorded its signals as wavy lines on long rolls of paper, and part of her job was to examine them by eye. One day she noticed a small, odd mark that did not look like interference from human sources or like any known natural signal. When she and her supervisor, Antony Hewish, studied it more closely, they found that it consisted of extremely regular pulses arriving about every 1.3 seconds. The regularity was so precise that the team half-jokingly labelled the source 'LGM-1', for 'little green men'. The joke did not last long. Before long, Bell found similar signals coming from other parts of the sky, and it seemed highly unlikely that several groups of aliens would be trying to contact the Earth in exactly the same way. The objects, soon named pulsars, were later explained as rapidly spinning neutron stars, the collapsed cores of massive stars, which sweep beams of radio waves across space rather like a lighthouse. In 1974 the Nobel Prize in Physics was awarded partly for this discovery, but it went to Hewish and to another Cambridge astronomer, not to Bell. Many scientists criticised the decision. Bell herself, however, has generally spoken about it without bitterness, arguing that prizes of this kind have tended to reward senior figures rather than students. In 2018 she received a major science prize and gave the money to help students from under-represented groups to train as physicists.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the idea that the signals came from aliens became very hard to accept once ----.',
        options: [
          'the pulses were shown to arrive at irregular and changing intervals',
          'interference from human sources had been ruled out by the team',
          'the Nobel committee decided to reward the discovery in 1974',
          'signals of the same kind were detected in several other directions',
          'neutron stars had first been observed through optical telescopes',
        ], answer: 3,
        explain: "Parçaya göre Bell kısa süre sonra gökyüzünün başka yerlerinden gelen benzer sinyaller buldu ve birkaç ayrı uzaylı grubunun Dünya'yla tam olarak aynı biçimde iletişim kurmaya çalışması pek olası görünmedi. Doğru seçenek bunu başka sözcüklerle veriyor. İnsan kaynaklı parazitin dışlanması en güçlü çeldiricidir, çünkü parçada geçiyor; ama bu, sinyali daha da gizemli yaptı, uzaylı fikrini zayıflatmadı. Atımların düzensiz olduğu parçayla çelişir; parça düzenliliğin çok kesin olduğunu söylüyor. Nobel kararı ve nötron yıldızlarının optik teleskopla gözlenmesi de uzaylı fikrinin terk edilmesinin nedeni olarak verilmiyor." },
      { konu: ['çıkarım'],
        q: "It can be inferred from the passage that Bell's reaction to the 1974 Nobel Prize ----.",
        options: [
          'led her to refuse the prize she was offered in 2018',
          'was milder than the reaction of many other scientists',
          'rested on her belief that Hewish deserved no credit',
          'changed once she had given away her own prize money',
          'was shared by the members of the Nobel committee',
        ], answer: 1,
        explain: "Parça birçok bilim insanının kararı eleştirdiğini, Bell'in ise genellikle kırgınlık göstermeden konuştuğunu söylüyor. Buradan Bell'in tepkisinin öteki birçok bilim insanınınkinden daha ılımlı olduğu sonucu çıkar. Hewish'in hiçbir payı olmadığını düşünmesi en güçlü çeldiricidir, çünkü ödül Hewish'e verilmişti; ama parçada Bell böyle bir şey söylemiyor, ödüllerin genellikle kıdemli kişilere gittiğini söylüyor. 2018'deki ödülü reddetmesi parçayla çelişir: ödülü aldı ve parasını bağışladı. Görüşünün sonradan değişmesi ve Nobel komitesinin görüşü de parçada yok." },
      { konu: ['başlık'],
        q: 'Which of the following would be the most suitable title for the passage?',
        options: [
          'How Radio Telescopes Are Designed and Built Today',
          'The Long Search for Messages from Alien Worlds',
          'A Student, a Strange Signal and a Disputed Prize',
          'Why Neutron Stars Spin at Such Remarkable Speeds',
          'Famous Physicists Who Have Won the Nobel Prize',
        ], answer: 2,
        explain: "Parça bir araştırma öğrencisinin garip bir sinyali fark etmesini, sinyalin pulsar olarak açıklanmasını ve keşif için verilen Nobel Ödülü'nün tartışılmasını anlatıyor. En uygun başlık bu üç öğeyi birlikte kapsayan başlıktır. Uzaylılardan gelen mesajların aranması en güçlü çeldiricidir, çünkü 'little green men' şakası parçada geçiyor; ama bu yalnız kısa süren bir şakadır ve parça böyle bir arayışı anlatmıyor. Radyo teleskoplarının yapımı ve nötron yıldızlarının neden hızlı döndüğü yalnız birer ayrıntıdır. Nobel kazanan fizikçiler de parçanın konusu değildir; parça tersine ödülü almayan birini anlatıyor." },
    ] },
  { id: 'd09-o3', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', title: 'Uydudaki saatler',
    text: "Satellite navigation systems such as GPS work by measuring time. Each satellite carries extremely accurate atomic clocks and continuously broadcasts signals stating its position and the exact moment at which each signal was sent. A receiver on the ground, such as the one in a mobile phone, compares the arrival times of signals from at least four satellites and uses the tiny differences between them to calculate where it is. Because radio signals travel at the speed of light, about 300,000 kilometres per second, an error of just one millionth of a second in timing would place the receiver around 300 metres from its true position. This is where Einstein's theories of relativity become a practical matter. According to special relativity, a clock that is moving fast relative to an observer runs slightly slow, and GPS satellites travel at about 14,000 kilometres per hour. General relativity, on the other hand, predicts that clocks run faster where gravity is weaker, and at a height of roughly 20,000 kilometres the satellites experience considerably weaker gravity than clocks on the ground do. The second effect is larger than the first, so overall the satellite clocks gain about 38 millionths of a second each day. That may sound trivial, but if nothing were done, the positions calculated by receivers would drift by several kilometres every day. To prevent this, the clocks are set to tick at a slightly lower rate before launch, and further corrections are made by the system's software.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the clocks on GPS satellites gain time overall because ----.',
        options: [
          'the effect of their speed is greater than the effect of weaker gravity',
          'they travel faster than any other kind of satellite in Earth orbit',
          'the effect of weaker gravity is greater than the effect of their speed',
          'they are set to tick more quickly than clocks on the ground before launch',
          'their radio signals take longer to reach receivers than was expected',
        ], answer: 2,
        explain: 'Parçaya göre iki etki var: hızlı hareket saati biraz yavaşlatır, zayıf çekim ise hızlandırır; ikinci etki birincisinden büyük olduğu için uydudaki saatler toplamda günde yaklaşık 38 milyonda bir saniye ileri gider. Doğru seçenek bunu veriyor. Hız etkisinin daha büyük olduğunu söyleyen seçenek en güçlü çeldiricidir, çünkü aynı iki etkiyi anıyor; ama karşılaştırmayı tersine çeviriyor ve öyle olsaydı saatler geri kalırdı. Saatlerin fırlatmadan önce daha hızlı ayarlanması parçayla çelişir: daha yavaş çalışacak biçimde ayarlanıyorlar. Uyduların öteki uydulardan hızlı gitmesi ve sinyallerin geç ulaşması da parçada ileri gitmenin nedeni değildir.' },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that, without the corrections described, GPS ----.',
        options: [
          'would still be accurate to within a few metres for many years to come',
          'would need signals from fewer satellites to calculate a position',
          'would show every position exactly 38 metres away from the true one',
          "would soon become of little use for finding one's way around a city",
          'would work properly only in places where gravity is relatively weak',
        ], answer: 3,
        explain: 'Parça hiçbir şey yapılmazsa alıcıların hesapladığı konumların her gün birkaç kilometre kayacağını söylüyor. Birkaç gün içinde kilometrelerce yanlış konum veren bir sistem bir kentte yol bulmak için kısa sürede pek işe yaramaz. Konumun her seferinde tam 38 metre yanlış çıkması en güçlü çeldiricidir, çünkü parçadaki 38 sayısını kullanıyor; ama o sayı metre değil, günde kazanılan milyonda bir saniyedir ve hata sabit kalmaz, her gün büyür. Yıllarca birkaç metre doğrulukta kalması parçayla çelişir. Daha az uyduya gerek duyması ve yalnız çekimin zayıf olduğu yerlerde çalışması da parçadan çıkmaz.' },
      { konu: ['yazarın amacı'],
        q: 'The author mentions an error of one millionth of a second mainly in order to ----.',
        options: [
          'show how a tiny timing error can lead to a large error in position',
          'prove that atomic clocks are far less precise than is often believed',
          'explain why a receiver needs signals from at least four satellites',
          'compare the speed of radio signals with the speed of the satellites',
          'suggest that mobile phones contain small atomic clocks of their own',
        ], answer: 0,
        explain: 'Yazar milyonda bir saniyelik bir zamanlama hatasının alıcıyı gerçek konumundan yaklaşık 300 metre uzağa koyacağını söylüyor; hemen ardından da görelilik etkilerinin bu yüzden pratik bir önem taşıdığını ekliyor. Amaç, çok küçük bir zaman hatasının konumda nasıl büyük bir hataya yol açtığını göstermektir. Alıcının neden en az dört uyduya ihtiyaç duyduğunu açıklamak en güçlü çeldiricidir, çünkü dört uydu aynı bölümde anılıyor; ama örnek bu sayıyı açıklamıyor. Atom saatlerinin sanıldığından az duyarlı olduğunu kanıtlamak parçayla çelişir. Sinyal hızıyla uydu hızını karşılaştırmak ve telefonlarda atom saati bulunduğunu ileri sürmek de parçada yok.' },
    ] },
  { id: 'd09-o4', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Karanlıkta kendi ışığı',
    text: 'On land, the ability to produce light is rare; fireflies, along with a few kinds of fungi and worms, are among the best-known examples. In the deep ocean, however, it is the rule rather than the exception. Surveys using cameras on underwater vehicles suggest that a large majority of the animals living in the open water below the sunlit surface layer can make light of their own. In most cases, the light comes from a chemical reaction in which a substance known as luciferin combines with oxygen with the help of an enzyme, releasing energy mainly as light and producing very little heat. Animals use this ability in remarkably varied ways. The anglerfish dangles a glowing lure in front of its mouth to attract prey in the darkness. Many small fish and squid, by contrast, use light to hide. Seen from below, an animal swimming in the dim upper waters appears as a dark shape against the faint light coming from above, so these animals switch on lights along their bellies that match the brightness of the water overhead, making their outline hard to see. Back on land, fireflies flash in patterns that allow males and females of the same species to find each other. Even this system can be exploited: in some species, females imitate the signals of other species, and when a male arrives expecting to find a mate, they catch and eat him.',
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, some small fish and squid light up their bellies in order to ----.',
        options: [
          'blend in with the faint light coming down from the surface',
          'attract prey towards their mouths in the dark deep water',
          'signal to others of their species that they want to mate',
          'warn larger predators that they are poisonous to eat',
          'produce warmth in the cold waters of the deep ocean',
        ], answer: 0,
        explain: 'Parçaya göre aşağıdan bakılınca loş üst sularda yüzen bir hayvan yukarıdan gelen soluk ışığa karşı koyu bir gölge gibi görünür; bu yüzden bazı küçük balıklar ve kalamarlar karınlarındaki ışıkları üstteki suyun parlaklığına denk düşecek biçimde yakar ve görünmez olur. Doğru seçenek bunu başka sözcüklerle veriyor. Avı ağza çekmek en güçlü çeldiricidir, çünkü parçada geçiyor; ama bu, fener balığının ışığı kullanma biçimidir. Eşe işaret vermek ateşböceklerine aittir. Zehir uyarısından parçada söz edilmiyor; ısı üretmek de parçayla çelişir, çünkü tepkime çok az ısı verir.' },
      { konu: ['ayrıntı'],
        q: 'Which of these statements is supported by the passage?',
        options: [
          'Fireflies are the only animals living on land that are able to produce their own light.',
          'Most animals that glow in the dark do so by storing up sunlight during the day.',
          'Making light is far more widespread in the deep sea than on land.',
          'The chemical reaction that produces the light also releases a great deal of heat.',
          'Anglerfish use their glowing lures mainly to hide from larger predators.',
        ], answer: 2,
        explain: 'Parça karada ışık üretmenin seyrek olduğunu, derin okyanusta ise kural sayılacak kadar yaygın olduğunu söylüyor; doğru seçenek bunu veriyor. Ateşböceklerinin karada ışık üreten tek hayvan olması en güçlü çeldiricidir, çünkü parça ateşböceklerini en bilinen örnek olarak anıyor; ama birkaç tür solucanı da sayıyor. Işığın gündüz biriktirilen güneş ışığından gelmesi parçayla çelişir: ışık kimyasal bir tepkimeden doğar. Tepkime çok az ısı verir. Fener balığı da ışığını saklanmak için değil, av çekmek için kullanır.' },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that a male firefly ----.',
        options: [
          'flashes only when there are no predators anywhere close to him',
          'is unable to recognise the females of his own species in the dark',
          'never responds to any flashes produced by other firefly species',
          'is usually larger than the females that he is trying to attract',
          'can be misled by a signal that resembles that of his own species',
        ], answer: 4,
        explain: 'Parçaya göre bazı türlerin dişileri başka türlerin ışık işaretlerini taklit eder ve eş bulmayı bekleyerek gelen erkeği yakalayıp yer. Buradan erkek ateşböceğinin kendi türününkine benzeyen bir işaretle kandırılabileceği sonucu çıkar. Başka türlerin ışıklarına hiç karşılık vermemesi en güçlü çeldiricidir, çünkü ışık düzenlerinin türe özgü olduğu parçada geçiyor; ama taklit eden dişiye gelen erkek tam da başka bir türün ışığına karşılık vermiş olur. Karanlıkta kendi türünün dişilerini tanıyamaması parçayla çelişir: ışık düzenleri bunun içindir. Yırtıcılardan kaçınma ve erkeğin büyüklüğü parçada yok.' },
    ] },
  { id: 'd09-o5', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Gölden yükselen görünmez bulut',
    text: 'On the night of 21 August 1986, a small crater lake in north-western Cameroon suddenly released an enormous cloud of carbon dioxide. Because the gas is heavier than air, it flowed down the surrounding valleys like an invisible flood, and some 1,700 people in nearby villages, along with thousands of cattle, died of suffocation. Most of the victims were asleep and had no warning. Scientists who investigated the disaster found that Lake Nyos lies above a region of volcanic activity, where carbon dioxide from deep underground seeps into the bottom of the lake. Under the weight of the water above, the gas stays dissolved in the deep layers, much as it stays dissolved in an unopened bottle of fizzy drink. Since the layers of the lake seldom mix, the gas had been building up for many years. Something, perhaps a landslide or a sudden cooling of the surface water, appears to have upset this balance; as gas-rich water rose, the pressure on it fell, and the gas came out of solution in a sudden rush. To prevent a repeat, engineers began in 2001 to install pipes that carry water from the bottom of the lake up to the surface. Once the flow has been started, the escaping gas keeps it going by itself, producing a tall fountain and releasing the carbon dioxide gradually and safely. Researchers are also watching other lakes with a similar chemistry, including the much larger Lake Kivu on the border between Rwanda and the Democratic Republic of the Congo, around which millions of people live.',
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, carbon dioxide was able to build up in the deep water of Lake Nyos because ----.',
        options: [
          'the gas was lighter than water and collected in pockets near the bottom',
          'pressure from the overlying water held it in solution, with little mixing',
          'cold surface water absorbed the gas before it could reach the open air',
          'pipes carried the gas from the surface of the lake down to the bottom',
          'a thick layer of volcanic rock sealed the deep water off from the air',
        ], answer: 1,
        explain: "Parçaya göre yerin derinlerinden gölün dibine sızan karbondioksit, üstteki suyun ağırlığı altında derin katmanlarda çözünmüş kalıyordu; gölün katmanları da pek karışmadığı için gaz yıllarca birikti. Doğru seçenek bu iki nedeni birlikte veriyor. Boruların gazı yüzeyden dibe taşıması en güçlü çeldiricidir, çünkü borular parçada geçiyor; ama 2001'den sonra ve tersi yönde, dipteki suyu yüzeye taşımak için kuruldular. Gazın sudan hafif olup dipte cepler oluşturması, soğuk yüzey suyunun gazı emmesi ve volkanik bir kaya katmanının dibi kapatması da parçada yok." },
      { konu: ['yazarın amacı'],
        q: 'The author mentions an unopened bottle of fizzy drink in order to ----.',
        options: [
          'show that carbon dioxide is harmless when present in small amounts',
          'explain why the gas was heavier than the air in the valleys nearby',
          'suggest that the disaster was caused by some kind of human activity',
          'make a process taking place deep in the lake easier to picture',
          'give the reader an idea of how small the crater lake really was',
        ], answer: 3,
        explain: 'Yazar, gölün derin katmanlarında gazın üstteki suyun ağırlığı altında nasıl çözünmüş kaldığını anlatırken açılmamış bir gazlı içecek şişesine benzetme yapıyor. Amaç, gölün dibinde olan bir süreci okurun gözünde canlandırmasını kolaylaştırmaktır. Gazın vadilerdeki havadan neden ağır olduğunu açıklamak en güçlü çeldiricidir, çünkü gazın ağırlığı parçada geçiyor; ama benzetme basınç altında çözünmüş kalmayı anlatıyor, gazın havadaki ağırlığını değil. Karbondioksitin az miktarda zararsız olması, felakete insanların yol açması ve gölün küçüklüğü de benzetmenin amacı değildir.' },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that the pipes installed in Lake Nyos ----.',
        options: [
          'were designed to pump fresh air down into the deep layers of the lake',
          'have already removed every trace of carbon dioxide from the whole lake',
          'were first tested successfully in the much larger Lake Kivu in 2001',
          'need little or no outside power to keep working once started',
          'release all of the gas at once in a single, carefully controlled burst',
        ], answer: 3,
        explain: "Parça, akış bir kez başlatılınca kaçan gazın onu kendi kendine sürdürdüğünü söylüyor. Buradan boruların başlatıldıktan sonra çalışmak için dışarıdan pek enerji gerektirmediği sonucu çıkar. Göldeki bütün karbondioksiti çoktan temizlemiş olması en güçlü çeldiricidir, çünkü boruların gazı güvenle saldığı parçada geçiyor; ama parça gazın 'gradually' (yavaş yavaş) salındığını söylüyor ve göldeki gazın tümüyle bittiğine dair bir şey demiyor. Derin katmanlara hava pompalamak parçadaki işleyişe ters düşer. Boruların önce Kivu Gölü'nde denenmesi parçada yok. Gazı bir anda salmak da 'gradually' sözüyle çelişir." },
    ] },
];

export const DENEME_09 = { id: 'deneme-09', sinav: 'YOKDIL', alan: 'fen', ad: 'Tam deneme 9 (YÖKDİL Fen)', sorular };
