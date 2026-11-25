// iDil › Genel › Bellek ve unutma.
// Tümü özgün: Claude yazdı (17 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (çoğaltma 3. tur planı §7.1 ve yerleşik bilgi; yalnız olgular, metin özgün):
// - Hermann Ebbinghaus, 1885 (Über das Gedächtnis): kendini denek yaptı, anlamsız heceler ezberledi; unutma ilk saatlerde
//   hızlı, sonra yavaş ("unutma eğrisi"; oran yazılmadı). Bir listeyi yeniden öğrenmenin daha kısa sürmesi (tasarruf yöntemi)
//   yerleşik bilgi. Hece örnekleri ('KEB', 'ZUL') uydurma, Ebbinghaus'un listesinden alınmadı;
// - geri çağırma pratiği: Roediger ve Karpicke (2006); kısa sürede yapılan sınavda yeniden okuma en az onun kadar iyi, birkaç
//   gün sonra geri çağırma pratiği daha iyi (sayı yazılmadı);
// - aralıklı tekrar: aynı süre zamana yayılınca tek oturumda yığmaktan daha kalıcı (temkinli, "generally");
// - Loftus ve Palmer (1974): "smashed" diye sorulanlar hızı daha yüksek tahmin etti, bir hafta sonra olmayan kırık camı daha
//   sık "gördü";
// - Henry Molaison (H.M.), 1953: epilepsi ameliyatında hipokampusu da içeren bölgeler alındı; yeni uzun süreli anı oluşturamadı
//   ama yeni el becerileri öğrenebildi (Brenda Milner). Araştırmacıyı birkaç dakika sonra hatırlamaması yerleşik anlatı;
// - çalışma belleği: Miller (1956) "yedi artı eksi iki"; sonraki araştırmalar dört öbek dolayında (temkinli, "may be");
// - karışma (interference): yeni öğrenilen eskiyi, eski öğrenilen yeniyi bozabilir;
// - genel ve temkinli yazılan gözlemler: tanımanın hatırlamadan kolay olması, yaşlıların çocukluklarını çoğu zaman ayrıntıyla
//   anlatabilmesi, kokunun eski anıları canlandırabilmesi ("can sometimes"), uykusuzluğun ertesi gün öğrenmeyi
//   zorlaştırabilmesi ("may"), bilinen bir şeye bağlanan bilginin daha iyi kaydedilmesi ("tends to"), sözlü anlatıcıların
//   ritim ve kalıp sözlere dayandığı ("are thought to"), soldan trafik uygulanan ülkeler.
// Görev 20 (25 Kasım 2026): çeviri çeldiricileri biçim kestirmesine karşı yeniden kuruldu.

const T = 'taslak';
const C = 'genel';
const U = 'Bellek ve unutma';

