// iDil › Sağlık bilimleri › Bağırsaktaki mikroplar.
// Tümü özgün: Claude yazdı (13 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (yalnız olgular kullanıldı; metin özgün):
// - Sender, Fuchs ve Milo 2016 (Weizmann Enstitüsü): yaklaşık 70 kg ağırlığında, 20–30 yaşlarında bir "referans erkek"te
//   yaklaşık 38 trilyon bakteri ve 30 trilyon insan hücresi; bakterilerin çoğu kalın bağırsakta. Sık tekrarlanan "her insan
//   hücresine on bakteri" sözü 1970'lerdeki kaba bir hesaba dayanıyordu.
// - Lifin kalın bağırsakta bakterilerce fermente edilmesi; bütirat gibi kısa zincirli yağ asitlerinin kalın bağırsak
//   hücrelerine enerji sağlaması ve iltihabı sınırlamaya yardım edebilmesi (temkinli); lifin dışkıya hacim katması.
// - Mikrobiyota bileşiminin kişiden kişiye çok değişmesi; doğum biçimiyle ilişkisi (temkinli).
// - Antibiyotik küründen sonra toparlanma: çoğu kişide aylar içinde büyük ölçüde, her zaman tam değil (temkinli).
// - Tekrarlayan Clostridioides difficile enfeksiyonunda dışkı mikrobiyota nakli; laboratuvarda üretilen bakteri karışımlarının
//   denenmesi. Çeldiricilerde yerleşik enfeksiyon kontrolü bilgisi: belirtisiz taşıyıcılık, sporların yüzeylerde aylarca
//   kalabilmesi, sabunla yıkamanın sporlara alkollü jelden etkili olması.
// - Farelerde lifsiz beslenmede bazı bağırsak bakterilerinin bağırsağı koruyan mukusla beslenmesi (Desai ve ark. 2016).
// - Beslenmedeki ani bir değişikliğin bağırsak mikrobiyotasını birkaç gün içinde değiştirebilmesi (David ve ark. 2014).
// - Obezite ve depresyonda farklı mikrop karışımları bulunması; insanlardaki kanıtların çoğunun ilişkisel olması; farelerde
//   mikropların davranışla ilişkisi; probiyotik ürünlerin birçok iddiasının iyi desteklenmemesi (temkinli).
// Görev 20 (25 Kasım 2026): çeviri çeldiricileri biçim kestirmesine karşı yeniden kuruldu.

const T = 'taslak';
const C = 'saglik';
const U = 'Bağırsaktaki mikroplar';

