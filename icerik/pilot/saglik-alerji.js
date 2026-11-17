// iDil › Sağlık bilimleri › Alerjiler.
// Tümü özgün: Claude yazdı (17 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Metinler genel bilgi verir; tanı, tedavi ya da beslenme önerisi değildir. Diyalogdaki kişiler kurgusaldır.
// Olgular (çoğaltma 3. tur planı §7.9 ve yerleşik bilgi; yalnız olgular, metin özgün; birincil kaynaklar bu oturumda
// açılıp yeniden doğrulanmadı):
// - Charles Blackley (İngiliz hekim, kendisi de saman nezlesi çekiyordu) 1873'te yayımladığı çalışmada kendi üzerinde
//   denedi: çiçeklenmiş ot maddesini kolundaki çiziklere sürdü, burnuna koydu; havaya bıraktığı yapışkan cam lamlara
//   konan taneleri saydı ve tane miktarının belirtileriyle birlikte inip çıktığını gördü (plan; ayrıntılar yerleşik bilgi);
// - "Allergy" sözcüğünü Avusturyalı hekim Clemens von Pirquet 1906'da, vücudun daha önce karşılaştığı bir maddeye
//   değişmiş tepkisini anlatmak için önerdi (plan);
// - işleyiş: bağışıklık sistemi zararsız bir maddeyi tehdit sanar, ilk karşılaşmada belirti olmadan IgE antikorları
//   üretir; bunlar mast hücrelerine bağlanır; yeniden karşılaşınca mast hücreleri histamin ve başka kimyasallar salar;
//   hapşırık, kaşıntı, şişlik, döküntü; antihistaminiklerin histaminin bazı etkilerini engellemesi (plan, yerleşik bilgi);
// - hijyen varsayımı: David Strachan 1989'da büyük kardeşi olan çocuklarda saman nezlesinin daha az görüldüğünü yazdı ve
//   erken çocuklukta kardeşlerden geçen enfeksiyonların koruyabileceğini önerdi; "eski dostlar" varsayımı Graham Rook'la
//   anılır ("associated with"); kanıtın kesin olmadığı ve temizliğin tek başına suçlu olmadığı temkinli yazıldı;
// - LEAP (Birleşik Krallık, sonuçlar 2015): yüksek riskli bebeklere yer fıstığını erken ve düzenli vermek, beş yaşında yer
//   fıstığı alerjisini büyük ölçüde azalttı ("was reported to be roughly 80 per cent"); kılavuzların sonradan değiştiği ve
//   bunun yalnız hekim gözetiminde yapılması gerektiği yazıldı; yer fıstığının baklagil olması yerleşik bilgi;
// - anafilaksi: ağır, dakikalar içinde gelişebilen, yaşamı tehdit edebilen tepki; dudak, dil ya da boğazda şişlik, nefes
//   darlığı, baygınlık hissi; adrenalin oto-enjektörüyle ilk müdahale, ardından ambulans çağrılır, çünkü belirtiler
//   saatler sonra dönebilir (plan; ikinci evre yerleşik bilgi, temkinli "can return");
// - sanayileşmiş ülkelerde alerjilerin son on yıllarda artması ("seem to be"), çocukların süt ve yumurta alerjisinden
//   çoğu zaman kurtulması, iklim değişikliğinin polen mevsimini uzatabilmesi ("is thought to") temkinli yazıldı (plan);
// - yerleşik bilgi (sayı yazılmadı): eski antihistaminiklerin uyku yapması; bir alerjisi olanın başka alerji (astım,
//   egzama) geliştirme olasılığının daha yüksek olması; kendini besin alerjisi sanan yetişkinlerin testle doğrulananlardan
//   çok olması; test olumluluğunun her zaman belirti demek olmaması; ev tozu akarlarının yatakta yaşayıp deri
//   döküntüleriyle beslenmesi; polen ile bazı çiğ meyvelerdeki proteinlerin benzerliği (ağız alerjisi) ve pişirmenin bu
//   proteinlerin biçimini değiştirmesi; rüzgârla taşınan polenin uzaklara gidebilmesi.

const T = 'taslak';
const C = 'saglik';
const U = 'Alerjiler';

