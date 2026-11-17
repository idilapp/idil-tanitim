// iDil › Genel › Maraton ve dayanıklılık.
// Tümü özgün: Claude yazdı (17 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (çoğaltma 4. tur planı §7.3 ve yerleşik bilgi; yalnız olgular, metin özgün). Her olgu tek öğede:
// - söylence: Maraton'daki zaferden sonra Atina'ya koşup haberi veren ve yığılıp ölen ulak. Herodot (MÖ 5. yüzyıl) bu
//   koşuyu anlatmaz; onun Pheidippides'i savaştan önce yardım istemek için Atina'dan Sparta'ya yaklaşık iki günde koşar.
//   Ölen ulak anlatısı yüzyıllar sonra Plutarkhos ve Lukianos gibi yazarlarda geçer; koşucunun adında anlaşmazlar. İki
//   ayrı anının birleşmiş olabileceği "some scholars think" diye temkinli (gn-o1);
// - ilk modern olimpik maraton: Nisan 1896, Atina; Maraton kasabasından Atina'daki stada; Yunan koşucu Spyridon Louis
//   kazandı. Seyircilerin yol boyunca toplanması "are said to have" diye temkinli (gn-z1);
// - 42,195 km 1908 Londra Oyunları'nın parkurundan geldi, 1921'de standart oldu. Parkurun bir kraliyet konutundan başlayıp
//   kraliyet locasının önünde bitmesi "according to a popular story … historians disagree" diye temkinli; yer adı yok (gn-p1);
// - Eliud Kipchoge, Ekim 2019, Viyana, 1:59:40; dönüşümlü tavşan koşucular ve önden giden araç yüzünden resmî rekor
//   sayılmadı. Çeldiricide: o sırada resmî dünya rekoru zaten ondaydı (2018, yerleşik bilgi; yıl yazılmadı) (gn-p2);
// - Kathrine Switzer 1967 Boston'a numara takarak katıldı (bir görevlinin onu durdurmaya çalıştığı fotoğraflar yerleşik
//   bilgi); Boston kadınları 1972'de resmen kabul etti; kadınlar olimpik maratonda ilk kez 1984'te koştu, Joan Benoit
//   (ABD) kazandı. Bozan cümle: Boston'a bugün çoğu koşucunun derece barajıyla girmesi (yerleşik bilgi) (gn-b1);
// - "duvara toslamak": kas ve karaciğerdeki glikojenin azalması; çoğu zaman yarışın son üçte birinde ("tends to") (gn-b2);
// - Bramble ve Lieberman, 2004, Nature: dayanıklılık koşusu varsayımı. Uzun yaylanan tendonlar, gövdeyi dengede tutan
//   büyük kalça kasları ve terleme "such as" ile örnek olarak; dört ayaklıların çoğunun soluyarak serinlemesi; ısrarla
//   kovalama avcılığı "some researchers have linked" ve yalnız az sayıda toplumda kaydedilmesi temkinli (gn-o2);
// - genel ve temkinli bilgiler: yüksek rakımda vücudun daha çok alyuvar üretebilmesi "is believed" (gn-c2); gereğinden çok
//   su içmenin de zararlı olabilmesi (gn-d2).

const T = 'taslak';
const C = 'genel';
const U = 'Maraton ve dayanıklılık';

