// iDil seviye tanımı (Görev 1, 21 Kasım 2026): A1 ve A2 müfredat haritası. İnsanın okuduğu hâli: mufredat.md (ikisi aynı şeyi söyler).
// Saf veri modülü: DOM, depolama ve içe aktarma yok; tarayıcı ve mobil aynı dosyayı kullanabilir.
//
// Seviye = { id, ad, duraklar: Oge[], bolumler: Oge[], kazanimlar: Kazanim[], envanter: string[], kapi: { sinavEsik, birimOrani },
//           sinav: SinavSorusu[] }
//   sinav: seviye sonu sınavı (Dalga 1 Görev 2; biçim, puan ve denetim ./sinav.js). Dolu sınav tam 40 öğedir (≥ 16 dinleme);
//   bugün iki seviyede de boştur, A1'in 40 sorusunu Görev 15 yazar. Boş sınav uygulamada "henüz hazır değil" görünür.
//   kapi: bu seviyenin ÇIKIŞ kapısıdır, yani sonraki seviyeyi açar. A1.kapi A2'yi açar (seviye sonu sınavı ≥ sinavEsik ve
//   envanterin ≥ birimOrani kadarı iki kanatla 'tam'); A2.kapi B1'i açacak (B1 henüz yok). İlk seviyenin giriş kapısı yoktur.
// Oge    = { id, no, ad, durum: 'yazili'|'yazilacak', konu, birimler: string[], ders?: string[] (durak), duraklar?: string[] (bölüm) }
//   durak.birimler: durağın getirdiği yeni birimler (birimin "ev" durağı); bölüm.birimler: bölümün açıkladığı birimler.
//   durak.ders: o durağa bağlı bölüm kimlikleri (aynı seviyedeki bölümlerin `duraklar` alanından türetilir).
//   durak.eklenecek? (geçici, yalnız yazılı durakta): müfredatta o durağın olan ama durak dosyasında henüz sahnesi bulunmayan
//   birimler; `birimler`in içindedir. Bugün boş: Varış'ın 6 temel ifadesi Görev 4'te (21 Kasım 2026) sahneye eklendi.
// Kazanim = { id: 'a1-k01'…, metin, birimler: string[] }
// envanter: seviyenin bütün birimleri, durak sırasıyla, `en:s|k|y:ad` biçiminde. Yazılmamış duraklarınkiler de dahil; A1 ile A2 kesişmez.
//
// birimYeri(birimId) -> { seviye, durak, bolumler } | null: birimin ev durağı ve onu açıklayan bölümler (bütün seviyelerden).
//   Sözcük birimlerinin çoğunda bolumler boştur; anlam kanadı kart arkasıdır (IKI_KANAT §11/2).
//
// Yazım kolaylığı: bölüm ve kazanım birimleri kısa adla yazılır ('hello', 'am-are'); ad, o seviyenin ve önceki seviyelerin
// envanterinde tek bir kimliğe çözülür. Bulunamayan ya da iki anlamlı ad modül yüklenirken hata verir.

const KAPI = { sinavEsik: 0.7, birimOrani: 0.8 };

