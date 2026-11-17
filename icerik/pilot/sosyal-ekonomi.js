// iDil › Sosyal bilimler › Neden mantıksız seçeriz?
// Tümü özgün: Claude yazdı (13 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (yalnız olgular; metin özgün):
// - Klasik iktisat kişiyi akılcı varsayar; davranışsal iktisat bu varsayımdan sistemli sapmaları inceler (genel bilgi).
// - Beklenti kuramı (prospect theory): Daniel Kahneman ve Amos Tversky, 1979 (Econometrica). Kayıptan kaçınma: bir kayıp, aynı
//   büyüklükteki kazançtan daha güçlü hissedilir; tahminlere göre yaklaşık iki kat (temkinli). Yazı-tura bahsi yerleşik bir örnek.
// - Varsayılan seçenek: Eric Johnson ve Daniel Goldstein, 2003 (Science). Avrupa ülkelerinde "katılmak istemeyen bildirir"
//   düzeninde organ bağışı onay oranları, "katılmak isteyen bildirir" düzenindekilerden çok yüksek çıktı. Gerçek nakil sayısı
//   başka etkenlere de bağlı (temkinli).
// - Çapalama: Tversky ve Kahneman, 1974 (Science). Düşük ya da yüksek bir sayıda durmaya ayarlanmış bir çark; ardından BM
//   üyelerinin yüzde kaçının Afrika ülkesi olduğu soruldu; yüksek sayıyı görenler daha yüksek tahmin verdi. Sayılar yazılmadı.
// - Dürtme: Richard Thaler ve Cass Sunstein, Nudge (2008). Emeklilik planına otomatik katılım katılımı artırdı (ör. Madrian ve
//   Shea, 2001).
// - Kreşlerde gecikme cezası: Uri Gneezy ve Aldo Rustichini, 2000 ("A Fine Is a Price"). İsrail'de kreşler çocuğunu geç alan
//   velilere küçük bir ceza koyunca geç kalan veli sayısı arttı.
// - Düşüşte yatırımcıların hesaplarına daha seyrek bakması ("devekuşu etkisi"; Karlsson, Loewenstein ve Seppi, 2009), batık
//   maliyet yanılgısı, eldekiyle yetinme (Herbert Simon), sonuçların beklentiye göre değerlendirilmesi: genel ve yerleşik bilgi;
//   sayı verilmedi.
// - BM 1945'te kuruldu; birçok Afrika ülkesi 1960'larda bağımsızlığını kazandıktan sonra üye oldu (se-p1 çeldiricisi).

const T = 'taslak';
const C = 'sosyal';
const U = 'Neden mantıksız seçeriz?';

