// Kelime kartı görselleri · 20. parti (18 Kasım 2026): 50 kart. Tarz v11; her sahne kartın kendi örnek cümlesini anlatır.
// Çizimler özgün.
import { ev, dalga, okt, balon, iki, kutu, balik, oto } from './parca.js';

const kis = (x, y, s, f, kol, yuz) => ({ t:'k', x, y, s, f, kol, yuz });
const eksen = (x0, y0, x1, y1) => ({ t:'l', d:`M${x0} ${y1} L${x0} ${y0} L${x1} ${y0}`, w:1.8 });
const saat = (x, y, r = 14) => [{ t:'c', x, y, r, f:'#FFFFFF' }, { t:'l', d:`M${x} ${y - r + 4} L${x} ${y} L${x + r * .5} ${y + r * .3}`, w:1.6 }];
const kumbara = (x, y, s = 1) => [{ t:'e', x, y, rx:20 * s, ry:14 * s, f:'pembe' }, { t:'c', x:x + 18 * s, y:y - 6 * s, r:7 * s, f:'pembe' }, { t:'l', d:`M${x - 6 * s} ${y - 14 * s} l${12 * s} 0`, w:2 },
  { t:'l', d:`M${x - 10 * s} ${y + 12 * s} l0 ${5 * s} M${x + 10 * s} ${y + 12 * s} l0 ${5 * s}`, w:2 }];
const yaprak = (x, y, f) => ({ t:'p', d:`M${x} ${y} Q${x + 10} ${y - 14} ${x + 22} ${y} Q${x + 10} ${y + 10} ${x} ${y} Z`, f });

