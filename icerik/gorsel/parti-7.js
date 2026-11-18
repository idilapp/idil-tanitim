// Kelime kartı görselleri · 7. parti (18 Kasım 2026): 25 kart. Tarz v11; her sahne kartın kendi örnek cümlesini anlatır. Çizimler özgün.
import { ev, cim, dalga, govde } from './parca.js';

const okt = (x, y, uz = 20) => ({ t:'l', d:`M${x} ${y} L${x + uz} ${y} M${x + uz - 5} ${y - 5} L${x + uz + 1} ${y} L${x + uz - 5} ${y + 5}`, w:2 });
const balon = (x, y, w, m, b = 12) => [{ t:'r', x:x - w / 2, y:y - 14, w, h:24, rx:10, f:'beyaz' }, { t:'y', x, y:y + 3, m, b }];
const iki = () => [{ t:'r', x:4, y:6, w:110, h:122, rx:12, f:'beyaz' }, { t:'r', x:126, y:6, w:110, h:122, rx:12, f:'beyaz' }];
const balik = (x, y, olu) => [{ t:'e', x, y, rx:10, ry:5, f:'turuncu' }, { t:'p', d:`M${x + 9} ${y} L${x + 16} ${y - 5} L${x + 16} ${y + 5} Z`, f:'turuncu' },
  olu ? { t:'l', d:`M${x - 7} ${y - 3} l3 3 M${x - 4} ${y - 3} l-3 3`, w:1 } : { t:'c', x:x - 5, y:y - 1, r:1, f:'#4B2E5E' }];
const ekran = (x, y, f) => [{ t:'r', x, y, w:44, h:32, rx:3, f:'#4B4B52' }, { t:'r', x:x + 3, y:y + 3, w:38, h:26, rx:2, f }, { t:'r', x:x + 18, y:y + 32, w:8, h:6, f:'gri' }];
const cekirdek = (x, y) => [{ t:'e', x, y, rx:4, ry:6, f:'#7A4A2A' }, { t:'l', d:`M${x} ${y - 5} q-2 5 0 10`, w:1, k:'#C9A27A' }];

