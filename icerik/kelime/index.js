// iDil "sınav kelimeleri" desteleri (3. çoğaltma turu, 17 Kasım 2026): ünitesiz kelime kartları, 50'şer kart.
// Plan: ../analiz/cogaltma-3-plani.md §6.1. Biçim: ünite kartıyla aynı; deste dosyasında `deste: true`, `items: []`.
// Yeni deste: bu klasöre dosya ekle ve buraya yaz. Denetim: denetle.mjs --deste-dosya kelime/<deste>.js
import fiil1 from './kelime-fiil-1.js';
import isim1 from './kelime-isim-1.js';
import sifat1 from './kelime-sifat-1.js';
import zarfBaglac1 from './kelime-zarf-baglac-1.js';

export const KELIME_DESTELERI = [fiil1, isim1, sifat1, zarfBaglac1];