const cards = [
  // ---------- isim ----------
  { code: 'stamina', title: 'dayanıklılık, dayanma gücü', pos: 'isim', cefr: 'B2', ipa: '/ˈstæmɪnə/',
    text: "Uzun süre yorulmadan bedensel ya da zihinsel çaba gösterebilme gücü: build up stamina (dayanıklılık kazanmak), lack stamina (dayanıklılığı az olmak). Sayılamaz isimdir. 'Strength' anlık kas gücünü, 'stamina' bu gücün ne kadar sürdüğünü anlatır; 'endurance' ile yakın anlamlıdır.",
    example: 'After a long illness, it took my grandfather months to regain the stamina to walk to the market and back.',
    exampleTr: 'Uzun bir hastalıktan sonra dedemin pazara gidip gelecek gücü yeniden kazanması aylar sürdü.',
    synonyms: ['endurance', 'staying power'], family: [] },
  { code: 'messenger', title: 'ulak, haberci', pos: 'isim', cefr: 'B2', ipa: '/ˈmesɪndʒə/',
    text: "Bir haberi ya da mektubu bir yerden başka bir yere götüren kişi. Tarih metinlerinde atlı ya da yaya ulaklar için sık geçer; bugün anlık mesajlaşma programlarının adında da kullanılır. Kökü 'message' (ileti, haber).",
    example: 'Before the telegraph, news of a victory could take days to arrive, carried by a messenger on horseback.',
    exampleTr: 'Telgraftan önce bir zafer haberi, atlı bir ulakla taşındığı için günlerce sonra gelebilirdi.',
    synonyms: ['courier', 'envoy'], family: ['message'] },
  { code: 'pace', title: 'hız, tempo', pos: 'isim', cefr: 'B2', ipa: '/peɪs/',
    text: "Birinin yürüme, koşma ya da çalışma hızı; bir şeyin ilerleme temposu: at a steady pace (düzenli bir tempoyla), the pace of change (değişimin hızı), keep pace with (… ile aynı hızda gitmek). Fiil olarak 'pace yourself' (gücünü bölerek tempoyu ayarlamak). Koşuda tempoyu belirleyen koşucuya 'pacemaker' denir; aynı sözcük kalp pilinin de adıdır.",
    example: 'The walking group moves at a gentle pace, so even people who have not exercised for years can join in.',
    exampleTr: 'Yürüyüş grubu yavaş bir tempoyla ilerliyor; bu yüzden yıllardır spor yapmamış kişiler bile katılabiliyor.',
    synonyms: ['speed', 'rate'], family: ['pacemaker'] },
  { code: 'hydration', title: 'vücudun yeterince sıvı alması, sıvı dengesi', pos: 'isim', cefr: 'C1', ipa: '/haɪˈdreɪʃn/',
    text: "Vücuda yeterli su ve sıvı alınması ya da bu dengenin korunması. Spor ve sağlık metinlerinde sık geçer. Fiili 'hydrate' (sıvı vermek, nemlendirmek), sıfatı 'hydrated'. Sıvı kaybı ise önekli 'dehydration' ile anlatılır.",
    example: 'During the heatwave, nurses kept a close eye on the hydration of their elderly patients.',
    exampleTr: 'Sıcak hava dalgası sırasında hemşireler yaşlı hastalarının yeterince sıvı alıp almadığını yakından izledi.',
    synonyms: ['fluid intake', 'water intake'], family: ['hydrate', 'hydrated'] },
  { code: 'spectator', title: 'seyirci, izleyici (özellikle spor karşılaşmasında)', pos: 'isim', cefr: 'B2', ipa: '/spekˈteɪtə/',
    text: "Bir karşılaşmayı, yarışı ya da gösteriyi yerinde izleyen kişi. Tiyatro ve konserdeki izleyicilerin toplamı için daha çok 'audience' kullanılır; 'spectator' tek tek kişileri anlatır ve sporda yaygındır. Mecaz olarak olaylara katılmadan seyreden kişi için de geçer.",
    example: 'The stadium was half empty, and many of the spectators who did come left before the final whistle.',
    exampleTr: 'Stadyum yarı boştu ve gelen seyircilerin çoğu da son düdükten önce ayrıldı.',
    synonyms: ['onlooker', 'viewer'], family: [] },
  { code: 'ordeal', title: 'çile, ağır sınav, zorlu ve acı deneyim', pos: 'isim', cefr: 'C1', ipa: '/ɔːˈdiːl/',
    text: "Uzun süren, insanı yoran ya da korkutan bir deneyim: a terrible ordeal, go through an ordeal (çile çekmek). Sayılabilir isimdir. 'Difficulty'den güçlüdür; çoğu zaman katlanılıp atlatılan bir durumu anlatır.",
    example: 'Getting home through the snowstorm turned into a six-hour ordeal for many commuters.',
    exampleTr: 'Kar fırtınasında eve dönmek, işe gidip gelen birçok kişi için altı saatlik bir çileye dönüştü.',
    synonyms: ['trial', 'hardship'], family: [] },
  // ---------- fiil ----------
  { code: 'sprint', title: 'kısa bir mesafeyi son hızla koşmak', pos: 'fiil', cefr: 'B2', ipa: '/sprɪnt/',
    text: "Kısa bir süre olabildiğince hızlı koşmak: sprint for the bus (otobüse yetişmek için koşmak). İsim olarak 'sürat koşusu' ya da 'son hızla koşma' demektir: the 100-metre sprint. Bu tür koşuda uzman koşucuya 'sprinter' denir.",
    example: 'When she saw the bus pulling away, she sprinted to the stop and just managed to jump on.',
    exampleTr: 'Otobüsün kalktığını görünce durağa son hızla koştu ve son anda atlamayı başardı.',
    synonyms: ['dash', 'race'], family: ['sprinter'] },
  { code: 'overtake', title: 'sollamak, arkadan yetişip geçmek; geride bırakmak', pos: 'fiil', cefr: 'B2', ipa: '/ˌəʊvəˈteɪk/',
    text: "Aynı yönde giden birine ya da bir araca arkadan yetişip önüne geçmek. Düzensiz fiildir: overtake, overtook, overtaken. Mecaz olarak 'geride bırakmak, aşmak' anlamında da kullanılır: sales of e-books overtook printed books.",
    example: 'With only a few hundred metres to go, she managed to overtake the runner in front of her and finished second.',
    exampleTr: 'Bitişe yalnız birkaç yüz metre kala önündeki koşucuyu geçmeyi başardı ve ikinci oldu.',
    synonyms: ['pass', 'outstrip'], family: [] },
  { code: 'persevere', title: 'yılmadan sürdürmek, sebat etmek', pos: 'fiil', cefr: 'C1', ipa: '/ˌpɜːsɪˈvɪə/',
    text: "Zorluklara, yavaş ilerlemeye ya da başarısızlığa rağmen bir işi bırakmadan sürdürmek: persevere with something. Olumlu bir sözcüktür; inatla değil kararlılıkla ilişkilidir. Adı 'perseverance' (sebat, azim).",
    example: 'The first months of learning the violin were painful to listen to, but he persevered and now plays in a small orchestra.',
    exampleTr: 'Keman öğrendiği ilk aylar dinlemesi zor geçti ama yılmadan sürdürdü; şimdi küçük bir orkestrada çalıyor.',
    synonyms: ['persist', 'keep going'], family: ['perseverance'] },
  { code: 'qualify', title: '(yarışa, turnuvaya) katılma hakkı kazanmak; yeterlilik kazanmak', pos: 'fiil', cefr: 'B2', ipa: '/ˈkwɒlɪfaɪ/',
    text: "Bir koşulu karşılayarak bir yarışa ya da bir sonraki tura katılma hakkı kazanmak: qualify for the final. Meslek için de kullanılır: she qualified as a nurse (hemşire olarak diploma aldı). Adı 'qualification' (yeterlilik, diploma; eleme), sıfatı 'qualified' (yetkin, diplomalı); eleme turuna 'qualifier' denir.",
    example: 'Our team needs just one more win to qualify for the national tournament in May.',
    exampleTr: 'Takımımızın mayıstaki ulusal turnuvaya katılma hakkı kazanması için yalnız bir galibiyete daha ihtiyacı var.',
    synonyms: ['be eligible', 'get through'], family: ['qualification', 'qualified', 'qualifier'] },
  { code: 'applaud', title: 'alkışlamak; takdir etmek', pos: 'fiil', cefr: 'B2', ipa: '/əˈplɔːd/',
    text: "Ellerini çırparak beğeni ya da destek göstermek. Mecaz olarak birinin davranışını övmek, takdir etmek anlamına da gelir: we applaud her courage. Adı 'applause' (alkış); sayılamaz isimdir.",
    example: 'The audience applauded for several minutes when the young pianist finished her final piece.',
    exampleTr: 'Genç piyanist son parçasını bitirdiğinde dinleyiciler dakikalarca alkışladı.',
    synonyms: ['clap', 'praise'], family: ['applause'] },
  // ---------- sıfat ----------
  { code: 'gruelling', title: 'çok yorucu, insanı tüketen', pos: 'sıfat', cefr: 'C1', ipa: '/ˈɡruːəlɪŋ/',
    text: "Uzun süre büyük çaba isteyen ve insanı bedenen ya da zihnen tüketen: a gruelling journey, a gruelling schedule. İngiliz yazımı çift 'l' ile, Amerikan yazımı tek 'l' ile (grueling) yazılır. 'Tiring'den çok daha güçlüdür.",
    example: 'After a gruelling twelve-hour shift, the young doctor fell asleep on the bus home.',
    exampleTr: 'On iki saatlik yorucu bir nöbetten sonra genç doktor eve dönerken otobüste uyuyakaldı.',
    synonyms: ['exhausting', 'punishing'], family: [] },
  { code: 'amateur', title: 'amatör, işini para için değil zevk için yapan', pos: 'sıfat', cefr: 'B2', ipa: '/ˈæmətə/',
    text: "Bir işi ya da sporu meslek olarak değil, boş zamanında yapan: an amateur photographer, amateur football. İsim olarak da kullanılır: a talented amateur. Karşıtı 'professional'. 'Amateurish' ise olumsuzdur: acemice, özensiz.",
    example: 'Most of the players in the amateur league have full-time jobs and train only in the evenings.',
    exampleTr: 'Amatör ligdeki oyuncuların çoğunun tam zamanlı işi var ve yalnız akşamları antrenman yapıyorlar.',
    synonyms: ['non-professional', 'recreational'], family: ['amateurish'] },
  { code: 'elite', title: 'seçkin, en üst düzeydeki', pos: 'sıfat', cefr: 'C1', ipa: '/eɪˈliːt/',
    text: "Bir alanda en iyi, en üst düzeyde olan: elite athletes (üst düzey sporcular), an elite school. İsim olarak 'seçkinler' demektir: the political elite. Seçkinlerin üstünlüğünü savunan görüşe 'elitism' denir.",
    example: 'Only elite swimmers are allowed to train in the national centre\'s main pool.',
    exampleTr: 'Ulusal merkezin ana havuzunda yalnız üst düzey yüzücüler antrenman yapabiliyor.',
    synonyms: ['top', 'leading'], family: ['elitism', 'elitist'] },
  // ---------- zarf ----------
  { code: 'officially', title: 'resmî olarak, resmen', pos: 'zarf', cefr: 'B2', ipa: '/əˈfɪʃəli/',
    text: "Yetkili bir kurumun kararıyla, kurallara uygun biçimde: officially opened (resmen açıldı), officially recognised (resmen tanındı). Kimi zaman 'görünüşte, kâğıt üstünde' anlamı da taşır: officially he is retired, but he still comes to work. Sıfatı 'official'.",
    example: 'The new bridge was officially opened in June, although people had been crossing it for weeks.',
    exampleTr: 'Yeni köprü haziranda resmen açıldı; oysa insanlar haftalardır üstünden geçiyordu.',
    synonyms: ['formally', 'publicly'], family: ['official'] },
  { code: 'comfortably', title: 'rahatça, zorlanmadan', pos: 'zarf', cefr: 'B2', ipa: '/ˈkʌmftəbli/',
    text: "Rahat bir biçimde ya da zorlanmadan: sit comfortably, live comfortably (geçim sıkıntısı çekmeden yaşamak). Sporda 'rahat bir farkla' anlamına da gelir: win comfortably. Sıfatı 'comfortable', ismi 'comfort'.",
    example: 'The new trains are wide enough for passengers to sit comfortably even on long journeys.',
    exampleTr: 'Yeni trenler, yolcuların uzun yolculuklarda bile rahatça oturabileceği kadar geniş.',
    synonyms: ['easily', 'with ease'], family: ['comfortable', 'comfort'] },
  // ---------- öbek fiil ----------
  { code: 'slow down', title: 'yavaşlamak; yavaşlatmak', pos: 'öbek fiil', cefr: 'B1', ipa: '/ˌsləʊ ˈdaʊn/',
    text: "Hızını azaltmak ya da bir şeyin hızını azaltmak: the car slowed down, the rain slowed us down. Mecaz olarak daha sakin bir hayata geçmek için de kullanılır: you need to slow down a bit. Tek sözcük olarak 'slowdown' (yavaşlama, durgunluk) isimdir.",
    example: 'Drivers must slow down near the school when the children are going home.',
    exampleTr: 'Sürücüler, çocuklar eve dönerken okulun yakınında yavaşlamak zorunda.',
    synonyms: ['decelerate', 'ease off'], family: ['slowdown'] },
  { code: 'warm up', title: '(egzersizden önce) ısınmak; ısıtmak', pos: 'öbek fiil', cefr: 'B1', ipa: '/ˌwɔːm ˈʌp/',
    text: "Spor ya da yorucu bir hareketten önce kasları hafif hareketlerle hazırlamak. Bir şeyi ısıtmak anlamında da kullanılır: warm up the soup. Tek sözcük ya da tireli 'warm-up' isimdir: a ten-minute warm-up (on dakikalık ısınma).",
    example: 'The players warmed up with some gentle jogging and stretching before the match started.',
    exampleTr: 'Oyuncular maç başlamadan önce hafif koşu ve esneme hareketleriyle ısındı.',
    synonyms: ['loosen up', 'limber up'], family: ['warm-up'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'gn-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['gruelling', 'elite'],
    level: 'zor', cefr: 'C1', konu: ['sıfat'],
    q: 'Several runners collapsed before the finish line of the mountain race, and even the winner described it as the most ---- day of her running life.',
    options: ['gruelling', 'leisurely', 'elite', 'peaceful', 'ordinary'], answer: 0,
    explain: "Koşucuların bitiş çizgisinden önce yığılıp kalması ve 'even the winner' (kazanan bile) sözü, yarışın son derece zorlu geçtiğini gösteriyor. 'Çok yorucu, insanı tüketen' anlamı 'gruelling' ile verilir. 'Elite' (seçkin, en üst düzeydeki) bir yarışın ya da sporcunun düzeyini anlatır; bir günün ne kadar yorucu geçtiğini anlatmaz ve yığılan koşucularla bağ kurmaz. 'Leisurely' (acelesiz, rahat) ve 'peaceful' (huzurlu) anlamın tersini verir. 'Ordinary' (sıradan) da 'the most' ile birlikte yorucu bir günü anlatamaz." },

  { id: 'gn-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['slow down', 'warm up'],
    level: 'kolay', cefr: 'B1', konu: ['öbek fiil'],
    q: 'If you start to feel dizzy during a long run, you should ---- and walk for a few minutes until you feel better.',
    options: ['slow down', 'warm up', 'speed up', 'show off', 'turn up'], answer: 0,
    explain: "Uzun bir koşuda başı dönen birine verilecek öğüt, hızını azaltıp birkaç dakika yürümesidir: 'slow down' (yavaşlamak). 'Warm up' (ısınmak) koşudan önce yapılır; koşunun ortasındaki baş dönmesine çare değildir. 'Speed up' (hızlanmak) anlamın tersidir ve ardından gelen 'walk' ile çelişir. 'Show off' (gösteriş yapmak) ve 'turn up' (çıkagelmek) bağlama uymaz." },

  { id: 'gn-k3', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['stamina', 'ordeal', 'spectator'],
    level: 'orta', cefr: 'B2', konu: ['isim'],
    q: 'Long, slow runs every weekend help beginners build up the ---- they will need to keep going for several hours on race day.',
    options: ['ordeal', 'harvest', 'spectator', 'appetite', 'stamina'], answer: 4,
    explain: "Her hafta sonu yapılan uzun ve yavaş koşular, yeni başlayanların yarış günü saatlerce koşmayı sürdürebilmesi için gereken gücü kazandırıyor. Uzun süre yorulmadan çaba gösterebilme gücü 'stamina' (dayanıklılık) ile anlatılır; 'build up' ile de sık kullanılır. 'Ordeal' (çile, zorlu deneyim) katlanılan bir zorluğun adıdır; antrenmanla biriktirilen bir güç değildir. 'Spectator' (seyirci) bir kişidir; koşucu onu kendinde geliştirmez. 'Harvest' (hasat) ve 'appetite' (iştah) saatlerce koşmayı sağlayan şeyi anlatmaz." },

  // ---------- dil bilgisi ----------
  { id: 'gn-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['so/such … that'],
    q: 'It was ---- windy morning ---- several runners lost their caps in the first kilometre of the race.',
    options: ['so / that', 'too / to', 'such a / that', 'rather a / but', 'such / as'], answer: 2,
    explain: "Cümle bir derece ve onun sonucunu anlatıyor: o kadar rüzgârlı bir sabahtı ki birkaç koşucu ilk kilometrede şapkasını kaybetti. Sıfatın ardından tekil bir isim (windy morning) geldiği için yapı 'such a … that' ile kurulur. 'So … that' sıfattan sonra isim gelmediğinde kullanılır (so windy that). 'Such … as' sayılabilir tekil ismin önündeki 'a'yı düşürüyor ve sonuç bildirmez. 'Too … to' ardından mastar ister. 'Rather a … but' dil bilgisi açısından kurulabilir, ama 'but' bir karşıtlık bildirir; rüzgârla şapkaların uçması arasında karşıtlık değil, neden-sonuç ilişkisi var." },

  { id: 'gn-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['karşılaştırma'],
    q: 'My brother and I crossed the finish line at exactly the same moment, so he clearly ran ---- I did.',
    options: ['faster than', 'slower than', 'as fast as', 'fast as', 'the fastest than'], answer: 2,
    explain: "İki kardeş bitiş çizgisini tam aynı anda geçmiş; demek ki ikisi aynı hızda koştu. Eşitlik 'as … as' ile kurulur: 'as fast as'. 'Faster than' ve 'slower than' dil bilgisi açısından doğru ama iki kişiden birini daha hızlı gösteriyor; aynı anda bitirmeyle çelişiyor. 'Fast as' baştaki 'as'ı düşürüyor. 'The fastest than' en üstünlük ile karşılaştırmayı karıştırıyor; 'the fastest' ardından 'than' almaz." },

  { id: 'gn-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['kip geçmiş (modal perfect)'],
    q: 'Selin finished her first marathon in under three hours even though she had hardly trained; she ---- a great deal of natural talent.',
    options: ["can't have had", 'should have had', "needn't have had", 'might not have had', 'must have had'], answer: 4,
    explain: "Neredeyse hiç antrenman yapmamış birinin ilk maratonunu üç saatin altında bitirmesinden güçlü bir çıkarım yapılıyor: çok doğal yeteneği olmalı. Geçmişe dair güçlü tahmin 'must have + V3' ile kurulur. 'Can't have had' (olamaz) aynı yapıda ama tersini söylüyor; bu başarıyla çelişiyor. 'Might not have had' (olmayabilir) de yeteneği olmadığı yönünde bir olasılık bildiriyor; az antrenmanla gelen başarıyı açıklamaz. 'Should have had' gerçekleşmemiş bir beklentiyi ya da eleştiriyi, 'needn't have had' gereksiz yere olmuş bir şeyi anlatır; ikisi de bir yetenek tahmini kurmaz." },

  // ---------- boşluklu metin ----------
  { id: 'gn-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: ['spectator', 'applaud', 'overtake'],
    level: 'orta', cefr: 'B2', title: 'Atina, 1896',
    text: "The first modern Olympic Games (1) ---- in Athens in April 1896. By today's standards, the event was small, with athletes from relatively few countries. The organisers wanted an event that would (2) ---- Greece's ancient past, so they included a long race that began in the town of Marathon and ended in the stadium in Athens. Large numbers of spectators are said to have gathered (3) ---- the route to watch the runners go by. The runners had none of the timing chips or smooth, carefully prepared roads that marathon runners rely on today. The race was won by Spyridon Louis, a runner from Greece itself. (4) ---- he entered the stadium, the crowd rose to applaud him. The victory meant a great deal to the hosts, and Louis, (5) ---- name was soon known all over the country, became a national hero.",
    steps: [
      { konu: ['zaman: past simple'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['have opened', 'opened', 'are opening', 'had opened', 'will open'], answer: 1,
        explain: "Cümle geçmişte belli bir zamanda (April 1896) olmuş ve bitmiş bir olayı anlatıyor; bu yüzden past simple gerekir: 'opened'. 'Have opened' present perfect'tir; belli bir geçmiş tarihle kullanılmaz. 'Had opened' başka bir geçmiş olaydan önce olanı anlatır; parçanın ilk cümlesinde böyle bir dayanak yok. 'Are opening' ve 'will open' olayı bugüne ya da geleceğe taşır." },
      { konu: ['kelime', 'fiil'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['overtake', 'conceal', 'predict', 'celebrate', 'abandon'], answer: 3,
        explain: "Düzenleyiciler eski Yunan geçmişini anan bir yarış istiyordu ve bu yüzden Maraton'dan Atina'ya uzanan bir koşu eklediler. Geçmişi kutlamak, onurlandırmak anlamı 'celebrate' ile verilir. 'Overtake' (sollamak, arkadan yetişip geçmek) bir yarış sözcüğü olsa da bir ülkenin geçmişiyle kullanılmaz. 'Conceal' (gizlemek) ve 'abandon' (terk etmek) amacın tersini söyler. 'Predict' (önceden kestirmek) geleceğe ilişkindir; geçmiş önceden kestirilmez." },
      { konu: ['edat'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['between', 'into', 'along', 'above', 'off'], answer: 2,
        explain: "Seyirciler koşucuların geçişini izlemek için parkur boyunca toplanmış: bir yolun ya da çizginin uzunluğunca dizilmeyi 'along' anlatır. 'Between' iki ayrı şey ister; tek bir parkurun 'arasında' toplanılmaz. 'Into' bir yerin içine doğru hareketi, 'above' yukarıda olmayı, 'off' bir yerden uzaklaşmayı anlatır; hiçbiri yol kenarına dizilen kalabalığa uymaz." },
      { konu: ['bağlaç'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['Unless', 'Although', 'Whereas', 'When', 'So that'], answer: 3,
        explain: "Louis stada girdiği anda kalabalık onu alkışlamak için ayağa kalktı; iki olay arasında zaman ilişkisi var: 'When' (-dığında). 'Although' (-e rağmen) stada girmeyi alkışa engel gibi gösterir; mantık ters döner. 'Unless' (-medikçe) koşul, 'so that' (-sın diye) amaç bildirir. 'Whereas' (oysa) iki ayrı durumu karşılaştırır; burada karşılaştırılan bir şey yok." },
      { konu: ['sıfat cümleciği'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['who', 'which', 'where', 'whose', 'that'], answer: 3,
        explain: "Boşluktan sonra gelen 'name' Louis'ye ait: adı kısa sürede bütün ülkede bilinen Louis. Sahiplik bildiren sıfat cümleciği 'whose' ile kurulur. 'Who' özne ya da nesne yerine geçer; ardından gelen 'name' ile birleşemez. 'Which' insanlar için kullanılmaz. 'Where' bir yer ister. 'That' de virgülle ayrılmış ek bilgi cümleciğinde kullanılmaz ve sahiplik bildirmez." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'gn-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['persevere'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: '----, Emre persevered and limped across the finish line just before the course closed.',
    options: [
      'Because the course was flat and the weather stayed cool all day',
      'Since he had already decided to drop out after a few kilometres',
      'Even though his friends had promised to wait for him at the end',
      'Unless the doctors in the medical tent told him to keep going',
      'Although he had twisted his ankle badly halfway through',
    ], answer: 4,
    explain: "Ana cümle Emre'nin yılmadan sürdürdüğünü ve topallayarak bitiş çizgisini geçtiğini söylüyor; 'persevere' ve topallamak bir zorluğa rağmen devam edildiğini gösteriyor. Bu zorluğu, yarışın ortasında bileğini kötü burkmasını 'although' ile veren cümle tamamlar. Düz parkur ve serin hava topallamayı açıklamaz ve sebat gerektiren bir zorluk değildir. Birkaç kilometre sonra yarışı bırakmaya karar vermiş olması bitişe ulaşmasıyla çelişiyor. 'Even though' ile kurulan seçenek de karşıtlık bağlacı taşıyor ama arkadaşlarının bitişte beklemesi devam etmeye engel değil, tersine destektir. 'Unless' ile kurulan koşul da anlamsız: doktorlar devam etmesini söylemedikçe devam etmek ters bir mantıktır." },

  { id: 'gn-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['neden-sonuç'],
    q: 'The forecast warned of strong winds and heavy rain for Sunday morning, so ----.',
    options: [
      'more people than ever came out to watch the race',
      'the runners were told to bring sunglasses and sun cream',
      'the race started early to avoid the afternoon heat',
      'the organisers moved the race to the next weekend',
      'nobody needed to check the weather before the race',
    ], answer: 3,
    explain: "Hava tahmini pazar sabahı için şiddetli rüzgâr ve yağmur bildiriyor; 'so' (bu yüzden) ardından bunun sonucu gelir: düzenleyiciler yarışı bir sonraki hafta sonuna aldı. Kötü havada her zamankinden çok kişinin yarışı izlemeye gelmesi beklenen bir sonuç değildir. Güneş gözlüğü ve güneş kremi ile öğleden sonra sıcağından kaçmak yağmurlu bir tahminle çelişir. Kimsenin havaya bakmasına gerek kalmaması da uyarının sonucu olamaz." },

  { id: 'gn-t3', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['warm up'],
    level: 'orta', cefr: 'B2', konu: ['zaman'],
    q: "You shouldn't start running fast in a training session until ----.",
    options: [
      'your muscles have had a few minutes to warm up',
      'you had stretched your legs on the evening before',
      'you will feel too tired to carry on any further',
      'the session has already come to an end for the day',
      'your legs were cold and stiff from sitting all day',
    ], answer: 0,
    explain: "'Until' (-e kadar) ile kurulan zaman cümleciği ana cümle geniş zaman ya da gelecek anlatırken present simple ya da present perfect alır. Anlamca da antrenmanda hızlanmadan önce beklenecek şey kasların birkaç dakika ısınmasıdır; doğru seçenek ikisini birden sağlar. 'Had stretched' ve 'were cold' geçmiş zamanlar; genel bir öğütle zaman uyumu kurmaz. 'Will feel' zaman cümleciğinde 'will' kullanılmayacağı için yanlış; üstelik çok yorulana kadar hızlanmamak mantıksız. Antrenman bitene kadar hızlı koşmaya başlamamak da dil bilgisi açısından kurulabilir ama anlamsızdır: antrenman bitince koşu da biter." },

  { id: 'gn-t4', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['elite'],
    level: 'zor', cefr: 'C1', konu: ['karşıtlık'],
    q: '----, most of the people who take part in big-city marathons are simply hoping to reach the finish line.',
    options: [
      'Because only professional athletes are allowed to enter such races',
      'Although very few runners in these races have run such a distance',
      'Whereas a small group of elite athletes race for prizes and records',
      'Unless the organisers decide to give a prize to every single runner',
      'As soon as the fastest runners have crossed the finish line',
    ], answer: 2,
    explain: "Ana cümle büyük kent maratonlarına katılanların çoğunun yalnız bitiş çizgisine ulaşmayı umduğunu söylüyor. Bu, ödül ve rekor için yarışan küçük bir üst düzey sporcu grubuyla karşılaştırıldığında anlam kazanır; 'whereas' (oysa) iki grubu karşılaştırır. 'Although' ile kurulan seçenek de karşıtlık bağlacı taşıyor ama koşucuların çoğunun bu mesafeyi daha önce koşmamış olması, yalnız bitirmeyi ummalarıyla çelişmiyor, onu destekliyor; karşıtlık yanlış yere kurulmuş. Yalnız profesyonellerin katılabilmesi, katılanların çoğunun yalnız bitirmeyi ummasıyla çelişir. Herkese ödül verilmedikçe koşucuların yalnız bitirmeyi umması koşul ilişkisi kurmaz. En hızlılar bitirir bitirmez sözü de genel bir durumu zamana bağlayarak anlamsızlaşır." },

  // ---------- çeviri ----------
  { id: 'gn-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['spectator'],
    level: 'orta', cefr: 'B2', konu: ['zaman'],
    q: 'By the time the race finally started, the spectators had been waiting in the cold for more than an hour.',
    options: [
      'Yarış başladıktan sonra seyirciler soğukta bir saatten fazla daha beklemek zorunda kaldı.',
      'Yarış nihayet başladığında seyirciler bir saatten uzun süredir soğukta bekliyordu.',
      'Seyirciler soğukta bir saatten fazla bekledikten sonra yarış başlamadan evlerine döndü.',
      'Yarış nihayet başlamadan önce seyirciler soğukta en az yarım saat beklemişti.',
      'Seyirciler, yarış bir saatten fazla geciktiği için soğukta beklemek istemedi.',
    ], answer: 1,
    explain: "'By the time … started' (… başladığında) ve 'had been waiting' (past perfect continuous) bekleyişin yarış başlamadan önce başlayıp o ana kadar sürdüğünü anlatır: 'bir saatten uzun süredir bekliyordu'. 'Finally' (nihayet) ve 'more than an hour' (bir saatten fazla) da korunmalı. Yanlışlardan biri bekleyişi yarışın başlamasından sonraya taşıyarak zaman ilişkisini ters çeviriyor. Biri seyircilerin yarış başlamadan ayrıldığını ekliyor. Biri süreyi 'en az yarım saat'e indiriyor. Biri de seyircilerin beklemek istemediğini söyleyerek cümlede olmayan bir şey ekliyor." },

  { id: 'gn-c2', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['edilgen kanaat'],
    q: 'Training at high altitude is believed to help endurance athletes, as the body may produce more red blood cells where the air contains less oxygen.',
    options: [
      'Yüksek rakımda antrenmanın dayanıklılık sporcularına yardım ettiği kanıtlanmıştır, çünkü havada oksijen azken vücut kesinlikle daha çok alyuvar üretir.',
      'Yüksek rakımda antrenmanın dayanıklılık sporcularına yararlı olduğuna inanılıyor, çünkü havada oksijen az olduğunda vücut daha çok alyuvar üretebilir.',
      'Dayanıklılık sporcularının yüksek rakımda antrenmana inandıkları söyleniyor, çünkü havadaki oksijenin az olduğu yerlerde vücut daha az alyuvar üretir.',
      'Yüksek rakımda antrenman yapmak dayanıklılık sporcularına zarar verebilir, çünkü havadaki oksijen azaldıkça vücut daha az alyuvar üretebilir.',
      'Vücudun daha çok alyuvar üretmesi için dayanıklılık sporcularının havadaki oksijenin az olduğu yerlerde yaşaması gerektiğine inanılıyor.',
    ], answer: 1,
    explain: "'Is believed to help' bir kanaat bildiren edilgen yapıdır: 'yardımcı olduğuna inanılıyor'. 'May produce' (üretebilir) temkini de korunmalı. Doğru çeviri ikisini de yerinde tutar. Yanlışlardan biri kanaati 'kanıtlanmıştır'a, 'üretebilir'i 'kesinlikle üretir'e çevirerek kesinliği artırıyor. Biri inananları sporcular yapıyor ve alyuvar sayısını tersine çeviriyor. Biri yardımı zarara çeviriyor. Biri de antrenmanı bırakıp sporcuların yüksekte yaşaması gerektiğini söyleyerek öneriyi değiştiriyor." },

  { id: 'gn-c3', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['qualify'],
    level: 'orta', cefr: 'B2', konu: ['koşul'],
    q: 'Bu yarışı dört saatin altında bitirirsen gelecek yılki büyük maratona katılma hakkı kazanırsın.',
    options: [
      "Unless you finish this race in under four hours, you will qualify for next year's big marathon.",
      "If you had finished this race in under four hours, you would have qualified for this year's marathon.",
      "Even if you finish this race in under four hours, you won't qualify for next year's big marathon.",
      "If you finish this race in under four hours, you will qualify for next year's big marathon.",
      "You qualified for next year's big marathon because you finished this race in under four hours.",
    ], answer: 3,
    explain: "Türkçe cümle gelecekle ilgili gerçek bir koşul bildiriyor: '-irsen … kazanırsın'. Bu, birinci tip koşulla kurulur: 'If you finish …, you will qualify …'. 'Unless' (-mezsen) koşulu tersine çevirir: dört saatin altında bitirmezsen hak kazanırsın. 'If you had finished …, you would have qualified' gerçekleşmemiş bir geçmişi anlatır ve 'gelecek yıl'ı 'bu yıl'a çevirir. 'Even if … won't' hak kazanmayı tümden olumsuzlar. Geçmiş zamanlı neden cümlesi ise koşulu olmuş bitmiş bir olaya dönüştürür." },

  { id: 'gn-c4', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['nicelik'],
    q: 'Yarışa katılanların çoğu ilk maratonunu koşuyordu.',
    options: [
      'Only a few of the people in the race were running their first marathon.',
      'Most of the people in the race were running their first marathon.',
      'All of the people in the race were running their first marathon.',
      'None of the people taking part in the race were running their first marathon.',
      'Most of the people in the race had run several marathons before.',
    ], answer: 1,
    explain: "'Katılanların çoğu' 'most of the people' ile karşılanır; 'ilk maratonunu koşuyordu' da 'were running their first marathon'. Doğru seçenek ikisini de korur. 'Only a few' (yalnız birkaçı) oranı küçültüyor, 'all' (hepsi) büyütüyor, 'none' (hiçbiri) tümden olumsuzluyor. 'Most' ile başlayan öteki seçenek ise koşucuların daha önce birçok maraton koştuğunu söyleyerek anlamı tersine çeviriyor." },

  // ---------- okuma parçası 1 (4 soru, YDS biçimi) ----------
  { id: 'gn-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['messenger', 'ordeal'],
    level: 'orta', cefr: 'B2', title: 'Maraton Savaşı\'ndan sonra',
    text: "Most people who have run a marathon, or watched one, have heard the story behind its name. After the Athenians defeated a Persian army near the town of Marathon, a messenger is said to have run all the way to Athens, announced the victory and then collapsed and died. It is a moving tale, and the modern race was named after it. Historians, however, treat it with some caution. The earliest detailed account of the battle was written by Herodotus in the fifth century BC, and his version contains no such run. Instead, he tells of a runner called Pheidippides who was sent from Athens to Sparta before the battle to ask for military help, a journey he is said to have completed in about two days. That was an ordeal far longer than any marathon. The tale of the dying messenger appears only in later writers such as Plutarch and Lucian, who lived several centuries after the battle, and their versions do not all agree on the runner's name. Some scholars think that, over time, two separate memories, a long run to Sparta and the news of victory reaching Athens, may have been combined into a single dramatic story. None of this makes the legend worthless. It shows how stories change as they are retold, and how a good one can outlive the facts it was built on.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the run described by Herodotus ----.',
        options: [
          'ended with the death of the runner in Athens',
          'took place on the very day that the battle was won',
          'was made to seek help before the fighting began',
          'was shorter than a modern marathon race',
          'was first recorded by Plutarch and Lucian',
        ], answer: 2,
        explain: "Parçaya göre Herodot'un anlattığı Pheidippides, savaştan önce askerî yardım istemek için Atina'dan Sparta'ya gönderildi. Doğru seçenek bunu 'çatışma başlamadan önce yardım istemek için yapıldı' diye anlatıyor. Koşucunun Atina'da ölmesi sonraki yazarların anlattığı söylencedir; Herodot'ta yok. Koşunun zafer günü yapılması da savaştan önce gönderilmesiyle çelişiyor. Sparta yolculuğunun her maratondan çok daha uzun olduğu söyleniyor; daha kısa olduğu ters. Plutarkhos ve Lukianos ise ölen ulak anlatısının kaynakları; Herodot'un anlattığı koşuyu ilk onlar yazmadı." },
      { konu: ['ayrıntı'],
        q: 'The passage states that the writers who tell of the messenger dying in Athens ----.',
        options: [
          'had seen the battle near Marathon with their own eyes',
          'based their accounts closely on the work of Herodotus',
          'all agreed that the runner was named Pheidippides',
          'lived in Sparta rather than in Athens at the time',
          'were writing long after the events they described',
        ], answer: 4,
        explain: "Parça, ölen ulak anlatısının yalnız Plutarkhos ve Lukianos gibi, savaştan birkaç yüzyıl sonra yaşamış yazarlarda geçtiğini söylüyor; doğru seçenek bunu 'anlattıkları olaylardan çok sonra yazıyorlardı' diye veriyor. Savaşı gözleriyle görmeleri bu yüzyıllık arayla çelişiyor. Herodot'a dayandıkları da yanlış: Herodot'un anlatısında böyle bir koşu yok. Koşucunun adında anlaşmadıkları açıkça söyleniyor. Sparta'da yaşadıkları ise parçada geçmiyor." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that ----.',
        options: [
          'Herodotus probably invented the story of the dying messenger',
          'Pheidippides probably reached Sparta after the fighting was over',
          'Plutarch and Lucian were more reliable sources than Herodotus was',
          'the modern marathon should really follow the road to Sparta',
          'the best-known version of the story is probably not the oldest',
        ], answer: 4,
        explain: "Parça, en eski ayrıntılı kaynak olan Herodot'ta ölen ulak koşusunun bulunmadığını, bu anlatının yüzyıllar sonraki yazarlarda ortaya çıktığını söylüyor. Buradan bugün herkesin bildiği biçimin büyük olasılıkla en eski biçim olmadığı sonucu çıkar. Herodot'un ölen ulak hikâyesini uydurduğu söylenemez; onun anlatısında bu hikâye hiç yok. Pheidippides'in Sparta'ya savaştan sonra vardığı parçada yok; savaştan önce yardım istemeye gönderildiği söyleniyor. Sonraki yazarların daha güvenilir olduğu parçanın yönüyle çelişir. Maratonun Sparta yolunda koşulması gerektiği de parçada önerilmiyor." },
      { konu: ['başlık'],
        q: 'What would be the most suitable title for the passage?',
        options: [
          'The Last Words of a Dying Athenian Messenger',
          'Pheidippides and the Road to Sparta',
          'How the Battle of Marathon Was Won',
          'Why Modern Marathons Are So Long',
          'The Uncertain Origins of a Famous Legend',
        ], answer: 4,
        explain: "Parça baştan sona ünlü ölen ulak söylencesini en eski kaynakla karşılaştırıyor: Herodot'ta bu koşu yok, hikâye sonraki yazarlarda çıkıyor ve iki ayrı anı birleşmiş olabilir. Bütünü kapsayan başlık, ünlü bir söylencenin kökeninin belirsiz olduğunu söyleyen başlıktır. Ulağın son sözleri parçada anlatılmıyor. Pheidippides'in Sparta yolculuğu yalnız bir ayrıntı. Savaşın nasıl kazanıldığı anlatılmıyor. Bugünkü maratonun mesafesi de parçanın konusu değil." },
    ] },

  // ---------- okuma parçası 2 (4 soru, YDS biçimi) ----------
  { id: 'gn-o2', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: ['sprint', 'pace', 'comfortably'],
    level: 'zor', cefr: 'C1', title: 'İnsan bedeni ve uzun mesafe',
    text: "Compared with many other animals, humans are unimpressive athletes. A horse, a deer or a greyhound can sprint far faster than the quickest person alive. Over long distances, however, the picture changes. In 2004, the biologists Dennis Bramble and Daniel Lieberman argued in the journal Nature that the human body shows signs of having been shaped for endurance running. They pointed to features such as long, springy tendons in the legs, large buttock muscles that keep the trunk steady, and, above all, an unusual ability to get rid of heat by sweating. Most four-legged mammals cool down mainly by panting, which becomes difficult while galloping; a fit person, by contrast, can keep up a steady pace comfortably for hours, even in the heat. Some researchers have linked these traits to an ancient hunting method in which hunters followed an animal through the midday heat until it was too exhausted and overheated to flee. The idea is attractive, not least because it seems to explain why so many people enjoy running long distances for no practical reason. Yet it has not convinced everyone. Critics point out that several of the same features would also help an animal that walks long distances, and that hunting of this kind has been recorded in only a small number of societies. The hypothesis may turn out to be partly right, but for now it is best treated as a promising explanation rather than a settled fact.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, one of the features that Bramble and Lieberman linked to long-distance running is ----.',
        options: [
          'the ability to sprint faster than most large animals',
          'a habit of panting in order to release heat while running',
          "the body's capacity to lose heat through sweat",
          'thick body hair that protects the skin from the sun',
          'short, heavy leg muscles built for sudden bursts of speed',
        ], answer: 2,
        explain: "Parçaya göre Bramble ve Lieberman'ın gösterdiği özelliklerden biri, hatta en önemlisi, insanın terleyerek ısıdan kurtulma yeteneğidir; doğru seçenek bunu 'vücudun ter yoluyla ısı atma kapasitesi' diye veriyor. Hızlı depar parçanın söylediğinin tersidir: at, geyik ve tazı insandan çok daha hızlıdır. Soluyarak serinleme dört ayaklı memelilere ait ve koşarken zorlaştığı söyleniyor. Kalın vücut kılı ve ani hız için kısa, ağır kaslar parçada geçmiyor; parça yaylanan uzun tendonlardan söz ediyor." },
      { konu: ['gönderim'],
        q: "In the passage, the word 'it' in 'Yet it has not convinced everyone' refers to ----.",
        options: [
          'the endurance running hypothesis',
          'the ancient hunting method',
          'the habit of running for pleasure',
          'the ability to cool down by sweating',
          'the long chase through the midday heat',
        ], answer: 0,
        explain: "Bir önceki cümle 'The idea is attractive' (fikir çekici) diye başlıyor; 'Yet it has not convinced everyone' (yine de herkesi ikna etmedi) bu fikre, yani insan bedeninin uzun mesafe koşusuna göre biçimlendiği varsayımına dönüyor. Herkesi ikna edebilecek ya da edemeyecek olan bir görüştür. Eski av yöntemi ve öğle sıcağındaki uzun kovalama varsayımın dayandığı örnekler; bir şeyi kanıtlamaya çalışmıyorlar. Zevk için koşma alışkanlığı varsayımın açıkladığı bir şey. Terleyerek serinleme de varsayımın kanıtlarından biri." },
      { konu: ['yazarın amacı'],
        q: 'The author mentions horses, deer and greyhounds in order to ----.',
        options: [
          'show that early humans hunted these animals for their meat',
          'argue that four-legged animals cannot run long distances at all',
          'explain why humans first began to keep animals on farms',
          'stress how modest human speed is over short distances',
          'suggest that these animals sweat more than humans do',
        ], answer: 3,
        explain: "Yazar parçayı insanın etkileyici bir sporcu olmadığını söyleyerek açıyor ve at, geyik ve tazının en hızlı insandan bile çok daha hızlı koşabildiğini ekliyor; hemen ardından 'Over long distances, however, the picture changes' diyor. Bu hayvanlar, insanın kısa mesafedeki hızının ne kadar sıradan olduğunu vurgulamak için anılıyor. Avlanan hayvan parçada belirtilmiyor. Dört ayaklıların hiç uzun koşamadığı aşırı bir genelleme; parça yalnız serinlemelerinin koşarken zorlaştığını söylüyor. Çiftlik hayvancılığı parçada yok. Bu hayvanların insandan çok terlediği de parçanın tersine: çoğu memelinin soluyarak serinlediği söyleniyor." },
      { konu: ['ana fikir'],
        q: 'Which of the following best expresses the main idea of the passage?',
        options: [
          'The idea that the human body is built for running long distances is appealing but still disputed.',
          'It has now been proved that humans evolved mainly in order to hunt animals by running them down.',
          'Sweating is the only feature that clearly separates the human body from that of other mammals.',
          'Early humans may have been far too slow to catch any animal unless they used simple weapons.',
          'Most scientists today seem to reject the idea that running played any part in shaping the body.',
        ], answer: 0,
        explain: "Parça Bramble ve Lieberman'ın dayanıklılık koşusu varsayımını, dayandığı özellikleri ve eleştirilerini anlatıyor ve sonunda bunun kesin bir olgu değil, umut verici bir açıklama olarak görülmesi gerektiğini söylüyor. Ana fikir, varsayımın çekici ama hâlâ tartışmalı olmasıdır. 'Kanıtlandı' diyen seçenek parçanın temkinli sonucuyla çelişiyor. Terlemenin insanı öteki memelilerden ayıran tek özellik olduğu parçada yok; birkaç özellik sayılıyor. Erken insanların silahsız hiçbir hayvanı yakalayamadığı parçada geçmiyor. Bilim insanlarının çoğunun fikri reddettiği de yanlış; parça yalnız herkesin ikna olmadığını söylüyor." },
    ] },

  // ---------- diyalog ----------
  { id: 'gn-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['bağlam'],
    q: "Ece: Are you ready for Sunday's 10 km race? It's my first one, and I'm a bit nervous.\nKaan: Me too. I've been running three times a week, but never more than eight kilometres.\nEce: ----\nKaan: Good idea. Let's meet at the park at seven on Saturday morning, then.",
    options: [
      "Why don't we do one longer run together before Sunday?",
      'I ran a full marathon last year, so this will be easy.',
      'Do you know what time the race starts on Sunday?',
      "I think I'll stay at home and watch it on TV instead.",
      "Let's go shopping for running shoes on Saturday afternoon.",
    ], answer: 0,
    explain: "Kaan 'İyi fikir' deyip cumartesi sabahı yedide parkta buluşmayı öneriyor; demek ki Ece bir öneride bulundu ve bu öneri parkta birlikte yapılacak bir şey. Yarıştan önce birlikte bir kez daha uzun koşmayı öneren cümle buna uyar; Kaan'ın sekiz kilometreden fazla koşmamış olması da bunu anlamlı kılıyor. Geçen yıl maraton koştuğunu söyleyen cümle bir öneri değil ve 'İyi fikir' ile karşılanmaz. Yarışın saatini soran cümleye 'İyi fikir' denmez. Evde kalıp televizyondan izlemek parkta buluşmayla çelişiyor. Cumartesi öğleden sonra alışveriş önerisi de cumartesi sabahı parkta buluşmaya bağlanmıyor." },

  { id: 'gn-d2', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['hydration'],
    level: 'orta', cefr: 'B2', konu: ['soru-cevap uyumu'],
    q: "Runner: The forecast says it'll be quite warm for Sunday's race.\nCoach: Then hydration matters more than usual. Take a few sips of water at the stations from early on.\nRunner: ----\nCoach: No, that's far too much. Drinking a lot more than you need can be harmful as well.\nRunner: OK. Just a few sips each time, then.",
    options: [
      'Will there be water stations all along the course?',
      'Should I drink a whole bottle at every station?',
      'Is it better to wait until I feel really thirsty?',
      'Can I wear my new shoes for the race on Sunday?',
      'Should I skip breakfast on the morning of the race?',
    ], answer: 1,
    explain: "Antrenör 'Hayır, bu çok fazla' diyor ve gereğinden çok su içmenin de zararlı olabileceğini ekliyor; koşucu da 'O zaman her seferinde birkaç yudum' diye sözü kapatıyor. Demek ki koşucu çok miktarda su içmeyi önermiş: her istasyonda bir şişenin tamamını içmesi gerekip gerekmediğini soran cümle uyar. Parkur boyunca istasyon olup olmadığı sorusuna 'bu çok fazla' denmez. Susayana kadar beklemek az içmek demektir; 'çok fazla' cevabı ona uymaz. Yeni ayakkabı ve kahvaltıyı atlamak soruları da 'bu çok fazla' ve fazla su uyarısıyla bağ kurmaz." },

  { id: 'gn-d3', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['amateur', 'applaud'],
    level: 'orta', cefr: 'B2', konu: ['bağlam'],
    q: "Lale: Look, the leaders have just gone past. They're incredibly fast!\nMert: They are, but I enjoy watching the amateur runners behind them even more, especially the ones in fancy dress.\nLale: ----\nMert: Exactly. And many of them are raising money for charity, so we should applaud every one of them.",
    options: [
      'Really? I thought only professional runners could take part.',
      'Shall we get a coffee before the leaders come past?',
      'I know. Running that far in a heavy costume must be exhausting.',
      "I don't see why anyone would dress up for such a long race.",
      'Do you remember who won this race last year?',
    ], answer: 2,
    explain: "Mert 'Kesinlikle' diyerek Lale'ye katılıyor ve bu koşucuların çoğunun hayır için para topladığını, hepsini alkışlamak gerektiğini ekliyor. Demek ki Lale kostümlü amatör koşucuları takdir eden bir şey söyledi: ağır bir kostümle o kadar yol koşmanın çok yorucu olması gerektiği. Yalnız profesyonellerin katılabileceğini sanmak Mert'in gördüğü amatör koşucularla çelişiyor ve 'Kesinlikle' ile karşılanmaz. Öndekiler zaten geçmişken onlar gelmeden kahve almayı önermek bağlama uymaz. Kostüm giymeyi anlamsız bulan söz Mert'in onları alkışlama önerisiyle çelişiyor. Geçen yılın kazananını soran soruya da 'Kesinlikle' denmez." },

  // ---------- anlamca en yakın cümle ----------
  { id: 'gn-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['neden-sonuç'],
    q: 'The start of the race was delayed by an hour owing to the heavy rain.',
    options: [
      'Although it rained heavily, the race started at the time that had been planned.',
      'The race began an hour early so that the runners could avoid the heavy rain.',
      'Because it was raining heavily, the race started an hour later than planned.',
      'The heavy rain stopped about an hour after the race had started, as expected.',
      'If it had rained heavily, the start of the race would have been delayed.',
    ], answer: 2,
    explain: "'Owing to' (… yüzünden) bir neden bildirir: şiddetli yağmur yüzünden yarışın başlangıcı bir saat ertelendi. Doğru seçenek aynı ilişkiyi 'because' ile kuruyor ve ertelemeyi 'planlanandan bir saat sonra başladı' diye veriyor. 'Although' ile kurulan seçenek yarışın zamanında başladığını söyleyerek ertelemeyi kaldırıyor. Yağmurdan kaçmak için bir saat erken başlamak yönü tersine çeviriyor. Yağmurun yarıştan bir saat sonra durması verilen cümlede yok. 'If it had rained' ise yağmuru gerçekleşmemiş bir varsayıma çeviriyor; oysa yağmur yağdı." },

  { id: 'gn-y2', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: ['pace'],
    level: 'zor', cefr: 'C1', konu: ['karşılaştırma'],
    q: "Few things affect a marathon runner's finishing time as much as the pace they choose in the first few kilometres.",
    options: [
      "Nothing apart from the pace chosen in the first few kilometres has any effect on a runner's finishing time.",
      "The pace chosen in the first few kilometres is among the biggest influences on a runner's finishing time.",
      'The pace a runner chooses in the first few kilometres matters much less than most runners tend to believe.',
      "Many other things affect a runner's finishing time more than the pace chosen in the first few kilometres.",
      'Runners who choose a fast pace in the first few kilometres usually end up with a very good finishing time.',
    ], answer: 1,
    explain: "'Few things … as much as' (… kadar etkileyen pek az şey var), ilk kilometrelerde seçilen temponun bitiş süresini en çok etkileyen birkaç etkenden biri olduğunu söyler. Doğru seçenek bunu 'en büyük etkenler arasında' diye veriyor. Tempodan başka hiçbir şeyin etkisi olmadığını söyleyen seçenek 'pek az'ı 'hiç'e çevirerek aşırı genelleme yapıyor. Temponun sanıldığından çok daha az önemli olduğu ve başka birçok şeyin daha çok etkilediği anlamı tersine çeviriyor. Hızlı başlayanların çoğunlukla iyi derece yaptığı ise verilen cümlede yok; cümle temponun etkisinin büyüklüğünü söylüyor, hangi temponun iyi olduğunu söylemiyor." },

  // ---------- paragraf tamamlama ----------
  { id: 'gn-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'In the early years of the modern Olympic Games, the marathon had no fixed length, and the distance varied from one Games to the next. ----. According to a popular story, that course was planned so that the race could begin at a royal residence and end in front of the royal box, but historians disagree about the details. Whatever the reason, the figure stuck, and in 1921 it was adopted as the standard distance for the event.',
    options: [
      'As a result, times recorded at different Games could not easily be compared with one another',
      'Today, many large cities hold marathons that attract tens of thousands of ordinary runners',
      'Running such a long way safely requires months of careful training and a sensible diet',
      'Today\'s distance of 42.195 kilometres comes from the course laid out for the 1908 London Games',
      'Some runners therefore prefer shorter events, such as the half marathon, which are far less tiring',
    ], answer: 3,
    explain: "Boşluktan sonraki cümle 'that course' (o parkur) diye belli bir parkura gönderme yapıyor; ardından gelen 'the figure stuck' (o sayı tuttu) da bir sayıdan söz ediyor. Demek ki boşluktaki cümle hem bir parkuru hem de bir mesafeyi tanıtmalı: bugünkü 42,195 kilometre, 1908 Londra Oyunları için çizilen parkurdan geliyor. Farklı Oyunlardaki sürelerin karşılaştırılamaması ilk cümleye uygun bir sonuç ama ne bir parkur ne de bir sayı tanıtıyor; 'that course' ve 'the figure' boşta kalıyor. Büyük kentlerin maratonları, uzun antrenman ihtiyacı ve yarı maratonu yeğleyen koşucular da konuyla ilgili ama hiçbiri bir parkurdan ya da mesafenin kaynağından söz etmiyor." },

  { id: 'gn-p2', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['officially'],
    level: 'zor', cefr: 'C1', konu: ['gönderim'],
    q: 'In October 2019, the Kenyan runner Eliud Kipchoge covered the full marathon distance in Vienna in 1 hour, 59 minutes and 40 seconds, becoming the first person known to have done so in under two hours. ----. Because ordinary races do not permit such arrangements, his time was never officially accepted as a world record, even though few doubted what he had achieved.',
    options: [
      'Teams of pacemakers took turns in front of him, and a car drove ahead showing the target speed',
      'Thousands of spectators lined the route through the park to cheer him on as he ran',
      'The run had been planned for months, and the date was chosen because cool weather was expected',
      'At the time, he already held the official world record, which he had set in an earlier race',
      'Many people around the world watched the run live, and the result made headlines the next day',
    ], answer: 0,
    explain: "Boşluktan sonraki cümle 'such arrangements' (bu tür düzenlemeler) diyor ve bunların olağan yarışlarda yasak olduğunu, bu yüzden sürenin resmî rekor sayılmadığını söylüyor. Demek ki boşluktaki cümle kurallara aykırı düzenlemeleri anlatmalı: sırayla önünde koşan tavşan koşucu takımları ve hedef hızı gösteren, önden giden bir araç. Uygun hava için tarih seçmek de bir hazırlık ama olağan yarışlar bunu yasaklamaz; rekorun tanınmamasını açıklamaz. Seyircilerin yolu doldurması, resmî rekorun zaten onda olması ve sonucun dünyada izlenmesi kurallara aykırı bir düzenleme değil; 'such arrangements' bunları gösteremez." },

  // ---------- akışı bozan cümle ----------
  { id: 'gn-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['qualify', 'officially'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'For much of the twentieth century, many race officials believed that running a marathon was far too demanding for women.',
      'Today, most runners who want to enter the Boston Marathon must first qualify by recording a fast time in another race.',
      'In 1967, however, Kathrine Switzer ran the Boston Marathon wearing a race number, and photographs of an official trying to stop her were seen around the world.',
      'Five years later, in 1972, Boston officially began to accept women as entrants.',
      'Women ran the marathon at the Olympic Games for the first time in 1984, when the race was won by Joan Benoit of the United States.',
    ], answer: 1,
    explain: "Parça kadınların maratona kabul edilme sürecini anlatıyor: kadınların bu mesafeye dayanamayacağı inancı (I), Kathrine Switzer'ın 1967'de Boston'da numara takarak koşması (III), Boston'un 1972'de kadınları resmen kabul etmesi (IV) ve kadınların 1984'te ilk kez olimpik maratonda koşması (V). III'teki 'however' (ancak) I'deki inanca karşı çıkıyor; IV'teki 'Five years later' de III'teki 1967'ye dayanıyor. II. cümle de Boston Maratonu'ndan söz ediyor ama konuyu bugünkü giriş koşullarına, derece barajına kaydırıyor; kadınlarla ilgisi yok ve I ile III arasındaki bağı koparıyor." },

  { id: 'gn-b2', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B2', konu: ['akış'],
    sentences: [
      "Many marathon runners describe a moment in the race that they call 'hitting the wall'.",
      'Quite suddenly, their legs feel heavy, every step becomes an effort, and even a gentle jog can seem impossible.',
      'Scientists link this experience to the body running low on glycogen, a stored form of sugar kept in the muscles and the liver.',
      'It tends to strike in the last third of the race, which is why many runners eat or drink something sugary along the way.',
      'Marathons in large cities often follow routes that pass famous buildings, so they are also popular with tourists.',
    ], answer: 4,
    explain: "Parça maraton koşucularının 'duvara toslamak' dediği ani yorgunluğu anlatıyor: adı (I), nasıl hissedildiği (II), bilim insanlarının onu kas ve karaciğerdeki glikojenin azalmasına bağlaması (III) ve genellikle yarışın son üçte birinde gelmesi, koşucuların bu yüzden yolda şekerli bir şey yiyip içmesi (IV). V. cümle de maratonlardan söz ediyor ama konuyu kent maratonlarının ünlü binaların önünden geçen parkurlarına ve turistlere kaydırıyor; ani yorgunlukla hiçbir bağı yok." },
];

export default { id: 'genel-maraton', course: C, title: U, order: 12, cards, items };
