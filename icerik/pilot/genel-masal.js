// iDil › Genel › Masallar nasıl yayılır?
// Tümü özgün: Claude yazdı (17 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (çoğaltma 4. tur planı §7.6 ve yerleşik bilgi; yalnız olgular, metin özgün). Her olgu tek öğede:
// - Charles Perrault, 1697, Histoires ou contes du temps passé: Külkedisi ve Kırmızı Başlıklı Kız'ın bilinen erken yazılı
//   biçimleri; masalların sonuna manzum "moral" eklemesi ve Kırmızı Başlıklı Kız'ın kurtarılmadan, genç kızlara bir uyarıyla
//   bitmesi yerleşik bilgi. Perrault'nun masalları uydurmadığı "probably" ile temkinli; 1690'larda masal anlatmanın Paris
//   salonlarında moda olması yerleşik bilgi, süre verilmedi ("for some years") (gs-z1);
// - Jacob ve Wilhelm Grimm, Kinder- und Hausmärchen, ilk cilt 1812; sonraki baskılarda masalları değiştirip yumuşatmaları,
//   bazı masallarda öz annenin üvey anneye dönüşmesi ("in some tales", temkinli), kaynaklarının önemli bir bölümünün eğitimli
//   orta sınıf tanıdıklar olması ("apparently", temkinli). Düzeltmeleri çoğunlukla Wilhelm'in yapması yerleşik bilgi (gs-o1);
// - Sara Graça da Silva ve Jamshid Tehrani, 2016: Hint-Avrupa dil soyağacıyla masalların yaşını tahmin; "Demirci ve Şeytan"
//   için yaklaşık 6.000 yıl. Metinde "might", "about", "should be treated with caution" ve yöntemin tartışmalı yanları (gs-o2);
// - Antti Aarne 1910, Stith Thompson'ın genişletmesi, Hans-Jörg Uther 2004; ATU adı üç yazarın baş harflerinden (gs-p1);
// - Ye Xian: 9. yüzyıl Çin'inde yazıya geçirildiği düşünülen bir Külkedisi masalı ("is thought to"); üvey anne, sihirli bir
//   balık ve kaybolan ayakkabıyla tanınma yerleşik bilgi (gs-p2);
// - Pertev Naili Boratav ve Wolfram Eberhard, 1953, Typen türkischer Volksmärchen (Almanca); tip sayısı verilmedi (gs-b1);
// - masalların açılış kalıpları: "Once upon a time", "Bir varmış, bir yokmuş" (genel; gs-b2).
// Öteki öğelerde (kelime, dil bilgisi, cümle tamamlama, çeviri, diyalog, yakın anlam) olgu yok; kişiler ve olaylar kurgusal.

const T = 'taslak';
const C = 'genel';
const U = 'Masallar nasıl yayılır?';

