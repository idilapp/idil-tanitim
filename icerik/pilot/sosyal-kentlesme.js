// iDil › Sosyal bilimler › Kentleşme ve yalnızlık
// Tümü özgün: Claude yazdı (17 Kasım 2026). ÖSYM sorusu, yayınevi, ders kitabı ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Plan: ../analiz/cogaltma-3-plani.md §7.12 (3. çoğaltma turu, dalga B).
// Olgular (plan §7.12 listesi; yalnız olgular, metin özgün; her olgu tek öğede):
// - BM tahminine göre 2007 dolayında kentlerde yaşayanlar ilk kez kırda yaşayanları geçti; 2050'de dünya nüfusunun yaklaşık
//   üçte ikisinin (yaklaşık %68) kentli olacağı öngörülüyor (BM, World Urbanization Prospects 2018; temkinli: "estimates",
//   "projects", "roughly") (st-z1).
// - Georg Simmel, 1903, "Die Großstädte und das Geistesleben" (İngilizcede "The Metropolis and Mental Life"): uyaran bolluğuna
//   karşı mesafeli, kayıtsız tutum; aynı tutumun küçük topluluklarda bulunmayan bir kişisel özgürlük de sağlaması (st-o1).
// - Mark Granovetter, 1973, "The Strength of Weak Ties": yakın dostlar aynı çevreden aynı haberleri duyar; tanıdıklar yeni
//   bilgi ve iş fırsatlarının önemli kaynağıdır (st-o1).
// - Yalnızlık yalnız olmakla aynı şey değildir; istenen ile sahip olunan ilişkiler arasındaki acı veren fark (st-o2).
// - Birleşik Krallık 2018'de, Japonya 2021'de yalnızlıktan sorumlu bir bakan atadı; ABD'nin baş sağlık yetkilisi (Surgeon
//   General) 2023'te yalnızlığı ve sosyal yalıtılmışlığı bir halk sağlığı sorunu olarak anlatan bir uyarı (advisory)
//   yayımladı (temkinli; st-o2).
// - Pek çok ülkede tek kişilik hanelerin payı artıyor (temkinli: "appear to"; st-b2).
// - Türkiye'de 1950'lerden sonra köyden kente göç hızlandı; bugün nüfusun büyük çoğunluğu kentlerde yaşıyor (oran yazılmadı;
//   st-b1). Hemşehri ağlarının yeni gelenlere iş ve konut bulmada yardımı yerleşik genel bilgidir; temkinli yazıldı ("often").
// Yerleşik genel bilgi, sayı ve ad yazılmadan: uzun yolculukların boş zamanı azaltması (st-t4); yetişkinlikte arkadaş
// edinmenin okul yıllarına göre zorlaşması (st-p1); tek kişilik hanelerin ardındaki etkenler (uzayan ömür, geç evlilik,
// gelir) ve küçük dairelere, tek porsiyonluk ürünlere talep (st-b2; temkinli). Kalan cümleler kurgusaldır (kişiler, kasabalar,
// şirketler).
// Kaçınılan örtüşmeler: sosyal-baski (uyma, grup baskısı) ve genel-isi-adalari (kent ısısı) ile konu ve sözcük; göç konusunda
// yorum yok; yalnızlık damgalanmadan, yalnız yaşamakla karıştırılmadan anlatıldı.

const T = 'taslak';
const C = 'sosyal';
const U = 'Kentleşme ve yalnızlık';

