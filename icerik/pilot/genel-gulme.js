// iDil › Genel › Neden güleriz?
// Tümü özgün: Claude yazdı (17 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (çoğaltma 4. tur planı §7.4 ve yerleşik bilgi; yalnız olgular, metin özgün). Her olgu tek öğede:
// - Robert Provine gülmeyi gündelik ortamlarda (alışveriş merkezi, kampüs gibi kamusal yerler) gözlemledi; gülmelerin
//   yalnız küçük bir bölümü şakaya benzer bir sözden sonra geliyordu, çoğu sıradan sözlerden sonraydı; konuşan çoğu zaman
//   dinleyenden çok güler; insanlar başkalarıyla birlikteyken yalnızken olduğundan çok daha sık güler. Oran yazılmadı,
//   dil temkinli ("tended to", "seem to") (gu-o1);
// - insan kendini gıdıklayamaz: Sarah-Jayne Blakemore ve arkadaşları (1998), beynin, özellikle beyinciğin, kendi hareketimizin
//   dokunsal sonucunu önceden tahmin edip duyumu zayıflattığını gösterdi. Robot kolla yapılan gecikme ve yön deneyi aynı
//   ekibin sonraki bir çalışmasıdır (yerleşik bilgi; Blakemore, Frith ve Wolpert 1999); parçada tarih verilmeden "later
//   experiments by the same team" diye anlatıldı (gu-o2);
// - Jaak Panksepp: gıdıklanan sıçanların insan kulağının duyamayacağı yüksek frekanslı sesler çıkarması; büyük maymunların
//   oyunda soluk soluğa gülmeye benzer ses çıkarması; bunların gülmenin atası sayılması temkinli ("some researchers
//   believe … may") (gu-p1);
// - gülmenin bulaşıcılığı ve televizyonda kayıtlı gülme sesinin 1950'lerde yaygınlaşması (temkinli: "is thought to") (gu-b1;
//   gu-d3'te tarih ve bulaşıcılık yok, yalnız gündelik görüş);
// - 1962 Tanganyika (bugünkü Tanzanya) kız okulu gülme salgını, yayılması, okulun bir süre kapatılması, kitlesel psikojenik
//   hastalık açıklaması (temkinli: "is usually explained as") (gu-p2);
// - Guillaume Duchenne (19. yüzyıl, Fransız hekim): yüz kaslarını hafif elektrik akımıyla uyararak inceledi (yerleşik bilgi);
//   içten gülümsemede göz çevresindeki kas da kasılır; "Duchenne gülümsemesi". Bazı insanların göz hareketini isteyerek
//   yapabilmesi temkinli ("some people seem able"). "Duchenne smile" adı 20. yüzyılın sonunda (Ekman ve arkadaşları)
//   yaygınlaştı; parçada "Since the late twentieth century" (denetçi düzeltmesi, 4. tur) (gu-z1);
// - bebeklerin ilk kez birkaç aylıkken gülmesi (ay sayısı yok) (gu-b2).
// Öteki öğeler (kelime, dil bilgisi, cümle tamamlama, çeviri, diyalog, yakın anlam) gündelik ve kurgusal durumlar anlatır;
// yukarıdaki olguları sormaz.
// Görev 20 (25 Kasım 2026): çeviri çeldiricileri biçim kestirmesine karşı yeniden kuruldu.

const T = 'taslak';
const C = 'genel';
const U = 'Neden güleriz?';

