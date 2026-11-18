// Kelime kartı görselleri · 17. parti (18 Kasım 2026): 50 kart. Tarz v11; her sahne kartın kendi örnek cümlesini anlatır.
// Çizimler özgün.
import { ev, dalga, okt, balon, iki, kutu, balik, keci } from './parca.js';

const kis = (x, y, s, f, kol, yuz) => ({ t:'k', x, y, s, f, kol, yuz });
const eksen = (x0, y0, x1, y1) => ({ t:'l', d:`M${x0} ${y1} L${x0} ${y0} L${x1} ${y0}`, w:1.8 });
const tac = (x, y, f = 'sari') => ({ t:'p', d:`M${x - 9} ${y} L${x - 9} ${y - 10} L${x - 4} ${y - 5} L${x} ${y - 12} L${x + 4} ${y - 5} L${x + 9} ${y - 10} L${x + 9} ${y} Z`, f });
const sandik = (x, y) => [{ t:'r', x, y, w:40, h:34, rx:3, f:'#FFFFFF' }, { t:'r', x:x + 12, y:y - 2, w:16, h:4, f:'#4B4B52' }, { t:'r', x:x + 14, y:y - 14, w:12, h:14, f:'#FFE38A' }];
const solucan = (x, y) => ({ t:'l', d:`M${x} ${y} q4 -5 8 0 t8 0 t8 0`, w:3, k:'pembe' });
const salyangoz = (x, y) => [{ t:'p', d:`M${x - 12} ${y} L${x + 16} ${y} Q${x + 20} ${y - 6} ${x + 14} ${y - 6} L${x + 12} ${y - 2} L${x - 10} ${y - 2} Z`, f:'#C9E7A8' }, { t:'c', x:x - 2, y:y - 8, r:7, f:'#E0B07A' }, { t:'l', d:`M${x + 14} ${y - 6} l-1 -6 M${x + 17} ${y - 6} l2 -6`, w:1 }];
const ari = (x, y) => [{ t:'e', x:x - 2, y:y - 6, rx:5, ry:3, f:'buz' }, { t:'e', x:x + 4, y:y - 6, rx:5, ry:3, f:'buz' }, { t:'e', x, y, rx:9, ry:5, f:'sari' }, { t:'l', d:`M${x - 3} ${y - 4} l0 8 M${x + 2} ${y - 4} l0 8`, w:1.6, k:'#3B3446' }];

