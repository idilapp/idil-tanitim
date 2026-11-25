// iDil › Sağlık bilimleri › Antibiyotik direnci.
// Tümü özgün: Claude yazdı (13 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (yalnız olgular; metin özgün): Fleming 1928, St Mary's Hastanesi, Londra (küf bulaşmış kültür kabı); Florey, Chain
// ve Oxford'daki ekip (1930'ların sonu, 1940'ların başı), savaşın sonunda büyük ölçekli üretim; 1945 Nobel Fizyoloji veya Tıp
// Ödülü ve Fleming'in Nobel konuşmasındaki düşük doz uyarısı; rastgele mutasyon ve seçilim, plazmitlerle gen aktarımı;
// Murray ve ark., The Lancet 2022 (2019'da doğrudan yaklaşık 1,27 milyon, ilişkili yaklaşık 4,95 milyon ölüm); faj tedavisi
// (Gürcistan ve öteki eski Sovyet ülkeleri); halicin (Stokes ve ark., Cell 2020, MIT). Yerleşik bilgi: bugünkü antibiyotiklerin
// çoğu on yıllar önce bulundu, 1980'lerin sonundan beri az sayıda yeni sınıf geldi; dirençli bakterilerin hastane dışına
// yayılması; verem tedavisinin altı aylık standart rejimi; boğaz ağrısında antibiyotiği erteleme önerisi; büyük ilaç
// şirketlerinin antibiyotik araştırmasından çekilmesi; çiçek hastalığının aşıyla yok edilmesi; pnömokok aşısından sonra dirençli
// pnömokok enfeksiyonlarının azalması (ör. Kyaw ve ark. 2006, ABD); antibiyotiklerin virüslere etkisizliği.
// Görev 20 (25 Kasım 2026): çeviri çeldiricileri biçim kestirmesine karşı yeniden kuruldu.

const T = 'taslak';
const C = 'saglik';
const U = 'Antibiyotik direnci';

