// Yolculuk web deneme oynatıcısı (Görev 6). Veri: icerik/filiz (DURAKLAR), mantık: kanat.js, bellek: bellek.js.
// Adresler: #/ (giriş) · #/soru (giriş sorusu) · #/yoklama/<durakId>/<k> · #/durak/<durakId>/<sayfaNo> · #/yoklama-basla
// Gömülü kip (?gom=1, 18 Kasım 2026): iDil tanıtım uygulaması oynatıcıyı iframe'de açar. Telefon çerçevesi kalkar; sayfa
// değişimi, yoklama sonucu ve "listeye dön / Ders'e geç" istekleri üst pencereye postMessage ile bildirilir. Hafıza ortaktır (bellek.js).
// Pratik ve hikâyecik (Görev 3, 21 Kasım 2026): #/pratik/<durakId>/<k> · #/hikaye/<durakId>/<h>/<sayfa> · #/hikaye/<durakId>/<h>/soru/<j>.
// Akış: sahne sayfaları → yazı → pratik 0 … → hikâye 0 (sayfalar, sonra 3 soru) … → sonraki durak; akış ve hafıza anahtarları akis.js'te.
// Pratiği ve hikâyesi olmayan durakta akış bugünküyle aynıdır. Oyun ve hikâye stilleri oyun.css'te (bu betiğin yanında; aşağıda eklenir).
// Deneme anahtarı ?ornek=1 (yalnız tanıtım): Görev 2'nin örnek durağı (icerik/filiz/test/ornek/oyunlu.js, altı oyun türü ve bir
// hikâye) gerçek durakların sonuna eklenir; #/durak/oyunlu/0 ile açılır. Dosya yoksa (ör. sitede yayımlanmadıysa) sessizce gerçek veriyle sürer.
// Yazı balonu (kurucu kararı, 23 Kasım 2026): her satır bir konuşma balonuyla görünür; üstte İngilizce yazılış, altta Türkçe harfli
// okunuş (icerik/filiz/okunus-tr.js). "sen" sağda, öteki roller solda. Çalan satırın balonu vurgulanır; balona dokununca o satır
// yeniden çalar. sırala ve boşlukta kök cümlenin balonu cevaptan önce gösterilmez. Üst çubuktaki "Aa" balonları gizler ya da
// gösterir (localStorage 'idil.filiz.yazi'; depolama yoksa açık). Bu karar onaylı tasarımın "yazı en son" ve "Türkçe yok"
// kurallarını değiştirir (IKI_KANAT.md §4.3 notu).
// Öğretmen geçişi (kurucu geri bildirimi, 23 Kasım 2026; brif ek-ogretmen-ekran-brief.md §2): durağın bir parçası (sahne, pratik,
// hikâyecik) bitince "İleri" #/gecis/<durakId>/<parca> ekranını açar: kutlama, sıradaki adım ve "Şimdi" düğmesi (icerik/seviye/
// ogretmen.js adimBitince). Sıradaki adım oynatıcıdaysa (sahne, pratik, hikâye) oraya gider; uygulamadaysa (ders, kart, sınav)
// gömülü kipte bildir({ git: 'adres', href }), tek başına kipte ../../uygulama/index.html<href>. "Sonraki durak" düğmesi kalktı:
// sıradaki durağa öğretmen karar verir. Öğretmenin uygulamadan gelen girdisi (geçilen duraklar, seviye sınavı kaydı) gömülü kipte
// adresin ogr parametresindedir (JSON { gecilen, yerlesilen, ders, sinav, sinavSayi, sinavHref }; ders: kısa ders kaydı); tek başına kipte boştur ve sınav adımı yok sayılır.
// Tur 2 (23 Kasım 2026): sahnedeki sec sayfası doğru ya da yanlış cevaplanınca ekran kaydına yazılır (akis.ekranCevapla); sahne
// her sec sayfası bir kez cevaplanınca biter. Duyum sayımı değişmez (yanlış cevap duyum kazandırmaz).
import { sahneSvg } from '../../uygulama/kart-gorsel.js';
import { DURAKLAR, durakBul } from '../../icerik/filiz/index.js';
import { BIRIMLER } from '../../icerik/filiz/birimler.js';
import { sesAdiTarayici } from '../../icerik/filiz/ses-adi.js';
import { OKUNUS_TR, okunusTr } from '../../icerik/filiz/okunus-tr.js';
import { duyumIsle, durum, yoklamaIsle } from '../../icerik/filiz/kanat.js';
import { oku, yaz, sifirla } from './bellek.js';
import { akis, konumSirasi, konumCoz, konumKuyrugu, oynaticiAdresi, pratikAnahtari, hikayeAnahtari, hikayeSayfaAnahtari, sahneAnahtari, ekranCevapla, oyunEkranAnahtari, karistir } from './akis.js';
import { adimBitince } from '../../icerik/seviye/ogretmen.js';
// Sürüm numarası (kurucu isteği, 23 Kasım 2026): giriş ekranında ve üst çubuğun sağ ucunda, "Aa"nın yanında küçük ve soluk.
import { surumYazisi } from '../../icerik/surum.js';

// Oyun ve hikâye stilleri: index.html'e dokunulmaz (yayımlanan sitede kendi kopyası var); adres bu betiğin yerinden kurulur.
try {
  const l = document.createElement('link');
  l.rel = 'stylesheet'; l.href = new URL('oyun.css', import.meta.url).href;
  document.head.append(l);
} catch { /* stil yoksa oyunlar yine çalışır */ }

