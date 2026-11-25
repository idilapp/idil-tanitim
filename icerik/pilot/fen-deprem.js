// iDil › Fen bilimleri › Depremleri ölçmek.
// Tümü özgün: Claude yazdı (13 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (yalnız olgular; metin özgün), çoğaltma planı 2. tur §4.6: fay boyunca biriken gerilimin kayaçlar kayınca birden
// boşalması; P dalgalarının daha hızlı olup önce ulaşması, S dalgalarının daha yavaş ama daha güçlü sarsması; erken uyarı
// sistemlerinin P dalgasını algılayıp güçlü sarsıntıdan saniyeler önce uyarı göndermesi; büyüklük ölçeklerinin logaritmik olması
// (her tam sayı adımı yaklaşık 10 kat dalga genliği, yaklaşık 32 kat enerji); büyük depremlerde Richter yerine moment büyüklüğü
// kullanılması; depremin zamanının, yerinin ve büyüklüğünün önceden kesin bilinememesi, bilim insanlarının on yıllar içindeki
// olasılıkları tahmin etmesi; Kuzey ve Doğu Anadolu fayları; yapıların dayanımı; artçıların zamanla seyrekleşmesi.
// Richter ölçeği: C. F. Richter (1935), Bulletin of the Seismological Society of America 25. Moment büyüklüğü: Hanks ve
// Kanamori (1979), Journal of Geophysical Research 84 (parçada yıl verilmedi).
// Öteki yerleşik olgular: Richter yönteminin yakın, küçük ve orta depremler için geliştirilip en büyük depremleri olduğundan
// küçük göstermesi; moment büyüklüğünün kayan fay alanına ve kayma miktarına dayanması; küçük sarsıntıların çoğunun ardından
// daha büyük bir deprem gelmemesi (ABD Jeoloji Araştırmaları Kurumu, USGS, genel okur sayfaları); merkez üssüne çok yakın
// yerlerin uyarı alamayabilmesi; yumuşak zeminin sarsıntıyı büyütmesi; suya doygun gevşek kumun sarsıntıda sıvı gibi davranması
// (sıvılaşma); temel ile bina arasına konan kauçuk yastıklarla sismik yalıtım; Arap levhasının kuzeye itmesiyle Anadolu
// levhasının batıya doğru sıkışıp kayması; Kuzey Anadolu Fayı'nın bin kilometreyi aşması. "Depremler değil binalar zarar verir"
// sözü mühendislerin sözü olarak, temkinle verildi. Belirli bir deprem, tarih ya da can kaybı sayısı yok; dil yansız ve temkinli.
// Görev 20 (25 Kasım 2026): çeviri çeldiricileri biçim kestirmesine karşı yeniden kuruldu.

const T = 'taslak';
const C = 'fen';
const U = 'Depremleri ölçmek';