// ---- A1: İlk adımlar ----
const A1_DURAKLAR = [
  { id: 'varis', no: 1, ad: 'Varış', durum: 'yazili',
    konu: 'Havalimanı, pasaport kontrolü, bavul; where, this; sayılar 1–5; temel ifadeler: evet, hayır, özür, veda, anlamadığını söylemek.',
    birimler: ['en:s:hello', 'en:s:bag', 'en:y:a', 'en:s:passport', 'en:s:ticket', 'en:s:this', 'en:k:this-is', 'en:s:please',
      'en:s:here', 'en:s:where', 'en:s:one', 'en:s:two', 'en:s:three', 'en:s:four', 'en:s:five',
      'en:s:yes', 'en:s:no', 'en:s:sorry', 'en:s:goodbye', 'en:k:i-dont-understand', 'en:k:speak-slowly'],
    // Geçici alan (kurucu kararı, 21 Kasım 2026): son altı birim (yes … speak-slowly) Görev 4'te 01-varis.js'e sahne olarak
    // eklendi (sayfa 29–43); alan boşaldı.
    eklenecek: [] },
  { id: 'barinma', no: 2, ad: 'Barınma', durum: 'yazili',
    konu: 'Oda tutmak, anahtar, kapı ve pencere; my, your; aç ve kapat.',
    birimler: ['en:s:room', 'en:s:door', 'en:s:window', 'en:s:bed', 'en:s:key', 'en:s:my', 'en:s:your', 'en:k:here-is',
      'en:s:open', 'en:s:close'] },
  { id: 'pazar', no: 3, ad: 'Pazar', durum: 'yazili',
    konu: 'Renkler, elma, çoğul; take the, give me, thank you.',
    birimler: ['en:s:red', 'en:s:green', 'en:s:yellow', 'en:s:apple', 'en:s:apples', 'en:s:the', 'en:k:take-the', 'en:k:give-me',
      'en:k:thank-you'] },
  { id: 'is', no: 4, ad: 'İş', durum: 'yazili',
    konu: 'İşte ilk gün, aletler, yardım istemek; can; sayılar 6–10 ve tam saat.',
    birimler: ['en:s:hammer', 'en:s:drill', 'en:s:box', 'en:s:help', 'en:k:help-me', 'en:k:can-you', 'en:k:i-can', 'en:s:clock',
      'en:s:six', 'en:s:seven', 'en:s:eight', 'en:s:nine', 'en:s:ten', 'en:s:oclock'] },
  { id: 'resmi', no: 5, ad: 'Resmî işler', durum: 'yazili',
    konu: 'Kayıt masasında form; ad sormak ve söylemek, harf harf hecelemek; I am, you are; sıra ve oda numarasında 11–19.',
    birimler: ['en:s:name', 'en:s:form', 'en:s:number', 'en:k:sign-here', 'en:k:my-name-is', 'en:k:what-is-your-name', 'en:y:alfabe',
      'en:y:am-are', 'en:s:eleven', 'en:s:twelve', 'en:y:sayilar-13-19'] },
  { id: 'saglik', no: 6, ad: 'Sağlık', durum: 'yazili',
    konu: 'Hastalanmak, eczane; vücudun bölümleri; it hurts, I need; I can\'t, don\'t.',
    birimler: ['en:s:head', 'en:s:hand', 'en:s:leg', 'en:s:eye', 'en:s:sick', 'en:s:sleep', 'en:s:medicine', 'en:s:pharmacy',
      'en:s:doctor', 'en:k:it-hurts', 'en:k:i-need', 'en:k:i-cant', 'en:k:dont'] },
  { id: 'insanlar', no: 7, ad: 'İnsanlar', durum: 'yazili',
    konu: 'Komşu ve iş arkadaşıyla tanışmak; nereli olmak; he, she, his, her; kardeşler; I like, I have.',
    birimler: ['en:s:man', 'en:s:woman', 'en:s:friend', 'en:s:neighbour', 'en:s:he', 'en:s:she', 'en:s:his', 'en:s:her',
      'en:s:sister', 'en:s:brother', 'en:k:nice-to-meet-you', 'en:k:i-am-from', 'en:k:i-like', 'en:k:do-you-like', 'en:k:i-have'] },
  { id: 'kafe', no: 8, ad: 'Kafe', durum: 'yazilacak',
    konu: 'Kafede sipariş; yiyecek ve içecek; büyük ve küçük; fiyat sormak; I want, can I have.',
    birimler: ['en:s:water', 'en:s:coffee', 'en:s:tea', 'en:s:bread', 'en:s:cup', 'en:s:eat', 'en:s:drink', 'en:s:hot', 'en:s:big',
      'en:s:small', 'en:k:i-want', 'en:k:can-i-have', 'en:k:how-much'] },
  { id: 'sehir', no: 9, ad: 'Şehir', durum: 'yazilacak',
    konu: 'Şehirde dolaşmak; otobüs, tren, dükkân, banka; there is, there are; in, on, next to, near; hat ve kapı numaralarında 20, 30 … 90.',
    birimler: ['en:s:bus', 'en:s:train', 'en:s:taxi', 'en:s:station', 'en:s:shop', 'en:s:bank', 'en:s:street', 'en:s:go',
      'en:k:there-is', 'en:k:there-are', 'en:s:in', 'en:s:on', 'en:k:next-to', 'en:s:near', 'en:s:twenty', 'en:y:onluklar'] },
  { id: 'gun', no: 10, ad: 'Gündelik hayat', durum: 'yazilacak',
    konu: 'Haftanın günleri, sabah ve akşam, işe gitmek; geniş zaman; saat sormak ve buçuk.',
    birimler: ['en:s:days-of-the-week', 'en:s:today', 'en:s:tomorrow', 'en:s:morning', 'en:s:evening', 'en:s:week', 'en:s:work',
      'en:s:home', 'en:k:every-day', 'en:k:what-time', 'en:k:half-past', 'en:y:genis-zaman', 'en:y:ucuncu-tekil-s', 'en:k:do-you',
      'en:k:i-dont'] },
];

