// iDil hap bilgi (13 Kasım 2026): soru tipi formülleri, dil bilgisi özetleri, kelime stratejileri, sınav taktikleri.
// Kartlar iLaw'ın konu kartı biçimine (type: 'ders', title, body, ref, highYield) dayanır; ekler ../README.md §3a'da.
// Sorulara bağ: TUR_HAP (soru türü → soru tipi kartı) ve KONU_HAP (konu etiketi → konu kartı). hapFor() bir sorunun
// kartlarını özelden genele döndürür: önce konu kartları, sonunda soru tipi kartı. Uygulama yanlış cevaptan sonra ilkini açar.
import soruTipleri1 from './soru-tipleri-1.js';
import soruTipleri2 from './soru-tipleri-2.js';
import dilBilgisi1 from './dil-bilgisi-1.js';
import dilBilgisi2 from './dil-bilgisi-2.js';
import kelimeSinav from './kelime-sinav.js';

export const KATEGORILER = {
  'soru-tipi': 'Soru tipi formülleri',
  'dil-bilgisi': 'Dil bilgisi özetleri',
  kelime: 'Kelime stratejileri',
  sinav: 'Sınav taktikleri',
};

export const HAP_KARTLARI = [...soruTipleri1, ...soruTipleri2, ...dilBilgisi1, ...dilBilgisi2, ...kelimeSinav];

// Planlanan kartlar (analiz/hap-plani.md). Denetim, eksik ve fazla kartı buna göre bildirir.
export const PLANLANAN = [
  'tip-kelime', 'tip-dilbilgisi', 'tip-bosluklu', 'tip-cumle-tamamlama', 'tip-ceviri', 'tip-okuma', 'tip-diyalog',
  'tip-yakin-anlam', 'tip-paragraf', 'tip-bozan',
  'db-bag-turleri', 'db-karsitlik', 'db-neden-sonuc', 'db-kosul', 'db-zaman', 'db-edatlar', 'db-eslesik', 'db-nicelik',
  'db-kipler', 'db-edilgen', 'db-sifat-cumlecigi', 'db-isim-cumlecigi', 'db-isim-fiil', 'db-ortac', 'db-karsilastirma',
  'kel-baglam', 'kel-esdizim', 'kel-bicimce-benzer', 'kel-obek-fiil', 'kel-aile',
  'sinav-puan', 'sinav-sure-sira', 'sinav-eleme', 'sinav-son-hafta',
];

export const TUR_HAP = {
  kelime: 'tip-kelime',
  dilbilgisi: 'tip-dilbilgisi',
  bosluklu: 'tip-bosluklu',
  'cumle-tamamlama': 'tip-cumle-tamamlama',
  'ceviri-et': 'tip-ceviri',
  'ceviri-te': 'tip-ceviri',
  okuma: 'tip-okuma',
  diyalog: 'tip-diyalog',
  durum: 'tip-diyalog',
  'yakin-anlam': 'tip-yakin-anlam',
  'paragraf-tamamlama': 'tip-paragraf',
  bozan: 'tip-bozan',
};

// Konu etiketi → konu kartı. Etiketler soru dosyalarındaki ve analiz/etiketler'deki adlardır.
export const KONU_HAP = {
  edat: 'db-edatlar',
  'çok sözcüklü edat': 'db-edatlar',
  bağlaç: 'db-bag-turleri',
  'bağlantı zarfı': 'db-bag-turleri',
  'bağlantı zarfı (however, therefore)': 'db-bag-turleri',
  karşıtlık: 'db-karsitlik',
  'neden-sonuç': 'db-neden-sonuc',
  amaç: 'db-neden-sonuc',
  'zarf cümleciği': 'db-neden-sonuc',
  'so/such … that': 'db-neden-sonuc',
  koşul: 'db-kosul',
  'koşul cümlesi': 'db-kosul',
  'üçüncü tip': 'db-kosul',
  'devrik koşul cümlesi': 'db-kosul',
  'devrik yapı': 'db-kosul',
  unless: 'db-kosul',
  zaman: 'db-zaman',
  'zaman uyumu': 'db-zaman',
  'eşleşik bağlaç': 'db-eslesik',
  'eşleşik bağlaç (both/either/neither)': 'db-eslesik',
  nicelik: 'db-nicelik',
  olumsuzluk: 'db-nicelik',
  kapsam: 'db-nicelik',
  'olumsuzluğun kapsamı': 'db-nicelik',
  'kapsam kayması (hepsi/bazısı)': 'db-nicelik',
  edilgen: 'db-edilgen',
  'edilgen kanaat': 'db-edilgen',
  ettirgen: 'db-edilgen',
  'sıfat cümleciği': 'db-sifat-cumlecigi',
  'edat + which': 'db-sifat-cumlecigi',
  'isim cümleciği': 'db-isim-cumlecigi',
  'ad cümleciği': 'db-isim-cumlecigi',
  'isim-fiil ve mastar': 'db-isim-fiil',
  mastar: 'db-isim-fiil',
  'be used to + -ing': 'db-isim-fiil',
  'by + -ing': 'db-isim-fiil',
  'ortaç öbeği': 'db-ortac',
  kısaltma: 'db-ortac',
  karşılaştırma: 'db-karsilastirma',
  'öbek fiil': 'kel-obek-fiil',
  zarf: 'kel-esdizim',
  kalıp: 'kel-esdizim',
  'edatlı kalıp': 'kel-esdizim',
  'edatlı fiil': 'kel-esdizim',
  isim: 'kel-baglam',
  fiil: 'kel-baglam',
  sıfat: 'kel-baglam',
  kelime: 'kel-baglam',
};

// Önekle eşlenenler: "zaman: past perfect", "kip geçmiş (modal perfect)" gibi.
const ONEK_HAP = [[/^zaman/, 'db-zaman'], [/^kip/, 'db-kipler']];

// Beceri etiketleri kendi konu kartına değil, soru tipi kartına bağlanır.
export const BECERI = new Set([
  'akış', 'ayrıntı', 'çıkarım', 'gönderim', 'ana fikir', 'yazarın amacı', 'yazarın tutumu', 'başlık', 'sözcük anlamı',
  'bağlam', 'soru-cevap uyumu', 'temkinli dil', 'fiil yapıları',
]);

export function konuHap(etiket) {
  if (KONU_HAP[etiket]) return KONU_HAP[etiket];
  const o = ONEK_HAP.find(([re]) => re.test(etiket));
  return o ? o[1] : null;
}

// Bir soru (ya da parça adımı) için hap kartı kimlikleri: önce konu kartları (etiket sırasıyla), sonra soru tipi kartı.
export function hapFor({ tur, konu = [] }) {
  const out = [];
  for (const k of konu) {
    const id = konuHap(k);
    if (id && !out.includes(id)) out.push(id);
  }
  const t = TUR_HAP[tur];
  if (t && !out.includes(t)) out.push(t);
  return out;
}