const cards = [
  // ---------- isim ----------
  { code: 'urbanisation', title: 'kentleşme', pos: 'isim', cefr: 'C1', ipa: '/ˌɜːbənaɪˈzeɪʃn/',
    text: "Nüfusun kırdan kente kayması ve kentlerin büyümesi süreci: rapid urbanisation (hızlı kentleşme), the pace of urbanisation. Amerikan yazımı 'urbanization'. Sıfatı 'urban' (kentsel), karşıtı 'rural' (kırsal).",
    example: 'The urbanisation of the region began when a textile factory opened and drew workers from the surrounding farms.',
    exampleTr: 'Bölgenin kentleşmesi, bir dokuma fabrikası açılıp çevredeki çiftliklerden işçi çekmesiyle başladı.',
    synonyms: ['urban growth', 'city growth'], family: ['urban', 'urbanise'] },
  { code: 'loneliness', title: 'yalnızlık (duygusu)', pos: 'isim', cefr: 'B2', ipa: '/ˈləʊnlinəs/',
    text: "Kişinin istediği yakınlığı bulamamasından doğan acı veren duygu. 'Being alone' (yalnız olmak) bir durumdur; 'loneliness' bir duygudur, kalabalık içinde de duyulabilir. Sıfatı 'lonely'. 'Solitude' ise çoğu zaman seçilmiş, huzurlu yalnızlıktır.",
    example: 'After her children left home, she joined a choir to fight the loneliness of the long winter evenings.',
    exampleTr: 'Çocukları evden ayrıldıktan sonra uzun kış akşamlarının yalnızlığıyla baş etmek için bir koroya katıldı.',
    synonyms: ['isolation'], family: ['lonely'] },
  { code: 'neighbourhood', title: 'mahalle, semt; yakın çevre', pos: 'isim', cefr: 'B1', ipa: '/ˈneɪbəhʊd/',
    text: "Bir kentin içinde insanların birlikte yaşadığı küçük bölge: a quiet neighbourhood, the neighbourhood school. 'In the neighbourhood of' kalıbı 'aşağı yukarı, dolayında' anlamına da gelir. Amerikan yazımı 'neighborhood'.",
    example: 'We chose this neighbourhood because the school, the market and the park are all within walking distance.',
    exampleTr: 'Bu mahalleyi seçtik, çünkü okul, pazar ve park yürüme mesafesinde.',
    synonyms: ['district', 'area'], family: ['neighbour', 'neighbourly'] },
  { code: 'household', title: 'hane, ev halkı; ev (sıfat gibi: ev içi)', pos: 'isim', cefr: 'B2', ipa: '/ˈhaʊshəʊld/',
    text: "Aynı evde yaşayan kişilerin tümü; istatistikte sayım birimi: single-person households (tek kişilik haneler), household income (hane geliri). İsim önünde 'ev içi' anlamı da verir: household chores (ev işleri).",
    example: 'In our household, whoever cooks dinner never has to do the washing-up.',
    exampleTr: 'Bizim evde akşam yemeğini kim pişirirse bulaşığı o yıkamaz.',
    synonyms: ['family', 'home'], family: ['householder'] },
  { code: 'migrant', title: 'göçmen, göç eden kişi (iş için yer değiştiren)', pos: 'isim', cefr: 'B2', ipa: '/ˈmaɪɡrənt/',
    text: "Çoğu zaman iş ya da daha iyi bir yaşam için bir yerden başka bir yere giden kişi; ülke içinde de olabilir: rural migrants (kırdan gelen göçmenler), seasonal migrants (mevsimlik göçmen işçiler). Fiili 'migrate', adı 'migration'.",
    example: 'Every August, seasonal migrants arrive in the region to help with the hazelnut harvest.',
    exampleTr: 'Her ağustos, mevsimlik göçmen işçiler fındık hasadına yardım etmek için bölgeye geliyor.',
    synonyms: ['newcomer', 'incomer'], family: ['migrate', 'migration'] },

  // ---------- fiil ----------
  { code: 'relocate', title: 'taşınmak, yerini değiştirmek; (bir kurumu) başka yere taşımak', pos: 'fiil', cefr: 'C1', ipa: '/ˌriːləʊˈkeɪt/',
    text: "Kişi, aile ya da şirket için kullanılır: relocate to another city, relocate the head office. Hem geçişli hem geçişsiz olabilir. Adı 'relocation'. 'Move' sözcüğünün daha resmî karşılığıdır.",
    example: "When the river burst its banks, the family relocated to a cousin's flat in the hills.",
    exampleTr: 'Nehir taşınca aile, tepelerdeki bir kuzenlerinin dairesine taşındı.',
    synonyms: ['move', 'resettle'], family: ['relocation'] },
  { code: 'commute', title: '(ev ile iş ya da okul arasında) her gün gidip gelmek', pos: 'fiil', cefr: 'B2', ipa: '/kəˈmjuːt/',
    text: "Düzenli olarak, çoğu zaman uzun bir yolu işe gidip gelmek: commute to work, commute by train. İsim olarak da kullanılır: a long commute (uzun bir iş yolu). Bunu yapan kişi 'commuter'.",
    example: 'My sister commutes to Ankara by train three days a week and works from home on the other days.',
    exampleTr: "Ablam haftada üç gün trenle Ankara'ya gidip geliyor, öteki günler evden çalışıyor.",
    synonyms: ['travel to work'], family: ['commuter'] },
  { code: 'isolate', title: 'yalnız bırakmak, (başkalarından) koparmak, yalıtmak', pos: 'fiil', cefr: 'C1', ipa: '/ˈaɪsəleɪt/',
    text: "Birini ya da bir şeyi başkalarından ayırmak. Sınavda en çok sıfat biçimi geçer: feel isolated (kendini yalnız ve kopuk hissetmek). Adı 'isolation': social isolation (sosyal yalıtılmışlık). Tıpta 'hastayı ayırmak', bilimde 'bir maddeyi ayrıştırmak' anlamı da var.",
    example: 'Working night shifts for months isolated him from his friends, who were all asleep whenever he was free.',
    exampleTr: 'Aylarca gece vardiyasında çalışmak onu arkadaşlarından kopardı; o ne zaman boş olsa hepsi uyuyordu.',
    synonyms: ['cut off', 'separate'], family: ['isolation', 'isolated'] },
  { code: 'socialise', title: 'insanlarla görüşmek, kaynaşmak, sosyalleşmek', pos: 'fiil', cefr: 'B2', ipa: '/ˈsəʊʃəlaɪz/',
    text: "Boş zamanında başkalarıyla bir araya gelip sohbet etmek: socialise with colleagues. Amerikan yazımı 'socialize'. Sosyolojide 'socialisation' çocuğun toplumun kurallarını öğrenme sürecidir.",
    example: 'At weekends, Deniz likes to socialise with her colleagues at a small café near the office.',
    exampleTr: 'Deniz hafta sonları iş arkadaşlarıyla ofisin yakınındaki küçük bir kafede buluşup sohbet etmeyi seviyor.',
    synonyms: ['mix', 'mingle'], family: ['socialisation'] },
  { code: 'alienate', title: 'soğutmak, uzaklaştırmak; yabancılaştırmak', pos: 'fiil', cefr: 'C1', ipa: '/ˈeɪliəneɪt/',
    text: "Birinin bir kişiye ya da topluluğa olan yakınlığını azaltmak, onu dışarıda bırakmak: alienate someone from something. Sıfatı 'alienated' (yabancılaşmış), adı 'alienation' (yabancılaşma).",
    example: "The new manager's habit of shouting at staff soon alienated even his most loyal employees.",
    exampleTr: 'Yeni müdürün çalışanlara bağırma alışkanlığı kısa sürede en sadık çalışanlarını bile ondan soğuttu.',
    synonyms: ['estrange', 'drive away'], family: ['alienation', 'alienated'] },

  // ---------- sıfat ----------
  { code: 'solitary', title: 'yalnız yapılan, tek başına; yalnızlığı seven', pos: 'sıfat', cefr: 'C1', ipa: '/ˈsɒlətri/',
    text: "Tek başına yapılan ya da yaşanan: a solitary walk, a solitary life. Çoğu zaman olumsuz bir duygu taşımaz; 'lonely' ise üzüntü bildirir. Hayvanlar için 'yalnız yaşayan' (solitary animals), cümlede 'tek bir': not a solitary example. Adı 'solitude'.",
    example: 'My grandfather loved his solitary walks along the shore, where he could think without being interrupted.',
    exampleTr: 'Dedem, kimse sözünü kesmeden düşünebildiği sahil boyunca tek başına yaptığı yürüyüşleri çok severdi.',
    synonyms: ['lone', 'unaccompanied'], family: ['solitude'] },
  { code: 'crowded', title: 'kalabalık, tıklım tıklım', pos: 'sıfat', cefr: 'B1', ipa: '/ˈkraʊdɪd/',
    text: "İnsanla dolu yer: a crowded street, a crowded bus. 'Be crowded with' (-le dolu olmak) kalıbıyla kullanılır. Kişi için değil yer ve zaman için kullanılır. Adı 'crowd' (kalabalık).",
    example: 'The ferry was so crowded that we had to stand for the whole crossing.',
    exampleTr: 'Vapur o kadar kalabalıktı ki bütün yolculuk boyunca ayakta durmak zorunda kaldık.',
    synonyms: ['packed', 'busy'], family: ['crowd'] },
  { code: 'anonymous', title: 'kimliksiz, kimsenin kimseyi tanımadığı; adı bilinmeyen, anonim', pos: 'sıfat', cefr: 'C1', ipa: '/əˈnɒnɪməs/',
    text: "Asıl anlamı 'adı bilinmeyen, adı verilmeyen': an anonymous letter. Yer için kullanılınca kişiliği olmayan, insanların birbirini tanımadığı ortamı anlatır: an anonymous city. Adı 'anonymity', zarfı 'anonymously'.",
    example: 'The new shopping centre looks just like a hundred others; it feels anonymous and soulless.',
    exampleTr: 'Yeni alışveriş merkezi yüz başkasına benziyor; kimliksiz ve ruhsuz bir yer.',
    synonyms: ['impersonal', 'faceless'], family: ['anonymity', 'anonymously'] },
  { code: 'sparse', title: 'seyrek, dağınık, az', pos: 'sıfat', cefr: 'C1', ipa: '/spɑːs/',
    text: "Bir alana az ve dağınık yayılmış: sparse traffic, sparse hair. Nüfus için çoğu zaman zarfıyla kullanılır: a sparsely populated area (seyrek nüfuslu bölge). Karşıtı 'dense' (yoğun, sık).",
    example: 'Traffic on the coast road is sparse in winter, when most of the holiday homes stand empty.',
    exampleTr: 'Kışın yazlıkların çoğu boş kaldığından sahil yolunda trafik seyrektir.',
    synonyms: ['scattered', 'thin'], family: ['sparsely'] },

  // ---------- zarf ----------
  { code: 'rapidly', title: 'hızla, çabucak', pos: 'zarf', cefr: 'B1', ipa: '/ˈræpɪdli/',
    text: "Bir değişimin ya da hareketin hızını anlatır: grow rapidly, change rapidly. 'Quickly' ile yakın anlamlıdır ama akademik metinlerde büyüme ve değişim için daha sık geçer. Sıfatı 'rapid'.",
    example: 'The rumour spread rapidly through the village, and by evening everyone had heard it.',
    exampleTr: 'Söylenti köyde hızla yayıldı ve akşama herkes duymuştu.',
    synonyms: ['quickly', 'swiftly'], family: ['rapid'] },
  { code: 'primarily', title: 'başlıca, esas olarak, öncelikle', pos: 'zarf', cefr: 'B2', ipa: '/ˈpraɪmərəli/',
    text: "Birçok etken ya da amaç arasında en önemlisini öne çıkarır: be aimed primarily at children (esas olarak çocuklara yönelik olmak). 'Mainly' ve 'chiefly' ile yakın anlamlıdır. Sıfatı 'primary'.",
    example: 'The festival is aimed primarily at children, but plenty of adults enjoy it too.',
    exampleTr: 'Şenlik esas olarak çocuklara yönelik ama pek çok yetişkin de ondan keyif alıyor.',
    synonyms: ['mainly', 'chiefly'], family: ['primary'] },

  // ---------- öbek fiil ----------
  { code: 'fit in', title: '(bir topluluğa) uyum sağlamak, aralarına karışmak', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌfɪt ˈɪn/',
    text: "Yeni girilen bir grupta kabul görmek, kendini yabancı hissetmemek: fit in at a new school, fit in with the team. 'Fit in with' bir plana uymak anlamına da gelir: That fits in with my plans.",
    example: 'It took Ali a few months to fit in at his new school, but now he has a close group of friends.',
    exampleTr: "Ali'nin yeni okuluna alışması birkaç ay sürdü ama şimdi yakın bir arkadaş grubu var.",
    synonyms: ['belong', 'settle in'], family: [] },
  { code: 'move out', title: '(bir evden) çıkmak, taşınıp gitmek', pos: 'öbek fiil', cefr: 'B1', ipa: '/ˌmuːv ˈaʊt/',
    text: "Yaşanan evden ayrılmak: move out of a flat, move out of one's parents' home. Karşıtı 'move in' (eve taşınmak). Bir bölgeden başka bir bölgeye taşınmayı da anlatır: move out to the suburbs.",
    example: "Most of my friends moved out of their parents' homes when they started university.",
    exampleTr: 'Arkadaşlarımın çoğu üniversiteye başlayınca ailelerinin evinden ayrıldı.',
    synonyms: ['leave', 'move away'], family: [] },
];