const cards = [
  { code: 'abruptly', title: 'birdenbire, ansızın; beklenmedik biçimde', pos: 'zarf', cefr: 'C1', ipa: '/əˈbrʌptli/',
    text: "Bir şeyin uyarı vermeden, bir anda olduğunu, başladığını ya da bittiğini anlatır: stop abruptly, end abruptly. Sıfatı 'abrupt' (ani; konuşma için sert, kaba). 'Gradually' (yavaş yavaş) ile karşıt anlamlıdır.",
    example: 'The music stopped abruptly when the power went off.',
    exampleTr: 'Elektrik kesilince müzik birden sustu.',
    synonyms: ['suddenly', 'unexpectedly'], family: ['abrupt'] },
  { code: 'precisely', title: 'tam olarak, kesin olarak; tam tamına', pos: 'zarf', cefr: 'B2', ipa: '/prɪˈsaɪsli/',
    text: "Bir ölçünün, zamanın ya da bilginin tam doğru olduğunu vurgular: at precisely nine o'clock, know precisely. Sıfatı 'precise' (kesin, hassas), adı 'precision' (kesinlik, hassasiyet). Konuşmada tek başına 'Precisely!' (Aynen öyle!) diye onay da bildirir.",
    example: "The meeting began at precisely nine o'clock.",
    exampleTr: 'Toplantı tam saat dokuzda başladı.',
    synonyms: ['exactly', 'accurately'], family: ['precise', 'precision'] },
  { code: 'fault', title: 'fay, yer kabuğundaki kırık', pos: 'isim', cefr: 'C1', ipa: '/fɔːlt/',
    text: "Yer biliminde, iki yanındaki kaya kütlelerinin birbirine göre kaydığı kırıktır: an active fault (etkin fay), the North Anatolian Fault. Gündelik dilde 'kusur, arıza' ve 'kabahat' (It's my fault) anlamları da var; hangisi olduğunu bağlamdan çıkar.",
    example: 'Geologists mapped the fault where it crosses the valley.',
    exampleTr: 'Jeologlar fayın vadiyi kestiği yeri haritaya geçirdi.',
    synonyms: ['fracture'], family: ['fault line'] },
  { code: 'tremor', title: 'hafif yer sarsıntısı, küçük deprem; titreme', pos: 'isim', cefr: 'C1', ipa: '/ˈtremə(r)/',
    text: "Fen metinlerinde çoğu zaman hafif bir yer sarsıntısıdır: a small tremor, an earth tremor. Tıpta ellerin ya da sesin titremesini anlatır. Aynı kökten bir fiil: 'tremble' (titremek).",
    example: 'The tremor was so slight that most people in the city did not notice it.',
    exampleTr: 'Sarsıntı o kadar hafifti ki kentteki insanların çoğu onu fark etmedi.',
    synonyms: ['quake', 'shaking'], family: ['tremble'] },
  { code: 'magnitude', title: 'büyüklük (depremin); boyut, önem', pos: 'isim', cefr: 'C1', ipa: '/ˈmæɡnɪtjuːd/',
    text: "Sismolojide bir depremin kaynağındaki büyüklüğünü gösteren sayıdır: a magnitude 6 earthquake. Bir yerdeki sarsıntının şiddeti (intensity) ise yerden yere değişir; ikisini karıştırma. Genel anlamda bir sorunun ya da değişimin boyutudur: the magnitude of the problem.",
    example: 'Earthquakes of magnitude 2 or less are usually too weak to be felt, but instruments still record them.',
    exampleTr: 'Büyüklüğü 2 ya da daha az olan depremler genellikle hissedilemeyecek kadar zayıftır, ama aygıtlar onları yine de kaydeder.',
    synonyms: ['size', 'scale'], family: [] },
  { code: 'crust', title: 'yer kabuğu; kabuk', pos: 'isim', cefr: 'C1', ipa: '/krʌst/',
    text: "Yer biliminde Dünya'nın en dıştaki ince katmanıdır: the Earth's crust. Okyanusların altında incedir, kıtaların altında kalınlaşır. Gündelik dilde ekmeğin dış kabuğu ya da karın, buzun üstündeki sert tabakadır.",
    example: "The Earth's crust is much thinner beneath the oceans than beneath the continents.",
    exampleTr: 'Yer kabuğu okyanusların altında, kıtaların altında olduğundan çok daha incedir.',
    synonyms: [], family: ['crusty'] },
  { code: 'aftershock', title: 'artçı sarsıntı, artçı deprem', pos: 'isim', cefr: 'C1', ipa: '/ˈɑːftəʃɒk/',
    text: "Büyük bir depremin ardından aynı bölgede gelen daha küçük depremlerdir. Asıl depreme 'main shock', ondan önce gelen küçük sarsıntılara 'foreshock' (öncü sarsıntı) denir. Mecaz anlamda büyük bir olayın sonradan gelen etkileridir.",
    example: 'Seismologists recorded hundreds of aftershocks in the month after the main earthquake.',
    exampleTr: 'Sismologlar ana depremden sonraki bir ay içinde yüzlerce artçı sarsıntı kaydetti.',
    synonyms: [], family: ['foreshock', 'main shock'] },
  { code: 'seismic', title: 'sismik, depremle ilgili', pos: 'sıfat', cefr: 'C1', ipa: '/ˈsaɪzmɪk/',
    text: "Depremler ve yer sarsıntılarıyla ilgili olan: seismic waves (sismik dalgalar), seismic activity. 'Seismology' deprem bilimi, 'seismometer' sarsıntıyı kaydeden aygıttır. Mecaz anlamda çok büyük bir değişimi anlatır: a seismic shift.",
    example: "The station's seismic instruments can record even the faintest movements of the ground.",
    exampleTr: 'İstasyonun sismik aygıtları yerin en hafif hareketlerini bile kaydedebilir.',
    synonyms: [], family: ['seismology', 'seismologist', 'seismometer'] },
  { code: 'devastating', title: 'yıkıcı, çok büyük zarar veren; çok sarsıcı', pos: 'sıfat', cefr: 'B2', ipa: '/ˈdevəsteɪtɪŋ/',
    text: "Bir şeye çok büyük zarar veren ya da birini derinden sarsan: a devastating effect, devastating news. Fiili 'devastate' (yerle bir etmek), adı 'devastation' (yıkım). Gündelik dilde 'çok etkileyici' anlamında da duyulur: a devastating smile.",
    example: "The long drought had a devastating effect on the region's farms.",
    exampleTr: 'Uzun kuraklık bölgedeki çiftliklere çok büyük zarar verdi.',
    synonyms: ['destructive', 'catastrophic'], family: ['devastate', 'devastation'] },
  { code: 'imminent', title: 'olmak üzere olan, eli kulağında, çok yakın', pos: 'sıfat', cefr: 'C1', ipa: '/ˈɪmɪnənt/',
    text: "Çok yakında, neredeyse hemen olacak olan; çoğu zaman bir tehlike ya da kötü bir olay için kullanılır: an imminent storm, imminent danger. Biçimce benzeyen 'eminent' (ünlü, saygın) ile karıştırma.",
    example: 'The dark clouds made it clear that a storm was imminent.',
    exampleTr: 'Kara bulutlar fırtınanın kopmak üzere olduğunu açıkça gösteriyordu.',
    synonyms: ['impending', 'about to happen'], family: ['imminence'] },
  { code: 'predict', title: 'önceden kestirmek, önceden söylemek', pos: 'fiil', cefr: 'B2', ipa: '/prɪˈdɪkt/',
    text: "Bir şeyin olacağını olmadan önce söylemek: predict the weather. Adı 'prediction' (öngörü), sıfatı 'predictable' (öngörülebilir); tersi 'unpredictable'. 'Estimate' bir miktarı ya da olasılığı kabaca hesaplamaktır; 'predict' ise ne olacağını önceden söylemektir.",
    example: 'It is still hard to predict exactly how much rain each region will get next year.',
    exampleTr: 'Gelecek yıl her bölgeye ne kadar yağmur düşeceğini tam olarak önceden kestirmek hâlâ zor.',
    synonyms: ['forecast', 'foresee'], family: ['prediction', 'predictable', 'unpredictable'] },
  { code: 'withstand', title: 'dayanmak, karşı koymak (bir güce, baskıya)', pos: 'fiil', cefr: 'C1', ipa: '/wɪðˈstænd/',
    text: "Bir yapının ya da malzemenin zarar görmeden bir güce dayanması: withstand an earthquake, withstand high temperatures. Geçmiş biçimi 'withstood'. Nesnesini edatsız alır; 'withstand against' denmez.",
    example: 'The new bridge was designed to withstand very strong winds.',
    exampleTr: 'Yeni köprü çok güçlü rüzgârlara dayanacak biçimde tasarlandı.',
    synonyms: ['resist', 'endure'], family: [] },
  { code: 'collapse', title: 'çökmek, yıkılmak; çöküş', pos: 'fiil', cefr: 'B2', ipa: '/kəˈlæps/',
    text: "Bir yapının birden yıkılıp çökmesi: the roof collapsed. Aynı biçimde isim olarak da kullanılır: the collapse of a building. Mecaz anlamda bir şirketin ya da düzenin çöküşü, insan için yorgunluktan yığılıp kalmaktır.",
    example: 'The roof of the old barn collapsed under the weight of the snow.',
    exampleTr: 'Eski ahırın çatısı karın ağırlığı altında çöktü.',
    synonyms: ['fall down', 'cave in'], family: ['collapsible'] },
  { code: 'release', title: 'salmak, açığa çıkarmak, serbest bırakmak', pos: 'fiil', cefr: 'B2', ipa: '/rɪˈliːs/',
    text: "Tutulan ya da birikmiş bir şeyi dışarı bırakmak: release energy, release heat, release a prisoner. Bir filmi, şarkıyı ya da ürünü piyasaya çıkarmak anlamı da var. İsim biçimi aynıdır: the release of energy.",
    example: 'When wood burns, it releases energy in the form of heat and light.',
    exampleTr: 'Odun yanarken enerjiyi ısı ve ışık olarak açığa çıkarır.',
    synonyms: ['give off', 'set free'], family: [] },
  { code: 'estimate', title: 'tahmin etmek, kabaca hesaplamak', pos: 'fiil', cefr: 'B2', ipa: '/ˈestɪmeɪt/',
    text: "Bir sayıyı, miktarı ya da olasılığı eldeki bilgilere dayanarak yaklaşık olarak hesaplamak: estimate the cost. İsim olarak okunuşu değişir: an estimate /ˈestɪmət/ (tahmin). 'Underestimate' olduğundan az, 'overestimate' olduğundan çok sanmaktır.",
    example: 'Experts estimate that the repairs will take about two years.',
    exampleTr: 'Uzmanlar onarımın yaklaşık iki yıl süreceğini tahmin ediyor.',
    synonyms: ['assess', 'work out roughly'], family: ['estimation', 'underestimate', 'overestimate'] },
  { code: 'reinforce', title: 'güçlendirmek, sağlamlaştırmak', pos: 'fiil', cefr: 'C1', ipa: '/ˌriːɪnˈfɔːs/',
    text: "Bir yapıyı ek malzemeyle daha dayanıklı kılmak: reinforce a wall. 'Reinforced concrete' betonarme, yani içine çelik çubuk konmuş betondur. Mecaz anlamda bir düşünceyi ya da davranışı pekiştirmektir: reinforce a belief.",
    example: 'Workers reinforced the old stone wall with steel bars.',
    exampleTr: 'İşçiler eski taş duvarı çelik çubuklarla güçlendirdi.',
    synonyms: ['strengthen', 'support'], family: ['reinforcement'] },
  { code: 'give way', title: 'çökmek, kırılmak (yük ya da baskı altında)', pos: 'öbek fiil', cefr: 'C1', ipa: '/ˌɡɪv ˈweɪ/',
    text: "Bir yapının ya da zeminin taşıdığı yüke dayanamayıp çökmesi ya da kırılmasıdır: the floor gave way. 'Give way to' ise bir şeye yerini bırakmak (Fear gave way to relief) ve trafikte yol vermek demektir.",
    example: 'Old wooden shelves can give way if you put too many heavy books on them.',
    exampleTr: 'Eski tahta raflar üstlerine çok fazla ağır kitap konursa çökebilir.',
    synonyms: ['collapse', 'break'], family: [] },
  { code: 'bring about', title: 'yol açmak, neden olmak; gerçekleştirmek', pos: 'öbek fiil', cefr: 'C1', ipa: '/ˌbrɪŋ əˈbaʊt/',
    text: "Bir değişikliğe ya da sonuca yol açmak: bring about change, bring about the collapse of something. Geçmiş biçimi 'brought about'. Edilgen de kurulur: changes brought about by new technology.",
    example: 'The new manager hopes to bring about real changes in the way the company works.',
    exampleTr: 'Yeni müdür, şirketin çalışma biçiminde gerçek değişikliklere yol açmayı umuyor.',
    synonyms: ['cause', 'lead to', 'result in'], family: [] },
];

