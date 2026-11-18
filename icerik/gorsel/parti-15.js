// Kelime kartı görselleri · 15. parti (18 Kasım 2026): 50 kart. Tarz v11; her sahne kartın kendi örnek cümlesini anlatır.
// Çizimler özgün.
import { ev, dalga, okt, balon, iki, kutu, balik } from './parca.js';

const kis = (x, y, s, f, kol, yuz) => ({ t:'k', x, y, s, f, kol, yuz });
const eksen = (x0, y0, x1, y1) => ({ t:'l', d:`M${x0} ${y1} L${x0} ${y0} L${x1} ${y0}`, w:1.8 });
const tablo = (x, y, w, h, f) => [{ t:'r', x, y, w, h, rx:1, f:'#C9A060' }, { t:'r', x:x + 4, y:y + 4, w:w - 8, h:h - 8, f }];
const turbin = (x, y) => [{ t:'l', d:`M${x} ${y} L${x} ${y + 44}`, w:2.4, k:'#8E939C' }, { t:'l', d:`M${x} ${y} L${x} ${y - 16} M${x} ${y} L${x + 14} ${y + 8} M${x} ${y} L${x - 14} ${y + 8}`, w:2.6, k:'#8E939C' }];
const ispinoz = (x, y, gaga, f) => [{ t:'e', x, y, rx:11, ry:7, f }, { t:'c', x:x + 10, y:y - 5, r:5, f }, { t:'p', d:gaga, f:'turuncu' }, { t:'c', x:x + 11, y:y - 6, r:1, f:'#4B2E5E' }];

