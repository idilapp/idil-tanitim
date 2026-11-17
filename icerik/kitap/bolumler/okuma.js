// Ders Kitabı · Okuma ve diyalog (taslak, 15 Kasım 2026). Bölüm numarası kitabın planından gelir (../index.js).
// Biçim ve ton: ../README.md ve örnek bölümler 10-kosul.js, 11-baglayicilar.js. Okuma parçaları, diyaloglar, örnek cümleler ve
// alıştırmaların hepsi özgündür; hiçbir kitaptan, ÖSYM sorusundan ya da tip-okuma, tip-diyalog hap kartlarının cümlelerinden
// alınmadı. ÖSYM metni ve uyarlaması yok. Sınav verileri iDil'in ÖSYM analizinden (../../analiz/dagilim.md §2, §3.5, §5;
// agirlik.json → konu.okuma, konu.diyalog, celdirici.tur.okuma, celdirici.tur.diyalog; tahmin.md §5.3) ve iki hap kartının veri
// alanından; kartlarla çelişmez. Okuma verisi yalnız tam YDS kitapçıklarından (YDT ön bilgisiyle); YÖKDİL'in okuma verisi yok.
// Bu bölüm sınav becerisidir. Gönderimin dil bilgisi gonderim'in, temkinli dil ve adlaştırma akademik'in, tek sapma ilkesi
// ceviri'nin, çeldiricinin cümle tamamlamadaki yüzleri cumle-tamamlama'nın, dolaylı soru isim-cumlecikleri'nin, konu ve odak
// paragraf'ın konusu; burada yalnız anılır ve hatirlat ile bağlanır.
// İşaretler: **kalın**, ==fosforlu kalem (hedef yapı)==, *İngilizce sözcük*; alıştırmada ---- boşluk.
// Öğretmen doğrulasın: E dersinde "Would you mind …? sorusuna izin veren cevap olumsuzdur; Yes ile başlayıp izin vermek
// çelişkilidir" yargısı ve olumsuz soruya İngilizce cevabın gerçeğe göre verilmesi; B dersinde "Few patients completed" =
// "Most patients did not complete" eşlemesi; D dersinde tutum sözcüklerinin sınıflaması (claim mesafe, show onay).
// Olgular: F'deki parça (kentsel gürültünün çoğunlukla pes olması; 2000'lerin başında Hollanda'da büyük baştankara bulgusu;
// yüksek notaların daha kısa mesafeye taşınması; bazı türlerde dişilerin pes ötüşe daha güçlü tepki vermesi); B'deki Avrupa
// nehirleri ve somonlar (1970'lerden sonraki atık denetimi); C'deki matbaa ve kitap fiyatları; yokla'daki kaktüslerin gözeneklerini
// çoğunlukla gece açması; C'deki roman okuma ile empati testi; D'deki nefes egzersizi ve kan basıncı; "Metinde gör"deki yaz saati
// (enerji tasarrufu bulgularının karışık olması, ilkbahar geçişinden sonra kaza ve kalp krizinde kısa süreli artış, bazı bilim
// kuruluşlarının kalıcı standart saati savunması).

