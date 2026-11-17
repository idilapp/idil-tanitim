// iDil içerik oynatıcısı (13 Kasım 2026). Uygulama değil: taslak içeriği tarayıcıda denemek ve uzmana göstermek için.
// İçeriği doğrudan okur: ../icerik/pilot (üniteler), ../icerik/hap (hap kartları), ../icerik/turler.js. Kaydetmez, sunucuya
// bağlanmaz; yalnız "öğretmen görünümü" seçimi bu tarayıcıda hatırlanır. Görünüm: ../tasarim/DESIGN.md ("Pazar tezgâhı").
// Sunucu: .claude/launch.json → "idil-oynatici" (python3 -m http.server 8091; adres /oynatici/).
import { PILOT_UNITS } from '../icerik/pilot/index.js';
import { TURLER, ALANLAR } from '../icerik/turler.js';

let HAP = null;
try { HAP = await import('../icerik/hap/index.js'); } catch (e) { console.warn('Hap kartları yüklenemedi:', e); }

const HARF = ['A', 'B', 'C', 'D', 'E'];
const ROMA = ['I', 'II', 'III', 'IV', 'V'];
const app = document.getElementById('app');
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const sayi = (x, k = 2) => x.toLocaleString('tr-TR', { maximumFractionDigits: k });

const ikon = {
  geri: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>',
  kapat: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  ileri: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>',
  ses: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a10 10 0 0 1 0 14"/></svg>',
};

// ---------- ayar (yalnız bu tarayıcıda; tutulamazsa varsayılan) ----------
const ayar = { ogretmen: false };
try { ayar.ogretmen = localStorage.getItem('idil-ogretmen') === '1'; } catch { /* özel pencere vb. */ }
function ogretmenYap(v) {
  ayar.ogretmen = v;
  try { localStorage.setItem('idil-ogretmen', v ? '1' : '0'); } catch { /* yok say */ }
}

// ---------- içerik dizinleri ----------
// Bir ünitenin soruları: tek soru, akışı bozan cümle ve parça adımları tek tek (denetle.mjs questionsOf ile aynı kimlikler).
function sorulari(unit) {
  const out = [];
  for (const it of unit.items) {
    const ortak = { unit, it, tur: it.tur, level: it.level };
    if (it.type === 'pratik') {
      it.steps.forEach((s, k) => out.push({ ...ortak, id: `${it.id}-a${k + 1}`, k, konu: s.konu, cefr: s.cefr || it.cefr, q: s.q, options: s.options, answer: s.answer, explain: s.explain }));
    } else if (it.tur === 'bozan') {
      out.push({ ...ortak, id: it.id, konu: it.konu, cefr: it.cefr, q: null, options: ROMA, answer: it.answer, explain: it.explain });
    } else {
      out.push({ ...ortak, id: it.id, konu: it.konu, cefr: it.cefr, q: it.q, options: it.options, answer: it.answer, explain: it.explain });
    }
  }
  return out;
}
const TUM = PILOT_UNITS.flatMap(sorulari);
const SORU = new Map(TUM.map(s => [s.id, s]));
const UNITE = new Map(PILOT_UNITS.map(u => [u.id, u]));
const KART_SAYISI = PILOT_UNITS.reduce((a, u) => a + u.cards.length, 0);
const HAP_KARTLARI = HAP?.HAP_KARTLARI || [];
const HAPK = new Map(HAP_KARTLARI.map(k => [k.id, k]));
const hapIcin = s => (HAP ? HAP.hapFor({ tur: s.tur, konu: s.konu || [] }).filter(id => HAPK.has(id)) : []);
const HAP_BAGLI = new Map(HAP_KARTLARI.map(k => [k.id, []]));
for (const s of TUM) for (const id of hapIcin(s)) HAP_BAGLI.get(id).push(s);

