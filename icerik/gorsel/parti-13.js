// Kelime kartı görselleri · 13. parti (18 Kasım 2026): 50 kart. Tarz v11; her sahne kartın kendi örnek cümlesini anlatır.
// Çizimler özgün.
import { ev, dalga, okt, balon, iki, kutu, balik, tavsan, oto } from './parca.js';

const kis = (x, y, s, f, kol, yuz) => ({ t:'k', x, y, s, f, kol, yuz });
const eksen = (x0, y0, x1, y1) => ({ t:'l', d:`M${x0} ${y1} L${x0} ${y0} L${x1} ${y0}`, w:1.8 });
const mikrop = (x, y) => [{ t:'l', d:`M${x - 6} ${y} l-3 0 M${x + 6} ${y} l3 0 M${x} ${y - 6} l0 -3 M${x} ${y + 6} l0 3`, w:1.2, k:'#4E9E34' }, { t:'c', x, y, r:5, f:'#9FE07A' }];
const terazi = (x, y, solY, sagY) => [{ t:'l', d:`M${x} ${y} L${x} ${y + 60} M${x - 20} ${y + 60} L${x + 20} ${y + 60} M${x - 60} ${y + solY} L${x + 60} ${y + sagY}`, w:2.4, k:'#6B7280' },
  { t:'p', d:`M${x - 6} ${y} L${x} ${y - 8} L${x + 6} ${y} Z`, f:'gri' },
  { t:'l', d:`M${x - 60} ${y + solY} l-12 20 M${x - 60} ${y + solY} l12 20 M${x + 60} ${y + sagY} l-12 20 M${x + 60} ${y + sagY} l12 20`, w:1, k:'#6B7280' },
  { t:'p', d:`M${x - 76} ${y + solY + 20} L${x - 44} ${y + solY + 20} Q${x - 60} ${y + solY + 30} ${x - 76} ${y + solY + 20} Z`, f:'gri' },
  { t:'p', d:`M${x + 44} ${y + sagY + 20} L${x + 76} ${y + sagY + 20} Q${x + 60} ${y + sagY + 30} ${x + 44} ${y + sagY + 20} Z`, f:'gri' }];
const sise = (x, y, f = 'su') => [{ t:'p', d:`M${x} ${y} L${x} ${y - 30} Q${x} ${y - 36} ${x + 6} ${y - 38} L${x + 6} ${y - 46} L${x + 12} ${y - 46} L${x + 12} ${y - 38} Q${x + 18} ${y - 36} ${x + 18} ${y - 30} L${x + 18} ${y} Z`, f }];
const telefon = (x, y, f = '#2A2550') => [{ t:'r', x, y, w:22, h:38, rx:4, f }, { t:'r', x:x + 3, y:y + 5, w:16, h:26, rx:2, f:'buz' }];
const ayi = (x, y) => [{ t:'c', x:x - 14, y:y - 46, r:7, f:'#8B5E3C' }, { t:'c', x:x + 14, y:y - 46, r:7, f:'#8B5E3C' }, { t:'e', x, y:y - 14, rx:26, ry:22, f:'#8B5E3C' },
  { t:'c', x, y:y - 36, r:16, f:'#8B5E3C' }, { t:'e', x, y:y - 30, rx:7, ry:5, f:'#C9A06A' }, { t:'c', x, y:y - 32, r:2, f:'#4B2E5E' },
  { t:'c', x:x - 6, y:y - 40, r:1.6, f:'#4B2E5E' }, { t:'c', x:x + 6, y:y - 40, r:1.6, f:'#4B2E5E' }];
const tavuk = (x, y, f = '#FFFFFF') => [{ t:'l', d:`M${x - 2} ${y + 6} l0 6 M${x + 3} ${y + 6} l0 6`, w:1.4, k:'turuncu' }, { t:'e', x, y, rx:9, ry:7, f }, { t:'c', x:x + 7, y:y - 7, r:4.5, f },
  { t:'p', d:`M${x + 11} ${y - 8} l4 1.5 l-4 1.5 Z`, f:'turuncu' }, { t:'p', d:`M${x + 5} ${y - 12} q2 -4 4 0 Z`, f:'kirmizi' }];

