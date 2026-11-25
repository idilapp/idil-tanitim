// iDil › Genel › Dikkat ve çoklu görev.
// Tümü özgün: Claude yazdı (13 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (çoğaltma 2. tur planı §4.3 ve yerleşik bilgi; yalnız olgular, metin özgün):
// - görev değiştirmenin bedeli: Rogers ve Monsell (1995, Journal of Experimental Psychology: General); harf ve rakam
//   sınıflama görevleri arasında gidip gelen katılımcılar görev değişince yavaşladı ve daha çok hata yaptı; hazırlık süresi
//   bu bedeli azalttı ama sıfırlamadı;
// - dikkat kalıntısı: Sophie Leroy (2009, Organizational Behavior and Human Decision Processes); ilk işi bitirmeden ikinciye
//   geçenler ikinci işte daha kötü sonuç aldı; nerede kalındığını not etmenin etkiyi azaltabileceği (Leroy ve Glomb 2018;
//   temkinli);
// - cevap verilmeyen bir bildirimin de dikkati kısa süre dağıtabildiği (Stothart ve ark. 2015; temkinli, "some evidence");
// - yoğun çoklu medya kullanıcılarının ilgisiz ayrıntıları süzmede zorlanması (Ophir, Nass ve Wagner 2009; sonraki
//   çalışmalar karışık, yalnız bir çeldiricide ve temkinli);
// - çoklu görevi en çok yapanların bunda çoğu zaman pek iyi olmaması ve insanların bu beceriyi olduğundan yüksek görmesi
//   (Sanbonmatsu ve ark. 2013; temkinli, "some studies suggest", "tend to");
// - birkaç saniyelik bir kesintinin, adımları belli sırayla yapılan işlerde hatayı artırabilmesi (Altmann, Trafton ve
//   Hambrick 2014; sayı yazılmadı);
// - uzun, tekdüze izleme işlerinde zamanla daha çok sinyal kaçırma (uyanıklık düşüşü; Mackworth 1948, radar gözcüleri);
// - araç kullanırken eller serbest telefon görüşmesinin de dikkati dağıtması, "bakıp görmeme" (Strayer ve ark. 2003) ve
//   yolcunun trafiğe göre konuşmayı kesebilmesi (Drews, Pasupathi ve Strayer 2008; temkinli, "tends to");
// - yürümenin büyük ölçüde kendiliğinden yapılması, zor bir soruda yavaşlama ya da durma (gündelik gözlem; temkinli).
// Görev 20 (25 Kasım 2026): çeviri çeldiricileri biçim kestirmesine karşı yeniden kuruldu.

const T = 'taslak';
const C = 'genel';
const U = 'Dikkat ve çoklu görev';

