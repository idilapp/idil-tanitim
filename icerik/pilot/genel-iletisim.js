// iDil › Genel › Ekranlar ve iletişim (tür dengesi ünitesi: yakın anlam 15, diyalog 15, paragraf tamamlama 10, akışı bozan 10).
// Tümü özgün: Claude yazdı (22 Kasım 2026; Görev 11, Adım 2). ÖSYM sorusu, yayınevi, ders kitabı (Murphy, Azar), uygulama ya da
// gazete metni kopyalanmadı, uyarlanmadı; ÖSYM kitapçıkları yazarken açılmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Öğe kimliği öneki 'gil-' ('gi-' genel-isi-adalari, 'gw-' genel-is-hayati ünitesinde kullanılıyor).
// Alt konular: e-posta ve mesajlaşma alışkanlıkları, akıllı telefon kullanımı, çevrim içi alışveriş, dijital gizlilik ve
// güvenlik, yüz yüze ve ekran üzerinden iletişim. Dikkat ve bildirim araştırmaları (genel-dikkat) ile radyo, telgraf, yankı
// odası ve yanlış haberin yayılması (set-sosyal-5) tekrarlanmadı.
// Olgular (yerleşik bilgi; yalnız olgular, metin özgün; her olgu yalnız gösterildiği öğede):
// - gil-p1: Ray Tomlinson 1971'de ARPANET'te iki ayrı bilgisayar arasında ilk e-posta sayılan iletiyi gönderdi ("widely regarded");
//   kullanıcı adıyla bilgisayar adını ayırmak için '@' işaretini seçti; İtalyancada işaretin adı "chiocciola" (salyangoz).
//   Çeldiricilerde: iki bilgisayarın aynı odada yan yana durması ve ilk iletinin içeriğini sonradan hatırlamadığını söylemesi;
//   ileti sonunu bir işaretle belirlemesi (yanlış olsun diye yazıldı).
// - gil-p2: İlk SMS Aralık 1992'de Britanya'da bir bilgisayardan bir cep telefonuna "Merry Christmas" diye gönderildi; sistemin
//   başlangıçta daha çok şebekenin kısa hizmet bildirimleri için düşünülmesi ("mainly", temkinli). Sayı verilmedi.
// - gil-p4: Shigetaka Kurita 1999'da NTT Docomo için ilk emoji takımını tasarladı (176 resim; metinde "fewer than two hundred");
//   rakip şirketlerin kısa sürede benzer takımlar çıkarması; New York Modern Sanat Müzesi'nin (MoMA) özgün takımı koleksiyonuna
//   alması (2016; metinde yıl yok, "Years later").
// - gil-p5 (çeldirici): bir İngiliz sözlüğü (Oxford Dictionaries) 2013'te "selfie"yi yılın sözcüğü seçti. "Phubbing" sözcüğünün
//   'phone' ve 'snubbing'den türemesi; sözlüklere girmeye başlaması (temkinli, "has started to appear").
// - gil-p6: HTTP çerezi 1994'te Netscape'te Lou Montulli tarafından geliştirildi; ilk amacı alışveriş sepetini hatırlamaktı;
//   sonradan reklamcıların siteden siteye izlemesinde kullanıldı; birçok sitenin artık izin istemek zorunda olması (AB kuralları;
//   metinde "many websites", yasa adı yok). Çeldiricilerde: adın programcılıktaki "magic cookie" teriminden geldiği ("is thought
//   to", temkinli) ve Netscape'in 1990'ların ortasında en yaygın tarayıcılardan biri olması.
// - gil-p7: Albert Mehrabian'ın 1960'lardaki deneyleri; "iletişimin yalnız %7'si sözcüklerle" iddiasının kaynağı; deneylerde tek
//   tek söylenen sözcükler kullanıldı ve yalnız beğeni ya da duygu yargısı ölçüldü; Mehrabian'ın sonuçlarının gündelik konuşmaya
//   genellenemeyeceğini kendisinin söylemesi.
// - gil-p9: Jeremy Bailenson (Stanford), 2021: görüntülü toplantı yorgunluğu için önerdiği olası nedenler (yakın ve büyük yüzler,
//   kendi görüntüsüne uzun süre bakmak, hareketsizlik); önerileri arasında pencereyi küçültmek ve yalnız sesli molalar
//   (temkinli, "proposed", "possible reasons").
// - gil-b1 (genel): aykırı cümlede birçok e-posta hizmetinin istenmeyen reklam iletilerini ayrı klasöre taşıyan süzgeç
//   kullanması ("Many").
// - gil-b3 (genel): güvenlik rehberlerinin karmaşık ve sık değişen parolalar yerine uzun, akılda kalan ifadeleri önermeye başlaması
//   ("tends to favour"); unutulan parolanın yardım masasına başvurunun sık nedenlerinden sayılması ("are thought to be among").
// - gil-b5 (genel): birçok uygulamada okundu bilgisi kapatılınca başkalarınınkinin de görülmemesi ("several popular apps").
// - Düzeltme turu 1 (kör çözüm, 22 Kasım): b1, b2, b4, b5, b8, b9'da aykırı cümle aynı konuda kalıp özneyi ya da bakış açısını
//   değiştiriyor; b8'deki pul olgusu çıkarıldı.
// Öteki öğelerde (diyalog, yakın anlam, kalan paragraf ve bozan dizileri) olgu yok; kişiler ve olaylar kurgusal, genellemeler
// temkinli ("many", "some", "tend to", "often").

const T = 'taslak';
const C = 'genel';
const U = 'Ekranlar ve iletişim';

const cards = [
  // ---------- isim ----------
  { code: 'inbox', title: '(e-postada) gelen kutusu', pos: 'isim', cefr: 'B2', ipa: '/ˈɪnbɒks/',
    text: "E-posta ya da mesaj uygulamasında gelen iletilerin toplandığı bölüm: a full inbox, check your inbox. Gönderilenler 'sent items' ya da 'outbox' bölümündedir. Eski bürolarda masadaki gelen evrak sepeti için de kullanılırdı (İngiliz İngilizcesinde 'in-tray').",
    example: 'I came back from a week off to find more than three hundred unread emails in my inbox.',
    exampleTr: 'Bir haftalık izinden döndüğümde gelen kutumda okunmamış üç yüzden fazla e-posta buldum.',
    synonyms: ['mailbox'], family: [] },
  { code: 'attachment', title: '(e-postada) ek, ekli dosya', pos: 'isim', cefr: 'B2', ipa: '/əˈtætʃmənt/',
    text: "Bir e-postaya eklenip onunla birlikte gönderilen dosya: open an attachment, send something as an attachment. Fiili 'attach' (eklemek; iliştirmek). Başka bir anlamı 'birine ya da bir şeye duyulan bağlılık'tır (a strong attachment to her hometown). Bu ünitede ekli dosya anlamında geçer.",
    example: "Don't open an attachment from someone you don't know, even if the message sounds urgent.",
    exampleTr: 'Tanımadığın birinden gelen eki, ileti acil görünse bile açma.',
    synonyms: ['enclosure', 'attached file'], family: ['attach', 'attached'] },
  // ---------- sıfat ----------
  { code: 'impersonal', title: 'kişisel olmayan, soğuk, mesafeli; kimseye özel olmayan', pos: 'sıfat', cefr: 'C1', ipa: '/ɪmˈpɜːsənl/',
    text: "Sıcaklık ve kişisel ilgi taşımayan, herkese aynı biçimde yöneltilmiş: an impersonal letter, a large impersonal office. Karşıtı 'personal'. 'Im-' öneki anlamı tersine çevirir (possible → impossible gibi). Dil bilgisinde 'kişisiz yapı' (impersonal structure: it is said that …) için de kullanılır. Zarfı 'impersonally'.",
    example: "The letter from the council was polite but impersonal, addressed simply 'Dear Resident'.",
    exampleTr: "Belediyeden gelen mektup kibar ama mesafeliydi; yalnızca 'Sayın Sakin' diye başlıyordu.",
    synonyms: ['cold', 'detached'], family: ['impersonally'] },
  { code: 'seamless', title: 'kesintisiz, pürüzsüz, sorunsuz (geçiş)', pos: 'sıfat', cefr: 'C1', ipa: '/ˈsiːmləs/',
    text: "Aksamadan, ara ya da engel hissettirmeden işleyen: a seamless transition, seamless service. Asıl anlamı 'dikişsiz'dir (seam: dikiş yeri); mecaz anlamı teknoloji ve hizmet metinlerinde çok sık geçer. Zarfı 'seamlessly'.",
    example: 'The new version makes the move from phone to laptop almost seamless: you simply carry on where you left off.',
    exampleTr: 'Yeni sürüm telefondan dizüstü bilgisayara geçişi neredeyse kesintisiz hâle getiriyor: kaldığın yerden devam ediyorsun.',
    synonyms: ['smooth', 'uninterrupted'], family: ['seamlessly'] },
  // ---------- fiil ----------
  { code: 'encrypt', title: '(veriyi, iletiyi) şifrelemek', pos: 'fiil', cefr: 'C1', ipa: '/ɪnˈkrɪpt/',
    text: "Bir iletiyi ya da veriyi, anahtarı olmayan birinin okuyamayacağı biçime çevirmek: encrypt a file, encrypted messages. Nesne ister. Karşıtı 'decrypt' (şifreyi çözmek). Adı 'encryption': end-to-end encryption (uçtan uca şifreleme). Parolayla korumak ('password-protect') ile aynı şey değildir.",
    example: 'The app encrypts your messages, so anyone who intercepts them sees only meaningless characters.',
    exampleTr: 'Uygulama iletilerini şifreler; böylece onları yolda ele geçiren biri yalnızca anlamsız karakterler görür.',
    synonyms: ['encode', 'scramble'], family: ['encryption', 'encrypted'] },
  { code: 'browse', title: '(alışveriş niyeti olmadan) bakınmak, göz gezdirmek; internette gezinmek', pos: 'fiil', cefr: 'B2', ipa: '/braʊz/',
    text: "Belli bir şey aramadan bir dükkânda, kitapta ya da internet sitesinde rahatça dolaşıp bakmak: browse the shelves, browse a website. Dükkânda 'Can I help you?' sorusuna 'I'm just browsing, thanks' (Yalnızca bakıyorum) diye cevap verilir. İnternette sayfaları gezmeye yarayan program 'browser' (tarayıcı).",
    example: 'She spent the evening browsing a furniture website, adding things to her basket and then taking them out again.',
    exampleTr: 'Akşamı bir mobilya sitesinde gezinerek geçirdi; bir şeyleri sepete ekleyip sonra yeniden çıkardı.',
    synonyms: ['look around', 'skim'], family: ['browser'] },
  { code: 'misread', title: 'yanlış okumak; yanlış anlamak, yanlış yorumlamak', pos: 'fiil', cefr: 'B2', ipa: '/ˌmɪsˈriːd/',
    text: "Bir yazıyı yanlış okumak ya da birinin sözünü, davranışını, niyetini yanlış yorumlamak: misread a map, misread someone's intentions. Düzensiz fiildir: misread, misread, misread; geçmiş biçimleri /ˌmɪsˈred/ okunur. 'Mis-' öneki 'yanlış' anlamı katar (misunderstand, mislead gibi). Adı 'misreading'.",
    example: 'Without seeing his face, she misread his joke as criticism and replied rather coldly.',
    exampleTr: 'Yüzünü görmediği için onun şakasını eleştiri sandı ve oldukça soğuk bir cevap verdi.',
    synonyms: ['misinterpret', 'misjudge'], family: ['misreading'] },
  // ---------- öbek fiil ----------
  { code: 'opt out', title: '(bir uygulamanın, planın) dışında kalmayı seçmek, çıkmak', pos: 'öbek fiil', cefr: 'C1', ipa: '/ˌɒpt ˈaʊt/',
    text: "Bir düzene, listeye ya da uygulamaya katılmamayı ya da ondan çıkmayı seçmek: opt out of something. Karşıtı 'opt in' (katılmayı seçmek). Adı 'opt-out' (an opt-out link). Gizlilik ve pazarlama metinlerinde çok sık geçer; tek başına 'opt' (seçmek) ise 'opt for something' kalıbıyla kullanılır.",
    example: "You can opt out of the shop's marketing emails by changing the settings in your account.",
    exampleTr: 'Hesabındaki ayarları değiştirerek mağazanın tanıtım e-postalarından çıkabilirsin.',
    synonyms: ['withdraw', 'unsubscribe'], family: ['opt-out'] },
];

