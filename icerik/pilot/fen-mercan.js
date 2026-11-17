// iDil pilot › Fen bilimleri › Mercanlar ve ısınan denizler.
// Tümü özgün: Claude yazdı (12 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Bilimsel bilgiler genel ve yerleşik olgulardır (mercan-alg ortaklığı, ağarma, uydudan sıcaklık izleme); metin özgün.
// 13 Kasım 2026 eklemeleri (fm-c2, fm-o1): sıcak sulardaki mercanların ısıya daha dayanıklı olabilmesi; toplu yumurtlama
// (Büyük Set Resifi; Kızıldeniz'de eşzamanlılığın bozulduğunu bildiren çalışma, Shlesinger ve Loya 2019). Metin özgün.

const T = 'taslak';
const C = 'fen';
const U = 'Mercanlar ve ısınan denizler';

const cards = [
  { code: 'expel', title: 'dışarı atmak; (okuldan, ülkeden) çıkarmak', pos: 'fiil', cefr: 'C1', ipa: '/ɪkˈspel/',
    text: "Bir yerden zorla çıkarmak ya da vücuttan dışarı atmak: expel air from the lungs. Adı 'expulsion'.",
    example: 'The school expelled two students for cheating in the final exam.',
    exampleTr: 'Okul, final sınavında kopya çeken iki öğrenciyi okuldan attı.',
    synonyms: ['eject', 'throw out'], family: ['expulsion'] },
  { code: 'die out', title: 'yok olmak, nesli tükenmek', pos: 'öbek fiil', cefr: 'B2', ipa: '/daɪ ˈaʊt/',
    text: "Bir türün, geleneğin ya da dilin tümüyle ortadan kalkmasıdır. Yakın anlamlısı 'become extinct'.",
    example: 'Many local languages are dying out as young people move to cities.',
    exampleTr: 'Gençler kentlere taşındıkça pek çok yerel dil yok olup gidiyor.',
    synonyms: ['become extinct', 'disappear'], family: [] },
  { code: 'tissue', title: 'doku; kâğıt mendil', pos: 'isim', cefr: 'B2', ipa: '/ˈtɪʃuː/',
    text: "Biyolojide 'doku' demektir: brain tissue, muscle tissue. Gündelik dilde 'kâğıt mendil' anlamı da var.",
    example: 'The drug reaches brain tissue only in very small amounts.',
    exampleTr: 'İlaç beyin dokusuna ancak çok az miktarda ulaşır.',
    synonyms: [], family: [] },
  { code: 'bleach', title: 'ağartmak, rengini soldurmak; ağarmak', pos: 'fiil', cefr: 'B2', ipa: '/bliːtʃ/',
    text: "Rengi açmak ya da rengi açılmak. Mercanlarda 'coral bleaching' (mercan ağarması) olarak geçer.",
    example: 'Years of strong sunlight had bleached the old wooden door.',
    exampleTr: 'Yıllarca vuran güçlü güneş, eski ahşap kapının rengini soldurmuştu.',
    synonyms: ['whiten', 'fade'], family: ['bleaching'] },
  { code: 'starve', title: 'aç kalmak, açlıktan ölmek', pos: 'fiil', cefr: 'B2', ipa: '/stɑːv/',
    text: "'starve to death' (açlıktan ölmek) ve 'be starved of' (bir şeyden yoksun kalmak) kalıpları sık geçer. Adı 'starvation'.",
    example: 'Without enough rain, the crops failed and many animals starved.',
    exampleTr: 'Yeterince yağmur yağmayınca ekinler kurudu ve pek çok hayvan açlıktan öldü.',
    synonyms: ['go hungry'], family: ['starvation'] },
  { code: 'thrive', title: 'gelişip serpilmek, iyi gitmek', pos: 'fiil', cefr: 'C1', ipa: '/θraɪv/',
    text: "Sağlıklı gelişmek ya da başarılı olmak. Karşıtı 'decline' ya da 'struggle'. 'Thrive on something', bir şeyle beslenip güçlenmek demektir.",
    example: 'Some plants thrive in poor soil where others cannot grow.',
    exampleTr: 'Bazı bitkiler, başkalarının yetişemediği verimsiz toprakta gelişip serpilir.',
    synonyms: ['flourish', 'prosper'], family: ['thriving'] },
  { code: 'monitor', title: 'izlemek, gözlemlemek', pos: 'fiil', cefr: 'B2', ipa: '/ˈmɒnɪtə(r)/',
    text: "Bir süre boyunca düzenli olarak izlemek. İsim olarak 'ekran' ya da 'izleme aygıtı' anlamına gelir.",
    example: "Nurses monitor the patient's heart rate throughout the night.",
    exampleTr: 'Hemşireler, hastanın kalp atış hızını gece boyunca izler.',
    synonyms: ['observe', 'track'], family: ['monitoring'] },
  { code: 'erosion', title: 'aşınma, erozyon', pos: 'isim', cefr: 'C1', ipa: '/ɪˈrəʊʒn/',
    text: "Fiili 'erode'. Mecaz anlamda da kullanılır: the erosion of trust (güvenin aşınması).",
    example: 'Planting trees on the slopes helps to prevent soil erosion.',
    exampleTr: 'Yamaçlara ağaç dikmek toprak aşınmasını (erozyonu) önlemeye yardım eder.',
    synonyms: ['wearing away'], family: ['erode'] },
  { code: 'low-lying', title: 'alçak, deniz seviyesine yakın', pos: 'sıfat', cefr: 'C1', ipa: '/ˌləʊ ˈlaɪɪŋ/',
    text: 'Deniz seviyesine yakın, alçakta kalan yerler için kullanılır: low-lying areas, low-lying coastal cities.',
    example: 'Low-lying islands are among the places most threatened by rising sea levels.',
    exampleTr: 'Alçak adalar, yükselen deniz seviyesinin en çok tehdit ettiği yerler arasında.',
    synonyms: [], family: [] },
  { code: 'spawn', title: 'yumurtlamak (suda yaşayan canlılar); yumurta kümesi', pos: 'fiil', cefr: 'C1', ipa: '/spɔːn/',
    text: "Balık, kurbağa ve mercan gibi suda yaşayan canlıların yumurta bırakmasıdır; 'mass spawning' toplu yumurtlama demektir. İsim olarak 'yumurta kümesi' anlamına da gelir: frog spawn (kurbağa yumurtası).",
    example: 'Salmon swim back up the river where they hatched in order to spawn.',
    exampleTr: 'Somonlar yumurtlamak için yumurtadan çıktıkları nehre geri yüzer.',
    synonyms: ['lay eggs'], family: ['spawning'] },
  { code: 'fertilise', title: 'döllemek; (toprağı) gübrelemek', pos: 'fiil', cefr: 'C1', ipa: '/ˈfɜːtəlaɪz/',
    text: "Biyolojide yumurtanın döllenmesidir: an egg is fertilised. Tarımda 'gübrelemek' demektir; gübre 'fertiliser'. Amerikan yazımı 'fertilize'.",
    example: 'The gardener fertilises the roses once a month in summer.',
    exampleTr: 'Bahçıvan gülleri yazın ayda bir gübreliyor.',
    synonyms: [], family: ['fertilisation', 'fertiliser', 'fertile'] },
  { code: 'cope', title: 'baş etmek, üstesinden gelmek', pos: 'fiil', cefr: 'B2', ipa: '/kəʊp/',
    text: "Çoğunlukla 'cope with something' kalıbıyla kullanılır: cope with stress, cope with the heat. Tek başına da gelir: 'How are you coping?' (Nasıl idare ediyorsun?)",
    example: 'Some trees cope with long, dry summers by shedding their leaves early.',
    exampleTr: 'Bazı ağaçlar uzun ve kurak yazlarla yapraklarını erken dökerek baş eder.',
    synonyms: ['manage', 'deal with'], family: ['coping'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'fm-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['expel', 'tissue', 'fertilise'],
    level: 'kolay', cefr: 'B2', konu: ['fiil'],
    q: 'When sea temperatures stay too high for several weeks, corals ---- the tiny algae living in their tissues and turn white.',
    options: ['expel', 'fertilise', 'absorb', 'inhabit', 'nourish'], answer: 0,
    explain: "Mercanlar ısı stresinde dokularındaki algleri dışarı atar ve bu yüzden beyazlaşır: 'expel' (dışarı atmak). Fertilise (döllemek), absorb (emmek) ve nourish (beslemek) beyazlaşmayı açıklamaz. Inhabit (bir yerde yaşamak) ise nesne olarak bir yer alır, algleri değil." },
  { id: 'fm-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['die out'],
    level: 'kolay', cefr: 'B2', konu: ['öbek fiil'],
    q: 'Scientists warn that if ocean warming continues at its current pace, many reef species could ---- within a few decades.',
    options: ['turn up', 'take off', 'set out', 'put off', 'die out'], answer: 4,
    explain: "Isınma sürerse türler birkaç on yıl içinde yok olabilir: 'die out'. Turn up (çıkagelmek), take off (havalanmak; birden başarı kazanmak), set out (yola çıkmak) ve put off (ertelemek; nesne ister) cümlenin uyarı anlamına uymaz." },

  // ---------- dil bilgisi ----------
  { id: 'fm-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['bleach'],
    level: 'orta', cefr: 'B2', konu: ['koşul cümlesi', 'üçüncü tip'],
    q: 'Many of the corals that bleached in 2016 ---- if the water ---- to normal temperatures more quickly.',
    options: ['would survive / returns', 'could have survived / had returned', 'can survive / has returned', 'survived / would return', 'will have survived / was returning'], answer: 1,
    explain: "2016'da olmuş bir olayın gerçekleşmemiş tersini anlatıyoruz: geçmişe yönelik koşul cümlesi. 'If' tarafında past perfect (had returned), ana cümlede 'could/would have + üçüncü hâl' (could have survived) gelir. 'More quickly' de gerçekleşmemiş bir durumu gösterir. Öteki eşleşmelerde zaman uyumu yok." },
  { id: 'fm-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['sıfat cümleciği', 'edat + which'],
    q: 'The tiny algae ---- corals depend for most of their energy are extremely sensitive to changes in water temperature.',
    options: ['where', 'whose', 'in which', 'which', 'on which'], answer: 4,
    explain: "'Depend on' fiili edatını yanında taşır: corals depend on the algae, yani 'the algae on which corals depend'. Edatsız 'which' eksik kalır; 'in which' yanlış edattır; 'where' yer bildirir; 'whose' ardından bir isim ister." },

  { id: 'fm-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['bleach'],
    level: 'zor', cefr: 'C1', konu: ['kip geçmiş (modal perfect)'],
    q: 'Many reef scientists now argue that governments ---- far more, and far sooner, to cut the greenhouse gas emissions that are warming the oceans, instead of waiting until large areas of reef had already bleached.',
    options: ["can't have done", 'must have done', "needn't have done", 'should have done', 'may have done'], answer: 3,
    explain: "Cümle geçmişe dair bir değerlendirme istiyor: hükümetler sera gazı salımını azaltmak için çok daha fazlasını, çok daha erken yapmalıydı. 'Instead of waiting' (beklemek yerine) hükümetlerin beklediğini, yani bunun yapılmadığını gösteriyor. 'Gerekirdi ama yapılmadı' anlamını 'should have' + V3 kurar. 'Must have done' ve 'may have done' bir çıkarım ya da olasılık bildirir ('yapmış olmalılar', 'yapmış olabilirler'); hükümetlerin beklediği bilgisiyle çelişir. 'Can't have done' de bir çıkarımdır ('yapmış olamazlar'): geçmişte ne olduğunu tahmin eder; bilim insanlarının ne yapılması gerektiğine dair savını kurmaz. 'Needn't have done' işin yapıldığını ama gereksiz olduğunu söyler ve savı tersine çevirir." },

  // ---------- cümle tamamlama ----------
  { id: 'fm-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['bleach', 'starve'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Bleached corals are not dead, ----.',
    options: [
      'but they may starve if their algae do not return within a few weeks',
      'since they have lost the tiny algae that give them their colour',
      'so they can no longer recover even when the water cools down again',
      'although they are still home to many different species of fish',
      'because coral reefs cover only a small part of the ocean floor',
    ], answer: 0,
    explain: "İlk cümle 'ölü değiller' diyor; doğru devam bunu sınırlayan bir karşıtlıktır: ölü değiller ama algleri dönmezse açlıktan ölebilirler. 'Since' ve 'because' ile kurulan neden-sonuçlar mantıksızdır. 'So they can no longer recover' ölü olmamalarıyla çelişir. 'Although' karşıtlık bekler, oysa balıklara yuva olmak ölü olmamakla çelişmez." },
  { id: 'fm-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['monitor', 'bleach'],
    level: 'orta', cefr: 'B2', konu: ['by + -ing'],
    q: '----, scientists can now predict where bleaching is likely to occur several weeks in advance.',
    options: [
      'Even though the oceans have absorbed most of the extra heat',
      'Unless corals lose the algae inside them',
      'By monitoring sea surface temperatures from satellites',
      'Whereas reefs in cooler waters rarely bleach',
      'As long as coral reefs remain healthy',
    ], answer: 2,
    explain: "Cümle, bilim insanlarının ağarmayı önceden nasıl tahmin edebildiğini soruyor; 'by + -ing' (… yoluyla) bunu anlatır: uydudan deniz yüzeyi sıcaklığını izleyerek. 'Even though' ve 'whereas' karşıtlık bağlacıdır ama iki cümle arasında karşıtlık yok. 'Unless' ve 'as long as' anlamsız bir koşul kurar." },

  // ---------- çeviri ----------
  { id: 'fm-c1', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['ad cümleciği', 'zaman'],
    q: 'Mercan resiflerinin geleceği, büyük ölçüde önümüzdeki on yıllarda deniz sıcaklıklarının ne kadar artacağına bağlıdır.',
    options: [
      'Coral reefs will largely disappear in the coming decades because sea temperatures are rising.',
      'How much sea temperatures rise in the coming decades depends largely on the future of coral reefs.',
      'The future of coral reefs depended largely on how much sea temperatures had risen in recent decades.',
      'The future of coral reefs depends largely on how much sea temperatures rise in the coming decades.',
      'In the coming decades, sea temperatures will rise more than coral reefs are able to tolerate.',
    ], answer: 3,
    explain: "Türkçe cümle 'resiflerin geleceği, sıcaklıkların ne kadar artacağına bağlı' diyor. Doğru seçenek bu bağı, zamanı ve 'büyük ölçüde'yi korur: 'depends largely on how much … rise in the coming decades'. Yanlışlardan biri bağı neden-sonuca çeviriyor, biri bağımlılığı tersine çeviriyor, biri geçmişe kayıyor, biri de başka bir şey söylüyor." },

  { id: 'fm-c2', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['cope'],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği', 'karşılaştırma'],
    q: 'Corals that grow in waters which regularly become very warm may cope better with heatwaves than those living in cooler seas.',
    options: [
      'Daha serin denizlerde yaşayan mercanlar, ısı dalgalarıyla düzenli olarak çok ısınan sularda büyüyenlerden daha iyi baş edebilir.',
      'Düzenli olarak çok ısınan sularda büyüyen mercanlar, ısı dalgalarıyla daha serin denizlerde yaşayanlardan kesinlikle daha iyi baş eder.',
      'Isı dalgaları sırasında çok ısınan sularda yaşayan mercanlar, daha serin denizlerdekilerden daha hızlı büyüyebilir.',
      'Düzenli olarak çok ısınan sularda büyüyen mercanlar, ısı dalgalarıyla daha serin denizlerde yaşayanlardan daha iyi baş edebilir.',
      'Düzenli olarak çok ısınan sularda büyüyen mercanlar da ısı dalgalarından daha serin denizlerde yaşayanlar kadar etkilenebilir.',
    ], answer: 3,
    explain: "İngilizce cümlede iki sıfat cümleciği var: 'that grow in waters' mercanları, 'which regularly become very warm' suları niteliyor; 'those living in cooler seas' de daha serin denizlerde yaşayan mercanlardır. Doğru çeviri bu bağları, karşılaştırmanın yönünü ve 'may'in temkinini korur. Yanlışlardan biri karşılaştırmayı tersine çeviriyor, biri 'kesinlikle' diyerek temkini kaldırıyor, biri 'baş etmek' yerine 'daha hızlı büyümek' diyor, biri de 'kadar' ile eşitlik kuruyor." },

  // ---------- paragraf tamamlama ----------
  { id: 'fm-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['thrive', 'tissue'],
    level: 'zor', cefr: 'C1', konu: ['akış', 'gönderim'],
    q: 'Corals get most of their energy from microscopic algae that live inside their tissues. The algae use sunlight to make sugars, and in return the coral provides them with shelter and nutrients. ----. When the water stays too warm for too long, however, this partnership breaks down: the heat-stressed algae start to produce harmful chemicals, and the coral responds by getting rid of its partners.',
    options: [
      'As a result, most corals turn white within a few days once the surrounding water begins to cool down again',
      'Normally, this exchange benefits both partners and lets reefs thrive in waters that are poor in nutrients',
      'Some species of fish, however, feed directly on the algae that grow on dead coral',
      'This is why scientists have recently begun growing corals in laboratories and transplanting them onto damaged reefs',
      'Some corals, in fact, live in deep, dark waters where no algae could survive, feeding instead on tiny drifting animals',
    ], answer: 1,
    explain: "Boşluktan önce mercanla alg arasındaki alışveriş anlatılıyor; sonraki cümle 'however' ile bu ortaklığın sıcakta bozulduğunu söylüyor. Arada ortaklığın normal koşullarda iyi işlediğini söyleyen cümle gerekir. Beyazlaşmayı suyun soğumasına bağlayan seçenek yanlış; balıklar, laboratuvar ve derin su seçenekleri akışı keser. Derin su cümlesinden sonra 'this partnership' neyi gösterdiği de belirsiz kalır." },

  // ---------- okuma parçası (3 soru, YÖKDİL biçimi) ----------
  { id: 'fm-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['spawn', 'fertilise'],
    level: 'orta', cefr: 'C1', title: 'Mercanların toplu yumurtlaması',
    text: 'Corals spend their adult lives fixed in one place, so they cannot go in search of a mate. Many reef-building species have solved this problem in a remarkable way: on only a few nights each year, colonies of the same species release their eggs and sperm almost simultaneously. On the Great Barrier Reef, this mass spawning usually takes place a few nights after a full moon in late spring or early summer. In many species, each polyp releases tiny bundles containing both eggs and sperm. The bundles float to the surface and break apart, but an egg usually has to be fertilised by sperm from a different colony. Researchers believe that several environmental cues work together to set the timing: the warming of the water appears to determine the month, the phase of the moon the night, and the time of sunset the hour. Spawning all at once seems to bring two advantages. It raises the chance that eggs will meet suitable sperm before currents carry them apart, and it releases far more food than fish and other predators can possibly eat. Research in at least one region, however, has found that colonies of the same species now spawn over a wider range of nights than they did a few decades ago, a change the researchers see as a threat to these reefs.',
    steps: [
      { konu: ['ayrıntı'], cefr: 'B2',
        q: 'According to the passage, the bundles released by many coral species ----.',
        options: [
          'contain the eggs and sperm of several different colonies',
          'are fertilised inside the polyp before they are released',
          'rise to the surface, where they break apart',
          'sink to the sea floor and stay there until the next full moon',
          'are released during the day, when currents are weakest',
        ], answer: 2,
        explain: "Parçaya göre her polip yumurta ve sperm içeren küçük paketler bırakır; paketler yüzeye çıkar ve orada dağılır ('float to the surface and break apart'). Bir paketteki yumurta ve sperm aynı polipten gelir, birkaç farklı koloniden değil. Döllenme polipin içinde değil, suda olur. Paketler dibe batmaz. Gündüz bırakıldıkları da söylenmiyor; parça hep gecelerden söz ediyor." },
      { konu: ['çıkarım'], cefr: 'C1',
        q: 'It can be inferred from the passage that if colonies of the same species spawned on different nights, ----.',
        options: [
          'the bundles would be more likely to sink before breaking apart',
          'each colony would begin to fertilise its own eggs instead',
          'predators might find it harder to locate the eggs',
          'the water around the reef would warm more quickly',
          'a smaller proportion of the eggs would probably be fertilised',
        ], answer: 4,
        explain: 'Parçaya göre bir yumurta çoğunlukla başka bir koloninin spermiyle döllenir ve hep birlikte yumurtlamak, yumurtanın uygun spermle karşılaşma şansını artırır. Koloniler farklı gecelerde yumurtlarsa bu şans düşer; döllenen yumurtaların payı büyük olasılıkla azalır. Paketlerin batması parçada geçmiyor; koloninin kendi yumurtasını döllemesi parçayla çelişiyor. Avcılar için durum tersidir: hepsi bir anda bırakılınca avcılar yetişemez, yumurtlama gecelere dağılırsa yumurtaların daha büyük bir kısmını yiyebilirler. Suyun ısınması yumurtlamanın zamanını belirleyen bir işarettir, sonucu değil.' },
      { konu: ['yazarın amacı'], cefr: 'C1',
        q: 'The primary purpose of the passage is to ----.',
        options: [
          'describe a reproductive strategy used by many corals and explain why its timing matters',
          'argue that warming seas will soon stop corals from reproducing altogether',
          'explain how scientists collect coral eggs during spawning in order to restore damaged reefs',
          'compare the ways in which different coral species attract a mate',
          'show that the phase of the moon alone decides when corals spawn',
        ], answer: 0,
        explain: 'Parça mercanların toplu yumurtlamasını anlatıyor: neden gerektiğini, nasıl gerçekleştiğini, zamanını neyin belirlediğini ve hep birlikte yumurtlamanın yararlarını. Son cümle de zamanlamadaki bir değişikliği tehdit olarak sunuyor; yani zamanlama önemli. Isınan denizlerin üremeyi tümden durduracağı parçada söylenmiyor. Yumurta toplayıp resif onarmak ve türlerin eş çekme yolları hiç geçmiyor. Zamanı yalnız ayın belirlediğini söyleyen seçenek parçayla çelişiyor: suyun ısınması ve gün batımı da sayılıyor.' },
    ] },

  // ---------- akışı bozan cümle ----------
  { id: 'fm-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['erosion', 'low-lying'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Coral reefs protect many coastlines by absorbing much of the energy of incoming waves.',
      'Without them, storms would cause far more erosion and flooding in low-lying coastal areas.',
      'Charles Darwin, who visited several reefs during his voyage on the Beagle, was one of the first scientists to explain how coral atolls form.',
      'Reefs also support fisheries that provide food and income for hundreds of millions of people.',
      'In addition, chemical compounds found in reef animals are being studied as possible sources of new medicines.',
    ], answer: 2,
    explain: "Parça mercan resiflerinin insanlara yararlarını sıralıyor: kıyıları korumak, balıkçılık, ilaç araştırmaları. III. cümle Darwin'in atolleri açıklamasıyla bilim tarihine sapıyor. IV. cümledeki 'also' ve V. cümledeki 'In addition', yararları sıralamanın sürdüğünü gösteriyor." },
];

export default { id: 'fen-mercan', course: C, title: U, order: 1, cards, items };
