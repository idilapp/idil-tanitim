// Kelime kartı görselleri · 18. parti (18 Kasım 2026): 50 kart. Tarz v11; her sahne kartın kendi örnek cümlesini anlatır.
// Çizimler özgün.
import { ev, dalga, okt, balon, iki, kutu, balik } from './parca.js';

const kis = (x, y, s, f, kol, yuz) => ({ t:'k', x, y, s, f, kol, yuz });
const eksen = (x0, y0, x1, y1) => ({ t:'l', d:`M${x0} ${y1} L${x0} ${y0} L${x1} ${y0}`, w:1.8 });
const kitap = (x, y, f, m) => [{ t:'r', x, y, w:40, h:52, rx:3, f }, { t:'r', x:x + 5, y:y + 8, w:30, h:14, rx:2, f:'#FFFFFF' }, ...(m ? [{ t:'y', x:x + 20, y:y + 19, m, b:8 }] : [])];
const tac = (x, y, f = 'sari') => ({ t:'p', d:`M${x - 9} ${y} L${x - 9} ${y - 10} L${x - 4} ${y - 5} L${x} ${y - 12} L${x + 4} ${y - 5} L${x + 9} ${y - 10} L${x + 9} ${y} Z`, f });
const atom = (x, y, r, f) => [{ t:'c', x, y, r, f }];
const kalp = (x, y, k = 1, f = 'kirmizi') => ({ t:'p', d:`M${x} ${y + 14 * k} C${x - 14 * k} ${y + 4 * k} ${x - 12 * k} ${y - 8 * k} ${x - 4 * k} ${y - 6 * k} Q${x} ${y - 4 * k} ${x} ${y} Q${x} ${y - 4 * k} ${x + 4 * k} ${y - 6 * k} C${x + 12 * k} ${y - 8 * k} ${x + 14 * k} ${y + 4 * k} ${x} ${y + 14 * k} Z`, f });

