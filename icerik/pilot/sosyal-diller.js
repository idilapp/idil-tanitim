// iDil › Sosyal bilimler › Kaybolan diller.
// Tümü özgün: Claude yazdı (13 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (yalnız olgular; metin özgün): bugün yaklaşık 7.000 dil konuşuluyor ve kabaca %40'ı tehlikede sayılıyor
// (Ethnologue; temkinli); dünya nüfusunun yarısından fazlası yirmi kadar dilden birini konuşuyor (Ethnologue; temkinli);
// dillerin çoğu dil kaymasıyla kaybolur; İbranice yüzyıllarca çoğunlukla duada ve yazıda kullanıldı, 19. yüzyılın sonundan
// başlayarak yeniden gündelik dil oldu; Galce eğitim veren okullar ve Galce yayınlar; Maori dil yuvaları (Kōhanga Reo, ilki
// 1982); belgeleme dilin kaydını korur ama tek başına gündelik kullanımda tutamaz (temkinli). Ubıhça: Kuzeybatı Kafkasya dili,
// 1864'te yurtlarından sürülüp Osmanlı topraklarına gelenlerle Anadolu'ya geldi; son akıcı konuşuru Tevfik Esenç 1992'de öldü; aralarında
// Georges Dumézil'in de bulunduğu dil bilimciler onun konuşmasını kaydetti; yaklaşık 80 ünsüz, iki-üç ünlü.
// Yerleşik genel bilgi: yer adlarının, ölmüş dillerin ve eski toplulukların izini taşıması; Yeni Gine'nin ve Kafkasya'nın dil
// çeşitliliği.

const T = 'taslak';
const C = 'sosyal';
const U = 'Kaybolan diller';