const cards = [
  // ---------- isim ----------
  { code: 'folklore', title: 'halk bilimi; halk kültürü (masal, türkü, inanış, gelenek)', pos: 'isim', cefr: 'C1', ipa: '/ˈfəʊklɔː/',
    text: "Bir topluluğun kuşaktan kuşağa aktardığı masallar, efsaneler, şarkılar ve inanışların bütünü; bunları inceleyen bilim dalı da aynı adı taşır. Sayılamaz isimdir: Turkish folklore, a collection of folklore. Bu alanda çalışan kişi 'folklorist', sıfatı 'folkloric'.",
    example: 'She grew up in a village where folklore was part of daily life, from wedding songs to stories about local spirits.',
    exampleTr: 'Halk kültürünün, düğün türkülerinden yöre perileriyle ilgili hikâyelere kadar gündelik hayatın parçası olduğu bir köyde büyüdü.',
    synonyms: ['folk tradition', 'oral tradition'], family: ['folklorist', 'folkloric'] },
  { code: 'tale', title: 'masal, hikâye, öykü', pos: 'isim', cefr: 'B2', ipa: '/teɪl/',
    text: "Çoğu zaman uydurma ya da olağanüstü olaylar anlatan hikâye: a fairy tale (peri masalı), a folk tale (halk masalı). 'Story'den daha edebî bir tınısı vardır. Kalıp: tell tales (dedikodu yapmak, ispiyonlamak). Kuyruk anlamındaki 'tail' ile aynı okunur.",
    example: 'Almost every culture seems to have a tale about a clever little animal that outwits a much stronger one.',
    exampleTr: 'Hemen her kültürün, kendinden çok daha güçlü bir hayvanı alt eden akıllı, küçük bir hayvanla ilgili bir masalı var gibi görünüyor.',
    synonyms: ['story', 'fable'], family: [] },
  { code: 'storyteller', title: 'masalcı, hikâye anlatıcısı', pos: 'isim', cefr: 'B2', ipa: '/ˈstɔːriˌtelə/',
    text: "Hikâye ya da masal anlatan kişi; çoğu zaman bunu sözlü olarak, dinleyici karşısında yapan biri için kullanılır: a gifted storyteller (usta bir anlatıcı). Anlatma işinin kendisi 'storytelling'.",
    example: 'The storyteller lowered her voice, and the whole room leaned forward to hear what came next.',
    exampleTr: 'Masalcı sesini alçalttı; bütün salon sırada ne geleceğini duymak için öne eğildi.',
    synonyms: ['narrator', 'raconteur'], family: ['storytelling'] },
  { code: 'motif', title: '(masalda, sanatta) sık tekrarlanan öge, motif', pos: 'isim', cefr: 'C1', ipa: '/məʊˈtiːf/',
    text: "Bir masalda, şiirde ya da süslemede yeniden yeniden karşımıza çıkan öge: üç dilek, sihirli bir nesne, karanlık orman. Halk bilimi metinlerinde olay örgüsünün tamamından (tale type) daha küçük bir birim olarak geçer. Vurgu ikinci hecededir.",
    example: 'A journey into a dark forest is a motif that turns up in stories from many parts of the world.',
    exampleTr: 'Karanlık bir ormana yolculuk, dünyanın pek çok yerinden hikâyelerde karşımıza çıkan bir motiftir.',
    synonyms: ['theme', 'element'], family: [] },
  { code: 'villain', title: '(hikâyede) kötü karakter, kötü adam', pos: 'isim', cefr: 'B2', ipa: '/ˈvɪlən/',
    text: "Bir hikâyede, oyunda ya da filmde kahramana karşı çıkan, kötülük yapan kişi. Gerçek hayatta suçlu ya da sorunun sorumlusu için de kullanılır: the villain of the piece. Karşıtı 'hero'. Sıfatı 'villainous', kötülüğün kendisi 'villainy'.",
    example: 'At the puppet show, the children booed loudly every time the villain appeared on stage.',
    exampleTr: 'Kukla gösterisinde çocuklar, kötü karakter sahneye her çıktığında yüksek sesle yuhaladı.',
    synonyms: ['antagonist', 'baddie'], family: ['villainous', 'villainy'] },
  { code: 'plot', title: 'olay örgüsü, konu', pos: 'isim', cefr: 'B2', ipa: '/plɒt/',
    text: "Bir hikâyede, romanda ya da filmde olayların birbirine bağlanarak ilerleyişi: a simple plot, the main plot. Başka anlamları da var: gizli plan, komplo (a plot to kill the king) ve küçük bir toprak parçası (a vegetable plot). Bu ünitede olay örgüsü anlamında geçer.",
    example: 'The film keeps the plot of the original story but moves it from a palace to a modern city.',
    exampleTr: 'Film, özgün hikâyenin olay örgüsünü koruyor ama onu bir saraydan modern bir şehre taşıyor.',
    synonyms: ['storyline', 'narrative'], family: [] },
  { code: 'moral', title: '(hikâyeden çıkan) ders, kıssadan hisse', pos: 'isim', cefr: 'B2', ipa: '/ˈmɒrəl/',
    text: "Bir hikâyenin okuyucuya vermek istediği öğüt: the moral of the story is … Bu anlamda çoğu zaman tekil kullanılır; çoğul 'morals' daha çok ahlak ilkeleri demektir (her masalın bir dersi varsa 'the morals of the tales' de denir). Sıfat olarak 'ahlaki' anlamına gelir: a moral question. Ahlak 'morality', ahlaken 'morally'.",
    example: 'The moral of the story is simple: being kind to strangers costs nothing.',
    exampleTr: 'Hikâyenin dersi basit: yabancılara iyi davranmanın bir bedeli yoktur.',
    synonyms: ['lesson', 'message'], family: ['morality', 'morally'] },
  // ---------- fiil ----------
  { code: 'originate', title: '(bir yerden, bir zamanda) doğmak, ortaya çıkmak, kaynaklanmak', pos: 'fiil', cefr: 'C1', ipa: '/əˈrɪdʒɪneɪt/',
    text: "Bir şeyin ilk kez belli bir yerde ya da zamanda başlaması: originate in / from a place. Nesnesiz kullanılır. 'Begin' ya da 'start'tan daha resmîdir ve kökeni vurgular. Adı 'origin' (köken), sıfatı 'original' (özgün, ilk).",
    example: 'Nobody knows exactly where the custom of painting eggs in spring originated.',
    exampleTr: 'İlkbaharda yumurta boyama geleneğinin tam olarak nerede doğduğunu kimse bilmiyor.',
    synonyms: ['arise', 'stem from'], family: ['origin', 'original', 'originally', 'origination'] },
  { code: 'transcribe', title: '(konuşmayı, kaydı) yazıya geçirmek, yazıya dökmek', pos: 'fiil', cefr: 'C1', ipa: '/trænˈskraɪb/',
    text: "Söylenen ya da kaydedilmiş bir şeyi sözcüğü sözcüğüne yazıya aktarmak: transcribe an interview. Nesne ister. Adı 'transcription' (yazıya geçirme), yazıya geçirilmiş metin 'transcript'. 'Translate' (çevirmek) ile karıştırma.",
    example: 'The researcher spent weeks transcribing hours of recorded interviews with elderly villagers.',
    exampleTr: 'Araştırmacı, yaşlı köylülerle yapılmış saatlerce kayıtlı görüşmeyi yazıya geçirmek için haftalar harcadı.',
    synonyms: ['write down', 'take down'], family: ['transcription', 'transcript'] },
  { code: 'soften', title: 'yumuşatmak, hafifletmek', pos: 'fiil', cefr: 'B2', ipa: '/ˈsɒfn/',
    text: "Bir şeyi daha yumuşak ya da daha az sert, kırıcı hâle getirmek: soften butter, soften the blow (darbeyi hafifletmek), soften a message. 't' okunmaz. 'Soft' sıfatına -en eki gelerek oluşur (wide → widen, short → shorten gibi).",
    example: 'The editor softened a few of the harsher sentences before the article was published.',
    exampleTr: 'Editör, yazı yayımlanmadan önce daha sert cümlelerin birkaçını yumuşattı.',
    synonyms: ['tone down', 'moderate'], family: ['soft'] },
  { code: 'retell', title: 'yeniden anlatmak, (kendi sözleriyle) baştan anlatmak', pos: 'fiil', cefr: 'B2', ipa: '/ˌriːˈtel/',
    text: "Bilinen bir hikâyeyi yeniden, çoğu zaman biraz değiştirerek anlatmak: retell a legend for children. Düzensiz fiildir: retell, retold, retold. Adı 'retelling' (yeniden anlatım): a modern retelling of an old tale.",
    example: 'Each generation retells the old legends in its own way, adding details that suit its own time.',
    exampleTr: 'Her kuşak eski efsaneleri kendi biçiminde yeniden anlatır ve kendi çağına uyan ayrıntılar ekler.',
    synonyms: ['recount', 'narrate again'], family: ['retelling'] },
  { code: 'borrow', title: 'ödünç almak; (fikir, sözcük, konu) başka yerden almak', pos: 'fiil', cefr: 'B1', ipa: '/ˈbɒrəʊ/',
    text: "Bir şeyi geri vermek üzere almak: borrow a book from the library. Mecaz olarak bir fikri, sözcüğü ya da olay örgüsünü başka bir kaynaktan almak için de kullanılır: borrow words from another language. Kalıp: borrow something from someone. Karşıtı 'lend' (ödünç vermek).",
    example: 'Many playwrights have borrowed their plots from much older stories and simply changed the setting.',
    exampleTr: 'Pek çok oyun yazarı olay örgülerini çok daha eski hikâyelerden almış ve yalnız geçtiği yeri değiştirmiştir.',
    synonyms: ['take', 'adopt'], family: ['borrower', 'borrowing'] },
  // ---------- sıfat ----------
  { code: 'oral', title: 'sözlü, ağızdan', pos: 'sıfat', cefr: 'B2', ipa: '/ˈɔːrəl/',
    text: "Yazılı değil, konuşarak aktarılan: oral tradition (sözlü gelenek), an oral exam (sözlü sınav). Tıpta 'ağız yoluyla' anlamına gelir: oral medicine. Zarfı 'orally'.",
    example: 'Before writing spread, many communities kept their history alive through oral tradition.',
    exampleTr: 'Yazı yayılmadan önce pek çok topluluk tarihini sözlü gelenekle yaşattı.',
    synonyms: ['spoken', 'verbal'], family: ['orally'] },
  { code: 'wicked', title: 'kötü, kötü kalpli, zalim', pos: 'sıfat', cefr: 'B2', ipa: '/ˈwɪkɪd/',
    text: "Bilerek kötülük yapan: a wicked witch, a wicked stepmother. Masallarda kötü karakterler için çok sık kullanılır. Gündelik İngiliz konuşmasında şakayla 'harika' anlamına da gelebilir. Adı 'wickedness'. Sonundaki '-ed' ayrı bir hece olarak okunur.",
    example: 'In the play, a wicked uncle locks the young prince in a tower and takes the crown for himself.',
    exampleTr: 'Oyunda kötü kalpli bir amca genç prensi bir kuleye kapatır ve tacı kendisi alır.',
    synonyms: ['evil', 'cruel'], family: ['wickedness', 'wickedly'] },
  { code: 'timeless', title: 'zamansız, eskimeyen, her çağa hitap eden', pos: 'sıfat', cefr: 'C1', ipa: '/ˈtaɪmləs/',
    text: "Zamanın geçmesinden etkilenmeyen, her dönemde değerini koruyan: a timeless classic, timeless beauty. Övgü bildirir. Adı 'timelessness'.",
    example: 'Some children\'s books have a timeless quality: my grandmother loved the same ones that I now read to my son.',
    exampleTr: 'Bazı çocuk kitaplarında eskimeyen bir şey var: şimdi oğluma okuduğum kitapları büyükannem de severdi.',
    synonyms: ['enduring', 'classic'], family: ['timelessness'] },
  // ---------- zarf ----------
  { code: 'faithfully', title: 'aslına sadık kalarak; sadakatle', pos: 'zarf', cefr: 'C1', ipa: '/ˈfeɪθfəli/',
    text: "Bir şeyi değiştirmeden, kaynağına bağlı kalarak: follow the original faithfully. 'Sadakatle, sözünden dönmeden' anlamına da gelir. İngiliz mektup kalıbında 'Yours faithfully' (Saygılarımla) adını bilmediğiniz kişiye yazılan mektubu bitirir. Sıfatı 'faithful'.",
    example: 'The new translation follows the original poem faithfully, line by line.',
    exampleTr: 'Yeni çeviri özgün şiire satır satır sadık kalıyor.',
    synonyms: ['accurately', 'closely'], family: ['faithful', 'faithfulness'] },
  // ---------- öbek fiil ----------
  { code: 'turn into', title: '-e dönüşmek; -e dönüştürmek', pos: 'öbek fiil', cefr: 'B1', ipa: '/ˌtɜːn ˈɪntuː/',
    text: "Bir şeyin başka bir şey olması ya da başka bir şeye çevrilmesi: the caterpillar turned into a butterfly; turn a garage into a studio. Nesnesiz de nesneli de kullanılır. Masallardaki büyülü dönüşümler için çok yaygındır.",
    example: 'As the temperature dropped in the evening, the light rain turned into snow.',
    exampleTr: 'Akşam sıcaklık düşünce hafif yağmur kara döndü.',
    synonyms: ['become', 'change into'], family: [] },
  { code: 'hand down', title: '(kuşaktan kuşağa) aktarmak, bırakmak', pos: 'öbek fiil', cefr: 'C1', ipa: '/ˌhænd ˈdaʊn/',
    text: "Bir eşyayı, bilgiyi ya da geleneği yaşlı kuşaktan genç kuşağa geçirmek: hand down a recipe, handed down from generation to generation. Çoğu zaman edilgen kullanılır. Hukukta 'karar açıklamak' anlamı da var (hand down a sentence).",
    example: 'The recipe has been handed down in my family from mother to daughter for four generations.',
    exampleTr: 'Tarif, ailemizde dört kuşaktır anneden kıza aktarılıyor.',
    synonyms: ['pass on', 'pass down'], family: [] },
];

