// iDil › Genel › Alışkanlıklar nasıl oluşur?
// Tümü özgün: Claude yazdı (13 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (yalnız olgular; metin özgün):
// - Maxwell Maltz, Psycho-Cybernetics (1960): hastaların bir değişikliğe (ameliyattan sonra yeni yüz, kaybedilen uzuv) alışması
//   için en az üç hafta kadar gerektiği gözlemi; sonraki anlatımlarda "en az"ın düşmesi ve "21 gün" sözünün yayılması (ga-z1).
// - Lally ve ark., University College London (2009, European Journal of Social Psychology): 96 gönüllü, her gün aynı durumda
//   yapılan yeni bir yeme, içme ya da egzersiz davranışı, 12 hafta; ortanca 66 gün, aralık 18–254 gün; önce hızlı artış, sonra
//   plato; tek bir günü kaçırmanın belirgin etkisi olmaması; basit davranışların daha çabuk kendiliğinden hâle gelmesi
//   (temkinli) (ga-o1).
// - Alışkanlığı ortam ipuçlarının tetiklemesi; taşınma, iş değiştirme gibi bağlam değişikliklerinin eski alışkanlıkları
//   gevşetmesi ve değişim için fırsat sunması (temkinli) (ga-c1, ga-c2, ga-b1).
// - Peter Gollwitzer (1999), "eğer … o zaman" planları: ne zaman ve nerede yapılacağı önceden belirlenen niyetlerin eyleme
//   dönüşme olasılığı daha yüksektir (ga-t2).
// Görev 20 (25 Kasım 2026): çeviri çeldiricileri biçim kestirmesine karşı yeniden kuruldu.

const T = 'taslak';
const C = 'genel';
const U = 'Alışkanlıklar nasıl oluşur?';

