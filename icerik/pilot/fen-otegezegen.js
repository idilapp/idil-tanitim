// iDil › Fen bilimleri › Ötegezegenler.
// Tümü özgün: Claude yazdı (13 Kasım 2026). ÖSYM sorusu, yayınevi ya da gazete metni kopyalanmadı, uyarlanmadı.
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir. Biçim: ../README.md.
// Olgular (yalnız olgular; metin özgün): pulsar çevresindeki ilk gezegenler (Wolszczan ve Frail, 1992); 51 Pegasi b (Mayor ve
// Queloz, Cenevre Üniversitesi, 1995; yörünge dönemi dört günden biraz uzun; 2019 Nobel Fizik Ödülü); Kepler uzay teleskobu
// (2009–2018; 2018'de yakıtı bitti); NASA'ya göre doğrulanmış ötegezegen sayısı 2022'de 5.000'i geçti; TRAPPIST-1 (2017);
// James Webb Uzay Teleskobu (Aralık 2021) ve WASP-39b'de karbondioksit (2022). Genel ve yerleşik bilgi: geçiş ve dikine hız
// yöntemleri; geçişte ışığın azalma oranı (Jüpiter boyunda gezegen yüzde 1 kadar, Dünya boyunda gezegen bunun yüzde birinden
// az); yaşanabilir bölge; dev ötegezegenlerin birçoğunun basık yörüngesi; oksijen ve metanın yaşam belirtisi olarak
// değerlendirilmesi; en yakın ötegezegenin uzaklığı.
// Görev 20 (25 Kasım 2026): çeviri çeldiricileri biçim kestirmesine karşı yeniden kuruldu.

const T = 'taslak';
const C = 'fen';
const U = 'Ötegezegenler';

