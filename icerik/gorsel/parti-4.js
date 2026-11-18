// Kelime kartı görselleri · 4. parti (18 Kasım 2026): 25 kart. Tarz v11; her sahne kartın kendi örnek cümlesini anlatır. Çizimler özgün.
import { ev, cim, dalga, govde } from './parca.js';

const bulutK = (x, y, f = 'gri') => ({ t:'p', d:`M${x} ${y} q-10 0 -10 -8 q0 -9 12 -9 q4 -10 16 -8 q10 -8 20 0 q13 -1 13 9 q9 2 7 9 q0 7 -9 7 z`, f });
const okt = (x, y, uz = 20) => ({ t:'l', d:`M${x} ${y} L${x + uz} ${y} M${x + uz - 5} ${y - 5} L${x + uz + 1} ${y} L${x + uz - 5} ${y + 5}`, w:2 });
const ari = (x, y) => [{ t:'c', x:x - 2, y:y - 5, r:3.2, f:'buz' }, { t:'c', x:x + 2, y:y - 5, r:3.2, f:'buz' }, { t:'e', x, y, rx:6, ry:4, f:'sari' }, { t:'l', d:`M${x - 1} ${y - 3.5} l0 7 M${x + 2} ${y - 3.5} l0 7`, w:1 }];
const cicek = (x, y) => [{ t:'l', d:`M${x} ${y} l0 20`, w:1.6, k:'yesil' }, ...[0, 72, 144, 216, 288].map(a => ({ t:'c', x:x + 6 * Math.cos(a * Math.PI / 180), y:y + 6 * Math.sin(a * Math.PI / 180), r:4, f:'sari' })), { t:'c', x, y, r:3, f:'turuncu' }];
const okuz = (x, y) => [
  { t:'l', d:`M${x - 10} ${y + 6} l0 12 M${x - 4} ${y + 7} l0 11 M${x + 6} ${y + 7} l0 11 M${x + 12} ${y + 6} l0 12`, w:1.8 },
  { t:'e', x, y, rx:17, ry:10, f:'kraft' }, { t:'e', x:x + 19, y:y - 2, rx:7, ry:6, f:'kraft' },
  { t:'l', d:`M${x + 16} ${y - 7} q-2 -6 -7 -6 M${x + 22} ${y - 7} q2 -6 7 -6`, w:1.6 }, { t:'c', x:x + 21, y:y - 3, r:1, f:'#4B2E5E' } ];
const meyve = (x, y, f) => ({ t:'c', x, y, r:5, f });

