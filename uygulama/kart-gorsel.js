// iDil kelime kartı görseli çizicisi (18 Kasım 2026). Kullanıcının seçtiği tarz: v11 "Neşeli, gerçekçi renkler; anlaşılır sahne"
// (karar görseli: ../tasarim/kart-gorselleri-v2-v4.html). Sahne verisi ../icerik/gorsel/ altında: kart sözcüğü → { boy, alt, o: [öğeler] }.
// Pastel washi zemin, küçük kiraz dalı, çıkartma kenarı ve gölgesi; nesneler gerçeğe yakın renkte, figür giysileri ve arabalar renkli.
// Öğeler (koordinatlar 240 genişliğe göre):
//   { t:'p', d, f } dolgu yol · { t:'c', x, y, r, f } daire · { t:'e', x, y, rx, ry, f } elips · { t:'r', x, y, w, h, rx, f } dikdörtgen
//   { t:'l', d, w, k, kesik } çizgi · { t:'y', x, y, m, b } el yazısı etiket · { t:'k', x, y, s, f, yuz, kol } figür
//   { t:'kus', x, y, f, ucan } · { t:'araba', x, y }
// Renk anahtarları: sari pembe turuncu kraft buz su beyaz yesil koyu (mor vurgu) ten dag kar agac catlak tas iz bulut yol zemin yok;
// 'vurgu' mor. Figür gövdesi ve arabalar sırayla renklenir; dikdörtgen 'beyaz' yüzeyler sırayla pastel tona boyanır.
const P = { sari:'#FFE94D', pembe:'#FF9EC7', turuncu:'#FF8A4C', kraft:'#E3C9A0', buz:'#C4EEFF', su:'#4FBDF2', beyaz:'#FFFFFF', yesil:'#7EDB57',
  zemin:'#FFF7EE', koyu:'#9A4DFF', ten:'#FFE7D6', m:'#4B2E5E', yazi:'#7A3FD6', dag:'#AFC0D3', kar:'#FFFFFF', agac:'#9B6B47', catlak:'#3E9AD6',
  tas:'#D9B98E', iz:'#8B5E3C', bulut:'#EEF2F7', yol:'#D7DBE2', vurgu:'#9A4DFF', kirmizi:'#FF6B6B', gri:'#C9CED6', kahve:'#9B6B47' };
const FIG = ['#FF8CC6', '#B5FF3D', '#F7FF2E', '#C9A6FF', '#FF9E7A', '#7FDFFF', '#FFB3DA'];
const TON = ['#E3F9FF', '#FFEDE3', '#F0E6FF', '#EEFFDD', '#FFF9C9', '#FFE6F2'];
const KONTUR = `stroke="${P.m}" stroke-width="1.9" stroke-linejoin="round"`;
let sayac = 0;
const renk = f => f === 'yok' ? 'none' : (P[f] || f);