const cards = [
  { code: 'rational', title: 'akılcı, mantığa dayalı; aklıyla hareket eden', pos: 'sıfat', cefr: 'C1', ipa: '/ˈræʃnəl/',
    text: "Duyguyla ya da dürtüyle değil, akıl yürütmeyle verilen karar ve davranışları anlatır: a rational choice, a rational explanation. İktisatta 'rational' kişi, seçenekleri tartıp kendi çıkarına en uygun olanı seçen kişidir. Karşıtı 'irrational' (akıl dışı). 'Rationale' (gerekçe) ayrı bir sözcüktür.",
    example: "After a good night's sleep, she felt calm enough to make a rational decision about the job offer.",
    exampleTr: 'İyi bir gece uykusundan sonra iş teklifi konusunda akılcı bir karar verecek kadar sakin hissediyordu.',
    synonyms: ['logical', 'reasoned', 'sensible'], family: ['rationally', 'rationality', 'irrational'] },
  { code: 'impulsive', title: 'dürtüsel; düşünmeden, ani bir istekle hareket eden', pos: 'sıfat', cefr: 'C1', ipa: '/ɪmˈpʌlsɪv/',
    text: "Önceden düşünmeden, o anki isteğe uyarak yapılan davranışı ya da öyle davranan kişiyi anlatır: an impulsive purchase (anlık bir istekle yapılan alışveriş). Adı 'impulse' (dürtü, ani istek): buy something on impulse (bir şeyi aklına esince almak). Zarfı 'impulsively'.",
    example: 'In an impulsive moment, he booked a weekend in Rome and only later checked how much money he had left.',
    exampleTr: "Bir anlık hevesle Roma'da bir hafta sonu tatili ayarladı, ne kadar parası kaldığına ancak sonra baktı.",
    synonyms: ['rash', 'hasty', 'spontaneous'], family: ['impulse', 'impulsively'] },
  { code: 'overconfident', title: 'kendine fazla güvenen; bir konuda gereğinden fazla emin', pos: 'sıfat', cefr: 'C1', ipa: '/ˌəʊvəˈkɒnfɪdənt/',
    text: "Bilgisine, becerisine ya da şansına gerçekte olduğundan fazla güvenen kişiyi anlatır: overconfident about one's chances. 'Confident' (kendinden emin) olumludur; 'over-' öneki 'gereğinden fazla' anlamı katar. Adı 'overconfidence' (aşırı özgüven); davranışsal iktisatta sık anılan bir yanılgıdır.",
    example: 'The team were so overconfident before the final that they hardly trained, and they lost by three goals.',
    exampleTr: 'Takım finalden önce kendine o kadar fazla güveniyordu ki neredeyse hiç antrenman yapmadı ve üç farklı yenildi.',
    synonyms: ['too sure of oneself', 'cocky'], family: ['overconfidence', 'confident', 'confidence'] },
  { code: 'bias', title: 'yanlılık, önyargı; düşüncede sistemli yanılgı', pos: 'isim', cefr: 'C1', ipa: '/ˈbaɪəs/',
    text: "Gündelik dilde birinin lehine ya da aleyhine eğilim, önyargıdır: bias against older workers. Psikoloji ve iktisatta 'cognitive bias' düşünmedeki sistemli yanılgı demektir: confirmation bias (doğrulama yanlılığı). Sıfatı 'biased' (taraflı), karşıtı 'unbiased' (tarafsız).",
    example: 'Because of a common bias, we tend to notice the evidence that supports our views and overlook the rest.',
    exampleTr: 'Yaygın bir düşünce yanılgısı yüzünden görüşlerimizi destekleyen kanıtları fark etme, gerisini gözden kaçırma eğilimindeyiz.',
    synonyms: ['prejudice', 'distortion', 'partiality'], family: ['biased', 'unbiased'] },
  { code: 'incentive', title: 'teşvik, özendirici; bir şeyi yapmak için neden (ödül, çıkar)', pos: 'isim', cefr: 'C1', ipa: '/ɪnˈsentɪv/',
    text: "Birini bir davranışa yönelten ödül ya da çıkar: tax incentives (vergi teşvikleri). 'An incentive to do something' kalıbıyla mastar alır: give people an incentive to save. Caydıran şeye 'disincentive' denir. İktisatta cezalar da davranışı yönlendirmek için kullanılan araçlar arasında sayılır.",
    example: 'Cheaper tickets outside the rush hour give travellers an incentive to avoid the busiest trains.',
    exampleTr: 'Yoğun saatler dışındaki daha ucuz biletler, yolcuları en kalabalık trenlerden uzak durmaya özendirir.',
    synonyms: ['motivation', 'encouragement', 'inducement'], family: ['incentivise', 'disincentive'] },
  { code: 'default', title: 'varsayılan seçenek, hazır ayar (başka bir şey seçilmezse geçerli olan)', pos: 'isim', cefr: 'C1', ipa: '/dɪˈfɔːlt/',
    text: "Kişi değiştirmezse kendiliğinden geçerli olan seçenek ya da ayar: the default setting. 'By default' kendiliğinden, varsayılan olarak demektir. Finansta ayrı bir anlamı var: borcunu ödememe (default on a loan). Bu ünitedeki anlam 'varsayılan seçenek'tir.",
    example: 'When you install the program, English is the default, but you can switch to Turkish in the settings.',
    exampleTr: 'Programı kurduğunuzda varsayılan dil İngilizcedir, ama ayarlardan Türkçeye geçebilirsiniz.',
    synonyms: ['preset', 'standard setting'], family: [] },
  { code: 'aversion', title: 'hoşlanmama, kaçınma; bir şeye karşı güçlü isteksizlik', pos: 'isim', cefr: 'C1', ipa: '/əˈvɜːʃn/',
    text: "'An aversion to something' kalıbıyla 'to' alır: an aversion to crowds. İktisatta 'risk aversion' (riskten kaçınma) ve 'loss aversion' (kayıptan kaçınma) yerleşik terimlerdir. Sıfatı 'averse': risk-averse (riskten kaçınan). 'Adverse' (olumsuz, zararlı) ile karıştırma.",
    example: 'His aversion to risk is so strong that he keeps all his savings in an account that pays almost no interest.',
    exampleTr: 'Riskten o kadar kaçınıyor ki bütün birikimini neredeyse hiç faiz vermeyen bir hesapta tutuyor.',
    synonyms: ['dislike', 'reluctance', 'distaste'], family: ['averse'] },
  { code: 'outcome', title: 'sonuç (bir olayın, sürecin ya da kararın)', pos: 'isim', cefr: 'B2', ipa: '/ˈaʊtkʌm/',
    text: "Bir sürecin, kararın ya da olayın sonunda ortaya çıkan durum: the outcome of an election, an uncertain outcome. 'Result'a yakındır, ama çoğu zaman önceden bilinmeyen, merakla beklenen bir sonucu anlatır. Vurgu ilk hecededir.",
    example: 'Nobody could predict the outcome of the match until the very last minute.',
    exampleTr: 'Maçın nasıl biteceğini son dakikaya kadar kimse kestiremedi.',
    synonyms: ['result', 'consequence', 'upshot'], family: [] },
  { code: 'trade-off', title: 'denge, takas; birini kazanmak için ötekinden vazgeçmeyi gerektiren seçim (iktisatta: ödünleşim)', pos: 'isim', cefr: 'C1', ipa: '/ˈtreɪd ɒf/',
    text: "İki istenen şey arasında birinden ödün vermeyi gerektiren seçim ya da denge: a trade-off between speed and safety. 'Between' ile kurulur. Fiil olarak ayrı yazılır: trade off quality against price (fiyat uğruna kaliteden ödün vermek).",
    example: 'For many students, a part-time job involves a trade-off between earning money and having enough time to study.',
    exampleTr: 'Birçok öğrenci için yarı zamanlı bir iş, para kazanmakla derse yeterince zaman ayırmak arasında bir seçim yapmak demektir.',
    synonyms: ['compromise', 'balance'], family: ['trade off'] },
  { code: 'opt', title: 'seçmek, tercih etmek; (opt out) katılmamayı, (opt in) katılmayı seçmek', pos: 'fiil', cefr: 'C1', ipa: '/ɒpt/',
    text: "'Opt for something' (bir şeyi seçmek) ve 'opt to do something' (bir şeyi yapmayı seçmek) kalıplarıyla kullanılır. 'Opt out (of)' bir düzenden çıkmayı, 'opt in' bir düzene katılmayı seçmektir; davranışsal iktisatta ikisi de çok geçer. Adı 'option' (seçenek), sıfatı 'optional' (isteğe bağlı).",
    example: 'Members who no longer want the weekly newsletter can opt out at any time by clicking the link at the bottom.',
    exampleTr: 'Haftalık bülteni artık istemeyen üyeler, alttaki bağlantıya tıklayarak istedikleri zaman bültenden çıkabilir.',
    synonyms: ['choose', 'decide', 'go for'], family: ['option', 'optional', 'opt-out'] },
  { code: 'nudge', title: 'dürtmek; (birini) zorlamadan bir yöne itmek, yönlendirmek', pos: 'fiil', cefr: 'C1', ipa: '/nʌdʒ/',
    text: "Asıl anlamı dirsekle hafifçe dürtmektir. Mecazen birini zorlamadan bir davranışa yöneltmek: nudge someone towards a choice, nudge someone into doing something. Thaler ve Sunstein'ın 2008'deki kitabından sonra isim olarak da yaygınlaştı: a nudge (dürtme).",
    example: 'Putting fruit at eye level in the school canteen nudged pupils towards healthier snacks.',
    exampleTr: 'Okul kantininde meyvelerin göz hizasına konması, öğrencileri daha sağlıklı atıştırmalıklara yöneltti.',
    synonyms: ['prod', 'steer', 'encourage'], family: [] },
  { code: 'evaluate', title: 'değerlendirmek; değerini ya da niteliğini tartmak', pos: 'fiil', cefr: 'B2', ipa: '/ɪˈvæljueɪt/',
    text: "Bir şeyin değerini, niteliğini ya da işe yarayıp yaramadığını tartmak: evaluate a proposal, evaluate the evidence. Adı 'evaluation' (değerlendirme). 'Value' (değer) ile aynı ailedendir; çoğu bağlamda 'assess' ile yer değiştirebilir.",
    example: 'Before you sign the contract, ask a lawyer to evaluate the risks for you.',
    exampleTr: 'Sözleşmeyi imzalamadan önce riskleri bir avukata değerlendirtin.',
    synonyms: ['assess', 'judge', 'appraise'], family: ['evaluation', 'value'] },
  { code: 'tempt', title: 'cezbetmek, ayartmak; bir şeyi yapmaya özendirmek', pos: 'fiil', cefr: 'B2', ipa: '/tempt/',
    text: "'Tempt someone into (doing) something' ya da 'tempt someone to do something' kalıplarıyla kullanılır. Edilgeni çok yaygındır: I was tempted to leave early (erken çıkmak içimden geldi). Adı 'temptation' (ayartı), sıfatı 'tempting' (cazip).",
    example: 'On my way home, the smell of fresh bread tempted me into the bakery.',
    exampleTr: 'Eve dönerken taze ekmek kokusu beni fırına çekti.',
    synonyms: ['lure', 'entice', 'attract'], family: ['temptation', 'tempting'] },
  { code: 'perceive', title: 'algılamak; bir şeyi bir şey olarak görmek, saymak', pos: 'fiil', cefr: 'C1', ipa: '/pəˈsiːv/',
    text: "'Perceive something as something' kalıbı sık geçer: perceive a price as fair (bir fiyatı makul bulmak). Duyularla fark etmek anlamı da vardır. Adı 'perception' (algı); 'perceived' algılanan demektir: perceived risk (algılanan risk).",
    example: 'Many shoppers perceive 19.99 as a much lower price than 20.',
    exampleTr: "Birçok alışverişçi 19,99'u 20'den çok daha düşük bir fiyat olarak algılar.",
    synonyms: ['see', 'regard', 'view'], family: ['perception', 'perceptive', 'perceived'] },
  { code: 'settle for', title: '(daha iyisi olmayınca) ile yetinmek, -e razı olmak', pos: 'öbek fiil', cefr: 'C1', ipa: '/ˈsetl fɔː(r)/',
    text: "İstediğinden daha azını kabullenmek: settle for second place, settle for less. 'Settle on' (bir şeyde karar kılmak) ve 'settle down' (yerleşmek, durulmak) ile karıştırma.",
    example: 'The flight was almost full, so we had to settle for seats at the back of the plane.',
    exampleTr: 'Uçak neredeyse doluydu, bu yüzden arka sıralardaki koltuklarla yetinmek zorunda kaldık.',
    synonyms: ['accept', 'make do with'], family: [] },
  { code: 'put off', title: 'ertelemek, sonraya bırakmak', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌpʊt ˈɒf/',
    text: "Ardından isim ya da -ing gelir: put off a decision, put off going to the dentist. Nesne zamir olunca araya girer: put it off. 'Put someone off' ise birinin hevesini kaçırmak, soğutmak demektir; bu ayrı bir anlamdır.",
    example: 'We had to put off the meeting until Friday because two of the managers were ill.',
    exampleTr: 'Yöneticilerden ikisi hasta olduğu için toplantıyı cumaya ertelemek zorunda kaldık.',
    synonyms: ['postpone', 'delay', 'defer'], family: [] },
  { code: 'count on', title: '-e güvenmek, -e bel bağlamak', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˈkaʊnt ɒn/',
    text: "'Count on someone/something' (birine ya da bir şeye güvenmek) ve 'count on someone/something to do something' (bir şeyin olacağına güvenmek) kalıplarıyla kullanılır. 'Rely on' ve 'depend on'a yakındır.",
    example: 'Farmers in the region can no longer count on regular rain in the spring.',
    exampleTr: 'Bölgedeki çiftçiler artık ilkbaharda düzenli yağmura güvenemiyor.',
    synonyms: ['rely on', 'depend on', 'bank on'], family: [] },
  { code: 'systematically', title: 'sistemli olarak; (yanılgı için) rastgele değil, hep aynı yönde', pos: 'zarf', cefr: 'C1', ipa: '/ˌsɪstəˈmætɪkli/',
    text: "Rastgele değil, bir düzen ya da yöntem içinde: collect data systematically. Davranışsal iktisatta 'insanlar sistemli olarak yanılır' sözü, hataların rastgele dağılmadığını, hep aynı yönde olduğunu anlatır. Sıfatı 'systematic'.",
    example: 'The old scales systematically showed every parcel about 200 grams heavier than it really was.',
    exampleTr: 'Eski tartı her paketi sistemli olarak gerçekte olduğundan yaklaşık 200 gram ağır gösteriyordu.',
    synonyms: ['consistently', 'methodically'], family: ['systematic', 'system'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'se-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['rational', 'impulsive', 'overconfident'],
    level: 'kolay', cefr: 'C1', konu: ['sıfat'],
    q: 'Traditional economic models assume that consumers are ----: they compare all the options open to them and always choose the one that serves their own interests best.',
    options: ['rational', 'emotional', 'impulsive', 'generous', 'overconfident'], answer: 0,
    explain: "'Rational' akılcı demektir. İki noktadan sonraki açıklama (bütün seçenekleri karşılaştırmak ve her zaman kendi çıkarına en uygun olanı seçmek) geleneksel iktisat modellerinin varsaydığı akılcı tüketiciyi tanımlıyor. 'Emotional' (duygusal) 'rational'a biçimce benziyor ama bu tanımla çelişiyor. 'Impulsive' (dürtüsel) düşünmeden davranan kişidir; seçenekleri tek tek karşılaştırmak bunun tersidir. 'Overconfident' (kendine fazla güvenen) bu tanımı karşılamaz. 'Generous' (cömert) ise kendi çıkarını en üstte tutmakla çelişir." },

  // ---------- dil bilgisi ----------
  { id: 'se-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['put off'],
    level: 'orta', cefr: 'B2', konu: ['bağlaç', 'karşıtlık'],
    q: 'Many people keep putting off saving for their old age ---- they are fully aware that every year of delay will make it harder to build up enough money.',
    options: ['now that', 'even though', 'despite', 'so that', 'as long as'], answer: 1,
    explain: "Cümlenin iki yarısı arasında beklenmedik bir durum var: insanlar, her yıl ertelemenin yeterince birikim yapmayı zorlaştıracağını çok iyi bildikleri hâlde yaşlılıkları için para biriktirmeyi ertelemeyi sürdürüyor. Bu karşıtlığı 'even though' (-diği hâlde) kurar. 'Despite' de karşıtlık bildirir ama edattır; ardından tam cümle değil isim ya da -ing gelir (despite being fully aware). 'Now that' (artık … olduğuna göre) bilmeyi ertelemenin nedeni yapar; bu mantıksızdır. 'So that' (-sın diye) anlamsız bir amaç, 'as long as' (-dığı sürece) anlamsız bir koşul kurar." },
  { id: 'se-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'When share prices are falling, many investors check their accounts less often than usual ---- discovering how much money they have lost.',
    options: ['with a view to', 'in exchange for', 'for fear of', 'on behalf of', 'by means of'], answer: 2,
    explain: "Hisse fiyatları düşerken birçok yatırımcı hesabına her zamankinden seyrek bakıyor, çünkü ne kadar para kaybettiğini öğrenmekten çekiniyor. Bu anlamı 'for fear of' (-mekten korkarak, -me korkusuyla) verir; ardından isim ya da -ing gelir. 'With a view to' (-mek amacıyla) tersini söyler: hesaba daha seyrek bakmak kaybı öğrenmenin yolu olamaz. 'In exchange for' (karşılığında), 'on behalf of' (adına) ve 'by means of' (aracılığıyla) bu cümlede anlam kurmaz." },

  { id: 'se-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['nicelik'],
    q: 'Over the past few decades, ---- studies of the sunk cost fallacy ---- that people often continue to put money and effort into a failing project simply because they have already invested so much in it.',
    options: ['the number of / has shown', 'a number of / has shown', 'a number of / have shown', 'a great deal of / have shown', 'the number of / have shown'], answer: 2,
    explain: "'A number of' (birtakım, bir dizi) ardından sayılabilen çoğul isim alır ve fiil bu isme uyar: 'a number of studies have shown' (birtakım çalışmalar … gösterdi). 'Over the past few decades' de present perfect ister. 'The number of studies' ise '… çalışma sayısı' demektir; öznesi 'number' olduğu için fiili tekildir ('has shown'), ama bir sayı bir şeyi gösteremez: 'the number of / has shown' anlamca bozuk. 'The number of / have shown' hem anlamca bozuk hem de fiil uyumu (subject-verb agreement) yanlış. 'A number of / has shown' çoğul özneye tekil fiil veriyor. 'A great deal of' yalnız sayılamayan isimle gelir ('a great deal of research'); sayılabilen 'studies' ile kullanılmaz." },

  // ---------- cümle tamamlama ----------
  { id: 'se-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['count on', 'incentive'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although a group of day-care centres in Israel had counted on a small fine to give parents an incentive to be punctual, ----.',
    options: [
      'the number of parents arriving late actually went up',
      'most parents soon began to collect their children on time',
      'the managers hoped that late arrivals would soon become rare',
      'the staff were glad that they would no longer have to wait',
      'the centres announced it in a notice by the front door',
    ], answer: 0,
    explain: "'Although' karşıtlık ister: İsrail'deki bir grup kreş, küçük bir cezanın velileri dakik olmaya özendireceğine güvenmişti, ama geç kalan veli sayısı tersine arttı. Bu bilinen çalışmada velilerin cezayı fazladan bakımın ücreti gibi gördüğü düşünülür. Velilerin çoğunun kısa sürede çocuklarını vaktinde almaya başlaması, yöneticilerin gecikmelerin seyrekleşmesini umması ve personelin artık beklemeyeceğine sevinmesi cezanın amacıyla uyumlu; karşıtlık kurmuyor. Cezanın kapıdaki bir duyuruyla bildirilmesi de ilk yarıyla bir karşıtlık oluşturmaz." },
  { id: 'se-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['karşıtlık'],
    q: '----, many people keep spending money on a failing project simply because they have already invested so much in it.',
    options: [
      'Because they regularly check whether each project is still worth its cost',
      'Although economists warn that money already spent should not affect future choices',
      'Even though giving up would force them to admit that the money had been wasted',
      'Unless they have already put a considerable amount of their own money into it',
      'As they would never put money into a project that seemed likely to fail',
    ], answer: 1,
    explain: "Ana cümle, birçok insanın yalnızca şimdiye kadar çok para yatırdığı için batmakta olan bir projeye para harcamayı sürdürdüğünü söylüyor (batık maliyet yanılgısı). Bununla karşıtlık kuran, iktisatçıların uyarısıdır: harcanmış para gelecekteki kararları etkilememeli; insanlar buna rağmen harcamayı sürdürüyor. 'Even though' da karşıtlık bağlacıdır; ama projeden vazgeçmenin insanları paranın boşa gittiğini kabul etmeye zorlaması harcamayı sürdürmenin nedenidir, engeli değil. Her projenin hâlâ maliyetine değip değmediğini düzenli denetlemek ve başarısız olacak gibi görünen bir projeye asla para yatırmamak ana cümleyle çelişir. 'Unless' ile kurulan seçenek de ana cümlenin dayandığı durumu (projeye zaten çok para yatırılmış olması) dışlayarak çelişki doğurur." },

  // ---------- çeviri ----------
  { id: 'se-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['evaluate', 'outcome'],
    level: 'orta', cefr: 'B2', konu: ['isim cümleciği'],
    q: 'How people evaluate an outcome often depends less on how good it actually is than on what they were expecting.',
    options: [
      'İnsanların bir sonucu nasıl değerlendirdiği, çoğu zaman ne beklediklerinden çok o sonucun gerçekte ne kadar iyi olduğuna bağlıdır.',
      'İnsanlar bir sonucun gerçekte ne kadar iyi olduğunu çoğu zaman bilemedikleri için onu yalnızca kendi beklentilerine göre değerlendirir.',
      'İnsanların bir sonuçtan ne beklediği, çoğu zaman o sonucu gerçekte ne kadar iyi değerlendirebildiklerine bağlıdır.',
      'İnsanların bir sonucu nasıl değerlendirdiği, o sonucun gerçekte ne kadar iyi olduğuna hiç bağlı olmayıp yalnızca beklentilerine bağlıdır.',
      'İnsanların bir sonucu nasıl değerlendirdiği, çoğu zaman o sonucun gerçekte ne kadar iyi olduğundan çok ne beklediklerine bağlıdır.',
    ], answer: 4,
    explain: "'How people evaluate an outcome' cümlenin öznesi olan isim cümleciğidir: 'insanların bir sonucu nasıl değerlendirdiği'. 'Depends less on how good it actually is than on what they were expecting' iki isim cümleciğini karşılaştırır: sonucun gerçekte ne kadar iyi olduğundan çok ne beklediklerine bağlıdır. 'Often' çoğu zaman demektir. Yanlışlardan biri karşılaştırmayı tersine çeviriyor, biri cümlede olmayan bir neden (sonucun iyiliğini bilememek) ve 'yalnızca' sözcüğünü ekliyor, biri bağımlılığın yönünü değiştiriyor (beklentiyi değerlendirmeye bağlıyor), biri de 'daha az'ı 'hiç' ve 'yalnızca'ya çevirerek kapsamı kaydırıyor." },
  { id: 'se-c2', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['settle for'],
    level: 'orta', cefr: 'C1', konu: ['bağlaç'],
    q: 'Birçok insan, daha iyisini bulacağından emin olmadıkça ilk makul seçeneğe razı olur.',
    options: [
      'Even if they are sure that they will find a better option, many people settle for the first reasonable one.',
      'Many people settle for the first reasonable option unless they are not sure that a better one will turn up.',
      'Unless they are sure that they will find a better option, many people settle for the first reasonable one.',
      'Many people keep looking for a better option even after they have found a perfectly reasonable one.',
      'As long as they are sure that a better option is available, many people settle for the first reasonable one.',
    ], answer: 2,
    explain: "Türkçedeki '-madıkça' (emin olmadıkça) olumsuz bir koşuldur; İngilizcede 'unless' ve olumlu fiille verilir: unless they are sure. 'Razı olmak, yetinmek' de 'settle for'dur. 'Unless they are not sure' iki olumsuzla anlamı tersine çevirir: daha iyisinin çıkacağından emin olanların razı olduğunu söyler. 'Even if' (emin olsalar bile) ve 'as long as' (emin oldukları sürece) da koşulu tersine çevirir. Makul bir seçenek bulduktan sonra da aramayı sürdürmek ise razı olmanın tam tersidir." },

  // ---------- okuma parçası (3 soru, YÖKDİL biçimi) ----------
  { id: 'se-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['trade-off', 'outcome', 'aversion', 'default', 'opt'],
    level: 'orta', cefr: 'B2', title: 'Yazı mı, tura mı?',
    text: "Suppose someone offers you a bet on the toss of a coin: heads, you win 100 liras; tails, you lose 100 liras. In purely financial terms the bet offers an even trade-off between risk and reward, yet most people turn it down, and many will accept only when the possible win is close to twice the possible loss. In 1979, the psychologists Daniel Kahneman and Amos Tversky built this pattern into prospect theory, a model of how people really choose when they cannot be sure of the outcome. A central idea of the theory, now known as loss aversion, is that a loss is felt more strongly than a gain of the same size; by some estimates, about twice as strongly. The same tendency may help to explain why people so often stay with whatever option they already have. When a choice comes with a default, that is, an option that takes effect automatically unless someone picks another one, people tend to keep it, partly because giving it up can feel like a loss. In a study published in 2003, Eric Johnson and Daniel Goldstein compared European countries with different rules on organ donation. Where citizens had to register in order to become donors, consent rates were relatively low, whereas in countries where everyone counted as a donor unless they opted out, the rates were far higher. The number of transplants actually carried out, however, also depends on other factors, such as hospital resources and the wishes of families. Even so, the study suggests that the way a choice is set up can matter a great deal.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the number of organ transplants actually carried out in a country ----.',
        options: [
          'is affected by more than just the way a country organises consent',
          'rose in every country that switched to an opt-out system',
          'was what Johnson and Goldstein mainly compared across Europe',
          'depends mostly on how often families refuse their consent',
          'is usually higher in countries where people must sign up as donors',
        ], answer: 0,
        explain: "Parçaya göre bir ülkede gerçekten yapılan nakil sayısı, onay düzeninin yanında hastanelerin olanakları ve ailelerin istekleri gibi başka etkenlere de bağlıdır. Johnson ve Goldstein nakil sayılarını değil onay oranlarını karşılaştırdı. Ailelerin isteği etkenlerden yalnız biri olarak geçiyor; nakil sayısının en çok buna bağlı olduğu söylenmiyor. Katılmak istemeyenin bildirdiği düzene geçen her ülkede nakillerin arttığı ya da kayıt gerektiren ülkelerde nakillerin daha çok olduğu da parçada yok." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that a coin-toss bet offering a possible win of 120 liras against a possible loss of 100 liras ----.',
        options: [
          'would appeal to most people, since the possible win is the larger sum',
          'would seem less attractive to most people than the even bet described',
          'would be refused even by people who usually enjoy taking risks',
          'would still be turned down by many of the people offered it',
          'was among the bets that Kahneman and Tversky used to build their theory',
        ], answer: 3,
        explain: "Parçaya göre birçok kişi böyle bir bahsi ancak olası kazanç olası kaybın iki katına yakın olduğunda kabul ediyor. 120 liralık kazanç 100 liralık kaybın iki katından çok uzak; bu yüzden bahis, kaybedilebilecek olandan fazlasını vaat etse de birçok kişi onu yine geri çevirir. Parçadan, kazancın biraz daha büyük olmasının çoğu insanı ikna edeceği sonucu çıkmaz. Bu bahsin baştaki eşit bahisten daha az çekici olması için de bir neden yok; kazanç daha büyük. Riskten hoşlananların bile reddedeceği ve bu bahsin Kahneman ile Tversky'nin kullandığı bahislerden biri olduğu parçada geçmiyor." },
      { konu: ['ana fikir'],
        q: 'The passage is mainly concerned with ----.',
        options: [
          'the history of prospect theory and the careers of the two psychologists behind it',
          'the reasons why consent to organ donation varies so widely across Europe',
          'the risks of gambling and why people should avoid even simple bets on coins',
          'a tendency to give losses extra weight and its link with the strong pull of defaults',
          'evidence that people think carefully before giving up anything they already own',
        ], answer: 3,
        explain: "Parça önce yazı-tura bahsiyle kayıptan kaçınmayı, yani kaybın aynı büyüklükteki kazançtan daha güçlü hissedilmesini anlatıyor. Sonra bu eğilimin insanların varsayılan seçenekte kalmasını nasıl açıklayabileceğini organ bağışı örneğiyle gösteriyor: kayıplara fazladan ağırlık verme eğilimi ve bunun varsayılan seçeneklerin güçlü etkisiyle bağı. Beklenti kuramının tarihi ve kurucularının meslek hayatı parçada yok. Avrupa'daki onay farkları yalnız bir örnek. Kumarın tehlikeleri işlenmiyor. İnsanların sahip olduklarından vazgeçmeden önce dikkatle düşündüğü ise parçayla çelişiyor: parçaya göre vazgeçmek bir kayıp gibi hissedildiği için hazır seçenekte kalıyorlar." },
    ] },

  // ---------- diyalog tamamlama ----------
  { id: 'se-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['tempt', 'impulsive'],
    level: 'kolay', cefr: 'B2', konu: ['bağlam'],
    q: "Ece: Is that another bag from the shopping centre? I thought you were trying to save money this month.\nDeniz: I am, but this coat was sixty per cent off. It would have been silly not to buy it.\nEce: Did you actually need a new coat, though? You bought one in October.\nDeniz: ----\nEce: So the sale tempted you into spending money that you weren't planning to spend at all. That sounds a bit impulsive to me.",
    options: [
      'Of course I did. The zip on my old one broke last week, so I had to replace it.',
      "Not really. My old one's still fine, but I couldn't pass up a discount like that.",
      "Yes. I'd been saving up for this exact coat since the beginning of the autumn.",
      "It isn't for me, actually. My sister asked me to buy it for her as a birthday present.",
      'Yes, I did. The assistant said it was the last one in my size, so I was lucky.',
    ], answer: 1,
    explain: "Ece, Deniz'e yeni bir paltoya gerçekten ihtiyacı olup olmadığını soruyor. Deniz'in cevabından sonra da 'Demek indirim seni hiç harcamayı düşünmediğin bir parayı harcamaya ayarttı' diyor. Demek ki Deniz paltoya ihtiyacı olmadığını, yalnız büyük bir indirimi kaçırmak istemediğini söylemiş olmalı. Eski paltonun fermuarının bozulması bir ihtiyaç, sonbahardan beri bu palto için para biriktirmek de planlı bir harcama demektir; ikisi de Ece'nin sözüyle çelişir. Paltonun kız kardeşe doğum günü hediyesi olması ve 'evet' deyip son bedeni aldığını söylemek de Ece'nin vardığı sonuca uymaz." },

  // ---------- paragraf tamamlama ----------
  { id: 'se-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['bias', 'perceive'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: "Even a number that is obviously meaningless can influence our judgements. In a well-known experiment from the 1970s, participants first watched a wheel of fortune that had secretly been fixed to stop at either a low or a high number. They were then asked to estimate what percentage of the members of the United Nations were African countries. ----. Psychologists call this bias anchoring, because the first number people see seems to hold their later estimates in place, much as an anchor holds a ship. Shops may be relying on the same effect when they print a much higher 'original' price beside the one customers actually pay, so that the real price is perceived as a bargain.",
    options: [
      'Most of them admitted afterwards that they had simply guessed, as they had no idea of the real figure',
      'Many African countries joined the organisation only after they had become independent in the 1960s',
      'Their answers, it turned out, showed no link at all with the number that the wheel had just shown',
      'Questions of this kind are hard for most people, as such figures are rarely needed in everyday life',
      'On average, those who had seen the higher number gave noticeably higher estimates than the others',
    ], answer: 4,
    explain: "Boşluktan sonraki cümle 'this bias' (bu yanılgı) diye bir sonuca gönderme yapıyor ve onu ilk görülen sayının sonraki tahminleri kendine bağlamasıyla açıklıyor. Demek ki boşlukta deneyin sonucu verilmeli: yüksek sayıyı görenler ortalamada belirgin biçimde daha yüksek tahmin verdi. Cevapların çarkta görülen sayıyla hiç ilişkisi olmadığını söyleyen seçenek sonraki cümleyle çelişiyor. Katılımcıların yalnızca tahmin yürüttüğünü sonradan söylemesi, Afrika ülkelerinin örgüte katılışı ve bu tür soruların zorluğu ise 'this bias' için bir yanılgı vermiyor; akışı keser." },

  // ---------- akışı bozan cümle ----------
  { id: 'se-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['nudge', 'systematically', 'opt'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'In their 2008 book Nudge, the economist Richard Thaler and the legal scholar Cass Sunstein argued that people systematically make poor choices about matters such as health and saving, but that small changes in the way options are presented can nudge them towards better ones.',
      'Unlike a ban or a tax, such a change leaves every option open and costs people almost nothing to ignore.',
      'Automatic enrolment in workplace pension schemes is among the best-known examples: when employees are signed up by default and have to opt out if they do not want to save, far more of them end up saving than when they must join by themselves.',
      'Pension funds usually invest the money they collect in a mixture of shares, bonds and property in order to spread their risk.',
      'Critics, however, warn that the same techniques could just as easily be used to steer people towards choices that serve companies or governments rather than their own interests.',
    ], answer: 3,
    explain: "Parça Thaler ve Sunstein'ın 'dürtme' fikrini anlatıyor: fikrin kendisi (I), dürtmenin yasak ve vergiden farkı (II), emeklilik planına otomatik katılım örneği (III) ve eleştiriler (V). IV. cümle emeklilik fonlarının topladıkları parayı nasıl yatırdığını anlatıyor; 'pension' sözcüğüyle III. cümleye bağlanıyor gibi görünse de seçimlerin nasıl sunulduğuyla ilgisi yok ve akışı kesiyor. V. cümledeki 'the same techniques' (aynı yöntemler) III. cümledeki otomatik katılım gibi dürtmelere gönderme yapıyor, IV. cümledeki yatırımlara değil." },
];

export default { id: 'sosyal-ekonomi', course: C, title: U, order: 4, cards, items };
