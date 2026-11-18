// Kelime kartı görselleri · 3. parti (18 Kasım 2026): 25 kart. Tarz v11; her sahne kartın kendi örnek cümlesini anlatır. Çizimler özgün.
import { ari, ev, cim, dalga, govde } from './parca.js';

const yaprakDus = (x, y, f) => ({ t:'p', d:`M${x} ${y} q6 -6 12 0 q-6 6 -12 0 Z`, f });
const cilek = (x, y) => [{ t:'p', d:`M${x - 5} ${y - 3} Q${x} ${y + 9} ${x + 5} ${y - 3} Z`, f:'kirmizi' }, { t:'p', d:`M${x - 4} ${y - 3} l4 -3 l4 3 Z`, f:'yesil' }];
const uydu = (x, y) => [{ t:'r', x:x - 5, y:y - 4, w:10, h:8, rx:2, f:'gri' }, { t:'r', x:x - 16, y:y - 3, w:10, h:6, f:'catlak' }, { t:'r', x:x + 6, y:y - 3, w:10, h:6, f:'catlak' }];
const mikrop = (x, y) => [{ t:'c', x, y, r:4, f:'yesil' }, { t:'l', d:`M${x - 6} ${y} l-2 0 M${x + 6} ${y} l2 0 M${x} ${y - 6} l0 -2 M${x} ${y + 6} l0 2`, w:1.2, k:'#4E9E34' }];