export default {
  // ---- isimler ----
  shelter: { boy: 134, alt: 'Fırtına başlayınca yürüyüşçüler boş bir çoban kulübesine sığınıyor.', o: [
    bulutK(40, 30), bulutK(110, 24), { t:'l', d:'M60 40 l-6 12 l6 0 l-6 12', w:2.4, k:'sari' },
    { t:'l', d:'M30 46 l-3 8 M44 50 l-3 8 M90 44 l-3 8 M104 50 l-3 8 M120 44 l-3 8', w:2, k:'su' },
    cim(112),
    { t:'r', x:150, y:72, w:70, h:42, rx:2, f:'tas' }, { t:'p', d:'M142 74 L185 46 L228 74 Z', f:'agac' }, { t:'r', x:176, y:86, w:18, h:28, rx:2, f:'#4B2E5E' },
    { t:'k', x:110, y:116, s:.9, kol:'ileri' }, { t:'k', x:138, y:118, s:.9, kol:'ileri' }, okt(80, 100, 16),
    { t:'y', x:185, y:128, m:'sığınak', b:12 } ] },
  reservoir: { boy: 134, alt: 'Üç kurak kıştan sonra baraj gölü öyle alçalmış ki suyun altındaki eski köyün çatıları görünüyor.', o: [
    { t:'c', x:210, y:24, r:12, f:'sari' },
    { t:'p', d:'M0 50 Q120 44 240 50 L240 134 L0 134 Z', f:'tas' },
    { t:'l', d:'M0 62 L240 62', w:1.6, k:'su', kesik:true }, { t:'y', x:40, y:58, m:'eskiden', b:10 },
    { t:'r', x:0, y:96, w:240, h:38, f:'su' }, dalga(110),
    ...[[60, 96], [100, 92], [140, 96]].map(([x, y]) => ({ t:'p', d:`M${x - 14} ${y + 6} L${x} ${y - 10} L${x + 14} ${y + 6} Z`, f:'kirmizi' })),
    { t:'l', d:'M200 66 L200 92 M195 86 L200 93 L205 86', w:2 }, { t:'y', x:100, y:78, m:'eski köy', b:11 }, { t:'y', x:210, y:126, m:'su çekildi', b:11 } ] },
  crop: { boy: 134, alt: 'Bu bölgede ana ürün pirinç; ailelerin çoğu onunla geçiniyor.', o: [
    { t:'r', x:0, y:70, w:240, h:64, f:'su' },
    ...Array.from({ length: 4 }, (_, r) => Array.from({ length: 9 }, (_, i) => [16 + i * 26, 80 + r * 14])).flat().map(([x, y]) => ({ t:'l', d:`M${x} ${y + 6} l-3 -10 M${x} ${y + 6} l0 -12 M${x} ${y + 6} l3 -10`, w:1.4, k:'yesil' })),
    { t:'k', x:56, y:66, s:.8 }, { t:'e', x:56, y:38, rx:12, ry:4, f:'kraft' },
    { t:'e', x:180, y:44, rx:30, ry:10, f:'beyaz' }, { t:'e', x:180, y:40, rx:26, ry:7, f:'#FFF8E7' }, { t:'y', x:180, y:26, m:'pirinç', b:12 },
    { t:'y', x:120, y:24, m:'ana ürün', b:13 } ] },
  fracture: { boy: 134, alt: 'Röntgende kalça kemiğinde bir kırık; yaşlı kişi düşünce kırılmış.', o: [
    { t:'r', x:24, y:10, w:120, h:114, rx:8, f:'#2E3A5C' },
    { t:'c', x:52, y:44, r:9, f:'beyaz' }, { t:'c', x:62, y:36, r:9, f:'beyaz' },
    { t:'c', x:106, y:98, r:9, f:'beyaz' }, { t:'c', x:116, y:90, r:9, f:'beyaz' },
    { t:'p', d:'M56 44 L64 38 L112 88 L104 96 Z', f:'beyaz' },
    { t:'l', d:'M76 66 l8 2 l-4 6 l8 2', w:2.6, k:'kirmizi' },
    { t:'y', x:84, y:24, m:'röntgen', b:11 },
    { t:'k', x:194, y:118, s:.95, yuz:'uzgun' }, { t:'l', d:'M210 92 L218 118', w:2.2, k:'agac' },
    { t:'y', x:196, y:40, m:'kalça kırığı', b:12 } ] },
  surgeon: { boy: 134, alt: 'Cerrah ameliyatı anneye sade ve sakin sözlerle anlatıyor.', o: [
    { t:'k', x:62, y:120, s:1.25, f:'#7FD8B6' }, { t:'e', x:62, y:72, rx:12, ry:5, f:'#7FD8B6' }, { t:'r', x:54, y:80, w:16, h:8, rx:3, f:'beyaz' },
    { t:'k', x:180, y:120, s:1.2 },
    { t:'r', x:84, y:16, w:84, h:44, rx:10, f:'beyaz' }, { t:'p', d:'M104 60 L96 70 L112 60 Z', f:'beyaz' },
    { t:'p', d:'M116 40 C104 30 106 22 114 22 C118 22 120 26 120 27 C120 26 122 22 126 22 C134 22 136 30 124 40 L120 44 Z', f:'pembe' },
    { t:'y', x:148, y:42, m:'sakin', b:11 },
    { t:'y', x:62, y:42, m:'cerrah', b:12 } ] },
  tablet: { boy: 134, alt: 'Müze atölyesinde çocuk adını küçük bir kil tablete bastırıyor.', o: [
    { t:'r', x:0, y:104, w:240, h:30, f:'kraft' },
    { t:'r', x:70, y:40, w:100, h:70, rx:10, f:'#D9A877' },
    { t:'y', x:120, y:84, m:'E L A', b:22 }, { t:'l', d:'M84 54 L156 54 M84 98 L156 98', w:1.2, k:'#B07A4E' },
    { t:'k', x:36, y:120, s:.9, f:'pembe', kol:'ileri' },
    { t:'l', d:'M180 60 L196 50 M180 70 L200 66', w:2, k:'agac' },
    { t:'y', x:120, y:28, m:'kil tablet', b:13 } ] },
  peak: { boy: 134, alt: 'Elektrik tüketimi sıcak öğleden sonra klimalar tam güçte çalışırken zirveye çıkıyor.', o: [
    { t:'l', d:'M20 112 L228 112 M20 112 L20 20', w:1.6 },
    { t:'l', d:'M20 100 Q60 96 90 84 Q120 70 138 36 Q156 70 180 86 Q206 98 228 100', w:3, k:'turuncu' },
    { t:'c', x:138, y:36, r:6, f:'kirmizi' }, { t:'y', x:138, y:24, m:'zirve', b:13 },
    { t:'c', x:200, y:30, r:12, f:'sari' },
    { t:'r', x:36, y:22, w:48, h:20, rx:4, f:'beyaz' }, { t:'l', d:'M42 36 L78 36', w:1.4, k:'gri' }, { t:'l', d:'M46 46 q4 4 0 8 M60 46 q4 4 0 8 M74 46 q4 4 0 8', w:1.4, k:'catlak' },
    { t:'y', x:40, y:128, m:'sabah', b:10 }, { t:'y', x:138, y:128, m:'öğleden sonra', b:10 }, { t:'y', x:220, y:128, m:'gece', b:10 } ] },
  horizon: { boy: 134, alt: 'Yurt dışında bir yıl okumak ufkunu genişletti: dar bir pencereden geniş bir manzaraya.', o: [
    { t:'r', x:12, y:30, w:60, h:60, rx:6, f:'beyaz' }, { t:'l', d:'M42 30 L42 90 M12 60 L72 60', w:1.6 },
    { t:'k', x:42, y:116, s:.8, yuz:'mutlu' }, { t:'y', x:42, y:20, m:'önce', b:11 },
    okt(84, 64, 22),
    { t:'r', x:120, y:16, w:116, h:96, rx:8, f:'beyaz' }, { t:'r', x:122, y:78, w:112, h:32, rx:4, f:'yesil' },
    { t:'l', d:'M122 78 L234 78', w:1.6 }, { t:'c', x:212, y:36, r:9, f:'sari' },
    { t:'c', x:150, y:46, r:12, f:'su' }, { t:'p', d:'M144 42 q4 -4 8 0 q2 6 -4 8 Z', f:'yesil' },
    { t:'p', d:'M168 54 L196 46 L190 52 L198 56 L170 58 Z', f:'gri' },
    { t:'k', x:178, y:108, s:.8, kol:'yukari' }, { t:'y', x:178, y:126, m:'ufku genişledi', b:11 } ] },
  census: { boy: 134, alt: 'Nüfus sayımı on yılda bir yapılır: görevli evdekileri ve işlerini tek tek yazar.', o: [
    { t:'r', x:20, y:52, w:110, h:70, rx:3, f:'beyaz' }, { t:'p', d:'M12 54 L75 20 L138 54 Z', f:'kirmizi' },
    { t:'k', x:44, y:112, s:.7 }, { t:'k', x:74, y:112, s:.7 }, { t:'k', x:104, y:112, s:.55 },
    ...[[44, '1'], [74, '2'], [104, '3']].flatMap(([x, n]) => [{ t:'c', x, y:66, r:8, f:'sari' }, { t:'y', x, y:70, m:n, b:11 }]),
    { t:'k', x:170, y:124, s:1, f:'su' }, { t:'r', x:182, y:80, w:28, h:36, rx:3, f:'kraft' },
    { t:'l', d:'M187 90 L205 90 M187 98 L205 98 M187 106 L200 106', w:1.2 },
    { t:'r', x:150, y:14, w:84, h:24, rx:6, f:'beyaz' }, { t:'y', x:192, y:30, m:'10 yılda bir', b:11 },
    { t:'y', x:75, y:14, m:'sayım', b:13 } ] },

  // ---- fiiller ----
  pollinate: { boy: 134, alt: 'Arı olmayınca kavun çiçek açıyor ama meyve vermiyor; arı çiçekten çiçeğe polen taşıyınca kavun oluyor.', o: [
    { t:'r', x:4, y:6, w:110, h:122, rx:12, f:'beyaz' }, { t:'r', x:126, y:6, w:110, h:122, rx:12, f:'beyaz' },
    ...cicek(40, 60), ...cicek(80, 70), { t:'y', x:58, y:28, m:'arı yok', b:12 }, { t:'y', x:58, y:116, m:'meyve yok', b:11 },
    ...cicek(150, 60), ...ari(176, 48), { t:'l', d:'M156 52 Q170 36 186 48', w:1.2, kesik:true },
    ...[[166, 54], [172, 50]].map(([x, y]) => ({ t:'c', x, y, r:1.4, f:'turuncu' })),
    { t:'e', x:204, y:96, rx:20, ry:14, f:'#C9E89A' }, { t:'l', d:'M190 92 q14 -6 28 0 M192 102 q12 4 24 0', w:1.2, k:'#7BB04A' },
    { t:'y', x:180, y:28, m:'arı var', b:12 }, { t:'y', x:180, y:124, m:'kavun!', b:11 } ] },
  stretch: { boy: 134, alt: 'Lastik bant fazla gerilirse sonunda kopar.', o: [
    { t:'c', x:30, y:50, r:10, f:'ten' }, { t:'c', x:210, y:50, r:10, f:'ten' },
    { t:'l', d:'M40 46 L200 46 M40 54 L200 54', w:2.2, k:'turuncu' },
    { t:'l', d:'M60 30 L40 30 M180 30 L200 30', w:1.6 }, { t:'l', d:'M45 25 L39 30 L45 35 M195 25 L201 30 L195 35', w:1.6 },
    { t:'y', x:120, y:30, m:'gerilir…', b:12 },
    { t:'c', x:30, y:104, r:10, f:'ten' }, { t:'c', x:210, y:104, r:10, f:'ten' },
    { t:'l', d:'M40 100 Q70 96 96 108 M144 108 Q170 96 200 100', w:2.2, k:'turuncu' },
    { t:'l', d:'M112 98 l-4 -6 M120 96 l0 -8 M128 98 l4 -6', w:1.6, k:'kirmizi' }, { t:'y', x:120, y:126, m:'kopar!', b:14 } ] },
  lend: { boy: 134, alt: 'Ağabey ikinci el bisiklet için borç para veriyor; yaza kadar geri ödenecek.', o: [
    { t:'k', x:40, y:120, s:1.1 }, { t:'k', x:120, y:120, s:1 },
    { t:'r', x:66, y:84, w:30, h:16, rx:2, f:'#9FE3A3' }, { t:'c', x:81, y:92, r:4, f:'#6FC877' },
    okt(60, 70, 34), { t:'y', x:78, y:60, m:'borç verir', b:11 },
    { t:'c', x:178, y:110, r:12, f:'yok' }, { t:'l', d:'M166 110 A12 12 0 1 0 190 110 A12 12 0 1 0 166 110 M206 110 A12 12 0 1 0 230 110 A12 12 0 1 0 206 110 M178 110 L192 92 L218 110 M190 92 L210 92', w:2 },
    { t:'r', x:160, y:18, w:72, h:40, rx:6, f:'beyaz' }, { t:'r', x:160, y:18, w:72, h:12, rx:6, f:'pembe' }, { t:'y', x:196, y:50, m:'yaza kadar', b:10 } ] },
  brew: { boy: 134, alt: 'Misafirler gelir gelmez demlikte koyu bir çay demleniyor.', o: [
    { t:'r', x:40, y:110, w:110, h:10, rx:3, f:'gri' },
    { t:'p', d:'M60 110 Q56 84 76 80 L114 80 Q134 84 130 110 Z', f:'kirmizi' }, { t:'p', d:'M130 92 Q146 88 150 76', w:1, f:'yok' }, { t:'l', d:'M130 94 Q146 92 150 78', w:3 },
    { t:'p', d:'M76 80 Q72 60 86 56 L104 56 Q118 60 114 80 Z', f:'beyaz' }, { t:'r', x:90, y:48, w:10, h:8, rx:3, f:'kirmizi' },
    { t:'l', d:'M88 40 q4 -6 0 -12 M102 40 q4 -6 0 -12', w:1.6, k:'gri' },
    ...[170, 196, 222].flatMap(x => [{ t:'p', d:`M${x - 7} ${x === 170 ? 96 : 96} L${x + 7} 96 L${x + 5} 114 L${x - 5} 114 Z`, f:'#C9632C' }, { t:'r', x:x - 10, y:114, w:20, h:4, rx:2, f:'beyaz' }]),
    { t:'y', x:96, y:28, m:'demlenir', b:13 } ] },
  grind: { boy: 134, alt: 'Değirmenci ağır taş çarkla buğdayı una çeviriyor.', o: [
    { t:'e', x:84, y:100, rx:50, ry:14, f:'gri' }, { t:'e', x:84, y:86, rx:50, ry:14, f:'#BFC5CE' }, { t:'c', x:84, y:86, r:5, f:'gri' },
    { t:'l', d:'M84 86 L84 30', w:3, k:'agac' },
    ...[[44, 60], [52, 52], [60, 62], [48, 70]].map(([x, y]) => ({ t:'e', x, y, rx:3, ry:5, f:'sari' })), { t:'y', x:40, y:40, m:'buğday', b:11 },
    okt(140, 92, 20),
    { t:'p', d:'M176 120 Q170 92 182 72 L214 72 Q226 92 220 120 Z', f:'beyaz' }, { t:'l', d:'M182 72 Q198 64 214 72', w:1.6 },
    { t:'y', x:198, y:102, m:'un', b:14 } ] },
  dump: { boy: 134, alt: 'Fabrika gece borudan dereye atık döküyor; yakalanınca ceza yiyor.', o: [
    { t:'r', x:0, y:0, w:240, h:134, f:'#3B3570' }, { t:'c', x:210, y:22, r:10, f:'#FFF4B8' },
    { t:'r', x:10, y:34, w:70, h:60, rx:2, f:'gri' }, { t:'r', x:22, y:16, w:12, h:20, f:'gri' }, { t:'r', x:20, y:52, w:14, h:10, f:'sari' },
    { t:'l', d:'M80 80 L110 80 L110 92', w:6, k:'gri' },
    { t:'p', d:'M106 94 Q104 104 112 110 Q120 104 116 94 Z', f:'#5A4A3A' },
    { t:'r', x:0, y:106, w:240, h:28, f:'su' }, { t:'e', x:140, y:116, rx:30, ry:6, f:'#5A4A3A' },
    { t:'r', x:160, y:52, w:68, h:34, rx:6, f:'beyaz' }, { t:'y', x:194, y:74, m:'CEZA', b:15 } ] },
  swell: { boy: 134, alt: 'Bisikletten düşünce diz şişiyor; üstüne buz konuyor.', o: [
    { t:'p', d:'M40 20 L60 20 L60 70 Q60 80 54 86 L54 120 L42 120 L42 86 Q36 80 40 70 Z', f:'ten' }, { t:'y', x:50, y:132, m:'önce', b:11 },
    okt(84, 70, 22),
    { t:'p', d:'M160 20 L180 20 L180 58 Q200 70 186 92 L178 120 L166 120 L162 92 Q144 70 160 58 Z', f:'#FFC3B3' },
    { t:'l', d:'M150 64 q-4 4 0 8 M196 64 q4 4 0 8', w:1.4, k:'kirmizi' },
    { t:'r', x:190, y:44, w:30, h:22, rx:5, f:'buz' }, { t:'y', x:205, y:59, m:'buz', b:10 },
    { t:'y', x:170, y:132, m:'şişti', b:11 } ] },
  plough: { boy: 134, alt: 'Traktörlerden önce aile tarlasını iki öküzle sürüyordu.', o: [
    { t:'r', x:0, y:96, w:240, h:38, f:'#B98A5A' },
    { t:'l', d:'M0 106 L120 106 M0 116 L120 116 M0 126 L120 126', w:1.4, k:'#8B5E3C' },
    ...okuz(172, 84), ...okuz(150, 96),
    { t:'l', d:'M138 92 L108 100', w:2.4, k:'agac' }, { t:'p', d:'M108 98 L94 108 L104 110 Z', f:'gri' },
    { t:'k', x:80, y:112, s:.95 },
    { t:'y', x:120, y:40, m:'tarla sürülür', b:13 } ] },
  wander: { boy: 134, alt: 'Sıradan, tekrarlayan bir işte zihin başka yerlere dalıp gidiyor.', o: [
    { t:'r', x:30, y:96, w:110, h:8, rx:2, f:'agac' }, { t:'l', d:'M40 104 L40 134 M130 104 L130 134', w:2, k:'agac' },
    ...[0, 1, 2, 3].map(i => ({ t:'r', x:44 + i * 4, y:88 - i * 4, w:30, h:8, rx:1, f:'beyaz' })),
    { t:'k', x:100, y:96, s:1, yuz:'mutlu' }, { t:'r', x:110, y:80, w:10, h:8, rx:2, f:'kirmizi' },
    ...[[118, 50, 3], [126, 40, 4]].map(([x, y, r]) => ({ t:'c', x, y, r, f:'beyaz' })),
    { t:'e', x:182, y:36, rx:52, ry:28, f:'beyaz' },
    { t:'r', x:140, y:44, w:84, h:14, rx:4, f:'su' }, { t:'c', x:204, y:24, r:6, f:'sari' },
    { t:'p', d:'M156 28 L168 18 L174 32 Z', f:'pembe' }, { t:'l', d:'M168 32 Q164 40 160 44', w:1.2 },
    { t:'y', x:70, y:40, m:'aklı başka yerde', b:11 } ] },

  // ---- sıfatlar ----
  dense: { boy: 134, alt: 'Eski şehrin sık dokulu merkezinde evler dar sokağın iki yanında neredeyse birbirine değiyor.', o: [
    { t:'p', d:'M0 0 L100 0 L100 134 L0 134 Z', f:'#FFD9B8' }, { t:'p', d:'M140 0 L240 0 L240 134 L140 134 Z', f:'#FFE7A8' },
    { t:'p', d:'M100 30 L112 30 L112 134 L100 134 Z', f:'#FFC79A' }, { t:'p', d:'M140 26 L128 26 L128 134 L140 134 Z', f:'#FFE08A' },
    { t:'r', x:112, y:0, w:16, h:134, f:'yol' },
    ...[[20, 20], [60, 20], [20, 66], [60, 66], [160, 20], [200, 20], [160, 66], [200, 66]].map(([x, y]) => ({ t:'r', x, y, w:18, h:24, rx:2, f:'buz' })),
    { t:'l', d:'M100 50 L140 50', w:1.4, kesik:true }, { t:'y', x:120, y:120, m:'dar', b:11 },
    { t:'r', x:56, y:104, w:128, h:22, rx:6, f:'beyaz' }, { t:'y', x:120, y:119, m:'sık · bitişik', b:12 } ] },
  seasonal: { boy: 134, alt: 'Sahildeki otel yazın mevsimlik çalışan alıyor; kışın kimse yok.', o: [
    { t:'r', x:4, y:6, w:110, h:122, rx:12, f:'beyaz' }, { t:'r', x:126, y:6, w:110, h:122, rx:12, f:'beyaz' },
    { t:'c', x:94, y:24, r:9, f:'sari' }, { t:'r', x:20, y:44, w:48, h:46, rx:2, f:'pembe' },
    ...[22, 42, 62, 82].map(x => ({ t:'k', x, y:118, s:.6 })), { t:'y', x:58, y:30, m:'yaz', b:13 },
    { t:'r', x:142, y:44, w:48, h:46, rx:2, f:'gri' }, { t:'l', d:'M150 52 L182 82 M182 52 L150 82', w:1.4 },
    { t:'l', d:'M210 30 l4 0 M212 28 l0 4 M220 52 l4 0 M222 50 l0 4 M200 70 l4 0 M202 68 l0 4', w:1.4, k:'catlak' },
    { t:'y', x:180, y:30, m:'kış', b:13 }, { t:'y', x:180, y:116, m:'kimse yok', b:11 } ] },
  airborne: { boy: 134, alt: 'Eski fabrikada havada uçuşan toza karşı işçiler maske takıyor.', o: [
    { t:'r', x:0, y:112, w:240, h:22, f:'gri' },
    { t:'r', x:150, y:56, w:70, h:56, rx:4, f:'kraft' }, { t:'r', x:160, y:66, w:50, h:10, f:'gri' },
    ...Array.from({ length: 26 }, (_, i) => ({ t:'c', x:20 + (i * 47) % 200, y:20 + (i * 29) % 80, r:1.8, f:'#B9A88E' })),
    { t:'k', x:60, y:116, s:1.1 }, { t:'r', x:53, y:80, w:14, h:7, rx:3, f:'beyaz' },
    { t:'k', x:110, y:116, s:1.1 }, { t:'r', x:103, y:80, w:14, h:7, rx:3, f:'beyaz' },
    { t:'y', x:84, y:30, m:'havada toz', b:13 } ] },
  'low-lying': { boy: 134, alt: 'Alçak ada denizden ancak biraz yüksekte; deniz seviyesi yükseldikçe tehlikede.', o: [
    { t:'r', x:0, y:84, w:240, h:50, f:'su' }, dalga(96), dalga(118),
    { t:'p', d:'M60 86 Q120 74 180 86 Z', f:'kraft' },
    { t:'l', d:'M120 82 Q118 60 126 40', w:3, k:'agac' }, { t:'p', d:'M126 40 Q110 34 100 44 M126 40 Q142 32 152 42 M126 40 Q120 26 108 26 M126 40 Q136 26 148 28', w:1, f:'yok' },
    { t:'l', d:'M126 40 Q110 34 100 44 M126 40 Q142 32 152 42 M126 40 Q120 26 108 26 M126 40 Q136 26 148 28', w:3, k:'yesil' },
    { t:'l', d:'M210 104 L210 70 M204 76 L210 70 L216 76', w:2.4, k:'kirmizi' }, { t:'y', x:210, y:60, m:'deniz yükselir', b:10 },
    { t:'y', x:56, y:40, m:'alçak ada', b:13 } ] },
  intact: { boy: 134, alt: 'Fırtına çatıyı uçurdu ama duvarlar sapasağlam ayakta.', o: [
    { t:'r', x:0, y:112, w:240, h:22, f:'yesil' },
    { t:'r', x:60, y:52, w:100, h:60, rx:2, f:'tas' }, { t:'r', x:80, y:68, w:18, h:18, rx:2, f:'buz' }, { t:'r', x:122, y:68, w:18, h:18, rx:2, f:'buz' }, { t:'r', x:102, y:88, w:16, h:24, rx:2, f:'agac' },
    { t:'p', d:'M170 26 L196 14 L214 26 L188 36 Z', f:'kirmizi' }, { t:'p', d:'M200 48 L222 42 L230 54 L208 58 Z', f:'kirmizi' },
    { t:'l', d:'M160 40 q10 -6 20 0 M150 54 q10 -6 20 0', w:1.6, k:'catlak' },
    { t:'c', x:110, y:30, r:12, f:'yesil' }, { t:'y', x:110, y:35, m:'✓', b:14 },
    { t:'y', x:110, y:128, m:'duvarlar sağlam', b:12 } ] },
  frail: { boy: 134, alt: 'Kırılgan yaşlı kişi bastonla merdiven inerken dikkatli; yanında tutunacak bir el.', o: [
    { t:'p', d:'M140 134 L140 112 L170 112 L170 90 L200 90 L200 68 L240 68 L240 134 Z', f:'tas' },
    { t:'k', x:110, y:124, s:1, f:'gri', yuz:'uzgun' }, { t:'l', d:'M122 98 L126 124', w:2.4, k:'agac' },
    { t:'k', x:70, y:124, s:1.05, kol:'ileri' },
    { t:'p', d:'M30 34 L52 70 L8 70 Z', f:'sari' }, { t:'y', x:30, y:66, m:'!', b:18 },
    { t:'y', x:170, y:40, m:'dikkat', b:13 } ] },
  vivid: { boy: 134, alt: 'Pazar tezgâhları canlı turuncu, kırmızı ve yeşil meyvelerle dolu.', o: [
    { t:'p', d:'M10 40 L230 40 L218 56 L22 56 Z', f:'#FF6FAE' }, { t:'l', d:'M22 56 L22 112 M218 56 L218 112', w:2.4, k:'agac' },
    { t:'r', x:16, y:96, w:208, h:16, rx:2, f:'agac' },
    ...[[52, 'turuncu'], [120, 'kirmizi'], [188, '#7BD23F']].flatMap(([cx, f]) => [[-18, 89], [-6, 89], [6, 89], [18, 89], [-12, 78], [0, 78], [12, 78], [-6, 67], [6, 67], [0, 56]].map(([dx, y]) => ({ t:'c', x:cx + dx, y, r:6, f }))),
    { t:'y', x:120, y:30, m:'canlı renkler', b:14 } ] },
};