const cards = [
  { code: 'notoriously', title: 'kötü bir özelliğiyle herkesçe bilinen biçimde, adı çıkmış olarak', pos: 'zarf', cefr: 'C1', ipa: '/nəʊˈtɔːriəsli/',
    text: "Bir şeyin olumsuz bir özelliğiyle tanındığını anlatır; çoğunlukla bir sıfatın önüne gelir: notoriously difficult, notoriously unreliable. Sıfatı 'notorious' (adı kötüye çıkmış): a notorious criminal.",
    example: 'This stretch of coast is notoriously dangerous for swimmers.',
    exampleTr: 'Kıyının bu kesimi, yüzenler için tehlikeli olmasıyla nam salmıştır.',
    synonyms: ['infamously'], family: ['notorious', 'notoriety'] },
  { code: 'persist', title: 'sürmek, geçmemek; (bir şeyi) kararlılıkla sürdürmek', pos: 'fiil', cefr: 'C1', ipa: '/pəˈsɪst/',
    text: "İki kullanımı var: bir durum sürer (if the pain persists) ya da bir kişi bir şeyi bırakmadan sürdürür (persist with something). Sıfatı 'persistent' (inatçı, süreğen), adı 'persistence' (kararlılık, süreklilik).",
    example: 'If the pain persists for more than a few days, you should see a doctor.',
    exampleTr: 'Ağrı birkaç günden uzun sürerse doktora görünmelisiniz.',
    synonyms: ['continue', 'carry on'], family: ['persistent', 'persistence'] },
  { code: 'cue', title: 'işaret, ipucu (bir davranışı başlatan); (sahnede) sıra işareti', pos: 'isim', cefr: 'C1', ipa: '/kjuː/',
    text: "Psikolojide bir davranışı başlatan işarettir: environmental cues (ortam ipuçları). Tiyatroda oyuncuya sırasının geldiğini bildiren söz ya da harekettir; 'on cue' tam zamanında demektir.",
    example: 'For many smokers, the first coffee of the morning is a strong cue to light a cigarette.',
    exampleTr: 'Sigara içen pek çok kişi için sabahın ilk kahvesi, sigara yakmaya iten güçlü bir işarettir.',
    synonyms: ['signal', 'prompt'], family: [] },
  { code: 'deliberate', title: 'kasıtlı, bilerek yapılan; düşünülüp taşınılmış', pos: 'sıfat', cefr: 'B2', ipa: '/dɪˈlɪbərət/',
    text: "Bilinçli olarak, bir amaçla yapılanı anlatır: a deliberate decision. Zarfı 'deliberately' (bile bile). Fiil olarak /dɪˈlɪbəreɪt/ okunur ve 'uzun uzun düşünmek' demektir.",
    example: 'It was no accident: she made a deliberate choice to leave the meeting early.',
    exampleTr: 'Bu bir kaza değildi; toplantıdan erken ayrılmayı bilerek seçti.',
    synonyms: ['intentional', 'conscious'], family: ['deliberately', 'deliberation'] },
  { code: 'effortlessly', title: 'zahmetsizce, hiç zorlanmadan', pos: 'zarf', cefr: 'B2', ipa: '/ˈefətləsli/',
    text: "Bir işin kolaylıkla, çaba harcamadan yapıldığını anlatır. Sıfatı 'effortless' (zahmetsiz); kökü 'effort' (çaba).",
    example: 'After years of practice, she could switch effortlessly between English and Turkish.',
    exampleTr: 'Yıllarca pratik yaptıktan sonra İngilizceyle Türkçe arasında zahmetsizce geçiş yapabiliyordu.',
    synonyms: ['easily', 'with ease'], family: ['effortless', 'effort'] },
  { code: 'relapse', title: '(hastalığın) nüksetmesi; bırakılan bir alışkanlığa geri dönme', pos: 'isim', cefr: 'C1', ipa: '/ˈriːlæps/',
    text: "Tıpta, iyileşmeden sonra hastalığın geri gelmesidir: have a relapse. Gündelik dilde bırakılan bir alışkanlığa dönmeyi de anlatır. Fiil olarak /rɪˈlæps/ okunur ve 'relapse into' kalıbıyla gelir: relapse into old habits.",
    example: 'Patients who stop the treatment too early run a higher risk of relapse.',
    exampleTr: 'Tedaviyi erken bırakan hastalarda hastalığın nüksetme riski daha yüksektir.',
    synonyms: ['setback', 'recurrence'], family: [] },
  { code: 'trigger', title: 'tetiklemek, başlatmak', pos: 'fiil', cefr: 'B2', ipa: '/ˈtrɪɡə(r)/',
    text: "Bir olayı ya da tepkiyi başlatmak: trigger an allergy, trigger a memory. İsim olarak 'tetik' ve 'tetikleyici' anlamına gelir: a trigger for headaches.",
    example: 'For some people, strong perfume can trigger a headache.',
    exampleTr: 'Bazı kişilerde güçlü parfüm baş ağrısını tetikleyebilir.',
    synonyms: ['set off', 'spark'], family: [] },
  { code: 'stick to', title: '(bir plana, karara) bağlı kalmak, sürdürmek', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˈstɪk tuː/',
    text: "Bir plandan, karardan ya da kuraldan sapmamak: stick to a diet, stick to the rules. Geçmiş zamanı 'stuck to'. 'Stick with' (bir şeyi bırakmamak) yakın anlamlıdır.",
    example: 'If we stick to the plan, we should be able to finish the project by Friday.',
    exampleTr: 'Plana bağlı kalırsak projeyi cumaya kadar bitirebiliriz.',
    synonyms: ['keep to', 'adhere to'], family: [] },
  { code: 'plateau', title: 'yayla, plato; (bir artıştan sonra) duraklama dönemi', pos: 'isim', cefr: 'C1', ipa: '/ˈplætəʊ/',
    text: "Coğrafyada 'yayla, plato' demektir. Mecaz anlamda bir artıştan sonra değişmeden kalınan dönemi anlatır: reach a plateau, hit a plateau. Çoğulu 'plateaux' ya da 'plateaus'.",
    example: 'After a few months of rapid progress, many language learners reach a plateau.',
    exampleTr: 'Birkaç aylık hızlı ilerlemenin ardından birçok dil öğrencisi bir duraklama dönemine girer.',
    synonyms: ['tableland', 'standstill'], family: [] },
  { code: 'inclination', title: 'istek, heves; eğilim', pos: 'isim', cefr: 'C1', ipa: '/ˌɪŋklɪˈneɪʃn/',
    text: "Bir şeyi yapma isteği ya da eğilimidir; çoğunlukla 'have no/little inclination to do something' kalıbıyla gelir. Sıfatı 'inclined': I'm inclined to agree (katılmaya meyilliyim).",
    example: 'After a long day at work, I had little inclination to cook.',
    exampleTr: 'İşte geçen uzun bir günün ardından yemek yapmaya pek hevesim yoktu.',
    synonyms: ['desire', 'tendency'], family: ['inclined', 'incline'] },
  { code: 'undertake', title: '(bir işi) üstlenmek, yürütmek, girişmek', pos: 'fiil', cefr: 'C1', ipa: '/ˌʌndəˈteɪk/',
    text: "Resmî metinlerde 'yapmak, yürütmek' anlamında geçer: undertake a study, undertake research. Düzensiz fiil: undertake, undertook, undertaken. Adı 'undertaking' (girişim, üstlenilen iş).",
    example: "The council has undertaken a full review of the city's bus routes.",
    exampleTr: 'Belediye, kentteki otobüs hatlarını baştan sona incelemeye girişti.',
    synonyms: ['carry out', 'take on'], family: ['undertaking'] },
  { code: 'consistent', title: 'düzenli, istikrarlı; tutarlı', pos: 'sıfat', cefr: 'B2', ipa: '/kənˈsɪstənt/',
    text: "Zaman içinde değişmeyen, hep aynı düzeyde süreni anlatır: consistent results, a consistent routine. 'Consistent with' (… ile tutarlı) kalıbı da sık geçer. Zarfı 'consistently', adı 'consistency'.",
    example: 'Small but consistent savings can add up to a large sum over the years.',
    exampleTr: 'Küçük ama düzenli birikimler yıllar içinde büyük bir tutara ulaşabilir.',
    synonyms: ['steady', 'regular'], family: ['consistently', 'consistency'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'ga-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['notoriously', 'deliberate'],
    level: 'orta', cefr: 'C1', konu: ['zarf'],
    q: 'Old habits are ---- hard to change, as anyone who has joined a gym in January only to stop going by March will know.',
    options: ['reluctantly', 'scarcely', 'deliberately', 'nominally', 'notoriously'], answer: 4,
    explain: "'Notoriously' bir şeyin kötü bir özelliğiyle herkesçe bilindiğini anlatır; 'notoriously hard' (zorluğu herkesçe bilinen) sık kullanılan bir öbektir. Cümlenin ikinci yarısı da bunu destekliyor: ocakta spor salonuna yazılıp martta gitmeyi bırakan herkes bunu bilir. 'Scarcely' (neredeyse hiç) ve 'nominally' (yalnız adı öyle, göstermelik) değiştirmenin zor olmadığını söyler; ikinci yarıyla çelişir. 'Reluctantly' (isteksizce) ve 'deliberately' (bile bile) bir kişinin tavrını anlatır; alışkanlığın zorluğunu nitelemez." },

  // ---------- dil bilgisi ----------
  { id: 'ga-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['fiil yapıları', 'be used to + -ing'],
    q: 'Selin found her first weeks in the new job exhausting because she ---- stay up late as a student, but after a couple of months she ---- getting up at six, even at weekends.',
    options: ['was used to / used to', 'used to / used to', 'got used to / had got used to', 'used to / got used to', 'would / was used'], answer: 3,
    explain: "Birinci boşluktan sonra yalın fiil (stay) geliyor ve öğrencilikte kalmış bir alışkanlık anlatılıyor: 'used to stay' (eskiden geç yatardı). 'Be used to' ve 'get used to' ardından -ing ister; 'was used to stay' ve 'got used to stay' kurulamaz. İkinci boşluktan sonra -ing var (getting up) ve birkaç ayda kazanılan yeni bir alışkanlık anlatılıyor: 'got used to getting up' (kalkmaya alıştı). Geçmiş alışkanlığı anlatan 'used to' ardından -ing almaz; 'used to getting up' yanlıştır. 'Would' ilk boşluğa uyar ama 'was used getting up' 'to'yu düşürdüğü için kurulamaz." },

  { id: 'ga-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['consistent'],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: "Critics argue that some fitness apps encourage consistent exercise ---- their users' enjoyment, rewarding them for never missing a day until each workout starts to feel like a chore.",
    options: ['in addition to', 'by means of', 'for the sake of', 'in spite of', 'at the expense of'], answer: 4,
    explain: "'At the expense of' (… pahasına) bir kazancın başka bir şey feda edilerek elde edildiğini anlatır. Cümlenin sonu bunu gösteriyor: uygulamalar her günü ödüllendirerek düzenli egzersizi artırıyor ama her antrenman bir angaryaya dönüşüyor, yani keyif kayboluyor. 'For the sake of' (… uğruna) ve 'in addition to' (… -e ek olarak) keyfin korunduğunu ya da gözetildiğini söyler; 'angarya' sonucuyla çelişir. 'In spite of' (… -e rağmen) karşıtlık bildirir ama keyfi düzenli egzersizin önündeki bir engel gibi gösterir; oysa cümlede keyif bir engel değil, feda edilen şeydir. 'By means of' (… aracılığıyla) keyfi araç yapar; oysa cümlede araç ödüllerdir." },

  { id: 'ga-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['devrik yapı'],
    q: "Never during Zeynep's first two months of evening language practice ---- a single session, yet after a two-week holiday abroad she found it surprisingly hard to get back into the routine.",
    options: ['did she miss', 'she missed', 'missed she', 'did she missed', 'she did miss'], answer: 0,
    explain: "'Never' (hiçbir zaman) olumsuz bir zarftır ve cümlenin başına alınmış; ardından soru sırası, yani devrik yapı (inversion) gelir. Cümlede yardımcı fiil olmadığı için 'did' eklenir ve ana fiil yalın kalır: 'did she miss'. Cümlenin anlamı: Zeynep akşam dil çalışmalarının ilk iki ayında tek bir oturumu bile kaçırmadı, ama yurt dışındaki iki haftalık bir tatilden sonra düzene geri dönmekte şaşırtıcı ölçüde zorlandı. 'She missed' ve 'she did miss' düz sıradır; olumsuz zarf başa geçince düz sıra kalmaz. 'Missed she' yardımcı fiil kullanmadan ana fiili özneden önceye alır. 'Did she missed' geçmiş zamanı iki kez gösterir: 'did' eklenince zamanı o taşır, 'miss' yalın kalmalı." },

  // ---------- boşluklu metin (5 boşluk) ----------
  { id: 'ga-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: '"21 gün" sözü nereden çıktı?',
    text: "Ask people how long it takes to form a new habit, and many will confidently reply: twenty-one days. (1) ---- its popularity, the figure rests on remarkably thin evidence. It can be traced back to Maxwell Maltz, an American plastic surgeon whose best-selling self-help book appeared in 1960. Maltz had noticed that people seemed to need at least three weeks to (2) ---- to a change, such as a new face after an operation or the loss of a limb. He presented this as a rough minimum, not as a fixed period that applies to everyone. (3) ----, as the book was quoted again and again in later decades, this distinction was lost. The idea that three weeks was only a minimum quietly disappeared, and many readers came to believe that a habit would form by itself if they managed (4) ---- a behaviour for twenty-one days in a row. (5) ---- Maltz's own cautious wording, the popular version offers a precise deadline, which may be one reason why it has proved so appealing.",
    steps: [
      { konu: ['edat'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['Owing to', 'In addition to', 'With regard to', 'Despite', 'Instead of'], answer: 3,
        explain: "Boşluktan sonraki öbekle (its popularity) cümlenin geri kalanı arasında karşıtlık var: sayı çok yaygın ama dayanağı şaşırtıcı ölçüde zayıf. Bu ilişkiyi 'despite' (-e rağmen) kurar. 'Owing to' (… yüzünden) yaygınlığı zayıf kanıtın nedeni yapar. 'In addition to' (… -e ek olarak) iki bilgiyi toplar; oysa aralarında ekleme değil karşıtlık var. 'With regard to' (… konusunda) ve 'instead of' (… yerine) burada anlam kurmaz." },
      { konu: ['kelime', 'fiil'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['adopt', 'adjust', 'admit', 'object', 'refer'], answer: 1,
        explain: "Maltz'a göre insanların yeni bir yüze ya da bir uzvun kaybına alışması en az üç hafta sürüyordu: 'adjust to' (-e uyum sağlamak, alışmak). 'Adopt' (benimsemek; evlat edinmek) 'adapt' ile karıştırılır ama 'to' ile bu anlamı kurmaz. 'Admit to' (itiraf etmek), 'object to' (karşı çıkmak) ve 'refer to' (-den söz etmek) cümlenin anlamına uymaz." },
      { konu: ['bağlantı zarfı'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['Therefore', 'However', 'Similarly', 'In other words', 'Otherwise'], answer: 1,
        explain: "Önceki cümle Maltz'ın sayıyı kaba bir alt sınır olarak sunduğunu söylüyor; bu cümle ise kitap alıntılandıkça bu ayrımın kaybolduğunu. İki cümle arasında karşıtlık var: 'However'. 'Therefore' (bu yüzden) Maltz'ın dikkatli sunuşunu ayrımın kaybolmasının nedeni yapar. 'Similarly' (benzer biçimde) benzerlik, 'in other words' (başka bir deyişle) aynı şeyi yeniden söyleme bildirir. 'Otherwise' (yoksa, aksi hâlde) bir koşulun tersini anlatır." },
      { konu: ['isim-fiil ve mastar'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['to repeat', 'repeating', 'repeat', 'to repeating', 'having repeated'], answer: 0,
        explain: "'Manage' (başarmak) ardından mastar alır: 'managed to repeat' (tekrarlamayı başardılar). Bu fiilden sonra -ing biçimi (repeating, having repeated), yalın 'repeat' ve 'to repeating' kurulamaz." },
      { konu: ['edat'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['Unlike', 'Like', 'Due to', 'Along with', 'According to'], answer: 0,
        explain: "Cümle Maltz'ın temkinli ifadesiyle yaygın sürümü karşılaştırıyor: Maltz 'en az' demişti, yaygın sürüm ise kesin bir süre veriyor. Bu karşıtlığı 'unlike' (-in aksine) kurar. 'Like' (gibi) ikisini aynı sayar. 'Due to' (… yüzünden) temkinli ifadeyi kesin sürenin nedeni yapar. 'Along with' (… ile birlikte) ve 'according to' (-e göre) burada anlam kurmaz." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'ga-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['effortlessly'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although habits save us a great deal of mental effort, ----.',
    options: [
      'they allow us to carry out routine tasks almost effortlessly while our minds are elsewhere',
      'this is why people with fixed morning routines often find their days less tiring',
      'psychologists have been studying how they are formed for well over a century',
      'they can also make it surprisingly hard to give up behaviours we no longer want',
      'people who rely on them can often get through a busy morning without much thought',
    ], answer: 3,
    explain: "'Although' karşıtlık kurar: alışkanlıklar bize büyük bir zihinsel çaba kazandırır, ama artık istemediğimiz davranışları bırakmayı da şaşırtıcı ölçüde zorlaştırabilir. Gündelik işleri neredeyse hiç zorlanmadan yapmak ve yoğun bir sabahı fazla düşünmeden atlatmak ilk yarıyı destekliyor; karşıtlık kurmuyor. 'This is why' ile başlayan seçenek karşıtlık yerine sonuç bildiriyor. Psikologların yüz yılı aşkın süredir alışkanlıkları incelemesi ise ilk yarıyla ne çelişiyor ne de ona bağlanıyor." },

  { id: 'ga-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['relapse'],
    level: 'orta', cefr: 'B2', konu: ['koşul'],
    q: '----, provided that people decide in advance exactly when and where they will act.',
    options: [
      'Good intentions are far more likely to be turned into action',
      "Many New Year's resolutions are abandoned within a few weeks",
      'Willpower alone is rarely enough to change a long-standing habit',
      'Relapses into old routines tend to occur when people are tired or stressed',
      'Detailed plans seldom make any real difference to what people do',
    ], answer: 0,
    explain: "Verilen yarıdaki 'provided that' (… koşuluyla) bir koşul kuruyor: insanlar ne zaman ve nerede harekete geçeceklerini önceden belirlerse. Bu koşula bağlanabilecek sonuç, iyi niyetlerin eyleme dönüşme olasılığının artmasıdır; psikolog Peter Gollwitzer'in 'eğer … o zaman' planları üzerine çalışmaları da bunu destekler. Ayrıntılı planların davranışı pek değiştirmediğini söyleyen seçenek koşulla çelişir. Yılbaşı kararlarının bırakılması, yalnız iradenin yetmemesi ve yorgunlukta eski düzene dönülmesi bu koşulun sonucu olamaz; koşulla birleşince anlamsız cümleler çıkar." },

  // ---------- çeviri ----------
  { id: 'ga-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['trigger', 'cue'],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'Habits are behaviours that are triggered automatically by familiar cues, such as the time of day or the place where we usually perform them.',
    options: [
      'Alışkanlıklar, günün saati ya da genellikle bulunduğumuz yer gibi tanıdık ipuçlarıyla çoğu zaman tetiklenen davranışlardır.',
      'Alışkanlıklar, günün saati ya da onları genellikle yaptığımız yer gibi tanıdık ipuçlarını kendiliğinden tetikleyen davranışlardır.',
      'Alışkanlıklar, günün saati ya da onları genellikle yaptığımız yer gibi tanıdık ipuçlarıyla çoğu zaman tetiklenen davranışlardır.',
      'Alışkanlıklar, günün saati ya da onları genellikle yaptığımız yer gibi tanıdık ipuçlarıyla kendiliğinden tetiklenen davranışlardır.',
      'Alışkanlıklar, günün saati ya da onları genellikle yaptığımız yer gibi dikkat çekici ipuçlarıyla çoğu zaman tetiklenen davranışlardır.',
    ], answer: 3,
    explain: "İngilizce cümlede sıfat cümlecikleri var: 'that are triggered automatically by familiar cues' davranışları, 'where we usually perform them' yeri niteliyor. Doğru çeviri: alışkanlıklar, günün saati ya da onları genellikle yaptığımız yer gibi tanıdık ipuçlarıyla kendiliğinden tetiklenen davranışlardır. 'Automatically' bir sıklık bildirmez, davranışın düşünmeden başladığını söyler; 'tanıdık ipuçlarıyla çoğu zaman tetiklenen' diyen çeviri bu anlamı kaçırıyor. 'Dikkat çekici ipuçları' diyen çeviride hem 'familiar' (tanıdık) hem 'automatically' kaybolmuş. 'Genellikle bulunduğumuz yer' diyen çeviride yer, alışkanlığı yaptığımız yer olmaktan çıkıyor; 'kendiliğinden' de 'çoğu zaman'a dönmüş. 'İpuçlarını kendiliğinden tetikleyen' diyen çeviri ilişkiyi tersine çeviriyor: İngilizcede ipuçları alışkanlıkları tetikler, alışkanlıklar ipuçlarını değil." },

  { id: 'ga-c2', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['trigger'],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Eski bir alışkanlık, uzun süre yapılmamış olsa bile onu tetikleyen ortama dönüldüğünde kolayca geri gelebilir.',
    options: [
      'Because an old habit has not been performed for a long time, it can gradually come back when a person returns to the setting that triggers it.',
      'Even if an old habit has not been performed for a long time, it can easily come back before a person returns to the setting that triggers it.',
      'Even if an old habit has not been performed for a long time, it can gradually come back when a person returns to a familiar setting.',
      'Even if an old habit has not been performed for a long time, it can easily come back when a person returns to the setting that triggers it.',
      'Even if an old habit has not been performed for a long time, it can gradually come back when a person returns to the setting that triggers it.',
    ], answer: 3,
    explain: "Türkçedeki 'olsa bile' ödünleme bildirir ve 'even if' ile karşılanır; 'kolayca geri gelebilir' 'can easily come back', 'onu tetikleyen ortama dönüldüğünde' de 'when a person returns to the setting that triggers it' demektir. Doğru çeviri bunların hepsini korur. 'Gradually' (yavaş yavaş) 'kolayca' demek değildir; 'it can gradually come back when a person returns to the setting that triggers it' bu yüzden kökten ayrılıyor. 'Because' ile başlayan çeviri ödünlemeyi nedene çeviriyor, 'kolayca'nın yerine de 'gradually' koyuyor. 'A familiar setting' (herhangi bir tanıdık ortam) diyen çeviride ortam artık alışkanlığı tetikleyen ortam değil ve geri geliş yavaşlamış. 'Before a person returns' diyen çeviri zamanı bozuyor: Türkçede alışkanlık ortama dönülünce geri gelir, dönülmeden önce değil." },

  // ---------- okuma parçası (4 soru, YDS biçimi) ----------
  { id: 'ga-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T,
    cards: ['undertake', 'plateau', 'deliberate', 'persist'],
    level: 'zor', cefr: 'C1', title: "Londra'da bir alışkanlık araştırması",
    text: "How long does it take for a new behaviour to become a habit? In a study undertaken at University College London and first published in 2009, Phillippa Lally and her colleagues set out to measure this in everyday life rather than in a laboratory. They recruited 96 volunteers, each of whom chose a new eating, drinking or exercise behaviour, such as drinking a bottle of water with lunch or going for a run before dinner, and tried to carry it out once a day in the same situation. Over the next twelve weeks, the volunteers regularly rated how automatic the behaviour felt, that is, how far they could do it without having to think about it. The typical pattern was a curve: automaticity rose steeply at first and then levelled off, reaching a plateau. The researchers estimated that it took a median of 66 days to get close to this plateau, but individuals differed enormously, with estimates ranging from 18 to 254 days. Simpler behaviours, such as drinking water, appeared to become automatic sooner than more demanding ones, such as doing sit-ups. Missing a single day, meanwhile, did not seem to set the process back in any significant way. For anyone trying to build a habit, then, the message is mixed: what begins as a deliberate effort can eventually run almost by itself, but many people will need to persist for far longer than a few weeks.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, each volunteer in the London study ----.',
        options: [
          'was asked to give up an unhealthy habit, such as eating snacks',
          'followed the same exercise programme as the other participants',
          'was observed by the researchers in a laboratory for twelve weeks',
          'tried out several different behaviours before settling on one',
          'chose a new behaviour and aimed to perform it daily in a fixed context',
        ], answer: 4,
        explain: 'Parçaya göre her gönüllü yeni bir yeme, içme ya da egzersiz davranışı seçti ve onu her gün aynı durumda yapmaya çalıştı. Gönüllülerden kötü bir alışkanlığı bırakmaları istenmedi; yeni bir davranış edindiler. Herkes aynı egzersizi yapmadı; her gönüllü kendi davranışını seçti. Çalışma laboratuvarda değil, gündelik yaşamda yapıldı. Gönüllülerin önce birkaç davranış denediği de parçada geçmiyor.' },
      { konu: ['ayrıntı'],
        q: 'It is stated in the passage that, as the volunteers repeated their chosen behaviour, automaticity ----.',
        options: [
          'grew at a slow but steady rate until the end of the study',
          'increased quickly at first and later changed very little',
          'reached its highest point within the first fortnight',
          'fell sharply whenever a participant missed a single day',
          'was higher for demanding behaviours than for simple ones',
        ], answer: 1,
        explain: "Parçaya göre kendiliğindenlik önce hızla arttı, sonra düzleşip bir platoya ulaştı ('rose steeply at first and then levelled off'). Çalışmanın sonuna kadar yavaş ve düzenli bir artış bunun tersidir. İlk iki haftada en üst düzeye ulaşıldığı parçada geçmiyor; tahmini ortanca süre 66 gün. Tek bir günü kaçırmanın süreci belirgin biçimde geriletmediği söyleniyor. Zahmetli davranışlar için de parça tersini düşündürüyor: basit davranışlar daha çabuk kendiliğinden hâle geldi." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that ----.',
        options: [
          'most volunteers stopped performing their chosen behaviour after a few weeks',
          'the longest estimate went far beyond the period in which the volunteers were followed',
          'the volunteers who chose exercise were less motivated than the others',
          'missing several days in a row would have had no effect on the results',
          'the researchers had expected every behaviour to become automatic at the same rate',
        ], answer: 1,
        explain: 'Parçaya göre gönüllüler on iki hafta (yaklaşık 84 gün) izlendi, ama tahminler 254 güne kadar uzanıyor. Demek ki en uzun tahmin, gönüllülerin izlendiği süreyi çok aşıyor; bu süre gözlenmemiş, tahmin edilmiş. Gönüllülerin çoğunun birkaç hafta sonra davranışı bıraktığı, egzersiz seçenlerin daha az istekli olduğu ve araştırmacıların her davranışın aynı hızda kendiliğinden hâle gelmesini beklediği parçada geçmiyor. Parça yalnız tek bir günü kaçırmaktan söz ediyor; art arda birkaç günün etkisiz olacağı sonucu buradan çıkmaz.' },
      { konu: ['başlık'],
        q: 'Which of the following titles best sums up the passage?',
        options: [
          'Why Exercise Habits Never Become Automatic',
          'How Volunteers Learnt to Give Up Their Bad Habits',
          'Measuring the Time It Takes to Build a Habit',
          'A Single Missed Day Can Undo Weeks of Effort',
          'Twelve Weeks to a Perfect Daily Routine',
        ], answer: 2,
        explain: 'Parça bir çalışmayı anlatıyor: yeni bir davranışın ne kadar sürede kendiliğinden hâle geldiği nasıl ölçüldü ve ne bulundu (ortanca 66 gün, 18 ile 254 gün arasında bir aralık, kaçırılan tek bir günün belirgin etkisi olmaması). Bu bütünü, alışkanlık kurmanın süresini ölçmekten söz eden başlık karşılar. Egzersiz alışkanlıklarının hiç kendiliğinden hâle gelmediği, gönüllülerin kötü alışkanlıklarını bıraktığı ve tek bir günün haftaların emeğini sildiği parçayla çelişiyor. On iki hafta bir program değil, çalışmanın süresiydi.' },
    ] },

  // ---------- diyalog tamamlama ----------
  { id: 'ga-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['stick to', 'inclination'],
    level: 'kolay', cefr: 'B2', konu: ['bağlam'],
    q: "Elif: You've been running every morning for a month now. I'm impressed!\nEmre: Thanks. Honestly, I never thought I'd stick to it for this long.\nElif: ----\nEmre: Not as much as at the start. These days I hardly think about it; I just put on my trainers and go.\nElif: Lucky you. Most mornings I have no inclination to do anything except stay in bed.",
    options: [
      'Have you managed to persuade anyone to join you yet?',
      'Do you still have to force yourself out of the door?',
      'Are you planning to keep running through the winter?',
      'Would you recommend running to someone like me?',
      'How did you choose the route you run every morning?',
    ], answer: 1,
    explain: "Emre'nin cevabı 'Not as much as at the start' (başlangıçtaki kadar değil) diye başlıyor; artık bunu pek düşünmediğini, ayakkabılarını giyip çıktığını söylüyor. Bu cevap, başta zorlandığı ama artık zorlanmadığı bir şeyi soran soruya uyar: kendini hâlâ zorlayarak mı çıkıyor? Elif'in 'Lucky you' deyip sabahları yataktan çıkmaya hiç hevesi olmadığını söylemesi de bunu doğruluyor. Birini koşuya ikna edip etmediği, kışın sürdürüp sürdürmeyeceği ve koşuyu önerip önermeyeceği de evet-hayır sorusu ama 'başlangıçtaki kadar değil' cevabına bağlanmıyor. Rotayı nasıl seçtiği sorusuna ise bu cevap verilemez." },

  // ---------- akışı bozan cümle ----------
  { id: 'ga-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['cue', 'trigger'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Habits are closely tied to the settings in which they form, because the cues that trigger them, such as a particular room or time of day, are part of those settings.',
      'Many people also find it easier to keep a new resolution if they tell their friends and family about it.',
      'When we move house or start a new job, therefore, many of these familiar cues suddenly disappear.',
      'Without them, old routines may lose some of their hold, and for a while our behaviour has to be guided by conscious choices again.',
      'For this reason, some psychologists regard such changes as a window of opportunity for anyone hoping to build better habits.',
    ], answer: 1,
    explain: "Parça alışkanlıkların oluştukları ortama bağlı olduğunu ve taşınma ya da iş değiştirme gibi değişikliklerin bu bağı nasıl gevşettiğini anlatıyor. II. cümle kararları arkadaşlara anlatmanın yararına geçerek akışı kesiyor; ortamdan ve ipuçlarından hiç söz etmiyor. III. cümledeki 'these familiar cues' I. cümledeki ipuçlarına bağlanıyor. IV. cümledeki 'them' bu ipuçlarını, V. cümledeki 'such changes' de taşınmayı ve iş değiştirmeyi gösteriyor." },
];

export default { id: 'genel-aliskanlik', course: C, title: U, order: 1, cards, items };
