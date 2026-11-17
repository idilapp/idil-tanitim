// iDil › Sosyal bilimler › Grup baskısı ve uyma.
// Tümü özgün: Claude yazdı (13 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (yalnız olgular; metin özgün):
// - Solomon Asch'ın çizgi deneyleri (Swarthmore College, 1950'lerin başı; Asch 1951, 1955, 1956): erkek üniversite öğrencileri,
//   biri dışında herkes iş birlikçi; 18 denemenin 12'sinde ortak yanlış cevap; katılımcıların yaklaşık dörtte üçü en az bir kez
//   uydu, bu denemelerdeki cevapların yaklaşık üçte biri uyuyordu, yaklaşık dörtte biri hiç uymadı; tek başına hata %1'in altında;
//   tek bir iş birlikçi doğru cevap verince uyma keskin biçimde düştü; uyma çoğunluk üç kişiye çıkana kadar arttı, sonra pek
//   değişmedi; cevaplar gizlice yazılınca uyma azaldı.
// - Bond ve Smith 1996 derlemesi (133 çalışma): toplulukçu kültürlerde daha yüksek uyma, ABD'de 1950'lerden bu yana düşüş (temkinli).
// - Muzaffer Şerif'in karanlık odadaki ışık noktası deneyi (1930'lar): tek başına farklı tahminler, grupta ortak bir norm.
// - Gençlerin akranlarının yanında daha çok risk alması, sosyal kanıt (ötekilerin yaptığına bakmak): genel ve yerleşik bilgi.

const T = 'taslak';
const C = 'sosyal';
const U = 'Grup baskısı ve uyma';