const cards = [
  { code: 'strain', title: 'suş (bir bakteri ya da virüs türünün alt grubu); gerginlik, zorlanma', pos: 'isim', cefr: 'C1', ipa: '/streɪn/',
    text: "Biyolojide bir bakteri ya da virüs türü içindeki alt grubu anlatır: a new strain of flu (yeni bir grip suşu). Gündelik dilde 'gerginlik, yük' demektir: the strain of working night shifts. Fiil olarak 'zorlamak; süzmek' anlamları da var.",
    example: 'Scientists identified the strain of bacteria that had caused the food poisoning.',
    exampleTr: 'Bilim insanları, gıda zehirlenmesine yol açan bakteri suşunu belirledi.',
    synonyms: ['variant', 'type'], family: [] },
  { code: 'resistant', title: 'dirençli, dayanıklı; (bir değişikliğe) karşı çıkan', pos: 'sıfat', cefr: 'B2', ipa: '/rɪˈzɪstənt/',
    text: "'resistant to something' kalıbıyla kullanılır: resistant to antibiotics (antibiyotiklere dirençli). Bileşik sıfatlarda da geçer: heat-resistant (ısıya dayanıklı). Adı 'resistance', fiili 'resist'.",
    example: 'This paint is resistant to both heat and moisture, which is why it is often used in kitchens.',
    exampleTr: 'Bu boya hem ısıya hem neme dayanıklı; bu yüzden mutfaklarda sık kullanılıyor.',
    synonyms: ['unaffected', 'tolerant'], family: ['resist', 'resistance'] },
  { code: 'prescribe', title: '(ilaç ya da tedavi) yazmak, reçete etmek', pos: 'fiil', cefr: 'B2', ipa: '/prɪˈskraɪb/',
    text: "'prescribe something for an illness' kalıbıyla kullanılır. Adı 'prescription' (reçete); 'on prescription' reçeteyle demektir. Hukuk dilinde 'öngörmek' anlamı da var: the penalty prescribed by law (yasanın öngördüğü ceza).",
    example: 'The doctor prescribed a cream for the rash and asked her to come back in a week.',
    exampleTr: 'Doktor kızarıklık için bir krem yazdı ve bir hafta sonra yeniden gelmesini istedi.',
    synonyms: [], family: ['prescription'] },
  { code: 'inadvertently', title: 'istemeden, farkında olmadan', pos: 'zarf', cefr: 'C1', ipa: '/ˌɪnədˈvɜːtəntli/',
    text: "Bir şeyi bile bile değil, dikkatsizlikle ya da bilmeden yapmayı anlatır; çoğunlukla istenmeyen bir sonuçla gelir. Karşıtı 'deliberately' (bile bile). Sıfatı 'inadvertent'.",
    example: 'He inadvertently deleted the file while he was trying to copy it.',
    exampleTr: 'Dosyayı kopyalamaya çalışırken farkında olmadan sildi.',
    synonyms: ['unintentionally', 'accidentally'], family: ['inadvertent'] },
  { code: 'eradicate', title: 'kökünü kazımak, tümüyle ortadan kaldırmak', pos: 'fiil', cefr: 'C1', ipa: '/ɪˈrædɪkeɪt/',
    text: "Bir hastalığı, zararlıyı ya da sorunu bütünüyle yok etmek: eradicate a disease, eradicate poverty. 'Reduce' (azaltmak) ile karıştırma: eradicate geriye hiçbir şey bırakmamaktır. Adı 'eradication'.",
    example: 'The council has promised to eradicate rats from the old harbour within a year.',
    exampleTr: 'Belediye, eski limandaki fareleri bir yıl içinde tümüyle yok edeceğine söz verdi.',
    synonyms: ['eliminate', 'stamp out'], family: ['eradication'] },
  { code: 'potent', title: 'güçlü, etkisi yüksek (ilaç, zehir, etken)', pos: 'sıfat', cefr: 'C1', ipa: '/ˈpəʊtnt/',
    text: "Çoğunlukla ilaçlar, zehirler ve içkiler için kullanılır: a potent drug, a potent poison. Mecaz anlamda 'etkili, ikna edici' demektir: a potent argument. Adı 'potency' (etki gücü).",
    example: 'The new painkiller is so potent that it is only given in hospital.',
    exampleTr: 'Yeni ağrı kesici o kadar güçlü ki yalnız hastanede veriliyor.',
    synonyms: ['powerful', 'strong'], family: ['potency'] },
  { code: 'contaminate', title: '(mikrop, zehir ya da zararlı bir maddeyle) kirletmek', pos: 'fiil', cefr: 'C1', ipa: '/kənˈtæmɪneɪt/',
    text: "Bir şeye istenmeyen, zararlı bir madde ya da mikrop karışmasını anlatır: contaminated water (mikrop bulaşmış su). Laboratuvarda dışarıdan bulaşan mikrop için de kullanılır. Adı 'contamination'.",
    example: "After the flood, the town's drinking water was contaminated with sewage.",
    exampleTr: 'Selden sonra kasabanın içme suyuna kanalizasyon atığı karıştı.',
    synonyms: ['pollute', 'taint'], family: ['contamination', 'contaminated'] },
  { code: 'susceptible', title: '(-e) yatkın, duyarlı; kolay etkilenen', pos: 'sıfat', cefr: 'C1', ipa: '/səˈseptəbl/',
    text: "'susceptible to something' kalıbıyla kullanılır: susceptible to infection (enfeksiyona yatkın). Mikrobiyolojide bir bakterinin bir antibiyotikle öldürülebildiğini anlatır. Adı 'susceptibility'.",
    example: 'Young children and older people are more susceptible to heatstroke.',
    exampleTr: 'Küçük çocuklar ve yaşlılar sıcak çarpmasına daha yatkındır.',
    synonyms: ['vulnerable', 'prone'], family: ['susceptibility'] },
  { code: 'mutation', title: 'mutasyon, değişinim', pos: 'isim', cefr: 'C1', ipa: '/mjuːˈteɪʃn/',
    text: "Bir canlının DNA'sında ortaya çıkan kalıcı değişiklik. Fiili 'mutate' (mutasyona uğramak), sıfatı ve adı 'mutant'. Metinlerde çoğunlukla 'a random mutation' (rastgele bir mutasyon) ya da 'a genetic mutation' biçiminde geçer.",
    example: "Doctors found that the girl's illness was caused by a mutation she had inherited from her father.",
    exampleTr: 'Doktorlar, kızın hastalığına babasından geçen bir mutasyonun yol açtığını buldu.',
    synonyms: ['genetic change'], family: ['mutate', 'mutant'] },
  { code: 'dose', title: 'doz, bir seferde alınan ilaç miktarı', pos: 'isim', cefr: 'B2', ipa: '/dəʊs/',
    text: "Bir seferde alınan ilaç miktarı: a high dose, a single dose, miss a dose (bir dozu atlamak). 'Overdose' aşırı doz demektir; 'dosage' ise ilacın ne kadar ve ne sıklıkla alınacağını anlatır.",
    example: 'The nurse checked the dose twice before giving the injection.',
    exampleTr: 'Hemşire iğneyi yapmadan önce dozu iki kez kontrol etti.',
    synonyms: ['amount', 'measure'], family: ['dosage', 'overdose'] },
  { code: 'wipe out', title: 'silip süpürmek, tümüyle yok etmek', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌwaɪp ˈaʊt/',
    text: "Bir şeyi büyük ölçüde ya da tümüyle yok etmek: a disease that wiped out whole villages. Nesne zamir olunca araya girer: wipe them out. Gündelik dilde 'wiped out' bitkin anlamına da gelir.",
    example: "A single storm wiped out most of the farmer's crops.",
    exampleTr: 'Tek bir fırtına, çiftçinin ürünlerinin büyük kısmını yok etti.',
    synonyms: ['destroy', 'eliminate'], family: [] },
  { code: 'outbreak', title: '(salgın, savaş, şiddet) patlak verme; salgın', pos: 'isim', cefr: 'B2', ipa: '/ˈaʊtbreɪk/',
    text: "Bir hastalığın ya da şiddetin birden ortaya çıkması: an outbreak of cholera (kolera salgını). 'Break out' öbek fiilinden gelir: a fire broke out (yangın çıktı).",
    example: 'The measles outbreak started at a primary school and soon spread to nearby towns.',
    exampleTr: 'Kızamık salgını bir ilkokulda başladı ve kısa sürede yakındaki kasabalara yayıldı.',
    synonyms: ['epidemic'], family: ['break out'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'sa-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['strain', 'resistant', 'dose'],
    level: 'orta', cefr: 'C1', konu: ['isim'],
    q: 'Tuberculosis can usually be cured with a six-month course of drugs, but some ---- of the bacterium that causes it have become resistant to several of the standard medicines.',
    options: ['stains', 'strains', 'species', 'doses', 'symptoms'], answer: 1,
    explain: "'Strain' bir bakteri ya da virüs türünün içindeki alt grubu, yani suşu anlatır: verem bakterisinin bazı suşları standart ilaçların birkaçına direnç kazanmıştır. 'Species' (tür) bir üst basamaktır; cümledeki bakteri zaten tek bir türdür, onun 'türleri' olmaz. 'Stains' (lekeler) biçimce benzer ama anlam vermez. 'Doses' (dozlar) ilacın miktarıdır, bakterinin değil; 'symptoms' (belirtiler) de direnç kazanabilen bir şey değildir." },

  // ---------- dil bilgisi ----------
  { id: 'sa-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: '---- growing concern about resistance, many family doctors now ask patients with a sore throat to wait a few days and see whether they get better before taking an antibiotic.',
    options: ['In response to', 'In spite of', 'Even though', 'Prior to', 'In the absence of'], answer: 0,
    explain: "'In response to' (… üzerine, … karşısında) bir tepkiyi anlatır: dirençle ilgili kaygı arttığı için birçok aile hekimi artık boğaz ağrısı olan hastalardan antibiyotik almadan önce birkaç gün beklemelerini istiyor. 'In spite of' (-e rağmen) mantığı tersine çevirir: kaygı bu uygulamanın nedenidir, engeli değil. 'In the absence of' (… yokluğunda) kaygının olmadığını söyler; oysa uygulama tam da bu kaygıdan doğuyor. 'Prior to' (-den önce) cümledeki 'now' ile çelişir. 'Even though' bağlaçtır; ardından özneli, yüklemli bir cümle gelmeli, oysa burada yalnız bir isim öbeği (growing concern about resistance) var." },
  { id: 'sa-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edilgen', 'zaman'],
    q: 'Most of the antibiotics in use today ---- several decades ago, and only a few entirely new classes ---- since the late 1980s.',
    options: ['have discovered / were introduced', 'had been discovered / are being introduced', 'were discovered / have been introduced', 'were discovering / have introduced', 'are discovered / had been introduced'], answer: 2,
    explain: "İlk boşluktaki 'several decades ago' bitmiş bir geçmiş zamanı gösterir, geçmiş zaman gerekir; antibiyotikleri biri keşfettiği için yapı edilgendir: were discovered. İkinci boşluktaki 'since the late 1980s' bugüne uzanan bir dönemi anlatır, present perfect gerekir; yeni sınıfları da biri kullanıma sunar: have been introduced. 'Have discovered' ve 'were discovering' etkendir, antibiyotikleri keşfeden yapar. 'Had been discovered' ve 'are discovered' 'ago' ile kurulan bu cümleye uymaz. 'Were introduced', 'are being introduced' ve 'had been introduced' de 'since' ile bugüne uzanan anlamı kuramaz." },

  { id: 'sa-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['dose'],
    level: 'zor', cefr: 'C1', konu: ['devrik yapı'],
    q: 'Because taking the wrong antibiotic, or the right one at the wrong dose, can do more harm than good, under no circumstances ---- tablets left over from an earlier illness without first asking a doctor or pharmacist.',
    options: ['patients should take', 'should take patients', 'patients must not take', 'must patients not take', 'should patients take'], answer: 4,
    explain: "'Under no circumstances' (hiçbir koşulda) olumsuz bir zarf öbeğidir ve ana cümlenin başına geçmiş; ardından devrik yapı (inversion) gelir, kip özneden önce durur: 'should patients take'. Cümlenin anlamı: yanlış antibiyotiği ya da doğru antibiyotiği yanlış dozda almak yarardan çok zarar getirebileceği için hastalar, önceki bir hastalıktan artan tabletleri önce bir doktora ya da eczacıya danışmadan hiçbir koşulda almamalı. 'Patients should take' düz sıradır. 'Should take patients' ana fiili de özneden önceye alır; devrikte yalnız kip öne geçer. 'Patients must not take' hem düz sıradadır hem de olumsuzluğu ikinci kez söyler. 'Must patients not take' devriği kurar ama 'not' ile olumsuzluk iki kez söylenir; anlam 'hastalar artan tabletleri her koşulda almalı'ya döner ve uyarıyı tersine çevirir." },

  // ---------- boşluklu metin (5 boşluk) ----------
  { id: 'sa-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T,
    cards: ['contaminate', 'prescribe', 'dose', 'resistant'],
    level: 'orta', cefr: 'B2', title: 'Penisilin nasıl ilaç oldu?',
    text: "In 1928, Alexander Fleming returned from a holiday to his laboratory at St Mary's Hospital in London and noticed that a mould had contaminated one of the dishes in which he had been growing bacteria, and that the bacteria around it had died. Fleming concluded that the mould was releasing a substance that could kill many kinds of bacteria, and he named it penicillin. (1) ----, he was unable to purify it in useful amounts, and for about a decade the discovery attracted relatively little attention. (2) ---- the work of Howard Florey, Ernst Chain and their colleagues at the University of Oxford, penicillin was eventually turned into a usable drug in the early 1940s. By the end of the Second World War, it was being made in large quantities, and doctors could (3) ---- it for infections that had often been fatal until then. Fleming, Florey and Chain went on (4) ---- the 1945 Nobel Prize in Physiology or Medicine. In his Nobel lecture, Fleming warned that people who took too small a dose of the drug could make the bacteria in their bodies resistant to it, a warning that seems remarkably far-sighted (5) ---- the problems doctors face today.",
    steps: [
      { konu: ['bağlantı zarfı'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['Therefore', 'Similarly', 'For instance', 'Otherwise', 'However'], answer: 4,
        explain: "Önceki cümle Fleming'in pek çok bakteriyi öldürebilen bir madde bulduğunu, boşluklu cümle ise onu yeterli miktarda saflaştıramadığını söylüyor. İki bilgi arasında karşıtlık var: 'However'. 'Therefore' bir sonuç bağlar, 'similarly' benzerlik, 'for instance' örnek bildirir; 'otherwise' (aksi hâlde) ise bir koşul kurar. Hiçbiri bu ilişkiye uymaz." },
      { konu: ['edat'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['Despite', 'Although', 'Unlike', 'Thanks to', 'Instead of'], answer: 3,
        explain: "Penisilin, Florey, Chain ve Oxford'daki arkadaşlarının çalışması sayesinde kullanılabilir bir ilaca dönüştü: 'thanks to' (… sayesinde) bir nedeni olumlu bir sonuca bağlar. 'Despite' (-e rağmen) ilişkiyi tersine çevirir; 'unlike' (… aksine) ve 'instead of' (… yerine) anlam kurmaz. 'Although' bağlaçtır, ardından tam bir cümle ister; burada ise bir isim öbeği var." },
      { konu: ['kelime', 'fiil'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['describe', 'subscribe', 'transcribe', 'prescribe', 'inscribe'], answer: 3,
        explain: "Savaşın sonunda penisilin bol miktarda üretiliyordu; doktorlar artık onu daha önce çoğu zaman öldürücü olan enfeksiyonlar için reçete edebiliyordu: 'prescribe something for an illness'. Öteki fiiller biçimce benzer ama anlam tutmaz: describe (tanımlamak), subscribe (abone olmak), transcribe (yazıya geçirmek), inscribe (taşa ya da metale yazı kazımak)." },
      { konu: ['isim-fiil ve mastar'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['sharing', 'share', 'to sharing', 'having shared', 'to share'], answer: 4,
        explain: "'Go on to do something' bir işin ardından gelen yeni bir adımı, çoğu zaman sonraki bir başarıyı anlatır: üç bilim insanı ardından 1945 Nobel Ödülü'nü paylaştı. 'Went on sharing' de kurulabilir ama 'paylaşmayı sürdürdüler' demektir; bir kez verilen ödül sürdürülen bir iş değildir. 'Share', 'to sharing' ve 'having shared' bu yapıda kullanılamaz." },
      { konu: ['edat'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['regardless of', 'in light of', 'in exchange for', 'on behalf of', 'in contrast to'], answer: 1,
        explain: "Fleming'in uyarısı, bugün doktorların karşılaştığı sorunların ışığında, yani bugün bildiklerimizle bakınca çok ileri görüşlü görünüyor: 'in light of' (… ışığında). 'Regardless of' (… ne olursa olsun) ve 'in contrast to' (… aksine) mantığı bozar: uyarıyı ileri görüşlü gösteren şey tam da bugünkü sorunlardır. 'In exchange for' (… karşılığında) ve 'on behalf of' (… adına) anlam kurmaz." },
    ] },

  // ---------- cümle tamamlama ----------
  { id: 'sa-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['resistant', 'susceptible'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although drug-resistant bacteria were once found mainly in hospitals, ----.',
    options: [
      'this was largely because patients in hospitals were given antibiotics more often than other people',
      'hospitals are still the places where such infections are most likely to be caught',
      'patients with weakened immune systems were particularly susceptible to the infections they caused',
      'the doctors working there were among the first to notice how quickly they could spread',
      'they are now increasingly common among people who have never been admitted to one',
    ], answer: 4,
    explain: "'Although' karşıtlık ister: dirençli bakteriler bir zamanlar çoğunlukla hastanelerde görülürdü, ama artık hiç hastaneye yatmamış kişiler arasında da giderek yaygınlaşıyor. Hastanede yatanların daha sık antibiyotik alması ilk yarının nedenini açıklıyor. Bağışıklığı zayıf hastaların bu bakterilerin yol açtığı enfeksiyonlara yatkın olması ve hastane doktorlarının bakterilerin ne kadar hızlı yayılabildiğini ilk fark edenler arasında olması ilk yarıyı destekliyor. Hastanelerin hâlâ en riskli yer olduğunu söyleyen seçenek bir değişiklik bildirmediği için karşıtlık kurmuyor." },
  { id: 'sa-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['karşıtlık'],
    q: '----, many of the largest drug companies have stopped developing new antibiotics.',
    options: [
      'Because the need for new antibiotics has seldom been as urgent as it is today',
      'Even though bringing a new antibiotic to market is slow, costly and rarely profitable',
      'As soon as the first antibiotics became widely available in the 1940s',
      'Unless the number of resistant infections begins to fall in the coming years',
      'Although resistance to the antibiotics we already have continues to spread',
    ], answer: 4,
    explain: "Ana cümle beklenmedik bir durum bildiriyor: dünyanın en büyük ilaç şirketlerinin birçoğu yeni antibiyotik geliştirmeyi bıraktı. Karşıtlığı, bu durumu şaşırtıcı kılan bilgi kurar: elimizdeki antibiyotiklere direnç yayılmayı sürdürüyor. 'Even though' ile başlayan seçenek tuzaktır: yeni bir antibiyotiği piyasaya çıkarmanın yavaş, pahalı ve az kârlı olması şirketlerin bu işi bırakmasını açıklar; karşıtlık değil neden bildirir. Yeni antibiyotiklere bugün çok acil ihtiyaç olduğunu söyleyen 'because' cümlesi de sonucu açıklamaz, tersine çevirir. 1940'lardan söz eden 'as soon as' cümlesi 'have stopped' ile zaman bakımından uyuşmaz; 'unless' ile kurulan koşul da ana cümleyle anlamlı bir ilişki kurmaz." },

  // ---------- çeviri ----------
  { id: 'sa-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'C1', konu: ['isim cümleciği'],
    q: 'That antibiotics given to farm animals can add to the problem of resistance in people is now widely accepted, but how large their contribution is remains a matter of debate.',
    options: [
      'Çiftlik hayvanlarına verilen antibiyotiklerin insanlardaki direnç sorununu büyüttüğü artık genel olarak kabul ediliyor, ama katkılarının ne kadar büyük olduğu hâlâ tartışmalı.',
      'Çiftlik hayvanlarına verilen antibiyotiklerin insanlardaki direnç sorununu büyütebileceği artık bazı uzmanlarca kabul ediliyor, ama bu katkının nasıl gerçekleştiği hâlâ tartışmalı.',
      'Çiftlik hayvanlarına verilen antibiyotiklerin insanlardaki direnç sorununu büyüttüğü artık bazı uzmanlarca kabul ediliyor, ama katkılarının ne kadar büyük olduğu hâlâ tartışmalı.',
      'Çiftlik hayvanlarına verilen antibiyotiklerin insanlardaki direnç sorununu büyütebileceği artık genel olarak kabul ediliyor, ama katkılarının ne kadar büyük olduğu hâlâ tartışmalı.',
      'Çiftlik hayvanlarına verilen antibiyotiklerin insanlardaki direnç sorununu büyütebileceği artık bazı uzmanlarca kabul ediliyor, ama katkılarının ne kadar büyük olduğu hâlâ tartışmalı.',
    ], answer: 3,
    explain: "İngilizce cümlede iki isim cümleciği var: özne olan 'That antibiotics given to farm animals can add to the problem…' (… sorununu büyütebileceği) ve 'how large their contribution is' (katkılarının ne kadar büyük olduğu). Doğru çeviri ikisini de, 'widely accepted' (genel olarak kabul ediliyor) ile 'remains a matter of debate' (hâlâ tartışmalı) karşıtlığını da korur. 'Büyütebileceği artık bazı uzmanlarca kabul ediliyor' diyen çeviri 'widely' sözünü daraltıyor. 'Bu katkının nasıl gerçekleştiği' ifadesi tartışılan şeyi katkının büyüklüğünden işleyişine kaydırıyor; kabul de bazı uzmanlara indirgenmiş. 'Büyüttüğü … genel olarak kabul ediliyor' seçeneğinde kabulün genişliği yerinde, ama 'can'in bildirdiği olasılık kesinliğe dönmüş. 'Büyüttüğü artık bazı uzmanlarca' diyen çeviride hem kesinlik hem kabulün genişliği yanlış." },
  { id: 'sa-c2', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['outbreak'],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'Salgının başladığı koğuştaki bütün hastalar, başka hastanelere sevk edilmeden önce dirençli bakteri taramasından geçirildi.',
    options: [
      'Most of the patients on the ward where the outbreak began were screened for resistant bacteria after being transferred to other hospitals.',
      'All the patients on the ward where the outbreak began were screened for resistant bacteria before being transferred to other hospitals.',
      'All the patients on the ward where the outbreak began were screened for resistant bacteria before being transferred to other wards.',
      'All the patients on the ward where the outbreak began were screened for resistant bacteria after being transferred to other wards.',
      'All the patients on the ward where the outbreak began were screened for resistant bacteria after being transferred to other hospitals.',
    ], answer: 1,
    explain: "Türkçe cümledeki 'salgının başladığı koğuş' bir sıfat cümleciğidir: 'the ward where the outbreak began'. Doğru çeviri bunu, 'bütün hastalar'ı, taramayı ve sırayı (önce tarama, sonra sevk) korur: 'before being transferred to other hospitals'. 'All the patients … after being transferred to other hospitals' diyen seçenek sırayı tersine çevirip taramayı sevkten sonraya alıyor. 'Most of the patients' diye başlayan çeviri 'bütün'ü 'çoğu'na daraltıyor ve taramayı sevkten sonraya koyuyor. 'Before being transferred to other wards' seçeneğinde sıra yerinde, ama hastaların gönderildiği yer başka hastanelerden başka koğuşlara dönmüş. Hastaları başka koğuşlara gönderip taramayı sonradan yapan çeviride hem yer hem sıra yanlış." },

  // ---------- okuma parçası (3 soru, YÖKDİL biçimi) ----------
  { id: 'sa-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T,
    cards: ['mutation', 'wipe out', 'susceptible', 'inadvertently', 'resistant'],
    level: 'zor', cefr: 'C1', title: 'Bakterilerle bitmeyen yarış',
    text: "Every time an antibiotic is used, it sets off a contest between the drug and the bacteria it is meant to kill. In a large population of bacteria, a few cells may, purely by chance, carry a mutation that helps them survive the treatment. While the drug wipes out their susceptible neighbours, these cells keep dividing, and before long their descendants can dominate the infection. Bacteria do not have to rely on their own mutations, however. They can also pass genes for resistance to one another, often on small rings of DNA called plasmids, and such exchanges can even take place between different species. A gene that first arose in a harmless gut bacterium may thus end up in one that causes serious disease. Since every use of an antibiotic favours resistant bacteria, farms are part of the problem too: by giving the drugs to healthy animals, farmers may inadvertently help resistance to spread. The toll is already heavy. A study published in The Lancet in 2022 estimated that resistant bacterial infections directly caused about 1.27 million deaths worldwide in 2019 and were linked to nearly five million. Researchers are therefore exploring alternatives. One is phage therapy, which relies on viruses that infect and kill particular bacteria and which doctors in Georgia and some other former Soviet countries have used for decades. Another is computer-aided discovery: in 2020, a team at MIT used machine learning to identify a compound, later named halicin, that killed many bacteria in laboratory tests. Both approaches look promising, but neither is yet in widespread use.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, plasmids ----.',
        options: [
          'are produced by antibiotics in order to destroy the bacteria that carry them',
          'can only be exchanged between bacteria that belong to the same species',
          'make the bacteria that contain them more susceptible to antibiotics',
          'are found mainly in bacteria that cause serious diseases in people',
          'can carry genes for resistance from one bacterium to another',
        ], answer: 4,
        explain: "Parçaya göre bakteriler direnç genlerini birbirine, çoğunlukla plazmit denen küçük DNA halkalarıyla aktarabilir ('pass genes for resistance to one another, often on small rings of DNA called plasmids'). Bu aktarım farklı türler arasında bile olabildiği için 'yalnız aynı türden bakteriler arasında' diyen seçenek parçayla çelişir. Plazmitlerin antibiyotiklerce üretildiği ya da bakterileri ilaçlara daha duyarlı kıldığı söylenmiyor. Parça bir genin önce zararsız bir bağırsak bakterisinde ortaya çıkabildiğini söylüyor; plazmitlerin özellikle hastalık yapan bakterilerde bulunduğu sonucu çıkmaz." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that ----.',
        options: [
          'a disease-causing bacterium can become resistant without a mutation of its own',
          'resistance would soon disappear if farm animals were no longer given antibiotics',
          'phage therapy has largely replaced antibiotics in former Soviet countries',
          'most of the deaths linked to resistance in 2019 probably occurred in hospitals',
          'bacteria develop useful mutations only after they have been exposed to a drug',
        ], answer: 0,
        explain: "Parçaya göre bir direnç geni önce zararsız bir bağırsak bakterisinde ortaya çıkıp sonra ciddi hastalık yapan bir bakteriye geçebilir. Demek ki hastalık yapan bir bakteri, kendisinde hiçbir mutasyon olmadan da dirençli hâle gelebilir. Çiftlikler sorunun yalnız bir parçası olarak anıldığı için, hayvanlara antibiyotik verilmezse direncin yakında kaybolacağı çıkarılamaz. Faj tedavisinin antibiyotiklerin yerini aldığı ve 2019'daki ölümlerin çoğunun hastanelerde olduğu parçada yok. Parça mutasyonun rastlantıyla, ilaçla karşılaşmadan önce de bulunabildiğini söylüyor; 'yalnız ilaçla karşılaştıktan sonra' diyen seçenek bununla çelişir." },
      { konu: ['ana fikir'],
        q: 'The passage is mainly concerned with ----.',
        options: [
          'why farmers give antibiotics to healthy animals and how the practice could be stopped',
          'the reasons why phage therapy is more widely used in Georgia than elsewhere',
          'the methods researchers use to count the deaths caused by resistant infections',
          'the discovery of penicillin and the earliest warnings about resistance to it',
          'how resistance arises and spreads, how much harm it does and what might help',
        ], answer: 4,
        explain: "Parça önce direncin nasıl ortaya çıkıp yayıldığını (rastgele mutasyon, gen aktarımı, çiftliklerdeki kullanım), sonra sorunun boyutunu (2019 tahminleri), en sonda da umut veren yeni yolları (faj tedavisi, bilgisayar destekli keşif) anlatıyor. Çiftliklerdeki kullanım ve faj tedavisinin Gürcistan'daki geçmişi yalnız birer ayrıntı; çiftçilerin nedenleri ya da bu kullanımın nasıl durdurulacağı hiç anlatılmıyor. Ölüm sayısının nasıl hesaplandığı ve penisilinin keşfi parçada ele alınmıyor." },
    ] },

  // ---------- paragraf tamamlama ----------
  { id: 'sa-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['eradicate', 'susceptible'],
    level: 'orta', cefr: 'C1', konu: ['akış'],
    q: 'Vaccines, which helped to eradicate smallpox, are not usually the first thing people think of in connection with antibiotic resistance, yet they may be among the most useful tools against it. ----. Fewer infections mean fewer courses of antibiotics, and therefore fewer opportunities for resistant bacteria to gain an advantage. In several countries, for example, vaccinating young children, who are particularly susceptible to pneumococcal disease, appears to have reduced the number of drug-resistant pneumococcal infections.',
    options: [
      'Unlike antibiotics, however, most vaccines protect against only a single disease or a small group of closely related ones',
      'Some parents, after all, are still reluctant to have their children vaccinated against illnesses they have never seen',
      'Antibiotics, by contrast, are quite often given to patients who would have recovered perfectly well without them',
      'By preventing people from falling ill in the first place, they reduce the number of infections that need treating',
      'Developing and testing a new vaccine can take more than ten years and often costs a great deal of money',
    ], answer: 3,
    explain: "Boşluktan sonraki cümle 'Fewer infections' diye başlıyor; demek ki boşluk aşıların enfeksiyon sayısını azalttığını söylemeli: aşılar insanların hastalanmasını baştan önleyerek tedavi gereken enfeksiyonları azaltır. Aşıların çoğunun tek bir hastalığa karşı koruduğunu söyleyen cümle 'however' ile paragrafın olumlu akışını tersine çeviriyor. Antibiyotiklerin gereksiz yere verilmesi, ailelerin aşıya çekinceyle yaklaşması ve aşı geliştirmenin süresiyle maliyeti 'daha az enfeksiyon' fikrine bağlanmıyor." },

  // ---------- akışı bozan cümle ----------
  { id: 'sa-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['potent'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Antibiotics work by attacking structures and processes that bacteria depend on, such as the wall that surrounds most bacterial cells.',
      'Moulds and soil bacteria produce many antibiotics naturally, possibly as a way of competing with other microbes.',
      "Viruses, by contrast, have no such wall and can multiply only inside the cells of the body they infect, using the cell's own machinery.",
      'This is why even the most potent antibiotics have no effect on the viruses that cause colds and flu.',
      'Yet many patients still expect to be given antibiotics for such illnesses, and every unnecessary course gives resistant bacteria in the body another chance to gain ground.',
    ], answer: 1,
    explain: "Parça antibiyotiklerin neden virüslere etki etmediğini adım adım anlatıyor: antibiyotikler bakterilerin dayandığı yapılara, örneğin hücre duvarına saldırır (I); virüslerin böyle bir duvarı yoktur ve ancak girdikleri hücrenin içinde çoğalırlar (III); bu yüzden en güçlü antibiyotikler bile soğuk algınlığı ve grip virüslerine etki etmez (IV); yine de birçok hasta bu hastalıklarda antibiyotik bekler (V). II. cümle antibiyotiklerin doğada küfler ve toprak bakterilerince üretildiğini söyleyerek akışı kesiyor. III. cümledeki 'no such wall' da doğrudan I. cümledeki duvara bağlanıyor." },
];

export default { id: 'saglik-antibiyotik', course: C, title: U, order: 2, cards, items };
