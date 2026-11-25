// iDil › Genel › Kuşların göçü.
// Tümü özgün: Claude yazdı (13 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (çoğaltma planı §4.3 ve yerleşik bilgi; yalnız olgular, metin özgün):
// - Aristoteles'in kışın saklanıp uyuyan ya da başka türe dönüşen kuşlar üzerine yazdıkları;
// - 1822'de Klütz (Mecklenburg) yakınında vurulan, boynunda Orta Afrika'dan gelme bir mızrak taşıyan ak leylek (Pfeilstorch)
//   ve sonradan bulunan öteki "oklu leylekler";
// - kıyı çulluğunun (bar-tailed godwit) Alaska'dan Yeni Zelanda'ya durmadan uçuşu; kutup sumrusunun iki kutup bölgesi arasındaki
//   yıllık göçünün bacağa takılan küçük cihazlarla baştan sona izlenmesi (Egevang ve ark. 2010);
// - yön bulma: güneş ve iç saat, yıldızlar (Emlen'in 1960'lardaki planetaryum deneyleri, çivit kirazkuşu), manyetik alan
//   (işleyişi tartışmalı), yer şekilleri, kimi deniz kuşlarında koku;
// - gece göç eden ötücüleri kent ışıklarının şaşırtması; göç öncesi yağ depolama; mola yerlerine bağımlılık;
// - süzülen kuşların sıcak hava akımlarını kullanması, uzun deniz geçişlerinden kaçınıp İstanbul Boğazı ve Belen Geçidi gibi
//   darboğazlarda toplanması; ilkbaharın erkene kaymasıyla kimi türlerin Afrika'dan daha erken dönmesi (temkinli);
// - guguk kuşunun yavrusunu başka türlere büyütmesi ve yavruların yetişkinlerden haftalar sonra tek başına göç etmesi.
// Görev 20 (25 Kasım 2026): çeviri çeldiricileri biçim kestirmesine karşı yeniden kuruldu.

const T = 'taslak';
const C = 'genel';
const U = 'Kuşların göçü';

