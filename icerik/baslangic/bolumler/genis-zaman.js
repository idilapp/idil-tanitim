// Başlangıç Kitabı · Bölüm 15: Geniş zaman (taslak, 24 Kasım 2026; Dalga 1 Görev 14'ün son parçası). Kurallar: ../README.md.
// Bütün metin özgündür. Dersler: a I work ve every day (genis-zaman, every-day, work), b She works ve it hurts (ucuncu-tekil-s, it-hurts),
// c Do you ...? (do-you), d I don't ... (i-dont, i-dont-understand). Her derste 12 alıştırma; 16 soruluk bölüm testi (her dersten 4);
// biçim ../README.md §2a.
// Duy hedefleri (sayfalar 0 tabanlı; satır metni dosyadan doğrulandı, 24 Kasım 2026):
//   a gun 5 "I work." · b gun 6 "She works." · c gun 23 "Do you drink tea?" (Gündelik hayat durağı, Görev 11; eski geçici hedefler
//   insanlar 23, saglik 6, insanlar 24 ve üç ipucu bloğu kalktı) · d varis 35 "I don't understand." (kalıcı: dersin ikinci birimi
//   i-dont-understand Varış'ın satırıdır). Gün'de aynı kalıpların öteki sayfaları: I work 8, 9, 18; she works 27 "Does she work on
//   Sundays?", 28 "No. She doesn't work on Sundays."; I don't 24 "No. I don't drink tea.".
// Birimler: a en:y:genis-zaman, en:k:every-day, en:s:work · b en:y:ucuncu-tekil-s, en:k:it-hurts · c en:k:do-you ·
// d en:k:i-dont, en:k:i-dont-understand. it-hurts (komutlar/g) ve i-dont-understand (komutlar/e) orada da kalır.
// Bu altı birim (genis-zaman, every-day, work, ucuncu-tekil-s, do-you, i-dont) Gün durağının kaydıyla BIRIMLER'e girdi (24 Kasım 2026).
// Yeni sözcükler (derste Türkçesi verilir): work, every day, Sunday (Gün'ün sözcükleri); by bus, go to work (Gün işe gitmeyi öğretir;
// bus Şehir'de). Tur 1 (kontrolcü kararı): English çıktı.
// Tek doğru kuralları:
// - "I am working" gibi şimdiki zaman biçimleri dil bilgisi olarak doğru olabildiği için çeldirici yapılmaz; çeldiriciler "I am work",
//   "I working", "I works", "She work", "Do she", "Does she works", "I not", "I no" gibi kesin yanlışlardır.
// - Türkçe karşılıklar geniş zamanın -r biçimiyle yazılır (çalışırsın, içerim); -yor yalnız ağrıyor, anlamıyorum ve a2'deki "şimdi"
//   çeldiricisinde (tur 1). Kesmesiz "dont" kabul edilmez; d3, T10 ve T14 açıklaması doğru yazımı gösterir.
// - Tur 1: ders alıştırmalarında doğru cevabı aynı dersin örneğiyle birebir aynı olan öğe 10'dan 5'e indi (a12, b6, c10, d6, d8).
// - "Every day I drink tea." doğrudur; çeldirici olarak yalnız "I every day drink" ve "I drink every day tea" kullanılır.
// - "My head hurt." geçmiş zaman olarak doğru bir cümle olduğu için çeldirici yapılmaz; yerine "My head hurting." kullanılır.
// - yaz kabul listeleri: don't için "do not"; "ağrıyor" için hurts, is hurting, aches, is aching; "sever" için likes, loves;
//   "içersin" ve "yerim" için have de; "her gün" için each day de. "everyday" (bitişik, sıfat) kabul edilmez.
// - dogruMu "Yes, I need.": need nesnesiz kalamadığı için kesin yanlış (drink ve eat nesnesiz de cümle kurabildiği için seçilmedi).
// - Alışkanlık "on Sundays" (pazar günleri) ile söylenir (tur 1, kontrolcü kararı); bölümde tek bir pazar kastedilen cümle yok.
// - Does ve doesn't A1 çekirdeğidir (tur 1, kontrolcü kararı; Gün'ün hikâyesi "pazar günleri çalışıyor mu" diye soracak): c ve d
//   metninde, c'nin dikkat bloğunda, c ve d örneklerinde ve özette anlatılır; altı öğede hedef olarak sınanır: c6, c8, c11, d8, d12
//   ve testte T9. A2 "genis-mi-simdiki" bölümü doesn't'u yeniden işler.
// - A2'nin "It doesn't work." (bozuk) kalıbı, sıklık zarfları ve şimdiki zaman bu bölümde kullanılmaz.
export default {
  id: 'genis-zaman',
  no: 15,
  title: 'Geniş zaman',
  en: 'Present simple',
  seviye: 'A1',
  sure: 16,
  durum: 'taslak',
  hedefler: [
    '*I work*, *you work* ile her gün ya da düzenli yaptığın işleri söylemek: *I work every day.*',
    '*he*, *she* ve *it* ile fiile *-s* eklemek: *She works.* *It hurts.*',
    '*Do you ...?* ile sormak, *Yes, I do.* / *No, I don’t.* diye cevaplamak; *he* ve *she* için *Does she ...?* diye sormak ve *No, she doesn’t.* diye cevaplamak.',
    '*I don’t ...* ile yapmadığını söylemek: *I don’t work on Sundays.* *I don’t understand.* *He* ve *she* ile *doesn’t*: *She doesn’t work on Sundays.*',
  ],
  konular: [],

  yokla: [
    { ders: 'a', soru: 'Her gün çalıştığını söylüyorsun. Hangisi?', secenekler: ['I am work every day.', 'I work every day.', 'I working every day.'], dogru: 1,
      aciklama: 'Her gün yapılan iş fiilin yalın hâliyle söylenir: *I work every day.* *Work* fiil olduğu için önüne *am* gelmez; *working* tek başına cümle kurmaz.' },
    { ders: 'b', soru: '“Kız kardeşim bir eczanede çalışır.” hangisi? (sister: kız kardeş)', secenekler: ['My sister works in a pharmacy.', 'My sister work in a pharmacy.', 'My sister is work in a pharmacy.'], dogru: 0,
      aciklama: '*My sister* tek bir kişidir, yani *she* gibidir; fiil *-s* alır: *My sister works.* *Work* eksiz kalmaz; araya *is* de girmez.' },
    { ders: 'c', soru: 'Arkadaşına “Kahve içer misin?” diye soruyorsun. Hangisi?', secenekler: ['You drink coffee do?', 'Are you drink coffee?', 'Do you drink coffee?'], dogru: 2,
      aciklama: 'Geniş zamanda soru başa *Do* koyarak kurulur: *Do you drink coffee?* *Are you drink* yanlıştır; *do* sona gitmez.' },
    { ders: 'd', soru: '*I don’t drink tea.* ne demektir?', secenekler: ['Çay içmem.', 'Çay içerim.', 'Çay içme.'], dogru: 0,
      aciklama: '*I don’t* + fiil “yapmam” der: çay içmem. “Çay içme” bir komut olurdu; komutta başta *I* olmaz.' },
  ],

  dersler: [
    {
      id: 'a', baslik: 'I work ve every day', sure: 4, konular: [], birimler: ['en:y:genis-zaman', 'en:k:every-day', 'en:s:work'],
      bloklar: [
        { tur: 'metin', metin: 'Her gün ya da düzenli olarak yaptığın şeyleri söylemek için fiilin yalın hâlini kullanırsın: **I work.** (Çalışırım.) Fiil *work* (çalışmak) ek almaz; önüne yalnız kişi gelir: *I work*, *you work* (*we* biz, *they* onlar için de aynı). Bu zamana **geniş zaman** (*present simple*) denir. Ne kadar sık olduğunu **every day** (her gün) söyler ve çoğunlukla cümlenin sonuna gelir: *I drink tea every day.* (Her gün çay içerim.) Araya *am* girmez: *I am work* yanlıştır. Bildiğin fiiller de böyle kullanılır: *I eat bread*, *I go*, *I sleep*. *I like* ve *I need* derken de bu zamanı kullanıyordun.' },
        { tur: 'turkce', metin: 'Türkçe: “Her gün çalış**ırım**.” Fiil kişiye göre ek alır ve cümlenin sonuna gelir. İngilizce: I **work** every day. Fiil ek almaz, kişiden hemen sonra gelir; *every day* sona gider. Türkçede “-yor” şu an süren iş için de, düzenli iş için de kullanılır (“Her gün çay içiyorum”); İngilizcede düzenli iş geniş zamanla söylenir: *I drink tea every day.* Bu kitapta Türkçe karşılıkları “-r” ile yazıyoruz: *I work* “çalışırım”, *you work* “çalışırsın”.' },
        { tur: 'ornekler', liste: [
          { en: '==I work== every day.', tr: 'Her gün çalışırım.' },
          { en: 'I drink tea ==every day==.', tr: 'Her gün çay içerim.' },
          { en: '==You work== in a bank.', tr: 'Bir bankada çalışırsın.' },
          { en: '==I go== to work by bus.', tr: 'İşe otobüsle giderim.' },
        ] },
        { tur: 'dikkat', yanlis: 'I am work every day.', dogru: '==I work== every day.', not: '*Work* bir fiildir; önüne *am* gelmez. *I am* “ben …ım” der (*I am sick*); yapılan iş fiille söylenir: *I work*.' },
        { tur: 'hatirlat', bolum: 'have-like', ders: 'b', metin: '*I like apples.* cümlesini öğrendin. O da geniş zamandır: *like* ek almadan *I*’dan sonra gelir, tıpkı *work* gibi.' },
        { tur: 'dene', soru: 'Her gün kahve içerim. I ---- coffee every day.', secenekler: ['am drink', 'drink', 'drinking'], dogru: 1,
          aciklama: 'Her gün yapılan iş fiilin yalın hâliyle söylenir: *I drink coffee every day.* *Am drink* yanlıştır; *drinking* tek başına cümle kurmaz.' },
        { tur: 'duy', durak: 'gun', sayfa: 5 },
      ],
      alistirmalar: [
        { tur: 'sec', soru: 'Komşun ne iş yaptığını soruyor. “Bir dükkânda çalışırım.” diyorsun. (shop: dükkân)', secenekler: ['I am work in a shop.', 'I works in a shop.', 'I work in a shop.'], dogru: 2,
          aciklama: '*I* ile fiil yalın kalır: *I work in a shop.* *Am* fiilin önüne gelmez; *-s* yalnız *he*, *she* ve *it* ile gelir.' },
        { tur: 'sec', soru: '*I eat bread every day.* ne demektir?', secenekler: ['Şimdi ekmek yiyorum.', 'Her gün ekmek yerim.', 'Her gün ekmek ye.'], dogru: 1,
          aciklama: '*Every day* “her gün” der ve *I eat* geniş zamandır: her gün ekmek yerim. “Şimdi” için *now* duyardın; “ye” komut olurdu, komutta *I* olmaz.' },
        { tur: 'yaz', soru: 'You ---- tea every day. (içersin)', cevaplar: ['drink', 'have'],
          aciklama: '“İçmek” *drink*’tir; *you* ile ek almaz: *You drink tea every day.* (*You have tea every day.* da doğrudur.)' },
        { tur: 'yaz', soru: 'I drink water ----. (her gün)', cevaplar: ['every day', 'each day'],
          aciklama: '“Her gün” *every day*’dir ve sona gelir: *I drink water every day.* (*Each day* da doğrudur.) Dikkat: bitişik *everyday* bir sıfattır (*everyday life*: gündelik hayat); “her gün” anlamında iki ayrı sözcük yazılır: *every day*.' },
        { tur: 'cevir', tr: 'Her gün elma yerim.', secenekler: ['I eat apples every day.', 'I am eat apples every day.', 'I eat every day apples.'], dogru: 0,
          aciklama: 'Önce kişi, sonra yalın fiil, sonra şey, en sonda *every day*: *I eat apples every day.* *Am eat* yanlıştır; *every day* fiil ile şeyin arasına girmez.' },
        { tur: 'cevir', tr: 'Bir eczanede çalışırsın.', secenekler: ['You are work in a pharmacy.', 'You works in a pharmacy.', 'You work in a pharmacy.'], dogru: 2,
          aciklama: '*You* ile fiil yalın kalır: *You work in a pharmacy.* *Are work* yanlıştır; *works* yalnız *he*, *she* ve *it* ile gelir.' },
        { tur: 'duzelt', cumle: 'I am like coffee. (Kahve severim.)', secenekler: ['I likes coffee.', 'I like coffee.', 'Like I coffee.'], dogru: 1,
          aciklama: '*Like* fiildir; önüne *am* gelmez: *I like coffee.* *I* ile *-s* gelmez; *Like I* sırayı bozar.' },
        { tur: 'duzelt', cumle: 'I every day drink coffee. (Her gün kahve içerim.)', secenekler: ['I drink every day coffee.', 'I drink coffee every day.', 'Every day I drinks coffee.'], dogru: 1,
          aciklama: '*Every day* kişi ile fiilin arasına girmez; en doğal yeri cümlenin sonudur: *I drink coffee every day.* (Başa da gelebilir: *Every day I drink coffee.*) Fiil ile şeyin arasına girmez; *I drinks* de yanlıştır.' },
        { tur: 'sec', soru: 'Hangisi doğru?', secenekler: ['You works every day.', 'You are work every day.', 'You work every day.'], dogru: 2,
          aciklama: '*You* ile fiil yalın kalır: *You work every day.* *Works* yalnız *he*, *she* ve *it* ile gelir; *are work* yanlıştır.' },
        { tur: 'dinle', ses: 'I work in a pharmacy.', secenekler: ['Bir eczanede çalışırım.', 'O bir eczanede çalışır.', 'Bir bankada çalışırım.'], dogru: 0,
          aciklama: 'Duyduğun *I work in a pharmacy*: bir eczanede çalışırım. Başta *I* duyuldu, *she* değil; banka *bank* olurdu.' },
        { tur: 'dinle', ses: 'You drink water every day.', secenekler: ['Her gün su içerim.', 'Her gün çay içersin.', 'Her gün su içersin.'], dogru: 2,
          aciklama: 'Duyduğun *you drink water every day*: her gün su içersin. Başta *you* duyuldu; çay *tea* olurdu.' },
        { tur: 'dinle', ses: 'I go to work by bus.', secenekler: ['İşe otobüsle giderim.', 'İşe taksiyle giderim.', 'Eve otobüsle giderim.'], dogru: 0,
          aciklama: 'Duyduğun *I go to work by bus*: işe otobüsle giderim. Taksi *taxi* olurdu; *to work* “işe” demektir.' },
      ],
    },
    {
      id: 'b', baslik: 'She works ve it hurts', sure: 4, konular: [], birimler: ['en:y:ucuncu-tekil-s', 'en:k:it-hurts'],
      bloklar: [
        { tur: 'metin', metin: 'Kişi **he** (o, erkek), **she** (o, kadın) ya da **it** (o, şey) olunca geniş zamanda fiilin sonuna **-s** eklenir: *She works.* (O çalışır.) *He likes tea.* (O çay sever.) *It hurts.* (Ağrıyor.) Bir kişinin adı ya da *my sister* gibi tek bir kişi de aynı kuralı izler: *Anna works in a bank.* *My head* gibi tek bir şey de *it* gibidir: *My head hurts.* (Başım ağrıyor.) Ek yalnız bu kişilerde gelir; *I* ve *you* ile fiil yalın kalır. *Go* fiili *-es* alır: *she goes*. *Have* ise *has* olur: *She has a brother.* *It hurts*’ü kalıp olarak biliyordun; sondaki *-s* bu kuraldan gelir.' },
        { tur: 'turkce', metin: 'Türkçede kişi eki “ben” için gelir (çalışır**ım**), “o” için gelmez (çalışır). İngilizcede tersi olur: *I work* eksizdir, *she works* sonda *-s* taşır. Türkçe “o” kadın, erkek ve şey için aynıdır; İngilizce *she*, *he* ve *it* diye ayırır, ama üçünde de fiil *-s* alır.' },
        { tur: 'ornekler', liste: [
          { en: '==She works== in a bank.', tr: 'O bir bankada çalışır.' },
          { en: 'My brother ==likes== coffee.', tr: 'Erkek kardeşim kahve sever.' },
          { en: 'My head ==hurts==.', tr: 'Başım ağrıyor.' },
          { en: 'Anna ==goes== to work by bus.', tr: 'Anna işe otobüsle gider.' },
        ] },
        { tur: 'dikkat', yanlis: 'She work in a bank.', dogru: '==She works== in a bank.', not: '*He*, *she*, *it* ya da tek bir kişinin adından sonra fiil *-s* alır. Bu *-s* konuşmada kolay kaçar; yazarken unutma.' },
        { tur: 'hatirlat', bolum: 'komutlar', ders: 'g', metin: '*It hurts.* ve *I need medicine.* kalıplarını öğrendin. *It hurts*’te fiil *-s* taşır, *I need*’de taşımaz: fark kişiden gelir.' },
        { tur: 'dene', soru: 'Komşum her gün çalışır. My neighbour ---- every day.', secenekler: ['work', 'works', 'is work'], dogru: 1,
          aciklama: '*My neighbour* tek bir kişidir; fiil *-s* alır: *My neighbour works every day.* *Work* eksiz kalmaz; *is work* yanlıştır.' },
        { tur: 'duy', durak: 'gun', sayfa: 6 },
      ],
      alistirmalar: [
        { tur: 'sec', soru: 'Anna’yı anlatıyorsun: “Anna her gün çay içer.”', secenekler: ['Anna drink tea every day.', 'Anna is drink tea every day.', 'Anna drinks tea every day.'], dogru: 2,
          aciklama: 'Anna tek bir kişidir, yani *she* gibidir: *Anna drinks tea every day.* *Drink* eksiz kalmaz; *is drink* yanlıştır.' },
        { tur: 'sec', soru: 'Geniş zamanda hangi kişiyle fiil *-s* almaz?', secenekler: ['she', 'you', 'he'], dogru: 1,
          aciklama: '*-s* yalnız *he*, *she* ve *it* ile gelir. *You* ile fiil yalın kalır: *you work*, ama *she works*, *he works*.' },
        { tur: 'yaz', soru: 'He ---- tea. (sever)', cevaplar: ['likes', 'loves'],
          aciklama: '*He* ile fiil *-s* alır: *He likes tea.* (*Loves* de doğrudur.)' },
        { tur: 'yaz', soru: 'My leg ----. (ağrıyor)', cevaplar: ['hurts', 'is hurting', 'aches', 'is aching'],
          aciklama: '*My leg* tek bir şeydir, *it* gibidir: *My leg hurts.* Konuşmada *My leg is hurting.* ve *My leg aches.* da doğrudur.' },
        { tur: 'cevir', tr: 'Erkek kardeşim bir dükkânda çalışır.', secenekler: ['My brother work in a shop.', 'My brother is work in a shop.', 'My brother works in a shop.'], dogru: 2,
          aciklama: '*My brother* tek bir kişidir: *My brother works in a shop.* *Work* eksiz kalmaz; araya *is* girmez.' },
        { tur: 'cevir', tr: 'Başım ağrıyor.', secenekler: ['My head hurts.', 'My head hurting.', 'My head is hurts.'], dogru: 0,
          aciklama: '*My head* *it* gibidir; fiil *-s* alır: *My head hurts.* *Hurting* tek başına cümle kurmaz; *is hurts*’te fazladan *is* var.' },
        { tur: 'duzelt', cumle: 'She go to work by bus. (O işe otobüsle gider.)', secenekler: ['She gos to work by bus.', 'She goes to work by bus.', 'She is go to work by bus.'], dogru: 1,
          aciklama: '*She* ile fiil ek alır; *go* *-es* alır: *She goes to work by bus.* *Gos* diye yazılmaz; *is go* yanlıştır.' },
        { tur: 'duzelt', cumle: 'He have a sister. (Onun bir kız kardeşi var.)', secenekler: ['He haves a sister.', 'He is have a sister.', 'He has a sister.'], dogru: 2,
          aciklama: '*Have*, *he* ve *she* ile *has* olur: *He has a sister.* *Haves* diye bir biçim yoktur; *is have* yanlıştır.' },
        { tur: 'sec', soru: 'Hangisi doğru?', secenekler: ['I needs a doctor.', 'She needs a doctor.', 'She need a doctor.'], dogru: 1,
          aciklama: '*She* ile fiil *-s* alır: *She needs a doctor.* *I* ile *-s* gelmez (*I need*); *she need* eki unutmuş.' },
        { tur: 'dinle', ses: 'She works every day.', secenekler: ['Her gün çalışırım.', 'O her gün çalışır.', 'O her gün uyur.'], dogru: 1,
          aciklama: 'Duyduğun *she works every day*: o her gün çalışır. Başta *she* duyuldu; “uyur” için *sleeps* duyardın.' },
        { tur: 'dinle', ses: 'My eye hurts.', secenekler: ['Elim ağrıyor.', 'Başım ağrıyor.', 'Gözüm ağrıyor.'], dogru: 2,
          aciklama: 'Duyduğun *my eye hurts*: gözüm ağrıyor. El *hand*, baş *head* olurdu.' },
        { tur: 'dinle', ses: 'He likes coffee.', secenekler: ['O kahve sever.', 'Kahve severim.', 'O çay sever.'], dogru: 0,
          aciklama: 'Duyduğun *he likes coffee*: o kahve sever. Başta *he* duyuldu, *I* değil; çay *tea* olurdu.' },
      ],
    },
    {
      id: 'c', baslik: 'Do you ...?', sure: 4, konular: [], birimler: ['en:k:do-you'],
      bloklar: [
        { tur: 'metin', metin: 'Geniş zamanda soru sormak için başa **Do** koyarsın: **Do you** work every day? (Her gün çalışır mısın?) Sıra: *Do* + kişi + yalın fiil. *Do* soruyu kurar; Türkçedeki *mı* ekinin işini görür. Kısa cevap da *do* ile verilir: **Yes, I do.** (Evet.) ya da **No, I don’t.** (Hayır.) Kişi *he* ya da *she* olunca *Do* yerine **Does** gelir ve fiil yalın kalır, *-s* almaz: *Does she work on Sundays?* (Pazar günleri çalışır mı?) *Sunday* pazar günüdür; *on Sundays* “pazar günleri”, yani her pazar demektir. Cevap: *Yes, she does.* / *No, she doesn’t.* *Do you like ...?* sorusunu zaten biliyordun; bütün fiiller aynı yolla sorulur: *Do you eat apples?* (Elma yer misin?)' },
        { tur: 'turkce', metin: 'Türkçe: “Pazar günleri çalış**ır mısın**?” Soru eki *mı* fiilden sonra, cümlenin sonunda gelir. İngilizce: **Do you** work on Sundays? Soruyu cümlenin başındaki *Do* kurar; fiil yalın kalır. Türkçede “Evet, çalışırım.” diye fiil tekrarlanır; İngilizce kısa cevapta fiil tekrarlanmaz, *do* söylenir: *Yes, I do.*' },
        { tur: 'ornekler', liste: [
          { en: '==Do you== work every day?', tr: 'Her gün çalışır mısın?' },
          { en: '==Do you== eat apples?', tr: 'Elma yer misin?' },
          { en: 'Do you work on Sundays? No, ==I don’t==.', tr: 'Pazar günleri çalışır mısın? Hayır, çalışmam.' },
          { en: '==Does she== work in a bank?', tr: 'O bir bankada mı çalışır?' },
        ] },
        { tur: 'dikkat', yanlis: 'Do she work on Sundays?', dogru: '==Does she== work on Sundays?', not: '*He* ve *she* ile soru *Does* ile kurulur. *-s* artık *does*’tadır, bu yüzden fiil yalın kalır: *Does she works* denmez.' },
        { tur: 'hatirlat', bolum: 'have-like', ders: 'b', metin: '*Do you like apples? Yes, I do.* kalıbını öğrendin. Aynı soruyu şimdi her fiille kurabilirsin: *Do you drink tea?*' },
        { tur: 'dene', soru: 'Arkadaşına çay içip içmediğini soruyorsun. ---- you drink tea?', secenekler: ['Are', 'Do', 'Does'], dogru: 1,
          aciklama: '*You* ile geniş zaman sorusu *Do* ile başlar: *Do you drink tea?* *Are you drink* yanlıştır; *does* yalnız *he*, *she* ve *it* ile gelir.' },
        { tur: 'dogruMu', cumle: 'Do you need a doctor? Yes, I need.', dogru: false, duzeltme: 'Do you need a doctor? Yes, ==I do==.',
          aciklama: '*Yes, I need.* olmaz: kısa cevapta fiil tekrarlanmaz, yerine *do* gelir: *Yes, I do.* *Need*’den sonra da gereken şey söylenmeli; *need* tek başına yarım kalır. Tam cevap doğrudur: *Yes, I need a doctor.*' },
        { tur: 'duy', durak: 'gun', sayfa: 23 },
      ],
      alistirmalar: [
        { tur: 'sec', soru: 'Yeni komşuna bir dükkânda çalışıp çalışmadığını soruyorsun.', secenekler: ['You work in a shop do?', 'Are you work in a shop?', 'Do you work in a shop?'], dogru: 2,
          aciklama: 'Geniş zaman sorusu *Do* ile başlar: *Do you work in a shop?* *Are you work* yanlıştır; *do* sona gitmez.' },
        { tur: 'sec', soru: '*Do you work on Sundays?* ne sorar? (Sundays: pazar günleri)', secenekler: ['Pazar günleri çalışır mısın?', 'Pazar günleri çalış.', 'Pazar günleri çalışırım.'], dogru: 0,
          aciklama: 'Başta *Do you* var, yani soru: pazar günleri çalışır mısın? “Çalış” bir komut, “çalışırım” ise bir cevap olurdu.' },
        { tur: 'yaz', soru: '---- you drink water every day? (Her gün su içer misin?)', cevaplar: ['Do'],
          aciklama: '*You* ile geniş zaman sorusu *Do* ile başlar: *Do you drink water every day?*' },
        { tur: 'yaz', soru: 'Do you eat bread? — Yes, I ----. (olumlu kısa cevap)', cevaplar: ['do'],
          aciklama: 'Kısa cevapta fiil tekrarlanmaz; *do* söylenir: *Yes, I do.*' },
        { tur: 'cevir', tr: 'Her gün kahve içer misin?', secenekler: ['Do you drink coffee every day?', 'Are you drink coffee every day?', 'Drink you coffee every day?'], dogru: 0,
          aciklama: 'Önce *Do*, sonra kişi, sonra yalın fiil: *Do you drink coffee every day?* *Are you drink* yanlıştır; fiil kişinin önüne geçmez.' },
        { tur: 'cevir', tr: 'O (kadın) pazar günleri çalışır mı?', secenekler: ['Do she work on Sundays?', 'Does she works on Sundays?', 'Does she work on Sundays?'], dogru: 2,
          aciklama: '*She* ile soru *Does* ile kurulur ve fiil yalın kalır: *Does she work on Sundays?* *Do she* yanlıştır; *does* varken fiil *-s* almaz.' },
        { tur: 'duzelt', cumle: 'Are you work in a bank? (Bir bankada mı çalışırsın?)', secenekler: ['Do you works in a bank?', 'Does you work in a bank?', 'Do you work in a bank?'], dogru: 2,
          aciklama: 'Geniş zaman sorusu *Do* ile kurulur: *Do you work in a bank?* *Do*’dan sonra fiil yalın kalır; *does* *you* ile gelmez.' },
        { tur: 'duzelt', cumle: 'Does he likes tea? (O çay sever mi?)', secenekler: ['Does he like tea?', 'Do he like tea?', 'Does he liking tea?'], dogru: 0,
          aciklama: '*Does* varken fiil yalın kalır: *Does he like tea?* *Do he* yanlıştır; *liking* bu soruda kullanılmaz.' },
        { tur: 'sec', soru: 'Komşun “Do you work on Sundays?” diye soruyor. Pazar günleri çalışmıyorsun. Cevabın hangisi?', secenekler: ['Yes, I do.', 'No, I don’t.', 'No, I am not.'], dogru: 1,
          aciklama: '*Do* ile sorulan soruya *do* ile cevap verilir: *No, I don’t.* *Yes, I do* “çalışırım” der; *I am not* bu soruya uymaz.' },
        { tur: 'dinle', ses: 'Do you work every day?', secenekler: ['Her gün çalışırım.', 'Her gün çalışır mısın?', 'O her gün çalışır mı?'], dogru: 1,
          aciklama: 'Duyduğun *do you work every day*: her gün çalışır mısın? Başta *do you* var, yani soru; “o” için *does she* ya da *does he* duyardın.' },
        { tur: 'dinle', ses: 'Does she work in a pharmacy?', secenekler: ['Bir eczanede mi çalışırsın?', 'O bir eczanede çalışır.', 'O bir eczanede mi çalışır?'], dogru: 2,
          aciklama: 'Duyduğun *does she work in a pharmacy*: o bir eczanede mi çalışır? Başta *does she* var, yani “o” hakkında bir soru; *do you* duysaydın soru sana olurdu.' },
        { tur: 'dinle', ses: 'Do you drink tea? Yes, I do.', secenekler: ['Çay içer misin? Evet, içerim.', 'Çay içer misin? Hayır, içmem.', 'Kahve içer misin? Evet, içerim.'], dogru: 0,
          aciklama: 'Duyduğun *do you drink tea? Yes, I do*: çay içer misin? Evet, içerim. “Hayır” için *no, I don’t*, kahve için *coffee* duyardın.' },
      ],
    },
    {
      id: 'd', baslik: 'I don’t ...', sure: 4, konular: [], birimler: ['en:k:i-dont', 'en:k:i-dont-understand'],
      bloklar: [
        { tur: 'metin', metin: 'Geniş zamanda olumsuz için fiilden önce **don’t** koyarsın: **I don’t** work on Sundays. (Pazar günleri çalışmam.) *Don’t*, *do not*’un kısa hâlidir; konuşmada çoğunlukla kısa hâlini duyarsın. Fiil yalın kalır: *I don’t drink coffee.* (Kahve içmem.) *You don’t* da aynıdır. **I don’t understand.** (Anlamıyorum.) da bu kuraldan gelir: *I* + *don’t* + *understand*. Kişi *he* ya da *she* olunca *don’t* yerine **doesn’t** gelir ve fiil yine yalın kalır: *She doesn’t work on Sundays.* *Don’t* ile başlayan cümle ise genellikle bir rica ya da uyarıdır: *Don’t open the door.* (Kapıyı açma.) Fark, başta *I* olup olmamasındadır.' },
        { tur: 'turkce', metin: 'Türkçe: “Çalış**mam**.”, “Anla**mıyorum**.” Olumsuzluk fiilin içine, *-me* ekiyle girer. İngilizce: I **don’t** work. Olumsuzluk ayrı bir sözcüktür ve fiilden önce gelir. *I not work* denmez; *not* tek başına fiilin önüne gelmez, *don’t* gerekir.' },
        { tur: 'ornekler', liste: [
          { en: '==I don’t== work on Sundays.', tr: 'Pazar günleri çalışmam.' },
          { en: '==I don’t== drink coffee.', tr: 'Kahve içmem.' },
          { en: '==I don’t understand== the form.', tr: 'Formu anlamıyorum.' },
          { en: 'She ==doesn’t== work on Sundays.', tr: 'O pazar günleri çalışmaz.' },
        ] },
        { tur: 'dikkat', yanlis: 'I not work on Sundays.', dogru: '==I don’t== work on Sundays.', not: 'Olumsuz için *don’t* gerekir: *I don’t work.* *Not* tek başına fiilin önüne gelmez.' },
        { tur: 'hatirlat', bolum: 'komutlar', ders: 'e', metin: '*I don’t understand.* kalıbını öğrendin. Şimdi kuralını biliyorsun: *I* + *don’t* + yalın fiil. Aynı yolla *I don’t eat bread.* dersin.' },
        { tur: 'dene', soru: 'Kahve içmiyorsun. I ---- drink coffee.', secenekler: ['not', 'don’t', 'am not'], dogru: 1,
          aciklama: 'Geniş zamanda olumsuz *don’t* ile kurulur: *I don’t drink coffee.* *Not* tek başına fiilin önüne gelmez; *am not drink* yanlıştır.' },
        { tur: 'duy', durak: 'varis', sayfa: 35 },
      ],
      alistirmalar: [
        { tur: 'sec', soru: 'Komşun bir bankada çalıştığını sanıyor. “Bankada çalışmam.” diyorsun.', secenekler: ['I not work in a bank.', 'I am not work in a bank.', 'I don’t work in a bank.'], dogru: 2,
          aciklama: 'Olumsuz *don’t* + yalın fiil: *I don’t work in a bank.* *I not work* ve *I am not work* yanlıştır.' },
        { tur: 'sec', soru: 'Arkadaşın “Do you eat bread?” diye soruyor; ekmek yemiyorsun. Hangisi?', secenekler: ['No, I don’t eat bread.', 'No, I not eat bread.', 'No, I am not eat bread.'], dogru: 0,
          aciklama: 'Olumsuz *don’t* ile kurulur: *No, I don’t eat bread.* *Not* tek başına fiilin önüne gelmez; *am not eat* yanlıştır.' },
        { tur: 'yaz', soru: 'I ---- drink tea. (içmem)', cevaplar: ['don’t', 'do not'],
          aciklama: '“İçmem”: *I don’t drink tea.* Yazımı *don’t*’tır, *n* ile *t* arasında kesme işareti vardır; kesmesiz *dont* yanlıştır. Uzun hâli *do not* da kabul edilir.' },
        { tur: 'yaz', soru: 'I don’t ---- the doctor. (anlamıyorum)', cevaplar: ['understand'],
          aciklama: '“Anlamak” *understand*’dir; *don’t*’tan sonra yalın kalır: *I don’t understand the doctor.*' },
        { tur: 'cevir', tr: 'Su içmem.', secenekler: ['Don’t drink water.', 'I don’t drink water.', 'I drink not water.'], dogru: 1,
          aciklama: '“İçmem” senin durumundur: *I don’t drink water.* *Don’t drink water* “su içme” diyen bir uyarıdır; *drink not* yanlıştır.' },
        { tur: 'cevir', tr: 'Formu anlamıyorum.', secenekler: ['I not understand the form.', 'I am not understand the form.', 'I don’t understand the form.'], dogru: 2,
          aciklama: 'Kalıp *I don’t understand*: *I don’t understand the form.* *I not* ve *I am not understand* yanlıştır.' },
        { tur: 'duzelt', cumle: 'I no like coffee. (Kahve sevmem.)', secenekler: ['I don’t like coffee.', 'I don’t likes coffee.', 'I not like coffee.'], dogru: 0,
          aciklama: 'Olumsuz *don’t* ile kurulur ve fiil yalın kalır: *I don’t like coffee.* *No* fiilin önüne gelmez; *likes* yanlıştır.' },
        { tur: 'duzelt', cumle: 'She don’t work on Sundays. (O pazar günleri çalışmaz.)', secenekler: ['She doesn’t works on Sundays.', 'She not work on Sundays.', 'She doesn’t work on Sundays.'], dogru: 2,
          aciklama: '*She* ile olumsuz *doesn’t* ile kurulur: *She doesn’t work on Sundays.* *Doesn’t*’tan sonra fiil yalın kalır, *-s* almaz; *-s* zaten *doesn’t*’tadır. Bu yüzden *doesn’t works* yanlıştır.' },
        { tur: 'sec', soru: 'Hangisi komut değil, senin durumunu söyler?', secenekler: ['Don’t open the door.', 'Don’t take two.', 'I don’t eat apples.'], dogru: 2,
          aciklama: '*I don’t eat apples* başta *I* taşır ve senin durumunu söyler: elma yemem. Öteki ikisi *Don’t* ile başlar; “açma”, “iki tane alma” diyen uyarılardır.' },
        { tur: 'dinle', ses: 'I don’t like tea.', secenekler: ['Çay severim.', 'Çay sevmem.', 'Çay sever misin?'], dogru: 1,
          aciklama: 'Duyduğun *I don’t like tea*: çay sevmem. *Don’t* duyuldu, yani olumsuz; soru olsaydı başta *do you* duyardın.' },
        { tur: 'dinle', ses: 'Sorry, I don’t understand the form.', secenekler: ['Özür dilerim, formu anlamıyorum.', 'Özür dilerim, formu imzalamam.', 'Formu anlıyorum, teşekkür ederim.'], dogru: 0,
          aciklama: 'Duyduğun *sorry, I don’t understand the form*: özür dilerim, formu anlamıyorum. İmzalamak *sign*, teşekkür *thank you* olurdu.' },
        { tur: 'dinle', ses: 'She doesn’t drink coffee.', secenekler: ['O kahve içer.', 'O kahve içmez.', 'Kahve içmem.'], dogru: 1,
          aciklama: 'Duyduğun *she doesn’t drink coffee*: o kahve içmez. *Doesn’t* olumsuzdur; başta *she* duyuldu, *I* değil.' },
      ],
    },
  ],

  // Bölüm sonu testi: 16 soru; a 4, b 4, c 4, d 4. Ders alıştırmalarının kopyası değil, aynı kuralın yeni öğeleri.
  test: [
    { ders: 'a', tur: 'sec', soru: 'Hangisi “Her gün işe giderim.” demektir? (work: iş)', secenekler: ['I go to work every day.', 'I am go to work every day.', 'I goes to work every day.'], dogru: 0,
      aciklama: '*I* ile fiil yalın kalır: *I go to work every day.* *Am go* yanlıştır; *goes* yalnız *he*, *she* ve *it* ile gelir.' },
    { ders: 'a', tur: 'yaz', soru: 'I ---- tea every day. (içerim)', cevaplar: ['drink', 'have'],
      aciklama: '“İçmek” *drink*’tir; *I* ile ek almaz: *I drink tea every day.* (*I have tea every day.* da doğrudur.)' },
    { ders: 'a', tur: 'duzelt', cumle: 'I am eat bread every day. (Her gün ekmek yerim.)', secenekler: ['I eats bread every day.', 'I every day eat bread.', 'I eat bread every day.'], dogru: 2,
      aciklama: '*Eat* fiildir; önüne *am* gelmez: *I eat bread every day.* *I* ile *-s* gelmez; *every day* kişi ile fiilin arasına girmez.' },
    { ders: 'a', tur: 'dinle', ses: 'You work in a shop.', secenekler: ['Bir dükkânda çalışırım.', 'Bir dükkânda çalışırsın.', 'Bir bankada çalışırsın.'], dogru: 1,
      aciklama: 'Duyduğun *you work in a shop*: bir dükkânda çalışırsın. Başta *you* duyuldu, *I* değil; banka *bank* olurdu.' },
    { ders: 'b', tur: 'sec', soru: 'Komşunu anlatıyorsun: “O her gün işe otobüsle gider.”', secenekler: ['He go to work by bus every day.', 'He goes to work by bus every day.', 'He is go to work by bus every day.'], dogru: 1,
      aciklama: '*He* ile fiil ek alır; *go* *-es* alır: *He goes to work by bus every day.* *Go* eksiz kalmaz; *is go* yanlıştır.' },
    { ders: 'b', tur: 'yaz', soru: 'Anna ---- in a bank. (çalışır)', cevaplar: ['works'],
      aciklama: 'Anna tek bir kişidir, *she* gibidir: *Anna works in a bank.*' },
    { ders: 'b', tur: 'cevir', tr: 'Elim ağrıyor.', secenekler: ['My hand hurting.', 'My hand is hurts.', 'My hand hurts.'], dogru: 2,
      aciklama: '*My hand* *it* gibidir; fiil *-s* alır: *My hand hurts.* *Hurting* tek başına cümle kurmaz; *is hurts*’te fazladan *is* var.' },
    { ders: 'b', tur: 'dinle', ses: 'My sister likes tea.', secenekler: ['Kız kardeşim çay sever.', 'Kız kardeşim kahve sever.', 'Çay severim.'], dogru: 0,
      aciklama: 'Duyduğun *my sister likes tea*: kız kardeşim çay sever. Kahve *coffee* olurdu; başta *I* değil *my sister* duyuldu.' },
    { ders: 'c', tur: 'sec', soru: '“Does he work on Sundays?” sorusuna olumsuz kısa cevap hangisi?', secenekler: ['No, he don’t.', 'No, he doesn’t.', 'No, he isn’t.'], dogru: 1,
      aciklama: '*Does* ile sorulan soruya *does* ile cevap verilir: *No, he doesn’t.* *He don’t* yanlıştır; *he isn’t* bu soruya uymaz.' },
    { ders: 'c', tur: 'yaz', soru: 'Do you drink tea? — No, I ----. (olumsuz kısa cevap)', cevaplar: ['don’t', 'do not'],
      aciklama: '*Do* ile sorulan soruya *do* ile cevap verilir: *No, I don’t.* Yazımı kesme işaretlidir (*don’t*); kesmesiz *dont* yanlıştır. Uzun hâli *do not*.' },
    { ders: 'c', tur: 'cevir', tr: 'İşe otobüsle mi gidersin?', secenekler: ['Do you go to work by bus?', 'Are you go to work by bus?', 'You go to work by bus do?'], dogru: 0,
      aciklama: 'Geniş zaman sorusu *Do* ile başlar: *Do you go to work by bus?* *Are you go* yanlıştır; *do* sona gitmez.' },
    { ders: 'c', tur: 'dinle', ses: 'Do you eat bread every day?', secenekler: ['Her gün ekmek yer misin?', 'Her gün ekmek yerim.', 'O her gün ekmek yer mi?'], dogru: 0,
      aciklama: 'Duyduğun *do you eat bread every day*: her gün ekmek yer misin? Başta *do you* var, yani soru sana; “o” için *does she* ya da *does he* duyardın.' },
    { ders: 'd', tur: 'sec', soru: 'Satıcı çok hızlı konuşuyor ve onu anlamıyorsun. Hangisi?', secenekler: ['Sorry, I not understand.', 'Sorry, I don’t understand.', 'Sorry, don’t understand me.'], dogru: 1,
      aciklama: '“Anlamıyorum”: *Sorry, I don’t understand.* *I not understand*’da *don’t* eksik; *Don’t understand me* “beni anlama” diyen bir komuttur.' },
    { ders: 'd', tur: 'yaz', soru: 'I ---- go to work on Sundays. (gitmem)', cevaplar: ['don’t', 'do not'],
      aciklama: '“Gitmem”: *I don’t go to work on Sundays.* Yazımı kesme işaretlidir (*don’t*); kesmesiz *dont* yanlıştır. Uzun hâli *do not* da kabul edilir.' },
    { ders: 'd', tur: 'duzelt', cumle: 'I not eat bread. (Ekmek yemem.)', secenekler: ['I don’t eat bread.', 'I doesn’t eat bread.', 'I don’t eats bread.'], dogru: 0,
      aciklama: 'Olumsuz *don’t* + yalın fiil: *I don’t eat bread.* *Doesn’t* yalnız *he* ve *she* ile gelir; *don’t*’tan sonra fiil *-s* almaz.' },
    { ders: 'd', tur: 'dinle', ses: 'I don’t understand the man.', secenekler: ['Adamı anlamıyorum.', 'Adamı anlıyorum.', 'Adam anlamıyor.'], dogru: 0,
      aciklama: 'Duyduğun *I don’t understand the man*: adamı anlamıyorum. *Don’t* olumsuzdur; başta *I* duyuldu, yani anlamayan sensin.' },
  ],

  ozet: {
    maddeler: [
      '**Geniş zaman** her gün ya da düzenli yapılanı söyler: *I work every day.* Fiil yalın kalır; *every day* sona gelir.',
      '**he, she, it** ile fiil *-s* alır: *She works.* *It hurts.* (*go → goes*, *have → has*)',
      'Soru *Do* ile başlar: *Do you work on Sundays?* Kısa cevap *Yes, I do.* / *No, I don’t.* *He* ve *she* ile *Does*: *Does she work?*',
      'Olumsuz: *don’t* + yalın fiil: *I don’t work on Sundays.* *I don’t understand.* *He* ve *she* ile *doesn’t*.',
      '*I am work*, *she work*, *I not work* ve *Do she work?* yanlıştır.',
    ],
    tablo: { sutunlar: ['Ne demek istiyorsun?', 'Kalıp'], satirlar: [
      ['her gün yaparım', '*I work every day.*'],
      ['o yapar', '*She works in a bank.*'],
      ['ağrıyor', '*It hurts.*'],
      ['yapar mısın?', '*Do you work on Sundays?*'],
      ['evet / hayır', '*Yes, I do.* / *No, I don’t.*'],
      ['yapmam', '*I don’t work on Sundays.*'],
      ['anlamıyorum', '*I don’t understand.*'],
    ] },
  },
};