const cards = [
  { code: 'descendant', title: 'torun, soyundan gelen kişi', pos: 'isim', cefr: 'C1', ipa: '/dɪˈsendənt/',
    text: "Bir kişinin ya da topluluğun soyundan gelenleri anlatır; çoğunlukla çoğul ve 'of' ile kullanılır: the descendants of the first settlers. Karşıtı 'ancestor' (ata). Fiili 'descend from' ya da 'be descended from' (-in soyundan gelmek).",
    example: 'The professor believes she is a distant descendant of a well-known Ottoman poet.',
    exampleTr: 'Profesör, tanınmış bir Osmanlı şairinin uzak bir torunu olduğuna inanıyor.',
    synonyms: [], family: ['descend', 'descent'] },
  { code: 'extinct', title: 'soyu tükenmiş; (dil) konuşanı kalmamış; (yanardağ) sönmüş', pos: 'sıfat', cefr: 'B2', ipa: '/ɪkˈstɪŋkt/',
    text: "'become extinct' ya da 'go extinct' (yok olmak, tükenmek) kalıbıyla sık geçer. Dil bilimde hiç konuşanı kalmamış dil için kullanılır. Adı 'extinction' (yok oluş, neslin tükenmesi).",
    example: 'The volcano has been extinct for thousands of years, so walkers can safely climb to the crater.',
    exampleTr: 'Yanardağ binlerce yıldır sönmüş durumda; bu yüzden yürüyüşçüler kratere güvenle tırmanabiliyor.',
    synonyms: ['vanished', 'dead'], family: ['extinction'] },
  { code: 'revive', title: 'canlandırmak, yeniden hayata döndürmek; canlanmak', pos: 'fiil', cefr: 'C1', ipa: '/rɪˈvaɪv/',
    text: "Hem geçişli hem geçişsiz kullanılır: revive an old custom (eski bir âdeti canlandırmak), trade revived (ticaret canlandı). Bayılan birini ayıltmak anlamına da gelir. Adı 'revival' (canlanma, diriliş).",
    example: 'A small theatre company is trying to revive plays that have not been staged for a century.',
    exampleTr: 'Küçük bir tiyatro topluluğu, yüz yıldır sahnelenmeyen oyunları yeniden canlandırmaya çalışıyor.',
    synonyms: ['restore', 'bring back'], family: ['revival'] },
  { code: 'fluent', title: '(bir dili) akıcı konuşan; akıcı', pos: 'sıfat', cefr: 'B2', ipa: '/ˈfluːənt/',
    text: "Kişi için 'fluent in' kalıbıyla, dil için doğrudan kullanılır: she is fluent in Greek / she speaks fluent Greek. Zarfı 'fluently', adı 'fluency' (akıcılık).",
    example: 'After a year in Lisbon, my brother became fluent in Portuguese.',
    exampleTr: "Lizbon'da geçirdiği bir yılın ardından kardeşim Portekizceyi akıcı konuşur oldu.",
    synonyms: ['proficient'], family: ['fluently', 'fluency'] },
  { code: 'heritage', title: '(kültürel) miras, kuşaktan kuşağa geçen değerler', pos: 'isim', cefr: 'B2', ipa: '/ˈherɪtɪdʒ/',
    text: "Bir topluluğun geçmişten devraldığı kültür, gelenek, yapı ve dil: cultural heritage (kültürel miras), a heritage site (koruma altındaki tarihî alan). Para ve mülk mirası için çoğunlukla 'inheritance' kullanılır.",
    example: "The old bridge is part of the town's heritage, so the council has decided to repair it rather than replace it.",
    exampleTr: 'Eski köprü kasabanın mirasının bir parçası; bu yüzden belediye onu yıkıp yenisini yapmak yerine onarmaya karar verdi.',
    synonyms: ['legacy', 'tradition'], family: ['inherit', 'inheritance'] },
  { code: 'document', title: 'belgelemek, kayda geçirmek', pos: 'fiil', cefr: 'C1', ipa: '/ˈdɒkjument/',
    text: "Fiil olarak bir şeyi yazıyla, ses ya da görüntü kaydıyla belgelemek demektir: document a language (bir dili belgelemek). Fiilin son hecesi /ment/, ismin ('belge') son hecesi /mənt/ diye okunur. Adı 'documentation' (belgeleme).",
    example: 'The photographer spent ten years documenting daily life in the old quarter of the city.',
    exampleTr: 'Fotoğrafçı, kentin eski mahallesindeki gündelik yaşamı on yıl boyunca belgeledi.',
    synonyms: ['record'], family: ['documentation', 'documentary'] },
  { code: 'abandon', title: 'bırakmak, vazgeçmek; terk etmek', pos: 'fiil', cefr: 'B2', ipa: '/əˈbændən/',
    text: "Bir yeri, bir kişiyi ya da bir planı, alışkanlığı tümüyle bırakmak: abandon a village (bir köyü terk etmek), abandon a plan (bir plandan vazgeçmek). Sıfatı 'abandoned' (terk edilmiş), adı 'abandonment'.",
    example: 'The builders abandoned the project when the money ran out, leaving the hotel half-finished.',
    exampleTr: 'İnşaatçılar para bitince projeyi yarıda bıraktı; otel yarım kaldı.',
    synonyms: ['give up', 'desert'], family: ['abandoned', 'abandonment'] },
  { code: 'transmit', title: 'aktarmak, iletmek; (hastalık) bulaştırmak', pos: 'fiil', cefr: 'C1', ipa: '/trænzˈmɪt/',
    text: "Bir şeyi bir kişiden ya da yerden ötekine geçirmek: transmit a signal (sinyal iletmek), transmit a disease (hastalık bulaştırmak). Dil bilimde bir dilin kuşaktan kuşağa aktarılmasına 'transmission' denir.",
    example: 'Folk songs were transmitted orally from parents to children for centuries.',
    exampleTr: 'Halk türküleri yüzyıllarca anne babadan çocuklara sözlü olarak aktarıldı.',
    synonyms: ['pass on', 'convey'], family: ['transmission'] },
  { code: 'dominant', title: 'baskın, egemen, ağır basan', pos: 'sıfat', cefr: 'B2', ipa: '/ˈdɒmɪnənt/',
    text: "Ötekilerden daha güçlü, daha yaygın ya da daha etkili olanı anlatır: the dominant language of a country (bir ülkenin baskın dili). Fiili 'dominate', adı 'dominance'. Biyolojide 'baskın gen' anlamında da geçer.",
    example: 'Until the internet arrived, television was the dominant source of news for most families.',
    exampleTr: 'İnternet gelene kadar televizyon, çoğu ailenin başlıca haber kaynağıydı.',
    synonyms: ['prevailing', 'leading'], family: ['dominate', 'dominance'] },
  { code: 'steadily', title: 'istikrarlı biçimde, durmadan, giderek', pos: 'zarf', cefr: 'B2', ipa: '/ˈstedɪli/',
    text: "Bir değişimin ani değil, düzenli ve sürekli olduğunu anlatır: rise steadily (giderek artmak), decline steadily (durmadan azalmak). Sıfatı 'steady' (düzenli, sabit).",
    example: 'Since the new railway line opened, the number of visitors to the town has risen steadily.',
    exampleTr: 'Yeni demiryolu hattı açıldığından beri kasabaya gelen ziyaretçi sayısı istikrarlı biçimde arttı.',
    synonyms: ['gradually', 'continuously'], family: ['steady'] },
  { code: 'pass on', title: '(başkasına, sonraki kuşağa) aktarmak, geçirmek', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌpɑːs ˈɒn/',
    text: "Bir bilgiyi, beceriyi, malı ya da hastalığı başkasına geçirmek: pass on a skill to your children. Nesne zamir olunca araya girer: pass it on. 'Pass away' (vefat etmek) ile karıştırma.",
    example: 'My grandfather passed on his love of carpentry to all of his grandchildren.',
    exampleTr: 'Dedem marangozluk sevgisini bütün torunlarına aktardı.',
    synonyms: ['hand down', 'transmit'], family: [] },
  { code: 'shift', title: 'kayma, değişim (yönde, tercihte); vardiya', pos: 'isim', cefr: 'C1', ipa: '/ʃɪft/',
    text: "Bir durumdan ötekine geçişi ya da yöndeki değişimi anlatır: a shift in public opinion (kamuoyunda kayma). 'Language shift' (dil kayması), bir topluluğun kendi dilini bırakıp başka bir dile geçmesidir. Fabrikada ve hastanede 'vardiya' demektir: the night shift.",
    example: 'There has been a noticeable shift in the way people shop since online stores became popular.',
    exampleTr: 'Çevrimiçi mağazalar yaygınlaştığından beri insanların alışveriş biçiminde gözle görülür bir değişim oldu.',
    synonyms: ['change', 'transition'], family: [] },
];