const cards = [
  { code: 'virtually', title: 'neredeyse, hemen hemen; sanal olarak', pos: 'zarf', cefr: 'C1', ipa: '/ˈvɜːtʃuəli/',
    text: "Çoğunlukla mutlak anlamlı sözcüklerin önünde gelir: virtually all (neredeyse hepsi), virtually nothing, virtually unknown. Bilişimde 'sanal olarak' anlamı da var; sıfatı 'virtual' (sanal).",
    example: 'Virtually every seat in the hall was taken long before the concert began.',
    exampleTr: 'Konser başlamadan çok önce salondaki koltukların neredeyse hepsi dolmuştu.',
    synonyms: ['almost', 'practically'], family: ['virtual'] },
  { code: 'orbit', title: '(bir gök cisminin) çevresinde dolanmak; yörünge', pos: 'fiil', cefr: 'B2', ipa: '/ˈɔːbɪt/',
    text: "Fiil olarak edatsız kullanılır: the Moon orbits the Earth. İsim olarak 'yörünge' demektir: in orbit (yörüngede). Sıfatı 'orbital': orbital period (yörünge dönemi).",
    example: 'Many old satellites keep orbiting the Earth long after they have stopped working.',
    exampleTr: "Pek çok eski uydu, çalışmayı bıraktıktan çok sonra da Dünya'nın çevresinde dolanmayı sürdürür.",
    synonyms: ['circle', 'revolve around'], family: ['orbital'] },
  { code: 'detect', title: 'saptamak, algılamak, tespit etmek', pos: 'fiil', cefr: 'B2', ipa: '/dɪˈtekt/',
    text: "Gözle kolay fark edilmeyen bir şeyi bulmak ya da ölçmek: detect a signal, detect a disease early. Adı 'detection', aleti 'detector' (smoke detector: duman dedektörü).",
    example: 'Dogs can detect smells that humans cannot notice at all.',
    exampleTr: 'Köpekler, insanların hiç fark edemediği kokuları algılayabilir.',
    synonyms: ['discover', 'spot'], family: ['detection', 'detector', 'detectable'] },
  { code: 'faint', title: 'sönük, belli belirsiz, zayıf', pos: 'sıfat', cefr: 'B2', ipa: '/feɪnt/',
    text: "Işık, ses, koku ya da iz için kullanılır: a faint light, a faint smile. 'A faint hope' cılız bir umuttur. Fiil olarak 'bayılmak' demektir: She fainted in the heat.",
    example: 'When we opened the door, there was a faint smell of smoke in the kitchen.',
    exampleTr: 'Kapıyı açtığımızda mutfakta belli belirsiz bir duman kokusu vardı.',
    synonyms: ['weak', 'pale'], family: ['faintly'] },
  { code: 'infer', title: '(ipucundan, kanıttan) sonuç çıkarmak', pos: 'fiil', cefr: 'C1', ipa: '/ɪnˈfɜː(r)/',
    text: "'infer something from something' kalıbıyla kullanılır; geçmiş zamanda r ikilenir: inferred. Adı 'inference' (çıkarım). Okuma sorularındaki 'It can be inferred from the passage that' kalıbı buradan gelir.",
    example: 'From the look on her face, I inferred that the meeting had not gone well.',
    exampleTr: 'Yüzündeki ifadeden toplantının iyi geçmediği sonucunu çıkardım.',
    synonyms: ['deduce', 'conclude'], family: ['inference'] },
  { code: 'hostile', title: 'düşmanca; (ortam için) elverişsiz, yaşamaya uygun olmayan', pos: 'sıfat', cefr: 'C1', ipa: '/ˈhɒstaɪl/',
    text: "İnsan için 'düşmanca' (a hostile crowd), ortam için 'canlılığa elverişsiz' anlamındadır: a hostile environment. Adı 'hostility' (düşmanlık).",
    example: 'The expedition had to cross hundreds of kilometres of hostile desert.',
    exampleTr: 'Keşif ekibi, yüzlerce kilometre boyunca uzanan amansız bir çölü aşmak zorundaydı.',
    synonyms: ['unfriendly', 'harsh'], family: ['hostility'] },
  { code: 'dim', title: '(ışığı) kısmak; (ışık) azalmak, sönükleşmek', pos: 'fiil', cefr: 'C1', ipa: '/dɪm/',
    text: "Hem 'kısmak' (dim the lights) hem 'sönükleşmek' (the lights dimmed) anlamında kullanılır; geçmiş zamanda m ikilenir. Sıfat olarak 'loş, sönük' demektir: a dim room.",
    example: 'The lights in the theatre dimmed, and the audience fell silent.',
    exampleTr: 'Tiyatroda ışıklar kısıldı ve seyirciler sustu.',
    synonyms: ['fade', 'darken'], family: ['dimly', 'dimness'] },
  { code: 'confirm', title: 'doğrulamak; kesinleştirmek', pos: 'fiil', cefr: 'B2', ipa: '/kənˈfɜːm/',
    text: "Bilimde bir bulgunun başka gözlemlerle doğrulanmasıdır: a confirmed planet (doğrulanmış gezegen). Gündelik dilde randevuyu ya da rezervasyonu kesinleştirmek demektir. Adı 'confirmation'.",
    example: 'Please confirm your booking by replying to this email within two days.',
    exampleTr: 'Lütfen iki gün içinde bu e-postayı yanıtlayarak rezervasyonunuzu kesinleştirin.',
    synonyms: ['verify', 'corroborate'], family: ['confirmation', 'confirmed'] },
  { code: 'habitable', title: 'yaşanabilir, oturulabilir', pos: 'sıfat', cefr: 'C1', ipa: '/ˈhæbɪtəbl/',
    text: "Astronomide 'habitable zone' yaşanabilir bölge demektir. Karşıtı 'uninhabitable'. 'Inhabited' (içinde birileri yaşayan) ile karıştırma: oturulabilir bir ev boş da olabilir.",
    example: 'After the flood, many of the houses in the village were no longer habitable.',
    exampleTr: 'Selden sonra köydeki evlerin birçoğu artık oturulacak durumda değildi.',
    synonyms: ['liveable', 'inhabitable'], family: ['habitat', 'inhabit', 'uninhabitable'] },
  { code: 'wobble', title: 'sallanmak, yalpalamak; (isim) yalpalama, sallantı', pos: 'fiil', cefr: 'C1', ipa: '/ˈwɒbl/',
    text: "Dengesizce iki yana sallanmak: a wobbling table. İsim olarak da kullanılır: the wobble of a star (yıldızın yalpalaması). Sıfatı 'wobbly' (sallantılı).",
    example: 'The table wobbles because one of its legs is shorter than the others.',
    exampleTr: 'Masa sallanıyor, çünkü bacaklarından biri ötekilerden kısa.',
    synonyms: ['shake', 'sway'], family: ['wobbly'] },
  { code: 'point to', title: '-e işaret etmek, -i düşündürmek', pos: 'öbek fiil', cefr: 'B2', ipa: '/ˈpɔɪnt tuː/',
    text: "Özne çoğu zaman bir kanıt, bulgu ya da işarettir: the evidence points to a virus (kanıtlar bir virüse işaret ediyor). Kesin kanıt değil, güçlü bir ipucu bildirir; 'suggest' ve 'indicate' ile yakın anlamlıdır.",
    example: 'All the evidence points to a fault in the cooling system.',
    exampleTr: 'Bütün kanıtlar soğutma sistemindeki bir arızaya işaret ediyor.',
    synonyms: ['indicate', 'suggest'], family: [] },
  { code: 'speculation', title: '(kanıta dayanmayan) tahmin, kurgu; spekülasyon', pos: 'isim', cefr: 'C1', ipa: '/ˌspekjuˈleɪʃn/',
    text: "Kanıt olmadan yürütülen tahmin: pure speculation (tamamen tahmin). Fiili 'speculate (about/on)', sıfatı 'speculative'. Ekonomide 'vurgun amaçlı alım satım' anlamı da var.",
    example: "The minister's sudden resignation led to speculation about an early election.",
    exampleTr: 'Bakanın ani istifası, erken seçime gidileceği yönünde tahminlere yol açtı.',
    synonyms: ['guesswork', 'conjecture'], family: ['speculate', 'speculative'] },
];

