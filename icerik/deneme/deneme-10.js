// iDil › Tam deneme 10 (YÖKDİL Sağlık biçimi; 80 soru, kitapçık sırası). Görev 17, Sınav S2 (23 Kasım 2026).
// Görev 20 (25 Kasım 2026): çeviri çeldiricileri biçim kestirmesine karşı yeniden kuruldu.
// Tümü özgün: Claude yazdı. ÖSYM sorusu, yayınevi, ders kitabı (Murphy, Azar), uygulama ya da gazete metni kopyalanmadı,
// uyarlanmadı; ÖSYM kitapçıkları yazarken açılmadı, yalnız etiket sayımları (analiz/agirlik.json, analiz/dagilim.md,
// analiz/tahmin.md) kullanıldı. Tümü taslak: İngilizce öğretmeni onayı bekliyor. CEFR etiketleri yazarın tahminidir.
// Biçim: ../README.md (ünite öğesiyle aynı). Metinler genel bilgi verir; tanı ya da tedavi önerisi değildir.
//
// Sıra (turler.js YÖKDİL notu): 1–6 kelime, 7–20 dil bilgisi, 21–30 boşluklu metin (2 × 5), 31–41 cümle tamamlama,
// 42–47 çeviri İng.→Tr., 48–53 çeviri Tr.→İng., 54–59 paragraf tamamlama, 60–65 akışı bozan cümle, 66–80 okuma (5 × 3).
// `sorular` dizisinde parçalar tek öğedir (type 'pratik', adımlarıyla); açılınca 80 soru. YÖKDİL'de diyalog ve yakın anlam yok.
// Kelime sırası (dagilim.md §3.1): isim, isim, sıfat, zarf, fiil, öbek fiil. Dil bilgisi şablonu (dagilim.md §3.2, YÖKDİL):
// 7–8 fiil yapıları (karışık koşul, get used to + -ing), 9–11 edat (common among, vulnerable to, owing to), 12–16 bağlaç,
// bağlantı zarfı ve zarf cümleciği (whereas, however, provided that, now that, even though), 17–18 edat (accompanied by,
// beyond expectations), 19 eşleşik bağlaç (neither … nor), 20 sıfat cümleciği (whose). İlk dil bilgisi sorusu karışık koşul
// cümlesidir (geçmişteki koşul, bugünkü sonuç: would + yalın fiil); deneme 01–06'nın zaman uyumu, 07'nin mastar kalıbı,
// 08'in wish + past perfect ve 09'un geçmişe dair kip çıkarımından farklı. Cümle tamamlama ilişkileri (dagilim.md §3.3,
// YÖKDİL): 8 karşıtlık, 1 neden-sonuç, 1 koşul, 1 zaman.
// Bütün metinler tıp ve sağlık alanından. Alt grup dağılımı (soru başına; tahmin.md §5.4 hedefi ve %80 aralığı parantezde):
// hastalıklar ve organ sistemleri 19 (21; 16–25), beyin, sinir sistemi ve ruh sağlığı 20 (17; 13–21), beslenme ve metabolizma
// 18 (18; 14–22), ilaç ve tedavi 12 (13; 10–17), yaşam biçimi, halk sağlığı ve etik 7 (7; 5–10), tanı ve tıbbi teknoloji 4
// (5; 2–7). Deneme 03'te 15 kalan beyin ve ruh sağlığı payı görev notu gereği artırıldı.
// Parça konuları deneme 01–09'un, set/set-saglik-*.js'in, pilot sağlık ünitelerinin (alerji, anestezi, antibiyotik, aşı,
// diyabet, kalp, mikrobiyota, uyku) ve öteki pilot ünitelerin Olgular listeleriyle çakışmaz. Taramada çıkarılanlar: H.M.
// (pilot genel-bellek), sahtekârlık duygusu (genel-is-hayati), zona ve su çiçeği (saglik-asi), verem (saglik-asi,
// saglik-antibiyotik), organ bağışında varsayılan onam (sosyal-ekonomi, set-saglik-4).
//
// Olgular (yerleşik bilgi; her biri yalnız gösterildiği öğede; metinler özgün; sayılar yuvarlak ve temkinli):
// - d10-z1: Charles Bonnet, İsviçreli doğa bilimci ve düşünür, 18. yüzyıl (1760; parçada yıl yok); görme yetisini büyük ölçüde
//   yitiren yaşlı dedesinin (Charles Lullin, katarakt; parçada ad yok) orada olmayan insan, kuş ve yapılar görmesi ve
//   bunların gerçek olmadığını bilmesi; ağır görme kaybı olanlarda sanılandan yaygın olması (temkinli: "appear to be");
//   ruh hastası sanılma korkusuyla hekime söylenmemesi ve az bildirilmesi ("probably"); ruh hastalığı belirtisi sayılmaması;
//   beynin görme alanlarının gözden olağan sinyal alamayınca görüntü üretmesi açıklaması ("is thought to").
// - d10-z2: Gut: kanda ürik asit birikmesi ve eklemde iğne biçimli kristaller; atakların sık sık gece ve ani başlaması, en sık
//   ayak başparmağının dibindeki eklem; ürik asidin pürinlerin yıkımıyla oluşması, pürinin kırmızı et, sakatat (karaciğer)
//   ve bazı deniz ürünlerinde bol olması; çoğu memelide ürik asidi dönüştüren enzim (ürikaz; parçada ad yok); insan ve
//   öteki büyük maymunlarda milyonlarca yıl önce yitirilmesi ve nedeninin tartışılması; tarihte varlıklı ve çok yiyip içen
//   erkeklerle ilişkilendirilmesi; birçok hastada asıl sorunun böbreklerin yeterince atamaması olması ("appears to be");
//   früktozla tatlandırılmış içeceklerin daha yüksek riskle ilişkilendirilmesi ("have been linked").
// - d10-o1: Prozopagnozi: Joachim Bodamer, Alman nörolog, 1947'de terimi önerdi ve beyin hasarından sonra yüz tanıma yetisini
//   yitiren hastaları tanımladı; hasarın genellikle beynin alt yüzündeki, yüzlere özelleşmiş görünen bir bölgeyi
//   (fusiform yüz alanı; parçada ad yok) içermesi; uzun süre çok seyrek sanılması; 2000'lerin başından beri araştırmalara göre
//   gelişimsel biçimin yaklaşık elli kişiden birini etkileyebilmesi (ör. Kennerknecht ve arkadaşları, 2006, yaklaşık %2,5;
//   parçada ad yok; temkinli: "has suggested … may affect roughly"); birçoğunun farkında olmaması; saç, ses, giysi ve yürüyüş
//   ipuçları; süper tanıyıcılar ve bazı polis güçlerinin onları görüntülerdeki şüphelileri tanımak için çalıştırması
//   (ör. Londra Metropolitan Polisi; parçada ad yok).
// - d10-o2: Willem Kolff, Hollandalı hekim, Alman işgali sırasında küçük bir hastanede (Kampen; parçada ad yok), 1940'ların
//   başı (ilk hasta 1943; parçada yıl yok); sosis kılıfı olarak kullanılan selofan, küçük molekülleri (üre) geçirip kan
//   hücrelerini ve proteinleri tutması; tuzlu su banyosunda dönen tambura sarılı selofan borular; savaş kıtlığında teneke
//   kutu ve çamaşır makinesi parçaları kullandığının anlatılması ("reportedly"); ilk yıllarda tedavi edilen hastaların
//   çoğunun ölmesi; 1945'te böbrek yetmezliğine bağlı komadaki bir kadının (67 yaşında; parçada yaş yok) tedaviden sonra
//   uyanıp birkaç yıl daha yaşaması; savaştan sonra makinelerini başka ülkelerin hastanelerine vermesi; bugünkü diyaliz
//   makinelerinin çıkış noktası olması.
// - d10-o3: Asbjørn Følling, Norveçli hekim ve kimyacı, 1934; ciddi öğrenme güçlüğü çeken iki çocuğun annesinin (Borgny Egeland;
//   parçada ad yok) fark ettiği küf kokusu ve birkaç hekimden yanıt alamaması; idrar testinde koyu yeşil renk (demir(III)
//   klorür; parçada ad yok); sorumlu bileşiği (fenilpirüvik asit; parçada ad yok) tanımlayıp kurumlardaki başka çocuklarda
//   da bulması; fenilketonüri, kalıtsal; fenilalaninin parçalanamaması, birikip gelişen beyne zarar vermesi; ilk haftalarda
//   başlayan denetimli diyetle hasarın büyük bölümünün önlenebilmesi (1950'ler, Horst Bickel; parçada ad yok); Robert Guthrie,
//   ABD, 1960'ların başı, yenidoğanın topuğundan alınıp süzgeç kâğıdına damlatılan kanla test; taramanın birçok ülkede
//   olağan olması; aspartamlı (yapay tatlandırıcılı) ürünlerde fenilketonürililer için uyarı (parçada aspartam adı yok).
// - d10-o4: John Cade, Avustralyalı psikiyatr, 1949 raporu (Medical Journal of Australia; parçada dergi yok); maninin vücutta
//   dolaşan bir maddeden kaynaklanabileceği varsayımı ve hasta idrarındaki kimyasallarla deneyler; ürik asidi (ürat)
//   çözünür kılmak için lityumla birleştirmesi; kobayların sakinleşmesi ve bunun sonradan kısmen dozun büyüklüğüne
//   bağlanması (temkinli: "some later scientists attributed partly"); lityum tuzlarını önce kendi üzerinde denediğinin
//   anlatılması ("reportedly"), sonra az sayıda hastada; yıllardır ağır taşkınlık içindeki bir erkek hastanın sakinleşip
//   hastaneden çıkabilmesi; aynı yıl ABD'de az tuzlu diyet yapanlara tuz yerine satılan lityum klorürün ağır zehirlenmelerle
//   ilişkilendirilmesi (1949); yararlı ve zararlı miktarın birbirine yakın olması ve hekimlerin kandaki düzeyi izlemesi
//   (betimleme; öneri değil); Mogens Schou, Danimarkalı psikiyatr, 1950'ler ve 1960'lardaki denemeler; ABD'de 1970 onayı
//   (FDA); beyindeki etkisinin tam anlaşılmamış olması. Parçada doz, tedavi önerisi ya da güncel kullanım yönergesi yok.
// - d10-o5: Kuru: Papua Yeni Gine'nin Doğu Dağlık bölgesi, Fore halkı, 1950'ler; sözcüğün çoğunlukla "titreme" diye
//   çevrilmesi; hareket denetiminin yitirilmesi, yardımsız yürüyememe ve yiyememe, belirtilerden sonra genellikle bir yıl
//   kadar içinde ölüm ("within a year or so"); kurbanların çoğunun kadın ve çocuk olması; büyücülük inancı; Carleton
//   Gajdusek, ABD'li hekim, Avustralyalı bir sağlık görevlisiyle (Vincent Zigas; parçada ad yok; 1957 tanımı, parçada yıl
//   yok) çalışması, olağan enfeksiyon ya da zehir izi bulamaması; antropologların (Shirley Lindenbaum, Robert Glasse; parçada
//   ad yok) ölenin bedeninin bölümlerinin saygı gereği yakınlarca yendiği cenaze geleneğine dikkat çekmesi, kadın ve
//   çocukların daha çok katılmış görünmesi (temkinli: "seem to have", "would fit"); 1960'larda şempanzelere aktarım (1966;
//   parçada yıl yok; "reported"), aylar süren gelişme; bugün prion açıklamasının yaygın kabulü (temkinli: "is now widely
//   thought", "appears able"); geleneğin bitmesinden sonra vakaların düzenli azalması ve on yıllar süren kuluçka yüzünden
//   geç vakalar. Parçada sayı, Nobel ödülü ya da genetik direnç iddiası yok.
// - d10-p1: Bazal, refleks ve duygusal gözyaşı; bazal gözyaşının gözü nemli tutup tozu yıkaması, refleks gözyaşının tahriş
//   edici bir şeyi atmak için çok daha bol salgılanması; duygusal gözyaşının işlevinin tartışmalı olması (yerleşik bilgi).
//   Çeldiricide: gözyaşının iç köşedeki deliklerden akması (yerleşik).
// - d10-p2: Sinestezi: bir duyunun uyarılmasının başka bir duyuda deneyim doğurması; harf ve sayıları renkli görme, sesleri ya
//   da sözcükleri tatma; eşleşmelerin yıllar içinde tutarlı olması; ailelerde görülme eğilimi ve genlerin payı ("suspect")
//   (yerleşik bilgi). Çeldiricide: terimin Yunanca kökeni.
// - d10-p3: Greyfurt suyundaki maddelerin (furanokumarinler; paragrafta ad yok) bağırsak duvarındaki bir enzimi (CYP3A4;
//   paragrafta ad yok) engellemesi, ilacın kana daha çok geçmesi; bazı kolesterol ve tansiyon ilaçları; 1980'lerin sonunda,
//   bir tansiyon ilacıyla (felodipin) alkol etkileşimini inceleyen bir çalışmada alkolün tadını gizlemek için greyfurt
//   suyu kullanılınca rastlantıyla bulunması (David Bailey ve arkadaşları, Kanada, 1989 ve 1991; paragrafta ad yok).
// - d10-p4: Yayın yanlılığı: olumlu sonuçlu çalışmaların daha kolay yayımlanması; önde gelen tıp dergilerinin 2000'lerin
//   ortasında klinik denemenin ancak ilk hasta katılmadan herkese açık bir veri tabanına kaydedilmişse yayımlanacağını
//   kararlaştırması (ICMJE, 2004'te duyuruldu, 2005'ten geçerli; paragrafta ad yok: "a group of leading medical journals").
// - d10-p5: Déjà vu: çoğu insanın en az bir kez yaşadığını gösteren anketler ("surveys suggest that a majority"); en sık genç
//   yetişkinlerde bildirilmesi ve yaşla azalması ("seems to"); çok seyahat edenlerde ve rüyalarını sık hatırlayanlarda daha sık
//   bildirilmesi ("seem to"; ör. Brown, Psychological Bulletin, 2003 derlemesi; paragrafta ad yok); nedeninin bilinmemesi.
//   Çeldiricide: Fransızca "zaten görülmüş" anlamı; karşıt duygunun (jamais vu) daha seyrek olması.
// - d10-p6: Kapsaisinin ağızda acı veren sıcaklığa yanıt veren sinir uçlarındaki alıcılara (TRPV1; paragrafta ad yok)
//   bağlanması; suda iyi çözünmemesi; sütün daha çabuk rahatlatması ve bunun sütün bazı proteinlerine (kazein; paragrafta
//   ad yok) bağlanması (temkinli: "possibly"); düzenli yiyenlerde duyarlılığın azalması (yerleşik bilgi). Çeldiricide:
//   biberin Amerika kökeni; kuşların yanma hissetmemesi (yerleşik).
// - d10-b1: İyi huylu konumsal baş dönmesi (BPPV; parçada ad yok): iç kulakta bir zarın üstündeki kalsiyum karbonat kristalleri,
//   kopup dönme hareketini algılayan sıvı dolu kanallara kayması, baş durunca bir süre daha yuvarlanmaları ve yanlış dönme
//   sinyali; yatakta dönerken ya da yukarı bakarken başlayan kısa, şiddetli baş dönmesi
//   (yerleşik tıbbi bilgi). Parçada tedavi manevrası yok. Aykırı cümlede: iç kulaktaki salyangozun (koklea) sesi işitme
//   sinirine giden sinyallere çevirmesi (yerleşik).
// - d10-b2: Dondurma baş ağrısı: damağa soğuk değince başlaması, damarların daralıp hızla genişlemesi, yüzün büyük bölümüne
//   hizmet eden sinir (trigeminal; parçada ad yok) ve ağrının alına yansıması; dili damağa bastırmanın ağrıyı çabuk geçirdiğinin
//   söylenmesi ("is often said"); aykırı cümlede çocuklarda daha sık görülmesi ("appear to", "perhaps").
// - d10-b3: Panik atağı: belirgin bir tehlike olmadan yoğun korku; çarpıntı, hızlı ve yüzeysel soluk, baş dönmesi ya da bulantı;
//   ilk kez yaşayanların birçoğunun kalp krizi sanması; belirtilerin genellikle dakikalar içinde doruğa ulaşıp yavaş yavaş
//   azalması (yerleşik tıbbi bilgi; DSM tanımındaki "dakikalar içinde doruk"; sayı yok). Tanı ya da tedavi önerisi yok.
// - d10-b4: Yemekten sonra glikoz kullanımı ve glikojen depolama (karaciğer ve kas); bir gün kadar açlıkta glikojenin azalması;
//   karaciğerin yağdan keton cisimcikleri yapması; uzun açlıkta beynin enerjisinin büyük bölümünü ketonlardan alabilmesi
//   (yerleşik fizyoloji bilgisi). Aykırı cümlede: deri altı yağın soğukta yalıtım sağlaması (yerleşik).
// - d10-b5: UVA ve UVB; UVB'nin güneş yanığından, UVA'nın deride daha derine işleyip yaşlanmadan başlıca sorumlu olması;
//   pencere camının UVB'nin çoğunu durdurup UVA'nın önemli bir kısmını geçirmesi (yerleşik bilgi). Aykırı cümlede: sabah
//   ışığının vücut saatini ayarlamaya yardım etmesi ve jet lag için sık önerilmesi (yerleşik; "often recommended").
// - d10-b6: Nabız oksimetresi: parmak ucuna takılır; kırmızı ve kızılötesi ışık; oksijenli ve oksijensiz hemoglobinin bu ışıkları
//   farklı soğurması; çok soğuk ellerde ve koyu tenli kişilerde ölçümün daha az doğru olabildiğini bildiren çalışmalar
//   (ör. Sjoding ve arkadaşları, NEJM, 2020; parçada ad yok; "as several studies have reported"). Aykırı cümlede: daha kesin
//   ölçüm için atardamardan kan örneği alınması, çoğunlukla hastanede (arter kan gazı; yerleşik).
// - Tek sorular (yerleşik genel tıp bilgisi; ad, sayı ya da tarih yalnız belirtilen yerlerde): k1 osteoporozda kemik
//   yoğunluğunun azalması; k3 tiroit bozukluğu gibi nedenlerle geri dönebilen bellek sorunları; k4 viral ve bakteriyel boğaz
//   enfeksiyonlarının benzer belirtileri; k5 beyinciğin denge ve eşgüdümdeki rolü; k6 soğuk algınlığının genellikle bir hafta
//   on gün içinde geçmesi; g1 kurgusal hasta; g3 yaşlılarda B12 düşüklüğü ve mide asidinin azalması; g4 küçük çocukların
//   susuz kalmaya yatkınlığı; g5 yüksek tansiyonun belirtisiz seyredebilmesi; g6 sağ akciğerin üç, sol akciğerin iki lobu ve
//   kalbin yer kaplaması; g7 besin zehirlenmesinin çoğunlukla kendiliğinden geçmesi; g8 birçok sağlık rehberine göre
//   sağılmış anne sütünün dondurucuda birkaç ay saklanabilmesi ("Many health guidelines suggest"; ör. CDC, NHS); g11 depresyona bedensel yakınmaların eşlik etmesi; g14 yeme bozukluklarında mide
//   asidinin diş aşınmasına yol açması ve diş hekimlerinin bunu fark edebilmesi ("sometimes"); t1 apandisitin bir zamanlar
//   sık ölüm nedeni olması; t2 ağrı kesicilerde aşırı dozun karaciğer, mide ya da böbreğe zararı; t3 ıspanaktaki demirin
//   düşük emilimi; t5 derinin vücudun çoğu yerinde birkaç milimetre kalınlığında olması; t6 bazı bitkisel ürünlerin ilaçlarla
//   etkileşmesi; t7 bitter çikolata ("may be good"); t8 safra taşı olanların çoğunun belirti göstermemesi; t9 hızlı
//   parçalanan ilaçların günde birkaç kez alınması; t10 kısa sürede çok su içilince kanda sodyumun düşmesi;
//   çeldiricilerde suyun yetişkin vücut ağırlığının yarısından fazlası olması, böbreklerin kanı günde birçok kez süzmesi,
//   susamanın kan yoğunlaşınca başlaması, sıvı eksikliğinin baş ağrısı ve yorgunluk yapması (yerleşik); t11 kapalı alan
//   sigara yasaklarından sonra bazı çalışmaların kalp krizi yatışlarında azalma bildirmesi ("several studies have
//   reported"); çeldiricilerde nikotinin bağımlılık yapıcı başlıca madde olması ve tütün dumanının binlerce bileşik içermesi
//   (yerleşik); c1 pıhtılaşma proteini eksikliği (hemofili; cümlede ad yok); c2 bazı ilaçların emiliminin yemekle
//   yavaşlaması; c3 az yağlı ürünlerde eklenen şeker ("may"); c4 tuzun büyük bir bölümünün işlenmiş yiyeceklerden gelmesi
//   ("much"); c5 sivrisineklerin sıtmayı yaydığının 19. yüzyılın sonunda gösterilmesi (Ronald Ross, 1897–1898; cümlede ad
//   yok); c6 tolerans; c7 hava kirliliğinin kalp ve damarlara etkisi; c8 kemiğin yaşam boyu yenilenmesi; c9 yaşla susama
//   duygusunun zayıflaması; c10 ilaç geliştirmenin on yıldan uzun sürebilmesi ("can"); c11 diş eti hastalığı ile kalp
//   hastalığı arasındaki ilişki ve nedenselliğin bilinmemesi; c12 uzun süre ayakta çalışmanın varis riskini artırması.
// - Öteki öğelerde ad, sayı ya da tarih yok; cümleler genel bilgi ya da kurgusaldır.