const A1_BOLUMLER = [
  { id: 'selam-sayilar', no: 1, ad: 'Selam ve sayılar', durum: 'yazili',
    konu: 'Selamlaşma ve vedalaşma, nezaket, özür; alfabe ve heceleme; sayılar 1–20 ve onluklar (birleşik sayılar 21–99: kelime kartında).',
    birimler: ['hello', 'goodbye', 'please', 'thank-you', 'sorry', 'nice-to-meet-you', 'alfabe', 'one', 'two', 'three', 'four', 'five',
      'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'sayilar-13-19', 'twenty', 'onluklar'],
    duraklar: ['varis', 'barinma', 'pazar', 'is', 'resmi', 'insanlar', 'sehir'] },
  { id: 'a-an', no: 2, ad: 'A ve an', durum: 'yazili',
    konu: 'Tek nesne için a; an, aynı birimin ünlü sesle başlayan sözcükten önceki biçimi.',
    birimler: ['a'], duraklar: ['varis', 'pazar'] },
  { id: 'this-that', no: 3, ad: 'This ve that, here ve there', durum: 'yazili',
    konu: 'Yakındaki şey ve yer: this, here (that ve there: kelime kartında).',
    birimler: ['this', 'this-is', 'here', 'here-is'], duraklar: ['varis', 'barinma'] },
  { id: 'be', no: 4, ad: 'Be: is, am, are', durum: 'yazili', konu: 'Olmak fiili: is, am, are; soru ve olumsuz; nereli olmak.',
    birimler: ['this-is', 'am-are', 'where', 'sick', 'i-am-from', 'he', 'she'], duraklar: ['varis', 'barinma', 'is', 'resmi', 'saglik', 'insanlar'] },
  { id: 'iyelik', no: 5, ad: 'My, your ve ötekileri', durum: 'yazili',
    konu: 'İyelik sıfatları: my, your, his, her (our ve their: kelime kartında).',
    birimler: ['my', 'your', 'his', 'her'], duraklar: ['barinma', 'insanlar'] },
  { id: 'cogul', no: 6, ad: 'Çoğul -s', durum: 'yazili', konu: 'Düzenli çoğul: -s ve -es (düzensiz çoğullar: kelime kartında).',
    birimler: ['apples', 'box'], duraklar: ['pazar', 'is'] },
  { id: 'the', no: 7, ad: 'The', durum: 'yazili', konu: 'Belirli ve belirsiz isim.',
    birimler: ['the', 'take-the'], duraklar: ['pazar', 'is'] },
  { id: 'komutlar', no: 8, ad: 'Komutlar', durum: 'yazili', konu: 'Emir kipi ve nazik istek; Don\'t.',
    birimler: ['open', 'close', 'take-the', 'give-me', 'help-me', 'dont', 'sign-here', 'speak-slowly'],
    duraklar: ['varis', 'barinma', 'pazar', 'is', 'resmi', 'saglik'] },
  { id: 'can', no: 9, ad: 'Can', durum: 'yazili', konu: 'Yapabilmek ve rica; can\'t.',
    birimler: ['i-can', 'can-you', 'i-cant', 'can-i-have'], duraklar: ['is', 'saglik', 'kafe'] },
  { id: 'saat', no: 10, ad: 'Saat', durum: 'yazili',
    konu: 'Saat sormak; tam saat ve buçuk (çeyrek, geçe ve kala: kelime kartında).',
    birimler: ['clock', 'oclock', 'what-time', 'half-past'], duraklar: ['is', 'gun'] },
  { id: 'renk-sifat', no: 11, ad: 'Renkler ve sıfat', durum: 'yazili',
    konu: 'Renk ve boy; sıfat isimden önce gelir (öteki renkler: kelime kartında).',
    birimler: ['red', 'green', 'yellow', 'big', 'small', 'hot'], duraklar: ['pazar', 'kafe'] },
  { id: 'soru-kaliplari', no: 12, ad: 'Soru kalıpları', durum: 'yazili',
    konu: 'Where, how much, what; evet ve hayır ile cevap (who: kelime kartında).',
    birimler: ['where', 'how-much', 'what-is-your-name', 'my-name-is', 'yes', 'no'], duraklar: ['varis', 'pazar', 'resmi', 'kafe'] },
  { id: 'have-like', no: 13, ad: 'Have ve like', durum: 'yazili',
    konu: 'Sahip olmak, sevmek, istemek ve ihtiyaç: I have, I like, Do you like?, I want, I need.',
    birimler: ['i-have', 'i-like', 'do-you-like', 'i-want', 'i-need'], duraklar: ['saglik', 'insanlar', 'kafe'] },
  { id: 'there-is', no: 14, ad: 'There is ve there are', durum: 'yazilacak',
    konu: 'Bir şeyin var olduğunu ve yerini söylemek: in, on, next to, near.',
    birimler: ['there-is', 'there-are', 'in', 'on', 'next-to', 'near'], duraklar: ['sehir'] },
  { id: 'genis-zaman', no: 15, ad: 'Geniş zaman', durum: 'yazilacak',
    konu: 'Her gün yapılanlar: I work, she works, it hurts; Do you …?; I don\'t …, I don\'t understand.',
    birimler: ['genis-zaman', 'ucuncu-tekil-s', 'do-you', 'i-dont', 'i-dont-understand', 'it-hurts', 'every-day', 'work'],
    duraklar: ['varis', 'saglik', 'insanlar', 'gun'] },
];

const A1_KAZANIMLAR = [
  ['Selam verip vedalaşabilir; "lütfen", "teşekkür ederim" ve "özür dilerim" diyebilirim.',
    ['hello', 'goodbye', 'please', 'thank-you', 'sorry']],
  ['Kendimi tanıtabilir, adımı söyleyip harf harf heceleyebilirim.', ['my-name-is', 'what-is-your-name', 'name', 'alfabe', 'am-are']],
  ['Nereli olduğumu söyleyebilir, yeni tanıştığım birine "memnun oldum" diyebilirim.', ['i-am-from', 'nice-to-meet-you']],
  ['1\'den 20\'ye kadar sayıları ve 30, 40 … 90 gibi onlukları duyunca anlayabilir ve söyleyebilirim.',
    ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'sayilar-13-19', 'twenty', 'onluklar']],
  ['Pasaport kontrolünde istenen belgeyi anlayıp uzatabilirim.', ['passport', 'ticket', 'bag', 'this-is']],
  ['Bir şeyin nerede olduğunu sorabilir, "burada" diye gösterebilirim.', ['where', 'here', 'this', 'here-is']],
  ['Tek bir şeyi "a" ile, birden çok şeyi çoğul ekiyle söyleyebilirim.', ['a', 'apples']],
  ['Kaldığım odadaki eşyaları adlandırabilir, "aç" ve "kapat" isteklerini anlayabilirim.',
    ['room', 'door', 'window', 'bed', 'key', 'open', 'close']],
  ['"Benim", "senin", "onun" diyerek bir şeyin kime ait olduğunu söyleyebilirim.', ['my', 'your', 'his', 'her']],
  ['Pazarda bir şeyi rengiyle seçip "bunu ver", "al" diyerek alışveriş yapabilirim.',
    ['red', 'green', 'yellow', 'apple', 'the', 'take-the', 'give-me']],
  ['Kafede yiyecek ve içecek isteyebilir, boyunu söyleyebilir, fiyatını sorabilirim.',
    ['water', 'coffee', 'tea', 'bread', 'cup', 'eat', 'drink', 'hot', 'big', 'small', 'i-want', 'can-i-have', 'how-much']],
  ['Kısa sorulara "evet" ya da "hayır" diye cevap verebilirim.', ['yes', 'no']],
  ['İşte bir alet isteyebilir, yardım isteyebilir ve yardım teklif edebilirim.',
    ['hammer', 'drill', 'box', 'help', 'help-me', 'can-you']],
  ['Saati sorabilir, tam saati ve buçuğu söyleyebilirim.', ['clock', 'oclock', 'what-time', 'half-past']],
  ['Neyi yapabildiğimi ve neyi yapamadığımı söyleyebilirim.', ['i-can', 'i-cant']],
  ['Eczanede nerem ağrıdığını anlatıp ilaç isteyebilirim.',
    ['head', 'hand', 'leg', 'eye', 'sick', 'sleep', 'medicine', 'pharmacy', 'doctor', 'it-hurts', 'i-need']],
  ['"Bunu yapma" diyen basit uyarı ve yasakları anlayabilirim.', ['dont']],
  ['Resmî bir formda adımı ve numaramı verebilir, "buraya imza" talimatını izleyebilirim.', ['form', 'number', 'sign-here']],
  ['Bir kişiyi tanıtıp onun hakkında kısa bilgi verebilirim: kim olduğu, kardeşim ya da arkadaşım olduğu.',
    ['man', 'woman', 'friend', 'neighbour', 'he', 'she', 'sister', 'brother', 'i-have']],
  ['Neyi sevdiğimi söyleyebilir ve karşımdakine sorabilirim.', ['i-like', 'do-you-like']],
  ['Şehirde bir yerin olup olmadığını sorabilir, yerini "içinde", "yanında", "yakınında" diye anlatabilirim.',
    ['there-is', 'there-are', 'in', 'on', 'next-to', 'near', 'bank', 'shop', 'station', 'street']],
  ['Otobüsle, trenle ya da taksiyle bir yere gideceğimi söyleyebilirim.', ['bus', 'train', 'taxi', 'go']],
  ['Günlük düzenimi, hangi gün ve saatte çalıştığımı anlatabilir ve sorabilirim.',
    ['days-of-the-week', 'today', 'tomorrow', 'morning', 'evening', 'week', 'work', 'home', 'every-day', 'genis-zaman',
      'ucuncu-tekil-s', 'do-you', 'i-dont']],
  ['Anlamadığımda bunu söyleyebilir, karşımdakinden yavaş konuşmasını rica edebilirim.', ['i-dont-understand', 'speak-slowly']],
];

