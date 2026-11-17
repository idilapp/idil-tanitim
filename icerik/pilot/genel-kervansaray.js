// iDil › Genel › Selçuklu kervansarayları.
// Tümü özgün: Claude yazdı (13 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (analiz/cogaltma-plani.md §4.2; metin özgün): Anadolu Selçuklu hanlarının çoğu 13. yüzyılda, en çok I. Alaeddin
// Keykubad döneminde (1220–1237) yapıldı. Yapı: kale gibi kalın duvarlar, tek ve oymalı taç kapı, yazın kullanılan açık avlu,
// kışın kullanılan kapalı salon, bazılarında avlunun ortasında köşk mescit. Hizmetler: yemek, yatak, hayvanların bakımı ve nalı;
// birçok anlatıya göre ilk üç gün ücretsiz. Yollar Karadeniz (Sinop, Samsun) ile Akdeniz (Antalya, Alanya) limanlarını bağlıyordu.
// Hanlar kabaca bir günlük yol arayla kuruldu. Aksaray'daki Sultan Hanı (1229) en büyüklerdendir. 1243 Kösedağ yenilgisi ve
// sonraki yüzyıllarda deniz ticaretinin önem kazanması (temkinli). Bugün yüzü aşkın han ayakta, bazıları onarılıp müze ya da
// etkinlik alanı oldu.
// Planda olmayan yerleşik bilgiler (temkinli yazıldı): hanların bir kısmını devletin önde gelen yöneticileri yaptırdı; Keykubad
// saraylardan kervansaraylara pek çok yapı yaptırdı ve dönemi Anadolu Selçukluları için çoğunlukla bir refah dönemi sayılır;
// sultanlar ülkelerinden geçen mallardan vergi alırdı; Kösedağ'dan sonra sultanlar Moğol üstünlüğünü tanıdı; yüklü bir deve
// kervanı günde otuz-kırk kilometre kadar yol alırdı; geceleri hanın kapısı kapatılırdı. Uzak pazarlarda tüccar adına alışveriş
// yapan temsilciler genel bir ortaçağ ticaret uygulamasıdır.

const T = 'taslak';
const C = 'genel';
const U = 'Selçuklu kervansarayları';

