// iDil hap bilgi › Kelime stratejileri ve sınav taktikleri.
// Biçim: ../README.md §3a; plan: ../analiz/hap-plani.md; örnek kart: soru-tipleri-2.js (tip-cumle-tamamlama).
// Tümü taslak: İngilizce öğretmeni onayı bekliyor. Sayılar yalnız ../analiz/ dosyalarından; ÖSYM metni kullanılmaz.
// Öğretmen doğrulasın: kel-obek-fiil, turn up'taki up'ın "ortaya çıkma" anlamıyla parçacık tablosuna alınması (denetçi önerisi;
// tablo, body[2], gg-z1-a5 notu). Kurala uymayan örnek olarak turn up yerine take after (birine çekmek) kondu.
// Öğretmen doğrulasın: sinav-puan ve öteki sınav kartlarındaki sınav kuralları (80 soru, 180 dakika, doğru başına 1,25 puan,
// yanlış doğruyu götürmez) ÖSYM kılavuzundan yeniden doğrulanacak (analiz/hap-plani.md §2.8).
const T = 'taslak';

export default [
  // ---------- Kelime stratejileri ----------
  { id: 'kel-baglam', kategori: 'kelime', type: 'ders', highYield: true, status: T,
    title: 'Bağlamdan anlam: önce sinyali ve yönü bul',
    hap: `Şıklara bakmadan boşluğa kendi sözcüğünü koy. Sinyal sözcük (but, because, such as, iki nokta) ilişkiyi, cümlenin geri kalanı yönü söyler: olumlu mu, olumsuz mu? Bu tarife uymayan şıkları ele.`,
    body: [
      `Kelime sorusunda cümle, boşluğa ne geleceğini çoğu zaman kendisi anlatır: boşluğun yakınında bir açıklama, bir neden, bir karşıtlık ya da bir örnek bulunur. Sözcüğü hiç görmemiş olsan bile bu ipucu aradığın anlamı daraltır: "olumsuz bir etki bildiren fiil", "çeşitlilik bildiren sıfat", "daha eski olmak" gibi.`,
      `Bu tarifi şıklara bakmadan, Türkçe kur. Böylece biçimce benzer çeldiriciye kapılmazsın, çünkü aradığın anlam bellidir. Bilmediğin bir sözcük de tarife uymayan dört şık elenince tek başına kalır. ÖSYM kelime sorularının yaklaşık üçte biri C1 ve üstü düzeyde; bu durumla büyük olasılıkla karşılaşırsın.`,
      `Sözcük bilgisi yalnız ilk altı soruda sınanmaz: YDS'nin boşluklu metinlerinde boşlukların yaklaşık beşte biri de kelime boşluğudur, okuma ve çeviride de bilmediğin sözcüğü bağlamdan çözersin. Aşağıdaki sinyaller her soru tipinde aynı işi görür.`,
    ],
    adimlar: [
      `Boşluğun türünü ve yerini belirle: isim mi, sıfat mı, fiil mi? Hangi öbeğin içinde: "a remarkably ---- community", "---- of sleep"?`,
      `Sinyali bul: zıtlık, neden, örnek, tanım ya da gönderim bildiren sözcüğü veya işareti (tablo). Sinyal çoğu zaman boşluğun hemen önünde ya da cümlenin öteki yarısındadır.`,
      `Yönü belirle: cümle iyi bir şeyden mi söz ediyor, kötü bir şeyden mi? Artış mı, azalma mı? Önce mi, sonra mı?`,
      `Boşluğa Türkçe kendi sözcüğünü koy ("bozmak", "çeşitli", "-den eski olmak"), sonra şıklarda onu ara. İki şık kalırsa eşdizime bak: hangisi boşluğun yanındaki sözcükle birlikte kullanılır?`,
    ],
    tablo: {
      sutunlar: ['İpucu', 'Sözcükler', 'Boşluk için anlamı'],
      satirlar: [
        ['Zıtlık', 'but, however, yet, although, while, whereas, despite, rather than, instead of, unlike', 'Boşluk öteki yarının ters yönündedir.'],
        ['Benzerlik, ekleme', 'and, also, as well as, similarly, likewise, in addition', 'Boşluk aynı yönde sürer.'],
        ['Neden, sonuç', 'because, since, due to, so, therefore, thus, which is why', 'Boşluk nedenle uyumlu bir sonuç ya da sonucun nedenidir.'],
        ['Örnek', 'such as, for example, for instance, including', 'Örneklerin ortak adı boşluktadır.'],
        ['Tanım, açıklama', 'that is, in other words, namely; iki nokta (:)', 'Ardından gelen açıklama boşluğun tarifidir.'],
        ['Gönderim', 'this change, these findings, such ideas', 'Sonraki cümlenin "this …" dediği şey boşlukta anlatılır.'],
        ['Beklenti', 'even, only, still, no longer, long-held', 'even şaşırtıcı bir ucu vurgular; long-held view çoğu zaman sarsılacak bir görüşü haber verir.'],
        ['Olumlu yön', 'enhance (artırmak), restore (eski hâline getirmek), reinforce (güçlendirmek), beneficial (yararlı), thrive (gelişip serpilmek)', 'Cümle kazançtan, iyileşmeden söz ediyorsa.'],
        ['Olumsuz yön', 'impair (bozmak), undermine (sarsmak), disrupt (aksatmak), deprive of (yoksun bırakmak), adverse (olumsuz)', 'Cümle zarardan, tehlikeden, kayıptan söz ediyorsa.'],
      ],
    },
    tuzaklar: [
      `Konuya uyan ama yönü ters sözcük. consolidate (pekiştirmek) uykuyla ilgili doğru bir sözcüktür; ama cümle kötü bir gece uykusunun zararını anlatıyorsa boşluk olumsuz bir fiil ister: impair (su-k2).`,
      `Tanıdık sözcük doğru demek değildir. iDil'de kelime sorularının çeldiricilerinden biri de bağlama uymayan bir kart sözcüğüdür; çoğunlukla aynı ünitenin, bazen başka bir ünitenin kartı: Göbeklitepe sorusunda predated de kartta var, ama keşif o görüşten çok sonra yapıldı (sg-k1).`,
      `Aynı alandan, ters yönde iki sözcük. "Üç yüzyıl önce yerleşen çobanların yaşlı ----" boşluğuna ancestors (atalar) değil, descendants (torunlar) gelir; zamanın yönünü denetle (sd-k1).`,
      `Cümlenin sonunu okumadan seçmek. "They ---- the site as a medieval cemetery and moved on" cümlesinde "and moved on" (ve yollarına devam ettiler), boşluğun "önemsemedi" anlamında olduğunu gösterir (sg-z1-a1).`,
    ],
    ornekler: [
      { soru: 'gk-k1', not: `İki nokta tanım sinyali: ardından gelen "ticaret gelişti, sultan pek çok yeni yapı yaptırdı" boşluğu tarif ediyor, yani refah. posterity ve austerity biçimce benzer (austerity yönce de ters); instability ve decline yönce ters.` },
      { soru: 'su-k2', not: `Yön ipucu cümlenin sonunda: uykulu araç kullanmanın bu kadar tehlikeli olmasının bir nedeni. Olumsuz bir etki gerekiyor; restore, enhance, consolidate ve inspire olumlu.` },
      { soru: 'sm-k1', not: `"Rather than … just a few kinds" zıtlık, "with hundreds of different species" açıklama: aranan anlam "çeşitli". uniform ters yönde; adverse ve averse biçimce benzer.` },
      { en: 'Unlike his talkative brother, Emre is rather reticent at family dinners.', tr: 'Geveze kardeşinin aksine Emre aile yemeklerinde epey suskundur.', not: `reticent sözcüğünü bilmesen de unlike zıtlık kuruyor: "geveze"nin tersi, yani suskun.` },
    ],
    veri: [
      `Kelime soruları YDS'de ve YÖKDİL'de 6'şar (1–6); YDS'nin boşluklu metinlerinde boşlukların %20'si kelime boşluğu (analiz/dagilim.md §2, §3.6).`,
      `Seviye: ÖSYM kelime sorularının %30'u C1, %4'ü C2; yaklaşık üçte biri C1 ve üstü (analiz/agirlik.json → cefr.tur.kelime; seviye etiketleyicinin tahmini).`,
      `Kelime sorularında çeldirici etiketleri: biçimce benzer %38, anlamca yakın %26, bağlama uymaz %26, yönü ters (mantık ters) %10 (analiz/agirlik.json → celdirici.tur.kelime).`,
    ],
    ref: 'analiz/dagilim.md §2, §3.6; analiz/agirlik.json (cefr.tur.kelime, celdirici.tur.kelime)' },

  { id: 'kel-esdizim', kategori: 'kelime', type: 'ders', highYield: true, status: T,
    title: 'Eşdizim: boşluğun eşine bak',
    hap: `İngilizcede sözcükler belli eşlerle kullanılır: virtually impossible, pose a threat, deprived of. Boşluğun yanındaki sözcüğe ya da edata bak; anlamı yakın ama o eşle kullanılmayan şık elenir.`,
    body: [
      `Eşdizim (collocation), sözcüklerin birlikte kullanılma alışkanlığıdır. Türkçede "karar alınır", "rol oynanır"; İngilizcede de make a decision, play a role denir, do a decision denmez. Bu eşleşmeler mantıkla çıkarılmaz, öbek olarak öğrenilir. Sınavdaki yararı büyüktür: boşluğun yanındaki sözcük ya da edat, doğru şıkkın eşini önceden söyler.`,
      `Geçmiş sınavların etiketlerinde kelime sorularında biçimce benzerden sonra iki çeldirici öne çıkıyor: "anlamca yakın" ve "bağlama uymaz". İkincisini yalnız YÖKDİL'i etiketleyen ajan kullandı; notlarının bir kısmına göre bu, eşdizim tuzağı demek: anlamca uyar gibi görünen ama boşluğun yanındaki sözcükle birlikte kullanılmayan şık. Bu notlarda en sık geçen ipucu, boşluktan sonraki edat.`,
      `Üç kalıp sık çıkar: zarf + sıfat (virtually impossible), fiil + isim (pose a threat), sıfat ya da fiil + edat (resistant to, deprived of). Ama edat tek başına karar vermez: çeldiriciler de aynı edatı alan sözcüklerden seçilebilir. O zaman edat şıkları ikiye üçe indirir, kalanlar arasında anlam seçer.`,
    ],
    tablo: {
      sutunlar: ['Kalıp', 'Eşdizim', 'Türkçesi', 'Dikkat'],
      satirlar: [
        ['zarf + sıfat', 'virtually impossible', 'neredeyse imkânsız', 'vitally ile karışır: vitally important (hayati önemde)'],
        ['zarf + sıfat', 'notoriously hard', 'zorluğuyla ünlü', 'notorious kötü ün bildirir'],
        ['zarf + sıfat', 'highly likely, widely accepted', 'çok olası, yaygın kabul gören', 'highly burada "çok", widely "yaygın biçimde" demek'],
        ['zarf + sıfat', 'closely linked, readily available', 'yakından bağlantılı, kolayca bulunabilen', 'close to (yakınında) ile karıştırma'],
        ['fiil + isim', 'play a role in', '-de rol oynamak', 'make a role denmez'],
        ['fiil + isim', 'pose a threat to, pose a problem', 'tehdit oluşturmak, sorun yaratmak', 'pose burada "poz vermek" değil'],
        ['fiil + isim', 'draw ya da reach a conclusion', 'sonuç çıkarmak, sonuca varmak', 'anlamca yakın infer, from ya da that ile kurulur'],
        ['fiil + isim', 'raise awareness', 'farkındalık yaratmak', 'rise nesne almaz: rise awareness olmaz'],
        ['fiil + isim', 'conduct ya da carry out research', 'araştırma yapmak', 'make research denmez'],
        ['fiil + isim', 'meet a need, take into account', 'ihtiyacı karşılamak, hesaba katmak', 'meet burada "tanışmak" değil'],
        ['sıfat + edat', 'aware of, capable of, deprived of', 'farkında, -ebilecek durumda, yoksun', 'üçü de of alır; anlamı denetle'],
        ['sıfat + edat', 'prone to, susceptible to, resistant to', '-e yatkın, -e duyarlı, -e dirençli', "prone to errors'ta to edattır; prone mastar da alabilir: prone to make mistakes"],
        ['sıfat + edat', 'responsible for, dependent on', '-den sorumlu, -e bağlı', 'dependent on ama independent of'],
        ['fiil + edat', 'attribute X to Y, replace X with Y, dismiss X as Y', "X'i Y'ye bağlamak, X'in yerine Y'yi koymak, X'i Y sayıp önemsememek", 'çeldiriciler de aynı edatı alabilir'],
      ],
    },
    tuzaklar: [
      `Edat ipucu tek başına yetmez. "---- of sleep" boşluğunda dört şık of alıyordu (relieved, convinced, accused, deprived); kararı anlam verdi: uykudan yoksun (su-k1).`,
      `Biçimce benzer zarflar: virtually (neredeyse), vitally (hayati biçimde), visibly (gözle görülür biçimde). Üçü de -ly ile biter; üçünden impossible ile birleşen yalnız virtually (fo-k1).`,
      `Türkçeden aktarma: "araştırma yapmak" make research olmaz, conduct ya da carry out research olur; "karar almak" take ya da make a decision olur. Türkçedeki fiili İngilizceye aynen taşıma.`,
      `raise ile rise: raise nesne alır (raise awareness, raise a question), rise almaz (prices rise). Şıklarda ikisi birlikte varsa boşluktan sonra nesne olup olmadığına bak.`,
    ],
    ornekler: [
      { soru: 'fo-k1', not: `"---- impossible" bir derece zarfı istiyor: virtually impossible. vitally ve visibly biçimce benzer ama impossible ile birleşmez; approximately sayılarla kullanılır.` },
      { soru: 'su-k1', not: `Boşluktan sonraki "of sleep" bir kalıp istiyor ve dört şık of alıyor. Kalıbın anlamı seçiyor: deprived of sleep (uykudan yoksun); relieved of ise bir yükten kurtulmak demek.` },
      { soru: 'ga-k1', not: `notoriously hard kalıplaşmış bir öbek: zorluğuyla ünlü. İkinci yarı (ocakta spor salonuna yazılıp martta bırakanlar) bu kötü ünü doğruluyor.` },
      { en: 'Plastic waste poses a growing threat to sea turtles.', tr: 'Plastik atıklar deniz kaplumbağaları için giderek büyüyen bir tehdit oluşturuyor.', not: 'pose + threat + to: üç parça birlikte öğrenilir.' },
    ],
    veri: [
      `Kelime sorularında "bağlama uymaz" çeldiricisi: YDS ve YÖKDİL sayımında %29 (n=84; analiz/dagilim.md §5), YDT ön bilgisiyle ağırlıklı tahminde %26, "anlamca yakın" ile eşit (analiz/agirlik.json → celdirici.tur.kelime). Etiket yalnız YÖKDİL kelime sorularında kullanıldı (29 soru); notlarının bir kısmına göre eşdizim tuzağı demek. Kümeler ayrı etiketlendiği için farkın bir kısmı etiketleyici farkıdır (analiz/dagilim.md §5).`,
    ],
    ref: 'analiz/dagilim.md §5; analiz/agirlik.json (celdirici.tur.kelime); analiz/etiketler (soru notları)' },

  { id: 'kel-bicimce-benzer', kategori: 'kelime', type: 'ders', highYield: true, status: T,
    title: 'Biçimce benzer sözcükler: kökü ve eki ayır',
    hap: `Yazılışı benzeyen şıklar (adapt, adopt; prosperity, posterity) kelime sorularının en sık tuzağıdır. Gözünün tanıdığı biçimi değil, kökünü ayırıp anlamını cümleye oturtabildiğin sözcüğü seç.`,
    body: [
      `Kelime sorularında en sık çeldirici, doğru sözcüğe biçimce benzeyen sözcüktür: aynı harflerle başlar, aynı ekle biter ya da tek harfle ayrılır. Geçmiş sınavlarda kelime sorularının çeldirici etiketlerinin yaklaşık beşte ikisi bu türden. Hızlı okuyan göz tanıdığı biçimi yakalar; tuzak da buna kurulur.`,
      `Çare yavaşlamak değil, sözcüğü bölmektir: önek, kök, sonek. pro-sper-ity (refah; prosper: gelişmek), post-er-ity (gelecek kuşaklar; post: sonra), auster-ity (kemer sıkma; austere: sade, sert). Ekler aynıysa karar köktedir. Sonra her şıkkı boşluğa koy ve cümleyi Türkçe söyle.`,
      `Bütün sorular içinde bu tuzağın payı küçüktür, ama neredeyse tamamı kelime sorularında ve boşluklu metnin kelime boşluklarında toplanır. Aşağıdaki çiftlerin bir kısmı iDil sorularında çeldirici olarak geçiyor; ötekiler de aynı türden karışıklıklar.`,
    ],
    tablo: {
      sutunlar: ['Sözcükler', 'Anlamları', 'Ayırt etme ipucu'],
      satirlar: [
        ['adapt / adopt / adjust', 'uyum sağlamak, uyarlamak / benimsemek, evlat edinmek / alışmak, ayarlamak', 'adOpt: option, yani seçip benimsemek; adapt to ve adjust to uyum bildirir'],
        ['affect / effect', 'etkilemek (fiil) / etki, sonuç (isim)', 'the effect of, have an effect on: isim; it affects: fiil. Seyrek: effect fiil olarak "gerçekleştirmek" demektir (effect a change)'],
        ['prosperity / posterity / austerity', 'refah / gelecek kuşaklar / kemer sıkma', 'kökler: prosper, post, austere'],
        ['deprive / derive', 'yoksun bırakmak / elde etmek, türemek', 'deprived of, derived from'],
        ['comprehensive / comprehensible', 'kapsamlı / anlaşılır', '-ible "-ebilir": anlaşılabilir'],
        ['economic / economical', 'ekonomiyle ilgili / tutumlu, az harcayan', 'economic growth, an economical car'],
        ['sensible / sensitive', 'mantıklı, sağduyulu / duyarlı, hassas', 'sensible "hassas" demek değil'],
        ['imply / infer', 'ima etmek / sonuç çıkarmak', 'konuşan ima eder, dinleyen çıkarır'],
        ['precede / proceed', 'önce gelmek / ilerlemek, devam etmek', 'pre- önce, pro- ileri'],
        ['principal / principle', 'başlıca, ana; okul müdürü / ilke', 'ilke anlamı yalnız principle'],
        ['unanimous / anonymous / magnanimous', 'oy birliğiyle / adı bilinmeyen / yüce gönüllü', 'uni (bir), an-onym (adsız), magn (büyük)'],
        ['adverse / averse / diverse', 'olumsuz, zararlı / isteksiz / çeşitli', 'adverse effects; averse to (insanlar için)'],
        ['virtually / vitally / visibly', 'neredeyse / hayati biçimde / gözle görülür biçimde', 'virtually impossible, vitally important'],
        ['strain / stain', 'suş; gerginlik / leke', 'bakteri ve virüs için strain'],
        ['prescribe / describe / subscribe', 'reçete etmek / tanımlamak / abone olmak', 'ortak kök scribe (yazmak); farkı önek yapar'],
      ],
    },
    tuzaklar: [
      `Tanıdık biçim tuzağı: posterity ile prosperity harflerinin çoğunu paylaşır. Ticaretin geliştiği, yeni yapıların yükseldiği bir dönem "gelecek kuşaklar" değil, "refah" dönemidir (gk-k1).`,
      `Edat çifti ayırır: deprived of (yoksun), derived from (elde edilmiş). Boşluktan sonraki edat, biçimce benzer iki sözcükten birini çoğu zaman tek başına eler.`,
      `Aynı ekle biten şıklar: zarf sorusunda beş şıkkın beşi de -ly ile bitebilir. Ek bu durumda bir şey söylemez; karar kökte: virtual-ly, vital-ly, visib-ly (fo-k1).`,
      `Benzer sözcük de gerçek bir sözcüktür. "Böyle bir sözcük var mı?" diye değil, "bu cümlede ne demek?" diye sor: adverse de averse de vardır, ama yüzlerce türün yan yana yaşadığı topluluk diverse (çeşitli) olur (sm-k1).`,
    ],
    ornekler: [
      { soru: 'sb-k1', not: `unanimous, anonymous ve magnanimous neredeyse aynı harflerle yazılır. Kök ayırır: uni (bir) + animus (zihin, gönül), yani tek gönül: oy birliği. magnanimous ise magn (büyük) + animus: yüce gönüllü. Karar oy birliği gerektirdiği için hâlâ karşı çıkan iki üyeye baskı yapıldı.` },
      { soru: 'sa-z1-a3', not: `Beş fiil de scribe (yazmak) köküyle kurulu; farkı önek yapıyor: pre- (önceden) reçete etmek, de- tanımlamak, sub- abone olmak, trans- yazıya geçirmek, in- kazımak. Doktorun enfeksiyon için yaptığı şey reçete yazmak.` },
      { soru: 'ga-z1-a2', not: `Şıklarda adapt yok, adopt var: göz onu adapt to (uyum sağlamak) diye okuyabilir, ama adopt (benimsemek) to ile bu anlamı kurmaz. Doğru şık adjust to (alışmak).` },
    ],
    veri: [
      `Kelime sorularında en sık çeldirici türü biçimce benzer: YDS ve YÖKDİL sayımında %42 (n=84; analiz/dagilim.md §5), YDT ön bilgisiyle ağırlıklı tahminde %38 (analiz/agirlik.json → celdirici.tur.kelime).`,
      `Bütün türler birlikte biçimce benzer çeldiricinin payı yalnız %3,6; kelime dışında ölçülür payı olan tek tür boşluklu metin (%6) (analiz/agirlik.json → celdirici.genel, celdirici.tur.bosluklu).`,
    ],
    ref: 'analiz/dagilim.md §5; analiz/agirlik.json (celdirici.tur.kelime, celdirici.genel, celdirici.tur.bosluklu)' },

  { id: 'kel-obek-fiil', kategori: 'kelime', type: 'ders', highYield: true, status: T,
    title: 'Öbek fiil: parçacığın yönünü oku',
    hap: `Öbek fiilde parçacık da anlam taşır: out çoğu zaman yok olma ya da sona erme, up artış ya da bitirme, down azalma ya da çökme, off ayrılma ya da iptal. Parçacığın yönünü cümlenin yönüyle karşılaştır.`,
    body: [
      `YDS'de ve YÖKDİL'de kelime bölümünün son sorusu (6.) öbek fiildir; YDS'de 2013–2016 arasında 5. soru da öbek fiildi. Beş şıkkın beşi de öbek fiil olduğu için tür eleme işe yaramaz: fiilin ve parçacığın birlikte ne dediğine bakarsın. Boşluklu metinde de zaman zaman bir öbek fiil boşluğu çıkar.`,
      `Öbek fiillerin bir kısmı parçacıktan tahmin edilebilir. die out, wipe out ve phase out üçü de "ortadan kalkma" bildirir; build up ile use up ise ters yönlüdür, biri biriktirir öteki tüketir. Bilmediğin bir öbek fiilde parçacığın yönünü cümlenin yönüyle karşılaştırmak çoğu zaman bir iki şıkkı eletir.`,
      `Ama parçacık mantığı bir kural değil, bir eğilimdir. give in (boyun eğmek), put up with (katlanmak) ve take after (birine çekmek) gibi öbek fiillerin anlamı parçalardan çıkmaz; bunlar kart kart öğrenilir. Bir öbek fiilin birden çok anlamı da olabilir: break down hem "parçalamak" hem "arıza yapmak" demektir.`,
    ],
    tablo: {
      sutunlar: ['Parçacık', 'Sık anlamı', 'Örnekler'],
      satirlar: [
        ['up', 'artış, birikme; bitirip tüketme; ortaya çıkma', 'build up (biriktirmek), go up (artmak), use up (tüketip bitirmek), turn up (ortaya çıkmak)'],
        ['out', 'yok olma, sona erme; dışarı çıkma', 'die out (nesli tükenmek), wipe out (silip süpürmek), phase out (aşama aşama kaldırmak), run out (tükenmek), set out (yola çıkmak)'],
        ['off', 'ayrılma, başlama; iptal, erteleme; yayma', 'set off (yola çıkmak), take off (havalanmak), put off (ertelemek), give off (ısı, koku yaymak)'],
        ['down', 'azalma, çökme; durulma', 'break down (parçalamak; arıza yapmak), turn down (geri çevirmek; kısmak), settle down (yerleşip düzen kurmak)'],
        ['on', 'sürme, aktarma', 'go on (sürmek; ardından yapmak), carry on (devam etmek), pass on (sonraki kuşağa aktarmak)'],
        ['over', 'devralma, el değiştirme', 'take over (devralmak), hand over (teslim etmek)'],
        ['into, to, with', 'yönelme, bağlanma', 'look into (araştırmak), point to (işaret etmek), stick to (bağlı kalmak), go along with (uymak)'],
        ['Kurala uymayanlar', 'anlamı parçalardan çıkmaz', 'give in (boyun eğmek), put up with (katlanmak), take after (birine çekmek), make up (oluşturmak; uydurmak)'],
      ],
    },
    tuzaklar: [
      `Aynı parçacık, ters anlam: build up (biriktirmek) ile use up (tüketmek) aynı soruda yan yana çıkabilir. Kuşlar uçuştan önce yağ biriktirir; tüketmek uçuşun kendisidir (gg-k1).`,
      `Birden çok anlam: set off hem "yola çıkmak" hem "tetiklemek, çalıştırmak" (set off an alarm); take off hem "havalanmak" hem "birden tutulmak". Cümleye uyan anlamı seç.`,
      `Nesne alıp almadığına bak: phase out, put off ve wipe out nesne alır (phase out its use); die out, break out (patlak vermek) ve come about (meydana gelmek) almaz. Boşluktan sonra nesne varsa nesne almayan öbek fiil elenir.`,
    ],
    ornekler: [
      { soru: 'fp-k1', not: `Üreticiler kobaltı az içeren ya da hiç içermeyen katotlara geçiyor: kobaltı zamanla kullanımdan kaldırmak istiyorlar, phase out. build up ve keep up ters yönde; look into ve give off anlam kurmaz.` },
      { soru: 'fm-k2', not: `out burada yok olma bildiriyor: ısınma sürerse türler birkaç on yılda yok olabilir, die out. turn up, take off, set out ve put off uyarı cümlesine uymaz.` },
      { soru: 'gg-z1-a5', not: `"Sonraki on yıllarda başka oklu leylekler ----" boşluğu "ortaya çıktı, bulundu" istiyor: turned up. up burada ortaya çıkma bildirir: turn up, show up.` },
      { en: 'The old factory gave off a strange smell that drivers could notice from the motorway.', tr: 'Eski fabrika, sürücülerin otoyoldan fark edebildiği garip bir koku yayıyordu.', not: 'off burada kaynaktan ayrılma: koku fabrikadan çıkıp yayılıyor.' },
    ],
    veri: [
      `Kelime şablonu: YDS'de (2017'den beri) ve YÖKDİL'de 6. soru öbek fiil; şablon uyumu YDS 29/31, YÖKDİL 36/36 (analiz/dagilim.md §3.1).`,
      `YDS'de 2016 Sonbahar dahil iki öbek fiil sorusu vardı (5. ve 6.); 2017 İlkbahar'dan beri bir (analiz/tahmin.md §6).`,
      `Boşluklu metinde boşlukların yaklaşık %4'ü öbek fiil (analiz/agirlik.json → konu.bosluklu).`,
    ],
    ref: 'analiz/dagilim.md §3.1; analiz/tahmin.md §4, §6; analiz/agirlik.json (konu.bosluklu)' },

  { id: 'kel-aile', kategori: 'kelime', type: 'ders', highYield: true, status: T,
    title: 'Kelime ailesi: bir kökten birkaç sözcük',
    hap: `Her yeni sözcüğü ailesiyle öğren: resist, resistance, resistant, irresistible. Sonek çoğunlukla türü, önek anlamın yönünü söyler; bilmediğin sözcüğü kök ve eklere bölünce anlamı çoğu zaman ortaya çıkar.`,
    body: [
      `İngilizcede bir kök, eklerle birkaç sözcük üretir: deprive (yoksun bırakmak), deprivation (yoksunluk), deprived (yoksun). Bir kartı ailesiyle öğrenmek, sınavda birkaç sözcüğü birden tanımak demektir. Okuma ve çeviride aynı kök farklı türlerde karşına çıkar: sleep deprivation (uykusuzluk) ile deprived of sleep (uykudan yoksun) aynı durumu anlatır.`,
      `Sonek sözcüğün türünü çoğu zaman söyler: -tion, -ment, -ity, -ness, -ance isim; -ive, -ous, -able, -ful, -less sıfat; -ise, -ify, -en fiil; -ly çoğunlukla zarf. Ama istisnalar var: alternative, initiative ve incentive -ive ile biten isimdir; wooden ve golden -en ile biten sıfattır; expertise -ise ile biten bir isimdir. Önek anlamın yönünü değiştirir: un-, in-, dis- olumsuz; re- yeniden; pre- önce; over- aşırı; mis- yanlış. research, reject ve reveal'deki re- de "yeniden" demek değildir.`,
      `Kelime sorusunda sözcük türü numaraya bağlıdır (1–2 isim, 3 sıfat, 4 zarf, 5 fiil) ve şıklar sık sık aynı ekle biter: beşi de -ly zarf ya da beşi de olumsuzluk önekli sıfat. Bu yüzden ek doğru şıkkı ele vermez; karar kökün anlamındadır. Bilmediğin sözcüğü parçala: in-vari-ab-ly, "değiş-e-mez biçimde", yani her zaman, istisnasız.`,
    ],
    tablo: {
      sutunlar: ['Ek', 'Ne yapar', 'Örnek (çoğu kartlarımızdan)'],
      satirlar: [
        ['-tion, -sion, -ment', 'isim', 'consolidation (pekiştirme), transmission (aktarım), impairment (bozulma)'],
        ['-ity, -ness, -ance, -ence', 'isim', 'scarcity (kıtlık), drowsiness (uyku hâli), resistance (direnç), persistence (sebat)'],
        ['-ive, -ous, -al', 'sıfat', 'disruptive (aksatan), prosperous (müreffeh), seasonal (mevsimlik)'],
        ['-able, -ible', 'sıfat: "-ebilir"', 'rechargeable (şarj edilebilir), detectable (saptanabilir), irresistible (karşı konulamaz)'],
        ['-ful, -less', 'sıfat: "-li", "-siz"', 'useful (yararlı), effortless (zahmetsiz), peerless (eşsiz)'],
        ['-ise, -ify, -en', 'fiil', 'colonise (yerleşip çoğalmak), diversify (çeşitlendirmek), weaken (zayıflatmak)'],
        ['-ly', 'çoğunlukla zarf', 'steadily (giderek), solely (yalnızca), inadvertently (farkında olmadan)'],
        ['un-, in-, im-, ir-', 'olumsuz: "değil"', 'unambiguous (açık seçik), uninhabitable (yaşanamaz), irresistible'],
        ['dis-, mis-', 'ters; yanlış', 'disorient (yönünü şaşırtmak), misunderstand (yanlış anlamak)'],
        ['re-, pre-', 'yeniden; önce', 'revive (yeniden canlandırmak), predate (-den daha eski olmak), prematurely (vaktinden önce)'],
        ['over-, under-', 'aşırı; yetersiz', 'overdose (aşırı doz), underestimate (hafife almak)'],
      ],
    },
    tuzaklar: [
      `Her in- "değil" demek değildir: invaluable "çok değerli", inflammable "kolay tutuşan" (flammable ile aynı), inhabitable "yaşanabilir" demektir; yaşanamaz olan uninhabitable'dır. impair (bozmak) ve inflammation (iltihap) da olumsuzluk öneki taşımaz.`,
      `Her -ly zarf değildir: elderly (yaşlı), costly (pahalı), likely (olası) sıfattır. scarcely de "kıt biçimde" değil, "neredeyse hiç" demektir; hardly da "zorla" değil, "neredeyse hiç".`,
      `-al iki türlü çalışır: dismissal (önemsememe; işten çıkarma) ve revival (canlanma) isimdir, seasonal ve commercial sıfattır. Türü yalnız ekten değil, sözcüğün cümledeki yerinden anla.`,
      `Aynı yazılan isim ve fiil: attribute fiilde "bağlamak, yormak", isimde "nitelik"; compound isimde "bileşik", fiilde "bir sorunu ağırlaştırmak"; extract fiilde "çıkarmak", isimde "öz, alıntı". Okunuşta vurgu isimde ilk heceye, fiilde ikinci heceye düşer: record /ˈrekɔːd/, /rɪˈkɔːd/; attribute /ˈætrɪbjuːt/, /əˈtrɪbjuːt/.`,
    ],
    ornekler: [
      { soru: 'sd-k1', not: `descend (inmek; be descended from: soyundan gelmek) ailesinden descendant (torun, soyundan gelen) doğru. dependants da aynı -ant ekini taşır ama kökü depend: birinin bakmakla yükümlü olduğu kişiler. Ek aynı, kök ayırıyor.` },
      { soru: 'su-k1', not: `deprive ailesi: bu soruda deprived of sleep (uykudan yoksun), bir okuma parçasında sleep deprivation (uykusuzluk) karşına çıkabilir. Kökü tanıyan ikisini de anlar.` },
      { en: 'Her answers were invariably polite, even when the questions were rude.', tr: 'Sorular kaba olsa bile cevapları her seferinde kibardı.', not: 'in- (değil) + vari (değişmek) + -able (-ebilir) + -ly: değişmeyecek biçimde, yani her zaman.' },
    ],
    veri: [
      `Kelime sorularında sözcük türü numaraya bağlı: 1–2 isim, 3 sıfat, 4 zarf, 5 fiil, 6 öbek fiil (YDS'de 2017'den beri ve YÖKDİL'de; analiz/dagilim.md §3.1).`,
      `Etiket notlarında biçimce benzer çeldiricinin sık görülen biçimi aynı ekli şıklar: "şıkların hepsi -ly zarf", "şıkların hepsi olumsuzluk önekli sıfatlar" (analiz/etiketler; sayım analiz/dagilim.md §5).`,
    ],
    ref: 'analiz/dagilim.md §3.1, §5; analiz/etiketler (soru notları); pilot kelime kartlarının aile (family) alanları' },

  // ---------- Sınav taktikleri ----------
  { id: 'sinav-puan', kategori: 'sinav', type: 'ders', highYield: true, status: T,
    title: 'Puan: boş bırakma, eleyerek işaretle',
    hap: `Her doğru 1,25 puan; yanlış cevap doğruyu götürmez. Boş bıraktığın soru sıfır getirir, işaretlediğin tahmin şans taşır: hiçbir soruyu boş bırakma, ama işaretlemeden önce eleyerek şansını büyüt.`,
    body: [
      `YDS'de ve YÖKDİL'de 80 soru var; her doğru 1,25 puan, 80 doğru 100 puan eder. Yanlış cevaplar doğruları götürmez. Sınav stratejisinin temeli bu kuraldır: boş bırakılan soru hiçbir şey kazandırmaz, işaretlenen her soru ise en azından şans taşır.`,
      `Tahminin değeri kaç şık elediğine bağlıdır. Beş şık arasından körlemesine seçersen doğru bulma olasılığın beşte birdir; bu, ortalamada soru başına 0,25 puan eder. İki şıkkı elersen olasılık üçte bire, üç şıkkı elersen yarıya çıkar (tablo). Tahminden önce harcadığın eleme dakikası puana dönüşür.`,
      `Bu sayılar ortalamadır; tek bir tahmin ya tutar ya tutmaz. Ama sınavda on, on beş soruyu tahminle işaretlemek zorunda kalabilirsin; o zaman ortalama işler. On soruyu hiç elemeden işaretlemek ortalamada 2,5 puan, ikişer şık eleyerek işaretlemek yaklaşık 4,2 puan getirir; boş bırakmak sıfır.`,
    ],
    adimlar: [
      `Bildiğin soruyu işaretle ve geç. Bilmediğin soruda önce yanlış olduğundan emin olduğun şıkları çiz: dil bilgisi uymayan, ilişkiyi ters kuran, metinde olmayan.`,
      `Kalan şıklar arasında kısa düşün. Karar veremiyorsan aralarından birini cevap olarak işaretle, soruya dönüş işareti koy ve geç; vakit kalırsa dönersin.`,
      `Yedek süreye girince (Süre ve sıra kartında son 20 dakika) boş numaraları doldur: önce eleyerek, eleyemiyorsan körlemesine. Son on dakikada hiçbir numara boş kalmasın.`,
      `Harf seçimini en sona bırak: yalnız hiçbir şıkkı eleyemediğin ve vaktin bittiği sorularda (aşağıdaki tuzaklar).`,
    ],
    tablo: {
      sutunlar: ['Elenen şık', 'Kalan şık', 'Doğru olasılığı', 'Ortalama puan'],
      satirlar: [
        ['0', '5', '%20', '0,25'],
        ['1', '4', '%25', '0,31'],
        ['2', '3', '%33', '0,42'],
        ['3', '2', '%50', '0,63'],
        ['4', '1', 'bildin', '1,25'],
      ],
    },
    tuzaklar: [
      `Harf istatistiği yalnız son çaredir. Geçmiş kitapçıklarda doğru cevap E'de daha seyrek (%13), C'de biraz daha sık (%25); eşit dağılımda her harf %20 olurdu. Fark küçüktür, 2013 YDS'de hiç görülmez ve ÖSYM bunu değiştirebilir. Rastgele bir harfe göre C seçmenin on soruda getirebileceği fark ortalama bir puanı bulmaz; ikişer şık elemek ise yaklaşık 1,7 puan fazla getirir.`,
      `Akışı bozan cümle sorusunda harf, cümlenin sırasıdır ve dağılım çok dengesizdir: geçmiş sınavlarda cevap 94 sorunun 84'ünde II., III. ya da IV. cümle. Bu soruda tahmin gerekiyorsa I. ve V. cümleyi en sona bırak.`,
      `iDil'de şıklar her seferinde karıştırılır (akışı bozan cümle dışında: orada şık cümlenin sırasıdır); uygulamada harf ipucu işe yaramaz. Alışkanlığını elemeyle kur; sınavda da asıl puanı eleme getirir.`,
    ],
    veri: [
      `Doğru harf, anahtarı olan 1.032 ÖSYM sorusunda: A %20, B %23, C %25, D %20, E %13. 2013 YDS tam kitapçığında fark yok: C ve E 18'er kez (analiz/dagilim.md §7).`,
      `Akışı bozan cümle sorularında cevap: I. cümle 3, II. 28, III. 22, IV. 34, V. 7 kez (n=94; analiz/dagilim.md §7).`,
    ],
    ref: 'Sınav kuralları ÖSYM kılavuzundan (analiz/hap-plani.md §2.8); analiz/dagilim.md §7' },

  { id: 'sinav-sure-sira', kategori: 'sinav', type: 'ders', highYield: true, status: T,
    title: 'Süre ve sıra: 180 dakikayı bölümlere böl',
    hap: `180 dakikada 80 soru: soru başına ortalama 2 dakika 15 saniye. Kelime ve dil bilgisinde hızlı git, kazandığın dakikaları okumaya aktar; takıldığın soruyu işaretle, geç, sonra dön.`,
    body: [
      `YDS ve YÖKDİL 80 soru ve 180 dakikadır: soru başına ortalama 2 dakika 15 saniye. Ama sorular eşit değildir. Kelime ve dil bilgisi soruları tek cümledir; bildiysen bir dakikadan kısa sürer. Okuma sorusu ise önce bir parçayı okumayı gerektirir. Süreyi her soruya eşit bölmek yerine bölümlere bütçe ayır.`,
      `Aşağıdaki bütçe bir başlangıç önerisidir, ÖSYM verisi değildir: soru sayıları ve numaralar geçmiş kitapçıklardan, dakikalar bizim önerimiz. 20 dakikalık yedek, işaretlediğin sorulara dönmek ve cevap kâğıdını denetlemek için. Kendi denemende ölç ve ayarla.`,
      `Sıra kişiye göre değişir. Kimi öğrenci sırayla gider; kimi zihni tazeyken okumayla başlar; kimi önce hızlı bölümleri bitirip kalan zamanı okumaya ayırır. Hangisinin sana uyduğunu sınav gününe bırakma: tam süreli denemelerde iki sırayı dene, puanını ve yetişmeyen soru sayısını karşılaştır.`,
    ],
    adimlar: [
      `Bölüm bitiş dakikalarını sınavdan önce belirle. YDS'de 16. soru 15., 42. soru 65., 62. soru 125., 80. soru 160. dakikada bitsin. YÖKDİL'de 20. soru 20., 53. soru 85., 65. soru 110., 80. soru 160. dakikada.`,
      `Bir soruda bütçenin iki katına çıktıysan dur: kalan şıklardan birini cevap olarak işaretle, soruya dönüş işareti koy ve geç. Bir soruya takılmak, sonra kolayca çözeceğin birkaç soruyu yetiştirememene yol açabilir.`,
      `Okumada parça başına süreyi koru: YDS'de beş parça var, her birine yaklaşık 12 dakika. Bir parçanın son sorusu uzarsa işaretle ve sonraki parçaya geç.`,
      `Yedek 20 dakikaya girdiğinde önce boş kalan bütün numaraları eleyerek doldur, sonra işaretlediğin sorulara dön.`,
      `Her denemeden sonra bölüm bölüm ne kadar sürdüğünü yaz; bütçeyi kendi hızına göre kaydır.`,
    ],
    tablo: {
      sutunlar: ['Bölüm', 'YDS: soru, öneri', 'YÖKDİL: soru, öneri'],
      satirlar: [
        ['Kelime ve dil bilgisi', '16 soru (1–16), 15 dk', '20 soru (1–20), 20 dk'],
        ['Boşluklu metin', '10 (17–26), 15 dk', '10 (21–30), 15 dk'],
        ['Cümle tamamlama', '10 (27–36), 20 dk', '11 (31–41), 20 dk'],
        ['Çeviri, iki yön', '6 (37–42), 15 dk', '12 (42–53), 30 dk'],
        ['Okuma', '20 (43–62), 60 dk', '15 (66–80), 50 dk'],
        ['Diyalog ve yakın anlam', '9 (63–71), 15 dk', 'yok'],
        ['Paragraf tamamlama ve akışı bozan', '9 (72–80), 20 dk', '12 (54–65), 25 dk'],
        ['Yedek: dönüş ve denetim', '20 dk', '20 dk'],
      ],
    },
    tuzaklar: [
      `Sırayı değiştirirsen satır kayabilir: okumayla başlayan biri 43. sorunun cevabını 1. satıra yazabilir. Her bölüm başında soru numarasıyla satır numarasını karşılaştır.`,
      `İlk sorularda oyalanmak: kelime bölümünde bir sözcüğü bilmiyorsan uzun düşünmek onu hatırlatmaz. Bağlamla ele, işaretle, geç; zaman okumada lazım.`,
    ],
    veri: [
      `Bölüm yapısı ve numaralar YDS'de 2013–2026, YÖKDİL'de 2019–2026 arasında değişmedi; YDS okuması 5 parça × 4 soru (analiz/dagilim.md §2; analiz/tahmin.md §3).`,
      `Yapı yıllardır aynı olsa da sınavdan önce ÖSYM kılavuzunda değişiklik olup olmadığına bak (analiz/tahmin.md §2).`,
    ],
    ref: 'Sınav süresi ve soru sayısı ÖSYM kılavuzundan (analiz/hap-plani.md §2.8); analiz/dagilim.md §2; analiz/tahmin.md §2, §3' },

  { id: 'sinav-eleme', kategori: 'sinav', type: 'ders', highYield: true, status: T,
    title: 'Eleme: doğruyu aramadan önce yanlışları çiz',
    hap: `Doğruyu aramadan önce yanlışları ele: önce dil bilgisi uymayan, sonra ilişkiyi ters kuran, en son metinde olmayan ya da metinden geniş konuşan şık gider. Cümleye ikisi de uyan eş anlamlı iki şık birlikte elenir.`,
    body: [
      `ÖSYM sorularının tek doğru cevabı vardır; yanlış şıklar ise belli kalıplarla yazılır. Geçmiş kitapçıkların etiket sayımında en sık çeldirici türleri: mantığı ters (karşıtlık ya da neden ilişkisini tersine çeviren) yaklaşık üçte bir, kısmen doğru beşte bir; ardından anlamca yakın, dil bilgisi uyumsuz ve metinde olmayan şıklar. Bu kalıpları tanırsan bilmediğin bir soruda da iki üç şık eleyebilirsin.`,
      `Eleme her soru tipinde aynı sırayla işler: önce biçim (dil bilgisi uyuyor mu?), sonra ilişki (bağlaç ne istiyor?), sonra içerik (metin bunu söylüyor mu, bu genişlikte mi söylüyor?). Her adım çoğu zaman bir iki şık eler; ama okuma ve çeviride biçim adımı çoğunlukla hiçbir şık elemez, iş içerikte biter. Kalan iki şık arasında karar verirken soruya dön ve ikisini ayıran tek sözcüğü bul.`,
      `Biçim ipuçlarına güvenme. "En uzun şık doğrudur" ya da "art arda aynı harf gelmez" gibi taktiklerin ÖSYM'de işlediğine dair elimizde veri yok; iDil'de de şıklar (akışı bozan cümle dışında) karıştırılır ve şık uzunluğundan cevap çıkmaması denetlenir. Eleme ise içeriğe dayandığı için her sınavda işe yarar.`,
    ],
    adimlar: [
      `Biçim: boşluğa ya da cümleye dil bilgisi açısından uymayan şıkları çiz (despite + tam cümle, bağlaçsız iki cümle, cümleye uymayan zaman).`,
      `İlişki: bağlacın ya da sinyal sözcüğün istediği ilişkiyi (karşıtlık, neden, sonuç, koşul) kurmayan şıkları ele. Konusu doğru ama ilişkisi ters şık en sık tuzaktır.`,
      `İçerik: okuma, çeviri ve yakın anlam sorularında metinde olmayan bilgiyi, metin temkinliyken mutlak konuşan şıkkı (all, always, never, only) ve kapsamı kaydıranı (birçok yerine hepsi) ele.`,
      `Eş anlamlı çift: iki şık aynı şeyi başka sözcüklerle söylüyor ve ikisi de cümleye dil bilgisi açısından uyuyorsa ikisini birden ele; tek doğru olduğuna göre ikisi birden doğru olamaz. Biri biçimden eleniyorsa bu kural işlemez: although ile despite aynı anlamdadır, ama su-g2'de yalnız although cümleye uyar ve doğru odur.`,
      `Son iki şık: aralarındaki tek farkı bul (bir zaman, bir nicelik, bir bağlaç) ve o farkı soruda ya da metinde denetle.`,
    ],
    tablo: {
      sutunlar: ['Çeldirici', 'Pay', 'Nasıl tanırsın?'],
      satirlar: [
        ['Mantık ters', '%30', 'Konu doğru, bağlacın istediği ilişki ters: karşıtlık yerine neden'],
        ['Kısmen doğru', '%20', 'Bir kısmı metinde var; bir ayrıntı eksik, fazla ya da değişmiş'],
        ['Anlamca yakın', '%16', 'Doğru cevaba benzer; zaman, kapsam ya da yön farklı'],
        ['Dil bilgisi uyumsuz', '%10', 'Yapı kurulamaz: despite + cümle, mastar yerine -ing'],
        ['Metinde yok', '%9', 'Mantıklı görünür ama parçada geçmez'],
        ['Aşırı genelleme', '%4', 'Metin "bazı, olabilir" derken şık "hepsi, her zaman" der'],
        ['Zaman uyumsuz', '%4', 'Zaman ya da zaman bağlacı cümleye uymaz'],
        ['Biçimce benzer', '%4', 'Doğru sözcüğe yazılışça benzer; kelime sorularında'],
      ],
    },
    tuzaklar: [
      `Doğru bilgi, doğru cevap demek değildir. Cümle tamamlamada şıkların çoğu kendi başına doğru bilgiler verir; soru, hangisinin verilen yarıya bağlandığıdır. Uyku sorusunda dört şık uykuyla ilgili bilgi veriyor; karşıtlık kuran tek şık doğru (su-t1).`,
      `Metin temkinliyse mutlak konuşan şık elenir; ama temkinli her şık doğru değildir. su-c1'de suggest (işaret etmek) temkinlidir ve "mutlaka … kanıtlanmıştır" diyen şık bu yüzden gider; doğru şık temkinin yanında sayıyı ve karşılaştırmayı da korur.`,
      `Benzer görünen iki şık eş anlamlı olmayabilir. Biri many (birçok), öteki most (çoğu) diyorsa ya da biri may, öteki must diyorsa ikisi farklıdır; ikisini birden eleme, farkı metinde ara.`,
    ],
    veri: [
      `Çeldirici etiketleri, bütün türler: mantık ters %30, kısmen doğru %20, anlamca yakın %16, dil bilgisi uyumsuz %10, metinde yok %9 (analiz/agirlik.json → celdirici.genel; etiketler öznel).`,
      `Türe göre baş çeldirici: cümle tamamlamada mantık ters %72, okumada metinde yok %34,5, diyalogda kısmen doğru %88,5 (analiz/agirlik.json → celdirici.tur).`,
    ],
    ref: 'analiz/agirlik.json (celdirici.genel, celdirici.tur); analiz/dagilim.md §5' },

  { id: 'sinav-son-hafta', kategori: 'sinav', type: 'ders', highYield: true, status: T,
    title: 'Son hafta: yeni konu değil, deneme ve tekrar',
    hap: `Son hafta yeni konu açma: bir iki tam süreli deneme çöz, yanlışlarını ve hap kartlarını tekrar et, sınav gününün düzenini prova et. Uykunu koru; öğrendiğin pekişsin.`,
    body: [
      `Sınavdan önceki son hafta yeni bilgi yüklemek için değil, bildiğini sınavda kullanılır hâle getirmek içindir. Önerimiz: bir iki tam süreli deneme, yanlış defterinin tekrarı ve hap kartlarının formül satırları. Yeni bir konuya başlamak yerine her sınavda çıkan aileleri sağlamlaştır: dil bilgisinde edat, bağlaç ve fiil yapılarının sayısı incelenen dört tam YDS kitapçığında birebir aynıydı; yüzde 10 sorularının hepsi de beklenen numara bloğuna düştü.`,
      `Uyku bu planın parçasıdır. iDil'in "Uyku ve beyin" ünitesinde gördüğün gibi uyku, gün içinde öğrenilenlerin pekişmesine yardım eder; tek bir kötü gece bile dikkati bozabilir. Son geceyi uykusuz geçirip çalışmak, ertesi gün tam da ihtiyacın olan dikkati zayıflatabilir.`,
      `Sınav günü sürprizsiz geçmeli. 180 dakikalık oturumun bölüm bütçesini, cevap kâğıdına işaretleme düzenini ve takıldığında ne yapacağını önceden belirle; o gün yalnız uygula.`,
    ],
    adimlar: [
      `Haftanın başında bir tam deneme çöz: 80 soru, 180 dakika, ara vermeden. Bölüm sürelerini not et ve süre bütçeni buna göre son kez ayarla.`,
      `Yanlışlarını türüne ayır: bilgi eksiği mi (sözcüğü bilmiyordum), dikkat mi (bağlacı yanlış okudum), süre mi (yetişmedi)? Bilgi eksiğini hap kartıyla, dikkat hatasını yanlış defterine not ederek kapat.`,
      `Her gün kısa bir tekrar yap: hap kartlarının formül satırları, kelime kartlarının aileleri ve eşdizimleri, yanlış defterindeki sorular. Yeni bir dil bilgisi konusuna başlama.`,
      `Cevap kâğıdı düzenini prova et: her soruyu çözdükçe mi işaretleyeceksin, yoksa bölüm sonunda toplu mu? Hangisini seçersen seç, her bölüm başında soru numarasıyla satır numarasını karşılaştır.`,
      `Sınavdan önceki gün hafif bir tekrar yap, akşamı erken bitir, sınav yerine nasıl gideceğini planla. Gece geç saate kadar çalışma.`,
      `Sınav günü ilk sorularda takılırsan paniğe kapılma: işaretle, geç. Sonda boş numara bırakma; yanlış doğruyu götürmez.`,
    ],
    tuzaklar: [
      `Son gece "bir konu daha" tuzağı: geç saate kadar çalışmak ertesi gün dikkatini zayıflatabilir; o gece kazandığın, sınavda kaybettiğinden az olabilir.`,
      `Kodlama hatası: doğru bildiğin cevabı yanlış satıra yazarsan sonraki cevaplar da kayar. Bölüm başlarında numara denetimi birkaç saniye sürer.`,
      `Tek denemeye göre planı baştan değiştirme: bir denemenin puanı o günün sorularına ve yorgunluğuna da bağlıdır. Süre ve eleme düzeninde küçük ayarlar yeter.`,
    ],
    veri: [
      `Dil bilgisi şablonu: YDS'de 3 fiil yapısı, 3 edat, 3 bağlaç ya da bağlantı zarfı, 1 eşleşik bağlaç; YÖKDİL'de 2 fiil yapısı, 5 edat, 5 bağlaç ya da bağlantı zarfı, 1 eşleşik bağlaç, 1 sıfat cümleciği. Dört tam YDS'de aile sayıları birebir aynı (analiz/tahmin.md §4; analiz/dagilim.md §3.2).`,
    ],
    ref: 'pilot/saglik-uyku.js (Uyku ve beyin: consolidate kartı, su-k2); analiz/tahmin.md §4; analiz/dagilim.md §3.2; sınav süresi ve kuralları ÖSYM kılavuzundan (analiz/hap-plani.md §2.8)' },
];