export default {
  // ---- isimler ----
  amusement: { boy: 134, alt: 'Babam bisikleti yanlış aletle tamir etmeye çalışmamı belli bir eğlenceyle izledi.', o: [
    { t:'c', x:46, y:104, r:14, f:'yok' }, { t:'c', x:90, y:104, r:14, f:'yok' }, { t:'l', d:'M46 104 L62 82 L90 104 M62 82 L80 82 L90 104 M58 76 l10 0', w:2 },
    kis(120, 120, .9, 'su', 'ileri', 'sasir'), { t:'l', d:'M134 96 L104 82', w:3, k:'#6B7280' }, { t:'r', x:96, y:76, w:12, h:10, rx:2, f:'#6B7280' },
    kis(196, 122, 1.15, 'yesil', 'bas', 'mutlu'), ...balon(196, 40, 56, 'hı hı', 12),
    { t:'y', x:110, y:30, m:'yanlış alet', b:11 } ] },
  bond: { boy: 134, alt: 'Her yaz çiftlikte birlikte çalışmak iki kuzen arasında güçlü bir bağ kurdu.', o: [
    { t:'r', x:0, y:104, w:240, h:30, f:'#C9E7A8' }, { t:'c', x:204, y:28, r:12, f:'sari' },
    { t:'r', x:20, y:84, w:30, h:20, rx:6, f:'#E8C878' }, { t:'r', x:180, y:84, w:34, h:20, rx:6, f:'#E8C878' },
    kis(104, 104, 1, 'kirmizi', 'yukari'), kis(136, 104, 1, 'su', 'yukari'),
    { t:'p', d:'M120 34 C112 26 102 34 110 42 L120 52 L130 42 C138 34 128 26 120 34 Z', f:'pembe' },
    ...kutu(60, 30, 62, 'kuzenler', 11), { t:'y', x:120, y:126, m:'güçlü bağ', b:12 } ] },
  plot: { boy: 134, alt: 'Film özgün hikâyenin olay örgüsünü koruyor ama onu bir saraydan modern bir şehre taşıyor.', o: [
    ...iki(),
    { t:'r', x:20, y:60, w:78, h:44, f:'#F3E6C8' }, { t:'p', d:'M20 60 L36 40 L52 60 Z M66 60 L82 40 L98 60 Z', f:'#C9A6FF' }, { t:'p', d:'M50 104 L50 84 Q59 74 68 84 L68 104 Z', f:'#8B5E3C' },
    ...[[144, 52, 18, 52], [166, 40, 20, 64], [190, 56, 16, 48], [210, 46, 18, 58]].map(([x, y, w, h]) => ({ t:'r', x, y, w, h, f:'#B8BCC4' })),
    kis(46, 122, .6, 'kirmizi'), kis(72, 122, .6, 'su'), kis(168, 122, .6, 'kirmizi'), kis(194, 122, .6, 'su'),
    { t:'y', x:59, y:28, m:'saray', b:13 }, { t:'y', x:181, y:28, m:'modern şehir', b:12 }, ...kutu(120, 116, 64, 'aynı örgü', 9) ] },
  moral: { boy: 134, alt: 'Hikâyenin ana fikri basit: yabancılara iyi davranmanın bir bedeli yok.', o: [
    { t:'r', x:0, y:110, w:240, h:24, f:'yol' },
    kis(80, 110, 1, 'pembe', 'ileri', 'mutlu'), kis(150, 110, 1, 'gri', 'asagi', 'mutlu'),
    { t:'p', d:'M84 68 Q108 50 132 68 Z', f:'su' }, { t:'l', d:'M108 68 L108 86', w:1.8 },
    { t:'c', x:30, y:30, r:2, f:'su' }, { t:'l', d:'M20 24 l-3 7 M40 20 l-3 7 M190 24 l-3 7 M210 20 l-3 7', w:1.4, k:'su' },
    ...kutu(120, 30, 120, 'iyilik bedavadır', 11) ] },
  immunity: { boy: 134, alt: 'Bebekler annelerinden bir miktar bağışıklık alır ama bu birkaç ay içinde azalır.', o: [
    kis(40, 120, 1.2, 'pembe', 'ileri', 'mutlu'), { t:'e', x:68, y:96, rx:12, ry:8, f:'#FFE6F2' }, { t:'c', x:60, y:90, r:5, f:'ten' },
    { t:'p', d:'M92 52 L112 46 L132 52 L130 74 Q112 88 94 74 Z', f:'su' }, { t:'y', x:112, y:68, m:'✓', b:12 },
    eksen(150, 106, 230, 30), { t:'l', d:'M154 38 Q180 50 196 80 Q206 96 226 100', w:3, k:'vurgu' },
    { t:'y', x:190, y:124, m:'aylar', b:10 }, ...kutu(112, 24, 78, 'bağışıklık', 10) ] },
  sensitivity: { boy: 134, alt: 'Başı ağrıdığında parlak ışığa duyarlılığı artıyor.', o: [
    { t:'l', d:'M180 10 L180 30', w:1.6 }, { t:'p', d:'M164 30 L196 30 L188 46 L172 46 Z', f:'gri' }, { t:'c', x:180, y:50, r:6, f:'sari' },
    { t:'p', d:'M168 54 L120 120 L240 120 L192 54 Z', f:'#FFF1A8' },
    kis(70, 120, 1.15, 'su', 'bas', 'uzgun'), { t:'l', d:'M58 70 l-6 -6 M64 66 l-2 -8', w:1.6, k:'kirmizi' },
    ...kutu(66, 30, 82, 'ışık rahatsız', 10) ] },
  processor: { boy: 134, alt: 'Video düzenlemek güçlü bir işlemci ister; ucuz dizüstü zorlanır.', o: [
    ...iki(),
    { t:'r', x:22, y:46, w:74, h:44, rx:3, f:'#2A2550' }, { t:'r', x:28, y:52, w:62, h:32, f:'buz' }, { t:'p', d:'M14 90 L104 90 L98 98 L20 98 Z', f:'gri' },
    { t:'r', x:32, y:70, w:54, h:8, f:'pembe' }, { t:'r', x:46, y:58, w:14, h:10, f:'#4B4B52' },
    { t:'r', x:144, y:46, w:74, h:44, rx:3, f:'#2A2550' }, { t:'r', x:150, y:52, w:62, h:32, f:'buz' }, { t:'p', d:'M136 90 L226 90 L220 98 L142 98 Z', f:'gri' },
    { t:'c', x:181, y:68, r:8, f:'yok' }, { t:'l', d:'M181 60 a8 8 0 1 1 -8 8', w:2, k:'vurgu' }, { t:'l', d:'M222 50 q4 -4 0 -8', w:1.4, k:'su' },
    { t:'y', x:59, y:28, m:'güçlü işlemci', b:11 }, { t:'y', x:181, y:28, m:'ucuz: yavaş', b:11 }, { t:'y', x:59, y:118, m:'video ✓', b:11 } ] },
  ridicule: { boy: 134, alt: 'İlk resimleri alayla karşılandı ama bugün büyük müzelerde asılı.', o: [
    ...iki(),
    ...tablo(34, 40, 50, 40, '#BDEBFF'), { t:'c', x:59, y:58, r:8, f:'sari' },
    kis(30, 120, .6, 'gri', 'bas', 'mutlu'), kis(88, 120, .6, 'gri', 'bas', 'mutlu'), { t:'y', x:59, y:98, m:'ha ha', b:11 },
    { t:'r', x:170, y:38, w:22, h:6, rx:2, f:'#6B7280' }, { t:'p', d:'M174 44 L150 100 L212 100 L188 44 Z', f:'#FFF9D6' },
    ...tablo(156, 54, 50, 40, '#BDEBFF'), { t:'c', x:181, y:72, r:8, f:'sari' }, kis(160, 124, .55, 'pembe'), kis(202, 124, .55, 'su'),
    { t:'y', x:59, y:28, m:'önce: alay', b:12 }, { t:'y', x:181, y:28, m:'bugün: müze', b:12 } ] },
  shift: { boy: 134, alt: 'Çevrim içi mağazalar yaygınlaşınca insanların alışveriş biçiminde belirgin bir değişim oldu.', o: [
    { t:'r', x:14, y:50, w:80, h:60, f:'#F3E6C8' }, { t:'p', d:'M8 50 L100 50 L92 36 L16 36 Z', f:'kirmizi' },
    { t:'r', x:30, y:66, w:48, h:18, rx:3, f:'#FFFFFF' }, { t:'y', x:54, y:79, m:'KAPALI', b:9 },
    okt(102, 80, 30),
    { t:'r', x:148, y:30, w:36, h:64, rx:6, f:'#2A2550' }, { t:'r', x:152, y:36, w:28, h:48, rx:2, f:'#FFFFFF' }, { t:'p', d:'M156 52 L176 52 L172 64 L160 64 Z', f:'su' },
    { t:'r', x:196, y:84, w:28, h:22, f:'kraft' }, { t:'r', x:204, y:70, w:20, h:14, f:'kraft' },
    ...kutu(120, 124, 96, 'çevrim içi alışveriş', 9) ] },
  transfusion: { boy: 134, alt: 'Kazadan sonra bisikletçinin ameliyattan önce kan nakli alması gerekti.', o: [
    { t:'r', x:20, y:84, w:120, h:12, rx:4, f:'#FFFFFF' }, { t:'l', d:'M26 96 L26 116 M134 96 L134 116', w:2, k:'gri' },
    { t:'c', x:34, y:76, r:9, f:'ten' }, { t:'r', x:44, y:74, w:90, h:12, rx:5, f:'#9FD6E8' },
    { t:'l', d:'M176 20 L176 116 M164 20 L188 20', w:2.4, k:'gri' }, { t:'r', x:164, y:24, w:24, h:32, rx:5, f:'kirmizi' },
    { t:'l', d:'M176 56 Q170 76 100 80', w:2, k:'kirmizi' },
    { t:'c', x:206, y:112, r:9, f:'yok' }, { t:'c', x:230, y:112, r:9, f:'yok' }, { t:'l', d:'M206 112 L216 98 L230 112 M214 92 l6 0', w:1.6, k:'kirmizi' },
    ...kutu(80, 30, 66, 'kan nakli', 11) ] },
  vessel: { boy: 134, alt: 'Sigara kan damarlarını daraltıp kalbin daha çok çalışmasına yol açabilir.', o: [
    ...iki(),
    { t:'r', x:14, y:56, w:90, h:30, rx:14, f:'#FFD6D6' }, { t:'r', x:14, y:62, w:90, h:18, f:'kirmizi' },
    { t:'r', x:136, y:56, w:90, h:30, rx:14, f:'#FFD6D6' }, { t:'p', d:'M136 62 L226 62 L226 80 L136 80 Z', f:'#FFD6D6' }, { t:'r', x:136, y:66, w:90, h:10, f:'kirmizi' },
    { t:'p', d:'M176 56 Q186 66 196 56 Z M176 86 Q186 76 196 86 Z', f:'#E8C878' },
    { t:'r', x:150, y:100, w:44, h:6, rx:2, f:'#FFFFFF' }, { t:'r', x:194, y:100, w:8, h:6, f:'turuncu' }, { t:'l', d:'M204 98 q4 -6 0 -10', w:1.2, k:'gri' },
    { t:'y', x:59, y:28, m:'geniş damar', b:11 }, { t:'y', x:181, y:28, m:'daralmış', b:11 } ] },
  supplement: { boy: 134, alt: 'Takviyenin etiketinde beklediğinden çok daha fazla içerik yazılıydı.', o: [
    { t:'r', x:40, y:36, w:60, h:84, rx:8, f:'#FFFFFF' }, { t:'r', x:44, y:24, w:52, h:14, rx:3, f:'turuncu' },
    { t:'r', x:46, y:50, w:48, h:60, rx:2, f:'#FFF3D6' }, { t:'l', d:Array.from({ length: 11 }, (_, i) => `M50 ${56 + i * 5} l${30 + (i % 3) * 5} 0`).join(' '), w:.8, k:'gri' },
    { t:'c', x:150, y:70, r:24, f:'#E3F7FF' }, { t:'l', d:'M126 70 a24 24 0 1 0 48 0 a24 24 0 1 0 -48 0 M168 88 L188 108', w:3, k:'#6B7280' },
    { t:'y', x:150, y:66, m:'21', b:12 }, { t:'y', x:150, y:80, m:'içerik!', b:9 },
    ...kutu(196, 30, 60, 'takviye', 11) ] },
  dwarf: { boy: 134, alt: 'Asteroit kuşağının en büyük cismi Ceres, cüce gezegen sayılır.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#1F2347' },
    ...Array.from({ length: 18 }, (_, i) => ({ t:'e', x:20 + i * 12, y:70 + (i % 3 - 1) * 10, rx:2.5 + (i % 2), ry:2, f:'#A8A29A' })),
    { t:'c', x:120, y:70, r:12, f:'#C9C2B4' },
    { t:'c', x:36, y:30, r:20, f:'su' }, { t:'y', x:36, y:64, m:'Dünya', b:9 },
    ...kutu(120, 104, 90, 'Ceres: cüce', 11), { t:'l', d:'M120 92 L120 84', w:1.2 } ] },
  conductor: { boy: 134, alt: 'Grafit, metal olmayanlar arasında elektriği iyi ileten nadir maddelerdendir.', o: [
    { t:'r', x:20, y:60, w:40, h:24, rx:4, f:'sari' }, { t:'r', x:60, y:66, w:6, h:12, f:'gri' },
    { t:'l', d:'M66 72 L90 72 M150 72 L180 72 L180 46 M20 72 L10 72 L10 30 L180 30 L180 38', w:2.2, k:'kirmizi' },
    { t:'p', d:'M90 66 L142 66 L152 72 L142 78 L90 78 Z', f:'#F2D06B' }, { t:'p', d:'M142 66 L152 72 L142 78 Z', f:'#4B4B52' },
    { t:'c', x:180, y:56, r:12, f:'#FFF1A8' }, { t:'c', x:180, y:56, r:8, f:'sari' }, { t:'l', d:'M196 50 l8 -4 M198 58 l8 0 M196 66 l8 4', w:1.4, k:'sari' },
    ...kutu(120, 106, 78, 'grafit iletir', 11) ] },
  polymer: { boy: 134, alt: 'Doğal kauçuk ve ipek, tekrarlanan birimlerden oluşan uzun zincirli polimerlerdir.', o: [
    { t:'l', d:'M14 60 Q40 40 66 60 T118 60 T170 60 T222 60', w:1.6, k:'gri' },
    ...Array.from({ length: 10 }, (_, i) => ({ t:'c', x:+(14 + i * 23.1).toFixed(1), y:i % 2 ? 50 : 60, r:7, f:['pembe', 'su'][i % 2] })),
    { t:'e', x:70, y:104, rx:24, ry:10, f:'yok' }, { t:'l', d:'M46 104 a24 10 0 1 0 48 0 a24 10 0 1 0 -48 0', w:3, k:'#C9946A' }, { t:'y', x:70, y:128, m:'kauçuk', b:10 },
    { t:'l', d:'M150 96 Q170 110 190 96 T230 100', w:2, k:'#E8D9A0' }, { t:'y', x:190, y:128, m:'ipek', b:10 },
    { t:'y', x:120, y:24, m:'tekrarlanan zincir', b:12 } ] },
  core: { boy: 134, alt: 'Mühendisler köprüyü taşıyacak kadar sağlam mı diye kayadan bir karot çıkardı.', o: [
    { t:'r', x:0, y:64, w:240, h:70, f:'#A8A29A' }, { t:'l', d:'M0 84 L240 84 M0 104 L240 104', w:1.4, k:'#8E8678' },
    { t:'l', d:'M60 64 L80 16 L100 64 M80 16 L80 100', w:2.4, k:'kirmizi' }, { t:'r', x:74, y:64, w:12, h:40, f:'#6B6458' },
    { t:'r', x:140, y:40, w:16, h:64, rx:6, f:'#C9C2B4' }, { t:'l', d:'M140 60 L156 60 M140 80 L156 80', w:1.2, k:'#8E8678' },
    { t:'l', d:'M180 50 L232 50 M188 50 L188 64 M224 50 L224 64', w:2.4, k:'gri' }, { t:'y', x:206, y:40, m:'köprü?', b:10 },
    ...kutu(148, 120, 50, 'karot', 11) ] },
  nitrogen: { boy: 134, alt: 'Yaprakların yavaşça soluk sarıya dönmesi bitkinin yeterince azot alamadığının işareti olabilir.', o: [
    ...iki(),
    { t:'p', d:'M40 116 L78 116 L74 100 L44 100 Z', f:'#C96A3A' }, { t:'l', d:'M59 100 L59 50', w:2.4, k:'#4E9E34' },
    ...[[46, 60], [72, 54], [46, 80], [72, 76]].map(([x, y]) => ({ t:'e', x, y, rx:12, ry:6, f:'yesil' })),
    { t:'p', d:'M162 116 L200 116 L196 100 L166 100 Z', f:'#C96A3A' }, { t:'l', d:'M181 100 L181 50', w:2.4, k:'#B8B84E' },
    ...[[168, 60], [194, 54], [168, 80], [194, 76]].map(([x, y]) => ({ t:'e', x, y, rx:12, ry:6, f:'#EDE38A' })),
    { t:'y', x:59, y:28, m:'yeterli azot', b:11 }, { t:'y', x:181, y:28, m:'azot eksik', b:11 } ] },
  staple: { boy: 134, alt: 'Fasulye ve mısır ailenin temel besinleri; neredeyse her gün bir biçimde yeniyor.', o: [
    { t:'e', x:90, y:96, rx:66, ry:16, f:'#FFFFFF' }, { t:'e', x:90, y:92, rx:52, ry:10, f:'#F7F0E0' },
    ...[[66, 90], [74, 94], [82, 88], [70, 96]].map(([x, y]) => ({ t:'e', x, y, rx:4, ry:2.6, f:'#8B3A3A' })),
    { t:'e', x:112, y:88, rx:18, ry:7, f:'sari' }, { t:'l', d:'M98 88 l28 0 M100 84 l24 0 M100 92 l24 0', w:.8, k:'#C9A400' },
    ...['Pzt', 'Sal', 'Çar', 'Per', 'Cum'].map((g, i) => ({ t:'y', x:164 + (i % 2) * 34, y:28 + Math.floor(i / 2) * 22, m:`${g} ✓`, b:10 })),
    ...kutu(90, 30, 92, 'temel besin', 11) ] },
  archive: { boy: 134, alt: 'Kent arşivinde birkaç yüz yıl öncesine giden mektuplar ve haritalar saklanıyor.', o: [
    { t:'r', x:14, y:20, w:132, h:100, f:'#E8E2D4' }, { t:'l', d:'M14 52 L146 52 M14 86 L146 86', w:2, k:'agac' },
    ...[[20, 30], [48, 30], [76, 30], [104, 30], [20, 62], [48, 62], [76, 62], [104, 62], [20, 96], [48, 96]].map(([x, y]) => ({ t:'r', x, y, w:24, h:20, rx:1, f:'kraft' })),
    { t:'r', x:78, y:98, w:60, h:10, rx:5, f:'#F3E6C8' }, { t:'r', x:80, y:108, w:56, h:8, rx:4, f:'#F3E6C8' },
    { t:'r', x:166, y:52, w:58, h:44, rx:2, f:'#F3E6C8' }, { t:'l', d:'M172 62 l40 0 M172 70 l46 0 M172 78 l34 0', w:1, k:'agac' }, { t:'y', x:195, y:112, m:'1780', b:11 },
    ...kutu(195, 30, 62, 'kent arşivi', 10) ] },
  gratification: { boy: 134, alt: 'Harçlığını şekere harcamak yerine bisiklet için biriktirmek ona sabretmenin değerini öğretti.', o: [
    { t:'r', x:14, y:60, w:44, h:30, rx:5, f:'pembe' }, { t:'r', x:22, y:48, w:28, h:12, rx:4, f:'sari' }, { t:'y', x:36, y:108, m:'şimdi', b:11 },
    { t:'l', d:'M10 44 L62 96 M62 44 L10 96', w:2.6, k:'kirmizi' },
    { t:'e', x:110, y:80, rx:22, ry:16, f:'pembe' }, { t:'c', x:128, y:70, r:8, f:'pembe' }, { t:'l', d:'M104 64 l10 0', w:2 }, { t:'c', x:110, y:52, r:6, f:'#E8C15A' },
    okt(140, 80, 18),
    { t:'c', x:180, y:96, r:12, f:'yok' }, { t:'c', x:214, y:96, r:12, f:'yok' }, { t:'l', d:'M180 96 L194 76 L214 96 M194 76 L210 76 M190 70 l10 0', w:2, k:'kirmizi' },
    { t:'y', x:198, y:124, m:'sonra', b:11 }, ...kutu(120, 26, 92, 'sabırla biriktir', 10) ] },
  caregiver: { boy: 134, alt: 'Birçok ailede anne baba çalışırken büyükanne ve büyükbaba çocuğa bakar.', o: [
    { t:'r', x:0, y:112, w:240, h:22, f:'#C9E7A8' },
    kis(40, 112, 1, 'gri', 'ileri'), kis(100, 112, 1, '#C9A6FF', 'ileri'), kis(70, 112, .6, 'sari', 'yukari', 'mutlu'),
    { t:'r', x:160, y:30, w:66, h:70, f:'#D7DBE2' }, ...[166, 186, 206].flatMap(x => [{ t:'r', x, y:38, w:14, h:12, f:'buz' }, { t:'r', x, y:58, w:14, h:12, f:'buz' }]),
    { t:'y', x:193, y:92, m:'iş', b:10 }, { t:'y', x:70, y:40, m:'bakıcı: dede, nine', b:11 } ] },
  debt: { boy: 134, alt: 'Kuzenimin öğrenim kredisi borcunu ödemesi beş yıl sürdü.', o: [
    eksen(30, 106, 226, 20),
    ...[0, 1, 2, 3, 4].map(i => ({ t:'r', x:42 + i * 36, y:30 + i * 15, w:24, h:76 - i * 15, f:'kirmizi' })),
    ...[1, 2, 3, 4, 5].map(i => ({ t:'y', x:18 + i * 36, y:122, m:`${i}. yıl`, b:9 })),
    { t:'c', x:220, y:96, r:10, f:'yesil' }, { t:'y', x:220, y:101, m:'✓', b:12 }, ...kutu(150, 30, 52, 'borç', 11) ] },
  curator: { boy: 134, alt: 'Küratör sergideki resimleri seçti ve her birinin yanındaki kısa metinleri yazdı.', o: [
    { t:'r', x:0, y:112, w:240, h:22, f:'#E3EEF0' },
    ...tablo(20, 30, 50, 40, '#BDEBFF'), { t:'r', x:30, y:76, w:30, h:10, rx:1, f:'#FFFFFF' },
    ...tablo(92, 26, 56, 46, '#FFE6F2'), { t:'r', x:104, y:78, w:32, h:10, rx:1, f:'#FFFFFF' },
    kis(196, 112, 1.1, 'koyu', 'ileri'), { t:'r', x:158, y:56, w:20, h:26, rx:2, f:'#FFFFFF' },
    { t:'y', x:196, y:30, m:'küratör', b:12 } ] },
  propaganda: { boy: 134, alt: 'Savaş sırasında gülümseyen çiftçili neşeli afişler insanları kendi sebzelerini yetiştirmeye özendirmek için propaganda olarak kullanıldı.', o: [
    { t:'r', x:50, y:10, w:140, h:116, rx:2, f:'#FFE38A' }, { t:'r', x:56, y:16, w:128, h:28, f:'kirmizi' }, { t:'y', x:120, y:35, m:'SEBZENİ YETİŞTİR!', b:10 },
    kis(100, 108, 1.2, 'yesil', 'yukari', 'mutlu'), { t:'p', d:'M126 80 L150 80 L146 104 L130 104 Z', f:'kraft' },
    { t:'c', x:134, y:76, r:6, f:'turuncu' }, { t:'c', x:144, y:78, r:6, f:'kirmizi' }, { t:'e', x:138, y:70, rx:8, ry:4, f:'yesil' },
    { t:'y', x:212, y:120, m:'afiş', b:11 } ] },
  anomaly: { boy: 134, alt: 'Araştırmacılar olağandışı ölçümün gerçek bir anomali mi yoksa ölçüm hatası mı olduğunu görmek için deneyi tekrarladı.', o: [
    eksen(30, 106, 226, 20),
    ...[[44, 92], [62, 88], [80, 84], [98, 80], [116, 76], [152, 68], [170, 64], [188, 60], [206, 56]].map(([x, y]) => ({ t:'c', x, y, r:3.6, f:'su' })),
    { t:'l', d:'M40 94 L214 54', w:1.4, k:'gri', kesik:true },
    { t:'c', x:134, y:32, r:5, f:'kirmizi' }, { t:'c', x:134, y:32, r:11, f:'yok' }, { t:'l', d:'M123 32 a11 11 0 1 0 22 0 a11 11 0 1 0 -22 0', w:1.8, k:'kirmizi' },
    ...kutu(80, 30, 76, 'tekrar ölç', 10), { t:'y', x:160, y:30, m:'?', b:16 } ] },
  threshold: { boy: 134, alt: 'Geliri belirli bir eşiğin altında kalan aileler ücretsiz okul yemeğine hak kazanır.', o: [
    eksen(30, 108, 226, 20),
    ...[[44, 60], [76, 40], [108, 76], [140, 30], [172, 86], [204, 50]].map(([x, h]) => ({ t:'r', x, y:108 - h, w:20, h, f:h < 64 ? 'yesil' : 'gri' })),
    { t:'l', d:'M30 44 L230 44', w:2, k:'kirmizi', kesik:true }, { t:'y', x:206, y:38, m:'eşik', b:11 },
    ...kutu(90, 22, 112, 'altı: bedava yemek', 10) ] },
  aftermath: { boy: 134, alt: 'Selin ardından gönüllüler evlerden ve okullardan çamuru temizlemek için haftalarca çalıştı.', o: [
    { t:'r', x:0, y:104, w:240, h:30, f:'#8B6A4A' },
    ...ev(20, 70, 'pembe'), ...ev(56, 74, 'sari'), { t:'l', d:'M20 82 L78 82', w:2, k:'#8B6A4A' },
    kis(130, 104, .9, 'turuncu', 'ileri'), { t:'l', d:'M142 88 L160 104', w:2.4, k:'agac' }, { t:'p', d:'M156 102 L168 108 L162 114 Z', f:'gri' },
    kis(196, 104, .9, 'su', 'tasi'), { t:'r', x:182, y:80, w:28, h:12, rx:2, f:'#8B6A4A' },
    ...kutu(150, 30, 92, 'selden sonra', 11) ] },
  array: { boy: 134, alt: 'Mercan resifleri, çoğu başka hiçbir yerde bulunmayan dikkat çekici çeşitlilikte balığı barındırır.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#7FD0EA' }, { t:'r', x:4, y:108, w:232, h:20, f:'#E8D2A0' },
    ...[[30, 'pembe'], [70, 'turuncu'], [190, 'koyu'], [220, 'pembe']].map(([x, k]) => ({ t:'l', d:`M${x} 110 Q${x - 10} 90 ${x - 4} 76 M${x} 110 Q${x + 10} 88 ${x + 6} 72`, w:4, k })),
    ...balik(110, 40, 'sari'), ...balik(160, 56, '#FF8A4C'), ...balik(120, 80, '#4FBDF2'), ...balik(60, 50, '#C9A6FF'), ...balik(200, 34, '#7EDB57'),
    ...kutu(140, 116, 82, 'çok çeşitli', 10) ] },
  cluster: { boy: 134, alt: 'Doktorlar fabrikanın yakınında yaşayanlarda olağandışı bir solunum sorunu yığılması fark etti.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#EEFFDD' },
    { t:'r', x:100, y:52, w:40, h:30, f:'gri' }, { t:'r', x:126, y:30, w:8, h:22, f:'#8E939C' }, ...[[134, 22, 6], [142, 14, 7]].map(([x, y, r]) => ({ t:'c', x, y, r, f:'#C9CED6' })),
    ...[[90, 50], [96, 92], [150, 90], [156, 48], [84, 70], [160, 70], [110, 98], [132, 100], [100, 40]].map(([x, y]) => ({ t:'c', x, y, r:3.4, f:'kirmizi' })),
    ...[[30, 30], [210, 110], [20, 110]].map(([x, y]) => ({ t:'c', x, y, r:3.4, f:'kirmizi' })),
    { t:'l', d:'M70 70 a50 40 0 1 0 100 0 a50 40 0 1 0 -100 0', w:1.4, k:'vurgu', kesik:true },
    ...kutu(196, 30, 58, 'yığılma', 10) ] },
  embargo: { boy: 134, alt: 'Kötü hasattan sonra hükümet tahıl ihracatına yasak getirdi.', o: [
    { t:'r', x:0, y:96, w:150, h:38, f:'tas' }, { t:'r', x:150, y:96, w:90, h:38, f:'su' }, dalga(110, 150, 240),
    ...[[20, 74], [44, 74], [32, 54]].map(([x, y]) => ({ t:'r', x, y, w:22, h:22, rx:6, f:'#F2D06B' })),
    { t:'p', d:'M176 96 L226 96 L220 106 L182 106 Z', f:'kirmizi' },
    { t:'l', d:'M100 60 L100 96', w:3, k:'gri' }, { t:'r', x:72, y:56, w:56, h:12, f:'#FFFFFF' }, ...[72, 88, 104, 120].map(x => ({ t:'r', x, y:56, w:8, h:12, f:'kirmizi' })),
    ...kutu(110, 30, 110, 'ihracat yasak', 11), { t:'y', x:44, y:122, m:'tahıl', b:11 } ] },
  interval: { boy: 134, alt: 'Gün boyunca düzenli aralıklarla kan örneği alındı.', o: [
    { t:'l', d:'M20 70 L226 70', w:2 },
    ...['08', '12', '16', '20'].flatMap((m, i) => [{ t:'c', x:40 + i * 56, y:70, r:5, f:'vurgu' }, { t:'y', x:40 + i * 56, y:56, m:`${m}:00`, b:10 },
      { t:'p', d:`M${34 + i * 56} 82 L${46 + i * 56} 82 L${46 + i * 56} 110 Q${40 + i * 56} 118 ${34 + i * 56} 110 Z`, f:'#C0392B' }]),
    { t:'l', d:'M40 36 L96 36 M96 32 l0 8 M40 32 l0 8', w:1.4, k:'vurgu' }, { t:'y', x:68, y:30, m:'4 saat', b:10 },
    ...kutu(170, 30, 110, 'düzenli aralıklar', 10) ] },
  malfunction: { boy: 134, alt: 'Soğutma sistemindeki bir arıza mühendisleri reaktörü denetim için kapatmaya zorladı.', o: [
    { t:'r', x:20, y:30, w:120, h:84, rx:6, f:'#D7DBE2' }, { t:'c', x:60, y:72, r:22, f:'#FFFFFF' },
    { t:'l', d:'M60 72 L60 52 M60 72 L78 82 M60 72 L42 82', w:3, k:'gri' }, { t:'l', d:'M44 56 L76 88 M76 56 L44 88', w:3, k:'kirmizi' },
    { t:'c', x:116, y:46, r:8, f:'kirmizi' }, { t:'l', d:'M116 30 l0 -6 M104 34 l-4 -4 M128 34 l4 -4', w:1.4, k:'kirmizi' },
    { t:'r', x:104, y:80, w:24, h:24, rx:3, f:'#4B4B52' }, { t:'r', x:110, y:86, w:12, h:8, f:'kirmizi' },
    { t:'r', x:166, y:40, w:10, h:52, rx:5, f:'#FFFFFF' }, { t:'r', x:168, y:46, w:6, h:46, f:'kirmizi' }, { t:'c', x:171, y:96, r:7, f:'kirmizi' },
    ...kutu(200, 116, 60, 'kapatıldı', 10), ...kutu(80, 20, 56, 'arıza', 11) ] },
  niche: { boy: 134, alt: 'Adalardaki her ispinoz türü biraz farklı bir ekolojik niş kaplar.', o: [
    ...ispinoz(40, 70, 'M54 64 l8 2 l-8 6 Z', '#B9A08A'), { t:'c', x:62, y:96, r:3, f:'#8B6A3A' }, { t:'c', x:70, y:98, r:3, f:'#8B6A3A' }, { t:'y', x:46, y:116, m:'tohum', b:10 },
    ...ispinoz(120, 70, 'M134 64 l10 1 l-10 2 Z', '#C9B79A'), { t:'e', x:150, y:96, rx:4, ry:2, f:'#4B4B52' }, { t:'y', x:126, y:116, m:'böcek', b:10 },
    ...ispinoz(196, 70, 'M210 64 l18 2 l-18 2 Z', '#A8B490'), { t:'c', x:226, y:92, r:6, f:'pembe' }, { t:'y', x:204, y:116, m:'çiçek', b:10 },
    { t:'y', x:120, y:28, m:'her türe bir niş', b:12 } ] },
  remnant: { boy: 134, alt: 'Özgün ormanın küçük kalıntıları yalnızca tarım yapılamayacak kadar dik yamaçlarda kaldı.', o: [
    { t:'p', d:'M0 134 L0 90 L60 90 L120 30 L160 30 L240 100 L240 134 Z', f:'#E8D9A0' },
    { t:'l', d:'M6 96 L56 96 M6 104 L60 104 M6 112 L66 112 M170 50 L230 104', w:1, k:'#C9A400' },
    { t:'p', d:'M60 90 L120 30 L132 30 L72 90 Z', f:'#4E9E34' },
    ...[[74, 72], [88, 58], [102, 44], [116, 32]].map(([x, y]) => ({ t:'c', x, y, r:7, f:'#3E8A2E' })),
    ...kutu(196, 30, 76, 'kalan orman', 10), { t:'y', x:40, y:126, m:'tarla', b:10 }, { t:'y', x:110, y:110, m:'dik yamaç', b:10 } ] },
  venue: { boy: 134, alt: 'Kayıtlar beklentiyi aşınca konferans daha büyük bir mekâna taşındı.', o: [
    { t:'r', x:10, y:60, w:60, h:50, f:'#F3E6C8' }, { t:'p', d:'M6 60 L40 44 L74 60 Z', f:'kirmizi' },
    ...[[20, 112], [34, 116], [48, 112], [62, 116], [76, 112], [90, 116]].map(([x, y]) => kis(x, y, .4)),
    okt(100, 84, 26),
    { t:'r', x:140, y:40, w:96, h:76, f:'#F0E6FF' }, { t:'p', d:'M134 40 L188 18 L242 40 Z', f:'su' }, { t:'r', x:176, y:84, w:24, h:32, f:'agac' },
    { t:'y', x:40, y:36, m:'küçük', b:11 }, ...kutu(188, 64, 72, 'büyük mekân', 10) ] },
  pulse: { boy: 134, alt: 'Hemşire nabzını ölçtü ve olağandışı hızlı olduğunu gördü.', o: [
    { t:'p', d:'M20 70 L150 70 Q164 70 164 82 Q164 94 150 94 L20 94 Z', f:'ten' },
    { t:'e', x:110, y:68, rx:10, ry:6, f:'ten' }, { t:'e', x:126, y:68, rx:10, ry:6, f:'ten' },
    { t:'l', d:'M20 40 L50 40 L56 26 L62 52 L68 32 L72 40 L90 40 L96 26 L102 52 L108 32 L112 40 L140 40', w:2, k:'kirmizi' },
    { t:'r', x:176, y:40, w:54, h:40, rx:6, f:'#20304A' }, { t:'y', x:203, y:66, m:'120', b:16 },
    ...kutu(203, 104, 60, 'çok hızlı', 11) ] },
  spine: { boy: 134, alt: 'Uzun süre kötü duruşla oturmak omurgaya fazladan yük bindirebilir.', o: [
    ...iki(),
    { t:'r', x:20, y:96, w:40, h:8, rx:2, f:'agac' }, { t:'p', d:'M66 30 Q46 60 58 96 L66 96 Q54 60 74 30 Z', f:'ten' },
    ...[34, 46, 58, 70, 82].map((y, i) => ({ t:'c', x:[66, 60, 56, 56, 60][i], y, r:3.4, f:'kirmizi' })),
    { t:'c', x:76, y:24, r:10, f:'ten' },
    { t:'r', x:146, y:96, w:40, h:8, rx:2, f:'agac' }, { t:'r', x:182, y:26, w:8, h:70, f:'ten' },
    ...[34, 46, 58, 70, 82].map(y => ({ t:'c', x:186, y, r:3.4, f:'yesil' })), { t:'c', x:186, y:18, r:10, f:'ten' },
    { t:'y', x:59, y:120, m:'kambur: yük', b:11 }, { t:'y', x:181, y:120, m:'dik: rahat', b:11 } ] },
  galaxy: { boy: 134, alt: 'Uzak bir gökadadan gelen ışık Dünya’ya ulaşmadan önce milyarlarca yıl yol almış olabilir.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#1F2347' },
    { t:'e', x:58, y:62, rx:42, ry:16, f:'#3B3570' }, { t:'l', d:'M58 62 Q76 40 100 56 M58 62 Q40 84 16 68', w:4, k:'#D88BE8' }, { t:'c', x:58, y:62, r:7, f:'#FFF3C4' },
    ...[[30, 30], [92, 92], [26, 96], [96, 30]].map(([x, y]) => ({ t:'c', x, y, r:1.6, f:'sari' })),
    { t:'l', d:'M90 66 L192 90', w:1.6, k:'sari', kesik:true },
    { t:'c', x:204, y:94, r:12, f:'su' }, { t:'p', d:'M198 90 Q204 84 210 90 Q206 98 200 96 Z', f:'yesil' },
    ...kutu(150, 30, 104, 'milyarlarca yıl', 10) ] },

  // ---- fiiller ----
  oxidise: { boy: 134, alt: 'Demir hem suyla hem oksijenle karşılaşınca oksitlenir ve pas denen kırmızımsı katmanı oluşturur.', o: [
    { t:'r', x:12, y:60, w:40, h:8, rx:2, f:'gri' }, { t:'y', x:32, y:88, m:'demir', b:10 },
    { t:'y', x:62, y:70, m:'+', b:16 }, { t:'p', d:'M82 52 q-8 12 0 18 q8 -6 0 -18 Z', f:'su' }, { t:'y', x:82, y:88, m:'su', b:10 },
    { t:'y', x:102, y:70, m:'+', b:16 }, { t:'c', x:124, y:62, r:10, f:'#FFFFFF' }, { t:'y', x:124, y:67, m:'O₂', b:10 },
    okt(144, 64, 20),
    { t:'r', x:176, y:60, w:50, h:8, rx:2, f:'#B5651D' }, ...[[184, 58], [200, 70], [214, 58]].map(([x, y]) => ({ t:'e', x, y, rx:4, ry:2.4, f:'#8B3A1A' })),
    { t:'y', x:200, y:88, m:'pas', b:12 }, { t:'y', x:120, y:24, m:'oksitlenme', b:13 } ] },
  nourish: { boy: 134, alt: 'Düşen yapraklar çürür ve ağaçların altındaki toprağı besler.', o: [
    { t:'l', d:'M120 84 L120 30', w:6, k:'agac' }, { t:'c', x:120, y:24, r:22, f:'#4E9E34' },
    { t:'r', x:0, y:84, w:240, h:12, f:'#C9946A' }, ...[[40, 86], [70, 88], [170, 86], [200, 88]].map(([x, y]) => ({ t:'e', x, y, rx:9, ry:4, f:'#E8A23A' })),
    { t:'r', x:0, y:96, w:240, h:38, f:'#6B4430' },
    { t:'l', d:'M120 96 L104 120 M120 96 L136 122 M120 96 L120 126', w:1.6, k:'#C9946A' },
    { t:'l', d:'M44 96 L44 110 M40 106 l4 4 l4 -4 M196 96 L196 110 M192 106 l4 4 l4 -4', w:1.6, k:'yesil' },
    ...kutu(196, 40, 78, 'toprağı besler', 10) ] },
  overhaul: { boy: 134, alt: 'Şehir yolculuk sürelerini kısaltmak için otobüs ağını baştan düzenlemeyi planlıyor.', o: [
    ...iki(),
    { t:'l', d:'M14 40 Q60 90 40 60 T100 110 M20 110 Q80 20 104 70 M30 30 Q90 60 70 110', w:2, k:'kirmizi' },
    { t:'l', d:'M136 60 L226 60 M136 92 L226 92 M160 30 L160 116 M204 30 L204 116', w:2.4, k:'yesil' },
    { t:'y', x:59, y:24, m:'önce: 50 dk', b:11 }, { t:'y', x:181, y:24, m:'sonra: 30 dk', b:11 } ] },
  deplete: { boy: 134, alt: 'Yıllarca aşırı avlanma Kuzey Atlantik’in bazı yerlerinde morina stoklarını tüketti.', o: [
    eksen(30, 108, 226, 20),
    ...[[44, 6], [86, 4], [128, 2], [170, 1]].flatMap(([x, n], i) => Array.from({ length: n }, (_, j) => balik(x + 14, 96 - j * 16, '#9FB8A0')).flat()),
    { t:'y', x:58, y:124, m:'1990', b:10 }, { t:'y', x:100, y:124, m:'2000', b:10 }, { t:'y', x:142, y:124, m:'2010', b:10 }, { t:'y', x:184, y:124, m:'bugün', b:10 },
    ...kutu(170, 30, 86, 'stok tükendi', 10) ] },
  calibrate: { boy: 134, alt: 'Laboratuvar teraziler okumaları doğru kalsın diye düzenli olarak ayarlanmalı.', o: [
    { t:'r', x:40, y:70, w:110, h:40, rx:6, f:'#D7DBE2' }, { t:'r', x:60, y:62, w:70, h:8, rx:2, f:'gri' },
    { t:'r', x:70, y:82, w:50, h:18, rx:3, f:'#20304A' }, { t:'y', x:95, y:96, m:'100,0 g', b:10 },
    { t:'p', d:'M82 62 L84 44 L106 44 L108 62 Z', f:'#A8AEB8' }, { t:'y', x:95, y:57, m:'100 g', b:8 },
    { t:'l', d:'M176 50 L206 80', w:5, k:'gri' }, { t:'c', x:172, y:46, r:7, f:'yok' },
    { t:'c', x:200, y:104, r:10, f:'yesil' }, { t:'y', x:200, y:109, m:'✓', b:12 },
    ...kutu(95, 30, 56, 'ayarlı', 11) ] },
  generate: { boy: 134, alt: 'Kıyı açıklarındaki rüzgâr çiftlikleri ülke elektriğinin giderek büyüyen bir payını üretiyor.', o: [
    { t:'r', x:0, y:80, w:150, h:54, f:'su' }, dalga(92, 0, 150),
    ...turbin(30, 36), ...turbin(70, 30), ...turbin(110, 36),
    { t:'l', d:'M110 80 Q140 110 170 84', w:2, k:'#4B4B52' },
    { t:'r', x:150, y:80, w:90, h:54, f:'#C9E7A8' }, ...ev(170, 56, 'pembe'), ...ev(200, 60, 'sari'),
    { t:'p', d:'M212 22 L204 36 L212 36 L206 48 L220 32 L212 32 L218 22 Z', f:'sari' },
    ...kutu(80, 120, 66, 'elektrik', 10) ] },
  amass: { boy: 134, alt: 'Araştırmacılar yirmi yıl boyunca bölgeden büyük bir toprak örneği koleksiyonu biriktirdi.', o: [
    { t:'r', x:14, y:16, w:150, h:104, f:'#E8E2D4' }, { t:'l', d:'M14 50 L164 50 M14 84 L164 84 M14 118 L164 118', w:2, k:'agac' },
    ...[0, 1, 2].flatMap(r => Array.from({ length: 8 }, (_, i) => ({ t:'r', x:20 + i * 18, y:26 + r * 34, w:12, h:22, rx:3, f:['#8B6A4A', '#C9946A', '#6B4430', '#B5823A'][(i + r) % 4] }))),
    ...kutu(200, 50, 54, '20 yıl', 11), ...kutu(200, 90, 70, 'toprak', 11) ] },
  negotiate: { boy: 134, alt: 'Sendika temsilcileri çalışma saatleri konusunda işverenlerle müzakere ediyor.', o: [
    { t:'r', x:40, y:88, w:160, h:10, rx:3, f:'agac' }, { t:'l', d:'M50 98 L50 120 M190 98 L190 120', w:2, k:'agac' },
    kis(60, 88, 1, 'kirmizi', 'ileri'), kis(90, 88, 1, 'kirmizi'), kis(150, 88, 1, '#2F4E8C'), kis(180, 88, 1, '#2F4E8C'),
    ...balon(76, 30, 60, '40 saat', 11), ...balon(166, 30, 60, '45 saat', 11),
    { t:'y', x:76, y:128, m:'sendika', b:10 }, { t:'y', x:166, y:128, m:'işveren', b:10 } ] },

  // ---- sıfatlar ----
  devoid: { boy: 134, alt: 'Çöl toprağında neredeyse hiç besin yoktu, bu yüzden çok az bitki yaşayabiliyordu.', o: [
    ...iki(),
    { t:'r', x:4, y:70, w:110, h:58, f:'#6B4430' }, ...[[20, 86], [40, 100], [62, 84], [84, 104], [98, 88], [30, 116], [72, 118]].map(([x, y]) => ({ t:'c', x, y, r:3, f:'yesil' })),
    ...[[30, 70], [60, 70], [90, 70]].map(([x, y]) => ({ t:'l', d:`M${x} ${y} l0 -14 M${x} ${y - 8} l-6 -4 M${x} ${y - 10} l6 -4`, w:2, k:'#4E9E34' })),
    { t:'r', x:126, y:70, w:110, h:58, f:'#E3C48A' }, { t:'c', x:200, y:104, r:3, f:'yesil' }, { t:'l', d:'M170 70 l0 -8', w:2, k:'#8B8B4E' },
    { t:'y', x:59, y:28, m:'verimli', b:12 }, { t:'y', x:181, y:28, m:'çöl: besinsiz', b:11 } ] },
  conspicuous: { boy: 134, alt: 'Kent merkezindeki en göze çarpan değişiklik arabaların yokluğu.', o: [
    { t:'r', x:0, y:90, w:240, h:44, f:'yol' },
    ...[[10, 40, 30, 50], [44, 30, 26, 60], [180, 36, 24, 54], [208, 26, 28, 64]].map(([x, y, w, h]) => ({ t:'r', x, y, w, h, f:'#E8E2D4' })),
    kis(90, 116, .7, 'pembe'), kis(130, 112, .7, 'su'), { t:'c', x:160, y:120, r:6, f:'yok' }, { t:'c', x:178, y:120, r:6, f:'yok' }, { t:'l', d:'M160 120 L168 110 L178 120 M168 110 L176 110', w:1.6 },
    { t:'r', x:76, y:64, w:24, h:12, rx:3, f:'#FFFFFF' }, { t:'l', d:'M70 58 L106 82 M106 58 L70 82', w:2.4, k:'kirmizi' },
    ...kutu(120, 30, 76, 'araba yok!', 12) ] },
  affluent: { boy: 134, alt: 'Varlıklı ailelerin çocukları özel derse çoğu zaman daha kolay ulaşır.', o: [
    { t:'r', x:40, y:50, w:160, h:70, f:'#F3E6C8' }, { t:'p', d:'M30 50 L120 20 L210 50 Z', f:'kirmizi' }, { t:'l', d:'M60 56 L60 120 M180 56 L180 120', w:3, k:'#FFFFFF' },
    { t:'r', x:84, y:90, w:72, h:6, f:'agac' }, kis(100, 90, .8, 'sari', 'ileri'), kis(140, 90, .8, '#2F4E8C', 'bas'), { t:'r', x:110, y:82, w:16, h:8, f:'#FFFFFF' },
    ...kutu(120, 116, 64, 'özel ders', 10), ...kutu(200, 22, 50, 'varlıklı', 9) ] },
  frugal: { boy: 134, alt: 'Fiyatlar ücretlerden hızlı yükselince haneler daha tutumlu olmaya başlar.', o: [
    { t:'r', x:20, y:30, w:70, h:90, rx:3, f:'#FFFFFF' }, { t:'y', x:55, y:46, m:'liste', b:11 }, { t:'y', x:55, y:66, m:'ekmek', b:10 }, { t:'y', x:55, y:82, m:'süt', b:10 },
    { t:'l', d:'M36 96 L76 96 M36 108 L70 108', w:1.6, k:'kirmizi' },
    { t:'r', x:120, y:70, w:56, h:36, rx:6, f:'kahve' }, { t:'c', x:148, y:88, r:6, f:'#E8C15A' },
    { t:'p', d:'M190 40 L220 40 L226 50 L220 60 L190 60 Z', f:'sari' }, { t:'y', x:205, y:54, m:'₺↑', b:11 },
    ...kutu(150, 124, 70, 'tutumlu', 11) ] },
};
