// Kelime kartı görselleri · 16. parti (18 Kasım 2026): 50 kart. Tarz v11; her sahne kartın kendi örnek cümlesini anlatır.
// Çizimler özgün.
import { ev, dalga, okt, balon, iki, kutu, balik, tilki, tavsan } from './parca.js';

const kis = (x, y, s, f, kol, yuz) => ({ t:'k', x, y, s, f, kol, yuz });
const eksen = (x0, y0, x1, y1) => ({ t:'l', d:`M${x0} ${y1} L${x0} ${y0} L${x1} ${y0}`, w:1.8 });
const kromozom = (x, y, f) => ({ t:'l', d:`M${x - 6} ${y - 10} L${x + 6} ${y + 10} M${x + 6} ${y - 10} L${x - 6} ${y + 10}`, w:4, k:f });
const kurbaga = (x, y) => [{ t:'e', x:x - 14, y:y + 8, rx:8, ry:4, f:'#7EC27E' }, { t:'e', x:x + 14, y:y + 8, rx:8, ry:4, f:'#7EC27E' }, { t:'e', x, y, rx:18, ry:12, f:'#7EC27E' },
  { t:'c', x:x - 8, y:y - 12, r:5, f:'#7EC27E' }, { t:'c', x:x + 8, y:y - 12, r:5, f:'#7EC27E' }, { t:'c', x:x - 8, y:y - 12, r:2, f:'#4B2E5E' }, { t:'c', x:x + 8, y:y - 12, r:2, f:'#4B2E5E' },
  { t:'l', d:`M${x - 8} ${y + 2} q8 4 16 0`, w:1.2 }];
const mantar = (x, y, s = 1) => [{ t:'r', x:x - 3 * s, y:y - 14 * s, w:6 * s, h:14 * s, f:'#F3E6C8' }, { t:'p', d:`M${x - 14 * s} ${y - 12 * s} Q${x} ${y - 32 * s} ${x + 14 * s} ${y - 12 * s} Z`, f:'#C9643A' }];
const teleskop = (x, y, s, f) => [{ t:'l', d:`M${x} ${y} l${-10 * s} ${20 * s} M${x} ${y} l${10 * s} ${20 * s}`, w:2, k:'gri' },
  { t:'p', d:`M${x - 20 * s} ${y + 4 * s} L${x + 22 * s} ${y - 18 * s} L${x + 26 * s} ${y - 10 * s} L${x - 16 * s} ${y + 12 * s} Z`, f }];