if (new URLSearchParams(location.search).has('ornek')) {
  try {
    const ornek = (await import('../../icerik/filiz/test/ornek/oyunlu.js')).default;
    if (ornek?.id && !durakBul(ornek.id)) DURAKLAR.push(ornek);
  } catch { /* örnek dosyası yoksa gerçek duraklarla sürer */ }
}

const govde = document.getElementById('govde'), alt = document.getElementById('alt');
const baslikEl = document.getElementById('baslik'), cubuk = document.getElementById('cubuk');
const SES_KLASORU = '../../icerik/filiz/ses/';
// Önbellek kırıcı (22 Kasım 2026): ad → dosya baytlarının özeti (icerik/filiz/ses-surum.js; node icerik/filiz/ses-surum-yaz.mjs yazar).
// Ses yeniden üretilince ad aynı kalır, ?v= değişir; tarayıcı eski kopyayı çalamaz. Dizin yoksa ya da adı yoksa sorgusuz istenir.
let SES_SURUM = {};
try { SES_SURUM = (await import('../../icerik/filiz/ses-surum.js')).SES_SURUM || {}; } catch { /* sürüm dizini yoksa sesler sorgusuz */ }
const sesAdresi = ad => `${SES_KLASORU}${ad}.m4a${SES_SURUM[ad] ? `?v=${SES_SURUM[ad]}` : ''}`;
const hoparlor = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>';
const esc = m => String(m).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const GOM = new URLSearchParams(location.search).has('gom') && window.parent !== window;
if (GOM) document.documentElement.classList.add('gom');
// Üst pencereye bildirim (yalnız gömülü kipte, yalnız aynı köken).
const bildir = m => { if (GOM) try { window.parent.postMessage({ tur: 'idil-yolculuk', ...m }, location.origin); } catch { /* üst pencere yoksa yok say */ } };
// Öğretmen girdisi (gömülü kipte uygulamadan; bozuksa boş).
// sinavSayi: hazır seviye sınavının soru sayısı (0: sınav yok ya da hazır değil); sinavHref: uygulamadaki sınav adresi.
const OGR = (() => {
  const bos = { gecilen: [], yerlesilen: [], ders: null, sinav: null, sinavSayi: 0, sinavHref: null };
  if (!GOM) return bos;
  try {
    const x = JSON.parse(new URLSearchParams(location.search).get('ogr') || '{}');
    const n = Number.isInteger(x?.sinavSayi) && x.sinavSayi > 0 && x.sinavSayi <= 500 ? x.sinavSayi : 0;
    const href = typeof x?.sinavHref === 'string' && /^#\/seviye-sinavi\/[\w/-]+$/.test(x.sinavHref) ? x.sinavHref : null;
    const metinler = v => (Array.isArray(v) ? v.filter(y => typeof y === 'string') : []);
    return { gecilen: metinler(x?.gecilen), yerlesilen: metinler(x?.yerlesilen), ders: x?.ders && typeof x.ders === 'object' ? x.ders : null,
      sinav: x?.sinav && typeof x.sinav === 'object' ? x.sinav : null, sinavSayi: href ? n : 0, sinavHref: href };
  } catch { return bos; }
})();
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
      const ses = new Audio(sesAdresi(ad));
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
      // Bu satırın balonları (aynı rol ve metin) çalarken vurgulanır.
      const bal = [...govde.querySelectorAll('.balon')].filter(b => b.dataset.metin === s.metin && b.dataset.rol === s.rol);
      bal.forEach(b => b.classList.add('caliyor'));
      await birDosya(ad);
      if (j === jeton) bal.forEach(b => b.classList.remove('caliyor'));
    }
    if (j === jeton) dugme?.classList.remove('caliyor');
  } catch { /* ses yoksa sayfa yine ilerler */ }
}

// ---------- Yazı balonu (23 Kasım 2026) ----------
// Aç-kapa: kökte .yazi-kapali sınıfı balonları ve okunuşları CSS ile gizler (display:none; ekran okuyucu da okumaz).
// Sayfa yeniden çizilmez; cevaplanmış soru bozulmaz.
const YAZI_ANAHTAR = 'idil.filiz.yazi';
const yaziAcik = () => { try { return localStorage.getItem(YAZI_ANAHTAR) !== '0'; } catch { return true; } };
function yaziUygula(acik) {
  document.documentElement.classList.toggle('yazi-kapali', !acik);
  const d = document.getElementById('yazi-dugme');
  if (d) d.setAttribute('aria-pressed', String(acik));
}
try {
  const ust = document.querySelector('header .ust');
  if (ust) {
    const d = document.createElement('button');
    d.id = 'yazi-dugme'; d.className = 'yazi-dugme'; d.type = 'button';
    d.setAttribute('aria-label', 'Yazıyı göster ya da gizle');
    d.innerHTML = '<span aria-hidden="true">Aa</span>';
    d.onclick = () => {
      const acik = document.documentElement.classList.contains('yazi-kapali'); // kapalıysa aç, açıksa kapat
      try { localStorage.setItem(YAZI_ANAHTAR, acik ? '1' : '0'); } catch { /* depolama yoksa yalnız bu oturum */ }
      yaziUygula(acik);
    };
    ust.append(d);
  }
  if (ust) {
    const v = document.createElement('span');
    v.className = 'surum-isaret'; v.textContent = surumYazisi();
    ust.append(v);
  }
} catch { /* başlık yoksa düğme yok; balonlar açık kalır */ }
yaziUygula(yaziAcik());

