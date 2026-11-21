// Sınavda zayıf nokta haritası (Görev 8, 22 Kasım 2026; tasarım ICERIK_GENISLEME §4.4 ve §4.6). Saf modül: DOM ve depolama yok.
//
// Sorunun `konu` alanındaki ince etiketler (ör. "zaman: past perfect", "edilgen kanaat") öğrenene gösterilecek konulara toplanır.
// Her etiket tam bir konuya düşer; bir konuyu birkaç etiket besleyebilir. `kitap`: konunun anlatıldığı Sınav Kitabı bölümleri
// (icerik/kitap/bolumler, bölüm kimliği). Kelime konularının Sınav Kitabı'nda bölümü yoktur (kitap: []); uygulama bunları kelime
// kartlarına yönlendirir. Yeni etiket: önce buraya bir konuya ekle; denetle.mjs haritada olmayan etiketi hata sayar.
//
//   grup: 'dilbilgisi' (yapı) · 'kelime' (sözcük seçimi ve anlamı) · 'okuma' (okuma becerisi) · 'baglam' (cümleler arası ilişki,
//   paragraf akışı, diyalog)
export const GRUPLAR = ['dilbilgisi', 'kelime', 'okuma', 'baglam'];

export const KONULAR = {
  // ---------- dil bilgisi ----------
  zamanlar: { ad: 'Zamanlar ve zaman uyumu', grup: 'dilbilgisi', etiketler: ['zaman', 'zaman uyumu', 'zaman: past simple', 'zaman: present perfect', 'zaman: past perfect'], kitap: ['zamanlar-1', 'zamanlar-2'] },
  kipler: { ad: 'Kipler (modal)', grup: 'dilbilgisi', etiketler: ['kip (modal)', 'kip geçmiş (modal perfect)'], kitap: ['kipler'] },
  edilgen: { ad: 'Edilgen yapı', grup: 'dilbilgisi', etiketler: ['edilgen', 'edilgen kanaat'], kitap: ['edilgen'] },
  fiilimsiler: { ad: 'Fiilimsiler (-ing ve to)', grup: 'dilbilgisi', etiketler: ['isim-fiil ve mastar', 'mastar', 'be used to + -ing', 'by + -ing', 'fiil yapıları'], kitap: ['fiilimsiler'] },
  nicelik: { ad: 'Nicelik sözcükleri', grup: 'dilbilgisi', etiketler: ['nicelik'], kitap: ['nicelik'] },
  kapsam: { ad: 'Olumsuzluk, kapsam ve temkin', grup: 'dilbilgisi', etiketler: ['olumsuzluk', 'olumsuzluğun kapsamı', 'kapsam', 'temkinli dil'], kitap: ['ceviri', 'akademik'] },
  gonderim: { ad: 'Gönderim (zamirler)', grup: 'dilbilgisi', etiketler: ['gönderim'], kitap: ['gonderim', 'paragraf'] },
  karsilastirma: { ad: 'Karşılaştırma', grup: 'dilbilgisi', etiketler: ['karşılaştırma'], kitap: ['karsilastirma'] },
  'sifat-cumlecigi': { ad: 'Sıfat cümlecikleri', grup: 'dilbilgisi', etiketler: ['sıfat cümleciği', 'edat + which'], kitap: ['sifat-cumlecikleri'] },
  kisaltma: { ad: 'Kısaltmalar (ortaç öbekleri)', grup: 'dilbilgisi', etiketler: ['ortaç öbeği', 'kısaltma'], kitap: ['kisaltmalar'] },
  'isim-cumlecigi': { ad: 'İsim cümlecikleri', grup: 'dilbilgisi', etiketler: ['isim cümleciği', 'ad cümleciği'], kitap: ['isim-cumlecikleri'] },
  'zarf-cumlecigi': { ad: 'Zarf cümlecikleri ve so/such … that', grup: 'dilbilgisi', etiketler: ['zarf cümleciği', 'so/such … that'], kitap: ['zarf-cumlecikleri', 'devrik'] },
  kosul: { ad: 'Koşul cümleleri', grup: 'dilbilgisi', etiketler: ['koşul', 'koşul cümlesi', 'üçüncü tip', 'unless', 'devrik koşul cümlesi'], kitap: ['kosul'] },
  devrik: { ad: 'Devrik yapı', grup: 'dilbilgisi', etiketler: ['devrik yapı'], kitap: ['devrik'] },
  baglaclar: { ad: 'Bağlaçlar', grup: 'dilbilgisi', etiketler: ['bağlaç'], kitap: ['baglayicilar'] },
  'baglanti-zarfi': { ad: 'Bağlantı zarfları', grup: 'dilbilgisi', etiketler: ['bağlantı zarfı'], kitap: ['baglayicilar'] },
  eslesik: { ad: 'Eşleşik bağlaçlar', grup: 'dilbilgisi', etiketler: ['eşleşik bağlaç'], kitap: ['eslesik'] },
  edatlar: { ad: 'Edatlar ve edatlı kalıplar', grup: 'dilbilgisi', etiketler: ['edat', 'çok sözcüklü edat', 'edatlı kalıp', 'kalıp'], kitap: ['edatlar', 'baglayicilar'] },
  // ---------- bağlam: cümleler arası ilişki ----------
  karsitlik: { ad: 'Karşıtlık ilişkisi', grup: 'baglam', etiketler: ['karşıtlık'], kitap: ['karsitlik', 'cumle-tamamlama'] },
  'neden-sonuc': { ad: 'Neden, sonuç ve amaç', grup: 'baglam', etiketler: ['neden-sonuç', 'amaç'], kitap: ['neden-sonuc', 'cumle-tamamlama'] },
  akis: { ad: 'Paragraf akışı', grup: 'baglam', etiketler: ['akış'], kitap: ['paragraf'] },
  diyalog: { ad: 'Diyalog uyumu', grup: 'baglam', etiketler: ['bağlam', 'soru-cevap uyumu'], kitap: ['okuma'] },
  // ---------- okuma ----------
  'ana-fikir': { ad: 'Ana fikir ve başlık', grup: 'okuma', etiketler: ['ana fikir', 'başlık'], kitap: ['okuma'] },
  ayrinti: { ad: 'Ayrıntı soruları', grup: 'okuma', etiketler: ['ayrıntı'], kitap: ['okuma'] },
  cikarim: { ad: 'Çıkarım', grup: 'okuma', etiketler: ['çıkarım'], kitap: ['okuma'] },
  'yazarin-tutumu': { ad: 'Yazarın amacı ve tutumu', grup: 'okuma', etiketler: ['yazarın tutumu', 'yazarın amacı'], kitap: ['okuma'] },
  // ---------- kelime ----------
  'sozcuk-anlami': { ad: 'Bağlamda sözcük anlamı', grup: 'kelime', etiketler: ['kelime', 'sözcük anlamı'], kitap: ['cumle-tamamlama', 'okuma'] },
  fiiller: { ad: 'Fiil seçimi', grup: 'kelime', etiketler: ['fiil'], kitap: [] },
  isimler: { ad: 'İsim seçimi', grup: 'kelime', etiketler: ['isim'], kitap: [] },
  'sifat-zarf': { ad: 'Sıfat ve zarf seçimi', grup: 'kelime', etiketler: ['sıfat', 'zarf'], kitap: [] },
  'obek-fiil': { ad: 'Öbek fiiller', grup: 'kelime', etiketler: ['öbek fiil'], kitap: [] },
};

