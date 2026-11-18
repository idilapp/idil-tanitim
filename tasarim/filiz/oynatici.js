// Yolculuk web deneme oynatıcısı (Görev 6). Veri: icerik/filiz (DURAKLAR), mantık: kanat.js, bellek: bellek.js.
// Adresler: #/ (giriş) · #/soru (giriş sorusu) · #/yoklama/<durakId>/<k> · #/durak/<durakId>/<sayfaNo> · #/yoklama-basla
// Gömülü kip (?gom=1, 18 Kasım 2026): iDil tanıtım uygulaması oynatıcıyı iframe'de açar. Telefon çerçevesi kalkar; sayfa
// değişimi, yoklama sonucu ve "listeye dön / Ders'e geç" istekleri üst pencereye postMessage ile bildirilir. Hafıza ortaktır (bellek.js).
import { sahneSvg } from '../../uygulama/kart-gorsel.js';
import { DURAKLAR, durakBul } from '../../icerik/filiz/index.js';
import { BIRIMLER } from '../../icerik/filiz/birimler.js';
import { sesAdiTarayici } from '../../icerik/filiz/ses-adi.js';
import { duyumIsle, durum, yoklamaIsle } from '../../icerik/filiz/kanat.js';
import { oku, yaz, sifirla } from './bellek.js';

const govde = document.getElementById('govde'), alt = document.getElementById('alt');
const baslikEl = document.getElementById('baslik'), cubuk = document.getElementById('cubuk');
const SES_KLASORU = '../../icerik/filiz/ses/';
const hoparlor = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>';
const esc = m => String(m).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const GOM = new URLSearchParams(location.search).has('gom') && window.parent !== window;
if (GOM) document.documentElement.classList.add('gom');
// Üst pencereye bildirim (yalnız gömülü kipte, yalnız aynı köken).
const bildir = m => { if (GOM) try { window.parent.postMessage({ tur: 'idil-yolculuk', ...m }, location.origin); } catch { /* üst pencere yoksa yok say */ } };
const bugun = () => { const d = new Date(), p = n => String(n).padStart(2, '0'); return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`; };

// ---------- Ses: hiçbir hata gezinmeyi engellemez ----------
let jeton = 0, aktif = null;
function durdur() {
  jeton++;
  const a = aktif; aktif = null;
  try { a?.ses.pause(); } catch {}
  try { a?.bit(); } catch {}
  document.querySelectorAll('.caliyor').forEach(e => e.classList.remove('caliyor'));
}
function birDosya(ad) {
  return new Promise(coz => {
    try {
      const ses = new Audio(`${SES_KLASORU}${ad}.m4a`);
      const bit = () => coz();
      aktif = { ses, bit };
      ses.onended = bit; ses.onerror = bit;
      const s = ses.play();
      if (s && s.catch) s.catch(bit);
    } catch { coz(); }
  });
}
// Satır dizisini sırayla çalar. Asla fırlatmaz.
async function cal(satirlar, dugme) {
  try {
    durdur();
    const j = jeton;
    dugme?.classList.add('caliyor');
    for (const s of satirlar) {
      if (j !== jeton) return;
      let ad;
      try { ad = await sesAdiTarayici(s); } catch { continue; }
      if (j !== jeton) return;
      await birDosya(ad);
    }
    if (j === jeton) dugme?.classList.remove('caliyor');
  } catch { /* ses yoksa sayfa yine ilerler */ }
}

// ---------- Ortak çizim ----------
let sayfa = 0; // her çizimde artar; geciken zamanlayıcılar eski sayfaya dokunmasın
function kur({ baslik, yuzde, icerik, altHtml }) {
  durdur(); sayfa++;
  baslikEl.textContent = baslik;
  cubuk.style.width = `${yuzde}%`;
  govde.innerHTML = icerik;
  alt.innerHTML = altHtml;
}
const git = h => { location.hash = h; };
const dinleDugmesi = () => `<button class="dinle" id="dinle">${hoparlor} Yeniden dinle</button>`;

// sec sayfası: cevap verilince bitis(dogruMu) bir kez çağrılır.
function secCiz(p, bitis) {
  const sj = sayfa, d = document.getElementById('dinle');
  d.onclick = () => cal(p.ses, d); cal(p.ses, d);
  let bitti = false;
  govde.querySelectorAll('.secenekler button').forEach(b => b.onclick = () => {
    if (bitti) return; bitti = true;
    const k = +b.dataset.k, dogruMu = k === p.dogru;
    if (dogruMu) { b.classList.add('dogru'); cal(p.dogruSes); }
    else {
      b.classList.add('yanlis');
      setTimeout(() => {
        if (sj !== sayfa) return;
        govde.querySelector(`[data-k="${p.dogru}"]`)?.classList.add('dogru'); cal(p.dogruSes);
      }, 450);
    }
    try { bitis(dogruMu); } catch (e) { console.error(e); }
    const ileri = document.getElementById('ileri'); if (ileri) ileri.disabled = false;
  });
}
const secIcerik = p => `${dinleDugmesi()}<p class="yonerge">Duyduğunun resmine dokun</p>
  <div class="secenekler">${p.secenek.map((s, k) => `<button data-k="${k}" aria-label="${esc(s.alt || 'Seçenek ' + (k + 1))}">${sahneSvg({ ...s, boy: 120 })}</button>`).join('')}</div>`;

// ---------- Ekranlar ----------
function giris() {
  kur({ baslik: 'Hoş geldin', yuzde: 0,
    icerik: `<div class="giris"><h1>Bak, dinle, anla.</h1>
      <p>Başta yazı ve Türkçe yok. Anlamı resimden çıkar, sesi dinle. Her sayfada yalnız bir yeni şey var.</p>
      <p>Arada bir soru gelir: duyduğun şeyin resmine dokun.</p>
      <p class="not">Deneme sürümü · yapay ses</p>
      <p class="not"><a href="#" id="sifirla" class="baglanti">Sıfırla</a></p></div>`,
    altHtml: `<button class="ileri" id="basla">Başla</button>` });
  document.getElementById('basla').onclick = () => git('#/soru');
  document.getElementById('sifirla').onclick = e => {
    e.preventDefault(); sifirla(); yk = null;
    document.getElementById('sifirla').textContent = 'Sıfırlandı ✓';
  };
}

function soru() {
  kur({ baslik: 'Başlangıç', yuzde: 0,
    icerik: `<div class="giris"><h1>Hangisi sen?</h1>
      <p>Hiç mi bilmiyorsun, yoksa okulda öğrendin ama konuşamıyor musun?</p>
      <p class="not">Cevabın yalnız nereden başlayacağını seçer.</p></div>
      <div class="secim"><button class="ileri" id="hic">Hiç bilmiyorum</button>
      <button class="ikincil" id="okul">Okulda öğrendim</button></div>`,
    altHtml: `<button class="geri" id="geri" aria-label="Geri">‹</button>` });
  document.getElementById('geri').onclick = () => (GOM ? bildir({ git: 'liste' }) : git('#/'));
  document.getElementById('hic').onclick = () => git(`#/durak/${DURAKLAR[0].id}/0`);
  document.getElementById('okul').onclick = () => { yk = { sira: 0, k: 0, dogru: 0, sonuclar: [] }; git(`#/yoklama/${DURAKLAR[0].id}/0`); };
}

