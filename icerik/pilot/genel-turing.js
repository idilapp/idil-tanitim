// iDil › Genel › Makineler düşünebilir mi?
// Tümü özgün: Claude yazdı (17 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (çoğaltma 4. tur planı §7.1 ve yerleşik bilgi; yalnız olgular, metin özgün). Her olgu yalnız bir öğede:
// - Alan Turing, 1950, "Computing Machinery and Intelligence" (Mind dergisi); "Makineler düşünebilir mi?" sorusunun yerine
//   taklit oyunu: sorgucu yalnız yazışarak hangisinin makine olduğunu ayırt etmeye çalışır. Turing'in hesaplama kuramı
//   üzerine önceki çalışması yerleşik bilgi. Turing'in öngörüsü (yaklaşık elli yıl, beş dakikalık sorgu, doğru tanıma şansı
//   %70'ten fazla değil) temkinli: "he believed" (gt-o1);
// - "artificial intelligence" teriminin 1955 tarihli öneride (John McCarthy ve arkadaşları) kullanılması; 1956 yazında
//   Dartmouth College'daki çalışma toplantısı. Toplantının alanın doğuşu sayılması "often described" diye temkinli; önerinin
//   metni aktarılmadı, hedefleri genel sözle anlatıldı (gt-z1);
// - Joseph Weizenbaum, MIT, ELIZA (1966): psikoterapist rolündeki basit program; bazı kullanıcıların ona kişisel duygularını
//   açması; Weizenbaum'un bundan rahatsız olduğunu kendisi yazdı ve sonra eleştirel bir kitap yazdı ("later wrote"); kitabın adı
//   yazılmadı (gt-p2);
// - IBM Deep Blue: 1996'daki ilk maçı Kasparov kazandı; 1997'de altı oyunluk maçta Deep Blue kazandı (gt-b1);
// - DeepMind AlphaGo, 2016, Lee Sedol'e karşı beş oyunluk maç, 4–1; ikinci oyundaki 37. hamlenin önce hata sanılması.
//   "Sürpriz" yorumu "surprised many in the field" diye temkinli (gt-p1);
// - John Searle, 1980, Çince Oda; iki yaygın itiraz (bütün sistem anlar; anlamak için duyu ve hareketle dünyaya bağlanmak
//   gerekir) adsız ve genel anlatıldı (gt-o2);
// - öteki öğeler (dil bilgisi, cümle tamamlama, çeviri, diyalog, yakın anlam, gt-b2) olgu taşımaz: kişiler ve programlar
//   kurgusal, bugünkü sohbet robotları için tarih, oran ya da ürün adı yok.
// Görev 20 (25 Kasım 2026): çeviri çeldiricileri biçim kestirmesine karşı yeniden kuruldu.

const T = 'taslak';
const C = 'genel';
const U = 'Makineler düşünebilir mi?';

