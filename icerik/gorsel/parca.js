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
// 10. partiden itibaren: ok, balon, iki panel, etiket kutusu, araba, balık, at soyu.
export const okt = (x, y, uz = 20) => ({ t:'l', d:`M${x} ${y} L${x + uz} ${y} M${x + uz - 5} ${y - 5} L${x + uz + 1} ${y} L${x + uz - 5} ${y + 5}`, w:2 });
export const balon = (x, y, w, m, b = 12) => [{ t:'r', x:x - w / 2, y:y - 14, w, h:24, rx:10, f:'beyaz' }, { t:'y', x, y:y + 3, m, b }];
export const iki = () => [{ t:'r', x:4, y:6, w:110, h:122, rx:12, f:'beyaz' }, { t:'r', x:126, y:6, w:110, h:122, rx:12, f:'beyaz' }];
export const kutu = (x, y, w, m, b = 11) => [{ t:'r', x:x - w / 2, y:y - 13, w, h:20, rx:6, f:'#FFFFFF' }, { t:'y', x, y:y + 2, m, b }];
export const oto = (x, y, f) => [{ t:'p', d:`M${x + 10} ${y} L${x + 16} ${y - 12} L${x + 38} ${y - 12} L${x + 46} ${y} Z`, f:'buz' }, { t:'r', x, y, w:56, h:16, rx:5, f },
  { t:'c', x:x + 13, y:y + 16, r:6, f:'#4B4B52' }, { t:'c', x:x + 43, y:y + 16, r:6, f:'#4B4B52' }];
export const balik = (x, y, f = '#FF9E8A') => [{ t:'p', d:`M${x - 12} ${y} L${x - 19} ${y - 6} L${x - 19} ${y + 6} Z`, f }, { t:'p', d:`M${x - 12} ${y} Q${x} ${y - 8} ${x + 13} ${y} Q${x} ${y + 8} ${x - 12} ${y} Z`, f },
  { t:'c', x:x + 7, y:y - 1, r:1.2, f:'#4B2E5E' }];
export const at = (x, y, f, kulak = 6, yele) => [
  { t:'l', d:`M${x - 12} ${y + 6} l0 16 M${x - 6} ${y + 7} l0 15 M${x + 8} ${y + 7} l0 15 M${x + 14} ${y + 6} l0 16`, w:2 }, { t:'l', d:`M${x - 18} ${y - 2} q-8 6 -6 18`, w:2.4, k:'#6B4430' },
  { t:'e', x, y, rx:18, ry:9, f }, { t:'p', d:`M${x + 10} ${y - 4} L${x + 18} ${y - 22} L${x + 26} ${y - 18} L${x + 20} ${y + 2} Z`, f },
  { t:'p', d:`M${x + 18} ${y - 24} L${x + 34} ${y - 14} L${x + 31} ${y - 8} L${x + 20} ${y - 14} Z`, f }, { t:'p', d:`M${x + 19} ${y - 23} L${x + 18} ${y - 23 - kulak} L${x + 23} ${y - 22} Z`, f },
  ...(yele ? [{ t:'l', d:`M${x + 18} ${y - 22} L${x + 10} ${y - 4}`, w:2.6, k:'#6B4430' }] : []), { t:'c', x:x + 24, y:y - 18, r:1.1, f:'#4B2E5E' } ];