// etiket → konu kimliği. Map: 'constructor' gibi nesne anahtarları yanlışlıkla konu sayılmaz.
const ETIKET = new Map(Object.entries(KONULAR).flatMap(([id, k]) => k.etiketler.map(e => [e, id])));

export const konuBul = etiket => (typeof etiket === 'string' && ETIKET.get(etiket)) || null;
export const konuEtiketleri = () => [...ETIKET.keys()];

// Haritanın kendi denetimi (denetle.mjs çağırır). bolumIdleri: Sınav Kitabı'ndaki bölüm kimlikleri. Döner: hata metinleri.
export function haritaHatalari(bolumIdleri = []) {
  const bolum = new Set(bolumIdleri);
  const hatalar = [];
  const sahip = new Map();
  for (const [id, k] of Object.entries(KONULAR)) {
    if (typeof k.ad !== 'string' || !k.ad.trim()) hatalar.push(`konu ${id}: ad boş`);
    if (!GRUPLAR.includes(k.grup)) hatalar.push(`konu ${id}: grup ${GRUPLAR.join(', ')} olmalı`);
    if (!Array.isArray(k.etiketler) || !k.etiketler.length) hatalar.push(`konu ${id}: etiket yok`);
    for (const e of k.etiketler || []) {
      if (sahip.has(e)) hatalar.push(`konu ${id}: "${e}" etiketi ${sahip.get(e)} konusunda da var (her etiket tek konuya düşer)`);
      else sahip.set(e, id);
    }
    if (!Array.isArray(k.kitap)) hatalar.push(`konu ${id}: kitap dizi olmalı`);
    for (const b of k.kitap || []) if (!bolum.has(b)) hatalar.push(`konu ${id}: Sınav Kitabı'nda bölüm yok: ${b}`);
  }
  return hatalar;
}