const cards = [
  // ---------- isim ----------
  { code: 'humour', title: 'mizah; komiklik, gülünç yan', pos: 'isim', cefr: 'B2', ipa: '/ˈhjuːmə/',
    text: "Bir şeyi komik kılan nitelik ya da insanların komik olanı görme yeteneği: a sense of humour (espri anlayışı), dry humour (kuru, yüzü gülmeden yapılan mizah). İngiliz yazımında 'humour', Amerikan yazımında 'humor'. Sıfatı 'humorous' (esprili, komik); 'humid' (nemli) ile karıştırma.",
    example: 'Her sense of humour kept the whole team going through a long and difficult week.',
    exampleTr: 'Onun espri anlayışı, uzun ve zor bir hafta boyunca bütün ekibi ayakta tuttu.',
    synonyms: ['comedy', 'wit'], family: ['humorous'] },
  { code: 'laughter', title: 'gülme, gülüş, kahkaha', pos: 'isim', cefr: 'B1', ipa: '/ˈlɑːftə/',
    text: "Gülme eyleminin ya da gülme sesinin adı. Sayılamaz isimdir: 'a laughter' denmez; tek bir gülüş için 'a laugh' kullanılır. Kalıplar: burst into laughter (kahkahayı koyuvermek), the sound of laughter (gülüşme sesi).",
    example: 'We could hear laughter coming from the classroom long before we opened the door.',
    exampleTr: 'Kapıyı açmadan çok önce sınıftan gelen gülüşmeleri duyabiliyorduk.',
    synonyms: ['laughing', 'amusement'], family: ['laugh'] },
  { code: 'giggle', title: 'kıkırdama, kıkır kıkır gülme', pos: 'isim', cefr: 'B2', ipa: '/ˈɡɪɡl/',
    text: "Çoğu zaman sinirden, utançtan ya da tutamadığı için çıkan, kısa ve ince gülüş. Fiil olarak da kullanılır: the children giggled. Çoğulu 'the giggles' ise 'gülme krizi' demektir: get the giggles.",
    example: 'A nervous giggle escaped from the back of the room just as the head teacher began to speak.',
    exampleTr: 'Müdür tam konuşmaya başlarken salonun arkasından sinirli bir kıkırdama yükseldi.',
    synonyms: ['titter', 'snigger'], family: ['giggly'] },
  { code: 'amusement', title: 'eğlenme, hoşlanma; (bir şeyi) komik bulma', pos: 'isim', cefr: 'B2', ipa: '/əˈmjuːzmənt/',
    text: "Bir şeyi komik ya da eğlenceli bulmanın verdiği duygu: watch with amusement (keyifle izlemek), to everyone's amusement (herkesi güldürecek biçimde). Lunapark için 'amusement park' denir. Fiili 'amuse' (eğlendirmek), sıfatları 'amused' (eğlenmiş) ve 'amusing' (eğlenceli).",
    example: 'My father watched with obvious amusement as I tried to fix the bicycle with the wrong tool.',
    exampleTr: 'Bisikleti yanlış aletle onarmaya çalışırken babam beni belli ki keyifle izledi.',
    synonyms: ['enjoyment', 'entertainment'], family: ['amuse', 'amused', 'amusing'] },
  { code: 'bond', title: '(insanlar arasındaki) bağ, yakınlık', pos: 'isim', cefr: 'B2', ipa: '/bɒnd/',
    text: "İnsanları birbirine bağlayan güçlü duygu ya da ilişki: a close bond (sıkı bir bağ), the bond between mother and child. Kimyada 'bağ', finansta 'tahvil' anlamları da var. Fiil olarak 'bond with' (biriyle yakınlaşmak); adı 'bonding'.",
    example: 'Working together on the farm every summer created a strong bond between the two cousins.',
    exampleTr: 'Her yaz çiftlikte birlikte çalışmak iki kuzen arasında güçlü bir bağ kurdu.',
    synonyms: ['tie', 'connection'], family: ['bonding'] },
  { code: 'punchline', title: '(fıkrada) can alıcı son söz, espri', pos: 'isim', cefr: 'C1', ipa: '/ˈpʌntʃlaɪn/',
    text: "Bir fıkranın ya da şakanın, dinleyeni güldürmesi beklenen son cümlesi. Kalıplar: deliver the punchline (espriyi patlatmak), forget the punchline (fıkranın sonunu unutmak). 'Punch line' diye ayrı da yazılır.",
    example: 'He told the story so slowly that everyone had guessed the punchline before he reached it.',
    exampleTr: 'Hikâyeyi öyle yavaş anlattı ki o sona varmadan herkes esprinin ne olduğunu tahmin etmişti.',
    synonyms: ['climax', 'payoff'], family: [] },
  // ---------- fiil ----------
  { code: 'suppress', title: '(duygu, gülme, öksürük) bastırmak, tutmak', pos: 'fiil', cefr: 'C1', ipa: '/səˈpres/',
    text: "Bir duygunun ya da tepkinin dışa vurulmasını zorla engellemek: suppress a yawn (esnemeyi bastırmak), suppress your anger. Haber ya da bilgi için 'örtbas etmek', isyan için 'bastırmak' anlamına da gelir. Adı 'suppression'.",
    example: 'She had to suppress a yawn when her neighbour started describing his holiday for the third time.',
    exampleTr: 'Komşusu tatilini üçüncü kez anlatmaya başlayınca esnemesini bastırmak zorunda kaldı.',
    synonyms: ['hold back', 'stifle'], family: ['suppression'] },
  { code: 'tickle', title: 'gıdıklamak', pos: 'fiil', cefr: 'B2', ipa: '/ˈtɪkl/',
    text: "Birinin teninde hafifçe gezinerek gülme ya da kaşıntı duygusu uyandırmak: tickle a baby's feet. Mecazen 'hoşuna gitmek, eğlendirmek' de olur: the idea tickled him. Sıfatı 'ticklish' (gıdıklanan).",
    example: 'My niece screams with delight whenever her uncle tickles the back of her neck.',
    exampleTr: 'Yeğenim, dayısı ensesini gıdıkladığında sevinçle çığlık atıyor.',
    synonyms: ['stroke lightly'], family: ['ticklish'] },
  { code: 'chuckle', title: 'kendi kendine, sessizce gülmek', pos: 'fiil', cefr: 'C1', ipa: '/ˈtʃʌkl/',
    text: "Ağzı kapalı, alçak sesle ve çoğu zaman kendi kendine gülmek: chuckle at a memory, chuckle to yourself. Kahkahadan hafif, kıkırdamadan daha sakin bir gülüştür. İsim olarak da kullanılır: give a chuckle.",
    example: 'Reading his old school reports, my grandfather began to chuckle at the comments his teachers had written.',
    exampleTr: 'Eski karnelerini okurken dedem öğretmenlerinin yazdığı notlara kendi kendine gülmeye başladı.',
    synonyms: ['laugh quietly', 'chortle'], family: [] },
  { code: 'mock', title: 'alay etmek, dalga geçmek', pos: 'fiil', cefr: 'C1', ipa: '/mɒk/',
    text: "Birini ya da bir şeyi küçümseyerek gülünç duruma düşürmek, çoğu zaman taklidini yaparak: mock someone's accent. Sıfat olarak 'sahte, deneme' anlamına gelir: a mock exam (deneme sınavı). Adı 'mockery' (alay).",
    example: 'The older boys used to mock his accent until the teacher finally stepped in.',
    exampleTr: 'Büyük çocuklar, öğretmen sonunda araya girene kadar onun aksanıyla alay ederdi.',
    synonyms: ['ridicule', 'make fun of'], family: ['mockery'] },
  { code: 'relieve', title: '(ağrı, gerginlik, sıkıntı) hafifletmek, gidermek', pos: 'fiil', cefr: 'B2', ipa: '/rɪˈliːv/',
    text: "Kötü bir durumu ya da duyguyu azaltmak: relieve pain (ağrıyı dindirmek), relieve boredom (can sıkıntısını gidermek). Adı 'relief' (rahatlama, ferahlama); sıfatı 'relieved' (rahatlamış). Nöbeti devralmak anlamı da var: relieve a guard.",
    example: 'A short walk in the fresh air can relieve the stiffness of sitting at a desk all morning.',
    exampleTr: 'Temiz havada kısa bir yürüyüş, bütün sabah masa başında oturmanın verdiği tutukluğu giderebilir.',
    synonyms: ['ease', 'alleviate'], family: ['relief', 'relieved'] },
  // ---------- sıfat ----------
  { code: 'involuntary', title: 'istemsiz, elde olmadan yapılan', pos: 'sıfat', cefr: 'C1', ipa: '/ɪnˈvɒləntri/',
    text: "İstenmeden, bilinçli bir karar verilmeden gerçekleşen: an involuntary reaction (istemsiz tepki), involuntary movements. Karşıtı 'voluntary' (isteğe bağlı, gönüllü); ön ek anlamı değiştirdiği için ayrı sözcük sayılır. Zarfı 'involuntarily'.",
    example: 'Blinking when something flies towards your eyes is an involuntary reaction that protects them.',
    exampleTr: 'Gözünüze doğru bir şey uçarken gözünüzü kırpmanız, onları koruyan istemsiz bir tepkidir.',
    synonyms: ['automatic', 'reflex'], family: ['involuntarily'] },
  { code: 'hilarious', title: 'çok komik, gülmekten kırıp geçiren', pos: 'sıfat', cefr: 'B2', ipa: '/hɪˈleəriəs/',
    text: "'Funny'den çok daha güçlü: insanı kahkahayla güldüren. Derecelendirilemeyen bir sıfat gibi davranır; 'very hilarious' yerine 'absolutely hilarious' denir. Adı 'hilarity' (kahkaha tufanı), zarfı 'hilariously'.",
    example: "My uncle's attempt to dance at the wedding was hilarious, and he laughed at it more than anyone.",
    exampleTr: 'Dayımın düğünde dans etme girişimi çok komikti ve buna en çok o güldü.',
    synonyms: ['very funny', 'hysterical'], family: ['hilarity', 'hilariously'] },
  { code: 'awkward', title: 'sıkıntılı, tuhaf, rahatsız edici; beceriksiz', pos: 'sıfat', cefr: 'B2', ipa: '/ˈɔːkwəd/',
    text: "İnsanı huzursuz eden, ne diyeceğini bilemediği durum için: an awkward silence (sıkıntılı bir sessizlik), an awkward question. Hareket için 'beceriksiz, hantal' anlamına gelir. Zarfı 'awkwardly', adı 'awkwardness'.",
    example: 'There was an awkward silence after he asked her age in front of all her colleagues.',
    exampleTr: 'Bütün iş arkadaşlarının önünde yaşını sorunca sıkıntılı bir sessizlik oldu.',
    synonyms: ['uncomfortable', 'embarrassing'], family: ['awkwardly', 'awkwardness'] },
  { code: 'infectious', title: '(gülme, coşku) bulaşıcı, başkalarına geçen', pos: 'sıfat', cefr: 'C1', ipa: '/ɪnˈfekʃəs/',
    text: "Hastalık için 'bulaşıcı'; mecazen bir ruh hâlinin ya da davranışın kolayca başkalarına geçmesi: an infectious laugh (insanı da güldüren bir gülüş), infectious enthusiasm. Kökü 'infect' (bulaştırmak), adı 'infection' (enfeksiyon).",
    example: 'Our new teacher had such an infectious laugh that the whole class soon joined in.',
    exampleTr: 'Yeni öğretmenimizin gülüşü öyle bulaşıcıydı ki bütün sınıf kısa sürede ona katıldı.',
    synonyms: ['contagious', 'catching'], family: ['infect', 'infection'] },
  // ---------- zarf ----------
  { code: 'uncontrollably', title: 'kontrolsüzce, durduramadan', pos: 'zarf', cefr: 'C1', ipa: '/ˌʌnkənˈtrəʊləbli/',
    text: "Durdurulamayacak ya da denetlenemeyecek biçimde: laugh uncontrollably (gülmekten kendini alamamak), shake uncontrollably (tir tir titremek). Sıfatı 'uncontrollable'.",
    example: 'When the cold water hit him, he began to shiver uncontrollably.',
    exampleTr: 'Soğuk su çarpınca tir tir titremeye başladı.',
    synonyms: ['helplessly', 'wildly'], family: ['uncontrollable'] },
  // ---------- öbek fiil ----------
  { code: 'cheer up', title: 'neşelenmek; (birini) neşelendirmek', pos: 'öbek fiil', cefr: 'B1', ipa: '/ˌtʃɪər ˈʌp/',
    text: "Üzgün biri için 'keyfi yerine gelmek' (nesnesiz) ya da 'birinin keyfini yerine getirmek' (nesneli). Nesne zamirse araya girer: cheer her up. Teselli ederken tek başına da söylenir: Cheer up!",
    example: 'Ali was quiet all morning, but he cheered up when he heard that his cousins were coming to stay.',
    exampleTr: 'Ali bütün sabah sessizdi ama kuzenlerinin kalmaya geleceğini duyunca neşelendi.',
    synonyms: ['brighten up', 'perk up'], family: [] },
  { code: 'crack up', title: 'kahkahayı basmak; (birini) kahkahalarla güldürmek', pos: 'öbek fiil', cefr: 'C1', ipa: '/ˌkræk ˈʌp/',
    text: "Gündelik dilde aniden ve kendini tutamadan gülmeye başlamak: we all cracked up. Nesneyle 'güldürüp kırıp geçirmek' olur: his jokes crack me up. Eski ve gündelik bir kullanımda 'sinir krizi geçirmek' anlamına da gelir.",
    example: 'When the teacher sat on the whoopee cushion, the whole class cracked up.',
    exampleTr: 'Öğretmen osuruk yastığının üstüne oturunca bütün sınıf kahkahayı bastı.',
    synonyms: ['burst out laughing', 'fall about'], family: [] },
];