const items = [
  // ---------- kelime ----------
  { id: 'fo-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: ['virtually', 'faint', 'orbit'],
    level: 'orta', cefr: 'C1', konu: ['zarf'],
    q: 'Because an Earth-like planet is extremely faint compared with the star it orbits, it is ---- impossible to photograph directly with the telescopes available today.',
    options: ['virtually', 'vitally', 'visibly', 'approximately', 'steadily'], answer: 0,
    explain: "'Virtually impossible' neredeyse imkânsız demektir: Dünya benzeri bir gezegen yıldızının yanında çok sönük kaldığı için bugünkü teleskoplarla doğrudan fotoğraflanması neredeyse olanaksız. 'Approximately' (yaklaşık) anlamca yakın görünür ama sayı ve miktarla kullanılır (approximately 40 years); 'impossible' gibi bir sıfatı nitelemez. Vitally (hayati biçimde; 'vitally important' kalıbında geçer) ve visibly (gözle görülür biçimde) biçimce benzer ama anlam kurmaz. Steadily (giderek, düzenli biçimde) bir değişimin nasıl ilerlediğini anlatır; 'impossible' gibi bir sıfatı nitelemez." },

  // ---------- dil bilgisi ----------
  { id: 'fo-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: ['wobble', 'detect'],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: "---- the instruments of the 1990s, which could detect only the strong pull of giant planets, today's best spectrographs can measure the wobble caused by planets just a few times heavier than Earth.",
    options: ['In contrast to', 'In line with', 'Owing to', 'In the absence of', 'By means of'], answer: 0,
    explain: "'In contrast to' (… -den farklı olarak) iki şeyi karşıt yönleriyle karşılaştırır: 1990'ların aygıtları yalnız dev gezegenlerin güçlü çekimini algılayabiliyordu; bugünün en iyi tayfçekerleri (spektrograflar) ise Dünya'dan yalnızca birkaç kat ağır gezegenlerin yol açtığı yalpalamayı ölçebiliyor. 'In line with' (… ile uyumlu olarak) iki dönemin aygıtlarını aynı kefeye koyar; eski aygıtların yalnız dev gezegenleri algılayabildiği bilgisiyle çelişir. 'Owing to' (… yüzünden) eski aygıtların yetersizliğini yeni ölçümün nedeni, 'by means of' (… aracılığıyla) küçük gezegenleri ölçemeyen aygıtları ölçümün aracı yapar. 'In the absence of' (… olmadığında) da anlam kurmaz: eski aygıtların yokluğu yeni ölçümü sağlamaz." },
  { id: 'fo-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['zarf cümleciği', 'so/such … that'],
    q: 'Even the nearest known exoplanet lies ---- long way from Earth ---- the fastest spacecraft ever built would need thousands of years to reach it.',
    options: ['so / that', 'such a / that', 'a so / that', 'such / that', 'too / to'], answer: 1,
    explain: "'Such a + sıfat + tekil isim + that' bir sonuç bildirir: bilinen en yakın ötegezegen bile Dünya'dan öyle uzakta ki şimdiye kadar yapılmış en hızlı uzay aracı oraya ancak binlerce yılda ulaşabilir ('such a long way … that'). 'So' ardından artikelsiz tekil isim alamaz; 'so long way' kurulamaz (doğrusu 'so far' ya da 'so long a way'). 'A so long way', Türkçedeki 'çok uzun bir yol' sırasının İngilizceye aktarılmasıdır ve yanlıştır. 'Such long way', tekil sayılabilir isimden önce gelmesi gereken 'a'yı düşürüyor. 'Too … to' ardından mastar ister; burada ise özneli, yüklemli bir cümle geliyor." },
  { id: 'fo-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlantı zarfı'],
    q: 'The Kepler space telescope stopped working in 2018, when it ran out of fuel; ----, astronomers have continued to find new planets in the data it sent back.',
    options: ['hence', 'nonetheless', 'likewise', 'otherwise', 'for instance'], answer: 1,
    explain: "İki cümle arasında beklentiye ters bir ilişki var: teleskop 2018'de yakıtı bitince çalışmayı bıraktı, yine de gökbilimciler gönderdiği verilerde yeni gezegenler bulmayı sürdürdü. Bunu 'nonetheless' (yine de, buna karşın) kurar. 'Hence' (bu yüzden) ilişkiyi neden-sonuca çevirir; teleskobun durması yeni bulguların nedeni değildir. 'Likewise' (aynı biçimde) bir benzerlik, 'for instance' (örneğin) bir örnek bekler. 'Otherwise' (aksi hâlde) bir koşul kurar; burada anlam vermez." },

  { id: 'fo-g4', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['eşleşik bağlaç'],
    q: "---- does a transit show how large a planet is, ---- when it is combined with measurements of the star's wobble, it can also reveal the planet's density, which indicates whether the planet is made mostly of rock or of gas.",
    options: ['Either / or', 'Both / and', 'Not only / but', 'No sooner / than', 'Neither / nor'], answer: 2,
    explain: "Boşluktan sonra devrik sıra var ('does a transit show': yardımcı fiil özneden önce), ikinci yarıda da 'also' geçiyor. Bu çiftlerden cümle başında devrik sıra alıp ikinci yarıda 'also' ile süren yalnız 'not only … but (also)'dur; ikinci yarı düz sırayla devam eder: geçiş yalnız gezegenin ne kadar büyük olduğunu göstermekle kalmaz, yıldızın yalpalamasının ölçümleriyle birleşince gezegenin yoğunluğunu da ortaya koyabilir. 'Either' ve 'both' cümle başında devrik sıra almaz. 'Neither' başta devrik sıra alabilir, ama 'nor' yeni bir cümle başlatınca orada da devrik sıra gerekir ('nor can it'); burada sıra düz, üstelik 'ikisi de değil' anlamı 'also' ile çelişir. 'No sooner … than' bir zaman ilişkisi kurar (… -er -mez); iki bilgi arasında böyle bir sıra yok ve 'than'dan sonraki yapı cümleyi bozar." },

  // ---------- cümle tamamlama ----------
  { id: 'fo-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['habitable', 'hostile'],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although several of the seven roughly Earth-sized planets orbiting the small star TRAPPIST-1 lie in or near its habitable zone, ----.',
    options: [
      'they are among the most promising places to search for signs of life beyond the Solar System',
      'astronomers have been eager to study their atmospheres with the most powerful telescopes available',
      'conditions on their surfaces could still turn out to be far too hostile for life to survive',
      'some of them may receive roughly as much energy from their star as Earth does from the Sun',
      'news of their discovery quickly made the system famous far beyond the world of astronomy',
    ], answer: 2,
    explain: "'Although' karşıtlık ister: gezegenlerin birkaçı yaşanabilir bölgede ya da yakınında, ama yüzeylerindeki koşullar yine de yaşam için fazlasıyla elverişsiz çıkabilir. Yaşanabilir bölge yalnız sıvı suyun bulunabileceği uzaklığı gösterir; yaşamı güvenceye almaz. Öteki seçenekler ilk yarıyı destekliyor ya da ona bir bilgi ekliyor: yaşam aramak için umut verici yerler olmaları, atmosferlerinin merakla incelenmesi, Dünya'nın aldığı kadar enerji alabilmeleri ve keşfin ünlenmesi. Hiçbiri karşıtlık kurmuyor." },
  { id: 'fo-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: ['speculation', 'detect', 'confirm'],
    level: 'orta', cefr: 'B2', konu: ['zaman'],
    q: '----, the idea that other stars might have planets of their own was little more than speculation.',
    options: [
      'Once the first planet orbiting a star like the Sun had been confirmed',
      'Ever since space telescopes such as Kepler began searching the sky for planets',
      'As soon as astronomers could measure the tiny wobble of nearby stars',
      'Now that thousands of planets beyond the Solar System have been catalogued',
      'Until astronomers developed instruments sensitive enough to detect distant planets',
    ], answer: 4,
    explain: "Ana cümle geçmişteki bir durumu anlatıyor: başka yıldızların da gezegeni olabileceği düşüncesi bir tahminden öteye geçmiyordu. Bu ancak gezegenler saptanmadan önceki dönem için doğrudur; 'until' (-e kadar) bu sınırı çizer: gökbilimciler uzak gezegenleri saptayacak kadar duyarlı aygıtlar geliştirene kadar. 'Once' (-dikten sonra) ve 'as soon as' (-er -mez) ilk bulgulardan sonraki döneme götürür; o dönemde düşünce artık tahmin değildi. 'Ever since' ve 'now that' hem zaman uyumunu bozar (ana cümlede present perfect ya da şimdiki zaman ister) hem de binlerce gezegenin bilindiği döneme işaret eder." },

  // ---------- çeviri ----------
  { id: 'fo-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: ['orbit'],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Whereas most of the planets in our Solar System travel in nearly circular orbits, many of the giant planets found around other stars follow markedly oval paths.',
    options: [
      "Güneş Sistemi'ndeki gezegenlerin çoğu neredeyse dairesel yörüngelerde dolanırken başka yıldızların çevresinde bulunan dev gezegenlerin birçoğu belirgin biçimde oval yollar izler.",
      "Güneş Sistemi'ndeki gezegenlerin çoğu neredeyse dairesel yörüngelerde dolanırken başka yıldızların çevresinde bulunan dev gezegenlerin birkaçı hafif oval yollar izler.",
      "Güneş Sistemi'ndeki gezegenlerin çoğu neredeyse dairesel yörüngelerde dolanırken başka yıldızların çevresinde bulunan dev gezegenlerin birçoğu hafif oval yollar izler.",
      "Güneş Sistemi'ndeki gezegenlerin çoğu neredeyse dairesel yörüngelerde dolanırken başka yıldızların çevresinde bulunan küçük gezegenlerin birçoğu belirgin biçimde oval yollar izler.",
      "Güneş Sistemi'ndeki gezegenlerin çoğu neredeyse dairesel yörüngelerde dolanırken başka yıldızların çevresinde bulunan küçük gezegenlerin birçoğu hafif oval yollar izler.",
    ], answer: 0,
    explain: "'Whereas' (-irken, oysa) iki durumu karşılaştırır: Güneş Sistemi'ndeki gezegenlerin çoğu neredeyse dairesel yörüngelerde dolanır, başka yıldızların çevresindeki dev gezegenlerin birçoğu ise belirgin biçimde oval yollar izler. Doğru çeviri karşıtlığın yönünü, nicelikleri ve 'markedly oval' (belirgin biçimde oval) nitelemesini korur. 'Dev gezegenlerin birçoğu hafif oval' diyen çeviri 'markedly' sözünü tersine çevirip karşıtlığı zayıflatıyor. 'Birkaçı hafif oval' seçeneğinde 'many' (birçoğu) niceliği de daralmış. 'Küçük gezegenlerin birçoğu belirgin biçimde oval' ifadesi nitelemeyi koruyor, ama 'giant' (dev) sözünü değiştiriyor. Küçük gezegenlerden söz edip yörüngeleri 'hafif oval' diye veren çeviride hem gezegen türü hem niteleme yanlış." },

  // ---------- okuma parçası (3 soru, YÖKDİL biçimi) ----------
  { id: 'fo-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T,
    cards: ['orbit', 'infer', 'wobble', 'confirm', 'detect'],
    level: 'zor', cefr: 'C1', title: "51 Pegasi b'den James Webb'e",
    text: "In 1995, Michel Mayor and Didier Queloz of the University of Geneva announced that they had found a planet orbiting 51 Pegasi, a star much like the Sun. They had not seen the planet itself; they inferred its presence from a tiny, regular wobble in the star's motion. Planets had already been found outside the Solar System in 1992, but those orbit a pulsar, the collapsed core left behind when a massive star explodes. The new planet was surprising for another reason. It was a gas giant, yet it circled its star in just over four days, far closer to it than Mercury is to the Sun. According to the theories of the time, giant planets could form only far from their stars, where it is cold enough for ice to survive, so the discovery forced astronomers to rethink how planetary systems change over time. Mayor and Queloz later shared the 2019 Nobel Prize in Physics. Since then, discoveries have multiplied. NASA's Kepler space telescope, which watched for the slight dimming of stars as planets passed in front of them, found thousands of candidates between 2009 and 2018, and by 2022 the number of confirmed exoplanets had passed 5,000. Now the focus is shifting from finding planets to studying them. The James Webb Space Telescope, launched in December 2021, can analyse starlight that has filtered through a planet's atmosphere during such a crossing. In 2022, it detected carbon dioxide in the atmosphere of WASP-39b, a hot gas giant, raising hopes that similar measurements would one day be possible for smaller, rocky worlds.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the planets found in 1992 ----.',
        options: [
          'were the first planets ever discovered around a star similar to the Sun',
          'were detected by the Kepler space telescope as they passed in front of their star',
          'earned their discoverers a share of the 2019 Nobel Prize in Physics',
          'orbit what remains of a massive star after it has exploded',
          'are gas giants that circle their star in just over four days',
        ], answer: 3,
        explain: "Parçaya göre 1992'de bulunan gezegenler bir pulsarın çevresinde dolanıyor; pulsar da büyük kütleli bir yıldız patladıktan sonra geriye kalan çökmüş çekirdektir. Güneş benzeri bir yıldızın çevresinde bulunan gezegen 51 Pegasi b'dir. Kepler 2009'da çalışmaya başladı. Nobel Ödülü'nü Mayor ve Queloz paylaştı. Yıldızını dört günden biraz uzun sürede dolanan gaz devi de 51 Pegasi b'dir." },
      { konu: ['ayrıntı'],
        q: 'It is stated in the passage that the James Webb Space Telescope ----.',
        options: [
          'can study starlight that has passed through the atmosphere of a planet',
          'found carbon dioxide in the atmosphere of a small, rocky planet in 2022',
          'discovered thousands of possible planets between 2009 and 2018',
          'was the first telescope to photograph a planet beyond the Solar System',
          'was designed mainly to find more planets like 51 Pegasi b',
        ], answer: 0,
        explain: "Parçaya göre James Webb Uzay Teleskobu, gezegen yıldızının önünden geçerken atmosferinden süzülen yıldız ışığını çözümleyebiliyor. Karbondioksit küçük ve kayalık bir gezegende değil, sıcak bir gaz devi olan WASP-39b'de bulundu; kayalık dünyalar için benzer ölçümler yalnız umut ediliyordu. 2009–2018 arasında binlerce aday bulan Kepler'dir. Teleskobun ilk ötegezegen fotoğrafını çektiği ya da 51 Pegasi b benzeri gezegenleri bulmak için tasarlandığı parçada geçmiyor." },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that ----.',
        options: [
          'if the theories of the time were right, 51 Pegasi b must have formed further from its star',
          'the planets found in 1992 were discovered by the same astronomers who later found 51 Pegasi b',
          '51 Pegasi b was the first planet ever found outside the Solar System',
          'the theories of the time may already have predicted planets like 51 Pegasi b',
          'most of the planets found by Kepler probably take no more than a few days to orbit their stars',
        ], answer: 0,
        explain: "Parçaya göre o dönemin kuramları dev gezegenlerin ancak yıldızlarından uzakta, buzun dayanabileceği soğuk bölgelerde oluşabileceğini söylüyordu. 51 Pegasi b ise yıldızına Merkür'ün Güneş'e olduğundan çok daha yakın bir gaz devi. Kuramlar doğruysa gezegen daha uzakta oluşmuş, sonra içeri doğru yer değiştirmiş olmalı; gökbilimcilerin gezegen sistemlerinin zamanla nasıl değiştiğini yeniden düşünmek zorunda kalması da bunu destekliyor. 1992'deki gezegenler 51 Pegasi b'den önce bulundu ve onları kimin bulduğu parçada söylenmiyor. Bulgu şaşırtıcıydı, yani kuramlar onu öngörmemişti. Kepler'in bulduğu gezegenlerin yörünge süresi parçada geçmiyor." },
    ] },

  // ---------- paragraf tamamlama ----------
  { id: 'fo-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: ['point to', 'detect'],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    q: "If life exists on a distant planet, it might reveal itself through the gases in that planet's atmosphere. On Earth, for example, plants and microbes constantly release oxygen; without them, most of this gas would gradually be used up in reactions with rocks and volcanic gases. ----. Astronomers therefore treat the detection of any single gas with caution. A combination of gases that react with each other and so should not last long together, such as oxygen and methane, would point much more strongly to the presence of life.",
    options: [
      'Finding large amounts of oxygen on another planet would therefore count as almost certain proof that something is living there',
      'Methane, too, is released in large amounts by living things on Earth, especially by microbes in wetlands and in the guts of cattle',
      'Yet oxygen could also build up on a lifeless world, for instance if starlight splits water molecules high in its atmosphere',
      'Most animals also depend on oxygen, which they need in order to release energy from the food they eat',
      'Life on Earth is thought to have begun more than three and a half billion years ago, although exactly how remains unknown',
    ], answer: 2,
    explain: "Boşluktan önce oksijenin Dünya'da canlılarca sürekli üretildiği, canlılar olmasa zamanla tükeneceği söyleniyor; boşluktan sonra 'therefore' ile tek bir gazın temkinle karşılandığı geliyor. Arada bu temkinin nedenini veren cümle gerekir: oksijen cansız bir gezegende de birikebilir. 'Yet' de önceki cümleyle karşıtlığı kuruyor. Oksijeni neredeyse kesin kanıt sayan seçenek sonraki cümleyle çelişir. Metanın da canlılarca üretilmesi ve hayvanların oksijene ihtiyacı konuyla ilgili ama temkin için bir neden vermiyor. Yaşamın ne zaman başladığı ise akışın dışında kalıyor." },

  // ---------- akışı bozan cümle ----------
  { id: 'fo-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: ['dim', 'orbit'],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'The transit method, which has found more exoplanets than any other technique, relies on a simple effect.',
      "When a planet passes between its star and an observer, it blocks a little of the star's light, causing a small dip in the star's brightness.",
      'The radial velocity method, by contrast, picks up the slight wobble of a star as an orbiting planet tugs it back and forth.',
      'The depth of this dip reveals how large the planet is: a Jupiter-sized planet dims a Sun-like star by about one per cent, an Earth-sized one by less than a hundredth of that.',
      "However, a transit can be seen only when the planet's orbit is lined up almost edge-on with our line of sight, so the method misses most planets.",
    ], answer: 2,
    explain: "Parça geçiş yöntemini anlatıyor: neye dayandığını, gezegen yıldızının önünden geçerken ışığın bir kısmını engellediğini, bu düşüşün derinliğinin gezegenin büyüklüğünü gösterdiğini ve yöntemin sınırını. III. cümle başka bir yönteme, yıldızın yalpalamasını ölçen dikine hız yöntemine geçerek akışı kesiyor. IV. cümledeki 'this dip' de II. cümledeki parlaklık düşüşüne bağlanıyor; III. cümlede düşüşten hiç söz edilmiyor." },
];

export default { id: 'fen-otegezegen', course: C, title: U, order: 3, cards, items };
