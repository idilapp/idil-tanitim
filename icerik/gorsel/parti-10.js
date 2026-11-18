// Kelime kartı görselleri · 10. parti (18 Kasım 2026): 50 kart. Tarz v11; her sahne kartın kendi örnek cümlesini anlatır.
// Çizimler özgün.
import { ev, dalga, bardak, okt, balon, iki, kutu, balik, at } from './parca.js';

const kis = (x, y, s, f, kol) => ({ t:'k', x, y, s, f, kol });
const altigen = (x, y, r, f) => ({ t:'p', d:'M' + [0, 1, 2, 3, 4, 5].map(i => `${+(x + r * Math.cos(i * Math.PI / 3)).toFixed(1)} ${+(y + r * Math.sin(i * Math.PI / 3)).toFixed(1)}`).join(' L') + ' Z', f });
const kelebek = (x, y, f) => [{ t:'e', x:x - 6, y:y - 3, rx:6, ry:5, f }, { t:'e', x:x + 6, y:y - 3, rx:6, ry:5, f }, { t:'e', x:x - 5, y:y + 4, rx:4, ry:3.5, f }, { t:'e', x:x + 5, y:y + 4, rx:4, ry:3.5, f },
  { t:'l', d:`M${x} ${y - 7} L${x} ${y + 7}`, w:2 }, { t:'c', x, y:y - 8, r:1.6, f:'kirmizi' }, { t:'r', x:x - 8, y:y + 11, w:16, h:4, f:'#FFFFFF' }];
const bocek = (x, y, f) => [{ t:'l', d:`M${x - 5} ${y - 4} l-5 -3 M${x - 5} ${y} l-6 0 M${x - 5} ${y + 4} l-5 3 M${x + 5} ${y - 4} l5 -3 M${x + 5} ${y} l6 0 M${x + 5} ${y + 4} l5 3`, w:1 },
  { t:'e', x, y, rx:6, ry:8, f }, { t:'c', x, y:y - 9, r:3.5, f }, { t:'l', d:`M${x} ${y - 2} L${x} ${y + 8}`, w:1 }, { t:'c', x, y:y - 10, r:1.6, f:'kirmizi' }, { t:'r', x:x - 8, y:y + 11, w:16, h:4, f:'#FFFFFF' }];
const kalp = (x, y, k = 1) => ({ t:'p', d:`M${x} ${y + 50 * k} C${x - 48 * k} ${y + 20 * k} ${x - 34 * k} ${y - 20 * k} ${x - 10 * k} ${y - 12 * k} Q${x - 2 * k} ${y - 8 * k} ${x} ${y} Q${x + 2 * k} ${y - 8 * k} ${x + 10 * k} ${y - 12 * k} C${x + 34 * k} ${y - 20 * k} ${x + 48 * k} ${y + 20 * k} ${x} ${y + 50 * k} Z`, f:'kirmizi' });
const zar = (x, y) => [{ t:'r', x, y, w:52, h:52, rx:9, f:'#FFFFFF' }, ...[[14, 12], [14, 26], [14, 40], [38, 12], [38, 26], [38, 40]].map(([a, b]) => ({ t:'c', x:x + a, y:y + b, r:4.5, f:'#4B2E5E' }))];
const kemik = (x0, gozenek) => [
  ...[[22, 54], [22, 76], [88, 54], [88, 76]].map(([a, b]) => ({ t:'c', x:x0 + a, y:b, r:10, f:'#FFF7E6' })), { t:'r', x:x0 + 22, y:56, w:66, h:18, f:'#FFF7E6' },
  ...(gozenek ? [...[[36, 62], [48, 68], [62, 61], [74, 69], [84, 62], [20, 60], [90, 72]].map(([a, b]) => ({ t:'e', x:x0 + a, y:b, rx:3, ry:2.2, f:'#D9C2A6' })),
    { t:'l', d:`M${x0 + 56} 56 l4 6 l-6 4 l5 8`, w:2, k:'kirmizi' }] : []) ];
const sandalye = (x, y, f) => [{ t:'l', d:`M${x} ${y} L${x} ${y + 26} M${x + 30} ${y} L${x + 30} ${y + 26} M${x} ${y} L${x} ${y - 30} M${x + 6} ${y - 30} L${x + 6} ${y}`, w:3, k:f },
  { t:'r', x:x - 2, y:y - 4, w:34, h:6, rx:2, f }, { t:'r', x:x - 2, y:y - 34, w:10, h:6, rx:2, f }];
const kamyonet = (x, f) => [{ t:'r', x, y:72, w:48, h:34, rx:3, f:'#FFFFFF' }, { t:'p', d:`M${x + 48} 82 L${x + 60} 82 L${x + 68} 94 L${x + 68} 106 L${x + 48} 106 Z`, f },
  { t:'p', d:`M${x + 51} 85 L${x + 59} 85 L${x + 64} 93 L${x + 51} 93 Z`, f:'buz' }, { t:'c', x:x + 12, y:108, r:6, f:'#4B4B52' }, { t:'c', x:x + 56, y:108, r:6, f:'#4B4B52' }];
const sabitBisiklet = (x) => [{ t:'l', d:`M${x - 24} 118 L${x + 26} 118`, w:4, k:'#4B4B52' }, { t:'c', x:x + 16, y:106, r:10, f:'gri' },
  { t:'l', d:`M${x - 14} 118 L${x - 6} 94 L${x + 16} 106 M${x - 6} 94 L${x + 18} 82 L${x + 24} 80`, w:3, k:'#6B7280' }, { t:'r', x:x - 14, y:88, w:14, h:5, rx:2, f:'#4B4B52' }];
const inek = (x, y) => [{ t:'l', d:`M${x - 6} ${y + 4} l0 7 M${x + 6} ${y + 4} l0 7`, w:1.6 }, { t:'e', x, y, rx:10, ry:6, f:'#FFFFFF' }, { t:'c', x:x - 3, y:y - 1, r:2.4, f:'#4B4B52' },
  { t:'c', x:x + 11, y:y - 3, r:4.5, f:'#FFFFFF' }];
const perde = (x0, f) => [{ t:'r', x:x0 + 16, y:30, w:78, h:72, f:'buz' }, { t:'c', x:x0 + 55, y:52, r:8, f:'sari' }, { t:'l', d:`M${x0 + 16} 26 L${x0 + 94} 26`, w:3, k:'agac' },
  { t:'p', d:`M${x0 + 16} 28 L${x0 + 40} 28 Q${x0 + 34} 66 ${x0 + 42} 102 L${x0 + 16} 102 Z`, f }, { t:'p', d:`M${x0 + 94} 28 L${x0 + 70} 28 Q${x0 + 76} 66 ${x0 + 68} 102 L${x0 + 94} 102 Z`, f }];

