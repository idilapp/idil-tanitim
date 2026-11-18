// Kelime kartı görselleri · 6. parti (18 Kasım 2026): 25 kart. Tarz v11; her sahne kartın kendi örnek cümlesini anlatır. Çizimler özgün.
import { ev, cim, dalga, govde } from './parca.js';

const okt = (x, y, uz = 20) => ({ t:'l', d:`M${x} ${y} L${x + uz} ${y} M${x + uz - 5} ${y - 5} L${x + uz + 1} ${y} L${x + uz - 5} ${y + 5}`, w:2 });
const balon = (x, y, w, m, b = 12) => [{ t:'r', x:x - w / 2, y:y - 14, w, h:24, rx:10, f:'beyaz' }, { t:'y', x, y:y + 3, m, b }];
const at = (x, y) => [
  { t:'l', d:`M${x - 14} ${y + 6} l-6 14 M${x - 8} ${y + 7} l2 13 M${x + 10} ${y + 6} l-4 14 M${x + 16} ${y + 5} l6 13`, w:2, k:'agac' },
  { t:'e', x, y, rx:22, ry:10, f:'#B07A4E' }, { t:'p', d:`M${x + 16} ${y - 4} L${x + 30} ${y - 22} L${x + 40} ${y - 18} L${x + 26} ${y + 2} Z`, f:'#B07A4E' },
  { t:'p', d:`M${x - 20} ${y - 4} Q${x - 34} ${y} ${x - 32} ${y + 14} Q${x - 26} ${y + 4} ${x - 20} ${y + 2} Z`, f:'#4B2E5E' }, { t:'c', x:x + 34, y:y - 18, r:1.2, f:'#4B2E5E' } ];
const sinek = (x, y) => [{ t:'c', x:x - 3, y:y - 4, r:3, f:'buz' }, { t:'c', x:x + 3, y:y - 4, r:3, f:'buz' }, { t:'e', x, y, rx:5, ry:3.5, f:'#4B4B52' }];
const bakteri = (x, y) => [{ t:'r', x:x - 7, y:y - 3, w:14, h:6, rx:3, f:'yesil' }, { t:'y', x:x + 10, y:y - 4, m:'z', b:8 }];

