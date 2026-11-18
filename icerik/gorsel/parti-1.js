// Kelime kartı görselleri · 1. parti (18 Kasım 2026): 25 kart. Tarz v11 (../../uygulama/kart-gorsel.js). Her sahne kartın kendi örnek
// cümlesini anlatır; anlam ok, sayı, önce–sonra ya da karşılaştırmayla okunur. Çizimler özgündür (elle SVG verisi).
// Öğe biçimi kart-gorsel.js'in başında. Koordinatlar 240 × boy (çoğu 134).

// ---- ortak parçalar ----
const ari = (x, y) => [{ t:'c', x:x - 2, y:y - 5, r:3.2, f:'buz' }, { t:'c', x:x + 2, y:y - 5, r:3.2, f:'buz' }, { t:'e', x, y, rx:6, ry:4, f:'sari' }, { t:'l', d:`M${x - 1} ${y - 3.5} l0 7 M${x + 2} ${y - 3.5} l0 7`, w:1 }];
const deve = (x, y) => [
  { t:'l', d:`M${x - 9} ${y + 4} l-1 16 M${x - 4} ${y + 5} l0 15 M${x + 5} ${y + 5} l0 15 M${x + 10} ${y + 4} l1 16`, w:1.8, k:'agac' },
  { t:'p', d:`M${x + 9} ${y - 2} L${x + 18} ${y - 18} L${x + 23} ${y - 16} L${x + 14} ${y + 1} Z`, f:'kraft' },
  { t:'e', x:x + 23, y:y - 19, rx:6.5, ry:3.8, f:'kraft' },
  { t:'e', x, y, rx:15, ry:8, f:'kraft' }, { t:'c', x:x - 2, y:y - 7, r:7, f:'kraft' },
  { t:'c', x:x + 25, y:y - 20, r:.9, f:'#4B2E5E' } ];
const ev = (x, y, f) => [{ t:'r', x, y, w:22, h:18, rx:2, f }, { t:'p', d:`M${x - 3} ${y} L${x + 11} ${y - 11} L${x + 25} ${y} Z`, f:'kirmizi' }, { t:'r', x:x + 8, y:y + 8, w:6, h:10, rx:1, f:'agac' }];
const koyun = (x, y) => [{ t:'l', d:`M${x - 6} ${y + 5} l0 8 M${x + 5} ${y + 5} l0 8`, w:1.6 }, { t:'e', x, y, rx:12, ry:8, f:'beyaz' }, { t:'e', x:x + 13, y:y - 3, rx:5, ry:4, f:'gri' }];
const kagit = (x, y, a) => [{ t:'p', d:`M${x} ${y} l${12 * Math.cos(a)} ${12 * Math.sin(a)} l${-9 * Math.sin(a)} ${9 * Math.cos(a)} l${-12 * Math.cos(a)} ${-12 * Math.sin(a)} Z`, f:'#FFFFFF' }];
const kazak = (x, y, k) => [{ t:'p', d:`M${x - 14 * k} ${y - 20 * k} L${x - 6 * k} ${y - 24 * k} Q${x} ${y - 20 * k} ${x + 6 * k} ${y - 24 * k} L${x + 14 * k} ${y - 20 * k} L${x + 24 * k} ${y - 6 * k} L${x + 17 * k} ${y - 1 * k} L${x + 13 * k} ${y - 7 * k} L${x + 13 * k} ${y + 18 * k} L${x - 13 * k} ${y + 18 * k} L${x - 13 * k} ${y - 7 * k} L${x - 17 * k} ${y - 1 * k} L${x - 24 * k} ${y - 6 * k} Z`, f:'pembe' }, { t:'l', d:`M${x - 13 * k} ${y + 10 * k} L${x + 13 * k} ${y + 10 * k}`, w:1.2 }];
const cali = (x, y) => [{ t:'l', d:`M${x} ${y} l-6 -10 M${x} ${y} l0 -13 M${x} ${y} l6 -10`, w:1.6, k:'agac' }, { t:'c', x:x - 6, y:y - 12, r:3, f:'yesil' }, { t:'c', x, y:y - 15, r:3, f:'yesil' }, { t:'c', x:x + 6, y:y - 12, r:3, f:'yesil' }];
const kum = (y, f = 'kraft') => ({ t:'p', d:`M0 ${y} Q60 ${y - 10} 120 ${y} T240 ${y} L240 134 L0 134 Z`, f });