const cards = [
  // ---------- isim ----------
  { code: 'pollen', title: 'polen, çiçek tozu', pos: 'isim', cefr: 'B2', ipa: '/ˈpɒlən/',
    text: "Bitkilerin üremek için saldığı ince toz. Sayılamaz isimdir: much pollen, a pollen grain (bir polen tanesi). Sağlık metinlerinde öbek olarak geçer: pollen count (havadaki polen yoğunluğu), pollen season (polen mevsimi), pollen allergy (polen alerjisi).",
    example: 'After the storm, the windows of our car were covered in a fine layer of yellow pollen.',
    exampleTr: 'Fırtınadan sonra arabamızın camları ince, sarı bir polen tabakasıyla kaplanmıştı.',
    synonyms: [], family: [] },
  { code: 'rash', title: '(deride) kızarıklık, döküntü', pos: 'isim', cefr: 'B2', ipa: '/ræʃ/',
    text: "Deride beliren kırmızı lekeler ya da kabarıklık: come out in a rash (döküntü çıkarmak), a skin rash. Mecaz olarak 'bir anda çoğalan şey' de demektir: a rash of complaints. Sıfat olan 'rash' (düşüncesiz, aceleci) ayrı bir sözcüktür: a rash decision.",
    example: 'The baby came out in a red rash after trying a new washing powder.',
    exampleTr: 'Bebeğin üzerinde yeni bir çamaşır tozunu denedikten sonra kırmızı bir döküntü çıktı.',
    synonyms: ['spots', 'skin eruption'], family: [] },
  { code: 'hygiene', title: 'hijyen, temizlik (sağlık için)', pos: 'isim', cefr: 'B2', ipa: '/ˈhaɪdʒiːn/',
    text: "Hastalıkları önlemek için uyulan temizlik kuralları: personal hygiene (kişisel temizlik), food hygiene (gıda hijyeni), hand hygiene. Sayılamaz isimdir. Sıfatı 'hygienic' (hijyenik, temiz); karşıtı 'unhygienic'.",
    example: 'Hospital staff receive regular training in hand hygiene to stop infections from spreading.',
    exampleTr: 'Hastane çalışanları, enfeksiyonların yayılmasını önlemek için el hijyeni konusunda düzenli eğitim alır.',
    synonyms: ['cleanliness', 'sanitation'], family: ['hygienic'] },
  { code: 'sensitivity', title: '(bir maddeye) duyarlılık, hassasiyet', pos: 'isim', cefr: 'B2', ipa: '/ˌsensəˈtɪvəti/',
    text: "Tıpta vücudun bir maddeye olağandan güçlü tepki vermesi: sensitivity to light (ışığa duyarlılık), sensitivity to gluten. 'To' ile kurulur. Gündelik dilde başkalarının duygularını gözetme inceliği de demektir. Sıfatı 'sensitive (to)'.",
    example: 'Her sensitivity to bright light gets worse whenever she has a headache.',
    exampleTr: 'Başı ağrıdığında parlak ışığa duyarlılığı artıyor.',
    synonyms: ['susceptibility', 'reaction'], family: ['sensitive'] },
  { code: 'asthma', title: 'astım', pos: 'isim', cefr: 'B2', ipa: '/ˈæsmə/',
    text: "Hava yollarının daralıp şiştiği, nefes darlığı ve hırıltıyla seyreden süregen hastalık. Okunuşta 'th' sessizdir. Sık kalıplar: an asthma attack (astım krizi), suffer from asthma. Sıfatı ve 'astım hastası' anlamındaki ismi 'asthmatic'.",
    example: 'My cousin always carries an inhaler with her because she has had asthma since childhood.',
    exampleTr: 'Kuzenim çocukluğundan beri astımlı olduğu için yanında hep bir inhaler taşıyor.',
    synonyms: [], family: ['asthmatic'] },
  // ---------- fiil ----------
  { code: 'tolerate', title: '(bir şeye) dayanabilmek, kaldırabilmek; hoş görmek', pos: 'fiil', cefr: 'C1', ipa: '/ˈtɒləreɪt/',
    text: "Sağlıkta vücudun bir ilacı, besini ya da koşulu sorun çıkarmadan kaldırabilmesi: tolerate a drug well (bir ilacı iyi tolere etmek). Gündelik dilde hoşa gitmeyen bir şeye katlanmak, göz yummak: I won't tolerate rudeness. Adı 'tolerance', sıfatı 'tolerant'.",
    example: 'Some plants can tolerate long periods without water, which makes them ideal for a dry garden.',
    exampleTr: 'Bazı bitkiler uzun süre susuz kalmaya dayanabilir; bu da onları kurak bir bahçe için ideal kılar.',
    synonyms: ['put up with', 'bear', 'withstand'], family: ['tolerance', 'tolerant'] },
  { code: 'overreact', title: 'aşırı tepki göstermek, abartılı karşılık vermek', pos: 'fiil', cefr: 'C1', ipa: '/ˌəʊvəriˈækt/',
    text: "Bir duruma gerektiğinden güçlü tepki vermek. Nesne almaz; neye karşı olduğu 'to' ile söylenir: overreact to criticism. Bilim metinlerinde bağışıklık sistemi ya da piyasalar için de kullanılır. Adı 'overreaction'.",
    example: 'He tends to overreact when someone makes a small joke about his cooking.',
    exampleTr: 'Biri yemekleriyle ilgili ufak bir şaka yaptığında aşırı tepki gösterme eğiliminde.',
    synonyms: ['exaggerate', 'go too far'], family: ['overreaction'] },
  { code: 'sneeze', title: 'hapşırmak', pos: 'fiil', cefr: 'B2', ipa: '/sniːz/',
    text: "Burundaki bir tahriş yüzünden havayı birden ve sesle dışarı atmak. Aynı biçimde isim de olur: a loud sneeze (yüksek sesli bir hapşırık). İngilizcede hapşırana 'Bless you!' denir. Yakın anlamlı 'cough' öksürmektir; ikisi sınavda birbirinin çeldiricisi olur.",
    example: 'I always sneeze two or three times when I step out into bright sunshine.',
    exampleTr: 'Parlak güneşe çıktığımda hep iki üç kez hapşırırım.',
    synonyms: [], family: [] },
  { code: 'swell', title: 'şişmek, kabarmak', pos: 'fiil', cefr: 'B2', ipa: '/swel/',
    text: "Vücudun bir bölümünün olağandan büyümesi; çoğu zaman 'up' ile: My ankle swelled up. Düzensiz ortacı 'swollen' sıfat olarak sık geçer: a swollen knee. Adı 'swelling' (şişlik). Mecaz olarak sayının artması da demektir: the crowd swelled.",
    example: 'His knee began to swell soon after he fell off his bike, so we put some ice on it.',
    exampleTr: 'Bisikletten düştükten kısa süre sonra dizi şişmeye başladı, biz de üstüne biraz buz koyduk.',
    synonyms: ['puff up', 'enlarge'], family: ['swelling', 'swollen'] },
  { code: 'itch', title: 'kaşınmak; kaşındırmak', pos: 'fiil', cefr: 'B2', ipa: '/ɪtʃ/',
    text: "Derinin kaşıma isteği uyandırması: My eyes itch. Kaşıma eylemi ise 'scratch'tir; ikisi karıştırılmaz. İsim olarak 'kaşıntı' (an itch), mecaz olarak 'bir şeyi yapmak için can atmak' (be itching to do something). Sıfatı 'itchy'.",
    example: 'This wool jumper makes my neck itch, so I only wear it over a shirt.',
    exampleTr: 'Bu yün kazak boynumu kaşındırıyor, o yüzden yalnız gömleğin üstüne giyiyorum.',
    synonyms: ['tickle', 'prickle'], family: ['itchy'] },
  // ---------- sıfat ----------
  { code: 'harmless', title: 'zararsız, tehlikesiz', pos: 'sıfat', cefr: 'B1', ipa: '/ˈhɑːmləs/',
    text: "Kimseye zarar vermeyen, tehlike taşımayan: a harmless substance (zararsız bir madde), harmless fun (zararsız eğlence). '-less' eki yokluk bildirir; karşıtı 'harmful' (zararlı). Kök isim ve fiil 'harm' (zarar; zarar vermek).",
    example: "Don't worry about that big spider in the garden; it looks scary, but it's completely harmless.",
    exampleTr: 'Bahçedeki o büyük örümcek için endişelenme; korkunç görünüyor ama tamamen zararsız.',
    synonyms: ['safe', 'innocuous'], family: ['harm', 'harmful'] },
  { code: 'allergic', title: 'alerjik; (bir şeye) alerjisi olan', pos: 'sıfat', cefr: 'B1', ipa: '/əˈlɜːdʒɪk/',
    text: "Kişi için 'to' ile kurulur: be allergic to nuts (fıstığa alerjisi olmak). Tepki için de kullanılır: an allergic reaction. Okunuşta vurgu ikinci hecededir. Adı 'allergy' (/ˈælədʒi/; vurgu ilk hecede), alerjiye yol açan maddeye 'allergen' denir.",
    example: "My brother can't come to the picnic because he's allergic to bees.",
    exampleTr: 'Erkek kardeşim arılara alerjisi olduğu için pikniğe gelemiyor.',
    synonyms: ['hypersensitive'], family: ['allergy', 'allergen'] },
  { code: 'severe', title: 'ağır, şiddetli, ciddi', pos: 'sıfat', cefr: 'B2', ipa: '/sɪˈvɪə(r)/',
    text: "Hastalık, ağrı ya da tepki için 'ağır, şiddetli': a severe reaction, severe pain. Karşıtı 'mild' (hafif). Kişi için 'sert, katı' anlamı da var: a severe teacher. Zarfı 'severely', adı 'severity' (ağırlık, şiddet).",
    example: 'The roads were closed for two days because of severe flooding.',
    exampleTr: 'Ağır sel yüzünden yollar iki gün kapalı kaldı.',
    synonyms: ['serious', 'acute', 'intense'], family: ['severely', 'severity'] },
  { code: 'life-threatening', title: 'hayati tehlike taşıyan, ölümcül olabilen', pos: 'sıfat', cefr: 'B2', ipa: '/ˈlaɪf ˌθretnɪŋ/',
    text: "Ölüme yol açabilecek kadar tehlikeli: a life-threatening illness, life-threatening injuries. İsmin önünde tireyle yazılır. 'Fatal' ölümle sonuçlanan demektir; 'life-threatening' ise ölüm tehlikesi taşıyandır, ölümle sonuçlanmış olması gerekmez.",
    example: 'The climber was rescued from the mountain with serious but not life-threatening injuries.',
    exampleTr: 'Dağcı, ağır ama hayati tehlike taşımayan yaralarla dağdan kurtarıldı.',
    synonyms: ['potentially fatal', 'critical'], family: [] },
  { code: 'airborne', title: 'havada taşınan, havayla yayılan; havada, uçuşta', pos: 'sıfat', cefr: 'C1', ipa: '/ˈeəbɔːn/',
    text: "Havada asılı duran ya da havayla bir yerden ötekine taşınan: airborne dust, airborne particles. Hastalık için 'havadan bulaşan' demektir. Uçak için 'havalanmış, uçuşta': The plane was airborne within minutes.",
    example: 'Workers in the old factory wore masks to protect themselves from airborne dust.',
    exampleTr: 'Eski fabrikadaki işçiler kendilerini havadaki tozdan korumak için maske takıyordu.',
    synonyms: ['carried in the air', 'in the air'], family: [] },
  // ---------- zarf ----------
  { code: 'dramatically', title: 'çarpıcı biçimde, büyük ölçüde', pos: 'zarf', cefr: 'B2', ipa: '/drəˈmætɪkli/',
    text: "Bir değişikliğin büyük ve dikkat çekici olduğunu anlatır: rise dramatically (çarpıcı biçimde artmak), dramatically different. Çoğu zaman artış, düşüş ya da değişim fiilleriyle gelir. Sıfatı 'dramatic'. 'Tiyatroyla ilgili' anlamı da var ama sınavda çoğunlukla değişimin büyüklüğünü anlatır.",
    example: 'The price of tomatoes rose dramatically after the summer floods destroyed many farms.',
    exampleTr: 'Yaz selleri birçok çiftliği yok edince domatesin fiyatı büyük ölçüde arttı.',
    synonyms: ['sharply', 'considerably', 'markedly'], family: ['dramatic'] },
  // ---------- öbek fiil ----------
  { code: 'flare up', title: '(hastalık, ağrı) depreşmek, yeniden alevlenmek; (öfke, çatışma) alevlenmek', pos: 'öbek fiil', cefr: 'C1', ipa: '/ˌfleər ˈʌp/',
    text: "Süregen bir hastalığın ya da ağrının bir süre sakin kaldıktan sonra birden kötüleşmesi: My back pain flares up in cold weather. Ateşin ya da kavganın birden alevlenmesi için de kullanılır. Nesne almaz. İsmi tireyle yazılır: a flare-up (depreşme, alevlenme).",
    example: 'My grandfather says his old knee injury flares up whenever the weather turns cold and damp.',
    exampleTr: 'Dedem, eski diz sakatlığının hava soğuk ve nemli olduğunda depreştiğini söylüyor.',
    synonyms: ['worsen suddenly', 'break out'], family: ['flare-up'] },
  { code: 'grow out of', title: 'büyüyünce (bir şeyden) kurtulmak; (giysiye) büyüyüp sığmamak', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌɡrəʊ ˈaʊt əv/',
    text: "Çocuğun büyüdükçe bir alışkanlığı, korkuyu ya da sağlık sorununu geride bırakması: grow out of a habit. Giysi için 'büyüdüğü için artık sığmamak': He has grown out of his shoes. Nesne her zaman 'of'tan sonra gelir.",
    example: 'Lots of young children are scared of the dark, but most of them grow out of it before they start school.',
    exampleTr: 'Birçok küçük çocuk karanlıktan korkar, ama bunların çoğu okula başlamadan bu korkuyu büyüyüp geride bırakır.',
    synonyms: ['outgrow'], family: [] },
];

