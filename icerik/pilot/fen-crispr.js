// iDil › Fen bilimleri › Gen düzenleme.
// Tümü özgün: Claude yazdı (17 Kasım 2026, çoğaltma 3. tur, dalga A). ÖSYM sorusu, yayınevi, ders kitabı ya da gazete metni
// kopyalanmadı, uyarlanmadı. Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir.
// Biçim: ../README.md. Plan: ../analiz/cogaltma-3-plani.md §7.4.
// Olgular (plan §7.4 ve yerleşik bilgi; yalnız olgular, metin özgün):
// - CRISPR: bakteri ve arke DNA'sındaki yinelenen diziler; aralarındaki parçalar virüs DNA'sıyla eşleşir; uyarlanabilir
//   bağışıklık: hücre virüs DNA'sından bir parçayı tekrarların arasına ekler, aynı virüs dönünce tanıyıp keser; bilgi hücre
//   bölünmesiyle yavru hücrelere geçer (Barrangou ve ark. 2007 deneyleri; yerleşik bilgi);
// - Francisco Mojica: 1990'larda tuzcul mikroplarda tekrarları inceledi, aralardaki parçaların virüs DNA'sıyla eşleştiğini
//   sonra fark etti, bağışıklık işlevini önerdi; yayın 2005 (Journal of Molecular Evolution). Yayımlanmasının "bir süre
//   aldığı" temkinli yazıldı; dergi retlerinin ayrıntısı yazılmadı;
// - 2012: Jennifer Doudna (biyokimyacı) ve Emmanuelle Charpentier (mikrobiyolog), Cas9'un kılavuz RNA ile seçilen yerden
//   DNA'yı kesecek biçimde yönlendirilebildiğini gösterdi (Jinek ve ark., Science 2012); 2020 Nobel Kimya Ödülü
//   (nobelprize.org). "Hemen her nokta" temkinli yazıldı (PAM koşulu anlatılmadı). Daha önceki hedefli yöntemlerin (çinko
//   parmak, TALEN) pahalı ve zahmetli olduğu yerleşik bilgi; "aylar sürebilirdi" temkinli;
// - kesikten sonra onarım: hatalı onarım geni bozabilir (NHEJ); kalıp verilirse yeni dizi yazılabilir (HDR);
// - hedef dışı kesimler ve daha kesin Cas9 sürümleri;
// - 2018: He Jiankui düzenlenmiş embriyolardan ikizlerin doğduğunu duyurdu; dünyada kınandı; 2019'da Çin'de hapis cezası;
// - üreme hattı ve vücut hücresi ayrımı; birçok ülkede embriyo düzenlemesi yasak ya da sıkı denetimde (temkinli, "in many
//   countries");
// - Casgevy: orak hücre hastalığı; Birleşik Krallık Kasım 2023, ABD Aralık 2023; hastanın kendi kan kök hücreleri vücut
//   dışında düzenlenir, güçlü kemoterapiyle kemik iliği boşaltıldıktan sonra geri verilir; deneylerde hastaların çoğunda en
//   az bir yıl ağrı krizi görülmedi (sayı yazılmadı; "most patients"); fiyat yalnız "çok yüksek" diye yazıldı, sayı yok;
// - genleri insan hastalığı taşıyacak biçimde değiştirilmiş farelerin ilaç denemelerinde kullanılması; bazı köpek
//   ırklarında görme kaybına yol açan kalıtsal bozukluklar; bazı ülkelerin bazı gen düzenlenmiş ürünleri eski GDO'lardan
//   daha gevşek düzenlemesi (temkinli, "some countries"); buğdayın ilk tarımı yapılan bitkilerden olması ("thousands of
//   years"); kanser ilaçlarının belli proteinleri hedeflemesi (hepsi yerleşik bilgi, genel ve temkinli).
// Etik tartışma (fc-o2, fc-p2): iki görüş de yer alır; metin taraf tutmaz.
// Görev 20 (25 Kasım 2026): çeviri çeldiricileri biçim kestirmesine karşı yeniden kuruldu.

const T = 'taslak';
const C = 'fen';
const U = 'Gen düzenleme';