export default {
  // ---- isimler ----
  beekeeper: { boy: 134, alt: 'Arıcı, beyaz giysisi ve tül maskesiyle kovanın yanında; cumartesi pazarında balını satıyor.', o: [
    { t:'r', x:0, y:112, w:240, h:22, f:'yesil' },
    { t:'r', x:14, y:70, w:44, h:42, rx:3, f:'kraft' }, { t:'p', d:'M10 72 L36 56 L62 72 Z', f:'agac' }, ...ari(70, 60), ...ari(84, 50),
    { t:'k', x:98, y:112, s:1.1, f:'beyaz' }, { t:'e', x:98, y:70, rx:14, ry:4, f:'kraft' }, { t:'p', d:'M88 70 L108 70 L106 86 L90 86 Z', f:'#E9F8FF' },
    { t:'r', x:140, y:84, w:94, h:8, rx:2, f:'agac' }, { t:'l', d:'M148 92 L148 112 M226 92 L226 112', w:2, k:'agac' },
    ...[150, 172, 194, 216].flatMap(x => [{ t:'r', x:x - 7, y:68, w:14, h:16, rx:3, f:'sari' }, { t:'r', x:x - 8, y:64, w:16, h:5, rx:2, f:'kirmizi' }]),
    { t:'r', x:146, y:30, w:84, h:22, rx:5, f:'beyaz' }, { t:'y', x:188, y:46, m:'bal · Cumartesi', b:11 } ] },
  comet: { boy: 134, alt: 'Kuyruklu yıldız Güneş’e yaklaşırken buzu gaza dönüşür; kuyruğu hep Güneş’in tersini gösterir.', o: [
    { t:'r', x:0, y:0, w:240, h:134, f:'#3B3570' },
    ...[[40, 110], [90, 20], [200, 120], [150, 14], [228, 30], [16, 30]].map(([x, y]) => ({ t:'c', x, y, r:1.4, f:'beyaz' })),
    { t:'c', x:40, y:66, r:24, f:'sari' }, { t:'y', x:40, y:108, m:'Güneş', b:12 },
    { t:'p', d:'M136 60 L230 34 L234 54 L138 72 Z', f:'buz' }, { t:'p', d:'M136 64 L226 66 L224 80 L138 72 Z', f:'#E9F8FF' },
    { t:'c', x:132, y:66, r:9, f:'beyaz' },
    { t:'l', d:'M120 86 L84 82', w:1.6, k:'beyaz', kesik:true }, { t:'l', d:'M90 77 L83 82 L90 87', w:1.6, k:'beyaz' },
    { t:'r', x:150, y:92, w:84, h:22, rx:6, f:'beyaz' }, { t:'y', x:192, y:107, m:'kuyruk Güneş’e ters', b:10 } ] },
  tremor: { boy: 134, alt: 'Öyle hafif bir sarsıntı ki şehirde çoğu kişi fark etmiyor; yalnız cihaz minicik bir kıpırtı çiziyor.', o: [
    ...[[8, 54, 30, 'buz'], [44, 34, 26, 'pembe'], [76, 60, 28, 'sari'], [110, 44, 24, 'buz']].map(([x, y, w, f]) => ({ t:'r', x, y, w, h:112 - y, rx:2, f })),
    { t:'r', x:0, y:112, w:240, h:22, f:'yol' },
    { t:'k', x:160, y:112, s:1, yuz:'mutlu' }, { t:'r', x:168, y:84, w:14, h:10, rx:2, f:'beyaz' },
    { t:'r', x:140, y:16, w:94, h:44, rx:6, f:'beyaz' }, { t:'l', d:'M146 40 L180 40 L183 36 L186 44 L189 40 L228 40', w:1.6, k:'kirmizi' },
    { t:'y', x:187, y:56, m:'hafif sarsıntı', b:10 }, { t:'y', x:210, y:96, m:'fark etmez', b:11 } ] },
  fever: { boy: 134, alt: 'Vücut enfeksiyona karşı ateşle yanıt veriyor: yatakta figür, termometrede 38,5 derece.', o: [
    { t:'r', x:20, y:84, w:140, h:28, rx:4, f:'beyaz' }, { t:'l', d:'M24 112 L24 128 M156 112 L156 128', w:2.4, k:'agac' },
    { t:'c', x:46, y:76, r:12, f:'ten' }, { t:'r', x:36, y:62, w:20, h:6, rx:3, f:'buz' },
    { t:'c', x:42, y:76, r:1.2, f:'#4B2E5E' }, { t:'c', x:50, y:76, r:1.2, f:'#4B2E5E' },
    { t:'p', d:'M58 84 L160 84 L160 106 L58 106 Z', f:'pembe' },
    { t:'r', x:186, y:20, w:16, h:72, rx:8, f:'beyaz' }, { t:'r', x:190, y:34, w:8, h:54, rx:4, f:'kirmizi' }, { t:'c', x:194, y:92, r:9, f:'kirmizi' },
    { t:'y', x:194, y:118, m:'38,5°', b:14 },
    ...mikrop(90, 40), ...mikrop(112, 28), ...mikrop(130, 46), { t:'y', x:112, y:66, m:'enfeksiyon', b:11 } ] },
  summit: { boy: 134, alt: 'Bölge liderleri iki günlük zirvede su güvenliğini konuşuyor.', o: [
    { t:'e', x:120, y:90, rx:80, ry:22, f:'agac' }, { t:'e', x:120, y:86, rx:76, ry:19, f:'kraft' },
    ...[[60, 80], [96, 72], [144, 72], [180, 80], [80, 112], [160, 112]].map(([x, y]) => ({ t:'k', x, y, s:.75 })),
    { t:'p', d:'M120 72 Q110 86 114 92 Q120 100 126 92 Q130 86 120 72 Z', f:'su' },
    { t:'r', x:84, y:14, w:72, h:22, rx:6, f:'beyaz' }, { t:'y', x:120, y:30, m:'zirve · 2 gün', b:11 }, { t:'y', x:120, y:110, m:'su', b:11 } ] },
  metropolis: { boy: 134, alt: 'Büyüyen dev şehir, çevresindeki köyleri yavaş yavaş içine alıyor.', o: [
    { t:'e', x:120, y:84, rx:110, ry:44, f:'yok' }, { t:'l', d:'M10 84 A110 44 0 1 0 230 84 A110 44 0 1 0 10 84', w:1.4, kesik:true },
    ...[[84, 40, 16, 'buz'], [102, 26, 18, 'gri'], [122, 34, 16, 'pembe'], [140, 22, 18, 'buz'], [160, 44, 14, 'sari']].map(([x, y, w, f]) => ({ t:'r', x, y, w, h:104 - y, rx:2, f })),
    { t:'l', d:'M72 84 L44 84 M50 79 L43 84 L50 89 M176 84 L204 84 M198 79 L205 84 L198 89', w:2 },
    ...ev(16, 100, 'beyaz'), ...ev(204, 100, 'beyaz'),
    { t:'y', x:124, y:124, m:'şehir büyür', b:12 }, { t:'y', x:28, y:94, m:'köy', b:10 }, { t:'y', x:216, y:94, m:'köy', b:10 } ] },
  merchant: { boy: 134, alt: 'Tüccar her satışı küçük deri defterine dikkatle yazıyor.', o: [
    { t:'r', x:0, y:112, w:240, h:22, f:'kraft' },
    { t:'p', d:'M10 40 L130 40 L120 56 L20 56 Z', f:'kirmizi' }, { t:'l', d:'M20 56 L20 112 M120 56 L120 112', w:2.4, k:'agac' },
    { t:'r', x:16, y:86, w:108, h:8, rx:2, f:'agac' },
    ...[[30, 'turuncu'], [52, 'kirmizi'], [74, 'yesil'], [96, 'sari']].map(([x, f]) => ({ t:'c', x, y:80, r:7, f })),
    { t:'k', x:70, y:126, s:.9 },
    { t:'r', x:146, y:30, w:82, h:84, rx:4, f:'#8B5E3C' }, { t:'r', x:152, y:36, w:70, h:72, rx:2, f:'beyaz' },
    { t:'l', d:'M158 52 L214 52 M158 66 L214 66 M158 80 L214 80 M158 94 L200 94', w:1, k:'gri' },
    { t:'y', x:186, y:50, m:'2 elma', b:9 }, { t:'y', x:186, y:64, m:'1 kavun', b:9 }, { t:'y', x:186, y:78, m:'3 limon', b:9 },
    { t:'y', x:186, y:128, m:'defter', b:12 } ] },
  canopy: { boy: 134, alt: 'Yaşlı meşelerin taçları birleşip bir çatı oluyor; alttaki patika koyu gölgede.', o: [
    { t:'c', x:200, y:16, r:12, f:'sari' },
    govde(30, 50, 14, 84), govde(196, 50, 14, 84),
    { t:'e', x:120, y:36, rx:122, ry:30, f:'yesil' }, { t:'e', x:60, y:40, rx:50, ry:24, f:'#6CCB4A' }, { t:'e', x:180, y:40, rx:50, ry:24, f:'#6CCB4A' },
    { t:'r', x:0, y:96, w:240, h:38, f:'#B9D7A6' }, { t:'p', d:'M80 134 L110 96 L130 96 L160 134 Z', f:'#C9B48E' },
    { t:'p', d:'M44 96 L196 96 L196 104 L44 104 Z', f:'#7FA36E' },
    { t:'k', x:122, y:122, s:.8 }, { t:'y', x:120, y:84, m:'serin gölge', b:12 } ] },

  // ---- fiiller ----
  forage: { boy: 134, alt: 'Sonbaharda sincap düşen yaprakların arasında fındık arıyor, ağaç kovuğunda kışa saklıyor.', o: [
    govde(170, 10, 40, 124), { t:'e', x:190, y:56, rx:9, ry:12, f:'#4B2E5E' }, { t:'c', x:186, y:62, r:3, f:'kraft' }, { t:'c', x:193, y:60, r:3, f:'kraft' },
    { t:'r', x:0, y:112, w:240, h:22, f:'#E6B979' },
    ...[[20, 110, 'turuncu'], [44, 116, 'kirmizi'], [70, 108, 'sari'], [96, 118, 'turuncu'], [124, 110, 'kirmizi'], [146, 118, 'sari']].map(([x, y, f]) => yaprakDus(x, y, f)),
    { t:'p', d:'M86 98 Q70 86 74 70 Q80 58 92 66 Q86 76 96 88 Z', f:'turuncu' },
    { t:'e', x:100, y:100, rx:12, ry:8, f:'turuncu' }, { t:'c', x:112, y:92, r:6, f:'turuncu' }, { t:'c', x:114, y:91, r:1, f:'#4B2E5E' },
    { t:'c', x:120, y:98, r:3.4, f:'kraft' },
    { t:'l', d:'M128 92 Q150 70 178 64', w:1.4, kesik:true },
    { t:'y', x:60, y:40, m:'kışa hazırlık', b:12 } ] },
  sail: { boy: 134, alt: 'Bir hafta boyunca kıyı boyunca yelken açıp her gece başka bir limanda duruyorlar.', o: [
    { t:'r', x:0, y:70, w:240, h:64, f:'su' }, dalga(96), dalga(118),
    { t:'p', d:'M0 70 Q60 40 120 60 Q180 34 240 56 L240 70 Z', f:'yesil' },
    ...[30, 120, 210].flatMap((x, i) => [{ t:'r', x:x - 10, y:62, w:20, h:8, f:'kraft' }, { t:'y', x, y:56, m:`${i + 1}. gece`, b:10 }]),
    { t:'l', d:'M30 80 Q75 92 120 80 Q165 92 210 80', w:1.6, kesik:true },
    { t:'p', d:'M150 108 L186 108 L180 118 L156 118 Z', f:'beyaz' }, { t:'l', d:'M168 108 L168 76', w:1.6 },
    { t:'p', d:'M168 78 L168 104 L188 104 Z', f:'beyaz' }, { t:'p', d:'M166 82 L166 104 L152 104 Z', f:'pembe' } ] },
  borrow: { boy: 134, alt: 'Oyun yazarı eski bir hikâyenin konusunu alıp yalnız mekânı değiştiriyor.', o: [
    { t:'r', x:8, y:20, w:80, h:94, rx:6, f:'kraft' }, { t:'p', d:'M24 80 L24 58 L32 58 L32 50 L40 50 L40 58 L56 58 L56 50 L64 50 L64 58 L72 58 L72 80 Z', f:'gri' },
    { t:'k', x:48, y:104, s:.6 }, { t:'y', x:48, y:40, m:'eski hikâye', b:10 },
    { t:'l', d:'M96 66 L132 66 M126 61 L133 66 L126 71', w:2 }, { t:'y', x:114, y:56, m:'konu', b:11 },
    { t:'r', x:140, y:14, w:94, h:100, rx:4, f:'#4B2E5E' }, { t:'p', d:'M140 14 L160 14 L152 114 L140 114 Z M234 14 L214 14 L222 114 L234 114 Z', f:'kirmizi' },
    ...[[166, 60, 14, 'buz'], [182, 48, 14, 'sari'], [198, 56, 14, 'pembe']].map(([x, y, w, f]) => ({ t:'r', x, y, w, h:84 - y, rx:1, f })),
    { t:'k', x:186, y:104, s:.6 }, { t:'y', x:186, y:128, m:'yeni sahne', b:11 } ] },
  roast: { boy: 134, alt: 'Dede ateşin üstündeki demir tavada nohut kavuruyor.', o: [
    { t:'p', d:'M84 120 Q90 100 100 112 Q104 92 116 108 Q124 90 132 110 Q142 98 144 120 Z', f:'turuncu' }, { t:'p', d:'M100 120 Q106 108 112 116 Q120 102 128 120 Z', f:'sari' },
    { t:'l', d:'M76 122 L152 122', w:3, k:'agac' },
    { t:'e', x:114, y:90, rx:44, ry:10, f:'#4B4B52' }, { t:'l', d:'M158 88 L200 80', w:4, k:'#4B4B52' },
    ...[[96, 86], [106, 90], [116, 86], [126, 90], [136, 87], [110, 82], [124, 83]].map(([x, y]) => ({ t:'c', x, y, r:3, f:'kraft' })),
    { t:'l', d:'M100 70 q4 -6 0 -12 M118 68 q4 -6 0 -12 M134 70 q4 -6 0 -12', w:1.4, k:'gri' },
    { t:'k', x:214, y:122, s:1, kol:'ileri' }, { t:'y', x:60, y:40, m:'kavrulur', b:13 } ] },
  recycle: { boy: 134, alt: 'Cam ve kâğıt geri dönüşüm kutusuna gider; ince plastik film normal çöpe.', o: [
    { t:'r', x:0, y:116, w:240, h:18, f:'yol' },
    ...[[14, 'yesil', 'cam', true], [88, 'su', 'kâğıt', true], [162, 'gri', 'çöp', false]].flatMap(([x, f, ad, ok]) => [
      { t:'r', x, y:56, w:64, h:60, rx:6, f }, { t:'r', x:x - 4, y:48, w:72, h:10, rx:4, f }, { t:'y', x:x + 32, y:96, m:ad, b:13 },
      { t:'c', x:x + 32, y:30, r:11, f:ok ? 'yesil' : 'kirmizi' }, { t:'y', x:x + 32, y:35, m:ok ? '✓' : '✗', b:14 } ]),
    { t:'r', x:40, y:62, w:10, h:20, rx:3, f:'#BFEFC8' }, { t:'r', x:110, y:64, w:20, h:14, rx:1, f:'beyaz' },
    { t:'p', d:'M182 64 q10 -6 20 0 q-4 8 -20 6 Z', f:'#E9F8FF' } ] },
  mimic: { boy: 134, alt: 'Kuş araba alarmını öyle iyi taklit ediyor ki yoldan geçen kişi arkasına dönüp bakıyor.', o: [
    govde(20, 30, 10, 104), { t:'l', d:'M28 60 L90 52', w:4, k:'agac' }, { t:'kus', x:70, y:46, f:'sari' },
    { t:'r', x:96, y:14, w:76, h:24, rx:8, f:'beyaz' }, { t:'y', x:134, y:31, m:'diit diit!', b:12 },
    { t:'r', x:0, y:116, w:240, h:18, f:'yol' },
    { t:'p', d:'M150 98 L162 82 L206 82 L218 98 Z', f:'buz' }, { t:'r', x:142, y:96, w:84, h:16, rx:6, f:'kirmizi' },
    { t:'c', x:158, y:114, r:6, f:'#4B2E5E' }, { t:'c', x:210, y:114, r:6, f:'#4B2E5E' },
    { t:'k', x:110, y:116, s:.95, yuz:'sasir' }, { t:'y', x:110, y:70, m:'?', b:16 } ] },
  shed: { boy: 134, alt: 'Güneşte çatlayan eski plastik tabela kaldırıma küçük pul pul parçalar döküyor.', o: [
    { t:'c', x:30, y:24, r:13, f:'sari' },
    { t:'l', d:'M90 112 L90 64 M170 112 L170 64', w:3, k:'gri' },
    { t:'r', x:70, y:24, w:120, h:44, rx:4, f:'#FFD27A' }, { t:'y', x:130, y:52, m:'FIRIN', b:16 },
    { t:'l', d:'M86 30 l8 10 l-4 8 l10 6 M160 28 l-6 12 l8 6 M176 50 l-10 8', w:1.4 },
    ...[[100, 80, .3], [126, 90, -.4], [150, 84, .7], [114, 100, 1.1], [140, 104, -.2]].map(([x, y, a]) => ({ t:'p', d:`M${x} ${y} l${6 * Math.cos(a)} ${6 * Math.sin(a)} l${-3} 4 Z`, f:'#FFD27A' })),
    { t:'r', x:0, y:112, w:240, h:22, f:'yol' },
    ...[[104, 116], [120, 118], [138, 115], [156, 118]].map(([x, y]) => ({ t:'r', x, y, w:5, h:3, f:'#FFD27A' })),
    { t:'y', x:210, y:96, m:'pul pul', b:12 } ] },
  orbit: { boy: 134, alt: 'Çalışmayı çoktan bırakmış eski uydular Dünya’nın çevresinde dönmeyi sürdürüyor.', o: [
    { t:'r', x:0, y:0, w:240, h:134, f:'#3B3570' },
    { t:'e', x:120, y:68, rx:96, ry:40, f:'yok' }, { t:'l', d:'M24 68 A96 40 0 1 0 216 68 A96 40 0 1 0 24 68', w:1.4, k:'beyaz', kesik:true },
    { t:'c', x:120, y:68, r:26, f:'su' }, { t:'p', d:'M104 56 Q112 48 122 54 Q128 64 118 70 Q108 72 104 56 Z M126 76 Q136 74 140 82 Q132 90 124 84 Z', f:'yesil' },
    ...uydu(40, 50), ...uydu(204, 82), ...uydu(150, 28),
    { t:'l', d:'M144 26 l-4 -4 l4 0 l-4 -4', w:1.2, k:'gri' },
    { t:'r', x:60, y:104, w:120, h:22, rx:6, f:'beyaz' }, { t:'y', x:120, y:119, m:'bozuk ama döner', b:11 } ] },
  thaw: { boy: 134, alt: 'Sabah dondurucudan çıkan donmuş balık akşam yemeğine kadar çözülüyor.', o: [
    { t:'r', x:8, y:20, w:84, h:84, rx:8, f:'buz' }, { t:'e', x:50, y:64, rx:28, ry:12, f:'#CFE4F2' }, { t:'p', d:'M76 64 L88 54 L88 74 Z', f:'#CFE4F2' },
    { t:'c', x:34, y:60, r:2, f:'#4B2E5E' }, { t:'l', d:'M26 44 l4 4 l-4 4 M70 40 l4 4 l-4 4 M44 88 l4 4 l-4 4', w:1.4, k:'beyaz' },
    { t:'y', x:50, y:120, m:'sabah · donuk', b:11 },
    { t:'l', d:'M102 64 L128 64 M123 59 L129 64 L123 69', w:2 },
    { t:'e', x:182, y:84, rx:48, ry:14, f:'beyaz' }, { t:'e', x:176, y:76, rx:28, ry:11, f:'pembe' }, { t:'p', d:'M202 76 L216 66 L216 86 Z', f:'pembe' },
    { t:'c', x:160, y:72, r:2, f:'#4B2E5E' }, { t:'c', x:154, y:96, r:2.4, f:'su' }, { t:'c', x:204, y:96, r:2, f:'su' },
    { t:'y', x:182, y:120, m:'akşam · çözüldü', b:11 } ] },
  launch: { boy: 134, alt: 'Uydu, ekvatora yakın bir üsten roketle fırlatılıyor.', o: [
    { t:'r', x:0, y:116, w:240, h:18, f:'tas' },
    { t:'p', d:'M100 70 Q120 120 140 70 Z', f:'turuncu' }, { t:'p', d:'M108 70 Q120 104 132 70 Z', f:'sari' },
    { t:'e', x:92, y:114, rx:20, ry:8, f:'bulut' }, { t:'e', x:148, y:114, rx:20, ry:8, f:'bulut' },
    { t:'r', x:110, y:20, w:20, h:52, rx:4, f:'beyaz' }, { t:'p', d:'M110 22 Q120 0 130 22 Z', f:'kirmizi' }, { t:'p', d:'M110 60 L100 74 L110 70 Z M130 60 L140 74 L130 70 Z', f:'kirmizi' },
    { t:'c', x:120, y:38, r:4, f:'buz' },
    { t:'c', x:200, y:40, r:24, f:'su' }, { t:'l', d:'M176 40 L224 40', w:1.6, k:'kirmizi', kesik:true }, { t:'c', x:204, y:42, r:3, f:'sari' }, { t:'y', x:200, y:80, m:'ekvator', b:11 },
    { t:'y', x:46, y:40, m:'fırlatıldı', b:13 } ] },

  // ---- sıfatlar ----
  abundant: { boy: 134, alt: 'Yaz başında ormanda yaban çileği bol: yer çilek dolu, sepet ağzına kadar.', o: [
    govde(14, 10, 12, 100), govde(214, 14, 12, 96), { t:'c', x:20, y:12, r:24, f:'yesil' }, { t:'c', x:220, y:14, r:24, f:'yesil' },
    { t:'r', x:0, y:96, w:240, h:38, f:'#9FD67E' },
    ...[[40, 108], [58, 118], [76, 104], [96, 116], [150, 106], [170, 118], [190, 104], [62, 128], [178, 128], [30, 124], [206, 122]].flatMap(([x, y]) => cilek(x, y)),
    { t:'p', d:'M100 92 L140 92 L134 122 L106 122 Z', f:'kraft' }, { t:'l', d:'M100 92 Q120 66 140 92', w:2, k:'agac' },
    ...[[108, 90], [118, 86], [128, 90], [114, 94], [124, 94]].flatMap(([x, y]) => cilek(x, y)),
    { t:'y', x:120, y:40, m:'bol bol', b:16 } ] },
  toxic: { boy: 134, alt: 'İki temizlik ürünü karışınca zehirli gaz çıkıyor; figür burnunu kapatıp geri çekiliyor.', o: [
    { t:'r', x:16, y:56, w:24, h:46, rx:6, f:'su' }, { t:'r', x:22, y:46, w:12, h:12, rx:2, f:'beyaz' },
    { t:'r', x:52, y:60, w:24, h:42, rx:6, f:'pembe' }, { t:'r', x:58, y:50, w:12, h:12, rx:2, f:'beyaz' },
    { t:'y', x:46, y:120, m:'A + B', b:12 },
    { t:'l', d:'M96 78 Q118 58 140 78', w:1.6 }, { t:'p', d:'M96 78 L140 78 L134 112 L102 112 Z', f:'gri' }, { t:'r', x:96, y:76, w:44, h:5, rx:2, f:'gri' },
    { t:'l', d:'M106 70 q-6 -8 0 -16 q6 -8 0 -16 M118 68 q-6 -8 0 -16 q6 -8 0 -16 M130 70 q-6 -8 0 -16 q6 -8 0 -16', w:3, k:'#7BC043' },
    ...[[100, 28], [120, 22], [138, 30]].map(([x, y]) => ({ t:'c', x, y, r:6, f:'#C9F59A' })),
    { t:'p', d:'M150 22 L170 56 L130 56 Z', f:'sari' }, { t:'y', x:150, y:52, m:'!', b:18 },
    { t:'k', x:200, y:116, s:1.05, yuz:'uzgun' }, { t:'l', d:'M196 86 L204 86', w:2.2, k:'turuncu' },
    { t:'y', x:118, y:128, m:'zehirli gaz', b:12 } ] },
  contagious: { boy: 134, alt: 'Grip, belirtilerin ilk günlerinde en bulaşıcı hâlinde: hasta figürden mikroplar çevresine yayılıyor.', o: [
    { t:'k', x:120, y:116, s:1.1, yuz:'uzgun', kol:'bas' }, { t:'c', x:120, y:70, r:22, f:'yok' },
    ...[[96, 62], [146, 60], [86, 84], [154, 84], [104, 44], [136, 44]].flatMap(([x, y]) => mikrop(x, y)),
    { t:'l', d:'M90 70 L56 80 M150 70 L184 80', w:1.6, kesik:true },
    { t:'k', x:40, y:118, s:.85, yuz:'sasir' }, { t:'k', x:200, y:118, s:.85, yuz:'sasir' },
    { t:'r', x:6, y:8, w:96, h:22, rx:6, f:'beyaz' }, { t:'y', x:54, y:24, m:'1.–3. gün', b:11 },
    { t:'y', x:186, y:24, m:'bulaşıcı', b:14 } ] },
  rechargeable: { boy: 134, alt: 'Kablosuz kulaklığın pili şarj edilebilir; dolunca yaklaşık yirmi saat gidiyor.', o: [
    { t:'l', d:'M40 70 Q40 22 84 22 Q128 22 128 70', w:5, k:'#4B2E5E' },
    { t:'r', x:28, y:62, w:24, h:32, rx:10, f:'pembe' }, { t:'r', x:116, y:62, w:24, h:32, rx:10, f:'pembe' },
    { t:'r', x:160, y:44, w:56, h:30, rx:4, f:'beyaz' }, { t:'r', x:216, y:52, w:6, h:14, rx:2, f:'gri' },
    ...[0, 1, 2, 3].map(i => ({ t:'r', x:166 + i * 12, y:50, w:9, h:18, rx:2, f:'yesil' })),
    { t:'l', d:'M188 74 L188 100 Q188 112 176 112 L140 112', w:2.2 }, { t:'r', x:128, y:106, w:14, h:12, rx:2, f:'gri' },
    { t:'y', x:188, y:34, m:'şarj', b:12 }, { t:'y', x:84, y:122, m:'20 saat', b:14 } ] },
  barren: { boy: 134, alt: 'Yıllarca süren kuraklıktan sonra bir zamanlar yemyeşil olan vadi toz ve taşla kaplı çorak bir yer oldu.', o: [
    { t:'r', x:4, y:6, w:110, h:122, rx:12, f:'beyaz' }, { t:'r', x:126, y:6, w:110, h:122, rx:12, f:'beyaz' },
    { t:'p', d:'M8 80 Q40 50 60 74 Q80 54 110 76 L110 124 L8 124 Z', f:'yesil' }, { t:'l', d:'M30 124 Q50 96 60 80', w:2.6, k:'su' },
    { t:'c', x:30, y:66, r:8, f:'#6CCB4A' }, { t:'c', x:90, y:66, r:8, f:'#6CCB4A' },
    { t:'y', x:58, y:28, m:'önce', b:13 },
    { t:'p', d:'M130 80 Q162 50 182 74 Q202 54 232 76 L232 124 L130 124 Z', f:'tas' },
    ...[[150, 104], [176, 112], [204, 100], [220, 116], [160, 120]].map(([x, y]) => ({ t:'e', x, y, rx:6, ry:4, f:'gri' })),
    { t:'l', d:'M146 92 l10 4 l-4 6 M196 88 l8 6', w:1.2, k:'iz' },
    { t:'y', x:180, y:28, m:'şimdi · çorak', b:12 } ] },
  lightweight: { boy: 134, alt: 'Dağcı hafif çadırını tek eliyle taşıyıp yokuşu rahatça çıkıyor.', o: [
    { t:'p', d:'M0 134 L170 30 L240 30 L240 134 Z', f:'dag' }, { t:'p', d:'M170 30 L190 30 L184 40 L176 36 Z', f:'kar' },
    { t:'k', x:110, y:92, s:1, kol:'yukari', yuz:'mutlu' },
    { t:'p', d:'M94 60 L104 46 L114 60 Z', f:'turuncu' }, { t:'l', d:'M104 46 L104 60', w:1.2 },
    { t:'p', d:'M132 54 Q150 36 166 40 Q152 46 140 58 Z', f:'beyaz' }, { t:'l', d:'M132 56 L170 36', w:1.2 },
    { t:'y', x:60, y:40, m:'hafif', b:16 }, { t:'y', x:150, y:28, m:'tüy gibi', b:11 } ] },
  sturdy: { boy: 134, alt: 'Sağlam malzemeden yapılmış barınak sert rüzgâra dayanıyor; yanındaki ağaç eğiliyor.', o: [
    { t:'r', x:0, y:112, w:240, h:22, f:'yesil' },
    { t:'l', d:'M6 30 Q40 22 70 34 M10 52 Q50 44 86 56 M4 74 Q34 68 60 78', w:2.2, k:'catlak' }, { t:'y', x:40, y:16, m:'rüzgâr', b:12 },
    { t:'r', x:104, y:62, w:76, h:50, rx:3, f:'gri' }, { t:'p', d:'M96 64 L142 36 L188 64 Z', f:'#8B5E3C' },
    { t:'l', d:'M104 74 L180 74 M104 88 L180 88 M104 102 L180 102', w:1.4 },
    ...[[110, 68], [174, 68], [110, 106], [174, 106]].map(([x, y]) => ({ t:'c', x, y, r:2.4, f:'#4B2E5E' })),
    { t:'r', x:134, y:86, w:16, h:26, rx:2, f:'agac' },
    { t:'l', d:'M214 112 Q212 80 226 56', w:4, k:'agac' }, { t:'e', x:230, y:50, rx:14, ry:10, f:'yesil' },
    { t:'y', x:142, y:126, m:'sağlam', b:13 } ] },
};