const cards = [
  { code: 'prosperity', title: 'refah, bolluk, gönenç', pos: 'isim', cefr: 'C1', ipa: '/prɒˈsperəti/',
    text: "Bir toplumun, kentin ya da kişinin maddi olarak iyi durumda olması. Sıfatı 'prosperous' (müreffeh, varlıklı), fiili 'prosper' (gelişip zenginleşmek).",
    example: 'Years of peace brought new prosperity to the little fishing town.',
    exampleTr: 'Barış yılları, küçük balıkçı kasabasına yeni bir refah dönemi getirdi.',
    synonyms: ['wealth', 'affluence'], family: ['prosper', 'prosperous'] },
  { code: 'flourish', title: 'gelişip serpilmek, canlanmak, parlak bir dönem yaşamak', pos: 'fiil', cefr: 'C1', ipa: '/ˈflʌrɪʃ/',
    text: "Bir işin, sanatın, kentin ya da canlının güçlenip iyi gitmesi: trade flourished (ticaret gelişti). 'thrive' ile yakın anlamlıdır. Sıfatı 'flourishing' (canlı, gelişen).",
    example: 'Small family businesses flourished in the old quarter after the new bridge opened.',
    exampleTr: 'Yeni köprü açıldıktan sonra eski mahalledeki küçük aile işletmeleri canlanıp gelişti.',
    synonyms: ['thrive', 'prosper'], family: ['flourishing'] },
  { code: 'merchant', title: 'tüccar, tacir', pos: 'isim', cefr: 'B2', ipa: '/ˈmɜːtʃənt/',
    text: "Özellikle büyük çapta ya da uzak yerlerle ticaret yapan kişi. 'trader' daha genel bir sözcüktür. Aynı aileden 'merchandise': ticari mal.",
    example: 'The merchant kept a careful record of every sale in a small leather notebook.',
    exampleTr: 'Tüccar, her satışı küçük deri bir defterde özenle kaydediyordu.',
    synonyms: ['trader', 'dealer'], family: ['merchandise'] },
  { code: 'fortified', title: 'tahkim edilmiş, surlarla korunan', pos: 'sıfat', cefr: 'C1', ipa: '/ˈfɔːtɪfaɪd/',
    text: "Saldırıya karşı duvar, sur ya da kulelerle güçlendirilmiş: a fortified town (surlu kent). Fiili 'fortify'. Beslenmede 'fortified with vitamins' (vitaminle zenginleştirilmiş) anlamı da var.",
    example: 'From the valley below, the fortified town looked almost impossible to attack.',
    exampleTr: 'Aşağıdaki vadiden bakınca surlarla korunan kasaba, saldırılması neredeyse imkânsız bir yer gibi görünüyordu.',
    synonyms: ['walled', 'defended'], family: ['fortify', 'fortification', 'fort'] },
  { code: 'shelter', title: 'sığınak, barınak; korunma', pos: 'isim', cefr: 'B2', ipa: '/ˈʃeltə(r)/',
    text: "Hem korunulan yer (a bus shelter: otobüs durağındaki saçak) hem de korunmanın kendisi: take shelter from the rain (yağmurdan korunmak). Fiil olarak 'barındırmak, korumak' anlamına gelir.",
    example: "When the storm broke, the walkers took shelter in an empty shepherd's hut.",
    exampleTr: 'Fırtına patlayınca yürüyüşçüler boş bir çoban kulübesine sığındı.',
    synonyms: ['refuge', 'protection'], family: ['sheltered'] },
  { code: 'ornate', title: 'süslü, bezemeli, zengin işlemeli', pos: 'sıfat', cefr: 'C1', ipa: '/ɔːˈneɪt/',
    text: "Çok sayıda süsle bezenmiş; çoğunlukla yapılar, mobilyalar ve eşyalar için kullanılır: an ornate ceiling. Karşıtı 'plain' (sade); zarfı 'ornately'.",
    example: "The hotel's lobby has an ornate ceiling painted in gold and blue.",
    exampleTr: 'Otelin lobisinde altın sarısı ve maviye boyanmış, süslemeli bir tavan var.',
    synonyms: ['elaborate', 'decorative'], family: ['ornately', 'ornament'] },
  { code: 'levy', title: '(vergi, harç, ceza) koymak, almak', pos: 'fiil', cefr: 'C1', ipa: '/ˈlevi/',
    text: "Resmî bir makamın vergi ya da ücret koyup toplaması: levy a tax on imports. İsim olarak da kullanılır: a levy (vergi, harç).",
    example: 'The council plans to levy a small charge on every plastic bag sold in the city.',
    exampleTr: 'Belediye, kentte satılan her plastik poşetten küçük bir ücret almayı planlıyor.',
    synonyms: ['impose', 'collect'], family: [] },
  { code: 'set out', title: 'yola çıkmak; (bir işe) girişmek', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˌset ˈaʊt/',
    text: "Uzun bir yolculuğa başlamak: set out at dawn (şafakta yola çıkmak). 'set out to do something' ise bir işe belli bir amaçla girişmektir.",
    example: 'We set out before sunrise so as to reach the summit before the clouds rolled in.',
    exampleTr: 'Bulutlar gelmeden zirveye varmak için güneş doğmadan yola çıktık.',
    synonyms: ['set off', 'depart'], family: [] },
  { code: 'decline', title: 'düşüş, gerileme, çöküş', pos: 'isim', cefr: 'B2', ipa: '/dɪˈklaɪn/',
    text: "İsim olarak 'gerileme': a decline in sales, the decline of an empire. Fiil olarak 'azalmak, gerilemek' ve 'kibarca reddetmek' (decline an invitation) anlamlarına gelir.",
    example: "The closure of the mine led to a sharp decline in the town's population.",
    exampleTr: 'Madenin kapanması, kasabanın nüfusunda keskin bir düşüşe yol açtı.',
    synonyms: ['fall', 'downturn'], family: ['declining'] },
  { code: 'commission', title: '(bir eseri, yapıyı) ısmarlamak, yaptırmak', pos: 'fiil', cefr: 'C1', ipa: '/kəˈmɪʃn/',
    text: "Parasını ödeyerek bir sanatçıya ya da ustaya iş yaptırmak: commission a portrait, commission a building. İsim olarak 'sipariş', 'komisyon' ve 'kurul' anlamlarına gelir.",
    example: 'The city commissioned a young sculptor to design a statue for the main square.',
    exampleTr: 'Belediye, ana meydan için bir heykel tasarlaması amacıyla genç bir heykeltıraşı görevlendirdi.',
    synonyms: ['order'], family: ['commissioner'] },
  { code: 'strategically', title: 'stratejik olarak, amaca göre hesaplı biçimde', pos: 'zarf', cefr: 'C1', ipa: '/strəˈtiːdʒɪkli/',
    text: "Bir amaca en iyi hizmet edecek biçimde: strategically placed (en uygun yere konmuş). Sıfatı 'strategic', adı 'strategy'.",
    example: 'Supermarkets strategically place sweets near the checkout, where children can easily see them.',
    exampleTr: 'Süpermarketler şekerlemeleri hesaplı biçimde, çocukların kolayca görebileceği kasaların yanına koyar.',
    synonyms: ['tactically', 'deliberately'], family: ['strategic', 'strategy'] },
  { code: 'restore', title: 'onarmak, eski hâline getirmek; yeniden sağlamak', pos: 'fiil', cefr: 'B2', ipa: '/rɪˈstɔː(r)/',
    text: "Eski bir yapıyı ya da eseri aslına uygun biçimde onarmak: restore a painting. 'restore order' (düzeni yeniden sağlamak) kalıbında 'geri getirmek' demektir. Adı 'restoration'.",
    example: 'It took a team of experts three years to restore the damaged painting.',
    exampleTr: 'Hasar görmüş tabloyu onarmak, bir uzman ekibin üç yılını aldı.',
    synonyms: ['repair', 'renovate'], family: ['restoration'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'gk-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['prosperity', 'flourish', 'commission', 'decline'],
    level: 'orta', cefr: 'C1', konu: ['isim'],
    q: 'The reign of Alaeddin Keykubad I (1220–1237) is often seen as a time of ---- for the Seljuks of Anatolia: trade flourished, and the sultan commissioned a great many new buildings, from palaces to caravanserais.',
    options: ['prosperity', 'posterity', 'austerity', 'instability', 'decline'], answer: 0,
    explain: "'Prosperity' refah, bolluk demektir. İki noktadan sonra gelen kanıtlar bir refah dönemini anlatıyor: ticaret gelişti, sultan saraylardan kervansaraylara pek çok yeni yapı yaptırdı. 'Posterity' (gelecek kuşaklar) biçimce benzer ama cümlede anlam kurmaz. Austerity (kemer sıkma), instability (istikrarsızlık) ve decline (gerileme) ticaretin geliştiği ve bol yapı yapılan bir dönemle çelişir." },

  // ---------- dil bilgisi ----------
  { id: 'gk-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['merchant', 'set out'],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'Rather than making every long journey themselves, some wealthy merchants employed agents who set out with the caravans and bought and sold goods ---- their employers in distant markets.',
    options: ['in spite of', 'regardless of', 'by means of', 'contrary to', 'on behalf of'], answer: 4,
    explain: "'On behalf of' (… adına, … hesabına) birinin yerine ve onun için iş görmeyi anlatır: zengin tüccarlar her uzun yolculuğa kendileri çıkmıyor, temsilci tutuyordu; temsilciler de uzak pazarlarda işverenleri adına alıp satıyordu. In spite of (-e rağmen), regardless of (-i hesaba katmadan) ve contrary to (-e aykırı olarak) temsilciyi işverenine karşı gösterir; temsilciyi tutanın işveren olduğu düşünülünce anlamsızdır. 'By means of' (… aracılığıyla) ise bir araç ister; temsilciler işverenlerini araç olarak kullanmıyor." },
  { id: 'gk-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Some caravanserais had a small mosque raised on arches in the middle of the courtyard, ---- travellers could say their prayers without leaving the safety of the walls.',
    options: ['so that', 'whereas', 'now that', 'even if', 'as though'], answer: 0,
    explain: "'So that' (… -sın diye) amaç bildirir: bazı hanların avlusunun ortasında, yolcular surların güvenliğinden çıkmadan namaz kılabilsin diye küçük bir mescit vardı. 'Whereas' iki durumu karşılaştırır ama iki yarı arasında karşıtlık yok. 'Now that' (… -dığına göre) neden ile sonucu tersine çevirir: mescit, namaz kılabilmenin sonucu değil, nedenidir. 'Even if' (-se bile) ve 'as though' (-mış gibi) cümleye anlamsız bir koşul ya da benzetme katar." },

  { id: 'gk-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['devrik yapı'],
    q: 'On busy evenings the stable hands had little rest: ---- the merchants led their tired camels through the gateway than the animals were unloaded, watered and fed.',
    options: ['hardly had', 'no sooner has', 'no sooner had', 'no longer had', 'only after had'], answer: 2,
    explain: "Boşluktan sonra 'than' geliyor ve cümle art arda iki olayı anlatıyor: tüccarlar yorgun develerini kapıdan içeri sokar sokmaz hayvanların yükü indiriliyor, suyu ve yemi veriliyordu. '-ir -mez' anlamındaki kalıplardan 'than' ile eşleşen 'no sooner'dır; başa geçtiği için devrik yapı (inversion) gelir: 'no sooner had' + özne + V3 (led). 'Hardly had' devrik yapıyı doğru kurar ama 'when' ile eşleşir; 'hardly … than' standart yazıda yanlış sayılır. 'No sooner has' present perfect kurar; geçmişteki iki olayı sıralayan bu kalıba uymaz, çoğul özneyle (the merchants) de uyuşmaz. 'No longer had' (artık … değildi) '-ir -mez' anlamı vermez ve 'than' ile eşleşmez. 'Only after had' devriği yanlış yere koyar: 'only after' ile başlayan yan cümle düz kalır (only after the merchants had led…), devrik olan ana cümledir." },

  // ---------- cümle tamamlama ----------
  { id: 'gk-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['ornate', 'merchant'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although the Seljuk caravanserais were built above all to meet the practical needs of trade, ----.',
    options: [
      "they also gave food and shelter to the camels and mules that carried the merchants' goods",
      'their thick walls kept both travellers and their goods safe from bandits at night',
      'some have entrance portals as ornate as those of the grandest mosques',
      'most of them were built along the roads that linked major ports and cities',
      'they had to be large enough to hold whole caravans together with their animals',
    ], answer: 2,
    explain: "'Although' karşıtlık ister: hanlar her şeyden önce ticaretin pratik ihtiyaçları için yapıldı, ama bazılarının taç kapısı en görkemli camilerinkiler kadar süslü; yani salt ihtiyacın ötesinde bir özen gösterildi. Öteki seçenekler hanların pratik işlevini anlatmayı sürdürüyor: hayvanlara yiyecek ve barınak, eşkıyaya karşı kalın duvarlar, önemli limanları ve kentleri bağlayan yollar, bütün bir kervanı alacak büyüklük. İlk yarıyla çelişmedikleri için karşıtlık kurmuyorlar; 'also' içeren seçenek de karşıtlık değil ekleme bildiriyor." },
  { id: 'gk-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['zaman'],
    q: '----, the heavy gate would be shut and barred, and travellers and their goods would be safe from bandits until morning.',
    options: [
      'As soon as the sun had risen over the hills',
      'While the travellers were still out on the road',
      'By the time the travellers had set out again',
      'Once the last caravan of the day had arrived',
      'Even though the building had only one entrance',
    ], answer: 3,
    explain: "Ana cümle akşamı anlatıyor: ağır kapı kapanıp sürgülenir, yolcular ve malları sabaha kadar eşkıyadan güvende olurdu. Bu, günün son kervanı geldikten sonra olur: 'once' (-ınca, -dıktan sonra). Güneş doğar doğmaz kapının kapanması 'sabaha kadar' ile çelişir. Yolcular daha yoldayken ya da yeniden yola çıktıklarında kapı kapansa içeride güvende olamazlardı. 'Even though' karşıtlık kurar; tek giriş olması ise güvenliği destekler, onunla çelişmez." },

  // ---------- çeviri ----------
  { id: 'gk-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edilgen'],
    q: 'Many of the goods that arrived at the Black Sea ports of Sinop and Samsun were carried overland across Anatolia and then shipped from Antalya or Alanya to other Mediterranean ports.',
    options: [
      "Antalya ve Alanya limanlarına gelen malların birçoğu kara yoluyla Anadolu'nun öbür ucuna taşınır, sonra Sinop ya da Samsun'dan gemiyle Karadeniz'deki öteki limanlara gönderilirdi.",
      "Karadeniz'deki Sinop ve Samsun limanlarına mal getiren tüccarların birçoğu Anadolu'yu karadan aşar, sonra Antalya ya da Alanya'dan kendi gemileriyle öteki Akdeniz limanlarına giderdi.",
      "Karadeniz'deki Sinop ve Samsun limanlarına gelen malların hepsi Anadolu'daki kentlerde satıldığından, Antalya ya da Alanya'dan öteki Akdeniz limanlarına hiçbir mal gönderilmezdi.",
      "Karadeniz'deki Sinop ve Samsun limanlarına gelen malların birçoğu kara yoluyla Anadolu'nun öbür ucuna taşınır, sonra Antalya ya da Alanya'dan gemiyle öteki Akdeniz limanlarına gönderilirdi.",
      "Karadeniz'deki Sinop ve Samsun limanlarına gelen malların birçoğu kara yolu yerine deniz yoluyla Antalya ya da Alanya'ya, ardından da gemiyle öteki Akdeniz limanlarına gönderilirdi.",
    ], answer: 3,
    explain: "İngilizce cümle edilgendir: mallar 'were carried … and then shipped', yani taşınır, sonra gemiyle gönderilirdi; işi kimin yaptığı söylenmiyor. Doğru çeviri yönü (Karadeniz limanlarından kara yoluyla Akdeniz limanlarına), 'many of the goods' (malların birçoğu) kapsamını ve iki edilgen eylemin sırasını korur. Yanlışlardan biri yönü tersine çeviriyor. Biri edilgen cümleyi tüccarların kendi gemileriyle yolculuğuna çeviriyor. Biri 'hepsi' diyerek kapsamı genişletiyor ve malların Akdeniz'e hiç ulaşmadığını söylüyor. Biri de kara yolu yerine deniz yolu diyor." },
  { id: 'gk-c2', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: ['restore'],
    level: 'zor', cefr: 'C1', konu: ['sıfat cümleciği'],
    q: 'Bir kısmı onarılarak müze ya da etkinlik alanına dönüştürülen yüzü aşkın Selçuklu hanı günümüze ulaşmıştır.',
    options: [
      'More than a hundred Seljuk caravanserais have been restored and turned into museums or event venues, so they have survived to the present day.',
      'Most of the more than a hundred Seljuk caravanserais that have survived to this day have been restored and turned into museums or event venues.',
      'More than a hundred Seljuk caravanserais, some of which have been restored and turned into museums or event venues, have survived to the present day.',
      'Of the Seljuk caravanserais that were restored and turned into museums or event venues, only about a hundred have survived to the present day.',
      'Some of the more than a hundred Seljuk caravanserais that have survived to the present day will be restored and turned into museums or event venues.',
    ], answer: 2,
    explain: "Türkçe cümlede '-en' ile kurulan sıfat cümleciği 'yüzü aşkın Selçuklu hanı'nı niteliyor ve içinde 'bir kısmı' var: günümüze ulaşan hanların yalnız bir kısmı onarılmış. İngilizcede bunu 'some of which have been restored' karşılar. Yanlışlardan biri bütün hanların onarıldığını ve bu yüzden günümüze ulaştığını söylüyor. Biri 'bir kısmı'nı 'çoğu' (most) yapıyor. Biri onarılan hanlardan yalnız yüz kadarının kaldığını söyleyerek anlamı değiştiriyor. Biri de onarımı geleceğe taşıyor (will be restored)." },

  // ---------- okuma parçası (4 soru, YDS biçimi) ----------
  { id: 'gk-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T,
    cards: ['strategically', 'fortified', 'shelter', 'levy', 'merchant'],
    level: 'zor', cefr: 'C1', title: 'Yol üstündeki kaleler',
    text: 'In the thirteenth century, the Seljuk sultans of Anatolia, above all Alaeddin Keykubad I (1220–1237), did a great deal to encourage long-distance trade across their lands. Together with some of their leading officials, they built a chain of caravanserais, strategically placed along the roads that linked the Black Sea, the Mediterranean and the cities of the interior. From the outside, these buildings looked more like castles than inns: they were heavily fortified, with thick stone walls and a single gateway framed by a richly carved portal. Inside, an open courtyard served travellers in the warmer months, while a large covered hall gave people and animals shelter from the harsh Anatolian winter. The services were as important as the walls. Travellers were given food and a place to sleep, their animals were fed, and a blacksmith was on hand to replace lost horseshoes. According to many accounts, nobody was asked to pay for any of this during the first three days of a stay. Historians point out, however, that such generosity was not purely charitable. The sultans could levy duties on the goods that crossed their lands, and every merchant who chose the Anatolian roads over a rival route added to the sums they collected.',
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the covered hall of a caravanserai ----.',
        options: [
          'was used mainly during the warmer months of the year',
          'was where the blacksmith replaced lost horseshoes',
          'could be entered only through its own carved portal',
          'sheltered both travellers and their animals in winter',
          'was kept for merchants who paid for a longer stay',
        ], answer: 3,
        explain: "Parçaya göre sıcak aylarda açık avlu kullanılırdı; kapalı salon ise sert Anadolu kışında insanları ve hayvanları barındırırdı ('gave people and animals shelter from the harsh Anatolian winter'). Salonu sıcak aylara bağlayan seçenek onu avluyla karıştırıyor. Nalbandın nerede çalıştığı ve daha uzun kalmak için para ödeyen tüccarlara ayrılmış bir yer parçada geçmiyor. Oymalı taç kapı binanın tek girişidir; salonun kendine ait bir kapısı olduğu söylenmiyor." },
      { konu: ['gönderim'],
        q: 'What does the word "they" refer to in the final sentence of the passage?',
        options: ['the historians', 'the goods', 'the duties', 'the sultans', 'the Anatolian roads'], answer: 3,
        explain: "Son cümledeki 'they', vergiden gelen parayı toplayanları gösteriyor: mallara vergi koyabilen sultanlar. Anadolu yollarını rakip bir yola yeğleyen her tüccar onların topladığı paraya katkıda bulunuyordu. Tarihçiler bir önceki cümlede geçiyor ama para toplamıyorlar. Mallar, vergiler ve yollar da para toplayamaz; cümlenin anlamı bunları dışarıda bırakır." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that the free services offered at the caravanserais ----.',
        options: [
          'were also intended to draw merchants to the Anatolian roads',
          'were offered only to merchants and never to other travellers',
          'cost the sultans more than they ever earned from trade',
          'were available only to caravans that stayed through the winter',
          'came to an end once the sultans began to levy duties',
        ], answer: 0,
        explain: "Parçaya göre hizmetler ilk üç gün ücretsizdi, ama tarihçiler bu cömertliğin yalnız hayırseverlik olmadığını söylüyor: sultanlar mallardan vergi alabiliyordu ve Anadolu yollarını seçen her tüccar onların gelirini artırıyordu. Buradan ücretsiz hizmetlerin tüccarları Anadolu yollarına çekmeyi de amaçladığı çıkar. Hizmetlerin yalnız tüccarlara verildiği parçayla çelişir: parça yolculardan söz ediyor ve kimseden para istenmediğini söylüyor. Sultanların zarar ettiği parçanın ima ettiğinin tersidir. Hizmetlerin yalnız kışın verildiği ya da vergiler başlayınca kaldırıldığı parçada geçmiyor." },
      { konu: ['yazarın amacı'],
        q: 'The primary purpose of the passage is to ----.',
        options: [
          'compare the caravanserais of Anatolia with the roadside inns of other medieval states',
          'describe Seljuk caravanserais and suggest why their services were offered so generously',
          'argue that the caravanserais were designed mainly to serve as military strongholds',
          'explain how the decline of overland trade left many caravanserais in ruins',
          'show that the sultans built caravanserais out of purely charitable motives',
        ], answer: 1,
        explain: 'Parça Selçuklu hanlarının yapısını (kale gibi duvarlar, açık avlu, kapalı salon) ve hizmetlerini (yemek, yatak, hayvanların bakımı) anlatıyor, sonra bu cömertliğin ardındaki çıkarı açıklıyor. Başka devletlerin hanlarıyla bir karşılaştırma ve hanların gerileyip yıkılması parçada yok. Hanların her şeyden önce askerî kale olarak tasarlandığını söyleyen seçenek yalnız dış görünüşe dayanıyor; parça onları ticarete hizmet eden yapılar olarak anlatıyor. Salt hayırseverlik iddiası ise son iki cümleyle çelişiyor.' },
    ] },

  // ---------- diyalog tamamlama ----------
  { id: 'gk-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['set out'],
    level: 'orta', cefr: 'B2', konu: ['soru-cevap uyumu'],
    q: "Mert: I'm thinking of visiting the Sultan Han near Aksaray this weekend. Have you ever been there?\nAnna: Yes, twice. The carved gateway alone is worth the trip.\nMert: ----\nAnna: I'd say at least two hours. There's a lot to see inside, and you'll want time to sit in the courtyard.\nMert: Then I'd better set out early on Saturday.",
    options: [
      'How long does it take to drive there from Konya?',
      'How much time should I plan to spend there?',
      'Did you go there with a guide?',
      'When was the caravanserai built?',
      'Is it open to visitors at the weekend?',
    ], answer: 1,
    explain: "Anna'nın cevabı 'en az iki saat' diyor ve gerekçesini veriyor: içeride görecek çok şey var, avluda oturmak için de zaman isteyeceksin. Demek ki soru, orada ne kadar zaman ayrılması gerektiği. Yolculuk süresini soran seçenek ilk cümleye uyar ama gerekçeye uymaz; 'görecek çok şey var' yolun ne kadar sürdüğünü açıklamaz. Rehberle gidip gitmediği ve hafta sonu açık olup olmadığı evet-hayır sorularıdır; cevap bunlara uymuyor. Hanın ne zaman yapıldığı sorusuna da 'en az iki saat' denemez." },

  // ---------- anlamca en yakın cümle ----------
  { id: 'gk-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['karşılaştırma'],
    q: 'Few of the Seljuk caravanserais still standing in Anatolia come close to the Sultan Han near Aksaray in size.',
    options: [
      'The Sultan Han near Aksaray is only slightly larger than most of the Seljuk caravanserais still standing in Anatolia.',
      'Most of the Seljuk caravanserais still standing in Anatolia are about the same size as the Sultan Han near Aksaray.',
      'The Sultan Han near Aksaray is the largest caravanserai that has ever been built anywhere in Anatolia.',
      'Few of the Seljuk caravanserais still standing in Anatolia are located close to the Sultan Han near Aksaray.',
      'Most of the Seljuk caravanserais still standing in Anatolia are much smaller than the Sultan Han near Aksaray.',
    ], answer: 4,
    explain: "'Few … come close to X in size' (pek azı büyüklükte X'e yaklaşabilir), ayakta kalan Selçuklu hanlarının çoğunun Sultan Hanı'ndan belirgin biçimde küçük olduğunu söyler. Doğru seçenek aynı karşılaştırmayı öznesini değiştirerek kuruyor. 'Only slightly larger' (yalnız biraz büyük) ve 'about the same size' (aşağı yukarı aynı büyüklükte) aradaki farkı küçültüyor ya da yok sayıyor. Anadolu'da yapılmış en büyük kervansaray olduğunu söyleyen seçenek çok ileri gidiyor: cümle yalnız ayakta kalan Selçuklu hanlarını karşılaştırıyor ve 'pek azı' diyerek yaklaşanlar olduğunu kabul ediyor. 'Come close' burada büyüklükle ilgili; 'located close' (yakınında bulunmak) diyen seçenek sözcük benzerliğine dayanan bir tuzak." },

  // ---------- paragraf tamamlama ----------
  { id: 'gk-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['merchant'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: 'A loaded camel caravan moved slowly, seldom covering much more than thirty or forty kilometres in a day. ----. In this way, merchants could spend almost every night behind solid walls instead of camping in the open, where they were exposed to bandits and bad weather.',
    options: [
      'Camels were often preferred to horses, since they could carry heavier loads and go longer without water',
      'Most caravans therefore travelled only at night, when the roads were cooler and quieter',
      'The animals, too, needed rest, water and fodder at the end of each long day on the road',
      'Caravanserais were therefore built roughly a day\'s journey apart along the main roads',
      'Merchants seldom travelled alone, as a single traveller was an easy target for bandits',
    ], answer: 3,
    explain: "Boşluktan önce kervanın yavaşlığı anlatılıyor (günde otuz-kırk kilometre); sonraki cümle 'In this way' diye bir düzenlemeye gönderme yapıyor: tüccarlar neredeyse her geceyi sağlam duvarların arkasında geçirebiliyordu. Bunu sağlayan, hanların aşağı yukarı bir günlük yol arayla yapılmasıdır; 'therefore' da kervanın hızına bağlanıyor. Develerin atlara yeğlenmesi ve hayvanların dinlenme ihtiyacı konuyla ilgili ama 'In this way'in göstereceği bir düzenleme vermiyor. Kervanların yalnız gece yol aldığını söyleyen seçenek, geceleri duvarların arkasında geçirmekle çelişiyor. Tüccarların yalnız yolculuk etmemesi de geceyi duvarların arkasında geçirmeyi açıklamıyor." },

  // ---------- akışı bozan cümle ----------
  { id: 'gk-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['decline'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'The decline of the Seljuk caravanserais began not long after most of them had been built.',
      'In 1243 the Mongols defeated the Seljuk army at Kösedağ, and the sultans were soon forced to accept Mongol overlordship.',
      'As the power of the sultans weakened, fewer new caravanserais were built.',
      'With their thick walls and a single, easily guarded gate, they resembled fortresses rather than ordinary inns.',
      'Later, as more and more goods came to be carried by sea, the overland routes across Anatolia gradually lost much of their importance, and many caravanserais fell into ruin.',
    ], answer: 3,
    explain: "Parça hanların gerilemesini anlatıyor: gerilemenin hanlar yapıldıktan kısa süre sonra başladığını (I), 1243 Kösedağ yenilgisini ve Moğol üstünlüğünü (II), sultanların gücü zayıfladıkça yeni han yapımının yavaşladığını (III), sonraki yüzyıllarda deniz yollarının önem kazanmasıyla kara yollarının ve hanların önemini yitirdiğini (V). IV. cümle hanların kaleye benzeyen görünüşünü anlatıyor; gerilemeyle ilgisi yok ve akışı kesiyor. V. cümledeki 'Later' de III. cümledeki gerilemeyi sürdürüyor." },
];

export default { id: 'genel-kervansaray', course: C, title: U, order: 2, cards, items };
