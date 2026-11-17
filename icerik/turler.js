// iDil içerik taksonomisi: soru türleri ve alanlar (pilot, 12 Kasım 2026). Biçim: README.md.
//
// Yönergeler bizim cümlelerimizdir; ÖSYM kitapçığındaki yönerge metinleri kopyalanmadı.
// Sınavdaki soru sayıları ÖSYM kitapçıklarından sayıldı (soru-oruntu, 13 Kasım 2026; analiz/etiketler/):
// YDS: 2013 tam kitapçığı ve yüzde 10 yayınlarının numara blokları; YÖKDİL: 2019–2026 yüzde 10 yayınlarının numara blokları
// (1–6 kelime, 7–20 dil bilgisi, 21–30 boşluklu, 31–41 cümle tamamlama, 42–47 ve 48–53 çeviri, 54–59 paragraf, 60–65 bozan,
// 66–80 okuma); YDT: 2018–2025 tam kitapçıkları. ÖSYM kılavuzu tür başına sayı vermiyor.
// "durum" türü yalnız YDT'de var.

// bicim: 'soru' (tek soru: q, 5 şık), 'parca' (bir metin ve ona bağlı adımlar), 'cumleler' (5 numaralı cümle, biri akışı bozar).
// duello: tek başına, kısa sürede çözülebilen türler düelloya ve sunucunun soru bankasına girer. Parçalı türler girmez
// (iLaw'daki olay soruları gibi; scripts/export-questions.mjs).
// karistir: şıklar karıştırılabilir mi? Açıklamalar şık harfine değil içeriğe atıf yapar; yalnız I–V sırası karışmaz.
export const TURLER = {
  kelime: {
    ad: 'Kelime', bicim: 'soru', duello: true, karistir: true, sinav: { YDS: 6, YOKDIL: 6, YDT: 5 },
    yonerge: 'Cümledeki boşluğa anlamca en uygun sözcüğü seç.',
  },
  dilbilgisi: {
    ad: 'Dil bilgisi', bicim: 'soru', duello: true, karistir: true, sinav: { YDS: 10, YOKDIL: 14, YDT: 10 },
    yonerge: 'Cümledeki boşluğa ya da boşluklara dil bilgisi açısından en uygun seçeneği seç.',
  },
  bosluklu: {
    ad: 'Boşluklu metin', bicim: 'parca', duello: false, karistir: true, sinav: { YDS: 10, YOKDIL: 10, YDT: 5 },
    yonerge: 'Parçadaki numaralı boşlukların her birine en uygun seçeneği seç.',
  },
  'cumle-tamamlama': {
    ad: 'Cümle tamamlama', bicim: 'soru', duello: true, karistir: true, sinav: { YDS: 10, YOKDIL: 11, YDT: 8 },
    yonerge: 'Cümleyi anlamca ve dil bilgisi açısından doğru tamamlayan seçeneği seç.',
  },
  'ceviri-et': {
    ad: 'Çeviri: İngilizceden Türkçeye', bicim: 'soru', duello: true, karistir: true, sinav: { YDS: 3, YOKDIL: 6, YDT: 6 },
    yonerge: 'İngilizce cümleye anlamca en yakın Türkçe cümleyi seç.',
  },
  'ceviri-te': {
    ad: 'Çeviri: Türkçeden İngilizceye', bicim: 'soru', duello: true, karistir: true, sinav: { YDS: 3, YOKDIL: 6, YDT: 6 },
    yonerge: 'Türkçe cümleye anlamca en yakın İngilizce cümleyi seç.',
  },
  okuma: {
    ad: 'Okuma parçası', bicim: 'parca', duello: false, karistir: true, sinav: { YDS: 20, YOKDIL: 15, YDT: 15 },
    yonerge: 'Parçayı oku; soruları yalnız parçada söylenenlere göre cevapla.',
  },
  diyalog: {
    ad: 'Diyalog tamamlama', bicim: 'soru', duello: true, karistir: true, sinav: { YDS: 5, YDT: 5 },
    yonerge: 'Konuşmadaki boşluğa, öncesine ve sonrasına uyan cümleyi seç.',
  },
  'yakin-anlam': {
    ad: 'Anlamca en yakın cümle', bicim: 'soru', duello: true, karistir: true, sinav: { YDS: 4, YDT: 5 },
    yonerge: 'Verilen cümleye anlamca en yakın cümleyi seç.',
  },
  'paragraf-tamamlama': {
    ad: 'Paragraf tamamlama', bicim: 'soru', duello: true, karistir: true, sinav: { YDS: 4, YOKDIL: 6, YDT: 5 },
    yonerge: 'Paragraftaki boşluğa, anlam akışını sağlayan cümleyi seç.',
  },
  durum: {
    ad: 'Duruma uygun söz', bicim: 'soru', duello: true, karistir: true, sinav: { YDT: 5 },
    yonerge: 'Verilen durumda söylenebilecek en uygun sözü seç.',
  },
  bozan: {
    ad: 'Akışı bozan cümle', bicim: 'cumleler', duello: true, karistir: false, sinav: { YDS: 5, YOKDIL: 6, YDT: 5 },
    yonerge: 'Cümleleri sırayla oku; parçanın anlam akışını bozan cümleyi bul.',
  },
};

// Ders = alan. YDS bütün alanları, YÖKDİL "genel" ile kendi alanını çalıştırır.
export const ALANLAR = {
  genel: { ad: 'Genel', sinavlar: ['YDS', 'YOKDIL-SAGLIK', 'YOKDIL-FEN', 'YOKDIL-SOSYAL'] },
  saglik: { ad: 'Sağlık bilimleri', sinavlar: ['YDS', 'YOKDIL-SAGLIK'] },
  fen: { ad: 'Fen bilimleri', sinavlar: ['YDS', 'YOKDIL-FEN'] },
  sosyal: { ad: 'Sosyal bilimler', sinavlar: ['YDS', 'YOKDIL-SOSYAL'] },
};

export const SEVIYELER = ['A2', 'B1', 'B2', 'C1', 'C2'];
export const ZORLUK = ['kolay', 'orta', 'zor']; // iLaw motorunun `level` alanı
export const SOZCUK_TURLERI = ['fiil', 'öbek fiil', 'isim', 'sıfat', 'zarf', 'bağlaç'];