export function sahneSvg(S) {
  if (!S?.o) return '';
  const id = `g${++sayac}`, W = 240, H = S.boy || 134;
  const dol = [], ust = [];
  let fi = 0, ti = 0;
  const sekil = (el, f) => {
    const dolgu = f === 'beyaz' && el.startsWith('rect') ? TON[ti++ % TON.length] : renk(f);
    dol.push(`<${el} fill="${dolgu}" ${KONTUR}/>`);
  };
  const cizgi = (d, w = 1.5, k, kesik) => ust.push(`<path d="${d}" fill="none" stroke="${k ? renk(k) : P.m}" stroke-width="${w + .6}" stroke-linecap="round" stroke-linejoin="round"${kesik ? ' stroke-dasharray="4 4"' : ''}/>`);
  const yazi = (x, y, m, b = 13) => ust.push(`<text x="${x}" y="${y}" font-family="Kalam,system-ui" font-weight="700" font-size="${b}" fill="${P.yazi}" text-anchor="middle">${String(m).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]))}</text>`);
  const kisi = ({ x, y, s = 1, f, yuz = 'mutlu', kol = 'asagi' }) => {
    const h = v => +(v * s).toFixed(2);
    const kollar = {
      asagi: `M${x-h(7)} ${y-h(17)} L${x-h(11)} ${y-h(9)} M${x+h(7)} ${y-h(17)} L${x+h(11)} ${y-h(9)}`,
      yukari: `M${x-h(7)} ${y-h(17)} L${x-h(12)} ${y-h(27)} M${x+h(7)} ${y-h(17)} L${x+h(12)} ${y-h(27)}`,
      ileri: `M${x+h(6)} ${y-h(18)} L${x+h(15)} ${y-h(17)} M${x+h(6)} ${y-h(13)} L${x+h(15)} ${y-h(12)}`,
      bas: `M${x-h(7)} ${y-h(17)} L${x-h(11)} ${y-h(9)} M${x+h(7)} ${y-h(17)} Q${x+h(14)} ${y-h(24)} ${x+h(8)} ${y-h(33)}`,
      tasi: `M${x-h(7)} ${y-h(18)} L${x-h(12)} ${y-h(24)} M${x+h(7)} ${y-h(18)} L${x+h(12)} ${y-h(24)}`,
    };
    cizgi(`M${x-h(3)} ${y-h(7)} L${x-h(5)} ${y} M${x+h(3)} ${y-h(7)} L${x+h(5)} ${y}`, 1.6 * s);
    cizgi(kollar[kol] || kollar.asagi, 1.6 * s);
    dol.push(`<rect x="${x-h(7)}" y="${y-h(22)}" width="${h(14)}" height="${h(16)}" rx="${h(6)}" fill="${f ? renk(f) : FIG[fi++ % FIG.length]}" ${KONTUR}/>`);
    dol.push(`<circle cx="${x}" cy="${y-h(30)}" r="${h(8)}" fill="${P.ten}" ${KONTUR}/>`);
    ust.push(`<circle cx="${x-h(3)}" cy="${y-h(31)}" r="${h(1.1)}" fill="${P.m}"/><circle cx="${x+h(3)}" cy="${y-h(31)}" r="${h(1.1)}" fill="${P.m}"/>`
      + `<circle cx="${x-h(5)}" cy="${y-h(27.5)}" r="${h(1.6)}" fill="${P.pembe}" opacity=".7"/><circle cx="${x+h(5)}" cy="${y-h(27.5)}" r="${h(1.6)}" fill="${P.pembe}" opacity=".7"/>`);
    const agiz = { mutlu: `M${x-h(3)} ${y-h(27)} Q${x} ${y-h(24.5)} ${x+h(3)} ${y-h(27)}`, uzgun: `M${x-h(3)} ${y-h(25)} Q${x} ${y-h(27.5)} ${x+h(3)} ${y-h(25)}`, sasir: `M${x-h(1.5)} ${y-h(26)} a${h(1.5)} ${h(1.5)} 0 1 0 ${h(3)} 0 a${h(1.5)} ${h(1.5)} 0 1 0 ${-h(3)} 0` };
    ust.push(`<path d="${agiz[yuz] || agiz.mutlu}" stroke="${P.m}" stroke-width="${1.2 * s}" fill="none" stroke-linecap="round"/>`);
  };
  const kus = ({ x, y, f = 'sari', ucan }) => {
    sekil(`ellipse cx="${x}" cy="${y}" rx="11" ry="7"`, f);
    sekil(`circle cx="${x+10}" cy="${y-5}" r="5"`, f);
    sekil(`path d="M${x+15} ${y-5} l6 2 l-6 2z"`, 'turuncu');
    if (ucan) sekil(`path d="M${x-4} ${y-3} Q${x-2} ${y-20} ${x+6} ${y-14} Q${x+2} ${y-8} ${x+2} ${y-3} Z"`, f);
    ust.push(`<circle cx="${x+11}" cy="${y-6}" r="1.1" fill="${P.m}"/>`);
  };
  for (const o of S.o) {
    if (o.t === 'p') sekil(`path d="${o.d}"`, o.f);
    else if (o.t === 'c') sekil(`circle cx="${o.x}" cy="${o.y}" r="${o.r}"`, o.f);
    else if (o.t === 'e') sekil(`ellipse cx="${o.x}" cy="${o.y}" rx="${o.rx}" ry="${o.ry}"`, o.f);
    else if (o.t === 'r') sekil(`rect x="${o.x}" y="${o.y}" width="${o.w}" height="${o.h}" rx="${o.rx || 0}"`, o.f);
    else if (o.t === 'l') cizgi(o.d, o.w, o.k, o.kesik);
    else if (o.t === 'y') yazi(o.x, o.y, o.m, o.b);
    else if (o.t === 'k') kisi(o);
    else if (o.t === 'kus') kus(o);
    else if (o.t === 'araba') {
      dol.push(`<rect x="${o.x}" y="${o.y}" width="16" height="10" rx="3" fill="${o.f ? renk(o.f) : FIG[fi++ % FIG.length]}" ${KONTUR}/>`);
      ust.push(`<circle cx="${o.x+4}" cy="${o.y+10}" r="2" fill="${P.m}"/><circle cx="${o.x+12}" cy="${o.y+10}" r="2" fill="${P.m}"/>`);
    }
  }
  // Zemin: washi lifleri, iki pastel leke, köşede küçük kiraz dalı, iki yaprak. Çıkartma kenarı ve gölge tek süzgeçle.
  const defs = `<filter id="s${id}" x="-15%" y="-15%" width="130%" height="135%"><feMorphology in="SourceAlpha" operator="dilate" radius="2.6" result="k"/><feFlood flood-color="#FFFFFF"/><feComposite in2="k" operator="in" result="b"/><feDropShadow in="b" dx="1" dy="2" stdDeviation="1.4" flood-color="#B07AD9" flood-opacity=".28" result="g"/><feMerge><feMergeNode in="g"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`
    + `<pattern id="w${id}" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M3 9 q9 -3 16 1 M22 27 q7 4 15 1 M8 33 q5 -2 9 0" stroke="#F3DCCB" stroke-width=".7" fill="none"/></pattern>`
    + `<g id="ck${id}"><g fill="#FFC2DD" stroke="#FF6FAE" stroke-width=".6">${[0, 72, 144, 216, 288].map(a => `<path transform="rotate(${a})" d="M0 0 C-4 -3 -4 -9 0 -10 C1 -9 2 -9 3 -10 C5 -7 4 -3 0 0 Z"/>`).join('')}</g><circle r="1.8" fill="#FFE94D" stroke="#FF6FAE" stroke-width=".4"/></g>`
    + `<path id="yp${id}" d="M0 0 C2 -3 6 -3 7 0 C5 2 2 2 0 0 Z" fill="#FFB3D3"/>`;
  const zemin = `<rect width="${W}" height="${H}" fill="${P.zemin}"/><rect width="${W}" height="${H}" fill="url(#w${id})"/>`
    + `<circle cx="${W * .18}" cy="${H * .2}" r="${H * .42}" fill="#FFE4F0" opacity=".7"/><circle cx="${W * .9}" cy="${H * .95}" r="${H * .4}" fill="#E6F9D6" opacity=".8"/>`
    + `<use href="#yp${id}" transform="translate(16 14) rotate(20)"/><use href="#yp${id}" transform="translate(228 ${H - 10}) rotate(-30)"/>`
    + `<path d="M${W} 4 Q${W - 18} 6 ${W - 32} 13" stroke="#8B5E3C" stroke-width="2.4" fill="none" stroke-linecap="round"/>`
    + `<use href="#ck${id}" transform="translate(${W - 14} 8) scale(.7)"/><use href="#ck${id}" transform="translate(${W - 30} 12) scale(.55)"/>`;
  return `<svg class="kart-gorsel" viewBox="0 0 ${W} ${H}" role="img" aria-label="${String(S.alt || '').replace(/"/g, '&quot;')}"><defs>${defs}</defs>${zemin}<g filter="url(#s${id})" transform="rotate(-1 ${W / 2} ${H / 2})">${dol.join('')}${ust.join('')}</g></svg>`;
}