// ---- A2: Yerleşme ----
const A2_DURAKLAR = [
  { id: 'isyeri', no: 11, ad: 'İş yerinde', durum: 'yazilacak',
    konu: 'Yeni işte bir ay; toplantı, e-posta, iş arkadaşı; şimdiki zaman; sıklık; meşgul olmak, geç kalmak.',
    birimler: ['en:s:meeting', 'en:s:office', 'en:s:computer', 'en:s:email', 'en:s:write', 'en:s:colleague', 'en:s:manager',
      'en:y:simdiki-zaman', 'en:k:what-are-you-doing', 'en:s:always', 'en:s:usually', 'en:s:sometimes', 'en:s:never', 'en:s:busy',
      'en:s:late'] },
  { id: 'komsu', no: 12, ad: 'Komşu', durum: 'yazilacak',
    konu: 'Üst ve alt kat komşusu; gürültü; ödünç istemek; bırakılan paket; could you, could I; him, us, them.',
    birimler: ['en:s:upstairs', 'en:s:downstairs', 'en:s:noisy', 'en:s:quiet', 'en:s:borrow', 'en:s:pen', 'en:s:parcel',
      'en:k:could-you', 'en:k:could-i', 'en:k:excuse-me', 'en:k:of-course', 'en:s:him', 'en:s:us', 'en:s:them'] },
  { id: 'doktor', no: 13, ad: 'Doktor', durum: 'yazilacak',
    konu: 'Randevu; ateş, öksürük, ağrı; how long, ago; was ve were; you should; reçete.',
    birimler: ['en:s:appointment', 'en:s:fever', 'en:s:cough', 'en:s:pain', 'en:s:prescription', 'en:s:tired', 'en:s:better',
      'en:s:yesterday', 'en:s:ago', 'en:y:was-were', 'en:k:how-long', 'en:k:you-should', 'en:k:i-feel'] },
  { id: 'banka', no: 14, ad: 'Banka', durum: 'yazilacak',
    konu: 'Hesap açmak, kart ve nakit, ödemek; yüzler ve binler; ucuz ve pahalı, karşılaştırma; some, any.',
    birimler: ['en:s:account', 'en:s:card', 'en:s:cash', 'en:s:pay', 'en:s:hundred', 'en:s:thousand', 'en:k:i-would-like',
      'en:s:cheap', 'en:s:expensive', 'en:y:er-than', 'en:s:some', 'en:s:any', 'en:y:sayilamayan'] },
  { id: 'ev-sahibi', no: 15, ad: 'Ev sahibi', durum: 'yazilacak',
    konu: 'Kiralık daire, kira ve fatura; mutfak ve duş; arıza bildirmek; doesn\'t work; I have to.',
    birimler: ['en:s:flat', 'en:s:landlord', 'en:s:rent', 'en:s:bill', 'en:s:month', 'en:s:kitchen', 'en:s:shower', 'en:s:heating',
      'en:s:broken', 'en:s:fix', 'en:k:there-is-a-problem', 'en:k:doesnt-work', 'en:k:i-have-to'] },
  { id: 'telefon', no: 16, ad: 'Telefon', durum: 'yazilacak',
    konu: 'Telefonla aramak, birini istemek, beklemek, mesaj bırakmak; will; yanlış numara.',
    birimler: ['en:s:phone', 'en:s:call', 'en:s:message', 'en:s:later', 'en:s:again', 'en:s:wrong', 'en:s:who',
      'en:k:can-i-speak-to', 'en:k:hold-on', 'en:k:call-back', 'en:y:will'] },
  { id: 'yol-tarifi', no: 17, ad: 'Yol tarifi', durum: 'yazilacak',
    konu: 'Yol sormak ve tarif etmek; sağ, sol, düz, dön; köşe, trafik ışığı; between, opposite; sıra sayıları.',
    birimler: ['en:s:map', 'en:s:left', 'en:s:right', 'en:s:turn', 'en:s:corner', 'en:s:traffic-lights', 'en:s:far', 'en:s:between',
      'en:s:opposite', 'en:k:go-straight', 'en:k:go-past', 'en:k:how-do-i-get-to', 'en:y:sira-sayilari'] },
  { id: 'sikayet', no: 18, ad: 'Şikâyet', durum: 'yazilacak',
    konu: 'Sipariş ve fiş; beden, too, enough; kibarca şikâyet ve değişim; düzenli fiillerle geçmiş; I didn\'t.',
    birimler: ['en:s:order', 'en:s:receipt', 'en:s:size', 'en:s:too', 'en:s:enough', 'en:s:same', 'en:s:different', 'en:s:arrive',
      'en:s:last', 'en:k:sorry-but', 'en:k:can-i-change', 'en:y:gecmis-ed', 'en:k:i-didnt'] },
  { id: 'davet', no: 19, ad: 'Davet', durum: 'yazilacak',
    konu: 'Doğum günü ve akşam yemeği daveti; would you like to, let\'s; kabul ve kibar ret; going to ile plan.',
    birimler: ['en:s:party', 'en:s:dinner', 'en:s:birthday', 'en:s:weekend', 'en:s:tonight', 'en:s:next', 'en:s:invite', 'en:s:bring',
      'en:k:would-you-like-to', 'en:k:lets', 'en:k:id-love-to', 'en:k:another-time', 'en:y:going-to'] },
  { id: 'gecmis', no: 20, ad: 'Geçmişim', durum: 'yazilacak',
    konu: 'Hayatını anlatmak: doğduğun yer, geldiğin yıl, yaptıkların; düzensiz fiiller; Did you …?; then, after, before.',
    birimler: ['en:s:year', 'en:s:then', 'en:s:after', 'en:s:before', 'en:s:went', 'en:s:came', 'en:s:saw', 'en:s:had', 'en:s:bought',
      'en:y:gecmis-duzensiz', 'en:k:did-you', 'en:k:when-i-was', 'en:k:i-was-born'] },
];