const cards = [
  // ---------- isim ----------
  { code: 'trait', title: '(kalıtsal ya da kişilik) özellik, nitelik', pos: 'isim', cefr: 'C1', ipa: '/treɪt/',
    text: "Bir canlıyı ya da kişiyi ötekilerden ayıran özellik: an inherited trait (kalıtsal bir özellik), personality traits (kişilik özellikleri). 'Feature' daha çok nesneler ve yüz hatları için, 'trait' daha çok canlılar ve karakter için kullanılır.",
    example: 'Patience is not a trait that runs in my family: none of us can stand waiting in a queue.',
    exampleTr: 'Sabır bizim ailede pek görülen bir özellik değil; hiçbirimiz kuyrukta beklemeye dayanamayız.',
    synonyms: ['characteristic', 'feature'], family: [] },
  { code: 'sequence', title: "dizi, sıra; (DNA'da) dizilim", pos: 'isim', cefr: 'C1', ipa: '/ˈsiːkwəns/',
    text: "Belli bir sırayla birbirini izleyen öğeler: a sequence of events (olaylar dizisi). Biyolojide DNA'daki harflerin (A, C, G, T) sırasıdır: a DNA sequence. Fiil olarak 'sequence a genome' bir canlının DNA dizilimini okumaktır.",
    example: 'Researchers read the DNA sequence of the rare plant to find out which species it is most closely related to.',
    exampleTr: 'Araştırmacılar, nadir bitkinin hangi türe en yakın olduğunu anlamak için DNA dizilimini okudu.',
    synonyms: ['order', 'series'], family: ['sequential', 'sequencing'] },
  { code: 'enzyme', title: 'enzim', pos: 'isim', cefr: 'C1', ipa: '/ˈenzaɪm/',
    text: "Canlı hücrelerin ürettiği ve kimyasal tepkimeleri hızlandıran protein. Sindirimde besinleri parçalar; gen düzenlemede DNA'yı kesen de bir enzimdir (Cas9). Sıfatı 'enzymatic'.",
    example: 'Saliva contains an enzyme that starts breaking down starch while you are still chewing.',
    exampleTr: 'Tükürükte, siz daha çiğnerken nişastayı parçalamaya başlayan bir enzim bulunur.',
    synonyms: ['biological catalyst'], family: ['enzymatic'] },
  { code: 'defect', title: 'kusur, bozukluk', pos: 'isim', cefr: 'C1', ipa: '/ˈdiːfekt/',
    text: "Bir şeyin olması gerektiği gibi çalışmasını engelleyen eksiklik ya da bozukluk: a birth defect (doğuştan bozukluk), a genetic defect (genetik kusur). Sıfatı 'defective' (kusurlu, arızalı). Fiil olarak vurgu sondadır ve anlam değişir: /dɪˈfekt/ (karşı tarafa geçmek).",
    example: 'Surgeons repaired a tiny defect in the little girl\'s heart when she was two years old.',
    exampleTr: 'Cerrahlar, küçük kızın kalbindeki ufak bir bozukluğu o iki yaşındayken onardı.',
    synonyms: ['flaw', 'fault'], family: ['defective'] },
  { code: 'mechanism', title: 'işleyiş, mekanizma; düzenek', pos: 'isim', cefr: 'C1', ipa: '/ˈmekənɪzəm/',
    text: "Bir şeyin nasıl çalıştığını ya da bir sonucun nasıl ortaya çıktığını anlatan süreç: a defence mechanism (savunma mekanizması). Somut anlamı makinedeki düzenektir: the locking mechanism (kilit düzeneği).",
    example: 'Sweating is the main mechanism that the body uses to cool itself down.',
    exampleTr: 'Terleme, vücudun kendini serinletmek için kullandığı başlıca mekanizmadır.',
    synonyms: ['process', 'system'], family: ['mechanical'] },
  // ---------- fiil ----------
  { code: 'alter', title: 'değiştirmek; değişmek', pos: 'fiil', cefr: 'B2', ipa: '/ˈɔːltə/',
    text: "Bir şeyi büsbütün yenilemeden, bir kısmını ya da bir özelliğini değiştirmek: alter the colour/the plan/the shape. 'Change'ten biraz daha resmîdir. Adı 'alteration' (değişiklik; terzide tadilat).",
    example: 'The tailor altered my jacket so that the sleeves were a little shorter.',
    exampleTr: 'Terzi ceketimin kollarını biraz kısaltarak üzerinde değişiklik yaptı.',
    synonyms: ['change', 'adjust'], family: ['alteration', 'unaltered'] },
  { code: 'modify', title: '(bir kısmını) değiştirmek, uyarlamak', pos: 'fiil', cefr: 'B2', ipa: '/ˈmɒdɪfaɪ/',
    text: "Bir şeyi daha uygun ya da daha iyi kılmak için biraz değiştirmek. Bilimde 'genetically modified' (genetiği değiştirilmiş) kalıbıyla sık geçer. Adı 'modification' (değişiklik).",
    example: 'We decided to modify the recipe slightly, using less sugar and a little more lemon.',
    exampleTr: 'Tarifi biraz değiştirmeye karar verdik; daha az şeker, biraz daha fazla limon kullandık.',
    synonyms: ['adapt', 'change'], family: ['modification', 'modified'] },
  { code: 'insert', title: 'sokmak, yerleştirmek, araya eklemek', pos: 'fiil', cefr: 'B2', ipa: '/ɪnˈsɜːt/',
    text: "Bir şeyi başka bir şeyin içine ya da arasına koymak: insert a coin (bozuk para atmak), insert a sentence into a paragraph (paragrafa bir cümle eklemek). Ad olarak vurgu baştadır: /ˈɪnsɜːt/ (ek, ilave). Adı 'insertion'.",
    example: 'She inserted a new paragraph into the middle of her essay to explain the idea more clearly.',
    exampleTr: 'Fikri daha açık anlatmak için denemesinin ortasına yeni bir paragraf ekledi.',
    synonyms: ['put in', 'introduce'], family: ['insertion'] },
  { code: 'manipulate', title: '(ustalıkla) üzerinde oynamak, işlemek; (kişiyi) yönlendirmek', pos: 'fiil', cefr: 'C1', ipa: '/məˈnɪpjuleɪt/',
    text: "Bir şeyi elle ya da bir araçla ustalıkla değiştirmek, işlemek: manipulate genes/data/images. İnsanlar için kullanılınca olumsuzdur: birini kendi çıkarına göre yönlendirmek. Adı 'manipulation'.",
    example: 'With modern software, it is easy to manipulate a photograph so that it shows something that never happened.',
    exampleTr: 'Günümüz yazılımlarıyla bir fotoğrafın üzerinde oynayıp hiç olmamış bir şeyi gösterir hâle getirmek kolay.',
    synonyms: ['handle', 'tamper with'], family: ['manipulation', 'manipulative'] },
  { code: 'target', title: 'hedef almak, hedeflemek', pos: 'fiil', cefr: 'B2', ipa: '/ˈtɑːɡɪt/',
    text: "Bir şeyi belli bir kişiye, gruba ya da noktaya yöneltmek: target young people, target a gene. Ad olarak 'hedef' demektir: meet a target (hedefe ulaşmak). Sıfatı 'targeted' (hedefe yönelik).",
    example: 'The new campaign targets people who have never visited a museum before.',
    exampleTr: 'Yeni kampanya, daha önce hiç müzeye gitmemiş kişileri hedefliyor.',
    synonyms: ['aim at', 'focus on'], family: ['targeted'] },
  // ---------- sıfat ----------
  { code: 'ethical', title: 'etik, ahlaki; ahlaka uygun', pos: 'sıfat', cefr: 'B2', ipa: '/ˈeθɪkl/',
    text: "Doğru ve yanlışla, ahlak ilkeleriyle ilgili: an ethical question (etik bir soru), ethical concerns (etik kaygılar). Ahlaka uygun anlamına da gelir; karşıtı 'unethical'. Adı 'ethics' (etik).",
    example: 'Many shoppers now ask whether it is ethical to buy clothes made in unsafe factories.',
    exampleTr: 'Artık pek çok alışverişçi, güvensiz fabrikalarda üretilmiş giysileri satın almanın ahlaka uygun olup olmadığını soruyor.',
    synonyms: ['moral', 'principled'], family: ['ethics', 'unethical', 'ethically'] },
  { code: 'unintended', title: 'istenmeyen, amaçlanmamış', pos: 'sıfat', cefr: 'C1', ipa: '/ˌʌnɪnˈtendɪd/',
    text: "Bilerek yapılmamış, amaçlanmamış; çoğu zaman olumsuz bir sonuç için: unintended consequences (istenmeyen sonuçlar). Fiili 'intend' (niyet etmek, amaçlamak), adı 'intention'.",
    example: 'Building a wider road to reduce traffic had the unintended effect of attracting even more cars.',
    exampleTr: 'Trafiği azaltmak için daha geniş bir yol yapmak, istenmeden daha da çok aracı oraya çekti.',
    synonyms: ['accidental', 'unforeseen'], family: ['intend', 'intended', 'intention'] },
  { code: 'controversial', title: 'tartışmalı, tartışma yaratan', pos: 'sıfat', cefr: 'B2', ipa: '/ˌkɒntrəˈvɜːʃl/',
    text: "İnsanların üzerinde anlaşamadığı ve güçlü tepkiler uyandıran: a controversial decision (tartışmalı bir karar). Adı 'controversy' (tartışma, anlaşmazlık).",
    example: 'The plan to close the old library was controversial, and hundreds of residents signed a petition against it.',
    exampleTr: 'Eski kütüphaneyi kapatma planı tartışma yarattı; yüzlerce mahalleli plana karşı bir dilekçe imzaladı.',
    synonyms: ['disputed', 'contentious'], family: ['controversy'] },
  { code: 'promising', title: 'umut verici, gelecek vaat eden', pos: 'sıfat', cefr: 'B2', ipa: '/ˈprɒmɪsɪŋ/',
    text: "İyi sonuç vereceğine ya da başarılı olacağına dair işaretler taşıyan: promising results (umut verici sonuçlar), a promising young player (gelecek vaat eden genç bir oyuncu). Fiil ve ad 'promise'tan gelir.",
    example: 'The first week of sales has been promising, so the shop is thinking of opening a second branch.',
    exampleTr: 'Satışların ilk haftası umut verici geçti; dükkân ikinci bir şube açmayı düşünüyor.',
    synonyms: ['encouraging', 'hopeful'], family: ['promise'] },
  // ---------- zarf ----------
  { code: 'permanently', title: 'kalıcı olarak, temelli', pos: 'zarf', cefr: 'B2', ipa: '/ˈpɜːmənəntli/',
    text: "Bir durumun sona ermeden, değişmeden süreceğini anlatır: permanently closed (temelli kapatılmış). Karşıtı 'temporarily' (geçici olarak). Sıfatı 'permanent'.",
    example: 'After the floods, the bridge was permanently closed to heavy lorries.',
    exampleTr: 'Sellerden sonra köprü ağır kamyonlara temelli kapatıldı.',
    synonyms: ['for good', 'forever'], family: ['permanent', 'permanence'] },
  { code: 'potentially', title: 'olası olarak, potansiyel olarak', pos: 'zarf', cefr: 'B2', ipa: '/pəˈtenʃəli/',
    text: "Bir şeyin henüz gerçekleşmediğini ama gerçekleşebileceğini anlatır: potentially dangerous (tehlikeli olabilecek). Bilimsel metinde temkinli dilin sık sözcüğüdür. Sıfat ve adı 'potential'.",
    example: 'Leaving medicines where small children can reach them is potentially dangerous.',
    exampleTr: 'İlaçları küçük çocukların erişebileceği yerlerde bırakmak tehlikeli olabilir.',
    synonyms: ['possibly'], family: ['potential'] },
  // ---------- öbek fiil ----------
  { code: 'rule out', title: 'olasılık dışı bırakmak, dışlamak', pos: 'öbek fiil', cefr: 'C1', ipa: '/ˌruːl ˈaʊt/',
    text: "Bir olasılığı, açıklamayı ya da seçeneği artık geçerli saymamak: rule out the possibility (olasılığı dışlamak). Çoğu zaman olumsuzla gelir: we cannot rule out… (… ihtimalini göz ardı edemeyiz). Nesne araya girebilir: rule it out.",
    example: 'The doctor ordered an X-ray to rule out a broken bone.',
    exampleTr: 'Doktor, kemikte kırık olmadığından emin olmak için röntgen istedi.',
    synonyms: ['exclude', 'eliminate'], family: ['rule in'] },
  { code: 'turn off', title: 'kapatmak; (bir geni) susturmak, devre dışı bırakmak', pos: 'öbek fiil', cefr: 'B1', ipa: '/ˌtɜːn ˈɒf/',
    text: "Asıl anlamı bir aleti kapatmaktır: turn off the light. Biyolojide bir genin çalışmasını durdurmak anlamında da kullanılır: turn off a gene. Karşıtı 'turn on'. Nesne araya girebilir: turn it off.",
    example: 'Cells can turn off genes they do not need, much as we turn off the lights in an empty room.',
    exampleTr: 'Hücreler, bizim boş bir odanın ışıklarını kapatmamız gibi, ihtiyaç duymadıkları genleri susturabilir.',
    synonyms: ['switch off', 'deactivate'], family: ['turn on'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'fc-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['trait', 'defect'],
    level: 'orta', cefr: 'C1', konu: ['isim'],
    q: 'Because it is passed from parents to children through their genes, eye colour is often used in biology lessons as an example of an inherited ----.',
    options: ['trait', 'defect', 'instinct', 'symptom', 'habit'], answer: 0,
    explain: "Cümle göz renginin genler yoluyla anne babadan çocuğa geçtiğini söylüyor ve onu kalıtsal bir şeyin örneği olarak veriyor. Göz rengi bir canlının ayırt edici özelliğidir: 'an inherited trait' (kalıtsal bir özellik). 'Defect' (kusur, bozukluk) de kalıtsal olabilir ama göz rengi bir bozukluk değildir. 'Instinct' (içgüdü) davranışla ilgilidir, 'habit' (alışkanlık) sonradan edinilir. 'Symptom' (belirti) bir hastalığın işaretidir; göz rengiyle anlam kurmaz." },

  { id: 'fc-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['alter', 'insert'],
    level: 'kolay', cefr: 'B2', konu: ['fiil'],
    q: 'By changing just one gene, the researchers were able to ---- the colour of the flowers from white to purple.',
    options: ['insert', 'observe', 'detect', 'compare', 'alter'], answer: 4,
    explain: "Araştırmacılar tek bir geni değiştirerek çiçeklerin rengini beyazdan mora çevirmiş. 'From white to purple' bir değişimi anlatır; bu da 'alter' (değiştirmek) ile kurulur. 'Insert' (sokmak, araya eklemek) bir rengi nesne olarak alamaz. 'Observe' (gözlemlemek), 'detect' (saptamak) ve 'compare' (karşılaştırmak) da 'from … to …' ile anlatılan değişimi karşılamaz; bir geni değiştirmenin sonucu olamazlar." },

  // ---------- dil bilgisi ----------
  { id: 'fc-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'For thousands of years, farmers improved their crops only ---- careful selection, saving the seeds of the best plants to sow the following year.',
    options: ['with regard to', 'in terms of', 'on behalf of', 'in contrast to', 'by means of'], answer: 4,
    explain: "Cümle çiftçilerin ürünlerini nasıl iyileştirdiğini, hangi yolla yaptığını anlatıyor: yalnız dikkatli seçim yoluyla, yani en iyi bitkilerin tohumunu ertesi yıl ekmek için saklayarak. Araç ve yol 'by means of' (… yoluyla, … aracılığıyla) ile verilir. 'With regard to' (… konusunda) ve 'in terms of' (… bakımından) bir yol bildirmez. 'On behalf of' (… adına) seçimi bir kişi gibi temsil edilen taraf yapar. 'In contrast to' (… -in aksine) ise virgülden sonraki tohum saklama bilgisiyle çelişir; o bilgi seçimin nasıl yapıldığını açıklıyor." },

  { id: 'fc-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['kip (modal)'],
    q: 'In our experiment, every plant whose gene was edited produced purple flowers, so this white-flowered one ---- be one of the edited plants.',
    options: ['must', "can't", 'may', 'should', 'would'], answer: 1,
    explain: "Deneyde geni düzenlenen her bitki mor çiçek açmış; bu bitkinin çiçekleri ise beyaz. Buradan kesin bir olumsuz çıkarım yapılır: bu bitki düzenlenenlerden biri olamaz, yani 'can't be'. 'Must be' (olmalı) çıkarımı tersine çevirir. 'May be' (olabilir) kanıtın dışladığı bir olasılığı açık bırakır. 'Should be' (beklenir ki öyledir) da kanıtla çelişir. 'Would be' ise bir koşul olmadan bu cümlede çıkarım bildirmez." },

  { id: 'fc-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['sıfat cümleciği'],
    q: 'The laboratory ---- we did our experiment last week has a special room for growing bacteria.',
    options: ['which', 'who', 'when', 'where', 'whose'], answer: 3,
    explain: "Boşluktan sonraki 'we did our experiment last week' bölümü öznesi ve nesnesi olan tam bir cümle; içinde eksik öğe yok. Bu yüzden bir yer adını ('the laboratory') niteleyen ve 'orada' anlamı taşıyan 'where' gerekir: deneyimizi yaptığımız laboratuvar. 'Which' tam bir cümleyle ancak 'in which' biçiminde gelir. 'Who' insanlar için, 'when' zaman için kullanılır. 'Whose' ardından bir isim ister: 'whose door …' gibi." },

  // ---------- boşluklu metin (5 boşluk) ----------
  { id: 'fc-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: ['sequence', 'mechanism', 'insert', 'enzyme', 'defect'],
    level: 'orta', cefr: 'B2', title: 'Bakteriler virüsleri nasıl hatırlar?',
    text: "Bacteria may seem too simple to have an immune system, yet many of them can defend themselves against the viruses that attack them. In the 1990s, the Spanish microbiologist Francisco Mojica noticed that the DNA of the microbes he was studying contained short (1) ---- that were repeated again and again. Later he found that many of the stretches of DNA separating these repeats matched the DNA of known viruses. Mojica came to suspect that they were a record of past infections, (2) ---- it took some time for his idea to be published; it finally appeared in 2005. The defence mechanism works roughly like this. When a virus invades a bacterium, the cell cuts out a small piece of the virus's DNA and inserts it (3) ---- two of the repeats in its own DNA. If the same kind of virus attacks again, the bacterium uses this stored piece to recognise the invader and cuts its DNA before it (4) ---- any harm. In a sense, every bacterium carries a 'most wanted' list of its old enemies. (5) ----, because the list is kept in its DNA, it is copied whenever the bacterium divides, so its descendants are protected too.",
    steps: [
      { konu: ['kelime', 'isim'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['sequences', 'enzymes', 'symptoms', 'defects', 'cells'], answer: 0,
        explain: "Mojica'nın incelediği mikropların DNA'sında tekrar tekrar yinelenen kısa bir şey var. DNA'da yinelenebilen şey, belli bir sırayla dizilmiş harflerdir: 'sequences' (diziler). Bir sonraki cümle de bu tekrarların arasında başka DNA parçaları olduğunu söylüyor; yani söz konusu olan DNA'nın kendi parçaları. 'Enzymes' (enzimler) ve 'cells' (hücreler) DNA'nın içinde bulunmaz; DNA hücrenin içindedir. 'Defects' (kusurlar) tekrarlayan yapılar için anlam kurmaz. 'Symptoms' (belirtiler) bir hastalığın dışa vuran işaretleridir." },
      { konu: ['bağlaç'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['so that', 'although', 'because', 'unless', 'as if'], answer: 1,
        explain: "Cümlenin ilk bölümü Mojica'nın bir fikre vardığını, ikinci bölümü bu fikrin yayımlanmasının zaman aldığını söylüyor. İki bölüm arasında beklenene ters düşen bir ilişki var: fikri vardı, yine de hemen yayımlanmadı. Bu ilişki 'although' (… -e rağmen, gerçi) ile kurulur. 'Because' gecikmeyi fikrin nedeni yapar; 'so that' gecikmeyi bir amaç gibi sunar. 'Unless' (… -medikçe) ve 'as if' (sanki) iki bölümü anlamlı biçimde bağlamaz." },
      { konu: ['edat'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['beyond', 'between', 'despite', 'towards', 'without'], answer: 1,
        explain: "Parça daha önce virüs DNA'sıyla eşleşen parçaların tekrarları birbirinden ayırdığını söylemişti. Yani hücre yeni parçayı iki tekrarın arasına ekler: 'inserts it between two of the repeats'. 'Beyond' (… -in ötesinde) ve 'towards' (… -e doğru) bir yön ya da uzaklık bildirir; iki tekrar arasındaki yeri anlatmaz. 'Despite' (… -e rağmen) bir karşıtlık edatıdır. 'Without' (… olmadan) ise eklemeyle anlam kurmaz." },
      { konu: ['zaman uyumu'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['did', 'would do', 'does', 'had done', 'was doing'], answer: 2,
        explain: "Parça bakterinin savunmasını genel bir süreç olarak geniş zamanda anlatıyor: 'If the same kind of virus attacks again, the bacterium uses … and cuts …'. 'Before' ile başlayan zaman cümleciği de aynı genel durumu anlatır ve geniş zamanı alır: 'before it does any harm' (zarar vermeden önce). 'Did', 'was doing' ve 'had done' anlatımı geçmişe taşır ve 'attacks', 'uses', 'cuts' fiilleriyle uyuşmaz. 'Would do' bir koşul ya da varsayım bildirir; zaman cümleciğinde gelecek ve varsayım kipi kullanılmaz." },
      { konu: ['bağlantı zarfı'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['Otherwise', 'Instead', 'Similarly', 'Moreover', 'For instance'], answer: 3,
        explain: "Önceki cümle her bakterinin eski düşmanlarının bir 'aranan listesini' taşıdığını söylüyor. Son cümle buna yeni bir bilgi ekliyor: liste DNA'da saklandığı için bakteri bölündükçe kopyalanıyor ve yavrular da korunuyor. Ekleme 'Moreover' (üstelik, ayrıca) ile kurulur. 'Otherwise' (aksi hâlde) bir uyarı, 'Instead' (bunun yerine) bir seçenek, 'For instance' bir örnek, 'Similarly' (aynı biçimde) ise iki ayrı durum arasında benzerlik bildirir; listenin yavrulara geçmesi bunların hiçbiri değil." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'fc-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['promising'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'The results of the experiment on mice were promising, ----.',
    options: [
      'so the team decided to stop the study and publish nothing about it',
      'although most of the treated mice recovered fully within a month',
      'because none of the treated mice showed any sign of improvement',
      'unless the mice had been given the treatment a great deal earlier',
      'but the team warned that it might not work in the same way in humans',
    ], answer: 4,
    explain: "Ana cümle farelerdeki deneyin sonuçlarının umut verici olduğunu söylüyor. Bunu tamamlayan, olumlu bilgiye bir çekince ekleyen karşıtlıktır: ekip, tedavinin insanlarda aynı biçimde işlemeyebileceği uyarısını yaptı. Çalışmayı durdurup hiçbir şey yayımlamamak umut verici bir sonucun mantıklı sonucu değil. 'Although' ile gelen bölüm fareler tamamen iyileştiği için ana cümleyle aynı yönde; karşıtlık kurmaz. Hiçbir farede iyileşme görülmemesi 'promising' ile çelişiyor. 'Unless' ile kurulan koşul ise ana cümleye anlam vermiyor." },

  { id: 'fc-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['turn off'],
    level: 'kolay', cefr: 'B1', konu: ['zaman'],
    q: '----, the mice stopped making the faulty protein that had been damaging their livers.',
    options: [
      'While the gene was still working normally',
      'Before the researchers had identified the gene',
      'Once the researchers turned off the gene',
      'Until the researchers turned off the gene',
      'As long as the gene remained switched on',
    ], answer: 2,
    explain: "Fareler zarar veren proteini üretmeyi bıraktı; bu, genin susturulmasının ardından olmalı. 'Once' (… -ince, … -dikten sonra) bu sırayı kurar: araştırmacılar geni susturunca fareler proteini üretmeyi bıraktı. 'Until' (… -e kadar) üretimin genin susturulmasına kadar durduğunu söyler; sıra tersine döner. Gen hâlâ çalışırken ya da açık kaldığı sürece proteinin durması mantığa ters. Gen bulunmadan önce üretimin durması da cümleye anlam vermiyor." },

  { id: 'fc-t3', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['target'],
    level: 'orta', cefr: 'B2', konu: ['amaç'],
    q: 'Many modern cancer drugs are designed to target a protein found mainly in tumour cells ----.',
    options: [
      'so that healthy tissue is harmed as little as possible',
      'in case the tumour has already spread to other organs',
      'in order that patients could stop taking any other medicine',
      'because most tumours are found only in older patients',
      'so as to attack every type of cell in the body equally',
    ], answer: 0,
    explain: "İlaçlar çoğunlukla tümör hücrelerinde bulunan bir proteini hedef alacak biçimde tasarlanıyor; bunun amacı sağlıklı dokuya olabildiğince az zarar vermektir. 'In case' (… olur diye) tümörün yayılmış olabileceğini bir önlem nedeni yapar; hedefli tasarımı açıklamaz. Hastaların başka hiçbir ilacı almayı bırakması bu tasarımın amacı değil; zaman uyumu da bozuk. 'Because' ile verilen yaş bilgisi bir amaç bildirmiyor. Her hücreye eşit saldırmak ise hedefli tasarımla çelişir." },

  { id: 'fc-t4', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['rule out'],
    level: 'zor', cefr: 'C1', konu: ['karşıtlık'],
    q: '----, doctors cannot yet rule out side effects that might appear only many years after the treatment.',
    options: [
      'Since every patient has now been followed for several decades',
      'Now that the long-term risks of the treatment are fully understood',
      'Even though the treatment was approved only quite recently',
      'Unless the first patients develop unexpected problems in the next few months',
      'However well the first patients seem to be doing at the moment',
    ], answer: 4,
    explain: "Ana cümle hekimlerin, tedaviden yıllar sonra çıkabilecek yan etkileri henüz dışlayamadığını söylüyor. 'However well …' (… ne kadar iyi olursa olsun) karşıtlık kurar: ilk hastalar şu an ne kadar iyi görünse de uzun vadeli etkiler bilinmiyor. Hastaların onlarca yıldır izlenmesi ve uzun vadeli risklerin tam olarak anlaşılması ana cümleyle çelişiyor; bu durumda yan etkiler dışlanabilirdi. 'Even though' ile verilen yeni onay bilgisi ana cümleyle aynı yönde; karşıtlık değil neden bildirmeliydi. 'Unless' ile kurulan koşul ise ana cümleye anlam vermiyor." },

  // ---------- çeviri: İngilizceden Türkçeye ----------
  { id: 'fc-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['potentially'],
    level: 'orta', cefr: 'B2', konu: ['isim cümleciği'],
    q: 'What makes the technique so exciting for many doctors is that a single tool could potentially be used to treat a wide range of inherited diseases.',
    options: [
      'Tekniği bazı hekimler için bu kadar heyecan verici kılan şey, tek bir aracın şimdiden pek çok kalıtsal hastalığın tedavisinde kullanılıyor olmasıdır.',
      'Tekniği birçok hekim için bu kadar heyecan verici kılan şey, tek bir aracın belki de pek çok bulaşıcı hastalığın tedavisinde kullanılabilecek olmasıdır.',
      'Tekniği birçok hekim için bu kadar heyecan verici kılan şey, tek bir aracın belki de pek çok kalıtsal hastalığın tedavisinde kullanılabilecek olmasıdır.',
      'Tekniği birçok hekim için bu kadar heyecan verici kılan şey, tek bir aracın şimdiden pek çok kalıtsal hastalığın tedavisinde kullanılıyor olmasıdır.',
      'Tekniği birçok hekim için bu kadar heyecan verici kılan şey, tek bir aracın şimdiden pek çok bulaşıcı hastalığın tedavisinde kullanılıyor olmasıdır.',
    ], answer: 2,
    explain: "Cümlenin öznesi bir isim cümleciği: 'What makes the technique so exciting for many doctors' (tekniği birçok hekim için bu kadar heyecan verici kılan şey). Yüklem ikinci bir isim cümleciği: tek bir aracın çok çeşitli kalıtsal hastalıkları tedavi etmekte kullanılabilecek olması. 'Could potentially' henüz gerçekleşmemiş bir olasılık bildirir; doğru çeviri bunu 'belki de … kullanılabilecek' ile korur. 'Birçok hekim … şimdiden … kalıtsal hastalığın tedavisinde kullanılıyor' diyen çeviri olasılığı bugün gerçekleşen bir olguya çeviriyor. 'Bazı hekimler için' diye başlayan seçenekte 'many doctors' daralmış, olasılık da olguya dönmüş. 'Belki de … bulaşıcı hastalığın' ifadesi olasılığı koruyor, ama 'inherited' (kalıtsal) sözünü değiştiriyor. Bulaşıcı hastalıkların şimdiden tedavi edildiğini söyleyen çeviride hem hastalık türü hem olasılık yanlış." },

  { id: 'fc-c2', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['modify'],
    level: 'orta', cefr: 'B2', konu: ['edilgen'],
    q: 'Mice are often used to test new medicines after scientists modify their genes so that they carry a human disease.',
    options: [
      'Fareler, bilim insanları onların genlerini bir insan hastalığını taşıyacak biçimde değiştirdikten sonra, hastalığın nasıl ilerlediğini incelemek için sıkça kullanılır.',
      'Fareler, bilim insanları onların genlerini bir insan genini taşıyacak biçimde değiştirdikten sonra, yeni ilaçları denemek için nadiren kullanılır.',
      'Fareler, bilim insanları onların genlerini bir insan genini taşıyacak biçimde değiştirdikten sonra, yeni ilaçları denemek için sıkça kullanılır.',
      'Fareler, bilim insanları onların genlerini bir insan genini taşıyacak biçimde değiştirdikten sonra, bu genin nasıl çalıştığını incelemek için sıkça kullanılır.',
      'Fareler, bilim insanları onların genlerini bir insan hastalığını taşıyacak biçimde değiştirdikten sonra, yeni ilaçları denemek için sıkça kullanılır.',
    ], answer: 4,
    explain: "Ana cümle edilgendir: 'Mice are often used to test new medicines' (fareler yeni ilaçları denemek için sıkça kullanılır). 'After' ile gelen zaman cümleciği bunun ne zaman olduğunu söylüyor: bilim insanları farelerin genlerini, bir insan hastalığını taşısınlar diye ('so that they carry a human disease') değiştirdikten sonra. 'Their genes' farelerin genleridir; çeviride bu yüzden 'onların genlerini' denir. 'Bir insan genini taşıyacak biçimde … denemek için sıkça' diyen çeviri değişikliğin amacını kaydırıyor: farelere bir hastalık değil, yalnızca bir insan geni aktarılmış oluyor. 'Nadiren kullanılır' ile biten seçenek bu amaç kaymasına 'often' sözünün tersini ekliyor. 'Hastalığını taşıyacak biçimde … hastalığın nasıl ilerlediğini incelemek için' seçeneğinde değişikliğin amacı yerinde, ama farelerin kullanım amacı ilaç denemekten hastalığın seyrini incelemeye kaymış. İnsan genini taşıyan farelerin bu genin nasıl çalıştığını incelemek için kullanıldığını söyleyen çeviride hem değişikliğin hem kullanımın amacı yanlış." },

  { id: 'fc-c3', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['koşul'],
    q: 'Had Mojica not kept studying these puzzling repeats for years, their role in protecting microbes against viruses might have been discovered much later.',
    options: [
      'Mojica bu şaşırtıcı tekrarları yıllarca incelemeyi sürdürmeseydi, mikropları virüslere karşı korumadaki rolleri biraz daha geç keşfedilirdi.',
      'Mojica bu şaşırtıcı tekrarları yıllarca incelemeyi sürdürmeseydi, virüsleri mikroplara karşı korumadaki rolleri çok daha geç keşfedilebilirdi.',
      'Mojica bu şaşırtıcı tekrarları yıllarca incelemeyi sürdürmeseydi, mikropları virüslere karşı korumadaki rolleri çok daha geç keşfedilebilirdi.',
      'Mojica bu şaşırtıcı tekrarları yıllarca incelemeyi sürdürmeseydi, virüsleri mikroplara karşı korumadaki rolleri çok daha geç keşfedilirdi.',
      'Mojica bu şaşırtıcı tekrarları yıllarca incelemeyi sürdürmeseydi, mikropları virüslere karşı korumadaki rolleri çok daha geç keşfedilirdi.',
    ], answer: 2,
    explain: "'Had Mojica not kept studying' devrik bir geçmiş koşul cümlesidir: 'If Mojica had not kept studying', yani incelemeyi sürdürmeseydi. Ana cümle gerçekleşmemiş bir olasılığı anlatır: 'might have been discovered much later'; 'might' kesinlik değil olasılık bildirir: çok daha geç keşfedilebilirdi. 'Mikropları virüslere karşı … çok daha geç keşfedilirdi' diyen çeviri olasılığı kesin bir sonuca çeviriyor. 'Biraz daha geç keşfedilirdi' seçeneğinde kesinliğe ek olarak 'much later' derecesi de zayıflamış. 'Virüsleri mikroplara karşı … keşfedilebilirdi' ifadesi olasılığı koruyor, ama koruyan ile korunanın yerini değiştiriyor. Virüsleri koruyan bir rolden söz edip 'keşfedilirdi' diyen çeviride hem roller hem kesinlik bozuk." },

  // ---------- çeviri: Türkçeden İngilizceye ----------
  { id: 'fc-c4', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['turn off'],
    level: 'kolay', cefr: 'B1', konu: ['bağlaç'],
    q: 'Bakteriler büyümedi, çünkü biri gece inkübatörü kapatmıştı.',
    options: [
      "The bacteria didn't grow because someone had turned off the incubator overnight.",
      "The bacteria didn't grow because someone had left the incubator open overnight.",
      "The bacteria didn't grow because someone turns off the incubator at night.",
      "The bacteria didn't grow because the cleaner had turned off the incubator overnight.",
      "The bacteria didn't grow because someone had left the incubator off over the weekend.",
    ], answer: 0,
    explain: "Türkçe cümlede 'çünkü' bir neden bildiriyor: bakteriler büyümedi, nedeni de birinin inkübatörü gece kapatmış olması. 'Kapatmıştı' büyümemekten önce olmuş tek bir olaydır; İngilizcede 'had turned off' ile verilir. 'Left the incubator open' diyen seçenek yapılan işi kapatmaktan kapağı açık bırakmaya çeviriyor. 'Turns off … at night' ifadesi tek bir olayı geceleri tekrarlanan bir alışkanlığa çeviriyor. 'The cleaner' ile kurulan çeviri belirsiz 'biri'yi belli bir kişiye, temizlikçiye çeviriyor. 'Over the weekend' seçeneği süreyi bir geceden hafta sonunun tamamına uzatıyor." },

  { id: 'fc-c5', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['manipulate'],
    level: 'zor', cefr: 'C1', konu: ['ortaç öbeği'],
    q: 'Bakterilerden ödünç alınan bu sistem, bilim insanlarının bitki, hayvan ve insan hücrelerindeki genler üzerinde her zamankinden daha kolay oynamasını sağladı.',
    options: [
      'Borrowed from bacteria, this system has allowed scientists to manipulate the genes in plant, animal and human cells more easily than ever before.',
      'Borrowed from bacteria, this system may soon allow scientists to manipulate the genes in plant, animal and human cells more cheaply than ever before.',
      'Borrowed from bacteria, this system has allowed scientists to manipulate the genes in plant, animal and human cells more cheaply than ever before.',
      'Borrowed from viruses, this system has allowed scientists to manipulate the genes in plant, animal and human cells more easily than ever before.',
      'Borrowed from viruses, this system has allowed scientists to manipulate the genes in plant, animal and human cells more cheaply than ever before.',
    ], answer: 0,
    explain: "'Bakterilerden ödünç alınan bu sistem' edilgen bir ortaç öbeğidir; İngilizcede başta 'Borrowed from bacteria, this system …' diye kısaltılarak verilir. Yüklem 'sağladı', 'has allowed … to manipulate' ile, 'her zamankinden daha kolay' da 'more easily than ever before' ile karşılanır. 'Borrowed from bacteria … more cheaply than ever before' diyen seçenek kolaylığı ucuzluğa çeviriyor. 'May soon allow' ile kurulan çeviri ucuzluktan söz ediyor ve gerçekleşmiş bir sonucu yakında beklenen bir olasılığa çeviriyor. 'Borrowed from viruses … more easily' seçeneğinde kolaylık yerinde, ama sistemin kaynağı bakterilerden virüslere kaymış. Virüslerden ödünç alınmış bir sistemin işi ucuzlattığını söyleyen çeviride hem kaynak hem kazanç yanlış." },

  { id: 'fc-c6', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['defect'],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'Bilim insanları, bazı köpek ırklarında görme kaybına yol açan kalıtsal bir kusur belirledi.',
    options: [
      'Scientists have identified a common defect that causes some breeds of dog to lose their hearing.',
      'Scientists are looking for an inherited defect that causes some breeds of dog to lose their hearing.',
      'Scientists have identified an inherited defect that causes some breeds of dog to lose their sight.',
      'Scientists have identified a common defect that causes some breeds of dog to lose their sight.',
      'Scientists have identified an inherited defect that causes some breeds of dog to lose their hearing.',
    ], answer: 2,
    explain: "Türkçe cümlede 'görme kaybına yol açan' bir sıfat cümleciğidir ve 'kalıtsal bir kusur'u niteler. Bilim insanlarının belirlediği şey bu kusurdur: 'Scientists have identified an inherited defect that causes …'. 'Have identified an inherited defect … lose their hearing' diyen seçenek görme kaybını işitme kaybına çeviriyor. 'Are looking for' ifadesi belirlenmiş bir kusuru henüz aranan bir kusura çeviriyor; bu seçenek ayrıca görme yerine işitmeden söz ediyor. 'A common defect … lose their sight' seçeneğinde kayıp yerinde, ama 'kalıtsal' niteliği 'yaygın'a dönmüş. Yaygın bir kusurun işitme kaybına yol açtığını söyleyen çeviride hem kusurun türü hem kayıp yanlış." },

  // ---------- okuma parçası (4 soru, YDS biçimi) ----------
  { id: 'fc-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['enzyme', 'target'],
    level: 'orta', cefr: 'B2', title: "CRISPR'ın keşfi",
    text: "For decades, changing a particular gene in a living cell was slow and expensive; methods for doing it existed, but each new gene could take months of work. That began to change in 2012, when the biochemist Jennifer Doudna and the microbiologist Emmanuelle Charpentier showed how a defence system found in bacteria could be turned into a laboratory tool. At its heart is an enzyme called Cas9, which cuts DNA. On its own, Cas9 has no way of knowing where to cut. It is led to the right place by a short strand of RNA whose letters match the stretch of DNA to be cut, and by writing a new guide, researchers can target almost any spot they choose. The tool is often described as a pair of 'molecular scissors'. The comparison is helpful, but it leaves out an important step. Cutting the DNA is only the beginning; what happens next depends on the cell, which immediately tries to repair the break. This repair is often imperfect, and the small errors it introduces can be enough to stop a gene from working. If researchers also supply a piece of DNA to serve as a template, however, the cell may copy it into the gap, so that new genetic information is written in. Because the method was cheap and relatively simple, laboratories around the world adopted it within a few years, and in 2020 Doudna and Charpentier received the Nobel Prize in Chemistry.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, Cas9 is able to cut DNA at a chosen point because ----.',
        options: [
          'it can recognise the genes that are responsible for a disease',
          'an RNA molecule corresponding to that section directs it there',
          'the cell marks the place with a template before any cut is made',
          'bacteria release it only when they meet a virus for a second time',
          'it has been redesigned so that it can no longer cut healthy genes',
        ], answer: 1,
        explain: "Parçaya göre Cas9 tek başına nereyi keseceğini bilemez; onu doğru yere, harfleri kesilecek DNA bölümüyle eşleşen kısa bir RNA zinciri götürür. Doğru seçenek bunu 'o DNA bölümüne karşılık gelen bir RNA molekülü onu oraya yönlendirir' diye anlatıyor. Cas9'un hastalık genlerini kendisinin tanıdığı ve sağlıklı genleri kesemeyecek biçimde yeniden tasarlandığı parçada geçmiyor. Kalıp, kesikten sonraki onarımla ilgili; kesik yerini belirlemez. Bakterilerin enzimi ancak bir virüsle ikinci kez karşılaşınca salgılaması da parçada yok." },
      { konu: ['ayrıntı'],
        q: 'It is stated in the passage that a gene may stop working when ----.',
        options: [
          'mistakes are made as the cell mends the cut',
          'the cut is made too far away from the gene itself',
          'a template is supplied along with the RNA guide',
          'the enzyme cuts the same piece of DNA more than once',
          'the cell fails to notice that its DNA has been broken',
        ], answer: 0,
        explain: "Parçaya göre hücre kesiği hemen onarmaya çalışır, ama bu onarım çoğu zaman kusurludur ve araya giren küçük hatalar bir genin çalışmasını durdurmaya yetebilir. Doğru seçenek bunu 'hücre kesiği onarırken yapılan hatalar' diye veriyor. Kalıp verilmesi geni durdurmaz; tersine hücrenin yeni bilgiyi yazmasını sağlar. Kesiğin genden uzakta yapılması ve enzimin aynı yeri birden çok kez kesmesi parçada geçmiyor. Hücrenin kırığı fark etmemesi de parçayla çelişiyor; hücre onu hemen onarmaya çalışıyor." },
      { konu: ['çıkarım'],
        q: "It can be inferred from the passage that describing the tool as 'molecular scissors' ----.",
        options: [
          'was first suggested by Doudna and Charpentier themselves',
          'is so misleading that scientists have stopped using it',
          'overlooks the part the cell plays once the DNA is cut',
          'explains why the method was so expensive at first',
          'refers mainly to the way bacteria destroy viruses',
        ], answer: 2,
        explain: "Parça bu benzetmenin yararlı olduğunu ama önemli bir adımı atladığını söylüyor: kesmek yalnız başlangıçtır, sonrasını kırığı onaran hücre belirler. Yani 'makas' benzetmesi, DNA kesildikten sonra hücrenin oynadığı rolü göz ardı ediyor. Benzetmeyi Doudna ile Charpentier'in önerdiği parçada geçmiyor. Benzetmenin bırakıldığı söylenmiyor; parça onu 'yararlı' buluyor. Yöntem pahalı değil, ucuz olduğu için hızla yayılmış. Benzetmenin bakterilerin virüsleri yok etmesine gönderme yaptığı da parçada yok." },
      { konu: ['başlık'],
        q: 'Which of the following is the most suitable title for the passage?',
        options: [
          'Why Bacteria Need Protection from Invading Viruses',
          'The Long and Difficult Road to a Nobel Prize in Chemistry',
          'From Bacterial Defence to Precise Gene-Editing Tool',
          'The Hidden Dangers of Cutting Human DNA',
          'Two Rival Laboratories and the Race for a Patent',
        ], answer: 2,
        explain: "Parça, bakterilerdeki bir savunma sisteminin 2012'de nasıl bir laboratuvar aracına dönüştürüldüğünü, aracın nasıl çalıştığını ve neden hızla yayıldığını anlatıyor. Bu bütünü 'Bakteri savunmasından hassas bir gen düzenleme aracına' başlığı karşılar. Bakterilerin neden korunmaya ihtiyaç duyduğu parçanın konusu değil. Nobel ödülü yalnız son cümlede geçiyor. İnsan DNA'sını kesmenin tehlikeleri ve rakip laboratuvarlar arasındaki patent yarışı ise parçada hiç yok." },
    ] },

  // ---------- okuma parçası (3 soru, YÖKDİL biçimi) ----------
  { id: 'fc-o2', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['ethical', 'permanently'],
    level: 'zor', cefr: 'C1', title: 'İlk tedavi ve etik sınır',
    text: "In November 2023, regulators in the United Kingdom approved Casgevy, the first medicine based on CRISPR gene editing, and their counterparts in the United States followed in December. The treatment is used for people with sickle cell disease, an inherited blood disorder that causes bouts of severe pain and can gradually damage organs. Rather than editing cells inside the body, doctors collect the patient's own blood-forming stem cells, change them in a laboratory and infuse them back once strong chemotherapy has cleared space in the bone marrow. In trials, most patients were free of painful crises for at least a year afterwards. The procedure is demanding, however, and its very high price means that it may not reach many of those who need it most. Because only the patient's own blood cells are changed, the edits end with that patient. That distinction lies at the centre of the ethical debate. In 2018 the Chinese researcher He Jiankui announced that twin girls had been born from embryos whose genes he had edited, changes that could be handed down to the girls' own children. Scientists around the world condemned the experiment, and in 2019 he was sentenced to prison. In many countries, editing embryos for a pregnancy is banned or tightly controlled. Some researchers would like that line to stay in place permanently; others believe that, once the method is proven safe, it might one day be justified to prevent a serious inherited disease. For the moment, a more pressing question may be who will be able to afford the treatments that are already allowed.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, in the treatment approved in 2023, ----.',
        options: [
          "the patient's cells are edited outside the body and then given back",
          'stem cells from a healthy donor replace those of the patient',
          "the genes are corrected directly inside the patient's bone marrow",
          'chemotherapy is given afterwards to remove any faulty edited cells',
          "the edits are designed so that the patient's children benefit too",
        ], answer: 0,
        explain: "Parçaya göre hekimler hücreleri vücudun içinde düzenlemiyor: hastanın kendi kan yapan kök hücrelerini topluyor, laboratuvarda değiştiriyor ve kemoterapiden sonra geri veriyor. Yani hücreler vücudun dışında düzenlenip hastaya geri dönüyor. Sağlıklı bir bağışçının hücrelerinin kullanılması parçayla çelişiyor; hücreler hastanın kendisinin. Genlerin kemik iliğinin içinde düzeltildiği de parçaya ters. Kemoterapi düzenlenmiş hücreleri yok etmek için değil, onlara kemik iliğinde yer açmak için önceden veriliyor. Düzenlemelerin hastanın çocuklarına geçtiği de parçayla çelişiyor; değişiklikler hastayla birlikte sona eriyor." },
      { konu: ['çıkarım'],
        q: "It can be inferred from the passage that He Jiankui's experiment caused such an outcry mainly because ----.",
        options: [
          'the twins became seriously ill soon after they were born',
          'its changes could be passed on to later generations',
          'it was the first time that CRISPR had been used in China',
          'he had tried to sell the method to private clinics abroad',
          'it had been carried out on adults who were not ill at all',
        ], answer: 1,
        explain: "Parça önce hastanın kendi hücrelerindeki değişikliklerin onunla sona erdiğini söylüyor ve bu ayrımın etik tartışmanın merkezinde olduğunu belirtiyor. He Jiankui'nin deneyi ise embriyolarda yapılmış ve değişiklikler kızların kendi çocuklarına geçebilecek nitelikte. Buradan tepkinin asıl nedeninin bu sınırın aşılması, yani değişikliğin kuşaktan kuşağa geçebilmesi olduğu çıkar. İkizlerin hastalanması, CRISPR'ın Çin'de ilk kez kullanılması ve yöntemin yurt dışındaki kliniklere satılması parçada geçmiyor. Deneyin yetişkinlerde yapıldığı ise parçayla çelişiyor; düzenleme embriyolarda yapılmış." },
      { konu: ['yazarın tutumu'],
        q: "The author's attitude towards the newly approved treatment can best be described as ----.",
        options: [
          'positive about its results but worried about who can get it',
          'enthusiastic and sure that it will soon be available to everyone',
          'hostile, because it depends on strong chemotherapy',
          'indifferent, as the author sees it as only a small step',
          'doubtful about the trial results, which seem exaggerated',
        ], answer: 0,
        explain: "Yazar deneylerde hastaların çoğunun en az bir yıl ağrı krizi yaşamadığını aktarıyor; sonuçlara olumlu bakıyor. Öte yandan çok yüksek fiyatın tedaviyi en çok ihtiyacı olanlardan uzak tutabileceğini söylüyor ve parçayı, izin verilen tedavilere kimin parası yeteceği sorusuyla bitiriyor. Bu tutum 'sonuçlara olumlu, erişime kaygılı' diye özetlenir. Tedavinin yakında herkese ulaşacağından emin olmak bu kaygıyla çelişiyor. Kemoterapi yüzünden düşmanca bir tutum, tedaviyi küçük bir adım sayan bir ilgisizlik ve deney sonuçlarını abartılı bulma parçada yok. Parça embriyo düzenlemesi konusunda da taraf tutmuyor; iki görüşü yan yana veriyor." },
    ] },

  // ---------- diyalog tamamlama ----------
  { id: 'fc-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B2', konu: ['bağlam'],
    q: "Zeynep: That lab session took forever. Did your bacteria grow in the end?\nTom: Not at all. My dish is completely empty, even though I followed every step on the sheet.\nZeynep: ----\nTom: Good idea. I'll catch her before Thursday's class, then.",
    options: [
      "That's odd. Why don't you show it to Dr Kaya? She might know what went wrong.",
      "Mine didn't grow either. I think someone left the incubator door open last night.",
      "Don't worry. Dr Kaya told us this one doesn't count towards the final mark.",
      "Really? Mine grew so much that I could hardly see the bottom of the dish.",
      'Never mind. Shall we get something to eat before the canteen closes?',
    ], answer: 0,
    explain: "Tom'un son sözü ('İyi fikir. O zaman perşembe dersinden önce onu yakalarım.') iki şey gösteriyor: Zeynep bir öneride bulunmuş ve bu öneride bir kadın ('her') geçiyor. Bunu yalnız 'Neden Dr. Kaya'ya göstermiyorsun? Neyin ters gittiğini bilebilir' diyen cevap karşılar. Dr. Kaya'nın bu deneyin nota sayılmayacağını söylediğini aktaran cevap da bir kadından söz ediyor ama öneri değil; 'iyi fikir' ona uymaz. Yemek yemeyi öneren soru 'iyi fikir'e uyar ama 'her' kimseye bağlanmıyor. İnkübatör kapısının açık kaldığını ve kendi bakterilerinin çok ürediğini söyleyen cevaplar öneri içermiyor." },

  // ---------- anlamca en yakın cümle ----------
  { id: 'fc-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edilgen'],
    q: 'Every sample must be clearly labelled before it is put in the fridge.',
    options: [
      'No sample should go into the fridge until it has been given a clear label.',
      'Samples that are kept in the fridge do not usually need clear labels.',
      'Clear labels can be added to the samples after they have gone into the fridge.',
      'Only some of the samples have to be labelled before they go in the fridge.',
      'Each sample was clearly labelled after it had been taken out of the fridge.',
    ], answer: 0,
    explain: "Verilen cümle bir kural koyuyor: her örnek buzdolabına konmadan önce açıkça etiketlenmeli. Doğru seçenek aynı kuralı olumsuz yoldan söylüyor: hiçbir örnek açık bir etiket almadan buzdolabına girmemeli. Buzdolabındaki örneklerin etikete pek ihtiyacı olmadığını söyleyen seçenek kuralı yok sayıyor. Etiketin buzdolabına girdikten sonra eklenebileceğini söyleyen seçenek sırayı tersine çeviriyor. 'Only some' kuralı her örnekten birkaç örneğe daraltıyor. Kalan yanlış seçenek de kuralı geçmişte olmuş bir olaya çeviriyor ve sırayı bozuyor." },

  // ---------- paragraf tamamlama ----------
  { id: 'fc-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['controversial'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'Editing a batch of cells does not mean that every cell has been changed in the same way. In some cells the edit may fail completely, while in others it may work only partly. ----. Only the cells that carry exactly the intended change are then kept and allowed to multiply.',
    options: [
      'Some cells, on the other hand, divide much faster than others in a laboratory dish',
      'The first editing tools were developed by scientists who were studying bacteria',
      'As a result, all the cells in a batch normally end up with exactly the same change',
      'Researchers therefore usually read the DNA of the treated cells to check it',
      'Editing cells in a dish is generally seen as less controversial than editing embryos',
    ], answer: 3,
    explain: "Paragraf, düzenlemenin her hücrede aynı sonucu vermediğini söylüyor; kimi hücrede hiç işlemiyor, kimisinde yarım işliyor. Boşluktan sonraki cümle ise 'Only the cells that carry exactly the intended change are then kept' diyor: tam istenen değişikliği taşıyan hücreler seçilip saklanıyor. Seçim yapılabilmesi için önce hangi hücrede ne olduğu öğrenilmeli. Bu köprüyü, araştırmacıların bu yüzden hücrelerin DNA'sını okuyup ne olduğunu gördüğünü söyleyen cümle kurar. Bütün hücrelerin aynı değişikliği taşıdığını söyleyen cümle paragrafın başıyla çelişiyor. Hücrelerin bölünme hızı, ilk araçların bakterilerden geliştirilmesi ve embriyo düzenlemesinin tartışmalı olması seçim adımına bağlanmıyor." },

  { id: 'fc-p2', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['gönderim'],
    q: 'Most people who support gene editing in medicine have in mind the treatment of serious diseases. In principle, however, the same tools could also be used to change characteristics that have nothing to do with illness, such as height. ----. Others reply that the line between treating a disease and improving a healthy body has never been easy to draw, and that this alone is not a reason to give up useful treatments.',
    options: [
      'Height, for instance, depends on a great many genes as well as on diet',
      "Some fear that parents might then start choosing their children's features from a list",
      'Some families already worry a great deal about how tall their children will grow',
      'Changing such characteristics would probably cost far less than treating a disease',
      'Diseases that run in families are often among the hardest ones to treat',
    ], answer: 1,
    explain: "Boşluktan sonraki cümle 'Others reply that …' (Başkaları ise … diye karşılık veriyor) diye başlıyor. 'Others' bir gruba, 'reply' de daha önce ileri sürülmüş bir görüşe gönderme yapar. Boşluktaki cümle hem 'some' ile bir grup kurmalı hem de bir kaygı ya da itiraz dile getirmeli. Bunu, bazılarının anne babaların çocuklarının özelliklerini bir listeden seçmeye başlayabileceğinden korktuğunu söyleyen cümle sağlar; ardından gelen cevap da bu kaygıya karşılık veriyor. Ailelerin çocuklarının boyu konusunda kaygılandığını söyleyen cümle de 'some' ile başlıyor ama gen düzenlemesine dair bir görüş ileri sürmüyor; 'reply' ona bağlanmaz. Boyu belirleyen etkenler, maliyet ve kalıtsal hastalıkların tedavisi de 'Others reply' ile karşılık verilecek bir görüş bildirmiyor." },

  // ---------- akışı bozan cümle ----------
  { id: 'fc-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['unintended'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'One of the main concerns about CRISPR is that it does not always cut only where it is meant to.',
      'The guide RNA can sometimes attach to a stretch of DNA that is similar, but not identical, to the intended spot, and the enzyme may then cut there as well.',
      'Bacteria first developed the system to protect themselves against viruses, long before humans learned how to use it.',
      'Such unintended cuts could damage an important gene, which is particularly worrying when edited cells are to be returned to a patient.',
      'To reduce this risk, researchers have been developing more precise versions of the enzyme.',
    ],
    answer: 2,
    explain: "Parça hedef dışı kesimleri anlatıyor: CRISPR her zaman yalnız istenen yeri kesmez (I); kılavuz RNA benzer ama aynı olmayan bir DNA bölümüne tutunabilir ve enzim orayı da kesebilir (II); bu istenmeyen kesikler önemli bir geni bozabilir (IV); araştırmacılar bu riski azaltmak için daha kesin sürümler geliştiriyor (V). III. cümle de CRISPR'dan söz ediyor ama konuyu sistemin bakterilerdeki kökenine kaydırıyor. Üstelik IV'teki 'Such unintended cuts' (bu tür istenmeyen kesikler) II'de anlatılan kesiklere gönderme yapıyor; III araya girince bu bağ kopuyor." },

  { id: 'fc-b2', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['controversial'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Gene editing is also being tested on crops, where it could help plants cope with disease, heat or drought.',
      "Because it can change a plant's own genes without adding DNA from another species, some countries regulate certain edited crops less strictly than older genetically modified ones.",
      'Wheat was one of the first plants to be farmed, thousands of years before anyone knew what a gene was.',
      'Critics, however, argue that edited crops should be tested as carefully as any other new food, since even small genetic changes can have unexpected effects.',
      'For now, the subject remains controversial, and the rules vary widely from one country to another.',
    ],
    answer: 2,
    explain: "Parça tarımda gen düzenlemenin nasıl düzenlendiğini anlatıyor: düzenleme ekinlerde deneniyor (I); başka türden DNA eklenmediği için bazı ülkeler bu ürünleri daha gevşek denetliyor (II); eleştirenler ise bunların da dikkatle denenmesini istiyor (IV); konu tartışmalı ve kurallar ülkeden ülkeye değişiyor (V). III. cümle de ekinlerden söz ediyor ama konuyu buğdayın tarihine kaydırıyor. IV'teki 'however', II'deki gevşek denetime karşı çıkıldığını gösteriyor; III araya girince bu karşıtlığın neye yöneldiği belirsizleşiyor." },
];

export default { id: 'fen-crispr', course: C, title: U, order: 6, cards, items };
