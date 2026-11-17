// iDil "sınav kelimeleri" desteleri (3. ve 4. çoğaltma turu, 17 Kasım 2026): ünitesiz kelime kartları, 50'şer kart.
// Plan: ../analiz/cogaltma-3-plani.md §6.1. Biçim: ünite kartıyla aynı; deste dosyasında `deste: true`, `items: []`.
// Yeni deste: bu klasöre dosya ekle ve buraya yaz. Denetim: denetle.mjs --deste-dosya kelime/<deste>.js
import fiil1 from './kelime-fiil-1.js';
import isim1 from './kelime-isim-1.js';
import sifat1 from './kelime-sifat-1.js';
import zarfBaglac1 from './kelime-zarf-baglac-1.js';
import fiil2 from './kelime-fiil-2.js';
import isim2 from './kelime-isim-2.js';
import sifat2 from './kelime-sifat-2.js';
import obekFiil1 from './kelime-obek-fiil-1.js';
import fiil3 from './kelime-fiil-3.js';
import isim3 from './kelime-isim-3.js';
import sifat3 from './kelime-sifat-3.js';
import obekFiil2 from './kelime-obek-fiil-2.js';
import edatliKalip1 from './kelime-edatli-kalip-1.js';
import fiil4 from './kelime-fiil-4.js';
import isim4 from './kelime-isim-4.js';
import zarf2 from './kelime-zarf-2.js';
import edatliKalip2 from './kelime-edatli-kalip-2.js';
import baglac2 from './kelime-baglac-2.js';
import sifat4 from './kelime-sifat-4.js';
import obekFiil3 from './kelime-obek-fiil-3.js';
import karistirilan1 from './kelime-karistirilan-1.js';
import saglik1 from './kelime-saglik-1.js';
import fen1 from './kelime-fen-1.js';
import sosyal1 from './kelime-sosyal-1.js';

export const KELIME_DESTELERI = [fiil1, isim1, sifat1, zarfBaglac1, fiil2, isim2, sifat2, obekFiil1, fiil3, isim3, sifat3, obekFiil2, edatliKalip1, fiil4, isim4, zarf2, edatliKalip2, baglac2, sifat4, obekFiil3, karistirilan1, saglik1, fen1, sosyal1];
