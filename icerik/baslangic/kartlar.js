// Başlangıç Kitabı kelime kartları: Genel İngilizcede sözcük birimlerinin "kart arkası" (Dalga 1 Görev 1, 23 Kasım 2026).
// IKI_KANAT §11/2: sözcük biriminin anlam kanadı kart arkasının okunması ve tek bir sorunun doğru çözülmesidir; kökü ya da ailesi
// olmayan temel sözcükte (red, me) kartı görmek yeter. Kart arkası Kitap tarafıdır: Türkçe açıklama serbesttir (Yolculuk'ta yok).
//
// Biçim: KARTLAR[birimId] = { anlam, aile?, birlikte?, not?, soru? }
//   anlam    Türkçe karşılık (doğal, kısa).
//   aile     Aynı aileden ya da aynı kökten sözcükler; her öğe 'english — türkçe'.
//   birlikte Birlikte kullanım örnekleri (İngilizce); her öğe 'english — türkçe'.
//   not      Kısa Türkçe not (isteğe bağlı).
//   soru     { soru, secenekler: string[] (2–5), dogru: dizin, aciklama }. aile ya da birlikte olan kartta zorunlu; temel sözcükte yok.
// Kimlikler icerik/filiz/birimler.js'tekilerdir (yalnız en:s:). Yazılı durakların (icerik/filiz/index.js DURAKLAR) her en:s: birimi
// için kart zorunludur: `node icerik/kitap/denetle-kitap.mjs --kitap icerik/baslangic --kural baslangic` (kart-yok, kart-bicim).
// Kurallar: özgün metin; gerçek aile ve gerçek birlikte kullanım; halk etimolojisi yok; tek doğru cevap. Ayrıntı: README.md §5.
// Taslak: İngilizce öğretmeninin onayını bekler.