const items = [
  // ---------- kelime ----------
  { id: 'sl-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['tolerate', 'overreact'],
    level: 'orta', cefr: 'C1', konu: ['fiil'],
    q: 'The older allergy tablets made many patients so drowsy that they could not ---- them and simply stopped taking them after a few days.',
    options: ['tolerate', 'overreact', 'diagnose', 'inherit', 'recommend'], answer: 0,
    explain: "Eski alerji tabletleri birçok hastayı öyle uyuşuk yapıyordu ki hastalar birkaç gün sonra ilacı bırakıyordu. Yan etkisi yüzünden bir ilaca dayanamamak 'tolerate' ile anlatılır: ilacı kaldıramadılar. 'Overreact' (aşırı tepki göstermek) nesne almaz, 'to' ister; hem dil bilgisi hem anlam açısından uymaz. 'Diagnose' (tanı koymak) hastanın değil hekimin işidir ve ilaçla anlam kurmaz. 'Inherit' (miras almak, kalıtımla almak) ilaçla kullanılmaz. 'Recommend' (önermek) uyuşukluğun neden ilacı bırakmaya yol açtığını açıklamaz." },
  { id: 'sl-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['harmless', 'allergic', 'airborne'],
    level: 'kolay', cefr: 'B1', konu: ['sıfat'],
    q: 'The doctor said that the small red spots on my arm were completely ---- and would go away on their own within a few days.',
    options: ['harmless', 'allergic', 'serious', 'permanent', 'airborne'], answer: 0,
    explain: "Doktor, koldaki küçük kırmızı lekelerin birkaç gün içinde kendiliğinden geçeceğini söylüyor; bu, rahatlatıcı bir bilgi. Lekeler 'harmless' (zararsız) olmalı. 'Serious' (ciddi) tedavisiz geçen bir sorunla çelişir. 'Permanent' (kalıcı) 'geçip gidecek' sözüyle çelişir. 'Allergic' kişiyi ya da tepkiyi niteler (allergic to, an allergic reaction); lekelere 'alerjik' denmez. 'Airborne' (havada taşınan) deri lekeleriyle anlam kurmaz." },

  // ---------- dil bilgisi ----------
  { id: 'sl-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['sensitivity'],
    level: 'orta', cefr: 'B2', konu: ['bağlantı zarfı'],
    q: 'A skin or blood test can show whether someone has developed a sensitivity to a particular substance. ----, a positive result does not always mean that the person will have symptoms when they come into contact with it.',
    options: ['Therefore', 'However', 'Otherwise', 'Similarly', 'For instance'], answer: 1,
    explain: "İlk cümle testin bir maddeye duyarlılığı gösterebildiğini söylüyor; ikinci cümle bunun bir sınırını ekliyor: olumlu sonuç her zaman belirti çıkacağı anlamına gelmez. Beklentiyi kıran bu karşıtlığı 'However' (ancak) kurar. 'Therefore' (bu yüzden) ikinci cümleyi birincinin sonucu yapar; oysa testin işe yaraması, sonucun yanıltabileceğini doğurmaz. 'Otherwise' (aksi hâlde) bir koşulun tersini anlatır. 'Similarly' (benzer biçimde) iki bilgiyi aynı yönde sayar. 'For instance' (örneğin) ilk cümleye örnek getirir; ikinci cümle ise örnek değil, bir sınırlama." },
  { id: 'sl-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['eşleşik bağlaç'],
    q: '---- antihistamines ---- nasal sprays can cure hay fever; at best, they relieve its symptoms for a while.',
    options: ['Both / and', 'Either / or', 'Whether / or', 'Neither / nor', 'Not / but'], answer: 3,
    explain: "Cümlenin ikinci yarısı, bu ilaçların en iyi durumda belirtileri bir süre hafiflettiğini söylüyor; demek ki ikisi de saman nezlesini iyileştiremez. 'İkisi de … değil' anlamını 'Neither … nor' verir; olumsuzluk bağlacın içindedir, bu yüzden fiil 'can' olumlu kalır. 'Both … and' ve 'Either … or' ilaçlardan ikisinin ya da birinin hastalığı iyileştirdiğini söyler ve ikinci yarıyla çelişir. 'Not … but' iyileştirenin burun spreyi olduğunu söyler; bu da 'en iyi durumda belirtileri hafifletirler' sözüyle çelişir. 'Whether … or' özne konumunda böyle bir yargı cümlesi kurmaz." },
  { id: 'sl-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['edat + which'],
    q: 'The skin test showed that grass pollen and house dust mites were the two substances ---- she was most sensitive, which explained why her symptoms continued all year round.',
    options: ['of which', 'for which', 'with which', 'from which', 'to which'], answer: 4,
    explain: "Sıfat cümleciğinin içindeki yapı 'be sensitive to something' (bir şeye duyarlı olmak). Edat cümleciğin başına, 'which'in önüne alınınca 'the substances to which she was most sensitive' (en duyarlı olduğu maddeler) olur. 'Sensitive' sıfatı 'of', 'for', 'with' ya da 'from' ile bu anlamı kurmaz; bu edatlarla cümle 'en duyarlı olduğu maddeler' anlamını vermez." },

  // ---------- boşluklu metin (5 boşluk) ----------
  { id: 'sl-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: ['pollen', 'rash', 'hygiene', 'asthma', 'sensitivity'],
    level: 'orta', cefr: 'B2', title: 'Saman nezlesinin nedenini arayan hekim',
    text: "For much of the nineteenth century, doctors disagreed about what caused hay fever, the condition that left some people with a runny nose and streaming eyes every summer. Some blamed the heat, others the dust or the smell of freshly cut hay. Charles Blackley, an English doctor who suffered from the condition himself, decided to settle the question (1) ---- carrying out experiments on his own body. He rubbed material from flowering grasses into small scratches on his arm, which soon became itchy and swollen, and placed some inside his nose, which quickly set off his usual sneezing. He also left sticky glass slides in the open air and counted the tiny grains that landed on them, finding that the amount of (2) ---- in the air rose and fell with his symptoms. (3) ---- his methods were simple, the results, which he published in 1873, offered strong evidence that the grains, not the heat, were to blame. A little over three decades later, the word 'allergy' itself (4) ---- by the Austrian doctor Clemens von Pirquet, who used it in 1906 to describe a changed reaction of the body to a substance it had met before. By then, doctors were beginning to suspect that the body's defences, which normally protect us, (5) ---- sometimes turn against things that pose no real danger.",
    steps: [
      { konu: ['edat'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['with', 'by', 'from', 'at', 'for'], answer: 1,
        explain: "Blackley soruyu bir yöntemle çözmeye karar veriyor: kendi üzerinde deney yaparak. Bir işin hangi yolla yapıldığını 'by + -ing' anlatır: 'by carrying out experiments' (deneyler yaparak). 'With', 'from', 'at' ve 'for' ardından gelen '-ing' ile 'yaparak' anlamını kurmaz; 'for carrying out' ise bir şeyin amacını ya da gerekçesini bildirir." },
      { konu: ['kelime', 'isim'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['rash', 'hygiene', 'pollen', 'asthma', 'sensitivity'], answer: 2,
        explain: "Blackley çiçeklenmiş otlarla deney yapıyor, sonra havaya bıraktığı cam lamlara konan küçük taneleri sayıyor. Havada miktarı ölçülebilen ve otlardan gelen bu taneler 'pollen' (polen). 'Rash' (deride döküntü) ve 'asthma' (astım) bir hastalığın belirtisi ya da adıdır; havada sayılmaz. 'Hygiene' (temizlik) ve 'sensitivity' (duyarlılık) da havada bulunan, miktarı inip çıkan bir şey değildir." },
      { konu: ['bağlaç'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['Because', 'Unless', 'Once', 'So that', 'Although'], answer: 4,
        explain: "İki bilgi birbirine karşıt: yöntemleri basitti, ama sonuçlar güçlü bir kanıt sundu. Beklenene ters düşen bu ilişkiyi 'Although' (-e karşın) kurar. 'Because' yöntemin basitliğini kanıtın gücünün nedeni yapar. 'Unless' (-medikçe) ve 'Once' (-ince) iki olguyu koşul ya da zamanla bağlar ve anlam kurmaz. 'So that' (… için) amaç bildirir." },
      { konu: ['edilgen'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['proposed', 'was proposed', 'has been proposed', 'had proposed', 'is proposed'], answer: 1,
        explain: "Öznesi 'the word allergy': sözcüğü biri önerir, sözcük kendisi bir şey önermez; ardından da 'by … von Pirquet' geliyor. Bu yüzden edilgen gerekir. Olay 1906'da, yani geçmişte belli bir zamanda geçiyor: past simple edilgen 'was proposed'. 'Proposed' ve 'had proposed' etkendir. 'Has been proposed' belli bir geçmiş zamanla kullanılmaz. 'Is proposed' şimdiki zamandır." },
      { konu: ['zaman uyumu'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['will', 'had to', 'should', 'would rather', 'could'], answer: 4,
        explain: "Ana cümle geçmiş zamanda: 'doctors were beginning to suspect' (hekimler … kuşkulanmaya başlıyordu). Kuşkunun içeriği bir olasılık: vücudun savunması bazen gerçek tehlike taşımayan şeylere karşı dönebilir. Geçmişe kaydırılmış olasılık 'could' ile anlatılır. 'Will' zaman uyumunu bozar; geçmişteki bir düşünce aktarılırken 'would' olur. 'Had to' (zorunda olmak) ve 'should' (-meli) olasılık değil zorunluluk ya da gereklilik bildirir. 'Would rather' (-meyi yeğlemek) bir tercih anlatır ve anlam kurmaz." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'sl-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['allergic'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although many adults believe that they are allergic to at least one kind of food, ----.',
    options: [
      'most of them were told so by a doctor after careful medical testing',
      'far fewer turn out to have a true allergy when properly tested',
      'the number of such reports has risen sharply in many countries',
      'the foods they mention most often are milk, eggs, nuts and shellfish',
      'a person with a true allergy may react to even a very tiny amount',
    ], answer: 1,
    explain: "'Although' ana cümlede beklenene ters düşen bir bilgi ister: birçok yetişkin bir besine alerjisi olduğuna inansa da, doğru dürüst test edildiğinde gerçek alerjisi çıkanlar çok daha azdır. Çoğunun bunu doktordan öğrendiğini söyleyen seçenek yan cümleyle aynı yönde; karşıtlık kurmuyor. Bu tür bildirimlerin artması ve en sık anılan besinler yan cümleye bilgi ekler ama ona karşı çıkmaz. Gerçek alerjisi olanın çok küçük bir miktara bile tepki verebilmesi de inanç ile gerçek arasındaki farkı anlatmıyor." },
  { id: 'sl-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['sneeze', 'allergic'],
    level: 'kolay', cefr: 'B1', konu: ['koşul'],
    q: "----, you will probably start sneezing soon after you walk into Leyla's flat, because she has three cats.",
    options: [
      'If you happen to be allergic to cats',
      'Unless cats tend to make you sneeze',
      'Even if cats have never bothered you',
      'As long as you feel perfectly well',
      'Although you have never owned a pet',
    ], answer: 0,
    explain: "Ana cümle bir tahmin: Leyla'nın evine girince büyük olasılıkla hapşırmaya başlayacaksın, çünkü üç kedisi var. Bu tahmini doğuran koşul kedilere alerjinin olmasıdır: 'If you happen to be allergic to cats'. 'Unless cats tend to make you sneeze' (kediler seni hapşırtmıyorsa) koşulu tersine çevirir. 'Even if cats have never bothered you' (kediler seni hiç rahatsız etmemiş olsa bile) ve 'As long as you feel perfectly well' (kendini çok iyi hissettiğin sürece) hapşırmanın nedeni olamaz. Hiç evcil hayvan beslememiş olmak da ana cümleyle karşıtlık kurmuyor." },
  { id: 'sl-t3', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['flare up', 'pollen'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: '----, his hay fever flared up again as soon as the grasses began to flower in May.',
    options: [
      'Because he had spent most of the long winter indoors',
      'Now that his allergy had disappeared for good',
      'Even though he had felt perfectly well all winter',
      'As long as he kept well away from the flowering grass',
      'Since the pollen season had not yet started then',
    ], answer: 2,
    explain: "Ana cümle saman nezlesinin mayısta otlar çiçeklenince yeniden depreştiğini söylüyor. Bunu bütün kış kendini çok iyi hissetmiş olmakla karşılaştıran 'Even though' cümlesi anlamlı bir karşıtlık kurar: kış boyunca iyiydi, yine de bahar gelince belirtiler döndü. Kışı evde geçirmek depreşmenin nedeni değildir. Alerjinin tümüyle geçmiş olması depreşmeyle çelişir. Çiçeklenen otlardan uzak durma koşulu ve polen mevsiminin henüz başlamamış olması da otlar çiçeklenince depreşen bir hastalıkla bağdaşmaz." },
  { id: 'sl-t4', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['pollen'],
    level: 'zor', cefr: 'C1', konu: ['neden-sonuç'],
    q: 'Because the pollen of many trees and grasses is light enough to be carried by the wind over long distances, ----.',
    options: [
      'the pollen count is usually at its lowest on warm, dry and windy days',
      'most hay fever sufferers live in the countryside, close to farmland',
      'its grains can only be identified when studied under a microscope',
      'plants pollinated by insects tend to cause the worst hay fever',
      'even city dwellers far from any fields may be affected by it',
    ], answer: 4,
    explain: "'Because' bir neden veriyor: birçok ağaç ve otun poleni rüzgârla uzaklara taşınacak kadar hafiftir. Bunun sonucu, tarlalardan uzakta, kent merkezinde yaşayanların da polenden etkilenebilmesidir. Rüzgârlı günlerde polen yoğunluğunun en düşük olması, nedenle çelişir; rüzgâr poleni taşır. Saman nezlesi çekenlerin çoğunun kırsalda yaşaması da hafif polenin uzağa gitmesiyle ters düşer. Tanelerin mikroskopla tanınması doğru olabilir ama hafiflikten çıkan bir sonuç değil. Böceklerle tozlaşan bitkilerin en kötü saman nezlesine yol açması ise rüzgârla taşınan polenden söz eden nedenle bağdaşmaz." },

  // ---------- çeviri: İngilizceden Türkçeye ----------
  { id: 'sl-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['asthma'],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'People who have one type of allergy, such as hay fever, are more likely than others to develop another, such as asthma or eczema.',
    options: [
      'Saman nezlesi olan kişilerin çoğu, ilerleyen yıllarda astım ya da egzama gibi başka bir alerji türünü de mutlaka geliştirir.',
      'Astım ya da egzama gibi bir alerjisi olan kişiler, saman nezlesine ötekilere göre çok daha sık ve daha erken yakalanır.',
      'Saman nezlesi gibi bir alerjisi olan kişilerin astım ya da egzama gibi başka bir alerji geliştirme olasılığı oldukça düşüktür.',
      'Saman nezlesi gibi bir alerjisi olanların astım ya da egzama gibi başka bir alerji geliştirme olasılığı ötekilerden yüksektir.',
      'Saman nezlesi gibi alerjiler, astım ya da egzamaya göre insanlarda genellikle çok daha sık görülür ve daha erken başlar.',
    ], answer: 3,
    explain: "'People who have one type of allergy' bir sıfat cümleciği: bir tür alerjisi olan kişiler. 'Such as hay fever' bu alerjiye örnek veriyor. Yüklem 'are more likely than others to develop another': başka bir alerji (astım ya da egzama gibi) geliştirme olasılıkları ötekilerden yüksektir. Yanlışlardan biri olasılığı kesinliğe çevirip saman nezlesi olanların çoğunun başka alerji geliştirdiğini söylüyor. Biri ilişkinin yönünü ters çeviriyor. Biri olasılığın düşük olduğunu söyleyerek anlamı tersine döndürüyor. Biri de kişileri karşılaştırmak yerine alerji türlerinin sıklığını karşılaştırıyor." },
  { id: 'sl-c2', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['dramatically'],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: 'In many industrialised countries, allergies seem to be dramatically more common today than they were a few decades ago.',
    options: [
      'Sanayileşmiş ülkelerin çoğunda alerjiler, birkaç on yıl öncesine göre biraz daha yaygın hâle geldi.',
      'Pek çok sanayileşmiş ülkede alerjiler birkaç on yıl önce, bugün olduğundan çok daha yaygındı.',
      'Pek çok sanayileşmiş ülkede alerjiler bugün, birkaç on yıl öncesine göre çok daha yaygın görünüyor.',
      'Alerjiler sanayileşmiş ülkelerin çoğunda, sanayileşmemiş ülkelerdekinden çok daha yaygın görünüyor.',
      'Pek çok sanayileşmiş ülkede alerjilerin birkaç on yıl içinde bugünkünden çok daha yaygın olacağı sanılıyor.',
    ], answer: 2,
    explain: "Cümle bugünü birkaç on yıl öncesiyle karşılaştırıyor: 'dramatically more common today than they were a few decades ago', yani bugün çok daha yaygın. 'Seem to be' kesinliği yumuşatır: görünüyor. Yanlışlardan biri 'many'yi 'çoğu'ya, 'dramatically'yi 'biraz'a çeviriyor ve 'görünüyor'u atıyor. Biri karşılaştırmanın yönünü ters çevirip eskiden daha yaygın olduğunu söylüyor. Biri karşılaştırmayı zamanlar arasından ülkeler arasına kaydırıyor. Biri de bugünü geleceğe taşıyıp bir tahmin kuruyor." },
  { id: 'sl-c3', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['pollen'],
    level: 'zor', cefr: 'C1', konu: ['edilgen kanaat'],
    q: 'Climate change is thought to be lengthening the pollen season in some regions, which may mean that people with hay fever suffer for longer each year.',
    options: [
      'İklim değişikliği bütün bölgelerde polen mevsimini uzattığı için saman nezlesi olanlar artık her yıl kesinlikle daha uzun süre sıkıntı çekiyor.',
      'Bazı bölgelerde polen mevsiminin her yıl biraz daha uzaması, iklim değişikliğinin saman nezlesini giderek daha yaygın hâle getirdiğini düşündürüyor.',
      'İklim değişikliğinin bazı bölgelerde polen mevsimini kısalttığı düşünülse de saman nezlesi olanların her yıl çektiği sıkıntı bir türlü azalmıyor.',
      'Bazı bölgelerde saman nezlesi olanların her yıl daha uzun süre sıkıntı çekmesinin asıl nedeninin iklim değişikliği olduğu kesin olarak kanıtlandı.',
      'İklim değişikliğinin bazı bölgelerde polen mevsimini uzattığı düşünülüyor ve bu, saman nezlesi olanların her yıl daha uzun süre sıkıntı çekmesi demek olabilir.',
    ], answer: 4,
    explain: "'Is thought to be lengthening' edilgen bir kanaat bildirir: iklim değişikliğinin polen mevsimini uzattığı düşünülüyor. Kapsam 'in some regions', yani bazı bölgeler. 'Which may mean' ise bu durumun bir olası sonucunu ekliyor: saman nezlesi olanların her yıl daha uzun süre sıkıntı çekmesi demek olabilir. Yanlışlardan biri 'bazı'yı 'bütün'e çeviriyor ve iki bilgiyi de kesinleştiriyor. Biri sonucu saman nezlesinin yaygınlaşmasına kaydırıyor. Biri mevsimin kısaldığını söyleyerek anlamı tersine çeviriyor. Biri de kanaati kanıtlanmış bir olguya dönüştürüyor." },

  // ---------- çeviri: Türkçeden İngilizceye ----------
  { id: 'sl-c4', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['grow out of', 'allergic'],
    level: 'kolay', cefr: 'B1', konu: ['zaman'],
    q: 'Kızımın üç yaşındayken yumurta alerjisi vardı, ama büyüdükçe bu alerjiden kurtuldu.',
    options: [
      'My daughter has been allergic to eggs since she was three, and she has not grown out of it yet.',
      'My daughter will be allergic to eggs until she is three, and then she will grow out of it.',
      'My daughter became allergic to eggs at the age of three, as soon as she grew out of milk.',
      'My daughter was allergic to eggs when she was three, but she grew out of it as she got older.',
      'My daughter was not allergic to eggs when she was three, but she became allergic as she grew up.',
    ], answer: 3,
    explain: "Türkçe cümle geçmişte kalmış iki durumu anlatıyor: üç yaşındayken yumurta alerjisi vardı ('was allergic … when she was three'), büyüdükçe de bu alerjiden kurtuldu ('grew out of it as she got older'). Yanlışlardan biri alerjinin hâlâ sürdüğünü söylüyor. Biri olayları geleceğe taşıyor. Biri alerjinin üç yaşında başladığını ve sütle ilgili yeni bir bilgi ekliyor. Biri de alerjinin üç yaşında olmadığını, sonradan başladığını söyleyerek anlamı tersine çeviriyor." },
  { id: 'sl-c5', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['sneeze'],
    level: 'orta', cefr: 'B2', konu: ['isim-fiil ve mastar'],
    q: 'Bir hapşırığı durdurmaya çalışmak nadiren işe yarar, çünkü hapşırmak vücudun burundaki tahriş edici maddelerden kurtulma yoludur.',
    options: [
      'Sneezing rarely stops when you try to get rid of all the irritating substances that are inside your nose.',
      'Because sneezing gets rid of irritants, people should try to sneeze as often as they possibly can.',
      'Trying to stop a sneeze usually works, because the body has plenty of other ways of getting rid of irritants.',
      "Trying to stop a sneeze rarely works, as sneezing is the body's way of clearing irritants from the nose.",
      'The body tries to stop a sneeze when there are no more irritating substances in the nose to remove.',
    ], answer: 3,
    explain: "Türkçe cümlenin öznesi bir isim-fiil: 'bir hapşırığı durdurmaya çalışmak', İngilizcede 'Trying to stop a sneeze' ('try' ardından mastar). Gerekçe cümlesinde de özne yine isim-fiil: 'sneezing is the body's way of clearing irritants', yani hapşırmak vücudun tahriş edici maddelerden kurtulma yoludur. Yanlışlardan biri öznenin ve eylemin yerini değiştirip hapşırmanın durmadığını söylüyor. Biri olabildiğince sık hapşırma önerisi ekliyor. Biri 'nadiren'i 'genellikle'ye çevirerek anlamı tersine döndürüyor. Biri de durdurmaya çalışanın vücut olduğunu söyleyerek anlamı kaydırıyor." },
  { id: 'sl-c6', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['pollen'],
    level: 'orta', cefr: 'B2', konu: ['koşul'],
    q: 'Bahar aylarında havada bu kadar çok polen olmasaydı, işe bisikletle gidebilirdim.',
    options: [
      'Unless there is a lot of pollen in the air in spring, I cannot cycle to work.',
      'Because there is so much pollen in the air in spring, I prefer to cycle to work.',
      'Even if there were less pollen in the air in spring, I could not cycle to work.',
      "If there weren't so much pollen in the air in spring, I could cycle to work.",
      'If there is less pollen in the air this spring, I will try cycling to work.',
    ], answer: 3,
    explain: "Türkçe cümle şimdiki gerçeğe aykırı bir durumu anlatıyor: baharda havada çok polen var, bu yüzden bisikletle gidemiyorum; olmasaydı gidebilirdim. Bu, ikinci tip koşul cümlesiyle kurulur: 'If there weren't so much pollen …, I could cycle …'. 'Unless' ile kurulan seçenek polen çokken gidemeyeceğini söyleyip anlamı tersine çeviriyor. 'Because' ile kurulan seçenek polen yüzünden bisikleti yeğlediğini söylüyor. 'Even if' polenin hiçbir şeyi değiştirmediğini söylüyor. Birinci tip koşul ise gerçeğe aykırı durumu bu bahar için gerçek bir olasılığa ve bir denemeye çeviriyor." },

  // ---------- okuma parçası (4 soru, YDS biçimi) ----------
  { id: 'sl-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['pollen', 'harmless', 'overreact', 'sneeze', 'itch', 'rash', 'swell'],
    level: 'orta', cefr: 'B2', title: 'Alerji ve bağışıklık sistemi',
    text: "Every spring, millions of people begin to sneeze as soon as trees and grasses release their pollen, while others breathe the same air without noticing anything at all. The difference lies not in the pollen, which is harmless in itself, but in the way each person's immune system responds to it. In someone with an allergy, the body mistakes an ordinary substance for a dangerous invader and overreacts. Curiously, the first encounter usually passes without any symptoms. Instead, the immune system quietly prepares for the next time by producing a type of antibody known as IgE. These antibodies attach themselves to mast cells, which are found in large numbers in the skin and in the lining of the nose, throat and lungs. When the person meets the same substance again, it binds to the antibodies on these cells, and they respond by releasing histamine and several other chemicals. It is these chemicals, rather than the pollen or dust itself, that produce the familiar signs of an allergy: a runny nose, sneezing, itchy eyes and, in some cases, a rash or swelling of the skin. This is also why antihistamine medicines can bring relief, since they block some of histamine's effects. Exactly why some immune systems behave in this way while others do not is still not fully understood.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, mast cells ----.',
        options: [
          'are produced by the immune system only after a first contact with pollen',
          'are found mainly in the blood of people who suffer from allergies',
          'destroy dangerous invaders before they are able to reach the lungs',
          'stop working altogether once a person takes antihistamine medicines',
          'are especially plentiful in the skin and in the lining of the airways',
        ], answer: 4,
        explain: "Parçaya göre mast hücreleri deride ve burun, boğaz ve akciğerlerin iç yüzeyinde çok sayıda bulunur. Doğru seçenek bunu başka sözlerle söylüyor: burun, boğaz ve akciğerleri 'the airways' (solunum yolları) diye topluyor. İlk karşılaşmadan sonra üretilen mast hücreleri değil, IgE antikorlarıdır. Parça hücrelerin kanda bulunduğunu söylemiyor; yerleri deri ve solunum yollarıdır. İstilacıları akciğere ulaşmadan yok ettikleri parçada geçmiyor. Antihistaminikler de hücreleri durdurmaz, yalnız histaminin bazı etkilerini engeller." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that a person who comes into contact with a particular allergen for the very first time ----.',
        options: [
          'will develop a rash on the skin rather than a runny nose',
          'already has large amounts of IgE against that substance',
          'can no longer become allergic to it later in life',
          'releases far more histamine than on later occasions',
          'is unlikely to notice that anything has happened',
        ], answer: 4,
        explain: "Parçaya göre ilk karşılaşma çoğu zaman hiçbir belirti olmadan geçer; bağışıklık sistemi bu sırada sessizce bir sonraki karşılaşmaya hazırlanır. Buradan, kişinin ilk seferde bir şey olduğunu büyük olasılıkla fark etmeyeceği çıkar. Döküntünün burun akıntısının yerine geçtiği parçada yok. IgE ilk karşılaşmanın ardından üretilmeye başlar; önceden bol miktarda bulunduğu söylenemez. İlk karşılaşmanın alerjiyi önlediği de parçayla çelişir, çünkü alerji asıl ikinci karşılaşmada kendini gösterir. Histamin de ilk seferde değil, yeniden karşılaşınca salınır." },
      { konu: ['gönderim'],
        q: "The word 'they' in 'they respond by releasing histamine' refers to ----.",
        options: ['the antibodies', 'the mast cells', 'the chemicals', 'the lungs', 'people with allergies'], answer: 1,
        explain: "Cümle şöyle: kişi aynı maddeyle yeniden karşılaşınca madde bu hücrelerdeki antikorlara bağlanır, onlar da histamin salarak karşılık verir. Histamini salan, hemen önce anılan 'these cells', yani mast hücreleridir. Antikorlar maddeyi yakalar ama histamin salmaz; parçada bu iş hücrelere veriliyor. 'The chemicals' salınan maddelerin kendisidir, salan değil. Akciğerler yalnız hücrelerin bulunduğu yerlerden biri olarak geçiyor. Alerjisi olan kişiler de bu cümlede özne değil." },
      { konu: ['başlık'],
        q: 'A suitable heading for this text would be ----.',
        options: [
          'Why Pollen Is More Dangerous Than We Thought',
          'How Genes Decide Who Develops an Allergy',
          'Antihistamines: A Cure for Every Allergy',
          'A False Alarm: What Happens in an Allergy',
          'The Long Search for the Cause of Hay Fever',
        ], answer: 3,
        explain: "Parça, bağışıklık sisteminin zararsız bir maddeyi tehlikeli sanıp aşırı tepki vermesini ve bu tepkinin adım adım nasıl geliştiğini anlatıyor: ilk karşılaşma, IgE, mast hücreleri, histamin ve belirtiler. Bu, bir 'yanlış alarm' ve onun işleyişidir. Parçaya göre polen kendi başına zararsızdır; tehlikeli olduğu söylenmiyor. Genlerden hiç söz edilmiyor. Antihistaminikler yalnız rahatlama sağlar, her alerjiyi iyileştirmez. Saman nezlesinin nedeninin tarih içinde aranması da parçanın konusu değil." },
    ] },

  // ---------- okuma parçası (3 soru, YÖKDİL biçimi) ----------
  { id: 'sl-o2', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['hygiene'],
    level: 'zor', cefr: 'C1', title: 'Hijyen varsayımı ve eski dostlar',
    text: "In 1989, the British epidemiologist David Strachan reported a curious pattern in data collected on thousands of children: those with older brothers and sisters were less likely to develop hay fever. He suggested that infections passed on by older siblings in early childhood might somehow protect against allergies later in life, and that smaller families and cleaner homes could therefore help to explain why allergies seemed to be spreading. The idea soon became known as the 'hygiene hypothesis', and newspapers often presented it in a simplified form that blamed allergies on parents who kept their homes too clean. Most researchers now regard that version as misleading. A later refinement, often called the 'old friends' hypothesis and associated with the immunologist Graham Rook, moves the emphasis away from infections and household cleaning. It proposes that the human immune system evolved in constant contact with a wide range of microbes, many of them living in soil, in animals and in our own gut, and that it may need early and varied exposure to these 'old friends' in order to learn what it can safely ignore. On this view, the issue is less about dirt than about the kinds of contact with the natural world that modern urban life has reduced. The evidence so far is suggestive rather than conclusive. It would also be a mistake to conclude that people should give up ordinary hygiene, such as washing their hands, which continues to protect them against genuinely dangerous germs.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, Strachan originally proposed that ----.',
        options: [
          'germs caught from elder siblings early on might lower the risk of allergy',
          'parents who cleaned their homes too often were mainly to blame for allergies',
          'contact with microbes in soil and animals is what trains the immune system',
          'children with no brothers or sisters were well protected against hay fever',
          'allergies had become less common as families grew smaller and cleaner',
        ], answer: 0,
        explain: "Parçaya göre Strachan, büyük kardeşlerden erken çocuklukta geçen enfeksiyonların ileride alerjiye karşı koruyabileceğini öne sürdü; doğru seçenek bunu başka sözlerle söylüyor. Evini fazla temiz tutan anne babaları suçlayan yorum gazetelerin basitleştirdiği biçimdir, Strachan'ın önerisi değil. Toprakta ve hayvanlarda yaşayan mikroplarla temas, sonradan gelen 'eski dostlar' varsayımının vurgusu. Kardeşi olmayan çocukların korunduğu, verinin tersi. Ailelerin küçülmesiyle alerjilerin azaldığı da parçayla çelişir; parça alerjilerin yayılır göründüğünü söylüyor." },
      { konu: ['çıkarım'],
        q: "It can be inferred from the passage that, according to the 'old friends' hypothesis, ----.",
        options: [
          'infections passed between siblings are the real key to preventing allergies',
          'a child raised on a farm, around animals and earth, might be less prone to allergies',
          'cleaning the house less often would on its own prevent most childhood allergies',
          'the immune system can learn which substances are safe without any help at all',
          'contact with microbes only becomes useful once a person has reached adulthood',
        ], answer: 1,
        explain: "Varsayıma göre bağışıklık sistemi topraktaki, hayvanlardaki ve bağırsaktaki mikroplarla erken ve çeşitli temas kurarak neyi görmezden gelebileceğini öğrenir; sorun, kent yaşamının doğayla teması azaltmasıdır. Buradan, hayvanlarla ve toprakla iç içe, bir çiftlikte büyüyen çocuğun alerjiye daha az yatkın olabileceği çıkar. Parçaya göre bu varsayım vurguyu enfeksiyonlardan uzaklaştırıyor; kardeşler arası enfeksiyon Strachan'ın ilk açıklamasıdır. Evi daha seyrek temizlemenin tek başına yeteceği, yazarın uyarısıyla çelişir. Bağışıklık sisteminin hiçbir yardım almadan öğrendiği ve temasın ancak yetişkinlikte işe yaradığı da varsayımın 'erken temas' vurgusuna ters düşer." },
      { konu: ['yazarın tutumu'],
        q: "The author's attitude towards the 'old friends' hypothesis can best be described as ----.",
        options: [
          'fully convinced, since the evidence for it is now conclusive',
          'rather doubtful, as it seems little better than the press version',
          'cautiously positive: it looks promising but remains unproven',
          'hostile, because it encourages people to stop washing their hands',
          'indifferent, since it is relevant only to people living in cities',
        ], answer: 2,
        explain: "Yazar 'eski dostlar' varsayımını gazetelerin yanıltıcı yorumundan ayırıyor ve onu bir iyileştirme olarak sunuyor; ama kanıtın 'kesin değil, düşündürücü' olduğunu da ekliyor. Tutumu temkinli biçimde olumludur: umut verici ama henüz kanıtlanmamış. Kanıtın kesin olduğu, yazarın sözüyle çelişir. Yazarın varsayıma kuşkuyla baktığı da söylenemez: onu gazete yorumuyla bir tutmuyor, tersine bu yorumdan açıkça ayırıyor. El yıkamayı bırakma uyarısı varsayıma değil, ondan yanlış sonuç çıkaranlara yönelik. Varsayımın yalnız kentlilerle ilgili olduğu ve yazarın ilgisiz kaldığı da parçada yok." },
    ] },

  // ---------- diyalog tamamlama ----------
  { id: 'sl-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['sneeze', 'itch', 'pollen'],
    level: 'kolay', cefr: 'B1', konu: ['soru-cevap uyumu'],
    q: "Deniz: You've been sneezing all morning. Have you caught a cold?\nKerem: ----\nDeniz: Oh, so it's your hay fever again. How long does it usually last?\nKerem: A few weeks, until there's less pollen in the air. After that, I'm fine.",
    options: [
      "Yes, my little brother had a bad cold last week, and now I've got it.",
      'Maybe. I forgot my coat yesterday, and it was freezing outside.',
      "I don't think so. My eyes itch too, and it's like this every April.",
      "No, I've just been clearing out a very dusty old cupboard at home.",
      "I'm not sure yet. I'll take my temperature when I get home tonight.",
    ], answer: 2,
    explain: "Deniz'in ikinci sözü ('Demek yine saman nezlen. Genellikle ne kadar sürüyor?') Kerem'in her yıl tekrarlanan, mevsimlik bir sorundan söz ettiğini gösteriyor. Bunu yalnız 'Sanmıyorum. Gözlerim de kaşınıyor ve her nisan böyle oluyor.' diyen cevap karşılar. Kardeşinden soğuk algınlığı kaptığını, dün paltosunu unuttuğunu ya da eve gidince ateşini ölçeceğini söyleyen cevaplar Deniz'in ilk sorusuna uyar ama 'yine saman nezlen' yorumuna yol açmaz. Tozlu bir dolabı boşalttığını söyleyen cevap da hapşırmayı açıklar, ama bir kerelik bir nedendir; 'yine' sözüne ve mevsime bağlanmaz." },

  // ---------- anlamca en yakın cümle ----------
  { id: 'sl-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: ['flare up'],
    level: 'orta', cefr: 'B2', konu: ['koşul'],
    q: 'Her eczema rarely flares up unless she is under stress or the air is very dry.',
    options: [
      'Her eczema tends to flare up when she is relaxed and the air is dry.',
      'Because her eczema keeps flaring up, she often feels stressed when it is dry.',
      'Even when she is stressed or the air is very dry, her eczema seldom flares up.',
      'It is mainly stress or very dry air that makes her eczema flare up.',
      'Her eczema seldom flares up, and neither stress nor dry air has much effect on it.',
    ], answer: 3,
    explain: "Verilen cümle bir koşul kuruyor: egzaması, stres altında olmadıkça ya da hava çok kuru olmadıkça nadiren depreşir; yani depreşmeye yol açan başlıca etkenler stres ve çok kuru havadır. Doğru seçenek bunu 'It is mainly stress or very dry air that …' diye vurgulayarak söylüyor. Yanlışlardan biri stresi rahatlığa çevirip anlamı bozuyor. Biri neden ile sonucun yerini değiştiriyor. 'Even when' ile kurulan seçenek stres ve kuru havanın etkisini ortadan kaldırıp anlamı tersine çeviriyor. Biri de iki etkenin önemsiz olduğunu söylüyor." },

  // ---------- paragraf tamamlama ----------
  { id: 'sl-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['airborne', 'allergic'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'Not every allergy follows the seasons. Many people react to dust mites, tiny creatures that live in beds, carpets and sofas and feed on the flakes of skin that humans lose every day. ----. As a result, people who are allergic to them often find that their symptoms are worst at night or first thing in the morning, rather than in any particular month.',
    options: [
      'Warm, slightly damp bedding suits them best, so our closest contact with them comes while we sleep',
      'Pollen, by contrast, is airborne and can easily travel a long way from its source on a windy day',
      'The mites themselves are so small that they cannot be seen without the help of a microscope',
      'Some people are also allergic to the fur, skin or saliva of household pets such as cats and dogs',
      'In some countries, they are found in almost every single home, whatever the season of the year',
    ], answer: 0,
    explain: "Boşluktan sonraki cümle 'As a result' (bu yüzden) diye başlıyor ve akar alerjisi olanların belirtilerinin en çok gece ya da sabah erken saatlerde ağırlaştığını söylüyor. Boşlukta bunun nedeni olmalı: akarlar en çok ılık ve hafif nemli yatakları sever, bu yüzden onlarla en yakın temasımız uyurken olur. Polenin havayla uzağa taşınması akarlardan uzaklaşıyor. Akarların mikroskopsuz görülemeyecek kadar küçük olması ve neredeyse her evde bulunması doğru olabilir, ama gece ve sabah ağırlaşan belirtileri açıklamaz. Evcil hayvan alerjisi de akış dışında kalıyor." },
  { id: 'sl-p2', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['itch', 'severe'],
    level: 'zor', cefr: 'C1', konu: ['gönderim'],
    q: 'Some people with hay fever find that their mouth and lips begin to itch whenever they eat certain raw fruits, such as apples or cherries, even though they never used to have any trouble with fruit. ----. Their immune system, already primed to react to the pollen, cannot tell the two apart and responds as if it had met the pollen itself. Interestingly, heat usually changes the shape of these proteins, which is why the same fruit often causes no problems once it has been cooked.',
    options: [
      'Such reactions are usually fairly mild and tend to fade away within a few minutes',
      'Doctors use several different names for this condition in different parts of the world',
      'Most people with the problem can still enjoy the same fruit in other forms',
      'In rare cases, however, the reaction spreads well beyond the mouth and becomes severe',
      'The reason is that certain proteins in these fruits closely resemble some in pollen',
    ], answer: 4,
    explain: "Boşluktan sonraki cümlede iki gönderim var: 'the two' (ikisi) ve bir sonraki cümlede 'these proteins' (bu proteinler). Bağışıklık sisteminin ayırt edemediği iki şey ve sözü edilen proteinler boşlukta anılmış olmalı. Bunu yalnız, bu meyvelerdeki bazı proteinlerin polendekilere çok benzediğini söyleyen cümle karşılar. Tepkinin hafif olup birkaç dakikada geçmesi, nadiren ağırlaşması ve aynı meyvenin başka biçimlerde yenebilmesi konuyla ilgili ama 'the two' ve 'these proteins' sözlerine bir karşılık vermiyor. Hastalığın ülkeden ülkeye farklı adlarla anılması da akışa bağlanmıyor." },

  // ---------- akışı bozan cümle ----------
  { id: 'sl-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['allergic'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'For many years, parents of babies thought to be at high risk of becoming allergic to peanuts were often advised to keep peanuts away from them for the first few years of life.',
      'A British trial known as LEAP, whose results were published in 2015, set out to test whether the opposite approach might work better.',
      'Some of the high-risk babies were given small amounts of peanut-containing food several times a week as part of the closely monitored trial, while the others avoided peanuts entirely.',
      'Peanuts are not true nuts at all but legumes, which makes them close relatives of beans, peas and lentils.',
      'By the age of five, peanut allergy was reported to be roughly 80 per cent less common in the group that had eaten peanuts, and advice in several countries was later revised, although doctors stress that high-risk babies should start only under medical guidance.',
    ], answer: 3,
    explain: "Parça, yer fıstığı alerjisinde bebeklere yönelik tavsiyenin nasıl değiştiğini anlatıyor: eskiden ilk birkaç yıl yer fıstığından uzak tutulmaları önerilirdi (I); LEAP çalışması bunun tersini denedi (II); sıkı izlenen bu denemede yüksek riskli bebeklerin bir kısmına düzenli olarak yer fıstıklı yiyecek verildi (III); beş yaşında bu grupta alerji belirgin biçimde daha azdı ve tavsiyeler değişti (V). IV. cümle de yer fıstığından söz ediyor ama konuyu bitkinin biyolojik sınıfına kaydırıyor; çalışmanın düzeniyle sonucu arasındaki bağı kesiyor." },
  { id: 'sl-b2', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['severe', 'life-threatening', 'swell', 'allergic'],
    level: 'kolay', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Anaphylaxis is a severe allergic reaction that can develop within minutes, affect several parts of the body at once and be life-threatening.',
      'Hay fever, by contrast, is seldom dangerous, although it can make it hard to concentrate at school or at work.',
      'Its warning signs may include swelling of the lips, tongue or throat, difficulty in breathing and a sudden feeling of faintness.',
      'People known to be at risk are usually advised to carry an adrenaline auto-injector, which can be used quickly in an emergency.',
      'Even if the injection seems to work, an ambulance should still be called, since the symptoms can return some hours later.',
    ], answer: 1,
    explain: "Parça anafilaksiyi anlatıyor: ne olduğu (I), uyarı belirtileri (III), risk taşıyanların yanında adrenalin kalemi taşıması (IV) ve iğne işe yarasa bile ambulans çağrılması gerektiği (V). III. cümledeki 'Its' (onun) anafilaksiyi gösterir. II. cümle konuyu tehlikesiz bir alerji olan saman nezlesine kaydırıyor; araya girince 'Its' saman nezlesini gösterir gibi olur ve akış bozulur." },
];

export default { id: 'saglik-alerji', course: C, title: U, order: 8, cards, items };