const items = [
  // ---------- kelime ----------
  { id: 'sd-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['descendant', 'heritage'],
    level: 'orta', cefr: 'C1', konu: ['isim'],
    q: 'The local language now survives only in a few mountain villages, where most of its remaining speakers are elderly ---- of shepherds who settled in the area some three centuries ago.',
    options: ['descendants', 'ancestors', 'inhabitants', 'dependants', 'heritage'], answer: 0,
    explain: "Dilin kalan konuşurları, üç yüzyıl kadar önce bölgeye yerleşen çobanların yaşlı torunları: 'descendant' (birinin soyundan gelen kişi). 'Ancestor' (ata) yönü tersine çevirir: üç yüzyıl önce yerleşenlerin ataları bugün yaşıyor olamaz. 'Inhabitant' (bir yerde oturan kişi) bir yerle kullanılır, kişilerle değil: inhabitants of a village. Biçimce benzeyen 'dependant' (birinin bakmakla yükümlü olduğu kişi) da anlam kurmaz; üç yüzyıl önce yaşamış birinin bugün bakmakla yükümlü olduğu kimse olamaz. 'Heritage' (miras) ise kişiyi değil, kuşaktan kuşağa geçen kültürü anlatır; dilin konuşurları 'miras' olamaz." },

  // ---------- dil bilgisi ----------
  { id: 'sd-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['pass on'],
    level: 'orta', cefr: 'B2', konu: ['bağlaç', 'zaman'],
    q: '---- a language is no longer passed on to children at home, it usually disappears within a couple of generations.',
    options: ['Until', 'Unless', 'Whereas', 'Once', 'Before'], answer: 3,
    explain: "'Once' (bir kez … -ince, … -dikten sonra) bir olay gerçekleştikten sonra gelen sonucu bağlar: dil evde çocuklara aktarılmaz olunca genellikle bir iki kuşak içinde kaybolur. 'Until' (-e kadar) ve 'before' (-den önce) sırayı bozar; kaybolma, aktarımın kesilmesinden sonra gelir. 'Unless' (-mezse) anlamı tersine çevirir: dil aktarıldığı sürece kaybolur demiş olur. 'Whereas' (oysa) iki yarı arasında olmayan bir karşıtlık kurar." },

  { id: 'sd-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['abandon', 'dominant'],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'Over the course of the twentieth century, many families in the region abandoned their traditional language ---- the dominant language of the country, which their children were already learning at school.',
    options: ['in favour of', 'along with', 'on behalf of', 'in spite of', 'apart from'], answer: 0,
    explain: "'In favour of' (… lehine, onu yeğleyerek) bir şeyi bırakıp öbürünü seçmeyi anlatır: aileler geleneksel dillerini bırakıp çocuklarının okulda zaten öğrendiği baskın dili seçti. 'Along with' (… ile birlikte) iki dilin birden bırakıldığını söyler; çocukların okulda öğrendiği dili bırakmak anlamsızdır. 'In spite of' (-e rağmen) mantığı tersine çevirir: baskın dil bir engel değil, tercih nedenidir. 'On behalf of' (… adına) ve 'apart from' (… dışında) burada anlam kurmaz." },

  // ---------- cümle tamamlama ----------
  { id: 'sd-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['dominant'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: '----, many young people in minority-language communities switch to the dominant language whenever they are with their friends.',
    options: [
      'Because the dominant language is rarely heard at school or on television',
      'Although they hear the dominant language all day at school and on television',
      'As long as their friends speak nothing but the minority language',
      'Now that the dominant language has almost disappeared from their region',
      'Even though they still speak the minority language with their parents at home',
    ], answer: 4,
    explain: "Ana cümle, azınlık dili konuşulan topluluklardaki pek çok gencin arkadaşlarıyla birlikteyken baskın dile geçtiğini söylüyor. Bununla karşıtlık kuran yarı, evde anne babalarıyla hâlâ azınlık dilini konuştuklarını söyleyendir: 'even though' (-diği hâlde). Baskın dili okulda ve televizyonda bütün gün duymak karşıtlık değil, bir nedendir; 'although' ile bağlanamaz. Baskın dilin okulda pek duyulmaması, arkadaşların yalnız azınlık dilini konuşması ve baskın dilin bölgeden neredeyse kalkmış olması gençlerin baskın dile geçmesini açıklamaz; tersine, geçmemelerini gerektirir." },

  { id: 'sd-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['extinct'],
    level: 'orta', cefr: 'B2', konu: ['neden-sonuç'],
    q: 'Because place names often survive long after the languages they come from have become extinct, ----.',
    options: [
      'historians and archaeologists seldom pay much attention to them',
      'new settlers tend to replace them as soon as they arrive in an area',
      'they can offer clues about the peoples who once lived in an area',
      'most of them can be traced back no further than about a century',
      'the languages they come from are still widely spoken in the area',
    ], answer: 2,
    explain: "'Because' bir neden veriyor: yer adları, geldikleri diller ölüp gittikten sonra da uzun süre yaşar. Bunun doğal sonucu, bu adların bir bölgede eskiden yaşamış topluluklar hakkında ipucu verebilmesidir. Tarihçilerin ve arkeologların onlarla pek ilgilenmemesi bu nedenden çıkmaz. Yeni gelenlerin adları hemen değiştirmesi ve adların en çok yüz yıl geriye gitmesi 'uzun süre yaşar' bilgisiyle çelişir. Dillerin hâlâ yaygın konuşulması da dillerin öldüğü bilgisiyle çelişir." },

  // ---------- çeviri ----------
  { id: 'sd-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['fluent', 'pass on'],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Although many people in the valley can still understand the language, few of them speak it fluently enough to pass it on to their children.',
    options: [
      'Vadideki pek çok insan dili hâlâ anlayabildiği için, birçoğu onu çocuklarına aktaracak kadar akıcı konuşuyor.',
      'Vadide dili hâlâ anlayabilen insanların sayısı az ve bunların hiçbiri onu çocuklarına aktaracak kadar akıcı konuşamıyor.',
      'Vadideki insanların çoğu dili hâlâ akıcı konuşabilse de çok azı onu çocuklarına aktarmaya istekli.',
      'Vadideki pek çok insan dili hâlâ anlayabilse de çocuklarına aktarabilmek için onu akıcı konuşmayı öğrenmek istemiyor.',
      'Vadideki pek çok insan dili hâlâ anlayabilse de çok azı onu çocuklarına aktaracak kadar akıcı konuşuyor.',
    ], answer: 4,
    explain: "'Although' (-se de) karşıtlık kuruyor: pek çok kişi dili hâlâ anlıyor, ama çok azı onu çocuklarına aktaracak kadar akıcı konuşuyor. Doğru çeviri 'many'yi 'pek çok', 'few'u 'çok azı' diye karşılar ve 'enough to' (… -acak kadar) yapısını korur. Yanlışlardan biri karşıtlığı nedene çeviriyor ('anlayabildiği için'). Biri anlayanları azaltıyor ve 'hiçbiri' diyor. Biri 'many'yi 'çoğu' yapıyor, 'anlamak' yerine 'akıcı konuşmak' diyor ve yeteneği isteğe çeviriyor. Bir başkası da İngilizcede olmayan bir 'öğrenmek istememe' ekliyor." },

  { id: 'sd-c2', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['document', 'heritage'],
    level: 'orta', cefr: 'B2', konu: ['eşleşik bağlaç'],
    q: 'Bir dili belgelemek yalnız dil bilimcilere değil, o dili kültürel mirasının bir parçası sayan topluluklara da yarar.',
    options: [
      'Documenting a language is of use to linguists, but not to the communities that see it as part of their cultural heritage.',
      'Documenting a language benefits not only linguists but also the communities that see it as part of their cultural heritage.',
      'Neither linguists nor the communities that see a language as part of their cultural heritage benefit from documenting it.',
      'Communities that see a language as part of their cultural heritage benefit more from its documentation than linguists do.',
      'Linguists benefit from documenting a language only when its speakers see it as part of their cultural heritage.',
    ], answer: 1,
    explain: "Türkçe cümle iki grubun da yarar gördüğünü söylüyor: yalnız dil bilimciler değil, dili kültürel mirasının bir parçası sayan topluluklar da. Bunu 'not only … but also' karşılar. 'But not' ile kurulan çeviri toplulukları dışarıda bırakıyor. 'Neither … nor' iki grubun da yarar görmediğini söylüyor. Karşılaştırma yapan çeviri Türkçede olmayan bir 'daha çok' ekliyor. 'Only when' ile kurulan çeviri de cümlede olmayan bir koşul getiriyor." },

  // ---------- okuma parçası (4 soru) ----------
  { id: 'sd-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T,
    cards: ['shift', 'extinct', 'revive', 'document', 'fluent'],
    level: 'zor', cefr: 'C1', title: 'Diller nasıl kaybolur, nasıl geri döner?',
    text: "About 7,000 languages are spoken in the world today, and by one widely used estimate, around 40 per cent of them are endangered. In most cases, a language is lost not because its speakers die but because they gradually stop using it, a process that linguists call language shift. It often begins when parents start raising their children in a more widely spoken language, one that seems to open the way to schooling, work and city life. The children grow up without the old language, and when the last people who learned it at home die, the language is considered extinct. Yet this outcome is not inevitable. Hebrew, which for centuries had been used mainly in prayer and in writing, was revived as an everyday language from the late nineteenth century onwards. In Wales, schools that teach through Welsh, together with radio and television in the language, have helped Welsh to hold its ground. In New Zealand, Māori 'language nests', the first of which opened in 1982, surround children under school age with the language. Linguists, meanwhile, record fluent speakers and compile dictionaries and grammars in order to document languages that may not survive. Such records are invaluable, but a dictionary cannot hold a conversation. Unless a language is spoken at home and in the street, it is likely to survive only as an archive rather than as a living tongue.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, before the late nineteenth century, Hebrew ----.',
        options: [
          'had disappeared from written texts as well as from everyday speech',
          'was spoken at home by most families but seldom used in religious life',
          'was used mostly in prayer and writing rather than in daily conversation',
          'was taught to very young children in schools similar to language nests',
          'had been recorded in detail by linguists working with its last speakers',
        ], answer: 2,
        explain: "Parçaya göre İbranice yüzyıllarca çoğunlukla duada ve yazıda kullanıldı ve 19. yüzyılın sonundan başlayarak gündelik dil olarak yeniden canlandırıldı; demek ki o tarihten önce gündelik konuşma dili değildi. Yazıdan kalktığı söylenmiyor; tersine, yazıda kullanılıyordu. Evlerde konuşulup dinî yaşamda pek kullanılmadığı da parçayla çelişiyor. Dil yuvaları Maoriceyle ilgili; İbranicenin dil bilimcilerce kaydedildiği parçada geçmiyor." },
      { konu: ['ayrıntı'],
        q: 'It is stated in the passage that Māori language nests ----.',
        options: [
          'were set up by linguists who wanted to record the last fluent speakers',
          'rely mainly on radio and television to bring the language into homes',
          'teach the language to adults who did not learn it as young children',
          'have been in operation since the late nineteenth century',
          'immerse young children in Māori before they reach school age',
        ], answer: 4,
        explain: "Parçaya göre Maori dil yuvaları okul çağına gelmemiş çocukları dille kuşatıyor. Yuvaları dil bilimcilerin kurduğu, radyo ve televizyona dayandığı ya da yetişkinlere yönelik olduğu söylenmiyor; radyo ve televizyon Galceyle ilgili. 19. yüzyılın sonundan beri var oldukları da yanlış: ilki 1982'de açıldı; 19. yüzyılın sonu İbranicenin canlanmasıyla ilgili." },
      { konu: ['gönderim'],
        q: 'The phrase "this outcome" in the passage refers to ----.',
        options: [
          'parents raising their children in a more widely spoken language',
          'linguists recording the speech of the last fluent speakers',
          'a language becoming extinct as its last native speakers die',
          'the revival of Hebrew as a language of everyday life',
          "the endangerment of about 40 per cent of the world's languages",
        ], answer: 2,
        explain: "'This outcome' (bu sonuç), hemen önceki cümlede anlatılan sürecin sonucunu gösteriyor: dili evde öğrenmiş son kişiler ölünce dilin ölü sayılması. Ardından gelen örnekler (İbranice, Galce, Maorice) de bu sonucun kaçınılmaz olmadığını gösteriyor. Anne babaların çocuklarını daha yaygın bir dille büyütmesi sürecin başlangıcı, sonucu değil. Dillerin yüzde 40 kadarı ölmüş değil, tehlikede. İbranicenin canlanması ve dil bilimcilerin kayıtları 'this outcome'dan sonra anlatılıyor." },
      { konu: ['yazarın amacı'],
        q: 'The primary purpose of the passage is to ----.',
        options: [
          'explain how languages are usually lost and show that this loss can sometimes be slowed or reversed',
          'argue that documenting endangered languages is the surest way of keeping them in daily use',
          'compare the methods that Hebrew, Welsh and Māori speakers have used to teach young children',
          'criticise parents who decide not to pass on their own language to their children',
          "predict what share of the world's languages is likely to vanish completely before the year 2100",
        ], answer: 0,
        explain: 'Parça önce dillerin çoğunlukla nasıl kaybolduğunu (dil kayması) anlatıyor, sonra İbranice, Galce ve Maorice örnekleriyle bu gidişin yavaşlatılabildiğini ya da tersine çevrilebildiğini gösteriyor. Belgelemenin en sağlam yol olduğunu savunmuyor; tersine, tek başına yetmediğini söylüyor. Üç dilin öğretim yöntemlerini karşılaştırmıyor, anne babaları eleştirmiyor ve yüzyılın sonu için bir tahmin yapmıyor.' },
    ] },

  // ---------- anlamca en yakın cümle ----------
  { id: 'sd-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: ['transmit'],
    level: 'orta', cefr: 'C1', konu: ['olumsuzluk', 'kapsam'],
    q: 'A language is not necessarily safe just because many people speak it; what matters more is whether it is still being transmitted to children at home.',
    options: [
      'As long as a language has many speakers, it will remain safe even if children no longer learn it at home.',
      'A language with many speakers can only be safe if every single child in the community still learns it at home.',
      'The number of people who speak a language says more about its future than whether children still learn it at home.',
      "A language with many speakers may still be at risk if children are no longer learning it at home.",
      'Languages that children no longer learn at home are seldom spoken by a large number of people in any country.',
    ], answer: 3,
    explain: "Asıl cümle iki şey söylüyor: çok konuşuru olması bir dilin güvende olduğunu göstermez ('not necessarily … just because'); daha önemli olan, dilin evde çocuklara hâlâ aktarılıp aktarılmadığıdır. Doğru seçenek ikisini de korur. Çok konuşuru olan dilin çocuklar öğrenmese de güvende kalacağını söyleyen seçenek tersini söylüyor. Konuşur sayısını daha önemli sayan seçenek karşılaştırmayı tersine çeviriyor. Dilin ancak her çocuk öğrenirse güvende olacağını söyleyen seçenek aşırı genelleme yapıyor. Çocukların öğrenmediği dilleri az kişinin konuştuğunu söyleyen seçenek de asıl cümlede olmayan bir ilişki kuruyor." },

  // ---------- paragraf tamamlama ----------
  { id: 'sd-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['dominant'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: "Languages are shared very unevenly among the world's people. ----. At the other end of the scale, a great many languages are spoken by only a few thousand people, and some by just a handful of elderly speakers. It is these small languages that are most at risk: in a small community, a single generation of children who grow up speaking the dominant language can leave the old one without any young speakers.",
    options: [
      'Linguists often disagree about whether two closely related varieties should be counted as separate languages or as dialects of one language',
      'In many parts of Africa and Asia, it is quite normal for people to use three or four different languages in the course of a single day',
      "More than half of the world's population speaks one of only about two dozen languages, among them Mandarin Chinese, Spanish and English",
      'The island of New Guinea alone is home to hundreds of languages, which makes it one of the most linguistically diverse places on Earth',
      'Most children learn the language of their parents first, even if they later come to use a different one at school or at work',
    ], answer: 2,
    explain: "Boşluktan sonraki cümle 'At the other end of the scale' (ölçeğin öbür ucunda) diye başlıyor ve yalnız birkaç bin kişinin konuştuğu dillerden söz ediyor. Demek ki boşluk ölçeğin ilk ucunu, yani çok büyük nüfusların konuştuğu birkaç dili anlatmalı: dünya nüfusunun yarısından fazlası yirmi kadar dilden birini konuşuyor. Bu cümle ilk cümledeki eşitsiz dağılım fikrini de açıyor. Dil ile lehçe ayrımı, bir günde üç dört dil kullanmak, Yeni Gine'nin dil çeşitliliği ve çocukların önce anne babalarının dilini öğrenmesi konuya yakın ama 'öbür uç' ifadesine bir ilk uç vermiyor." },

  // ---------- akışı bozan cümle ----------
  { id: 'sd-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['steadily', 'fluent', 'document'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Ubykh, a language of the north-western Caucasus, came to Anatolia in the 1860s with families who had been forced to leave their homeland for the Ottoman Empire.',
      'The Caucasus has long been known for its remarkable variety of languages, with dozens spoken in a relatively small mountainous area.',
      'In the villages where these families settled, the language was spoken for several generations, but younger people steadily switched to Turkish or to Circassian.',
      'Over time, the number of speakers dwindled, and the last fluent speaker, Tevfik Esenç, died in 1992.',
      'Fortunately, linguists, among them Georges Dumézil, had recorded his speech, so the language, with its eighty or so consonants and only two or three vowels, is well documented.',
    ], answer: 1,
    explain: "Parça Ubıhçanın öyküsünü sırayla anlatıyor: 1860'larda yurtlarından sürülen ailelerle Anadolu'ya gelişi, yerleşilen köylerde gençlerin giderek Türkçeye ya da Çerkesçeye geçmesi, son akıcı konuşuru Tevfik Esenç'in 1992'de ölümü ve dil bilimcilerin onun konuşmasını kaydetmesi. II. cümle Kafkasya'nın dil çeşitliliğine genel bir bakışla bu akışı kesiyor. III. cümledeki 'these families' de I. cümledeki ailelere bağlanıyor, II. cümleye değil." },
];

export default { id: 'sosyal-diller', course: C, title: U, order: 3, cards, items };