// Yoklama durumu (yalnız bellekte): hangi durak, hangi soru, kaç doğru.
let yk = null;
function yoklama(id, k) {
  const durak = durakBul(id);
  if (!durak || !yk || DURAKLAR[yk.sira]?.id !== id || yk.k !== k || k >= durak.yoklama.length) return git('#/soru');
  const p = durak.yoklama[k], n = durak.yoklama.length;
  kur({ baslik: `Yoklama · ${durak.ad}`, yuzde: Math.round((k + 1) / n * 100),
    icerik: secIcerik(p),
    altHtml: `<button class="geri" id="geri" aria-label="Geri"${k > 0 ? ' disabled' : ''}>‹</button><button class="ileri" id="ileri" disabled>İleri</button>` });
  document.getElementById('geri').onclick = () => (GOM ? bildir({ git: 'liste' }) : git('#/soru'));
  secCiz(p, dogruMu => { if (dogruMu) yk.dogru++; });
  let gecti = false;
  document.getElementById('ileri').onclick = () => {
    if (gecti) return; gecti = true;
    if (k + 1 < n) { yk.k++; return git(`#/yoklama/${id}/${yk.k}`); }
    yk.sonuclar.push({ durakId: id, dogruSayisi: yk.dogru });
    yk.sira++; yk.k = 0; yk.dogru = 0;
    if (yk.sira < DURAKLAR.length) return git(`#/yoklama/${DURAKLAR[yk.sira].id}/0`);
    yoklamaBitir();
  };
}

function yoklamaBitir() {
  const sonuc = yoklamaIsle(oku(), yk.sonuclar, DURAKLAR);
  yaz(sonuc.h);
  bildir({ yoklama: sonuc.baslangic });
  const ozet = yk.sonuclar.map(s => `${esc(durakBul(s.durakId).ad)}: ${s.dogruSayisi}/${durakBul(s.durakId).yoklama.length}`).join(' · ');
  yk = null;
  const kitap = sonuc.baslangic === 'kitap';
  kur({ baslik: 'Yoklama bitti', yuzde: 100,
    icerik: `<div class="giris"><h1>${kitap ? 'Hepsini biliyorsun' : 'Buradan başlıyoruz'}</h1>
      <p>${ozet}</p>
      <p>${kitap ? 'Duyum kanadı tamam sayıldı. Sıra Ders yolunda: anlam kanadını orada yoklayacağız.'
        : `${esc(durakBul(sonuc.baslangic).ad)} durağından başlıyoruz. Geçtiğin duraklar duyumda tamam sayıldı.`}</p></div>`,
    altHtml: kitap ? `<button class="ileri" id="devam"${GOM ? '' : ' disabled'}>Ders yoluna geç${GOM ? '' : ' (yakında)'}</button>`
      : `<button class="ileri" id="devam">Devam</button>` });
  if (!kitap) document.getElementById('devam').onclick = () => git(`#/durak/${sonuc.baslangic}/0`);
  else if (GOM) document.getElementById('devam').onclick = () => bildir({ git: 'ders' });
}

