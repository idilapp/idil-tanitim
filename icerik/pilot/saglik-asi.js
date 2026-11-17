// iDil › Sağlık bilimleri › Aşılar ve bağışıklık.
// Tümü özgün: Claude yazdı (13 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (yalnız olgular kullanıldı; metin özgün):
// - Edward Jenner, 1796: inek sağan bir kadının elindeki inek çiçeği yarasından aldığı maddeyi bir çocuğun kolundaki küçük
//   kesiklere verdi; haftalar sonra çocuğu bilerek çiçek hastalığına maruz bıraktı, çocuk hastalanmadı. Daha önce İngiliz
//   kırsalında inek çiçeğinin çiçek hastalığından koruduğuna inanılıyordu. "Vaccine" Latince vacca'dan (inek) gelir.
// - DSÖ 1980'de çiçek hastalığının yok edildiğini ilan etti.
// - mRNA aşıları hücrelere zararsız bir virüs parçası ürettiren talimat taşır; üzerinde 1990 dolayından beri çalışılıyordu.
//   Laboratuvarda üretilen mRNA iltihaba yol açıyordu. Katalin Karikó ve Drew Weissman 2005'te yapı taşlarındaki küçük
//   değişikliklerin bu tepkiyi büyük ölçüde giderdiğini gösterdi. Buluşları, pandeminin ilk yılında çıkan COVID-19 mRNA
//   aşılarının dayanaklarından biriydi; 2023 Nobel Fizyoloji veya Tıp Ödülü.
// - Çiçek aşılaması (variolation): Çin, Hindistan ve Osmanlı'da uygulanırdı. Yaygın yöntemlerden birinde çiçek hastalığı
//   yarasından alınan madde sağlıklı bir kişinin derisindeki çiziğe sürülürdü; Çin'de ise daha çok kurutulmuş kabuk tozu
//   buruna üflenirdi. Bu yüzden metinde deri yöntemi "yaygın yöntemlerden biri" diye geçer. Çoğu zaman hafif bir hastalık ve
//   ömür boyu koruma sağlardı, ama aşılananların küçük bir kısmı ölürdü (temkinli). Lady Mary Wortley Montagu (kocası İstanbul'da İngiliz elçisi) uygulamayı 1717 tarihli bir mektubunda anlattı,
//   sonra kendi çocuklarını aşılattı ve İngiltere'de yaygınlaştırmaya çalıştı. Not: planda "1717'de İstanbul'da gördü"
//   yazıyor; bilinen 1717 mektubu Edirne'den yazıldı, oğlu 1718'de İstanbul'da, kızı 1721'de Londra'da aşılandı. Bu yüzden
//   metinde uygulamanın nerede görüldüğü yazılmadı.
// - Sürü bağışıklığı: yeterince insan bağışık olunca yayılma yavaşlar ve aşı olamayanlar da korunur. Kızamıkta gereken
//   aşılama oranı genellikle yaklaşık %95 kabul edilir (DSÖ; temkinli).
// - Yerleşik bilgi: kızamık geçirenlerde ömür boyu bağışıklık; su çiçeği virüsünün sinir hücrelerinde uykuda kalıp on yıllar
//   sonra zona yapabilmesi, çocukların çoğunun bir iki haftada iyileşmesi, hastalığın yetişkinlerde daha ağır geçmesi; canlı
//   zayıflatılmış aşıların güçlü ve uzun süreli koruma vermesi, bağışıklığı ciddi zayıflamış kişilere önerilmemesi; antikor
//   testinin geçmiş enfeksiyonu gösterebilmesi; bazı aşılarda zamanla azalan korumanın ek dozla tazelenmesi; aşı yan
//   etkilerinin çoğunun hafif olması; DSÖ'nün 2019'da aşı tereddüdünü küresel sağlığa yönelik başlıca tehditler arasında
//   sayması (hesitant kartı).
// - Kart örnekleri (yerleşik bilgi): verem bakterisinin akciğerde yıllarca uykuda kalabilmesi, gribin belirtilerin ilk
//   günlerinde en bulaşıcı olması, sarımsağın soğuk algınlığını önlediğine dair kanıtın az olması, bebeklerin anneden aldığı
//   bağışıklığın aylar içinde azalması, bazı aşılara bağışıklık tepkisini güçlendiren madde katılması.

const T = 'taslak';
const C = 'saglik';
const U = 'Aşılar ve bağışıklık';

