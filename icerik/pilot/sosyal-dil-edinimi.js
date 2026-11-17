// iDil › Sosyal bilimler › Çocuklar dili nasıl edinir?
// Tümü özgün: Claude yazdı (17 Kasım 2026). ÖSYM sorusu, yayınevi, ders kitabı ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Plan: ../analiz/cogaltma-3-plani.md §7.6 (3. çoğaltma turu, dalga A).
// Olgular (plan §7.6 listesi; yalnız olgular, metin özgün):
// - yaklaşık sınırlar, çocuktan çocuğa değişir (temkinli): agulama 6 ay dolayında, ilk sözcükler bir yaş dolayında, iki
//   sözcüklü söyleyişler 18–24 ay arasında (sc-z1, sc-c4);
// - aşırı genelleme: "goed", "mouses" gibi biçimleri çocuklar yetişkinden duymaz, kuralı kendileri çıkarıp her yere uygular;
//   dilin yalnız taklitle öğrenilmediğinin kanıtı sayılır (sc-o1);
// - Noam Chomsky 1950'ler ve 60'larda doğuştan bir dil yetisi önerdi; kullanım temelli yaklaşım (Michael Tomasello) duyulan
//   dili ve iletişimi vurgular; tartışma sürüyor (sc-o1, sc-t4: "yarım yüzyıldan uzun" süre bu tarihlerden);
// - Patricia Kuhl: 6 ay dolayında bebekler bütün dillerin seslerini ayırt eder, 10–12 ay dolayında anadilinin seslerine
//   uzmanlaşır (temkinli); 2003 çalışması: Mandarin seslerini canlı bir konuşucudan dinleyen bebeklerde etki var, aynı
//   oturumları ekrandan izleyenlerde yok (sc-o2; ses kaydı grubu listede olmadığı için yazılmadı);
// - Nikaragua İşaret Dili: 1970'ler ve 80'lerde açılan okullarda bir araya gelen sağır çocuklar yeni bir dil oluşturdu;
//   sonra gelen küçük çocuklar dil bilgisini daha düzenli kıldı (sc-b1);
// - iki dillilik çocuğa zarar vermez; dilleri zaman zaman karıştırmak normaldir (temkinli; sc-d1, sc-b2).
// - Kullanılmadı: Lenneberg 1967 (kritik dönem); ünitedeki öteki sorulardan birinin cevabını ele vereceği için çeviriye
//   konmadı.
// Yerleşik genel bilgi (ad, sayı, tarih yazılmadan, temkinli dille): bebeklerin konuşmaya öteki seslerden çok ilgi göstermesi
// (sc-k1; ör. Vouloumanos ve Werker 2007); bebeğe yönelik yavaş, ezgili konuşmanın sözcük sınırlarını bulmayı kolaylaştırması
// (sc-c1; ör. Thiessen, Hill ve Saffran 2005); bebeklerin doğmadan anadilinin ezgisini öğrenmeye başlaması (sc-c3; ör. Mampe
// ve ark. 2009); tek duyuşta anlam çıkarma, "fast mapping" (sc-c5; Carey ve Bartlett 1978); yetişkinlerin çocuğun dil
// bilgisini değil söylediğinin doğruluğunu düzeltmesi (sc-p1; Brown ve Hanlon 1970); çocuk yaşta göçenlerin yerli gibi
// konuşabilmesi, yetişkinlerde yabancı aksanın kalması (sc-t1); evde uzun ses kayıtları (sc-p2); bazı ülkelerin işaret
// dillerini resmî tanıması (sc-b1); erken dil deneyiminden yoksun kalan sağır çocukların sonradan dil öğrenmekte
// zorlanabilmesi (sc-t3); sesli kitap okumanın dil becerileriyle ilişkisi (sc-t2).

const T = 'taslak';
const C = 'sosyal';
const U = 'Çocuklar dili nasıl edinir?';