export default {
  // ---- isimler ----
  endurance: { boy: 134, alt: 'Dağa tek günde tırmanmak gerçek bir dayanıklılık sınavıdır.', o: [
    { t:'p', d:'M0 128 L120 16 L240 128 Z', f:'dag' }, { t:'p', d:'M104 31 L120 16 L136 31 Z', f:'kar' }, { t:'l', d:'M120 16 L120 4', w:1.4 }, { t:'p', d:'M120 4 L132 8 L120 12 Z', f:'kirmizi' },
    { t:'l', d:'M30 124 Q80 110 70 90 Q60 70 100 60 Q130 50 110 36 L118 20', w:1.6, k:'beyaz', kesik:true },
    kis(84, 82, .6, 'turuncu', 'asagi', 'uzgun'), { t:'c', x:92, y:58, r:1.6, f:'su' },
    ...kutu(36, 102, 50, '06:00', 11), ...kutu(196, 30, 50, '20:00', 11), { t:'y', x:196, y:72, m:'tek günde', b:12 } ] },
  tale: { boy: 134, alt: 'Neredeyse her kültürde, kendinden çok güçlü birini alt eden akıllı küçük bir hayvanın masalı vardır.', o: [
    { t:'r', x:0, y:116, w:240, h:18, f:'#C9E7A8' },
    ...ayi(170, 116), { t:'y', x:170, y:52, m:'?', b:18 },
    ...tavsan(60, 104), { t:'c', x:80, y:60, r:9, f:'sari' }, { t:'l', d:'M80 46 l0 -4 M68 52 l-3 -3 M92 52 l3 -3', w:1.4, k:'sari' },
    ...kutu(64, 26, 72, 'küçük ama', 10), ...kutu(64, 46, 64, 'akıllı', 10), { t:'y', x:170, y:30, m:'güçlü', b:12 } ] },
  dose: { boy: 134, alt: 'Hemşire iğneyi yapmadan önce dozu iki kez kontrol etti.', o: [
    kis(48, 124, 1.15, '#7FD8B6', 'ileri'),
    { t:'r', x:76, y:66, w:90, h:16, rx:3, f:'buz' }, { t:'r', x:78, y:68, w:44, h:12, f:'#FFE38A' }, { t:'r', x:166, y:70, w:12, h:8, f:'gri' }, { t:'l', d:'M178 74 L200 74', w:1.4 },
    { t:'l', d:'M90 66 l0 6 M100 66 l0 4 M110 66 l0 6 M120 66 l0 4 M130 66 l0 6 M140 66 l0 4 M150 66 l0 6', w:1 },
    { t:'l', d:'M122 60 L122 92', w:1.6, k:'kirmizi', kesik:true },
    ...[[150, 34], [180, 34]].flatMap(([x, y]) => [{ t:'c', x, y, r:10, f:'yesil' }, { t:'y', x, y:y + 5, m:'✓', b:12 }]),
    { t:'y', x:166, y:112, m:'iki kez kontrol', b:12 } ] },
  circulation: { boy: 134, alt: 'Uzun uçuşta saatlerce kıpırdamadan oturmak bacaklardaki kan dolaşımını yavaşlatabilir.', o: [
    { t:'r', x:30, y:30, w:24, h:70, rx:8, f:'su' }, { t:'r', x:30, y:86, w:70, h:14, rx:5, f:'su' },
    kis(60, 86, 1.1, 'pembe'), { t:'l', d:'M60 92 L100 96 L100 124 M66 92 L104 100 L104 124', w:3, k:'#4A6FA5' },
    { t:'l', d:'M70 96 Q86 100 98 108 Q100 118 100 122', w:1.6, k:'kirmizi', kesik:true },
    { t:'c', x:180, y:52, r:20, f:'#FFFFFF' }, { t:'l', d:'M180 40 L180 52 L190 58', w:1.8 }, { t:'y', x:180, y:90, m:'10 saat', b:12 },
    { t:'r', x:132, y:20, w:24, h:18, rx:8, f:'buz' },
    ...kutu(184, 116, 74, 'kan yavaşlar', 10) ] },
  intake: { boy: 134, alt: 'Diyetisyen ondan iki hafta boyunca günlük şeker alımını kaydetmesini istedi.', o: [
    { t:'r', x:20, y:16, w:130, h:108, rx:3, f:'#FFFFFF' }, { t:'y', x:85, y:32, m:'şeker günlüğü', b:11 },
    ...['Pzt', 'Sal', 'Çar', 'Per'].flatMap((g, i) => [{ t:'y', x:40, y:54 + i * 18, m:g, b:10 },
      ...Array.from({ length: [4, 6, 3, 5][i] }, (_, j) => ({ t:'r', x:58 + j * 12, y:44 + i * 18, w:9, h:9, rx:1, f:'#FFFFFF' }))]),
    { t:'r', x:170, y:40, w:56, h:50, rx:4, f:'#FFFFFF' }, { t:'r', x:170, y:40, w:56, h:12, rx:4, f:'pembe' }, { t:'y', x:198, y:76, m:'14 gün', b:12 },
    { t:'y', x:198, y:112, m:'şeker alımı', b:11 } ] },
  pathogen: { boy: 134, alt: 'El yıkamak kapı kollarından ve telefonlardan bulaşan birçok mikrobu temizler.', o: [
    { t:'r', x:14, y:30, w:40, h:80, rx:2, f:'agac' }, { t:'r', x:42, y:66, w:20, h:6, rx:3, f:'gri' }, ...mikrop(62, 58), ...mikrop(70, 76),
    ...telefon(80, 60), ...mikrop(108, 56), ...mikrop(98, 102),
    { t:'p', d:'M150 90 L226 90 L218 112 L158 112 Z', f:'#FFFFFF' }, { t:'l', d:'M188 90 L188 60 Q188 52 196 52 L204 52', w:4, k:'gri' },
    { t:'l', d:'M200 58 l0 10 M196 62 l0 10', w:1.6, k:'su', kesik:true }, ...[[176, 82], [190, 80], [204, 84]].map(([x, y]) => ({ t:'c', x, y, r:4.5, f:'#FFFFFF' })),
    { t:'c', x:212, y:40, r:10, f:'yesil' }, { t:'y', x:212, y:45, m:'✓', b:12 },
    ...kutu(64, 22, 70, 'mikroplar', 11), ...kutu(188, 124, 54, 'yıka', 11) ] },
  booster: { boy: 134, alt: 'Hemşire kayıtlarına baktı ve hatırlatma dozunun zamanının geldiğini söyledi.', o: [
    { t:'r', x:20, y:20, w:120, h:96, rx:4, f:'#FFFFFF' }, { t:'y', x:80, y:36, m:'aşı kartı', b:11 },
    ...[0, 1, 2].map(i => ({ t:'l', d:`M30 ${52 + i * 18} L130 ${52 + i * 18}`, w:1, k:'gri' })),
    { t:'y', x:56, y:66, m:'1. doz ✓', b:10 }, { t:'y', x:56, y:84, m:'2. doz ✓', b:10 }, { t:'y', x:62, y:102, m:'hatırlatma', b:10 },
    { t:'r', x:100, y:92, w:32, h:14, rx:3, f:'sari' }, { t:'y', x:116, y:103, m:'şimdi', b:9 },
    { t:'r', x:164, y:66, w:52, h:12, rx:3, f:'buz' }, { t:'r', x:216, y:69, w:8, h:6, f:'gri' }, { t:'l', d:'M224 72 L234 72', w:1.2 }, { t:'r', x:166, y:68, w:20, h:8, f:'#FFE38A' },
    ...kutu(196, 40, 70, 'zamanı geldi', 10) ] },
  insulin: { boy: 134, alt: 'Dedem her yemekten önce insülin almak zorunda.', o: [
    { t:'r', x:24, y:56, w:70, h:14, rx:7, f:'su' }, { t:'r', x:94, y:59, w:12, h:8, rx:2, f:'gri' }, { t:'l', d:'M106 63 L116 63', w:1.2 }, { t:'r', x:20, y:58, w:8, h:10, rx:2, f:'#2F4E8C' },
    { t:'y', x:58, y:50, m:'insülin', b:12 },
    { t:'e', x:180, y:96, rx:44, ry:12, f:'#FFFFFF' }, { t:'e', x:180, y:92, rx:30, ry:7, f:'#F7F0E0' }, { t:'c', x:168, y:90, r:6, f:'turuncu' }, { t:'e', x:190, y:90, rx:8, ry:4, f:'yesil' },
    okt(120, 80, 18), { t:'y', x:180, y:66, m:'yemekten önce', b:11 },
    { t:'c', x:58, y:100, r:12, f:'#FFFFFF' }, { t:'l', d:'M58 92 L58 100 L64 104', w:1.4 }, { t:'y', x:58, y:126, m:'her öğün', b:10 } ] },
  incision: { boy: 134, alt: 'Dizindeki kesiğin izi artık neredeyse görünmüyor.', o: [
    { t:'p', d:'M60 10 L120 10 Q130 60 124 70 Q128 90 116 128 L70 128 Q64 90 66 70 Q56 50 60 10 Z', f:'ten' },
    { t:'e', x:96, y:70, rx:16, ry:12, f:'#FFDCC6' },
    { t:'l', d:'M90 54 L102 86', w:1.4, k:'#F2B8A6' }, { t:'l', d:'M88 60 l6 -2 M90 68 l6 -2 M93 76 l6 -2', w:.8, k:'#F2B8A6' },
    ...kutu(180, 50, 64, 'kesik izi', 11), { t:'l', d:'M148 52 L104 66', w:1.2, kesik:true }, ...kutu(180, 90, 100, 'neredeyse yok', 10) ] },
  hygiene: { boy: 134, alt: 'Hastane çalışanları enfeksiyonun yayılmasını önlemek için düzenli el hijyeni eğitimi alır.', o: [
    { t:'r', x:14, y:14, w:100, h:106, rx:4, f:'#FFFFFF' }, { t:'y', x:64, y:30, m:'el hijyeni', b:11 },
    ...[['1', 'su'], ['2', 'sabun'], ['3', 'ovala'], ['4', 'kurula']].flatMap(([n, m], i) => [{ t:'c', x:30, y:46 + i * 20, r:7, f:'pembe' }, { t:'y', x:30, y:50 + i * 20, m:n, b:9 }, { t:'y', x:72, y:50 + i * 20, m, b:10 }]),
    { t:'p', d:'M140 96 L226 96 L218 118 L148 118 Z', f:'#FFFFFF' }, { t:'l', d:'M200 96 L200 60 Q200 52 192 52 L184 52', w:4, k:'gri' }, { t:'l', d:'M186 58 l0 14', w:1.6, k:'su', kesik:true },
    kis(166, 124, 1, '#7FD8B6', 'ileri'), ...[[176, 84], [186, 80], [180, 74], [192, 88]].map(([x, y]) => ({ t:'c', x, y, r:4, f:'#FFFFFF' })),
    { t:'r', x:206, y:86, w:16, h:9, rx:3, f:'pembe' }, { t:'y', x:214, y:80, m:'sabun', b:9 } ] },
  shortage: { boy: 134, alt: 'Yerel hastanedeki hemşire eksikliği yüzünden bazı hastalar saatlerce bekliyor.', o: [
    { t:'r', x:0, y:116, w:240, h:18, f:'#E3EEF0' },
    ...[30, 54, 78, 102, 126, 150].map((x, i) => kis(x, 116, .65, undefined, 'asagi', 'uzgun')),
    kis(206, 116, 1, '#7FD8B6', 'bas'),
    { t:'c', x:84, y:36, r:16, f:'#FFFFFF' }, { t:'l', d:'M84 26 L84 36 L92 40', w:1.6 }, ...kutu(140, 36, 50, '3 saat', 11),
    ...kutu(206, 48, 76, '1 hemşire', 11) ] },
  'hunter-gatherer': { boy: 134, alt: 'İnsanlık tarihinin büyük kısmında insanlar avcı-toplayıcı olarak yaşadı.', o: [
    { t:'r', x:0, y:110, w:240, h:24, f:'#C9E7A8' },
    kis(52, 110, 1, 'kraft', 'ileri'), { t:'l', d:'M58 92 L104 74', w:2.2, k:'agac' }, { t:'p', d:'M104 74 L112 70 L106 78 Z', f:'gri' },
    { t:'e', x:150, y:86, rx:14, ry:8, f:'#B07A4A' }, { t:'c', x:166, y:78, r:5, f:'#B07A4A' }, { t:'l', d:'M142 92 l0 14 M158 92 l0 14 M166 72 l-3 -8 M168 72 l3 -8', w:1.6 },
    kis(206, 110, .9, '#C9A06A', 'ileri'), { t:'p', d:'M212 92 L228 92 L226 104 L214 104 Z', f:'kraft' },
    { t:'c', x:222, y:60, r:12, f:'#4E9E34' }, ...[[216, 56], [226, 62], [222, 52]].map(([x, y]) => ({ t:'c', x, y, r:2.4, f:'kirmizi' })),
    { t:'y', x:58, y:34, m:'avlanır', b:12 }, { t:'y', x:196, y:34, m:'toplar', b:12 } ] },
  heritage: { boy: 134, alt: 'Eski köprü kasabanın mirası; belediye yerine yenisini yapmak yerine onarmaya karar verdi.', o: [
    { t:'r', x:0, y:96, w:240, h:38, f:'su' }, dalga(110),
    { t:'p', d:'M10 70 L230 70 L230 100 L190 100 Q170 74 150 100 L90 100 Q70 74 50 100 L10 100 Z', f:'tas' },
    { t:'l', d:'M10 70 L230 70', w:2 }, { t:'r', x:110, y:74, w:16, h:10, rx:1, f:'#E3C48A' },
    kis(118, 70, .7, 'turuncu', 'ileri'), { t:'p', d:'M110 44 Q118 36 126 44 Z', f:'sari' },
    ...kutu(60, 30, 66, 'onarılır', 11), ...kutu(184, 30, 80, 'yenisi yok', 11), { t:'y', x:120, y:124, m:'kasabanın mirası', b:11 } ] },
  'trade-off': { boy: 134, alt: 'Birçok öğrenci için yarı zamanlı iş, para kazanmakla ders çalışmaya vakit ayırmak arasında bir tercihtir.', o: [
    ...terazi(120, 30, 10, -10),
    { t:'c', x:60, y:52, r:12, f:'#E8C15A' }, { t:'y', x:60, y:57, m:'₺', b:12 },
    { t:'r', x:166, y:16, w:28, h:22, rx:2, f:'su' }, { t:'l', d:'M180 16 L180 38', w:1.2 },
    { t:'y', x:60, y:110, m:'para', b:12 }, { t:'y', x:180, y:90, m:'ders zamanı', b:11 } ] },
  ritual: { boy: 134, alt: 'Keşişler her yıl baharın ilk gününü eski bir törenle kutlar.', o: [
    { t:'r', x:0, y:110, w:240, h:24, f:'#C9E7A8' },
    { t:'l', d:'M120 110 L120 56', w:5, k:'agac' }, { t:'c', x:120, y:44, r:24, f:'#FFC2DD' }, ...[[104, 36], [134, 34], [120, 54], [110, 52]].map(([x, y]) => ({ t:'c', x, y, r:3, f:'#FF6FAE' })),
    ...[54, 82, 158, 186].map(x => kis(x, 110, .8, 'turuncu', 'bas')),
    { t:'p', d:'M206 40 Q206 26 216 26 Q226 26 226 40 L228 46 L204 46 Z', f:'#E8C15A' }, { t:'l', d:'M216 26 L216 18', w:1.4 },
    { t:'y', x:56, y:34, m:'bahar töreni', b:12 } ] },
  commodity: { boy: 134, alt: 'Yüzyıllar boyunca denizden uzak bölgelerde tuz değerli bir ticaret malıydı.', o: [
    ...terazi(120, 32, 0, 0),
    { t:'p', d:'M48 52 L52 34 Q60 30 68 34 L72 52 Z', f:'#FFFFFF' }, { t:'y', x:60, y:48, m:'tuz', b:9 },
    ...[[176, 48], [184, 46], [180, 42]].map(([x, y]) => ({ t:'e', x, y, rx:7, ry:3, f:'#E8C15A' })),
    { t:'y', x:60, y:110, m:'tuz', b:12 }, { t:'y', x:180, y:110, m:'altın', b:12 }, { t:'y', x:120, y:128, m:'değerli mal', b:11 } ] },
  empire: { boy: 134, alt: 'İmparatorluk en güçlü döneminde kıyıdan doğudaki yüksek dağlara kadar uzanıyordu.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#F3E6C8' }, { t:'p', d:'M4 6 L36 6 Q24 60 36 128 L4 128 Z', f:'su' },
    { t:'p', d:'M36 20 Q100 10 180 30 Q196 70 180 110 Q100 120 36 112 Q28 60 36 20 Z', f:'#E8B4D8' },
    { t:'l', d:'M36 20 Q100 10 180 30 Q196 70 180 110 Q100 120 36 112', w:2, k:'vurgu', kesik:true },
    { t:'p', d:'M176 70 L194 40 L212 70 Z M196 76 L214 48 L232 76 Z', f:'dag' },
    { t:'l', d:'M100 50 L100 80', w:1.6 }, { t:'p', d:'M100 50 L118 54 L100 60 Z', f:'kirmizi' },
    { t:'y', x:20, y:120, m:'kıyı', b:10 }, { t:'y', x:206, y:100, m:'dağlar', b:10 }, ...kutu(100, 100, 82, 'imparatorluk', 10) ] },
  placebo: { boy: 134, alt: 'Denemede gönüllülerin yarısı yeni ilacı, öteki yarısı plasebo aldı.', o: [
    ...iki(),
    ...[[34, 56, '#FF9EC7'], [52, 56, '#FF9EC7'], [70, 56, '#FF9EC7'], [156, 56, '#FF9EC7'], [174, 56, '#FF9EC7'], [192, 56, '#FF9EC7']].map(([x, y, f]) => ({ t:'r', x, y, w:14, h:8, rx:4, f })),
    ...[30, 50, 70, 90].map(x => kis(x, 118, .55, 'su')), ...[152, 172, 192, 212].map(x => kis(x, 118, .55, 'sari')),
    { t:'y', x:59, y:28, m:'ilaç', b:13 }, { t:'y', x:181, y:28, m:'plasebo', b:13 }, ...kutu(181, 80, 86, 'etkisiz hap', 10) ] },
  sensation: { boy: 134, alt: 'Bir saat yerde oturunca sol ayağında hiç his kalmadı.', o: [
    { t:'r', x:0, y:110, w:240, h:24, f:'#E3C9A0' },
    kis(70, 104, 1.1, 'pembe', 'asagi', 'sasir'), { t:'l', d:'M62 104 Q90 112 120 108 L132 108', w:5, k:'#4A6FA5' }, { t:'e', x:136, y:106, rx:9, ry:5, f:'ten' },
    { t:'l', d:'M126 92 l4 4 l-4 4 M138 88 l4 4 l-4 4 M150 94 l4 4 l-4 4', w:1.4, k:'vurgu' },
    { t:'c', x:70, y:40, r:14, f:'#FFFFFF' }, { t:'l', d:'M70 30 L70 40 L78 44', w:1.4 }, { t:'y', x:70, y:70, m:'1 saat', b:10 },
    ...kutu(184, 60, 70, 'his yok', 12) ] },
  ache: { boy: 134, alt: 'Uzun yürüyüşten sonra iki dizimde de hafif bir ağrı hissettim.', o: [
    { t:'l', d:'M10 112 Q60 90 90 100', w:2, k:'kraft', kesik:true },
    kis(130, 116, 1.3, 'su', 'asagi', 'uzgun'),
    { t:'l', d:'M114 102 q-6 -4 0 -8 M146 102 q6 -4 0 -8 M110 110 q-8 -4 0 -10 M150 110 q8 -4 0 -10', w:1.6, k:'kirmizi' },
    ...kutu(196, 50, 70, 'diz ağrısı', 11), ...kutu(50, 70, 76, 'uzun yürüyüş', 10) ] },
  protein: { boy: 134, alt: 'Mercimek, az et yiyen aileler için ucuz bir protein kaynağıdır.', o: [
    { t:'p', d:'M40 70 L140 70 Q136 112 90 114 Q44 112 40 70 Z', f:'#FFFFFF' }, { t:'e', x:90, y:70, rx:50, ry:8, f:'#E8823A' },
    ...[[70, 68], [90, 70], [110, 68], [80, 72], [100, 72]].map(([x, y]) => ({ t:'e', x, y, rx:4, ry:2.4, f:'#C9643A' })),
    { t:'y', x:90, y:126, m:'mercimek', b:12 },
    ...kutu(192, 70, 72, 'bol protein', 11), { t:'l', d:'M156 72 L136 72', w:1.4, kesik:true }, ...kutu(90, 34, 50, 'ucuz', 11) ] },
  cuneiform: { boy: 134, alt: 'Kız kardeşim bütün bir yaz üniversitede basit çivi yazısı metinleri okumayı öğrendi.', o: [
    { t:'r', x:40, y:16, w:110, h:106, rx:14, f:'#D9B98E' },
    ...[30, 50, 70, 90, 110].flatMap((y, r) => [0, 1, 2, 3, 4].map(c => ({ t:'p', d:`M${54 + c * 18 + (r % 2) * 5} ${y} l8 2 l-8 3 Z M${58 + c * 18 + (r % 2) * 5} ${y + 5} l0 6`, f:'#8B6A3A' }))),
    { t:'l', d:'M176 40 L208 92', w:4, k:'kahve' }, { t:'p', d:'M174 36 L180 38 L176 44 Z', f:'kahve' },
    ...kutu(196, 116, 68, 'çivi yazısı', 10) ] },
  willpower: { boy: 134, alt: 'Sınava çalışırken telefonu başka bir odada bırakmak büyük irade ister.', o: [
    { t:'r', x:4, y:6, w:136, h:122, rx:6, f:'#F0E6FF' }, { t:'r', x:140, y:6, w:96, h:122, rx:6, f:'#FFF3D6' }, { t:'r', x:136, y:40, w:8, h:70, f:'agac' },
    { t:'r', x:30, y:92, w:90, h:6, f:'agac' }, kis(70, 92, .9, 'su', 'ileri'), { t:'r', x:86, y:82, w:26, h:10, f:'#FFFFFF' },
    ...telefon(188, 72), { t:'l', d:'M180 70 l-6 -4 M180 80 l-8 0 M218 70 l6 -4 M218 80 l8 0', w:1.4, k:'vurgu' },
    ...kutu(70, 30, 76, 'çalışıyor', 11), ...kutu(196, 30, 80, 'başka oda', 11) ] },
  inflation: { boy: 134, alt: 'Büyükannemler yüksek enflasyon yıllarını hatırlıyor; süt fiyatı her hafta değişiyordu.', o: [
    ...sise(30, 104, '#FFFFFF'),
    ...[['5', 70, 88], ['8', 110, 74], ['12', 150, 58], ['18', 190, 42]].flatMap(([m, x, y]) => [{ t:'p', d:`M${x} ${y} L${x + 30} ${y} L${x + 36} ${y + 10} L${x + 30} ${y + 20} L${x} ${y + 20} Z`, f:'sari' }, { t:'y', x:x + 16, y:y + 15, m:`₺${m}`, b:11 }]),
    { t:'l', d:'M70 118 L226 118', w:1.4 }, ...[1, 2, 3, 4].map(i => ({ t:'y', x:46 + i * 40, y:130, m:`${i}. hafta`, b:9 })),
    { t:'y', x:80, y:30, m:'enflasyon', b:13 } ] },
  rumour: { boy: 134, alt: 'Köy okulunun kapanacağı söylentisi resmî açıklamadan çok önce evden eve yayıldı.', o: [
    { t:'r', x:0, y:112, w:240, h:22, f:'#C9E7A8' },
    ...[[20, 90, 'pembe'], [84, 90, 'sari'], [148, 90, 'su'], [204, 90, 'pembe']].flatMap(([x, y, f]) => ev(x, y, f)),
    ...[[42, 64], [106, 58], [170, 64]].flatMap(([x, y]) => [{ t:'r', x:x - 18, y:y - 12, w:36, h:20, rx:8, f:'#FFFFFF' }, { t:'y', x, y:y + 3, m:'pss…', b:10 }]),
    { t:'l', d:'M60 70 L86 66 M124 66 L152 70 M188 70 L210 82', w:1.4, k:'vurgu', kesik:true },
    ...kutu(120, 24, 116, 'okul kapanacakmış!', 10) ] },
  equilibrium: { boy: 134, alt: 'Dengeli bir ekosistemde avcı ve av sayıları kabaca dengede kalır.', o: [
    ...terazi(120, 40, 0, 0),
    ...[[44, 56], [60, 56], [76, 56], [52, 48], [68, 48]].map(([x, y]) => ({ t:'e', x, y, rx:6, ry:4, f:'gri' })),
    { t:'e', x:180, y:52, rx:12, ry:6, f:'turuncu' }, { t:'c', x:192, y:46, r:4, f:'turuncu' }, { t:'p', d:'M168 52 L156 48 L160 56 Z', f:'turuncu' },
    { t:'y', x:60, y:116, m:'av', b:12 }, { t:'y', x:180, y:116, m:'avcı', b:12 }, { t:'y', x:120, y:22, m:'denge', b:13 } ] },
  fluctuation: { boy: 134, alt: 'Mevsimlere göre değişen sıcaklık, hanelerin ısınmaya harcadığı enerjiyi dalgalandırır.', o: [
    eksen(30, 108, 226, 20),
    { t:'l', d:'M34 40 Q60 36 80 70 Q100 104 130 98 Q160 90 180 50 Q196 30 222 40', w:3, k:'vurgu' },
    { t:'y', x:44, y:30, m:'kış', b:10 }, { t:'y', x:116, y:120, m:'yaz', b:10 }, { t:'y', x:200, y:30, m:'kış', b:10 },
    ...kutu(140, 30, 86, 'enerji kullanımı', 10) ] },
  welfare: { boy: 134, alt: 'Yeni kurallar çiftlik hayvanlarına daha fazla alan vererek hayvan refahını iyileştirmeyi amaçlıyor.', o: [
    ...iki(),
    { t:'r', x:20, y:50, w:78, h:60, f:'#FFFFFF' }, ...tavuk(36, 72), ...tavuk(58, 72), ...tavuk(80, 72), ...tavuk(36, 96), ...tavuk(58, 96), ...tavuk(80, 96),
    { t:'l', d:'M20 50 L20 110 M36 50 L36 110 M52 50 L52 110 M68 50 L68 110 M84 50 L84 110 M98 50 L98 110 M20 50 L98 50 M20 110 L98 110', w:1.2, k:'gri' },
    { t:'r', x:126, y:100, w:110, h:28, rx:10, f:'yesil' }, ...tavuk(150, 92), ...tavuk(196, 98), ...tavuk(172, 70),
    { t:'y', x:59, y:28, m:'dar', b:13 }, { t:'y', x:181, y:28, m:'geniş alan ✓', b:12 } ] },
  bureaucracy: { boy: 134, alt: 'Küçük işletmeler aşırı bürokrasinin kamu desteğine başvurmayı zorlaştırdığından yakınıyor.', o: [
    ...Array.from({ length: 12 }, (_, i) => ({ t:'r', x:110 + (i % 2) * 4, y:116 - i * 8, w:60, h:8, rx:1, f:'#FFFFFF' })),
    ...[[176, 40], [180, 70], [174, 98]].map(([x, y]) => ({ t:'c', x, y, r:8, f:'kirmizi' })),
    kis(60, 124, 1.1, 'su', 'bas', 'uzgun'),
    ...kutu(60, 30, 82, 'formlar', 11), { t:'y', x:212, y:124, m:'mühür', b:10 } ] },
  infrastructure: { boy: 134, alt: 'Kötü altyapı, özellikle güvenilmez yollar, çiftçilerin ürünlerini pazara götürmesini zorlaştırıyor.', o: [
    { t:'r', x:0, y:96, w:240, h:38, f:'#C9A87A' },
    ...[[60, 108], [120, 114], [176, 104]].map(([x, y]) => ({ t:'e', x, y, rx:14, ry:5, f:'#8B6A4A' })),
    ...oto(84, 82, 'kirmizi'), { t:'r', x:90, y:60, w:30, h:12, rx:2, f:'#FF8A4C' }, { t:'c', x:98, y:58, r:5, f:'kirmizi' }, { t:'c', x:110, y:58, r:5, f:'turuncu' },
    { t:'l', d:'M80 108 l-6 4 M146 108 l6 4', w:1.4, k:'vurgu' },
    ...ev(202, 64, 'sari'), { t:'y', x:212, y:56, m:'pazar', b:10 },
    ...kutu(70, 30, 82, 'bozuk yol', 11) ] },
  alliance: { boy: 134, alt: 'Birkaç küçük çiftlik makineleri paylaşmak ve ürünlerini birlikte satmak için bir birlik kurdu.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#EEFFDD' },
    ...ev(20, 28, 'pembe'), ...ev(198, 28, 'sari'), ...ev(110, 98, 'su'),
    { t:'r', x:100, y:52, w:36, h:20, rx:3, f:'kirmizi' }, { t:'r', x:122, y:40, w:14, h:14, f:'buz' }, { t:'c', x:108, y:76, r:7, f:'#4B4B52' }, { t:'c', x:130, y:78, r:5, f:'#4B4B52' },
    { t:'l', d:'M46 42 L94 60 M194 42 L142 60 M120 96 L120 84', w:1.6, k:'vurgu', kesik:true },
    ...kutu(120, 24, 92, 'ortak traktör', 10) ] },
  asteroid: { boy: 134, alt: 'Bilinen asteroitlerin çoğu Mars ile Jüpiter arasındaki geniş bir kuşakta Güneş’in çevresinde döner.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#1F2347' },
    { t:'c', x:-10, y:68, r:40, f:'sari' },
    { t:'c', x:60, y:68, r:8, f:'#E07A5A' }, { t:'y', x:60, y:94, m:'Mars', b:10 },
    ...Array.from({ length: 22 }, (_, i) => ({ t:'e', x:96 + (i % 6) * 10 + (i % 2) * 4, y:24 + i * 4.4, rx:3 + (i % 3), ry:2.4, f:'#A8A29A' })),
    { t:'c', x:196, y:68, r:24, f:'#E3B98A' }, { t:'l', d:'M174 60 L218 60 M172 72 L220 72', w:2, k:'#C9946A' }, { t:'y', x:196, y:110, m:'Jüpiter', b:10 },
    ...kutu(124, 124, 64, 'asteroitler', 9) ] },

  // ---- fiiller ----
  revive: { boy: 134, alt: 'Küçük bir tiyatro topluluğu yüz yıldır sahnelenmeyen oyunları yeniden canlandırmaya çalışıyor.', o: [
    { t:'r', x:10, y:96, w:220, h:14, f:'agac' },
    { t:'p', d:'M10 10 L60 10 Q50 50 60 96 L10 96 Z', f:'kirmizi' }, { t:'p', d:'M230 10 L180 10 Q190 50 180 96 L230 96 Z', f:'kirmizi' },
    kis(100, 96, 1, 'koyu', 'yukari'), kis(140, 96, 1, 'sari', 'bas'),
    { t:'r', x:88, y:16, w:64, h:22, rx:2, f:'#E8D2B4' }, { t:'y', x:120, y:31, m:'eski oyun', b:10 },
    ...kutu(120, 124, 82, 'yeniden sahnede', 10) ] },
  document: { boy: 134, alt: 'Fotoğrafçı on yıl boyunca eski mahalledeki günlük yaşamı belgeledi.', o: [
    ...ev(130, 60, 'pembe'), ...ev(160, 64, 'sari'), ...ev(190, 58, 'su'),
    kis(60, 124, 1.1, 'turuncu', 'ileri'), { t:'r', x:72, y:92, w:22, h:14, rx:2, f:'#4B4B52' }, { t:'c', x:83, y:99, r:4, f:'buz' },
    { t:'l', d:'M96 96 L128 76 M96 104 L128 96', w:1, k:'gri', kesik:true },
    ...[[130, 102], [152, 108], [174, 104]].map(([x, y]) => ({ t:'r', x, y, w:20, h:16, rx:1, f:'#FFFFFF' })),
    ...kutu(196, 30, 54, '10 yıl', 11), { t:'y', x:60, y:34, m:'belgeliyor', b:12 } ] },
  throb: { boy: 134, alt: 'Başparmağımı araba kapısına sıkıştırdıktan sonra saatlerce zonkladı.', o: [
    { t:'r', x:130, y:14, w:90, h:100, rx:6, f:'#4A6FA5' }, { t:'r', x:140, y:22, w:70, h:36, rx:4, f:'buz' },
    { t:'p', d:'M20 100 L20 70 Q20 60 34 60 L70 60 Q84 60 84 70 L84 100 Z', f:'ten' }, { t:'l', d:'M30 72 L70 72 M30 82 L70 82 M30 92 L70 92', w:1.2, k:'#E8B8A0' },
    { t:'p', d:'M80 64 L118 72 Q128 76 126 84 Q122 92 112 90 L80 82 Z', f:'ten' }, { t:'e', x:120, y:82, rx:9, ry:8, f:'#FF8A8A' },
    { t:'l', d:'M110 64 q4 -6 0 -12 M124 68 q6 -4 4 -12 M98 66 q-4 -6 0 -12', w:1.8, k:'kirmizi' },
    ...kutu(60, 40, 76, 'zonkluyor', 11), ...kutu(70, 120, 60, 'saatlerce', 10) ] },
  subside: { boy: 134, alt: 'Fırtına dinene kadar arabada bekledik.', o: [
    { t:'r', x:4, y:6, w:110, h:122, rx:12, f:'#8E9AAF' }, { t:'r', x:126, y:6, w:110, h:122, rx:12, f:'#CFEFFF' },
    ...[[36, 26, 11], [52, 20, 13], [70, 22, 12], [86, 28, 10]].map(([x, y, r]) => ({ t:'c', x, y, r, f:'#5B6478' })), { t:'p', d:'M60 34 L52 50 L60 50 L54 64 L68 46 L60 46 L66 34 Z', f:'sari' },
    { t:'l', d:'M20 40 l-4 10 M34 46 l-4 10 M84 42 l-4 10 M98 48 l-4 10', w:1.4, k:'buz' },
    ...oto(30, 96, 'kirmizi'), ...oto(152, 96, 'kirmizi'), { t:'c', x:210, y:28, r:12, f:'sari' },
    { t:'y', x:59, y:84, m:'fırtına', b:11 }, { t:'y', x:181, y:60, m:'dindi', b:13 } ] },
  regain: { boy: 134, alt: 'Babamın ameliyattan sonra gücünü yeniden kazanması birkaç ay sürdü.', o: [
    { t:'r', x:14, y:80, w:76, h:14, rx:3, f:'#FFFFFF' }, { t:'l', d:'M18 94 L18 112 M86 94 L86 112', w:2, k:'gri' }, { t:'c', x:28, y:72, r:9, f:'ten' }, { t:'r', x:36, y:70, w:52, h:12, rx:5, f:'#9FD6E8' },
    { t:'y', x:52, y:56, m:'ameliyat', b:11 },
    okt(102, 80, 30), { t:'y', x:118, y:66, m:'aylar', b:10 },
    kis(188, 116, 1.15, 'su', 'yukari'), { t:'r', x:166, y:72, w:44, h:4, f:'#4B4B52' }, { t:'r', x:160, y:66, w:8, h:16, rx:2, f:'#4B4B52' }, { t:'r', x:208, y:66, w:8, h:16, rx:2, f:'#4B4B52' },
    { t:'y', x:188, y:40, m:'güçlü', b:12 } ] },
  coagulate: { boy: 134, alt: 'Pıhtılaşmayı önleyen bir madde eklenmezse tüpteki kan dakikalar içinde pıhtılaşır.', o: [
    ...iki(),
    { t:'p', d:'M48 40 L70 40 L70 104 Q59 116 48 104 Z', f:'#FFFFFF' }, { t:'p', d:'M48 64 L70 64 L70 104 Q59 116 48 104 Z', f:'#9E2A2A' },
    ...[[54, 76], [64, 88], [56, 98]].map(([x, y]) => ({ t:'c', x, y, r:3.6, f:'#6B1A1A' })),
    { t:'p', d:'M170 40 L192 40 L192 104 Q181 116 170 104 Z', f:'#FFFFFF' }, { t:'p', d:'M170 64 L192 64 L192 104 Q181 116 170 104 Z', f:'#E53935' }, { t:'r', x:166, y:34, w:30, h:8, rx:2, f:'koyu' },
    { t:'y', x:59, y:28, m:'katkısız: pıhtı', b:11 }, { t:'y', x:181, y:28, m:'katkılı: sıvı', b:11 },
    ...kutu(59, 122, 60, 'dakikalar', 10) ] },
  crave: { boy: 134, alt: 'Uzun yolculukta çocuklar taze meyve canı çekmeye başladı.', o: [
    { t:'r', x:0, y:116, w:240, h:18, f:'yol' }, ...oto(20, 96, 'su'), { t:'c', x:42, y:88, r:4, f:'ten' }, { t:'c', x:56, y:88, r:4, f:'ten' },
    ...[[90, 80, 3], [104, 70, 4.5]].map(([x, y, r]) => ({ t:'c', x, y, r, f:'#FFFFFF' })),
    { t:'e', x:160, y:46, rx:58, ry:30, f:'#FFFFFF' },
    { t:'c', x:132, y:46, r:12, f:'kirmizi' }, { t:'l', d:'M132 34 l2 -6', w:2, k:'agac' },
    { t:'p', d:'M150 58 Q166 30 186 40 Q172 44 162 60 Z', f:'sari' }, { t:'c', x:198, y:52, r:8, f:'turuncu' }, { t:'c', x:190, y:34, r:5, f:'#7B4FA0' }, { t:'c', x:200, y:30, r:5, f:'#7B4FA0' },
    { t:'y', x:80, y:24, m:'canı çekiyor', b:12 } ] },
  outcompete: { boy: 134, alt: 'Birçok gölde insanların saldığı balıklar yiyecek için yerli türlerle yarışıp onları geride bıraktı.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#7FC4E8' },
    { t:'p', d:'M60 70 L40 56 L40 84 Z', f:'#8E939C' }, { t:'p', d:'M60 70 Q100 40 140 70 Q100 100 60 70 Z', f:'#8E939C' }, { t:'c', x:126, y:66, r:2.4, f:'#4B2E5E' }, { t:'p', d:'M138 70 L146 66 L146 74 Z', f:'#C0605A' },
    ...[[152, 66], [160, 72], [154, 78]].map(([x, y]) => ({ t:'c', x, y, r:2.4, f:'kraft' })),
    ...balik(196, 104, 'sari'), ...balik(214, 88, 'sari'), { t:'y', x:206, y:124, m:'aç', b:10 },
    ...kutu(96, 28, 82, 'salınan tür', 10), ...kutu(196, 28, 70, 'yerli tür', 10) ] },
  react: { boy: 134, alt: 'Sodyum suyla öyle şiddetli tepkimeye girer ki genellikle yağın içinde saklanır.', o: [
    ...iki(),
    { t:'p', d:'M30 70 L88 70 L84 112 L34 112 Z', f:'su' }, { t:'r', x:52, y:60, w:14, h:12, rx:2, f:'gri' },
    { t:'l', d:'M58 56 l-8 -10 M60 54 l0 -12 M62 56 l8 -10 M48 54 l-10 -4 M72 54 l10 -4', w:2, k:'turuncu' }, ...[[42, 44], [78, 44], [60, 38]].map(([x, y]) => ({ t:'c', x, y, r:2.6, f:'sari' })),
    { t:'p', d:'M152 50 L210 50 L206 112 L156 112 Z', f:'#F6DE8A' }, { t:'r', x:148, y:42, w:66, h:10, rx:3, f:'gri' }, { t:'r', x:174, y:92, w:14, h:12, rx:2, f:'gri' },
    { t:'y', x:59, y:24, m:'suda: patlar', b:11 }, { t:'y', x:181, y:28, m:'yağda saklanır', b:11 }, { t:'y', x:59, y:124, m:'sodyum', b:10 } ] },
  crash: { boy: 134, alt: 'Borsa çöküşünde amcam birikiminin çoğunu kaybetti.', o: [
    { t:'r', x:14, y:16, w:130, h:84, rx:4, f:'#20304A' },
    { t:'l', d:'M22 40 L44 36 L62 42 L80 30 L96 34 L108 88 L136 92', w:2.4, k:'kirmizi' }, { t:'l', d:'M102 80 L108 90 L114 80', w:2, k:'kirmizi' },
    kis(196, 124, 1.15, 'gri', 'asagi', 'uzgun'),
    { t:'e', x:76, y:116, rx:20, ry:12, f:'pembe' }, { t:'c', x:94, y:110, r:6, f:'pembe' }, { t:'l', d:'M70 104 l8 0', w:2 }, { t:'y', x:76, y:120, m:'0', b:10 },
    ...kutu(196, 40, 52, 'borsa', 11) ] },
  admire: { boy: 134, alt: 'Eski şehrin manzarasını seyretmek için köprüde birkaç dakika durduk.', o: [
    { t:'r', x:4, y:6, w:232, h:80, rx:10, f:'#CFEFFF' },
    { t:'p', d:'M20 86 L20 60 L44 60 L44 50 Q56 34 68 50 L68 60 L96 60 L96 40 L102 30 L108 40 L108 60 L150 60 Q164 40 178 60 L220 60 L220 86 Z', f:'#E8D2B4' },
    { t:'r', x:0, y:86, w:240, h:10, f:'#8E939C' }, { t:'l', d:'M0 86 L240 86 M20 76 L20 86 M60 76 L60 86 M100 76 L100 86 M140 76 L140 86 M180 76 L180 86 M220 76 L220 86 M0 76 L240 76', w:1.6, k:'agac' },
    { t:'r', x:0, y:96, w:240, h:38, f:'su' },
    kis(96, 120, .9, 'pembe', 'asagi', 'mutlu'), kis(124, 120, .9, 'su', 'bas', 'mutlu'),
    ...[[150, 30], [190, 24]].map(([x, y]) => ({ t:'p', d:`M${x} ${y} C${x - 6} ${y - 6} ${x - 12} ${y} ${x - 5} ${y + 6} L${x} ${y + 10} L${x + 5} ${y + 6} C${x + 12} ${y} ${x + 6} ${y - 6} ${x} ${y} Z`, f:'pembe' })),
    ...kutu(60, 24, 66, 'ne güzel!', 11) ] },
  evolve: { boy: 134, alt: 'Yüzyıllar içinde küçük pazar kasabası kalabalık bir liman kentine dönüştü.', o: [
    ...iki(),
    { t:'r', x:14, y:100, w:90, h:28, f:'#C9E7A8' },
    ...[[22, 84, 'kirmizi'], [56, 84, 'su']].flatMap(([x, y, f]) => [{ t:'r', x, y, w:28, h:16, f:'kraft' }, { t:'p', d:`M${x - 2} ${y} L${x + 30} ${y} L${x + 26} ${y - 8} L${x + 2} ${y - 8} Z`, f }]),
    { t:'r', x:126, y:104, w:110, h:24, rx:10, f:'su' },
    ...[[134, 60, 16, 44], [154, 48, 18, 56], [176, 56, 14, 48], [194, 40, 18, 64]].map(([x, y, w, h]) => ({ t:'r', x, y, w, h, f:'#B8BCC4' })),
    { t:'p', d:'M200 104 L232 104 L228 114 L204 114 Z', f:'kirmizi' },
    { t:'y', x:59, y:28, m:'pazar kasabası', b:11 }, { t:'y', x:181, y:28, m:'liman kenti', b:11 } ] },

  // ---- sıfatlar ----
  malleable: { boy: 134, alt: 'Altın o kadar dövülgen ki kâğıttan ince yapraklara dövülebilir.', o: [
    { t:'p', d:'M20 90 L72 90 L64 72 L28 72 Z', f:'#E8C15A' }, { t:'y', x:46, y:112, m:'altın külçe', b:10 },
    { t:'l', d:'M96 40 L126 70', w:5, k:'agac' }, { t:'r', x:80, y:24, w:30, h:16, rx:3, f:'gri' },
    okt(112, 84, 22),
    { t:'p', d:'M146 88 Q180 76 228 88 L226 92 Q180 82 148 92 Z', f:'#F2D06B' },
    { t:'y', x:188, y:112, m:'kâğıttan ince', b:11 }, { t:'y', x:120, y:24, m:'dövülgen', b:13 } ] },
  versatile: { boy: 134, alt: 'Bambu iskeleden mobilyaya kadar her şeyde kullanılan çok yönlü bir malzemedir.', o: [
    { t:'r', x:110, y:30, w:20, h:84, rx:4, f:'#A8C96A' }, { t:'l', d:'M110 54 L130 54 M110 80 L130 80', w:1.6, k:'#6B8B3A' },
    { t:'l', d:'M106 60 L76 50 M134 60 L164 50 M120 116 L120 122', w:1.4, k:'vurgu', kesik:true },
    { t:'l', d:'M20 24 L20 80 M44 24 L44 80 M68 24 L68 80 M16 36 L72 36 M16 58 L72 58', w:2.4, k:'#A8C96A' }, { t:'y', x:44, y:96, m:'iskele', b:11 },
    { t:'l', d:'M176 40 L176 72 M176 56 L208 56 L208 80 M180 56 L180 80', w:3, k:'#A8C96A' }, { t:'y', x:196, y:96, m:'mobilya', b:11 },
    { t:'y', x:120, y:24, m:'bambu', b:12 } ] },
  finite: { boy: 134, alt: 'Fosil yakıtlar sınırlı bir kaynaktır; bir gün tükenecekler.', o: [
    { t:'p', d:'M40 100 A60 60 0 0 1 160 100', f:'yok' }, { t:'l', d:'M40 100 A60 60 0 0 1 160 100', w:6, k:'gri' },
    { t:'l', d:'M44 90 A56 56 0 0 1 56 70', w:6, k:'kirmizi' },
    { t:'l', d:'M100 100 L56 78', w:3, k:'#4B2E5E' }, { t:'c', x:100, y:100, r:5, f:'#4B2E5E' },
    { t:'y', x:44, y:118, m:'boş', b:11 }, { t:'y', x:158, y:118, m:'dolu', b:11 },
    { t:'r', x:186, y:56, w:36, h:52, rx:4, f:'#4B4B52' }, { t:'l', d:'M186 70 L222 70 M186 94 L222 94', w:1.4, k:'gri' },
    ...kutu(100, 30, 82, 'tükenir', 12) ] },
  ubiquitous: { boy: 134, alt: 'Plastik öylesine her yerde ki artık derin deniz tortularında bile bulunuyor.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#2F4E8C' }, { t:'r', x:4, y:108, w:232, h:20, f:'#8B7A5A' },
    { t:'p', d:'M40 100 L76 96 L78 106 L42 108 Z', f:'#BFE6F7' }, { t:'p', d:'M150 96 Q170 84 186 98 Q176 108 156 106 Z', f:'#FFFFFF' },
    ...[[110, 104, 'pembe'], [200, 110, 'sari'], [24, 112, 'turuncu']].map(([x, y, f]) => ({ t:'r', x, y, w:8, h:5, rx:1, f })),
    ...balik(110, 50, '#9FB8A0'),
    ...kutu(120, 24, 104, 'derin denizde bile', 10) ] },
  hectic: { boy: 134, alt: 'Sınav haftası hep yoğun geçer; öğrenciler kütüphane ile sınıflar arasında koşturur.', o: [
    { t:'r', x:6, y:40, w:60, h:60, f:'#E8E2D4' }, { t:'p', d:'M2 40 L36 22 L70 40 Z', f:'gri' }, { t:'y', x:36, y:72, m:'kütüph.', b:10 },
    { t:'r', x:174, y:40, w:60, h:60, f:'#FFE38A' }, { t:'p', d:'M170 40 L204 22 L238 40 Z', f:'kirmizi' }, { t:'y', x:204, y:72, m:'sınıf', b:10 },
    kis(100, 118, .8, 'pembe', 'ileri', 'sasir'), kis(140, 118, .8, 'su', 'ileri', 'sasir'),
    { t:'l', d:'M70 110 L80 110 M74 116 L86 116', w:1.4, k:'gri' },
    ...[[110, 70], [128, 62]].map(([x, y]) => ({ t:'r', x, y, w:12, h:14, rx:1, f:'#FFFFFF' })),
    { t:'l', d:'M80 94 Q120 80 168 94 M160 88 L168 94 L160 100', w:1.4, k:'vurgu', kesik:true },
    ...kutu(120, 24, 76, 'sınav haftası', 10) ] },
  compatible: { boy: 134, alt: 'Şarj aleti son beş yılda üretilen çoğu telefonla uyumlu.', o: [
    { t:'r', x:20, y:54, w:30, h:30, rx:4, f:'#FFFFFF' }, { t:'l', d:'M28 54 l0 -8 M42 54 l0 -8', w:2.4, k:'gri' },
    { t:'l', d:'M50 69 L90 69 M90 69 L120 40 M90 69 L120 70 M90 69 L120 100', w:2, k:'#4B4B52' },
    ...[[124, 22], [124, 52], [124, 82]].flatMap(([x, y], i) => [...telefon(x, y, ['#2A2550', '#4A6FA5', '#C0605A'][i]), { t:'c', x:x + 40, y:y + 18, r:9, f:'yesil' }, { t:'y', x:x + 40, y:y + 23, m:'✓', b:11 }]),
    ...kutu(48, 112, 66, 'uyumlu', 11) ] },
};