// ---------- yardımcılar ----------
function karisik(n) {
  const a = [...Array(n).keys()];
  for (let i = n - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
const rastgele = (dizi, n) => karisik(dizi.length).slice(0, n).map(i => dizi[i]);

// Boşluk (----) ve numaralı boşluk ((3) ----); etkin numaralı boşluk fosforlu kalemle işaretlenir.
function bosHtml(metin, etkin = null) {
  return esc(metin).replace(/(\((\d)\) )?-{4}/g, (m, onek, n) => {
    const b = `${onek || ''}<span class="bos" aria-label="${n ? `${n} numaralı boşluk` : 'boşluk'}">----</span>`;
    return n && Number(n) === etkin ? `<span class="simdiki">${b}</span>` : b;
  });
}

function dinle(metin) {
  if (!('speechSynthesis' in window)) return;
  const u = new SpeechSynthesisUtterance(metin);
  u.lang = 'en-GB';
  u.rate = 0.9;
  const sesler = speechSynthesis.getVoices();
  const ses = sesler.find(v => v.lang === 'en-GB') || sesler.find(v => v.lang?.startsWith('en'));
  if (ses) u.voice = ses;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

// ---------- parçalar ----------
function kabuk({ renk = 'sari', geri = null, kapat = null, kac = '', baslik = '', bilgi = '', ust = '', h1 = '', alt = '', ilerleme = null }) {
  const sol = geri ? `<a class="simge-dugme" href="${geri}" aria-label="Geri">${ikon.geri}</a>`
    : kapat ? `<a class="simge-dugme" href="${kapat}" aria-label="Kapat">${ikon.kapat}</a>` : '';
  const bar = sol || kac || baslik || bilgi
    ? `<div class="bar">${sol}${kac ? `<span class="kac kalem">${esc(kac)}</span>` : ''}<span class="baslik">${esc(baslik)}</span>${bilgi ? `<span class="bilgi" id="bilgi">${esc(bilgi)}</span>` : ''}</div>`
    : '';
  const cizgi = ilerleme === null ? ''
    : `<div class="ilerleme" role="progressbar" aria-label="İlerleme" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(ilerleme)}"><b style="width:${ilerleme}%"></b></div>`;
  return `<header class="kabuk" data-renk="${renk}">${bar}${ust}${h1 ? `<h1>${esc(h1)}</h1>` : ''}${alt ? `<p class="alt">${esc(alt)}</p>` : ''}${cizgi}</header>`;
}

const satir = (href, renk, etiket, ad, alt = '', sag = '') => `<a class="satir" href="${href}">`
  + `<span class="etiket ${renk} kalem">${esc(etiket)}</span>`
  + `<span><span class="ad">${esc(ad)}</span>${alt ? `<span class="alt">${esc(alt)}</span>` : ''}</span>`
  + `${sag ? `<span class="sag">${esc(sag)}</span>` : ''}</a>`;

const hapOneri = id => {
  const k = HAPK.get(id);
  return `<a class="hap-oneri" href="#/hap/${id}"><span class="ust"><span class="isaret">Şuna dikkat</span></span>`
    + `<span class="ad">${esc(k.title)}</span><span class="hap">${esc(k.hap)}</span>`
    + `<span class="git">Hap kartını aç${ikon.ileri}</span></a>`;
};

// ---------- ana sayfa ----------
function anaSayfa() {
  const gruplar = Object.entries(ALANLAR).map(([k, al]) => [al.ad, PILOT_UNITS.filter(u => u.course === k)]).filter(([, l]) => l.length);
  return kabuk({
    renk: 'sari',
    ust: '<p class="marka kalem" style="padding-top:14px">iDil</p>',
    h1: 'İçerik oynatıcısı',
    alt: `Taslak · ${PILOT_UNITS.length} ünite · ${TUM.length} soru · ${KART_SAYISI} kelime kartı${HAP_KARTLARI.length ? ` · ${HAP_KARTLARI.length} hap kartı` : ''}`,
  }) + `<main class="icerik">
    <p class="not">Bu sayfa uygulamanın kendisi değil: yazılan içeriği denemek ve öğretmene göstermek için. İçeriğin tamamı
      taslaktır ve İngilizce öğretmeninin onayını bekliyor. Hiçbir şey kaydedilmez.</p>
    <label class="anahtar"><span>Öğretmen görünümü<span class="alt" style="display:block;color:var(--ikincil);font-size:14px">Cevap anahtarı, açıklama ve etiketler soruyu çözmeden görünür</span></span>
      <input type="checkbox" data-eylem="ogretmen" ${ayar.ogretmen ? 'checked' : ''}></label>
    <h2 class="bolum">Deneme</h2>
    ${satir('#/coz/hizli', 'turuncu', '20', 'Hızlı tur', 'Düelloya uygun sorulardan karışık 20 soru; her sorudan sonra açıklama')}
    ${satir('#/coz/deneme', 'turuncu', '80', 'Deneme sınavı', 'YDS düzeninde 80 soru, 180 dakika; puan doğru başına 1,25; açıklamalar sonda')}
    ${HAP_KARTLARI.length ? `<h2 class="bolum">Hap bilgi</h2>${satir('#/hap', 'sari', HAP_KARTLARI.length, 'Hap kartları', 'Soru tipi formülleri, dil bilgisi özetleri, kelime stratejileri, sınav taktikleri')}` : ''}
    ${gruplar.map(([ad, l]) => `<h2 class="bolum">${esc(ad)}</h2>${l.map(u => satir(`#/unite/${u.id}`, 'sari', sorulari(u).length, u.title, `${u.cards.length} kelime kartı · ${sorulari(u).length} soru`)).join('')}`).join('')}
  </main>`;
}

// ---------- ünite ----------
function uniteSayfasi(u) {
  const sor = sorulari(u);
  const turSay = {};
  for (const s of sor) turSay[s.tur] = (turSay[s.tur] || 0) + 1;
  const ogretmenListesi = ayar.ogretmen
    ? `<h2 class="bolum">Sorular tek tek<small>Öğretmen görünümü: her soru ayrı açılır</small></h2>${sor.map((s, i) => satir(`#/coz/soru/${s.id}`, s.tur === 'okuma' || s.tur === 'bosluklu' ? 'kraft' : 'sari', i + 1, s.id, `${TURLER[s.tur].ad} · ${s.cefr} · ${s.level}`)).join('')}`
    : '';
  return kabuk({ renk: 'sari', geri: '#/', baslik: ALANLAR[u.course].ad, h1: u.title, alt: `${u.cards.length} kelime kartı · ${sor.length} soru` })
    + `<main class="icerik">
      ${satir(`#/kartlar/${u.id}/0`, 'pembe', u.cards.length, 'Kartları çalış', 'Sözcük, okunuş, anlam, örnek cümle ve sınav notu')}
      ${satir(`#/coz/unite/${u.id}`, 'sari', sor.length, 'Soruları çöz', 'Şıklar karışık; her sorudan sonra açıklama, yanlışta hap kartı')}
      <h2 class="bolum">Bu ünitede</h2>
      ${Object.entries(turSay).map(([t, n]) => `<div class="satir" style="min-height:48px"><span class="ad" style="font-weight:400">${esc(TURLER[t]?.ad || t)}</span><span class="sag">${n}</span></div>`).join('')}
      ${ogretmenListesi}
    </main>`;
}

// ---------- kelime kartları ----------
const kartAcik = new Set();
function kokDeseni(code) {
  const ilk = code.split(' ')[0];
  const kok = ilk.length > 4 && ilk.endsWith('e') ? ilk.slice(0, -1) : ilk;
  return new RegExp(`\\b(${kok.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[a-z]*)`, 'i');
}
function kartSayfasi(u, i) {
  const n = u.cards.length;
  i = Math.max(0, Math.min(n - 1, i));
  const c = u.cards[i];
  const anahtar = `${u.id}/${i}`;
  const acik = ayar.ogretmen || kartAcik.has(anahtar);
  const ornek = esc(c.example).replace(kokDeseni(c.code), '<span class="isaret">$1</span>');
  const ayrinti = acik ? `
      <p class="anlam" style="padding:18px 20px 0">${esc(c.title)}</p>
      <dl class="tanim">
        <div><dt>Örnek</dt><dd><span lang="en">${ornek}</span>
          <button class="simge-dugme" style="display:inline-grid;vertical-align:middle;width:36px;height:36px" data-eylem="dinle" data-metin="${esc(c.example)}" aria-label="Örnek cümleyi dinle">${ikon.ses}</button><br>
          <span style="color:var(--ikincil)">${esc(c.exampleTr)}</span></dd></div>
        <div><dt>Sınav notu</dt><dd>${esc(c.text)}</dd></div>
        ${c.synonyms?.length ? `<div><dt>Eş anlamlı</dt><dd lang="en">${c.synonyms.map(esc).join(', ')}</dd></div>` : ''}
        ${c.family?.length ? `<div><dt>Sözcük ailesi</dt><dd lang="en">${c.family.map(esc).join(', ')}</dd></div>` : ''}
      </dl>`
    : `<div class="gizli-anlam"><button class="ikinci" data-eylem="kart-ac" data-anahtar="${anahtar}">Anlamı göster</button></div>`;
  return kabuk({ renk: 'pembe', kapat: `#/unite/${u.id}`, kac: `${i + 1} / ${n}`, baslik: 'Kelime kartı', bilgi: `${c.pos} · ${c.cefr}`, ilerleme: ((i + 1) / n) * 100 })
    + `<main class="icerik">
      <p class="kart-soz kalem" lang="en">${esc(c.code)}</p>
      <p class="kart-ipa"><span lang="en">${esc(c.ipa)}</span>
        <button class="simge-dugme" data-eylem="dinle" data-metin="${esc(c.code)}" aria-label="Sözcüğü dinle">${ikon.ses}</button></p>
      ${ayrinti}
    </main>
    <nav class="eylemler">
      ${i > 0 ? `<a class="ikinci" href="#/kartlar/${u.id}/${i - 1}">Önceki</a>` : `<a class="ikinci" href="#/unite/${u.id}">Üniteye dön</a>`}
      ${i < n - 1 ? `<a class="birincil" href="#/kartlar/${u.id}/${i + 1}">Sonraki${ikon.ileri}</a>` : `<a class="birincil" href="#/coz/unite/${u.id}">Sorulara geç${ikon.ileri}</a>`}
    </nav>`;
}

// ---------- soru çözme ----------
// Oturum: bir soru listesi ve cevaplar. Sayfa yenilenince sıfırlanır; başka bir yere gidip dönünce kaldığı yerden sürer.
let oturum = null;
let saat = null;
const sunum = s => ({ s, sira: s.tur === 'bozan' || TURLER[s.tur]?.karistir === false ? [0, 1, 2, 3, 4] : karisik(s.options.length), secilen: null });
function oturumAc(anahtar, kur) {
  if (oturum?.anahtar === anahtar) return oturum;
  const { ad, renk = 'sari', liste, mod = 'pratik', sure = 0, geri = '#/' } = kur();
  oturum = { anahtar, ad, renk, mod, sure, geri, liste: liste.map(sunum), i: 0, bitti: false, bas: Date.now(), bitis: null };
  return oturum;
}

// YDS düzeninde 80 soru: kelime 6, dil bilgisi 10, boşluklu 2 parça, cümle tamamlama 10, çeviri 3 + 3, okuma 5 parça (4'er soru),
// diyalog 5, yakın anlam 4, paragraf tamamlama 4, akışı bozan cümle 5.
function denemeKur() {
  const tur = t => TUM.filter(s => s.tur === t);
  const parcalar = (t, adim, n) => {
    const gruplar = new Map();
    for (const s of tur(t)) { if (!gruplar.has(s.it.id)) gruplar.set(s.it.id, []); gruplar.get(s.it.id).push(s); }
    return rastgele([...gruplar.values()].filter(g => g.length === adim), n).flat();
  };
  return [
    ...rastgele(tur('kelime'), 6), ...rastgele(tur('dilbilgisi'), 10), ...parcalar('bosluklu', 5, 2),
    ...rastgele(tur('cumle-tamamlama'), 10), ...rastgele(tur('ceviri-et'), 3), ...rastgele(tur('ceviri-te'), 3),
    ...parcalar('okuma', 4, 5), ...rastgele(tur('diyalog'), 5), ...rastgele(tur('yakin-anlam'), 4),
    ...rastgele(tur('paragraf-tamamlama'), 4), ...rastgele(tur('bozan'), 5),
  ];
}

function cozSayfasi(tip, id) {
  let o = null;
  if (tip === 'unite' && UNITE.has(id)) {
    const u = UNITE.get(id);
    o = oturumAc(`unite:${id}`, () => ({ ad: u.title, liste: sorulari(u), geri: `#/unite/${id}` }));
  } else if (tip === 'hap' && HAPK.has(id)) {
    o = oturumAc(`hap:${id}`, () => ({ ad: HAPK.get(id).title, liste: HAP_BAGLI.get(id), geri: `#/hap/${id}` }));
  } else if (tip === 'soru' && SORU.has(id)) {
    const s = SORU.get(id);
    o = oturumAc(`soru:${id}`, () => ({ ad: s.unit.title, liste: [s], geri: `#/unite/${s.unit.id}` }));
  } else if (tip === 'hizli') {
    o = oturumAc('hizli', () => ({ ad: 'Hızlı tur', renk: 'turuncu', liste: rastgele(TUM.filter(s => TURLER[s.tur]?.duello), 20) }));
  } else if (tip === 'deneme') {
    o = oturumAc('deneme', () => ({ ad: 'Deneme sınavı', renk: 'turuncu', liste: denemeKur(), mod: 'sinav', sure: 180 * 60 }));
  } else if (tip === 'tekrar' && oturum?.anahtar === 'tekrar') {
    o = oturum;
  }
  if (!o) return anaSayfa();
  return o.bitti ? sonucSayfasi(o) : soruEkrani(o);
}

function kalanSure(o) {
  const kalan = Math.max(0, o.sure - Math.floor((Date.now() - o.bas) / 1000));
  const s = kalan % 60, d = Math.floor(kalan / 60) % 60, sa = Math.floor(kalan / 3600);
  return `${sa}:${String(d).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function soruEkrani(o) {
  const p = o.liste[o.i];
  const s = p.s;
  const t = TURLER[s.tur];
  const n = o.liste.length;
  const cevaplandi = p.secilen !== null;
  const geriBildirim = o.mod === 'pratik' && cevaplandi;
  const parcali = s.it.type === 'pratik';
  const harfi = oi => HARF[p.sira.indexOf(oi)];
  const renk = o.renk !== 'sari' ? o.renk : parcali ? 'kraft' : s.tur === 'kelime' ? 'pembe' : 'sari';

  let govde = `<p class="yonerge">${esc(t.yonerge)}</p>`;
  if (parcali) {
    govde += `<div class="parca"><span class="parca-baslik">${esc(s.it.title)}</span>${bosHtml(s.it.text, s.tur === 'bosluklu' ? s.k + 1 : null)}</div>`;
  }
  if (s.tur === 'bozan') {
    govde += `<ol class="parca cumleler">${s.it.sentences.map((x, k) => `<li><b>(${ROMA[k]})</b> ${esc(x)}</li>`).join('')}</ol>`
      + '<p class="kok duz">Parçanın akışını bozan cümle hangisi?</p>';
  } else if (s.tur === 'diyalog') {
    govde += `<div class="parca diyalog">${s.q.split('\n').map(l => { const j = l.indexOf(': '); return `<p><b>${esc(l.slice(0, j))}:</b> ${bosHtml(l.slice(j + 2))}</p>`; }).join('')}</div>`
      + '<p class="kok duz">Konuşmadaki boşluğa hangisi gelir?</p>';
  } else if (s.tur === 'paragraf-tamamlama') {
    govde += `<p class="parca">${bosHtml(s.q)}</p><p class="kok duz">Paragraftaki boşluğa hangisi gelir?</p>`;
  } else {
    govde += `<p class="kok">${bosHtml(s.q)}</p>`;
  }

  const siklar = p.sira.map((oi, k) => {
    let cls = 'sik';
    let durum = '';
    const dogruMu = oi === s.answer;
    if (geriBildirim) {
      if (dogruMu) { cls += ' dogru'; durum = 'Doğru'; } else if (oi === p.secilen) { cls += ' yanlis'; durum = 'Senin cevabın'; }
    } else {
      if (oi === p.secilen) { cls += ' secili'; durum = 'İşaretledin'; }
      if (ayar.ogretmen && dogruMu) { cls += ' dogru'; durum = 'Anahtar'; }
    }
    const metin = s.tur === 'bozan' ? `${ROMA[oi]}. cümle` : esc(s.options[oi]);
    return `<li><button class="${cls}" data-eylem="sec" data-sik="${oi}" ${geriBildirim ? 'disabled' : ''}>`
      + `<span class="h">${HARF[k]}</span><span>${metin}</span>${durum ? `<span class="durumu">${durum}</span>` : ''}</button></li>`;
  }).join('');

  const haplar = hapIcin(s);
  const meta = ayar.ogretmen
    ? `<p class="meta"><b>${esc(s.id)}</b> · ${esc(t.ad)} · ${esc(s.cefr)} · ${esc(s.level)} · konu: ${esc((s.konu || []).join(', '))}${haplar.length ? ` · hap: ${esc(haplar.join(', '))}` : ''}</p>`
    : '';

  const son = o.i === n - 1;
  const ileri = `<button class="birincil" data-eylem="${son ? 'bitir' : 'sonraki'}">${son ? 'Sonucu gör' : 'Devam'}${ikon.ileri}</button>`;
  let sayfa = '';
  let eylemler = '';
  if (o.mod === 'sinav') {
    if (ayar.ogretmen) sayfa = `<section class="sayfa"><h2>Neden ${harfi(s.answer)}?</h2><p>${esc(s.explain)}</p></section>`;
    eylemler = `<nav class="eylemler"><button class="ikinci" data-eylem="onceki" ${o.i === 0 ? 'disabled style="opacity:.35;cursor:default"' : ''}>Önceki</button>`
      + `<button class="birincil" data-eylem="${son ? 'bitir' : 'sonraki'}">${son ? 'Sınavı bitir' : 'Sonraki'}${ikon.ileri}</button></nav>`;
  } else if (geriBildirim || ayar.ogretmen) {
    const dogru = p.secilen === s.answer;
    const baslik = !cevaplandi ? `Neden ${harfi(s.answer)}?` : dogru ? `Doğru: ${harfi(s.answer)}` : `Doğru cevap ${harfi(s.answer)}`;
    const oneri = (cevaplandi && !dogru) || ayar.ogretmen ? haplar.slice(0, 2) : [];
    sayfa = `<section class="sayfa" aria-live="polite"><h2>${baslik}</h2><p>${esc(s.explain)}</p>${oneri.map(hapOneri).join('')}<div class="eylem">${ileri}</div></section>`;
  } else {
    eylemler = `<nav class="eylemler"><button class="ikinci" data-eylem="${son ? 'bitir' : 'sonraki'}">${son ? 'Bitir' : 'Atla'}</button></nav>`;
  }

  const cevaplanan = o.liste.filter(x => x.secilen !== null).length;
  return kabuk({
    renk, kapat: o.geri, kac: `${o.i + 1} / ${n}`, baslik: o.mod === 'sinav' ? o.ad : t.ad,
    bilgi: o.mod === 'sinav' ? kalanSure(o) : s.unit.title, ilerleme: (cevaplanan / n) * 100,
  }) + `<main class="icerik">${govde}<ol class="siklar">${siklar}</ol>${meta}${sayfa}</main>${eylemler}`;
}

function sonucSayfasi(o) {
  const n = o.liste.length;
  const dogru = o.liste.filter(p => p.secilen === p.s.answer);
  const yanlis = o.liste.filter(p => p.secilen !== null && p.secilen !== p.s.answer);
  const bos = o.liste.filter(p => p.secilen === null);
  const dk = Math.max(1, Math.round(((o.bitis || Date.now()) - o.bas) / 60000));
  const hapSay = new Map();
  for (const p of [...yanlis, ...bos]) { const id = hapIcin(p.s)[0]; if (id) hapSay.set(id, (hapSay.get(id) || 0) + 1); }
  const harfi = (p, oi) => (p.s.tur === 'bozan' ? ROMA[oi] : HARF[p.sira.indexOf(oi)]);
  const satirlar = [...yanlis, ...bos].map(p => satir(`#/coz/soru/${p.s.id}`, p.secilen === null ? 'sari' : 'pembe', p.secilen === null ? '–' : harfi(p, p.secilen),
    `${TURLER[p.s.tur].ad} · ${p.s.unit.title}`, p.secilen === null ? `Boş · doğru cevap ${harfi(p, p.s.answer)}` : `Senin cevabın ${harfi(p, p.secilen)} · doğru cevap ${harfi(p, p.s.answer)}`)).join('');
  return kabuk({ renk: o.renk, kapat: o.geri, baslik: o.ad, bilgi: `${dk} dk` })
    + `<main class="icerik">
      <p class="dev kalem">${dogru.length}<small> / ${n}</small></p>
      <p class="metin">${o.mod === 'sinav' ? `Puan: <b>${sayi(dogru.length * 1.25)}</b> (doğru başına 1,25; yanlış doğruyu götürmez). ` : ''}${yanlis.length} yanlış${bos.length ? `, ${bos.length} boş` : ''}.</p>
      ${hapSay.size ? `<h2 class="bolum">Tekrar et<small>Yanlış ya da boş soruların bağlı olduğu hap kartları</small></h2>${[...hapSay].sort((a, b) => b[1] - a[1]).map(([id, c]) => satir(`#/hap/${id}`, 'sari', c, HAPK.get(id).title, HAPK.get(id).hap)).join('')}` : ''}
      ${satirlar ? `<h2 class="bolum">Yanlış ve boş sorular</h2>${satirlar}` : ''}
    </main>
    <nav class="eylemler">${yanlis.length + bos.length ? '<button class="ikinci" data-eylem="yanlislari">Yanlışları çöz</button>' : ''}<button class="birincil" data-eylem="yeniden">Yeniden başla</button></nav>`;
}

// ---------- hap bilgi ----------
function hapListesi() {
  if (!HAP) return anaSayfa();
  return kabuk({ renk: 'sari', geri: '#/', baslik: 'iDil', h1: 'Hap bilgi', alt: `${HAP_KARTLARI.length} kart · her soru en az bir karta bağlı` })
    + `<main class="icerik">${Object.entries(HAP.KATEGORILER).map(([k, ad]) => {
      const l = HAP_KARTLARI.filter(x => x.kategori === k);
      return `<h2 class="bolum">${esc(ad)}</h2>${l.map(x => satir(`#/hap/${x.id}`, 'sari', HAP_BAGLI.get(x.id).length || '·', x.title, x.hap)).join('')}`;
    }).join('')}
    <p class="not">Etiketteki sayı, karta bağlı soru sayısıdır; nokta, soruya bağlanmayan genel kart demektir.</p></main>`;
}

function ornekHtml(o) {
  if (o.soru) {
    const s = SORU.get(o.soru);
    if (!s) return '';
    const kok = s.tur === 'bozan' ? s.it.sentences.map((x, k) => `(${ROMA[k]}) ${x}`).join(' ') : s.q;
    const dogru = s.tur === 'bozan' ? `${ROMA[s.answer]}. cümle` : s.options[s.answer];
    return `<div class="ornek"><span class="kim">${esc(s.id)} · ${esc(TURLER[s.tur].ad)}${s.it.type === 'pratik' ? ` · ${esc(s.it.title)}` : ''}</span>
      <span class="kok-alinti">${bosHtml(kok)}</span>
      <details><summary>Cevap ve not</summary><p>Doğru: <b>${esc(dogru)}</b>. ${esc(o.not)}</p></details>
      <a href="#/coz/soru/${s.id}">Soruyu çöz</a></div>`;
  }
  return `<div class="ornek"><span class="kok-alinti" lang="en">${esc(o.en)}</span>${o.tr ? `<span>${esc(o.tr)}</span>` : ''}${o.not ? `<span style="display:block;color:var(--ikincil);margin-top:2px">${esc(o.not)}</span>` : ''}</div>`;
}

function hapKarti(k) {
  const bagli = HAP_BAGLI.get(k.id) || [];
  const liste = (cls, l) => `<ul class="${cls}">${l.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;
  return kabuk({ renk: 'sari', geri: '#/hap', baslik: HAP.KATEGORILER[k.kategori], h1: k.title })
    + `<main class="icerik">
      <p class="hap-satiri"><span class="isaret">${esc(k.hap)}</span></p>
      ${k.body.map(x => `<p class="metin">${esc(x)}</p>`).join('')}
      ${k.adimlar?.length ? `<h2 class="bolum">Adım adım</h2><ol class="adimlar">${k.adimlar.map(x => `<li>${esc(x)}</li>`).join('')}</ol>` : ''}
      ${k.tablo ? `<h2 class="bolum">Tablo</h2><div class="tablo-kap"><table><thead><tr>${k.tablo.sutunlar.map(c => `<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${k.tablo.satirlar.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>` : ''}
      ${k.tuzaklar?.length ? `<h2 class="bolum">Tuzaklar</h2>${liste('maddeler', k.tuzaklar)}` : ''}
      ${k.ornekler?.length ? `<h2 class="bolum">Örnekler</h2>${k.ornekler.map(ornekHtml).join('')}` : ''}
      ${k.veri?.length ? `<h2 class="bolum">ÖSYM verisi</h2>${liste('veri', k.veri)}` : ''}
      ${ayar.ogretmen ? `<p class="meta"><b>${esc(k.id)}</b>${k.ref ? ` · ${esc(k.ref)}` : ''}</p>` : ''}
    </main>
    ${bagli.length ? `<nav class="eylemler"><a class="birincil" href="#/coz/hap/${k.id}">Bu karta bağlı ${bagli.length} soruyu çöz${ikon.ileri}</a></nav>` : ''}`;
}

// ---------- yönlendirme ----------
function ciz({ kaydir = true } = {}) {
  clearInterval(saat);
  const [a, b, c] = location.hash.replace(/^#\/?/, '').split('/').map(decodeURIComponent);
  let html;
  if (!a) html = anaSayfa();
  else if (a === 'unite' && UNITE.has(b)) html = uniteSayfasi(UNITE.get(b));
  else if (a === 'kartlar' && UNITE.has(b)) html = kartSayfasi(UNITE.get(b), Number(c) || 0);
  else if (a === 'coz') html = cozSayfasi(b, c);
  else if (a === 'hap' && !b) html = hapListesi();
  else if (a === 'hap' && HAPK.has(b)) html = hapKarti(HAPK.get(b));
  else html = anaSayfa();
  app.innerHTML = html;
  const h1 = app.querySelector('h1');
  document.title = `${h1 ? h1.textContent : app.querySelector('.baslik')?.textContent || 'iDil'} · iDil oynatıcı`;
  if (kaydir) window.scrollTo(0, 0);
  if (a === 'coz' && oturum?.mod === 'sinav' && !oturum.bitti) {
    saat = setInterval(() => { const el = document.getElementById('bilgi'); if (el) el.textContent = kalanSure(oturum); }, 1000);
  }
}

app.addEventListener('click', e => {
  const b = e.target.closest('[data-eylem]');
  if (!b || b.dataset.eylem === 'ogretmen') return;
  const ey = b.dataset.eylem;
  if (ey === 'dinle') { dinle(b.dataset.metin); return; }
  if (ey === 'kart-ac') { kartAcik.add(b.dataset.anahtar); ciz({ kaydir: false }); return; }
  if (!oturum) return;
  if (ey === 'sec') {
    const p = oturum.liste[oturum.i];
    if (oturum.mod === 'pratik' && p.secilen !== null) return;
    p.secilen = Number(b.dataset.sik);
    ciz({ kaydir: false });
    app.querySelector('.sayfa')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  } else if (ey === 'sonraki') {
    if (oturum.i < oturum.liste.length - 1) { oturum.i++; ciz(); }
  } else if (ey === 'onceki') {
    if (oturum.i > 0) { oturum.i--; ciz(); }
  } else if (ey === 'bitir') {
    oturum.bitti = true;
    oturum.bitis = Date.now();
    ciz();
  } else if (ey === 'yeniden') {
    const eski = oturum;
    oturum = null;
    if (eski.anahtar === 'tekrar') location.hash = eski.geri;
    else ciz();
  } else if (ey === 'yanlislari') {
    const tekrar = oturum.liste.filter(p => p.secilen !== p.s.answer).map(p => p.s);
    const geri = oturum.geri;
    oturum = null;
    oturumAc('tekrar', () => ({ ad: 'Yanlışlar', liste: tekrar, geri }));
    if (location.hash === '#/coz/tekrar') ciz(); else location.hash = '#/coz/tekrar';
  }
});
app.addEventListener('change', e => {
  if (e.target.dataset.eylem === 'ogretmen') ogretmenYap(e.target.checked);
});
// Klavye: A–E ya da 1–5 şık seçer; Enter ya da sağ ok ilerler, sol ok geri gider (sınavda).
document.addEventListener('keydown', e => {
  if (!location.hash.startsWith('#/coz') || !oturum || oturum.bitti || e.metaKey || e.ctrlKey || e.altKey) return;
  if (e.target.closest('input, textarea')) return;
  const k = HARF.indexOf(e.key.toUpperCase()) >= 0 ? HARF.indexOf(e.key.toUpperCase()) : ['1', '2', '3', '4', '5'].indexOf(e.key);
  if (k >= 0) { app.querySelectorAll('[data-eylem="sec"]')[k]?.click(); return; }
  if ((e.key === 'Enter' && !e.target.closest('button, a')) || e.key === 'ArrowRight') app.querySelector('[data-eylem="sonraki"], [data-eylem="bitir"]')?.click();
  else if (e.key === 'ArrowLeft') app.querySelector('[data-eylem="onceki"]')?.click();
});
window.addEventListener('hashchange', () => ciz());
if ('speechSynthesis' in window) speechSynthesis.getVoices();
ciz();