export default {
  // ---- daha önce onaylanan yedi sahne (v11) ----
  persist: { boy: 134, alt: 'Pazartesi, salı, çarşamba: figür başını tutuyor, ağrı geçmiyor; sonunda doktora gidiyor.', o: [
    ...[0, 1, 2].flatMap(i => { const x = 4 + i * 56; return [
      { t:'r', x, y:8, w:50, h:112, rx:8, f:'beyaz' }, { t:'r', x, y:8, w:50, h:16, rx:8, f:'pembe' },
      { t:'y', x:x + 25, y:20, m:['Pzt', 'Sal', 'Çar'][i], b:11 },
      { t:'k', x:x + 22, y:100, s:.82, f:'sari', yuz:'uzgun', kol:'bas' },
      { t:'l', d:`M${x + 34} 52 l5 -3 l-2 6 l5 -3`, w:2.2, k:'turuncu' },
      { t:'y', x:x + 25, y:116, m:i ? 'hâlâ' : 'ağrı', b:11 } ]; }),
    { t:'l', d:'M174 64 L188 64 M183 59 L189 64 L183 69', w:2 },
    { t:'k', x:214, y:100, s:.95, f:'beyaz', yuz:'mutlu' }, { t:'l', d:'M208 84 q6 8 12 0', w:1.4, k:'catlak' },
    { t:'y', x:214, y:118, m:'doktor', b:12 } ] },
  dwindle: { boy: 134, alt: 'Kalabalık yediden dörde, dörtten bire iniyor; üstteki çizgi aşağı iniyor.', o: [
    { t:'l', d:'M30 24 Q120 28 206 56', w:3, k:'pembe' }, { t:'l', d:'M198 47 L208 57 L196 60', w:3, k:'pembe' },
    ...[[46, 25, '7'], [126, 35, '4'], [182, 49, '1']].flatMap(([x, y, n]) => [{ t:'c', x, y, r:11, f:'sari' }, { t:'y', x, y:y + 5, m:n, b:14 }]),
    ...[[8, 7], [88, 4], [168, 1]].flatMap(([x0, n]) => { const yer = [[14, 100], [30, 102], [46, 100], [62, 102], [22, 118], [38, 120], [54, 118]]; const o = [{ t:'l', d:`M${x0 + 2} 122 L${x0 + 70} 122`, w:1.2 }];
      for (let k = 0; k < n; k++) o.push({ t:'k', x:x0 + yer[k][0], y:yer[k][1], s:.55, yuz:n === 1 ? 'uzgun' : 'mutlu' }); return o; }),
    { t:'y', x:46, y:132, m:'19.00', b:10 }, { t:'y', x:126, y:132, m:'21.00', b:10 }, { t:'y', x:182, y:132, m:'23.00', b:10 } ] },
  bottleneck: { boy: 134, alt: 'Geniş yoldan gelen arabalar dar köprüde tek sıraya iniyor; dar yer halkayla işaretli.', o: [
    { t:'p', d:'M14 6 L28 6 L28 14 Q40 18 40 30 L40 44 L2 44 L2 30 Q2 18 14 14 Z', f:'buz' },
    ...[[21, 12], [12, 34], [22, 36], [30, 32], [18, 26]].map(([x, y]) => ({ t:'c', x, y, r:1.6, f:'turuncu' })),
    { t:'p', d:'M0 52 L140 68 L240 68 L240 88 L140 88 L0 124 Z', f:'yol' },
    { t:'r', x:140, y:94, w:100, h:40, f:'su' },
    { t:'l', d:'M150 88 l0 10 M180 88 l0 10 M210 88 l0 10', w:1.6 },
    ...[[10, 62], [10, 82], [10, 102], [34, 66], [34, 86], [34, 104], [58, 70], [58, 88], [58, 106], [82, 74], [82, 92], [106, 76], [106, 94], [124, 80], [196, 72]].map(([x, y]) => ({ t:'araba', x, y })),
    { t:'l', d:'M122 78 A20 24 0 1 0 162 78 A20 24 0 1 0 122 78', w:2.4, k:'pembe', kesik:true },
    { t:'y', x:150, y:46, m:'darboğaz', b:13 }, { t:'l', d:'M150 50 L148 56', w:1.4 } ] },
  fossil: { boy: 134, alt: 'Taştaki iz, gerçek bir deniz kabuğunun izi: taş = kabuk.', o: [
    { t:'p', d:'M14 92 Q6 48 50 34 Q98 24 116 58 Q128 92 94 106 Q46 118 14 92 Z', f:'tas' },
    { t:'l', d:'M66 72 m0 0 a4 4 0 1 1 -4 -4 a9 9 0 1 1 9 9 a15 15 0 1 1 -15 -15 a22 22 0 1 1 22 22', w:2.2, k:'iz' },
    { t:'y', x:138, y:78, m:'=', b:26 },
    { t:'c', x:192, y:70, r:26, f:'pembe' },
    { t:'l', d:'M192 70 m0 0 a4 4 0 1 1 -4 -4 a9 9 0 1 1 9 9 a15 15 0 1 1 -15 -15 a20 20 0 1 1 20 20', w:2 },
    { t:'y', x:66, y:126, m:'taştaki iz', b:12 }, { t:'y', x:192, y:126, m:'deniz kabuğu', b:12 } ] },
  fragile: { boy: 134, alt: 'Yırtık ipek elbiseye uzanan el duruyor; yanında kırılgan işareti: çatlak kadeh.', o: [
    { t:'l', d:'M92 8 q6 0 6 6 q0 5 -6 7 L92 24 M68 34 L92 24 L116 34', w:1.8 },
    { t:'p', d:'M76 30 L108 30 L114 44 L106 58 L128 116 Q92 124 56 116 L78 58 L70 44 Z', f:'pembe' },
    { t:'l', d:'M78 58 Q92 64 106 58 M84 76 l5 6 l-4 5 l6 6 M110 92 l-5 7 l5 5', w:1.4 },
    { t:'c', x:98, y:72, r:2, f:'zemin' }, { t:'c', x:76, y:104, r:2.4, f:'zemin' },
    { t:'k', x:26, y:124, s:1, f:'sari', yuz:'uzgun', kol:'ileri' }, { t:'y', x:30, y:64, m:'dikkat!', b:12 },
    { t:'r', x:160, y:22, w:68, h:86, rx:8, f:'beyaz' },
    { t:'p', d:'M178 36 L210 36 Q210 64 194 68 Q178 64 178 36 Z', f:'buz' },
    { t:'l', d:'M194 68 L194 88 M184 88 L204 88 M190 38 l4 9 l-5 6 l6 8', w:1.8 },
    { t:'y', x:194, y:102, m:'kırılgan', b:12 } ] },
  glacier: { boy: 134, alt: 'Dağlardan denize doğru yavaşça akan buz nehri; yanında ölçek için minicik bir yürüyüşçü.', o: [
    { t:'c', x:30, y:24, r:11, f:'sari' },
    { t:'p', d:'M8 98 L60 22 L96 70 L132 16 L196 84 L232 98 Z', f:'dag' },
    { t:'p', d:'M60 22 L50 36 L58 34 L64 42 L70 32 Z M132 16 L120 34 L130 30 L138 38 L144 28 Z', f:'kar' },
    { t:'p', d:'M100 76 Q120 56 132 42 Q150 68 176 82 L182 106 L96 106 Z', f:'buz' },
    { t:'l', d:'M134 52 Q140 72 146 94', w:2.2, k:'catlak', kesik:true }, { t:'l', d:'M140 88 L146 96 L151 88', w:2.2, k:'catlak' },
    { t:'y', x:198, y:62, m:'buz akar', b:12 }, { t:'l', d:'M182 62 L156 74', w:1.2 },
    { t:'r', x:4, y:106, w:232, h:24, rx:4, f:'su' },
    { t:'l', d:'M20 116 q8 -4 16 0 t16 0 M190 120 q8 -4 16 0 t16 0', w:1.6, k:'beyaz' },
    { t:'k', x:70, y:106, s:.5, f:'pembe', kol:'yukari' }, { t:'y', x:46, y:92, m:'biz', b:11 } ] },
  whereas: { boy: 134, alt: 'Solda kuşlar binlerce kilometre uzağa göç ediyor; sağda kuş hep aynı ağaçta kalıyor.', o: [
    { t:'r', x:4, y:6, w:104, h:122, rx:12, f:'beyaz' }, { t:'r', x:132, y:6, w:104, h:122, rx:12, f:'beyaz' },
    { t:'l', d:'M18 102 Q50 44 96 26', w:1.8, kesik:true }, { t:'l', d:'M89 22 L97 26 L90 32', w:1.8 },
    { t:'kus', x:44, y:70, f:'sari', ucan:true }, { t:'kus', x:74, y:46, f:'sari', ucan:true },
    { t:'y', x:72, y:92, m:'1000 km', b:11 }, { t:'y', x:56, y:120, m:'göç eder', b:13 },
    { t:'p', d:'M181 108 L181 46 L187 46 L187 108 Z M184 74 Q198 68 212 62 L213 66 Q199 72 186 79 Z', f:'agac' },
    { t:'c', x:184, y:38, r:22, f:'yesil' }, { t:'kus', x:206, y:54, f:'pembe' },
    { t:'p', d:'M150 96 q-6 -8 0 -14 q6 -6 12 0 q6 6 0 14 l-6 8 z', f:'turuncu' }, { t:'c', x:156, y:88, r:2.5, f:'beyaz' },
    { t:'y', x:184, y:120, m:'hep burada', b:13 },
    { t:'c', x:120, y:66, r:14, f:'sari' }, { t:'y', x:120, y:71, m:'↔', b:15 } ] },

  // ---- isimler ----
  hive: { boy: 134, alt: 'Soğuk sabah arılar ahşap kovanın içinde bekliyor; güneş kovanın duvarını ısıtıyor.', o: [
    { t:'c', x:40, y:36, r:15, f:'sari' }, { t:'l', d:'M60 42 q8 -4 16 0 t16 0 M60 54 q8 -4 16 0 t16 0', w:2, k:'turuncu' },
    { t:'y', x:40, y:70, m:'ısıtır', b:12 },
    { t:'p', d:'M100 50 L136 26 L172 50 Z', f:'agac' }, { t:'r', x:104, y:50, w:64, h:66, rx:3, f:'kraft' },
    { t:'l', d:'M104 72 L168 72 M104 94 L168 94', w:1.4, k:'agac' }, { t:'r', x:124, y:104, w:24, h:7, rx:3, f:'#4B2E5E' },
    ...ari(130, 100), ...ari(144, 101),
    { t:'y', x:136, y:130, m:'kovan', b:13 }, { t:'y', x:206, y:52, m:'brr…', b:13 },
    { t:'l', d:'M196 66 l4 -4 l4 4 l4 -4 M200 80 l4 -4 l4 4', w:1.4, k:'catlak' } ] },
  compass: { boy: 134, alt: 'Sis bastırınca yolu pusulayla bulup kulübeye dönüyorlar.', o: [
    { t:'p', d:'M0 20 Q60 10 120 20 T240 18 L240 40 Q180 32 120 40 T0 40 Z', f:'bulut' }, { t:'y', x:200, y:32, m:'sis', b:12 },
    { t:'c', x:88, y:78, r:34, f:'beyaz' }, { t:'c', x:88, y:78, r:28, f:'buz' },
    { t:'p', d:'M88 52 L95 78 L81 78 Z', f:'kirmizi' }, { t:'p', d:'M88 104 L95 78 L81 78 Z', f:'gri' }, { t:'c', x:88, y:78, r:3, f:'beyaz' },
    { t:'y', x:88, y:52, m:'K', b:11 },
    { t:'k', x:30, y:124, s:.85, kol:'ileri' },
    { t:'l', d:'M44 126 Q120 132 186 118', w:1.6, kesik:true }, { t:'l', d:'M180 112 L188 118 L180 123', w:1.6 },
    ...ev(196, 98, 'kraft'), { t:'y', x:206, y:90, m:'kulübe', b:11 } ] },
  telescope: { boy: 134, alt: 'Yerdeki teleskop havanın arkasından bulanık görür; uzaydaki teleskop yıldızı net görür.', o: [
    { t:'p', d:'M0 58 Q60 50 120 58 T240 56 L240 76 Q180 68 120 76 T0 76 Z', f:'buz' }, { t:'y', x:205, y:70, m:'hava', b:11 },
    { t:'r', x:0, y:112, w:240, h:22, f:'yesil' },
    { t:'p', d:'M40 108 L70 82 L77 90 L47 116 Z', f:'gri' }, { t:'l', d:'M58 100 L48 124 M58 100 L68 124', w:1.6 },
    { t:'l', d:'M74 84 L96 24', w:1.2, kesik:true }, { t:'l', d:'M88 52 q4 -3 8 0 t8 0', w:1.4 },
    { t:'c', x:100, y:16, r:6, f:'sari' }, { t:'l', d:'M88 10 q3 -2 6 0 M106 22 q3 -2 6 0 M90 24 q3 2 6 0', w:1.2, k:'gri' },
    { t:'y', x:100, y:44, m:'bulanık', b:11 },
    { t:'r', x:162, y:16, w:30, h:12, rx:3, f:'gri' }, { t:'r', x:148, y:18, w:12, h:8, f:'catlak' }, { t:'r', x:194, y:18, w:12, h:8, f:'catlak' },
    { t:'l', d:'M192 22 L214 12', w:1.2 }, { t:'c', x:220, y:10, r:5, f:'sari' },
    { t:'y', x:220, y:42, m:'net', b:12 } ] },
  volcano: { boy: 134, alt: 'Yanardağın külü yamaçlara düşüyor; eteğindeki toprak verimli, bitkiler gürleşiyor.', o: [
    { t:'e', x:118, y:22, rx:34, ry:13, f:'gri' }, { t:'e', x:150, y:14, rx:20, ry:9, f:'gri' }, { t:'y', x:118, y:26, m:'kül', b:12 },
    { t:'p', d:'M40 112 L100 36 L132 36 L196 112 Z', f:'#9C7A62' }, { t:'p', d:'M100 36 L132 36 L126 46 L116 42 L106 48 Z', f:'turuncu' },
    { t:'l', d:'M150 34 Q186 44 200 80', w:1.4, kesik:true }, { t:'l', d:'M194 74 L200 82 L206 74', w:1.4 },
    { t:'r', x:0, y:112, w:240, h:22, f:'#8B6A4A' },
    ...[188, 202, 216, 230, 12, 26].flatMap(x => [{ t:'l', d:`M${x} 112 l0 -12`, w:1.6, k:'yesil' }, { t:'e', x:x - 4, y:102, rx:4, ry:2.5, f:'yesil' }, { t:'e', x:x + 4, y:98, rx:4, ry:2.5, f:'yesil' }]),
    { t:'r', x:168, y:118, w:68, h:14, rx:7, f:'beyaz' }, { t:'y', x:202, y:129, m:'verimli toprak', b:10 } ] },
  harvest: { boy: 134, alt: 'Solda dimdik altın başaklar; sağda yağmur bulutunun altında yatmış, çürüyen buğday.', o: [
    { t:'r', x:0, y:112, w:240, h:22, f:'#B98A5A' },
    ...[16, 32, 48, 64, 80].flatMap(x => [{ t:'l', d:`M${x} 112 L${x} 64`, w:1.6, k:'agac' }, { t:'e', x, y:58, rx:4, ry:9, f:'sari' }]),
    { t:'y', x:48, y:40, m:'hasat', b:13 },
    { t:'p', d:'M140 28 q-10 0 -10 -9 q0 -10 12 -10 q4 -10 16 -8 q10 -8 20 0 q14 -2 14 10 q10 2 8 10 q0 9 -10 9 z', f:'gri' },
    { t:'l', d:'M146 38 l-3 8 M160 40 l-3 8 M174 38 l-3 8 M188 40 l-3 8 M152 54 l-3 8 M168 56 l-3 8 M182 54 l-3 8', w:2, k:'su' },
    ...[140, 156, 172, 188, 204].flatMap(x => [{ t:'l', d:`M${x} 112 Q${x + 10} 104 ${x + 20} 106`, w:1.6, k:'agac' }, { t:'e', x:x + 22, y:106, rx:8, ry:3.5, f:'#C9A86A' }]),
    { t:'y', x:180, y:96, m:'mahvoldu', b:11 }, { t:'l', d:'M112 80 L126 80 M121 75 L127 80 L121 85', w:2 } ] },
  drought: { boy: 134, alt: 'Üç yaz süren kuraklık: çatlak toprak, kurumuş ağaç; çiftçi koyunlarını satmak zorunda.', o: [
    ...[0, 1, 2].map(i => ({ t:'c', x:20 + i * 22, y:20, r:8, f:'sari' })), { t:'y', x:42, y:44, m:'3 yaz', b:12 },
    { t:'r', x:0, y:96, w:240, h:38, f:'tas' },
    { t:'l', d:'M10 106 l14 6 l-4 8 l12 4 M70 102 l8 10 l10 -2 l6 10 M140 108 l12 4 l-2 10 M196 104 l10 8 l12 -2', w:1.4, k:'iz' },
    { t:'l', d:'M100 96 L100 50 M100 66 L86 52 M100 60 L114 48 M100 76 L116 68', w:3, k:'agac' },
    { t:'k', x:160, y:104, s:.9, yuz:'uzgun' }, ...koyun(200, 88),
    { t:'r', x:176, y:56, w:48, h:16, rx:4, f:'beyaz' }, { t:'y', x:200, y:68, m:'satılık', b:11 } ] },
  caravan: { boy: 134, alt: 'Uzun bir deve kervanı kumların üstünde ağır ağır tepelere doğru ilerliyor.', o: [
    { t:'p', d:'M150 84 L186 50 L216 84 Z M196 84 L220 60 L240 84 Z', f:'dag' },
    kum(92),
    ...deve(30, 84), ...deve(72, 82), ...deve(114, 80), ...deve(156, 82),
    { t:'l', d:'M18 72 L170 70', w:1.2, k:'agac' },
    { t:'l', d:'M190 112 L224 112 M218 106 L225 112 L218 118', w:2 }, { t:'y', x:207, y:128, m:'tepelere', b:11 },
    { t:'y', x:60, y:128, m:'kervan', b:13 } ] },
  tide: { boy: 134, alt: 'Deniz yükselip alçalıyor; suyun altındaki türbin dönüyor ve lambayı yakıyor.', o: [
    { t:'r', x:0, y:46, w:150, h:88, f:'su' }, { t:'l', d:'M0 46 q10 -4 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t10 0', w:1.6, k:'beyaz' },
    { t:'l', d:'M16 64 L16 30 M10 36 L16 30 L22 36 M30 30 L30 64 M24 58 L30 64 L36 58', w:2 }, { t:'y', x:46, y:28, m:'yükselir, alçalır', b:11 },
    { t:'c', x:84, y:100, r:5, f:'gri' }, { t:'p', d:'M84 100 L80 82 L88 82 Z M84 100 L66 104 L68 96 Z M84 100 L98 112 L92 116 Z', f:'beyaz' },
    { t:'l', d:'M84 105 L84 128 L150 128 L196 128 L196 92', w:1.6 },
    { t:'p', d:'M150 46 L240 46 L240 134 L150 134 Z', f:'kraft' },
    { t:'c', x:196, y:72, r:14, f:'sari' }, { t:'r', x:190, y:84, w:12, h:8, rx:2, f:'gri' },
    { t:'l', d:'M176 56 l-6 -6 M216 56 l6 -6 M196 50 l0 -8', w:1.6, k:'turuncu' },
    { t:'y', x:84, y:76, m:'türbin', b:11 }, { t:'y', x:196, y:118, m:'elektrik', b:11 } ] },
  landfill: { boy: 134, alt: 'Kasabanın çöpleri kamyonla 20 kilometre ötedeki çöp sahasına gidiyor.', o: [
    ...ev(6, 70, 'pembe'), ...ev(34, 76, 'buz'), ...ev(14, 98, 'sari'),
    { t:'r', x:0, y:116, w:240, h:6, f:'yol' },
    { t:'r', x:76, y:94, w:34, h:20, rx:2, f:'yesil' }, { t:'r', x:110, y:100, w:14, h:14, rx:2, f:'beyaz' },
    { t:'c', x:86, y:116, r:4, f:'#4B2E5E' }, { t:'c', x:116, y:116, r:4, f:'#4B2E5E' },
    { t:'l', d:'M132 104 L156 104 M150 98 L157 104 L150 110', w:2 }, { t:'y', x:144, y:92, m:'20 km', b:12 },
    { t:'p', d:'M162 116 Q170 74 200 72 Q232 74 238 116 Z', f:'#B9A88E' },
    { t:'c', x:186, y:84, r:6, f:'gri' }, { t:'c', x:204, y:80, r:5, f:'yesil' }, { t:'c', x:214, y:94, r:6, f:'gri' }, { t:'r', x:192, y:94, w:6, h:12, rx:2, f:'buz' },
    { t:'y', x:200, y:132, m:'çöp sahası', b:11 } ] },

  // ---- fiiller ----
  overtake: { boy: 134, alt: 'Bitişe az kala koşucu öndekinin yanından geçiyor.', o: [
    { t:'r', x:0, y:96, w:240, h:38, f:'#FF9E7A' }, { t:'l', d:'M0 110 L240 110 M0 122 L240 122', w:1.2, k:'beyaz' },
    { t:'l', d:'M206 30 L206 96', w:2 }, { t:'r', x:206, y:30, w:24, h:14, f:'beyaz' }, { t:'y', x:218, y:41, m:'bitiş', b:9 },
    { t:'k', x:120, y:104, s:1, f:'gri', yuz:'sasir' },
    { t:'k', x:146, y:116, s:1, f:'pembe', yuz:'mutlu', kol:'yukari' },
    { t:'l', d:'M104 112 L124 112 M100 118 L120 118', w:1.6, k:'gri' },
    { t:'l', d:'M84 120 Q120 132 162 112', w:2.2, k:'vurgu' }, { t:'l', d:'M154 108 L163 111 L158 119', w:2.2, k:'vurgu' },
    { t:'y', x:80, y:60, m:'geçti!', b:15 } ] },
  shrink: { boy: 134, alt: 'Sıcak suda yıkanan kazak küçülüyor: önce büyük, sonra küçücük.', o: [
    ...kazak(56, 64, 1.5), { t:'y', x:56, y:126, m:'önce', b:12 },
    { t:'r', x:106, y:44, w:28, h:26, rx:4, f:'buz' }, { t:'l', d:'M112 52 q4 -3 8 0 t8 0', w:1.2, k:'su' }, { t:'y', x:120, y:84, m:'sıcak su', b:10 },
    { t:'l', d:'M112 98 L130 98 M125 93 L131 98 L125 103', w:2 },
    ...kazak(184, 80, .75), { t:'y', x:184, y:126, m:'sonra', b:12 } ] },
  melt: { boy: 134, alt: 'Cepteki çikolata: önce sağlam, eve varınca erimiş bir göle dönmüş.', o: [
    { t:'r', x:20, y:46, w:60, h:36, rx:3, f:'agac' }, { t:'l', d:'M40 46 L40 82 M60 46 L60 82 M20 64 L80 64', w:1.4, k:'#6B4430' },
    { t:'y', x:50, y:110, m:'önce', b:12 },
    { t:'c', x:120, y:40, r:12, f:'sari' }, { t:'l', d:'M106 64 q4 -4 8 0 t8 0 t8 0', w:1.8, k:'turuncu' },
    { t:'l', d:'M108 80 L130 80 M125 75 L131 80 L125 85', w:2 },
    { t:'p', d:'M150 96 Q152 76 176 78 Q196 70 212 84 Q232 88 226 100 Q210 112 180 108 Q156 112 150 96 Z', f:'agac' },
    { t:'p', d:'M168 104 q2 10 4 0 Z M198 106 q2 12 4 0 Z', f:'agac' },
    { t:'y', x:190, y:130, m:'eridi', b:12 } ] },
  scatter: { boy: 134, alt: 'Rüzgâr kâğıtları bahçenin her yanına savuruyor; figür şaşkın.', o: [
    { t:'r', x:0, y:104, w:240, h:30, f:'yesil' }, ...cali(214, 104),
    { t:'l', d:'M8 30 Q50 20 80 34 M14 52 Q60 42 98 56 M6 74 Q40 66 70 76', w:2.2, k:'catlak' }, { t:'y', x:40, y:16, m:'rüzgâr', b:12 },
    ...kagit(100, 30, .4), ...kagit(130, 52, -.3), ...kagit(156, 24, .9), ...kagit(176, 70, .2), ...kagit(120, 86, -.8), ...kagit(196, 40, -.5), ...kagit(150, 96, .5),
    { t:'k', x:60, y:122, s:.95, yuz:'sasir', kol:'yukari' } ] },
  sneeze: { boy: 134, alt: 'Kapıdan parlak güneşe çıkan figür hapşırıyor.', o: [
    { t:'r', x:8, y:20, w:52, h:104, rx:4, f:'kraft' }, { t:'r', x:16, y:28, w:36, h:88, rx:3, f:'#5A3E5E' },
    { t:'c', x:204, y:30, r:18, f:'sari' }, { t:'l', d:'M180 30 l-10 0 M204 54 l0 10 M186 48 l-7 7 M222 48 l7 7', w:2, k:'turuncu' },
    { t:'k', x:84, y:124, s:1.2, yuz:'sasir' },
    ...[[104, 74], [110, 82], [116, 70], [122, 78], [108, 66]].map(([x, y]) => ({ t:'c', x, y, r:1.6, f:'buz' })),
    { t:'y', x:148, y:84, m:'hapşu!', b:20 } ] },
  applaud: { boy: 134, alt: 'Piyanist çalmayı bitiriyor; seyirciler dakikalarca alkışlıyor.', o: [
    { t:'r', x:120, y:20, w:118, h:62, rx:4, f:'beyaz' },
    { t:'r', x:150, y:46, w:60, h:26, rx:3, f:'#4B2E5E' }, { t:'r', x:154, y:50, w:52, h:6, f:'beyaz' },
    { t:'k', x:140, y:80, s:.8, f:'pembe', kol:'yukari' },
    ...[[20, 122], [44, 124], [68, 122], [92, 124], [32, 104], [56, 106], [80, 104]].map(([x, y]) => ({ t:'k', x, y, s:.62, kol:'yukari' })),
    { t:'l', d:'M14 84 l-4 -4 M26 82 l4 -4 M50 84 l-4 -4 M62 82 l4 -4 M86 84 l-4 -4 M98 82 l4 -4', w:1.4, k:'turuncu' },
    { t:'y', x:56, y:30, m:'alkış!', b:18 } ] },

  // ---- sıfatlar ----
  crowded: { boy: 134, alt: 'Feribot öyle kalabalık ki yolcular ayakta, sıkış sıkış duruyor.', o: [
    { t:'r', x:0, y:104, w:240, h:30, f:'su' },
    { t:'p', d:'M24 86 L216 86 L200 112 L40 112 Z', f:'beyaz' }, { t:'r', x:24, y:94, w:192, h:6, f:'kirmizi' },
    ...Array.from({ length: 11 }, (_, i) => ({ t:'k', x:40 + i * 16, y:86, s:.6 })),
    ...Array.from({ length: 6 }, (_, i) => ({ t:'k', x:52 + i * 24, y:74, s:.5 })),
    { t:'y', x:120, y:24, m:'kalabalık', b:16 } ] },
  sparse: { boy: 134, alt: 'Kışın sahil yolu bomboş: tek bir araba, boş yazlık evler.', o: [
    { t:'r', x:0, y:104, w:240, h:30, f:'su' }, { t:'r', x:0, y:84, w:240, h:20, f:'yol' },
    ...ev(20, 50, 'beyaz'), ...ev(110, 54, 'beyaz'), ...ev(196, 50, 'beyaz'),
    { t:'araba', x:150, y:86 },
    { t:'l', d:'M60 24 l4 0 M62 22 l0 4 M150 18 l4 0 M152 16 l0 4 M210 30 l4 0 M212 28 l0 4', w:1.4, k:'catlak' },
    { t:'y', x:80, y:24, m:'seyrek', b:16 } ] },
  arid: { boy: 134, alt: 'Kurak düzlük: çatlak toprak, birkaç dayanıklı çalı ve bir kertenkele.', o: [
    { t:'c', x:206, y:28, r:16, f:'sari' },
    { t:'r', x:0, y:84, w:240, h:50, f:'tas' },
    { t:'l', d:'M14 96 l12 6 l-4 8 l12 4 M90 92 l8 10 l10 -2 l6 10 M170 100 l12 4 l-2 10', w:1.4, k:'iz' },
    ...cali(60, 92), ...cali(150, 90),
    { t:'p', d:'M96 118 q10 -6 22 -2 q8 2 14 -2 l4 4 q-6 4 -16 4 q-8 0 -24 0 Z', f:'yesil' }, { t:'l', d:'M104 116 l-4 6 M118 116 l4 6', w:1.2 },
    { t:'y', x:60, y:46, m:'kurak', b:16 } ] },
};
