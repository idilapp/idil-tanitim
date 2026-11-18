// Kelime kartı görselleri · 5. parti (18 Kasım 2026): 25 kart. Tarz v11; her sahne kartın kendi örnek cümlesini anlatır. Çizimler özgün.
import { ev, cim, dalga, govde, keci } from './parca.js';

const okt = (x, y, uz = 20) => ({ t:'l', d:`M${x} ${y} L${x + uz} ${y} M${x + uz - 5} ${y - 5} L${x + uz + 1} ${y} L${x + uz - 5} ${y + 5}`, w:2 });
const iki = () => [{ t:'r', x:4, y:6, w:110, h:122, rx:12, f:'beyaz' }, { t:'r', x:126, y:6, w:110, h:122, rx:12, f:'beyaz' }];
const cilek = (x, y, k = 1) => [{ t:'p', d:`M${x - 5 * k} ${y - 3 * k} Q${x} ${y + 9 * k} ${x + 5 * k} ${y - 3 * k} Z`, f:'kirmizi' }, { t:'p', d:`M${x - 4 * k} ${y - 3 * k} l${4 * k} ${-3 * k} l${4 * k} ${3 * k} Z`, f:'yesil' }];
const bisiklet = (x, y) => ({ t:'l', d:`M${x - 12} ${y} A10 10 0 1 0 ${x + 8} ${y} A10 10 0 1 0 ${x - 12} ${y} M${x + 28} ${y} A10 10 0 1 0 ${x + 48} ${y} A10 10 0 1 0 ${x + 28} ${y} M${x - 2} ${y} L${x + 12} ${y - 16} L${x + 38} ${y} M${x + 10} ${y - 16} L${x + 32} ${y - 16}`, w:1.8 });
const koyun = (x, y) => [{ t:'l', d:`M${x - 6} ${y + 5} l0 7 M${x + 5} ${y + 5} l0 7`, w:1.4 }, { t:'e', x, y, rx:10, ry:7, f:'beyaz' }, { t:'e', x:x + 11, y:y - 3, rx:4, ry:3.5, f:'gri' }];