const cards = [
  { code: 'simultaneously', title: 'aynı anda, eş zamanlı olarak', pos: 'zarf', cefr: 'C1', ipa: '/ˌsɪmlˈteɪniəsli/',
    text: "İki ya da daha çok şeyin aynı anda olduğunu ya da yapıldığını anlatır. 'At the same time' ile yakın anlamlıdır ama daha resmîdir. Sıfatı 'simultaneous': simultaneous interpreting (eş zamanlı çeviri).",
    example: 'The new album was released simultaneously in twelve countries.',
    exampleTr: 'Yeni albüm on iki ülkede aynı anda piyasaya çıktı.',
    synonyms: ['at the same time', 'concurrently'], family: ['simultaneous'] },
  { code: 'constantly', title: 'sürekli, durmadan', pos: 'zarf', cefr: 'B2', ipa: '/ˈkɒnstəntli/',
    text: "Bir şeyin ara vermeden ya da çok sık olduğunu anlatır: a constantly changing world (sürekli değişen bir dünya). Sıfatı 'constant': constant noise (bitmek bilmeyen gürültü).",
    example: "My neighbour's dog barks constantly, day and night.",
    exampleTr: 'Komşumun köpeği gece gündüz durmadan havlıyor.',
    synonyms: ['continually', 'all the time'], family: ['constant'] },
  { code: 'distraction', title: 'dikkat dağıtan şey; dikkatin dağılması', pos: 'isim', cefr: 'B2', ipa: '/dɪˈstrækʃn/',
    text: "Dikkati asıl işten başka yöne çeken şey ya da bu durum. Fiili 'distract' (dikkatini dağıtmak), sıfatı 'distracted' (dikkati dağılmış). 'Drive someone to distraction' ise birini çileden çıkarmaktır.",
    example: 'The noise from the building site next door was a real distraction during the exam.',
    exampleTr: 'Yandaki şantiyenin gürültüsü sınav boyunca dikkatimizi epey dağıttı.',
    synonyms: ['interruption', 'disturbance'], family: ['distract', 'distracted', 'distracting'] },
  { code: 'overload', title: 'aşırı yük, aşırı yüklenme', pos: 'isim', cefr: 'C1', ipa: '/ˈəʊvələʊd/',
    text: "Bir kişinin ya da sistemin kaldırabileceğinden fazla iş, bilgi ya da uyaran: information overload (aşırı bilgi yükü), sensory overload (duyusal aşırı yüklenme). Fiil olarak vurgu sondadır: /ˌəʊvəˈləʊd/ (aşırı yüklemek).",
    example: 'The bright lights and loud music in the shopping centre caused sensory overload for the little boy.',
    exampleTr: 'Alışveriş merkezindeki parlak ışıklar ve yüksek müzik küçük çocukta duyusal aşırı yüklenmeye yol açtı.',
    synonyms: ['excess', 'strain'], family: ['overloaded'] },
  { code: 'residue', title: 'kalıntı, artakalan', pos: 'isim', cefr: 'C1', ipa: '/ˈrezɪdjuː/',
    text: "Bir şeyin büyük kısmı gittikten sonra geride kalan az miktar. Somut olabilir (a sticky residue: yapışkan bir kalıntı) ya da mecaz: a residue of bad feeling (içte kalan kırgınlık). Sıfatı 'residual' (artakalan).",
    example: 'Long after the argument was over, a residue of bad feeling remained between the two neighbours.',
    exampleTr: 'Tartışmanın üzerinden çok zaman geçmişti ama iki komşunun arasında hâlâ bir kırgınlık kalmıştı.',
    synonyms: ['remainder', 'trace'], family: ['residual'] },
  { code: 'interrupt', title: 'sözünü kesmek; (bir işi) yarıda kesmek, bölmek', pos: 'fiil', cefr: 'B2', ipa: '/ˌɪntəˈrʌpt/',
    text: "Birinin konuşmasını ya da bir işi kısa süreliğine durdurmak: Sorry to interrupt, but… (Sözünüzü kestiğim için kusura bakmayın ama…). Adı 'interruption' (kesinti); 'uninterrupted' kesintisiz demektir.",
    example: 'A loud knock at the door interrupted her just as she was finishing the letter.',
    exampleTr: 'Tam mektubu bitirmek üzereyken kapı yüksek sesle çalındı ve işi yarıda kaldı.',
    synonyms: ['break off', 'disrupt'], family: ['interruption', 'uninterrupted'] },
  { code: 'concentrate', title: 'dikkatini vermek, yoğunlaşmak', pos: 'fiil', cefr: 'B2', ipa: '/ˈkɒnsntreɪt/',
    text: "Çoğu zaman 'on' ile kullanılır: concentrate on your work (işine yoğunlaş). Adı 'concentration': lose your concentration (dikkatin dağılmak). Kimyada 'derişik hâle getirmek' anlamı da var.",
    example: "I can't concentrate on my homework when the television is on.",
    exampleTr: 'Televizyon açıkken ödevime yoğunlaşamıyorum.',
    synonyms: ['focus', 'pay attention'], family: ['concentration'] },
  { code: 'switch', title: '(bir şeyden başka bir şeye) geçmek, değiştirmek', pos: 'fiil', cefr: 'B2', ipa: '/swɪtʃ/',
    text: "'Switch from … to …' ya da 'switch between …' kalıbıyla bir işten, yöntemden ya da konudan ötekine geçmektir. Ad olarak da kullanılır: a switch (geçiş, değişiklik). 'Switch off/on' (kapatmak/açmak) ayrı bir öbek fiildir.",
    example: 'It takes me a few minutes to switch from answering emails to working on the accounts.',
    exampleTr: 'E-postaları cevaplamaktan hesaplarla uğraşmaya geçmem birkaç dakikamı alıyor.',
    synonyms: ['change', 'shift'], family: [] },
  { code: 'deteriorate', title: 'kötüleşmek, bozulmak', pos: 'fiil', cefr: 'C1', ipa: '/dɪˈtɪəriəreɪt/',
    text: "Bir şeyin durumu ya da niteliği giderek kötüye gitmek: deteriorating health (kötüleşen sağlık), relations deteriorated (ilişkiler bozuldu). Adı 'deterioration' (bozulma, kötüleşme).",
    example: 'The weather deteriorated during the afternoon, and the match had to be abandoned.',
    exampleTr: 'Öğleden sonra hava bozdu ve maç yarıda bırakılmak zorunda kaldı.',
    synonyms: ['worsen', 'decline'], family: ['deterioration'] },
  { code: 'allocate', title: '(kaynak, para, zaman) ayırmak, tahsis etmek', pos: 'fiil', cefr: 'C1', ipa: '/ˈæləkeɪt/',
    text: "Bir kaynağı belli bir amaca ya da kişiye ayırmak: allocate funds/time/resources to something. Edilgen kullanımı sıktır: be allocated to. Adı 'allocation' (tahsis, paylaştırma).",
    example: 'The council has allocated extra money to repairing the roads this winter.',
    exampleTr: 'Belediye bu kış yolların onarımına ek para ayırdı.',
    synonyms: ['assign', 'set aside'], family: ['allocation'] },
  { code: 'juggle', title: '(birkaç işi birden) yürütmek, idare etmek; hokkabazlık yapmak', pos: 'fiil', cefr: 'C1', ipa: '/ˈdʒʌɡl/',
    text: "Asıl anlamı birkaç topu havada tutmaktır. Mecaz olarak birkaç işi ya da sorumluluğu birlikte yürütmeye çalışmak demektir ve çoğu zaman zorlanmayı anlatır: juggle work and family (işle aileyi birlikte götürmek).",
    example: 'Many students juggle part-time jobs with their university courses.',
    exampleTr: 'Birçok öğrenci yarı zamanlı işiyle üniversitedeki derslerini birlikte yürütmeye çalışıyor.',
    synonyms: ['balance', 'manage'], family: ['juggler', 'juggling'] },
  { code: 'sustain', title: 'sürdürmek, devam ettirmek', pos: 'fiil', cefr: 'C1', ipa: '/səˈsteɪn/',
    text: "Bir çabayı, ilgiyi ya da düzeyi uzun süre korumak: sustain attention/interest/growth. Sıfatları 'sustained' (uzun süreli, kesintisiz: sustained effort) ve 'sustainable' (sürdürülebilir).",
    example: 'It is hard to sustain a conversation with someone who answers every question with a single word.',
    exampleTr: 'Her soruya tek sözcükle cevap veren biriyle sohbeti sürdürmek zordur.',
    synonyms: ['maintain', 'keep up'], family: ['sustained', 'sustainable'] },
  { code: 'overestimate', title: 'olduğundan yüksek tahmin etmek, abartmak', pos: 'fiil', cefr: 'C1', ipa: '/ˌəʊvərˈestɪmeɪt/',
    text: "Bir şeyin miktarını, değerini ya da gücünü gerçekte olduğundan yüksek tahmin etmek. Karşıtı 'underestimate' (hafife almak, küçümsemek). Ad olarak da kullanılır: an overestimate (fazla tahmin).",
    example: 'We overestimated how much we could paint in one weekend, so the kitchen is still only half finished.',
    exampleTr: 'Bir hafta sonunda ne kadarını boyayabileceğimizi fazla iyimser hesaplamışız; mutfağın hâlâ ancak yarısı bitti.',
    synonyms: ['overrate'], family: ['estimate', 'underestimate'] },
  { code: 'prone', title: '(kötü bir şeye) yatkın, eğilimli', pos: 'sıfat', cefr: 'C1', ipa: '/prəʊn/',
    text: "'To' ile kullanılır ve çoğu zaman olumsuz bir şeyi anlatır: prone to errors (hataya açık), prone to injury (sakatlanmaya yatkın). Bileşik sıfat da kurar: accident-prone (kazaya yatkın, sakar).",
    example: 'This old printer is prone to jamming when the paper is slightly damp.',
    exampleTr: 'Bu eski yazıcı, kâğıt biraz nemli olunca kolayca sıkışır.',
    synonyms: ['liable', 'inclined'], family: ['proneness'] },
  { code: 'cognitive', title: 'bilişsel, zihinsel', pos: 'sıfat', cefr: 'C1', ipa: '/ˈkɒɡnətɪv/',
    text: "Düşünme, öğrenme, bellek ve dikkat gibi zihinsel süreçlerle ilgili: cognitive skills (bilişsel beceriler), cognitive load (bilişsel yük). Adı 'cognition' (biliş).",
    example: 'Doing crosswords may help older people keep their cognitive skills sharp.',
    exampleTr: 'Bulmaca çözmek, yaşlıların zihinsel becerilerini diri tutmalarına yardım edebilir.',
    synonyms: ['mental', 'intellectual'], family: ['cognition'] },
  { code: 'efficient', title: 'verimli, etkin; işini iyi bilen', pos: 'sıfat', cefr: 'B2', ipa: '/ɪˈfɪʃnt/',
    text: "Zamanı, emeği ya da enerjiyi boşa harcamadan iyi sonuç alan: an efficient worker, energy-efficient (enerji tasarruflu). Adı 'efficiency'. 'Effective' (etkili, işe yarayan) ile karıştırılmamalı.",
    example: 'She is a very efficient manager who never lets a meeting run longer than planned.',
    exampleTr: 'Çok verimli çalışan bir yöneticidir; hiçbir toplantının planlanandan uzun sürmesine izin vermez.',
    synonyms: ['productive', 'well-organised'], family: ['efficiency', 'efficiently', 'inefficient'] },
  { code: 'tune out', title: '(bir sesi, uyaranı) duymazdan gelmek, kulak asmamak', pos: 'öbek fiil', cefr: 'C1', ipa: '/ˌtjuːn ˈaʊt/',
    text: "Bir sesi, konuşmayı ya da uyaranı bilerek ya da alışkanlıkla dikkate almamak: tune out the noise. Nesne araya da girebilir: tune it out. Karşıtı 'tune in' (kulak vermek; bir kanalı açmak).",
    example: 'Living next to the railway, we soon learnt to tune out the noise of passing trains.',
    exampleTr: 'Demiryolunun yanında oturduğumuz için geçen trenlerin gürültüsünü duymazdan gelmeyi çabucak öğrendik.',
    synonyms: ['ignore', 'switch off'], family: ['tune in'] },
  { code: 'drift off', title: '(aklı) dalıp gitmek, dikkati kaymak; (yavaş yavaş) uykuya dalmak', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌdrɪft ˈɒf/',
    text: "Düşüncelerin farkında olmadan asıl işten uzaklaşmasını anlatır: my mind drifted off (dalıp gitmişim). En sık öteki anlamı yavaş yavaş uykuya dalmaktır: drift off to sleep.",
    example: 'During the long presentation, my mind kept drifting off to my weekend plans.',
    exampleTr: 'Uzun sunum boyunca aklım durmadan hafta sonu planlarıma kaydı.',
    synonyms: ['wander', 'nod off'], family: ['drift'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'gd-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['simultaneously', 'constantly'],
    level: 'orta', cefr: 'C1', konu: ['zarf'],
    q: 'Because walking has become almost automatic for most of us, we can walk and hold a conversation ----, although many people slow down or even stop when a question requires careful thought.',
    options: ['simultaneously', 'constantly', 'alternately', 'spontaneously', 'deliberately'], answer: 0,
    explain: "Cümleye göre yürümek çoğumuz için neredeyse kendiliğinden yapılan bir iş olduğundan yürürken bir yandan da sohbet edebiliyoruz; iki işin aynı anda yapılması 'simultaneously' ile anlatılır. 'Although' ile gelen bölüm de iki işin normalde birlikte yürüdüğünü varsayıyor: yalnız soru zorlaşınca birçok kişi yavaşlıyor, hatta duruyor. 'Constantly' (durmadan) iki işin birlikte yapıldığını anlatmaz. 'Alternately' (sırayla) zor bir soruda yavaşlamayı anlamsız kılar; sırayla yapan biri zaten yürürken konuşmaz. 'Spontaneously' (kendiliğinden) 'automatic' sözüne yakın görünür ama iki işi birleştirmez. 'Deliberately' (bilerek, kasten) ise 'almost automatic' ile çelişir." },

  // ---------- dil bilgisi ----------
  { id: 'gd-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['interrupt'],
    level: 'orta', cefr: 'B2', konu: ['ortaç öbeği', 'kısaltma'],
    q: '---- by a phone call in the middle of a difficult sentence, Selin lost her train of thought, ---- her to read the whole paragraph again before she could continue.',
    options: ['Having interrupted / forcing', 'Interrupting / forced', 'Interrupted / having forced', 'Having interrupted / forced', 'Interrupted / forcing'], answer: 4,
    explain: "İlk boşlukta Selin işi yapan değil, etkilenen kişi: onu bir telefon bölüyor. Bu yüzden edilgen kısaltma gerekir: 'Interrupted by a phone call' (bir telefonla bölününce). 'Interrupting' ve 'Having interrupted' etken biçimlerdir; 'by a phone call' ile kurulmaz. İkinci boşluk önceki olayın sonucunu bildiriyor: 'forcing her to read…' ('which forced her' yerine kullanılan -ing kısaltması). 'Forced her' cümleye bağlaçsız ikinci bir yüklem ekler. 'Having forced' ise sonucu nedenden önceye koyar." },

  { id: 'gd-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['efficient', 'switch'],
    level: 'orta', cefr: 'B2', konu: ['bağlantı zarfı'],
    q: 'Try to deal with all your emails in one or two blocks a day; ----, you will keep switching between different kinds of work and be far less efficient.',
    options: ['meanwhile', 'otherwise', 'instead', 'likewise', 'therefore'], answer: 1,
    explain: "Birinci cümle bir öneri: e-postalara günde bir iki toplu oturumda bakmak. İkinci cümle öneriye uyulmazsa ne olacağını söylüyor: sürekli bir işten ötekine geçer ve çok daha az verimli olursunuz. 'Aksi hâlde' anlamını 'otherwise' verir. 'Instead' (bunun yerine) önerinin yerine başka bir yol koyar; burada ise uyarı var, yeni bir yol yok. 'Therefore' (bu yüzden) olumsuz sonucu önerinin kendisine bağlar. 'Meanwhile' (bu arada) ve 'likewise' (aynı şekilde) iki cümle arasında anlam kurmaz." },

  { id: 'gd-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['so/such … that'],
    q: '---- in the open-plan office that afternoon that Kerem gave up on the report he was drafting and moved to a quiet room on the floor above.',
    options: ['So loud the noise was', 'Such was the noise', 'Such loud was the noise', 'So was the noise', 'Such the noise was'], answer: 1,
    explain: "'O kadar … ki' anlamındaki sonuç kalıbı başa alınınca devrik kurulur. 'Such' burada 'öyle büyük' demektir, sıfat almaz; ardından 'be' + isim öbeği gelir: 'Such was the noise … that…' (gürültü o kadar fazlaydı ki). Cümlenin anlamı: o öğleden sonra açık ofisteki gürültü öyle fazlaydı ki Kerem yazdığı raporu bıraktı ve üst kattaki sessiz bir odaya geçti. 'So' ise sıfatla kurulur ve ardından 'be' özneden önce gelir: 'So loud was the noise that…' da doğru olurdu, ama 'So loud the noise was' başa geçen 'so'dan sonra düz sırayı korur. 'So was the noise' sıfatı düşürür; 'so' sıfatsız 'o kadar' anlamı kurmaz. 'Such loud was the noise' 'such'ı tek başına bir sıfatla kullanır; 'such' isim öbeğiyle gelir. 'Such the noise was' devrik olması gereken yerde düz sırayı korur." },

  // ---------- boşluklu metin (5 boşluk) ----------
  { id: 'gd-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: ['switch', 'deteriorate', 'concentrate'],
    level: 'orta', cefr: 'B2', title: 'Çoklu görev mi, hızlı geçiş mi?',
    text: "Many people are proud of being able to do several things at once, such as answering emails during a meeting or listening to a podcast while writing a report. Research suggests, however, that when both activities demand real thought, the brain does not work on them in parallel but switches rapidly between them. (1) ----, what looks like multitasking is usually a series of quick changes of focus. Each of these changes has a price. In experiments published in 1995, the psychologists Robert Rogers and Stephen Monsell asked volunteers to move back and forth between two simple tasks: deciding whether a number was odd or even, and deciding whether a letter was a vowel or a consonant. (2) ---- the trials on which the task stayed the same, those on which it changed produced slower responses and more mistakes. Giving the volunteers extra time to get ready reduced this 'switch cost', but it did not stop them from (3) ---- a little worse whenever the task changed. In the laboratory, each switch took only a fraction of a second, but over a working day such small losses may add up, and the quality of our work can (4) ----. (5) ---- trying to do two demanding things at once, then, we may get more done by giving each task our full attention in turn.",
    steps: [
      { konu: ['bağlantı zarfı'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['On the other hand', 'For instance', 'Even so', 'By contrast', 'In other words'], answer: 4,
        explain: "Önceki cümle beynin düşünmeyi gerektiren iki işi aynı anda yürütmediğini, aralarında hızla gidip geldiğini söylüyor. Boşluklu cümle aynı fikri başka sözlerle yineliyor: çoklu görev gibi görünen şey çoğu zaman bir dizi hızlı odak değişikliğidir. Yeniden söyleme 'In other words' (başka bir deyişle) ile kurulur. 'On the other hand' ve 'by contrast' karşıtlık, 'even so' (yine de) kabullenme, 'for instance' örnek bildirir; iki cümle arasında bu ilişkilerin hiçbiri yok." },
      { konu: ['edat'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['Together with', 'Because of', 'Compared with', 'In terms of', 'Apart from'], answer: 2,
        explain: "Cümle, görevin aynı kaldığı denemelerle değiştiği denemeleri karşılaştırıyor. 'Slower responses' ve 'more mistakes' bir karşılaştırma ölçütü ister; bu ölçütü 'Compared with' (… ile karşılaştırıldığında) verir. 'Together with' (… ile birlikte) iki deneme türünü yan yana koyar ama 'neye göre daha yavaş?' sorusunu cevapsız bırakır. 'Because of' görevin aynı kaldığı denemeleri yavaşlığın nedeni yapar. 'In terms of' (… bakımından) ve 'apart from' (… dışında) cümleye anlam vermez." },
      { konu: ['isim-fiil ve mastar'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['perform', 'to perform', 'having performed', 'performing', 'to performing'], answer: 3,
        explain: "'Stop someone from doing something' (birinin bir şeyi yapmasını engellemek) kalıbında 'from' bir edattır ve edattan sonra fiil -ing alır: 'from performing'. Yalın 'perform' ve mastarlı 'to perform' edattan sonra gelmez. 'To performing' 'from'un ardına ikinci bir edat ekler. 'Having performed' ise eylemi önceye taşır; görev her değiştiğinde biraz daha kötü sonuç almayı anlatmaz." },
      { konu: ['kelime', 'fiil'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['accumulate', 'improve', 'concentrate', 'accelerate', 'deteriorate'], answer: 4,
        explain: "Cümle 'but' ile bir karşıtlık kuruyor: laboratuvarda her geçiş saniyenin küçük bir kesrini alıyor ama bir iş günü boyunca bu küçük kayıplar birikebiliyor ve işimizin niteliği bozulabiliyor: 'deteriorate' (kötüleşmek). 'Improve' (iyileşmek) karşıtlığı tersine çevirir. 'Accumulate' (birikmek) 'add up' sözüne yakın görünür ama niteliğin birikmesi anlam kurmaz. 'Concentrate' (yoğunlaşmak) ve 'accelerate' (hızlanmak) da 'the quality of our work' öznesiyle anlam kurmaz." },
      { konu: ['edat'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['Instead of', 'In addition to', 'Thanks to', 'By means of', 'In spite of'], answer: 0,
        explain: "Son cümle bir öneri sunuyor: iki zor işi aynı anda yapmaya çalışmak yerine her işe sırayla tam dikkat vermek daha çok iş çıkarabilir. 'Yerine' anlamını 'Instead of' verir. 'In addition to' (… -e ek olarak) iki yolu birlikte önerir; oysa ikisi birbirini dışlar. 'Thanks to' (… sayesinde) ve 'by means of' (… yoluyla) aynı anda iki iş yapmayı başarının aracı yapar. 'In spite of' (… -e rağmen) ise cümleye anlam vermez." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'gd-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['juggle'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: '----, some studies suggest that the people who multitask the most are often not particularly good at it.',
    options: [
      'Since practice usually makes us better at the things we do every day',
      'Even though heavy multitaskers often find it hard to ignore irrelevant details',
      'Although one might expect years of practice to produce real experts',
      'Because most of the tasks we combine are not equally demanding',
      'Once they have learnt to juggle several tasks at the same time',
    ], answer: 2,
    explain: "Ana cümle şaşırtıcı bir bulgu veriyor: bazı çalışmalara göre çoklu görevi en çok yapanlar bunda pek iyi değil. Beklenenle bulgu arasındaki karşıtlığı 'Although one might expect…' kurar: yılların pratiğinin usta yetiştirmesi beklenir ama öyle olmuyor. 'Even though' ile başlayan seçenek karşıtlık bağlacı taşıyor ama içeriği ana cümleyle aynı yönde; ilgisiz ayrıntıları süzememek de çoklu görevde iyi olmamak da olumsuz. 'Since' ile verilen pratik bilgisi neden gibi kurulduğu için ana cümleyle çelişiyor. 'Because' ile verilen neden bulguyu açıklamıyor. 'Once' ile kurulan zaman cümlesi de ana cümleyle çelişiyor." },

  { id: 'gd-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['sustain'],
    level: 'orta', cefr: 'B2', konu: ['neden-sonuç'],
    q: 'Because it is hard to sustain attention during long, monotonous tasks, ----.',
    options: [
      'workers who do them for several hours rarely become any less accurate',
      'radar operators tend to miss more warning signs as a shift goes on',
      'such tasks can be found in almost every kind of modern workplace today',
      'many people would choose them over tasks that require constant decisions',
      'people usually remember them more clearly than tasks that are more varied',
    ], answer: 1,
    explain: "'Because' bir neden veriyor: uzun ve tekdüze işlerde dikkati sürdürmek zordur. Bunun sonucu, saatlerce ekran izleyen radar gözcülerinin vardiya ilerledikçe daha çok uyarı işaretini kaçırmasıdır. Saatler geçtikçe doğruluğun düşmediğini söyleyen seçenek nedenle çelişiyor. Böyle işlerin hemen her iş yerinde bulunması doğru olabilir ama bu nedenin sonucu değil. İnsanların bu işleri sürekli karar isteyen işlere yeğlemesi ve onları daha çeşitli işlerden iyi hatırlaması da bu nedenden çıkmaz." },

  // ---------- çeviri ----------
  { id: 'gd-c1', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edilgen'],
    q: 'Adımlarının belli bir sırayla yapılması gereken işlerde, birkaç saniyelik bir kesintinin bile hata sayısını artırabildiği gösterildi.',
    options: [
      'It has been suggested that even an interruption of a few seconds can increase the number of errors in tasks that people have done many times before.',
      'It has been shown that even an interruption of a few seconds can increase the time needed to finish tasks that people have done many times before.',
      'It has been shown that even an interruption of a few seconds can increase the number of errors in tasks that people have done many times before.',
      'It has been shown that even an interruption of a few seconds can increase the number of errors in tasks whose steps can be done in any order.',
      'It has been shown that even an interruption of a few seconds can increase the number of errors in tasks whose steps must be done in a fixed order.',
    ], answer: 4,
    explain: "Türkçe cümlede 'yapılması gereken' (must be done) ve 'gösterildi' (it has been shown) edilgendir. Doğru seçenek bunları korur; 'birkaç saniyelik bir kesintinin bile'yi 'even an interruption of a few seconds', 'hata sayısını artırabildiği'ni 'can increase the number of errors' ile verir. 'Tasks that people have done many times before' (daha önce defalarca yapılmış işler) Türkçedeki işleri değiştiriyor: söz konusu olan, adımları belli bir sırayla yapılması gereken işler. 'It has been suggested' (öne sürüldü) diye başlayan çeviri işleri yanlış verdiği gibi 'gösterildi'yi de zayıflatıyor. 'The time needed to finish' diyen çeviride artan şey hata sayısı değil bitirme süresi; işler de defalarca yapılmış işler olmuş. 'Steps can be done in any order' sıranın önemli olmadığı işlerden söz ederek kökü tersine çeviriyor." },

  // ---------- okuma parçası (4 soru, YDS biçimi) ----------
  { id: 'gd-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['residue', 'interrupt', 'tune out'],
    level: 'orta', cefr: 'B2', title: 'Aklımız hâlâ önceki işte',
    text: "Most of us know the feeling of starting a new task while our thoughts keep drifting back to the one we have just left. In 2009 the management researcher Sophie Leroy gave this experience a name: 'attention residue'. In her experiments, volunteers worked on one task and were then moved on to a second, sometimes before they had had a chance to finish the first. Those who had been forced to leave the first task incomplete did worse on the second, and further tests suggested that part of their mind was still busy with the unfinished work. It seems to be particularly hard, Leroy concluded, to let go of a task that we have not completed. Her findings may help to explain why the steady stream of notifications on our phones and computers is so costly. Each message invites a small switch: we glance at it, perhaps send a quick reply and then go back to what we were doing. The glance may take only a few seconds, but the residue it leaves can linger for much longer, so a person who is interrupted every few minutes may rarely give anything their full attention. There is also some evidence that even a notification we try to tune out can pull our attention away from the task in hand. None of this means that we should get rid of our phones. It does suggest, however, that setting aside periods of uninterrupted work, and jotting down where we stopped before turning to something else, could help us to make better use of the attention we have.",
    steps: [
      { konu: ['ayrıntı'],
        q: "According to the passage, the volunteers in Leroy's experiments who did worse on the second task were those who ----.",
        options: [
          'had found the first task too easy to hold their interest',
          'had to put the first task aside before it was finished',
          'had received notifications while working on the first task',
          'had been told in advance what the second task would be',
          'had finished the first task much faster than the other volunteers',
        ], answer: 1,
        explain: "Parçaya göre Leroy'un deneylerinde ikinci işte daha kötü sonuç alanlar, ilk işi bitiremeden bırakmak zorunda kalanlardır ('Those who had been forced to leave the first task incomplete did worse on the second'). Bildirimlerden parçanın ilerleyen bölümünde söz ediliyor; deneylerle ilgili değil. İlk işin fazla kolay bulunması ve ikinci işin önceden bildirilmesi parçada geçmiyor. İlk işi ötekilerden çok daha hızlı bitirmek de parçada yok; üstelik işin yarım kalmasıyla çelişiyor." },
      { konu: ['ayrıntı'],
        q: 'It is stated in the passage that a quick look at a notification ----.',
        options: [
          'is harmless as long as we do not reply to the message',
          'usually takes several minutes rather than a few seconds',
          'helps us to return to our work feeling refreshed',
          'costs us less than a notification we decide to ignore',
          'can affect our concentration long after we look away',
        ], answer: 4,
        explain: "Parçaya göre bir bildirime göz atmak yalnız birkaç saniye sürebilir ama geride bıraktığı kalıntı çok daha uzun sürebilir ('the residue it leaves can linger for much longer'); yani bu kısa bakış, ekrandan başımızı kaldırdıktan sonra da dikkatimizi etkiler. Cevap vermedikçe zararsız olduğu söylenmiyor; tersine, görmezden gelmeye çalıştığımız bildirimin bile dikkati elimizdeki işten uzaklaştırabileceği yazıyor. Bakışın birkaç dakika sürdüğü parçayla çelişiyor. Bakışın insanı dinlendirdiği ve görmezden gelinen bildirimden daha az zarar verdiği parçada yok." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that someone who has to leave a report half-written in order to attend a meeting ----.',
        options: [
          'will have forgotten most of the report by the end of the meeting',
          'should keep their phone switched on so as to stay alert',
          'may find it easier to finish the report after a short break',
          'is unlikely to be affected if the meeting is a short one',
          'may find it hard to focus properly on the meeting',
        ], answer: 4,
        explain: "Parçaya göre bir işi bitirmeden ötekine geçenlerin zihninin bir kısmı yarım kalan işle meşgul kalır ve ikinci işte daha kötü sonuç alırlar. Raporunu yarım bırakıp toplantıya giren biri de büyük olasılıkla dikkatini toplantıya tam veremez. Raporun büyük kısmını unutacağı düşüncesi bu kalıntıyla çelişiyor. Telefonu açık tutmanın dikkati artırdığı parçada geçmiyor. Kısa bir aradan sonra raporu daha kolay bitireceği ya da toplantı kısaysa etkilenmeyeceği de parçada yok." },
      { konu: ['ana fikir'],
        q: 'The main idea of the passage is that ----.',
        options: [
          'people should stop using smartphones at work altogether, since notifications make them less productive',
          'Sophie Leroy was the first researcher to prove that people cannot really do two different things at once',
          'notifications that we ignore may do more harm than the ones we stop to read and answer',
          'moving between tasks leaves some of our attention behind, so frequent interruptions can be very damaging',
          'unfinished tasks always cause more stress than tasks that have been brought to an end',
        ], answer: 3,
        explain: "Parça, bir işten ötekine geçince dikkatimizin bir kısmının önceki işte kaldığını (dikkat kalıntısı) ve bu yüzden bildirimler gibi sık bölünmelerin dikkate pahalıya mal olduğunu anlatıyor. İş yerinde telefon kullanmayı bırakmak gerektiği söylenmiyor; parça bunu açıkça reddediyor ('None of this means that we should get rid of our phones'). Leroy'un iki işi aynı anda yapamadığımızı ilk gösteren kişi olduğu parçada yok. Görmezden gelinen bildirimlerin daha zararlı olduğu da söylenmiyor. Bitmemiş işlerin her zaman daha çok strese yol açtığı ise parçada geçmeyen bir genellemedir." },
    ] },

  // ---------- diyalog tamamlama ----------
  { id: 'gd-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['concentrate'],
    level: 'kolay', cefr: 'B2', konu: ['bağlam'],
    q: "Mert: The match starts in ten minutes. Are you coming to watch it with us?\nLena: I'd love to, but my report is due tomorrow morning. I've switched my phone off so that I can concentrate.\nMert: ----\nLena: Thanks. If it's my sister, though, come and get me. She's expecting a baby any day now.",
    options: [
      "Can't you work on it after the match? It only lasts a couple of hours.",
      "Good luck, then. I'll keep the volume down so the noise doesn't bother you.",
      "Shall I save you some pizza? We've ordered far more than we can eat.",
      "OK. If anyone rings me because they can't reach you, I'll say you're busy.",
      "That's a shame. I'll tell you how the match went over breakfast tomorrow.",
    ], answer: 3,
    explain: "Lena'nın son sözü ('Teşekkürler. Ama arayan kız kardeşimse gelip beni çağır; her an doğum yapabilir.') Mert'in, Lena'ya ulaşamayıp onu arayanlarla ilgili bir şey söylediğini gösteriyor. 'It' arayan kişiyi karşılıyor; 'though' da Mert'in sözüne getirilen istisnayı bildiriyor. Bunu yalnız 'Sana ulaşamayıp beni arayan olursa meşgul olduğunu söylerim' diyen cevap karşılar. Sesi kısacağını, pizza ayıracağını ya da maçı kahvaltıda anlatacağını söyleyen cevaplar teşekküre uyar ama 'If it's my sister' bölümüne bağlanmaz. Raporu maçtan sonra yazmayı öneren soru da bir teşekkürü gerektirmiyor." },

  // ---------- anlamca en yakın cümle ----------
  { id: 'gd-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: ['overestimate'],
    level: 'orta', cefr: 'B2', konu: ['neden-sonuç'],
    q: 'Because people tend to overestimate their ability to multitask, many of them keep doing it even when it slows them down.',
    options: [
      'Believing they are better at it than they are, many people go on multitasking even when it makes them slower.',
      'People tend to overestimate their ability to multitask simply because they keep doing it even when it slows them down.',
      'Although many people know perfectly well that multitasking slows them down, they keep doing it because they enjoy it.',
      'Everyone who multitasks regularly overestimates their own ability, which is exactly why nobody ever manages to stop.',
      'Many people would multitask a great deal less if they realised that it does not actually slow them down.',
    ], answer: 0,
    explain: "Verilen cümle bir neden-sonuç ilişkisi kuruyor: insanlar çoklu görev becerilerini olduğundan yüksek gördükleri için, kendilerini yavaşlatsa bile çoklu görev yapmayı sürdürüyor. Doğru seçenek nedeni 'Believing they are better at it than they are' (bu işte olduklarından iyi olduklarına inandıkları için) diye verir ve sonucu yerinde tutar. Yanlışlardan biri neden ile sonucun yerini değiştiriyor. Biri insanların yavaşladıklarını bildiğini ve işi keyif için sürdürdüğünü söylüyor. Biri 'herkes' ve 'hiç kimse' diyerek genelliyor. Biri de çoklu görevin yavaşlatmadığını varsayarak anlamı tersine çeviriyor." },

  // ---------- paragraf tamamlama ----------
  { id: 'gd-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['cognitive', 'allocate', 'drift off', 'overload', 'prone'],
    level: 'orta', cefr: 'C1', konu: ['gönderim'],
    q: 'Psychologists often describe attention as a limited cognitive resource that has to be allocated among everything competing for it. When a task is simple, some of this resource is left over, which is why our minds so often drift off while we are washing the dishes. ----. It is at such times that even a small extra demand, such as a colleague asking a quick question, can push us into overload and make us more prone to mistakes.',
    options: [
      'Some people use these idle moments to plan their day or to work through their problems',
      'Washing the dishes is one of the few household chores that many people enjoy',
      'At other times, however, a demanding task may use up almost all of our attention',
      'Researchers have measured attention in many ways over the past hundred years',
      'Allocating attention wisely is a skill that tends to improve with age and experience',
    ], answer: 2,
    explain: "Boşluktan sonraki cümle 'It is at such times that…' (İşte böyle zamanlarda…) diye başlıyor. 'Such times' boşluktaki cümlenin anlattığı zamanları göstermeli; bunlar, küçük bir ek isteğin bile aşırı yüke yol açabildiği anlar olmalı. Bunu, zor bir işin dikkatimizin neredeyse tamamını kullandığı 'öteki zamanları' anlatan cümle sağlar; 'however' da kolay işlerle kurulan karşıtlığı tamamlar. 'These idle moments' de bir zamana gönderme yapıyor ama boş anlarda dikkatin bir kısmı artakalır, aşırı yük oluşmaz. Bulaşık yıkamanın sevilmesi, dikkatin nasıl ölçüldüğü ve dikkati iyi paylaştırmanın deneyimle gelişmesi 'such times' ile bağlanmıyor." },

  // ---------- akışı bozan cümle ----------
  { id: 'gd-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['distraction'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Many drivers believe that talking on the phone is perfectly safe as long as both of their hands stay on the wheel.',
      'Studies suggest, however, that even a hands-free call can be a serious distraction, since the real problem lies not in the hands but in the mind.',
      'Mobile phones have also made it far easier for drivers to call for help after a breakdown or an accident on a quiet road.',
      'Drivers who are deep in conversation often look straight at the road without really seeing it, so they are slower to notice hazards such as a cyclist pulling out.',
      'A passenger, by contrast, can see the traffic and tends to stop talking when the road gets busy, which a person at the other end of the line cannot do.',
    ], answer: 2,
    explain: "Parça, araç kullanırken telefonla konuşmanın eller serbest olsa bile dikkati dağıttığını anlatıyor: birçok sürücü elleri direksiyondayken güvende olduğunu düşünür (I), ama asıl sorun ellerde değil zihindedir (II); konuşmaya dalan sürücü yola bakar ama görmez ve tehlikeyi geç fark eder (IV); yolcu ise trafiği görüp susabilir (V). III. cümle de telefondan ve araç kullanmaktan söz ediyor ama konuyu telefonun arıza ya da kaza sonrasında yardım çağırmayı kolaylaştırmasına kaydırıyor ve II'den IV'e uzanan akışı kesiyor." },
];

export default { id: 'genel-dikkat', course: C, title: U, order: 6, cards, items };