const cards = [
  // ---------- isim ----------
  { code: 'retrieval', title: '(bilgiyi bellekten) geri çağırma; geri alma', pos: 'isim', cefr: 'C1', ipa: '/rɪˈtriːvl/',
    text: "Bellek araştırmalarında saklanan bir bilgiyi gerektiğinde yeniden bilince getirme süreci. Bilgiyi belleğe alma (encoding) ve saklama (storage) ile birlikte üç temel aşamadan biridir. Gündelik dilde 'geri alma' anlamı da var: data retrieval (veri erişimi). Fiili 'retrieve'.",
    example: 'For many older people the retrieval of names becomes slower, even when the names themselves have not been forgotten.',
    exampleTr: 'Yaşlıların çoğunda adları hatırlamak yavaşlar, oysa adların kendisi unutulmuş değildir.',
    synonyms: ['recall', 'recollection'], family: ['retrieve'] },
  { code: 'interference', title: 'karışma, engelleme; (bir şeyin işine) karışma, müdahale', pos: 'isim', cefr: 'C1', ipa: '/ˌɪntəˈfɪərəns/',
    text: "Bellekte bir bilginin, benzer başka bir bilgi yüzünden hatırlanamaması ya da yanlış hatırlanması. Gündelik dilde istenmeyen müdahaleyi de anlatır: interference in other countries' affairs. Fiili 'interfere (with)'.",
    example: 'For weeks after we moved, interference from our old address meant I kept writing the wrong postcode on forms.',
    exampleTr: 'Taşındıktan sonra haftalarca eski adresimiz karıştığı için formlara hep yanlış posta kodunu yazdım.',
    synonyms: ['disruption', 'obstruction'], family: ['interfere'] },
  { code: 'lapse', title: '(dikkatte, bellekte) anlık boşluk, kısa aksama', pos: 'isim', cefr: 'C1', ipa: '/læps/',
    text: "Genellikle iyi işleyen bir şeyin kısa süre aksaması: a memory lapse (anlık unutkanlık), a lapse of concentration (dikkatin bir anlığına dağılması). 'A lapse of time' ise geçen süre demektir. 'Relapse' (hastalığın nüksetmesi) ayrı bir sözcüktür.",
    example: 'A brief memory lapse made him forget the name of a colleague he had worked with for years.',
    exampleTr: 'Anlık bir unutkanlık yüzünden yıllardır birlikte çalıştığı bir meslektaşının adını hatırlayamadı.',
    synonyms: ['slip', 'failure'], family: ['lapsed'] },
  { code: 'trace', title: 'iz; (bellekte kalan) iz', pos: 'isim', cefr: 'B2', ipa: '/treɪs/',
    text: "Bir şeyin geçtiğini ya da var olduğunu gösteren küçük kalıntı: without a trace (iz bırakmadan). Psikolojide 'memory trace' (bellek izi) bir deneyimin beyinde bıraktığı varsayılan izdir. Fiil olarak 'izini sürmek' anlamına gelir.",
    example: 'Some early psychologists believed that every experience leaves a permanent trace in the brain.',
    exampleTr: 'İlk dönem psikologlarından bazıları, her deneyimin beyinde kalıcı bir iz bıraktığına inanıyordu.',
    synonyms: ['mark', 'remnant'], family: ['traceable'] },
  // ---------- fiil ----------
  { code: 'retain', title: '(bilgiyi) akılda tutmak; elde tutmak, korumak', pos: 'fiil', cefr: 'C1', ipa: '/rɪˈteɪn/',
    text: "Bir şeyi kaybetmeden elde tutmak. Öğrenmeyle ilgili metinlerde 'akılda tutmak' anlamında sık geçer: retain information. Başka kullanımı: retain heat (ısıyı korumak). Adı 'retention' (akılda tutma, elde tutma).",
    example: 'Children often retain the words of a song far better than a list of facts.',
    exampleTr: 'Çocuklar bir şarkının sözlerini çoğu zaman bir bilgi listesinden çok daha iyi akıllarında tutar.',
    synonyms: ['remember', 'keep'], family: ['retention'] },
  { code: 'recall', title: 'hatırlamak, anımsamak', pos: 'fiil', cefr: 'B2', ipa: '/rɪˈkɔːl/',
    text: "Bir şeyi bilerek hatırlamak; 'remember'dan biraz daha resmîdir. Ardından -ing ya da isim gelir: I recall meeting her. Ad olarak 'hatırlama' demektir: total recall (eksiksiz hatırlama). Tanıma (recognition) ile karşılaştırılır.",
    example: "I recall meeting him at a wedding, but I can't remember whose wedding it was.",
    exampleTr: 'Onunla bir düğünde tanıştığımı hatırlıyorum ama kimin düğünüydü, hatırlayamıyorum.',
    synonyms: ['remember', 'recollect'], family: ['recallable'] },
  { code: 'distort', title: 'çarpıtmak, bozmak', pos: 'fiil', cefr: 'C1', ipa: '/dɪˈstɔːt/',
    text: "Bir şeyin biçimini ya da anlamını gerçeğe uymayacak biçimde değiştirmek: distort the facts (olguları çarpıtmak). Bellekle ilgili metinlerde anının zamanla değişip gerçekten uzaklaşmasını anlatır. Adı 'distortion'.",
    example: 'The article distorted what the minister had said by quoting only half of her sentence.',
    exampleTr: 'Yazı, bakanın cümlesinin yalnız yarısını aktararak söylediğini çarpıttı.',
    synonyms: ['twist', 'misrepresent'], family: ['distortion', 'distorted'] },
  { code: 'encode', title: '(bilgiyi belleğe) kodlamak, kaydetmek; şifrelemek', pos: 'fiil', cefr: 'C1', ipa: '/ɪnˈkəʊd/',
    text: "Psikolojide bir bilgiyi belleğe alınacak biçime dönüştürmek, yani öğrenmenin ilk aşaması. Teknik metinlerde bir bilgiyi bir koda çevirmek demektir. Adı 'encoding'. 'Decode' (çözmek) önekle anlamı değişen ayrı bir sözcüktür.",
    example: 'If you are thinking about something else while someone tells you their name, you may never encode it at all.',
    exampleTr: 'Biri size adını söylerken aklınız başka yerdeyse o adı belleğinize hiç kaydetmeyebilirsiniz.',
    synonyms: ['register', 'store'], family: ['encoding'] },
  { code: 'cram', title: '(sınavdan önce) son anda yoğun çalışmak; tıkıştırmak', pos: 'fiil', cefr: 'C1', ipa: '/kræm/',
    text: "Sınav öncesi kısa sürede çok şey ezberlemeye çalışmak: cram for an exam. Asıl anlamı bir yere sığdırmak, tıkıştırmaktır: cram clothes into a bag. Adı 'cramming' (son dakika çalışması).",
    example: 'He crammed for the history exam all night and could remember almost none of it a week later.',
    exampleTr: 'Tarih sınavına bütün gece son dakika çalışması yaptı; bir hafta sonra neredeyse hiçbirini hatırlamıyordu.',
    synonyms: ['swot', 'stuff'], family: ['cramming'] },
  { code: 'prompt', title: 'yol açmak, (bir şeyi) uyandırmak; harekete geçirmek', pos: 'fiil', cefr: 'B2', ipa: '/prɒmpt/',
    text: "Bir tepkiye, duyguya ya da anıya yol açmak: prompt a memory (bir anıyı uyandırmak), prompt someone to do something (birini bir şey yapmaya yöneltmek). Sıfat olarak 'hemen, gecikmeden' demektir: a prompt reply; zarfı 'promptly'.",
    example: 'Finding his old school report in a drawer prompted a flood of memories.',
    exampleTr: 'Çekmecede eski karnesini bulması bir anı seli uyandırdı.',
    synonyms: ['trigger', 'provoke'], family: ['promptly'] },
  // ---------- sıfat ----------
  { code: 'accurate', title: 'doğru, hatasız, kesin', pos: 'sıfat', cefr: 'B1', ipa: '/ˈækjərət/',
    text: "Gerçeğe tam uyan, yanlışı olmayan: an accurate description (doğru bir betimleme). Adı 'accuracy', karşıtı 'inaccurate'. Bir şeyin yerinde olduğunu anlatan 'correct' ile yakın anlamlıdır ama 'accurate' ayrıntıların hatasızlığını vurgular.",
    example: 'The weather forecast was surprisingly accurate: it started to rain at exactly midday.',
    exampleTr: 'Hava tahmini şaşırtıcı biçimde doğru çıktı: yağmur tam öğlen başladı.',
    synonyms: ['correct', 'precise'], family: ['accuracy', 'accurately', 'inaccurate'] },
  { code: 'fallible', title: 'yanılabilir, hata yapabilir', pos: 'sıfat', cefr: 'C1', ipa: '/ˈfæləbl/',
    text: "Hata yapma olasılığı olan; kişiler ve sistemler için kullanılır: Human memory is fallible. Karşıtı 'infallible' (yanılmaz). Adı 'fallibility'.",
    example: 'Even experienced doctors are fallible, which is why a second opinion can be useful.',
    exampleTr: 'Deneyimli doktorlar bile yanılabilir; bu yüzden ikinci bir görüş almak işe yarayabilir.',
    synonyms: ['imperfect', 'error-prone'], family: ['fallibility', 'infallible'] },
  { code: 'selective', title: 'seçici', pos: 'sıfat', cefr: 'C1', ipa: '/sɪˈlektɪv/',
    text: "Her şeyi değil, yalnız bir kısmını alan ya da etkileyen: selective memory (seçici bellek; işine geleni hatırlama). Bir kurum için 'öğrencisini titizlikle seçen' anlamı da vardır: a selective school.",
    example: 'My brother has a selective memory: he never forgets a promise I make, but always forgets his own.',
    exampleTr: 'Kardeşimin belleği seçicidir: benim verdiğim sözü hiç unutmaz ama kendi sözlerini hep unutur.',
    synonyms: ['partial', 'choosy'], family: ['select', 'selection', 'selectively'] },
  { code: 'long-term', title: 'uzun süreli, uzun vadeli', pos: 'sıfat', cefr: 'B2', ipa: '/ˌlɒŋ ˈtɜːm/',
    text: "Uzun bir süreyi kapsayan ya da uzun sürede ortaya çıkan: long-term memory (uzun süreli bellek), long-term effects (uzun vadeli etkiler). İsimden önce tireyle yazılır; zarf olarak 'in the long term' kullanılır. Karşıtı 'short-term'.",
    example: 'Facts we use regularly are more likely to stay in long-term memory than those we meet only once.',
    exampleTr: 'Düzenli kullandığımız bilgilerin uzun süreli bellekte kalma olasılığı, yalnız bir kez karşılaştıklarımızınkinden yüksektir.',
    synonyms: ['lasting', 'enduring'], family: [] },
  // ---------- zarf ----------
  { code: 'vaguely', title: 'belli belirsiz, hayal meyal', pos: 'zarf', cefr: 'C1', ipa: '/ˈveɪɡli/',
    text: "Net olmayan, bulanık bir biçimde: vaguely remember (hayal meyal hatırlamak), vaguely familiar (bir yerden tanıdık gelen). Sıfatı 'vague' (belirsiz), adı 'vagueness'.",
    example: 'The woman at the bus stop looked vaguely familiar, but I could not think where we had met.',
    exampleTr: 'Otobüs durağındaki kadın bir yerden tanıdık geliyordu ama nerede karşılaştığımızı bulamadım.',
    synonyms: ['dimly', 'faintly'], family: ['vague', 'vagueness'] },
  { code: 'repeatedly', title: 'tekrar tekrar, defalarca', pos: 'zarf', cefr: 'B2', ipa: '/rɪˈpiːtɪdli/',
    text: "Bir şeyin birçok kez yapıldığını ya da olduğunu anlatır: He was repeatedly warned (defalarca uyarıldı). Sıfatı 'repeated', fiili 'repeat', adı 'repetition'.",
    example: 'The baby repeatedly dropped her spoon on the floor, just to watch her father pick it up.',
    exampleTr: 'Bebek, yalnız babasının yerden almasını izlemek için kaşığını tekrar tekrar yere attı.',
    synonyms: ['again and again', 'time after time'], family: ['repeat', 'repeated', 'repetition'] },
  // ---------- öbek fiil ----------
  { code: 'brush up on', title: '(unutulmaya yüz tutmuş bir bilgiyi, beceriyi) tazelemek', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌbrʌʃ ˈʌp ɒn/',
    text: "Bir zamanlar bildiğin ama paslanmış bir bilgiyi ya da beceriyi yeniden çalışmak: brush up on your French. 'On' olmadan da kullanılır: brush up your French. Yeni bir şey öğrenmek için kullanılmaz.",
    example: 'Our new manager asked us to brush up on the safety rules before the inspection.',
    exampleTr: 'Yeni müdürümüz denetimden önce güvenlik kurallarını tazelememizi istedi.',
    synonyms: ['revise', 'refresh'], family: ['brush up'] },
  { code: 'look back on', title: '(geçmişe) dönüp bakmak, geriye bakıp hatırlamak', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌlʊk ˈbæk ɒn/',
    text: "Geçmişteki bir dönemi ya da olayı düşünmek, değerlendirmek: look back on your childhood. Çoğu zaman bir duyguyla birlikte gelir: look back on it with pride (gururla anmak).",
    example: 'When I look back on my school years, I mostly remember my friends rather than the lessons.',
    exampleTr: 'Okul yıllarıma dönüp baktığımda daha çok dersleri değil, arkadaşlarımı hatırlıyorum.',
    synonyms: ['remember', 'reflect on'], family: ['look back'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'gb-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['retrieval', 'interference'],
    level: 'orta', cefr: 'C1', konu: ['isim'],
    q: 'Memory researchers often separate getting information into memory from getting it back out again; the second of these processes, which fails us whenever a familiar name will not come to mind, is known as ----.',
    options: ['retrieval', 'interference', 'storage', 'perception', 'attention'], answer: 0,
    explain: "Cümle iki süreci ayırıyor: bilgiyi belleğe almak ve onu yeniden çıkarmak. İkincisi, tanıdık bir adın aklımıza gelmediği anlarda aksayan süreçtir; bunun adı 'retrieval' (geri çağırma). 'Storage' (saklama) bilginin bellekte durmasıdır; adın aklımıza gelmemesi saklamanın değil, çıkarmanın aksamasıdır. 'Interference' (karışma) hatırlamayı bozan bir etkendir, bilgiyi geri getiren süreç değildir. 'Perception' (algı) ve 'attention' (dikkat) bilgiyi bellekten çıkarmayı anlatmaz." },

  { id: 'gb-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['accurate', 'long-term'],
    level: 'kolay', cefr: 'B1', konu: ['sıfat'],
    q: "My grandmother's memory is still very ----; she can tell you the exact date of every wedding in our family.",
    options: ['careless', 'long-term', 'accurate', 'empty', 'heavy'], answer: 2,
    explain: "İkinci bölüm, büyükannenin ailedeki her düğünün tarihini tam olarak söyleyebildiğini anlatıyor; demek ki belleği hâlâ çok 'accurate' (doğru, hatasız). 'Careless' (dikkatsiz) ve 'empty' (boş) bu övgüyle çelişir. 'Long-term' (uzun süreli) bellekle birlikte geçen bir sözcüktür ama 'very' ile bir belleğin niteliğini anlatmaz; 'long-term memory' bir bellek türünün adıdır. 'Heavy' (ağır) bellekle anlam kurmaz." },

  { id: 'gb-k3', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['brush up on', 'look back on'],
    level: 'orta', cefr: 'B2', konu: ['öbek fiil'],
    q: 'Before her trip to Madrid next month, Elif is planning to ---- her Spanish, which she has hardly used since she left school.',
    options: ['look back on', 'put up with', 'come up with', 'brush up on', 'get away with'], answer: 3,
    explain: "Elif okuldan beri İspanyolcasını neredeyse hiç kullanmamış ve gelecek ay Madrid'e gidiyor; bir zamanlar bildiği ama paslanan bir bilgiyi tazelemesi gerekiyor: 'brush up on'. 'Look back on' (geçmişe dönüp bakmak) yolculuk öncesi bir hazırlığı anlatmaz. 'Put up with' (katlanmak), 'come up with' (bulmak, ortaya atmak) ve 'get away with' (cezasız kurtulmak) da bir dili yeniden çalışmayı anlatmaz." },

  // ---------- dil bilgisi ----------
  { id: 'gb-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['zaman: past perfect', 'zaman uyumu'],
    q: 'By the time Murat moved back to Turkey, he ---- much of the German that he ---- as a child in Cologne.',
    options: ['had forgotten / had learnt', 'has forgotten / was learning', 'forgets / has learnt', 'had forgotten / has learnt', 'was forgetting / would learn'], answer: 0,
    explain: "'By the time' geçmişteki bir an veriyor: Murat'ın Türkiye'ye dönüşü. Bu andan önce tamamlanmış bir durum past perfect ister: 'had forgotten'. Almancayı çocukken öğrenmesi unutmasından da önce olduğu için ikinci boşluk da past perfect alır: 'had learnt'. 'Has forgotten' ve 'forgets' geçmişteki bir ana bağlanmaz. 'Has learnt' çocukluktaki bitmiş bir eylemi şimdiye bağlar. 'Was forgetting / would learn' ise öğrenmeyi unutmaktan sonraya koyarak sırayı ters çevirir." },

  { id: 'gb-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['isim-fiil ve mastar'],
    q: "Don't forget ---- the lights off before you go out; I remember ---- them on all night once, and the bill was huge.",
    options: ['turning / to leave', 'to turn / to leave', 'turning / leaving', 'turn / left', 'to turn / leaving'], answer: 4,
    explain: "'Forget to do' yapılması gereken bir işi unutmaktır: ışıkları kapatmayı unutma, 'forget to turn'. 'Remember doing' ise geçmişte yapılmış bir şeyi hatırlamaktır: bir keresinde ışıkları bütün gece açık bıraktığımı hatırlıyorum, 'remember leaving'. 'Forget turning' yapılmış bir şeyi unutmayı anlatır; uyarıya uymaz. 'Remember to leave' ise ışıkları açık bırakmayı yapılacak bir görev gibi anlatır; 'once' ve faturanın yüksek gelmesi bunun geçmişte olmuş bir şey olduğunu gösteriyor. 'Turn / left' ise iki fiilden sonra gereken -ing ya da mastar biçimini kullanmaz." },

  { id: 'gb-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: '---- you try to remember a name that is on the tip of your tongue, ---- it seems to slip away, until it suddenly comes back to you hours later.',
    options: ['Harder / further', 'The hardest / the furthest', 'The harder / further', 'The harder / the further', 'The harder / the less'], answer: 3,
    explain: "'Ne kadar …, o kadar …' anlamı 'the + karşılaştırma sıfatı, the + karşılaştırma sıfatı' kalıbıyla kurulur ve iki bölümde de 'the' gerekir: 'The harder you try…, the further it seems to slip away' (hatırlamaya ne kadar çok uğraşırsan ad o kadar uzaklaşır). 'Harder / further' ve 'The harder / further' 'the'yı düşürür. 'The hardest / the furthest' en üstünlük biçimidir; bu kalıpta kullanılmaz. 'The harder / the less' biçimce doğrudur ama anlamı bozar: ad uzaklaşmıyorsa saatler sonra 'birden geri gelmesi' anlamsız olur." },

  // ---------- boşluklu metin (5 boşluk) ----------
  { id: 'gb-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: ['recall', 'distort', 'prompt', 'trace'],
    level: 'orta', cefr: 'B2', title: 'Ebbinghaus ve unutma eğrisi',
    text: "In 1885 the German psychologist Hermann Ebbinghaus published one of the first experimental studies of memory. He wanted material that could not be linked to anything he already knew, so he invented long lists of meaningless syllables such as 'KEB' and 'ZUL' and, (1) ---- testing a group of volunteers, used himself as the only subject. He studied each list until he could (2) ---- it without a single mistake, and then tested himself again after intervals ranging from minutes to weeks. Often he could hardly remember a list at all. (3) ----, he was able to learn it again more quickly than the first time, which suggested that some trace of it had survived. His results showed that forgetting is fastest soon after learning: much of a new list was lost within the first hours, after which the decline became far more gradual. This pattern, which (4) ---- the 'forgetting curve' ever since, has appeared in many later studies, (5) ---- the exact rate of forgetting varies with the material and the learner.",
    steps: [
      { konu: ['edat'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['in addition to', 'because of', 'according to', 'instead of', 'by means of'], answer: 3,
        explain: "Cümle Ebbinghaus'un bir gönüllü grubunu sınamadığını, onun yerine tek denek olarak kendini kullandığını söylüyor. 'Yerine' anlamını 'instead of' verir. 'In addition to' (… -e ek olarak) gönüllüleri de deneye katar; oysa 'the only subject' tek deneğin kendisi olduğunu söylüyor. 'Because of' gönüllüleri sınamayı kendini denek yapmanın nedeni yapar. 'According to' (… -e göre) ve 'by means of' (… yoluyla) cümleye anlam vermez." },
      { konu: ['kelime', 'fiil'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['ignore', 'distort', 'recall', 'prompt', 'delay'], answer: 2,
        explain: "Ebbinghaus her listeyi tek hata yapmadan söyleyebilene, yani bütünüyle hatırlayabilene kadar çalışıyordu: 'recall' (hatırlamak). 'Without a single mistake' bir hatırlama başarısını ölçüyor. 'Distort' (çarpıtmak) hatasız olmakla çelişir. 'Ignore' (görmezden gelmek) çalışmanın amacına ters düşer. 'Prompt' (yol açmak, uyandırmak) ve 'delay' (ertelemek) 'listeyi hatasız …' diye anlam kurmaz." },
      { konu: ['bağlantı zarfı'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['Therefore', 'For example', 'Similarly', 'Even so', 'In other words'], answer: 3,
        explain: "Önceki cümle Ebbinghaus'un çoğu zaman bir listeyi neredeyse hiç hatırlayamadığını söylüyor. Boşluklu cümle buna beklenmedik bir durum ekliyor: yine de listeyi ilkinden daha hızlı yeniden öğrenebiliyordu. Beklentiye ters düşen bu ekleme 'Even so' (yine de) ile kurulur. 'Therefore' (bu yüzden) hatırlayamamayı hızlı öğrenmenin nedeni yapar. 'For example', 'Similarly' ve 'In other words' iki cümle arasındaki karşıtlığı kurmaz." },
      { konu: ['edilgen'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['has called', 'is called', 'has been called', 'was calling', 'had been called'], answer: 2,
        explain: "Örüntü adı koyan değil, ad verilen şeydir; bu yüzden edilgen gerekir. 'Ever since' (o zamandan beri) geçmişte başlayıp bugüne uzanan bir süre bildirir ve present perfect ister: 'has been called' (o zamandan beri … diye anılıyor). 'Has called' ve 'was calling' etkendir; örüntüyü ad koyan yapar. 'Is called' 'ever since' ile kurulmaz. 'Had been called' ise geçmişteki başka bir andan öncesini anlatır; bugüne uzanmaz." },
      { konu: ['bağlaç'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['although', 'because', 'so that', 'unless', 'as if'], answer: 0,
        explain: "Cümle, unutma eğrisinin sonraki birçok çalışmada da görüldüğünü söylüyor ve buna bir kısıtlama ekliyor: unutmanın tam hızı malzemeye ve öğrenene göre değişiyor. Genel bulguyu kabul edip ayrıntıdaki farkı belirten bu ilişki 'although' (-se de) ile kurulur. 'Because' hızın değişmesini örüntünün görülme nedeni yapar. 'So that' amaç, 'unless' koşul bildirir. 'As if' (sanki) cümleye anlam vermez." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'gb-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['recall'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Many older people find it hard to remember what they did the day before, ----.',
    options: [
      'because their memory for recent events tends to improve with age',
      'so they rarely need to keep a diary or write anything down',
      'as long as they have had enough sleep the night before',
      'yet they can often describe their childhood in great detail',
      'since recent events are usually the easiest ones to recall',
    ], answer: 3,
    explain: "Ana cümle yaşlıların çoğunun bir önceki gün ne yaptığını hatırlamakta zorlandığını söylüyor. Buna karşıtlık kuran tamamlama 'yet' ile gelir: buna karşın çocukluklarını çoğu zaman büyük bir ayrıntıyla anlatabilirler. Yakın zamandaki olaylara ilişkin belleğin yaşla güçlendiği ya da yakın olayların en kolay hatırlananlar olduğu, ana cümledeki zorlanmayla çelişiyor. Bu yüzden günlük tutmaya gerek kalmadığı sonucu da tersine bir çıkarım. 'As long as' ile kurulan koşul ise zorlanmayı yeterli uykuya bağlayarak anlamsız bir cümle kuruyor." },

  { id: 'gb-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['neden-sonuç'],
    q: '----, I always write my shopping list on my phone before I leave home.',
    options: [
      'Although I usually forget half the things I need',
      'Now that I have a much better memory than before',
      'Because I often leave my phone at home when I go out',
      'So that I can buy more things than I really need',
      'Because I often forget what I need at the shops',
    ], answer: 4,
    explain: "Ana cümle bir alışkanlık anlatıyor: evden çıkmadan önce alışveriş listemi hep telefonuma yazarım. Bunun nedeni, markette neye ihtiyacım olduğunu sık sık unutmamdır. Unutmayı 'although' ile vermek karşıtlık kurar; oysa unutmak liste yazmanın nedenidir. Belleğin eskisinden çok iyi olması liste yazmayı gereksiz kılar. Telefonu sık sık evde unutmak, listeyi telefona yazmayı anlamsızlaştırır. İhtiyaçtan fazlasını almak için liste yazmak da mantığa ters düşüyor." },

  { id: 'gb-t3', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['lapse'],
    level: 'orta', cefr: 'B2', konu: ['koşul'],
    q: 'If you want to avoid the kind of memory lapse that makes you forget to take your medicine, ----.',
    options: [
      'you are likely to take a double dose without noticing',
      'your doctor would have given you a different medicine',
      'it may be because you have been taking it for too long',
      'you should stop taking it until your memory improves',
      'tie it to a daily habit such as brushing your teeth',
    ], answer: 4,
    explain: "Koşul bölümü bir amaç belirtiyor: ilacı almayı unutturan türden anlık bir unutkanlıktan kaçınmak istiyorsan. Ana cümle bunun için bir yol önermeli: ilacı diş fırçalamak gibi her gün yaptığın bir alışkanlığa bağlamayı dene. Farkında olmadan çift doz almak bir öneri değil, sonucu da koşulla bağdaşmıyor. 'Would have given' geçmişte olmamış bir durumu anlatır; 'If you want' ile kurulan gerçek koşula uymaz. Uzun süredir ilacı kullanmak unutmanın nedeni olarak bağlanmıyor. Bellek düzelene kadar ilacı bırakmak ise sorunu çözmek yerine ilacı tümden atlatır." },

  { id: 'gb-t4', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['karşıtlık'],
    q: '----, a smell can sometimes bring back a long-forgotten moment far more vividly than a photograph can.',
    options: [
      'Since a photograph records every detail of a scene exactly',
      'Even though smells are among the strongest cues to old memories',
      'While we rarely make any effort to remember particular smells',
      'Just as old photographs tend to fade and lose their colour',
      'As long as we keep our old photographs somewhere safe',
    ], answer: 2,
    explain: "Ana cümle bir kokunun bazen unutulmuş bir anı bir fotoğraftan çok daha canlı geri getirebildiğini söylüyor. Karşıtlık 'While' ile kurulur: belli kokuları hatırlamak için neredeyse hiç çaba harcamasak da koku bu gücü taşır. 'Even though' da karşıtlık bağlacıdır ama ardından gelen bilgi (kokuların eski anıların en güçlü ipuçlarından olması) ana cümleyle aynı yönde; karşıtlık değil, neden olurdu. Fotoğrafın her ayrıntıyı kaydetmesi kokunun daha canlı bir anı uyandırmasını açıklamaz, tersine onunla çelişir. Fotoğrafların solması 'just as' ile benzerlik kurar; kokuyla bir benzerlik yok. Fotoğrafları güvenli bir yerde saklamak da kokunun gücü için bir koşul değildir." },

  // ---------- çeviri ----------
  { id: 'gb-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['encode'],
    level: 'orta', cefr: 'B2', konu: ['edilgen'],
    q: 'New information tends to be encoded more effectively when it is linked to something that the learner already knows.',
    options: [
      'Yeni bilgi, öğrenenin zaten bildiği bir şeye bağlandığında genellikle belleğe daha hızlı kaydedilir.',
      'Yeni bilgi, öğrenenin zaten bildiği bir şeye bağlandığında genellikle belleğe daha etkili biçimde kaydedilir.',
      'Öğrenenin zaten bildiği şeyler, yeni bir bilgiye bağlandığında genellikle belleğe daha etkili biçimde kaydedilir.',
      'Yeni bilgi, öğrenenin zaten bildiği bir şeye bağlandığında bazen belleğe daha hızlı kaydedilir.',
      'Yeni bilgi, öğrenenin yeni öğrendiği bir şeye bağlandığında genellikle belleğe daha hızlı kaydedilir.',
    ], answer: 1,
    explain: "İngilizce cümlede özne 'new information'; 'tends to be encoded' (genellikle belleğe kaydedilir) ve 'is linked' (bağlandığında) edilgendir, 'more effectively' de 'daha etkili biçimde' demektir. Doğru çeviri bunların hepsini korur. 'Daha hızlı kaydedilir' bir hız bildirir, etkililik değil; 'zaten bildiği bir şeye bağlandığında genellikle belleğe daha hızlı kaydedilir' diyen çeviri bu yüzden yanlış. 'Bazen' diyen çeviride 'tends to'nun genellik anlamı kaybolmuş, karşılaştırma da hıza dönmüş. 'Yeni öğrendiği bir şeye' bağlayan çeviri 'already knows'u (zaten bildiği) değiştiriyor ve etkililik yerine hızdan söz ediyor. 'Öğrenenin zaten bildiği şeyler' ile başlayan çeviri özneyi değiştiriyor: kaydedilen şey yeni bilgi değil, önceden bilinenler olmuş." },

  { id: 'gb-c2', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['recall'],
    level: 'zor', cefr: 'C1', konu: ['karşılaştırma'],
    q: 'Most people find it considerably easier to recognise a familiar face than to recall the name that goes with it.',
    options: [
      'Çoğu insan, tanıdık bir yüze ait adı hatırlamayı o yüzü tanımaktan biraz daha kolay bulur.',
      'Pek az insan, tanıdık bir yüzü tanımayı o yüze ait adı hatırlamaktan biraz daha kolay bulur.',
      'Çoğu insan, tanıdık bir yüzü tanımayı o yüze ait adı hatırlamaktan biraz daha kolay bulur.',
      'Çoğu insan, tanıdık bir yüzü tanımayı o yüze ait adı hatırlamaktan çok daha kolay bulur.',
      'Çoğu insan, tanıdık bir yüzü tanımayı o yüzü çizmekten çok daha kolay bulur.',
    ], answer: 3,
    explain: "Cümle tanıdık bir yüzü tanımakla (recognise) o yüze ait adı hatırlamayı (recall) karşılaştırıyor. 'Most people' (çoğu insan) ve 'considerably easier' (çok daha kolay) de korunmalı; doğru çeviri bunları yerinde tutar. 'Considerably' farkın büyük olduğunu söyler, bu yüzden 'adı hatırlamaktan biraz daha kolay bulur' diyen çeviri farkı küçültüyor. 'Pek az insan' diye başlayan çeviri 'most people'ı tersine çeviriyor ve farkı da küçültüyor. Adı hatırlamayı yüzü tanımaktan kolay gösteren çeviri karşılaştırmanın yönünü değiştiriyor, üstelik 'biraz daha' diyor. 'O yüzü çizmekten' diyen çeviri karşılaştırılan ikinci işi değiştiriyor: İngilizcede söz konusu olan ad hatırlamak." },

  { id: 'gb-c3', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'Bir listeyi ezberlemek isteyenlere önerilen yöntemlerden biri, her maddeyi zihinlerinde iyi bildikleri bir evin odalarına yerleştirmektir.',
    options: [
      'One of the methods recommended to people who want to memorise a list is to place each item mentally in the rooms of a house they know well.',
      'The method most often recommended to people who want to memorise a list is to place each item mentally in the rooms of a house they know well.',
      'One of the methods recommended to people who want to memorise a list is to place each item mentally in the rooms of a house they own.',
      'One of the methods recommended by people who have memorised long lists is to place each item mentally in the rooms of a house they know well.',
      'The method most often recommended to people who want to memorise a list is to place each item mentally in the rooms of a house they own.',
    ], answer: 0,
    explain: "Türkçe cümlede sıfat cümlecikleri var: 'ezberlemek isteyenler' (people who want to memorise a list) ve 'iyi bildikleri bir ev' (a house they know well). 'Önerilen yöntemlerden biri' 'one of the methods recommended to' ile, 'zihinlerinde yerleştirmek' de 'place … mentally' ile karşılanır; doğru seçenek bunların hepsini korur. 'The method most often recommended … a house they know well' (en sık önerilen yöntem) birçok yöntemden biri olmayı en sık önerilen yöntem olmaya çeviriyor. 'One of the methods … a house they own' (sahip oldukları ev) iyi bilinen evi sahip olunan eve çeviriyor. 'The method most often recommended … a house they own' yöntemi en sık önerilen yönteme, evi de sahip olunan eve çeviriyor. 'Recommended by people who have memorised long lists' öneriyi yapanları değiştiriyor: Türkçede yöntem ezberlemek isteyenlere öneriliyor." },

  { id: 'gb-c4', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['retain'],
    level: 'orta', cefr: 'B2', konu: ['koşul'],
    q: 'Gece yeterince uyumazsanız, ertesi gün yeni bilgileri akılda tutmakta zorlanabilirsiniz.',
    options: [
      'If you have not slept well at night, you will struggle to retain new information the next day.',
      'Even if you have slept enough at night, you may still struggle to retain new information the next day.',
      'If you have not slept enough at night, you may struggle to retain new information the next day.',
      'If you have not slept enough at night, you will struggle to retain new information for several days.',
      'If you have not slept enough at night, you will struggle to retain new information the next day.',
    ], answer: 2,
    explain: "Türkçe cümle genel bir koşul kuruyor: gece yeterince uyumazsanız ertesi gün yeni bilgileri akılda tutmakta zorlanabilirsiniz. '-abilirsiniz' bir olasılıktır ve 'may' ile karşılanır; doğru seçenek koşulu, olasılığı ve 'ertesi gün' bilgisini korur. 'You will struggle … the next day' olasılığı kesinliğe çeviriyor. 'Not slept well' (iyi uyumamak) uykunun miktarını değil niteliğini anlatır; bu çeviri 'will' ile de kesinlik bildiriyor. 'For several days' diyen çeviri zorlanmayı ertesi günden birkaç güne yayıyor ve kipi kesinleştiriyor. 'Even if you have slept enough' koşulu karşıtlığa çeviriyor: iyi uyusanız bile zorlanabilirsiniz anlamı çıkıyor." },

  // ---------- okuma parçası 1 (4 soru, YDS biçimi) ----------
  { id: 'gb-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['repeatedly', 'cram'],
    level: 'orta', cefr: 'B2', title: 'Sınava nasıl çalışmalı?',
    text: "When students prepare for an exam, most of them read their notes again and again, often highlighting the lines that seem most important. The method feels effective: each time the material is read, it becomes more familiar, and familiarity is easily mistaken for learning. Research on memory, however, points to two habits that tend to work better. The first is practising recall. Instead of simply rereading a text, learners close the book and try to write down or say what they remember. In a well-known study published in 2006, Henry Roediger and Jeffrey Karpicke asked students to learn short prose passages either by reading them repeatedly or by reading them and then trying to recall them. On a test given a few minutes later, rereading did at least as well as recall practice. After a delay of several days, however, the students who had practised recalling remembered more. The second habit is spacing. Studying the same material in several shorter sessions spread over days or weeks generally produces more durable learning than cramming it into a single long session, even when the total time is the same. Both habits share a surprising feature: they make study feel harder, because the learner keeps running into things they cannot quite remember. Yet this very struggle seems to be part of what makes the memory last. A learner who judges a method by how easy and comfortable it feels may therefore be using the wrong standard.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, in the study by Roediger and Karpicke, rereading ----.',
        options: [
          'seemed no less effective than recall practice when the test came soon after study',
          'led to better results than recall practice when students were tested days later',
          'was the method chosen by students who had highlighted lines in their notes',
          'helped the students to remember the passages for several weeks afterwards',
          'made the passages feel harder to learn than recall practice did',
        ], answer: 0,
        explain: "Parçaya göre birkaç dakika sonra yapılan sınavda yeniden okuma, hatırlama pratiğinden kötü sonuç vermedi; en az onun kadar iyiydi. Doğru seçenek bunu 'no less effective' diye anlatıyor. Birkaç gün sonra yeniden okumanın daha iyi sonuç verdiği parçayla çelişiyor; o noktada hatırlamaya çalışanlar daha çok şey hatırladı. Satırların altını çizenlerin yeniden okumayı seçtiği bir deney ayrıntısı parçada yok. Parçaların haftalarca hatırlandığı da söylenmiyor. Yeniden okumanın öğrenmeyi zorlaştırdığı ise tersine çevrilmiş bir bilgi: parçaya göre çalışmayı zor hissettiren, hatırlama pratiği ve aralıklı çalışmadır." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that a student who finds a way of studying easy and comfortable ----.',
        options: [
          'has probably found the most effective way to prepare for an exam',
          'may not be learning as much as he or she believes',
          'should spend fewer hours studying before the next exam',
          'is more likely to be practising recall than rereading',
          'will forget the material within a few minutes of studying',
        ], answer: 1,
        explain: "Parçaya göre tanıdıklık kolayca öğrenme sanılır, işe yarayan yöntemler çalışmayı zor hissettirir ve bir yöntemi ne kadar kolay geldiğine göre değerlendiren kişi yanlış ölçüt kullanıyor olabilir. Buradan, çalışmayı kolay ve rahat bulan bir öğrencinin sandığı kadar çok şey öğrenmiyor olabileceği çıkar. En etkili yolu bulmuş olduğu düşüncesi parçanın uyarısını tersine çeviriyor. Daha az saat çalışması gerektiği parçada geçmiyor. Hatırlama pratiği kolay değil, zor gelen yöntemdir; bu yüzden o çıkarım da ters. Birkaç dakika içinde unutacağı ise parçanın söylemediği bir abartı." },
      { konu: ['sözcük anlamı'],
        q: "The word 'durable' in the passage is closest in meaning to ----.",
        options: ['flexible', 'enjoyable', 'rapid', 'lasting', 'detailed'], answer: 3,
        explain: "'Durable' uzun süre dayanan, kalıcı demektir. Parçada aralıklı çalışmanın, tek uzun oturumda yığmaktan daha kalıcı bir öğrenme sağladığı anlatılıyor; anlamca en yakın sözcük 'lasting' (kalıcı). 'Flexible' (esnek), 'enjoyable' (keyifli), 'rapid' (hızlı) ve 'detailed' (ayrıntılı) öğrenmenin ne kadar sürdüğünü anlatmaz; üstelik parça aralıklı çalışmanın daha zor hissettirdiğini söylüyor, keyifli olduğunu değil." },
      { konu: ['ana fikir'],
        q: 'The main idea of the passage is that ----.',
        options: [
          'rereading and highlighting are useless habits that every student should give up altogether',
          'Roediger and Karpicke were the first researchers to compare different ways of studying',
          'students who study for many hours tend to remember more than those who study briefly',
          'methods that make studying feel harder, such as self-testing, often pay off over time',
          'material that feels familiar is always easier to remember than material that is new',
        ], answer: 3,
        explain: "Parça, tanıdık geldiği için etkili sanılan yeniden okumaya karşı iki alışkanlığı tanıtıyor: kendini sınamak (hatırlama pratiği) ve çalışmayı zamana yaymak. İkisi de çalışmayı zorlaştırır ama öğrenmeyi daha kalıcı kılar. Ana fikir budur. Yeniden okumanın tümden işe yaramaz olduğu söylenmiyor; kısa sürede yapılan sınavda en az hatırlama pratiği kadar iyi sonuç verdi. Roediger ile Karpicke'nin bu alandaki ilk araştırmacılar olduğu parçada yok. Çalışma süresinin uzunluğu ana fikir değil; parça toplam sürenin aynı olduğu durumu karşılaştırıyor. Tanıdık malzemenin her zaman daha kolay hatırlandığı da parçanın uyarısını tersine çeviren bir genelleme." },
    ] },

  // ---------- okuma parçası 2 (4 soru, YDS biçimi) ----------
  { id: 'gb-o2', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['distort', 'fallible', 'accurate'],
    level: 'zor', cefr: 'C1', title: 'Anılar nasıl yeniden kurulur?',
    text: "It is tempting to think of memory as a kind of video camera that records events and stores them unchanged until we need them. Decades of research suggest that this picture is misleading. When we remember something, we do not simply replay a recording; instead, we rebuild the event from scattered pieces, filling the gaps with what we expect or have been told. One of the clearest demonstrations came in 1974, when the psychologists Elizabeth Loftus and John Palmer showed students short films of traffic accidents. Afterwards, some were asked how fast the cars were going when they 'hit' each other, while others heard the same question with the verb 'smashed'. That single word made a difference: those who heard 'smashed' gave higher estimates of speed. A week later, the students were asked whether they had seen any broken glass. There had been none in the film, yet those in the 'smashed' group were more likely to say that they had. The wording of a question, it seems, had not only coloured their judgement at the time but had also quietly become part of what they remembered. Such findings do not mean that memory is useless; most of the time it serves us well enough. They do show, however, that it is fallible in ways we rarely notice, since a distorted memory can feel every bit as vivid and certain as an accurate one. This matters wherever people's recollections are treated as evidence, from police interviews to courtrooms.",
    steps: [
      { konu: ['ayrıntı'],
        q: "According to the passage, the students who were asked the question with the word 'smashed' ----.",
        options: [
          'later said that the film had shown more cars than it actually had',
          'judged the cars to have been moving faster than the other students did',
          'were less likely than the others to report seeing broken glass',
          'had been shown a different film from the one the others watched',
          'remembered the accident less vividly a week after the experiment',
        ], answer: 1,
        explain: "Parçaya göre 'smashed' sözcüğünü duyan öğrenciler hızı daha yüksek tahmin etti; doğru seçenek bunu 'arabaların öteki öğrencilerin sandığından daha hızlı gittiğine karar verdiler' diye anlatıyor. Kırık cam bildirme olasılıkları daha düşük değil, daha yüksekti; o seçenek bilgiyi ters çeviriyor. Filmde olduğundan çok araba gördüklerini söyledikleri, başka bir film izledikleri ve kazayı bir hafta sonra daha az canlı hatırladıkları parçada geçmiyor; parçada gruplar arasındaki tek farkın sorudaki sözcük olduğu anlaşılıyor." },
      { konu: ['gönderim'],
        q: "In the passage, the phrase 'Such findings' refers to ----.",
        options: [
          'the actual speeds of the cars in the films that the students watched',
          'evidence that a question\'s wording can alter later memories',
          'the reasons why many people compare human memory to a video camera',
          'the opinions of police officers about the value of what witnesses say',
          'reports that memory usually serves people well enough in daily life',
        ], answer: 1,
        explain: "'Such findings' (bu tür bulgular) hemen önceki bölümü özetliyor: sorunun nasıl sorulduğu yalnız o anki yargıyı değil, sonradan hatırlananı da değiştirdi. Doğru seçenek bunu anlatıyor. Arabaların gerçek hızı parçada verilmiyor. Belleğin video kamerayla karşılaştırılması parçanın başında geçiyor ama bir bulgu değil. Polislerin tanık ifadeleri hakkındaki görüşleri parçada yok. Belleğin çoğu zaman yeterince iş gördüğü bilgisi 'Such findings'ten sonra geliyor; gönderilen şey değil, yazarın bulgulara getirdiği kısıtlamadır." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that a witness who feels completely sure about a detail ----.',
        options: [
          'is almost certainly remembering that detail exactly as it happened',
          'was probably asked a question that contained the word smashed',
          'should not be questioned by the police more than once',
          'has most likely invented the detail on purpose to mislead others',
          'may nevertheless be remembering something that never took place',
        ], answer: 4,
        explain: "Parçaya göre çarpıtılmış bir anı da doğru bir anı kadar canlı ve kesin hissettirebilir. Buradan, bir ayrıntıdan çok emin olan bir tanığın yine de hiç olmamış bir şeyi hatırlıyor olabileceği çıkar. Emin olmanın ayrıntının doğruluğunu neredeyse kesinleştirdiği düşüncesi parçayla çelişiyor. Tanığa 'smashed' sözcüğünün sorulmuş olması tek bir deneye ait ayrıntıyı genelliyor. Tanığın birden çok kez sorgulanmaması gerektiği parçada geçmiyor. Ayrıntıyı bilerek uydurduğu ise parçanın anlattığı farkında olmadan yeniden kurmayla çelişiyor." },
      { konu: ['yazarın amacı'],
        q: "The author's main purpose in writing the passage is to ----.",
        options: [
          'explain why video cameras are now used in most police interviews',
          'argue that people\'s memories should never be accepted as evidence',
          'show that memories are rebuilt rather than replayed and can change',
          'compare the methods that different psychologists use to study memory',
          'warn drivers that people often misjudge the speed of other cars',
        ], answer: 2,
        explain: "Yazar, belleğin olayları değişmeden saklayan bir kamera olmadığını, hatırlarken olayı parçalardan yeniden kurduğumuzu ve bu yüzden anıların değişebildiğini göstermek istiyor; Loftus ve Palmer deneyi bu amaca örnek olarak veriliyor. Video kamera yalnız bir benzetme olarak geçiyor; polis sorgularında kullanılması parçada yok. Yazar anıların hiçbir zaman kanıt sayılmaması gerektiğini savunmuyor; belleğin çoğu zaman yeterince iş gördüğünü kabul ediyor ve yalnız bunun önemli olduğunu söylüyor. Farklı psikologların yöntemleri karşılaştırılmıyor. Sürücülere bir uyarı da yok; hız tahmini yalnız deneyin bir parçası." },
    ] },

  // ---------- diyalog tamamlama ----------
  { id: 'gb-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['cram'],
    level: 'kolay', cefr: 'B1', konu: ['bağlam'],
    q: "Kaan: The biology exam is tomorrow morning, and I haven't even opened the book yet.\nDuru: Then you'll have to cram tonight. I started revising two weeks ago.\nKaan: ----\nDuru: Not really. I only did about half an hour a day, usually after dinner.",
    options: [
      'Really? Which chapters do you think will be on the exam?',
      'Can I borrow your notes when you have finished with them?',
      'Lucky you. What did you find hardest in the book?',
      'Two weeks? That must have taken up all your free time.',
      'I know. I really should have started a lot earlier.',
    ], answer: 3,
    explain: "Duru'nun son sözü ('Pek sayılmaz. Günde yalnız yarım saat kadar çalıştım, genellikle akşam yemeğinden sonra.') Kaan'ın, iki hafta çalışmanın Duru'nun çok vaktini aldığını düşündüğünü gösteriyor. Bunu 'İki hafta mı? Bütün boş vaktini almıştır.' diyen cevap karşılar. Kitapta en zor neyi bulduğunu soran cevap bir 'what' sorusudur; 'Not really' ile cevaplanmaz, yarım saatlik çalışma bilgisi de bu soruya bağlanmaz. Hangi bölümlerin sınavda çıkacağı ve notları ödünç alma isteği çalışma süresiyle ilgili değil. Kaan'ın daha erken başlaması gerektiğini söylemesi de Duru'nun 'Not really' cevabıyla uyuşmuyor." },

  { id: 'gb-d2', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['vaguely', 'look back on'],
    level: 'orta', cefr: 'B2', konu: ['soru-cevap uyumu'],
    q: "Emre: Grandad, is this little boy on the horse you?\nGrandad: It is. That was taken at my uncle's farm. I must have been about five.\nEmre: ----\nGrandad: Only vaguely, to be honest. I remember the smell of the stables, but not much else.\nEmre: It's funny how one old photo can make you look back on a whole summer.",
    options: [
      'Who took the photo? Was it your uncle or your father?',
      'Do you remember anything about the time you spent there?',
      'Did you enjoy riding horses when you were that young?',
      'How long did you stay at the farm that summer?',
      'Have you ever been back to the farm since then?',
    ], answer: 1,
    explain: "Dede 'Only vaguely' (yalnız hayal meyal) diyor ve ahırların kokusundan başka pek bir şey hatırlamadığını ekliyor. Bu cevap bir hatırlama sorusunu karşılar: 'Orada geçirdiğin zamandan bir şey hatırlıyor musun?'. Atlara binmekten hoşlanıp hoşlanmadığı sorusu da çocukluğa bakıyor ama 'hayal meyal' bir hoşlanmayı anlatmaz. Fotoğrafı kimin çektiği, çiftlikte ne kadar kaldığı ve oraya yeniden gidip gitmediği soruları da 'Only vaguely' ile cevaplanmaz." },

  // ---------- anlamca en yakın cümle ----------
  { id: 'gb-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: ['selective', 'long-term'],
    level: 'zor', cefr: 'C1', konu: ['olumsuzluk', 'kapsam'],
    q: 'Memory is selective: by no means everything that we notice in the course of a day is stored in long-term memory.',
    options: [
      'Memory is so selective that almost none of the things we notice in a day are ever stored in long-term memory.',
      'Although memory is selective, everything we notice in the course of a day eventually reaches long-term memory.',
      'Memory is selective in that we can decide for ourselves which of the things we notice will be stored for good.',
      'If memory were not selective, hardly any of the things we notice in a day would be kept in long-term memory.',
      'Since memory is selective, only some of the things we notice during a normal day end up in long-term memory.',
    ], answer: 4,
    explain: "'By no means everything' 'hiç de her şey değil' demektir: gün içinde fark ettiğimiz şeylerin ancak bir kısmı uzun süreli belleğe kaydedilir. Doğru seçenek bunu 'only some' (yalnız bir kısmı) diye verir ve iki noktalı virgülün kurduğu açıklama ilişkisini 'since' ile korur. Neredeyse hiçbirinin kaydedilmediğini söyleyen seçenek kapsamı fazla daraltıyor. Her şeyin sonunda uzun süreli belleğe ulaştığını söyleyen seçenek olumsuzluğu tümden kaldırıyor. Neyin kaydedileceğine bizim karar verdiğimiz verilen cümlede yok. Bellek seçici olmasaydı hemen hiçbir şeyin kaydedilmeyeceğini söyleyen seçenek de ilişkiyi tersine çeviriyor." },

  // ---------- paragraf tamamlama ----------
  { id: 'gb-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['interference'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'Forgetting is not always caused by memories simply fading with time. Often, the problem is interference: other things we have learnt get in the way. New information can make older information harder to reach, as anyone who has changed their phone number and then struggled to remember the old one knows. ----. A person who has driven on the right for years, for example, may keep reaching for the wrong side of the car when they first drive in a country where traffic keeps to the left.',
    options: [
      'Most people change their phone number only a few times in the course of their lives',
      'This is why new information is usually far easier to remember than old information',
      'Fading, on the other hand, is thought to affect only memories from early childhood',
      'Driving on the left is still the rule in a number of countries around the world',
      'The opposite can also happen, with old learning disrupting what we learn now',
    ], answer: 4,
    explain: "Boşluktan önce yeni bilginin eskisini bozduğu anlatılıyor (yeni telefon numarası eskisini unutturuyor). Boşluktan sonraki örnek ise ters yönde: yıllarca sağdan araç süren biri soldan trafiğe geçince eski alışkanlığı yüzünden yanlış tarafa uzanıyor. İki örneği bağlayan cümle, tersinin de olabileceğini, yani eski öğrenilenin yeni öğrenileni bozabileceğini söyleyendir. Telefon numarasının ömürde kaç kez değiştiği konuyu dağıtıyor. Yeni bilginin her zaman daha kolay hatırlandığı ne önceki cümleden çıkar ne de sonraki örneği hazırlar. Zamanla solmanın yalnız çocukluk anılarını etkilediği metinde dayanağı olmayan bir sav. Soldan trafiğin hâlâ birçok ülkede geçerli olması sonraki cümleyle sözcük düzeyinde bağlanıyor ama karışmayla ilgili örneği tanıtmıyor; 'for example' bir örnek bekleyen genel bir ilke ister." },

  { id: 'gb-p2', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['retain'],
    level: 'orta', cefr: 'B2', konu: ['gönderim'],
    q: 'Long before writing was common, storytellers had to carry long poems and tales entirely in their heads. ----. Such devices are still useful today: many children learn the alphabet through a song, and plenty of adults remember how many days each month has thanks to a short rhyme.',
    options: [
      'Many of these poems were later written down, and some are still studied in schools',
      'Some of them could perform for hours without telling the same story twice',
      'Their skill was often passed down from parent to child over many generations',
      'To retain so much, they relied on rhythm, repetition and phrases that kept returning',
      'Their audiences often knew the stories almost as well as the storytellers did',
    ], answer: 3,
    explain: "Boşluktan sonraki cümle 'Such devices' (bu tür araçlar) diye başlıyor ve bugünkü örnekler veriyor: alfabeyi şarkıyla, ayların kaç gün çektiğini kısa bir tekerlemeyle öğrenmek. Demek ki boşluktaki cümle bellek araçlarını tanıtmalı. Anlatıcıların bu kadar çok şeyi akılda tutmak için ritme, tekrara ve yeniden yeniden gelen kalıp sözlere dayandığını söyleyen cümle bunu yapar. Anlatıcılık becerisinin kuşaktan kuşağa aktarılması, şiirlerin sonradan yazıya geçirilmesi, anlatıcıların saatlerce anlatabilmesi ve dinleyicilerin hikâyeleri iyi bilmesi konuyla ilgili ama hiçbiri 'such devices' sözünün gösterebileceği bir bellek aracından söz etmiyor." },

  // ---------- akışı bozan cümle ----------
  { id: 'gb-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['long-term'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      "In 1953 a young man named Henry Molaison, known for decades in research papers only as 'H.M.', had brain surgery to treat his severe epilepsy.",
      'Epilepsy is a fairly common condition, and today many patients are able to control their seizures with medication.',
      'The operation removed parts of his brain that included much of the hippocampus, and afterwards he could no longer form new long-term memories.',
      'He could chat happily with a researcher, yet if she left the room for a few minutes, he would usually not remember having met her.',
      'Strangely, the psychologist Brenda Milner found that he could still learn new hand skills, improving at a drawing task that he insisted he had never tried before.',
    ], answer: 1,
    explain: "Parça H.M. adıyla bilinen Henry Molaison'ın öyküsünü anlatıyor: 1953'te epilepsi için ameliyat edilir (I), hipokampusun büyük bölümünü de içeren alanlar alınır ve yeni uzun süreli anı oluşturamaz (III), bir araştırmacıyla konuşur ama araştırmacı birkaç dakikalığına odadan çıkınca onunla tanıştığını genellikle hatırlamaz (IV), yine de Brenda Milner onun yeni el becerileri öğrenebildiğini bulur (V). II. cümle de epilepsiden söz ediyor ama konuyu hastalığın bugün ilaçla denetlenmesine kaydırıyor; ameliyattan (I) sonuçlarına (III) uzanan akışı kesiyor." },

  { id: 'gb-b2', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Working memory is the small mental space in which we hold information for a short time while we use it, such as a number we are about to dial.',
      'In 1956 the psychologist George Miller suggested that we can keep about seven items in mind at once, plus or minus two.',
      'Later research, however, suggests that the real limit may be nearer four chunks of information.',
      'Many people say they remember fewer phone numbers now that their phones store all their contacts for them.',
      'This is why a long number is easier to remember when it is broken into groups, so that a string of digits becomes a few larger chunks.',
    ], answer: 3,
    explain: "Parça çalışma belleğinin sınırını anlatıyor: tanım (I), Miller'ın 'yedi artı eksi iki' önerisi (II), sonraki araştırmaların dört öbek dolayında bir sınır önermesi (III) ve bu yüzden uzun numaraların gruplara bölününce daha kolay hatırlanması (V). V. cümledeki 'This is why' III'teki öbek sınırına gönderme yapıyor. IV. cümle de telefon numaralarından söz ediyor ama konuyu telefonların rehberi saklamasına kaydırıyor ve III ile V arasındaki bağı koparıyor." },
];

export default { id: 'genel-bellek', course: C, title: U, order: 7, cards, items };