const cards = [
  // ---------- isim ----------
  { code: 'algorithm', title: 'algoritma; bir sorunu çözmek için adım adım izlenen kurallar dizisi', pos: 'isim', cefr: 'B2', ipa: '/ˈælɡərɪðəm/',
    text: "Bir işi ya da hesabı yapmanın kesin, adım adım kuralları; özellikle bir bilgisayar programının izlediği yol: a search algorithm (arama algoritması), design an algorithm (algoritma tasarlamak). Sayılabilir isimdir. Sıfatı 'algorithmic'. Ortadaki 'th' /ð/ diye okunur.",
    example: 'The music app uses an algorithm to suggest songs that are similar to the ones you have already liked.',
    exampleTr: 'Müzik uygulaması, beğendiğin şarkılara benzeyenleri önermek için bir algoritma kullanıyor.',
    synonyms: ['procedure', 'set of rules'], family: ['algorithmic'] },
  { code: 'computation', title: 'hesaplama; (makinede) bilgi işleme', pos: 'isim', cefr: 'C1', ipa: '/ˌkɒmpjuˈteɪʃn/',
    text: "Hesap yapma işi ya da bir makinenin bilgiyi kurallara göre işlemesi: complex computations (karmaşık hesaplamalar), the theory of computation (hesaplama kuramı). Fiili 'compute' (hesaplamak), sıfatı 'computational': computational power (işlem gücü). Bilimsel metinlerde 'calculation'dan daha resmîdir.",
    example: "Forecasting next week's weather involves a huge amount of computation, even on the fastest machines.",
    exampleTr: 'Gelecek haftanın hava durumunu tahmin etmek, en hızlı makinelerde bile muazzam miktarda hesaplama gerektirir.',
    synonyms: ['processing', 'reckoning'], family: ['compute', 'computational'] },
  { code: 'rival', title: 'rakip', pos: 'isim', cefr: 'B2', ipa: '/ˈraɪvl/',
    text: "Aynı şeyi kazanmak için biriyle yarışan kişi, takım ya da kurum: a business rival, old rivals (eski rakipler). Sıfat olarak da kullanılır: rival companies (rakip şirketler). Adı 'rivalry' (rekabet, çekişme). 'Opponent' çoğu zaman tek bir karşılaşmadaki karşı tarafı, 'rival' ise süregelen bir rekabeti anlatır.",
    example: 'The two neighbouring towns have been rivals for years, and every match between their football teams is sold out.',
    exampleTr: 'Komşu iki kasaba yıllardır rakip; futbol takımları arasındaki her maçın biletleri tükeniyor.',
    synonyms: ['competitor', 'opponent'], family: ['rivalry'] },
  { code: 'prototype', title: 'ilk örnek, deneme modeli, prototip', pos: 'isim', cefr: 'C1', ipa: '/ˈprəʊtətaɪp/',
    text: "Bir ürünün seri üretimden ya da yaygın kullanımdan önce denenmek için yapılan ilk örneği: build a prototype (prototip yapmak), an early prototype (erken bir deneme modeli). Ürünün eksikleri çoğu zaman bu aşamada ortaya çıkar.",
    example: 'The engineers tested the prototype for months before the first delivery robots appeared on the streets.',
    exampleTr: 'Mühendisler, ilk teslimat robotları sokaklara çıkmadan önce prototipi aylarca denediler.',
    synonyms: ['trial model', 'pilot version'], family: [] },
  { code: 'triumph', title: 'büyük zafer, büyük başarı', pos: 'isim', cefr: 'C1', ipa: '/ˈtraɪʌmf/',
    text: "Zorlukla kazanılmış büyük başarı ve bunun verdiği sevinç: a personal triumph (kişisel bir zafer), a triumph of engineering (mühendisliğin büyük başarısı). Fiil olarak da kullanılır: triumph over (… karşısında zafer kazanmak). Sıfatı 'triumphant' (zafer kazanmış, muzaffer).",
    example: 'Getting the old radio to work again after weeks of repairs felt like a small triumph.',
    exampleTr: 'Haftalarca uğraştıktan sonra eski radyoyu yeniden çalıştırmak küçük bir zafer gibiydi.',
    synonyms: ['victory', 'success'], family: ['triumphant'] },
  // ---------- fiil ----------
  { code: 'mimic', title: 'taklit etmek, (sesini, davranışını) benzetmek', pos: 'fiil', cefr: 'C1', ipa: '/ˈmɪmɪk/',
    text: "Birinin ya da bir şeyin sesini, hareketini ya da davranışını taklit etmek. Taklit başarılı da olabilir, kaba ve yetersiz de: mimic an accent (bir aksanı taklit etmek). Geçmiş zamanda ve -ing ekinde 'k' eklenir: mimicked, mimicking. Adı 'mimicry' (taklit, öykünme).",
    example: 'Some birds can mimic the sound of a car alarm so well that people turn round to look.',
    exampleTr: 'Bazı kuşlar araba alarmının sesini öyle iyi taklit eder ki insanlar dönüp bakar.',
    synonyms: ['imitate', 'copy'], family: ['mimicry'] },
  { code: 'calculate', title: 'hesaplamak', pos: 'fiil', cefr: 'B1', ipa: '/ˈkælkjuleɪt/',
    text: "Sayılarla bir sonucu bulmak: calculate the cost (masrafı hesaplamak). Mecaz olarak 'kestirmek, tartmak' anlamında da kullanılır: calculate the risk. Adı 'calculation', aleti 'calculator' (hesap makinesi).",
    example: 'Before we set off, she calculated how much petrol we would need for the whole journey.',
    exampleTr: 'Yola çıkmadan önce bütün yolculuk için ne kadar benzine ihtiyacımız olacağını hesapladı.',
    synonyms: ['work out', 'figure out'], family: ['calculation', 'calculator'] },
  { code: 'simulate', title: 'benzetimini yapmak; (gerçekte olmayanı) varmış gibi göstermek', pos: 'fiil', cefr: 'C1', ipa: '/ˈsɪmjuleɪt/',
    text: "Bir şeyin dış görünüşünü ya da işleyişini, o şeyin kendisi olmadan yeniden üretmek: simulate an earthquake in a laboratory (laboratuvarda deprem benzetimi yapmak), simulate interest (ilgileniyormuş gibi yapmak). Adı 'simulation', aygıtı 'simulator': a flight simulator (uçuş benzetim aygıtı).",
    example: 'A good actor can simulate grief on stage while actually thinking about what to cook for dinner.',
    exampleTr: 'İyi bir oyuncu sahnede yas tutuyormuş gibi görünürken aslında akşam yemeğine ne pişireceğini düşünüyor olabilir.',
    synonyms: ['imitate', 'fake'], family: ['simulation', 'simulator'] },
  { code: 'outperform', title: '(birinden ya da bir şeyden) daha iyi iş çıkarmak, geride bırakmak', pos: 'fiil', cefr: 'C1', ipa: '/ˌaʊtpəˈfɔːm/',
    text: "Bir işte başka birinden ya da bir şeyden daha başarılı olmak: the new model outperforms the old one. Nesneyi doğrudan alır; 'than' kullanılmaz. Çoğu zaman ölçülebilir bir karşılaştırmayı anlatır: sınav sonuçları, satışlar, deney ölçümleri.",
    example: 'In the tests, the cheaper phone outperformed several expensive models when taking photos at night.',
    exampleTr: 'Denemelerde ucuz telefon, gece fotoğraf çekerken birkaç pahalı modeli geride bıraktı.',
    synonyms: ['beat', 'do better than'], family: [] },
  { code: 'surpass', title: '(bir düzeyi, beklentiyi) aşmak, geçmek', pos: 'fiil', cefr: 'C1', ipa: '/səˈpɑːs/',
    text: "Bir düzeyi, sayıyı ya da beklentiyi aşmak; birinden daha iyi olmak: surpass expectations (beklentileri aşmak), surpass a record (bir rekoru geçmek). Resmî bir sözcüktür; edilgen kalıbı sık geçer: be surpassed by.",
    example: "Ticket sales for the science fair surpassed all expectations, and the hall was full by ten o'clock.",
    exampleTr: 'Bilim fuarının bilet satışları bütün beklentileri aştı; salon saat onda dolmuştu.',
    synonyms: ['exceed', 'outdo'], family: [] },
  { code: 'automate', title: 'otomatikleştirmek, (bir işi) makineye yaptırmak', pos: 'fiil', cefr: 'C1', ipa: '/ˈɔːtəmeɪt/',
    text: "Bir işi insan yerine makineye ya da bilgisayara yaptırmak: automate a factory, automate the billing process. Çoğu zaman edilgen ya da sıfat olarak geçer: an automated system (otomatik sistem). Adı 'automation' (otomasyon).",
    example: 'The library has automated its lending system, so borrowers now scan their own books at the desk.',
    exampleTr: 'Kütüphane ödünç verme sistemini otomatikleştirdi; okuyucular artık kitaplarını masada kendileri okutuyor.',
    synonyms: ['mechanise', 'computerise'], family: ['automation', 'automated'] },
  // ---------- sıfat ----------
  { code: 'artificial', title: 'yapay; yapmacık', pos: 'sıfat', cefr: 'B2', ipa: '/ˌɑːtɪˈfɪʃl/',
    text: "İnsan eliyle yapılmış, doğal olmayan: artificial light (yapay ışık), artificial sweeteners (yapay tatlandırıcılar). İnsan davranışı için 'yapmacık' anlamı da var: an artificial smile. Zarfı 'artificially'. 'Artificial intelligence' (yapay zekâ) kısaca AI diye yazılır.",
    example: 'The football pitch has artificial grass, so it can be used even after heavy rain.',
    exampleTr: 'Futbol sahasında yapay çim var; bu yüzden şiddetli yağmurdan sonra bile kullanılabiliyor.',
    synonyms: ['man-made', 'synthetic'], family: ['artificially'] },
  { code: 'convincing', title: 'inandırıcı, ikna edici', pos: 'sıfat', cefr: 'B2', ipa: '/kənˈvɪnsɪŋ/',
    text: "İnsanı bir şeyin doğru ya da gerçek olduğuna inandıran: a convincing argument (ikna edici bir sav), a convincing performance (inandırıcı bir oyunculuk). Fiili 'convince' (ikna etmek), zarfı 'convincingly'. Karşıtı 'unconvincing'.",
    example: 'Her excuse for being late was so convincing that nobody thought to check whether the trains had really been delayed.',
    exampleTr: 'Geç kalma bahanesi öyle inandırıcıydı ki trenlerin gerçekten gecikip gecikmediğine bakmak kimsenin aklına gelmedi.',
    synonyms: ['persuasive', 'believable'], family: ['convince', 'convincingly'] },
  { code: 'indistinguishable', title: 'ayırt edilemez, ayırt edilemeyecek kadar benzer', pos: 'sıfat', cefr: 'C1', ipa: '/ˌɪndɪˈstɪŋɡwɪʃəbl/',
    text: "İki şey arasındaki fark görülemeyecek kadar benzer: indistinguishable from (… -den ayırt edilemez). Hemen her zaman 'from' ile kullanılır. 'Distinguish' (ayırt etmek) kökünden olumsuzluk önekiyle (in-) türemiştir; anlamı kökün tersidir.",
    example: 'The fake banknotes were almost indistinguishable from real ones, even under a bright light.',
    exampleTr: 'Sahte banknotlar parlak ışık altında bile gerçeklerinden neredeyse ayırt edilemiyordu.',
    synonyms: ['identical', 'alike'], family: [] },
  { code: 'logical', title: 'mantıklı; mantığa dayanan', pos: 'sıfat', cefr: 'B2', ipa: '/ˈlɒdʒɪkl/',
    text: "Akla uygun, adımları birbirini izleyen: a logical explanation (mantıklı bir açıklama), the logical next step (atılacak mantıklı adım). Adı 'logic' (mantık), zarfı 'logically'. Karşıtı 'illogical'.",
    example: 'Since the shop was closed on Sunday, the logical thing was to go back on Monday morning.',
    exampleTr: 'Dükkân pazar günü kapalı olduğu için yapılacak mantıklı şey pazartesi sabahı yeniden gitmekti.',
    synonyms: ['rational', 'sensible'], family: ['logic', 'logically'] },
  // ---------- zarf ----------
  { code: 'instantly', title: 'anında, hemen', pos: 'zarf', cefr: 'B2', ipa: '/ˈɪnstəntli/',
    text: "Hiç zaman geçmeden, o an: reply instantly (anında cevap vermek), instantly recognisable (hemen tanınan). Sıfatı 'instant' (anlık, hazır): instant coffee (hazır kahve). 'Immediately' ile yakın anlamlıdır.",
    example: 'The message was delivered instantly, but it took him two days to answer it.',
    exampleTr: 'Mesaj anında iletildi ama onun cevap vermesi iki gün sürdü.',
    synonyms: ['immediately', 'at once'], family: ['instant'] },
  { code: 'eerily', title: 'tekinsiz biçimde, ürkütücü derecede', pos: 'zarf', cefr: 'C1', ipa: '/ˈɪərəli/',
    text: "İnsanı tedirgin eden, açıklanamaz bir tuhaflıkla: eerily quiet (ürkütücü derecede sessiz), eerily similar (insanı huzursuz edecek kadar benzer). Çoğu zaman bir sıfatın önünde gelir. Sıfatı 'eerie' (tekinsiz).",
    example: 'The streets were eerily empty on the morning of the national holiday.',
    exampleTr: 'Ulusal bayram sabahı sokaklar tekinsiz biçimde boştu.',
    synonyms: ['strangely', 'uncannily'], family: ['eerie'] },
  // ---------- öbek fiil ----------
  { code: 'pass for', title: '… sanılmak, … yerine geçmek', pos: 'öbek fiil', cefr: 'C1', ipa: '/ˈpɑːs fɔː/',
    text: "Gerçekte o olmadığı hâlde bir şey ya da biri sanılmak: she could pass for twenty (yirmi yaşında sanılabilir). Nesne 'for'dan sonra gelir; iki sözcük ayrılmaz. Yakın anlamlı 'pass as' da kullanılır.",
    example: 'With his grey beard and old coat, the young actor could easily pass for a man of seventy.',
    exampleTr: 'Kır sakalı ve eski paltosuyla genç oyuncu kolayca yetmişlik bir adam sanılabilirdi.',
    synonyms: ['be taken for', 'pass as'], family: [] },
];