export default {
  // ---- isimler ----
  hybrid: { boy: 134, alt: 'Katır, at ile eşeğin melezidir; dağ çiftliklerinde güçlü ve sağlam adımlı olduğu için değerlidir.', o: [
    ...at(28, 88, '#9B6B47', 6, true), { t:'y', x:76, y:86, m:'+', b:22 },
    ...at(104, 88, '#A8A29A', 14), { t:'y', x:152, y:86, m:'=', b:22 },
    ...at(180, 88, '#8A6A50', 11, true),
    { t:'y', x:36, y:128, m:'at', b:12 }, { t:'y', x:112, y:128, m:'eşek', b:12 }, { t:'y', x:190, y:128, m:'katır', b:13 },
    { t:'y', x:120, y:26, m:'melez', b:14 } ] },
  perspective: { boy: 134, alt: 'Öğretmen perspektifin uzun bir yolu uzaklaştıkça daralıyormuş gibi gösterdiğini anlattı.', o: [
    { t:'r', x:10, y:10, w:220, h:116, rx:3, f:'#FFFFFF' }, { t:'r', x:10, y:10, w:220, h:44, f:'#E3F4FF' }, { t:'r', x:10, y:54, w:220, h:72, f:'#C9E7A8' },
    { t:'p', d:'M50 126 L190 126 L122 54 L118 54 Z', f:'#B8BCC4' },
    { t:'l', d:'M120 122 L120 110 M120 100 L120 90 M120 82 L120 74 M120 68 L120 62', w:1.6, k:'beyaz' },
    ...[[40, 112, 13], [76, 84, 8], [96, 68, 5], [200, 112, 13], [164, 84, 8], [144, 68, 5]].flatMap(([x, y, r]) => [{ t:'l', d:`M${x} ${y} l0 ${-r}`, w:Math.max(1, r / 5), k:'agac' }, { t:'c', x, y:y - r * 1.8, r, f:'#4E9E34' }]),
    { t:'l', d:'M40 78 L120 54 M200 78 L120 54', w:1, k:'vurgu', kesik:true }, { t:'c', x:120, y:54, r:3, f:'vurgu' },
    ...kutu(180, 30, 86, 'kaçış noktası', 10), { t:'l', d:'M146 36 L124 50', w:1.2 }, { t:'y', x:60, y:34, m:'perspektif', b:13 } ] },
  hoax: { boy: 134, alt: 'Şehir kanalındaki dev balık fotoğrafı, düzenleme programıyla yapılmış bir şaka çıktı.', o: [
    { t:'r', x:8, y:12, w:150, h:104, rx:4, f:'#FFFFFF' }, { t:'r', x:14, y:18, w:138, h:92, f:'buz' },
    { t:'r', x:20, y:38, w:24, h:26, f:'pembe' }, { t:'r', x:48, y:30, w:22, h:34, f:'sari' }, { t:'r', x:118, y:40, w:28, h:24, f:'kraft' },
    { t:'r', x:14, y:64, w:138, h:6, f:'tas' }, { t:'r', x:14, y:70, w:138, h:40, f:'su' },
    { t:'p', d:'M40 84 L24 72 L24 96 Z', f:'#7FA6C9' }, { t:'p', d:'M40 84 Q86 58 134 84 Q86 106 40 84 Z', f:'#7FA6C9' }, { t:'c', x:120, y:80, r:2.4, f:'#4B2E5E' },
    { t:'l', d:'M20 60 L140 60 L140 106 L20 106 Z', w:1.4, k:'vurgu', kesik:true }, { t:'k', x:146, y:64, s:.45 },
    { t:'r', x:166, y:40, w:66, h:30, rx:4, f:'#FFE0E0' }, { t:'l', d:'M166 40 L232 40 L232 70 L166 70 Z', w:2, k:'kirmizi' }, { t:'y', x:199, y:61, m:'SAHTE', b:15 },
    { t:'y', x:199, y:94, m:'düzenlenmiş', b:11 }, { t:'y', x:199, y:108, m:'fotoğraf', b:11 } ] },
  analogy: { boy: 134, alt: 'Öğretmenler kanın vücutta nasıl dolaştığını anlatmak için kalbi pompaya benzetir.', o: [
    kalp(54, 52, .9), { t:'y', x:54, y:124, m:'kalp', b:13 },
    { t:'y', x:120, y:84, m:'=', b:24 }, { t:'y', x:120, y:102, m:'gibi', b:11 },
    { t:'r', x:146, y:94, w:60, h:8, rx:2, f:'#6B7280' }, { t:'r', x:152, y:54, w:48, h:40, rx:6, f:'gri' }, { t:'c', x:176, y:74, r:12, f:'#E8E8EC' },
    { t:'l', d:'M176 66 L176 82 M168 74 L184 74', w:1.4 },
    { t:'l', d:'M132 84 L152 84 M200 62 L222 62 L222 38', w:4, k:'su' }, { t:'l', d:'M216 44 L222 36 L228 44', w:2, k:'su' },
    { t:'y', x:176, y:124, m:'pompa', b:13 }, { t:'y', x:120, y:26, m:'benzetme', b:14 } ] },
  hazard: { boy: 134, alt: 'Hastanelerde ıslak zemin, özellikle yaşlı hastalar için ciddi bir tehlikedir.', o: [
    { t:'r', x:0, y:100, w:240, h:34, f:'#E3EEF0' }, { t:'e', x:112, y:114, rx:42, ry:7, f:'#BFE6F7' }, { t:'l', d:'M90 112 l12 0 M120 116 l14 0', w:1.4, k:'beyaz' },
    { t:'k', x:60, y:112, s:1, f:'gri', yuz:'sasir' }, { t:'l', d:'M72 92 L76 112', w:2.2, k:'agac' }, { t:'l', d:'M48 118 q6 4 12 0', w:1.4, k:'su' },
    { t:'l', d:'M160 112 L166 120 M190 112 L184 120', w:2, k:'#C9A400' },
    { t:'p', d:'M150 112 L162 62 L178 62 L190 112 Z', f:'sari' }, { t:'y', x:170, y:100, m:'!', b:24 },
    ...kutu(120, 30, 102, 'ıslak zemin: tehlike', 11) ] },
  hierarchy: { boy: 134, alt: 'Geleneksel şirketlerde kararlar katı bir yönetici hiyerarşisinden yavaşça geçer.', o: [
    ...[0, 1, 2, 3].flatMap(i => [{ t:'l', d:`M${80 - (i + 1) * 15} ${36 + i * 24} L${80 + (i + 1) * 15} ${36 + i * 24}`, w:1.6, k:'agac' },
      ...Array.from({ length: i + 1 }, (_, j) => kis(80 + (j - i / 2) * 26, 36 + i * 24, .45))]),
    { t:'l', d:'M152 110 L134 88 L152 64 L134 42 L104 26', w:1.4, k:'vurgu', kesik:true }, { t:'r', x:146, y:100, w:12, h:14, rx:1, f:'#FFFFFF' },
    { t:'c', x:198, y:96, r:10, f:'#E0B07A' }, { t:'l', d:'M198 96 m-5 0 a5 5 0 1 1 5 5', w:1.2, k:'agac' },
    { t:'p', d:'M182 106 L218 106 Q220 98 214 98 L210 102 L188 102 Z', f:'#C9E7A8' }, { t:'l', d:'M212 98 l-2 -8 M216 98 l2 -8', w:1.2 },
    { t:'y', x:200, y:76, m:'yavaş', b:13 }, { t:'y', x:196, y:32, m:'hiyerarşi', b:13 } ] },
  apparatus: { boy: 134, alt: 'İlk dalgıçlar su altında kalma süresini kısıtlayan ağır solunum aygıtlarına bağlıydı.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#7FC4E8' }, { t:'r', x:4, y:6, w:232, h:16, f:'#BFE6F7' }, { t:'r', x:4, y:118, w:232, h:10, f:'#E8D2A0' },
    { t:'p', d:'M150 12 L212 12 L204 24 L158 24 Z', f:'kirmizi' }, { t:'l', d:'M172 24 Q150 64 106 54', w:2.4, k:'#4B4B52' },
    { t:'r', x:82, y:100, w:10, h:16, f:'#C9B48A' }, { t:'r', x:98, y:100, w:10, h:16, f:'#C9B48A' },
    { t:'r', x:80, y:114, w:14, h:8, rx:2, f:'#4B4B52' }, { t:'r', x:96, y:114, w:14, h:8, rx:2, f:'#4B4B52' },
    { t:'r', x:80, y:62, w:30, h:42, rx:8, f:'#C9B48A' }, { t:'l', d:'M80 70 L70 88 M110 70 L120 88', w:3, k:'#C9B48A' },
    { t:'c', x:95, y:50, r:16, f:'#C9A060' }, { t:'c', x:95, y:50, r:7, f:'buz' }, ...[[83, 42], [107, 42], [83, 58], [107, 58]].map(([x, y]) => ({ t:'c', x, y, r:1.6, f:'#8B6A3A' })),
    { t:'c', x:104, y:28, r:2.4, f:'beyaz' }, { t:'c', x:108, y:20, r:1.8, f:'beyaz' },
    ...balik(196, 90, 'sari'), ...kutu(46, 40, 72, 'ağır aygıt', 11) ] },
  expedition: { boy: 134, alt: 'Keşif ekibi Antarktika’nın içlerinde üç ay boyunca buz örnekleri topladı.', o: [
    { t:'p', d:'M4 82 L40 52 L80 76 L130 44 L180 78 L220 56 L236 66 L236 86 L4 86 Z', f:'#C4D4E4' },
    { t:'p', d:'M0 134 L0 80 Q60 72 120 78 Q180 86 240 74 L240 134 Z', f:'#EEF6FC' },
    { t:'p', d:'M150 108 L176 76 L202 108 Z', f:'turuncu' }, { t:'l', d:'M176 78 L176 108', w:1.2 },
    { t:'k', x:62, y:112, s:.85, f:'kirmizi', kol:'ileri' }, { t:'l', d:'M84 84 L84 114 M76 84 L92 84', w:2.6, k:'#6B7280' },
    { t:'r', x:100, y:96, w:8, h:20, rx:3, f:'buz' }, { t:'r', x:112, y:96, w:8, h:20, rx:3, f:'buz' }, { t:'r', x:124, y:96, w:8, h:20, rx:3, f:'buz' },
    { t:'l', d:'M220 108 L220 80', w:1.6 }, { t:'p', d:'M220 80 L234 84 L220 88 Z', f:'su' },
    ...kutu(198, 30, 48, '3 ay', 12), { t:'y', x:60, y:30, m:'buz örnekleri', b:12 } ] },
  offspring: { boy: 134, alt: 'Bazı kuşlar yavrularını yuvadan ayrıldıktan sonra da haftalarca besler.', o: [
    { t:'l', d:'M0 92 Q80 82 236 94', w:5, k:'agac' }, { t:'e', x:30, y:96, rx:8, ry:4, f:'yesil' }, { t:'e', x:226, y:100, rx:8, ry:4, f:'yesil' },
    { t:'kus', x:66, y:62, f:'su', ucan:true }, { t:'l', d:'M84 60 q5 6 0 12', w:2.2, k:'pembe' },
    ...[[118, 78], [146, 80], [174, 82]].flatMap(([x, y]) => [{ t:'e', x, y, rx:9, ry:7, f:'#B9A08A' }, { t:'c', x:x - 7, y:y - 7, r:5, f:'#B9A08A' },
      { t:'p', d:`M${x - 11} ${y - 9} l-6 -2 l5 5 Z`, f:'sari' }, { t:'c', x:x - 8, y:y - 8, r:1, f:'#4B2E5E' }]),
    { t:'e', x:212, y:86, rx:16, ry:6, f:'#9B6B47' }, { t:'l', d:'M200 86 l24 0 M204 90 l16 0', w:1, k:'#6B4430' },
    { t:'y', x:212, y:72, m:'boş yuva', b:10 }, { t:'y', x:146, y:116, m:'yavrular', b:13 }, { t:'y', x:120, y:24, m:'yuvadan sonra da besler', b:12 } ] },
  quota: { boy: 134, alt: 'Morina stoklarının toparlanması için sıkı av kotaları getirildi.', o: [
    { t:'r', x:0, y:70, w:240, h:64, f:'su' }, dalga(80),
    { t:'r', x:96, y:50, w:26, h:20, rx:2, f:'#FFFFFF' }, { t:'p', d:'M40 70 L140 70 L128 92 L52 92 Z', f:'kirmizi' },
    { t:'r', x:52, y:56, w:36, h:14, rx:2, f:'kraft' }, { t:'l', d:'M58 56 l-3 -5 l6 0 M70 56 l-3 -5 l6 0 M82 56 l-3 -5 l6 0', w:1.2 },
    ...kutu(72, 30, 96, 'kota: 100 kg', 11),
    { t:'l', d:'M140 64 Q166 58 172 84 M166 78 L172 86 L178 78', w:1.8, k:'vurgu' },
    ...balik(180, 100, '#9FB8A0'), ...balik(212, 116, '#9FB8A0'), ...balik(110, 114, '#9FB8A0'),
    ...kutu(194, 40, 76, 'fazlası denize', 10) ] },
  ratio: { boy: 134, alt: 'Öğretmen başına düşen öğrenci sayısı, her çocuğa ne kadar ilgi gösterildiğinin yaygın ölçüsüdür.', o: [
    ...iki(),
    kis(22, 104, .8, 'vurgu', 'bas'), ...[42, 58, 74, 90, 106].flatMap(x => [kis(x, 90, .4), kis(x, 114, .4)]),
    kis(142, 104, .8, 'vurgu', 'bas'), ...[160, 172, 184, 196, 208, 220].flatMap(x => [64, 80, 96, 112, 126].map(y => kis(x, y, .28))),
    { t:'y', x:59, y:34, m:'1 : 10', b:17 }, { t:'y', x:181, y:34, m:'1 : 30', b:17 } ] },
  petition: { boy: 134, alt: 'İki binden fazla kişi kütüphanenin açık kalması için dilekçe imzaladı.', o: [
    { t:'r', x:20, y:14, w:100, h:112, rx:3, f:'#FFFFFF' }, { t:'y', x:70, y:32, m:'Kütüphane', b:11 }, { t:'y', x:70, y:46, m:'açık kalsın!', b:10 },
    { t:'l', d:[58, 70, 82, 94, 106, 118].map((y, i) => `M30 ${y} q4 -6 8 0 t8 ${i % 2 ? -2 : 2} t8 0 l${12 + i * 4} 0`).join(' '), w:1.2, k:'agac' },
    { t:'l', d:'M100 118 L118 96', w:2.4, k:'vurgu' },
    { t:'p', d:'M140 36 L188 20 L236 36 Z', f:'gri' }, { t:'r', x:146, y:36, w:84, h:36, f:'#E8E2D4' }, { t:'l', d:'M160 40 L160 72 M178 40 L178 72 M196 40 L196 72 M214 40 L214 72', w:2, k:'gri' },
    ...kutu(188, 94, 76, '2.000 imza', 12), ...[152, 172, 192, 212].map(x => kis(x, 128, .5)) ] },
  specimen: { boy: 134, alt: 'Müzede iki yüzyılda toplanmış binlerce böcek örneği saklanıyor.', o: [
    { t:'r', x:14, y:26, w:212, h:96, rx:4, f:'agac' }, { t:'r', x:20, y:32, w:200, h:84, f:'#FFF9E8' },
    ...[44, 82, 120, 158, 196].flatMap((x, i) => [...(i % 2 ? bocek(x, 52, '#3E7A5A') : kelebek(x, 50, ['pembe', 'su', 'sari'][i / 2])),
      ...(i % 2 ? kelebek(x, 86, 'turuncu') : bocek(x, 88, ['#6B4430', '#2F4E8C', '#8B3A3A'][i / 2]))]),
    { t:'l', d:'M24 108 L60 36 M40 112 L76 40', w:1.2, k:'beyaz' },
    { t:'y', x:120, y:18, m:'böcek örnekleri', b:12 } ] },
  probability: { boy: 134, alt: 'Bir çift zarla iki altı atma olasılığı otuz altıda birdir.', o: [
    { t:'r', x:0, y:104, w:240, h:30, f:'#9FD6B6' },
    ...zar(36, 50), ...zar(100, 58),
    { t:'r', x:168, y:40, w:62, h:38, rx:8, f:'#FFFFFF' }, { t:'y', x:199, y:66, m:'1/36', b:19 },
    { t:'y', x:199, y:98, m:'iki altı', b:12 }, { t:'y', x:94, y:30, m:'olasılık', b:14 } ] },
  illusion: { boy: 134, alt: 'Düz çizgiler arka plandaki desen yüzünden eğri görünür; bu bir yanılsamadır.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#FFFFFF' },
    { t:'l', d:Array.from({ length: 16 }, (_, i) => `M120 68 L${+(120 + 108 * Math.cos(i * Math.PI / 8)).toFixed(1)} ${+(68 + 56 * Math.sin(i * Math.PI / 8)).toFixed(1)}`).join(' '), w:1, k:'#C9A6FF' },
    { t:'l', d:'M96 14 L96 122 M144 14 L144 122', w:3, k:'kirmizi' },
    ...kutu(48, 24, 76, 'düz çizgiler', 10), ...kutu(190, 116, 76, 'eğri görünür', 10) ] },
  bruise: { boy: 134, alt: 'Morluk iyileşirken rengi morda sarıya doğru değişir.', o: [
    { t:'c', x:204, y:70, r:16, f:'ten' }, { t:'l', d:'M214 58 l10 -6 M218 66 l9 -2 M218 74 l9 2', w:1.8 }, { t:'r', x:4, y:44, w:192, h:52, rx:20, f:'ten' },
    { t:'e', x:38, y:70, rx:18, ry:13, f:'#7B4FA0' }, { t:'e', x:102, y:70, rx:18, ry:13, f:'#8FAF6A' }, { t:'e', x:166, y:70, rx:18, ry:13, f:'#E8D36A' },
    okt(60, 70, 18), okt(124, 70, 18),
    { t:'y', x:38, y:120, m:'1. gün', b:12 }, { t:'y', x:102, y:120, m:'5. gün', b:12 }, { t:'y', x:166, y:120, m:'10. gün', b:12 },
    { t:'y', x:110, y:28, m:'morluk iyileşiyor', b:13 } ] },
  axis: { boy: 134, alt: 'Mevsimler, Dünya’nın ekseni yörüngesine göre eğik olduğu için oluşur.', o: [
    { t:'l', d:'M30 72 A90 38 0 1 0 210 72 A90 38 0 1 0 30 72', w:1.2, k:'gri', kesik:true },
    { t:'l', d:'M120 46 l0 -8 M120 98 l0 8 M94 72 l-8 0 M146 72 l8 0 M102 54 l-6 -6 M138 54 l6 -6 M102 90 l-6 6 M138 90 l6 6', w:1.6, k:'turuncu' },
    { t:'c', x:120, y:72, r:20, f:'sari' },
    ...[[34, 'yaz'], [206, 'kış']].flatMap(([x, m]) => [{ t:'c', x, y:72, r:15, f:'su' }, { t:'p', d:`M${x - 8} ${68} Q${x} ${60} ${x + 6} ${66} Q${x + 2} ${78} ${x - 6} ${76} Z`, f:'yesil' },
      { t:'l', d:`M${x + 8} ${52} L${x - 8} ${92}`, w:2.2, k:'vurgu' }, { t:'y', x, y:116, m, b:13 }]),
    { t:'y', x:120, y:22, m:'eğik eksen: mevsimler', b:12 } ] },
  larva: { boy: 134, alt: 'Sivrisinek larvaları durgun suda gelişir, sonra uçan erginlere dönüşür.', o: [
    { t:'r', x:0, y:60, w:240, h:74, f:'#6FB7D9' }, { t:'l', d:'M0 60 L240 60', w:1.4, k:'beyaz' },
    ...[24, 44, 66, 88].map(x => ({ t:'l', d:`M${x} 61 q5 7 0 14 q-4 5 1 10`, w:2.4, k:'#4B4B52' })),
    { t:'y', x:56, y:104, m:'larvalar', b:13 }, { t:'y', x:56, y:124, m:'durgun su', b:11 },
    { t:'l', d:'M112 66 Q140 34 162 40 M154 34 L163 40 L155 46', w:2, k:'vurgu' },
    { t:'l', d:'M182 44 l-6 14 M190 44 l0 16 M198 44 l6 14 M206 38 l14 -2', w:1.2 },
    { t:'e', x:184, y:30, rx:8, ry:4, f:'buz' }, { t:'e', x:198, y:30, rx:8, ry:4, f:'buz' },
    { t:'e', x:192, y:40, rx:12, ry:3.5, f:'#4B4B52' }, { t:'c', x:206, y:38, r:3.4, f:'#4B4B52' },
    { t:'y', x:192, y:82, m:'sivrisinek', b:13 } ] },
  reptile: { boy: 134, alt: 'Birçok sürüngen vücudunu ısıtmak için sabahları güneşte yatar.', o: [
    { t:'c', x:204, y:28, r:16, f:'sari' }, { t:'l', d:'M184 44 L168 58 M190 50 L178 68 M180 36 L162 44', w:1.6, k:'turuncu', kesik:true },
    { t:'p', d:'M30 122 Q50 82 120 86 Q190 88 212 122 Z', f:'tas' },
    { t:'l', d:'M92 84 Q62 88 44 76', w:4, k:'#5FAE5F' },
    { t:'l', d:'M100 88 l-6 8 M128 88 l4 8 M108 76 l-6 -6 M134 76 l4 -6', w:2, k:'#5FAE5F' },
    { t:'e', x:116, y:82, rx:26, ry:7, f:'#7EC27E' }, { t:'e', x:146, y:79, rx:10, ry:5.5, f:'#7EC27E' }, { t:'c', x:150, y:77, r:1.2, f:'#4B2E5E' },
    ...[[104, 80], [118, 84], [128, 79]].map(([x, y]) => ({ t:'c', x, y, r:2, f:'#4E9E34' })),
    { t:'r', x:20, y:30, w:10, h:40, rx:5, f:'#FFFFFF' }, { t:'r', x:22, y:46, w:6, h:24, f:'kirmizi' }, { t:'c', x:25, y:74, r:7, f:'kirmizi' },
    { t:'l', d:'M38 60 L38 40 M34 44 L38 38 L42 44', w:1.8, k:'vurgu' },
    { t:'y', x:76, y:40, m:'güneşlenir', b:13 }, { t:'y', x:204, y:62, m:'sabah', b:11 } ] },
  sediment: { boy: 134, alt: 'Nehirler tortuyu taşır ve akıntının yavaşladığı kıyıda bırakıp delta oluşturur.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#C9E7A8' },
    { t:'p', d:'M150 44 L178 12 L206 44 Z M190 44 L212 20 L234 44 Z', f:'dag' },
    { t:'p', d:'M4 104 Q120 92 236 100 L236 128 L4 128 Z', f:'su' },
    { t:'p', d:'M190 40 L204 40 Q170 66 132 70 Q112 74 126 98 L114 98 Q98 70 128 60 Q162 54 190 40 Z', f:'#7FC4E8' },
    ...[[176, 52], [158, 60], [138, 66], [122, 80], [120, 90]].map(([x, y]) => ({ t:'c', x, y, r:2, f:'#9B6B47' })),
    { t:'p', d:'M114 96 L126 96 L156 118 Q120 126 84 118 Z', f:'#D9B98E' },
    { t:'l', d:'M120 96 L96 118 M120 96 L112 122 M120 96 L128 122 M120 96 L144 118', w:1.6, k:'#7FC4E8' },
    ...kutu(54, 72, 50, 'tortu', 11), { t:'l', d:'M80 72 L130 66', w:1.2, kesik:true }, ...kutu(190, 90, 52, 'delta', 11), { t:'l', d:'M164 92 L142 100', w:1.2 } ] },
  symbiosis: { boy: 134, alt: 'Palyaço balığı ile deniz şakayığı birbirini bazı avcılardan korur.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#7FD0EA' },
    ...[-30, -18, -6, 6, 18, 30].map((d, i) => ({ t:'l', d:`M${110 + d} 110 q${i % 2 ? 8 : -8} -20 ${d / 3} -40`, w:5, k:'#FF9EC7' })),
    { t:'e', x:110, y:114, rx:38, ry:10, f:'#C66AA8' },
    { t:'p', d:'M152 64 L162 56 L162 72 Z', f:'turuncu' }, { t:'e', x:136, y:64, rx:18, ry:9, f:'turuncu' },
    { t:'r', x:128, y:56, w:4, h:16, rx:2, f:'#FFFFFF' }, { t:'r', x:142, y:57, w:4, h:14, rx:2, f:'#FFFFFF' }, { t:'c', x:124, y:62, r:1.4, f:'#4B2E5E' },
    { t:'l', d:'M164 80 Q178 94 150 104 M156 98 L150 104 L158 106', w:1.8, k:'vurgu' }, { t:'l', d:'M70 92 Q60 70 110 56 M104 52 L111 56 L105 61', w:1.8, k:'vurgu' },
    ...kutu(196, 30, 70, 'palyaço balığı', 9), ...kutu(196, 112, 50, 'şakayık', 10), ...kutu(50, 28, 82, 'birbirini korur', 10) ] },
  velocity: { boy: 134, alt: 'Yukarı atılan top yükseldikçe hız kaybeder ve tepede bir an durur.', o: [
    { t:'r', x:0, y:124, w:240, h:10, f:'yesil' },
    kis(96, 124, 1.1, undefined, 'yukari'),
    { t:'l', d:'M108 90 L108 26', w:1, k:'gri', kesik:true },
    ...[[86, '#FFD9B8'], [62, '#FFD9B8'], [44, '#FFD9B8'], [26, 'turuncu']].map(([y, f]) => ({ t:'c', x:108, y, r:7, f })),
    { t:'l', d:'M128 96 L128 72 M124 78 L128 72 L132 78 M128 70 L128 54 M124 60 L128 54 L132 60 M128 50 L128 42 M124 46 L128 42 L132 46', w:2, k:'vurgu' },
    ...kutu(174, 28, 62, 'hız = 0', 11), { t:'y', x:186, y:76, m:'hız azalır', b:13 } ] },
  crystal: { boy: 134, alt: 'Erimiş kaya yavaş soğursa iri kristaller, hızlı soğursa küçük kristaller oluşur.', o: [
    ...iki(),
    altigen(38, 64, 16, '#C9A6FF'), altigen(72, 58, 18, '#B5D8F0'), altigen(52, 94, 16, '#FFE6F2'), altigen(86, 92, 14, '#C9A6FF'),
    ...[150, 162, 174, 186, 198, 210].flatMap((x, i) => [56, 68, 80, 92, 104].map((y, j) => altigen(x + (j % 2) * 6, y, 5, ['#C9A6FF', '#B5D8F0', '#FFE6F2'][(i + j) % 3]))),
    { t:'y', x:59, y:28, m:'yavaş soğuma', b:11 }, { t:'y', x:181, y:28, m:'hızlı soğuma', b:11 },
    { t:'y', x:59, y:122, m:'iri kristal', b:12 }, { t:'y', x:181, y:122, m:'küçük kristal', b:12 } ] },
  atom: { boy: 134, alt: 'Bir su molekülü, bir oksijen atomuna bağlı iki hidrojen atomundan oluşur.', o: [
    { t:'c', x:84, y:48, r:15, f:'#FFFFFF' }, { t:'c', x:156, y:48, r:15, f:'#FFFFFF' }, { t:'c', x:120, y:74, r:26, f:'kirmizi' },
    { t:'y', x:84, y:53, m:'H', b:15 }, { t:'y', x:156, y:53, m:'H', b:15 }, { t:'y', x:120, y:80, m:'O', b:20 },
    { t:'y', x:120, y:124, m:'2 hidrojen + 1 oksijen = su', b:12 }, { t:'y', x:120, y:22, m:'atomlar', b:13 } ] },

  // ---- fiiller ----
  fade: { boy: 134, alt: 'Yıllarca güneşli bir pencerede kalan kırmızı perdeler soluk pembeye döndü.', o: [
    ...iki(), ...perde(0, '#E53935'), ...perde(122, '#F7C4CC'),
    { t:'y', x:59, y:120, m:'önce', b:13 }, { t:'y', x:181, y:120, m:'yıllar sonra', b:12 } ] },
  bargain: { boy: 134, alt: 'Teyzem halıcıyla yirmi dakika pazarlık etti ve ilk istenen fiyatın yarısını ödedi.', o: [
    { t:'r', x:14, y:20, w:58, h:88, rx:2, f:'#B83A3A' }, { t:'r', x:22, y:28, w:42, h:72, f:'#2F4E8C' }, altigen(43, 64, 12, '#E8C15A'),
    { t:'l', d:'M18 108 l0 6 M28 108 l0 6 M38 108 l0 6 M48 108 l0 6 M58 108 l0 6 M68 108 l0 6', w:1.2, k:'#B83A3A' },
    kis(104, 124, 1, '#7FB069', 'ileri'), kis(196, 124, 1, 'pembe', 'bas'),
    ...balon(104, 32, 56, '1.000', 12), ...balon(196, 46, 50, '500?', 12), ...kutu(150, 112, 66, 'yarı fiyat', 11) ] },
  transport: { boy: 134, alt: 'Eşyalar yeni eve iki küçük kamyonetle taşındı.', o: [
    { t:'r', x:0, y:110, w:240, h:14, f:'yol' },
    ...kamyonet(8, 'su'), { t:'r', x:14, y:86, w:36, h:8, rx:2, f:'#C9A6FF' }, { t:'r', x:14, y:94, w:36, h:8, rx:2, f:'#C9A6FF' },
    ...kamyonet(88, 'pembe'), { t:'l', d:'M96 100 L96 80 M104 80 L104 100 M96 90 L104 90 M112 92 L132 92 M116 92 L116 102 M128 92 L128 102', w:2, k:'agac' },
    { t:'p', d:'M174 52 L202 30 L230 52 Z', f:'kirmizi' }, { t:'r', x:180, y:52, w:44, h:56, f:'sari' }, { t:'r', x:196, y:84, w:12, h:24, f:'agac' },
    ...kutu(202, 22, 58, 'yeni ev', 10), { t:'y', x:80, y:40, m:'taşınıyor', b:13 } ] },
  engrave: { boy: 134, alt: 'Kuyumcu çiftin baş harflerini alyanslarının içine kazıdı.', o: [
    { t:'e', x:104, y:72, rx:58, ry:34, f:'#E8C15A' }, { t:'e', x:104, y:68, rx:44, ry:22, f:'#FFF9EE' },
    { t:'y', x:104, y:102, m:'A & M', b:13 },
    { t:'l', d:'M196 42 L164 90', w:4, k:'gri' }, { t:'l', d:'M164 90 l-4 6', w:2 }, { t:'l', d:'M148 96 l-6 -4 M150 104 l-8 2 M156 108 l-2 8', w:1.4, k:'sari' },
    ...kutu(196, 26, 70, 'kazındı', 12) ] },
  corrode: { boy: 134, alt: 'Deniz havası sahildeki metal korkulukları yavaş yavaş paslandırdı.', o: [
    { t:'r', x:0, y:96, w:240, h:38, f:'su' }, dalga(108),
    { t:'r', x:0, y:88, w:240, h:8, f:'tas' },
    { t:'l', d:'M10 50 L230 50 M10 68 L230 68 M20 50 L20 88 M60 50 L60 88 M100 50 L100 88 M140 50 L140 88 M180 50 L180 88 M220 50 L220 88', w:3.4, k:'#8A8F99' },
    ...[[34, 50], [60, 62], [88, 68], [100, 76], [124, 50], [150, 68], [180, 56], [196, 68], [220, 80], [46, 68]].map(([x, y]) => ({ t:'e', x, y, rx:4, ry:3, f:'#B5651D' })),
    ...[[30, 100], [80, 104], [130, 100], [170, 104], [210, 100]].map(([x, y]) => ({ t:'l', d:`M${x} ${y} l3 -10 M${x + 6} ${y} l2 -8`, w:1, k:'beyaz' })),
    { t:'y', x:60, y:30, m:'deniz havası', b:12 }, ...kutu(184, 30, 68, 'paslandı', 12) ] },
  decompose: { boy: 134, alt: 'Yemek artıkları kompostta birkaç haftada çürür; plastikler ise onlarca yıl kalır.', o: [
    ...iki(),
    { t:'p', d:'M14 112 Q58 58 104 112 Z', f:'#8B6A4A' },
    { t:'p', d:'M40 92 q8 -8 16 0 q-8 -2 -16 0 Z', f:'sari' }, { t:'c', x:70, y:88, r:5, f:'kirmizi' }, { t:'e', x:52, y:104, rx:6, ry:3, f:'yesil' },
    { t:'l', d:'M76 102 q4 -4 8 0 t8 0', w:2, k:'pembe' },
    { t:'p', d:'M140 106 L196 98 Q206 96 208 102 L210 104 L222 102 L222 110 L210 110 L208 112 Q206 116 198 114 L142 116 Q136 110 140 106 Z', f:'#BFE6F7' },
    { t:'y', x:59, y:28, m:'yemek artığı', b:11 }, { t:'y', x:181, y:28, m:'plastik', b:12 },
    ...kutu(59, 58, 74, 'birkaç hafta', 10), ...kutu(181, 58, 70, 'onlarca yıl', 10) ] },
  insulate: { boy: 134, alt: 'Kalın bir yağ tabakası fokları soğuk sudan yalıtır.', o: [
    { t:'r', x:4, y:6, w:232, h:122, rx:12, f:'#9ED8F0' }, { t:'p', d:'M14 8 L66 8 L62 22 L18 22 Z', f:'kar' }, { t:'p', d:'M178 8 L226 8 L222 20 L182 20 Z', f:'kar' },
    { t:'p', d:'M30 96 L14 84 L16 104 Z', f:'#8A8F99' },
    { t:'p', d:'M28 94 Q50 62 120 66 Q170 68 194 84 Q170 102 120 104 Q60 106 28 94 Z', f:'#8A8F99' },
    { t:'c', x:200, y:80, r:13, f:'#8A8F99' }, { t:'c', x:204, y:76, r:1.6, f:'#4B2E5E' }, { t:'l', d:'M212 82 l10 -2 M212 85 l10 2', w:.8 },
    { t:'p', d:'M120 100 L110 116 L130 108 Z', f:'#8A8F99' },
    { t:'c', x:104, y:84, r:15, f:'#FFE0A8' }, { t:'c', x:104, y:84, r:8, f:'#FF9E8A' },
    ...kutu(80, 40, 70, 'kalın yağ', 11), { t:'l', d:'M84 48 L98 70', w:1.2 }, { t:'y', x:196, y:120, m:'soğuk su', b:11 } ] },
  demolish: { boy: 134, alt: 'Eski istasyon yıkıldı ve yerine halka açık bir bahçe yapıldı.', o: [
    ...iki(),
    { t:'p', d:'M14 50 L59 34 L104 50 Z', f:'gri' }, { t:'r', x:18, y:50, w:82, h:56, f:'#D9C2A6' }, { t:'c', x:59, y:62, r:7, f:'#FFFFFF' },
    { t:'l', d:'M30 76 L30 100 M88 76 L88 100 M44 50 l6 14 l-8 10 l6 12', w:1.6 },
    ...[[76, 30], [86, 40], [96, 26]].map(([x, y]) => ({ t:'r', x, y, w:8, h:5, rx:1, f:'tas' })),
    { t:'p', d:'M60 108 Q76 90 92 98 Q104 100 108 116 L56 116 Z', f:'#C9B79A' }, ...[[68, 104], [80, 98], [92, 106], [74, 110]].map(([x, y]) => ({ t:'r', x, y, w:9, h:5, rx:1, f:'tas' })),
    { t:'r', x:130, y:100, w:102, h:24, f:'yesil' },
    ...[[150, 92], [208, 88]].flatMap(([x, y]) => [{ t:'l', d:`M${x} ${y + 12} l0 -14`, w:3, k:'agac' }, { t:'c', x, y:y - 12, r:12, f:'#4E9E34' }]),
    ...[[168, 104, 'pembe'], [180, 108, 'sari'], [190, 104, 'kirmizi']].map(([x, y, f]) => ({ t:'c', x, y, r:3.5, f })),
    { t:'r', x:166, y:84, w:28, h:5, rx:1, f:'agac' },
    { t:'y', x:59, y:22, m:'eski istasyon', b:11 }, { t:'y', x:181, y:22, m:'yeni bahçe', b:12 } ] },
  evacuate: { boy: 134, alt: 'Su yükselmeye devam edince nehir kenarındaki insanlar tahliye edildi.', o: [
    { t:'p', d:'M110 98 Q170 40 240 48 L240 98 Z', f:'#C9E7A8' },
    ...ev(14, 72, 'pembe'), ...ev(46, 76, 'sari'),
    { t:'r', x:0, y:86, w:240, h:48, f:'su' }, dalga(98, 0, 120),
    { t:'l', d:'M96 60 L96 112 M96 66 l6 0 M96 76 l6 0 M96 86 l6 0', w:1.6 }, { t:'l', d:'M84 104 l0 -16 M80 92 l4 -4 l4 4', w:2, k:'vurgu' },
    kis(136, 86, .7, 'turuncu'), kis(160, 74, .7, 'su'), kis(184, 64, .7, 'pembe'),
    { t:'r', x:142, y:68, w:8, h:7, rx:1, f:'kraft' }, { t:'r', x:190, y:46, w:8, h:7, rx:1, f:'kraft' },
    { t:'l', d:'M130 104 Q170 80 216 60', w:1.6, k:'vurgu', kesik:true },
    ...kutu(200, 24, 64, 'tahliye', 12) ] },
  dilute: { boy: 134, alt: 'İlaç küçük çocuklara verilmeden önce suyla seyreltilmeli.', o: [
    { t:'p', d:'M20 110 L20 72 Q20 64 28 62 L28 52 L40 52 L40 62 Q48 64 48 72 L48 110 Z', f:'#C96A3A' }, { t:'r', x:24, y:80, w:20, h:16, rx:2, f:'#FFFFFF' },
    { t:'y', x:34, y:126, m:'ilaç', b:12 }, { t:'y', x:64, y:90, m:'+', b:20 },
    ...bardak(96, 110, true), { t:'y', x:96, y:126, m:'su', b:12 },
    okt(124, 86, 22),
    { t:'p', d:'M160 72 L204 72 L198 110 L166 110 Z', f:'#F6D3B8' }, { t:'l', d:'M196 60 L188 100', w:2.4, k:'gri' },
    { t:'y', x:182, y:126, m:'seyreltildi', b:12 }, ...kutu(182, 40, 80, 'çocuklar için', 10) ] },
  magnify: { boy: 134, alt: 'Basit bir mikroskop bir damla gölet suyunu içindeki küçük canlıları gösterecek kadar büyütür.', o: [
    { t:'r', x:16, y:102, w:84, h:6, f:'buz' }, { t:'e', x:58, y:98, rx:20, ry:7, f:'su' },
    { t:'l', d:'M70 92 L116 72 M70 104 L124 92', w:1, k:'gri', kesik:true },
    { t:'l', d:'M126 90 L104 116', w:7, k:'agac' },
    { t:'c', x:156, y:58, r:40, f:'#E3F7FF' },
    { t:'e', x:144, y:44, rx:12, ry:6, f:'#7EC27E' }, { t:'l', d:'M132 40 l-3 -2 M132 48 l-3 2 M156 40 l3 -2 M156 48 l3 2', w:1 },
    { t:'p', d:'M164 64 Q176 54 184 64 Q192 74 180 80 Q168 84 164 74 Z', f:'#C9A6FF' }, { t:'c', x:176, y:70, r:2.4, f:'koyu' },
    { t:'e', x:142, y:76, rx:5, ry:3, f:'#FFB36B' }, { t:'l', d:'M137 76 q-4 -3 -8 0', w:1 },
    ...[[170, 34], [134, 62], [190, 50], [160, 86]].map(([x, y]) => ({ t:'c', x, y, r:1.8, f:'yesil' })),
    { t:'l', d:'M116 58 a40 40 0 1 0 80 0 a40 40 0 1 0 -80 0', w:3.6, k:'#6B7280' },
    { t:'y', x:58, y:124, m:'bir damla', b:11 }, { t:'y', x:208, y:116, m:'büyütüldü', b:11 } ] },
  expand: { boy: 134, alt: 'Çoğu metal ısıtılınca genleşir, soğuyunca büzülür.', o: [
    ...iki(),
    { t:'r', x:22, y:62, w:70, h:14, rx:2, f:'gri' }, { t:'l', d:'M58 92 l0 16 M50 96 l16 8 M66 96 l-16 8', w:1.6, k:'su' },
    { t:'r', x:136, y:62, w:92, h:14, rx:2, f:'#FF9E7A' }, { t:'l', d:'M206 54 L206 84', w:1.2, k:'vurgu', kesik:true },
    { t:'l', d:'M216 52 l10 0 M222 48 l4 4 l-4 4', w:1.8, k:'vurgu' },
    { t:'p', d:'M170 112 Q160 96 172 84 Q176 96 182 92 Q190 102 182 112 Z', f:'turuncu' }, { t:'p', d:'M174 112 Q170 102 176 96 Q180 104 182 112 Z', f:'sari' },
    { t:'y', x:59, y:28, m:'soğuk', b:13 }, { t:'y', x:181, y:28, m:'sıcak: uzar', b:13 } ] },
  mint: { boy: 134, alt: 'Müzedeki küçük makine madenî paraların eskiden nasıl basıldığını gösteriyor.', o: [
    { t:'r', x:60, y:104, w:100, h:14, rx:2, f:'#6B7280' }, { t:'l', d:'M72 104 L72 34 M148 104 L148 34', w:4, k:'#6B7280' },
    { t:'r', x:64, y:24, w:92, h:12, rx:2, f:'#6B7280' }, { t:'l', d:'M110 36 L110 66', w:4, k:'#4B4B52' },
    { t:'l', d:'M54 46 L166 46', w:3, k:'#4B4B52' }, { t:'c', x:54, y:46, r:6, f:'#4B4B52' }, { t:'c', x:166, y:46, r:6, f:'#4B4B52' },
    { t:'r', x:96, y:66, w:28, h:10, rx:2, f:'gri' }, { t:'r', x:92, y:98, w:36, h:6, f:'gri' }, { t:'e', x:110, y:94, rx:15, ry:4, f:'#E8C15A' },
    okt(168, 90, 14),
    { t:'c', x:204, y:84, r:18, f:'#E8C15A' }, altigen(204, 84, 9, '#D4A73A'), { t:'c', x:218, y:112, r:10, f:'#E8C15A' },
    ...kutu(34, 22, 48, 'müze', 10), ...kutu(200, 40, 70, 'para basımı', 10) ] },
  disinfect: { boy: 134, alt: 'Hemşire bir sonraki hasta gelmeden önce muayene sedirini dezenfekte ediyor.', o: [
    { t:'l', d:'M110 92 L110 120 M210 92 L210 120', w:3, k:'gri' },
    { t:'r', x:100, y:80, w:120, h:12, rx:4, f:'#9FD6E8' }, { t:'r', x:190, y:72, w:28, h:10, rx:4, f:'#FFFFFF' },
    kis(52, 124, 1.15, '#7FD8B6', 'ileri'), { t:'r', x:68, y:86, w:10, h:16, rx:2, f:'#FFFFFF' }, { t:'r', x:70, y:80, w:8, h:6, f:'su' },
    ...[[86, 80], [94, 76], [92, 86], [102, 80], [100, 70]].map(([x, y]) => ({ t:'c', x, y, r:2, f:'buz' })),
    ...[[140, 66], [176, 62]].map(([x, y]) => ({ t:'l', d:`M${x} ${y - 6} l0 12 M${x - 6} ${y} l12 0`, w:1.6, k:'sari' })),
    ...kutu(168, 32, 90, 'dezenfekte', 12) ] },

  // ---- sıfatlar ----
  illegible: { boy: 134, alt: 'Yağmur zarfı ıslattı; adresin çoğu okunmuyordu.', o: [
    ...[[40, 12], [90, 8], [150, 12], [200, 10]].map(([x, y]) => ({ t:'l', d:`M${x} ${y} l-3 8`, w:1.4, k:'su' })),
    { t:'r', x:30, y:30, w:180, h:84, rx:4, f:'#FFFFFF' }, { t:'l', d:'M30 30 L120 74 L210 30', w:1.2, k:'gri' },
    { t:'r', x:178, y:38, w:24, h:28, rx:2, f:'pembe' },
    { t:'l', d:'M62 84 q10 -8 20 2 t20 -2 t20 4 t20 -4 M66 98 q10 -6 18 2 t18 -2 t22 2 M70 108 q8 -4 16 2 t16 0', w:3, k:'#7F9BD6' },
    { t:'p', d:'M100 100 q3 10 0 14 q-3 -4 0 -14 Z M140 92 q3 10 0 14 q-3 -4 0 -14 Z', f:'#7F9BD6' },
    { t:'y', x:120, y:26, m:'adres okunmuyor', b:12 } ] },
  arable: { boy: 134, alt: 'Çiftliğin çoğu ekilebilir arazi; nehre yakın dik tarlalar ise sığırlara ayrılmış.', o: [
    { t:'r', x:10, y:30, w:60, h:90, f:'#F2D06B' }, { t:'r', x:72, y:30, w:60, h:90, f:'#9CD06A' },
    { t:'l', d:'M18 34 L18 116 M30 34 L30 116 M42 34 L42 116 M54 34 L54 116 M80 34 L80 116 M92 34 L92 116 M104 34 L104 116 M116 34 L116 116', w:1, k:'agac' },
    { t:'p', d:'M138 120 L138 30 Q170 50 214 120 Z', f:'#7FB069' }, { t:'l', d:'M146 50 l8 8 M150 70 l10 10 M156 92 l10 10', w:1, k:'#4E9E34' },
    { t:'l', d:'M226 20 Q210 70 228 128', w:8, k:'su' },
    ...inek(160, 74), ...inek(180, 100),
    ...kutu(70, 20, 96, 'ekilebilir tarla', 10), ...kutu(186, 20, 64, 'dik: otlak', 10) ] },
  brittle: { boy: 134, alt: 'Yaşlandıkça kemikler kırılganlaşabilir ve düşünce kolay kırılır.', o: [
    ...iki(), ...kemik(4, false), ...kemik(126, true),
    { t:'y', x:59, y:28, m:'genç', b:13 }, { t:'y', x:181, y:28, m:'yaşlı', b:13 },
    { t:'y', x:59, y:116, m:'sağlam', b:12 }, { t:'y', x:181, y:116, m:'kırılgan', b:12 } ] },
  stationary: { boy: 134, alt: 'Hastalar günde yirmi dakika sabit bisiklette pedal çevirdi.', o: [
    { t:'r', x:0, y:118, w:240, h:16, f:'#E3EEF0' },
    ...sabitBisiklet(54), kis(48, 92, .75, 'pembe', 'ileri'), ...sabitBisiklet(144), kis(138, 92, .75, 'su', 'ileri'),
    { t:'c', x:210, y:76, r:16, f:'#FFFFFF' }, { t:'l', d:'M210 66 L210 76 L218 80', w:1.6 }, { t:'y', x:210, y:108, m:'20 dk', b:12 },
    { t:'y', x:100, y:28, m:'yerinde duran bisiklet', b:12 } ] },
  intricate: { boy: 134, alt: 'Halı yaprak ve çiçeklerden oluşan ince işlenmiş desenlerle süslü.', o: [
    { t:'l', d:'M24 28 l-6 0 M24 40 l-6 0 M24 52 l-6 0 M24 64 l-6 0 M24 76 l-6 0 M24 88 l-6 0 M24 100 l-6 0 M24 112 l-6 0 M216 28 l6 0 M216 40 l6 0 M216 52 l6 0 M216 64 l6 0 M216 76 l6 0 M216 88 l6 0 M216 100 l6 0 M216 112 l6 0', w:1.2, k:'kraft' },
    { t:'r', x:24, y:24, w:192, h:94, rx:2, f:'#B83A3A' }, { t:'r', x:32, y:32, w:176, h:78, f:'#2F4E8C' }, { t:'r', x:42, y:42, w:156, h:58, f:'#F3E2C0' },
    { t:'l', d:'M50 71 Q70 50 90 71 T130 71 T170 71 T190 71', w:2, k:'#4E9E34' },
    ...[[60, 58], [80, 84], [100, 58], [140, 84], [160, 58], [180, 84]].map(([x, y]) => ({ t:'e', x, y, rx:6, ry:3, f:'yesil' })),
    altigen(120, 71, 14, '#E8C15A'), { t:'c', x:120, y:71, r:5, f:'kirmizi' },
    ...[[70, 71], [170, 71], [52, 50], [188, 92], [52, 92], [188, 50]].map(([x, y]) => ({ t:'c', x, y, r:4, f:'pembe' })),
    ...[[40, 32], [208, 32], [40, 110], [208, 110]].map(([x, y]) => ({ t:'c', x, y, r:3, f:'#E8C15A' })),
    { t:'y', x:120, y:18, m:'ince işlenmiş desen', b:11 } ] },
  cumbersome: { boy: 134, alt: 'İlk bilgisayarlar bütün bir odayı dolduran hantal makinelerdi.', o: [
    { t:'r', x:0, y:114, w:240, h:20, f:'#E3EEF0' },
    ...[10, 58, 106].flatMap(x => [{ t:'r', x, y:24, w:44, h:90, rx:2, f:'#D7DBE2' }, { t:'r', x:x + 6, y:30, w:32, h:40, rx:2, f:'#B8BCC4' }, { t:'c', x:x + 22, y:40, r:7, f:'#FFFFFF' }, { t:'c', x:x + 22, y:60, r:7, f:'#FFFFFF' },
      { t:'l', d:`M${x + 16} 40 l12 0 M${x + 22} 34 l0 12 M${x + 16} 60 l12 0 M${x + 22} 54 l0 12`, w:1 },
      ...[0, 1, 2].map(i => ({ t:'c', x:x + 10 + i * 12, y:76, r:2.6, f:['kirmizi', 'sari', 'yesil'][i] })), { t:'r', x:x + 8, y:88, w:28, h:16, f:'#B8BCC4' }]),
    kis(168, 114, .6, 'turuncu'),
    { t:'p', d:'M194 112 L232 112 L228 106 L198 106 Z', f:'gri' }, { t:'r', x:200, y:86, w:26, h:20, rx:2, f:'#4B4B52' },
    { t:'y', x:80, y:18, m:'eski bilgisayar', b:12 }, { t:'y', x:212, y:78, m:'bugün', b:11 } ] },
  consecutive: { boy: 134, alt: 'Nehir üst üste üçüncü kış taştı.', o: [
    ...[6, 84, 162].flatMap((x, i) => [{ t:'r', x, y:6, w:72, h:122, rx:10, f:'beyaz' }, ...ev(x + 25, 72, ['pembe', 'sari', 'su'][i]),
      { t:'r', x:x + 4, y:82, w:64, h:42, f:'#7FC4E8' }, { t:'l', d:`M${x + 10} 92 q4 -3 8 0 t8 0 t8 0 t8 0 t8 0`, w:1.2, k:'beyaz' },
      { t:'y', x:x + 36, y:28, m:`${i + 1}. kış`, b:13 }, { t:'l', d:`M${x + 56} 44 l0 10 M${x + 51} 49 l10 0 M${x + 52} 45 l8 8 M${x + 60} 45 l-8 8`, w:1.2, k:'su' }]) ] },
  adjacent: { boy: 134, alt: 'Yeni laboratuvar ana kampüsün hemen bitişiğindeki arazide yapılacak.', o: [
    { t:'r', x:16, y:20, w:124, h:96, rx:4, f:'#EEFFDD' },
    { t:'r', x:26, y:30, w:40, h:28, rx:2, f:'gri' }, { t:'r', x:76, y:30, w:52, h:22, rx:2, f:'gri' }, { t:'r', x:30, y:70, w:30, h:36, rx:2, f:'gri' }, { t:'r', x:74, y:66, w:54, h:40, rx:2, f:'gri' },
    { t:'r', x:140, y:20, w:84, h:96, rx:4, f:'#FFF3C4' },
    { t:'l', d:'M154 50 L210 50 L210 96 L154 96 Z', w:1.6, k:'vurgu', kesik:true }, { t:'y', x:182, y:72, m:'yeni', b:11 }, { t:'y', x:182, y:86, m:'laboratuvar', b:9 },
    { t:'l', d:'M140 20 L140 116', w:3, k:'vurgu' },
    { t:'y', x:78, y:130, m:'kampüs', b:12 }, { t:'y', x:182, y:130, m:'bitişik arsa', b:11 } ] },

  // ---- bağlaçlar ----
  'either … or': { boy: 134, alt: 'Başvuranlar ya pasaport ya da kimlik kartı vermelidir.', o: [
    ...iki(),
    { t:'r', x:36, y:40, w:46, h:62, rx:4, f:'#8B2E3A' }, { t:'c', x:59, y:64, r:9, f:'#E8C15A' }, { t:'r', x:46, y:84, w:26, h:4, f:'#E8C15A' },
    { t:'r', x:146, y:48, w:72, h:46, rx:5, f:'#FFFFFF' }, { t:'r', x:152, y:56, w:20, h:26, rx:2, f:'buz' }, { t:'c', x:162, y:64, r:5, f:'ten' },
    { t:'l', d:'M180 60 l30 0 M180 70 l24 0 M180 80 l28 0', w:1.2, k:'gri' },
    { t:'y', x:59, y:28, m:'ya pasaport', b:12 }, { t:'y', x:181, y:28, m:'ya da kimlik', b:12 },
    ...kutu(120, 120, 72, 'biri yeterli', 11) ] },
  'in case': { boy: 134, alt: 'Yürüyüşçülere, yürüyüş planlanandan uzun sürerse diye fazladan su taşımaları önerilir.', o: [
    { t:'p', d:'M0 120 Q120 108 240 118 L240 134 L0 134 Z', f:'#C9E7A8' },
    { t:'r', x:50, y:84, w:16, h:22, rx:4, f:'turuncu' }, kis(70, 120, 1.1, '#7FB069'),
    { t:'r', x:84, y:92, w:8, h:16, rx:3, f:'su' }, { t:'r', x:94, y:94, w:8, h:16, rx:3, f:'su' },
    { t:'l', d:'M30 118 L30 70', w:2.4, k:'agac' }, { t:'p', d:'M14 70 L46 70 L52 78 L46 86 L14 86 Z', f:'kraft' }, { t:'y', x:32, y:82, m:'3 saat', b:10 },
    ...balon(176, 44, 104, 'ya uzarsa?', 12), { t:'c', x:120, y:66, r:3, f:'beyaz' }, { t:'c', x:110, y:74, r:2, f:'beyaz' },
    ...kutu(178, 100, 92, 'ne olur ne olmaz', 10) ] },
  until: { boy: 134, alt: 'Mühendisler bütün taşıyıcı kabloları kontrol edene kadar köprü kapalı kalacak.', o: [
    { t:'r', x:0, y:80, w:240, h:54, f:'su' },
    { t:'r', x:62, y:20, w:8, h:60, f:'gri' }, { t:'r', x:170, y:20, w:8, h:60, f:'gri' },
    { t:'l', d:'M66 22 L20 72 M66 22 L40 72 M66 22 L92 72 M66 22 L112 72 M174 22 L128 72 M174 22 L150 72 M174 22 L198 72 M174 22 L220 72', w:1.2, k:'#6B7280' },
    { t:'r', x:6, y:72, w:228, h:8, f:'#8E939C' },
    { t:'y', x:40, y:62, m:'✓', b:11 }, { t:'y', x:92, y:62, m:'✓', b:11 }, { t:'y', x:150, y:62, m:'?', b:12 },
    kis(132, 72, .55, 'turuncu'), { t:'r', x:138, y:56, w:7, h:9, f:'#FFFFFF' },
    ...[0, 1, 2, 3].map(i => ({ t:'r', x:6 + i * 10, y:62, w:10, h:8, f:i % 2 ? '#FFFFFF' : 'kirmizi' })), { t:'l', d:'M8 70 L8 80 M44 70 L44 80', w:2 },
    ...kutu(120, 108, 156, 'kontrol bitene kadar kapalı', 11) ] },
  'rather than': { boy: 134, alt: 'Pek çok kişi yeni mobilya almak yerine eskisini onarmayı tercih ediyor.', o: [
    ...iki(),
    ...sandalye(42, 86, 'agac'), { t:'l', d:'M84 50 L100 66', w:3, k:'gri' }, { t:'r', x:76, y:42, w:16, h:8, rx:2, f:'#6B7280' },
    { t:'c', x:96, y:104, r:10, f:'yesil' }, { t:'y', x:96, y:109, m:'✓', b:13 },
    ...sandalye(160, 86, '#C9A6FF'), { t:'r', x:198, y:50, w:30, h:16, rx:3, f:'sari' }, { t:'y', x:213, y:62, m:'₺₺₺', b:10 },
    { t:'c', x:212, y:104, r:10, f:'kirmizi' }, { t:'y', x:212, y:109, m:'✗', b:13 },
    { t:'y', x:59, y:28, m:'onarmak', b:13 }, { t:'y', x:181, y:28, m:'yeni almak', b:13 } ] },
};