export default {
  id: 'okuma',
  no: 24,
  title: 'Okuma ve diyalog',
  en: 'Reading and dialogue completion',
  seviye: 'B2–C1',
  sure: 40,
  durum: 'taslak',
  sinavda: `Okuma sınavın en büyük bloğudur: YDS'de 5 parça ve 20 soru (43–62; her parçaya 4 soru), YÖKDİL'de 15 soru (66–80). Tam YDS kitapçıklarında okuma sorularının %54'ü ayrıntı, %23'ü çıkarım, %10'u ana fikir ve başlık, %6'sı yazarın amacı, %4'ü doğru/yanlış bilgi sorusudur; tutum, sözcük anlamı ve gönderim birlikte %4. Diyalog tamamlama YDS'de 5 sorudur (63–67); YÖKDİL'de diyalog sorusu yok. Kaynak: iDil'in ÖSYM soru analizi; okuma verisi tam YDS kitapçıklarından, YÖKDİL'in okuma sorularının türü bilinmiyor.`,
  hedefler: [
    'Soru kökünün dilinden sorunun türünü tanımak: ayrıntı, çıkarım, ana fikir ve başlık, amaç, tutum, gönderim ve sözcük anlamı.',
    'Kökteki anahtar sözcüğü parçada bulmak; kanıt cümlesini doğru şıktaki eş anlamlı ifadeyle (*paraphrase*) eşlemek.',
    'Dört çeldiriciyi adıyla tanıyıp elemek: metinde yok, kısmen doğru, ters, aşırı genelleme.',
    'Çıkarımı tahminden ayırmak; yazarın tutumunu değerlendirme, temkin ve bildirme sözcüklerinden okumak.',
    'Diyalog tamamlamada boşluğu sonraki satırdan çözmek: soru-cevap uyumu ve konuşmanın işlevi.',
  ],
  konular: ['ayrıntı', 'çıkarım', 'ana fikir', 'başlık', 'yazarın amacı', 'yazarın tutumu', 'soru-cevap uyumu', 'bağlam'],
  hap: ['tip-okuma', 'tip-diyalog', 'sinav-eleme', 'sinav-sure-sira'],

  // Kendini yokla: her soru bir derse bağlı; yanlış yapılan soru o dersi önerir.
  yokla: [
    { ders: 'a', soru: `Hangi soru kökü bir **çıkarım** sorusudur?`,
      secenekler: [
        'According to the passage, the first vaccines were tested on ----.',
        'It can be inferred from the passage that early vaccines ----.',
        'The passage is mainly concerned with ----.',
        'The word "they" in the third sentence refers to ----.',
      ], dogru: 1,
      aciklama: `*It can be inferred* 'çıkarılabilir' demektir: parçada yazmayan ama yazanlardan zorunlu olarak çıkan bilgiyi sorar. *According to the passage* parçada açıkça yazan bir ayrıntıyı, *mainly concerned with* bütün parçanın ana fikrini, *refers to* ise bir zamirin neyi gösterdiğini sorar.` },
    { ders: 'b', soru: `*Cacti and many other desert plants open the tiny pores on their surface mainly at night, when the air is cooler and less water escapes.* According to the sentence, these plants ----.`,
      secenekler: [
        'keep their pores mostly closed during the heat of the day',
        'lose more water at night than during the day',
        'grow faster at night than during the day',
        'never open their pores during the day',
      ], dogru: 0,
      aciklama: `Gözenekleri 'çoğunlukla gece' açmak, gündüzün sıcağında çoğunlukla kapalı tutmak demektir: doğru şık aynı bilgiyi başka sözcüklerle söyler. Gece daha çok su kaybetmeleri parçanın tersidir; parça gece daha az su kaçtığını söylüyor. Büyüme hızından parçada söz edilmiyor. *Never* ise *mainly*'yi mutlak yapar: aşırı genelleme.` },
    { ders: 'c', soru: `Parça: *Some studies have found that people who regularly read novels score slightly higher on tests of empathy.* Şık: *Reading novels makes all readers more empathetic.* Bu şık hangi tür çeldiricidir?`,
      secenekler: ['metinde yok', 'kısmen doğru', 'ters', 'aşırı genelleme'], dogru: 3,
      aciklama: `Şıkkın konusu ve yönü parçayla aynı, ama derecesi ve kapsamı büyümüş: *some studies* ve *slightly higher* temkinli bir bulgudur; şık bunu *makes* ile kesin bir nedene, *all readers* ile bütün okurlara yayıyor. Bu aşırı genellemedir. Bilgi parçada var (metinde yok değil), yön aynı (ters değil), bir ayrıntı başka bir ayrıntıyla da yer değiştirmemiş (kısmen doğru değil).` },
    { ders: 'd', soru: `*The new drug appears promising, but the trial was small and lasted only six weeks, so its long-term safety remains unknown.* The author's attitude towards the new drug is ----.`,
      secenekler: ['enthusiastic', 'dismissive', 'cautious', 'indifferent'], dogru: 2,
      aciklama: `Yazar hem olumlu bir sözcük (*promising*) hem de sınırlar (küçük deneme, altı hafta, bilinmeyen uzun vadeli güvenlik) kullanıyor: temkinli, *cautious*. *Enthusiastic* (coşkulu) sınırları görmezden gelir; *dismissive* (küçümseyen) *promising* ile çelişir; *indifferent* (kayıtsız) bir yazar ilacı ayrıntılı tartmazdı.` },
    { ders: 'e', soru: `**Ece:** I've just read the email about the new library hours. **Mert:** ---- **Ece:** Until midnight on weekdays, and until ten on Saturdays.`,
      secenekler: ['Do they open on Sundays now?', 'How late will it stay open?', 'Who decided to change them?', 'Is that a good idea, do you think?'],
      dogru: 1,
      aciklama: `Sonraki satır iki saat veriyor (*until midnight, until ten*): boşluk bir zaman sorusudur, 'ne kadar geç saate kadar açık kalacak?'. Pazar sorusu evet-hayır sorusudur ve cevabı *Yes* ya da *No* olurdu; kimin karar verdiği sorusu bir kişi bekler; fikir sorusu bir görüş bekler.` },
  ],

  dersler: [
    {
      id: 'a', baslik: 'Soru kökü ne istiyor? Okuma sorusunun türleri', sure: 6, konular: ['ayrıntı', 'çıkarım', 'ana fikir', 'başlık'],
      bloklar: [
        { tur: 'metin', metin: `Okuma parçasının her sorusu senden başka bir iş ister ve bu işi soru kökü (*question stem*) söyler. Şıklara geçmeden önce kökü oku ve sorunun türüne ad koy. Tür iki şeyi belirler: kanıtı nerede arayacağını (tek bir cümlede mi, bütün parçada mı) ve şıkları hangi ölçüyle tartacağını. **Ayrıntı** (*detail*) sorusu parçada açıkça yazan bir bilgiyi sorar; cevap çoğunlukla tek bir cümlededir. **Çıkarım** (*inference*) sorusu parçada yazmayan ama yazanlardan zorunlu olarak çıkan bilgiyi sorar. **Ana fikir** ve **başlık** (*main idea, title*) soruları bütün parçayı özetleyen şıkkı ister. **Yazarın amacı** (*purpose*) yazarın ne yaptığını sorar: bir süreci mi açıklıyor, iki görüşü mü karşılaştırıyor, bir iddiayı mı eleştiriyor? Dikkat: *The author mentions X in order to* kökü bütün parçanın değil, tek bir ayrıntının işini sorar; cevabı X'in çevresindeki cümlelerdedir. **Tutum** (*attitude*) yazarın konuya bakışını sorar. **Gönderim** ve **sözcük anlamı** (*reference, vocabulary in context*) bir sözcüğün parçada neyi gösterdiğini ya da ne anlama geldiğini sorar. Olumsuz kökte (*not mentioned, not true*) ise parçada olmayan ya da parçayla çelişen tek şıkkı ararsın; kökteki *not*'u gözden kaçırma.` },
        { tur: 'tablo', baslik: 'Kökün dili', sutunlar: ['Tür', 'Kök böyle başlar', 'Kanıt nerede'], satirlar: [
          ['ayrıntı', '*According to the passage, … / It is stated in the passage that … / Which of the following is true?*', 'anahtar sözcüğün geçtiği cümle'],
          ['çıkarım', '*It can be inferred / understood from the passage that … / The passage implies that …*', 'iki bilginin birleşimi ya da bir ifadenin arka planı'],
          ['ana fikir, başlık', '*The passage is mainly concerned with … / Which of the following is the best title?*', 'bütün parça; özellikle ilk ve son cümleler'],
          ['amaç', "*The author's primary purpose is to … / The author mentions X in order to …*", "yazarın fiili (*describe, explain, argue, compare*); X'in çevresi"],
          ['tutum', "*The author's attitude towards X can be described as …*", 'değerlendirme ve temkin sözcükleri'],
          ['gönderim, sözcük', '*The word "they" refers to … / The word "X" is closest in meaning to …*', 'sözcüğün cümlesi ve bir öncesi'],
          ['olumsuz kök', '*Which of the following is not mentioned / not true?*', 'dört şıkkı parçada bul; kalan şık cevaptır'],
        ] },
        { tur: 'turkce', metin: `**Suggest 'önermek' değil, argue 'tartışmak' değil.** Türk öğrenci köklerdeki iki fiili sözlükteki ilk anlamıyla okur. *The passage suggests that* 'parça … olduğuna işaret ediyor, … olduğunu düşündürüyor' demektir; bir öneri sormaz, çıkarım sorar. *The author argues that* 'yazar … olduğunu savunuyor, ileri sürüyor' demektir; yazar kimseyle tartışmıyor, bir görüşü destekliyor. *Imply* da 'ima etmek, sezdirmek'tir. Bu üç fiili kökte görünce aradığın şey açıkça yazılmış bir cümle değil, parçanın vardığı ya da sezdirdiği sonuçtur.` },
        { tur: 'sinavda', metin: `Tam YDS kitapçıklarında okuma sorularının %54'ü ayrıntı, %23'ü çıkarımdır: her dört sorudan üçü bu iki türden gelir. Ana fikir ve başlık %10, yazarın amacı %6, doğru/yanlış bilgi %4; tutum, sözcük anlamı ve gönderim birlikte %4. Parçanın son sorusu 20 parçanın 10'unda bütüne bakar (ana fikir, amaç, başlık ya da tutum); ilk soruda bu yalnız 2 parçada görülür. Bütüne dair soruyu en sona bırakmak bu yüzden doğal bir sıradır. Kaynak: iDil'in ÖSYM analizi; YÖKDİL'in okuma verisi yok.` },
        { tur: 'dene', soru: 'Hangi soru kökü parçanın **bütününe** bakar?',
          secenekler: [
            'The author mentions the 1918 flu in order to ----.',
            'According to the passage, the number of cases ----.',
            'Which of the following is the best title for the passage?',
            'The word "they" in the second sentence refers to ----.',
          ], dogru: 2,
          aciklama: `Başlık sorusu bütün parçayı kapsayan şıkkı ister. *Mentions X in order to* bir amaç sorusudur, ama tek bir ayrıntının (1918 gribinin) parçadaki işini sorar; cevabı o ayrıntının çevresindedir. *According to the passage* bir ayrıntı, *refers to* bir gönderim sorusudur; ikisinin de kanıtı tek bir cümlededir.` },
        { tur: 'dene', soru: '*The passage implies that the new bridge ----.* Bu kök ne ister?',
          secenekler: [
            'Parçada yazmayan ama parçadaki bilgilerden zorunlu olarak çıkan bir sonuç',
            'Köprü hakkında parçada aynen yazan bir bilgi',
            'Yazarın köprüyle ilgili bir önerisi',
            'Parçanın köprüye dair en önemli fikri',
          ], dogru: 0,
          aciklama: `*Imply* 'ima etmek, sezdirmek' demektir: bu bir çıkarım köküdür; cevap parçada yazılı değildir ama parçadan zorunlu olarak çıkar. Aynen yazan bilgi bir ayrıntı sorusunun cevabıdır. Yazarın önerisi sorulmuyor; *suggest* ile *imply* bir öneri değil, bir sonuç sorar. 'En önemli fikir' ana fikir sorusudur ve *mainly concerned with* gibi bir kökle gelir.` },
      ],
    },
    {
      id: 'b', baslik: 'Kökten parçaya: anahtar sözcük ve eş anlamlı ifade', sure: 6, konular: ['ayrıntı'],
      bloklar: [
        { tur: 'metin', metin: `Okuma sorusunu çözmenin en hızlı yolu kökten parçaya gitmektir. Üç adım var. **1. Anahtar sözcük.** Kökte parçada aranabilecek bir sözcük seç: özel ad, yıl, sayı, terim. Bunlar parçada çoğunlukla aynen geçer ve gözle taranınca (*scanning*) kolay bulunur. *Problem, effect, change* gibi genel sözcükler ise parçada başka bir sözcükle anılabilir; onları anlamıyla ara. **2. Kanıt cümlesi.** Anahtar sözcüğün geçtiği cümleyi ve bir öncesini oku. Cümle *this, they, such* ile açılıyorsa gösterdiği şeyi bulmak için bir cümle geri git. Cevap çoğunlukla bu iki üç cümlenin içindedir. **3. Eş anlamlı ifade.** Doğru şık kanıt cümlesini çoğu zaman başka sözcüklerle söyler; buna eş anlamlı ifade (*paraphrase*) denir. Şıkkı sözcüklerine göre değil anlamına göre eşle. Parçadaki sözcükleri olduğu gibi tekrarlayan şıkka özellikle dikkat et: tanıdık sözcükler güven verir, ama aralarından biri değişmiş olabilir. Eş anlamlı ifade birkaç yolla kurulur: eş anlamlı sözcük, fiilden isme geçiş, olumsuzla anlatım, etkenden edilgene geçiş, birkaç ismin tek bir genel isimle anılması.` },
        { tur: 'tablo', baslik: 'Aynı bilgi, başka sözcükler', sutunlar: ['Yol', 'Parçada', 'Doğru şıkta'], satirlar: [
          ['eş anlamlı sözcük', 'The results were ==surprising==.', 'The results were ==unexpected==.'],
          ['fiilden isme', 'Air pollution ==declined== after the ban.', 'The ban was followed by ==a decline in== air pollution.'],
          ['olumsuzla anlatım', '==Few== patients completed the course.', 'Most patients ==did not complete== the course.'],
          ['etkenden edilgene', 'Traders ==brought== the plant to Europe.', 'The plant ==was introduced== to Europe by traders.'],
          ['genel isim', '==Wolves and bears== have returned to the forest.', '==Large predators== have returned to the forest.'],
        ] },
        { tur: 'hatirlat', bolum: 'akademik', ders: 'c', metin: 'Fiilin isme dönüşmesi (*declined* → *a decline in*) eş anlamlı ifadenin en sık yollarından biridir:' },
        { tur: 'turkce', metin: `**Türkçede bunu kendiliğinden yaparsın.** 'Hastaların çoğu tedaviyi tamamlamadı' ile 'Tedaviyi tamamlayan hasta azdı' cümlelerinin aynı şeyi söylediğini Türkçede düşünmeden anlarsın. İngilizce şıkta da aynı dönüşümü ara. Yararlı bir alışkanlık: kanıt cümlesini önce kafanda kısa bir Türkçe özete çevir ('kurallar sıkılaşınca nehirler yavaş yavaş temizlendi'), sonra şıkları bu özetle karşılaştır. Böylece sözcükleri değil anlamı eşlersin.` },
        { tur: 'dikkat', yanlis: "Parça: *Few patients completed the course.* Eş anlamlı sanılan: *A few patients completed the course.*", dogru: "Parça: *Few patients completed the course.* Eş anlamlısı: *==Most patients did not complete== the course.*",
          not: `*Few* 'pek az' demektir ve olumsuz bir vurgu taşır: tamamlayan neredeyse yok. *A few* 'birkaç' der ve bu vurguyu kaldırır. Tek bir *a*, şıkkı eş anlamlı olmaktan çıkarır. Bu eşleme okuma sorusundaki eş anlamlı ifade içindir. Çeviri sorusunda ise kaynağa en yakın şık aranır: *few* orada 'pek az' diye karşılanır; 'çoğu … değil' diyen şık nicelikten sapmış sayılır.` },
        { tur: 'dene', soru: `In the 1950s, many rivers in Europe were so polluted that few fish could survive in them. Stricter controls on industrial waste, introduced from the 1970s onwards, gradually changed this. Today, salmon have returned to several rivers where they had not been seen for decades. According to the passage, ----.`,
          secenekler: [
            'salmon have now returned to every river in Europe',
            'the controls on industrial waste were introduced in the 1950s',
            'fish populations recovered quickly once the new controls were introduced',
            'tighter rules on factory waste helped make some rivers fit for salmon again',
            'industrial waste was the only source of river pollution in the 1950s',
          ], dogru: 3,
          aciklama: `Doğru şık iki cümleyi başka sözcüklerle birleştirir: *stricter controls on industrial waste* → *tighter rules on factory waste*, *several rivers* → *some rivers*, somonların dönmesi → *fit for salmon again*. *Every river* ve *the only source* parçanın sınırlı iddiasını büyütür. Denetimlerin 1950'lerde getirildiğini söyleyen şık parçadaki sözcükleri tekrarlıyor, ama tarihi kaydırmış: denetimler 1970'lerden sonra geldi. *Quickly* ise parçadaki *gradually* ile çelişir.` },
        { tur: 'dogruMu', cumle: "Parça: *The number of cyclists in the city doubled between 2015 and 2020.* Şık: *By 2020, twice as many people were cycling in the city as in 2015.* Bu şık parçanın eş anlamlı ifadesidir.", dogru: true,
          aciklama: `İki cümle aynı bilgiyi verir: *doubled* (iki katına çıktı) ile *twice as many … as* aynı oranı söyler; zaman aralığı da aynı (2015'ten 2020'ye). Şık parçadaki fiili (*doubled*) kullanmıyor, ama anlamı koruyor. Doğru şıklar çoğu zaman tam da böyle görünür.` },
      ],
    },
    {
      id: 'c', baslik: 'Dört çeldirici: metinde yok, kısmen doğru, ters, aşırı genelleme', sure: 6, konular: ['ayrıntı'],
      bloklar: [
        { tur: 'metin', metin: `Okumada yanlış şıklar rastgele yazılmaz; dört aileden gelir. **1. Metinde yok** (*not mentioned*): konuya uyan, belki gerçek hayatta doğru bile olan, ama parçada geçmeyen bilgi. Genel kültürün tuzağıdır: 'bu doğru, biliyorum' demek yetmez, bilgiyi parçada göstermen gerekir. **2. Kısmen doğru** (*partly true*): bir yarısı parçadan gelir, öbür yarısında bir ayrıntı kaymıştır: sayı, tarih, ad, olayın yeri ya da kimin neyi yaptığı. Bazen de parçaya bir bilgi eklenmiştir. **3. Ters** (*reversed*): ilişkiyi ya da yönü çevirir. Artış azalış olur, neden ile sonuç yer değiştirir, yazarın çürüttüğü görüş yazarınkiymiş gibi sunulur. **4. Aşırı genelleme** (*overgeneralisation*): parçanın sınırlı ya da temkinli iddiasını büyütür: *some* → *all*, *may* → *proves*, 'bu çalışmada' → 'her yerde'. Kısmen doğru ile aşırı genellemeyi şöyle ayır: kısmen doğru şıkta bir ayrıntı yanlıştır; aşırı genellemede ayrıntılar doğrudur, ama kapsam ya da kesinlik derecesi büyümüştür. Her şıkkı sırayla dört soruyla sına: Parçada var mı? Hepsi mi doğru, yarısı mı? Yön aynı mı? Kapsam ve derece aynı mı?` },
        { tur: 'tablo', baslik: 'Parça: In a study of 300 office workers, those who took short walking breaks reported less back pain than those who did not.', sutunlar: ['Şık', 'Tür', 'Neden'], satirlar: [
          ['Short walking breaks were linked to less back pain among the workers studied.', '**doğru**', 'Aynı bilgi, başka sözcükler; kapsam da aynı: incelenen çalışanlar.'],
          ['Walking breaks also improved the workers\' sleep.', 'metinde yok', 'Uyku parçada geçmiyor.'],
          ['Workers who took walking breaks reported less neck pain.', 'kısmen doğru', 'Bir ayrıntı kaymış: bel ağrısı boyun ağrısı olmuş.'],
          ['Workers who took walking breaks reported more back pain than the others.', 'ters', 'Yön çevrilmiş: daha az yerine daha çok.'],
          ['Walking breaks prevent back pain in all office workers.', 'aşırı genelleme', 'Tek bir çalışma ve bildirilen ağrı, kesin bir etkiye (*prevent*) ve bütün çalışanlara (*all*) yayılmış.'],
        ] },
        { tur: 'sinavda', metin: `Okuma sorularında yanlış şıkların yaklaşık %35'i metinde yok, %23'ü kısmen doğru, %21'i mantığı ters, %19'u aşırı genelleme yapan şıktır (iDil'in ÖSYM analizi; tam YDS kitapçıkları, YDT ön bilgisiyle; YÖKDİL'in okuma verisi yok). Çeldirici türünü bir etiketleme ajanı belirledi; oranlar yaklaşıktır. Ama sıra açık: okumada en sık tuzak, parçada hiç olmayan bilgidir. Her şıkta ilk sorun bu olsun: 'Bunu parçada gösterebilir miyim?'` },
        { tur: 'hatirlat', bolum: 'ceviri', ders: 'c', metin: 'Aynı aileler çeviride de var; tek sapma ilkesi ve kapsam kayması:' },
        { tur: 'hatirlat', bolum: 'cumle-tamamlama', ders: 'd', metin: 'Cümle tamamlamada çeldiricinin yüzleri (ilişkisi ters, kısmen doğru, anlamca yakın):' },
        { tur: 'turkce', metin: `**'Bazı' sessizce düşer.** Türkçe konuşmada 'Bazı araştırmalara göre kahve uykuyu bozabilir' cümlesi kolayca 'Kahve uykuyu bozuyor'a dönüşür: kapsam sözcüğü düşer, '-abilir' '-iyor' olur ve iddia büyür. Aşırı genelleme yapan şık tam olarak bunu yapar. Kanıt cümlesini Türkçe özetlerken 'bazı, birçok, -abilir, genellikle, bu çalışmada' gibi sözcükleri koru; şıkta bunlar kaybolmuşsa ya da 'bütün, her zaman, kanıtladı' olmuşsa şıkkın üstünü çiz.` },
        { tur: 'dikkat', yanlis: "Parça: *Sailors drew some of the early maps of the region.* Şık: *Sailors drew the early maps of the region.*", dogru: "Parça: *Sailors drew some of the early maps of the region.* Şık: *Sailors drew ==some of== the early maps of the region.*",
          not: `*The early maps* bölgenin ilk haritalarının hepsi demektir. Tek bir *some of*'un düşmesi kapsamı büyütür ve şıkkı aşırı genellemeye çevirir.` },
        { tur: 'dene', soru: `Before printing with movable type spread across Europe in the second half of the fifteenth century, books were copied by hand, which made them expensive. Most were owned by monasteries, universities and wealthy families. Printing did not make books cheap overnight, but over the following century prices fell considerably and far more books were in circulation. According to the passage, which of the following is true?`,
          secenekler: [
            'Printing made books cheap as soon as it was introduced.',
            'Before printing, only monasteries owned books.',
            'Hand-copied books were often full of mistakes.',
            'Universities began printing their own books in the fifteenth century.',
            'In the century after printing spread, books became much more widely available.',
          ], dogru: 4,
          aciklama: `*Far more books were in circulation* (dolaşımda çok daha fazla kitap vardı) ile *became much more widely available* aynı bilgidir. Kitapların hemen ucuzlaması parçanın tersidir: *did not make books cheap overnight*. *Only monasteries* aşırı genellemedir; parça üniversiteleri ve varlıklı aileleri de sayıyor. Elle kopyalanan kitapların hatalı olması gerçekte doğru olabilir, ama parçada yok. Üniversitelerin kendi kitaplarını basması da parçada geçmiyor.` },
        { tur: 'dene', soru: `Parça: *Several surveys suggest that teenagers who spend many hours a day on social media are more likely to report poor sleep.* Hangi şık bir **aşırı genelleme**dir?`,
          secenekler: [
            'Social media ruins the sleep of every teenager.',
            'Teenagers who spend hours on social media report better sleep than others.',
            'Teenagers who use social media a lot also eat less healthily.',
            'Some surveys have linked heavy social media use to poor sleep among teenagers.',
          ], dogru: 0,
          aciklama: `Parça temkinli: birkaç anket (*several surveys*), bir eğilim (*more likely*) ve gençlerin kendi bildirimi (*report*). Şık bunu kesin bir nedene (*ruins*) ve bütün gençlere (*every teenager*) yayıyor: aşırı genelleme. Daha iyi uyku bildirmeleri yönü çevirir (ters). Beslenme parçada yok. Anketlerin sosyal medya ile kötü uykuyu ilişkilendirdiğini söyleyen şık ise parçanın doğru bir eş anlamlısıdır, çeldirici değil.` },
      ],
    },
    {
      id: 'd', baslik: 'Çıkarım ve yazarın tutumu: satır arasını okumak', sure: 6, konular: ['çıkarım', 'yazarın tutumu'],
      bloklar: [
        { tur: 'metin', metin: `**Çıkarım** parçada yazmayan ama yazanlardan zorunlu olarak çıkan bilgidir. Ölçüt sıkıdır: şıkkın 'doğru olabilir' olması yetmez, parçaya göre doğru olmak zorundadır. Şık temkinliyse (*may*), o temkinli iddianın kendisi parçadan çıkmalıdır. Çıkarım iki yoldan gelir. Ya iki bilgi birleşir: 'Vadiyi 1990'lara kadar her bahar su basıyordu; baraj bittiğinden beri yalnız iki kez bastı' bilgisinden 'sel artık çok daha seyrek' sonucu çıkar. Ya da bir sözcük arka planı söyler: *no longer* 'eskiden öyleydi', *still* 'hâlâ sürüyor', *even* 'beklenmedik', *at first* 'sonra değişti' der. Tahmin ise parçanın ötesine geçer: genel kültüre, kişisel görüşe ya da geleceğe dair bir iddiaya dayanır. Doğru çıkarım şıkkı çoğu zaman parçanın temkinini de korur; parça *may* diyorsa doğru çıkarım da çoğunlukla *may* der.` },
        { tur: 'metin', metin: `**Yazarın tutumu** yazarın konuya nasıl baktığıdır: olumlu, olumsuz, temkinli ya da tarafsız. Tutumu üç tür sözcük taşır. **Değerlendirme sözcükleri** (*promising, flawed, convincing*) yazarın yargısını doğrudan söyler. **Temkin sözcükleri** (*may, appears to, it remains unclear*) yazarın emin olmadığını söyler. **Bildirme fiilleri** başkasının görüşüne mesafeyi söyler: *show, demonstrate* bulguyu kabul eder; *claim, allege* araya mesafe koyar. Tutum sorusunda yazarın kendi cümlelerini başkasının görüşünü aktaran cümlelerden ayır: *Some scientists claim that …* yazarın değil, o bilim insanlarının görüşüdür. Akademik yazar çoğunlukla uçta durmaz; 'umut verici ama kanıtlanmamış' gibi dengeli bir yargı en sık görülendir. Coşkulu (*enthusiastic*) ya da düşmanca (*hostile*) gibi uç bir şıkkı seçmeden önce parçada onu taşıyan güçlü sözcükleri gör.` },
        { tur: 'hatirlat', bolum: 'akademik', ders: 'a', metin: 'Temkinli dil (*may, appear to, tend to, it is likely that*) ve iddianın derecesi:' },
        { tur: 'tablo', baslik: 'Tutumu taşıyan sözcükler', sutunlar: ['Sözcükler', 'Türkçesi', 'Ne söyler'], satirlar: [
          ['*promising, convincing, valuable, remarkable*', 'umut verici, ikna edici, değerli, dikkate değer', 'olumlu yargı'],
          ['*flawed, misleading, questionable, overstated*', 'kusurlu, yanıltıcı, şüpheli, abartılmış', 'olumsuz yargı'],
          ['*may, appears to, it remains unclear, further research is needed*', '-abilir, … gibi görünüyor, belirsizliğini koruyor, daha fazla araştırma gerekiyor', 'temkin'],
          ['*surprisingly, unfortunately, admittedly*', 'şaşırtıcı biçimde, ne yazık ki, kabul etmek gerekir ki', 'yazarın yorumu'],
          ['*show, demonstrate* / *claim, allege*', 'gösterdi, ortaya koydu / iddia ediyor, ileri sürüyor', 'onay / mesafe'],
        ] },
        { tur: 'turkce', metin: `**'İddia ediyor' ile 'gösterdi'.** Türkçede de 'Şirket ürünün güvenli olduğunu iddia ediyor' cümlesi yazarın mesafesini, 'Araştırma ürünün güvenli olduğunu gösterdi' cümlesi onayını sezdirir. İngilizcede aynı ayrımı bildirme fiili yapar: *claims* mesafe, *showed* onay. Çeviri ve okuma sorularında *claim*'i 'gösterdi' diye, *show*'u 'iddia etti' diye okumak tutumu tersine çevirir.` },
        { tur: 'dikkat', yanlis: "Parça: *The town no longer has a cinema.* Çıkarım: *The town has never had a cinema.*", dogru: "Parça: *The town no longer has a cinema.* Çıkarım: *The town ==used to have== a cinema.*",
          not: `*No longer* 'artık … değil' demektir: eskiden vardı, şimdi yok. Bu sonuç zorunludur. 'Hiç olmadı' ise parçayla çelişir.` },
        { tur: 'dene', soru: `Until the 1990s, the river flooded the valley almost every spring. Since the dam was completed in 1994, the valley has flooded only twice, both times after unusually heavy rain. It can be inferred from the passage that ----.`,
          secenekler: [
            'the dam was built mainly to produce electricity',
            'the valley will never flood again',
            'floods in the valley have become much less frequent since the dam was built, though they have not stopped entirely',
            'heavy rain was rare in the valley before 1994',
            'the floods before 1994 were caused by the dam',
          ], dogru: 2,
          aciklama: `İki bilgi birleşiyor: 1994'ten önce neredeyse her bahar sel; sonra yalnız iki kez. Demek ki sel çok seyrekleşti ama tamamen bitmedi; bu sonuç zorunludur. 'Bir daha hiç su basmayacak' bir tahmindir ve parçadaki iki selle çelişir. Barajın elektrik için yapıldığı parçada yok. 1994'ten önce şiddetli yağmurun seyrek olduğu parçadan çıkmaz; parça yalnız iki selin şiddetli yağmurdan sonra olduğunu söylüyor. Baraj 1994'te bitti; ondan önceki selleri o yapmış olamaz.` },
        { tur: 'dene', soru: `Some small studies suggest that a few minutes of a special breathing exercise each day may lower blood pressure. It would be tempting to conclude that the exercise could replace medication. However, these studies involved few people and lasted only a few weeks, so such a conclusion would go far beyond the evidence. The author's attitude towards the idea that the exercise could replace medication is ----.`,
          secenekler: ['enthusiastic', 'sceptical', 'neutral', 'indifferent', 'fully supportive'], dogru: 1,
          aciklama: `Yazar fikri anıyor (*it would be tempting*), sonra *however* ile fikrin önündeki engelleri sayıyor: az kişi, birkaç hafta, 'kanıtın çok ötesine geçer'. Bu, fikre kuşkuyla bakmaktır: *sceptical*. *Enthusiastic* ve *fully supportive* bu itirazla çelişir. *Neutral* (tarafsız) ve *indifferent* (kayıtsız) olamaz, çünkü yazar açıkça bir yargı veriyor: sonuç 'kanıtın çok ötesine geçer'.` },
      ],
    },
    {
      id: 'e', baslik: 'Diyalog: boşluktan sonraki satır', sure: 7, konular: ['soru-cevap uyumu', 'bağlam'],
      bloklar: [
        { tur: 'metin', metin: `Diyalog tamamlama YDS'de 5 sorudur (63–67); YÖKDİL'de bu soru türü yok. İki kişinin kısa bir konuşmasında bir satır boştur; onu beş şıktan biriyle doldurursun. Şıkların çoğu tek başına doğal ve konuya uygundur; doğruyu ayıran, boşluğun iki komşusuna, özellikle **sonraki satıra** bağlanmasıdır. Sonraki satırın ilk sözcükleri boşluğun türünü söyler. *Yes, No, Not really* ile başlıyorsa boşluk çoğunlukla bir evet-hayır sorusudur; *About two hours* diyorsa bir süre sorusu (*How long*); *That's kind of you* diyorsa bir teklif; *Good idea* diyorsa bir öneri; *Oh no!* diyorsa kötü bir haber. Sonra satırın devamına bak: cevap yalnız ilk sözcüğe değil, gerekçesine de uymalı. Gönderimleri eşle: sonraki satırdaki *it, them, there, then* boşluktaki bir şeyi gösterir; tekil ve çoğul uyumu bile şık eler. Boşluk konuşmanın son satırıysa kilit önceki satırdır: bir soruya cevap, bir öneriye kabul ya da ret, bir habere tepki ara. Konuşmanın işlevi (*function*) de önemlidir: soru, öneri, teklif, rica ve itirazın her birinin kendine özgü kalıpları vardır. Kibar sorularda dolaylı soru da görülür: *Do you know where the seminar room is?*` },
        { tur: 'tablo', baslik: 'Konuşmanın işlevleri', sutunlar: ['İşlev', 'Boşlukta', 'Sonraki satırda'], satirlar: [
          ['bilgi isteme', '*How long …? When …? Why …?*', 'süre, zaman, neden'],
          ['evet-hayır sorusu', '*Do you …? Have you …? Is it …?*', '*Yes, … / No, … / Not really.*'],
          ['öneri', "*Why don't we …? How about …? Shall we …?*", "*Good idea. / I'd rather not, …*"],
          ['teklif', '*I could … if you like. / Would you like me to …?*', "*That would be great. / Thanks, but …*"],
          ['rica, izin', '*Could you …? Would you mind if I …?*', '*Of course. / Not at all, go ahead.*'],
          ['şaşkınlık, itiraz', '*Really? / But I thought …*', 'açıklama ya da düzeltme'],
          ['kötü haber', "*I didn't get the grant.*", "*Oh no! / I'm sorry to hear that.*"],
        ] },
        { tur: 'hatirlat', bolum: 'isim-cumlecikleri', ders: 'e', metin: 'Dolaylı soruda soru sözcüğünden sonra düz cümle sırası gelir (*where the room is*):' },
        { tur: 'turkce', metin: `**'Sakıncası var mı?' sorusuna 'yok' izindir.** Türkçede 'Pencereyi açmamın sakıncası var mı?' sorusuna 'Yok, aç' deriz. İngilizcede de *Would you mind if I opened the window?* sorusuna *Not at all* ya da *No, go ahead* demek 'tabii, aç' demektir: olumsuz cevap izin verir. Olumsuz soruda ise iki dil ayrılır. Türkçede cevap soruya göre de verilebilir: 'Gelmedin mi?' sorusuna 'Hayır, gelmedim' de 'Evet, gelmedim' de denir; ikincisinde 'evet' soruyu onaylar. İngilizcede cevap gerçeğe göre verilir: *Didn't you come?* – *No, I didn't* (gelmedim) ya da *Yes, I did* (geldim); *Yes, I didn't* denmez. Diyalogda *Yes* ya da *No*'yu Türkçe mantıkla okursan anlamı tersine çevirirsin.` },
        { tur: 'dikkat', yanlis: "**A:** Would you mind if I borrowed your notes? **B:** Yes, here you are.", dogru: "**A:** Would you mind if I borrowed your notes? **B:** ==Not at all==, here you are.",
          not: `*Would you mind …?* 'sakıncası var mı?' diye sorar; izin veren cevap olumsuzdur: *Not at all, Of course not, No, go ahead.* Gündelik konuşmada bu kural bazen gevşer ama *Yes* ile başlayıp izin vermek çelişkilidir; sınavda standart kullanım esastır.` },
        { tur: 'dikkat', yanlis: "**A:** When does the exhibition open? **B:** Yes, next Monday.", dogru: "**A:** When does the exhibition open? **B:** ==Next Monday==, I think.",
          not: `Bilgi soran *when, where, how long, why* sorularına *Yes* ya da *No* ile cevap verilmez. Sonraki satır *Yes* ya da *No* ile başlıyorsa bu soruları ele. Soru biçimindeki öneri ise istisnadır: *Why don't we take a break?* – *Yes, let's.*` },
        { tur: 'sinavda', metin: `Diyalog sorularında yanlış şıkların yaklaşık %88'i kısmen doğru, %12'si mantığı ters şıktır (iDil'in ÖSYM analizi; YDS, YDT ön bilgisiyle). Kısmen doğru şık konuya uyar; seni yakalayan, bir komşu satıra bağlanıp öbürüne bağlanmamasıdır. Analizde diyalog sorularının yaklaşık üçte ikisi konuşmanın akışını, dörtte biri bağlamı ölçüyor; gönderimin payı %7.` },
        { tur: 'dene', soru: `**Selin:** Have you finished the report for Professor Aydın yet? **Baran:** Almost. I just need to add the graphs. **Selin:** ---- **Baran:** That would be great. I've never been good with spreadsheets. **Selin:** No problem. Send me the data and I'll do them tonight.`,
          secenekler: [
            'When do you have to hand it in?',
            'Did the professor like your first draft?',
            "Why didn't you add them earlier?",
            'I could help you with those if you like.',
            "I've already finished mine, actually.",
          ], dogru: 3,
          aciklama: `Kilit sonraki satır: *That would be great* bir teklife verilen cevaptır ve gerekçesi (tablolarla aram hiç iyi olmadı) yardımın grafiklerle ilgili olduğunu söyler. Selin'in son satırı da bunu doğrular: *I'll do them tonight*; *them* grafikleri gösterir. Teslim tarihi sorusu bir zaman bekler; ilk taslağın beğenilip beğenilmediği bir evet-hayır cevabı bekler; 'neden daha önce eklemedin' bir açıklama bekler. Selin'in kendi raporunu bitirmesi bir haberdir; *That would be great* onu izlemez.` },
        { tur: 'dene', soru: `**Deniz:** You look exhausted. Is everything all right? **Ali:** I was up until three, reading for tomorrow's seminar. **Deniz:** ---- **Ali:** Not really. Most of it was about statistics, and I still don't understand half of it. **Deniz:** Maybe we could go through it together after lunch.`,
          secenekler: [
            'Was it at least interesting?',
            'How many pages did you have to read?',
            "Why didn't you start earlier?",
            'Is the seminar compulsory?',
            'When does the seminar start?',
          ], dogru: 0,
          aciklama: `*Not really* bir evet-hayır sorusuna cevaptır; devamı (çoğu istatistikti ve yarısını anlamadım) okunan şeyin nasıl bulunduğunu anlatır. 'En azından ilginç miydi?' sorusu ikisine de uyar. Sayfa sayısı, neden erken başlamadığı ve seminerin saati bilgi sorularıdır; *Not really* ile cevaplanmaz. Seminerin zorunlu olup olmadığı bir evet-hayır sorusudur, ama cevabın gerekçesi (istatistik, anlamadığım yerler) zorunluluğa değil okunan metne dairdir.` },
        { tur: 'hataBul', parcalar: ['Excuse me,', 'do you know', 'where is the main library?', "I think I'm lost."], yanlis: 2,
          duzeltme: "Excuse me, do you know ==where the main library is==? I think I'm lost.",
          aciklama: `*Do you know* ile başlayan kibar soruda asıl soru bir dolaylı sorudur: soru sözcüğünden sonra düz cümle sırası gelir, özne + fiil: *where the main library is*. *Where is the main library?* tek başına doğrudur; hata, onu *do you know*'nun içine koymaktır. Öteki parçalar doğru: *Excuse me* dikkat çeker, *I think I'm lost* nedenini söyler.` },
      ],
    },
    {
      id: 'f', baslik: 'Sınav yolu: bir parça, beş soru', sure: 9, konular: ['ayrıntı', 'çıkarım', 'ana fikir', 'yazarın tutumu'],
      bloklar: [
        { tur: 'metin', metin: `Bütün bölümü bir parçada birleştirelim. **1. Önce kökler.** Parçaya geçmeden soruların köklerini oku; her birinin türünü ve anahtar sözcüğünü işaretle. Bütüne dair soruyu (ana fikir, başlık, amaç, tutum) sona bırak. **2. Parçayı bir kez baştan sona oku.** Her cümlenin işini kafanda kısaca adlandır: sorun, bulgu, açıklama, itiraz, sonuç. *However, but, yet* gibi dönüş sözcüklerinden sonra yazarın asıl vurgusu çoğu zaman gelir. **3. Her soru için kanıt cümlesi.** Anahtar sözcüğü bul, o cümleyi ve bir öncesini oku, şıkları dört soruyla ele: Parçada var mı? Hepsi mi doğru? Yön aynı mı? Kapsam ve derece aynı mı? **4. Bütüne dair soru en son.** Parçanın başını da sonunu da kapsayan şıkkı seç; tek bir ayrıntıyı anlatan (çok dar) ya da parçanın konusunu aşan (çok geniş) şık elenir.` },
        { tur: 'hatirlat', bolum: 'gonderim', ders: 'g', metin: 'Kanıt cümlesi çoğu zaman bir *this* ya da *they* ile öncekine bağlanır; gönderim zincirini izlemek:' },
        { tur: 'hatirlat', bolum: 'paragraf', ders: 'a', metin: 'Paragraf tamamlama ve akışı bozan cümlede aynı beceri: konu, odak ve geçiş sözcükleri:' },
        { tur: 'cozumlu', soru: `**Parça:** Cities are noisy places, and most urban noise is low in pitch: traffic, engines and machinery produce a constant rumble. For songbirds, which use song to defend territories and attract mates, this can be a problem, because low notes are easily masked by such noise. In the early 2000s, researchers in the Netherlands reported that great tits living in noisy parts of cities tended to sing at a higher pitch than those in quieter areas, and similar patterns have since been described in several other species. One explanation is that birds shift their songs upwards so that they can still be heard. This interpretation is attractive, but it may be too early to treat it as settled. Higher notes tend not to carry as far as lower ones, and some experiments suggest that females of certain species respond more strongly to low songs. If so, a song that is easier to hear may also be less attractive. Moreover, it is often unclear whether individual birds change their songs during their lifetime or whether urban populations have gradually changed over generations. Answering such questions will require studies that follow the same birds over many years. **Soru:** According to the passage, city noise can be a problem for songbirds because ----.`,
          secenekler: [
            'it makes many birds leave cities for quieter areas',
            'it is mostly low-pitched and can cover the low notes in their songs',
            'it forces every bird species to sing at a higher pitch',
            'it prevents females from hearing high notes',
            'it is loudest at night, when most birds sing',
          ], dogru: 1,
          adimlar: [
            `**Kök.** *According to the passage* bir ayrıntı sorusu; *because* bir neden istiyor. Anahtar sözcükler *problem* ve *noise*: ikinci cümle *this can be a problem, because low notes are easily masked by such noise* diyor. *This* bir cümle geri gönderiyor: kentsel gürültünün çoğu pestir.`,
            `**Eş anlamlı ifade.** *Low in pitch* → *low-pitched*; *masked* (örtülmek) → *cover*. Kanıt cümlesiyle önceki cümleyi birlikte söyleyen şık bu: gürültü çoğunlukla pes ve ötüşlerdeki pes notaları örtebiliyor.`,
            `**Eleme.** Kuşların kentten göçmesi ve gürültünün gece en yüksek olması parçada yok. *Every bird species* aşırı genellemedir: parça büyük baştankara ve 'birkaç başka tür'den söz ediyor. Dişilerin yüksek notaları duyamaması parçada geçmiyor: parça gürültünün pes notaları örttüğünü söylüyor, dişilerin işitmesinden hiç söz etmiyor.`,
            `**Cevap.** Gürültü çoğunlukla pestir ve ötüşlerin pes notalarını örtebilir.`,
          ] },
        { tur: 'metin', metin: 'Şimdi sıra sende. Aşağıdaki dört soru da aynı parçaya bağlı; her soruda parçanın tamamı var. Dört adımı kendin uygula; bütüne dair soru en sonda. Açıklama cevaptan sonra açılır.' },
        { tur: 'dene', soru: `**Parça:** Cities are noisy places, and most urban noise is low in pitch: traffic, engines and machinery produce a constant rumble. For songbirds, which use song to defend territories and attract mates, this can be a problem, because low notes are easily masked by such noise. In the early 2000s, researchers in the Netherlands reported that great tits living in noisy parts of cities tended to sing at a higher pitch than those in quieter areas, and similar patterns have since been described in several other species. One explanation is that birds shift their songs upwards so that they can still be heard. This interpretation is attractive, but it may be too early to treat it as settled. Higher notes tend not to carry as far as lower ones, and some experiments suggest that females of certain species respond more strongly to low songs. If so, a song that is easier to hear may also be less attractive. Moreover, it is often unclear whether individual birds change their songs during their lifetime or whether urban populations have gradually changed over generations. Answering such questions will require studies that follow the same birds over many years. **Soru:** It can be inferred from the passage that a great tit singing higher notes on a busy street ----.`,
          secenekler: [
            'may be heard more easily, but its song might be less attractive to some females',
            'will attract more mates than a great tit singing in a quiet park',
            'must have changed its song during its own lifetime',
            'sings more often than great tits in quieter areas',
            'is trying to avoid being heard by predators',
          ], dogru: 0,
          aciklama: `Çıkarım iki bilgiyi birleştiriyor: yüksek ötüş gürültüde daha kolay duyulabilir (*so that they can still be heard*), ama bazı türlerde dişiler pes ötüşe daha güçlü tepki veriyorsa bu ötüş daha az çekici olabilir (*If so, … may also be less attractive*). Doğru şık parçanın temkinini de koruyor: *may, might, some*. Daha çok eş bulacağını söyleyen şık parçanın sezdirdiğinin tersidir. *Must have changed* parçanın açıkça belirsiz bıraktığı bir şeyi kesin yapar. Ötme sıklığı ve avcılardan saklanma parçada yok; üstelik parça ötüşün duyulmak için yükseldiğini öne sürüyor, duyulmamak için değil.` },
        { tur: 'dene', soru: `**Parça:** Cities are noisy places, and most urban noise is low in pitch: traffic, engines and machinery produce a constant rumble. For songbirds, which use song to defend territories and attract mates, this can be a problem, because low notes are easily masked by such noise. In the early 2000s, researchers in the Netherlands reported that great tits living in noisy parts of cities tended to sing at a higher pitch than those in quieter areas, and similar patterns have since been described in several other species. One explanation is that birds shift their songs upwards so that they can still be heard. This interpretation is attractive, but it may be too early to treat it as settled. Higher notes tend not to carry as far as lower ones, and some experiments suggest that females of certain species respond more strongly to low songs. If so, a song that is easier to hear may also be less attractive. Moreover, it is often unclear whether individual birds change their songs during their lifetime or whether urban populations have gradually changed over generations. Answering such questions will require studies that follow the same birds over many years. **Soru:** The author's attitude towards the explanation that birds shift their songs upwards in order to be heard can best be described as ----.`,
          secenekler: ['enthusiastic', 'dismissive', 'cautious', 'indifferent', 'hostile'], dogru: 2,
          aciklama: `Kanıt cümlesi: *This interpretation is attractive, but it may be too early to treat it as settled.* Yazar açıklamayı çekici buluyor (*attractive*), ama kesinleşmiş saymak için erken diyor (*may be too early*) ve ardından iki sorun sayıyor. Bu temkinli bir tutumdur: *cautious*. *Enthusiastic* sorunları görmezden gelir. *Dismissive* (küçümseyen) ve *hostile* (düşmanca) *attractive* ile çelişir; yazar açıklamayı reddetmiyor. *Indifferent* (kayıtsız) olamaz, çünkü yazar açıklamayı ayrıntılı tartıyor.` },
        { tur: 'dene', soru: `**Parça:** Cities are noisy places, and most urban noise is low in pitch: traffic, engines and machinery produce a constant rumble. For songbirds, which use song to defend territories and attract mates, this can be a problem, because low notes are easily masked by such noise. In the early 2000s, researchers in the Netherlands reported that great tits living in noisy parts of cities tended to sing at a higher pitch than those in quieter areas, and similar patterns have since been described in several other species. One explanation is that birds shift their songs upwards so that they can still be heard. This interpretation is attractive, but it may be too early to treat it as settled. Higher notes tend not to carry as far as lower ones, and some experiments suggest that females of certain species respond more strongly to low songs. If so, a song that is easier to hear may also be less attractive. Moreover, it is often unclear whether individual birds change their songs during their lifetime or whether urban populations have gradually changed over generations. Answering such questions will require studies that follow the same birds over many years. **Soru:** The phrase "such questions" in the last sentence refers to questions about ----.`,
          secenekler: [
            'why most urban noise is low in pitch',
            'which species were studied in the Netherlands',
            'how traffic noise affects people living in cities',
            "whether the change in song happens within a bird's life or over generations",
            'why higher notes do not carry as far as lower ones',
          ], dogru: 3,
          aciklama: `*Such questions* bir önceki cümleye döner: *it is often unclear whether … or whether …*. Belirsiz kalan soru, ötüşteki değişimin tek bir kuşun ömrü içinde mi yoksa kuşaklar boyunca mı olduğudur. Aynı kuşları uzun yıllar izleyen çalışmalar da tam bu soruyu cevaplayabilir. Gürültünün pes olması ve yüksek notaların daha kısa mesafeye taşınması parçada bilgi olarak verilmiş, soru olarak değil. Hollanda'da hangi türlerin incelendiği sorun edilmiyor; insanlara etkisi ise parçada hiç yok.` },
        { tur: 'dene', soru: `**Parça:** Cities are noisy places, and most urban noise is low in pitch: traffic, engines and machinery produce a constant rumble. For songbirds, which use song to defend territories and attract mates, this can be a problem, because low notes are easily masked by such noise. In the early 2000s, researchers in the Netherlands reported that great tits living in noisy parts of cities tended to sing at a higher pitch than those in quieter areas, and similar patterns have since been described in several other species. One explanation is that birds shift their songs upwards so that they can still be heard. This interpretation is attractive, but it may be too early to treat it as settled. Higher notes tend not to carry as far as lower ones, and some experiments suggest that females of certain species respond more strongly to low songs. If so, a song that is easier to hear may also be less attractive. Moreover, it is often unclear whether individual birds change their songs during their lifetime or whether urban populations have gradually changed over generations. Answering such questions will require studies that follow the same birds over many years. **Soru:** The passage is mainly concerned with ----.`,
          secenekler: [
            'ways of reducing traffic noise in large cities',
            'why great tits are more common in the Netherlands than elsewhere',
            'the preference of some female songbirds for low songs',
            'the proof that city birds raise the pitch of their songs in order to be heard',
            'a change observed in the songs of birds in noisy cities and the questions it still raises',
          ], dogru: 4,
          aciklama: `Parça bir sorunla açılıyor (gürültü pes notaları örter), bir bulguyu veriyor (kentteki kuşlar daha yüksek ötüyor), bir açıklamayı tartıyor ve açık sorularla bitiyor. Başını da sonunu da kapsayan şık: gözlenen değişim ve hâlâ doğurduğu sorular. Gürültüyü azaltmanın yolları ve büyük baştankaranın Hollanda'da yaygınlığı parçada yok. Dişilerin pes ötüşe tepkisi parçada tek bir cümledir: çok dar. *The proof* ise yazarın 'kesinleşmiş saymak için erken' dediği açıklamayı kanıtlanmış gibi sunar: aşırı genelleme.` },
        { tur: 'metinde', baslik: 'Yaz saati',
          en: "For more than a century, many countries have moved their clocks forward in spring to make better use of daylight. Supporters ==claim== that the change saves energy. ==However==, studies of electricity use ==have produced mixed results==: some found small savings, ==while== others found none or even a slight increase. Sleep researchers are ==more critical==. They point out that losing an hour of sleep ==appears to== be followed by a short rise in road accidents and heart attacks. ==Admittedly==, these effects are small and last only a few days. ==Even so==, several scientific societies now argue that permanent standard time would be ==the healthier option==.",
          tr: "Yüz yılı aşkın bir süredir birçok ülke, gün ışığından daha iyi yararlanmak için ilkbaharda saatlerini ileri alıyor. Destekleyenler bu değişikliğin enerji tasarrufu sağladığını ileri sürüyor. Ancak elektrik kullanımına dair çalışmalar karışık sonuçlar verdi: bazıları küçük bir tasarruf buldu, bazıları ise hiç tasarruf bulmadı, hatta tüketimde küçük bir artış gördü. Uyku araştırmacıları daha eleştirel. Belirttiklerine göre, bir saatlik uyku kaybının ardından trafik kazalarında ve kalp krizlerinde kısa süreli bir artış oluyor gibi görünüyor. Kabul etmek gerekir ki bu etkiler küçük ve yalnızca birkaç gün sürüyor. Yine de birkaç bilim kuruluşu bugün kalıcı standart saatin daha sağlıklı seçenek olacağını savunuyor.",
          not: "Okuma sorularının dayandığı sözcükler: mesafe koyan bildirme fiili (*claim*), dönüş sözcükleri (*however, even so*), karşılaştırma (*while*), değerlendirme (*mixed results, more critical, the healthier option*), temkin (*appears to*) ve yorum zarfı (*admittedly*). Kendine sor: yazar destekçilerin iddiasına nasıl bakıyor? Parçanın ana fikri ne? 'Yaz saati hiçbir yerde enerji tasarrufu sağlamadı' şıkkı hangi tür çeldirici olurdu?" },
      ],
    },
  ],

  ozet: {
    maddeler: [
      'Önce kök: sorunun türüne ad koy. Ayrıntı ve gönderim tek cümlede, çıkarım iki bilginin birleşiminde, ana fikir ve amaç bütün parçada aranır. Bütüne dair soruyu en sona bırak.',
      'Kökteki anahtar sözcüğü (ad, yıl, sayı, terim) parçada bul; o cümleyi ve bir öncesini oku. Doğru şık kanıtı çoğu zaman başka sözcüklerle söyler (*paraphrase*): sözcük değil anlam eşlenir.',
      'Dört çeldirici: metinde yok; kısmen doğru (bir ayrıntı kaymış); ters (yön ya da ilişki çevrilmiş); aşırı genelleme (*some* → *all*, *may* → *proves*). Her şıkta ilk soru: bunu parçada gösterebilir miyim?',
      "Çıkarım zorunlu olmalı; şıkkın 'doğru olabilir' olması yetmez. *No longer, still, even, at first* gibi sözcükler arka planı söyler. Doğru çıkarım çoğu zaman parçanın temkinini korur.",
      'Tutumu değerlendirme sözcükleri, temkin ve bildirme fiilleri taşır (*show* onay, *claim* mesafe). Akademik yazar çoğunlukla dengelidir; uç bir tutum şıkkı için parçada güçlü sözcükler ara.',
      `Diyalogda kilit sonraki satırdır: ilk sözcükleri boşluğun türünü (evet-hayır sorusu, bilgi sorusu, teklif, öneri, haber), devamı içeriğini söyler. Boşluk son satırsa önceki satıra bak. Diyalog YDS'de var, YÖKDİL'de yok.`,
    ],
    tablo: { sutunlar: ['Soru türü', 'Kökün dili', 'Kanıt nerede', 'Sık tuzak'], satirlar: [
      ['ayrıntı', '*According to the passage*', 'anahtar sözcüğün cümlesi', 'kısmen doğru, metinde yok'],
      ['çıkarım', '*It can be inferred, implies, suggests*', 'iki bilgi ya da bir sözcüğün arka planı', 'tahmin, aşırı genelleme'],
      ['ana fikir, başlık', '*mainly concerned with, best title*', 'bütün parça', 'çok dar ya da çok geniş şık'],
      ['amaç', '*primary purpose, in order to*', "yazarın fiili; ayrıntının çevresi", 'parçanın yapmadığı bir iş'],
      ['tutum', "*the author's attitude*", 'değerlendirme ve temkin sözcükleri', 'uç tutum'],
      ['gönderim', '*refers to*', 'sözcüğün cümlesi ve bir öncesi', 'en yakın isim'],
      ['diyalog', '—', 'boşluktan sonraki satır', 'önceki satıra uyup sonrakine bağlanmayan şık'],
    ] },
  },
};