const cards = [
  { code: 'diverse', title: 'çeşitli, farklı türlerden oluşan', pos: 'sıfat', cefr: 'B2', ipa: '/daɪˈvɜːs/',
    text: "Birbirinden farklı pek çok öğeden oluşanı anlatır: a diverse group, a diverse diet. Adı 'diversity' (çeşitlilik), fiili 'diversify' (çeşitlendirmek). 'Various' ise çoğul isimle gelir: various reasons.",
    example: 'The city has a diverse population, with people from more than a hundred countries.',
    exampleTr: 'Kentin nüfusu çok çeşitli; burada yüzü aşkın ülkeden insan yaşıyor.',
    synonyms: ['varied', 'wide-ranging'], family: ['diversity', 'diversify'] },
  { code: 'digest', title: 'sindirmek; (bir bilgiyi) özümsemek', pos: 'fiil', cefr: 'B2', ipa: '/daɪˈdʒest/',
    text: "Besini sindirmek: digest food. Mecaz olarak bir bilgiyi ya da haberi kavrayıp özümsemek: digest the news. İsim olarak vurgu başa kayar ve 'özet' demektir: a digest /ˈdaɪdʒest/. Adı 'digestion' (sindirim).",
    example: 'Some people find it harder to digest milk as they get older.',
    exampleTr: 'Bazı insanlar yaşlandıkça sütü sindirmekte daha çok zorlanır.',
    synonyms: ['break down', 'take in'], family: ['digestion', 'digestive', 'indigestion'] },
  { code: 'ferment', title: 'mayalanmak, fermente olmak; fermente etmek', pos: 'fiil', cefr: 'C1', ipa: '/fəˈment/',
    text: "Maya ya da bakterilerin şekeri, nişastayı veya lifi oksijensiz ortamda parçalamasıdır; yoğurt, turşu ve ekmek bu yolla yapılır. Adı 'fermentation'. İsim olarak 'ferment' /ˈfɜːment/ kargaşa, huzursuzluk demektir.",
    example: 'Bread dough rises because yeast ferments the sugars in the flour.',
    exampleTr: 'Maya undaki şekerleri fermente ettiği için ekmek hamuru kabarır.',
    synonyms: ['brew'], family: ['fermentation', 'fermented'] },
  { code: 'colonise', title: '(bir ortama) yerleşip çoğalmak; sömürgeleştirmek', pos: 'fiil', cefr: 'C1', ipa: '/ˈkɒlənaɪz/',
    text: "Biyolojide bir canlının yeni bir ortama yerleşip orada çoğalmasıdır; tarihte 'sömürgeleştirmek' anlamına gelir. Amerikan yazımı 'colonize'. Adı 'colonisation'; ilgili sözcükler 'colony' (koloni) ve 'colonist'.",
    example: 'Within a few years, plants and insects had colonised the new volcanic island.',
    exampleTr: 'Birkaç yıl içinde bitkiler ve böcekler yeni oluşan volkanik adaya yerleşmişti.',
    synonyms: ['settle', 'occupy'], family: ['colony', 'colonisation'] },
  { code: 'composition', title: 'bileşim, yapı; beste; kompozisyon', pos: 'isim', cefr: 'C1', ipa: '/ˌkɒmpəˈzɪʃn/',
    text: "Bir bütünün nelerden ve hangi oranlarda oluştuğunu anlatır: the composition of the soil. Müzikte 'beste', okulda 'kompozisyon' anlamı da var. Fiili 'compose'; 'be composed of' (-den oluşmak) kalıbı sık geçer.",
    example: 'The composition of the committee changed after two of its members resigned.',
    exampleTr: 'İki üyesi istifa edince kurulun yapısı değişti.',
    synonyms: ['make-up', 'structure'], family: ['compose', 'component'] },
  { code: 'disrupt', title: 'bozmak, aksatmak, sekteye uğratmak', pos: 'fiil', cefr: 'B2', ipa: '/dɪsˈrʌpt/',
    text: "Bir düzeni ya da işleyişi bozmak, aksatmak: disrupt traffic, disrupt sleep. Adı 'disruption', sıfatı 'disruptive' (düzen bozucu).",
    example: 'The strike disrupted train services across the country for three days.',
    exampleTr: 'Grev, ülke genelinde tren seferlerini üç gün boyunca aksattı.',
    synonyms: ['interrupt', 'upset'], family: ['disruption', 'disruptive'] },
  { code: 'beneficial', title: 'yararlı, faydalı', pos: 'sıfat', cefr: 'B2', ipa: '/ˌbenɪˈfɪʃl/',
    text: "'beneficial to' ya da 'beneficial for' ile kullanılır: beneficial to health. Karşıtı 'harmful' (zararlı). İsim ve fiil olarak 'benefit' (yarar; yararlanmak).",
    example: 'Short breaks every hour can be beneficial to students who study for long periods.',
    exampleTr: 'Uzun süre ders çalışan öğrenciler için saatte bir verilen kısa molalar yararlı olabilir.',
    synonyms: ['helpful', 'advantageous'], family: ['benefit', 'beneficiary'] },
  { code: 'inflammation', title: 'iltihap, yangı', pos: 'isim', cefr: 'C1', ipa: '/ˌɪnfləˈmeɪʃn/',
    text: "Vücudun yaraya ya da enfeksiyona verdiği tepkidir: kızarıklık, şişlik, ısı artışı ve ağrı. Sıfatı 'inflammatory': inflammatory bowel disease (iltihabi bağırsak hastalığı). 'Anti-inflammatory' iltihap giderici demektir.",
    example: 'Painkillers such as ibuprofen also reduce inflammation.',
    exampleTr: 'İbuprofen gibi ağrı kesiciler iltihabı da azaltır.',
    synonyms: ['swelling'], family: ['inflame', 'inflammatory', 'anti-inflammatory'] },
  { code: 'correlation', title: 'bağıntı, ilişki (iki değişken arasında)', pos: 'isim', cefr: 'C1', ipa: '/ˌkɒrəˈleɪʃn/',
    text: "İki şeyin birlikte artıp azalmasını, aralarındaki bağı anlatır: a correlation between A and B. Bilimsel metinlerde sık geçer. Fiili 'correlate (with)', sıfatı 'correlated'.",
    example: 'The researchers found a strong correlation between how long the students slept and their exam results.',
    exampleTr: 'Araştırmacılar, öğrencilerin ne kadar uyuduğuyla sınav sonuçları arasında güçlü bir ilişki buldu.',
    synonyms: ['association', 'link'], family: ['correlate', 'correlated'] },
  { code: 'vulnerable', title: 'savunmasız, korunmasız; (bir şeye) açık', pos: 'sıfat', cefr: 'B2', ipa: '/ˈvʌlnərəbl/',
    text: "Zarar görmeye açık olanı anlatır; 'vulnerable to something' kalıbıyla kullanılır: vulnerable to infection (enfeksiyona açık). Adı 'vulnerability'.",
    example: 'Young children and older people are more vulnerable to the effects of extreme heat.',
    exampleTr: 'Küçük çocuklar ve yaşlılar, aşırı sıcağın etkilerine karşı daha savunmasızdır.',
    synonyms: ['exposed', 'defenceless'], family: ['vulnerability'] },
  { code: 'break down', title: 'parçalamak, ayrıştırmak; bozulmak, arıza yapmak', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌbreɪk ˈdaʊn/',
    text: "Bilim metinlerinde bir maddeyi daha küçük parçalara ayırmak ya da öyle ayrışmak demektir: enzymes break down proteins. Gündelik dilde aracın bozulması, görüşmelerin çıkmaza girmesi anlamına da gelir. Adı 'breakdown'.",
    example: 'Some plastics take hundreds of years to break down in the environment.',
    exampleTr: 'Bazı plastiklerin doğada ayrışması yüzlerce yıl sürer.',
    synonyms: ['decompose', 'split up'], family: ['breakdown'] },
  { code: 'prematurely', title: 'vaktinden önce, erken; aceleyle', pos: 'zarf', cefr: 'C1', ipa: '/ˈpremətʃəli/',
    text: "Bir şeyin olması gerekenden önce olduğunu anlatır: born prematurely (erken doğmuş, prematüre). Bilim metinlerinde 'yeterli kanıt olmadan, aceleyle' anlamında da geçer: conclude prematurely. Sıfatı 'premature'.",
    example: 'The newspaper prematurely announced the winner before all the votes had been counted.',
    exampleTr: 'Gazete, oylar daha sayılmadan kazananı aceleyle duyurdu.',
    synonyms: ['too early', 'too soon'], family: ['premature'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'sm-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['diverse', 'beneficial'],
    level: 'orta', cefr: 'B2', konu: ['sıfat'],
    q: 'Rather than being home to just a few kinds of bacteria, the gut of a healthy adult usually contains a remarkably ---- community of microbes, with hundreds of different species living side by side.',
    options: ['uniform', 'diverse', 'adverse', 'beneficial', 'averse'], answer: 1,
    explain: "Cümle, sağlıklı bir yetişkinin bağırsağında yalnız birkaç bakteri türü değil, yan yana yaşayan yüzlerce farklı tür bulunduğunu söylüyor; boşluğa bu çeşitliliği anlatan 'diverse' (çeşitli, farklı türlerden oluşan) gelir. 'Uniform' (tekdüze, birörnek) bunun tam tersidir. 'Adverse' (olumsuz, zararlı) ve 'averse' (isteksiz; 'averse to' kalıbıyla insanlar için kullanılır) biçimce benzer ama anlam kurmaz. 'Beneficial' (yararlı) bağırsak mikropları için sık kullanılır ama türlerin sayısıyla ilgili bir şey söylemez; 'rather than … just a few kinds' karşıtlığı bir çeşitlilik sözcüğü ister." },

  // ---------- dil bilgisi ----------
  { id: 'sm-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['composition'],
    level: 'orta', cefr: 'B2', konu: ['bağlaç', 'koşul'],
    q: "Because the composition of gut bacteria differs so much from one person to another, researchers often cannot tell whether a change in someone's microbes matters ---- they know what that person's gut community looked like beforehand.",
    options: ['as long as', 'in case', 'once', 'so that', 'unless'], answer: 4,
    explain: "'Unless' (-medikçe, -mezse) olumsuz bir koşul kurar: araştırmacılar kişinin bağırsak topluluğunun önceki hâlini bilmedikçe bir değişikliğin önemli olup olmadığını çoğu zaman anlayamaz. Cümlenin başı da bunu gerektiriyor: bileşim kişiden kişiye çok değiştiği için karşılaştırma ancak aynı kişinin önceki durumuyla yapılabilir. 'As long as' (yeter ki, -dikçe) ve 'once' (-ir -mez, -dikten sonra) tersini söyler; oysa önceki durumu bilmek anlamayı engellemez, kolaylaştırır. 'In case' (… ihtimaline karşı) önlem, 'so that' (-sın diye) amaç bildirir; ikisi de bu iki cümle arasında anlamlı bir ilişki kurmaz." },

  { id: 'sm-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'Many gut bacteria normally feed on fibre from our diet, but experiments in mice suggest that, ---- this fibre, some of them turn instead to the layer of mucus that protects the lining of the intestine.',
    options: ['owing to', 'in addition to', 'in terms of', 'in the absence of', 'with the exception of'], answer: 3,
    explain: "Cümlenin başı birçok bağırsak bakterisinin normalde lifle beslendiğini söylüyor; 'but' ve 'turn instead' (onun yerine … yönelmek) ise bu besin olmadığında ne olduğunu anlatıyor: 'in the absence of' (… yokluğunda, … olmadığında). 'Owing to' (… yüzünden) lifi mukusa yönelmenin nedeni yapar ve mantığı tersine çevirir. 'In addition to' (… -e ek olarak) 'instead' ile çelişir. 'In terms of' (… bakımından) ve 'with the exception of' (… dışında) burada anlam kurmaz." },

  { id: 'sm-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['colonise'],
    level: 'zor', cefr: 'C1', konu: ['sıfat cümleciği'],
    q: "The microbes ---- a newborn baby's gut is first colonised appear to differ depending on whether the baby is delivered vaginally or by caesarean section.",
    options: ['which', 'by which', 'to which', 'whose', 'where'], answer: 1,
    explain: "Sıfat cümleciğinin içi edilgendir: 'a newborn baby's gut is first colonised by the microbes' (bebeğin bağırsağına ilk önce bu mikroplar yerleşir). Edilgen cümledeki 'by', ilgi zamirinin önüne geçer: 'the microbes by which … is colonised'. Edatsız 'which' cümleciği eksik bırakır; 'to which' bu fiille kullanılmayan bir edattır. 'Whose' ardından bir isim ister (whose genes gibi); 'where' bir yer bildirir, mikroplar ise bir yer değildir." },

  { id: 'sm-g4', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['ferment'],
    level: 'orta', cefr: 'B2', konu: ['kip (modal)'],
    q: 'Because gut bacteria release gas as they ferment fibre, a sudden large increase in the amount of fibre a person eats ---- lead to bloating at first, although some people notice no bloating at all.',
    options: ['could', 'must', "can't", "mustn't", 'had better'], answer: 0,
    explain: "Cümle bir olasılık anlatıyor: bağırsak bakterileri lifi fermente ederken gaz çıkardığı için lif birden çok artınca başta şişkinlik olabilir; ama 'although some people notice no bloating at all' (bazı kişiler hiç şişkinlik fark etmez) bunun kesin olmadığını söylüyor. Kesin olmayan olasılık 'could' ile kurulur: '-ebilir'. Herkes için geçerli genel bir olasılık söylendiği için 'can' de olurdu, ama şıklarda yok. 'Must' kanıta dayanan güçlü bir çıkarım bildirir ('mutlaka olur'); bazı kişilerde hiç olmamasıyla çelişir. 'Can't' tersini söyler ('olamaz'); oysa cümlenin başı şişkinliğin neden olabileceğini açıklıyor. 'Mustn't' bir yasak bildirir; olumsuz çıkarımda da İngiliz kullanımında 'can't' gelir. 'Had better' bir uyarıdır, olasılık bildirmez." },

  // ---------- cümle tamamlama ----------
  { id: 'sm-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: '----, some species may take far longer to return, and a few may not come back at all.',
    options: [
      'Even though antibiotics kill many of the harmless bacteria in the gut along with the harmful ones',
      'Unless a second course of antibiotics is started soon after the first one has ended',
      'Because most of the bacteria in our gut live in the large intestine rather than in the stomach',
      "Although most people's gut bacteria largely recover within months of a course of antibiotics",
      'As long as patients eat plenty of fibre-rich food while they are taking antibiotics',
    ], answer: 3,
    explain: "Ana cümle, bazı türlerin geri dönmesinin çok daha uzun sürebileceğini, birkaçının hiç dönmeyebileceğini söylüyor. Bununla karşıtlık kuran ve 'far longer' (çok daha uzun) karşılaştırmasına dayanak veren tek seçenek, çoğu kişide bağırsak bakterilerinin bir antibiyotik küründen sonra aylar içinde büyük ölçüde toparlandığını söyleyendir. 'Even though' ile başlayan seçenek karşıtlık bağlacı taşıyor ama zararsız bakterilerin de öldüğü bilgisi ana cümleyle çelişmez, onu destekler. İkinci bir kürün ya da lifli beslenmenin koşul olarak sunulması mantığı tersine çevirir. Bakterilerin kalın bağırsakta yaşaması ise türlerin geç dönmesini açıklamaz." },

  { id: 'sm-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['digest'],
    level: 'orta', cefr: 'B2', konu: ['neden-sonuç'],
    q: 'Because the microbes in our large intestine live mainly on the parts of our food that we cannot digest ourselves, ----.',
    options: [
      'what we eat has little influence on which species are most common there',
      'their numbers tend to rise sharply whenever we skip a meal',
      'a sudden change in diet can alter the mix of species there within a few days',
      'they rely mainly on the sugars that are absorbed into our blood in the small intestine',
      'they are found in roughly the same proportions in every healthy adult',
    ], answer: 2,
    explain: "'Because' bir neden veriyor: kalın bağırsaktaki mikroplar çoğunlukla bizim sindiremediğimiz besin kısımlarıyla geçinir. Öyleyse ne yediğimiz onları doğrudan etkiler ve beslenmedeki ani bir değişiklik birkaç gün içinde tür karışımını değiştirebilir. Ne yediğimizin az etkisi olduğunu söyleyen seçenek bu nedenle çelişir. Öğün atlayınca sayılarının artması da mantığı tersine çevirir: besin azalınca artmaları beklenmez. İnce bağırsakta kana geçen şekerlerle beslendiklerini söyleyen seçenek, sindiremediğimiz kısımlarla geçindikleri bilgisiyle çelişir. Her sağlıklı yetişkinde aynı oranlarda bulunmaları ise verilen nedenden çıkmaz." },

  // ---------- çeviri ----------
  { id: 'sm-c1', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['beneficial'],
    level: 'orta', cefr: 'B2', konu: ['isim-fiil ve mastar'],
    q: 'Probiyotik almanın sağlıklı insanlara yararlı olduğunu söylemek için henüz erken.',
    options: [
      'It is still too early for healthy people to start taking probiotics.',
      'It is still too early to say that taking probiotics is beneficial for healthy people.',
      'It is no longer too early to say that taking probiotics is harmful for healthy people.',
      'It is still too early to say that taking probiotics is harmful for healthy people.',
      'It is still too early to say that taking probiotics is harmful for sick people.',
    ], answer: 1,
    explain: "Türkçe cümlede iki yapı var: 'probiyotik almanın' isim-fiili İngilizcede -ing ile ('taking probiotics'), 'söylemek için henüz erken' ise 'too + sıfat + mastar' ile ('still too early to say') karşılanır. Doğru çeviri 'sağlıklı insanlara yararlı' bilgisini de korur. 'Still too early … harmful for healthy people' diyen seçenek 'yararlı'yı 'zararlı'ya çeviriyor. 'For sick people' ifadesi sağlıklı insanları hastalarla değiştiriyor ve yargıyı 'zararlı' yapıyor. 'No longer too early' diye kurulan çeviri temkini kaldırıp artık zararlı denebileceğini söylüyor. 'For healthy people to start taking probiotics' seçeneği 'erken'i söylemeye değil, probiyotiğe başlamaya bağlıyor: sağlıklı insanların probiyotiğe başlaması için erken olduğunu söylüyor." },

  // ---------- okuma parçası (3 soru, YÖKDİL biçimi) ----------
  { id: 'sm-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['correlation', 'prematurely'],
    level: 'orta', cefr: 'C1', title: 'On bakteriye bir hücre mi?',
    text: "For decades, textbooks and popular articles repeated a striking claim: the bacteria living in and on the human body outnumber our own cells by about ten to one. The figure, however, rested on a rough calculation made in the 1970s and was rarely questioned. In 2016, researchers at the Weizmann Institute of Science in Israel revisited the question using more recent data. For a 'reference man', aged between 20 and 30 and weighing about 70 kilograms, they estimated that the body contains roughly 38 trillion bacteria, most of them in the large intestine, and about 30 trillion human cells. In other words, the two numbers are of the same order. This correction does not make gut microbes any less important, but it shows how easily a rough estimate can harden into an accepted fact. Similar care is needed with many claims now made about gut bacteria. Studies have found that people with certain conditions, from obesity to depression, often carry a different mix of microbes from people without them. Such a correlation, however, does not reveal which came first: the microbes might contribute to the illness, the illness might alter the microbes, or a third factor, such as diet or medication, might affect both. Experiments in mice can test cause and effect more directly, but mice are not people, and some companies have prematurely presented such findings as proof that changing our gut bacteria will improve our mood. Until better studies in humans are carried out, these promises deserve a good deal of scepticism.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the 2016 study estimated that ----.',
        options: [
          'bacteria outnumber human cells in the body by about ten to one',
          "most of the body's bacteria live on the skin rather than in the gut",
          "a person's age and weight make little difference to the number of bacteria they carry",
          'the body contains about 30 trillion bacteria and 38 trillion human cells',
          'bacteria and human cells are present in the body in broadly similar numbers',
        ], answer: 4,
        explain: "Parçaya göre 2016 çalışması, 'referans erkek'te yaklaşık 38 trilyon bakteri ve 30 trilyon insan hücresi olduğunu hesapladı; iki sayı aynı büyüklükte, yani kabaca denk. On bakteriye bir hücre oranı, çalışmanın düzelttiği eski sözdür. Sayıların yerini değiştiren seçenek dikkatsiz okumaya kurulmuş bir tuzaktır: 38 trilyon bakteri, 30 trilyon insan hücresidir. Bakterilerin çoğu deride değil, kalın bağırsakta yaşar. Yaşın ve kilonun bakteri sayısına etkisinden ise parçada hiç söz edilmiyor." },
      { konu: ['ayrıntı'],
        q: 'In the passage, diet and medication are mentioned as examples of ----.',
        options: [
          'factors that could cause both the illness and the change in gut microbes',
          'treatments that have been shown to change the mood of laboratory mice',
          'reasons why the calculation made in the 1970s turned out to be wrong',
          'illnesses that are often linked to a particular mix of gut microbes',
          'methods that researchers use to count the bacteria in the human body',
        ], answer: 0,
        explain: "Parça, belli bir hastalığı olanlarda farklı bir mikrop karışımı bulunmasının hangisinin önce geldiğini göstermediğini söylüyor ve üç olasılık sayıyor; üçüncüsü, beslenme ya da ilaç gibi bir etkenin hem mikropları hem hastalığı etkilemesidir. Beslenme ve ilaç, bu yüzden ikisini birden etkileyebilecek etkenlere örnek olarak geçiyor. Parçada örnek verilen hastalıklar obezite ve depresyondur; beslenme ve ilaç hastalık değildir. Farelerin ruh hâlini değiştiren tedaviler, 1970'lerdeki hesabın neden yanlış çıktığı ve bakteri sayma yöntemleri parçada bu örneklerle anlatılmıyor." },
      { konu: ['yazarın tutumu'],
        q: "The author's attitude towards bold claims about gut bacteria and health can best be described as ----.",
        options: [
          'enthusiastic, because experiments in mice have already shown that the same effects occur in people',
          'cautious, because much of the human evidence shows only that some microbes and conditions occur together',
          'dismissive, because the 2016 study showed that gut bacteria matter far less than was once believed',
          'sceptical, because most researchers in this field are known to exaggerate the results of their own studies',
          'neutral, because the author thinks that the effects of gut bacteria on health can never be properly tested',
        ], answer: 1,
        explain: "Yazar, insanlarda yapılan çalışmaların çoğunun yalnız belli mikroplarla belli hastalıkların birlikte görüldüğünü gösterdiğini, bunun neden-sonuç ilişkisini ortaya koymadığını söylüyor; insanlarda daha iyi çalışmalar yapılana dek büyük vaatlere kuşkuyla bakılmasını öneriyor. Bu temkinli bir tutumdur. Yazar fare deneylerinin insanlar için geçerli olduğunu söylemiyor; tersine 'fareler insan değildir' diyor. 2016 düzeltmesinin bağırsak mikroplarını önemsizleştirmediğini de açıkça belirtiyor. Kuşkucu tutumu anan seçenek parçada olmayan bir gerekçeye dayanıyor: parça abartıyı araştırmacıların çoğuna değil, bazı şirketlere yüklüyor. Yazar konunun hiç sınanamayacağını da düşünmüyor; daha iyi çalışmalar bekliyor." },
    ] },

  // ---------- paragraf tamamlama ----------
  { id: 'sm-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['disrupt', 'vulnerable'],
    level: 'orta', cefr: 'C1', konu: ['gönderim'],
    q: 'Clostridioides difficile is a bacterium that can cause severe diarrhoea, and people whose gut community has been badly disrupted are particularly vulnerable to it. In some patients, the infection keeps coming back despite repeated treatment. ----. Unpleasant as it may sound, this approach has proved remarkably successful, and it is now an established treatment for infections that keep returning. Researchers are also testing whether carefully selected mixtures of bacteria grown in the laboratory might one day do the same job.',
    options: [
      'For such patients, doctors can transfer stool from a healthy donor into the gut to replace the microbes it has lost',
      'Many people, however, carry the bacterium in their gut without ever developing any symptoms of illness',
      'The bacterium spreads easily in hospitals because its spores can survive on dry surfaces for several months',
      'In such cases, doctors prescribe a stronger antibiotic, which clears the infection for good after one course',
      'Washing hands with soap and water removes its spores far more effectively than cleaning them with alcohol gel',
    ], answer: 0,
    explain: "Boşluktan sonraki cümle 'this approach' (bu yöntem) diye bir yönteme gönderme yapıyor ve onun kulağa hoş gelmeyebileceğini söylüyor; son cümle de laboratuvarda üretilen bakteri karışımlarının bir gün 'aynı işi' görüp göremeyeceğini soruyor. İkisine birden uyan tek cümle, sağlıklı bir bağışçının dışkısının hastanın bağırsağına aktarılıp kaybedilen mikropların yerine konduğunu söyleyendir. Daha güçlü bir antibiyotik de bir yöntem ama ne kulağa nahoş gelir ne de bakteri karışımları onun işini görebilir; üstelik 'tek kürde kalıcı olarak temizler' sözü, enfeksiyonun tekrar tekrar döndüğü bilgisiyle çelişir. Belirtisiz taşıyıcılık, sporların yüzeylerde aylarca kalması ve el yıkama ise bir tedavi yöntemi değildir; 'this approach' için dayanak vermez." },

  // ---------- akışı bozan cümle ----------
  { id: 'sm-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['break down', 'ferment', 'inflammation'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Dietary fibre consists largely of plant carbohydrates that the enzymes of the human digestive system cannot break down.',
      'Instead of being absorbed in the small intestine, it therefore travels on to the colon, where it becomes food for the bacteria that live there.',
      'These microbes ferment the fibre, producing gases as well as short-chain fatty acids such as butyrate.',
      'Eating plenty of fibre also helps to prevent constipation, as it adds bulk to the stool and keeps it soft.',
      'Butyrate, in turn, is a major source of energy for the cells lining the colon, and it also seems to help keep inflammation there in check.',
    ], answer: 3,
    explain: "Parça, bağırsak bakterilerinin lifi nasıl yakıta çevirdiğini adım adım anlatıyor: kendi enzimlerimiz lifi parçalayamaz, lif kalın bağırsağa ulaşır, oradaki bakteriler onu fermente edip bütirat gibi kısa zincirli yağ asitleri üretir, bütirat da kalın bağırsağı döşeyen hücrelerin önemli bir enerji kaynağıdır. IV. cümle lifin kabızlığı önlemesine geçerek bu zinciri kesiyor; konu yine lif ama bakterilerle ilgisi yok. V. cümledeki 'Butyrate, in turn' de III. cümleye bağlanıyor, IV. cümleye değil." },
];

export default { id: 'saglik-mikrobiyota', course: C, title: U, order: 3, cards, items };
