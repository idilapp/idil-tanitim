// iDil hap bilgi › Soru tipi formülleri (1. dosya): kelime, dil bilgisi, boşluklu metin, paragraf tamamlama, akışı bozan cümle.
// Biçim: ../README.md §3a; plan: ../analiz/hap-plani.md; örnek kart: soru-tipleri-2.js (tip-cumle-tamamlama).
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. Sayılar yalnız ../analiz/ dosyalarından; ÖSYM metni kullanılmaz.
const T = 'taslak';

export default [
  { id: 'tip-kelime', kategori: 'soru-tipi', type: 'ders', highYield: true, status: T,
    title: 'Kelime: boşluğa önce kendi sözcüğünü koy',
    hap: 'Şıklara bakmadan boşluğa kendi sözcüğünü koy: olumlu mu olumsuz mu, hangi edatla, hangi sözcüğün yanında? Sonra şıklarda o anlamı ve o kalıbı ara; tanıdık ya da benzer görünen sözcük doğru demek değildir.',
    body: [
      "YDS'de ve YÖKDİL'de ilk 6 soru kelime sorusudur ve sözcük türü sabit bir sırayla gelir: 1. ve 2. soru isim, 3. sıfat, 4. zarf, 5. fiil, 6. öbek fiil. Bu sıra YDS'de 2017'den, YÖKDİL'de 2019'dan beri neredeyse hiç bozulmadı. Soruyu okumadan hangi tür sözcük arayacağını bilirsin; tablo her türde önce neye bakacağını gösterir.",
      "Kelime sorusu yalnız sözcük bilgisini değil, bağlamı okumayı da ölçer. Cümlede cevabı destekleyen bir ipucu çoğu zaman vardır: iki noktadan sonra gelen kanıt, because ya da but ile bağlanan öteki yarı, 'as anyone … will know' gibi bir açıklama. Sözcüğü bilmesen de ipucundan istenen anlamı çıkarırsın; sonra şıklarda o anlamı ararsın.",
      "Çeldiricilerin en sık türü biçimce benzer sözcüktür: prosperity yerine posterity. Ardından, neredeyse eşit payla, iki tür gelir: anlamca yakın ama bu kalıba uymayan sözcük (approximately 'yaklaşık' demektir, virtually'ye yakın durur, ama impossible ile kullanılmaz) ve bağlama, çoğunlukla da eşdizime uymayan sözcük. iDil'de şıklarda ünitenin kartlarından sözcükler de bulunur: kimi doğru cevaptır, kimi çeldirici.",
    ],
    adimlar: [
      'Numaradan sözcük türünü bil. Şıkları kapat, cümleyi sonuna kadar oku ve boşluğa Türkçe ya da İngilizce kendi sözcüğünü koy.',
      "Yönü belirle: boşluk olumlu mu, olumsuz mu bir sözcük istiyor? Öteki yarı (because, but, so, iki nokta) yönü söyler: bir tehlikeyi anlatan cümlede 'bozmak', bolluğu anlatan cümlede 'refah' aranır.",
      'Boşluğun iki yanındaki kalıba bak: ardından gelen edat (deprived of), nitelenen sözcük (virtually impossible), fiilin nesnesi (expel the algae). Kalıba uymayan şıkkı ele.',
      'Biçimce benzeyen şıkları kök ve ek ayırarak oku: prosper (gelişmek, zenginleşmek) + -ity → prosperity, refah; post- (sonra) → posterity, gelecek kuşaklar. Anlamını söyleyemediğin bir şıkkı yalnız tanıdık geldiği için seçme.',
      'Kalan şıkkı boşluğa yerleştirip cümleyi baştan oku. İki şık kaldıysa ipucuna dön: hangisi o kanıtla daha doğrudan bağ kuruyor?',
    ],
    tablo: {
      sutunlar: ['Soru', 'Tür', 'Önce neye bak?'],
      satirlar: [
        ['1–2', 'isim', 'Ardındaki of öbeğine ve kanıta: strains of a bacterium, descendants of shepherds'],
        ['3', 'sıfat', 'Nitelediği isme ve kanıta: hundreds of species → a diverse community'],
        ['4', 'zarf', 'Nitelediği sıfata ya da fiile, kalıplaşmış ikiliye: virtually impossible, notoriously hard'],
        ['5', 'fiil', 'Nesnesine ve edatına: deprive someone of sleep, undermine a view'],
        ['6', 'öbek fiil', 'Parçacığın yönüne: up artış ya da tamamlanma (build up, use up), out yok olma (die out, phase out)'],
      ],
    },
    tuzaklar: [
      'Biçimce benzer şık. Kelime çeldiricilerinin en sık türü: unanimous, anonymous, magnanimous (sb-k1); diverse, adverse, averse (sm-k1). Harflerin çoğu ortak, anlamlar bambaşka.',
      "Edat yalnız eler, seçtirmez. su-k1'de boşluktan sonra of var; paralysed of almadığı için elenir. Ama relieved, convinced ve accused da of alır; aralarından anlam seçer.",
      "Anlamca yakın ama kalıba uymayan şık. approximately çoğunlukla sayı ve miktarla kullanılır (approximately forty years); 'neredeyse imkânsız' için kalıp virtually impossible'dır (fo-k1).",
      "Yönü ters şık. su-k2'de cümle uykulu araç kullanmanın tehlikesini anlatıyor ve olumsuz bir fiil istiyor; enhance, restore ve consolidate olumlu oldukları için elenir.",
      "Tanıdık sözcük tuzağı. su-k2'de impair da consolidate da ünitenin kartlarındandır; yalnız biri cümleye uyar. Kartını gördüğün ya da iyi bildiğin bir sözcük, yalnız bu yüzden cevap değildir.",
    ],
    ornekler: [
      { soru: 'gk-k1', not: "İki noktadan sonraki kanıt cevabı verir: ticaret gelişti, sultan pek çok yeni yapı yaptırdı. Boşluğa kendi sözcüğünü koyarsan 'bolluk, refah' dersin; şıklarda bunu prosperity karşılar. posterity ve austerity biçimce benzer tuzaklardır." },
      { soru: 'fo-k1', not: 'Zarf sorusu: önce nitelenen sözcüğe bak. impossible ile kalıplaşan zarf virtually. vitally ve visibly biçimce benzer, approximately anlamca yakın çeldiricidir.' },
    ],
    veri: [
      "Sınavdaki yeri: YDS ve YÖKDİL'de 6 soru (1–6), YDT'de 5 (analiz/dagilim.md §2).",
      "Sıra: isim, isim, sıfat, zarf, fiil, öbek fiil (analiz/agirlik.json, sablon.kelime_sira). 2017–2026 YDS'lerinde 31 sorunun 29'unda, YÖKDİL'de 36 sorunun hepsinde tuttu. 2013–2016 YDS'lerinde ikinci isim yerine ikinci bir öbek fiil vardı (analiz/dagilim.md §3.1; analiz/tahmin.md §6).",
      "Yanlış şıkların türü: biçimce benzer %38, anlamca yakın %26, bağlama uymaz %26, mantık ters %10 (analiz/agirlik.json, celdirici.tur.kelime). 'Bağlama uymaz' etiketi yalnız YÖKDİL kelime sorularında var; etiketleyicinin notlarının bir kısmına göre eşdizim tuzağı demek. Kümeler ayrı etiketlendiği için iki etiket büyük ölçüde aynı türü anlatıyor olabilir (analiz/dagilim.md §5).",
      "Seviye: kelime sorularının %59'u B2, %30'u C1, %4'ü C2; dil bilgisinde C1 payı yalnız %9 (analiz/agirlik.json, cefr.tur). Sözcük türü bellidir, ama sözcüklerin düzeyi dil bilgisinden belirgin biçimde yüksektir.",
    ],
    ref: 'analiz/dagilim.md §2, §3.1, §5; analiz/tahmin.md §6; analiz/agirlik.json' },

  { id: 'tip-dilbilgisi', kategori: 'soru-tipi', type: 'ders', highYield: true, status: T,
    title: 'Dil bilgisi: önce biçim, sonra anlam',
    hap: 'Önce boşluktan sonrasının biçimine bak: tam cümle mi, isim mi, -ing mi, yalın fiil mi? Biçime uymayan şıkları at, kalanlarda iki yan arasındaki ilişkiye ad koy; iki boşluklu soruda emin olduğun boşlukla başla.',
    body: [
      "Dil bilgisi YDS'de 10 soru (7–16), YÖKDİL'de 14 soru (7–20). Bölümün içi numaraya bağlı bir şablonla gelir: hangi numarada fiil yapısı, edat, bağlaç ya da eşleşik bağlaç sorulacağı bellidir. Numarayı görünce neye bakacağını da bilirsin; tablo bunu gösteriyor.",
      'Yanlış şıkların büyük bölümü, neredeyse eşit büyüklükte iki gruba ayrılır. Birinci grup dil bilgisi açısından kurulamaz: despite ardından tam cümle, give up ardından mastar. İkinci grup kusursuz kurulur ama iki yan arasındaki mantığı ters çevirir: neden yerine karşıtlık, koşul yerine amaç. Geri kalanlar genellikle zaman uyumunu bozar. Bu yüzden her soruda iki süzgeç kullan: önce biçim, sonra anlam.',
      "YDS'de 10 sorunun 6'sı, YÖKDİL'de 14 sorunun 10'u edat ya da bağlaç (bağlantı zarfı dahil) sorusudur. Şıkların beşi de edatsa biçim pek eleme yapmaz; sonucu anlam belirler. Boşluğun iki yanını Türkçe birleştir: '… yüzünden', '… -e rağmen', '… yokluğunda', '… pahasına'. Kulağa saçma gelen birleşmeyi at.",
    ],
    adimlar: [
      'Numaraya bak ve aileyi bil; tablo her ailede önce neye bakacağını gösterir.',
      'Boşluktan sonrasını adlandır. Özneli, yüklemli cümle → bağlaç (although, unless, once). İsim öbeği ya da -ing → çoğunlukla edat (despite, in terms of). İstisna: although, while, when, once, if ve unless kısaltılmış cümlede -ing ya da V3 alır ve bağlaç kalır: While waiting for the results, … / If left untreated, …; during ise yalnız isim alır. Boşluğun hemen ardından virgül geliyorsa (cümle başında ya da noktalı virgülden sonra) → bağlantı zarfı (however, consequently).',
      'İki boşluklu soruda emin olduğun boşlukla başla. Bir zaman sözcüğü (ago, since, by the time) ya da bir fiil kalıbı (give up + -ing, be likely to) tek başına birkaç şıkkı eleyebilir.',
      'Kalan şıklarda iki yan arasındaki ilişkiye ad koy: karşıtlık, neden, sonuç, koşul, amaç, zaman. Her şıkkı Türkçe birleştirip oku; ilişkiyi ters kuran şıkkı at.',
      'Son denetim: fiilin edatı doğru mu (depend on → on which)? Yapı etken mi, edilgen mi (köprüyü biri yapar → the bridge was built)? Eşleşik bağlaçta cümlenin sonu kaç seçeneğin geçerli olduğunu söylüyor?',
    ],
    tablo: {
      sutunlar: ['Aile', 'YDS', 'YÖKDİL', 'Önce neye bak?'],
      satirlar: [
        ['Fiil yapıları', '7–9', '7–8', 'Zaman sözcüğüne (ago, since, by the time) ve boşluktan sonraki fiil biçimine'],
        ['Edat', '10–11, 16', '9–11, 17–18', 'Ardından isim ya da -ing gelir; iki yan arasındaki anlama'],
        ['Bağlaç ve bağlantı zarfı', '12–14', '12–16', 'Ardından tam cümle mi geliyor, virgül mü?'],
        ['Eşleşik bağlaç', '15', '19', 'Cümlenin sonuna: seçeneklerden biri mi, ikisi de mi, hiçbiri mi?'],
        ['Sıfat cümleciği', '–', '20', 'Edatı seçen fiile ya da isme: depend on → on which, the extent to which'],
      ],
    },
    tuzaklar: [
      "Doğru anlam, yanlış biçim. although ve even though ardından cümle ister; despite ve in spite of ardından isim ya da -ing. Cümle ancak the fact that ile bağlanır: despite the fact that the evidence is strong. 'Despite the evidence … is strong' kurulamaz (su-g2). 'despite of' diye bir yapı yoktur.",
      "Doğru biçim, ters mantık. sd-g2'de in spite of da edattır ve biçime uyar; ama baskın dil, ailelerin önünde bir engel değil, yeğledikleri dildir.",
      'Zaman sözcüğünü kaçırmak. ago present perfect ile kullanılmaz: The bridge was built a century ago. since ile bugüne uzanan ana cümle present perfect ister: Since 2010, prices have risen sharply. by the time + geçmiş zaman, ana cümlede çoğu zaman past perfect ister: By the time help arrived, the fire had spread.',
      "Bağlantı zarfı yerine bağlaç. '; ----,' kalıbında bağlaç değil bağlantı zarfı ara: however, therefore, nevertheless, consequently. although ve because ardından virgülle değil, doğrudan bir cümleyle gelir.",
      'Eşleşik bağlaçta sayıyı karıştırmak. either … or ikisinden biri, neither … nor hiçbiri, both … and ikisi de demektir. both … and ile not only … but also aynı anlamı taşır; ikisi birlikte şıktaysa ve ikisi de cümleye dil bilgisi açısından uyuyorsa ikisi de elenir. Devrik yapı ya da fiil uyumu birini dışlıyorsa bu eleme işlemez: cümle başındaki devrik yapıya (Not only did …) yalnız not only uyar.',
    ],
    ornekler: [
      { soru: 'su-g1', not: 'İki boşluk, iki kalıp. give up ardından -ing ister: bu tek bilgi to drink ya da drink içeren üç şıkkı birden eler. Kalan iki şıktan be likely to + yalın fiil olanı doğrudur.' },
      { soru: 'sa-g1', not: 'İki süzgeç bir arada. Boşluktan sonra yalnız bir isim öbeği var: bağlaç olan Even though biçimden elenir. Kalan edatlardan in spite of ve in the absence of mantığı ters kurar, prior to cümledeki now ile çelişir.' },
      { soru: 'fm-g2', not: "YÖKDİL'in 20. sorusu sıfat cümleciğidir; bu soru o tipe bir örnek. Cümlecikteki fiil depend on: edat ya ilgi zamirinin önüne geçer (on which) ya da cümleciğin sonunda kalır (which corals depend on). Burada sonda edat yok, demek ki on which. which tek başına eksik kalır, in which yanlış edatı taşır." },
    ],
    veri: [
      "Şablon: YDS'de 3 fiil yapısı, 3 edat, 3 bağlaç ya da bağlantı zarfı, 1 eşleşik bağlaç; YÖKDİL'de 2 fiil yapısı, 5 edat, 5 bağlaç ya da bağlantı zarfı, 1 eşleşik bağlaç, 1 sıfat cümleciği. Etiketlenen 64 YDS ve 72 YÖKDİL sorusunun hepsi kendi numara bloğuna düştü (analiz/dagilim.md §3.2; analiz/tahmin.md §4).",
      'Fiil yapısı sorularının içi (n=31): zaman ve zaman uyumu %45, kip %18, isim-fiil ve mastar %15, edilgen %11, ortaç öbeği %10, koşul %2 (analiz/dagilim.md §3.2).',
      'Konu payları (YDS ve YÖKDİL ortalaması): edat %33, bağlaç %24, eşleşik bağlaç %9, bağlantı zarfı %5, zarf cümleciği %4, sıfat cümleciği %4; kalan %22 fiil yapıları (analiz/agirlik.json, konu.dilbilgisi).',
      'Yanlış şıkların türü: dil bilgisi uyumsuz %42, mantık ters %41, zaman uyumsuz %14 (analiz/agirlik.json, celdirici.tur.dilbilgisi).',
    ],
    ref: 'analiz/dagilim.md §3.2; analiz/tahmin.md §4; analiz/agirlik.json' },

  { id: 'tip-bosluklu', kategori: 'soru-tipi', type: 'ders', highYield: true, status: T,
    title: 'Boşluklu metin: ipucu komşu cümlede',
    hap: 'Boşluklu metni cümle cümle değil, bütün olarak çöz: önce parçayı baştan sona oku, sonra her boşlukta bir önceki ve bir sonraki cümleye bak. Bağlantı zarfı boşluğu iki cümle arasındaki ilişkiyi sorar.',
    body: [
      "YDS'de 17–26. sorular iki ayrı boşluklu metinden oluşur; her parçada 5 boşluk vardır. YÖKDİL'de de 10 soru bu türdendir (21–30). Şıklar dil bilgisi ve kelime sorularındakilere benzer; fark, ipucunun boşluklu cümlenin dışında da olabilmesidir. Sonraki cümle 'this change' diyorsa boşluktaki fiil bir değişiklik anlatmalıdır.",
      'Boşlukların yaklaşık üçte biri edattır; ardından bağlaç ve bağlantı zarfı, isim-fiil ve mastar, kip gelir. Beşte biri kadarı kelime boşluğudur. Yani bu bölüm, dil bilgisi bölümünün bir parçaya yayılmış hâlidir: orada işleyen iki süzgeç (önce biçim, sonra anlam) burada da işler.',
      'Etiketlenen boşlukların büyük bölümü B2 düzeyinde. Zorluk çoğu zaman bilgiden değil, dikkatten gelir: boşluklu cümleyi tek başına okursan komşu cümledeki ipucunu kaçırırsın.',
    ],
    adimlar: [
      'Önce parçayı boşluklara takılmadan baştan sona oku: konu ne, anlatım hangi zamanda (geçmişte bir öykü mü, bugüne dair bir bilgi mi), yazar nereye varıyor?',
      'Her boşlukta üç cümleyi birlikte oku: bir öncekini, boşluklu cümleyi ve bir sonrakini. Sonraki cümlenin ilk sözcükleri (this change, these, however) boşluğun ne istediğini sık sık ele verir.',
      'Boşluğun yerine ve ardından gelene bakarak ne sorulduğunu adlandır (tablo). Bağlantı zarfıysa önceki cümleyle ilişkiye ad koy: karşıtlık, sonuç, ekleme, benzerlik.',
      'Kalan şıkları anlamla ele: edatta iki yan arasındaki ilişki, fiilde kalıp (prevent someone from doing, result in, consist of), kelimede eşdizim.',
      'Beş boşluğu doldurunca, zaman kalırsa parçayı bir kez daha hızla oku: anlatım akıyor mu, zamanlar ve gönderimler tutarlı mı?',
    ],
    tablo: {
      sutunlar: ['Boşluk nerede, ardından ne var?', 'Ne sorulur?', 'Örnek'],
      satirlar: [
        ['Cümle başında, hemen ardından virgül', 'bağlantı zarfı', 'However, … / Therefore, … / Similarly, …'],
        ['Ardından isim öbeği ya da -ing', 'çoğunlukla edat; while ve when + -ing ise bağlaçtır', 'Despite the cost, … / because of the delay / While waiting, …'],
        ['Ardından özneli, yüklemli cümle', 'bağlaç', 'Although the cost was high, …'],
        ['Bir fiilin hemen ardında (decided ----)', 'isim-fiil ya da mastar', 'decided to leave, avoided paying'],
        ['Fiil yerinde, ardından edat ya da nesne', 'kelime ya da kalıp', 'rely on, prevent them from leaving'],
      ],
    },
    tuzaklar: [
      "Yalnız boşluklu cümleyi okumak. 'The drug worked well in mice. ----, it failed in the first human trials.' Boşluklu cümleye tek başına bakınca her bağlantı zarfı uyar gibidir; However'ı seçtiren önceki cümledir.",
      "Biçime uymayan bağlaç ya da edat. although ardından isim öbeği, despite ardından tam cümle gelmez: Despite the rain, … ama Although it was raining, … Cümleyi despite'a ancak the fact that bağlar: Despite the fact that it was raining, …",
      'İkisi de kurulur, anlam seçer. go on to do bir işten sonra gelen yeni adımdır: After the war, she went on to become a surgeon (savaştan sonra cerrah oldu). go on doing aynı işi sürdürmektir: She went on working until midnight (gece yarısına dek çalışmayı sürdürdü).',
      "Geçmiş anlatıda kip. Öykü geçmişte geçiyorsa o noktadan ileriye bakan kip would'dur: The boy who left the village in 1950 would later become its first doctor. will bugüne göre konuşur.",
      'Biçimce benzer kelime şıkları. adopt (benimsemek) ile adapt (uyarlamak, uyum sağlamak) gibi çiftlerde kalıba bak: adopt a new technology, adapt to a new climate.',
    ],
    ornekler: [
      { soru: 'fp-z1-a3', not: "İpucu sonraki cümlede: o cümle 'this change' (bu değişiklik) diyor. Demek ki Yoshino anotta bir değişiklik yaptı: metalik lityumun yerine karbon esaslı bir malzeme koydu. compared ve associated da with alır ama bir değişiklik anlatmaz." },
      { soru: 'ga-z1-a3', not: "Bağlantı zarfı boşluğu. Önceki cümle Maltz'ın üç haftayı kaba bir alt sınır olarak sunduğunu, boşluklu cümle bu ayrımın zamanla kaybolduğunu söylüyor: karşıtlık. Therefore ve Similarly bu ilişkiyi kuramaz." },
      { soru: 'sa-z1-a4', not: "İki yapı da kurulabilir: went on to share ve went on sharing. Ama 1945 Nobel Ödülü'nü paylaşmak bir kez olan bir olaydır, sürdürülen bir iş değildir; doğru olan, bir işin ardından gelen yeni adımı anlatan to share." },
    ],
    veri: [
      "Sınavdaki yeri: YDS'de 10 soru (17–26), iki parça ve her parçada 5 boşluk; YÖKDİL'de 10 soru (21–30); YDT'de 5 (analiz/dagilim.md §2, §3.6). YÖKDİL'in bu bloğu yüzde 10 kitapçıklarında yayımlanmadı; türü boş kalan numaralardan çıkarıldı, payları YDS'den aktarıldı (analiz/agirlik.json).",
      'Boşluk türleri: edat yaklaşık üçte bir (%33,5), bağlaç %11, bağlantı zarfı %10, isim-fiil ve mastar %9, kip %6; fiil, isim, öbek fiil ve zarf boşlukları birlikte yaklaşık beşte bir (analiz/agirlik.json, konu.bosluklu; analiz/dagilim.md §3.6).',
      'Beklenen sayı: 10 boşlukta yaklaşık 3 edat (%80 aralık 1–5) (analiz/tahmin.md §5.3).',
      'Yanlış şıkların türü: mantık ters %40, dil bilgisi uyumsuz %31, anlamca yakın %14, zaman uyumsuz %9, biçimce benzer %6 (analiz/agirlik.json, celdirici.tur.bosluklu).',
      "Seviye: %87 B2, %10 B1, %3 C1 (ajan tahmini; analiz/agirlik.json, cefr.tur.bosluklu). Veri tam YDS ve YDT kitapçıklarından; tam YDS'lerde seviye türe göre verildiği için yaklaşıktır (analiz/dagilim.md §6).",
    ],
    ref: 'analiz/dagilim.md §2, §3.6, §6; analiz/tahmin.md §5.3; analiz/agirlik.json' },

  { id: 'tip-paragraf', kategori: 'soru-tipi', type: 'ders', highYield: true, status: T,
    title: 'Paragraf tamamlama: boşluktan sonraki cümle kilittir',
    hap: 'Boşluktan sonraki cümlenin ilk sözcüklerine bak: this, these, such, it, however ya da therefore boşluktan ne beklendiğini söyler. Doğru cümle hem öncekine bağlanır hem de sonrakinin gösterdiği şeyi verir.',
    body: [
      "YDS'de 4 (72–75), YÖKDİL'de 6 soru (54–59). Kısa bir paragrafta bir cümle eksiktir; boşluğa giren cümleyi seçersin. Şıklar genellikle paragrafın konusundan söz eder ve çoğu tek başına doğru bir cümledir. Bu yüzden 'konuya uyuyor mu?' diye değil, 'iki komşu cümleye de bağlanıyor mu?' diye sor.",
      'En güçlü ipucu boşluktan sonraki cümlededir. Bu cümlede bir gönderim varsa (this approach, those batteries, during this stage, its builders) boşlukta bir şeyin tanıtılmış olması gerekir: bir yöntem, bir pil türü, bir evre, tek bir yapı. Cümle bir bağlantı sözcüğüyle açılıyorsa (however, therefore, this is why) boşluk o ilişkinin öbür ucunu kurmalıdır. Tablo başlıca açılışları gösterir.',
      'Yanlış şıkların yarısından fazlası kısmen doğrudur: konu aynı, bilgi doğru, ama akışa oturmaz. Böyle bir şık çoğunlukla komşulardan yalnız birine bağlanır ya da ikisine bağlanıp içerikle çelişir. Seviye etiketlerinde C1 payı yüksek (yaklaşık yarısı; ama tam YDS kitapçıklarında seviye türe göre verildi). Tür zorlayıcıdır; ipucunu önce boşluğun hemen iki yanında ara.',
    ],
    adimlar: [
      'Paragrafı baştan sona oku ve konusunu tek cümleyle söyle: paragraf neyi anlatıyor, nereye varıyor?',
      'Boşluktan sonraki cümlenin ilk sözcüklerini incele. Gönderim (this, these, such, it, its, they, those) varsa boşluk neyi tanıtmalı? Bağlantı sözcüğü (however, therefore, this is why, as a result) varsa boşlukla o cümle arasında hangi ilişki kurulmalı?',
      'Boşluktan önceki cümlenin son düşüncesini belirle: boşluk oradan doğal biçimde sürmeli.',
      'Her şıkkı iki yönden sına: öncekine bağlanıyor mu, sonrakinin beklediğini veriyor mu? Yalnız bir yöne bağlanan şıkkı ele.',
      'Boşluk paragrafın başındaysa konu cümlesini ara: sonraki cümlelerin gösterdiği şeyi ilk kez tanıtan genel bir cümle. Sondaysa sonucu ya da toparlamayı ara; paragrafı yeni bir konuya açan şık büyük olasılıkla yanlıştır.',
    ],
    tablo: {
      sutunlar: ['Sonraki cümle şöyle açılıyorsa', 'Boşluk şunu vermeli'],
      satirlar: [
        ['this, these, such + isim (this method, such cases)', 'O ismi ilk kez tanıtan cümleyi: bir yöntem, bir durum'],
        ['it, its, they, those', 'Sayısı tutan bir şeyi tanıtan cümleyi: tekil ya da çoğul'],
        ['however, yet, by contrast', 'Sonraki cümlenin tersini: olağan durum, beklenti ya da eski görüş'],
        ['therefore, this is why, as a result', 'Sonucun nedenini'],
        ['for example, for instance', 'Örneklenecek genel bir yargıyı'],
      ],
    },
    tuzaklar: [
      "Yalnız geriye bağlanan şık. gg-p1'de 'Many of these places lie along coasts …' mola yerlerine doğru bir gönderim yapar; ama sonraki cümle 'This is why' ile bir gerekçe bekliyor ve bu şık gerekçe vermiyor.",
      "Aynı gönderimi karşılayan ama içerikle çelişen şık. su-p1'de derin uyku şıkkı da bir evre tanıtır ve 'During this stage' ile uyuşur; ama o evrede beyin yavaşlar, sonraki cümle ise beynin neredeyse uyanıkken kadar etkin olduğunu söylüyor.",
      "Yönü ters çeviren bağlantı sözcüğü. Şıkta however, by contrast ya da therefore varsa paragrafın yönüne uyup uymadığına bak: sa-p1'de 'Unlike antibiotics, however, …' diye başlayan şık, aşıları öven akışı birden tersine çevirir.",
      'Tekil ve çoğul. Sonraki cümle its ya da it diyorsa boşluk tek bir şey tanıtmalı; they ya da those diyorsa birden çok şey. Sayısı tutmayan şık elenir; sayısı tutan iki şık kalırsa içerik seçer.',
      "Paragrafla çelişen şık. gk-p1'de kervanların çoğunun yalnız geceleri yol aldığını söyleyen şık, tüccarların geceleri sağlam duvarların arkasında geçirdiği bilgisiyle çelişir. Paragraftaki bir bilgiyi yalanlayan şık, ne kadar ilgili görünse de elenir.",
    ],
    ornekler: [
      { soru: 'sm-p1', not: "Sonraki cümle 'this approach' diyor ve bu yöntemin kulağa hoş gelmeyebileceğini söylüyor; son cümle de laboratuvarda üretilen bakteri karışımlarının bir gün aynı işi ('the same job') görüp göremeyeceğini soruyor. İki gönderimi birden karşılayan tek şık dışkı nakli. Güçlü antibiyotik şıkkı da bir yöntem, ama ne kulağa nahoş gelir ne de laboratuvardaki bakteri karışımları onun işini görebilir; 'tek kürde kalıcı olarak temizler' sözü de enfeksiyonun tekrar tekrar döndüğü bilgisiyle çelişiyor." },
      { soru: 'sd-p1', not: "Sonraki cümle 'At the other end of the scale' (ölçeğin öbür ucunda) diye açılıyor ve çok az kişinin konuştuğu dillerden söz ediyor. Boşluk ölçeğin ilk ucunu vermeli: dünya nüfusunun yarısından fazlasının konuştuğu yirmi dört kadar dil." },
      { soru: 'fp-p1', not: "'Those batteries' lityum iyondan başka, daha eski bir pil türünü gösteriyor; son cümle lityum iyon pillerde bu sorunun olmadığını söylüyor. Lityum iyondan söz eden şıktan sonra 'Those batteries' lityum iyonu gösterir ve son cümleyle çelişir." },
    ],
    veri: [
      "Sınavdaki yeri: YDS'de 4 soru (72–75), YÖKDİL'de 6 (54–59), YDT'de 5 (analiz/dagilim.md §2).",
      'Yanlış şıkların türü: kısmen doğru %59, anlamca yakın %22, metinde yok %10, mantık ters %9 (analiz/agirlik.json, celdirici.tur.paragraf-tamamlama).',
      'Ölçülen beceri: akış %69, gönderim %27 (analiz/agirlik.json, konu.paragraf-tamamlama).',
      'Seviye: B2 %53,5, C1 %46,5. C1 payı en yüksek üç tür okuma (%61), yakın anlam (%53) ve paragraf tamamlama (ajan tahmini; analiz/agirlik.json, cefr.tur). Tam YDS kitapçıklarında seviye türe göre verildiği için bu pay ve sıralama yaklaşıktır (analiz/dagilim.md §6).',
    ],
    ref: 'analiz/dagilim.md §2, §5, §6; analiz/agirlik.json' },

  { id: 'tip-bozan', kategori: 'soru-tipi', type: 'ders', highYield: true, status: T,
    title: 'Akışı bozan cümle: konu aynı, odak başka',
    hap: 'Bozan cümle çoğu zaman konudan değil, odaktan sapar: aynı sözcükleri taşıyabilir ama parçanın sorusuna cevap vermez. I. cümleden odağı çıkar, gönderim zincirini izle; şüpheliyi çıkarınca akış düzeliyorsa onu bulmuşsundur.',
    body: [
      "YDS'de son 5 soru (76–80), YÖKDİL'de 6 soru (60–65). Numaralı beş cümleden biri parçanın akışını bozar; onu bulursun. Şıklar cümle numaralarıdır, bu yüzden sıra da bilgi verir: etiketlenen 94 ÖSYM sorusunun 84'ünde bozan cümle II., III. ya da IV. cümleydi. I. cümle çoğu zaman konu cümlesidir ve neredeyse hiç bozan değildir.",
      'Bozan cümle çoğunlukla konu dışı değildir: parçanın genel konusundan gelir, aynı anahtar sözcüğü taşıyabilir ve tek başına doğru bir bilgi verir. Fark odaktadır: parça bir grubu anlatırken başka bir gruba, bir yöntemi anlatırken başka bir yönteme, bir olayın nedenlerini anlatırken o olayın başka bir yönüne geçer. Tablo bu kaymaların özgün örneklerini gösterir.',
      'En güçlü araç gönderim zinciridir. İyi bir parçada her cümle bir öncekine tutunur: this, these, such, the method, they, however. Bozan cümle çıkarılınca zincir kopmaz, tersine düzelir: sonraki cümlede bir gönderim varsa bozanın önündeki cümleye bağlanır.',
    ],
    adimlar: [
      "I. cümleyi oku ve parçanın odağını bir soru gibi yaz: 'Bu yapılar neden terk edildi?', 'Bu yöntem nasıl işler?'",
      'Her cümleyi bu soruya göre sına: cevaba bir adım ekliyor mu, yoksa aynı konudan başka bir soruya mı cevap veriyor?',
      'Gönderimleri izle: this, such, the method, they neyi gösteriyor? Bir gönderim aradaki cümleyi atlayıp daha önceki bir cümleye bağlanıyorsa aradaki cümle şüphelidir.',
      'Şüpheli cümleyi çıkar; önceki ve sonraki cümleyi art arda oku. Akış düzeliyorsa bozan odur; düzelmiyorsa ikinci şüpheliyle dene.',
      'Karar veremiyorsan oranı kullan: II–IV daha olası. V. cümleyi ancak öteki dördü akışa oturuyorsa seç; I. cümleyi en son düşün.',
    ],
    tablo: {
      sutunlar: ['Kayma', 'Parça şunu anlatırken', 'Bozan cümle şuna geçer'],
      satirlar: [
        ['Başka grup', 'çocukların ana dilini nasıl edindiği', 'yetişkinlerin yabancı dil kursları'],
        ['Başka yöntem', 'güneş panelinin elektrik üretmesi', 'rüzgâr türbininin elektrik üretmesi'],
        ['Başka yön', 'bir köprünün nasıl yapıldığı', 'köprünün bugünkü trafik yükü'],
        ['Tarihe ya da genele kaçış', 'çayın sağlığa etkileri', "çayın Avrupa'ya ilk gelişi"],
      ],
    },
    tuzaklar: [
      "Aynı anahtar sözcük, başka odak. gg-b1'de III. cümle de sıcak hava akımlarından söz eder, ama konuyu göç eden kuşlardan planör pilotlarına kaydırır. Ortak sözcük, cümlenin akışta olduğunu göstermez.",
      "Ekleme sözcüğüne güvenmek. also, too, another, in addition tek başına bağ kurmaz; içerik aynı odakta değilse yalnız bağ varmış gibi gösterir. fm-b1'de IV ve V'teki also ve In addition gerçekten aynı yarar listesini sürdürür. fp-b1'de ise V. cümle also ile bağlanıyor gibi görünse de geri dönüşümden hızlı şarja geçer.",
      "Doğru bilgiyi yerinde sanmak. Bozan cümle çoğu zaman tek başına doğrudur: sa-b1'de birçok antibiyotiğin doğada küfler ve toprak bakterilerince üretildiği bilgisi doğru, ama parça antibiyotiklerin neden virüslere etki etmediğini anlatıyor.",
      "Uygulamayı, örneği ya da sınırı bozan sanmak. Parça bir yöntemi anlatıp sonda onun bir yerde nasıl kullanıldığını ya da neyi yapamadığını söylüyorsa odak değişmemiştir: sg-b1'de V. cümle radyokarbon yönteminin Göbeklitepe'de nasıl uygulandığını anlatır ve akışı tamamlar.",
      "Son cümleyi baştan elemek. V. cümle 94 sorunun 7'sinde bozandı: seyrek, ama olur. II–IV'te akışı bozan bir cümle bulamadıysan V. cümleyi de sına.",
    ],
    ornekler: [
      { soru: 'fo-b1', not: "Odak: geçiş yöntemi. III. cümle başka bir yönteme, yıldızın yalpalamasını ölçen yönteme geçer. Onu çıkarınca IV. cümledeki 'this dip' doğrudan II. cümledeki parlaklık düşüşüne bağlanır: zincir düzelir." },
      { soru: 'su-b1', not: 'Konu uyku; odak ergenler ve okul saatleri. IV. cümle aynı konudan ama başka bir gruptan, yaşlılardan söz eder. V. cümle okul saatlerine döner; bu dönüş IV. cümlenin araya girdiğini gösterir.' },
    ],
    veri: [
      'Bozan cümlenin yeri (n=94): I. cümle 3, II. 28, III. 22, IV. 34, V. 7 kez; II–IV birlikte %89 (analiz/dagilim.md §7; analiz/agirlik.json, sablon.bozan_cevap_konumu).',
      'Tuzak türü: %89 anlamca yakın, %11 kısmen doğru (analiz/agirlik.json, celdirici.tur.bozan). Bozan cümle parçanın konusuna yakın durur; konu dışı bir cümle beklemek yanıltır.',
      'Ölçülen beceri: akış %87, gönderim %13 (analiz/agirlik.json, konu.bozan).',
      "Sınavdaki yeri: YDS'de 5 soru (76–80), YÖKDİL'de 6 (60–65), YDT'de 5. Seviye: %77 B2, %22 C1 (analiz/dagilim.md §2; analiz/agirlik.json, cefr.tur.bozan).",
    ],
    ref: 'analiz/dagilim.md §2, §5, §7; analiz/agirlik.json' },
];
