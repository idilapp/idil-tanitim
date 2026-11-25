// iDil › Genel › Mikroplastikler.
// Tümü özgün: Claude yazdı (17 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (çoğaltma 3. tur planı §7.7 ve yerleşik bilgi; yalnız olgular, metin özgün):
// - Leo Baekeland 1907'de Bakelite'i geliştirdi; ilk tümüyle yapay plastik sayılır. Isıyla şekil alıp sertleşen, yeniden
//   erimeyen bir malzeme; telefon, radyo ve elektrik parçalarında kullanılması yerleşik bilgi. Kitlesel üretim İkinci Dünya
//   Savaşı'ndan sonra hızlandı (gp-z1);
// - dünyada üretilen plastik atığın yalnız küçük bir bölümü geri dönüştürülüyor (OECD, Global Plastics Outlook 2022, 2019
//   verisi: yaklaşık %9). Metinde "according to some estimates … no more than about a tenth" diye temkinli (gp-y1);
// - mikroplastik: 5 milimetreden küçük plastik parçası (ABD Ulusal Okyanus ve Atmosfer Dairesi, NOAA). Birincil (kozmetikteki
//   mikroboncuklar, üretim granülleri) ve ikincil (büyük parçaların ufalanması). Lastik aşınması ve yıkamada sentetik
//   giysilerden kopan lifler iki kaynak olarak anlatıldı; bu ikisinin birincil mi ikincil mi sayılacağı kaynaklara göre
//   değiştiği için parçada sınıflandırılmadı (gp-o1);
// - insan kanında bulunması (2022 çalışması) temkinli: "traces reported"; sağlığa etkisi henüz açık değil (gp-t3). Derin deniz
//   tabanı ve Arktik buzu (gp-p2);
// - Büyük Pasifik Çöp Alanı: üstünde yürünecek bir ada değil, suya dağılmış çok sayıda küçük parça; kütlenin önemli bir bölümü
//   balık ağları (Lebreton ve arkadaşları, 2018: yaklaşık %46; metinde "may make up nearly half", temkinli). Parçaların sayıca
//   çoğunun küçük olması ile kütlede ağların ağır basması birlikte doğru; parça yerini adla vermedi ("North Pacific") (gp-o2);
// - Türkiye'de plastik poşet 1 Ocak 2019'dan beri ücretli; AB'nin 2019 yönergesi pipet, çatal-bıçak gibi bazı tek kullanımlık
//   plastikleri 2021'den itibaren yasakladı (gp-b2; gp-d2'de tarih yok);
// - genel ve temkinli yazılan gözlemler: deniz kaplumbağalarının poşetleri denizanası sanabilmesi, deniz kuşlarının
//   yavrularına plastik taşıyabilmesi, laboratuvarda küçük deniz canlılarının mikroplastik aldığının görülmesi, bazı denizlerde
//   denizanası artışının balık azalmasıyla açıklanması ("some researchers think") (gp-b1); çöp sahalarının yağmur suyunu
//   toplayan katmanlarla döşenmesi (gp-p1); kâğıt pipetlerin çabuk yumuşadığı yakınması (gp-t1).
// Görev 20 (25 Kasım 2026): çeviri çeldiricileri biçim kestirmesine karşı yeniden kuruldu.

const T = 'taslak';
const C = 'genel';
const U = 'Mikroplastikler';