export default {
  // ---- isimler ----
  nectar: { boy: 134, alt: 'Sinek kuşu çiçeğin önünde havada durup içindeki nektarı içiyor.', o: [
    { t:'l', d:'M170 134 Q166 100 172 70', w:2.4, k:'yesil' }, { t:'e', x:156, y:100, rx:12, ry:5, f:'yesil' },
    { t:'p', d:'M172 70 Q150 50 160 36 Q172 44 176 60 Q182 40 198 38 Q200 56 180 72 Z', f:'pembe' }, { t:'c', x:176, y:64, r:4, f:'sari' },
    { t:'e', x:96, y:62, rx:14, ry:8, f:'#3FCF8E' }, { t:'c', x:110, y:56, r:6, f:'#3FCF8E' }, { t:'l', d:'M116 56 L162 60', w:1.4 },
    { t:'p', d:'M92 58 Q80 34 98 30 Q100 46 100 56 Z', f:'#B9F5DC' }, { t:'l', d:'M86 34 l-4 -2 M84 42 l-5 0', w:1.2, k:'gri' },
    { t:'c', x:112, y:54, r:1.2, f:'#4B2E5E' },
    ...balon(70, 112, 60, 'nektar', 12) ] },
  pesticide: { boy: 134, alt: 'Tarım ilacı derenin yakınında kullanılınca aşağıdaki balıklar ölmeye başladı; çiftçi ilaçlamayı bıraktı.', o: [
    { t:'r', x:0, y:96, w:110, h:38, f:'yesil' }, ...[16, 36, 56, 76].map(x => ({ t:'l', d:`M${x} 96 l0 -12`, w:2, k:'#4E9E34' })),
    { t:'k', x:40, y:96, s:.85 }, { t:'r', x:50, y:74, w:14, h:16, rx:3, f:'sari' }, { t:'l', d:'M64 78 L82 70', w:1.6 },
    ...[[90, 64], [98, 70], [94, 56], [104, 62]].map(([x, y]) => ({ t:'c', x, y, r:4, f:'#C9F59A' })), { t:'y', x:94, y:42, m:'ilaç', b:12 },
    { t:'p', d:'M110 96 Q170 84 240 100 L240 134 L110 134 Z', f:'su' }, dalga(116, 110, 240),
    ...balik(170, 110, true), ...balik(210, 118, true),
    { t:'r', x:150, y:20, w:84, h:40, rx:6, f:'beyaz' }, { t:'y', x:192, y:36, m:'ilaçlama', b:10 }, { t:'y', x:192, y:52, m:'durdu', b:12 }, { t:'l', d:'M156 26 L228 54', w:2, k:'kirmizi' } ] },
  hydration: { boy: 134, alt: 'Sıcak dalgasında hemşire yaşlı hastaya düzenli olarak su veriyor.', o: [
    { t:'c', x:212, y:26, r:14, f:'sari' }, { t:'y', x:210, y:62, m:'40°', b:13 },
    { t:'r', x:20, y:84, w:110, h:28, rx:4, f:'beyaz' }, { t:'c', x:40, y:76, r:11, f:'ten' }, { t:'r', x:30, y:62, w:20, h:6, rx:3, f:'gri' },
    { t:'p', d:'M50 84 L130 84 L130 104 L50 104 Z', f:'buz' },
    { t:'k', x:160, y:124, s:1.2, f:'#7FD8B6', kol:'ileri' },
    { t:'p', d:'M128 64 L142 64 L140 82 L130 82 Z', f:'su' },
    ...balon(80, 30, 60, 'su iç', 13) ] },
  pollutant: { boy: 134, alt: 'Kirletici nehre bir kez yayılınca temizlemek çok zor ve pahalı.', o: [
    { t:'p', d:'M0 50 Q120 40 240 56 L240 100 Q120 86 0 96 Z', f:'su' },
    { t:'r', x:10, y:14, w:40, h:36, rx:2, f:'gri' }, { t:'l', d:'M30 50 L30 64', w:4, k:'gri' },
    { t:'p', d:'M24 66 Q60 56 100 70 Q150 64 200 80 Q150 88 100 82 Q60 84 24 76 Z', f:'#6B5A4A' },
    { t:'k', x:190, y:126, s:.8, kol:'ileri' }, { t:'k', x:214, y:126, s:.8, kol:'ileri' },
    ...[[40, 116], [56, 120], [72, 116]].map(([x, y]) => ({ t:'c', x, y, r:6, f:'sari' })), { t:'y', x:56, y:106, m:'pahalı', b:11 },
    { t:'y', x:120, y:24, m:'kirletici yayıldı', b:12 } ] },
  packaging: { boy: 134, alt: 'Bisküviler o kadar çok ambalajla geliyor ki kutu içindeki yiyeceğin iki katı büyüklükte.', o: [
    { t:'r', x:40, y:20, w:120, h:100, rx:4, f:'kraft' }, { t:'l', d:'M40 44 L160 44', w:1.4, k:'agac' },
    { t:'r', x:56, y:60, w:88, h:46, rx:4, f:'#FFF3D6' }, { t:'r', x:66, y:74, w:40, h:18, rx:4, f:'#D9A050' }, { t:'y', x:86, y:88, m:'bisküvi', b:8 },
    ...[[118, 72], [126, 88], [112, 96]].map(([x, y]) => ({ t:'c', x, y, r:5, f:'beyaz' })),
    { t:'l', d:'M176 20 L176 120 M170 26 L176 20 L182 26 M170 114 L176 120 L182 114', w:1.6, k:'vurgu' },
    { t:'y', x:206, y:74, m:'2 kat', b:14 } ] },
  prototype: { boy: 134, alt: 'Mühendisler ilk modeli aylarca denedi; sonra teslimat robotları sokaklara çıktı.', o: [
    ...iki(),
    { t:'r', x:36, y:62, w:40, h:34, rx:6, f:'gri' }, { t:'c', x:44, y:100, r:5, f:'#4B2E5E' }, { t:'c', x:68, y:100, r:5, f:'#4B2E5E' }, { t:'l', d:'M56 62 L56 50', w:1.6 }, { t:'c', x:56, y:48, r:3, f:'kirmizi' },
    { t:'k', x:94, y:118, s:.75 }, { t:'r', x:98, y:84, w:12, h:14, rx:2, f:'kraft' }, { t:'y', x:58, y:28, m:'ilk model', b:11 }, { t:'y', x:58, y:122, m:'aylarca deneme', b:9 },
    ...[[150, 84], [184, 92], [214, 80]].flatMap(([x, y]) => [{ t:'r', x:x - 12, y, w:24, h:20, rx:4, f:'beyaz' }, { t:'c', x:x - 6, y:y + 22, r:3, f:'#4B2E5E' }, { t:'c', x:x + 6, y:y + 22, r:3, f:'#4B2E5E' }]),
    { t:'y', x:180, y:28, m:'sokakta', b:12 } ] },
  triumph: { boy: 134, alt: 'Haftalarca uğraşılan eski radyo sonunda çalışınca küçük bir zafer gibi geliyor.', o: [
    { t:'r', x:20, y:60, w:90, h:56, rx:8, f:'kraft' }, { t:'c', x:46, y:88, r:16, f:'#8B5E3C' }, { t:'r', x:72, y:74, w:30, h:8, rx:2, f:'sari' }, { t:'c', x:86, y:100, r:5, f:'gri' },
    { t:'l', d:'M100 60 L110 30', w:1.6 },
    ...[[120, 40], [138, 28], [130, 56]].map(([x, y]) => ({ t:'l', d:`M${x} ${y} l0 -12 l8 -2 l0 12 M${x} ${y} a3 3 0 1 1 -1 0 M${x + 8} ${y - 2} a3 3 0 1 1 -1 0`, w:1.6, k:'vurgu' })),
    { t:'k', x:190, y:116, s:1.2, kol:'yukari', yuz:'mutlu' },
    { t:'l', d:'M146 116 L166 108 M150 104 l6 0', w:2, k:'gri' },
    ...balon(190, 30, 80, 'başardım!', 12) ] },
  caffeine: { boy: 134, alt: 'Enerji içeceğinde bir bardak koladan çok daha fazla kafein var.', o: [
    ...iki(),
    { t:'r', x:40, y:30, w:30, h:70, rx:6, f:'#5BE0D0' }, { t:'r', x:40, y:30, w:30, h:8, rx:3, f:'gri' }, { t:'y', x:55, y:70, m:'⚡', b:16 },
    ...[[84, 40], [96, 54], [84, 68], [96, 82], [84, 96]].flatMap(([x, y]) => cekirdek(x, y)), { t:'y', x:58, y:122, m:'enerji içeceği', b:10 },
    { t:'p', d:'M162 50 L190 50 L186 100 L166 100 Z', f:'#7A3A2A' }, { t:'r', x:160, y:46, w:32, h:6, rx:2, f:'beyaz' },
    ...cekirdek(206, 74), { t:'y', x:180, y:122, m:'kola', b:11 } ] },
  manuscript: { boy: 134, alt: 'Kütüphane en eski el yazmalarını mürekkep bozulmasın diye serin ve karanlık bir odada saklıyor.', o: [
    { t:'r', x:0, y:0, w:240, h:134, f:'#E8E2F0' },
    { t:'r', x:40, y:40, w:130, h:80, rx:4, f:'#F2E3C9' }, { t:'l', d:'M105 40 L105 120', w:1.6, k:'#C9B08A' },
    { t:'l', d:'M50 54 q10 -3 20 0 t20 0 t10 0 M50 66 q10 -3 20 0 t20 0 t10 0 M50 78 q10 -3 20 0 t20 0 M114 54 q10 -3 20 0 t20 0 t10 0 M114 66 q10 -3 20 0 t20 0 M114 78 q10 -3 20 0 t20 0 t10 0', w:1.2, k:'#6B4A2A' },
    { t:'r', x:192, y:30, w:16, h:62, rx:8, f:'beyaz' }, { t:'r', x:196, y:66, w:8, h:22, rx:4, f:'su' }, { t:'c', x:200, y:92, r:7, f:'su' },
    { t:'y', x:200, y:116, m:'serin', b:12 }, { t:'y', x:105, y:28, m:'el yazması', b:13 } ] },

  // ---- fiiller ----
  switch: { boy: 134, alt: 'E-postalardan muhasebe işine geçmek birkaç dakika sürüyor.', o: [
    ...ekran(14, 30, '#E3F2FF'), { t:'l', d:'M22 40 L50 40 M22 48 L46 48 M22 56 L50 56', w:1.2, k:'gri' }, { t:'y', x:36, y:86, m:'e-posta', b:11 },
    ...ekran(182, 30, '#EEFFDD'), { t:'l', d:'M186 40 L222 40 M186 48 L222 48 M186 56 L222 56 M198 34 L198 60 M210 34 L210 60', w:1, k:'gri' }, { t:'y', x:204, y:86, m:'hesaplar', b:11 },
    { t:'k', x:120, y:124, s:1, yuz:'sasir' },
    { t:'l', d:'M70 50 Q120 20 170 50', w:2, kesik:true }, { t:'l', d:'M163 44 L171 51 L162 55', w:2 },
    { t:'c', x:120, y:66, r:10, f:'beyaz' }, { t:'l', d:'M120 60 L120 66 L125 68', w:1.4 }, { t:'y', x:120, y:24, m:'birkaç dakika', b:11 } ] },
  cram: { boy: 134, alt: 'Sınava bir gece önce yüklenerek çalıştı; bir hafta sonra neredeyse hiçbir şey hatırlamıyor.', o: [
    ...iki(), { t:'r', x:4, y:6, w:110, h:122, rx:12, f:'#3B3570' }, { t:'c', x:94, y:22, r:7, f:'#FFF4B8' },
    ...[0, 1, 2, 3, 4].map(i => ({ t:'r', x:20, y:96 - i * 7, w:34, h:7, rx:1, f:['kirmizi', 'su', 'sari', 'yesil', 'pembe'][i] })),
    { t:'k', x:78, y:118, s:.9, yuz:'uzgun' }, { t:'y', x:58, y:24, m:'bütün gece', b:11 },
    { t:'k', x:180, y:118, s:.9, yuz:'sasir' }, { t:'e', x:180, y:52, rx:30, ry:18, f:'beyaz' }, { t:'y', x:180, y:58, m:'?', b:18 },
    { t:'y', x:180, y:24, m:'1 hafta sonra', b:11 } ] },
  contaminate: { boy: 134, alt: 'Selden sonra kasabanın içme suyuna kanalizasyon karıştı.', o: [
    { t:'r', x:0, y:70, w:240, h:64, f:'#8C7A5A' }, dalga(90),
    { t:'r', x:20, y:40, w:16, h:38, f:'gri' }, { t:'p', d:'M36 70 Q50 70 60 82', w:1, f:'yok' }, { t:'l', d:'M36 74 Q50 74 58 84', w:4, k:'gri' },
    { t:'p', d:'M150 20 L196 20 L196 34 L178 34 L178 46 L168 46 L168 34 L150 34 Z', f:'gri' },
    { t:'l', d:'M173 48 L173 70', w:4, k:'#8C7A5A' },
    { t:'p', d:'M200 56 L224 56 L220 88 L204 88 Z', f:'#A88C5A' },
    { t:'c', x:212, y:30, r:10, f:'kirmizi' }, { t:'y', x:212, y:35, m:'✗', b:12 },
    { t:'y', x:80, y:30, m:'sel + lağım', b:12 } ] },
  inject: { boy: 134, alt: 'Veteriner yarayı temizlemeden önce köpeğe ağrı kesici iğne yapıyor.', o: [
    { t:'r', x:0, y:104, w:240, h:30, f:'beyaz' },
    { t:'e', x:150, y:90, rx:30, ry:16, f:'kraft' }, { t:'c', x:184, y:76, r:12, f:'kraft' }, { t:'e', x:192, y:68, rx:5, ry:9, f:'#8B5E3C' }, { t:'c', x:190, y:76, r:1.4, f:'#4B2E5E' },
    { t:'l', d:'M126 100 l-2 8 M140 104 l0 6 M162 104 l0 6 M176 100 l2 8', w:2, k:'agac' }, { t:'r', x:140, y:80, w:20, h:8, rx:2, f:'beyaz' },
    { t:'k', x:60, y:118, s:1.2, f:'#7FD8B6', kol:'ileri' },
    { t:'r', x:84, y:72, w:30, h:8, rx:2, f:'buz' }, { t:'l', d:'M114 76 L128 80 M80 76 L76 76', w:1.6 },
    { t:'y', x:110, y:30, m:'ağrı kesici', b:12 } ] },
  thrive: { boy: 134, alt: 'Bazı bitkiler başkalarının yetişemediği fakir toprakta bile gürleşiyor.', o: [
    { t:'r', x:0, y:96, w:240, h:38, f:'tas' }, { t:'l', d:'M20 106 l10 4 l-4 8 M200 108 l10 6', w:1.2, k:'iz' },
    { t:'l', d:'M50 96 Q48 86 40 82 M190 96 Q192 86 200 84', w:1.6, k:'#B88A3A' }, { t:'e', x:38, y:82, rx:6, ry:3, f:'#C9B07A' }, { t:'e', x:202, y:84, rx:6, ry:3, f:'#C9B07A' },
    { t:'l', d:'M120 96 L120 44 M120 76 L100 62 M120 66 L142 52', w:3, k:'#4E9E34' },
    ...[[100, 60], [142, 50], [120, 40], [108, 76], [134, 70]].map(([x, y]) => ({ t:'e', x, y, rx:9, ry:5, f:'yesil' })),
    ...[[120, 34], [96, 54], [148, 44]].map(([x, y]) => ({ t:'c', x, y, r:5, f:'pembe' })),
    { t:'y', x:120, y:126, m:'fakir toprakta bile', b:11 } ] },
  wobble: { boy: 134, alt: 'Bir ayağı kısa olduğu için masa sallanıyor; fincan devrilecek gibi.', o: [
    { t:'r', x:0, y:112, w:240, h:22, f:'kraft' },
    { t:'p', d:'M60 60 L180 66 L180 74 L60 68 Z', f:'agac' },
    { t:'l', d:'M70 68 L70 112 M170 74 L170 102', w:4, k:'agac' }, { t:'c', x:170, y:106, r:4, f:'kirmizi' },
    { t:'p', d:'M108 46 L126 48 L124 64 L110 62 Z', f:'beyaz' }, { t:'l', d:'M126 52 q6 2 0 8', w:1.6 },
    { t:'l', d:'M50 54 q-4 6 0 12 M190 60 q4 6 0 12', w:1.6, k:'gri' },
    { t:'y', x:170, y:128, m:'kısa ayak', b:11 }, { t:'y', x:120, y:30, m:'sallanır', b:13 } ] },
  irrigate: { boy: 134, alt: 'Nehirden alınan su vadideki pamuk tarlalarını sulamak için kanallara veriliyor.', o: [
    { t:'p', d:'M0 0 L40 0 Q50 60 30 134 L0 134 Z', f:'su' },
    { t:'r', x:40, y:0, w:200, h:134, f:'#C9A86A' },
    ...[28, 62, 96].map(y => ({ t:'p', d:`M40 ${y} L240 ${y + 6} L240 ${y + 12} L40 ${y + 8} Z`, f:'su' })),
    ...Array.from({ length: 3 }, (_, r) => Array.from({ length: 6 }, (_, i) => [70 + i * 30, 48 + r * 34])).flat().flatMap(([x, y]) => [{ t:'l', d:`M${x} ${y + 8} l0 -8`, w:1.4, k:'#4E9E34' }, { t:'c', x, y:y - 2, r:4.5, f:'beyaz' }]),
    { t:'y', x:20, y:120, m:'nehir', b:11 }, { t:'r', x:150, y:112, w:82, h:20, rx:6, f:'beyaz' }, { t:'y', x:191, y:126, m:'pamuk tarlası', b:10 } ] },
  conceal: { boy: 134, alt: 'Eski harita yüz yılı aşkın süre bir tablonun arkasına gizlenmişti.', o: [
    { t:'r', x:20, y:14, w:200, h:110, f:'#F2E3C9' },
    { t:'r', x:60, y:30, w:90, h:70, rx:2, f:'#FFF3D6' }, { t:'l', d:'M70 46 Q90 40 110 52 Q126 62 140 50', w:1.6, k:'su' }, { t:'c', x:90, y:70, r:3, f:'kirmizi' }, { t:'l', d:'M120 74 l6 6 M126 74 l-6 6', w:1.6, k:'kirmizi' },
    { t:'p', d:'M150 26 L206 34 L206 104 L150 104 Z', f:'kraft' }, { t:'p', d:'M156 34 L200 40 L200 98 L156 98 Z', f:'#9FD6E8' }, { t:'c', x:180, y:60, r:8, f:'sari' },
    { t:'y', x:105, y:118, m:'gizli harita', b:12 }, { t:'y', x:105, y:12, m:'100+ yıl', b:11 } ] },
  deteriorate: { boy: 134, alt: 'Öğleden sonra hava gittikçe kötüleşti ve maç yarıda bırakıldı.', o: [
    { t:'c', x:30, y:30, r:12, f:'sari' }, { t:'y', x:30, y:58, m:'12.00', b:10 },
    { t:'p', d:'M106 34 q-10 0 -10 -8 q0 -9 12 -9 q4 -10 16 -8 q10 -8 20 0 q13 -1 13 9 q9 2 7 9 q0 7 -9 7 z', f:'bulut' }, { t:'y', x:120, y:58, m:'14.00', b:10 },
    { t:'p', d:'M196 34 q-10 0 -10 -8 q0 -9 12 -9 q4 -10 16 -8 q10 -8 20 0 q13 -1 13 9 q9 2 7 9 q0 7 -9 7 z', f:'gri' }, { t:'l', d:'M206 40 l-6 12 l6 0 l-6 12 M222 40 l-2 8 M232 40 l-2 8', w:2, k:'sari' }, { t:'y', x:210, y:78, m:'16.00', b:10 },
    { t:'l', d:'M50 30 L86 30 M140 30 L176 30', w:1.6, kesik:true },
    { t:'r', x:0, y:96, w:240, h:38, f:'yesil' }, { t:'l', d:'M120 96 L120 134', w:1.4, k:'beyaz' },
    { t:'r', x:84, y:104, w:72, h:22, rx:6, f:'beyaz' }, { t:'y', x:120, y:119, m:'maç iptal', b:12 } ] },

  // ---- sıfatlar ----
  reflective: { boy: 134, alt: 'Gece bisikletlinin yansıtıcı yeleği arabanın farlarında parlıyor.', o: [
    { t:'r', x:0, y:0, w:240, h:134, f:'#3B3570' }, { t:'r', x:0, y:104, w:240, h:30, f:'#5A5A66' },
    { t:'p', d:'M200 90 L120 60 L120 110 Z', f:'#FFF4B8' }, { t:'r', x:200, y:82, w:36, h:20, rx:5, f:'kirmizi' }, { t:'c', x:204, y:90, r:4, f:'sari' },
    { t:'l', d:'M70 108 A12 12 0 1 0 94 108 A12 12 0 1 0 70 108 M110 108 A12 12 0 1 0 134 108 A12 12 0 1 0 110 108 M82 108 L96 90 L122 108 M94 90 L114 90', w:2, k:'beyaz' },
    { t:'k', x:100, y:88, s:.9, f:'#E8FF3A' }, { t:'l', d:'M88 70 l-8 -4 M112 70 l8 -4 M100 62 l0 -8', w:1.8, k:'sari' },
    { t:'y', x:60, y:30, m:'yansıtıcı yelek', b:12 } ] },
  widespread: { boy: 134, alt: 'Fırtına geniş bir alanda hasar verdi; binlerce ev elektriksiz kaldı.', o: [
    { t:'r', x:6, y:8, w:228, h:118, rx:8, f:'#EEFFDD' },
    ...[[30, 30], [70, 50], [110, 26], [150, 60], [190, 34], [40, 90], [100, 96], [170, 100], [210, 80]].flatMap(([x, y]) => [...ev(x - 11, y, 'beyaz'), { t:'l', d:`M${x - 9} ${y - 2} l18 16 M${x + 9} ${y - 2} l-18 16`, w:2.6, k:'kirmizi' }]),
    { t:'l', d:'M20 74 L80 70 L96 82', w:2, k:'#4B4B52' }, { t:'l', d:'M96 82 l6 -2 l-2 6', w:1.6, k:'sari' },
    { t:'r', x:130, y:112, w:100, h:18, rx:6, f:'beyaz' }, { t:'y', x:180, y:125, m:'her yerde hasar', b:10 } ] },
  artificial: { boy: 134, alt: 'Sahada suni çim var; yoğun yağmurdan sonra bile kullanılabiliyor.', o: [
    { t:'l', d:'M30 10 l-3 8 M60 14 l-3 8 M180 10 l-3 8 M210 14 l-3 8', w:2, k:'su' },
    { t:'r', x:0, y:40, w:240, h:94, f:'#3FCF5A' },
    ...Array.from({ length: 12 }, (_, i) => ({ t:'l', d:`M${i * 20} 40 L${i * 20} 134`, w:1, k:'#5BE070' })),
    { t:'l', d:'M120 40 L120 134 M0 86 L240 86', w:2, k:'beyaz' }, { t:'l', d:'M100 86 A20 20 0 1 0 140 86 A20 20 0 1 0 100 86', w:2, k:'beyaz' },
    { t:'k', x:60, y:124, s:.8, kol:'yukari' }, { t:'c', x:84, y:118, r:5, f:'beyaz' },
    { t:'r', x:150, y:100, w:82, h:22, rx:6, f:'beyaz' }, { t:'y', x:191, y:115, m:'suni çim', b:12 } ] },
  infectious: { boy: 134, alt: 'Yeni öğretmenin kahkahası öyle bulaşıcıydı ki bütün sınıf gülmeye başladı.', o: [
    { t:'k', x:120, y:80, s:1.2, kol:'yukari' }, ...balon(120, 18, 56, 'ha ha!', 12),
    { t:'l', d:'M100 70 L60 92 M140 70 L180 92 M120 82 L120 98', w:1.6, k:'turuncu', kesik:true },
    ...[[30, 126], [70, 128], [110, 126], [150, 128], [190, 126], [220, 128]].map(([x, y]) => ({ t:'k', x, y, s:.6, yuz:'mutlu' })),
    { t:'y', x:40, y:86, m:'ha!', b:10 }, { t:'y', x:200, y:86, m:'hi hi!', b:10 } ] },
  hesitant: { boy: 134, alt: 'Hasta anlamadığı bir şey olsa da doktora soru sormakta tereddüt ediyor.', o: [
    { t:'k', x:170, y:124, s:1.2, f:'beyaz' }, ...balon(176, 30, 70, 'bla bla…', 11),
    { t:'k', x:70, y:124, s:1.05 }, { t:'l', d:'M80 96 L88 80', w:1.6 },
    { t:'e', x:60, y:46, rx:24, ry:16, f:'beyaz' }, { t:'y', x:60, y:51, m:'sorsam mı?', b:9 },
    { t:'y', x:100, y:110, m:'?', b:16 } ] },
  harmless: { boy: 134, alt: 'Bahçedeki koca örümcek korkutucu görünüyor ama tamamen zararsız.', o: [
    cim(110),
    { t:'l', d:'M120 72 l-30 -14 l-10 10 M120 76 l-34 0 l-8 14 M120 80 l-28 14 l-4 14 M120 72 l30 -14 l10 10 M120 76 l34 0 l8 14 M120 80 l28 14 l4 14', w:2.4, k:'#4B4B52' },
    { t:'e', x:120, y:76, rx:16, ry:12, f:'#4B4B52' }, { t:'c', x:120, y:60, r:9, f:'#4B4B52' },
    { t:'c', x:116, y:58, r:2.5, f:'beyaz' }, { t:'c', x:124, y:58, r:2.5, f:'beyaz' }, { t:'l', d:'M116 64 q4 3 8 0', w:1.2, k:'beyaz' },
    { t:'k', x:40, y:120, s:.9, yuz:'sasir' },
    { t:'c', x:200, y:40, r:12, f:'yesil' }, { t:'y', x:200, y:45, m:'✓', b:13 }, { t:'y', x:200, y:72, m:'zararsız', b:12 } ] },
  solar: { boy: 134, alt: 'Güneş panelleri bulutlu günde daha az üretir; güneşli günün fazlası bataryada saklanır.', o: [
    ...iki(),
    { t:'c', x:84, y:26, r:11, f:'sari' }, { t:'p', d:'M22 92 L60 70 L96 82 L58 104 Z', f:'catlak' }, { t:'l', d:'M41 81 L77 93 M40 98 L78 76', w:1, k:'beyaz' },
    { t:'r', x:30, y:108, w:56, h:14, rx:3, f:'beyaz' }, ...[0, 1, 2, 3].map(i => ({ t:'r', x:34 + i * 12, y:111, w:9, h:8, rx:1, f:'yesil' })),
    { t:'y', x:58, y:52, m:'güneşli: fazla', b:9 },
    { t:'p', d:'M196 34 q-10 0 -10 -8 q0 -9 12 -9 q4 -10 16 -8 q10 -8 20 0 q13 -1 13 9 q9 2 7 9 q0 7 -9 7 z', f:'gri' },
    { t:'p', d:'M144 92 L182 70 L218 82 L180 104 Z', f:'catlak' }, { t:'l', d:'M163 81 L199 93 M162 98 L200 76', w:1, k:'beyaz' },
    { t:'r', x:152, y:108, w:56, h:14, rx:3, f:'beyaz' }, { t:'r', x:156, y:111, w:9, h:8, rx:1, f:'sari' },
    { t:'y', x:180, y:52, m:'bulutlu: az', b:9 } ] },
};
