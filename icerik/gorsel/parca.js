// Kelime kartı görselleri: partilerin ortak çizim parçaları (2. partiden itibaren). Her parça öğe listesi döndürür.
export const ari = (x, y) => [{ t:'c', x:x - 2, y:y - 5, r:3.2, f:'buz' }, { t:'c', x:x + 2, y:y - 5, r:3.2, f:'buz' }, { t:'e', x, y, rx:6, ry:4, f:'sari' }, { t:'l', d:`M${x - 1} ${y - 3.5} l0 7 M${x + 2} ${y - 3.5} l0 7`, w:1 }];
export const ev = (x, y, f) => [{ t:'r', x, y, w:22, h:18, rx:2, f }, { t:'p', d:`M${x - 3} ${y} L${x + 11} ${y - 11} L${x + 25} ${y} Z`, f:'kirmizi' }, { t:'r', x:x + 8, y:y + 8, w:6, h:10, rx:1, f:'agac' }];
export const kum = (y, f = 'kraft') => ({ t:'p', d:`M0 ${y} Q60 ${y - 10} 120 ${y} T240 ${y} L240 134 L0 134 Z`, f });
export const cim = (y) => ({ t:'p', d:`M0 ${y} Q60 ${y - 8} 120 ${y} T240 ${y} L240 134 L0 134 Z`, f:'yesil' });
export const dalga = (y, x0 = 0, x1 = 240) => { let d = `M${x0} ${y}`; for (let x = x0; x < x1; x += 20) d += ` q5 -4 10 0 t10 0`; return { t:'l', d, w:1.4, k:'beyaz' }; };
export const keci = (x, y) => [
  { t:'l', d:`M${x - 7} ${y + 4} l-1 10 M${x - 2} ${y + 5} l0 9 M${x + 5} ${y + 5} l0 9 M${x + 9} ${y + 4} l1 10`, w:1.6 },
  { t:'e', x, y, rx:12, ry:7, f:'beyaz' }, { t:'e', x:x + 13, y:y - 5, rx:5, ry:4, f:'beyaz' },
  { t:'l', d:`M${x + 12} ${y - 9} q2 -6 -3 -8 M${x + 15} ${y - 9} q3 -5 0 -8 M${x + 16} ${y - 1} l0 4`, w:1.3 }, { t:'c', x:x + 15, y:y - 6, r:.9, f:'#4B2E5E' } ];
export const tavsan = (x, y) => [
  { t:'e', x:x + 6, y:y - 22, rx:3, ry:9, f:'beyaz' }, { t:'e', x:x + 12, y:y - 21, rx:3, ry:9, f:'beyaz' },
  { t:'e', x, y, rx:13, ry:10, f:'gri' }, { t:'c', x:x + 10, y:y - 9, r:7, f:'gri' }, { t:'c', x:x - 13, y:y - 2, r:4, f:'beyaz' },
  { t:'c', x:x + 13, y:y - 11, r:1.6, f:'#4B2E5E' } ];
export const tilki = (x, y) => [
  { t:'p', d:`M${x - 14} ${y} Q${x - 30} ${y - 4} ${x - 34} ${y + 6} Q${x - 24} ${y + 8} ${x - 14} ${y + 4} Z`, f:'turuncu' },
  { t:'l', d:`M${x - 8} ${y + 6} l-1 10 M${x + 8} ${y + 6} l1 10`, w:1.6 },
  { t:'e', x, y, rx:15, ry:8, f:'turuncu' }, { t:'p', d:`M${x + 12} ${y - 4} L${x + 30} ${y} L${x + 14} ${y + 6} Z`, f:'turuncu' },
  { t:'p', d:`M${x + 14} ${y - 4} L${x + 16} ${y - 13} L${x + 21} ${y - 3} Z`, f:'turuncu' }, { t:'c', x:x + 21, y:y - 1, r:1, f:'#4B2E5E' } ];
export const otobus = (x, y) => [
  { t:'r', x, y, w:70, h:30, rx:6, f:'sari' }, ...[0, 1, 2, 3].map(i => ({ t:'r', x:x + 6 + i * 16, y:y + 5, w:12, h:10, rx:2, f:'buz' })),
  { t:'c', x:x + 14, y:y + 30, r:5, f:'#4B2E5E' }, { t:'c', x:x + 56, y:y + 30, r:5, f:'#4B2E5E' } ];
export const bardak = (x, y, su) => [
  ...(su ? [{ t:'p', d:`M${x - 15} ${y - 24} L${x + 15} ${y - 24} L${x + 13} ${y} L${x - 13} ${y} Z`, f:'su' }] : []),
  { t:'l', d:`M${x - 18} ${y - 44} L${x - 13} ${y} L${x + 13} ${y} L${x + 18} ${y - 44}`, w:2 } ];
export const canli = (x, y, f = 'yesil') => [{ t:'e', x, y, rx:4, ry:3, f }, { t:'l', d:`M${x + 4} ${y} q4 -3 7 0`, w:1 }];
export const govde = (x, y, w, h) => ({ t:'r', x, y, w, h, rx:6, f:'agac' });