const items = [
  // ---------- kelime ----------
  { id: 'gu-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['involuntary', 'awkward'],
    level: 'zor', cefr: 'C1', konu: ['sıfat'],
    q: 'A real burst of laughter is often ----: it seems to happen to us before we have made any conscious decision to laugh.',
    options: ['awkward', 'predictable', 'reluctant', 'involuntary', 'respectful'], answer: 3,
    explain: "İki noktadan sonraki açıklama boşluğun anlamını veriyor: gülme, gülmeye bilinçli bir karar vermemizden önce başımıza geliyor gibi. Bilinçli bir karar olmadan gerçekleşen şey 'involuntary' (istemsiz). 'Awkward' (sıkıntılı, tuhaf) bir durumun verdiği huzursuzluğu anlatır; kararın yokluğunu değil. 'Predictable' (önceden kestirilebilen) cümlenin vurguladığı ani ve kendiliğinden olma durumuyla bağdaşmaz. 'Reluctant' (isteksiz) bir karar ve direnç içerir; burada karar hiç yok. 'Respectful' (saygılı) bağlamla ilgisizdir." },

  { id: 'gu-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['cheer up', 'crack up'],
    level: 'kolay', cefr: 'B1', konu: ['öbek fiil'],
    q: 'Elif felt miserable after failing her driving test, but she slowly began to ---- when her sister offered to help her practise every weekend.',
    options: ['show off', 'crack up', 'run out', 'cheer up', 'turn up'], answer: 3,
    explain: "Elif sınavdan kalınca çok üzgün; 'but' (ama) bu durumun değiştiğini, kız kardeşinin yardım teklifiyle yavaş yavaş keyfinin yerine geldiğini gösteriyor. Üzgün birinin neşelenmesi 'cheer up' ile anlatılır. 'Crack up' (kahkahayı basmak) ani ve kendini tutamadan gülmektir; yardım teklifine kahkahayla karşılık vermek ve bunun 'slowly' (yavaş yavaş) olması bağlama uymaz. 'Show off' (hava atmak), 'run out' (tükenmek) ve 'turn up' (gelip çıkmak, ortaya çıkmak) üzüntünün geçmesini anlatmaz." },

  { id: 'gu-k3', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['suppress', 'giggle', 'mock'],
    level: 'orta', cefr: 'C1', konu: ['fiil'],
    q: "During his grandfather's funeral, Kerem tried hard to ---- a nervous giggle when his phone suddenly played a cartoon theme tune.",
    options: ['mock', 'release', 'suppress', 'encourage', 'imitate'], answer: 2,
    explain: "Cenaze gibi ciddi bir ortamda Kerem'in 'tried hard' (çok çabaladı) diye anlatılan uğraşı, gülmenin dışa vurulmasını engellemeye yöneliktir. Bir duyguyu ya da tepkiyi zorla tutmak 'suppress' (bastırmak) ile anlatılır. 'Mock' (alay etmek) birini ya da bir şeyi küçümseyerek gülünç duruma düşürmektir; insan kendi kıkırdamasıyla alay etmeye çabalamaz. 'Release' (salıvermek) ve 'encourage' (teşvik etmek) cenazede çabalanacak şeyin tersidir. 'Imitate' (taklit etmek) de Kerem'in kendi istemsiz gülmesine uymaz." },

  // ---------- dil bilgisi ----------
  { id: 'gu-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['isim-fiil ve mastar'],
    q: "The film was so silly that we couldn't help ---- even at the scenes that weren't meant to be funny.",
    options: ['to laugh', 'laugh', 'being laughed', 'laughing', 'to be laughed'], answer: 3,
    explain: "'Can't help' (… -mekten kendini alamamak) ardından -ing biçimi alır: 'couldn't help laughing' (gülmekten kendimizi alamadık). 'To laugh' ve 'laugh' bu kalıpta kullanılmaz. 'Being laughed' ve 'to be laughed' edilgendir; gülen biziz, bize gülünmüyor. Ayrıca 'to be laughed' mastar olduğu için de kalıba uymaz." },

  { id: 'gu-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'Many comedians try out new material in small clubs, ---- the audience tends to stay silent if a joke falls flat.',
    options: ['which', 'whose', 'when', 'who', 'where'], answer: 4,
    explain: "Boşluktan sonra eksiksiz bir cümle var: 'the audience tends to stay silent' (seyirci sessiz kalma eğiliminde). Bu yüzden boşluğa öznesi ya da nesnesi eksik bir cümlecik isteyen 'which' ve 'who' gelemez. Önceki isim bir yer (small clubs); yer bildiren sıfat cümleciği 'where' ile kurulur. 'Whose' ardından artikelsiz bir isim ister ('whose audience'); 'the' ile birlikte kullanılmaz. 'When' zaman bildirir; kulüpler bir zaman değil, yerdir." },

  { id: 'gu-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['giggle'],
    level: 'zor', cefr: 'C1', konu: ['devrik yapı'],
    q: "---- had the comedian finished her first sentence at last night's show ---- someone in the front row began to giggle.",
    options: ['Hardly / when', 'No sooner / when', 'Not only / but', 'Rarely / when', 'Only after / than'], answer: 0,
    explain: "Cümle iki olayın art arda geldiğini anlatıyor: komedyen ilk cümlesini bitirir bitirmez ön sırada biri kıkırdamaya başladı. 'Hardly … when' (… -ir -mez) bu anlamı verir ve başa geldiğinde yardımcı fiil öne geçer: 'Hardly had the comedian finished'. 'No sooner' da aynı anlamı taşır ama 'when' ile değil 'than' ile tamamlanır. 'Not only … but' bir ekleme bildirir; burada eklenen değil, art arda gelen iki olay var. 'Rarely' (nadiren) bir sıklık bildirir; dün geceki tek bir gösteri için anlamsızdır. 'Only after' ardından devrik ana cümle ister, 'than' ile tamamlanmaz." },

  // ---------- boşluklu metin ----------
  { id: 'gu-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: ['awkward'],
    level: 'orta', cefr: 'B2', title: 'Bir hekimin yüz deneyleri',
    text: "In the nineteenth century, the French doctor Guillaume Duchenne set out to learn how the human face expresses emotion. (1) ---- relying only on careful observation, he applied mild electric currents to individual facial muscles, and in this way he could make a person appear to smile, frown or look surprised. One of his most lasting observations concerned smiling. A smile that is (2) ----, he noticed, involves not only the muscles around the mouth but also a muscle around the eyes, which narrows them and creates small lines at their outer corners. A polite smile, (3) ----, usually changes the shape of the mouth alone. Since the late twentieth century, smiles of the first kind (4) ---- 'Duchenne smiles' in his honour. Telling the two apart is not always easy, however, (5) ---- some people seem able to produce the eye movement on purpose, and in photographs the difference can be very hard to see.",
    steps: [
      { konu: ['edat'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['Because of', 'Apart from', 'In spite of', 'Instead of', 'According to'], answer: 3,
        explain: "Cümle Duchenne'in yöntemini anlatıyor: yalnız dikkatli gözleme dayanmak yerine yüz kaslarına hafif elektrik akımı verdi. 'Yerine' anlamını 'Instead of' verir. 'Apart from' (… dışında, … -e ek olarak) gözlemi de sürdürdüğünü söyler; bu, 'only' (yalnız) sözüyle çelişir: yalnız gözleme dayanmanın yanında başka bir şey yapılamaz. 'Because of' (… yüzünden) ve 'In spite of' (… -e rağmen) gözlemle deney arasında neden ya da engel ilişkisi kurar; anlam bozulur. 'According to' (… -e göre) ardından bir kaynak ister." },
      { konu: ['kelime', 'sıfat'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['awkward', 'polite', 'genuine', 'narrow', 'brief'], answer: 2,
        explain: "Boşluklu gülümseme, iki cümle sonra yalnız ağzı oynatan 'polite smile' (nezaket gülümsemesi) ile karşılaştırılıyor; göz çevresindeki kası da çalıştıran gülümseme içten olandır: 'genuine'. 'Polite' karşılaştırmanın öbür tarafıdır; boşluğa gelirse aynı gülümseme hem gözü çalıştırır hem çalıştırmaz. 'Awkward' (sıkıntılı, tuhaf) gülümsemenin içten olup olmadığını anlatmaz. 'Narrow' gözlerin daralmasını çağrıştırsa da bir gülümsemeyi nitelemez. 'Brief' (kısa) da karşılaştırmanın konusu olan içtenliği anlatmaz." },
      { konu: ['bağlantı zarfı'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['for example', 'as a result', 'in addition', 'by contrast', 'in other words'], answer: 3,
        explain: "Önceki cümle içten gülümsemenin göz çevresini de çalıştırdığını, bu cümle ise nezaket gülümsemesinin yalnız ağzı değiştirdiğini söylüyor. İki gülümseme arasındaki farkı 'by contrast' (buna karşılık) kurar. 'For example' nezaket gülümsemesini içten gülümsemenin bir örneği yapar. 'In other words' iki cümleyi aynı şeyi söylüyormuş gibi gösterir; oysa söyledikleri farklı. 'As a result' (sonuç olarak) ve 'in addition' (ayrıca) da karşıtlık değil, sonuç ve ekleme bildirir." },
      { konu: ['zaman uyumu'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['were called', 'are being called', 'had been called', 'will be called', 'have been called'], answer: 4,
        explain: "'Since the late twentieth century' (yirminci yüzyılın sonlarından beri) geçmişte başlayıp bugüne uzanan bir süreyi gösterir; bu yüzden present perfect gerekir. Gülümsemeler bir ad vermez, ad alır; edilgen de gerekir: 'have been called'. 'Were called' süreyi geçmişte kapatır, 'since' ile uyuşmaz. 'Had been called' geçmişteki başka bir andan önceyi anlatır; böyle bir an yok. 'Are being called' şu anda süren bir eylem, 'will be called' gelecek bildirir." },
      { konu: ['bağlaç'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['because', 'although', 'unless', 'so that', 'whereas'], answer: 0,
        explain: "Cümlenin ilk bölümü iki gülümsemeyi ayırt etmenin her zaman kolay olmadığını, ikinci bölümü ise bazı insanların göz hareketini isteyerek yapabildiğini söylüyor. İkincisi birincinin nedenidir; neden 'because' ile kurulur. 'Although' (-e rağmen) göz hareketinin taklit edilebilmesini ayırt etmenin zorluğuna engelmiş gibi gösterir; mantık ters döner. 'Unless' (-medikçe) koşul, 'so that' (-sın diye) amaç bildirir. 'Whereas' (oysa) iki ayrı durumu karşılaştırır; burada bir neden veriliyor." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'gu-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['humour'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Translators often find that a joke which works perfectly in one language loses all its humour in another, ----.',
    options: [
      'because the two languages tend to share most of their idioms',
      'so that readers in both countries laugh at the same moment',
      'although translating a joke usually takes only a few minutes',
      'even though the meaning of each word has been carefully kept',
      'unless the original joke relied heavily on clever wordplay',
    ], answer: 3,
    explain: "Ana cümle bir çeviride şakanın bütün komikliğini yitirdiğini söylüyor. Beklentiye aykırı bu durum, her sözcüğün anlamının özenle korunmuş olmasıyla anlam kazanır: anlam korunsa da komiklik kaybolur. İki dilin deyimlerinin çoğunu paylaşması komikliğin kaybolmasının nedeni olamaz; tersine, korunmasını kolaylaştırır. Okurların aynı anda gülmesi için komikliği yitirmek mantıksız bir amaçtır. 'Although' ile kurulan seçenek de karşıtlık bağlacı taşıyor ama çevirinin kısa sürmesiyle komikliğin kaybolması arasında bir karşıtlık yok. Söz oyununa dayanan şakalar çeviride en çok kaybedenlerdir; 'unless' ile kurulan koşul ilişkiyi tersine çevirir." },

  { id: 'gu-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['koşul'],
    q: '----, I will tell it to my friends at school tomorrow.',
    options: [
      'If I can remember the joke you told me',
      'Although I have forgotten your joke completely',
      'Unless I can remember the joke you told me',
      'Because my friends have already heard that joke',
      'When I forgot the joke you told me last week',
    ], answer: 0,
    explain: "Ana cümle yarın bir şakayı arkadaşlarına anlatacağını söylüyor; 'it' anlatılacak şakayı gösteriyor. Bunun mantıklı koşulu şakayı hatırlayabilmektir: 'If I can remember the joke you told me'. Şakayı tümüyle unutmuşken onu anlatmak olanaksızdır. 'Unless' (-medikçe) ilişkiyi tersine çevirir: hatırlamazsa anlatacağını söyler. Arkadaşlarının şakayı zaten duymuş olması onu anlatmanın nedeni olamaz. Geçen hafta unutmuş olmak ise hem zaman bakımından gelecekle uyuşmaz hem de anlatmayı engeller." },

  { id: 'gu-t3', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['relieve'],
    level: 'orta', cefr: 'B2', konu: ['neden-sonuç'],
    q: '----, many speakers open a formal talk with a short, light-hearted story.',
    options: [
      'Because jokes tend to make an audience trust a speaker less',
      'Although most audiences dislike being made to laugh at all',
      'Unless they want the audience to feel at ease from the start',
      'Since a little humour can help relieve the tension in a room',
      'So that the audience will leave the hall long before the talk ends',
    ], answer: 3,
    explain: "Ana cümle birçok konuşmacının resmî bir konuşmayı kısa ve hafif bir hikâyeyle açtığını söylüyor. Boşluğa bunun nedeni gelir: biraz mizah salondaki gerginliği hafifletebilir ('Since' neden bildirir). 'Because' ile kurulan seçenek de neden bağlacı taşıyor ama şakaların güveni azalttığını söyleyerek bu alışkanlığa karşı bir neden veriyor; mantık ters. Dinleyicilerin gülmekten hiç hoşlanmaması hikâyeyle açmayı anlamsız kılar. 'Unless' ile kurulan seçenek ilişkiyi tersine çevirir: dinleyicinin baştan rahatlamasını istemedikleri sürece hafif bir hikâyeyle açarlar demek olur. Dinleyicilerin erken ayrılması da bir konuşmacının amacı olamaz." },

  { id: 'gu-t4', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['bond', 'mock'],
    level: 'zor', cefr: 'C1', konu: ['karşıtlık'],
    q: 'Gentle teasing between old friends can actually strengthen the bond between them, ----.',
    options: [
      'whereas the very same remarks from a stranger might well feel like an attempt to mock them',
      'because friends rarely notice when they are being teased by one another in this way',
      'although people who know each other well seldom tease one another in the first place',
      'so long as neither of the two friends ever laughs at anything that the other one says',
      'since most people regard teasing of any kind as a clear sign of hostility towards them',
    ], answer: 0,
    explain: "Ana cümle eski dostlar arasındaki hafif takılmanın aralarındaki bağı güçlendirebildiğini söylüyor. 'Whereas' (oysa) bu durumu bir karşıtıyla karşılaştırıyor: aynı sözler bir yabancıdan gelince alay girişimi gibi hissettirebilir. Arkadaşların takıldıklarını fark etmemesi bağı güçlendirmenin nedeni olamaz. 'Although' ile kurulan seçenek de karşıtlık bağlacı taşıyor ama yakın insanların hiç takılmadığını söyleyerek ana cümlenin dayandığı durumu ortadan kaldırıyor. İki arkadaşın birbirinin sözüne hiç gülmemesi takılmanın işe yaraması için koşul olamaz. Takılmanın her türlüsünün düşmanlık işareti sayılması ise bağı güçlendirmesiyle çelişir." },

  // ---------- çeviri ----------
  { id: 'gu-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: 'Explaining a joke rarely makes it as funny as it was when you first heard it.',
    options: [
      'Bir şakayı tekrarlamak, onu nadiren ilk duyduğunuz andakinden daha komik kılar.',
      'Bir şakayı yazmak, onu nadiren ilk duyduğunuz andaki kadar komik kılar.',
      'Bir şakayı açıklamak, onu nadiren ilk duyduğunuz andaki kadar komik kılar.',
      'Bir şakayı açıklamak, onu nadiren ilk duyduğunuz andakinden daha akılda kalıcı kılar.',
      'Bir şakayı açıklamak, onu nadiren ilk duyduğunuz andakinden daha komik kılar.',
    ], answer: 2,
    explain: "'As funny as' eşitlik karşılaştırmasıdır: '… kadar komik'. 'Rarely' (nadiren) de bu eşitliğin pek sağlanmadığını söyler: açıklanan şaka çoğunlukla ilk duyulduğundaki kadar komik olmaz. Doğru çeviri bunları korur. 'Andakinden daha komik kılar' diyen 'açıklamak' çevirisi eşitliği üstünlüğe çeviriyor: şakanın ilk andakinden daha komik olması nadirmiş. 'Tekrarlamak' ile başlayan çeviride eylem 'explaining' olmaktan çıkıyor, karşılaştırma da üstünlüğe dönüyor. 'Daha akılda kalıcı' diyen çeviri 'funny'yi (komik) başka bir niteliğe çeviriyor ve eşitlik yerine üstünlük kuruyor. 'Bir şakayı yazmak' eşitliği koruyor ama 'explaining'i (açıklamak) yazmaya dönüştürüyor." },

  { id: 'gu-c2', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['amusement'],
    level: 'zor', cefr: 'C1', konu: ['ortaç öbeği'],
    q: 'Having heard the story many times before, my grandmother listened to it with quiet amusement rather than surprise.',
    options: [
      'Hikâyeyi daha önce bir kez anlatmış olan büyükannem, onu şaşkınlıktan çok sessiz bir keyifle dinledi.',
      'Hikâyeyi daha önce bir kez duymuş olan büyükannem, onu şaşkınlıktan çok sessiz bir keyifle dinledi.',
      'Hikâyeyi daha önce defalarca duymuş olan büyükannem, onu şaşkınlıktan çok sessiz bir keyifle dinledi.',
      'Hikâyeyi daha önce defalarca duymuş olan büyükannem, onu şaşkınlıktan çok belirgin bir sabırsızlıkla dinledi.',
      'Hikâyeyi daha önce bir kez duymuş olan büyükannem, onu sessiz bir keyiften çok şaşkınlıkla dinledi.',
    ], answer: 2,
    explain: "'Having heard the story many times before' bir ortaç öbeğidir; ana eylemden önce tamamlanmış bir durumu ve dolaylı olarak nedeni bildirir: 'hikâyeyi daha önce defalarca duymuş olan'. 'With quiet amusement rather than surprise' de 'şaşkınlıktan çok sessiz bir keyifle' demektir; doğru çeviri bunları korur. 'Daha önce bir kez duymuş olan … sessiz bir keyifle' diyen çeviri 'many times'ı (defalarca) tek bir kereye indiriyor. 'Bir kez anlatmış olan' çeviride büyükanne hikâyeyi duymamış, anlatmış; sıklık da yanlış. 'Keyiften çok şaşkınlıkla' diyen çeviri 'rather than'in yönünü tersine çeviriyor ve defalarcayı bir kereye indiriyor. 'Belirgin bir sabırsızlıkla' diyen çeviri 'quiet amusement'ı (sessiz keyif) bambaşka bir duyguya çeviriyor." },

  { id: 'gu-c3', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['zaman'],
    q: 'Film başladığından beri kardeşim gülmeyi bırakmadı.',
    options: [
      "My brother hasn't stopped crying since the film ended.",
      "My brother hasn't stopped laughing since the film started.",
      "My brother didn't stop laughing until long after the film ended.",
      "My brother hasn't stopped laughing since the film ended.",
      'My brother stopped laughing as soon as the film started.',
    ], answer: 1,
    explain: "'-den beri' geçmişte başlayıp hâlâ süren bir durumu bildirir; İngilizcede 'since' ve present perfect ile kurulur: 'hasn't stopped laughing since the film started'. Gülmenin başlangıç noktası filmin başlamasıdır. 'Hasn't stopped laughing since the film ended' bu noktayı filmin bitişine taşıyor. 'Hasn't stopped crying' diyen çeviri gülmeyi ağlamaya çeviriyor, başlangıcı da filmin bitişi yapıyor. 'Until long after the film ended' past simple ile bugüne uzanan durumu geçmişte bitmiş gösteriyor. 'Stopped laughing as soon as the film started' anlamı tersine çeviriyor: gülme film başlar başlamaz kesilmiş." },

  { id: 'gu-c4', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['isim cümleciği'],
    q: 'Araştırmacılar, insanların bir şakaya ne zaman güleceğini önceden kestirmenin kolay olmadığını söylüyor.',
    options: [
      'Researchers say it is quite easy to predict why people laugh at a joke.',
      'Researchers say it is not easy to predict when people will laugh at a joke.',
      'Researchers have shown it is not easy to predict when people will laugh at a joke.',
      'Researchers say it is not easy to predict why people laugh at a joke.',
      'Researchers say it is quite easy to predict when people will laugh at a joke.',
    ], answer: 1,
    explain: "Türkçe cümlede iç içe isim cümlecikleri var: araştırmacıların söylediği ve kestirilmesi zor olan şey ('when people will laugh at a joke'). 'Önceden kestirmenin kolay olmadığı' 'it is not easy to predict' ile, 'söylüyor' da 'say' ile karşılanır; doğru seçenek bunların hepsini korur. 'It is not easy to predict why people laugh' kestirilen şeyi değiştiriyor: Türkçe cümle nedeni değil, zamanı soruyor. 'Quite easy to predict when' diyen çeviri olumsuzluğu kaldırıyor. 'Quite easy to predict why' olumsuzluğu kaldırdığı gibi 'ne zaman'ı da 'neden' yapıyor. 'Researchers have shown' bir görüş aktarımını kanıtlanmış bir bulguya çeviriyor." },

  // ---------- okuma parçası 1 (4 soru, YDS biçimi) ----------
  { id: 'gu-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['laughter', 'punchline', 'bond', 'amusement'],
    level: 'orta', cefr: 'B2', title: 'Bir psikoloğun saha gözlemleri',
    text: "Most of us assume that we laugh mainly because something is funny. When the psychologist Robert Provine set out to study laughter, however, he did not bring volunteers into a laboratory and show them comedy films. Instead, he and his students listened to ordinary conversations in public places, such as shopping centres and university campuses, and noted what had been said just before each burst of laughter. The results were surprising. Only a small proportion of the laughs followed anything resembling a joke or a punchline. Far more often, people laughed after quite ordinary remarks, such as a greeting, a question about weekend plans or a comment on the weather. Provine also reported that the person who was speaking tended to laugh more than the person who was listening, which is hard to explain if laughter is simply a reaction to something comic. Other findings pointed in the same direction: people seem to laugh far more often in company than when they are alone. Observations like these led Provine to argue that laughter is, above all, a social signal. Rather than marking amusement, it may tell others that we are friendly, that we are playing rather than being serious, and that we enjoy their company. Seen in this way, laughter helps to build and maintain the bonds between people. This does not mean that jokes are unimportant, but it suggests that much of our laughter has less to do with comedy than with relationships.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, Provine and his students ----.',
        options: [
          'showed a series of comedy films to volunteers in a laboratory',
          'asked people to write down the jokes they liked best each week',
          'measured how loudly people laughed at different kinds of jokes',
          'found that most laughter came right after a clear punchline',
          'observed people chatting in everyday settings outside a lab',
        ], answer: 4,
        explain: "Parçaya göre Provine ve öğrencileri gönüllüleri laboratuvara getirmek yerine alışveriş merkezleri ve kampüsler gibi kamusal yerlerdeki sıradan konuşmaları dinledi. Doğru seçenek bunu 'laboratuvar dışında, gündelik ortamlarda sohbet eden insanları gözlemledi' diye anlatıyor. Laboratuvarda komedi filmi göstermek parçada açıkça yapılmadığı söylenen şeydir. İnsanlara sevdikleri şakaları yazdırmak ve gülmenin şiddetini ölçmek parçada yok. Gülmelerin çoğunun belirgin bir espriden sonra geldiği de bulgunun tersidir." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that ----.',
        options: [
          'a speaker who laughs is not necessarily reacting to something funny',
          'people who laugh on their own are generally less friendly than others',
          'jokes play no part at all in making people laugh in conversation',
          'laughter in shopping centres differs greatly from laughter on campus',
          'listeners usually laugh more than the person who is doing the talking',
        ], answer: 0,
        explain: "Parça konuşan kişinin dinleyenden çok güldüğünü ve bunun gülme yalnız komik bir şeye tepki olsaydı açıklanmasının zor olduğunu söylüyor. Buradan gülen bir konuşmacının komik bir şeye tepki vermiyor olabileceği çıkar. Yalnız gülenlerin daha az dost canlısı olduğu parçada yok. Şakaların hiçbir rol oynamadığı parçanın son cümlesiyle çelişir: şakaların önemsiz olmadığı açıkça söyleniyor. Alışveriş merkezindeki ve kampüsteki gülmeler karşılaştırılmıyor. Dinleyenlerin daha çok güldüğü ise bulgunun tersidir." },
      { konu: ['sözcük anlamı'],
        q: "The word 'maintain' in the passage is closest in meaning to ----.",
        options: ['replace', 'examine', 'sustain', 'measure', 'reveal'], answer: 2,
        explain: "Parçada gülmenin insanlar arasındaki bağları kurmaya ve sürdürmeye yardım ettiği anlatılıyor; 'maintain' burada bir şeyi korumak, sürdürmek demektir. Anlamca en yakın sözcük 'sustain' (sürdürmek, ayakta tutmak). 'Replace' (yerine koymak) bağları değiştirir, sürdürmez. 'Examine' (incelemek), 'measure' (ölçmek) ve 'reveal' (ortaya çıkarmak) gülmenin ilişkilere etkisini anlatmaz." },
      { konu: ['ana fikir'],
        q: 'The passage is mainly concerned with the idea that ----.',
        options: [
          'laughter is a reliable sign that a joke has been a real success',
          'people laugh more in shopping centres than at universities',
          'comedy films are the best tool available for studying laughter',
          'speakers should try not to laugh at their own ordinary remarks',
          'laughter often connects people more than it responds to humour',
        ], answer: 4,
        explain: "Parça Provine'in gözlemlerinden yola çıkarak gülmenin büyük ölçüde bir toplumsal işaret olduğunu, komediden çok ilişkilerle ilgili olduğunu savunuyor. Ana fikir, gülmenin çoğu zaman mizaha tepki vermekten çok insanları birbirine bağlamaya yaradığıdır. Gülmenin bir şakanın başarısının güvenilir işareti olduğu, parçanın vardığı sonucun tersidir. Alışveriş merkezleri ile üniversiteler karşılaştırılmıyor. Komedi filmleri Provine'in özellikle kullanmadığı yöntemdir. Konuşmacılara gülmemeleri öğüt verilmiyor; parça bir öneri değil, bir açıklama sunuyor." },
    ] },

  // ---------- okuma parçası 2 (4 soru, YDS biçimi) ----------
  { id: 'gu-o2', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['tickle'],
    level: 'zor', cefr: 'C1', title: 'Kendi elimizin dokunuşu',
    text: "Almost everyone has noticed that it is impossible to tickle yourself. You can run your fingers along the sole of your own foot as lightly as you like, and the sensation will feel dull compared with the same touch from someone else. This everyday puzzle attracted the attention of the neuroscientist Sarah-Jayne Blakemore and her colleagues, whose best-known study of it appeared in 1998. Their explanation centred on prediction. Whenever we move, the brain appears to produce a forecast of the sensations that the movement will cause. When the actual touch matches this forecast closely, the brain treats it as less important and the feeling is weakened. Contact from another person cannot be forecast in the same way, so it arrives at full strength. Brain scans suggested that the cerebellum, a region at the back of the brain long associated with coordinating movement, plays a central part in this process. In later, rather ingenious experiments by the same team, volunteers moved a robotic arm that in turn stroked their palm. When the robot copied their movements exactly, the touch felt mild. When a short delay or a change of direction was introduced, the same touch began to feel more ticklish, as if it were coming from somebody else. It would be easy to dismiss all this as a mere curiosity, but it arguably reveals something important. A brain that dims the predictable effects of its own actions is better able to notice what is unexpected, and such signals are often the ones that matter most.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, a touch from another person feels stronger because ----.',
        options: [
          'the skin on the sole of the foot is especially sensitive to it',
          'the cerebellum is unable to process any signals from others',
          'the brain has no advance estimate of what it will feel like',
          'other people usually press much harder than we do ourselves',
          'the brain pays less attention to sensations it did not expect',
        ], answer: 2,
        explain: "Parçaya göre beyin kendi hareketimizin yol açacağı duyumu önceden tahmin eder ve tahminle örtüşen dokunuşu zayıflatır. Başkasının dokunuşu aynı biçimde tahmin edilemediği için tam gücüyle gelir. Doğru seçenek bunu 'beynin onun nasıl hissettireceğine dair önceden bir tahmini yok' diye anlatıyor. Ayak tabanı parçada yalnız bir örnek; neden olarak gösterilmiyor. Beyinciğin başkalarından gelen sinyalleri hiç işleyemediği söylenmiyor. Başkalarının daha sert bastırdığı parçada yok. Beklenmeyen duyumlara daha az dikkat edildiği ise parçanın son cümlesinin tersidir." },
      { konu: ['gönderim'],
        q: "In the passage, the word 'it' in 'so it arrives at full strength' refers to ----.",
        options: ['the brain', "another person's touch", 'the forecast', 'our own movement', 'the sole of the foot'], answer: 1,
        explain: "'Contact from another person cannot be forecast in the same way, so it arrives at full strength' cümlesinde tam gücüyle gelen şey, cümlenin başında geçen başka bir kişinin dokunuşudur. Beyin ve tahmin dokunuşu karşılayan ya da onu zayıflatan taraftır; kendileri bir yere 'gelmez'. Kendi hareketimizin sonucu zayıflatılan duyumdur, tam gücüyle gelen değil. Ayak tabanı yalnız parçanın başındaki örnekte geçiyor." },
      { konu: ['yazarın tutumu'],
        q: 'Which of the following best describes how the author regards the tickling research?',
        options: [
          'doubtful, as the experiments with the robot were never repeated',
          'appreciative, seeing it as more significant than it first appears',
          'dismissive, treating it as an amusing but rather trivial curiosity',
          'neutral, refusing to say whether the findings matter in any way',
          'critical, because brain scans cannot really measure ticklishness',
        ], answer: 1,
        explain: "Yazar robot kollu deneyleri 'rather ingenious' (oldukça zekice) diye niteliyor ve son bölümde bu araştırmayı salt bir merak konusu saymanın kolay olduğunu ama onun önemli bir şeyi ortaya koyduğunu söylüyor. Bu, araştırmayı ilk bakışta göründüğünden daha önemli bulan, takdir eden bir tutumdur. Deneylerin tekrarlanmadığı parçada yok. Önemsiz bir merak konusu saymak, yazarın 'kolay olurdu ama' diyerek reddettiği görüştür. Bulguların önemli olduğunu söylediği için yansız da değil. Beyin taramalarına bir eleştiri de yöneltmiyor." },
      { konu: ['çıkarım'],
        q: 'The passage implies that ----.',
        options: [
          'a robot can tickle people only when it moves faster than a human hand could',
          'a self-produced touch may feel ticklish if its timing is unpredictable',
          'people who are unable to tickle themselves must have a damaged cerebellum',
          'the cerebellum has no role at all in controlling the body\'s movement',
          'unexpected sensations usually matter less to us than predictable ones',
        ], answer: 1,
        explain: "Parçada robot kol gönüllünün hareketini tam kopyaladığında dokunuşun hafif hissedildiği, kısa bir gecikme ya da yön değişikliği eklenince aynı dokunuşun daha gıdıklayıcı geldiği anlatılıyor. Buradan, kişinin kendi başlattığı bir dokunuşun bile zamanlaması önceden kestirilemez olursa gıdıklayabileceği çıkar. Robotun insan elinden hızlı hareket etmesi parçada koşul olarak geçmiyor. Kendini gıdıklayamamak herkes için geçerli; bir hasarın işareti değil. Beyinciğin hareketle uzun süredir ilişkilendirildiği söyleniyor; hiç rolü olmadığı değil. Beklenmeyen duyumların daha az önemli olduğu da son cümlenin tersidir." },
    ] },

  // ---------- diyalog ----------
  { id: 'gu-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['hilarious', 'crack up'],
    level: 'kolay', cefr: 'B1', konu: ['bağlam'],
    q: "Selin: Did you enjoy the film last night?\nMert: Yes, it was hilarious. I cracked up at the scene with the dog and the wedding cake.\nSelin: ----\nMert: Don't worry, I won't tell you what happens. Just go and see it!",
    options: [
      'Me too. That was my favourite scene as well.',
      'Really? I thought the ending was far too long.',
      'Which cinema did you go to with your brother?',
      'Did you buy the tickets online or at the door?',
      "I haven't seen it yet, so don't spoil it!",
    ], answer: 4,
    explain: "Mert'in son sözü ('Merak etme, ne olduğunu anlatmayacağım. Git ve izle!') Selin'in filmi henüz izlemediğini ve sonunu öğrenmek istemediğini gösteriyor. 'Henüz izlemedim, lütfen anlatıp tadını kaçırma!' bu cevabı karşılar. 'Ben de, en sevdiğim sahne oydu' ve 'Bence sonu çok uzundu' Selin'in filmi izlediğini gösterir; o zaman Mert'in 'anlatmayacağım, git izle' demesi anlamsız olur. Sinema ve bilet soruları da 'Don't worry, I won't tell you' ile karşılanmaz." },

  { id: 'gu-d2', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['awkward'],
    level: 'orta', cefr: 'B2', konu: ['soru-cevap uyumu'],
    q: "Aylin: How did your presentation to the new clients go this morning?\nBurak: Not great, to be honest. Halfway through, I started laughing and just couldn't stop.\nAylin: ----\nBurak: Nothing serious. I suddenly noticed that my last slide said 'Thank you for your patients' instead of 'patience'.",
    options: [
      'Oh no. Did the clients notice it at all?',
      'Oh no. Who was sitting in the front row?',
      'Oh no. How long did the whole meeting go on for?',
      'Oh no. Was the silence afterwards awkward?',
      'Oh no. What set you off in the first place?',
    ], answer: 4,
    explain: "Burak'ın cevabı ('Ciddi bir şey değil. Son slaytımda birden bir yazım hatası fark ettim.') gülmenin nedenini açıklıyor; demek ki Aylin gülmeyi neyin başlattığını sormuş olmalı: 'What set you off in the first place?' (Seni ilk başta ne güldürdü?). Müşterilerin fark edip etmediği ve sonraki sessizliğin sıkıntılı olup olmadığı evet-hayır sorularıdır; 'Nothing serious' ile başlayıp bir yazım hatasını anlatan cevap bunlara uymaz. Ön sırada kimin oturduğu ve toplantının ne kadar sürdüğü sorularına da bir slayttaki hata cevap olmaz." },

  { id: 'gu-d3', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['chuckle'],
    level: 'orta', cefr: 'B2', konu: ['bağlam'],
    q: "Ece: Why do old sitcoms always have that recorded laughter in the background?\nKaan: I think it's there to tell viewers when they're supposed to laugh.\nEce: ----\nKaan: Same here. I find myself chuckling along even when the joke isn't that good.",
    options: [
      'Strangely enough, it often works on me as well.',
      "I can't stand it, so I always turn it down.",
      'Do you know when they first started using it?',
      'I much prefer dramas to comedies, actually.',
      'My sister has never watched a sitcom at all.',
    ], answer: 0,
    explain: "Kaan 'Same here' (Bende de öyle) diyor ve kötü şakalarda bile kendini gülerken bulduğunu ekliyor. Demek ki Ece kayıtlı gülme sesinin kendisini de güldürdüğünü söylemiş olmalı: 'İşin garibi, bende de çoğu zaman işe yarıyor.' Ses duymaya dayanamayıp kıstığını söylemek Kaan'ın 'bende de öyle' deyip birlikte güldüğünü anlatmasıyla çelişir. Ne zaman kullanılmaya başlandığı sorusu 'Same here' ile cevaplanmaz. Dramaları tercih etmek ve kız kardeşin hiç dizi izlememesi de Kaan'ın gülmeye katıldığını anlatan cevabına bağlanmıyor." },

  // ---------- anlamca en yakın cümle ----------
  { id: 'gu-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['nicelik'],
    q: 'Hardly any of the jokes in the new comedy show made the audience laugh.',
    options: [
      'Most of the jokes in the new comedy show made the audience laugh.',
      'Very few of the jokes in the new comedy show got a laugh from the audience.',
      'None of the jokes in the new comedy show managed to make the audience laugh.',
      'The audience laughed at a few of the jokes, but only near the end of the show.',
      'Quite a few of the jokes in the new comedy show made the audience laugh.',
    ], answer: 1,
    explain: "'Hardly any' (neredeyse hiç) çok küçük bir nicelik bildirir: şakaların pek azı seyirciyi güldürdü. Bunu 'very few' (çok az) karşılar. 'Most' (çoğu) ve 'quite a few' (epeyce) niceliği büyütüp anlamı tersine çeviriyor. 'None' (hiçbiri) kapsamı sıfıra indiriyor; 'hardly any' birkaç şakanın güldürmüş olmasına izin verir. Birkaç şakaya yalnız gösterinin sonuna doğru gülündüğü ise verilen cümlede olmayan bir zaman bilgisi ekliyor." },

  { id: 'gu-y2', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['olumsuzluk'],
    q: 'Not a single member of the audience managed to keep a straight face during the final scene.',
    options: [
      'Only one member of the audience laughed out loud during the final scene.',
      'Few members of the audience found anything to laugh at in the final scene.',
      'Most of the audience managed not to laugh at all during the final scene.',
      'Not everyone in the audience could keep a straight face in the final scene.',
      'Every member of the audience ended up laughing during the final scene.',
    ], answer: 4,
    explain: "'Keep a straight face' gülmemek için yüzünü ciddi tutmaktır. 'Not a single member … managed to' (tek bir kişi bile başaramadı) bunu kimsenin başaramadığını söyler: seyircinin hepsi sonunda güldü. Doğru seçenek olumsuzluğu olumlu bir 'every' ile karşılıyor. 'Not everyone' (herkes değil) yalnız bazılarının güldüğünü söyler; 'tek bir kişi bile' sözünün kapsamını daraltıyor. Yalnız bir kişinin gülmesi ve az kişinin gülecek bir şey bulması anlamı tersine çeviriyor. Çoğunluğun gülmemeyi başarması da cümlenin söylediğinin tersidir." },

  // ---------- paragraf tamamlama ----------
  { id: 'gu-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['tickle'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: "Laughter is usually thought of as something uniquely human, but the neuroscientist Jaak Panksepp found reason to question this. ----. These calls are far too high for the human ear to detect, so special equipment was needed to record them. Some researchers believe that sounds like these, together with the panting noises that great apes such as chimpanzees make during play, may be an ancient form of what later became human laughter.",
    options: [
      'When he tickled young rats, they responded with a series of rapid chirping calls',
      'Rats are often used in laboratories because they breed quickly and are cheap to keep',
      'Many people find the sound of a rat moving inside the walls at night unsettling',
      'Dogs that are excited during play often make a breathy sound owners mistake for a growl',
      'He also noticed that older rats tended to play much less often than younger ones did',
    ], answer: 0,
    explain: "Boşluktan sonraki cümle 'These calls' (bu sesler, çağrılar) diye başlıyor ve onların insan kulağının duyamayacağı kadar tiz olduğunu söylüyor. Demek ki boşluktaki cümle bu sesleri tanıtmalı ve Panksepp'in gülmenin yalnız insana özgü olduğundan kuşkulanmasının nedenini vermeli: gıdıklanan genç sıçanlar hızlı, cıvıltılı seslerle karşılık verdi. Sıçanların laboratuvarda kullanılma nedeni ve yaşlı sıçanların daha az oynaması bir ses tanıtmıyor. Duvardaki sıçanın sesi ve köpeklerin oyun sesi insan kulağının duyduğu seslerdir; 'çok tiz, duyulamaz' diyen sonraki cümleyle çelişir." },

  { id: 'gu-p2', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['uncontrollably'],
    level: 'zor', cefr: 'C1', konu: ['gönderim'],
    q: "In 1962, an unusual outbreak began at a girls' boarding school in Tanganyika, now part of Tanzania. A few pupils started laughing uncontrollably, and the behaviour soon spread to many of their classmates. ----. Far from ending the problem, however, this step seems to have helped it to travel, since some of the pupils carried it back to their home villages. Today the episode is usually explained as mass psychogenic illness, in which stress spreads within a group and produces genuine physical symptoms.",
    options: [
      'Some of the affected girls are also said to have cried or felt faint',
      'Episodes of this kind are rare, but similar ones have been reported elsewhere',
      'At first, staff simply tried to keep the laughing girls apart from the others',
      'Unable to cope, the school sent its pupils home and closed for a while',
      'Laughter of this sort has very little in common with laughing at a good joke',
    ], answer: 3,
    explain: "Boşluktan sonraki cümle 'this step' (bu adım) diye bir önleme gönderme yapıyor ve bu adımın, bazı öğrenciler salgını köylerine taşıdığı için yayılmaya yardım ettiğini söylüyor. Öyleyse boşluktaki cümle öğrencileri evlerine gönderen bir adım anlatmalı: okul durumla baş edemeyince öğrencileri evlerine gönderdi ve bir süre kapandı. Gülen kızları ötekilerden ayırmak da bir adım ama öğrencilerin köylerine dönmesini açıklamaz. Ağlama ya da baygınlık belirtileri, benzer olayların başka yerlerde görülmesi ve bu gülmenin şakaya gülmekle ilgisizliği bir önlem değildir; 'this step' bunlara gönderme yapamaz." },

  // ---------- akışı bozan cümle ----------
  { id: 'gu-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['infectious'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Many television comedies have been broadcast with a laugh track, a recording of an audience laughing that is added to the programme.',
      'The technique is thought to have become widespread on American television during the 1950s.',
      'Writing a successful comedy series usually requires a team of writers who work together for months.',
      'Producers who used it were relying on the fact that laughter is infectious: hearing others laugh can make viewers more likely to laugh themselves.',
      'In recent decades, however, many comedies have dropped it, partly, it seems, because some viewers find it artificial or even irritating.',
    ], answer: 2,
    explain: "Parça televizyon komedilerindeki kayıtlı gülme sesini anlatıyor: tanımı (I), yaygınlaşması (II), dayandığı düşünce, yani gülmenin bulaşıcılığı (IV) ve son yıllarda bırakılması (V). IV'teki 'Producers who used it' (onu kullanan yapımcılar) sözündeki 'it', I ve II'de anlatılan kayıtlı gülme sesine dönüyor. III. cümle de komedi dizilerinden söz ediyor ama konuyu bir dizinin yazılmasına ve yazar ekibine kaydırıyor; kayıtlı gülme sesiyle bağı yok ve II ile IV arasındaki bağı koparıyor." },

  { id: 'gu-b2', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Most babies laugh for the first time when they are just a few months old.',
      'Choosing the right toys for a baby can be surprisingly difficult for new parents.',
      'Long before they can understand a joke, they respond with delight to simple games such as peekaboo.',
      'Interestingly, the things that make a baby laugh tend to change as the months pass.',
      'A game that once produced only a smile may later bring squeals of laughter, as the child learns to expect what is coming.',
    ], answer: 1,
    explain: "Parça bebeklerin gülmesini anlatıyor: ilk gülme (I), şakayı anlamadan önce basit oyunlara sevinçle karşılık vermeleri (III), bebeği güldüren şeylerin aylar içinde değişmesi (IV) ve bunun bir örneği (V). III'teki 'they' I'deki bebeklere dönüyor. II. cümle de bebeklerden söz ediyor ama konuyu anne babaların oyuncak seçmekte zorlanmasına kaydırıyor; gülmeyle bağı yok ve I ile III arasındaki bağı koparıyor." },
];

export default { id: 'genel-gulme', course: C, title: U, order: 13, cards, items };
