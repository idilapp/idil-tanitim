// Kelime kartı görselleri · 8. parti (18 Kasım 2026): 25 kart. Tarz v11; her sahne kartın kendi örnek cümlesini anlatır. Çizimler özgün.
import { ev, cim, dalga, govde } from './parca.js';

const okt = (x, y, uz = 20) => ({ t:'l', d:`M${x} ${y} L${x + uz} ${y} M${x + uz - 5} ${y - 5} L${x + uz + 1} ${y} L${x + uz - 5} ${y + 5}`, w:2 });
const balon = (x, y, w, m, b = 12) => [{ t:'r', x:x - w / 2, y:y - 14, w, h:24, rx:10, f:'beyaz' }, { t:'y', x, y:y + 3, m, b }];
const iki = () => [{ t:'r', x:4, y:6, w:110, h:122, rx:12, f:'beyaz' }, { t:'r', x:126, y:6, w:110, h:122, rx:12, f:'beyaz' }];
const igne = (x, y, f = 'kirmizi') => [{ t:'p', d:`M${x} ${y} q-8 -8 0 -16 q8 8 0 16 Z`, f }, { t:'c', x, y:y - 10, r:2.4, f:'beyaz' }];
const elma = (x, y, f) => [{ t:'c', x, y, r:9, f }, { t:'l', d:`M${x} ${y - 9} l2 -5`, w:1.4, k:'agac' }, { t:'e', x:x + 5, y:y - 12, rx:4, ry:2, f:'yesil' }];
const migfer = (x, y, f) => [{ t:'p', d:`M${x - 22} ${y} Q${x - 22} ${y - 30} ${x} ${y - 32} Q${x + 22} ${y - 30} ${x + 22} ${y} L${x + 14} ${y} L${x + 12} ${y - 12} L${x - 12} ${y - 12} L${x - 14} ${y} Z`, f }, { t:'l', d:`M${x} ${y - 32} L${x} ${y - 12}`, w:1.4 }];