const cards = [
  // ---------- isim ----------
  { code: 'debris', title: 'döküntü, enkaz; (denizde, kıyıda) sürüklenmiş atık', pos: 'isim', cefr: 'C1', ipa: '/ˈdebriː/',
    text: "Bir şeyin kırılmasından, yıkılmasından ya da atılmasından geriye kalan dağınık parçalar. Sayılamaz isimdir; çoğul eki almaz: marine debris (deniz çöpü), space debris (uzay çöpü). Son 's' okunmaz.",
    example: 'Strong currents can carry floating debris thousands of kilometres from the coast where it entered the sea.',
    exampleTr: 'Güçlü akıntılar, yüzen atıkları denize girdikleri kıyıdan binlerce kilometre öteye taşıyabilir.',
    synonyms: ['rubble', 'wreckage'], family: [] },
  { code: 'particle', title: 'parçacık, zerre', pos: 'isim', cefr: 'B2', ipa: '/ˈpɑːtɪkl/',
    text: "Çok küçük bir madde parçası: dust particles (toz zerreleri), plastic particles (plastik parçacıklar). Fizikte atom altı parçacıklar için de kullanılır. Sıfatı 'particulate' (parçacık hâlindeki); hava kirliliği metinlerinde 'particulate matter' (partikül madde) diye geçer.",
    example: 'Under the microscope, the sand turned out to contain hundreds of brightly coloured plastic particles.',
    exampleTr: 'Mikroskop altında kumun yüzlerce parlak renkli plastik parçacık içerdiği ortaya çıktı.',
    synonyms: ['fragment', 'speck'], family: ['particulate'] },
  { code: 'landfill', title: 'çöp gömme sahası, düzenli depolama alanı; çöpü toprağa gömme', pos: 'isim', cefr: 'C1', ipa: '/ˈlændfɪl/',
    text: "Atıkların toprağa gömüldüğü yer ya da bu yöntemin kendisi: a landfill site (çöp sahası), send waste to landfill (atığı gömmeye göndermek). Geri dönüşüm ve yakmayla karşılaştırılarak sık geçer.",
    example: 'The town sends most of its household rubbish to a landfill about twenty kilometres away.',
    exampleTr: 'Kasaba, evsel çöpünün çoğunu yirmi kilometre kadar ötedeki bir çöp sahasına gönderiyor.',
    synonyms: ['rubbish tip', 'dump'], family: [] },
  { code: 'pollutant', title: 'kirletici (madde)', pos: 'isim', cefr: 'C1', ipa: '/pəˈluːtənt/',
    text: "Havayı, suyu ya da toprağı kirleten madde: air pollutants (hava kirleticileri). Sayılabilir isimdir. Fiili 'pollute' (kirletmek), kirliliğin kendisi 'pollution', kirleten kişi ya da kurum 'polluter'.",
    example: 'Once a pollutant has spread through a river, it is very difficult and expensive to remove.',
    exampleTr: 'Bir kirletici madde bir nehre yayıldıktan sonra onu temizlemek çok zor ve pahalıdır.',
    synonyms: ['contaminant', 'impurity'], family: ['pollute', 'pollution', 'polluter'] },
  { code: 'packaging', title: 'ambalaj, paketleme malzemesi', pos: 'isim', cefr: 'B2', ipa: '/ˈpækɪdʒɪŋ/',
    text: "Bir ürünü korumak, taşımak ya da satmak için sarıldığı malzeme: plastic packaging, excessive packaging (gereğinden fazla ambalaj). Sayılamaz isimdir. Kökü 'package' (paket); 'packed' (dolu, kalabalık) ayrı bir sözcüktür.",
    example: 'The biscuits came in so much packaging that the box was twice the size of the food inside.',
    exampleTr: 'Bisküviler öyle çok ambalaja sarılmıştı ki kutu, içindeki yiyeceğin iki katı büyüklükteydi.',
    synonyms: ['wrapping', 'packing'], family: ['package', 'packaged'] },
  // ---------- fiil ----------
  { code: 'shed', title: '(parça, lif, yaprak, tüy) dökmek, saçmak, salmak', pos: 'fiil', cefr: 'C1', ipa: '/ʃed/',
    text: "Bir şeyin kendi parçasını dışarı bırakması: trees shed their leaves (ağaçlar yaprak döker), the dog sheds hair (köpek tüy döker). Düzensiz fiildir: shed, shed, shed. Mecaz anlamı da var: shed light on (aydınlatmak, açıklığa kavuşturmak), shed jobs (işçi çıkarmak).",
    example: 'As the old plastic sign cracked in the sun, it began to shed small flakes onto the pavement below.',
    exampleTr: 'Eski plastik tabela güneşte çatladıkça alttaki kaldırıma küçük pullar dökmeye başladı.',
    synonyms: ['drop', 'release'], family: ['shedding'] },
  { code: 'ingest', title: '(yiyecek, madde) yutmak, vücuda almak', pos: 'fiil', cefr: 'C1', ipa: '/ɪnˈdʒest/',
    text: "Bir şeyi ağızdan vücuda almak; bilimsel ve tıbbi metinlerde 'swallow' ya da 'eat' yerine kullanılır. İstenmeden yutulan şeyler için de geçer: accidentally ingested. Adı 'ingestion'.",
    example: 'Young children sometimes ingest small objects, so toys with tiny parts carry a warning label.',
    exampleTr: 'Küçük çocuklar bazen küçük nesneleri yutar; bu yüzden küçük parçalı oyuncakların üzerinde uyarı etiketi bulunur.',
    synonyms: ['swallow', 'consume'], family: ['ingestion'] },
  { code: 'leach', title: '(kimyasal madde) sızmak, süzülüp çıkmak; sızdırmak', pos: 'fiil', cefr: 'C1', ipa: '/liːtʃ/',
    text: "Bir maddenin, içinden geçen sıvıyla çözünerek dışarı çıkması: chemicals leach out of / from plastic (kimyasallar plastikten sızar), leach into the soil (toprağa sızmak). Geçişli de kullanılır: water leaches minerals from the rock. Adı 'leaching'; çöp sahasından sızan kirli suya 'leachate' denir. Sülük anlamındaki 'leech' ile karıştırma.",
    example: 'Some chemicals can leach from plastic containers into food, especially when the food is hot.',
    exampleTr: 'Bazı kimyasallar, özellikle yiyecek sıcakken plastik kaplardan yiyeceğe sızabilir.',
    synonyms: ['seep', 'drain'], family: ['leaching', 'leachate'] },
  { code: 'recycle', title: 'geri dönüştürmek', pos: 'fiil', cefr: 'B1', ipa: '/ˌriːˈsaɪkl/',
    text: "Kullanılmış bir malzemeyi yeniden kullanılabilir hâle getirmek: recycle glass and paper. Adı 'recycling' (geri dönüşüm): a recycling bin (geri dönüşüm kutusu). Sıfatları 'recyclable' (geri dönüştürülebilir) ve 'recycled' (geri dönüştürülmüş).",
    example: 'Our building now recycles glass and paper, but thin plastic film still has to go in the ordinary bin.',
    exampleTr: 'Binamız artık camı ve kâğıdı geri dönüştürüyor ama ince plastik film hâlâ normal çöpe atılmak zorunda.',
    synonyms: ['reprocess', 'reclaim'], family: ['recycling', 'recyclable', 'recycled'] },
  { code: 'dump', title: '(çöp, atık) gelişigüzel atmak, boşaltmak', pos: 'fiil', cefr: 'B2', ipa: '/dʌmp/',
    text: "İstenmeyen bir şeyi, çoğu zaman uygunsuz bir yere ve özensizce atmak: dump rubbish in the woods. Adı 'dumping' (yasa dışı boşaltma): illegal dumping. İsim olarak 'çöplük' anlamına da gelir.",
    example: 'The company was fined after it was caught dumping waste into a stream at night.',
    exampleTr: 'Şirket, geceleri bir dereye atık boşaltırken yakalanınca para cezasına çarptırıldı.',
    synonyms: ['discard', 'tip'], family: ['dumping'] },
  // ---------- sıfat ----------
  { code: 'single-use', title: 'tek kullanımlık', pos: 'sıfat', cefr: 'B2', ipa: '/ˌsɪŋɡl ˈjuːs/',
    text: "Bir kez kullanılıp atılmak üzere yapılmış: single-use plastics (tek kullanımlık plastikler), single-use cups. İsimden önce tireyle yazılır. Çevre düzenlemelerinde sık geçen bir terimdir.",
    example: 'The festival asked visitors to bring their own cups instead of using single-use ones.',
    exampleTr: 'Festival, ziyaretçilerden tek kullanımlık bardak kullanmak yerine kendi bardaklarını getirmelerini istedi.',
    synonyms: ['disposable', 'throwaway'], family: [] },
  { code: 'microscopic', title: 'mikroskobik, gözle görülemeyecek kadar küçük', pos: 'sıfat', cefr: 'C1', ipa: '/ˌmaɪkrəˈskɒpɪk/',
    text: "Ancak mikroskopla görülebilecek kadar küçük: microscopic organisms. Abartma için de kullanılır: microscopic print (okunamayacak kadar küçük yazı). Kökü 'microscope' (mikroskop).",
    example: 'Drinking water can look perfectly clear and still contain microscopic organisms.',
    exampleTr: 'İçme suyu tertemiz görünüp yine de mikroskobik canlılar içerebilir.',
    synonyms: ['minute', 'tiny'], family: ['microscope', 'microscopically'] },
  { code: 'toxic', title: 'zehirli', pos: 'sıfat', cefr: 'B2', ipa: '/ˈtɒksɪk/',
    text: "Canlılara zarar veren, zehir içeren: toxic chemicals, toxic waste (zehirli atık). Mecaz anlamı da yaygın: a toxic relationship. Adı 'toxicity' (zehirlilik); zehirli maddenin kendisi 'toxin'.",
    example: 'Some cleaning products give off toxic fumes when they are mixed together.',
    exampleTr: 'Bazı temizlik ürünleri birbirine karıştırıldığında zehirli buhar çıkarır.',
    synonyms: ['poisonous', 'harmful'], family: ['toxicity', 'toxin'] },
  { code: 'pervasive', title: 'her yere yayılmış, her yerde var olan', pos: 'sıfat', cefr: 'C1', ipa: '/pəˈveɪsɪv/',
    text: "Bir yerin ya da bir şeyin her yanına sinmiş, çoğu zaman istenmeyen bir durum için: a pervasive smell, pervasive corruption. 'Common'dan güçlüdür; kaçınılmaz bir yayılmayı anlatır. Fiili 'pervade' (her yanına yayılmak).",
    example: 'The smell of smoke was so pervasive that it stayed in our clothes for days after the fire.',
    exampleTr: 'Duman kokusu her yere öyle sinmişti ki yangından sonra günlerce giysilerimizden çıkmadı.',
    synonyms: ['widespread', 'ubiquitous'], family: ['pervade', 'pervasiveness'] },
  // ---------- zarf ----------
  { code: 'globally', title: 'dünya genelinde, küresel olarak', pos: 'zarf', cefr: 'B2', ipa: '/ˈɡləʊbəli/',
    text: "Bütün dünyayı kapsayacak biçimde: globally, sales have fallen (dünya genelinde satışlar düştü). Sıfatı 'global'. 'Worldwide' ile yakın anlamlıdır; 'locally' (yerel olarak) ile karşılaştırılır.",
    example: 'The disease is rare globally, but it is quite common in a few mountain villages.',
    exampleTr: 'Hastalık dünya genelinde nadirdir ama birkaç dağ köyünde oldukça yaygındır.',
    synonyms: ['worldwide', 'internationally'], family: ['global'] },
  { code: 'irreversibly', title: 'geri dönülmez biçimde, kalıcı olarak', pos: 'zarf', cefr: 'C1', ipa: '/ˌɪrɪˈvɜːsəbli/',
    text: "Bir daha eski hâline döndürülemeyecek biçimde: irreversibly damaged (onarılamaz biçimde zarar görmüş). Sıfatı 'irreversible'. Çevre ve tıp metinlerinde sık geçer.",
    example: 'Once the old forest had been cleared for farming, the local climate changed irreversibly.',
    exampleTr: 'Eski orman tarım için kesildikten sonra bölgenin iklimi geri dönülmez biçimde değişti.',
    synonyms: ['permanently', 'for good'], family: ['irreversible'] },
  // ---------- öbek fiil ----------
  { code: 'end up', title: '(sonunda) bir yere varmak, kendini bir durumda bulmak', pos: 'öbek fiil', cefr: 'B1', ipa: '/ˌend ˈʌp/',
    text: "Çoğu zaman planlamadan ya da beklenmedik biçimde bir yere varmak ya da bir duruma düşmek: end up in hospital, end up doing something. Ardından yer (in, at), -ing ya da sıfat gelebilir.",
    example: 'We took a wrong turn in the fog and ended up in a village we had never heard of.',
    exampleTr: 'Siste yanlış yola saptık ve kendimizi adını hiç duymadığımız bir köyde bulduk.',
    synonyms: ['finish up', 'land up'], family: [] },
  { code: 'throw away', title: 'atmak, çöpe atmak', pos: 'öbek fiil', cefr: 'B1', ipa: '/ˌθrəʊ əˈweɪ/',
    text: "İstenmeyen ya da kullanılmış bir şeyi çöpe atmak: throw away old newspapers. Nesne iki sözcüğün arasına da girebilir: throw it away. Tek sözcük olarak 'throwaway' sıfatı 'atılıp geçilen, tek kullanımlık' demektir.",
    example: "Don't throw away the jar; we can wash it and keep buttons in it.",
    exampleTr: 'Kavanozu atma; yıkayıp içinde düğme saklayabiliriz.',
    synonyms: ['discard', 'get rid of'], family: ['throwaway'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'gp-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['debris', 'landfill'],
    level: 'orta', cefr: 'C1', konu: ['isim'],
    q: 'After the storm, volunteers spent the whole morning clearing ---- from the beach, including broken branches, plastic bottles and tangled fishing line.',
    options: ['landfill', 'shelter', 'harvest', 'debris', 'evidence'], answer: 3,
    explain: "Fırtınadan sonra kumsaldan temizlenen şeyler sayılıyor: kırık dallar, plastik şişeler, birbirine dolanmış misina. Bunların ortak adı 'debris' (döküntü, sürüklenmiş atık). 'Landfill' (çöp gömme sahası) atıkların götürüldüğü yerin adıdır; kumsaldan toplanan dağınık parçaları anlatmaz. 'Shelter' (barınak), 'harvest' (hasat) ve 'evidence' (kanıt) sayılan nesneleri kapsamaz." },

  { id: 'gp-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['shed', 'ingest'],
    level: 'zor', cefr: 'C1', konu: ['fiil'],
    q: 'Cheap plastic toys that are left outside all summer soon become brittle and begin to ---- tiny fragments, which the wind then scatters across the garden.',
    options: ['ingest', 'absorb', 'shed', 'repair', 'store'], answer: 2,
    explain: "Güneşte kırılganlaşan oyuncaklar küçük parçalar bırakıyor ve rüzgâr bu parçaları bahçeye dağıtıyor; parçalar oyuncaktan dışarı çıkıyor. Bir şeyin kendi parçalarını dökmesi, saçması 'shed' ile anlatılır. 'Ingest' (yutmak) canlıların bir şeyi vücuda almasıdır; oyuncak bir şey yutmaz. 'Absorb' (emmek) yönü ters çevirir: parçaları içine alan bir oyuncak onları rüzgâra bırakamaz. 'Repair' (onarmak) ve 'store' (saklamak) kırılganlaşan oyuncağın parçalanmasıyla bağdaşmaz." },

  { id: 'gp-k3', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['end up', 'throw away'],
    level: 'kolay', cefr: 'B1', konu: ['öbek fiil'],
    q: 'Litter that is dropped in city streets is often washed into drains by the rain and may ---- in the sea, many kilometres away.',
    options: ['throw away', 'give up', 'take off', 'end up', 'run out'], answer: 3,
    explain: "Sokağa atılan çöp yağmurla kanalizasyona sürükleniyor ve sonunda kilometrelerce ötede denize varabiliyor. 'Sonunda bir yere varmak' anlamı 'end up' ile verilir; ardından gelen 'in the sea' de buna uyar. 'Throw away' (çöpe atmak) nesne ister; çöp kendini atmaz. 'Give up' (vazgeçmek), 'take off' (havalanmak, çıkarmak) ve 'run out' (tükenmek) çöpün denize ulaşmasını anlatmaz." },

  // ---------- dil bilgisi ----------
  { id: 'gp-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['recycle'],
    level: 'orta', cefr: 'B2', konu: ['bağlantı zarfı'],
    q: 'Please rinse out yoghurt pots before you put them in the recycling bin; ----, the leftover food may spoil the paper and card in the same bin.',
    options: ['instead', 'therefore', 'nonetheless', 'otherwise', 'likewise'], answer: 3,
    explain: "Cümle bir öneri veriyor (yoğurt kaplarını çalkalayın) ve öneriye uyulmazsa ne olacağını söylüyor: artan yiyecek aynı kutudaki kâğıdı ve kartonu bozabilir. 'Aksi hâlde, yoksa' anlamı 'otherwise' ile kurulur. 'Therefore' (bu yüzden) kapları çalkalamayı yiyeceğin kâğıdı bozmasının nedeni yapar; mantık ters döner. 'Instead' (onun yerine) ve 'likewise' (aynı biçimde) iki bölüm arasındaki koşul ilişkisini kurmaz. 'Nonetheless' (yine de) beklentiye aykırı bir durum bildirir; çalkalanan kaplardan sonra bozulma beklenmez." },

  { id: 'gp-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['edilgen'],
    q: 'Most plastic ---- from oil or natural gas, so making it also adds to carbon emissions.',
    options: ['makes', 'is made', 'is making', 'has made', 'made'], answer: 1,
    explain: "Plastik bir şey yapmıyor; petrolden ya da doğal gazdan yapılıyor. Özne eylemi yapan değil, eylemden etkilenen olduğu için edilgen gerekir; genel bir bilgi anlatıldığı için de geniş zaman: 'is made'. 'Makes', 'is making' ve 'has made' etken yapılardır; plastiği bir şeyi üreten yapar. Yalnız 'made' ise cümleyi yüklemsiz bırakır." },

  { id: 'gp-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['so/such … that'],
    q: 'Some of the fibres in the water samples were ---- thin ---- the researchers had to use a microscope to count them.',
    options: ['so / that', 'such / that', 'too / to', 'as / as', 'enough / so'], answer: 0,
    explain: "Cümle bir derece ve onun sonucunu bildiriyor: lifler o kadar inceydi ki araştırmacılar onları saymak için mikroskop kullanmak zorunda kaldı. Sıfatın (thin) önünde bu yapı 'so … that' ile kurulur. 'Such … that' sıfattan sonra bir isim ister (such thin fibres that). 'Too … to' ardından mastar ister; tam bir cümleyle kurulmaz. 'As … as' bir karşılaştırma yapar, sonuç bildirmez. 'Enough' sıfattan sonra gelir ve 'so' ile birlikte kullanılmaz." },

  // ---------- boşluklu metin ----------
  { id: 'gp-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: ['packaging', 'throw away', 'pollutant'],
    level: 'orta', cefr: 'B2', title: "Bakelite'ten her yere",
    text: "The first fully synthetic plastic was developed in 1907 by the chemist Leo Baekeland, who called it Bakelite. (1) ---- earlier plastics, which were made partly from natural materials, Bakelite was produced entirely from chemicals, and once it had been shaped and heated, it kept its form permanently. Because it did not conduct electricity and could survive high temperatures, it became a popular (2) ---- for telephones, radios and electrical parts. For several decades, however, plastic goods remained a fairly small part of everyday life. Mass production only took off after the Second World War, (3) ---- new and cheaper methods made them affordable for most households. Since then, output has grown enormously, and a large share of it now goes into packaging, much of which (4) ---- after being used only once. For a long time, the fact that plastic lasts so well was seen purely as an advantage. (5) ----, that same durability is now the main reason why plastic waste is so hard to deal with.",
    steps: [
      { konu: ['edat'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['Despite', 'Due to', 'Apart from', 'Unlike', 'Instead of'], answer: 3,
        explain: "Cümle Bakelite'i önceki plastiklerle karşılaştırıyor: önceki plastikler kısmen doğal malzemelerden yapılıyordu, Bakelite ise tümüyle kimyasallardan üretildi. İki şey arasındaki farkı 'Unlike' (… -den farklı olarak) bildirir. 'Despite' (-e rağmen) önceki plastikleri Bakelite'in üretimine bir engel gibi gösterir. 'Due to' (… yüzünden) farkı bir neden-sonuç ilişkisine çevirir. 'Apart from' (… dışında) ve 'Instead of' (… yerine) karşılaştırmayı kurmaz." },
      { konu: ['kelime', 'isim'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['pollutant', 'material', 'remedy', 'fuel', 'reward'], answer: 1,
        explain: "Elektrik iletmeyen ve yüksek sıcaklığa dayanan Bakelite, telefon, radyo ve elektrik parçaları için sevilen bir malzeme oldu: 'material'. 'Pollutant' (kirletici madde) plastiğin bugünkü sorununu çağrıştırsa da cümle Bakelite'in neden tercih edildiğini anlatıyor; 'popular' ile çelişir. 'Remedy' (çare, ilaç), 'fuel' (yakıt) ve 'reward' (ödül) telefonların ve radyoların yapıldığı şeyi anlatmaz." },
      { konu: ['bağlaç'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['as', 'unless', 'although', 'so that', 'whereas'], answer: 0,
        explain: "Kitlesel üretimin savaştan sonra hızlanmasının nedeni veriliyor: yeni ve daha ucuz yöntemler plastik eşyaları çoğu hanenin alabileceği hâle getirdi. Neden bildiren bağlaç 'as'. 'Although' (-e rağmen) ucuzlamayı üretimin artmasına engelmiş gibi gösterir; mantık ters döner. 'Unless' (-medikçe) koşul, 'so that' (-sın diye) amaç bildirir. 'Whereas' (oysa) iki ayrı durumu karşılaştırır; burada karşılaştırılan bir şey yok." },
      { konu: ['edilgen'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['throws away', 'has thrown away', 'was throwing away', 'would throw away', 'is thrown away'], answer: 4,
        explain: "'Much of which' ambalajın büyük bölümünü gösteriyor; ambalaj kimseyi atmaz, atılan şeydir. Bu yüzden edilgen gerekir; bugünkü genel bir durum anlatıldığı için de geniş zaman: 'is thrown away'. 'Throws away', 'has thrown away', 'was throwing away' ve 'would throw away' etkendir; ambalajı bir şeyi atan yapar. 'Was throwing away' ayrıca cümleyi geçmişe taşır, oysa 'now goes into' bugünü anlatıyor." },
      { konu: ['bağlantı zarfı'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['Similarly', 'For instance', 'Therefore', 'However', 'In addition'], answer: 3,
        explain: "Önceki cümleye göre plastiğin dayanıklılığı uzun süre yalnız bir üstünlük sayıldı. Boşluklu cümle bunun tersini söylüyor: aynı dayanıklılık bugün plastik atığın baş sorunu. Bu karşıtlık 'However' (ancak) ile kurulur. 'Therefore' (bu yüzden) üstünlük sayılmayı sorun olmanın nedeni yapar. 'Similarly' (benzer biçimde) ve 'In addition' (ayrıca) aynı yönde bir ekleme bekler. 'For instance' (örneğin) önceki cümleye bir örnek getirmez." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'gp-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Many cafés have replaced plastic straws with paper ones, ----.',
    options: [
      'because paper straws are said to cost a great deal more than plastic ones',
      'so that their customers would stop asking for a straw with every drink',
      'although paper is thought to be kinder to the environment than plastic',
      'even though some customers complain that paper straws go soft too quickly',
      'unless their customers ask specifically for a straw that is made of paper',
    ], answer: 3,
    explain: "Kafeler plastik pipetleri kâğıt pipetle değiştirmiş; değişikliğe rağmen süren bir sorun bu cümleyi anlamlı biçimde tamamlar: bazı müşteriler kâğıt pipetin çabuk yumuşadığından yakınıyor. Kâğıt pipetlerin çok daha pahalı olması değişikliğin nedeni olamaz. Müşteriler pipet istemeyi bıraksın diye pipet değiştirmek mantıksız. 'Although' ile kurulan seçenek de karşıtlık bağlacı taşıyor ama kâğıdın çevreye daha az zarar vermesi değişikliğe aykırı değil, onun gerekçesidir; karşıtlık yanlış yere kurulmuş. Müşteri kâğıt pipet istemedikçe kâğıda geçmek de anlamsız bir koşuldur." },

  { id: 'gp-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['recycle'],
    level: 'kolay', cefr: 'B1', konu: ['neden-sonuç'],
    q: '----, so the town council has put more recycling bins in the park.',
    options: [
      'People often left their empty bottles lying on the grass',
      'Very few people visit the park during the winter months',
      'The recycling bins in the park were hardly ever used',
      'Volunteers already clean the whole park every morning',
      'Drinks in plastic bottles are no longer sold near the park',
    ], answer: 0,
    explain: "'So' (bu yüzden) ile başlayan bölüm bir sonuç: belediye parka daha çok geri dönüşüm kutusu koymuş. Boşluğa bu kararın nedeni gelir: insanlar boş şişelerini çoğu zaman çimlerin üstüne bırakıyordu. Parkı kışın az kişinin ziyaret etmesi, kutuların neredeyse hiç kullanılmaması ve parkın her sabah gönüllülerce temizlenmesi daha çok kutu koymayı gerektirmez. Parkın yakınında artık plastik şişede içecek satılmaması da kutu ihtiyacını azaltır." },

  { id: 'gp-t3', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['pervasive'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: '----, scientists still know relatively little about what effect, if any, they have on human health.',
    options: [
      'Because microplastics have never been detected anywhere inside the human body',
      'Even though the health effects of microplastics are by now well understood',
      'Although microplastics have proved pervasive, with traces reported even in blood',
      'Since researchers have already carried out every study needed on the subject',
      'As long as people avoid drinking water that has been kept in plastic bottles',
    ], answer: 2,
    explain: "Ana cümle bilim insanlarının mikroplastiklerin insan sağlığına etkisi hakkında hâlâ az şey bildiğini söylüyor. Beklentiye aykırı bu durum, mikroplastiklerin her yere yayıldığını ve izlerinin kanda bile bildirildiğini söyleyen 'although' cümleciğiyle anlam kazanır. 'Even though' ile kurulan seçenek de karşıtlık bağlacı taşıyor ama etkilerin iyi bilindiğini söyleyerek ana cümleyle çelişiyor. Mikroplastiklerin vücutta hiç bulunmaması az bilinmesinin nedeni sayılamaz; araştırmaların hepsinin yapılmış olması ise az bilinmeyle çelişir. Plastik şişeden su içmemek de bilgi eksikliğine koşul olamaz." },

  { id: 'gp-t4', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['irreversibly'],
    level: 'zor', cefr: 'C1', konu: ['koşul'],
    q: 'Unless the amount of plastic reaching the oceans is cut sharply over the coming decades, ----.',
    options: [
      'the plastic already floating there will start to disappear by itself',
      'far fewer fish would have been trapped in nets lost at sea by fishermen',
      'beaches will need to be cleaned far less often than they are today',
      'people will stop buying drinks in plastic bottles altogether',
      'some marine habitats are likely to be damaged irreversibly',
    ], answer: 4,
    explain: "'Unless' (-medikçe) ile kurulan koşul gelecekle ilgili gerçek bir olasılık bildiriyor: denize ulaşan plastik azaltılmazsa ne olur? Mantıklı sonuç bir zarardır: bazı deniz yaşam alanları geri dönülmez biçimde zarar görebilir. Denizdeki plastiğin kendiliğinden yok olması ve kumsalların daha seyrek temizlenmesi, plastiğin azaltılmadığı bir durumun sonucu olamaz; mantık ters. 'Would have been trapped' gerçekleşmemiş bir geçmişi anlatır, 'unless' ile kurulan gelecek koşuluna uymaz. İnsanların plastik şişeli içecek almayı tümden bırakması da plastik azaltılmadığında beklenen bir sonuç değildir." },

  // ---------- çeviri ----------
  { id: 'gp-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edilgen'],
    q: 'Plastic waste that is not collected properly is often carried by rivers to the sea, where it can remain for many years.',
    options: [
      'Düzgün toplanmayan plastik atıklar çoğu zaman rüzgârla denize taşınır ve orada aylarca kalabilir.',
      'Düzgün toplanan plastik atıklar bile çoğu zaman rüzgârla denize taşınır ve orada uzun yıllar kalabilir.',
      'Düzgün toplanmayan plastik atıklar çoğu zaman nehirlerle denize taşınır ve orada uzun yıllar kalabilir.',
      'Düzgün toplanmayan plastik atıklar çoğu zaman rüzgârla denize taşınır ve orada uzun yıllar kalabilir.',
      'Düzgün toplanmayan plastik atıklar nadiren nehirlerle denize taşınır ve orada uzun yıllar kalabilir.',
    ], answer: 2,
    explain: "Cümle edilgen yapılarla kurulmuş: 'is not collected properly' (düzgün toplanmayan) ve 'is carried by rivers' (nehirlerle taşınır). 'Often' (çoğu zaman) ve 'can remain for many years' (uzun yıllar kalabilir) de korunmalı; doğru çeviri bunların hepsini yerinde tutar. 'By rivers' nehirlerle demektir; 'çoğu zaman rüzgârla denize taşınır ve orada uzun yıllar kalabilir' bu yüzden yanlış. 'Orada aylarca kalabilir' diyen çeviri 'many years'i aylara indiriyor, atıkları da rüzgârla taşıyor. 'Düzgün toplanan plastik atıklar bile' diye başlayan çeviri toplanmayan atığı toplanan atığa çeviriyor ve taşıyanı rüzgâr yapıyor. 'Nadiren nehirlerle' diyen çeviri nehirleri koruyor ama 'often'ı tersine çeviriyor." },

  { id: 'gp-c2', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['single-use'],
    level: 'orta', cefr: 'B2', konu: ['isim-fiil ve mastar'],
    q: 'Taking your own bag to the market is one of the simplest ways to avoid using single-use plastic.',
    options: [
      'Pazara kendi kaplarınızı götürmek, tek kullanımlık plastik kullanmaktan kaçınmanın en etkili yollarından biridir.',
      'Pazara kendi çantanızı götürmek, tek kullanımlık plastik kullanmaktan kaçınmanın en basit yollarından biridir.',
      'Pazara kendi çantanızı götürmek, tek kullanımlık plastiği geri dönüştürmenin en basit yollarından biridir.',
      'Pazara kendi çantanızı götürmek, tek kullanımlık plastik kullanmaktan kaçınmanın en etkili yoludur.',
      'Pazara kendi çantanızı götürmek, tek kullanımlık plastik kullanmaktan kaçınmanın en etkili yollarından biridir.',
    ], answer: 1,
    explain: "Cümlenin öznesi bir isim-fiil: 'Taking your own bag to the market' (pazara kendi çantanızı götürmek). 'One of the simplest ways to avoid using' ise 'kullanmaktan kaçınmanın en basit yollarından biri' demektir; 'avoid' ardından -ing alır. Doğru çeviri bunları korur. 'Simplest' en basit demektir, en etkili değil; 'çantanızı götürmek … en etkili yollarından biridir' bu yüzden yanlış. 'Kaçınmanın en etkili yoludur' sıfatı değiştirdiği gibi 'yollarından biri'ni de tek bir yola indiriyor. 'Kendi kaplarınızı götürmek' diye başlayan çeviri götürülen şeyi değiştiriyor ve sıfatı 'en etkili' yapıyor. 'Geri dönüştürmenin en basit yollarından biri' sıfatı koruyor ama amacı değiştiriyor: plastik kullanmaktan kaçınmak yerine onu geri dönüştürmekten söz ediyor." },

  { id: 'gp-c3', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['landfill', 'recycle'],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'Geri dönüştürülemeyen plastiklerin büyük bölümü ya çöp sahalarına gömülür ya da yakılır.',
    options: [
      'Some of the plastic that has been recycled is either buried in landfill sites or burnt.',
      'Most of the plastic that cannot be recycled is buried in landfill sites rather than burnt.',
      'Most of the plastic that cannot be recycled is either buried in landfill sites or burnt.',
      'Some of the plastic that cannot be recycled is either buried in landfill sites or exported.',
      'Some of the plastic that cannot be recycled is either buried in landfill sites or burnt.',
    ], answer: 2,
    explain: "Türkçe cümlenin öznesi bir sıfat cümleciğiyle daraltılmış: 'geri dönüştürülemeyen plastikler' (the plastic that cannot be recycled). 'Büyük bölümü' 'most of', 'ya … ya da' 'either … or' ile karşılanır; doğru seçenek bunların hepsini korur. 'Some of' (bir kısmı) 'büyük bölümü' demek değildir; 'Some of the plastic that cannot be recycled is either buried … or burnt' bu yüzden yanlış. 'Or exported' diyen çeviri 'yakılır'ı ihracata çeviriyor ve oranı 'some' ile veriyor. 'Some of the plastic that has been recycled' geri dönüştürülemeyen plastik yerine geri dönüştürülmüş plastikten söz ediyor. 'Buried in landfill sites rather than burnt' 'most of'u koruyor ama 'ya … ya da'yı tek bir yola indiriyor." },

  { id: 'gp-c4', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['karşılaştırma'],
    q: 'Bir plastik parçası ne kadar küçükse, onu sudan ayırmak o kadar zorlaşır.',
    options: [
      'The thinner a piece of plastic is, the harder it becomes to separate from soil.',
      'The smaller a piece of plastic is, the harder it becomes to recycle.',
      'The smaller a piece of plastic is, the harder it becomes to separate from soil.',
      'The thinner a piece of plastic is, the harder it becomes to separate from water.',
      'The smaller a piece of plastic is, the harder it becomes to separate from water.',
    ], answer: 4,
    explain: "'Ne kadar … -se, o kadar …' yapısı İngilizcede 'the + karşılaştırma …, the + karşılaştırma …' ile kurulur. Parça küçüldükçe sudan ayırmak zorlaşıyor: 'The smaller …, the harder it becomes to separate from water'. 'The smaller …, the harder it becomes to separate from soil' suyu toprağa çeviriyor. 'The harder it becomes to recycle' ayırmayı geri dönüştürmeye çeviriyor. 'The thinner …, the harder … from water' küçüklüğü inceliğe çeviriyor; Türkçe cümle parçanın kalınlığından değil, büyüklüğünden söz ediyor. 'The thinner …, the harder … from soil' büyüklüğü de suyu da değiştiriyor." },

  // ---------- okuma parçası 1 (4 soru, YDS biçimi) ----------
  { id: 'gp-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['particle', 'microscopic'],
    level: 'orta', cefr: 'B2', title: 'Mikroplastikler nereden gelir?',
    text: "When people picture plastic pollution, they usually think of bottles floating on the sea or bags caught in trees. Much of the problem, however, is far harder to see. Scientists use the term 'microplastics' for pieces of plastic smaller than five millimetres, and they divide them into two groups. Primary microplastics are made small on purpose: examples include the tiny beads that have been added to some face scrubs and the pellets that factories melt down to make larger products. Secondary microplastics form when bigger items break apart, slowly worn down by sunlight, waves and friction. Two everyday sources of very small plastic are especially easy to overlook. The first is road traffic. As a car moves, its tyres rub against the road and gradually wear away, releasing fine particles that rain washes into drains or the wind carries off. The second is clothing. Many modern fabrics, such as polyester and nylon, are themselves a kind of plastic, and each time they are washed, they lose microscopic fibres. Some of these are caught at water treatment plants, but others pass straight through into rivers. None of this means that drivers, or people who wear fleece jackets, are to blame. It does suggest, however, that clearing litter from beaches, useful as it is, can only deal with part of the problem. Better designs for tyres and fabrics, and filters that catch fibres in washing machines, may matter just as much.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, primary microplastics ----.',
        options: [
          'are deliberately manufactured at a very small size',
          'form when larger objects are broken down by the sun',
          'come mainly from the tyres of cars on wet roads',
          'measure more than five millimetres when first made',
          'are all removed from water at treatment plants',
        ], answer: 0,
        explain: "Parçaya göre birincil mikroplastikler bilerek küçük yapılır; örnekleri yüz temizleme ürünlerine katılan boncuklar ve fabrikaların erittiği granüllerdir. Doğru seçenek bunu 'deliberately manufactured' diye anlatıyor. Büyük parçaların güneşle ufalanması ikincil mikroplastiklerin tanımıdır; kısmen doğru ama yanlış gruba ait. Lastikler parçada bir kaynak olarak geçiyor ama birincil grubun ana kaynağı diye anılmıyor. Beş milimetreden büyük olmaları tanımla çelişiyor. Arıtma tesislerinde ise liflerin yalnız bir bölümünün tutulduğu söyleniyor." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that ----.',
        options: [
          'ordinary household chores can be one source of the plastic in rivers',
          'tyre particles are more harmful to wildlife than fibres from clothes',
          'people who wear fleece jackets are largely to blame for the problem',
          'most of the plastic in the sea comes from beads in face scrubs',
          'water treatment plants were designed mainly to catch plastic fibres',
        ], answer: 0,
        explain: "Parça, sentetik giysiler her yıkandığında mikroskobik lifler bıraktığını ve bunların bir kısmının arıtma tesislerinden geçip nehirlere ulaştığını söylüyor. Buradan çamaşır yıkamak gibi sıradan ev işlerinin nehirlerdeki plastiğin kaynaklarından biri olabileceği çıkar. Lastik parçacıklarının liflerden daha zararlı olduğu parçada karşılaştırılmıyor. Polar ceket giyenlerin suçlu olmadığı açıkça söyleniyor; o seçenek parçayla çelişiyor. Denizdeki plastiğin çoğunun yüz ürünlerindeki boncuklardan geldiği ve arıtma tesislerinin lifler için kurulduğu parçada yok." },
      { konu: ['gönderim'],
        q: "In the passage, the word 'these' in 'Some of these are caught' refers to ----.",
        options: [
          'the modern fabrics',
          'the clothes in the wash',
          'the fibres from fabrics',
          'the treatment plants',
          'the nearby rivers',
        ], answer: 2,
        explain: "'Some of these are caught at water treatment plants, but others pass straight through into rivers' cümlesinde arıtma tesislerinde tutulan ya da nehirlere geçen şey, bir önceki cümlenin sonunda geçen mikroskobik liflerdir. Kumaşlar ve yıkanan giysiler tesislere ulaşmaz; onlardan kopan lifler ulaşır. Arıtma tesisleri ve nehirler cümlede zaten adıyla geçiyor; 'these' kendi cümlesindeki bir yere gönderme yapmaz." },
      { konu: ['ana fikir'],
        q: 'The main point of the passage is that ----.',
        options: [
          'drivers and people who wear synthetic clothes cause most plastic pollution',
          'primary microplastics are far more dangerous than secondary microplastics',
          'much plastic pollution comes from small, hidden sources as well as litter',
          'filters in washing machines have already solved the problem of fibres',
          'cleaning beaches is the most effective way to reduce microplastics',
        ], answer: 2,
        explain: "Parça, plastik kirliliğinin yalnız göze görünen şişe ve poşetlerden ibaret olmadığını, lastik aşınması ve çamaşır yıkama gibi gözden kaçan kaynakların da önemli olduğunu anlatıyor; sonunda kumsal temizliğinin sorunun yalnız bir bölümünü çözebileceğini söylüyor. Ana fikir budur. Sürücülerin ve sentetik giysi giyenlerin suçlu olduğu açıkça reddediliyor. Birincil ve ikincil mikroplastiklerin zararı karşılaştırılmıyor. Çamaşır makinesi filtreleri sorunu çözmüş değil, yalnız işe yarayabilecek bir önlem olarak anılıyor. Kumsal temizliğinin en etkili yol olduğu da parçanın söylediğinin tersidir." },
    ] },

  // ---------- okuma parçası 2 (4 soru, YDS biçimi) ----------
  { id: 'gp-o2', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['dump'],
    level: 'zor', cefr: 'C1', title: 'Büyük Pasifik Çöp Alanı',
    text: "Few environmental images have spread as widely as that of a floating island of rubbish drifting somewhere in the North Pacific. The Great Pacific Garbage Patch is real enough, but the picture is misleading. There is no solid surface that a person could walk on, nor one that would show up clearly in satellite photographs. Instead, the patch is a vast area of ocean in which currents gather drifting waste, and most of the individual pieces are small fragments scattered through the upper layers of the water. A sailor crossing it might notice little more than the occasional crate or tangle of rope, while a fine net pulled behind the boat would come up full of plastic flakes. What the patch is made of is also surprising. A study by Lebreton and colleagues, published in 2018, estimated that fishing nets alone may make up nearly half of its mass. If so, the problem is not only the result of bottles and bags discarded on land, but also of nets that are lost or dumped far out at sea. The 'island' image is understandable: it turns an almost invisible problem into something easy to picture. Yet it can also do harm. People who imagine a single mass of rubbish may assume that a large enough ship could simply scoop it up. A thin soup of fragments spread across an enormous area is a very different challenge, and keeping plastic out of the ocean in the first place remains a far more realistic goal than collecting it afterwards.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the study published in 2018 ----.',
        options: [
          'found that most of the pieces in the patch were large crates and ropes',
          'suggested that a large share of the patch\'s weight comes from fishing gear',
          'showed that bottles and bags make up the greater part of the patch',
          'used satellite photographs to measure the exact size of the patch',
          'proved that a ship would be able to collect most of the rubbish',
        ], answer: 1,
        explain: "Parçaya göre 2018'de yayımlanan çalışma, yalnız balık ağlarının çöp alanının kütlesinin yarısına yakınını oluşturabileceğini tahmin etti. Doğru seçenek bunu 'kütlenin büyük bir payı balıkçılık donanımından geliyor' diye anlatıyor. Parçaların çoğunun iri sandık ve halat olduğu parçayla çelişiyor; tek tük görülenler bunlar, parçaların çoğu küçük. Şişe ve poşetlerin büyük bölümü oluşturduğu çalışmanın vardığı sonucu tersine çeviriyor. Uydu fotoğrafları ve bir geminin çöpü toplayabileceği parçada çalışmaya bağlanmıyor; ikincisi parçanın vardığı sonuçla da çelişiyor." },
      { konu: ['sözcük anlamı'],
        q: "The word 'scattered' in the passage is closest in meaning to ----.",
        options: ['dispersed', 'hidden', 'damaged', 'collected', 'frozen'], answer: 0,
        explain: "'Scattered' dağılmış, saçılmış demektir. Parçada küçük parçaların suyun üst katmanlarına dağıldığı anlatılıyor; anlamca en yakın sözcük 'dispersed' (dağılmış). 'Collected' (toplanmış) anlamın tersidir. 'Hidden' (gizli) parçaların zor görülmesini çağrıştırsa da dağılmayı anlatmaz. 'Damaged' (hasarlı) ve 'frozen' (donmuş) bağlamla ilgisizdir." },
      { konu: ['yazarın tutumu'],
        q: "The author's attitude towards the 'island' image can best be described as ----.",
        options: [
          'fully supportive, as it helps people to picture the problem accurately',
          'dismissive, since it is a deliberate lie invented by campaign groups',
          'indifferent, because it has no real effect on how people see clean-ups',
          'enthusiastic, as it has persuaded governments to build cleaning ships',
          'sympathetic to its appeal but worried that it gives a false impression',
        ], answer: 4,
        explain: "Yazar 'ada' imgesinin anlaşılır olduğunu söylüyor, çünkü neredeyse görünmeyen bir sorunu gözde canlandırmayı kolaylaştırıyor. Ama aynı imgenin zararlı olabileceğini, insanları çöpün bir gemiyle kolayca toplanabileceğine inandırdığını da ekliyor. Bu, imgenin çekiciliğini anlayan ama yanlış bir izlenim bıraktığından kaygılanan bir tutumdur. Yazar imgeye tümüyle destek vermiyor; doğru bir resim çizdiğini de düşünmüyor. Kasıtlı bir yalan olduğunu söylemiyor. Temizliğe bakışı etkilediğini söylediği için kayıtsız da değil. Hükümetlerin temizleme gemisi yaptırdığı ise parçada yok." },
      { konu: ['başlık'],
        q: 'What would be the most suitable title for the passage?',
        options: [
          "The Truth Behind the Ocean's 'Rubbish Island'",
          'How Fishing Nets Are Made and Used at Sea',
          'Why Satellites Cannot Photograph the Pacific',
          'A New Ship That Can Clean the World\'s Seas',
          'The Long History of Plastic Bottles and Bags',
        ], answer: 0,
        explain: "Parça baştan sona 'çöp adası' imgesinin gerçeği nasıl çarpıttığını anlatıyor: ortada üstünde yürünecek bir ada yok, kütlenin önemli bir bölümü ağlardan geliyor ve imge temizliği kolay sandırıyor. Bu bütünü kapsayan başlık, okyanustaki 'çöp adası'nın ardındaki gerçeği vaat edendir. Balık ağları parçada bir ayrıntı; nasıl yapıldıkları anlatılmıyor. Uydu fotoğrafları yalnız bir cümlede geçiyor. Yeni bir temizleme gemisi tanıtılmıyor; tersine, gemiyle toplama fikri eleştiriliyor. Şişe ve poşetlerin tarihi de parçanın konusu değil." },
    ] },

  // ---------- diyalog ----------
  { id: 'gp-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['recycle'],
    level: 'kolay', cefr: 'B1', konu: ['bağlam'],
    q: "Deniz: The recycling box in the kitchen is full again. Someone keeps putting whole boxes in it without flattening them.\nArda: Sorry, that was me. I'll fold them up from now on.\nDeniz: ----\nArda: Sure. I'll carry it down to the big bins after dinner.",
    options: [
      "Don't worry. They collected the big bins yesterday.",
      'Thanks. And could you empty it today as well?',
      'Never mind. I emptied it this morning before work.',
      'Did you remember to buy milk on your way home?',
      'Have you seen the new bins they put in the park?',
    ], answer: 1,
    explain: "Arda'nın son sözü ('Tabii. Akşam yemeğinden sonra büyük çöp kutularına indiririm.') bir ricaya verilmiş cevap: Deniz ondan kutuyu boşaltmasını istemiş olmalı. 'Teşekkürler. Bugün bir de boşaltabilir misin?' bu cevabı karşılar. Kutuyu bu sabah boşalttığını söyleyen seçenek dolu kutuyla çelişiyor ve Arda'nın taşıma sözünü anlamsız kılıyor. Büyük kutuların dün boşaltıldığını söylemek bir rica değil; 'Sure' ile karşılanmaz. Süt ve parktaki yeni kutularla ilgili sorular da Arda'nın kutuyu aşağı indirme sözüne bağlanmıyor." },

  { id: 'gp-d2', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['soru-cevap uyumu'],
    q: "Cashier: That's everything. Would you like a bag for these?\nCustomer: ----\nCashier: Yes, I'm afraid so. Shops have had to charge for them since the law changed a few years ago.\nCustomer: Never mind, then. I've got a cloth one in my rucksack.",
    options: [
      'Do I have to pay extra for one?',
      'Are your bags made of paper or plastic?',
      'Could you put the eggs on top, please?',
      'Do you sell cloth bags here as well?',
      'Is the shop open late on Sundays?',
    ], answer: 0,
    explain: "Kasiyer 'Evet, maalesef' diyor ve yasa değiştiğinden beri dükkânların poşet için ücret almak zorunda olduğunu ekliyor. Bu cevap, poşet için ayrıca ödeme yapılıp yapılmayacağını soran soruyu karşılar; müşterinin kendi bez çantasını çıkarması da bunu doğruluyor. Poşetlerin kâğıt mı plastik mi olduğu sorusu 'evet' ile cevaplanmaz. Yumurtaları üste koyma ricası 'maalesef' ile karşılanmaz. Bez çanta satılıp satılmadığı sorusuna 'maalesef evet' denmez ve ardından gelen ücret açıklaması ona bağlanmaz. Pazar günleri açık olup olmadığı da yasa ve poşet ücretiyle ilgili değil." },

  // ---------- anlamca en yakın cümle ----------
  { id: 'gp-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: ['globally', 'recycle'],
    level: 'zor', cefr: 'C1', konu: ['nicelik'],
    q: 'According to some estimates, no more than about a tenth of all the plastic waste produced globally is recycled.',
    options: [
      "Some estimates suggest that roughly nine in every ten tonnes of the world's plastic waste are not recycled.",
      "Some estimates suggest that only about a tenth of the world's plastic waste fails to be recycled in the end.",
      'Some estimates suggest that the amount of plastic waste recycled around the world has risen tenfold.',
      'Some estimates suggest that at least a tenth of all the plastic waste in the world is recycled each year.',
      'Some estimates suggest that ten times more plastic waste is recycled worldwide than is thrown away.',
    ], answer: 0,
    explain: "'No more than about a tenth' 'en fazla onda bir kadarı' demektir: dünyadaki plastik atığın yaklaşık onda biri ya da daha azı geri dönüştürülüyor, yani kabaca onda dokuzu geri dönüştürülmüyor. Doğru seçenek bunu ters yönden söylüyor ve temkinli 'some estimates suggest' sözünü koruyor. Yalnız onda birinin geri dönüştürülmediğini söyleyen seçenek oranı tersine çeviriyor. 'At least a tenth' (en az onda biri) üst sınırı alt sınıra çeviriyor; 'no more than' ile aynı şey değil. Geri dönüşümün on kat arttığı verilen cümlede yok. On kat daha fazla atığın geri dönüştürüldüğü de anlamı tümden ters yüz ediyor." },

  // ---------- paragraf tamamlama ----------
  { id: 'gp-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['leach', 'landfill', 'toxic'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'Burying plastic in a landfill may keep it out of sight, but it does not necessarily make it harmless. ----. For this reason, modern sites are lined with thick waterproof sheets and fitted with pipes that collect this liquid before it can reach the groundwater.',
    options: [
      'Some landfill sites are turned into parks or sports grounds once they are full and covered',
      'As rainwater seeps through the waste, it can leach chemicals from the plastic and carry them down',
      'Burning plastic instead of burying it can release gases that are toxic when they are breathed in',
      'Much of the plastic buried in landfills is packaging that was used only once before being discarded',
      'Because plastic is so light, strong winds can blow pieces of it away from a landfill before it is covered',
    ], answer: 1,
    explain: "Boşluktan sonraki cümle 'For this reason' ile bir önlemi anlatıyor ve 'this liquid' (bu sıvı) diye bir sıvıya gönderme yapıyor: çöp sahaları, bu sıvı yeraltı suyuna ulaşmadan toplansın diye su geçirmez katmanlarla döşeniyor. Demek ki boşluktaki cümle hem bir tehlikeyi hem de bir sıvıyı tanıtmalı: atıkların arasından süzülen yağmur suyu plastikten kimyasallar sızdırıp aşağı taşıyabilir. Dolan sahaların parka dönüştürülmesi, plastiği yakmanın zehirli gaz çıkarması, gömülen plastiğin çoğunun ambalaj olması ve rüzgârın hafif parçaları uçurması konuyla ilgili ama hiçbiri 'this liquid' sözünün gösterebileceği bir sıvıdan söz etmiyor." },

  { id: 'gp-p2', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['particle', 'microscopic'],
    level: 'zor', cefr: 'C1', konu: ['gönderim'],
    q: 'Microplastics are often thought of as a problem of busy coastlines and polluted rivers. ----. Neither of these places lies anywhere near a city or a crowded beach, which suggests that the particles can be carried enormous distances by currents and winds.',
    options: [
      'Some of the highest levels ever recorded, in fact, were found in the water of a single harbour',
      'Cleaning these areas is expensive, and volunteers often have to do much of the hard work',
      'Researchers now rely on microscopic analysis to identify exactly which plastic is involved',
      'Yet they have also been reported in mud from the deep-sea floor and in ice from the Arctic',
      'Some scientists think that the fragments may also harm the birds and fish that live there',
    ], answer: 3,
    explain: "Boşluktan sonraki cümle 'Neither of these places' (bu iki yerden hiçbiri) diye başlıyor; demek ki boşluktaki cümle şehirlerden ve kalabalık kumsallardan uzak iki yer saymalı. Mikroplastiklerin derin deniz tabanındaki çamurda ve Arktik buzunda da bildirildiğini söyleyen cümle bunu yapar; 'Yet' de ilk cümledeki 'kıyı ve nehir sorunu' beklentisine karşıtlık kurar. Tek bir limandan söz eden seçenek iki yer saymıyor ve liman bir şehirden uzak sayılmaz. Bu alanları temizlemenin pahalılığı kıyılara ve nehirlere döner; onlar da şehirlerin yakınındadır. Mikroskopla çözümleme bir yer saymıyor. Kuşlara ve balıklara zarar ise 'there' ile kıyılara dönüyor ve uzak iki yer tanıtmıyor." },

  // ---------- akışı bozan cümle ----------
  { id: 'gp-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['ingest'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Many marine animals ingest plastic, often because they mistake it for food.',
      'Sea turtles, for instance, are known to swallow floating bags, which can look very like the jellyfish they feed on.',
      'Seabirds may carry small pieces of plastic back to their chicks, leaving the young birds with less room in their stomachs for real food.',
      'Even very small creatures near the bottom of the food chain have been observed taking in microplastics in laboratory experiments.',
      'Jellyfish seem to have become more common in some seas, and some researchers think this is because there are fewer fish to compete with them.',
    ], answer: 4,
    explain: "Parça deniz canlılarının plastiği yiyecek sanıp yutmasını anlatıyor: genel bilgi (I), poşetleri denizanası sanan kaplumbağalar (II), yavrularına plastik taşıyan deniz kuşları (III) ve laboratuvarda mikroplastik alan çok küçük canlılar (IV). V. cümle de denizanalarından söz ediyor ama konuyu bazı denizlerde denizanası sayısının artmasına ve bunun balık azalmasıyla açıklanmasına kaydırıyor; plastik yutma konusuyla bağı kopuyor. II'deki denizanası sözü bu cümleyi bağlı gibi gösterse de V plastikten hiç söz etmiyor." },

  { id: 'gp-b2', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['single-use'],
    level: 'kolay', cefr: 'B2', konu: ['akış'],
    sentences: [
      'In recent years, many governments have tried to reduce the use of single-use plastics.',
      'In Turkey, for example, shops have been charging customers for plastic bags since the beginning of 2019.',
      'Many shoppers say they prefer plastic bags to paper ones, which can tear easily when they get wet.',
      'The European Union went further, adopting a directive in 2019 under which items such as plastic straws and cutlery were banned from 2021.',
      'Supporters of such measures argue that small changes in daily habits can add up to a large reduction in waste.',
    ], answer: 2,
    explain: "Parça hükümetlerin tek kullanımlık plastiği azaltma önlemlerini anlatıyor: genel giriş (I), Türkiye'de poşet ücreti (II), Avrupa Birliği'nin daha ileri giden yasağı (IV) ve bu önlemleri savunanların görüşü (V). IV'teki 'went further' (daha da ileri gitti) II'deki ücret uygulamasına dayanıyor. III. cümle de poşetlerden söz ediyor ama konuyu alışverişçilerin plastik ve kâğıt poşet arasındaki tercihine kaydırıyor; II ile IV arasındaki bağı koparıyor." },
];

export default { id: 'genel-plastik', course: C, title: U, order: 9, cards, items };