export const KARTLAR = {
  // ---------- Durak 1: Varış ----------
  'en:s:hello': { anlam: 'merhaba', not: 'Telefonu açarken de söylenir: Hello?' },
  'en:s:bag': {
    anlam: 'çanta; torba, poşet',
    aile: ['handbag — el çantası'],
    birlikte: ['pack a bag — çanta hazırlamak', 'a bag of apples — bir torba elma'],
    soru: {
      soru: 'Yolculuktan önce eşyalarını çantaya yerleştiriyorsun. Buna İngilizcede ne denir?',
      secenekler: ['open a door', 'pack a bag', 'buy a ticket'],
      dogru: 1,
      aciklama: '**pack a bag**: eşyaları çantaya yerleştirmek, çanta hazırlamak. *open a door* kapı açmak, *buy a ticket* bilet almaktır.',
    },
  },
  'en:s:passport': {
    anlam: 'pasaport',
    birlikte: ['passport control — pasaport kontrolü', 'show your passport — pasaportunu göstermek'],
    soru: {
      soru: 'Havalimanında "Pasaport kontrolü" tabelası İngilizce nasıl yazılır?',
      secenekler: ['Control passport', 'Passport ticket', 'Passport control'],
      dogru: 2,
      aciklama: 'İngilizcede de Türkçedeki gibi önce ne kontrol edildiği gelir: **passport control**. *Passport ticket* diye bir şey yoktur.',
    },
  },
  'en:s:ticket': {
    anlam: 'bilet',
    birlikte: ['a bus ticket — otobüs bileti', 'a train ticket — tren bileti', 'buy a ticket — bilet almak'],
    soru: {
      soru: '"Otobüs bileti" İngilizcede hangisi?',
      secenekler: ['a bus ticket', 'a ticket bus', 'a bus of ticket'],
      dogru: 0,
      aciklama: 'Sıra Türkçedeki gibidir: önce *bus* (otobüs), sonra *ticket* (bilet): **a bus ticket**.',
    },
  },
  'en:s:this': {
    anlam: 'bu',
    aile: ['these — bunlar', 'that — şu, o'],
    birlikte: ['this bag — bu çanta', 'This is my passport. — Bu benim pasaportum.'],
    soru: {
      soru: 'Elindeki iki bileti gösteriyorsun: "Bunlar benim biletlerim." Boşluğa hangisi gelir? "---- are my tickets."',
      secenekler: ['This', 'These', 'That'],
      dogru: 1,
      aciklama: 'Birden çok şey için **these** (bunlar) kullanılır. *This* tek bir şey içindir (bu), *that* uzaktaki tek bir şey içindir (şu, o).',
    },
  },
  'en:s:please': {
    anlam: 'lütfen',
    birlikte: ['Yes, please. — Evet, lütfen. (bir teklifi kabul ederken)', 'A ticket, please. — Bir bilet, lütfen.'],
    soru: {
      soru: 'Biri sana bir elma uzatıp "Apple?" diyor. Elmayı istiyorsun. En doğal cevap hangisi?',
      secenekler: ['Yes, sorry.', 'Hello, please.', 'Yes, please.'],
      dogru: 2,
      aciklama: 'Bir teklifi kabul ederken **Yes, please.** denir. *Sorry* özür dilemek, *hello* selam vermek içindir.',
    },
  },
  'en:s:here': {
    anlam: 'burada; buraya',
    aile: ['there — orada; oraya', 'where — nerede; nereye'],
    birlikte: ['Here is your key. — İşte anahtarın.', 'Come here. — Buraya gel.'],
    soru: {
      soru: 'Görevli pasaportunu geri veriyor: "Here is your passport." Ne diyor?',
      secenekler: ['İşte pasaportun.', 'Pasaportun nerede?', 'Pasaportun burada değil.'],
      dogru: 0,
      aciklama: '**Here is …** bir şeyi verirken ya da gösterirken söylenir: "İşte …". Nerede diye sormak için *where* kullanılır.',
    },
  },
  'en:s:where': {
    anlam: 'nerede; nereye',
    aile: ['here — burada', 'there — orada'],
    birlikte: ['Where is …? — … nerede?', 'Where are you from? — Nerelisin?'],
    soru: {
      soru: '"Çantam nerede?" İngilizcede hangisi?',
      secenekler: ['Here is my bag.', 'Where is my bag?', 'This is my bag.'],
      dogru: 1,
      aciklama: '**Where is …?** "… nerede?" diye sorar. *Here is my bag* "İşte çantam", *This is my bag* "Bu benim çantam" demektir.',
    },
  },
  'en:s:one': { anlam: 'bir (sayı)', not: '*a bag* da *one bag* da "bir çanta"dır; *one* sayıyı vurgular: tek bir çanta.' },
  'en:s:two': { anlam: 'iki' },
  'en:s:three': { anlam: 'üç' },
  'en:s:four': { anlam: 'dört' },
  'en:s:five': { anlam: 'beş' },
  'en:s:yes': { anlam: 'evet' },
  'en:s:no': { anlam: 'hayır' },
  'en:s:sorry': {
    anlam: 'özür dilerim; pardon',
    birlikte: ["I'm sorry. — Özür dilerim.", 'Sorry? — Efendim? Anlayamadım. (tekrar etmesini isterken)'],
    soru: {
      soru: 'Görevlinin söylediğini duyamadın ve tekrar etmesini istiyorsun. Kısaca ne dersin?',
      secenekler: ['Goodbye.', 'Sorry?', 'Yes, please.'],
      dogru: 1,
      aciklama: 'Soru tonuyla söylenen **Sorry?** "Efendim, anlayamadım" demektir. *Goodbye* vedalaşmak, *Yes, please* bir teklifi kabul etmek içindir.',
    },
  },
  'en:s:goodbye': {
    anlam: 'hoşça kal; güle güle',
    aile: ['bye — kısa ve günlük biçimi'],
    soru: {
      soru: 'Arkadaşından ayrılıyorsun. *goodbye* sözcüğünün kısa ve günlük biçimi hangisi?',
      secenekler: ['Bye!', 'Hello!', 'Sorry!'],
      dogru: 0,
      aciklama: '**Bye!** *goodbye*\'ın kısa biçimidir; arkadaşlar arasında çok kullanılır. *Hello* selamdır, *sorry* özürdür.',
    },
  },

  // ---------- Durak 2: Barınma ----------
  'en:s:room': {
    anlam: 'oda',
    aile: ['bedroom — yatak odası', 'bathroom — banyo', 'living room — oturma odası'],
    birlikte: ['room four — dört numaralı oda'],
    soru: {
      soru: '*bedroom* ne demek?',
      secenekler: ['oda anahtarı', 'yatak örtüsü', 'yatak odası'],
      dogru: 2,
      aciklama: '*bed* (yatak) + *room* (oda): **bedroom** yatak odasıdır.',
    },
  },
  'en:s:door': {
    anlam: 'kapı',
    aile: ['doorbell — kapı zili'],
    birlikte: ['open the door — kapıyı açmak', 'close the door — kapıyı kapatmak'],
    soru: {
      soru: '"Kapıyı kapat, lütfen." İngilizcede hangisi?',
      secenekler: ['Close the door, please.', 'Open the door, please.', 'Close the window, please.'],
      dogru: 0,
      aciklama: '*close* kapatmak, *door* kapıdır: **Close the door, please.** *open* açmak, *window* penceredir.',
    },
  },
  'en:s:window': {
    anlam: 'pencere',
    birlikte: ['open the window — pencereyi açmak', 'a window seat — cam kenarı koltuk'],
    soru: {
      soru: 'Otobüste cam kenarında oturmak istiyorsun. "Cam kenarı koltuk" hangisi?',
      secenekler: ['a door seat', 'a window seat', 'a window room'],
      dogru: 1,
      aciklama: 'Pencerenin yanındaki koltuğa **a window seat** denir. *a window room* koltuk değildir; *a door seat* diye bir söz yoktur.',
    },
  },
  'en:s:bed': {
    anlam: 'yatak',
    aile: ['bedroom — yatak odası'],
    birlikte: ['go to bed — yatmak', 'a double bed — çift kişilik yatak'],
    soru: {
      soru: '"I go to bed at ten." Ne yapıyor?',
      secenekler: ['Saat onda yatıyor.', 'Saat onda yatak alıyor.', 'Saat onda yatağını topluyor.'],
      dogru: 0,
      aciklama: '**go to bed** uyumak için yatmak demektir. Yatak almak *buy a bed*, yatağı toplamak *make the bed* olur.',
    },
  },
  'en:s:key': {
    anlam: 'anahtar',
    birlikte: ['room key — oda anahtarı', 'car key — araba anahtarı', 'Here is your key. — İşte anahtarın.'],
    soru: {
      soru: '*car key* ne demek?',
      secenekler: ['anahtarlı araba', 'araba kapısı', 'araba anahtarı'],
      dogru: 2,
      aciklama: 'Önce ne anahtarı olduğu gelir: *car* (araba) + *key* (anahtar) = **araba anahtarı**.',
    },
  },
  'en:s:my': { anlam: 'benim', not: 'Sözcükten önce gelir: *my bag* (benim çantam), *my room* (benim odam).' },
  'en:s:your': { anlam: 'senin; sizin', not: '*your* hem "senin" hem "sizin" demektir: *your key* (senin anahtarın ya da sizin anahtarınız).' },
  'en:s:open': {
    anlam: 'açmak; açık',
    aile: ['opener — açacak'],
    birlikte: ['open the window — pencereyi açmak', 'The shop is open. — Dükkân açık.'],
    not: 'Karşıtı: *close* (kapatmak); kapalı için *closed*.',
    soru: {
      soru: '"The shop is open." Ne demek?',
      secenekler: ['Dükkânı aç.', 'Dükkân açık.', 'Dükkân kapalı.'],
      dogru: 1,
      aciklama: '*is open* "açık" demektir: **Dükkân açık.** Dükkânı aç demek için *Open the shop.* denir; kapalı ise *closed* olur.',
    },
  },
  'en:s:close': {
    anlam: 'kapatmak',
    birlikte: ['close the door — kapıyı kapatmak', 'The shop is closed. — Dükkân kapalı.'],
    not: 'Kapalı: *closed*. Karşıtı: *open* (açmak; açık). "Yakın" anlamındaki *close* aynı yazılır ama sonu s gibi okunur; "kapatmak" anlamındakinin sonu z gibidir.',
    soru: {
      soru: 'Dükkânın kapısında "CLOSED" yazıyor. Ne demek?',
      secenekler: ['Kapalı', 'Açık', 'Kapıyı aç'],
      dogru: 0,
      aciklama: '*close* kapatmaktır; **closed** "kapalı" demektir. "Açık" *open* olur.',
    },
  },

  // ---------- Durak 3: Pazar ----------
  'en:s:red': { anlam: 'kırmızı' },
  'en:s:green': { anlam: 'yeşil' },
  'en:s:yellow': { anlam: 'sarı' },
  'en:s:apple': {
    anlam: 'elma',
    aile: ['apples — elmalar'],
    birlikte: ['an apple — bir elma', 'apple juice — elma suyu'],
    not: '*apple* ünlü sesle başlar; bu yüzden önüne *a* değil *an* gelir.',
    soru: {
      soru: '"Bir elma" İngilizcede hangisi?',
      secenekler: ['a apple', 'an apples', 'an apple'],
      dogru: 2,
      aciklama: 'Ünlü sesle başlayan sözcükten önce *a* değil **an** gelir: **an apple**. Tek elma için *apples* (çoğul) kullanılmaz.',
    },
  },
  'en:s:apples': {
    anlam: 'elmalar',
    aile: ['apple — elma (tekil)'],
    not: 'Çoğul için sözcüğün sonuna *-s* eklenir.',
    soru: {
      soru: '"Üç elma" İngilizcede hangisi?',
      secenekler: ['three apples', 'three apple', 'an apples'],
      dogru: 0,
      aciklama: 'Birden fazla şeyde sona *-s* gelir: **three apples**. Türkçede "üç elma" deriz ama İngilizcede sayıdan sonra da çoğul gerekir.',
    },
  },
  'en:s:the': {
    anlam: 'bilinen, belli bir şeyi gösterir (Türkçede tek bir karşılığı yok)',
    birlikte: ['Take the apple. — Elmayı al.', 'Close the door. — Kapıyı kapat.'],
    not: 'Türkçede "elmayı al" derken bildiğin belli bir elmayı kastedersin; İngilizcede bunu *the* gösterir.',
    soru: {
      soru: 'Masada tek bir elma var. Arkadaşına "Elmayı bana ver, lütfen." diyorsun. Hangisi doğru?',
      secenekler: ['Give me apple, please.', 'Give me the apple, please.', 'Give me a the apple, please.'],
      dogru: 1,
      aciklama: 'İkiniz de hangi elmayı kastettiğini biliyorsunuz: **the apple**. Sayılabilen tek bir şeyin önü boş kalmaz: *a*, *the* ya da *my*, *this* gibi bir sözcük gelir. *a* ile *the* birlikte kullanılmaz.',
    },
  },

  // ---------- Durak 4: İş ----------
  'en:s:hammer': { anlam: 'çekiç' },
  'en:s:drill': { anlam: 'matkap' },
  'en:s:box': {
    anlam: 'kutu',
    aile: ['toolbox — alet kutusu'],
    birlikte: ['a box of apples — bir kutu elma'],
    not: 'Çoğulu *boxes*.',
    soru: {
      soru: '*toolbox* ne demek?',
      secenekler: ['posta kutusu', 'alet kutusu', 'kutu açacağı'],
      dogru: 1,
      aciklama: '*tool* (alet) + *box* (kutu): **toolbox** alet kutusudur.',
    },
  },
  'en:s:help': {
    anlam: 'yardım; yardım etmek',
    aile: ['helpful — yardımsever; işe yarar'],
    birlikte: ['Help me! — Bana yardım et!', 'Can you help me? — Bana yardım eder misin?'],
    soru: {
      soru: '"Bana yardım eder misin?" İngilizcede hangisi?',
      secenekler: ['Can I help you?', 'Can you help me?', 'Help you me?'],
      dogru: 1,
      aciklama: '**Can you help me?** "Bana yardım eder misin?" demektir. *Can I help you?* tersidir: "Sana yardım edebilir miyim?"',
    },
  },
  'en:s:clock': {
    anlam: 'saat (duvar ya da masa saati)',
    aile: ["o'clock — tam saat", 'alarm clock — çalar saat'],
    not: 'Kola takılan saat *clock* değil *watch*tır.',
    soru: {
      soru: '*alarm clock* ne demek?',
      secenekler: ['kol saati', 'saat kulesi', 'çalar saat'],
      dogru: 2,
      aciklama: '**alarm clock** sabah çalan saattir: çalar saat. Kol saati *watch* olur.',
    },
  },
  'en:s:six': { anlam: 'altı' },
  'en:s:seven': { anlam: 'yedi' },
  'en:s:eight': { anlam: 'sekiz' },
  'en:s:nine': { anlam: 'dokuz' },
  'en:s:ten': { anlam: 'on' },
  'en:s:oclock': {
    anlam: 'saat … (yalnız tam saatte)',
    aile: ['clock — saat'],
    birlikte: ["It's six o'clock. — Saat altı.", "at nine o'clock — saat dokuzda"],
    not: "Yalnız tam saatte kullanılır: *seven o'clock* (saat yedi). Buçuklu ve dakikalı saatte kullanılmaz.",
    soru: {
      soru: '"Saat dokuzda" İngilizcede hangisi?',
      secenekler: ["at nine o'clock", "at o'clock nine", 'at nine clock'],
      dogru: 0,
      aciklama: "Önce sayı, sonra *o'clock* gelir: **at nine o'clock**. *clock* tek başına saat aletidir; saati söylerken *o'clock* kullanılır.",
    },
  },
  // ---------- Durak 5: Resmî işler (Dalga 1 Görev 6, 23 Kasım 2026) ----------
  'en:s:name': {
    anlam: 'ad, isim',
    aile: ['first name — ad (ilk ad)', 'surname — soyadı'],
    birlikte: ['My name is … — Adım …', 'What is your name? — Adın ne?'],
    soru: {
      soru: 'Bir formda *surname* yazan kutuya ne yazarsın?',
      secenekler: ['adını', 'soyadını', 'imzanı'],
      dogru: 1,
      aciklama: '**surname** soyadıdır. Ad *first name*, imza *signature* olur.',
    },
  },
  'en:s:form': {
    anlam: 'form (doldurulacak resmî kâğıt)',
    birlikte: ['fill in a form — form doldurmak', 'an application form — başvuru formu'],
    soru: {
      soru: '"Form doldurmak" İngilizcede hangisi?',
      secenekler: ['fill in a form', 'make a form', 'write a form in'],
      dogru: 0,
      aciklama: 'Form için *fill in* (içini doldurmak) kullanılır: **fill in a form**. *make a form* bir form hazırlamak, tasarlamaktır.',
    },
  },
  'en:s:number': {
    anlam: 'numara; sayı',
    birlikte: ['phone number — telefon numarası', 'room number — oda numarası', 'Number twelve, please. — On iki numara, lütfen.'],
    not: 'Kısaltması *No.* olur: *No. 12* (12 numara).',
    soru: {
      soru: '"Oda numarası" İngilizcede hangisi?',
      secenekler: ['number room', 'room number', 'room of number'],
      dogru: 1,
      aciklama: 'Önce neyin numarası olduğu gelir: *room* (oda) + *number* (numara) = **room number**.',
    },
  },
  'en:s:eleven': { anlam: 'on bir' },
  'en:s:twelve': { anlam: 'on iki', not: '*eleven* ve *twelve* kendine özgüdür; 13\'ten 19\'a kadar sayılar *-teen* ile biter (*thirteen*, *fourteen* …).' },
  // ---------- Durak 6: Sağlık (Dalga 1 Görev 7, 23 Kasım 2026) ----------
  'en:s:head': {
    anlam: 'baş, kafa',
    aile: ['headache — baş ağrısı'],
    birlikte: ['shake your head — başını sallamak (hayır demek)'],
    soru: {
      soru: '"Baş ağrısı" İngilizcede hangisi?',
      secenekler: ['headache', 'toothache', 'heading'],
      dogru: 0,
      aciklama: '**headache**: *head* (baş) + *ache* (ağrı). *toothache* diş ağrısı, *heading* başlıktır.',
    },
  },
  'en:s:eye': {
    anlam: 'göz',
    aile: ['eyebrow — kaş', 'eyelash — kirpik'],
    birlikte: ['close your eyes — gözlerini kapat'],
    soru: {
      soru: '"Kaş" İngilizcede hangisi?',
      secenekler: ['eyelash', 'eyebrow', 'eyeball'],
      dogru: 1,
      aciklama: '**eyebrow** kaştır. *eyelash* kirpik, *eyeball* göz küresidir.',
    },
  },
  'en:s:leg': {
    anlam: 'bacak',
    birlikte: ['my left leg — sol bacağım', 'the leg of a table — masanın ayağı'],
    not: 'Bileğin altındaki ayak *foot*\'tur; *leg* bacaktır.',
    soru: {
      soru: 'Masanın ayağı için hangisi kullanılır?',
      secenekler: ['the foot of a table', 'the leg of a table', 'the arm of a table'],
      dogru: 1,
      aciklama: 'Masa ve sandalyenin ayağı İngilizcede bacaktır: **the leg of a table**.',
    },
  },
  'en:s:hand': {
    anlam: 'el',
    aile: ['handbag — el çantası', 'handshake — tokalaşma'],
    birlikte: ['shake hands — tokalaşmak'],
    soru: {
      soru: '"Tokalaşmak" İngilizcede hangisi?',
      secenekler: ['shake hands', 'hand in', 'hold on'],
      dogru: 0,
      aciklama: '**shake hands**: elleri sallamak, tokalaşmak. *hand in* teslim etmek, *hold on* beklemektir.',
    },
  },
  'en:s:pharmacy': {
    anlam: 'eczane',
    aile: ['pharmacist — eczacı'],
    not: 'İngiltere\'de *chemist*, ABD\'de *drugstore* da denir. İngiltere\'de eczanede yeşil haç görürsün; Türkiye\'de tabelada kırmızı E vardır.',
    soru: {
      soru: 'Eczanede çalışan kişi hangisi?',
      secenekler: ['pharmacy', 'pharmacist', 'farmer'],
      dogru: 1,
      aciklama: 'Sondaki *-ist* kişiyi gösterir: **pharmacist** eczacıdır. *pharmacy* eczanenin kendisi, *farmer* çiftçidir.',
    },
  },
  'en:s:medicine': {
    anlam: 'ilaç; tıp',
    birlikte: ['take medicine — ilaç almak (içmek)', 'cough medicine — öksürük ilacı'],
    soru: {
      soru: '"İlacını al." İngilizcede hangisi?',
      secenekler: ['make your medicine', 'take your medicine', 'eat your medicine'],
      dogru: 1,
      aciklama: 'İlaç için *take* kullanılır: **take your medicine**. Türkçede de "ilaç almak" denir. *make* yapmak, *eat* yemektir.',
    },
  },
  'en:s:sick': {
    anlam: 'hasta',
    birlikte: ['I am sick. — Hastayım.', 'sick leave — hastalık izni'],
    soru: {
      soru: '"I am sick." ne demek?',
      secenekler: ['Hastayım.', 'Yorgunum.', 'Açım.'],
      dogru: 0,
      aciklama: '**sick** hastadır: *I am sick.* = Hastayım. Yorgun *tired*, aç *hungry* olur.',
    },
  },
  'en:s:sleep': {
    anlam: 'uyumak; uyku',
    aile: ['sleepy — uykulu', 'asleep — uykuda'],
    birlikte: ['go to sleep — uyumaya gitmek', 'sleep well — iyi uyumak'],
    soru: {
      soru: '"Uykulu" İngilizcede hangisi?',
      secenekler: ['asleep', 'sleepy', 'sleeping bag'],
      dogru: 1,
      aciklama: '**sleepy** uykuludur. *asleep* uykuda (uyuyor), *sleeping bag* uyku tulumudur.',
    },
  },
  'en:s:doctor': {
    anlam: 'doktor, hekim',
    birlikte: ['see a doctor — doktora görünmek'],
    soru: {
      soru: '"Doktora görünmek" İngilizcede hangisi?',
      secenekler: ['see a doctor', 'look a doctor', 'watch a doctor'],
      dogru: 0,
      aciklama: 'Doktora gitmek için *see* kullanılır: **see a doctor**. *look* ve *watch* bu anlamda kullanılmaz.',
    },
  },
  // ---------- Durak 7: İnsanlar (Dalga 1 Görev 8, 23 Kasım 2026) ----------
  'en:s:man': {
    anlam: 'adam, erkek',
    aile: ['men — adamlar, erkekler (düzensiz çoğul)'],
    birlikte: ['a young man — genç bir adam', 'an old man — yaşlı bir adam'],
    not: 'Okunuş balonunda *man* “men” diye yazılır; ses a ile e arasıdır. Çoğul *men* düz e ile söylenir; ikisini dinleyerek ayır.',
    soru: {
      soru: '"İki adam" İngilizcede hangisi?',
      secenekler: ['two mans', 'two men', 'two man'],
      dogru: 1,
      aciklama: '*man* düzensiz çoğul alır: **two men**. *-s* eklenmez (*mans* yanlış); iki kişi için tekil *man* de kalmaz.',
    },
  },
  'en:s:woman': {
    anlam: 'kadın',
    aile: ['women — kadınlar (düzensiz çoğul; ilk hecesi "wim" diye okunur)', 'businesswoman — iş kadını'],
    birlikte: ['a young woman — genç bir kadın'],
    soru: {
      soru: '"İş kadını" İngilizcede hangisi?',
      secenekler: ['businesswoman', 'womanbusiness', 'woman of business'],
      dogru: 0,
      aciklama: '**businesswoman**: *business* (iş) önde, *woman* sonda, tek sözcük. Öteki iki sıra İngilizcede kullanılmaz.',
    },
  },
  'en:s:he': { anlam: 'o (erkek için)', not: 'Bir erkekten söz ederken: *He is a doctor.* (O doktor.) Kadın için *she* denir; Türkçede ikisi de "o"dur.' },
  'en:s:she': { anlam: 'o (kadın için)', not: 'Bir kadından söz ederken: *She is my sister.* (O benim kız kardeşim.) Erkek için *he* denir.' },
  'en:s:neighbour': {
    anlam: 'komşu',
    aile: ['neighbourhood — mahalle, semt'],
    birlikte: ['next-door neighbour — yan komşu', 'my new neighbour — yeni komşum'],
    not: 'Amerikan yazımı *neighbor*dır (u yok); söylenişi aynıdır.',
    soru: {
      soru: '"Yan komşu" (hemen yanındaki dairede oturan) İngilizcede hangisi?',
      secenekler: ['next-door neighbour', 'door-next neighbour', 'neighbour next'],
      dogru: 0,
      aciklama: '**next-door neighbour**: *next door* "yan kapı" demektir ve komşudan önce gelir. Öteki iki sıra kullanılmaz.',
    },
  },
  'en:s:friend': {
    anlam: 'arkadaş, dost',
    aile: ['friendly — cana yakın, güler yüzlü', 'friendship — arkadaşlık'],
    birlikte: ['my best friend — en yakın arkadaşım', 'make friends — arkadaş edinmek'],
    soru: {
      soru: 'Yeni şehirde arkadaş edinmek istiyorsun. "Arkadaş edinmek" hangisi?',
      secenekler: ['do friends', 'make friends', 'take friends'],
      dogru: 1,
      aciklama: '**make friends**: arkadaş edinmek. *do* ve *take* bu anlamda *friends* ile kullanılmaz.',
    },
  },
  'en:s:his': { anlam: 'onun (sahibi erkek)', not: '*his bag*: onun çantası (çanta bir erkeğin). Sözcük sahibe göre seçilir, eşyaya göre değil.' },
  'en:s:her': { anlam: 'onun (sahibi kadın); onu, ona (kadın için)', not: '*her bag*: onun çantası (çanta bir kadının). *I know her.* (Onu tanıyorum.) cümlesinde de *her* kullanılır.' },
  'en:s:sister': {
    anlam: 'kız kardeş; abla',
    birlikte: ['my older sister — ablam', 'my younger sister — küçük kız kardeşim'],
    not: 'İngilizcede abla ile kız kardeş için aynı sözcük kullanılır; büyük mü küçük mü olduğunu *older* ve *younger* söyler.',
    soru: {
      soru: '"Ablam" İngilizcede hangisi?',
      secenekler: ['my younger sister', 'my older sister', 'my sister older'],
      dogru: 1,
      aciklama: 'Abla senden büyük kız kardeştir: **my older sister**. *younger* küçük demektir; *older* sözcükten önce gelir, sonra değil.',
    },
  },
  'en:s:brother': {
    anlam: 'erkek kardeş; ağabey',
    aile: ['brothers and sisters — kardeşler'],
    birlikte: ['my older brother — ağabeyim', 'my younger brother — küçük erkek kardeşim'],
    soru: {
      soru: '"Küçük erkek kardeşim" İngilizcede hangisi?',
      secenekler: ['my brother younger', 'my older brother', 'my younger brother'],
      dogru: 2,
      aciklama: '**my younger brother**: *younger* (daha küçük) sözcükten önce gelir. *older* ağabey demektir; *brother younger* sırası kullanılmaz.',
    },
  },
};

// Birimin kartı; kart yoksa (ya da kimlik bozuksa) null. Yalnız kendi alanlarına bakar (toString, __proto__ gibi adlar null).
export function kartBul(birimId) {
  if (typeof birimId !== 'string' || !Object.prototype.hasOwnProperty.call(KARTLAR, birimId)) return null;
  return KARTLAR[birimId];
}
