// iDil › Tam deneme 7 (YÖKDİL Fen biçimi; 80 soru, kitapçık sırası). Görev 17, Sınav S2 (23 Kasım 2026).
// Görev 20 (25 Kasım 2026): çeviri çeldiricileri biçim kestirmesine karşı yeniden kuruldu.
// Tümü özgün: Claude yazdı. ÖSYM sorusu, yayınevi, ders kitabı (Murphy, Azar), uygulama ya da gazete metni kopyalanmadı,
// uyarlanmadı; ÖSYM kitapçıkları yazarken açılmadı, yalnız etiket sayımları (analiz/agirlik.json, analiz/dagilim.md,
// analiz/tahmin.md) kullanıldı. Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir.
// Biçim: ../README.md (ünite öğesiyle aynı).
//
// Sıra (turler.js YÖKDİL notu): 1–6 kelime, 7–20 dil bilgisi, 21–30 boşluklu metin (2 × 5), 31–41 cümle tamamlama,
// 42–47 çeviri İng.→Tr., 48–53 çeviri Tr.→İng., 54–59 paragraf tamamlama, 60–65 akışı bozan cümle, 66–80 okuma (5 × 3).
// `sorular` dizisinde parçalar tek öğedir (type 'pratik', adımlarıyla); açılınca 80 soru. YÖKDİL'de diyalog ve yakın anlam yok.
// Kelime sırası (dagilim.md §3.1): isim, isim, sıfat, zarf, fiil, öbek fiil. Dil bilgisi şablonu (dagilim.md §3.2, YÖKDİL):
// 7–8 fiil yapıları (isim-fiil ve mastar, edilgen kanaat), 9–11 edat (in contrast to, vary with, by means of), 12–16 bağlaç,
// bağlantı zarfı ve so … that, 17–18 edat (in the absence of, access to),
// 19 eşleşik bağlaç, 20 sıfat cümleciği (edat + which). İlk dil bilgisi sorusu mastar ve isim-fiil kalıbıdır (deneme 01–05'in
// zaman uyumu ve kip kalıplarından farklı). Cümle tamamlama ilişkileri (dagilim.md §3.3, YÖKDİL): 8 karşıtlık,
// 1 neden-sonuç, 1 koşul, 1 zaman.
// Bütün metinler fen bilimleri alanından. Alt grup dağılımı (soru başına; tahmin.md §5.4 ve dagilim.md §4 hedefi parantezde):
// biyoloji 20 (26), teknoloji 18 (17), kimya 11 (10–11), çevre 10 (11–13), astronomi 9 (10), fizik 11 ve yer bilimi 1 (kalan
// pay). Bilim tarihi ayrı sayılmadı; z2, o2, o4, o5 ve b4 tarihsel bir çerçeve taşır.
// Parça konuları (deneme 01–05, set/set-fen-*.js ve pilot fen ünitelerinin Olgular listeleriyle çakışmaz): okuma o1 guguk
// kuşunun kuluçka asalaklığı (biyoloji), o2 Hubble'ın ayna kusuru ve onarımı (teknoloji), o3 ışık kirliliği ve yaban hayatı
// (çevre), o4 Maillard tepkimesi (kimya), o5 Foucault sarkacı (fizik); boşluklu z1 monark kelebeklerinin göçü (biyoloji),
// z2 cırt cırt bandın buluşu ve biyomimikri (teknoloji).
//
// Olgular (yerleşik bilgi; her biri yalnız gösterildiği öğede; metinler özgün; sayılar yuvarlak ve temkinli):
// - d07-z1: Monark kelebekleri: Kuzey Amerika'nın doğusundaki topluluk sonbaharda Meksika'nın orta kesimindeki az sayıda dağ
//   ormanına (oyamel köknarı ormanları; parçada ad yok) göç eder; güneye göçen yaz sonu kuşağı birkaç ay yaşar, öteki
//   kuşaklar ergin olarak birkaç hafta; üreme ilkbahara ertelenir; kuzeye dönüş birkaç kuşakta tamamlanır (temkinli: "often
//   the grandchildren or great-grandchildren"); güneş pusulası ve iç saatle düzeltme (Merlin, Gegear ve Reppert, Science, 2009:
//   saat antenlerde; parçada ad ve anten yok; temkinli: "evidence suggests").
// - d07-z2: George de Mestral, İsviçreli mühendis; 1940'lar (1941; parçada yıl yok); köpeğiyle yürüyüşten sonra giysiye ve
//   köpeğin tüyüne yapışan pıtraklar (dulavratotu; parçada bitki adı yok); mikroskopta küçük kancalar; sentetik malzemeden
//   (naylon; parçada ad yok) güvenilir kanca üretmenin yıllar alması; kancalı ve ilmekli iki şerit; Velcro adının Fransızca
//   'velours' (kadife) ve 'crochet' (kanca) sözcüklerinden gelmesi; biyomimikri örneği olarak anılması.
// - d07-o1: Guguk kuşu (Cuculus canorus) kuluçka asalaklığı: saz bülbülü gibi genellikle daha küçük ev sahipleri; dişinin çoğu
//   zaman ev sahibinin bir yumurtasını alıp birkaç saniyede yumurtlaması ("may last only a few seconds"); yavrunun genellikle
//   önce çıkıp öteki yumurtaları yuvadan itmesi; saz bülbüllerinin yabancı yumurtaları atması ya da yuvayı bırakması; tek bir
//   ev sahibi türünde uzmanlaşan dişi gruplar (gentes; parçada terim yok) ve yumurta benzerliği; çit serçesinin (dunnock)
//   benzemeyen yumurtaları nadiren reddetmesi ve ilişkinin görece yeni olabileceği önerisi (N. B. Davies ve M. de L. Brooke,
//   1980'ler; parçada ad yok; temkinli: "Some researchers suggest").
// - d07-o2: Hubble Uzay Teleskobu 1990'da fırlatıldı; birkaç hafta içinde bulanık görüntüler (küresel sapma; parçada terim
//   yok); ana ayna kenarlarda yaklaşık 2 mikrometre fazla düz ("roughly one-fiftieth of the width of a human hair"); üretimde
//   aynayı sınayan aygıtın (null corrector) yanlış kurulmuş olması; Aralık 1993'te bir mekik görevinde (STS-61, Endeavour;
//   parçada ad yok) düzeltici optik (COSTAR) ve yeni kamera (WFPC2) takılması; teleskobun yörüngede onarılabilir tasarlanması.
// - d07-o3: Işık kirliliği: deniz kaplumbağası yavrularının gece çıkıp ufkun en parlak yerine yönelmesi, aydınlatılmış
//   kıyılarda karaya yönelmeleri; gece göç eden kuşların ışıklı binalarca yolundan saptırılması ve camlara çarpması ("appear
//   to"); böceklerin lambalara toplanması ve böcek azalmasındaki payın belirsizliği (temkinli: "some scientists believe …
//   may"); önlemler (aşağı yönlü kapaklı lamba, kısık ya da sıcak renkli ışık, gereksiz ışıkları söndürme); bazı kentlerin göç
//   döneminde yüksek binaların ışığını kısması (Kuzey Amerika'daki "Lights Out" uygulamaları; parçada ad yok); bazı kıyı
//   yerleşimlerinin yuvalama döneminde kıyı ışıklarını kısması.
// - d07-o4: Louis-Camille Maillard, Fransız kimyacı, 1912; amino asitlerle bazı şekerlerin (indirgen şekerler; parçada terim
//   yok) tepkimesi; aroma bileşikleri ve kahverengi pigmentler (melanoidinler; parçada terim yok); oda sıcaklığında yavaş,
//   fırın ve tavadaki yüksek sıcaklıkta hızlı; ıslak yüzeyde sıcaklığın 100 °C dolayında kalması; karamelleşmenin yalnız
//   şekerle ve genellikle daha yüksek sıcaklıkta olması; nişastalı yiyeceklerde akrilamit, laboratuvar hayvanlarında yüksek
//   dozda kanser; gıda güvenliği kurumlarının çok koyu pişirmemeyi önermesi (ör. Birleşik Krallık Gıda Standartları Ajansı;
//   parçada ad yok).
// - d07-o5: Léon Foucault, 1851, Paris, Panthéon; uzun telden asılı ağır metal top (yaklaşık 67 m tel ve 28 kg; parçada sayı
//   yok); salınım yönünün dönüyormuş gibi görünmesi; kutupta yaklaşık bir günde (yıldız günü) tam tur, ekvatorda dönme yok,
//   Paris'te bir günden epey uzun (yaklaşık 32 saat; parçada sayı yok); benzer sarkaçların başka kentlerde kurulması;
//   müzelerde çevredeki küçük çubukları sırayla deviren sarkaçlar.
// - d07-p1: Genç ayçiçeklerinin gün boyu doğudan batıya dönmesi ve gece yeniden doğuya dönmesi; olgunlaşınca doğuya dönük
//   kalması; doğuya bakan başların sabah daha çabuk ısınması ve daha çok arı çekmesi (Atamian ve arkadaşları, Science, 2016;
//   cümlede ad yok; temkinli: "seem to").
// - d07-p2: 1980'lerde kırmızı ve yeşil LED'lerin gösterge ışığı olarak yaygın kullanımı; beyaz ışık için mavi gerekmesi;
//   1990'ların başında Japonya'da galyum nitrürden parlak mavi LED; Isamu Akasaki, Hiroshi Amano ve Shuji Nakamura, 2014 Nobel
//   Fizik Ödülü (cümlede ad yok, "three of them"); beyaz LED'lerin çoğunun mavi diyot ve ışığın bir kısmını sarıya çeviren
//   kaplamadan oluşması. Çeldiricide: mavi ışığın havada kırmızıdan çok saçılması (yerleşik).
// - d07-p3: Turbalıklar: su basmış, oksijeni az toprakta bitki kalıntısının çürümeden birikmesi; kapladıkları alana göre çok
//   karbon tutmaları (yaygın tahmin: kara yüzeyinin yaklaşık %3'ü, bütün ormanlardan fazla karbon; cümlede sayı yok,
//   "a remarkable amount of carbon for the area they cover"); kurutulunca karbondioksit salmaları; kuru turbanın aylarca
//   yeraltında için için yanabilmesi. Çeldiricide: bazı ülkelerde turbanın kesilip yakıt olarak kullanılması.
// - d07-p4: Gürültü önleyici kulaklıklar: mikrofon, ayna görüntüsü (ters evreli) dalga, yıkıcı girişim; düzenli ve pes seslerde
//   daha etkili, ani ve tiz seslerde daha az (yerleşik bilgi).
// - d07-p5: Tuzun suyun donma noktasını düşürmesi; çok soğukta yavaşlaması ve kalsiyum klorür gibi başka kimyasallara
//   geçilebilmesi; yol kenarı bitkilerine zarar vermesi ve paslanmayı hızlandırması (yerleşik bilgi; sıcaklık sınırı sayıyla
//   verilmedi). Çeldiricilerde: tuzun deniz suyundan buharlaştırmayla elde edilmesi; kumun buzu eritmeyip kaymayı azaltması.
// - d07-p6: Dünya Güneş'e en çok ocak başında yaklaşır (günberi); mevsimlerin nedeni eksen eğikliği (yerleşik bilgi).
// - d07-b1: Yaprak kesen karıncalar (Amerika'nın sıcak bölgeleri); yaprakları yemeyip çiğneyerek mantar yetiştirmeleri, mantarın
//   koloninin başlıca besini olması; zararlı küfleri ayıklamaları. Aykırı cümlede: keserken çenelerini titreştirmeleri
//   (Tautz ve arkadaşları, 1995; cümlede ad yok; temkinli: "appear to … may help").
// - d07-b2: Kapasitif dokunmatik ekran; insan bedeninin iletkenliği; kalın yün eldivenle çoğu zaman çalışmaması (yerleşik).
//   Aykırı cümlede: eski (dirençli) ekranların bastırılması ve kimi zaman plastik kalemle kullanılması.
// - d07-b3: Kunduzlar "ekosistem mühendisi"; barajlar, göletler ve sulak alanlar; yağmur sonrası suyu tutmaları (temkinli: "may
//   reduce flooding"); göletlerin bazen tarlaları basması. Aykırı cümlede: daldan ve çamurdan yapılan yuvaların su altındaki girişleri.
// - d07-b4: Mikrodalga fırın: su moleküllerinin hızla dönmesiyle ısınma; dalgaların yüzeyden yalnız birkaç santimetre işlemesi;
//   kalın bir yemeğin ortasının soğuk kalabilmesi. Aykırı cümlede: metal eşyanın dalgaları yansıtması ve kıvılcım çıkarabilmesi.
// - d07-b5: Meteor yağmurları: kuyruklu yıldız artıkları; her yıl aşağı yukarı aynı tarihler; Perseidler ağustosta, Swift–Tuttle
//   kuyruklu yıldızı. Aykırı cümlede: yağmur olmayan açık ve karanlık gecelerde de birkaç meteor görülebilmesi.
// - d07-b6: Havai fişek renkleri: stronsiyum kırmızı, baryum yeşil, bakır mavi; mavinin en zor renk sayılması ve bakır
//   bileşiklerinin alev çok ısınınca bozulması (temkinli: "is often said"). Aykırı cümlede: beyaz kıvılcımların alüminyum gibi
//   yanan metal parçacıklarının parlamasından doğması.
// - Tek sorular (yerleşik bilgi; sayı yalnız temkinli ve yuvarlak): k3 helyumun olağan koşullarda bileşik kurmaması; k4 gökte
//   yan yana görünen yıldızların çok farklı uzaklıkta olabilmesi; g1 ötücü kuşların şarkıyı yetişkin erkeklerden öğrenmesi,
//   yalnız büyütülenlerde olağan dışı şarkı ("often"); g2 yaşamın okyanuslarda başladığı görüşü ve karadaki sıcak su havuzları
//   önerisi ("is widely thought", "may have"); g4 kimyasal tepkime hızının sıcaklıkla değişmesi; g7 bazı kurbağaların kışı yarı
//   donmuş geçirmesi; g9 nötron yıldızlarının yoğunluğu ("many millions of tonnes", alt sınır olarak); g10 seramik parçalarının
//   cam geri dönüşümünü bozması; g11 sürtünmesiz düzlemde topun sürekli hareketi (eylemsizlik); g14 suyun kaynama sıcaklığının
//   yükseklikle düşmesi; t1 Jüpiter'deki bir fırtınanın (Büyük Kırmızı Leke; 1830'lardan beri sürekli gözleniyor; cümlede ad ve
//   yıl yok) bir yüzyılı aşkın süredir sürmesi; t3 hidrojen ve oksijenin 18. yüzyılda tanımlanması ve hidrojenli hava gemileri
//   (çeldiricilerde); t6 havasız Ay'da tüy ile çekicin yere aynı anda düşmesi (Apollo 15, 1971; cümlede ad ve yıl yok); t8 Yeşil
//   Sahra dönemi (yaklaşık 11.000–5.000 yıl önce; cümlede sayı yok, "evidence suggests"), Sahra tozunun Atlas Okyanusu'nu aşması
//   (çeldiricide); t9 elektrikli arabaların genellikle daha az düzenli bakım istemesi ("generally"); t10 telefonların aşırı
//   ısınınca bir süre kapanabilmesi ("may"); c2 alüminyumun 19. yüzyılda elde edilmesinin zorluğu ve değerli metal sayılması; c3
//   Ay'ın kutuplarına yakın sürekli karanlık kraterlerde buz bulunması (LCROSS, 2009; cümlede ad yok); c6 Güneş ışığının
//   Dünya'ya yaklaşık sekiz dakikada ulaşması; c9 Güneş tutulmasına doğrudan bakmanın göze zarar verebilmesi; c10 bazı kuşların
//   manyetik alanı algılayarak yön bulduğu görüşü ("think"); c11 yağmur suyunda çözünen karbondioksitin kireçtaşını aşındırıp
//   mağara oluşturması.
// - Öteki öğelerde ad, sayı ya da tarih yok; cümleler genel bilgi ya da kurgusaldır.

