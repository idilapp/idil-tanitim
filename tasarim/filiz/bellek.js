// Yolculuk oynatıcısı belleği: iki kanat hafızasını localStorage'ta tutar (anahtar idil.filiz.v1).
// Depolama hata verirse (gizli pencere, kota, engelleme) oturum içi bellek kullanılır; oynatıcı çalışmaya devam eder.
// Hafıza opak bir nesnedir (kanat.js): içine bakılmaz, yalnız saklanır.
import { bos } from '../../icerik/filiz/kanat.js';

const ANAHTAR = 'idil.filiz.v1';
let bellekte = bos();   // her zaman son değer; depolama çalışmıyorsa tek kaynak
let depolamaTamam = true;

export function oku() {
  if (depolamaTamam) {
    try {
      const ham = globalThis.localStorage.getItem(ANAHTAR);
      if (ham) {
        let h;
        try { h = JSON.parse(ham); }
        catch { h = undefined; globalThis.localStorage.removeItem(ANAHTAR); bellekte = bos(); }
        if (h && typeof h === 'object' && !Array.isArray(h)) bellekte = h;
      }
    } catch { depolamaTamam = false; }
  }
  return bellekte;
}

export function yaz(h) {
  bellekte = h;
  if (!depolamaTamam) return;
  try { globalThis.localStorage.setItem(ANAHTAR, JSON.stringify(h)); }
  catch { depolamaTamam = false; }
}

// Deneme için: hafızayı siler.
export function sifirla() {
  bellekte = bos();
  try { globalThis.localStorage.removeItem(ANAHTAR); } catch { depolamaTamam = false; }
}