const cards = [
  // ---------- isim ----------
  { code: 'immunity', title: 'bağışıklık; (yasal) dokunulmazlık, muafiyet', pos: 'isim', cefr: 'C1', ipa: '/ɪˈmjuːnəti/',
    text: "Vücudun bir hastalığa karşı korunmuş olmasıdır: immunity to a disease; 'immunity against' da denir. 'Herd immunity', toplumun yeterli bir kısmı bağışık olunca ortaya çıkan sürü bağışıklığıdır. Hukukta 'dokunulmazlık' demektir: diplomatic immunity. Sıfatı 'immune (to)', fiili 'immunise'.",
    example: 'Babies receive some immunity from their mothers, but it fades within a few months of birth.',
    exampleTr: 'Bebekler annelerinden bir miktar bağışıklık alır, ama bu bağışıklık doğumdan sonraki birkaç ay içinde azalır.',
    synonyms: ['resistance', 'protection'], family: ['immune', 'immunise', 'immunology'] },
  { code: 'pathogen', title: 'patojen, hastalık yapan mikrop', pos: 'isim', cefr: 'C1', ipa: '/ˈpæθədʒən/',
    text: "Hastalığa yol açan her türlü mikrobu (virüs, bakteri, mantar, parazit) kapsayan bilimsel terimdir; gündelik dildeki 'germ' sözcüğünün karşılığıdır. Her mikrop patojen değildir: bağırsaktaki bakterilerin çoğu zararsızdır. Sıfatı 'pathogenic' (hastalık yapıcı).",
    example: 'Washing your hands removes many of the pathogens that people pick up from door handles and phones.',
    exampleTr: 'Ellerinizi yıkamak, insanların kapı kollarından ve telefonlardan kaptığı hastalık yapıcı mikropların birçoğunu temizler.',
    synonyms: ['germ', 'disease-causing microbe'], family: ['pathogenic'] },
  { code: 'antibody', title: 'antikor', pos: 'isim', cefr: 'C1', ipa: '/ˈæntibɒdi/',
    text: "Bağışıklık sisteminin belli bir mikroba ya da yabancı maddeye karşı ürettiği, onu tanıyıp etkisizleştirmeye yardım eden proteindir. Çoğulu 'antibodies'. Sık geçen kalıplar: produce antibodies against a virus, antibody levels (antikor düzeyleri). Antikorun tanıdığı yabancı maddeye 'antigen' denir.",
    example: 'Antibody levels usually rise within a couple of weeks of an infection and then slowly fall.',
    exampleTr: 'Antikor düzeyleri genellikle enfeksiyondan sonraki iki hafta kadar içinde yükselir, sonra yavaş yavaş düşer.',
    synonyms: ['immunoglobulin'], family: [] },
  { code: 'coverage', title: 'kapsama oranı, kapsam; (haberde) yer verme', pos: 'isim', cefr: 'C1', ipa: '/ˈkʌvərɪdʒ/',
    text: "Bir hizmetin ya da önlemin nüfusun ne kadarına ulaştığını anlatır: vaccination coverage (aşılama oranı, yani aşılananların payı). Medyada bir olaya ayrılan yer de 'coverage'dır: news coverage. Sigortada 'teminat', cep telefonu için 'çekim alanı' anlamına gelir. Fiili 'cover'.",
    example: 'Vaccination coverage in the region rose sharply after mobile clinics began to visit remote villages.',
    exampleTr: 'Gezici klinikler uzak köyleri ziyaret etmeye başlayınca bölgedeki aşılama oranı hızla yükseldi.',
    synonyms: ['reach', 'uptake'], family: ['cover'] },
  { code: 'booster', title: 'rapel doz, hatırlatma dozu; güç veren şey', pos: 'isim', cefr: 'C1', ipa: '/ˈbuːstə/',
    text: "Aşıda, ilk dozlardan bir süre sonra yapılan ek dozdur: a booster dose, a booster jab (İngiliz gündelik dilinde 'jab' iğne, aşı demektir). Gündelik dilde güç ya da moral veren şeydir: a confidence booster (özgüveni artıran şey). Fiili 'boost' (artırmak, desteklemek).",
    example: 'The nurse checked his records and told him that he was due for a booster.',
    exampleTr: 'Hemşire kayıtlarına baktı ve ona rapel dozunun zamanının geldiğini söyledi.',
    synonyms: ['top-up'], family: ['boost'] },

  // ---------- sıfat ----------
  { code: 'contagious', title: 'bulaşıcı (kişiden kişiye geçen)', pos: 'sıfat', cefr: 'C1', ipa: '/kənˈteɪdʒəs/',
    text: "Bir insandan ötekine kolayca geçen hastalık için kullanılır: a highly contagious disease. Kişi için de kullanılır: She is no longer contagious (Artık hastalığı bulaştırmıyor). Mecaz anlamı da var: contagious laughter (bulaşıcı kahkaha). Yakın anlamlı 'infectious' daha geniştir; adı 'contagion'.",
    example: 'Flu is most contagious in the first few days after the symptoms begin.',
    exampleTr: 'Grip, belirtiler başladıktan sonraki ilk birkaç gün en bulaşıcı hâlindedir.',
    synonyms: ['infectious', 'catching'], family: ['contagion'] },
  { code: 'hesitant', title: 'tereddütlü, kararsız, çekingen', pos: 'sıfat', cefr: 'C1', ipa: '/ˈhezɪtənt/',
    text: "Bir şeyi yapmakta duraksayan, emin olamayan kişiyi anlatır: be hesitant to do something ya da be hesitant about something. Adı 'hesitancy' ya da 'hesitation'. 'Vaccine hesitancy' (aşı tereddüdü): DSÖ 2019'da bunu küresel sağlığa yönelik başlıca tehditler arasında saydı. Fiili 'hesitate'.",
    example: 'Many patients are hesitant to ask their doctor questions, even when they have not understood what they were told.',
    exampleTr: 'Birçok hasta, kendisine söyleneni anlamamış olsa bile doktoruna soru sormaya çekiniyor.',
    synonyms: ['reluctant', 'unsure'], family: ['hesitate', 'hesitation', 'hesitancy'] },
  { code: 'dormant', title: 'uykuda, etkin olmayan (ama yeniden etkinleşebilecek)', pos: 'sıfat', cefr: 'C1', ipa: '/ˈdɔːmənt/',
    text: "Canlı ya da etkin olabilecek bir şeyin bir süre hiçbir iz vermeden beklemesini anlatır: a dormant volcano (uyuyan yanardağ), dormant seeds, lie dormant (uykuda kalmak). 'Extinct' (tümüyle sönmüş, soyu tükenmiş) ile karıştırma. Adı 'dormancy'.",
    example: 'The bacteria that cause tuberculosis can remain dormant in the lungs for years before making a person ill.',
    exampleTr: 'Vereme yol açan bakteriler, kişiyi hasta etmeden önce akciğerlerde yıllarca uykuda kalabilir.',
    synonyms: ['inactive', 'latent'], family: ['dormancy'] },
  { code: 'mild', title: 'hafif (hastalık, belirti); ılıman (hava); yumuşak (tat)', pos: 'sıfat', cefr: 'B2', ipa: '/maɪld/',
    text: "Hastalık ve belirtiler için 'ağır olmayan' demektir: a mild fever, mild symptoms; karşıtı 'severe' (ağır). Hava için 'ılıman' (a mild winter), yiyecek için 'acı ya da sert olmayan' (a mild curry) anlamına gelir. Zarfı 'mildly': mildly ill (hafif hasta).",
    example: 'Most people who catch the virus have only mild symptoms, such as a sore throat and a runny nose.',
    exampleTr: 'Virüsü kapan çoğu kişide yalnız boğaz ağrısı ve burun akıntısı gibi hafif belirtiler görülür.',
    synonyms: ['slight'], family: ['mildly', 'mildness'] },

  // ---------- fiil ----------
  { code: 'inoculate', title: 'aşılamak', pos: 'fiil', cefr: 'C1', ipa: '/ɪˈnɒkjuleɪt/',
    text: "Bağışıklık kazandırmak için vücuda bir aşı ya da bir mikrobun zararsız hâle getirilmiş bir biçimini vermektir: inoculate someone against a disease (birini bir hastalığa karşı aşılamak). 'Vaccinate' ile yakın anlamlıdır; Jenner'dan önceki çiçek aşılaması da İngilizcede 'inoculation' diye anılırdı. Adı 'inoculation'.",
    example: 'The clinic inoculated more than two hundred children against polio in a single week.',
    exampleTr: 'Klinik, tek bir haftada iki yüzü aşkın çocuğu çocuk felcine karşı aşıladı.',
    synonyms: ['vaccinate', 'immunise'], family: ['inoculation'] },
  { code: 'eliminate', title: 'ortadan kaldırmak, gidermek; (yarışmada) elemek', pos: 'fiil', cefr: 'B2', ipa: '/ɪˈlɪmɪneɪt/',
    text: "Bir şeyi tümüyle ya da büyük ölçüde yok etmek: eliminate a risk, eliminate errors. Yarışmada 'elemek' demektir: be eliminated in the first round. Halk sağlığında bir hastalığın belli bir bölgede görülmez olmasına 'elimination', dünyanın her yerinden kalıcı olarak silinmesine 'eradication' denir. Adı 'elimination'.",
    example: "Switching to digital records almost eliminated errors in the clinic's prescriptions.",
    exampleTr: 'Dijital kayıtlara geçilmesi, klinikteki reçete hatalarını neredeyse tamamen ortadan kaldırdı.',
    synonyms: ['remove', 'get rid of'], family: ['elimination'] },
  { code: 'provoke', title: '(bir tepkiye) yol açmak, tetiklemek; kışkırtmak', pos: 'fiil', cefr: 'C1', ipa: '/prəˈvəʊk/',
    text: "Bir tepkiyi, duyguyu ya da olayı ortaya çıkarmak: provoke a reaction, provoke anger, provoke a debate. Birini 'kışkırtmak, sinirlendirmek' anlamı da var. Tıp metinlerinde 'provoke an immune response' (bağışıklık tepkisine yol açmak) gibi kalıplarla geçer. Adı 'provocation', sıfatı 'provocative'.",
    example: 'In some people, even a tiny amount of peanut can provoke a severe allergic reaction.',
    exampleTr: 'Bazı kişilerde çok az miktarda yer fıstığı bile ağır bir alerjik tepkiye yol açabilir.',
    synonyms: ['trigger', 'cause'], family: ['provocation', 'provocative'] },
  { code: 'stimulate', title: 'uyarmak, harekete geçirmek; canlandırmak', pos: 'fiil', cefr: 'C1', ipa: '/ˈstɪmjuleɪt/',
    text: "Bir sistemi ya da süreci etkin hâle getirmek: stimulate the immune system (bağışıklık sistemini harekete geçirmek), stimulate growth. Ekonomide 'canlandırmak' demektir: stimulate the economy. Adı 'stimulation'; 'stimulus' (uyaran, çoğulu stimuli) de aynı ailedendir.",
    example: 'Some vaccines contain an added ingredient that stimulates a stronger response from the immune system.',
    exampleTr: 'Bazı aşılar, bağışıklık sistemini uyarıp daha güçlü bir tepki vermesini sağlayan ek bir madde içerir.',
    synonyms: ['activate', 'spur'], family: ['stimulation', 'stimulus', 'stimulant'] },
  { code: 'weaken', title: 'zayıflatmak; zayıflamak', pos: 'fiil', cefr: 'B2', ipa: '/ˈwiːkən/',
    text: "Hem geçişli hem geçişsiz kullanılır: The illness weakened her (Hastalık onu zayıflattı) / His voice weakened (Sesi zayıfladı). Aşı metinlerinde 'a weakened virus' (zayıflatılmış virüs) ve 'a weakened immune system' (zayıflamış bağışıklık sistemi) sık geçer. Karşıtı 'strengthen'; sıfatı 'weak'.",
    example: "Long periods of stress can weaken the body's defences against infection.",
    exampleTr: 'Uzun süren stres, vücudun enfeksiyonlara karşı savunmasını zayıflatabilir.',
    synonyms: ['undermine', 'reduce'], family: ['weak', 'weakness'] },
  { code: 'wane', title: '(zamanla) azalmak, zayıflamak, sönmek', pos: 'fiil', cefr: 'C1', ipa: '/weɪn/',
    text: "Gücün, etkinin ya da ilginin zamanla yavaş yavaş azalmasını anlatır: Interest in the case waned. Tıpta 'waning immunity' (azalan bağışıklık) diye geçer. Ay için 'küçülmek' demektir: the waning moon. 'Wax and wane' (bir artıp bir azalmak) kalıbı da sık kullanılır.",
    example: 'The effect of the painkiller began to wane after about four hours.',
    exampleTr: 'Ağrı kesicinin etkisi yaklaşık dört saat sonra azalmaya başladı.',
    synonyms: ['fade', 'decline'], family: ['waning'] },

  // ---------- öbek fiil ----------
  { code: 'ward off', title: '(bir tehlikeyi, hastalığı) savuşturmak, uzak tutmak', pos: 'öbek fiil', cefr: 'C1', ipa: '/ˌwɔːd ˈɒf/',
    text: "Bir tehlikenin, hastalığın ya da saldırının size ulaşmasını önlemek: ward off infection, ward off the cold (soğuğu uzak tutmak). Nesne zamir olunca araya girer: ward it off. Çoğu zaman 'help to ward off' ya da 'be said to ward off' gibi kalıplarla geçer.",
    example: 'Many people believe that garlic can ward off colds, but there is little evidence for this.',
    exampleTr: 'Birçok kişi sarımsağın soğuk algınlığını uzak tutabileceğine inanır, ama bunu destekleyen kanıt azdır.',
    synonyms: ['fend off', 'prevent'], family: [] },
  { code: 'come down with', title: '(bir hastalığa) yakalanmak, (hastalık) kapmak', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌkʌm ˈdaʊn wɪð/',
    text: "Çoğunlukla çok ağır olmayan, bulaşıcı hastalıklar için gündelik bir anlatımdır: come down with flu, come down with a cold. Sürekli zamanda hastalığın başladığını anlatır: I think I'm coming down with something (Galiba bir şey kapıyorum). Resmî metinlerde 'contract' ya da 'develop' kullanılır.",
    example: 'Whenever one child in the class comes down with flu, several others usually fall ill within a week.',
    exampleTr: 'Sınıfta bir çocuk gribe yakalandığında genellikle bir hafta içinde birkaç çocuk daha hastalanır.',
    synonyms: ['catch', 'contract'], family: [] },

  // ---------- zarf ----------
  { code: 'eventually', title: 'sonunda, en sonunda (uzun bir süreden sonra)', pos: 'zarf', cefr: 'B2', ipa: '/ɪˈventʃuəli/',
    text: "Uzun bir süreç, gecikme ya da güçlükten sonra gelen sonucu anlatır: After months of delays, the bridge eventually opened. 'Belki, olasılıkla' anlamında kullanılmaz; bu anlam için 'possibly' kullanılır. Sıfatı 'eventual' (sonunda gelen).",
    example: 'After several weeks in hospital, he eventually made a full recovery.',
    exampleTr: 'Hastanede birkaç hafta kaldıktan sonra sonunda tamamen iyileşti.',
    synonyms: ['in the end', 'finally'], family: ['eventual'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'sv-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['immunity', 'coverage', 'booster'],
    level: 'orta', cefr: 'C1', konu: ['isim'],
    q: 'Children who have had measles are very unlikely to catch it a second time, because the illness usually leaves them with lifelong ---- to the virus.',
    options: ['coverage', 'exposure', 'immunity', 'booster', 'impunity'], answer: 2,
    explain: "Cümle, kızamık geçirmiş çocukların bu hastalığa ikinci kez pek yakalanmadığını söylüyor ve nedenini 'because' ile veriyor: hastalık onlara virüse karşı ömür boyu sürecek bir koruma bırakır. Bu, 'immunity to' kalıbıyla 'immunity' (bağışıklık) sözcüğüdür. 'Coverage' (aşılama oranı) bir toplumda aşılananların payını anlatır, tek bir kişinin virüse karşı korunmasını değil. 'Booster' (rapel doz) sonradan yapılan ek bir aşı dozudur; hastalığın kendisi bırakmaz. 'Exposure' (maruz kalma) 'to' ile kullanılır ama mantığı bozar: virüsle karşılaşmak hastalığa yakalanmayı önlemez. 'Impunity' (cezasızlık) 'immunity' ile biçimce benzer ama burada anlam kurmaz." },

  // ---------- dil bilgisi ----------
  { id: 'sv-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['weaken'],
    level: 'orta', cefr: 'B2', konu: ['bağlaç', 'koşul'],
    q: 'Vaccines made from a live but weakened virus tend to give strong and long-lasting protection, and they are safe for most people ---- their immune system has not been seriously damaged by illness or by certain medicines.',
    options: ['unless', 'in case', 'even if', 'so that', 'provided that'], answer: 4,
    explain: "'Provided that' (… şartıyla, yeter ki) bir koşul kurar: canlı ama zayıflatılmış virüsten yapılan aşılar, bağışıklık sistemi hastalık ya da bazı ilaçlar yüzünden ciddi biçimde zarar görmemişse çoğu insan için güvenlidir. 'Unless' (-medikçe) buradaki olumsuz yan cümleyle birleşince mantığı tersine çevirir: aşılar yalnız bağışıklık sistemi zarar görmüş kişiler için güvenli olurdu. 'Even if' (-se bile) sağlam bir bağışıklık sistemini güvenliğin önünde bir engelmiş gibi gösterir. 'In case' (… ihtimaline karşı) önlem, 'so that' (-sın diye) amaç bildirir; ikisi de iki yarı arasında anlamlı bir ilişki kurmaz." },

  { id: 'sv-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['antibody'],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'Doctors can often find out whether a person has been infected with a particular virus in the past ---- a simple antibody test, even if that person never had any symptoms.',
    options: ['in spite of', 'in the absence of', 'for the sake of', 'by means of', 'on behalf of'], answer: 3,
    explain: "'By means of' (… aracılığıyla, … yoluyla) bir yöntemi ya da aracı gösterir: doktorlar, hiç belirti göstermemiş birinin geçmişte belli bir virüsle enfekte olup olmadığını çoğu zaman basit bir antikor testiyle öğrenebilir. 'In the absence of' (… olmadığında) mantığı bozar: ne test ne belirti varsa doktorun dayanacağı bir şey kalmaz; 'even if that person never had any symptoms' de bunu gösteriyor. 'In spite of' (-e rağmen) testi bir engel gibi gösterir. 'For the sake of' (… uğruna, … hatırına) ve 'on behalf of' (… adına) burada anlam kurmaz." },

  { id: 'sv-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['wane'],
    level: 'zor', cefr: 'C1', konu: ['isim cümleciği'],
    q: 'Scientists still cannot fully predict ---- a particular person will respond to a vaccine, nor can they always explain ---- makes the protection from some vaccines last for decades while that from others wanes within a few years.',
    options: ['how / what', 'whether / that', 'what / how', 'that / whether', 'which / what'], answer: 0,
    explain: "İlk boşluktan sonra eksiksiz bir cümle geliyor (a particular person will respond to a vaccine); 'how' (nasıl) buraya hem yapıca hem anlamca uyar: bir kişinin bir aşıya nasıl tepki vereceği. İkinci boşluktan sonra öznesi olmayan bir yüklem geliyor (makes the protection … last); eksik özneyi kendisi karşılayan 'what' (ne, neyin) gerekir: korumayı neyin on yıllarca sürdürdüğü. 'That' ve 'whether' ardından eksiksiz bir cümle ister; özne yerini tutamadıkları için ikinci boşluğa giremez. 'How' da ikinci boşluğa giremez. 'What' ve 'which' ise ilk boşluğa uymaz: ikisi de ardından bir öğesi eksik cümle ister (ör. what he will respond to, which vaccine he will respond to), oysa buradaki cümle eksiksiz." },

  { id: 'sv-g4', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['kip (modal)'],
    q: 'Most vaccines are kept in a refrigerator at between 2 and 8 °C, and health workers ---- allow them to freeze, since freezing can damage some vaccines so badly that they no longer protect properly.',
    options: ["don't have to", "mustn't", 'have to', 'may', 'had better'], answer: 1,
    explain: "Cümlenin sonu bir gerekçe veriyor: donma bazı aşılara artık iyi koruyamayacakları kadar zarar verebilir. Yani aşıların donmasına izin vermek yasaktır; yasak 'mustn't' (-memeli) ile kurulur. 'Don't have to' yalnız zorunluluğun olmadığını söyler ('izin vermek zorunda değiller'); oysa burada iş yapılırsa sorun çıkıyor, bu yüzden zorunluluk yokluğu değil yasak gerekir. 'Have to' donmaya izin vermeyi zorunlu yapar, 'may' buna izin verir, 'had better' ise 'izin verseler iyi olur' diye öğütler; üçü de donmanın zararıyla çelişir." },

  // ---------- cümle tamamlama ----------
  { id: 'sv-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['dormant', 'come down with', 'contagious'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: '----, the chickenpox virus does not leave the body, and it can remain dormant in nerve cells for decades before causing a painful rash known as shingles.',
    options: [
      'Because chickenpox is so contagious that it often spreads through a whole class within weeks',
      'Although most children who come down with chickenpox are better within a week or two',
      'Even though chickenpox is generally far more serious in adults than in young children',
      'Since the itchy spots that chickenpox causes usually heal without leaving any lasting marks',
      'Unless children with chickenpox are kept away from school until all their spots have crusted over',
    ], answer: 1,
    explain: "Ana cümle, su çiçeği virüsünün vücuttan çıkmadığını, sinir hücrelerinde on yıllarca uykuda kalıp sonra zona denen ağrılı bir döküntüye yol açabildiğini söylüyor. Bununla karşıtlık kuran, su çiçeğine yakalanan çocukların çoğunun bir iki hafta içinde iyileştiğini söyleyen cümledir: çocuk iyileşir ama virüs gitmez. 'Even though' ile başlayan seçenek karşıtlık bağlacı taşıyor, ama hastalığın yetişkinlerde daha ağır geçmesiyle virüsün vücutta kalması arasında bir karşıtlık yok. 'Since' ile başlayan seçeneğin içeriği karşıtlığa yakın (döküntü iz bırakmadan iyileşir), ama 'since' neden bildirir ve iyileşme virüsün vücutta kalmasının nedeni olamaz. Bulaşıcılık da virüsün vücutta kalmasını açıklamaz; çocukların okuldan uzak tutulması koşulu ise ana cümleyle ilgisizdir." },

  { id: 'sv-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['wane', 'booster'],
    level: 'kolay', cefr: 'B2', konu: ['neden-sonuç'],
    q: 'Because the protection provided by some vaccines gradually wanes over the years, ----.',
    options: [
      'a single dose given in infancy is usually enough to protect a person for life',
      'people who have been vaccinated can no longer pass the infection on to others',
      'the antibodies they produce tend to stay in the blood at the same level for decades',
      'they are usually offered only to people who have already recovered from the disease',
      'many people may need a booster dose a number of years after they were first vaccinated',
    ], answer: 4,
    explain: "'Because' bir neden veriyor: bazı aşıların sağladığı koruma yıllar içinde yavaş yavaş azalır. Bundan çıkan sonuç, birçok kişinin ilk aşılanmasından birkaç yıl sonra bir rapel doza ihtiyaç duyabilmesidir. Bebeklikte yapılan tek dozun ömür boyu yettiğini ya da antikorların on yıllarca aynı düzeyde kaldığını söyleyen seçenekler verilen nedenle çelişir. Aşılananların hastalığı artık bulaştıramaması ve aşıların yalnız hastalığı geçirmiş kişilere yapılması ise korumanın zamanla azalmasından çıkmaz." },

  // ---------- çeviri ----------
  { id: 'sv-c1', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['hesitant'],
    level: 'orta', cefr: 'B2', konu: ['isim-fiil ve mastar'],
    q: 'Sağlık çalışanları, çocuklarını aşılatmakta tereddüt eden anne babaları suçlamak yerine onların sorularını dinlemeye teşvik ediliyor.',
    options: [
      'Instead of blaming health workers, parents who are hesitant to have their children vaccinated are encouraged to ask them questions.',
      'Instead of listening to the questions of parents who are hesitant to have their children vaccinated, health workers are encouraged to blame them.',
      'Instead of blaming parents, health workers who are hesitant to vaccinate children are encouraged to listen to their questions.',
      'Instead of blaming parents who are hesitant to have their children vaccinated, health workers are encouraged to listen to their questions.',
      'Instead of blaming parents who refuse to have their children vaccinated, health workers are now encouraged to answer every one of their questions.',
    ], answer: 3,
    explain: "Türkçe cümlede iki isim-fiil yapısı var: 'suçlamak yerine' İngilizcede 'instead of + -ing' ile (instead of blaming), 'dinlemeye teşvik ediliyor' ise 'be encouraged to' ile (are encouraged to listen) karşılanır. 'Çocuklarını aşılatmakta tereddüt eden' de ettirgen yapıyla 'hesitant to have their children vaccinated' olur. Doğru çeviri kimin teşvik edildiğini, kimin tereddüt ettiğini ve neyin yerine neyin önerildiğini korur. Yanlışlardan biri rolleri değiştirip anne babaları sağlık çalışanlarına soru sormaya teşvik ediyor; biri anlamı tersine çevirip suçlamayı öneriyor; biri tereddüdü sağlık çalışanlarına yüklüyor; biri de 'tereddüt eden'i 'reddeden', 'sorularını dinlemek'i 'bütün sorularını yanıtlamak' yapıyor." },

  // ---------- okuma parçası (3 soru, YÖKDİL biçimi) ----------
  { id: 'sv-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T,
    cards: ['ward off', 'mild', 'eventually', 'stimulate', 'provoke', 'eliminate'],
    level: 'orta', cefr: 'B2', title: 'İnek çiçeğinden mRNA aşılarına',
    text: "In eighteenth-century England, many country people believed that catching cowpox, a mild disease that milkmaids picked up from cows, helped them to ward off smallpox. In 1796, the doctor Edward Jenner decided to put this belief to the test. He took material from a cowpox sore on a milkmaid's hand and placed it in small cuts on the arm of a young boy. Some weeks later, he deliberately exposed the boy to smallpox, and the boy stayed healthy. The word 'vaccine' comes from vacca, the Latin for cow. Vaccination eventually spread around the world, and in 1980 the World Health Organization declared that smallpox had been eradicated. Most vaccines still rely on Jenner's basic idea: they show the immune system what a germ looks like without causing the illness. One of the newest types, however, contains no germ at all. An mRNA vaccine carries instructions that lead our own cells to make a harmless piece of a virus, which then stimulates the body's defences. Scientists began working on this approach around 1990, but for years they faced a serious obstacle: the laboratory-made mRNA itself provoked inflammation. In 2005, Katalin Karikó and Drew Weissman showed that small changes to its chemical building blocks largely eliminated this reaction. When COVID-19 vaccines that relied on their discovery appeared within a year of the pandemic's start, some people found the speed suspicious. In fact, it was largely the reward for decades of patient research, much of it done with little money or recognition. In 2023, the two scientists received the Nobel Prize in Physiology or Medicine.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, in 1796 Jenner ----.',
        options: [
          'noticed that milkmaids who had caught smallpox were later protected against cowpox',
          'used material from a smallpox sore to protect a young boy against cowpox',
          'was the first person to suggest that cowpox might protect people from smallpox',
          'gave a boy cowpox to find out whether it would protect him against smallpox',
          'explained why cowpox and smallpox leave such similar sores on the skin of patients',
        ], answer: 3,
        explain: "Parçaya göre İngiliz kırsalında birçok kişi, inek sağan kadınların ineklerden kaptığı inek çiçeğinin çiçek hastalığından koruduğuna inanıyordu. Jenner 1796'da bu inancı sınadı: bir çocuğa inek çiçeği yarasından alınan maddeyi verdi, birkaç hafta sonra da onu bilerek çiçek hastalığına maruz bıraktı ve çocuk hastalanmadı. Jenner'ı bu fikri ilk ortaya atan kişi gibi gösteren seçenek parçayla çelişir: inanç ondan önce de vardı. Çiçek hastalığı maddesiyle inek çiçeğine karşı korumak ve çiçek hastalığı geçirenlerin inek çiçeğinden korunması ilişkiyi tersine çevirir. İki hastalığın yaralarının neden benzediği ise parçada anlatılmıyor." },
      { konu: ['ayrıntı'],
        q: 'According to the passage, the obstacle that mRNA researchers faced for years was that ----.',
        options: [
          'the vaccines could only be produced in quantities that were far too small',
          'the vaccines had to contain a weakened form of the virus to be effective',
          'the artificially produced genetic material set off an unwanted reaction',
          'most scientists were convinced that the whole approach had already failed',
          'human cells could not be made to produce any part of a virus at all',
        ], answer: 2,
        explain: "Parçaya göre mRNA aşıları üzerinde 1990 dolayından beri çalışılıyordu, ama araştırmacılar yıllarca ciddi bir engelle karşılaştı: laboratuvarda üretilen mRNA'nın kendisi vücutta iltihaba yol açıyordu. Karikó ve Weissman'ın bulduğu küçük kimyasal değişiklikler bu tepkiyi büyük ölçüde ortadan kaldırdı. Aşıların zayıflatılmış virüs içermesi gerektiğini söyleyen seçenek parçayla çelişir: bu yeni aşılar hiç mikrop içermez. İnsan hücrelerine virüs parçası ürettirilemediğini söyleyen seçenek de çelişir; parça tersine hücrelerin zararsız bir virüs parçası ürettiğini anlatıyor. Aşıların yeterince üretilememesinden ve bilim insanlarının yöntemi başarısız saymasından ise parçada hiç söz edilmiyor." },
      { konu: ['yazarın tutumu'],
        q: "The author's attitude towards the speed with which the mRNA vaccines against COVID-19 appeared can best be described as ----.",
        options: [
          'suspicious, as it suggests that important safety checks were skipped',
          'indifferent, as the author is mainly interested in the history of smallpox',
          'critical, as the scientists behind it received little money or recognition',
          'favourable, as the author sees it as the fruit of many years of earlier work',
          'doubtful, as the author thinks that mRNA vaccines work less well than older ones',
        ], answer: 3,
        explain: "Yazar, Karikó ve Weissman'ın buluşuna dayanan COVID-19 aşılarının pandeminin başlamasından sonraki bir yıl içinde çıkmasını bazı kişilerin kuşkuyla karşıladığını söylüyor, ama kendisi bu hızı on yıllarca süren sabırlı araştırmaların ödülü olarak görüyor. Bu olumlu, takdir eden bir tutumdur. Kuşkulu tutumu anan seçenek bir tuzaktır: kuşku yazarın değil, 'bazı insanlar'ın tepkisidir ve parçada güvenlik denetimlerinin atlandığına dair bir şey yok. Araştırmaların az parayla ve az ilgiyle yapıldığı parçada geçiyor, ama yazar bunu hızı eleştirmek için değil, hızın arkasındaki emeği göstermek için söylüyor. Yazarın konuya ilgisiz olduğu ya da mRNA aşılarını eskilerinden daha az etkili bulduğu da parçadan çıkmaz." },
    ] },

  // ---------- paragraf tamamlama ----------
  { id: 'sv-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['inoculate', 'mild', 'contagious'],
    level: 'orta', cefr: 'C1', konu: ['gönderim'],
    q: 'Long before the first vaccines, people in China, India and the Ottoman Empire had found a risky but often effective way of protecting themselves against smallpox. ----. The person who received it usually suffered only a mild form of the disease and was then protected for life, although a small number of those treated died. Lady Mary Wortley Montagu, whose husband was the British ambassador in Istanbul, described the practice in a letter in 1717 and later had her own children inoculated, hoping to persuade others in England to follow her example.',
    options: [
      'Smallpox itself killed a large share of the people it infected and left many of those who survived it badly scarred for life',
      'The disease was so contagious that it could sweep through a crowded town within a few weeks',
      'One common method was to rub a little material from a smallpox sore into a small scratch on the skin of a healthy person',
      'European doctors, however, were slow to take seriously the reports that were reaching them from these countries',
      'People who survived smallpox in the ordinary way were also protected from catching it a second time',
    ], answer: 2,
    explain: "Boşluktan sonraki cümle 'The person who received it' (onu alan kişi) diye başlıyor; demek ki boşluktaki cümle bir kişiye verilen bir şeyden söz etmeli. Ardından gelen cümle de 'the practice' (bu uygulama) diye bir uygulamaya gönderme yapıyor. İkisine birden uyan tek seçenek, yaygın bir yöntemi anlatan cümledir: çiçek hastalığı yarasından alınan biraz madde, sağlıklı bir kişinin derisindeki küçük bir çiziğe sürülürdü. 'It' bu maddedir; 'those treated' (bu işlemi görenler) de bu yönteme bağlanır. Çiçek hastalığının birçok kişiyi öldürdüğünü ya da çok bulaşıcı olduğunu söyleyen cümlelerden sonra 'onu alan kişi'nin yalnız hafif bir hastalık geçirmesi anlamsız kalır. Hastalığı doğal yoldan atlatanların korunduğunu söyleyen cümle doğru bir bilgi veriyor, ama kimseye bir şey verildiğinden söz etmiyor. Avrupalı doktorların gelen haberleri ciddiye almakta ağır davrandığını söyleyen cümle de yöntemi anlatmıyor; ondan sonra 'onu alan kişi' ile 'bu işlemi görenler' boşta kalır. Avrupa'nın tepkisi zaten Montagu'yu anlatan son cümleden sonra beklenirdi." },

  // ---------- akışı bozan cümle ----------
  { id: 'sv-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T,
    cards: ['immunity', 'pathogen', 'contagious', 'coverage', 'mild'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'When a large enough proportion of a community is immune to a contagious disease, the pathogen that causes it struggles to find new people to infect.',
      'Each infected person then passes it on to fewer others, so chains of infection tend to break before an outbreak can grow large.',
      'This effect, known as herd immunity, also protects people who cannot be vaccinated themselves, such as babies who are still too young for certain vaccines.',
      'Like all medicines, vaccines can have side effects, although most of these are mild, such as a sore arm or a slight fever for a day or two.',
      'How high vaccination coverage needs to be depends on how easily the disease spreads; for measles, one of the most contagious diseases known, it is usually put at about 95 per cent.',
    ], answer: 3,
    explain: "Parça sürü bağışıklığını adım adım anlatıyor: bir toplulukta yeterince insan bağışık olunca hastalık yapan mikrop bulaştıracak yeni kişi bulmakta zorlanır (I); her hasta daha az kişiye bulaştırır ve salgınlar büyümeden söner (II); sürü bağışıklığı denen bu etki aşı olamayanları da korur (III); gereken aşılama oranı hastalığın ne kadar kolay yayıldığına bağlıdır ve kızamıkta genellikle yüzde 95 dolayında kabul edilir (V). IV. cümle aşıların yan etkilerine geçerek bu akışı kesiyor; konu yine aşılar ama sürü bağışıklığıyla ilgisi yok. V. cümle de IV. cümleye değil, I. cümledeki 'yeterince büyük bir pay' fikrine bağlanıyor." },
];

export default { id: 'saglik-asi', course: C, title: U, order: 5, cards, items };
