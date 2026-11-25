// iDil › Genel › Kentlerde ısı adaları
// Tümü özgün: Claude yazdı (13 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (yalnız olgular; metin özgün; plan: ../analiz/cogaltma-2-plani.md §4.1):
// - Kentler çoğu zaman çevrelerindeki kırsaldan daha sıcaktır; fark özellikle geceleri belirgindir ve birkaç dereceyi
//   bulabilir (temkinli). Hava sıcaklığındaki fark öğle saatlerinde çoğu zaman küçüktür (gi-o1, gi-g2).
// - Nedenler: koyu yüzeyler (asfalt, çatılar) güneşi emer ve ısıyı gün batımından sonra saatlerce salar; sık dizilmiş yüksek
//   binalar sıcak havayı hapseder ve rüzgârı keser; motorlar, fabrikalar ve klimalar atık ısı üretir. Klima içeriyi
//   serinletir ama ısıyı dışarı atar; yoğun kullanım etkiyi büyütebilir (temkinli) (gi-o1).
// - Çareler: ağaçlar ve parklar (gölge ve yapraklardan buharlaşma), yeşil çatılar, açık renkli ve ışığı yansıtan çatı ve
//   kaldırımlar, su alanları (gi-o1, gi-t1, gi-d1, gi-b1). Yeşil çatıların kurulum ve bakım maliyeti yüksektir (gi-t1).
// - Luke Howard (1772–1864): eczacılık eğitimi almış amatör bilim insanı; bulutlara bugün de kullanılan adları (cumulus,
//   stratus …) verdi. Kentin dışındaki evinde tuttuğu günlük kayıtları Londra'nın merkezinde alınan ölçümlerle karşılaştırdı;
//   1810'lar ve 1820'lerde kentin kırdan daha sıcak olduğunu, farkın geceleri büyüdüğünü kaydetti (The Climate of London).
//   Fazladan ısının bir kısmını kentin kendisine, bu arada yakılan yakıta bağladı. Terim ("urban heat island") çok sonra,
//   20. yüzyılda yaygınlaştı (gi-z1).
// - Sıcak hava dalgaları kentlerde daha tehlikelidir; 2003 Avrupa sıcak hava dalgası on binlerce ölümle ilişkilendirildi,
//   ölenlerin çoğu yaşlıydı (temkinli) (gi-t2, gi-g2). Avrupa'da sıcak hava dalgaları son on yıllarda sıklaştı (gi-t2).
// - Isı adası ölçümünün sonucu termometrelerin nereye konduğuna büyük ölçüde bağlıdır (gi-c1). Birçok kentte ağacı az,
//   yapılaşması sık yoksul mahalleler sıcaktan daha çok etkilenir (temkinli) (gi-c2).
// Görev 20 (25 Kasım 2026): çeviri çeldiricileri biçim kestirmesine karşı yeniden kuruldu.

const T = 'taslak';
const C = 'genel';
const U = 'Kentlerde ısı adaları';