export default {
  // ---- tıp ----
  artery: { boy: 134, alt: 'Cerrah, tıkalı atardamarın çevresinden kanı dolaştırmak için hastanın bacağından alınan bir toplardamarı kullandı.', o: [
    { t:'l', d:'M20 70 L220 70', w:16, k:'#FF8A8A' }, { t:'l', d:'M20 70 L220 70', w:8, k:'kirmizi' },
    { t:'r', x:110, y:60, w:20, h:20, rx:4, f:'#E8C878' },
    { t:'l', d:'M80 66 Q120 20 160 66', w:6, k:'#6F8FD6' },
    { t:'l', d:'M40 70 L64 70 M58 66 L65 70 L58 74', w:1.6, k:'beyaz' },
    ...kutu(120, 104, 54, 'tıkalı', 11), ...kutu(120, 22, 86, 'yeni yol (köprü)', 9), { t:'y', x:36, y:52, m:'atardamar', b:10 } ] },
  pancreas: { boy: 134, alt: 'Pankreas midenin arkasında durur ve vücudun besinleri sindirmesine yardım eder.', o: [
    { t:'c', x:64, y:20, r:14, f:'ten' }, { t:'p', d:'M30 40 Q64 30 98 40 L96 124 L32 124 Z', f:'#FFE7D6' },
    { t:'p', d:'M50 70 Q42 62 50 54 Q66 48 80 58 Q84 72 70 80 Q56 82 50 70 Z', f:'#E89AAE' },
    { t:'p', d:'M42 88 Q62 80 86 86 Q90 92 82 94 Q62 92 44 96 Z', f:'#F2C14E' },
    ...kutu(170, 50, 50, 'mide', 11), { t:'l', d:'M144 52 L82 64', w:1.2, kesik:true },
    ...kutu(170, 92, 66, 'pankreas', 11), { t:'l', d:'M138 92 L88 90', w:1.2, kesik:true }, { t:'y', x:170, y:122, m:'sindirime yardım', b:10 } ] },
  migraine: { boy: 134, alt: 'Bazı insanlarda bir migren atağı bir günden uzun sürebilir.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#3B3570' },
    kis(80, 120, 1.4, 'su', 'bas', 'uzgun'), { t:'p', d:'M70 46 L62 34 L74 40 L70 26 L82 42 Z', f:'sari' },
    { t:'l', d:'M58 58 q-6 -6 0 -12 M102 58 q6 -6 0 -12', w:1.8, k:'kirmizi' },
    { t:'r', x:150, y:40, w:70, h:56, rx:4, f:'#FFFFFF' }, { t:'r', x:150, y:40, w:70, h:14, rx:4, f:'kirmizi' }, { t:'y', x:185, y:82, m:'1+ gün', b:13 },
    ...kutu(80, 22, 58, 'migren', 11) ] },
  nausea: { boy: 134, alt: 'Bulantı birçok ilacın yaygın bir yan etkisidir.', o: [
    { t:'r', x:20, y:56, w:40, h:52, rx:4, f:'#FFFFFF' }, { t:'r', x:20, y:56, w:40, h:14, rx:4, f:'su' }, { t:'r', x:28, y:80, w:24, h:10, rx:5, f:'pembe' },
    okt(70, 82, 26),
    kis(160, 120, 1.3, '#C9F0B4', 'bas', 'uzgun'), { t:'l', d:'M150 64 q4 -4 8 0 t8 0 M144 54 q6 -4 12 0', w:1.4, k:'yesil' },
    ...kutu(160, 26, 64, 'mide bulantısı', 9), { t:'y', x:40, y:126, m:'ilaç', b:11 }, { t:'y', x:90, y:70, m:'yan etki', b:9 } ] },
  liver: { boy: 134, alt: 'Karaciğer birçok ilacı ve zehri parçalamada merkezî rol oynar.', o: [
    { t:'p', d:'M30 50 Q30 30 70 30 L150 34 Q170 36 160 56 Q140 90 90 96 Q40 100 30 70 Z', f:'#A8524A' },
    { t:'l', d:'M100 34 Q96 60 110 90', w:1.4, k:'#7A3A34' },
    ...[[196, 34, 'pembe'], [210, 52, 'su'], [196, 70, 'sari']].map(([x, y, f]) => ({ t:'r', x, y, w:14, h:8, rx:4, f })),
    { t:'l', d:'M186 52 L166 56 M172 51 L165 56 L172 61', w:1.6, k:'vurgu' },
    ...[[60, 112], [80, 118], [100, 112]].map(([x, y]) => ({ t:'c', x, y, r:2.4, f:'gri' })),
    ...kutu(90, 18, 70, 'karaciğer', 11), { t:'y', x:200, y:100, m:'ilaçlar', b:10 }, { t:'y', x:140, y:118, m:'parçalar', b:10 } ] },
  gland: { boy: 134, alt: 'Boyundaki tiroid bezi vücudun enerjiyi ne hızla kullandığını denetleyen maddeler üretir.', o: [
    { t:'c', x:70, y:30, r:20, f:'ten' }, { t:'c', x:63, y:28, r:1.8, f:'#4B2E5E' }, { t:'c', x:77, y:28, r:1.8, f:'#4B2E5E' }, { t:'l', d:'M64 38 q6 4 12 0', w:1.4 },
    { t:'r', x:58, y:48, w:24, h:30, f:'ten' }, { t:'p', d:'M20 128 Q24 82 70 78 Q116 82 120 128 Z', f:'#C9A6FF' },
    { t:'p', d:'M60 66 Q56 60 60 56 Q66 56 70 62 Q74 56 80 56 Q84 60 80 66 Q70 72 60 66 Z', f:'#E89AAE' },
    ...kutu(176, 50, 76, 'tiroid bezi', 10), { t:'l', d:'M138 52 L84 62', w:1.2, kesik:true },
    { t:'l', d:'M164 84 L164 110 M158 104 l6 6 l6 -6', w:1.8, k:'vurgu' }, { t:'p', d:'M176 86 L168 100 L176 100 L170 114 L186 96 L178 96 L184 86 Z', f:'sari' },
    { t:'y', x:206, y:124, m:'enerji hızı', b:10 } ] },
  arthritis: { boy: 134, alt: 'Artrit kavanoz açmak gibi gündelik işleri şaşırtıcı biçimde zorlaştırabilir.', o: [
    { t:'r', x:100, y:56, w:44, h:56, rx:6, f:'#FFF3D6' }, { t:'r', x:96, y:44, w:52, h:14, rx:3, f:'kirmizi' },
    ...[[106, 80], [120, 92], [134, 78]].map(([x, y]) => ({ t:'c', x, y, r:5, f:'#E94F4F' })),
    { t:'p', d:'M60 48 Q76 36 98 44 L98 58 Q80 60 70 66 Z', f:'ten' }, { t:'c', x:84, y:48, r:5, f:'#FF8A8A' },
    { t:'l', d:'M80 32 l-4 -6 M88 30 l0 -8 M96 32 l4 -6', w:1.6, k:'kirmizi' },
    { t:'l', d:'M160 50 q10 -4 14 4', w:1.6, k:'vurgu' }, { t:'y', x:186, y:60, m:'açılmıyor', b:11 },
    ...kutu(120, 124, 56, 'artrit', 11) ] },
  antiseptic: { boy: 134, alt: 'Ameliyattan önce cilt enfeksiyon riskini azaltmak için antiseptikle temizlenir.', o: [
    { t:'r', x:20, y:70, w:140, h:34, rx:16, f:'ten' },
    { t:'e', x:90, y:86, rx:30, ry:12, f:'#F2C14E' },
    { t:'l', d:'M120 40 L100 78', w:4, k:'#FFFFFF' }, { t:'e', x:98, y:80, rx:6, ry:4, f:'#FFFFFF' },
    { t:'p', d:'M170 30 L200 30 L204 90 L166 90 Z', f:'#C9643A' }, { t:'r', x:174, y:22, w:22, h:10, rx:2, f:'#FFFFFF' }, { t:'r', x:172, y:52, w:28, h:18, f:'#FFFFFF' },
    ...[[60, 64], [126, 62]].map(([x, y]) => ({ t:'l', d:`M${x} ${y - 6} l0 12 M${x - 6} ${y} l12 0`, w:1.6, k:'sari' })),
    ...kutu(186, 116, 72, 'antiseptik', 10), { t:'y', x:60, y:124, m:'ameliyat öncesi', b:10 } ] },
  outpatient: { boy: 134, alt: 'Birçok küçük ameliyat artık ayakta tedaviyle yapılıyor; hastalar aynı gün eve dönebiliyor.', o: [
    { t:'r', x:14, y:30, w:70, h:80, f:'#FFFFFF' }, { t:'r', x:40, y:42, w:18, h:6, f:'kirmizi' }, { t:'r', x:46, y:36, w:6, h:18, f:'kirmizi' },
    { t:'r', x:36, y:80, w:26, h:30, f:'buz' },
    kis(120, 112, .9, 'su', 'asagi', 'mutlu'), { t:'r', x:110, y:84, w:20, h:6, rx:2, f:'#FFFFFF' },
    okt(140, 92, 30), ...ev(186, 82, 'sari'),
    { t:'c', x:120, y:34, r:12, f:'#FFFFFF' }, { t:'l', d:'M120 26 L120 34 L126 38', w:1.4 },
    ...kutu(196, 30, 66, 'aynı gün', 11) ] },
  therapy: { boy: 134, alt: 'Konuşma terapisi bazı sesleri çıkarmakta zorlanan çocuklara yardım edebilir.', o: [
    { t:'r', x:20, y:92, w:200, h:8, rx:3, f:'agac' },
    kis(70, 92, .8, 'sari', 'asagi', 'sasir'), kis(170, 92, 1.05, '#7FD8B6', 'bas', 'mutlu'),
    ...balon(70, 34, 60, 'rrr…', 12), ...balon(170, 30, 64, 'aynen!', 11),
    { t:'r', x:100, y:74, w:40, h:18, rx:2, f:'#FFFFFF' }, { t:'y', x:120, y:87, m:'R', b:12 },
    ...kutu(120, 118, 88, 'konuşma terapisi', 9) ] },
  carcinogen: { boy: 134, alt: 'Tütün dumanı bilinen birçok kanserojen madde içerir.', o: [
    { t:'r', x:40, y:96, w:80, h:10, rx:2, f:'#FFFFFF' }, { t:'r', x:120, y:96, w:14, h:10, f:'turuncu' },
    { t:'l', d:'M130 92 q-6 -10 2 -20 q8 -10 0 -24 q-6 -10 4 -20', w:2, k:'gri' },
    ...[[150, 60], [166, 42], [158, 24]].map(([x, y]) => ({ t:'p', d:`M${x} ${y - 9} L${x + 9} ${y + 7} L${x - 9} ${y + 7} Z`, f:'sari' })),
    ...[[150, 64], [166, 46], [158, 28]].map(([x, y]) => ({ t:'y', x, y, m:'!', b:10 })),
    ...kutu(80, 124, 82, 'kanserojen', 11), { t:'y', x:200, y:66, m:'zararlı', b:11 } ] },
  anatomy: { boy: 134, alt: 'Tıp öğrencileri birinci yıllarının çoğunu insan anatomisi çalışarak geçirir.', o: [
    { t:'r', x:110, y:12, w:110, h:112, rx:4, f:'#FFFFFF' },
    { t:'c', x:165, y:30, r:12, f:'#FFE7D6' }, { t:'r', x:150, y:44, w:30, h:44, rx:10, f:'#FFE7D6' }, { t:'l', d:'M156 88 L152 118 M174 88 L178 118 M150 50 L136 80 M180 50 L194 80', w:4, k:'#FFE7D6' },
    { t:'p', d:'M160 56 Q156 52 160 50 Q165 52 165 56 Q165 52 170 50 Q174 52 170 56 L165 62 Z', f:'kirmizi' }, { t:'e', x:158, y:64, rx:5, ry:8, f:'#FFB3C8' }, { t:'e', x:172, y:64, rx:5, ry:8, f:'#FFB3C8' },
    kis(60, 124, 1.15, '#FFFFFF', 'ileri'), { t:'r', x:72, y:94, w:24, h:18, rx:2, f:'kirmizi' },
    ...kutu(60, 30, 66, 'anatomi', 11) ] },

  // ---- fen ----
  acid: { boy: 134, alt: 'Asit yağmuru çoğunlukla kükürt dioksit gibi kirleticiler havadaki suyla karışınca oluşur.', o: [
    { t:'r', x:20, y:60, w:40, h:60, f:'gri' }, { t:'r', x:30, y:28, w:12, h:32, f:'#8E939C' },
    ...[[36, 20, 8], [46, 12, 9], [58, 8, 8]].map(([x, y, r]) => ({ t:'c', x, y, r, f:'#A8AEB8' })), { t:'y', x:40, y:132, m:'kirletici', b:9 },
    ...[[130, 26, 11], [146, 20, 13], [162, 26, 11]].map(([x, y, r]) => ({ t:'c', x, y, r, f:'#9AA88A' })),
    { t:'l', d:'M128 44 l-4 10 M146 46 l-4 10 M164 44 l-4 10 M136 62 l-4 10 M156 62 l-4 10', w:1.8, k:'#B8C95A' },
    { t:'l', d:'M200 118 L200 90', w:2, k:'agac' }, { t:'p', d:'M186 92 L200 70 L214 92 Z', f:'#B8B84E' },
    { t:'l', d:'M66 30 Q96 16 120 24', w:1.4, k:'vurgu', kesik:true },
    ...kutu(146, 104, 66, 'asit yağmuru', 10) ] },
  biodiversity: { boy: 134, alt: 'Yağmur ormanları kara yüzeyinin küçük bir kısmını kaplar ama biyolojik çeşitliliğin büyük bölümünü barındırır.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#2E6B3A' },
    ...[[30, 40], [80, 30], [140, 40], [196, 34]].map(([x, y]) => ({ t:'c', x, y, r:24, f:'#4E9E34' })),
    { t:'kus', x:60, y:70, f:'kirmizi' }, { t:'kus', x:170, y:76, f:'sari' }, { t:'e', x:120, y:100, rx:10, ry:6, f:'#FF8A4C' }, { t:'c', x:130, y:96, r:4, f:'#FF8A4C' },
    { t:'p', d:'M200 100 L190 92 L198 110 Z M200 100 L210 92 L202 110 Z', f:'su' },
    { t:'e', x:40, y:110, rx:7, ry:4, f:'#9FE07A' }, { t:'c', x:80, y:108, r:5, f:'pembe' },
    ...kutu(120, 20, 90, 'çok sayıda tür', 10) ] },
  invertebrate: { boy: 134, alt: 'Böcekler, solucanlar ve salyangozların hiçbirinin omurgası yoktur; hepsi omurgasızdır.', o: [
    { t:'r', x:0, y:96, w:240, h:38, f:'#8B6A4A' },
    ...ari(50, 60), solucan(100, 108), ...salyangoz(180, 96),
    { t:'y', x:50, y:84, m:'böcek', b:10 }, { t:'y', x:112, y:126, m:'solucan', b:10 }, { t:'y', x:180, y:120, m:'salyangoz', b:10 },
    ...kutu(140, 30, 82, 'omurga yok', 11) ] },
  organism: { boy: 134, alt: 'Bazı tek hücreli canlılar suyun neredeyse kaynadığı sıcak su kaynaklarında yaşayabilir.', o: [
    { t:'e', x:90, y:90, rx:80, ry:30, f:'#7FD0EA' }, { t:'l', d:'M50 60 q-6 -10 0 -20 M90 56 q-6 -10 0 -20 M130 60 q-6 -10 0 -20', w:1.6, k:'gri' },
    { t:'c', x:190, y:60, r:30, f:'#E3F7FF' }, { t:'e', x:182, y:56, rx:10, ry:6, f:'#9FE07A' }, { t:'e', x:200, y:70, rx:8, ry:5, f:'#9FE07A' }, { t:'c', x:182, y:56, r:2, f:'yesil' },
    { t:'l', d:'M164 76 L130 90', w:1.2, kesik:true },
    { t:'r', x:14, y:20, w:10, h:40, rx:5, f:'#FFFFFF' }, { t:'r', x:16, y:24, w:6, h:36, f:'kirmizi' }, { t:'y', x:44, y:30, m:'~95°C', b:10 },
    ...kutu(190, 112, 82, 'tek hücreli', 10) ] },
  radiation: { boy: 134, alt: 'Ozon tabakası güneşin morötesi ışınımının çoğunu yere ulaşmadan emer.', o: [
    { t:'c', x:30, y:24, r:14, f:'sari' },
    { t:'l', d:'M48 30 L100 56 M50 40 L108 66 M60 24 L120 50', w:2, k:'koyu', kesik:true },
    { t:'p', d:'M4 60 Q120 44 236 60 L236 74 Q120 58 4 74 Z', f:'#9FD6E8' }, { t:'y', x:180, y:64, m:'ozon', b:10 },
    { t:'l', d:'M122 72 L134 96', w:1.4, k:'koyu', kesik:true },
    { t:'r', x:4, y:104, w:232, h:24, f:'#C9E7A8' }, kis(150, 116, .6, 'pembe', 'asagi', 'mutlu'),
    ...kutu(66, 96, 78, 'morötesi ışın', 9) ] },
  parasite: { boy: 134, alt: 'Bazı parazitler kendilerini yaymak için konaklarının davranışını değiştirir.', o: [
    { t:'r', x:0, y:108, w:240, h:26, f:'#C9E7A8' },
    ...[[66, 92]].flatMap(([x, y]) => [{ t:'e', x, y, rx:18, ry:10, f:'#C9A06A' }, { t:'c', x:x + 18, y:y - 6, r:7, f:'#C9A06A' }, { t:'l', d:`M${x - 10} ${y + 8} l0 8 M${x + 10} ${y + 8} l0 8`, w:1.6 }]),
    { t:'c', x:62, y:90, r:5, f:'#9A5AA8' }, { t:'l', d:'M58 86 l-3 -3 M66 86 l3 -3', w:1, k:'#9A5AA8' },
    { t:'l', d:'M90 82 Q130 40 170 60', w:1.6, k:'vurgu', kesik:true }, { t:'kus', x:186, y:56, f:'#4B4B52', ucan:true },
    ...kutu(66, 30, 60, 'parazit', 11), ...kutu(186, 104, 70, 'davranış', 10) ] },
  vapour: { boy: 134, alt: 'Su buharı önemli bir sera gazıdır ve sıcak hava daha fazlasını taşıyabilir.', o: [
    ...iki(),
    { t:'r', x:20, y:30, w:10, h:60, rx:5, f:'#FFFFFF' }, { t:'r', x:22, y:70, w:6, h:20, f:'su' },
    ...[[60, 60], [80, 80]].map(([x, y]) => ({ t:'c', x, y, r:3, f:'su' })),
    { t:'r', x:142, y:30, w:10, h:60, rx:5, f:'#FFFFFF' }, { t:'r', x:144, y:40, w:6, h:50, f:'kirmizi' },
    ...[[170, 50], [190, 60], [210, 50], [176, 76], [198, 84], [216, 72], [186, 100], [206, 104]].map(([x, y]) => ({ t:'c', x, y, r:3, f:'su' })),
    { t:'y', x:59, y:28, m:'soğuk: az buhar', b:10 }, { t:'y', x:181, y:28, m:'sıcak: çok', b:11 } ] },

  // ---- tarih ve toplum ----
  pilgrimage: { boy: 134, alt: 'Orta Çağ’da uzaktaki bir türbeye hac yolculuğu sıradan birinin evden uzağa gitmesinin az sayıdaki nedeninden biriydi.', o: [
    { t:'l', d:'M14 120 Q60 100 100 104 Q150 108 200 70', w:3, k:'kraft', kesik:true },
    ...ev(10, 96, 'pembe'), { t:'y', x:22, y:88, m:'ev', b:9 },
    kis(80, 110, .8, '#9B6B47', 'ileri'), { t:'l', d:'M94 90 L96 112', w:2, k:'agac' }, kis(120, 108, .8, '#C9A06A', 'ileri'),
    { t:'r', x:192, y:44, w:36, h:26, f:'#F3E6C8' }, { t:'p', d:'M192 44 Q210 22 228 44 Z', f:'su' },
    ...kutu(196, 100, 60, 'uzak türbe', 9), ...kutu(70, 30, 82, 'aylarca yol', 10) ] },
  guild: { boy: 134, alt: 'Orta Çağ kentlerinde zanaat loncası iş standartlarını koyar ve kimin çırak olarak yetişeceğini belirlerdi.', o: [
    { t:'r', x:20, y:70, w:110, h:10, rx:2, f:'agac' },
    kis(50, 70, 1, '#8B5E3C', 'ileri'), { t:'r', x:60, y:56, w:20, h:14, rx:2, f:'#C9A060' },
    kis(104, 70, .7, 'sari', 'ileri', 'sasir'),
    { t:'r', x:150, y:26, w:74, h:64, rx:4, f:'#FFFFFF' }, { t:'p', d:'M187 34 L177 50 L197 50 Z', f:'#C9A060' }, { t:'y', x:187, y:68, m:'kurallar', b:10 }, { t:'y', x:187, y:82, m:'çırak: 1', b:9 },
    ...kutu(76, 30, 58, 'lonca', 11), { t:'y', x:50, y:100, m:'usta', b:10 }, { t:'y', x:104, y:100, m:'çırak', b:10 } ] },
  tribe: { boy: 134, alt: 'Kabile sürülerinin otlak ihtiyacına göre yaz ve kış otlakları arasında göç ediyordu.', o: [
    { t:'r', x:4, y:6, w:110, h:122, rx:12, f:'#C9E7A8' }, { t:'r', x:126, y:6, w:110, h:122, rx:12, f:'#E3E6EA' },
    { t:'p', d:'M20 100 L50 60 L80 100 Z', f:'kraft' }, ...keci(84, 108),
    { t:'p', d:'M140 100 L170 60 L200 100 Z', f:'kraft' }, ...[[150, 30], [190, 40], [214, 70], [160, 110]].map(([x, y]) => ({ t:'c', x, y, r:2.4, f:'beyaz' })),
    { t:'l', d:'M100 50 L140 50 M134 44 L141 50 L134 56', w:1.6, k:'vurgu' },
    { t:'y', x:59, y:28, m:'yaz otlağı', b:11 }, { t:'y', x:181, y:28, m:'kış otlağı', b:11 } ] },
  peasant: { boy: 134, alt: 'Orta Çağ köylüsü genellikle ancak evini besleyecek ve toprak sahibine borcunu ödeyecek kadar tahıl yetiştirirdi.', o: [
    { t:'r', x:0, y:96, w:240, h:38, f:'#E8D9A0' }, { t:'l', d:'M10 100 l0 -10 M24 100 l0 -12 M38 100 l0 -10 M52 100 l0 -12', w:1.6, k:'#C9A400' },
    kis(80, 110, 1, '#9B6B47', 'tasi'), { t:'r', x:70, y:62, w:24, h:14, rx:5, f:'kraft' },
    ...ev(120, 78, 'kraft'), { t:'l', d:'M96 82 L116 90', w:1.4, k:'vurgu', kesik:true },
    { t:'r', x:190, y:40, w:40, h:56, f:'tas' }, ...[190, 206, 222].map(x => ({ t:'r', x, y:34, w:8, h:6, f:'tas' })), { t:'l', d:'M96 74 Q150 40 186 56', w:1.4, k:'vurgu', kesik:true },
    { t:'y', x:132, y:124, m:'ev için', b:10 }, { t:'y', x:206, y:118, m:'toprak ağası', b:9 }, ...kutu(70, 30, 54, 'köylü', 11) ] },
  monarchy: { boy: 134, alt: 'Meşruti monarşide kral ya da kraliçe devletin başıdır ama yasaları seçilmiş temsilciler yapar.', o: [
    kis(60, 112, 1.2, 'kirmizi'), tac(60, 70),
    { t:'r', x:130, y:56, w:100, h:50, f:'#E8E2D4' }, { t:'p', d:'M124 56 L180 34 L236 56 Z', f:'gri' }, { t:'l', d:'M146 62 L146 106 M168 62 L168 106 M192 62 L192 106 M214 62 L214 106', w:2, k:'gri' },
    { t:'r', x:160, y:84, w:40, h:20, rx:2, f:'#FFFFFF' }, { t:'y', x:180, y:98, m:'yasa', b:10 },
    { t:'y', x:60, y:30, m:'devlet başı', b:11 }, { t:'y', x:180, y:124, m:'seçilmiş meclis', b:10 } ] },
  referendum: { boy: 134, alt: 'Belediye, soruyu yetkililer yerine yerel seçmenlerin karara bağlaması için referandum yapmayı kabul etti.', o: [
    ...sandik(100, 70), { t:'y', x:120, y:94, m:'OY', b:11 },
    kis(50, 116, .9, 'pembe', 'ileri'), kis(190, 116, .9, 'su'),
    { t:'r', x:150, y:30, w:30, h:22, rx:2, f:'#FFFFFF' }, { t:'y', x:165, y:45, m:'EVET', b:8 }, { t:'r', x:186, y:30, w:30, h:22, rx:2, f:'#FFFFFF' }, { t:'y', x:201, y:45, m:'HAYIR', b:7 },
    ...kutu(64, 30, 80, 'halk karar verir', 9), { t:'y', x:120, y:126, m:'referandum', b:11 } ] },
  treaty: { boy: 134, alt: 'İki devlet sınırlarını nehir boyunca belirleyen ve yıllarca süren çatışmayı bitiren bir antlaşma imzaladı.', o: [
    { t:'l', d:'M200 6 Q190 60 210 128', w:8, k:'su' },
    { t:'r', x:50, y:30, w:110, h:80, rx:2, f:'#F3E6C8' }, { t:'y', x:105, y:48, m:'ANTLAŞMA', b:11 }, { t:'l', d:'M60 60 l90 0 M60 70 l80 0 M60 80 l90 0', w:1, k:'gri' },
    { t:'l', d:'M64 98 q6 -8 12 0 t10 -4 M120 98 q6 -6 12 0 t14 -2', w:1.6, k:'#2F4E8C' },
    { t:'l', d:'M30 50 L30 110', w:1.6 }, { t:'p', d:'M30 50 L46 54 L30 58 Z', f:'kirmizi' }, { t:'l', d:'M226 50 L226 110', w:1.6 }, { t:'p', d:'M226 50 L210 54 L226 58 Z', f:'yesil' },
    ...kutu(105, 124, 74, 'sınır: nehir', 10) ] },
  parliament: { boy: 134, alt: 'Meclis tasarıyı son oylamadan önce haftalarca tartıştı.', o: [
    { t:'p', d:'M20 120 Q120 20 220 120 Z', f:'#E8E2D4' }, { t:'p', d:'M60 120 Q120 60 180 120 Z', f:'#F3E6C8' },
    ...[[50, 100], [74, 76], [100, 62], [140, 62], [166, 76], [190, 100]].map(([x, y]) => ({ t:'c', x, y, r:5, f:'pembe' })),
    ...[[80, 106], [100, 92], [140, 92], [160, 106]].map(([x, y]) => ({ t:'c', x, y, r:5, f:'su' })),
    kis(120, 118, .7, 'koyu', 'bas'), ...balon(120, 28, 70, 'tasarı…', 11) ] },
  tax: { boy: 134, alt: 'Devletler yolları, okulları ve diğer kamu hizmetlerini vergi gelirleriyle karşılar.', o: [
    { t:'c', x:40, y:64, r:24, f:'#E8C15A' }, { t:'y', x:40, y:70, m:'₺', b:18 }, { t:'y', x:40, y:110, m:'vergi', b:11 },
    { t:'l', d:'M68 64 L110 34 M68 64 L110 64 M68 64 L110 96', w:1.6, k:'vurgu' },
    { t:'r', x:116, y:24, w:56, h:16, f:'yol' }, { t:'y', x:200, y:36, m:'yol', b:10 },
    { t:'r', x:122, y:52, w:36, h:24, f:'sari' }, { t:'p', d:'M118 52 L140 40 L162 52 Z', f:'kirmizi' }, { t:'y', x:200, y:68, m:'okul', b:10 },
    { t:'r', x:122, y:86, w:36, h:24, f:'#FFFFFF' }, { t:'r', x:136, y:90, w:6, h:16, f:'kirmizi' }, { t:'r', x:131, y:95, w:16, h:6, f:'kirmizi' }, { t:'y', x:200, y:102, m:'hastane', b:10 } ] },
  revolution: { boy: 134, alt: 'Sanayi Devrimi yalnızca malların nasıl üretildiğini değil, insanların nerede yaşayıp çalıştığını da değiştirdi.', o: [
    ...iki(),
    kis(40, 116, .8, '#9B6B47', 'ileri'), { t:'l', d:'M50 96 L70 76 L70 110', w:2, k:'agac' }, ...ev(66, 84, 'kraft'),
    { t:'r', x:140, y:70, w:80, h:46, f:'#C9B79A' }, { t:'p', d:'M140 70 L160 56 L160 70 L180 56 L180 70 L200 56 L200 70 L220 56 L220 70 Z', f:'gri' },
    { t:'r', x:204, y:30, w:10, h:30, f:'#8E939C' }, ...[[212, 24, 6], [220, 16, 7]].map(([x, y, r]) => ({ t:'c', x, y, r, f:'#C9CED6' })),
    { t:'y', x:59, y:28, m:'tarla, el işi', b:11 }, { t:'y', x:170, y:28, m:'fabrika, şehir', b:11 } ] },
  artefact: { boy: 134, alt: 'Mezarda bulunan eserler, oraya gömülen kişinin önemli bir konumda olduğunu gösteriyor.', o: [
    { t:'r', x:0, y:40, w:240, h:94, f:'#C9A87A' }, { t:'r', x:40, y:70, w:160, h:50, rx:4, f:'#9C7A52' },
    { t:'p', d:'M70 110 L64 90 Q70 80 80 84 Q90 80 96 90 L90 110 Z', f:'#C96A3A' },
    { t:'c', x:124, y:96, r:10, f:'#E8C15A' }, { t:'l', d:'M116 96 l16 0 M124 88 l0 16', w:1, k:'#C9A400' },
    { t:'p', d:'M150 108 L170 86 L176 92 L156 112 Z', f:'gri' },
    ...kutu(120, 26, 70, 'mezar eserleri', 9) ] },
  archaeology: { boy: 134, alt: 'Arkeoloji dikkatli kazı ister; toprak katmanı kaldırılınca özgün düzeni sonsuza dek kaybolur.', o: [
    { t:'r', x:4, y:40, w:232, h:24, f:'#C9A87A' }, { t:'r', x:4, y:64, w:232, h:24, f:'#B08A5E' }, { t:'r', x:4, y:88, w:232, h:40, f:'#9C7A52' },
    { t:'l', d:'M80 40 L80 128 M200 40 L200 128 M80 40 L200 40', w:1.4, k:'kirmizi', kesik:true },
    kis(140, 64, .8, 'turuncu', 'ileri'), { t:'l', d:'M152 50 L170 62', w:2, k:'gri' },
    { t:'c', x:110, y:106, r:6, f:'#E8C15A' }, { t:'p', d:'M160 104 L176 104 L172 112 L164 112 Z', f:'#C96A3A' },
    ...kutu(60, 22, 76, 'katman katman', 9) ] },
  custom: { boy: 134, alt: 'Köyde komşuların hasadı kaldırmak için birbirine yardım etmesi bir gelenekti.', o: [
    { t:'r', x:0, y:100, w:240, h:34, f:'#E8D9A0' }, ...[20, 40, 200, 220].map(x => ({ t:'l', d:`M${x} 104 l0 -12`, w:1.6, k:'#C9A400' })),
    ...[70, 100, 130, 160].map((x, i) => kis(x, 104, .8, ['kirmizi', 'su', 'yesil', 'pembe'][i], 'tasi', 'mutlu')),
    ...[[64, 76], [124, 76]].map(([x, y]) => ({ t:'r', x, y, w:42, h:8, rx:3, f:'#E8C878' })),
    ...ev(196, 66, 'sari'), ...kutu(110, 26, 90, 'imece geleneği', 10) ] },
  diaspora: { boy: 134, alt: 'Diaspora toplulukları vatanlarından ayrıldıktan sonra kuşaklar boyunca dillerini ve bayramlarını yaşatır.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#E8EAF0' },
    ...[[40, 50, 18, 56], [62, 40, 20, 66], [186, 46, 18, 60], [208, 36, 20, 70]].map(([x, y, w, h]) => ({ t:'r', x, y, w, h, f:'#B8BCC4' })),
    ...[96, 120, 144].map((x, i) => kis(x, 112, .8, ['kirmizi', 'sari', 'su'][i], 'yukari', 'mutlu')),
    { t:'l', d:'M80 40 Q120 30 160 40', w:1.4 }, ...[90, 104, 120, 136, 150].map((x, i) => ({ t:'p', d:`M${x} 38 l4 8 l4 -8 Z`, f:['kirmizi', 'sari', 'yesil', 'su', 'pembe'][i] })),
    ...kutu(120, 66, 108, 'yurt dışında bayram', 9) ] },
  dynasty: { boy: 134, alt: 'Hanedan, aile içi çekişmeler gücünü zayıflatmadan önce bölgeyi neredeyse üç yüzyıl yönetti.', o: [
    ...[[50, 'kirmizi'], [120, 'su'], [190, 'yesil']].flatMap(([x, f], i) => [kis(x, 110, .9, f), tac(x, 70), { t:'y', x, y:128, m:`${i + 1}. kuşak`, b:9 }]),
    { t:'l', d:'M68 90 L102 90 M138 90 L172 90', w:1.6, k:'vurgu' },
    ...kutu(120, 28, 70, '300 yıl', 11) ] },
  labour: { boy: 134, alt: 'Tarladan fabrikaya geçiş emeğin nasıl örgütlendiğini, ölçüldüğünü ve ödendiğini değiştirdi.', o: [
    { t:'r', x:0, y:110, w:240, h:24, f:'#C9E7A8' },
    kis(50, 110, .9, '#9B6B47', 'ileri'), { t:'l', d:'M62 90 L80 110', w:2, k:'agac' },
    okt(92, 90, 28),
    { t:'r', x:140, y:60, w:90, h:50, f:'#C9B79A' }, { t:'c', x:160, y:40, r:12, f:'#FFFFFF' }, { t:'l', d:'M160 32 L160 40 L166 44', w:1.4 },
    kis(184, 106, .7, 'su', 'ileri'), { t:'r', x:200, y:80, w:22, h:14, rx:2, f:'#E8C15A' }, { t:'y', x:211, y:91, m:'₺', b:9 },
    ...kutu(54, 30, 56, 'emek', 11) ] },
  democracy: { boy: 134, alt: 'Temsilî demokraside vatandaşlar her konuda oy vermek yerine yasaları onlar adına yapacak kişileri seçer.', o: [
    ...[30, 60, 90].map((x, i) => kis(x, 120, .7, ['pembe', 'sari', 'su'][i], 'ileri')), ...sandik(110, 86),
    okt(156, 100, 18),
    kis(200, 120, 1, '#2F4E8C', 'bas'), { t:'r', x:180, y:50, w:40, h:20, rx:2, f:'#FFFFFF' }, { t:'y', x:200, y:64, m:'yasa', b:10 },
    ...kutu(76, 30, 88, 'halk seçer', 11), { t:'y', x:200, y:30, m:'temsilci', b:11 } ] },
  civilisation: { boy: 134, alt: 'İlk uygarlıkların birçoğu, verimli toprağın kalabalık yerleşik nüfusu besleyebildiği büyük nehirler boyunca gelişti.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#F3E6C8' },
    { t:'l', d:'M120 6 Q100 50 130 80 Q150 104 120 128', w:14, k:'su' },
    { t:'p', d:'M60 128 L60 50 L104 6 L100 128 Z M180 128 L140 128 Q156 80 140 6 L180 6 Z', f:'#C9E7A8' },
    ...[[70, 70], [70, 96], [160, 60], [160, 90]].flatMap(([x, y]) => ev(x - 11, y, 'kraft')),
    { t:'p', d:'M196 100 L216 60 L236 100 Z', f:'#E3C48A' },
    ...kutu(186, 26, 66, 'uygarlık', 11), { t:'y', x:34, y:66, m:'nehir', b:10 } ] },

  // ---- genel ----
  ingredient: { boy: 134, alt: 'Etiketteki etken maddeye her zaman bakın; farklı markalarla satılan iki ürün aynı ilacı içerebilir.', o: [
    ...iki(),
    { t:'r', x:30, y:40, w:58, h:66, rx:4, f:'pembe' }, { t:'y', x:59, y:58, m:'MARKA A', b:9 }, { t:'r', x:36, y:72, w:46, h:20, rx:2, f:'#FFFFFF' }, { t:'y', x:59, y:86, m:'madde X', b:9 },
    { t:'r', x:152, y:40, w:58, h:66, rx:4, f:'su' }, { t:'y', x:181, y:58, m:'MARKA B', b:9 }, { t:'r', x:158, y:72, w:46, h:20, rx:2, f:'#FFFFFF' }, { t:'y', x:181, y:86, m:'madde X', b:9 },
    { t:'y', x:120, y:86, m:'=', b:18 }, { t:'y', x:120, y:124, m:'etken madde aynı', b:10 } ] },
  inventory: { boy: 134, alt: 'Gönüllüler iki yaz boyunca parktaki her ağaç türünün envanterini çıkardı.', o: [
    ...[[30, 60, 14], [70, 50, 18], [110, 66, 12]].flatMap(([x, y, r]) => [{ t:'l', d:`M${x} ${y + r} L${x} 116`, w:3, k:'agac' }, { t:'c', x, y, r, f:['#4E9E34', '#5FAE5F', '#3E8A2E'][r % 3] }]),
    { t:'r', x:0, y:116, w:240, h:18, f:'#C9E7A8' },
    { t:'r', x:150, y:20, w:78, h:94, rx:3, f:'#FFFFFF' }, ...['meşe ✓', 'çam ✓', 'ıhlamur ✓', '…'].map((m, i) => ({ t:'y', x:189, y:40 + i * 18, m, b:10 })),
    kis(130, 116, .7, 'sari', 'ileri') ] },
  outlier: { boy: 134, alt: 'Bozuk bir algılayıcıdan gelen tek bir aykırı değer ortalama sıcaklığı olduğundan çok yüksek gösterdi.', o: [
    eksen(30, 106, 226, 20),
    ...[[50, 84], [70, 82], [90, 86], [110, 84], [130, 82], [170, 86], [190, 84], [210, 82]].map(([x, y]) => ({ t:'c', x, y, r:3.6, f:'su' })),
    { t:'c', x:150, y:30, r:5, f:'kirmizi' }, { t:'l', d:'M30 70 L226 70', w:1.4, k:'kirmizi', kesik:true }, { t:'y', x:206, y:64, m:'ortalama ↑', b:9 },
    { t:'r', x:160, y:36, w:20, h:14, rx:2, f:'gri' }, { t:'l', d:'M164 40 l12 6 M176 40 l-12 6', w:1.2, k:'kirmizi' },
    ...kutu(90, 30, 74, 'aykırı değer', 10) ] },
  penalty: { boy: 134, alt: 'Bildirim tarihini kaçıran firmalar her ay büyüyen bir cezayla karşılaşır.', o: [
    eksen(30, 108, 226, 20),
    ...[0, 1, 2, 3].map(i => ({ t:'r', x:50 + i * 44, y:96 - i * 22, w:26, h:12 + i * 22, f:'kirmizi' })),
    ...[1, 2, 3, 4].map(i => ({ t:'y', x:19 + i * 44, y:124, m:`${i}. ay`, b:9 })),
    { t:'r', x:150, y:20, w:70, h:26, rx:4, f:'#FFFFFF' }, { t:'y', x:185, y:38, m:'SON TARİH ✗', b:9 }, ...kutu(80, 30, 50, 'ceza', 11) ] },
  portion: { boy: 134, alt: 'Yıllık yağışın büyük bir kısmı yalnızca iki üç ayda düşer.', o: [
    eksen(20, 108, 230, 20),
    ...Array.from({ length: 12 }, (_, i) => ({ t:'r', x:26 + i * 17, y:108 - [6, 8, 10, 8, 6, 4, 4, 6, 10, 60, 74, 20][i], w:12, h:[6, 8, 10, 8, 6, 4, 4, 6, 10, 60, 74, 20][i], f:i === 9 || i === 10 ? 'su' : '#B5D8F0' })),
    { t:'l', d:'M176 26 Q196 16 212 26', w:1.4, k:'vurgu' }, ...kutu(80, 30, 100, 'çoğu 2-3 ayda', 10), { t:'y', x:120, y:126, m:'yağış · 12 ay', b:10 } ] },
  preference: { boy: 134, alt: 'Araştırmalar yeni doğan bebeklerin yüze benzeyen desenleri öteki şekillere tercih ettiğini gösteriyor.', o: [
    { t:'r', x:20, y:30, w:60, h:60, rx:30, f:'#FFFFFF' }, { t:'c', x:40, y:52, r:5, f:'#4B2E5E' }, { t:'c', x:60, y:52, r:5, f:'#4B2E5E' }, { t:'r', x:44, y:70, w:12, h:5, rx:2, f:'#4B2E5E' },
    { t:'r', x:160, y:30, w:60, h:60, rx:30, f:'#FFFFFF' }, { t:'r', x:172, y:44, w:10, h:10, f:'#4B2E5E' }, { t:'r', x:198, y:62, w:10, h:10, f:'#4B2E5E' }, { t:'r', x:180, y:70, w:8, h:6, f:'#4B2E5E' },
    { t:'e', x:120, y:108, rx:24, ry:10, f:'#FFE6F2' }, { t:'c', x:120, y:94, r:10, f:'ten' },
    { t:'l', d:'M112 86 L72 70', w:1.6, k:'vurgu', kesik:true }, { t:'c', x:50, y:104, r:9, f:'yesil' }, { t:'y', x:50, y:108, m:'✓', b:11 },
    ...kutu(190, 112, 60, 'bebek', 10) ] },
  testimony: { boy: 134, alt: 'Jüri tanığın ifadesini güvenlik kamerası görüntüleriyle örtüştüğü için ikna edici buldu.', o: [
    kis(50, 120, 1.1, 'sari', 'bas'), ...balon(60, 36, 82, '“saat 9’da…”', 10),
    { t:'r', x:140, y:40, w:84, h:56, rx:4, f:'#20304A' }, { t:'r', x:146, y:46, w:72, h:40, f:'buz' }, kis(180, 84, .5, 'kirmizi'), { t:'y', x:200, y:58, m:'09:00', b:8 },
    { t:'y', x:110, y:76, m:'=', b:18 }, ...kutu(182, 118, 76, 'kamera', 10) ] },
  livelihood: { boy: 134, alt: 'Aşırı avlanma, denize bağımlı kıyı topluluklarının geçimini tehdit ediyor.', o: [
    { t:'r', x:0, y:80, w:240, h:54, f:'su' }, dalga(90),
    ...ev(10, 56, 'pembe'), ...ev(40, 60, 'sari'), { t:'r', x:0, y:72, w:80, h:8, f:'tas' },
    { t:'p', d:'M120 80 L180 80 L172 92 L128 92 Z', f:'kirmizi' }, { t:'l', d:'M150 80 L150 60', w:1.4 },
    ...balik(200, 112, '#9FB8A0'), { t:'y', x:150, y:118, m:'balık az', b:10 },
    ...kutu(60, 26, 80, 'geçim kaynağı', 10), { t:'y', x:200, y:50, m:'?', b:16 } ] },
  personnel: { boy: 134, alt: 'Yalnızca eğitimli personel örneklerin saklandığı laboratuvara girebilir.', o: [
    { t:'r', x:110, y:20, w:60, h:100, rx:2, f:'#E8E2D4' }, { t:'r', x:124, y:44, w:32, h:22, rx:2, f:'#FFFFFF' }, { t:'y', x:140, y:58, m:'LAB', b:10 },
    { t:'r', x:176, y:60, w:16, h:22, rx:3, f:'#4B4B52' }, { t:'r', x:180, y:66, w:8, h:6, f:'yesil' },
    kis(60, 120, 1.1, '#FFFFFF', 'ileri', 'mutlu'), { t:'r', x:52, y:94, w:16, h:10, rx:2, f:'su' },
    { t:'c', x:212, y:100, r:10, f:'kirmizi' }, { t:'y', x:212, y:104, m:'✗', b:11 }, { t:'y', x:212, y:124, m:'diğerleri', b:9 },
    ...kutu(60, 30, 60, 'personel', 11) ] },
  epidemic: { boy: 134, alt: 'Temiz su ve daha iyi sağlık koşulları birçok kentin tekrarlayan kolera salgınlarını denetim altına almasına yardım etti.', o: [
    eksen(30, 108, 226, 20),
    { t:'l', d:'M34 60 L50 30 L64 70 L78 34 L92 76 L110 50 L130 90 L160 100 L220 104', w:2.4, k:'kirmizi' },
    { t:'l', d:'M120 108 L120 20', w:1.4, k:'su', kesik:true }, { t:'y', x:156, y:34, m:'temiz su', b:10 },
    { t:'r', x:136, y:44, w:12, h:18, rx:2, f:'su' },
    ...kutu(66, 120, 70, 'salgınlar', 10) ] },
  fatigue: { boy: 134, alt: 'Yeterli dinlenmeden uzun saatler çalışmak yorgunluğa, bu da iş kazası riskine yol açabilir.', o: [
    { t:'r', x:0, y:112, w:240, h:22, f:'#E3EEF0' },
    kis(80, 112, 1.15, 'turuncu', 'asagi', 'uzgun'), { t:'p', d:'M68 70 Q80 58 92 70 Z', f:'sari' }, { t:'y', x:106, y:80, m:'z z', b:11 },
    { t:'c', x:40, y:40, r:16, f:'#FFFFFF' }, { t:'l', d:'M40 30 L40 40 L48 44', w:1.6 }, { t:'y', x:40, y:70, m:'12 saat', b:10 },
    { t:'p', d:'M180 40 L204 80 L156 80 Z', f:'sari' }, { t:'y', x:180, y:74, m:'!', b:16 },
    ...kutu(180, 104, 60, 'kaza riski', 10) ] },
  proximity: { boy: 134, alt: 'İyi okullara ve tren istasyonlarına yakın evlerin fiyatı daha yüksek olur.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#EEFFDD' },
    { t:'r', x:20, y:30, w:40, h:28, f:'sari' }, { t:'p', d:'M16 30 L40 18 L64 30 Z', f:'kirmizi' }, { t:'y', x:40, y:74, m:'okul', b:10 },
    { t:'r', x:20, y:90, w:56, h:20, rx:3, f:'gri' }, { t:'l', d:'M14 116 L82 116', w:2 }, { t:'y', x:48, y:128, m:'istasyon', b:9 },
    ...ev(96, 56, 'pembe'), { t:'p', d:'M94 90 L124 90 L130 98 L124 106 L94 106 Z', f:'sari' }, { t:'y', x:110, y:102, m:'₺₺₺', b:9 },
    ...ev(196, 56, 'su'), { t:'p', d:'M194 90 L222 90 L228 98 L222 106 L194 106 Z', f:'sari' }, { t:'y', x:210, y:102, m:'₺', b:10 },
    { t:'y', x:110, y:30, m:'yakın', b:11 }, { t:'y', x:210, y:30, m:'uzak', b:11 } ] },
  mortality: { boy: 134, alt: 'Temiz su ve aşılama programları birçok bölgede çocuk ölümlerini büyük ölçüde azalttı.', o: [
    eksen(30, 108, 226, 20),
    { t:'l', d:'M34 30 Q80 36 110 70 Q150 98 220 102', w:3, k:'kirmizi' },
    { t:'r', x:86, y:34, w:12, h:18, rx:2, f:'su' }, { t:'r', x:110, y:40, w:20, h:6, rx:2, f:'buz' },
    ...kutu(170, 40, 92, 'çocuk ölümleri', 9), { t:'y', x:130, y:126, m:'temiz su + aşı', b:10 } ] },
};
