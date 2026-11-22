// iDil › Tam deneme 4 (YDS biçimi; 80 soru, gerçek kitapçık sırası). Görev 11, Adım 1 (22 Kasım 2026).
// Tümü özgün: Claude yazdı. ÖSYM sorusu, yayınevi, ders kitabı (Murphy, Azar), uygulama ya da gazete metni kopyalanmadı,
// uyarlanmadı; ÖSYM kitapçıkları yazarken açılmadı, yalnız etiket sayımları (analiz/agirlik.json, analiz/dagilim.md) kullanıldı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md (ünite öğesiyle aynı).
//
// Sıra (analiz/dagilim.md §2): 1–6 kelime, 7–16 dil bilgisi, 17–26 boşluklu metin (2 × 5), 27–36 cümle tamamlama,
// 37–39 çeviri İng.→Tr., 40–42 çeviri Tr.→İng., 43–62 okuma (5 × 4), 63–67 diyalog, 68–71 yakın anlam, 72–75 paragraf
// tamamlama, 76–80 akışı bozan cümle. `sorular` dizisinde parçalar tek öğedir (type 'pratik', adımlarıyla); açılınca 80 soru.
// Kelime sırası YDS 2017–2026 şablonu: isim, isim, sıfat, zarf, fiil, öbek fiil. Dil bilgisi şablonu: 7–9 fiil yapıları,
// 10–11 edat, 12–14 bağlaç ve bağlantı zarfı, 15 eşleşik bağlaç, 16 edat.
// Cümle tamamlama ilişkileri (dagilim.md §3.3, YDS): 5 karşıtlık, 2 neden-sonuç, 1 koşul, 1 zaman, 1 amaç.
// Parça konuları (deneme-01, deneme-02, set/ ve pilot/ konularıyla çakışmaz; en çok bir sağlık, en çok bir sosyal parça):
// okuma o1 çıplak köstebek fareleri (biyoloji, fen), o2 yük konteyneri (teknoloji ve ticaret, genel), o3 mantar ağları ve
// "wood wide web" tartışması (ekoloji, fen), o4 miyopi ve açık havada geçen süre (sağlık), o5 QWERTY klavye ve yola bağımlılık
// (iktisat tarihi, sosyal); boşluklu z1 çimlerdeki kestirme patikalar (kent tasarımı, genel), z2 buzun suda yüzmesi (fizik, fen).
//
// Olgular (yerleşik bilgi; her biri yalnız gösterildiği öğede; metinler özgün; sayılar yuvarlak ve temkinli):
// - d04-z1: "Desire path / desire line" kent planlamacılarının yerleşik terimi; bazı kampüs ve parklarda yolların, insanların
//   gerçekte nereden yürüdüğü bir süre izlendikten sonra döşenmesi (yaygın tasarım uygulaması; ad ve yer yok); eğimli yerde
//   aşınma kaygısı. Sayı ve tarih yok.
// - d04-z2: Suyun yoğunluğu yaklaşık 4 °C'de en yüksektir; altında hidrojen bağlarıyla daha açık bir düzene geçer ve biraz
//   genleşir; buz sıvı sudan yaklaşık yüzde 9 daha az yoğundur (buz ≈ 0,92 g/cm³); 4 °C'nin altındaki soğuk su yüzeye çıkar,
//   birçok göl yalnız yüzeyde donar, dibe kadar donmaz; buz tabakası alttaki suyu yalıtır (yerleşik fizik bilgisi; "roughly",
//   "about").
// - d04-o1: Çıplak köstebek faresi (Heterocephalus glaber): Doğu Afrika'nın kurak otlakları, yer altı tünelleri; birkaç düzineden
//   birkaç yüze kadar bireyli koloniler, yalnız bir dişi ("kraliçe") doğurur (ösosyallik); laboratuvarda otuz yılı aşkın yaşayan
//   bireyler (bilinen en uzun ömür 37 yıl dolayı; parçada "more than thirty"); benzer boydaki fare birkaç yıl yaşar; ölüm
//   riskinin yaşla belirgin artmadığını öne süren çalışmalar (Ruby ve arkadaşları, eLife, 2018; parçada ad yok, temkinli:
//   "Some studies have even suggested"); kanserin çok seyrek olması, az sayıda tümör vakasının bildirilmesi; düşük oksijene
//   dayanıklılık (Park ve arkadaşları, Science, 2017; parçada ad ve süre yok).
// - d04-o2: Malcom McLean, ABD'li kamyon işletmecisi; Nisan 1956'da dönüştürülmüş tanker Ideal X, 58 konteyneri Newark'tan
//   (New Jersey) Houston'a (Teksas) taşıdı (parçada "several dozen", gemi ve kent adı yok); önceki dökme yük elleçlemesinin
//   yavaşlığı, hırsızlık ve hasar; büyük vinçler, yeni gemiler ve standart konteyner boyutları (1960'ların sonunda uluslararası
//   standart; parçada yıl yok); taşıma maliyetinin büyük ölçüde düşmesi; liman işçiliğinin azalması, yer darlığı çeken eski kent
//   limanlarının gerilemesi (ör. New York ve Londra; parçada ad yok); konteynerin küreselleşmedeki payı üzerine iktisatçıların
//   görüşü (Levinson, The Box, 2006; parçada ad yok; temkinli: "Many economists now argue").
// - d04-o3: Mikorizal ortaklık: mantar iplikleri köklere sarılır ya da girer, su ve fosfor gibi mineralleri bitkiye verir, karşılığında
//   fotosentez şekeri alır; kara bitkilerinin büyük çoğunluğunda görülür ("are thought to"); bir mantarın birden çok ağacın köküne
//   bağlanabilmesi; 1990'ların sonunda izotop izleyicilerle türler arası karbon aktarımı bildiren çalışma (Simard ve arkadaşları,
//   Nature, 1997; parçada ad yok); "wood wide web" adı ve popüler kitap ve belgesellerdeki "ana ağaç", "komşusunu uyaran ağaç"
//   anlatıları; 2023'te bir araştırma grubunun alan çalışmalarını gözden geçirmesi (Karst ve arkadaşları, Nature Ecology &
//   Evolution, 2023; parçada ad yok): ağların varlığı reddedilmedi, anlamlı kaynak ya da bilgi paylaşımına dair kanıtın popüler
//   anlatılardan zayıf olduğu ve olumlu sonuçların daha çok atıf aldığı sonucuna varıldı.
// - d04-o4: Miyopi göz küresinin biraz fazla uzamasıyla olur, uzaktaki cisimlerin görüntüsü retinanın önüne düşer; ağır miyopi
//   ileride ciddi göz sorunları riskini artırır; son on yıllarda birçok yerde, özellikle bazı Doğu Asya kentlerinde gençlerin büyük
//   çoğunluğu okulu miyop bitiriyor (Morgan ve arkadaşları, The Lancet, 2012; parçada ad ve oran yok); değişimin hızının genle
//   açıklanamaması; yakın çalışmanın katkısı ("probably"); açık havada daha çok vakit geçiren çocuklarda miyopinin daha seyrek
//   görülmesi ("appear"; çok okuyan çocuklarda da: "even if they read a lot", mutlak değil); gün ışığının iç mekân ışığından kat kat yoğun olması ve retinada dopamin salımı varsayımı ("may");
//   okul gününe açık hava etkinliği eklenen denemelerde yeni vakaların ılımlı ölçüde azalması (ör. Guangzhou, He ve arkadaşları,
//   JAMA, 2015; parçada ad ve sayı yok). Genel bilgi; tanı ya da tedavi önerisi değildir.
// - d04-o5: QWERTY düzeni 1870'lerde tasarlanan daktilolardan (Christopher Latham Sholes ve arkadaşları; parçada ad yok);
//   "daktilocuyu yavaşlatmak için" anlatısı popülerdir; daha yaygın açıklama amacı sık yan yana gelen harfleri ayırıp kolların
//   sıkışmasını önlemek diye anlatır, ama bu da tartışmalıdır (ör. Koichi ve Motoko Yasuoka, 2011: düzen telgrafçıların
//   ihtiyaçlarıyla evrildi; parçada ad yok, "some historians dispute even this account"); August Dvorak (eğitim araştırmacısı) kendi düzenini 1936'da patentledi (parçada
//   "In the 1930s"), sık harfleri orta sıraya koydu, daha hızlı yazıldığını bildirdi; Paul David, 1985 (American Economic Review,
//   "Clio and the Economics of QWERTY"): yola bağımlılık; Stan Liebowitz ve Stephen Margolis, 1990 ("The Fable of the Keys";
//   parçada ad ve yıl yok): Dvorak üstünlüğünü gösteren çalışmaların az ve denetimsiz olduğu, bir kısmının Dvorak'ın kendisince
//   yapıldığı.
// - d04-g5: Bazı adaların dünyanın başka hiçbir yerinde bulunmayan kuş türlerine ev sahipliği yapması (adsız, genel bilgi).
// - d04-t2: Samanyolu'nda milyarlarca gezegen bulunduğu tahmini ("are thought to"); Dünya dışında henüz inandırıcı yaşam kanıtı
//   bulunmaması.
// - d04-t5: Elmas bilinen en sert doğal malzemedir ama kırılgandır; uygun açıdan sert bir darbeyle kırılabilir (yerleşik bilgi).
// - d04-t7: Su buharı ve yoğun hava yıldız ışığını bulanıklaştırır; büyük teleskoplar yüksek ve kuru dağlara kurulur.
// - d04-c3: Kayaların yaşı içlerindeki bazı radyoaktif elementlerin bozunma hızından ölçülür (radyometrik tarihleme).
// - d04-c6: Kutup hayvanlarının hepsinde değil ama çoğunda kalın yağ tabakası yalıtım sağlar (genel bilgi; "most, though not
//   all", "largely").
// - d04-k5: Kaktüsler suyu gövdelerindeki süngerimsi dokuda tutarak uzun kuraklıklara dayanır (genel bilgi).
// - d04-p1: Ay kendi ekseni çevresinde Dünya çevresindeki turuyla aynı sürede döner (kütle çekimsel kilitlenme); Ay'ın uzak
//   yüzü ilk kez 20. yüzyılda bir uzay aracınca fotoğraflandı (Luna 3, 1959; şıkta yıl yok); Ay Dünya'dan yılda birkaç santimetre
//   uzaklaşıyor (yaklaşık 3,8 cm); Jüpiter'in büyük uyduları da gezegenine kilitlidir.
// - d04-p2: Benjamin Franklin 1784'te Paris'te yayımlanan şakacı bir mektupta Parislilerin erken kalkarak mum tasarruf
//   edebileceğini yazdı, saatleri değiştirmeyi önermedi; Almanya yaz saatini 1916'da yakıt tasarrufu için uyguladı, birçok ülke
//   kısa sürede izledi.
// - d04-p3: "Robot" sözcüğü Karel Čapek'in R.U.R. oyunundan (1920'de yazıldı, Ocak 1921'de Prag'da sahnelendi, kısa sürede
//   yurt dışında da oynandı); sözcüğü ağabeyi Josef Čapek önerdi; Çekçe "robota" (angarya, zorla çalıştırma); Josef Čapek
//   ressamdı (çeldiricide).
// - d04-p4: Çin Seddi'nin uzaydan çıplak gözle görülebildiği yaygın bir yanılgıdır; sur çok uzun ama birkaç metre geniştir ve
//   rengi çevresine benzer; astronotlar kentleri, havalimanlarını ve büyük yolları, özellikle gece ışıklarıyla, daha kolay seçtiğini
//   anlatır (ör. Yang Liwei, 2003; parçada ad yok). Doğru şıkta "been into orbit" (yörüngeye çıkanlar).
// - d04-b1: Devenin hörgücü su değil büyük ölçüde yağ depolar; besin azalınca yağ enerji için kullanılır, hörgüç küçülür ve yana
//   düşebilir; yağın tek yerde toplanmasının ısı atmayı kolaylaştırabileceği ("may"); susuzluğa dayanıklılık verimli böbrekler gibi
//   özelliklerden gelir; develer birkaç bin yıl önce evcilleştirildi.
// - d04-b2: Eyfel Kulesi 1889 Paris Dünya Fuarı için yapıldı; yaklaşık kırk yıl dünyanın en yüksek yapısıydı (1930'da Chrysler
//   Binası geçti; cümlede ad yok); yapımı sırasında tanınmış sanatçı ve yazarların karşı çıkan açık mektubu (1887); ilk izin
//   yirmi yıllıktı; telsiz anteni olarak işe yaraması kurtulmasına katkı verdi; bugün yılda birkaç milyon ziyaretçi (yaklaşık 6–7
//   milyon; cümlede "several million"), çoğu asansörle seyir katlarına çıkar.
// - d04-b3: Suda kalan parmakların buruşması sinir sistemince denetlenir: sinirleri hasarlı parmaklarda buruşma görülmez (1930'lar
//   gözlemi; cümlede yıl yok); kavrama varsayımı ve karışık deney sonuçları (Changizi 2011, Kareklas 2013, Haseleu 2014; cümlede
//   ad yok); insanların buruşukluğu hoş bulmaması kurgusal, genel bir gözlemdir.
// - d04-b4: Eski kilise camlarının alt kısmının akma yüzünden kalın olduğu yanılgısı; oda sıcaklığında camın gözle görülür
//   sarkmasının evrenin yaşından çok daha uzun süreceği hesabı (Zanotto, 1998; cümlede ad yok); eski cam yapımında düzgün
//   olmayan levhalar; kalın kenarın bazen yukarıda ya da yanda bulunması; Orta Çağ'da pencere camının pahalı olup çoğunlukla
//   kiliselerde ve çok varlıklıların evlerinde bulunması (yerleşik tarih bilgisi).
// - d04-b5: Louis Braille küçük yaşta babasının atölyesindeki bir kazadan sonra görme yetisini yitirdi; Paris'teki körler okulunda
//   orduya gece okunmak üzere geliştirilmiş kabartma nokta sistemini (Charles Barbier; cümlede ad yok) öğrendi; bunu karmaşık
//   bulup gençken altı noktalı hücreye dayanan daha basit bir yazı geliştirdi (1824 dolayı; cümlede yıl yok); yazı önce yavaş
//   yayıldı, bugün dünyanın her yerinde kullanılıyor; Braille yetenekli bir müzisyendi, yetişkinliğinde Paris'te birkaç kilisede
//   org çaldı (ör. Saint-Nicolas-des-Champs; cümlede kilise adı yok).
// - Öteki öğelerde ad, sayı ya da tarih yok; cümleler genel bilgi ya da kurgusaldır.