const items = [
  // ---------- diyalog tamamlama ----------
  { id: 'gil-d1', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlam'],
    q: "Mum: You've been staring at that message for ten minutes. What's the matter?\nDeniz: Ela answered my long message about the weekend with a single word, 'Fine', and a full stop.\nMum: ----\nDeniz: I'd agree if it were anyone else, but she normally fills her messages with jokes and emojis. Something's definitely up.",
    options: [
      "Perhaps she was in a rush and simply didn't have time to say more.",
      'Why not invite her round on Friday and sort out the plans face to face?',
      'Honestly, you spend far too much time on that phone of yours these days.',
      "Did she say whether she'd be able to make it to the cinema on Saturday?",
      "She's obviously still annoyed with you about missing her birthday.",
    ], answer: 0,
    explain: "Deniz 'Başka biri olsa katılırdım, ama…' diyerek annesinin görüşünü kabul etmiyor ve bir şeyler olduğunda ısrar ediyor; demek ki annesi tek sözcüklük cevaba önemsiz bir açıklama getirmiş: Ela belki aceledeydi ve daha fazlasını yazacak vakti yoktu. Ela'nın doğum günü yüzünden hâlâ kırgın olduğunu söyleyen seçenek de bir açıklama, ama Deniz'in kaygısını doğruluyor; Deniz ona 'katılırdım, ama' diye karşı çıkmaz. Ela'yı cuma günü çağırma önerisi ve sinema sorusu bir görüş bildirmediği için 'I'd agree' ile karşılanamaz. Telefona çok vakit ayırdığı yakınması da Ela'nın cevabını açıklamıyor." },

  { id: 'gil-d2', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['soru-cevap uyumu'],
    q: "Customer: Hello, I ordered a jacket from your website last week, but it's far too big.\nAssistant: ----\nCustomer: No, I'd rather have my money back. I don't really need it in another size.\nAssistant: No problem. I'll send you a returns label by email this afternoon.",
    options: [
      "I'm sorry to hear that. When exactly did you place the order?",
      "I'm sorry about that. Would you like to exchange it for a smaller one?",
      "I'm sorry about that. Could you tell me which colour you ordered?",
      "I'm afraid we can't accept returns on items bought in the sale.",
      'Thank you for letting us know. How did you hear about our website?',
    ], answer: 1,
    explain: "Müşterinin cevabı 'Hayır, paramı geri almayı tercih ederim; başka bir bedene pek ihtiyacım yok' bir değişim önerisini geri çeviriyor. Bu yüzden boşluğa ceketi daha küçük bir bedenle değiştirmek isteyip istemediğini soran cümle gelir. Siparişin ne zaman verildiği ve siteyi nereden duyduğu soruları 'Hayır' ile cevaplanmaz. Renk sorusu beden sözüne bağlanmaz. İndirimde alınan ürünlerin iade edilemeyeceğini söyleyen seçenek ise görevlinin sonunda iade etiketi göndermesiyle çelişiyor." },

  { id: 'gil-d3', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlam'],
    q: "Arda: I had five online lectures today, and I'm completely exhausted, even though I never left my room.\nSena: Same here. I think part of it is having to look at your own face all day.\nArda: ----\nSena: That's a good idea. I'll try it tomorrow and see if it makes a difference.",
    options: [
      'Really? I hardly ever notice my own picture on the screen.',
      "I know. That's why I've stopped going to lectures in person.",
      'You can hide your own picture, you know. I did it last week.',
      'Maybe, but the lecturers never let us switch our cameras off.',
      'Yes, and the internet connection in our flat is so slow.',
    ], answer: 2,
    explain: "Sena 'Bu iyi bir fikir, yarın deneyeceğim' diyor; demek ki Arda bir öneride bulunmuş. Sena'nın yakındığı şey bütün gün kendi yüzüne bakmak; Arda'nın kendi görüntüsünü gizleyebileceğini söylemesi buna çözüm oluyor. Kendi görüntüsünü pek fark etmediğini söylemek bir fikir değil. Derslere yüz yüze gitmeyi bıraktığını söyleyen seçenek Arda'nın odasından hiç çıkmadığı çevrim içi derslerle çelişiyor. Hocaların kamerayı kapattırmadığını söylemek bir engel bildiriyor, öneri değil. Bağlantının yavaşlığı da yarın denenecek bir şey sunmuyor." },

  { id: 'gil-d4', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlam'],
    q: "Leyla: Can you help me? The bank's app keeps asking me to set up something called two-step verification.\nKerem: You should definitely do that. It means a code is sent to your phone every time you log in.\nLeyla: ----\nKerem: True, but it only takes a few seconds, and it makes it much harder for anyone else to get into your account.",
    options: [
      "So I won't need a password any more once I've set it up?",
      "Great. Then I can finally share my password with my sister.",
      'Does that mean the bank will start charging me for each code?',
      "Won't that make logging in a bit slower and more annoying?",
      "I've already changed my password twice this month, actually.",
    ], answer: 3,
    explain: "Kerem 'Doğru, ama yalnızca birkaç saniye sürer' diyerek Leyla'nın bir sakıncasını kabul edip hafifletiyor. Bu sakınca, girişin biraz yavaşlayıp can sıkıcı hâle gelmesidir. Artık parolaya gerek kalmayacağını sanan soru 'Doğru' ile onaylanamaz, çünkü kod parolaya eklenir. Kod başına ücret alınıp alınmayacağı sorusu 'birkaç saniye sürer' ile cevaplanmaz. Parolayı kız kardeşiyle paylaşmak hesabı başkalarına kapatma amacına ters düşüyor. Parolasını bu ay iki kez değiştirdiğini söylemek de Kerem'in 'Doğru, ama' diye karşılık verdiği bir itiraz değil." },

  { id: 'gil-d5', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['misread'],
    level: 'orta', cefr: 'B2', konu: ['bağlam'],
    q: "Selin: I think my tutor is angry with me. Look at this email: 'See me after class.'\nHakan: Hmm. It's short, but I wouldn't read too much into it.\nSelin: ----\nHakan: Exactly. People misread short emails all the time. Just go and talk to her.",
    options: [
      "You're right. I'll just ignore it and hope she forgets all about it.",
      'But she has never written to me before, so it must be something serious.',
      'Should I write back and ask her what I have done wrong?',
      'Do you think I should drop the course before it is too late?',
      "Maybe she just writes like that because she's always in a hurry.",
    ], answer: 4,
    explain: "Hakan 'Aynen öyle' diyerek Selin'in sözünü onaylıyor ve insanların kısa e-postaları hep yanlış yorumladığını ekliyor. Demek ki Selin bu kez kısalığa masum bir açıklama bulmuş: hoca belki her zaman aceleyle yazdığı için böyle yazıyordur. E-postayı görmezden gelmek Hakan'ın 'git, onunla konuş' önerisiyle çelişiyor. Bunun ciddi bir şey olması gerektiğini söylemek Hakan'ın görüşüne karşı çıkıyor. Hocaya yazıp ne yanlış yaptığını sorma ve dersi bırakma soruları 'Aynen öyle' ile cevaplanamaz." },

  { id: 'gil-d6', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B1', konu: ['bağlam'],
    q: "Can: Did you see the photos from Burak's party? Everyone's been talking about them in the group chat.\nElif: No, I muted that group weeks ago. ----\nCan: I know what you mean. I get about two hundred messages a day from it.",
    options: [
      'My phone kept buzzing, and I just couldn\'t concentrate.',
      "Burak never invites me to anything, so I wasn't at the party.",
      "I'll ask him to send me the photos by email later tonight.",
      "I didn't like the way the photographer had edited them.",
      'Could you add me to it again? I think I left by mistake.',
    ], answer: 0,
    explain: "Elif grubu sessize aldığını söylüyor; boşluk bunun nedenini vermeli. Can'ın 'Ne demek istediğini anlıyorum, günde iki yüz kadar mesaj geliyor' demesi nedenin çok fazla mesaj olduğunu gösteriyor: telefon sürekli titriyordu ve Elif odaklanamıyordu. Burak'ın onu davet etmemesi ve fotoğrafların düzenlenişi mesaj sayısıyla ilgili değil. Fotoğrafları e-postayla isteyeceğini söylemek bir neden bildirmiyor. Gruba yeniden eklenmek istemek ise grubu bilerek sessize almasıyla çelişiyor." },

  { id: 'gil-d7', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlam'],
    q: "Ozan: These headphones have nearly five stars on the website. I think I'll order them.\nMelis: Before you do, ----\nOzan: Good point. A lot of the five-star ones are probably from people who got them for free.",
    options: [
      'check whether they come in a colour you actually like.',
      'read a few of the reviews that give them only one star.',
      'ask the shop whether they deliver on Saturdays.',
      'make sure you remember the password for your account.',
      'compare the price with the shop in the city centre.',
    ], answer: 1,
    explain: "Ozan 'Haklısın' dedikten sonra beş yıldızlı yorumların çoğunun ürünü bedava alanlardan gelmiş olabileceğini söylüyor; yani Melis ona yüksek puana körü körüne güvenmemesini öğütlemiş olmalı. Yalnızca bir yıldız veren yorumlardan birkaçını okumasını önermek bunu sağlar. Renk, cumartesi teslimatı, parola ve fiyat karşılaştırması da sipariş öncesi makul uyarılar, ama hiçbiri Ozan'ın yorumların güvenilirliği üzerine söylediğine bağlanmıyor." },

  { id: 'gil-d8', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlam'],
    q: "Gül: Why does your brother always send voice messages instead of texting?\nEmre: He says typing takes too long. ----\nGül: Exactly, and I can't listen to them on the bus without headphones.",
    options: [
      "Besides, he's a very fast typist, so that makes sense.",
      'He also thinks voice messages cost more than texts.',
      'The trouble is, they often last five minutes.',
      "That's exactly why he prefers writing long emails to all of us.",
      "I'll ask him whether he'd like to try a new phone.",
    ], answer: 2,
    explain: "Gül 'Aynen öyle' diyerek Emre'nin bir yakınmasını onaylıyor ve kendi yakınmasını ekliyor: otobüste kulaklıksız dinleyemiyor. Emre'nin yakınması sesli mesajların çoğu zaman beş dakika sürmesidir; bu, kardeşinin 'yazmak çok uzun sürüyor' gerekçesini de boşa çıkarıyor. Kardeşinin çok hızlı yazdığını söylemek gerekçeyle çelişiyor. Sesli mesajın daha pahalı sanılması ve uzun e-posta yazmayı sevmesi sesli mesaj alışkanlığıyla bağdaşmıyor. Yeni telefon önerisi ise Gül'ün onaylayacağı bir yakınma değil." },

  { id: 'gil-d9', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['soru-cevap uyumu'],
    q: "Father: From tonight, I'd like everyone to leave their phones in the hall during dinner.\nAyşe: All of them? What if someone needs to reach us urgently?\nFather: ----\nAyşe: Fine, I suppose that's fair. But only during dinner, right?",
    options: [
      "You can use it as much as you like after you've done the washing-up.",
      "Your teachers told me you've been using it during lessons too.",
      "I've already bought a new charger for the hall, so don't worry.",
      "If it's urgent, they'll call more than once, and we'll hear it.",
      'Actually, I was thinking of selling my own phone next month.',
    ], answer: 3,
    explain: "Ayşe acil bir durumda kendilerine ulaşılamayacağından kaygılanıyor; babanın cevabı bu kaygıyı gidermeli ki Ayşe 'Peki, sanırım bu adil' desin. Acil bir durumda arayanın birden çok kez arayacağını ve telefonun duyulacağını söylemek kaygıya doğrudan cevap veriyor. Bulaşıktan sonra telefonu dilediği gibi kullanabileceğini söylemek acil arama sorusunu karşılamıyor. Öğretmenlerin şikâyeti ve yeni şarj aleti de kaygıyla ilgili değil. Babanın kendi telefonunu satmayı düşünmesi ise Ayşe'nin sorusunu cevapsız bırakıyor." },

  { id: 'gil-d10', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['encrypt'],
    level: 'orta', cefr: 'B2', konu: ['soru-cevap uyumu'],
    q: "Murat: Why did you switch to a different messaging app?\nDefne: This one encrypts everything, so only the person I'm writing to can read my messages.\nMurat: ----\nDefne: Not even them, apparently. That's the whole point of it.",
    options: [
      'Is it true that it also lets you send much larger video files?',
      'How many of your friends have already started using it?',
      'Did you have to pay for it, or was it completely free?',
      "Does that mean you've deleted all your old messages?",
      "And the company behind it? Can't they read them?",
    ], answer: 4,
    explain: "Defne'nin cevabı 'Söylenene göre onlar bile okuyamıyor' ve 'them' (onlar) bir gruba gönderme yapıyor. Bu grup, Murat'ın sorduğu uygulamayı işleten şirkettir; şifreleme şirketin bile iletileri okuyamaması demek. Büyük video dosyaları, arkadaş sayısı, ücret ve eski iletilerin silinmesi soruları 'onlar bile değil' diye cevaplanamaz; hiçbirinde iletileri okuyabilecek biri anılmıyor." },

  { id: 'gil-d11', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['browse'],
    level: 'orta', cefr: 'B2', konu: ['bağlam'],
    q: "Nur: So, what did you end up buying? You've been browsing that furniture website all evening.\nTolga: Nothing, as it happens. ----\nNur: I know the feeling. It's a bit like window shopping, only you don't have to leave the sofa.",
    options: [
      'To be honest, I was just daydreaming about redecorating the flat.',
      'I was trying to get a refund for a lamp that arrived broken last week.',
      'The site kept crashing every time I got as far as the payment page.',
      "My sister asked me to track down a particular chair she'd seen in a magazine.",
      'I was comparing delivery charges before ordering the new sofa.',
    ], answer: 0,
    explain: "Nur 'O duyguyu bilirim; vitrin gezmek gibi, yalnız kanepeden kalkmak gerekmiyor' diyor; demek ki Tolga hiçbir şey almadan, yalnızca hayal kurarak bakındığını söylemiş: evi yeniden döşemeyi hayal ediyordu. Kırık gelen bir lambanın parasını geri almaya çalışmak ve ödeme sayfasında sitenin çökmesi vitrin gezmeye benzemiyor. Kız kardeşi için belli bir sandalyeyi aramak ve yeni kanepeyi sipariş etmeden önce teslimat ücretlerini karşılaştırmak belli bir amaçla yapılan alışveriştir; Nur'un 'amaçsızca bakınma' benzetmesine uymuyor." },

  { id: 'gil-d12', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['attachment'],
    level: 'kolay', cefr: 'B1', konu: ['bağlam'],
    q: "Kaan: Did you get the photos I sent you this morning?\nZeynep: I got your email, but ----\nKaan: Oh no, I must have forgotten to attach them again. I'll send them now.",
    options: [
      "the pictures were much darker than I'd expected.",
      'there was no attachment, just a short message.',
      'the attachment was too large to open on my phone.',
      'it went straight into my spam folder by mistake.',
      "I haven't had time to look at it properly yet.",
    ], answer: 1,
    explain: "Kaan fotoğrafları eklemeyi yine unuttuğunu anlıyor; demek ki Zeynep e-postada ek olmadığını, yalnız kısa bir ileti olduğunu söylemiş. Ekin telefonda açılamayacak kadar büyük olduğunu söyleyen seçenek de eke değiniyor, ama ek varsa Kaan eklemeyi unutmuş olamaz. Fotoğrafların karanlık olması da fotoğrafların geldiğini gösteriyor. İletinin istenmeyen klasörüne düşmesi ve henüz bakacak vakit bulamamak da Kaan'ın 'eklemeyi unutmuşum' çıkarımını gerektirmiyor." },

  { id: 'gil-d13', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['impersonal'],
    level: 'orta', cefr: 'B2', konu: ['bağlam'],
    q: "Gran: You never call me any more. You just send those little messages.\nEfe: But I write to you almost every day, Gran!\nGran: I know, dear, but a message feels so impersonal. ----\nEfe: All right, I see what you mean. I'll ring you every Sunday from now on.",
    options: [
      'Your spelling has got much worse lately, though.',
      "I'd prefer it if you sent me a few more photos.",
      "I'd much rather hear your voice once a week.",
      "That's because my phone is older than yours.",
      'I read every single one of them twice, you know.',
    ], answer: 2,
    explain: "Efe 'Anladım, bundan sonra her pazar seni arayacağım' diyor; büyükanne mesaj yerine sesini duymak istediğini söylemiş olmalı: haftada bir sesini duymayı çok daha çok tercih ederim. Birkaç fotoğraf daha istemek de bir dilek, ama Efe'nin telefonla aramaya karar vermesine yol açmaz. Yazım hataları ve telefonun eskiliği mesajın soğukluğuyla ilgili bir istek bildirmiyor. Her mesajı iki kez okuduğunu söylemek ise mesajlardan memnun olduğunu düşündürür; Efe'nin aramaya geçmesini açıklamaz." },

  { id: 'gil-d14', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B2', konu: ['soru-cevap uyumu'],
    q: "Student: Hi, I can't log in to the university system. I think I've forgotten my password.\nHelp desk: ----\nStudent: Yes, I tried that, but the reset email never arrived.\nHelp desk: Let me check. Ah, it was sent to an old address. I'll update it for you now.",
    options: [
      'Which building is your next lecture in this afternoon?',
      'Could you tell me your password so that I can check it?',
      'When did you last change the address you have registered?',
      "Have you clicked on 'Forgot password' on the login page?",
      "Are you sure you're typing your student number correctly?",
    ], answer: 3,
    explain: "Öğrenci 'Evet, denedim ama sıfırlama e-postası hiç gelmedi' diyor; demek ki görevli ona bir yol önermiş: giriş sayfasındaki 'Parolamı unuttum' bağlantısına tıklayıp tıklamadığını sormuş. Parolasını söylemesini istemek, parolanın unutulduğu bir durumda anlamsız ve 'denedim' ile cevaplanamaz. Kayıtlı adresi en son ne zaman değiştirdiği sorusu bir zaman bekler. Öğrenci numarasını doğru yazıp yazmadığı sorusu sıfırlama e-postasıyla bağlanmıyor. Dersin hangi binada olduğu ise konuyla ilgisiz." },

  { id: 'gil-d15', course: C, type: 'soru', tur: 'diyalog', unit: U, status: T, cards: ['inbox', 'opt out'],
    level: 'zor', cefr: 'C1', konu: ['bağlam'],
    q: "Hande: My inbox is full of adverts from shops I bought one thing from years ago.\nBarış: Most of them have a link at the bottom that lets you opt out, you know.\nHande: ----\nBarış: Then it's probably a dodgy company. Just mark them as spam and they'll stop appearing.",
    options: [
      "Really? I've never noticed that. I'll look for it next time.",
      "That's fine. I don't mind getting them, to be honest.",
      "I'd rather keep them. Some of the discounts are good.",
      'Which shops do you usually buy your clothes from?',
      "I know, and I've clicked it, but the emails keep coming.",
    ], answer: 4,
    explain: "Barış 'O zaman muhtemelen güvenilmez bir şirkettir, istenmeyen olarak işaretle' diyor; bu öneri, bağlantının işe yaramadığı bir durumda anlam taşır. Hande bağlantıyı bildiğini, tıkladığını ama e-postaların gelmeye devam ettiğini söylemiş olmalı. Bağlantıyı hiç fark etmediğini söyleyen seçenek Barış'ın 'O zaman' diye başlayan sonucuna yol açmaz. E-postalara aldırmadığını ya da indirimler için tutmak istediğini söylemek, onları engelleme önerisiyle çelişiyor. Barış'ın nereden giysi aldığı sorusu da onun cevabına bağlanmıyor." },

  // ---------- anlamca en yakın cümle ----------
  { id: 'gil-y1', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['kapsam'],
    q: 'Hardly any of the people we surveyed said they read the terms and conditions before accepting them.',
    options: [
      'Very few of the people in the survey reported reading the terms and conditions before agreeing to them.',
      'Most of the people in the survey found the terms and conditions too difficult to read before accepting them.',
      'None of the people in the survey admitted that they accepted the terms and conditions without reading them.',
      'Some of the people in the survey read the terms and conditions only after they had already accepted them.',
      'About half of the people in the survey said they read the terms and conditions before accepting them.',
    ], answer: 0,
    explain: "'Hardly any' (neredeyse hiç) çok küçük bir oranı anlatır: ankete katılanların pek azı şartları kabul etmeden önce okuduğunu söyledi. 'Very few' aynı kapsamı verir. Yarı yarıya diyen seçenek oranı büyütüyor. Hiç kimsenin okumadan kabul ettiğini itiraf etmediğini söyleyen seçenek cümleyi tersine çeviriyor. Şartları okumanın zor bulunması ve bazılarının şartları kabulden sonra okuması verilen cümlede yok." },

  { id: 'gil-y2', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['neden-sonuç'],
    q: 'Because the app collects so much location data, many users have decided to delete it.',
    options: [
      'Many users have deleted the app, even though it collects very little location data.',
      'The large amount of location data the app gathers has led a lot of users to decide to remove it.',
      'Many users collect location data with the app before deciding whether to delete it.',
      'The app has started collecting more location data since many users decided to delete it.',
      'A lot of users would delete the app if it began to collect more location data.',
    ], answer: 1,
    explain: "Verilen cümlede neden uygulamanın çok fazla konum verisi toplaması, sonuç birçok kullanıcının onu silmeye karar vermesidir; cümle silme işleminin yapıldığını değil, kararı söylüyor. Doğru seçenek aynı ilişkiyi 'has led … to decide to remove' (silmeye karar vermelerine yol açtı) ile kuruyor. Uygulamanın çok az veri topladığını söyleyen seçenek nedeni tersine çeviriyor. Kullanıcıların silme kararından sonra uygulamanın daha çok veri topladığını söyleyen seçenek neden ile sonucun yerini değiştiriyor. 'Would … if' verilmiş bir kararı varsayıma çeviriyor. Kullanıcıların uygulamayla veri toplaması ise cümlenin öznesini değiştiriyor." },

  { id: 'gil-y3', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['kip (modal)'],
    q: "You don't have to reply to every message the moment it arrives.",
    options: [
      "You mustn't answer a message immediately after you have received it.",
      'You ought to answer every single message as soon as you possibly can.',
      "It isn't necessary to answer each message as soon as you receive it.",
      "You won't be able to answer each message as soon as you receive it.",
      "You needn't have answered all of those messages as quickly as you did.",
    ], answer: 2,
    explain: "'Don't have to' zorunluluk olmadığını bildirir: her iletiye geldiği anda cevap vermen gerekmez. 'It isn't necessary' aynı anlamı taşır. 'Mustn't' yasak bildirir; hemen cevap vermeyi yasaklamak başka bir şeydir. 'Ought to' tersine bir öğüt veriyor. 'Won't be able to' bir yapamama bildiriyor, zorunluluk değil. 'Needn't have answered' geçmişte yapılmış, gereksiz bir işi anlatıyor; verilen cümle ise genel bir durumdan söz ediyor." },

  { id: 'gil-y4', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['karşılaştırma'],
    q: 'The longer an email is, the less likely it is to be read to the end.',
    options: [
      'Long emails are read to the end more often than short ones.',
      'Most people only read the last part of an email that is long.',
      'Emails that are read to the end tend to be the longest ones.',
      'Shorter emails have a better chance of being read in full.',
      'An email should never be longer than a few short lines.',
    ], answer: 3,
    explain: "'The longer …, the less likely …' (ne kadar uzunsa o kadar az olası) iki şeyin birlikte değiştiğini söyler: e-posta uzadıkça sonuna kadar okunma olasılığı düşüyor, yani kısa e-postaların tamamının okunma şansı daha yüksek. Doğru seçenek aynı ilişkiyi kısa e-postalar açısından kuruyor. Uzun e-postaların daha sık sonuna kadar okunduğunu ve sonuna kadar okunanların en uzunlar olduğunu söyleyen seçenekler ilişkiyi tersine çeviriyor. Uzun e-postada yalnız son kısmın okunması verilen cümlede yok. 'Should never' ise bir gözlemi kesin bir kurala dönüştürüyor." },

  { id: 'gil-y5', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['olumsuzluğun kapsamı'],
    q: 'It is not that people do not care about their privacy; it is that they find protecting it too time-consuming.',
    options: [
      'People do not care about their privacy, because protecting it takes too much time.',
      'Protecting privacy takes little time, yet people still prefer not to bother with it.',
      'People care less about their privacy than about the time they spend online.',
      'Since people care so much about privacy, they are willing to spend time protecting it.',
      'People value their privacy but feel that guarding it simply takes too long.',
    ], answer: 4,
    explain: "'It is not that …; it is that …' (mesele … değil, … ) birinci açıklamayı reddedip ikincisini öne sürer: insanlar gizliliklerini önemsiyor, ama onu korumayı fazla zaman alıcı buluyor. Doğru seçenek bunu 'değer veriyorlar ama korumak çok uzun sürüyor' diye veriyor. İnsanların gizliliği önemsemediğini söyleyen seçenek reddedilen açıklamayı doğruymuş gibi sunuyor. Korumanın az zaman aldığını söyleyen seçenek ikinci yarıyı tersine çeviriyor. Çevrim içi geçirilen zamanla karşılaştırma cümlede yok. İnsanların gizliliği korumaya zaman ayırmaya istekli olduğunu söyleyen seçenek de 'fazla zaman alıcı' sözüyle çelişiyor." },

  { id: 'gil-y6', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['zaman: past perfect'],
    q: 'By the time I noticed the email from the bank, the offer had already expired.',
    options: [
      "The offer was no longer valid when I saw the bank's email.",
      'The offer expired soon after I had read the email from the bank.',
      "I noticed the bank's email just in time to accept the offer.",
      'The bank sent me an email to tell me the offer would soon expire.',
      "I didn't notice the email because the bank had already withdrawn the offer.",
    ], answer: 0,
    explain: "'By the time …, had already expired' iki olayın sırasını verir: önce teklifin süresi doldu, sonra e-postayı fark ettim. Doğru seçenek bunu 'e-postayı gördüğümde teklif artık geçerli değildi' diye karşılıyor. Teklifin e-postayı okuduktan kısa süre sonra sona erdiğini söyleyen seçenek sırayı tersine çeviriyor. Tam zamanında fark ettiğini söyleyen seçenek sonucu değiştiriyor. Bankanın teklifin yakında biteceğini bildirmesi cümlede yok. E-postayı fark etmemenin nedenini teklifin geri çekilmesine bağlayan seçenek ise cümlede olmayan bir neden-sonuç ilişkisi kuruyor." },

  { id: 'gil-y7', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['unless'],
    q: 'Unless you change the default settings, the app will share your contacts with advertisers.',
    options: [
      'If you change the default settings, the app will share your contacts with advertisers.',
      'The app will pass your contacts to advertisers if you leave the default settings as they are.',
      'Even if you change the default settings, the app will still share your contacts with advertisers.',
      "The app would have shared your contacts with advertisers if you hadn't changed the settings.",
      'The default settings prevent the app from sharing your contacts with advertisers.',
    ], answer: 1,
    explain: "'Unless' (-medikçe, -mezsen) 'if … not' anlamındadır: varsayılan ayarları değiştirmezsen uygulama kişilerini reklamcılarla paylaşır. Ayarları olduğu gibi bırakmak, onları değiştirmemek demektir; doğru seçenek koşulu böyle veriyor. 'If you change' koşulu tersine çeviriyor. 'Even if' değiştirmenin de işe yaramayacağını söylüyor. 'Would have … if you hadn't' gelecekteki bir uyarıyı geçmişte olmamış bir duruma çeviriyor. Varsayılan ayarların paylaşımı engellediğini söyleyen seçenek ise cümleyle çelişiyor." },

  { id: 'gil-y8', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['temkinli dil'],
    q: 'Video calls are unlikely to ever fully replace meeting in person.',
    options: [
      'Video calls will soon replace most meetings that take place in person.',
      'Video calls have already replaced meeting in person in a great many situations.',
      'Video calls will probably never entirely take the place of meeting face to face.',
      'Meeting in person will become far less common as soon as video calls improve a little.',
      'Video calls are probably more useful than meeting in person in most situations at work.',
    ], answer: 2,
    explain: "'Unlikely to ever fully replace' iki kısıt taşır: bir olasılık bildirir (pek olası değil) ve 'fully' ile tam bir yer değiştirmeyi dışlar. Doğru seçenek ikisini de koruyor: 'probably never entirely'. Görüntülü görüşmeler biraz gelişince yüz yüze görüşmenin çok azalacağını söyleyen seçenek, verilen cümlenin değinmediği bir tahminde bulunuyor; üstelik cümlenin vurguladığı 'tam yerini alamaz' sınırını yok sayıp tersine bir eğilim öne sürüyor. Yakında çoğu toplantının yerini alacağını ya da çoğu durumda zaten aldığını söyleyen seçenekler cümleyle çelişiyor. İş yerinde daha yararlı olduğu karşılaştırması ise cümlede yok." },

  { id: 'gil-y9', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edilgen'],
    q: 'Customers are often asked to rate a product before they have even had a chance to use it.',
    options: [
      'Customers often rate products that they have never actually bought.',
      'Companies often ask customers to use a product before rating it.',
      'Customers who rate a product often have not been asked to do so.',
      'Customers often refuse to rate a product until they have used it for a while.',
      'A rating is often requested before the buyer has even tried the product.',
    ], answer: 4,
    explain: "Edilgen cümle kimin istediğini söylemiyor; önemli olan, müşteriden ürünü kullanma fırsatı bulmadan puan istenmesi. Doğru seçenek de edilgen kuruluyor: puan, alıcı ürünü denemeden istenir. Şirketlerin önce kullanıp sonra puanlamayı istediğini söyleyen seçenek sırayı tersine çeviriyor. Hiç satın alınmamış ürünlerin puanlanması ve istenmeden puan verilmesi başka iddialar. Müşterilerin bir süre kullanmadan puan vermeyi reddetmesi ise cümlede yok." },

  { id: 'gil-y10', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although online shopping saves time, it can make it harder to judge the quality of a product.',
    options: [
      'Shopping online is quicker, but judging how good a product is can be more difficult.',
      'Because shopping online saves time, judging the quality of a product becomes easier.',
      'Online shopping takes longer because it is hard to judge the quality of products.',
      'Shopping online saves time only when the quality of a product is easy to judge.',
      'It is easier to judge the quality of a product online, although it takes more time.',
    ], answer: 0,
    explain: "'Although' iki şeyi karşı karşıya koyar: çevrim içi alışveriş zaman kazandırır, ama ürünün kalitesini değerlendirmeyi zorlaştırabilir. Doğru seçenek aynı karşıtlığı 'but' ile veriyor ve 'can' temkinini koruyor. Zaman kazandığı için kaliteyi değerlendirmenin kolaylaştığını söyleyen seçenek karşıtlığı neden-sonuca çevirip anlamı tersine döndürüyor. Daha uzun sürdüğünü söyleyen seçenekle kalitenin internette daha kolay değerlendirildiğini söyleyen seçenek cümleyle çelişiyor. 'Only when' ise cümlede olmayan bir koşul ekliyor." },

  { id: 'gil-y11', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['kip geçmiş (modal perfect)'],
    q: "She can't have read my message yet, or she would have replied by now.",
    options: [
      'She must have read my message, but she has decided not to reply.',
      "She hasn't replied, so she clearly hasn't seen my message.",
      'She might not reply to my message even after she has read it.',
      'She should have read my message and replied to it before now.',
      'If she had read my message, she might not have replied to it.',
    ], answer: 1,
    explain: "'Can't have read' geçmişe dönük güçlü bir olumsuz çıkarımdır: mesajımı okumuş olamaz. Gerekçe ikinci yarıda: okumuş olsaydı şimdiye cevap verirdi. Doğru seçenek aynı çıkarımı aynı gerekçeyle veriyor: cevap vermediğine göre mesajımı belli ki görmedi. 'Must have read' çıkarımı tersine çeviriyor. 'Should have read' bir eleştiri bildiriyor, çıkarım değil. Okuduktan sonra da cevap vermeyebileceğini söyleyen iki seçenek ise 'okusaydı cevap verirdi' gerekçesini ortadan kaldırıyor." },

  { id: 'gil-y12', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['olumsuzluk'],
    q: 'Few people realise how much personal information their phones collect every day.',
    options: [
      'Most people know exactly how much personal information their phones collect.',
      'Phones collect personal information from only a few people each day.',
      'Not many people are aware of how much personal data their phones gather daily.',
      'People who realise how much data their phones collect use them less often.',
      'Phones collect less personal information each day than most people think.',
    ], answer: 2,
    explain: "'Few' (az) olumsuz bir anlam taşır: pek az kişi telefonunun her gün ne kadar kişisel bilgi topladığının farkında. 'Not many people are aware' aynı anlamı veriyor. Çoğu kişinin bunu tam olarak bildiğini söyleyen seçenek anlamı tersine çeviriyor. Telefonların yalnız birkaç kişiden bilgi topladığını söyleyen seçenek 'few' sözcüğünü yanlış yere bağlıyor. Telefonların sanıldığından az bilgi topladığını söyleyen seçenek de tersini ima ediyor. Farkında olanların telefonu daha az kullanması ise cümlede yok." },

  { id: 'gil-y13', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['devrik yapı'],
    q: 'No sooner had I posted the photo than I regretted it.',
    options: [
      'I went on regretting that I had posted the photo for a long time.',
      "I didn't regret posting the photo until much later.",
      'I posted the photo even though I knew I would regret it.',
      'I regretted posting the photo almost the moment I had done it.',
      'I would have regretted it if I had not posted the photo.',
    ], answer: 3,
    explain: "'No sooner … than' iki olayın neredeyse aynı anda olduğunu söyler: fotoğrafı paylaşır paylaşmaz pişman oldum. Doğru seçenek bunu 'paylaştığım anda neredeyse pişman oldum' diye veriyor. Uzun süre pişman kalmak pişmanlığın süresinden söz ediyor, başlama anından değil. Çok sonraya kadar pişman olmamak zamanı tersine çeviriyor. Pişman olacağını bile bile paylaşmak cümlede olmayan bir önceden bilme ekliyor. Paylaşmasaydı pişman olacağını söyleyen seçenek ise durumu tersine çeviriyor." },

  { id: 'gil-y14', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: 'Writing a message by hand is nowhere near as quick as typing it, but it often feels more personal.',
    options: [
      'Typing a message is slightly quicker than writing it by hand, and it feels just as personal.',
      'Handwritten messages are quicker to write than typed ones and also feel more personal.',
      'Typed messages feel more personal, although writing by hand is much slower.',
      'Writing by hand is a little slower than typing, so it rarely feels personal.',
      'Typing is far quicker than writing by hand, yet a handwritten message often seems warmer.',
    ], answer: 4,
    explain: "'Nowhere near as quick as' büyük bir farkı anlatır: elle yazmak, klavyeyle yazmaktan çok daha yavaştır; 'but' ile de elle yazılanın çoğu zaman daha kişisel geldiği ekleniyor. Doğru seçenek iki bilgiyi de koruyor: klavye çok daha hızlı, elle yazılan ileti çoğu zaman daha sıcak. 'Slightly' ve 'a little' farkı küçültüyor; biri ayrıca 'aynı ölçüde kişisel', öteki 'nadiren kişisel' diyerek ikinci yarıyı bozuyor. Elle yazmanın daha hızlı olduğunu söyleyen seçenek karşılaştırmayı tersine çeviriyor. Klavyeyle yazılanın daha kişisel geldiğini söyleyen seçenek de ikinci yarıyı tersine çeviriyor." },

  { id: 'gil-y15', course: C, type: 'soru', tur: 'yakin-anlam', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['amaç'],
    q: 'Many people turn their phones face down during conversations so as not to seem distracted.',
    options: [
      'To avoid appearing distracted, many put their phones face down while talking to others.',
      'A lot of people seem distracted because they turn their phones face down when talking.',
      'Many people turn their phones face down so that they will not be distracted during talks.',
      'Many people would seem less distracted if they put their phones face down while talking.',
      'Many people are distracted by phones that are left face down during a conversation.',
    ], answer: 0,
    explain: "'So as not to seem distracted' bir amaç bildirir ve vurgu 'seem' (görünmek) üzerindedir: insanlar dikkatleri dağınık görünmemek için telefonlarını ters çeviriyor. 'To avoid appearing distracted' aynı amacı veriyor. 'So that they will not be distracted' amacı korur ama 'görünmemek'i 'dikkati dağılmamak'a çeviriyor; ince ama önemli bir fark. Ters çevirdikleri için dikkatleri dağınık göründüğünü söyleyen seçenek amacı nedene çevirip anlamı bozuyor. 'Would seem … if' insanların bunu yapmadığını varsayıyor. Ters duran telefonların dikkat dağıttığını söyleyen seçenek ise cümlede yok." },

  // ---------- paragraf tamamlama ----------
  { id: 'gil-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['gönderim'],
    q: "In 1971, an American engineer named Ray Tomlinson sent what is widely regarded as the first email between two separate computers on the ARPANET, an early network funded by the US government. He needed a way to show both which user a message was for and which computer that user worked on. ----. The symbol has been part of every email address ever since, and in some languages it has picked up affectionate nicknames, such as 'little snail' in Italian.",
    options: [
      "His solution was to place the rarely used '@' sign between the two names",
      'The two computers he used were placed side by side in the same room',
      'Later he admitted that he could not remember what the first message said',
      'He decided to mark the end of every message with a special symbol of his own',
      'Before long, users were sending one another messages in several languages',
    ], answer: 0,
    explain: "Boşluktan sonraki cümle 'The symbol' (bu işaret) diye bilinen bir işarete gönderme yapıyor ve onun o günden beri her e-posta adresinde bulunduğunu söylüyor. Önceki cümle Tomlinson'ın kullanıcıyı ve bilgisayarı ayırmak için bir yola ihtiyaç duyduğunu anlatıyor. Boşluk bu çözümü ve işareti tanıtmalı: az kullanılan '@' işaretini iki adın arasına koymak. İki bilgisayarın yan yana durması ve ilk iletinin içeriğinin hatırlanmaması doğru ayrıntılar, ama 'the symbol' sözünün gösterebileceği bir işaret anmıyor. Her iletinin sonunu kendine özgü bir işaretle belirlemeye karar verdiğini söyleyen seçenek en güçlü çeldiricidir, çünkü 'The symbol' sözüne dayanak olacak bir işaret tanıtıyor; ama önceki cümledeki ihtiyacı (kullanıcıyı ve bilgisayarı göstermek) karşılamaz ve ileti sonuna konan bir işaret 'her e-posta adresinin parçası' olamaz. İletilerin birkaç dilde gönderilmesi ise sondaki 'some languages' sözüyle tuzak kuruyor; orada sözü edilen, işaretin dillerdeki takma adları." },

  { id: 'gil-p2', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: "----. Engineers had designed the system mainly so that networks could send short service notices to customers, and few expected ordinary people to use it much. Yet when a test message wishing a colleague 'Merry Christmas' was sent from a computer to a mobile phone in Britain in December 1992, it marked the beginning of a habit that would soon spread across the world. Within about a decade, people were exchanging these brief messages in enormous numbers.",
    options: [
      'Many people today find phone calls more stressful than sending a quick text',
      'Text messaging was not originally expected to become a popular way of keeping in touch',
      'Some mobile networks now allow customers to send messages over the internet instead',
      'Writing letters by hand was the most common way of keeping in touch for centuries',
      'Early mobile phones could store only a handful of names and numbers',
    ], answer: 1,
    explain: "Parçanın ikinci cümlesi 'the system' (bu sistem) diye bilinen bir sisteme gönderme yapıyor ve mühendislerin onu sıradan insanların pek kullanmayacağını düşündüğünü söylüyor. Boşluk, bu sistemi tanıtmalı ve 'beklenmeyen başarı' çizgisini açmalı: kısa mesajlaşmanın başlangıçta sevilen bir iletişim yolu olacağı beklenmiyordu. Telefonla konuşmanın bugün daha stresli bulunması ve internet üzerinden mesaj göndermek konuyla ilgili, ama 'the system' sözüne bir sistem tanıtmıyor ve parçanın tarihsel akışına bağlanmıyor. Yüzyıllarca elle mektup yazılması ve ilk telefonların az numara saklaması da mühendislerin tasarladığı sistemi anmıyor." },

  { id: 'gil-p3', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B2', konu: ['neden-sonuç'],
    q: 'Free returns have made online shopping far less risky for customers, who can order a jacket in three sizes and send back the two that do not fit. For retailers, however, the habit is expensive. Each returned parcel has to be collected, checked and repackaged, and some items can no longer be sold as new. ----.',
    options: [
      'Many customers say they prefer to try clothes on in a shop before buying them',
      'Ordering several sizes at once is the easiest way to find a jacket that fits',
      'For this reason, some shops have started to charge a small fee for returns',
      'Online shops usually deliver parcels within two or three working days',
      'This is why customers are now allowed to return items free of charge',
    ], answer: 2,
    explain: "Parça ücretsiz iadenin satıcılara pahalıya patladığını anlatıyor: her paket toplanıyor, denetleniyor, yeniden paketleniyor; bazı ürünler yeni diye satılamıyor. Sona bu maliyetin sonucu gelmeli: bu yüzden bazı mağazalar iade için küçük bir ücret almaya başladı. Müşterinin bunun için ücretsiz iade hakkı kazandığını söyleyen seçenek neden-sonuç ilişkisini tersine çeviriyor. Mağazada denemeyi tercih etmek ve birkaç beden sipariş etmenin kolaylığı parçanın başındaki müşteri bakışına dönüyor; satıcının maliyetiyle bağlanmıyor. Teslimat süresi ise konuyla ilgisiz." },

  { id: 'gil-p4', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: "Emoji are now so common that it is easy to forget how recent they are. In 1999, Shigetaka Kurita, who was working for the Japanese mobile company NTT Docomo, designed a set of fewer than two hundred tiny pictures that users could add to their messages. ----. Years later, New York's Museum of Modern Art added the original set to its collection, treating the little images as an important piece of design.",
    options: [
      'Many older people still find it hard to work out what some emoji mean',
      'Some linguists believe that emoji will one day replace written words',
      'Japanese has many words for feelings that are difficult to translate',
      'They were so popular that rival firms soon made similar sets',
      'Most smartphones today can display several thousand different emoji',
    ], answer: 3,
    explain: "Parça ilk emoji takımının hikâyesini zaman sırasıyla anlatıyor: 1999'daki tasarım, boşluk ve 'Yıllar sonra' müzenin özgün takımı koleksiyonuna alması. Boşluk tasarımla müze arasındaki adımı vermeli: resimler o kadar sevildi ki rakip şirketler kısa sürede benzer takımlar yaptı. Yaşlıların bazı emojileri anlamakta zorlanması ve bugünkü telefonların binlerce emoji göstermesi parçayı bugüne sıçratıyor; 'Years later' ile süren tarihsel akışı bozuyor. Emojilerin bir gün yazının yerini alacağı görüşü ve Japoncadaki duygu sözcükleri de özgün takımın serüveninden kopuyor." },

  { id: 'gil-p5', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['gönderim'],
    q: "----. The word, a blend of 'phone' and 'snubbing', describes ignoring the person you are with in order to look at your phone. Studies of couples and friends suggest that even a brief glance at a screen during a conversation can leave the other person feeling less valued. Interestingly, many people who dislike it when others do this admit that they often do it themselves.",
    options: [
      "In 2013, a British dictionary chose 'selfie' as its word of the year",
      'Smartphones have made it much easier to stay in touch with distant friends',
      'Some couples have agreed never to bring their phones to the dinner table',
      'Polite conversation has always depended on looking at the person speaking',
      "In recent years, the word 'phubbing' has started to appear in dictionaries",
    ], answer: 4,
    explain: "İkinci cümle 'The word' (bu sözcük) diye bir sözcüğe gönderme yapıyor ve onun 'phone' ile 'snubbing' (burun kıvırmak, yok saymak) sözcüklerinden türediğini söylüyor. Boşluk bu sözcüğü tanıtmalı: 'phubbing'. 'Selfie' de bir sözcük ve ilk bakışta 'The word' sözüne uyuyor gibi; ama 'phone' ile 'snubbing'in birleşimi olamaz. Uzaktaki arkadaşlarla iletişim, yemek masasına telefon getirmeme kararı ve konuşanın yüzüne bakmak konuyla ilgili, ama hiçbiri tanımlanacak bir sözcük vermiyor." },

  { id: 'gil-p6', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['browse'],
    level: 'orta', cefr: 'B2', konu: ['neden-sonuç'],
    q: 'When you visit a website, it often stores a small text file, known as a cookie, on your device. The idea was developed in 1994 by Lou Montulli, a programmer at Netscape, to solve a practical problem: websites had no memory, so an online shop could not keep track of what a visitor had put in their basket. Cookies fixed this, but they soon came to be used for another purpose, allowing advertisers to follow people from one site to the next. ----.',
    options: [
      'This is why many websites now have to ask for permission before storing them',
      'Without them, online shops would have to employ a great many more staff',
      "The name is thought to come from an older programming term, 'magic cookie'",
      'Netscape was one of the most widely used web browsers in the mid-1990s',
      'For this reason, online shops stopped using baskets in the late 1990s',
    ], answer: 0,
    explain: "Parçanın son cümlesi çerezlerin reklamcıların insanları siteden siteye izlemesine yaradığını söylüyor; sona bu kaygının sonucu gelmeli: bu yüzden birçok site çerez kaydetmeden önce izin istemek zorunda. Adın eski bir programcılık teriminden geldiği ve Netscape'in 1990'ların ortasında en yaygın tarayıcılardan biri olması parçanın başına ait bilgiler; izleme konusundan sonra akışı geri götürüyor. Çerezler olmasa mağazaların daha çok çalışan istihdam etmesi gerekeceği parçada temellenmiyor. Mağazaların sepet kullanmayı bırakması ise çerezlerin sepet sorununu çözdüğünü söyleyen parçayla çelişiyor." },

  { id: 'gil-p7', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['karşıtlık'],
    q: 'A popular claim holds that only 7 per cent of what we communicate comes from our words, with the rest carried by tone of voice and body language. The figure comes from experiments carried out by the psychologist Albert Mehrabian in the 1960s. ----. Mehrabian himself has pointed out that his results cannot be applied to everyday conversation in general, yet the statistic continues to appear in books and training courses.',
    options: [
      'Since then, his findings have been confirmed by many larger studies around the world',
      'His studies, however, used single spoken words and measured only feelings of liking',
      'Body language is especially important when people meet each other for the first time',
      'As a result, many companies began to train their staff to speak more slowly',
      'Tone of voice can, for example, show whether a speaker is being sarcastic',
    ], answer: 1,
    explain: "Parça yaygın bir iddiayı veriyor ve sonra Mehrabian'ın kendisinin bu sonuçların gündelik konuşmaya genellenemeyeceğini söylediğini aktarıyor. Boşluk iddia ile bu uyarı arasında bir karşıtlık kurmalı ve neden genellenemeyeceğini açıklamalı: deneylerde tek tek söylenen sözcükler kullanıldı ve yalnız beğeni duygusu ölçüldü. Bulguların büyük çalışmalarla doğrulandığını söyleyen seçenek, Mehrabian'ın uyarısıyla çelişiyor. İlk karşılaşmada beden dilinin önemi ve ses tonunun alaycılığı göstermesi iddiayı destekleyen genel bilgiler; deneyin sınırını göstermiyor. Şirketlerin çalışanlarına yavaş konuşmayı öğretmesi ise parçada temellenmiyor." },

  { id: 'gil-p8', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    q: "----. A message that ends with 'Best wishes' may feel friendly to one reader and cold to another, depending on what they are used to. Some people end every email with an exclamation mark to sound warm, while others see the same mark as a sign of carelessness. Because the writer's face and voice are missing, readers tend to fill the gaps with their own expectations.",
    options: [
      'Emails are still the most common form of communication in many offices',
      'Some companies have banned the use of emoji in emails to their customers',
      'Tiny details in an email can be read very differently by different people',
      'Writing an email in capital letters is often seen as the same as shouting',
      'Most people spend more than an hour a day reading and answering emails',
    ], answer: 2,
    explain: "Parçanın gövdesi, aynı küçük ayrıntının (kapanış sözü, ünlem işareti) farklı okurlarda farklı izlenim bıraktığını örnekliyor ve bunu yüz ile sesin eksikliğine bağlıyor. Boşluk bu örneklerin genel fikrini vermeli: e-postadaki küçük ayrıntılar farklı kişilerce çok farklı okunabilir. Büyük harfle yazmanın bağırmak sayılması da e-postadaki bir ayrıntı, ama herkesin aynı biçimde algıladığı bir kuralı anlatıyor; ardından gelen 'bir okura sıcak, ötekine soğuk' örneğiyle çelişiyor. E-postanın bürolarda yaygınlığı, emoji yasağı ve e-postaya harcanan süre ise okurlar arasındaki farkı açmıyor." },

  { id: 'gil-p9', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    q: 'During the pandemic, many people noticed that a day of video meetings left them more drained than a day of ordinary ones. In 2021, the Stanford researcher Jeremy Bailenson proposed several possible reasons. On screen, faces often appear much larger and closer than they would in a normal conversation, and many people spend hours watching their own image. Video calls also tend to keep users sitting in one place. ----.',
    options: [
      'Some companies have since returned to holding most meetings in person',
      'For this reason, video calls are now banned in some large companies',
      'Phone calls, by contrast, have been possible since the nineteenth century',
      'He advised making the video window smaller and taking audio-only breaks',
      'Younger people, however, seem to be completely unaffected by these problems',
    ], answer: 3,
    explain: "Parça Bailenson'ın görüntülü toplantı yorgunluğu için önerdiği olası nedenleri sıralıyor: büyük ve yakın yüzler, insanın kendi görüntüsünü izlemesi, bir yerde oturup kalmak. Nedenlerden sonra doğal adım çözüm önerisidir: pencereyi küçültmek ve yalnız sesli molalar vermek. 'He' de parçadaki araştırmacıya gönderme yapıyor. Bazı şirketlerin yüz yüze toplantıya dönmesi ve görüntülü görüşmenin yasaklanması parçada temellenmiyor; ikincisi abartılı bir sonuç. Telefonun on dokuzuncu yüzyıldan beri var olması konudan kopuyor. Gençlerin bu sorunlardan hiç etkilenmediğini söyleyen seçenek ise parçada dayanağı olmayan mutlak bir iddia." },

  { id: 'gil-p10', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Many young adults say they feel uneasy about answering the phone when an unknown number appears. A text message gives them time to think about what to say and to reply when it suits them. ----. A quick conversation can often settle in two minutes a question that would take twenty messages to sort out, and a voice leaves less room for misunderstanding than a few typed words.',
    options: [
      'Yet phone calls still have clear advantages that are easy to overlook',
      'That is why many of them now keep their phones switched off at night',
      'Many phones now let users block calls from numbers they do not know',
      'Text messages, moreover, can be read again later if something is forgotten',
      'This is mainly because phone calls have become more expensive',
    ], answer: 0,
    explain: "İlk iki cümle gençlerin neden mesajı tercih ettiğini anlatıyor; boşluktan sonraki cümle ise telefonla konuşmanın üstünlüklerini sayıyor. Arada bir karşıtlık gerekir: yine de telefon görüşmesinin gözden kaçan açık üstünlükleri var. Mesajların sonradan yeniden okunabileceğini 'moreover' ile ekleyen seçenek mesajın yararlarını sürdürüyor; ardından gelen telefon övgüsüne geçişi sağlamıyor. Telefonu gece kapatmak ve bilinmeyen numaraları engellemek konuşmanın yararlarına bağlanmıyor. Aramaların pahalılaştığı ise parçada temellenmeyen bir neden." },

  // ---------- akışı bozan cümle ----------
  { id: 'gil-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['inbox'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Many people check their email dozens of times a day, often without any particular reason.',
      'Each check may take only a few seconds, but it breaks the flow of whatever they were doing before.',
      'Some productivity advisers therefore suggest dealing with email in a few fixed sessions instead.',
      'Many email services now use filters that move unwanted advertising messages into a separate folder.',
      'Those who try this often find that very little of what arrives in their inbox needs an immediate answer.',
    ], answer: 3,
    explain: "Parça e-postayı sık sık kontrol eden kişinin alışkanlığını ve ona yönelik bir öneriyi anlatıyor: alışkanlık (I), bedeli (II), e-postayı birkaç sabit oturumda ele alma önerisi (III) ve öneriyi deneyenlerin gördüğü sonuç (V). V'teki 'this' (bunu) III'teki öneriye gönderme yapıyor. IV. cümle de e-postayla ilgili, ama kişinin kontrol alışkanlığından ayrılıp e-posta hizmetlerinin istenmeyen reklam iletilerini ayıklayan süzgeçlerine geçiyor. Araya girince V'teki 'this' süzgeçleri gösteriyormuş gibi okunur ve III'teki öneriyle V'teki sonuç arasındaki bağ kopar." },

  { id: 'gil-b2', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Second-hand marketplaces on the internet have made it easy to sell things that would otherwise sit unused in a cupboard.',
      'A seller simply takes a few photos, writes a short description and waits for someone nearby to get in touch.',
      'For traditional second-hand shops, these websites have meant fewer customers and, in some towns, closure.',
      'Because buyer and seller usually meet face to face, both sides are advised to choose a busy public place for the exchange.',
      'Many users say that, apart from the money, they enjoy knowing that their old belongings will be used again.',
    ], answer: 2,
    explain: "Parça internetteki ikinci el pazar yerlerini kullananların gözünden anlatıyor: kullanılmayan eşyayı satmanın kolaylığı (I), satıcının yaptıkları (II), alıcıyla satıcının buluşması ve güvenlik öğüdü (IV), kullanıcıların memnuniyeti (V). III. cümle de aynı sitelerden söz ediyor, ama özneyi geleneksel ikinci el dükkânlarına çeviriyor ve onların kaybını anlatıyor; satış sürecini adım adım veren II ile IV arasındaki bağı koparıyor." },

  { id: 'gil-b3', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'For years, users were told to create passwords full of numbers and symbols and to change them every few months.',
      'In practice, this advice often led people to choose predictable patterns or to write their passwords down.',
      'More recent guidance from security experts tends to favour long phrases that are easy to remember but hard to guess.',
      'Many experts also recommend a password manager, which can create and store a different password for every account.',
      'Forgotten passwords are thought to be among the most common reasons why people contact a help desk.',
    ], answer: 4,
    explain: "Parça parola önerilerinin nasıl değiştiğini anlatıyor: eski öneri (I), bu önerinin yol açtığı sorun (II), yeni öneri olarak uzun ifadeler (III) ve buna eklenen parola yöneticisi önerisi (IV). V. cümle de parolalardan söz ediyor, ama güvenli parola oluşturma konusunu bırakıp yardım masasına yapılan başvuruların nedenine geçiyor; önerilerin oluşturduğu akışa bağlanmıyor." },

  { id: 'gil-b4', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'For families spread across different countries, video calls have changed what it means to keep in touch.',
      'Some children, however, find these calls awkward and would rather send a quick message than sit in front of a camera.',
      'Grandparents can now watch a grandchild take her first steps, even if they live thousands of kilometres away.',
      "Seeing each other's faces, rather than only hearing voices, seems to make the distance easier to bear for many people.",
      'As a result, some families hold a regular weekly call, treating it almost like a shared meal.',
    ], answer: 1,
    explain: "Parça görüntülü görüşmenin ayrı ülkelerde yaşayan aileleri nasıl yakınlaştırdığını anlatıyor: genel fikir (I), büyükanne ve büyükbabaların torunun ilk adımlarını görmesi (III), yüz görmenin uzaklığı katlanılır kılması (IV) ve bunun sonucu olarak haftalık aile görüşmeleri (V). II. cümle de aynı görüşmelerden söz ediyor, ama 'however' ile bakış açısını bu görüşmeleri sıkıcı bulan çocuklara çeviriyor; ardından gelen cümleler bu karşı görüşü hiç sürdürmüyor, olumlu akış kesintiye uğruyor." },

  { id: 'gil-b5', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    sentences: [
      'Many messaging apps show the sender when a message has been read, often with a pair of small ticks.',
      'This feature was meant to be helpful, letting people know that their words had reached the other person.',
      'For some users, however, it creates pressure, because a message that has been read but not answered can feel like a deliberate snub.',
      'Businesses, for their part, find read receipts useful for checking that customers have seen important notices.',
      'For this reason, several popular apps let users switch read receipts off, although they then cannot see whether others have read their messages either.',
    ], answer: 3,
    explain: "Parça mesajlaşma uygulamalarındaki okundu bilgisini kişisel yazışma açısından anlatıyor: özelliğin ne olduğu (I), amacı (II), yarattığı baskı (III) ve bu yüzden özelliğin kapatılabilmesi (V). V'teki 'For this reason' (bu yüzden) III'teki baskıya bağlanıyor. IV. cümle de okundu bilgisinden söz ediyor, ama özneyi işletmelere çeviriyor ve özelliğin yararını anlatıyor; III ile V arasındaki neden-sonuç bağını koparıyor, çünkü bir yarar özelliği kapatmanın nedeni olamaz." },

  { id: 'gil-b6', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['seamless'],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    sentences: [
      'Many people own a phone, a laptop and a tablet, and they expect to move between them without any effort.',
      'A document started on the train can be finished at a desk, because the file is stored online rather than on any single device.',
      'For most users, this kind of seamless switching has become so normal that they only notice it when it fails.',
      'The convenience comes at a price, however: the files are kept on servers owned by large companies, often in other countries.',
      'Tablets are especially popular with young children, who find a touch screen easier to use than a keyboard.',
    ], answer: 4,
    explain: "Parça aygıtlar arasında kesintisiz geçişi anlatıyor: beklenti (I), dosyaların çevrim içi saklanması sayesinde işin başka aygıtta sürmesi (II), bunun olağan hâle gelmesi (III) ve bedeli, yani dosyaların büyük şirketlerin sunucularında durması (IV). V. cümle I'de sayılan aygıtlardan biri olan tableti sürdürüyor, ama konuyu küçük çocukların dokunmatik ekran tercihine kaydırıyor; IV'te açılan bedel konusunu yarım bırakıyor." },

  { id: 'gil-b7', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'kolay', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Phishing emails are designed to look as if they come from a bank, a delivery company or another trusted organisation.',
      'They usually try to create a sense of urgency, warning that an account will be closed unless the reader acts at once.',
      'Banks have changed a great deal since the days when every customer knew the staff at their local branch.',
      'The link in such a message leads to a fake page where any password the victim types is collected by the sender.',
      "Experts therefore advise never clicking on links in unexpected emails and visiting the organisation's website directly instead.",
    ], answer: 2,
    explain: "Parça oltalama e-postalarını anlatıyor: güvenilir bir kurumdan geliyormuş gibi görünmeleri (I), aciliyet duygusu yaratmaları (II), bağlantının sahte bir sayfaya götürmesi (IV) ve uzmanların öğüdü (V). IV'teki 'such a message' (böyle bir ileti) II'deki iletiye dayanıyor. III. cümle I'deki 'bank' sözcüğünü sürdürüyor, ama konuyu bankacılığın geçmişine kaydırıyor; oltalama iletisinin anlatımını bölüyor." },

  { id: 'gil-b8', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Although almost all personal communication is now digital, some people still enjoy writing letters by hand.',
      'Some teachers argue that taking notes by hand helps students remember a lesson better than typing does.',
      'For them, choosing paper, finding the right words and waiting for a reply are all part of the pleasure.',
      'Recipients, too, tend to treat a handwritten letter differently from an email, often keeping it for years.',
      'In a world of instant messages, the slowness of a letter seems to give it extra value.',
    ], answer: 1,
    explain: "Parça dijital çağda elle mektup yazmanın neden hâlâ sevildiğini anlatıyor: hâlâ mektup yazanlar (I), onlar için bu işin keyfi (III), mektubu alanların tutumu (IV) ve yavaşlığın kattığı değer (V). III'teki 'For them' (onlar için) I'deki mektup yazanlara gönderme yapıyor; kâğıt seçmek ve cevap beklemek öğretmenlere ya da öğrencilere uymaz. II. cümle de elle yazmayı ele alıyor, ama konuyu mektuptan derste not almaya, özneyi de öğretmenlere çeviriyor; I ile III arasındaki gönderme bağını koparıyor." },

  { id: 'gil-b9', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'A growing number of people try to spend one day a week completely away from their phones.',
      'At first, many of them find it surprisingly hard, reaching for a phone that is not there several times an hour.',
      'After a few weeks, however, they often report sleeping better and feeling less anxious on those days.',
      'Phone makers, meanwhile, have added reports that show users how many hours they spend on each app.',
      'Some say the break has also changed how they use their phones during the rest of the week.',
    ], answer: 3,
    explain: "Parça haftada bir gün telefondan uzak durma denemesini deneyenlerin gözünden anlatıyor: deneme (I), ilk zorluk (II), birkaç hafta sonra görülen yararlar (III) ve molanın haftanın geri kalanına etkisi (V). V'teki 'Some' (bazıları) ve 'the break' (bu mola) I–III'teki kişilere ve telefonsuz güne gönderme yapıyor. IV. cümle de telefon kullanımının azaltılmasıyla ilgili, ama özneyi telefon üreticilerine çeviriyor ve ekran süresi raporlarını anlatıyor; deneyimin anlatımını bölüyor." },

  { id: 'gil-b10', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    sentences: [
      'Some apps allow friends and family members to share their location with one another all the time.',
      'Parents often say this gives them peace of mind, especially when their teenage children are out late.',
      'Critics, however, worry that constant tracking can damage trust and leave young people little space of their own.',
      'Some families deal with this by agreeing on clear rules, such as sharing location only during journeys.',
      'Map apps estimate traffic jams partly by collecting location data from the phones of drivers on the road.',
    ], answer: 4,
    explain: "Parça aile içinde sürekli konum paylaşımını anlatıyor: özellik (I), anne babaların gönül rahatlığı (II), eleştirmenlerin güven kaygısı (III) ve ailelerin bu gerilimi kurallarla çözmesi (IV). V. cümle de telefonlardan toplanan konum verisinden söz ediyor, ama konuyu harita uygulamalarının trafik tahminine kaydırıyor; aile içi paylaşım konusuyla bağı yok." },
];

export default { id: 'genel-iletisim', course: C, title: U, order: 19, cards, items };