export default {
  // ---- isimler ----
  rover: { boy: 134, alt: 'Mühendisler gezgin aracı uzaya göndermeden önce kayalık çöl zemininde deniyor.', o: [
    { t:'r', x:0, y:96, w:240, h:38, f:'#E3B07A' }, ...[[30, 110], [170, 120], [210, 104]].map(([x, y]) => ({ t:'e', x, y, rx:8, ry:5, f:'#B98A5A' })),
    { t:'r', x:88, y:70, w:56, h:20, rx:4, f:'beyaz' }, { t:'r', x:84, y:62, w:64, h:6, f:'catlak' },
    { t:'l', d:'M134 70 L134 48 M128 48 L140 48', w:1.8 }, { t:'c', x:134, y:44, r:4, f:'gri' },
    ...[96, 116, 136].map(x => ({ t:'c', x, y:96, r:7, f:'#4B2E5E' })),
    { t:'k', x:40, y:96, s:.8 }, { t:'r', x:48, y:68, w:12, h:16, rx:2, f:'kraft' },
    { t:'p', d:'M200 74 L200 40 Q206 24 212 40 L212 74 Z', f:'beyaz' }, { t:'y', x:206, y:22, m:'sonra uzay', b:10 },
    { t:'y', x:116, y:126, m:'çölde deneme', b:11 } ] },
  beak: { boy: 134, alt: 'Papağan güçlü kıvrık gagasıyla cevizi kırıyor.', o: [
    govde(20, 92, 200, 10),
    { t:'e', x:110, y:66, rx:22, ry:30, f:'#5FCB5A' }, { t:'c', x:116, y:34, r:16, f:'#5FCB5A' },
    { t:'p', d:'M128 30 Q148 30 146 46 Q140 40 132 44 Z', f:'sari' }, { t:'c', x:120, y:30, r:2.4, f:'#4B2E5E' },
    { t:'p', d:'M96 74 Q86 104 104 112 L110 96 Z', f:'kirmizi' },
    { t:'c', x:154, y:52, r:8, f:'kraft' }, { t:'l', d:'M150 48 l4 8 l4 -6', w:1.4, k:'agac' },
    { t:'y', x:190, y:40, m:'gaga', b:15 }, { t:'l', d:'M176 40 L150 38', w:1.2 } ] },
  soil: { boy: 134, alt: 'Havuç hafif, kumlu toprakta iyi büyür; yağmur suyu hızla süzülüp gider.', o: [
    { t:'l', d:'M30 10 l-3 8 M60 14 l-3 8 M90 10 l-3 8 M180 12 l-3 8 M210 10 l-3 8', w:2, k:'su' },
    { t:'r', x:0, y:40, w:240, h:94, f:'#EBCB8B' }, ...Array.from({ length: 30 }, (_, i) => ({ t:'c', x:8 + (i * 31) % 228, y:48 + (i * 17) % 80, r:1.2, f:'#C9A060' })),
    ...[60, 120, 180].flatMap(x => [{ t:'p', d:`M${x - 9} 46 L${x + 9} 46 L${x} 100 Z`, f:'turuncu' }, { t:'l', d:`M${x} 46 l-6 -14 M${x} 46 l0 -16 M${x} 46 l6 -14`, w:2, k:'yesil' }]),
    { t:'l', d:'M222 54 L222 104 M216 98 L222 105 L228 98', w:2, k:'su' }, { t:'y', x:206, y:122, m:'su süzülür', b:10 },
    { t:'y', x:60, y:122, m:'kumlu toprak', b:11 } ] },
  grain: { boy: 134, alt: 'Çiftçi tahılı kuru ve havadar bir ambarda saklıyor ki kışın küflenmesin.', o: [
    { t:'r', x:0, y:112, w:240, h:22, f:'kar' }, { t:'l', d:'M20 20 l4 0 M22 18 l0 4 M200 24 l4 0 M202 22 l0 4', w:1.4, k:'catlak' },
    { t:'r', x:50, y:50, w:140, h:62, f:'kirmizi' }, { t:'p', d:'M40 52 L120 16 L200 52 Z', f:'agac' },
    { t:'r', x:60, y:62, w:120, h:50, f:'#FFF3D6' },
    ...[[80, 'kraft'], [110, 'kraft'], [140, 'kraft']].map(([x, f]) => ({ t:'p', d:`M${x - 12} 110 Q${x - 14} 84 ${x - 6} 78 L${x + 6} 78 Q${x + 14} 84 ${x + 12} 110 Z`, f })),
    { t:'r', x:166, y:66, w:12, h:12, f:'buz' }, { t:'l', d:'M200 70 q10 -4 20 0 M200 80 q10 -4 20 0', w:1.6, k:'catlak' },
    { t:'y', x:120, y:40, m:'kuru · havadar', b:11 } ] },
  scaffolding: { boy: 134, alt: 'Öğretmen önce yardım eder, öğrenci güvendikçe geri çekilir: bisiklet tutulur, sonra bırakılır.', o: [
    ...iki(), bisiklet(44, 106), { t:'k', x:60, y:88, s:.7 }, { t:'k', x:30, y:112, s:.9, kol:'ileri' },
    { t:'y', x:58, y:28, m:'önce yardım', b:12 },
    bisiklet(166, 106), { t:'k', x:182, y:88, s:.7, kol:'yukari' }, { t:'k', x:140, y:112, s:.8 },
    { t:'l', d:'M206 70 L226 70', w:1.6, k:'gri' }, { t:'y', x:180, y:28, m:'sonra kendi başına', b:11 } ] },
  currency: { boy: 134, alt: 'Yolculuktan önce istasyondaki küçük döviz bürosunda paramızı yerel paraya çeviriyoruz.', o: [
    { t:'r', x:20, y:30, w:120, h:84, rx:4, f:'beyaz' }, { t:'r', x:20, y:30, w:120, h:18, rx:4, f:'su' }, { t:'y', x:80, y:43, m:'DÖVİZ', b:12 },
    { t:'r', x:36, y:62, w:36, h:20, rx:2, f:'#9FE3A3' }, { t:'y', x:54, y:76, m:'₺', b:14 },
    okt(76, 72, 14),
    { t:'r', x:96, y:62, w:36, h:20, rx:2, f:'#B9D7FF' }, { t:'y', x:114, y:76, m:'yerel', b:9 },
    { t:'k', x:180, y:114, s:1 }, { t:'r', x:196, y:88, w:22, h:24, rx:3, f:'turuncu' },
    { t:'r', x:160, y:20, w:60, h:20, rx:4, f:'beyaz' }, { t:'y', x:190, y:34, m:'Gar', b:12 } ] },
  barter: { boy: 134, alt: 'Okul şenliğinde çocuklar takas tezgâhında çizgi romanı çıkartma ve oyuncakla değiştiriyor.', o: [
    { t:'r', x:20, y:86, w:200, h:10, rx:2, f:'agac' }, { t:'p', d:'M14 30 L226 30 L216 44 L24 44 Z', f:'pembe' },
    { t:'k', x:50, y:126, s:.9 }, { t:'k', x:190, y:126, s:.9 },
    { t:'r', x:70, y:60, w:24, h:24, rx:2, f:'sari' }, { t:'y', x:82, y:76, m:'çizgi', b:8 },
    { t:'c', x:156, y:72, r:8, f:'kirmizi' }, { t:'p', d:'M170 64 l4 8 l8 0 l-6 6 l2 8 l-8 -4 l-8 4 l2 -8 l-6 -6 l8 0 Z', f:'sari' },
    { t:'l', d:'M100 64 Q120 52 140 64 M140 80 Q120 92 100 80', w:2 }, { t:'l', d:'M134 58 L141 64 L134 68 M106 76 L99 80 L106 86', w:2 },
    { t:'y', x:120, y:24, m:'takas', b:13 } ] },
  masterpiece: { boy: 134, alt: 'Roman ilk çıktığında çok az sattı; bugün eleştirmenler ona başyapıt diyor.', o: [
    ...iki(), { t:'r', x:36, y:52, w:44, h:56, rx:3, f:'su' }, { t:'l', d:'M44 64 L72 64 M44 72 L66 72', w:1.2, k:'beyaz' },
    { t:'r', x:84, y:96, w:10, h:12, f:'kirmizi' }, { t:'y', x:58, y:28, m:'ilk çıkış', b:12 }, { t:'y', x:58, y:122, m:'az sattı', b:11 },
    { t:'r', x:158, y:52, w:44, h:56, rx:3, f:'su' }, { t:'l', d:'M166 64 L194 64 M166 72 L188 72', w:1.2, k:'beyaz' },
    ...[150, 165, 180, 195, 210].map(x => ({ t:'p', d:`M${x} 34 l3 6 l6 1 l-4 4 l1 6 l-6 -3 l-6 3 l1 -6 l-4 -4 l6 -1 Z`, f:'sari' })),
    { t:'y', x:180, y:122, m:'bugün: başyapıt', b:11 } ] },
  headline: { boy: 134, alt: 'Tren istasyona girerken yalnız gazetenin manşetlerine göz atabiliyor.', o: [
    { t:'r', x:10, y:14, w:220, h:80, rx:12, f:'buz' }, { t:'r', x:22, y:24, w:60, h:40, rx:6, f:'#BFE7FF' }, { t:'r', x:158, y:24, w:60, h:40, rx:6, f:'#BFE7FF' },
    { t:'r', x:90, y:34, w:60, h:72, rx:2, f:'beyaz' },
    { t:'r', x:96, y:42, w:48, h:10, rx:1, f:'#4B2E5E' }, { t:'l', d:'M96 60 L144 60 M96 68 L144 68 M96 76 L130 76 M96 84 L144 84', w:1, k:'gri' },
    { t:'k', x:120, y:128, s:.8 },
    { t:'y', x:52, y:84, m:'manşet', b:12 }, { t:'l', d:'M68 82 L94 50', w:1.2 } ] },

  // ---- fiiller ----
  navigate: { boy: 134, alt: 'Eski şehrin dar sokaklarında yolu bulmak biraz zaman aldı.', o: [
    { t:'r', x:0, y:0, w:240, h:134, f:'yol' },
    ...[[10, 10, 50, 30], [70, 10, 40, 50], [130, 10, 50, 30], [196, 10, 34, 70], [10, 50, 50, 40], [130, 50, 50, 30], [70, 70, 40, 54], [10, 100, 50, 26], [130, 90, 50, 34], [196, 90, 34, 34]].map(([x, y, w, h], i) => ({ t:'r', x, y, w, h, rx:3, f:['#FFD9B8', '#FFE7A8', '#E3F2FF', '#F0E6FF'][i % 4] })),
    { t:'k', x:20, y:48, s:.5 },
    { t:'l', d:'M30 44 L64 44 L64 64 L120 64 L120 86 L188 86 L188 38', w:2, k:'vurgu', kesik:true },
    { t:'l', d:'M188 38 L188 22 L200 26 L188 30', w:1.6 } ] },
  absorb: { boy: 134, alt: 'Siyah tişört güneşi emer ve ısınır; beyaz tişört ışığı geri yansıtır.', o: [
    { t:'c', x:120, y:20, r:14, f:'sari' },
    { t:'l', d:'M110 32 L70 62 M130 32 L170 62', w:2, k:'turuncu' },
    { t:'p', d:'M46 64 L58 60 Q64 64 70 60 L82 64 L92 76 L84 80 L82 74 L82 112 L46 112 L46 74 L44 80 L36 76 Z', f:'#3D3D46' },
    { t:'p', d:'M158 64 L170 60 Q176 64 182 60 L194 64 L204 76 L196 80 L194 74 L194 112 L158 112 L158 74 L156 80 L148 76 Z', f:'beyaz' },
    { t:'l', d:'M176 58 L206 34', w:2, k:'turuncu' }, { t:'l', d:'M199 34 L207 33 L205 41', w:2, k:'turuncu' },
    { t:'y', x:64, y:128, m:'emer · sıcak', b:11 }, { t:'y', x:176, y:128, m:'yansıtır · serin', b:11 } ] },
  accumulate: { boy: 134, alt: 'Ev boşken raflarda kalın bir toz tabakası birikmiş.', o: [
    { t:'r', x:20, y:50, w:150, h:8, f:'agac' }, { t:'r', x:20, y:96, w:150, h:8, f:'agac' },
    { t:'r', x:20, y:44, w:150, h:6, rx:2, f:'#C9C2B6' }, { t:'r', x:20, y:90, w:150, h:6, rx:2, f:'#C9C2B6' },
    { t:'r', x:36, y:20, w:16, h:24, rx:2, f:'su' }, { t:'r', x:62, y:26, w:24, h:18, rx:2, f:'pembe' }, { t:'r', x:110, y:68, w:20, h:22, rx:2, f:'sari' },
    ...[[44, 18], [74, 24], [120, 66], [100, 42], [150, 88]].map(([x, y]) => ({ t:'c', x, y, r:1.6, f:'#B9AE9C' })),
    { t:'r', x:184, y:30, w:48, h:52, rx:4, f:'beyaz' }, { t:'r', x:184, y:30, w:48, h:12, rx:4, f:'pembe' },
    { t:'l', d:'M190 50 l8 8 M198 50 l-8 8 M206 50 l8 8 M214 50 l-8 8 M190 64 l8 8 M198 64 l-8 8', w:1.2 },
    { t:'y', x:95, y:124, m:'toz birikti', b:13 } ] },
  filter: { boy: 134, alt: 'Çatıdan gelen yağmur suyu depoya gitmeden önce bir kum tabakasından süzülüyor.', o: [
    { t:'p', d:'M10 40 L50 16 L90 40 Z', f:'kirmizi' }, { t:'l', d:'M30 8 l-2 6 M50 4 l-2 6 M70 8 l-2 6', w:2, k:'su' },
    { t:'l', d:'M90 40 L110 40 L110 54', w:4, k:'gri' },
    { t:'r', x:96, y:56, w:40, h:56, rx:3, f:'beyaz' }, { t:'r', x:98, y:58, w:36, h:12, f:'#B98A5A' }, { t:'r', x:98, y:70, w:36, h:26, f:'#EBCB8B' },
    { t:'y', x:116, y:88, m:'kum', b:11 }, { t:'y', x:116, y:68, m:'kirli', b:9 },
    { t:'l', d:'M136 104 L160 104', w:4, k:'gri' },
    { t:'r', x:162, y:70, w:60, h:50, rx:8, f:'su' }, { t:'y', x:192, y:100, m:'temiz su', b:11 } ] },
  ignite: { boy: 134, alt: 'Kurak yazda tek bir kıvılcım kuru otları tutuşturabiliyor.', o: [
    { t:'c', x:200, y:24, r:12, f:'sari' },
    { t:'r', x:0, y:104, w:240, h:30, f:'#D9B56A' },
    ...Array.from({ length: 18 }, (_, i) => 10 + i * 13).map(x => ({ t:'l', d:`M${x} 104 l-3 -12 M${x} 104 l3 -10`, w:1.4, k:'#B88A3A' })),
    { t:'p', d:'M40 70 l4 10 l10 -2 l-6 8 l8 6 l-10 0 l-2 10 l-4 -10 l-10 2 l6 -8 l-8 -6 l10 0 Z', f:'sari' }, { t:'y', x:44, y:56, m:'kıvılcım', b:11 },
    okt(70, 84, 26),
    { t:'p', d:'M120 104 Q120 76 136 70 Q132 84 144 86 Q148 64 164 56 Q160 80 174 82 Q180 72 186 76 Q192 92 182 104 Z', f:'turuncu' },
    { t:'p', d:'M140 104 Q140 90 150 86 Q150 96 160 96 Q164 86 170 88 Q174 98 166 104 Z', f:'sari' },
    { t:'y', x:150, y:128, m:'tutuştu', b:12 } ] },
  excavate: { boy: 134, alt: 'Ekip üç yaz boyunca kazı yapıp antik limanı topraktan çıkarıyor.', o: [
    ...[0, 1, 2].map(i => ({ t:'c', x:20 + i * 22, y:18, r:8, f:'sari' })), { t:'y', x:42, y:42, m:'3 yaz', b:11 },
    { t:'r', x:0, y:60, w:240, h:74, f:'#C99A6A' }, { t:'r', x:40, y:80, w:160, h:44, rx:4, f:'#B07A4E' },
    ...[[60, 112], [84, 112], [108, 112], [132, 112], [156, 112], [180, 112]].map(([x, y]) => ({ t:'r', x:x - 10, y:y - 8, w:20, h:10, rx:1, f:'gri' })),
    { t:'p', d:'M118 98 Q110 86 116 78 L124 78 Q130 86 122 98 Z', f:'#D98E73' }, { t:'l', d:'M114 82 q-4 2 -2 6 M126 82 q4 2 2 6', w:1.2 },
    { t:'k', x:70, y:60, s:.8 }, { t:'k', x:180, y:60, s:.8, kol:'ileri' },
    { t:'y', x:160, y:30, m:'antik liman', b:12 } ] },
  imitate: { boy: 134, alt: 'Küçük kız, dedesinin konuşmadan önce boğazını temizleyişini taklit ediyor.', o: [
    { t:'k', x:60, y:124, s:1.25, f:'gri' }, { t:'r', x:50, y:60, w:20, h:5, rx:2, f:'beyaz' },
    { t:'r', x:20, y:14, w:80, h:28, rx:10, f:'beyaz' }, { t:'y', x:60, y:33, m:'öhöm!', b:14 },
    { t:'k', x:176, y:124, s:.85, f:'pembe' },
    { t:'r', x:136, y:44, w:80, h:28, rx:10, f:'beyaz' }, { t:'y', x:176, y:63, m:'öhöm!', b:14 },
    { t:'y', x:118, y:96, m:'=', b:22 } ] },
  commute: { boy: 134, alt: 'Ablası haftada üç gün trenle Ankara’ya gidip geliyor, öteki günler evden çalışıyor.', o: [
    ...ev(14, 54, 'pembe'), { t:'y', x:26, y:84, m:'ev', b:11 },
    ...[[176, 30, 16], [194, 20, 16], [212, 36, 14]].map(([x, y, w]) => ({ t:'r', x, y, w, h:56 - y, rx:1, f:'buz' })), { t:'y', x:200, y:84, m:'Ankara', b:11 },
    { t:'l', d:'M44 70 L176 70', w:2 }, { t:'l', d:'M44 74 L176 74', w:2 },
    { t:'r', x:92, y:56, w:44, h:14, rx:5, f:'kirmizi' }, { t:'r', x:96, y:59, w:8, h:6, f:'buz' }, { t:'r', x:108, y:59, w:8, h:6, f:'buz' }, { t:'r', x:120, y:59, w:8, h:6, f:'buz' },
    ...['Pt', 'Sa', 'Ça', 'Pe', 'Cu'].flatMap((g, i) => [{ t:'r', x:24 + i * 40, y:96, w:32, h:30, rx:4, f:'beyaz' }, { t:'y', x:40 + i * 40, y:108, m:g, b:9 }, { t:'y', x:40 + i * 40, y:122, m:[0, 2, 4].includes(i) ? 'tren' : 'ev', b:9 }]) ] },
  relocate: { boy: 134, alt: 'Nehir taşınca aile tepedeki kuzenin dairesine taşınıyor.', o: [
    { t:'r', x:0, y:96, w:120, h:38, f:'su' }, dalga(106, 0, 120),
    ...ev(30, 76, 'beyaz'), { t:'y', x:42, y:60, m:'sel', b:12 },
    { t:'p', d:'M120 134 L120 100 Q170 40 240 50 L240 134 Z', f:'yesil' },
    { t:'r', x:190, y:24, w:34, h:30, rx:2, f:'pembe' }, { t:'r', x:196, y:30, w:8, h:8, f:'buz' }, { t:'r', x:210, y:30, w:8, h:8, f:'buz' },
    { t:'k', x:140, y:96, s:.8 }, { t:'k', x:162, y:84, s:.65 }, { t:'r', x:146, y:70, w:14, h:10, rx:1, f:'kraft' },
    { t:'l', d:'M100 70 Q140 40 180 40', w:1.6, kesik:true }, { t:'l', d:'M174 35 L181 40 L174 45', w:1.6 },
    { t:'y', x:206, y:70, m:'tepe', b:11 } ] },

  // ---- sıfatlar ----
  wild: { boy: 134, alt: 'Yaban çileği dükkândakinden çok daha küçük ama daha tatlı.', o: [
    ...iki(), ...cilek(46, 70, 1), ...cilek(62, 80, 1), ...cilek(74, 68, 1), { t:'y', x:58, y:28, m:'yaban', b:13 }, { t:'y', x:58, y:116, m:'küçük ama tatlı', b:10 },
    ...cilek(180, 74, 3.4), { t:'y', x:180, y:28, m:'dükkân', b:13 }, { t:'y', x:180, y:116, m:'iri', b:11 } ] },
  cautious: { boy: 134, alt: 'Doktorlar uyku hapını uzun süre yazmakta temkinli davranıyor.', o: [
    { t:'k', x:64, y:124, s:1.25, f:'beyaz' },
    { t:'r', x:96, y:58, w:30, h:40, rx:5, f:'#FFE08A' }, { t:'r', x:98, y:50, w:26, h:10, rx:3, f:'beyaz' }, { t:'y', x:111, y:84, m:'zZ', b:11 },
    { t:'l', d:'M84 76 L96 76', w:1.6 },
    { t:'r', x:150, y:30, w:76, h:60, rx:6, f:'beyaz' }, { t:'r', x:150, y:30, w:76, h:14, rx:6, f:'pembe' },
    { t:'l', d:'M160 54 L216 54 M160 64 L216 64 M160 74 L216 74', w:1, k:'gri' },
    { t:'p', d:'M188 92 L200 112 L176 112 Z', f:'sari' }, { t:'y', x:188, y:110, m:'!', b:11 },
    { t:'y', x:64, y:40, m:'temkinli', b:13 } ] },
  numb: { boy: 134, alt: 'Karda bir saat kalınca parmaklar öyle uyuşuyor ki düğmeler iliklenemiyor.', o: [
    { t:'r', x:0, y:110, w:240, h:24, f:'kar' },
    ...[[20, 20], [60, 40], [200, 30], [220, 70], [36, 80]].map(([x, y]) => ({ t:'l', d:`M${x - 4} ${y} l8 0 M${x} ${y - 4} l0 8 M${x - 3} ${y - 3} l6 6 M${x + 3} ${y - 3} l-6 6`, w:1.2, k:'catlak' })),
    { t:'p', d:'M104 30 L120 40 L136 30 L156 38 L170 70 L158 76 L150 58 L152 112 L88 112 L90 58 L82 76 L70 70 L84 38 Z', f:'kirmizi' }, { t:'l', d:'M120 40 L120 112 M104 30 L112 48 M136 30 L128 48', w:1.4 },
    ...[52, 72, 92].map(y => ({ t:'c', x:120, y, r:3, f:'beyaz' })),
    { t:'p', d:'M150 80 q12 -4 16 6 l2 12 l-4 0 l-2 -8 l-2 10 l-4 0 l0 -10 l-2 10 l-4 0 Z', f:'#B9DCF2' },
    { t:'y', x:192, y:120, m:'uyuşmuş', b:13 }, { t:'y', x:120, y:24, m:'iliklenmiyor', b:11 } ] },
  compact: { boy: 134, alt: 'Küçük mutfak için tezgâhın altına sığan kompakt bir çamaşır makinesi.', o: [
    { t:'r', x:0, y:116, w:240, h:18, f:'kraft' },
    { t:'r', x:30, y:58, w:180, h:10, rx:2, f:'agac' }, { t:'r', x:30, y:68, w:44, h:48, rx:2, f:'beyaz' }, { t:'r', x:166, y:68, w:44, h:48, rx:2, f:'beyaz' },
    { t:'r', x:84, y:72, w:72, h:44, rx:6, f:'beyaz' }, { t:'c', x:120, y:96, r:14, f:'buz' }, { t:'c', x:120, y:96, r:8, f:'su' },
    { t:'l', d:'M84 66 L156 66', w:1.4, k:'vurgu' }, { t:'l', d:'M84 62 L84 70 M156 62 L156 70', w:1.4, k:'vurgu' },
    { t:'c', x:200, y:40, r:12, f:'yesil' }, { t:'y', x:200, y:45, m:'✓', b:13 },
    { t:'y', x:110, y:40, m:'tam sığar', b:13 } ] },
  scarce: { boy: 134, alt: 'Uzun ve zor kışta köyde yiyecek kıttı: kiler neredeyse boş.', o: [
    { t:'r', x:150, y:20, w:76, h:60, rx:4, f:'#CFE8F3' }, { t:'l', d:'M188 20 L188 80 M150 50 L226 50', w:1.4 },
    ...[[164, 34], [204, 64], [174, 70]].map(([x, y]) => ({ t:'l', d:`M${x - 3} ${y} l6 0 M${x} ${y - 3} l0 6`, w:1.2, k:'beyaz' })),
    { t:'r', x:20, y:20, w:110, h:104, rx:4, f:'kraft' },
    ...[48, 80, 112].map(y => ({ t:'r', x:20, y, w:110, h:5, f:'agac' })),
    { t:'p', d:'M60 46 Q60 34 74 34 Q88 34 88 46 Z', f:'#E0A860' },
    { t:'y', x:75, y:70, m:'boş', b:11 }, { t:'y', x:75, y:102, m:'boş', b:11 },
    { t:'y', x:188, y:104, m:'kıt', b:16 } ] },
  ancient: { boy: 134, alt: 'Köy meydanındaki yaşlı zeytin ağacı çevresindeki bütün evlerden daha eski.', o: [
    { t:'r', x:0, y:112, w:240, h:22, f:'tas' },
    { t:'p', d:'M104 112 Q96 90 108 76 Q100 64 112 54 L128 54 Q140 64 132 76 Q144 90 136 112 Z', f:'#8B6A4A' },
    { t:'e', x:120, y:40, rx:58, ry:26, f:'#9FBF7A' }, { t:'e', x:92, y:34, rx:26, ry:14, f:'#B6D18E' }, { t:'e', x:150, y:30, rx:24, ry:12, f:'#B6D18E' },
    ...ev(14, 94, 'beyaz'), ...ev(202, 94, 'beyaz'),
    { t:'y', x:120, y:128, m:'evlerden eski', b:11 } ] },
  nomadic: { boy: 134, alt: 'Göçebe çobanlar her yaz koyunlarını dağdaki yaylaya çıkarıyor.', o: [
    { t:'p', d:'M100 70 L170 14 L240 60 L240 134 L0 134 L0 100 Z', f:'yesil' }, { t:'p', d:'M150 30 L170 14 L188 26 L176 30 L166 26 Z', f:'kar' },
    { t:'p', d:'M196 58 L214 40 L232 58 Z', f:'kraft' }, { t:'y', x:212, y:76, m:'yayla', b:11 },
    { t:'l', d:'M20 120 Q90 108 150 76 Q176 62 196 60', w:1.6, kesik:true },
    ...koyun(60, 112), ...koyun(84, 104), ...koyun(108, 96),
    { t:'k', x:36, y:124, s:.85 }, { t:'l', d:'M46 100 L50 124', w:2, k:'agac' },
    { t:'y', x:60, y:40, m:'her yaz', b:13 } ] },
};
