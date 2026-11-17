// iDil alan setleri (4. çoğaltma turu; plan: analiz/cogaltma-4-plani.md §2.2, §4.2). Ünitesiz, YÖKDİL biçiminde yarım
// denemeler: bir alanın (sağlık, fen, sosyal) bir konu kümesi, 31 öğe, 41 soru, 12 kart. Biçim ünite dosyasıyla aynıdır;
// ayrıca `set: true` taşır. pilot/index.js bunları PILOT_UNITS'in sonuna ekler; böylece denetleyici, benzerlik betiği,
// hap bağları, INCELEME.md ve tanıtım sürümü setleri de görür. Ders listesinde üniteden ayrı gösterilir (u.set).
import saglik1 from './set-saglik-1.js';
import saglik2 from './set-saglik-2.js';
import fen1 from './set-fen-1.js';
import fen2 from './set-fen-2.js';
import sosyal1 from './set-sosyal-1.js';
import sosyal2 from './set-sosyal-2.js';
import saglik3 from './set-saglik-3.js';
import saglik4 from './set-saglik-4.js';
import fen3 from './set-fen-3.js';
import fen4 from './set-fen-4.js';
import sosyal3 from './set-sosyal-3.js';
import sosyal4 from './set-sosyal-4.js';
import saglik5 from './set-saglik-5.js';
import fen5 from './set-fen-5.js';
import sosyal5 from './set-sosyal-5.js';

export const ALAN_SETLERI = [saglik1, saglik2, saglik3, saglik4, saglik5, fen1, fen2, fen3, fen4, fen5, sosyal1, sosyal2, sosyal3, sosyal4, sosyal5];