export default {
  // ---- isimler ----
  aroma: { boy: 134, alt: 'Taze ekmek kokusu fırından sokağa yayılıyor; geçen kişi kokuyu içine çekiyor.', o: [
    { t:'r', x:10, y:40, w:96, h:72, rx:3, f:'#FFE3C2' }, { t:'r', x:10, y:30, w:96, h:14, rx:3, f:'kirmizi' }, { t:'y', x:58, y:41, m:'FIRIN', b:10 },
    { t:'r', x:22, y:56, w:72, h:36, rx:3, f:'buz' },
    ...[[36, 80], [56, 82], [76, 80]].map(([x, y]) => ({ t:'e', x, y, rx:9, ry:6, f:'#D9A050' })),
    { t:'l', d:'M106 64 q10 -6 20 0 t20 0 t20 0 M106 78 q10 -6 20 0 t20 0 t20 0', w:2, k:'turuncu' },
    { t:'r', x:0, y:112, w:240, h:22, f:'yol' },
    { t:'k', x:200, y:112, s:1, yuz:'mutlu' }, { t:'y', x:200, y:40, m:'mmm…', b:14 },
    { t:'y', x:146, y:100, m:'koku', b:11 } ] },
  messenger: { boy: 134, alt: 'Telgraftan önce zafer haberini atlı bir ulak günlerce yol alarak getiriyordu.', o: [
    { t:'r', x:0, y:104, w:240, h:30, f:'#D9B56A' }, { t:'l', d:'M0 118 Q120 110 240 118', w:1.2, k:'agac' },
    ...at(110, 76), { t:'k', x:104, y:74, s:.8 }, { t:'r', x:116, y:50, w:14, h:10, rx:1, f:'beyaz' },
    { t:'l', d:'M60 70 L40 70 M64 80 L36 80', w:1.6, k:'gri' },
    { t:'p', d:'M200 104 L200 50 L220 58 L200 66', w:1, f:'kirmizi' }, { t:'l', d:'M200 104 L200 50', w:1.6 },
    ...balon(70, 30, 70, 'günlerce'), { t:'y', x:210, y:40, m:'haber', b:11 } ] },
  latitude: { boy: 134, alt: 'Aynı enlemdeki iki kasaba: denize yakın olanın kışı ılık, iç bölgedekinin kışı karlı.', o: [
    { t:'c', x:60, y:66, r:46, f:'su' }, { t:'p', d:'M40 40 Q60 30 76 44 Q80 62 64 70 Q46 70 40 40 Z', f:'yesil' },
    { t:'l', d:'M14 66 L106 66', w:2, k:'kirmizi', kesik:true }, { t:'l', d:'M18 46 L102 46 M18 86 L102 86', w:1, k:'beyaz' },
    { t:'y', x:60, y:126, m:'aynı enlem', b:12 },
    { t:'r', x:126, y:20, w:108, h:46, rx:8, f:'beyaz' }, ...ev(140, 44, 'pembe'), { t:'r', x:176, y:52, w:50, h:10, f:'su' }, { t:'c', x:212, y:32, r:7, f:'sari' }, { t:'y', x:186, y:46, m:'deniz: ılık', b:9 },
    { t:'r', x:126, y:74, w:108, h:46, rx:8, f:'beyaz' }, ...ev(140, 98, 'buz'), { t:'l', d:'M180 88 l4 0 M182 86 l0 4 M200 96 l4 0 M202 94 l0 4 M220 86 l4 0 M222 84 l0 4', w:1.4, k:'catlak' }, { t:'y', x:196, y:112, m:'iç: karlı', b:9 } ] },
  cartographer: { boy: 134, alt: 'Haritacı yeni baskıdan önce her köy adının yazımını tek tek denetliyor.', o: [
    { t:'r', x:40, y:16, w:150, h:94, rx:4, f:'#FFF3D6' },
    { t:'p', d:'M60 40 Q90 28 120 44 Q150 60 176 46', w:2, f:'yok' }, { t:'l', d:'M60 40 Q90 28 120 44 Q150 60 176 46', w:2, k:'su' },
    ...[[70, 64, 'Akçay'], [120, 80, 'Yenice'], [160, 70, 'Karaca']].flatMap(([x, y, m]) => [{ t:'c', x, y, r:3, f:'kirmizi' }, { t:'y', x, y:y + 14, m, b:10 }]),
    { t:'c', x:128, y:84, r:18, f:'yok' }, { t:'l', d:'M110 84 A18 18 0 1 0 146 84 A18 18 0 1 0 110 84', w:2.4, k:'vurgu' }, { t:'l', d:'M141 97 L156 112', w:4, k:'agac' },
    { t:'c', x:206, y:56, r:10, f:'yesil' }, { t:'y', x:206, y:61, m:'✓', b:12 },
    { t:'k', x:22, y:124, s:.85 }, { t:'y', x:120, y:126, m:'her ad denetlenir', b:11 } ] },
  villain: { boy: 134, alt: 'Kukla gösterisinde kötü adam sahneye her çıktığında çocuklar yuhalıyor.', o: [
    { t:'r', x:40, y:10, w:160, h:76, rx:4, f:'#4B2E5E' }, { t:'p', d:'M40 10 L66 10 L56 86 L40 86 Z M200 10 L174 10 L184 86 L200 86 Z', f:'kirmizi' },
    { t:'k', x:120, y:80, s:1.2, f:'#3D3D46', yuz:'uzgun' }, { t:'r', x:108, y:30, w:24, h:8, rx:1, f:'#3D3D46' }, { t:'r', x:102, y:38, w:36, h:3, f:'#3D3D46' },
    { t:'l', d:'M114 55 q6 4 12 0', w:2 },
    { t:'r', x:30, y:86, w:180, h:8, f:'agac' },
    ...[[40, 130], [70, 132], [100, 130], [140, 132], [170, 130], [200, 132]].map(([x, y]) => ({ t:'k', x, y, s:.55, kol:'yukari', yuz:'uzgun' })),
    ...balon(52, 24, 40, 'yuh!', 11), ...balon(190, 24, 40, 'yuh!', 11),
    { t:'y', x:120, y:24, m:'kötü adam', b:11 } ] },
  layer: { boy: 134, alt: 'Tarladaki toprağın en üstünde çürüyen yapraklarla dolu koyu bir katman var.', o: [
    cim(24), { t:'r', x:0, y:24, w:240, h:34, f:'#5C3D28' }, { t:'r', x:0, y:58, w:240, h:36, f:'#A8784E' }, { t:'r', x:0, y:94, w:240, h:40, f:'#D9B98E' },
    ...[[20, 36], [60, 44], [100, 34], [150, 42], [196, 36], [224, 46]].map(([x, y]) => ({ t:'p', d:`M${x} ${y} q6 -6 12 0 q-6 6 -12 0 Z`, f:'#C27A3A' })),
    { t:'r', x:132, y:30, w:104, h:22, rx:6, f:'beyaz' }, { t:'y', x:184, y:45, m:'koyu üst katman', b:11 },
    { t:'y', x:40, y:80, m:'alt', b:11 }, { t:'y', x:40, y:118, m:'daha alt', b:11 } ] },
  spacecraft: { boy: 134, alt: 'Uzay aracı Dünya’dan Ay’a yaklaşık üç günde varacak.', o: [
    { t:'r', x:0, y:0, w:240, h:134, f:'#3B3570' },
    ...[[100, 20], [160, 110], [60, 120], [140, 14], [220, 70]].map(([x, y]) => ({ t:'c', x, y, r:1.4, f:'beyaz' })),
    { t:'c', x:36, y:96, r:26, f:'su' }, { t:'p', d:'M22 86 Q32 76 44 84 Q46 96 34 100 Z', f:'yesil' },
    { t:'c', x:204, y:36, r:20, f:'#E6E6EA' }, { t:'c', x:198, y:30, r:4, f:'gri' }, { t:'c', x:212, y:44, r:3, f:'gri' },
    { t:'l', d:'M62 88 Q120 40 180 40', w:1.6, k:'beyaz', kesik:true },
    { t:'p', d:'M114 58 L134 50 L140 58 L134 66 Z', f:'beyaz' }, { t:'r', x:110, y:48, w:6, h:20, f:'catlak' },
    ...balon(120, 104, 60, '3 gün') ] },
  clay: { boy: 134, alt: 'Büyükanne dere kenarından kazdığı kille kendi kâselerini yapıyor.', o: [
    { t:'r', x:0, y:96, w:110, h:38, f:'#C98A5A' }, { t:'p', d:'M0 120 Q50 108 110 122 L110 134 L0 134 Z', f:'su' },
    { t:'k', x:44, y:96, s:.95, f:'pembe', kol:'ileri' }, { t:'e', x:70, y:96, rx:14, ry:5, f:'#B0703E' },
    okt(116, 80, 20), { t:'y', x:126, y:68, m:'kil', b:12 },
    { t:'r', x:146, y:100, w:90, h:8, rx:2, f:'agac' },
    ...[[166, 'kahve'], [192, '#D98E73'], [218, '#E3B07A']].map(([x, f]) => ({ t:'p', d:`M${x - 12} 82 Q${x - 12} 100 ${x} 100 Q${x + 12} 100 ${x + 12} 82 Z`, f })),
    { t:'y', x:192, y:126, m:'kâse', b:12 } ] },
  fresco: { boy: 134, alt: 'Şapel duvarındaki fresk solmuş, ama figürlerin yüzleri hâlâ seçilebiliyor.', o: [
    { t:'r', x:20, y:10, w:200, h:114, rx:4, f:'#F2E3C9' }, { t:'p', d:'M20 10 Q120 -10 220 10 L220 20 Q120 0 20 20 Z', f:'kraft' },
    ...[[70, 70], [120, 66], [170, 70]].flatMap(([x, y]) => [{ t:'c', x, y:y - 20, r:12, f:'#EED9C0' }, { t:'r', x:x - 16, y, w:32, h:40, rx:10, f:'#E8D2E8' }, { t:'p', d:`M${x - 12} ${y - 22} Q${x} ${y - 40} ${x + 12} ${y - 22} Q${x} ${y - 30} ${x - 12} ${y - 22} Z`, f:'#D9C2A6' }, { t:'c', x:x - 4, y:y - 21, r:1.2, f:'#B9A88E' }, { t:'c', x:x + 4, y:y - 21, r:1.2, f:'#B9A88E' }, { t:'l', d:`M${x - 3} ${y - 15} q3 2 6 0`, w:1, k:'#C9B49C' }]),
    { t:'l', d:'M30 100 l20 -6 M190 30 l18 8 M150 104 l30 -4', w:2, k:'#E0D2BC' },
    { t:'r', x:66, y:110, w:108, h:20, rx:6, f:'beyaz' }, { t:'y', x:120, y:124, m:'solmuş fresk', b:11 } ] },

  // ---- fiiller ----
  buzz: { boy: 134, alt: 'Sinek çıkış yolu bulmaya çalışırken pencereye vızıldayarak çarpıp duruyor.', o: [
    { t:'r', x:130, y:10, w:96, h:110, rx:4, f:'#BFE7FF' }, { t:'l', d:'M178 10 L178 120 M130 64 L226 64', w:3, k:'beyaz' },
    { t:'l', d:'M40 90 L70 60 L84 84 L106 56 L120 76 L128 60', w:1.6, kesik:true },
    ...sinek(128, 58),
    ...balon(70, 30, 64, 'vızzz!', 13) ] },
  tickle: { boy: 134, alt: 'Amca yeğeninin ensesini gıdıklayınca küçük kız kahkahalarla çığlık atıyor.', o: [
    { t:'k', x:80, y:124, s:1.4, kol:'ileri' },
    { t:'k', x:150, y:124, s:.95, f:'pembe', kol:'yukari', yuz:'mutlu' },
    { t:'l', d:'M128 74 l4 -4 M132 80 l6 -2 M126 86 l4 2', w:1.6, k:'turuncu' },
    ...balon(176, 36, 70, 'hi hi hi!', 13) ] },
  inhale: { boy: 134, alt: 'İtfaiyeci dumanı solumamak için maske takıyor.', o: [
    ...[[60, 50], [90, 34], [40, 76], [110, 60], [70, 90]].map(([x, y]) => ({ t:'c', x, y, r:18, f:'gri' })),
    { t:'k', x:170, y:124, s:1.4, f:'kirmizi' }, { t:'e', x:170, y:68, rx:16, ry:5, f:'sari' },
    { t:'r', x:160, y:76, w:20, h:12, rx:4, f:'#4B4B52' }, { t:'c', x:170, y:82, r:3, f:'gri' },
    { t:'l', d:'M130 80 L150 80', w:2.4, k:'kirmizi' }, { t:'l', d:'M134 74 L146 86 M146 74 L134 86', w:2.4, k:'kirmizi' },
    { t:'y', x:80, y:124, m:'duman', b:12 }, { t:'y', x:200, y:30, m:'maske', b:12 } ] },
  purify: { boy: 134, alt: 'Şehrin suyu evlere ve okullara pompalanmadan önce üç aşamada arıtılıyor.', o: [
    ...[[10, '#8A7A5A', '1'], [70, '#9FC8DA', '2'], [130, 'su', '3']].flatMap(([x, f, n]) => [
      { t:'r', x, y:50, w:46, h:56, rx:4, f:'beyaz' }, { t:'r', x:x + 3, y:66, w:40, h:38, rx:2, f }, { t:'c', x:x + 23, y:38, r:9, f:'sari' }, { t:'y', x:x + 23, y:42, m:n, b:11 } ]),
    { t:'l', d:'M56 84 L70 84 M116 84 L130 84', w:3, k:'gri' },
    { t:'l', d:'M176 84 L196 84 L196 60', w:3, k:'gri' }, ...ev(200, 40, 'pembe'), ...ev(204, 92, 'sari'), { t:'l', d:'M196 84 L196 104 L204 104', w:3, k:'gri' },
    { t:'y', x:33, y:122, m:'kirli', b:11 }, { t:'y', x:153, y:122, m:'temiz', b:11 } ] },
  condense: { boy: 134, alt: 'Sıcak bir günde buzdolabından çıkan soğuk şişenin dışında havadaki su damlacıklara dönüşüyor.', o: [
    { t:'c', x:200, y:28, r:14, f:'sari' }, { t:'l', d:'M180 56 q4 -4 8 0 t8 0 t8 0', w:1.6, k:'turuncu' },
    { t:'r', x:0, y:112, w:240, h:22, f:'kraft' },
    { t:'p', d:'M100 112 L100 52 Q100 40 110 36 L110 24 L130 24 L130 36 Q140 40 140 52 L140 112 Z', f:'buz' }, { t:'r', x:110, y:18, w:20, h:8, rx:2, f:'kirmizi' },
    ...[[106, 60], [118, 70], [132, 58], [108, 84], [126, 92], [136, 78], [114, 100], [132, 104]].map(([x, y]) => ({ t:'p', d:`M${x} ${y} q-3 5 0 7 q3 -2 0 -7 Z`, f:'su' })),
    { t:'l', d:'M70 60 q-6 4 0 8 M70 76 q-6 4 0 8', w:1.6, k:'catlak' }, { t:'y', x:46, y:56, m:'soğuk', b:12 },
    { t:'y', x:120, y:128, m:'damlacıklar', b:11 } ] },
  sculpt: { boy: 134, alt: 'Çocuklar sahilde ıslak kumdan küçük hayvanlar yontuyor.', o: [
    { t:'r', x:0, y:0, w:240, h:40, f:'su' }, dalga(24),
    { t:'r', x:0, y:40, w:240, h:94, f:'#F2D69A' },
    { t:'e', x:110, y:96, rx:28, ry:16, f:'#E6C07A' }, { t:'c', x:142, y:92, r:8, f:'#E6C07A' }, { t:'l', d:'M96 90 l8 6 l8 -6 M110 104 l8 -6 l8 6', w:1.2, k:'#B88A3A' },
    { t:'e', x:180, y:104, rx:14, ry:8, f:'#E6C07A' }, { t:'p', d:'M168 98 L164 88 L172 94 Z M190 98 L194 88 L186 94 Z', f:'#E6C07A' },
    { t:'k', x:50, y:120, s:.9, kol:'ileri' }, { t:'k', x:216, y:126, s:.8 },
    { t:'p', d:'M30 60 L44 60 L42 74 L32 74 Z', f:'kirmizi' },
    { t:'y', x:120, y:62, m:'kumdan kaplumbağa', b:11 } ] },
  babble: { boy: 134, alt: 'Bebek beşiğinde yatıp üstündeki oyuncaklara mutlu mutlu agucuk ediyor.', o: [
    { t:'r', x:40, y:84, w:150, h:40, rx:6, f:'beyaz' }, { t:'l', d:'M50 84 L50 124 M70 84 L70 124 M90 84 L90 124 M140 84 L140 124 M160 84 L160 124 M180 84 L180 124', w:1.4, k:'kraft' },
    { t:'c', x:110, y:84, r:12, f:'ten' }, { t:'c', x:106, y:82, r:1.2, f:'#4B2E5E' }, { t:'c', x:114, y:82, r:1.2, f:'#4B2E5E' }, { t:'l', d:'M106 88 q4 3 8 0', w:1.2 },
    { t:'l', d:'M110 4 L110 14 M80 14 L140 14 M80 14 L80 30 M110 14 L110 34 M140 14 L140 26', w:1.4 },
    { t:'p', d:'M74 30 l6 10 l6 -10 Z', f:'sari' }, { t:'c', x:110, y:38, r:5, f:'pembe' }, { t:'p', d:'M134 26 l6 -4 l6 4 l-6 8 Z', f:'su' },
    ...balon(186, 50, 70, 'ba-ba-gu!', 12) ] },
  rinse: { boy: 134, alt: 'Diş fırçası musluğun altında durulanıyor, sonra kuruması için bardağa konuyor.', o: [
    { t:'r', x:20, y:104, w:200, h:30, rx:8, f:'beyaz' },
    { t:'p', d:'M60 20 L100 20 L100 34 L86 34 L86 44 L74 44 L74 34 L60 34 Z', f:'gri' },
    { t:'l', d:'M80 46 L80 92', w:5, k:'su' }, { t:'l', d:'M74 50 l-2 8 M86 52 l2 8', w:1.4, k:'su' },
    { t:'r', x:66, y:72, w:44, h:6, rx:3, f:'pembe' }, { t:'r', x:64, y:66, w:12, h:12, rx:2, f:'beyaz' },
    { t:'p', d:'M164 104 L160 70 L188 70 L184 104 Z', f:'buz' }, { t:'r', x:170, y:40, w:5, h:40, rx:2, f:'yesil' }, { t:'r', x:166, y:34, w:12, h:10, rx:2, f:'beyaz' },
    okt(116, 80, 30), { t:'y', x:80, y:124, m:'durula', b:11 }, { t:'y', x:174, y:124, m:'kurusun', b:11 } ] },
  trap: { boy: 134, alt: 'Çift camlı pencere arada ince bir hava tabakası tutar; dışarısı soğuk, içerisi sıcak kalır.', o: [
    { t:'r', x:0, y:0, w:96, h:134, f:'#DFF1FB' }, { t:'r', x:144, y:0, w:96, h:134, f:'#FFE6D3' },
    { t:'r', x:96, y:10, w:12, h:114, f:'#BFE7FF' }, { t:'r', x:108, y:10, w:24, h:114, f:'#F4FBFF' }, { t:'r', x:132, y:10, w:12, h:114, f:'#BFE7FF' },
    { t:'y', x:120, y:70, m:'hava', b:10 },
    ...[[20, 30], [60, 50], [30, 90], [70, 110]].map(([x, y]) => ({ t:'l', d:`M${x - 4} ${y} l8 0 M${x} ${y - 4} l0 8`, w:1.4, k:'catlak' })),
    { t:'y', x:48, y:20, m:'soğuk', b:12 }, { t:'y', x:192, y:20, m:'sıcak', b:12 },
    { t:'p', d:'M176 104 Q172 86 186 80 Q182 92 194 94 Q198 84 204 86 Q208 98 200 104 Z', f:'turuncu' } ] },

  // ---- sıfatlar ----
  bitter: { boy: 134, alt: 'İlacın tadı acı; doktor yanında bir kaşık bal önerdi.', o: [
    { t:'k', x:60, y:124, s:1.3, yuz:'uzgun' }, { t:'l', d:'M52 76 l4 2 M64 78 l4 -2', w:1.4 },
    { t:'r', x:84, y:84, w:40, h:6, rx:3, f:'gri' }, { t:'e', x:84, y:86, rx:10, ry:5, f:'#8A6A3A' },
    ...balon(60, 30, 50, 'acı!', 14),
    { t:'y', x:144, y:84, m:'+', b:20 },
    { t:'p', d:'M176 108 Q170 80 184 70 L212 70 Q226 80 220 108 Z', f:'sari' }, { t:'r', x:180, y:62, w:36, h:10, rx:3, f:'kraft' }, { t:'y', x:198, y:96, m:'bal', b:13 } ] },
  hilarious: { boy: 134, alt: 'Amcanın düğünde dans etme çabası çok komikti; en çok kendisi güldü.', o: [
    { t:'k', x:120, y:110, s:1.4, kol:'yukari', yuz:'mutlu' }, { t:'l', d:'M100 110 l-12 10 M140 110 l14 6', w:2 },
    { t:'l', d:'M88 50 q-6 -6 0 -12 M152 50 q6 -6 0 -12', w:1.6, k:'turuncu' },
    ...[[30, 124], [60, 126], [180, 126], [210, 124]].map(([x, y]) => ({ t:'k', x, y, s:.7, yuz:'mutlu' })),
    ...balon(46, 40, 60, 'ha ha!', 12), ...balon(194, 40, 60, 'ha ha!', 12), { t:'y', x:120, y:24, m:'çok komik', b:13 } ] },
  drowsy: { boy: 134, alt: 'İlaç uyku yapabilir; aldıktan sonra araba kullanma.', o: [
    { t:'r', x:20, y:60, w:24, h:12, rx:6, f:'pembe' }, { t:'r', x:32, y:60, w:12, h:12, rx:6, f:'beyaz' },
    okt(54, 66, 20),
    { t:'k', x:110, y:120, s:1.2, yuz:'uzgun' }, { t:'l', d:'M100 80 q4 2 8 0 M112 80 q4 2 8 0', w:1.4 },
    { t:'y', x:140, y:56, m:'z', b:12 }, { t:'y', x:152, y:44, m:'Z', b:16 }, { t:'y', x:168, y:28, m:'Z', b:20 },
    { t:'c', x:200, y:96, r:22, f:'beyaz' }, { t:'p', d:'M186 100 L192 90 L210 90 L216 100 Z', f:'su' }, { t:'r', x:184, y:98, w:34, h:8, rx:3, f:'kirmizi' },
    { t:'l', d:'M184 80 L216 112', w:3, k:'kirmizi' }, { t:'y', x:200, y:130, m:'araba yok', b:10 } ] },
  dormant: { boy: 134, alt: 'Verem bakterisi akciğerde yıllarca uyur hâlde kalıp sonra hastalık yapabilir.', o: [
    { t:'p', d:'M110 30 Q70 30 60 70 Q54 110 86 116 Q106 118 110 90 Z', f:'#FFC3CF' }, { t:'p', d:'M130 30 Q170 30 180 70 Q186 110 154 116 Q134 118 130 90 Z', f:'#FFC3CF' },
    { t:'l', d:'M120 10 L120 40 M120 40 Q114 50 110 56 M120 40 Q126 50 130 56', w:3, k:'#E89AAE' },
    ...bakteri(86, 76), ...bakteri(160, 84), ...bakteri(96, 98),
    { t:'r', x:6, y:8, w:84, h:22, rx:6, f:'beyaz' }, { t:'y', x:48, y:23, m:'uyku hâli', b:11 },
    { t:'r', x:166, y:8, w:68, h:22, rx:6, f:'beyaz' }, { t:'y', x:200, y:23, m:'yıllarca', b:11 } ] },
  faint: { boy: 134, alt: 'Kapıyı açınca mutfakta hafif bir duman kokusu vardı.', o: [
    { t:'r', x:110, y:40, w:120, h:94, f:'#FFF3D6' }, { t:'r', x:130, y:80, w:70, h:32, rx:3, f:'gri' }, { t:'e', x:150, y:78, rx:10, ry:3, f:'#4B4B52' },
    { t:'l', d:'M150 72 q-6 -8 0 -16 q6 -8 0 -16 M168 70 q-6 -8 0 -16', w:1.4, k:'#D8D8DE', kesik:true },
    { t:'r', x:84, y:30, w:26, h:104, rx:2, f:'agac' },
    { t:'k', x:50, y:124, s:1.1, yuz:'sasir' }, { t:'y', x:50, y:56, m:'?', b:16 },
    { t:'y', x:170, y:30, m:'hafif koku', b:12 } ] },
  polar: { boy: 134, alt: 'Araştırma gemisi bütün yaz kutup denizlerinde su örneği topluyor.', o: [
    { t:'r', x:0, y:70, w:240, h:64, f:'#7FC6EA' }, dalga(96),
    { t:'p', d:'M10 74 L30 40 L52 54 L64 74 Z', f:'beyaz' }, { t:'p', d:'M180 76 L196 50 L214 60 L230 76 Z', f:'beyaz' },
    { t:'p', d:'M80 74 L150 74 L142 92 L88 92 Z', f:'kirmizi' }, { t:'r', x:100, y:56, w:32, h:18, rx:2, f:'beyaz' }, { t:'r', x:106, y:60, w:6, h:6, f:'buz' }, { t:'r', x:118, y:60, w:6, h:6, f:'buz' },
    { t:'l', d:'M150 78 L166 78 L166 108', w:1.4 }, { t:'r', x:160, y:108, w:12, h:16, rx:3, f:'buz' },
    { t:'y', x:120, y:30, m:'kutup denizi', b:13 } ] },
  magnetic: { boy: 134, alt: 'Göçmen kuşlar Dünya’nın manyetik alanını sezip yollarını buluyor gibi görünüyor.', o: [
    { t:'l', d:'M120 34 Q60 0 40 66 Q60 132 120 98 M120 34 Q180 0 200 66 Q180 132 120 98 M120 44 Q86 30 76 66 Q86 102 120 88 M120 44 Q154 30 164 66 Q154 102 120 88', w:1.4, k:'vurgu', kesik:true },
    { t:'c', x:120, y:66, r:24, f:'su' }, { t:'p', d:'M108 56 Q116 48 126 54 Q130 66 120 70 Z', f:'yesil' },
    { t:'kus', x:48, y:30, f:'sari', ucan:true }, { t:'kus', x:200, y:34, f:'pembe', ucan:true },
    { t:'y', x:120, y:126, m:'manyetik alan', b:12 } ] },
};
