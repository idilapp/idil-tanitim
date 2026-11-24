// A1 sonu sınavı (Dalga 1 Görev 15, 24 Kasım 2026; tasarım ICERIK_GENISLEME §4.5). A2'nin kapısıdır (≥ %70 ve birim şartı) ve
// "Okulda öğrendim" yolunda yerleştirme sınavı olarak da sunulur. Biçim ve denetim: ./sinav.js (SinavSorusu = Ders alıştırması +
// birimler; seviye-sinav-sayi, -bicim, -birim). Saf veri modülü.
//
// 40 soru: 18 dinleme (dinle), 22 kural (sec, cevir, duzelt, yaz). Kapsam tablosu ve cevap anahtarı görev raporunda (çalışma alanı,
// task-15-*.md). Bütün metin özgündür.
// Kurallar (düzeltme turları 1 ve 2, 24 Kasım 2026):
// - birimler: yalnız şıkların gerçekten ayırdığı birimler, yani yanlış yapanın bilmediği birimler. "Yanlış yaptıkların" listesi bunu
//   gösterir. Her durak ve her bölüm bu ölçüyle en az iki soruyla yoklanır (test: test/sinav.test.mjs).
// - Tekrar: İngilizce cümleler cümle cümle bölünür. Hiçbiri ders alıştırma ve test öğelerinde, örneklerde ya da Yolculuk satırlarında
//   birebir geçmez; şıklar da dahil.
// - Dinleme şıkları sesten başka hiçbir şeyle elenemez:
//   - "Ortadaki şık" (öteki iki şıkla sözcük farkı toplamı en küçük olan tek şık) doğru cevapsa sesi dinlemeden bulunur. Bu yüzden
//     doğru şık en çok 6/18 dinlemede ortadadır (bugün 3); öteki dinlemelerde ortadaki şık bir çeldiricidir ya da şıklar tek yerde
//     ayrılır (4 / 14 / 40). Test: test/sinav.test.mjs.
//   - Dünya bilgisi ve hikâye mantığı da ipucu vermez (ör. İtalya'dan olan kişinin adı Türk adıdır).
// - Kural çeldiricileri tek hatalıdır ve Türk öğrencinin gerçekten yaptığı hatalardan seçilir: be eksik ("This my ticket"), are/is,
//   has/have, a/an, artikel eksik, much/many, can to, don't/doesn't/not. Şıklar çoğunlukla aynı yerde ayrılır.
// - Dinleme öğesinde ses metni tek başına cevabı belirler.
// - Sayfadan sızıntı yok (tur 3): sınav ekranı bütün soruları tek sayfada gösterir (kökler ve şıklar görünür, dinle metni görünmez,
//   yalnız duyulur). Bir yaz öğesinin beklenen cevabı (cevaplar[0]) başka hiçbir öğenin görünen metninde ve önceki öğelerin ses
//   metninde ayrı bir sözcük öbeği olarak geçmez; şıklı öğenin doğru şıkkı başka bir öğede birebir görünmez. Test: test/sinav.test.mjs.
// - yaz kabul listeleri: doesn't için "does not" (kesmesiz "doesnt" kabul edilmez); "içer" için drinks ve has; sayı sözcükle yazılır,
//   rakam ve "fourty" kabul edilmez; saat ipucu rakamla verilir.
// - his/her sahibin adından seçilir (Ayşe kadın).
// - Yalnız A1 sözcük ve yapıları: "and", sıklık zarfları, şimdiki zaman ve A2 kalıpları yok.
export const A1_SINAV = [
  // S1 · iyelik your, Varış bag
  { tur: 'dinle', ses: 'Anna, is your ticket in your bag?', secenekler: ['Anna, biletin çantanda mı?', 'Anna, biletim çantanda mı?', 'Anna, biletim odanda mı?'], dogru: 0,
    aciklama: 'Duyduğun *Anna, is your ticket in your bag?*: Anna, biletin çantanda mı? *Your* “senin” der; *my* “benim” olurdu. Oda *room* olurdu.',
    birimler: ['en:s:your', 'en:s:bag'] },
  // S2 · I don't understand
  { tur: 'yaz', soru: 'I don’t ---- you. Can you speak slowly, please? (anlamak)', cevaplar: ['understand'],
    aciklama: '“Anlamıyorum” *I don’t understand* diye söylenir: *I don’t understand you. Can you speak slowly, please?* (Seni anlamıyorum. Yavaş konuşabilir misin, lütfen?)',
    birimler: ['en:k:i-dont-understand'] },
  // S3 · soru kalıpları: where
  { tur: 'yaz', soru: '---- is the pharmacy, please? (nerede)', cevaplar: ['where'],
    aciklama: 'Yer *Where* ile sorulur: *Where is the pharmacy, please?* (Eczane nerede, lütfen?)',
    birimler: ['en:s:where'] },
  // S4 · Barınma: open, window
  { tur: 'dinle', ses: 'Open the window in my room, please.', secenekler: ['Odamdaki kapıyı aç, lütfen.', 'Odamdaki kapıyı kapat, lütfen.', 'Odamdaki pencereyi aç, lütfen.'], dogru: 2,
    aciklama: 'Duyduğun *Open the window in my room, please.*: Odamdaki pencereyi aç, lütfen. Kapı *door*, “kapat” *close* olurdu.',
    birimler: ['en:s:open', 'en:s:window'] },
  // S5 · here is
  { tur: 'sec', soru: 'Kafede çalışıyorsun. Müşteriye kahvesini uzatıp “Buyurun, kahveniz.” diyorsun. Hangisi?',
    secenekler: ['Here are your coffee.', 'Here your coffee.', 'Here is your coffee.'], dogru: 2,
    aciklama: 'Bir şeyi uzatırken *Here is* denir: *Here is your coffee.* *Coffee* tek bir şeydir, *are* gelmez; *is* de düşmez (Türkçede “kahveniz” tek başına cümledir, İngilizcede değil).',
    birimler: ['en:k:here-is'] },
  // S6 · Pazar: green, apples
  { tur: 'dinle', ses: 'Give me the green apples, please.', secenekler: ['Kırmızı elmaları ver, lütfen.', 'Yeşil elmaları ver, lütfen.', 'Kırmızı elmayı ver, lütfen.'], dogru: 1,
    aciklama: 'Duyduğun *Give me the green apples, please.*: Yeşil elmaları ver, lütfen. Kırmızı *red* olurdu; *apples* çoğuldur (sonda *-s*).',
    birimler: ['en:s:green', 'en:s:apples'] },
  // S7 · the: ikinci kez söz edilen şey
  { tur: 'sec', soru: '“Bir kutum var. Kutu kırmızı.” demek istiyorsun. Hangisi?',
    secenekler: ['I have a box. The box is red.', 'I have a box. A box is red.', 'I have a box. Box is red.'], dogru: 0,
    aciklama: 'Kutudan ilk kez söz ederken *a box* (bir kutu) dersin. İkinci kez söz edince hangi kutu olduğu bellidir: *The box is red.* *A box* başka bir kutu gibi duyulur; *box* da artikelsiz kalmaz.',
    birimler: ['en:s:the'] },
  // S8 · iyelik: her
  { tur: 'sec', soru: 'Ayşe’nin anahtarını gösteriyorsun: “Bu onun anahtarı.” Hangisi?',
    secenekler: ['This is his key.', 'This is her key.', 'This is Ayşe key.'], dogru: 1,
    aciklama: 'Ayşe kadındır; “onun” *her* olur: *This is her key.* *His* bir erkeğin eşyası için; adla söylemek istersen *Ayşe’s key* olur, *Ayşe key* değil.',
    birimler: ['en:s:her'] },
  // S9 · Can: I can't (Gün: today)
  { tur: 'dinle', ses: 'Sorry, I can’t help you today.', secenekler: ['Üzgünüm, yarın sana yardım edemem.', 'Üzgünüm, yarın sana yardım edebilirim.', 'Üzgünüm, bugün sana yardım edemem.'], dogru: 2,
    aciklama: 'Duyduğun *Sorry, I can’t help you today.*: Üzgünüm, bugün sana yardım edemem. *Can’t* uzun ve vurguludur, “yapamam” der; yarın *tomorrow* olurdu.',
    birimler: ['en:k:i-cant', 'en:s:today'] },
  // S10 · Kafe ve Renkler: big (tur 3: önceki "help ----" boşluğunun cevabı "me", S13 ve S15'in "Give me" şıklarında görünüyordu)
  { tur: 'yaz', soru: 'Anna, can you help me? My box is ----. (büyük)', cevaplar: ['big', 'large'],
    aciklama: '“Büyük” *big*’dir: *My box is big.* (Anna, bana yardım eder misin? Kutum büyük.) *Large* da doğrudur.',
    birimler: ['en:s:big'] },
  // S11 · Saat: o'clock (Şehir: bus)
  { tur: 'dinle', ses: 'What time is the bus? Eight o’clock in the morning.', secenekler: ['Otobüs saat kaçta? Sabah sekizde.', 'Tren saat kaçta? Sabah sekizde.', 'Otobüs saat kaçta? Sabah sekiz buçukta.'], dogru: 0,
    aciklama: 'Duyduğun *What time is the bus? Eight o’clock in the morning.*: Otobüs saat kaçta? Sabah sekizde. *O’clock* tam saattir; buçuk *half past eight* olurdu; tren *train* olurdu.',
    birimler: ['en:s:oclock', 'en:s:bus'] },
  // S12 · Saat: half past
  { tur: 'yaz', soru: 'It is ---- past six in the evening. (6:30)', cevaplar: ['half'],
    aciklama: '6:30 “altı buçuk”tur: *It is half past six in the evening.* (Akşam altı buçuk.) “Buçuk” *half past* ile söylenir, saat sonra gelir.',
    birimler: ['en:k:half-past'] },
  // S13 · Çoğul: boxes
  { tur: 'cevir', tr: 'Bana üç kutu ver.', secenekler: ['Give me three boxes.', 'Give me three box.', 'Give me three boxs.'], dogru: 0,
    aciklama: 'Birden çok kutu çoğuldur; *-x* ile biten *box* *-es* alır: *three boxes*. Türkçede “üç kutu” eksizdir, İngilizcede ek gelir; *boxs* diye yazılmaz.',
    birimler: ['en:s:box'] },
  // S14 · Resmî işler: harf harf
  { tur: 'dinle', ses: 'My name is S, E, N, A.', secenekler: ['Seda', 'Seza', 'Sena'], dogru: 2,
    aciklama: 'Duyduğun *My name is S, E, N, A.* Ad yalnız harf harf söyleniyor. Üçüncü harf *N*’dir (“en” diye okunur); *D* “di:”, *Z* “zed” olurdu.',
    birimler: ['en:y:alfabe'] },
  // S15 · a / an
  { tur: 'cevir', tr: 'Bana bir elma ver.', secenekler: ['Give me a apple.', 'Give me an apple.', 'Give me apple.'], dogru: 1,
    aciklama: '*Apple* ünlü sesle başlar; önüne *an* gelir: *Give me an apple.* *A* ünsüzle başlayan sözcükten önce gelir (*a bag*); tek bir şeyin önü boş kalmaz.',
    birimler: ['en:y:a'] },
  // S16 · Şehir ve Resmî işler: -ty (40)
  { tur: 'dinle', ses: 'Room forty, please.', secenekler: ['4 numaralı oda, lütfen.', '40 numaralı oda, lütfen.', '14 numaralı oda, lütfen.'], dogru: 1,
    aciklama: 'Duyduğun *Room forty, please.*: 40 numaralı oda. *Forty*’de vurgu baştadır ve sonda kısa “ti” vardır; 14 *fourteen* (sonda uzun “ti:n”, vurgu sonda), 4 *four* olurdu.',
    birimler: ['en:y:onluklar'] },
  // S17 · this is
  { tur: 'sec', soru: 'Görevliye elindeki bileti gösteriyorsun: “Bu benim biletim.” Hangisi?',
    secenekler: ['This is my ticket.', 'This are my ticket.', 'This my ticket.'], dogru: 0,
    aciklama: '“Bu benim …” *This is my …* diye söylenir: *This is my ticket.* *Is* düşmez (Türkçede “Bu benim biletim” fiilsizdir, İngilizcede değil); *this* tek bir şeydir, *are* almaz.',
    birimler: ['en:k:this-is'] },
  // S18 · Sağlık: doctor (İnsanlar: brother)
  { tur: 'dinle', ses: 'My brother is sick. He needs a doctor.', secenekler: ['Kız kardeşim hasta. İlaca ihtiyacı var.', 'Erkek kardeşim hasta. İlaca ihtiyacı var.', 'Erkek kardeşim hasta. Doktora ihtiyacı var.'], dogru: 2,
    aciklama: 'Duyduğun *My brother is sick. He needs a doctor.*: Erkek kardeşim hasta. Doktora ihtiyacı var. İlaç *medicine*, kız kardeş *sister* olurdu.',
    birimler: ['en:s:doctor', 'en:s:brother'] },
  // S19 · Komutlar: don't
  { tur: 'cevir', tr: 'Çantamı açma, lütfen.', secenekler: ['No open my bag, please.', 'Don’t open my bag, please.', 'Not open my bag, please.'], dogru: 1,
    aciklama: '“Yapma” komutu başa *Don’t* koyarak kurulur: *Don’t open my bag, please.* *No* ve *not* komutun başına tek başına gelmez.',
    birimler: ['en:k:dont'] },
  // S20 · Be: is
  { tur: 'duzelt', cumle: 'Anna a doctor. (Anna bir doktor.)', secenekler: ['Anna is a doctor.', 'Anna are a doctor.', 'Anna am a doctor.'], dogru: 0,
    aciklama: '“Doktor” bir iştir; İngilizcede araya *be* girer. Anna tek bir kişidir, *she* gibidir: *Anna is a doctor.* *Are* *you* ile, *am* *I* ile gelir.',
    birimler: ['en:y:am-are'] },
  // S21 · İnsanlar: friend
  { tur: 'dinle', ses: 'My friend Elif is from Italy.', secenekler: ['Arkadaşım Elif Türkiye’den.', 'Kız kardeşim Elif Türkiye’den.', 'Arkadaşım Elif İtalya’dan.'], dogru: 2,
    aciklama: 'Duyduğun *My friend Elif is from Italy.*: Arkadaşım Elif İtalya’dan. Kız kardeş *sister* olurdu; *from Italy* “İtalya’dan” der.',
    birimler: ['en:s:friend'] },
  // S22 · iyelik my (İnsanlar: neighbour); yanındakini tanıtmak
  { tur: 'sec', soru: 'Komşun Murat yanında duruyor. Onu bir arkadaşına tanıtıyorsun: “Bu benim komşum.” Hangisi?',
    secenekler: ['This is me neighbour.', 'This is mine neighbour.', 'This is my neighbour.'], dogru: 2,
    aciklama: 'Yanındaki birini *This is …* ile tanıtırsın; “benim” ismin önünde *my* olur: *This is my neighbour.* *Me* “beni, bana” der; *mine* ismin önüne gelmez.',
    birimler: ['en:s:my'] },
  // S23 · İnsanlar: sister (Varış: two)
  { tur: 'dinle', ses: 'I have two sisters.', secenekler: ['İki erkek kardeşim var.', 'İki kız kardeşim var.', 'Üç kız kardeşim var.'], dogru: 1,
    aciklama: 'Duyduğun *I have two sisters.*: İki kız kardeşim var. Erkek kardeş *brother*, üç *three* olurdu.',
    birimler: ['en:s:sister', 'en:s:two'] },
  // S24 · Have ve like: Do you like?
  { tur: 'sec', soru: 'Arkadaşına çayı sevip sevmediğini soruyorsun. Hangisi?',
    secenekler: ['Do you like tea?', 'Are you like tea?', 'Is you like tea?'], dogru: 0,
    aciklama: '*Like* fiildir; soru başa *Do* koyarak kurulur: *Do you like tea?* *Are* ve *is* fiilin sorusunu kurmaz.',
    birimler: ['en:k:do-you-like'] },
  // S25 · Kafe: big, coffee
  { tur: 'dinle', ses: 'Two big coffees, please.', secenekler: ['İki küçük kahve, lütfen.', 'İki büyük kahve, lütfen.', 'İki büyük çay, lütfen.'], dogru: 1,
    aciklama: 'Duyduğun *Two big coffees, please.*: İki büyük kahve, lütfen. Küçük *small*, çay *tea* olurdu.',
    birimler: ['en:s:big', 'en:s:coffee'] },
  // S26 · Soru kalıpları: how much
  { tur: 'sec', soru: 'Kafede elindeki ekmeğin fiyatını soruyorsun. Hangisi?',
    secenekler: ['How many is this bread?', 'How much is this bread?', 'What is this bread?'], dogru: 1,
    aciklama: 'Fiyat *How much* ile sorulur: *How much is this bread?* (Bu ekmek ne kadar?) *How many* “kaç tane” der; *What is this bread?* “Bu ekmek ne?” diye sorar.',
    birimler: ['en:k:how-much'] },
  // S27 · Have ve like: I want; Geniş zaman: I don't
  { tur: 'dinle', ses: 'I don’t want coffee today.', secenekler: ['Bugün kahve istiyorum.', 'Bugün kahve seviyorum.', 'Bugün kahve istemiyorum.'], dogru: 2,
    aciklama: 'Duyduğun *I don’t want coffee today.*: Bugün kahve istemiyorum. *Don’t* olumsuzluğu verir; “sevmek” *like* olurdu.',
    birimler: ['en:k:i-want', 'en:k:i-dont'] },
  // S28 · Can: Can I have …?
  { tur: 'sec', soru: 'Kafede rafta renkli fincanlar var. Garsondan yeşil fincanı istiyorsun. Kibarca ne dersin?',
    secenekler: ['Can I have the green cup, please?', 'Can I has the green cup, please?', 'Can I to have the green cup, please?'], dogru: 0,
    aciklama: 'Kibar istek *Can I have …?* ile kurulur: *Can I have the green cup, please?* *Can*’den sonra fiil yalın kalır: *has* olmaz, araya *to* girmez.',
    birimler: ['en:k:can-i-have'] },
  // S29 · Geniş zaman: -s
  { tur: 'yaz', soru: 'My friend ---- tea in the evening. (içer)', cevaplar: ['drinks', 'has'],
    aciklama: '*My friend* tek bir kişidir, *she* ya da *he* gibidir; fiil *-s* alır: *My friend drinks tea in the evening.* (*has tea* da doğrudur.)',
    birimler: ['en:y:ucuncu-tekil-s'] },
  // S30 · Şehir: next to, there are
  { tur: 'dinle', ses: 'There are three taxis next to the bank.', secenekler: ['Bankanın yanında üç taksi var.', 'Bankanın yakınında üç taksi var.', 'Bankanın yakınında bir taksi var.'], dogru: 0,
    aciklama: 'Duyduğun *There are three taxis next to the bank.*: Bankanın yanında üç taksi var. *Next to* “hemen yanında”, *near* “yakınında” der; *There are* birden çok şey içindir.',
    birimler: ['en:k:next-to', 'en:k:there-are'] },
  // S31 · the: hangisi olduğu belli
  { tur: 'sec', soru: 'Masada bir kırmızı, bir yeşil kutu var. Arkadaşına “Kırmızı kutuyu aç.” diyorsun. Hangisi?',
    secenekler: ['Open a red box.', 'Open red box.', 'Open the red box.'], dogru: 2,
    aciklama: 'Hangi kutu olduğu belli: masadaki kırmızı kutu. Belli şeyin önüne *the* gelir: *Open the red box.* *A red box* “herhangi bir kırmızı kutu” der; *box* da artikelsiz kalmaz.',
    birimler: ['en:s:the'] },
  // S32 · Şehir: on (Pazar: green)
  { tur: 'dinle', ses: 'Your key is on the green box.', secenekler: ['Anahtarın yeşil kutunun üstünde.', 'Anahtarın yeşil kutunun içinde.', 'Anahtarın kırmızı kutunun içinde.'], dogru: 0,
    aciklama: 'Duyduğun *Your key is on the green box.*: Anahtarın yeşil kutunun üstünde. *On* “üstünde”, *in* “içinde” der; kırmızı *red* olurdu.',
    birimler: ['en:s:on', 'en:s:green'] },
  // S33 · Şehir: onluklar
  { tur: 'yaz', soru: 'Take bus ----. (90, sözcükle)', cevaplar: ['ninety'],
    aciklama: '90 *ninety* diye yazılır: *Take bus ninety.* (90 numaralı otobüse bin.) *Nine*’ın sonundaki *e* *ninety*’de kalır.',
    birimler: ['en:y:onluklar'] },
  // S34 · Resmî işler: -teen (17)
  { tur: 'dinle', ses: 'Bus seventeen goes to the station.', secenekler: ['70 numaralı otobüs istasyona gider.', '17 numaralı otobüs istasyona gider.', '7 numaralı otobüs istasyona gider.'], dogru: 1,
    aciklama: 'Duyduğun *Bus seventeen goes to the station.*: 17 numaralı otobüs istasyona gider. *Seventeen* sonda uzun “ti:n” ile biter, vurgu sondadır; 70 *seventy* (vurgu başta, sonda kısa “ti”), 7 *seven* olurdu.',
    birimler: ['en:y:sayilar-13-19'] },
  // S35 · Gündelik hayat: günler
  { tur: 'dinle', ses: 'Today is Tuesday.', secenekler: ['Bugün perşembe.', 'Bugün cuma.', 'Bugün salı.'], dogru: 2,
    aciklama: 'Duyduğun *Today is Tuesday.*: Bugün salı. Perşembe *Thursday* (başta “th”), cuma *Friday* olurdu.',
    birimler: ['en:s:days-of-the-week'] },
  // S36 · a / an (has)
  { tur: 'duzelt', cumle: 'Anna has a apple. (Anna’nın bir elması var.)', secenekler: ['Anna have a apple.', 'Anna has an apple.', 'Anna has an apples.'], dogru: 1,
    aciklama: 'Yanlış *a apple*’dadır: *apple* ünlü sesle başlar, önüne *an* gelir: *Anna has an apple.* *Has* doğruydu (Anna tek kişi); *an* ile isim tekil kalır.',
    birimler: ['en:y:a', 'en:y:ucuncu-tekil-s'] },
  // S37 · Geniş zaman: Does …? (Şehir: bus)
  { tur: 'dinle', ses: 'Does she go to work by bus? Yes, she does.', secenekler: ['İşe otobüsle mi gider? Hayır, gitmez.', 'İşe trenle mi gider? Hayır, gitmez.', 'İşe otobüsle mi gider? Evet, gider.'], dogru: 2,
    aciklama: 'Duyduğun *Does she go to work by bus? Yes, she does.*: İşe otobüsle mi gider? Evet, gider. Cevap *Yes* ile başlıyor; tren *train* olurdu.',
    birimler: ['en:k:do-you', 'en:s:bus'] },
  // S38 · Geniş zaman: -s (tur 3: önceki doesn't öğesi S39'un cevabını şıklarında gösteriyordu)
  { tur: 'sec', soru: '“Komşum kahve sever.” demek istiyorsun. Hangisi?',
    secenekler: ['My neighbour likes coffee.', 'My neighbour like coffee.', 'My neighbour is like coffee.'], dogru: 0,
    aciklama: '*My neighbour* tek bir kişidir, *he* ya da *she* gibidir; fiil *-s* alır: *My neighbour likes coffee.* *Like* eksiz kalmaz; *like* fiil olduğu için önüne *is* gelmez.',
    birimler: ['en:y:ucuncu-tekil-s'] },
  // S39 · Geniş zaman: doesn't (kısa cevap)
  { tur: 'yaz', soru: 'Does Anna eat bread in the morning? — No, she ----. (kısa cevap: yemez)', cevaplar: ['doesn’t', 'does not'],
    aciklama: '*Does she …?* sorusuna olumsuz kısa cevap *No, she doesn’t.* olur. (Anna sabahları ekmek yer mi? Hayır, yemez.) Uzun hâli *does not* da doğrudur.',
    birimler: ['en:k:i-dont', 'en:y:ucuncu-tekil-s'] },
  // S40 · Gündelik hayat: work, morning
  { tur: 'dinle', ses: 'My brother goes to work in the morning.', secenekler: ['Erkek kardeşim sabah eve gider.', 'Erkek kardeşim sabah işe gider.', 'Erkek kardeşim akşam eve gider.'], dogru: 1,
    aciklama: 'Duyduğun *My brother goes to work in the morning.*: Erkek kardeşim sabah işe gider. Ev *home*, akşam *evening* olurdu.',
    birimler: ['en:s:work', 'en:s:morning'] },
];
