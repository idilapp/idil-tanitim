// Kelime kartı görselleri · 12. parti (18 Kasım 2026): 50 kart. Tarz v11; her sahne kartın kendi örnek cümlesini anlatır.
// Çizimler özgün.
import { ev, dalga, okt, balon, iki, kutu } from './parca.js';

const kis = (x, y, s, f, kol, yuz) => ({ t:'k', x, y, s, f, kol, yuz });
const eksen = (x0, y0, x1, y1) => ({ t:'l', d:`M${x0} ${y1} L${x0} ${y0} L${x1} ${y0}`, w:1.8 });
const inek = (x, y, s = 1) => [
  { t:'l', d:`M${x - 14 * s} ${y + 8 * s} l0 ${14 * s} M${x - 6 * s} ${y + 9 * s} l0 ${13 * s} M${x + 8 * s} ${y + 9 * s} l0 ${13 * s} M${x + 14 * s} ${y + 8 * s} l0 ${14 * s}`, w:2 },
  { t:'e', x, y, rx:22 * s, ry:12 * s, f:'#FFFFFF' }, { t:'e', x:x - 8 * s, y:y - 3 * s, rx:6 * s, ry:4 * s, f:'#4B4B52' },
  { t:'e', x:x + 26 * s, y:y - 8 * s, rx:8 * s, ry:7 * s, f:'#FFFFFF' }, { t:'e', x:x + 31 * s, y:y - 5 * s, rx:5 * s, ry:4 * s, f:'pembe' }, { t:'c', x:x + 26 * s, y:y - 10 * s, r:1, f:'#4B2E5E' } ];
const sivrisinek = (x, y) => [{ t:'l', d:`M${x - 6} ${y + 2} l-4 8 M${x} ${y + 2} l0 9 M${x + 6} ${y + 2} l4 8 M${x + 10} ${y - 1} l8 -1`, w:1 },
  { t:'e', x:x - 4, y:y - 6, rx:6, ry:3, f:'buz' }, { t:'e', x:x + 4, y:y - 6, rx:6, ry:3, f:'buz' }, { t:'e', x, y, rx:9, ry:3, f:'#4B4B52' }, { t:'c', x:x + 9, y:y - 1, r:2.6, f:'#4B4B52' }];
const cuval = (x, y, f) => [{ t:'r', x:x - 2, y:y + 2, w:24, h:24, rx:7, f }, { t:'l', d:`M${x + 2} ${y + 7} q8 3 16 0`, w:1.4, k:'agac' }, { t:'l', d:`M${x + 6} ${y + 2} l2 -4 M${x + 14} ${y + 2} l-2 -4`, w:1.6, k:'agac' }];
const kitap = (x, y, w, f) => ({ t:'r', x, y, w, h:7, rx:1, f });
const panel = (x, y) => [{ t:'p', d:`M${x} ${y} L${x + 40} ${y} L${x + 48} ${y + 22} L${x + 8} ${y + 22} Z`, f:'#2F4E8C' }, { t:'l', d:`M${x + 13} ${y} L${x + 21} ${y + 22} M${x + 27} ${y} L${x + 35} ${y + 22} M${x + 4} ${y + 11} L${x + 44} ${y + 11}`, w:1, k:'beyaz' },
  { t:'l', d:`M${x + 26} ${y + 22} L${x + 26} ${y + 34}`, w:2, k:'gri' }];
const pil = (x, y, dolu) => [{ t:'r', x, y, w:30, h:16, rx:3, f:'#FFFFFF' }, { t:'r', x:x + 30, y:y + 5, w:4, h:6, f:'gri' },
  ...(dolu ? [{ t:'r', x:x + 3, y:y + 3, w:24, h:10, rx:1, f:'yesil' }] : [{ t:'r', x:x + 3, y:y + 3, w:4, h:10, rx:1, f:'kirmizi' }])];
const turbin = (x, y) => [{ t:'l', d:`M${x} ${y} L${x} ${y + 50}`, w:2.4, k:'gri' }, { t:'l', d:`M${x} ${y} L${x} ${y - 18} M${x} ${y} L${x + 16} ${y + 9} M${x} ${y} L${x - 16} ${y + 9}`, w:2.6, k:'#8E939C' }, { t:'c', x, y, r:2.4, f:'gri' }];
const ari = (x, y, f) => [{ t:'e', x:x - 2, y:y - 7, rx:7, ry:3.5, f:'buz' }, { t:'e', x:x + 6, y:y - 7, rx:7, ry:3.5, f:'buz' },
  { t:'e', x, y, rx:14, ry:6, f }, { t:'l', d:`M${x - 6} ${y - 5} l0 10 M${x} ${y - 6} l0 12 M${x + 6} ${y - 5} l0 10`, w:2.2, k:'#3B3446' }, { t:'c', x:x + 15, y:y - 1, r:4, f:'#3B3446' }];