export default {
  // ---- isimler ----
  stopover: { boy: 134, alt: 'Avustralya yolunda Singapur’da iki günlük bir mola.', o: [
    { t:'r', x:6, y:8, w:228, h:118, rx:10, f:'#E3F9FF' },
    ...igne(30, 50), { t:'y', x:30, y:66, m:'çıkış', b:10 },
    ...igne(120, 70, 'turuncu'), { t:'r', x:96, y:84, w:48, h:20, rx:6, f:'sari' }, { t:'y', x:120, y:98, m:'2 gün', b:11 },
    ...igne(206, 96), { t:'y', x:206, y:112, m:'Avustralya', b:10 },
    { t:'l', d:'M34 44 Q76 40 116 56 M124 60 Q170 66 202 84', w:1.8, kesik:true },
    { t:'p', d:'M64 36 L84 40 L76 44 L82 50 L74 48 L68 54 L70 46 Z', f:'gri' },
    { t:'y', x:120, y:34, m:'Singapur molası', b:11 } ] },
  vegetation: { boy: 134, alt: 'Yıllarca süren kuraklıktan sonra tepeler bitki örtüsünün neredeyse tamamını kaybetti.', o: [
    ...iki(),
    { t:'p', d:'M8 90 Q40 56 70 80 Q90 64 110 82 L110 124 L8 124 Z', f:'yesil' },
    ...[[30, 74], [56, 70], [86, 76]].flatMap(([x, y]) => [{ t:'l', d:`M${x} ${y + 12} l0 -10`, w:2, k:'agac' }, { t:'c', x, y:y - 2, r:8, f:'#4E9E34' }]),
    { t:'y', x:58, y:28, m:'önce', b:13 },
    { t:'p', d:'M130 90 Q162 56 192 80 Q212 64 232 82 L232 124 L130 124 Z', f:'#C9A06A' },
    { t:'l', d:'M162 84 l0 -14 M162 74 l-6 -6 M194 82 l0 -10', w:1.6, k:'agac' },
    { t:'y', x:180, y:28, m:'şimdi · çıplak', b:12 } ] },
  literacy: { boy: 134, alt: 'Ücretsiz köy okulları tarım işçilerinin çocuklarında okuma yazmayı artırdı.', o: [
    { t:'r', x:40, y:14, w:160, h:50, rx:4, f:'#2E5A44' }, { t:'y', x:120, y:46, m:'A  B  C', b:22 },
    { t:'r', x:20, y:96, w:200, h:8, rx:2, f:'agac' },
    ...[[52, 'pembe'], [100, 'sari'], [148, 'su'], [196, 'yesil']].flatMap(([x, f]) => [{ t:'k', x, y:124, s:.75 }, { t:'p', d:`M${x - 12} 92 L${x} 86 L${x + 12} 92 L${x + 12} 100 L${x} 94 L${x - 12} 100 Z`, f }]),
    { t:'y', x:120, y:78, m:'okuma yazma', b:12 } ] },
  circuit: { boy: 134, alt: 'Devredeki bir kablo gevşediği için lamba yanmıyor.', o: [
    { t:'r', x:30, y:80, w:40, h:24, rx:4, f:'sari' }, { t:'r', x:70, y:88, w:6, h:8, f:'gri' }, { t:'y', x:50, y:96, m:'+ −', b:10 },
    { t:'l', d:'M76 92 L190 92 L190 60 M30 92 L14 92 L14 30 L110 30', w:2.4, k:'kirmizi' },
    { t:'l', d:'M134 30 L190 30 L190 40', w:2.4, k:'kirmizi' },
    { t:'l', d:'M110 30 l6 -6 M134 30 l-6 6', w:2, k:'kirmizi' }, { t:'c', x:122, y:30, r:12, f:'yok' }, { t:'l', d:'M110 30 A12 12 0 1 0 134 30 A12 12 0 1 0 110 30', w:1.6, k:'vurgu', kesik:true },
    { t:'c', x:190, y:50, r:12, f:'#E8E8EC' }, { t:'r', x:184, y:60, w:12, h:8, rx:2, f:'gri' },
    { t:'y', x:122, y:58, m:'gevşek kablo', b:11 }, { t:'y', x:190, y:122, m:'sönük', b:12 } ] },
  variety: { boy: 134, alt: 'Bu eski elma çeşidi serin bir yerde saklanırsa bütün kış taze kalıyor.', o: [
    { t:'r', x:20, y:70, w:120, h:50, rx:3, f:'kraft' }, { t:'l', d:'M20 86 L140 86 M20 102 L140 102', w:1.2, k:'agac' },
    ...[[40, 'kirmizi'], [70, 'yesil'], [100, 'sari'], [128, '#C96A3A']].flatMap(([x, f]) => elma(x, 62, f)),
    { t:'y', x:80, y:36, m:'çeşitler', b:12 },
    { t:'r', x:160, y:30, w:72, h:80, rx:6, f:'#DFF1FB' }, ...elma(196, 80, '#C96A3A'),
    { t:'l', d:'M176 46 l8 0 M180 42 l0 8 M212 50 l8 0 M216 46 l0 8', w:1.4, k:'catlak' }, { t:'y', x:196, y:126, m:'bütün kış taze', b:10 } ] },
  route: { boy: 134, alt: 'Kasaba önemli bir ticaret yolunun üstünde olduğu için zenginleşti.', o: [
    { t:'r', x:6, y:8, w:228, h:118, rx:10, f:'#FFF3D6' },
    { t:'l', d:'M14 100 Q60 60 120 70 Q180 80 226 30', w:3, k:'agac', kesik:true },
    ...[[40, 86], [184, 64]].flatMap(([x, y]) => [{ t:'e', x, y, rx:9, ry:6, f:'kraft' }, { t:'c', x:x + 9, y:y - 6, r:4, f:'kraft' }]),
    ...ev(110, 54, 'pembe'), ...ev(134, 58, 'sari'),
    ...[[116, 90], [128, 96], [140, 90]].map(([x, y]) => ({ t:'c', x, y, r:5, f:'sari' })),
    { t:'y', x:126, y:118, m:'zengin kasaba', b:11 }, { t:'y', x:60, y:30, m:'ticaret yolu', b:12 } ] },
  trace: { boy: 134, alt: 'Bazı eski psikologlara göre her yaşantı beyinde kalıcı bir iz bırakır.', o: [
    { t:'p', d:'M60 90 Q40 90 40 70 Q36 40 70 30 Q100 16 140 26 Q180 26 192 56 Q204 86 176 96 Q160 110 130 104 Q110 116 90 104 Q66 108 60 90 Z', f:'#FFC3CF' },
    { t:'l', d:'M80 46 q10 10 0 20 M120 36 q10 14 0 28 M160 50 q-8 12 4 22', w:1.4, k:'#E89AAE' },
    ...[[86, 80], [104, 72], [122, 80], [140, 72], [158, 80]].map(([x, y], i) => ({ t:'e', x, y, rx:4, ry:6, f:'#8B5E3C' })),
    { t:'r', x:180, y:8, w:52, h:20, rx:6, f:'beyaz' }, { t:'y', x:206, y:22, m:'beyin', b:11 }, { t:'y', x:120, y:126, m:'her yaşantı bir iz', b:12 } ] },
  pigment: { boy: 134, alt: 'Ressam mavi pigmenti yağla karıştırıp tuvale sürülecek kıvama getiriyor.', o: [
    { t:'p', d:'M20 100 Q40 74 60 100 Z', f:'#3A6FE0' }, { t:'y', x:40, y:120, m:'pigment', b:11 },
    { t:'y', x:76, y:94, m:'+', b:18 },
    { t:'p', d:'M96 100 L96 80 Q96 72 104 70 L104 62 L112 62 L112 70 Q120 72 120 80 L120 100 Z', f:'#F6D77A' }, { t:'y', x:108, y:120, m:'yağ', b:11 },
    okt(128, 88, 20),
    { t:'r', x:160, y:20, w:70, h:90, rx:3, f:'beyaz' }, { t:'p', d:'M168 70 Q190 50 222 64 Q210 90 172 92 Z', f:'#3A6FE0' },
    { t:'l', d:'M170 112 L170 128 M220 112 L220 128', w:2, k:'agac' } ] },
  replica: { boy: 134, alt: 'Müze antik miğferin kopyasını sergiliyor; aslı serin ve karanlık bir odada saklanıyor.', o: [
    { t:'r', x:4, y:6, w:110, h:122, rx:12, f:'#3B3570' }, { t:'r', x:126, y:6, w:110, h:122, rx:12, f:'beyaz' },
    ...migfer(58, 90, '#B98A4E'), { t:'y', x:58, y:28, m:'aslı', b:12 }, { t:'y', x:58, y:118, m:'karanlık · serin', b:9 },
    { t:'r', x:146, y:96, w:68, h:10, f:'gri' }, ...migfer(180, 92, '#D9A86A'), { t:'y', x:180, y:28, m:'sergide', b:12 },
    { t:'r', x:150, y:108, w:60, h:16, rx:4, f:'sari' }, { t:'y', x:180, y:120, m:'kopya', b:11 } ] },

  // ---- fiiller ----
  emit: { boy: 134, alt: 'Eski tip ampul ışıktan çok ısı yayar; bu yüzden çok israflıdır.', o: [
    { t:'c', x:120, y:56, r:26, f:'#FFF1A8' }, { t:'p', d:'M108 80 L132 80 L130 98 L110 98 Z', f:'gri' }, { t:'l', d:'M112 60 q8 -10 16 0', w:1.4, k:'turuncu' },
    { t:'l', d:'M76 40 q-6 -6 0 -12 M70 60 q-6 -6 0 -12 M76 80 q-6 -6 0 -12 M164 40 q6 -6 0 -12 M170 60 q6 -6 0 -12 M164 80 q6 -6 0 -12', w:3, k:'kirmizi' },
    { t:'l', d:'M120 22 L120 14', w:1.4, k:'sari' },
    { t:'r', x:12, y:104, w:84, h:22, rx:6, f:'beyaz' }, { t:'y', x:54, y:119, m:'ısı: çok', b:11 },
    { t:'r', x:144, y:104, w:84, h:22, rx:6, f:'beyaz' }, { t:'y', x:186, y:119, m:'ışık: az', b:11 } ] },
  dissipate: { boy: 134, alt: 'Sabah vadiyi kaplayan sis öğleye doğru dağıldı; bütün vadi göründü.', o: [
    ...iki(),
    { t:'p', d:'M8 90 L40 60 L70 84 L110 56 L110 124 L8 124 Z', f:'yesil' },
    { t:'r', x:8, y:56, w:102, h:50, f:'#E8ECF2' }, { t:'y', x:58, y:28, m:'08.00 · sis', b:12 },
    { t:'p', d:'M130 90 L162 60 L192 84 L232 56 L232 124 L130 124 Z', f:'yesil' }, ...ev(170, 96, 'pembe'), { t:'c', x:212, y:30, r:9, f:'sari' },
    { t:'y', x:170, y:28, m:'11.00 · açık', b:12 } ] },
  enlarge: { boy: 134, alt: 'Eski küçük fotoğraf büyütülüp koridorun duvarına asılıyor.', o: [
    { t:'r', x:20, y:70, w:30, h:24, rx:2, f:'beyaz' }, { t:'r', x:23, y:73, w:24, h:18, f:'#E8D2B4' }, { t:'c', x:35, y:80, r:3, f:'#B9A08A' },
    okt(60, 82, 30),
    { t:'r', x:110, y:16, w:116, h:96, rx:4, f:'kraft' }, { t:'r', x:118, y:24, w:100, h:80, f:'#E8D2B4' },
    { t:'c', x:168, y:54, r:14, f:'#D6BCA2' }, { t:'r', x:150, y:68, w:36, h:30, rx:10, f:'#D6BCA2' },
    { t:'y', x:36, y:110, m:'küçük', b:11 }, { t:'y', x:168, y:126, m:'büyütüldü', b:11 } ] },
  transcribe: { boy: 134, alt: 'Araştırmacı yaşlı köylülerle yaptığı saatlerce süren kayıtları haftalarca yazıya döküyor.', o: [
    { t:'k', x:36, y:124, s:1, f:'gri' }, ...balon(40, 40, 60, 'eskiden…', 10),
    { t:'r', x:70, y:84, w:40, h:24, rx:4, f:'#4B4B52' }, { t:'c', x:82, y:96, r:6, f:'gri' }, { t:'c', x:98, y:96, r:6, f:'gri' },
    okt(114, 96, 16),
    { t:'r', x:140, y:30, w:80, h:96, rx:3, f:'beyaz' }, { t:'l', d:'M148 44 L212 44 M148 54 L212 54 M148 64 L200 64 M148 74 L212 74 M148 84 L206 84 M148 94 L212 94', w:1, k:'gri' },
    { t:'y', x:180, y:22, m:'yazıya döker', b:11 } ] },
  soften: { boy: 134, alt: 'Editör yazıdaki birkaç sert cümleyi yayından önce yumuşatıyor.', o: [
    ...iki(),
    { t:'r', x:20, y:44, w:78, h:44, rx:4, f:'#FFE6E6' }, { t:'y', x:59, y:72, m:'SAÇMALIK!!', b:12 },
    { t:'l', d:'M24 50 l6 -6 M90 82 l6 -6', w:1.6, k:'kirmizi' }, { t:'y', x:58, y:28, m:'sert', b:13 },
    { t:'r', x:142, y:44, w:78, h:44, rx:14, f:'#E8F8E0' }, { t:'y', x:181, y:66, m:'bence pek', b:10 }, { t:'y', x:181, y:80, m:'doğru değil', b:10 },
    { t:'y', x:180, y:28, m:'yumuşak', b:13 }, { t:'l', d:'M200 104 L222 92', w:4, k:'su' } ] },
  prescribe: { boy: 134, alt: 'Doktor döküntü için krem yazıyor ve bir hafta sonra yeniden gelmesini istiyor.', o: [
    { t:'k', x:50, y:124, s:1.2, f:'beyaz' },
    { t:'r', x:80, y:30, w:66, h:84, rx:4, f:'beyaz' }, { t:'y', x:113, y:48, m:'Reçete', b:11 }, { t:'y', x:113, y:70, m:'krem', b:13 }, { t:'l', d:'M90 84 L136 84 M90 94 L130 94', w:1, k:'gri' },
    { t:'k', x:190, y:124, s:1, yuz:'uzgun' }, ...[[182, 98], [196, 104], [188, 112]].map(([x, y]) => ({ t:'c', x, y, r:2.4, f:'kirmizi' })),
    { t:'r', x:166, y:16, w:52, h:34, rx:4, f:'beyaz' }, { t:'r', x:166, y:16, w:52, h:10, rx:4, f:'pembe' }, { t:'y', x:192, y:44, m:'1 hafta', b:10 } ] },
  ferment: { boy: 134, alt: 'Maya undaki şekeri mayalandırdığı için hamur kabarıyor.', o: [
    ...iki(),
    { t:'p', d:'M24 84 Q24 110 58 110 Q92 110 92 84 Z', f:'#9FD6E8' }, { t:'e', x:58, y:84, rx:30, ry:8, f:'#F6E3B4' },
    { t:'y', x:58, y:28, m:'önce', b:13 },
    { t:'p', d:'M146 84 Q146 110 180 110 Q214 110 214 84 Z', f:'#9FD6E8' }, { t:'p', d:'M148 84 Q148 40 180 42 Q212 40 212 84 Z', f:'#F6E3B4' },
    ...[[168, 62], [190, 56], [180, 72], [200, 70]].map(([x, y]) => ({ t:'c', x, y, r:2.6, f:'beyaz' })),
    { t:'y', x:180, y:28, m:'kabardı', b:13 }, { t:'y', x:180, y:124, m:'maya', b:11 } ] },
  bleach: { boy: 134, alt: 'Yıllarca güçlü güneş alan eski ahşap kapının rengi soldu.', o: [
    { t:'c', x:204, y:24, r:14, f:'sari' }, { t:'l', d:'M186 40 L160 60 M196 46 L180 70', w:2, k:'turuncu' },
    { t:'r', x:26, y:30, w:56, h:94, rx:3, f:'#8B5E3C' }, { t:'l', d:'M36 40 L36 116 M54 40 L54 116 M72 40 L72 116', w:1, k:'#6B4430' }, { t:'y', x:54, y:22, m:'önce', b:12 },
    { t:'r', x:120, y:30, w:56, h:94, rx:3, f:'#D9C2A6' }, { t:'l', d:'M130 40 L130 116 M148 40 L148 116 M166 40 L166 116', w:1, k:'#C4AC8E' }, { t:'y', x:148, y:22, m:'yıllar sonra', b:11 },
    { t:'c', x:74, y:80, r:3, f:'sari' }, { t:'c', x:168, y:80, r:3, f:'sari' } ] },
  germinate: { boy: 134, alt: 'Toprak sıcak tutulursa fasulye tohumu bir hafta içinde filizlenir.', o: [
    ...iki(),
    { t:'r', x:14, y:84, w:90, h:40, f:'#8B6A4A' }, { t:'e', x:58, y:100, rx:8, ry:5, f:'#E8D8B4' }, { t:'y', x:58, y:28, m:'1. gün', b:13 },
    { t:'r', x:136, y:84, w:90, h:40, f:'#8B6A4A' }, { t:'e', x:180, y:104, rx:8, ry:5, f:'#E8D8B4' },
    { t:'l', d:'M180 100 Q178 76 182 58', w:2.4, k:'yesil' }, { t:'e', x:172, y:60, rx:8, ry:4, f:'yesil' }, { t:'e', x:192, y:58, rx:8, ry:4, f:'yesil' },
    { t:'y', x:180, y:28, m:'7. gün', b:13 },
    { t:'r', x:96, y:44, w:12, h:34, rx:6, f:'beyaz' }, { t:'r', x:99, y:56, w:6, h:20, rx:3, f:'kirmizi' } ] },

  // ---- sıfatlar ----
  bilingual: { boy: 134, alt: 'Müzede Türkçe ve İngilizce iki dilli rehberli tur yapılıyor.', o: [
    { t:'k', x:120, y:124, s:1.3, kol:'yukari' }, { t:'r', x:132, y:72, w:10, h:12, rx:2, f:'kirmizi' },
    ...balon(60, 36, 80, 'Hoş geldiniz', 11), ...balon(186, 36, 70, 'Welcome', 12),
    { t:'r', x:40, y:52, w:40, h:16, rx:4, f:'pembe' }, { t:'y', x:60, y:64, m:'TR', b:11 },
    { t:'r', x:166, y:52, w:40, h:16, rx:4, f:'su' }, { t:'y', x:186, y:64, m:'EN', b:11 },
    ...[[30, 126], [56, 128], [184, 128], [212, 126]].map(([x, y]) => ({ t:'k', x, y, s:.55 })) ] },
  solitary: { boy: 134, alt: 'Dede kimsenin araya girmeden düşünebildiği yalnız sahil yürüyüşlerini seviyordu.', o: [
    { t:'c', x:190, y:46, r:20, f:'#FFB36B' }, { t:'r', x:0, y:60, w:240, h:34, f:'su' }, dalga(76),
    { t:'r', x:0, y:94, w:240, h:40, f:'#F2D69A' },
    ...[[30, 124], [50, 120], [70, 116], [90, 112]].map(([x, y]) => ({ t:'e', x, y, rx:3, ry:2, f:'#C9A060' })),
    { t:'k', x:120, y:112, s:.95, f:'gri' }, { t:'l', d:'M130 92 L134 112', w:2, k:'agac' },
    { t:'y', x:60, y:40, m:'yalnız yürüyüş', b:12 } ] },
  anonymous: { boy: 134, alt: 'Yeni alışveriş merkezi yüzlercesine benziyor: kimliksiz, ruhsuz.', o: [
    { t:'r', x:0, y:110, w:240, h:24, f:'yol' },
    ...[10, 86, 162].flatMap(x => [{ t:'r', x, y:50, w:68, h:60, rx:2, f:'gri' }, { t:'r', x:x + 8, y:58, w:52, h:10, f:'#E8E8EC' }, { t:'r', x:x + 26, y:84, w:16, h:26, f:'buz' }]),
    { t:'y', x:44, y:44, m:'=', b:16 }, { t:'y', x:120, y:44, m:'=', b:16 }, { t:'y', x:196, y:44, m:'=', b:16 },
    { t:'y', x:120, y:24, m:'hepsi aynı', b:13 } ] },
  pale: { boy: 134, alt: 'Çocuk solgun ve yorgun görünüyordu; öğretmen onu okul hemşiresine gönderdi.', o: [
    { t:'c', x:70, y:60, r:32, f:'#ECEFE6' }, { t:'c', x:58, y:56, r:2.4, f:'#4B2E5E' }, { t:'c', x:82, y:56, r:2.4, f:'#4B2E5E' },
    { t:'l', d:'M54 64 q4 3 8 0 M78 64 q4 3 8 0 M62 76 q8 -4 16 0', w:1.4, k:'gri' },
    { t:'r', x:50, y:92, w:40, h:34, rx:10, f:'su' },
    { t:'y', x:70, y:20, m:'solgun', b:13 },
    okt(110, 80, 26),
    { t:'r', x:150, y:52, w:76, h:70, rx:4, f:'beyaz' }, { t:'r', x:150, y:52, w:76, h:16, rx:4, f:'#7FD8B6' }, { t:'y', x:188, y:64, m:'hemşire', b:10 },
    { t:'k', x:188, y:118, s:.75, f:'#7FD8B6' } ] },
  flexible: { boy: 134, alt: 'İnce plastik levha esnektir, bükülür; aynı malzemeden kalın blok ise serttir.', o: [
    ...iki(),
    { t:'p', d:'M20 90 Q58 40 98 90 L98 94 Q58 46 20 94 Z', f:'su' }, { t:'y', x:58, y:28, m:'ince: bükülür', b:11 },
    { t:'r', x:150, y:60, w:60, h:40, rx:2, f:'su' }, { t:'l', d:'M146 54 l-8 -8 M214 54 l8 -8', w:1.6, k:'gri' },
    { t:'y', x:180, y:28, m:'kalın: sert', b:11 } ] },
  drinkable: { boy: 134, alt: 'Selden sonra kasabanın musluk suyu neredeyse bir hafta içilebilir değildi.', o: [
    ...iki(),
    { t:'p', d:'M30 30 L66 30 L66 42 L52 42 L52 50 L44 50 L44 42 L30 42 Z', f:'gri' },
    { t:'p', d:'M38 70 L58 70 L56 100 L40 100 Z', f:'#A88C5A' }, { t:'c', x:84, y:84, r:10, f:'kirmizi' }, { t:'y', x:84, y:89, m:'✗', b:12 },
    { t:'y', x:58, y:122, m:'sel sonrası', b:11 },
    { t:'p', d:'M152 30 L188 30 L188 42 L174 42 L174 50 L166 50 L166 42 L152 42 Z', f:'gri' },
    { t:'p', d:'M160 70 L180 70 L178 100 L162 100 Z', f:'su' }, { t:'c', x:206, y:84, r:10, f:'yesil' }, { t:'y', x:206, y:89, m:'✓', b:12 },
    { t:'y', x:180, y:122, m:'1 hafta sonra', b:11 } ] },
  obsolete: { boy: 134, alt: 'Dijital fotoğraf makineleri film banyo dükkânlarını gereksiz kıldı.', o: [
    { t:'r', x:10, y:40, w:100, h:80, rx:3, f:'gri' }, { t:'r', x:22, y:54, w:76, h:16, f:'#E8E8EC' }, { t:'y', x:60, y:66, m:'FİLM BANYO', b:9 },
    { t:'r', x:30, y:80, w:60, h:40, f:'#D8D8DE' }, { t:'r', x:36, y:90, w:48, h:16, rx:3, f:'beyaz' }, { t:'y', x:60, y:102, m:'KAPALI', b:9 },
    { t:'r', x:150, y:66, w:64, h:40, rx:6, f:'#4B4B52' }, { t:'c', x:182, y:86, r:12, f:'gri' }, { t:'c', x:182, y:86, r:6, f:'buz' }, { t:'r', x:160, y:60, w:14, h:8, rx:2, f:'#4B4B52' },
    okt(116, 86, 26), { t:'y', x:182, y:126, m:'dijital', b:11 }, { t:'y', x:120, y:24, m:'artık gereksiz', b:12 } ] },
};