export default {
  // ---- tıp ----
  hormone: { boy: 134, alt: 'Stres hormonu kortizolün düzeyi genellikle sabahın erken saatlerinde yükselir.', o: [
    eksen(30, 108, 226, 20), { t:'l', d:'M34 96 Q60 94 74 40 Q90 30 110 56 Q150 86 222 96', w:3, k:'vurgu' },
    { t:'c', x:74, y:36, r:8, f:'sari' }, { t:'l', d:'M74 22 l0 -4 M62 28 l-3 -3 M86 28 l3 -3', w:1.4, k:'turuncu' },
    { t:'y', x:74, y:124, m:'sabah', b:10 }, { t:'y', x:196, y:124, m:'gece', b:10 },
    ...kutu(170, 36, 66, 'kortizol', 11) ] },
  injury: { boy: 134, alt: 'Araştırma, oyuncuların bir futbol sezonunda geçirdiği her sakatlığı kaydetti.', o: [
    { t:'r', x:0, y:96, w:120, h:38, f:'yesil' }, { t:'l', d:'M60 96 L60 134', w:1.4, k:'beyaz' },
    kis(60, 112, 1, 'kirmizi', 'asagi', 'uzgun'), { t:'r', x:56, y:106, w:10, h:8, rx:2, f:'#FFFFFF' }, { t:'c', x:90, y:120, r:6, f:'#FFFFFF' },
    { t:'r', x:140, y:20, w:86, h:100, rx:3, f:'#FFFFFF' }, { t:'y', x:183, y:38, m:'sakatlıklar', b:10 },
    ...['diz ||||', 'bilek |||', 'kas ||'].map((m, i) => ({ t:'y', x:183, y:62 + i * 20, m, b:11 })) ] },
  organ: { boy: 134, alt: 'Organ bağışı oranları ülkeden ülkeye büyük farklılık gösterir.', o: [
    eksen(30, 108, 226, 20),
    ...[[50, 70, 'A'], [94, 30, 'B'], [138, 82, 'C'], [182, 50, 'D']].map(([x, h, m]) => ({ t:'r', x, y:108 - h, w:26, h, f:'pembe' })),
    ...[[63, 'A'], [107, 'B'], [151, 'C'], [195, 'D']].map(([x, m]) => ({ t:'y', x, y:124, m:`${m} ülkesi`, b:8 })),
    kalp(196, 24, 1.1), { t:'r', x:182, y:40, w:28, h:14, rx:3, f:'#FFFFFF' }, { t:'y', x:196, y:51, m:'bağış', b:8 },
    ...kutu(90, 26, 76, 'organ bağışı', 10) ] },
  ulcer: { boy: 134, alt: 'Mide ülseri eskiden strese bağlanırdı; araştırmalar sonra birçoğunu bir bakteriyle ilişkilendirdi.', o: [
    { t:'p', d:'M40 40 Q20 70 50 100 Q90 120 120 96 Q140 74 118 60 Q96 52 90 36 Q74 20 40 40 Z', f:'#FFB3C8' }, { t:'e', x:84, y:84, rx:10, ry:6, f:'#C0392B' },
    { t:'r', x:152, y:28, w:80, h:22, rx:4, f:'#FFFFFF' }, { t:'y', x:192, y:44, m:'stres?', b:11 }, { t:'l', d:'M156 39 L228 39', w:2, k:'kirmizi' },
    { t:'r', x:152, y:70, w:80, h:22, rx:4, f:'#E3F9D8' }, { t:'y', x:192, y:86, m:'bakteri ✓', b:11 },
    { t:'e', x:110, y:88, rx:6, ry:3, f:'#9FE07A' }, { t:'l', d:'M104 88 q-4 -3 -8 0', w:1 },
    ...kutu(70, 120, 50, 'ülser', 11) ] },
  lifespan: { boy: 134, alt: 'Araştırmacılar genlerin yaşlanmayı nasıl etkilediğini anlamak için minik solucanların ömrünü inceliyor.', o: [
    { t:'e', x:60, y:72, rx:44, ry:30, f:'#E3F7FF' }, { t:'e', x:60, y:72, rx:36, ry:23, f:'#F6EBC8' },
    { t:'l', d:'M40 66 q4 -4 8 0 t8 0 M54 82 q4 -4 8 0 t8 0', w:2.4, k:'#B9895A' },
    { t:'l', d:'M120 104 L230 104', w:2 }, ...[0, 1, 2, 3].map(i => ({ t:'l', d:`M${124 + i * 32} 100 l0 8`, w:1.4 })),
    { t:'y', x:124, y:122, m:'0', b:10 }, { t:'y', x:220, y:122, m:'3 hafta', b:10 }, { t:'l', d:'M124 90 L216 90', w:4, k:'yesil' },
    ...kutu(176, 40, 54, 'ömür', 11), { t:'y', x:60, y:122, m:'solucan', b:10 } ] },
  ageing: { boy: 134, alt: 'Bilim insanları vücuttaki hangi değişikliklerin yaşlanmanın olağan parçası olduğunu hâlâ tartışıyor.', o: [
    kis(40, 120, .6, 'sari'), kis(90, 120, .9, 'su'), kis(146, 120, 1, '#7FD8B6'), kis(200, 120, .95, 'gri'), { t:'l', d:'M212 98 L216 120', w:2, k:'agac' },
    { t:'p', d:'M192 80 Q200 72 208 80 Z', f:'#FFFFFF' },
    { t:'l', d:'M30 50 L220 50 M212 44 L221 50 L212 56', w:1.6, k:'vurgu' }, ...kutu(120, 26, 70, 'yaşlanma', 11) ] },
  physician: { boy: 134, alt: 'Hekim başka test istemeden önce hastanın tıbbi geçmişini gözden geçirdi.', o: [
    kis(60, 124, 1.2, '#FFFFFF', 'ileri'), { t:'l', d:'M54 96 Q60 108 66 96', w:1.6, k:'gri' },
    { t:'r', x:82, y:30, w:80, h:94, rx:4, f:'#FFF3D6' }, { t:'r', x:82, y:30, w:80, h:14, rx:4, f:'su' }, { t:'y', x:122, y:41, m:'geçmiş', b:9 },
    { t:'l', d:'M90 56 l64 0 M90 66 l56 0 M90 76 l64 0 M90 86 l48 0 M90 96 l60 0', w:1, k:'gri' },
    ...kutu(200, 50, 50, 'hekim', 11), { t:'y', x:200, y:96, m:'önce oku', b:10 } ] },
  biopsy: { boy: 134, alt: 'Biyopsi doktorların tanı koymadan önce dokuyu mikroskop altında incelemesini sağlar.', o: [
    { t:'r', x:14, y:72, w:60, h:8, f:'buz' }, { t:'e', x:44, y:70, rx:10, ry:4, f:'#FFB3C8' },
    { t:'r', x:14, y:104, w:60, h:14, rx:3, f:'gri' }, { t:'p', d:'M52 104 L60 104 L60 44 L52 40 Z', f:'gri' }, { t:'p', d:'M24 26 L40 20 L50 60 L34 66 Z', f:'#6B7280' },
    { t:'l', d:'M48 24 Q90 14 116 40', w:1.2, kesik:true },
    { t:'c', x:166, y:66, r:44, f:'#FFE6F2' },
    ...[[150, 50], [176, 48], [190, 70], [160, 80], [180, 92], [142, 70]].flatMap(([x, y]) => [{ t:'e', x, y, rx:9, ry:7, f:'#FFC2D0' }, { t:'c', x, y, r:3, f:'koyu' }]),
    ...kutu(166, 124, 54, 'doku', 11) ] },
  tumour: { boy: 134, alt: 'Tarama ilk tedavi döneminden sonra tümörün küçüldüğünü gösterdi.', o: [
    ...iki(),
    { t:'r', x:20, y:30, w:78, h:78, rx:4, f:'#20304A' }, { t:'e', x:59, y:69, rx:32, ry:22, f:'#3E5A7A' }, { t:'p', d:'M52 54 Q72 48 76 64 Q74 82 56 80 Q42 70 52 54 Z', f:'#DDE8F0' },
    { t:'r', x:142, y:30, w:78, h:78, rx:4, f:'#20304A' }, { t:'e', x:181, y:69, rx:32, ry:22, f:'#3E5A7A' }, { t:'p', d:'M180 64 Q188 62 188 70 Q186 76 180 74 Q176 68 180 64 Z', f:'#DDE8F0' },
    { t:'y', x:59, y:24, m:'önce', b:11 }, { t:'y', x:181, y:24, m:'tedaviden sonra', b:10 }, { t:'y', x:181, y:122, m:'küçüldü', b:11 } ] },
  cholesterol: { boy: 134, alt: 'Yüksek kolesterol düzeyleri daha yüksek kalp hastalığı riskiyle ilişkilidir.', o: [
    { t:'r', x:14, y:50, w:140, h:40, rx:18, f:'#FFD6D6' }, { t:'p', d:'M60 56 Q80 66 100 56 L100 52 L60 52 Z', f:'#F2D06B' }, { t:'p', d:'M60 84 Q80 74 100 84 L100 88 L60 88 Z', f:'#F2D06B' },
    { t:'r', x:14, y:62, w:140, h:16, f:'kirmizi' },
    kalp(196, 50, 1.6), { t:'p', d:'M206 30 L212 20 L218 30 Z', f:'sari' }, { t:'y', x:212, y:30, m:'!', b:8 },
    ...kutu(80, 30, 72, 'kolesterol', 11), ...kutu(196, 112, 70, 'kalp riski', 10) ] },

  // ---- fen ----
  carbon: { boy: 134, alt: 'Ormanlar ve okyanuslar fosil yakıt yakılınca salınan karbonun önemli bir kısmını emer.', o: [
    { t:'r', x:96, y:60, w:40, h:40, f:'gri' }, { t:'r', x:112, y:30, w:10, h:30, f:'#8E939C' }, ...[[118, 22, 7], [128, 14, 8]].map(([x, y, r]) => ({ t:'c', x, y, r, f:'#A8AEB8' })),
    ...[[30, 70], [56, 66]].flatMap(([x, y]) => [{ t:'l', d:`M${x} ${y + 14} l0 20`, w:3, k:'agac' }, { t:'c', x, y, r:14, f:'#4E9E34' }]),
    { t:'r', x:160, y:84, w:76, h:40, f:'su' }, dalga(94, 160, 236),
    { t:'l', d:'M100 30 Q70 30 50 50 M140 30 Q180 40 196 76', w:1.6, k:'gri', kesik:true },
    ...kutu(120, 116, 30, 'C', 12), { t:'y', x:44, y:118, m:'orman', b:10 }, { t:'y', x:198, y:118, m:'okyanus', b:10 } ] },
  combustion: { boy: 134, alt: 'Yakıtın eksik yanması renksiz ve kokusuz bir gaz olan karbon monoksit üretebilir.', o: [
    { t:'p', d:'M60 110 Q40 80 60 50 Q66 70 76 60 Q90 80 80 110 Z', f:'turuncu' }, { t:'p', d:'M64 110 Q56 92 66 78 Q70 90 76 88 Q80 100 76 110 Z', f:'sari' },
    { t:'r', x:40, y:110, w:56, h:8, rx:2, f:'#4B4B52' },
    { t:'c', x:150, y:56, r:18, f:'#F7F3E6' }, { t:'y', x:150, y:61, m:'CO', b:13 }, { t:'l', d:'M132 56 q-6 -6 -14 -2', w:1.4, k:'gri', kesik:true },
    { t:'y', x:200, y:40, m:'renksiz', b:10 }, { t:'y', x:200, y:58, m:'kokusuz', b:10 },
    ...kutu(66, 30, 72, 'eksik yanma', 10), { t:'p', d:'M200 70 L214 96 L186 96 Z', f:'sari' }, { t:'y', x:200, y:92, m:'!', b:11 } ] },
  solvent: { boy: 134, alt: 'Su çok iyi bir çözücüdür; bu yüzden nehirler çözünmüş hâlde birçok mineral taşır.', o: [
    { t:'l', d:'M60 30 L60 104 Q60 114 70 114 L120 114 Q130 114 130 104 L130 30', w:2 }, { t:'p', d:'M62 56 L128 56 L128 104 Q128 112 120 112 L70 112 Q62 112 62 104 Z', f:'su' },
    { t:'r', x:84, y:20, w:14, h:14, rx:2, f:'#FFFFFF' }, { t:'l', d:'M91 36 L91 52', w:1.4, k:'vurgu', kesik:true },
    ...[[80, 74], [100, 84], [114, 70], [90, 98]].map(([x, y]) => ({ t:'c', x, y, r:2, f:'#FFFFFF' })),
    { t:'l', d:'M160 100 Q190 70 230 80', w:10, k:'su' }, ...[[176, 86], [196, 76], [214, 78]].map(([x, y]) => ({ t:'c', x, y, r:2, f:'#E8C15A' })),
    ...kutu(96, 126, 60, 'çözücü', 11), { t:'y', x:196, y:110, m:'nehir', b:10 } ] },
  neutron: { boy: 134, alt: 'Nükleer reaktörde bir uranyum çekirdeğine çarpan nötron onu bölüp yeni nötronlar açığa çıkarabilir.', o: [
    { t:'c', x:30, y:66, r:6, f:'gri' }, okt(40, 66, 30),
    { t:'c', x:100, y:66, r:20, f:'#9FE07A' }, { t:'y', x:100, y:71, m:'U', b:13 },
    { t:'l', d:'M122 66 L140 66 M134 60 L141 66 L134 72', w:1.6, k:'vurgu' },
    { t:'c', x:164, y:50, r:12, f:'#B5E37A' }, { t:'c', x:164, y:84, r:12, f:'#B5E37A' },
    ...[[204, 36], [214, 66], [204, 96]].map(([x, y]) => ({ t:'c', x, y, r:5, f:'gri' })), { t:'l', d:'M176 54 L196 40 M178 66 L206 66 M176 80 L196 92', w:1.4, k:'gri' },
    ...kutu(60, 116, 60, 'nötron', 11), ...kutu(180, 120, 66, 'bölünme', 10) ] },
  hydrogen: { boy: 134, alt: 'Sudan elektrik akımı geçirilince su hidrojen ve oksijene ayrışır; böylece hidrojen elde edilir.', o: [
    { t:'r', x:50, y:60, w:140, h:56, rx:4, f:'su' }, { t:'r', x:50, y:56, w:140, h:6, f:'#FFFFFF' },
    { t:'r', x:80, y:30, w:8, h:70, f:'gri' }, { t:'r', x:152, y:30, w:8, h:70, f:'gri' },
    ...[[84, 70], [84, 86], [80, 78], [88, 94]].map(([x, y]) => ({ t:'c', x, y, r:3, f:'#FFFFFF' })), ...[[156, 74], [156, 90]].map(([x, y]) => ({ t:'c', x, y, r:3, f:'#FFFFFF' })),
    { t:'r', x:110, y:16, w:20, h:12, rx:2, f:'sari' }, { t:'l', d:'M84 30 L84 22 L110 22 M130 22 L156 22 L156 30', w:1.6, k:'kirmizi' },
    ...kutu(40, 30, 60, 'hidrojen', 10), ...kutu(206, 30, 54, 'oksijen', 10) ] },
  isotope: { boy: 134, alt: 'Bazı izotoplar sabit bir hızla bozunduğu için bilim insanları onlarla kayaların ve fosillerin yaşını tahmin edebilir.', o: [
    { t:'r', x:20, y:60, w:90, h:56, rx:8, f:'#C9C2B4' }, { t:'l', d:'M36 86 q14 -16 30 -4 q14 10 30 -6', w:3, k:'#F3E6C8' },
    eksen(130, 112, 228, 24), { t:'l', d:'M134 30 Q160 60 180 80 Q200 96 224 104', w:3, k:'vurgu' },
    { t:'y', x:180, y:126, m:'zaman', b:10 }, ...kutu(64, 34, 66, 'kaç yaşında?', 9), { t:'y', x:184, y:22, m:'izotop azalır', b:10 } ] },

  // ---- toplum ----
  majority: { boy: 134, alt: 'Katılımcıların çoğu yerel kurumlardan çok komşularına güvendiğini söyledi.', o: [
    ...Array.from({ length: 10 }, (_, i) => kis(20 + i * 22, 124, .55, i < 7 ? 'yesil' : 'gri')),
    { t:'c', x:120, y:50, r:30, f:'gri' }, { t:'p', d:'M120 50 L120 20 A30 30 0 1 1 92 60 Z', f:'yesil' },
    ...kutu(196, 40, 54, 'çoğunluk', 9), { t:'y', x:196, y:66, m:'%70', b:12 } ] },
  minority: { boy: 134, alt: 'Bazı ülkelerde azınlık dilleri okullarda öğretiliyor; çocuklar kısmen ana dilinde okuyabiliyor.', o: [
    { t:'r', x:40, y:16, w:160, h:60, rx:4, f:'#2E5A44' }, { t:'y', x:90, y:44, m:'Merhaba', b:13 }, { t:'y', x:150, y:66, m:'Barev', b:13 },
    ...[50, 80, 110, 140, 170].map((x, i) => kis(x, 124, .7, i === 4 ? 'turuncu' : 'su')),
    ...kutu(170, 96, 64, 'ana dil', 10) ] },
  stereotype: { boy: 134, alt: 'Araştırma televizyon reklamlarının yaşlıların yeni teknolojiyle zorlandığı kalıp yargısını pekiştirebildiğini buldu.', o: [
    { t:'r', x:14, y:20, w:100, h:70, rx:6, f:'#2A2550' }, { t:'r', x:20, y:26, w:88, h:58, rx:3, f:'buz' },
    kis(64, 80, .8, 'gri', 'bas', 'sasir'), { t:'r', x:76, y:56, w:10, h:16, rx:2, f:'#4B4B52' }, { t:'y', x:46, y:42, m:'?', b:14 },
    kis(180, 120, 1.1, 'gri', 'ileri', 'mutlu'), { t:'r', x:194, y:94, w:20, h:14, rx:2, f:'#4B4B52' },
    { t:'y', x:64, y:110, m:'reklam', b:11 }, { t:'y', x:184, y:40, m:'gerçek?', b:12 } ] },
  taboo: { boy: 134, alt: 'Bazı kültürlerde misafirlerin önünde para ya da hastalık konuşmak güçlü bir tabudur.', o: [
    { t:'r', x:40, y:96, w:160, h:8, rx:3, f:'agac' },
    kis(70, 96, .9, 'pembe', 'asagi', 'mutlu'), kis(120, 96, .9, 'su', 'asagi', 'mutlu'), kis(170, 96, .9, 'sari', 'asagi', 'sasir'),
    { t:'r', x:140, y:20, w:60, h:30, rx:10, f:'#FFFFFF' }, { t:'y', x:170, y:41, m:'₺ ?', b:12 }, { t:'l', d:'M142 22 L198 48 M198 22 L142 48', w:2.4, k:'kirmizi' },
    ...kutu(70, 30, 50, 'tabu', 12) ] },
  identity: { boy: 134, alt: 'Birçok göçmen için evde konuşulan dil kimlik duygusunu korumada merkezî bir rol oynar.', o: [
    ...ev(80, 80, 'pembe'), { t:'r', x:76, y:60, w:30, h:20, f:'#FFFFFF' },
    kis(60, 124, .8, 'kirmizi', 'bas'), kis(140, 124, .6, 'sari'),
    ...balon(60, 30, 66, 'ana dil', 11), { t:'p', d:'M150 40 L190 40 L196 56 L170 66 L144 56 Z', f:'#C9A6FF' }, { t:'y', x:170, y:55, m:'kimlik', b:10 } ] },
  subculture: { boy: 134, alt: 'Liman kentindeki gençler kendi müziği, giyimi ve argosu olan bir alt kültür oluşturdu.', o: [
    { t:'r', x:0, y:110, w:240, h:24, f:'#8E939C' },
    ...[60, 100, 140].map((x, i) => kis(x, 110, .9, ['koyu', '#2A2530', 'kirmizi'][i], i === 1 ? 'yukari' : 'bas', 'mutlu')),
    ...[[54, 70], [94, 68], [134, 70]].map(([x, y]) => ({ t:'p', d:`M${x - 2} ${y} L${x + 14} ${y} L${x + 12} ${y - 6} L${x} ${y - 6} Z`, f:'#2A2530' })),
    { t:'l', d:'M180 50 l0 -14 l8 -2 M180 50 m-4 0 a4 3 0 1 0 8 0 a4 3 0 1 0 -8 0 M200 40 l0 -14 l8 -2', w:1.6, k:'vurgu' },
    ...balon(196, 80, 56, 'naber!', 11), ...kutu(70, 30, 70, 'alt kültür', 10) ] },
  utopia: { boy: 134, alt: 'Roman, özel mülkiyetin olmadığı ve herkesin günde yalnızca birkaç saat çalıştığı bir ütopya anlatıyor.', o: [
    ...kitap(14, 40, 'su', 'ROMAN'),
    { t:'e', x:160, y:70, rx:70, ry:44, f:'#FFFFFF' }, { t:'c', x:116, y:112, r:4, f:'#FFFFFF' }, { t:'c', x:100, y:120, r:3, f:'#FFFFFF' },
    ...ev(120, 62, 'pembe'), ...ev(150, 58, 'sari'), ...ev(180, 62, 'su'), { t:'c', x:200, y:40, r:8, f:'sari' },
    { t:'r', x:136, y:86, w:48, h:16, rx:3, f:'#E3F9D8' }, { t:'y', x:160, y:98, m:'iş: 3 saat', b:9 },
    { t:'y', x:34, y:114, m:'ütopya', b:11 } ] },
  conquest: { boy: 134, alt: 'Fetihten sonra yeni yöneticiler vergi toplamak ve düzeni korumak için birçok yerel görevliyi işinde bıraktı.', o: [
    { t:'r', x:70, y:40, w:100, h:80, f:'tas' }, ...[70, 86, 102, 118, 134, 150].map(x => ({ t:'r', x, y:32, w:10, h:8, f:'tas' })),
    { t:'l', d:'M120 32 L120 10', w:1.6 }, { t:'p', d:'M120 10 L138 14 L120 18 Z', f:'kirmizi' }, { t:'p', d:'M100 22 L104 14 L108 22 Z', f:'gri' },
    kis(40, 124, .9, 'kirmizi', 'bas'), { t:'p', d:'M30 88 Q40 78 50 88 Z', f:'gri' },
    kis(200, 124, .9, 'su', 'ileri'), { t:'r', x:206, y:94, w:18, h:12, rx:2, f:'#FFFFFF' }, { t:'y', x:200, y:72, m:'yerel', b:10 },
    ...kutu(120, 88, 50, 'fetih', 11) ] },
  legislation: { boy: 134, alt: 'Çocuk işçiliği kısmen yasalar asgari çalışma yaşını belirleyip okulu zorunlu kıldığı için azaldı.', o: [
    { t:'r', x:20, y:14, w:80, h:100, rx:3, f:'#F3E6C8' }, { t:'y', x:60, y:32, m:'YASA', b:12 }, { t:'l', d:'M30 46 l60 0 M30 56 l50 0 M30 66 l60 0', w:1, k:'gri' },
    { t:'y', x:60, y:86, m:'yaş ≥ 14', b:10 }, { t:'y', x:60, y:102, m:'okul zorunlu', b:9 },
    okt(108, 66, 22),
    { t:'r', x:150, y:50, w:70, h:50, f:'sari' }, { t:'p', d:'M146 50 L185 30 L224 50 Z', f:'kirmizi' },
    kis(160, 124, .6, 'su'), kis(184, 124, .6, 'pembe'), kis(208, 124, .6, 'turuncu') ] },
  dialect: { boy: 134, alt: 'Dilbilimciler dil ile lehçe arasındaki sınırın çoğu zaman dilsel değil siyasal gerekçelerle çizildiğine dikkat çeker.', o: [
    ...iki(),
    kis(59, 120, 1, 'kirmizi', 'bas'), ...balon(59, 40, 76, 'gelmişem', 12),
    kis(181, 120, 1, 'su', 'bas'), ...balon(181, 40, 76, 'geldim', 12),
    { t:'y', x:120, y:80, m:'≈', b:18 }, { t:'y', x:59, y:72, m:'lehçe', b:11 }, { t:'y', x:181, y:72, m:'ölçünlü dil', b:10 } ] },
  globalisation: { boy: 134, alt: 'Küreselleşme malların, paranın ve fikirlerin sınırları aşmasını kolaylaştırdı.', o: [
    { t:'c', x:120, y:68, r:40, f:'su' }, { t:'p', d:'M96 50 Q110 40 124 50 Q130 66 112 70 Q98 66 96 50 Z', f:'yesil' }, { t:'p', d:'M126 78 Q146 70 152 88 Q140 102 126 96 Z', f:'yesil' },
    { t:'l', d:'M60 30 Q120 0 180 30 M188 36 L182 28 L178 38 M60 106 Q120 136 180 106', w:1.6, k:'vurgu', kesik:true },
    { t:'r', x:24, y:56, w:22, h:16, f:'kraft' }, { t:'c', x:206, y:56, r:9, f:'#E8C15A' }, { t:'y', x:206, y:60, m:'₺', b:9 },
    { t:'c', x:206, y:96, r:9, f:'sari' }, { t:'l', d:'M206 106 l0 4', w:2 },
    { t:'y', x:34, y:92, m:'mal', b:10 }, { t:'y', x:224, y:72, m:'para', b:9 }, { t:'y', x:206, y:124, m:'fikir', b:10 } ] },
  poverty: { boy: 134, alt: 'Bazı araştırmalar yoksulluk içinde büyüyen çocukların ortaöğretimi tamamlama olasılığının daha düşük olduğunu gösteriyor.', o: [
    { t:'r', x:22, y:74, w:48, h:36, f:'#C9B79A' }, { t:'p', d:'M16 76 L46 56 L76 76 Z', f:'#8E939C' }, { t:'r', x:40, y:90, w:12, h:20, f:'agac' }, { t:'r', x:26, y:80, w:10, h:8, f:'#B8A280' }, { t:'r', x:56, y:94, w:10, h:8, f:'#B8A280' },
    kis(100, 120, .7, 'gri', 'asagi', 'uzgun'),
    { t:'r', x:150, y:50, w:70, h:56, f:'sari' }, { t:'p', d:'M146 50 L185 30 L224 50 Z', f:'kirmizi' }, { t:'y', x:185, y:84, m:'lise', b:11 },
    { t:'l', d:'M114 96 Q130 80 146 84', w:1.4, k:'gri', kesik:true }, { t:'l', d:'M126 80 l8 8 M134 80 l-8 8', w:1.8, k:'kirmizi' },
    ...kutu(46, 30, 60, 'yoksulluk', 10) ] },

  // ---- genel ----
  mishap: { boy: 134, alt: 'Bagajla ilgili küçük bir aksilik dışında okul gezisi sorunsuz geçti.', o: [
    { t:'r', x:0, y:112, w:240, h:22, f:'yol' },
    { t:'r', x:30, y:66, w:110, h:40, rx:6, f:'sari' }, ...[0, 1, 2, 3].map(i => ({ t:'r', x:40 + i * 24, y:72, w:18, h:12, rx:2, f:'buz' })), { t:'c', x:50, y:108, r:6, f:'#4B4B52' }, { t:'c', x:122, y:108, r:6, f:'#4B4B52' },
    { t:'r', x:160, y:84, w:30, h:22, rx:3, f:'turuncu' }, { t:'p', d:'M170 84 L186 70 L196 82 L182 92 Z', f:'pembe' },
    ...[[198, 104], [210, 98], [204, 110]].map(([x, y]) => ({ t:'r', x, y, w:8, h:5, rx:1, f:'#FFFFFF' })),
    ...kutu(180, 40, 80, 'küçük aksilik', 10), { t:'y', x:80, y:50, m:'gezi ✓', b:11 } ] },
  myth: { boy: 134, alt: 'Beynimizin yalnızca yüzde onunu kullandığımız bir efsanedir; görüntüleme çalışmaları neredeyse her bölgenin bir an etkin olduğunu gösterir.', o: [
    { t:'p', d:'M40 80 Q24 80 24 64 Q22 40 50 32 Q74 22 100 30 Q124 32 130 54 Q138 76 116 84 Q100 94 76 88 Q56 94 40 80 Z', f:'#FFC3CF' },
    { t:'p', d:'M24 64 Q22 40 50 32 L50 80 Q36 82 24 64 Z', f:'sari' }, { t:'y', x:40, y:110, m:'%10?', b:12 }, { t:'l', d:'M22 100 L60 118', w:2, k:'kirmizi' },
    okt(140, 60, 16),
    { t:'p', d:'M176 80 Q162 80 162 66 Q160 46 184 38 Q204 30 222 38 Q236 44 232 66 Q228 82 210 84 Q194 90 176 80 Z', f:'sari' },
    { t:'l', d:'M44 52 q8 8 0 16 M70 40 q10 10 0 22 M100 46 q-8 10 4 20 M186 50 q8 8 0 16 M206 44 q8 10 0 20', w:1.4, k:'#E89AAE' },
    { t:'y', x:198, y:110, m:'hepsi çalışır', b:10 }, ...kutu(120, 18, 50, 'efsane', 11) ] },
  pitfall: { boy: 134, alt: 'Anket okurken sık düşülen bir tuzak, yanıt verenlerin herkesi temsil ettiğini sanmaktır.', o: [
    { t:'r', x:0, y:90, w:240, h:44, f:'#C9E7A8' }, { t:'e', x:140, y:94, rx:34, ry:8, f:'#5B4A3A' }, { t:'l', d:'M110 94 l60 0', w:1, k:'#8B6A3A', kesik:true },
    kis(80, 90, .9, 'su', 'ileri', 'mutlu'), { t:'r', x:92, y:62, w:22, h:16, rx:2, f:'#FFFFFF' },
    ...kutu(140, 120, 50, 'tuzak', 11), ...balon(70, 30, 104, '“herkes böyle”', 10) ] },
  posterity: { boy: 134, alt: 'Yaşlı konuşurların kayıtları lehçe gelecek kuşaklara kalsın diye arşivlendi.', o: [
    kis(40, 120, 1, 'gri', 'bas'), { t:'r', x:58, y:76, w:10, h:18, rx:4, f:'#4B4B52' },
    { t:'r', x:80, y:60, w:40, h:30, rx:4, f:'#FFFFFF' }, { t:'c', x:92, y:75, r:6, f:'gri' }, { t:'c', x:108, y:75, r:6, f:'gri' },
    { t:'l', d:'M124 75 L150 75 M144 70 L151 75 L144 80', w:1.6, k:'vurgu' },
    kis(180, 120, .6, 'sari'), kis(206, 120, .6, 'pembe'),
    ...kutu(176, 50, 92, 'gelecek kuşaklar', 9), { t:'y', x:100, y:110, m:'kayıt', b:10 } ] },
  proficiency: { boy: 134, alt: 'Başvuranlar yüksek lisansa kaydolmadan önce İngilizce yeterliliklerini kanıtlamalı.', o: [
    { t:'r', x:20, y:20, w:100, h:90, rx:4, f:'#FFFFFF' }, { t:'y', x:70, y:40, m:'İngilizce', b:11 }, { t:'y', x:70, y:72, m:'85/100', b:16 }, { t:'c', x:104, y:96, r:10, f:'yesil' }, { t:'y', x:104, y:101, m:'✓', b:11 },
    okt(128, 66, 24),
    { t:'r', x:166, y:50, w:64, h:56, f:'#F3E6C8' }, { t:'p', d:'M162 50 L198 30 L234 50 Z', f:'su' }, { t:'y', x:198, y:84, m:'yüksek lisans', b:8 },
    ...kutu(70, 124, 66, 'yeterlilik', 10) ] },
  regime: { boy: 134, alt: 'On iki hafta egzersiz programını uygulayan hastalar uygulamayanlardan daha az ağrı bildirdi.', o: [
    { t:'r', x:20, y:16, w:110, h:104, rx:4, f:'#FFFFFF' }, { t:'y', x:75, y:34, m:'egzersiz programı', b:9 },
    ...Array.from({ length: 12 }, (_, i) => ({ t:'r', x:30 + (i % 4) * 24, y:44 + Math.floor(i / 4) * 24, w:18, h:18, rx:3, f:'#E3F9D8' })),
    ...Array.from({ length: 12 }, (_, i) => ({ t:'y', x:39 + (i % 4) * 24, y:58 + Math.floor(i / 4) * 24, m:'✓', b:10 })),
    kis(190, 120, 1.1, 'su', 'yukari', 'mutlu'), ...kutu(190, 34, 66, 'daha az ağrı', 9) ] },
  scenario: { boy: 134, alt: 'Planlamacılar iki köprünün aynı anda kapandığı en kötü senaryoya hazırlandı.', o: [
    { t:'r', x:0, y:80, w:240, h:54, f:'su' },
    ...[[30, 'A'], [140, 'B']].flatMap(([x, m]) => [{ t:'r', x, y:70, w:70, h:10, f:'gri' }, { t:'l', d:`M${x + 10} 80 L${x + 10} 100 M${x + 60} 80 L${x + 60} 100`, w:3, k:'gri' },
      { t:'l', d:`M${x + 20} 56 L${x + 50} 86 M${x + 50} 56 L${x + 20} 86`, w:3, k:'kirmizi' }, { t:'y', x:x + 35, y:116, m:`köprü ${m}`, b:10 }]),
    ...kutu(120, 28, 102, 'en kötü senaryo', 10) ] },
  segment: { boy: 134, alt: 'Yaşlılar birçok ülkede nüfusun en hızlı büyüyen kesimlerinden biri.', o: [
    { t:'c', x:70, y:70, r:46, f:'su' }, { t:'p', d:'M70 70 L70 24 A46 46 0 0 1 114 60 Z', f:'turuncu' },
    { t:'l', d:'M122 46 L150 40', w:1.4, kesik:true }, kis(176, 64, .6, 'gri'), { t:'l', d:'M182 50 L186 64', w:1.6, k:'agac' },
    { t:'l', d:'M206 60 L206 30 M200 36 l6 -6 l6 6', w:2, k:'vurgu' },
    ...kutu(176, 98, 76, 'yaşlılar', 11), { t:'y', x:70, y:128, m:'nüfus', b:10 } ] },
  solidarity: { boy: 134, alt: 'Depremden sonra daha önce pek konuşmayan komşular arasında güçlü bir dayanışma doğdu.', o: [
    { t:'r', x:0, y:110, w:240, h:24, f:'#E3D7B8' },
    ...[50, 90, 130, 170].map((x, i) => kis(x, 110, .9, ['kirmizi', 'su', 'yesil', 'pembe'][i], 'yukari', 'mutlu')),
    { t:'l', d:'M58 82 L82 82 M98 82 L122 82 M138 82 L162 82', w:2.4, k:'ten' },
    { t:'r', x:190, y:84, w:30, h:26, rx:3, f:'kraft' }, ...kutu(110, 30, 82, 'dayanışma', 11) ] },
  sovereignty: { boy: 134, alt: 'Küçük ıssız adalar üzerindeki rakip egemenlik iddiaları komşu devletler arasındaki ilişkileri gerebilir.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#7FC4E8' },
    { t:'e', x:120, y:84, rx:30, ry:10, f:'#E8D9A0' }, { t:'c', x:120, y:74, r:4, f:'#4E9E34' },
    { t:'l', d:'M106 74 L106 50 M134 74 L134 50', w:1.6 }, { t:'p', d:'M106 50 L90 54 L106 58 Z', f:'kirmizi' }, { t:'p', d:'M134 50 L150 54 L134 58 Z', f:'yesil' },
    { t:'p', d:'M4 6 L50 6 Q40 60 50 128 L4 128 Z', f:'#C9E7A8' }, { t:'p', d:'M236 6 L190 6 Q200 60 190 128 L236 128 Z', f:'#FFE6C9' },
    { t:'y', x:120, y:30, m:'kimin?', b:13 } ] },
  precursor: { boy: 134, alt: 'Küçük sarsıntılar bazen büyük bir depremin habercisidir, ama çoğunun ardından büyük deprem gelmez.', o: [
    { t:'r', x:10, y:40, w:220, h:56, rx:4, f:'#FFFFFF' },
    { t:'l', d:'M16 68 L60 68 l3 -4 l3 8 l3 -4 L100 68 l3 -6 l3 10 l3 -4 L136 68 L144 40 L150 96 L156 46 L162 88 L168 56 L174 76 L180 68 L224 68', w:1.6, k:'kirmizi' },
    ...kutu(84, 116, 90, 'küçük sarsıntı', 10), ...kutu(170, 22, 80, 'büyük deprem?', 9) ] },
  prerequisite: { boy: 134, alt: 'İleri araştırma yöntemleri dersi için temel istatistik ön koşuldur.', o: [
    ...kitap(30, 50, 'su', 'İSTAT. 1'), { t:'c', x:50, y:116, r:9, f:'yesil' }, { t:'y', x:50, y:120, m:'✓', b:10 },
    okt(84, 76, 40),
    ...kitap(140, 50, 'kirmizi', 'İLERİ'), { t:'r', x:186, y:66, w:22, h:18, rx:3, f:'gri' }, { t:'p', d:'M190 66 Q197 54 204 66', f:'yok' }, { t:'l', d:'M190 66 Q197 54 204 66', w:2 },
    ...kutu(120, 26, 76, 'ön koşul', 11) ] },
  principle: { boy: 134, alt: 'Plan en çok kirletenin en çok ödemesi ilkesine dayanıyor.', o: [
    { t:'r', x:20, y:60, w:44, h:50, f:'gri' }, { t:'r', x:46, y:30, w:10, h:30, f:'#8E939C' }, ...[[54, 22, 8], [64, 14, 10]].map(([x, y, r]) => ({ t:'c', x, y, r, f:'#8E939C' })),
    { t:'r', x:100, y:76, w:28, h:34, f:'#D7DBE2' }, { t:'c', x:116, y:66, r:5, f:'#C9CED6' },
    { t:'p', d:'M150 50 L170 50 L170 70 L150 70 Z', f:'#E8C15A' }, { t:'p', d:'M150 84 L162 84 L162 96 L150 96 Z', f:'#E8C15A' },
    { t:'y', x:200, y:64, m:'₺₺₺', b:11 }, { t:'y', x:196, y:94, m:'₺', b:11 }, { t:'l', d:'M68 64 L146 60 M132 90 L146 90', w:1.2, kesik:true },
    ...kutu(120, 124, 116, 'kirleten öder', 10) ] },
  duration: { boy: 134, alt: 'Katılımcılardan çalışma süresince kafeinden uzak durmaları istendi.', o: [
    { t:'l', d:'M30 70 L210 70', w:4, k:'su' }, { t:'l', d:'M30 60 L30 80 M210 60 L210 80', w:2 }, { t:'y', x:30, y:96, m:'başla', b:10 }, { t:'y', x:210, y:96, m:'bitir', b:10 },
    { t:'p', d:'M100 30 L124 30 L122 50 L102 50 Z', f:'#FFFFFF' }, { t:'l', d:'M124 34 q8 0 8 6 q0 6 -8 6', w:1.6 }, { t:'l', d:'M96 24 L130 56 M130 24 L96 56', w:2.4, k:'kirmizi' },
    ...kutu(120, 116, 86, 'süre boyunca', 10) ] },
  frontier: { boy: 134, alt: 'Derin okyanus Dünya’da keşfedilmeyi bekleyen son sınırlardan biri olarak anılır.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#1F2A5A' }, { t:'r', x:4, y:6, w:232, h:24, f:'#5FB0DD' },
    { t:'e', x:120, y:70, rx:26, ry:14, f:'sari' }, { t:'c', x:112, y:68, r:6, f:'buz' }, { t:'l', d:'M146 70 L160 70', w:2 },
    { t:'p', d:'M134 74 L220 50 L220 100 Z', f:'#3A4A7A' },
    ...[[200, 70], [184, 90]].map(([x, y]) => ({ t:'c', x, y, r:3, f:'#9FE07A' })),
    ...kutu(64, 110, 84, 'son sınır', 11), { t:'y', x:200, y:122, m:'?', b:16 } ] },
  landmark: { boy: 134, alt: 'Antibiyotiklerin bulunuşu tıp tarihinde bir dönüm noktasıydı.', o: [
    { t:'l', d:'M14 90 L226 90', w:2 }, ...[40, 90, 140, 190].map(x => ({ t:'l', d:`M${x} 84 l0 12`, w:1.4 })),
    { t:'y', x:40, y:110, m:'1800', b:10 }, { t:'y', x:90, y:110, m:'1900', b:10 }, { t:'y', x:140, y:110, m:'1928', b:10 }, { t:'y', x:190, y:110, m:'bugün', b:10 },
    { t:'l', d:'M140 84 L140 50', w:1.6 }, { t:'p', d:'M140 50 L158 54 L140 58 Z', f:'kirmizi' },
    { t:'e', x:196, y:46, rx:22, ry:9, f:'#E3F7FF' }, { t:'e', x:196, y:44, rx:18, ry:6, f:'#F6EBC8' }, ...[[188, 44], [200, 42], [204, 46]].map(([x, y]) => ({ t:'c', x, y, r:2.4, f:'#9FE07A' })), { t:'l', d:'M176 54 L146 58', w:1.2, kesik:true }, { t:'y', x:196, y:70, m:'antibiyotik', b:9 },
    ...kutu(66, 40, 82, 'dönüm noktası', 9) ] },
  fraction: { boy: 134, alt: 'Çevrim içi dersler geleneksel sınıf eğitiminin maliyetinin küçük bir kesrine verilebilir.', o: [
    ...iki(),
    { t:'r', x:20, y:50, w:78, h:50, f:'sari' }, { t:'p', d:'M16 50 L59 32 L102 50 Z', f:'kirmizi' },
    { t:'r', x:146, y:52, w:70, h:44, rx:3, f:'#2A2550' }, { t:'r', x:150, y:56, w:62, h:32, f:'buz' }, { t:'p', d:'M140 96 L222 96 L216 104 L146 104 Z', f:'gri' },
    { t:'y', x:59, y:28, m:'sınıf: ₺₺₺₺', b:11 }, { t:'y', x:181, y:28, m:'çevrim içi: ₺', b:11 } ] },
  likelihood: { boy: 134, alt: 'Düzenli egzersiz kalp hastalığı olasılığını azaltıyor gibi görünüyor.', o: [
    kis(50, 120, 1.1, 'turuncu', 'yukari', 'mutlu'), { t:'l', d:'M30 120 l-10 0 M28 112 l-12 0', w:1.4, k:'gri' },
    { t:'p', d:'M150 66 C130 52 112 70 130 88 L150 108 L170 88 C188 70 170 52 150 66 Z', f:'kirmizi' },
    { t:'r', x:196, y:40, w:12, h:60, rx:6, f:'#FFFFFF' }, { t:'r', x:198, y:80, w:8, h:20, f:'yesil' }, { t:'l', d:'M216 50 L216 90 M212 84 l4 6 l4 -6', w:1.8, k:'vurgu' },
    { t:'y', x:200, y:120, m:'risk ↓', b:11 }, ...kutu(76, 30, 70, 'egzersiz', 11) ] },
  oversight: { boy: 134, alt: 'Bir dikkatsizlik yüzünden son bölüm basılı rapordan çıkarılmıştı.', o: [
    { t:'r', x:40, y:20, w:120, h:100, rx:3, f:'#FFFFFF' }, { t:'y', x:100, y:38, m:'İÇİNDEKİLER', b:9 },
    ...['1. Giriş ✓', '2. Yöntem ✓', '3. Bulgular ✓', '4. Sonuç'].map((m, i) => ({ t:'y', x:100, y:60 + i * 16, m, b:10 })),
    { t:'c', x:180, y:104, r:12, f:'kirmizi' }, { t:'y', x:180, y:109, m:'?', b:13 }, { t:'l', d:'M146 104 L168 104', w:1.4, k:'kirmizi', kesik:true },
    ...kutu(196, 40, 60, 'eksik!', 11) ] },
  privilege: { boy: 134, alt: 'Yüzyıllar boyunca üniversite eğitimi küçük bir azınlığın ayrıcalığıydı.', o: [
    { t:'r', x:140, y:40, w:90, h:66, f:'#F3E6C8' }, { t:'p', d:'M134 40 L185 18 L236 40 Z', f:'su' }, { t:'l', d:'M156 46 L156 106 M178 46 L178 106 M200 46 L200 106', w:2, k:'gri' },
    kis(120, 112, .8, 'koyu'), tac(120, 76, 'sari'),
    ...[20, 40, 60, 80].map(x => kis(x, 120, .6, 'gri', 'asagi', 'uzgun')), { t:'l', d:'M100 116 L100 84', w:3, k:'kirmizi' },
    ...kutu(52, 30, 80, 'ayrıcalık', 11) ] },
  upheaval: { boy: 134, alt: 'Yeni bir ülkeye taşınmak çocukların hayatında büyük bir altüst oluşa yol açtı.', o: [
    { t:'r', x:0, y:110, w:240, h:24, f:'#E3EEF0' },
    ...[[20, 86], [44, 86], [32, 64], [190, 86], [212, 80]].map(([x, y]) => ({ t:'r', x, y, w:22, h:22, rx:2, f:'kraft' })), { t:'p', d:'M184 64 L198 52 L210 66 L196 76 Z', f:'kraft' },
    kis(110, 110, .7, 'sari', 'yukari', 'sasir'), kis(140, 110, .7, 'pembe', 'asagi', 'uzgun'),
    { t:'l', d:'M90 50 q10 -10 20 0 t20 0 t20 0', w:1.6, k:'vurgu' }, ...kutu(124, 26, 86, 'altüst oluş', 10) ] },
  exception: { boy: 134, alt: 'Memelilerin çoğu canlı doğurur, ama ornitorenk dikkat çekici bir istisnadır.', o: [
    ...[[30, 'turuncu'], [70, 'gri'], [110, '#C9A06A']].flatMap(([x, f]) => [{ t:'e', x, y:96, rx:16, ry:9, f }, { t:'c', x:x + 14, y:88, r:6, f }, { t:'l', d:`M${x - 8} 104 l0 8 M${x + 8} 104 l0 8`, w:1.6 }]),
    { t:'y', x:70, y:66, m:'canlı doğurur', b:10 },
    { t:'e', x:184, y:94, rx:22, ry:10, f:'#8B5E3C' }, { t:'p', d:'M204 90 L224 86 L224 96 L204 98 Z', f:'#4B4B52' }, { t:'p', d:'M162 94 L148 88 L150 100 Z', f:'#8B5E3C' }, { t:'c', x:200, y:90, r:1.4, f:'#FFFFFF' },
    { t:'e', x:168, y:118, rx:6, ry:8, f:'#FFFFFF' }, { t:'e', x:184, y:118, rx:6, ry:8, f:'#FFFFFF' },
    ...kutu(186, 40, 76, 'yumurta!', 11), { t:'y', x:186, y:62, m:'istisna', b:11 } ] },
};
