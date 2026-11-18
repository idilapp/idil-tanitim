// Ders Kitabı · zamanlar-1: Zamanlar I: basit ve sürekli zamanlar (taslak, 14 Kasım 2026).
// Biçim ve ton: ../README.md ve örnek bölüm 11-baglayicilar.js. Metin ve örnek cümlelerin hepsi özgündür; hiçbir kitaptan ya da
// ÖSYM sorusundan alınmadı. Sınav verileri iDil'in ÖSYM analizinden (../../analiz/agirlik.json, dagilim.md, tahmin.md) ve
// db-zaman hap kartının veri alanından. Perfect zamanlar ve zaman uyumu zamanlar-2'nin konusu; burada yalnız hatirlat bloğuyla anılır.
// İşaretler: **kalın**, ==fosforlu kalem (hedef yapı)==, *İngilizce sözcük*; alıştırmada ---- boşluk.
// Öğretmen doğrulasın: c dersi, durum fiillerinin gündelik konuşmada sürekli biçim alabilmesi (I'm loving) nasıl anılmalı;
// d dersi, "While the lights went out" yanlış sayıldı (while + ani olay) ve *collected* çeldiricisi "önce sarsıntı, sonra toplama"
// okumasıyla elendi; d dersi Türkçede kutusu, -mış'ın bugüne bağlanan kullanımının present perfect'le karşılanması.

import ZAMAN_HARITASI from '../zaman-haritasi.js';

