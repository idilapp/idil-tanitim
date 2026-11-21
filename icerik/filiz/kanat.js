// İki Kanat mantığı (Görev 3, IKI_KANAT.md §3 ve §4.1a). Saf modül: DOM yok, depolama yok, Date.now yok.
// Tarih ('YYYY-MM-DD') çağıran tarafından verilir; mobil uygulama aynı modülü kullanacak.
// Hafiza = { [birimId]: { d: duyum sayısı, a: anlam sayısı, gunler: { [sayfaKey]: 'YYYY-MM-DD' } } }
// gunler anahtarları ön eklidir ('d:' + sayfaKey, 'a:' + dersKey); anahtar opaktır, tüketici gunler'i doğrudan okumamalı.
// Bütün işlevler yeni nesne döndürür; girdiyi değiştirmez.

// Eşikler ilk değerlerdir; kesin sayılar tasarım §12'de denemeye bırakıldı.
export const ESIK = Object.freeze({ duyum: 2, anlam: 1 });

export const bos = () => ({});

// Bir birimin kaydı yoksa boş kayıt; varsa kopyası.
const kayit = (h, id) => {
  const k = h[id];
  return k ? { d: k.d, a: k.a, gunler: { ...k.gunler } } : { d: 0, a: 0, gunler: {} };
};

// Ortak sayaç: anahtar bazında günde en çok bir kez sayar; yanlış cevap sayacı düşürmez.
// Anahtar ön eki duyum ve anlam anahtarlarının çakışmasını önler ('d:' ya da 'a:').
const isle = (h, id, alan, onek, key, dogru, gun) => {
  const k = kayit(h, id);
  const anahtar = onek + key;
  if (dogru && k.gunler[anahtar] !== gun) {
    k[alan] += 1;
    k.gunler[anahtar] = gun;
  }
  return { ...h, [id]: k };
};

export const duyumIsle = (h, birimId, sayfaKey, dogru, gun) => isle(h, birimId, 'd', 'd:', sayfaKey, dogru, gun);
export const anlamIsle = (h, birimId, dersKey, dogru, gun) => isle(h, birimId, 'a', 'a:', dersKey, dogru, gun);

// Bu birim bu sayfa ya da oyun anahtarıyla en az bir kez doğru duyuldu mu (gün fark etmez). gunler'in tek okuyucusu budur;
// tüketiciler (ör. tasarim/filiz/akis.js) gunler'e doğrudan bakmaz. Bozuk hafıza, birim ya da anahtarda false döner, istisna atmaz.
export const duyumYapildi = (h, birimId, key) => {
  if (h === null || typeof h !== 'object' || typeof birimId !== 'string' || typeof key !== 'string') return false;
  if (!Object.prototype.hasOwnProperty.call(h, birimId)) return false;
  const k = h[birimId];
  if (k === null || typeof k !== 'object' || k.gunler === null || typeof k.gunler !== 'object') return false;
  return Object.prototype.hasOwnProperty.call(k.gunler, 'd:' + key) && typeof k.gunler['d:' + key] === 'string';
};

// 'yeni' | 'kural' (yalnız anlam tamam) | 'duyum' (yalnız duyum tamam) | 'tam'
export const durum = (h, birimId) => {
  const k = h[birimId];
  if (!k) return 'yeni';
  const d = k.d >= ESIK.duyum, a = k.a >= ESIK.anlam;
  if (d && a) return 'tam';
  if (a) return 'kural';
  if (d) return 'duyum';
  return 'yeni';
};

// Bir durağın birimleri: gor.yeni (metin ya da dizi), sec.birimler, yazi.birimler; tekil, ilk görünüş sırasıyla.
// Yoklama soruları dahil değildir.
export const durakBirimleri = durak => {
  const sira = [];
  const ekle = b => { if (b && !sira.includes(b)) sira.push(b); };
  for (const s of durak.sayfalar || []) {
    if (s.tur === 'gor') [].concat(s.yeni || []).forEach(ekle);
    else if (s.tur === 'sec' || s.tur === 'yazi') (s.birimler || []).forEach(ekle);
  }
  return sira;
};

// Yoklama: 3 sorunun 3'ü doğru olan durak "geçti"; birimleri duyumda tamam sayılır (anlam dokunulmaz).
// baslangic: geçilmeyen ilk durağın id'si (duraklar `no` sırasıyla; girdi dizisi değişmez); hepsi geçildiyse 'kitap'.
// sonuçta olmayan durak geçmemiş sayılır. Girdi değişmez.
export const yoklamaIsle = (h, yoklamaSonuclari, duraklar) => {
  const dogru = new Map((yoklamaSonuclari || []).map(s => [s.durakId, s.dogruSayisi]));
  let yeni = { ...h };
  let baslangic = 'kitap';
  const sirali = [...duraklar].sort((x, y) => x.no - y.no); // girdi sırasından bağımsız
  for (const durak of sirali) {
    if (dogru.get(durak.id) === 3) {
      for (const id of durakBirimleri(durak)) {
        const k = kayit(yeni, id);
        k.d = Math.max(k.d, ESIK.duyum);
        yeni[id] = k;
      }
    } else if (baslangic === 'kitap') {
      baslangic = durak.id;
    }
  }
  return { h: yeni, baslangic };
};
