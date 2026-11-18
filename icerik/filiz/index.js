// Filiz durak dizini: duraklar `no` sırasıyla. Yeni durak dosyası eklenince buraya alınır.
import varis from './duraklar/01-varis.js';
import barinma from './duraklar/02-barinma.js';
import pazar from './duraklar/03-pazar.js';
import is from './duraklar/04-is.js';

export const DURAKLAR = [varis, barinma, pazar, is].sort((a, b) => a.no - b.no);

// Kimliğe göre durak (bulunamazsa undefined).
export const durakBul = id => DURAKLAR.find(d => d.id === id);