export default {
  id: 'zamanlar-1',
  no: 1,
  title: 'Zamanlar I: basit ve sürekli zamanlar',
  en: 'Simple and continuous tenses',
  seviye: 'B1–C1',
  sure: 30,
  durum: 'taslak',
  sinavda: "YDS'de 7–9., YÖKDİL'de 7–8. sorular fiil yapısı sorusudur ve bunların yarıya yakını (%45) zaman ve zaman uyumunu sorar; sonraki sınav için tahmin %43. Zaman, cümle tamamlamada, boşluklu metinde ve çeviride de karşına çıkar. Bu bölüm temel zamanları anlatır; perfect zamanlar ve zaman uyumu ayrı bölümde. Kaynak: iDil'in ÖSYM analizi.",
  hedefler: [
    'Fiile iki soru sormak: olay ne zaman oluyor, bitmiş bir bütün mü yoksa süren bir iş mi?',
    'Geniş zamanı alışkanlık, genel doğru ve akademik metin için; şimdiki zamanı o anda ve bu günlerde süren iş için kullanmak.',
    'Durum fiillerini (*know, believe, own, contain*) sürekli biçimde kullanmamak.',
    'Geçmişte kesilen işi *when* ve *while* ile kurmak; geleceği *will*, *be going to* ve şimdiki zamanla anlatmak.',
    'Sınavda zaman sözcüğünü bulup fiili ona göre seçmek.',
  ],
  konular: ['zaman'],
  hap: ['db-zaman'],

  // Kendini yokla: her soru bir derse bağlı; yanlış yapılan soru o dersi önerir.
  yokla: [
    { ders: 'b', soru: 'The human heart ---- about 100,000 times a day.', secenekler: ['is beating', 'beat', 'beats'], dogru: 2,
      aciklama: "Genel bir doğru: kalp bunu her gün yapar. Genel doğru geniş zamanla anlatılır; özne tekil olduğu için fiil -s alır: *beats*. *Is beating* yalnız o anda süren işi anlatır; *beat* ya geçmiş zamandır ya da -s'siz kalmış bir fiil." },
    { ders: 'c', soru: 'Today, most of the farmland around the lake ---- to a few large companies.', secenekler: ['belongs', 'is belonging', 'belonged'], dogru: 0,
      aciklama: '*Belong to* (ait olmak) bir durum fiilidir; bugün doğru olsa da sürekli biçim almaz: *belongs*. *Belonged* geçmiş zamandır, *today* ile uymaz.' },
    { ders: 'd', soru: 'When the fire alarm went off, most of the students ---- an exam.', secenekler: ['took', 'were taking', 'take'], dogru: 1,
      aciklama: 'Alarm çaldığında öğrenciler sınavın ortasındaydı: süren bir iş ve onu kesen kısa bir olay. Süren iş geçmişte süreklilikle kurulur: *were taking*. *Took* olsaydı öğrenciler sınava alarmdan sonra girmiş olurdu. *Take* geniş zamandır, geçmişteki olaya uymaz.' },
    { ders: 'e', soru: 'We will send you the certificate as soon as you ---- the course.', secenekler: ['complete', 'will complete', 'completed'], dogru: 0,
      aciklama: '*As soon as* bir zaman bağlacıdır; ardından gelecek anlamı geniş zamanla verilir: *complete*. *Will* yalnız ana cümlede durur (*we will send*). *Completed* geçmiş zamandır, oysa cümle geleceği anlatıyor.' },
    { ders: 'f', soru: 'Fifty years ago, most people in the region ---- in villages; today, most ---- in towns and cities.', secenekler: ['live / lived', 'have lived / are living', 'lived / live'], dogru: 2,
      aciklama: 'İki boşluğun iki ayrı zaman sözcüğü var. *Fifty years ago* bitmiş bir geçmişi gösterir: *lived*. *Today* bugünkü genel durumu gösterir: *live*. *Ago* ile present perfect (*have lived*) kullanılmaz. *Live / lived* iki zamanı ters çevirir: elli yıl öncesine geniş zaman, bugüne geçmiş zaman koyar.' },
  ],

  dersler: [
    {
      id: 'a', baslik: 'Zaman ve görünüş: fiile sorulan iki soru', sure: 4, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'İngilizce bir fiil iki bilgiyi birlikte taşır. **Zaman** (*tense*) olayın ne zaman olduğunu söyler: şimdi mi, geçmişte mi, gelecekte mi? **Görünüş** (*aspect*) ise olaya nereden baktığını söyler. **Basit** biçim (*simple*) olayı dışarıdan, bir bütün olarak görür: bitmiş bir olay, bir alışkanlık, hep doğru olan bir bilgi. **Sürekli** biçim (*continuous*: *be* + -ing) olayın içine bakar: o anda süren, henüz bitmemiş, çoğu zaman geçici bir iş.' },
        { tur: 'tablo', sutunlar: ['Zaman', 'Basit: bütün olarak', 'Sürekli: süren iş'], satirlar: [
          ['Şimdi', 'Dr Kaya ==studies== bird migration.', 'This week she ==is counting== storks near the lake.'],
          ['Geçmiş', 'Last spring she ==counted== 4,000 storks.', 'She ==was counting== them when a storm broke.'],
          ['Gelecek', 'She ==will publish== the results in May.', 'This time next year she ==will be working== in Africa.'],
        ], not: "Basit sütundaki cümleler işin bütününü anlatır: Dr Kaya'nın uğraşı, geçen baharın sayımı, mayısta çıkacak yayın. Sürekli sütundakiler belli bir anda ya da dönemde süren işi anlatır." },
        // Zamanlar haritası (18 Kasım 2026): ../zaman-haritasi.js
        ZAMAN_HARITASI,
        { tur: 'kural', metin: 'Basit biçim: olayın bütünü · Sürekli biçim (*be* + -ing): o anda ya da o dönemde süren iş' },
        { tur: 'metin', metin: "Bu bölümdeki zamanların hepsi bu iki sorunun cevabıdır: geniş zaman, şimdiki zaman, geçmiş zaman, geçmişte süreklilik ve gelecek. Perfect zamanlar (*have* + V3) olayı sonraki bir ana bağlar." },
        { tur: 'hatirlat', bolum: 'zamanlar-2', metin: 'Perfect zamanlar ve zaman uyumu ayrı bölümde:' },
        { tur: 'turkce', metin: "Türkçede -iyor iki işi birden görür: 'Şu anda yağmur yağıyor' (o anda süren iş) ve 'Kardeşim bir bankada çalışıyor' (kalıcı durum, mesleği). İngilizcede bu iki cümle ayrı zamanlarla kurulur: *It is raining* ama *My brother works for a bank*. İş geçiciyse (*this summer*) *is working* da olur. Bu yüzden -iyor gördüğün her cümleyi -ing ile çevirme; önce sor: o anda mı sürüyor, yoksa hep böyle mi?" },
        { tur: 'dene', soru: 'The patient cannot see visitors right now because the doctor ---- him.', secenekler: ['examines', 'examined', 'is examining'], dogru: 2,
          aciklama: '*Right now* konuşma anını gösteriyor: muayene şu anda sürüyor, henüz bitmedi. Süren iş sürekli biçimle anlatılır: *is examining*. *Examines* doktorun genel olarak yaptığı işi anlatır. *Examined* bitmiş bir olaydır; hastanın şu anda ziyaretçi kabul edememesini açıklamaz.' },
        { tur: 'dogruMu', cumle: 'Many species of bat are using sound to find their prey in the dark.', dogru: false,
          duzeltme: 'Many species of bat ==use== sound to find their prey in the dark.',
          aciklama: "Yarasaların bu yeteneği o anda süren bir iş değil, her zaman doğru olan bir bilgi. Genel doğru basit biçimle, geniş zamanla anlatılır: *use*. Türkçede 'Yarasalar avını sesle buluyor' demek doğaldır; -iyor seni -ing'e çekmesin." },
        { tur: 'hataBul', parcalar: ['Many people in Turkey', 'are drinking', 'several glasses of tea', 'every day.'], yanlis: 1,
          duzeltme: 'Many people in Turkey ==drink== several glasses of tea every day.',
          aciklama: "*Every day* bir alışkanlığı gösteriyor; alışkanlık basit biçimle, geniş zamanla anlatılır: *drink*. Türkçede 'her gün çay içiyor' demek doğaldır, ama bu o anda süren bir iş değil. Öteki parçalarda hata yok." },
      ],
    },
    {
      id: 'b', baslik: 'Geniş zaman: alışkanlık, genel doğru, akademik metin', sure: 5, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Geniş zaman (*present simple*) bir olayı belli bir ana bağlamadan anlatır. Olumlu cümlede fiil yalın gelir; özne üçüncü tekil kişiyse (*he, she, it* ya da tekil bir isim) fiil -s alır: *the study shows*. Olumsuz cümlede ve soruda *do/does* gelir, fiil yalın kalır: *the study does not show*, *does it show?* Dört yerde kullanılır:' },
        { tur: 'tablo', sutunlar: ['Kullanım', 'Örnek'], satirlar: [
          ['Alışkanlık, tekrar', 'The committee ==meets== twice a year.'],
          ['Genel doğru, doğa yasası', 'Sound ==travels== faster in water than in air.'],
          ['Kalıcı durum', 'The institute ==employs== around 300 researchers.'],
          ['Akademik metin: kaynak, tablo, bulgu', 'Table 3 ==shows== the results for each age group.'],
        ] },
        // Zaman çizgisi (18 Kasım 2026): şekil ve örnek cümleler özgün.
        {"tur": "cizgi", "zaman": "Present simple", "aciklama": "Tekrar eden olaylar: aynı iş geçmişte, şimdi ve gelecekte yinelenir.", "seritler": ["tekrar"], "simdi": 63, "ogeler": [{"tip": "noktalar", "s": 0, "xs": [6, 20, 34, 48, 78, 92]}], "cumleler": [{"en": "Water ++boils++ at 100 degrees Celsius at sea level.", "tr": "Su, deniz seviyesinde 100 derecede kaynar."}, {"en": "My grandfather ++walks++ to the market every morning.", "tr": "Dedem her sabah pazara yürür."}, {"en": "The library ++opens++ at nine on weekdays.", "tr": "Kütüphane hafta içi dokuzda açılır."}]},
        { tur: 'metin', metin: 'Akademik metinde geniş zaman her yerdedir ama yalnız değildir. Araştırmanın yapılışı geçmişte olup bittiği için geçmiş zamanla anlatılır. Kaynağın görüşü ve bulgudan çıkan yorum bugün de geçerli sayıldığı için geniş zamanla:' },
        { tur: 'ornekler', liste: [
          { en: 'Demir (2021) ==argues== that small farms recover faster after a drought.', tr: 'Demir (2021), küçük çiftliklerin kuraklıktan sonra daha hızlı toparlandığını öne sürüyor.' },
          { en: 'The researchers ==interviewed== 200 farmers in three provinces.', tr: 'Araştırmacılar üç ilde 200 çiftçiyle görüştü.', not: 'Araştırmanın yapılışı: geçmiş zaman.' },
          { en: 'These findings ==suggest== that water policy should focus on small producers.', tr: 'Bu bulgular, su politikasının küçük üreticilere odaklanması gerektiğini gösteriyor.' },
        ] },
        { tur: 'turkce', metin: "Türkçe geniş zaman (-r) ile İngilizce *present simple* her zaman örtüşmez. 'Yarın seni ararım' bir söz, 'Toplantı herhalde uzun sürer' bir tahmindir; İngilizcede ikisi de *will* ile kurulur: *I'll call you tomorrow*, *The meeting will probably take a long time*. 'Pencereyi açar mısın?' bir ricadır: *Could you open the window?* Türkçe cümlede -r gördün diye geniş zamana atlama; önce cümlenin ne iş yaptığını sor." },
        { tur: 'dikkat', yanlis: 'The report show that most patients recover within a week.', dogru: 'The report ==shows== that most patients recover within a week.',
          not: 'Özne tekil bir isimse (*the report, the author, each patient*) fiil -s alır. Özne çoğulsa -s yok: *the reports show*.' },
        { tur: 'sinavda', metin: "ÖSYM'nin parçaları akademik metinlerdir; YDS'de en sık konular psikoloji, tarih, tıp, biyoloji ve çevredir (iDil'in ÖSYM analizi). Bu metinlerde genel bilgi ve bulgu geniş zamanla, tek bir araştırmanın yapılışı ve tarihî olay geçmiş zamanla anlatılır. Boşluklu cümle hangisini anlatıyor, önce onu sor." },
        { tur: 'dene', soru: 'Every time a honeybee finds a good source of food, it ---- the location to the rest of the hive through a kind of dance.',
          secenekler: ['is communicating', 'communicates', 'communicated', 'communicate'], dogru: 1,
          aciklama: "*Every time* (her seferinde) bir tekrarı anlatıyor: arıların hep yaptığı bir şey. Tekrar ve genel doğru geniş zamanla anlatılır; özne tekil (*it*): *communicates*. *Communicate* -s'siz kalmış. *Communicated* geçmiş zamandır, *finds* ile uymaz. *Is communicating* o anda süren tek bir işi anlatır." },
        { tur: 'dene', soru: "Don't worry about the slides for tomorrow's talk. I ---- them for you tonight, I promise.",
          secenekler: ['will prepare', 'prepare', 'prepared'], dogru: 0,
          aciklama: "Bu bir söz. Türkçede 'Bu akşam hazırlarım, söz' deriz, geniş zamanla; İngilizcede söz *will* ile verilir: *will prepare*. Geniş zaman (*prepare*) söz anlamı taşımaz. *Prepared* geçmiş zamandır, *tonight* ve *I promise* ile uymaz." },
        { tur: 'dogruMu', cumle: 'In her 2020 book, Arslan argues that farming spread across Anatolia more slowly than was once believed.', dogru: true,
          aciklama: 'Kitap 2020\'de çıkmış olsa da yazarın görüşü bugün de okunuyor ve tartışılıyor; akademik metinde kaynak bu yüzden çoğu zaman geniş zamanla aktarılır: *argues*. Tarihî olay ise geçmiş zamanda: *spread*. *Argued* da yanlış olmazdı, ama *argues* hatasız.' },
      ],
    },
    {
      id: 'c', baslik: 'Şimdiki zaman ve durum fiilleri', sure: 5, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Şimdiki zaman (*present continuous*: *am/is/are* + -ing) üç durumu anlatır: konuşma anında süren iş (*now, at the moment*), bu günlerde süren geçici iş (*this term, currently*) ve değişen, gelişen bir durum (*increasingly, more and more*). Gelecek için kullanımı E dersinde.' },
        { tur: 'ornekler', liste: [
          { en: 'Engineers ==are inspecting== the bridge at the moment, so it is closed to traffic.', tr: 'Mühendisler şu anda köprüyü denetliyor; bu yüzden köprü trafiğe kapalı.' },
          { en: 'This term, our department ==is trying== a new way of marking exams.', tr: 'Bu dönem bölümümüz sınavları değerlendirmenin yeni bir yolunu deniyor.', not: 'Bu günlerde süren, geçici iş.' },
          { en: 'The Arctic ==is warming== much faster than the rest of the planet.', tr: 'Kuzey Kutbu gezegenin geri kalanından çok daha hızlı ısınıyor.', not: 'Değişen, gelişen durum.' },
        ] },
        // Zaman çizgisi (18 Kasım 2026): şekil ve örnek cümleler özgün.
        {"tur": "cizgi", "zaman": "Present continuous", "aciklama": "Şimdiyi saran şerit: iş şu anda ya da bu günlerde sürüyor, henüz bitmedi.", "seritler": ["süren iş"], "simdi": 50, "ogeler": [{"tip": "serit", "s": 0, "bas": 20, "son": 98, "etiket": "are sleeping"}], "cumleler": [{"en": "The children ==are sleeping==, so please keep your voice down.", "tr": "Çocuklar uyuyor, lütfen sesini alçak tut."}, {"en": "Prices ==are rising== quickly these days.", "tr": "Bu günlerde fiyatlar hızla artıyor."}, {"en": "She ==is writing== her thesis this term, so she rarely goes out.", "tr": "Bu dönem tezini yazıyor, o yüzden pek dışarı çıkmıyor."}]},
        { tur: 'metin', metin: 'Bazı fiiller bir eylem değil, bir **durum** anlatır: bilmek, inanmak, istemek, sahip olmak, içermek. Bu **durum fiilleri** (*stative verbs*) sürekli biçim almaz; şu anda doğru olsalar bile geniş zamanla kurulur.' },
        { tur: 'tablo', baslik: 'Sık kullanılan durum fiilleri', sutunlar: ['Anlam', 'Fiiller'], satirlar: [
          ['Bilgi, düşünce', '*know, believe, understand, mean, remember, doubt*'],
          ['Duygu, istek', '*like, prefer, want, need, hate*'],
          ['Sahiplik, içerme', '*own, belong to, contain, include, consist of*'],
          ['Görünüş, değer', '*seem, resemble, cost, matter*'],
        ] },
        { tur: 'turkce', metin: "Türkçede durum fiilleri de -iyor alır: 'biliyorum, inanıyorum, istiyorum, anlıyorum'. İngilizcede bunlar geniş zamandadır: *I know, I believe, I want, I understand*. *I am knowing* Türkçe 'biliyorum'un sözcük sözcük çevirisidir ve yanlıştır. Gündelik konuşmada kural bazen esner (*I'm loving this weather*); ama akademik metinde ve sınavda durum fiili geniş zamanda kalır." },
        { tur: 'metin', metin: 'Bazı fiillerin iki anlamı vardır: biri durum, biri eylem. Eylem anlamında sürekli biçim alabilirler:' },
        { tur: 'ornekler', liste: [
          { en: 'Most economists ==think== the new tax is a mistake.', tr: 'Ekonomistlerin çoğu yeni vergiyi bir hata sayıyor.', not: '*Think* = bir görüşü olmak: durum.' },
          { en: 'The ministry ==is thinking== about introducing a tax on plastic packaging.', tr: 'Bakanlık plastik ambalaja vergi koymayı düşünüyor.', not: '*Think about* = üzerinde düşünmek, tartmak: eylem.' },
          { en: 'The hospital ==has== more than 600 beds.', tr: "Hastanenin 600'den fazla yatağı var.", not: '*Have* = sahip olmak: durum.' },
          { en: 'The patients ==are having== lunch, so visitors must wait outside.', tr: 'Hastalar öğle yemeği yiyor; ziyaretçiler dışarıda beklemeli.', not: '*Have lunch* = yemek yemek: eylem.' },
        ] },
        { tur: 'dikkat', yanlis: 'The final report is containing three tables and two maps.', dogru: 'The final report ==contains== three tables and two maps.',
          not: '*Contain* bir durum fiilidir: raporun içeriği bir eylem değil, bir durum. Şu anda doğru olsa da geniş zamanla kullanılır.' },
        { tur: 'dene', soru: "Today, the museum's collection ---- more than 3,000 coins from the Roman period.", secenekler: ['included', 'is including', 'includes'], dogru: 2,
          aciklama: '*Include* (içermek) bir durum fiilidir; sürekli biçim almaz, bugünkü durum geniş zamanla anlatılır: *includes*. *Today* bugünü gösterdiği için geçmiş zaman (*included*) uymaz.' },
        { tur: 'dene', soru: 'At the moment, the city council ---- of closing the old library and moving its books to the university.', secenekler: ['is thinking', 'thinks', 'thought'], dogru: 0,
          aciklama: "Burada *think of* bir görüş değil, 'düşünüp taşınmak, tartmak': süren bir zihinsel iş. Bu anlamda *think* sürekli biçim alır: *is thinking*. *Thinks* görüş bildiren *think* olurdu (*I think it is too late*). *Thought* geçmiş zamandır, *at the moment* ile uymaz." },
        { tur: 'dogruMu', cumle: 'Researchers are believing that the drug could also slow memory loss.', dogru: false,
          duzeltme: 'Researchers ==believe== that the drug could also slow memory loss.',
          aciklama: "*Believe* bir durum fiilidir: bir görüşe sahip olmak. Türkçede 'inanıyorlar' denir; İngilizcede sürekli biçim olmaz, geniş zaman gelir." },
      ],
    },
    {
      id: 'd', baslik: 'Geçmiş zaman ve geçmişte süreklilik', sure: 5, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'Geçmiş zaman (*past simple*) geçmişte olup bitmiş bir olayı anlatır. Olumlu cümlede fiilin geçmiş biçimi (V2) gelir: *opened, found*. Olumsuz cümlede ve soruda *did* gelir, fiil yalın kalır: *did not find*, *did they find?* Olayın zamanı çoğu zaman söylenir ya da bağlamdan bellidir: *in 1923, last year, two weeks ago*.' },
        { tur: 'metin', metin: 'Geçmişte süreklilik (*past continuous*: *was/were* + -ing) geçmişteki bir anda sürmekte olan işi anlatır. İki zaman çoğu zaman yan yana gelir: uzun süren iş arka planı kurar, onu kesen kısa olay geçmiş zamandadır. *While* çoğunlukla süren işin, *when* kesen olayın önüne gelir.' },
        { tur: 'ornekler', liste: [
          { en: 'The archaeologists ==were cleaning== the floor of the temple when they noticed a carved stone.', tr: 'Arkeologlar tapınağın tabanını temizlerken oymalı bir taş fark ettiler.' },
          { en: 'While the nurses ==were changing== shifts, an alarm went off in one of the rooms.', tr: 'Hemşireler vardiya değiştirirken odalardan birinde bir alarm çaldı.' },
          { en: 'When the minister arrived, the protesters ==were shouting== slogans.', tr: 'Bakan geldiğinde protestocular slogan atıyordu.', not: 'Bakan geldiğinde iş zaten sürüyordu.' },
          { en: 'When the minister arrived, the protesters ==started== shouting slogans.', tr: 'Bakan gelince protestocular slogan atmaya başladı.', not: 'Art arda iki olay: önce bakan geldi, sonra slogan başladı.' },
        ] },
        // Zaman çizgisi (18 Kasım 2026): şekil ve örnek cümleler özgün.
        {"tur": "cizgi", "zaman": "Past simple", "aciklama": "Geçmişte tek bir an: olay bitti, kapandı; şimdiyle bağı yok.", "seritler": ["olay"], "ogeler": [{"tip": "yildiz", "s": 0, "x": 30, "etiket": "opened"}], "cumleler": [{"en": "The museum ++opened++ in 1998.", "tr": "Müze 1998'de açıldı."}, {"en": "We ++visited++ Ankara last summer.", "tr": "Geçen yaz Ankara'yı ziyaret ettik."}, {"en": "The first experiment ++failed++ two years ago.", "tr": "İlk deney iki yıl önce başarısız oldu."}]},
        // Zaman çizgisi (18 Kasım 2026): şekil ve örnek cümleler özgün.
        {"tur": "cizgi", "zaman": "Past continuous + past simple", "aciklama": "Üst şeritte geçmişte süren iş, alt şeritte onu kesen kısa olay; ikisi aynı ana denk geliyor.", "seritler": ["süren iş", "ani olay"], "ogeler": [{"tip": "serit", "s": 0, "bas": 4, "son": 56, "etiket": "was cooking"}, {"tip": "yildiz", "s": 1, "x": 30, "etiket": "rang", "bag": true}], "cumleler": [{"en": "I ==was cooking== when the phone ++rang++.", "tr": "Telefon çaldığında yemek yapıyordum."}, {"en": "The researchers ==were collecting== samples when the storm ++hit++ the island.", "tr": "Fırtına adayı vurduğunda araştırmacılar örnek topluyordu."}, {"en": "While the audience ==was waiting==, the lights suddenly ++went out++.", "tr": "Seyirciler beklerken ışıklar birden söndü."}]},
        { tur: 'kural', metin: 'Kesilen iş: *was/were* + -ing · kesen olay: V2 · art arda iki olay: V2 ve V2' },
        { tur: 'turkce', metin: "Türkçe geçmişi iki ekle anlatır: -dı (gördüm, biliyorum) ve -mış (duydum, sonradan fark ettim). İngilizce bu ayrımı fiille yapmaz ve iki ekin de tek bir karşılığı yoktur. 'Hititler Anadolu'da yaşadı' da 'yaşamış' da *The Hittites lived in Anatolia* olur; bilginin duyulduğunu söylemek gerekirse *apparently* ya da *reportedly* eklenir. Öte yandan 'Hiç Kapadokya'ya gittin mi?' ve 'Kapı açık bırakılmış' bugüne bağlanır; karşılıkları *present perfect*'tir (*Have you ever been to Cappadocia?*); o yapı ayrı bölümde. Kısacası ekten değil, anlamdan çevir." },
        { tur: 'dikkat', yanlis: 'The researchers did not found any trace of the virus in the samples.', dogru: 'The researchers did not ==find== any trace of the virus in the samples.',
          not: 'Geçmiş zamanı *did* taşır; ardından fiil yalın gelir: *did not find*, *did they find?*' },
        { tur: 'sinavda', metin: "Cümle tamamlama sorularının bir bölümü zaman ilişkisi kurar; beklenen pay YDS'de yaklaşık %7, YÖKDİL'de %4 (iDil'in ÖSYM analizi). Bu sorularda iki yanın zamanı birbirine uymalı: ana cümle geçmişteyse *when* ya da *while* ile başlayan şık da geçmişte olur. Süren iş *was/were* + -ing, onu kesen olay V2 ile kurulur." },
        { tur: 'dene', soru: 'The team ---- samples near the crater when the ground suddenly began to shake.',
          secenekler: ['collected', 'is collecting', 'has collected', 'was collecting'], dogru: 3,
          aciklama: 'Yer sallanmaya başladığında ekip örnek toplamanın ortasındaydı: süren bir iş ve onu kesen ani bir olay. Süren iş geçmişte süreklilikle kurulur: *was collecting*. *Collected* olsaydı örnekler sarsıntı başladıktan sonra toplanmış olurdu; anlam bozulur. *Is collecting* ve *has collected* şimdiye bağlıdır, *began* ile uymaz.' },
        { tur: 'dene', soru: 'While the doctors ---- the patient, his heart ---- for a few seconds.',
          secenekler: ['examined / was stopping', 'were examining / stopped', 'examine / stopped', 'were examining / was stopping'], dogru: 1,
          aciklama: 'Muayene süren iş: *were examining*. Kalbin birkaç saniye durması onu kesen kısa olay: *stopped*. *Was stopping* kısa ve ani bir olayı süren bir iş gibi gösterir. *Examine* geniş zamandır, *stopped* ile aynı geçmişe ait olamaz.' },
        { tur: 'dogruMu', cumle: 'While the lights went out, the surgeon was closing the wound.', dogru: false,
          duzeltme: '==When== the lights went out, the surgeon was closing the wound.',
          aciklama: "Işıkların sönmesi kısa, ani bir olay; *while* ise süren bir işin önüne gelir. Kesen olayın önüne *when* gelir. Ya da *while*'ı süren işe taşı: *The lights went out while the surgeon was closing the wound.*" },
      ],
    },
    {
      id: 'e', baslik: 'Gelecek: will, be going to ve zaman cümleciği', sure: 6, konular: [],
      bloklar: [
        { tur: 'metin', metin: 'İngilizcede tek bir gelecek zaman yoktur; geleceği birkaç yapı paylaşır. Seçimi, geleceğe nasıl baktığın belirler: tahmin mi ediyorsun, kararı önceden mi verdin, yoksa iş bir takvime mi bağlı?' },
        { tur: 'tablo', sutunlar: ['Yapı', 'Ne için?', 'Örnek'], satirlar: [
          ['*will* + yalın fiil', 'tahmin; konuşurken verilen karar; söz', 'Demand for fresh water ==will rise== sharply by 2050.'],
          ['*be going to* + yalın fiil', 'önceden verilmiş karar; bugünkü bir işarete dayanan tahmin', 'The ministry ==is going to build== two new dams.'],
          ['şimdiki zaman', 'kesinleşmiş plan, randevu', 'The delegation ==is flying== to Brussels on Monday.'],
          ['geniş zaman', 'tarifeye, takvime bağlı olay', 'The spring term ==starts== on 3 February.'],
          ['*will be* + -ing', 'gelecekteki bir anda sürecek iş', 'This time tomorrow, I ==will be sitting== my final exam.'],
        ], not: 'Çoğu tahminde *will* de *be going to* da olur. Fark en çok kararda belirgindir: konuşurken verilen karar *will*, önceden verilmiş karar *be going to*.' },
        // Zaman çizgisi (18 Kasım 2026): şekil ve örnek cümleler özgün.
        {"tur": "cizgi", "zaman": "Future simple", "aciklama": "Gelecekte tek bir an: karar, tahmin ya da söz.", "seritler": ["olay"], "simdi": 30, "ogeler": [{"tip": "yildiz", "s": 0, "x": 56, "etiket": "will be ready"}], "cumleler": [{"en": "The results ++will be ready++ next week.", "tr": "Sonuçlar gelecek hafta hazır olacak."}, {"en": "I think it ++will rain++ tomorrow, so take an umbrella.", "tr": "Bence yarın yağmur yağacak, şemsiye al."}, {"en": "Don't worry, I ++will call++ you as soon as I land.", "tr": "Merak etme, iner inmez seni arayacağım."}]},
        // Zaman çizgisi (18 Kasım 2026): şekil ve örnek cümleler özgün.
        {"tur": "cizgi", "zaman": "Future continuous", "aciklama": "Gelecekte bir anı saran şerit: o saatte iş sürüyor olacak.", "seritler": ["süren iş"], "simdi": 12, "ogeler": [{"tip": "serit", "s": 0, "bas": 30, "son": 98, "etiket": "will be flying"}, {"tip": "baslangic", "x": 44, "etiket": "this time tomorrow"}], "cumleler": [{"en": "This time tomorrow, we ==will be flying== over the Alps.", "tr": "Yarın bu saatte Alplerin üzerinden uçuyor olacağız."}, {"en": "At ten on Monday, she ==will be giving== her presentation.", "tr": "Pazartesi saat onda sunumunu yapıyor olacak."}, {"en": "Don't call at eight; I ==will be having== dinner then.", "tr": "Sekizde arama; o saatte yemek yiyor olacağım."}]},
        { tur: 'metin', metin: "**Zaman cümleciği.** *When, as soon as, before, after, until, once* gibi zaman bağlaçlarından sonra gelecek anlamı geniş zamanla verilir; *will* yalnız ana cümlede durur. Aynı kural *if* ve *unless* gibi koşul bağlaçlarında da geçerlidir. Bağlaçtan sonra işin bitmiş olması vurgulanacaksa present perfect gelir (*as soon as you have finished*)." },
        { tur: 'hatirlat', bolum: 'zarf-cumlecikleri', metin: 'Zaman bağlaçlarının anlamı ve öteki zarf cümlecikleri ayrı bölümde:' },
        { tur: 'ornekler', liste: [
          { en: 'When the new results ==arrive==, we will update the report.', tr: 'Yeni sonuçlar gelince raporu güncelleyeceğiz.' },
          { en: 'The doctors will not decide until they ==see== the scan.', tr: 'Doktorlar taramayı görene kadar karar vermeyecek.' },
          { en: 'Nobody knows when the new line ==will open==.', tr: 'Yeni hattın ne zaman açılacağını kimse bilmiyor.',
            not: "Burada *when* bir zaman bağlacı değil, 'ne zaman' sorusudur ve *knows* fiilinin nesnesini başlatır. Bu yüzden *will* olur." },
        ] },
        { tur: 'kural', metin: 'Zaman ya da koşul bağlacı + geniş zaman · ana cümle + *will*' },
        { tur: 'turkce', metin: "Türkçe burada sana yardım eder. 'Sonuçlar gelince seni arayacağım' cümlesinde gelecek eki yalnız ana yüklemdedir (arayacağım); 'gelince' gelecek eki almaz. İngilizce de aynı yolu izler: *When the results arrive, I will call you*. Zaman cümleciğini 'gelince, gelir gelmez, gelene kadar' diye düşün; *will*'i ana cümleye sakla." },
        { tur: 'dikkat', yanlis: 'We will publish the data as soon as the analysis will be complete.', dogru: 'We will publish the data as soon as the analysis ==is== complete.',
          not: "*As soon as, when, until, before, after* ve *once*'tan sonra gelecek, geniş zamanla anlatılır; *will* yalnız ana cümlede." },
        { tur: 'sinavda', metin: "Boşluklu metinde boşlukların yaklaşık %3'ü gelecek zamanı sorar; zamanla ilgili boşlukların en sık çıkanı budur (iDil'in ÖSYM analizi). Böyle bir boşlukta önce yerine bak: boşluk bir zaman ya da koşul bağlacından sonraysa *will* içeren şıkları ele (*when* ya da *if* bir fiilin nesnesini başlatıyor ve 'ne zaman' ya da '-ip -mediği' anlamına geliyorsa *will* olur); boşluk ana cümledeyse ve cümle geleceği anlatıyorsa *will* ya da *be going to* ara." },
        { tur: 'dene', soru: 'The castle will reopen to visitors as soon as the repairs to its walls ---- complete.',
          secenekler: ['will be', 'were', 'are', 'are being'], dogru: 2,
          aciklama: '*As soon as* bir zaman bağlacı; ardından gelecek geniş zamanla anlatılır: *are complete*. *Will be* zaman bağlacından sonra kullanılmaz. *Were* geçmiş zamandır, oysa cümle geleceği anlatıyor. *Are being complete* kurulmaz: *complete* bir sıfat, durum bildirir; sürekli biçim almaz.' },
        { tur: 'dene', soru: 'The sales figures for the first six months are very poor. The company ---- its target this year.',
          secenekler: ['is not going to reach', 'does not reach', 'did not reach'], dogru: 0,
          aciklama: 'Şirketin hedefe ulaşamayacağı bugünkü bir işarete, ilk altı ayın kötü rakamlarına dayanan bir tahmin. Böyle bir tahmin *be going to* ile kurulur: *is not going to reach*. *Does not reach* geniş zamandır, tahmin bildirmez. *Did not reach* yıl bitmiş gibi konuşur, oysa yıl sürüyor.' },
        { tur: 'dogruMu', cumle: 'Scientists cannot yet say when the volcano will erupt again.', dogru: true,
          aciklama: "Burada *when* bir zaman cümleciği kurmuyor; 'ne zaman' sorusunu soruyor ve *say* fiilinin nesnesini başlatıyor. Bu tür cümlecikte gelecek *will* ile anlatılır. Zaman cümleciği olsaydı *will* gelmezdi: *When the volcano erupts, the villages will be evacuated.*" },
      ],
    },
    {
      id: 'f', baslik: 'Sınav yolu: zaman sözcüğünü bul, fiili ona göre seç', sure: 5, konular: ['zaman'],
      bloklar: [
        { tur: 'metin', metin: 'Fiil yapısı sorusunda şıklar çoğu zaman aynı fiilin farklı zamanlarıdır. Doğruyu cümledeki bir **zaman sözcüğü** belirler. Üç adımda çöz:' },
        { tur: 'metin', metin: '**1. Zaman sözcüğünü bul.** Bir zarf (*currently, usually, ago*), bir tarih (*in 1998*), bir zaman bağlacı (*when, while, as soon as*) ya da cümledeki öteki fiil.' },
        { tur: 'metin', metin: '**2. Zamanı ve görünüşü adlandır.** Şimdi mi, geçmişte mi, gelecekte mi? Bütün mü, süren iş mi? Fiil bir durum fiiliyse sürekli biçimi baştan ele.' },
        { tur: 'metin', metin: '**3. Uymayanları ele, kalanı denetle.** Kalan şıkta özneyle fiilin uyumuna (-s, *was/were*) ve yapının etken mi edilgen mi olduğuna bak.' },
        { tur: 'tablo', baslik: 'Zaman sözcüğü ve zaman', sutunlar: ['Zaman sözcüğü', 'Zaman', 'Örnek'], satirlar: [
          ['*usually, often, every year, in general*', 'geniş zaman', 'The river usually ==floods== in early spring.'],
          ['*now, at the moment, currently, these days*', 'şimdiki zaman', 'These days, more people ==are working== from home.'],
          ['*yesterday, last …, … ago, in 1990*', 'geçmiş zaman', 'Edward Jenner ==tested== his smallpox vaccine in 1796.'],
          ['*at that moment, at midnight, while*', 'geçmişte süreklilik', 'At midnight, the rescue team ==was searching== the forest.'],
          ['*tomorrow, next …, soon, in 2040*', 'gelecek', 'The new law ==will come== into force next year.'],
          ['*since, for, already, yet, by the time*', 'çoğunlukla perfect zamanlar', 'ayrı bölümde'],
        ] },
        { tur: 'sinavda', metin: "Dil bilgisi sorularındaki yanlış şıkların %14'ü zamanı cümleye uymayan fiildir: şık kendi içinde doğru kurulmuştur ama cümledeki zaman sözcüğüyle çelişir (iDil'in ÖSYM analizi). Fiil yapısı sorusu çoğu zaman iki boşlukludur; emin olduğun boşlukla başla ve o boşluğa uymayan bütün şıkları birden çiz." },
        { tur: 'cozumlu', soru: 'When the inspectors ---- the factory last March, most of its machines ----, so they ordered it to close at once.',
          secenekler: ['visit / are not working', 'visited / were not working', 'were visiting / have not worked', 'have visited / were not working', 'visited / will not work'], dogru: 1,
          adimlar: [
            '**Zaman sözcüğü.** *Last March* bitmiş bir geçmişi gösterir; *ordered* de geçmiş zamanda. Geniş zaman (*visit, are not working*), present perfect (*have visited, have not worked*) ve gelecek (*will not work*) bu zamana uymaz. Üç şık elenir.',
            '**Görünüş.** Kalan iki şıkta ilk boşluk *visited*: ziyaret, kısa ve bitmiş bir olay. İkinci boşlukta makinelerin çalışmaması müfettişler geldiği anda süren bir durum: *were not working*. *Will not work* geçmişteki bir ana uymaz.',
            '**Cevap.** *Visited / were not working*: kısa olay V2, o anda süren durum *was/were* + -ing.',
          ] },
        { tur: 'metin', metin: 'Şimdi sıra sende: aşağıdaki sorularda üç adımı kendin uygula. Açıklama cevaptan sonra açılır.' },
        { tur: 'dene', soru: 'In the 1950s, very few households in Turkey ---- a television, but today almost every home ---- at least one.',
          secenekler: ['own / had', 'were owning / is having', 'have owned / has', 'owned / is had', 'owned / has'], dogru: 4,
          aciklama: '**Birinci boşluk:** *in the 1950s* bitmiş bir dönemi gösterir: *owned*. *Have owned* bugüne uzanır, bitmiş bir tarihle kullanılmaz. **İkinci boşluk:** *today* bugünkü durumu gösterir ve özne tekil (*every home*): *has*. *Own* ve *have* (sahip olmak) durum fiilidir; *were owning* ve *is having* bu yüzden olmaz. *Is had* edilgendir, anlamsız.' },
        { tur: 'dene', soru: 'At the moment, the government ---- a plan to cut energy use in public buildings, but it ---- its final decision until the end of the year.',
          secenekler: ['considers / will not announce', 'was considering / will not announce', 'is considering / does not announce', 'is considering / will not announce', 'considered / did not announce'], dogru: 3,
          aciklama: '**Birinci boşluk:** *at the moment* şu anda süren bir işi gösterir: *is considering*. Burada *consider* bir eylemdir (incelemek, tartmak); *considers*, *was considering* ve *considered* bu zaman sözcüğüne uymaz. **İkinci boşluk:** *until the end of the year* ileriyi gösterir; karar gelecekte açıklanacak: *will not announce*. *Does not announce* bir alışkanlık anlatır.' },
        { tur: 'dogruMu', cumle: 'The ancient city, which workers discovered by chance while they were building a road in 1967, now attracts thousands of visitors every year.', dogru: true,
          aciklama: 'Üç fiil, üç ipucu. *In 1967* bitmiş bir geçmiş: *discovered*. *While* süren işi gösterir: *were building*. *Now* ve *every year* bugünkü, tekrarlanan bir durumu: *attracts*. Cümle uzun olsa da her fiil kendi zaman sözcüğüne uyuyor.' },
        { tur: 'metinde', baslik: 'Leyleklerin yolculuğu',
          en: 'Every autumn, hundreds of thousands of white storks ==cross== Turkey on their way to Africa. For centuries, people ==watched== them pass without knowing exactly where they spent the winter. In 2019, a team of biologists ==fitted== small GPS trackers to forty young birds. While the storks ==were flying== south, the trackers sent their positions every few minutes. This year, the team ==is studying== a worrying change: some birds ==are stopping== at rubbish dumps along the route instead of completing the journey. The researchers believe that this habit ==will spread== if food waste remains easy to find. Next spring, they ==are going to tag== another hundred birds to test the idea.',
          tr: "Her sonbahar yüz binlerce ak leylek Afrika'ya giderken Türkiye'yi geçer. İnsanlar yüzyıllar boyunca, kışı tam olarak nerede geçirdiklerini bilmeden onların geçişini izledi. 2019'da bir biyolog ekibi kırk genç kuşa küçük GPS vericileri taktı. Leylekler güneye uçarken vericiler birkaç dakikada bir konumlarını gönderdi. Ekip bu yıl kaygı verici bir değişikliği inceliyor: bazı kuşlar yolculuğu tamamlamak yerine yol üstündeki çöplüklerde duruyor. Araştırmacılar, yiyecek atıkları kolay bulunmaya devam ederse bu alışkanlığın yayılacağına inanıyor. Gelecek bahar bu fikri sınamak için yüz kuşa daha verici takacaklar.",
          not: 'Bir paragrafta bütün bölüm: *cross* genel doğru (geniş zaman); *watched* ve *fitted* bitmiş olay; *were flying* geçmişte süren iş; *is studying* ve *are stopping* bu günlerde süren, değişen durum; *will spread* tahmin; *are going to tag* önceden verilmiş karar. *Believe* bir durum fiili, bu yüzden *are believing* değil; *if* tarafında *remains* geniş zamanda, *will* yok.' },
      ],
    },
  ],

  ozet: {
    maddeler: [
      'Fiile iki soru sor: **ne zaman?** (şimdi, geçmiş, gelecek) ve **bütün mü, süren iş mi?** Basit biçim olayın bütününü, sürekli biçim (*be* + -ing) o anda ya da o dönemde süren işi anlatır.',
      'Geniş zaman: alışkanlık, genel doğru, kalıcı durum; akademik metinde kaynak, tablo ve bulgu (*Table 3 shows…*). Özne tekilse fiil -s alır: *the study shows*.',
      'Türkçe -iyor hem şimdiki zamanı hem genel doğruyu karşılar; Türkçe -r ise söz ve tahminde *will* olur. Ekten değil, anlamdan çevir.',
      "Durum fiilleri (*know, believe, want, own, contain, belong*) sürekli biçim almaz: 'biliyorum' → *I know*. *Think* ve *have* gibi fiiller eylem anlamında -ing alabilir.",
      'Kesilen iş *was/were* + -ing, kesen olay V2: *They were digging when they found it.* *While* süren işin önüne gelir; *when* çoğunlukla kesen olayın önüne gelir, ama süren işle de kullanılabilir. Türkçenin -dı / -mış ayrımı İngilizce fiilde yoktur.',
      'Gelecek: tahmin, anlık karar ve söz *will*; önceden verilmiş karar *be going to*; kesin plan şimdiki zaman; tarife geniş zaman. Zaman bağlacından sonra *will* gelmez: *as soon as it arrives*.',
      "Sınav yolu: zaman sözcüğünü bul, zamanı ve görünüşü adlandır, uymayan şıkları ele. *Since, for, by the time* çoğunlukla perfect zaman ister; o konu ayrı bölümde.",
    ],
    tablo: { sutunlar: ['Zaman', 'Yapı', 'Ne için?', 'Zaman sözcüğü'], satirlar: [
      ['Geniş zaman', 'V1, V1 + -s; *do/does*', 'alışkanlık, genel doğru, kalıcı durum', '*usually, every year, in general*'],
      ['Şimdiki zaman', '*am/is/are* + -ing', 'şu anda ya da bu günlerde süren, değişen iş', '*now, currently, these days*'],
      ['Geçmiş zaman', 'V2; *did* + V1', 'bitmiş olay', '*ago, last …, in 1990*'],
      ['Geçmişte süreklilik', '*was/were* + -ing', 'geçmişte bir anda süren iş', '*while, at that moment*'],
      ['Gelecek', '*will* / *be going to* + V1', 'tahmin, karar, plan', '*tomorrow, next …, soon*'],
    ] },
  },
};