const items = [
  // ---------- kelime ----------
  { id: 'gs-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['originate', 'transcribe'],
    level: 'zor', cefr: 'C1', konu: ['fiil'],
    q: 'By comparing hundreds of versions collected in neighbouring regions, researchers try to work out where a particular tale ---- before it spread to other parts of the world.',
    options: ['originated', 'transcribed', 'orientated', 'subsided', 'deteriorated'], answer: 0,
    explain: "Araştırmacılar bir masalın başka yerlere yayılmadan önce nerede doğduğunu bulmaya çalışıyor; 'before it spread' (yayılmadan önce) bir başlangıç noktası arandığını gösteriyor. Bir şeyin ilk kez bir yerde ortaya çıkması 'originate' ile anlatılır. 'Transcribe' (yazıya geçirmek) nesne ister ve masalı yazan birini gerektirir; masal kendi kendini yazıya geçirmez. 'Orientate' (yön bulmak, yöneltmek) biçimce benzese de anlamca bağlanmaz. 'Subside' (yatışmak, çekilmek) ve 'deteriorate' (kötüleşmek) bir başlangıç yeri bildirmez." },

  { id: 'gs-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['turn into', 'hand down'],
    level: 'kolay', cefr: 'B1', konu: ['öbek fiil'],
    q: 'In many fairy tales, a frog or a swan suddenly ---- a handsome prince the moment the spell is broken.',
    options: ['hands down', 'gives up', 'looks after', 'turns into', 'takes after'], answer: 3,
    explain: "Büyü bozulduğu anda kurbağa ya da kuğu birden yakışıklı bir prense dönüşüyor. Bir şeyin başka bir şey olması 'turn into' ile anlatılır. 'Hand down' (kuşaktan kuşağa aktarmak) bir eşyayı ya da geleneği aktarmaktır; büyülü bir dönüşümü anlatmaz. 'Give up' (vazgeçmek) ve 'look after' (bakmak, ilgilenmek) bir anda olan değişimi karşılamaz. 'Take after' (birine çekmek, benzemek) aile içindeki benzerlik için kullanılır; 'suddenly' ile de bağdaşmaz." },

  { id: 'gs-k3', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['faithfully'],
    level: 'orta', cefr: 'C1', konu: ['zarf'],
    q: 'A careful translator of folk tales tries to render the original ----, keeping its repetitions and rhythm instead of smoothing them away to suit modern readers.',
    options: ['irreversibly', 'reluctantly', 'hastily', 'faithfully', 'vaguely'], answer: 3,
    explain: "Özenli çevirmen, tekrarları ve ritmi korumaya, onları bugünkü okura göre törpülememeye çalışıyor; yani özgün metne sadık kalıyor. Bu anlam 'faithfully' (aslına sadık kalarak) ile verilir. 'Irreversibly' (geri dönülmez biçimde) bir değişikliğin kalıcılığını anlatır; çeviri yöntemini anlatmaz. 'Hastily' (aceleyle) ve 'vaguely' (belli belirsiz) 'careful' sözüyle çelişir. 'Reluctantly' (isteksizce) çevirmenin isteğini anlatır; tekrarları koruma çabasıyla bağlanmaz." },

  // ---------- dil bilgisi ----------
  { id: 'gs-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edilgen'],
    q: 'For centuries, before they were collected in books, these tales ---- aloud by grandparents on long winter evenings.',
    options: ['have told', 'are being told', 'will be told', 'have been told', 'were told'], answer: 4,
    explain: "Masallar kimseyi anlatmaz, büyükanne ve büyükbabalar tarafından anlatılır; bu yüzden edilgen gerekir ('by grandparents'). 'Before they were collected in books' anlatılan dönemin geçmişte kaldığını gösteriyor: 'were told'. 'Have been told' da edilgen ve 'for centuries' ile uyumlu görünür, ama şimdiki zamana uzanan bir dönem anlatır; kitaplara derlenmeden önceki, kapanmış bir dönemle uyuşmaz. 'Are being told' şu anı, 'will be told' geleceği anlatır. 'Have told' etkendir; masalları anlatan yapar." },

  { id: 'gs-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['edat'],
    q: 'Grandma always told us a story ---- dinner, while we sat by the fire waiting to go to bed.',
    options: ['after', 'among', 'since', 'beside', 'despite'], answer: 0,
    explain: "Büyükanne masalı akşam yemeğinden sonra, çocuklar ateşin başında yatmayı beklerken anlatıyor: 'after dinner'. 'Since' (-den beri) geçmişten bugüne süren bir durum ister ve 'always told' ile kurulmaz. 'Despite' (-e rağmen) yemeği masal anlatmaya bir engelmiş gibi gösterir. 'Among' (arasında) birden çok kişi ya da şey ister. 'Beside' (yanında) bir yer bildirir; yemeğin yanında masal anlatmak anlamsızdır." },

  { id: 'gs-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['plot'],
    level: 'zor', cefr: 'C1', konu: ['ortaç öbeği'],
    q: '---- hundreds of stories from villages across the region, the young researcher began to notice that the same plots kept appearing again and again.',
    options: ['Having gathered', 'Unless she gathers', 'Before being gathered', 'In order to gather', 'Despite gathering'], answer: 0,
    explain: "Genç araştırmacı önce yüzlerce hikâye derlemiş, sonra aynı olay örgülerinin tekrar ettiğini fark etmeye başlamış. Ana cümleden önce tamamlanmış bir eylem 'Having + V3' ile anlatılır: 'Having gathered'. 'Before being gathered' edilgendir; araştırmacıyı derlenen biri yapar. 'Unless she gathers' geniş zamanla bir koşul kurar; 'began' ile anlatılan geçmiş olaya uymaz. 'In order to gather' derlemeyi bir amaç gibi gösterir; tekrarı fark etmek derlemenin amacı değil, sonucudur. 'Despite gathering' karşıtlık kurar; çok hikâye toplamak tekrarı fark etmeye engel değil, onu kolaylaştırır." },

  // ---------- boşluklu metin ----------
  { id: 'gs-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: ['moral', 'borrow'],
    level: 'orta', cefr: 'B2', title: 'Paris, 1697',
    text: "In 1697, the French writer Charles Perrault published a small book of stories under the title Histoires ou contes du temps passé, or 'Stories or Tales from Past Times'. (1) ---- Perrault probably did not invent most of these stories, his book became one of the most influential collections of its kind. It contains well-known early written versions of Cinderella and Little Red Riding Hood, tales that had probably been told aloud for generations before anyone thought of (2) ---- them in print. Perrault wrote for elegant, educated readers, and he adjusted the stories to suit their tastes. By the time his book appeared, telling fairy tales (3) ---- a fashionable pastime in Parisian salons for some years. Perrault also ended each tale with a short verse (4) ---- the form of a moral, which spelled out the lesson that readers were expected to draw. (5) ----, his Little Red Riding Hood does not finish with a happy rescue but with a warning to young women about charming strangers.",
    steps: [
      { konu: ['bağlaç'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['Although', 'Because', 'Unless', 'Once', 'So that'], answer: 0,
        explain: "Perrault büyük olasılıkla bu hikâyelerin çoğunu kendisi uydurmadı; buna karşın kitabı türünün en etkili derlemelerinden biri oldu. Beklentiye aykırı bu ilişkiyi 'Although' (-e rağmen) kurar. 'Because' hikâyeleri uydurmamış olmayı etkili olmanın nedeni yapar; mantık bozulur. 'Unless' (-medikçe) ve 'Once' (-ince, -dikten sonra) bir koşul ya da zaman bildirir; geçmişte olmuş iki olguyu bağlamaz. 'So that' (-sın diye) bir amaç bildirir." },
      { konu: ['kelime', 'fiil'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['borrowing', 'abandoning', 'resembling', 'punishing', 'preserving'], answer: 4,
        explain: "Masallar kuşaklar boyunca sözlü anlatılmış, sonra biri onları basılı olarak korumayı düşünmüş: 'preserving them in print' (basılı olarak saklamak, korumak). 'Borrowing' (ödünç almak, başka yerden almak) bir kaynağı gerektirir; 'in print' ile birleşince anlamsız olur. 'Abandoning' (terk etmek) korumanın tersidir. 'Resembling' (benzemek) ve 'punishing' (cezalandırmak) masallarla basılı kitap arasındaki ilişkiyi anlatmaz." },
      { konu: ['zaman uyumu'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['has been', 'had been', 'will have been', 'is being', 'would be'], answer: 1,
        explain: "'By the time his book appeared' (kitabı çıktığında) geçmişte bir an veriyor; masal anlatmak bu andan önce birkaç yıldır moda olan bir uğraştı ve 'for some years' bu süreyi gösteriyor. Geçmişteki bir andan önce başlayıp o ana kadar süren durum past perfect ile anlatılır: 'had been'. 'Has been' bugüne bağlanır; 'will have been' geleceğe bakar. 'Is being' şimdiki zamandır. 'Would be' geçmişin geleceğini anlatır; kitaptan önceki süreyi karşılamaz." },
      { konu: ['edat'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['for', 'in', 'by', 'at', 'on'], answer: 1,
        explain: "'In the form of' (… biçiminde) kalıplaşmış bir edat öbeğidir: Perrault her masalı bir 'ders' biçiminde kısa bir şiirle bitirdi. 'For', 'by', 'at' ve 'on' 'the form of' ile bu anlamda kullanılmaz; 'for the form of' bir amaç, 'by the form of' bir yöntem sanısı verir ama ikisi de kalıp değildir." },
      { konu: ['bağlantı zarfı'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['For example', 'On the contrary', 'Nevertheless', 'Otherwise', 'Meanwhile'], answer: 0,
        explain: "Önceki cümle Perrault'nun her masalı okura bir ders veren kısa bir şiirle bitirdiğini söylüyor. Boşluklu cümle buna bir örnek getiriyor: Kırmızı Başlıklı Kız kurtarılmayla değil, genç kadınlara yönelik bir uyarıyla bitiyor. Örnek 'For example' ile bağlanır. 'On the contrary' ve 'Nevertheless' karşıtlık kurar; oysa örnek önceki cümleyi destekliyor. 'Otherwise' (aksi hâlde) bir koşulun sonucunu, 'Meanwhile' (bu arada) aynı anda olan başka bir olayı bildirir." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'gs-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['timeless'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: '----, the story still seems timeless to the children who hear it at bedtime today.',
    options: [
      'Because it was only made up a few months ago by a local writer',
      'Unless their parents read it aloud in a quiet and gentle voice',
      'Since most children find old stories dull and hard to follow',
      'So that the children would fall asleep more quickly than usual',
      'Although it was first written down more than two centuries ago',
    ], answer: 4,
    explain: "Ana cümle hikâyenin bugün de çocuklara eskimemiş göründüğünü söylüyor; 'still' (hâlâ, yine de) beklentiye aykırı bir durum bildiriyor. Hikâyenin iki yüzyıldan uzun süre önce yazıya geçirilmiş olması bu beklentiyi kurar ve 'although' karşıtlığı tamamlar. Birkaç ay önce uydurulmuş bir hikâyenin eskimemesi şaşırtıcı değildir; 'still' ile çelişir. Çocukların eski hikâyeleri sıkıcı bulması mantığı ters çevirir. Ebeveynin sesine bağlanan koşul ve çocukları uyutma amacı hikâyenin zamansızlığını açıklamaz; amaç cümlesi ayrıca 'would' ile geçmişe kayıyor." },

  { id: 'gs-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['storyteller'],
    level: 'kolay', cefr: 'B1', konu: ['neden-sonuç'],
    q: 'The old woman next door was a wonderful storyteller, so ----.',
    options: [
      'children from nearby houses often gathered at her door in the evening',
      'she could never think of anything to tell the local children at bedtime',
      'none of us had ever heard her tell a single story from start to end',
      'her grandchildren had to buy books of tales for her every week',
      'she rarely spoke to the neighbours about her own childhood',
    ], answer: 0,
    explain: "'So' (bu yüzden) bir sonuç getirir: yaşlı komşu harika bir masalcıydı, bu yüzden çevredeki evlerin çocukları akşamları kapısında toplanırdı. Aklına anlatacak bir şey gelmemesi ve hiç hikâye anlatmamış olması 'harika bir masalcı' olmakla çelişir. Torunlarının ona masal kitabı alması ve komşularla çocukluğunu konuşmaması iyi bir anlatıcı olmanın sonucu değildir." },

  { id: 'gs-t3', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['transcribe'],
    level: 'orta', cefr: 'B2', konu: ['koşul'],
    q: "If the old woman's tales had not been transcribed by a visiting student, ----.",
    options: [
      'they will be forgotten as soon as she stops telling them',
      'she would have told them to far more people than she did',
      'they might have been forgotten soon after her death',
      'they would never have been told aloud in her village',
      'the student had already published them in a book',
    ], answer: 2,
    explain: "Koşul cümlesi geçmişte gerçekleşmemiş bir durumu varsayıyor (üçüncü tip): masallar yazıya geçirilmeseydi ne olurdu? Mantıklı sonuç, onların yaşlı kadının ölümünden sonra unutulabileceğidir; 'might have been forgotten' de üçüncü tipin sonuç biçimidir. 'Will be forgotten' gelecek zamanla kurulur; üçüncü tip koşula uymaz. Yazıya geçirilmemenin daha çok kişiye anlatmayı sağlaması ya da köyde hiç anlatılmamaya yol açması mantıkça bağlanmaz; masallar zaten yazıya geçirilmeden önce sözlü anlatılıyordu. Öğrencinin masalları önceden bir kitapta yayımlamış olması ise koşulun kendisiyle çelişir ve sonuç biçiminde değildir." },

  { id: 'gs-t4', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['villain', 'wicked'],
    level: 'zor', cefr: 'C1', konu: ['karşıtlık'],
    q: '----, the villain of the recent film is given a painful past that almost makes viewers feel sorry for her.',
    options: [
      'Just as the older tale offers no explanation for the queen\'s cruelty',
      'Since the older tale has always been read as a warning about pride',
      'Whereas the wicked queen of the older tale is evil without a reason',
      'Unless the older tale is retold with a far more cheerful ending',
      'Now that viewers have grown tired of villains who seem likeable',
    ], answer: 2,
    explain: "Ana cümle yeni filmdeki kötü karaktere izleyiciyi neredeyse ona acındıracak acı bir geçmiş verildiğini söylüyor. 'Whereas' (oysa) iki şeyi karşılaştırıp farkı vurgular: eski masaldaki kötü kalpli kraliçe nedensiz biçimde kötüdür, filmdeki ise bir geçmişle açıklanır. 'Just as' (tıpkı … gibi) benzerlik kurar; oysa eski masalın açıklama vermemesi filmin geçmiş eklemesine benzemez, onun tersidir. Masalın kibre karşı bir uyarı sayılması filmdeki değişikliğin nedeni olamaz. 'Unless' ile kurulan koşul geçmişte yapılmış bir filmi anlatmaz. Sevimli kötülerden bıkan izleyiciler için kötüyü daha sevimli yapmak mantığı ters çevirir." },

  // ---------- çeviri ----------
  { id: 'gs-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['plot'],
    level: 'orta', cefr: 'B2', konu: ['isim cümleciği'],
    q: 'What makes a tale memorable is often not its plot but the way in which it is told.',
    options: [
      'Bir masalı akılda kalıcı kılan şey çoğu zaman olay örgüsü değil, anlatılış biçimidir.',
      'Bir masalın akılda kalması için hem olay örgüsünün hem anlatılış biçiminin güçlü olması gerekir.',
      'Bir masalı akılda kalıcı kılan şey, anlatılış biçiminden çok her zaman olay örgüsüdür.',
      'Olay örgüsü sıradan olan masallar, ne kadar iyi anlatılırsa anlatılsın çabuk unutulur.',
      'Bir masalın nasıl anlatıldığı, çoğu zaman olay örgüsünün nasıl kurulduğunu da belirler.',
    ], answer: 0,
    explain: "Cümlenin öznesi bir isim cümleciği: 'What makes a tale memorable' (bir masalı akılda kalıcı kılan şey). 'Not … but …' (… değil, …) olay örgüsünü dışarıda bırakıp anlatılış biçimini öne çıkarıyor; 'often' (çoğu zaman) de temkin katıyor. Doğru çeviri bunların hepsini korur. 'Hem … hem …' diyen seçenek iki şeyi eşitliyor. 'Her zaman olay örgüsüdür' diyen seçenek anlamı tersine çeviriyor ve 'often' temkinini atıyor. Sıradan olay örgülü masalların unutulduğu cümlede yok. Anlatılış biçiminin olay örgüsünü belirlemesi de cümlenin kurmadığı bir ilişki." },

  { id: 'gs-c2', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['storyteller'],
    level: 'zor', cefr: 'C1', konu: ['edilgen kanaat'],
    q: 'Wandering storytellers are thought to have adapted their tales to suit each new audience they met.',
    options: [
      'Gezgin masalcılar, masallarını karşılaştıkları her yeni dinleyici kitlesine göre uyarlamaları gerektiğini düşünürdü.',
      'Gezgin masalcıların masallarını hiçbir dinleyici kitlesine göre değiştirmedikleri düşünülmektedir.',
      'Gezgin masalcıların, karşılaştıkları her yeni dinleyici kitlesi için yepyeni masallar uydurdukları sanılmaktadır.',
      'Bazı gezgin masalcıların masallarını yalnız belirli dinleyici kitlelerine göre uyarladığı bilinmektedir.',
      'Gezgin masalcıların, masallarını karşılaştıkları her yeni dinleyici kitlesine uyacak biçimde uyarladıkları düşünülmektedir.',
    ], answer: 4,
    explain: "'Are thought to have adapted' bir edilgen kanaat yapısıdır: düşünen başkalarıdır, masalcılar değil; 'to have adapted' de uyarlamanın geçmişte yapıldığını gösterir. Doğru çeviri 'uyarladıkları düşünülmektedir' diyerek ikisini de korur. Masalcıların kendilerinin bir şey düşündüğünü söyleyen seçenek kanaatin sahibini değiştiriyor. Hiç değiştirmediklerini söyleyen seçenek anlamı tersine çeviriyor. Yepyeni masal uydurmak, var olan masalı uyarlamakla aynı şey değil. 'Bazı' ve 'yalnız belirli' sözleri kapsamı daraltıyor; 'bilinmektedir' de kanaati kesinliğe çeviriyor." },

  { id: 'gs-c3', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['villain'],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'Çocukların en sevdiği masallar, çoğu zaman kötü karakterin sonunda cezalandırıldığı masallardır.',
    options: [
      'Children love most tales, even the ones in which the villain is never punished in the end.',
      'The tales in which the villain is punished in the end are often too frightening for children.',
      'Children often love the villain most in the tales where he is punished at the very end.',
      'The tales that children love most are often those in which the villain is punished in the end.',
      'The tales that children love most usually end with the villain escaping without any punishment.',
    ], answer: 3,
    explain: "Türkçe cümlede iki sıfat cümleciği var: 'çocukların en sevdiği masallar' (the tales that children love most) ve 'kötü karakterin sonunda cezalandırıldığı masallar' (those in which the villain is punished in the end). 'Çoğu zaman' 'often' ile karşılanır. Doğru seçenek iki cümleciği de yerinde tutar. Çocukların cezasız kalan kötüleri de sevdiğini söyleyen seçenek ve kötünün cezasız kaçtığını söyleyen seçenek anlamı tersine çeviriyor. Bu masalların çocuklar için fazla korkutucu olduğu Türkçe cümlede yok. Çocukların en çok kötü karakteri sevdiğini söyleyen seçenek de sevginin nesnesini masaldan kötü karaktere kaydırıyor." },

  { id: 'gs-c4', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['tale'],
    level: 'kolay', cefr: 'B1', konu: ['zaman'],
    q: 'Bu masalı çocukluğumdan beri biliyorum.',
    options: [
      'I knew this tale as a child, but I have forgotten it now.',
      'I will learn this tale before my own children are born.',
      'I have been telling this tale to children for many years.',
      "I didn't know this tale until I had children of my own.",
      'I have known this tale since I was a child.',
    ], answer: 4,
    explain: "'Çocukluğumdan beri biliyorum' geçmişte başlayıp bugün de süren bir durumu anlatır; İngilizcede 'have known … since' ile kurulur ('know' durum fiili olduğu için sürekli biçim almaz). Çocukken bilip şimdi unuttuğunu söyleyen seçenek bugünkü bilmeyi ortadan kaldırıyor. Gelecekte öğrenme ve kendi çocukları olana kadar bilmeme Türkçe cümleyle çelişir. Yıllardır çocuklara anlattığını söyleyen seçenek 'bilmek' yerine 'anlatmak'tan söz ediyor." },

  // ---------- okuma parçası 1 (4 soru, YDS biçimi) ----------
  { id: 'gs-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['folklore', 'soften', 'wicked'],
    level: 'orta', cefr: 'B2', title: 'İki kardeş ve bir kitap',
    text: "In 1812, two German brothers, Jacob and Wilhelm Grimm, published the first volume of a collection called Kinder- und Hausmärchen, usually translated as Children's and Household Tales. The brothers were scholars of language and law rather than children's writers, and their original aim was largely academic: they hoped to record a body of German folklore before it vanished. Yet the book that most readers know today is not quite the one they first published. Over the following decades the collection went through a number of editions, and with each one Wilhelm in particular reworked the stories. He made the language smoother and more literary and added descriptive detail. He also seems to have softened material that parents might object to. In some tales, for instance, a cruel mother in the early editions became a stepmother in later ones, so that the cruelty no longer came from a child's own parent. The popular image of the brothers walking from village to village and listening to elderly peasants is also only partly accurate. Many of their tales were apparently supplied by educated, middle-class friends and acquaintances, some of whom had first heard the stories from servants or nurses. None of this makes the collection less valuable. It does suggest, however, that the tales were never simply copied down word for word from the lips of ordinary country people.",
    steps: [
      { konu: ['ayrıntı'],
        q: "According to the passage, the Grimm brothers' original purpose was ----.",
        options: [
          'to save traditional stories that they believed were being lost',
          'to entertain children with tales that they had invented themselves',
          'to prove that German stories were older than those of France',
          'to earn enough money to continue their studies of the law',
          'to replace the stories that servants and nurses used to tell',
        ], answer: 0,
        explain: "Parçaya göre kardeşlerin ilk amacı büyük ölçüde akademikti: yok olmadan önce Alman halk kültürünün bir bölümünü kayda geçirmek istiyorlardı. Doğru seçenek bunu 'kaybolduğuna inandıkları geleneksel hikâyeleri kurtarmak' diye anlatıyor. Parça kardeşlerin çocuk yazarı olmadığını ve masalları kendilerinin uydurmadığını gösteriyor. Fransız masallarıyla yaş karşılaştırması ve para kazanma amacı parçada yok. Hizmetçiler ve dadılar yalnız bazı kaynak kişilerin masalları ilk duyduğu yer olarak geçiyor; onların hikâyelerinin yerine bir şey koymak gibi bir amaç anılmıyor." },
      { konu: ['ayrıntı'],
        q: 'The passage states that, in later editions of the collection, ----.',
        options: [
          'every tale that included a stepmother was removed from the book',
          'Jacob rewrote the tales in a plainer style closer to spoken German',
          'certain wicked mothers were replaced by stepmothers',
          'the number of tales was greatly reduced to suit young readers',
          'a short lesson for children was added to the end of each tale',
        ], answer: 2,
        explain: "Parça, sonraki baskılarda bazı masallardaki zalim annenin üvey anneye dönüştüğünü, böylece zulmün artık çocuğun kendi anne ya da babasından gelmediğini söylüyor; doğru seçenek bunu başka sözcüklerle veriyor. Üvey anne geçen masalların çıkarıldığı söylenmiyor; tersine, üvey anneler sonradan eklendi. Düzeltmeleri özellikle Wilhelm yaptı ve dili daha edebî hâle getirdi; Jacob'ın sade, konuşma diline yakın bir üslup kullandığı parçada yok. Masal sayısının azaltılması ve her masalın sonuna bir ders eklenmesi de parçada geçmiyor." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that ----.',
        options: [
          'the brothers deliberately hid the names of all the people who helped them',
          'the published tales reflect the brothers\' own choices as well as older traditions',
          'elderly peasants generally refused to share their stories with visiting scholars',
          'the first edition was far more popular with children than the later editions',
          'nineteenth-century parents rarely read fairy tales aloud to their own children',
        ], answer: 1,
        explain: "Wilhelm'in dili düzeltmesi, ayrıntı eklemesi ve anne-baba itiraz eder diye bazı yerleri yumuşatması, ayrıca masalların sözcüğü sözcüğüne kayda geçirilmediğinin söylenmesi, derlemenin eski geleneklerin yanında kardeşlerin kendi seçimlerini de yansıttığını gösterir. Kaynak kişilerin adlarının bilerek gizlendiği parçada yok. Yaşlı köylülerin hikâye paylaşmayı reddettiği söylenmiyor; yalnız köy köy dolaşma imgesinin kısmen doğru olduğu belirtiliyor. Baskıların çocuklar arasında ne kadar sevildiği karşılaştırılmıyor. Anne-babaların itirazından söz edilmesi, onların çocuklarına masal okumadığını değil, okunan şeye önem verdiğini düşündürür." },
      { konu: ['başlık'],
        q: 'Which title would suit the passage best?',
        options: [
          'Why German Villages Lost Their Storytellers',
          'The Life of Wilhelm Grimm as a Scholar of Law',
          'Servants and Nurses as the First Storytellers',
          'How Children Learn Lessons from Fairy Tales',
          'A Collection That Changed as It Was Reprinted',
        ], answer: 4,
        explain: "Parça, Grimm kardeşlerin derlemesinin baskıdan baskıya nasıl değiştiğini ve masalların sanıldığı gibi doğrudan köylülerden olduğu gibi kaydedilmediğini anlatıyor; 'Yeniden basıldıkça değişen bir derleme' bu bütünü kapsar. Köylerin masalcılarını kaybetmesi parçanın konusu değil. Wilhelm Grimm'in hukuk bilgini olarak hayatı anlatılmıyor; hukuk yalnız bir kez anılıyor. Hizmetçiler ve dadılar yalnız bir ayrıntıda geçiyor. Çocukların masallardan ders çıkarması da parçada ele alınmıyor." },
    ] },

  // ---------- okuma parçası 2 (4 soru, YDS biçimi) ----------
  { id: 'gs-o2', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['oral', 'borrow'],
    level: 'zor', cefr: 'C1', title: 'Demirci ve pazarlık',
    text: "Folk tales leave few physical traces. A story that was passed on in oral form for centuries may not have been written down until quite recently, so it can seem impossible to say how old it really is. In 2016, however, the researchers Sara Graça da Silva and Jamshid Tehrani tried a new approach. They borrowed a method from evolutionary biology, where family trees are used to work out how species are related, and applied it to the Indo-European languages and the tales told in them. If a tale turned up in many related languages, including some that had separated very early, they reasoned that it might already have existed in the shared ancestor of those languages, rather than having spread later from one community to its neighbours. On this basis, they suggested that some well-known tales could be several thousand years old. Their most striking example was 'The Smith and the Devil', in which a blacksmith makes a deal with an evil being in exchange for great skill and then tricks it. According to their estimate, this tale might go back about 6,000 years, to a time before written records existed. The claim attracted wide attention, but it deserves to be treated with caution. Tales can cross language borders easily, carried by travellers, traders and translators, and such borrowing can make a story look older than it is. The results also depend on how the language tree itself is drawn, which remains a matter of debate. Even so, the study has made a question that once seemed unanswerable at least worth asking.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the researchers assumed that a tale found in many related languages ----.',
        options: [
          'had probably been invented by a single famous storyteller',
          'must have been spread by traders just before it was written down',
          'was likely to be younger than a tale found in only one language',
          'could be dated exactly by examining its oldest written copy',
          'might go back to a common ancestor of those languages',
        ], answer: 4,
        explain: "Parçaya göre araştırmacılar, erken ayrılmış diller de dahil pek çok akraba dilde görülen bir masalın, bu dillerin ortak atasında zaten var olmuş olabileceğini düşündü; doğru seçenek bunu 'ortak ataya uzanabilir' diye veriyor. Tek bir ünlü masalcının uydurması parçada yok. Tüccarların taşıması varsayım değil, yönteme yöneltilen bir eleştiri olarak geçiyor; kısmen doğru ama yanlış yere bağlanmış. Masalın tek dilde görülen bir masaldan daha genç olacağı varsayımın tersidir. En eski yazılı kopya ile kesin tarihleme de yöntemin çıkış noktasıyla çelişir: parça, yazılı kayıtların masalın yaşını göstermediğini söylüyor." },
      { konu: ['gönderim'],
        q: "In the passage, the word 'it' in 'and then tricks it' refers to ----.",
        options: ['the deal', 'the great skill', 'the evil being', 'the blacksmith', 'the tale'], answer: 2,
        explain: "Masalda demirci, büyük bir ustalık karşılığında kötü bir varlıkla anlaşma yapıyor ve sonra onu kandırıyor. Kandırılan, anlaşmanın öbür tarafı olan kötü varlıktır: 'the evil being'. Anlaşma ve ustalık kandırılabilecek şeyler değildir. Demirci kandıran kişidir; 'tricks' fiilinin öznesidir. Masalın kendisi de hikâyenin içinde kandırılan bir şey değildir." },
      { konu: ['yazarın tutumu'],
        q: "The author's attitude towards the claim that 'The Smith and the Devil' is about 6,000 years old can best be described as ----.",
        options: [
          'enthusiastic, since it proves that tales were told before writing',
          'dismissive, since the method was taken from a different science',
          'cautiously interested, since it raises a question worth pursuing',
          'indifferent, since the age of a tale has little real importance',
          'hostile, since the researchers ignored languages outside Europe',
        ], answer: 2,
        explain: "Yazar iddianın temkinle karşılanması gerektiğini söylüyor ve iki zayıf noktayı sayıyor: masalların dil sınırlarını kolayca aşması ve dil ağacının nasıl çizileceğinin tartışmalı olması. Yine de çalışmanın, eskiden cevapsız görünen bir soruyu en azından sorulmaya değer kıldığını ekliyor. Bu tutum temkinli bir ilgidir. İddianın bir şeyi kanıtladığını söyleyen coşkulu tutum yazarın uyarılarıyla çelişir. Yöntemin biyolojiden alınması bir kusur olarak anılmıyor; küçümseme yok. Yazar konuya kayıtsız değil. Avrupa dışındaki dillerin göz ardı edildiği de parçada eleştiri olarak geçmiyor." },
      { konu: ['ana fikir'],
        q: 'The passage is mainly concerned with ----.',
        options: [
          'the reasons why folk tales were rarely written down before modern times',
          'a blacksmith who appears in many European stories as a clever hero',
          'an attempt to date very old tales and the doubts that surround it',
          'the way biologists draw family trees to show how species are related',
          'the part played by travellers and traders in carrying tales abroad',
        ], answer: 2,
        explain: "Parça, masalların yaşını ölçmek için biyolojiden alınan bir yöntemi, bu yöntemin bazı masallara binlerce yıllık bir geçmiş biçmesini ve bu sonuca yöneltilen kuşkuları anlatıyor; ana fikir budur. Masalların neden geç yazıya geçirildiği yalnız girişte bir çıkış noktası olarak geçiyor. Demirci yalnız bir örnek masalın kahramanı. Biyologların soyağacı çizmesi yöntemin kaynağı olarak bir kez anılıyor. Gezginlerin ve tüccarların rolü de yalnız eleştirilerden birinde geçiyor; hepsi kısmen doğru ama parçanın bütününü kapsamıyor." },
    ] },

  // ---------- diyalog ----------
  { id: 'gs-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['bağlam'],
    q: "Ece: Grandad, will you tell me a story before I go to sleep?\nGrandad: Of course. Which one would you like tonight?\nEce: ----\nGrandad: Again? You must know that one by heart by now! All right, get under the blanket.",
    options: [
      'Can we read a new book from the library instead?',
      "The clever hen one, please. It's my favourite.",
      "I'm not tired at all. Can I stay up a bit longer?",
      'Grandma has already told me one before dinner.',
      "Do you know any stories that I haven't heard yet?",
    ], answer: 1,
    explain: "Dede hangi masalı istediğini soruyor; Ece'nin bir masal seçmesi gerekiyor. Dedenin 'Yine mi? Onu artık ezbere biliyor olmalısın!' demesi, Ece'nin çok kez dinlediği bir masalı istediğini gösteriyor: akıllı tavukla ilgili, en sevdiği masal. Kütüphaneden yeni bir kitap ya da hiç dinlemediği bir hikâye istemek 'Yine mi?' ile çelişir. Hiç yorgun olmadığını söylemek hangi masalı istediği sorusunu cevaplamıyor. Büyükannenin yemekten önce masal anlatmış olması da 'onu ezbere biliyorsun' sözünün gösterdiği belli bir masalı adlandırmıyor." },

  { id: 'gs-d2', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['folklore', 'borrow'],
    level: 'orta', cefr: 'B2', konu: ['soru-cevap uyumu'],
    q: "Student: Excuse me. I'm writing an essay on Cinderella, and I'd like to find some older versions of the story.\nLibrarian: ----\nStudent: Mostly European ones, I think, but I'd be happy to look at others as well.\nLibrarian: Then try the folklore section on the second floor. There are collections from all over the world up there.",
    options: [
      'Have you already borrowed the books you reserved last week?',
      'Would you rather watch one of the film versions instead?',
      'How many words does your essay need to be in the end?',
      'Do you have any particular countries or regions in mind?',
      'Why did you choose Cinderella rather than another tale?',
    ], answer: 3,
    explain: "Öğrencinin cevabı 'Çoğunlukla Avrupa'dakiler sanırım, ama başkalarına da bakarım' bir yer ya da bölge sorusunu karşılıyor; kütüphanecinin ardından dünyanın her yerinden derlemeler önermesi de buna dayanıyor. Bu yüzden boşluğa 'Aklınızda belli ülkeler ya da bölgeler var mı?' gelir. Geçen hafta ayırttığı kitapları ödünç alıp almadığı ve film izlemeyi tercih edip etmeyeceği soruları 'Avrupa'dakiler' ile cevaplanmaz. Ödevin kaç sözcük olacağı sorusu bir sayı bekler. Neden Külkedisi'ni seçtiği sorusu bir gerekçe bekler; bölge adı vermek onu karşılamaz." },

  { id: 'gs-d3', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['wicked'],
    level: 'orta', cefr: 'B2', konu: ['bağlam'],
    q: "Selin: I read Jack and the Beanstalk to Mert last night, and I suddenly realised how dark it is. There's a wicked giant who keeps saying he wants to eat a little boy!\nKaan: I know. But children usually cope with that sort of thing better than we expect.\nSelin: ----\nKaan: Exactly. And in the end the boy gets away safely, which is probably what matters most to them.",
    options: [
      'So you think we should stop reading him fairy tales altogether?',
      "He wasn't scared at all. He fell asleep before the giant appeared.",
      "To be honest, I'd rather read him something with a gentler story.",
      "Maybe it helps that they know it's only a story and not real life.",
      'Yes, and the giant looks even scarier in the old film version.',
    ], answer: 3,
    explain: "Kaan çocukların böyle şeylerle sandığımızdan daha iyi başa çıktığını söylüyor; Selin'in boşluktaki sözü bu görüşü sürdürmeli, çünkü Kaan 'Aynen öyle' diye onaylayıp bir gerekçe daha ekliyor. 'Belki bunun yalnız bir hikâye olduğunu, gerçek olmadığını bilmeleri yardımcı oluyordur' Kaan'ın görüşünü destekler. Masal okumayı tümden bırakma önerisi ve daha yumuşak bir hikâye okuma isteği Kaan'ın görüşüne karşı çıkar; 'Exactly' ile onaylanmaz. Mert'in dev çıkmadan uyuduğunu söylemek kısmen ilgili ama çocukların başa çıkması hakkındaki genel bir görüş değil; Kaan'ın 'sonunda çocuk kurtuluyor' eki de bu durumda anlamsız kalır. Eski filmin daha korkutucu olması da Kaan'ın onayladığı fikirle bağlanmıyor." },

  // ---------- anlamca en yakın cümle ----------
  { id: 'gs-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['kapsam'],
    q: 'Not every tale in the collection was meant for children; some were clearly written with adult readers in mind.',
    options: [
      'None of the tales in the collection were written for children; they were all aimed at adults.',
      'Some of the tales in the collection were obviously intended for adults rather than children.',
      'Every tale in the collection was intended for children, although adults enjoyed them as well.',
      'Most adult readers found the tales in the collection far too childish to enjoy.',
      'Some of the tales in the collection were later rewritten so that children could read them.',
    ], answer: 1,
    explain: "'Not every tale' (her masal değil) bir kısmın dışarıda kaldığını söyler; noktalı virgülden sonraki bölüm de bu kısmın açıkça yetişkinler düşünülerek yazıldığını belirtiyor. Doğru seçenek bunu 'bazıları açıkça yetişkinlere yönelikti' diye verir. Hiçbirinin çocuklar için yazılmadığını söyleyen seçenek kapsamı 'bazı'dan 'hiçbiri'ne genişletiyor. Hepsinin çocuklar için yazıldığını söyleyen seçenek cümleyi tersine çeviriyor. Yetişkinlerin masalları çocukça bulması ve bazı masalların sonradan çocuklar için yeniden yazılması verilen cümlede yok." },

  { id: 'gs-y2', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: ['retell'],
    level: 'zor', cefr: 'C1', konu: ['karşılaştırma'],
    q: 'In this collection, the older a retelling of the tale is, the less likely it is to end happily.',
    options: [
      'In this collection, the newest versions of the tale are the ones least likely to have a happy ending.',
      'In this collection, old and new versions of the tale are about equally likely to have a happy ending.',
      'In this collection, only the very oldest version of the tale fails to have a happy ending.',
      'In this collection, happy endings become more common as the versions of the tale get more recent.',
      'In this collection, the older versions of the tale tend to be longer and more detailed than the newer ones.',
    ], answer: 3,
    explain: "'The older …, the less likely …' (ne kadar eskiyse o kadar az olası) iki şeyin birlikte değiştiğini söyler: anlatım eskidikçe mutlu son azalıyor, yani yeni anlatımlarda mutlu son daha sık. Doğru seçenek aynı ilişkiyi ters yönden kuruyor: anlatımlar yenileştikçe mutlu sonlar çoğalıyor. En yeni anlatımların en az mutlu sonlu olduğunu söyleyen seçenek ilişkiyi tersine çeviriyor. Eşit olasılık diyen seçenek ilişkiyi ortadan kaldırıyor. Yalnız en eski anlatımın mutsuz bittiğini söyleyen seçenek kademeli bir eğilimi tek bir örneğe indiriyor. Uzunluk ve ayrıntı karşılaştırması verilen cümlede yok." },

  // ---------- paragraf tamamlama ----------
  { id: 'gs-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['motif'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'Folklorists noticed long ago that tales told in very different places often share the same basic story. To make such tales easier to compare, the Finnish scholar Antti Aarne published a catalogue of tale types in 1910. ----. Today the expanded system is usually known as the ATU index, after the initials of its three main authors, and it gives each tale type its own number.',
    options: [
      'Most of the tales he worked with came from collections made in Finland and nearby countries',
      'The American folklorist Stith Thompson later enlarged it, and Hans-Jörg Uther revised it in 2004',
      'Some scholars, however, prefer to study each tale within the culture in which it was first told',
      'In many of these tales, the motif of a hero who must complete three hard tasks appears again',
      'Comparing tales in this way soon became a popular method among scholars in other countries too',
    ], answer: 1,
    explain: "Boşluktan sonraki cümle genişletilmiş dizine ('the expanded system') üç ana yazarının baş harflerinden ATU adının verildiğini söylüyor. Önceki cümlede yalnız Aarne anıldığı için boşluk öbür iki yazarı tanıtmalı: diziyi sonradan genişleten Stith Thompson ve 2004'te yeniden düzenleyen Hans-Jörg Uther. Aarne'nin çalıştığı masalların nereden geldiği, bazı bilginlerin masalı kendi kültüründe incelemeyi seçmesi ve bu karşılaştırma yönteminin başka ülkelerde de yayılması konuyla ilgili, ama hiçbiri 'üç yazar' sözünü karşılamıyor. Üç zor görevle ilgili motif ise 'three' sözcüğüyle tuzak kuruyor; sayılan şey yazarlar değil, görevler." },

  { id: 'gs-p2', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['gönderim'],
    q: 'Stories about a mistreated girl who wins a better life with the help of magic are found in many cultures. One of the oldest known examples is thought to have been written down in China in the ninth century. ----. Like the heroine of the European Cinderella, she is helped by a magical creature, and she is finally recognised because a lost shoe fits nobody else.',
    options: [
      'Many of these stories also feature a jealous older sister who is punished at the end',
      'Its heroine, a girl named Ye Xian, is treated cruelly by her stepmother after her father dies',
      'Scholars still disagree about how such a story could have travelled all the way from China to Europe',
      'Few people outside China, however, seem to have known about it until much more recently',
      'European versions of the tale tend to be longer and to include more detailed descriptions',
    ], answer: 1,
    explain: "Boşluktan sonraki cümle 'she' (o, kız) diye bir kahramana gönderme yapıyor ve onu Avrupa'daki Külkedisi'nin kahramanıyla karşılaştırıyor: ona sihirli bir yaratık yardım ediyor ve kaybolan bir ayakkabı sayesinde tanınıyor. Bu yüzden boşluk, Çin'deki masalın kahramanını tanıtmalı: babası ölünce üvey annesinin zulmüne uğrayan Ye Xian. Kıskanç ablayı anan seçenek de bir kadından söz ediyor, ama ceza gören abla sihirli yardım alıp ayakkabıyla tanınan kişi olamaz. Masalın Avrupa'ya nasıl ulaştığı, Çin dışında ne zaman tanındığı ve Avrupa anlatımlarının uzunluğu ise 'she' sözünün gösterebileceği bir kahraman tanıtmıyor." },

  // ---------- akışı bozan cümle ----------
  { id: 'gs-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['folklore'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'In 1953, the Turkish folklorist Pertev Naili Boratav and the German scholar Wolfram Eberhard published a catalogue of Turkish folk tales.',
      'Written in German, the book grouped a large number of tales according to the kind of story that each one told.',
      'This made it possible to see which Turkish tales resembled stories from other countries and which seemed to be found mainly in Anatolia.',
      'Today, Turkish children are more likely to come across these tales on television or in picture books than to hear them from their grandparents.',
      'For later researchers, the catalogue became a basic reference whenever Turkish tales had to be compared with those of other traditions.',
    ], answer: 3,
    explain: "Parça Boratav ile Eberhard'ın 1953'te yayımladığı Türk masal tipleri kataloğunu anlatıyor: kitabın yazılması (I), masalları türlerine göre gruplaması (II), bunun karşılaştırmayı nasıl kolaylaştırdığı (III) ve sonraki araştırmacılar için temel kaynak olması (V). V'teki 'the catalogue' III'ün bıraktığı yerden devam ediyor. IV. cümle de Türk masallarından söz ediyor ama konuyu bugünkü çocukların masallarla nerede karşılaştığına kaydırıyor; katalogla bağı kopuyor." },

  { id: 'gs-b2', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['oral', 'storyteller'],
    level: 'kolay', cefr: 'B2', konu: ['akış'],
    sentences: [
      'In many oral traditions, a tale begins with a fixed phrase that tells listeners a story is about to start.',
      "English tales traditionally open with 'Once upon a time', while Turkish storytellers often say 'Bir varmış, bir yokmuş', roughly 'Once there was, once there was not'.",
      'Some modern writers, by contrast, prefer to give their stories an unexpected or even an unhappy ending.',
      'Such openings work like a signal, moving the audience out of everyday time and into a world where anything can happen.',
      'Because the words are so familiar, even the first few of them are often enough to make young listeners fall silent.',
    ], answer: 2,
    explain: "Parça masalların kalıp açılış sözlerini anlatıyor: genel bilgi (I), İngilizce ve Türkçe örnekler (II), bu sözlerin dinleyiciyi gündelik zamandan çıkaran bir işaret olması (IV) ve tanıdık oldukları için çocukları hemen susturması (V). IV'teki 'Such openings' (bu tür açılışlar) II'deki örneklere dayanıyor. III. cümle de hikâyelerden söz ediyor ama açılıştan sona, masallardan da bugünkü yazarlara geçiyor; II ile IV arasındaki bağı koparıyor." },
];

export default { id: 'genel-masal', course: C, title: U, order: 15, cards, items };