export default {
  // ---- sıfatlar ----
  prone: { boy: 134, alt: 'Bu eski yazıcı kâğıt biraz nemliyse sıkışmaya yatkın.', o: [
    { t:'r', x:40, y:50, w:110, h:50, rx:6, f:'#D7DBE2' }, { t:'r', x:56, y:30, w:78, h:22, f:'#FFFFFF' }, { t:'r', x:56, y:96, w:78, h:10, f:'#4B4B52' },
    { t:'p', d:'M70 96 L82 106 L94 98 L106 108 L118 98 L124 106', f:'yok' }, { t:'l', d:'M70 96 L82 106 L94 98 L106 108 L118 98 L124 106', w:1.6, k:'gri' },
    { t:'c', x:136, y:62, r:5, f:'kirmizi' }, { t:'l', d:'M70 26 q-4 -6 0 -12 M96 26 q-4 -6 0 -12', w:1.4, k:'su' },
    ...kutu(196, 40, 60, 'nemli kâğıt', 9), ...kutu(196, 90, 56, 'sıkışır', 11) ] },
  involuntary: { boy: 134, alt: 'Bir şey gözümüze doğru uçarken göz kırpmak gözü koruyan istemsiz bir tepkidir.', o: [
    { t:'c', x:160, y:66, r:36, f:'ten' }, { t:'l', d:'M138 60 q12 8 24 0 M174 60 q12 8 24 0', w:2.4 },
    { t:'p', d:'M150 84 Q160 90 170 84', f:'yok' }, { t:'l', d:'M150 86 Q160 92 170 86', w:1.4 },
    { t:'c', x:40, y:60, r:8, f:'#FFFFFF' }, { t:'l', d:'M52 60 L104 60', w:1.4, k:'gri', kesik:true }, { t:'l', d:'M30 54 l-10 0 M30 66 l-10 0', w:1.2, k:'gri' },
    ...kutu(80, 112, 94, 'istemsiz kırpma', 9) ] },
  misleading: { boy: 134, alt: 'Reklam yanıltıcıydı: “bedava” hediye neredeyse ürünün kendisi kadar pahalıydı.', o: [
    { t:'r', x:14, y:20, w:110, h:94, rx:4, f:'#FFE38A' }, { t:'y', x:69, y:46, m:'BEDAVA', b:15 }, { t:'y', x:69, y:66, m:'hediye!', b:12 },
    { t:'y', x:69, y:104, m:'*kargo ₺90', b:7 }, { t:'c', x:100, y:100, r:12, f:'yok' }, { t:'l', d:'M88 100 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0', w:1.4, k:'kirmizi' },
    { t:'r', x:150, y:46, w:70, h:26, rx:4, f:'#FFFFFF' }, { t:'y', x:185, y:64, m:'ürün ₺100', b:10 },
    { t:'y', x:185, y:94, m:'≈ aynı!', b:12 } ] },
  uncharted: { boy: 134, alt: 'Derin deniz tabanının büyük bölümü hâlâ ayrıntılı olarak haritalanmadı.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#1F2A5A' }, { t:'r', x:4, y:6, w:232, h:20, f:'#5FB0DD' },
    { t:'p', d:'M4 104 Q40 92 70 100 Q100 110 130 96 L130 128 L4 128 Z', f:'#5A7696' }, { t:'l', d:'M10 104 l10 -2 M40 98 l10 0 M80 102 l10 2', w:1, k:'beyaz' },
    { t:'p', d:'M130 96 Q170 84 200 100 Q220 110 236 98 L236 128 L130 128 Z', f:'#3A4A7A' }, { t:'y', x:184, y:84, m:'?', b:18 },
    ...kutu(68, 76, 64, 'haritalı', 10), ...kutu(184, 52, 80, 'bilinmiyor', 10) ] },
  moderate: { boy: 134, alt: 'Bahçe işi ve dans, insanı biraz hızlı nefes aldırıyorsa orta düzey egzersiz sayılabilir.', o: [
    kis(56, 116, 1.05, 'yesil', 'ileri'), { t:'l', d:'M72 96 L96 116', w:2, k:'agac' }, { t:'r', x:0, y:116, w:120, h:18, f:'#8B6A4A' },
    kis(176, 116, 1.05, 'pembe', 'yukari', 'mutlu'), { t:'l', d:'M160 70 l-6 -6 M192 70 l6 -6', w:1.4, k:'vurgu' },
    { t:'r', x:76, y:20, w:88, h:14, rx:7, f:'#FFFFFF' }, { t:'r', x:78, y:22, w:44, h:10, rx:5, f:'sari' }, { t:'y', x:120, y:52, m:'orta düzey', b:12 } ] },
  consistent: { boy: 134, alt: 'Küçük ama düzenli birikimler yıllar içinde büyük bir paraya dönüşebilir.', o: [
    ...[0, 1, 2, 3, 4, 5].flatMap(i => Array.from({ length: i + 1 }, (_, j) => ({ t:'e', x:36 + i * 30, y:114 - j * 7, rx:11, ry:4, f:'#E8C15A' }))),
    ...[0, 1, 2, 3, 4, 5].map(i => ({ t:'y', x:36 + i * 30, y:130, m:`${i + 1}. yıl`, b:8 })),
    ...kumbara(196, 40, .9), ...kutu(80, 30, 90, 'her ay biraz', 10) ] },
  deliberate: { boy: 134, alt: 'Kaza değildi: toplantıdan erken çıkmayı bilerek seçmişti.', o: [
    { t:'r', x:20, y:84, w:120, h:8, rx:3, f:'agac' }, ...[36, 64, 92, 120].map((x, i) => kis(x, 84, .7, ['su', 'yesil', 'sari', 'turuncu'][i])),
    { t:'r', x:180, y:30, w:40, h:90, f:'agac' }, kis(170, 120, 1, 'pembe', 'ileri', 'mutlu'),
    ...saat(80, 30), ...kutu(170, 20, 70, 'bilerek', 11) ] },
  remarkable: { boy: 134, alt: 'Dikkat çekici bir iyileşme gösterdi ve bir ay içinde işe döndü.', o: [
    { t:'r', x:14, y:76, w:70, h:12, rx:3, f:'#FFFFFF' }, { t:'c', x:24, y:70, r:7, f:'ten' }, { t:'r', x:30, y:66, w:52, h:10, rx:4, f:'#9FD6E8' },
    okt(96, 80, 34),
    kis(180, 120, 1.1, 'pembe', 'yukari', 'mutlu'), { t:'r', x:192, y:94, w:18, h:14, rx:2, f:'kraft' },
    ...[[154, 54], [206, 50]].map(([x, y]) => ({ t:'l', d:`M${x} ${y - 6} l0 12 M${x - 6} ${y} l12 0`, w:1.6, k:'sari' })),
    ...kutu(112, 26, 60, '1 ay', 11), { t:'y', x:180, y:30, m:'işte!', b:12 } ] },
  unprecedented: { boy: 134, alt: 'Kent yaz festivalinde eşi görülmemiş sayıda ziyaretçi ağırladı.', o: [
    eksen(30, 108, 226, 20),
    ...[[40, 20], [76, 24], [112, 22], [148, 26]].map(([x, h]) => ({ t:'r', x, y:108 - h, w:24, h, f:'gri' })), { t:'r', x:190, y:24, w:28, h:84, f:'turuncu' },
    { t:'y', x:52, y:124, m:'2021', b:9 }, { t:'y', x:88, y:124, m:'2022', b:9 }, { t:'y', x:124, y:124, m:'2023', b:9 }, { t:'y', x:160, y:124, m:'2024', b:9 }, { t:'y', x:204, y:124, m:'bu yıl', b:9 },
    ...kutu(110, 40, 90, 'eşi görülmemiş', 10) ] },
  cognitive: { boy: 134, alt: 'Bulmaca çözmek yaşlıların bilişsel becerilerini keskin tutmaya yardım edebilir.', o: [
    kis(56, 124, 1.15, 'gri', 'ileri', 'mutlu'),
    { t:'r', x:80, y:46, w:70, h:70, f:'#FFFFFF' }, ...[0, 1, 2, 3, 4].flatMap(r => [0, 1, 2, 3, 4].map(c => ({ t:'r', x:80 + c * 14, y:46 + r * 14, w:14, h:14, f:(r * 3 + c) % 4 === 0 ? '#2A2530' : '#FFFFFF' }))),
    { t:'y', x:94, y:70, m:'A', b:9 }, { t:'y', x:108, y:70, m:'K', b:9 },
    { t:'p', d:'M186 60 Q172 60 172 46 Q170 28 192 24 Q212 18 222 34 Q232 52 216 60 Q204 70 186 60 Z', f:'#FFC3CF' },
    { t:'l', d:'M180 22 l-4 -6 M200 14 l0 -6 M220 22 l4 -6', w:1.4, k:'sari' }, ...kutu(196, 96, 70, 'keskin zihin', 9) ] },
  selective: { boy: 134, alt: 'Kardeşimin hafızası seçicidir: benim verdiğim sözleri hiç unutmaz, kendininkileri hep unutur.', o: [
    kis(120, 120, 1.15, 'su', 'asagi', 'mutlu'),
    { t:'r', x:16, y:30, w:80, h:30, rx:6, f:'#E3F9D8' }, { t:'y', x:56, y:44, m:'senin sözün', b:9 }, { t:'y', x:56, y:56, m:'✓ hatırlar', b:9 },
    { t:'r', x:144, y:30, w:80, h:30, rx:6, f:'#FFE0E0' }, { t:'y', x:184, y:44, m:'kendi sözü', b:9 }, { t:'y', x:184, y:56, m:'✗ unutur', b:9 },
    { t:'l', d:'M96 60 L110 74 M144 60 L130 74', w:1.4, k:'vurgu', kesik:true }, ...kutu(196, 110, 64, 'seçici', 11) ] },
  'long-term': { boy: 134, alt: 'Sık kullandığımız bilgiler bir kez gördüklerimize göre uzun süreli bellekte kalmaya daha yatkındır.', o: [
    { t:'r', x:130, y:30, w:96, h:80, rx:4, f:'#E8E2D4' }, { t:'l', d:'M130 56 L226 56 M130 84 L226 84', w:2, k:'agac' },
    ...[[136, 36], [160, 36], [184, 36], [136, 62], [160, 62], [136, 90]].map(([x, y]) => ({ t:'r', x, y, w:20, h:18, rx:1, f:'kraft' })),
    { t:'r', x:20, y:48, w:40, h:24, rx:4, f:'#FFFFFF' }, { t:'y', x:40, y:64, m:'1×', b:10 }, { t:'l', d:'M28 48 q4 -10 10 -14', w:1.2, k:'gri', kesik:true },
    { t:'r', x:20, y:88, w:40, h:24, rx:4, f:'#E3F9D8' }, { t:'y', x:40, y:104, m:'10×', b:10 }, { t:'l', d:'M62 100 L126 98', w:1.6, k:'vurgu' },
    ...kutu(178, 22, 92, 'uzun süreli bellek', 9) ] },
  lucrative: { boy: 134, alt: 'Yıllarca küçük işlerden sonra genç tasarımcı büyük bir moda eviyle kazançlı bir sözleşme imzaladı.', o: [
    { t:'r', x:40, y:30, w:80, h:90, rx:3, f:'#FFFFFF' }, { t:'y', x:80, y:48, m:'SÖZLEŞME', b:9 }, { t:'l', d:'M50 60 l60 0 M50 70 l50 0 M50 80 l60 0', w:1, k:'gri' },
    { t:'l', d:'M54 104 q6 -8 12 0 t12 -4', w:1.6, k:'#2F4E8C' },
    kis(160, 124, 1.1, 'pembe', 'yukari', 'mutlu'), ...[[196, 40], [210, 56], [190, 62], [206, 76]].map(([x, y]) => ({ t:'e', x, y, rx:9, ry:4, f:'#E8C15A' })),
    ...kutu(196, 22, 60, 'kazançlı', 10) ] },
  convincing: { boy: 134, alt: 'Geç kalma bahanesi öyle inandırıcıydı ki kimse trenlerin gerçekten gecikip gecikmediğine bakmadı.', o: [
    kis(70, 120, 1.1, 'su', 'bas', 'mutlu'), ...balon(80, 32, 104, '“tren gecikti!”', 10),
    ...[150, 178, 206].map((x, i) => kis(x, 120, .8, ['sari', 'pembe', 'yesil'][i], 'asagi', 'mutlu')),
    { t:'y', x:178, y:62, m:'tabii ✓', b:11 }, { t:'r', x:130, y:96, w:20, h:12, rx:2, f:'gri' }, { t:'y', x:140, y:84, m:'?', b:10 } ] },
  logical: { boy: 134, alt: 'Dükkân pazar günü kapalı olduğu için mantıklı olan pazartesi sabahı yeniden gitmekti.', o: [
    ...iki(),
    { t:'r', x:20, y:50, w:78, h:56, f:'#F3E6C8' }, { t:'r', x:32, y:66, w:54, h:18, rx:3, f:'#FFFFFF' }, { t:'y', x:59, y:79, m:'KAPALI', b:9 },
    { t:'r', x:142, y:50, w:78, h:56, f:'#F3E6C8' }, { t:'r', x:154, y:66, w:54, h:18, rx:3, f:'#E3F9D8' }, { t:'y', x:181, y:79, m:'AÇIK', b:10 },
    { t:'y', x:59, y:28, m:'pazar', b:12 }, { t:'y', x:181, y:28, m:'pazartesi ✓', b:12 }, okt(104, 78, 16) ] },
  agricultural: { boy: 134, alt: 'Vadideki tarım arazilerinin çoğu artık pamuk yetiştirmek için kullanılıyor.', o: [
    { t:'p', d:'M0 40 L60 20 L120 34 L180 18 L240 36 L240 50 L0 50 Z', f:'dag' },
    { t:'r', x:0, y:50, w:240, h:84, f:'#9CC27A' },
    ...Array.from({ length: 30 }, (_, i) => ({ t:'c', x:14 + (i % 10) * 24, y:66 + Math.floor(i / 10) * 22, r:5, f:'#FFFFFF' })),
    ...Array.from({ length: 30 }, (_, i) => ({ t:'l', d:`M${14 + (i % 10) * 24} ${71 + Math.floor(i / 10) * 22} l0 8`, w:1.4, k:'#4E9E34' })),
    ...kutu(120, 36, 70, 'pamuk', 11) ] },
  resilient: { boy: 134, alt: 'Kasabadaki küçük dükkânlar uzun ekonomik kriz boyunca şaşırtıcı derecede dayanıklı çıktı.', o: [
    { t:'c', x:200, y:24, r:12, f:'#C9CED6' }, { t:'l', d:'M30 26 l-3 8 M60 22 l-3 8 M90 26 l-3 8 M150 22 l-3 8', w:1.6, k:'su' },
    ...[[20, 'pembe'], [90, 'sari'], [160, 'su']].flatMap(([x, f]) => [{ t:'r', x, y:60, w:60, h:56, f:'#F3E6C8' }, { t:'p', d:`M${x - 4} 60 L${x + 64} 60 L${x + 58} 48 L${x + 2} 48 Z`, f }, { t:'r', x:x + 12, y:72, w:36, h:18, rx:2, f:'#E3F9D8' }]),
    ...[50, 120, 190].map(x => ({ t:'y', x, y:85, m:'AÇIK', b:8 })),
    ...kutu(110, 30, 70, 'kriz', 11) ] },
  indigenous: { boy: 134, alt: 'Bölgedeki yerli toplulukların yüzlerce yerel bitki için kendi adları var.', o: [
    { t:'r', x:0, y:110, w:240, h:24, f:'#C9E7A8' },
    kis(60, 110, 1.1, '#C96A3A', 'ileri'), { t:'p', d:'M48 64 Q60 52 72 64 Z', f:'#E8C15A' },
    ...[[120, 'yesil', 'ada çayı'], [170, '#4E9E34', 'kekik'], [218, '#7EC27E', 'nane']].flatMap(([x, f, m]) => [{ t:'l', d:`M${x} 110 L${x} 80`, w:2, k:'#4E9E34' }, yaprak(x - 22, 88, f), yaprak(x, 82, f), { t:'r', x:x - 20, y:56, w:40, h:16, rx:3, f:'#FFFFFF' }, { t:'y', x, y:68, m, b:7 }]),
    ...kutu(60, 30, 80, 'yerli bilgi', 10) ] },
  ethical: { boy: 134, alt: 'Birçok alışverişçi artık güvensiz fabrikalarda yapılan giysileri almanın etik olup olmadığını soruyor.', o: [
    kis(50, 124, 1.15, 'su', 'bas', 'sasir'), { t:'y', x:76, y:64, m:'?', b:18 },
    { t:'p', d:'M100 40 L112 34 Q120 40 128 34 L140 40 L148 54 L140 58 L138 54 L138 96 L102 96 L102 54 L100 58 L92 54 Z', f:'pembe' },
    { t:'r', x:160, y:40, w:70, h:56, f:'#C9B79A' }, { t:'l', d:'M170 50 l10 10 M200 48 l-6 14 M214 70 l8 8', w:1.6, k:'#5B4A3A' }, { t:'p', d:'M196 80 L204 66 L212 80 Z', f:'sari' },
    { t:'y', x:195, y:112, m:'güvensiz fabrika', b:9 }, ...kutu(120, 18, 52, 'etik?', 11) ] },
  unintended: { boy: 134, alt: 'Trafiği azaltmak için yolu genişletmenin istenmeyen sonucu daha çok araba çekmek oldu.', o: [
    ...iki(),
    { t:'r', x:4, y:70, w:110, h:22, f:'yol' }, ...oto(20, 74, 'kirmizi'), { t:'y', x:59, y:28, m:'dar yol', b:11 },
    { t:'r', x:126, y:56, w:110, h:52, f:'yol' }, { t:'l', d:'M126 82 L236 82', w:1.4, k:'beyaz', kesik:true },
    ...[[130, 62], [168, 62], [204, 62], [140, 90], [180, 90], [214, 90]].map(([x, y], i) => ({ t:'araba', x, y })),
    { t:'y', x:181, y:28, m:'geniş yol: daha çok', b:10 }, ...kutu(181, 122, 76, 'istenmeyen', 9) ] },
  controversial: { boy: 134, alt: 'Eski kütüphaneyi kapatma planı tartışmalıydı; yüzlerce kişi karşı dilekçe imzaladı.', o: [
    { t:'p', d:'M80 46 L130 26 L180 46 Z', f:'gri' }, { t:'r', x:86, y:46, w:88, h:50, f:'#E8E2D4' }, { t:'l', d:'M100 50 L100 96 M120 50 L120 96 M140 50 L140 96 M160 50 L160 96', w:2, k:'gri' },
    { t:'r', x:100, y:62, w:60, h:16, rx:2, f:'kirmizi' }, { t:'y', x:130, y:74, m:'KAPANIYOR?', b:8 },
    ...[30, 54].map(x => kis(x, 124, .7, 'yesil', 'yukari', 'mutlu')), { t:'y', x:42, y:78, m:'kapansın', b:9 },
    ...[186, 208, 230].map(x => kis(x, 124, .7, 'kirmizi', 'yukari', 'uzgun')), { t:'y', x:208, y:78, m:'kalsın!', b:10 },
    ...kutu(130, 116, 64, 'tartışmalı', 9) ] },
  promising: { boy: 134, alt: 'Satışların ilk haftası umut verici geçti; dükkân ikinci bir şube açmayı düşünüyor.', o: [
    eksen(20, 108, 120, 20), { t:'l', d:'M24 100 L50 84 L76 70 L102 40', w:3, k:'yesil' }, { t:'l', d:'M96 40 L103 39 L100 46', w:2, k:'yesil' },
    { t:'y', x:70, y:124, m:'1. hafta', b:10 },
    { t:'r', x:140, y:56, w:40, h:48, f:'#F3E6C8' }, { t:'p', d:'M136 56 L160 40 L184 56 Z', f:'kirmizi' },
    { t:'l', d:'M190 76 L200 76', w:1.4, k:'vurgu' }, { t:'r', x:198, y:60, w:34, h:44, f:'#F3E6C8' }, { t:'l', d:'M198 60 L215 46 L232 60', w:1.6, kesik:true },
    ...kutu(186, 26, 76, 'umut verici', 10), { t:'y', x:216, y:120, m:'2. şube?', b:9 } ] },
  ambiguous: { boy: 134, alt: 'Yönergeler öyle belirsizdi ki sınıfın yarısı yanlış soruyu cevapladı.', o: [
    { t:'r', x:20, y:20, w:100, h:40, rx:4, f:'#FFFFFF' }, { t:'y', x:70, y:38, m:'“2. soruyu', b:9 }, { t:'y', x:70, y:52, m:'ya da 3’ü…”', b:9 },
    ...[40, 70, 100].map(x => kis(x, 120, .7, 'su', 'ileri', 'mutlu')), ...[150, 180, 210].map(x => kis(x, 120, .7, 'turuncu', 'bas', 'sasir')),
    { t:'y', x:70, y:80, m:'2. soru', b:10 }, { t:'y', x:180, y:80, m:'3. soru', b:10 }, { t:'y', x:180, y:44, m:'?', b:18 } ] },
  dominant: { boy: 134, alt: 'İnternet gelene kadar çoğu ailenin başlıca haber kaynağı televizyondu.', o: [
    { t:'r', x:20, y:24, w:110, h:76, rx:8, f:'#9B6B47' }, { t:'r', x:30, y:32, w:80, h:60, rx:4, f:'buz' }, { t:'c', x:120, y:46, r:4, f:'gri' }, { t:'c', x:120, y:62, r:4, f:'gri' },
    { t:'y', x:70, y:66, m:'HABERLER', b:10 }, { t:'l', d:'M50 24 L36 6 M90 24 L104 6', w:1.6, k:'gri' },
    { t:'c', x:180, y:70, r:36, f:'su' }, { t:'p', d:'M180 70 L180 34 A36 36 0 1 1 152 92 Z', f:'turuncu' }, { t:'y', x:196, y:84, m:'TV', b:12 },
    ...kutu(90, 120, 82, 'başlıca kaynak', 9) ] },
  impulsive: { boy: 134, alt: 'Ani bir kararla Roma’ya bir hafta sonu tatili ayırttı; ancak sonra kalan parasına baktı.', o: [
    kis(56, 124, 1.15, 'turuncu', 'bas', 'mutlu'), { t:'r', x:70, y:84, w:20, h:32, rx:4, f:'#2A2550' }, { t:'r', x:73, y:88, w:14, h:20, rx:2, f:'#9FE07A' },
    ...balon(60, 34, 70, 'Roma: AL!', 11),
    okt(104, 80, 24),
    { t:'r', x:150, y:66, w:60, h:36, rx:6, f:'kahve' }, { t:'y', x:180, y:90, m:'₺ ?', b:12 },
    kis(214, 124, .7, 'turuncu', 'asagi', 'sasir'), ...kutu(180, 40, 60, 'sonra…', 10) ] },
  overconfident: { boy: 134, alt: 'Takım finalden önce öyle aşırı kendine güveniyordu ki neredeyse hiç çalışmadı ve üç farkla kaybetti.', o: [
    ...iki(),
    kis(40, 116, .8, 'kirmizi', 'asagi', 'mutlu'), kis(70, 116, .8, 'kirmizi', 'asagi', 'mutlu'), { t:'y', x:56, y:60, m:'kolay!', b:12 }, { t:'r', x:20, y:116, w:80, h:8, rx:3, f:'#9FD6E8' },
    { t:'r', x:146, y:40, w:70, h:34, rx:4, f:'#20304A' }, { t:'y', x:181, y:64, m:'0 – 3', b:14 },
    kis(181, 120, .8, 'kirmizi', 'asagi', 'uzgun'),
    { t:'y', x:59, y:28, m:'antrenman yok', b:10 }, { t:'y', x:181, y:28, m:'final', b:12 } ] },
  symbolic: { boy: 134, alt: 'Konuğa kentin anahtarını vermek sembolik bir harekettir; ona gerçek bir yetki vermez.', o: [
    kis(60, 124, 1.15, '#2F4E8C', 'ileri', 'mutlu'), kis(180, 124, 1.1, 'pembe', 'ileri', 'mutlu'),
    { t:'c', x:112, y:84, r:10, f:'#E8C15A' }, { t:'c', x:112, y:84, r:4, f:'#FFF3D6' }, { t:'r', x:120, y:82, w:26, h:5, f:'#E8C15A' }, { t:'r', x:138, y:86, w:4, h:6, f:'#E8C15A' },
    ...kutu(120, 30, 76, 'sembolik', 11), { t:'y', x:180, y:56, m:'yetki: yok', b:10 } ] },
  spontaneous: { boy: 134, alt: 'Yaşlı şarkıcı sahneye çıkınca seyirciler kendiliğinden alkışa boğuldu.', o: [
    { t:'r', x:60, y:20, w:120, h:50, f:'#5A3E2B' }, kis(120, 70, .9, 'koyu', 'asagi', 'mutlu'), { t:'l', d:'M120 34 l0 -6', w:1 },
    ...[30, 66, 102, 138, 174, 210].map((x, i) => kis(x, 128, .65, undefined, 'yukari', 'mutlu')),
    { t:'l', d:'M20 84 l-6 -6 M60 84 l-6 -6 M100 84 l-6 -6 M140 84 l6 -6 M180 84 l6 -6 M220 84 l6 -6', w:1.4, k:'vurgu' },
    ...kutu(196, 30, 80, 'alkış! alkış!', 9) ] },
  atmospheric: { boy: 134, alt: 'Dağa tırmandıkça hava basıncı düzenli olarak düşer.', o: [
    { t:'p', d:'M10 128 L120 20 L230 128 Z', f:'dag' }, { t:'p', d:'M104 36 L120 20 L136 36 Z', f:'kar' },
    ...[[60, 112, 4], [60, 100, 4], [60, 88, 4], [74, 110, 4], [74, 96, 4], [90, 74, 3], [96, 82, 3], [116, 44, 2]].map(([x, y, r]) => ({ t:'c', x, y, r, f:'#4F9FC9' })),
    { t:'r', x:170, y:30, w:56, h:44, rx:6, f:'#FFFFFF' }, { t:'y', x:198, y:50, m:'basınç', b:9 }, { t:'l', d:'M198 56 L198 68 M194 64 l4 4 l4 -4', w:1.8, k:'vurgu' },
    ...kutu(196, 100, 64, 'yükseldikçe', 9) ] },
  beneficial: { boy: 134, alt: 'Uzun süre ders çalışan öğrenciler için saatte bir kısa mola yararlı olabilir.', o: [
    { t:'r', x:20, y:90, w:90, h:8, f:'agac' }, kis(54, 90, .9, 'su', 'yukari', 'mutlu'), { t:'r', x:70, y:78, w:30, h:12, f:'#FFFFFF' },
    ...saat(170, 46, 20), { t:'p', d:'M170 46 L170 26 A20 20 0 0 1 190 46 Z', f:'#C9F0B4' }, { t:'y', x:170, y:84, m:'50 dk + 10 dk mola', b:9 },
    ...kutu(170, 116, 52, 'yararlı', 10), { t:'y', x:60, y:30, m:'esneme', b:11 } ] },
  diverse: { boy: 134, alt: 'Kentin yüzden fazla ülkeden gelen insanlardan oluşan çeşitli bir nüfusu var.', o: [
    { t:'r', x:0, y:116, w:240, h:18, f:'yol' },
    ...Array.from({ length: 9 }, (_, i) => kis(22 + i * 24, 116, .75, ['kirmizi', 'sari', 'su', 'yesil', 'pembe', 'turuncu', 'koyu', '#7FD8B6', '#C9A06A'][i], i % 2 ? 'yukari' : 'asagi', 'mutlu')),
    { t:'l', d:'M20 40 L220 40', w:1.2 }, ...Array.from({ length: 10 }, (_, i) => ({ t:'r', x:24 + i * 20, y:40, w:12, h:10, f:['kirmizi', 'sari', 'su', 'yesil', 'pembe'][i % 5] })),
    ...kutu(120, 22, 80, '100+ ülke', 10) ] },
  'life-threatening': { boy: 134, alt: 'Dağcı ağır ama hayati tehlike taşımayan yaralarla dağdan kurtarıldı.', o: [
    { t:'p', d:'M0 128 L80 30 L160 128 Z', f:'dag' },
    { t:'r', x:150, y:80, w:76, h:14, rx:4, f:'turuncu' }, kis(176, 80, .7, 'su', 'asagi', 'uzgun'), { t:'r', x:170, y:64, w:12, h:6, f:'#FFFFFF' },
    kis(210, 118, .8, 'kirmizi', 'tasi'),
    ...kutu(80, 22, 60, 'ağır', 11), ...kutu(190, 30, 92, 'hayati tehlike yok', 8), { t:'c', x:232, y:52, r:6, f:'yesil' } ] },

  // ---- isimler ----
  hypertension: { boy: 134, alt: 'Yüksek tansiyonu küçük bir ameliyat öncesi rutin kontrolde tesadüfen fark edildi.', o: [
    { t:'r', x:20, y:60, w:100, h:24, rx:12, f:'ten' }, { t:'r', x:46, y:56, w:40, h:32, rx:6, f:'su' }, { t:'l', d:'M86 72 Q110 70 130 60', w:2 },
    { t:'r', x:130, y:30, w:80, h:56, rx:6, f:'#FFFFFF' }, { t:'y', x:170, y:54, m:'150/95', b:14 }, { t:'y', x:170, y:74, m:'yüksek!', b:10 },
    { t:'y', x:70, y:116, m:'rutin kontrol', b:11 }, ...kutu(196, 116, 60, 'tesadüfen', 9) ] },
  onset: { boy: 134, alt: 'Hastalığının başlangıcından beri koşuyu bırakmak zorunda kaldı.', o: [
    { t:'l', d:'M20 70 L220 70', w:2 }, { t:'l', d:'M120 60 L120 80', w:2.4, k:'kirmizi' }, { t:'y', x:120, y:96, m:'başlangıç', b:11 },
    kis(60, 60, .8, 'pembe', 'ileri', 'mutlu'), { t:'l', d:'M40 54 l-10 0 M42 46 l-12 0', w:1.4, k:'gri' },
    kis(180, 60, .8, 'pembe', 'asagi', 'uzgun'), { t:'p', d:'M200 52 Q206 46 212 52 L212 58 L200 58 Z', f:'su' }, { t:'l', d:'M196 46 L216 62 M216 46 L196 62', w:2, k:'kirmizi' },
    { t:'y', x:60, y:120, m:'koşuyordu', b:10 }, { t:'y', x:180, y:120, m:'artık koşamıyor', b:10 } ] },
  complication: { boy: 134, alt: 'Ameliyat sorunsuz geçti ve hiçbir komplikasyon olmadı.', o: [
    { t:'r', x:30, y:76, w:120, h:12, rx:4, f:'#9FD6E8' }, { t:'l', d:'M40 88 L40 112 M140 88 L140 112', w:2, k:'gri' }, { t:'c', x:46, y:68, r:9, f:'ten' }, { t:'r', x:56, y:66, w:86, h:12, rx:5, f:'#FFFFFF' },
    { t:'r', x:160, y:28, w:66, h:80, rx:3, f:'#FFFFFF' }, ...['kanama ✗', 'enfek. ✗', 'ateş ✗'].map((m, i) => ({ t:'y', x:193, y:48 + i * 20, m, b:9 })),
    ...kutu(90, 30, 82, 'komplikasyon yok', 9), { t:'c', x:214, y:104, r:8, f:'yesil' }, { t:'y', x:214, y:108, m:'✓', b:10 } ] },
  agony: { boy: 134, alt: 'Genç futbolcu bileğini burkunca acı içinde çimlere uzandı.', o: [
    { t:'r', x:0, y:90, w:240, h:44, f:'yesil' }, { t:'l', d:'M120 90 L120 134', w:1.4, k:'beyaz' },
    { t:'c', x:80, y:96, r:9, f:'ten' }, { t:'r', x:90, y:90, w:50, h:14, rx:6, f:'kirmizi' }, { t:'l', d:'M140 96 L170 92 M140 100 L168 104', w:3, k:'ten' },
    { t:'e', x:172, y:104, rx:6, ry:5, f:'#FF8A8A' }, { t:'l', d:'M176 92 l4 -6 M184 98 l6 -2 M180 112 l6 4', w:1.6, k:'kirmizi' },
    { t:'c', x:210, y:76, r:7, f:'#FFFFFF' }, ...kutu(80, 40, 70, 'büyük acı', 11) ] },
  anaemia: { boy: 134, alt: 'Sürekli yorgunluğunun nedeni iş stresi değil kansızlık çıktı.', o: [
    kis(50, 124, 1.15, 'pembe', 'asagi', 'uzgun'), { t:'y', x:76, y:64, m:'z z', b:11 },
    { t:'r', x:110, y:30, w:50, h:24, rx:4, f:'#FFFFFF' }, { t:'y', x:135, y:46, m:'stres?', b:10 }, { t:'l', d:'M114 42 L156 42', w:2, k:'kirmizi' },
    { t:'r', x:110, y:72, w:110, h:44, rx:4, f:'#FFFFFF' }, { t:'y', x:165, y:90, m:'Hb: düşük', b:11 }, { t:'y', x:165, y:106, m:'kansızlık ✓', b:10 },
    ...[[196, 40], [210, 50], [200, 56]].map(([x, y]) => ({ t:'e', x, y, rx:6, ry:4, f:'#FFB3B3' })) ] },
  ailment: { boy: 134, alt: 'Eczacılar soğuk algınlığı ve hafif baş ağrısı gibi küçük rahatsızlıklarda yol gösterebilir.', o: [
    { t:'r', x:120, y:20, w:110, h:90, f:'#FFFFFF' }, { t:'r', x:166, y:28, w:18, h:6, f:'yesil' }, { t:'r', x:172, y:22, w:6, h:18, f:'yesil' }, { t:'r', x:130, y:50, w:90, h:6, f:'agac' }, { t:'r', x:130, y:76, w:90, h:6, f:'agac' },
    ...[[136, 40], [156, 40], [200, 40], [140, 66], [180, 66]].map(([x, y]) => ({ t:'r', x, y, w:12, h:10, rx:2, f:'pembe' })),
    kis(60, 124, 1.1, 'su', 'bas', 'uzgun'), { t:'p', d:'M74 82 q-2 6 0 8 q2 -2 0 -8 Z', f:'su' },
    ...kutu(60, 30, 86, 'küçük rahatsızlık', 9) ] },
  parenting: { boy: 134, alt: 'Ebeveynlik kitapları anne babaların ne kadar katı olması gerektiği konusunda çelişkili öğütler verir.', o: [
    { t:'r', x:20, y:40, w:44, h:56, rx:3, f:'su' }, { t:'y', x:42, y:66, m:'katı ol', b:9 },
    { t:'r', x:176, y:40, w:44, h:56, rx:3, f:'pembe' }, { t:'y', x:198, y:66, m:'esnek ol', b:9 },
    kis(110, 124, 1.05, 'yesil', 'bas', 'sasir'), kis(136, 124, .55, 'sari'), { t:'y', x:120, y:46, m:'?', b:18 },
    ...kutu(120, 18, 92, 'çelişkili öğüt', 9) ] },
  patron: { boy: 134, alt: 'Genç besteci yurt dışındaki eğitimini karşılayan varlıklı bir hamiye rastladığı için şanslıydı.', o: [
    kis(60, 124, 1.15, 'koyu', 'ileri', 'mutlu'), { t:'p', d:'M48 78 L48 70 L53 74 L58 66 L63 74 L68 70 L68 78 Z', f:'sari' },
    { t:'e', x:96, y:96, rx:12, ry:9, f:'#E8C15A' }, { t:'y', x:96, y:100, m:'₺', b:10 },
    kis(150, 124, 1, 'pembe', 'yukari', 'mutlu'), ...[[176, 50], [190, 40]].map(([x, y]) => ({ t:'l', d:`M${x} ${y} l0 -12 l6 -2 M${x} ${y} m-3 0 a3 2 0 1 0 6 0 a3 2 0 1 0 -6 0`, w:1.4, k:'vurgu' })),
    { t:'r', x:196, y:70, w:36, h:24, rx:3, f:'#F3E6C8' }, { t:'y', x:214, y:86, m:'okul', b:8 }, ...kutu(60, 28, 52, 'hami', 11) ] },
  creditor: { boy: 134, alt: 'Küçük dükkân kapanınca sahibi alacaklılarına ödemek için mobilyaları sattı.', o: [
    { t:'r', x:14, y:40, w:80, h:70, f:'#F3E6C8' }, { t:'r', x:26, y:56, w:56, h:16, rx:2, f:'#FFFFFF' }, { t:'y', x:54, y:68, m:'KAPANDI', b:8 },
    { t:'r', x:110, y:90, w:30, h:6, f:'agac' }, { t:'l', d:'M112 96 l0 14 M138 96 l0 14', w:2, k:'agac' }, { t:'p', d:'M114 74 L136 74 L136 90 L114 90 Z', f:'agac' },
    { t:'y', x:125, y:66, m:'satılık', b:9 },
    ...[180, 210].map(x => kis(x, 120, .8, 'gri', 'ileri')), { t:'y', x:196, y:66, m:'alacaklılar', b:9 },
    { t:'l', d:'M144 100 L166 100', w:1.4, k:'vurgu', kesik:true }, ...[[170, 92]].map(([x, y]) => ({ t:'e', x, y, rx:8, ry:3.4, f:'#E8C15A' })) ] },
  conservation: { boy: 134, alt: 'Korunum kavramını kavramış çocuk, uzun ince bir şekle getirilen kil topunun aynı miktarda kil içerdiğini bilir.', o: [
    { t:'c', x:46, y:80, r:22, f:'#C96A3A' }, okt(78, 80, 30), { t:'r', x:120, y:72, w:110, h:16, rx:8, f:'#C96A3A' },
    { t:'y', x:120, y:116, m:'=', b:18 }, { t:'y', x:46, y:116, m:'top', b:10 }, { t:'y', x:176, y:116, m:'uzun ince', b:10 },
    kis(196, 64, .6, 'sari', 'bas', 'mutlu'), ...kutu(110, 30, 82, 'miktar aynı', 10) ] },
  receptor: { boy: 134, alt: 'Kafein beyindeki bazı alıcıları tıkayarak bizi uyanık tutar.', o: [
    { t:'r', x:20, y:90, w:200, h:20, f:'#FFC3CF' },
    ...[50, 110, 170].flatMap(x => [{ t:'p', d:`M${x - 10} 90 L${x - 10} 74 L${x - 4} 74 L${x - 4} 84 L${x + 4} 84 L${x + 4} 74 L${x + 10} 74 L${x + 10} 90 Z`, f:'#C9A6FF' }]),
    { t:'r', x:46, y:74, w:8, h:10, f:'#8B5E3C' }, { t:'r', x:106, y:74, w:8, h:10, f:'#8B5E3C' },
    { t:'p', d:'M176 30 L196 30 L193 52 L179 52 Z', f:'#FFFFFF' }, { t:'r', x:178, y:34, w:16, h:8, f:'#8B5E3C' },
    ...kutu(80, 36, 60, 'kafein', 11), { t:'y', x:110, y:126, m:'alıcılar', b:11 }, kis(214, 80, .5, 'su', 'yukari', 'mutlu') ] },
  computation: { boy: 134, alt: 'Gelecek haftanın havasını tahmin etmek en hızlı makinelerde bile muazzam hesaplama gerektirir.', o: [
    ...[10, 50, 90].flatMap(x => [{ t:'r', x, y:30, w:34, h:90, rx:2, f:'#4B4B52' }, ...[40, 54, 68, 82, 96].map(y => ({ t:'r', x:x + 6, y, w:22, h:6, rx:1, f:'#2A2550' })), ...[44, 58, 72].map(y => ({ t:'c', x:x + 28, y, r:1.4, f:'yesil' }))]),
    { t:'l', d:'M128 70 L150 70 M144 64 L151 70 L144 76', w:1.6, k:'vurgu' },
    ...[[170, 50, 'sari'], [200, 50, 'su'], [170, 84, 'su'], [200, 84, 'sari']].flatMap(([x, y, f]) => [{ t:'r', x, y, w:26, h:26, rx:4, f:'#FFFFFF' }, { t:'c', x:x + 13, y:y + 13, r:7, f }]),
    ...kutu(190, 24, 60, '7 gün', 10) ] },
  trait: { boy: 134, alt: 'Sabır ailemizde olan bir özellik değil: hiçbirimiz kuyrukta beklemeye dayanamayız.', o: [
    { t:'r', x:180, y:40, w:50, h:80, f:'#F3E6C8' }, { t:'r', x:190, y:56, w:30, h:16, rx:2, f:'#FFFFFF' }, { t:'y', x:205, y:68, m:'SIRA', b:8 },
    ...[[60, 'kirmizi'], [100, 'kirmizi'], [140, 'kirmizi']].map(([x, f]) => kis(x, 120, .8, f, 'bas', 'uzgun')),
    { t:'l', d:'M48 72 l-6 -6 M88 72 l-6 -6 M128 72 l-6 -6', w:1.4, k:'kirmizi' },
    ...kutu(90, 30, 82, 'sabır yok', 11), { t:'y', x:100, y:56, m:'aile', b:10 } ] },
  aversion: { boy: 134, alt: 'Riskten öyle kaçıyor ki bütün birikimini neredeyse hiç faiz vermeyen bir hesapta tutuyor.', o: [
    { t:'r', x:20, y:44, w:80, h:60, rx:4, f:'#D7DBE2' }, { t:'c', x:60, y:74, r:14, f:'gri' }, { t:'y', x:60, y:118, m:'faiz: %0,1', b:9 },
    { t:'l', d:'M130 104 L150 70 L170 90 L190 40 L210 80', w:2.4, k:'kirmizi' }, { t:'y', x:170, y:118, m:'risk', b:10 },
    kis(116, 124, .7, 'su', 'asagi', 'sasir'), { t:'l', d:'M126 90 L140 80', w:1.6, k:'kirmizi' }, { t:'l', d:'M134 76 l6 4 l-4 6', w:1.6, k:'kirmizi' },
    ...kutu(110, 22, 82, 'riskten kaçar', 10) ] },
  novelty: { boy: 134, alt: 'Birçok kullanıcı yeni bir uygulamayı önce sever, ama yenilik geçince açmayı bırakır.', o: [
    ...iki(),
    { t:'r', x:44, y:44, w:30, h:52, rx:5, f:'#2A2550' }, { t:'r', x:48, y:50, w:22, h:36, rx:2, f:'#FFE38A' }, { t:'p', d:'M59 58 L62 66 L70 66 L64 71 L66 79 L59 74 L52 79 L54 71 L48 66 L56 66 Z', f:'turuncu' },
    ...[[34, 42], [86, 46], [82, 94]].map(([x, y]) => ({ t:'l', d:`M${x} ${y - 6} l0 12 M${x - 6} ${y} l12 0`, w:1.6, k:'sari' })),
    { t:'r', x:166, y:44, w:30, h:52, rx:5, f:'#2A2550' }, { t:'r', x:170, y:50, w:22, h:36, rx:2, f:'#D7DBE2' }, { t:'y', x:181, y:72, m:'z z', b:9 },
    { t:'y', x:59, y:28, m:'1. gün', b:12 }, { t:'y', x:181, y:28, m:'1 ay sonra', b:12 } ] },
  affinity: { boy: 134, alt: 'Kıyıda büyüyen çocuklar çoğu zaman denize karşı güçlü bir yakınlık geliştirir.', o: [
    { t:'r', x:0, y:70, w:240, h:30, f:'su' }, dalga(80), { t:'r', x:0, y:100, w:240, h:34, f:'#F2D69A' },
    kis(80, 118, .8, 'sari', 'yukari', 'mutlu'), kis(110, 118, .8, 'pembe', 'yukari', 'mutlu'),
    { t:'p', d:'M150 50 C142 42 132 50 140 58 L150 68 L160 58 C168 50 158 42 150 50 Z', f:'pembe' },
    { t:'c', x:200, y:30, r:12, f:'sari' }, { t:'p', d:'M180 112 L196 106 L198 118 Z', f:'#FF9EC7' },
    ...kutu(60, 30, 80, 'deniz sevgisi', 10) ] },
  coalition: { boy: 134, alt: 'Yerel yardım kuruluşları ve okullardan oluşan bir koalisyon kasabada daha güvenli bisiklet yolları için kampanya yürüttü.', o: [
    { t:'r', x:0, y:110, w:240, h:24, f:'yol' }, { t:'r', x:0, y:110, w:240, h:8, f:'yesil' },
    ...[[30, 'okul', 'sari'], [90, 'dernek', 'su'], [150, 'okul', 'pembe'], [210, 'dernek', 'turuncu']].flatMap(([x, m, f]) => [kis(x, 108, .8, f, 'yukari', 'mutlu'), { t:'y', x, y:60, m, b:9 }]),
    { t:'r', x:70, y:14, w:100, h:26, rx:4, f:'#FFFFFF' }, { t:'y', x:120, y:32, m:'güvenli bisiklet yolu!', b:9 },
    { t:'c', x:200, y:126, r:5, f:'yok' }, { t:'c', x:216, y:126, r:5, f:'yok' } ] },
  era: { boy: 134, alt: 'Matbaanın icadı bilginin yayılmasında yeni bir çağın başlangıcı oldu.', o: [
    { t:'l', d:'M14 90 L226 90', w:2 }, { t:'l', d:'M100 80 L100 100', w:3, k:'kirmizi' },
    { t:'r', x:20, y:44, w:40, h:30, rx:2, f:'#F3E6C8' }, { t:'l', d:'M24 50 q4 4 8 0 t8 0 t8 0 M24 60 q4 4 8 0 t8 0', w:1, k:'agac' }, { t:'y', x:40, y:112, m:'el yazısı', b:9 },
    { t:'r', x:84, y:40, w:32, h:34, f:'agac' }, { t:'r', x:80, y:34, w:40, h:8, f:'gri' }, { t:'y', x:100, y:112, m:'matbaa', b:10 },
    ...[0, 1, 2, 3].map(i => ({ t:'r', x:140 + i * 22, y:46 + (i % 2) * 6, w:18, h:24, rx:2, f:['su', 'pembe', 'sari', 'yesil'][i] })), { t:'y', x:176, y:112, m:'kitaplar her yerde', b:9 },
    ...kutu(180, 22, 60, 'yeni çağ', 10) ] },
};
