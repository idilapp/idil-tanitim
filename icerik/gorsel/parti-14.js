// Kelime kartı görselleri · 14. parti (18 Kasım 2026): 50 kart. Tarz v11; her sahne kartın kendi örnek cümlesini anlatır.
// Çizimler özgün.
import { ev, dalga, okt, balon, iki, kutu, balik, tilki } from './parca.js';

const kis = (x, y, s, f, kol, yuz) => ({ t:'k', x, y, s, f, kol, yuz });
const eksen = (x0, y0, x1, y1) => ({ t:'l', d:`M${x0} ${y1} L${x0} ${y0} L${x1} ${y0}`, w:1.8 });
const bulut = (x, y, f = '#C9CED6') => [[-14, 2, 9], [0, -4, 12], [14, 2, 9]].map(([a, b, r]) => ({ t:'c', x:x + a, y:y + b, r, f }));
const tekne = (x, y, f) => [{ t:'p', d:`M${x} ${y} L${x + 40} ${y} L${x + 34} ${y + 10} L${x + 6} ${y + 10} Z`, f }, { t:'l', d:`M${x + 20} ${y} L${x + 20} ${y - 18}`, w:1.4 }, { t:'p', d:`M${x + 21} ${y - 18} L${x + 34} ${y - 4} L${x + 21} ${y - 4} Z`, f:'#FFFFFF' }];
const kitapK = (x, y, f) => [{ t:'r', x, y, w:56, h:70, rx:3, f }, { t:'r', x:x + 6, y:y + 8, w:44, h:40, rx:2, f:'#2E5A44' },
  { t:'l', d:`M${x + 10} ${y + 48} Q${x + 28} ${y + 30} ${x + 28} ${y + 14}`, w:1.6, k:'kraft', kesik:true }, ...[[x + 12, y + 20], [x + 42, y + 18], [x + 40, y + 36], [x + 14, y + 38]].map(([a, b]) => ({ t:'p', d:`M${a} ${b} l-5 8 l10 0 Z`, f:'#4E9E34' }))];
const dis = (x, y) => [{ t:'p', d:`M${x - 26} ${y} Q${x - 30} ${y - 40} ${x} ${y - 40} Q${x + 30} ${y - 40} ${x + 26} ${y} L${x + 18} ${y + 50} Q${x + 12} ${y + 56} ${x + 8} ${y + 46} L${x} ${y + 20} L${x - 8} ${y + 46} Q${x - 12} ${y + 56} ${x - 18} ${y + 50} Z`, f:'#FFFFFF' }];
const kaplumbaga = (x, y) => [{ t:'e', x:x - 18, y:y + 6, rx:6, ry:3, f:'#7EC27E' }, { t:'e', x:x + 18, y:y + 6, rx:6, ry:3, f:'#7EC27E' }, { t:'c', x:x + 22, y:y - 2, r:5, f:'#7EC27E' },
  { t:'e', x, y, rx:18, ry:11, f:'#4E9E34' }, { t:'l', d:`M${x - 10} ${y - 4} l10 -4 l10 4 M${x - 10} ${y + 4} l10 4 l10 -4`, w:1, k:'#2E5A44' }, { t:'c', x:x + 24, y:y - 3, r:1, f:'#4B2E5E' }];

