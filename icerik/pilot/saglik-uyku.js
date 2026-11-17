// iDil pilot › Sağlık bilimleri › Uyku ve beyin.
// Tümü özgün: Claude yazdı (12 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Okuma parçasındaki bilimsel bilgiler: Iliff ve ark. 2012, Xie ve ark. 2013, Miao ve ark. 2024 (yalnız olgular; metin özgün).
// 13 Kasım 2026 eklemeleri (su-g3, su-t2, su-p1): alkolün uykuya etkisi ve uyku döngüleri, REM uykusu üzerine genel ve
// yerleşik olgular; metin özgün.

const T = 'taslak';
const C = 'saglik';
const U = 'Uyku ve beyin';

const cards = [
  { code: 'deprive', title: 'yoksun bırakmak', pos: 'fiil', cefr: 'C1', ipa: '/dɪˈpraɪv/',
    text: "'deprive somebody of something' kalıbıyla kullanılır; 'of' edatını unutma. 'Sleep-deprived' (uykusuz kalmış) sağlık metinlerinde sık geçer.",
    example: 'The experiment deprived the volunteers of sleep for two nights.',
    exampleTr: 'Deney, gönüllüleri iki gece boyunca uykudan yoksun bıraktı.',
    synonyms: ['deny', 'take away'], family: ['deprivation', 'deprived'] },
  { code: 'impair', title: 'bozmak, zayıflatmak (bir yetiyi, işlevi)', pos: 'fiil', cefr: 'C1', ipa: '/ɪmˈpeə(r)/',
    text: "Bir yeti ya da işlevle kullanılır: impair memory, impair vision. Sıfatı 'impaired': hearing-impaired (işitme engelli).",
    example: 'Alcohol impairs judgement long before a person feels drunk.',
    exampleTr: 'Alkol, kişi kendini sarhoş hissetmeden çok önce muhakemeyi bozar.',
    synonyms: ['damage', 'weaken'], family: ['impairment', 'impaired'] },
  { code: 'drowsy', title: 'uykulu, uyku basmış', pos: 'sıfat', cefr: 'B2', ipa: '/ˈdraʊzi/',
    text: "Hafif uyku hâlini anlatır; 'sleepy' ile yakın anlamlı. İlaç prospektüslerinde ve sağlık metinlerinde sık geçer.",
    example: 'The medicine may make you drowsy, so do not drive after taking it.',
    exampleTr: 'Bu ilaç uyku hâli yapabilir; aldıktan sonra araç kullanmayın.',
    synonyms: ['sleepy'], family: ['drowsiness'] },
  { code: 'consolidate', title: 'pekiştirmek, sağlamlaştırmak', pos: 'fiil', cefr: 'C1', ipa: '/kənˈsɒlɪdeɪt/',
    text: "Sağlık metinlerinde 'memory consolidation' (belleğin pekişmesi) öbeğiyle geçer. Ekonomide 'birleştirmek' anlamı da var.",
    example: 'Sleep helps the brain consolidate what we have learned during the day.',
    exampleTr: 'Uyku, beynin gün içinde öğrendiklerimizi pekiştirmesine yardım eder.',
    synonyms: ['strengthen', 'reinforce'], family: ['consolidation'] },
  { code: 'chronic', title: 'kronik, süreğen', pos: 'sıfat', cefr: 'B2', ipa: '/ˈkrɒnɪk/',
    text: "Karşıtı 'acute' (akut, ani başlayan). Zarfı 'chronically': chronically ill, chronically short of sleep.",
    example: "Chronic pain can affect a person's mood as well as their sleep.",
    exampleTr: 'Kronik ağrı, kişinin uykusu kadar ruh hâlini de etkileyebilir.',
    synonyms: ['persistent', 'long-lasting'], family: ['chronically'] },
  { code: 'accumulate', title: 'birikmek; biriktirmek', pos: 'fiil', cefr: 'B2', ipa: '/əˈkjuːmjəleɪt/',
    text: "Hem 'birikmek' hem 'biriktirmek' anlamında kullanılır: proteins accumulate / accumulate wealth. Adı 'accumulation'.",
    example: 'Dust had accumulated on the shelves while the house was empty.',
    exampleTr: 'Ev boşken raflarda toz birikmişti.',
    synonyms: ['build up', 'gather'], family: ['accumulation'] },
  { code: 'clearance', title: 'temizlenme, vücuttan atılma; izin', pos: 'isim', cefr: 'C1', ipa: '/ˈklɪərəns/',
    text: "Tıpta bir maddenin vücuttan atılması anlamına gelir. Gündelik dilde 'izin, onay' anlamı da var: security clearance.",
    example: 'The kidneys play a key role in the clearance of drugs from the blood.',
    exampleTr: 'Böbrekler, ilaçların kandan temizlenmesinde önemli rol oynar.',
    synonyms: ['removal'], family: ['clear'] },
  { code: 'albeit', title: '-se de, -e rağmen; gerçi', pos: 'bağlaç', cefr: 'C1', ipa: '/ɔːlˈbiːɪt/',
    text: 'Ardından çoğu zaman tam cümle değil, kısa bir öbek gelir: albeit slowly, albeit with risks.',
    example: 'The plan was approved, albeit with some changes.',
    exampleTr: 'Plan, bazı değişikliklerle de olsa onaylandı.',
    synonyms: ['although', 'even though'], family: [] },
  { code: 'cautious', title: 'temkinli, dikkatli', pos: 'sıfat', cefr: 'B2', ipa: '/ˈkɔːʃəs/',
    text: "'be cautious about' ya da 'be cautious of' kalıbıyla kullanılır. Adı 'caution', zarfı 'cautiously'.",
    example: 'Doctors are cautious about prescribing sleeping pills for long periods.',
    exampleTr: 'Doktorlar, uyku ilaçlarını uzun süreli yazma konusunda temkinlidir.',
    synonyms: ['careful', 'wary'], family: ['caution', 'cautiously'] },
  { code: 'fragmented', title: 'bölük pörçük, parçalı', pos: 'sıfat', cefr: 'C1', ipa: '/fræɡˈmentɪd/',
    text: "Sık sık kesilen, bütünlüğü bozulmuş: fragmented sleep (bölük pörçük uyku). Fiili 'fragment' (parçalanmak), adı 'fragmentation'.",
    example: 'After the twins were born, her sleep was fragmented for months.',
    exampleTr: 'İkizler doğduktan sonra uykusu aylarca bölük pörçük kaldı.',
    synonyms: ['broken', 'disrupted'], family: ['fragment', 'fragmentation'] },
  { code: 'paralyse', title: 'felç etmek; işlemez hâle getirmek', pos: 'fiil', cefr: 'C1', ipa: '/ˈpærəlaɪz/',
    text: "Amerikan yazımı 'paralyze'. Mecaz anlamda bir kenti ya da bir sistemi durma noktasına getirmek demektir. Adı 'paralysis' (felç).",
    example: "Heavy snow paralysed the city's transport network for two days.",
    exampleTr: 'Yoğun kar, kentin ulaşım ağını iki gün boyunca felç etti.',
    synonyms: ['immobilise'], family: ['paralysis', 'paralysed'] },
  { code: 'attribute', title: '(bir sonucu bir nedene) bağlamak, yormak', pos: 'fiil', cefr: 'C1', ipa: '/əˈtrɪbjuːt/',
    text: "'attribute A to B' kalıbıyla kullanılır: A'nın nedeni olarak B'yi göstermek. İsim olarak vurgu başa kayar: an attribute /ˈætrɪbjuːt/ (nitelik).",
    example: 'The doctors attributed her quick recovery to the new treatment.',
    exampleTr: 'Doktorlar onun çabuk iyileşmesini yeni tedaviye bağladı.',
    synonyms: ['put down to', 'ascribe'], family: ['attribution'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'su-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['deprive', 'paralyse'],
    level: 'orta', cefr: 'B2', konu: ['fiil', 'edatlı kalıp'],
    q: 'People who are regularly ---- of sleep tend to make more mistakes at work, even when they do not feel particularly sleepy.',
    options: ['relieved', 'convinced', 'deprived', 'paralysed', 'accused'], answer: 2,
    explain: "'Deprive somebody of something' bir şeyden yoksun bırakmak demektir; 'deprived of sleep' uykusuz kalmış kişiyi anlatır. Üç çeldirici de 'of' alır ama anlam tutmaz: relieved of (bir yükten kurtulmuş), convinced of (-e ikna olmuş), accused of (-le suçlanan). 'Paralysed' (felç olmuş) ise 'of' almaz; 'uyku felci' çağrışımı yanıltmasın." },
  { id: 'su-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['impair', 'drowsy', 'consolidate'],
    level: 'orta', cefr: 'C1', konu: ['fiil'],
    q: 'Even a single night of poor sleep can ---- our ability to concentrate, which is one reason why drowsy driving is so dangerous.',
    options: ['restore', 'impair', 'enhance', 'consolidate', 'inspire'], answer: 1,
    explain: "Cümlenin sonu (uykulu araç kullanmanın tehlikesi) olumsuz bir etki istiyor: 'impair' bir yeteneği bozmak, zayıflatmak demektir. Restore (geri kazandırmak), enhance (artırmak), consolidate (pekiştirmek) ve inspire (ilham vermek) olumlu anlamlıdır; cümlenin mantığıyla çelişir. Uyku belleği pekiştirir (consolidate), ama burada kötü bir uykunun etkisi soruluyor." },

  // ---------- dil bilgisi ----------
  { id: 'su-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['isim-fiil ve mastar'],
    q: 'Participants who had given up ---- coffee a week before the study were more likely ---- asleep within twenty minutes.',
    options: ['to drink / falling', 'drinking / falling', 'drinking / to fall', 'to drink / to fall', 'drink / fall'], answer: 2,
    explain: "'Give up' (bırakmak) ardından -ing alır: given up drinking. 'Be likely' ise mastar ister: likely to fall asleep. Öteki eşleşmelerin her birinde en az bir yapı kurulamaz: 'given up to drink', 'likely falling' ve yalın 'drink / fall' dil bilgisi açısından yanlıştır." },
  { id: 'su-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['cautious'],
    level: 'kolay', cefr: 'B1', konu: ['bağlaç', 'karşıtlık'],
    q: '---- the evidence from animal studies is strong, researchers remain cautious about applying the findings to humans.',
    options: ['Although', 'Despite', 'Since', 'Provided that', 'In order that'], answer: 0,
    explain: "Boşluktan sonra özneli, yüklemli tam bir cümle var (the evidence ... is strong) ve iki cümle arasında karşıtlık var: kanıt güçlü ama araştırmacılar temkinli. Bunu 'although' kurar. 'Despite' ardından isim ister (despite the strong evidence). Since (çünkü), provided that (koşuluyla) ve in order that (amacıyla) anlamı bozar." },

  { id: 'su-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['attribute'],
    level: 'orta', cefr: 'B2', konu: ['edat', 'çok sözcüklü edat'],
    q: 'The volunteers who slept for four hours a night and those who slept for eight were closely matched ---- age, weight and general health, so any differences in their memory scores could be attributed to how long they slept.',
    options: ['in terms of', 'on account of', 'regardless of', 'in addition to', 'with the exception of'], answer: 0,
    explain: "'In terms of' (… bakımından) grupların hangi açılardan denk tutulduğunu söyler: yaş, kilo ve genel sağlık bakımından. Cümlenin sonu da bunu gerektiriyor: gruplar bu açılardan denk olduğu için bellekteki fark uyku süresine bağlanabiliyor. 'With the exception of' (… dışında) grupların tam bu açılardan farklı olduğunu, 'regardless of' (… ne olursa olsun) bu özelliklerin hiç hesaba katılmadığını söylerdi; ikisinde de fark uykuya bağlanamaz. 'On account of' (… yüzünden) ve 'in addition to' (… -e ek olarak) burada anlam kurmaz." },

  { id: 'su-g4', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['drowsy'],
    level: 'zor', cefr: 'C1', konu: ['devrik koşul cümlesi'],
    q: '---- drowsy during a long drive, the best advice is to stop somewhere safe and take a short nap, since opening a window or turning up the radio is unlikely to keep anyone alert for long.',
    options: ['Had a driver felt', 'Were a driver to feel', 'If should a driver feel', 'Should a driver feel', 'Should a driver feels'], answer: 3,
    explain: "Sonuç tarafı şimdiki zamanda bir öneri (the best advice is): gerçek ve olası bir durum, yani birinci tip koşul. 'If'in düştüğü resmî birinci tip koşul, yani devrik koşul (inverted conditional), 'should' + özne + yalın fiil ile kurulur: 'Should a driver feel drowsy' (sürücü olur da uzun bir yolculukta uykulu hissederse). Burada 'should' '-meli' demek değildir. 'Should a driver feels' kipten sonra fiile -s eklemiş; kipten sonra fiil yalın kalır. 'Had a driver felt' üçüncü tip koşuldur: geçmişte olmamış bir durumu anlatır ve sonuç tarafında 'would have' + V3 ister. 'Were a driver to feel' uzak bir olasılık kurar ve sonuç tarafında 'would' ister. İkisi de 'is' ile kurulan bugünkü öneriye uymaz. 'If should a driver feel' 'if'i ve devriği birlikte kullanır; devrik koşulda 'if' düşer." },

  // ---------- cümle tamamlama ----------
  { id: 'su-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['consolidate'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although sleep takes up roughly a third of our lives, ----.',
    options: [
      'most adults need between seven and nine hours of it every night',
      'it plays a vital role in the consolidation of memories',
      'it is closely linked to our mood and energy during the day',
      'scientists still disagree about what its main purpose is',
      'whether it helps the brain remove waste was first studied in mice',
    ], answer: 3,
    explain: "'Although' karşıtlık ister: uyku hayatımızın üçte birini kaplıyor ama bilim insanları amacında hâlâ anlaşamıyor. Öteki seçenekler uykuyla ilgili bilgiler veriyor ama ilk cümleyle karşıtlık kurmuyor; günde yedi-dokuz saat uyku gibi bilgiler ilk cümleyi destekliyor bile." },

  { id: 'su-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['drowsy', 'fragmented'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Even though alcohol can make people drowsy and help them fall asleep more quickly, ----.',
    options: [
      'it may also help them to stay asleep until the morning',
      'many people have a glass of wine in the evening in order to relax after a long day',
      'this is why doctors often recommend it to patients who have trouble sleeping',
      'it tends to make sleep lighter and more fragmented in the second half of the night',
      'people who drink regularly often say that it helps them unwind after work',
    ], answer: 3,
    explain: "'Even though' karşıtlık ister: alkol uyku getirip uykuya dalmayı hızlandırabilir, ama gecenin ikinci yarısında uykuyu hafifletir ve bölük pörçük eder. Sabaha kadar uyumaya da yardım ettiğini söyleyen seçenek karşıtlık değil ekleme kurar. Akşam gevşemek için şarap içmek ve düzenli içenlerin alkolün rahatlattığını söylemesi ilk yarıyı destekler. 'This is why' ile başlayan seçenek karşıtlık yerine sonuç bildirir; üstelik doktorlar uykusuzluğa çare olarak alkol önermez." },

  // ---------- çeviri ----------
  { id: 'su-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma', 'temkinli dil'],
    q: 'Studies suggest that people who sleep less than six hours a night are more likely to catch a cold than those who sleep longer.',
    options: [
      'Araştırmalara göre gecede altı saatten fazla uyuyanlar, daha az uyuyanlara göre daha sık soğuk algınlığına yakalanıyor.',
      'Araştırmalar, gecede en az altı saat uyumanın, daha uzun uyumaya gerek kalmadan soğuk algınlığını önlemeye yettiğini gösteriyor.',
      'Araştırmalar, gecede altı saatten az uyuyanların daha uzun uyuyanlar kadar sık soğuk algınlığına yakalandığını gösteriyor.',
      'Gecede altı saatten az uyuyanların, daha uzun uyuyanlara göre soğuk algınlığına mutlaka yakalanacağı araştırmalarla kesin olarak kanıtlanmıştır.',
      'Araştırmalar, gecede altı saatten az uyuyanların soğuk algınlığına yakalanma olasılığının daha uzun uyuyanlardan yüksek olduğuna işaret ediyor.',
    ], answer: 4,
    explain: "Doğru çeviri üç şeyi korur: 'suggest' (işaret etmek; kesinlik yok), 'less than six hours' (altı saatten az) ve karşılaştırma (daha uzun uyuyanlara göre daha olası). Yanlışlardan biri karşılaştırmayı tersine çeviriyor, biri 'kadar sık' diyerek eşitlik kuruyor, biri bambaşka bir sonuç söylüyor, biri de 'kesin olarak kanıtlanmıştır' diyerek temkinli dili yok sayıyor." },

  // ---------- okuma parçası (4 soru) ----------
  { id: 'su-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['accumulate', 'clearance', 'albeit'],
    level: 'zor', cefr: 'C1', title: 'Uyku ve beynin temizliği',
    text: "Every cell in the body produces waste, and the brain, which uses about a fifth of the body's energy, produces a great deal of it. Elsewhere in the body, the lymphatic system carries such waste away, but brain tissue itself contains no lymphatic vessels. In 2012, a research team proposed an answer to this puzzle: cerebrospinal fluid, they argued, flows along the spaces around blood vessels and washes through brain tissue, carrying waste with it. A year later, the same group reported that in sleeping mice the gaps between brain cells widened considerably, allowing the fluid to flow more freely. As a result, waste products, including proteins that accumulate in Alzheimer's disease, were removed about twice as fast as in awake mice. The findings attracted wide attention because they seemed to offer a simple answer to the old question of why we sleep. Since then, however, the picture has become less clear. In 2024, another team, using different methods, found that clearance in mice actually slowed down during sleep. Both kinds of experiment are technically difficult, and mouse brains differ from human brains in important ways. For now, the idea that sleep cleans the brain remains promising, albeit unproven.",
    steps: [
      { konu: ['ana fikir'],
        q: 'The passage is mainly concerned with ----.',
        options: [
          'the reasons why mice sleep more than humans do',
          'a proposed explanation for why we sleep and the doubts later raised about it',
          'the discovery of lymphatic vessels inside brain tissue and what this means for medicine',
          "the methods doctors use to slow the progress of Alzheimer's disease in older patients",
          'the amount of energy the brain uses while we sleep compared with when we are awake',
        ], answer: 1,
        explain: 'Parça önce uykunun beyni temizlediği fikrini ve dayandığı deneyleri anlatıyor, sonra 2024 çalışmasıyla bu fikrin sorgulandığını söylüyor. Farelerin uyku süresi, tedavi yöntemleri ve uykudaki enerji kullanımı parçada ele alınmıyor. Lenf damarı seçeneği parçayla çelişiyor: beyin dokusunda lenf damarı olmadığı söyleniyor.' },
      { konu: ['ayrıntı'],
        q: 'According to the passage, the study published a year after the 2012 proposal showed that, in sleeping mice, ----.',
        options: [
          'cerebrospinal fluid stopped flowing through the brain',
          'the brain produced less waste than in awake mice',
          'the spaces between brain cells became wider',
          'new lymphatic vessels formed around blood vessels',
          "proteins linked to Alzheimer's disease were produced more quickly",
        ], answer: 2,
        explain: "Parçaya göre ikinci çalışmada uyuyan farelerde beyin hücreleri arasındaki boşluklar belirgin biçimde genişledi ('the gaps between brain cells widened considerably'). Sıvının akışı durmadı, kolaylaştı. Atığın daha az üretildiği ya da yeni damar oluştuğu söylenmiyor. Proteinler daha hızlı üretilmedi, daha hızlı temizlendi." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that the 2024 study ----.',
        options: [
          'was carried out on human volunteers rather than on mice',
          'confirmed that sleep doubles the speed of waste removal',
          'proved that the brain produces no waste during sleep',
          'reached a conclusion that conflicts with the earlier findings',
          "showed that Alzheimer's disease is caused by a lack of sleep",
        ], answer: 3,
        explain: '2024 çalışması uyku sırasında temizliğin hızlanmadığını, tersine yavaşladığını buldu; yani önceki bulgularla çelişen bir sonuca ulaştı. Çalışma farelerle yapıldı, insanlarla değil. Temizliğin iki kat hızlandığı önceki çalışmanın bulgusudur. Öteki iki seçenek parçada hiç geçmiyor.' },
      { konu: ['yazarın tutumu'],
        q: "Which of the following best describes the author's view of the idea that sleep cleans the brain?",
        options: [
          'It has been shown to be false by recent studies.',
          'It is accepted by all scientists working in the field.',
          'It applies to mice but certainly not to humans.',
          'It has been largely confirmed, although some details remain unclear.',
          'It deserves attention but has not yet been confirmed.',
        ], answer: 4,
        explain: "Son cümle yazarın görüşünü veriyor: fikir umut verici ama kanıtlanmamış ('promising, albeit unproven'). Yazar fikrin çürütüldüğünü ya da herkesçe kabul edildiğini söylemiyor. 'Büyük ölçüde doğrulandı' da demiyor; tersine, 2024 bulgusu öncekilerle çelişiyor. İnsanlar için 'kesinlikle geçersiz' de demiyor; yalnız fare beyninin farklı olduğunu hatırlatıyor." },
    ] },

  // ---------- paragraf tamamlama ----------
  { id: 'su-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['paralyse'],
    level: 'orta', cefr: 'C1', konu: ['gönderim', 'akış'],
    q: "Sleep is not a single, uniform state. Over the course of a night, the brain passes through a series of cycles, each lasting roughly ninety minutes. ----. During this stage, the eyes dart back and forth beneath closed eyelids, and the brain becomes almost as active as it is when we are awake. At the same time, most of the body's muscles are temporarily paralysed, which may prevent us from acting out our dreams.",
    options: [
      "In the first half of the night, these cycles contain long periods of deep sleep, when the brain's activity slows down markedly",
      'Each cycle usually ends with a stage known as REM sleep, when most vivid dreams occur',
      'Many people find it harder to sleep well on their first night in an unfamiliar place, such as a hotel room',
      "Researchers study these cycles by recording the brain's electrical activity through small sensors placed on the scalp",
      'The total amount of sleep a person needs tends to decrease from infancy to adulthood',
    ], answer: 1,
    explain: "Boşluktan sonraki cümle 'During this stage' diye bir evreye gönderme yapıyor: bu evrede gözler kapalı göz kapaklarının altında hızla hareket ediyor, beyin neredeyse uyanıkken olduğu kadar etkin. Bu, her döngünün REM uykusuyla bittiğini söyleyen cümleye bağlanır; son cümledeki rüyalar da bunu doğruluyor. Derin uyku seçeneği de bir evre tanıtıyor ama o evrede beynin etkinliği yavaşlıyor; sonraki cümleyle çelişir. Yabancı yerde uyumak, beyin etkinliğinin kaydedilmesi ve yaşla azalan uyku ihtiyacı 'this stage' için bir evre vermiyor." },

  // ---------- akışı bozan cümle ----------
  { id: 'su-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['chronic'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      "During adolescence, the body's internal clock shifts, so teenagers naturally start to feel sleepy later at night than younger children do.",
      'Yet most secondary schools start early in the morning, forcing many students to get up before their bodies are ready.',
      'As a result, a large proportion of teenagers attend classes while chronically short of sleep.',
      'Older adults, by contrast, often find that they wake up earlier than they would like.',
      'Some areas that have moved school start times later have reported better attendance and fewer road accidents involving teenage drivers.',
    ], answer: 3,
    explain: 'Parça ergenlerin iç saatinin kaymasını ve okulların erken başlamasının sonuçlarını anlatıyor. IV. cümle konuyu yaşlılara kaydırıyor ve ergenlerin uykusundan okul saatlerine uzanan akışı kesiyor. V. cümle, okul saatini geç başlatan yerlerin sonuçlarıyla ana konuya dönüyor.' },
];

export default { id: 'saglik-uyku', course: C, title: U, order: 1, cards, items };