export default {
  // ---- isimler ----
  strain: { boy: 134, alt: 'Bilim insanları besin zehirlenmesine yol açan bakteri suşunu belirledi.', o: [
    { t:'e', x:60, y:70, rx:44, ry:30, f:'#E3F7FF' }, { t:'e', x:60, y:70, rx:36, ry:23, f:'#F6EBC8' },
    ...[[44, 60], [62, 72], [76, 58], [50, 82], [70, 86]].map(([x, y]) => ({ t:'c', x, y, r:5, f:'#9FE07A' })), ...[[60, 62], [46, 74]].map(([x, y]) => ({ t:'c', x, y, r:5, f:'#E07A5A' })),
    { t:'c', x:60, y:62, r:11, f:'yok' }, { t:'l', d:'M49 62 a11 11 0 1 0 22 0 a11 11 0 1 0 -22 0', w:1.6, k:'kirmizi' },
    okt(112, 70, 24), kis(186, 122, 1.1, 'sari', 'asagi', 'uzgun'), { t:'p', d:'M160 70 L186 64 L182 76 Z', f:'kraft' },
    ...kutu(60, 116, 74, 'bu suş!', 11), ...kutu(186, 30, 76, 'zehirlenme', 10) ] },
  sequence: { boy: 134, alt: 'Araştırmacılar nadir bitkinin hangi türe yakın olduğunu bulmak için DNA dizisini okudu.', o: [
    { t:'l', d:'M30 110 L30 70', w:2.4, k:'#4E9E34' }, { t:'e', x:20, y:84, rx:10, ry:5, f:'yesil' }, { t:'e', x:40, y:78, rx:10, ry:5, f:'yesil' }, { t:'c', x:30, y:64, r:6, f:'pembe' },
    ...['A', 'T', 'G', 'C', 'C', 'A', 'T', 'G'].map((m, i) => ({ t:'r', x:60 + i * 20, y:40, w:18, h:20, rx:3, f:['#FFB3C8', '#B5D8F0', '#FFE38A', '#C9F0B4'][['A', 'T', 'G', 'C'].indexOf(m)] })),
    ...['A', 'T', 'G', 'C', 'C', 'A', 'T', 'G'].map((m, i) => ({ t:'y', x:69 + i * 20, y:55, m, b:11 })),
    { t:'l', d:'M120 64 L100 92 M120 64 L180 92', w:1.4, k:'vurgu', kesik:true },
    ...kutu(96, 104, 62, '%98 ✓', 11), ...kutu(184, 104, 62, '%70', 11), { t:'y', x:120, y:26, m:'DNA dizisi', b:12 } ] },
  neuron: { boy: 134, alt: 'Tek bir nöron sinyali çok sayıda başka hücreye iletebilir.', o: [
    { t:'l', d:'M50 60 L28 40 M50 60 L22 66 M50 60 L32 90 M50 60 L56 30', w:2, k:'#C9A6FF' },
    { t:'c', x:50, y:60, r:14, f:'#C9A6FF' }, { t:'c', x:54, y:58, r:4, f:'#7A3FD6' },
    { t:'l', d:'M64 60 L150 60 M150 60 L196 28 M150 60 L206 54 M150 60 L200 84 M150 60 L186 110', w:2.4, k:'#C9A6FF' },
    ...[[200, 24], [212, 54], [206, 88], [190, 116]].map(([x, y]) => ({ t:'c', x, y, r:8, f:'#FFE6F2' })),
    { t:'p', d:'M96 50 L104 60 L96 70 Z', f:'sari' }, { t:'p', d:'M116 50 L124 60 L116 70 Z', f:'sari' },
    ...kutu(50, 112, 50, 'nöron', 11) ] },
  cortex: { boy: 134, alt: 'Beynin arkasındaki görme korteksi gördüklerimizi anlamlandırır.', o: [
    { t:'p', d:'M60 90 Q40 90 40 70 Q36 40 70 30 Q100 16 140 26 Q180 26 192 56 Q204 86 176 96 Q160 110 130 104 Q110 116 90 104 Q66 108 60 90 Z', f:'#FFC3CF' },
    { t:'p', d:'M150 28 Q180 26 192 56 Q204 86 176 96 Q164 104 156 98 Q170 70 150 28 Z', f:'#C9A6FF' },
    { t:'l', d:'M80 46 q10 10 0 20 M120 36 q10 14 0 28', w:1.4, k:'#E89AAE' },
    { t:'e', x:30, y:60, rx:10, ry:7, f:'#FFFFFF' }, { t:'c', x:34, y:60, r:4, f:'su' }, { t:'l', d:'M42 60 Q100 70 160 64', w:1.4, k:'vurgu', kesik:true },
    ...kutu(196, 118, 76, 'görme alanı', 10), { t:'y', x:30, y:86, m:'göz', b:10 }, { t:'y', x:100, y:126, m:'ön', b:9 } ] },
  haemoglobin: { boy: 134, alt: 'Hemşire hemoglobin düzeyimin normal olduğunu, o gün kan verebileceğimi söyledi.', o: [
    { t:'r', x:20, y:20, w:110, h:96, rx:4, f:'#FFFFFF' }, { t:'y', x:75, y:38, m:'kan testi', b:11 },
    { t:'y', x:58, y:66, m:'Hb:', b:12 }, { t:'y', x:96, y:66, m:'13,8', b:12 }, { t:'r', x:36, y:80, w:76, h:20, rx:4, f:'#E3F9D8' }, { t:'y', x:74, y:94, m:'normal ✓', b:11 },
    { t:'r', x:168, y:44, w:30, h:40, rx:6, f:'kirmizi' }, { t:'l', d:'M183 84 L183 104', w:2, k:'kirmizi' },
    ...kutu(184, 120, 68, 'kan verebilir', 9), ...kutu(184, 28, 64, 'hemoglobin', 9) ] },
  scurvy: { boy: 134, alt: 'İskorbüt bugün nadir ama neredeyse hiç taze besin yemeyenlerde hâlâ görülüyor.', o: [
    ...iki(),
    { t:'e', x:59, y:84, rx:38, ry:12, f:'#FFFFFF' }, { t:'r', x:44, y:66, w:30, h:14, rx:3, f:'#E8C78A' }, { t:'y', x:59, y:110, m:'taze yok', b:11 },
    { t:'e', x:181, y:84, rx:38, ry:12, f:'#FFFFFF' }, { t:'c', x:166, y:72, r:10, f:'turuncu' }, { t:'c', x:188, y:70, r:9, f:'sari' }, { t:'e', x:204, y:78, rx:8, ry:5, f:'yesil' },
    { t:'y', x:181, y:110, m:'C vitamini ✓', b:11 },
    { t:'y', x:59, y:28, m:'iskorbüt riski', b:11 }, { t:'y', x:181, y:28, m:'korunur', b:12 } ] },
  lineage: { boy: 134, alt: 'Balinalar ile su aygırlarının aynı eski toynaklı memeli soyundan geldiği düşünülüyor.', o: [
    { t:'l', d:'M120 128 L120 92 M120 92 Q80 72 60 60 M120 92 Q160 72 180 60', w:4, k:'agac' },
    { t:'c', x:120, y:110, r:8, f:'gri' },
    { t:'p', d:'M30 56 Q50 40 84 46 L96 38 L94 54 L100 66 L86 58 Q60 70 30 62 Z', f:'#6B7C93' }, { t:'c', x:38, y:54, r:1.4, f:'#4B2E5E' },
    { t:'r', x:160, y:52, w:8, h:12, rx:2, f:'#A88C9C' }, { t:'r', x:190, y:52, w:8, h:12, rx:2, f:'#A88C9C' }, { t:'e', x:178, y:44, rx:26, ry:15, f:'#A88C9C' },
    { t:'p', d:'M196 34 Q218 30 224 42 Q224 54 204 54 Q196 50 196 34 Z', f:'#A88C9C' }, { t:'c', x:200, y:30, r:3, f:'#A88C9C' }, { t:'c', x:206, y:36, r:1.4, f:'#4B2E5E' }, { t:'c', x:220, y:44, r:1, f:'#4B2E5E' },
    { t:'l', d:'M40 50 q-2 -10 -8 -14 M40 50 q2 -10 8 -14', w:1.6, k:'su' },
    { t:'y', x:60, y:86, m:'balina', b:11 }, { t:'y', x:184, y:86, m:'su aygırı', b:11 }, { t:'y', x:160, y:118, m:'ortak soy', b:10 } ] },
  molecule: { boy: 134, alt: 'Tek bir şeker molekülü sıradan bir mikroskopla bile görülemeyecek kadar küçüktür.', o: [
    { t:'r', x:20, y:60, w:40, h:40, rx:4, f:'#FFFFFF' }, { t:'l', d:'M20 80 L60 80 M40 60 L40 100', w:1, k:'gri' }, { t:'y', x:40, y:118, m:'şeker', b:10 },
    okt(68, 80, 26),
    { t:'c', x:150, y:74, r:44, f:'#F7F3E6' }, { t:'y', x:150, y:80, m:'?', b:22 }, { t:'y', x:150, y:128, m:'mikroskop: göremez', b:10 },
    { t:'c', x:210, y:34, r:4, f:'kirmizi' }, { t:'c', x:218, y:28, r:3, f:'#FFFFFF' }, { t:'c', x:202, y:28, r:3, f:'#FFFFFF' }, { t:'y', x:212, y:52, m:'molekül', b:9 } ] },
  element: { boy: 134, alt: 'Karbon, Dünya’daki her canlıda bulunan bir elementtir.', o: [
    { t:'r', x:96, y:40, w:48, h:52, rx:4, f:'#FFFFFF' }, { t:'y', x:120, y:76, m:'C', b:26 }, { t:'y', x:104, y:52, m:'6', b:9 },
    { t:'l', d:'M96 60 L60 40 M96 80 L60 104 M144 66 L180 66', w:1.4, k:'vurgu', kesik:true },
    { t:'l', d:'M44 52 L44 30', w:3, k:'agac' }, { t:'c', x:44, y:24, r:12, f:'#4E9E34' },
    kis(44, 124, .7, 'pembe'), { t:'kus', x:196, y:70, f:'sari' },
    { t:'y', x:120, y:116, m:'karbon', b:12 } ] },
  ozone: { boy: 134, alt: 'Sıcak ve rüzgârsız öğleden sonraları yere yakın ozon astımlıların nefes almasını zorlaştırabilir.', o: [
    { t:'c', x:210, y:24, r:14, f:'sari' }, { t:'r', x:4, y:50, w:232, h:46, f:'#EFE6C8' },
    ...[[20, 60, 30, 46], [56, 50, 24, 56], [176, 56, 28, 50], [210, 48, 24, 58]].map(([x, y, w, h]) => ({ t:'r', x, y, w, h, f:'#B8BCC4' })),
    { t:'r', x:0, y:106, w:240, h:28, f:'yol' },
    kis(120, 112, 1, 'su', 'bas', 'uzgun'), { t:'r', x:128, y:74, w:8, h:12, rx:2, f:'turuncu' },
    ...kutu(120, 40, 48, 'O₃', 12), { t:'l', d:'M100 84 q-6 -4 0 -8 M140 84 q6 -4 0 -8', w:1.4, k:'gri' } ] },
  audience: { boy: 134, alt: 'Yeni bilgi yarışması genç izleyicilerin ilgisini çekti; kanal onu daha erken saate aldı.', o: [
    { t:'r', x:20, y:20, w:100, h:64, rx:6, f:'#2A2550' }, { t:'r', x:26, y:26, w:88, h:52, rx:3, f:'buz' }, { t:'y', x:70, y:56, m:'? ? ?', b:14 },
    { t:'r', x:30, y:104, w:110, h:14, rx:5, f:'#C9A6FF' }, ...[50, 80, 110].map(x => kis(x, 104, .6, undefined, 'yukari', 'mutlu')),
    { t:'r', x:160, y:40, w:68, h:30, rx:4, f:'#FFFFFF' }, { t:'y', x:194, y:60, m:'21:00', b:12 }, { t:'l', d:'M164 46 L224 64', w:2, k:'kirmizi' },
    { t:'r', x:160, y:80, w:68, h:30, rx:4, f:'#E3F9D8' }, { t:'y', x:194, y:100, m:'19:00', b:12 } ] },
  misinformation: { boy: 134, alt: 'Fırtınayla ilgili yanlış bilgilerin çoğu, paylaştığına gerçekten inanan insanlardan çıktı.', o: [
    { t:'r', x:20, y:30, w:40, h:70, rx:6, f:'#2A2550' }, { t:'r', x:24, y:38, w:32, h:50, rx:2, f:'#FFFFFF' }, { t:'y', x:40, y:62, m:'!!', b:13 },
    ...[[150, 24], [196, 40], [150, 76], [200, 92]].flatMap(([x, y]) => [{ t:'r', x, y, w:26, h:40, rx:5, f:'#4A6FA5' }, { t:'r', x:x + 3, y:y + 6, w:20, h:26, rx:2, f:'#FFFFFF' }, { t:'y', x:x + 13, y:y + 24, m:'!!', b:10 }]),
    { t:'l', d:'M62 50 L146 40 M62 60 L192 58 M62 70 L146 94 M62 80 L196 110', w:1.2, k:'vurgu', kesik:true },
    ...kutu(84, 118, 82, 'yanlış bilgi', 11) ] },
  burden: { boy: 134, alt: 'Artan kiralar büyük şehirlerdeki genç ailelere ağır bir mali yük bindirdi.', o: [
    { t:'r', x:0, y:116, w:240, h:18, f:'#E3EEF0' },
    kis(90, 116, 1.1, 'turuncu', 'tasi', 'uzgun'), kis(130, 116, 1.1, 'su', 'tasi', 'uzgun'), kis(110, 116, .6, 'sari', 'asagi', 'uzgun'),
    { t:'r', x:70, y:40, w:84, h:34, rx:4, f:'gri' }, { t:'y', x:112, y:62, m:'KİRA ₺₺₺', b:12 },
    { t:'l', d:'M62 30 l-8 -6 M162 30 l8 -6', w:1.6, k:'kirmizi' }, ...kutu(200, 30, 48, 'yük', 12) ] },
  constraint: { boy: 134, alt: 'Bütçe kısıtları yüzünden çalışmaya yalnızca az sayıda okul katılabildi.', o: [
    { t:'e', x:40, y:80, rx:24, ry:18, f:'pembe' }, { t:'c', x:60, y:68, r:8, f:'pembe' }, { t:'r', x:32, y:58, w:12, h:4, f:'#4B2E5E' }, { t:'y', x:40, y:120, m:'az bütçe', b:10 },
    ...Array.from({ length: 12 }, (_, i) => ({ t:'r', x:96 + (i % 4) * 34, y:28 + Math.floor(i / 4) * 32, w:24, h:22, f:i < 3 ? 'sari' : '#E3E6EA' })),
    ...[0, 1, 2].map(i => ({ t:'p', d:`M${96 + i * 34} ${28} L${108 + i * 34} ${20} L${120 + i * 34} ${28} Z`, f:'kirmizi' })),
    ...kutu(160, 124, 72, 'yalnız 3 okul', 10) ] },
  discrepancy: { boy: 134, alt: 'Denetçiler yıllık rapordaki rakamlarla banka kayıtları arasında bir tutarsızlık buldu.', o: [
    { t:'r', x:16, y:30, w:80, h:70, rx:3, f:'#FFFFFF' }, { t:'y', x:56, y:48, m:'rapor', b:11 }, { t:'y', x:56, y:76, m:'₺1.000', b:13 },
    { t:'r', x:144, y:30, w:80, h:70, rx:3, f:'#FFFFFF' }, { t:'y', x:184, y:48, m:'banka', b:11 }, { t:'y', x:184, y:76, m:'₺800', b:13 },
    { t:'y', x:120, y:76, m:'≠', b:24 },
    { t:'c', x:120, y:110, r:12, f:'#E3F7FF' }, { t:'l', d:'M108 110 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0 M128 118 L138 128', w:2.4, k:'#6B7280' },
    ...kutu(120, 18, 82, 'tutarsızlık', 11) ] },
  disparity: { boy: 134, alt: 'Rapor kentle kırsal arasında sağlık hizmetine erişimde büyük bir eşitsizliği vurguluyor.', o: [
    { t:'r', x:4, y:6, w:110, h:122, rx:12, f:'#E8EAF0' }, { t:'r', x:126, y:6, w:110, h:122, rx:12, f:'#EEFFDD' },
    ...[[16, 50], [44, 60], [72, 46]].flatMap(([x, y]) => [{ t:'r', x, y, w:26, h:40, f:'#FFFFFF' }, { t:'r', x:x + 10, y:y + 6, w:6, h:14, f:'kirmizi' }, { t:'r', x:x + 6, y:y + 10, w:14, h:6, f:'kirmizi' }]),
    ...ev(144, 90, 'sari'), ...ev(176, 96, 'pembe'),
    { t:'r', x:210, y:36, w:20, h:30, f:'#FFFFFF' }, { t:'r', x:218, y:40, w:4, h:10, f:'kirmizi' }, { t:'r', x:215, y:43, w:10, h:4, f:'kirmizi' }, { t:'l', d:'M170 90 Q200 70 214 66', w:1.4, k:'vurgu', kesik:true },
    { t:'y', x:59, y:28, m:'kent: 3', b:12 }, { t:'y', x:181, y:28, m:'kırsal: uzak', b:11 } ] },
  initiative: { boy: 134, alt: 'Belediye ana caddeleri boyunca on bin ağaç dikmek için bir girişim başlattı.', o: [
    { t:'r', x:0, y:84, w:240, h:24, f:'yol' }, { t:'l', d:'M0 96 L240 96', w:1.4, k:'beyaz', kesik:true },
    ...[20, 56, 92, 128, 164, 200].flatMap(x => [{ t:'l', d:`M${x} 84 L${x} 64`, w:2.4, k:'agac' }, { t:'c', x, y:56, r:11, f:'#4E9E34' },
      { t:'l', d:`M${x + 16} 132 L${x + 16} 114`, w:2, k:'agac' }, { t:'c', x:x + 16, y:110, r:8, f:'#5FAE5F' }]),
    ...kutu(120, 24, 92, '10.000 ağaç', 11) ] },
  obstacle: { boy: 134, alt: 'Yüksek harçlar birçok düşük gelirli öğrenci için yükseköğretime büyük bir engel.', o: [
    { t:'r', x:150, y:40, w:80, h:60, f:'#F3E6C8' }, { t:'p', d:'M144 40 L190 20 L236 40 Z', f:'su' }, { t:'l', d:'M164 46 L164 100 M190 46 L190 100 M216 46 L216 100', w:2, k:'gri' },
    { t:'r', x:96, y:26, w:30, h:96, f:'tas' }, { t:'l', d:'M96 42 L126 42 M96 58 L126 58 M96 74 L126 74 M96 90 L126 90 M96 106 L126 106', w:1, k:'#B89A70' },
    { t:'y', x:111, y:20, m:'harç', b:11 },
    kis(56, 120, 1.05, 'sari', 'asagi', 'uzgun'), { t:'r', x:0, y:120, w:240, h:14, f:'#C9E7A8' }, { t:'y', x:190, y:118, m:'üniversite', b:10 } ] },
  priority: { boy: 134, alt: 'Depremden sonra ailelere barınak sağlamak hükümetin en önemli önceliği oldu.', o: [
    { t:'r', x:0, y:104, w:240, h:30, f:'#E3D7B8' },
    ...[[20, 104], [70, 104], [120, 104]].map(([x, y]) => ({ t:'p', d:`M${x} ${y} L${x + 22} ${y - 30} L${x + 44} ${y} Z`, f:'su' })),
    { t:'r', x:170, y:24, w:62, h:76, rx:3, f:'#FFFFFF' },
    { t:'y', x:200, y:44, m:'1. barınak', b:10 }, { t:'y', x:200, y:64, m:'2. su', b:10 }, { t:'y', x:200, y:84, m:'3. …', b:10 },
    { t:'c', x:172, y:40, r:9, f:'kirmizi' }, { t:'y', x:172, y:45, m:'1', b:12 } ] },
  consent: { boy: 134, alt: 'Çalışmaya katılanlar veri toplanmadan önce yazılı onay verdi.', o: [
    { t:'r', x:40, y:14, w:110, h:110, rx:3, f:'#FFFFFF' }, { t:'y', x:95, y:32, m:'ONAY FORMU', b:11 },
    { t:'l', d:'M52 46 l86 0 M52 56 l80 0 M52 66 l86 0 M52 76 l60 0', w:1, k:'gri' },
    { t:'r', x:52, y:86, w:12, h:12, rx:2, f:'#FFFFFF' }, { t:'y', x:58, y:96, m:'✓', b:10 }, { t:'y', x:100, y:96, m:'kabul ediyorum', b:9 },
    { t:'l', d:'M60 114 q6 -8 12 0 t14 -4 t10 2', w:1.6, k:'#2F4E8C' }, { t:'l', d:'M164 60 L120 116', w:3, k:'kahve' },
    ...kutu(196, 40, 62, 'yazılı', 11) ] },
  feat: { boy: 134, alt: 'Böyle uzun bir tüneli sert kayadan kazmak, döneminin dikkat çekici bir mühendislik başarısıydı.', o: [
    { t:'p', d:'M0 134 L0 60 Q60 10 120 20 Q180 10 240 60 L240 134 Z', f:'dag' },
    { t:'p', d:'M10 134 L10 110 Q22 92 34 110 L34 134 Z', f:'#3B3446' }, { t:'p', d:'M206 134 L206 110 Q218 92 230 110 L230 134 Z', f:'#3B3446' },
    { t:'l', d:'M34 116 L206 116', w:1.6, k:'sari', kesik:true },
    kis(60, 132, .5, 'turuncu'), { t:'p', d:'M54 112 Q60 106 66 112 Z', f:'sari' },
    ...kutu(120, 60, 98, 'mühendislik', 11), { t:'y', x:120, y:84, m:'büyük başarı', b:12 } ] },
  influx: { boy: 134, alt: 'Yeni üniversitenin açılması küçük kasabaya genç insan akınına yol açtı.', o: [
    { t:'r', x:140, y:40, w:90, h:60, f:'#F3E6C8' }, { t:'p', d:'M134 40 L185 18 L236 40 Z', f:'su' }, { t:'l', d:'M154 46 L154 100 M176 46 L176 100 M198 46 L198 100 M218 46 L218 100', w:2, k:'gri' },
    { t:'r', x:0, y:104, w:240, h:30, f:'#C9E7A8' },
    ...[[20, 104], [38, 108], [56, 104], [74, 110], [92, 104], [110, 108]].map(([x, y]) => kis(x, y, .45, undefined, 'asagi', 'mutlu')),
    { t:'l', d:'M20 80 L120 80 M112 74 L121 80 L112 86', w:2, k:'vurgu' },
    ...kutu(64, 30, 54, 'akın', 12), { t:'y', x:185, y:118, m:'üniversite', b:10 } ] },
  inhabitant: { boy: 134, alt: 'Adanın sakinleri neredeyse yalnızca balıkçılık ve kısa bir turizm mevsimiyle geçiniyor.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'su' }, { t:'p', d:'M50 96 Q60 50 120 46 Q180 50 190 96 Z', f:'#E8D9A0' },
    ...ev(84, 60, 'pembe'), ...ev(114, 56, 'sari'), ...ev(144, 62, 'su'),
    { t:'p', d:'M20 104 L56 104 L50 114 L26 114 Z', f:'kirmizi' }, { t:'p', d:'M190 108 L226 108 L220 118 L196 118 Z', f:'sari' },
    { t:'c', x:210, y:28, r:10, f:'sari' }, ...kutu(60, 30, 78, 'ada sakinleri', 10) ] },
  periphery: { boy: 134, alt: 'Yeni konut siteleri kentin çeperine, işlerin ve hizmetlerin çoğundan uzağa yapıldı.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#EEFFDD' },
    ...[[40, 40, 20, 50], [64, 30, 18, 60], [86, 46, 18, 44]].map(([x, y, w, h]) => ({ t:'r', x, y, w, h, f:'#B8BCC4' })), { t:'y', x:72, y:112, m:'merkez: iş', b:10 },
    { t:'l', d:'M106 80 L190 80', w:2, k:'kraft', kesik:true },
    ...[[192, 56], [214, 62], [196, 86], [218, 90]].map(([x, y]) => ({ t:'r', x, y, w:16, h:22, f:'#F2C7A6' })),
    ...kutu(206, 30, 50, 'çeper', 11), { t:'y', x:148, y:72, m:'uzak', b:10 } ] },
  reputation: { boy: 134, alt: 'Kasaba harika peyniriyle ünlü; bu ün bölgenin her yerinden ziyaretçi çekiyor.', o: [
    { t:'p', d:'M40 100 L40 70 Q90 50 140 70 L140 100 Q90 116 40 100 Z', f:'#F2D06B' }, { t:'e', x:90, y:70, rx:50, ry:14, f:'#F7DE8A' },
    ...[[70, 84], [110, 90], [94, 78]].map(([x, y]) => ({ t:'c', x, y, r:4, f:'#E3C060' })),
    { t:'c', x:150, y:46, r:14, f:'kirmizi' }, { t:'p', d:'M144 58 L140 76 L150 70 L160 76 L156 58 Z', f:'kirmizi' }, { t:'y', x:150, y:51, m:'1', b:12 },
    kis(196, 120, .8, 'su', 'ileri'), kis(222, 120, .8, 'pembe', 'ileri'),
    ...kutu(90, 24, 80, 'ünlü peynir', 11) ] },
  revenue: { boy: 134, alt: 'Adanın gelirinin büyük kısmı turizmden geliyor; kötü bir sezon neredeyse herkesi etkiliyor.', o: [
    { t:'c', x:80, y:70, r:46, f:'su' }, { t:'p', d:'M80 70 L80 24 A46 46 0 1 1 40 93 Z', f:'sari' },
    { t:'y', x:100, y:84, m:'turizm', b:12 }, { t:'y', x:58, y:48, m:'diğer', b:10 },
    { t:'c', x:200, y:40, r:12, f:'sari' }, { t:'p', d:'M172 90 L228 90 L222 100 L178 100 Z', f:'kirmizi' }, { t:'r', x:180, y:70, w:14, h:20, f:'#FFFFFF' },
    ...kutu(196, 124, 50, 'gelir', 11) ] },
  subsidy: { boy: 134, alt: 'Kamu desteği olmasa birçok kırsal otobüs hattını işletmek çok pahalı olurdu.', o: [
    { t:'r', x:0, y:110, w:240, h:24, f:'yol' },
    { t:'r', x:110, y:70, w:110, h:36, rx:6, f:'sari' }, ...[0, 1, 2, 3].map(i => ({ t:'r', x:120 + i * 24, y:76, w:18, h:12, rx:2, f:'buz' })), { t:'c', x:132, y:108, r:6, f:'#4B4B52' }, { t:'c', x:200, y:108, r:6, f:'#4B4B52' },
    { t:'r', x:20, y:40, w:60, h:40, f:'#E8E2D4' }, { t:'p', d:'M14 40 L50 22 L86 40 Z', f:'gri' },
    { t:'l', d:'M84 64 Q104 56 116 66 M110 62 L117 67 L110 71', w:1.6, k:'vurgu' }, ...[[96, 52], [104, 48]].map(([x, y]) => ({ t:'c', x, y, r:5, f:'#E8C15A' })),
    ...kutu(50, 98, 56, 'kamu', 11), ...kutu(165, 50, 76, 'kırsal hat', 10) ] },
  successor: { boy: 134, alt: 'Yeni teleskop, otuz yıldan uzun süre çalışmış bir aracın halefi.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#1F2347' }, ...[[30, 20], [100, 30], [200, 18], [160, 40]].map(([x, y]) => ({ t:'c', x, y, r:1.4, f:'sari' })),
    ...teleskop(60, 70, 1, '#A8AEB8'), ...teleskop(176, 62, 1.5, '#E8E2D4'),
    okt(100, 96, 30), ...kutu(60, 116, 60, 'eski: 30 yıl', 9), ...kutu(176, 116, 50, 'halef', 11) ] },
  vicinity: { boy: 134, alt: 'Bu bahar gölün yakınlarında birkaç nadir kuş görüldü.', o: [
    { t:'e', x:120, y:76, rx:60, ry:24, f:'su' },
    { t:'l', d:'M30 76 a90 46 0 1 0 180 0 a90 46 0 1 0 -180 0', w:1.4, k:'vurgu', kesik:true },
    { t:'kus', x:60, y:46, f:'#FF8A4C' }, { t:'kus', x:180, y:110, f:'su' }, { t:'kus', x:196, y:44, f:'pembe', ucan:true },
    kis(28, 124, .8, 'yesil', 'ileri'), { t:'r', x:36, y:100, w:12, h:8, rx:2, f:'#4B4B52' },
    ...kutu(120, 18, 72, 'göl çevresi', 10) ] },
  desert: { boy: 134, alt: 'Çöl bitkileri suyu kalın gövdelerinde saklar ya da yeraltındaki suya uzanan derin kökler salar.', o: [
    { t:'r', x:0, y:70, w:240, h:64, f:'#E3C48A' }, { t:'c', x:200, y:26, r:14, f:'turuncu' },
    { t:'p', d:'M70 70 L70 30 Q70 20 80 20 Q90 20 90 30 L90 70 Z M70 50 L56 50 L56 36 M90 44 L104 44 L104 32', f:'yesil' },
    { t:'l', d:'M74 40 l0 20 M86 40 l0 20', w:1, k:'su', kesik:true },
    { t:'l', d:'M150 70 l0 -14 M150 62 l-6 -6 M150 62 l6 -6 M150 70 L150 118 M150 90 L136 108 M150 100 L166 116', w:1.6, k:'#8B6A3A' },
    { t:'r', x:0, y:118, w:240, h:16, f:'su' },
    ...kutu(80, 102, 66, 'su depolar', 9), ...kutu(196, 96, 66, 'derin kök', 10) ] },
  wound: { boy: 134, alt: 'Hemşireler yarayı her gün enfeksiyon belirtisi var mı diye kontrol ediyor.', o: [
    { t:'r', x:20, y:60, w:120, h:34, rx:16, f:'ten' }, { t:'r', x:60, y:62, w:40, h:30, rx:3, f:'#FFFFFF' }, { t:'l', d:'M66 70 l28 0 M66 78 l28 0 M66 86 l28 0', w:.8, k:'gri' },
    kis(186, 124, 1.15, '#7FD8B6', 'ileri'), { t:'c', x:156, y:72, r:10, f:'#E3F7FF' }, { t:'l', d:'M146 72 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0', w:2, k:'#6B7280' },
    { t:'r', x:20, y:14, w:74, h:30, rx:4, f:'#FFFFFF' }, { t:'y', x:57, y:34, m:'her gün ✓', b:10 }, ...kutu(80, 116, 50, 'yara', 11) ] },
  vein: { boy: 134, alt: 'Kan örneği genellikle dirseğin iç kısmındaki bir toplardamardan alınır.', o: [
    { t:'p', d:'M10 60 L120 66 Q130 66 130 76 L130 84 Q130 92 120 92 L10 96 Z', f:'ten' }, { t:'p', d:'M126 66 L230 50 L232 76 L128 90 Z', f:'ten' },
    { t:'l', d:'M20 80 Q70 74 124 78 Q170 74 226 64', w:2.4, k:'#6F8FD6' },
    { t:'r', x:110, y:30, w:40, h:10, rx:3, f:'buz' }, { t:'l', d:'M128 40 L126 74', w:1.2 }, { t:'r', x:114, y:32, w:16, h:6, f:'kirmizi' },
    ...kutu(60, 116, 62, 'toplardamar', 9), { t:'y', x:130, y:116, m:'dirsek içi', b:10 } ] },
  insomnia: { boy: 134, alt: 'Uykusuzluk çekenler gün içinde yorgun ve sinirli hissettiklerini söyler.', o: [
    { t:'r', x:4, y:6, w:110, h:122, rx:12, f:'#2A2550' }, { t:'r', x:126, y:6, w:110, h:122, rx:12, f:'#FFF3D6' },
    { t:'r', x:16, y:84, w:86, h:16, rx:4, f:'#FFFFFF' }, { t:'c', x:30, y:78, r:9, f:'ten' }, { t:'c', x:27, y:76, r:1.6, f:'#4B2E5E' }, { t:'c', x:33, y:76, r:1.6, f:'#4B2E5E' },
    { t:'r', x:40, y:76, w:60, h:12, rx:5, f:'#9FD6E8' }, { t:'r', x:66, y:24, w:40, h:20, rx:3, f:'#20304A' }, { t:'y', x:86, y:39, m:'03:00', b:11 },
    kis(181, 120, 1.1, 'sari', 'asagi', 'uzgun'), { t:'l', d:'M164 70 l-6 -6 M198 70 l6 -6', w:1.6, k:'kirmizi' },
    { t:'y', x:59, y:118, m:'uyuyamıyor', b:10 }, { t:'y', x:181, y:28, m:'gün boyu yorgun', b:10 } ] },
  algae: { boy: 134, alt: 'Tarladan göle karışan gübre alglerin hızla yayılmasına yol açabilir.', o: [
    { t:'r', x:0, y:40, w:90, h:40, f:'#C9E7A8' }, { t:'l', d:'M10 50 l70 0 M10 60 l70 0 M10 70 l70 0', w:1, k:'#4E9E34' },
    { t:'r', x:20, y:24, w:20, h:16, rx:2, f:'kraft' }, { t:'y', x:30, y:36, m:'gübre', b:7 }, { t:'l', d:'M80 76 Q100 86 110 96', w:1.6, k:'#8B6A4A', kesik:true },
    { t:'e', x:160, y:96, rx:74, ry:30, f:'su' }, ...[[120, 90], [140, 98], [160, 88], [180, 100], [200, 92], [150, 108], [176, 112]].map(([x, y]) => ({ t:'e', x, y, rx:12, ry:5, f:'#4E9E34' })),
    ...balik(204, 112, '#9FB8A0'), ...kutu(170, 40, 82, 'algler yayılır', 10) ] },
  amphibian: { boy: 134, alt: 'Amfibiler kısmen ince, nemli derileriyle soluduğu için kirli suya karşı çok hassastır.', o: [
    { t:'r', x:0, y:96, w:240, h:38, f:'#7FC4E8' },
    ...kurbaga(80, 82),
    ...[[150, 104], [170, 112], [196, 106], [214, 116]].map(([x, y]) => ({ t:'c', x, y, r:4, f:'#9A5AA8' })),
    { t:'l', d:'M100 70 q4 -4 0 -8 M108 74 q6 -4 0 -10', w:1.2, k:'su' },
    ...kutu(80, 30, 76, 'ince deri', 11), ...kutu(186, 70, 64, 'kirli su ✗', 10) ] },
  chromosome: { boy: 134, alt: 'Hücre bölünmeden önce her kromozom kopyalanır, böylece iki yeni hücre de tam bir takım alır.', o: [
    { t:'c', x:46, y:66, r:34, f:'#FFE6F2' }, kromozom(36, 60, 'kirmizi'), kromozom(56, 72, 'su'),
    okt(86, 66, 22),
    { t:'c', x:150, y:66, r:26, f:'#FFE6F2' }, kromozom(142, 62, 'kirmizi'), kromozom(158, 72, 'su'),
    { t:'c', x:208, y:66, r:26, f:'#FFE6F2' }, kromozom(200, 62, 'kirmizi'), kromozom(216, 72, 'su'),
    ...kutu(46, 118, 70, 'kopyalanır', 10), ...kutu(178, 118, 100, 'iki hücre, tam takım', 9) ] },
  ecosystem: { boy: 134, alt: 'Bir ekosistemden tek bir türü çıkarmak bütün besin ağına yayılan değişiklikler başlatabilir.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#EEFFDD' },
    { t:'l', d:'M30 110 l0 -10 M40 110 l-2 -12 M50 110 l2 -10', w:2, k:'#4E9E34' }, { t:'y', x:40, y:126, m:'ot', b:10 },
    ...tavsan(110, 96), { t:'l', d:'M96 72 L132 108 M132 72 L96 108', w:3, k:'kirmizi' },
    ...tilki(186, 60), { t:'y', x:186, y:90, m:'?', b:16 },
    { t:'l', d:'M54 104 L90 100 M126 84 L160 66', w:1.4, k:'vurgu', kesik:true },
    ...kutu(120, 24, 68, 'besin ağı', 11) ] },
  electron: { boy: 134, alt: 'Metal bir teldeki elektrik akımı aslında elektronların metal içindeki akışıdır.', o: [
    { t:'r', x:20, y:52, w:200, h:30, rx:15, f:'#E8B47A' }, { t:'r', x:20, y:58, w:200, h:18, rx:9, f:'#F2D0A0' },
    ...[40, 74, 108, 142, 176, 206].map(x => ({ t:'c', x, y:67, r:6, f:'su' })), ...[40, 74, 108, 142, 176, 206].map(x => ({ t:'y', x, y:70, m:'–', b:10 })),
    { t:'l', d:'M60 100 L180 100 M172 94 L181 100 L172 106', w:2, k:'vurgu' },
    ...kutu(120, 30, 72, 'elektronlar', 11), { t:'y', x:120, y:122, m:'akım', b:12 } ] },
  nucleus: { boy: 134, alt: 'Bitki ve hayvan hücrelerinde genetik maddenin çoğu çekirdekte saklanır.', o: [
    { t:'e', x:110, y:70, rx:80, ry:50, f:'#E3F9D8' },
    { t:'c', x:110, y:70, r:26, f:'#C9A6FF' }, { t:'l', d:'M96 60 q8 8 0 16 q8 8 0 12 M118 56 q-6 8 2 16 q-6 8 2 16', w:1.6, k:'koyu' },
    ...[[50, 50], [160, 96], [60, 94], [170, 46]].map(([x, y]) => ({ t:'e', x, y, rx:8, ry:4, f:'#9FE07A' })),
    ...kutu(206, 30, 60, 'çekirdek', 11), { t:'l', d:'M180 34 L132 56', w:1.2, kesik:true }, { t:'y', x:206, y:72, m:'DNA', b:11 } ] },
  spore: { boy: 134, alt: 'Mantarlar rüzgârın yeni yerlere taşıdığı milyonlarca spor salarak yayılır.', o: [
    { t:'r', x:0, y:110, w:240, h:24, f:'#8B6A4A' }, ...mantar(40, 110, 1.4),
    ...Array.from({ length: 16 }, (_, i) => ({ t:'c', x:60 + i * 9, y:+(70 - Math.sin(i / 2) * 16 + (i % 3) * 4).toFixed(1), r:1.8, f:'#C9643A' })),
    { t:'l', d:'M70 40 q20 -6 40 0 t40 0 M90 52 q20 -6 40 0 t30 0', w:1.4, k:'gri' },
    ...mantar(196, 110, .7), ...mantar(220, 110, .6),
    ...kutu(124, 22, 92, 'rüzgârla spor', 10) ] },

  // ---- fiiller ----
  cure: { boy: 134, alt: 'Eskiden birçok kişi deniz havasının neredeyse her hastalığı iyileştirdiğine inanırdı.', o: [
    { t:'r', x:0, y:70, w:240, h:22, f:'su' }, dalga(80), { t:'r', x:0, y:92, w:240, h:42, f:'#F2D69A' },
    ...[[70, 100], [140, 100]].flatMap(([x, y]) => [{ t:'l', d:`M${x} ${y} L${x + 30} ${y + 20} M${x + 30} ${y} L${x} ${y + 20}`, w:2, k:'agac' }, { t:'r', x:x - 2, y:y - 6, w:34, h:8, rx:2, f:'su' }]),
    kis(86, 96, .7, 'gri'), kis(156, 96, .7, 'pembe'),
    { t:'l', d:'M20 50 q20 -6 40 0 t40 0 M140 44 q20 -6 40 0 t40 0', w:1.4, k:'su' },
    ...kutu(120, 26, 134, '“deniz havası şifadır”', 10) ] },
  synthesise: { boy: 134, alt: 'Kimyacılar bir zamanlar yalnızca bitkilerden elde edilen birçok maddeyi artık sentezleyebiliyor.', o: [
    ...iki(),
    { t:'l', d:'M59 110 L59 60', w:2.4, k:'#4E9E34' }, { t:'e', x:46, y:70, rx:12, ry:6, f:'yesil' }, { t:'e', x:72, y:64, rx:12, ry:6, f:'yesil' }, { t:'c', x:59, y:52, r:6, f:'pembe' },
    { t:'p', d:'M170 50 L170 72 L154 104 L208 104 L192 72 L192 50 Z', f:'#C9F0B4' }, { t:'r', x:166, y:44, w:30, h:8, rx:2, f:'gri' },
    { t:'c', x:181, y:90, r:5, f:'pembe' }, { t:'c', x:59, y:90, r:5, f:'pembe' },
    { t:'y', x:59, y:28, m:'eskiden: bitki', b:11 }, { t:'y', x:181, y:28, m:'şimdi: laboratuvar', b:10 }, { t:'y', x:120, y:122, m:'aynı madde', b:11 } ] },
  reclassify: { boy: 134, alt: 'Yeni testlerden sonra bilim insanları fosili farklı bir türe yeniden sınıflandırdı.', o: [
    { t:'r', x:20, y:40, w:96, h:70, rx:6, f:'#D9C2A6' },
    { t:'l', d:'M36 76 q14 -20 30 -6 q12 10 24 -4 q10 -10 14 4', w:3, k:'#F3E6C8' }, { t:'l', d:'M48 66 l0 18 M60 66 l0 18 M72 70 l0 18 M84 66 l0 16', w:1.6, k:'#F3E6C8' },
    { t:'r', x:140, y:40, w:84, h:22, rx:4, f:'#FFFFFF' }, { t:'y', x:182, y:56, m:'A türü', b:11 }, { t:'l', d:'M146 51 L218 51', w:2.4, k:'kirmizi' },
    { t:'r', x:140, y:80, w:84, h:22, rx:4, f:'#E3F9D8' }, { t:'y', x:182, y:96, m:'B türü ✓', b:11 }, { t:'l', d:'M182 64 L182 78', w:1.6, k:'vurgu' },
    { t:'y', x:68, y:126, m:'fosil', b:11 } ] },
  embark: { boy: 134, alt: 'Emekli olduktan sonra arkeoloji lisansına başladı.', o: [
    { t:'r', x:0, y:116, w:240, h:18, f:'#C9E7A8' },
    kis(70, 116, 1.15, '#C9A6FF', 'tasi', 'mutlu'), { t:'p', d:'M56 74 L70 66 L84 74 L70 82 Z', f:'#2A2550' }, { t:'l', d:'M84 74 L86 86', w:1.2, k:'sari' },
    { t:'r', x:58, y:92, w:22, h:8, f:'su' }, { t:'r', x:56, y:84, w:24, h:8, f:'kirmizi' },
    { t:'r', x:150, y:40, w:80, h:76, f:'#F3E6C8' }, { t:'p', d:'M144 40 L190 20 L236 40 Z', f:'su' }, { t:'l', d:'M164 46 L164 116 M190 46 L190 116 M216 46 L216 116', w:2, k:'gri' },
    { t:'l', d:'M96 104 L144 104 M138 98 L145 104 L138 110', w:1.6, k:'vurgu', kesik:true },
    ...kutu(70, 30, 60, 'emekli', 11), { t:'y', x:190, y:132, m:'arkeoloji', b:10 } ] },
  immerse: { boy: 134, alt: 'Kendini yabancı bir kültüre kaptıran öğrenciler dilini daha hızlı öğrenir.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#FFF3D6' },
    ...[[30, 20, 'Café'], [150, 18, 'Boulangerie'], [80, 44, 'Marché'], [180, 52, 'Gare']].flatMap(([x, y, m]) => [{ t:'r', x:x - 6, y, w:m.length * 7 + 12, h:18, rx:4, f:'#FFFFFF' }, { t:'y', x:x + m.length * 3.5, y:y + 13, m, b:10 }]),
    kis(120, 118, 1.1, 'turuncu', 'yukari', 'mutlu'), ...balon(60, 96, 60, 'Bonjour', 10), ...balon(190, 100, 50, 'Merci', 10) ] },
  obliterate: { boy: 134, alt: 'Sel antik patikanın her izini sildi.', o: [
    ...iki(),
    { t:'r', x:4, y:50, w:110, h:78, f:'#C9E7A8' }, { t:'l', d:'M10 120 Q40 90 60 80 Q80 70 108 54', w:3, k:'kraft', kesik:true },
    { t:'r', x:126, y:50, w:110, h:78, f:'#9C7A52' }, { t:'l', d:'M134 70 q10 -4 20 0 t20 0 t20 0 t20 0 M134 96 q10 -4 20 0 t20 0 t20 0 t20 0', w:1.4, k:'#7A5A3A' },
    { t:'y', x:59, y:28, m:'antik patika', b:11 }, { t:'y', x:181, y:28, m:'selden sonra: iz yok', b:10 } ] },

  // ---- sıfatlar ----
  delicate: { boy: 134, alt: 'Mercan resifleri su sıcaklığı, ışık ve besin arasındaki hassas bir dengeye bağlıdır.', o: [
    { t:'p', d:'M120 86 L106 108 L134 108 Z', f:'gri' }, { t:'r', x:36, y:80, w:168, h:6, rx:3, f:'agac' },
    ...[[64, 'sıcaklık', 'kirmizi'], [120, 'ışık', 'sari'], [176, 'besin', 'yesil']].flatMap(([x, m, f]) => [{ t:'c', x, y:70, r:10, f }, { t:'y', x, y:52, m, b:10 }]),
    { t:'l', d:'M30 124 q-8 -16 0 -24 M38 124 q0 -14 6 -22 M46 124 q8 -14 2 -24', w:4, k:'#FF9EC7' }, { t:'y', x:72, y:122, m:'mercan', b:9 },
    ...kutu(196, 118, 74, 'hassas denge', 10) ] },
  fierce: { boy: 134, alt: 'Kargo şirketleri arasındaki kıyasıya rekabet fiyatları düşük tuttu.', o: [
    { t:'r', x:0, y:96, w:240, h:38, f:'yol' }, { t:'l', d:'M0 114 L240 114', w:1.4, k:'beyaz', kesik:true },
    ...[[40, 'kirmizi'], [120, 'su'], [190, 'yesil']].flatMap(([x, f]) => [{ t:'r', x, y:70, w:30, h:22, rx:3, f }, { t:'c', x:x + 6, y:96, r:6, f:'#4B4B52' }, { t:'c', x:x + 26, y:96, r:6, f:'#4B4B52' },
      { t:'l', d:`M${x - 4} 80 l-10 0 M${x - 4} 88 l-14 0`, w:1.4, k:'gri' }]),
    ...[[44, '₺30'], [124, '₺25'], [194, '₺20']].map(([x, m]) => ({ t:'y', x:x + 12, y:60, m, b:11 })),
    ...kutu(120, 26, 92, 'kıyasıya yarış', 10) ] },
  elusive: { boy: 134, alt: 'Onlarca yıllık araştırmaya rağmen soğuk algınlığının tedavisi hâlâ ele geçmiyor.', o: [
    { t:'r', x:0, y:116, w:240, h:18, f:'#E3EEF0' },
    kis(70, 116, 1.1, '#FFFFFF', 'ileri'), { t:'l', d:'M88 92 L130 64', w:2, k:'agac' }, { t:'c', x:138, y:58, r:12, f:'yok' }, { t:'l', d:'M126 58 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0', w:1.6, k:'gri' },
    { t:'p', d:'M186 40 L186 56 L180 64 L180 84 L200 84 L200 64 L194 56 L194 40 Z', f:'#C9F0B4' }, { t:'y', x:190, y:76, m:'?', b:11 },
    { t:'l', d:'M206 50 l10 -4 M206 60 l12 0 M206 70 l10 4', w:1.6, k:'vurgu' },
    ...kutu(110, 24, 92, 'hâlâ yakalanmadı', 9) ] },
  alkaline: { boy: 134, alt: 'Bazı bitkiler alkali toprakta yeterince demir alamadığı için kötü gelişir.', o: [
    { t:'r', x:0, y:86, w:240, h:48, f:'#D9C2A6' },
    { t:'l', d:'M70 86 L70 40', w:2.4, k:'#B8B84E' }, ...[[58, 50], [82, 46], [58, 70], [82, 66]].map(([x, y]) => ({ t:'e', x, y, rx:12, ry:6, f:'#EDE38A' })),
    { t:'r', x:150, y:40, w:30, h:46, rx:4, f:'#FFFFFF' }, { t:'r', x:154, y:46, w:22, h:14, rx:2, f:'#20304A' }, { t:'y', x:165, y:57, m:'8,5', b:9 }, { t:'l', d:'M165 86 L165 110', w:3, k:'gri' },
    { t:'y', x:200, y:56, m:'pH', b:11 }, ...kutu(70, 112, 70, 'demir yok', 10), ...kutu(184, 118, 66, 'alkali', 11) ] },
};