const T = 'taslak';
const U = 'Tam deneme 4';
const G = 'genel';
const S = 'saglik';
const F = 'fen';
const SO = 'sosyal';

const sorular = [
  // ---------- 1–6: kelime ----------
  { id: 'd04-k1', course: F, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['isim'],
    q: "The discovery of a previously unknown species of frog in the remote valley has raised hopes that the region's rich ---- can be protected before large-scale logging begins.",
    options: ['currency', 'hierarchy', 'biodiversity', 'monopoly', 'sediment'], answer: 2,
    explain: "Yeni bir kurbağa türünün bulunması, bölgenin zengin canlı çeşitliliğinin ağaç kesimi başlamadan korunabileceği umudunu doğuruyor: 'rich biodiversity' (zengin biyolojik çeşitlilik). 'Sediment' (tortu) en güçlü çeldiricidir, çünkü 'rich' ile ve bir vadiyle birlikte düşünülebilir; ama ağaç kesiminden korunacak olan tortu değil, canlılardır ve yeni bir tür bulunmasıyla tortu arasında bağ yok. 'Currency' (para birimi), 'hierarchy' (hiyerarşi) ve 'monopoly' (tekel) doğal bir bölgenin korunacak zenginliğini anlatmaz." },
  { id: 'd04-k2', course: SO, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['isim'],
    q: 'Historians warn that diaries written decades after the events they describe should be treated with caution, since memory is prone to ---- over time.',
    options: ['distortion', 'prosperity', 'obedience', 'consensus', 'abundance'], answer: 0,
    explain: "Olaylardan on yıllar sonra yazılan günlüklere temkinle yaklaşılmalı, çünkü bellek zamanla çarpıtılmaya yatkındır: 'be prone to distortion' (bozulmaya, çarpıtılmaya yatkın olmak). 'Consensus' (uzlaşma) en güçlü çeldiricidir, çünkü tarihçilerin dünyasından bir sözcüktür; ama belleğin zamanla 'uzlaşmaya yatkın olması' temkinin gerekçesi olamaz. 'Prosperity' (refah), 'obedience' (itaat) ve 'abundance' (bolluk) belleğin zamanla uğradığı bir değişikliği anlatmaz." },
  { id: 'd04-k3', course: S, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['sıfat'],
    q: "Although the drug's side effects are generally mild and short-lived, in a small minority of patients they can prove ---- enough to warrant admission to hospital.",
    options: ['negligible', 'transient', 'discernible', 'benign', 'debilitating'], answer: 4,
    explain: "'Although' bir karşıtlık kuruyor: yan etkiler genellikle hafif ve kısa sürelidir, ama hastaların küçük bir bölümünde hastaneye yatırmayı gerektirecek kadar ağır, insanı güçten düşüren bir hâl alabilir: 'debilitating' (güçten düşüren, takatsiz bırakan). 'Transient' (geçici) en güçlü çeldiricidir, çünkü yan etkilerle sık kullanılır; ama 'short-lived' sözünü yineler, karşıtlık kurmaz ve geçici bir etki hastaneye yatırmanın gerekçesi olmaz. 'Negligible' (önemsenmeyecek kadar küçük) ve 'benign' (zararsız) karşıtlığı tersine çevirir. 'Discernible' (fark edilebilir) bir etkinin görülebildiğini söyler; 'enough to warrant admission' (yatırmayı haklı kılacak kadar) ile anlamlı bir bağ kurmaz." },
  { id: 'd04-k4', course: G, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['zarf'],
    q: 'The bridge has been ---- closed to heavy goods vehicles while engineers assess the cracks in its supports; a decision on whether it can reopen is expected next month.',
    options: ['permanently', 'provisionally', 'fluently', 'lavishly', 'vividly'], answer: 1,
    explain: "Köprü, mühendisler destek ayaklarındaki çatlakları incelerken ağır taşıtlara kapatılmış; yeniden açılıp açılamayacağına önümüzdeki ay karar verilecek. Demek ki kapatma kesin değil, karar verilene kadar geçicidir: 'provisionally' (geçici olarak, kesin karara kadar). 'Permanently' (kalıcı olarak) en güçlü çeldiricidir, çünkü 'closed' ile sık kullanılır; ama yeniden açılma kararının beklenmesiyle çelişir. 'Fluently' (akıcı biçimde), 'lavishly' (bol keseden, savurganca) ve 'vividly' (canlı biçimde) bir yolun kapatılma biçimini ya da süresini anlatmaz." },
  { id: 'd04-k5', course: F, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['fiil'],
    q: 'Many cacti ---- water in spongy tissue within their stems, which enables them to withstand prolonged periods of drought.',
    options: ['dissipate', 'deplete', 'exude', 'retain', 'dilute'], answer: 3,
    explain: "Kaktüslerin uzun kuraklıklara dayanabilmesi, suyu gövdelerindeki süngerimsi dokuda tutmalarıyla olur: 'retain water' (suyu tutmak, elde tutmak). 'Deplete' (tüketmek, azaltmak) en güçlü çeldiricidir, çünkü suyla birlikte kullanılan bir fiildir; ama suyunu tüketen bir bitki kuraklığa dayanamaz, cümlenin sonuyla çelişir. 'Dissipate' (dağıtıp yok etmek) ve 'exude' (sızdırmak, dışarı salmak) da suyu kaybetmeyi anlatır. 'Dilute' (seyreltmek) bir sıvıyı sulandırmaktır; suyu saklamayı anlatmaz." },
  { id: 'd04-k6', course: G, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['öbek fiil'],
    q: 'After months of negotiations failed to produce an agreement, the two companies decided to ---- their plans for a merger and pursue separate strategies instead.',
    options: ['call off', 'look into', 'set up', 'carry out', 'take on'], answer: 0,
    explain: "Aylarca süren görüşmeler sonuç vermeyince iki şirket birleşme planından vazgeçip ayrı yollarda ilerlemeye karar veriyor: 'call off' (iptal etmek, vazgeçmek). 'Carry out' (gerçekleştirmek) en güçlü çeldiricidir, çünkü 'plans' ile çok sık kullanılır; ama birleşmeyi gerçekleştirip aynı anda ayrı stratejiler izlemek çelişir. 'Look into' (incelemek) da ayrı yollara gitme kararıyla bağdaşmaz. 'Set up' (kurmak) ve 'take on' (üstlenmek) başarısız görüşmelerin sonucunu anlatmaz." },

  // ---------- 7–16: dil bilgisi ----------
  { id: 'd04-g1', course: G, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['zaman: present perfect'],
    q: 'Since the new metro line opened in 2019, the number of cars entering the city centre each morning ---- by almost a third.',
    options: ['falls', 'had fallen', 'will fall', 'has fallen', 'was falling'], answer: 3,
    explain: "'Since + geçmişte bir başlangıç' (2019'da açıldığından beri) bugüne uzanan bir değişimi anlatır; ana cümle present perfect ister: 'has fallen'. 'Had fallen' en güçlü çeldiricidir, ama past perfect geçmişteki başka bir ana göre daha önce olanı anlatır; cümlede böyle bir geçmiş an yok, değişim bugüne kadar sürüyor. 'Falls' genel bir gerçeği, 'will fall' geleceği, 'was falling' geçmişte süren bir eylemi anlatır; 'since 2019' ile kurulan bugüne uzanan süreyle uyuşmaz." },
  { id: 'd04-g2', course: F, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['kip geçmiş (modal perfect)'],
    q: 'The hoof prints in the mud were still sharp and full of fresh water, so the deer ---- through the clearing only a short time before we arrived.',
    options: ["can't have passed", 'must have passed', 'should have passed', "needn't have passed", 'would rather have passed'], answer: 1,
    explain: "İzlerin hâlâ keskin olması ve taze suyla dolu olması bir kanıttır; buradan geçmişe dair güçlü bir çıkarım yapılır: geyik açıklıktan biz varmadan kısa süre önce geçmiş olmalı: 'must have passed'. 'Can't have passed' kanıtın gösterdiğinin tersini söyler. 'Should have passed' geçmişte beklenip yapılmayanı, 'needn't have passed' gereksiz yere yapılanı anlatır; 'would rather have passed' ise bir tercihi bildirir. Hiçbiri izlerden çıkarılan sonucu vermez." },
  { id: 'd04-g3', course: SO, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['isim-fiil ve mastar'],
    q: 'The committee is considering ---- the application deadline by a month so that smaller organisations have enough time to prepare.',
    options: ['to extend', 'having extended', 'to have extended', 'being extended', 'extending'], answer: 4,
    explain: "'Consider' (düşünmek, değerlendirmek) ardından -ing alır: kurul son başvuru tarihini bir ay uzatmayı düşünüyor: 'considering extending'. 'Having extended' de -ing biçimindedir ve en güçlü çeldiricidir, ama tamamlanmış bir eylemi anlatır; kurul uzatmayı henüz yapmamış, yapıp yapmamayı tartıyor. 'Being extended' edilgendir: uzatılanın kurulun kendisi olduğunu söyler. 'To extend' ve 'to have extended' 'consider' fiilinden sonra gelmez." },
  { id: 'd04-g4', course: SO, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['edat'],
    q: 'The success of the reform will hinge largely ---- whether local councils are given the funds they need to implement it.',
    options: ['on', 'of', 'with', 'to', 'at'], answer: 0,
    explain: "'Hinge on something' (… e bağlı olmak, … e dayanmak) kalıplaşmış bir fiil-edat bağıdır: reformun başarısı büyük ölçüde yerel yönetimlere uygulama için gereken paranın verilip verilmemesine bağlı. 'To' en güçlü çeldiricidir, çünkü 'be linked to', 'be tied to' gibi bağlılık bildiren öbeklerde geçer; ama 'hinge' fiiliyle kullanılmaz. 'Of', 'with' ve 'at' da 'hinge' ile bağımlılık anlamı kurmaz." },
  { id: 'd04-g5', course: F, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['çok sözcüklü edat'],
    q: '---- its modest size, the island supports a remarkable variety of bird species that are found nowhere else in the world.',
    options: ['By virtue of', 'In lieu of', 'Notwithstanding', 'With regard to', 'In keeping with'], answer: 2,
    explain: "Adanın küçük olması, bu kadar çok yerli kuş türü barındırmasını beklenmedik kılar; bu karşıtlık 'notwithstanding' (… e karşın, … e rağmen) ile kurulur. 'By virtue of' (… sayesinde, … den ötürü) en güçlü çeldiricidir, ama küçüklüğü kuş çeşitliliğinin nedeni yapar ve mantığı ters çevirir. 'In keeping with' (… e uygun olarak) küçüklükle büyük çeşitlilik arasında bir uyum varmış gibi gösterir; bu da karşıtlığı siler. 'In lieu of' (… yerine) ve 'with regard to' (… konusunda) iki bilgi arasında anlamlı bir bağ kurmaz." },
  { id: 'd04-g6', course: G, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: '---- the experiment was repeated several times under the same conditions, the researchers could not reproduce the striking result reported in the original study.',
    options: ['Unless', 'Because', 'As soon as', 'So that', 'Although'], answer: 4,
    explain: "Deney aynı koşullarda birkaç kez yinelendiği hâlde araştırmacılar ilk çalışmadaki çarpıcı sonucu elde edemedi; beklentiyle sonuç arasındaki bu karşıtlık 'although' (… e karşın) ile bağlanır. 'Because' (çünkü) en güçlü çeldiricidir, ama deneyi yinelemeyi sonucu elde edememenin nedeni yapar; yinelemek tersine sonucu bulmayı kolaylaştırmalıdır. 'Unless' (… medikçe) koşul, 'as soon as' (… r … maz) zaman, 'so that' (… sın diye) amaç bildirir." },
  { id: 'd04-g7', course: G, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Hikers are advised to carry an extra layer of warm clothing ---- the weather on the mountain changes suddenly during the afternoon.',
    options: ['so that', 'in case', 'unless', 'as though', 'whereas'], answer: 1,
    explain: "Yürüyüşçülere fazladan bir kat giysi taşımaları, havanın birden değişme olasılığına karşı önerilir; olası bir duruma karşı önlem 'in case' (… olur diye, … ihtimaline karşı) ile bağlanır. 'So that' (… sın diye) en güçlü çeldiricidir, ama havanın değişmesini giysi taşımanın amacı yapar; kimse havayı değiştirmek için giysi taşımaz. 'Unless' (… medikçe) önerinin yalnız hava değişmezse geçerli olduğunu söyler; anlamı ters çevirir. 'As though' (sanki) benzetme, 'whereas' (oysa) karşılaştırma bildirir." },
  { id: 'd04-g8', course: F, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlantı zarfı'],
    q: "Most of the region's rivers were badly polluted in the 1970s; ----, many of them now support healthy fish populations again after decades of cleaning work.",
    options: ['therefore', 'for example', 'in other words', 'nevertheless', 'similarly'], answer: 3,
    explain: "Noktalı virgülden önce ırmakların 1970'lerde ağır biçimde kirlendiği, sonra bugün yeniden sağlıklı balık topluluklarını barındırdığı söyleniyor; bu karşıtlık 'nevertheless' (yine de, buna karşın) ile bağlanır. 'Therefore' (bu yüzden) en güçlü çeldiricidir, ama kirliliği balıkların geri dönüşünün nedeni yapar; geri dönüşün nedeni kirlilik değil, temizlik çalışmalarıdır. 'For example' (örneğin), 'in other words' (başka bir deyişle) ve 'similarly' (benzer biçimde) iki zıt durumu bağlamaz." },
  { id: 'd04-g9', course: F, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['eşleşik bağlaç'],
    q: 'The new alloy is ---- lighter than aluminium ---- considerably more resistant to corrosion, so aircraft manufacturers have shown keen interest in it.',
    options: ['not only / but also', 'neither / nor', 'either / or', 'whether / or', 'no sooner / than'], answer: 0,
    explain: "Uçak üreticileri alaşıma büyük ilgi gösteriyor; bunun nedeni alaşımın iki üstünlüğü birden taşımasıdır: hem alüminyumdan hafif hem de korozyona çok daha dayanıklı. İki olumlu özelliği art arda ekleyen yapı 'not only … but also' (yalnız … değil, aynı zamanda …) olur. 'Neither … nor' (ne … ne de) alaşımı iki üstünlükten de yoksun bırakır ve üreticilerin ilgisiyle çelişir. 'Either … or' (ya … ya da) iki özellikten yalnız birini bırakır; ilginin gerekçesini zayıflatır. 'Whether … or' burada bir yüklem kurmaz; 'no sooner … than' ise iki olayın art arda olduğunu anlatan bir zaman yapısıdır, iki özelliği bağlamaz." },
  { id: 'd04-g10', course: G, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['edatlı kalıp'],
    q: 'The festival will go ahead as planned, ---- the exception of the evening concert, which has been cancelled because of the storm forecast.',
    options: ['in', 'by', 'with', 'for', 'at'], answer: 2,
    explain: "'With the exception of' (… dışında, … hariç) kalıplaşmış bir edat öbeğidir: şenlik, fırtına uyarısı yüzünden iptal edilen akşam konseri dışında planlandığı gibi yapılacak. 'In', 'by', 'for' ve 'at' 'the exception of' ile birlikte 'hariç' anlamı kurmaz. 'By exception' ya da 'for an exception' gibi öbekler de bu yapıda kullanılmaz; ardından gelen 'of' yalnız 'with the exception' kalıbına uyar." },

  // ---------- 17–26: boşluklu metin ----------
  { id: 'd04-z1', course: G, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Çimlerdeki kestirmeler',
    text: "Anyone who has walked across a park has probably noticed narrow strips of bare earth cutting across the grass where no path was ever planned. Planners call these 'desire lines' or 'desire paths', and they appear (1) ---- enough people decide that the official route is too long or too indirect. Each walker flattens the grass a little, and the worn strip then invites the next person to follow it. For many years, the usual response was to put up fences or signs in an attempt to keep people (2) ---- the grass. Such measures rarely worked for long. More recently, some designers have taken the opposite approach. (3) ----, they wait several months after a new campus or park opens, watch where people actually walk and only then decide where the paved paths should go. Supporters argue that desire paths (4) ---- as a free survey of how a space is really used, revealing needs that drawings and models tend to miss. Critics point out that the shortest route is not always the safest one, and that a path worn across a slope may cause erosion. Even so, few planners now dismiss these informal tracks as nothing more than signs of (5) ---- behaviour.",
    steps: [
      { konu: ['bağlaç'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['unless', 'whenever', 'although', 'so that', 'as if'], answer: 1,
        explain: "Kestirme patikalar, yeterince insan resmî yolu uzun ya da dolambaçlı bulduğu her seferde ortaya çıkar; tekrarlanan bir koşul ve zaman ilişkisi 'whenever' (… dığı her seferde) ile bağlanır. 'Unless' (… medikçe) en güçlü çeldiricidir, ama patikaların ancak insanlar yolu uzun bulmazsa çıktığını söyler; anlamı ters çevirir. 'Although' (… e karşın) karşıtlık, 'so that' (… sın diye) amaç, 'as if' (sanki) benzetme bildirir; insanların kararı patikanın nedenidir." },
      { konu: ['edat'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['over', 'into', 'at', 'on', 'off'], answer: 4,
        explain: "Çit ve tabelaların amacı insanları çimlerden uzak tutmaktır: 'keep people off the grass' (çimlere basılmasını önlemek). 'On' en güçlü çeldiricidir, ama 'keep people on the grass' insanları çimin üstünde tutmak demektir; çitin amacının tersidir. 'Over', 'into' ve 'at' 'keep … the grass' yapısında uzak tutma anlamı vermez." },
      { konu: ['bağlantı zarfı'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['Instead', 'Otherwise', 'Similarly', 'Nevertheless', 'Meanwhile'], answer: 0,
        explain: "Önceki cümle bazı tasarımcıların ters bir yol tuttuğunu söylüyor; boşluktan sonra bu yol anlatılıyor: çit kurmak yerine aylarca bekleyip insanların nereden yürüdüğüne bakıyorlar. Eski yöntemin yerine geçeni 'Instead' (bunun yerine) bağlar. 'Similarly' (benzer biçimde) en güçlü çeldiricidir, ama yeni yaklaşımı eski yönteme benzetir; oysa 'opposite approach' ikisinin zıt olduğunu söylüyor. 'Otherwise' (yoksa), 'nevertheless' (yine de) ve 'meanwhile' (bu arada) bu bağı kurmaz." },
      { konu: ['fiil'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['refer', 'rely', 'consist', 'serve', 'insist'], answer: 3,
        explain: "Savunuculara göre kestirme patikalar bir alanın gerçekte nasıl kullanıldığını gösteren ücretsiz bir anket işlevi görür: 'serve as' (… işlevi görmek, … olarak iş görmek). 'Refer' 'refer to … as' biçiminde 'bir şeye … demek' anlamında kullanılır; 'refer as' kurulmaz. 'Rely' 'on' ile, 'consist' 'of' ile, 'insist' 'on' ile kullanılır; hiçbiri 'as' ile bir işlev anlatmaz." },
      { konu: ['sıfat'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['generous', 'reliable', 'careless', 'cautious', 'polite'], answer: 2,
        explain: "Parça kestirme patikaların bir zamanlar kurallara uymayan, düşüncesiz davranışın izi sayıldığını, bugün ise değerli bir bilgi kaynağı görüldüğünü anlatıyor: 'signs of careless behaviour' (özensiz, düşüncesiz davranışın belirtileri). 'Cautious' (temkinli) en güçlü çeldiricidir, ama çimi çiğneyip kestirmeden gitmek temkinli bir davranış değildir. 'Generous' (cömert), 'reliable' (güvenilir) ve 'polite' (kibar) 'nothing more than' ile küçümsenen bir davranışı anlatmaz." },
    ] },

  { id: 'd04-z2', course: F, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Yüzen buz',
    text: "Most substances become denser as they cool, and their solid form usually sinks in its own liquid. Water is a striking exception. As it cools, liquid water does become denser, but only (1) ---- it reaches about 4 °C. Below that temperature, its molecules begin to arrange themselves into a more open pattern, held together by hydrogen bonds, and the water expands slightly. When it finally freezes, this open structure becomes fixed, (2) ---- ice is roughly nine per cent less dense than the liquid it came from. This unusual behaviour has important consequences for life. In winter, the coldest water in a lake rises to the surface and freezes there, forming a layer of ice that (3) ---- the water below from the freezing air above. (4) ----, many lakes freeze only at the surface instead of freezing solid, and fish and other organisms can survive the winter in the liquid water near the bottom. If ice sank, lakes in cold regions might gradually fill with ice from the bottom up, and much of the life they support (5) ---- unable to survive the winter.",
    steps: [
      { konu: ['bağlaç'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['until', 'unless', 'whereas', 'since', 'as though'], answer: 0,
        explain: "Sıvı su soğudukça yoğunlaşır, ama bu yalnız yaklaşık 4 °C'ye ulaşana kadar sürer; sonraki cümle de 'Below that temperature' diye bu sınırın altını anlatıyor. Bir sürecin bittiği sınırı 'until' (… e kadar) bağlar. 'Since' en güçlü çeldiricidir, çünkü zaman bildirebilir; ama 'only since it reaches 4 °C' yoğunlaşmayı 4 °C'den sonra başlatır ve sonraki cümleyle çelişir. 'Unless' (… medikçe) koşul, 'whereas' (oysa) karşılaştırma, 'as though' (sanki) benzetme bildirir." },
      { konu: ['bağlaç'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['although', 'unless', 'so', 'as if', 'whereas'], answer: 2,
        explain: "Açık yapının donmayla sabitlenmesi, buzun sıvıdan daha az yoğun olmasının nedenidir; sonucu 'so' (bu yüzden, bu nedenle) bağlar. 'Whereas' (oysa) en güçlü çeldiricidir, çünkü iki durumu yan yana koyar; ama bu iki bilgi birbirine zıt değil, biri ötekinin sonucudur. 'Although' (… e karşın) aynı karşıtlık hatasını yapar; 'unless' (… medikçe) koşul, 'as if' (sanki) benzetme bildirir." },
      { konu: ['fiil'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['exposes', 'connects', 'releases', 'combines', 'insulates'], answer: 4,
        explain: "Gölün yüzeyindeki buz tabakası alttaki suyu üstteki dondurucu havadan yalıtır: 'insulate something from something' (bir şeyi bir şeye karşı yalıtmak). Bu yüzden balıklar dipteki sıvı suda kışı geçirebiliyor. 'Exposes' (açık bırakmak, maruz bırakmak) en güçlü çeldiricidir, ama 'expose to' ile kurulur ve anlamı tersine çevirir: suyu soğuk havaya açık bırakan bir tabaka canlıları korumaz. 'Connects', 'releases' ve 'combines' 'from' ile koruma anlamı vermez." },
      { konu: ['bağlantı zarfı'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['In contrast', 'As a result', 'Otherwise', 'Even so', 'Instead'], answer: 1,
        explain: "Önceki cümlede soğuk suyun yüzeye çıkıp orada donduğu ve alttaki suyu yalıtan bir buz tabakası oluşturduğu anlatılıyor; boşluktan sonra bunun sonucu geliyor: göller yalnız yüzeyde donar, dibe kadar donmaz ve canlılar alttaki suda yaşar. Sonuç 'As a result' (bunun sonucunda) ile bağlanır. 'Even so' (öyle olsa bile) en güçlü çeldiricidir, ama sonucu beklenmedik bir durum gibi sunar. 'In contrast' (buna karşılık) karşıtlık, 'otherwise' (yoksa) ve 'instead' (bunun yerine) seçenek bildirir." },
      { konu: ['koşul'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['is', 'will be', 'had been', 'would be', 'has been'], answer: 3,
        explain: "'If ice sank' gerçek dışı bir durum kuruyor (ikinci tip koşul): buz batsaydı. Cümlenin ilk sonucu da 'might … fill' ile kurulmuş; ikinci sonuç da aynı yapıda olmalıdır: 'would be'. 'Will be' en güçlü çeldiricidir, ama birinci tip koşulun sonucudur ve buzun batmasını gerçekleşebilir bir olasılık gibi sunar. 'Is', 'had been' ve 'has been' 'If ice sank' ile kurulan gerçek dışı koşula uymaz." },
    ] },

  // ---------- 27–36: cümle tamamlama ----------
  { id: 'd04-t1', course: G, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['karşıtlık'],
    q: 'While most people assume that handwriting is a skill learnt once and for all in childhood, ----.',
    options: [
      'children usually learn to write their names before they start school',
      'many schools still require pupils to practise joined-up writing daily',
      'handwriting is taught in nearly every primary school around the world',
      'learning to write early helps children to recognise letters faster',
      'it may in fact go on changing noticeably well into adult life',
    ], answer: 4,
    explain: "'While' burada karşıtlık kuruyor: çoğu insan el yazısını çocuklukta bir kez öğrenilip biten bir beceri sanıyor, oysa el yazısı yetişkinlikte de belirgin biçimde değişmeyi sürdürebilir. Okulların her gün bitişik yazı alıştırması yaptırması en güçlü çeldiricidir, çünkü el yazısının öğretimiyle ilgilidir; ama 'çocuklukta bir kez öğrenilir' varsayımıyla çelişmez, hatta onu destekler. Çocukların okuldan önce adını yazması, el yazısının hemen her ilkokulda öğretilmesi ve erken yazmanın harf tanımaya yararı da varsayımla bir karşıtlık kurmaz." },
  { id: 'd04-t2', course: F, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: '----, scientists have so far found no convincing evidence of life anywhere beyond the Earth.',
    options: [
      'Since the universe is thought to contain very few planets',
      'Although our galaxy alone may hold billions of planets',
      'Because no telescope has ever been able to observe distant stars',
      'As soon as the first probes landed on the surface of Mars',
      'If water had been discovered on several other worlds',
    ], answer: 1,
    explain: "Ana cümle Dünya dışında henüz inandırıcı bir yaşam kanıtı bulunmadığını söylüyor. Yalnız bizim gökadamızda milyarlarca gezegen bulunabilmesi yaşam bulmayı beklenir kılar; bu beklenti 'although' ile bağlanınca karşıtlık doğar. Evrende çok az gezegen olduğunun düşünülmesi en güçlü çeldiricidir, çünkü 'since' ile bir neden kurar; ama bu bilgi yanlıştır ve sonucu sıradan bir beklentiye çevirir. Hiçbir teleskobun uzak yıldızları gözleyememesi de yanlıştır. 'As soon as' bir zaman noktası verir, 'have so far found' ile uyuşmaz; 'If water had been discovered' ise ana cümlenin zamanına uymayan bir koşul kurar." },
  { id: 'd04-t3', course: SO, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: "Even though the town's population has nearly doubled over the past twenty years, ----.",
    options: [
      'new housing estates have been built on its northern edge',
      'traffic on its narrow streets has become a daily problem',
      'several new schools have opened to meet rising demand',
      'it still has only one small library and no swimming pool',
      'house prices have risen faster than in neighbouring areas',
    ], answer: 3,
    explain: "'Even though' (… e karşın) bir karşıtlık bekler: kasabanın nüfusu yirmi yılda neredeyse ikiye katlandığı hâlde hâlâ tek bir küçük kütüphanesi var ve yüzme havuzu yok; 'still' de bu beklenmedik durumu vurguluyor. Dar sokaklardaki trafiğin her günkü bir sorun olması en güçlü çeldiricidir, çünkü olumsuz bir durumdur; ama nüfus artışının doğal sonucudur, karşıtlık kurmaz. Yeni konut alanları, yeni okullar ve hızla artan konut fiyatları da nüfus artışıyla uyumludur." },
  { id: 'd04-t4', course: S, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: '----, they often avoid it for fear of making their pain worse.',
    options: [
      'Although many patients know that gentle exercise could help them',
      'Because exercise rarely causes any discomfort in people with joint pain',
      'Once patients have been told that exercise will not damage their joints',
      'Since most people with joint pain enjoy taking part in team sports',
      'So that patients with joint pain can return to work more quickly',
    ], answer: 0,
    explain: "Ana cümle hastaların ağrıyı artırır korkusuyla egzersizden çoğu zaman kaçındığını söylüyor. Hafif egzersizin yararlı olabileceğini bilmeleri bu kaçınmayı beklenmedik kılar; 'although' ile bağlanınca karşıtlık doğar, 'they' ve 'it' de 'patients' ve 'exercise' sözcüklerine döner. Egzersizin kendilerine zarar vermeyeceği söylendikten sonra kaçınmaları en güçlü çeldiricidir, çünkü konuya en yakın seçenektir; ama 'once' ile kurulan zaman bağı, güvence verilince korkunun sürmesini olağan bir sonuç gibi sunar. Egzersizin rahatsızlık vermemesi ve takım sporlarından hoşlanmak kaçınmanın nedeni olamaz; amaç bildiren 'so that' de kaçınmayı açıklamaz." },
  { id: 'd04-t5', course: F, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although diamond is the hardest natural material known, ----.',
    options: [
      'it is widely used to cut and polish other stones',
      'nothing else found in nature is able to scratch its surface',
      'it can shatter if it is struck sharply at the right angle',
      'it is formed under intense heat and pressure deep underground',
      'jewellers value it more highly than almost any other gem',
    ], answer: 2,
    explain: "'Although' bir karşıtlık bekler: elmas bilinen en sert doğal malzeme olduğu hâlde uygun açıdan sert bir darbeyle kırılabilir. Sertlik çizilmeye dayanmaktır, kırılmazlık değildir; karşıtlık buradan doğar. Doğadaki hiçbir şeyin yüzeyini çizememesi en güçlü çeldiricidir, ama sertliğin doğal sonucudur, karşıtlık değil aynı yönde bilgi verir. Başka taşları kesmekte kullanılması da sertlikten gelir. Yer altında oluşması ve kuyumcuların onu çok değerli bulması sertlikle bir karşıtlık kurmaz." },
  { id: 'd04-t6', course: G, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['neden-sonuç'],
    q: 'Because the old railway line had been closed for several decades, ----.',
    options: [
      'it carried more passengers than any other line in the region',
      'its timetable was revised at the start of every summer',
      'tickets for its trains had become much cheaper than before',
      'trees and bushes had grown over much of the track',
      'its trains were rarely delayed by bad weather in winter',
    ], answer: 3,
    explain: "'Because' bir neden veriyor: eski demiryolu hattı on yıllardır kapalıydı. Bunun mantıklı sonucu rayların büyük bölümünün ağaç ve çalılarla kaplanmasıdır. Biletlerin ucuzlaması en güçlü çeldiricidir, çünkü past perfect ile ana cümleye uyar; ama kapalı bir hatta tren de bilet de yoktur. En çok yolcuyu taşıması, tarifesinin her yaz değişmesi ve trenlerinin kötü havada gecikmemesi de işleyen bir hattı anlatır; kapalı olmasıyla çelişir." },
  { id: 'd04-t7', course: F, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['neden-sonuç'],
    q: '----, astronomers often build their largest telescopes on high, dry mountain tops.',
    options: [
      'As water vapour and dense air blur the light from distant stars',
      'Although mountain weather is often clear and stable throughout the night',
      'Unless the telescopes can be reached easily by road throughout the year',
      'So that the telescopes are better protected from strong winds and heavy snow',
      'Even if the sky at lower altitudes is darker and clearer',
    ], answer: 0,
    explain: "Ana cümle büyük teleskopların yüksek ve kuru dağlara kurulduğunu söylüyor; nedeni su buharının ve yoğun havanın uzak yıldızların ışığını bulanıklaştırmasıdır. 'As' burada 'çünkü' anlamındadır ve yükseklik ile kuruluğu tek tek açıklar. Dağ havasının gece açık ve durgun olması en güçlü çeldiricidir, çünkü doğru bir bilgidir; ama 'although' ile bağlanınca dağın tercih edilme nedenini karşıtlık gibi sunar. Teleskopları rüzgâr ve kardan korumak amacı dağ tepesiyle çelişir; 'unless' ve 'even if' de yer seçimini açıklamaz." },
  { id: 'd04-t8', course: G, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['koşul', 'üçüncü tip'],
    q: "If the town's sea wall had not been raised last year, ----.",
    options: [
      'the storm will flood many of the homes near the harbour',
      'many homes near the harbour are flooded every winter',
      'the harbour had been rebuilt with money from the council',
      'far fewer homes would have been damaged by the storm',
      "last week's storm could have flooded homes near the harbour",
    ], answer: 4,
    explain: "Cümle gerçekleşmemiş bir geçmişi kuruyor (üçüncü tip koşul): deniz duvarı geçen yıl yükseltilmeseydi. Ana cümlede 'would/could have + V3' gerekir ve anlamca daha çok zarar beklenir: geçen haftaki fırtına limana yakın evleri su basmasına yol açabilirdi. Çok daha az evin zarar göreceğini söyleyen seçenek yapıca uyar ama mantığı ters çevirir; duvar yükseltilmeseydi zarar artardı. 'Will flood', 'are flooded' ve 'had been rebuilt' üçüncü tip koşulun ana cümlesine uymaz." },
  { id: 'd04-t9', course: SO, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['zaman'],
    q: 'Until the telephone became common in ordinary homes, ----.',
    options: [
      'most families have been sending text messages to one another',
      'people relied mainly on letters to keep in touch',
      'people will be able to talk to friends on other continents',
      'many people stopped writing letters to their relatives altogether',
      'calls between cities had become cheap enough for everyone',
    ], answer: 1,
    explain: "'Until' (… e kadar) telefonun evlere yayılmasından önceki dönemi gösteriyor; o dönemde insanların haberleşmek için çoğunlukla mektuba dayanması bu zamanla uyumludur. Mektup yazmayı tümüyle bırakmak en güçlü çeldiricidir, çünkü mektupla ilgilidir ve geçmiş zamanla kurulmuştur; ama telefondan önceki dönemi tersine anlatır, mektubu bırakma telefondan sonra gelir. Şehirler arası konuşmaların herkes için ucuzlaması da telefonun yaygınlaşmasından önce olamaz. 'Have been sending' ve 'will be able to' geçmişteki bir döneme uymaz." },
  { id: 'd04-t10', course: G, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['amaç'],
    q: 'Many museums now limit the number of visitors allowed into each room at one time ----.',
    options: [
      'even though most of their rooms are larger than they used to be',
      'because visitors have become less interested in old paintings',
      'in order to protect fragile objects from heat and moisture',
      'whereas some smaller galleries charge no entrance fee at all',
      'until the paintings have been moved to a different building',
    ], answer: 2,
    explain: "Müzelerin bir odaya aynı anda giren ziyaretçi sayısını sınırlamasının amacı, kırılgan eserleri kalabalığın yaydığı ısı ve nemden korumaktır; amaç 'in order to' ile bağlanır. Ziyaretçilerin eski tablolara ilgisinin azalması en güçlü çeldiricidir, çünkü 'because' ile bir neden verir; ama ilgi azalırsa kalabalık da azalır ve sınır koymaya gerek kalmaz. Odaların eskisinden büyük olması 'even though' ile anlamlı bir karşıtlık kurmaz; ücretsiz galeriler ve tabloların taşınması da sınırlamanın amacını açıklamaz." },

  // ---------- 37–39: çeviri, İngilizceden Türkçeye ----------
  { id: 'd04-c1', course: G, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'The bridge, which was designed by an engineer who had never built anything so large before, is still in use more than a century later.',
    options: [
      'Daha önce birçok büyük yapı inşa etmiş bir mühendisin tasarladığı köprü, yüz yılı aşkın bir süre sonra hâlâ kullanılıyor.',
      'Daha önce hiç bu kadar büyük bir yapı inşa etmemiş bir mühendisin tasarladığı köprü, yüz yıl dolmadan kullanımdan kaldırıldı.',
      'Yüz yılı aşkın bir süredir kullanılan köprüyü tasarlayan mühendis, daha sonra çok daha büyük yapılar da inşa etti.',
      'Daha önce hiç bu kadar büyük bir yapı inşa etmemiş bir mühendisin tasarladığı köprü, yüz yılı aşkın bir süre sonra hâlâ kullanılıyor.',
      'Daha önce hiç bu kadar büyük bir köprü görmemiş olan mühendis, yüz yılı aşkın bir süredir kullanılan bu köprüyü inceledi.',
    ], answer: 3,
    explain: "İki sıfat cümleciği iç içe: 'which was designed by an engineer' köprüyü, 'who had never built anything so large before' mühendisi niteliyor. Doğru çeviri ikisini de 'daha önce hiç bu kadar büyük bir yapı inşa etmemiş bir mühendisin tasarladığı köprü' diye veriyor; 'still in use more than a century later' de 'yüz yılı aşkın bir süre sonra hâlâ kullanılıyor' olur. 'Birçok büyük yapı inşa etmiş' mühendisin deneyimini tersine çeviriyor. 'Kullanımdan kaldırıldı' köprünün hâlâ kullanıldığı bilgisiyle çelişiyor. Mühendisin sonradan daha büyük yapılar inşa etmesi ve köprüyü yalnız incelemesi cümlede yok." },
  { id: 'd04-c2', course: SO, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['karşılaştırma', 'isim cümleciği'],
    q: 'Many historians now argue that the decline of the empire was caused less by foreign invasions than by economic problems at home.',
    options: [
      'Pek çok tarihçi bugün, imparatorluğun gerileyişine dış istilalardan çok ülke içindeki ekonomik sorunların yol açtığını savunuyor.',
      'Pek çok tarihçi bugün, imparatorluğun gerileyişine ülke içindeki ekonomik sorunlardan çok dış istilaların yol açtığını savunuyor.',
      'Pek çok tarihçi bugün, imparatorluğun gerileyişine hem dış istilaların hem de ülke içindeki ekonomik sorunların eşit ölçüde yol açtığını savunuyor.',
      'Pek çok tarihçiye göre imparatorluk, ülke içindeki ekonomik sorunları çözebilseydi dış istilalara karşı koyabilirdi.',
      'Bugün az sayıda tarihçi, imparatorluğun gerileyişine dış istilalardan çok ülke içindeki ekonomik sorunların yol açtığını kabul ediyor.',
    ], answer: 0,
    explain: "'Was caused less by A than by B' (A'dan çok B yol açtı) iki nedeni tartar ve ağırlığı ikinciye verir: gerilemeye dış istilalardan çok ülke içindeki ekonomik sorunlar yol açtı. 'Many historians now argue' da 'pek çok tarihçi bugün savunuyor' olur. İki nedenin yerini değiştiren çeviri en güçlü çeldiricidir: sözcükler aynı, ama ağırlık dış istilalara geçiyor. 'Eşit ölçüde' karşılaştırmayı siliyor. 'Çözebilseydi karşı koyabilirdi' cümlede olmayan bir koşul kuruyor. 'Az sayıda tarihçi' ise 'many' sözünü tersine çeviriyor." },
  { id: 'd04-c3', course: F, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['isim-fiil ve mastar'],
    q: 'Measuring the age of a rock precisely requires knowing how quickly certain radioactive elements in it decay.',
    options: [
      'Bir kayanın yaşını kesin olarak ölçmek, içindeki radyoaktif elementlerin ne kadar hızlı bozunduğunu bilmeyi gerektirmez.',
      'Bir kayanın içindeki bazı radyoaktif elementlerin ne kadar hızlı bozunduğunu bilmek, o kayanın nerede oluştuğunu gösterir.',
      'Bir kayanın yaşını kesin olarak ölçmek, içindeki bazı radyoaktif elementlerin ne kadar hızlı bozunduğunu bilmeyi gerektirir.',
      'Bazı radyoaktif elementlerin bir kayanın içinde ne kadar hızlı bozunduğu, o kayanın yaşı kesin olarak ölçülerek bulunur.',
      'Bir kayanın yaşını yaklaşık olarak tahmin etmek için içindeki bütün elementlerin bozunma hızını bilmek gerekir.',
    ], answer: 2,
    explain: "Cümlenin öznesi bir isim-fiil öbeği ('Measuring the age of a rock precisely': bir kayanın yaşını kesin olarak ölçmek), nesnesi de bir başka isim-fiil ('knowing how quickly …': ne kadar hızlı … bildiğini bilmek). Doğru çeviri ikisini de koruyor: kesin ölçüm, bazı radyoaktif elementlerin bozunma hızını bilmeyi gerektirir. 'Gerektirmez' anlamı olumsuza çeviriyor. Bozunma hızının ölçümle bulunduğunu söyleyen çeviri neden ile sonucu yer değiştiriyor. 'Nerede oluştuğunu gösterir', 'yaklaşık olarak' ve 'bütün elementler' cümlede yok." },

  // ---------- 40–42: çeviri, Türkçeden İngilizceye ----------
  { id: 'd04-c4', course: G, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['devrik yapı', 'bağlaç'],
    q: 'Yürüyüşçüler zirveye henüz ulaşmışlardı ki hava birden bozdu.',
    options: [
      'Hardly had the weather turned when the hikers reached the summit.',
      'The hikers had barely set off for the summit when the weather turned.',
      'The weather had already turned for the worse by the time the hikers reached the summit.',
      'As the weather suddenly turned, the hikers gave up on the summit.',
      'No sooner had the hikers reached the summit than the weather suddenly turned.',
    ], answer: 4,
    explain: "'… henüz ulaşmışlardı ki …' bir eylemin hemen ardından ötekinin geldiğini anlatır; İngilizcede devrik 'No sooner had … than …' ile kurulur: yürüyüşçüler zirveye ulaşır ulaşmaz hava birden bozdu. 'Hardly had the weather turned when the hikers reached the summit' aynı devrik kalıbı kullandığı için en güçlü çeldiricidir, ama olayların sırasını tersine çeviriyor: önce hava bozuluyor, sonra zirveye varılıyor. 'Had barely set off' yola yeni çıkmışken bozduğunu söylüyor; zirveye ulaşmayı kaldırıyor. 'Had already turned by the time' havanın zirveden önce bozulduğunu söylüyor. Zirveden vazgeçmek de Türkçe cümlede yok." },
  { id: 'd04-c5', course: S, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['isim cümleciği', 'edilgen'],
    q: 'Yeni ilacın yaşlı hastalar için güvenli olup olmadığı henüz büyük bir çalışmada sınanmadı.',
    options: [
      'The new drug has been tested in a large study and found to be safe for elderly patients.',
      'Whether the new drug is safe for elderly patients has not yet been tested in a large study.',
      'A large study is now being planned to test whether the new drug is safe for younger patients.',
      'Whether the new drug is safe for elderly patients was tested in a large study long ago.',
      'The new drug, which is known to be safe for elderly patients, will soon be tested in a large study.',
    ], answer: 1,
    explain: "'… olup olmadığı' bir isim cümleciğidir ve İngilizcede 'whether' ile kurulur; cümlenin öznesi bu cümleciktir. 'Henüz sınanmadı' da edilgen present perfect ve 'not yet' ile verilir: 'has not yet been tested'. İlacın sınanıp güvenli bulunduğunu söyleyen çeviri en güçlü çeldiricidir, ama Türkçedeki 'henüz sınanmadı' bilgisini tersine çeviriyor. 'Long ago' sınamayı geçmişte olmuş gösteriyor. 'Younger patients' hasta grubunu değiştiriyor. İlacı güvenli diye niteleyen sıfat cümleciği de Türkçede açık bırakılan soruyu kapatıyor." },
  { id: 'd04-c6', course: F, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['ortaç öbeği', 'kapsam'],
    q: 'Kutup bölgelerinde yaşayan hayvanların hepsi olmasa da çoğu, soğuğa büyük ölçüde kalın bir yağ tabakası sayesinde dayanır.',
    options: [
      'Most, though not all, animals living in polar regions withstand the cold largely thanks to a thick layer of fat.',
      'All animals living in polar regions, without exception, withstand the cold largely thanks to a thick layer of fat.',
      'Most animals living in polar regions withstand the cold solely thanks to a thick layer of fat.',
      'Most animals that once lived in polar regions withstood the cold largely thanks to a thick layer of fat.',
      'Most animals living in polar regions could withstand the cold even without a thick layer of fat.',
    ], answer: 0,
    explain: "Türkçe cümlede iki kapsam sınırı var: 'hepsi olmasa da çoğu' (most, though not all) ve 'büyük ölçüde' (largely). 'Kutup bölgelerinde yaşayan hayvanlar' da bir ortaç öbeğiyle kurulur: 'animals living in polar regions'. Doğru çeviri ikisini de koruyor. 'All animals' kapsamı bütün hayvanlara genişletiyor; 'solely' (yalnızca) yağ tabakasını tek neden yapıyor. 'Once lived … withstood' durumu geçmişe taşıyor; Türkçe cümle bugünü anlatıyor. 'Could withstand … even without' ise yağ tabakasının önemini tersine çeviriyor." },

  // ---------- 43–62: okuma parçaları ----------
  { id: 'd04-o1', course: F, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Tünellerdeki uzun ömür',
    text: "With their wrinkled pink skin and prominent front teeth, naked mole-rats are not the most attractive of mammals, yet few animals have interested biologists more in recent decades. These small rodents, found in the dry grasslands of East Africa, spend almost their entire lives in networks of underground tunnels. They live in colonies that may contain anywhere from a few dozen to a few hundred individuals, and in each colony only one female, often called the queen, gives birth. The remaining members dig tunnels, gather food and defend the colony, an arrangement more familiar from ants and bees than from mammals. What has attracted the most attention, however, is how long they live. A mouse of similar size rarely survives beyond a few years, but naked mole-rats kept in laboratories have lived for more than thirty. Some studies have even suggested that, unlike in most mammals, their risk of dying does not rise noticeably as they grow older. They also seem remarkably resistant to cancer: although a small number of tumours have now been reported, the disease appears to be far rarer in them than in most other rodents. In addition, their crowded, poorly ventilated burrows have equipped them to cope with very low levels of oxygen. Researchers hope that understanding these traits may eventually shed light on ageing and disease in humans, but they caution that what works for a burrowing rodent may not transfer easily to people.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, in a naked mole-rat colony, ----.',
        options: [
          'every adult female takes turns giving birth to young',
          'the queen is responsible for digging most of the tunnels',
          'reproduction is limited to a single female',
          'members leave the burrow regularly to gather food above ground',
          'the largest males defend the colony while females gather food',
        ], answer: 2,
        explain: "Parçaya göre her kolonide yalnız bir dişi, yani 'kraliçe', doğurur. Doğru seçenek bunu başka sözcüklerle veriyor: üreme tek bir dişiyle sınırlıdır. Bütün dişilerin sırayla doğurduğunu söyleyen seçenek parçanın tersidir. Tünel kazmak, yiyecek toplamak ve koloniyi korumak kraliçenin değil, öteki üyelerin işidir; kraliçeyi kazıcı yapan seçenek en güçlü çeldiricidir, çünkü parçadaki iki bilgiyi karıştırıyor. Yer üstünde yiyecek aramak ve görevlerin cinsiyete göre bölünmesi parçada geçmiyor." },
      { konu: ['ayrıntı'],
        q: 'It is stated in the passage that, compared with a mouse of similar size, a naked mole-rat ----.',
        options: [
          'can live many times longer in captivity',
          'is more likely to develop tumours as it grows older',
          'needs considerably more oxygen in order to survive',
          'grows much more slowly during its first year of life',
          'is far less often studied by laboratory scientists',
        ], answer: 0,
        explain: "Parçaya göre benzer boydaki bir fare birkaç yıldan fazla nadiren yaşar, laboratuvardaki çıplak köstebek fareleri ise otuz yılı aşkın yaşamıştır; bu, kat kat uzun bir ömür demektir. Tümör geliştirme olasılığının yaşla artması en güçlü çeldiricidir, çünkü parçada hem yaşlanma hem tümör geçer; ama parça kanserin onlarda çok daha seyrek olduğunu ve ölüm riskinin yaşla belirgin artmadığını söylüyor. Daha çok oksijen istemeleri de parçanın tersidir; çok düşük oksijene dayanabiliyorlar. İlk yıldaki büyüme hızı ve laboratuvarda az incelenmeleri parçada yok." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that the ability of naked mole-rats to cope with low oxygen ----.',
        options: [
          'is the main reason why they rarely develop cancer',
          'has been successfully reproduced in laboratory mice',
          'makes them unusually likely to leave their burrows',
          'fades as they age and their risk of death rises',
          'is probably linked to the conditions in which they live',
        ], answer: 4,
        explain: "Parça kalabalık ve havasız yuvalarının onları çok düşük oksijen düzeyiyle baş edebilir kıldığını söylüyor; buradan bu yeteneğin yaşadıkları koşullarla bağlantılı olduğu sonucu çıkar. Kansere seyrek yakalanmalarının asıl nedeni olduğunu söyleyen seçenek en güçlü çeldiricidir, çünkü iki özellik aynı parçada art arda sayılıyor; ama parça ikisi arasında neden-sonuç bağı kurmuyor. Yeteneğin farelerde yeniden üretilmesi ve yuvalarından sık çıkmaları parçada yok. Yaşla zayıflaması da ölüm riskinin yaşla belirgin artmadığını söyleyen çalışmalarla çelişir." },
      { konu: ['yazarın tutumu'],
        q: 'In the last sentence, it is suggested that applying these findings to humans ----.',
        options: [
          'will require only a few more years of research',
          'is unlikely to produce any useful results at all',
          'should be avoided because the animals may suffer',
          'is a hope that calls for some caution',
          'has already led to new treatments for some cancers',
        ], answer: 3,
        explain: "Son cümle araştırmacıların görüşünü aktarıyor: araştırmacılar bu özellikleri anlamanın insanda yaşlanma ve hastalığa ışık tutabileceğini umuyor, ama bir yer altı kemirgeninde işleyenin insana kolayca aktarılamayabileceği uyarısını da yapıyor. Tutum hem umutlu hem temkinlidir. Hiçbir yararlı sonuç çıkmayacağını söyleyen seçenek en güçlü çeldiricidir, çünkü uyarıya dayanıyor; ama umudu yok sayıyor ve parçadan daha kesin bir hüküm kuruyor. Birkaç yıllık araştırmanın yeteceği, hayvanların acı çekeceği ve yeni kanser tedavilerinin çoktan bulunduğu parçada yok." },
    ] },

  { id: 'd04-o2', course: G, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Bir kutunun değiştirdikleri',
    text: "For most of history, loading a cargo ship was slow, costly work. Sacks, barrels and crates were carried aboard one by one by teams of dockworkers, and a vessel could spend as long in port being loaded and unloaded as it did at sea. Theft and damage were common. In 1956, an American trucking businessman named Malcom McLean tried a different approach. He had a converted tanker carry several dozen large metal boxes from New Jersey to Texas; at each end, the boxes could be lifted on and off by crane and placed straight onto lorries without ever being opened. The idea was simple, but making it work on a large scale took years. Ports had to install enormous cranes, shipping lines had to build new vessels, and companies had to agree on standard box sizes so that a container loaded in one country could be handled anywhere else. Once these changes were in place, the cost of moving goods across oceans fell dramatically. Many economists now argue that the humble container did as much to shape the modern global economy as many better-known inventions, since it made it practical for a single product to be assembled from parts made on different continents. The change also had a price. Far fewer workers were needed to handle the same amount of cargo, and some long-established city ports, which lacked space for the new equipment, declined as trade moved to new terminals elsewhere.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, before containers were introduced, ----.',
        options: [
          'most cargo ships were too small to cross the open ocean',
          'ships often spent a long time in port being handled',
          'goods were rarely stolen or damaged while at the docks',
          'cranes did most of the heavy work of loading ships',
          'lorries carried most goods between different continents',
        ], answer: 1,
        explain: "Parçaya göre konteynerden önce yük tek tek gemiye taşınırdı ve bir gemi limanda yüklenip boşaltılırken denizde geçirdiği kadar zaman harcayabilirdi. Doğru seçenek bunu başka sözcüklerle veriyor: gemiler limanda uzun süre kalırdı. Malların seyrek çalındığını ya da zarar gördüğünü söyleyen seçenek parçanın tersidir; hırsızlık ve hasar yaygındı. Yükleme işini vinçlerin yaptığını söyleyen seçenek en güçlü çeldiricidir, çünkü vinçler parçada geçer; ama vinçler konteynerle birlikte geldi, önceden işi liman işçileri yapıyordu. Geminin küçüklüğü ve kıtalar arası kamyon taşımacılığı parçada yok." },
      { konu: ['ayrıntı'],
        q: "It is stated in the passage that McLean's idea took years to work on a large scale because ----.",
        options: [
          'dockworkers refused to lift the heavy metal boxes',
          'the first containers were often opened and robbed',
          'governments banned containers from many city ports',
          'it required new ships, cranes and standards',
          'tankers proved too slow to carry containers at sea',
        ], answer: 3,
        explain: "Parça fikrin büyük ölçekte işlemesinin yıllar aldığını söyleyip nedenlerini sayıyor: limanlar dev vinçler kurmalı, nakliye şirketleri yeni gemiler yapmalı, şirketler de standart kutu boyutlarında anlaşmalıydı. Doğru seçenek bu üçünü özetliyor. İlk konteynerlerin açılıp soyulduğunu söyleyen seçenek en güçlü çeldiricidir, çünkü hırsızlık parçada geçer; ama hırsızlık konteynerden önceki düzenin sorunudur ve kutular tersine hiç açılmadan taşınıyordu. İşçilerin kutuları kaldırmayı reddetmesi, hükümet yasağı ve tankerlerin yavaşlığı parçada yok." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that the use of standard container sizes ----.',
        options: [
          'allowed a box to move between countries without being repacked',
          'was decided by McLean before his first voyage in 1956',
          'made it harder for products to be assembled from parts made abroad',
          'forced many shipping lines to give up building new vessels',
          'was unpopular with economists who studied the global economy',
        ], answer: 0,
        explain: "Parçaya göre standart boyutlar, bir ülkede yüklenen konteynerin başka her yerde elleçlenebilmesi için gerekti; kutular da hiç açılmadan vinçten kamyona aktarılabiliyordu. Buradan standartların bir kutunun yeniden paketlenmeden ülkeden ülkeye geçmesini sağladığı sonucu çıkar. Ürünlerin yabancı parçalardan yapılmasını zorlaştırdığını söyleyen seçenek parçanın tersidir; konteyner bunu tersine pratik kıldı. Standartların McLean'in ilk yolculuğundan önce belirlenmesi en güçlü çeldiricidir, ama parça bu anlaşmanın fikrin yayılması için yıllarca süren değişikliklerden biri olduğunu söylüyor. Yeni gemi yapımının bırakılması ve iktisatçıların karşı çıkması da parçada yok." },
      { konu: ['ana fikir'],
        q: 'The passage is mainly concerned with ----.',
        options: [
          'the hardships of dockworkers in the early twentieth century',
          'the life and business career of an American trucking owner',
          'the reasons why some city ports have recently been rebuilt',
          'the way economists measure the cost of international trade',
          'how a simple shipping method reshaped trade, at a cost to some',
        ], answer: 4,
        explain: "Parça konteynerden önceki yavaş düzeni, McLean'in denemesini, fikrin yaygınlaşması için gereken değişiklikleri, taşıma maliyetinin düşmesini ve bunun liman işçileriyle eski kent limanlarına bedelini anlatıyor. Ana konu, basit bir taşıma yönteminin ticareti nasıl yeniden biçimlendirdiği ve bazılarına neye mal olduğudur. McLean'in yaşamını ve iş hayatını anlatan seçenek en güçlü çeldiricidir, ama parça McLean'i yalnız bir dönüm noktası olarak anıyor, onun hayat öyküsünü anlatmıyor. Liman işçilerinin zorlukları ve eski limanlar yalnız birer ayrıntıdır; iktisatçıların ölçüm yöntemleri parçada yok." },
    ] },

  { id: 'd04-o3', course: F, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', title: 'Toprağın altındaki ağ',
    text: "Beneath almost any forest floor lies a dense web of fungal threads, far too fine to be seen individually. Many of these fungi live in close partnership with plants. Their threads wrap around or even enter the plants' roots and spread through the surrounding soil, collecting water and minerals such as phosphorus, which they pass to the plant. In return, the plant supplies the fungus with sugars made by photosynthesis. The great majority of land plants are thought to form partnerships of this kind. Because a single fungus can be linked to the roots of several trees at once, researchers have long wondered whether such connections allow trees to exchange resources. In the late 1990s, a study using chemical tracers reported that carbon appeared to pass between trees of different species through shared fungi. The finding caught the public imagination, and the idea of a 'wood wide web' soon spread through books and documentaries, sometimes with claims that old trees deliberately feed their young or warn their neighbours of danger. In 2023, however, a group of researchers reviewed the field studies on which such claims rested. They did not deny that fungal networks exist, but they concluded that the evidence for trees sharing meaningful amounts of food or information through them was much thinner than popular accounts implied. Positive results, they added, had tended to be cited far more often than studies that found no effect. The debate has encouraged more careful experiments, and it is a reminder of how an appealing story can run ahead of the data.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, in the partnership between fungi and plants, the fungus ----.',
        options: [
          'supplies the plant with sugars produced in its threads',
          'receives minerals such as phosphorus from the plant',
          'harms the roots that it wraps around or enters',
          'can connect to only one tree during its lifetime',
          'helps the plant obtain water and certain minerals',
        ], answer: 4,
        explain: "Parçaya göre mantar iplikleri toprağa yayılıp su ve fosfor gibi mineralleri toplar ve bitkiye verir; bitki de karşılığında mantara şeker sağlar. Doğru seçenek mantarın bitkiye su ve bazı mineralleri edinmekte yardım ettiğini söylüyor. Mantarın bitkiye şeker verdiğini ve bitkiden mineral aldığını söyleyen seçenekler en güçlü çeldiricilerdir, çünkü parçadaki alışverişin iki yönünü ters çeviriyorlar. Köklere zarar vermesi ortaklık ilişkisiyle çelişir. Tek bir ağaca bağlanabilmesi de parçanın tersidir; bir mantar birkaç ağacın köküne birden bağlanabilir." },
      { konu: ['ayrıntı'],
        q: 'It is stated in the passage that the 2023 review ----.',
        options: [
          'found that fungal networks do not exist in most forests',
          'showed that old trees warn their neighbours of danger',
          'doubted the strength of the evidence for sharing',
          'repeated the chemical tracer study from the late 1990s',
          'concluded that trees exchange more food than once believed',
        ], answer: 2,
        explain: "Parçaya göre 2023'teki inceleme mantar ağlarının varlığını reddetmedi, ama ağaçların bu ağlarla anlamlı miktarda besin ya da bilgi paylaştığına dair kanıtın popüler anlatıların ima ettiğinden çok daha zayıf olduğu sonucuna vardı. Doğru seçenek incelemenin bu kanıtın gücünü sorguladığını söylüyor. Ağların çoğu ormanda bulunmadığını söyleyen seçenek en güçlü çeldiricidir, çünkü incelemenin kuşkucu tutumuna uyuyor; ama parça ağların varlığının reddedilmediğini açıkça söylüyor. Ağaçların komşusunu uyarması popüler bir iddiadır, incelemenin bulgusu değil. Eski izleyici çalışmasının yinelenmesi ve paylaşımın sanılandan fazla çıkması parçada yok." },
      { konu: ['çıkarım'],
        q: "It can be inferred from the passage that the popular idea of a 'wood wide web' ----.",
        options: [
          'was first proposed in a widely read book in the 2020s',
          'went further than the scientific evidence could support',
          'has been abandoned by most scientists who study fungi',
          'is based mainly on observations of tropical rainforests',
          'arose because fungal threads are easy to see in soil',
        ], answer: 1,
        explain: "Parça 'wood wide web' fikrinin kitaplarda ve belgesellerde yaşlı ağaçların yavrularını beslediği gibi iddialarla yayıldığını, 2023 incelemesinin ise kanıtın bu anlatılardan zayıf olduğunu bulduğunu söylüyor; son cümle de çekici bir öykünün verinin önüne geçebileceğini hatırlatıyor. Buradan popüler fikrin bilimsel kanıtın destekleyebileceğinden ileri gittiği sonucu çıkar. Çoğu bilim insanının fikri bıraktığını söyleyen seçenek en güçlü çeldiricidir, ama parça yalnız tartışmanın daha dikkatli deneylere yol açtığını söylüyor; fikrin bırakıldığını söylemiyor. 2020'lerde bir kitapta ilk önerilmesi parçayla çelişir; fikir 1990'ların sonundaki çalışmadan sonra yayıldı. Tropik ormanlar ve ipliklerin kolay görülmesi de parçaya ters düşer." },
      { konu: ['yazarın amacı'],
        q: 'The author mentions that positive results had been cited more often than studies finding no effect in order to ----.',
        options: [
          'suggest why the evidence may have looked stronger',
          'show that the original tracer study had been badly designed',
          'suggest that fungi are more useful to trees than once thought',
          'explain why trees of different species rarely share resources',
          'argue that documentaries about forests should not be made',
        ], answer: 0,
        explain: "Olumlu sonuçların etki bulamayan çalışmalardan çok daha sık anılması, kanıtın olduğundan güçlü görünmesine yol açabilir. Yazar bunu, incelemecilerin kanıtı neden popüler anlatılardan zayıf bulduğunu açıklayan bir gerekçe olarak anıyor. İlk izleyici çalışmasının kötü tasarlandığını göstermek en güçlü çeldiricidir, çünkü bir eleştiri içerir; ama atıf sorunu bir çalışmanın tasarımıyla değil, sonuçların nasıl anıldığıyla ilgilidir. Mantarların sanılandan yararlı olduğu, farklı türlerin seyrek kaynak paylaştığı ve belgesel yapılmaması gerektiği bu cümlenin amacı değildir." },
    ] },

  { id: 'd04-o4', course: S, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Uzağı görmek',
    text: "Short-sightedness, or myopia, occurs when the eyeball grows slightly too long, so that light from distant objects comes into focus in front of the retina instead of on it. Glasses correct the blurred vision this causes, but severe myopia raises the risk of serious eye problems later in life. Over recent decades, the condition has become far more common across much of the globe, especially in some East Asian cities, where a large majority of young people now leave school short-sighted. Such a rapid change cannot be explained by genes alone, since the genetic make-up of a population hardly alters within two or three generations. For a long time, the main suspect was close work such as reading, and long hours of study probably do contribute. Yet a growing body of research points to another factor: time spent outdoors. Children who spend more time outside appear less likely to become short-sighted, even if they read a lot. One explanation is that bright daylight, many times more intense than ordinary indoor lighting, prompts the retina to release a chemical messenger called dopamine, which may in turn slow the growth of the eyeball. Encouragingly, in trials in which schools added outdoor activities to the school day, fewer children developed myopia than in comparison schools, although the effect was moderate rather than dramatic. Researchers therefore increasingly regard daily time outdoors as a simple, low-cost measure that may help to protect children's eyesight.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, myopia develops when ----.',
        options: [
          'the eye is slightly too long to see far objects clearly',
          'the retina is damaged by spending too long in bright light',
          'the eyeball stops growing too early in childhood',
          'light from nearby objects is focused behind the retina',
          'glasses are worn for too many hours each day',
        ], answer: 0,
        explain: "Parçaya göre miyopi göz küresi biraz fazla uzadığında olur; uzaktaki cisimlerin ışığı retinanın üstünde değil önünde odaklanır. Doğru seçenek bunu başka sözcüklerle veriyor: göz, uzağı net görmek için biraz fazla uzundur. Yakındaki cisimlerin ışığının retinanın arkasında odaklandığını söyleyen seçenek en güçlü çeldiricidir, çünkü parçadaki odaklanma anlatımına benziyor; ama hem 'uzak' sözünü 'yakın' hem 'önünde' sözünü 'arkasında' yapıyor. Göz küresinin erken büyümeyi durdurması parçanın tersidir. Parlak ışığın retinaya zarar vermesi ve gözlüğün uzun takılması parçada miyopinin nedeni diye geçmiyor." },
      { konu: ['ayrıntı'],
        q: 'The author argues that genes alone cannot account for the rise in myopia because ----.',
        options: [
          'myopia is equally common in every part of the world',
          'children with short-sighted parents rarely need to wear glasses',
          'reading has become less common among young people',
          "a population's genes change little in a few generations",
          'East Asian cities have the brightest indoor lighting',
        ], answer: 3,
        explain: "Parçaya göre bu kadar hızlı bir değişim yalnız genlerle açıklanamaz, çünkü bir topluluğun genetik yapısı iki üç kuşakta neredeyse hiç değişmez. Doğru seçenek bu gerekçeyi başka sözcüklerle veriyor. Miyopinin dünyanın her yerinde eşit sıklıkta olduğunu söyleyen seçenek parçanın tersidir; artış bazı Doğu Asya kentlerinde özellikle belirgin. Okumanın gençler arasında azaldığı en güçlü çeldiricidir, çünkü okuma parçada uzun süre baş şüpheli olarak geçer; ama parça okumanın azaldığını söylemiyor ve bu, genlerle ilgili gerekçe değildir. Miyop ebeveynler ve iç mekân aydınlatması parçada bu bağlamda geçmiyor." },
      { konu: ['ayrıntı'],
        q: 'It is pointed out in the passage that bright daylight ----.',
        options: [
          'is only slightly brighter than most indoor lighting',
          'makes children less willing to spend time reading indoors',
          "may trigger a chemical signal that restrains the eye's growth",
          'damages the retina when children stay outside for too long',
          'is the main reason why myopia is common in East Asian cities',
        ], answer: 2,
        explain: "Parçaya göre parlak gün ışığı retinanın dopamin adlı bir kimyasal ileticiyi salmasını sağlar; bu da göz küresinin büyümesini yavaşlatabilir. Doğru seçenek bunu temkinli biçimde, aynı 'may' ile veriyor: gün ışığı gözün büyümesini frenleyen kimyasal bir sinyali tetikleyebilir. Gün ışığının iç mekân ışığından yalnız biraz parlak olduğunu söyleyen seçenek parçanın tersidir; gün ışığı kat kat yoğundur. Çocukların okumaya isteksizleşmesi en güçlü çeldiricidir, ama parça açık havanın koruyucu etkisinin çok okuyan çocuklarda da görüldüğünü söylüyor; okumaya isteksizlikten söz etmiyor. Retinaya zarar vermesi ve Doğu Asya'daki miyopinin asıl nedeni olması parçada yok." },
      { konu: ['başlık'],
        q: 'Which of the following could be the best title for the passage?',
        options: [
          'Why Reading Damages the Eyes of Children',
          'Daylight and the Rise of Short-Sightedness',
          'How Glasses Correct Blurred Vision in Adults',
          'The Genetic Roots of Common Eye Disease',
          "The Secrets of East Asia's Most Successful Schools",
        ], answer: 1,
        explain: "Parça miyopinin artışını, bunun genlerle açıklanamayacağını ve açık havada, gün ışığında geçen sürenin miyopiye karşı koruyucu olabileceğini anlatıyor. En uygun başlık gün ışığı ile miyopinin artışını birlikte ele alanıdır. Okumanın çocukların gözüne zarar verdiğini söyleyen başlık en güçlü çeldiricidir, çünkü yakın çalışma parçada geçer; ama parça okumanın yalnız katkı yapabileceğini söyleyip odağı açık havaya kaydırıyor. Gözlüklerin bulanık görmeyi düzeltmesi tek bir ayrıntıdır; genetik kökenler parçanın reddettiği açıklamadır; başarılı okullar parçanın konusu değildir." },
    ] },

  { id: 'd04-o5', course: SO, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', title: 'Klavyenin üst sırası',
    text: "The arrangement of letters on most keyboards in the English-speaking world, known as QWERTY after the first six letters of its top row, dates back to typewriters designed in the 1870s. A popular story holds that it was meant to slow typists down. A more common explanation describes the aim more modestly, as an attempt to stop the metal arms of early machines from jamming by separating letters that often appear together, although some historians dispute even this account. Whatever its origins, the layout spread with the success of the typewriter, and typists, schools and manufacturers all came to depend on it. In the 1930s, an American educational researcher, August Dvorak, patented an alternative that placed the most frequently used letters on the middle row, and he reported that typists trained on it worked faster. Yet his layout never caught on. In an influential article published in 1985, the economist Paul David used QWERTY to illustrate what he called path dependence: once enough people have invested in learning and supporting a standard, switching becomes so costly that an inferior option can survive indefinitely. Not everyone accepted the example. Two other economists later re-examined the evidence and argued that the studies showing Dvorak's superiority were few and poorly controlled, some having been carried out by Dvorak himself. If the advantage was small or uncertain, they reasoned, the survival of QWERTY says little about markets failing to choose better products. The keyboard thus matters today less for typing than for what it may reveal about how technologies become fixed.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the more common explanation mentioned in the passage, the QWERTY layout was intended to ----.',
        options: [
          'help schools train new typists more quickly and cheaply',
          'make typing slower so that typists would rest more often',
          'place the most common letters in the middle row',
          'keep the moving parts of typewriters from sticking',
          'increase the sales of one particular typewriter',
        ], answer: 3,
        explain: "Parçadaki daha yaygın açıklamaya göre QWERTY'nin amacı daha ölçülüdür: sık yan yana gelen harfleri ayırarak ilk makinelerin metal kollarının sıkışmasını önlemek (parça bazı tarihçilerin buna da karşı çıktığını ekliyor). Doğru seçenek bunu başka sözcüklerle veriyor: daktilonun hareketli parçalarının takılmasını önlemek. Yazmayı yavaşlatmak, parçadaki popüler öyküdür; daha yaygın açıklama değildir ve en güçlü çeldirici budur. Sık harfleri orta sıraya koymak Dvorak'ın düzenine aittir. Okulların daha hızlı eğitim vermesi ve tek bir daktilonun satışını artırmak parçada amaç diye geçmiyor." },
      { konu: ['ayrıntı'],
        q: 'It is stated in the passage that Dvorak ----.',
        options: [
          'invented the first typewriter with a QWERTY keyboard',
          'was an economist who studied the history of markets',
          'proved that his layout was slower than QWERTY',
          'persuaded most schools to adopt his new layout',
          'claimed that his layout allowed faster typing',
        ], answer: 4,
        explain: "Parçaya göre Dvorak, kendi düzeniyle eğitilen daktilocuların daha hızlı çalıştığını bildirdi. Doğru seçenek bunu bir iddia olarak veriyor; sonraki iktisatçılar da bu iddiayı sorguladı. Dvorak'ı piyasa tarihini inceleyen bir iktisatçı yapan seçenek en güçlü çeldiricidir, çünkü parçada iktisatçılar geçer; ama Dvorak bir eğitim araştırmacısıydı, iktisatçı olan Paul David'di. İlk QWERTY daktiloyu icat etmesi, düzeninin daha yavaş olduğunu kanıtlaması ve okulların çoğunu ikna etmesi parçayla çelişir; düzeni hiç tutmadı." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that, according to Paul David, QWERTY ----.',
        options: [
          'was adopted because it was clearly the best layout',
          'survived largely because changing would cost too much',
          "would soon be replaced by Dvorak's faster alternative",
          'had been designed mainly in order to slow typists down',
          'was popular only among economists and typing schools',
        ], answer: 1,
        explain: "Paul David'e göre bir standarda yeterince insan emek verince değiştirmek o kadar pahalı olur ki daha kötü bir seçenek bile süresiz yaşayabilir; QWERTY bunun örneğidir. Buradan, ona göre QWERTY'nin büyük ölçüde değiştirmenin maliyeti yüzünden ayakta kaldığı sonucu çıkar. En iyi düzen olduğu için benimsendiğini söyleyen seçenek David'in görüşünün tam tersidir; o QWERTY'yi daha kötü bir seçeneğin yaşaması diye görüyordu. Yazmayı yavaşlatmak için tasarlanması popüler öyküdür, David'in savı değildir. Dvorak düzeninin yakında yerini alacağı ve yalnız iktisatçılarla okullarda tutulduğu da parçaya ters düşer." },
      { konu: ['yazarın amacı'],
        q: 'The primary purpose of the passage is to ----.',
        options: [
          'prove that the Dvorak layout is clearly superior to QWERTY',
          'explain how to type faster on a modern keyboard',
          'show how a keyboard became a test case for economists',
          'describe the mechanical design of the earliest typewriters',
          'criticise historians who repeat the popular story',
        ], answer: 2,
        explain: "Parça QWERTY'nin kökenini kısaca anlattıktan sonra asıl olarak iktisatçıların tartışmasına geçiyor: Paul David onu yola bağımlılığın örneği yaptı, başka iki iktisatçı bu örneği sorguladı; son cümle de klavyenin bugün teknolojilerin nasıl yerleştiğine dair söyledikleriyle önemli olduğunu söylüyor. Amaç, bir klavyenin iktisatçılar için nasıl bir sınama örneğine dönüştüğünü göstermektir. Dvorak düzeninin üstün olduğunu kanıtlamak en güçlü çeldiricidir, ama parça bu üstünlüğün kanıtlarının zayıf olabileceğini de aktarıyor ve taraf tutmuyor. Hızlı yazma tavsiyesi, daktilonun mekanik tasarımı ve tarihçileri eleştirmek parçanın amacı değildir; parça tarihçileri eleştirmiyor, yalnız bazılarının sıkışma açıklamasına karşı çıktığını aktarıyor." },
    ] },

  // ---------- 63–67: diyalog tamamlama ----------
  { id: 'd04-d1', course: G, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: "Selin: I've just finished the novel you lent me. Thanks so much.\nMurat: So, what did you make of it?\nSelin: ----\nMurat: I know what you mean. I nearly gave up on it myself before it finally got going.",
    options: [
      'I loved every page of it, right from the very first chapter.',
      'It was brilliant in the end, but the first half really dragged.',
      "I'm afraid I've left it on the train, but I'll buy you a new copy.",
      "I haven't had a chance to start it yet, to be honest.",
      "Have you read any of the author's other books?",
    ], answer: 1,
    explain: "Murat'ın cevabı ('Ne demek istediğini anlıyorum. Ben de sonunda açılmadan önce neredeyse bırakıyordum.') Selin'in kitabın başının ağır ilerlediğini söylemiş olmasını gerektirir. Kitabın sonunda harika olduğunu ama ilk yarısının çok sürüklendiğini söyleyen cümle buna uyar; 'drag' (uzayıp gitmek, sıkıcılaşmak) Murat'ın 'got going' sözüyle eşleşir. İlk bölümden itibaren her sayfasını sevdiğini söyleyen cümle en güçlü çeldiricidir, çünkü kitap hakkında bir görüş bildirir; ama Murat'ın 'ben de neredeyse bırakıyordum' cevabıyla çelişir. Kitabı trende unutmak ve henüz başlamamış olmak 'az önce bitirdim' sözüyle bağdaşmaz; yazarın öteki kitaplarını soran cümle de Murat'ın cevabını karşılamaz." },
  { id: 'd04-d2', course: S, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    q: "Coach: You've been off the pace all week. Is something bothering you?\nEce: ----\nCoach: Then you're almost certainly overreaching. Ease off for a couple of days and let your body catch up.",
    options: [
      "I've been nursing a heavy cold all week, and I can barely breathe through my nose.",
      "Not really. If anything, I'm itching to get Saturday's race under way.",
      "I've mislaid my racing shoes, so I've had to make do with an old pair.",
      "Far from it. I honestly can't remember ever feeling sharper than this.",
      "I've been squeezing in two sessions a day, yet I feel drained all the time.",
    ], answer: 4,
    explain: "Antrenörün cevabı ('O zaman neredeyse kesin kendini aşırı zorluyorsun. Birkaç gün yükü azalt da vücudun yetişsin.') Ece'nin çok yüklendiğini ve yorgun düştüğünü söylemiş olmasını gerektirir. Günde iki antrenmanı sığdırdığını ama sürekli bitkin olduğunu söyleyen cümle buna uyar; 'overreaching' (aşırı yüklenme) fazla antrenmanın sonucudur. Ağır bir soğuk algınlığı geçirdiğini söyleyen cümle en güçlü çeldiricidir, çünkü dinlenmeyi gerektiren bir sorundur ve haftalık düşüşü açıklayabilir; ama 'overreaching' bir hastalığa değil, fazla çalışmaya verilen cevaptır. Yarış için sabırsızlanmak, ayakkabıyı kaybetmek ve hiç bu kadar formda hissetmemek de aşırı yüklenmeyi anlatmaz; 'hiç bu kadar formda hissetmedim' sözü antrenörün gözlemine tümüyle ters düşer." },
  { id: 'd04-d3', course: SO, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'Interviewer: Your new book is about a small fishing village. What drew you to it?\nAuthor: ----\nInterviewer: That must have made the research very personal, then. Did you interview members of your own family?',
    options: [
      'My grandparents grew up there, and I spent every summer with them.',
      'I had never heard of the place until my publisher suggested it.',
      'I meant to write about a city, but the research cost too much.',
      'Mainly the fish market, which is the largest on that coast.',
      'How did you hear about the book before it was published?',
    ], answer: 0,
    explain: "Görüşmecinin sonraki sözü ('O zaman araştırma çok kişisel olmuş olmalı. Kendi ailenizden kişilerle de görüştünüz mü?') yazarın köyle ailesi üzerinden bir bağı olduğunu söylemesini gerektirir. Büyükanne ve büyükbabasının orada büyüdüğünü ve her yazı onlarla geçirdiğini söyleyen cümle buna uyar. Balık pazarını söyleyen cümle en güçlü çeldiricidir, çünkü 'Sizi oraya ne çekti?' sorusuna doğrudan bir cevap verir; ama araştırmayı kişisel kılan ve aile üyeleriyle görüşmeyi akla getiren bir bağ kurmaz. Yayıncının önerisiyle köyü ilk kez duymak kişisel bağla çelişir; kent kitabından vazgeçmek ve kitabı nereden duyduğunu sormak da akışa uymaz." },
  { id: 'd04-d4', course: F, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: "Student: The results from yesterday's experiment are completely different from what we predicted.\nSupervisor: ----\nStudent: Good idea. If the thermometer was faulty, that would explain everything.",
    options: [
      "Then our theory must be wrong, so let's write that up today.",
      "That's wonderful news. We should publish the results at once.",
      "Let's make sure all the equipment was working first.",
      'Why not repeat the experiment with a much larger sample size?',
      'Did you note the time of each measurement?',
    ], answer: 2,
    explain: "Öğrencinin cevabı ('İyi fikir. Termometre arızalıysa her şeyi açıklar.') danışmanın aletlerin denetlenmesini önermiş olmasını gerektirir. Önce bütün donanımın düzgün çalışıp çalışmadığına bakmayı öneren cümle buna uyar; termometre de donanımın bir parçasıdır. Deneyi çok daha büyük bir örneklemle yinelemeyi öneren cümle en güçlü çeldiricidir, çünkü o da 'iyi fikir' diye karşılanabilecek bir öneridir; ama örneklem büyüklüğü termometre arızasıyla bağ kurmaz. Kuramın yanlış olduğuna hemen karar vermek ve sonuçları sevinçle yayımlamak termometreyi akla getirmez. Ölçüm saatlerini soran cümle bir öneri değil sorudur; 'İyi fikir' cevabına uymaz." },
  { id: 'd04-d5', course: G, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'C1', konu: ['akış'],
    q: "Receptionist: Good evening. How can I help?\nGuest: I've booked a double room for two nights, but my meeting has been extended, so I was hoping to stay on until Friday.\nReceptionist: ----\nGuest: That's a pity. Would you be able to recommend somewhere nearby with vacancies, then?",
    options: [
      "Certainly. I've extended your reservation, and the rate stays the same.",
      'Of course. Shall I arrange a late checkout for you on Friday as well?',
      'Breakfast is included, and it is served in the conservatory until ten.',
      "I'm afraid we're fully committed from Thursday because of a conference.",
      'I will need to see the card you booked with before I can confirm that.',
    ], answer: 3,
    explain: "Konuğun cevabı ('Yazık. O zaman yakınlarda boş odası olan bir yer önerebilir misiniz?') resepsiyonistin isteği karşılayamadığını söylemiş olmasını gerektirir. Bir kongre yüzünden perşembeden sonra otelin tümüyle dolu olduğunu söyleyen cümle buna uyar; 'fully committed' (bütün odalar ayrılmış) bunu anlatır. Konaklamanın uzatıldığını ve fiyatın değişmediğini söyleyen cümle en güçlü çeldiricidir, çünkü konuğun isteğine doğrudan cevap verir; ama olumlu bir cevaptır ve 'Yazık' ile başka bir otel sorulmasıyla çelişir. Cuma günü geç çıkış önerisi de olumludur. Kahvaltı bilgisi ve kartın istenmesi 'Yazık' cevabına yol açmaz; kart isteği henüz bir ret değildir." },

  // ---------- 68–71: anlamca en yakın cümle ----------
  { id: 'd04-y1', course: G, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: 'The more time passes after an event, the less accurately most people remember its details.',
    options: [
      'Most people remember the details of an event better as time passes.',
      'People who remember an event accurately rarely forget its details later.',
      "People's memory of an event's details tends to grow less precise over time.",
      'Only a few people can remember the details of events that happened long ago.',
      'The details of an event are remembered more accurately than the event itself.',
    ], answer: 2,
    explain: "'The more …, the less …' (ne kadar çok …, o kadar az …) iki şeyin birlikte değiştiğini anlatır: bir olayın üzerinden zaman geçtikçe çoğu insan ayrıntıları daha az doğru hatırlar. Aynı anlam 'tends to grow less precise over time' (zamanla daha az kesinleşme eğiliminde) ile verilir. Zaman geçtikçe ayrıntıların daha iyi hatırlandığını söyleyen cümle ilişkiyi tersine çeviriyor. Yalnız birkaç kişinin eski olayları hatırlayabildiğini söyleyen cümle en güçlü çeldiricidir, çünkü uzun zaman önceki olaylardan söz ediyor; ama verilen cümle kişilerin sayısını değil, hatırlamanın zamanla nasıl değiştiğini anlatıyor. Doğru hatırlayanların sonra unutmaması ve ayrıntının olaydan iyi hatırlanması da cümlede yok." },
  { id: 'd04-y2', course: S, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['kip (modal)', 'unless'],
    q: 'Patients need not stop taking the medicine before the test unless their doctor tells them to.',
    options: [
      'Patients may keep taking the medicine before the test unless their doctor advises otherwise.',
      'Patients must stop taking the medicine before the test, whatever their doctor says.',
      'Patients should ask their doctor before they start taking the medicine for the test.',
      "Patients are not allowed to take the medicine before the test without their doctor's permission.",
      'Unless patients stop taking the medicine, their doctor will not be able to carry out the test.',
    ], answer: 0,
    explain: "'Need not stop' (bırakmaları gerekmez) bir zorunluluğun olmadığını söyler; 'unless their doctor tells them to' da tek istisnayı verir: hekim söylerse bırakırlar. Demek ki hastalar, hekim aksini söylemedikçe ilacı almayı sürdürebilir; 'may keep taking … unless … advises otherwise' bunu verir. Hekimin iznini zorunlu kılan cümle en güçlü çeldiricidir, çünkü hekim ve ilaç ilişkisini koruyor; ama ilacı almayı yasak sayıp izne bağlıyor, oysa verilen cümlede varsayılan durum ilacı almayı sürdürmektir. 'Must stop' zorunluluğu tersine çeviriyor. İlaca başlamadan hekime sormak ve bırakmazlarsa testin yapılamaması cümlede yok." },
  { id: 'd04-y3', course: F, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edilgen kanaat'],
    q: 'The comet is thought to have last passed close to the Sun several thousand years ago.',
    options: [
      'The comet will pass close to the Sun again in several thousand years.',
      'Scientists have proved that the comet has never passed close to the Sun.',
      'The comet passed close to the Sun only a few years ago, according to scientists.',
      'Scientists believe the comet last came near the Sun thousands of years ago.',
      'Thousands of years ago, people believed that the comet had passed close to the Sun.',
    ], answer: 3,
    explain: "'Is thought to have last passed' bir kanaat edilgenidir ve geçmişe bakar: kuyrukluyıldızın Güneş'e son yakın geçişinin birkaç bin yıl önce olduğu düşünülüyor. 'Scientists believe the comet last came near the Sun thousands of years ago' aynı kanaati ve aynı zamanı veriyor. Binlerce yıl önce insanların buna inandığını söyleyen cümle en güçlü çeldiricidir, çünkü sözcükleri benzer; ama inancın zamanını bugünden binlerce yıl öncesine taşıyor. Bir sonraki geçiş geleceğe bakıyor; 'proved' kanaati kanıta çevirip anlamı olumsuz yapıyor; 'a few years ago' süreyi değiştiriyor." },
  { id: 'd04-y4', course: SO, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['devrik yapı'],
    q: 'Not until the letters were published decades later did the public learn how unhappy the poet had been.',
    options: [
      'The public learned how unhappy the poet was before the letters were published.',
      'The poet published his letters decades later to show the public how unhappy he had been.',
      'The letters, published decades later, suggested that the poet had in fact been quite happy.',
      "The public would have learned of the poet's unhappiness sooner if the letters had been lost.",
      "The public discovered the poet's unhappiness only when the letters appeared decades later.",
    ], answer: 4,
    explain: "'Not until … did the public learn' devrik bir yapıdır ve 'ancak … olunca öğrendi' demektir: halk şairin ne kadar mutsuz olduğunu ancak mektuplar on yıllar sonra yayımlanınca öğrendi. 'Only when the letters appeared decades later' aynı anlamı veriyor. Mektupları şairin kendisinin yayımladığını söyleyen cümle en güçlü çeldiricidir, çünkü mektup, on yıllar ve mutsuzluk bilgilerini koruyor; ama verilen cümlede mektupları kimin yayımladığı yok ve cümle bir amaç eklemiyor. Halkın mektuplardan önce öğrenmesi zamanı tersine çeviriyor; mektupların şairin mutlu olduğunu göstermesi anlamı tersine çeviriyor; mektuplar kaybolsaydı daha erken öğrenilmesi de mantığa aykırı." },

  // ---------- 72–75: paragraf tamamlama ----------
  { id: 'd04-p1', course: F, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: "People on Earth always see the same side of the Moon, which has led some to assume that the Moon does not spin at all. ----. Over billions of years, the Earth's gravity slowed the Moon's rotation until the two motions matched exactly, a state known as tidal locking. Many moons in the solar system, including the largest moons of Jupiter, are locked to their planets in the same way.",
    options: [
      'The far side of the Moon was first photographed by a spacecraft in the twentieth century',
      'In fact, it turns once on its axis in exactly the time it takes to orbit the Earth',
      'The Moon is also slowly moving away from the Earth by a few centimetres each year',
      "For this reason, astronomers have concluded that the Moon's rotation has stopped",
      'The Moon reflects the light of the Sun, but it produces no light of its own',
    ], answer: 1,
    explain: "Boşluktan önce yaygın bir yanılgı (Ay hiç dönmüyor), sonra 'the two motions' (iki hareket) diye iki hareketin eşleştiği anlatılıyor. Boşluğa yanılgıyı düzelten ve bu iki hareketi, yani Ay'ın kendi ekseni çevresindeki dönüşünü ve Dünya çevresindeki turunu tanıtan cümle gelir. Ay'ın dönüşünün durduğu sonucuna varıldığını söyleyen cümle en güçlü çeldiricidir, çünkü önceki cümledeki yanılgıyı sürdürür; ama sonraki cümlede dönüşün yalnız yavaşladığı ve turla eşleştiği söyleniyor. Uzak yüzün ilk fotoğrafı, Ay'ın Dünya'dan uzaklaşması ve kendi ışığının olmaması doğru bilgilerdir, ama 'the two motions' göndermesini karşılamaz." },
  { id: 'd04-p2', course: G, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    q: 'The idea of moving clocks forward in summer is often traced back to Benjamin Franklin, who in 1784 wrote a letter suggesting that Parisians could save candles by getting up earlier. ----. It was only during the First World War that governments adopted the idea in earnest, when Germany introduced summer time in 1916 to save fuel, and several other countries soon followed. Today, many countries still change their clocks twice a year, although the practice remains controversial.',
    options: [
      'Candles were expensive at the time, and most families used them sparingly',
      'Parisians welcomed the letter, and many began to rise at dawn the next summer',
      'For this reason, France became the first country to adopt summer time',
      'His letter, however, was a joke, and it did not suggest changing the clocks',
      'Some studies suggest that changing the clocks may disturb sleep for several days',
    ], answer: 3,
    explain: "Boşluktan önce yaz saati fikrinin çoğu zaman Franklin'in 1784'teki mektubuna dayandırıldığı, sonra hükümetlerin fikri ancak Birinci Dünya Savaşı'nda 'ciddi biçimde' benimsediği söyleniyor. Boşluğa Franklin'e yapılan bu atfı sınırlayan cümle gelir: mektup bir şakaydı ve saatleri değiştirmeyi önermiyordu; 'in earnest' de bu şakayla karşıtlık kuruyor. Saatlerin değişmesinin uykuyu bozabileceğini söyleyen cümle en güçlü çeldiricidir, çünkü paragrafın sonundaki tartışmaya uyuyor; ama boşluğun yerinde Franklin'den Birinci Dünya Savaşı'na geçişi sağlamaz. İlk ülkenin Fransa olduğu Almanya bilgisiyle çelişir; Parislilerin erken kalkmaya başlaması da 'ciddi biçimde ancak savaşta' sözüyle çelişir. Mumların pahalılığı akışı ayrıntıya kaydırır ve 'in earnest' sözünün karşıtlık kuracağı bir bilgi vermez." },
  { id: 'd04-p3', course: G, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış', 'gönderim'],
    q: "The word 'robot' entered the English language through a play rather than a laboratory. ----. In it, artificial workers built in a factory eventually rise up against the humans who made them. The author, Karel Čapek, later explained that the word itself had been suggested by his brother Josef. It comes from a Czech word for forced labour, a fitting origin for machines created to do work that people did not want to do.",
    options: [
      'Today, robots assemble cars and electronics in factories all over the world',
      'Many scientists believe that machines will one day be able to think like humans',
      'Some early writers imagined mechanical servants long before the twentieth century',
      'Josef Čapek was a painter as well as a writer, and he illustrated several books',
      'The play, R.U.R., was first staged in Prague in 1921 and was soon performed abroad',
    ], answer: 4,
    explain: "Sonraki cümle 'In it' (onda, içinde) diye tekil bir esere gönderme yapıyor ve o eserin konusunu anlatıyor. Boşluğa ilk cümlede anılan oyunu adıyla tanıtan cümle gelir: R.U.R. 1921'de Prag'da sahnelendi ve kısa sürede yurt dışında oynandı. Josef Čapek'in ressam olduğunu söyleyen cümle en güçlü çeldiricidir, çünkü paragrafta Josef geçiyor; ama Josef daha tanıtılmadan adıyla anılıyor ve 'In it' göndermesini karşılamıyor. Erken yazarların mekanik hizmetkârlar düşlemesi çoğuldur, 'it' ile karşılanmaz. Bugünün fabrika robotları ve düşünen makineler de akışı oyunun öyküsünden koparır." },
  { id: 'd04-p4', course: G, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'A popular claim holds that the Great Wall of China is the only human-made structure visible from space. ----. Although the wall is extremely long, it is only a few metres wide, and its colour is similar to that of the surrounding land. Astronauts have reported that cities, airports and major roads are far easier to spot from orbit, especially at night when they are lit up.',
    options: [
      'Those who have actually been into orbit, however, tell a rather different story',
      'The wall was built over many centuries to protect the empire from invaders from the north',
      'For this reason, it has become one of the most visited sites in the world',
      "Satellites now take detailed pictures of almost every part of the planet's surface",
      'According to most astronauts, it can be seen clearly even from the Moon',
    ], answer: 0,
    explain: "Boşluktan önce yaygın bir iddia (Çin Seddi uzaydan görülebilen tek insan yapısıdır), sonra surun neden zor görüldüğü ve astronotların başka yapıları daha kolay seçtiği anlatılıyor. Boşluğa iddiayla sonrasını karşıtlıkla bağlayan cümle gelir: yörüngeye gerçekten çıkanlar başka bir şey anlatıyor; 'however' bu dönüşü kuruyor. Astronotların çoğuna göre surun Ay'dan bile görüldüğünü söyleyen cümle en güçlü çeldiricidir, çünkü astronotlardan söz ediyor; ama iddiayı güçlendiriyor ve sonraki cümlelerle çelişiyor. Surun yapılış amacı ve en çok ziyaret edilen yerlerden olması konuyu görünürlükten uzaklaştırır; uydu fotoğrafları da iddiayı sınayan çizgiye bağlanmaz." },

  // ---------- 76–80: akışı bozan cümle ----------
  { id: 'd04-b1', course: F, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış', 'gönderim'],
    sentences: [
      "Contrary to a widespread belief, a camel's hump does not hold water but is made up mostly of fat.",
      'By storing fat in one place rather than all over its body, the camel may be able to lose heat more easily in the desert sun.',
      'Camels were first domesticated several thousand years ago and have long been used to carry goods across deserts.',
      'When food is scarce, the animal can draw on this store for energy, and the hump shrinks and may even flop to one side.',
      'Its ability to go without water for long periods comes instead from features such as its very efficient kidneys.',
    ], answer: 2,
    explain: "Parça devenin hörgücüne dair bir yanılgıyı düzeltiyor: hörgüç su değil yağ depolar (I); yağın tek yerde toplanması ısı atmayı kolaylaştırabilir (II); besin azalınca hayvan bu depodan enerji alır ve hörgüç küçülür (IV); susuzluğa dayanıklılık ise böbrekler gibi başka özelliklerden gelir (V). IV'teki 'this store' (bu depo) II'deki yağ deposuna, V'teki 'instead' de I'deki 'su tutmaz' bilgisine dayanıyor. III. cümle de develerden söz ediyor, ama konuyu hörgüç ve susuzluktan devenin evcilleştirilmesine ve yük taşımadaki tarihine kaydırıyor." },
  { id: 'd04-b2', course: G, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['akış'],
    sentences: [
      "The Eiffel Tower was built for the World's Fair held in Paris in 1889, and for about forty years it was the tallest structure in the world.",
      'While it was being built, a group of well-known artists and writers published a letter attacking it as useless and monstrous.',
      'The tower was also meant to stand for only twenty years, after which the city could have had it taken down.',
      'Today the tower welcomes several million visitors a year, most of whom take a lift up to one of its viewing platforms.',
      'It was saved partly because it proved useful as a radio antenna, and today it is among the most recognisable buildings on Earth.',
    ], answer: 3,
    explain: "Parça Eyfel Kulesi'nin öyküsünü anlatıyor: 1889 fuarı için yapıldı (I), yapımı sırasında sanatçılar ve yazarlar ona karşı çıktı (II), yalnız yirmi yıl ayakta kalması düşünülüyordu (III) ve telsiz anteni olarak işe yaradığı için kısmen kurtuldu (V). V'teki 'It was saved' (kurtarıldı) III'teki 'yıkılabilirdi' bilgisine dayanıyor. IV. cümle de kuleden söz ediyor, ama yapım ve kurtuluş öyküsünün ortasında bugünkü ziyaretçilere atlıyor; araya girince V'teki 'It was saved' cümlesi bugünden geçmişe dönüyor ve kronolojik akış kopuyor." },
  { id: 'd04-b3', course: F, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış', 'gönderim'],
    sentences: [
      'Fingers and toes that have soaked in water for several minutes become covered in wrinkles.',
      'Many people find the wrinkled look of their fingertips unpleasant and dry their hands as soon as they leave the bath.',
      'For a long time, this was put down to the outer layer of the skin simply absorbing water and swelling.',
      'However, doctors noticed that the wrinkles do not appear on fingers whose nerves have been damaged, which suggests that the nervous system controls the process.',
      'Some researchers have proposed that wrinkled fingertips improve our grip on wet objects, although experiments testing this idea have produced mixed results.',
    ], answer: 1,
    explain: "Parça suda kalan parmakların neden buruştuğunu anlatıyor: parmaklar suda buruşur (I); bu uzun süre derinin su emip şişmesine bağlandı (III); ama sinirleri hasarlı parmaklarda buruşma görülmemesi süreci sinir sisteminin denetlediğini düşündürdü (IV); kimi araştırmacılar buruşmanın ıslak nesneleri kavramayı kolaylaştırdığını öne sürdü (V). III'teki 'this' I'deki buruşmaya dayanıyor. II. cümle de buruşmadan söz ediyor, ama nedenini açıklamak yerine insanların buruşukluğa nasıl baktığına kayıyor; araya girince III'teki 'this was put down to' (bu … e bağlandı) göndermesi bir nedene değil, insanların tepkisine dayanır gibi olur ve kopuyor." },
  { id: 'd04-b4', course: F, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    sentences: [
      'It is often said that the panes in very old church windows are thicker at the bottom because glass slowly flows downwards over the centuries.',
      'Scientists, however, have calculated that at room temperature glass would take far longer than the age of the universe to sag noticeably.',
      'The uneven thickness is better explained by the way window glass was made before modern factories, when panes were cut from sheets that were rarely flat.',
      'Glaziers, it seems, often placed the thicker edge at the bottom, though some old windows have been found with the thick edge at the top or the side.',
      'In the Middle Ages, window glass was so costly that it was found mainly in churches and in the homes of the very rich.',
    ], answer: 4,
    explain: "Parça eski kilise camlarının altta kalın olmasına dair bir yanılgıyı ele alıyor: camın yüzyıllar boyunca aşağı aktığı söylenir (I); ama oda sıcaklığında gözle görülür bir sarkma evrenin yaşından çok daha uzun sürer (II); kalınlık farkı eski cam yapım yöntemiyle daha iyi açıklanır (III); camcılar kalın kenarı çoğu zaman alta koymuştur, ama üstte ya da yanda olduğu örnekler de vardır (IV). V. cümle de eski pencere camından söz ediyor, ama kalınlık farkını açıklamaktan camın pahalılığına ve kimlerin ona sahip olabildiğine kayıyor; yanılgıyla ve kalın kenarın neden altta durduğuyla bağ kurmuyor." },
  { id: 'd04-b5', course: G, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['akış', 'gönderim'],
    sentences: [
      "Louis Braille lost his sight as a young child after an accident in his father's workshop in a small French village.",
      'As a pupil at a school for blind children in Paris, he learned of a system of raised dots that had been devised for the army so that messages could be read in the dark.',
      'A gifted musician, Braille went on to play the organ in several Paris churches as an adult.',
      'He found that system too complicated, and while still a teenager he developed a simpler code in which each letter is formed from up to six dots.',
      'Although it spread slowly at first, his code is now used by blind readers all over the world.',
    ], answer: 2,
    explain: "Parça Braille alfabesinin doğuşunu anlatıyor: Louis Braille küçük yaşta görme yetisini yitirdi (I), Paris'teki okulda orduya gece okumak için geliştirilmiş kabartma nokta sistemini öğrendi (II), bu sistemi karmaşık bulup altı noktaya dayanan daha basit bir yazı geliştirdi (IV) ve yazısı bugün dünyanın her yerinde kullanılıyor (V). IV'teki 'that system' II'deki nokta sistemine dayanıyor. III. cümle de Braille'den söz ediyor, ama yazının doğuşunu anlatmak yerine onun müzik yeteneğine ve yetişkinlikte org çalmasına atlıyor; araya girince IV'teki 'that system' göndermesi kopuyor." },
];

export const DENEME_04 = { id: 'deneme-04', sinav: 'YDS', ad: 'Tam deneme 4', sorular };