const A2_BOLUMLER = [
  { id: 'simdiki-zaman', no: 16, ad: 'Şimdiki zaman', durum: 'yazilacak', konu: 'am, is, are + -ing; şu anda olan.',
    birimler: ['simdiki-zaman', 'what-are-you-doing'], duraklar: ['isyeri', 'telefon'] },
  { id: 'genis-mi-simdiki', no: 17, ad: 'Geniş zaman mı, şimdiki zaman mı?', durum: 'yazilacak',
    konu: 'Her gün yapılan ile şu an yapılanın farkı; -ing almayan fiiller (I feel); doesn\'t.',
    birimler: ['simdiki-zaman', 'genis-zaman', 'every-day', 'always', 'usually', 'i-feel', 'doesnt-work'],
    duraklar: ['isyeri', 'doktor', 'ev-sahibi'] },
  { id: 'siklik', no: 18, ad: 'Sıklık zarfları', durum: 'yazilacak', konu: 'always, usually, sometimes, never ve cümledeki yerleri.',
    birimler: ['always', 'usually', 'sometimes', 'never'], duraklar: ['isyeri'] },
  { id: 'rica-oneri', no: 19, ad: 'Rica ve öneri', durum: 'yazilacak',
    konu: 'Kibar rica, öneri, kabul ve ret: could, would like, let\'s; telefonda ve mağazada rica.',
    birimler: ['could-you', 'could-i', 'i-would-like', 'would-you-like-to', 'lets', 'excuse-me', 'of-course', 'can-i-speak-to',
      'hold-on', 'can-i-change', 'id-love-to', 'another-time'],
    duraklar: ['komsu', 'banka', 'telefon', 'sikayet', 'davet'] },
  { id: 'nesne-zamirleri', no: 20, ad: 'Nesne zamirleri', durum: 'yazilacak',
    konu: 'me, him, her, us, them (me: give me ve help me kalıplarında).',
    birimler: ['him', 'us', 'them', 'her', 'give-me', 'help-me'], duraklar: ['komsu', 'telefon'] },
  { id: 'was-were', no: 21, ad: 'Was ve were', durum: 'yazilacak',
    konu: 'Be fiilinin geçmişi; soru ve olumsuz; ne kadar önce; doğum yeri ve geçmişteki hâl.',
    birimler: ['was-were', 'yesterday', 'ago', 'how-long', 'when-i-was', 'i-was-born'], duraklar: ['doktor', 'gecmis'] },
  { id: 'gecmis-duzenli', no: 22, ad: 'Geçmiş zaman: düzenli fiiller', durum: 'yazilacak', konu: '-ed eki ve okunuşu.',
    birimler: ['gecmis-ed', 'arrive', 'last'], duraklar: ['sikayet'] },
  { id: 'gecmis-duzensiz', no: 23, ad: 'Geçmiş zaman: düzensiz fiiller', durum: 'yazilacak',
    konu: 'Sık düzensiz fiiller: went, came, saw, had, bought (ötekiler: kelime kartında).',
    birimler: ['gecmis-duzensiz', 'went', 'came', 'saw', 'had', 'bought'], duraklar: ['gecmis'] },
  { id: 'gecmis-soru', no: 24, ad: 'Geçmişte soru ve olumsuz', durum: 'yazilacak', konu: 'did, didn\'t.',
    birimler: ['did-you', 'i-didnt'], duraklar: ['sikayet', 'gecmis'] },
  { id: 'going-to', no: 25, ad: 'Going to ile plan', durum: 'yazilacak', konu: 'Kararlaştırılmış plan.',
    birimler: ['going-to', 'tonight', 'next', 'weekend'], duraklar: ['davet'] },
  { id: 'will', no: 26, ad: 'Will', durum: 'yazilacak', konu: 'Söz ve anlık karar.',
    birimler: ['will', 'call-back'], duraklar: ['telefon'] },
  { id: 'karsilastirma', no: 27, ad: 'Karşılaştırma, too ve enough', durum: 'yazilacak',
    konu: '-er ve than; too, enough; same, different; kibar şikâyet (more ve the most: kelime kartında).',
    birimler: ['er-than', 'cheap', 'expensive', 'too', 'enough', 'same', 'different', 'sorry-but'], duraklar: ['banka', 'sikayet'] },
  { id: 'miktar', no: 28, ad: 'Sayılabilen, sayılamayan; some ve any', durum: 'yazilacak',
    konu: 'Sayılabilen ve sayılamayan isim; some, any; there is a problem (much ve many: kelime kartında).',
    birimler: ['sayilamayan', 'some', 'any', 'there-is-a-problem'], duraklar: ['banka', 'ev-sahibi'] },
  { id: 'should-have-to', no: 29, ad: 'Should ve have to', durum: 'yazilacak', konu: 'Öğüt ve zorunluluk.',
    birimler: ['you-should', 'i-have-to'], duraklar: ['doktor', 'ev-sahibi'] },
  { id: 'yer-yon', no: 30, ad: 'Yön, yer ve sıra sayıları', durum: 'yazilacak',
    konu: 'Yol tarifinin dili: düz git, dön, geç; between, opposite; sıra sayıları.',
    birimler: ['sira-sayilari', 'between', 'opposite', 'go-straight', 'go-past', 'how-do-i-get-to', 'turn', 'left', 'right'],
    duraklar: ['yol-tarifi'] },
];