const cards = [
  { code: 'unanimous', title: 'oy birliğiyle alınan; hepsi aynı görüşte olan', pos: 'sıfat', cefr: 'C1', ipa: '/juːˈnænɪməs/',
    text: "Herkesin aynı görüşte birleştiğini anlatır: a unanimous decision (oy birliğiyle alınmış karar). Ünlüyle yazılsa da /j/ sesiyle başladığı için önüne 'an' değil 'a' gelir. Zarfı 'unanimously'.",
    example: "The judges' decision was unanimous: all five of them gave the prize to the same film.",
    exampleTr: 'Jürinin kararı oy birliğiyle alındı: beş üyenin beşi de ödülü aynı filme verdi.',
    synonyms: ['united', 'undivided'], family: ['unanimously', 'unanimity'] },
  { code: 'conform', title: 'uymak, uyum göstermek (kurala, beklentiye, çoğunluğa)', pos: 'fiil', cefr: 'C1', ipa: '/kənˈfɔːm/',
    text: "'conform to something' kalıbıyla kullanılır: conform to the rules, conform to social norms. Adı 'conformity' toplum psikolojisinde 'çoğunluğa uyma' demektir; karşıtı 'nonconformity'.",
    example: 'New employees often feel that they have to conform to unwritten rules about how late to stay at the office.',
    exampleTr: 'Yeni çalışanlar, ofiste ne zamana kadar kalınacağına dair yazısız kurallara uymak zorunda olduklarını çoğu zaman hisseder.',
    synonyms: ['comply', 'fit in'], family: ['conformity', 'conformist', 'nonconformist'] },
  { code: 'peer', title: 'akran, yaşıt; aynı konumdaki kişi', pos: 'isim', cefr: 'B2', ipa: '/pɪə(r)/',
    text: "Yaşça ya da konumca denk kişi: peer pressure (akran baskısı), peer review (bilimsel yayınlarda hakem değerlendirmesi). Fiil olarak 'peer at' dikkatle bakmak demektir; bu ayrı bir anlamdır.",
    example: 'Students who are struggling with maths sometimes find it easier to ask a peer than a teacher.',
    exampleTr: 'Matematikte zorlanan öğrenciler bazen öğretmene sormaktansa akranlarından birine sormayı daha kolay bulur.',
    synonyms: ['equal', 'contemporary'], family: ['peerless'] },
  { code: 'dissent', title: 'karşı görüş, muhalefet; aykırı düşünme', pos: 'isim', cefr: 'C1', ipa: '/dɪˈsent/',
    text: "Çoğunluğun ya da yönetimin görüşüne açıkça karşı çıkmaktır: express dissent (karşı görüşünü dile getirmek). Fiil olarak 'dissent from' kalıbıyla gelir. Sıfatı 'dissenting': a dissenting opinion (karşı oy yazısı).",
    example: "In some families, any dissent from the parents' views is treated as a lack of respect.",
    exampleTr: 'Bazı ailelerde anne babanın görüşlerine her türlü karşı çıkış saygısızlık sayılır.',
    synonyms: ['disagreement', 'objection'], family: ['dissenter', 'dissenting'] },
  { code: 'yield', title: 'boyun eğmek, teslim olmak; (ürün, sonuç) vermek', pos: 'fiil', cefr: 'C1', ipa: '/jiːld/',
    text: "'yield to pressure' (baskıya boyun eğmek) kalıbında 'to' alır. Bilimsel metinlerde 'sonuç vermek' anlamında da geçer: the study yielded surprising results. İsim olarak 'verim, getiri' demektir.",
    example: 'After weeks of protests, the council finally yielded to public pressure and kept the park open.',
    exampleTr: 'Haftalarca süren protestoların ardından belediye meclisi sonunda kamuoyunun baskısına boyun eğdi ve parkı açık tuttu.',
    synonyms: ['give in', 'give way', 'submit'], family: ['unyielding'] },
  { code: 'blatantly', title: 'apaçık, göz göre göre (olumsuz bir şey için)', pos: 'zarf', cefr: 'C1', ipa: '/ˈbleɪtəntli/',
    text: "Olumsuz bir şeyin gizlenmeden, göze batacak kadar açık olduğunu vurgular: blatantly wrong, blatantly unfair. Sıfatı 'blatant': a blatant lie (apaçık bir yalan).",
    example: 'The report was withdrawn after readers noticed that several of its figures were blatantly wrong.',
    exampleTr: 'Okurlar rapordaki birkaç rakamın apaçık yanlış olduğunu fark edince rapor geri çekildi.',
    synonyms: ['obviously', 'openly', 'flagrantly'], family: ['blatant'] },
  { code: 'go along with', title: '(bir fikre, karara) uymak, katılmak; razı olmak', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌɡəʊ əˈlɒŋ wɪð/',
    text: "Bir fikre ya da plana, çoğu zaman içinden pek gelmese de katılmaktır: go along with the majority, go along with a plan. Nesne 'with'ten sonra gelir: go along with it.",
    example: "Most of the passengers were happy to go along with the driver's suggestion to take a shorter route.",
    exampleTr: 'Yolcuların çoğu, sürücünün daha kısa bir yoldan gitme önerisine seve seve uydu.',
    synonyms: ['agree to', 'comply with'], family: [] },
  { code: 'reluctant', title: 'isteksiz, gönülsüz', pos: 'sıfat', cefr: 'B2', ipa: '/rɪˈlʌktənt/',
    text: "'be reluctant to do something' kalıbıyla mastar alır: reluctant to admit, reluctant to speak. Zarfı 'reluctantly' (istemeye istemeye), adı 'reluctance'.",
    example: 'Many patients are reluctant to tell their doctor how much alcohol they really drink.',
    exampleTr: 'Birçok hasta, gerçekte ne kadar alkol aldığını doktoruna söylemekte isteksizdir.',
    synonyms: ['unwilling', 'hesitant'], family: ['reluctance', 'reluctantly'] },
  { code: 'ambiguous', title: 'belirsiz, iki anlamlı, farklı yorumlara açık', pos: 'sıfat', cefr: 'C1', ipa: '/æmˈbɪɡjuəs/',
    text: "Birden çok biçimde anlaşılabilen ya da açık olmayan şeyi anlatır: an ambiguous answer, an ambiguous situation. Adı 'ambiguity'; karşıtı 'unambiguous' (açık, kesin).",
    example: 'The instructions were so ambiguous that half the class answered the wrong question.',
    exampleTr: 'Yönergeler o kadar belirsizdi ki sınıfın yarısı yanlış soruyu cevapladı.',
    synonyms: ['unclear', 'vague'], family: ['ambiguity', 'unambiguous'] },
  { code: 'ridicule', title: 'alay, alay konusu olma', pos: 'isim', cefr: 'C1', ipa: '/ˈrɪdɪkjuːl/',
    text: "İsim olarak 'alay' demektir: fear of ridicule (alay edilme korkusu), be met with ridicule (alayla karşılanmak). Aynı biçimiyle fiil de olur: ridicule an idea. Sıfatı 'ridiculous' (gülünç).",
    example: 'His early paintings were met with ridicule, but today they hang in major museums.',
    exampleTr: 'İlk resimleri alayla karşılandı ama bugün büyük müzelerde asılı duruyor.',
    synonyms: ['mockery', 'scorn'], family: ['ridiculous'] },
  { code: 'deviate', title: 'sapmak, ayrılmak (bir yoldan, kuraldan, plandan)', pos: 'fiil', cefr: 'C1', ipa: '/ˈdiːvieɪt/',
    text: "'deviate from something' kalıbıyla kullanılır: deviate from the plan, deviate from the norm. Adı 'deviation' (sapma); 'deviant' kurala aykırı davranan demektir.",
    example: 'The pilot had to deviate from the planned route because of a storm.',
    exampleTr: 'Pilot, fırtına yüzünden planlanan rotadan sapmak zorunda kaldı.',
    synonyms: ['depart from', 'diverge'], family: ['deviation', 'deviant'] },
  { code: 'resist', title: 'direnmek, karşı koymak; (bir isteğe) dayanmak', pos: 'fiil', cefr: 'B2', ipa: '/rɪˈzɪst/',
    text: "Ardından isim ya da -ing gelir: resist pressure, resist changing. 'Can't resist' bir şeye dayanamamak demektir: I can't resist chocolate. Adı 'resistance'.",
    example: 'It is hard to resist the temptation to check your phone during a boring lecture.',
    exampleTr: 'Sıkıcı bir derste telefona bakma isteğine karşı koymak zordur.',
    synonyms: ['withstand', 'oppose'], family: ['resistance', 'irresistible'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'sb-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['unanimous', 'ambiguous'],
    level: 'orta', cefr: 'C1', konu: ['sıfat'],
    q: "Because the committee's decision had to be ----, the two members who still disagreed came under strong pressure to change their minds before the meeting ended.",
    options: ['anonymous', 'magnanimous', 'tentative', 'unanimous', 'ambiguous'], answer: 3,
    explain: "'Unanimous' oy birliğiyle alınan demektir. Karar herkesin onayını gerektirdiği için hâlâ karşı çıkan iki üye fikrini değiştirsin diye baskı gördü. 'Anonymous' (adı gizli) ve 'magnanimous' (yüce gönüllü) biçimce benziyor ama karşı çıkanlara neden baskı yapıldığını açıklamaz. Tentative (geçici, kesinleşmemiş) ve ambiguous (belirsiz, iki anlama gelebilen) da bu baskının nedeni olamaz." },

  // ---------- dil bilgisi ----------
  { id: 'sb-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['go along with'],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Many people who go along with a group in public give their honest answer ---- they are allowed to write it down in private.',
    options: ['unless', 'even if', 'so that', 'whether', 'as long as'], answer: 4,
    explain: "Cümlenin başı bu kişilerin herkesin önünde gruba uyduğunu söylüyor; dürüst cevaplarını ancak gizlice yazabildiklerinde verirler. Bu koşulu 'as long as' (-dığı sürece) kurar. 'Unless' (-medikçe) tersini söyler: gizlice yazabildiklerinde dürüst olmazlardı. 'Even if' (-se bile) gizliliği dürüstlüğün önünde bir engel gibi gösterir; oysa gizlilik dürüst cevabı kolaylaştırır. 'So that' (-sın diye) anlamsız bir amaç kurar. 'Whether' ise 'or not' olmadan bu yapıda kullanılmaz." },
  { id: 'sb-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['dissent'],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: "---- her colleagues' advice to keep quiet, the junior engineer openly expressed her dissent at the meeting and asked for the plan to be reviewed.",
    options: ['In line with', 'Owing to', 'Contrary to', 'On behalf of', 'By means of'], answer: 2,
    explain: "Meslektaşları ona sessiz kalmasını öğütlemiş, ama genç mühendis toplantıda karşı görüşünü açıkça dile getirmiş; yani öğüdün tersini yapmış. Bunu 'contrary to' (-e aykırı olarak) anlatır; 'contrary to advice' sık kullanılan bir öbektir. 'In line with' (-e uygun olarak) öğüde uyduğunu söylerdi; oysa sessiz kalmadı. 'Owing to' (yüzünden) öğüdü konuşmasının nedeni yapar. 'On behalf of' (adına) ve 'by means of' (aracılığıyla) bir öğütle anlam kurmaz." },

  { id: 'sb-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['nicelik'],
    q: 'When a manager later spoke one by one with the employees who had kept quiet during a tense meeting, ---- them admitted that they had privately disagreed with the plan, while the remaining third or so said that they had no strong opinion either way.',
    options: ['most of', 'almost all of', 'only a few of', 'most', 'almost'], answer: 0,
    explain: "Boşluktan sonra bir zamir ('them') geliyor; nicelik sözcüğü (quantifier) zamirden önce 'of' ister: 'most of them' (onların çoğu). Cümlenin sonu ('the remaining third or so', geri kalan üçte bir kadarı) içten içe karşı çıkanların aşağı yukarı üçte iki olduğunu söylüyor; bu da 'çoğu'dur. 'Almost all of' 'hemen hepsi' der; üçte birlik bir kalanla çelişir. 'Only a few of' 'yalnızca birkaçı' der; üçte iki birkaç kişi değildir. 'Most them' yapıca yanlış: zamirden önce 'of' gerekir. 'Almost' bir zarftır ve 'neredeyse' demektir; tek başına bir zamirin ya da ismin önüne gelmez ('almost all of them' olurdu)." },

  // ---------- cümle tamamlama ----------
  { id: 'sb-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['resist'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although most of us like to believe that we would resist pressure from a group, ----.',
    options: [
      'we also tend to see ourselves as more independent than the average person',
      'independence is one of the qualities that people say they value most highly',
      'studies suggest that we often adjust our views to match those around us',
      'people who stand up to a majority are usually the heroes of films and novels',
      'this belief tends to grow stronger as people become older and more confident',
    ], answer: 2,
    explain: "'Although' karşıtlık ister: çoğumuz grup baskısına direneceğimize inanmak isteriz, ama araştırmalar görüşlerimizi çevremizdekilere sık sık uydurduğumuzu gösteriyor. Kendimizi ortalama bir insandan daha bağımsız görmek, bağımsızlığa çok değer vermek ve çoğunluğa kafa tutanların film ve roman kahramanı olması ilk yarıyla çelişmiyor, onu destekliyor. İnancın yaşla güçlendiğini söyleyen seçenek de ilk yarıyı yalnızca sürdürüyor; karşıtlık kurmuyor." },
  { id: 'sb-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['peer'],
    level: 'zor', cefr: 'C1', konu: ['karşıtlık'],
    q: '----, many of them find it hard to say no when their peers suggest doing something reckless.',
    options: [
      'Even though most teenagers spend more time with friends than with their families',
      'Because the dangers of reckless behaviour are often explained to teenagers at school',
      'Unless teenagers are in the company of people their own age',
      'Although most teenagers can tell perfectly well when an activity is dangerous',
      'While most teenagers care a great deal about what their friends think of them',
    ], answer: 3,
    explain: "Ana cümle gençlerin birçoğunun, akranları tehlikeli bir şey önerdiğinde hayır demekte zorlandığını söylüyor. Bununla karşıtlık kuran seçenek, gençlerin bir etkinliğin tehlikeli olduğunu gayet iyi anlayabildiğini söyleyen 'although' cümlesidir: tehlikeyi biliyorlar ama yine de hayır diyemiyorlar. 'Even though' ve 'while' da karşıtlık bağlacıdır; ama arkadaşlarla daha çok vakit geçirmek ve arkadaşlarının kendileri hakkında ne düşündüğünü önemsemek ana cümleyle çelişmez, olsa olsa onu açıklar. 'Because' ile verilen neden (tehlikelerin okulda anlatılması) hayır diyememeyi açıklamaz. 'Unless' çelişki doğurur: akranların önerisi zaten yaşıtlarla birlikteyken gelir." },

  // ---------- çeviri ----------
  { id: 'sb-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['isim-fiil ve mastar'],
    q: 'Knowing that most of their classmates have already signed a petition can make students more willing to sign it themselves.',
    options: [
      'Öğrencilerin bir dilekçeyi çoktan imzalamış olması, sınıf arkadaşlarının çoğunu da onu imzalamaya daha istekli kılabilir.',
      'Sınıf arkadaşlarının çoğu bir dilekçeyi çoktan imzaladığı için öğrenciler de onu ister istemez imzalamak zorunda kalabilir.',
      'Sınıf arkadaşlarının çoğunun bir dilekçeyi henüz imzalamadığını bilmek, öğrencileri onu imzalamaya daha istekli kılabilir.',
      'Sınıf arkadaşlarının çoğunun bir dilekçeyi çoktan imzaladığını bilmek, öğrencilerin onu imzalama kararını pek etkilemeyebilir.',
      'Sınıf arkadaşlarının çoğunun bir dilekçeyi çoktan imzaladığını bilmek, öğrencileri kendileri de imzalamaya daha istekli kılabilir.',
    ], answer: 4,
    explain: "'Knowing that …' cümlenin öznesi olan isim-fiildir: '… imzaladığını bilmek'. 'Make students more willing to sign it themselves' öğrencileri kendileri de imzalamaya daha istekli kılmaktır; 'can' olasılık katar (kılabilir). 'Most of their classmates' sınıf arkadaşlarının çoğudur. Yanlışlardan biri etkinin yönünü tersine çeviriyor (öğrenciler arkadaşlarını etkiliyor), biri 'daha istekli'yi 'zorunda kalmak'a çeviriyor, biri dilekçenin imzalanmadığını söylüyor, biri de bu bilginin kararı pek etkilemeyebileceğini söylüyor." },
  { id: 'sb-c2', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['isim cümleciği'],
    q: 'Bir toplantıda kimsenin itiraz etmemesi, herkesin aynı fikirde olduğu anlamına gelmez.',
    options: [
      'If nobody objects at a meeting, it usually means that everyone agrees.',
      'The fact that nobody objects at a meeting does not mean that everyone agrees.',
      'The fact that everyone agrees at a meeting does not mean that nobody objects.',
      'The fact that few people object at a meeting does not mean that most people agree.',
      'Nobody objects at a meeting because they assume that everyone else agrees.',
    ], answer: 1,
    explain: "Türkçe cümlenin öznesi bir isim cümleciği: 'kimsenin itiraz etmemesi' (the fact that nobody objects). Yüklem de ikinci bir isim cümleciği alıyor: 'herkesin aynı fikirde olduğu' (that everyone agrees). Doğru çeviri iki cümleciği ve olumsuzluğu korur. Yanlışlardan biri anlamı tersine çeviriyor (itiraz yoksa herkes hemfikirdir), biri iki cümleciğin yerini değiştiriyor, biri 'kimse'yi 'az kişi'ye, 'herkes'i 'çoğu kişi'ye çeviriyor, biri de Türkçede olmayan bir neden ekliyor." },

  // ---------- okuma parçası (3 soru, YÖKDİL biçimi) ----------
  { id: 'sb-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['conform', 'yield', 'blatantly'],
    level: 'orta', cefr: 'B2', title: 'Çizgiler ve çoğunluk',
    text: "In the early 1950s, the psychologist Solomon Asch, then at Swarthmore College in the United States, invited male college students to take part in what they were told was a test of visual perception. Each student sat with a group of other young men and was shown two cards: one with a single line, the other with three lines of clearly different lengths. The task was to say aloud which of the three matched the first, and people who did it on their own almost never made a mistake. What the student did not know was that everyone else in the group had been instructed by the experimenter beforehand. On 12 of the 18 trials, these confederates all gave the same, blatantly wrong answer. Roughly three quarters of the real participants conformed to the majority at least once. Yet only about a third of their answers on these trials were wrong, and about a quarter of the participants never yielded at all. In a later version, Asch found that conformity dropped sharply when just one confederate gave the correct answer. Since then, the study has been repeated many times. A 1996 review of 133 such studies found that the level of conformity varied with time and place: it tended to be higher in collectivist cultures, which place great value on group harmony, and appeared to have fallen in the United States since the 1950s.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, conformity dropped sharply in a later version of the study when ----.',
        options: [
          'the study was carried out in a culture that values group harmony',
          'a single confederate broke with the others and gave the right answer',
          'the lines on the two cards were made more similar in length',
          'the participants were told in advance what the study was really about',
          'the experimenter stayed in the room to watch the participants closely',
        ], answer: 1,
        explain: "Parçaya göre Asch sonraki bir sürümde, iş birlikçilerden yalnız biri doğru cevabı verdiğinde uymanın keskin biçimde düştüğünü buldu ('conformity dropped sharply when just one confederate gave the correct answer'). Grup uyumuna değer veren kültürlerde uyma düşmedi; parçaya göre tersine, daha yüksekti. Çizgilerin birbirine yaklaştırılması, katılımcılara amacın önceden söylenmesi ve deneycinin odada kalması parçada geçmiyor." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that the mistakes participants made when they were in the group ----.',
        options: [
          'were mostly made by the students who answered first',
          'would have increased if one confederate had given the right answer',
          'were not caused by the difficulty of the task itself',
          'were less frequent than in later studies carried out in the United States',
          'occurred on every one of the eighteen trials',
        ], answer: 2,
        explain: "Parçaya göre bu işi tek başına yapanlar neredeyse hiç yanılmadı ve çizgilerin uzunlukları açıkça farklıydı. Demek ki grupta yapılan yanlışlar görevin zorluğundan kaynaklanmıyordu. Cevap sırası parçada geçmiyor. Bir iş birlikçinin doğru cevap vermesi yanlışları artırmadı, azalttı. ABD'de uyma 1950'lerden bu yana düşmüş görünüyor; yani Asch'ın deneyindeki yanlışlar sonraki ABD çalışmalarındakinden daha seyrek değil, daha sık olmalı. Yanlışlar 18 denemenin hepsinde değil, iş birlikçilerin yanlış cevap verdiği 12 denemede yapılabilirdi." },
      { konu: ['ana fikir'],
        q: 'The passage is mainly concerned with ----.',
        options: [
          'a classic study of conformity and how later research has built on it',
          'the reasons why people in collectivist cultures value group harmony so highly',
          'the methods that psychologists use to test how well people judge length',
          'evidence that people will always give in to a majority, whatever the task',
          'the ethical problems of deceiving the participants in psychology experiments',
        ], answer: 0,
        explain: "Parça Asch'ın deneyini (düzeni, sonuçları, sonraki bir sürümü) anlatıyor, sonra deneyin pek çok kez tekrarlandığını ve uymanın yere ve döneme göre değiştiğini söylüyor: ünlü bir uyma çalışması ve sonraki araştırmaların onu nasıl geliştirdiği. Toplulukçu kültürler yalnız son cümlede geçiyor; neden uyuma değer verdikleri açıklanmıyor. Uzunluk algısını ölçmek deneyin yalnız kılıfı. İnsanların her zaman çoğunluğa uyduğu ise parçayla çelişiyor: katılımcıların yaklaşık dörtte biri hiç uymadı. Katılımcıları aldatmanın etik sorunları parçada ele alınmıyor." },
    ] },

  // ---------- diyalog tamamlama ----------
  { id: 'sb-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['reluctant', 'go along with'],
    level: 'kolay', cefr: 'B2', konu: ['bağlam'],
    q: "Elif: How did the meeting about the group project go?\nBurak: Fine. Everyone loved Mert's idea of doing a survey in the cafeteria, so we're going with that.\nElif: You sound a bit reluctant, though.\nBurak: ----\nElif: Then why did you go along with it? You should tell the others what you really think.",
    options: [
      'Not at all. In fact, I was the one who suggested using the cafeteria.',
      'Honestly, I think his questions are too vague to give us useful results.',
      "I'm just tired. I stayed up until three finishing my history essay.",
      "Do I? Maybe it's because the meeting went on for nearly two hours.",
      "Am I? I'm actually looking forward to interviewing the other students.",
    ], answer: 1,
    explain: "Elif, Burak'ın isteksiz göründüğünü söylüyor; Burak'ın cevabından sonra da 'O hâlde neden razı oldun? Ötekilere gerçekte ne düşündüğünü söylemelisin' diyor. Demek ki Burak fikri beğenmediğini söylemiş olmalı: anketin sorularını yararlı sonuç vermeyecek kadar belirsiz buluyor. Yorgunluk ve toplantının uzunluğu isteksizliği açıklıyor ama fikre karşı olduğunu söylemiyor. Fikri kendisinin önerdiğini ya da görüşmeleri dört gözle beklediğini söyleyen cevaplardan sonra 'neden razı oldun' sorusu anlamsız kalır." },

  // ---------- paragraf tamamlama ----------
  { id: 'sb-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['conform'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'In one series of experiments, the psychologist Solomon Asch changed the number of people who gave the wrong answer. When a participant faced only one person who disagreed with him, he was hardly affected and nearly always trusted his own eyes. ----. Beyond that point, however, making the majority larger had little further effect, and even much bigger groups produced about the same level of conformity.',
    options: [
      'In everyday life, people are seldom surrounded by strangers who all disagree with them',
      'The confederates, of course, had been told in advance exactly which answer to give',
      'With two such people he gave in more often, and with three, conformity neared its peak',
      'The more people there were in the majority, the more often participants went along with it',
      'He then repeated exactly the same procedure with groups of several different sizes',
    ], answer: 2,
    explain: "Boşluktan sonraki cümle 'Beyond that point' (o noktadan sonra) diye bir sınıra gönderme yapıyor ve 'however' ile karşıtlık kuruyor: çoğunluğu büyütmek bundan sonra pek bir şey değiştirmedi. Demek ki boşlukta uymanın bir noktaya kadar arttığı söylenmeli: iki kişiyle katılımcı daha sık boyun eğdi, üç kişiyle uyma en yüksek düzeyine yaklaştı. 'Çoğunluk büyüdükçe uyma da arttı' diyen seçenek bir sınır vermiyor ve sonraki cümleyle çelişiyor. Gündelik hayat, iş birlikçilere verilen talimat ve farklı büyüklükte gruplarla tekrar seçenekleri de 'that point' için bir nokta vermiyor." },

  // ---------- akışı bozan cümle ----------
  { id: 'sb-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['ambiguous', 'ridicule', 'deviate'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'When a situation is ambiguous, people often rely on others to help them decide what is really happening.',
      'In the 1930s, the psychologist Muzafer Sherif showed this by placing people in a completely dark room with a single, stationary point of light.',
      'With nothing nearby to compare it with, such a light seems to move, and people tested on their own gave widely different estimates of how far it had travelled.',
      'Fear of ridicule is another reason why people may keep their real opinions to themselves.',
      'When they later judged the light together in small groups, however, their estimates gradually converged, and few of them deviated from the shared norm that emerged.',
    ], answer: 3,
    explain: "Parça, belirsiz durumlarda insanların başkalarına dayandığını söylüyor ve bunu Muzaffer Şerif'in karanlık oda deneyiyle örnekliyor: deneyin düzeni (II), ışığın neden hareket ediyor gibi göründüğü ve tek başına verilen farklı tahminler (III), grupta tahminlerin birleşmesi (V). IV. cümle alay edilme korkusunu, yani başka bir uyma nedenini anlatıyor ve deneyin anlatımını bölüyor. V. cümledeki 'however', III. cümledeki tek başına verilen farklı tahminlere bağlanıyor, IV. cümleye değil." },
];

export default { id: 'sosyal-baski', course: C, title: U, order: 2, cards, items };