const items = [
  // ---------- kelime ----------
  { id: 'fd-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['abruptly', 'precisely'],
    level: 'kolay', cefr: 'C1', konu: ['zarf'],
    q: 'Stress builds up slowly along a fault, often over hundreds of years, but when the rocks on either side finally slip, much of that stress is released ----, and the ground above begins to shake.',
    options: ['gradually', 'abundantly', 'precisely', 'abruptly', 'reluctantly'], answer: 3,
    explain: "Cümle 'but' ile iki zıt durumu bağlıyor: gerilim bir fay boyunca yavaş yavaş, çoğu zaman yüzlerce yıl içinde birikiyor; kayaçlar sonunda kayınca ise bir anda boşalıyor ve yer sarsılmaya başlıyor. Boşluğa 'birdenbire, ansızın' anlamındaki 'abruptly' gelir. 'Gradually' (yavaş yavaş) 'but' ile kurulan karşıtlığı ortadan kaldırır; yavaş birikmenin karşısına yine yavaş bir boşalma koyar. 'Precisely' (tam olarak) bir ölçünün ya da zamanın doğruluğunu vurgular; gerilimin nasıl boşaldığını anlatmaz. 'Abundantly' (bol bol) biçimce benzer ama hızı değil miktarı anlatır; miktar zaten 'much of that stress' ile verilmiş. 'Reluctantly' (isteksizce) ancak isteği olan bir canlı için kullanılır." },

  // ---------- dil bilgisi ----------
  { id: 'fd-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['eşleşik bağlaç'],
    q: 'During strong shaking, loose sand that is full of water may start to behave ---- like solid ground ---- like a thick liquid, which is why buildings standing on it can tilt or sink.',
    options: ['neither / nor', 'whether / or', 'not only / but also', 'either / or', 'not / but'], answer: 4,
    explain: "'Which is why' ile gelen sonuç, yani binaların eğilmesi ya da batması, kumun artık katı bir zemin gibi değil koyu bir sıvı gibi davranmasından doğar. Bunu 'not … but' (… değil, …) kurar: 'not like solid ground but like a thick liquid'. 'Not only … but also' kumun aynı anda hem katı zemin hem sıvı gibi davrandığını söyler; bu kendi içinde çelişkilidir. 'Either … or' iki davranıştan hangisinin olduğunu belirsiz bırakır, 'neither … nor' ise ikisini de dışlar; ikisi de binaların neden eğildiğini açıklamaz. 'Whether … or' öbekleri de bağlayabilir, ama o zaman 'ister … ister' anlamında bir ilgisizlik bildirir (whether by car or on foot); 'behave' fiilinin istediği 'nasıl davrandığı' bilgisini veremez, bu yüzden cümle hem yapıca hem anlamca bozulur." },

  { id: 'fd-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['reinforce'],
    level: 'orta', cefr: 'B2', konu: ['edilgen', 'zaman'],
    q: 'When the engineers returned to the old school a year later, they ---- that its weakest columns ---- with steel jackets since their first inspection.',
    options: ['find / have been reinforced', 'had found / were reinforcing', 'found / had been reinforced', 'have found / had reinforced', 'were finding / would reinforce'], answer: 2,
    explain: "'When the engineers returned … a year later' geçmişte olmuş bir olayı anlatıyor; mühendislerin durumu fark etmesi de o ana aittir: 'found'. Kolonları biri güçlendirmiştir, kolonlar kendi kendini güçlendirmez; bu yüzden edilgen gerekir. Güçlendirme mühendislerin geri döndüğü andan önce, ilk denetimden o yana yapılmıştır: 'had been reinforced' (past perfect edilgen). 'Find / have been reinforced' anlatıyı şimdiki zamana çeker; geçmişteki dönüşle uyuşmaz. 'Had reinforced' ve 'were reinforcing' etken çatıdadır ve kolonları güçlendiren özneymiş gibi gösterir. 'Would reinforce' güçlendirmeyi sonraya atar; 'since their first inspection' ile çelişir." },

  { id: 'fd-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['nicelik'],
    q: 'In towns fairly close to the epicentre, the strongest shaking may begin only ---- seconds after an early warning arrives, which leaves people there ---- time to do anything more than drop to the floor and take cover.',
    options: ['a few / a little', 'quite a few / little', 'a little / little', 'quite a few / a little', 'a few / little'], answer: 4,
    explain: "İlk boşluktan sonra sayılabilen çoğul 'seconds', ikincisinden sonra sayılamayan 'time' geliyor. 'Only' ile birlikte 'yalnızca birkaç saniye' anlamını 'a few' kurar. İkinci boşlukta cümlenin geri kalanı ('to do anything more than drop to the floor') yere çömelip korunmaktan fazlasına zaman kalmadığını söylüyor; bu olumsuz vurguyu 'little' (pek az) verir: 'little time'. 'A few / a little' ikinci yarıda 'biraz zaman var' der; olumlu vurgu 'anything more than' ile uyuşmaz. 'Quite a few' 'birkaç' değil 'epey, hayli' demektir; 'only' ile ve zamanın az kalmasıyla çelişir, bu yüzden 'quite a few' ile başlayan iki seçenek de elenir. 'A little / little' ise sayılamayan isimle gelen 'a little'ı sayılabilen 'seconds' ile kullanıyor." },

  // ---------- boşluklu metin (5 boşluk) ----------
  { id: 'fd-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T,
    cards: ['fault', 'release', 'seismic'],
    level: 'orta', cefr: 'B2', title: 'Birkaç saniyelik uyarı',
    text: 'When a fault slips, the energy stored in the surrounding rock is released and travels outwards as seismic waves, including P waves and S waves. (1) ---- their greater speed, P waves are always the first to reach any given place. They usually cause only mild shaking, (2) ---- S waves, which arrive a little later, shake the ground far more strongly. Earthquake early warning systems (3) ---- this short delay. Sensors placed near active faults pick up the first P waves, and a computer quickly works out where the earthquake began and how large it is likely to be. As soon as these estimates (4) ---- ready, an alert is sent to phones, trains and factories in the area. Such systems do not predict earthquakes. (5) ----, they report one that has already begun, and they do so faster than the most damaging waves can travel. The warning may come only a few seconds before the strong shaking, but that can be enough for trains to slow down and for people to take cover under a sturdy table. Places very close to the epicentre, however, may get no warning at all.',
    steps: [
      { konu: ['edat'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['Despite', 'Instead of', 'Apart from', 'Owing to', 'Regardless of'], answer: 3,
        explain: "P dalgalarının her yere ilk ulaşmasının nedeni daha hızlı olmalarıdır; boşluğa neden bildiren 'owing to' (… nedeniyle, … sayesinde) gelir. 'Despite' (… -e rağmen) ve 'regardless of' (… -e bakmaksızın) hız ile ilk ulaşma arasında bir karşıtlık ya da ilgisizlik varmış gibi gösterir; oysa biri ötekinin nedenidir. 'Apart from' (… dışında, … bir yana) hızı ayrı bir özellik gibi sayar ve neden-sonuç bağını koparır. 'Instead of' (… yerine) burada anlam kurmaz." },
      { konu: ['bağlaç'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['because', 'whereas', 'unless', 'so that', 'as long as'], answer: 1,
        explain: "İki dalga türü karşılaştırılıyor: P dalgaları genellikle hafif sarsar, biraz sonra gelen S dalgaları ise yeri çok daha güçlü sarsar. Bu karşılaştırmayı 'whereas' (-ken, oysa) kurar. 'Because' S dalgalarının güçlü sarsmasını P dalgalarının hafif sarsmasının nedeni yapar; aralarında böyle bir bağ yok. 'Unless' (-medikçe) ve 'as long as' (-dığı sürece) bir koşul, 'so that' (-sın diye) bir amaç bildirir; üçü de cümlenin anlamını bozar." },
      { konu: ['kelime', 'fiil'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['exploit', 'narrow', 'ignore', 'withstand', 'reverse'], answer: 0,
        explain: "Sonraki cümleler erken uyarı sistemlerinin P ve S dalgaları arasındaki kısa gecikmeden nasıl yararlandığını anlatıyor: algılayıcılar ilk P dalgalarını yakalıyor, uyarı güçlü sarsıntıdan önce gönderiliyor. 'Exploit' burada 'bir şeyden yararlanmak, onu kullanmak' anlamındadır; başka bağlamlarda 'sömürmek, kötüye kullanmak' anlamına da gelir (exploit workers), ama bilim metinlerinde çoğu zaman bu yansız anlamdadır. 'Narrow' (daraltmak) ve 'reverse' (tersine çevirmek) sistemlerin yapabileceği bir şey değildir; gecikme dalgaların hızından doğar. 'Ignore' (görmezden gelmek) parçayla çelişir, çünkü sistemler tam da bu gecikmeye dayanır. 'Withstand' (bir güce dayanmak) bir gecikmeyle birlikte anlam kurmaz." },
      { konu: ['zaman uyumu'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['will be', 'were', 'had been', 'are', 'would be'], answer: 3,
        explain: "'As soon as' ile kurulan zaman cümleciği gelecekteki ya da her zaman yinelenen bir olayı anlatırken 'will' almaz. Ana cümle genel bir işleyişi geniş zamanla anlatıyor ('an alert is sent'); yan cümleye de geniş zaman gelir: 'are ready'. 'Will be' ve 'would be' zaman cümleciğinde bu anlamda kullanılmaz. 'Were' ve 'had been' geçmişe kayar; geniş zamanla anlatılan işleyişle uyuşmaz." },
      { konu: ['bağlantı zarfı'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['Likewise', 'Meanwhile', 'Instead', 'Otherwise', 'For instance'], answer: 2,
        explain: "Önceki cümle bu sistemlerin depremi önceden kestirmediğini söylüyor; boşluktan sonraki cümle ise ne yaptıklarını anlatıyor: başlamış bir depremi, en çok hasar veren dalgalardan daha hızlı biçimde duyuruyorlar. Reddedilen işlevin yerine asıl işlevi koyan bağlantı zarfı 'instead'dır (bunun yerine). 'Likewise' (aynı biçimde) benzerlik, 'for instance' (örneğin) örnek, 'meanwhile' (bu arada) eş zamanlılık, 'otherwise' (aksi hâlde) koşul bildirir; hiçbiri iki cümle arasındaki düzeltme ilişkisini kurmaz." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'fd-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['aftershock'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although most aftershocks are far weaker than the main earthquake, ----.',
    options: [
      'many of them are too small for people living nearby to notice at all',
      'seismologists can usually tell them apart from the main shock on their records',
      'they tend to become less frequent as the weeks go by',
      'a strong one can still damage buildings weakened by the first shock',
      'the shaking they cause seldom lasts longer than a few seconds in any one place',
    ], answer: 3,
    explain: "'Although' karşıtlık ister: artçı sarsıntıların çoğu ana depremden çok daha zayıftır, yine de güçlü bir artçı, ilk sarsıntının zayıflattığı binalara zarar verebilir. Öteki seçenekler zayıflıkla uyumludur ya da onunla ilgisizdir: birçoğunun yakında yaşayanların fark edemeyeceği kadar küçük olması ve sarsıntının birkaç saniyeden uzun sürmemesi zayıflığın doğal sonucudur. Haftalar geçtikçe seyrekleşmeleri ve sismologların onları ana depremden ayırt edebilmesi de zayıflıkla bir karşıtlık kurmaz." },
  { id: 'fd-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['devastating'],
    level: 'orta', cefr: 'B2', konu: ['koşul'],
    q: '----, even a moderate earthquake can be devastating.',
    options: [
      'If houses have been built cheaply and without proper checks',
      'As long as houses are built to strict modern safety standards',
      'Unless most houses in the area have weak and poorly made walls',
      'Provided that the area lies a long way from any active fault',
      'Once people have practised what to do when the ground starts shaking',
    ], answer: 0,
    explain: "Ana cümle orta büyüklükteki bir depremin bile yıkıcı olabileceğini söylüyor; bunun koşulu evlerin ucuza ve gerekli denetimler yapılmadan yapılmış olmasıdır: 'If houses have been built cheaply and without proper checks'. 'As long as' ile kurulan seçenek koşulu tersine çevirir: evler modern güvenlik ölçütlerine göre yapıldıysa yıkım değil, korunma beklenir. 'Unless' ile kurulan seçenek de aynı tersliğe düşer: evlerin duvarları zayıf ve özensiz değilse yıkım beklenmez. Bölgenin etkin faylardan uzak olması ve insanların sarsıntıda ne yapacaklarını önceden çalışmış olması ise yıkımın değil, korunmanın koşuludur." },

  // ---------- çeviri ----------
  { id: 'fd-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['seismic'],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Because soft ground can amplify seismic waves, buildings standing on it may shake far more strongly than those on nearby solid rock, even if they are the same distance from the epicentre.',
    options: [
      'Yumuşak zemin sismik dalgaları büyütebildiği için bu zeminde duran binalar, merkez üssüne aynı uzaklıkta olsalar bile, yakındaki sağlam kaya üzerindekilerden çok daha şiddetli sarsılabilir.',
      'Yumuşak zemin sismik dalgaları büyütebildiği için bu zeminde duran binalar, merkez üssünden daha uzak olsalar bile, yakındaki sağlam kaya üzerindekilerden biraz daha şiddetli sarsılabilir.',
      'Yumuşak zemin sismik dalgaları büyütebildiği için bu zeminde duran binalar, merkez üssüne aynı uzaklıkta olsalar bile, yakındaki sağlam kaya üzerindekilerden biraz daha şiddetli sarsılabilir.',
      'Yumuşak zemin sismik dalgaları büyütebildiği için bu zeminde duran binalar, merkez üssünden daha uzak olsalar bile, yakındaki sağlam kaya üzerindekilerden çok daha şiddetli sarsılabilir.',
      'Yumuşak zemin sismik dalgaları büyütebildiği için bu zeminde duran binalar, merkez üssünden daha uzak olsalar bile, yakındaki sağlam kaya üzerindekilerden çok daha şiddetli sarsılır.',
    ], answer: 0,
    explain: "'Because' nedeni verir: yumuşak zemin sismik dalgaları büyütebilir; bu yüzden üzerindeki binalar yakındaki sağlam kaya üzerindekilerden çok daha şiddetli sarsılabilir. 'Even if they are the same distance from the epicentre' bu farkın, merkez üssüne uzaklık aynıyken de görüldüğünü söyler. 'Merkez üssünden daha uzak olsalar bile … çok daha şiddetli sarsılabilir' diyen çeviri kıyaslanan durumu değiştiriyor: cümle uzaklık eşitken ne olduğunu anlatıyor. 'Sarsılır' ile biten seçenek uzaklık hatasına ek olarak 'may'in bildirdiği olasılığı kesinliğe çeviriyor. 'Aynı uzaklıkta olsalar bile … biraz daha şiddetli' ifadesi kısıtı koruyor, ama 'far more' (çok daha) derecesini zayıflatıyor. Binaları merkez üssünden daha uzağa koyup farkı 'biraz' diye veren çeviride hem kısıt hem derece bozuk." },
  { id: 'fd-c2', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'C1', konu: ['ortaç öbeği'],
    q: 'Bina ile temeli arasına yerleştirilen kauçuk yastıklar, yer sarsıntısının büyük bölümünü emerek üst katlara ulaşan hareketi azaltır.',
    options: [
      'Steel springs placed between a building and its foundation reduce the movement reaching the upper floors by absorbing some of the ground shaking.',
      'Rubber pads placed between a building and its foundation reduce the movement reaching the upper floors by absorbing much of the ground shaking.',
      'Rubber pads placed between a building and its foundation delay the movement reaching the upper floors by absorbing much of the ground shaking.',
      'Rubber pads placed between a building and its foundation delay the movement reaching the upper floors by absorbing some of the ground shaking.',
      'Rubber pads placed between a building and its foundation reduce the movement reaching the upper floors by absorbing some of the ground shaking.',
    ], answer: 1,
    explain: "Türkçe cümlede iki ortaç öbeği var: 'bina ile temeli arasına yerleştirilen' kauçuk yastıkları, 'üst katlara ulaşan' da hareketi niteliyor; '-erek' eki ise azaltmanın yolunu veriyor. İngilizcede bunlar 'placed between …', 'reaching the upper floors' ve 'by absorbing much of …' ile karşılanır. 'Rubber pads … reduce … by absorbing some of the ground shaking' diyen seçenek 'büyük bölümü'nü 'bir kısmı'na indiriyor. 'Steel springs' ile başlayan çeviri kauçuk yastıkları çelik yaylarla değiştiriyor; emilen miktar da bir kısma inmiş. 'Delay the movement … much of' seçeneğinde emilen miktar yerinde, ama yastıklar hareketi azaltmıyor, geciktiriyor. Hareketin geciktiğini ve sarsıntının ancak bir kısmının emildiğini söyleyen çeviride hem etki hem miktar yanlış." },

  // ---------- okuma parçası (3 soru, YÖKDİL biçimi) ----------
  { id: 'fd-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T,
    cards: ['magnitude', 'predict', 'precisely', 'tremor', 'estimate', 'imminent'],
    level: 'orta', cefr: 'B2', title: 'Depremi ölçmek, depremi önceden bilmek',
    text: "When news reports describe an earthquake, the figure they give is usually its magnitude, which seismologists calculate from the records of instruments called seismometers. The first widely used magnitude scale was introduced in 1935 by the American seismologist Charles Richter. Like the scales that came after it, his scale is logarithmic: each step of one whole number stands for waves about ten times larger on a seismometer's record and for roughly 32 times as much energy. Richter's method worked well for small and moderate earthquakes recorded nearby, but it tended to underestimate the largest ones. For this reason, seismologists now usually describe major earthquakes with the moment magnitude scale, which is based mainly on how large an area of the fault slipped and how far its two sides moved. Measuring an earthquake after it has happened, however, is very different from knowing about it in advance. Despite decades of research, no one has found a reliable way to predict precisely when and where a particular earthquake will strike or how strong it will be. Small tremors sometimes come before a large earthquake, but far more often they are not followed by anything bigger. What scientists can do is estimate the chance of a strong earthquake on a given fault over the coming decades, by looking at how quickly stress builds up there and how often the fault has broken in the past. Such figures cannot say when the next earthquake will come, but they help to decide where the strictest building rules are needed.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the moment magnitude scale ----.',
        options: [
          'was devised by Charles Richter to replace the scale he had introduced in 1935',
          'measures the energy of earthquakes in a linear rather than a logarithmic way',
          'is mainly used for small earthquakes that are recorded close to a seismometer',
          'is favoured for very large earthquakes because an earlier method rated them too low',
          'can tell seismologists well in advance how large the next earthquake on a given fault will be',
        ], answer: 3,
        explain: "Parçaya göre Richter'in yöntemi yakında kaydedilen küçük ve orta depremlerde iyi sonuç veriyordu, ama en büyük depremleri olduğundan küçük gösterme eğilimindeydi; bu yüzden büyük depremler bugün genellikle moment büyüklüğü ölçeğiyle anlatılıyor. Doğru seçenek bunu başka sözlerle söyler: eski yöntem en güçlü depremler için fazla düşük sayılar veriyordu. Ölçeği Richter'in kendi ölçeğinin yerine koymak için geliştirdiği parçada geçmiyor. Parça sonraki ölçeklerin de logaritmik olduğunu söylüyor; doğrusal ölçtüğünü söyleyen seçenek bununla çelişir. Parçaya göre moment büyüklüğü ölçeği özellikle büyük depremler için tercih ediliyor; küçük ve yakın depremler için kullanıldığını söyleyen seçenek bu vurguyu tersine çevirir. Bir sonraki depremin büyüklüğünü önceden söyleyebildiği de parçayla çelişir: parçaya göre bir depremin zamanı, yeri ve gücü önceden kestirilemiyor." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that a series of small tremors near a fault ----.',
        options: [
          'is likely to be followed by a large earthquake on the same fault within a few days',
          'may release enough stress along the fault to prevent a larger earthquake there',
          'is not on its own enough to show that a large earthquake is imminent',
          "can usually be measured more accurately with Richter's method than with any other",
          'suggests that the fault has seldom produced strong earthquakes in the past',
        ], answer: 2,
        explain: "Parçaya göre küçük sarsıntılar bazen büyük bir depremden önce gelir, ama çok daha sık olarak ardından daha büyük bir deprem gelmez. Buradan, bir fayın yakınındaki küçük sarsıntıların büyük bir depremin yaklaştığını göstermeye tek başına yetmediği çıkar. Aynı fayda birkaç gün içinde büyük bir depremin gelmesinin olası olduğunu söyleyen seçenek bu bilgiyle çelişir. Küçük sarsıntıların daha büyük bir depremi önleyecek kadar gerilim boşaltabildiği, Richter'in yöntemiyle başka yöntemlerden daha doğru ölçüldüğü ya da fayın geçmişte seyrek büyük deprem ürettiğini gösterdiği parçada söylenmiyor." },
      { konu: ['ayrıntı'],
        q: 'According to the passage, estimates of the chance of a strong earthquake on a fault ----.',
        options: [
          'can tell people the year in which the next earthquake there will happen',
          "take into account the fault's record of earlier earthquakes",
          'are of little use when decisions about building rules are made',
          'depend mainly on how many small tremors are felt each year',
          "are calculated with the help of Richter's original method",
        ], answer: 1,
        explain: "Parçaya göre bilim insanları bir fayda güçlü bir deprem olasılığını, gerilimin orada ne kadar hızlı biriktiğine ve fayın geçmişte ne sıklıkla kırıldığına bakarak tahmin ediyor; doğru seçenek bu ikincisini, fayın eski depremlerinin kaydını başka sözlerle verir. Parça bu sayıların bir sonraki depremin ne zaman geleceğini söyleyemediğini belirtiyor; yılı söyleyebildiğini öne süren seçenek bununla çelişir. Sayıların en sıkı yapı kurallarının nerede gerektiğine karar vermeye yaradığı söylendiği için yapı kararlarında pek işe yaramadığını söyleyen seçenek de yanlış. Her yıl hissedilen küçük sarsıntıların sayısı ya da Richter'in özgün yöntemi bu tahminlerin dayanağı olarak geçmiyor." },
    ] },

  // ---------- paragraf tamamlama ----------
  { id: 'fd-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['crust', 'fault', 'tremor'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: "Much of Turkey lies on the Anatolian plate, a fairly small piece of the Earth's rigid outer shell that is caught between the Eurasian plate to the north and the Arabian plate to the south-east. ----. Most of this sideways movement takes place along two great faults, long breaks in the crust where the blocks of rock on each side slide past one another. The North Anatolian Fault runs for more than a thousand kilometres across the north of the country, while the East Anatolian Fault crosses the south-east. Because stress builds up along both faults year after year, scientists monitor them closely.",
    options: [
      'The Eurasian plate, which also carries most of Europe and Asia, is one of the largest plates on Earth',
      'Seismometers across the country record many small tremors every day, most of them too weak to be felt',
      'As the Arabian plate keeps pushing northwards, the Anatolian plate is slowly squeezed out towards the west',
      'Over millions of years, the same pressure has also raised the high mountains around the central plateau',
      'Some of the oldest known settlements in the world were founded on this land thousands of years ago',
    ], answer: 2,
    explain: "Boşluktan sonraki cümle 'this sideways movement' (bu yana doğru hareket) diye başlıyor; demek ki boşlukta yana doğru bir hareket anlatılmalı. Doğru cümle bunu verir: Arap levhası kuzeye ittikçe Anadolu levhası yavaş yavaş batıya doğru sıkışıp kayar; sonraki cümleler de bu hareketin iki büyük fay boyunca gerçekleştiğini anlatır. Avrasya levhasının büyüklüğü, sismometrelerin kaydettiği küçük sarsıntılar ve bu topraklardaki eski yerleşimler 'this sideways movement' için bir hareket vermez. Aynı basıncın yüksek dağları yukarı ittiğini söyleyen cümle bir hareketten söz eder, ama bu hareket yana değil yukarı doğrudur; 'sideways' ile çelişir." },

  // ---------- akışı bozan cümle ----------
  { id: 'fd-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T,
    cards: ['withstand', 'reinforce', 'give way', 'bring about', 'collapse'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Whether a building can withstand a strong earthquake depends largely on how it was designed and built.',
      'Modern building codes, for example, call for columns and beams of reinforced concrete that can bend slightly without breaking.',
      'When such rules are ignored, columns made with weak concrete or too little steel may give way, bringing about the collapse of the floors they support.',
      'This is why engineers often say that it is badly built structures, rather than earthquakes themselves, that do most of the harm.',
      'Tall buildings have also become popular in crowded cities, where they make the most of the limited land available.',
    ], answer: 4,
    explain: "Parça binaların depreme dayanıklılığını anlatıyor. I. cümle konuyu açar: bir binanın güçlü bir depreme dayanıp dayanamayacağı büyük ölçüde nasıl tasarlanıp yapıldığına bağlıdır. II. cümle ('for example') modern yönetmeliklerin istediği, kırılmadan biraz esneyebilen betonarme kolon ve kirişleri örnek verir. III. cümle ('such rules') bu kurallara uyulmayınca kolonların çökebileceğini anlatır. IV. cümle ('This is why') bu dersi mühendislerin sık kullandığı bir sözle özetler. V. cümle ise yüksek binaların kalabalık kentlerde sınırlı araziyi iyi kullandığı için yaygınlaştığını söylüyor; 'buildings' ve 'also' bir devam izlenimi verse de konusu depreme dayanıklılık değil, kentte arazi kullanımıdır. Bozan cümlenin sonda olması seyrektir; burada akış IV. cümlede tamamlanıyor ve V. cümle ona hiçbir şey eklemiyor." },
];

export default { id: 'fen-deprem', course: C, title: U, order: 4, cards, items };