const zikzak = '<svg width="44" height="22" viewBox="0 0 44 22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 5l4-3 4 3 4-3 4 3 4-3 4 3 4-3 4 3 4-3 4 3"/><path d="M2 12l4-3 4 3 4-3 4 3 4-3 4 3 4-3 4 3 4-3 4 3"/><path d="M2 19l4-3 4 3 4-3 4 3 4-3 4 3 4-3 4 3 4-3 4 3"/></svg>';
// Bilerek anlaşılmaz hızlı söz: okunus-tr.js'te değeri null olan satır. Balonda yazı yok, yalnız hızlı söz simgesi.
const hizliSoz = m => Object.prototype.hasOwnProperty.call(OKUNUS_TR, m) && OKUNUS_TR[m] === null;
// Tek satırın balonu (düğme: dokununca satır yeniden çalar; olay govde'de tek yerden bağlanır).
function balonHtml(s) {
  if (!s || typeof s.metin !== 'string') return '';
  const yon = s.rol === 'sen' ? 'sag' : 'sol', veri = `data-rol="${esc(s.rol)}" data-metin="${esc(s.metin)}"`;
  if (hizliSoz(s.metin)) return `<button type="button" class="balon balon-${yon} balon-hizli" ${veri} aria-label="Hızlı ve uzun söz. Yeniden dinle">${zikzak}</button>`;
  const o = okunusTr(s.metin);
  return `<button type="button" class="balon balon-${yon}" ${veri}><span class="balon-en" lang="en">${esc(s.metin)}</span>${o ? `<span class="balon-ok" lang="tr">${esc(o)}</span>` : ''}</button>`;
}
const balonlarHtml = (satirlar, id = 'balonlar') => `<div class="balonlar" id="${id}">${(satirlar || []).map(balonHtml).join('')}</div>`;
// Cevaptan sonra gösterilecek satırları balon kabına ekler (aynı metin zaten varsa eklemez).
function balonEkle(satirlar, id = 'balonlar') {
  const kap = document.getElementById(id);
  if (!kap) return;
  const var_ = new Set([...kap.querySelectorAll('.balon')].map(b => b.dataset.metin));
  const yeni = (satirlar || []).filter(s => s && !var_.has(s.metin));
  if (yeni.length) kap.insertAdjacentHTML('beforeend', yeni.map(balonHtml).join(''));
}
govde.addEventListener('click', e => {
  const b = e.target.closest?.('.balon');
  if (b && govde.contains(b)) cal([{ rol: b.dataset.rol, metin: b.dataset.metin }], b);
});

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

// sec sayfası: cevap verilince bitis(dogruMu) bir kez çağrılır. Yanlış seçilen seçenek kırmızı çerçeve alır (.yanlis), ardından
// doğrusu yeşil gösterilir. Kurucu kararı (23 Kasım 2026): "yanlışım kırmızı görünsün"; Dalga 0'da getirilen soluklaştırma
// (sakin) kaldırıldı. `sakin` seçeneği geriye uyum için kabul edilir ama artık bir şey değiştirmez.
function secCiz(p, bitis, { sakin = false } = {}) {
  const sj = sayfa, d = document.getElementById('dinle');
  d.onclick = () => cal(p.ses, d); cal(p.ses, d);
  let bitti = false;
  govde.querySelectorAll('.secenekler button').forEach(b => b.onclick = () => {
    if (bitti) return; bitti = true;
    const k = +b.dataset.k, dogruMu = k === p.dogru;
    // Doğru cevaptan sonra çalan satırlar balon olarak görünür (sırala ve boşlukta da tam cümle burada açılır).
    if (dogruMu) { b.classList.add('dogru'); balonEkle(p.dogruSes); cal(p.dogruSes); }
    else {
      b.classList.add('yanlis');
      setTimeout(() => {
        if (sj !== sayfa) return;
        govde.querySelector(`[data-k="${p.dogru}"]`)?.classList.add('dogru'); balonEkle(p.dogruSes); cal(p.dogruSes);
      }, 450);
    }
    try { bitis(dogruMu); } catch (e) { console.error(e); }
    const ileri = document.getElementById('ileri'); if (ileri) ileri.disabled = false;
  });
}
const secenekHtml = (secenek, grup) => `<div class="secenekler"${grup ? ` role="group" aria-label="${esc(grup)}"` : ''}>${secenek.map((s, k) => `<button data-k="${k}" aria-label="${esc(s.alt || 'Seçenek ' + (k + 1))}">${sahneSvg({ ...s, boy: 120 })}</button>`).join('')}</div>`;
// yonerge verilirse (hikâye soruları) hem yönerge metni hem seçenek grubunun erişilebilir adı odur; verilmezse bugünkü metin.
const DINLE_YONERGE = 'Duyduğunun resmine dokun';
const HIKAYE_YONERGE = 'Hikâyeye göre doğru resme dokun'; // hikâye sorusu: doğru resim hikâyedeki cevaptır, duyulan sesin resmi değil
// Seçenekler resimdir; sorulan sesin yazısı cevabı ele vermez, bu yüzden balonu "Yeniden dinle"nin altında hemen görünür.
const secIcerik = (p, yonerge) => `${dinleDugmesi()}${balonlarHtml(p.ses)}<p class="yonerge">${esc(yonerge || DINLE_YONERGE)}</p>
  ${secenekHtml(p.secenek, yonerge)}`;