const items = [
  // ---------- kelime ----------
  { id: 'st-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['solitary', 'crowded'],
    level: 'zor', cefr: 'C1', konu: ['sıfat'],
    q: 'Although she lived in one of the busiest districts of the city, the novelist led an almost ---- life, rarely leaving her flat and receiving visitors only once a month.',
    options: ['solitary', 'crowded', 'sociable', 'hectic', 'prosperous'], answer: 0,
    explain: "'Although' iki yarı arasında karşıtlık kuruyor: yazar kentin en hareketli semtlerinden birinde yaşıyordu ama evinden pek çıkmıyor, ayda bir konuk kabul ediyordu. Bu yaşam 'solitary' (tek başına, yalnız sürülen) bir yaşamdır. 'Crowded' (kalabalık) yer için kullanılır, üstelik semtin hareketliliğiyle aynı yönde olur, karşıtlık kurmaz. 'Sociable' (girişken, insan canlısı) ve 'hectic' (koşuşturmalı) cümlenin ikinci yarısıyla çelişir. 'Prosperous' (varlıklı) ile evden çıkmamak ve az konuk kabul etmek arasında bağ yok." },

  { id: 'st-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['relocate', 'commute', 'socialise'],
    level: 'orta', cefr: 'C1', konu: ['fiil'],
    q: 'When the firm ---- its head office to a smaller town, many of its staff had to choose between moving their families and spending hours on the road every day.',
    options: ['socialised', 'commuted', 'relocated', 'renovated', 'inherited'], answer: 2,
    explain: "Şirket genel müdürlüğünü küçük bir kasabaya taşıdı; çalışanlar da ya ailelerini taşımak ya da her gün saatlerce yol gitmek zorunda kaldı. Bir kurumu başka bir yere taşımak 'relocate' ile anlatılır ve 'to a smaller town' ile uyar. 'Commute' işe gidip gelmektir; bir şirket genel müdürlüğünü 'commute' etmez. 'Socialise' (insanlarla görüşmek) nesne almaz ve bağlama uymaz. 'Renovated' (yeniledi) ve 'inherited' (miras aldı) 'to a smaller town' ile anlam kurmaz; çalışanların taşınma ikilemini de açıklamaz." },

  // ---------- dil bilgisi ----------
  { id: 'st-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['move out'],
    level: 'orta', cefr: 'B2', konu: ['bağlantı zarfı'],
    q: 'The new motorway cut the drive into the city to just twenty minutes. ----, a growing number of families who work in the city have moved out to the surrounding villages.',
    options: ['Otherwise', 'Nevertheless', 'In other words', 'Similarly', 'Consequently'], answer: 4,
    explain: "İlk cümle bir neden veriyor (yeni otoyol kente gidişi yirmi dakikaya indirdi), ikinci cümle bunun sonucunu (kentte çalışan aileler çevredeki köylere taşınıyor). Sonuç 'Consequently' (bu yüzden, sonuç olarak) ile bağlanır. 'Nevertheless' (yine de) beklenene aykırı bir durum ister; burada taşınma yolun kısalmasıyla uyumlu. 'Otherwise' (aksi hâlde) bir uyarı ya da koşul getirir. 'In other words' (başka bir deyişle) aynı şeyi yeniden söyler; 'Similarly' (benzer biçimde) iki benzer durumu yan yana koyar. İkisi de neden-sonuç ilişkisini kurmaz." },

  { id: 'st-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['nicelik'],
    q: 'Our street feels very different now. ---- the twenty or so families who lived here when I was a child have moved away; only two of them are still here.',
    options: ['Hardly any of', 'Most', 'None of', 'A few of', 'Almost all of'], answer: 4,
    explain: "Çocukluktaki yirmi kadar aileden yalnız ikisi kalmış; demek ki ailelerin neredeyse hepsi taşınmış: 'Almost all of'. 'Hardly any of' (neredeyse hiçbiri) ve 'None of' (hiçbiri) taşınanların çok az ya da hiç olmadığını söyler; yalnız iki ailenin kalmasıyla çelişir. 'A few of' (birkaçı) da taşınanları az gösterir; yirmi kadar aileden on sekizinin gitmiş olmasıyla uyuşmaz. 'Most' ise 'the' ile başlayan belirli bir grubun önüne 'of' olmadan gelmez: 'most of the families' denir." },

  { id: 'st-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['isim cümleciği'],
    q: 'Many people who leave their home towns say ---- they miss most is not the house they grew up in but the feeling of being recognised in the street.',
    options: ['that', 'whether', 'which', 'how', 'what'], answer: 4,
    explain: "Boşluktan sonra gelen cümlecik 'is not …' fiilinin öznesi ve içinde 'miss' fiilinin nesnesi eksik. Hem özne olan hem de kendi içindeki eksik nesneyi karşılayan isim cümleciği 'what' (… şey) ile kurulur: 'what they miss most' (en çok özledikleri şey). 'That' isim cümleciği kurar ama içerideki eksik nesneyi karşılamaz. 'Whether' (-ip -mediği) ve 'how' (nasıl) da nesneyi karşılamaz; 'how they miss most' anlam kurmaz. 'Which' önünde bir isim olmadan bu yapıda kullanılmaz." },

  // ---------- boşluklu metin (5 boşluk) ----------
  { id: 'st-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: ['urbanisation', 'loneliness'],
    level: 'orta', cefr: 'B2', title: 'Kentli bir dünyaya doğru',
    text: "For most of human history, the great majority of people lived in the countryside and made their living from the land. According to United Nations estimates, however, by around 2007 the number of people living in towns and cities (1) ---- the number living in rural areas for the first time. This shift, usually referred to as (2) ----, did not happen overnight; it was the result of countless individual decisions to leave villages in search of work and a different kind of life. City life offers clear advantages, (3) ---- easier access to jobs, schools and hospitals. It also has its costs. (4) ---- demand for housing in many large cities grows faster than new homes can be built, rents there have risen steeply, and many young people struggle to find a place of their own. (5) ----, the move to cities shows little sign of slowing down: the UN projects that roughly two thirds of the world's population, about 68 per cent, will be urban by 2050.",
    steps: [
      { konu: ['zaman uyumu'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['has overtaken', 'had overtaken', 'overtakes', 'would overtake', 'is overtaking'], answer: 1,
        explain: "'By around 2007' geçmişteki bir zamana kadar tamamlanmış bir değişimi anlatıyor: o yıla gelindiğinde kentliler kırda yaşayanları geçmişti. Geçmişteki bir noktadan önce tamamlanan olay 'had overtaken' (past perfect) ile anlatılır. 'Has overtaken' bugüne bağlanır, geçmişteki belirli bir yılla kullanılmaz. 'Overtakes' ve 'is overtaking' olayı şimdiye taşır. 'Would overtake' geçmişten bakılan bir geleceği anlatır; 2007'de değişimin gerçekleştiğini söylemez." },
      { konu: ['kelime', 'isim'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['isolation', 'loneliness', 'agriculture', 'tourism', 'urbanisation'], answer: 4,
        explain: "Boşluk, bir önceki cümlede anlatılan değişimin adını istiyor: insanların kırdan kente geçmesi ve kentlerde yaşayanların çoğunluğa ulaşması. Bunun adı 'urbanisation' (kentleşme); cümlenin devamı da köylerden iş için ayrılmaktan söz ediyor. 'Loneliness' (yalnızlık) ve 'isolation' (yalıtılmışlık) bir duyguyu ya da durumu anlatır, nüfusun yer değiştirmesini değil. 'Agriculture' (tarım) köyleri bırakmakla çelişir. 'Tourism' (turizm) kalıcı bir yer değiştirmeyi anlatmaz." },
      { konu: ['edat'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['instead of', 'compared with', 'regardless of', 'in spite of', 'such as'], answer: 4,
        explain: "Cümle önce kent yaşamının açık üstünlükleri olduğunu söylüyor, sonra bunlardan örnekler sayıyor: işe, okula ve hastaneye kolay erişim. Örnek vermeyi 'such as' (… gibi) sağlar. 'Instead of' (yerine) ve 'in spite of' (-e rağmen) üstünlüklerle bu örnekler arasında bir karşıtlık kurar; oysa örnekler üstünlüklerin ta kendisi. 'Compared with' (-e göre) ve 'regardless of' (-e bakmaksızın) da üstünlüklerle örnekleri bağlamaz." },
      { konu: ['bağlaç'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['Although', 'Unless', 'Since', 'Whereas', 'Until'], answer: 2,
        explain: "Konut talebinin, yeni evlerin yapılabildiğinden hızlı artması kiraların yükselmesinin nedenidir. Neden 'Since' (-diği için) ile bağlanır. 'Although' (-e rağmen) neden ile sonucu karşıt gibi gösterir; oysa talep artışı kiraları doğal olarak yükseltir. 'Unless' (-medikçe) ve 'Until' (-e kadar) bir koşul ve bir zaman sınırı getirir; kiraların yükselmiş olmasıyla anlam kurmaz. 'Whereas' (oysa) iki ayrı durumu karşılaştırır; burada karşılaştırılan iki durum yok." },
      { konu: ['bağlantı zarfı'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['Even so', 'Therefore', 'For example', 'Likewise', 'Namely'], answer: 0,
        explain: "Önceki cümleler kent yaşamının bedellerini sayıyor: yüksek kiralar, ev bulamayan gençler. Boşluklu cümle ise buna rağmen kente göçün yavaşlamadığını söylüyor. Beklenene aykırı sonuç 'Even so' (yine de, buna rağmen) ile bağlanır. 'Therefore' (bu yüzden) yüksek kiraları göçün sürmesinin nedeni yapar; mantık ters. 'For example' bir örnek, 'Likewise' (benzer biçimde) bir benzerlik, 'Namely' (yani, şöyle ki) bir açıklama bekler; hiçbiri karşıtlığı kurmaz." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'st-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['isolate'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Moving to a large city gives many young people access to jobs and entertainment that their home towns could never offer, but ----.',
    options: [
      'the city also has far more museums, cinemas and concert halls',
      'that is exactly why they were so keen to leave home in the first place',
      'many of them decide to stay there for the rest of their working lives',
      'their families back home are usually proud of what they achieve',
      'some of them end up feeling more isolated than they ever did at home',
    ], answer: 4,
    explain: "'But' bir karşıtlık bekliyor: ana cümle büyük kente taşınmanın gençlere iş ve eğlence olanağı sağladığını söylüyor. Karşıt yön, bazılarının kendini memlekette hiç olmadığı kadar yalnız ve kopuk hissetmesidir. Kentte daha çok müze ve sinema olması aynı yönde bir üstünlük ekler. Gençlerin evden ayrılma nedenini veren seçenek bir karşıtlık değil, açıklamadır. Çalışma hayatları boyunca orada kalmaları ve ailelerinin onlarla gurur duyması da olumlu bilgiler; 'but' ile kurulan karşıtlığa uymaz." },

  { id: 'st-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['zaman'],
    q: "----, I didn't know anyone in the building, but now I chat with my neighbours almost every day.",
    options: [
      'After I had made friends with everyone on my floor',
      'When I first moved into this flat a year ago',
      'Now that I have lived here for so many years',
      'Whenever my neighbours invite me round for tea',
      'As soon as I started chatting to the people next door',
    ], answer: 1,
    explain: "Cümle geçmişle bugünü karşılaştırıyor: o zaman binada kimseyi tanımıyordu, şimdi komşularıyla neredeyse her gün sohbet ediyor. Geçmişteki o anı 'When I first moved into this flat a year ago' (bir yıl önce bu daireye ilk taşındığımda) verir. Kattaki herkesle arkadaş olduktan sonra ya da komşularla sohbete başlar başlamaz kimseyi tanımaması mantığa ters. 'Now that' (artık … olduğuna göre) bugünü anlatır ve geçmiş zamanlı ana cümleyle uyuşmaz. 'Whenever' (her … -diğinde) tekrarlanan bir durum bildirir; komşularının onu çaya çağırdığı her seferde kimseyi tanımaması anlamsız." },

  { id: 'st-t3', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['sparse'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: '----, the valley where my grandmother grew up is now only sparsely populated.',
    options: [
      'Although it was once home to several busy farming villages',
      'Because dozens of young families have recently settled there',
      'As long as the local primary school manages to stay open',
      'Now that a new factory has brought hundreds of jobs to the area',
      'So that young people will be tempted back from the cities',
    ], answer: 0,
    explain: "Ana cümle vadinin artık seyrek nüfuslu olduğunu söylüyor. Bununla karşıtlık kuran durum, vadinin bir zamanlar birkaç kalabalık tarım köyüne ev sahipliği yapmış olmasıdır; 'Although' bu karşıtlığı kurar. Düzinelerce genç ailenin oraya yerleşmesi ve yeni bir fabrikanın yüzlerce iş getirmesi nüfusu artırır; seyrek nüfusla çelişir. 'As long as' (… sürece) seyrek nüfusu okulun açık kalmasına bağlar; mantık kurmaz. 'So that' (… diye) seyrek nüfusu bir amaç gibi gösterir; gençleri geri çekmek için nüfusun az olması anlamsız." },

  { id: 'st-t4', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['commute', 'neighbourhood'],
    level: 'zor', cefr: 'C1', konu: ['neden-sonuç'],
    q: 'Given that long daily commutes eat into the hours people might otherwise spend with friends or at local clubs, it is perhaps unsurprising that ----.',
    options: [
      'people who work from home often say that they miss chatting with colleagues',
      'cities with good public transport tend to attract more young professionals',
      'many workers would accept a longer journey in exchange for a higher salary',
      'those who travel furthest to work tend to report weaker ties to their community',
      'people with short journeys to work rarely take part in neighbourhood activities',
    ], answer: 3,
    explain: "'Given that' (… göz önüne alınırsa) bir neden veriyor: uzun iş yolculukları insanların arkadaşlarına ve yerel kulüplere ayırabileceği saatleri yiyor. 'It is perhaps unsurprising that' de bu nedenden beklenen sonucu istiyor: işe en uzak yoldan gidenlerin çevreleriyle bağlarının daha zayıf olması. Kısa yoldan gidenlerin mahalle etkinliklerine pek katılmadığını söyleyen seçenek sonucu tersine çevirir. Evden çalışanların iş arkadaşlarını özlemesi yolculukla ilgili değil. İyi toplu taşımanın genç çalışanları çekmesi ve daha yüksek maaş için uzun yola katlanmak da verilen nedenden çıkan sonuçlar değil." },

  // ---------- çeviri ----------
  { id: 'st-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['isim-fiil ve mastar'],
    q: 'Volunteering for a local charity is one of the easiest ways for newcomers to a city to start getting to know the people around them.',
    options: [
      'Kente yeni gelenlerin pek çoğu, çevrelerindeki insanları tanımaya başlamanın en kolay yolunun yerel bir hayır kurumunda gönüllü çalışmak olduğunu düşünüyor.',
      'Yerel bir hayır kurumunda gönüllü çalışmak, kente yeni gelenlerin çevrelerindeki insanları tanımaya başlamasının en kolay yollarından biridir.',
      'Kente yeni gelenler için yerel bir hayır kurumunda gönüllü çalışmaya başlamak, çevrelerindeki insanları tanımaktan çok daha kolaydır.',
      'Yerel bir hayır kurumu, kente yeni gelenlerin çevrelerindeki insanları tanımasına yardım edecek gönüllüler arıyor.',
      'Çevrelerindeki insanları tanımak, kente yeni gelenlerin yerel bir hayır kurumunda gönüllü çalışmaya başlamasının en kolay yollarından biridir.',
    ], answer: 1,
    explain: "Cümlenin öznesi bir isim-fiil: 'Volunteering for a local charity' (yerel bir hayır kurumunda gönüllü çalışmak). 'One of the easiest ways for newcomers to start getting to know' ise 'for + kişi + to + fiil' yapısıyla 'yeni gelenlerin … tanımaya başlamasının en kolay yollarından biri' anlamını verir. Doğru çeviri özneyi ve bu yapıyı korur. Yanlışlardan biri yargıyı yeni gelenlerin çoğunun düşüncesine çeviriyor ve 'yollarından biri'ni 'en kolay yol'a daraltıyor. Biri iki eylemi birbiriyle karşılaştırıyor. Biri öznesini hayır kurumuna çevirip cümleye gönüllü arayışı ekliyor. Kalan yanlış seçenek amaç ile aracın yerini değiştiriyor." },

  { id: 'st-c2', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['anonymous'],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Unless they are designed with shared spaces where residents can meet, large housing estates can feel anonymous even to people who have lived there for years.',
    options: [
      'Sakinlerin buluşabileceği ortak alanlarla tasarlansalar da büyük toplu konut siteleri, orada yıllardır oturanlara bile kimliksiz gelebilir.',
      'Sakinlerin buluşabileceği ortak alanlarla tasarlandıkları için büyük toplu konut siteleri, orada yıllardır oturanlara bile kimliksiz gelebilir.',
      'Sakinlerin buluşabileceği ortak alanlarla tasarlanmadıkça büyük toplu konut siteleri, oraya yeni taşınanlara kimliksiz gelebilir.',
      'Büyük toplu konut siteleri, orada yıllardır oturanlara bile kimliksiz geldiği için sakinlerin buluşabileceği ortak alanlarla tasarlanmıyor.',
      'Sakinlerin buluşabileceği ortak alanlarla tasarlanmadıkça büyük toplu konut siteleri, orada yıllardır oturanlara bile kimliksiz gelebilir.',
    ], answer: 4,
    explain: "'Unless' (-medikçe, -mezse) olumsuz bir koşul kurar: siteler ortak alanlarla tasarlanmadıkça kimliksiz gelebilir. 'Even to people who have lived there for years' de 'orada yıllardır oturanlara bile' demektir. Doğru çeviri hem koşulu hem 'bile' vurgusunu korur. Yanlışlardan biri 'unless'i '-se de' diye çevirip koşulu tersine çeviriyor. Biri ortak alanları kimliksizliğin nedeni yapıyor. Biri kimliksiz gelen kişileri yıllardır oturanlardan yeni taşınanlara kaydırıyor ve 'bile'yi atıyor. Kalan yanlış seçenek koşulu bir neden-sonuç ilişkisine çevirip sitelerin neden öyle tasarlanmadığını anlatıyor." },

  { id: 'st-c3', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['isolate'],
    level: 'zor', cefr: 'C1', konu: ['kip geçmiş (modal perfect)'],
    q: 'Our elderly neighbour might not have felt so isolated last winter if someone had told her about the free lunches at the community centre.',
    options: [
      'Biri yaşlı komşumuza mahalle merkezindeki ücretsiz öğle yemeklerinden söz ettiği için geçen kış kendini o kadar yalnız hissetmedi.',
      'Biri yaşlı komşumuza mahalle merkezindeki ücretsiz öğle yemeklerinden söz etseydi bile geçen kış kendini yine yalnız hissederdi.',
      'Biri yaşlı komşumuza mahalle merkezindeki ücretsiz öğle yemeklerinden söz etmeliydi; o zaman geçen kış kendini hiç yalnız hissetmezdi.',
      'Biri yaşlı komşumuza mahalle merkezindeki ücretsiz öğle yemeklerinden söz etseydi, geçen kış kendini o kadar yalnız hissetmeyebilirdi.',
      'Yaşlı komşumuz geçen kış kendini o kadar yalnız hissetmeseydi, mahalle merkezindeki ücretsiz öğle yemeklerini birine anlatabilirdi.',
    ], answer: 3,
    explain: "Cümle geçmişte gerçekleşmemiş bir koşulu ('if someone had told her': biri söz etseydi) ve onun olası sonucunu ('might not have felt': hissetmeyebilirdi) anlatıyor. 'Might' kesinlik değil olasılık bildirir. Doğru çeviri hem gerçekleşmemiş koşulu hem olasılığı korur. Yanlışlardan biri koşulu gerçekleşmiş bir nedene ('söz ettiği için') çeviriyor. Biri '-seydi bile … yine' diyerek sonucu tersine çeviriyor. Biri olasılığı bir zorunluluğa ('söz etmeliydi') ve kesin bir sonuca ('hiç … hissetmezdi') çeviriyor. Kalan yanlış seçenek koşul ile sonucun yerini değiştiriyor." },

  { id: 'st-c4', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['neighbourhood'],
    level: 'kolay', cefr: 'B1', konu: ['edilgen'],
    q: 'Mahallemizdeki eski fırın geçen yıl kapatıldı ve yerine bir kafe açıldı.',
    options: [
      'The old bakery in our neighbourhood closed last year because a café opened next to it.',
      'The old bakery in our neighbourhood has been closed for a year, and a café will open there.',
      'Last year a café in our neighbourhood was closed, and an old bakery was opened in its place.',
      'The old bakery in our neighbourhood was opened last year in a building that had been a café.',
      'The old bakery in our neighbourhood was closed last year, and a café was opened in its place.',
    ], answer: 4,
    explain: "Türkçe cümlede iki edilgen geçmiş zaman eylemi var: fırın kapatıldı (was closed) ve yerine bir kafe açıldı (was opened in its place). Doğru çeviri ikisini de aynı sırayla verir. Yanlışlardan biri kafenin açılmasını kapanmanın nedeni yapıyor ve 'yerine'yi 'yanına' çeviriyor. Biri zamanı değiştirip kafenin açılmasını geleceğe atıyor. Biri kapanan ile açılan yerin rollerini değiştiriyor. Kalan yanlış seçenek fırının açıldığını söyleyerek anlamı tersine çeviriyor." },

  { id: 'st-c5', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['commute'],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: 'Kentimizdeki yeni metro hattı, işe gidip gelmeyi eskisine göre çok daha kolay ve ucuz hâle getirdi.',
    options: [
      'The new metro line in our city has made commuting a little easier but far more expensive than before.',
      'Commuting in our city was much easier and cheaper before the new metro line was built.',
      'The new metro line in our city has made commuting just as easy and cheap as it used to be.',
      'The new metro line in our city has made commuting much easier and cheaper than it used to be.',
      'The new metro line in our city is much easier and cheaper to use than commuting by car.',
    ], answer: 3,
    explain: "Türkçe cümle bugünü geçmişle karşılaştırıyor: yeni metro hattı işe gidip gelmeyi eskisine göre (than it used to be) çok daha (much) kolay ve ucuz hâle getirdi (has made … easier and cheaper). Doğru çeviri karşılaştırmanın iki yanını ve derecesini korur. Yanlışlardan biri 'çok daha kolay'ı 'biraz daha kolay'a indiriyor ve ulaşımı pahalılaştırıyor. Biri eski durumu daha iyi gösterip anlamı tersine çeviriyor. Biri 'as … as' ile bir eşitlik kuruyor. Kalan yanlış seçenek karşılaştırmayı metro ile arabayla gidip gelme arasına kaydırıyor." },

  { id: 'st-c6', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['sıfat cümleciği'],
    q: 'Yalnız yaşayan yaşlıları haftada bir arayan gönüllüler, bu insanların pek çoğu için dış dünyayla tek bağ olabiliyor.',
    options: [
      'Volunteers who phone elderly people living alone once a week may be the only link to the outside world for many of them.',
      'Elderly people who live alone and phone volunteers once a week may have no other link to the outside world.',
      'Volunteers who phone elderly people living alone once a week are the only link to the outside world for all of them.',
      'Many elderly people living alone, whom volunteers phone once a week, have plenty of other links to the outside world.',
      'Volunteers whose elderly relatives live alone phone them once a week to keep them in touch with the outside world.',
    ], answer: 0,
    explain: "Türkçe cümlenin öznesi bir sıfat cümleciğiyle nitelenmiş: 'yalnız yaşayan yaşlıları haftada bir arayan gönüllüler' (volunteers who phone elderly people living alone once a week). Yüklem bir olasılık bildiriyor (olabiliyor: may be) ve kapsam 'pek çoğu' (many of them). Doğru çeviri sıfat cümleciğini, olasılığı ve kapsamı korur. Yanlışlardan biri arayanla arananın yerini değiştiriyor. Biri olasılığı kesinliğe, 'pek çoğu'nu 'hepsi'ne çeviriyor. Biri yaşlıların başka pek çok bağı olduğunu söyleyerek anlamı tersine çeviriyor. Kalan yanlış seçenek 'whose' ile gönüllülerin kendi akrabalarından söz ediyor." },

  // ---------- okuma parçası (4 soru, YDS biçimi) ----------
  { id: 'st-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['crowded', 'alienate'],
    level: 'orta', cefr: 'B2', title: 'Kalabalıkta yalnız mı?',
    text: "In 1903, the German sociologist Georg Simmel published a short essay on life in the great cities of his day, usually known in English as 'The Metropolis and Mental Life'. Simmel observed that city dwellers face an almost endless stream of faces, noises, signs and traffic. Nobody, he argued, could respond with real feeling to everything they meet in a crowded street. To protect themselves, urban people develop a reserved, rather indifferent attitude towards strangers. Critics have sometimes claimed that this indifference alienates city people from one another, but Simmel also saw a benefit in it: it gives individuals a degree of personal freedom that small communities, where everyone keeps an eye on everyone else, rarely allow. Seventy years later, the American sociologist Mark Granovetter looked at social ties from a different angle. In a 1973 paper called 'The Strength of Weak Ties', he pointed out that our close friends usually know the same people and hear the same news as we do. Acquaintances, by contrast, move in other circles, so they are more likely to tell us about a job or an opportunity we would otherwise never hear of. Granovetter was not claiming that close friendships are unimportant. His point was that the loose web of people we know only slightly does valuable work as well. Taken together, the two thinkers suggest that the distance between strangers in a city need not leave its residents cut off from one another.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, Simmel believed that the reserved attitude of city dwellers ----.',
        options: [
          'makes it impossible for them to form close friendships',
          'is a sign that cities are becoming more dangerous places',
          'is found mainly among people who have recently arrived',
          'helps them cope with the flood of impressions around them',
          'had largely disappeared by the time Granovetter was writing',
        ], answer: 3,
        explain: "Parçaya göre Simmel, kentlinin yüzlerden, seslerden, tabelalardan ve trafikten oluşan bitmez bir akışla karşılaştığını, her şeye gerçek bir duyguyla karşılık veremeyeceğini, bu yüzden kendini korumak için mesafeli bir tutum geliştirdiğini söylüyor. Yani bu tutum kentlinin çevresindeki izlenim selini kaldırabilmesine yarar. Yakın arkadaşlık kurmayı imkânsız kıldığı parçada yok; parça tersine bu tutumun bir yararı olduğunu da söylüyor. Kentlerin tehlikeli hâle gelmesi, tutumun yalnız yeni gelenlerde görülmesi ve Granovetter'ın zamanında ortadan kalkmış olması parçada geçmiyor." },
      { konu: ['çıkarım'],
        q: "It can be inferred from the passage that, in Granovetter's view, someone looking for a new job ----.",
        options: [
          'may learn of more openings via loose contacts than close friends',
          'should rely mainly on advice from members of their own family',
          'will rarely hear about vacancies through other people at all',
          'ought to end friendships that no longer seem to be of any use',
          'is better off living in a small town than in a large city',
        ], answer: 0,
        explain: "Granovetter'a göre yakın dostlarımız aynı insanları tanır ve aynı haberleri duyar; az tanıdığımız kişiler ise başka çevrelerde dolaştığı için bize hiç duymayacağımız bir iş ya da fırsattan söz etmeye daha yatkındır. Buradan iş arayan birinin açık pozisyonları yakın dostlardan çok gevşek bağlarla tanıdığı kişilerden duyabileceği çıkar. Aileye dayanmak parçada geçmiyor. Başkaları aracılığıyla iş haberi almanın nadir olduğu parçaya ters. Yararsız arkadaşlıkları bitirmek parçayla çelişir; Granovetter yakın dostluğun önemsiz olmadığını vurguluyor. Küçük kasabanın daha iyi olduğu da parçada yok." },
      { konu: ['gönderim'],
        q: "The word 'they' in 'so they are more likely to tell us' refers to ----.",
        options: ['our close friends', 'the same people', 'acquaintances', 'other circles', 'strangers in a city'], answer: 2,
        explain: "Cümle 'Acquaintances, by contrast, move in other circles, so they are more likely to tell us…' biçiminde. 'They' aynı cümlenin öznesine, yani başka çevrelerde dolaşan tanıdıklara ('acquaintances') döner: bize yeni bir iş ya da fırsattan söz edenler onlardır. 'Our close friends' ve 'the same people' bir önceki cümlede geçer ve tam da bize yeni bilgi getirmeyenlerdir. 'Other circles' (başka çevreler) bir şey anlatamaz; tanıdıkların dolaştığı yerdir. 'Strangers in a city' parçanın son cümlesinde ve Simmel bağlamında geçer." },
      { konu: ['ana fikir'],
        q: 'The main idea of the passage is that ----.',
        options: [
          'city dwellers are colder and less friendly than people who live in villages',
          'close friends matter far less than acquaintances in modern urban life',
          'Simmel and Granovetter strongly disagreed about the value of city life',
          'urban reserve and loose social ties may both serve city people well',
          'most people find work through friends of friends rather than adverts',
        ], answer: 3,
        explain: "Parça iki düşünürü yan yana koyuyor: Simmel kentlinin mesafeli tutumunun ona bir özgürlük alanı da açtığını, Granovetter az tanıdığımız insanlardan oluşan gevşek ağın da değerli bir iş gördüğünü söylüyor. Son cümle de ikisini birleştiriyor: kentteki yabancılar arası mesafe insanları birbirinden koparmak zorunda değil. Bunu, kentli mesafesinin ve gevşek bağların kentlilere yarayabileceğini söyleyen seçenek özetler. Kentlilerin köylülerden soğuk olduğu parçanın vardığı sonuca ters. Yakın dostların daha az önemli olduğu, Granovetter'ın bunu savunmadığı söylendiği için yanlış. İki düşünürün çatıştığı ve insanların çoğunun işini tanıdıkların tanıdığıyla bulduğu parçada yok." },
    ] },

  // ---------- okuma parçası (3 soru, YÖKDİL biçimi) ----------
  { id: 'st-o2', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['loneliness', 'primarily'],
    level: 'zor', cefr: 'C1', title: 'Yalnızlık üzerine',
    text: "For a long time, loneliness was treated as a private matter, something people were expected to deal with primarily on their own or within the family. Over roughly the past decade, a number of governments have begun to see it differently. In 2018, the United Kingdom gave one of its ministers responsibility for loneliness, and in 2021 Japan made a similar appointment. In 2023, the Surgeon General of the United States, the federal government's leading spokesperson on public health, issued an advisory that described loneliness and social isolation as a public health concern. Researchers in this field are careful to separate loneliness from simply being alone. Many people spend long stretches in their own company and feel perfectly content, while others feel lonely in a full house or a busy office. Loneliness, in this sense, is the painful gap between the relationships a person would like to have and the ones they actually have. The distinction matters for policy. Placing people in the same room does not guarantee that they will feel connected, and studies that count only how often people see others may overlook those who are surrounded by company yet still feel alone. Treating loneliness as a public issue, then, is not about telling people how to live. It is about recognising that housing, transport and the design of neighbourhoods can make meaningful contact easier or harder, and that these are things a community can change.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the 2023 advisory from the United States ----.',
        options: [
          'led Japan to appoint its own minister for loneliness',
          'presented loneliness as a threat to the health of the population',
          'concluded that people who live alone are bound to feel lonely',
          'recommended that families take sole responsibility for the issue',
          'was the first official document anywhere to mention loneliness',
        ], answer: 1,
        explain: "Parçaya göre ABD'de halk sağlığı konusunda hükûmetin baş sözcüsü sayılan Surgeon General 2023'te yayımladığı uyarıda yalnızlığı ve sosyal yalıtılmışlığı bir halk sağlığı sorunu olarak anlattı; yani yalnızlığı toplumun sağlığını tehdit eden bir şey olarak sundu. Japonya'nın bakan atamasına yol açtığı zaman sırasına ters; Japonya atamayı 2021'de yaptı. Yalnız yaşayanların mutlaka yalnızlık çektiği parçayla çelişir; parça ikisini ayırıyor. Sorumluluğu ailelere bırakmak parçanın anlattığı eski anlayıştır, uyarının önerisi değil. Yalnızlıktan söz eden ilk resmî belge olduğu parçada yok; Birleşik Krallık ve Japonya daha önce adım atmıştı." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that a survey which asks people only how often they meet friends ----.',
        options: [
          'could fail to spot people who feel lonely despite a busy social life',
          'is the most reliable way of finding out who really feels lonely',
          'would show that most people who live alone are unhappy',
          'should be replaced entirely by questions about housing and transport',
          'is rarely used by governments when they plan their policies',
        ], answer: 0,
        explain: "Parça, yalnız insanların başkalarını ne sıklıkla gördüğünü sayan çalışmaların, çevresi kalabalık olduğu hâlde kendini yalnız hisseden kişileri gözden kaçırabileceğini söylüyor. Yalnız arkadaşlarla görüşme sıklığını soran bir anket de hareketli bir sosyal yaşamı olduğu hâlde yalnızlık çekenleri saptayamayabilir. Bunun en güvenilir yol olduğu parçaya ters. Yalnız yaşayanların çoğunun mutsuz olduğu parçayla çelişir; parça yalnız olmakla yalnızlığı ayırıyor. Anketin tümüyle konut ve ulaşım sorularıyla değiştirilmesi ve hükümetlerin bu anketleri nadiren kullanması parçada yok." },
      { konu: ['yazarın amacı'],
        q: "The author's main purpose in the passage is to ----.",
        options: [
          'argue that governments should decide how people spend their free time',
          'compare how lonely people are in Britain, Japan and the United States',
          'explain why loneliness is increasingly seen as a concern for society',
          'warn readers that spending time on their own is bad for their health',
          'describe how public health advice in the United States has changed',
        ], answer: 2,
        explain: "Yazar önce yalnızlığın eskiden özel bir mesele sayıldığını, son yıllarda hükümetlerin onu farklı görmeye başladığını anlatıyor; sonra yalnızlığı yalnız olmaktan ayırıp konut, ulaşım ve mahalle tasarımının bu sorunda neden önemli olduğunu açıklıyor. Amacı, yalnızlığın neden giderek toplumun sorunu sayıldığını açıklamaktır. Hükümetlerin insanların boş zamanına karar vermesi parçaya ters; yazar bunun insanlara nasıl yaşayacaklarını söylemek olmadığını vurguluyor. Üç ülkedeki yalnızlık oranları parçada yok. Tek başına zaman geçirmenin sağlığa zararlı olduğu parçayla çelişir. ABD'deki sağlık önerilerinin değişimi parçanın yalnız bir ayrıntısıdır." },
    ] },

  // ---------- diyalog tamamlama ----------
  { id: 'st-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['move out'],
    level: 'kolay', cefr: 'B1', konu: ['soru-cevap uyumu'],
    q: "Emma: Hi! You must be the new neighbour. I'm Emma from number 12.\nKerem: Nice to meet you, Emma. I'm Kerem. We moved in on Saturday.\nEmma: ----\nKerem: Yes, very much. It's much quieter than our old street, and the park is lovely.",
    options: [
      'Did your old flat have a balcony like this one?',
      'Are you planning to move out again any time soon?',
      'Are you enjoying life around here so far?',
      'Was it hard to carry all your furniture upstairs?',
      'Do you know anyone else who lives on this street?',
    ], answer: 2,
    explain: "Kerem'in cevabı ('Evet, çok. Eski sokağımızdan çok daha sessiz, parkı da çok güzel.') yeni yerini sevip sevmediğini soran bir soruya uyar: buradaki hayattan şimdiye kadar memnun musun? Yakında yeniden taşınmayı düşünüp düşünmediği sorusuna 'Evet, çok' ve ardından gelen övgüler uymaz. Eski dairenin balkonu, eşyaları yukarı taşımanın zorluğu ve sokakta başka tanıdığı olup olmadığı soruları da Kerem'in sessizlik ve park üzerine söylediklerine bağlanmaz." },

  // ---------- anlamca en yakın cümle ----------
  { id: 'st-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: ['crowded'],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: 'Living in a crowded city centre is not nearly as relaxing as living in a quiet suburb.',
    options: [
      'Living in a crowded city centre is slightly more relaxing than living in a quiet suburb.',
      'Living in a quiet suburb is almost as stressful as living in a crowded city centre.',
      'Living in a crowded city centre is every bit as relaxing as living in a quiet suburb.',
      'The quieter a suburb is, the more relaxing people find life in the city centre.',
      'Living in a quiet suburb is far more relaxing than living in a crowded city centre.',
    ], answer: 4,
    explain: "'Not nearly as … as' (… kadar … olmaktan çok uzak) büyük bir fark bildirir: kalabalık kent merkezinde yaşamak sessiz bir banliyöde yaşamak kadar dinlendirici olmaktan çok uzaktır. Aynı anlamı tersinden 'far more … than' kurar: sessiz banliyöde yaşamak çok daha dinlendiricidir. Kent merkezini biraz daha dinlendirici gösteren seçenek karşılaştırmayı tersine çevirir. 'Almost as stressful' iki yeri neredeyse eşit gösterir; 'every bit as relaxing' ise tam bir eşitlik kurar. 'The quieter …, the more …' cümlede olmayan bir ilişki ileri sürer." },

  // ---------- paragraf tamamlama ----------
  { id: 'st-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['fit in', 'socialise'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'Making friends as an adult in a new city is often harder than people expect. At school or university, friendships tend to form almost by themselves, because the same people bump into each other again and again without having to arrange anything. ----. This is why many newcomers find that a weekly class or sports team helps them fit in and socialise far more than any single large party does.',
    options: [
      'Universities usually hold welcome events for first-year students in their first week',
      'In adult life, such frequent and effortless contact becomes much rarer',
      'Adults, on the other hand, generally have more money to spend on going out',
      'Some people manage to stay in touch with their school friends for decades',
      'Large parties are a good way of meeting many people in a single evening',
    ], answer: 1,
    explain: "Paragraf yetişkinlikte arkadaş edinmenin neden zor olduğunu anlatıyor: okulda aynı insanlar hiçbir şey ayarlamadan sık sık karşılaşır. Son cümle ise yeni gelenlere haftalık bir kurs ya da takımın yardım ettiğini söylüyor, yani düzenli karşılaşmayı yeniden kurmayı öneriyor. Aradaki adım, yetişkin hayatında bu sık ve zahmetsiz temasın çok azalmasıdır; 'This is why' de bu cümleye bağlanır. Büyük partilerin iyi bir yol olduğu, son cümledeki partiden üstün tutulan haftalık etkinlikle çelişir. Üniversitelerin karşılama etkinlikleri, yetişkinlerin daha çok parası olması ve okul arkadaşlarıyla görüşmeyi sürdürmek, 'This is why' ile gelen sonuca bağlanmaz." },

  { id: 'st-p2', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['anonymous'],
    level: 'zor', cefr: 'C1', konu: ['gönderim'],
    q: 'In many large cities, people who live in the same building may pass each other on the stairs for years without exchanging more than a nod, and a block of eighty flats can feel strangely anonymous. ----. Such small gestures, repeated over months, can slowly turn a group of strangers into something closer to a community.',
    options: [
      'This is partly because many tenants rent their flats for only a year or two before moving on',
      'Architects have long argued that tall buildings discourage contact between the people inside',
      'Surveys suggest that many tenants would like to know their neighbours rather better than they do',
      'Some residents, however, actually prefer this and value the privacy that a big city allows them',
      'In some blocks, residents now leave notes offering to water plants or take in parcels for others',
    ], answer: 4,
    explain: "Boşluktan sonraki cümle 'Such small gestures' (bu tür küçük jestler) diye başlıyor; boşluktaki cümle küçük, iyi niyetli davranışlardan söz etmeli. Bunu, bazı binalarda sakinlerin başkalarının çiçeklerini sulamayı ya da kargolarını teslim almayı öneren notlar bıraktığını söyleyen cümle sağlar; bu jestler aylarca sürünce yabancıları bir topluluğa yaklaştırır. Kiracıların kısa sürede taşınması ve mimarların yüksek binalar üzerine görüşü kimliksizliğin nedenleridir, jest değildir. Kiracıların komşularını daha iyi tanımak istemesi bir istektir, bir davranış değil. Mahremiyeti seven sakinler ise jestlerle topluluk kurulmasına karşıt bir yön getirir." },

  // ---------- akışı bozan cümle ----------
  { id: 'st-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['migrant', 'rapidly'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      "From the 1950s onwards, Turkey's cities grew rapidly as large numbers of people left their villages in search of work.",
      'Many of the migrants were young people who found jobs in factories, on building sites or in small workshops.',
      'Newcomers often relied on relatives or people from their home village to help them find a first job and somewhere to live.',
      'Today, Turkish cities draw large numbers of foreign tourists with their historic mosques, busy bazaars and museums.',
      "Over the following decades, these networks of fellow villagers helped to shape whole districts, and today the great majority of the country's population lives in towns and cities.",
    ], answer: 3,
    explain: "Parça Türkiye'de köyden kente göçü sırayla anlatıyor: 1950'lerden sonra kentler hızla büyüyor (I); göç edenlerin çoğu fabrikalarda, inşaatlarda ve atölyelerde iş bulan gençler (II); yeni gelenler iş ve ev bulmak için akrabalarına ve hemşehrilerine dayanıyor (III); bu hemşehri ağları zamanla koca semtleri biçimlendiriyor ve bugün nüfusun büyük çoğunluğu kentli (V). IV. cümle de Türkiye'nin kentlerinden söz ediyor ama konuyu yabancı turistlere ve tarihî yapılara kaydırıyor; V'teki 'these networks of fellow villagers' da doğrudan III'e bağlanıyor. Bu yüzden akışı IV. cümle bozuyor." },

  { id: 'st-b2', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['household'],
    level: 'kolay', cefr: 'B2', konu: ['akış'],
    sentences: [
      'In many countries, single-person households appear to make up a growing share of all households.',
      'In some cultures, grandparents play a central part in bringing up their grandchildren.',
      'Researchers link this trend to several changes, such as longer lives, later marriages and higher incomes that allow more people to rent a home of their own.',
      'The change is also visible in the housing market of many cities, where small flats seem to be increasingly in demand.',
      'Supermarkets have noticed it too, and many now sell food in single portions for people who cook only for themselves.',
    ], answer: 1,
    explain: "Parça tek kişilik hanelerin artışını anlatıyor: pek çok ülkede bu hanelerin payı büyüyor gibi görünüyor (I); araştırmacılar bunu uzayan ömre, geç evliliğe ve kendi evini kiralayabilecek gelire bağlıyor (III); değişim konut piyasasında küçük dairelere talep olarak görülüyor (IV); süpermarketler de tek porsiyonluk ürünlerle buna uyuyor (V). II. cümle de aileden söz ediyor ama konuyu büyükannelerin ve büyükbabaların torun büyütmedeki rolüne kaydırıyor; III'teki 'this trend' de I'deki artışa bağlanıyor. Bu yüzden akışı II. cümle bozuyor." },
];

export default { id: 'sosyal-kentlesme', course: C, title: U, order: 8, cards, items };