const A2_KAZANIMLAR = [
  ['İş yerinde şu an ne yaptığımı söyleyebilir, karşımdakine ne yaptığını sorabilirim.',
    ['simdiki-zaman', 'what-are-you-doing', 'meeting', 'office', 'computer', 'email', 'write', 'colleague', 'manager']],
  ['Bir şeyi ne sıklıkla yaptığımı söyleyebilirim.', ['always', 'usually', 'sometimes', 'never']],
  ['Meşgul olduğumu ya da geç kaldığımı kısa bir cümleyle açıklayabilirim.', ['busy', 'late']],
  ['Komşumdan kibarca bir şey rica edebilir, ödünç isteyebilirim.',
    ['could-you', 'could-i', 'borrow', 'pen', 'excuse-me', 'of-course']],
  ['Komşumla gürültü ya da bırakılan paket gibi küçük bir konuyu konuşabilirim.',
    ['upstairs', 'downstairs', 'noisy', 'quiet', 'parcel']],
  ['"Onu", "bizi", "onları" diyerek kişilerden söz edebilirim.', ['him', 'us', 'them']],
  ['Doktordan randevu alıp belirtilerimi ve ne zamandır sürdüğünü anlatabilirim.',
    ['appointment', 'fever', 'cough', 'pain', 'tired', 'how-long', 'ago', 'i-feel']],
  ['Dün nasıl ve nerede olduğumu anlatabilirim.', ['was-were', 'yesterday']],
  ['Doktorun öğüdünü ve reçetedeki talimatı anlayabilirim.', ['you-should', 'prescription', 'better']],
  ['Bankada hesap açmak, kartla ya da nakit ödemek için gereken cümleleri kurabilirim.',
    ['account', 'card', 'cash', 'pay', 'i-would-like']],
  ['Yüzlü ve binli tutarları anlayabilir, iki fiyatı karşılaştırabilirim.', ['hundred', 'thousand', 'cheap', 'expensive', 'er-than']],
  ['"Biraz" ve "hiç" anlamındaki miktar sözcüklerini doğru kullanabilirim.', ['some', 'any', 'sayilamayan']],
  ['Ev sahibine evdeki bir arızayı bildirebilir, ne zaman onarılacağını sorabilirim.',
    ['flat', 'landlord', 'kitchen', 'shower', 'heating', 'broken', 'fix', 'there-is-a-problem', 'doesnt-work']],
  ['Kira ve faturayla ilgili zorunlulukları anlayıp söyleyebilirim.', ['rent', 'bill', 'month', 'i-have-to']],
  ['Telefonda birini isteyebilir, mesaj bırakabilir, sonra arayacağımı söyleyebilirim.',
    ['phone', 'call', 'message', 'later', 'who', 'can-i-speak-to', 'hold-on', 'call-back', 'will']],
  ['Telefonda yanlış numarayı anlayabilir, söyleneni bir kez daha söylemesini rica edebilirim.', ['again', 'wrong']],
  ['Yol tarifi isteyebilir ve bana verilen tarifi izleyebilirim.',
    ['map', 'how-do-i-get-to', 'go-straight', 'turn', 'left', 'right', 'corner', 'traffic-lights', 'go-past', 'far']],
  ['Bir yerin konumunu "karşısında", "arasında", "ikinci sokakta" gibi sözlerle anlatabilirim.',
    ['between', 'opposite', 'sira-sayilari']],
  ['Bir ürünle ilgili kibarca şikâyet edip değişim isteyebilirim.',
    ['order', 'receipt', 'size', 'too', 'enough', 'same', 'different', 'sorry-but', 'can-i-change']],
  ['Geçmişte olan bir olayı düzenli fiillerle ve "yapmadım" diyerek anlatabilirim.', ['gecmis-ed', 'arrive', 'last', 'i-didnt']],
  ['Birini davet edebilir, bir daveti kabul edebilir ya da kibarca reddedebilirim.',
    ['party', 'dinner', 'birthday', 'invite', 'would-you-like-to', 'lets', 'id-love-to', 'another-time']],
  ['Hafta sonu ve akşam planlarımı anlatabilirim.', ['going-to', 'weekend', 'tonight', 'next', 'bring']],
  ['Hayatımın önemli olaylarını sırayla anlatabilirim: nerede doğduğumu, ne zaman geldiğimi, ne yaptığımı.',
    ['gecmis-duzensiz', 'went', 'came', 'saw', 'had', 'bought', 'year', 'then', 'after', 'before', 'did-you', 'when-i-was', 'i-was-born']],
];