const cards = [
  { code: 'build up', title: 'biriktirmek; birikmek, yoğunlaşmak', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌbɪld ˈʌp/',
    text: "Geçişli kullanılınca bir şeyi yavaş yavaş biriktirmektir: build up savings, build up strength. Geçişsiz kullanılınca birikmek, yoğunlaşmak demektir: traffic builds up. Adı 'build-up' (birikme, artış).",
    example: 'Tension had been building up between the two neighbours for months.',
    exampleTr: 'İki komşu arasındaki gerginlik aylardır birikiyordu.',
    synonyms: ['accumulate', 'store up'], family: ['build-up'] },
  { code: 'navigate', title: 'yolunu bulmak, yön bulmak; (araç) yönetmek', pos: 'fiil', cefr: 'B2', ipa: '/ˈnævɪɡeɪt/',
    text: "Hem bir yerde yolunu bulmak (navigate a city) hem de bir gemiyi ya da uçağı belli bir yöne götürmek anlamında kullanılır. Adı 'navigation': satellite navigation (uydu ile yön bulma).",
    example: 'It took us a while to navigate the narrow streets of the old town.',
    exampleTr: 'Eski kentin dar sokaklarında yolumuzu bulmamız biraz zaman aldı.',
    synonyms: ['find your way', 'steer'], family: ['navigation', 'navigator'] },
  { code: 'endurance', title: 'dayanıklılık, dayanma gücü', pos: 'isim', cefr: 'C1', ipa: '/ɪnˈdjʊərəns/',
    text: "Uzun süren bir zorluğa ya da yorgunluğa dayanabilme gücü. 'Endurance test' (dayanıklılık sınavı) öbeğinde sık geçer. Fiili 'endure' (katlanmak, dayanmak).",
    example: 'Climbing the mountain in a single day is a real test of endurance.',
    exampleTr: 'Dağa tek günde tırmanmak gerçek bir dayanıklılık sınavıdır.',
    synonyms: ['stamina'], family: ['endure', 'enduring'] },
  { code: 'remarkable', title: 'dikkat çekici, olağanüstü', pos: 'sıfat', cefr: 'B2', ipa: '/rɪˈmɑːkəbl/',
    text: "Şaşırtıcı ölçüde iyi ya da alışılmadık olanı anlatır. Zarfı 'remarkably' sıfatları güçlendirir: remarkably fast (şaşılacak kadar hızlı).",
    example: 'She made a remarkable recovery and was back at work within a month.',
    exampleTr: 'Olağanüstü bir iyileşme gösterdi ve bir ay içinde işine döndü.',
    synonyms: ['extraordinary', 'striking'], family: ['remarkably'] },
  { code: 'orient', title: 'yönünü belirlemek; (bir şeyi) bir yöne çevirmek', pos: 'fiil', cefr: 'C1', ipa: '/ˈɔːrient/',
    text: "Çoğu zaman dönüşlü kullanılır: orient yourself (nerede olduğunu, hangi yöne gideceğini kestirmek). İngiliz İngilizcesinde 'orientate' biçimi de yaygındır. Adı 'orientation'.",
    example: 'When I came out of the station, it took me a few seconds to orient myself.',
    exampleTr: 'İstasyondan çıkınca yönümü bulmam birkaç saniye sürdü.',
    synonyms: ['get your bearings'], family: ['orientation', 'orientate'] },
  { code: 'stopover', title: 'mola, ara konaklama (uzun yolculukta)', pos: 'isim', cefr: 'C1', ipa: '/ˈstɒpəʊvə(r)/',
    text: "Uzun bir yolculuğa verilen kısa ara. Göç metinlerinde kuşların dinlenip beslendiği yerlere 'stopover site' denir. Fiil olarak ayrı yazılır: stop over (yolda konaklamak).",
    example: 'On the way to Australia, we had a two-day stopover in Singapore.',
    exampleTr: "Avustralya yolunda Singapur'da iki gün mola verdik.",
    synonyms: ['break', 'layover'], family: ['stop over'] },
  { code: 'disorient', title: 'yönünü şaşırtmak, sersemletmek', pos: 'fiil', cefr: 'C1', ipa: '/dɪsˈɔːrient/',
    text: "Birini nerede olduğunu ya da ne yapacağını bilemez hâle getirmek. İngiliz İngilizcesinde 'disorientate' de denir. Sıfatı 'disoriented' (yönünü şaşırmış, sersem).",
    example: 'The thick fog disoriented the walkers, and they wandered off the path.',
    exampleTr: 'Yoğun sis yürüyüşçülerin yönünü şaşırttı ve patikadan saptılar.',
    synonyms: ['confuse', 'bewilder'], family: ['disorientation', 'disoriented'] },
  { code: 'abundant', title: 'bol, bereketli', pos: 'sıfat', cefr: 'C1', ipa: '/əˈbʌndənt/',
    text: "Bol bulunan, ihtiyacı fazlasıyla karşılayan: abundant food, abundant evidence. Adı 'abundance': in abundance (bol bol). Karşıtı 'scarce' (kıt).",
    example: 'Wild strawberries are abundant in these woods in early summer.',
    exampleTr: 'Yaz başında bu ormanda yabani çilek bol olur.',
    synonyms: ['plentiful'], family: ['abundance', 'abundantly'] },
  { code: 'exhaust', title: 'çok yormak, bitkin düşürmek; tüketmek', pos: 'fiil', cefr: 'B2', ipa: '/ɪɡˈzɔːst/',
    text: "İki anlamı var: birini çok yormak (the walk exhausted me) ve bir kaynağı bitirmek (exhaust supplies). Sıfatları 'exhausted' (bitkin) ve 'exhausting' (yorucu); adı 'exhaustion'.",
    example: 'The long climb exhausted the children, so we stopped for a rest halfway up.',
    exampleTr: 'Uzun tırmanış çocukları çok yordu; bu yüzden yarı yolda mola verdik.',
    synonyms: ['wear out', 'tire out'], family: ['exhausted', 'exhausting', 'exhaustion'] },
  { code: 'invariably', title: 'her zaman, istisnasız', pos: 'zarf', cefr: 'C1', ipa: '/ɪnˈveəriəbli/',
    text: "'Always' ile yakın anlamlı ama daha resmî; bir şeyin hiç değişmeden hep aynı biçimde olduğunu vurgular. 'Almost invariably' (hemen hemen her zaman) öbeği sık geçer.",
    example: 'The bus is invariably late when it rains.',
    exampleTr: 'Yağmur yağınca otobüs her seferinde geç kalır.',
    synonyms: ['always', 'without exception'], family: ['invariable', 'vary'] },
  { code: 'bottleneck', title: 'darboğaz; sıkışma noktası', pos: 'isim', cefr: 'C1', ipa: '/ˈbɒtlnek/',
    text: "Akışın daraldığı ve yığılmanın olduğu yer ya da aşama: a traffic bottleneck. Mecazen bir süreci yavaşlatan engel için de kullanılır: a bottleneck in production.",
    example: 'The narrow bridge creates a bottleneck every morning at rush hour.',
    exampleTr: 'Dar köprü, her sabah işe gidiş saatinde trafiği tıkayan bir darboğaz oluyor.',
    synonyms: ['narrow point', 'hold-up'], family: [] },
  { code: 'seasonal', title: 'mevsimlik, mevsimsel', pos: 'sıfat', cefr: 'B2', ipa: '/ˈsiːzənl/',
    text: "Yılın belli bir döneminde olan ya da görülen: seasonal workers (mevsimlik işçiler), seasonal changes (mevsimsel değişiklikler). Adı 'season', zarfı 'seasonally'.",
    example: 'Many hotels on the coast take on seasonal staff for the summer.',
    exampleTr: 'Kıyıdaki birçok otel yaz için mevsimlik eleman alır.',
    synonyms: [], family: ['season', 'seasonally'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'gg-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['build up'],
    level: 'kolay', cefr: 'B2', konu: ['öbek fiil'],
    q: 'In the weeks before they leave, many migratory birds feed almost constantly in order to ---- the fat reserves that will power their long flights.',
    options: ['give off', 'use up', 'turn down', 'break down', 'build up'], answer: 4,
    explain: "'Build up' bir şeyi yavaş yavaş biriktirmek demektir: kuşlar, uzun uçuşlarında yakıt olarak kullanacakları yağ depolarını biriktirmek için neredeyse durmadan beslenir. 'Use up' (tüketip bitirmek) ve 'break down' (parçalamak) yağın uçuş sırasında harcanmasını anlatır; beslenmenin amacı olamaz. 'Give off' (yaymak, salmak) ve 'turn down' (geri çevirmek; kısmak) cümleye anlam vermez." },

  // ---------- dil bilgisi ----------
  { id: 'gg-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['disorient', 'exhaust'],
    level: 'orta', cefr: 'B2', konu: ['bağlantı zarfı'],
    q: 'Most songbirds migrate at night, and the bright lights of cities can easily disorient them; ----, large numbers of birds may circle lit buildings for hours until they are exhausted or crash into the glass.',
    options: ['nevertheless', 'otherwise', 'likewise', 'consequently', 'conversely'], answer: 3,
    explain: "Noktalı virgülden sonraki cümle öncekinin sonucunu veriyor: kent ışıkları gece göç eden kuşların yönünü şaşırtıyor, bu yüzden birçoğu bitkin düşene ya da cama çarpana dek aydınlık binaların çevresinde dönüp durabiliyor. Sonuç bildiren bağlantı zarfı 'consequently'dir. 'Nevertheless' (yine de) karşıtlık, 'likewise' (aynı biçimde) benzerlik, 'conversely' (tersine) zıtlık kurar; 'otherwise' (aksi hâlde) ise ilk cümle doğru olmasaydı ne olacağını anlatır. Bu ilişkilerin hiçbiri iki cümle arasında yok." },

  { id: 'gg-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['kip geçmiş (modal perfect)'],
    q: 'The young cuckoo was raised by a pair of reed warblers and set off for Africa weeks after the adult cuckoos had left, so it ---- the route by following its real parents.',
    options: ["can't have learnt", 'must have learnt', 'should have learnt', "needn't have learnt", 'might have learnt'], answer: 0,
    explain: "Kök, genç guguk kuşunu başka türden bir kuş çiftinin büyüttüğünü ve yavrunun, yetişkin guguk kuşları gittikten haftalar sonra yola çıktığını söylüyor. Bu yüzden yolu öz anne babasını izleyerek öğrenmiş olamaz: 'can't have learnt' geçmişe dair bir olanaksızlık çıkarımıdır. 'Must have learnt' kesinlik, 'might have learnt' olasılık bildirir; ikisi de kökteki bilgiyle çelişir. 'Should have learnt' yapılması gerekip yapılmayanı, 'needn't have learnt' gereksiz yere yapılanı anlatır; ikisi de 'so' ile kurulan çıkarıma uymaz." },

  { id: 'gg-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['eşleşik bağlaç'],
    q: '---- a bird is simply ringed ---- fitted with a small tracking device, researchers try to release it within minutes, since being held for too long can cause it considerable stress.',
    options: ['Both / and', 'Either / or', 'Neither / nor', 'Whether / or', 'Not only / but also'], answer: 3,
    explain: "Virgülden sonra bir ana cümle geliyor ('researchers try to release it within minutes'). Ona 'hangisi olursa olsun' diye bağlanan yan cümleyi 'whether … or' (ister … ister) kurar: kuşa ister yalnız halka takılsın ister küçük bir izleme aygıtı, araştırmacılar onu birkaç dakika içinde salmaya çalışır. 'Either … or' (ya … ya da) kendi başına bir yargı kurar; bir ana cümleye virgülle böyle bağlanmaz. 'Neither … nor' da bağımsız bir yargıdır; üstelik 'ikisi de değil' der ve kuşun tutulup salındığı bilgisiyle çelişir. 'Not only' cümle başında devrik sıra ister ('Not only is a bird …'); burada sıra düz. 'Both … and' da yan cümle kurmaz ve ana cümleye bağlanamaz." },

  // ---------- boşluklu metin (5 boşluk) ----------
  { id: 'gg-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: ['seasonal', 'remarkable'],
    level: 'orta', cefr: 'B2', title: 'Boynunda mızrakla dönen leylek',
    text: "For centuries, the seasonal disappearance of storks, swallows and many other birds puzzled people in Europe. (1) ---- any reliable information, people filled the gap with guesswork. Aristotle, for example, wrote that some birds hid away and slept through the cold months, while others changed into different species, and such ideas survived for a remarkably long time. Then, in 1822, a white stork was shot near Klütz, in northern Germany. A long spear was stuck through its neck, and the weapon was traced to central Africa. The unlucky bird thus offered some of the earliest solid (2) ---- that storks spend the winter in Africa. (3) ---- it had been badly wounded, the stork had managed to fly thousands of kilometres back to Europe. Its story (4) ---- help to change how scientists thought about migration. Over the following decades, more of these 'arrow storks' (5) ----, and the old idea that birds sleep through the winter was gradually abandoned.",
    steps: [
      { konu: ['edat'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['With the help of', 'In terms of', 'In the absence of', 'On behalf of', 'In the light of'], answer: 2,
        explain: "Cümle, kuşların kışın nereye gittiğine dair güvenilir bir bilgi olmadığını, insanların bu boşluğu tahminle doldurduğunu söylüyor: 'in the absence of' (… olmadığından, … yokluğunda). 'With the help of' (… yardımıyla) ve 'in the light of' (… ışığında) bilginin var olduğunu ve kullanıldığını söyler; bilgiye dayanan biri boşluğu tahminle doldurmaz, cümle kendisiyle çelişir. 'In terms of' (… bakımından) ve 'on behalf of' (… adına) cümleye anlam vermez." },
      { konu: ['kelime', 'isim'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['existence', 'reference', 'evidence', 'residence', 'insistence'], answer: 2,
        explain: "Mızrak Orta Afrika'dan geldiği için vurulan leylek, leyleklerin kışı Afrika'da geçirdiğine dair ilk sağlam kanıtlardan birini sundu: 'solid evidence that …' (… olduğuna dair sağlam kanıt). Öteki sözcükler biçimce benzer ama burada anlam kurmaz: existence (varlık), reference (gönderme, kaynak), residence (konut, oturma), insistence (ısrar)." },
      { konu: ['bağlaç'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['Although', 'Because', 'Unless', 'So that', 'As if'], answer: 0,
        explain: "Leylek ağır yaralıydı ama yine de binlerce kilometre uçup Avrupa'ya döndü: iki yargı arasında karşıtlık var, 'although' gerekir. 'Because' yaralanmayı uçuşun nedeni yapar; 'unless' (-mezse), 'so that' (-sın diye) ve 'as if' (-mış gibi) anlam kurmaz." },
      { konu: ['kip (modal)'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['must', 'would', 'should', 'need', 'may'], answer: 1,
        explain: "Anlatım 1822'de geçiyor; boşluklu cümle o günden sonra olacak bir şeyi söylüyor: leyleğin öyküsü, bilim insanlarının göç hakkındaki düşüncesini değiştirmeye yardım edecekti. Geçmişteki bir noktadan sonrasına bakarken 'would' kullanılır. 'Must', 'should' ve 'may' bugüne göre konuşur; geçmiş anlatıya ve 'thought' fiiline uymaz. 'Need' olumlu cümlede yardımcı fiil olarak kullanılmaz." },
      { konu: ['öbek fiil'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['gave up', 'took over', 'ran out', 'turned up', 'fell behind'], answer: 3,
        explain: "'Turn up' ortaya çıkmak, bulunmak demektir: sonraki on yıllarda başka 'oklu leylekler' de bulundu ve kuşların kışı uyuyarak geçirdiği düşüncesi yavaş yavaş bırakıldı. Gave up (vazgeçti), took over (devraldı), ran out (tükendi) ve fell behind (geride kaldı) bu özneyle ve cümlenin sonuyla anlam kurmaz." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'gg-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['endurance'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: '----, bar-tailed godwits are famous for their endurance: some fly from Alaska to New Zealand without stopping even once.',
    options: [
      'Because their long, slightly upturned bills are ideal for probing in soft mud',
      'Since they feed mainly on worms and small shellfish found in coastal mud',
      'Although they weigh no more than a few hundred grams when fully grown',
      'Even though they are known to be among the strongest fliers of all birds',
      'Once they reach New Zealand after their long flight across the Pacific',
    ], answer: 2,
    explain: "Ana cümle kıyı çulluklarının dayanıklılığını anlatıyor: bazıları Alaska'dan Yeni Zelanda'ya bir kez bile durmadan uçuyor. Şaşırtıcı olan, birkaç yüz gramlık bir kuşun böyle bir uçuş yapabilmesidir; karşıtlığı bu yan cümle kurar. 'Even though' ile başlayan seçenek karşıtlık bağlacı taşıyor ama içeriği ana cümleyi destekliyor: güçlü uçucu olmak dayanıklılığa ters düşmez. Gaga biçimi ve beslenme dayanıklılığın nedeni değil; Yeni Zelanda'ya vardıktan sonrasını anlatan zaman cümlesi de olayların sırasını bozuyor." },

  { id: 'gg-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['abundant'],
    level: 'orta', cefr: 'B2', konu: ['neden-sonuç'],
    q: 'Because the long days of the Arctic summer produce an abundant supply of insects for a few weeks, ----.',
    options: [
      'most birds that breed there leave the region as soon as the snow melts',
      'the region remains one of the coldest places on Earth for most of the year',
      'many birds travel far north each spring to raise their young there',
      'insects in the far north are active for only a short period each year',
      'few migratory birds are willing to make the long journey there',
    ], answer: 2,
    explain: "'Because' bir neden veriyor: Kuzey Kutbu yazının uzun günleri birkaç haftalığına bol böcek sağlıyor. Bunun sonucu, birçok kuşun yavrularını orada büyütmek için her ilkbahar kuzeye gitmesidir. Kuşların kar erir erimez bölgeyi terk etmesi ve pek az kuşun o yolculuğu göze alması bu nedenle çelişir. Bölgenin yılın büyük bölümünde çok soğuk olması doğru bir bilgi ama bol böceğin sonucu değil. Böceklerin kısa süre etkin olması ise nedeni başka sözlerle yineliyor, bir sonuç bildirmiyor." },

  // ---------- çeviri ----------
  { id: 'gg-c1', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edilgen'],
    q: 'Kutup sumrularının iki kutup bölgesi arasındaki yıllık göçü, bacaklarına takılan küçük cihazlar sayesinde baştan sona izlendi.',
    options: [
      'Thanks to small devices attached to their legs, the annual migration of Arctic terns between the polar regions was partly tracked.',
      'Thanks to small devices attached to their legs, the annual migration of Arctic terns between the polar regions will be tracked from start to finish.',
      'Thanks to small devices attached to their wings, the annual migration of Arctic terns between the polar regions will be tracked from start to finish.',
      'Thanks to small devices attached to their legs, the annual migration of Arctic terns between the polar regions will be partly tracked.',
      'Thanks to small devices attached to their legs, the annual migration of Arctic terns between the polar regions was tracked from start to finish.',
    ], answer: 4,
    explain: "Türkçe cümle edilgen ve geçmiş zamanda: göç, bacaklara takılan küçük cihazlar sayesinde baştan sona izlendi. Doğru seçenek bunu 'thanks to small devices attached to their legs', 'was tracked' ve 'from start to finish' ile verir. 'Will be tracked from start to finish' olmuş bir işi geleceğe taşıyor. 'Attached to their wings' diyen çeviri cihazları kanatlara takıyor ve izlemeyi geleceğe atıyor. 'Will be partly tracked' zamanı da kapsamı da değiştiriyor. 'Was partly tracked' zamanı doğru verdiği hâlde 'baştan sona'yı 'kısmen'e indiriyor: göçün tamamı değil, bir bölümü izlenmiş olur." },

  // ---------- okuma parçası (4 soru, YDS biçimi) ----------
  { id: 'gg-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['navigate', 'orient', 'remarkable'],
    level: 'orta', cefr: 'B2', title: 'Kuşlar yolunu nasıl bulur?',
    text: "Every autumn, vast numbers of birds set off on journeys of thousands of kilometres, and many return in spring to the very same wood or even the same nest. How they manage to navigate so accurately has puzzled scientists for a long time. Researchers once hoped to find a single answer, but it now seems that birds rely on several different cues. Many species that migrate by day use the position of the sun, correcting for its movement across the sky with the help of an internal clock. Birds that travel at night can orient themselves by the stars instead. In planetarium experiments carried out in the 1960s, indigo buntings, small North American songbirds, tried to fly in the direction indicated by the artificial night sky, and when the pattern of stars was rotated, they changed direction to match it. Birds also appear to sense the Earth's magnetic field, which may help them when the sky is covered by cloud, although exactly how they detect it is still debated. Closer to the end of the journey, many birds seem to rely on familiar landmarks such as coastlines, rivers and mountain ranges, and some seabirds are thought to find their colonies partly by smell. None of these cues is reliable all the time: the sun and stars disappear behind clouds, and landmarks are of little use over the open sea. Being able to switch from one cue to another may be what makes these journeys so remarkably precise.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, many birds that migrate by day ----.',
        options: [
          "depend mainly on the Earth's magnetic field, not on the sun",
          "use the sun's position and allow for its movement during the day",
          'can find their way only when the sky is completely clear',
          'learn the pattern of the stars before their first long journey',
          'follow coastlines and rivers for most of the way',
        ], answer: 1,
        explain: "Parçaya göre gündüz göç eden birçok tür güneşin konumunu kullanır ve bir iç saat yardımıyla güneşin gökyüzündeki hareketini hesaba katar ('correcting for its movement across the sky'). Manyetik alanın güneşten daha önemli olduğu söylenmiyor. Yalnız gökyüzü açıkken yön bulabildikleri de söylenmiyor; tersine, bulutlu havada manyetik alan yardımcı olabilir. Yıldız düzenini öğrenmek gündüz göç edenlerle ilgili değil. Kıyı ve ırmak gibi yer şekilleri yolun çoğunda değil, yolculuğun sonuna doğru öne çıkıyor." },
      { konu: ['ayrıntı'],
        q: 'It is stated in the passage that, in the planetarium experiments, indigo buntings ----.',
        options: [
          'flew towards the brightest star they could see in the artificial sky',
          'could not choose a direction until they were shown the real night sky',
          'shifted the direction they tried to fly in when the stars were rotated',
          "ignored the artificial stars and relied on the Earth's magnetic field",
          'were tested by day as well as at night so that the results could be compared',
        ], answer: 2,
        explain: "Parçaya göre planetaryumdaki yapay yıldızların düzeni döndürülünce çivit kirazkuşları da uçmaya çalıştıkları yönü ona göre değiştirdi ('they changed direction to match it'). En parlak yıldıza uçtukları ve gündüz de denendikleri parçada geçmiyor. Gerçek gökyüzünü görmeden yön seçemedikleri parçayla çelişiyor: yapay gökyüzüne göre yön seçtiler. Yapay yıldızları görmezden gelip manyetik alana güvendikleri de parçayla çelişiyor." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that, for a bird crossing the open sea on a cloudy night, ----.',
        options: [
          "a sense of the Earth's magnetic field would be especially useful",
          'coastlines and rivers below would offer the most reliable guidance',
          'the pattern of the stars would be the most helpful cue available',
          'finding and keeping the right direction would be completely impossible',
          'the smell of its home colony would be the only guide it could use',
        ], answer: 0,
        explain: "Parçaya göre güneş ve yıldızlar bulutların arkasında kaybolur, yer şekilleri açık denizde pek işe yaramaz; manyetik alan ise gökyüzü bulutluyken yardımcı olabilir. Bulutlu bir gecede denizi geçen kuş için güneş yok, yıldızlar görünmüyor, aşağıda kıyı ya da ırmak da yok; en çok işine yarayacak ipucu manyetik alan olur. Yön bulmanın tümden olanaksız olduğunu söylemek çok ileri gidiyor. Koku yalnız kimi deniz kuşlarında ve koloniyi bulmada kısmen rol oynuyor; tek rehber olamaz." },
      { konu: ['ana fikir'],
        q: 'The main idea of the passage is that ----.',
        options: [
          'a planetarium experiment proved that all migratory birds navigate by the stars',
          "scientists have now discovered exactly how birds sense the Earth's magnetic field",
          'birds that migrate at night find their way more accurately than those that fly by day',
          'landmarks are the most important cue for birds throughout their long journeys',
          'birds rely on several different cues, none of which works perfectly on its own',
        ], answer: 4,
        explain: "Parça, kuşların tek bir yolla değil birkaç ipucuyla (güneş, yıldızlar, manyetik alan, yer şekilleri, koku) yön bulduğunu ve bu ipuçlarının hiçbirinin her zaman güvenilir olmadığını anlatıyor; son cümle de bir ipucundan ötekine geçebilmenin önemini vurguluyor. Planetaryum deneyi tek bir türle yapıldı; 'bütün göçmen kuşlar' genellemesi parçada yok. Manyetik alanın nasıl algılandığı hâlâ tartışmalı. Gece ve gündüz göç edenlerin başarısı karşılaştırılmıyor. Yer şekilleri yolun tamamında değil, sonuna doğru öne çıkıyor." },
    ] },

  // ---------- diyalog tamamlama ----------
  { id: 'gg-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['invariably'],
    level: 'kolay', cefr: 'B2', konu: ['bağlam'],
    q: "Ece: Are you still coming to Çamlıca Hill on Saturday? The storks should be flying over the Bosphorus by then.\nDaniel: Yes, but I don't have any binoculars, and birds that high up invariably look like tiny dots to me.\nEce: ----\nDaniel: That's very kind of you. I'll take good care of them, I promise.",
    options: [
      "You won't need any, since most people simply watch them with the naked eye.",
      "In that case, you'd better buy a pair of your own before the weekend.",
      "Don't worry, they usually fly over in their thousands at this time of year.",
      "Don't worry about that. I've got an old pair that you can borrow.",
      "I'm afraid I've lost mine as well, so we'll have to share my camera.",
    ], answer: 3,
    explain: "Daniel'in son sözü ('Çok naziksin, onlara iyi bakacağım, söz veriyorum') Ece'nin ona bir şey ödünç verdiğini gösteriyor; 'them' de dürbünü (a pair of binoculars) karşılıyor. Bunu yalnız eski dürbününü ödünç verebileceğini söyleyen cevap karşılar. Dürbüne gerek olmadığını ya da kendine bir tane alması gerektiğini söyleyen cevaplar teşekküre uymaz. Leyleklerin binlercesinin geçtiğini söylemek Daniel'in kaygısına cevap vermiyor. Fotoğraf makinesini paylaşmayı öneren cevap da 'them' ile uyuşmuyor." },

  // ---------- anlamca en yakın cümle ----------
  { id: 'gg-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['neden-sonuç'],
    q: 'Because springs now arrive earlier in many parts of Europe, some migratory birds return from Africa sooner than they did a few decades ago.',
    options: [
      'Some migratory birds no longer fly to Africa at all because springs in many parts of Europe now begin earlier.',
      'Springs in many parts of Europe now begin earlier because some migratory birds return from Africa sooner than before.',
      'Earlier springs in many parts of Europe have led some migratory birds to return from Africa sooner than before.',
      'Although springs in many parts of Europe now begin earlier, migratory birds still return from Africa at the usual time.',
      'A few decades ago, some migratory birds returned from Africa sooner than they do today because springs began earlier.',
    ], answer: 2,
    explain: "Kök bir neden-sonuç ilişkisi kuruyor: Avrupa'nın birçok yerinde ilkbahar artık daha erken geldiği için kimi göçmen kuşlar Afrika'dan birkaç on yıl öncesine göre daha erken dönüyor. Doğru seçenek aynı ilişkiyi 'have led … to' ile, nedeni ve sonucu yerinde tutarak kurar. Yanlışlardan biri nedenle sonucu yer değiştiriyor: kuşların erken dönmesi ilkbaharı erkene alıyormuş gibi. Biri kuşların artık Afrika'ya hiç gitmediğini söylüyor; kökte bu yok. Biri kuşların hâlâ eski zamanda döndüğünü söylüyor; biri de durumu geçmişe taşıyıp tersine çeviriyor." },

  // ---------- paragraf tamamlama ----------
  { id: 'gg-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['abundant', 'stopover', 'seasonal'],
    level: 'orta', cefr: 'C1', konu: ['gönderim'],
    q: 'Only a few long-distance migrants can complete their journeys in a single flight. Most stop several times along the way at wetlands, estuaries and other places where food is abundant, and they may spend days or even weeks there regaining their strength. ----. This is why conservationists warn that protecting the areas where birds breed and spend the winter is not enough on its own.',
    options: [
      'If even one of these stopover sites is lost, many birds may not have the energy to finish the journey',
      'Some species, by contrast, find enough food in their breeding areas to stay there all year round',
      'Many of these places lie along coasts, where seasonal changes in temperature are fairly mild',
      'Some of these birds return to exactly the same breeding area every year, often to the same nest',
      'Rings and, more recently, satellite transmitters have been used to follow birds on these journeys',
    ], answer: 0,
    explain: "Boşluktan sonraki cümle 'This is why' ile bir sonuca bağlanıyor: koruma uzmanlarına göre kuşların üredikleri ve kışladıkları yerleri korumak tek başına yetmez. 'This' boşluktaki cümlenin söylediğini göstermeli ve bu sonucun gerekçesi olmalı: mola yerlerinden biri bile yok olursa birçok kuşun yolculuğu tamamlayacak gücü kalmayabilir. Kıyıdaki ılıman iklimi anlatan seçenek de 'these places' ile mola yerlerine gönderme yapıyor ama sonraki cümlenin gerekçesini vermiyor. Yıl boyu yerinde kalan türler, her yıl aynı yuvaya dönen kuşlar ve izleme yöntemleri de 'This is why' ile kurulan sonuca bağlanmıyor." },

  // ---------- akışı bozan cümle ----------
  { id: 'gg-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['bottleneck'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Storks, eagles and many other broad-winged birds migrate mainly by soaring, which lets them cover great distances while hardly flapping their wings.',
      'They rise in circles on thermals, columns of warm air that form over land heated by the sun, and then glide on to the next one.',
      'Glider pilots, too, depend on thermals and often watch circling birds to find out where the warm air is rising.',
      'Because such rising air is weak or absent over open water, these birds avoid long sea crossings wherever they can.',
      'As a result, they gather in great numbers at bottlenecks such as the Bosphorus in Istanbul and the Belen Pass in Hatay, where thousands may pass over in a single day.',
    ], answer: 2,
    explain: "Parça süzülerek göç eden geniş kanatlı kuşları anlatıyor: sıcak hava akımlarında yükselip bir sonrakine süzülüyorlar (I–II), bu akımlar denizde zayıf olduğu için uzun deniz geçişlerinden kaçınıyorlar (IV) ve bu yüzden İstanbul Boğazı ve Belen Geçidi gibi darboğazlarda toplanıyorlar (V). III. cümle de sıcak hava akımlarından söz ediyor ama konuyu planör pilotlarına kaydırıyor ve II'den IV'e uzanan akışı kesiyor. IV'teki 'such rising air' doğrudan II'deki akımlara bağlanır." },
];

export default { id: 'genel-goc', course: C, title: U, order: 3, cards, items };