export default {
  // ---- isimler ----
  prosperity: { boy: 134, alt: 'Yıllar süren barış küçük balıkçı kasabasına yeni bir refah getirdi.', o: [
    { t:'r', x:0, y:92, w:240, h:42, f:'su' }, dalga(104),
    ...ev(20, 64, 'pembe'), ...ev(48, 60, 'sari'), ...ev(76, 66, 'su'), ...ev(104, 62, 'pembe'), { t:'r', x:0, y:84, w:140, h:8, f:'tas' },
    ...tekne(140, 92, 'kirmizi'), ...tekne(190, 98, 'sari'),
    ...[[30, 30], [46, 26], [62, 30]].map(([x, y]) => ({ t:'e', x, y, rx:8, ry:3.4, f:'#E8C15A' })),
    { t:'kus', x:186, y:40, f:'#FFFFFF', ucan:true }, ...kutu(124, 26, 50, 'refah', 12) ] },
  overload: { boy: 134, alt: 'Alışveriş merkezindeki parlak ışıklar ve yüksek müzik küçük çocukta duyusal yüklenmeye yol açtı.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#F0E6FF' },
    ...[[30, 20, 'sari'], [80, 16, 'pembe'], [160, 18, 'su'], [210, 22, 'sari']].flatMap(([x, y, f]) => [{ t:'c', x, y, r:7, f }, { t:'l', d:`M${x} ${y + 10} l0 8 M${x - 8} ${y + 8} l-5 5 M${x + 8} ${y + 8} l5 5`, w:1.6, k:f }]),
    { t:'r', x:190, y:60, w:24, h:36, rx:3, f:'#4B4B52' }, { t:'c', x:202, y:72, r:6, f:'gri' }, { t:'c', x:202, y:88, r:4, f:'gri' },
    ...[[172, 60], [164, 76], [176, 92]].map(([x, y]) => ({ t:'l', d:`M${x} ${y} l0 -10 l6 -2 M${x} ${y} m-3 0 a3 2 0 1 0 6 0 a3 2 0 1 0 -6 0`, w:1.4, k:'vurgu' })),
    kis(100, 120, 1.1, 'turuncu', 'bas', 'uzgun'), { t:'l', d:'M84 72 q-6 4 0 8 M116 72 q6 4 0 8 M78 66 q-10 8 0 18 M122 66 q10 8 0 18', w:1.6, k:'kirmizi' },
    ...kutu(100, 34, 76, 'çok fazla!', 11) ] },
  plantation: { boy: 134, alt: 'Ailenin adadaki eski şeker kamışı tarlası bugün orada çalışanların hikâyesini anlatan bir müze.', o: [
    { t:'r', x:0, y:64, w:240, h:70, f:'#C9E7A8' },
    ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => ({ t:'l', d:`M${10 + i * 10} 128 l0 -46 M${10 + i * 10} 96 l-5 -6 M${10 + i * 10} 106 l5 -6`, w:1.8, k:'#5FAE5F' })),
    { t:'r', x:146, y:52, w:78, h:46, f:'#FFFFFF' }, { t:'p', d:'M140 52 L185 30 L230 52 Z', f:'kirmizi' }, { t:'l', d:'M156 60 L156 98 M174 60 L174 98 M196 60 L196 98 M214 60 L214 98', w:2, k:'gri' },
    ...kutu(185, 116, 54, 'MÜZE', 11), ...kutu(64, 30, 86, 'şeker kamışı', 10) ] },
  consumption: { boy: 134, alt: 'Hükümet okul çocuklarının şekerli içecek tüketimini azaltmak istiyor.', o: [
    ...[20, 44, 68].map(x => ({ t:'p', d:`M${x} 112 L${x} 70 Q${x} 62 ${x + 6} 60 L${x + 6} 50 L${x + 12} 50 L${x + 12} 60 Q${x + 18} 62 ${x + 18} 70 L${x + 18} 112 Z`, f:'#E57B5A' })),
    ...[24, 48, 72].map(x => ({ t:'r', x, y:80, w:10, h:12, f:'#FFFFFF' })),
    eksen(120, 112, 226, 30), { t:'r', x:132, y:44, w:20, h:68, f:'pembe' }, { t:'r', x:162, y:64, w:20, h:48, f:'pembe' }, { t:'r', x:192, y:86, w:20, h:26, f:'pembe' },
    { t:'l', d:'M140 36 L204 80 M198 74 L205 81 L196 82', w:1.8, k:'vurgu' },
    ...kutu(54, 30, 84, 'şekerli içecek', 10), { t:'y', x:172, y:128, m:'tüketim ↓', b:11 } ] },
  punchline: { boy: 134, alt: 'Hikâyeyi öyle yavaş anlattı ki o sona gelmeden herkes espriyi tahmin etmişti.', o: [
    kis(50, 124, 1.15, 'su', 'bas'), { t:'r', x:16, y:18, w:100, h:28, rx:12, f:'#FFFFFF' }, { t:'y', x:66, y:37, m:'ve sonra… ve…', b:10 },
    ...[[140, 124], [174, 124], [208, 124]].map(([x, y]) => kis(x, y, .8, undefined, 'asagi', 'mutlu')),
    { t:'e', x:174, y:46, rx:52, ry:20, f:'#FFFFFF' }, { t:'c', x:150, y:72, r:3, f:'#FFFFFF' }, { t:'y', x:174, y:51, m:'biliyoruz!', b:12 },
    { t:'y', x:66, y:62, m:'espri?', b:11 } ] },
  motif: { boy: 134, alt: 'Karanlık bir ormana yolculuk, dünyanın birçok yerindeki hikâyelerde görülen bir motiftir.', o: [
    ...kitapK(12, 30, 'kirmizi'), ...kitapK(92, 30, 'su'), ...kitapK(172, 30, 'sari'),
    { t:'y', x:40, y:116, m:'A ülkesi', b:10 }, { t:'y', x:120, y:116, m:'B ülkesi', b:10 }, { t:'y', x:200, y:116, m:'C ülkesi', b:10 },
    { t:'y', x:120, y:22, m:'aynı motif: karanlık orman', b:11 } ] },
  mutation: { boy: 134, alt: 'Kızın hastalığının babasından aldığı bir mutasyondan kaynaklandığı anlaşıldı.', o: [
    { t:'l', d:'M40 10 Q70 40 40 70 Q10 100 40 128 M80 10 Q50 40 80 70 Q110 100 80 128', w:3, k:'su' },
    ...[20, 34, 48, 62, 76, 90, 104, 118].map((y, i) => ({ t:'l', d:`M${44 + (i % 2 ? -6 : 6)} ${y} L${76 + (i % 2 ? 6 : -6)} ${y}`, w:2.4, k:i === 4 ? 'kirmizi' : 'gri' })),
    { t:'c', x:60, y:76, r:12, f:'yok' }, { t:'l', d:'M48 76 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0', w:1.8, k:'kirmizi' },
    kis(156, 100, 1, '#2F4E8C'), kis(204, 116, .75, 'pembe'), okt(166, 92, 20),
    ...kutu(180, 30, 76, 'mutasyon', 11), { t:'y', x:156, y:122, m:'baba', b:10 } ] },
  inflammation: { boy: 134, alt: 'İbuprofen gibi ağrı kesiciler iltihabı da azaltır.', o: [
    ...iki(),
    { t:'p', d:'M42 16 L76 16 Q80 54 76 62 Q80 76 72 120 L46 120 Q40 76 44 62 Q38 50 42 16 Z', f:'ten' }, { t:'e', x:60, y:64, rx:22, ry:16, f:'#FF8A8A' }, { t:'l', d:'M30 50 q-6 -4 0 -8 M88 50 q6 -4 0 -8', w:1.6, k:'kirmizi' },
    { t:'p', d:'M164 16 L198 16 Q202 54 198 62 Q202 76 194 120 L168 120 Q162 76 166 62 Q160 50 164 16 Z', f:'ten' }, { t:'e', x:182, y:64, rx:12, ry:9, f:'#FFD6C6' },
    { t:'r', x:110, y:62, w:20, h:10, rx:5, f:'#FFFFFF' }, { t:'l', d:'M120 62 L120 72', w:1 },
    { t:'y', x:59, y:128, m:'şiş, kızarık', b:11 }, { t:'y', x:181, y:128, m:'iltihap azaldı', b:11 } ] },
  clot: { boy: 134, alt: 'Taramada beynini besleyen damarlardan birinde küçük bir pıhtı görüldü.', o: [
    { t:'p', d:'M4 46 Q120 30 236 46 L236 90 Q120 74 4 90 Z', f:'#FFD6D6' },
    ...[[20, 66], [44, 62], [70, 70], [94, 60]].map(([x, y]) => ({ t:'e', x, y, rx:7, ry:4, f:'kirmizi' })),
    { t:'p', d:'M120 50 Q140 40 154 54 Q160 72 148 84 Q130 92 118 80 Q108 64 120 50 Z', f:'#7A1F1F' },
    { t:'l', d:'M30 76 L70 76 M64 72 L71 76 L64 80', w:1.6, k:'vurgu' },
    ...kutu(140, 112, 48, 'pıhtı', 12), { t:'l', d:'M140 100 L138 90', w:1.2 }, { t:'y', x:200, y:28, m:'kan damarı', b:11 } ] },
  symptom: { boy: 134, alt: 'Yorgunluk birçok hastalığın belirtisi olabilir; bu yüzden doktor birkaç kan testi istedi.', o: [
    kis(56, 124, 1.15, 'pembe', 'asagi', 'uzgun'), { t:'y', x:80, y:62, m:'z z', b:13 }, { t:'l', d:'M50 92 q6 4 12 0', w:1.6, k:'beyaz' },
    ...kutu(56, 30, 82, 'yorgunluk', 11),
    ...[150, 170, 190, 210].map((x, i) => ({ t:'p', d:`M${x} 58 L${x + 12} 58 L${x + 12} 104 Q${x + 6} 112 ${x} 104 Z`, f:'#FFFFFF' })),
    ...[150, 170, 190, 210].map((x, i) => ({ t:'p', d:`M${x} 80 L${x + 12} 80 L${x + 12} 104 Q${x + 6} 112 ${x} 104 Z`, f:'#C0392B' })),
    ...[150, 170, 190, 210].map((x, i) => ({ t:'r', x:x - 2, y:52, w:16, h:7, rx:2, f:['su', 'sari', 'pembe', 'yesil'][i] })),
    { t:'y', x:186, y:128, m:'kan testleri', b:11 } ] },
  antibody: { boy: 134, alt: 'Antikor düzeyi enfeksiyondan sonraki birkaç hafta içinde yükselir, sonra yavaşça düşer.', o: [
    eksen(30, 108, 226, 20), { t:'l', d:'M34 104 Q60 100 80 40 Q96 30 120 50 Q160 80 220 90', w:3, k:'vurgu' },
    ...[[80, 30], [180, 64]].map(([x, y]) => ({ t:'l', d:`M${x} ${y + 10} L${x} ${y} M${x} ${y} L${x - 6} ${y - 7} M${x} ${y} L${x + 6} ${y - 7}`, w:2.4, k:'su' })),
    { t:'y', x:80, y:122, m:'2 hafta', b:10 }, { t:'y', x:196, y:122, m:'aylar', b:10 },
    ...kutu(150, 30, 70, 'antikor', 11) ] },
  coverage: { boy: 134, alt: 'Gezici klinikler uzak köylere gitmeye başlayınca bölgedeki aşılama oranı hızla arttı.', o: [
    { t:'r', x:4, y:6, w:120, h:122, rx:12, f:'#EEFFDD' }, ...ev(20, 30, 'pembe'), ...ev(80, 40, 'sari'), ...ev(36, 92, 'su'),
    { t:'r', x:60, y:84, w:38, h:18, rx:3, f:'#FFFFFF' }, { t:'r', x:72, y:86, w:6, h:14, f:'kirmizi' }, { t:'r', x:68, y:90, w:14, h:6, f:'kirmizi' }, { t:'c', x:68, y:104, r:4, f:'#4B4B52' }, { t:'c', x:90, y:104, r:4, f:'#4B4B52' },
    { t:'l', d:'M70 68 Q60 76 64 82', w:1.2, k:'vurgu', kesik:true },
    eksen(140, 112, 230, 30), { t:'r', x:150, y:86, w:18, h:26, f:'yesil' }, { t:'r', x:176, y:62, w:18, h:50, f:'yesil' }, { t:'r', x:202, y:38, w:18, h:74, f:'yesil' },
    { t:'y', x:186, y:128, m:'aşılama ↑', b:11 } ] },
  deficiency: { boy: 134, alt: 'Kışın açık havada çok az vakit geçirmek D vitamini eksikliğine yol açabilir.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#F0E6FF' },
    { t:'r', x:20, y:20, w:86, h:70, f:'#DDE6EF' }, ...[[40, 40], [70, 60], [90, 34]].map(([x, y]) => ({ t:'c', x, y, r:2.4, f:'#FFFFFF' })), { t:'c', x:84, y:30, r:6, f:'#FFF3C4' },
    { t:'l', d:'M20 55 L106 55 M63 20 L63 90', w:2, k:'agac' },
    kis(150, 116, 1, 'su', 'asagi', 'uzgun'),
    { t:'r', x:182, y:40, w:44, h:16, rx:8, f:'#FFFFFF' }, { t:'r', x:184, y:42, w:8, h:12, rx:4, f:'kirmizi' }, { t:'y', x:204, y:74, m:'D vitamini', b:10 },
    ...kutu(64, 112, 46, 'kış', 11) ] },
  glucose: { boy: 134, alt: 'Bazı koşucular uzun yarışlarda glikoz içeren spor içecekleri içer.', o: [
    { t:'r', x:0, y:110, w:240, h:24, f:'yol' }, { t:'l', d:'M0 122 L240 122', w:1.2, k:'beyaz', kesik:true },
    kis(90, 110, 1.15, 'turuncu', 'bas'), { t:'r', x:96, y:58, w:12, h:24, rx:3, f:'su' }, { t:'r', x:98, y:52, w:8, h:6, f:'#FFFFFF' },
    { t:'l', d:'M60 90 l-12 0 M62 98 l-16 0', w:1.4, k:'gri' },
    { t:'r', x:150, y:40, w:30, h:50, rx:4, f:'su' }, { t:'r', x:154, y:56, w:22, h:18, f:'#FFFFFF' }, { t:'y', x:165, y:69, m:'glikoz', b:7 },
    ...kutu(196, 106, 52, 'enerji', 11), { t:'y', x:60, y:30, m:'uzun yarış', b:12 } ] },
  procedure: { boy: 134, alt: 'Dikişleri almak birkaç dakika süren kısa bir işlemdir.', o: [
    { t:'r', x:10, y:50, w:150, h:40, rx:18, f:'ten' }, { t:'l', d:'M40 70 L130 70', w:1.4, k:'#E8A0A0' },
    { t:'l', d:'M50 62 l8 16 M66 62 l8 16 M82 62 l8 16', w:1.8, k:'#2F4E8C' }, { t:'l', d:'M98 64 l4 2 M114 64 l4 2', w:1, k:'gri' },
    { t:'c', x:170, y:96, r:6, f:'yok' }, { t:'c', x:178, y:104, r:6, f:'yok' }, { t:'l', d:'M174 92 L206 64 M182 100 L210 72', w:2.4, k:'#6B7280' },
    { t:'c', x:200, y:34, r:14, f:'#FFFFFF' }, { t:'l', d:'M200 26 L200 34 L206 38', w:1.4 },
    ...kutu(80, 30, 64, '5 dakika', 11), ...kutu(84, 112, 80, 'dikiş alma', 11) ] },
  enzyme: { boy: 134, alt: 'Tükürükteki bir enzim, siz daha çiğnerken nişastayı parçalamaya başlar.', o: [
    kis(44, 124, 1.3, 'pembe', 'bas', 'mutlu'), { t:'r', x:56, y:72, w:22, h:12, rx:3, f:'#E8C78A' }, { t:'y', x:44, y:30, m:'çiğniyor', b:10 },
    okt(100, 60, 20),
    { t:'l', d:'M130 40 L230 40', w:1.4, k:'gri', kesik:true },
    ...[132, 152, 172, 192, 212].map(x => ({ t:'c', x, y:40, r:7, f:'#F2D8A0' })),
    { t:'p', d:'M150 70 L166 62 L166 78 Z', f:'pembe' }, { t:'c', x:158, y:70, r:12, f:'yok' }, { t:'p', d:'M146 70 A12 12 0 1 1 170 76 L158 70 L170 64 A12 12 0 0 0 146 70 Z', f:'pembe' },
    ...[[188, 74], [206, 68], [222, 78]].map(([x, y]) => ({ t:'c', x, y, r:6, f:'#F2D8A0' })),
    { t:'y', x:180, y:24, m:'nişasta', b:11 }, ...kutu(158, 104, 60, 'enzim', 11) ] },
  mechanism: { boy: 134, alt: 'Terleme vücudun kendini serinletmek için kullandığı başlıca mekanizmadır.', o: [
    { t:'c', x:210, y:28, r:14, f:'sari' },
    kis(80, 124, 1.4, 'turuncu', 'asagi', 'mutlu'),
    ...[[64, 70], [96, 72], [70, 92], [92, 96]].map(([x, y]) => ({ t:'p', d:`M${x} ${y} q-4 6 0 9 q4 -3 0 -9 Z`, f:'su' })),
    { t:'l', d:'M110 76 q8 -4 16 0 M110 90 q8 -4 16 0 M42 76 q-8 -4 -16 0', w:1.6, k:'kirmizi' },
    { t:'r', x:160, y:58, w:10, h:44, rx:5, f:'#FFFFFF' }, { t:'r', x:162, y:80, w:6, h:22, f:'kirmizi' }, { t:'c', x:165, y:104, r:7, f:'kirmizi' }, { t:'l', d:'M180 64 L180 84 M176 80 l4 4 l4 -4', w:1.8, k:'su' },
    ...kutu(200, 118, 64, 'serinler', 11), ...kutu(80, 26, 50, 'terler', 11) ] },
  silicon: { boy: 134, alt: 'Bugün çatılardaki güneş panellerinin çoğunda silisyumdan yapılmış hücreler kullanılır.', o: [
    { t:'p', d:'M20 70 L80 30 L140 70 Z', f:'kirmizi' }, { t:'r', x:30, y:70, w:100, h:54, f:'sari' },
    { t:'p', d:'M50 54 L80 34 L110 54 L80 74 Z', f:'#2F4E8C' }, { t:'l', d:'M65 44 L95 64 M95 44 L65 64', w:1, k:'beyaz' },
    { t:'l', d:'M112 52 L168 52', w:1.2, kesik:true },
    { t:'r', x:170, y:30, w:56, h:56, rx:4, f:'#4A6FA5' }, { t:'l', d:'M184 30 L184 86 M198 30 L198 86 M212 30 L212 86 M170 44 L226 44 M170 58 L226 58 M170 72 L226 72', w:1, k:'#C9D6E8' },
    ...kutu(198, 106, 82, 'silisyum hücre', 10) ] },
  brine: { boy: 134, alt: 'Tatlı su ayrıldıktan sonra tesiste geldiği denizden çok daha tuzlu bir tuzlu su kalır.', o: [
    { t:'r', x:80, y:40, w:80, h:56, rx:4, f:'#E8E2D4' }, { t:'r', x:92, y:52, w:20, h:14, f:'buz' }, { t:'r', x:128, y:52, w:20, h:14, f:'buz' },
    { t:'r', x:6, y:62, w:60, h:30, rx:4, f:'#7FC4E8' }, ...[[18, 70], [36, 82], [52, 72]].map(([x, y]) => ({ t:'r', x, y, w:5, h:5, f:'#FFFFFF' })), okt(66, 77, 12),
    okt(162, 56, 12), { t:'r', x:178, y:40, w:56, h:26, rx:4, f:'#D7F1FF' },
    okt(162, 86, 12), { t:'r', x:178, y:74, w:56, h:30, rx:4, f:'#4F9FC9' }, ...[[184, 80], [196, 86], [208, 78], [220, 90], [190, 94], [214, 96], [202, 98]].map(([x, y]) => ({ t:'r', x, y, w:5, h:5, f:'#FFFFFF' })),
    { t:'y', x:36, y:110, m:'deniz', b:11 }, { t:'y', x:206, y:34, m:'tatlı su', b:10 }, { t:'y', x:206, y:122, m:'tuzlu su', b:11 } ] },
  peer: { boy: 134, alt: 'Matematikte zorlanan öğrenciler bazen öğretmen yerine bir akranlarına sormayı daha kolay bulur.', o: [
    { t:'r', x:0, y:116, w:240, h:18, f:'#E3EEF0' },
    kis(196, 116, 1.2, '#2F4E8C', 'asagi'), { t:'y', x:196, y:56, m:'öğretmen', b:10 },
    kis(60, 116, .9, 'sari', 'bas', 'uzgun'), kis(110, 116, .9, 'pembe', 'ileri', 'mutlu'),
    ...balon(60, 44, 50, '?', 14), ...balon(116, 44, 60, 'şöyle…', 11),
    ...kutu(86, 128, 56, 'akran', 10) ] },
  descendant: { boy: 134, alt: 'Profesör tanınmış bir Osmanlı şairinin uzak bir torunu olduğuna inanıyor.', o: [
    { t:'c', x:120, y:24, r:12, f:'#E8D2B4' }, { t:'l', d:'M128 14 L138 4', w:1.6, k:'agac' }, { t:'y', x:166, y:28, m:'şair', b:11 },
    { t:'l', d:'M120 36 L120 48 M120 48 L80 48 L80 58 M120 48 L160 48 L160 58 M80 70 L80 84 M160 70 L160 80 M80 84 L120 84 L120 96', w:1.4, k:'agac' },
    ...[[80, 64], [160, 64], [120, 102]].map(([x, y]) => ({ t:'c', x, y, r:6, f:'#E8D2B4' })),
    { t:'l', d:'M120 108 L120 112', w:1.4, k:'agac', kesik:true },
    kis(120, 132, .55, 'su'), ...kutu(196, 112, 60, 'torun', 11) ] },
  incentive: { boy: 134, alt: 'Yoğun saatler dışındaki ucuz biletler yolcuları kalabalık trenlerden uzak durmaya teşvik ediyor.', o: [
    ...iki(),
    { t:'r', x:14, y:56, w:90, h:40, rx:6, f:'kirmizi' }, { t:'c', x:30, y:100, r:5, f:'#4B4B52' }, { t:'c', x:88, y:100, r:5, f:'#4B4B52' }, ...[20, 34, 48, 62, 76, 90].map(x => ({ t:'c', x, y:70, r:5, f:'ten' })), ...[26, 40, 54, 68, 82].map(x => ({ t:'c', x, y:84, r:5, f:'ten' })),
    { t:'r', x:136, y:56, w:90, h:40, rx:6, f:'su' }, { t:'c', x:152, y:100, r:5, f:'#4B4B52' }, { t:'c', x:210, y:100, r:5, f:'#4B4B52' }, ...[156, 200].map(x => ({ t:'c', x, y:74, r:5, f:'ten' })),
    { t:'y', x:59, y:28, m:'08:00 · ₺₺₺', b:11 }, { t:'y', x:181, y:28, m:'11:00 · ₺', b:11 },
    { t:'y', x:59, y:118, m:'kalabalık', b:11 }, { t:'y', x:181, y:118, m:'ucuz, rahat', b:11 } ] },
  default: { boy: 134, alt: 'Programı kurduğunuzda İngilizce varsayılandır ama ayarlardan Türkçeye geçebilirsiniz.', o: [
    { t:'r', x:40, y:14, w:160, h:108, rx:8, f:'#FFFFFF' }, { t:'r', x:40, y:14, w:160, h:20, rx:8, f:'gri' }, { t:'y', x:120, y:28, m:'Ayarlar', b:11 },
    { t:'y', x:80, y:56, m:'Dil:', b:11 },
    { t:'r', x:100, y:46, w:84, h:16, rx:4, f:'su' }, { t:'y', x:142, y:58, m:'English ✓', b:10 }, { t:'y', x:142, y:76, m:'varsayılan', b:9 },
    { t:'r', x:100, y:86, w:84, h:16, rx:4, f:'#FFFFFF' }, { t:'y', x:142, y:98, m:'Türkçe', b:10 },
    { t:'l', d:'M200 104 Q214 96 196 92', w:1.4, k:'vurgu' } ] },
  outcome: { boy: 134, alt: 'Maçın sonucunu son dakikaya kadar kimse tahmin edemedi.', o: [
    { t:'r', x:40, y:16, w:160, h:62, rx:6, f:'#20304A' },
    { t:'y', x:90, y:56, m:'2', b:26 }, { t:'y', x:120, y:54, m:'–', b:20 }, { t:'y', x:150, y:56, m:'2', b:26 },
    { t:'r', x:96, y:84, w:48, h:18, rx:4, f:'#FFFFFF' }, { t:'y', x:120, y:98, m:'89:59', b:11 },
    { t:'r', x:0, y:108, w:240, h:26, f:'yesil' }, { t:'y', x:200, y:100, m:'?', b:20 }, { t:'y', x:40, y:100, m:'?', b:20 } ] },
  infant: { boy: 134, alt: 'Hastane özel bakım gereken bebeklerin anne babasının geceyi yanlarında geçirmesine izin veriyor.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#2A2550' }, { t:'p', d:'M206 22 Q194 32 206 44 Q186 44 186 33 Q186 22 206 22 Z', f:'#FFF3C4' },
    { t:'r', x:110, y:70, w:100, h:30, rx:6, f:'#FFFFFF' }, { t:'l', d:'M114 70 L114 56 M206 70 L206 56 M114 56 L206 56 M130 56 L130 70 M150 56 L150 70 M170 56 L170 70 M190 56 L190 70', w:1.4, k:'gri' },
    { t:'l', d:'M118 100 L118 120 M202 100 L202 120', w:2, k:'gri' }, { t:'c', x:136, y:76, r:7, f:'ten' }, { t:'e', x:162, y:80, rx:20, ry:7, f:'#FFE6F2' },
    { t:'r', x:30, y:84, w:44, h:10, rx:3, f:'su' }, kis(52, 90, .9, 'pembe'), { t:'y', x:80, y:60, m:'z z', b:11 },
    ...kutu(160, 30, 50, 'bebek', 11) ] },
  exposure: { boy: 134, alt: 'Lyon’da bir aileyle yaşamak ona her gün konuşulan Fransızcayla temas sağladı.', o: [
    { t:'r', x:20, y:92, w:200, h:10, rx:3, f:'agac' }, { t:'l', d:'M34 102 L34 124 M206 102 L206 124', w:2, k:'agac' },
    kis(48, 92, .9, 'su'), kis(120, 92, .9, 'kirmizi', 'bas'), kis(190, 92, .9, 'sari'),
    ...balon(90, 26, 62, 'Bonjour!', 11), ...balon(180, 36, 52, 'Ça va?', 11),
    { t:'r', x:110, y:84, w:20, h:8, rx:2, f:'#FFFFFF' },
    { t:'r', x:6, y:16, w:8, h:18, f:'su' }, { t:'r', x:14, y:16, w:8, h:18, f:'#FFFFFF' }, { t:'r', x:22, y:16, w:8, h:18, f:'kirmizi' } ] },
  urbanisation: { boy: 134, alt: 'Bölgedeki kentleşme, bir tekstil fabrikasının açılıp çevredeki çiftliklerden işçi çekmesiyle başladı.', o: [
    { t:'r', x:0, y:110, w:240, h:24, f:'#C9E7A8' },
    { t:'r', x:140, y:60, w:80, h:50, f:'#E8E2D4' }, { t:'p', d:'M140 60 L160 46 L160 60 L180 46 L180 60 L200 46 L200 60 L220 46 L220 60 Z', f:'gri' }, { t:'r', x:200, y:24, w:10, h:30, f:'#8E939C' },
    { t:'y', x:180, y:90, m:'tekstil', b:10 },
    ...ev(14, 70, 'pembe'), ...ev(50, 86, 'sari'), kis(84, 110, .6, 'su'), kis(102, 110, .6, 'turuncu'), kis(120, 110, .6, 'pembe'),
    { t:'l', d:'M40 104 Q90 92 134 96 M128 90 L135 96 L128 100', w:1.4, k:'vurgu', kesik:true },
    { t:'y', x:40, y:52, m:'çiftlikler', b:10 }, ...kutu(140, 24, 80, 'kentleşme', 11) ] },
  loneliness: { boy: 134, alt: 'Çocukları evden ayrılınca uzun kış akşamlarının yalnızlığıyla baş etmek için bir koroya katıldı.', o: [
    { t:'r', x:4, y:6, w:110, h:122, rx:12, f:'#3B3570' }, { t:'r', x:126, y:6, w:110, h:122, rx:12, f:'#FFF3C4' },
    { t:'r', x:20, y:24, w:46, h:40, f:'#FFE38A' }, { t:'l', d:'M43 24 L43 64 M20 44 L66 44', w:1.6, k:'agac' }, kis(80, 112, .9, 'gri', 'asagi', 'uzgun'),
    ...[[144, 110], [166, 110], [188, 110], [210, 110], [155, 86], [177, 86], [199, 86]].map(([x, y]) => kis(x, y, .55, undefined, 'asagi', 'mutlu')),
    ...[[160, 40], [196, 34]].map(([x, y]) => ({ t:'l', d:`M${x} ${y} l0 -10 l6 -2 M${x} ${y} m-3 0 a3 2 0 1 0 6 0 a3 2 0 1 0 -6 0`, w:1.4, k:'vurgu' })),
    { t:'y', x:59, y:96, m:'yalnız', b:11 }, { t:'y', x:181, y:24, m:'koro', b:12 } ] },
  migrant: { boy: 134, alt: 'Her ağustos mevsimlik işçiler fındık hasadına yardım etmek için bölgeye gelir.', o: [
    { t:'p', d:'M0 134 L0 80 Q120 50 240 80 L240 134 Z', f:'#9CC27A' },
    ...[[40, 76], [100, 66], [170, 70], [216, 84]].map(([x, y]) => ({ t:'c', x, y, r:18, f:'#4E9E34' })),
    ...[[34, 72], [46, 80], [96, 62], [106, 70], [166, 66], [176, 74]].map(([x, y]) => ({ t:'c', x, y, r:3, f:'#B5823A' })),
    kis(70, 120, .85, 'turuncu', 'ileri'), kis(140, 118, .85, 'su', 'ileri'), { t:'p', d:'M150 96 L166 96 L164 108 L152 108 Z', f:'kraft' },
    ...kutu(196, 22, 64, 'Ağustos', 11), ...kutu(70, 22, 88, 'fındık hasadı', 10) ] },
  nerve: { boy: 134, alt: 'Diş hekimi ağrının çürük dişin içindeki sinirden geldiğini açıkladı.', o: [
    ...dis(80, 54), { t:'p', d:'M64 30 Q80 20 96 30 L92 60 Q80 70 68 60 Z', f:'#FFC2D0' },
    { t:'l', d:'M72 60 L64 96 M88 60 L96 96', w:2.4, k:'kirmizi' }, { t:'e', x:68, y:20, rx:8, ry:5, f:'#6B4430' },
    { t:'p', d:'M130 40 L118 60 L128 60 L116 82 L140 54 L130 54 L140 40 Z', f:'sari' },
    ...kutu(180, 40, 50, 'sinir', 12), { t:'l', d:'M154 42 L94 50', w:1.2, kesik:true }, ...kutu(180, 90, 52, 'çürük', 11), { t:'l', d:'M154 90 L76 24', w:1.2, kesik:true } ] },
  sanitation: { boy: 134, alt: 'Kamptaki sağlık koşullarının iyileşmesi ishal olan çocuk sayısını büyük ölçüde azalttı.', o: [
    { t:'r', x:0, y:96, w:240, h:38, f:'#E3D7B8' },
    ...[[10, 96], [58, 96]].map(([x, y]) => ({ t:'p', d:`M${x} ${y} L${x + 22} ${y - 30} L${x + 44} ${y} Z`, f:'#FFFFFF' })),
    { t:'r', x:110, y:62, w:30, h:34, rx:2, f:'su' }, { t:'l', d:'M140 72 L150 72 L150 80', w:2.4, k:'gri' }, { t:'l', d:'M150 84 l0 6', w:1.4, k:'su', kesik:true },
    { t:'y', x:125, y:56, m:'temiz su', b:9 },
    eksen(168, 112, 230, 34), { t:'r', x:176, y:44, w:14, h:68, f:'kirmizi' }, { t:'r', x:206, y:88, w:14, h:24, f:'kirmizi' },
    { t:'y', x:198, y:128, m:'hasta çocuk ↓', b:10 }, { t:'y', x:56, y:30, m:'kamp', b:12 } ] },
  mineral: { boy: 134, alt: 'Demir ve çinko, vücudun yalnızca az miktarda ihtiyaç duyduğu minerallerdir.', o: [
    { t:'c', x:56, y:56, r:24, f:'#B5651D' }, { t:'y', x:56, y:62, m:'Fe', b:15 }, { t:'y', x:56, y:96, m:'demir', b:11 },
    { t:'c', x:136, y:56, r:24, f:'#A8B4C0' }, { t:'y', x:136, y:62, m:'Zn', b:15 }, { t:'y', x:136, y:96, m:'çinko', b:11 },
    { t:'e', x:200, y:70, rx:20, ry:8, f:'gri' }, { t:'l', d:'M200 78 L200 112', w:3, k:'gri' }, ...[[194, 68], [204, 70]].map(([x, y]) => ({ t:'c', x, y, r:2.4, f:'#6B4430' })),
    { t:'y', x:200, y:50, m:'az miktar', b:11 }, { t:'y', x:96, y:124, m:'mineraller', b:12 } ] },
  rickets: { boy: 134, alt: 'Röntgen, çocuğun eğri bacaklarının raşitizmden kaynaklandığını gösterdi.', o: [
    { t:'r', x:40, y:10, w:160, h:114, rx:4, f:'#20304A' },
    { t:'p', d:'M88 14 Q120 6 152 14 L148 26 Q120 34 92 26 Z', f:'#DDE8F0' }, { t:'p', d:'M100 20 Q76 70 96 112 L104 112 Q86 70 108 20 Z', f:'#DDE8F0' }, { t:'p', d:'M140 20 Q164 70 144 112 L136 112 Q154 70 132 20 Z', f:'#DDE8F0' },
    { t:'e', x:100, y:116, rx:10, ry:4, f:'#DDE8F0' }, { t:'e', x:140, y:116, rx:10, ry:4, f:'#DDE8F0' },
    { t:'l', d:'M80 66 q-6 0 -10 -4 M160 66 q6 0 10 -4', w:1.4, k:'kirmizi' },
    ...kutu(120, 126, 84, 'eğri bacaklar', 10) ] },
  naturalist: { boy: 134, alt: 'Genç bir doğa bilimci olarak yazlarını gölün çevresindeki böcekleri kaydederek geçirdi.', o: [
    { t:'e', x:170, y:110, rx:70, ry:18, f:'su' }, { t:'r', x:0, y:96, w:110, h:38, f:'#C9E7A8' },
    kis(60, 112, 1.1, 'yesil', 'ileri'), { t:'r', x:76, y:84, w:24, h:18, rx:2, f:'#FFFFFF' }, { t:'l', d:'M80 90 l14 0 M80 96 l10 0', w:1, k:'gri' },
    { t:'e', x:160, y:50, rx:16, ry:3, f:'buz' }, { t:'e', x:160, y:58, rx:14, ry:3, f:'buz' }, { t:'l', d:'M146 54 L182 54', w:3, k:'#2F4E8C' },
    { t:'e', x:206, y:76, rx:5, ry:4, f:'turuncu' }, { t:'e', x:214, y:76, rx:5, ry:4, f:'turuncu' }, { t:'l', d:'M210 72 l0 8', w:1.4 },
    ...kutu(60, 30, 86, 'doğa bilimci', 11) ] },

  // ---- fiiller ----
  isolate: { boy: 134, alt: 'Aylarca gece vardiyasında çalışmak onu arkadaşlarından kopardı; o boşken hepsi uyuyordu.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#2A2550' }, { t:'p', d:'M40 18 Q28 28 40 40 Q20 40 20 29 Q20 18 40 18 Z', f:'#FFF3C4' },
    ...[[140, 74, 'pembe'], [176, 70, 'sari'], [208, 76, 'su']].flatMap(([x, y, f]) => [...ev(x - 11, y, f), { t:'y', x:x + 6, y:y - 18, m:'z', b:10 }]),
    { t:'r', x:40, y:62, w:44, h:40, f:'#FFE38A' }, kis(62, 100, .8, 'turuncu'),
    { t:'l', d:'M96 82 L124 82', w:1.4, k:'gri', kesik:true },
    ...kutu(62, 120, 62, 'tek başına', 10), ...kutu(176, 30, 80, 'herkes uyuyor', 9) ] },
  devalue: { boy: 134, alt: 'Ülke parasını devalüe edince yurt dışı tatilleri vatandaşlar için birden çok pahalılaştı.', o: [
    { t:'r', x:20, y:22, w:120, h:70, rx:4, f:'#20304A' }, { t:'y', x:80, y:42, m:'1 € =', b:12 },
    { t:'y', x:66, y:72, m:'₺10', b:15 }, { t:'l', d:'M52 66 L82 66', w:2, k:'kirmizi' }, { t:'y', x:110, y:72, m:'₺20', b:16 },
    { t:'r', x:170, y:56, w:50, h:40, rx:4, f:'turuncu' }, { t:'l', d:'M186 56 l0 -8 l18 0 l0 8', w:2 }, { t:'c', x:178, y:98, r:3, f:'#4B4B52' }, { t:'c', x:212, y:98, r:3, f:'#4B4B52' },
    ...kutu(80, 112, 90, 'tatil pahalı', 11) ] },
  linger: { boy: 134, alt: 'Bazı hastalar enfeksiyon geçtikten sonra haftalarca süren bir öksürükten yakınıyor.', o: [
    ...[0, 1, 2, 3].flatMap(i => [{ t:'r', x:10 + i * 56, y:40, w:50, h:56, rx:4, f:'#FFFFFF' }, { t:'r', x:10 + i * 56, y:40, w:50, h:12, rx:4, f:'pembe' },
      { t:'y', x:35 + i * 56, y:50, m:`${i + 1}. hafta`, b:8 }, { t:'y', x:35 + i * 56, y:80, m:i ? 'öhö' : '✓', b:12 }]),
    { t:'y', x:35, y:116, m:'enfeksiyon bitti', b:9 }, ...kutu(148, 116, 104, 'öksürük sürüyor', 10) ] },
  assemble: { boy: 134, alt: 'Araştırmacılar mühendis, biyolog ve veri bilimcilerden oluşan bir ekip kurdu.', o: [
    { t:'e', x:120, y:110, rx:90, ry:12, f:'agac' },
    kis(60, 104, 1, 'turuncu'), { t:'p', d:'M50 64 Q60 54 70 64 Z', f:'sari' },
    kis(120, 104, 1, 'yesil'), { t:'e', x:136, y:84, rx:6, ry:3, f:'#4E9E34' },
    kis(180, 104, 1, 'su'), { t:'r', x:190, y:82, w:20, h:12, rx:1, f:'#4B4B52' },
    { t:'y', x:60, y:40, m:'mühendis', b:10 }, { t:'y', x:120, y:40, m:'biyolog', b:10 }, { t:'y', x:184, y:40, m:'veri bilimci', b:10 },
    ...kutu(120, 18, 50, 'ekip', 11) ] },
  diverge: { boy: 134, alt: 'DNA çalışmaları kurtlarla tilkilerin milyonlarca yıl önce ortak bir atadan ayrıldığını gösteriyor.', o: [
    { t:'l', d:'M120 128 L120 90 M120 90 Q90 70 70 60 M120 90 Q150 70 170 60', w:4, k:'agac' },
    { t:'c', x:120, y:110, r:8, f:'gri' }, { t:'y', x:156, y:118, m:'ortak ata', b:10 },
    { t:'p', d:'M40 44 Q24 40 18 52 Q28 54 40 48 Z', f:'#8E939C' }, { t:'l', d:'M48 50 l-2 12 M66 50 l2 12', w:1.8 }, { t:'e', x:56, y:44, rx:17, ry:9, f:'#8E939C' },
    { t:'p', d:'M68 38 L88 44 L70 50 Z', f:'#8E939C' }, { t:'p', d:'M68 38 L70 26 L76 37 Z', f:'#8E939C' }, { t:'c', x:77, y:42, r:1.1, f:'#4B2E5E' },
    ...tilki(176, 46), { t:'y', x:56, y:76, m:'kurt', b:11 }, { t:'y', x:186, y:76, m:'tilki', b:11 } ] },
  rehabilitate: { boy: 134, alt: 'Klinik ciddi diz sakatlıklarından sonra futbolcuların iyileşmesine yardım ediyor.', o: [
    { t:'r', x:20, y:112, w:200, h:10, rx:4, f:'#9FD6E8' },
    kis(70, 112, 1.1, 'kirmizi', 'yukari'), { t:'r', x:72, y:100, w:10, h:10, rx:3, f:'#FFFFFF' },
    kis(150, 112, 1.1, '#7FD8B6', 'ileri'), { t:'c', x:200, y:104, r:8, f:'#FFFFFF' }, { t:'l', d:'M196 100 l4 4 l4 -4 M200 104 l0 6', w:1 },
    ...kutu(80, 30, 66, 'dizlik', 11), { t:'l', d:'M80 40 L78 98', w:1.2, kesik:true }, ...kutu(170, 30, 70, 'iyileşme', 11) ] },
  discard: { boy: 134, alt: 'Atılmış balık ağları deniz kuşlarını, fokları ve kaplumbağaları kapana kıstırıp öldürebilir.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#7FC4E8' },
    { t:'l', d:'M70 30 L190 40 L180 110 L80 104 Z M90 30 L96 106 M110 32 L114 106 M130 34 L134 108 M150 36 L152 108 M170 38 L170 110 M76 50 L188 56 M74 70 L186 76 M74 90 L182 94', w:1.2, k:'#E8E2D4' },
    ...kaplumbaga(128, 72),
    ...kutu(196, 116, 64, 'atık ağ', 11), { t:'y', x:40, y:30, m:'tehlike', b:11 } ] },
  dispose: { boy: 134, alt: 'Eski ilaçlar tuvalete dökülmemeli; güvenle imha edilmeleri için eczaneye götürülmeli.', o: [
    ...iki(),
    { t:'p', d:'M40 72 L78 72 L74 106 L44 106 Z', f:'#FFFFFF' }, { t:'e', x:59, y:72, rx:20, ry:6, f:'buz' }, { t:'r', x:48, y:44, w:22, h:24, rx:3, f:'#FFFFFF' },
    { t:'l', d:'M30 40 L90 112 M90 40 L30 112', w:3, k:'kirmizi' },
    { t:'r', x:146, y:56, w:70, h:56, f:'#FFFFFF' }, { t:'r', x:170, y:62, w:22, h:8, f:'yesil' }, { t:'r', x:177, y:55, w:8, h:22, f:'yesil' },
    { t:'r', x:158, y:90, w:46, h:22, rx:2, f:'kraft' }, { t:'y', x:181, y:104, m:'ilaç atık', b:8 },
    { t:'y', x:59, y:28, m:'tuvalet: ✗', b:12 }, { t:'y', x:181, y:28, m:'eczane: ✓', b:12 } ] },
  commemorate: { boy: 134, alt: 'Meydandaki küçük anıt demiryolunu inşa eden işçileri anıyor.', o: [
    { t:'r', x:0, y:112, w:240, h:22, f:'tas' }, { t:'l', d:'M0 120 L240 120 M0 128 L240 128 M20 116 l0 16 M50 116 l0 16 M80 116 l0 16 M160 116 l0 16 M190 116 l0 16 M220 116 l0 16', w:1.6, k:'#6B4430' },
    { t:'r', x:96, y:80, w:48, h:32, f:'#D7DBE2' }, { t:'r', x:102, y:88, w:36, h:16, rx:2, f:'#E8C15A' }, { t:'y', x:120, y:100, m:'işçiler', b:8 },
    kis(120, 80, 1.1, '#A8AEB8', 'tasi'), { t:'l', d:'M106 60 L134 60', w:3, k:'#8E939C' },
    ...kutu(196, 40, 52, 'anıt', 12) ] },
  dismantle: { boy: 134, alt: 'Mühendisler eski reaktörü aylarca parça parça söktü.', o: [
    { t:'r', x:0, y:110, w:240, h:24, f:'#E3EEF0' },
    { t:'p', d:'M40 110 L40 70 Q40 30 90 30 Q140 30 140 70 L140 110 Z', f:'#D7DBE2' },
    { t:'p', d:'M90 30 Q140 30 140 70 L110 70 L110 30 Z', f:'#F7F3E6' }, { t:'l', d:'M110 30 L110 70 L140 70', w:1.6, k:'vurgu', kesik:true },
    ...[[170, 100], [196, 100], [182, 88], [210, 92]].map(([x, y]) => ({ t:'r', x, y, w:22, h:10, rx:1, f:'#D7DBE2' })),
    kis(160, 110, .6, 'turuncu'), { t:'l', d:'M120 50 Q150 60 176 84', w:1.4, k:'vurgu', kesik:true },
    ...kutu(80, 124, 70, 'parça parça', 10), ...kutu(196, 30, 52, 'aylarca', 11) ] },
  penetrate: { boy: 134, alt: 'Güneş ışığı okyanusun yalnızca üst katmanlarına işleyebilir.', o: [
    { t:'r', x:4, y:30, w:232, h:34, f:'#7FD0EA' }, { t:'r', x:4, y:64, w:232, h:30, f:'#3A7FB0' }, { t:'r', x:4, y:94, w:232, h:34, rx:0, f:'#1F2347' },
    { t:'c', x:200, y:16, r:10, f:'sari' },
    { t:'l', d:'M60 10 L70 60 M100 10 L106 62 M140 10 L144 60 M180 22 L182 58', w:2.4, k:'sari', kesik:true },
    ...balik(70, 80, '#9FB8A0'),
    ...kutu(46, 44, 56, 'ışık var', 10), ...kutu(120, 112, 68, 'karanlık', 10) ] },
  harness: { boy: 134, alt: 'Kıyı kasabaları dalgaların ve gelgitin enerjisinden yararlanmanın yollarını arıyor.', o: [
    { t:'r', x:0, y:70, w:150, h:64, f:'su' }, dalga(80, 0, 150), dalga(100, 0, 150),
    { t:'r', x:40, y:60, w:30, h:16, rx:4, f:'sari' }, { t:'l', d:'M55 76 L55 110', w:2, k:'gri' },
    { t:'l', d:'M70 66 Q110 50 150 66 L180 66', w:2, k:'#4B4B52' }, { t:'p', d:'M100 42 L94 54 L100 54 L94 66 L108 50 L102 50 L108 42 Z', f:'sari' },
    { t:'r', x:150, y:66, w:90, h:68, f:'#C9E7A8' }, ...ev(170, 46, 'pembe'), ...ev(200, 50, 'sari'), { t:'c', x:181, y:52, r:3, f:'#FFE38A' },
    ...kutu(80, 24, 90, 'dalga enerjisi', 10) ] },

  // ---- sıfatlar ----
  defunct: { boy: 134, alt: 'Eski fabrika onlarca yıldır kapalı; şimdi daireye dönüştürülüyor.', o: [
    ...iki(),
    { t:'r', x:16, y:58, w:86, h:58, f:'#C9B79A' }, { t:'r', x:76, y:26, w:12, h:32, f:'#A8A29A' },
    ...[24, 50, 76].map(x => ({ t:'r', x, y:70, w:18, h:16, f:'#5B5266' })), { t:'l', d:'M26 72 l14 12 M54 72 l12 10', w:1.2, k:'beyaz' },
    { t:'r', x:138, y:58, w:86, h:58, f:'#F3E6C8' }, ...[146, 172, 198].flatMap(x => [{ t:'r', x, y:66, w:18, h:14, f:'buz' }, { t:'r', x, y:90, w:18, h:14, f:'buz' }]),
    { t:'l', d:'M134 58 L134 116 M228 58 L228 116 M134 84 L228 84', w:1.4, k:'agac', kesik:true },
    { t:'y', x:59, y:28, m:'kapalı fabrika', b:11 }, { t:'y', x:181, y:28, m:'yeni daireler', b:11 } ] },
  monotonous: { boy: 134, alt: 'Montaj hattındaki işçiler işi tekdüze ve yorucu buldu.', o: [
    { t:'r', x:6, y:90, w:228, h:10, rx:5, f:'#6B7280' }, ...[20, 60, 100, 140, 180, 220].map(x => ({ t:'c', x, y:104, r:4, f:'gri' })),
    ...[16, 52, 88, 124, 160, 196].map(x => ({ t:'r', x, y:72, w:22, h:18, rx:2, f:'kraft' })),
    kis(120, 64, .8, 'su', 'ileri', 'uzgun'), { t:'y', x:150, y:28, m:'aynı, aynı, aynı…', b:11 },
    { t:'c', x:40, y:34, r:14, f:'#FFFFFF' }, { t:'l', d:'M40 26 L40 34 L46 38', w:1.4 }, ...kutu(120, 124, 62, 'tekdüze', 11) ] },
  homogeneous: { boy: 134, alt: 'Örneklem oldukça türdeşti; katılımcıların neredeyse hepsi aynı yaşta üniversite öğrencisiydi.', o: [
    ...Array.from({ length: 10 }, (_, i) => kis(30 + i * 20, 104, .7, 'su', 'asagi', 'mutlu')),
    ...kutu(120, 30, 94, 'hepsi öğrenci', 11), ...kutu(120, 124, 70, 'hepsi 20', 11) ] },
  distant: { boy: 134, alt: 'Tepenin üstünden uzaktaki gök gürültüsünü duyabiliyorduk.', o: [
    { t:'p', d:'M0 134 L0 100 Q50 70 100 92 L100 134 Z', f:'#9CC27A' }, kis(40, 86, .8, 'pembe', 'bas'), kis(64, 86, .8, 'su'),
    { t:'p', d:'M100 108 Q170 96 240 104 L240 134 L100 134 Z', f:'#C9E7A8' },
    ...bulut(200, 40, '#8E939C'), { t:'p', d:'M200 52 L194 64 L200 64 L196 74 L206 60 L200 60 L204 52 Z', f:'sari' },
    { t:'l', d:'M90 50 q-6 -6 0 -12 M100 54 q-8 -10 0 -20 M110 58 q-10 -14 0 -28', w:1.4, k:'vurgu', kesik:true },
    ...kutu(150, 82, 58, 'uzakta', 11), { t:'y', x:60, y:30, m:'gürültü!', b:12 } ] },
};
