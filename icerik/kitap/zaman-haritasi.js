// Ders Kitabı · Zamanlar haritası (18 Kasım 2026). Bölüm 1 (zamanlar-1, a dersi) ve Bölüm 2 (zamanlar-2, f dersi) aynı haritayı
// kullanır. Her zaman için: küçük simge (mini; konumlar 0–100, şimdi 50), yapı, ipucu sözcükler, kısa Türkçe anlam ve dersi.
// Simge dili: sarı şerit süren iş, pembe yıldız ani olay, turuncu nokta önce olan, kesik çizgi gelecekteki sınır (by).
// Tasarım: ../../tasarim/zaman-cizgisi-acd.html. Şekiller ve notlar özgündür.
export default {
  tur: 'harita',
  baslik: 'Zamanlar haritası',
  metin: 'Kalın dikey çizgi her simgede **şimdi**. Her kutuda yapı (beyaz), o zamanı ele veren ipucu sözcükler (eğik) ve kısa Türkçe anlamı var. Bir zamana dokun, dersi açılsın.',
  gruplar: [
    { ad: 'Şimdi', ogeler: [
      { ad: 'Present simple', yapi: 'V / V-s', ipucu: 'always, usually, every day', tr: 'alışkanlık, genel doğru', bolum: 'zamanlar-1', ders: 'b',
        mini: [{ tip: 'noktalar', xs: [14, 32, 68, 86] }] },
      { ad: 'Present continuous', yapi: 'am/is/are + V-ing', ipucu: 'now, at the moment, these days', tr: 'şu an ya da bu günlerde sürüyor', bolum: 'zamanlar-1', ders: 'c',
        mini: [{ tip: 'serit', bas: 35, son: 65 }] },
      { ad: 'Present perfect', yapi: 'have/has + V3', ipucu: 'already, yet, just, ever, so far', tr: 'zamanı belirsiz; sonucu bugün', bolum: 'zamanlar-2', ders: 'a',
        mini: [{ tip: 'ok', bas: 12 }] },
      { ad: 'Present perfect continuous', yapi: 'have/has been + V-ing', ipucu: 'since, for, all day', tr: 'başladı, hâlâ sürüyor', bolum: 'zamanlar-2', ders: 'b',
        mini: [{ tip: 'serit', bas: 9, son: 51 }] },
    ] },
    { ad: 'Geçmiş', ogeler: [
      { ad: 'Past simple', yapi: 'V2', ipucu: 'yesterday, ago, last year, in 2010', tr: 'geçmişte bitti, kapandı', bolum: 'zamanlar-1', ders: 'd',
        mini: [{ tip: 'yildiz', x: 23 }] },
      { ad: 'Past continuous', yapi: 'was/were + V-ing', ipucu: 'while, when, at 8 last night', tr: 'o sırada sürüyordu', bolum: 'zamanlar-1', ders: 'd',
        mini: [{ tip: 'serit', bas: 2, son: 40 }, { tip: 'yildiz', x: 21, r: 7.5 }] },
      { ad: 'Past perfect', yapi: 'had + V3', ipucu: 'before, by the time, already', tr: 'geçmişteki bir andan önce', bolum: 'zamanlar-2', ders: 'c',
        mini: [{ tip: 'nokta', x: 7, no: 1 }, { tip: 'yildiz', x: 33, no: 2, r: 8 }] },
      { ad: 'Past perfect continuous', yapi: 'had been + V-ing', ipucu: 'for, since, before', tr: 'o ana kadar sürüp gelmişti', bolum: 'zamanlar-2', ders: 'c',
        mini: [{ tip: 'serit', bas: 0, son: 28 }, { tip: 'yildiz', x: 28, r: 8 }] },
    ] },
    { ad: 'Gelecek', ogeler: [
      { ad: 'Future simple', yapi: 'will + V', ipucu: 'tomorrow, next year, probably', tr: 'karar, tahmin, söz', bolum: 'zamanlar-1', ders: 'e',
        mini: [{ tip: 'yildiz', x: 77 }] },
      { ad: 'Future continuous', yapi: 'will be + V-ing', ipucu: 'this time tomorrow, at 10 tomorrow', tr: 'gelecekte o saatte sürüyor olacak', bolum: 'zamanlar-1', ders: 'e',
        mini: [{ tip: 'serit', bas: 62, son: 97 }, { tip: 'an', x: 80 }] },
      { ad: 'Future perfect', yapi: 'will have + V3', ipucu: 'by Friday, by the time, by 2030', tr: 'o güne kadar bitmiş olacak', bolum: 'zamanlar-2', ders: 'd',
        mini: [{ tip: 'nokta', x: 72 }, { tip: 'sinir', x: 88 }] },
      { ad: 'Future perfect continuous', yapi: 'will have been + V-ing', ipucu: 'by … for …', tr: 'o güne dek sürmüş olacak', bolum: 'zamanlar-2', ders: 'd',
        mini: [{ tip: 'serit', bas: 40, son: 88 }, { tip: 'sinir', x: 88 }] },
    ] },
  ],
};