const cards = [
  { code: 'vegetation', title: 'bitki örtüsü; bir yerdeki bitkilerin bütünü', pos: 'isim', cefr: 'B2', ipa: '/ˌvedʒəˈteɪʃn/',
    text: "Bir bölgedeki ağaç, çalı, ot gibi bitkilerin hepsini birlikte anlatır; çoğunlukla sayılamaz isim olarak kullanılır: dense vegetation (sık bitki örtüsü), little vegetation. 'Vegetable' (sebze) ile karıştırılmamalı.",
    example: 'After years of drought, the hills had lost almost all of their vegetation.',
    exampleTr: 'Yıllar süren kuraklığın ardından tepelerde neredeyse hiç bitki örtüsü kalmamıştı.',
    synonyms: ['plant life', 'greenery'], family: [] },
  { code: 'surface', title: 'yüzey; bir şeyin dış ya da üst katmanı', pos: 'isim', cefr: 'B2', ipa: '/ˈsɜːfɪs/',
    text: "Bir şeyin en dışta ya da en üstte kalan bölümüdür: the surface of the road, dark surfaces. 'On the surface' kalıbı 'ilk bakışta, görünüşte' demektir. Fiil olarak 'su yüzüne çıkmak, ortaya çıkmak' anlamına gelir.",
    example: 'On a sunny afternoon, the surface of a car park can become too hot to touch.',
    exampleTr: 'Güneşli bir öğleden sonra bir otoparkın yüzeyi, dokunulamayacak kadar ısınabilir.',
    synonyms: ['exterior', 'top layer'], family: [] },
  { code: 'canopy', title: '(ağaçların oluşturduğu) yaprak örtüsü; gölgelik', pos: 'isim', cefr: 'C1', ipa: '/ˈkænəpi/',
    text: "Ormanda ya da sokakta ağaçların dal ve yapraklarının yukarıda oluşturduğu örtüdür: the forest canopy, tree canopy. Bir yatağın, girişin ya da tezgâhın üstüne gerilen kumaş gölgeliği de anlatır. Çoğulu 'canopies'.",
    example: 'In summer, the canopy of the old oaks keeps the path below in deep shade.',
    exampleTr: 'Yazın yaşlı meşelerin yaprak örtüsü, alttaki patikayı koyu bir gölgede tutar.',
    synonyms: ['tree cover', 'awning'], family: [] },
  { code: 'absorb', title: 'emmek, soğurmak; (bilgiyi) özümsemek', pos: 'fiil', cefr: 'B2', ipa: '/əbˈzɔːb/',
    text: "Bir maddenin sıvıyı, ısıyı ya da ışığı içine çekmesidir: absorb heat, absorb water. Mecaz anlamda bilgiyi özümsemeyi, edilgen kalıpta da bir işe dalmayı anlatır: be absorbed in a book. Adı 'absorption'.",
    example: 'A black T-shirt absorbs more sunlight than a white one, so it feels warmer on a sunny day.',
    exampleTr: 'Siyah bir tişört beyaz bir tişörtten daha çok güneş ışığı emer; bu yüzden güneşli bir günde daha sıcak gelir.',
    synonyms: ['soak up', 'take in'], family: ['absorption', 'absorbent'] },
  { code: 'emit', title: '(ısı, ışık, ses, gaz) yaymak, salmak', pos: 'fiil', cefr: 'C1', ipa: '/iˈmɪt/',
    text: "Resmî ve bilimsel metinlerde bir kaynağın dışarıya ısı, ışık, ses ya da gaz vermesini anlatır: emit heat, emit carbon dioxide. Adı 'emission' (salım): carbon emissions. Ek alınca 't' ikizleşir: emitted, emitting.",
    example: 'Old-fashioned light bulbs emit more heat than light, which makes them very wasteful.',
    exampleTr: 'Eski tip ampuller ışıktan çok ısı yayar; bu da onları çok verimsiz kılar.',
    synonyms: ['give off', 'release'], family: ['emission'] },
  { code: 'mitigate', title: '(kötü bir etkiyi) hafifletmek, azaltmak', pos: 'fiil', cefr: 'C1', ipa: '/ˈmɪtɪɡeɪt/',
    text: "Bir zararın, riskin ya da kötü bir etkinin şiddetini azaltmaktır; çoğunlukla 'the effects, the impact, the risk' gibi isimlerle gelir: mitigate the effects of climate change. Sorunu ortadan kaldırmak değil, hafifletmek demektir. Adı 'mitigation'.",
    example: 'Sea walls can mitigate the damage caused by storms, but they cannot prevent it entirely.',
    exampleTr: 'Deniz duvarları fırtınaların verdiği zararı hafifletebilir ama tamamen önleyemez.',
    synonyms: ['alleviate', 'lessen'], family: ['mitigation'] },
  { code: 'intensify', title: 'şiddetlenmek, yoğunlaşmak; şiddetlendirmek', pos: 'fiil', cefr: 'C1', ipa: '/ɪnˈtensɪfaɪ/',
    text: "Bir şeyin gücünün ya da şiddetinin artması ya da artırılmasıdır; hem nesnesiz hem nesneyle kullanılır: the storm intensified; the police intensified their search. Sıfatı 'intense', adı 'intensity'.",
    example: 'The pain in his knee tends to intensify whenever he climbs the stairs.',
    exampleTr: 'Merdiven çıktığında dizindeki ağrı çoğu zaman şiddetleniyor.',
    synonyms: ['strengthen', 'escalate'], family: ['intense', 'intensity'] },
  { code: 'dissipate', title: 'dağılmak, dağılıp yok olmak; dağıtmak', pos: 'fiil', cefr: 'C1', ipa: '/ˈdɪsɪpeɪt/',
    text: "Isının, sisin, dumanın ya da bir duygunun yavaş yavaş dağılıp kaybolmasını anlatır: the heat dissipates, the fog dissipated. Nesneyle 'dağıtmak' demektir. Resmî dilde parayı ya da gücü boşa harcamak anlamına da gelir.",
    example: 'By mid-morning the mist had dissipated, and we could see the whole valley.',
    exampleTr: 'Kuşluk vaktine kadar sis dağılmıştı ve bütün vadiyi görebiliyorduk.',
    synonyms: ['disperse', 'fade away'], family: ['dissipation'] },
  { code: 'outweigh', title: '(önem ya da değer bakımından) ağır basmak, -den büyük olmak', pos: 'fiil', cefr: 'C1', ipa: '/ˌaʊtˈweɪ/',
    text: "Bir şeyin yararının ya da zararının başka bir şeyinkinden büyük olduğunu anlatır: the benefits outweigh the risks (yararları risklerinden ağır basar). Çoğunlukla 'far' ya da 'clearly' ile pekiştirilir. Düzenli fiildir: outweighed.",
    example: 'For most patients, the benefits of the operation far outweigh the risks.',
    exampleTr: 'Hastaların çoğu için ameliyatın yararları, risklerinden çok daha ağır basar.',
    synonyms: ['exceed', 'count for more than'], family: [] },
  { code: 'exacerbate', title: '(kötü bir durumu) daha da kötüleştirmek, ağırlaştırmak', pos: 'fiil', cefr: 'C1', ipa: '/ɪɡˈzæsəbeɪt/',
    text: "Zaten var olan bir sorunu, ağrıyı ya da gerginliği daha kötü hâle getirmektir: exacerbate a problem, exacerbate the symptoms. Resmî bir sözcüktür; gündelik dildeki karşılığı 'make worse'. Adı 'exacerbation'.",
    example: 'Cutting the number of buses would only exacerbate the traffic problems in the city centre.',
    exampleTr: 'Otobüs sayısını azaltmak, kent merkezindeki trafik sorunlarını daha da kötüleştirmekten başka işe yaramaz.',
    synonyms: ['aggravate', 'worsen'], family: ['exacerbation'] },
  { code: 'dense', title: 'sık, yoğun, sıkışık; (sis, duman) koyu', pos: 'sıfat', cefr: 'B2', ipa: '/dens/',
    text: "Bir şeyin parçalarının birbirine çok yakın olduğunu anlatır: dense forest, a dense crowd. Sis ya da duman için 'koyu' demektir. Zarfı 'densely' (densely packed: sıkış sıkış; densely populated: nüfusu yoğun), adı 'density'.",
    example: 'In the dense centre of the old town, the houses almost touch across the narrow streets.',
    exampleTr: 'Eski kentin sık yapılaşmış merkezinde evler, dar sokakların iki yanından neredeyse birbirine değiyor.',
    synonyms: ['thick', 'compact'], family: ['densely', 'density'] },
  { code: 'reflective', title: '(ışığı, ısıyı) yansıtan; düşünceli, dalgın', pos: 'sıfat', cefr: 'C1', ipa: '/rɪˈflektɪv/',
    text: "Işığı ya da ısıyı geri yansıtan yüzeyleri ve malzemeleri anlatır: reflective clothing, a reflective coating. Kişi için 'düşünceli, içe dönük' demektir: in a reflective mood. Fiili 'reflect', adı 'reflection'.",
    example: 'Cyclists are advised to wear reflective jackets so that drivers can see them at night.',
    exampleTr: 'Bisikletlilere, sürücülerin onları geceleyin görebilmesi için ışık yansıtan yelek giymeleri öneriliyor.',
    synonyms: ['reflecting', 'thoughtful'], family: ['reflect', 'reflection'] },
  { code: 'scorching', title: 'kavurucu, çok sıcak', pos: 'sıfat', cefr: 'C1', ipa: '/ˈskɔːtʃɪŋ/',
    text: "Havanın ya da bir günün aşırı sıcak olduğunu anlatır: a scorching day, scorching heat. 'Hot'tan çok daha güçlüdür. Fiili 'scorch' (kavurmak, yakmak): the sun scorched the grass.",
    example: 'We spent the scorching afternoon indoors and only went out for a walk after sunset.',
    exampleTr: 'Kavurucu öğleden sonrayı içeride geçirdik, ancak güneş batınca yürüyüşe çıktık.',
    synonyms: ['blazing', 'sweltering'], family: ['scorch'] },
  { code: 'widespread', title: 'yaygın, geniş bir alana yayılmış', pos: 'sıfat', cefr: 'B2', ipa: '/ˈwaɪdspred/',
    text: "Bir şeyin pek çok yerde ya da pek çok insan arasında görüldüğünü anlatır: widespread support, widespread damage. Yalnız sıfattır; 'yaygın biçimde' için zarf 'widely' kullanılır: widely used.",
    example: 'The storm caused widespread damage, and thousands of homes were left without electricity.',
    exampleTr: 'Fırtına geniş çaplı hasara yol açtı; binlerce ev elektriksiz kaldı.',
    synonyms: ['common', 'extensive'], family: [] },
  { code: 'heat up', title: 'ısınmak; ısıtmak', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌhiːt ˈʌp/',
    text: "Bir yerin ya da bir şeyin ısınmasını anlatır: the room heats up quickly. Nesneyle 'ısıtmak' demektir: heat up the soup. Mecaz olarak bir tartışmanın ya da yarışın kızışmasını da anlatır.",
    example: 'Our kitchen faces west, so it heats up quickly in the afternoon.',
    exampleTr: 'Mutfağımız batıya baktığı için öğleden sonra çabucak ısınıyor.',
    synonyms: ['warm up'], family: [] },
  { code: 'cut back on', title: '(bir şeyin tüketimini, kullanımını) azaltmak, kısmak', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌkʌt ˈbæk ɒn/',
    text: "Bir harcamayı ya da tüketimi azaltmaktır: cut back on sugar, cut back on spending. 'On' olmadan da kullanılır: we've had to cut back (kısıntıya gittik). Adı 'cutback' (kesinti, kısıntı).",
    example: 'My doctor told me to cut back on coffee if I wanted to sleep better.',
    exampleTr: 'Doktorum, daha iyi uyumak istiyorsam kahveyi azaltmamı söyledi.',
    synonyms: ['reduce', 'cut down on'], family: ['cutback'] },
  { code: 'markedly', title: 'belirgin biçimde, gözle görülür ölçüde', pos: 'zarf', cefr: 'C1', ipa: '/ˈmɑːkɪdli/',
    text: "Bir farkın ya da değişimin açıkça fark edilecek kadar büyük olduğunu anlatır: markedly different, rise markedly. Sıfatı 'marked' (belirgin): a marked improvement. Zarfta '-ed' ayrı bir hece olarak okunur: /ˈmɑːkɪdli/.",
    example: 'Her second novel is markedly different in tone from her first.',
    exampleTr: 'İkinci romanı, havası bakımından ilkinden belirgin biçimde farklı.',
    synonyms: ['noticeably', 'considerably'], family: ['marked'] },
  { code: 'disproportionately', title: 'orantısız biçimde, payına düşenden fazla', pos: 'zarf', cefr: 'C1', ipa: '/ˌdɪsprəˈpɔːʃənətli/',
    text: "Bir yükün ya da etkinin bir grubu, o grubun payına düşenden daha çok etkilediğini anlatır: disproportionately affect. Genel olarak bir şeyin olması gerekenden orantısız ölçüde büyük olduğunu da anlatır: disproportionately high. Sıfatı 'disproportionate', karşıtı 'proportionately'.",
    example: 'Rising food prices hit families on low incomes disproportionately, as they spend a larger share of their money on food.',
    exampleTr: 'Gıda fiyatlarındaki artış, paralarının daha büyük bir bölümünü yiyeceğe ayırdıkları için düşük gelirli aileleri orantısız biçimde etkiliyor.',
    synonyms: ['unduly', 'excessively'], family: ['disproportionate', 'proportion'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'gi-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['vegetation', 'surface'],
    level: 'kolay', cefr: 'B2', konu: ['isim'],
    q: 'The hottest districts of most large cities tend to be those with the least ----, since streets lined with trees, private gardens and small parks are rare there and almost every open space has been paved over.',
    options: ['insulation', 'asphalt', 'surface', 'regulation', 'vegetation'], answer: 4,
    explain: "'Vegetation' bitki örtüsü demektir. Cümlenin ikinci yarısı bu semtlerde ağaçlı sokakların, bahçelerin ve küçük parkların seyrek olduğunu, neredeyse bütün açık alanların asfaltla ya da betonla kaplandığını söylüyor; demek ki en sıcak semtlerde en az bulunan şey bitki örtüsüdür. 'Asphalt' (asfalt) tersini söyler: açık alanlar kaplandığına göre bu semtlerde asfalt en az değil, en çoktur. 'Insulation' (yalıtım) ve 'regulation' (düzenleme, kural) biçimce 'vegetation'a benzer ama ağaçların ve parkların azlığıyla açıklanamaz. Ünitenin kartlarından 'surface' (yüzey) da bu bağlamda anlam kurmaz: 'the least surface' bir semtin özelliğini anlatmaz." },

  // ---------- dil bilgisi ----------
  { id: 'gi-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['intensify'],
    level: 'orta', cefr: 'B2', konu: ['zaman: past perfect', 'zaman uyumu'],
    q: 'By the time the council finally ---- its plan to plant more trees in the city centre last spring, many residents ---- to the cooler suburbs, tired of summers whose heat seemed to intensify with every passing year.',
    options: ['has approved / have moved', 'approved / have moved', 'has approved / had moved', 'would approve / moved', 'approved / had moved'], answer: 4,
    explain: "'By the time' ile kurulan zaman cümleciği geçmişte bir anı gösteriyor: belediye planı geçen bahar onayladı ('approved'). Taşınma bu andan önce tamamlanmıştı; bu yüzden ana cümleye past perfect gelir: 'had moved' (çoktan taşınmışlardı). 'Last spring' bitmiş bir geçmiş zamanı gösterdiği için 'has approved' ile kurulan iki seçenek düşer; present perfect bu tür bir zaman ifadesiyle kullanılmaz. 'Approved / have moved' ana cümlede present perfect kullanıyor; geçmişteki bir andan önce biten eylem present perfect ile değil, past perfect ile anlatılır. 'By the time' gibi zaman bağlaçlarından sonra ileride kalan bir anı anlatmak için 'will' ya da 'would' gelmez; geçmişteki bu an düz geçmiş zamanla verilir ('approved'). 'Would approve / moved' seçeneğindeki 'moved' da taşınmanın onaydan önce bittiğini göstermez." },

  { id: 'gi-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'Heatwaves tend to be more dangerous in cities than in the surrounding countryside, partly ---- the slow release of heat from roads and buildings after dark, which gives residents little chance to recover at night.',
    options: ['as a result of', 'because', 'in spite of', 'in case of', 'instead of'], answer: 0,
    explain: "'As a result of' (… sonucunda, … yüzünden) ardından bir isim öbeği alır ve neden bildirir: sıcak hava dalgalarının kentlerde daha tehlikeli olmasının bir nedeni, yolların ve binaların ısıyı karanlık çöktükten sonra yavaş yavaş bırakmasıdır. 'Because' da neden bildirir, ama bir bağlaçtır ve ardından özne ile yüklemi olan bir cümle ister; burada ise yüklemsiz bir isim öbeği geliyor (the slow release of heat …). Seçeneklerde 'because of' olsaydı o da uyardı. 'In spite of' (-e rağmen) ısının yavaş salınmasını tehlikeye karşın var olan bir şey gibi gösterir; oysa o, tehlikenin nedenidir. 'In case of' (… olursa diye, … durumunda) bir önlemi, 'instead of' (… yerine) iki şeyden birinin seçildiğini anlatır; ikisi de cümleye uymaz." },

  { id: 'gi-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['eşleşik bağlaç'],
    q: 'In a typical city centre, neither the fountains in the main square nor the pond in the nearest park ---- much effect on the air temperature more than a short distance away, so planners hoping to cool entire streets tend to rely more on trees and pale paving.',
    options: ['have', 'has', "doesn't have", "don't have", 'are having'], answer: 1,
    explain: "'Neither … nor' (ne … ne de) ile kurulan iki parçalı özneden sonra fiil, kendisine yakın olan özneye uyar; buna yakınlık kuralı (proximity) denir. Fiile yakın özne 'the pond in the nearest park', tekil; bu yüzden fiil 'has' olur: ne meydandaki fıskiyelerin ne de en yakın parktaki gölün, kısa bir uzaklığın ötesinde hava sıcaklığına pek etkisi var. 'Have' ve 'are having' çoğul özneye göre çekimlenmiş; çoğul 'the fountains' fiilden uzakta kaldığı için fiili belirlemez. 'Doesn't have' tekil, ama ikinci bir olumsuzluk ekler: olumsuzluğu 'neither … nor' zaten taşıdığı için fiil olumlu kalır, yoksa çift olumsuz (double negative) olur. 'Don't have' hem çoğul hem çift olumsuzdur. Gündelik konuşmada burada çoğul 'have' de duyulur; standart yazıda ve sınavda yakınlık kuralı geçerlidir." },

  // ---------- boşluklu metin (5 boşluk) ----------
  { id: 'gi-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: ['widespread'],
    level: 'orta', cefr: 'B2', title: "Luke Howard ve Londra'nın iklimi",
    text: "Long before the term 'urban heat island' came into use, a Londoner named Luke Howard noticed that his city seemed to have a climate of its own. A pharmacist by training and a keen amateur scientist, Howard is best remembered today for giving clouds the names we still use, such as cumulus and stratus. (1) ---- naming the clouds, he kept a careful daily record of the weather at his home outside the city, and he later compared his figures with (2) ---- taken in central London. The comparison revealed a clear pattern: the city was generally warmer than the open countryside, and the gap tended to be largest at night. In his book 'The Climate of London', Howard suggested that part of this extra warmth was produced by the city itself, (3) ---- its homes burned huge quantities of coal for heating and cooking. His instruments were simple by today's standards, so his exact figures (4) ---- be treated with some caution. (5) ----, his basic finding has been confirmed many times since, and the effect he described is now known to be widespread in cities around the world.",
    steps: [
      { konu: ['edat'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['Instead of', 'Owing to', 'Besides', 'Contrary to', 'Except for'], answer: 2,
        explain: "Önceki cümle Howard'ın bulutlara bugün de kullandığımız adları verdiğini söylüyor; bu cümle ona bir iş daha ekliyor: hava durumunu her gün kaydetmesi. Bu ekleme ilişkisini 'besides' (… -in yanı sıra) kurar. 'Instead of' (… yerine) bulutları adlandırmadığını ima eder ve önceki cümleyle çelişir. 'Owing to' (… yüzünden) bulutları adlandırmayı hava kaydı tutmanın nedeni yapar. 'Except for' (… dışında) eklemez, dışarıda bırakır; 'contrary to' (-in aksine) da burada anlam kurmaz." },
      { konu: ['kelime', 'isim'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['measurements', 'decisions', 'photographs', 'complaints', 'instructions'], answer: 0,
        explain: "Howard kendi tuttuğu sıcaklık kayıtlarını kent merkezinde alınan ölçümlerle karşılaştırdı; sonraki cümlede bu karşılaştırmanın kentin daha sıcak olduğunu gösterdiği söyleniyor. 'Measurements taken' (alınan ölçümler) doğal bir eşdizimdir. 'Decisions taken' (alınan kararlar), 'photographs taken' (çekilen fotoğraflar) ve 'instructions taken' (alınan talimatlar) da 'take' fiiliyle kurulur, ama hiçbiri sıcaklık kayıtlarıyla karşılaştırılıp bir sıcaklık farkı ortaya koyamaz. 'Complaints' (şikâyetler) için de aynısı geçerli." },
      { konu: ['bağlaç'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['although', 'since', 'unless', 'until', 'so that'], answer: 1,
        explain: "Boşluktan sonraki yan cümle, fazladan ısının kentin kendisinden geldiği düşüncesinin gerekçesini veriyor: evlerde ısınmak ve yemek pişirmek için çok büyük miktarda kömür yakılıyordu. Neden bildiren bağlaç 'since' (-dığı için, çünkü). 'Although' (-dığı hâlde, -mesine rağmen) karşıtlık kurar; oysa kömür yakılması fazladan ısıyla çelişmiyor, onu açıklıyor. 'Unless' (-medikçe) koşul, 'until' (-e kadar) zaman, 'so that' (-sin diye) amaç bildirir; üçü de neden-sonuç ilişkisini bozar." },
      { konu: ['kip (modal)'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ["needn't", 'cannot', 'would rather', "can't have", 'should'], answer: 4,
        explain: "Cümle bir öneri sunuyor: aletler bugünkülere göre basit olduğu için kesin sayılara biraz temkinle yaklaşmak gerekir. Bunu 'should' (-meli) karşılar. 'Needn't' (gerekmez) mantığı tersine çevirir: basit aletler temkini gereksiz değil, gerekli kılar. 'Can't have' ardından 'be' değil 'been' ister ve geçmişe dönük bir çıkarım bildirir; oysa cümle bugün için bir öneri yapıyor. 'Cannot' (-emez) temkinle yaklaşmayı olanaksız gösterir; oysa basit aletler temkini gerekli kılar. 'Would rather' (tercih etmek) bir kişinin isteğini anlatır; sayılar bir şeyi tercih edemez." },
      { konu: ['bağlantı zarfı'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['As a result', 'Likewise', 'For instance', 'Even so', 'In short'], answer: 3,
        explain: "Önceki cümle Howard'ın sayılarına temkinle yaklaşılması gerektiğini söylüyor; bu cümle ise temel bulgusunun o günden bu yana defalarca doğrulandığını söylüyor. Bir çekincenin ardından gelen bu karşıtlığı 'even so' (yine de) kurar. 'As a result' (bunun sonucunda) temkin gereğini doğrulanmanın nedeni yapar. 'Likewise' (aynı biçimde) benzerlik, 'for instance' (örneğin) örnek bildirir. 'In short' (kısacası) öncekini özetler; oysa bu cümle öncekini özetlemiyor, ona karşı bir şey söylüyor." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'gi-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['mitigate', 'outweigh'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although green roofs can help to mitigate the urban heat island effect, ----.',
    options: [
      'many building owners are put off by the cost of installing and looking after one',
      'they also give bees, butterflies and birds a place to feed in the middle of a busy city',
      'this is one reason why several cities now help owners to pay for them',
      'their benefits are generally thought to outweigh their fairly modest cost',
      'they can also soak up rainwater that would otherwise rush straight into the drains',
    ], answer: 0,
    explain: "'Although' karşıtlık kurar: yeşil çatılar kentteki ısı adası etkisini hafifletmeye yardım edebilir, ama birçok bina sahibi bir yeşil çatı kurmanın ve bakımını üstlenmenin maliyetinden çekinir. Arılara, kelebeklere ve kuşlara beslenecek yer sağlaması ve yağmur suyunu emmesi yeşil çatıların başka yararlarını ekliyor; karşıtlık kurmuyor. 'This is one reason why' ile başlayan seçenek karşıtlık yerine sonuç bildiriyor. Yararlarının düşük maliyetinden ağır bastığını söyleyen seçenek de ilk yarıyla aynı yönde; 'although' ile bağlanınca anlamsız bir cümle çıkar." },

  { id: 'gi-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['koşul'],
    q: '----, unless cities make sure that elderly people who live alone have somewhere cool to go during the hottest hours.',
    options: [
      'Doctors have long known that very high temperatures put an extra strain on the human heart',
      'Heatwaves have become more frequent in many parts of Europe over recent decades',
      'Future heatwaves could be as deadly in crowded urban areas as the one that hit Europe in 2003',
      'Many local councils have started planting trees along their busiest roads',
      'Older people are often slower to notice that they are becoming dangerously hot',
    ], answer: 2,
    explain: "Verilen yarıdaki 'unless' (-medikçe, … sağlanmazsa) bir koşul kuruyor: kentler, yalnız yaşayan yaşlıların en sıcak saatlerde gidebilecekleri serin bir yer olmasını sağlamazsa. Bu koşula bağlanabilecek sonuç, ileride gelecek sıcak hava dalgalarının kalabalık kent bölgelerinde 2003'te Avrupa'yı vuran dalga kadar ölümcül olabileceğidir; o sıcak hava dalgasıyla ilişkilendirilen ölümlerin çoğu yaşlılar arasındaydı. Aşırı sıcağın kalbe yük bindirdiği, sıcak hava dalgalarının Avrupa'da sıklaştığı, belediyelerin ağaç dikmeye başladığı ve yaşlıların aşırı ısındıklarını geç fark ettiği doğru olabilecek bilgiler, ama hiçbiri kentlerin alacağı bu önleme bağlı değil; koşulla birleşince anlamsız cümleler çıkar." },

  // ---------- çeviri ----------
  { id: 'gi-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['markedly'],
    level: 'orta', cefr: 'B2', konu: ['isim-fiil ve mastar'],
    q: 'Measuring how much warmer a city is than its surroundings is harder than it sounds, because the result can vary markedly depending on where the thermometers are placed.',
    options: [
      'Bir kentin çevresinden ne kadar sıcak olduğunu ölçmek göründüğünden zordur, çünkü sonuç termometrelerin türüne göre hafif biçimde değişebilir.',
      'Bir kentin çevresinden ne kadar sıcak olduğunu ölçmek sanıldığı kadar zor değildir, ama sonuç termometrelerin yerine göre belirgin biçimde değişebilir.',
      'Bir kentin çevresinden ne kadar sıcak olduğunu ölçmek göründüğünden zordur, çünkü sonuç termometrelerin türüne göre belirgin biçimde değişebilir.',
      'Bir kentin çevresinden ne kadar sıcak olduğunu ölçmek göründüğünden zordur, çünkü sonuç termometrelerin yerine göre belirgin biçimde değişebilir.',
      'Bir kentin çevresinden daha sıcak olup olmadığını anlamak göründüğünden zordur, çünkü sonuç termometrelerin türüne göre belirgin biçimde değişebilir.',
    ], answer: 3,
    explain: "İngilizce cümlenin öznesi bir isim-fiil öbeği: 'Measuring how much warmer a city is than its surroundings' (bir kentin çevresinden ne kadar sıcak olduğunu ölçmek). Yüklem 'is harder than it sounds' (göründüğünden zordur); gerekçe de 'because the result can vary markedly depending on where the thermometers are placed' (çünkü sonuç, termometrelerin nereye konduğuna göre belirgin biçimde değişebilir). Doğru çeviri bunların hepsini korur. 'Termometrelerin türüne göre belirgin biçimde' diyen çeviri yeri türe çeviriyor. 'Türüne göre hafif biçimde değişebilir' yer yerine türden söz ediyor ve 'markedly'yi (belirgin biçimde) zayıflatıyor. 'Daha sıcak olup olmadığını anlamak' diye başlayan çeviri ölçülen şeyi değiştiriyor, gerekçede de termometrelerin türünü anıyor. 'Sanıldığı kadar zor değildir' diyen çeviri yargıyı tersine çeviriyor; İngilizcede ölçmek göründüğünden zordur." },

  { id: 'gi-c2', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['disproportionately', 'dense'],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'Birçok kentte yaz sıcağı, ağaçların seyrek ve binaların sık olduğu yoksul mahallelerde yaşayanları orantısız biçimde etkiler.',
    options: [
      'In many cities, summer heat disproportionately affects people living in newer neighbourhoods where trees are scarce and buildings are widely spaced.',
      'In many cities, summer heat disproportionately affects people living in newer neighbourhoods where trees are scarce and buildings are densely packed.',
      'In many cities, people living in poorer neighbourhoods where trees are scarce and buildings are densely packed complain disproportionately about summer heat.',
      'In some cities, summer heat disproportionately affects people living in newer neighbourhoods where trees are scarce and buildings are densely packed.',
      'In many cities, summer heat disproportionately affects people living in poorer neighbourhoods where trees are scarce and buildings are densely packed.',
    ], answer: 4,
    explain: "Türkçe cümle yaz sıcağının kimi daha çok etkilediğini bir sıfat cümleciğiyle anlatıyor: 'ağaçların seyrek ve binaların sık olduğu yoksul mahallelerde yaşayanlar'. Doğru çeviri bunu 'people living in poorer neighbourhoods where trees are scarce and buildings are densely packed' diye kurar; 'orantısız biçimde etkiler'i de 'disproportionately affects' karşılar. 'In many cities … newer neighbourhoods' diyen çeviride mahalleler yoksul değil, daha yeni. 'In some cities' diye başlayan çeviri 'birçok kent'i 'bazı kentler'e daraltıyor, mahalleleri de 'newer' yapıyor. 'Buildings are widely spaced' diyen çeviri binaları seyrekleştiriyor ve yoksul mahalleleri yeni mahallelere çeviriyor. 'Complain disproportionately about summer heat' ilişkiyi değiştiriyor: sıcağın insanları etkilemesi yerine insanların sıcaktan yakınmasından söz ediyor." },

  // ---------- okuma parçası (4 soru, YDS biçimi) ----------
  { id: 'gi-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T,
    cards: ['surface', 'absorb', 'emit', 'dissipate', 'exacerbate', 'reflective', 'markedly'],
    level: 'zor', cefr: 'C1', title: 'Kentler neden daha sıcak?',
    text: "On a calm summer night, the centre of a large city can be several degrees warmer than the farmland just beyond its edge. This difference, known as the urban heat island effect, is often small at midday but shows up most markedly after dark. Much of the explanation lies in what cities are built from. Asphalt, dark roofing and other such surfaces absorb a large share of the sunlight that falls on them and store it as heat, which they go on emitting for hours after sunset. Where tall buildings stand close together, they make matters worse by trapping warm air at street level and sheltering it from winds that would otherwise help the heat to dissipate. People add warmth of their own, too, since engines, factories and air conditioners all release waste heat into the streets. Air conditioning is a particularly awkward case: a unit that keeps one flat comfortable does not get rid of heat; it moves it outdoors and adds some of its own, so heavy use during a heatwave may exacerbate the very problem it is meant to relieve. The effect can be reduced, however. Trees and other plants provide shade and cool the air as water evaporates from their leaves, while roofs and pavements made of pale, reflective materials take in far less heat than dark ones. Fountains and ponds can also help in their immediate surroundings. No single measure will remove the effect altogether, but used together, they could make city summers noticeably more bearable.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, tall buildings that stand close together ----.',
        options: [
          'reflect much of the sunlight that would otherwise reach the street',
          'release more waste heat than all of the city\'s engines and factories',
          'hold heat near the ground and keep breezes from clearing it away',
          'matter far more in the middle of the day than they do after sunset',
          'keep the streets below them cool by casting long shadows across them',
        ], answer: 2,
        explain: "Parçaya göre birbirine yakın yüksek binalar sıcak havayı sokak düzeyinde tutuyor ve onu, ısının dağılmasına yardım edecek rüzgârlardan koruyor; yani ısıyı yere yakın tutup esintinin onu alıp götürmesini engelliyor. Binaların güneş ışığını yansıttığı ya da gölge düşürüp sokakları serinlettiği parçada geçmiyor; parça tersine, binaların durumu kötüleştirdiğini söylüyor. Binaların motorlardan ve fabrikalardan daha çok atık ısı saldığı da parçada yok. Binaların en çok öğle saatlerinde önem taşıdığı da parçada geçmiyor; parçaya göre fark asıl karanlık çökünce belirginleşiyor." },
      { konu: ['ayrıntı'],
        q: 'It is stated in the passage that air conditioning ----.',
        options: [
          'makes rooms cooler by transferring their heat to the air outside',
          'is the main reason why city centres stay warm long after dark',
          'uses far less electricity today than it did a few decades ago',
          'barely affects the temperature outside the buildings it cools',
          'is used less often in neighbourhoods that have plenty of trees',
        ], answer: 0,
        explain: "Parçaya göre bir daireyi rahat tutan klima ısıyı yok etmiyor, dışarı taşıyor ve kendi ürettiği ısıyı da ekliyor; bu yüzden sıcak hava dalgasındaki yoğun kullanım, gidermeye çalıştığı sorunu ağırlaştırabilir. Klimanın kent merkezlerinin geceleri sıcak kalmasının başlıca nedeni olduğu parçada geçmiyor; parça klimayı motorlar ve fabrikalarla birlikte atık ısı kaynaklarından biri sayıyor. Eskisinden daha az elektrik kullandığı ve ağaçlı mahallelerde daha az kullanıldığı da parçada yok. Dışarıdaki sıcaklığı pek etkilemediğini söyleyen seçenek ise parçayla çelişiyor." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that ----.',
        options: [
          'the heat island effect is mainly a problem around midday rather than in the hours after dark',
          'a strong wind at night would probably narrow the gap between a city and its surroundings',
          'dark roofs probably lose their stored heat more quickly than pale ones do',
          'air conditioners would no longer be needed in a city if every one of its roofs were painted white',
          'most of the heat in a city centre at night is likely to come from car engines',
        ], answer: 1,
        explain: "Parçaya göre yüksek binalar sıcak havayı, ısının dağılmasına yardım edecek rüzgârlardan koruyor; parça da farkı durgun bir yaz gecesi örneğiyle anlatarak açılıyor. Demek ki geceleyin esen güçlü bir rüzgâr ısının dağılmasına yardım eder ve kentle çevresi arasındaki farkı büyük olasılıkla küçültür. Etkinin asıl öğle saatlerinde sorun olduğunu söyleyen seçenek parçayla çelişiyor. Koyu çatıların ısıyı açık renklilerden daha çabuk kaybettiği, bütün çatılar beyaza boyanırsa klimaya gerek kalmayacağı ve gece kent merkezindeki ısının çoğunun araç motorlarından geldiği parçadan çıkmıyor; parça yalnız koyu yüzeylerin daha çok ısı aldığını, motorların da atık ısı kaynaklarından biri olduğunu söylüyor." },
      { konu: ['başlık'],
        q: 'Which of the following titles best sums up the passage?',
        options: [
          'A Short History of Weather Records Kept in London',
          'Why Cities Run Hot and How They Can Be Cooled',
          'Air Conditioning: The Hidden Cause of Urban Heat',
          'How Trees Turn Water into Cooler Air',
          'Why the Countryside Is Warming Faster Than Cities',
        ], answer: 1,
        explain: "Parça önce kentlerin neden çevrelerinden daha sıcak olduğunu (ısıyı depolayan koyu yüzeyler, sık dizilmiş binalar, atık ısı, klima), sonra neler yapılabileceğini (ağaçlar, açık renkli yüzeyler, su) anlatıyor. Bu bütünü, kentlerin neden ısındığını ve nasıl serinletilebileceğini söyleyen başlık karşılar. Klimayı ısınmanın gizli nedeni sayan başlık parçanın bir bölümünü abartıyor; ağaçların suyla havayı nasıl serinlettiği de yalnız bir ayrıntı. Londra'daki hava kayıtlarının tarihi parçada yok. Kırsalın kentlerden daha hızlı ısındığı da parçada geçmiyor; parça tersine kentlerin daha sıcak olduğunu söylüyor." },
    ] },

  // ---------- diyalog tamamlama ----------
  { id: 'gi-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['heat up', 'scorching', 'cut back on'],
    level: 'kolay', cefr: 'B2', konu: ['bağlam'],
    q: "Nermin: My flat's right under the roof, and it's already heating up, even though it's only nine in the morning.\nKaan: Mine's just the same. By the way, some of the neighbours want to turn the roof into a garden.\nNermin: ----\nKaan: Apparently it would. The soil and plants would shield the concrete from direct sun, so we might even be able to cut back on air conditioning.\nNermin: Then count me in. After last year's scorching August, I'd do almost anything for a cooler bedroom.",
    options: [
      "Would the building's owners ever agree to pay for something like that?",
      "Wouldn't it be dangerous to have people walking around up there?",
      'Would that actually stop the top floors from getting so hot?',
      'Would you be willing to help with the watering every single week?',
      'How long would it take to get everything planted, do you think?',
    ], answer: 2,
    explain: "Kaan'ın cevabı 'Apparently it would' (görünüşe göre öyle) diye başlıyor; toprakla bitkilerin betonu doğrudan güneşten koruyacağını, klimayı bile daha az kullanabileceklerini söylüyor. Bu cevap, çatı bahçesinin üst katların bu kadar ısınmasını gerçekten önleyip önlemeyeceğini soran soruya uyar; Nermin'in 'Then count me in' deyip daha serin bir yatak odası için neredeyse her şeyi yapacağını söylemesi de bunu doğruluyor. Bina sahiplerinin parayı ödeyip ödemeyeceği ve Kaan'ın her hafta sulamaya yardım edip etmeyeceği sorularına 'it would' ile cevap verilmez; özne 'they' ya da 'I' olurdu. Çatıda dolaşmanın tehlikeli olup olmayacağı sorusuna Kaan'ın serinlikten söz eden açıklaması uymaz. Her şeyin ne kadar sürede dikileceği sorusuna da 'Apparently it would' denemez." },

  // ---------- akışı bozan cümle ----------
  { id: 'gi-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['canopy', 'surface', 'heat up'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Trees help to keep city streets cool in two quite different ways.',
      'Many young street trees struggle to survive, because their roots have too little room beneath the pavement.',
      'The canopy they form blocks much of the sunlight that would otherwise strike roads and pavements, so these surfaces heat up far less.',
      'They also draw water up from the soil and release it through tiny pores in their leaves, and as this water evaporates, it takes heat from the surrounding air.',
      'Together, these two effects can make a tree-lined street feel noticeably cooler on a summer afternoon than a nearby street with no trees at all.',
    ], answer: 1,
    explain: "Parça ağaçların sokakları iki ayrı yoldan serinlettiğini anlatıyor. I. cümle bu iki yolu duyuruyor; III. cümle birincisini (yaprak örtüsünün gölgesi), IV. cümle 'also' ile ikincisini (yapraklardan buharlaşan suyun havadan ısı alması) veriyor; V. cümle de 'these two effects' ile ikisini topluyor. II. cümle genç sokak ağaçlarının kökleri sığacak yer bulamadığı için hayatta kalmakta zorlandığından söz ediyor; ağaçlarla ilgili ama serinletme yollarını anlatmadığı için I. cümleden ilk yolu anlatan III. cümleye geçişi kesiyor." },
];

export default { id: 'genel-isi-adalari', course: C, title: U, order: 4, cards, items };