// ---- Kurulum ----
const kisaAd = id => id.split(':')[2];

// Kısa adı, verilen kimliklerden tek birine çözer; yoksa ya da iki anlamlıysa hata.
const cozucu = kimlikler => ad => {
  const bulunan = kimlikler.filter(id => kisaAd(id) === ad);
  if (bulunan.length !== 1) throw new Error(`seviye: '${ad}' ${bulunan.length ? 'iki anlamlı' : 'envanterde yok'}`);
  return bulunan[0];
};

const dondur = o => {
  if (o && typeof o === 'object') { Object.values(o).forEach(dondur); Object.freeze(o); }
  return o;
};

const kur = (tanimlar) => {
  let onceki = [];
  return tanimlar.map(({ id, ad, duraklar, bolumler, kazanimlar, sinav = [] }) => {
    const envanter = duraklar.flatMap(d => d.birimler);
    const coz = cozucu([...onceki, ...envanter]);
    const bolumlerTam = bolumler.map(b => ({ ...b, birimler: b.birimler.map(coz), duraklar: [...b.duraklar] }));
    const duraklarTam = duraklar.map(d => ({
      ...d,
      birimler: [...d.birimler],
      ders: bolumlerTam.filter(b => b.duraklar.includes(d.id)).map(b => b.id),
    }));
    const kazanimlarTam = kazanimlar.map(([metin, birimler], i) => ({
      id: `${id.toLowerCase()}-k${String(i + 1).padStart(2, '0')}`,
      metin,
      birimler: birimler.map(cozucu(envanter)), // kazanım yalnız kendi seviyesinin birimlerine bağlanır
    }));
    onceki = [...onceki, ...envanter];
    return { id, ad, duraklar: duraklarTam, bolumler: bolumlerTam, kazanimlar: kazanimlarTam, envanter, kapi: { ...KAPI },
      sinav: sinav.map(x => ({ ...x, birimler: [...(x.birimler || [])] })) };
  });
};

