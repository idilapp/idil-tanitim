// Açılış koruması (kurucu kararı, 24 Kasım 2026: "Evet, yapılsın"; düzeltme turu 1 aynı gün). KLASİK betik: import/export yok;
// açılış sayfası onu modül betiğinden ÖNCE yükler:
//   uygulama/index.html      <script src="acilis-koruma.js" data-giris="uygulama.js" data-bekle="#app .yukleniyor" data-yer="#app .yukleniyor">
//   tasarim/filiz/index.html <script src="../../uygulama/acilis-koruma.js" data-giris="oynatici.js" data-bekle="#govde:empty" data-yer="#govde">
// Sorun: siteye yeni sürüm yüklenince tarayıcı (GitHub Pages max-age=600) bazı modülleri eski, bazılarını yeni getirebilir; yeni bir
// modül eskisinden olmayan bir dışa aktarım isterse modül ağacı bağlanamaz, giriş modülü hiç çalışmaz, ekran "Yükleniyor…"da kalır.
// 1. Gerçek hata (yalnız sayfa açılmadan önce): window "error" olayında modül bağlama ya da sözdizimi hatası (SyntaxError, "does not
//    provide an export" …), modül betiğinin kendi yükleme hatası ya da dinamik içe aktarım reddi. O zaman KENDİLİĞİNDEN bir kez
//    "Yeni sürüm yükleniyor…" yazar, modül ağacını gezer (her dosya fetch cache:'reload' ile bir kez; göreli içe aktarımlar
//    icerik/surum.js iceAktarimlar ile aynı kuralla; sayfanın kendisi, stiller ve yüklenmiş js/css de; /test/ yolları istenmez) ve
//    sayfayı yeniler (uygulama.js surumYenile ile aynı yöntem). Damga (sayfa başına: 'idil.acilis.koruma:<giriş modülü>') 2 dakikadan
//    yeniyse kendiliğinden gezmez: "Sayfa açılamadı. Lütfen yenile." ve "Yenile" düğmesi (odak düğmeye gider).
// 2. Yavaş açılış: sayfanın load olayından 20 sn sonra (load hiç gelmezse 30 sn sonra) data-bekle işareti hâlâ duruyorsa yalnız
//    "Sayfa yavaş açılıyor. Beklemek istemezsen Yenile." ve "Yenile" düğmesi gösterir; kendiliğinden bir şey yapmaz. Sayfa sonra
//    açılırsa not kaybolur.
// "Yenile" düğmesi (her iki durumda) kullanıcının isteğidir: damgayı yok sayar, bir kez daha gezip önbelleksiz yeniler.
// Depolama yoksa ya da atarsa damga window.name'e yazılır (yenilemede korunur); yine döngü olmaz. Sayfa açılınca
// (acilisKoruma.tamam()) zamanlayıcı durur, dinleyiciler kalkar, not silinir, damga silinir. tamam() gelmese de işaret kalkmışsa
// (ilk ekran çizilmiş) koruma kendini kapatır. Bildirim alanı baştan boş durur (role="status"; hata metni role="alert" alanında).
// Gömülü oynatıcıda (iframe) location.reload() yalnız çerçeveyi yeniler. Canlıda deneme anahtarı yoktur.
(function (w) {
  'use strict';
  if (!w || (w.acilisKoruma && w.acilisKoruma.kuruldu)) return;
  var ANAHTAR = 'idil.acilis.koruma', ARA = 2 * 60 * 1000, SURE_YUKLENDI = 20 * 1000, SURE_YUKLENMEDI = 30 * 1000, GEZINTI_SINIRI = 20 * 1000;
  var YAZI = {
    yeni: 'Yeni sürüm yükleniyor…', yeniden: 'Sayfa yeniden yükleniyor…', hata: 'Sayfa açılamadı. Lütfen yenile.',
    yavas: 'Sayfa yavaş açılıyor. Beklemek istemezsen Yenile.', dugme: 'Yenile',
  };
  var HATA_DESENI = /SyntaxError|does not provide an export|doesn't provide an export|Failed to fetch dynamically imported module|error loading dynamically imported module|Importing a module script failed/i;

  // icerik/surum.js iceAktarimlar ile aynı kural (klasik betik onu içe aktaramaz; test ikisinin aynı sonucu verdiğini gösterir).
  function iceAktarimlar(metin) {
    if (typeof metin !== 'string') return [];
    var desen = /\b(?:import|export)\b[^'"`;()]*?\bfrom\s*['"]([^'"\n]+)['"]|\bimport\s*['"]([^'"\n]+)['"]|\bimport\s*\(\s*['"]([^'"\n]+)['"]\s*\)/g;
    var yollar = [], m;
    while ((m = desen.exec(metin))) {
      var y = m[1] || m[2] || m[3];
      if ((y.indexOf('./') === 0 || y.indexOf('../') === 0) && yollar.indexOf(y) < 0) yollar.push(y);
    }
    return yollar;
  }
  // Modülün kendi yerine göre eklediği stil (oynatici.js oyun.css'i böyle ekler): new URL(<göreli .css adı>, import.meta.url).
  function stilAdresleri(metin) {
    if (typeof metin !== 'string') return [];
    var desen = /new\s+URL\(\s*['"]([^'"\n:]+\.css)['"]\s*,\s*import\.meta\.url\s*\)/g, yollar = [], m;
    while ((m = desen.exec(metin))) if (m[1].indexOf('//') !== 0 && yollar.indexOf(m[1]) < 0) yollar.push(m[1]);
    return yollar;
  }

  // Modül ağacını gezer: her adres bir kez, yalnız bu kökenden; /test/ yolları (deneme örneği ağaçları) atlanır; js metnindeki
  // içe aktarımlar ve stiller de istenir.
  function gez(baslangic, koken, istek) {
    var gorulen = [];
    function iste(adres, taban) {
      var a;
      try { a = new URL(adres, taban).href.split('#')[0]; } catch (e) { return Promise.resolve(); }
      if (gorulen.indexOf(a) >= 0 || a.indexOf(koken + '/') !== 0 || /\/test\//.test(a.slice(koken.length).split('?')[0])) return Promise.resolve();
      gorulen.push(a);
      return Promise.resolve().then(function () { return istek(a, { cache: 'reload' }); }).then(function (c) {
        if (!c || !c.ok || !/\.m?js(\?|$)/.test(a)) return;
        return c.text().then(function (metin) {
          var alt = iceAktarimlar(metin).concat(stilAdresleri(metin));
          return Promise.all(alt.map(function (y) { return iste(y, a); }));
        });
      }).catch(function () { /* ağ hatası: kalanlar yine denenir */ });
    }
    return Promise.all(baslangic.map(function (b) { return iste(b, koken + '/'); })).then(function () { return gorulen.slice(); });
  }

  // ---------- Durum ----------
  var ayar = null, acildi = false, bitti = false, zamanlayici = null, kendiAdresim = '', simdi = function () { return Date.now(); };
  var kutu = null, alanDurum = null, alanUyari = null, kendiKutum = false;
  function bul(secici) { try { return w.document.querySelector(secici); } catch (e) { return null; } }
  function sayfaAdresi() { return String(w.location.href).split('#')[0]; }

  // ---------- Damga (döngü koruması; sayfa başına ayrı) ----------
  function anahtar() { return ANAHTAR + (ayar && ayar.giris ? ':' + ayar.giris : ''); }
  function adDeseni(g) { return new RegExp('(^|\\|)' + anahtar().replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '=(\\d+)', g ? 'g' : ''); }
  function adOku() { try { var m = adDeseni().exec(String(w.name || '')); return m ? +m[2] : 0; } catch (e) { return 0; } }
  function adYaz(t) {
    try {
      var temiz = String(w.name || '').replace(adDeseni(true), '').replace(/^\|/, '');
      w.name = t ? (temiz ? temiz + '|' : '') + anahtar() + '=' + t : temiz;
    } catch (e) { /* yazılamıyorsa yalnız bu sayfada bir kez */ }
  }
  function damgaOku() {
    var d = 0;
    try { d = +(w.sessionStorage.getItem(anahtar()) || 0) || 0; } catch (e) { /* depolama yok */ }
    return Math.max(d, adOku());
  }
  function damgaYaz(t) {
    try { w.sessionStorage.setItem(anahtar(), String(t)); return; } catch (e) { /* depolama atıyor */ }
    adYaz(t);
  }
  function damgaSil() {
    try { w.sessionStorage.removeItem(anahtar()); } catch (e) { /* depolama yok */ }
    if (adOku()) adYaz(0);
  }

  // ---------- Bildirim alanı ----------
  // Baştan boş iki alan: durum (role="status") ve uyarı (role="alert"). Metin sonradan yazılır ki ekran okuyucu okusun.
  function alanKur() {
    var d = w.document;
    try {
      kutu = d.createElement('div');
      kutu.className = 'acilis-koruma';
      kutu.style.cssText = 'text-align:center;padding:0 16px';
      var yer = ayar.yer ? bul(ayar.yer) : null;
      if (!yer) {
        kendiKutum = true;
        kutu.style.cssText += ';position:fixed;left:0;right:0;bottom:16px;z-index:2147483647;color:#222;font:16px system-ui,sans-serif';
        yer = d.body;
      }
      alanDurum = d.createElement('div');
      alanDurum.setAttribute('role', 'status');
      alanUyari = d.createElement('div');
      alanUyari.setAttribute('role', 'alert');
      // Boşken yer kaplamasın (açılış görüntüsü kaymasın); dolunca metin ve düğme alt alta.
      alanDurum.style.cssText = alanUyari.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:12px';
      kutu.appendChild(alanDurum);
      kutu.appendChild(alanUyari);
      yer.appendChild(kutu);
    } catch (e) { kutu = null; /* yazamazsak da kurtarma sürer */ }
  }
  function goster(tur) {
    var d = w.document;
    if (!kutu) return null;
    try {
      // "Yükleniyor…" gibi düz yazıları kaldır; görsel kalsın.
      var ust = kutu.parentNode, dugumler = ust && !kendiKutum ? Array.prototype.slice.call(ust.childNodes || []) : [];
      for (var i = 0; i < dugumler.length; i++) if (dugumler[i].nodeType === 3) ust.removeChild(dugumler[i]);
      if (kendiKutum) kutu.style.background = tur ? '#fff' : '';
      if (kendiKutum) kutu.style.padding = tur ? '16px' : '0 16px';
      alanDurum.textContent = '';
      alanUyari.textContent = '';
      if (!tur) return null;
      var alan = tur === 'hata' ? alanUyari : alanDurum;
      var p = d.createElement('p');
      p.style.cssText = 'margin:0;font:500 16px/1.5 system-ui,sans-serif';
      p.textContent = YAZI[tur];
      alan.appendChild(p);
      if (tur === 'hata' || tur === 'yavas') {
        var b = d.createElement('button');
        b.type = 'button';
        b.textContent = YAZI.dugme;
        b.style.cssText = 'min-height:44px;padding:10px 24px;border-radius:14px;border:2px solid currentColor;background:#fff;color:inherit;font:700 16px system-ui,sans-serif;cursor:pointer';
        b.addEventListener('click', function () { b.disabled = true; yenile(); });
        alan.appendChild(b);
        if (tur === 'hata' && b.focus) b.focus();
        return b;
      }
    } catch (e) { /* yazamazsak da kurtarma sürer */ }
    return null;
  }

  // ---------- Bekleme işareti ----------
  // "#govde:empty" gibi bir seçicide koruma kendi alanını sayfanın içeriği saymaz.
  function isaretVar() {
    var s = ayar && ayar.bekle;
    if (!s) return true;
    if (/:empty$/.test(s)) {
      var el = bul(s.slice(0, -6));
      if (!el) return false;
      var c = Array.prototype.slice.call(el.childNodes || []);
      for (var i = 0; i < c.length; i++) {
        if (c[i] === kutu) continue;
        if (c[i].nodeType === 3 && !String(c[i].textContent || '').trim()) continue;
        if (c[i].nodeType === 8) continue;
        return false;
      }
      return true;
    }
    return !!bul(s);
  }

  // ---------- Gezip yenileme ----------
  function baslangicAdresleri() {
    var liste = [sayfaAdresi()], d = w.document, taban = sayfaAdresi();
    var ekle = function (a) { if (a && liste.indexOf(a) < 0) liste.push(a); };
    try { if (ayar.giris) ekle(new URL(ayar.giris, taban).href); } catch (e) { /* bozuk ayar */ }
    if (kendiAdresim) ekle(kendiAdresim);
    try {
      var s = d.querySelectorAll('script[type="module"][src], link[rel~="stylesheet"][href]');
      for (var i = 0; i < s.length; i++) ekle(s[i].src || s[i].href);
    } catch (e) { /* DOM yok */ }
    try {
      var k = w.performance.getEntriesByType('resource');
      for (var j = 0; j < k.length; j++) if (/\.(m?js|css)(\?|$)/.test(k[j].name)) ekle(k[j].name);
    } catch (e) { /* performance yok */ }
    return liste;
  }
  function gezVeYenile(tur) {
    bitti = true;
    if (zamanlayici) { w.clearTimeout(zamanlayici); zamanlayici = null; }
    damgaYaz(simdi());
    goster(tur);
    var koken = String(w.location.origin || new URL(sayfaAdresi()).origin);
    var gezinti = gez(baslangicAdresleri(), koken, function (a, s) { return w.fetch(a, s); });
    var sinir = new Promise(function (coz) { w.setTimeout(coz, GEZINTI_SINIRI); });
    return Promise.race([gezinti, sinir]).then(function () {
      if (acildi) return false; // bu arada sayfa açıldıysa kullanıcıyı yenilemeyle bölme
      w.location.reload();
      return true;
    });
  }
  // Kendiliğinden kurtarma: yalnız gerçek hata olayında; damga tazeyse yalnız ileti ve düğme.
  function kurtar() {
    if (acildi || bitti) return Promise.resolve(false);
    var once = damgaOku(), fark = simdi() - once;
    if (once && fark >= 0 && fark < ARA) {
      bitti = true;
      if (zamanlayici) { w.clearTimeout(zamanlayici); zamanlayici = null; }
      goster('hata');
      return Promise.resolve(false);
    }
    return gezVeYenile('yeni');
  }
  // Kullanıcının "Yenile"si: damgayı yok sayar, bir kez daha gezer.
  var yenileniyor = false;
  function yenile() {
    if (yenileniyor) return Promise.resolve(false);
    yenileniyor = true;
    return gezVeYenile('yeniden');
  }

  // ---------- Olaylar ----------
  function kapat() {
    acildi = true;
    if (zamanlayici) { w.clearTimeout(zamanlayici); zamanlayici = null; }
    try {
      w.removeEventListener('error', hataOlayi, true);
      w.removeEventListener('unhandledrejection', redOlayi);
      w.removeEventListener('load', yuklendi);
    } catch (e) { /* eski tarayıcı */ }
    try { if (kutu && kutu.parentNode) kutu.parentNode.removeChild(kutu); } catch (e) { /* zaten gitti */ }
  }
  // Ekran çizildiyse (işaret kalktıysa) tamam() gelmemiş olsa da koruma kendini kapatır.
  function cizildiyseKapat() { if (!isaretVar()) { kapat(); return true; } return false; }
  function hataOlayi(e) {
    if (acildi || bitti || !e || cizildiyseKapat()) return;
    var hedef = e.target;
    if (hedef && hedef !== w && hedef.tagName) {
      // Kaynak yükleme hatası: yalnız modül betiği sayılır (resim, ses vb. değil).
      if (String(hedef.tagName).toUpperCase() === 'SCRIPT' && String(hedef.type || '').toLowerCase() === 'module') kurtar();
      return;
    }
    var hata = e.error, ileti = String(e.message || '') + ' ' + (hata ? String(hata.name || '') + ': ' + String(hata.message || '') : '');
    if (HATA_DESENI.test(ileti)) kurtar();
  }
  function redOlayi(e) {
    if (acildi || bitti || !e || cizildiyseKapat()) return;
    var r = e.reason, ileti = r ? String(r.name || '') + ': ' + String(r.message || r) : '';
    if (HATA_DESENI.test(ileti)) kurtar();
  }
  function yavas() {
    zamanlayici = null;
    if (acildi || bitti || cizildiyseKapat()) return;
    goster('yavas'); // kendiliğinden yenileme yok; yalnız not ve düğme
  }
  function zamanla(ms) {
    if (zamanlayici) w.clearTimeout(zamanlayici);
    zamanlayici = w.setTimeout(yavas, ms);
  }
  function yuklendi() { if (!acildi && !bitti) zamanla(ayar.sureYuklendi); }

  function kur(a) {
    a = a || {};
    ayar = {
      giris: a.giris || '', bekle: a.bekle || '', yer: a.yer || a.bekle || '',
      sureYuklendi: +a.sureYuklendi > 0 ? +a.sureYuklendi : SURE_YUKLENDI,
      sureYuklenmedi: +a.sureYuklenmedi > 0 ? +a.sureYuklenmedi : SURE_YUKLENMEDI,
    };
    if (a.simdi) simdi = a.simdi;
    if (/:empty$/.test(ayar.yer)) ayar.yer = ayar.yer.slice(0, -6);
    alanKur();
    w.addEventListener('error', hataOlayi, true);
    w.addEventListener('unhandledrejection', redOlayi);
    var hazir = false;
    try { hazir = w.document.readyState === 'complete'; } catch (e) { /* DOM yok */ }
    if (hazir) zamanla(ayar.sureYuklendi);
    else { w.addEventListener('load', yuklendi); zamanla(ayar.sureYuklenmedi); }
  }
  function tamam() {
    kapat();
    damgaSil();
  }

  w.acilisKoruma = {
    kuruldu: true, kur: kur, tamam: tamam, iceAktarimlar: iceAktarimlar, stilAdresleri: stilAdresleri, gez: gez,
    durum: function () { return { acildi: acildi, bitti: bitti, damga: damgaOku(), anahtar: anahtar() }; },
  };
  try {
    var b = w.document && w.document.currentScript;
    if (b) {
      kendiAdresim = b.src || '';
      if (b.dataset && b.dataset.giris) kur({ giris: b.dataset.giris, bekle: b.dataset.bekle, yer: b.dataset.yer });
    }
  } catch (e) { /* kurulamadıysa sayfa yine normal açılır */ }
})(typeof window !== 'undefined' ? window : undefined);