export default {
  // ---- isimler ----
  plateau: { boy: 134, alt: 'Birkaç aylık hızlı ilerlemeden sonra birçok dil öğrencisi bir platoya ulaşır.', o: [
    eksen(30, 112, 226, 20), { t:'l', d:'M30 108 Q70 104 100 56 L216 52', w:3, k:'vurgu' },
    { t:'r', x:110, y:40, w:100, h:24, rx:4, f:'#FFF3C4' }, kis(166, 52, .5, 'pembe', 'asagi', 'uzgun'),
    ...kutu(160, 86, 56, 'plato', 12), { t:'y', x:66, y:126, m:'aylar', b:10 }, { t:'y', x:58, y:30, m:'ilerleme', b:11 } ] },
  decline: { boy: 134, alt: 'Madenin kapanması kasaba nüfusunda sert bir düşüşe yol açtı.', o: [
    { t:'p', d:'M14 90 Q14 52 46 52 Q78 52 78 90 Z', f:'#5B5266' }, { t:'l', d:'M26 62 L66 90 M66 62 L26 90', w:3, k:'kirmizi' }, { t:'r', x:6, y:90, w:82, h:8, f:'tas' },
    { t:'y', x:46, y:116, m:'maden kapandı', b:10 },
    eksen(108, 112, 230, 20),
    { t:'r', x:122, y:30, w:24, h:82, f:'su' }, { t:'r', x:160, y:58, w:24, h:54, f:'su' }, { t:'r', x:198, y:90, w:24, h:22, f:'su' },
    { t:'l', d:'M134 24 L210 84 M202 82 L211 85 L208 76', w:2, k:'kirmizi' }, { t:'y', x:170, y:128, m:'nüfus', b:11 } ] },
  censorship: { boy: 134, alt: 'Sıkı sansür altında gazetelerin protestoları yazmasına izin verilmiyordu.', o: [
    { t:'r', x:30, y:14, w:120, h:110, rx:2, f:'#FFFFFF' }, { t:'y', x:90, y:32, m:'GAZETE', b:13 },
    { t:'r', x:40, y:40, w:100, h:12, f:'#2A2530' },
    { t:'l', d:'M40 62 L140 62 M40 72 L110 72', w:1.4, k:'gri' }, { t:'r', x:40, y:80, w:100, h:8, f:'#2A2530' }, { t:'r', x:40, y:94, w:80, h:8, f:'#2A2530' },
    { t:'l', d:'M40 112 L130 112', w:1.4, k:'gri' },
    { t:'r', x:160, y:56, w:70, h:28, rx:3, f:'#FFE0E0' }, { t:'l', d:'M160 56 L230 56 L230 84 L160 84 Z', w:2, k:'kirmizi' }, { t:'y', x:195, y:75, m:'SANSÜR', b:13 } ] },
  distraction: { boy: 134, alt: 'Yandaki inşaattan gelen gürültü sınav sırasında gerçek bir dikkat dağıtıcıydı.', o: [
    { t:'r', x:6, y:20, w:120, h:104, f:'#F0E6FF' }, { t:'r', x:126, y:20, w:4, h:104, f:'gri' },
    { t:'r', x:30, y:92, w:70, h:6, f:'agac' }, kis(64, 92, .9, 'su', 'ileri', 'uzgun'), { t:'r', x:70, y:84, w:22, h:8, f:'#FFFFFF' },
    { t:'l', d:'M58 40 l-6 -6 M64 36 l0 -8 M70 40 l6 -6', w:1.4, k:'kirmizi' },
    { t:'r', x:136, y:110, w:100, h:14, f:'kraft' }, kis(188, 110, .9, 'turuncu', 'ileri'), { t:'p', d:'M176 78 Q188 66 200 78 Z', f:'sari' },
    { t:'l', d:'M202 90 L210 110 M204 92 L214 92', w:3, k:'#4B4B52' },
    { t:'y', x:184, y:44, m:'TAK TAK!', b:13 }, { t:'l', d:'M146 60 l-8 4 M146 70 l-10 0 M146 80 l-8 -4', w:1.6, k:'vurgu' },
    { t:'y', x:66, y:116, m:'sınav', b:11 } ] },
  monopoly: { boy: 134, alt: 'Devlet onlarca yıl tuz satışında tekeldi; başka kimsenin tuz dükkânı açmasına izin yoktu.', o: [
    { t:'r', x:76, y:40, w:88, h:70, f:'#FFFFFF' }, { t:'p', d:'M70 40 L120 20 L170 40 Z', f:'su' }, { t:'r', x:96, y:52, w:48, h:16, rx:2, f:'#E3F7FF' }, { t:'y', x:120, y:64, m:'TUZ', b:11 },
    { t:'r', x:108, y:80, w:24, h:30, f:'agac' }, { t:'l', d:'M120 20 L120 8', w:1.4 }, { t:'p', d:'M120 8 L134 12 L120 16 Z', f:'kirmizi' },
    ...[[10, 60], [184, 60]].flatMap(([x, y]) => [{ t:'r', x, y, w:46, h:50, f:'#E8E2D4' }, { t:'l', d:`M${x} ${y} L${x + 46} ${y + 50} M${x + 46} ${y} L${x} ${y + 50}`, w:2.4, k:'kirmizi' }]),
    { t:'r', x:0, y:110, w:240, h:6, f:'tas' }, ...kutu(120, 126, 62, 'tek satıcı', 10) ] },
  algorithm: { boy: 134, alt: 'Müzik uygulaması, beğendiğin şarkılara benzeyenleri önermek için bir algoritma kullanır.', o: [
    { t:'r', x:14, y:16, w:62, h:108, rx:10, f:'#2A2550' }, { t:'r', x:20, y:28, w:50, h:84, rx:4, f:'#FFFFFF' },
    { t:'p', d:'M45 52 C38 44 30 50 37 58 L45 66 L53 58 C60 50 52 44 45 52 Z', f:'pembe' }, { t:'y', x:45, y:84, m:'beğendin', b:9 },
    okt(84, 70, 18),
    { t:'c', x:128, y:70, r:16, f:'gri' }, { t:'c', x:128, y:70, r:6, f:'#FFFFFF' },
    { t:'l', d:'M128 50 l0 -4 M128 90 l0 4 M108 70 l-4 0 M148 70 l4 0 M114 56 l-3 -3 M142 84 l3 3 M142 56 l3 -3 M114 84 l-3 3', w:3, k:'gri' },
    okt(152, 70, 16),
    ...[40, 64, 88].map((y, i) => ({ t:'r', x:176, y, w:58, h:18, rx:4, f:['#E3F9FF', '#FFE6F2', '#EEFFDD'][i] })),
    ...[49, 73, 97].map(y => ({ t:'l', d:`M184 ${y} l4 -6 l0 10 M196 ${y} l30 0`, w:1.2 })),
    { t:'y', x:205, y:30, m:'öneriler', b:11 }, { t:'y', x:128, y:112, m:'algoritma', b:11 } ] },
  rival: { boy: 134, alt: 'İki komşu kasaba yıllardır rakip; takımlarının her maçında biletler tükeniyor.', o: [
    { t:'r', x:0, y:86, w:240, h:48, f:'yesil' }, { t:'l', d:'M120 86 L120 134', w:1.6, k:'beyaz' }, { t:'c', x:120, y:110, r:6, f:'#FFFFFF' },
    kis(70, 112, 1, 'kirmizi', 'yukari'), kis(170, 112, 1, 'su', 'yukari'),
    { t:'l', d:'M30 50 L30 86', w:1.6 }, { t:'p', d:'M30 50 L52 56 L30 62 Z', f:'kirmizi' },
    { t:'l', d:'M210 50 L210 86', w:1.6 }, { t:'p', d:'M210 50 L188 56 L210 62 Z', f:'su' },
    { t:'y', x:120, y:66, m:'rakip', b:16 }, ...kutu(120, 26, 104, 'biletler tükendi', 10) ] },
  pace: { boy: 134, alt: 'Yürüyüş grubu yavaş bir tempoyla ilerliyor; yıllardır spor yapmayanlar bile katılabiliyor.', o: [
    { t:'p', d:'M0 116 Q120 100 240 112 L240 134 L0 134 Z', f:'#C9E7A8' },
    kis(60, 112, .9, 'turuncu'), kis(92, 110, .9, 'su'), kis(124, 108, .9, 'gri'), { t:'l', d:'M134 90 L138 108', w:2, k:'agac' }, kis(156, 108, .9, 'pembe'),
    { t:'c', x:200, y:52, r:22, f:'#FFFFFF' }, { t:'l', d:'M182 52 A18 18 0 0 1 218 52', w:3, k:'yesil' }, { t:'l', d:'M200 52 L186 44', w:2.4, k:'vurgu' },
    ...kutu(200, 92, 66, 'yavaş tempo', 10), { t:'y', x:70, y:34, m:'herkes katılabilir', b:12 } ] },
  correlation: { boy: 134, alt: 'Araştırmacılar öğrencilerin uyku süresiyle sınav sonuçları arasında güçlü bir ilişki buldu.', o: [
    eksen(36, 106, 226, 16),
    ...[[50, 94], [62, 90], [76, 86], [88, 80], [100, 82], [112, 72], [124, 68], [138, 62], [150, 58], [162, 50], [176, 46], [190, 40], [204, 34], [96, 74], [144, 66]].map(([x, y]) => ({ t:'c', x, y, r:3.6, f:'pembe' })),
    { t:'l', d:'M44 98 L214 30', w:2, k:'vurgu', kesik:true },
    { t:'y', x:130, y:124, m:'uyku saati →', b:11 }, { t:'y', x:22, y:60, m:'not', b:11 } ] },
  remedy: { boy: 134, alt: 'Büyükannemin boğaz ağrısına en sevdiği çare ballı ılık sütü.', o: [
    kis(48, 124, 1.15, '#C9A6FF', 'ileri'), { t:'p', d:'M38 84 Q48 78 58 84', f:'#FFFFFF' },
    { t:'r', x:98, y:72, w:40, h:44, rx:6, f:'#FFFFFF' }, { t:'l', d:'M138 82 q12 0 12 12 q0 12 -12 12', w:2.4 }, { t:'r', x:102, y:76, w:32, h:6, f:'#F7F0E0' },
    { t:'l', d:'M108 64 q-4 -6 0 -12 M118 64 q-4 -6 0 -12 M128 64 q-4 -6 0 -12', w:1.6, k:'gri' },
    { t:'r', x:170, y:76, w:40, h:40, rx:8, f:'#F2B33D' }, { t:'r', x:168, y:68, w:44, h:10, rx:3, f:'kraft' }, { t:'y', x:190, y:102, m:'bal', b:12 },
    ...kutu(140, 30, 92, 'ballı ılık süt', 11) ] },
  rash: { boy: 134, alt: 'Bebek yeni bir çamaşır tozunu denedikten sonra kırmızı döküntüyle kaplandı.', o: [
    kis(70, 120, 1.5, '#FFE6F2', 'yukari', 'uzgun'), { t:'l', d:'M68 64 q4 -6 8 -2', w:1.6, k:'agac' },
    ...[[60, 80], [80, 80], [64, 70], [76, 72], [62, 100], [78, 104], [50, 82], [90, 82]].map(([x, y]) => ({ t:'c', x, y, r:2.2, f:'kirmizi' })),
    { t:'r', x:160, y:50, w:52, h:62, rx:4, f:'#9FD6E8' }, { t:'y', x:186, y:76, m:'YENİ', b:11 }, { t:'y', x:186, y:92, m:'toz', b:11 },
    { t:'c', x:212, y:48, r:10, f:'kirmizi' }, { t:'y', x:212, y:53, m:'✗', b:12 }, okt(118, 80, 32),
    { t:'y', x:70, y:30, m:'döküntü', b:13 } ] },
  asthma: { boy: 134, alt: 'Kuzenim çocukluğundan beri astımı olduğu için yanında hep bir inhaler taşır.', o: [
    { t:'p', d:'M60 40 Q30 40 30 80 Q30 112 56 112 Q70 112 70 90 L70 50 Q70 40 60 40 Z', f:'#FFB3C8' },
    { t:'p', d:'M100 40 Q130 40 130 80 Q130 112 104 112 Q90 112 90 90 L90 50 Q90 40 100 40 Z', f:'#FFB3C8' },
    { t:'l', d:'M80 14 L80 46 M80 46 L70 56 M80 46 L90 56', w:3, k:'#E89AAE' }, { t:'l', d:'M46 70 l12 -4 M114 70 l-12 -4', w:1.4, k:'kirmizi' },
    { t:'p', d:'M170 40 L192 40 L196 90 L166 90 Z', f:'su' }, { t:'r', x:160, y:86, w:42, h:14, rx:4, f:'#FFFFFF' },
    { t:'l', d:'M156 94 l-10 -2 M156 98 l-12 2', w:1.6, k:'gri' },
    ...kutu(80, 124, 50, 'astım', 11), ...kutu(184, 120, 62, 'inhaler', 11) ] },
  breakthrough: { boy: 134, alt: 'Yıllarca başarısız deneylerden sonra ekip sonunda büyük bir atılım yaptı.', o: [
    ...[20, 50, 80].flatMap(x => [{ t:'p', d:`M${x + 6} 70 L${x + 6} 88 L${x} 104 L${x + 24} 104 L${x + 18} 88 L${x + 18} 70 Z`, f:'#C9CED6' }, { t:'l', d:`M${x} 72 L${x + 24} 100 M${x + 24} 72 L${x} 100`, w:2, k:'kirmizi' }]),
    { t:'p', d:'M160 50 L160 76 L144 104 L196 104 L180 76 L180 50 Z', f:'#9FE07A' }, { t:'r', x:156, y:44, w:28, h:8, rx:2, f:'gri' },
    ...[[146, 38], [200, 40], [170, 26], [210, 70], [134, 70]].map(([x, y]) => ({ t:'l', d:`M${x} ${y - 6} l0 12 M${x - 6} ${y} l12 0`, w:1.8, k:'sari' })),
    { t:'y', x:62, y:50, m:'yıllarca ✗', b:12 }, { t:'y', x:170, y:124, m:'atılım!', b:14 } ] },
  fault: { boy: 134, alt: 'Jeologlar fayın vadiyi kestiği yeri haritaladı.', o: [
    { t:'p', d:'M4 50 L120 50 L104 128 L4 128 Z', f:'#C9A87A' }, { t:'p', d:'M120 64 L236 64 L236 128 L104 128 Z', f:'#C9A87A' },
    { t:'l', d:'M4 70 L116 70 M4 92 L110 92 M4 112 L106 112', w:2.4, k:'#9C7A52' }, { t:'l', d:'M116 84 L236 84 M110 106 L236 106', w:2.4, k:'#9C7A52' },
    { t:'p', d:'M4 50 L120 50 L120 44 L4 44 Z', f:'yesil' }, { t:'p', d:'M120 64 L236 64 L236 58 L120 58 Z', f:'yesil' },
    { t:'l', d:'M120 44 L104 128', w:3, k:'kirmizi' },
    { t:'l', d:'M80 30 L80 14 M76 20 l4 -6 l4 6 M160 26 L160 42 M156 36 l4 6 l4 -6', w:1.8, k:'vurgu' },
    ...kutu(196, 30, 40, 'fay', 12) ] },
  aftershock: { boy: 134, alt: 'Ana depremden sonraki ay sismologlar yüzlerce artçı sarsıntı kaydetti.', o: [
    { t:'r', x:8, y:24, w:224, h:76, rx:4, f:'#FFFFFF' },
    { t:'l', d:'M14 62 L40 62 L44 30 L48 96 L52 40 L56 84 L60 62 ' + Array.from({ length: 30 }, (_, i) => `L${66 + i * 5.4} ${62 + (i % 2 ? 1 : -1) * (12 - i * .35)}`).join(' '), w:1.6, k:'kirmizi' },
    ...kutu(52, 116, 82, 'ana deprem', 10), ...kutu(164, 116, 84, 'yüzlerce artçı', 10), { t:'y', x:120, y:16, m:'1 ay', b:12 } ] },
  desalination: { boy: 134, alt: 'Ada eskiden tatlı suyu gemiyle getirtiyordu; arıtma tesisi açılınca kendi suyunu üretmeye başladı.', o: [
    ...iki(),
    { t:'r', x:4, y:88, w:110, h:40, rx:10, f:'su' }, { t:'p', d:'M20 80 L80 80 L72 96 L28 96 Z', f:'kirmizi' }, { t:'r', x:30, y:66, w:20, h:14, rx:2, f:'#FFFFFF' }, { t:'r', x:54, y:66, w:20, h:14, rx:2, f:'#FFFFFF' },
    { t:'y', x:40, y:76, m:'su', b:8 }, { t:'y', x:64, y:76, m:'su', b:8 }, okt(84, 74, 18),
    { t:'r', x:126, y:96, w:110, h:32, rx:10, f:'su' }, { t:'p', d:'M126 96 L236 96 L236 72 L170 72 Z', f:'kraft' },
    { t:'r', x:176, y:50, w:44, h:28, f:'#E8E2D4' }, { t:'r', x:182, y:56, w:10, h:10, f:'buz' }, { t:'r', x:200, y:56, w:10, h:10, f:'buz' },
    { t:'l', d:'M158 96 L176 70', w:3, k:'#7FC4E8' },
    { t:'y', x:59, y:28, m:'önce: gemiyle', b:11 }, { t:'y', x:181, y:28, m:'şimdi: tesis', b:11 } ] },
  membrane: { boy: 134, alt: 'Bu yöntemde deniz suyu, suyu geçirip tuzun çoğunu tutan bir zara doğru itilir.', o: [
    { t:'r', x:14, y:30, w:94, h:80, f:'#7FC4E8' }, { t:'r', x:132, y:30, w:94, h:80, f:'#D7F1FF' },
    { t:'l', d:'M120 30 L120 110', w:4, k:'vurgu', kesik:true },
    ...[[30, 44], [52, 60], [74, 46], [40, 80], [64, 94], [90, 70], [96, 98], [30, 100]].map(([x, y]) => ({ t:'r', x, y, w:6, h:6, f:'#FFFFFF' })),
    ...[[150, 50], [176, 70], [200, 52], [160, 94], [190, 96], [212, 80]].map(([x, y]) => ({ t:'c', x, y, r:3.4, f:'su' })),
    { t:'l', d:'M20 70 L44 70 M38 64 L45 70 L38 76', w:2.4, k:'kirmizi' },
    { t:'y', x:61, y:24, m:'tuzlu', b:11 }, { t:'y', x:179, y:24, m:'tatlı', b:11 }, ...kutu(120, 124, 34, 'zar', 11) ] },
  surplus: { boy: 134, alt: 'Çiftlik fazla tahıl üretti; fazlası kış için depolandı.', o: [
    { t:'r', x:0, y:112, w:240, h:22, f:'#E8D9A0' },
    ...[[20, 86], [44, 86]].flatMap(([x, y]) => cuval(x, y, 'kraft')),
    { t:'y', x:42, y:76, m:'gerekli', b:10 },
    { t:'p', d:'M150 112 L150 60 Q170 36 190 60 L190 112 Z', f:'#C9CED6' }, { t:'r', x:196, y:70, w:36, h:42, f:'kirmizi' }, { t:'p', d:'M192 70 L214 54 L236 70 Z', f:'#8B3A3A' },
    ...[[88, 86], [110, 86], [99, 62]].flatMap(([x, y]) => cuval(x, y, '#F2D06B')),
    { t:'l', d:'M130 90 L146 90 M140 84 L147 90 L140 96', w:2, k:'vurgu' },
    ...kutu(106, 36, 54, 'fazla', 11), { t:'y', x:192, y:30, m:'kışa', b:12 } ] },
  ancestor: { boy: 134, alt: 'Atalarının aile çiftliğinin önünde durduğu eski bir fotoğraf buldu.', o: [
    { t:'r', x:20, y:14, w:150, h:104, rx:2, f:'#FFFFFF' }, { t:'r', x:28, y:22, w:134, h:88, f:'#E8D2B4' },
    { t:'p', d:'M110 64 L136 46 L162 64 Z', f:'#B9A08A' }, { t:'r', x:114, y:64, w:44, h:34, f:'#D6BCA2' },
    kis(52, 104, .9, '#B9A08A'), kis(76, 104, .9, '#C9AE90'), kis(96, 104, .6, '#B9A08A'),
    { t:'r', x:28, y:98, w:134, h:12, f:'#D6BCA2' },
    kis(206, 124, 1.1, 'pembe', 'ileri'), ...kutu(206, 40, 58, 'atalar', 12) ] },
  envoy: { boy: 134, alt: 'Kral komşusuyla barış anlaşmasını görüşmek için bir elçi gönderdi.', o: [
    { t:'r', x:6, y:50, w:52, h:70, f:'tas' }, ...[6, 22, 38].map(x => ({ t:'r', x, y:42, w:12, h:8, f:'tas' })),
    kis(32, 112, .8, 'kirmizi'), { t:'p', d:'M24 76 L26 68 L30 74 L32 66 L34 74 L38 68 L40 76 Z', f:'sari' },
    { t:'r', x:182, y:50, w:52, h:70, f:'#C9B79A' }, ...[182, 198, 214].map(x => ({ t:'r', x, y:42, w:12, h:8, f:'#C9B79A' })),
    kis(120, 120, 1, 'su', 'ileri'), { t:'r', x:134, y:94, w:14, h:10, rx:3, f:'#F3E6C8' }, { t:'l', d:'M134 94 l0 10 M148 94 l0 10', w:1.4, k:'kirmizi' },
    { t:'l', d:'M64 108 L100 108', w:1.6, k:'vurgu', kesik:true }, { t:'l', d:'M154 108 L178 108', w:1.6, k:'vurgu', kesik:true },
    ...kutu(120, 40, 50, 'elçi', 12), ...kutu(208, 30, 50, 'barış?', 10) ] },
  neighbourhood: { boy: 134, alt: 'Bu mahalleyi seçtik çünkü okul, pazar ve park yürüme mesafesinde.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#EEFFDD' },
    { t:'c', x:120, y:68, r:56, f:'yok' }, { t:'l', d:'M64 68 a56 56 0 1 0 112 0 a56 56 0 1 0 -112 0', w:1.4, k:'vurgu', kesik:true },
    ...ev(109, 60, 'pembe'),
    { t:'r', x:146, y:28, w:30, h:22, f:'sari' }, { t:'y', x:161, y:22, m:'okul', b:10 },
    { t:'r', x:66, y:28, w:30, h:22, f:'#FFB36B' }, { t:'y', x:81, y:22, m:'pazar', b:10 },
    { t:'c', x:160, y:104, r:10, f:'#4E9E34' }, { t:'c', x:174, y:100, r:8, f:'#4E9E34' }, { t:'y', x:167, y:126, m:'park', b:10 },
    kis(88, 108, .55, 'su'), ...kutu(206, 70, 50, 'yürüyerek', 9) ] },
  household: { boy: 134, alt: 'Evimizde akşam yemeğini kim pişirirse bulaşık yıkamaz.', o: [
    ...iki(),
    kis(44, 120, 1, 'turuncu', 'ileri'), { t:'r', x:58, y:92, w:34, h:18, rx:3, f:'gri' }, { t:'l', d:'M66 86 q-3 -4 0 -8 M78 86 q-3 -4 0 -8', w:1.4, k:'gri' },
    kis(168, 120, 1, 'su', 'ileri'), { t:'r', x:184, y:96, w:40, h:16, rx:2, f:'#9FD6E8' }, ...[[192, 94], [202, 92], [212, 94]].map(([x, y]) => ({ t:'c', x, y, r:4, f:'#FFFFFF' })),
    { t:'y', x:59, y:28, m:'yemeği yapan', b:11 }, { t:'y', x:181, y:28, m:'bulaşığı yıkayan', b:11 },
    { t:'y', x:59, y:46, m:'dinlenir', b:10 }, { t:'y', x:181, y:46, m:'öteki', b:10 } ] },
  temperament: { boy: 134, alt: 'İki kız kardeşin mizacı çok farklı: biri sakin, öteki kolayca heyecanlanır.', o: [
    ...iki(),
    kis(59, 116, 1.1, 'su', 'asagi'), { t:'r', x:72, y:96, w:14, h:12, rx:2, f:'#FFFFFF' }, { t:'l', d:'M30 60 l58 0', w:2, k:'su' },
    kis(181, 104, 1.1, 'turuncu', 'yukari', 'sasir'),
    ...[[150, 50], [214, 46], [160, 80], [208, 84]].map(([x, y]) => ({ t:'l', d:`M${x} ${y - 6} l0 12 M${x - 6} ${y} l12 0`, w:1.8, k:'sari' })),
    { t:'l', d:'M146 64 q6 -12 12 0 t12 0 M196 64 q6 -12 12 0 t12 0', w:2, k:'kirmizi' },
    { t:'y', x:59, y:28, m:'sakin', b:13 }, { t:'y', x:181, y:28, m:'heyecanlı', b:13 } ] },
  drawback: { boy: 134, alt: 'Güneş enerjisinin en büyük sakıncası bulutlu günlerde az, geceleri hiç elektrik üretmemesidir.', o: [
    { t:'r', x:4, y:6, w:110, h:122, rx:12, f:'#CFEFFF' }, { t:'r', x:126, y:6, w:110, h:122, rx:12, f:'#2A2550' },
    { t:'c', x:84, y:30, r:12, f:'sari' }, ...panel(22, 60), ...pil(40, 104, true),
    { t:'p', d:'M206 22 Q194 32 206 44 Q186 44 186 33 Q186 22 206 22 Z', f:'#FFF3C4' }, ...panel(144, 60), ...pil(162, 104, false),
    { t:'y', x:40, y:30, m:'gündüz', b:11 }, { t:'y', x:162, y:34, m:'gece: yok', b:11 } ] },
  legacy: { boy: 134, alt: 'Antik su kemerleri Romalıların Avrupa’da bıraktığı mühendislik mirasının parçasıdır.', o: [
    { t:'p', d:'M0 134 L0 100 Q120 86 240 100 L240 134 Z', f:'#C9E7A8' },
    { t:'r', x:10, y:36, w:220, h:12, f:'tas' },
    ...[10, 50, 90, 130, 170].map(x => ({ t:'p', d:`M${x} 48 L${x + 40} 48 L${x + 40} 104 L${x + 34} 104 L${x + 34} 72 Q${x + 20} 56 ${x + 6} 72 L${x + 6} 104 L${x} 104 Z`, f:'tas' })),
    { t:'r', x:210, y:48, w:20, h:56, f:'tas' },
    { t:'l', d:'M14 42 L226 42', w:2, k:'su' },
    ...kutu(120, 22, 80, 'Roma mirası', 11) ] },
  phenomenon: { boy: 134, alt: 'Kuzey ışıkları, Güneş’ten gelen yüklü parçacıkların atmosfere çarpmasıyla oluşan doğal bir olaydır.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#1F2347' },
    { t:'p', d:'M20 70 Q40 20 70 50 Q100 14 130 46 Q160 10 190 40 Q210 20 226 50 L226 64 Q200 40 180 60 Q150 30 128 62 Q100 34 70 64 Q44 40 20 80 Z', f:'#5FE0A0' },
    { t:'p', d:'M60 66 Q90 40 120 60 Q150 36 180 58 L180 66 Q150 46 120 70 Q90 50 60 74 Z', f:'#D88BE8' },
    ...[[30, 20], [100, 24], [160, 18], [214, 26], [60, 30]].map(([x, y]) => ({ t:'c', x, y, r:1.4, f:'sari' })),
    { t:'p', d:'M4 128 L4 100 Q60 84 120 98 Q180 110 236 96 L236 128 Z', f:'kar' },
    ...kutu(120, 116, 86, 'kuzey ışıkları', 10) ] },
  transition: { boy: 134, alt: 'Birçok ülke kömürden yenilenebilir enerjiye kademeli geçiş planlıyor.', o: [
    { t:'r', x:0, y:110, w:240, h:24, f:'#C9E7A8' },
    { t:'r', x:20, y:70, w:56, h:40, f:'gri' }, { t:'r', x:56, y:30, w:12, h:40, f:'#8E939C' },
    ...[[62, 22, 8], [70, 12, 10], [82, 4, 8]].map(([x, y, r]) => ({ t:'c', x, y, r, f:'#8E939C' })), { t:'y', x:48, y:126, m:'kömür', b:11 },
    okt(92, 82, 30),
    ...turbin(150, 60), ...turbin(188, 50), ...panel(196, 92),
    { t:'y', x:180, y:30, m:'yenilenebilir', b:11 } ] },
  contingency: { boy: 134, alt: 'Her hastanenin ana elektrik kesilirse diye yedek planı olmalı.', o: [
    { t:'r', x:70, y:40, w:90, h:80, f:'#FFFFFF' }, { t:'r', x:104, y:50, w:22, h:22, f:'kirmizi' }, { t:'r', x:111, y:44, w:8, h:34, f:'#FFFFFF' }, { t:'r', x:98, y:57, w:34, h:8, f:'#FFFFFF' },
    ...[[80, 84], [140, 84], [80, 100], [140, 100]].map(([x, y]) => ({ t:'r', x, y, w:12, h:10, f:'#FFF1A8' })),
    { t:'l', d:'M10 40 L40 40 L52 52 M58 52 L70 60', w:2.4, k:'gri' }, { t:'l', d:'M44 44 l12 12 M56 44 l-12 12', w:2.4, k:'kirmizi' },
    { t:'r', x:180, y:90, w:46, h:30, rx:4, f:'sari' }, { t:'c', x:194, y:105, r:7, f:'gri' }, { t:'p', d:'M212 96 L206 106 L212 106 L208 116 L218 102 L212 102 Z', f:'turuncu' },
    { t:'l', d:'M180 104 L160 104', w:2.4, k:'yesil' },
    { t:'y', x:30, y:28, m:'ana hat', b:10 }, ...kutu(202, 72, 58, 'yedek', 12) ] },
  photosynthesis: { boy: 134, alt: 'Yeşil bitkiler fotosentezle güneş ışığını kullanıp su ve karbondioksiti şekere çevirir, oksijen bırakır.', o: [
    { t:'c', x:30, y:28, r:14, f:'sari' }, { t:'l', d:'M44 38 L96 60', w:2, k:'turuncu', kesik:true },
    { t:'r', x:0, y:106, w:240, h:28, f:'#8B6A4A' },
    { t:'l', d:'M120 106 L120 50', w:3, k:'#4E9E34' }, { t:'e', x:104, y:68, rx:16, ry:8, f:'yesil' }, { t:'e', x:138, y:58, rx:16, ry:8, f:'yesil' }, { t:'e', x:110, y:44, rx:12, ry:7, f:'yesil' },
    { t:'l', d:'M120 106 L110 122 M120 106 L132 124 M120 106 L120 128', w:1.4, k:'#E8D2B4' },
    { t:'l', d:'M100 126 L100 112 M96 116 l4 -4 l4 4', w:1.6, k:'su' }, { t:'y', x:76, y:126, m:'su', b:10 },
    { t:'l', d:'M200 80 L162 70 M168 66 L161 70 L167 75', w:1.6, k:'gri' }, { t:'y', x:212, y:92, m:'CO₂', b:11 },
    { t:'l', d:'M160 46 L200 30 M194 28 L201 30 L197 36', w:1.6, k:'su' }, { t:'y', x:214, y:26, m:'O₂', b:11 },
    ...kutu(64, 84, 50, 'şeker', 10) ] },
  wavelength: { boy: 134, alt: 'Görünür ışığın her rengi farklı bir dalga boyuna karşılık gelir; en kısası mordur.', o: [
    { t:'l', d:'M14 46 q20 -26 40 0 t40 0 t40 0 t40 0 t40 0', w:3, k:'kirmizi' },
    { t:'l', d:'M14 98 q6 -16 12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0', w:3, k:'koyu' },
    { t:'l', d:'M34 66 L74 66 M34 62 l0 8 M74 62 l0 8', w:1.4 }, { t:'l', d:'M20 114 L32 114 M20 110 l0 8 M32 110 l0 8', w:1.4 },
    ...kutu(196, 34, 66, 'kırmızı: uzun', 9), ...kutu(196, 84, 60, 'mor: kısa', 9), { t:'y', x:110, y:128, m:'dalga boyu', b:12 } ] },

  // ---- fiiller ----
  tempt: { boy: 134, alt: 'Eve dönerken taze ekmek kokusu beni fırına çekti.', o: [
    { t:'r', x:10, y:40, w:90, h:84, f:'#F3E6C8' }, { t:'p', d:'M4 40 L106 40 L96 26 L14 26 Z', f:'kirmizi' }, { t:'y', x:55, y:38, m:'FIRIN', b:10 },
    { t:'r', x:20, y:56, w:70, h:30, f:'buz' }, ...[[34, 74], [55, 72], [76, 74]].map(([x, y]) => ({ t:'e', x, y, rx:10, ry:6, f:'#D99A4E' })),
    { t:'r', x:40, y:90, w:30, h:34, f:'agac' },
    { t:'l', d:'M100 64 q20 -8 40 0 t40 0 M100 76 q20 -8 40 0 t30 0', w:2, k:'#D99A4E' },
    kis(196, 124, 1.1, 'su', 'asagi', 'mutlu'), ...balon(198, 34, 56, 'mmm…', 12) ] },
  perceive: { boy: 134, alt: 'Birçok alışverişçi 19,99’u 20’den çok daha ucuz algılar.', o: [
    { t:'p', d:'M20 50 L84 50 L96 70 L84 90 L20 90 Z', f:'sari' }, { t:'y', x:56, y:76, m:'19,99', b:16 },
    { t:'p', d:'M144 50 L208 50 L220 70 L208 90 L144 90 Z', f:'sari' }, { t:'y', x:180, y:76, m:'20,00', b:16 },
    kis(120, 128, .8, 'pembe', 'asagi', 'sasir'), ...balon(120, 32, 92, '“çok ucuz!”', 11),
    { t:'y', x:56, y:112, m:'ucuz sanılır', b:11 }, { t:'y', x:180, y:112, m:'pahalı', b:11 } ] },
  transmit: { boy: 134, alt: 'Türküler yüzyıllar boyunca anne babadan çocuklara sözlü olarak aktarıldı.', o: [
    { t:'r', x:0, y:120, w:240, h:14, f:'#C9E7A8' },
    kis(40, 120, 1.15, 'gri', 'bas'), kis(120, 120, 1, 'turuncu', 'bas'), kis(196, 120, .7, 'sari'),
    { t:'l', d:'M58 62 Q80 50 100 66 M138 66 Q160 58 180 80', w:1.6, k:'vurgu', kesik:true },
    ...[[76, 50], [90, 56], [156, 56], [170, 64]].map(([x, y]) => ({ t:'l', d:`M${x} ${y} l0 -10 l6 -2 M${x} ${y} m-3 0 a3 2 0 1 0 6 0 a3 2 0 1 0 -6 0`, w:1.4, k:'vurgu' })),
    { t:'y', x:40, y:30, m:'dede', b:11 }, { t:'y', x:120, y:30, m:'anne', b:11 }, { t:'y', x:196, y:50, m:'çocuk', b:11 } ] },
  soothe: { boy: 134, alt: 'Ilık bir banyo uzun bir yürüyüş gününden sonra ağrıyan kasları rahatlatır.', o: [
    { t:'p', d:'M20 70 L220 70 L210 114 Q206 122 196 122 L44 122 Q34 122 30 114 Z', f:'#FFFFFF' }, { t:'r', x:26, y:70, w:188, h:14, f:'#9FD6E8' },
    { t:'c', x:60, y:64, r:12, f:'ten' }, { t:'l', d:'M54 62 q3 2 6 0 M62 62 q3 2 6 0 M56 69 q4 3 8 0', w:1.2 },
    { t:'l', d:'M70 74 Q120 66 170 74', w:3, k:'ten' },
    { t:'l', d:'M90 54 q-4 -6 0 -12 q4 -6 0 -12 M120 54 q-4 -6 0 -12 q4 -6 0 -12 M150 54 q-4 -6 0 -12 q4 -6 0 -12', w:1.6, k:'gri' },
    { t:'l', d:'M44 122 L40 132 M196 122 L200 132', w:3, k:'gri' }, ...kutu(196, 34, 64, 'rahatlar', 11) ] },
  spread: { boy: 134, alt: 'Sivrisinekler hastalığı bir çiftlik hayvanından ötekine yayabilir.', o: [
    { t:'r', x:0, y:110, w:240, h:24, f:'#C9E7A8' },
    ...inek(42, 88, .85), ...inek(176, 88, .85),
    { t:'c', x:40, y:84, r:3, f:'kirmizi' }, { t:'c', x:52, y:90, r:2.4, f:'kirmizi' },
    { t:'l', d:'M70 60 Q110 20 160 62', w:1.6, k:'vurgu', kesik:true }, ...sivrisinek(116, 36),
    ...kutu(120, 124, 70, 'hastalık', 10) ] },
  ban: { boy: 134, alt: 'Kasabamız bütün açık pazarlarda plastik poşeti yasakladı.', o: [
    ...iki(),
    { t:'p', d:'M36 60 L82 60 L86 108 L32 108 Z', f:'#E8F4FF' }, { t:'l', d:'M44 60 q4 -16 10 0 M64 60 q4 -16 10 0', w:2 },
    { t:'c', x:59, y:84, r:30, f:'yok' }, { t:'l', d:'M29 84 a30 30 0 1 0 60 0 a30 30 0 1 0 -60 0 M38 63 L80 105', w:3.4, k:'kirmizi' },
    { t:'p', d:'M156 64 L206 64 L204 110 L158 110 Z', f:'#D9B98E' }, { t:'l', d:'M166 64 q8 -18 14 0 M186 64 q8 -18 14 0', w:2, k:'agac' },
    { t:'c', x:212, y:104, r:10, f:'yesil' }, { t:'y', x:212, y:109, m:'✓', b:12 },
    { t:'y', x:59, y:28, m:'plastik: yasak', b:11 }, { t:'y', x:181, y:28, m:'bez çanta', b:11 } ] },
  record: { boy: 134, alt: 'Hemşire hastanın ateşini dört saatte bir kaydetti.', o: [
    kis(40, 124, 1.15, '#7FD8B6', 'ileri'), { t:'l', d:'M60 98 L76 90', w:1.6 },
    { t:'r', x:84, y:20, w:140, h:104, rx:4, f:'#FFFFFF' },
    { t:'l', d:'M84 44 L224 44 M84 64 L224 64 M84 84 L224 84 M84 104 L224 104 M136 20 L136 124', w:1, k:'gri' },
    { t:'y', x:110, y:36, m:'saat', b:10 }, { t:'y', x:180, y:36, m:'ateş', b:10 },
    ...[['08', '38,2'], ['12', '37,8'], ['16', '37,5'], ['20', '37,1']].flatMap(([a, b], i) => [{ t:'y', x:110, y:58 + i * 20, m:a, b:10 }, { t:'y', x:180, y:58 + i * 20, m:b, b:10 }]) ] },
  accelerate: { boy: 134, alt: 'Artan sıcaklıklar dağ buzullarının erimesini hızlandırabilir.', o: [
    { t:'r', x:14, y:24, w:10, h:60, rx:5, f:'#FFFFFF' }, { t:'r', x:16, y:40, w:6, h:44, f:'kirmizi' }, { t:'c', x:19, y:88, r:8, f:'kirmizi' }, { t:'l', d:'M32 50 L32 30 M28 34 l4 -4 l4 4', w:1.8, k:'vurgu' },
    ...[[44, 1], [110, .7], [176, .4]].flatMap(([x, k]) => [{ t:'p', d:`M${x} 110 L${x + 26} 50 L${x + 52} 110 Z`, f:'dag' }, { t:'p', d:`M${+(x + 26 - 26 * 40 * k / 60).toFixed(1)} ${50 + 40 * k} L${x + 26} 50 L${+(x + 26 + 26 * 40 * k / 60).toFixed(1)} ${50 + 40 * k} Z`, f:'kar' }]),
    okt(98, 90, 10), okt(164, 90, 10),
    { t:'y', x:130, y:128, m:'erime hızlanıyor', b:12 }, { t:'y', x:130, y:30, m:'buzul', b:12 } ] },
  divert: { boy: 134, alt: 'Onarım sırasında trafik şehir merkezinden geçen bir güzergâha yönlendirilecek.', o: [
    { t:'r', x:0, y:84, w:240, h:20, f:'yol' },
    { t:'r', x:100, y:76, w:40, h:10, f:'#FFFFFF' }, ...[100, 116, 132].map(x => ({ t:'r', x, y:76, w:8, h:10, f:'kirmizi' })), { t:'p', d:'M110 104 L120 84 L130 104 Z', f:'turuncu' },
    { t:'p', d:'M80 84 L80 50 L160 50 L160 84 L148 84 L148 62 L92 62 L92 84 Z', f:'yol' },
    ...ev(96, 26, 'pembe'), ...ev(124, 28, 'sari'),
    { t:'l', d:'M40 94 L86 94 L86 56 L154 56 L154 94 L210 94 M204 88 L211 94 L204 100', w:2, k:'vurgu', kesik:true },
    { t:'y', x:40, y:122, m:'onarım: kapalı', b:11 }, ...kutu(196, 40, 70, 'şehir içinden', 10) ] },
  expire: { boy: 134, alt: 'İlacın son kullanma tarihi geçtiyse, değişmemiş görünse bile kullanılmamalı.', o: [
    { t:'r', x:20, y:44, w:92, h:62, rx:4, f:'#FFFFFF' }, { t:'r', x:20, y:44, w:92, h:16, rx:4, f:'su' }, { t:'y', x:66, y:56, m:'İLAÇ', b:10 },
    { t:'y', x:66, y:84, m:'SKT 03/2025', b:11 },
    { t:'r', x:146, y:30, w:72, h:64, rx:4, f:'#FFFFFF' }, { t:'r', x:146, y:30, w:72, h:16, rx:4, f:'kirmizi' }, { t:'y', x:182, y:74, m:'11/2026', b:12 },
    { t:'c', x:66, y:120, r:10, f:'kirmizi' }, { t:'y', x:66, y:125, m:'✗', b:12 }, { t:'y', x:182, y:114, m:'bugün', b:11 },
    { t:'y', x:66, y:30, m:'tarihi geçti', b:12 } ] },
  resemble: { boy: 134, alt: 'Bazı zararsız böcekler eşek arısına çok benzer; bu da onları avcılardan korur.', o: [
    ...iki(), { t:'l', d:'M41 74 l-6 0', w:1.6 }, ...ari(55, 74, '#F2C14E'), ...ari(177, 74, '#F7D774'),
    { t:'y', x:120, y:80, m:'≈', b:20 },
    { t:'y', x:59, y:28, m:'eşek arısı', b:12 }, { t:'y', x:181, y:28, m:'zararsız sinek', b:11 },
    { t:'y', x:59, y:114, m:'iğneli', b:11 }, { t:'y', x:181, y:114, m:'iğnesiz', b:11 } ] },
  disperse: { boy: 134, alt: 'Birçok bitki tohumlarını uzaklara yaymak için kuşlara güvenir.', o: [
    { t:'r', x:0, y:112, w:240, h:22, f:'#C9E7A8' },
    { t:'l', d:'M40 112 L40 60', w:4, k:'agac' }, { t:'c', x:40, y:50, r:22, f:'#4E9E34' }, ...[[30, 44], [46, 56], [52, 40]].map(([x, y]) => ({ t:'c', x, y, r:3, f:'kirmizi' })),
    { t:'kus', x:120, y:40, f:'su', ucan:true },
    { t:'l', d:'M64 46 Q90 30 110 38 M140 44 Q180 60 200 96', w:1.4, k:'vurgu', kesik:true },
    ...[[150, 76], [170, 90], [190, 104]].map(([x, y]) => ({ t:'c', x, y, r:2, f:'#6B4430' })),
    { t:'l', d:'M206 112 l0 -10 M206 104 q-6 -4 -8 0 M206 104 q6 -4 8 0', w:1.6, k:'#4E9E34' },
    ...kutu(196, 30, 64, 'uzaklara', 11) ] },

  // ---- sıfatlar ----
  overland: { boy: 134, alt: 'Kıyıdan başkente kara yolculuğu neredeyse iki hafta sürdü.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#F3E6C8' }, { t:'p', d:'M4 6 L40 6 Q30 60 40 128 L4 128 Z', f:'su' },
    { t:'p', d:'M90 70 L110 40 L130 70 Z M120 74 L140 46 L160 74 Z', f:'dag' },
    { t:'l', d:'M44 96 Q80 104 100 86 Q120 70 150 88 Q180 104 204 74', w:2.4, k:'kahve', kesik:true },
    { t:'r', x:56, y:84, w:22, h:12, rx:2, f:'kraft' }, { t:'c', x:60, y:98, r:4, f:'#6B4430' }, { t:'c', x:74, y:98, r:4, f:'#6B4430' },
    { t:'r', x:200, y:52, w:26, h:22, f:'sari' }, { t:'p', d:'M198 52 L213 40 L228 52 Z', f:'kirmizi' }, { t:'y', x:213, y:90, m:'başkent', b:10 },
    { t:'y', x:22, y:120, m:'kıyı', b:10 }, ...kutu(120, 116, 66, 'karadan', 11), ...kutu(170, 24, 56, '2 hafta', 11) ] },
  naval: { boy: 134, alt: 'Limanına bir deniz üssü kurulunca kasaba hızla büyüdü.', o: [
    { t:'r', x:0, y:90, w:240, h:44, f:'su' }, dalga(104),
    { t:'p', d:'M20 90 L120 90 L110 106 L30 106 Z', f:'#8E939C' }, { t:'r', x:56, y:72, w:32, h:18, f:'#A8AEB8' }, { t:'r', x:66, y:60, w:10, h:12, f:'#A8AEB8' },
    { t:'l', d:'M100 90 L100 60', w:1.4 }, { t:'p', d:'M100 60 L116 64 L100 68 Z', f:'su' },
    { t:'p', d:'M140 98 L196 98 L190 108 L146 108 Z', f:'#8E939C' }, { t:'r', x:160, y:88, w:20, h:10, f:'#A8AEB8' },
    ...ev(136, 52, 'pembe'), ...ev(162, 48, 'sari'), ...ev(188, 54, 'su'), ...ev(212, 50, 'pembe'),
    ...kutu(64, 30, 70, 'deniz üssü', 11), { t:'l', d:'M154 40 l16 0 M200 40 l20 0', w:1.6, k:'vurgu' }, { t:'y', x:186, y:30, m:'büyüdü', b:11 } ] },
  celestial: { boy: 134, alt: 'Denizciler yollarını bulmak için eskiden Güneş ve yıldızlar gibi gök cisimlerinin konumunu kullanırdı.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#1F2347' },
    ...[[40, 26], [70, 18], [110, 30], [196, 22], [220, 48], [160, 40], [140, 16]].map(([x, y]) => ({ t:'c', x, y, r:1.8, f:'sari' })),
    { t:'p', d:'M180 16 l3 8 l8 0 l-6 5 l2 8 l-7 -5 l-7 5 l2 -8 l-6 -5 l8 0 Z', f:'sari' },
    { t:'r', x:4, y:100, w:232, h:28, f:'#2F4E8C' },
    { t:'p', d:'M50 100 L150 100 L140 114 L60 114 Z', f:'agac' }, { t:'l', d:'M100 100 L100 50', w:2, k:'agac' }, { t:'p', d:'M102 54 L132 92 L102 92 Z', f:'#FFFFFF' },
    kis(80, 100, .7, 'kirmizi', 'bas'), { t:'l', d:'M86 72 L180 24', w:1.2, k:'sari', kesik:true },
    ...kutu(60, 36, 82, 'gök cismi', 10) ] },
  malnourished: { boy: 134, alt: 'Kurtarılan köpek o kadar yetersiz beslenmişti ki zar zor ayakta durabiliyordu.', o: [
    { t:'r', x:0, y:112, w:240, h:22, f:'#E3EEF0' },
    { t:'l', d:'M72 84 L64 112 M82 84 L82 112 M110 82 L114 112 M118 80 L126 112 M64 78 q-12 6 -14 -6', w:2 },
    { t:'p', d:'M64 78 Q90 62 122 70 Q126 80 116 84 Q96 78 80 88 Q62 88 64 78 Z', f:'#C9A06A' },
    { t:'l', d:'M86 70 q-2 6 0 12 M94 68 q-2 6 0 12 M102 68 q-2 6 0 10', w:1, k:'#8B6A3A' },
    { t:'c', x:130, y:66, r:9, f:'#C9A06A' }, { t:'e', x:126, y:66, rx:3.5, ry:8, f:'#8B6A3A' }, { t:'e', x:138, y:70, rx:4, ry:3, f:'#C9A06A' }, { t:'c', x:132, y:64, r:1.2, f:'#4B2E5E' },
    { t:'p', d:'M164 112 L196 112 L192 104 L168 104 Z', f:'su' }, { t:'e', x:180, y:104, rx:12, ry:3, f:'kraft' },
    ...kutu(96, 36, 104, 'yetersiz beslenmiş', 10), { t:'p', d:'M206 70 C200 64 194 70 199 76 L206 82 L213 76 C218 70 212 64 206 70 Z', f:'pembe' } ] },
  idle: { boy: 134, alt: 'Ekecek işçi olmadığı için geniş tarım arazileri boş duruyor.', o: [
    { t:'r', x:4, y:50, w:232, h:78, rx:6, f:'#C9B079' },
    ...[[30, 70], [70, 90], [110, 66], [150, 100], [200, 76], [40, 110], [180, 116]].map(([x, y]) => ({ t:'l', d:`M${x} ${y} l-3 -8 M${x} ${y} l0 -10 M${x} ${y} l3 -8`, w:1.4, k:'#5FAE5F' })),
    { t:'r', x:150, y:56, w:40, h:24, rx:3, f:'kirmizi' }, { t:'r', x:176, y:40, w:16, h:18, f:'buz' }, { t:'c', x:160, y:84, r:9, f:'#4B4B52' }, { t:'c', x:186, y:86, r:6, f:'#4B4B52' },
    { t:'l', d:'M146 44 l6 -6 M150 46 l8 -2', w:1, k:'gri' },
    ...kutu(70, 30, 70, 'işçi yok', 11), ...kutu(170, 24, 54, 'boş', 11) ] },
  prolific: { boy: 134, alt: 'Üretken bir yazar olarak hayatı boyunca kırktan fazla roman yayımladı.', o: [
    kis(50, 124, 1.15, 'koyu', 'ileri'), { t:'r', x:66, y:96, w:20, h:4, f:'#FFFFFF' },
    ...Array.from({ length: 13 }, (_, i) => kitap(120 - (i % 3) * 2, 118 - i * 7.5, 48 + (i % 2) * 6, ['kirmizi', 'su', 'sari', 'yesil', 'pembe', 'turuncu'][i % 6])),
    ...Array.from({ length: 11 }, (_, i) => kitap(176 + (i % 2) * 2, 118 - i * 7.5, 46, ['su', 'pembe', 'sari', 'kirmizi', 'yesil'][i % 5])),
    ...kutu(64, 36, 74, '40+ roman', 12) ] },

  // ---- bağlaçlar ----
  'as soon as': { boy: 134, alt: 'Depo sıcaklığı güvenli sınırı aştığı anda yazılım uyarı gönderir.', o: [
    { t:'r', x:40, y:16, w:16, h:90, rx:8, f:'#FFFFFF' }, { t:'r', x:43, y:40, w:10, h:66, f:'kirmizi' }, { t:'c', x:48, y:110, r:12, f:'kirmizi' },
    { t:'l', d:'M30 46 L66 46', w:2, k:'vurgu', kesik:true }, { t:'y', x:90, y:50, m:'sınır', b:10 },
    okt(104, 74, 30),
    { t:'r', x:160, y:30, w:52, h:90, rx:8, f:'#2A2550' }, { t:'r', x:165, y:40, w:42, h:68, rx:3, f:'#FFFFFF' },
    { t:'p', d:'M186 54 Q176 54 176 66 L174 76 L198 76 L196 66 Q196 54 186 54 Z', f:'sari' }, { t:'c', x:186, y:80, r:3, f:'sari' },
    { t:'y', x:186, y:98, m:'UYARI', b:9 }, { t:'l', d:'M170 50 l-6 -6 M202 50 l6 -6', w:1.4, k:'kirmizi' },
    { t:'y', x:120, y:126, m:'aşar aşmaz', b:12 } ] },
  'as long as': { boy: 134, alt: 'Bu tür tohumlar serin ve kuru tutuldukça yıllarca saklanabilir.', o: [
    { t:'r', x:70, y:40, w:60, h:72, rx:8, f:'#E3F7FF' }, { t:'r', x:66, y:32, w:68, h:12, rx:3, f:'kraft' },
    ...[[84, 70], [100, 80], [114, 68], [90, 94], [108, 98], [96, 60]].map(([x, y]) => ({ t:'e', x, y, rx:4, ry:3, f:'#9B6B47' })),
    { t:'l', d:'M30 50 l0 16 M22 54 l16 8 M38 54 l-16 8', w:1.8, k:'su' }, { t:'y', x:30, y:86, m:'serin', b:11 },
    { t:'p', d:'M30 100 q-6 8 0 12 q6 -4 0 -12 Z', f:'su' }, { t:'l', d:'M20 98 L40 116', w:2, k:'kirmizi' }, { t:'y', x:30, y:128, m:'kuru', b:11 },
    { t:'r', x:160, y:40, w:64, h:56, rx:4, f:'#FFFFFF' }, { t:'r', x:160, y:40, w:64, h:14, rx:4, f:'pembe' }, { t:'y', x:192, y:82, m:'yıllarca', b:12 },
    { t:'y', x:120, y:24, m:'… kaldıkça', b:13 } ] },
};