export const SEVIYELER = dondur(kur([
  // sinav: A1 sonu sınavı Görev 15'te (A1_SINAV), A2 sonu sınavı Dalga 2'de yazılır; o zamana kadar boş.
  { id: 'A1', ad: 'İlk adımlar', duraklar: A1_DURAKLAR, bolumler: A1_BOLUMLER, kazanimlar: A1_KAZANIMLAR, sinav: [] },
  { id: 'A2', ad: 'Yerleşme', duraklar: A2_DURAKLAR, bolumler: A2_BOLUMLER, kazanimlar: A2_KAZANIMLAR, sinav: [] },
]));

// Kimliğe göre seviye ('A1' | 'A2'); bulunamazsa undefined.
export const seviyeBul = id => SEVIYELER.find(s => s.id === id);

// Birim → { seviye, durak } (ev durağı) ve birim → bölüm kimlikleri; modül yüklenirken bir kez kurulur.
const EV = new Map(SEVIYELER.flatMap(s => s.duraklar.flatMap(d => d.birimler.map(b => [b, { seviye: s.id, durak: d.id }]))));
const ACIKLAYAN = new Map();
for (const b of SEVIYELER.flatMap(s => s.bolumler)) {
  for (const u of b.birimler) ACIKLAYAN.set(u, [...(ACIKLAYAN.get(u) || []), b.id]);
}

// Birimin yeri: ev seviyesi ve durağı, onu açıklayan bölümler (bütün seviyeler, sırayla). Bilinmeyen birimde null.
// Her çağrı yeni nesne döndürür; çağıran onu değiştirse de veri bozulmaz.
export const birimYeri = birimId => {
  const ev = EV.get(birimId);
  return ev ? { seviye: ev.seviye, durak: ev.durak, bolumler: [...(ACIKLAYAN.get(birimId) || [])] } : null;
};
