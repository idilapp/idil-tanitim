// Kelime kartı görselleri · 19. parti (18 Kasım 2026): 50 kart. Tarz v11; her sahne kartın kendi örnek cümlesini anlatır.
// Çizimler özgün.
import { ev, dalga, okt, balon, iki, kutu, balik } from './parca.js';

const kis = (x, y, s, f, kol, yuz) => ({ t:'k', x, y, s, f, kol, yuz });
const eksen = (x0, y0, x1, y1) => ({ t:'l', d:`M${x0} ${y1} L${x0} ${y0} L${x1} ${y0}`, w:1.8 });
const bulut = (x, y, f = '#C9CED6') => [[-14, 2, 9], [0, -4, 12], [14, 2, 9]].map(([a, b, r]) => ({ t:'c', x:x + a, y:y + b, r, f }));
const kitap = (x, y, f, m) => [{ t:'r', x, y, w:40, h:52, rx:3, f }, { t:'r', x:x + 5, y:y + 8, w:30, h:14, rx:2, f:'#FFFFFF' }, ...(m ? [{ t:'y', x:x + 20, y:y + 19, m, b:8 }] : [])];
const bardakK = (x, y, f) => [{ t:'p', d:`M${x} ${y} L${x + 20} ${y} L${x + 17} ${y + 26} L${x + 3} ${y + 26} Z`, f }];
const yilan = (x, y) => [{ t:'l', d:`M${x} ${y} q12 -14 24 0 t24 0 t20 -6`, w:7, k:'#7EA04A' }, { t:'e', x:x + 70, y:y - 8, rx:8, ry:5, f:'#7EA04A' }, { t:'c', x:x + 72, y:y - 10, r:1.2, f:'#4B2E5E' }, { t:'l', d:`M${x + 78} ${y - 7} l6 0 l2 -2 M${x + 84} ${y - 7} l2 2`, w:1, k:'kirmizi' }];
const elmas = (x, y, f = '#DDF4FF') => [{ t:'p', d:`M${x - 20} ${y - 6} L${x - 10} ${y - 18} L${x + 10} ${y - 18} L${x + 20} ${y - 6} L${x} ${y + 18} Z`, f }, { t:'l', d:`M${x - 20} ${y - 6} L${x + 20} ${y - 6} M${x - 10} ${y - 18} L${x - 6} ${y - 6} L${x} ${y + 18} M${x + 10} ${y - 18} L${x + 6} ${y - 6}`, w:1, k:'#9FC6DE' }];