const T = 'taslak';
const U = 'Tam deneme 10 (YÖKDİL Sağlık)';
const C = 'saglik';

const sorular = [
  // ---------- 1–6: kelime ----------
  { id: 'd10-k1', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['isim'],
    q: 'In people with osteoporosis, bone ---- gradually declines to the point where even a minor fall can lead to a fracture.',
    options: ['tolerance', 'mobility', 'clarity', 'immunity', 'density'], answer: 4,
    explain: "Osteoporozda kemik incelir ve gözenekli hâle gelir; bu yüzden küçük bir düşme bile kırığa yol açabilir. Kemiğin azalan bu niteliği 'bone density' (kemik yoğunluğu) diye anılır. 'Mobility' (hareket yeteneği) en güçlü çeldiricidir, çünkü kırık ve düşmeyle ilgili bir sözcüktür; ama hareket yeteneği kişiye aittir, kemiğin kendisine değil, ve azalması kemiği kırılgan yapmaz. 'Tolerance' (dayanıklılık, hoşgörü), 'clarity' (berraklık) ve 'immunity' (bağışıklık) de kemiğin azalarak kırığa zemin hazırlayan bir özelliğini anlatmaz." },
  { id: 'd10-k2', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['isim'],
    q: 'Doctors have to weigh the expected benefits of a treatment against its possible ----, such as unpleasant side effects or harmful interactions with other medicines.',
    options: ['incentives', 'drawbacks', 'remedies', 'credentials', 'prospects'], answer: 1,
    explain: "Hekim bir tedavinin beklenen yararını olası sakıncalarıyla tartar; 'such as' ile sayılan örnekler (yan etkiler, öteki ilaçlarla zararlı etkileşimler) de sakıncadır: 'drawbacks'. 'Prospects' (beklentiler, olasılıklar) en güçlü çeldiricidir, çünkü bir tedavinin geleceğiyle ilgili gibi durur; ama genellikle olumlu bir olasılığı anlatır ve yan etkileri örnek olarak alamaz. 'Incentives' (teşvikler), 'remedies' (çareler) ve 'credentials' (yeterlilik belgeleri) de yararın karşısına konacak sakıncaları anlatmaz." },
  { id: 'd10-k3', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['sıfat'],
    q: 'Not every case of memory loss in older adults is permanent: some turn out to be ----, and the symptoms fade once an underlying problem such as a thyroid disorder has been dealt with.',
    options: ['hereditary', 'reversible', 'progressive', 'contagious', 'chronic'], answer: 1,
    explain: "İki noktadan sonraki bölüm, kalıcı olmayan bellek kaybını tanımlıyor: altta yatan sorun (ör. tiroit bozukluğu) ele alınınca belirtiler kayboluyor. Geri dönebilen duruma 'reversible' (geri döndürülebilir) denir. 'Progressive' (ilerleyici) en güçlü çeldiricidir, çünkü bellek kaybıyla sık kullanılır; ama zamanla kötüleşmeyi anlatır, belirtilerin kaybolmasıyla çelişir. 'Chronic' (süreğen) da kalıcılığa yakındır ve 'not … permanent' ile çelişir. 'Hereditary' (kalıtsal) ve 'contagious' (bulaşıcı) belirtilerin geçip geçmemesiyle ilgili değildir." },
  { id: 'd10-k4', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['zarf'],
    q: 'Throat infections caused by viruses and those caused by bacteria can produce very similar symptoms, yet they respond ---- differently to treatment, which is why an accurate diagnosis matters.',
    options: ['scarcely', 'abruptly', 'markedly', 'reluctantly', 'needlessly'], answer: 2,
    explain: "'Yet' benzer belirtilere karşın tedaviye verilen yanıtın belirgin biçimde farklı olduğunu söylüyor; 'which is why an accurate diagnosis matters' de bu büyük farkın sonucudur: 'markedly differently' (belirgin biçimde farklı). 'Scarcely' (neredeyse hiç) en güçlü çeldiricidir, çünkü 'differently' ile dil bilgisi bakımından kullanılabilir; ama farkı yok sayar ve doğru tanının neden önemli olduğunu açıklayamaz. 'Abruptly' (birdenbire), 'reluctantly' (isteksizce) ve 'needlessly' (gereksiz yere) iki enfeksiyon arasındaki farkın derecesini anlatmaz." },
  { id: 'd10-k5', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['fiil'],
    q: "Damage to the cerebellum can seriously ---- a person's balance and coordination, so that even walking along a straight line becomes difficult.",
    options: ['enhance', 'restore', 'sustain', 'impair', 'imitate'], answer: 3,
    explain: "Beyinciğe gelen hasar denge ve eşgüdümü bozar; sonuç bölümü de düz bir çizgide yürümenin bile zorlaştığını söylüyor: 'impair' (bozmak, zayıflatmak). 'Restore' (yeniden kazandırmak) en güçlü çeldiricidir, çünkü denge ve eşgüdümle tıbbi bir bağlamda kullanılabilir; ama hasar bir yeteneği geri getirmez, yürümenin zorlaşmasıyla da çelişir. 'Enhance' (güçlendirmek) ve 'sustain' (sürdürmek) de olumlu bir etki anlatır. 'Imitate' (taklit etmek) bağlama uymaz." },
  { id: 'd10-k6', course: C, type: 'soru', tur: 'kelime', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['öbek fiil'],
    q: 'In most otherwise healthy adults, the symptoms of a common cold ---- within a week to ten days, even without any particular treatment.',
    options: ['break out', 'set off', 'clear up', 'give in', 'turn down'], answer: 2,
    explain: "'Even without any particular treatment' belirtilerin kendiliğinden geçtiğini anlatıyor: 'clear up' (geçmek, düzelmek). 'Break out' en güçlü çeldiricidir, çünkü hastalıklarla kullanılır; ama bir şeyin patlak vermesi, başlamasıdır ve 'tedavi olmasa bile' sözüyle anlamca bağ kurmaz. 'Set off' (yola çıkmak, tetiklemek), 'give in' (pes etmek) ve 'turn down' (reddetmek, kısmak) belirtilerin geçmesini anlatmaz." },

  // ---------- 7–20: dil bilgisi ----------
  { id: 'd10-g1', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['koşul'],
    q: 'If the small tumour in her lung had not been spotted during a routine scan two years ago, she ---- far more aggressive treatment today.',
    options: [
      'would probably have needed',
      'would probably need',
      'will probably need',
      'had probably needed',
      'probably needs',
    ], answer: 1,
    explain: "Koşul bölümü geçmişe aittir ve gerçekleşmemiş bir durumu anlatır ('had not been spotted … two years ago': iki yıl önce fark edilmeseydi). Ana cümle ise 'today' ile bugüne bakıyor; geçmişteki bir koşulun bugünkü sonucu karışık koşul cümlesiyle 'would + yalın fiil' olarak verilir: 'would probably need'. 'Would probably have needed' en güçlü çeldiricidir, çünkü üçüncü tip koşulun alışılmış ana cümlesidir; ama sonucu da geçmişe yerleştirir ve 'today' ile çelişir. 'Will probably need' ve 'probably needs' gerçek bir durumu anlatır; 'had not been' ile kurulan gerçek dışı koşula uymaz. 'Had probably needed' koşul cümlesinin ana bölümünde kullanılmaz." },
  { id: 'd10-g2', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['isim-fiil ve mastar'],
    q: 'Older patients who take several medicines a day often find it hard to get used ---- each of them at a different time.',
    options: ['to take', 'taking', 'for taking', 'to having taken', 'to taking'], answer: 4,
    explain: "'Get used to' (… e alışmak) kalıbındaki 'to' bir edattır; ardından fiil '-ing' ile gelir: 'get used to taking'. 'To take' en güçlü çeldiricidir, çünkü 'to' sözcüğünü mastar eki sanma yanlışına dayanır. 'Taking' edatı düşürür; 'for taking' bu kalıpla kurulmaz. 'To having taken' tamamlanmış bir eylemi anlatır; hastaların her gün yaptığı ve alışmaya çalıştığı bir alışkanlığa uymaz." },
  { id: 'd10-g3', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'Low levels of vitamin B12 are fairly common ---- older adults, partly because the stomach produces less of the acid needed to release the vitamin from food.',
    options: ['between', 'beside', 'among', 'upon', 'onto'], answer: 2,
    explain: "Bir durumun bir topluluk içinde yaygın olduğu 'common among' ile anlatılır: B12 düzeyinin düşük olması yaşlı yetişkinler arasında oldukça yaygındır. 'Between' en güçlü çeldiricidir, çünkü Türkçede o da 'arasında' diye çevrilir; ama iki taraf ya da belirli öğeler arasındaki ilişkiyi anlatır, bir topluluğun içini değil. 'Beside' (yanında), 'upon' ve 'onto' (üstüne) bu anlamı vermez." },
  { id: 'd10-g4', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'Young children are more vulnerable ---- dehydration than adults, partly because water makes up a larger share of their body weight and they lose it more quickly.',
    options: ['to', 'of', 'with', 'from', 'about'], answer: 0,
    explain: "'Vulnerable to something' (bir şeye karşı savunmasız, açık) kalıplaşmış bir sıfat-edat bağıdır: küçük çocuklar susuz kalmaya yetişkinlerden daha açıktır. 'From' en güçlü çeldiricidir, çünkü tehlikenin kaynağını anlatıyor gibi durur ('suffer from'); ama 'vulnerable' ile kurulmaz. 'Of', 'with' ve 'about' da bu sıfatla kullanılmaz." },
  { id: 'd10-g5', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['çok sözcüklü edat'],
    q: '---- the absence of any obvious symptoms in its early stages, high blood pressure can go unnoticed for many years.',
    options: ['In spite of', 'Apart from', 'Instead of', 'In addition to', 'Owing to'], answer: 4,
    explain: "Yüksek tansiyonun yıllarca fark edilmemesinin nedeni, erken evrelerde belirgin belirti olmamasıdır; neden bildiren edat gerekir: 'Owing to' (… yüzünden). 'In spite of' en güçlü çeldiricidir, çünkü bu tür cümlelerde sık kullanılır; ama karşıtlık kurar: belirti olmamasına karşın fark edilmemek mantıksızdır, çünkü belirti yokluğu fark edilmemeyi açıklar. 'Apart from' (… dışında), 'Instead of' (… yerine) ve 'In addition to' (… e ek olarak) bu neden-sonuç ilişkisini kurmaz." },
  { id: 'd10-g6', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: '---- the right lung is divided into three lobes, the left lung has only two, partly because the heart takes up space on that side of the chest.',
    options: ['Whereas', 'Since', 'Unless', 'As soon as', 'So that'], answer: 0,
    explain: "Cümle iki akciğeri karşılaştırıyor: sağ akciğer üç loba ayrılır, sol akciğerde ise yalnız iki lob vardır. İki olguyu karşı karşıya koyan bağlaç 'Whereas'tır. 'Since' en güçlü çeldiricidir, çünkü cümlenin sonunda bir neden de veriliyor; ama 'since' sağ akciğerin üç loblu olmasını sol akciğerin iki loblu olmasının nedeni yapar, oysa cümle nedeni kalbin yer kaplamasında gösteriyor. 'Unless' ve 'So that' koşul ve amaç bildirir; 'As soon as' bir zaman sırası kurar ve yapısal bir özelliğe uymaz." },
  { id: 'd10-g7', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlantı zarfı'],
    q: 'Most cases of food poisoning settle down on their own within a few days; ----, babies and older people may need medical care, as they can lose fluids dangerously fast.',
    options: ['therefore', 'likewise', 'in other words', 'for instance', 'however'], answer: 4,
    explain: "Noktalı virgülden önce besin zehirlenmesinin çoğu zaman kendiliğinden geçtiği söyleniyor; sonra bebeklerin ve yaşlıların tıbbi bakıma gereksinim duyabileceği belirtiliyor. Genel durumla bu istisna arasında karşıtlık vardır: 'however'. 'For instance' en güçlü çeldiricidir, çünkü bebekler ve yaşlılar örnek gibi görünebilir; ama ilk bölümün örneği değil, ona aykırı bir durumdur. 'Therefore' sonuç, 'likewise' benzerlik, 'in other words' yeniden söyleme bildirir; hiçbiri bu karşıtlığı kurmaz." },
  { id: 'd10-g8', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Many health guidelines suggest that expressed breast milk can be stored in a freezer for several months ---- the temperature stays constantly low and the container is properly sealed.',
    options: ['provided that', 'even though', 'so that', 'unless', 'whereas'], answer: 0,
    explain: "Cümle bir rehber bilgisini aktarıyor ('Many health guidelines suggest'); boşluktan sonraki bölüm ise sütün aylarca saklanabileceği söylenirken öne sürülen koşulları sayıyor: sıcaklığın sürekli düşük kalması ve kabın iyi kapatılması. Koşul bildiren bağlaç 'provided that' (… koşuluyla) uyar. 'Unless' en güçlü çeldiricidir, çünkü o da koşul bildirir; ama olumsuz koşuldur ('… mezse') ve saklamayı tam da bu koşullar sağlanmadığında mümkün gösterir. 'Even though' karşıtlık, 'so that' amaç, 'whereas' karşılaştırma kurar; uygun saklama koşullarını bunlarla bağlamak anlamsızdır." },
  { id: 'd10-g9', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: '---- the gene responsible for the condition has been identified, relatives of patients can be tested to find out whether they carry it.',
    options: ['Even if', 'Unless', 'Whereas', 'Until', 'Now that'], answer: 4,
    explain: "Genin bulunmuş olması (present perfect), yakınların test edilebilmesini mümkün kılan yeni durumdur. 'Artık … olduğuna göre' anlamı 'Now that' ile verilir. 'Until' en güçlü çeldiricidir, çünkü bir zaman ilişkisi kurar; ama testin gen bulunana dek yapılabileceğini söyler, oysa test ancak gen bulunduktan sonra yapılabilir. 'Unless' de testi genin bulunmamasına bağlar. 'Even if' ve 'Whereas' genin bulunmasıyla test arasındaki olanak ilişkisini kurmaz." },
  { id: 'd10-g10', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: '---- most people with a fear of flying know perfectly well that air travel is very safe, this knowledge does little to calm them once the aircraft starts to move.',
    options: ['Because', 'As long as', 'Even though', 'Once', 'So that'], answer: 2,
    explain: "Uçuş korkusu olanlar uçak yolculuğunun çok güvenli olduğunu bilir, ama bu bilgi onları pek yatıştırmaz. Bilgi ile korkunun sürmesi arasındaki karşıtlık 'Even though' ile bağlanır. 'Because' en güçlü çeldiricidir, çünkü iki bölümü dil bilgisi bakımından bağlayabilir; ama güvenliği bilmeyi yatışamamanın nedeni yapar, bu da mantıksızdır. 'As long as' ve 'Once' bilgiyi bir koşula ya da zamana dönüştürür; 'So that' amaç bildirir ve bilginin işe yaramadığı söylenen cümleye uymaz." },
  { id: 'd10-g11', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'Depression is frequently accompanied ---- physical complaints such as headaches, disturbed sleep and a loss of appetite.',
    options: ['from', 'by', 'of', 'at', 'over'], answer: 1,
    explain: "Edilgen 'be accompanied by' (… in eşlik etmesi) kalıbı gerekir: depresyona sık sık baş ağrısı, bozuk uyku ve iştahsızlık gibi bedensel yakınmalar eşlik eder. 'From' en güçlü çeldiricidir, çünkü yakınmaların kaynağını anlatıyor gibi durur; ama 'accompanied' ile kurulmaz. 'Of', 'at' ve 'over' da bu fiille eşlik anlamı vermez." },
  { id: 'd10-g12', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edat'],
    q: 'The patient recovered ---- all expectations: within a week of the operation she was walking without help and asking to go home.',
    options: ['beneath', 'towards', 'among', 'beyond', 'upon'], answer: 3,
    explain: "İki noktadan sonraki bölüm iyileşmenin beklenenden çok hızlı olduğunu gösteriyor: hasta ameliyattan bir hafta sonra yardımsız yürüyordu. Beklentileri aşmak 'beyond all expectations' (bütün beklentilerin ötesinde) ile anlatılır. 'Beneath' en güçlü çeldiricidir, çünkü o da beklentiyle bir düzey karşılaştırması kurar; ama beklentinin altında kalmayı anlatır ve hızlı iyileşmeyle çelişir. 'Towards', 'among' ve 'upon' bu kalıbı kurmaz." },
  { id: 'd10-g13', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['eşleşik bağlaç'],
    q: "Many people suffering from burnout find that they are ---- refreshed by a weekend's rest ---- able to recover their interest in work, however long they try.",
    options: ['both / and', 'either / or', 'whether / or', 'so / that', 'neither / nor'], answer: 4,
    explain: "Tükenmişlik yaşayan kişilerin durumu anlatılıyor ve 'however long they try' (ne kadar uğraşsalar da) iki olumsuz sonucu birlikte istiyor: ne hafta sonu dinlenmesiyle tazelenirler ne de işe ilgilerini geri kazanabilirler: 'neither … nor'. 'Both … and' en güçlü çeldiricidir, çünkü dil bilgisi bakımından uyar; ama iki olumlu sonuç bildirir ve tükenmişlikle de 'ne kadar uğraşsalar da' sözüyle de çelişir. 'Either … or' iki seçenekten birinin gerçekleştiğini söyler; aynı çelişki onda da vardır. 'Whether … or' bu yapıda bir yüklemi tamamlamaz; 'so … that' ise ikinci bölümde bir özne ister ('so refreshed … that they are able')." },
  { id: 'd10-g14', course: C, type: 'soru', tur: 'dilbilgisi', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'Dentists are sometimes the first to notice signs of an eating disorder in patients ---- teeth show unusual wear caused by repeated contact with stomach acid.',
    options: ['whom', 'which', 'where', 'that', 'whose'], answer: 4,
    explain: "Boşluktan sonra gelen 'teeth', 'patients' sözcüğüne ait: dişleri olağan dışı aşınma gösteren hastalar. İyelik bildiren sıfat cümleciği 'whose' ile kurulur. 'Whom' en güçlü çeldiricidir, çünkü o da kişiler için kullanılır; ama nesne konumundaki bir kişiyi anlatır ve ardından iyelik bağı kuramaz. 'Which' ve 'that' de ardından 'teeth' gelince iyelik anlamı vermez; 'where' bir yer bildirir." },

  // ---------- 21–30: boşluklu metin ----------
  { id: 'd10-z1', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Orada olmayan görüntüler',
    text: 'In the eighteenth century, the Swiss naturalist Charles Bonnet described a puzzling experience of his elderly grandfather, (1) ---- had lost most of his sight in old age. The old man regularly saw people, birds and buildings that were not there, yet he knew perfectly well that none of them was real. Similar experiences are now known as Charles Bonnet syndrome, and they appear to be considerably more common among people with serious sight loss than was once assumed. The condition is probably under-reported, (2) ---- many patients never mention their visions to a doctor (3) ---- fear of being thought mentally ill. In fact, it is not regarded as a sign of mental illness; (4) ----, it is thought to arise when the visual areas of the brain, deprived of the normal signals from the eyes, begin to produce images of their own. The experience can be unsettling at first, but many people find it far less troubling once they (5) ---- what is causing it.',
    steps: [
      { konu: ['sıfat cümleciği'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['which', 'who', 'whose', 'whom', 'where'], answer: 1,
        explain: "Boşluk 'his elderly grandfather' öbeğini niteleyen bir sıfat cümleciği açıyor ve cümlecikte 'had lost' fiilinin öznesi eksik. Kişi olan bir özne için 'who' kullanılır. 'Whom' en güçlü çeldiricidir, çünkü o da kişiler için kullanılır; ama nesne konumundaki kişiyi anlatır, burada ise özne gerekir. 'Which' kişiler için kullanılmaz; 'whose' ardından bir isim ister; 'where' bir yer bildirir." },
      { konu: ['bağlaç'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['unless', 'although', 'so that', 'since', 'until'], answer: 3,
        explain: "Önce durumun muhtemelen olduğundan az bildirildiği söyleniyor; boşluktan sonra bunun nedeni geliyor: birçok hasta gördüklerini hekime hiç anlatmıyor. Neden bildiren bağlaç 'since' (çünkü) uyar. 'Although' en güçlü çeldiricidir, çünkü iki bölümü dil bilgisi bakımından bağlayabilir; ama karşıtlık kurar, oysa hastaların anlatmaması az bildirilmeyi açıklar, onunla çelişmez. 'Unless' ve 'until' az bildirilmeyi bir koşula ya da zamana bağlar; 'so that' hastaların anlatmamasını bir amaç gibi gösterir." },
      { konu: ['edatlı kalıp'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['for', 'with', 'by', 'at', 'on'], answer: 0,
        explain: "'For fear of (doing) something' (… korkusuyla, … diye korktuğu için) kalıplaşmış bir öbektir: hastalar ruh hastası sanılmaktan korktukları için anlatmıyor. 'With' en güçlü çeldiricidir, çünkü 'with fear' (korkuyla) diye bir duyguyu anlatan bir kullanım vardır; ama ardından 'of being thought' gelince bu kalıp kurulmaz. 'By', 'at' ve 'on' da 'fear of' ile bu anlamı vermez." },
      { konu: ['bağlantı zarfı'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['instead', 'similarly', 'therefore', 'for example', 'otherwise'], answer: 0,
        explain: "Noktalı virgülden önce durumun bir ruh hastalığı belirtisi sayılmadığı söyleniyor; sonra onun yerine konan açıklama geliyor: beyindeki görme alanları gözlerden olağan sinyali alamayınca kendi görüntülerini üretmeye başlıyor. Reddedilen açıklamanın yerine bir başkasını koyan bağlantı zarfı 'instead' (bunun yerine) olur. 'Therefore' en güçlü çeldiricidir, çünkü bir açıklamayı başlatıyor gibi durur; ama ruh hastalığı olmamayı beynin görüntü üretmesinin nedeni yapar. 'Similarly' benzerlik, 'for example' örnek, 'otherwise' 'aksi hâlde' bildirir; hiçbiri bu yer değiştirmeyi anlatmaz." },
      { konu: ['zaman uyumu'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['will learn', 'have learned', 'had learned', 'would learn', 'are learning'], answer: 1,
        explain: "'Once' ile kurulan zaman cümleciği geniş zamanlı 'find' ile birlikte genel bir durumu anlatıyor: kişiler nedenini öğrendikten sonra deneyimi daha az rahatsız edici bulur. Önce tamamlanması gereken eylem zaman cümleciğinde present perfect ile verilir: 'once they have learned'. 'Will learn' en güçlü çeldiricidir, çünkü öğrenmenin sonradan olacağını anlatıyor gibi durur; ama zaman cümleciklerinde gelecek anlamı 'will' ile kurulmaz. 'Had learned' ve 'would learn' geçmişe ya da varsayıma kayar, geniş zamanlı ana cümleye uymaz; 'are learning' öğrenmeyi sürmekte olan bir eylem yapar ve 'once' ile kurulan 'öğrendikten sonra' anlamını vermez." },
    ] },
  { id: 'd10-z2', course: C, type: 'pratik', tur: 'bosluklu', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Eklemdeki kristaller',
    text: 'Gout is a painful form of arthritis that develops when uric acid builds up in the blood and forms tiny, needle-shaped crystals inside a joint. An attack often begins suddenly, frequently at night, and the joint most commonly affected is the one at the base of the big toe. Uric acid is produced when the body breaks down substances called purines, (1) ---- are found in large amounts in red meat, in organ meats such as liver and in some kinds of seafood. In most mammals, an enzyme converts uric acid into a compound that the kidneys can remove (2) ---- ease. Humans and the other great apes, (3) ----, lost the ability to make this enzyme millions of years ago, and why this happened is still debated. For centuries gout was associated with wealthy men who ate and drank to excess. Diet does play a part, but in many people with gout the main problem appears to be that the kidneys fail (4) ---- enough uric acid, rather than that the body produces too much. (5) ---- meat and seafood, drinks sweetened with fructose have been linked to a higher risk of the condition.',
    steps: [
      { konu: ['sıfat cümleciği'],
        q: '(1) numaralı boşluğa hangisi gelir?',
        options: ['whose', 'what', 'who', 'where', 'which'], answer: 4,
        explain: "Virgülden sonra gelen boşluk 'purines' sözcüğünü niteleyen, tanımlamayan bir sıfat cümleciği açıyor ve cümlecikte 'are found' fiilinin öznesi eksik. Nesneler ve maddeler için bu konumda 'which' kullanılır. 'What' en güçlü çeldiricidir, çünkü 'şey' anlamıyla bir boşluğu doldurabilir gibi durur; ama kendi içinde öncülünü taşır ve bir ismi nitelemez. 'Whose' ardından isim ister; 'who' kişiler, 'where' yer içindir." },
      { konu: ['edatlı kalıp'],
        q: '(2) numaralı boşluğa hangisi gelir?',
        options: ['by', 'at', 'in', 'with', 'on'], answer: 3,
        explain: "'With ease' (kolaylıkla) kalıplaşmış bir öbektir: böbrekler bu bileşiği kolaylıkla atabilir. 'At' en güçlü çeldiricidir, çünkü 'at ease' (rahat, huzurlu) diye bilinen bir öbek vardır; ama bir kişinin ruh hâlini anlatır, bir işin kolayca yapılmasını değil. 'By', 'in' ve 'on' da 'ease' ile bu anlamı vermez." },
      { konu: ['bağlantı zarfı'],
        q: '(3) numaralı boşluğa hangisi gelir?',
        options: ['therefore', 'likewise', 'for instance', 'in addition', 'however'], answer: 4,
        explain: "Önceki cümle memelilerin çoğunda ürik asidi dönüştüren bir enzim olduğunu söylüyor; boşluklu cümle ise insanların ve öteki büyük maymunların bu enzimi yapma yeteneğini yitirdiğini anlatıyor. Bu karşıtlık 'however' ile kurulur. 'Likewise' en güçlü çeldiricidir, çünkü iki canlı grubunu bağlıyor gibi durur; ama benzerlik bildirir, oysa insanlar çoğu memeliden farklıdır. 'Therefore' sonuç, 'for instance' örnek, 'in addition' ekleme bildirir; hiçbiri bu karşıtlığı kurmaz." },
      { konu: ['isim-fiil ve mastar'],
        q: '(4) numaralı boşluğa hangisi gelir?',
        options: ['to remove', 'removing', 'to have been removed', 'remove', 'being removed'], answer: 0,
        explain: "'Fail' fiili ardından mastar alır: 'fail to do something' (bir şeyi yapamamak). Böbrekler yeterince ürik asidi atamıyor; özne 'the kidneys' atma işini yapan olduğu için etken mastar gerekir: 'to remove'. 'To have been removed' en güçlü çeldiricidir, çünkü o da mastardır; ama edilgen ve tamamlanmış bir eylem anlatır, ardından gelen nesne ('enough uric acid') ile de kurulamaz. 'Removing' ve 'being removed' bu fiille kullanılmaz; 'remove' mastar ekini düşürür." },
      { konu: ['çok sözcüklü edat'],
        q: '(5) numaralı boşluğa hangisi gelir?',
        options: ['In addition to', 'Instead of', 'Regardless of', 'Contrary to', 'On behalf of'], answer: 0,
        explain: "Önceki cümlelerde et ve deniz ürünleri risk etkenleri arasında sayılmıştı; boşluklu cümle bunlara bir etken daha ekliyor: früktozla tatlandırılmış içecekler. Ekleme bildiren edat 'In addition to' (… e ek olarak) uyar. 'Instead of' en güçlü çeldiricidir, çünkü iki besin grubunu yan yana koyar; ama et ve deniz ürünlerini riskten çıkarıp yerine içecekleri koyar, parçada ise etkenlerin ikisi de geçerlidir. 'Regardless of' (… e bakılmaksızın), 'Contrary to' (… in tersine) ve 'On behalf of' (… adına) bu ekleme ilişkisini kurmaz." },
    ] },

  // ---------- 31–41: cümle tamamlama ----------
  { id: 'd10-t1', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although appendicitis was once a frequent cause of death, ----.',
    options: [
      'it most commonly affects teenagers and people in their twenties',
      'it can now usually be treated successfully if caught in time',
      'its first symptom is often a dull pain around the navel',
      'the appendix is a small pouch attached to the large intestine',
      'doctors still disagree about what purpose the appendix serves',
    ], answer: 1,
    explain: "'Although' geçmişteki tehlike ile bugünkü durum arasında bir karşıtlık ister: apandisit bir zamanlar sık bir ölüm nedeniydi, ama bugün zamanında tanı konursa çoğu zaman başarıyla tedavi edilebilir. Hekimlerin apandisin işlevi konusunda hâlâ anlaşamaması en güçlü çeldiricidir, çünkü 'still' ile geçmişe bir gönderme yapıyor gibi durur; ama ölümcüllükle bir karşıtlık kurmaz, organın işleviyle ilgili ayrı bir bilgidir. En sık gençlerde görülmesi, ilk belirtinin göbek çevresinde ağrı olması ve apandisin kalın bağırsağa bağlı küçük bir kese olması da ölümcüllükle karşıtlık kurmayan ek bilgilerdir." },
  { id: 'd10-t2', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'While many common painkillers are safe when taken at the recommended dose, ----.',
    options: [
      'they are sold without a prescription in most pharmacies',
      'taking more than that can harm the liver, the stomach or the kidneys',
      'they are usually available as tablets, syrups or soluble powders',
      'people often keep a small supply of them at home for emergencies',
      'they relieve pain by acting on chemical signals in the body',
    ], answer: 1,
    explain: "'While' burada karşıtlık kuruyor: önerilen dozda güvenli olan ağrı kesiciler, bu dozun üstünde alınınca karaciğere, mideye ya da böbreklere zarar verebilir. Güvenli dozla aşırı doz arasındaki karşıtlığı yalnız bu tamamlama kuruyor. Reçetesiz satılmaları en güçlü çeldiricidir, çünkü güvenlikle ilgili bir izlenim verir; ama güvenli olmalarıyla uyumludur, ona karşıt bir durum getirmez. Tablet ve şurup olarak bulunmaları, evde bulundurulmaları ve vücuttaki kimyasal sinyaller üzerinden etki etmeleri de karşıtlık kurmaz." },
  { id: 'd10-t3', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Even though spinach is often described as an excellent source of iron, ----.',
    options: [
      'it contains more iron than many other leafy vegetables',
      'many cooks serve it raw in salads or as a hot vegetable dish',
      'it grows best in cool weather and in moist, fertile soil',
      'much of the iron it contains is poorly absorbed by the body',
      'the iron in its leaves helps the blood to carry oxygen',
    ], answer: 3,
    explain: "'Even though' beklentiyi bozan bir bilgi ister: ıspanak çok iyi bir demir kaynağı diye anılır, ama içerdiği demirin büyük bölümü vücutça iyi emilmez. Ünü sorgulayan bilgiyi yalnız bu tamamlama veriyor. Ispanağın birçok yapraklı sebzeden daha çok demir içermesi en güçlü çeldiricidir, çünkü o da demir miktarından söz ediyor; ama ünü destekler, karşıtlık kurmaz. Yapraklardaki demirin kanın oksijen taşımasına yardım etmesi de demirin yararını anlatır. Aşçıların onu çiğ ya da sıcak yemek olarak sunması ve serin havada yetişmesi ise demir kaynağı olmakla bir karşıtlık kurmaz." },
  { id: 'd10-t4', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although the health benefits of regular physical activity are well established, ----.',
    options: [
      'it is linked with a lower risk of heart disease and diabetes',
      'it can include walking, cycling, swimming or even gardening',
      'many adults in several countries still do not get enough of it',
      'it tends to improve both mood and the quality of sleep',
      'experts advise spreading it over most days of the week',
    ], answer: 2,
    explain: "'Although' bilinen ile yapılan arasındaki karşıtlığı istiyor: düzenli hareketin sağlığa yararı iyi bilinir, ama birçok ülkede birçok yetişkin yine de yeterince hareket etmez. Ruh hâlini ve uyku kalitesini iyileştirmesi en güçlü çeldiricidir, çünkü cümlenin başıyla uyumlu bir bilgidir; ama yararları saymayı sürdürür, karşıtlık kurmaz. Kalp hastalığı ve diyabet riskini azaltması da aynı biçimde yararları sürdürür. Yürüyüş ve bahçe işi gibi örnekler ve haftanın çoğu gününe yayma önerisi de girişe karşıt bir durum getirmez." },
  { id: 'd10-t5', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although the skin is the largest organ of the human body, ----.',
    options: [
      'it protects the tissues beneath it from germs, heat and injury',
      'it contains sweat glands that help to control body temperature',
      'over most of the body it is only a few millimetres thick',
      'it constantly sheds its outer layer and replaces it with new cells',
      'its colour depends mainly on a pigment known as melanin',
    ], answer: 2,
    explain: "'Although' büyüklükle beklenmedik bir özelliği karşı karşıya koymayı istiyor: deri vücudun en büyük organıdır, ama vücudun çoğu yerinde yalnız birkaç milimetre kalınlığındadır. Büyüklük ile incelik arasındaki karşıtlığı yalnız bu tamamlama kuruyor. Dış katmanını sürekli dökmesi en güçlü çeldiricidir, çünkü derinin şaşırtıcı bir özelliği gibi durur; ama büyüklükle bir karşıtlık kurmaz. Altındaki dokuları koruması, ter bezleri ve rengini melaninden alması da derinin büyüklüğüne karşıt bir durum değildir." },
  { id: 'd10-t6', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although herbal remedies are often promoted as natural and therefore harmless, ----.',
    options: [
      'many of them have been used in traditional medicine for centuries',
      'they are widely sold in health-food shops as well as pharmacies',
      'they are usually prepared from the leaves, roots or seeds of plants',
      'their popularity has grown steadily in a number of countries',
      'some of them can interfere with the way prescription drugs work',
    ], answer: 4,
    explain: "'Although' tanıtımdaki 'doğal, öyleyse zararsız' iddiasına karşıt bir bilgi istiyor: bitkisel ürünlerin bazıları reçeteli ilaçların etkisini bozabilir. Zararsızlık iddiasını sarsan yalnız bu tamamlamadır. Yüzyıllardır geleneksel tıpta kullanılmaları en güçlü çeldiricidir, çünkü cümlenin başındaki 'natural' ile ilgilidir; ama zararsızlık iddiasını destekler gibi durur, ona karşıt bir durum getirmez. Satıldıkları yerler, bitkinin hangi bölümlerinden yapıldıkları ve artan ilgi de karşıtlık kurmaz." },
  { id: 'd10-t7', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Even though dark chocolate contains compounds that may be good for the heart, ----.',
    options: [
      'it is made from the roasted and ground seeds of the cacao tree',
      'its taste is more bitter than that of milk chocolate because it contains less sugar',
      'it is also rich in sugar and fat, so eating a lot of it is unlikely to be healthy',
      'it was first consumed as a bitter drink in parts of Central America',
      'it contains a higher proportion of cocoa solids than milk chocolate does',
    ], answer: 2,
    explain: "'Even though' olası bir yararın karşısına bir sakınca koymayı istiyor: bitter çikolata kalbe yararlı olabilecek bileşikler içerir, ama şeker ve yağ bakımından da zengindir, bu yüzden çok yemek sağlıklı olmaz. Daha az şeker içerdiği için tadının sütlü çikolatadan acı olması en güçlü çeldiricidir, çünkü şekerden söz ediyor; ama bir sakınca değil, bir tat farkı bildirir ve yararla karşıtlık kurmaz. Kakao çekirdeğinden yapılması, ilk kez Orta Amerika'da içecek olarak tüketilmesi ve daha çok kakao katısı içermesi de karşıt bir durum getirmez." },
  { id: 'd10-t8', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'Although gallstones are very common, especially in older adults, ----.',
    options: [
      'they form in a small organ that stores bile beneath the liver',
      'in many cases they are made mainly of cholesterol',
      'most people who have them never develop any symptoms',
      'they can range in size from a grain of sand to a golf ball',
      'they are found more often in women than in men',
    ], answer: 2,
    explain: "'Although' yaygınlıkla beklenmedik bir sonucu karşı karşıya koyuyor: safra taşları çok yaygındır, ama onları taşıyanların çoğunda hiçbir belirti ortaya çıkmaz. Kadınlarda erkeklerden daha sık görülmesi en güçlü çeldiricidir, çünkü yaygınlıkla ilgili bir bilgidir; ama yaygınlığı ayrıntılandırır, ona karşıt bir durum getirmez. Taşların karaciğerin altındaki küçük bir organda oluşması, çoğunun kolesterolden yapılması ve boyutlarının değişmesi de karşıtlık kurmayan ek bilgilerdir." },
  { id: 'd10-t9', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['neden-sonuç'],
    q: 'Because the body breaks down some medicines within a few hours, ----.',
    options: [
      "they are usually sold without a doctor's prescription",
      'their side effects are seldom reported by the people who take them',
      'they are easier to swallow in liquid form than as tablets',
      'they tend to cost more than medicines whose effects last longer',
      'they have to be taken several times a day to keep their level steady',
    ], answer: 4,
    explain: "'Because' ile verilen neden şu: vücut bazı ilaçları birkaç saat içinde parçalar. Bunun doğal sonucu, kandaki düzeyi sabit tutmak için ilacın günde birkaç kez alınması gerekmesidir. Etkisi uzun süren ilaçlardan pahalı olmaları en güçlü çeldiricidir, çünkü ilacın etki süresine gönderme yapıyor; ama hızlı parçalanma fiyatı açıklamaz. Reçetesiz satılmaları, yan etkilerinin az bildirilmesi ve sıvı olarak daha kolay yutulmaları da hızlı parçalanmanın sonucu değildir." },
  { id: 'd10-t10', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['koşul'],
    q: 'If a person drinks a very large amount of water in a short time, ----.',
    options: [
      'water makes up more than half of the body weight of most adults',
      'their kidneys filter their entire blood supply many times a day',
      'thirst is normally triggered when the blood becomes too concentrated',
      'the level of sodium in their blood can fall to a dangerous degree',
      'a lack of fluid in their body can cause headaches and tiredness',
    ], answer: 3,
    explain: "Koşul kısa sürede çok fazla su içmektir; ana cümle bu koşulun sonucunu vermeli. Bilinen tehlikeli sonuç, kandaki sodyumun aşırı seyrelmesi, yani sodyum düzeyinin tehlikeli ölçüde düşmesidir. Öteki tamamlamaların her biri kendi başına doğru bir bilgidir, ama koşulun sonucu değildir. Susamanın kan fazla yoğunlaşınca başlaması en güçlü çeldiricidir, çünkü su ve kan dengesiyle ilgilidir; ama bu her zaman geçerli bir düzenektir, çok su içmenin doğurduğu bir durum değildir, üstelik çok su içmek kanı yoğunlaştırmaz, seyreltir. Böbreklerin kişinin bütün kanını günde birçok kez süzmesi 'their' ile kişiye bağlansa da her gün olan bir işi anlatır, koşulun sonucu değildir. Suyun yetişkinlerin vücut ağırlığının yarısından fazlası olması kişinin ne içtiğine bağlı değildir. Vücutta sıvı eksikliğinin baş ağrısı ve yorgunluk yapması ise susuzlukla ilgilidir, çok su içmekle değil." },
  { id: 'd10-t11', course: C, type: 'soru', tur: 'cumle-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['zaman'],
    q: 'Since smoking was banned in enclosed public places in a number of countries, ----.',
    options: [
      'several studies have reported fewer heart attack admissions there',
      'cigarettes have been made mainly from the dried leaves of the tobacco plant',
      'nicotine has been the main substance that makes tobacco addictive',
      'the lungs have been the organs most directly exposed to tobacco smoke',
      'tobacco smoke contains thousands of different chemical compounds',
    ], answer: 0,
    explain: "'Since' burada 'den beri' anlamında bir başlangıç noktası veriyor; ana cümle present perfect ile o noktadan bu yana başlayan ya da değişen bir durumu anlatmalı. Kapalı alanlarda sigara yasağından bu yana bazı çalışmaların kalp krizi nedeniyle hastaneye yatışlarda azalma bildirmesi bu zaman çerçevesine uyuyor ve yasakla anlamlı bir bağ kuruyor. Öteki tamamlamalar kendi başına doğru bilgilerdir, ama yasakla başlamış ya da değişmiş durumlar değildir. Nikotinin tütünü bağımlılık yapıcı kılan başlıca madde olması en güçlü çeldiricidir, çünkü yapısı uyar ve sigarayla ilgili doğru bir bilgidir; ama yasaktan çok önce de böyleydi, yasak bunu değiştirmedi. Sigaranın tütün yaprağından yapılması ve akciğerlerin dumana en doğrudan maruz kalan organ olması için de aynı durum geçerlidir. Tütün dumanının binlerce bileşik içermesi ise geniş zamanlıdır; 'since' ile kurulan başlangıç noktasına bağlanmaz." },

  // ---------- 42–47: çeviri İng. → Tr. ----------
  { id: 'd10-c1', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'People whose blood lacks one of the proteins needed for clotting may bleed for a long time after even a minor injury.',
    options: [
      'Kanlarında pıhtılaşma için gereken proteinlerden biri eksik olan kişiler, küçük bir yaralanmadan sonra bile uzun süre kanar.',
      'Küçük bir yaralanmadan sonra bile uzun süre kanayan kişilerin kanında, pıhtılaşma için gereken proteinlerden birinin eksik olduğu düşünülebilir.',
      'Kanlarında pıhtılaşma için gereken proteinlerden biri eksik olan kişiler, ancak büyük bir yaralanmadan sonra uzun süre kanar.',
      'Kanlarında pıhtılaşma için gereken proteinlerden birkaçı eksik olan kişiler, küçük bir yaralanmadan sonra bile uzun süre kanar.',
      'Kanlarında pıhtılaşma için gereken proteinlerden biri eksik olan kişiler, küçük bir yaralanmadan sonra bile uzun süre kanayabilir.',
    ], answer: 4,
    explain: "'Whose blood lacks one of the proteins needed for clotting' bir sıfat cümleciğidir: kanında pıhtılaşma için gereken proteinlerden biri eksik olan kişiler. Ana yüklem 'may bleed for a long time after even a minor injury': küçük bir yaralanmadan sonra bile uzun süre kanayabilir. 'Uzun süre kanar' diye biten ve başka yeri değişmeyen çeviri, 'may' sözünün olasılığını kesinliğe çeviriyor. 'Proteinlerden birkaçı' diyen çeviride eksik protein sayısı da artıyor. 'Ancak büyük bir yaralanmadan sonra' diyen çeviri 'even a minor injury' sözünün kapsamını tersine çeviriyor. Uzun süren kanamadan protein eksikliğine giden çeviri ise kişileri tanımlayan özellik ile sonucu yer değiştiriyor." },
  { id: 'd10-c2', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Some medicines work less well when taken with food, since food can slow down their absorption into the bloodstream.',
    options: [
      'Çoğu ilaç yemekle birlikte alındığında etkisini daha geç gösterir, çünkü besinler ilacın kana geçişini yavaşlatabilir.',
      'Bazı ilaçlar yemekle birlikte alınmalıdır, çünkü besinler ilacın kana geçişini yavaşlatabilir.',
      'Çoğu ilaç yemekle birlikte alındığında daha az etkili olur, çünkü besinler ilacın kana geçişini yavaşlatabilir.',
      'Çoğu ilaç yemekle birlikte alındığında daha az etkili olur, çünkü besinler ilacın kana geçişini yavaşlatır.',
      'Bazı ilaçlar yemekle birlikte alındığında daha az etkili olur, çünkü besinler ilacın kana geçişini yavaşlatabilir.',
    ], answer: 4,
    explain: "Cümle bir sonucu ve nedenini 'since' ile bağlıyor: bazı ilaçlar yemekle alınınca daha az etkili olur, çünkü besinler ilacın kana geçişini yavaşlatabilir. 'Çoğu ilaç' ile başlayan ve geri kalanı aynı olan çeviri, 'some medicines' sözünü ilaçların çoğuna genişletiyor. 'Etkisini daha geç gösterir' diyen çeviride 'work less well' de etkinin gecikmesine dönüşüyor. 'Yavaşlatır' ile biten çeviri 'can slow down' sözündeki olasılığı kesinliğe çeviriyor. İlacın yemekle 'alınmalıdır' diyen çeviri ise azalan etkiyi atıp cümleyi tersine bir öneriye dönüştürüyor." },
  { id: 'd10-c3', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['ortaç öbeği'],
    q: "Foods labelled 'low fat' may contain more sugar than the original versions, added to make up for the loss of flavour.",
    options: [
      "'Az yağlı' etiketli yiyecekler, azalan dokuyu telafi etmek için şeker eklendiğinden asıl hâllerinden daha çok şeker içerir.",
      "'Az yağlı' etiketli yiyecekler, azalan lezzeti telafi etmek için şeker eklendiğinden asıl hâllerinden daha çok şeker içerir.",
      "'Az yağlı' etiketli yiyeceklere, azalan lezzeti telafi etmek için asıl hâllerindekinden çok daha az şeker eklenebilir.",
      "'Az yağlı' etiketli yiyecekler, azalan lezzeti telafi etmek için şeker eklendiğinden asıl hâllerinden daha çok şeker içerebilir.",
      "'Az şekerli' diye etiketlenen yiyecekler, azalan lezzeti telafi etmek için yağ eklendiğinden asıl hâllerinden daha çok yağ içerir.",
    ], answer: 3,
    explain: "Cümlenin sonundaki 'added to make up for the loss of flavour' şekeri niteleyen bir ortaç öbeğidir: şeker, azalan lezzeti telafi etmek için eklenir. Ana yüklem 'may contain more sugar than the original versions': asıl ürünlerden daha çok şeker içerebilir. 'İçerir' ile biten ve başka yeri değişmeyen çeviri, 'may' sözünün olasılığını kesinliğe çeviriyor. Şekerin 'azalan dokuyu' telafi etmek için eklendiğini söyleyen çeviride amaç da değişiyor. 'Az şekerli' ürünlere yağ eklendiğini anlatan çeviri yağ ile şekerin yerini değiştiriyor. Asıl hâllerindekinden 'çok daha az şeker' eklendiğini söyleyen çeviri ise karşılaştırmayı tersine çeviriyor." },
  { id: 'd10-c4', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['isim cümleciği'],
    q: 'What many people do not realise is that much of the salt they eat comes from processed foods rather than from the salt they add at the table.',
    options: [
      'Birçok insanın farkında olmadığı şey, yedikleri tuzun büyük bir bölümünün sofrada ekledikleri tuzdan değil, işlenmiş yiyeceklerden gelmesidir.',
      'Birçok insanın farkında olmadığı şey, yedikleri tuzun büyük bir bölümünün yemek pişirirken tencereye ekledikleri tuzdan değil, fırından aldıkları ekmekten gelmesidir.',
      'Birçok insanın farkında olmadığı şey, yedikleri tuzun büyük bir bölümünün sofrada ekledikleri tuzdan değil, ekmekten gelmesidir.',
      'Birçok insanın farkında olmadığı şey, sofrada ekledikleri tuzun işlenmiş yiyeceklerin içindeki tuzdan çok daha zararlı olabilmesidir.',
      'Birçok insanın bildiği şey, yedikleri tuzun büyük bir bölümünün sofrada ekledikleri tuzdan değil, ekmekten gelmesidir.',
    ], answer: 0,
    explain: "'What many people do not realise' bir isim cümleciğidir ve özne görevindedir: birçok insanın farkında olmadığı şey. Yüklemden sonra gelen 'that' cümleciği bu şeyi açıklıyor: yenen tuzun büyük bölümü sofrada eklenen tuzdan değil, işlenmiş yiyeceklerden ('processed foods') gelir. Kaynağı 'ekmek' diye veren ve geri kalanı aynı olan çeviri, işlenmiş yiyeceklerin geniş kapsamını tek bir yiyeceğe indiriyor. 'Yemek pişirirken tencereye ekledikleri tuz' ile karşılaştıran çeviride karşılaştırmanın öbür ucu da sofradaki tuz olmaktan çıkıyor. 'Birçok insanın bildiği şey' diye başlayan çeviri farkında olmamayı bilmeye çeviriyor. Sofradaki tuzun 'çok daha zararlı' olabildiğini söyleyen çeviri ise miktar karşılaştırmasını zarar karşılaştırmasına çeviriyor." },
  { id: 'd10-c5', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['zaman'],
    q: 'It was not until the end of the nineteenth century that mosquitoes were shown to spread malaria.',
    options: [
      'Sıtmayı sivrisineklerin yaydığı ancak on dokuzuncu yüzyılın başında ileri sürüldü.',
      'Sıtmayı sivrisineklerin yaydığı, on dokuzuncu yüzyılın sonundan çok önce biliniyordu.',
      'Sıtmayı sivrisineklerin yaydığı ancak on dokuzuncu yüzyılın sonunda gösterildi.',
      'Sıtmayı sivrisineklerin yaydığı ancak on dokuzuncu yüzyılın başında gösterildi.',
      'Sıtmayı sineklerin yaydığı ancak on dokuzuncu yüzyılın başında gösterildi.',
    ], answer: 2,
    explain: "'It was not until … that' kalıbı bir şeyin ancak belirli bir zamanda gerçekleştiğini vurgular: sivrisineklerin sıtmayı yaydığı ancak on dokuzuncu yüzyılın sonunda gösterildi. Edilgen 'were shown' bilginin kanıtlandığını anlatıyor. Kanıtı 'yüzyılın başında' gösteren ve geri kalanı aynı olan çeviri, tarihi yüzyılın sonundan başına çekiyor. 'İleri sürüldü' diyen çeviride kanıtlama bir savın ortaya atılmasına dönüşüyor. 'Sineklerin yaydığı' diyen çeviri sivrisinekleri genel olarak sineklerle değiştiriyor. 'Çok önce biliniyordu' ise taşıyıcıyı doğru anarken 'not until' sözünün bildirdiği gecikmeyi tersine çeviriyor." },
  { id: 'd10-c6', course: C, type: 'soru', tur: 'ceviri-et', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşılaştırma'],
    q: 'The longer some medicines are used, the less effective they may become at the same dose, a process known as tolerance.',
    options: [
      'Bazı ilaçlar ne kadar uzun süre kullanılırsa aynı dozda o kadar etkili olur; bu sürece tolerans denir.',
      'Bazı ilaçlar ne kadar uzun süre kullanılırsa aynı etki için o kadar düşük doz gerekebilir; bu sürece tolerans denir.',
      'Bazı ilaçlar ne kadar uzun süre kullanılırsa aynı dozda o kadar az etkili olabilir; bu sürece tolerans denir.',
      'Bazı ilaçlar ne kadar uzun süre kullanılırsa aynı dozda o kadar az etkili olur; bu sürece tolerans denir.',
      'Çoğu ilaç ne kadar uzun süre kullanılırsa aynı dozda o kadar az etkili olur; bu sürece tolerans denir.',
    ], answer: 2,
    explain: "'The longer …, the less …' iki değişimin birlikte ilerlediğini anlatır: bazı ilaçlar ne kadar uzun kullanılırsa aynı dozda o kadar az etkili olabilir; bu sürece tolerans denir. 'Az etkili olur' diyen ve başka yeri değişmeyen çeviri, 'may become' sözünün olasılığını kesinliğe çeviriyor. 'O kadar etkili olur' diyen çeviride 'az' düşüyor ve etki artıyor gibi görünüyor. 'Çoğu ilaç' ile başlayan çeviri kapsamı ilaçların çoğuna genişletiyor. Aynı etki için gittikçe 'daha düşük doz' gerektiğini söyleyen çeviri ise toleransı tersine çeviriyor: tolerans gelişince aynı etki için daha yüksek doz gerekir." },

  // ---------- 48–53: çeviri Tr. → İng. ----------
  { id: 'd10-c7', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['isim cümleciği'],
    q: 'Hava kirliliğinin yalnızca akciğerleri değil, kalbi ve damarları da etkilediği giderek daha iyi anlaşılıyor.',
    options: [
      'It is becoming increasingly clear that air pollution affects the heart and blood vessels rather than the lungs.',
      'It is becoming increasingly clear that air pollution affects not only the lungs but also the heart and blood vessels.',
      'It has long been clear that air pollution affects not only the lungs but also the heart and blood vessels.',
      'It is becoming increasingly clear that air pollution affects not only the lungs but also the brain and nerves.',
      'It is becoming increasingly clear that air pollution affects the lungs only when the heart and blood vessels are weak.',
    ], answer: 1,
    explain: "Türkçe cümlede bir eklemeli kapsam ('yalnızca akciğerleri değil, kalbi ve damarları da': 'not only … but also') ve süregiden bir anlayış ('giderek daha iyi anlaşılıyor': 'is becoming increasingly clear') var. 'Rather than' diyen çeviri kalp ve damarları doğru veriyor, ama akciğerlerin etkilenmediğini söylüyor. 'It has long been clear' süregiden anlayışı çoktandır bilinen bir gerçeğe çeviriyor. 'The brain and nerves' etkilenen organları değiştiriyor. Akciğerlerin yalnız kalp ve damarlar zayıfken etkilendiğini söyleyen çeviri ise cümlede olmayan bir koşul kuruyor." },
  { id: 'd10-c8', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['edilgen'],
    q: 'Kemikler durağan dokular değildir; yaşam boyunca eski kemik dokusu yıkılır ve yerine yenisi yapılır.',
    options: [
      'Bones are not static tissues; throughout life, old bone tissue is broken down because new tissue is built in its place.',
      'Bones are not static tissues; in later life, old bone tissue is broken down and replaced with new tissue.',
      'Bones are not static tissues; in later life, damaged bone tissue is broken down and replaced with new tissue.',
      'Bones are not static tissues; throughout life, old bone tissue is broken down and replaced with new tissue.',
      'Bones are not static tissues; in later life, old bone tissue is broken down and replaced with fatty tissue.',
    ], answer: 3,
    explain: "Türkçe cümle iki bölümlüdür: kemiklerin durağan olmadığı ve yaşam boyunca eski dokunun yıkılıp yerine yenisinin yapıldığı. İkinci bölümdeki iki yüklem de edilgendir ('is broken down and replaced'); 'yaşam boyunca' da 'throughout life' olur. 'In later life' diyen ve geri kalanı aynı olan çeviri, süreci yaşamın ileri yıllarına sınırlıyor. 'Damaged bone tissue' diyen çeviride yıkılan doku da eski doku olmaktan çıkıp hasarlı dokuya dönüşüyor. 'Fatty tissue' diyen çeviri yerine yapılan dokuyu yağ dokusu yapıyor. 'Because' ile kurulan çeviri ise 'yaşam boyunca' sözünü doğru verse de iki ardışık süreci neden-sonuç ilişkisine çeviriyor." },
  { id: 'd10-c9', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['bağlaç'],
    q: 'Yaşlandıkça susama duygusu zayıfladığı için yaşlı insanlar gün içinde yeterince su içmeyebilir.',
    options: [
      'Because the sense of thirst weakens with age, older people may not drink enough water during the day.',
      'Because the sense of thirst weakens with age, older women may not drink enough water in hot weather.',
      'Although the sense of thirst weakens with age, older people still drink enough water during the day.',
      'Because the sense of thirst weakens with age, older people do not drink enough water in hot weather.',
      'Because the sense of thirst weakens with age, older people may not drink enough water in hot weather.',
    ], answer: 0,
    explain: "Türkçe cümlede bir neden ('susama duygusu zayıfladığı için': 'Because the sense of thirst weakens') ve olasılık bildiren bir sonuç ('içmeyebilir': 'may not drink') var; 'yaşlandıkça' 'with age', 'gün içinde' de 'during the day' ile karşılanıyor. 'In hot weather' ile biten ve başka yeri değişmeyen çeviri, 'gün içinde'yi sıcak havaya çeviriyor; zaman yerine bir hava koşulundan söz ediyor. 'Older women' diyen çeviride sıcak hava kaymasına kapsamın yaşlı kadınlara daralması ekleniyor. 'Do not drink … in hot weather' diyen çeviri olasılığı kesin bir yargıya çeviriyor ve zamanı da sıcak havaya kaydırıyor. 'Although … still drink enough' ise zamanı doğru verse de nedeni karşıtlığa, sonucu da tersine çeviriyor." },
  { id: 'd10-c10', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['isim-fiil ve mastar'],
    q: 'Yeni bir ilacın, laboratuvardaki ilk denemelerden başlayarak piyasaya çıkması on yıldan uzun sürebilir.',
    options: [
      'It can take less than ten years for a new drug to reach the market, starting from the first laboratory tests.',
      'It took more than ten years for the first new drug to reach the market after it had been tested in a laboratory.',
      'It always takes less than ten years for a new drug to reach the market, starting from the first laboratory tests.',
      'It can take more than ten years for a new drug to reach the market, starting from the first laboratory tests.',
      'It can take less than ten years for a new drug to reach the market, starting from the final laboratory tests.',
    ], answer: 3,
    explain: "Türkçe cümlede bir süre ('on yıldan uzun': 'more than ten years'), bir olasılık ('sürebilir': 'can take') ve bir başlangıç noktası ('ilk denemelerden başlayarak': 'starting from the first laboratory tests') var; 'It takes … for something to do' kalıbı bunu karşılar. 'Less than ten years' diyen ve geri kalanı aynı olan çeviri, süreyi tersine çeviriyor. 'It always takes' ile başlayan çeviride olasılık da istisnasız bir genellemeye dönüşüyor. 'Final laboratory tests' diyen çeviri başlangıcı ilk denemelerden son denemelere kaydırıyor. 'It took … the first new drug' ise süreyi doğru verse de genel bir bilgiyi geçmişteki tek bir olaya çeviriyor." },
  { id: 'd10-c11', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['isim cümleciği'],
    q: 'Diş eti hastalığı ile kalp hastalıkları arasında bir ilişki bulunmuştur, ancak birinin ötekine yol açıp açmadığı henüz bilinmiyor.',
    options: [
      'A link has been found between gum disease and heart disease, but it is not widely known whether one causes the other.',
      'Gum disease has been found to cause heart disease, though how it does so is not yet understood.',
      'A link has been found between gum disease and heart disease, but it is not yet known whether one causes the other.',
      'A link has been found between gum disease and heart disease, but it is not widely known which one causes the other.',
      'A link has been found between kidney disease and heart disease, but it is not widely known whether one causes the other.',
    ], answer: 2,
    explain: "Türkçe cümle ilişki ile nedensellik arasındaki farkı koruyor: bir ilişki bulunmuştur ('A link has been found'), ama birinin ötekine yol açıp açmadığı ('whether one causes the other') henüz bilinmiyor ('not yet known'). 'Not widely known' diyen ve başka yeri değişmeyen çeviri, bilimsel bir belirsizliği bilginin yaygın olmamasına çeviriyor. 'Kidney disease' diyen çeviride ilişkinin taraflarından biri de böbrek hastalığına dönüşüyor. 'Which one causes the other' diyen çeviri nedenselliği verilmiş sayıp yalnız yönünü soruyor. Diş eti hastalığının kalp hastalığına 'yol açtığının bulunduğunu' söyleyen çeviri ise ilişkiyi kanıtlanmış bir nedenselliğe çeviriyor." },
  { id: 'd10-c12', course: C, type: 'soru', tur: 'ceviri-te', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['sıfat cümleciği'],
    q: 'Uzun süre ayakta çalışan kişilerin bacaklarında varis gelişme olasılığı daha yüksektir.',
    options: [
      'People who worked sitting down for long periods were more likely to develop varicose veins in their legs.',
      'People who develop varicose veins in their legs are more likely to work standing up for long periods.',
      'People who work sitting down for long periods are more likely to develop varicose veins in their legs.',
      'People who work standing up for long periods are more likely to develop varicose veins in their legs.',
      'People who work sitting down for long periods are less likely to develop varicose veins in their legs.',
    ], answer: 3,
    explain: "Türkçe cümlede bir sıfat cümleciği ('uzun süre ayakta çalışan kişiler': 'people who work standing up for long periods') ve bir olasılık karşılaştırması ('olasılığı daha yüksektir': 'are more likely to develop') var. 'Sitting down' diyen ve geri kalanı aynı olan çeviri, ayakta çalışmayı oturarak çalışmaya çeviriyor. 'Less likely' diyen çeviride karşılaştırma da tersine dönüyor. 'Worked … were more likely' ile kurulan çeviri genel bir bilgiyi geçmişe ait bir duruma dönüştürüyor. Varisi olanların ayakta çalışma olasılığından söz eden çeviri ise özneyle sonucu yer değiştiriyor." },

  // ---------- 54–59: paragraf tamamlama ----------
  { id: 'd10-p1', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['gönderim'],
    q: 'The eyes produce tears almost constantly, not only when we cry. A thin film of so-called basal tears covers the surface of the eye at all times, keeping it moist and washing away dust. ----. These reflex tears arrive in much larger quantities and help to flush the irritant out. A third kind, emotional tears, is produced in response to strong feelings, and why humans shed them remains a matter of debate.',
    options: [
      'Most of this fluid drains away through tiny openings near the inner corner of each eye',
      'As a result, people who blink less often than usual may find that their eyes feel dry',
      'Emotional tears, by contrast, are thought to differ slightly in their chemical make-up',
      'For this reason, doctors sometimes measure how much fluid the eye produces in a few minutes',
      'When something irritating such as smoke or grit reaches the eye, a second kind is released',
    ], answer: 4,
    explain: "Boşluktan sonraki cümle 'These reflex tears' diye başlıyor ve 'the irritant' (tahriş eden şey) sözüne gönderme yapıyor; demek ki boşlukta hem ikinci tür gözyaşı hem de göze giren tahriş edici bir şey tanıtılmalı. Duman ya da toz gibi bir şey göze ulaşınca ikinci bir türün salgılandığını söyleyen cümle bu iki göndermeyi karşılıyor; ardından gelen 'A third kind' de sayımı sürdürüyor. Gözyaşının iç köşedeki küçük deliklerden akıp gitmesi en güçlü çeldiricidir, çünkü bazal gözyaşını sürdürür; ama 'These reflex tears' ve 'the irritant' için bir öncül sağlamaz. Az göz kırpmanın kuruluğa yol açması ve hekimlerin gözyaşı miktarını ölçmesi de bu göndermeleri karşılamaz; duygusal gözyaşından söz eden cümle ise 'A third kind' ile tanıtılan türü erkenden getiriyor." },
  { id: 'd10-p2', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['gönderim'],
    q: 'For people with synaesthesia, stimulating one sense automatically triggers an experience in another. ----. Others report that musical notes or particular words have distinct tastes. These links are usually remarkably consistent: a person who sees the number five as red in childhood will typically still see it as red decades later. Because the condition tends to run in families, researchers suspect that genes play a part in it.',
    options: [
      "The term comes from two Greek words meaning 'together' and 'sensation'",
      'As a result, it is often mistaken for a disorder of the eyes or ears',
      'Most of them, however, regard it as a serious handicap in daily life',
      'Some, for instance, see particular letters or numbers in fixed colours',
      'Such experiences are thought to be rare among very young children',
    ], answer: 3,
    explain: "Boşluktan sonraki cümle 'Others report …' diye başlıyor; bu, öncesinde 'Some …' ile başlayan bir örnek beklendiğini gösterir. İlk cümledeki genel tanımı örnekleyen ve bu 'Some … Others' dizisini başlatan cümle, bazı kişilerin belirli harf ya da sayıları sabit renklerde gördüğünü söyleyen cümledir; sonraki cümledeki 'the number five as red' örneği de buna dayanıyor. Terimin Yunanca kökenini veren cümle en güçlü çeldiricidir, çünkü tanımın hemen ardından gelebilir gibi durur; ama 'Others' için bir öncül sağlamaz ve beşin kırmızı görülmesi örneğini hazırlamaz. Göz bozukluğuyla karıştırılması ve ciddi bir engel sayılması parçada desteklenmez; küçük çocuklarda seyrek olduğu bilgisi de çocuklukta başlayan tutarlılık örneğiyle çatışır ve 'Others' ile bağ kurmaz." },
  { id: 'd10-p3', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['neden-sonuç'],
    q: 'Grapefruit juice can change the way the body handles a number of common medicines. The fruit contains substances that block an enzyme in the wall of the intestine which normally breaks down part of each dose before it reaches the bloodstream. ----. For some drugs, such as certain medicines used to lower cholesterol or blood pressure, this can be enough to raise the risk of side effects. The effect was discovered by chance in the late 1980s, when researchers used grapefruit juice to hide the taste of alcohol in a study of a blood pressure drug.',
    options: [
      'As a result, the medicines leave the body far more quickly than they usually do',
      'Drinking the juice an hour or two later is therefore thought to prevent the problem',
      'With the enzyme out of action, more of the drug reaches the blood than intended',
      'Orange juice, by contrast, is mainly valued as a source of vitamin C',
      'Many patients prefer to swallow their tablets with a glass of plain water',
    ], answer: 2,
    explain: "Boşluktan önce greyfurtun, ilacın bir kısmını kana geçmeden parçalayan bir enzimi engellediği söyleniyor; boşluktan sonra 'this can be enough to raise the risk of side effects' geliyor. Aradaki halka, enzim devre dışı kalınca ilacın kana amaçlanandan fazla geçmesidir; 'this' de bu fazlalığa gönderme yapıyor. İlaçların vücuttan daha hızlı atıldığını söyleyen cümle en güçlü çeldiricidir, çünkü bir sonuç bildiriyor; ama enzimin engellenmesinin tersini söyler ve yan etki riskinin artmasını açıklamaz. Suyu bir iki saat sonra içmenin sorunu önlediği parçada desteklenmez ve 'this' göndermesini karşılamaz. Portakal suyu ve tabletleri suyla yutma cümleleri akışı koparır." },
  { id: 'd10-p4', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', konu: ['akış'],
    q: 'Studies which find that a new treatment works are more likely to be published than studies which find that it does not. ----. To reduce this problem, a group of leading medical journals decided in the mid-2000s that they would publish the results of a clinical trial only if it had been registered in a public database before the first patient joined. Registration makes it harder for disappointing trials to vanish quietly, since anyone can check which studies were started and whether their results ever appeared.',
    options: [
      'This is because researchers are already required by law to publish every trial they begin',
      'As a result, published evidence may make a treatment look better than it is',
      'In contrast, negative findings tend to appear in the most widely read medical journals',
      'Most clinical trials, for this reason, take more than ten years to complete',
      'Some treatments are tested on thousands of patients in several different countries',
    ], answer: 1,
    explain: "İlk cümle olumlu sonuçlu çalışmaların daha kolay yayımlandığını söylüyor; boşluktan sonra 'To reduce this problem' geliyor. Demek ki boşlukta bu eğilimin yol açtığı bir sorun anlatılmalı: yayımlanmış kanıtlar bir tedaviyi olduğundan daha iyi gösterebilir. Araştırmacıların her denemeyi yayımlamaya yasayla zorunlu olduğunu söyleyen cümle en güçlü çeldiricidir, çünkü yayımlamayla ilgilidir; ama ilk cümledeki eğilimi açıklamaz, tersine onunla çelişir ve kayıt önleminin neden gerektiğini anlamsız kılar. Olumsuz bulguların en çok okunan dergilerde çıkması ilk cümleyle çelişir. Denemelerin on yıldan uzun sürmesi ve binlerce hastayla yapılması da 'this problem' göndermesini karşılamaz." },
  { id: 'd10-p5', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['gönderim'],
    q: 'Déjà vu, the strange feeling that a new situation has been experienced before, is very common: surveys suggest that a majority of people have had it at least once. ----. People who travel a lot and those who often remember their dreams also seem to report it more frequently. One idea is that the feeling arises when the brain briefly signals familiarity without finding any matching memory, but the exact cause is still unknown.',
    options: [
      "The term comes from French and means, quite literally, 'already seen'",
      'Young adults report it most often, and it seems to fade with age',
      'As a result, most people who experience it decide to seek medical advice',
      'For this reason, it has long been classed as a symptom of mental illness',
      'Its opposite, the sense that a familiar place is strange, is much rarer',
    ], answer: 1,
    explain: "Boşluktan sonraki cümlede 'also seem to report it more frequently' var: çok seyahat edenler ve rüyalarını sık hatırlayanlar da bu duyguyu daha sık bildiriyor. 'Also' öncesinde başka bir grubun daha sık bildirdiğinin söylenmiş olmasını gerektiriyor. Duygunun en çok genç yetişkinlerce bildirildiğini ve yaşla seyrekleştiğini söyleyen cümle bu öncülü sağlıyor. Terimin Fransızca kökenini veren cümle en güçlü çeldiricidir, çünkü tanımın ardından doğal görünür; ama hiçbir grubun daha sık bildirdiğinden söz etmez. Karşıt duygunun daha seyrek olması da bir sıklık bilgisidir ama bir grup tanıtmaz. Çoğu kişinin hekime gitmesi ve duygunun ruh hastalığı belirtisi sayılması parçanın 'çok yaygın' ve 'nedeni bilinmiyor' sözleriyle çelişir." },
  { id: 'd10-p6', course: C, type: 'soru', tur: 'paragraf-tamamlama', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['karşıtlık'],
    q: 'The burning sensation caused by chilli peppers is not a taste at all. Capsaicin, the compound responsible, binds to receptors on nerve endings in the mouth that normally respond to painful heat, so the brain receives much the same message it would get from a scalding drink. ----. Milk tends to bring faster relief, possibly because some of its proteins help to wash the compound away. People who eat spicy food regularly often find that the burning becomes less intense over time, as the nerve endings grow less sensitive.',
    options: [
      'As a result, the inside of the mouth actually becomes several degrees hotter',
      'Chilli peppers were first grown in the Americas several thousand years ago',
      'Birds, however, can eat even the hottest peppers without feeling any burning',
      'Water brings little relief, since capsaicin does not dissolve well in it',
      'For this reason, the hottest peppers are usually picked before they ripen',
    ], answer: 3,
    explain: "Boşluktan sonraki cümle 'Milk tends to bring faster relief' diyor; 'faster' bir karşılaştırma ister: süt neye göre daha çabuk rahatlatıyor? Boşlukta yanmayı pek gidermeyen bir şey anılmalı. Suyun yanmayı pek dindirmediğini, çünkü kapsaisinin suda iyi çözünmediğini söyleyen cümle bu karşılaştırmanın öteki ucunu veriyor; sütün bileşiği 'yıkayıp götürmesi' de bununla uyumlu. Kuşların acıyı hissetmemesi en güçlü çeldiricidir, çünkü kapsaisinle ilgili doğru bir bilgidir ve 'however' ile karşıtlık kuruyor gibi durur; ama sütün neye göre daha çabuk rahatlattığını açıklamaz. Ağzın gerçekten ısındığı bilgisi parçadaki 'aynı mesaj' açıklamasıyla çelişir. Biberlerin Amerika kökeni ve olgunlaşmadan toplanması akışı koparır." },

  // ---------- 60–65: akışı bozan cümle ----------
  { id: 'd10-b1', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Inside the inner ear, tiny crystals of calcium carbonate normally rest on a sensitive membrane that helps the body to detect gravity and movement.',
      'Occasionally some of them break loose and drift into one of the fluid-filled canals that sense turning movements of the head.',
      'When the head moves, the loose crystals keep rolling for a moment after it has stopped, so the brain receives a false signal that the body is still turning.',
      'Another part of the inner ear, the snail-shaped cochlea, converts the vibrations of sound into signals that travel along the hearing nerve.',
      'The result is a brief but intense spell of spinning, often set off by turning over in bed or looking up at a high shelf.',
    ], answer: 3,
    explain: "Parça bir baş dönmesi türünün denge düzeneğinde nasıl oluştuğunu anlatıyor: iç kulaktaki küçük kristaller bir zarın üstünde durur (I), bazıları yerinden kopup dönme hareketini algılayan kanallara kayar (II), baş hareket edince gevşek kristaller bir süre daha yuvarlanır ve beyin yanlış bir dönme sinyali alır (III), sonuç kısa ama şiddetli bir dönme hissidir (V). IV. cümle de iç kulakla ilgilidir, ama denge düzeneğinden ayrılıp işitmeye, salyangozun sesi sinir sinyallerine çevirmesine geçiyor; parçanın anlattığı baş dönmesiyle anlamca bağı yok. Çıkarılınca III'ten V'e geçiş kusursuzdur: V'teki sonuç III'te anlatılan yanlış sinyalin sonucudur." },
  { id: 'd10-b2', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Eating ice cream too quickly can cause a sudden, stabbing pain in the forehead, which starts when something very cold touches the roof of the mouth.',
      'Children appear to experience it more often than adults, perhaps because they tend to eat cold foods faster.',
      'This sudden chill makes the blood vessels in that area narrow and then quickly widen again.',
      'The change is picked up by a large nerve that serves much of the face, and the brain mistakenly places the pain in the forehead.',
      'Pressing the tongue against the roof of the mouth to warm it is often said to make the pain pass more quickly.',
    ], answer: 1,
    explain: "Parça soğuk bir şey yiyince alında beliren ani ağrının nasıl oluştuğunu anlatıyor: ağrı damağa çok soğuk bir şey değince başlar (I), bu ani soğukluk oradaki damarları önce daraltıp sonra hızla genişletir (III), değişimi yüzün büyük bölümüne hizmet eden bir sinir algılar ve beyin ağrıyı alına yerleştirir (IV), damağı ısıtmanın ağrıyı çabuk geçirdiği söylenir (V). III'teki 'This sudden chill' ve 'that area' I'deki damağa değen soğukluğa dayanıyor. II. cümle de aynı ağrıyla ilgilidir, ama kimlerin daha sık yaşadığını anlatıp bu göndermeyi koparıyor; çıkarılınca I'den III'e geçiş kusursuzdur." },
  { id: 'd10-b3', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'A panic attack is a sudden wave of intense fear that comes on without any obvious danger.',
      'During an attack the heart may pound, breathing may become fast and shallow, and the person may feel dizzy or sick.',
      'Because these physical sensations are so strong, many people who experience them for the first time believe they are having a heart attack and hurry to an emergency department.',
      'Some people have only one or two attacks in their whole lives, while others have them again and again.',
      'Such fears are understandable, but the symptoms of a panic attack usually reach their peak within minutes and then gradually ease.',
    ], answer: 3,
    explain: "Parça panik atağını tanımlıyor (I), bedensel belirtilerini sayıyor (II), bu belirtiler yüzünden birçok kişinin ilk kez yaşadığında kalp krizi geçirdiğini sanıp acile gittiğini anlatıyor (III) ve bu korkuların anlaşılır olduğunu ama belirtilerin dakikalar içinde doruğa ulaşıp yavaş yavaş azaldığını söylüyor (V). V'teki 'Such fears' III'teki kalp krizi korkusuna dayanıyor. IV. cümle de panik ataklarıyla ilgilidir, ama atakların ne sıklıkla yinelendiğini anlatıp bu göndermeyi koparıyor; çıkarılınca III'ten V'e geçiş kusursuzdur." },
  { id: 'd10-b4', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'After a meal, the body uses glucose as its main fuel and stores some of the excess as glycogen in the liver and muscles.',
      'When no food is eaten for a day or so, however, these glycogen stores begin to run low.',
      'Fat stored beneath the skin acts as insulation, helping the body to hold on to its heat in cold weather.',
      'The liver then starts converting fat into substances called ketone bodies, which travel in the blood to other organs.',
      'Even the brain, which normally depends almost entirely on glucose, can take a large share of its energy from them during a long fast.',
    ], answer: 2,
    explain: "Parça açlıkta vücudun yakıt değiştirmesini anlatıyor: yemekten sonra glikoz kullanılır ve fazlası glikojen olarak depolanır (I), bir gün kadar yemek yenmezse glikojen depoları azalır (II), karaciğer bunun üzerine yağı keton cisimciklerine çevirir (IV), beyin bile uzun açlıkta enerjisinin büyük bölümünü bunlardan alabilir (V). III. cümle de vücut yağıyla ilgilidir, ama yağın enerji kaynağı olarak kullanılmasından değil, deri altında yalıtım sağlamasından söz ediyor; açlıkta enerji değişimi konusundan ayrılıyor. Çıkarılınca II'den IV'e geçiş kusursuzdur: glikojen azalınca karaciğer yağa yönelir." },
  { id: 'd10-b5', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'Sunlight contains two main kinds of ultraviolet radiation that reach the ground, known as UVA and UVB.',
      "Bright light in the morning helps to set the body's internal clock, which is one reason it is often recommended for coping with jet lag.",
      'UVB is mainly responsible for sunburn, while UVA penetrates deeper into the skin and contributes to its ageing.',
      'Ordinary window glass blocks most UVB, but a considerable amount of UVA can pass through it.',
      'This is why a person sitting beside a sunny window for hours is unlikely to burn but may still be exposed to radiation that harms the skin over time.',
    ], answer: 1,
    explain: "Parça güneş ışığındaki iki tür morötesi ışını ve deriye etkilerini anlatıyor: UVA ve UVB (I), UVB'nin güneş yanığına, UVA'nın derinin yaşlanmasına katkıda bulunması (III), pencere camının UVB'nin çoğunu durdurup UVA'yı geçirmesi (IV) ve bu yüzden pencere kenarında oturan kişinin yanmasa da zarar görebilmesi (V). II. cümle de güneş ışığıyla ilgilidir, ama morötesi ışınlardan ve deriden ayrılıp görünür ışığın vücut saatine etkisine geçiyor; parçanın konusuyla anlamca bağı yok. Çıkarılınca I'den III'e geçiş kusursuzdur: I'de adı verilen iki tür III'te ayrı ayrı açıklanıyor." },
  { id: 'd10-b6', course: C, type: 'soru', tur: 'bozan', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', konu: ['akış'],
    sentences: [
      'A pulse oximeter is a small device, usually clipped onto a fingertip, that estimates how much oxygen the blood is carrying.',
      'It shines red and infrared light through the finger and measures how much of each reaches a sensor on the other side.',
      'A more exact measurement requires a sample of blood drawn from an artery, which is usually done in hospital.',
      'Haemoglobin that is carrying oxygen absorbs red and infrared light differently from haemoglobin that is not, so the balance between the two readings reveals the oxygen level.',
      'The device can, however, be less accurate in some situations, for example when the hands are very cold or, as several studies have reported, when the skin is darker.',
    ], answer: 2,
    explain: "Parça nabız oksimetresinin nasıl çalıştığını anlatıyor: parmağa takılan ve kandaki oksijeni tahmin eden küçük bir aygıttır (I), parmaktan kırmızı ve kızılötesi ışık geçirip karşı taraftaki algılayıcıya ulaşan miktarı ölçer (II), oksijenli ve oksijensiz hemoglobin bu ışıkları farklı soğurduğu için iki ölçüm arasındaki oran oksijen düzeyini gösterir (IV), ama aygıt bazı durumlarda daha az doğru olabilir (V). III. cümle de kandaki oksijenin ölçülmesiyle ilgilidir, ama aygıtın çalışma biçiminden ayrılıp atardamardan kan alınan başka bir yönteme geçiyor ve II ile IV arasındaki açıklamayı bölüyor. Çıkarılınca II'den IV'e geçiş kusursuzdur: II'deki ölçümün nasıl oksijen düzeyine dönüştüğünü IV açıklıyor." },

  // ---------- 66–80: okuma ----------
  { id: 'd10-o1', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Yüzleri tanıyamamak',
    text: 'Most of us recognise hundreds of faces without any effort, but for some people even the faces of close friends and family members are surprisingly hard to tell apart. The condition is known as prosopagnosia, a term introduced in 1947 by the German neurologist Joachim Bodamer, who described patients who had lost the ability after brain injuries. In such cases the damage usually involves a region on the underside of the brain that appears to be specialised for processing faces. For decades, face blindness was thought to be extremely rare. Research since the early 2000s, however, has suggested that a developmental form, present from childhood without any obvious injury, may affect roughly one person in fifty. Many of these people do not realise that they perceive faces differently from others; they simply assume that everyone relies, as they do, on clues such as hairstyle, voice, clothing or the way a person walks. Such strategies work reasonably well in familiar settings but can fail when someone appears in an unexpected place or changes their appearance, which can lead to embarrassing moments at work or in social life. At the other end of the scale are so-called super-recognisers, who can identify people they have seen only briefly, sometimes years earlier. Some police forces have employed such people to help identify suspects in video recordings.',
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, people with the developmental form of prosopagnosia ----.',
        options: [
          'have usually suffered damage to a particular region of the brain',
          'were first described by Bodamer in the years after the war',
          "cannot recognise anyone, even when they hear the person's voice",
          'often fail to notice that the way they recognise people is unusual',
          'are often able to identify people they have seen only once before',
        ], answer: 3,
        explain: "Parçaya göre gelişimsel biçimi olan birçok kişi yüzleri başkalarından farklı algıladığının farkında değildir; herkesin saç, ses, giysi ya da yürüyüş gibi ipuçlarına dayandığını sanır. Doğru seçenek bunu başka sözcüklerle veriyor. Beyindeki belirli bir bölgenin hasar görmesi en güçlü çeldiricidir, çünkü parçada geçiyor; ama beyin hasarından sonra ortaya çıkan biçime aittir, gelişimsel biçim ise belirgin bir yaralanma olmadan çocukluktan beri vardır. Bodamer'in tanımladığı hastalar da beyin hasarı geçirenlerdi. Ses yoluyla bile kimseyi tanıyamamak parçayla çelişir, çünkü ses tanımada kullanılan ipuçlarından biridir. Bir kez görülen kişiyi tanımak süper tanıyıcılara aittir." },
      { konu: ['çıkarım'],
        q: 'The passage makes it plain that the strategies used by people with face blindness ----.',
        options: [
          'are less reliable when a person is met in an unusual setting',
          'were developed by doctors to help patients after brain injuries',
          'work equally well in every situation that they come across',
          "rely mainly on a person's height and on the shape of the face",
          'have been taught to the police officers who identify suspects',
        ], answer: 0,
        explain: "Parça bu yöntemlerin tanıdık ortamlarda oldukça iyi işlediğini, ama biri beklenmedik bir yerde görünce ya da görünüşünü değiştirince işe yaramayabildiğini söylüyor. Doğru seçenek bunu 'alışılmış ortamın dışında daha az güvenilir' diye veriyor. Her durumda aynı iyi işledikleri bilgisi en güçlü çeldiricidir, çünkü parçadaki 'work reasonably well' sözüne dayanıyor gibi; ama parça bunun tanıdık ortamlarla sınırlı olduğunu açıkça söylüyor. Yöntemlerin hekimlerce geliştirilmesi ve polislere öğretilmesi parçada yoktur; polisin çalıştırdığı kişiler süper tanıyıcılardır. Boy ve yüz biçimi de parçada sayılan ipuçları arasında değildir." },
      { konu: ['yazarın amacı'],
        q: "The writer's main aim in this passage is ----.",
        options: [
          'to explain how police forces choose staff to study video recordings',
          'to argue that face blindness is mostly caused by injuries to the brain',
          'to describe a face-recognition problem and how common it may be',
          "to compare Bodamer's findings with those of more recent researchers",
          'to offer advice to people who often struggle to remember names',
        ], answer: 2,
        explain: 'Parça yüz körlüğünü tanımlıyor, beyin hasarından sonra ortaya çıkan ve gelişimsel biçimlerini ayırıyor, gelişimsel biçimin sanılandan yaygın olabileceğini söylüyor ve bu kişilerin kullandığı yöntemleri anlatıyor; doğru seçenek bu genel amacı veriyor. Yüz körlüğünün çoğunlukla beyin hasarından kaynaklandığını savunmak en güçlü çeldiricidir, çünkü parça beyin hasarından söz ediyor; ama parça tersine, belirgin bir yaralanma olmadan görülen biçimin sanılandan yaygın olabileceğini vurguluyor. Polisin personel seçimi yalnız son cümlede geçen bir ayrıntıdır. Bodamer ile sonraki araştırmacılar karşılaştırılmıyor; ad hatırlama ve öğüt de parçanın konusu değildir.' },
    ] },
  { id: 'd10-o2', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Sosis kılıfından yapay böbreğe',
    text: "When the kidneys fail, waste products that would normally leave the body in urine build up in the blood, and without treatment the condition is fatal. In the early 1940s, a young Dutch doctor named Willem Kolff, working in a small hospital during the German occupation of the Netherlands, set out to build a machine that could take over this job. His solution relied on cellophane, the thin material then used as sausage casing. Cellophane has tiny pores that let small waste molecules such as urea pass through but hold back blood cells and proteins. Kolff ran the patient's blood through long tubes of it, wound around a rotating drum that turned in a bath of salt solution, so that the waste gradually moved out into the bath. Because materials were scarce in wartime, he reportedly built parts of the apparatus from whatever he could find, including tin cans and pieces of a washing machine. The results were at first discouraging: most of the patients he treated in the early years died. In 1945, however, a woman in a coma caused by kidney failure woke up after treatment and went on to live for several more years. After the war, Kolff gave several of his machines to hospitals in other countries rather than profiting from them, and his design became the starting point for the dialysis machines used today.",
    steps: [
      { konu: ['ayrıntı'],
        q: "According to the passage, cellophane suited Kolff's purpose because ----.",
        options: [
          'it let small waste molecules through but held larger ones back',
          'it was cheap enough to be thrown away after every single treatment',
          'it could withstand the heat of the salt solution inside the bath',
          'it was one of the few materials not controlled by the occupiers',
          'it absorbed the urea from the blood and stored it in its walls',
        ], answer: 0,
        explain: 'Parçaya göre selofanın küçük gözenekleri üre gibi küçük atık moleküllerini geçirir, kan hücrelerini ve proteinleri ise tutar; bu yüzden atık kandan banyoya geçebilir. Doğru seçenek bunu başka sözcüklerle veriyor. Üreyi soğurup duvarlarında depolaması en güçlü çeldiricidir, çünkü üre ve selofan parçada birlikte geçiyor; ama parçaya göre atık selofandan geçip tuzlu su banyosuna gider, selofanda kalmaz. Ucuzluk, ısıya dayanıklılık ve işgal güçlerinin denetimi parçada selofanın seçilme nedeni olarak geçmez; savaş yıllarındaki kıtlık yalnız aygıtın öteki parçaları için anılıyor.' },
      { konu: ['çıkarım'],
        q: 'It can be inferred from the passage that the case of 1945 mattered because ----.',
        options: [
          'it was the first time that Kolff had tried the machine on a patient',
          'it showed that failed kidneys could recover without any treatment',
          'it persuaded Kolff to sell his design to hospitals in other countries',
          'it was among the first clear signs that the method could save a life',
          'it proved that the machine worked better than a healthy kidney',
        ], answer: 3,
        explain: "Parça ilk yılların sonuçlarının cesaret kırıcı olduğunu, tedavi edilen hastaların çoğunun öldüğünü söylüyor; 'however' ile gelen 1945 olayında ise komadaki bir kadın tedaviden sonra uyanıp birkaç yıl daha yaşıyor. Buradan bu olayın yöntemin hayat kurtarabildiğine dair ilk açık işaretlerden biri olduğu çıkar. Kolff'un makineyi ilk kez bir hasta üzerinde denemesi en güçlü çeldiricidir, çünkü olay bir 'ilk' gibi anlatılıyor; ama parça daha önceki yıllarda başka hastaların da tedavi edildiğini söylüyor. Tedavisiz iyileşme parçayla çelişir. Kolff makinelerini satmamış, hastanelere vermiştir. Sağlıklı böbrekle karşılaştırma parçada yoktur." },
      { konu: ['başlık'],
        q: 'Which of the following would be the most suitable title for the passage?',
        options: [
          'A Wartime Invention That Took Over the Work of the Kidneys',
          'How Sausage Casings Became a Popular Food During the War',
          'The Dangers of Treating Kidney Failure with Machines',
          'Why Most Early Dialysis Patients Did Not Survive',
          'Dutch Hospitals Under German Occupation',
        ], answer: 0,
        explain: "Parça savaş yıllarında, kıt malzemeyle yapılan ve böbreklerin işini üstlenen bir makinenin hikâyesini anlatıyor: düzeneği, ilk başarısızlıklar, 1945'teki başarı ve bugünkü diyaliz makinelerine etkisi. Doğru başlık bu bütünü kapsıyor. İlk hastaların çoğunun neden yaşamadığını soran başlık en güçlü çeldiricidir, çünkü parçada geçen bir bilgiye dayanıyor; ama parça bu nedeni incelemiyor ve ilk başarısızlıklar hikâyenin yalnız bir bölümüdür. Makineyle tedavinin tehlikeleri parçanın vurgusuna aykırıdır. Sosis kılıfının yiyecek olarak yaygınlaşması ve işgal altındaki hastaneler parçanın konusu değildir." },
    ] },
  { id: 'd10-o3', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'orta', cefr: 'B2', title: 'Bir annenin ısrarı',
    text: "In 1934 a mother in Norway brought her two young children, both of whom had serious learning difficulties, to the physician and chemist Asbjørn Følling. She had noticed an unusual, musty smell about them and had already consulted several doctors without getting an answer. Følling added a chemical to the children's urine as part of a routine test, and to his surprise the sample turned dark green. After weeks of work he identified the compound responsible and went on to find it in the urine of several other children living in institutions for people with learning disabilities. The condition, now called phenylketonuria (PKU), is inherited. People with it cannot properly break down phenylalanine, one of the building blocks of protein, and as it builds up in the blood it damages the developing brain. Since phenylalanine is present in most protein-rich foods, much of this damage can be prevented by a carefully controlled diet that begins in the first weeks of life. Timing is therefore crucial, and in the early 1960s the American scientist Robert Guthrie developed a simple test that could detect the condition from a few drops of blood taken from a newborn baby's heel and dried on filter paper. Screening based on his idea is now routine in many countries. Some less obvious sources of phenylalanine matter as well, which is why certain artificially sweetened foods and drinks carry a warning for people with PKU on their labels.",
    steps: [
      { konu: ['ayrıntı'],
        q: "According to the passage, Følling's investigation began when ----.",
        options: [
          'he noticed an unusual smell during a visit to an institution for children',
          'a routine test carried out on his own children gave a surprising result',
          'a parent who had been unable to get an explanation elsewhere came to him',
          'other doctors asked him to identify a compound they had found in urine',
          'a screening programme revealed several unexplained cases in Norway',
        ], answer: 2,
        explain: "Parçaya göre 1934'te Norveç'te bir anne, ikisi de ciddi öğrenme güçlüğü çeken çocuklarını Følling'e getirdi; daha önce birkaç hekime danışmış ama bir yanıt alamamıştı. Doğru seçenek bunu başka sözcüklerle veriyor. Kurumdaki bir ziyarette koku fark etmesi en güçlü çeldiricidir, çünkü parçada hem koku hem kurumlar geçiyor; ama kokuyu anne fark etmişti, Følling kurumlardaki çocuklara ise bileşiği bulduktan sonra bakmıştı. Çocuklar Følling'in değil annenin çocuklarıydı. Bileşiği başka hekimler bulmamıştı; tarama da Guthrie'nin 1960'lardaki testine dayanır ve araştırmanın başlangıcı değildir." },
      { konu: ['çıkarım'],
        q: "It can be understood from the passage that the timing of Guthrie's test mattered because ----.",
        options: [
          'the condition cannot be detected in the blood of older children at all',
          'the diet works best when it is started soon after birth',
          'phenylalanine is not present in the milk that newborn babies drink',
          "the condition usually disappears by the end of a child's first year",
          'blood from the heel contains more phenylalanine than other blood',
        ], answer: 1,
        explain: "Parça hasarın büyük bölümünün yaşamın ilk haftalarında başlayan sıkı bir diyetle önlenebileceğini söylüyor ve hemen ardından 'Timing is therefore crucial' diyerek Guthrie'nin yenidoğanlara uygulanan testine geçiyor. Demek ki testin zamanlaması, diyetin doğumdan hemen sonra başladığında en etkili olmasından ötürü önemlidir. Büyük çocuklarda hastalığın kanda hiç saptanamaması en güçlü çeldiricidir, çünkü testin yenidoğanlara yapılmasını açıklıyor gibi; ama parçada böyle bir bilgi yoktur, zamanlamanın gerekçesi diyetin erken başlaması olarak veriliyor. Fenilalaninin bebeklerin içtiği sütte bulunmaması ve hastalığın ilk yılda kaybolması parçayla çelişir ya da desteklenmez; topuk kanıyla ilgili karşılaştırma da parçada yoktur." },
      { konu: ['ana fikir'],
        q: 'Which of the following best expresses the main idea of the passage?',
        options: [
          "A mother's persistence led to the discovery of an inherited condition whose harm can now largely be prevented",
          'Inherited conditions that affect the brain can rarely be detected before any of their symptoms appear',
          'Robert Guthrie was the first scientist to identify phenylketonuria in children with learning difficulties',
          'Artificial sweeteners are an important cause of serious learning difficulties in many young children',
          'Doctors in the 1930s were generally unwilling to listen to the worries that parents brought to them',
        ], answer: 0,
        explain: "Parça bir annenin yanıt arayışıyla başlayan keşfi, fenilketonürinin kalıtsal bir durum olduğunu, beyne verdiği zararın erken başlayan diyetle büyük ölçüde önlenebildiğini ve bunu sağlayan yenidoğan taramasını anlatıyor; doğru seçenek bu bütünü veriyor. Hekimlerin 1930'larda ailelerin kaygılarını dinlemek istemediği en güçlü çeldiricidir, çünkü annenin birkaç hekimden yanıt alamadığı söyleniyor; ama parça bunu bir genellemeye dönüştürmüyor ve konusu bu değildir. Guthrie hastalığı ilk tanımlayan kişi değil, tarama testini geliştiren kişidir. Kalıtsal durumların belirtiden önce seyrek saptanması, parçadaki yenidoğan taramasıyla çelişir. Tatlandırıcılar yalnız bir uyarı etiketi için anılıyor." },
    ] },
  { id: 'd10-o4', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', title: 'Kobaylardan gelen bir ipucu',
    text: "In 1949 the Australian psychiatrist John Cade published a short report that would eventually change the way one of the most serious mental illnesses is managed. Cade suspected that the extreme excitement seen in mania might be caused by a substance circulating in the body, and he began experimenting with chemicals found in patients' urine. To make one of these chemicals dissolve more easily, he combined it with lithium, and when he injected the mixture into guinea pigs he noticed that the animals became unusually calm, an effect that some later scientists attributed partly to the size of the dose. He then tested lithium salts on their own, reportedly first on himself and then on a small number of patients. The best-known case was a man who had been severely agitated for years; after receiving lithium he settled down and was eventually able to leave hospital. The discovery spread slowly, however. In the same year, lithium chloride sold in the United States as a salt substitute for people on low-salt diets was linked to cases of severe poisoning, and the episode made many doctors wary of the substance. Part of the difficulty is that the amount of lithium that helps is not far below the amount that harms, which is why doctors monitor its level in the blood of the patients who receive it. It was largely through careful trials by the Danish psychiatrist Mogens Schou in the 1950s and 1960s that the drug gained acceptance, and it was not approved in the United States until 1970. Exactly how it acts on the brain is still not fully understood.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, Cade first combined a chemical with lithium in order to ----.',
        options: [
          'reduce the excitement of the patients he was treating',
          'find out whether lithium on its own was harmful to animals',
          'make the chemical dissolve more easily for his experiments',
          'produce a salt substitute for people with heart disease',
          'identify a substance in the urine of healthy volunteers',
        ], answer: 2,
        explain: "Parça açıkça söylüyor: Cade idrarda bulunan kimyasallardan birini daha kolay çözünür kılmak için onu lityumla birleştirdi. Doğru seçenek bunu veriyor. Hastaların taşkınlığını azaltmak en güçlü çeldiricidir, çünkü lityumun sonradan bu amaçla kullanıldığı anlatılıyor; ama ilk birleştirmenin amacı bu değildi, sakinleştirici etki kobaylarda beklenmedik biçimde fark edildi. Lityumun hayvanlara zararını sınamak, tuz yerine geçen ürün üretmek ve sağlıklı gönüllülerin idrarını incelemek parçada geçmez; tuz yerine geçen ürün ABD'de başka kişilerce satılmıştı." },
      { konu: ['çıkarım'],
        q: 'The passage implies that the American salt-substitute episode ----.',
        options: [
          'proved that lithium had no effect at all on serious mental illness',
          'led directly to the approval of lithium in the United States in 1970',
          'was the main reason why Cade decided to test lithium on himself',
          'made many doctors regard lithium as riskier than before',
          'showed that guinea pigs and humans react to lithium in different ways',
        ], answer: 3,
        explain: "Parça buluşun yavaş yayıldığını söylüyor ve nedenlerinden biri olarak aynı yıl ABD'de tuz yerine satılan lityum klorürün ağır zehirlenmelerle ilişkilendirilmesini anlatıyor; olay birçok hekimi maddeye karşı temkinli yapmıştı. Buradan olayın lityumun tıpta kullanılmasını hekimlerin gözünde daha riskli gösterdiği çıkar. 1970'teki onaya doğrudan yol açması en güçlü çeldiricidir, çünkü ikisi de ABD'yle ilgilidir; ama parça onayı Schou'nun dikkatli denemelerine bağlıyor ve zehirlenme olayı kabulü yavaşlatmıştı. Lityumun hiçbir etkisi olmadığının kanıtlanması parçayla çelişir. Cade'in kendi üzerinde denemesi ve kobaylarla insanların farkı bu olaya bağlanmıyor." },
      { konu: ['ayrıntı'],
        q: 'The passage suggests that the blood levels of patients receiving lithium are monitored mainly because ----.',
        options: [
          'its effects on the brain are now completely understood',
          'a helpful amount is not much smaller than a harmful one',
          'it tends to lose its effect after a few weeks of use',
          'it was tested on only a handful of patients at first',
          'Danish doctors had once sold it as a substitute for salt',
        ], answer: 1,
        explain: "Parçaya göre güçlüklerden biri, yararlı lityum miktarının zararlı miktardan pek aşağıda olmamasıdır; hekimlerin kandaki düzeyi izlemesinin nedeni de 'which is why' ile buna bağlanıyor. Doğru seçenek bunu başka sözcüklerle veriyor. İlk başta yalnız birkaç hasta üzerinde denenmesi en güçlü çeldiricidir, çünkü parçada Cade'in az sayıda hastayla çalıştığı geçiyor; ama izlemenin gerekçesi olarak gösterilmiyor. Beyindeki etkisinin tümüyle anlaşıldığı bilgisi parçanın son cümlesiyle çelişir. Birkaç haftada etkisini yitirmesi parçada yoktur; tuz yerine satış Danimarka'da değil ABD'de olmuştu." },
    ] },
  { id: 'd10-o5', course: C, type: 'pratik', tur: 'okuma', unit: U, status: T, cards: [],
    level: 'zor', cefr: 'C1', title: 'Titreyen hastalığın izinde',
    text: "In the 1950s, doctors and officials visiting the Eastern Highlands of Papua New Guinea heard of a disease that the Fore people called kuru, a word often translated as 'trembling'. Those affected gradually lost control of their movements, could eventually no longer walk or eat without help, and usually died within a year or so of the first signs. Most of the victims were women and children, and many Fore believed the illness was caused by sorcery. The American physician Carleton Gajdusek, who studied the disease with an Australian medical officer, could find no sign of an ordinary infection or a poison. Anthropologists working in the region later drew attention to a funeral custom in which relatives ate parts of the dead person's body as a mark of respect; women and young children seem to have taken part far more often than adult men, which would fit the pattern of cases. In the 1960s Gajdusek's team reported that the disease could be passed to chimpanzees, although the illness took many months to appear in them. The cause is now widely thought to be a prion, an abnormally folded protein that appears able to make normal proteins fold in the same way. After the funeral custom died out, the number of new cases fell steadily, but because the disease can take decades to develop, a few people still fell ill long afterwards.",
    steps: [
      { konu: ['ayrıntı'],
        q: 'According to the passage, the pattern of kuru cases ----.',
        options: [
          'showed that adult men were more likely than anyone else to fall ill',
          'matched the groups who seem to have joined most often in a funeral custom',
          'convinced Gajdusek that the disease was caused by a common poison',
          'was first explained by the experiments carried out on chimpanzees',
          'changed suddenly once the Fore people had stopped believing in sorcery',
        ], answer: 1,
        explain: 'Parçaya göre kurbanların çoğu kadın ve çocuklardı; antropologlar da cenaze geleneğine kadınların ve küçük çocukların yetişkin erkeklerden çok daha sık katılmış göründüğünü ve bunun vakaların dağılımına uyacağını söylüyor. Doğru seçenek bu uyumu, parçadaki temkini koruyarak veriyor. Şempanze deneylerinin dağılımı ilk kez açıklaması en güçlü çeldiricidir, çünkü deneyler hastalığın aktarılabildiğini gösteriyor; ama vakaların kimlerde toplandığını açıklayan şey cenaze geleneğidir ve deneyler bu dağılımı açıklamak için anılmıyor. Yetişkin erkeklerin en çok hastalanması parçayla çelişir. Gajdusek zehir izi bulamamıştı. Büyücülük inancıyla vakaların değişmesi arasında parçada bir bağ kurulmuyor.' },
      { konu: ['çıkarım'],
        q: 'What can be inferred from the passage about the people who fell ill long after the funeral custom ended?',
        options: [
          'They had most probably been exposed years before the custom disappeared',
          'They had caught the disease through an ordinary infection in the villages',
          'They had been infected by chimpanzees carried back to the highlands',
          'They had continued to follow the custom in secret in their villages',
          'They had produced the abnormal protein simply as a result of ageing',
        ], answer: 0,
        explain: 'Parça geleneğin ortadan kalkmasından sonra yeni vakaların düzenli biçimde azaldığını, ama hastalığın gelişmesi on yıllar alabildiği için birkaç kişinin çok sonra hastalandığını söylüyor. Buradan bu kişilerin büyük olasılıkla gelenek sürerken, yıllar önce etkene maruz kaldığı çıkar. Geleneği gizlice sürdürmeleri en güçlü çeldiricidir, çünkü geç vakaları açıklayabilir gibi durur; ama parça geleneğin ortadan kalktığını söylüyor ve geç vakaları açıkça uzun gelişme süresine bağlıyor. Sıradan bir enfeksiyon parçada dışlanıyor. Şempanzelerle bulaş parçada yoktur. Yaşlanmayla kendiliğinden protein üretimi de parçada geçmez.' },
      { konu: ['ana fikir'],
        q: 'The passage is mainly concerned with ----.',
        options: [
          'why the Fore people continued to believe in sorcery for so long',
          'how the likely cause of a puzzling brain disease was traced',
          'the life and later career of the physician Carleton Gajdusek',
          'the risks of using chimpanzees as subjects in medical research',
          'the funeral customs of the different peoples of New Guinea',
        ], answer: 1,
        explain: "Parça kuru hastalığının belirtilerini, kimleri etkilediğini, olağan enfeksiyon ve zehir açıklamalarının neden dışlandığını, cenaze geleneğiyle kurulan bağı, şempanzelere aktarım deneylerini ve bugün kabul gören prion açıklamasını sırayla anlatıyor; doğru seçenek bu adım adım iz sürmeyi veriyor. Yeni Gine halklarının cenaze gelenekleri en güçlü çeldiricidir, çünkü parçada bir cenaze geleneği önemli yer tutuyor; ama parça yalnız Fore'lerin bir geleneğinden ve onu da hastalığı açıklamak için söz ediyor. Büyücülük inancı yalnız bir kez anılıyor. Gajdusek'in yaşamı ve şempanze araştırmalarının riskleri parçanın konusu değildir." },
    ] },
];

export const DENEME_10 = { id: 'deneme-10', sinav: 'YOKDIL', alan: 'saglik', ad: 'Tam deneme 10 (YÖKDİL Sağlık)', sorular };