const cards = [
  // ---------- isim ----------
  { code: 'acquisition', title: 'edinim, edinme, kazanma; (şirket) satın alma', pos: 'isim', cefr: 'C1', ipa: '/ˌækwɪˈzɪʃn/',
    text: "Bir beceriyi, bilgiyi ya da dili zamanla kazanmak: language acquisition (dil edinimi), the acquisition of new skills. Dil biliminde 'acquisition' çoğu zaman kendiliğinden edinmeyi, 'learning' derste öğrenmeyi anlatır. Fiili 'acquire'. İş dünyasında 'satın alma' anlamı da var: mergers and acquisitions.",
    example: 'Watching films with subtitles can speed up the acquisition of everyday vocabulary.',
    exampleTr: 'Altyazılı film izlemek, gündelik sözcüklerin edinimini hızlandırabilir.',
    synonyms: ['learning', 'gaining'], family: ['acquire', 'acquired'] },
  { code: 'toddler', title: 'yeni yürümeye başlayan çocuk (kabaca 1–3 yaş)', pos: 'isim', cefr: 'B2', ipa: '/ˈtɒdlə/',
    text: "Bebeklikten çıkmış, adımları henüz sendeleyen küçük çocuk. Fiili 'toddle' (tıpış tıpış yürümek) bu sendeleyen yürüyüşü anlatır. 'Infant' daha küçük bebek için kullanılır.",
    example: 'The café has a small play corner where toddlers can keep busy while their parents chat.',
    exampleTr: 'Kafede, anne babalar sohbet ederken küçük çocukların oyalanabileceği bir oyun köşesi var.',
    synonyms: ['young child', 'tot'], family: ['toddle'] },
  { code: 'infant', title: 'bebek (özellikle ilk yaşındaki)', pos: 'isim', cefr: 'B2', ipa: '/ˈɪnfənt/',
    text: "'Baby' sözcüğünün daha resmî ve bilimsel karşılığı; tıp ve psikoloji metinlerinde sık geçer: infant mortality (bebek ölümleri). Adı 'infancy' (bebeklik); 'in its infancy' mecaz olarak 'emekleme döneminde' demektir.",
    example: 'The hospital allows parents to stay overnight with infants who need special care.',
    exampleTr: 'Hastane, özel bakıma ihtiyaç duyan bebeklerin anne babalarının geceyi yanlarında geçirmesine izin veriyor.',
    synonyms: ['baby', 'newborn'], family: ['infancy'] },
  { code: 'exposure', title: '(bir şeyle) karşılaşma, ona açık olma; maruz kalma', pos: 'isim', cefr: 'C1', ipa: '/ɪkˈspəʊʒə/',
    text: "'To' ile kullanılır: exposure to a language (bir dili duyup onunla karşılaşma), exposure to the sun (güneşe maruz kalma). Olumlu da olumsuz da olabilir. Fiili 'expose someone to something' (birini bir şeyle karşılaştırmak).",
    example: 'Living with a host family in Lyon gave her daily exposure to spoken French.',
    exampleTr: "Lyon'da bir ailenin yanında kalması, konuşulan Fransızcayı her gün duymasını sağladı.",
    synonyms: ['contact', 'experience'], family: ['expose', 'exposed'] },
  { code: 'milestone', title: 'dönüm noktası; (gelişimde) önemli basamak', pos: 'isim', cefr: 'C1', ipa: '/ˈmaɪlstəʊn/',
    text: "Asıl anlamı yol kenarındaki mil taşıdır. Mecaz olarak bir gelişimde ya da süreçte önemli bir aşamayı anlatır: developmental milestones (gelişim basamakları), reach a milestone (önemli bir aşamaya ulaşmak).",
    example: 'Riding a bike without stabilisers was an important milestone for our son.',
    exampleTr: 'Destek tekerlekleri olmadan bisiklete binmek oğlumuz için önemli bir dönüm noktasıydı.',
    synonyms: ['landmark', 'turning point'], family: [] },

  // ---------- fiil ----------
  { code: 'imitate', title: 'taklit etmek, öykünmek', pos: 'fiil', cefr: 'B2', ipa: '/ˈɪmɪteɪt/',
    text: "Birinin konuşmasını, davranışını ya da sesini örnek alıp aynısını yapmak. Adı 'imitation' (taklit); 'an imitation leather bag' gibi 'taklit, sahte' anlamında sıfat gibi de kullanılır.",
    example: 'My little sister imitates the way our grandfather clears his throat before he speaks.',
    exampleTr: 'Küçük kız kardeşim, dedemizin konuşmadan önce boğazını temizleyişini taklit ediyor.',
    synonyms: ['copy', 'mimic'], family: ['imitation', 'imitative'] },
  { code: 'grasp', title: 'kavramak, anlamak; sıkıca tutmak', pos: 'fiil', cefr: 'C1', ipa: '/ɡrɑːsp/',
    text: "Mecaz anlamı sınavda daha sık çıkar: bir fikri ya da kuralı tam olarak anlamak: grasp a concept, grasp the point. Asıl anlamı bir şeyi elle sıkıca kavramaktır. Ad olarak da kullanılır: a good grasp of grammar (dil bilgisini iyi kavramış olmak).",
    example: 'It took me a while to grasp why my answer to the last question was wrong.',
    exampleTr: 'Son soruya verdiğim cevabın neden yanlış olduğunu kavramam biraz zaman aldı.',
    synonyms: ['understand', 'comprehend'], family: ['graspable'] },
  { code: 'utter', title: '(ses, söz) çıkarmak, ağzından çıkarmak, söylemek', pos: 'fiil', cefr: 'C1', ipa: '/ˈʌtə/',
    text: "Çoğu zaman olumsuz cümlelerde geçer: not utter a word (tek söz etmemek). Adı 'utterance' (söz, söyleyiş); dil biliminde çocuğun ya da konuşucunun ürettiği her sözlü birimi anlatır. Sıfat olarak 'utter' (tam, mutlak: utter nonsense) ayrı bir sözcüktür.",
    example: 'He was so shocked by the news that he could not utter a word for several minutes.',
    exampleTr: 'Haber onu öyle sarstı ki dakikalarca ağzından tek söz çıkmadı.',
    synonyms: ['say', 'voice'], family: ['utterance'] },
  { code: 'babble', title: '(bebek) agulamak, anlamsız heceler çıkarmak; gevezelik etmek', pos: 'fiil', cefr: 'C1', ipa: '/ˈbæbl/',
    text: "Bebeğin 'ba-ba', 'da-da' gibi heceleri tekrar tekrar söylemesi. Yetişkin için 'anlaşılmadan hızlı hızlı konuşmak, saçmalamak' anlamına gelir. Adı 'babbling' (agulama).",
    example: 'The baby lay in her cot, babbling happily at the toys hanging above her.',
    exampleTr: 'Bebek beşiğinde yatıyor, üstünde asılı oyuncaklara mutlu mutlu agulıyordu.',
    synonyms: ['coo', 'chatter'], family: ['babbling', 'babbler'] },
  { code: 'deduce', title: '(ipuçlarından) sonuç çıkarmak, sonucuna varmak', pos: 'fiil', cefr: 'C1', ipa: '/dɪˈdjuːs/',
    text: "Eldeki bilgiden mantık yoluyla bir sonuca varmak: deduce something from something. 'Infer' ile yakın anlamlıdır. Adı 'deduction' (çıkarım). 'Deduct' (bir miktarı düşmek, kesmek) ile karıştırılmamalı.",
    example: 'From the muddy boots by the door, she deduced that her brother was already home.',
    exampleTr: 'Kapının yanındaki çamurlu botlardan, kardeşinin çoktan eve geldiği sonucunu çıkardı.',
    synonyms: ['infer', 'conclude'], family: ['deduction', 'deducible'] },

  // ---------- sıfat ----------
  { code: 'innate', title: 'doğuştan, fıtri', pos: 'sıfat', cefr: 'C1', ipa: '/ɪˈneɪt/',
    text: "Öğrenmeyle değil doğuştan gelen yetenek ya da özellik: an innate ability, innate curiosity. Karşıtı 'acquired' ya da 'learnt' (sonradan edinilmiş). 'Inborn' ile yakın anlamlıdır.",
    example: 'Some people seem to have an innate sense of direction and hardly ever need a map.',
    exampleTr: 'Bazı insanlarda doğuştan bir yön duygusu var gibi; neredeyse hiç haritaya ihtiyaç duymuyorlar.',
    synonyms: ['inborn', 'inherent'], family: ['innately'] },
  { code: 'bilingual', title: 'iki dilli', pos: 'sıfat', cefr: 'B2', ipa: '/baɪˈlɪŋɡwəl/',
    text: "İki dili konuşan kişi ya da iki dilde hazırlanmış şey: a bilingual child, a bilingual dictionary. Adı 'bilingualism' (iki dillilik). Tek dilli 'monolingual', çok dilli 'multilingual'dır.",
    example: 'The museum offers bilingual guided tours in Turkish and English.',
    exampleTr: 'Müze, Türkçe ve İngilizce iki dilli rehberli turlar düzenliyor.',
    synonyms: ['speaking two languages'], family: ['bilingualism'] },
  { code: 'critical', title: 'çok önemli, belirleyici, kritik; eleştirel', pos: 'sıfat', cefr: 'B2', ipa: '/ˈkrɪtɪkl/',
    text: "Bir sonucun ona bağlı olduğu, belirleyici: play a critical role (belirleyici bir rol oynamak), critical period (kritik dönem). Öteki anlamı 'eleştirel': be critical of something (bir şeyi eleştirmek). Ağır durum için de kullanılır: in a critical condition.",
    example: 'The first few weeks after planting are critical, so the young trees must be watered regularly.',
    exampleTr: 'Dikimden sonraki ilk birkaç hafta çok önemlidir; bu yüzden genç ağaçlar düzenli olarak sulanmalıdır.',
    synonyms: ['crucial', 'vital'], family: ['critically', 'criticism'] },
  { code: 'spontaneous', title: 'kendiliğinden, plansız, içten gelen', pos: 'sıfat', cefr: 'C1', ipa: '/spɒnˈteɪniəs/',
    text: "Dışarıdan bir yönlendirme ya da önceden plan olmadan, o anda kendiliğinden olan: spontaneous applause (kendiliğinden kopan alkış), spontaneous speech (hazırlıksız konuşma). Zarfı 'spontaneously', adı 'spontaneity'.",
    example: 'When the old singer walked on stage, the audience burst into spontaneous applause.',
    exampleTr: 'Yaşlı şarkıcı sahneye çıkınca seyirciler kendiliğinden alkışlamaya başladı.',
    synonyms: ['unplanned', 'impulsive'], family: ['spontaneously', 'spontaneity'] },

  // ---------- zarf ----------
  { code: 'naturally', title: 'kolayca, zorlanmadan; doğal olarak; tabii ki', pos: 'zarf', cefr: 'B1', ipa: '/ˈnætʃrəli/',
    text: "'Come naturally to someone' kalıbı, bir işin birine çaba gerektirmeden kolay gelmesidir. Cümle başında 'tabii ki, elbette' anlamı taşır: Naturally, we were disappointed. Sıfatı 'natural'.",
    example: 'Some people find public speaking hard, but for my aunt it has always come naturally.',
    exampleTr: 'Bazı insanlar topluluk önünde konuşmakta zorlanır ama teyzeme bu hep kolay gelmiştir.',
    synonyms: ['easily', 'effortlessly'], family: ['natural'] },
  { code: 'explicitly', title: 'açıkça, açık açık', pos: 'zarf', cefr: 'C1', ipa: '/ɪkˈsplɪsɪtli/',
    text: "Bir şeyin dolaylı değil, açıkça ve ayrıntılı söylendiğini anlatır: explicitly state, be explicitly taught. Karşıtı 'implicitly' (üstü kapalı, örtük olarak). Sıfatı 'explicit'.",
    example: 'The contract explicitly states that pets are not allowed in the flat.',
    exampleTr: 'Sözleşmede dairede evcil hayvan beslenemeyeceği açıkça yazıyor.',
    synonyms: ['clearly', 'directly'], family: ['explicit'] },

  // ---------- öbek fiil ----------
  { code: 'pick up', title: '(bir dili, beceriyi) kendiliğinden öğrenmek, kapmak; almak', pos: 'öbek fiil', cefr: 'B1', ipa: '/ˌpɪk ˈʌp/',
    text: "Ders almadan, ortamda bulunarak bir dili, alışkanlığı ya da bilgiyi öğrenmek: pick up a language, pick up a habit. En bilinen anlamları bir şeyi yerden almak ve birini arabayla almaktır. Nesne araya girebilir: pick it up.",
    example: 'I picked up some Greek while working in a seaside hotel one summer.',
    exampleTr: 'Bir yaz sahildeki bir otelde çalışırken biraz Yunanca kaptım.',
    synonyms: ['learn', 'acquire'], family: ['pick'] },
  { code: 'figure out', title: 'çözmek, anlamak, kafasında çözüme kavuşturmak', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌfɪɡər ˈaʊt/',
    text: "Bir sorunun cevabını ya da bir şeyin nasıl işlediğini düşünerek bulmak: figure out how/why/what… 'Work out' ile yakın anlamlıdır. Nesne araya girebilir: figure it out.",
    example: 'Can you help me figure out how this new coffee machine works?',
    exampleTr: 'Bu yeni kahve makinesinin nasıl çalıştığını çözmeme yardım eder misin?',
    synonyms: ['work out', 'solve'], family: ['figure'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'sc-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['innate', 'spontaneous', 'critical', 'infant'],
    level: 'zor', cefr: 'C1', konu: ['sıfat'],
    q: 'Because even very young infants seem to pay more attention to human speech than to other kinds of sound, some researchers believe that our interest in language is at least partly ----.',
    options: ['spontaneous', 'acquired', 'critical', 'temporary', 'innate'], answer: 4,
    explain: "Cümleye göre çok küçük bebekler bile insan konuşmasına öteki seslerden daha çok dikkat ediyor gibi görünüyor. Bu kadar erken ortaya çıkan bir ilgi deneyimle kazanılmış olamaz; en azından kısmen doğuştandır: 'innate'. 'Acquired' (sonradan edinilmiş) 'even very young infants' vurgusuyla çelişir. 'Spontaneous' (kendiliğinden, plansız) bir anda, dışarıdan yönlendirme olmadan olan davranışı anlatır; ilginin kaynağının doğuştan olup olmadığını söylemez. 'Critical' (belirleyici) ile 'ilgimiz kısmen belirleyicidir' denmez; cümle anlam kurmaz. 'Temporary' (geçici) ise bebeklerin erken ilgisinden çıkarılabilecek bir sonuç değil." },

  { id: 'sc-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['pick up', 'figure out'],
    level: 'kolay', cefr: 'B1', konu: ['öbek fiil'],
    q: 'Many children ---- a few words of the local dialect during a long summer holiday in the countryside and start using them at home, even though nobody has taught them.',
    options: ['pick up', 'give up', 'look up', 'figure out', 'turn down'], answer: 0,
    explain: "Çocuklar kimse öğretmeden, yalnız yazı köyde geçirerek birkaç yöresel sözcük öğreniyor ve evde kullanmaya başlıyor. Ortamda bulunarak kendiliğinden öğrenmek 'pick up' ile anlatılır. 'Figure out' bir sorunu ya da bir şeyin nasıl işlediğini düşünerek çözmektir; sözcükleri duyarak kapmayı anlatmaz. 'Give up' (bırakmak, vazgeçmek) ve 'turn down' (reddetmek) çocukların bu sözcükleri kullanmaya başlamasıyla çelişir. 'Look up' (sözlükte bakmak) da 'kimse öğretmeden, tatilde' bağlamına uymaz." },

  // ---------- dil bilgisi ----------
  { id: 'sc-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['toddler'],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: "Many parents keep a notebook of their toddler's first words ---- they can remember later how the child's speech developed.",
    options: ['even if', 'whereas', 'so that', 'as though', 'now that'], answer: 2,
    explain: "Anne babalar defteri bir amaçla tutuyor: çocuğun konuşmasının nasıl geliştiğini sonradan hatırlayabilmek için. Amaç 'so that' (-sın diye, -mek için) ile kurulur. 'Even if' (-se bile) ve 'whereas' (oysa) iki yan cümle arasında amaç değil koşul ya da karşıtlık kurar; anlam çıkmaz. 'As though' (sanki) cümleye benzetme katar. 'Now that' (madem artık) hatırlamayı defter tutmanın nedeni yapar; oysa hatırlamak defterin sonucudur." },

  { id: 'sc-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['bilingual'],
    level: 'orta', cefr: 'B2', konu: ['koşul'],
    q: 'If my parents ---- to me in Turkish as well as German when I was small, I ---- bilingual today.',
    options: ['spoke / would have been', 'have spoken / will be', 'had spoken / would be', 'had spoken / will have been', 'would speak / had been'], answer: 2,
    explain: "Cümle karışık bir koşul cümlesi: koşul geçmişe ait ('when I was small'), sonuç bugüne ait ('today'). Geçmişte gerçekleşmemiş koşul 'had + V3' ile, bugünkü hayalî sonuç 'would + V1' ile kurulur: 'had spoken / would be' (küçükken bana Almancanın yanında Türkçe de konuşsalardı, bugün iki dilli olurdum). 'Spoke / would have been' sonucu geçmişe atar ve 'today' ile çelişir. 'Have spoken / will be' gerçek bir koşul kurar; geçmişte olmamış bir durumu anlatmaz. 'Had spoken / will have been' geçmiş koşulu gelecek zamanla bağlar. 'Would speak / had been' iki yarının biçimlerini yer değiştirir." },

  { id: 'sc-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['figure out'],
    level: 'kolay', cefr: 'B1', konu: ['edat'],
    q: '---- explaining the rules to him, Ela just let her little brother watch a few games, and he soon figured out how to play.',
    options: ['Instead of', 'Because of', 'According to', 'Despite', 'In addition to'], answer: 0,
    explain: "Ela kardeşine kuralları anlatmadı; onun yerine birkaç oyunu izlemesine izin verdi. 'Just' (yalnızca) de bunu gösteriyor. 'Yerine' anlamını 'Instead of' verir. 'In addition to' (-e ek olarak) kuralları da anlattığını söyler ve 'just' ile çelişir. 'Despite' (-e rağmen) anlatmakla izletmek arasında bir çelişki varmış gibi gösterir. 'Because of' (yüzünden) ve 'According to' (-e göre) cümleye anlam vermez." },

  // ---------- boşluklu metin (5 boşluk) ----------
  { id: 'sc-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: ['babble', 'toddler', 'imitate', 'deduce', 'milestone'],
    level: 'kolay', cefr: 'B1', title: 'Agulamadan ilk sözcüklere',
    text: "Long before they can say a real word, babies are busy practising the sounds of their language. At around six months, most babies (1) ---- to babble, repeating simple syllables such as 'ba-ba' or 'da-da' again and again. Their first real words usually appear around their first birthday, although the exact age varies a great deal from one child to another. (2) ---- the next few months, new words tend to arrive quite slowly, and many of them are words the child hears every day at home, such as 'milk' or 'bye-bye'. Children at this stage love to (3) ---- the people around them, so a toddler may suddenly repeat a word that a parent has just said. Somewhere between eighteen months and two years, many children begin to put two words together, as in 'more juice' or 'daddy gone'. These little phrases are much (4) ---- than adult sentences, but they show that the child has started to combine words in a meaningful way. All of these ages are only rough guides. (5) ----, parents need not worry if their child reaches each milestone a few months later than a friend's child.",
    steps: [
      { konu: ['zaman'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['started', 'start', 'had started', 'were starting', 'had been starting'], answer: 1,
        explain: "Parça, her bebek için geçerli genel bir gelişimi geniş zamanla anlatıyor ('babies are busy', 'words usually appear'). Bu yüzden boşluğa geniş zaman gelir: 'most babies start to babble' (bebeklerin çoğu agulamaya başlar). 'Started' ve 'were starting' olayı geçmişte bir kez olmuş gibi anlatır. 'Had started' ve 'had been starting' ise geçmişteki başka bir olaydan önceyi gösterir; parçada böyle bir geçmiş olay yok." },
      { konu: ['edat'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['Since', 'Without', 'Among', 'Until', 'During'], answer: 4,
        explain: "Cümle ilk sözcüklerden sonraki birkaç ay boyunca neler olduğunu anlatıyor: yeni sözcükler bu süre içinde yavaş gelir. Bir süre 'boyunca' anlamını 'During' verir. 'Since' (-den beri) geniş zamanla değil, 'have + V3' ile kullanılır. 'Until' (-e kadar) sözcüklerin bu aylardan önce yavaş geldiğini söyler ve anlamı bozar. 'Without' (-sız) ve 'Among' (arasında) bir zaman dilimiyle anlam kurmaz." },
      { konu: ['kelime', 'fiil'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['avoid', 'deduce', 'ignore', 'imitate', 'interrupt'], answer: 3,
        explain: "Cümlenin ikinci yarısı ipucunu veriyor: küçük çocuk, anne ya da babasının az önce söylediği bir sözcüğü birden tekrarlayabilir. Bu, çevresindekileri taklit etmeyi sevmesinin sonucudur: 'imitate'. 'Deduce' (sonuç çıkarmak) insanları nesne olarak almaz. 'Avoid' (kaçınmak) ve 'ignore' (görmezden gelmek) duyduğunu tekrarlamakla çelişir. 'Interrupt' (sözünü kesmek) de 'so' ile gelen sonucu açıklamaz." },
      { konu: ['karşılaştırma'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['more complex', 'simple', 'most simple', 'as simple', 'simpler'], answer: 4,
        explain: "Boşluktan önce 'much', sonra 'than' var; bu ikisi karşılaştırma derecesinde bir sıfat ister: 'much simpler than' (-den çok daha basit). 'Simple' ve 'most simple' 'than' ile kullanılmaz; 'as simple' ise 'as … as' kalıbını yarım bırakır. 'More complex' biçimce uyar ama anlamca çelişir: 'little phrases' ve 'but' ile kurulan karşıtlık, bu iki sözcüklü söyleyişlerin yetişkin cümlelerinden daha basit olduğunu gösteriyor." },
      { konu: ['bağlantı zarfı'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['However', 'Otherwise', 'Therefore', 'For instance', 'Similarly'], answer: 2,
        explain: "Önceki cümle, verilen yaşların yalnız kaba bir ölçü olduğunu söylüyor. Boşluklu cümle bundan çıkan sonucu veriyor: bu yüzden anne babalar, çocukları bir basamağa birkaç ay geç ulaşırsa kaygılanmamalı. Sonuç 'Therefore' ile bağlanır. 'However' iki cümle arasında olmayan bir karşıtlık kurar. 'Otherwise' (aksi hâlde) bir uyarı getirir. 'For instance' bir örnek, 'Similarly' bir benzerlik bekler; ikisi de sonucu bağlamaz." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'sc-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Many adults who move abroad learn to speak the new language very well but keep a noticeable accent, whereas ----.',
    options: [
      'their accent tends to grow stronger the longer they stay in the new country',
      'most of them also learn to read and write it without much difficulty',
      'those who arrive as young children often end up sounding like local speakers',
      'a noticeable accent can sometimes make them harder for others to understand',
      'they usually understand the language better than they can speak it',
    ], answer: 2,
    explain: "'Whereas' (oysa, -diği hâlde) iki grubu ya da iki durumu karşıtlık içinde yan yana koyar. Ana cümle yetişkinleri anlatıyor: yeni dili çok iyi konuşuyorlar ama belirgin bir aksanları kalıyor. Karşıt durum, çocukken gelenlerin çoğu zaman yerliler gibi konuşmasıdır. Aksanın zamanla güçlendiğini söyleyen seçenek aynı yönde bir bilgi ekler, karşıtlık kurmaz. Okuyup yazmayı da kolayca öğrenmeleri ve dili konuşabildiklerinden iyi anlamaları da yetişkinler hakkında ek bilgidir. Aksanın onları anlamayı zaman zaman zorlaştırabileceği de ana cümleyle aynı yönde bir bilgi; karşıtlık kurmuyor." },

  { id: 'sc-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: '---- are often the ones who later find it easiest to follow the stories their teachers read in class.',
    options: [
      'Children who seldom hear any stories at home before starting school',
      'Parents who read aloud to their children every evening',
      'Children whose parents read aloud to them most evenings',
      'Children which their parents read aloud to every evening',
      'The stories that young children hear before going to bed',
    ], answer: 2,
    explain: "Ana cümle, okulda öğretmenin okuduğu hikâyeleri en kolay izleyen öğrencilerden söz ediyor; özne çocuklar olmalı. 'Children whose parents read aloud to them' (anne babası onlara sesli kitap okuyan çocuklar) hem doğru sıfat cümleciğini ('whose' iyelik bildirir) hem de anlamlı bir nedeni verir. Evde neredeyse hiç hikâye dinlemeyen çocukların en kolay izleyenler olması mantığa ters. Özne 'Parents' olursa okulda öğretmeni dinleyenler anne babalar olur. 'Which' insanlar için kullanılmaz ve iyelik ilişkisi kurmaz. 'The stories' öznesi ise 'the ones who … find it easiest' ile uyuşmaz; hikâyeler bir şeyi izleyemez." },

  { id: 'sc-t3', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['exposure'],
    level: 'orta', cefr: 'B2', konu: ['koşul'],
    q: 'If a deaf child has little or no exposure to any language, spoken or signed, during the first years of life, ----.',
    options: [
      'the child will find it easier to learn a language later on',
      'the parents can usually teach the child to read before school',
      'the child would have learnt to sign much more quickly',
      'the child is likely to understand speech better than others',
      'learning a language later on may be far more difficult',
    ], answer: 4,
    explain: "Koşul, ilk yıllarda hiçbir dille, ne konuşmayla ne işaretle karşılaşmamak. Bunun mantıklı sonucu, dili sonradan öğrenmenin çok daha zor olabilmesidir. Sonradan daha kolay öğreneceğini söyleyen seçenek sonucu tersine çevirir. Anne babanın okuma öğretebilmesi koşula bağlanmaz; dille karşılaşmamış bir çocuk için de mantıksız. Konuşmayı başkalarından iyi anlaması da koşulla çelişir. 'Would have learnt' ise geçmişe dönük, gerçekleşmemiş bir sonuç bildirir; geniş zamanlı koşulla uyuşmaz ve anlamca da ters düşer." },

  { id: 'sc-t4', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['acquisition'],
    level: 'zor', cefr: 'C1', konu: ['karşıtlık'],
    q: '----, the question of how much of language acquisition depends on abilities we are born with is still far from settled.',
    options: [
      'Even though linguists have been arguing about it for more than half a century',
      'Since most linguists now agree that children learn language only from what they hear',
      'Now that brain scans have shown exactly which abilities children are born with',
      'Because researchers have been recording children\'s speech for many decades',
      'Despite the fact that very few researchers have ever shown any interest in it',
    ], answer: 0,
    explain: "Ana cümle sorunun hâlâ çözülmediğini söylüyor. Beklenenle sonuç arasındaki karşıtlığı 'Even though linguists have been arguing about it for more than half a century' kurar: yarım yüzyılı aşkın tartışmaya rağmen soru çözülmedi. Dil bilimcilerin çoğunun artık uzlaştığını ya da beyin taramalarının doğuştan gelen yetileri kesin gösterdiğini söyleyen seçenekler, sorunun çözüldüğünü ima eder ve ana cümleyle çelişir. Çocukların konuşmasının onlarca yıldır kaydedilmesi, sorunun çözülmemesinin nedeni olamaz. 'Despite' ile verilen ilgisizlik ise sorunun çözülmemesini açıklar; ona karşıt bir durum değildir, üstelik 'tartışma' bilgisiyle de uyuşmaz." },

  // ---------- çeviri ----------
  { id: 'sc-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['infant'],
    level: 'orta', cefr: 'B2', konu: ['isim-fiil ve mastar'],
    q: 'Talking to infants in a slow, sing-song voice seems to help them notice where one word ends and the next one begins.',
    options: [
      'Kendileriyle yavaş ve şarkı söyler gibi bir sesle konuşulan bebekler, bir sözcüğün nerede bitip ötekinin nerede başladığını ayırt etmekte zorlanıyor gibi görünüyor.',
      'Bebeklerle yavaş ve şarkı söyler gibi bir sesle konuşmak, yeni sözcükleri daha erken söylemeye başlamalarına yardım ediyor olabilir.',
      'Bebeklerle yavaş ve şarkı söyler gibi bir sesle konuşmak, bir sözcüğün nerede bitip ötekinin nerede başladığını fark etmelerine yardım ediyor gibi görünüyor.',
      'Bebeklerin bir sözcüğün nerede bitip ötekinin nerede başladığını fark etmesi, onlarla yavaş ve şarkı söyler gibi konuşmayı kolaylaştırıyor gibi görünüyor.',
      'Bebeklerle yavaş ve şarkı söyler gibi bir sesle konuşan yetişkinler, bir sözcüğün nerede bitip ötekinin nerede başladığını daha iyi fark ediyor gibi görünüyor.',
    ], answer: 2,
    explain: "Cümlenin öznesi bir isim-fiil: 'Talking to infants' (bebeklerle konuşmak). 'Help them notice' (fark etmelerine yardım etmek) mastarsız 'help' yapısıdır; 'seems to' da temkinli 'gibi görünüyor' anlamını verir. Doğru çeviri bu üç öğeyi korur. Yanlışlardan biri bebeklerin zorlandığını söyleyerek anlamı tersine çeviriyor. Biri fark etmeyi 'daha erken söylemeye başlamak'la değiştiriyor. Biri neden ile sonucun yerini değiştiriyor. Kalan yanlış seçenek fark edenleri bebeklerden yetişkinlere kaydırıyor." },

  { id: 'sc-c2', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['toddler'],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: 'The more often toddlers hear a new word in different situations, the more easily they remember it.',
    options: [
      'Yeni yürümeye başlayan çocuklar yeni bir sözcüğü farklı durumlarda ne kadar sık duyarsa onu o kadar kolay hatırlar.',
      'Yeni yürümeye başlayan çocuklar yeni bir sözcüğü ne kadar sık kullanırsa onu farklı durumlarda o kadar kolay hatırlar.',
      'Yeni yürümeye başlayan çocuklar, farklı durumlarda duydukları sözcükleri tek bir durumda duyduklarından daha zor hatırlar.',
      'Yeni yürümeye başlayan çocukların yeni bir sözcüğü hatırlaması için onu birçok farklı durumda duyması gerekir.',
      'Yeni yürümeye başlayan çocuklar yeni bir sözcüğü ne kadar kolay hatırlarsa onu farklı durumlarda o kadar sık kullanır.',
    ], answer: 0,
    explain: "'The more …, the more …' kalıbı Türkçede 'ne kadar …sa, o kadar …' ile karşılanır. Cümleye göre sözcüğü farklı durumlarda daha sık duymak onu hatırlamayı kolaylaştırır. Doğru çeviri bu ilişkiyi ve iki öğeyi (sıklık ve kolaylık) yerinde tutar. Yanlışlardan biri 'duymak' yerine 'kullanmak' diyor. Biri farklı durumlarda duyulan sözcüklerin daha zor hatırlandığını söyleyerek anlamı tersine çeviriyor. Biri derece bildiren ilişkiyi bir zorunluluğa ('gerekir') çeviriyor. Kalan yanlış seçenek iki öğenin yerini değiştiriyor." },

  { id: 'sc-c3', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['edilgen kanaat'],
    q: "Babies are believed to have already begun learning the melody of their mother's language by the time they are born.",
    options: [
      'Bebeklerin, doğdukları sırada annelerinin dilinin ezgisini öğrenmeye çoktan başlamış olduklarına inanılıyor.',
      'Bebeklerin, annelerinin dilinin ezgisini ancak doğduktan hemen sonra öğrenmeye başladıkları artık biliniyor.',
      'Bebeklerin, doğdukları sırada annelerinin dilini çoktan öğrenmiş oldukları kanıtlanmış durumda.',
      'Annelerin, bebeklerine kendi dillerinin ezgisini daha doğmadan öğretmeye başladıklarına inanılıyor.',
      'Bebeklerin annelerinin dilinin ezgisini öğrenmeye tam olarak ne zaman başladıkları araştırmacılar arasında hâlâ tartışılıyor.',
    ], answer: 0,
    explain: "'Are believed to have begun' edilgen bir kanaattir (… olduğuna inanılıyor); 'to have begun' başlamanın doğumdan önce olduğunu, 'already' ve 'by the time they are born' de doğduklarında bu işin çoktan başlamış olduğunu gösterir. Doğru çeviri hem kanaati hem zaman ilişkisini korur. Yanlışlardan biri başlangıcı doğumdan sonraya atıyor ve kanaati kesin bilgiye çeviriyor. Biri 'ezgi'yi dilin tamamına genişletiyor ve 'inanılıyor'u 'kanıtlanmış' yapıyor. Biri öğreneni bebekten anneye kaydırıyor. Kalan yanlış seçenek, başlangıcın zamanının tartışmalı olduğunu söyleyerek cümlenin verdiği yargıyı düşürüyor." },

  { id: 'sc-c4', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['zaman'],
    q: 'Kızımız ilk sözcüğünü on iki aylıkken söyledi ve o zamandan beri her hafta yeni bir sözcük öğreniyor.',
    options: [
      'Our daughter has said her first word when she was twelve months old, and she learns a new word every week since then.',
      'Our daughter had said her first word before she was twelve months old, and she learnt a new word every week after that.',
      'When our daughter is twelve months old, she will say her first word and then learn a new word every week.',
      'Our daughter said her first word when she was twelve months old, and she has been learning a new word every week since then.',
      'Our daughter said her first word when she was twelve months old, but she hasn\'t learnt any new words since then.',
    ], answer: 3,
    explain: "Türkçe cümlede iki zaman var: geçmişte bir kez olan bir olay (ilk sözcüğünü söyledi) ve o zamandan beri süren bir durum (o zamandan beri öğreniyor). Birincisi 'said', ikincisi 'since then' ile 'has been learning' olur. Yanlışlardan biri 'has said' ile 'when she was' ve 'learns' ile 'since then' bağdaştırıyor; ikisi de dil bilgisi açısından yanlış. Biri 'before' diyerek zamanı kaydırıyor ve öğrenmeyi geçmişte bitmiş gösteriyor. Biri olayları geleceğe taşıyor. Kalan yanlış seçenek o zamandan beri hiç yeni sözcük öğrenmediğini söyleyerek anlamı tersine çeviriyor." },

  { id: 'sc-c5', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['deduce'],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Çocuklar yeni bir sözcüğü yalnız bir kez duysalar bile, anlamını çoğu zaman kullanıldığı bağlamdan çıkarabilirler.',
    options: [
      'Unless children hear a new word more than once, they can rarely deduce its meaning from the context in which it is used.',
      'Since children hear most new words only once, they often deduce their meaning from the context in which they are used.',
      'Even if children hear a new word only once, they can often deduce its meaning from the context in which it is used.',
      'Even though children have heard a new word many times, they often cannot deduce its meaning from the context alone.',
      'As soon as children hear a new word, they can always deduce its meaning from the context in which it is used.',
    ], answer: 2,
    explain: "'-sa bile' bir varsayımı karşılar ve 'even if' ile çevrilir; 'çoğu zaman … çıkarabilirler' de 'can often deduce' olur. Doğru seçenek ikisini de korur. 'Unless' ile kurulan seçenek tek duyuşta anlamın neredeyse hiç çıkarılamadığını söyleyerek anlamı tersine çeviriyor. 'Since' ile kurulan seçenek varsayımı bir nedene çeviriyor ve sözcüklerin çoğunun yalnız bir kez duyulduğunu ileri sürüyor. 'Even though' ile kurulan seçenek sözcüğü birçok kez duymaktan söz ediyor ve anlamın çıkarılamadığını söylüyor. 'As soon as' ile kurulan seçenek 'yalnız bir kez' bilgisini atıyor ve 'çoğu zaman'ı 'her zaman'a çeviriyor." },

  { id: 'sc-c6', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['infant'],
    level: 'zor', cefr: 'C1', konu: ['isim cümleciği'],
    q: 'Bebeklerin sözcükleri anlamaya tam olarak ne zaman başladığı, araştırmacılar arasında hâlâ tartışma konusudur.',
    options: [
      'Exactly when infants begin to understand words is still a matter of debate among researchers.',
      'When infants begin to understand words exactly, researchers are still debating the matter.',
      'Researchers are still debating whether infants understand words before they can say them.',
      'Researchers have finally agreed on the exact age at which infants begin to understand words.',
      'What infants understand when they first hear words is still a matter of debate among researchers.',
    ], answer: 0,
    explain: "Türkçe cümlenin öznesi bir isim cümleciği: 'bebeklerin sözcükleri anlamaya tam olarak ne zaman başladığı'. İngilizcede bu 'Exactly when infants begin to understand words' biçiminde, soru sözcüğüyle başlayan ve düz sırada kurulan bir isim cümleciği olur. Yanlışlardan biri aynı sözcükleri bir zaman cümleciğine çeviriyor (bebekler sözcükleri tam anladığında…). Biri tartışmanın konusunu bebeklerin sözcükleri söylemeden önce anlayıp anlamadığına kaydırıyor. Biri tartışmanın bittiğini söyleyerek anlamı tersine çeviriyor. Kalan yanlış seçenek 'ne zaman' yerine 'ne' sorusunu tartışma konusu yapıyor." },

  // ---------- okuma parçası (4 soru, YDS biçimi) ----------
  { id: 'sc-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['grasp'],
    level: 'orta', cefr: 'B2', title: 'Doğuştan mı, sonradan mı?',
    text: "Almost every child learns to speak, usually without any formal teaching, yet how they manage it remains one of the oldest puzzles in the study of language. One obvious answer is that children simply repeat what they hear. A closer look at their mistakes, however, suggests that repetition cannot be the whole story. At a certain stage, many English-speaking children start to say things like 'goed' instead of 'went' or 'mouses' instead of 'mice'. They are unlikely to have heard these forms from adults, so they must have produced them on their own. What seems to happen is that the child grasps a pattern, such as adding '-ed' to show the past, and then applies it more widely, even to verbs that do not follow it. Linguists call this overgeneralisation, and many regard it as strong evidence that children are actively working out rules rather than storing whole sentences. In the 1950s and 1960s, the American linguist Noam Chomsky went further, arguing that humans are born with a special capacity for language which guides this process. Others, including the psychologist Michael Tomasello, have placed more weight on what children hear and on their everyday attempts to communicate with the people around them. The debate is far from over, and many researchers now suspect that the answer lies somewhere in between.",
    steps: [
      { konu: ['ayrıntı'],
        q: "According to the passage, a child who says 'goed' instead of 'went' ----.",
        options: [
          'is treating an irregular verb as if it followed the usual rule',
          'is repeating a form that the adults around the child often use',
          "has not yet noticed that English uses '-ed' to show the past",
          'is likely to keep making the same mistake well into adulthood',
          'has usually been taught the rule for the past tense by a parent',
        ], answer: 0,
        explain: "Parçaya göre çocuk geçmişi '-ed' ile yapma kuralını kavrayıp bunu bu kurala uymayan fiillere de uygular. 'Goed' diyen çocuk düzensiz bir fiili düzenliymiş gibi çekiyor. Çocuğun bu biçimi yetişkinlerden duyduğu parçayla çelişiyor; parça bunun pek olası olmadığını söylüyor. '-ed' kuralını henüz fark etmediği de ters; hata tam da bu kuralı fark etmesinden doğuyor. Hatayı yetişkinliğe kadar sürdüreceği ve kuralı anne babasından öğrendiği parçada yok; parça çocukların çoğu zaman resmî bir öğretim olmadan konuştuğunu söylüyor." },
      { konu: ['çıkarım'],
        q: "It can be inferred from the passage that forms such as 'mouses' ----.",
        options: [
          "prove beyond doubt that Chomsky's view of language was correct",
          'show that young children often mishear the words that adults around them use',
          'would be hard to explain if children learnt only by repetition',
          "are a sign that a child's language is developing more slowly than it should",
          'should be corrected by parents as soon as they first appear',
        ], answer: 2,
        explain: "Parça, çocukların yalnız duyduklarını tekrarladığı açıklamasının yetmediğini söylüyor; çünkü 'mouses' gibi biçimleri yetişkinlerden duymaları pek olası değil. Demek ki çocuklar yalnız tekrar ederek öğrenseydi bu biçimler açıklanamazdı. Bu biçimlerin Chomsky'nin görüşünü kesin olarak kanıtladığı parçada yok; parça tartışmanın sürdüğünü söylüyor. Çocukların yetişkinleri yanlış duyduğu da parçada geçmiyor. Bu biçimlerin yavaş gelişmenin işareti olduğu parçaya ters; parça bunları çocuğun kural çıkardığının kanıtı sayıyor. Anne babanın düzeltmesi gerektiği de parçada yok." },
      { konu: ['sözcük anlamı'],
        q: "The phrase 'placed more weight on' in the passage is closest in meaning to ----.",
        options: ['emphasised', 'questioned', 'overlooked', 'measured', 'limited'], answer: 0,
        explain: "Parçada Tomasello gibi araştırmacıların, Chomsky'nin doğuştan yetisine karşı çocukların duyduklarına ve iletişim çabalarına 'daha çok ağırlık verdiği' anlatılıyor. Bir şeye ağırlık vermek onu vurgulamaktır: 'emphasised'. 'Questioned' (sorgulamak) ve 'overlooked' (gözden kaçırmak) anlamı tersine çevirir; bu araştırmacılar duyulan dili önemsiyor. 'Measured' (ölçmek) ve 'limited' (sınırlamak) da bağlama uymaz." },
      { konu: ['yazarın amacı'],
        q: "The author's main purpose in the passage is to ----.",
        options: [
          "argue that Chomsky's theory of language has now been proved wrong",
          'explain how parents can stop their children making grammar errors',
          'compare the ways in which different languages form the past tense',
          'describe the stages that every child goes through before speaking',
          "show how children's errors have fed a debate about language learning",
        ], answer: 4,
        explain: "Parça çocukların 'goed', 'mouses' gibi hatalarından yola çıkıyor, bunların taklitle açıklanamadığını gösteriyor ve doğuştan yeti ile duyulan dil arasındaki süregelen tartışmayı anlatıyor. Yazarın amacı, çocuk hatalarının bu tartışmayı nasıl beslediğini göstermektir. Chomsky'nin yanıldığını savunmak parçaya ters; tartışmanın sürdüğü söyleniyor. Anne babaya öneri, dillerin geçmiş zamanlarını karşılaştırma ve her çocuğun geçtiği aşamaları sıralama parçada yok." },
    ] },

  // ---------- okuma parçası (3 soru, YÖKDİL biçimi) ----------
  { id: 'sc-o2', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['infant', 'acquisition'],
    level: 'zor', cefr: 'C1', title: 'Canlı ses, ekrandaki ses',
    text: "Every language uses only a small selection of the many speech sounds that human beings can produce, and part of a baby's first task is to discover which of them matter. Studies by the American researcher Patricia Kuhl and others suggest that infants of around six months can tell apart the sounds of almost any language, including contrasts their parents may not even hear. Over the following months this broad ability appears to narrow. By about ten to twelve months, babies seem to have become specialists in the sounds of the language spoken around them and are less sensitive to contrasts that it does not use. What drives this change? In a study published in 2003, Kuhl's team arranged for infants who had never heard Mandarin to spend a series of short play sessions with Mandarin speakers who read and talked to them. Afterwards, these babies could distinguish a Mandarin sound contrast far better than a comparison group. Another group watched recordings of the same kind of sessions on a screen, and they showed no measurable benefit. The researchers concluded that, at this age at least, simply hearing a language may not be enough. Babies appear to learn best from a real person who looks at them, responds to them and shares their attention, which suggests that social interaction plays a central part in early language acquisition.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the babies who watched the Mandarin sessions on a screen ----.',
        options: [
          'learnt the new sound contrast almost as well as the babies in the live sessions',
          'had already been able to hear the contrast before the study began',
          'paid closer attention to the speakers than the babies who met them',
          'did not become noticeably better at hearing the Mandarin contrast',
          'became less sensitive to the sounds of the language spoken at home',
        ], answer: 3,
        explain: "Parçaya göre oturumları ekrandan izleyen grupta ölçülebilir bir kazanç görülmedi ('they showed no measurable benefit'); yani bu bebekler Mandarin ses ayrımını duymakta belirgin biçimde ilerlemedi. Canlı oturumlardaki bebekler kadar öğrendikleri parçaya ters. Ayrımı çalışmadan önce de duyabildikleri, konuşuculara daha çok dikkat ettikleri ve kendi dillerinin seslerine duyarlılıklarını yitirdikleri parçada geçmiyor." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that a one-year-old who has only ever heard Turkish ----.',
        options: [
          'may be less able than a younger baby to hear contrasts Turkish lacks',
          'will be unable to learn the sounds of any other language later in life',
          'can tell apart the sounds of every language as well as a six-month-old',
          'would learn Mandarin sounds just as well from a video as from a person',
          'has probably not yet begun to notice which sounds matter in Turkish',
        ], answer: 0,
        explain: "Parçaya göre bebekler on on iki ay dolayında çevrelerinde konuşulan dilin seslerinde uzmanlaşır ve o dilin kullanmadığı ayrımlara karşı daha az duyarlı olur. Yalnız Türkçe duymuş bir yaşındaki bir bebek de Türkçede olmayan bir ses ayrımını, daha küçük bir bebeğe göre zor duyabilir. Başka hiçbir dilin seslerini öğrenemeyeceği aşırı bir genellemedir. Altı aylık bebek kadar her dilin sesini ayırt ettiği ve Türkçede hangi seslerin önemli olduğunu henüz fark etmediği parçaya ters. Videodan da canlı konuşucudan da aynı ölçüde öğreneceği, 2003 çalışmasının sonucuyla çelişiyor." },
      { konu: ['ana fikir'],
        q: 'The main idea of the passage is that ----.',
        options: [
          "screens are so harmful to babies' hearing that they should be kept out of the home",
          "babies soon become attuned to their language's sounds, helped mainly by real people",
          'Mandarin has several speech sounds that babies all over the world find very hard',
          'six-month-old babies are better than adults at learning every part of a language',
          'babies learn sounds best when they hear as many languages as possible on a screen',
        ], answer: 1,
        explain: "Parça iki şey anlatıyor: bebekler ilk yılda kendi dillerinin seslerinde uzmanlaşır ve bu değişimi en çok canlı bir insanla etkileşim besliyor gibi görünür. Bunu, bebeklerin kısa sürede kendi dillerinin seslerine uyum sağladığını ve bunda en çok gerçek insanların yardımcı olduğunu söyleyen seçenek özetler. Ekranların bebeklerin işitmesine zararlı olduğu parçada yok; parça yalnız ekrandan ses öğrenmenin işe yaramadığını söylüyor. Mandarin seslerinin bütün bebeklere zor geldiği ve altı aylık bebeklerin dilin her yönünü yetişkinlerden iyi öğrendiği parçada geçmiyor. Ekrandan çok dil dinletmek ise parçanın vardığı sonuca ters." },
    ] },

  // ---------- diyalog tamamlama ----------
  { id: 'sc-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['toddler'],
    level: 'orta', cefr: 'B2', konu: ['bağlam'],
    q: "Ayla: My mother thinks we should speak only Turkish to Leo until he starts school.\nJack: Why? Is she worried that two languages will be too much for him?\nAyla: ----\nJack: Well, I'm glad we agree. I'll carry on talking to him in English, then.",
    options: [
      "Yes, and to be honest, I'm beginning to think that she may well be right about it.",
      "No, she just wants him to have a head start with reading at school.",
      "She is, but I've read that toddlers cope perfectly well with two languages.",
      'She is, so perhaps you should speak English to him only at weekends.',
      'Not really. She simply finds it hard to follow us when we speak English at dinner.',
    ], answer: 2,
    explain: "Jack'in son sözü ('Neyse, aynı fikirde olmamıza sevindim. O zaman onunla İngilizce konuşmaya devam ederim.') Ayla'nın, Jack'in İngilizce konuşmasını destekleyen bir görüş bildirdiğini gösteriyor. Bunu, annesinin kaygılı olduğunu kabul edip küçük çocukların iki dille rahatça başa çıktığını okuduğunu söyleyen cevap karşılar. Annesinin haklı olabileceğini söyleyen ya da İngilizceyi hafta sonlarıyla sınırlamayı öneren cevaplar Jack'in İngilizceye devam etme kararıyla çelişir. Okumada önde başlama isteği ve İngilizce konuşmaları izleyememe ise Ayla'nın bir görüşünü bildirmez; 'aynı fikirdeyiz' sözüne bağlanmaz." },

  // ---------- anlamca en yakın cümle ----------
  { id: 'sc-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: ['toddler'],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: 'Toddlers are usually able to understand a great many more words than they can actually say.',
    options: [
      'Toddlers can usually say far fewer words than they are able to understand.',
      'Toddlers can usually say just about as many words as they are able to understand.',
      'Toddlers usually understand fewer words than they are actually able to say.',
      'The more words toddlers learn to say, the fewer of them they usually understand.',
      'Toddlers usually understand far more words than most adults would expect them to.',
    ], answer: 0,
    explain: "Verilen cümle iki sayıyı karşılaştırıyor: küçük çocukların anladığı sözcükler, söyleyebildiklerinden çok daha fazladır. Doğru seçenek aynı karşılaştırmayı tersinden kurar: söyleyebildikleri sözcükler anlayabildiklerinden çok daha azdır. İki sayının aşağı yukarı eşit olduğunu ve anlanan sözcüklerin daha az olduğunu söyleyen seçenekler karşılaştırmayı bozar. 'The more …, the fewer …' kalıbıyla kurulan seçenek cümlede olmayan bir ilişki ileri sürer. Kalan yanlış seçenek karşılaştırmayı söylenen sözcüklerden yetişkinlerin beklentisine kaydırır." },

  // ---------- paragraf tamamlama ----------
  { id: 'sc-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['explicitly'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: "Parents often believe that they teach their children to speak, but most of what children learn about grammar is never explicitly taught. ----. If a little girl says 'Me want biscuit', for example, her father is likely to hand her one without comment, whereas if she calls a cat a dog, he will probably correct her.",
    options: [
      'As a result, children who are corrected often make far fewer grammar mistakes',
      'In fact, adults tend to correct what is untrue, not what is ungrammatical',
      'Some children begin to speak in full sentences much earlier than others do',
      "Most parents spend a great deal of time correcting their toddlers' grammar",
      'At school, grammar is usually taught through exercises and lists of rules',
    ], answer: 1,
    explain: "Boşluktan sonraki örnek bir karşıtlık gösteriyor: baba dil bilgisi yanlışı olan cümleye hiç ses çıkarmadan bisküviyi veriyor, ama kediye köpek denince düzeltiyor. Bu örneğin açıkladığı genel cümle, yetişkinlerin dil bilgisi yanlışını değil gerçeğe uymayan sözü düzeltme eğiliminde olduğudur; 'In fact' de ilk cümledeki 'dil bilgisi açıkça öğretilmez' yargısını pekiştirir. Anne babaların dil bilgisini düzeltmeye çok zaman ayırdığını söyleyen seçenek örnekle çelişir. Düzeltilen çocukların daha az hata yaptığı sonucu önceki cümleden çıkmaz. Bazı çocukların erken konuşması ve okulda dil bilgisi öğretimi örneğe bağlanmaz." },

  { id: 'sc-p2', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['spontaneous', 'utter'],
    level: 'zor', cefr: 'C1', konu: ['gönderim'],
    q: 'For decades, much of what we knew about how children learn to talk came from tests in which a researcher showed a child pictures and asked questions about them. ----. Such recordings often reveal far more than a laboratory test, since a shy two-year-old faced with a stranger may refuse to utter a single word.',
    options: [
      'These tests were easy to repeat, so results from different children could be compared',
      'Some children, however, enjoy the attention and answer every question with enthusiasm',
      'Researchers later realised that spontaneous speech at home may differ from test answers',
      'Parents were sometimes asked to fill in lists of the words their child could already say',
      'More recently, some families have let researchers place microphones in their homes',
    ], answer: 4,
    explain: "Boşluktan sonraki cümle 'Such recordings' (bu tür kayıtlar) diye başlıyor; boşluktaki cümle bir kayıttan söz etmeli. Bunu, bazı ailelerin araştırmacıların evlerine mikrofon yerleştirmesine izin verdiğini söyleyen cümle sağlar; evde mikrofonla yapılan kayıtlar, yabancıdan çekinen bir çocuğun laboratuvarda susabilmesiyle karşılaştırılıyor. Testlerin kolay tekrarlanması ve bazı çocukların sorulara hevesle cevap vermesi kayda değil teste bağlanıyor. Evdeki kendiliğinden konuşmanın test cevaplarından farklı olabileceği fikri yakın görünür ama kayıttan söz etmez; 'such recordings' bir şeyi göstermez. Anne babaların sözcük listesi doldurması da bir kayıt değil, bir anket." },

  // ---------- akışı bozan cümle ----------
  { id: 'sc-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['critical', 'spontaneous'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'In the 1970s and 1980s, new schools for deaf children opened in Nicaragua, bringing together young people who had grown up with little contact with other deaf people.',
      'Most of them had communicated with their families through simple gestures invented at home, but once they were together, they began to build a shared way of signing.',
      'Younger children who joined the schools later seem to have played a critical role, since they made the grammar of this system far more regular.',
      'Sign languages are used by deaf communities all over the world, and a number of countries have given them official status.',
      'Linguists have followed this new language closely, because it offers a rare chance to watch a language emerge spontaneously rather than being inherited from earlier generations.',
    ], answer: 3,
    explain: "Parça Nikaragua İşaret Dili'nin doğuşunu sırayla anlatıyor: 1970'ler ve 80'lerde açılan okullar sağır çocukları bir araya getiriyor (I); evde uydurulmuş işaretlerle büyümüş çocuklar ortak bir işaretleşme kuruyor (II); sonra gelen küçük çocuklar dil bilgisini düzenli hâle getiriyor (III); dil bilimciler bu yeni dili, bir dilin kendiliğinden doğuşunu izleme fırsatı olarak inceliyor (V). IV. cümle de işaret dillerinden söz ediyor ama konuyu dünyadaki işaret dillerinin resmî tanınmasına kaydırıyor; V'teki 'this new language' de III'teki sisteme bağlanıyor. Bu yüzden akışı IV. cümle bozuyor." },

  { id: 'sc-b2', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['bilingual', 'naturally'],
    level: 'kolay', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Parents who are bringing up a bilingual child are sometimes alarmed to hear the child use words from both languages in a single sentence.',
      'Learning a foreign language at secondary school usually involves memorising word lists and practising grammar in class.',
      'Specialists who study bilingual children, however, generally see this kind of mixing as a normal stage rather than a sign of confusion.',
      'A young child may simply use whichever word comes to mind most naturally, much as bilingual adults often do in relaxed conversation.',
      'As the child\'s vocabulary grows in both languages, the mixing tends to become more of a choice than a necessity.',
    ], answer: 1,
    explain: "Parça iki dilli büyüyen çocukların dilleri karıştırmasını anlatıyor: anne babalar çocuğun aynı cümlede iki dilden sözcük kullanmasından kaygılanır (I); uzmanlar ise bunu normal bir aşama sayar (III); çocuk aklına ilk gelen sözcüğü kullanır (IV); sözcük dağarcığı büyüdükçe karıştırma bir zorunluluk olmaktan çıkar (V). II. cümle de dil öğrenmekten söz ediyor ama konuyu ortaokulda sözcük ezberlemeye kaydırıyor. III'teki 'however' ve 'this kind of mixing' de doğrudan I'e bağlanıyor. Bu yüzden akışı II. cümle bozuyor." },
];

export default { id: 'sosyal-dil-edinimi', course: C, title: U, order: 7, cards, items };