const ROZET = { yeni: ['Yeni', 'yeni'], duyum: ['Duyum ✓', 'duyum'], kural: ['Kural ✓', 'kural'], tam: ['Tam ✓✓', 'tam'] };

function durak(id, no) {
  const d = durakBul(id), S = d?.sayfalar;
  if (!d || !Number.isInteger(no) || no < 0 || no >= S.length) return git('#/');
  const p = S[no], son = no === S.length - 1;
  const yuzde = Math.round((no + 1) / S.length * 100);
  const baslik = `Durak ${d.no} · ${d.ad}`;
  let icerik;
  if (p.tur === 'gor') icerik = `<div class="sahne" role="img" aria-label="${esc(p.S.alt || '')}">${sahneSvg(p.S)}</div>${dinleDugmesi()}`;
  else if (p.tur === 'sec') icerik = secIcerik(p);
  else {
    const h = oku(), ids = p.birimler;
    const duyumTamam = ids.filter(b => ['duyum', 'tam'].includes(durum(h, b))).length;
    icerik = `<p class="yonerge">Şimdi duyduklarının yazılışını gör. Dokun, yeniden dinle.</p>
      <div class="sozcukler">${ids.map(b => {
        const [etiket, sinif] = ROZET[durum(h, b)];
        return `<button lang="en" data-b="${esc(b)}">${esc(BIRIMLER[b]?.en ?? b)}<small lang="tr" class="rz ${sinif}">${etiket}</small></button>`;
      }).join('')}</div>
      <div class="kanat"><div class="${duyumTamam === ids.length ? 'tamam' : ''}"><b>Duyum kanadı</b>${duyumTamam}/${ids.length} birim duyuldu.</div>
      <div><b>Anlam kanadı</b>Ders yolunda: neden <i lang="en">an apple</i>, neden <i lang="en">apples</i>? (4 dk)</div></div>
      <p class="not">İki kanat birlikte tamamlanınca sözcük "öğrenildi" sayılır.</p>`;
  }
  // Gömülü kipte son sayfa sonraki durağa geçer (son durakta listeye döner); ilk sayfada geri listeye döner.
  const sonrakiDurak = DURAKLAR[DURAKLAR.indexOf(d) + 1];
  const sonEtiket = GOM ? (sonrakiDurak ? 'Sonraki durak' : 'Bitir') : 'Başa dön';
  kur({ baslik, yuzde, icerik,
    altHtml: `<button class="geri" id="geri" aria-label="Geri">‹</button><button class="ileri" id="ileri"${p.tur === 'sec' ? ' disabled' : ''}>${son ? sonEtiket : 'İleri'}</button>` });
  bildir({ sayfa: { durak: id, no } });
  document.getElementById('geri').onclick = () => (no > 0 ? git(`#/durak/${id}/${no - 1}`) : GOM ? bildir({ git: 'liste' }) : git('#/'));
  document.getElementById('ileri').onclick = () => {
    if (!son) return git(`#/durak/${id}/${no + 1}`);
    if (!GOM) return git('#/');
    if (sonrakiDurak) return git(`#/durak/${sonrakiDurak.id}/0`);
    bildir({ git: 'liste' });
  };
  if (p.tur === 'gor') { const b = document.getElementById('dinle'); b.onclick = () => cal(p.ses, b); cal(p.ses, b); }
  else if (p.tur === 'sec') {
    const key = `${id}:${no}`;
    secCiz(p, dogruMu => {
      let h = oku(); const gun = bugun();
      for (const b of p.birimler ?? []) h = duyumIsle(h, b, key, dogruMu, gun);
      yaz(h);
    });
  } else {
    govde.querySelectorAll('.sozcukler button').forEach(b => b.onclick = () => cal([{ rol: 'anlatici', metin: BIRIMLER[b.dataset.b]?.ses ?? BIRIMLER[b.dataset.b]?.en ?? '' }], b));
  }
}

// ---------- Yönlendirme ----------
function yonlendir() {
  try {
    const [, rota, a, b] = location.hash.split('/');
    if (rota === 'soru') return soru();
    // Uygulamadan doğrudan yoklama: giriş sorusunu atlar ("Okulda öğrendim" cevabı uygulamanın açılışında verildi).
    if (rota === 'yoklama-basla') { yk = { sira: 0, k: 0, dogru: 0, sonuclar: [] }; return git(`#/yoklama/${DURAKLAR[0].id}/0`); }
    if (rota === 'yoklama') return yoklama(a, +b);
    if (rota === 'durak') return durak(a, +b);
    giris();
  } catch (e) { console.error(e); giris(); }
}
window.addEventListener('hashchange', yonlendir);
yonlendir();