const gorIcerik = p => `<div class="sahne" role="img" aria-label="${esc(p.S.alt || '')}">${sahneSvg(p.S)}</div>${balonlarHtml(p.ses)}${dinleDugmesi()}`;
const gorBagla = p => { const b = document.getElementById('dinle'); b.onclick = () => cal(p.ses, b); cal(p.ses, b); };

// Durak içi gezinme (sahne, pratik, hikâye ortak): geri önceki ekrana, ileri sonrakine. Bir parçanın son ekranında (sahnenin son
// sayfası, son oyun, son hikâyenin son sorusu) "İleri" öğretmenin geçiş ekranını açar (#/gecis/<durakId>/<parca>; öğretmen işi,
// 23 Kasım 2026). İlk ekranda geri listeye (gömülü) ya da girişe.
function gezinme(d, konum, kilitli) {
  const A = akis(d), i = konumSirasi(d, konum);
  const parcaSonu = i >= 0 && A[i + 1]?.parca !== A[i].parca;
  return {
    altHtml: `<button class="geri" id="geri" aria-label="Geri">‹</button><button class="ileri" id="ileri"${kilitli ? ' disabled' : ''}>İleri</button>`,
    bagla() {
      document.getElementById('geri').onclick = () => (i > 0 ? git(oynaticiAdresi(d.id, A[i - 1])) : GOM ? bildir({ git: 'liste' }) : git('#/'));
      document.getElementById('ileri').onclick = () => (parcaSonu ? git(`#/gecis/${d.id}/${A[i].parca}`) : git(oynaticiAdresi(d.id, A[i + 1])));
    },
  };
}

// ---------- Öğretmen geçişi (23 Kasım 2026) ----------
// Uygulama adresi (ogretmen.js href) → oynatıcı adresi: #/yolculuk/<id>/<no> · …/pratik/<k> · …/hikaye/<h>/<s> ya da …/soru/<j>.
// Oynatıcının açamadığı adres (ders, kart, sınav, Yolum) null.
function oynaticidaki(href) {
  const m = /^#\/yolculuk\/([^/]+)\/(.+)$/.exec(String(href || ''));
  const d = m && durakBul(m[1]);
  if (!d) return null;
  const [p, ...kuyruk] = m[2].split('/');
  const konum = p === 'pratik' || p === 'hikaye' ? konumCoz(d, p, kuyruk.join('/')) : konumCoz(d, 'sahne', m[2]);
  return konum ? oynaticiAdresi(d.id, konum) : null;
}
// Uygulamadaki bir adrese git: gömülü kipte üst pencere gider; tek başına kipte uygulama sayfası açılır.
function uygulamayaGit(href) {
  if (GOM) return bildir({ git: 'adres', href });
  location.href = new URL(`../../uygulama/index.html${href}`, location.href).href;
}
function gecis(id, parca) {
  const d = durakBul(id), A = d ? akis(d) : [];
  const son = [...A].reverse().find(x => x.parca === parca);
  if (!son) return git('#/');
  const girdi = { h: oku(), yolculuk: null, sinav: OGR.sinav, gecilen: OGR.gecilen, yerlesilen: OGR.yerlesilen, ders: OGR.ders };
  // Sınav adımı yalnız uygulama hazır sınav bildirdiyse (soru sayısı ve adres); sorular burada yalnız sayılır.
  const kaynak = { duraklar: DURAKLAR, sinav: Array.from({ length: OGR.sinavSayi }, () => ({})) };
  let r;
  // adimBitince bu durağın adımına bakar: bittiyse kutlama, bitmediyse ara durum ("Sahnede 3 soru kaldı.") ve aynı adımın kalan yeri.
  try { r = adimBitince(girdi, kaynak, parca, d.id); } catch (e) { console.error(e); r = { kutlama: 'Bu parçayı bitirdin.', sonraki: null }; }
  const x = r.sonraki && r.sonraki.tur === 'sinav' && OGR.sinavHref ? { ...r.sonraki, href: OGR.sinavHref } : r.sonraki;
  const kutlama = r.kutlama;
  kur({ baslik: `Durak ${d.no} · ${d.ad}`, yuzde: 100,
    icerik: `<div class="giris gecis" role="status"><p class="gecis-kutlama">${esc(kutlama)}</p>
      ${x ? `<div class="gecis-sonraki"><span class="gecis-etiket">Sıradaki</span><b>${esc(x.ad)}</b><span>${x.sure} dakika · ${esc(x.neden)}</span></div>` : ''}</div>`,
    altHtml: `<button class="ikincil" id="sonra">Sonra</button>${x && x.href ? `<button class="ileri" id="simdi">Şimdi: ${esc(x.ad)}</button>` : ''}` });
  document.getElementById('sonra').onclick = () => (GOM ? bildir({ git: 'adres', href: '#/bugun' }) : git('#/'));
  const simdi = document.getElementById('simdi');
  if (simdi) simdi.onclick = () => { const ic = oynaticidaki(x.href); if (ic) git(ic); else uygulamayaGit(x.href); };
}
// Geçersiz pratik ya da hikâye adresi: gömülü kipte uygulama durak listesine döner; tek başına giriş ekranı (bugünkü geri dönüş).
const gecersiz = () => { bildir({ git: 'liste' }); git('#/'); };

