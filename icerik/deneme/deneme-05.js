// iDil › Tam deneme 5 (YÖKDİL Sosyal biçimi; 80 soru, kitapçık sırası). Görev 11, Adım 1 (22 Kasım 2026).
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
// 7–8 fiil yapıları, 9–11 edat, 12–16 bağlaç, zarf cümleciği ve bağlantı zarfı, 17–18 edat, 19 eşleşik bağlaç, 20 sıfat cümleciği.
// Cümle tamamlama ilişkileri (dagilim.md §3.3, YÖKDİL): 8 karşıtlık, 1 neden-sonuç, 1 koşul, 1 zaman.
// Bütün metinler sosyal bilimler alanından. Alt grup dağılımı (tahmin.md §5.4 ve dagilim.md §4, soru başına; hedef yüzde
// parantezde): tarih 19 (22), psikoloji 12 (17), toplum 11 (12), sanat 10 (9), eğitim 9 (8), dil bilimi 7 (7), öteki 12
// (siyaset 4, ekonomi 3, antropoloji 3, felsefe 2; kalan pay).
// Parça konuları (deneme-01, deneme-02, set/set-sosyal-*.js ve pilot sosyal ünitelerinin konularıyla çakışmaz): okuma
// o1 Domesday Book (tarih), o2 bilişsel çelişki (psikoloji), o3 ortak kaynaklar ve Ostrom (toplum), o4 Hokusai'nin Büyük
// Dalga'sı (sanat), o5 dil ve renk algısı (dil bilimi); boşluklu z1 Hadrian Duvarı (tarih), z2 öğretmen beklentisi (eğitim).
//
// Olgular (yerleşik bilgi; her biri yalnız gösterildiği öğede; metinler özgün; sayılar yuvarlak ve temkinli):
// - d05-z1: Hadrian Duvarı kuzey İngiltere'de kıyıdan kıyıya yaklaşık 117 km (73 mil); yapımı MS 122 dolayında başladı;
//   aralıklarla küçük kaleler (mil kaleleri; parçada ad yok); amacının yalnız savunma olmadığı, hareket ve ticaretin
//   denetimi, vergi ve güç gösterisi görüşü (temkinli: "Many now believe"); yakındaki bir kalede (Vindolanda; parçada ad
//   yok) ıslak toprakta korunan, mürekkeple yazılmış ince tahta tabletler ("hundreds"; 1970'lerden beri bulunuyor, yıl yok);
//   çoraptan söz eden (346: bir askere çorap gönderildiğini bildirir) ve bira isteyen (628) mektuplar (parçada numara yok;
//   "mentions of warm socks and requests for beer").
// - d05-z2: Robert Rosenthal ve Lenore Jacobson, 1960'ların ortası, Kaliforniya'da bir ilkokul (Pygmalion in the Classroom,
//   1968; parçada ad ve yıl yok): öğretmenlere "atılım yapacak" diye bildirilen çocuklar rastgele seçilmişti; yıl sonunda
//   bu çocuklar, özellikle en küçük sınıflarda, ortalamada daha çok ilerledi; testin güvenilirliğine eleştiriler, sonraki
//   tekrarların karışık sonuçları; bugün beklenti etkisinin genellikle daha küçük kabul edilmesi (temkinli: "usually").
// - d05-o1: Domesday Book: I. William 1085'te (fetihten yaklaşık yirmi yıl sonra) sayımı buyurdu; görevliler çoğu
//   kontluğa gitti (kuzeydeki bazı bölgeler dışarıda kaldı; parçada "most of its counties"); sonuçlar büyük ölçüde 1086'da
//   derlendi, Latince, iki cilt (Great ve Little Domesday; parçada ad yok); Anglo-Sakson Vakayinamesi'ndeki "tek bir öküz ya
//   da inek bile kalmadı" yakınması (parçada eser adı yok); amacın vergi ve toprak anlaşmazlıkları olduğu tartışması
//   (temkinli: "may also have been meant"); "Domesday" adının 12. yüzyılda Kıyamet gününe benzetilerek verilmesi (Richard
//   FitzNigel, Dialogus de Scaccario, 1170'ler; parçada ad yok); 13.000'i aşkın yer; birçok kasabanın ilk yazılı kaydı.
// - d05-o2: Leon Festinger, 1957, bilişsel çelişki kuramı; Festinger ve James Carlsmith deneyi (1959; parçada yıl yok): bir
//   saatlik sıkıcı işler (tahtadaki çivileri çevirmek), sonraki katılımcıya (aslında araştırmacılarla çalışan biri) işin
//   eğlenceli olduğunu söylemek, 1 ya da 20 dolar; 1 dolar alanların işi daha olumlu değerlendirmesi; kuramın sonradan
//   inceltilmesi ve eleştirilmesi (temkinli).
// - d05-o3: Garrett Hardin, 1968, "the tragedy of the commons" (Science; parçada dergi adı yok); Elinor Ostrom'un incelediği
//   örnekler (İsviçre Alpleri'ndeki meralar, Japonya'daki ormanlar, İspanya ve Nepal'deki sulama düzenleri; Governing the
//   Commons, 1990; parçada eser adı yok); açık kurallar, karşılıklı denetim, kademeli yaptırım, kullanıcıların kurallara
//   katılması; 2009'da İktisat Bilimlerinde Nobel Anma Ödülü'nü alan ilk kadın.
// - d05-o4: Katsushika Hokusai, "Kanagawa açıklarında büyük dalga", 1831 dolayı ("around 1831"), yetmişli yaşlarında; Fuji
//   Dağı manzaraları dizisinin parçası (Fugaku Sanjūrokkei; parçada dizi adı yok); tahta baskı: çizer, oymacı, basımcı, her
//   renk için ayrı kalıp; çok sayıda ve ucuz basılması, kent halkının alması (temkinli: "seems to"); Avrupa'da icat edilen
//   ve Japonya'da yeni ucuzlayan sentetik Prusya mavisi; Japonya'nın 1850'ler ve 1860'larda Batı'yla ticareti genişletmesi;
//   Monet ve van Gogh'un Japon baskıları toplaması; Avrupa sanatına etkisi (temkinli: "are widely thought to").
// - d05-o5: Benjamin Lee Whorf, 20. yüzyılın ilk yarısı; dilin düşünceyi belirlediği güçlü biçimin bugün az destekçisi
//   olması; Rusçada açık ve koyu mavi için iki temel sözcük (goluboy, siniy; parçada sözcük yok); Winawer ve arkadaşları,
//   PNAS, 2007 (parçada ad ve yıl yok): Rusça konuşanlar sınırın iki yanındaki mavileri daha hızlı ayırdı, İngilizce
//   konuşanlarda bu üstünlük yoktu; içten rakam dizisi tekrarlarken (sözel yük) üstünlük kayboldu.
// - d05-p1: Tambora Yanardağı Nisan 1815'te bugünkü Endonezya'da patladı; Haziran 1816'da Kuzey Amerika'nın bazı yerlerinde
//   (New England, Kanada; parçada ad yok) kar; Avrupa'nın büyük kısmında ürün kaybı ve fiyat artışı; "yazsız yıl" adı.
//   Soğutma düzeneği: patlamanın stratosfere saldığı kükürtlü gazlardan (kükürt dioksit) oluşan sülfat parçacıkları bir pus
//   oluşturup güneş ışığının bir kısmını yansıttı (parçada "sulphur gases that formed a haze"; ayrıntı yerleşik bilgi).
// - d05-p2: Robert Zajonc, 1960'lar (1968; cümlede yıl yok): anlamsız sözcükler, Çinceye benzeyen işaretler ve yüz
//   fotoğrafları; sık görülenlerin daha hoş bulunması; "salt maruz kalma etkisi"; Zajonc'un sosyal kolaylaştırma üzerine de
//   çalışması (yalnız çeldiricide).
// - d05-p3: Robin Dunbar, 1990'lar (cümlede yıl yok): primatlarda beyin kabuğunun (neokorteks; cümlede terim yok) büyüklüğü ile
//   grup büyüklüğü arasındaki bağ; insanlar için yaklaşık 150; yöntemin çok geniş bir aralık bıraktığı eleştirisi (Lindenfors ve
//   arkadaşları, 2021; cümlede ad yok).
// - d05-p4: 1974'te Şian yakınında kuyu kazan çiftçilerin bulduğu pişmiş toprak ordu; Çin'in ilk imparatorunun (Qin Shi
//   Huang; cümlede ad yok) mezarı yakınında binlerce gerçek boyutlu asker; renk izleri, boyanın havayla karşılaşınca kısa
//   sürede kıvrılıp dökülmesi; alanın büyük kısmının bu nedenlerden biriyle kazılmadan bırakılması (temkinli: "one reason").
//   Çeldiricide: ilk imparatorun ölçü, ağırlık ve sikkeyi standartlaştırması.
// - d05-p5: Maria Montessori, İtalya'da hekim olan ilk kadınlardan biri (1896; cümlede yıl yok); 1907'de Roma'nın yoksul bir
//   semtinde (San Lorenzo; cümlede ad yok) ilk okulu (Casa dei Bambini); yöntemin birkaç on yılda dünyaya yayılması.
//   Çeldiricide: on yıllar sonra birkaç yıl Hindistan'da yaşayıp ders vermesi (1939–1946; cümlede yıl yok).
// - d05-p6: Pidgin ve kreol dilleri (yerleşik dil bilimi bilgisi; sayı yok, "some creoles … millions of speakers").
// - d05-b1: İskenderiye Feneri, MÖ 3. yüzyıl, Pharos adası, Dünyanın Yedi Harikası'ndan; tepesinde ateş yandığını anlatan
//   eski yazarlar (temkinli: "Ancient writers describe"); depremlerle yıkılması; 15. yüzyılda taşlarının bir kısmının aynı
//   yerde yapılan kalede (Kayıtbay Kalesi; cümlede ad yok) kullanılması. Aykırı cümlede: bugün birçok fenerin otomatik
//   olması ve elektronik düzenlerle işletilmesi (genel bilgi, temkinli: "Many"; yaygınlık oranı verilmez).
// - d05-b3: Soylulaştırma tartışması (genel bilgi). Aykırı cümlede: bu tür mahallelerin çoğunun 19. yüzyılda fabrika
//   işçilerine konut olarak yapılmış olması (temkinli: "many such neighbourhoods").
// - d05-b2: Doğrulama yanlılığı; karşıt görüşlü kişilere aynı karışık bulguların okutulduğu çalışma (Lord, Ross ve Lepper,
//   1979; cümlede ad yok): her grubun kendi görüşünü destekleyen kanıtı daha inandırıcı bulması.
// - d05-b4: Bartolomeo Cristofori, Floransa, 1700 dolayı; piyanonun klavsene göre üstünlüğü; "pianoforte" adının "yumuşak" ve
//   "yüksek sesle" sözcüklerini birleştirmesi.
// - d05-b5: İki dillilik üstünlüğü tartışması: eski çalışmaların dikkat değiştirme görevlerinde üstünlük bildirmesi, son büyük
//   çalışmaların bulamaması, yayın yanlılığı kuşkusu (temkinli: "some suspect").
// - d05-b6: Adam Smith, The Wealth of Nations, 1776; toplu iğne atölyesi ve iş bölümü; tek işi sonsuzca yinelemenin zihni
//   köreltebileceği uyarısı. Aykırı cümlede: bugün fabrikalarda makinelerin eskiden birkaç işçinin yaptığı işleri yapması
//   (genel bilgi, "In many modern factories").
// - d05-t1: Çin Seddi'nin farklı dönemlerde yapılmış ayrı duvarlardan oluşması (yerleşik bilgi).
// - d05-t3: Van Gogh'un yaşarken çok az resim satması ("very few"; kesin sayı yazılmadı).
// - d05-t4: Avrupa'nın birçok ülkesinde 19. yüzyılda zorunlu eğitim yasaları; uygulamada çocukların bir süre daha çalışması
//   (temkinli: "many children").
// - d05-t5: Latincenin anadil olmaktan çıkmasından sonra uzun süre Avrupa biliminin dili olarak kalması.
// - d05-t6: Sokrates'in yazılı eser bırakmaması, görüşlerinin öğrencileri aracılığıyla bilinmesi; çeldiricilerde Platon'un
//   okul kurması; Platon dahil birkaç antik yazarın Sokrates'in Atina'daki yargılanmasını anlatması (Platon'un Savunma'sı,
//   Ksenophon; cümlede yalnız Platon'un adı var).
// - d05-t7: Pozitif psikoloji akımının güçlü yanlar (umut, minnet) üzerine çalışması (1990'ların sonu; cümlede yıl yok).
// - d05-t8: Armağanın karşılık yükümlülüğü doğurması (Marcel Mauss, 1925; cümlede ad yok).
// - d05-t9: Kara Ölüm 14. yüzyıl ortasında Avrupa nüfusunun büyük bir kısmını öldürdü ("a large share"); hayatta kalan
//   işçilerin daha yüksek ücret isteyebilmesi (temkinli: "often").
// - Öteki öğelerde ad, sayı ya da tarih yok; cümleler genel bilgi ya da kurgusaldır.

const T = 'taslak';
const U = 'Tam deneme 5 (YÖKDİL Sosyal)';
const SO = 'sosyal';