const T = 'taslak';
const U = 'Tam deneme 7 (YÖKDİL Fen)';
const C = 'fen';

const sorular = [
  // ---------- 1–6: kelime ----------
  { id: 'd07-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'C1', konu: ['isim'],
    q: 'Because the two populations of frogs had been separated by a mountain range for many thousands of years, researchers were not surprised to find considerable genetic ---- between them.',
    options: ['resemblance', 'inheritance', 'dominance', 'continuity', 'divergence'], answer: 4,
    explain: "İki kurbağa topluluğu binlerce yıl bir dağ sırasıyla birbirinden ayrı yaşamış; bu sürede genleri birbirinden uzaklaşmış olmalı. Araştırmacıların şaşırmadığı şey de bu farklılaşmadır: 'genetic divergence' (genetik ayrışma). 'Resemblance' (benzerlik) en güçlü çeldiricidir, çünkü iki topluluğun genetik ilişkisini anlatabilir; ama bu kadar uzun bir ayrılıktan sonra büyük bir benzerlik bulmak şaşırtıcı olurdu, cümle ise 'not surprised' diyor. 'Continuity' (süreklilik) de aynı nedenle ayrılıkla çelişir. 'Inheritance' (kalıtım) ve 'dominance' (baskınlık) iki topluluk arasında bulunan bir farkı anlatmaz." },
  { id: 'd07-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['isim'],
    q: 'Engineers fitted the remote weather station with a backup battery so that a brief power ---- would not interrupt the recording of data.',
    options: ['surplus', 'expansion', 'outage', 'calibration', 'subscription'], answer: 2,
    explain: "Yedek pil, elektriğin kısa bir süre kesilmesine karşı konur: 'power outage' (elektrik kesintisi). Kesinti olursa ölçümler pil sayesinde sürer. 'Surplus' (fazlalık) en güçlü çeldiricidir, çünkü 'power surplus' da bir elektrik terimidir; ama fazla elektrik veri kaydını durdurmaz, yedek pil gerektirmez. 'Expansion' (genişleme) ve 'calibration' (ayarlama) bir kesinti anlatmaz; 'subscription' (abonelik) de bağlama uymaz." },
  { id: 'd07-k3', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['sıfat'],
    q: 'Helium is chemically ----, which means that under ordinary conditions it does not combine with other elements to form compounds.',
    options: ['volatile', 'inert', 'abundant', 'soluble', 'toxic'], answer: 1,
    explain: "Cümlenin ikinci yarısı sözcüğü tanımlıyor: helyum olağan koşullarda başka elementlerle birleşip bileşik oluşturmaz. Kimyasal olarak tepkimeye girmeyen madde 'inert' (eylemsiz, tepkimeye girmeyen) diye anılır. 'Volatile' (uçucu) en güçlü çeldiricidir, çünkü kimyada sık geçen bir niteliktir; ama kolay buharlaşmayı anlatır, bileşik kurmamayı değil. 'Soluble' (çözünebilen) de bir maddenin başka bir maddeyle ilişkisini anlatır, tepkimeye girmemeyi değil. 'Abundant' (bol) ve 'toxic' (zehirli) 'which means' ile verilen tanıma uymaz." },
  { id: 'd07-k4', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['zarf'],
    q: 'Although the two stars appear to lie side by side in the night sky, they are ---- hundreds of light years apart, since one is much farther from Earth than the other.',
    options: ['scarcely', 'visibly', 'temporarily', 'actually', 'equally'], answer: 3,
    explain: "'Although' görünüşle gerçeği karşılaştırıyor: iki yıldız gökyüzünde yan yana görünür, ama gerçekte aralarında yüzlerce ışık yılı vardır. Görünüşün tersine olan gerçek durumu 'actually' (aslında, gerçekte) anlatır. 'Visibly' (gözle görülür biçimde) en güçlü çeldiricidir, ama aradaki uzaklığın görülebildiğini söyler; yıldızların yan yana görünmesiyle çelişir. 'Scarcely' (ancak, neredeyse hiç) 'hundreds of light years' ile çelişir; 'temporarily' (geçici olarak) ve 'equally' (eşit biçimde) de bu karşıtlığı kurmaz." },
  { id: 'd07-k5', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['fiil'],
    q: 'Healthy wetlands can ---- large amounts of floodwater like a sponge and release it slowly over the following weeks, reducing damage further downstream.',
    options: ['absorb', 'discharge', 'divert', 'contaminate', 'evaporate'], answer: 0,
    explain: "Sünger benzetmesi ve 'release it slowly' iki aşamayı anlatıyor: sulak alan önce suyu içine alır, sonra yavaş yavaş bırakır. İlk aşama 'absorb' (emmek, içine çekmek) olur. 'Discharge' (boşaltmak, salmak) en güçlü çeldiricidir, çünkü suyla kullanılır; ama bırakma işini anlatır ve cümlede bu iş zaten 'release' ile veriliyor. 'Divert' (yönünü değiştirmek) sünger benzetmesine uymaz; 'contaminate' (kirletmek) zararı azaltmaz, artırır. 'Evaporate' (buharlaşmak) bu anlamda nesne almaz ve suyun sonra bırakılmasıyla bağdaşmaz." },
  { id: 'd07-k6', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['öbek fiil'],
    q: 'When the pressure inside the boiler rose above a safe level, a valve opened automatically to ---- some of the steam and prevent an explosion.',
    options: ['let off', 'hold back', 'take in', 'put out', 'break down'], answer: 0,
    explain: "Kazanın içindeki basınç tehlikeli düzeye çıkınca bir supap açılıyor ve buharın bir kısmını dışarı bırakarak patlamayı önlüyor: 'let off steam' (buhar salmak, buharı dışarı vermek). 'Hold back' (tutmak, geri tutmak) en güçlü çeldiricidir, çünkü buharla ilgili bir iş anlatır; ama buharı içeride tutmak basıncı artırır, patlamayı önlemez. 'Take in' (içeri almak) aynı yanlış sonucu verir. 'Put out' (söndürmek) ateş için kullanılır, buhar için değil; 'break down' (bozulmak, ayrıştırmak) da basıncı düşürmeyi anlatmaz." },

  // ---------- 7–20: dil bilgisi ----------
  { id: 'd07-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['isim-fiil ve mastar'],
    q: 'Young songbirds appear ---- their songs by listening to adult males, and birds raised in complete isolation often fail ---- a normal song.',
    options: [
      'learning / developing',
      'to learn / developing',
      'learning / to develop',
      'to learn / to develop',
      'to have learnt / develop',
    ], answer: 3,
    explain: "İki boşluk da önündeki fiile bağlı: 'appear' ve 'fail' ardından mastar ('to + fiil') alır. Böylece 'appear to learn' (öğreniyor görünmek) ve 'fail to develop' (geliştirememek) kurulur. '-ing' biçimi ikisinde de kullanılmaz; bu yüzden yalnız birini mastar yapan seçenekler de yanlıştır. 'To have learnt' 'appear' ardından gelebilir, ama ikinci boşluktaki yalın 'develop' 'fail' ile kurulmaz." },
  { id: 'd07-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['edilgen kanaat'],
    q: 'Life on Earth ---- in the oceans, although some researchers argue that it may have started in hot pools on land.',
    options: [
      'is widely thought to begin',
      'has widely been thought beginning',
      'is widely thought to have begun',
      'widely thinks to have begun',
      'is widely thinking to have begun',
    ], answer: 2,
    explain: "Cümle bugünkü bir kanaati ('some researchers argue' de şimdiki zamanda) çok eski bir olay hakkında aktarıyor. Kanaat şimdide, olay geçmişte olduğu için edilgen kanaat yapısı geçmiş mastarla kurulur: 'is thought to have begun' (başladığı düşünülüyor). 'Is widely thought to begin' en güçlü çeldiricidir, çünkü aynı edilgen yapıyı kullanır; ama yalın mastar başlamayı kanaatle aynı zamana koyar, bir kez ve çok önce olmuş bir başlangıca uymaz. 'Thought beginning' biçimi kurulmaz; 'Life … widely thinks' ve 'is widely thinking' de yaşamı düşünen özne yapar." },
  { id: 'd07-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'In contrast ---- earlier space telescopes, which mainly observed visible light, the new instrument is designed to detect infrared radiation from very distant galaxies.',
    options: ['from', 'of', 'at', 'to', 'by'], answer: 3,
    explain: "'In contrast to' (… den farklı olarak, … in tersine) kalıplaşmış bir edat öbeğidir: eski uzay teleskopları çoğunlukla görünür ışığı gözlerken yeni aygıt çok uzak gökadalardan gelen kızılötesi ışınımı algılamak için tasarlanmış. 'From' en güçlü çeldiricidir, çünkü farklılık bildiren 'different from' kalıbını çağrıştırır; ama 'contrast' bu kalıpta 'to' ya da 'with' alır, 'from' almaz. 'Of', 'at' ve 'by' de 'in contrast' ile kullanılmaz." },
  { id: 'd07-g4', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'The speed at which most chemical reactions take place varies ---- temperature, which is one reason why food kept in a refrigerator stays fresh for longer.',
    options: ['on', 'for', 'to', 'at', 'with'], answer: 4,
    explain: "'Vary with something' (bir şeyle birlikte değişmek, bir şeye göre değişmek) kalıplaşmış bir fiil-edat bağıdır: kimyasal tepkimelerin çoğunun hızı sıcaklıkla birlikte değişir; buzdolabındaki yiyeceğin daha uzun süre bozulmamasının bir nedeni de budur. 'On' en güçlü çeldiricidir, çünkü yakın anlamlı 'depend on' kalıbını çağrıştırır; ama 'vary' bu anlamda 'on' almaz. 'For', 'to' ve 'at' da 'vary' ile neye göre değiştiğini bildirmez." },
  { id: 'd07-g5', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['çok sözcüklü edat'],
    q: 'Engineers can now check the condition of a bridge ---- sensors placed inside its concrete, which send information to a computer around the clock.',
    options: ['in place of', 'by means of', 'on behalf of', 'in addition to', 'regardless of'], answer: 1,
    explain: "Mühendisler köprünün durumunu betonun içine yerleştirilmiş algılayıcılar aracılığıyla denetliyor; bir işin hangi araçla yapıldığı 'by means of' (… aracılığıyla, … yoluyla) ile anlatılır. 'In addition to' (… e ek olarak) en güçlü çeldiricidir, çünkü dil bilgisi açısından uyar; ama algılayıcıları denetimin aracı olmaktan çıkarır ve köprüyle birlikte denetlenen başka bir şey gibi gösterir. 'In place of' (… yerine), 'on behalf of' (… adına) ve 'regardless of' (… e bakmaksızın) da bir araç bildirmez." },
  { id: 'd07-g6', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['bağlaç'],
    q: 'A metal spoon left in a bowl of hot soup soon feels hot to the touch, ---- a wooden spoon stays cool for much longer.',
    options: ['so that', 'whereas', 'because', 'as long as', 'unless'], answer: 1,
    explain: "Cümle iki kaşığı karşılaştırıyor: metal kaşık çabuk ısınır, tahta kaşık ise uzun süre serin kalır. İki durum arasındaki karşıtlık 'whereas' (oysa, … iken) ile bağlanır. 'Because' (çünkü) en güçlü çeldiricidir, çünkü iki yan cümle arasında bir bağ kurar; ama tahta kaşığın serin kalması metal kaşığın ısınmasının nedeni değildir. 'As long as' (… dığı sürece) ve 'unless' (… medikçe) metal kaşığın ısınmasını tahta kaşığa bağlayan anlamsız bir koşul kurar; 'so that' (… sın diye) de bir amaç bildirir." },
  { id: 'd07-g7', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Some frogs that live in cold regions survive the winter partly frozen, and they stay completely still ---- temperatures rise again in spring.',
    options: ['once', 'although', 'so that', 'as though', 'until'], answer: 4,
    explain: "Kurbağalar kışı yarı donmuş geçirir ve ilkbaharda hava yeniden ısınana kadar hiç kıpırdamaz; bir durumun bir olaya kadar sürdüğü 'until' (… e kadar) ile anlatılır. 'Once' (… ince, … dikten sonra) en güçlü çeldiricidir, çünkü o da zaman bağlacıdır; ama kurbağaların hava ısındıktan sonra hareketsiz kaldığını söyler, anlamı ters çevirir. 'Although' (… e karşın) bir karşıtlık, 'so that' (… sın diye) bir amaç, 'as though' (sanki) bir benzetme kurar." },
  { id: 'd07-g8', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlantı zarfı'],
    q: 'A catalyst speeds up a chemical reaction without being used up in the process; ----, a small amount of it can be used again and again.',
    options: ['nevertheless', 'for instance', 'therefore', 'in contrast', 'otherwise'], answer: 2,
    explain: "Noktalı virgülden önce bir özellik, sonra onun sonucu var: katalizör tepkimede tükenmediği için az bir miktarı tekrar tekrar kullanılabilir. Sonuç 'therefore' (bu yüzden) ile bağlanır. 'Nevertheless' (yine de) en güçlü çeldiricidir, ama iki bölüm arasına bir karşıtlık koyar; oysa ikinci bölüm birincinin doğal sonucudur. 'For instance' (örneğin) örnek, 'in contrast' (buna karşılık) karşılaştırma, 'otherwise' (yoksa) tersi durumda olacak olanı bildirir." },
  { id: 'd07-g9', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['so/such … that'],
    q: 'Neutron stars are ---- dense ---- a single teaspoon of their material would weigh many millions of tonnes on Earth.',
    options: ['such / that', 'too / to', 'so / that', 'as / as', 'more / than'], answer: 2,
    explain: "Cümle bir sonuç bildiriyor: nötron yıldızları öyle yoğundur ki maddesinin bir çay kaşığı Dünya'da milyonlarca ton gelirdi. Tek başına bir sıfatla ('dense') sonuç cümlesi 'so … that' ile kurulur. 'Such … that' de sonuç bildirir, ama ardından bir isim öbeği ister ('such dense objects that'); yalın bir sıfatla kullanılmaz. 'Too … to' ardından bir fiil ister ve 'olamayacak kadar' anlamı verir. 'As … as' ve 'more … than' bir karşılaştırma kurar; ikinci bölüm ise karşılaştırılan bir şey değil, tam bir cümledir." },
  { id: 'd07-g10', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Glass can be melted down and made into new bottles many times, ---- it is not mixed with pieces of ceramic, which do not melt at the same temperature.',
    options: ['even if', 'provided that', 'so that', 'whereas', 'as though'], answer: 1,
    explain: "Cam birçok kez eritilip yeniden şişe yapılabilir, ama bir koşulla: içine seramik parçaları karışmamalıdır, çünkü seramik aynı sıcaklıkta erimez. Koşul 'provided that' (… şartıyla, … mek koşuluyla) ile bağlanır. 'Even if' (… se bile) en güçlü çeldiricidir, çünkü o da koşul bildirir; ama 'seramik karışmasa bile' der ve karışmamayı bir engel gibi gösterir, mantığı ters çevirir. 'So that' (… sın diye) amaç, 'whereas' (oysa) karşıtlık, 'as though' (sanki) benzetme bildirir." },
  { id: 'd07-g11', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['çok sözcüklü edat'],
    q: '---- friction, a ball rolling across a perfectly flat surface would keep moving at the same speed forever.',
    options: ['In spite of', 'In the absence of', 'In the event of', 'On behalf of', 'Because of'], answer: 1,
    explain: "Cümle bir varsayım kuruyor ('would keep moving'): sürtünme olmasaydı, tümüyle düz bir yüzeyde yuvarlanan top sonsuza dek aynı hızla giderdi. Bir şeyin yokluğunu bildiren öbek 'in the absence of' (… olmadığında, … yokluğunda) olur. 'In spite of' (… e karşın) en güçlü çeldiricidir, çünkü sürtünmeyi aşılan bir engel gibi gösterir; ama sürtünme varken top sonsuza dek gidemez, cümle bu yüzden bir yokluk bekliyor. 'Because of' sürtünmeyi hareketin nedeni yapar; 'in the event of' (… durumunda) da sürtünmenin varlığını koşul yapar ve aynı yanlışa düşer. 'On behalf of' (… adına) anlamsızdır." },
  { id: 'd07-g12', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'The first computers were extremely expensive and filled entire rooms, and access ---- them was limited mainly to governments, universities and large companies.',
    options: ['for', 'of', 'to', 'with', 'at'], answer: 2,
    explain: "'Access to something' (bir şeye erişim) kalıplaşmış bir isim-edat bağıdır: ilk bilgisayarlara erişim çoğunlukla hükümetler, üniversiteler ve büyük şirketlerle sınırlıydı. 'For' en güçlü çeldiricidir, çünkü erişimin kimin için olduğu düşünülebilir ('access for researchers'); ama erişilen şey 'to' ile gelir. 'Of', 'with' ve 'at' 'access' ile erişilen şeyi bildirmez." },
  { id: 'd07-g13', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['eşleşik bağlaç'],
    q: 'Plants need ---- light ---- carbon dioxide to make sugar, which is why a plant kept in a dark room weakens even when fresh air is plentiful.',
    options: ['either / or', 'neither / nor', 'whether / or', 'rather / than', 'both / and'], answer: 4,
    explain: "Cümlenin ikinci yarısı ipucu veriyor: havası bol ama karanlık bir odadaki bitki zayıflıyor. Demek ki bitkiye karbondioksit yetmiyor, ışık da gerekiyor; ikisi birlikte gereklidir: 'both … and' (hem … hem de). 'Either … or' (ya … ya da) en güçlü çeldiricidir, çünkü dil bilgisi açısından uyar; ama ikisinden birinin yeteceğini söyler, o zaman havası bol odadaki bitki zayıflamazdı. 'Neither … nor' bitkinin ikisine de ihtiyacı olmadığını söyler. 'Whether … or' bir seçim ya da belirsizlik bildirir; 'rather … than' da 'need' ile iki gereksinimi bağlamaz." },
  { id: 'd07-g14', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edat + which'],
    q: 'The temperature ---- water boils falls as you climb higher, because the air pressure becomes lower with altitude.',
    options: ['in which', 'by which', 'which', 'at which', 'whose'], answer: 3,
    explain: "Boşluk 'the temperature' sözcüğünü niteleyen bir sıfat cümleciği açıyor: suyun kaynadığı sıcaklık. Cümlecikte sıcaklık bir edatla bağlanır, çünkü su bir sıcaklıkta kaynar ('water boils at a temperature'); bu yüzden 'at which'. 'In which' en güçlü çeldiricidir, çünkü edat + which yapısındadır; ama sıcaklık için 'in' kullanılmaz. 'By which' bir araç ya da yol bildirir. Yalın 'which' cümlecikte bir özne ya da nesne ister, oysa 'water boils' tam bir cümledir; 'whose' de ardından bir isim ister." },

  // ---------- 21–30: boşluklu metin ----------
  { id: 'd07-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Kuşaklar boyu süren yolculuk',
    text: 'Every autumn, millions of monarch butterflies leave eastern North America and fly south to spend the winter in a small number of mountain forests in central Mexico. What makes this journey remarkable is that none of the butterflies (1) ---- it has ever travelled the route before. The monarchs that fly south belong to a special late-summer generation. Their parents and grandparents usually live (2) ---- only a few weeks as adults, but these butterflies can survive for several months. They delay breeding until early spring, (3) ---- they begin to move north again. The return, however, is a relay: the butterflies lay their eggs along the way and die, and their offspring carry on. (4) ----, the monarchs that reach the northern edge of the range in summer are often the grandchildren or great-grandchildren of those that left it the previous autumn. Scientists are still investigating how inexperienced insects find a destination thousands of kilometres away, but evidence suggests that they use the sun as a (5) ----, correcting for its movement across the sky with an internal clock.',
    steps: [
      { konu: ['ortaç öbeği'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['making', 'made', 'to make', 'having been made', 'makes'], answer: 0,
        explain: "Boşluktaki öbek 'the butterflies' sözcüğünü niteliyor: bu yolculuğu yapan kelebeklerin hiçbiri yolu daha önce gitmemiştir. Kelebekler yolculuğu kendileri yaptığı için etken anlamlı ortaç gerekir: 'making it' ('which make it' cümleciğinin kısaltılmışı). 'Made' ve 'having been made' edilgendir; kelebekleri yolculuğun yapılan nesnesi gibi gösterir. 'Makes' bağlaç ya da ilgi zamiri olmadan ikinci bir çekimli fiil olarak gelemez; 'to make' de burada 'yapacak olan' gibi bir anlam verir ve cümleye uymaz." },
      { konu: ['edat'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['since', 'during', 'for', 'by', 'within'], answer: 2,
        explain: "Boşluktan sonra bir süre geliyor: anne babaları ve büyükanne büyükbabaları ergin olarak yalnız birkaç hafta yaşar. Bir işin ne kadar sürdüğü 'for' ile anlatılır ('live for a few weeks'). 'During' en güçlü çeldiricidir, çünkü o da süreyle ilgilidir; ama bir dönemin adını ister ('during the summer'), süre ölçüsüyle kullanılmaz. 'Since' bir başlangıç noktası, 'by' bir son tarih bildirir; 'within' (… içinde) de yaşam süresini ölçmez." },
      { konu: ['sıfat cümleciği'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['which', 'when', 'where', 'whose', 'that'], answer: 1,
        explain: "Virgülden sonraki cümlecik 'early spring' zamanını niteliyor: kelebekler kuzeye yeniden yöneldikleri ilkbahar başına kadar üremeyi erteler. Bir zamanı niteleyen ve ardından tam bir cümle alan ilgi sözcüğü 'when' olur. 'Which' en güçlü çeldiricidir, çünkü zaman adlarını da niteleyebilir; ama cümlecikte bir özne ya da nesne eksik olmalıdır, oysa 'they begin to move north again' tamdır. 'Where' bir yer, 'whose' iyelik bildirir; 'that' de virgülden sonra kullanılmaz." },
      { konu: ['bağlantı zarfı'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['Instead', 'In contrast', 'Nevertheless', 'As a result', 'Similarly'], answer: 3,
        explain: "Önceki cümle dönüşün bir bayrak yarışı olduğunu söylüyor: kelebekler yolda yumurtlayıp ölür, yolu yavruları sürdürür. Boşluklu cümle bunun sonucunu veriyor: yazın kuzeye varanlar çoğu zaman sonbaharda gidenlerin torunları ya da torunlarının çocuklarıdır. Sonuç 'As a result' (bunun sonucunda) ile bağlanır. 'Nevertheless' (yine de) en güçlü çeldiricidir, ama iki cümle arasına bir karşıtlık koyar. 'Instead' (bunun yerine) ve 'In contrast' (buna karşılık) da bir seçenek ya da karşıtlık kurar; 'Similarly' (benzer biçimde) ise benzer bir ikinci durum bekler." },
      { konu: ['isim'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['compass', 'shelter', 'fuel', 'mirror', 'barrier'], answer: 0,
        explain: "Cümle deneyimsiz kelebeklerin binlerce kilometre ötedeki yeri nasıl bulduğunu soruyor; cevap güneşi yön bulmak için kullanmalarıdır. Yön gösteren araç 'compass' (pusula) olur; güneşin gökyüzündeki hareketini bir iç saatle düzeltmeleri de bunu destekler. 'Shelter' (sığınak) ve 'fuel' (yakıt) güneşle ilişkilendirilebilir, ama yön bulmayı anlatmaz. 'Mirror' (ayna) ve 'barrier' (engel) de yolculukta yol göstermeyi anlatmaz." },
    ] },
  { id: 'd07-z2', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Pıtraktan çıkan buluş',
    text: "In the 1940s, a Swiss engineer named George de Mestral came home from a walk with his dog and found small burrs, the prickly seed cases of a common plant, stuck (1) ---- his clothes and the dog's coat. Curious about why they held on so firmly, he looked at one under a microscope and saw that it was covered in hundreds of tiny hooks, (2) ---- catch on anything with loops, such as fabric or fur. De Mestral realised that the same principle could be used to make a new kind of fastener. Turning the idea into a product, however, required considerable (3) ----. It took him years to produce reliable hooks from synthetic material, but he eventually (4) ---- a design made of two strips, one covered in stiff hooks and the other in soft loops. He named the product Velcro, combining the French words for 'velvet' and 'hook'. It is often given as a classic example of biomimicry, the practice of (5) ---- solutions to human problems in nature.",
    steps: [
      { konu: ['edat'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['by', 'from', 'to', 'at', 'for'], answer: 2,
        explain: "Pıtraklar giysilere ve köpeğin tüylerine yapışmıştı: 'stuck to something' (bir şeye yapışmış). 'By' en güçlü çeldiricidir, çünkü 'stuck' edilgen bir ortaç gibi görünür ve 'by' ile işi yapanı arar; ama giysiler pıtrakları yapıştıran özne değil, pıtrakların yapıştığı yerdir. 'From' ayrılma, 'at' bir nokta, 'for' amaç bildirir; hiçbiri 'stuck' ile yapışılan yüzeyi göstermez." },
      { konu: ['sıfat cümleciği'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['which', 'where', 'whose', 'what', 'who'], answer: 0,
        explain: "Virgülden sonraki cümlecik 'tiny hooks' sözcüğünü niteliyor ve cümlecikte kancalar öznedir: ilmekli her şeye takılan küçük kancalar. Kancaların bu özelliği genel bir gerçek olduğu için cümlecik geniş zamandadır ('catch'). Virgülden sonra bir nesneyi özne olarak niteleyen ilgi zamiri 'which' olur. 'Who' en güçlü çeldiricidir, çünkü özne yerine geçer; ama insanlar için kullanılır. 'Where' bir yer ve tam bir cümle, 'whose' ardından bir isim ister; 'what' de bir ismi nitelemez." },
      { konu: ['isim'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['reluctance', 'persistence', 'publicity', 'coincidence', 'generosity'], answer: 1,
        explain: "Sonraki cümle ipucunu veriyor: güvenilir kancaları üretmek de Mestral'in yıllarını aldı. Yıllarca vazgeçmeden uğraşmak 'persistence' (azim, sebat) ister. 'Coincidence' (rastlantı) en güçlü çeldiricidir, çünkü buluşun bir yürüyüşteki rastlantıyla başladığı anlatılıyor; ama ürünü geliştirmek rastlantıyla değil, yıllar süren emekle oldu. 'Reluctance' (isteksizlik) ve 'generosity' (cömertlik) bu emeği anlatmaz; 'publicity' (tanıtım) de üretim sorununu çözmez." },
      { konu: ['öbek fiil'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['put up with', 'ran out of', 'looked down on', 'came up with', 'got away with'], answer: 3,
        explain: "Yıllarca uğraştıktan sonra de Mestral sonunda iki şeritten oluşan bir tasarım buldu: 'come up with' (bir fikir ya da çözüm bulmak, ortaya koymak). 'Put up with' (katlanmak) en güçlü çeldiricidir, çünkü uzun bir uğraşı çağrıştırır; ama bir tasarıma katlanmak anlamsızdır ve tasarım onun kendi buluşudur. 'Ran out of' (tükenmek) ve 'looked down on' (küçümsemek) anlamı ters çevirir; 'got away with' (paçayı kurtarmak) da bir buluş anlatmaz." },
      { konu: ['isim-fiil ve mastar'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['to look for', 'looking for', 'look for', 'having looked for', 'being looked for'], answer: 1,
        explain: "Boşluk 'of' edatından sonra geliyor ve edattan sonra fiil '-ing' biçimini alır: 'the practice of looking for solutions' (çözümleri doğada arama uygulaması). 'To look for' en güçlü çeldiricidir, çünkü amaç anlamı taşır; ama edattan sonra mastar gelmez. Yalın 'look for' da edattan sonra kullanılmaz. 'Having looked for' işi bitmiş bir geçmişe koyar; 'being looked for' da edilgendir ve çözümleri arayan değil aranan yapar, oysa ardından bir nesne geliyor." },
    ] },

  // ---------- 31–41: cümle tamamlama ----------
  { id: 'd07-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although most storms on Earth die out within a few days or weeks, ----.',
    options: [
      'the strongest of them can cause serious damage on land',
      'satellites let forecasters track them across the oceans',
      'many of them form over warm seas towards the end of summer',
      'a storm on Jupiter has lasted for well over a century',
      'some bring heavy rain to areas thousands of kilometres wide',
    ], answer: 3,
    explain: "'Although' beklenenin tersini ister: Dünya'daki fırtınaların çoğu birkaç gün ya da hafta içinde söner; buna karşın Jüpiter'deki bir fırtına bir yüzyılı aşkın süredir sürüyor. Fırtınaların kısa ömrüne karşıt bir bilgi yalnız bu tamamlamada var. En güçlü çeldirici, en güçlü fırtınaların karada ciddi zarar verebilmesidir; çünkü fırtınalarla ilgili doğru bir bilgidir, ama kısa ömürle bir karşıtlık kurmaz. Uydularla izlenmeleri, sıcak denizlerde oluşmaları ve geniş alanlara yağmur getirmeleri de Dünya'daki fırtınalara ek bilgi verir, girişe karşıt bir durum getirmez." },
  { id: 'd07-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: '----, the bodies of sharks are supported by skeletons made of cartilage rather than bone.',
    options: [
      'Like the whales and dolphins sharing their waters',
      'Because they spend their whole lives in salt water',
      'Just as in the bony fish of rivers and lakes',
      'Since they first appeared in the ancient oceans',
      'Unlike most of the other fish in the sea',
    ], answer: 4,
    explain: "Ana cümle köpekbalıklarının iskeletinin kemikten değil kıkırdaktan olduğunu söylüyor; bu, onları denizdeki öteki balıkların çoğundan ayıran bir özelliktir. Karşıtlık 'Unlike' (… den farklı olarak) ile kurulur. Balinalar ve yunuslarla benzetme kuran tamamlama en güçlü çeldiricidir, çünkü onlar da denizde yaşar; ama memelidirler ve iskeletleri kemiktir, 'Like' ise aynı özelliği paylaştıklarını söylerdi. Kemikli balıklarla benzetme ('Just as in') açıkça çelişir. Tuzlu suda yaşamak kıkırdak iskeletin nedeni olarak verilemez; 'Since they first appeared' de geniş zamanlı ana cümleyle zaman uyumu kurmaz." },
  { id: 'd07-t3', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although water is made of hydrogen, a highly flammable gas, and oxygen, which makes things burn more fiercely, ----.',
    options: [
      'both of these gases can be stored safely under high pressure',
      'it was first shown to be a compound in the late eighteenth century',
      'hydrogen is the lightest element and was once used in airships',
      'it remains a common choice for putting out ordinary fires',
      'it covers most of the surface of our planet',
    ], answer: 3,
    explain: "'Although' beklenenin tersini ister: su, kolay yanan bir gazla yanmayı şiddetlendiren bir gazdan oluşuyor; buna karşın sıradan yangınları söndürmede hâlâ sık başvurulan bir maddedir. Bu tamamlama girişteki iki özelliğe doğrudan bir karşıtlık kuruyor. Suyun on sekizinci yüzyılın sonunda bir bileşik olduğunun gösterilmesi en güçlü çeldiricidir, çünkü o da suyu anlatıyor ve iki gazdan oluşmasıyla ilgilidir; ama girişle çelişen bir bilgi getirmez, onu destekler. Suyun gezegenimizin yüzeyinin çoğunu kaplaması da doğru bir bilgidir, ama yanıcı gazlarla bir karşıtlık kurmaz. Gazların basınç altında saklanması ve hidrojenin hava gemilerinde kullanılması ise suyun kendisinden söz etmez." },
  { id: 'd07-t4', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['karşıtlık'],
    q: 'While the first mobile phones could do little more than make calls and send short text messages, ----.',
    options: [
      'they were heavy and their batteries ran out very quickly',
      'modern smartphones also serve as cameras, maps, diaries and music players',
      'they were far too expensive for most ordinary people to buy',
      'their small screens could display text in only a single dull colour',
      'many of the early networks covered only a few large cities',
    ], answer: 1,
    explain: "'While' burada karşıtlık bildiriyor: ilk cep telefonları arama ve kısa mesaj dışında pek bir şey yapamıyordu, bugünkü akıllı telefonlar ise kamera, harita ve müzik çalar işini de görüyor. Karşılaştırmanın öteki ucu yalnız bu tamamlamada var. Tek renkli küçük ekranlar en güçlü çeldiricidir, çünkü ilk telefonlarla ilgilidir; ama onların sınırlılığını sürdürür, karşıt bir durum getirmez. Ağırlık ve kısa pil ömrü, yüksek fiyat ve sınırlı şebekeler de aynı tarafta kalır." },
  { id: 'd07-t5', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Even though rats were removed from the island more than ten years ago, ----.',
    options: [
      'the numbers of seabirds nesting there have risen considerably since then',
      'the island had been free of rats for most of its long history',
      'removing them required careful planning and many volunteers',
      'visitors are asked to check their boats for rats before landing',
      'several kinds of ground-nesting bird have still not returned to it',
    ], answer: 4,
    explain: "'Even though' beklenmedik bir sonuç ister: fareler on yıldan uzun süre önce adadan temizlendi, buna karşın yerde yuva yapan bazı kuşlar hâlâ geri dönmedi. Bu tamamlama, girişin bekletebileceği iyileşmenin olmadığını söylüyor. Deniz kuşlarının sayısının artması en güçlü çeldiricidir, çünkü farelerin temizlenmesiyle ilgilidir; ama beklenen sonucu verir, karşıtlık kurmaz. Temizliğin dikkatli plan istemesi ve teknelerin denetlenmesi de karşıtlık değil ek bilgidir. Adanın tarihinin çoğunda faresiz olması ise past perfect ile girişteki olaydan önceye gider ve karşıtlık kurmaz." },
  { id: 'd07-t6', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Whereas on Earth the resistance of the air makes a feather fall far more slowly than a hammer, ----.',
    options: [
      'on a windy day the two may land a long way apart from each other',
      'on a calm day the two may land a short way apart from each other',
      'the shape of an object affects how much air it pushes aside',
      'on the airless Moon the two reach the ground at the same moment',
      'on the Moon the two would be much easier to lift than they are here',
    ], answer: 3,
    explain: "'Whereas' iki durumu karşılaştırır. Kök Dünya'daki durumu tümüyle veriyor: hava direnci tüyü çekiçten çok daha yavaş düşürür. Karşılaştırmanın öteki ucu havanın olmadığı bir ortam olmalı: havasız Ay'da ikisi yere aynı anda düşer. Ay'da tüyle çekicin çok daha kolay kaldırılması en güçlü çeldiricidir, çünkü o da Ay'daki durumu anlatıyor; ama düşmeden değil ağırlıktan söz eder ve hız farkına karşıt bir durum getirmez. Rüzgârlı bir günde ikisinin birbirinden uzağa düşmesi Dünya'daki havanın etkisini sürdürür. Sakin bir günde birbirine yakın düşmeleri de yine Dünya'da geçer ve kökteki duruma karşıt bir durum getirmez. Cismin biçiminin itilen havayı etkilemesi ise Dünya'daki hava direncini anlatmayı sürdürür." },
  { id: 'd07-t7', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['karşıtlık'],
    q: 'Although a whale may look like a very large fish, ----.',
    options: [
      'it spends its entire life in the sea and rarely comes near the shore',
      'its smooth, streamlined body helps it to move quickly through water',
      'it breathes air and feeds its young on milk, as other mammals do',
      'some species can grow longer than a bus and weigh many tonnes',
      'many species travel thousands of kilometres between seasons',
    ], answer: 2,
    explain: "'Although' görünüş ile gerçek arasında bir karşıtlık bekler: balina büyük bir balığa benzeyebilir, ama hava solur ve yavrusunu sütle besler, yani bir memelidir. Görünüşü düzelten bilgi yalnız bu tamamlamada var. Akıcı ve düzgün gövdesinin suda hızlı hareketi sağlaması en güçlü çeldiricidir, çünkü vücut biçimiyle ilgilidir; ama balığa benzerliği destekler. Bütün yaşamını denizde geçirmesi de aynı taraftadır. Büyüklüğü ve uzun göçleri ise balık görünümüyle bir karşıtlık kurmaz." },
  { id: 'd07-t8', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although the Sahara is one of the driest places on Earth, ----.',
    options: [
      'strong winds there regularly carry its fine dust far across the Atlantic Ocean',
      'very few people live permanently in most of the vast area that the desert covers',
      'it stretches across a large part of northern Africa from east to west',
      'its sand dunes are shaped and moved by winds over many years',
      'evidence suggests that much of it was once covered by grassland and lakes',
    ], answer: 4,
    explain: "'Although' bugünkü kuraklığa karşıt bir bilgi ister: Sahra bugün dünyanın en kurak yerlerinden biri, ama kanıtlar bir zamanlar büyük kısmının otlak ve göllerle kaplı olduğunu düşündürüyor. En güçlü çeldirici rüzgârların tozunu Atlas Okyanusu'nun ötesine taşımasıdır, çünkü çölün dikkat çekici bir özelliğidir; ama kuraklıkla çelişmez, onu destekler. Seyrek nüfus, Kuzey Afrika'ya yayılması ve kum tepelerinin rüzgârla biçimlenmesi de kuraklıkla uyumlu ek bilgilerdir." },
  { id: 'd07-t9', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['neden-sonuç'],
    q: 'Because electric cars have far fewer moving parts than cars with petrol engines, ----.',
    options: [
      'they usually need less routine maintenance',
      'their batteries lose some capacity over time',
      'the first models appeared over a century ago',
      'drivers must plan long trips around charging',
      'many cities have built new charging points',
    ], answer: 0,
    explain: "'Because' bir neden veriyor ve ardından onun sonucu gelmeli: hareketli parçası az olan bir araçta aşınan ve değiştirilmesi gereken parça da azdır, bu yüzden elektrikli arabalar genellikle daha az düzenli bakım ister. Pillerin zamanla kapasite yitirmesi en güçlü çeldiricidir, çünkü elektrikli arabalarla ilgili gerçek bir bilgidir; ama hareketli parçaların azlığından doğmaz. Uzun yolculukların şarja göre planlanması ve kentlerin şarj noktası kurması da pille ilgilidir, nedenle değil. İlk modellerin bir yüzyılı aşkın süre önce çıkması da bir sonuç değildir." },
  { id: 'd07-t10', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['koşul'],
    q: 'If a smartphone is left in direct sunlight on a very hot day, ----.',
    options: [
      'its battery would have lasted longer if it had been fully charged',
      'the signal it receives from nearby masts becomes much stronger',
      'it may shut itself down for a while to protect its battery from damage',
      'many people prefer to use its camera when they are outdoors',
      'it was probably made in a factory that recycles its own waste',
    ], answer: 2,
    explain: "Gerçek bir koşul cümlesi ('If' + geniş zaman) olası bir sonuç ister: çok sıcak bir günde doğrudan güneşte kalan telefon, pilini korumak için bir süre kapanabilir. 'May' bu sonucu temkinli veriyor. Üçüncü tip koşula geçen tamamlama ('would have lasted … if it had been') en güçlü çeldiricidir, çünkü pille ilgilidir; ama zaman uyumu bozuk ve sıcaklıkla bir bağ kurmaz. Sinyalin güçlenmesi sıcaklığın bir sonucu değildir. İnsanların dışarıda kamera kullanması ve fabrikanın atığını geri dönüştürmesi de koşulla ilgisizdir." },
  { id: 'd07-t11', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['zaman'],
    q: 'By the time the light from a very distant galaxy reaches our telescopes, ----.',
    options: [
      'the galaxy may have changed a great deal',
      'it had been travelling for only a few seconds',
      'its colour shows which elements the galaxy has',
      'the galaxy will be clearly visible to the eye',
      'astronomers were measuring how far away it was',
    ], answer: 0,
    explain: "'By the time' bir andan önce tamamlanmış ya da tamamlanmış olabilecek bir durum ister: çok uzak bir gökadanın ışığı teleskoplarımıza varana dek gökadanın kendisi çok değişmiş olabilir, çünkü ışık yolda çok uzun süre geçirmiştir. 'May have changed' bu anı ve temkini birlikte veriyor. Rengin gökadadaki elementleri göstermesi en güçlü çeldiricidir, çünkü gerçek bir gözlem yöntemidir; ama 'by the time' ile bir zaman ilişkisi kurmaz. Işığın yalnız birkaç saniye yolda kalması hem yanlıştır hem de past perfect ile geniş zamanlı girişe uymaz. Çıplak gözle görülme ve geçmişte süren ölçüm de zaman uyumunu bozar." },

  // ---------- 42–47: çeviri İng. → Tr. ----------
  { id: 'd07-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'Trees that grow in crowded forests tend to be taller and thinner than those that grow alone in open fields.',
    options: [
      'Kalabalık ormanlarda yetişen ağaçlar, açık arazide tek başına yetişenlerin aksine her zaman daha uzun ve daha ince olur.',
      'Kalabalık ormanlarda yetişen ağaçlar, açık arazide kümeler hâlinde yetişenlere göre daha uzun ve daha ince olma eğilimindedir.',
      'Kalabalık ormanlarda yetişen çamlar, açık arazide kümeler hâlinde yetişenlere göre daha uzun ve daha ince olma eğilimindedir.',
      'Kalabalık ormanlarda yetişen ağaçlar, açık arazide tek başına yetişenlere göre daha uzun ve daha ince olma eğilimindedir.',
      'Kalabalık ormanlarda yetişen ağaçlar, açık arazide kümeler hâlinde yetişenlere göre daha uzun ve daha ince olmaya başlamıştır.',
    ], answer: 3,
    explain: "İngilizce cümle iki ağaç grubunu karşılaştırıyor: 'trees that grow in crowded forests' (kalabalık ormanlarda yetişen ağaçlar) ve 'those that grow alone in open fields' (açık arazide tek başına yetişenler). 'Tend to be' bir eğilim bildirir: daha uzun ve daha ince olma eğilimindedir. Karşılaştırmanın öbür ucunu 'kümeler hâlinde yetişenler' yapan ve başka yeri değişmeyen çeviri, 'alone' sözünü karşılamıyor. 'Olmaya başlamıştır' ile biten çeviri genel bir eğilimi yeni başlamış bir değişime çeviriyor; açık arazidekiler de yine kümeler hâlinde. Ağaçları 'çamlar'a indiren çeviri özneyi daraltıyor ve 'alone' yerine kümeleri koyuyor. 'Her zaman … olur' ise karşılaştırmayı doğru kursa da 'tend to' sözünün bildirdiği eğilimi istisnasız bir kurala çeviriyor." },
  { id: 'd07-c2', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['so/such … that', 'edilgen'],
    q: 'Aluminium, which is now one of the cheapest metals, was once so difficult to extract that it was regarded as a precious metal.',
    options: [
      'Bugün en ucuz metallerden biri olan alüminyum, bir zamanlar o kadar zor elde ediliyordu ki değerli bir metal sayılıyordu.',
      'Bugün en yaygın metallerden biri olan alüminyum, bir zamanlar o kadar zor elde ediliyordu ki stratejik bir metal sayılıyordu.',
      'Bugün en ucuz metallerden biri olan alüminyum, bir zamanlar zor elde edilse de hiç değerli sayılmadı.',
      'Bugün en yaygın metallerden biri olan alüminyum, bir zamanlar o kadar zor elde ediliyordu ki değerli bir metal sayılıyordu.',
      'Bugün en yaygın metallerden biri olan alüminyum, bir zamanlar o kadar zor elde ediliyordu ki yalnız laboratuvarlarda kullanılıyordu.',
    ], answer: 0,
    explain: "Cümlede bir sıfat cümleciği ('which is now one of the cheapest metals': bugün en ucuz metallerden biri olan) ve bir sonuç yapısı var: 'was once so difficult to extract that it was regarded as a precious metal' (bir zamanlar o kadar zor elde ediliyordu ki değerli bir metal sayılıyordu). Alüminyumu 'en yaygın metallerden biri' diye niteleyen ve kalan yapıyı koruyan çeviri, 'cheapest' sözünü yaygınlığa çeviriyor. Alüminyumun 'stratejik bir metal' sayıldığını söyleyen çeviride sonuç da değişiyor: kaynak cümle değerli bir metalden söz ediyor. Sonucu 'yalnız laboratuvarlarda kullanılıyordu' diye veren çeviri değerli sayılmayı başka bir sonuçla değiştiriyor ve 'cheapest' sözünü karşılamıyor. 'Zor elde edilse de hiç değerli sayılmadı' ise sıfat cümleciğini doğru verse de sonucu olumsuza çeviriyor." },
  { id: 'd07-c3', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['isim cümleciği'],
    q: "It is still not known whether the ice found in permanently dark craters near the Moon's poles could be used as a source of water by future missions.",
    options: [
      "Ay'ın kutuplarına yakın, sürekli karanlık kraterlerde bulunan buzun gelecekteki uzay görevlerinde su kaynağı olarak nasıl kullanılabileceği hâlâ bilinmiyor.",
      "Ay'ın kutuplarına yakın, sürekli karanlık kraterlerde gerçekten buz bulunup bulunmadığı hâlâ kesin olarak bilinmiyor.",
      "Ay'ın kutuplarına yakın, sürekli karanlık kraterlerde bulunan buzun gelecekteki uzay görevlerinde su kaynağı olarak nasıl kullanılabileceği uzun süre bilinmiyordu.",
      "Ay'ın kutuplarına yakın, sürekli karanlık kraterlerde bulunan buzun gelecekteki uzay görevlerinde yakıt kaynağı olarak nasıl kullanılabileceği hâlâ bilinmiyor.",
      "Ay'ın kutuplarına yakın, sürekli karanlık kraterlerde bulunan buzun gelecekteki uzay görevlerinde su kaynağı olarak kullanılıp kullanılamayacağı hâlâ bilinmiyor.",
    ], answer: 4,
    explain: "Cümlenin asıl yapısı 'It is still not known whether …' biçiminde bir isim cümleciğidir; 'whether' bir evet-hayır belirsizliği bildirir: buzun gelecekteki uzay görevlerinde su kaynağı olarak kullanılıp kullanılamayacağı hâlâ bilinmiyor. Buzun 'nasıl kullanılabileceği'nin bilinmediğini söyleyen çeviri, kullanılabilirliği verilmiş sayıp yalnız yöntemi soruyor. 'Uzun süre bilinmiyordu' diye biten çeviride zaman da kayıyor: 'still not known' sorunun hâlâ açık olduğunu söyler, oysa bu çeviri onu çözülmüş gösteriyor. Buzu 'yakıt kaynağı' olarak anan çeviride hem kaynak türü hem soru türü değişiyor. Kraterlerde 'gerçekten buz bulunup bulunmadığı'nı soran çeviri ise İngilizcede zaten bulunmuş olan buzu ('the ice found') belirsiz gösteriyor." },
  { id: 'd07-c4', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['isim-fiil ve mastar'],
    q: 'Storing data on several separate servers makes it less likely to be lost if one of them fails.',
    options: [
      'Verileri birkaç ayrı sunucuda saklamak, sunuculardan biri saldırıya uğrarsa verilerin geri yüklenme süresini kısaltır.',
      'Verileri birkaç ayrı sunucuda saklamak, sunuculardan biri bozulsa bile verilerin hiç kaybolmamasını sağlar.',
      'Verileri birkaç ayrı sunucuda saklamak, sunuculardan biri bozulursa verilerin kaybolma olasılığını azaltır.',
      'Verileri iki ayrı sunucuda saklamak, sunuculardan biri bozulursa verilerin geri yüklenme süresini kısaltır.',
      'Verileri birkaç ayrı sunucuda saklamak, sunuculardan biri bozulursa verilerin geri yüklenme süresini kısaltır.',
    ], answer: 2,
    explain: "Cümlenin öznesi bir isim-fiil öbeğidir: 'Storing data on several separate servers' (verileri birkaç ayrı sunucuda saklamak). Yüklem verilerin kaybolma olasılığını azaltır ('makes it less likely to be lost'); koşul da sunuculardan birinin bozulmasıdır ('if one of them fails'). 'Geri yüklenme süresini kısaltır' diyen ve koşulu ile özneyi doğru veren çeviri, kazanılan şeyi kaybolmanın önlenmesinden verilerin daha çabuk geri getirilmesine kaydırıyor. Koşulu 'sunuculardan biri saldırıya uğrarsa' diye kuran çeviride koşul da sonuç da yanlış. 'İki ayrı sunucuda' diyen çeviri 'several' (birkaç) sözünü belirli bir sayıya çeviriyor ve sonucu geri yükleme süresine bağlıyor. 'Hiç kaybolmamasını sağlar' ise olasılığı azaltmayı kesin bir güvenceye dönüştürüyor." },
  { id: 'd07-c5', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['ortaç öbeği'],
    q: 'Forests cleared to make room for farmland often take decades to recover, even when the land is later abandoned.',
    options: [
      'Tarım arazisine yer açmak için kesilen ormanların eski hâline dönmesi, arazi sonradan terk edilirse çoğu zaman yüzyıllar alır.',
      'Tarım arazisine yer açmak için kesilen ormanların eski hâline dönmesi, arazi sonradan terk edilse bile çoğu zaman yüzyıllar alır.',
      'Tarım arazisine yer açmak için kesilen ormanların eski hâline dönmesi, arazi sonradan yeniden ağaçlandırılsa bile çoğu zaman onlarca yıl alır.',
      'Tarım arazisine yer açmak için kesilen ormanların eski hâline dönmesi, arazi sonradan terk edilse bile çoğu zaman onlarca yıl alır.',
      'Tarım arazisine yer açmak için kesilen ormanların eski hâline dönmesi, arazi sonradan terk edilse bile her zaman yüzyıllar alır.',
    ], answer: 3,
    explain: "'Forests cleared to make room for farmland' bir ortaç öbeğidir: tarım arazisine yer açmak için kesilen ormanlar. 'Often take decades to recover' 'eski hâline dönmesi çoğu zaman onlarca yıl alır' demektir; 'even when the land is later abandoned' de bir ödünleme bildirir: arazi sonradan terk edilse bile. Süreyi 'yüzyıllar' diye veren ve başka yeri değişmeyen çeviri, 'decades' sözünü büyütüyor. 'Terk edilirse' diyen çeviri ödünlemeyi sıradan bir koşula indiriyor, süreyi de yüzyıllara çıkarıyor. 'Her zaman yüzyıllar alır' sıklığı ('often') istisnasız bir kurala çeviriyor ve süreyi değiştiriyor. 'Yeniden ağaçlandırılsa bile' ise süreyi doğru verse de kaynak cümledeki terk edilmeyi ağaçlandırmaya çeviriyor." },
  { id: 'd07-c6', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Light from the Sun takes about eight minutes to reach the Earth, so we always see the Sun as it was a few minutes earlier.',
    options: [
      "Güneş'ten gelen ışığın Dünya'ya ulaşması tam sekiz dakika sürer; bu yüzden Güneş lekelerini her zaman birkaç dakika önceki hâliyle görürüz.",
      "Güneş'ten gelen ışığın Dünya'ya ulaşması yaklaşık sekiz dakika sürer; bu yüzden Güneş'i her zaman birkaç dakika önceki hâliyle görürüz.",
      "Güneş'ten gelen ışığın Dünya'ya ulaşması yaklaşık sekiz dakika sürdüğü için gökbilimciler Güneş'i her zaman birkaç dakika önceki hâliyle görür.",
      "Güneş'ten gelen ışığın Dünya'ya ulaşması tam sekiz dakika sürer; bu yüzden Güneş'i her zaman birkaç dakika önceki hâliyle görürüz.",
      "Güneş'ten gelen ışığın Dünya'ya ulaşması tam sekiz dakika sürer; bu yüzden Güneş'i her zaman birkaç dakika önceki hâliyle gördüğümüz düşünülür.",
    ], answer: 1,
    explain: "Cümle bir neden ve sonucunu 'so' (bu yüzden) ile bağlıyor: Güneş'in ışığı bize yaklaşık ('about') sekiz dakikada ulaşır, bu yüzden Güneş'i her zaman birkaç dakika önceki hâliyle görürüz. 'Tam sekiz dakika' diyen ve geri kalanı aynı olan çeviri, 'about' sözünün bildirdiği yaklaşıklığı kesin bir süreye çeviriyor. Gördüğümüz şeyi 'Güneş lekeleri'ne indiren çeviride süre de kesinleşmiş, kapsam da daralmış. 'Gördüğümüz düşünülür' diyen çeviri kaynak cümlenin olgu olarak söylediğini bir kanıya çeviriyor; süreyi de 'tam' diye kesinleştiriyor. Gecikmeyi 'gökbilimciler'e özgü gösteren çeviri ise nedeni doğru kursa da kaynak cümlenin 'we' (hepimiz) dediği yerde yalnız bir meslek grubundan söz ediyor." },

  // ---------- 48–53: çeviri Tr. → İng. ----------
  { id: 'd07-c7', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'Bazı bitkiler, yapraklarını yiyen böcekleri uzaklaştırmak için acı kimyasallar üretir.',
    options: [
      'Some plants produce sticky chemicals to drive away the insects that feed on their roots.',
      'Some plants produce bitter chemicals to drive away the birds that eat their leaves.',
      'Some plants produce bitter chemicals to drive away the insects that eat their roots.',
      'Some plants produce bitter chemicals to drive away the insects that eat their leaves.',
      'Some plants produce bitter chemicals to kill the insects that eat their roots.',
    ], answer: 3,
    explain: "'Yapraklarını yiyen böcekler' bir sıfat cümleciğidir ve 'the insects that eat their leaves' olur; 'uzaklaştırmak için' de amaç bildiren mastardır: 'to drive away'. Geniş zaman genel bir gerçeği anlatır: 'produce'. Böceklerin 'roots' (kökler) yediğini söyleyen ve yapıyı koruyan çeviri, saldırılan bölümü değiştiriyor. 'Sticky chemicals' diyen çeviride kimyasalların niteliği de değişiyor: Türkçede kimyasallar acı, yapışkan değil. 'To kill' ile kurulan çeviri amacı uzaklaştırmaktan öldürmeye kaydırıyor ve kökleri anıyor. 'The birds that eat their leaves' ise yaprakları doğru verse de böcekleri kuşlarla değiştiriyor." },
  { id: 'd07-c8', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edilgen'],
    q: 'Köprünün çelik halatları her yıl uzmanlarca denetlenir ve gerekirse değiştirilir.',
    options: [
      "The bridge's steel cables are inspected by experts every year and replaced if necessary.",
      "The bridge's steel cables are inspected by experts every few years and repaired if necessary.",
      "Every year experts inspect the bridge's steel cables, which are then always replaced.",
      "The bridge's steel cables were inspected by experts every few years and replaced if necessary.",
      "The bridge's steel cables are inspected by experts every few years and replaced if necessary.",
    ], answer: 0,
    explain: "Türkçe cümlede iki edilgen eylem ve bir koşul var: halatlar her yıl uzmanlarca denetlenir ('are inspected by experts every year') ve gerekirse değiştirilir ('replaced if necessary'). Denetimi 'every few years' diye veren ve geri kalanı aynı olan çeviri, yıllık denetimi birkaç yılda bire seyreltiyor. 'Were inspected' ile kurulan çeviri genel bir uygulamayı geçmişe ait bir alışkanlığa çeviriyor; denetim aralığı da birkaç yıl. 'Repaired if necessary' diyen çeviride değiştirmek onarmaya dönüşüyor ve denetim seyreliyor. Halatların her denetimden sonra 'always replaced' olduğunu söyleyen çeviri ise yıllık denetimi doğru verse de 'gerekirse' koşulunu kaldırıyor." },
  { id: 'd07-c9', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Ay tutulması çıplak gözle güvenle izlenebilirken Güneş tutulmasına doğrudan bakmak gözlere zarar verebilir.',
    options: [
      'While a solar eclipse can safely be watched with the naked eye, looking directly at a lunar eclipse will damage the eyes.',
      'While a lunar eclipse can safely be watched through a telescope, looking directly at a solar eclipse can damage the eyes.',
      'While a lunar eclipse can safely be watched with the naked eye, looking directly at a solar eclipse will damage the eyes.',
      'While a lunar eclipse can safely be watched with the naked eye, looking briefly at a solar eclipse will damage the eyes.',
      'While a lunar eclipse can safely be watched with the naked eye, looking directly at a solar eclipse can damage the eyes.',
    ], answer: 4,
    explain: "Türkçedeki '-ebilirken' iki durumu karşılaştırır ve 'While' ile kurulur: Ay tutulması çıplak gözle güvenle izlenebilir, Güneş tutulmasına doğrudan bakmak ise gözlere zarar verebilir ('can damage'). 'Will damage' ile biten ve başka yeri değişmeyen çeviri, olasılığı kesinliğe çeviriyor. 'Looking briefly' diyen çeviride doğrudan bakmak kısa süre bakmaya dönüşüyor, zarar da kesinleşiyor. Tutulmaların yerini değiştiren çeviri tehlikeli olanı Ay tutulması yapıyor ve 'will' kullanıyor. 'Through a telescope' ise Güneş tutulmasını doğru verse de Ay tutulmasının çıplak gözle izlenmesini teleskopla izlemeye çeviriyor." },
  { id: 'd07-c10', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['isim cümleciği'],
    q: "Bilim insanları, bazı kuşların Dünya'nın manyetik alanını algılayarak yön bulduğunu düşünüyor.",
    options: [
      "Scientists thought that some birds found their way by sensing the Earth's magnetic field.",
      "Scientists think that some birds find their way by sensing the Earth's magnetic field.",
      "Scientists wonder whether some birds find their way by sensing the Earth's magnetic field.",
      "Scientists think that some birds find food by sensing the Earth's magnetic field.",
      "Scientists have shown that some birds find their way by sensing the Earth's magnetic field.",
    ], answer: 1,
    explain: "'Bazı kuşların … yön bulduğunu' bir isim cümleciğidir ve 'that some birds find their way' olur; 'algılayarak' da yolu bildiren 'by sensing' ile karşılanır. 'Düşünüyor' bugünkü bir görüş bildirir: 'Scientists think'. 'Wonder whether' bir kanaati açık bir soruya çeviriyor. Geçmiş zamanlı çeviri görüşü bugünden geçmişe taşıyor ve artık savunulmadığını düşündürüyor. 'Have shown' bir kanaati kesinleşmiş bir kanıta çeviriyor. 'Find food' ise kuşların yön bulmasını yiyecek bulmaya çeviriyor." },
  { id: 'd07-c11', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['ortaç öbeği'],
    q: 'Yağmur suyunda çözünen karbondioksit, kireçtaşını yavaş yavaş aşındırarak mağaralar oluşturur.',
    options: [
      'Carbon dioxide released from limestone slowly dissolves in rainwater, creating caves.',
      'Carbon dioxide dissolved in seawater slowly wears away limestone, creating caves.',
      'Carbon dioxide dissolved in seawater slowly wears away marble, creating caves.',
      'Carbon dioxide dissolved in rainwater slowly wears away limestone, creating caves.',
      'Carbon dioxide dissolved in seawater slowly wore away limestone, creating caves.',
    ], answer: 3,
    explain: "'Yağmur suyunda çözünen karbondioksit' bir ortaç öbeğidir: 'carbon dioxide dissolved in rainwater'. Yüklem geniş zamanlı ve etkendir: karbondioksit kireçtaşını yavaş yavaş aşındırır ('slowly wears away limestone'); '-arak … oluşturur' da sonucu veren '-ing' öbeğiyle karşılanır: 'creating caves'. Karbondioksiti 'seawater' (deniz suyu) içinde çözünmüş gösteren ve süreci doğru anlatan çeviri, suyun kaynağını değiştiriyor. 'Wears away marble' diyen çeviride aşınan taş da mermere dönüşüyor. 'Wore away' kuran çeviri genel ve süren bir süreci geçmişte bitmiş gösteriyor; su yine deniz suyu. Karbondioksiti kireçtaşından çıkıp yağmur suyunda çözünen bir gaz yapan çeviri ise süreci tersine çeviriyor." },
  { id: 'd07-c12', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['koşul'],
    q: 'Bu sulak alan kurutulmasaydı, göçmen kuşların birçoğu bugün hâlâ burada mola veriyor olacaktı.',
    options: [
      'If this wetland had been drained, many migrating birds would still be nesting here today.',
      'Although this wetland was drained, many migrating birds are still stopping here today.',
      'If this wetland had not been drained, many migrating birds would still be stopping here today.',
      'If this wetland had not been drained, many migrating birds would still be nesting here today.',
      'If this wetland had not been drained, many migrating birds would have nested here in earlier years.',
    ], answer: 2,
    explain: "Türkçe cümle karışık bir koşul kuruyor: koşul geçmişte gerçekleşmemiş bir olay (sulak alan kurutulmasaydı), sonuç bugünkü gerçek dışı bir durum (kuşlar bugün hâlâ burada mola veriyor olacaktı). İngilizcede koşul past perfect ('had not been drained'), sonuç 'would still be stopping here today' ile kurulur. Kuşların burada 'nesting' (yuva yapıyor) olacağını söyleyen ve koşulu doğru kuran çeviri, mola vermeyi kuluçkaya çeviriyor. 'If this wetland had been drained' ile başlayan çeviri olumsuzluğu kaldırıp koşulu tersine çeviriyor; üstelik yuvalamadan söz ediyor. 'Would have nested here in earlier years' sonucu geçmişe taşıyor ve 'bugün hâlâ' vurgusunu yitiriyor. 'Although' ile kurulan çeviri ise koşulu bir karşıtlığa çevirip kuşların hâlâ geldiğini olgu olarak söylüyor." },

  // ---------- 54–59: paragraf tamamlama ----------
  { id: 'd07-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'Young sunflower plants do something remarkable: during the day, their heads slowly turn from east to west, following the sun across the sky. ----. As the plants mature, however, this daily movement gradually stops, and most of the flowers end up permanently facing east. Researchers have found that east-facing heads warm up more quickly in the morning sun and seem to receive more visits from bees than heads turned towards the west.',
    options: [
      'At night, they swing back so that they face east again by dawn',
      'Sunflower seeds are rich in oil and are grown as food in many countries',
      'As a result, their heads stay pointed to the west throughout the night',
      'This explains why most mature flowers turn to face the setting sun',
      'Many other plants, by contrast, simply close their flowers after dark',
    ], answer: 0,
    explain: "Boşluktan önce genç bitkilerin başlarının gün boyu doğudan batıya döndüğü anlatılıyor; boşluktan sonra ise olgunlaşınca 'bu günlük hareketin' durduğu ve çiçeklerin doğuya dönük kaldığı söyleniyor. Hareketin her gün yeniden başlayabilmesi için başların gece yeniden doğuya dönmesi gerekir; boşluğa bu bilgi gelir ve 'daily movement' sözünü tamamlar. Gece boyunca batıya dönük kaldıklarını söyleyen cümle en güçlü çeldiricidir, çünkü gece hakkında bir şey söylüyor; ama ertesi sabah güneşi doğudan izlemeleriyle çelişir. Olgun çiçeklerin batan güneşe döndüğünü söyleyen cümle sonraki cümleyle çelişir. Ayçiçeği tohumunun besin değeri ve başka bitkilerin gece çiçeklerini kapaması da hareketin anlatımını keser." },
  { id: 'd07-p2', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'By the 1980s, light-emitting diodes, or LEDs, that gave off red or green light were widely used as small indicator lights on electronic equipment. To produce white light suitable for lighting a room, however, a third colour, blue, was needed. ----. The breakthrough came in the early 1990s, when researchers in Japan finally succeeded in making bright blue LEDs from a material called gallium nitride. Their work earned three of them the Nobel Prize in Physics in 2014, and most white LEDs now consist of a blue diode covered with a coating that turns part of its light yellow.',
    options: [
      'For years, attempts to make a bright blue LED kept failing',
      'LEDs use much less electricity than the light bulbs they have replaced',
      'As a result, the first white LEDs went on sale during the 1970s',
      'Red LEDs, on the other hand, were too dim to be seen in daylight',
      'Blue light is scattered more strongly by the air than red light is',
    ], answer: 0,
    explain: "Boşluktan önce beyaz ışık için mavinin gerektiği söyleniyor; boşluktan sonra 'The breakthrough came …' ile atılımın ancak 1990'ların başında geldiği anlatılıyor. Bir atılımdan söz edebilmek için önce uzun süren bir başarısızlık gerekir; boşluğa mavi LED yapma çabalarının yıllarca sonuçsuz kaldığını söyleyen cümle gelir. LED'lerin eski ampullerden az elektrik harcaması en güçlü çeldiricidir, çünkü konuyla ilgili doğru bir bilgidir; ama mavi ışık sorunundan atılıma giden çizgiyi keser. İlk beyaz LED'lerin 1970'lerde satılması atılımın 1990'larda gelmesiyle çelişir. Kırmızı LED'lerin gün ışığında görünmemesi ilk cümleyle çelişir; mavi ışığın havada saçılması da konudan çıkar." },
  { id: 'd07-p3', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    q: 'Peatlands are wetlands in which dead plant material builds up faster than it can decay, because the waterlogged ground contains very little oxygen. Over thousands of years, this material forms thick layers of peat. ----. When peatlands are drained for farming or forestry, however, air reaches the peat, which begins to break down and release its carbon as carbon dioxide. Dry peat can also catch fire and smoulder underground for months.',
    options: [
      'In some countries, peat has traditionally been cut and dried for use as fuel',
      'As a result, the ground in most peatlands is unusually dry and firm',
      'Because of this, they hold a remarkable amount of carbon for the area they cover',
      'Many rare insects and birds depend on these wet, open and largely undisturbed habitats',
      'Forests, in contrast, store a large share of their carbon in the soil beneath their trees',
    ], answer: 2,
    explain: "Boşluktan önce ölü bitki kalıntısının çürümeden biriktiği ve kalın turba katmanları oluşturduğu anlatılıyor. Boşluktan sonra ise 'however' ile turbalık kurutulunca turbanın 'karbonunu' salmaya başladığı söyleniyor. 'Its carbon' sözünün dayanacağı ve 'however' ile karşıtlık kuracağı bir cümle gerekir: turbalıklar kapladıkları alana göre çok büyük miktarda karbon tutar. Turbanın yakıt olarak kesilmesi en güçlü çeldiricidir, çünkü turbayla ilgilidir; ama karbon depolamadan söz etmez, bu yüzden 'however' ve 'its carbon' boşta kalır. Toprağın kuru ve sert olması ilk cümledeki su basmış toprakla çelişir. Nadir canlılar ve ormanların karbonu da akışı başka bir yöne çeker." },
  { id: 'd07-p4', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['gönderim'],
    q: 'Noise-cancelling headphones contain small microphones that pick up sounds from the surrounding environment. ----. When this new wave meets the original noise, the peaks of one line up with the troughs of the other, and the two largely cancel each other out. The technique works best on steady, low-pitched sounds such as the hum of an aircraft engine; sudden or high-pitched noises, like voices, are much harder to remove.',
    options: [
      'The microphones then make the outside noise much louder so that it is easier to hear clearly',
      'Electronics inside the headphones then produce a sound wave that mirrors this noise',
      'Ordinary headphones, by contrast, simply block sound with thick, soft padding',
      'Many travellers find that such headphones help them sleep on long flights',
      'This is why they are equally effective against every kind of sound',
    ], answer: 1,
    explain: "Boşluktan sonraki cümle 'this new wave' (bu yeni dalga) diye başlıyor; demek ki boşlukta yeni bir dalganın üretildiği söylenmeli. Doğru tamamlama kulaklığın içindeki devrelerin gürültünün ayna görüntüsü olan bir ses dalgası ürettiğini söylüyor; sonraki cümle de iki dalganın tepe ve çukurlarının üst üste gelip birbirini sönümlediğini anlatıyor. Sıradan kulaklıkların sesi yastıkla kesmesi en güçlü çeldiricidir, çünkü kulaklıklarla ilgili gerçek bir karşılaştırmadır; ama yeni bir dalgadan söz etmez. Mikrofonların gürültüyü yükseltmesi tekniğin amacıyla, her sese eşit etki de son cümleyle çelişir. Uzun uçuşlarda uyumak ise dalga anlatımını keser." },
  { id: 'd07-p5', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'In many cold countries, salt is spread on roads in winter to keep them free of ice. This works because salt dissolved in water lowers the temperature at which the water freezes. ----. In extremely cold weather, however, salt works much more slowly, so road crews may switch to other chemicals, such as calcium chloride, that remain effective at lower temperatures. Salt has drawbacks, too: it can harm roadside plants and speed up the rusting of cars and bridges.',
    options: [
      'Salt has been obtained from seawater by evaporation for thousands of years',
      'As a result, salt has no effect at all once the air falls below zero',
      'For this reason, rain falling on salted roads freezes far more quickly',
      'Sand, on the other hand, does not melt ice but makes roads less slippery',
      'Salty water on the road can therefore stay liquid a little below zero',
    ], answer: 4,
    explain: "Boşluktan önce tuzun suyun donma noktasını düşürdüğü söyleniyor; boşluk bunun yoldaki sonucunu vermeli: yoldaki tuzlu su sıfırın biraz altında da sıvı kalabilir. Sonraki cümle 'however' ile 'çok soğuk havada' tuzun yavaşladığını söyleyerek bu sınırlı etkiye karşıtlık kuruyor. Kumun buzu eritmediğini ama kaymayı azalttığını söyleyen cümle en güçlü çeldiricidir, çünkü kış yol bakımıyla ilgili doğru bir bilgidir; ama özneyi tuzdan kuma çeviriyor ve sonraki 'salt works much more slowly' cümlesiyle bağı koparıyor. Tuzun sıfırın altında hiç işe yaramaması ve tuzlu yolda yağmurun daha hızlı donması tuzun işleyişiyle çelişir. Tuzun deniz suyundan elde edilmesi de akıştan çıkar." },
  { id: 'd07-p6', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['akış'],
    q: "Many people assume that summer happens when the Earth is closest to the Sun. In fact, the Earth's distance from the Sun changes only slightly during the year, and the planet is actually nearest to it in early January, in the middle of the northern winter. ----. For part of the year, the Northern Hemisphere is tilted towards the Sun and receives more direct sunlight for more hours each day, while the Southern Hemisphere is tilted away; six months later, the situation is reversed.",
    options: [
      'As a result, both hemispheres have their summer at the same time',
      "The seasons are caused instead by the tilt of the Earth's axis",
      'The Moon, too, moves closer to and further from the Earth',
      'Ancient astronomers measured the length of the year with care',
      'As a result, the length of the day stays the same all year',
    ], answer: 1,
    explain: "Paragraf yaygın bir yanılgıyı düzeltiyor: mevsimler Dünya'nın Güneş'e uzaklığından doğmaz. Boşluktan sonra yarım kürelerin Güneş'e doğru ya da Güneş'ten öteye eğik olmasından söz ediliyor; boşluğa asıl nedeni söyleyen cümle gelir: mevsimler Dünya'nın ekseninin eğikliğinden doğar. İki yarım kürenin yazı aynı anda yaşaması en güçlü çeldiricidir, çünkü mevsimlerden söz ediyor; ama sonraki cümle yarım kürelerin ters durumda olduğunu söylüyor. Günün uzunluğunun yıl boyu aynı kalması da sonraki cümledeki 'more hours each day' sözüyle çelişir. Ay'ın uzaklığı ve eski gökbilimcilerin yıl ölçümü de akışı keser." },

  // ---------- 60–65: akışı bozan cümle ----------
  { id: 'd07-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Leafcutter ants, which live in the warm parts of the Americas, are often seen carrying pieces of leaf much larger than themselves back to their nests.',
      'Surprisingly, the ants do not eat these leaves.',
      'Instead, they chew them into a soft pulp and use it to grow a fungus, which serves as the main food of the colony.',
      'While cutting, the ants appear to make their jaws vibrate, which may help them slice through tough leaves more smoothly.',
      'The workers tend this fungus with great care, removing harmful moulds that could otherwise destroy their gardens.',
    ], answer: 3,
    explain: "Parça yaprak kesen karıncaların yaprakları neden taşıdığını açıklıyor: yaprakları yemiyorlar (II), onları çiğneyip bir mantar yetiştiriyorlar (III) ve bu mantarı özenle koruyorlar (V). V'teki 'this fungus' III'te tanıtılan mantara dayanıyor. IV. cümle de karıncaların yaprak işiyle ilgilidir, ama anlatıyı mantar bahçesinden yaprağın nasıl kesildiğine geri döndürüyor; III ile V arasındaki bağı koparıyor." },
  { id: 'd07-b2', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Most smartphone screens detect touch by sensing tiny changes in an electric field across their surface.',
      'Because the human body conducts electricity, a fingertip placed on the glass disturbs this field at a particular point.',
      'Early touchscreens, by contrast, often had to be pressed firmly, sometimes with a plastic pen.',
      "The phone's processor then works out the exact position of the disturbance and responds to it.",
      'A thick woollen glove, which does not conduct electricity, usually prevents the screen from responding at all.',
    ], answer: 2,
    explain: "Parça akıllı telefon ekranlarının dokunuşu nasıl algıladığını adım adım anlatıyor: ekran bir elektrik alanındaki küçük değişiklikleri algılar (I), iletken parmak bu alanı bir noktada bozar (II), işlemci de bozulmanın yerini bulur (IV). V'teki yün eldiven örneği de II'deki iletkenlik bilgisine dayanıyor. III. cümle dokunmatik ekranlarla ilgilidir, ama anlatıyı bugünkü ekranın işleyişinden eski ekranlara kaydırıyor; II ile IV arasındaki 'then' ile kurulan sırayı bozuyor." },
  { id: 'd07-b3', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Beavers are often described as ecosystem engineers, because few other animals change their surroundings so dramatically.',
      'Their lodges, built from sticks and mud, have underwater entrances that help to keep predators out.',
      'By building dams across streams, they create ponds and wetlands that provide homes for insects, frogs and birds.',
      'The dams hold back water after heavy rain, which may reduce flooding further downstream.',
      'Not everyone welcomes them, however, since the ponds they create sometimes flood valuable farmland.',
    ], answer: 1,
    explain: "Parça kunduzların çevrelerini nasıl değiştirdiğini anlatıyor: onlara ekosistem mühendisi denir (I), barajlarıyla öteki canlılara yaşam alanı olan göletler ve sulak alanlar yaratırlar (III), barajlar sel suyunu tutar (IV), ama göletler bazen tarlaları basar (V). III'teki 'By building dams' I'deki 'çevrelerini değiştirme' savını açıklıyor. II. cümle de kunduzların yaptığı bir yapıdan söz ediyor, ama yuvanın kunduzun kendisini nasıl koruduğunu anlatıyor; I'deki sav ile onu açıklayan III arasına girip anlatıyı çevreye etkiden kunduzun barınağına kaydırıyor." },
  { id: 'd07-b4', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'A microwave oven heats food by producing waves that make the water molecules inside it turn rapidly back and forth.',
      'This constant motion generates heat, which then spreads through the rest of the food.',
      'Contrary to a popular belief, however, the waves do not cook food from the inside out, since they usually reach only a few centimetres below the surface.',
      'Metal objects placed inside the oven reflect these waves and may even produce sparks.',
      'This is why the centre of a thick dish may remain cold even when its outer layers are steaming hot.',
    ], answer: 3,
    explain: "Parça mikrodalga fırının yemeği nasıl ısıttığını anlatıyor: dalgalar su moleküllerini hızla döndürür (I), bu hareket ısı üretir ve ısı yemeğe yayılır (II), ama dalgalar yemeği içten dışa pişirmez, yüzeyden yalnız birkaç santimetre işler (III); kalın bir yemeğin ortasının soğuk kalabilmesi de bu yüzdendir (V). V'teki 'This is why' III'teki sığ işlemeye dayanıyor. IV. cümle de aynı dalgalardan söz ediyor, ama yemeğin ısınmasından fırına konan metal eşyaya geçiyor; III ile onun sonucunu veren V arasına girerek 'This is why' bağını koparıyor." },
  { id: 'd07-b5', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'A meteor shower occurs when the Earth passes through a trail of dust and small rocks left behind by a comet.',
      'As these particles enter the atmosphere at high speed, they burn up and appear as brief streaks of light.',
      'On almost any clear, dark night, a few meteors can be seen even when no shower is taking place.',
      'Because the Earth crosses the same trails at the same point in its orbit each year, many showers return on roughly the same dates.',
      'The Perseids, for example, can be seen every August and are linked to a comet known as Swift–Tuttle.',
    ], answer: 2,
    explain: "Parça meteor yağmurlarını anlatıyor: Dünya bir kuyruklu yıldızın bıraktığı toz izinden geçer (I), parçacıklar atmosferde yanıp ışık çizgileri oluşturur (II), Dünya aynı izlerden her yıl yörüngesinin aynı noktasında geçtiği için yağmurlar aşağı yukarı aynı tarihlerde yinelenir (IV), Perseidler de bunun bir örneğidir (V). IV'teki 'the same trails' I'deki toz izine dayanıyor. III. cümle de meteorlardan söz ediyor, ama yağmur olmayan gecelerde görülen tek tük meteorlara geçiyor; parçanın konusu olan yağmurdan uzaklaşıp II ile IV arasındaki açıklama zincirini kesiyor." },
  { id: 'd07-b6', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'The bright colours of fireworks come from small amounts of metal compounds packed inside them.',
      'When these compounds are heated, their atoms take in energy and then give it off as light of particular colours.',
      'Strontium compounds, for example, produce a deep red, while barium gives green and copper produces blue.',
      'White sparks, on the other hand, are produced not by heated compounds in this way but by tiny glowing particles of burning metal, such as aluminium.',
      'Of these three colours, blue is often said to be the hardest to achieve, because copper compounds break down if the flame becomes too hot.',
    ], answer: 3,
    explain: "Parça havai fişeklerin renklerinin metal bileşiklerinden nasıl doğduğunu anlatıyor: renkler metal bileşiklerinden gelir (I), ısınan atomlar enerjiyi belirli renklerde ışık olarak verir (II), stronsiyum kırmızı, baryum yeşil, bakır mavi verir (III) ve mavi en zor elde edilen renktir, çünkü bakır bileşikleri çok sıcak alevde bozulur (V). V, 'Of these three colours' (bu üç renkten) diyerek III'te sayılan kırmızı, yeşil ve maviye dayanıyor. IV. cümle de havai fişeklerin ışığıyla ilgilidir, ama bu düzenekle değil, yanan metal parçacıklarının parlamasıyla oluşan beyaz kıvılcımlara geçiyor; III ile V arasındaki bakır ve mavi bağını koparıyor." },

  // ---------- 66–80: okuma ----------
  { id: 'd07-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Başkasının yuvası',
    text: "The common cuckoo never builds a nest or raises its own young. Instead, a female cuckoo lays her eggs in the nests of other, usually smaller, birds, such as reed warblers, and leaves the hosts to do the work. She acts quickly, often removing one of the host's eggs before laying her own, and the whole visit may last only a few seconds. Once the cuckoo chick hatches, which it usually does before the host's own chicks, it pushes the other eggs out of the nest one by one. From then on, the foster parents devote all their effort to a single chick that soon grows far larger than they are. Hosts, however, are not entirely defenceless. Many reed warblers learn to recognise eggs that look different from their own and either throw them out or abandon the nest. Over time, this has favoured cuckoos whose eggs closely resemble those of their hosts. Different groups of female cuckoos tend to specialise in a single host species, and each group lays eggs that match that species remarkably well. Not every host has joined this contest, though. Dunnocks, small brown birds that are frequent victims of cuckoos as well, rarely reject the strange eggs, even though the eggs laid in their nests look nothing like their own. Some researchers suggest that cuckoos began to target dunnocks relatively recently, so that these hosts have not yet had time to evolve a defence.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, a young cuckoo ----.',
        options: [
          'is fed by its real mother during its first days of life',
          'usually hatches some time after the chicks of its foster parents',
          'gets rid of the eggs already in the nest soon after hatching',
          'remains smaller than its foster parents until it finally leaves the nest',
          'shares the food it is given with the chicks of its hosts',
        ], answer: 2,
        explain: 'Parçaya göre guguk kuşu yavrusu yumurtadan çıkınca yuvadaki öteki yumurtaları birer birer yuvadan dışarı itiyor. Doğru seçenek bunu başka sözcüklerle veriyor: yumurtadan çıktıktan kısa süre sonra yuvadaki yumurtalardan kurtulur. Yavrunun ev sahibi yavrularından sonra çıkması en güçlü çeldiricidir, çünkü parçada çıkış sırası geçiyor; ama parça genellikle onlardan önce çıktığını söylüyor. Gerçek annesinin onu beslemesi, üvey ana babasından küçük kalması ve yiyeceğini paylaşması da parçayla çelişir: yavruyu üvey ana baba besler, yavru onlardan çok daha büyür ve yuvada tek kalır.' },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that the close match between cuckoo eggs and host eggs ----.',
        options: [
          'arose because some hosts rejected eggs that looked unfamiliar',
          'can be seen in the nests of every species that cuckoos make use of',
          'makes reed warblers less able to learn the appearance of their eggs',
          'first appeared among the cuckoos that lay their eggs with dunnocks',
          'allows each female cuckoo to lay eggs in any species she chooses',
        ], answer: 0,
        explain: 'Parça, kendi yumurtalarına benzemeyen yumurtaları atan ya da yuvayı bırakan saz bülbüllerinin zamanla yumurtaları ev sahibininkine çok benzeyen guguk kuşlarını kayırdığını söylüyor. Buradan benzerliğin, yabancı yumurtaları reddeden ev sahiplerine karşı geliştiği sonucu çıkar. Benzerliğin bütün ev sahibi türlerinin yuvalarında görülmesi en güçlü çeldiricidir, çünkü parça benzerliğin çok güçlü olduğunu söylüyor; ama çit serçesinin yuvasındaki yumurtalar onunkilere hiç benzemiyor. Benzerliğin çit serçesi ile başlaması bu yüzden yanlıştır. Her dişinin istediği türe yumurtlayabilmesi de dişi grupların tek bir türde uzmanlaşmasıyla çelişir; saz bülbüllerinin öğrenme yetisinin azalması ise parçada yok.' },
      { konu: ['yazarın amacı'],
        q: 'The author mentions dunnocks mainly in order to ----.',
        options: [
          'prove that dunnocks are less intelligent than reed warblers are',
          'predict that cuckoos will soon stop laying eggs in dunnock nests',
          'describe the way in which dunnocks build and protect their nests',
          'compare the colours of the eggs laid by several small brown birds',
          'show that not all hosts have developed a defence against the cuckoo',
        ], answer: 4,
        explain: "Çit serçeleri parçanın son bölümünde 'Not every host has joined this contest' cümlesinden sonra anılıyor: bu kuşlar, yumurtalar kendilerininkine hiç benzemese de yabancı yumurtaları nadiren reddediyor ve bunun için olası bir açıklama veriliyor. Yazarın amacı her ev sahibinin guguk kuşuna karşı bir savunma geliştirmediğini göstermektir. Çit serçelerinin saz bülbüllerinden daha az zeki olduğunu kanıtlamak en güçlü çeldiricidir, çünkü iki tür karşılaştırılıyor; ama parça farkı zekâya değil, ilişkinin yeni olabileceğine bağlıyor ve bunu da yalnız bir olasılık olarak sunuyor. Guguk kuşlarının yakında bırakacağı öngörüsü, yuva yapımı ve yumurta renklerinin karşılaştırılması parçada yok." },
    ] },
  { id: 'd07-o2', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Uzaydaki gözlük',
    text: "When the Hubble Space Telescope was launched in 1990, astronomers expected images far sharper than any telescope on the ground could produce, since it would operate above the blurring effect of the atmosphere. Within weeks, however, it became clear that something was wrong: stars appeared surrounded by a faint haze instead of as crisp points of light. An investigation traced the problem to the telescope's main mirror. It had been polished with great precision, but to slightly the wrong shape; near its edges it was too flat by roughly one-fiftieth of the width of a human hair. The error had gone unnoticed because the instrument used to test the mirror during manufacture had itself been assembled incorrectly. Replacing the mirror in orbit was impossible, but because the flaw was known so precisely, engineers could design optics to compensate for it, much as a pair of glasses corrects a person's eyesight. In December 1993, astronauts on a space shuttle mission spent several days installing the corrective equipment along with a new camera. The results were dramatic, and Hubble went on to become one of the most productive scientific instruments ever built. The episode is often cited as a warning against relying on a single test, but it also showed the value of designing a spacecraft so that it could be repaired.",
    steps: [
      { konu: ['ayrıntı'],
        q: "According to the passage, the fault in Hubble's mirror was not discovered before launch because ----.",
        options: [
          'the mirror had been polished too quickly to meet the launch date',
          'astronomers believed the haze around stars was a normal effect',
          'a device used to check the mirror had not been put together properly',
          'there was no way of testing such a large mirror on the ground',
          'the engineers decided not to report the problem until after the launch',
        ], answer: 2,
        explain: 'Parçaya göre hata fark edilmedi, çünkü üretim sırasında aynayı sınamak için kullanılan aygıtın kendisi yanlış kurulmuştu. Doğru seçenek bunu başka sözcüklerle veriyor: aynayı denetleyen bir aygıt düzgün birleştirilmemişti. Aynayı yerde sınamanın hiçbir yolunun olmaması en güçlü çeldiricidir, çünkü sınama sorununa değiniyor; ama parça aynanın sınandığını, yalnız sınama aygıtının hatalı olduğunu söylüyor. Aynanın aceleyle parlatılması parçada yok; parça tersine büyük bir özenle parlatıldığını söylüyor. Gökbilimcilerin pusu olağan sanması ve mühendislerin sorunu gizlemesi de parçada geçmiyor.' },
      { konu: ['çıkarım'],
        q: "It can be inferred from the passage that the engineers' solution ----.",
        options: [
          'required astronauts to polish the main mirror again while in orbit',
          'depended on knowing exactly how the shape of the main mirror was wrong',
          'made the haze around stars slightly worse in some kinds of image',
          'was first tried out on a large telescope on the ground in 1992',
          'removed the need for any further visits to the telescope by crews',
        ], answer: 1,
        explain: "Parça, aynayı yörüngede değiştirmenin olanaksız olduğunu, ama kusur çok kesin bilindiği için mühendislerin onu dengeleyen optik parçalar tasarlayabildiğini söylüyor; gözlük benzetmesi de bunu açıklıyor. Buradan çözümün, aynanın biçiminin tam olarak nasıl yanlış olduğunu bilmeye dayandığı sonucu çıkar. Astronotların aynayı yörüngede yeniden parlatması en güçlü çeldiricidir, çünkü astronotlar gerçekten bir onarım görevi yaptı; ama aynaya dokunmadılar, düzeltici donanım taktılar. Pusu kötüleştirmesi parçadaki 'dramatic' sonuçlarla çelişir. 1992'de yerde bir denemeden ve sonraki ziyaretlerin gereksizleşmesinden parçada söz edilmiyor; son cümle ise onarılabilir tasarımın değerini vurguluyor." },
      { konu: ['başlık'],
        q: 'Which of the following would be the most suitable title for the passage?',
        options: [
          'Why Ground Telescopes Remain the Best',
          'The Shuttle Missions That Built Hubble',
          'Great Discoveries Made Using the Hubble Telescope',
          'How Large Telescope Mirrors Are Made',
          'A Flawed Mirror and Its Repair in Orbit',
        ], answer: 4,
        explain: "Parça baştan sona tek bir olayı anlatıyor: Hubble'ın aynasındaki kusur nasıl fark edildi, neden gözden kaçtı ve yörüngede nasıl düzeltildi. En uygun başlık bu olayı kapsayan başlıktır. Hubble'la yapılan büyük buluşlar en güçlü çeldiricidir, çünkü parça teleskobun çok verimli olduğunu söylüyor; ama bunu tek cümleyle anıyor, buluşları anlatmıyor. Yer teleskoplarının üstünlüğü parçanın ilk cümlesiyle çelişir. Hubble'ı kuran mekik görevleri ve büyük aynaların yapımı da parçanın konusu değildir." },
    ] },
  { id: 'd07-o3', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Gecenin kaybolan karanlığı',
    text: 'For most of history, darkness at night was something living things could rely on. The spread of electric lighting has changed that, and researchers are increasingly concerned about the effects of artificial light on wildlife. Sea turtles provide one of the clearest examples. Hatchlings emerge from their nests on the beach at night and head towards the brightest part of the horizon, which on an undeveloped coast is usually the sky above the sea. Where hotels and roads are lit, many young turtles crawl inland instead, where they may die of exhaustion or be caught by predators. Birds that migrate at night can be affected too: brightly lit buildings appear to draw them off course, and large numbers die each year after flying into lit windows. Insects gather around street lamps in such numbers that some scientists believe artificial light may be contributing to their decline, although its importance compared with other causes is still uncertain. Unlike most forms of pollution, however, light pollution can be reduced almost instantly. Shielding lamps so that they shine only downwards, using dimmer or warmer-coloured bulbs and switching off unnecessary lights all help. Several cities dim the lights of tall buildings during the main migration seasons, and some coastal communities keep beachfront lighting low while turtles are nesting.',
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, on a beach without buildings, young sea turtles ----.',
        options: [
          'leave their nests during the hottest part of the day',
          'reach the sea by moving towards the glow above it',
          'are led down to the sea by the adult female turtles',
          'find the water by following the sound of the waves',
          'tend to crawl inland first before turning to the sea',
        ], answer: 1,
        explain: 'Parçaya göre yavrular gece yuvadan çıkar ve ufkun en parlak yerine yönelir; yapılaşmamış bir kıyıda bu yer genellikle denizin üstündeki gökyüzüdür. Doğru seçenek bunu başka sözcüklerle veriyor: suya, üstündeki ışıltıya doğru giderek ulaşırlar. Önce karaya doğru sürünmeleri en güçlü çeldiricidir, çünkü parçada geçiyor; ama bu, otel ve yolların aydınlatıldığı kıyılarda olur. Yavrular gündüz değil gece çıkar; yetişkin dişilerin onlara yol göstermesinden ve dalga sesinden de parçada söz edilmiyor.' },
      { konu: ['yazarın tutumu'],
        q: "The author's attitude towards the idea that artificial light is helping to cause the decline of insects can best be described as ----.",
        options: ['cautious', 'dismissive', 'enthusiastic', 'indifferent', 'confident'], answer: 0,
        explain: "Yazar bu görüşü bazı bilim insanlarına dayandırıyor ('some scientists believe'), 'may be contributing' ile temkinli veriyor ve ardından yapay ışığın öteki nedenlere göre öneminin henüz belirsiz olduğunu ekliyor. Bu tutum temkinlidir: 'cautious'. 'Confident' (emin) en güçlü çeldiricidir, çünkü yazar yapay ışığın zararını ciddiye alıyor; ama bu konuda belirsizliği açıkça söylüyor. 'Dismissive' (küçümseyen) ve 'indifferent' (ilgisiz) yazarın soruna gösterdiği ilgiyle çelişir; 'enthusiastic' (coşkulu) da olumsuz bir bulgu için uygun bir tutum değildir." },
      { konu: ['ana fikir'],
        q: 'Which of the following best summarises the passage?',
        options: [
          'Sea turtles are the only animals whose survival is seriously threatened by artificial light.',
          'Cities should switch off all their lights during the seasons when birds are migrating.',
          'Insects are disappearing mainly because of the spread of street lamps in many countries.',
          'Artificial light harms several kinds of animals, but its effects can be reduced very quickly.',
          'The spread of electric lighting has made beaches far more dangerous places for people.',
        ], answer: 3,
        explain: 'Parçanın ilk bölümü yapay ışığın deniz kaplumbağalarına, göçmen kuşlara ve böceklere zararını; ikinci bölümü ise ışık kirliliğinin öteki kirlilik türlerinin tersine hemen azaltılabildiğini anlatıyor. Doğru özet bu iki bölümü birlikte veriyor. Böceklerin başlıca sokak lambaları yüzünden yok olması en güçlü çeldiricidir, çünkü parçada geçiyor; ama parça bunu temkinle anıyor ve öneminin belirsiz olduğunu söylüyor. Kaplumbağaların tek etkilenen tür olması kuşlar ve böceklerle çelişir. Kentlerin bütün ışıkları söndürmesi gerektiği parçada yok; parça yalnız ışıkların kısıldığını söylüyor. İnsanlar için tehlike de parçanın konusu değildir.' },
    ] },
  { id: 'd07-o4', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', title: 'Kızarmanın kimyası',
    text: 'Why does toast taste so different from bread, or a seared steak from a boiled one? Much of the answer lies in a group of chemical reactions first described in 1912 by the French chemist Louis-Camille Maillard. When food is heated, amino acids, the building blocks of proteins, react with certain sugars to form a vast range of new compounds. Some of these give off the rich aromas we associate with baking and roasting, while others are brown pigments that colour the surface of the food. Although the reactions take place slowly even at room temperature, they speed up greatly at the high temperatures reached in an oven or a frying pan. Water plays an important part in the process. As long as the surface of a food is wet, its temperature cannot rise much above 100°C, the boiling point of water, which is too low for rapid browning. This is why boiled or steamed foods remain pale, and why cooks often dry meat before frying it. The Maillard reaction is sometimes confused with caramelisation, but the two are different: caramelisation involves sugars alone and generally requires even higher temperatures. Not every product of these reactions is welcome. In starchy foods such as chips and toast, one of them is acrylamide, a substance that has caused cancer in laboratory animals given high doses. Food safety agencies therefore advise against cooking such foods until they are very dark.',
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, cooks often dry meat before frying it because ----.',
        options: [
          'water stops the amino acids in the meat from reacting with any sugar',
          'meat that has been dried absorbs much less oil while it is being fried',
          'moisture causes the sugars in the meat to turn into caramel too soon',
          'a wet surface stays too cool for the browning reactions to go ahead quickly',
          'acrylamide forms mainly when wet meat is cooked at a high temperature',
        ], answer: 3,
        explain: "Parçaya göre yiyeceğin yüzeyi ıslak kaldıkça sıcaklığı suyun kaynama noktası olan 100 °C'nin pek üstüne çıkamaz ve bu sıcaklık hızlı kızarma için düşüktür; aşçıların eti kızartmadan önce kurulaması bu yüzdendir. Doğru seçenek bunu başka sözcüklerle veriyor. Suyun amino asitlerin şekerle tepkimesini durdurması en güçlü çeldiricidir, çünkü tepkimeden ve sudan söz ediyor; ama parça tepkimelerin düşük sıcaklıkta da yavaşça sürdüğünü söylüyor, su onları durdurmuyor, yalnız sıcaklığı sınırlıyor. Kurutulmuş etin daha az yağ emmesi parçada yok. Karamelleşme yalnız şekerle ve daha yüksek sıcaklıkta olur; akrilamit de etle değil nişastalı yiyeceklerle anılıyor." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that caramelisation ----.',
        options: [
          'was first described by Maillard in the same 1912 study',
          'happens at lower temperatures than the Maillard reaction',
          'is the main source of the acrylamide found in chips',
          'gives boiled and steamed foods their typical pale colour',
          'can take place in foods that contain no protein at all',
        ], answer: 4,
        explain: "Parça karamelleşmenin yalnız şekerlerle olduğunu söylüyor; Maillard tepkimesi ise proteinlerin yapı taşı olan amino asitleri gerektiriyor. Buradan karamelleşmenin hiç protein içermeyen yiyeceklerde de olabileceği sonucu çıkar. Karamelleşmenin daha düşük sıcaklıkta olması en güçlü çeldiricidir, çünkü parça iki tepkimenin sıcaklığını karşılaştırıyor; ama karamelleşmenin genellikle daha da yüksek sıcaklık istediğini söylüyor. Maillard'ın 1912 çalışmasında karamelleşmeyi tanımladığı parçada yok. Akrilamit karamelleşmeyle değil Maillard tepkimeleriyle anılıyor; haşlanmış yiyeceklerin soluk kalması da hızlı kızarmanın olmamasından kaynaklanıyor." },
      { konu: ['yazarın amacı'],
        q: 'The author mentions acrylamide in order to ----.',
        options: [
          'note that the reactions can yield a possibly harmful substance',
          'explain why boiled potatoes usually taste better than chips or toast',
          'show that Maillard misunderstood the reactions that he first described',
          'argue that starchy foods should never be fried or toasted in any form',
          'describe how the brown pigments on the surface of food are formed',
        ], answer: 0,
        explain: "Akrilamit parçanın son bölümünde 'Not every product of these reactions is welcome' cümlesinin ardından anılıyor: nişastalı yiyeceklerde oluşan bu madde laboratuvar hayvanlarında yüksek dozda kansere yol açmış ve gıda güvenliği kurumları bu yiyecekleri çok koyulaşana kadar pişirmemeyi öneriyor. Yazarın amacı tepkimelerin zararlı olabilecek bir madde de üretebildiğini göstermektir; 'possibly' parçadaki temkine uyuyor. Nişastalı yiyeceklerin hiç kızartılmaması gerektiğini savunmak en güçlü çeldiricidir, çünkü parçada bir uyarı var; ama uyarı yalnız çok koyu pişirmeye yöneliktir. Haşlanmış patatesin tadı, Maillard'ın yanılması ve kahverengi pigmentlerin oluşumu akrilamidin anılma nedeni değildir." },
    ] },
  { id: 'd07-o5', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Kendi kendine dönen sarkaç',
    text: 'By the middle of the nineteenth century, few educated people doubted that the Earth spins on its axis. The evidence, however, came mainly from astronomy, and nobody had shown the rotation in a way that could be seen without looking at the sky. In 1851, the French physicist Léon Foucault did exactly that. Under the dome of the Panthéon in Paris, he hung a heavy metal ball from a wire many metres long and set it swinging. Over the following hours, spectators watched the direction of the swing slowly turn, as if pushed by an invisible hand. In fact, nothing was pushing the pendulum. Once set in motion, a freely hanging pendulum tends to keep swinging in the same plane; it was the floor beneath it, carried along by the turning Earth, that was moving. The effect depends on where the pendulum is. At the North or South Pole, the swing would turn through a full circle in about a day, while at the equator it would not turn at all. In Paris, which lies between the two, a complete turn takes considerably longer than a day. The demonstration caused a sensation, and similar pendulums were soon set up in other cities. Many science museums still keep one swinging, often with a ring of small pins around its base that it knocks over one by one as the hours pass.',
    steps: [
      { konu: ['ayrıntı'],
        q: "According to the passage, Foucault's demonstration was important because ----.",
        options: [
          "it made the Earth's rotation visible without observing the sky",
          'it convinced the many scientists who had doubted that the Earth moved',
          'it showed that the Earth spins faster near the poles than in Paris',
          'it was the first scientific experiment ever carried out in the Panthéon',
          'it proved that a swinging pendulum slowly changes its own direction',
        ], answer: 0,
        explain: "Parça, Dünya'nın döndüğünden o dönemde pek kimsenin kuşku duymadığını, ama kanıtların gökbilimden geldiğini ve dönüşü gökyüzüne bakmadan gösteren kimsenin olmadığını söylüyor; Foucault da tam bunu yaptı. Doğru seçenek bu önemi veriyor. Dönüşten kuşku duyan birçok bilim insanını ikna etmesi en güçlü çeldiricidir, çünkü bir kanıtın olağan önemi budur; ama parça eğitimli kişilerin pek azının kuşku duyduğunu söylüyor. Sarkacın kendi yönünü değiştirdiği yanılgısını parça açıkça düzeltiyor: hareket eden zemindir. Kutuplarda daha hızlı dönme ve Panthéon'daki ilk deney de parçada yok." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that a pendulum of this kind set up on the equator ----.',
        options: [
          'would complete a full turn in exactly one day as at the poles',
          'would turn through a circle more quickly than the one in Paris',
          'would be of little use for showing that the Earth rotates',
          'would need a much heavier ball to keep swinging for hours',
          'would swing in a circle rather than back and forth in a line',
        ], answer: 2,
        explain: "Parçaya göre ekvatorda sarkacın salınım yönü hiç dönmez. Gösterinin bütün etkisi bu dönüşü izlemeye dayandığı için ekvatordaki bir sarkaç Dünya'nın döndüğünü göstermekte pek işe yaramaz. Paris'tekinden hızlı dönmesi en güçlü çeldiricidir, çünkü parça yerin etkisini anlatıyor; ama ekvatorda hiç dönme olmadığını söylüyor. Bir günde tam tur kutuplar için verilmiş bir bilgidir. Daha ağır bir top ve dairesel salınım da parçada yok." },
      { konu: ['ana fikir'],
        q: 'What is the passage mainly about?',
        options: [
          "Why educated people doubted the Earth's rotation",
          'The architecture of the Panthéon in nineteenth-century Paris',
          'How science museums attract visitors with old experiments',
          'The scientific career of Léon Foucault and his inventions',
          'How a swinging weight revealed the turning of the Earth',
        ], answer: 4,
        explain: "Parça Foucault sarkacını anlatıyor: neden gerekliydi, nasıl kuruldu, ne gösterdi, etkinin yere göre nasıl değiştiği ve gösterinin nasıl yayıldığı. Ana konu, sallanan bir ağırlığın Dünya'nın dönüşünü nasıl gösterdiğidir. Müzelerin eski deneylerle ziyaretçi çekmesi en güçlü çeldiricidir, çünkü son cümlede müzelerden söz ediliyor; ama bu yalnız gösterinin bugüne uzanan bir ayrıntısıdır. Eğitimli kişilerin kuşkusu parçayla çelişir. Panthéon'un mimarisi ve Foucault'nun bütün meslek yaşamı da parçanın konusu değildir." },
    ] },
];

export const DENEME_07 = { id: 'deneme-07', sinav: 'YOKDIL', alan: 'fen', ad: 'Tam deneme 7 (YÖKDİL Fen)', sorular };