const items = [
  // ---------- kelime ----------
  { id: 'gt-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['mimic', 'outperform'],
    level: 'orta', cefr: 'C1', konu: ['fiil'],
    q: 'Early speaking machines could only ---- the human voice in a flat, robotic tone, so no listener was ever fooled into thinking that a person was talking.',
    options: ['outperform', 'mimic', 'postpone', 'inherit', 'dismiss'], answer: 1,
    explain: "Konuşan ilk makinelerin sesi düz ve robot gibiydi; kimse karşısında bir insan olduğunu sanmadı. Burada makinelerin insan sesini taklit etmeye çalıştığı anlatılıyor: 'mimic' (taklit etmek). 'Outperform' (daha iyi iş çıkarmak) makine ile insanı karşılaştırdığı için çekici görünür, ama düz ve robot gibi bir ses insan sesini geride bırakmaz; cümle başarısız bir taklidi anlatıyor. 'Postpone' (ertelemek), 'inherit' (miras almak) ve 'dismiss' (önemsememek, kovmak) sesi ve kimsenin kanmamasını açıklamaz." },

  { id: 'gt-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['calculate', 'surpass'],
    level: 'kolay', cefr: 'B1', konu: ['fiil'],
    q: 'My grandfather never needed a machine; he could ---- the total of a long shopping bill in his head faster than any of us.',
    options: ['surpass', 'describe', 'calculate', 'borrow', 'repair'], answer: 2,
    explain: "Dede makineye ihtiyaç duymuyor, uzun bir alışveriş fişinin toplamını kafasından hepimizden hızlı buluyor. Sayılarla sonuç bulmak 'calculate' (hesaplamak) ile anlatılır. 'Surpass' (aşmak, geçmek) bir düzeyi ya da birini geride bırakmaktır; bir toplam aşılmaz, hesaplanır. 'Describe' (anlatmak), 'borrow' (ödünç almak) ve 'repair' (onarmak) kafadan yapılan hesapla bağdaşmaz." },

  { id: 'gt-k3', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['pass for'],
    level: 'zor', cefr: 'C1', konu: ['öbek fiil'],
    q: "The program's short, friendly replies could easily ---- the messages of a real customer adviser, at least until someone asked it an unusual question.",
    options: ['pass for', 'catch on', 'give up', 'look into', 'set off'], answer: 0,
    explain: "Programın kısa ve sıcak cevapları gerçek bir müşteri temsilcisinin mesajları sanılabiliyor; ancak biri alışılmadık bir soru sorunca bu yanılsama bozuluyor. Gerçekte o olmadığı hâlde bir şey sanılmak 'pass for' ile anlatılır. 'Catch on' (tutmak, yaygınlaşmak; anlamak) nesneyi doğrudan almaz ve cevapların bir şey sanılmasını anlatmaz. 'Give up' (vazgeçmek), 'look into' (araştırmak) ve 'set off' (yola çıkmak; tetiklemek) cevapların temsilcinin mesajlarına benzemesini anlatmaz." },

  // ---------- dil bilgisi ----------
  { id: 'gt-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['logical'],
    level: 'orta', cefr: 'B2', konu: ['kip geçmiş (modal perfect)'],
    q: 'The explanation was so clear and logical that Elif decided a teacher ---- it; she was surprised to learn later that a computer program had produced it.',
    options: ['should have written', 'must have written', "needn't have written", "can't have written", 'might not have written'], answer: 1,
    explain: "Elif açıklamayı okuyunca onu bir öğretmenin yazdığı kanısına varıyor; sonradan bir programın yazdığını öğrenince şaşırıyor. Geçmişle ilgili güçlü bir çıkarım 'must have written' (yazmış olmalı) ile kurulur; 'decided' (kanısına vardı) da bir çıkarımı haber verir. 'Can't have written' (yazmış olamaz) ve 'might not have written' (yazmamış olabilir) Elif'in inancını tersine çevirir; o zaman sonradan şaşırması anlamsız olur. 'Should have written' (yazmalıydı) bir beklenti ya da eleştiri bildirir, çıkarım değil. 'Needn't have written' (yazmasına gerek yoktu) gereksiz yapılmış bir işi anlatır." },

  { id: 'gt-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['zaman: present perfect'],
    q: 'Since the school bought its first robot kit, my daughter ---- very interested in programming.',
    options: ['became', 'was becoming', 'becomes', 'had become', 'has become'], answer: 4,
    explain: "'Since' (-den beri) geçmişte başlayıp bugüne uzanan bir süreyi gösterir: okul ilk robot setini aldığından beri kız programlamaya ilgi duyuyor ve bu ilgi sürüyor. Bu yüzden ana cümlede present perfect gerekir: 'has become'. 'Became' ve 'was becoming' ilgiyi geçmişte bırakır; bugüne bağlamaz. 'Becomes' geniş zamandır, 'since' ile kullanılmaz. 'Had become' geçmişteki başka bir andan önceyi anlatır; cümlede öyle bir an yok." },

  { id: 'gt-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['devrik yapı'],
    q: "Not until the researchers compared the two transcripts word by word ---- that one of the 'people' in the chat had been a program all along.",
    options: ['they realised', 'had they been realising', 'did they realise', 'have they realised', 'would they have realised'], answer: 2,
    explain: "Cümle olumsuz bir zaman ifadesiyle ('Not until …') başlıyor; bu yüzden ana cümle devrik kurulur ve geçmiş zamanda yardımcı fiil 'did' öne gelir: 'did they realise' (ancak … karşılaştırınca fark ettiler). 'They realised' devrik değildir; 'Not until' ile başlayan cümlede kullanılmaz. 'Have they realised' devrik ama present perfect'tir; geçmişte kalmış karşılaştırmayla (compared) uyuşmaz. 'Had they been realising' fark etmeyi süregiden ve karşılaştırmadan önceki bir eylem yapar; anlam bozulur. 'Would they have realised' gerçekleşmemiş bir koşulun sonucunu bildirir, oysa araştırmacılar gerçekten fark etti." },

  // ---------- boşluklu metin ----------
  { id: 'gt-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: ['artificial', 'outperform'],
    level: 'orta', cefr: 'B2', title: 'Bir yaz toplantısı',
    text: "Today the phrase 'artificial intelligence' is so familiar that it is easy to forget it was once a brand-new label. It was used in a proposal written in 1955 by John McCarthy and a few colleagues, who wanted to hold a summer workshop at Dartmouth College in the United States. The workshop took place in 1956, and (1) ---- its modest size, it is often described as the moment the field was born. The organisers hoped to (2) ---- researchers who had been working on similar questions in separate places, and they were remarkably optimistic. They believed that, with a small team working together for one summer, real progress (3) ---- on problems such as getting machines to use language. That hope proved premature, and many of those problems are still being studied today. (4) ----, the meeting achieved something lasting. It gave a scattered set of projects a shared name, (5) ---- researchers around the world still use to describe their work.",
    steps: [
      { konu: ['edat'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['because of', 'instead of', 'apart from', 'despite', 'according to'], answer: 3,
        explain: "Toplantı küçüktü ama yine de alanın doğduğu an diye anılıyor. Beklentiye aykırı bu durumu 'despite' (-e rağmen) bildirir. 'Because of' (… yüzünden) küçüklüğü önemli sayılmanın nedeni yapar; mantık ters döner. 'Instead of' (… yerine), 'apart from' (… dışında) ve 'according to' (… göre) küçüklük ile ün arasındaki karşıtlığı kurmaz." },
      { konu: ['kelime', 'fiil'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['outperform', 'discourage', 'divide', 'overlook', 'gather'], answer: 4,
        explain: "Düzenleyiciler ayrı yerlerde benzer sorular üzerinde çalışan araştırmacıları bir yaz boyunca birlikte çalışacak küçük bir ekipte buluşturmak istiyordu: 'gather' (bir araya toplamak). 'Outperform' (geride bırakmak) bir yarışma ilişkisi kurar; metindeki ortak çalışma ve iyimserlikle uyuşmaz. 'Discourage' (cesaretini kırmak) iyimserlikle çelişir. 'Divide' (bölmek) zaten ayrı çalışanlar için anlamsızdır. 'Overlook' (gözden kaçırmak) de toplantının amacını tersine çevirir." },
      { konu: ['zaman uyumu'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['could be made', 'has been made', 'is being made', 'had been made', 'was made'], answer: 0,
        explain: "Ana fiil geçmişte (believed) ve inanılan şey o gün için gelecekte: bir yaz boyunca ilerleme sağlanabileceği. Geçmişten bakılan gelecek için 'could be made' gerekir. 'Has been made' ve 'is being made' bugüne aittir; 'believed' ile zaman uyumu kurmaz. 'Had been made' ilerlemenin inanılan andan önce zaten sağlandığını söyler; 'bir yaz boyunca çalışarak' sözüyle çelişir. 'Was made' de beklenen değil, olmuş bir şeyi bildirir." },
      { konu: ['bağlantı zarfı'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['Therefore', 'For example', 'Nevertheless', 'Similarly', 'In other words'], answer: 2,
        explain: "Önceki cümle umudun erken olduğunu, sorunların çoğunun hâlâ incelendiğini söylüyor. Boşluklu cümle buna karşın kalıcı bir kazanımı anlatıyor. Bu karşıtlığı 'Nevertheless' (yine de) kurar. 'Therefore' (bu yüzden) başarısız umudu kalıcı kazanımın nedeni yapar. 'For example' (örneğin), 'Similarly' (benzer biçimde) ve 'In other words' (başka bir deyişle) aynı yönde devam bekler." },
      { konu: ['sıfat cümleciği'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['whose', 'which', 'who', 'where', 'what'], answer: 1,
        explain: "Boşluk 'a shared name' (ortak bir ad) sözünü niteleyen bir sıfat cümleciği başlatıyor ve bu ad cümlecikteki 'use' fiilinin nesnesi. Virgülden sonra cansız bir ismi 'which' niteler. 'Who' insanlar için kullanılır. 'Whose' iyelik bildirir ve ardından bir isim ister. 'Where' yer bildirir; ad bir yer değil. 'What' önünde isim olan bir sıfat cümleciği kurmaz." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'gt-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['prototype'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'The prototype of the new translation app handles everyday phrases remarkably well, ----.',
    options: [
      'since everyday phrases are the hardest thing for any program to handle',
      'so it is seldom used by people who are travelling abroad',
      'but it still struggles with jokes that depend on wordplay',
      'although its makers tested it mainly on ordinary speech',
      'unless the user types every phrase in capital letters',
    ], answer: 2,
    explain: "Ana cümle bir başarıyı söylüyor: uygulamanın deneme modeli gündelik ifadeleri çok iyi çeviriyor. Anlamlı tamamlama bir sınır getirir: söz oyununa dayanan şakalarda hâlâ zorlanıyor. Gündelik ifadelerin en zor şey olması başarının nedeni olamaz; mantık ters. İyi çalışan bir uygulamanın bu yüzden yurt dışına gidenlerce az kullanılması da ters bir sonuçtur. 'Although' ile kurulan seçenek karşıtlık bağlacı taşıyor ama sıradan konuşmayla denenmiş olmak başarıya aykırı değil, onun açıklamasıdır. Büyük harfle yazma koşulu da cümleyle ilgisizdir." },

  { id: 'gt-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['koşul'],
    q: '----, the robot vacuum cleaner stops and changes direction.',
    options: [
      'Unless it reaches a wall or a chair leg',
      'If the floor in front of it is empty',
      'If it bumps into a wall or chair leg',
      'Because its battery is always full',
      'Although it hits something in its way',
    ], answer: 2,
    explain: "Robot süpürge durup yön değiştiriyor; bunun koşulu önüne bir engel çıkmasıdır: bir duvara ya da sandalye ayağına çarparsa. 'Unless' (-medikçe) koşulu tersine çevirir: duvara varmadıkça durması anlamsızdır. Önü boşken durması da mantıksızdır. Pilinin hep dolu olması yön değiştirmenin nedeni değildir. 'Although' (-e rağmen) çarpmayı durmaya engel gibi gösterir, oysa çarpma durmanın nedenidir." },

  { id: 'gt-t3', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['automate'],
    level: 'orta', cefr: 'B2', konu: ['neden-sonuç'],
    q: '----, many websites ask visitors to pick out pictures of buses or traffic lights before letting them in.',
    options: [
      'As automated programs can open thousands of fake accounts quickly',
      'Even though programs are unable to open any accounts on such sites',
      'So that visitors can show off how much they know about city traffic',
      'Unless visitors have already forgotten their own passwords',
      'Because fewer people now use the internet to do their shopping',
    ], answer: 0,
    explain: "Ana cümle bir önlemi anlatıyor: siteler ziyaretçilerden otobüs ya da trafik ışığı resimlerini seçmelerini istiyor. Boşluğa bu önlemin nedeni gelir: otomatik programlar kısa sürede binlerce sahte hesap açabiliyor, resim seçme de ziyaretçinin insan olduğunu sınıyor. Programların hesap açamaması önlemi gereksiz kılar; mantık ters. Ziyaretçilerin trafik bilgisini göstermesi önlemin amacı değildir. Şifreyi unutma koşulu ve internetten alışverişin azalması da resim seçmeyi açıklamaz." },

  { id: 'gt-t4', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['karşıtlık'],
    q: 'A chatbot may sound confident and well informed, ----.',
    options: [
      'and this is why its answers can be trusted without checking',
      'but fluency is no guarantee that what it says is accurate',
      'yet this confidence shows that it has checked all its sources',
      'whereas human experts tend to sound confident as well',
      'since it rarely produces answers that sound fluent',
    ], answer: 1,
    explain: "'May sound' (… gibi görünebilir) bir kabulle başlıyor ve ardından bir karşıtlık bekletiyor: kendinden emin görünmek, söylenenin doğru olduğunu güvenceye almaz. 'Yet' ile kurulan seçenek de karşıtlık bağlacı taşıyor ama ardından gelen söz (kendinden eminliğin kaynakları denetlediğini göstermesi) bir karşıtlık değil, ilk bölümü onaylayan bir sonuçtur. Cevaplara denetlemeden güvenilebileceği sonucu bu yüzden ters. 'Whereas' iki farklı şeyi karşılaştırır, oysa seçenek 'as well' ile benzerlik kuruyor. Robotun akıcı cevap vermediğini söyleyen seçenek de ana cümleyle çelişiyor." },

  // ---------- çeviri ----------
  { id: 'gt-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['automate'],
    level: 'orta', cefr: 'B2', konu: ['edilgen'],
    q: 'Many routine tasks in banks and offices have already been automated, and more are expected to follow in the coming years.',
    options: [
      'Bankalarda ve bürolardaki rutin işlerin pek azı şimdiden otomatikleştirildi; önümüzdeki aylarda daha fazlasının da bunu izlemesi bekleniyor.',
      'Bankalarda ve bürolardaki birçok rutin iş henüz otomatikleştirilmedi; önümüzdeki yıllarda bunun değişmesi bekleniyor.',
      'Bankalarda ve bürolardaki birçok rutin iş şimdiden otomatikleştirildi; önümüzdeki aylarda daha fazlasının da bunu izlemesi bekleniyor.',
      'Bankalarda ve bürolardaki birçok rutin iş şimdiden otomatikleştirildi; önümüzdeki aylarda daha fazlasının da bunu izleyeceği kesin.',
      'Bankalarda ve bürolardaki birçok rutin iş şimdiden otomatikleştirildi; önümüzdeki yıllarda daha fazlasının da bunu izlemesi bekleniyor.',
    ], answer: 4,
    explain: "Cümle edilgen yapılarla kurulmuş: 'have already been automated' (şimdiden otomatikleştirildi) ve 'are expected' (bekleniyor). 'Many' 'birçok' demektir; 'more are expected to follow in the coming years' de önümüzdeki yıllarda daha fazlasının bunu izlemesinin beklendiğini söyler. Doğru çeviri hepsini korur. 'In the coming years' önümüzdeki yıllardır; 'önümüzdeki aylarda daha fazlasının da bunu izlemesi bekleniyor' zamanı daraltıyor. 'Bunu izleyeceği kesin' diyen çeviri beklentiyi kesinliğe çeviriyor ve zamanı aylara indiriyor. 'Rutin işlerin pek azı' diye başlayan çeviri 'many'yi tersine çeviriyor, zamanı da aylara çekiyor. 'Henüz otomatikleştirilmedi' yılları koruyor ama olmuş bir işi olumsuza çeviriyor." },

  { id: 'gt-c2', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['koşul'],
    q: 'Had the engineers tested the system on a wider range of voices, they might have noticed the problem before it reached customers.',
    options: [
      'Mühendisler sistemi daha uzun süre denedikleri için sorunu müşterilere ulaşmadan önce fark edebildiler.',
      'Mühendisler sistemi daha çeşitli seslerle denemiş olsalardı, sorunu müşterilere ulaşmadan önce fark edebilirlerdi.',
      'Mühendisler sistemi daha uzun süre denemiş olsalardı, sorunu müşterilere ulaşmadan önce kesinlikle fark ederlerdi.',
      'Mühendisler sistemi daha çeşitli seslerle denemiş olsalardı bile, sorunu müşterilere ulaşmadan önce fark edemeyebilirlerdi.',
      'Mühendisler sistemi daha uzun süre denemiş olsalardı, sorunu müşterilere ulaşmadan önce fark edebilirlerdi.',
    ], answer: 1,
    explain: "'Had the engineers tested …' devrik bir üçüncü tip koşuldur: 'If the engineers had tested …' demektir ve gerçekleşmemiş bir geçmişi anlatır. 'Might have noticed' bir olasılık bildirir, kesinlik değil; 'on a wider range of voices' de 'daha çeşitli seslerle' demektir. Doğru çeviri bunların hepsini korur. 'Daha uzun süre denemiş olsalardı … fark edebilirlerdi' denemenin kapsamını süreye çeviriyor. 'Kesinlikle fark ederlerdi' diyen çeviri olasılığı kesinliğe dönüştürüyor ve denemeyi uzun süreli bir deneme yapıyor. 'Denedikleri için … fark edebildiler' koşulu gerçekleşmiş bir nedene çeviriyor, deneme de süre üzerinden anlatılıyor. 'Olsalardı bile … fark edemeyebilirlerdi' çeşitli sesleri koruyor ama 'bile' ekleyip anlamı tersine çeviriyor." },

  { id: 'gt-c3', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'Hasta kayıtlarını inceleyen yazılım, doktorların gözden kaçırdığı bazı ince belirtileri yakalayabiliyor.',
    options: [
      'The software that examines patient records can catch most of the subtle signs doctors have missed.',
      'The software that examines patient records has missed some subtle signs doctors can catch.',
      'The software that examines patient records can catch most of the obvious signs doctors have missed.',
      'The software that examines patient records can catch some obvious signs doctors have missed.',
      'The software that examines patient records can catch some subtle signs doctors have missed.',
    ], answer: 4,
    explain: "Türkçe cümle sıfat cümlecikleriyle kurulmuş: 'hasta kayıtlarını inceleyen yazılım' (the software that examines patient records) ve 'doktorların gözden kaçırdığı belirtiler' (signs doctors have missed). 'Bazı' 'some', 'ince' 'subtle', 'yakalayabiliyor' 'can catch' ile karşılanır; doğru seçenek bunların hepsini korur. 'Most of the subtle signs' (ince belirtilerin çoğu) 'bazı'yı genişletiyor. 'Some obvious signs' diyen çeviri ince belirtileri belirgin belirtilere çeviriyor. 'Most of the obvious signs' oranı da belirtinin niteliğini de değiştiriyor. 'Has missed some subtle signs doctors can catch' yakalayanla kaçıranı yer değiştiriyor." },

  { id: 'gt-c4', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['zaman'],
    q: 'Annem bu telefonu üç yıldır kullanıyor ve şimdiye kadar hiç sorun yaşamadı.',
    options: [
      "My mother used this phone for three years and didn't have any serious problems with it.",
      "My mother has been using this phone for three years and hasn't had any problems so far.",
      'My mother has been using this phone for three years, but it has often given her problems.',
      "My mother has been using this phone for three years and hasn't had any serious problems so far.",
      "My mother has been using this phone for three months and hasn't had any serious problems so far.",
    ], answer: 1,
    explain: "'Üç yıldır kullanıyor' geçmişte başlayıp hâlâ süren bir eylemdir; İngilizcede 'has been using … for three years' ile verilir. 'Şimdiye kadar hiç sorun yaşamadı' da bugüne uzanan bir durumdur: 'hasn't had any problems so far'. Doğru seçenek bunları korur. 'For three years and hasn't had any serious problems' 'hiç sorun'u daraltıyor: küçük sorunlar yaşanmış olabilir. 'For three months' diyen çeviri süreyi aya indiriyor ve sorunları 'serious' ile sınırlıyor. 'My mother used this phone' diye past simple ile başlayan çeviri kullanımı geçmişte bitmiş gösteriyor, sorunları da ciddi olanlarla sınırlıyor. 'It has often given her problems' süreyi koruyor ama sorunsuzluğu tersine çeviriyor." },

  // ---------- okuma parçası 1 (4 soru, YDS biçimi) ----------
  { id: 'gt-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['computation', 'indistinguishable'],
    level: 'orta', cefr: 'B2', title: "1950'de yayımlanan bir makale",
    text: "In 1950 the British mathematician Alan Turing, who had already done important work on the theory of computation, published a paper called 'Computing Machinery and Intelligence' in the journal Mind. It opens with a question that sounds simple: can machines think? Turing soon set it aside. Words such as 'machine' and 'think', he argued, are used so loosely in everyday speech that any answer would depend on how they happened to be defined. In its place he proposed a game. An interrogator exchanges typed messages with two hidden players, one human and one machine, and tries to work out which is which. Since everything is done in writing, neither a voice nor a face can give a player away. If the machine's answers are indistinguishable from the person's, Turing suggested, we would have little reason to deny it some form of intelligence. He called this the 'imitation game'. He also made a cautious forecast: within about fifty years, he believed, computers would play the game well enough that an average interrogator, after five minutes of questioning, would have no more than a 70 per cent chance of identifying the machine correctly. The paper is still widely read today, but less for this forecast than for the way it changes the subject. Instead of asking what goes on inside a machine, Turing asked what can be observed from outside: the answers it gives.",
    steps: [
      { konu: ['ayrıntı'],
        q: "According to the passage, Turing set aside the question 'Can machines think?' because ----.",
        options: [
          'its key terms could be defined in too many different ways',
          'he was certain that no machine would ever be able to think',
          'the editors of the journal asked him to change the subject',
          'it had already been answered in his earlier work on computation',
          'most of his readers in 1950 found the question too technical',
        ], answer: 0,
        explain: "Parçaya göre Turing soruyu bir kenara koydu, çünkü 'makine' ve 'düşünmek' sözcükleri gündelik dilde öyle gevşek kullanılıyor ki her cevap bunların nasıl tanımlandığına bağlı olurdu. Doğru seçenek bunu 'anahtar terimler pek çok farklı biçimde tanımlanabilir' diye anlatıyor. Turing'in hiçbir makinenin düşünemeyeceğinden emin olduğu parçada yok; tersine, makineye bir tür zekâ tanımayı reddetmek için az neden kalabileceğini söylüyor. Dergi editörlerinin isteği ve okurların soruyu fazla teknik bulması parçada geçmiyor. Önceki çalışması hesaplama kuramıyla anılıyor ama sorunun orada cevaplandığı söylenmiyor." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that in the imitation game ----.',
        options: [
          'the interrogator is allowed to meet both players after five minutes',
          'the human player tries to persuade the judge that he is a machine',
          'the machine wins only if it answers every single question correctly',
          'the interrogator is told well in advance which player is the machine',
          'a machine would not need to look or sound human in order to do well',
        ], answer: 4,
        explain: "Parçaya göre oyunda her şey yazıyla yapılıyor; ses ya da yüz bir oyuncuyu ele veremiyor. Buradan bir makinenin oyunda başarılı olmak için insan gibi görünmesi ya da konuşması gerekmediği çıkar. Beş dakikadan sonra oyuncularla yüz yüze görüşme parçada yok; beş dakika yalnız Turing'in öngörüsünde geçiyor. İnsan oyuncunun kendini makine gibi göstermeye çalıştığı ve makinenin her soruyu doğru cevaplaması gerektiği de söylenmiyor. Sorgucuya makinenin hangisi olduğunun önceden söylenmesi ise oyunun amacıyla çelişiyor." },
      { konu: ['sözcük anlamı'],
        q: "The word 'loosely' in the passage is closest in meaning to ----.",
        options: ['rarely', 'quietly', 'formally', 'imprecisely', 'correctly'], answer: 3,
        explain: "'Loosely' burada 'gevşek biçimde, kesin olmayarak' demektir: sözcükler gündelik dilde belirsiz anlamlarla kullanılıyor, bu yüzden her cevap tanıma bağlı kalıyor. Anlamca en yakın sözcük 'imprecisely' (kesinlikten uzak biçimde). 'Formally' (resmî biçimde) ve 'correctly' (doğru biçimde) anlamın tersine yakındır. 'Rarely' (seyrek) sıklık, 'quietly' (sessizce) ses bildirir; tanımların belirsizliğini anlatmaz." },
      { konu: ['ana fikir'],
        q: 'The passage is mainly concerned with ----.',
        options: [
          "the reasons why Turing's forecast about computers proved wrong",
          'the earliest computers that were built in Britain after the Second World War',
          "the objections that critics raised against Turing's imitation game",
          'how Turing swapped a vague question for a practical, observable test',
          'the part that the journal Mind played in the early history of computer science',
        ], answer: 3,
        explain: "Parça Turing'in 'Makineler düşünebilir mi?' sorusunu belirsiz bulup yerine dışarıdan gözlenebilen cevaplara dayanan bir oyun koymasını anlatıyor; sonunda da makalenin asıl değerinin bu bakış değişikliği olduğunu söylüyor. Ana fikir budur. Öngörünün yanlış çıktığı parçada söylenmiyor. İlk İngiliz bilgisayarları ve Mind dergisinin bilgisayar bilimindeki rolü anlatılmıyor. Eleştirmenlerin itirazları da parçada yer almıyor." },
    ] },

  // ---------- okuma parçası 2 (4 soru, YDS biçimi) ----------
  { id: 'gt-o2', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['simulate'],
    level: 'zor', cefr: 'C1', title: 'Odadaki adam',
    text: "In 1980 the American philosopher John Searle described a thought experiment that is still argued over. Imagine, he said, a man who knows no Chinese at all, locked in a room with a thick rule book written in English. Through a slot in the door, people pass him slips of paper covered in Chinese characters. The rules do not explain what any character means; they only tell him which shapes to send back in response to which other shapes. By following them carefully, he puts together strings of characters and pushes them out through the slot. To the Chinese speakers outside, the replies seem sensible, even thoughtful, and they may well assume that someone inside understands their questions. Yet the man understands nothing; he is simply matching symbols. A computer running a program, Searle argued, is in the same position: it handles symbols according to rules without grasping what they mean. A program might therefore simulate understanding perfectly and still understand nothing. The argument has drawn many replies. Some critics accept that the man does not understand Chinese but suggest that the whole system, man and rule book together, might. Others argue that real understanding would require a machine to be linked to the world through senses and movement. Searle answered each of these in turn, and decades later neither side has won the other over. Whatever one concludes, the thought experiment makes one thing hard to deny: sensible answers alone cannot settle whether anything lies behind them.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'It is stated in the passage that the rule book given to the man ----.',
        options: [
          'explains the meaning of each Chinese character in simple English',
          'was written in Chinese so that he could practise the language',
          'tells him which questions the people outside are likely to ask',
          'helps him to learn enough Chinese to manage without it later',
          'pairs certain shapes with others without saying what they mean',
        ], answer: 4,
        explain: "Parçaya göre kurallar hiçbir karakterin ne anlama geldiğini açıklamıyor; yalnız hangi şekillere karşılık hangi şekillerin geri gönderileceğini söylüyor. Doğru seçenek bunu 'şekilleri anlamlarını söylemeden başka şekillerle eşleştiriyor' diye anlatıyor. Karakterlerin anlamını açıkladığı parçanın söylediğinin tersidir. Kitap İngilizce yazılmış, Çince değil. Dışarıdakilerin hangi soruları soracağını söylediği parçada yok. Adamın kitap sayesinde Çince öğrendiği de söylenmiyor; tersine, hiçbir şey anlamadığı vurgulanıyor." },
      { konu: ['gönderim'],
        q: "In the passage, the word 'these' in 'Searle answered each of these in turn' refers to ----.",
        options: ["the critics' replies", 'the Chinese speakers', 'the slips of paper', "the man's answers", 'the senses and movement'], answer: 0,
        explain: "'Searle answered each of these in turn' cümlesinden önce parça argümanın pek çok cevap aldığını söylüyor ve iki eleştiriyi sıralıyor: bütün sistemin anlayabileceği ve anlamanın duyu ve hareketle dünyaya bağlanmayı gerektirdiği. Searle'ün tek tek cevapladığı şeyler bu eleştirilerdir. Adamın odadan gönderdiği cevaplar da parçada 'replies' diye geçiyor ama onlar çok önceki cümlelerde ve Searle onlara cevap vermez. Çince konuşanlar ve kâğıt parçaları cevaplanacak şeyler değildir. Duyu ve hareket ise bir eleştirinin içeriğidir, cevaplanan eleştirilerin kendisi değil." },
      { konu: ['yazarın tutumu'],
        q: "The author's attitude towards Searle's thought experiment can best be described as ----.",
        options: [
          'dismissive, as it rests on a situation that could never really occur',
          'balanced, as the debate is open but its main point is hard to deny',
          'enthusiastic, since it has finally proved that computers cannot think',
          'indifferent, because it has no bearing on how we judge machines',
          'hostile, since the replies from critics have clearly defeated it',
        ], answer: 1,
        explain: "Yazar tartışmanın sürdüğünü, onlarca yıl sonra iki tarafın da ötekini ikna edemediğini söylüyor. Ama sonunda, ne sonuca varılırsa varılsın, düşünce deneyinin bir şeyi inkâr edilmesi zor kıldığını ekliyor: tek başına anlamlı cevaplar ardında bir şey olup olmadığını belirlemez. Bu dengeli bir tutumdur. Bilgisayarların düşünemeyeceğinin kesin kanıtlandığını söylemiyor; tartışmayı açık bırakıyor. Eleştirilerin deneyi çürüttüğünü de söylemiyor. Deneyin makineleri değerlendirmemizle ilgisiz olduğu da parçanın vardığı sonuçla çelişiyor. Gerçekleşemeyecek bir duruma dayandığı ise parçada geçmiyor." },
      { konu: ['çıkarım'],
        q: 'Based on the passage, Searle would most probably agree that ----.',
        options: [
          'a large enough rule book would eventually teach the man Chinese',
          'the Chinese speakers outside are wrong about their own language',
          'a machine could hold a fluent conversation without knowing what it says',
          'linking a computer to the world through senses would solve the problem',
          'computers will never be able to give sensible replies in Chinese',
        ], answer: 2,
        explain: "Searle'e göre bir program anlamayı kusursuzca taklit edip yine de hiçbir şey anlamayabilir; odadaki adam da anlamlı cevaplar üretip Çince bilmiyor. Buradan Searle'ün, bir makinenin ne söylediğini bilmeden akıcı bir konuşma sürdürebileceğini kabul edeceği çıkar. Kural kitabının sonunda adama Çince öğreteceği onun düşüncesinin tersidir. Dışarıdakilerin kendi dilleri hakkında yanıldığı söylenmiyor; yanıldıkları şey odada anlayan biri olup olmadığıdır. Duyularla dünyaya bağlanmanın sorunu çözeceği eleştirmenlerin görüşüdür ve Searle buna da cevap vermiştir. Bilgisayarların hiç anlamlı cevap veremeyeceği de deneyle çelişiyor; cevaplar anlamlı görünüyor." },
    ] },

  // ---------- diyalog ----------
  { id: 'gt-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['instantly'],
    level: 'kolay', cefr: 'B1', konu: ['bağlam'],
    q: "Ece: You look fed up. What's the matter?\nMert: I've just lost to the chess app on my phone again. It responds to every move instantly, as if it isn't even thinking.\nEce: ----\nMert: I tried that, but the easy level is boring. It gives away its pieces for nothing.",
    options: [
      'Who taught you to play chess so well?',
      'You should charge your phone more often.',
      'Is it the same app that your sister uses?',
      "Why don't you choose an easier level?",
      "Let's go for a walk instead; it's sunny.",
    ], answer: 3,
    explain: "Mert'in son sözü ('Denedim ama kolay seviye sıkıcı') bir öneriye verilmiş cevap: Ece ona daha kolay bir seviye seçmesini önermiş olmalı. 'Neden daha kolay bir seviye seçmiyorsun?' bu cevabı karşılar. Ona satrancı bu kadar iyi kimin öğrettiğini sormak, oyunu kaybettiği için durumla çelişir. Telefonu daha sık şarj etmek ve yürüyüşe çıkmak da öneri ama Mert'in kolay seviyeden söz eden cevabına bağlanmaz. Kız kardeşinin aynı uygulamayı kullanıp kullanmadığı sorusuna da 'denedim' denmez." },

  { id: 'gt-d2', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['soru-cevap uyumu'],
    q: "Student: Mr Demir, could I ask you something about the history essay?\nTeacher: Of course. What is it?\nStudent: ----\nTeacher: Only for limited things, like checking your spelling or getting ideas for a plan. The arguments and the actual writing have to be your own.\nStudent: That sounds fair. I'll keep a note of how I use it, then.",
    options: [
      'Could I hand it in a couple of days after the deadline?',
      'How many words does the essay need to be this time?',
      'Have you ever marked an essay written by a chatbot?',
      'Are we allowed to use a chatbot while writing it?',
      'Which period of history should the essay focus on?',
    ], answer: 3,
    explain: "Öğretmen 'Yalnız sınırlı işler için' diyor ve yazım denetimi ile plan fikri bulmayı sayıyor; savların ve yazının öğrencinin kendisine ait olması gerektiğini ekliyor. Öğrenci de onu nasıl kullandığını not edeceğini söylüyor. Bu cevaplar, ödevi yazarken sohbet robotu kullanılıp kullanılamayacağını soran soruya uyar. Öğretmenin sohbet robotunun yazdığı bir ödevi hiç değerlendirip değerlendirmediği sorusu da robotla ilgili ama 'yalnız sınırlı işler için' cevabıyla karşılanmaz. Ödevi geç teslim etme, ödevin uzunluğu ve kapsayacağı dönem soruları da öğretmenin saydığı kullanım alanlarına bağlanmıyor." },

  { id: 'gt-d3', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['eerily'],
    level: 'orta', cefr: 'B2', konu: ['bağlam'],
    q: "Selin: I rang the bank's helpline this morning, and I still can't tell whether I spoke to a person or a machine.\nOkan: Really? What made you suspicious?\nSelin: ----\nOkan: That's usually a sign of a machine. A real adviser would rephrase it now and then.",
    options: [
      'The voice was eerily calm, and it repeated my question word for word.',
      'The adviser asked about my weekend and then laughed at one of my jokes.',
      'I had to wait for nearly half an hour before anyone answered.',
      'The line was so bad that I could hardly hear a word the adviser said.',
      'She told me her name and said that she had worked at the bank for years.',
    ], answer: 0,
    explain: "Okan'ın cevabı ('Bu genelde makine işaretidir. Gerçek bir temsilci arada bir başka sözcüklerle söylerdi.') Selin'in, karşısındakinin bir şeyi hep aynı biçimde söylediğini anlatmış olmasını gerektiriyor. Sesin tekinsiz biçimde sakin olduğunu ve sorusunu kelimesi kelimesine tekrarladığını söyleyen cümle buna uyar. Hafta sonunu sorup şakaya gülen ya da adını söyleyip yıllardır bankada çalıştığını anlatan biri insan izlenimi verir; Okan'ın 'makine işareti' sözüyle çelişir. Uzun bekleme ve kötü hat da Okan'ın 'başka sözcüklerle söylerdi' açıklamasına bağlanmıyor." },

  // ---------- anlamca en yakın cümle ----------
  { id: 'gt-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: ['convincing'],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: "No other program at the competition answered the judges' questions as convincingly as Lexa did.",
    options: [
      'Lexa was one of several programs that answered the judges equally convincingly.',
      "Lexa's answers seemed less convincing to the judges than the other programs' did.",
      'Most of the other programs in the contest convinced the judges more than Lexa.',
      'None of the programs in the contest, Lexa included, managed to convince the judges.',
      'Lexa gave more convincing answers to the judges than any other program in the contest.',
    ], answer: 4,
    explain: "'No other … as convincingly as Lexa' (hiçbir program Lexa kadar inandırıcı değildi) Lexa'yı yarışmanın en inandırıcısı yapar. Aynı anlam 'more convincing … than any other program' ile de verilir. Lexa'nın birkaç programla eşit olduğunu söyleyen seçenek üstünlüğü eşitliğe çeviriyor. Lexa'nın öteki programlardan daha az inandırıcı bulunduğunu ya da çoğunun ondan daha inandırıcı olduğunu söyleyen seçenekler karşılaştırmayı tersine çeviriyor. Hiçbir programın, Lexa da dahil, jüriyi ikna edemediği de verilen cümlede yok." },

  { id: 'gt-y2', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['koşul'],
    q: 'Without its backup battery, the robot would have shut down halfway through the demonstration.',
    options: [
      'The robot shut down halfway through the demonstration because its backup battery failed.',
      'Even with its backup battery, the robot was likely to stop halfway through the show.',
      'The robot would have kept going to the end if it had been fitted with a backup battery.',
      'Thanks to its backup battery, the robot kept working until the demonstration was over.',
      'The backup battery was the reason the robot stopped working halfway through the show.',
    ], answer: 3,
    explain: "'Without … would have shut down' gerçekleşmemiş bir geçmişi anlatır: yedek pil olmasaydı robot gösterinin ortasında kapanacaktı. Demek ki pil vardı ve robot kapanmadı; doğru seçenek bunu 'yedek pili sayesinde gösteri bitene kadar çalıştı' diye veriyor. Robotun pil bozulduğu için kapandığını ya da pilin kapanmaya yol açtığını söyleyen seçenekler gerçekleşmemiş olanı gerçekleşmiş gösteriyor. Pil takılsaydı sonuna kadar çalışacağını söyleyen seçenek pilin olmadığını ima ederek anlamı tersine çeviriyor. Pile rağmen durmasının olası olduğu da verilen cümleyle çelişiyor." },

  // ---------- paragraf tamamlama ----------
  { id: 'gt-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['triumph'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: "In 2016 a program called AlphaGo, developed by the company DeepMind, played a five-game match of Go against Lee Sedol, one of the world's strongest players. ----. Several commentators at first took it for a mistake, since a strong human player would hardly ever consider such a move. Later in the game, however, it turned out to be part of a winning plan, and AlphaGo went on to take the match by four games to one, a triumph that surprised many in the field.",
    options: [
      'In the second game, it played move 37 in a spot where almost nobody expected a stone',
      'Go is played on a grid of lines with black and white stones, and each player tries to surround territory',
      'Many people around the world followed the match online as it was being played',
      'Before the match began, a number of experts expected the human player to win',
      'Computers had already done well at many other board games in earlier decades',
    ], answer: 0,
    explain: "Boşluktan sonraki cümle 'it' ile bir şeye gönderme yapıyor ve yorumcuların onu önce hata sandığını, çünkü güçlü bir insanın 'böyle bir hamleyi' neredeyse hiç düşünmeyeceğini söylüyor. Demek ki boşluk bir hamleyi tanıtmalı: AlphaGo ikinci oyunun 37. hamlesinde taşını neredeyse kimsenin beklemediği bir yere koydu. Go'nun kuralları, maçın dünyada izlenmesi, uzmanların maçtan önceki beklentisi ve bilgisayarların öteki oyunlardaki başarısı konuyla ilgili ama hiçbiri 'hata sanılan' ve 'kazanma planının parçası çıkan' bir hamleden söz etmiyor." },

  { id: 'gt-p2', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['gönderim'],
    q: "In 1966 Joseph Weizenbaum, a computer scientist at MIT, described a program called ELIZA. In its best-known version, it played the part of a psychotherapist, mostly by turning the user's own statements back into questions: someone who typed 'I feel tired' might be asked why they felt tired. ----. Weizenbaum later wrote that their reaction had disturbed him, and in a book he questioned how far computers should be trusted with matters that call for human judgement.",
    options: [
      'Even so, some users grew attached to it and told it about their private feelings',
      'The program kept no memory of earlier chats and understood none of the words it handled',
      'His colleagues at MIT were working on very different problems at the time',
      'The role of a therapist was chosen because it let the program say very little of its own',
      'Versions of the program were later written in several other programming languages',
    ], answer: 0,
    explain: "Boşluktan sonraki cümle 'their reaction' (onların tepkisi) diyor ve Weizenbaum'un sonradan bundan rahatsız olduğunu yazdığını ve bir kitapta bilgisayarlara insan yargısı gerektiren işlerde ne kadar güvenilmesi gerektiğini sorguladığını söylüyor. Demek ki boşluktaki cümle bir tepki gösteren insanlardan söz etmeli: basit yapısına karşın bazı kullanıcılar programa bağlandı ve ona kişisel duygularını anlattı. Programın belleği olmaması, terapist rolünün seçilme nedeni ve başka dillerde yazılması insanları ve bir tepkiyi anlatmaz. MIT'deki meslektaşlar insandır ama cümle onların bir tepkisinden söz etmiyor; ayrıca kitabın konusu olan güven sorununa bağlanmıyor." },

  // ---------- akışı bozan cümle ----------
  { id: 'gt-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['rival'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'In 1996 the world chess champion Garry Kasparov played a match against Deep Blue, a computer built by IBM, and won.',
      "Even so, the machine had shown that it could be a serious rival to him, and IBM's engineers set about making it stronger.",
      'Chess clubs in many countries now use computers to help young players study the mistakes they make in their games.',
      'A year later, an improved Deep Blue faced Kasparov again in a six-game match and this time defeated him.',
      'For many people, the result seemed to mark the moment a machine had outplayed a human champion at a game long linked with intelligence.',
    ], answer: 2,
    explain: "Parça Deep Blue ile Kasparov arasındaki iki maçı sırayla anlatıyor: 1996'da Kasparov'un kazanması (I), makinenin yine de ciddi bir rakip olabileceğini göstermesi ve IBM mühendislerinin onu güçlendirmeye koyulması (II), bir yıl sonra geliştirilmiş Deep Blue'nun kazanması (IV) ve bu sonucun pek çok kişi için taşıdığı anlam (V). III. cümle de satranç ve bilgisayardan söz ediyor ama konuyu bugün kulüplerde gençlerin çalışmasına kaydırıyor. IV'teki 'A year later' (bir yıl sonra) I'deki 1996'ya dayanıyor; III araya girince bu zaman bağı kopuyor." },

  { id: 'gt-b2', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['algorithm'],
    level: 'kolay', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Early pocket calculators could do only one kind of job: they worked out sums when someone pressed the right keys.',
      'They were fast and accurate, but they never had to decide anything for themselves.',
      'A chess program faces a very different task, because it must choose one move from many possible ones without being told which to play.',
      'Many people still keep an old calculator in a drawer, even though their phones can now do the same job.',
      'To make that choice, it follows an algorithm that compares the likely results of each move and picks the most promising one.',
    ], answer: 3,
    explain: "Parça hesap makinesiyle satranç programını karşılaştırıyor: hesap makinesi yalnız tuşlara basılınca hesap yapar (I) ve hiçbir karar vermez (II); satranç programı ise pek çok hamleden birini kendisi seçmek zorundadır (III) ve bu seçimi bir algoritmayla yapar (V). V'teki 'that choice' (bu seçim) ve 'it' III'teki satranç programına dayanıyor. IV. cümle hesap makinelerinden söz ediyor ama konuyu insanların eski hesap makinelerini çekmecede saklamasına kaydırıyor; karşılaştırmanın akışını kesiyor." },
];

export default { id: 'genel-turing', course: C, title: U, order: 10, cards, items };