// ---------- Ekranlar ----------
function giris() {
  kur({ baslik: 'Hoş geldin', yuzde: 0,
    icerik: `<div class="giris"><h1>Bak, dinle, anla.</h1>
      <p>Resme bak, sesi dinle. Altında yazılışı ve okunuşu görürsün; istersen “Aa” ile gizle. Her sayfada yalnız bir yeni şey var.</p>
      <p>Arada bir soru gelir: duyduğun şeyin resmine dokun.</p>
      <p class="not">Deneme sürümü ${surumYazisi()} · yapay ses</p>
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
  secCiz(p, dogruMu => { if (dogruMu) yk.dogru++; }, { sakin: true });
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
  const p = S[no];
  const yuzde = Math.round((no + 1) / S.length * 100);
  const baslik = `Durak ${d.no} · ${d.ad}`;
  let icerik;
  if (p.tur === 'gor') icerik = gorIcerik(p);
  else if (p.tur === 'sec') icerik = secIcerik(p);
  else {
    const h = oku(), ids = p.birimler;
    const duyumTamam = ids.filter(b => ['duyum', 'tam'].includes(durum(h, b))).length;
    icerik = `<p class="yonerge">Şimdi duyduklarının yazılışını gör. Dokun, yeniden dinle.</p>
      <div class="sozcukler">${ids.map(b => {
        const [etiket, sinif] = ROZET[durum(h, b)];
        const ok = okunusTr(BIRIMLER[b]?.ses ?? BIRIMLER[b]?.en ?? '');
        return `<button lang="en" data-b="${esc(b)}">${esc(BIRIMLER[b]?.en ?? b)}${ok ? `<span lang="tr" class="sozcuk-ok">${esc(ok)}</span>` : ''}<small lang="tr" class="rz ${sinif}">${etiket}</small></button>`;
      }).join('')}</div>
      <div class="kanat"><div class="${duyumTamam === ids.length ? 'tamam' : ''}"><b>Duyum kanadı</b>${duyumTamam}/${ids.length} birim duyuldu.</div>
      <div><b>Anlam kanadı</b>Ders yolunda: neden <i lang="en">an apple</i>, neden <i lang="en">apples</i>? (4 dk)</div></div>
      <p class="not">İki kanat birlikte tamamlanınca sözcük "öğrenildi" sayılır.</p>`;
  }
  // Gömülü kipte durağın son ekranı sonraki durağa geçer (son durakta listeye döner); ilk sayfada geri listeye döner.
  // Pratiği ya da hikâyesi olan durakta yazı sayfası son ekran değildir: "İleri" pratik 0'a gider (gezinme, akis.js).
  const g = gezinme(d, { parca: 'sahne', no }, p.tur === 'sec');
  kur({ baslik, yuzde, icerik, altHtml: g.altHtml });
  bildir({ sayfa: { durak: id, no } });
  g.bagla();
  if (p.tur === 'gor') gorBagla(p);
  else if (p.tur === 'sec') {
    const key = sahneAnahtari(id, no);
    secCiz(p, dogruMu => {
      let h = oku(); const gun = bugun();
      for (const b of p.birimler ?? []) h = duyumIsle(h, b, key, dogruMu, gun);
      h = ekranCevapla(h, key, gun); // doğru ya da yanlış: sayfa cevaplandı (sahne bitişi, Tur 2)
      yaz(h);
    }, { sakin: true });
  } else {
    govde.querySelectorAll('.sozcukler button').forEach(b => b.onclick = () => cal([{ rol: 'anlatici', metin: BIRIMLER[b.dataset.b]?.ses ?? BIRIMLER[b.dataset.b]?.en ?? '' }], b));
  }
}

// ---------- Pratik ve hikâyecik (Görev 3) ----------
// Hafıza: her cevapta oyunun birimleri için duyumIsle; yalnız doğru cevap sayar (kanat.js). Yanlış cevap da sahnedeki sec gibi
// dogru=false ile çağrılır: sayaç düşmez, yalnız birimin boş kaydı açılabilir.
// Tur 3 (23 Kasım 2026): her cevap, doğru ya da yanlış, ekranın cevap kaydına da yazılır (akis.ekranCevapla; ekranKey: tek ekranlı
// oyunda oyunun anahtarı, eşleştir ve hızlı turda oyunEkranAnahtari). Ekran "yapıldı" sayılır; duyum sayımı değişmez.
function hafizayaYaz(birimler, key, dogru, ekranKey = key) {
  let h = oku(); const gun = bugun();
  for (const b of birimler ?? []) h = duyumIsle(h, b, key, dogru, gun);
  h = ekranCevapla(h, ekranKey, gun);
  yaz(h);
}
const kisa = ms => new Promise(coz => setTimeout(coz, ms));

// Her oyun: icerik(o, key) → HTML; bagla(o, key, ac) olayları bağlar, oyun bitince ac() "İleri"yi açar.
const OYUNLAR = {
  // dinle-seç: bugünkü sec sayfası (yanlışta kırmızı yok).
  sec: {
    icerik: o => secIcerik(o),
    bagla: (o, key) => secCiz(o, dogru => hafizayaYaz(o.birimler, key, dogru), { sakin: true }),
  },
  // eşleştir: solda 4 ses düğmesi, sağda karışık 4 resim. Önce ses ya da önce resim seçilebilir. Yanlışta o sesin resmi gösterilir
  // ve çift kapanır (sayılmaz); her çift bir etkileşimdir.
  eslestir: {
    icerik: (o, key) => {
      const sira = karistir(o.ciftler.length, key);
      return `<div class="eslestir">${o.ciftler.map((_, r) => {
        const c = o.ciftler[sira[r]];
        const s0 = (o.ciftler[r].ses || [])[0], ok = s0 && !hizliSoz(s0.metin) ? okunusTr(s0.metin) : null;
        const yazi = s0 && !hizliSoz(s0.metin) ? `<span class="es-yazi"><span class="balon-en" lang="en">${esc(o.ciftler[r].ses.map(x => x.metin).join(' '))}</span>${ok ? `<span class="balon-ok" lang="tr">${esc(ok)}</span>` : ''}</span>` : '';
        return `<button class="es-ses${yazi ? ' es-yazili' : ''}" data-i="${r}" aria-label="Dinle ${r + 1}">${hoparlor}${yazi}<i class="es-no"></i></button>
          <button class="es-resim" data-i="${sira[r]}" aria-label="${esc(c.S.alt || 'Seçenek ' + (r + 1))}">${sahneSvg({ ...c.S, boy: 130 })}<i class="es-no"></i></button>`;
      }).join('')}</div>`;
    },
    bagla: (o, key, ac) => {
      const sj = sayfa, n = o.ciftler.length;
      const ses = i => govde.querySelector(`.es-ses[data-i="${i}"]`), resim = i => govde.querySelector(`.es-resim[data-i="${i}"]`);
      const kapali = new Set();
      let secili = null, bekle = false;
      const temizle = () => { secili = null; govde.querySelectorAll('.es-secili').forEach(e => e.classList.remove('es-secili')); };
      const kapat = (i, dogru) => {
        kapali.add(i);
        for (const e of [ses(i), resim(i)]) { e.classList.add(dogru ? 'dogru' : 'gosterildi'); e.querySelector('.es-no').textContent = kapali.size; }
        resim(i).disabled = true;
        hafizayaYaz([o.ciftler[i].birim], key, dogru, oyunEkranAnahtari(key, i));
        if (kapali.size === n) ac();
      };
      const dene = (si, ri) => {
        temizle();
        if (si === ri) { kapat(si, true); cal(o.ciftler[si].ses); return; }
        bekle = true;
        resim(ri).classList.add('soluk-an');
        setTimeout(() => {
          if (sj !== sayfa) return;
          resim(ri).classList.remove('soluk-an'); bekle = false;
          kapat(si, false); cal(o.ciftler[si].ses);
        }, 450);
      };
      govde.querySelectorAll('.es-ses').forEach(b => b.onclick = () => {
        const i = +b.dataset.i;
        cal(o.ciftler[i].ses, b);
        if (bekle || kapali.has(i)) return;
        if (secili?.tur === 'resim') return dene(i, secili.i);
        temizle(); secili = { tur: 'ses', i }; b.classList.add('es-secili');
      });
      govde.querySelectorAll('.es-resim').forEach(b => b.onclick = () => {
        const i = +b.dataset.i;
        if (bekle || kapali.has(i)) return;
        if (secili?.tur === 'ses') return dene(secili.i, i);
        temizle(); secili = { tur: 'resim', i }; b.classList.add('es-secili');
      });
    },
  },
  // sırala: cümle çalar; karışık sözcük kartlarına sırayla dokunulur. Yerdeki karta dokununca geri döner. Bütün yerler dolunca
  // denetlenir; yanlışsa doğru sıra gösterilir.
  sirala: {
    // Kök cümlenin balonu cevaptan önce gösterilmez (cevabı ele verir); bitince tam cümle balonla açılır.
    icerik: (o, key) => `${dinleDugmesi()}${balonlarHtml([])}<div class="sira-yer" id="sira-yer" lang="en"></div>
      <div class="sira-kartlar" lang="en">${karistir(o.parcalar.length, key).map(i => `<button class="sira-kart" data-i="${i}">${esc(o.parcalar[i])}</button>`).join('')}</div>`,
    bagla: (o, key, ac) => {
      gorBagla(o);
      const yer = document.getElementById('sira-yer'), n = o.parcalar.length, dizilen = [];
      let bitti = false;
      const ciz = () => {
        yer.innerHTML = o.parcalar.map((_, j) => (j < dizilen.length ? `<button class="sira-kart yerde" data-j="${j}">${esc(o.parcalar[dizilen[j]])}</button>` : '<span class="sira-bos"></span>')).join('');
        yer.querySelectorAll('.yerde').forEach(b => b.onclick = () => {
          if (bitti) return;
          const [i] = dizilen.splice(+b.dataset.j, 1);
          const kart = govde.querySelector(`.sira-kartlar [data-i="${i}"]`);
          if (kart) { kart.disabled = false; kart.classList.remove('kullanildi'); }
          ciz();
        });
      };
      ciz();
      govde.querySelectorAll('.sira-kartlar button').forEach(b => b.onclick = () => {
        if (bitti || b.disabled) return;
        dizilen.push(+b.dataset.i); b.disabled = true; b.classList.add('kullanildi'); ciz();
        if (dizilen.length < n) return;
        bitti = true;
        const dogru = dizilen.map(i => o.parcalar[i]).join(' ') === o.parcalar.join(' ');
        if (dogru) yer.classList.add('dogru');
        else { yer.classList.add('gosterildi'); yer.innerHTML = o.parcalar.map(m => `<span class="sira-kart">${esc(m)}</span>`).join(''); }
        balonEkle(o.ses);
        cal(o.ses);
        hafizayaYaz(o.birimler, key, dogru);
        ac();
      });
    },
  },
  // boşluk: cümle çalar, metindeki ___ resimli seçeneklerden doldurulur; cevaptan sonra boşluğa duyulan sözcük yazılır.
  bosluk: {
    icerik: o => {
      const [on, arka] = o.metin.split('___');
      // Kök cümlenin balonu cevaptan önce gösterilmez; secCiz cevaptan sonra dogruSes (= ses) balonunu ekler.
      return `${dinleDugmesi()}${balonlarHtml([])}<p class="bosluk-metin" lang="en">${esc(on)}<span class="bosluk-yer" id="bosluk-yer">___</span>${esc(arka)}</p>${secenekHtml(o.secenek)}`;
    },
    bagla: (o, key) => {
      const duyulan = o.ses.map(s => s.metin).join(' ');
      const kacis = m => m.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const m = new RegExp(`^${kacis(o.metin).replace('___', '(.+)')}$`).exec(duyulan);
      secCiz({ ses: o.ses, dogruSes: o.ses, dogru: o.dogru }, dogru => {
        const y = document.getElementById('bosluk-yer');
        if (y && m) { y.textContent = m[1]; y.classList.add('dolu'); }
        hafizayaYaz(o.birimler, key, dogru);
      }, { sakin: true });
    },
  },
  // ne derdin?: durum resmi; üç sesli cümle sırayla çalar (her biri yeniden dinlenebilir); uygun olanın dairesine dokunulur.
  nederdin: {
    icerik: o => `<div class="sahne" role="img" aria-label="${esc(o.S.alt || '')}">${sahneSvg(o.S)}</div>
      <div class="nederdin">${o.secenekSes.map((g, k) => `<div class="nd-satir" data-k="${k}"><button class="dinle nd-dinle" data-k="${k}" aria-label="Dinle ${k + 1}">${hoparlor} ${k + 1}</button><div class="nd-yazi">${(g || []).map(balonHtml).join('')}</div><button class="nd-sec" data-k="${k}" aria-label="Seçenek ${k + 1}"></button></div>`).join('')}</div>`,
    bagla: (o, key, ac) => {
      const sj = sayfa, satir = k => govde.querySelector(`.nd-satir[data-k="${k}"]`), dugme = k => govde.querySelector(`.nd-dinle[data-k="${k}"]`);
      let dizi = 0, bitti = false;
      (async () => { // girişte üç seçenek sırayla; kullanıcı bir şeye dokununca durur
        const my = ++dizi;
        for (let k = 0; k < o.secenekSes.length; k++) {
          if (my !== dizi || sj !== sayfa) return;
          await cal(o.secenekSes[k], dugme(k));
          if (my !== dizi || sj !== sayfa) return;
          await kisa(250);
        }
      })();
      govde.querySelectorAll('.nd-dinle').forEach(b => b.onclick = () => { dizi++; cal(o.secenekSes[+b.dataset.k], b); });
      govde.querySelectorAll('.nd-yazi .balon').forEach(b => b.addEventListener('click', () => { dizi++; })); // çalma govde'deki ortak olayda
      govde.querySelectorAll('.nd-sec').forEach(b => b.onclick = () => {
        if (bitti) return; bitti = true; dizi++;
        const k = +b.dataset.k, dogru = k === o.dogru;
        if (dogru) { satir(k).classList.add('dogru'); cal(o.secenekSes[k], dugme(k)); }
        else {
          satir(k).classList.add('yanlis');
          setTimeout(() => { if (sj !== sayfa) return; satir(o.dogru)?.classList.add('dogru'); cal(o.secenekSes[o.dogru], dugme(o.dogru)); }, 450);
        }
        hafizayaYaz(o.birimler, key, dogru);
        ac();
      });
    },
  },
  // hızlı tur: geri sayım (sure saniye) ve doğru sayısı; dinle-seç soruları art arda. Süre ya da sorular bitince sonuç görünür.
  hizli: {
    icerik: o => `<div class="hizli-ust"><span class="hz-sure" id="hz-sure">⏱ ${o.sure}</span><span class="hz-dogru" id="hz-dogru">✓ 0</span></div><div class="hz-alan" id="hz-alan"></div>`,
    bagla: (o, key, ac) => {
      const sj = sayfa, alan = document.getElementById('hz-alan'), sureEl = document.getElementById('hz-sure'), sayEl = document.getElementById('hz-dogru');
      let kalan = o.sure, q = 0, dogruSay = 0, bitti = false;
      const bitir = () => {
        if (bitti) return; bitti = true; clearInterval(zaman);
        if (sj !== sayfa) return;
        durdur();
        alan.innerHTML = `<div class="hz-sonuc" role="status"><b>✓ ${dogruSay}</b><span>/ ${o.sorular.length}</span></div>`;
        ac();
      };
      const zaman = setInterval(() => {
        if (sj !== sayfa) return clearInterval(zaman);
        kalan = Math.max(0, kalan - 1); sureEl.textContent = `⏱ ${kalan}`;
        if (kalan <= 10) sureEl.classList.add('az');
        if (!kalan) bitir();
      }, 1000);
      const soruCiz = () => {
        if (sj !== sayfa || bitti) return;
        if (q >= o.sorular.length) return bitir();
        const p = o.sorular[q];
        alan.innerHTML = secIcerik(p);
        gorBagla(p);
        let cevap = false;
        alan.querySelectorAll('.secenekler button').forEach(b => b.onclick = () => {
          if (cevap || bitti) return; cevap = true;
          const dogru = +b.dataset.k === p.dogru;
          if (dogru) { b.classList.add('dogru'); sayEl.textContent = `✓ ${++dogruSay}`; }
          else { b.classList.add('yanlis'); alan.querySelector(`[data-k="${p.dogru}"]`)?.classList.add('dogru'); }
          hafizayaYaz(p.birimler, key, dogru, oyunEkranAnahtari(key, q));
          setTimeout(() => { q++; soruCiz(); }, dogru ? 550 : 1100);
        });
      };
      soruCiz();
    },
  },
};

// Oyunda cevaplanacak bir şey var mı (bozuk ya da boş oyun kullanıcıyı kilitlemesin).
const dolu = x => Array.isArray(x) && x.length > 0;
const CEVAPLANIR = {
  sec: o => dolu(o.secenek), bosluk: o => dolu(o.secenek) && typeof o.metin === 'string', nederdin: o => dolu(o.secenekSes),
  eslestir: o => dolu(o.ciftler), sirala: o => dolu(o.parcalar), hizli: o => dolu(o.sorular),
};

function pratik(id, kuyruk) {
  const d = durakBul(id), konum = konumCoz(d, 'pratik', kuyruk), o = konum && d.pratik[konum.k], oyun = o && OYUNLAR[o.tur];
  if (!oyun) return gecersiz();
  const key = pratikAnahtari(id, konum.k), g = gezinme(d, konum, true);
  const ac = () => { const b = document.getElementById('ileri'); if (b) b.disabled = false; };
  let html = '', bozuk = !CEVAPLANIR[o.tur](o);
  if (!bozuk) try { html = oyun.icerik(o, key); } catch (e) { console.error(e); bozuk = true; html = ''; }
  kur({ baslik: `Durak ${d.no} · ${d.ad}`, yuzde: Math.round((konum.k + 1) / d.pratik.length * 100),
    icerik: `<div class="oyun oyun-${o.tur}">${html}</div>`, altHtml: g.altHtml });
  bildir({ durak: id, sayfa: konum.k, parca: 'pratik' });
  g.bagla();
  // Cevaplanacak şey yoksa ya da oyun bağlanamadıysa "İleri" hemen açılır: doğrudan bağlantıyla gelen takılmaz.
  if (bozuk) return ac();
  try { oyun.bagla(o, key, ac); } catch (e) { console.error(e); ac(); }
}

function hikaye(id, kuyruk) {
  const d = durakBul(id), konum = konumCoz(d, 'hikaye', kuyruk), hk = konum && d.hikayeler[konum.h];
  const soruMu = konum?.soru !== undefined, p = hk && (soruMu ? hk.sorular[konum.soru] : hk.sayfalar[konum.s]);
  if (!p || (p.tur !== 'sec' && p.tur !== 'gor')) return gecersiz();
  const n = hk.sayfalar.length + hk.sorular.length, yer = soruMu ? hk.sayfalar.length + konum.soru : konum.s;
  const key = soruMu ? hikayeAnahtari(id, konum.h, konum.soru) : hikayeSayfaAnahtari(id, konum.h, konum.s);
  const g = gezinme(d, konum, p.tur === 'sec');
  const isaret = soruMu ? `<p class="soru-isaret" aria-hidden="true">? ${konum.soru + 1} / ${hk.sorular.length}</p>` : '';
  kur({ baslik: `Durak ${d.no} · ${hk.ad}`, yuzde: Math.round((yer + 1) / n * 100),
    icerik: `<div class="hikaye${soruMu ? ' hikaye-soru' : ''}">${isaret}${p.tur === 'sec' ? secIcerik(p, soruMu ? HIKAYE_YONERGE : undefined) : gorIcerik(p)}</div>`, altHtml: g.altHtml });
  bildir({ durak: id, sayfa: konumKuyrugu(konum), parca: 'hikaye' });
  g.bagla();
  if (p.tur === 'sec') secCiz(p, dogru => hafizayaYaz(p.birimler, key, dogru), { sakin: true });
  else gorBagla(p);
}

// ---------- Yönlendirme ----------
function yonlendir() {
  try {
    const [, rota, a, b, ...ek] = location.hash.split('/');
    if (rota === 'soru') return soru();
    // Uygulamadan doğrudan yoklama: giriş sorusunu atlar ("Okulda öğrendim" cevabı uygulamanın açılışında verildi).
    if (rota === 'yoklama-basla') { yk = { sira: 0, k: 0, dogru: 0, sonuclar: [] }; return git(`#/yoklama/${DURAKLAR[0].id}/0`); }
    if (rota === 'yoklama') return yoklama(a, +b);
    if (rota === 'durak') return durak(a, +b);
    // Pratik ve hikâye adresleri sahne bitmeden de açılır (tanıtılmamış birim engel değildir); geçersizse gecersiz().
    if (rota === 'pratik') return pratik(a, [b, ...ek].join('/'));
    if (rota === 'hikaye') return hikaye(a, [b, ...ek].join('/'));
    if (rota === 'gecis') return gecis(a, b);
    giris();
  } catch (e) { console.error(e); giris(); }
}
window.addEventListener('hashchange', yonlendir);
yonlendir();