const sorular = [
  // ---------- 1–6: kelime ----------
  { id: 'd05-k1', course: SO, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['isim'],
    q: 'The discovery of the shipwreck provided strong ---- for the long-held but unproven theory that the two ancient ports had traded with each other.',
    options: ['compensation', 'corroboration', 'speculation', 'precedence', 'jurisdiction'], answer: 1,
    explain: "Batık, iki antik liman arasında ticaret olduğuna dair uzun süredir savunulan ama kanıtlanamamış kuramı güçlü biçimde doğruluyor: 'provide corroboration for a theory' (bir kuramı destekleyen kanıt sunmak, doğrulamak). 'Speculation' (tahmin, spekülasyon) en güçlü çeldiricidir, çünkü kuramla ilgili bir sözcüktür; ama kanıtlanmamış kuram zaten bir tahmindir, batık ona yeni bir tahmin değil kanıt ekliyor. 'Compensation' (tazminat) 'provide compensation for' kalıbıyla kurulabilir, ama bir kuram için tazminat söz konusu olmaz. 'Precedence' (öncelik) ve 'jurisdiction' (yargı yetkisi) bir kuramın doğrulanmasını anlatmaz." },
  { id: 'd05-k2', course: SO, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['isim'],
    q: 'People with social ---- often avoid parties or speaking in public because they fear that others will judge them harshly.',
    options: ['mobility', 'welfare', 'anxiety', 'skills', 'cohesion'], answer: 2,
    explain: "Başkalarının kendilerini sertçe yargılayacağından korkup partilerden ve topluluk önünde konuşmaktan kaçınan kişiler sosyal kaygı yaşar: 'social anxiety'. Bütün seçenekler 'social' ile kalıplaşmış öbek kurar ve 'People with social …' yapısına uyar; tuzak da buradadır. 'Social skills' (sosyal beceriler) en güçlü çeldiricidir, çünkü bir kişinin özelliğini anlatır; ama sosyal becerisi olan biri partilerden kaçınmaz, cümlenin anlattığı korkunun tersine bir özelliktir. 'Social mobility' (toplumsal hareketlilik), 'social welfare' (sosyal yardım) ve 'social cohesion' (toplumsal bütünlük) toplumu anlatan kavramlardır, bir kişinin korkusunu ve kaçınma davranışını anlatmaz." },
  { id: 'd05-k3', course: SO, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['sıfat'],
    q: "In many traditional farming communities, decisions about land and water were made collectively, and anyone who ignored the group's rules risked becoming socially ----.",
    options: ['isolated', 'privileged', 'mobile', 'dominant', 'accessible'], answer: 0,
    explain: "Kararların birlikte alındığı bir toplulukta kurallara uymayan kişi topluluktan dışlanma, yalnız kalma tehlikesiyle karşılaşır: 'socially isolated' (toplumdan yalıtılmış). 'Risk' fiili de olumsuz bir sonuç bekletir. 'Privileged' (ayrıcalıklı) ve 'dominant' (baskın) kuralı çiğneyene ödül vermek olur; mantığı ters çevirir. 'Socially mobile' (toplumsal olarak yükselen) ve 'accessible' (ulaşılabilir) da kural çiğnemenin bir bedelini anlatmaz." },
  { id: 'd05-k4', course: SO, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['zarf'],
    q: 'Although no battle had been fought between them for decades, the two states were ---- still at war, because a peace treaty had never been signed.',
    options: ['fiercely', 'openly', 'briefly', 'technically', 'voluntarily'], answer: 3,
    explain: "Onlarca yıldır savaş olmamış ama barış antlaşması da imzalanmamış; yani iki devlet kâğıt üzerinde, resmî açıdan hâlâ savaştadır: 'technically still at war'. 'Openly' (açıkça) en güçlü çeldiricidir, ama açık bir savaş çatışma ister; 'onlarca yıldır savaş yok' sözüyle çelişir. 'Fiercely' (şiddetle) de aynı çelişkiyi kurar. 'Briefly' (kısa süre) 'onlarca yıl' ile, 'voluntarily' (gönüllü olarak) da antlaşmanın imzalanmamış olmasıyla bağ kurmaz." },
  { id: 'd05-k5', course: SO, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['fiil'],
    q: 'Using X-ray imaging, experts were able to ---- an earlier portrait hidden beneath the surface of the landscape, which the artist had apparently painted over to save canvas.',
    options: ['obscure', 'emulate', 'exhibit', 'restrict', 'uncover'], answer: 4,
    explain: "Röntgen görüntülemesi, manzara resminin altında gizli kalmış eski bir portreyi ortaya çıkarmayı sağlıyor: 'uncover' (ortaya çıkarmak, açığa çıkarmak). 'Obscure' (örtmek, belirsizleştirmek) en güçlü çeldiricidir, çünkü cümlede 'hidden' geçiyor; ama portreyi ressam örtmüştü, uzmanlar ise görüntüleme ile onu görünür kıldı. 'Exhibit' (sergilemek) yüzeyin altındaki bir resim için kullanılmaz; 'emulate' (öykünmek) ve 'restrict' (sınırlamak) da görüntüleme yöntemiyle anlamlı bir iş anlatmaz." },
  { id: 'd05-k6', course: SO, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['öbek fiil'],
    q: 'When the mill that had employed most of the town closed, many families had to ---- their savings for months until they found new work.',
    options: ['set aside', 'give away', 'look after', 'live on', 'call off'], answer: 3,
    explain: "Fabrika kapanınca işsiz kalan aileler yeni iş bulana kadar birikimleriyle geçinmek zorunda kaldı: 'live on something' (bir şeyle geçinmek). 'Set aside' (bir kenara koymak, biriktirmek) en güçlü çeldiricidir, çünkü birikimle ilgilidir; ama işsiz bir aile para biriktirmez, eldekini harcar. 'Give away' (dağıtmak) durumu anlamsızlaştırır; 'look after' (bakmak) ve 'call off' (iptal etmek) de birikimle geçinmeyi anlatmaz." },

  // ---------- 7–20: dil bilgisi ----------
  { id: 'd05-g1', course: SO, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['zaman uyumu', 'zaman: past perfect'],
    q: 'When archaeologists began excavating the hill in the 1920s, they soon realised that the settlement on its summit ---- several times before it was finally abandoned.',
    options: ['has been rebuilt', 'was being rebuilt', 'had been rebuilt', 'would rebuild', 'will have been rebuilt'], answer: 2,
    explain: "Kazı 1920'lerde yapıldı ve arkeologlar o sırada bir şeyi fark etti: yerleşim, terk edilmeden önce birkaç kez yeniden kurulmuştu. Geçmişteki bir andan daha önce olan iş past perfect ile anlatılır; yerleşim kendini değil başkaları onu kurduğu için de edilgen gerekir: 'had been rebuilt'. 'Has been rebuilt' en güçlü çeldiricidir, çünkü edilgendir; ama present perfect 1920'lerdeki bir fark edişten önceki çok eski bir olaya uymaz. 'Was being rebuilt' 'several times' ile, 'will have been rebuilt' geçmiş anlatıyla uyuşmaz; 'would rebuild' de etkendir ve yerleşimi işi yapan yapar." },
  { id: 'd05-g2', course: SO, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['kip geçmiş (modal perfect)', 'edilgen'],
    q: 'The children made exactly the same choices whether or not the researcher was in the room, so their decisions ---- by her presence.',
    options: ["can't have been influenced", 'must have been influenced', 'should have been influenced', 'may well have been influenced', 'had to be influenced'], answer: 0,
    explain: "Çocuklar araştırmacı odadayken de yokken de aynı seçimleri yapmış; 'so' ile konuşan bu gözlemden kendi sonucunu çıkarıyor: kararları onun varlığından etkilenmiş olamaz. Bu, deneyin kesin bir sonucu olarak değil, konuşanın gözleme dayanan güçlü çıkarımı olarak veriliyor; böyle bir olumsuz çıkarım 'can't have been influenced' ile kurulur. 'Must have been influenced' de geçmişe dair güçlü bir çıkarım kurar, ama konuşanın dayandığı gözlemin tersine bir sonuç çıkarır. 'May well have been influenced' etkilenmeyi güçlü bir olasılık sayar; konuşanın aynı seçimlerden çıkardığı sonuçla bağdaşmaz. 'Should have been influenced' bir beklenti ya da gereklilik bildirir, 'had to be influenced' de bir zorunluluk; ikisi de kanıttan sonuç çıkarmaz." },
  { id: 'd05-g3', course: SO, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'The ancient caravan route ran ---- the mountains rather than over them, following a narrow valley that stayed free of snow for most of the year.',
    options: ['beyond', 'through', 'above', 'onto', 'against'], answer: 1,
    explain: "Yol dağların üstünden aşmıyor, dar bir vadiyi izleyerek dağların arasından geçiyordu; bir şeyin içinden ya da arasından geçmek 'through' ile anlatılır. 'Beyond' (… in ötesinde) en güçlü çeldiricidir, ama yolun dağların öte yanında olduğunu söyler; vadiyi izleyerek dağları geçme anlamı vermez. 'Above' (üstünde) 'rather than over them' ile çelişir. 'Onto' bir yüzeyin üstüne hareketi, 'against' bir şeye dayanmayı ya da karşı olmayı bildirir." },
  { id: 'd05-g4', course: SO, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'Many historians attribute the decline of the medieval port ---- a combination of silting in its harbour and repeated outbreaks of plague.',
    options: ['with', 'from', 'on', 'by', 'to'], answer: 4,
    explain: "'Attribute something to something' (bir şeyi bir nedene bağlamak) kalıplaşmış bir fiil-edat bağıdır: tarihçiler limanın gerilemesini limanın dolması ve tekrarlanan veba salgınlarına bağlıyor. 'From' en güçlü çeldiricidir, çünkü gerilemenin bu etkenlerden doğduğu düşünülebilir ('result from'); ama 'attribute' fiili 'from' almaz. 'With', 'on' ve 'by' de 'attribute' ile neden bildiren bir öbek kurmaz." },
  { id: 'd05-g5', course: SO, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['çok sözcüklü edat'],
    q: '---- its small population, the island played a surprisingly important role in regional politics for several centuries.',
    options: ['Because of', 'In spite of', 'In addition to', 'In terms of', 'Instead of'], answer: 1,
    explain: "Adanın nüfusu küçük, ama bölge siyasetinde şaşırtıcı ölçüde önemli bir rol oynamış; 'surprisingly' de beklenenin tersini işaret ediyor. Bu karşıtlık 'in spite of' (… e karşın) ile kurulur. 'Because of' (… yüzünden) en güçlü çeldiricidir, ama küçük nüfusu önemli rolün nedeni yapar ve 'surprisingly' sözünü anlamsız bırakır. 'In addition to' (… e ek olarak), 'in terms of' (… bakımından) ve 'instead of' (… yerine) karşıtlık bildirmez." },
  { id: 'd05-g6', course: SO, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Many voters continue to support the party their parents favoured, ---- their own views on several key issues have changed considerably.',
    options: ['so that', 'in case', 'even though', 'now that', 'as long as'], answer: 2,
    explain: "Seçmenler kendi görüşleri epey değiştiği hâlde ailelerinin desteklediği partiyi desteklemeyi sürdürüyor; beklenmedik bu durum 'even though' (… e karşın) ile bağlanır. 'Now that' (… dığına göre, artık) en güçlü çeldiricidir, çünkü değişmiş bir duruma gönderme yapar; ama görüşlerin değişmesi aynı partiyi desteklemenin nedeni olamaz. 'As long as' (… dıkça) desteği görüşlerin değişmesi koşuluna bağlar; 'so that' (… sın diye) amaç, 'in case' (… olur diye) önlem bildirir." },
  { id: 'd05-g7', course: SO, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['bağlaç'],
    q: '---- the museum reopens next spring, visitors will be able to see the textile collection in a new wing designed to protect fragile fabrics.',
    options: ['Although', 'Unless', 'Whereas', 'Once', 'Even if'], answer: 3,
    explain: "Müze gelecek bahar yeniden açıldıktan sonra ziyaretçiler dokuma koleksiyonunu yeni kanatta görebilecek; bir olayın ardından gelen durum 'once' (… ince, … dikten sonra) ile bağlanır. 'Unless' (… medikçe) en güçlü çeldiricidir, ama koleksiyonu görebilmeyi müzenin açılmamasına bağlar; mantığı ters çevirir. 'Even if' (… se bile) de açılmayı bir engel gibi gösterir. 'Although' (… e karşın) ve 'whereas' (oysa) bir karşıtlık bekler; açılış ile koleksiyonu görmek arasında karşıtlık yok." },
  { id: 'd05-g8', course: SO, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['devrik yapı', 'zarf cümleciği'],
    q: '---- had the ceasefire been signed than fighting broke out again along the disputed border.',
    options: ['Hardly', 'No sooner', 'Not only', 'Only after', 'Rarely'], answer: 1,
    explain: "Ateşkes imzalanır imzalanmaz çatışma yeniden başladı; 'No sooner had … than …' (… er … mez) iki olayın hemen art arda geldiğini anlatır ve olumsuz anlamlı başlangıç yüzünden cümle devrik kurulur. 'Hardly' en güçlü çeldiricidir, çünkü aynı anlamı taşır; ama 'than' ile değil 'when' ile kurulur ('Hardly had … when …'). 'Not only' ardından 'but also' ister. 'Only after' devriği ana cümlede yapar ('Only after the ceasefire had been signed did …'). 'Rarely' (nadiren) tek bir olayın hemen ardından geleni anlatmaz." },
  { id: 'd05-g9', course: SO, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlantı zarfı'],
    q: 'Early sociologists relied heavily on official statistics; ----, their conclusions often reflected the way governments chose to record information rather than social reality itself.',
    options: ['nevertheless', 'in contrast', 'for instance', 'consequently', 'likewise'], answer: 3,
    explain: "Noktalı virgülden önce bir neden, sonra onun sonucu geliyor: ilk sosyologlar resmî istatistiklere dayandığı için vardıkları sonuçlar toplumsal gerçekliği değil, hükümetlerin bilgiyi kaydetme biçimini yansıttı. Sonuç 'consequently' (sonuç olarak) ile bağlanır. 'Nevertheless' (yine de) en güçlü çeldiricidir, ama iki bölüm arasına bir karşıtlık koyar; oysa ikinci bölüm birincinin doğal sonucudur. 'In contrast' (buna karşılık) karşılaştırma, 'for instance' (örneğin) örnek, 'likewise' (aynı biçimde) benzerlik bildirir." },
  { id: 'd05-g10', course: SO, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Anthropologists usually record their interviews in full ---- they later need to check exactly how a speaker described a particular custom.',
    options: ['in case', 'so that', 'as if', 'whereas', 'unless'], answer: 0,
    explain: "Antropologlar görüşmeleri baştan sona kaydeder; çünkü sonradan bir konuşmacının bir geleneği tam olarak nasıl anlattığını denetlemeleri gerekebilir. Olası bir duruma karşı önceden önlem almak 'in case' (… olur diye, … ihtimaline karşı) ile anlatılır. 'So that' (… sın diye) en güçlü çeldiricidir, çünkü bir amaç bildirir; ama 'so that they later need to check' denetleme ihtiyacını kaydın amacı yapar, bu da anlamsızdır. 'As if' (sanki) benzetme, 'whereas' (oysa) karşıtlık, 'unless' (… medikçe) koşul bildirir." },
  { id: 'd05-g11', course: SO, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['edat'],
    q: "The philosopher's ideas were largely ignored ---- his lifetime and became influential only decades after his death.",
    options: ['since', 'by', 'until', 'for', 'during'], answer: 4,
    explain: "Filozofun görüşleri yaşadığı süre boyunca büyük ölçüde görmezden gelinmiş, ancak ölümünden onlarca yıl sonra etkili olmuştu; bir sürenin içinde olan şey 'during' ile anlatılır: 'during his lifetime'. 'Until' (… e kadar) en güçlü çeldiricidir, çünkü bir zaman sınırı çizer; ama ardından bir süre adı değil bir an ister ('until his death'). 'Since' başlangıç noktası, 'by' son tarih bildirir; 'for' da süreyi ölçer ('for many years') ve 'his lifetime' ile bu anlamı kurmaz." },
  { id: 'd05-g12', course: SO, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'At the start of the experiment, participants were randomly assigned ---- one of three groups, each of which received slightly different instructions.',
    options: ['with', 'to', 'from', 'at', 'of'], answer: 1,
    explain: "'Assign someone to a group' (birini bir gruba yerleştirmek, atamak) kalıplaşmış bir fiil-edat bağıdır: katılımcılar rastgele üç gruptan birine yerleştirildi. 'With' en güçlü çeldiricidir, çünkü katılımcıların grupla birlikte olduğu düşünülebilir; ama 'assign' bu anlamda 'with' almaz. 'From' ayrılma, 'at' bir nokta bildirir; 'of' da 'assign' ile kullanılmaz." },
  { id: 'd05-g13', course: SO, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['eşleşik bağlaç'],
    q: 'The annual festival was intended ---- to celebrate the harvest ---- to strengthen ties between neighbouring villages that often competed for the same pastures.',
    options: ['neither / nor', 'whether / or', 'not only / but also', 'no sooner / than', 'such / that'], answer: 2,
    explain: "Şenliğin iki amacı vardı: hem hasadı kutlamak hem de aynı meralar için yarışan komşu köyler arasındaki bağları güçlendirmek. İki amacı birlikte vermek 'not only … but also' (yalnız … değil, … de) ile olur. 'Neither … nor' (ne … ne de) en güçlü çeldiricidir, çünkü dil bilgisi açısından uyar; ama şenliğin hiçbir amacı olmadığını söyler ve 'was intended' ile çelişir. 'Whether … or' bir seçim ya da belirsizlik bildirir; 'no sooner … than' zaman, 'such … that' sonuç kurar ve iki mastarı bağlamaz." },
  { id: 'd05-g14', course: SO, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'The village ---- church tower can still be seen above the water in dry summers was flooded when the dam was built.',
    options: ['which', 'where', 'whom', 'whose', 'that'], answer: 3,
    explain: "Boşluktan sonra gelen 'church tower' köye aittir: kilise kulesi kurak yazlarda suyun üstünde hâlâ görülebilen köy. İyelik bildiren sıfat cümleciği 'whose' ile kurulur. 'Where' en güçlü çeldiricidir, çünkü bir yer adını niteliyor; ama ardından tam bir cümle ister, oysa 'church tower' tanımlıksız bir isimdir ve 'where church tower can be seen' kurulmaz. 'Which' ve 'that' ardından iyelik alan bir isimle gelmez; 'whom' da insanlar için nesne olarak kullanılır." },

  // ---------- 21–30: boşluklu metin ----------
  { id: 'd05-z1', course: SO, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Sınırdaki mektuplar',
    text: "Stretching for about 117 kilometres from coast to coast across northern England, Hadrian's Wall is the best-known frontier of the Roman Empire. Work on it began around AD 122, and small forts were built (1) ---- regular intervals along its entire length. For a long time, historians assumed that the wall had been built simply to keep hostile tribes out of Roman territory. Many now believe, (2) ----, that it served several purposes at once. It allowed the army to control who and what crossed the frontier, to tax trade and to (3) ---- the power of Rome to anyone who approached it. Our picture of daily life on the frontier owes a great deal to hundreds of letters written in ink on thin wooden tablets, (4) ---- for centuries in the waterlogged ground of a nearby fort. Among other things, they include mentions of warm socks and requests for beer, which suggests that the soldiers' daily concerns were (5) ---- more ordinary than tales of frontier warfare might lead us to expect.",
    steps: [
      { konu: ['edat'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['in', 'at', 'on', 'by', 'for'], answer: 1,
        explain: "'At regular intervals' (düzenli aralıklarla) kalıplaşmış bir edat öbeğidir: küçük kaleler duvar boyunca düzenli aralıklarla yapılmıştı. 'In' en güçlü çeldiricidir, çünkü yer bildiren en yaygın edattır; ama 'interval' ile bu anlamda kullanılmaz. 'On', 'by' ve 'for' da 'regular intervals' ile aralık anlamı kurmaz." },
      { konu: ['bağlantı zarfı'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['therefore', 'for example', 'however', 'similarly', 'otherwise'], answer: 2,
        explain: "Önceki cümle tarihçilerin uzun süre duvarın yalnız düşmanları dışarıda tutmak için yapıldığını varsaydığını söylüyor; boşluğun bulunduğu cümle ise bugün birçok kişinin duvarın birkaç amaca birden hizmet ettiğini düşündüğünü. Eski görüşle yeni görüş arasındaki karşıtlık 'however' (ancak) ile bağlanır. 'Therefore' (bu yüzden) en güçlü çeldiricidir, ama eski varsayımı yeni görüşün nedeni yapar; oysa yeni görüş onu düzeltiyor. 'For example' (örneğin) örnek, 'similarly' (benzer biçimde) benzerlik, 'otherwise' (yoksa) seçenek bildirir." },
      { konu: ['fiil'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['conceal', 'divide', 'question', 'display', 'restore'], answer: 3,
        explain: "Duvar, ordunun sınırdan kimin ve neyin geçtiğini denetlemesini ve ticaretten vergi almasını sağlıyor, ayrıca ona yaklaşan herkese Roma'nın gücünü gösteriyordu: 'display something to someone' (birine bir şeyi göstermek, sergilemek). 'Restore' (yeniden kurmak) en güçlü çeldiricidir, çünkü güçle birlikte kullanılabilir; ama yitirilmiş bir gücü geri getirmeyi anlatır, parçada Roma'nın gücünü yitirdiğine dair bir şey yok. 'Conceal' (gizlemek) duvarın amacını ters çevirir; 'divide' (bölmek) ve 'question' (sorgulamak) da güç gösterisini anlatmaz." },
      { konu: ['ortaç öbeği'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['preserving', 'to preserve', 'having preserved', 'were preserved', 'preserved'], answer: 4,
        explain: "Virgülden sonra gelen öbek tabletleri niteliyor: tabletler bir kalenin ıslak toprağında yüzyıllarca korunmuştu. Tabletler kendileri bir şeyi korumadığı, toprak onları koruduğu için edilgen anlamlı ortaç gerekir: 'preserved' ('which had been preserved' cümleciğinin kısaltılmışı). 'Preserving' ve 'having preserved' etkendir: tabletlerin bir şeyi koruduğunu söyler. 'Were preserved' bağlaç ya da ilgi zamiri olmadan ikinci bir çekimli fiil olarak gelemez; 'to preserve' de bir amaç bildirir." },
      { konu: ['karşılaştırma'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['far', 'very', 'such', 'too', 'so'], answer: 0,
        explain: "Boşluktan sonra bir karşılaştırma geliyor: 'more ordinary than …'. Karşılaştırma sıfatını güçlendiren zarf 'far' (çok daha) olur: askerlerin gündelik kaygıları, sınır savaşlarına dair anlatıların bekletebileceğinden çok daha sıradandı. 'Very' en güçlü çeldiricidir, çünkü sıfatları güçlendirmede en sık kullanılan sözcüktür; ama karşılaştırma biçimiyle ('very more') kullanılmaz. 'Such', 'too' ve 'so' da 'more … than' öbeğinin önüne gelmez." },
    ] },

  { id: 'd05-z2', course: SO, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Öğretmenin beklentisi',
    text: "In the mid-1960s, two American researchers gave the pupils of a primary school a test which, they told the teachers, could identify children who were about to make unusual intellectual progress. In reality, the test could do nothing of the kind: the children (1) ---- the teachers were told to watch had simply been chosen at random. When all the pupils were tested again at the end of the year, the selected children, particularly those in the youngest classes, had on average gained more than their classmates. The researchers concluded that the teachers' raised expectations (2) ---- in subtle changes in the way they treated these pupils, (3) ---- giving them more attention, warmer encouragement or more time to answer questions. The study quickly became famous, but it also drew sharp criticism. Some scholars questioned the (4) ---- of the intelligence test that had been used, and later attempts to repeat the findings produced mixed results. Most researchers today accept that teachers' expectations can affect how pupils perform, (5) ---- the effect is usually smaller than the original study implied.",
    steps: [
      { konu: ['sıfat cümleciği'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['which', 'whose', 'whom', 'where', 'what'], answer: 2,
        explain: "Boşluk 'the children' sözcüğünü niteleyen bir sıfat cümleciği açıyor ve cümlecikte çocuklar nesnedir: öğretmenlere izlemeleri söylenen çocuklar ('the teachers were told to watch them'). İnsanları nesne olarak niteleyen ilgi zamiri 'whom' olur. 'Which' en güçlü çeldiricidir, çünkü nesne yerine de geçer; ama insanlar için değil, şeyler ve hayvanlar için kullanılır. 'Whose' ardından bir isim ister; 'where' tam bir cümle ve yer ister; 'what' de bir ismi nitelemez." },
      { konu: ['kip geçmiş (modal perfect)'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ["can't have resulted", 'must have resulted', 'would rather result', 'had better result', "needn't have resulted"], answer: 1,
        explain: "Araştırmacılar bulgudan bir sonuç çıkarıyor ('concluded'): öğretmenlerin artan beklentisi bu çocuklara davranışlarındaki küçük değişikliklere yol açmış olmalıydı. Geçmişe dair güçlü bir çıkarım 'must have + V3' ile kurulur. 'Can't have resulted' de bir çıkarım bildirir, ama araştırmacıların vardığı sonucun tersini söyler; ardından gelen örnekler (daha çok ilgi, daha sıcak teşvik) de değişikliği destekliyor. 'Needn't have resulted' gereksizlik bildirir; 'would rather' tercih, 'had better' uyarı anlatır ve bir çıkarım kurmaz." },
      { konu: ['çok sözcüklü edat'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['instead of', 'in spite of', 'regardless of', 'such as', 'on behalf of'], answer: 3,
        explain: "Boşluktan sonra öğretmenlerin davranışındaki küçük değişikliklere örnekler sıralanıyor: daha çok ilgi, daha sıcak teşvik, cevap için daha çok süre. Örnek vermek 'such as' (… gibi) ile olur. 'Instead of' (… yerine) en güçlü çeldiricidir, çünkü dil bilgisi açısından '-ing' alır; ama bu davranışları değişikliklerin karşıtı gibi gösterir, oysa değişikliklerin kendisidir. 'In spite of' (… e karşın), 'regardless of' (… e bakmaksızın) ve 'on behalf of' (… adına) örnek bildirmez." },
      { konu: ['isim'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['popularity', 'generosity', 'curiosity', 'scarcity', 'reliability'], answer: 4,
        explain: "Eleştirmenlerin sorguladığı şey kullanılan zekâ testinin güvenilirliğidir: test doğru ve tutarlı ölçüyor muydu? Bir ölçme aracı için 'reliability' (güvenilirlik) kullanılır ve cümlenin devamındaki 'bulguları tekrarlama denemeleri' de bu kuşkuyu destekler. 'Popularity' (sevilme, yaygınlık) en güçlü çeldiricidir, çünkü bir testin yaygın olup olmadığı da konuşulabilir; ama çalışmanın sonuçlarına yöneltilen bilimsel bir eleştiri olmaz. 'Generosity' (cömertlik), 'curiosity' (merak) ve 'scarcity' (kıtlık) bir testin niteliğini anlatmaz." },
      { konu: ['bağlaç'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['although', 'because', 'unless', 'so that', 'as if'], answer: 0,
        explain: "Cümle iki şeyi birlikte söylüyor: araştırmacıların çoğu beklentinin başarıyı etkileyebileceğini kabul ediyor, ama etki genellikle ilk çalışmanın düşündürdüğünden küçük. Kabul ile sınırlama arasındaki karşıtlık 'although' (… se de) ile bağlanır. 'Because' (çünkü) en güçlü çeldiricidir, ama etkinin küçük olmasını onun kabul edilmesinin nedeni yapar; arada böyle bir bağ yok. 'Unless' (… medikçe) koşul, 'so that' (… sın diye) amaç, 'as if' (sanki) benzetme bildirir." },
    ] },

  // ---------- 31–41: cümle tamamlama ----------
  { id: 'd05-t1', course: SO, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although the Great Wall of China is often imagined as one continuous structure, ----.',
    options: [
      'it was built mainly to defend the empire against raids from the north',
      'many of its best-preserved sections are visited by tourists every year',
      'its construction required the labour of enormous numbers of workers',
      'several of its watchtowers were placed on the tops of steep hills',
      'it is really a network of separate walls built over many centuries',
    ], answer: 4,
    explain: "'Although' bir karşıtlık bekler: Çin Seddi çoğu zaman tek ve kesintisiz bir yapı diye düşünülür, oysa gerçekte yüzyıllar boyunca yapılmış ayrı duvarlardan oluşan bir ağdır. Kuzeyden gelen akınlara karşı yapılması en güçlü çeldiricidir, çünkü seddin bilinen bir özelliğidir; ama 'tek bir yapı' imgesiyle bir karşıtlık kurmaz. Turistlerin gezmesi, çok sayıda işçi gerektirmesi ve gözetleme kulelerinin tepelere yapılması da bu imgeyi düzeltmez; yalnız ek bilgi verir." },
  { id: 'd05-t2', course: SO, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Even though not everyone can be a better-than-average driver, ----.',
    options: [
      'in many surveys, most people rate themselves as more skilled than the typical driver',
      'surveys of drivers usually rely on large and carefully selected groups of people',
      'averages are calculated by dividing a total by the number of cases that are counted',
      'some drivers are clearly much more careful on busy roads than others tend to be',
      'few people enjoy being told that their abilities are no more than merely ordinary',
    ], answer: 0,
    explain: "'Even though' (… e karşın) bir karşıtlık bekler: herkes ortalamanın üstünde bir sürücü olamaz, ama birçok ankette insanların çoğu kendini tipik sürücüden daha becerikli sayar. Herkes ortalamanın üzerinde olamaz; buna rağmen çoğunluk kendini öyle değerlendiriyor. Karşıtlık budur. Bazı sürücülerin ötekilerden daha dikkatli olması en güçlü çeldiricidir, çünkü sürücüler arasındaki farktan söz ediyor; ama ilk yarıyla aynı yöndedir. Anketlerin büyük gruplara dayanması, ortalamanın nasıl hesaplandığı ve insanların sıradan sayılmaktan hoşlanmaması da beklenmedik bir durum anlatmaz." },
  { id: 'd05-t3', course: SO, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['karşıtlık'],
    q: 'While Vincent van Gogh is now among the most celebrated painters in history, ----.',
    options: [
      'his paintings hang in major museums in many different countries',
      'he managed to sell very few of his works during his own lifetime',
      'his pictures are famous for their bold colours and thick brushwork',
      'numerous books and films have been made about his short life',
      'the letters he wrote to his brother have also been widely published',
    ], answer: 1,
    explain: "'While' burada karşıtlık kuruyor: van Gogh bugün tarihin en ünlü ressamları arasında, ama yaşarken eserlerinden çok azını satabildi. Resimlerinin büyük müzelerde asılı olması en güçlü çeldiricidir, çünkü onun bugünkü ününü anlatıyor; ama ilk yarıyla aynı yöndedir, karşıtlık kurmaz. Canlı renkleri, hakkında yapılan kitap ve filmler, kardeşine yazdığı mektupların yayımlanması da ünüyle uyumlu ek bilgilerdir." },
  { id: 'd05-t4', course: SO, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although laws making schooling compulsory were passed in many European countries during the nineteenth century, ----.',
    options: [
      'they were intended to produce citizens who could read and write',
      'reading, writing and arithmetic formed the core of the lessons',
      'literacy rates rose considerably in the decades that followed',
      'governments gradually took over the running of schools from churches',
      'many children went on working on farms or in factories for years',
    ], answer: 4,
    explain: "'Although' bir karşıtlık bekler: zorunlu eğitim yasaları çıkarılmıştı, ama uygulamada birçok çocuk yıllarca tarlalarda ya da fabrikalarda çalışmayı sürdürdü; yasa ile gerçek arasındaki bu fark karşıtlığı kurar. Okuryazarlığın sonraki on yıllarda artması en güçlü çeldiricidir, çünkü yasaların sonucuyla ilgilidir; ama yasalarla aynı yöndedir. Yasaların okuryazar yurttaş yetiştirme amacı, derslerin temeli ve okulların kiliseden devlete geçmesi de karşıt bir durum anlatmaz." },
  { id: 'd05-t5', course: SO, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: "Even though no one had spoken Latin as a first language for many centuries, ----.",
    options: [
      'it gradually developed into languages such as Italian and Spanish',
      'few people today can read the classical authors in the original',
      'it long remained the main language of European scholarship',
      'its spoken forms had begun to change across the different provinces',
      'most schools eventually stopped teaching it as a compulsory subject',
    ], answer: 2,
    explain: "'Even though' bir karşıtlık bekler: yüzyıllardır kimsenin anadili değildi, ama Latince uzun süre Avrupa biliminin başlıca dili olarak kaldı. Kimsenin konuşmadığı bir dilin yazıda bu kadar canlı kalması beklenmedik bir durumdur. Latincenin İtalyanca ve İspanyolca gibi dillere dönüşmesi en güçlü çeldiricidir, çünkü doğru bir bilgidir; ama tam da Latincenin neden kimsenin anadili olmadığını açıklar, karşıtlık kurmaz. Bugün az kişinin klasik yazarları okuyabilmesi, konuşma dilinin değişmesi ve okulların Latinceyi zorunlu ders olmaktan çıkarması da aynı yöndedir." },
  { id: 'd05-t6', course: SO, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although Socrates is widely seen as a founding figure of Western philosophy, ----.',
    options: [
      'he spent much of his life questioning people in the streets of Athens',
      'his habit of asking probing questions is still used in teaching today',
      'his pupil Plato later went on to found a famous school in Athens',
      'he wrote nothing himself, so his ideas reach us through his pupils',
      'several ancient writers, among them Plato, describe his trial in Athens',
    ], answer: 3,
    explain: "'Although' bir karşıtlık bekler: Sokrates Batı felsefesinin kurucu isimlerinden sayılır, ama kendisi hiçbir şey yazmadı ve görüşleri bize öğrencileri aracılığıyla ulaşır. Bir kurucunun tek satır yazı bırakmaması beklenmedik bir durumdur. Atina sokaklarında insanları sorgulaması en güçlü çeldiricidir, çünkü onun felsefe yapma biçimini anlatır; ama kurucu sayılmasıyla aynı yöndedir, karşıtlık kurmaz. Yargılanmasını Platon dahil birkaç antik yazarın anlatması da kurucu bir filozof için beklenen bir durumdur; bu yazarlar onun yazdıklarından değil, yargılanmasından söz eder. Soru sorma yönteminin bugün de kullanılması ve Platon'un okul kurması da onun önemini destekleyen bilgilerdir." },
  { id: 'd05-t7', course: SO, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Whereas psychology for much of the twentieth century focused mainly on mental illness and its treatment, ----.',
    options: [
      'many psychologists worked in hospitals that treated severe disorders',
      'conditions such as depression were described in great detail',
      'positive psychology studies strengths such as hope and gratitude',
      'this research led to the development of several effective therapies',
      'early researchers often relied on detailed studies of single patients',
    ], answer: 2,
    explain: "'Whereas' (oysa, -iken) iki şeyi karşılaştırır: yirminci yüzyıl psikolojisi çoğunlukla ruhsal hastalıklara ve tedavilerine odaklanırken, pozitif psikoloji umut ve minnet gibi güçlü yanları inceler. Bu karşılaştırma odaktaki farkı gösterir. Araştırmaların etkili tedavilere yol açması en güçlü çeldiricidir, çünkü ilk yarıdaki tedaviyle ilgilidir; ama aynı yaklaşımın sonucunu anlatır, karşıt bir yaklaşım değildir. Hastanelerde çalışmak, depresyonun ayrıntılı tanımlanması ve tek hasta çalışmaları da ilk yarıdaki odakla uyumludur." },
  { id: 'd05-t8', course: SO, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['karşıtlık'],
    q: '----, anthropologists have shown that in many societies gifts create obligations that the receiver is expected to repay.',
    options: [
      'Because people in such societies seldom exchange goods of any kind',
      'Although a gift may appear to be offered freely and without conditions',
      'Since most gifts there are given only on religious holidays and festivals',
      'Once the receiver has returned the gift with something of greater value',
      'So that their fieldwork could be finished more quickly than planned',
    ], answer: 1,
    explain: "Ana cümle armağanların karşılığı ödenmesi beklenen yükümlülükler doğurduğunu söylüyor. Bunun tersini düşündüren bir görünüş, yani armağanın özgürce ve koşulsuz veriliyor gibi görünmesi, 'although' ile bağlanınca karşıtlık kurar. Armağanların yalnız dinî bayramlarda verilmesi en güçlü çeldiricidir, çünkü armağandan söz ediyor; ama yükümlülük doğurmalarının nedeni olamaz. İnsanların neredeyse hiç mal alışverişi yapmaması armağan alışverişiyle çelişir. Armağanın daha değerli bir şeyle geri verilmesinden sonrası diye bir zaman bağı ve alan çalışmasını hızlandırma amacı da antropologların bulgusuyla bağ kurmaz." },
  { id: 'd05-t9', course: SO, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['neden-sonuç'],
    q: "Because the Black Death killed a large share of Europe's population in the mid-fourteenth century, ----.",
    options: [
      'landowners found it easier than ever to hire workers cheaply',
      'the demand for farm labour fell sharply across the continent',
      'the price of land rose because so many people wished to buy it',
      'food prices had already been falling for several decades',
      'surviving labourers were often able to demand higher wages',
    ], answer: 4,
    explain: "'Because' bir neden veriyor: veba Avrupa nüfusunun büyük bir kısmını öldürdü. Bunun mantıklı sonucu, işçi sayısı azaldığı için hayatta kalan işçilerin çoğu zaman daha yüksek ücret isteyebilmesidir. Toprak sahiplerinin ucuz işçiyi her zamankinden kolay bulması en güçlü çeldiricidir, çünkü iş gücüyle ilgilidir; ama işçi azalınca tersine olur. İş gücüne talebin düşmesi ve çok kişi toprak almak istediği için toprak fiyatının artması da azalan nüfusla çelişir. Gıda fiyatlarının veba öncesi on yıllarda düşmekte olması ise vebanın bir sonucu değildir; past perfect sonucu nedenden önceye koyar." },
  { id: 'd05-t10', course: SO, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['koşul'],
    q: 'If voting were made compulsory in every election, ----.',
    options: [
      'fewer people would probably go to the polls than do so now',
      'politicians would no longer need to persuade anyone to vote for them',
      'citizens would probably lose the right to choose between candidates',
      'turnout would probably rise, at least in the first few years',
      'turnout would probably have risen sharply at the previous election',
    ], answer: 3,
    explain: "Kök, gerçek olmayan bir şimdiki ya da gelecek durumu kuruyor (ikinci tip koşul: 'were made'); ana cümle 'would + V1' ister. Oy vermek zorunlu olsaydı, katılım büyük olasılıkla, en azından ilk yıllarda, artardı. Oy verenlerin şimdikinden azalması yapıca uyar ama mantığı ters çevirir. Siyasetçilerin kimseyi ikna etmesine gerek kalmaması da yapıca uyar; ama zorunluluk yalnız sandığa gitmeyi sağlar, hangi adayın seçileceğini değil. Yurttaşların adaylar arasında seçme hakkını yitirmesi de zorunlu oyla bağdaşmaz. 'Would have risen … at the previous election' ise geçmişe bakan üçüncü tip bir sonuçtur ve 'were made' ile uyuşmaz." },
  { id: 'd05-t11', course: SO, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['zaman'],
    q: 'As soon as news of the armistice reached the capital, ----.',
    options: [
      'crowds poured into the streets to celebrate the long-awaited news',
      'the soldiers had been fighting in the trenches for over four years',
      'the war will officially come to an end in the following spring',
      'the government is considering a new round of peace talks',
      'historians had long disagreed about the causes of the conflict',
    ], answer: 0,
    explain: "'As soon as' (… ır … maz) iki olayın hemen art arda olduğunu anlatır: ateşkes haberi başkente ulaşır ulaşmaz kalabalıklar haberi kutlamak için sokaklara döküldü. Askerlerin dört yıldan uzun süredir siperlerde savaşıyor olması en güçlü çeldiricidir, çünkü geçmiş zamanla kurulmuş ve savaşla ilgilidir; ama haberden önce süren bir durumu anlatır, haberin hemen ardından olan bir şeyi değil. 'Will … come to an end' ve 'is considering' geçmişteki bir olaya gelecek ya da şimdiki zamanla bakar. Tarihçilerin anlaşmazlığı da haberle bir zaman bağı kurmaz." },

  // ---------- 42–47: çeviri, İngilizceden Türkçeye ----------
  { id: 'd05-c1', course: SO, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'The painter, whose early works were rejected by the official exhibitions, later became one of the most influential figures of his generation.',
    options: [
      "İlk eserleri resmî sergilerce reddedilen ressam, daha sonra kuşağının en etkili isminin öğrencisi oldu.",
      "İlk eserleri resmî sergilerce reddedilen ressam, daha sonra kuşağının en etkili isimlerinden biri oldu.",
      "İlk eserlerini resmî sergilere hiç göndermeyen ressam, daha sonra kuşağının en etkili isimlerinden biri oldu.",
      "İlk eserleri resmî sergilerce reddedilen ressam, daha sonra kuşağının en etkili ismi oldu.",
      "İlk eserleri resmî sergilerde büyük ilgi gören ressam, daha sonra kuşağının en etkili ismi oldu.",
    ], answer: 1,
    explain: "Virgüllerle ayrılmış 'whose' cümleciği ressamı niteliyor: ilk eserleri resmî sergilerce reddedilen ressam. 'One of the most influential figures' ise 'en etkili isimlerinden biri' demektir; tek bir kişiden değil, bir gruptan söz eder. 'Reddedilen ressam, daha sonra kuşağının en etkili ismi oldu' reddi doğru veriyor, ama ressamı tek başına en etkili kişi yapıyor. 'Büyük ilgi gören ressam … en etkili ismi' hem reddi ilgiye hem grubu tek kişiye çeviriyor. 'En etkili isminin öğrencisi oldu' ressamın kendisini değil, öğrencisi olduğu birini en etkili kişi yapıyor. 'Eserlerini resmî sergilere hiç göndermeyen ressam' ise sonucu doğru verse de 'were rejected' (reddedildi) sözünü siliyor: reddedilmek için eserin gönderilmiş olması gerekir." },
  { id: 'd05-c2', course: SO, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['edilgen kanaat'],
    q: 'The city is believed to have been founded around three thousand years ago by traders who settled near the mouth of the river.',
    options: [
      "Kentin, yaklaşık üç bin yıl önce ırmak boyuna yerleşen tüccarlarca kurulduğu kesin olarak biliniyor.",
      "Yaklaşık üç bin yıl önce ırmak ağzının yakınına yerleşen tüccarların, kenti daha sonra terk ettiğine inanılıyor.",
      "Kentin, yaklaşık üç bin yıl önce ırmak boyuna yerleşen tüccarlarca kurulduğuna inanılıyor.",
      "Kentin, yaklaşık üç yüz yıl önce ırmak boyuna yerleşen tüccarlarca kurulduğuna inanılıyor.",
      "Kentin, yaklaşık üç bin yıl önce ırmak ağzının yakınına yerleşen tüccarlarca kurulduğuna inanılıyor.",
    ], answer: 4,
    explain: "'Is believed to have been founded' bir kanaat edilgenidir: kentin kurulduğuna inanılıyor; kuruluş bugünkü inançtan önce olduğu için 'to have been' kullanılmış. Kurucular ırmağın ağzına ('the mouth of the river') yakın bir yere yerleşen tüccarlardır. 'Irmak boyuna yerleşen tüccarlarca kurulduğuna inanılıyor' kanaati ve tarihi koruyor, ama ırmağın denize döküldüğü yerin yakınını ırmak kıyısında herhangi bir yere çeviriyor. 'Üç yüz yıl önce' diyen çeviri tarihi de yeri de değiştiriyor. 'Kesin olarak biliniyor' inancı kesin bilgiye çeviriyor; yer de ırmak boyu olmuş. 'Tüccarların, kenti daha sonra terk ettiğine inanılıyor' ise yeri doğru veriyor; kuruluşu terk edişe çeviriyor." },
  { id: 'd05-c3', course: SO, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: 'Research suggests that the more often people encounter a claim, the more likely they are to judge it to be true.',
    options: [
      "Araştırmalar, insanlar bir iddiayla ne kadar sık karşılaşırsa onu doğru bulma olasılıklarının o kadar arttığını düşündürüyor.",
      "Araştırmalar, insanlar bir iddiayla ne kadar sık karşılaşırsa onu başkalarıyla paylaşma olasılıklarının o kadar arttığını düşündürüyor.",
      "Araştırmalar, insanlar bir iddiayla ne kadar sık karşılaşırsa onu doğru bulma olasılıklarının o kadar azaldığını düşündürüyor.",
      "Araştırmalar, insanlar bir iddiayla ne kadar sık karşılaşırsa onu doğru bulma olasılıklarının o kadar azaldığını kanıtlıyor.",
      "Araştırmalar, insanlar bir iddiayla ne kadar sık karşılaşırsa onu başkalarıyla paylaşma olasılıklarının o kadar azaldığını düşündürüyor.",
    ], answer: 0,
    explain: "'The more often …, the more likely …' 'ne kadar sık …, o kadar …' demektir: bir iddiayla sık karşılaşıldıkça onu doğru bulma olasılığı artar. 'Suggests' temkinli bir fiildir: 'düşündürüyor'. 'Doğru bulma olasılıklarının o kadar azaldığını düşündürüyor' temkini koruyor, ama ilişkiyi tersine çeviriyor. 'Azaldığını kanıtlıyor' ilişkiyi ters kurmakla kalmıyor, 'suggests' sözünü kanıta çevirip temkini de atıyor. 'Başkalarıyla paylaşma olasılıklarının o kadar arttığını' artışı doğru veriyor; 'judge it to be true' (doğru bulma) yerine paylaşmadan söz ediyor. 'Paylaşma olasılıklarının o kadar azaldığını' ise konuyu da yönü de değiştiriyor." },
  { id: 'd05-c4', course: SO, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['isim cümleciği'],
    q: 'What surprised the archaeologists most was that the tomb had not been looted, even though it lay close to a busy ancient road.',
    options: [
      "Arkeologları en çok sevindiren şey, kalabalık bir antik kentin yakınında olmasına karşın mezarın yağmalanmamış olmasıydı.",
      "Arkeologları en çok sevindiren şey, işlek bir antik yolun yakınında olmasına karşın mezarın yağmalanmamış olmasıydı.",
      "Arkeologlar, işlek bir antik yolun yakınındaki mezarın yağmalanmadığını görünce pek şaşırmadı.",
      "Arkeologları en çok şaşırtan şey, işlek bir antik yolun yakınında olmasına karşın mezarın yağmalanmamış olmasıydı.",
      "Arkeologları en çok sevindiren şey, işlek bir antik yolun yakınında olmasına karşın mezarın bozulmamış olmasıydı.",
    ], answer: 3,
    explain: "'What surprised the archaeologists most' isim cümleciğidir: 'arkeologları en çok şaşırtan şey'. 'Even though it lay close to a busy ancient road' bir karşıtlık bildirir: mezar işlek bir antik yolun yakınında olmasına karşın yağmalanmamıştı. 'En çok sevindiren şey' ile başlayıp yolu ve yağmayı doğru veren çeviri, şaşkınlığı sevince çeviriyor. 'Kalabalık bir antik kentin yakınında' diyen çeviri, sevinçten söz etmesinin yanında işlek yolu bir kente çeviriyor. 'Mezarın bozulmamış olmasıydı' yağmalanmamayı genel bir sağlamlığa çeviriyor; duygu da sevinç. 'Arkeologlar … pek şaşırmadı' ise anlamı tersine çeviriyor: arkeologlar en çok bu duruma şaşırmıştı." },
  { id: 'd05-c5', course: SO, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['ortaç öbeği'],
    q: 'Founded in the nineteenth century to help workers who had lost their jobs, the society now offers a wide range of services to local families.',
    options: [
      "On dokuzuncu yüzyılda işini kaybeden işçilerin kurduğu dernek, bugün yerel ailelere birkaç temel hizmet sunuyor.",
      "On dokuzuncu yüzyılda işini kaybeden işçilerin kurduğu dernek, bugün yerel ailelere çok çeşitli hizmetler sunuyor.",
      "İşini kaybeden işçilere yardım için on dokuzuncu yüzyılda kurulan dernek, bugün yerel ailelere çok çeşitli hizmetler sunuyor.",
      "İşini kaybeden işçilere yardım için on dokuzuncu yüzyılda kurulan dernek, o zamanlar yerel ailelere birkaç temel hizmet sunuyordu.",
      "İşini kaybeden işçilere yardım için on dokuzuncu yüzyılda kurulan dernek, bugün yerel ailelere birkaç temel hizmet sunuyor.",
    ], answer: 2,
    explain: "Cümle bir ortaç öbeğiyle açılıyor: 'founded … to help workers who had lost their jobs', yani dernek işini kaybeden işçilere yardım için kurulmuş. Ana cümle bugünü anlatıyor: dernek bugün yerel ailelere 'a wide range of services' (çok çeşitli hizmetler) sunuyor. 'Bugün yerel ailelere birkaç temel hizmet sunuyor' kuruluşu doğru veriyor, ama hizmetlerin çeşitliliğini daraltıyor. 'İşini kaybeden işçilerin kurduğu dernek … çok çeşitli hizmetler' hizmetleri doğru veriyor; derneği, yardım edilen işçilerin kendisi kurmuş gibi gösteriyor. 'İşçilerin kurduğu dernek … birkaç temel hizmet' çevirisinde kuruluş da çeşitlilik de yanlış. 'O zamanlar … sunuyordu' ise 'now offers' sözünü geçmişe atıyor ve hizmetleri birkaç temel hizmete indiriyor." },
  { id: 'd05-c6', course: SO, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['isim-fiil ve mastar'],
    q: 'Learning to read music at an early age does not guarantee that a child will become a skilled musician.',
    options: [
      "Küçük yaşta çalgı çalmayı öğrenmek, bir çocuğun usta bir besteci olacağını garanti etmez.",
      "Küçük yaşta nota okumayı öğrenmek, bir çocuğun usta bir besteci olacağını garanti etmez.",
      "Küçük yaşta çalgı çalmayı öğrenmek, bir çocuğun usta bir müzisyen olacağını garanti etmez.",
      "Küçük yaşta çalgı çalmayı öğrenmek, bir çocuğun usta bir müzisyen olması için gerekli değildir.",
      "Küçük yaşta nota okumayı öğrenmek, bir çocuğun usta bir müzisyen olacağını garanti etmez.",
    ], answer: 4,
    explain: "'Does not guarantee that …' 'olacağını garanti etmez' demektir: küçük yaşta nota okumayı öğrenmek iyi bir başlangıç olabilir, ama sonucu güvenceye almaz. Özne '-mek' isim-fiiliyle kurulur: 'nota okumayı öğrenmek'. 'Çalgı çalmayı öğrenmek … usta bir müzisyen olacağını garanti etmez' yapıyı doğru kuruyor, ama 'read music' (nota okumak) sözünü çalgı çalmaya çeviriyor. 'Nota okumayı öğrenmek … usta bir besteci' notayı doğru veriyor; 'skilled musician' sözünü ise besteciye daraltıyor. 'Çalgı çalmayı … besteci' çevirisinde öğrenilen beceri de varılacak hedef de değişiyor. '… olması için gerekli değildir' ise garantiyi gerekliliğe çeviriyor: bir şeyin sonucu güvenceye almaması ile o sonuç için şart olmaması ayrı iddialardır." },

  // ---------- 48–53: çeviri, Türkçeden İngilizceye ----------
  { id: 'd05-c7', course: SO, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'Kökeni hâlâ tartışılan bu sözcük, ilk kez on altıncı yüzyıldan kalma bir el yazmasında görülüyor.',
    options: [
      "This word, whose origin is no longer debated, first appears in a manuscript dating from the seventeenth century.",
      "This word, whose origin is still debated, is thought to have been invented by a sixteenth-century author.",
      "This word, whose origin is still debated, first appears in a manuscript dating from the sixteenth century.",
      "This word, whose origin is still debated, last appears in a manuscript dating from the seventeenth century.",
      "This word, whose origin is still debated, first appears in a manuscript dating from the seventeenth century.",
    ], answer: 2,
    explain: "'Kökeni hâlâ tartışılan' bir sıfat cümleciğidir: 'whose origin is still debated'. 'İlk kez … görülüyor' 'first appears' ile, 'on altıncı yüzyıldan kalma' da 'dating from the sixteenth century' ile verilir. 'Still debated … first appears … seventeenth century' yalnız yüzyılda ayrılıyor: el yazmasını bir yüzyıl sonraya atıyor. 'Last appears' hem ilk görülmeyi son görülmeye çeviriyor hem yüzyılı değiştiriyor. 'No longer debated' tartışmanın bittiğini söylüyor; yüzyıl da on yedinci olmuş. 'Is thought to have been invented by a sixteenth-century author' ise yüzyılı korusa da el yazmasındaki ilk görülmeyi, sözcüğü bir yazarın uydurduğu kanısına çeviriyor." },
  { id: 'd05-c8', course: SO, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edilgen'],
    q: 'Kalenin surları on yedinci yüzyılda bir depremde büyük ölçüde yıkıldı ve hiçbir zaman tam olarak onarılmadı.',
    options: [
      "The walls of the castle were largely destroyed in an earthquake in the seventeenth century and were never fully repaired.",
      "The walls of the castle had been largely destroyed before an earthquake in the seventeenth century and were later fully repaired.",
      "The walls of the castle were largely destroyed in an earthquake in the seventeenth century and were never repaired.",
      "The walls of the castle were largely destroyed in an earthquake in the seventeenth century and were later fully repaired.",
      "The walls of the castle were partly destroyed in an earthquake in the seventeenth century and were later fully repaired.",
    ], answer: 0,
    explain: "Türkçe cümlede surlar on yedinci yüzyılda bir depremde büyük ölçüde ('largely') yıkılmış ve hiçbir zaman tam olarak onarılmamış ('were never fully repaired'). 'Largely destroyed in an earthquake … later fully repaired' yıkımı doğru veriyor, ama onarımı tamamlanmış gösteriyor. 'Partly destroyed' yıkımı küçültüyor; onarımı da tamamlanmış gösteriyor. 'Had been largely destroyed before an earthquake' yıkımı depremden önceye atıyor ve surları sonradan tümüyle onarılmış gösteriyor. 'Were never repaired' ise 'never' sözünü koruyup 'fully'yi atıyor: surların hiç onarılmadığını söylüyor, oysa Türkçe cümle onarımın tam olmadığını anlatıyor." },
  { id: 'd05-c9', course: SO, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Ticaret yolları değiştikçe, bir zamanlar zengin olan liman kentleri yavaş yavaş önemini yitirdi.',
    options: [
      "Although trade routes changed, port cities that had once been wealthy gradually lost their importance.",
      "As trade routes changed, port cities that had once been wealthy gradually lost their population.",
      "As trade routes changed, inland cities that had once been wealthy gradually lost their importance.",
      "As trade routes changed, port cities that had once been wealthy gradually lost their importance.",
      "As trade routes changed, port cities that had once been wealthy suddenly lost their importance.",
    ], answer: 3,
    explain: "'-dikçe' değişikliklerin birlikte ilerlediğini anlatır; İngilizcede 'as' ile verilir: ticaret yolları değiştikçe. 'Bir zamanlar zengin olan liman kentleri' 'port cities that had once been wealthy', 'yavaş yavaş önemini yitirdi' de 'gradually lost their importance'. 'Although' bu eşzamanlılığı cümlede olmayan bir karşıtlığa çeviriyor. 'Lost their population' önem yitirmeyi nüfus yitirmeye çeviriyor. 'Inland cities' liman kentlerini iç kesimdeki kentlere çeviriyor. 'Suddenly' de yavaş bir süreci ani bir olaya çeviriyor." },
  { id: 'd05-c10', course: SO, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['isim cümleciği'],
    q: 'Araştırmalar, bir kişinin kendini ne kadar mutlu hissettiğinin büyük ölçüde başkalarıyla kurduğu ilişkilerin niteliğine bağlı olduğunu düşündürüyor.',
    options: [
      "Research proves that how happy a person feels depends largely on the number of their relationships with others.",
      "Research suggests that how happy a person feels depends largely on the quality of their relationships with others.",
      "Research suggests that the quality of a person's relationships with others depends largely on how happy they feel.",
      "Research suggests that how happy a person feels depends largely on the number of their relationships with others.",
      "Research suggests that how happy a person feels depends partly on the number of their relationships with others.",
    ], answer: 1,
    explain: "'Ne kadar mutlu hissettiği' bir isim cümleciğidir: 'how happy a person feels'. Bu, 'büyük ölçüde' ('largely') başkalarıyla kurulan ilişkilerin niteliğine ('quality') bağlıdır; 'düşündürüyor' da temkinli 'suggests' ile karşılanır. 'Suggests … depends largely on the number of their relationships' temkini ve dereceyi koruyor, ama ilişkilerin niteliğini sayısına çeviriyor. 'Depends partly on the number' niteliği sayıya çevirdiği gibi 'largely' sözünü 'partly'ye indiriyor. 'Research proves' temkinli 'suggests' sözünü kanıta çeviriyor; ölçüt de ilişki sayısı olmuş. 'The quality of a person's relationships … depends largely on how happy they feel' ise niteliği doğru veriyor; bağımlılığı tersine çevirip ilişkilerin niteliğini mutluluğa bağlıyor." },
  { id: 'd05-c11', course: SO, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['ortaç öbeği', 'edilgen kanaat'],
    q: 'Yüzyıllardır kayıp sanılan tablo, geçen yıl küçük bir kilisenin deposunda bulundu.',
    options: [
      "Thought to have been lost for centuries, the painting was found last year in the storeroom of a large museum.",
      "Thought to have been lost for centuries, the painting was found last year in the storeroom of a large church.",
      "Thought to have been lost for centuries, the painting was found last year in the storeroom of a small museum.",
      "Thought to have been lost for decades, the painting was found last year in the storeroom of a small museum.",
      "Thought to have been lost for centuries, the painting was found last year in the storeroom of a small church.",
    ], answer: 4,
    explain: "'Yüzyıllardır kayıp sanılan' edilgen bir kanaat ortacıdır: 'thought to have been lost for centuries'. Ana cümle kesin bir olay: tablo geçen yıl küçük bir kilisenin deposunda bulundu ('was found … in the storeroom of a small church'). 'The storeroom of a small museum' bulunmayı ve süreyi doğru veriyor, ama kiliseyi müzeye çeviriyor. 'A large church' kiliseyi koruyor; küçük kiliseyi büyük bir kiliseye çeviriyor. 'A large museum' yeri de büyüklüğü de değiştiriyor. 'Lost for decades' ise yüzyılları on yıllara indiriyor; tabloyu da bir müzede buluyor." },
  { id: 'd05-c12', course: SO, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['koşul', 'üçüncü tip'],
    q: 'Öğrenciler ders notlarını kendi sözcükleriyle özetlemeseydi, sınavda bu kadar başarılı olamazlardı.',
    options: [
      "If the students had not summarised their textbooks in their own words, they could not have done so well in the course.",
      "If the students had not summarised their lecture notes in their own words, they could not have done so well in the course.",
      "If the students had not summarised their lecture notes in their own words, they could not have done so well in the exam.",
      "If the students had not summarised their textbooks in their own words, they would not have passed the exam.",
      "If the students had not summarised their textbooks in their own words, they could not have done so well in the exam.",
    ], answer: 2,
    explain: "'Özetlemeseydi … olamazlardı' geçmişle ilgili, gerçekleşmemiş bir koşuldur: öğrenciler aslında notlarını kendi sözcükleriyle özetledi ve başarılı oldu. İngilizcede üçüncü tip koşulla, koşul da sonuç da olumsuz kurulur: 'if … had not summarised their lecture notes …, they could not have done so well in the exam'. 'Had not summarised their textbooks … in the exam' koşulu ve sonucu doğru kuruyor, ama ders notlarını ders kitaplarına çeviriyor. 'Lecture notes … so well in the course' notları koruyor; sınavdaki başarıyı dersin genelindeki başarıya çeviriyor. 'Textbooks … in the course' çevirisinde özetlenen şey de başarının alanı da değişiyor. 'Would not have passed the exam' ise ders kitaplarından söz etmesinin yanında 'bu kadar başarılı olamazlardı' sözünü sınavı geçememeye çeviriyor; başarının derecesiyle sınavın sonucu ayrı şeylerdir." },

  // ---------- 54–59: paragraf tamamlama ----------
  { id: 'd05-p1', course: SO, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: "In April 1815, Mount Tambora, a volcano on an island in what is now Indonesia, erupted with enormous force. It released huge amounts of sulphur gases, which formed a haze high in the atmosphere, spread around the globe and reflected part of the sunlight back into space. ----. Snow fell in parts of North America in June, and harvests failed across much of Europe, driving up food prices. The year 1816 came to be remembered as 'the year without a summer'.",
    options: [
      'The island itself had been home to several small kingdoms before the eruption',
      'Eruptions on such a scale are, fortunately, extremely rare events',
      'As a result, the following year was unusually cold in many distant regions',
      'Scientists of the time quickly understood how the eruption had changed the weather',
      'Consequently, summers in Europe became warmer than in any earlier decade',
    ], answer: 2,
    explain: "Boşluktan önce bir neden var: patlamanın saldığı kükürtlü gazlar atmosferin yükseklerinde bir pus oluşturdu, dünyaya yayıldı ve güneş ışığının bir kısmını geri yansıttı. Boşluktan sonra da sonuçlar sıralanıyor: Kuzey Amerika'nın bazı yerlerinde haziranda kar, Avrupa'nın büyük kısmında ürün kaybı, 'yazsız yıl'. Boşluğa ikisini bağlayan cümle gelir: bu yüzden sonraki yıl uzak birçok bölgede alışılmadık biçimde soğuk geçti. Avrupa'da yazların daha sıcak olduğunu söyleyen cümle en güçlü çeldiricidir, çünkü 'Consequently' ile bir sonuç kuruyor; ama ışığın azalmasının, haziranda yağan karın ve ürün kaybının tersidir. Bilim insanlarının patlamayla hava arasındaki bağı çabucak anlaması parçada yok ve sonraki cümleye köprü kurmaz. Adadaki krallıklar ve bu büyüklükteki patlamaların seyrekliği de nedenle sonuç arasındaki bağı kesiyor." },
  { id: 'd05-p2', course: SO, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: "People tend to develop a liking for things simply because they are familiar with them. In a series of experiments in the 1960s, the psychologist Robert Zajonc showed participants unfamiliar words, Chinese-like characters and photographs of faces, some of them many times and others only once or twice. ----. This 'mere exposure effect' may help to explain why a song we disliked at first can grow on us after we have heard it several times.",
    options: [
      'Later, they tended to like best the items they had seen most often',
      'Most of the participants were students who could not read any Chinese at all',
      'Surprisingly, they preferred the items that they had been shown only once',
      'Many advertising companies now spend large sums on research into consumers',
      'Zajonc later turned to the question of how an audience affects performance',
    ], answer: 0,
    explain: "Paragraf bir savla açılıyor (tanıdık şeyleri daha çok severiz), sonra Zajonc'un deneyinin yöntemini anlatıyor; boşluktan sonraki 'This mere exposure effect' ise bir bulguya gönderme yapıyor. Boşluğa bu bulgu gelir: katılımcılar en sık gördükleri öğeleri en çok sevdiler. Yalnız bir kez gösterilen öğelerin yeğlenmesi en güçlü çeldiricidir, çünkü bir bulgu bildiriyor; ama paragrafın ilk cümlesindeki savla ve 'mere exposure effect' adıyla çelişir. Katılımcıların Çince bilmemesi yöntemle ilgili bir ayrıntıdır, ama 'This … effect' için bir bulgu sunmaz. Reklam şirketleri ve Zajonc'un sonraki çalışmaları da akışı bulgudan koparır." },
  { id: 'd05-p3', course: SO, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    q: '----. According to the anthropologist Robin Dunbar, the size of the outer layer of the brain in primates is linked to the size of the groups they live in. Applying this relationship to humans, he estimated that most people can maintain stable relationships with only about 150 others. Critics, however, argue that the statistical methods behind this figure leave room for a very wide range of possible numbers.',
    options: [
      'Humans are by far the most widely spread of all the primate species on Earth',
      'Critics have also questioned whether this number has any real meaning at all',
      'Most primates are active during the day and rest during the night',
      'Some scientists think there is a limit to how many people we can know well',
      'His later work has been used in planning offices and military units',
    ], answer: 3,
    explain: "Paragrafın geri kalanı tek bir düşünceyi işliyor: Dunbar'a göre insanın sürdürebileceği ilişki sayısının bir üst sınırı var (yaklaşık 150) ve bu sayı eleştiriliyor. Konuyu açan cümle, bazı bilim insanlarının yakından tanıyabileceğimiz insan sayısının bir sınırı olduğunu düşündüğünü söyleyen cümledir; Dunbar da bu bilim insanlarının bir örneği olarak geliyor. Eleştirmenlerin sayının anlamını sorgulaması en güçlü çeldiricidir, çünkü konuyla ilgilidir; ama 'also' ile henüz söz edilmemiş bir sayıya ve eleştiriye gönderme yapıyor, paragrafı açamaz. 'His later work' de tanıtılmamış birine gönderme yapıyor. İnsanların yayılışı ve primatların gece dinlenmesi grup büyüklüğü konusuna bağlanmaz." },
  { id: 'd05-p4', course: SO, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['gönderim'],
    q: "In 1974, farmers digging a well near the city of Xi'an in China came across fragments of clay figures. Excavations soon revealed thousands of life-size soldiers, buried more than two thousand years ago near the tomb of China's first emperor. ----. Unfortunately, much of this paint began to curl and flake away soon after it was exposed to the dry air, which is one reason why large parts of the site have been left unexcavated.",
    options: [
      'The emperor is also remembered for standardising weights, measures and coins',
      'Each of the soldiers appears to have been given a slightly different face',
      'Today the site attracts large numbers of visitors from around the world',
      'The figures had originally been carved from local stone rather than clay',
      'When first found, many figures still bore traces of bright colours',
    ], answer: 4,
    explain: "Boşluktan sonraki cümle 'this paint' (bu boya) diye başlıyor; demek ki boşluktaki cümle boyadan söz etmeli. Heykellerin ilk bulunduklarında üzerlerinde hâlâ parlak renk izleri taşıdığını söyleyen cümle bu göndermeyi karşılar. Her askerin biraz farklı bir yüzü olması en güçlü çeldiricidir, çünkü heykellerle ilgili doğru bir ayrıntıdır; ama boyadan söz etmediği için 'this paint' havada kalır. Heykellerin taştan oyulması ilk cümledeki kil parçalarıyla çelişir. İmparatorun ölçüleri standartlaştırması ve ziyaretçi sayısı da 'this paint' için bir dayanak sunmaz." },
  { id: 'd05-p5', course: SO, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'Maria Montessori, one of the first women in Italy to qualify as a doctor, opened her first school for young children in a poor district of Rome in 1907. ----. Instead of sitting in rows and listening to a teacher, the children chose their own activities and moved freely around the room. Visitors from many countries came to observe her classrooms, and within a few decades schools using her methods had opened around the world.',
    options: [
      'Rome had grown rapidly after becoming the capital of a united Italy',
      'Her approach differed sharply from that of most schools at the time',
      'In her schools, pupils had to stay silent and follow strict instructions',
      'Many teachers today still disagree about the best age to begin reading',
      'Decades later, she spent several years living and teaching in India',
    ], answer: 1,
    explain: "Boşluktan sonraki cümle 'Instead of sitting in rows …' ile bir karşılaştırma yapıyor: çocuklar sıralarda oturup öğretmeni dinlemek yerine kendi etkinliklerini seçiyordu. Bu karşılaştırmanın dayanağı, Montessori'nin yaklaşımının dönemin okullarının çoğundan keskin biçimde ayrıldığını söyleyen cümledir. Öğrencilerin sessiz kalıp katı talimatlara uyması en güçlü çeldiricidir, çünkü sınıf düzeninden söz ediyor; ama sonraki cümleyle çelişir: çocuklar tam tersine özgürce dolaşıyordu. Montessori'nin on yıllar sonra Hindistan'da yaşayıp ders vermesi onun hayatına dair bir bilgidir, ama anlatıyı 1907'den on yıllar sonrasına atlatır ve sıralarda oturan sınıfla bir karşılaştırma açmaz. Roma'nın büyümesi ve okumaya başlama yaşı da akışı yöntemden koparır." },
  { id: 'd05-p6', course: SO, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'When groups of people who share no common language need to communicate regularly, for example for trade, they sometimes develop a simplified form of speech known as a pidgin. A pidgin usually has a small vocabulary, drawn largely from one dominant language, and very little grammar, and nobody speaks it as a mother tongue. ----. Linguists call such a language a creole, and some creoles today have millions of speakers.',
    options: [
      'Most pidgins disappear once the trade that created them comes to an end',
      'For this reason, linguists have shown little interest in studying them',
      'Pidgins are therefore spoken mainly by children and young people',
      'When children grow up speaking one, it can become a full language',
      'Many English words were borrowed from French after the Norman Conquest',
    ], answer: 3,
    explain: "Boşluktan önce pidginin kimsenin anadili olmadığı, sonra 'such a language' (böyle bir dil) denilen kreol geliyor. Boşluğa pidginin nasıl bir anadile dönüşebileceğini anlatan cümle gelir: çocuklar onu konuşarak büyüyünce tam bir dile dönüşebilir; kreol de budur. Pidginlerin çoğunun ticaret bitince yok olması en güçlü çeldiricidir, çünkü pidginler hakkında akla yatkın bir bilgidir; ama yok olan bir dil 'such a language' ile kreol diye adlandırılamaz. Pidginleri çoğunlukla çocukların konuşması 'nobody speaks it as a mother tongue' ile çelişir. Dil bilimcilerin ilgisizliği sonraki cümleyle, Fransızcadan alınan sözcükler de konuyla bağ kurmaz." },

  // ---------- 60–65: akışı bozan cümle ----------
  { id: 'd05-b1', course: SO, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'The lighthouse of Alexandria, completed in the third century BC on the small island of Pharos, was counted among the Seven Wonders of the Ancient World.',
      'Ancient writers describe a very tall tower with a fire burning at its top, which helped ships find their way into the busy harbour.',
      'Many lighthouses today are fully automatic and are operated by electronic systems rather than by keepers.',
      'Over the following centuries, a series of earthquakes gradually damaged the tower until it finally collapsed.',
      'In the fifteenth century, some of its fallen stones were reused to build a fortress on the same spot.',
    ], answer: 2,
    explain: "Parça İskenderiye Feneri'nin öyküsünü anlatıyor: fener yapıldı ve dünyanın harikalarından sayıldı (I), tepesinde ateş yanan yüksek bir kuleydi (II), depremler onu yavaş yavaş yıktı (IV) ve taşlarının bir kısmı aynı yerde bir kale yapımında kullanıldı (V). IV'teki 'the tower' II'deki kuleye, V'teki 'its fallen stones' de IV'te yıkılan kuleye dayanıyor. III. cümle de deniz fenerlerinden söz ediyor, ama anlatıyı antik çağdaki tek bir fenerin öyküsünden bugünkü fenerlerin nasıl çalıştığına atlatıyor; II ile IV arasındaki zaman çizgisini kesiyor." },
  { id: 'd05-b2', course: SO, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    sentences: [
      'Confirmation bias is the tendency to notice and remember information that supports what we already believe.',
      "In statistics, 'sampling bias' refers to errors that arise from the way a sample is chosen.",
      'In one well-known type of study, people holding opposing views on a social issue were given the same mixed set of research findings to read.',
      'Rather than moving closer together, each group tended to judge the evidence supporting its own position as more convincing.',
      'Such results suggest that simply giving people more information does not always reduce disagreement.',
    ], answer: 1,
    explain: "Parça doğrulama yanlılığını anlatıyor: kavramın tanımı (I), karşıt görüşlü kişilere aynı bulguların okutulduğu bir çalışma (III), her grubun kendi görüşünü destekleyen kanıtı daha inandırıcı bulması (IV) ve bundan çıkan sonuç (V). V'teki 'Such results' IV'teki bulguya dayanıyor. II. cümle 'bias' sözcüğünü sürdürüyor, bu yüzden ilk bakışta akışa uyar gibi görünür; ama konuyu insan düşüncesindeki bir eğilimden istatistikte örneklem seçiminden doğan hatalara ('sampling bias', örneklem yanlılığı) kaydırıyor." },
  { id: 'd05-b3', course: SO, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Gentrification is the process by which wealthier newcomers move into a run-down urban neighbourhood.',
      'As new cafés and shops open and old buildings are renovated, property prices and rents in the area tend to rise.',
      'Supporters argue that the process brings investment, safer streets and better public services.',
      'In the nineteenth century, many such neighbourhoods had been built to house the workers of nearby factories.',
      'Critics reply that long-standing residents, many of them on low incomes, are often pushed out because they can no longer afford to stay.',
    ], answer: 3,
    explain: "Parça soylulaştırmayı ve onun üzerine süren tartışmayı anlatıyor: tanımı (I), kira ve fiyatların artması (II), destekleyenlerin savı (III) ve eleştirenlerin karşı savı (V). V'teki 'Critics reply' III'teki 'Supporters argue' ile bir tartışma çifti kuruyor. IV. cümle de aynı mahallelerden söz ediyor, ama anlatıyı bugünkü tartışmadan on dokuzuncu yüzyıla, mahallelerin nasıl kurulduğuna atlatıyor ve III ile V arasındaki karşılıklı sav düzenini kesiyor." },
  { id: 'd05-b4', course: SO, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['gönderim'],
    sentences: [
      'The piano was invented around 1700 by Bartolomeo Cristofori, an instrument maker working in Florence.',
      'Its great advantage over the harpsichord was that players could make notes louder or softer simply by changing how hard they struck the keys.',
      "This is reflected in its name, 'pianoforte', which combines the Italian words for 'soft' and 'loud'.",
      'Florence had been one of the leading centres of the Renaissance some two centuries earlier.',
      'Over the following century, composers increasingly wrote music that made full use of this new expressive range.',
    ], answer: 3,
    explain: "Parça piyanonun doğuşunu anlatıyor: Cristofori onu 1700 dolayında yaptı (I), en büyük üstünlüğü notaları hafif ya da güçlü çalabilmekti (II), bu üstünlük adına yansıdı (III) ve besteciler bu yeni anlatım genişliğini kullanan müzik yazdı (V). III'teki 'This' II'deki üstünlüğe, V'teki 'this new expressive range' de II ve III'te anlatılan yumuşak ve güçlü ses olanağına gönderme yapıyor. IV. cümle Floransa'yı sürdürüyor, ama konuyu çalgıdan kentin iki yüzyıl önceki Rönesans geçmişine kaydırıyor ve III ile V arasındaki gönderme bağını kesiyor." },
  { id: 'd05-b5', course: SO, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'For several decades, many studies reported that bilingual children did better than monolingual children on tasks that required them to switch their attention quickly.',
      'Researchers suggested that constantly managing two languages might train the general control systems of the brain.',
      'Language classes at school usually begin with basic vocabulary and simple greetings.',
      'More recently, however, several large studies have failed to find any such advantage.',
      'Many researchers now regard the question as open, and some suspect that positive results were simply more likely to be published.',
    ], answer: 2,
    explain: "Parça iki dilliliğin zihinsel bir üstünlük sağlayıp sağlamadığı tartışmasını anlatıyor: eski çalışmalar bir üstünlük bildirdi (I), araştırmacılar bunu iki dili yönetmenin beyni çalıştırmasıyla açıkladı (II), son büyük çalışmalar bu üstünlüğü bulamadı (IV) ve soru açık kaldı (V). IV'teki 'such advantage' I ve II'de anlatılan üstünlüğe dayanıyor. III. cümle de dil öğrenmekten söz ediyor, ama konuyu iki dilli çocukların zihinsel becerilerinden okuldaki dil derslerinin içeriğine kaydırıyor." },
  { id: 'd05-b6', course: SO, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      "In 'The Wealth of Nations', published in 1776, Adam Smith described a small workshop that made pins.",
      'In many modern factories, machines now carry out tasks that once required several separate workers.',
      'He observed that when the work was split into many separate steps, each done by a different worker, the workshop produced far more pins than if each person made whole pins alone.',
      'This division of labour, he argued, raised output because workers grew more skilled at a single task and wasted less time moving between jobs.',
      'Smith also warned, however, that endlessly repeating one simple task could leave workers little chance to develop their minds.',
    ], answer: 1,
    explain: "Parça Adam Smith'in toplu iğne atölyesi örneğini ve iş bölümü düşüncesini anlatıyor: Smith bir atölyeyi anlattı (I), işin adımlara bölünmesinin üretimi çok artırdığını gözledi (III), bunun nedenlerini açıkladı (IV) ve iş bölümünün bir sakıncasına dikkat çekti (V). IV'teki 'This division of labour' III'te anlatılan bölünmeye dayanıyor. II. cümle de üretimden ve işçilerden söz ediyor, ama anlatıyı Smith'in on sekizinci yüzyıldaki gözleminden bugünün fabrikalarına atlatıyor; III'teki 'He' de böylece gönderme yapacağı Smith'ten kopuyor." },

  // ---------- 66–80: okuma parçaları (5 × 3) ----------
  { id: 'd05-o1', course: SO, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Kralın büyük sayımı',
    text: "In 1085, nearly twenty years after he had conquered England, William I ordered a survey of his new kingdom. Royal officials were sent into most of its counties to find out who held the land, how many ploughs and animals it supported, how many people worked on it and how much it was worth. The results, compiled largely in 1086, were written up in Latin in two volumes. Contemporary accounts suggest that the work was carried out with remarkable thoroughness; one chronicler complained that not a single ox or cow had escaped the record. The king's motives are still debated. The survey clearly helped him to judge how much tax could be raised, but it may also have been meant to settle quarrels over land, many of which had arisen after so much property had passed from English to Norman hands. The record soon gained a fearsome reputation. By the twelfth century, people had begun to call it 'Domesday', comparing it to the Last Judgement, against whose verdict there could be no appeal. For historians, however, its value lies elsewhere. Covering more than thirteen thousand places, it offers an unusually detailed picture of an eleventh-century society, and many English towns and villages make their first appearance in writing in its pages.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the royal officials sent out in 1085 ----.',
        options: [
          'were told to leave small farm animals out of their reports',
          'wrote down their findings in English rather than in Latin',
          'gathered information on livestock, workers and land values',
          'visited only the counties lying closest to the royal court',
          'were given the power to settle every land quarrel they met',
        ], answer: 2,
        explain: "Parçaya göre görevliler toprağı kimin elinde tuttuğunu, kaç saban ve hayvan beslediğini, üzerinde kaç kişinin çalıştığını ve değerini öğrenmeye gönderildi. Doğru seçenek bunu başka sözcüklerle veriyor: hayvanlar, çalışanlar ve toprağın değeri. Toprak anlaşmazlıklarını çözme yetkisi en güçlü çeldiricidir, çünkü parçada anlaşmazlıklar geçiyor; ama orada sayımın bir amacı olabileceği söyleniyor, görevlilere böyle bir yetki verildiği değil. Küçük çiftlik hayvanlarını raporların dışında bırakma talimatı metinde yok; görevlilere böyle bir talimat verildiği söylenmiyor. Kayıtlar Latince yazıldı; görevliler de yalnız saraya yakın kontluklara değil, çoğu kontluğa gitti." },
      { konu: ['çıkarım'],
        q: "It can be inferred from the passage that the name 'Domesday' ----.",
        options: [
          'expressed a sense that the record could not be challenged',
          'was chosen by William I to frighten his Norman nobles',
          'referred to the exact day on which the survey was finished',
          'was invented by modern historians studying the volumes',
          'showed how much ordinary people admired its accuracy',
        ], answer: 0,
        explain: "Parçaya göre halk on ikinci yüzyılda kayda 'Domesday' demeye başladı ve onu kararına itiraz edilemeyen Kıyamet gününe benzetti. Buradan adın, kaydın sorgulanamayacağı duygusunu yansıttığı sonucu çıkar. Halkın kaydın doğruluğuna hayran olması en güçlü çeldiricidir, çünkü parça sayımın titizliğinden söz ediyor; ama ad bir hayranlığı değil, korkutucu bir ünü yansıtıyor. Adı Kral William seçmedi, bugünün tarihçileri de bulmadı; on ikinci yüzyılda halk verdi. Sayımın bittiği günle ilgili bir bilgi de parçada yok." },
      { konu: ['ana fikir'],
        q: 'What is the passage mainly about?',
        options: [
          'The military campaigns through which William won the English crown',
          'The replacement of English by Latin as the language of royal records',
          'The quarrels over land between English and Norman families',
          'The methods modern historians use to date medieval documents',
          'The aims, reputation and historical value of a medieval survey',
        ], answer: 4,
        explain: "Parça bir Orta Çağ sayımını üç yönden anlatıyor: neden yapıldığı (vergi ve belki toprak anlaşmazlıkları), nasıl bir ün kazandığı ('Domesday' adı) ve tarihçiler için değeri. Doğru seçenek bu üç bölümü birlikte kapsıyor. İngiliz ve Norman aileleri arasındaki toprak anlaşmazlıkları en güçlü çeldiricidir, çünkü parçada geçiyor; ama yalnız sayımın olası amaçlarından biri olarak anılıyor. Fethin savaşları, Latincenin İngilizcenin yerini alması ve belgelerin tarihlendirilmesi parçanın konusu değildir." },
    ] },

  { id: 'd05-o2', course: SO, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Bir dolarlık yalan',
    text: "In 1957 the American psychologist Leon Festinger proposed that people feel uncomfortable when they hold two ideas that conflict, or when their behaviour contradicts their beliefs. He called this state 'cognitive dissonance' and argued that people are motivated to reduce it, often by changing their attitudes rather than their behaviour. A well-known experiment carried out by Festinger and his colleague James Carlsmith put this idea to the test. Students first spent an hour on extremely dull tasks, such as turning pegs on a board. They were then asked to tell the next participant, who was in fact working with the researchers, that the tasks had been enjoyable. Some were paid one dollar for telling this lie, while others were paid twenty dollars, a considerable sum at the time. Afterwards, when asked how much they had really enjoyed the tasks, the students who had received just one dollar rated them more positively than those who had received twenty. Festinger and Carlsmith reasoned that twenty dollars gave the second group an obvious justification for lying, whereas the first group had no such excuse. To reduce the conflict between what they had said and what they had experienced, these students came to believe that the tasks had not been so boring after all. The theory has since been refined and challenged, but the idea that we sometimes adjust our beliefs to fit our actions remains influential.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'We learn from the passage that the person the students spoke to after finishing the tasks ----.',
        options: [
          'had already completed the same dull tasks earlier that day',
          'was responsible for paying the students for their lie',
          'was later asked to rate how enjoyable the tasks had been',
          'was secretly cooperating with the people running the study',
          'decided how much money each of the students would receive',
        ], answer: 3,
        explain: "Parçaya göre öğrencilerin konuştuğu 'sonraki katılımcı' aslında araştırmacılarla birlikte çalışan biriydi. Doğru seçenek bunu başka sözcüklerle veriyor: çalışmayı yürütenlerle gizlice iş birliği yapıyordu. Aynı sıkıcı işleri daha önce bitirmiş olması en güçlü çeldiricidir, çünkü ona 'katılımcı' deniyor; ama parça onun gerçek bir katılımcı olmadığını söylüyor. İşlerin ne kadar eğlenceli olduğunu sonradan değerlendirenler öğrencilerin kendisiydi. Parayı kimin ödediği ve miktara kimin karar verdiği de parçada yok." },
      { konu: ['ayrıntı'],
        q: "According to Festinger and Carlsmith's explanation, the students who were paid one dollar ----.",
        options: [
          'changed their behaviour rather than their attitudes',
          'had no outside reason that could justify their lie',
          'felt that one dollar was a fair reward for the work',
          'refused to describe the tasks as enjoyable at all',
          'knew that the other group had been paid far more',
        ], answer: 1,
        explain: "Festinger ve Carlsmith'e göre yirmi dolar ikinci gruba yalan söylemek için açık bir gerekçe veriyordu, bir dolar alanların ise böyle bir bahanesi yoktu. Doğru seçenek bunu söylüyor: yalanlarını haklı çıkaracak dışarıdan bir nedenleri yoktu. Davranışlarını değil tutumlarını değiştirmeleri parçanın anlattığı şeydir; davranışı değiştirdiklerini söyleyen seçenek bunu tersine çeviriyor ve en güçlü çeldiricidir. Bir doların adil bir ödül olduğunu düşünmeleri ve öteki grubun daha çok aldığını bilmeleri parçada yok. İşleri eğlenceli diye anlatmayı reddettikleri de söylenmiyor; tersine bu yalanı söylediler." },
      { konu: ['başlık'],
        q: 'Which of the following would be the best title for the passage?',
        options: [
          'Why a Smaller Reward Can Change Minds More',
          'How Psychologists Recruit Their Volunteers',
          'The Life and Career of Leon Festinger',
          'Boredom as a Cause of Dishonest Behaviour',
          'Why People Never Change Their Behaviour',
        ], answer: 0,
        explain: "Parçanın merkezinde, daha az para alan öğrencilerin sıkıcı işleri daha olumlu değerlendirdiği deney ve bunu açıklayan bilişsel çelişki kuramı var. Daha küçük bir ödülün düşünceleri neden daha çok değiştirebileceğini soran başlık bu merkezi yakalıyor. İnsanların davranışlarını hiç değiştirmediğini söyleyen başlık en güçlü çeldiricidir, çünkü kuram insanların çoğu zaman tutumlarını değiştirdiğini söylüyor; ama 'often' ve 'sometimes' sözlerini 'never'a çeviriyor. Gönüllü bulma yöntemleri ve Festinger'in hayatı parçanın konusu değil. Sıkıntının yalana yol açması da deneyin anlattığı şey değil; yalanı araştırmacılar istedi." },
    ] },

  { id: 'd05-o3', course: SO, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', title: 'Ortak meraların kaderi',
    text: "In 1968 the ecologist Garrett Hardin published an influential essay describing what he called 'the tragedy of the commons'. He asked readers to imagine a pasture open to all herders. Each herder gains the full benefit of adding another animal, while the cost of overgrazing is shared by everyone, so each has a reason to keep adding animals until the pasture is ruined. Hardin concluded that shared resources could be protected only by government control or by dividing them into private property. The political scientist Elinor Ostrom was not convinced. Studying cases from around the world, including alpine meadows in Switzerland, forests in Japan and irrigation systems in Spain and Nepal, she found that many communities had managed common resources successfully for generations, sometimes for centuries. These communities typically had clear rules about who could use the resource and how much, ways of monitoring one another and penalties that grew heavier for repeated offences. Crucially, the users themselves usually had a say in making and changing the rules. Ostrom did not claim that such arrangements always work; she identified the conditions under which they tend to succeed and those under which they tend to fail. In 2009 she became the first woman to receive the Nobel Memorial Prize in Economic Sciences, an award that recognised her work on how ordinary people can govern shared resources.",
    steps: [
      { konu: ['ayrıntı'],
        q: "In Hardin's imagined pasture, each herder keeps adding animals because ----.",
        options: [
          'the government pays herders a fee for every animal they own',
          'the pasture has been divided into private plots of equal size',
          'herders do not realise that the grass can eventually run out',
          'the other herders have agreed to remove some of their animals',
          'the profit from one more animal is his, but the harm is shared',
        ], answer: 4,
        explain: "Hardin'in örneğine göre her çoban eklediği hayvanın bütün yararını kendisi alır, aşırı otlatmanın bedeli ise herkese paylaştırılır. Doğru seçenek bunu başka sözcüklerle veriyor. Çobanların otun bir gün tükenebileceğini fark etmemesi en güçlü çeldiricidir, çünkü meranın tükenmesiyle ilgilidir; ama Hardin'in açıklaması bilgisizlik değil, yarar ve bedelin eşit olmayan dağılımıdır. Devletin hayvan başına para ödemesi ve öteki çobanların hayvan azaltma sözü parçada yok. Meranın özel parsellere bölünmesi ise Hardin'in önerdiği çözümlerden biridir, sorunun nedeni değil." },
      { konu: ['ayrıntı'],
        q: 'One feature that Ostrom found in communities that managed shared resources successfully was that ----.',
        options: [
          'outside experts drew up and enforced all of the rules',
          'anyone could take as much from the resource as they wished',
          'the people using the resource helped to shape the rules',
          'anyone who broke a rule was immediately driven out',
          'the resource was eventually divided into private plots',
        ], answer: 2,
        explain: "Parçaya göre başarılı topluluklarda kaynağı kullananlar kuralların konmasında ve değiştirilmesinde genellikle söz sahibiydi. Doğru seçenek bunu söylüyor. Kuralı çiğneyenin hemen kovulması en güçlü çeldiricidir, çünkü parçada cezalardan söz ediliyor; ama orada cezaların tekrarlanan suçlarda ağırlaştığı söyleniyor, ilk suçta kovulma değil. Kuralları dışarıdan uzmanların koyması kullanıcıların söz hakkıyla çelişir. Herkesin dilediği kadar alabilmesi açık kurallarla, kaynağın özel parsellere bölünmesi de toplulukların ortak yönetimiyle çelişir." },
      { konu: ['çıkarım'],
        q: "It can be inferred from the passage that Ostrom regarded Hardin's conclusion as ----.",
        options: [
          'proof that private ownership is always the best solution',
          'too pessimistic about what users can achieve by themselves',
          'accurate for pastures but mistaken in the case of forests',
          'neglecting the part played by governments in managing land',
          'based on the same cases that she herself went on to study',
        ], answer: 1,
        explain: "Hardin ortak kaynakların ancak devlet denetimiyle ya da özel mülke bölünerek korunabileceği sonucuna vardı. Ostrom 'ikna olmadı' ve birçok topluluğun ortak kaynakları kuşaklarca başarıyla yönettiğini gösterdi. Buradan Ostrom'un Hardin'in sonucunu kullanıcıların kendi başlarına başarabilecekleri konusunda fazla karamsar bulduğu çıkar. Hükümetlerin rolünü göz ardı ettiğini söyleyen seçenek en güçlü çeldiricidir, çünkü parçada hükümet denetimi geçiyor; ama Hardin tam da hükümet denetimini önerdi, onu göz ardı etmedi. Özel mülkün her zaman en iyisi olması Ostrom'un görüşünün tersidir. Meralar ile ormanlar arasında bir ayrım ve Hardin'in Ostrom'un örneklerini kullanması parçada yok." },
    ] },

  { id: 'd05-o4', course: SO, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Kanagawa açıklarında büyük dalga',
    text: "Few images are as widely recognised as 'The Great Wave off Kanagawa', in which a towering wave curls over three small boats while Mount Fuji appears tiny in the distance. It was designed by the Japanese artist Katsushika Hokusai around 1831, when he was already in his seventies, as part of a series of views of the famous mountain. Although it is often called a painting, it is in fact a woodblock print. Hokusai drew the design, specialist carvers cut it into blocks of wood, and printers then pressed paper onto the inked blocks, one block for each colour. Because the blocks could be used again and again, the image was produced in large numbers and sold cheaply, and it seems to have been bought mostly by ordinary city dwellers rather than wealthy collectors. One striking feature of the print is its deep blue, made with Prussian blue, a synthetic pigment that had been invented in Europe and had only recently become affordable in Japan. When Japan began trading more widely with the West in the 1850s and 1860s, prints like Hokusai's reached Europe in growing numbers. Artists there, among them Claude Monet and Vincent van Gogh, collected them eagerly, and their bold outlines, flat areas of colour and unusual viewpoints are widely thought to have influenced European painting.",
    steps: [
      { konu: ['ayrıntı'],
        q: "It is pointed out in the passage that 'The Great Wave off Kanagawa' ----.",
        options: [
          'was the work of several craftsmen at different stages',
          'was painted by Hokusai at an early stage of his career',
          'was produced in a few copies for wealthy collectors',
          'shows Mount Fuji as the largest element in the scene',
          'was coloured with the help of a single carved block',
        ], answer: 0,
        explain: "Parçaya göre yapıt bir resim değil tahta baskıdır: deseni Hokusai çizdi, uzman oymacılar tahtaya oydu, basımcılar da kâğıdı boyalı kalıplara bastırdı. Demek ki yapıt farklı aşamalarda çalışan birkaç zanaatkârın ürünüdür. Tek bir oyma kalıpla renklendirilmesi en güçlü çeldiricidir, çünkü kalıplardan söz ediyor; ama parçada her renk için ayrı bir kalıp kullanıldığı söyleniyor. Hokusai onu yetmişli yaşlarında yaptı, kariyerinin başında değil. Baskı çok sayıda ve ucuza basıldı; Fuji Dağı da sahnede küçücük görünüyor." },
      { konu: ['ayrıntı'],
        q: 'According to the passage, the deep blue of the print ----.',
        options: [
          'was a colour that Hokusai had invented himself',
          'came from a rare stone found near Mount Fuji',
          'was used only in copies intended for sale abroad',
          'was obtained from a pigment first made in Europe',
          'faded quickly once the prints were exposed to light',
        ], answer: 3,
        explain: "Parçaya göre koyu mavi, Avrupa'da icat edilmiş ve Japonya'da yeni ucuzlamış sentetik bir boya olan Prusya mavisiyle yapıldı. Doğru seçenek bunu söylüyor: rengi ilk kez Avrupa'da yapılmış bir boyadan geliyordu. Rengi Hokusai'nin kendisinin bulması en güçlü çeldiricidir, çünkü renk onun en çarpıcı yanlarından biri sayılıyor; ama parça boyanın Avrupa'da icat edildiğini söylüyor. Fuji yakınındaki nadir bir taş, yalnız yurt dışına satılan kopyalar ve ışıkta çabuk solma parçada geçmiyor." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that the growth of trade between Japan and the West ----.',
        options: [
          'made woodblock prints too costly for ordinary Japanese buyers',
          'persuaded Hokusai to adopt a European style of painting',
          'helped Japanese prints to influence artists far from Japan',
          "led to the production of Hokusai's series being halted",
          'brought several European painters to work in Japan',
        ], answer: 2,
        explain: "Parçaya göre Japonya 1850'ler ve 1860'larda Batı'yla daha geniş ticarete başlayınca Hokusai'ninkiler gibi baskılar Avrupa'ya giderek artan sayıda ulaştı; Monet ve van Gogh gibi sanatçılar onları topladı ve baskıların Avrupa resmini etkilediği düşünülüyor. Buradan ticaretin, Japon baskılarının Japonya'dan uzaktaki sanatçıları etkilemesine yol açtığı sonucu çıkar. Hokusai'yi Avrupa üslubuna yöneltmesi en güçlü çeldiricidir, çünkü Avrupa ile Japonya arasında bir etki anlatıyor; ama parçadaki etki tersi yöndedir ve ticaret Hokusai'nin baskıyı yapmasından yirmi yıldan uzun süre sonra genişledi. Baskıların pahalanması, dizinin durdurulması ve Avrupalı ressamların Japonya'da çalışması parçada yok." },
    ] },

  { id: 'd05-o5', course: SO, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', title: 'Mavinin iki adı',
    text: "Does the language we speak shape the way we think? In the first half of the twentieth century, the linguist Benjamin Lee Whorf argued that it does, claiming that speakers of languages with very different grammars experience the world in different ways. In its strongest form, the idea that language determines thought has few supporters today: people can clearly think about things for which their language has no single word. A weaker version, however, has received some experimental support, and colour offers a useful test. English has one basic word for blue, whereas Russian divides the same range into two basic terms, one for lighter and one for darker shades. In one study, Russian and English speakers were shown sets of blue squares and asked to pick out matching ones as quickly as possible. Russian speakers were faster when the two colours fell on opposite sides of their language's boundary between light and dark blue, while English speakers showed no such advantage. Interestingly, the Russian speakers' advantage disappeared when they were asked to repeat a string of numbers silently while doing the task, which suggests that language was actively involved in their decisions. Results like these do not show that speakers of different languages live in separate mental worlds, but they do suggest that language can subtly influence how quickly and easily we make certain distinctions.",
    steps: [
      { konu: ['ayrıntı'],
        q: "As stated in the passage, the strongest form of Whorf's idea ----.",
        options: [
          'has been confirmed by recent experiments on colour',
          'is rejected by most scholars working today',
          'was first put forward by linguists in Russia',
          'holds that language affects only reaction times',
          'was later abandoned by Whorf himself',
        ], answer: 1,
        explain: "Parçaya göre dilin düşünceyi belirlediğini söyleyen güçlü biçimin bugün az destekçisi var, çünkü insanlar dillerinde tek bir sözcüğü olmayan şeyleri de düşünebiliyor. Doğru seçenek bunu başka sözcüklerle veriyor: bugün çalışan bilim insanlarının çoğu onu kabul etmiyor. Renk deneyleriyle doğrulanması en güçlü çeldiricidir, çünkü parçada renk deneyi anlatılıyor; ama o deney yalnız daha zayıf biçimi destekliyor. Fikrin Rusya'daki dil bilimcilerden çıkması, yalnız tepki süresiyle ilgili olması ve Whorf'un kendisinin vazgeçmesi parçada yok." },
      { konu: ['ayrıntı'],
        q: 'In the colour experiment, the Russian speakers ----.',
        options: [
          'were slower than the English speakers on every trial',
          'had no separate words for light and dark shades of blue',
          'performed best when both shades had the same name',
          'were required to name each colour aloud as they saw it',
          'lost their advantage while busy with a verbal task',
        ], answer: 4,
        explain: "Parçaya göre Rusça konuşanlar, içlerinden bir rakam dizisi tekrarlarken görevi yaptıklarında üstünlüklerini yitirdi. Doğru seçenek bunu söylüyor: sözel bir işle meşgulken üstünlükleri kayboldu. Her rengi yüksek sesle adlandırmaları en güçlü çeldiricidir, çünkü deneyde dilin rolü tartışılıyor; ama parçada katılımcılardan renkleri adlandırmaları değil, eşleşen kareleri seçmeleri isteniyor. İngilizce konuşanlardan her denemede yavaş olmaları ve aynı adı taşıyan renklerde en iyi sonucu almaları parçanın tersidir. Rusçada açık ve koyu mavi için ayrı sözcük vardır." },
      { konu: ['yazarın tutumu'],
        q: "The author's conclusion about language and thought is that ----.",
        options: [
          'speakers of different languages probably live in separate mental worlds',
          'thought is likely to be completely independent of the language one speaks',
          'grammar probably matters much more than vocabulary in shaping perception',
          'language may slightly affect how easily we tell certain things apart',
          'colour words are likely to be essentially the same in every language',
        ], answer: 3,
        explain: "Yazar son cümlede temkinli bir sonuca varıyor: bu sonuçlar farklı dilleri konuşanların ayrı zihin dünyalarında yaşadığını göstermez, ama dilin bazı ayrımları ne kadar hızlı ve kolay yaptığımızı belli belirsiz etkileyebileceğini düşündürür. Doğru seçenek bu ölçülü sonucu veriyor. Ayrı zihin dünyalarında yaşamak en güçlü çeldiricidir, çünkü parçada geçiyor; ama yazar onu açıkça reddediyor. Düşüncenin dilden tümüyle bağımsız olması renk deneyiyle çelişir. Dil bilgisinin sözcük dağarcığından önemli olması ve renk sözcüklerinin her dilde aynı olması da parçanın söylediklerine ters düşer." },
    ] },
];

export const DENEME_05 = { id: 'deneme-05', sinav: 'YOKDIL', alan: 'sosyal', ad: 'Tam deneme 5 (YÖKDİL Sosyal)', sorular };