export default {
  // ---- sıfatlar ----
  accurate: { boy: 134, alt: 'Hava tahmini şaşırtıcı derecede doğruydu: yağmur tam öğlen başladı.', o: [
    { t:'r', x:14, y:30, w:80, h:60, rx:6, f:'#2A2550' }, { t:'r', x:20, y:36, w:68, h:48, rx:3, f:'buz' }, ...bulut(54, 54), { t:'l', d:'M44 68 l-3 6 M56 68 l-3 6', w:1.4, k:'su' }, { t:'y', x:54, y:106, m:'tahmin: 12:00', b:10 },
    { t:'c', x:170, y:52, r:22, f:'#FFFFFF' }, { t:'l', d:'M170 52 L170 34', w:2 }, { t:'l', d:'M164 32 l6 -4 l6 4', w:1 },
    ...bulut(170, 96, '#A8AEB8'), { t:'l', d:'M158 108 l-3 8 M172 108 l-3 8 M186 108 l-3 8', w:1.6, k:'su' },
    { t:'c', x:216, y:30, r:10, f:'yesil' }, { t:'y', x:216, y:35, m:'✓', b:11 }, okt(100, 60, 34) ] },
  affordable: { boy: 134, alt: 'Yeni model hafif, güvenilir ve çoğu öğrencinin alabileceği fiyatta.', o: [
    { t:'r', x:40, y:44, w:90, h:56, rx:4, f:'#2A2550' }, { t:'r', x:46, y:50, w:78, h:42, rx:2, f:'buz' }, { t:'p', d:'M30 100 L140 100 L132 110 L38 110 Z', f:'gri' },
    { t:'p', d:'M156 46 L210 46 L220 60 L210 74 L156 74 Z', f:'sari' }, { t:'y', x:184, y:66, m:'₺ uygun', b:11 },
    kis(196, 124, .8, 'pembe', 'yukari', 'mutlu'), ...kutu(84, 26, 90, 'öğrenci dostu', 10) ] },
  'single-use': { boy: 134, alt: 'Festival ziyaretçilerden tek kullanımlık bardak yerine kendi bardaklarını getirmelerini istedi.', o: [
    ...iki(),
    ...bardakK(36, 50, '#FFFFFF'), ...bardakK(56, 56, '#FFFFFF'), { t:'p', d:'M72 86 L94 88 L92 94 L70 92 Z', f:'#FFFFFF' },
    { t:'l', d:'M28 46 L98 104 M98 46 L28 104', w:3, k:'kirmizi' },
    { t:'p', d:'M164 52 L198 52 L194 98 L168 98 Z', f:'su' }, { t:'l', d:'M198 62 q12 2 10 14 q-2 10 -12 10', w:2.4 }, { t:'c', x:212, y:104, r:10, f:'yesil' }, { t:'y', x:212, y:109, m:'✓', b:11 },
    { t:'y', x:59, y:28, m:'tek kullanımlık', b:11 }, { t:'y', x:181, y:28, m:'kendi bardağın', b:11 } ] },
  addictive: { boy: 134, alt: 'Bazı mobil oyunlar bağımlılık yapacak biçimde tasarlanır; çocuklar telefonu bırakmakta zorlanır.', o: [
    kis(80, 124, 1.2, 'sari', 'ileri'), { t:'r', x:96, y:84, w:20, h:30, rx:4, f:'#2A2550' }, { t:'r', x:99, y:88, w:14, h:20, rx:2, f:'#9FE07A' },
    { t:'l', d:'M118 84 q8 -10 0 -20 M126 90 q14 -14 0 -32', w:1.6, k:'vurgu' },
    { t:'c', x:180, y:48, r:16, f:'#FFFFFF' }, { t:'l', d:'M180 38 L180 48 L188 52', w:1.6 }, { t:'y', x:180, y:84, m:'23:30', b:12 },
    ...kutu(66, 30, 82, '“bir oyun daha”', 9), { t:'y', x:180, y:110, m:'bırakamıyor', b:10 } ] },
  pervasive: { boy: 134, alt: 'Duman kokusu öyle yayılmıştı ki yangından sonra günlerce giysilerimize sindi.', o: [
    { t:'l', d:'M20 36 L220 36', w:2, k:'agac' },
    { t:'p', d:'M50 44 L58 40 Q64 46 70 40 L78 44 L88 56 L80 62 L76 58 L76 104 L52 104 L52 58 L48 62 L40 56 Z', f:'pembe' }, { t:'p', d:'M106 44 L114 40 Q120 46 126 40 L134 44 L144 56 L136 62 L132 58 L132 104 L108 104 L108 58 L104 62 L96 56 Z', f:'#9FD6E8' }, { t:'p', d:'M162 44 L170 40 Q176 46 182 40 L190 44 L200 56 L192 62 L188 58 L188 104 L164 104 L164 58 L160 62 L152 56 Z', f:'sari' },
    { t:'l', d:'M64 36 l0 6 M120 36 l0 6 M176 36 l0 6', w:1.4 },
    { t:'l', d:'M30 70 q8 -6 0 -14 q-8 -8 0 -16 M210 74 q8 -6 0 -14 q-8 -8 0 -16 M64 92 q6 -4 0 -10 M176 92 q6 -4 0 -10 M120 92 q6 -4 0 -10', w:1.6, k:'gri' },
    ...kutu(120, 122, 82, 'duman kokusu', 10) ] },
  indistinguishable: { boy: 134, alt: 'Sahte banknotlar parlak ışık altında bile gerçeklerinden neredeyse ayırt edilemiyordu.', o: [
    ...[[24, 'gerçek'], [132, 'sahte']].flatMap(([x, m]) => [{ t:'r', x, y:50, w:84, h:42, rx:3, f:'#9FD6B6' }, { t:'c', x:x + 22, y:71, r:12, f:'#C8EBC8' }, { t:'y', x:x + 60, y:76, m:'100', b:13 }, { t:'y', x:x + 42, y:110, m, b:11 }]),
    { t:'y', x:120, y:76, m:'=', b:16 },
    { t:'p', d:'M108 4 L132 4 L126 16 L114 16 Z', f:'gri' }, { t:'p', d:'M114 16 L126 16 L170 46 L70 46 Z', f:'#FFF9D6' },
    ...kutu(196, 22, 66, 'fark yok', 10) ] },
  gruelling: { boy: 134, alt: 'On iki saatlik yorucu bir nöbetten sonra genç doktor eve dönerken otobüste uyuyakaldı.', o: [
    { t:'r', x:30, y:50, w:180, h:56, rx:8, f:'sari' }, ...[0, 1, 2, 3, 4].map(i => ({ t:'r', x:44 + i * 32, y:58, w:24, h:18, rx:2, f:'buz' })),
    { t:'c', x:60, y:108, r:8, f:'#4B4B52' }, { t:'c', x:180, y:108, r:8, f:'#4B4B52' },
    { t:'c', x:120, y:68, r:6, f:'ten' }, { t:'r', x:112, y:74, w:16, h:4, f:'#FFFFFF' }, { t:'y', x:140, y:54, m:'z z', b:10 },
    ...kutu(64, 26, 70, '12 saat', 11), { t:'y', x:180, y:30, m:'nöbet bitti', b:11 } ] },
  amateur: { boy: 134, alt: 'Amatör ligdeki oyuncuların çoğu tam gün çalışıyor ve yalnızca akşamları antrenman yapıyor.', o: [
    { t:'r', x:4, y:6, w:110, h:122, rx:12, f:'#E8EAF0' }, { t:'r', x:126, y:6, w:110, h:122, rx:12, f:'#2A2550' },
    kis(59, 112, 1, '#2F4E8C', 'ileri'), { t:'r', x:70, y:84, w:20, h:14, rx:2, f:'#4B4B52' }, { t:'y', x:59, y:28, m:'gündüz: iş', b:11 },
    { t:'p', d:'M206 22 Q194 32 206 44 Q186 44 186 33 Q186 22 206 22 Z', f:'#FFF3C4' }, { t:'r', x:126, y:104, w:110, h:24, f:'yesil' },
    kis(170, 110, 1, 'kirmizi', 'yukari'), { t:'c', x:200, y:104, r:6, f:'#FFFFFF' }, { t:'y', x:156, y:28, m:'akşam: maç', b:11 } ] },
  elite: { boy: 134, alt: 'Ulusal merkezin ana havuzunda yalnızca seçkin yüzücüler antrenman yapabiliyor.', o: [
    { t:'r', x:20, y:60, w:200, h:60, rx:4, f:'su' }, { t:'l', d:'M20 80 L220 80 M20 100 L220 100', w:1.6, k:'kirmizi', kesik:true },
    { t:'e', x:90, y:70, rx:12, ry:5, f:'ten' }, { t:'c', x:104, y:68, r:5, f:'kirmizi' }, { t:'l', d:'M66 68 l14 0', w:1.4, k:'beyaz' },
    { t:'c', x:180, y:34, r:12, f:'#E8C15A' }, { t:'p', d:'M174 44 L170 60 L180 54 L190 60 L186 44 Z', f:'kirmizi' }, { t:'y', x:180, y:38, m:'1', b:10 },
    kis(30, 54, .6, 'gri', 'asagi', 'uzgun'), { t:'l', d:'M44 50 L60 50', w:2.4, k:'kirmizi' },
    ...kutu(110, 30, 70, 'yalnız seçkin', 9) ] },
  awkward: { boy: 134, alt: 'Herkesin önünde yaşını sorunca garip bir sessizlik oldu.', o: [
    ...[50, 90, 150, 190].map((x, i) => kis(x, 120, .9, ['su', 'pembe', 'sari', 'yesil'][i], 'asagi', 'sasir')),
    kis(120, 120, .9, 'turuncu', 'asagi', 'uzgun'),
    ...balon(80, 36, 70, 'kaç yaşın…?', 10), { t:'y', x:170, y:44, m:'…', b:22 },
    { t:'l', d:'M106 72 q4 -4 0 -8 M134 72 q-4 -4 0 -8', w:1.2, k:'su' } ] },
  timeless: { boy: 134, alt: 'Bazı çocuk kitapları zamansızdır: büyükannemin sevdikleri, şimdi oğluma okuduklarımla aynı.', o: [
    ...kitap(100, 30, 'kirmizi', 'MASAL'),
    kis(40, 120, 1, 'gri', 'ileri', 'mutlu'), { t:'y', x:40, y:60, m:'1960', b:11 },
    kis(196, 120, 1, 'pembe', 'ileri', 'mutlu'), kis(222, 120, .55, 'sari'), { t:'y', x:200, y:60, m:'bugün', b:11 },
    { t:'l', d:'M60 90 L96 70 M146 70 L180 90', w:1.4, k:'vurgu', kesik:true }, ...kutu(120, 106, 58, 'zamansız', 10) ] },
  oral: { boy: 134, alt: 'Yazı yaygınlaşmadan önce birçok topluluk tarihini sözlü gelenekle yaşattı.', o: [
    { t:'p', d:'M100 110 Q120 90 140 110 Z', f:'turuncu' }, { t:'p', d:'M110 110 Q120 98 130 110 Z', f:'sari' },
    kis(120, 92, 1, 'kraft', 'bas'), ...[[60, 120], [84, 124], [156, 124], [180, 120]].map(([x, y]) => kis(x, y, .6)),
    ...balon(120, 30, 96, '“eskiden…”', 11), { t:'l', d:'M30 40 L58 40 M30 30 L54 40 L30 50', w:1.6, k:'kirmizi' }, { t:'r', x:20, y:28, w:24, h:26, rx:2, f:'#FFFFFF' }, { t:'l', d:'M18 26 L48 58', w:2, k:'kirmizi' },
    ...kutu(200, 60, 54, 'sözlü', 11) ] },
  wicked: { boy: 134, alt: 'Oyunda kötü kalpli amca genç prensi bir kuleye kilitleyip tacı alıyor.', o: [
    { t:'r', x:20, y:24, w:44, h:100, f:'tas' }, ...[20, 36, 52].map(x => ({ t:'r', x, y:16, w:10, h:8, f:'tas' })), { t:'r', x:32, y:44, w:20, h:20, rx:2, f:'buz' },
    { t:'c', x:42, y:54, r:6, f:'ten' }, { t:'l', d:'M36 44 l0 20 M42 44 l0 20 M48 44 l0 20', w:1.4, k:'#4B4B52' },
    kis(150, 120, 1.15, '#3B3446', 'bas', 'mutlu'), { t:'p', d:'M140 66 L140 58 L145 62 L150 54 L155 62 L160 58 L160 66 Z', f:'sari' },
    { t:'l', d:'M138 72 l6 2 M156 72 l6 -2', w:1.6, k:'#3B3446' },
    ...kutu(196, 30, 70, 'kötü amca', 11) ] },
  fragmented: { boy: 134, alt: 'İkizler doğduktan sonra uykusu aylarca bölük pörçük oldu.', o: [
    { t:'l', d:'M14 70 L226 70', w:1, k:'gri', kesik:true },
    ...[[20, 40], [70, 20], [100, 34], [150, 16], [176, 30]].map(([x, w]) => ({ t:'r', x, y:62, w, h:16, rx:4, f:'#C9A6FF' })),
    ...[[64, 'ağla'], [94, 'ağla'], [140, 'ağla'], [170, 'ağla']].map(([x, m]) => ({ t:'p', d:`M${x} 54 L${x + 2} 44 L${x + 4} 54 Z`, f:'kirmizi' })),
    { t:'y', x:20, y:96, m:'22:00', b:10 }, { t:'y', x:210, y:96, m:'07:00', b:10 },
    ...kutu(120, 30, 76, 'bölük uyku', 11), { t:'y', x:120, y:120, m:'ikizler', b:11 } ] },
  resistant: { boy: 134, alt: 'Bu boya hem ısıya hem neme dayanıklı; bu yüzden mutfaklarda sık kullanılır.', o: [
    { t:'r', x:30, y:30, w:110, h:90, f:'#BFE6D8' }, { t:'r', x:50, y:80, w:70, h:40, f:'#E8E2D4' }, { t:'e', x:70, y:76, rx:12, ry:4, f:'gri' }, { t:'e', x:100, y:76, rx:12, ry:4, f:'gri' },
    { t:'l', d:'M68 66 q-4 -6 0 -12 M100 66 q-4 -6 0 -12', w:1.4, k:'gri' },
    { t:'p', d:'M170 40 L170 30 Q186 22 202 30 L202 40 Z', f:'gri' }, { t:'r', x:166, y:40, w:40, h:46, rx:4, f:'#BFE6D8' }, { t:'y', x:186, y:66, m:'BOYA', b:9 },
    { t:'p', d:'M156 102 L176 102 L176 118 Q166 126 156 118 Z', f:'su' }, { t:'p', d:'M200 102 Q192 112 200 120 Q210 112 200 102 Z', f:'turuncu' },
    { t:'y', x:186, y:132, m:'ısı ✓ nem ✓', b:9 } ] },
  potent: { boy: 134, alt: 'Yeni ağrı kesici o kadar güçlü ki yalnızca hastanede veriliyor.', o: [
    { t:'r', x:20, y:50, w:60, h:64, rx:6, f:'#FFFFFF' }, { t:'r', x:20, y:50, w:60, h:16, rx:6, f:'kirmizi' }, { t:'y', x:50, y:62, m:'GÜÇLÜ', b:9 },
    { t:'p', d:'M42 84 L58 84 L54 100 L46 100 Z', f:'sari' }, { t:'l', d:'M38 80 l-4 -4 M62 80 l4 -4', w:1.6, k:'sari' },
    okt(90, 82, 24),
    { t:'r', x:140, y:40, w:84, h:76, f:'#FFFFFF' }, { t:'r', x:174, y:50, w:16, h:6, f:'kirmizi' }, { t:'r', x:179, y:45, w:6, h:16, f:'kirmizi' }, { t:'r', x:170, y:86, w:24, h:30, f:'buz' },
    ...kutu(182, 30, 76, 'yalnız hastane', 9) ] },
  susceptible: { boy: 134, alt: 'Küçük çocuklar ve yaşlılar sıcak çarpmasına daha yatkındır.', o: [
    { t:'c', x:200, y:28, r:16, f:'turuncu' }, { t:'l', d:'M176 28 l-8 0 M184 12 l-6 -6 M184 44 l-6 6', w:1.6, k:'turuncu' },
    kis(60, 120, .6, 'sari', 'asagi', 'uzgun'), kis(110, 120, 1, 'gri', 'asagi', 'uzgun'), { t:'l', d:'M122 98 L126 120', w:2, k:'agac' },
    { t:'l', d:'M52 82 q-4 -4 0 -8 M104 70 q-4 -4 0 -8', w:1.4, k:'kirmizi' },
    kis(170, 120, 1, 'su', 'asagi', 'mutlu'),
    ...kutu(84, 30, 90, 'daha yatkın', 10), { t:'y', x:170, y:72, m:'daha dayanıklı', b:9 } ] },
  sedentary: { boy: 134, alt: 'On yıl hareketsiz bir işte çalıştıktan sonra spor olsun diye işe bisikletle gitmeye başladı.', o: [
    ...iki(),
    { t:'r', x:20, y:82, w:80, h:8, f:'agac' }, kis(44, 104, .9, 'gri', 'ileri', 'uzgun'), { t:'r', x:58, y:66, w:30, h:16, rx:2, f:'#2A2550' },
    { t:'r', x:30, y:94, w:24, h:6, f:'#4B4B52' },
    { t:'c', x:156, y:104, r:12, f:'yok' }, { t:'c', x:202, y:104, r:12, f:'yok' }, { t:'l', d:'M156 104 L174 80 L202 104 M174 80 L196 80', w:2, k:'kirmizi' },
    kis(178, 86, .8, 'yesil', 'ileri', 'mutlu'),
    { t:'y', x:59, y:28, m:'masa başı', b:11 }, { t:'y', x:181, y:28, m:'bisiklet', b:11 } ] },
  lethal: { boy: 134, alt: 'Bu yılanın ısırığı birkaç saat içinde tedavi edilmezse öldürücü olabilir.', o: [
    { t:'r', x:0, y:96, w:240, h:38, f:'#E3C48A' }, ...yilan(40, 96),
    { t:'p', d:'M160 30 L190 80 L130 80 Z', f:'sari' }, { t:'y', x:160, y:74, m:'!', b:20 },
    { t:'c', x:206, y:100, r:14, f:'#FFFFFF' }, { t:'l', d:'M206 92 L206 100 L212 104', w:1.4 }, { t:'y', x:206, y:126, m:'birkaç saat', b:9 },
    ...kutu(70, 30, 70, 'öldürücü', 11) ] },
  elevated: { boy: 134, alt: 'Kan şekeri biraz yüksek çıkınca doktor testi ertesi sabah kahvaltıdan önce tekrarlamasını istedi.', o: [
    { t:'r', x:30, y:30, w:60, h:84, rx:8, f:'#4B4B52' }, { t:'r', x:38, y:40, w:44, h:30, rx:3, f:'#E3F9D8' }, { t:'y', x:60, y:60, m:'118', b:13 },
    { t:'l', d:'M100 40 L100 100', w:1.6 }, { t:'l', d:'M96 64 L104 64', w:2, k:'yesil' }, { t:'l', d:'M96 52 L104 52', w:2, k:'kirmizi' }, { t:'p', d:'M106 54 L114 50 L114 58 Z', f:'kirmizi' },
    { t:'r', x:146, y:40, w:76, h:56, rx:4, f:'#FFFFFF' }, { t:'r', x:146, y:40, w:76, h:14, rx:4, f:'pembe' }, { t:'y', x:184, y:76, m:'yarın sabah', b:10 },
    { t:'y', x:184, y:90, m:'aç karna', b:9 }, ...kutu(70, 122, 70, 'biraz yüksek', 9) ] },
  mild: { boy: 134, alt: 'Virüsü kapanların çoğunda boğaz ağrısı ve burun akıntısı gibi yalnızca hafif belirtiler görülür.', o: [
    kis(70, 124, 1.2, 'su', 'bas', 'mutlu'), { t:'p', d:'M72 80 q-2 6 0 8 q2 -2 0 -8 Z', f:'su' },
    { t:'r', x:130, y:40, w:96, h:16, rx:8, f:'#FFFFFF' }, { t:'r', x:132, y:42, w:22, h:12, rx:6, f:'sari' }, { t:'y', x:178, y:76, m:'hafif', b:13 },
    ...kutu(70, 30, 104, 'boğaz, burun akıntısı', 9), { t:'y', x:178, y:100, m:'şiddet', b:10 } ] },
  hereditary: { boy: 134, alt: 'Renk körlüğü çoğunlukla kalıtsaldır ve erkeklerde kadınlardan çok daha yaygındır.', o: [
    kis(50, 70, .8, 'su'), kis(90, 70, .8, 'pembe'), { t:'l', d:'M70 74 L70 90 L120 90 L120 100 M70 90 L170 90 L170 100', w:1.4, k:'agac' },
    kis(120, 128, .7, 'su'), kis(170, 128, .7, 'pembe'),
    { t:'c', x:200, y:40, r:20, f:'#E3E6EA' }, ...[[192, 34], [200, 46], [208, 36], [196, 40], [206, 30]].map(([x, y], i) => ({ t:'c', x, y, r:3.6, f:i % 2 ? '#C9A06A' : '#9FB86A' })),
    { t:'y', x:200, y:74, m:'renk körlüğü', b:9 }, ...kutu(70, 22, 58, 'kalıtsal', 10) ] },
  excruciating: { boy: 134, alt: 'Dayanılmaz bir baş ağrısı yüzünden karanlık bir odada uzanmak zorunda kaldı.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#2A2550' },
    { t:'r', x:40, y:84, w:150, h:16, rx:4, f:'#FFFFFF' }, { t:'c', x:56, y:76, r:10, f:'ten' }, { t:'r', x:66, y:74, w:120, h:12, rx:5, f:'#9FD6E8' },
    { t:'p', d:'M58 52 L50 40 L62 46 L58 32 L70 50 Z', f:'sari' }, { t:'l', d:'M40 66 q-6 -6 0 -12 M74 58 q6 -6 0 -12', w:1.8, k:'kirmizi' },
    ...kutu(150, 36, 90, 'dayanılmaz ağrı', 9) ] },
  severe: { boy: 134, alt: 'Ciddi sel yüzünden yollar iki gün kapalı kaldı.', o: [
    { t:'r', x:0, y:70, w:240, h:64, f:'#8FA98A' }, dalga(84), dalga(104),
    ...ev(20, 52, 'pembe'), { t:'l', d:'M120 40 L120 90', w:2.4, k:'gri' }, { t:'r', x:96, y:30, w:48, h:20, rx:2, f:'#FFFFFF' }, { t:'y', x:120, y:44, m:'KAPALI', b:9 },
    { t:'r', x:170, y:70, w:56, h:14, rx:2, f:'#FFFFFF' }, ...[170, 186, 202, 218].map(x => ({ t:'r', x, y:70, w:8, h:14, f:'kirmizi' })),
    ...kutu(196, 30, 54, '2 gün', 11) ] },
  seismic: { boy: 134, alt: 'İstasyonun sismik aletleri yerdeki en hafif hareketleri bile kaydedebiliyor.', o: [
    { t:'r', x:20, y:50, w:120, h:60, rx:6, f:'#D7DBE2' }, { t:'r', x:30, y:60, w:100, h:34, rx:3, f:'#FFFFFF' },
    { t:'l', d:'M34 77 L60 77 l2 -2 l2 4 l2 -3 l2 2 L126 77', w:1.4, k:'kirmizi' }, { t:'c', x:130, y:100, r:4, f:'yesil' },
    { t:'r', x:0, y:110, w:240, h:24, f:'#C9A87A' }, { t:'l', d:'M160 114 l4 -2 l4 4 l4 -4 l4 2', w:1, k:'#8B6A3A' },
    ...kutu(80, 30, 74, 'sismik alet', 10), { t:'y', x:190, y:90, m:'en hafif hareket', b:9 } ] },
  devastating: { boy: 134, alt: 'Uzun kuraklığın bölgedeki çiftlikler üzerinde yıkıcı bir etkisi oldu.', o: [
    { t:'c', x:200, y:28, r:16, f:'turuncu' },
    { t:'r', x:0, y:80, w:240, h:54, f:'#D9B98E' }, { t:'l', d:'M20 96 l14 6 l-6 10 M80 90 l10 8 l12 -4 M150 100 l-10 8 l8 10 M200 92 l12 8', w:1.4, k:'#8B6A3A' },
    ...[30, 60, 90, 120].map(x => ({ t:'l', d:`M${x} 80 l-4 -12 M${x} 80 l4 -10`, w:1.6, k:'#B8A04E' })),
    ...ev(150, 60, 'kraft'), ...kutu(80, 30, 70, 'kuraklık', 11) ] },
  imminent: { boy: 134, alt: 'Kara bulutlar bir fırtınanın yaklaştığını açıkça gösteriyordu.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#8E9AAF' },
    ...bulut(70, 34, '#4B4F5E'), ...bulut(110, 28, '#4B4F5E'), ...bulut(150, 36, '#4B4F5E'),
    { t:'r', x:4, y:100, w:232, h:28, f:'#7FB069' },
    kis(196, 100, .8, 'pembe', 'bas', 'sasir'), { t:'l', d:'M30 80 q20 -6 40 0 M40 92 q20 -6 40 0', w:1.4, k:'#DDE6EF' },
    ...kutu(120, 72, 82, 'fırtına geliyor', 10) ] },
  flawless: { boy: 134, alt: 'Tamamen kusursuz elmaslar son derece nadir ve pahalıdır.', o: [
    ...elmas(70, 64), ...[[48, 36], [96, 36], [96, 90]].map(([x, y]) => ({ t:'l', d:`M${x} ${y - 6} l0 12 M${x - 6} ${y} l12 0`, w:1.6, k:'sari' })),
    { t:'c', x:180, y:60, r:20, f:'#E3F7FF' }, { t:'l', d:'M160 60 a20 20 0 1 0 40 0 a20 20 0 1 0 -40 0 M194 74 L210 92', w:3, k:'#6B7280' },
    { t:'y', x:180, y:64, m:'0 kusur', b:9 }, ...kutu(70, 116, 56, 'kusursuz', 10), { t:'y', x:180, y:118, m:'çok nadir', b:11 } ] },
  'cutting-edge': { boy: 134, alt: 'Hastane çok daha net görüntü veren son teknoloji tarayıcılar aldı.', o: [
    { t:'c', x:80, y:70, r:46, f:'#E8EAF0' }, { t:'c', x:80, y:70, r:24, f:'#FFFFFF' }, { t:'r', x:20, y:86, w:120, h:12, rx:4, f:'#9FD6E8' },
    { t:'r', x:150, y:30, w:76, h:60, rx:4, f:'#20304A' }, { t:'e', x:188, y:60, rx:22, ry:18, f:'#5A7696' }, { t:'p', d:'M180 50 Q188 44 196 50 Q198 62 188 66 Q178 62 180 50 Z', f:'#DDE8F0' },
    ...[[154, 24], [222, 24]].map(([x, y]) => ({ t:'l', d:`M${x} ${y - 6} l0 12 M${x - 6} ${y} l12 0`, w:1.6, k:'sari' })),
    ...kutu(188, 112, 70, 'çok net', 11), ...kutu(80, 20, 90, 'son teknoloji', 9) ] },
  dependent: { boy: 134, alt: 'Ada büyük ölçüde turizme bağımlı; yağmurlu bir yaz neredeyse her işletmeyi etkiliyor.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'su' }, { t:'p', d:'M40 100 Q60 60 120 56 Q180 60 200 100 Z', f:'#E8D9A0' },
    ...ev(84, 64, 'pembe'), ...ev(118, 60, 'sari'), { t:'r', x:150, y:72, w:20, h:14, f:'#FFFFFF' }, { t:'y', x:160, y:83, m:'otel', b:7 },
    ...bulut(120, 26, '#8E939C'), { t:'l', d:'M110 38 l-3 8 M124 38 l-3 8 M138 38 l-3 8', w:1.6, k:'#DDE6EF' },
    ...kutu(60, 118, 76, 'turizme bağlı', 9), { t:'y', x:196, y:118, m:'yağmur = zarar', b:9 } ] },
  saline: { boy: 134, alt: 'Tuzlu toprakta pek az ürün yetişir; tuz köklerin suyu almasını zorlaştırır.', o: [
    ...iki(),
    { t:'r', x:4, y:84, w:110, h:44, f:'#8B6A4A' }, { t:'l', d:'M59 84 L59 44', w:2.4, k:'#4E9E34' }, { t:'e', x:46, y:56, rx:12, ry:6, f:'yesil' }, { t:'e', x:72, y:50, rx:12, ry:6, f:'yesil' },
    { t:'r', x:126, y:84, w:110, h:44, f:'#C9B79A' }, ...[[140, 96], [160, 108], [186, 94], [210, 110], [226, 98], [170, 120]].map(([x, y]) => ({ t:'r', x, y, w:5, h:5, f:'#FFFFFF' })),
    { t:'l', d:'M181 84 L181 64 M181 72 l-6 -4', w:2, k:'#B8B84E' }, { t:'e', x:174, y:66, rx:6, ry:3, f:'#EDE38A' },
    { t:'y', x:59, y:28, m:'normal toprak', b:11 }, { t:'y', x:181, y:28, m:'tuzlu toprak', b:11 } ] },
  costly: { boy: 134, alt: 'Fırtınadan sonra çatıyı onarmak beklediğimizden çok daha pahalıya geldi.', o: [
    { t:'r', x:20, y:60, w:90, h:60, f:'sari' }, { t:'p', d:'M14 60 L65 26 L116 60 Z', f:'kirmizi' }, { t:'p', d:'M50 36 L70 40 L60 52 Z', f:'#F7F3E6' },
    kis(80, 26, .5, 'turuncu', 'ileri'),
    { t:'r', x:140, y:40, w:80, h:30, rx:4, f:'#FFFFFF' }, { t:'y', x:180, y:60, m:'tahmin ₺', b:11 },
    { t:'r', x:140, y:80, w:80, h:30, rx:4, f:'#FFE0E0' }, { t:'y', x:180, y:100, m:'fatura ₺₺₺', b:11 },
    ...kutu(180, 124, 50, 'pahalı', 10) ] },
  fluent: { boy: 134, alt: 'Lizbon’da bir yıl geçirdikten sonra kardeşim akıcı Portekizce konuşmaya başladı.', o: [
    { t:'r', x:4, y:6, w:110, h:122, rx:12, f:'#E8EAF0' }, { t:'r', x:126, y:6, w:110, h:122, rx:12, f:'#FFF3D6' },
    kis(59, 116, 1, 'su', 'asagi', 'sasir'), ...balon(59, 46, 60, 'Ob… ri…?', 10),
    kis(181, 116, 1, 'su', 'bas', 'mutlu'), ...balon(181, 46, 88, 'Muito obrigado!', 9),
    { t:'y', x:59, y:24, m:'ilk gün', b:10 }, { t:'y', x:181, y:24, m:'1 yıl sonra', b:10 } ] },
  prehistoric: { boy: 134, alt: 'Yeni yolu yapan işçiler çamurun içinde gömülü tarih öncesi bir taş balta buldu.', o: [
    { t:'r', x:0, y:70, w:240, h:64, f:'#9C7A52' }, { t:'r', x:0, y:62, w:240, h:8, f:'yol' },
    kis(60, 70, .9, 'turuncu', 'ileri', 'sasir'), { t:'p', d:'M48 34 Q60 24 72 34 Z', f:'sari' },
    { t:'p', d:'M140 100 Q130 86 146 80 Q166 76 172 92 Q170 104 156 106 Z', f:'#8E8678' }, { t:'l', d:'M164 96 L200 118', w:4, k:'agac' },
    ...kutu(186, 40, 88, 'taş balta', 11), { t:'y', x:186, y:62, m:'tarih öncesi', b:10 } ] },
  waterborne: { boy: 134, alt: 'Depremden sonra yardım görevlileri suyla bulaşan hastalıkları önlemek için arıtma tabletleri dağıttı.', o: [
    { t:'r', x:20, y:40, w:50, h:70, rx:6, f:'su' }, ...[[32, 60], [52, 76], [40, 92]].map(([x, y]) => ({ t:'c', x, y, r:4, f:'#9FE07A' })),
    { t:'y', x:45, y:126, m:'kirli su', b:10 },
    { t:'r', x:90, y:66, w:24, h:12, rx:6, f:'#FFFFFF' }, okt(120, 72, 22),
    { t:'r', x:160, y:40, w:50, h:70, rx:6, f:'#BFE6F7' }, { t:'c', x:212, y:52, r:10, f:'yesil' }, { t:'y', x:212, y:57, m:'✓', b:11 },
    { t:'y', x:185, y:126, m:'güvenli', b:10 }, ...kutu(102, 30, 66, 'tablet', 11) ] },
  efficient: { boy: 134, alt: 'Toplantıları hiç planlanandan uzun sürdürmeyen çok verimli bir yönetici.', o: [
    { t:'r', x:40, y:90, w:160, h:8, rx:3, f:'agac' },
    kis(60, 90, .8, 'pembe'), kis(100, 90, .8, 'su'), kis(180, 90, 1.05, 'koyu', 'bas', 'mutlu'),
    { t:'c', x:140, y:40, r:20, f:'#FFFFFF' }, { t:'l', d:'M140 26 L140 40 L150 46', w:1.8 }, { t:'p', d:'M140 40 L140 20 A20 20 0 0 1 160 40 Z', f:'#C9F0B4' },
    { t:'y', x:140, y:76, m:'tam zamanında', b:10 }, ...kutu(60, 30, 50, 'verimli', 10) ] },

  // ---- isimler ----
  stamina: { boy: 134, alt: 'Uzun bir hastalıktan sonra dedemin pazara gidip gelecek dayanıklılığı yeniden kazanması aylar sürdü.', o: [
    { t:'r', x:0, y:110, w:240, h:24, f:'yol' }, ...ev(10, 92, 'pembe'), { t:'r', x:190, y:80, w:44, h:30, f:'#FFB36B' }, { t:'p', d:'M186 80 L212 66 L238 80 Z', f:'kirmizi' }, { t:'y', x:212, y:100, m:'pazar', b:9 },
    kis(110, 110, 1, 'gri', 'ileri', 'mutlu'), { t:'l', d:'M122 88 L126 110', w:2, k:'agac' },
    { t:'r', x:70, y:30, w:100, h:14, rx:7, f:'#FFFFFF' }, { t:'r', x:72, y:32, w:80, h:10, rx:5, f:'yesil' }, { t:'y', x:120, y:60, m:'dayanıklılık', b:11 } ] },
  humour: { boy: 134, alt: 'Onun espri anlayışı bütün ekibi uzun ve zor bir hafta boyunca ayakta tuttu.', o: [
    { t:'r', x:40, y:90, w:160, h:8, rx:3, f:'agac' },
    kis(120, 90, 1.05, 'sari', 'bas', 'mutlu'), ...[60, 90, 150, 180].map((x, i) => kis(x, 90, .8, ['su', 'pembe', 'yesil', 'turuncu'][i], 'asagi', 'mutlu')),
    { t:'y', x:66, y:44, m:'ha ha', b:11 }, { t:'y', x:176, y:44, m:'hi hi', b:11 },
    { t:'r', x:20, y:104, w:200, h:22, rx:4, f:'#FFFFFF' }, { t:'y', x:120, y:120, m:'Pzt Sal Çar Per Cum', b:10 } ] },
  folklore: { boy: 134, alt: 'Düğün türkülerinden yerel ruhlarla ilgili hikâyelere kadar halk biliminin gündelik hayatın parçası olduğu bir köyde büyüdü.', o: [
    { t:'r', x:0, y:104, w:240, h:30, f:'#C9E7A8' },
    ...[[40, 'kirmizi'], [70, 'sari'], [100, 'su']].map(([x, f]) => kis(x, 104, .8, f, 'yukari', 'mutlu')),
    { t:'l', d:'M30 40 L110 40', w:1.2 }, ...[40, 56, 72, 88, 104].map((x, i) => ({ t:'p', d:`M${x} 40 l4 8 l4 -8 Z`, f:['kirmizi', 'sari', 'yesil', 'su', 'pembe'][i] })),
    kis(186, 104, .9, 'gri', 'bas'), ...balon(186, 44, 76, '“peri…”', 11),
    ...kutu(120, 124, 70, 'halk bilimi', 10) ] },
  analgesic: { boy: 134, alt: 'Dikişler alındıktan sonra hemşire ona hafif bir ağrı kesici verdi.', o: [
    kis(60, 124, 1.15, '#7FD8B6', 'ileri'), { t:'r', x:76, y:94, w:22, h:12, rx:6, f:'#FFFFFF' }, { t:'l', d:'M87 94 L87 106', w:1 },
    kis(176, 124, 1.1, 'su', 'asagi', 'mutlu'), { t:'r', x:188, y:96, w:20, h:8, rx:3, f:'#FFFFFF' },
    ...kutu(120, 34, 90, 'hafif ağrı kesici', 9) ] },
  sewage: { boy: 134, alt: 'Şiddetli yağmurdan sonra arıtılmamış atık su nehre taştı ve plaj bir hafta kapalı kaldı.', o: [
    { t:'l', d:'M20 26 l-3 8 M40 22 l-3 8 M60 26 l-3 8', w:1.6, k:'su' },
    { t:'r', x:10, y:40, w:30, h:16, f:'gri' }, { t:'p', d:'M40 50 Q70 60 90 80 Q100 90 120 92', f:'yok' }, { t:'l', d:'M40 50 Q70 60 90 80 Q100 90 120 92', w:6, k:'#8B7A4A' },
    { t:'r', x:110, y:86, w:130, h:48, f:'#7A9E8E' }, { t:'r', x:160, y:72, w:76, h:14, f:'#F2D69A' },
    { t:'l', d:'M200 72 L200 40', w:2, k:'gri' }, { t:'r', x:176, y:22, w:48, h:20, rx:2, f:'#FFFFFF' }, { t:'y', x:200, y:36, m:'KAPALI', b:9 },
    ...kutu(80, 116, 66, 'atık su', 11) ] },
  abdomen: { boy: 134, alt: 'Tarama hastanın karın boşluğunda az miktarda sıvı olduğunu ortaya koydu.', o: [
    { t:'c', x:64, y:20, r:14, f:'ten' }, { t:'p', d:'M30 40 Q64 30 98 40 L96 124 L32 124 Z', f:'#FFE7D6' },
    { t:'e', x:64, y:96, rx:24, ry:18, f:'#FFD6C6' }, { t:'e', x:72, y:102, rx:8, ry:5, f:'su' },
    ...kutu(170, 60, 50, 'karın', 11), { t:'l', d:'M144 62 L90 90', w:1.2, kesik:true },
    ...kutu(170, 102, 70, 'biraz sıvı', 10), { t:'l', d:'M134 102 L80 102', w:1.2, kesik:true } ] },
  adolescence: { boy: 134, alt: 'Ergenlikte uyku düzeni sık sık kayar; birçok genç akşam geç saatte daha dinç hisseder.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#2A2550' }, { t:'p', d:'M206 22 Q194 32 206 44 Q186 44 186 33 Q186 22 206 22 Z', f:'#FFF3C4' },
    kis(80, 112, 1.1, 'turuncu', 'yukari', 'mutlu'), { t:'y', x:110, y:50, m:'!', b:16 },
    { t:'r', x:140, y:70, w:66, h:30, rx:4, f:'#20304A' }, { t:'y', x:173, y:91, m:'23:30', b:13 },
    ...kutu(80, 30, 66, 'ergenlik', 11), { t:'y', x:173, y:118, m:'gece dinç', b:10 } ] },
  famine: { boy: 134, alt: 'Tarihçiler art arda gelen kötü hasatların yerel bir gıda sıkıntısını yaygın bir kıtlığa dönüştürdüğünü düşünüyor.', o: [
    { t:'r', x:0, y:96, w:240, h:38, f:'#D9B98E' }, ...[20, 40, 60, 80].map(x => ({ t:'l', d:`M${x} 96 l-3 -8 M${x} 96 l3 -6`, w:1.4, k:'#B8A04E' })),
    { t:'r', x:130, y:50, w:80, h:46, f:'#C9946A' }, { t:'p', d:'M126 50 L170 30 L214 50 Z', f:'#8B5E3C' }, { t:'r', x:156, y:66, w:28, h:30, f:'#5B4A3A' },
    { t:'p', d:'M146 112 Q144 100 156 98 Q168 100 166 112 Z', f:'kraft' },
    { t:'y', x:50, y:76, m:'1. yıl ✗', b:10 }, { t:'y', x:50, y:60, m:'2. yıl ✗', b:10 }, { t:'y', x:50, y:44, m:'3. yıl ✗', b:10 },
    ...kutu(170, 22, 76, 'ambar boş', 10) ] },
  tissue: { boy: 134, alt: 'İlaç beyin dokusuna yalnızca çok küçük miktarlarda ulaşır.', o: [
    { t:'p', d:'M140 90 Q120 90 120 70 Q116 40 150 30 Q180 16 210 26 Q234 32 232 60 Q232 86 206 94 Q186 104 164 98 Q150 104 140 90 Z', f:'#FFC3CF' },
    { t:'l', d:'M150 50 q10 10 0 20 M184 40 q10 14 0 28 M210 54 q-8 10 2 18', w:1.4, k:'#E89AAE' },
    ...[[30, 60], [44, 70], [58, 58], [72, 70], [86, 62]].map(([x, y]) => ({ t:'c', x, y, r:4, f:'su' })),
    { t:'l', d:'M96 66 L116 66', w:4, k:'gri' }, { t:'c', x:150, y:70, r:3, f:'su' },
    ...kutu(60, 100, 50, 'ilaç', 11), ...kutu(178, 118, 82, 'azı ulaşır', 10) ] },
  relapse: { boy: 134, alt: 'Tedaviyi çok erken bırakan hastalarda hastalığın nüksetme riski daha yüksektir.', o: [
    eksen(30, 108, 226, 20), { t:'l', d:'M34 40 Q80 70 110 96 Q130 104 150 96 Q180 70 220 44', w:3, k:'kirmizi' },
    { t:'l', d:'M120 108 L120 24', w:1.6, k:'vurgu', kesik:true }, { t:'y', x:120, y:122, m:'tedavi bırakıldı', b:10 },
    ...kutu(196, 30, 54, 'nüksetme', 10) ] },
  cue: { boy: 134, alt: 'Birçok sigara içen için sabahın ilk kahvesi sigara yakmak için güçlü bir işarettir.', o: [
    { t:'r', x:30, y:60, w:44, h:44, rx:6, f:'#FFFFFF' }, { t:'l', d:'M74 70 q12 0 12 12 q0 12 -12 12', w:2.4 }, { t:'r', x:34, y:64, w:36, h:8, f:'#8B5E3C' },
    { t:'l', d:'M42 52 q-4 -6 0 -12 M56 52 q-4 -6 0 -12', w:1.6, k:'gri' },
    okt(100, 82, 30),
    { t:'r', x:150, y:80, w:56, h:8, rx:2, f:'#FFFFFF' }, { t:'r', x:206, y:80, w:10, h:8, f:'turuncu' },
    { t:'c', x:120, y:30, r:12, f:'sari' }, { t:'y', x:120, y:35, m:'!', b:12 },
    ...kutu(60, 124, 54, 'sabah', 10), ...kutu(184, 116, 60, 'işaret', 10) ] },
  lapse: { boy: 134, alt: 'Kısa bir unutkanlık anı yıllardır birlikte çalıştığı iş arkadaşının adını unutmasına yol açtı.', o: [
    kis(60, 124, 1.15, 'su', 'bas', 'sasir'), kis(176, 124, 1.15, 'pembe', 'asagi', 'mutlu'),
    ...balon(60, 30, 64, 'Ay… Ay…?', 10), { t:'y', x:110, y:60, m:'?', b:20 },
    ...kutu(176, 40, 80, 'yıllardır tanıyor', 9) ] },
  retrieval: { boy: 134, alt: 'Birçok yaşlı insanda adlar unutulmasa da onları hatırlamak yavaşlar.', o: [
    { t:'r', x:20, y:30, w:96, h:80, rx:3, f:'#E8E2D4' }, { t:'l', d:'M20 56 L116 56 M20 84 L116 84', w:2, k:'agac' },
    ...[[28, 36], [52, 36], [76, 36], [28, 62], [52, 62], [76, 62], [28, 90], [52, 90]].map(([x, y]) => ({ t:'r', x, y, w:18, h:16, rx:1, f:'kraft' })),
    { t:'r', x:80, y:92, w:18, h:14, rx:1, f:'sari' }, { t:'y', x:89, y:103, m:'Ali', b:8 },
    kis(170, 124, 1.1, 'gri', 'ileri'), { t:'l', d:'M154 98 L102 98', w:1.4, kesik:true },
    { t:'p', d:'M186 124 L222 124 Q224 116 218 116 L214 120 L190 120 Z', f:'#C9E7A8' }, { t:'c', x:200, y:112, r:10, f:'#E0B07A' }, { t:'l', d:'M200 112 m-4 0 a4 4 0 1 1 4 4', w:1, k:'agac' }, { t:'y', x:206, y:96, m:'yavaş', b:10 },
    ...kutu(68, 124, 82, 'ad var, yavaş', 9) ] },
  interference: { boy: 134, alt: 'Taşındıktan sonra haftalarca eski adresin karışması yüzünden formlara yanlış posta kodu yazıp durdum.', o: [
    { t:'r', x:20, y:24, w:120, h:96, rx:3, f:'#FFFFFF' }, { t:'y', x:80, y:42, m:'FORM', b:11 },
    { t:'y', x:60, y:68, m:'posta kodu:', b:9 }, { t:'r', x:40, y:76, w:80, h:20, rx:2, f:'#FFE0E0' }, { t:'y', x:80, y:91, m:'24000', b:11 }, { t:'l', d:'M44 86 L116 86', w:2, k:'kirmizi' },
    ...ev(176, 70, 'kraft'), { t:'y', x:188, y:62, m:'eski ev', b:9 }, { t:'l', d:'M164 80 L124 86', w:1.4, k:'vurgu', kesik:true },
    ...kutu(196, 116, 70, 'doğrusu: 25000', 8) ] },
};
