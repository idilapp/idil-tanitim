// Filiz ses dosyası adı (18 Kasım 2026): rol + '|' + metin'in SHA-1 özetinin ilk 12 hanesi.
// Dosya: <klasör>/<sesAdi>.m4a. Aynı satır her yerde aynı dosyaya düşer; metin değişirse ad değişir.
// Bu modül tarayıcıda da kullanılacağı için statik içe aktarma yok; node'da sesAdi, tarayıcıda sesAdiTarayici.

const girdi = satir => `${satir.rol}|${satir.metin}`;

// Node: eşzamanlı. node:crypto çağrıldığında yüklenir (statik içe aktarma yok; tarayıcı paketi bozulmasın).
export function sesAdi(satir) {
  return globalThis.process.getBuiltinModule('node:crypto').createHash('sha1').update(girdi(satir)).digest('hex').slice(0, 12);
}

// Tarayıcı: crypto.subtle ile aynı sonuç (Promise<string>).
export async function sesAdiTarayici(satir) {
  const veri = new TextEncoder().encode(girdi(satir));
  const ozet = await globalThis.crypto.subtle.digest('SHA-1', veri);
  return [...new Uint8Array(ozet)].map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 12);
}
