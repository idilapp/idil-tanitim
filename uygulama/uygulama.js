// iDil tanıtım sürümü (14 Kasım 2026): uygulama gibi tıklanan taslak; uzmana göstermek için. Uygulama kodu değildir.
// İçerik ../icerik'ten (taslak), görünüm ../tasarim/DESIGN.md'den ("Pazar tezgâhı"), oyun kuralları iLaw'dan (src/engine.js).
// İlerleme yalnız bu tarayıcıda tutulur (durum.js). Sunucu: .claude/launch.json → "idil-oynatici" (adres /uygulama/).
import { sahneSvg } from './kart-gorsel.js';
import {
  PILOT_UNITS, TURLER, ALANLAR, HARF, ROMA, esc, sayi, SORULAR, SORU, UNITE, UNITE_SORULARI, KARTLAR, HAP_KARTLARI, KATEGORILER,
  HAPK, hapIcin, HAP_BAGLI, parcalar, karisik, rastgele, denemeKur, DENEMELER, DENEME_SORULARI, DUELLO_TURLERI, KISA_AD, SEVIYE_TESTI, seviyeBul, seviyeTestiKur, SINAV_ALANI,
  KITAP, BOLUMLER, BOLUM, YAZILI, dersBul, dersIcin, bolumSorulari, SES, SES_SANATCI, GORSEL, KOKLER, KOK_SOZCUK,
  BASLANGIC, B_BOLUMLER, B_BOLUM, B_YAZILI, bDersBul,
} from './veri.js';
import {
  durum, yukle, kaydet, sifirla, baslat, adim, XP, GUNLUK_HEDEF, GOREVLER, LIG_ADI, RAKIPLER, ARKADAS_SAYISI, SINAVLAR, ARALIK,
  bugun, gunEkle, gunFarki, tarihYaz, gecenZaman, gun, seriGun, buHaftaXp, xpEkle, cevapKaydet, yanlislar, turIsabeti, havuz,
  tahminiPuan, tahminOnceki, haftalikFark, tumKartlar, kartBul, kartDurumu, vadesiGelen, yeniKartlar, ogrenilenSayisi, sonrakiAralik,
  kutuSayilari, kartCevap, notEkle, notSil, gunPlani, davetGuncelle, ligTablosu, ligSiram, ustLigeKalan, ligSonunaGun, sabahSirasi,
  duelloKaydet, rozetler, hapOkundu,
  kitap, okunduMu, dersOkundu, deneKaydet, bolumTestiKaydet, bolumIlerleme, okunanDersSayisi, siradakiDers,
  yol, yolDegistir, dOkunduMu, dDersOkundu, dBolumIlerleme, dOkunanSayisi, dSiradaki,
  dAlistirmaKaydet, dAlistirmaCevap, dAlistirmaIlerleme, dAlistirmaSifirla, dTestCevapla, dTestCevaplari, dTestKaydet, dTestSonuc, dTestSifirla,
} from './durum.js';
// Sınavda zayıf nokta haritası (Görev 8): etiket → konu haritası ve saf işlevler (son N cevaptan konu yüzdesi, konu seti).
import { KONULAR } from '../icerik/konu-haritasi.js';
import { zayifKonular, konuSeti } from './zayif.js';
// Ders alıştırmaları ve bölüm sonu testinin saf kuralları (Görev 5): doğru mu, %80 eşiği, yanlışların dersleri.
import { ESIK, cevapDogruMu, yanlisDersler, dersAlistirmalari, bolumTesti } from './alistirma.js';
// Genel İngilizce (18 Kasım 2026, mimari PLAN §2): Yolculuk duraklar ve oynatıcı, iki kanat mantığı ve ortak hafıza.
// Hafıza tek: Yolculuk oynatıcısı (iframe) ve Ders aynı bellek.js'i kullanır (localStorage anahtarı idil.filiz.v1).
import { DURAKLAR, durakBul } from '../icerik/filiz/index.js';
import { anlamIsle, durum as kanatDurumu, durakBirimleri } from '../icerik/filiz/kanat.js';
import { oku as kanatOku, yaz as kanatYaz } from '../tasarim/filiz/bellek.js';
// Durak üç parçadır (Görev 3): sahne, pratik, hikâyecik. Akış, konum ve parça durumu oynatıcıyla ortak saf modülden.
import { konumCoz, konumKuyrugu, oynaticiAdresi, parcaDurumu } from '../icerik/filiz/akis.js';
// İlerleme, kazanım ve eksik haritası (Görev 7): seviye tanımı ve saf ilerleme işlevleri. Yolculuk sırası, adresi, konum yazısı ve
// dersin birimleri de buradan gelir (eskiden bu dosyadaydı; Buradasın kartı aynı kuralı kullansın diye saf modüle taşındı).
import { SEVIYELER, seviyeBul as seviyeTanimi } from '../icerik/seviye/index.js';
import {
  seviyeYuzdesi, kazanimListesi, seviyeKilidi, eksikler, durakDurumu, bolumDurumu, yaziliPay, buradasin, birimAdi,
  yolculukSirasi as yolculukSirasiSaf, yolculukAdresi, konumYazisi, dersBirimleri,
} from '../icerik/seviye/ilerleme.js';
// Deneme anahtarı ?ornek=1 (yalnız tanıtım; oynatıcıdaki anahtarla aynı): Görev 2'nin örnek durağı (pratik ve hikâyeli) durak
// listesinin sonuna eklenir ve oynatıcı iframe'ine de ?ornek=1 geçer. Dosya yoksa sessizce gerçek duraklarla sürer.
const ORNEK = new URLSearchParams(location.search).has('ornek');
if (ORNEK) {
  try {
    const ornek = (await import('../icerik/filiz/test/ornek/oyunlu.js')).default;
    if (ornek?.id && !durakBul(ornek.id)) DURAKLAR.push(ornek);
  } catch { /* örnek dosyası yoksa gerçek duraklar */ }
  // Aynı anahtar Ders'e (Görev 5) alıştırmalı ve bölüm sonu testli örnek bölümü ekler: kitabın başında "Örnek" kısmı. Yalnız
  // tanıtım; Görev 6'nın gerçek alıştırmaları gelince yerini o alır. Dosya yoksa sessizce gerçek bölümlerle sürer.
  try {
    const ob = (await import('../icerik/kitap/test/ornek/alistirma-gecerli.mjs')).default;
    if (ob?.id && !B_BOLUM.has(ob.id) && Array.isArray(ob.dersler)) {
      const b = { ...ob, kisim: 'Ö' };
      B_BOLUMLER.push(b); B_BOLUM.set(b.id, b); B_YAZILI.push(b);
      BASLANGIC.kisimlar?.unshift({ id: 'Ö', ad: 'Örnek bölüm (yalnız tanıtım)', bolumler: [b.id] });
    }
  } catch { /* örnek bölüm dosyası yoksa gerçek bölümler */ }
}

const app = document.getElementById('app');
const iki = n => String(n).padStart(2, '0');
const sv = ic => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${ic}</svg>`;
const ikon = {
  bugun: sv('<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'),
  calis: sv('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>'),
  kelimeler: sv('<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>'),
  arena: sv('<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" y1="19" x2="19" y2="13"/><line x1="16" y1="16" x2="20" y2="20"/><line x1="19" y1="21" x2="21" y2="19"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/><line x1="5" y1="14" x2="9" y2="18"/><line x1="7" y1="17" x2="4" y2="20"/><line x1="3" y1="19" x2="5" y2="21"/>'),
  arkadaslar: sv('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),
  profil: sv('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
  geri: sv('<polyline points="15 18 9 12 15 6"/>'),
  kapat: sv('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'),
  ileri: sv('<polyline points="9 18 15 12 9 6"/>'),
  ses: sv('<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a10 10 0 0 1 0 14"/>'),
  alev: sv('<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>'),
  saat: sv('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),
  onay: sv('<polyline points="20 6 9 17 4 12"/>'),
  bayrak: sv('<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>'),
  arti: sv('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>'),
  ara: sv('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'),
  odul: sv('<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>'),
  kalem: sv('<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>'),
  davet: sv('<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>'),
  pil: '<svg viewBox="0 0 27 12" width="27" height="12" aria-hidden="true"><rect x=".5" y=".5" width="22" height="11" rx="3" fill="none" stroke="currentColor" opacity=".45"/><rect x="2" y="2" width="19" height="8" rx="1.6" fill="currentColor"/><path d="M24.5 4v4" stroke="currentColor" stroke-linecap="round" opacity=".45"/></svg>',
};

// ---------- ortak parçalar ----------
// İdil (maskot): Gemini'nin altı pozu, gorsel/idil-<poz>.webp (kaynak ../tasarim/maskot/pozlar/).
// ana: Bugün · merkez: açılış · dogru · hay-aksi · ipucu (göz kırpan) · gorev (günün görevi)
const idilResim = (poz, cls = 'idil') => `<img class="${cls} idil-${poz}" src="gorsel/idil-${poz}.webp" alt="" aria-hidden="true" decoding="async">`;
const IPUCLARI = [
  'Yanlış yaptığın sorudan sonra önerilen derse bir göz at; konu tazeyken daha kolay oturur.',
  'Kelime kartını çevirmeden önce anlamını hatırlamaya çalış; zorlanmak akılda tutar.',
  'Bağlaç sorusunda önce iki yarının ilişkisini Türkçe söyle: zıtlık mı, sonuç mu, ekleme mi?',
  'Okuma parçasında önce soruyu oku, sonra parçada cevabın geçtiği cümleyi ara.',
  'Serini korumak için kısa bir tur bile yeter; her gün biraz, haftada bir çoktan iyidir.',
  'Çeviri sorusunda şıkları baştan sona okuma; kaynakla tutmayan ilk ögeyi bul ve şıkkı ele.',
];
function durumCubugu() {
  const d = new Date();
  return `<div class="durum" aria-hidden="true"><span>${d.getHours()}:${iki(d.getMinutes())}</span><small>Tanıtım · taslak içerik</small><span class="pil">${ikon.pil}</span></div>`;
}
const animasyonlu = new Set(); // üstü çizilen sayı yalnız ilk görüldüğünde çizilir
function cizik(deger, anahtar) {
  const yeni = !animasyonlu.has(anahtar);
  animasyonlu.add(anahtar);
  return `<span class="eski kalem cizik${yeni ? ' yeni-cizik' : ''}" aria-label="önceki ${esc(deger)}">${esc(deger)}<svg viewBox="0 0 60 30" preserveAspectRatio="none" aria-hidden="true"><path d="M2 24 C 18 18, 38 12, 58 5" stroke="#141414" stroke-width="5" stroke-linecap="round" fill="none"/></svg></span>`;
}
// iDil yazısının yanında yolun küçük işareti (kullanıcı isteği, 19 Kasım 2026): Genel İngilizce ya da Sınav Hazırlık.
// y verilmezse etkin yol; null verilirse (yol seçilmeden önce) yalnız iDil.
const YOL_ISARETI = { genel: 'Genel İngilizce', sinav: 'Sınav Hazırlık' };
const markaHtml = (y = yol()) => `<span class="marka-grup"><span class="marka kalem">iDil</span>${y ? `<span class="marka-yol" data-yol="${y}">${YOL_ISARETI[y]}</span>` : ''}</span>`;
// Sekme ekranlarının kabuğu: durum çubuğu, iDil ve seri, büyük başlık, ek içerik.
function kabukSekme({ renk = 'sari', h1, marka = true, alt = '', ek = '', karakter = false, buyuk = false }) {
  const seri = seriGun();
  if (karakter) {
    // Sağ üstte İdil (karakter: poz adı); seri başlığın altına iner. buyuk: Bugün ekranı.
    const poz = karakter === true ? 'ana' : karakter;
    return `<header class="kabuk karakterli${buyuk ? '' : ' kucuk'}" data-renk="${renk}">${durumCubugu()}
      <div class="bas-alan"><span class="ana-idil" role="img" aria-label="İdil" style="background-image:url(gorsel/idil-${poz}.webp)"></span><div class="cubuk">${markaHtml()}</div><h1>${esc(h1)}</h1>
      <p class="seri-alt">${ikon.alev}${seri ? `${seri} günlük seri` : 'Seriye bugün başla'}</p>${alt ? `<p class="alt">${alt}</p>` : ''}</div>${ek}</header>`;
  }
  const cubuk = marka ? `<div class="cubuk">${markaHtml()}<span class="seri">${ikon.alev}${seri ? `${seri} günlük seri` : 'Seriye bugün başla'}</span></div>` : '';
  return `<header class="kabuk" data-renk="${renk}">${durumCubugu()}${cubuk}<h1>${esc(h1)}</h1>${alt ? `<p class="alt">${alt}</p>` : ''}${ek}</header>`;
}
// Oturum ve alt sayfaların kabuğu: kapat/geri, sayaç, konu, sağda bilgi, ilerleme çizgisi; kaydırırken üstte kalır.
function kabukUst({ renk = 'sari', kapat = null, geri = null, kac = '', baslik = '', bilgi = '', bilgiId = '', ilerleme = null, ek = '', yapiskan = true }) {
  const sol = kapat ? `<button class="simge-dugme" data-eylem="kapat" aria-label="Kapat">${ikon.kapat}</button>`
    : geri ? `<a class="simge-dugme" href="${geri}" aria-label="Geri">${ikon.geri}</a>` : '';
  const cizgi = ilerleme === null ? '' : `<div class="ilerleme" role="progressbar" aria-label="İlerleme" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(ilerleme)}"><b style="width:${ilerleme}%"></b></div>`;
  return `<header class="kabuk${yapiskan ? ' yapiskan' : ''}" data-renk="${renk}">${durumCubugu()}<div class="bar">${sol}${kac ? `<span class="kac kalem">${esc(kac)}</span>` : ''}<span class="baslik">${esc(baslik)}</span>${bilgi ? `<span class="bilgi"${bilgiId ? ` id="${bilgiId}"` : ''}>${bilgi}</span>` : ''}</div>${cizgi}${ek}</header>`;
}
const SEKME = [['bugun', 'Bugün'], ['calis', 'Çalış'], ['kelimeler', 'Kelimeler'], ['arena', 'Arena'], ['arkadaslar', 'Arkadaşlar'], ['profil', 'Profil']];
// Genel İngilizcede sınava özgü sekmeler (Kelimeler: sınav kartları; Arena ve Arkadaşlar: YDS düellosu ve ligi) gizlenir.
// Bugün ve Çalış aynı adreste yola göre çizilir; Profil ortaktır.
const SEKME_GENEL = new Set(['bugun', 'calis', 'profil']);
function sekmeler(etkin) {
  const vade = vadesiGelen().length;
  const liste = yol() === 'genel' ? SEKME.filter(([id]) => SEKME_GENEL.has(id)) : SEKME;
  return `<nav class="sekmeler" aria-label="Ana menü">${liste.map(([id, ad]) => `<a href="#/${id}"${id === etkin ? ' aria-current="page"' : ''}>${ikon[id]}${id === 'kelimeler' && vade ? `<b class="rozet" aria-label="${vade} kart bekliyor">${vade > 99 ? '99+' : vade}</b>` : ''}<span>${ad}</span></a>`).join('')}<i class="ev"></i></nav>`;
}
const ekran = ({ kabuk, govde = '', alt = '', sekme = null }) => `<div id="kaydir">${kabuk}<main>${govde}</main></div>${alt}${sekme ? sekmeler(sekme) : ''}`;
// Liste satırı: href verilirse bağlantı, eylem verilirse düğme. alt ve sag HTML'dir (çağıran kaçışlar).
function satir({ href, eylem, veri = {}, renk = '', etiket = '', ad, alt = '', sag = '' }) {
  const ic = `<span class="etiket ${renk} kalem">${etiket}</span><span class="govde"><span class="ad">${esc(ad)}</span>${alt ? `<span class="alt">${alt}</span>` : ''}</span>${sag ? `<span class="sag">${sag}</span>` : ''}`;
  if (href) return `<a class="satir" href="${href}">${ic}</a>`;
  const v = Object.entries(veri).map(([k, x]) => ` data-${k}="${esc(x)}"`).join('');
  return `<button class="satir" data-eylem="${eylem}"${v}>${ic}</button>`;
}
const baslikSatiri = (h2, sag = '') => `<div class="baslik-satiri"><h2>${esc(h2)}</h2>${sag}</div>`;
const parcaliMi = t => TURLER[t]?.bicim === 'parca';
const turRengi = t => (parcaliMi(t) ? 'kraft' : t === 'kelime' ? 'pembe' : 'sari');

// ---------- ücretsiz kısım ve paket (mimari PLAN §4) ----------
// Rozet yalnız bilgilendirir: tanıtım sürümünde içerik kilitlenmez, gerçek satış yok.
const ucret = (tur, metin = tur === 'paket' ? 'Paket' : 'Ücretsiz') => `<span class="ucret ${tur}">${esc(metin)}</span>`;
const UCRETSIZ_DURAK = 2, UCRETSIZ_DERS_BOLUM = 6, UCRETSIZ_SINAV_BOLUM = 5, UCRETSIZ_KART = 300;
const PAKET_ADI = { genel: 'Genel İngilizce paketi', sinav: 'Sınav İngilizcesi paketi' };
const paketNotu = y => `<p class="not paket-not">${ucret('paket')} Tanıtım sürümünde her şey açık; uygulamada bu kısım “${PAKET_ADI[y]}” ile açılır. Öğrendiğinin tekrarı her zaman ücretsiz.</p>`;
const YOL_ADI = { genel: 'Genel İngilizce', sinav: 'Sınav İngilizcesi' };
const YOL_ACIKLAMA = { genel: 'Sıfırdan başla ya da okulda öğrendiğini konuşmaya çevir.', sinav: 'YDS ve YÖKDİL.' };

// Telaffuz sesi (18 Kasım, kullanıcı tarifi): iDil'in sesi genç bir kadın sesi; doğru, yormayan, rahatlatıcı ve keyifli.
// Tanıtım sürümünde cihazın ses motoru (Web Speech API) kullanılır; ses cihazdan cihaza değişir. Bu yüzden sesler puanlanır:
// kaliteli (Premium, Enhanced, Natural, Online) ve kadın sesi önce, İngiliz İngilizcesi önce; eğlence ve eski robotik sesler
// hiç seçilmez. Kalıcı çözüm, seçilecek tek bir sesle önceden üretilmiş ses dosyalarıdır (asıl uygulamada).
const SES_KADIN = /\b(Serena|Kate|Stephanie|Martha|Libby|Sonia|Maisie|Hazel|Susan|Mia|Bella|Emma|Amy|Olivia|Fiona|Moira|Karen|Tessa|Samantha|Allison|Ava|Zoe|Joanna|Jenny|Aria|Female)\b/i;
const SES_ERKEK = /\b(Daniel|Arthur|Oliver|Ryan|Thomas|George|Alfie|Male|Aaron|Fred|Ralph|Albert|Junior|Tom|Alex|Lee|Rishi)\b/i;
const SES_EGLENCE = /\b(Bad News|Good News|İyi Haber|Kötü Haber|Bahh|Bells|Boing|Bubbles|Cellos|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox|Eddy|Flo|Grandma|Grandpa|Reed|Rocko|Sandy|Shelley|Kathy|Hysterical)\b/i;
const SES_KALITE = /(Premium|Enhanced|Gelişmiş|Natural|Neural|Online|Google)/i;
let secilenSes = null;
function iyiSes() {
  if (secilenSes) return secilenSes;
  const puan = v => {
    if (!v.lang?.startsWith('en') || SES_EGLENCE.test(v.name)) return -1;
    return (v.lang === 'en-GB' ? 3 : /en-(IE|AU|NZ)/.test(v.lang) ? 1 : 0)
      + (SES_KADIN.test(v.name) ? 4 : SES_ERKEK.test(v.name) ? -3 : 0) + (SES_KALITE.test(v.name) ? 3 : 0);
  };
  const aday = speechSynthesis.getVoices().map(v => [v, puan(v)]).filter(([, p]) => p >= 0).sort((a, b) => b[1] - a[1])[0];
  return (secilenSes = aday ? aday[0] : null);
}
if ('speechSynthesis' in window) speechSynthesis.addEventListener?.('voiceschanged', () => { secilenSes = null; });
// Önce iDil'in kendi sesi (önceden üretilmiş dosya, SES); dosya yoksa ya da çalınamazsa cihaz sesi.
// Önbellek kırıcı (22 Kasım 2026): SES_SURUM dosya → bayt özeti (ses/uret/dizin.mjs). Yeniden üretilen ses yeni ?v= ile istenir,
// tarayıcı eski kopyayı çalamaz. veri.js'in yüklediği modülün aynısıdır (ikinci indirme yok); yoksa sesler sorgusuz istenir.
let SES_SURUM = {};
try { SES_SURUM = (await import('../icerik/ses/index.js')).SES_SURUM || {}; } catch { /* sürüm yoksa sorgusuz */ }
let calan = null;
function dinle(metin) {
  if (!durum()?.ayar.ses || !metin) return;
  const dosya = SES[metin];
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  if (calan) { calan.pause(); calan = null; }
  if (dosya) {
    const a = new Audio(`../icerik/ses/${dosya}${SES_SURUM[dosya] ? `?v=${SES_SURUM[dosya]}` : ''}`);
    calan = a;
    // Yeni bir ses bunu yarıda kestiyse (AbortError) cihaz sesine geçilmez; yalnız dosya çalınamadıysa geçilir.
    a.play().catch(e => { if (calan === a && e?.name !== 'AbortError') { calan = null; cihazSesi(metin); } });
    return;
  }
  cihazSesi(metin);
}
function cihazSesi(metin) {
  if (!('speechSynthesis' in window)) return;
  const u = new SpeechSynthesisUtterance(metin);
  u.lang = 'en-GB';
  u.rate = 0.9; // acele etmeyen, yormayan tempo
  const ses = iyiSes();
  if (ses) { u.voice = ses; u.lang = ses.lang; }
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

// Bildirim (toast): XP ve görev haberleri. Sayfa yeniden çizilse de süresi dolana kadar görünür.
let bildirim = null;
function bildir(metin, xp = 0) {
  bildirim = { metin, xp, bitis: Date.now() + 2600 };
  bildirimCiz();
  setTimeout(() => { if (bildirim && Date.now() >= bildirim.bitis) { bildirim = null; app.querySelector('.bildirim')?.remove(); } }, 2700);
}
function bildirimCiz() {
  app.querySelector('.bildirim')?.remove();
  if (!bildirim || Date.now() >= bildirim.bitis) return;
  const el = document.createElement('div');
  el.className = `bildirim${app.querySelector('nav.sekmeler') ? '' : ' oturumda'}`;
  el.setAttribute('role', 'status');
  el.innerHTML = `${bildirim.xp ? `<b>+${bildirim.xp} XP</b>` : ''}<span>${esc(bildirim.metin)}</span>`;
  app.appendChild(el);
}
function gorevHaberi(biten) {
  for (const m of biten) bildir(`Görev tamam: ${m.ad.toLocaleLowerCase('tr')}`, XP.gorev);
}

// Boşluk (----) ve numaralı boşluk ((3) ----); etkin numaralı boşluk fosforlu kalemle işaretlenir.
function bosHtml(metin, etkin = null) {
  return esc(metin).replace(/(\((\d)\) )?-{4}/g, (m, onek, n) => {
    const b = `${onek || ''}<span class="bos" aria-label="${n ? `${n} numaralı boşluk` : 'boşluk'}">----</span>`;
    return n && Number(n) === etkin ? `<span class="simdiki">${b}</span>` : b;
  });
}
function kokDeseni(code) {
  const ilk = code.split(' ')[0];
  const kok = ilk.length > 4 && ilk.endsWith('e') ? ilk.slice(0, -1) : ilk;
  return new RegExp(`\\b(${kok.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[a-z]*)`, 'i');
}

// ==================== İLK AÇILIŞ ====================
// Yol seçimi (18 Kasım 2026): önce "Ne için buradasın?" (#/baslangic), sonra yolun formu (#/baslangic/genel, #/baslangic/sinav).
// Profil'deki "Yolu değiştir" de aynı kartları kullanır (#/yol); değiştirmek ilerlemeyi silmez.
const yolKartlari = ({ secili = null, eylem = false } = {}) => `<div class="yol-secim">${['genel', 'sinav'].map(y => {
  const ic = `<span class="yol-ad">${YOL_ADI[y]}</span><span class="yol-aciklama">${esc(YOL_ACIKLAMA[y])}</span>${y === secili ? '<span class="yol-simdi">Şu anki yolun</span>' : ''}`;
  return eylem ? `<button class="yol-secenek${y === secili ? ' secili' : ''}" data-eylem="yol-sec" data-yol="${y}"${y === secili ? ' aria-current="true"' : ''}>${ic}${ikon.ileri}</button>`
    : `<a class="yol-secenek" href="#/baslangic/${y}">${ic}${ikon.ileri}</a>`;
}).join('')}</div>`;
function baslangicEkrani(adim) {
  const basla = (h1, alt, y = null) => `<header class="kabuk basla" data-renk="sari">${durumCubugu()}${idilResim('gorev', 'idil-basla')}<div class="cubuk">${markaHtml(y)}</div><h1>${h1}</h1>
      <p class="alt">${alt}</p></header>`;
  const geriBag = '<p class="not"><a class="baglanti" href="#/baslangic">‹ Başka bir yol seç</a></p>';
  if (adim === 'genel') {
    return ekran({
      kabuk: basla('Genel İngilizce', 'Yolculuk’ta duyarsın, Ders’te nedenini öğrenirsin.'),
      govde: `${geriBag}<form id="baslangic-genel" onsubmit="return false">
        <label class="alan"><span>Adın</span><input name="ad" autocomplete="given-name" placeholder="Adın" maxlength="20"></label>
        <fieldset class="alan radyolar"><legend>Hiç mi bilmiyorsun, yoksa okulda öğrendin ama konuşamıyor musun?</legend>
          <label class="radyo"><input type="radio" name="bilgi" value="hic" checked><span><b>Hiç bilmiyorum</b>Yolculuk’un ilk durağından başlarsın.</span></label>
          <label class="radyo"><input type="radio" name="bilgi" value="okul"><span><b>Okulda öğrendim, konuşamıyorum</b>Önce kısa bir dinleme yoklaması; bildiğin durakları hızlı geçersin.</span></label>
        </fieldset></form>
        <p class="not">Tanıtım sürümü: hesap açılmaz, ilerlemen yalnız bu tarayıcıda tutulur. İçerik taslaktır; İngilizce öğretmeninin onayını bekliyor.</p>`,
      alt: `<div class="alt-eylem"><button class="birincil" data-eylem="baslat-genel">Başla${ikon.ileri}</button></div>`,
    });
  }
  if (adim !== 'sinav') {
    return ekran({
      kabuk: basla('Ne için buradasın?', 'İki yol var; istediğin an Profil’den değiştirebilirsin.'),
      govde: `${yolKartlari()}
        <p class="not">Tanıtım sürümü: hesap açılmaz, ilerlemen yalnız bu tarayıcıda tutulur.</p>`,
    });
  }
  const varsayilan = gunEkle(bugun(), 35);
  return ekran({
    kabuk: basla('Sınavına hazırlanalım', 'Her gün kısa bir tur: kelime, soru, okuma. Haftalık lig ve arkadaşlarınla düello.'),
    govde: `${geriBag}<form id="baslangic" onsubmit="return false">
      <label class="alan"><span>Adın</span><input name="ad" autocomplete="given-name" placeholder="Adın" maxlength="20"></label>
      <label class="alan"><span>Sınavın</span><select name="sinav">${SINAVLAR.map(s => `<option>${s}</option>`).join('')}</select></label>
      <label class="alan"><span>Sınav tarihin</span><input name="tarih" type="date" value="${varsayilan}" min="${bugun()}"></label>
      <label class="alan"><span>Hedef puanın</span><input name="hedef" type="number" value="70" min="40" max="100" step="5" inputmode="numeric"></label>
      </form>
      <p class="not">Tanıtım sürümü: hesap açılmaz, ilerlemen yalnız bu tarayıcıda tutulur. Sorular ve kartlar taslaktır; İngilizce
        öğretmeninin onayını bekliyor. "Örnek ilerleme" altı gündür çalışan birinin ekranlarını gösterir.</p>`,
    alt: `<div class="alt-eylem"><button class="ikinci" data-eylem="baslat" data-ornek="1">Örnek ilerlemeyle</button><button class="birincil" data-eylem="baslat" data-ornek="">Başla${ikon.ileri}</button></div>`,
  });
}

// ==================== BUGÜN ====================
// Bugün başlığındaki İdil günün saatine göre değişir: sabah günaydın, gece (seri tehlikedeyse) uykulu ya da gece çalışması.
function bugunPozu() {
  const h = new Date().getHours();
  if (h >= 5 && h < 11) return 'gunaydin';
  if (h >= 22 || h < 5) return gun().xp === 0 && seriGun() > 0 ? 'uykulu' : 'gece-calisma';
  return 'ana';
}
function bugunEkrani() {
  const D = durum();
  const plan = gunPlani();
  const davet = davetGuncelle();
  const kalan = gunFarki(bugun(), D.sinav.tarih);
  const puan = tahminiPuan();
  const once = tahminOnceki();
  const hf = haftalikFark();
  const g = gun();
  const kartlar = plan.kartlar.map(kartBul).filter(Boolean);
  const okuma = parcalar('okuma').get(plan.parca) || [];
  const st = turIsabeti()[plan.tur];
  const ders = plan.ders && !okunduMu(plan.ders.bolum, plan.ders.ders) && dersBul(plan.ders.bolum, plan.ders.ders)
    ? { b: BOLUM.get(plan.ders.bolum), d: dersBul(plan.ders.bolum, plan.ders.ders) } : null;
  const tekrarS = (plan.tekrar || []).map(id => SORU.get(id)).filter(Boolean);
  const dk = Math.max(1, Math.round(((ders ? (ders.d.sure || 4) * 60 : 0) + tekrarS.length * 60 + kartlar.length * 20 + plan.sorular.length * 60 + okuma.length * 90) / 60));
  const gunYazi = kalan > 0 ? `${kalan} GÜN` : kalan === 0 ? 'BUGÜN' : '';
  const ek = `<div class="sinav"><p>${esc(D.sinav.tur)} · ${esc(tarihYaz(D.sinav.tarih))}<span>Hedef puan ${esc(D.sinav.hedef)}</span></p>${gunYazi ? `<span class="gun kalem">${gunYazi}</span>` : ''}</div>
    <div class="puan">${once !== null && once !== puan ? cizik(once, `puan-${once}-${puan}`) : ''}<span class="yeni kalem">${puan}</span>
      <p><b>Tahmini puan</b>${hf ? `bu hafta ${hf > 0 ? '+' : ''}${hf}` : 'çözdükçe güncellenir'}</p></div>`;
  const turSatirlari = [
    ders ? satir({ renk: 'kraft', etiket: ders.d.id.toUpperCase(), ad: 'Bugünün dersi', alt: `${esc(ders.d.baslik)} · Bölüm ${ders.b.no}`, sag: `${ders.d.sure || 4} dk`, eylem: 'tura-basla' }) : '',
    tekrarS.length ? satir({ renk: 'kraft', etiket: tekrarS.length, ad: 'Dersten tekrar', alt: 'Önceki günlerde okuduğun derslerin konusundan; aralıklı tekrar', sag: `${tekrarS.length} dk`, eylem: 'tura-basla' }) : '',
    kartlar.length ? satir({ renk: 'pembe', etiket: kartlar.length, ad: 'Kelime tekrarı', alt: `Sıradaki: ${esc(kartlar.slice(0, 3).map(k => k.code).join(', '))}`, sag: `${Math.max(1, Math.round(kartlar.length / 3))} dk`, eylem: 'tura-basla' }) : '',
    satir({ renk: 'sari', etiket: plan.sorular.length, ad: TURLER[plan.tur].ad, alt: st ? `Zayıf noktan: şimdiye kadar %${Math.round((100 * st.d) / st.n)} doğru` : 'Sınavda sık çıkan bir tür', sag: `${plan.sorular.length} dk`, eylem: 'tura-basla' }),
    okuma.length ? satir({ renk: 'kraft', etiket: okuma.length, ad: 'Okuma parçası', alt: `${esc(okuma[0].unit.title)} · ${okuma.length} soru`, sag: `${Math.round(okuma.length * 1.5)} dk`, eylem: 'tura-basla' }) : '',
  ].join('');
  const turDugme = plan.bitti
    ? `<div class="idil-kart">${idilResim('tatil')}<p class="metin"><span class="isaret">Bugünün turunu bitirdin.</span> Yarın yeni kartlar ve sorular gelir.</p></div><div class="dugme-alani"><button class="ikinci" data-eylem="tur-yeni">Bir tur daha</button></div>`
    : `<div class="dugme-alani"><button class="birincil" data-eylem="tura-basla">Tura başla${ikon.ileri}</button></div>`;
  const saatKaldi = 24 - new Date().getHours();
  const davetHtml = davet ? `<div class="davet">${idilResim('meydan-okuma', 'idil davet-idil')}<span class="govde"><b>${esc(davet.rakip)} seni düelloya çağırdı</b>5 soru · ${saatKaldi} saat kaldı</span><button class="ikinci" data-eylem="davet-kabul">Kabul et</button></div>` : '';
  const hedefOran = Math.min(100, (100 * g.xp) / GUNLUK_HEDEF);
  const gorevler = GOREVLER.map(m => {
    const v = Math.min(g[m.id], m.hedef);
    const bitti = g.odul.includes(m.id);
    return `<div class="gorev${bitti ? ' bitti' : ''}"><span class="onay">${bitti ? ikon.onay : ''}</span><span>${esc(m.ad)}</span><span class="durumu">${bitti ? `+${XP.gorev} XP` : `${v} / ${m.hedef}`}</span></div>`;
  }).join('');
  return ekran({
    kabuk: kabukSekme({ renk: 'sari', h1: 'Bugün', ek, karakter: bugunPozu(), buyuk: true }),
    govde: `${baslikSatiri('Bugünün turu', `<span>${dk} dk</span>`)}${turSatirlari}${turDugme}${davetHtml}
      ${zayifNoktalarHtml()}
      ${baslikSatiri('Günlük hedef', `<span>${g.xp} / ${GUNLUK_HEDEF} XP</span>`)}
      <div class="hedef"><div class="cubuk-dolgu" role="progressbar" aria-label="Günlük hedef" aria-valuemin="0" aria-valuemax="${GUNLUK_HEDEF}" aria-valuenow="${g.xp}"><b style="width:${hedefOran}%"></b></div></div>
      <div class="gorev-ust">${idilResim('gorev')}${baslikSatiri('Görevler', '<span>her biri +30 XP</span>')}</div>${gorevler}
      <div class="ipucu-kart">${idilResim('ipucu')}<p><b>Küçük bir ipucu!</b>${esc(IPUCLARI[new Date().getDate() % IPUCLARI.length])}</p></div>`,
    sekme: 'bugun',
  });
}

// ==================== ZAYIF NOKTALAR (Görev 8, tasarım ICERIK_GENISLEME §4.6) ====================
// Son 30 cevaptan konu etiketine göre yüzde (zayif.js). Bugün ve Çalış'ta en zayıf üç konu; yalnız en az 5 cevaplı konular
// "zayıf" sayılır, azı "henüz yeterli cevap yok" olarak geçer (inceleme odağı 4). Satır konu ekranına (#/konu/<id>) götürür.
const ZAYIF_SON = 30, ZAYIF_EN_AZ = 5;
const oranYaz = x => `%${Math.round(100 * x.oran)}`;
const zayifListe = () => zayifKonular(durum()?.cevaplar, [...SORULAR, ...DENEME_SORULARI], { son: ZAYIF_SON, enAz: ZAYIF_EN_AZ });
function zayifNoktalarHtml() {
  const l = zayifListe();
  const yeterli = l.filter(x => x.yeterli).slice(0, 3);
  const bos = !l.length ? 'Soru çözdükçe hangi konularda zorlandığın burada görünür.'
    : !yeterli.length ? `Henüz yeterli cevap yok: bir konuda en az ${ZAYIF_EN_AZ} soru çözünce yüzdesi burada görünür.` : '';
  return `${baslikSatiri('Zayıf noktaların', yeterli.length ? `<span>son ${ZAYIF_SON} soruya göre</span>` : '')}
    ${bos ? `<p class="not zayif-bos">${esc(bos)}</p>` : yeterli.map((x, i) => satir({ href: `#/konu/${x.konu}`, renk: 'pembe', etiket: i + 1, ad: `${x.ad} · son ${x.toplam} soruda ${oranYaz(x)}`, alt: esc(zayifYol(x)) })).join('')}`;
}
// Satırın alt yazısı: konunun yolu (önce Sınav Kitabı bölümü, sonra konu seti).
function zayifYol(x) {
  const b = x.kitap.map(id => BOLUM.get(id)).find(Boolean);
  return `${b ? `Sınav Kitabı: ${b.title}` : 'Kelime kartları'} → 10 soruluk konu seti`;
}
// Konunun anlatıldığı Sınav Kitabı dersleri (ders düzeyinde konu etiketi kesişen; yoksa bölümün ilk dersi).
const konuDersleri = (b, k) => (b.dersler || []).filter(d => (d.konular || []).some(e => k.etiketler.includes(e)));
function konuEkrani(id) {
  const k = KONULAR[id];
  const x = zayifListe().find(r => r.konu === id) || null;
  const set = konuSeti(id, SORULAR, durum().cevaplar, 10);
  const havuzSay = SORULAR.filter(s => (s.konu || []).some(e => k.etiketler.includes(e))).length;
  const durumYazi = !x ? 'Bu konuda henüz soru çözmedin.'
    : !x.yeterli ? `Henüz yeterli cevap yok: bu konuda ${x.toplam} soru çözdün. En az ${ZAYIF_EN_AZ} soru çözünce yüzdesi hesaplanır.`
    : `Son ${x.toplam} soruda ${x.dogru} doğru, ${x.toplam - x.dogru} yanlış · ${oranYaz(x)}.`;
  const uyari = x?.yeterli && x.oran < 0.6 ? '<p class="not zayif-uyari"><span class="isaret">Bu tip sorularda sık hata yapıyorsun.</span> Önce bölümü oku, sonra konu setini çöz.</p>'
    : x?.yeterli ? '<p class="not">Bölümü tekrar oku, sonra konu setiyle pekiştir.</p>' : '';
  const bolumler = k.kitap.map(bId => BOLUM.get(bId)).filter(Boolean);
  const kitapSatirlari = bolumler.length
    ? bolumler.map(b => {
      const dersler = konuDersleri(b, k).slice(0, 2);
      return satir({ href: `#/kitap/${b.id}`, renk: 'kraft', etiket: b.no, ad: `Sınav Kitabı: ${b.title} bölümünü çalış`, alt: dersler.length ? esc(dersler.map(d => `${dersKodu(b, d)}. ${d.baslik}`).join(' · ')) : `Bölüm ${b.no} · ${(b.dersler || []).length} ders` });
    }).join('')
    : satir({ href: '#/kelimeler', renk: 'pembe', etiket: ikon.kelimeler, ad: 'Kelime kartlarıyla çalış', alt: 'Bu konunun Sınav Kitabı\'nda bölümü yok; sözcükler kartlarla tekrar edilir' });
  return ekran({
    kabuk: kabukUst({ renk: 'sari', geri: '#/calis', baslik: 'Zayıf noktaların', yapiskan: false, ek: `<h1 style="font:700 28px/34px system-ui;letter-spacing:-.01em;margin-top:6px">${esc(k.ad)}</h1><p class="alt">${esc(durumYazi)}</p>` }),
    govde: `${uyari}${baslikSatiri('1. Konuyu çalış')}${kitapSatirlari}
      ${baslikSatiri('2. Konu setini çöz', `<span>havuzda ${havuzSay} soru</span>`)}
      <p class="not">Önce hiç çözmediğin, sonra yanlış yaptığın sorular gelir.</p>
      <div class="dugme-alani"><button class="birincil" data-eylem="konu-seti" data-konu="${esc(id)}"${set.length ? '' : ' disabled'}>${set.length} soruluk konu seti${ikon.ileri}</button></div>`,
    sekme: 'calis',
  });
}

// ==================== ÇALIŞ ====================
function calisEkrani() {
  const D = durum();
  const st = turIsabeti();
  const yanlis = yanlislar();
  const son = D.denemeler.find(x => !x.id);
  const turler = Object.keys(TURLER).filter(t => SORULAR.some(s => s.tur === t));
  // Dersler alana göre; alan setleri (u.set, 4. tur; YÖKDİL yarım denemesi) alanın derslerinden sonra ayrı başlıkla.
  const alanlar = Object.entries(ALANLAR).flatMap(([k, al]) => [[al.ad, PILOT_UNITS.filter(u => u.course === k && !u.set)], [`${al.ad} · YÖKDİL alan setleri`, PILOT_UNITS.filter(u => u.course === k && u.set)]]).filter(([, l]) => l.length);
  const dersSay = PILOT_UNITS.filter(u => !u.set).length;
  const setSay = PILOT_UNITS.length - dersSay;
  const sira = siradakiDers();
  const sb = sira && BOLUM.get(sira.bolum);
  const sd = sira && dersBul(sira.bolum, sira.ders);
  const kitapHtml = YAZILI.length ? `${baslikSatiri('Konu anlatımı')}
      ${satir({ href: '#/kitap', renk: 'kraft', etiket: BOLUMLER.length, ad: 'Sınav Kitabı', alt: 'Dil bilgisi ve sınav becerileri: tablolar, Türkçe karşılaştırma, sık hatalar, ÖSYM nasıl soruyor, kendini dene', sag: ucret('ucretsiz', `Bölüm 1–${UCRETSIZ_SINAV_BOLUM} ücretsiz`) })}
      ${sd && okunanDersSayisi() ? satir({ href: `#/kitap/${sb.id}/${sd.id}`, renk: 'kraft', etiket: sd.id.toUpperCase(), ad: 'Kaldığın yerden devam et', alt: `${esc(sd.baslik)} · Bölüm ${sb.no}`, sag: `${sd.sure || 4} dk` }) : ''}` : '';
  return ekran({
    kabuk: kabukSekme({ renk: 'sari', h1: 'Çalış', karakter: 'gorev', alt: `${YAZILI.length ? `${BOLUMLER.length} bölümlük Sınav Kitabı · ` : ''}${SORULAR.length} soru · ${dersSay} ünite${setSay ? ` · ${setSay} alan seti` : ''} · ${HAP_KARTLARI.length} hap kartı` }),
    govde: `${kitapHtml}${baslikSatiri('Sınav provası')}
      ${satir({ eylem: 'deneme', renk: 'turuncu', etiket: 80, ad: 'Deneme sınavı', alt: `${esc(D.sinav.tur)} düzeninde 80 soru · 180 dakika · doğru başına 1,25 puan${SINAV_ALANI[D.sinav.tur] ? ' · metinler alanından' : ''}`, sag: `${son ? `<b>${sayi(son.puan, 2)}</b>son puan ` : ''}${D.denemeler.some(x => !x.id) ? ucret('paket') : ucret('ucretsiz', 'Tanı denemesi ücretsiz')}` })}
      ${DENEMELER.length ? `${baslikSatiri('Tam denemeler')}${DENEMELER.map(d => {
        const sd = D.denemeler.find(x => x.id === d.id);
        return satir({ eylem: 'deneme-tam', veri: { id: d.id }, renk: 'turuncu', etiket: d.sorular.length, ad: d.ad, alt: `${d.sorular.length} soru · 180 dk${D.sinav.tur !== d.sinav ? ` · ${esc(d.sinav)} düzeni` : ''}`, sag: sd ? `<b>${sayi(sd.puan, 2)}</b>son puan` : '' });
      }).join('')}` : ''}
      ${SEVIYE_TESTI ? satir({ href: '#/seviye', renk: 'sari', etiket: 18, ad: 'Seviye testi', alt: D.seviye ? `Son sonuç: ${esc(SEVIYE_TESTI.sonuclar[D.seviye.duzey].ad)} · yeniden ölç` : 'Başlangıç seviyeni ölç · yaklaşık 12 dakika', sag: ucret('ucretsiz') }) : ''}
      ${yanlis.length ? satir({ eylem: 'yanlislar', renk: 'pembe', etiket: yanlis.length, ad: 'Yanlışlarım', alt: 'Son cevabın yanlış olan sorular; doğrulayınca listeden düşer', sag: ucret('ucretsiz', 'Tekrar ücretsiz') }) : ''}
      ${zayifNoktalarHtml()}
      ${baslikSatiri('Soru türüne göre')}
      ${turler.map(t => {
        const x = st[t];
        const n = SORULAR.filter(s => s.tur === t).length;
        return satir({ eylem: 'tur-calis', veri: { tur: t }, renk: turRengi(t), etiket: n, ad: TURLER[t].ad, alt: x ? `%${Math.round((100 * x.d) / x.n)} doğru · ${x.cozulen} soru çözdün` : 'Henüz çözmedin', sag: ucret('ucretsiz', '1 set ücretsiz') });
      }).join('')}
      ${HAP_KARTLARI.length ? `${baslikSatiri('Hap bilgi')}${satir({ href: '#/calis/hap', renk: 'sari', etiket: HAP_KARTLARI.length, ad: 'Hap kartları', alt: 'Soru tipi formülleri, dil bilgisi özetleri, kelime stratejileri, sınav taktikleri', sag: ucret('paket') })}` : ''}
      ${alanlar.map(([ad, l]) => `${baslikSatiri(ad)}${l.map(u => {
        const sor = UNITE_SORULARI.get(u.id);
        const cozulen = sor.filter(s => D.cevaplar[s.id]).length;
        return satir({ href: `#/calis/unite/${u.id}`, renk: u.set ? 'turuncu' : 'sari', etiket: sor.length, ad: u.title, alt: `${u.set ? 'Yarım deneme · ' : ''}${u.cards.length} kart · ${cozulen} / ${sor.length} soru çözüldü`, sag: ucret('paket') });
      }).join('')}`).join('')}
      ${paketNotu('sinav')}`,
    sekme: 'calis',
  });
}

function uniteEkrani(u) {
  const D = durum();
  const sor = UNITE_SORULARI.get(u.id);
  const cozulen = sor.filter(s => D.cevaplar[s.id]).length;
  const okuma = sor.find(s => s.tur === 'okuma');
  const hapSay = new Map();
  for (const s of sor) for (const id of hapIcin(s).slice(0, 1)) hapSay.set(id, (hapSay.get(id) || 0) + 1);
  const haplar = [...hapSay].sort((a, b) => b[1] - a[1]).slice(0, 4).map(([id]) => HAPK.get(id));
  const ogrenilen = u.cards.filter(c => (kartDurumu(`${u.id}/${c.code}`)?.kutu || 0) >= 3).length;
  return ekran({
    kabuk: kabukUst({ renk: 'sari', geri: '#/calis', baslik: u.set ? `${ALANLAR[u.course].ad} · alan seti` : ALANLAR[u.course].ad, yapiskan: false, ek: `<h1 style="font:700 28px/34px system-ui;letter-spacing:-.01em;margin-top:6px">${esc(u.title)}</h1><p class="alt">${u.set ? 'YÖKDİL biçiminde yarım deneme · ' : ''}${u.cards.length} kart · ${cozulen} / ${sor.length} soru çözüldü</p>` }),
    govde: `${satir({ eylem: 'unite-kart', veri: { id: u.id }, renk: 'pembe', etiket: u.cards.length, ad: 'Kartları çalış', alt: `${ogrenilen} kart öğrenildi · sözcük, okunuş, anlam, örnek` })}
      ${satir({ eylem: 'unite-soru', veri: { id: u.id }, renk: 'sari', etiket: sor.length, ad: 'Soruları çöz', alt: 'Her sorudan sonra açıklama; yanlışta hap kartı' })}
      ${okuma ? satir({ eylem: 'parca', veri: { id: okuma.it.id }, renk: 'kraft', etiket: sor.filter(s => s.it === okuma.it).length, ad: 'Okuma parçası', alt: esc(okuma.it.title) }) : ''}
      ${haplar.length ? `${baslikSatiri(u.set ? 'Bu sette işine yarar' : 'Bu ünitede işine yarar')}${haplar.map(k => satir({ href: `#/calis/hap/${k.id}`, renk: 'sari', etiket: '·', ad: k.title, alt: esc(k.hap) })).join('')}` : ''}
      ${baslikSatiri('Kelimeler', `<span>${u.cards.length}</span>`)}
      ${u.cards.map(c => satir({ href: `#/kelimeler/kart/${encodeURIComponent(`${u.id}/${c.code}`)}`, renk: 'pembe', etiket: kutuEtiketi(`${u.id}/${c.code}`), ad: c.code, alt: esc(c.title) })).join('')}`,
    sekme: 'calis',
  });
}

// ---------- hap bilgi ----------
function hapListesi() {
  return ekran({
    kabuk: kabukUst({ renk: 'sari', geri: '#/calis', baslik: 'Çalış', yapiskan: false, ek: `<h1 style="font:700 28px/34px system-ui;margin-top:6px">Hap bilgi</h1><p class="alt">${HAP_KARTLARI.length} kart · her soru en az bir karta bağlı</p>` }),
    govde: Object.entries(KATEGORILER).map(([k, ad]) => {
      const l = HAP_KARTLARI.filter(x => x.kategori === k);
      return `${baslikSatiri(ad)}${l.map(x => satir({ href: `#/calis/hap/${x.id}`, renk: durum().hapAcilan.includes(x.id) ? 'bos' : 'sari', etiket: HAP_BAGLI.get(x.id).length || '·', ad: x.title, alt: esc(x.hap) })).join('')}`;
    }).join('') + '<p class="not">Etiketteki sayı karta bağlı soru sayısıdır. Okuduğun kartların etiketi soluklaşır.</p>',
    sekme: 'calis',
  });
}
function hapKarti(k, { oturumda = false } = {}) {
  hapOkundu(k.id);
  const bagli = HAP_BAGLI.get(k.id) || [];
  const liste = (cls, l) => `<ul class="${cls}">${l.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;
  const ornek = o => {
    if (o.soru) {
      const s = SORU.get(o.soru);
      if (!s) return '';
      const kok = s.tur === 'bozan' ? s.it.sentences.map((x, i) => `(${ROMA[i]}) ${x}`).join(' ') : s.q;
      const dogru = s.tur === 'bozan' ? `${ROMA[s.answer]}. cümle` : s.options[s.answer];
      return `<div class="ornek"><span style="font:600 12px/16px system-ui;color:var(--ikincil)">${esc(TURLER[s.tur].ad)}${s.it.type === 'pratik' ? ` · ${esc(s.it.title)}` : ''}</span>
        <span class="kok-alinti">${bosHtml(kok)}</span><details><summary style="min-height:32px;display:flex;align-items:center;font:600 14px system-ui;cursor:pointer">Cevap ve not</summary><p>Doğru: <b>${esc(dogru)}</b>. ${esc(o.not)}</p></details></div>`;
    }
    return `<div class="ornek"><span class="kok-alinti" lang="en">${esc(o.en)}</span>${o.tr ? `<span>${esc(o.tr)}</span>` : ''}${o.not ? `<span style="display:block;color:var(--ikincil);margin-top:2px">${esc(o.not)}</span>` : ''}</div>`;
  };
  const ust = oturumda ? { kapat: null, geri: '#/oturum' } : { geri: '#/calis/hap' };
  return ekran({
    kabuk: kabukUst({ renk: 'sari', ...ust, baslik: KATEGORILER[k.kategori] || 'Hap bilgi', yapiskan: false, ek: `<h1 style="font:700 28px/34px system-ui;letter-spacing:-.01em;margin-top:6px">${esc(k.title)}</h1>` }),
    govde: `<p class="hap-satiri"><span class="isaret">${esc(k.hap)}</span></p>
      ${k.body.map(x => `<p class="metin">${esc(x)}</p>`).join('')}
      ${k.adimlar?.length ? `${baslikSatiri('Adım adım')}<ol class="adimlar">${k.adimlar.map(x => `<li>${esc(x)}</li>`).join('')}</ol>` : ''}
      ${k.tablo ? `${baslikSatiri('Tablo')}<div class="tablo-kap"><table><thead><tr>${k.tablo.sutunlar.map(c => `<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${k.tablo.satirlar.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>` : ''}
      ${k.tuzaklar?.length ? `${baslikSatiri('Tuzaklar')}${liste('maddeler', k.tuzaklar)}` : ''}
      ${k.ornekler?.length ? `${baslikSatiri('Örnekler')}${k.ornekler.map(ornek).join('')}` : ''}
      ${k.veri?.length ? `${baslikSatiri('ÖSYM verisi')}${liste('maddeler', k.veri)}` : ''}`,
    alt: oturumda ? '<div class="alt-eylem"><a class="birincil" href="#/oturum">Soruya dön</a></div>'
      : bagli.length ? `<div class="alt-eylem"><button class="birincil" data-eylem="hap-coz" data-id="${k.id}">Bu karta bağlı ${Math.min(10, bagli.length)} soruyu çöz${ikon.ileri}</button></div>` : '',
    sekme: oturumda ? null : 'calis',
  });
}

// ==================== DERS KİTABI ====================
// Kitap okuyucu iki kitabı okur (18 Kasım 2026): Sınav Kitabı (YDS kitabı, #/kitap) ve Genel İngilizcenin Ders yolu (Başlangıç
// Kitabı, #/ders). KB ekranı çizen kitaptır; ciz() adrese göre seçer, oturum ve öteki her yer Sınav Kitabı'nı görür.
// Ders'in alıştırma anahtarları 'ders:' ön eklidir (kitap().dene'de çakışmasın); okunan dersler ayrı defterde (durum.js dersDefteri).
const SINAV_KB = { id: 'sinav', kok: 'kitap', ad: 'Sınav Kitabı', K: KITAP, BOLUMLER, BOLUM, YAZILI, dersBul, onek: '',
  okunduMu, bolumIlerleme, okunanSayisi: okunanDersSayisi, siradaki: siradakiDers,
  ucret: b => (b.no <= UCRETSIZ_SINAV_BOLUM ? ucret('ucretsiz') : ucret('paket')), paket: 'sinav' };
const DERS_KB = { id: 'ders', kok: 'ders', ad: 'Ders', K: BASLANGIC, BOLUMLER: B_BOLUMLER, BOLUM: B_BOLUM, YAZILI: B_YAZILI, dersBul: bDersBul, onek: 'ders:',
  okunduMu: dOkunduMu, bolumIlerleme: dBolumIlerleme, okunanSayisi: dOkunanSayisi, siradaki: dSiradaki,
  ucret: b => (b.no <= UCRETSIZ_DERS_BOLUM ? ucret('ucretsiz') : ucret('paket')), paket: 'genel' };
let KB = SINAV_KB;
const kbAnahtar = a => (a.startsWith(DERS_KB.onek) ? DERS_KB : SINAV_KB);
// İçerikteki işaretler: **kalın**, ==fosforlu kalem (dersin hedef yapısı)==, *İngilizce sözcük* (eğik); soruda ---- boşluk.
function isle(metin) {
  return esc(metin)
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/==(.+?)==/g, '<span class="isaret">$1</span>')
    .replace(/\*(.+?)\*/g, '<i lang="en">$1</i>')
    .replace(/-{4}/g, '<span class="bos" aria-label="boşluk">----</span>')
    // Ek gösterimi (-ing, -e rağmen, -ken): tirenin ardından satır kırılmasın.
    .replace(/(^|[\s(/])-(?=[a-zçğıöşü])/giu, '$1‑');
}
const duzMetin = m => String(m || '').replace(/\*\*|==|\*/g, '').replace(/-{4}/g, '…');
const dersKodu = (b, d) => `${b.no}${d.id.toUpperCase()}`;
const KUTU_ADI = { turkce: 'Türkçede', sinavda: 'Sınavda', ipucu: 'İpucu' };

// Kendini dene: şıklı alıştırma; cevap hemen işaretlenir, açıklama altında açılır (bir kez cevaplanır).
function deneHtml(x, a) {
  const c = kitap().dene[a];
  const siklar = x.secenekler.map((t, i) => {
    let cls = 'sik';
    let durumu = '';
    if (c) { if (i === x.dogru) { cls += ' dogru'; durumu = 'Doğru'; } else if (i === c.s) { cls += ' yanlis'; durumu = 'Senin cevabın'; } }
    return `<li><button class="${cls}" data-eylem="dene" data-a="${esc(a)}" data-i="${i}"${c ? ' disabled' : ''}><span class="h">${HARF[i]}</span><span>${isle(t)}</span>${durumu ? `<span class="durumu">${durumu}</span>` : ''}</button></li>`;
  }).join('');
  return `<div class="dene" data-dene="${esc(a)}"><span class="kutu-ad">Kendini dene</span><p class="dene-soru">${isle(x.soru)}</p><ol class="siklar">${siklar}</ol>
    ${c ? `<p class="dene-aciklama">${c.d ? '<b class="tamam">Doğru.</b>' : '<b class="hata">Olmadı.</b>'} ${isle(x.aciklama)}</p>` : ''}</div>`;
}
// Doğru mu, yanlış mı: cümleyi yargıla; yanlışsa üstü çizilir, doğrusu altına yazılır (kullanım kılavuzlarının ✗/✓ yöntemi).
function dogruMuHtml(x, a) {
  const c = kitap().dene[a];
  const cumle = c && !x.dogru ? `<s>${isle(x.cumle)}</s>` : isle(x.cumle);
  return `<div class="dene" data-dene="${esc(a)}"><span class="kutu-ad">Doğru mu, yanlış mı?</span><p class="dene-soru" lang="en">${cumle}</p>
    ${c ? `${!x.dogru && x.duzeltme ? `<p class="dene-duzeltme" lang="en">${isle(x.duzeltme)}</p>` : ''}<p class="dene-aciklama">${c.d ? '<b class="tamam">Bildin.</b>' : '<b class="hata">Olmadı.</b>'} Cümle ${x.dogru ? 'doğru' : 'yanlış'}. ${isle(x.aciklama)}</p>`
    : `<div class="iki-dugme"><button class="ikinci kucuk" data-eylem="dogrumu" data-a="${esc(a)}" data-v="1">Doğru</button><button class="ikinci kucuk" data-eylem="dogrumu" data-a="${esc(a)}" data-v="0">Yanlış</button></div>`}</div>`;
}
// Çözümlü örnek (rehberliği adım adım azalan çözüm): soru ve şıklar; her dokunuş bir adım açar, son adımda doğru şık işaretlenir.
const cozumAdimi = new Map(); // blok anahtarı → açılan adım sayısı (oturumluk, kaydedilmez)
function cozumluHtml(x, a) {
  const n = cozumAdimi.get(a) || 0;
  const bitti = n >= x.adimlar.length;
  const siklar = x.secenekler.map((t, i) => { const d = bitti && i === x.dogru; return `<li><div class="sik${d ? ' dogru' : ''}"><span class="h">${HARF[i]}</span><span>${isle(t)}</span>${d ? '<span class="durumu">Doğru</span>' : ''}</div></li>`; }).join('');
  return `<div class="dene cozumlu" data-dene="${esc(a)}"><span class="kutu-ad">Çözümlü örnek</span><p class="dene-soru">${isle(x.soru)}</p><ol class="siklar">${siklar}</ol>
    ${n ? `<ol class="cozum-adimlari">${x.adimlar.slice(0, n).map(s => `<li>${isle(s)}</li>`).join('')}</ol>` : ''}
    ${bitti ? '' : `<div class="iki-dugme"><button class="ikinci kucuk" data-eylem="cozum-adim" data-a="${esc(a)}">${n ? `Sonraki adım (${n + 1}/${x.adimlar.length})` : 'Adım adım çöz'}</button></div>`}</div>`;
}
// Yanlışı bul: cümle dört parçaya bölünür, hatalı parçaya dokunulur (hata bulma alıştırması).
function hataBulHtml(x, a) {
  const c = kitap().dene[a];
  const parca = (t, i) => {
    let cls = 'parca-dugme';
    if (c && i === x.yanlis) cls += ' hatali';
    else if (c && i === c.s) cls += ' secildi';
    return `<button class="${cls}" data-eylem="hatabul" data-a="${esc(a)}" data-i="${i}"${c ? ' disabled' : ''}><span>${isle(t)}</span><small>${HARF[i]}</small></button>`;
  };
  return `<div class="dene" data-dene="${esc(a)}"><span class="kutu-ad">Yanlışı bul</span><p class="hata-cumle" lang="en">${x.parcalar.map(parca).join(' ')}</p>
    ${c ? `${x.duzeltme ? `<p class="dene-duzeltme" lang="en">${isle(x.duzeltme)}</p>` : ''}<p class="dene-aciklama">${c.d ? '<b class="tamam">Buldun.</b>' : `<b class="hata">Olmadı.</b> Yanlış olan ${HARF[x.yanlis]}.`} ${isle(x.aciklama)}</p>`
    : '<p class="dene-aciklama" style="color:var(--ikincil)">Cümlenin yanlış parçasına dokun.</p>'}</div>`;
}
// ---------- Ders alıştırmaları ve bölüm sonu testi (Görev 5, 21 Kasım 2026; biçim ../icerik/baslangic/README.md §2a) ----------
// Beş tür: sec, yaz, duzelt, cevir, dinle. Geri bildirim Yolculuk oynatıcısının sakin dilindedir (IKI_KANAT §4.3): kırmızı kalem
// ve sallama yok; yanlış şık yalnız soluklaşır, doğrusu yeşil gösterilir ve altında açıklama açılır. Her öğe bir kez cevaplanır.
// Anahtar 'al:<bölüm>/<ders>/<j>' (dersin alıştırması) ya da 'at:<bölüm>/<j>' (bölüm sonu testi); c = { d, s } (durum.js).
const ALIS_AD = { sec: 'Seç', yaz: 'Boşluğu yaz', duzelt: 'Cümleyi düzelt', cevir: 'Türkçeden İngilizceye', dinle: 'Dinle ve seç' };
// yaz sorusunun ve duzelt cümlesinin sonundaki parantez Türkçe ipucudur ("(lütfen)", "(4, sözcükle)"; Görev 6 düzeltme 1):
// yalnız İngilizce kısım lang="en" alır, ipucu sayfanın dilinde (Türkçe) okunur.
function enIpucu(m) {
  const t = String(m ?? ''), p = t.match(/^([\s\S]*?)\s*(\([^()]*\))\s*$/);
  return p && p[1] ? `<span lang="en">${isle(p[1])}</span> <span class="alis-ipucu">${isle(p[2])}</span>` : `<span lang="en">${isle(t)}</span>`;
}
// "Doğrusu: X." — X zaten nokta, soru ya da ünlem işaretiyle bitiyorsa ikinci nokta konmaz ("Hello..").
const sonNokta = t => (/[.!?…]\s*$/.test(String(t ?? '')) ? '' : '.');
function alisHtml(x, a, c, no) {
  const ad = `<span class="kutu-ad">${no}. ${ALIS_AD[x.tur] || 'Alıştırma'}</span>`;
  const soru = x.tur === 'dinle'
    ? `<p class="dene-soru"><button class="ikinci kucuk alis-dinle" data-eylem="dinle" data-metin="${esc(x.ses)}" aria-label="Cümleyi dinle">${ikon.ses}<span>Dinle</span></button>${c ? ` <span class="alis-duyulan" lang="en">${esc(x.ses)}</span>` : ''}</p>`
    : x.tur === 'cevir' ? `<p class="dene-soru">${isle(x.tr)}</p><p class="alis-yonerge">İngilizcesi hangisi?</p>`
      : x.tur === 'duzelt' ? `<p class="dene-soru">${enIpucu(x.cumle)}</p><p class="alis-yonerge">Bu cümlede bir yanlış var. Doğrusu hangisi?</p>`
        : `<p class="dene-soru">${x.tur === 'yaz' ? enIpucu(x.soru) : isle(x.soru)}</p>`;
  let cevap;
  if (x.tur === 'yaz') {
    const dogrusu = (x.cevaplar || [])[0] || '';
    cevap = c
      ? `${c.d ? '' : `<p class="yaz-verilen">Yazdığın: <span lang="en">${esc(String(c.s ?? ''))}</span></p>`}<p class="dene-aciklama">${c.d ? '<b class="tamam">Doğru.</b>' : `Doğrusu: <b lang="en">${esc(dogrusu)}</b>${sonNokta(dogrusu)}`} ${isle(x.aciklama)}</p>`
      : `<form class="yaz-form" data-a="${esc(a)}"><input name="cevap" lang="en" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Boşluğa gelen sözcük"><button class="ikinci kucuk" type="submit">Denetle</button></form>`;
  } else {
    const siklar = (x.secenekler || []).map((t, i) => {
      let cls = 'sik';
      if (c) { if (i === x.dogru) cls += ' dogru'; else if (i === c.s) cls += ' soluk'; }
      return `<li><button class="${cls}" data-eylem="alis" data-a="${esc(a)}" data-i="${i}"${c ? ' disabled' : ''}><span class="h">${HARF[i]}</span><span${x.tur === 'sec' ? '' : ' lang="en"'}>${isle(t)}</span>${c && i === x.dogru ? `<span class="durumu">${c.d ? 'Doğru' : 'Doğrusu'}</span>` : ''}</button></li>`;
    }).join('');
    cevap = `<ol class="siklar">${siklar}</ol>${c ? `<p class="dene-aciklama">${c.d ? '<b class="tamam">Doğru.</b>' : `Doğrusu: <b>${isle(x.secenekler?.[x.dogru] ?? '')}</b>${sonNokta(x.secenekler?.[x.dogru])}`} ${isle(x.aciklama)}</p>` : ''}`;
  }
  return `<div class="dene alistirma" data-dene="${esc(a)}">${ad}${soru}${cevap}</div>`;
}
// Gerekli doğru sayısı (tam sayıyla: 10'da 8, 15'te 12).
const gerekenDogru = n => Math.ceil((n * Math.round(ESIK * 100)) / 100);
// Dersin bloklarından sonra "Alıştırma (n)". Hepsi çözülünce sonuç ve "Yeniden çöz"; %80 ile anlam kanadı (anlamKanadiIsle).
function alistirmaBolumu(b, d) {
  const L = dersAlistirmalari(d);
  if (!L.length) return '';
  const p = dAlistirmaIlerleme(b.id, d.id, L.length);
  const birimli = Array.isArray(d.birimler) && d.birimler.some(Boolean);
  const sonuc = p.durum !== 'tamam' ? '' : `<div class="kutu alis-sonuc"><span class="kutu-ad">Sonuç</span><p>${p.toplam} alıştırmada ${p.dogru} doğru. ${p.gecti
    ? `Bu dersin kuralı yerine oturdu${birimli ? '; anlam kanadı işlendi' : ''}.`
    : `Kuralın yerine oturması için en az ${gerekenDogru(p.toplam)} doğru gerekir. Açıklamalara bir göz at, sonra bir daha dene.`}</p>
    <div class="iki-dugme"><button class="ikinci kucuk" data-eylem="alis-yeniden" data-b="${esc(b.id)}" data-d="${esc(d.id)}">Yeniden çöz</button></div></div>`;
  return `<section class="alistirmalar" id="alistirma">${baslikSatiri(`Alıştırma (${L.length})`, `<span>${p.cevaplanan} / ${p.toplam}</span>`)}
    ${L.map((x, j) => alisHtml(x, `al:${b.id}/${d.id}/${j}`, dAlistirmaCevap(b.id, d.id, j), j + 1)).join('')}${sonuc}</section>`;
}
// Hatırla: ileri derste ön koşul konuya tek dokunuşluk bağlantı (yazılmamış bölümdeyse yalnız metin).
let blokBaglami = 'kitap'; // 'oturum' iken bağlantılar oturumdan çıkmadan açılır
function hatirlatHtml(x) {
  const b = KB.BOLUM.get(x.bolum);
  const d = KB.dersBul(x.bolum, x.ders);
  const hedef = d ? `${b.no}${d.id.toUpperCase()}. ${esc(d.baslik)}` : b ? `Bölüm ${b.no}. ${esc(b.title)}` : '';
  const ic = `<span class="kutu-ad">Hatırla</span><p>${x.metin ? `${isle(x.metin)} ` : ''}${hedef ? `<b>${hedef}</b>` : ''}${b && !b.dersler?.length ? ' (yazılacak)' : ''}</p>`;
  // Hedef ders yazılıysa derse, yalnız bölüm yazılıysa bölümün kapağına gider; oturumdayken oturumdan çıkmadan açılır.
  const yer = d ? `${KB.kok}/${b.id}/${d.id}` : b?.dersler?.length && blokBaglami !== 'oturum' ? `${KB.kok}/${b.id}` : null;
  if (!yer) return `<div class="kutu">${ic}</div>`;
  return `<a class="kutu hatirlat" href="#/${blokBaglami === 'oturum' && d ? 'oturum/' : ''}${yer}">${ic}</a>`;
}
// Metinde gör: bölümün yapıları kısa, özgün bir akademik paragrafta; hedef yapılar fosforlu, Türkçesi dokununca açılır.
function metindeHtml(x) {
  return `<div class="kutu metinde"><span class="kutu-ad">Metinde gör${x.baslik ? ` · ${esc(x.baslik)}` : ''}</span><p class="parca-metin" lang="en">${isle(x.en)}<button class="ses-dugme" data-eylem="dinle" data-metin="${esc(duzMetin(x.en))}" aria-label="Paragrafı dinle">${ikon.ses}</button></p>
    ${x.tr ? `<details><summary>Türkçesi</summary><p>${isle(x.tr)}</p></details>` : ''}${x.not ? `<p class="ek">${isle(x.not)}</p>` : ''}</div>`;
}
// ---------- zaman çizgisi (18 Kasım 2026; tasarım: ../tasarim/zaman-cizgisi-acd.html) ----------
// El çizimi eksen, fosforlu kalem şeridi (süren iş), pembe yıldız (ani olay), turuncu nokta (önce olan), kalemle "şimdi".
// Cümlenin her parçası kendi şeridinde. Konumlar 0–100 arası zaman birimi. Şekiller özgündür.
const CZ_SARI = '#EFFF3D', CZ_PEMBE = '#FF73B3', CZ_TURUNCU = '#FF8A2A', CZ_MUREKKEP = '#141414', CZ_IKINCIL = '#56574F';
const czYildiz = (cx, cy, r, renk = CZ_PEMBE) => `<path transform="translate(${cx} ${cy}) scale(${r / 13})" d="M0 -13 l4 9 l10 1 l-7 7 l2 10 l-9 -5 l-9 5 l2 -10 l-7 -7 l10 -1 z" fill="${renk}" stroke="${CZ_MUREKKEP}" stroke-width="${1.6 * 13 / r}" stroke-linejoin="round"/>`;
const czMetin = (x, y, t, { boy = 16, renk = CZ_MUREKKEP, hiza = 'start' } = {}) => `<text x="${x}" y="${y}" font-family="Kalam, system-ui" font-weight="700" font-size="${boy}" fill="${renk}" text-anchor="${hiza}">${esc(t)}</text>`;
const czEksen = (x1, x2, y) => `<path d="M${x1} ${y} Q${(x1 + x2) / 2 - 40} ${y - 3} ${(x1 + x2) / 2 + 20} ${y + 1} T${x2} ${y - 1}" fill="none" stroke="${CZ_MUREKKEP}" stroke-width="2.2" stroke-linecap="round"/><path d="M${x2 - 10} ${y - 7} L${x2} ${y - 1} L${x2 - 10} ${y + 6}" fill="none" stroke="${CZ_MUREKKEP}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`;
const czSerit = (x1, x2, yt, yb) => `<path d="M${x1 + 2} ${yt + 1} L${x2} ${yt - 2} L${x2 + 1} ${yb} L${x1} ${yb + 1} Z" fill="${CZ_SARI}" opacity=".95"/>`;
function cizgiSvg(x) {
  const n = Math.max(1, (x.seritler || []).length), sol = x.seritler?.length ? 70 : 16, sag = 330, ust = 24, H = 44;
  const X = v => Math.round(sol + (sag - 16 - sol) * v / 100);
  const yu = s => ust + s * H;                    // şeridin üstü
  const eksenY = ust + n * H + 10, boy = eksenY + 26;
  const sim = x.simdi ?? 85, parca = [];
  (x.seritler || []).forEach((ad, i) => { parca.push(czMetin(2, yu(i) + 27, ad, { boy: 13, renk: CZ_IKINCIL })); if (i) parca.push(`<path d="M${sol} ${yu(i)} Q200 ${yu(i) - 2} ${sag} ${yu(i) + 1}" fill="none" stroke="#E2E2DC" stroke-width="1.5" stroke-dasharray="4 5"/>`); });
  const ogeler = x.ogeler || [];
  // Dikey çizgiler (şimdi, başlangıç, sınır): şerit etiketi bunların üstüne binmesin.
  const dikey = [X(sim), ...ogeler.filter(o => o.tip === 'baslangic' || o.tip === 'sinir').map(o => X(o.x))];
  for (const o of ogeler.filter(o => o.tip === 'serit')) {
    const x1 = X(o.bas), x2 = X(o.son), yt = yu(o.s || 0) + 9, yb = yt + 27, gen = (o.etiket || '').length * 7.6;
    parca.push(czSerit(x1, x2, yt, yb));
    if (!o.etiket) continue;
    // Şeridi dikey çizgilerden böl; etiketin sığdığı en geniş boşluğun ortasına koy; sığmazsa şeridin sağına.
    const kesik = [x1, ...dikey.filter(v => v > x1 + 4 && v < x2 - 4).sort((a, b) => a - b), x2];
    const bosluk = kesik.slice(1).map((v, i) => [kesik[i], v]).sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]))[0];
    parca.push(bosluk[1] - bosluk[0] > gen + 10 ? czMetin((bosluk[0] + bosluk[1]) / 2, yt + 19, o.etiket, { hiza: 'middle' }) : czMetin(x2 + 6, yt + 19, o.etiket));
  }
  for (const o of ogeler) {
    if (o.tip === 'baslangic' || o.tip === 'sinir') {
      parca.push(`<path d="M${X(o.x)} ${ust - 8} L${X(o.x) + 1} ${eksenY - 4}" stroke="${CZ_MUREKKEP}" stroke-width="${o.tip === 'sinir' ? 1.8 : 1.6}" stroke-dasharray="${o.tip === 'sinir' ? '5 4' : '3 4'}" stroke-linecap="round"/>`);
      if (o.etiket) parca.push(czMetin(X(o.x), ust - 11, o.etiket, { boy: 14, hiza: 'middle' }));
    }
    if (o.tip === 'noktalar') o.xs.forEach(v => parca.push(`<circle cx="${X(v)}" cy="${yu(o.s || 0) + 22}" r="6" fill="${CZ_PEMBE}" stroke="${CZ_MUREKKEP}" stroke-width="1.4"/>`));
    if (o.tip === 'ok') {
      const y = yu(o.s || 0) + 22, x1 = X(o.bas), x2 = X(o.son ?? sim) - 4;
      parca.push(`<path d="M${x1} ${y} L${x2 - 6} ${y}" stroke="${CZ_TURUNCU}" stroke-width="7" stroke-linecap="round"/><path d="M${x2 - 10} ${y - 8} L${x2} ${y} L${x2 - 10} ${y + 8} Z" fill="${CZ_TURUNCU}"/>`);
      if (o.etiket) parca.push(czMetin((x1 + x2) / 2, y + 26, o.etiket, { boy: 14, hiza: 'middle' }));
    }
    if (o.tip === 'egri') {
      const [s1, v1] = o.den, [s2, v2] = o.e, ax = X(v1) + 6, ay = yu(s1) + 34, bx = X(v2) - 15, by = yu(s2) + 18;
      parca.push(`<path d="M${ax} ${ay} Q${ax + 6} ${by} ${bx} ${by}" fill="none" stroke="${CZ_MUREKKEP}" stroke-width="1.6" stroke-linecap="round"/><path d="M${bx - 7} ${by - 6} L${bx + 1} ${by} L${bx - 8} ${by + 5}" fill="none" stroke="${CZ_MUREKKEP}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`);
    }
  }
  for (const o of ogeler) {
    const cx = X(o.x), cy = yu(o.s || 0) + 22;
    if (o.tip === 'yildiz') {
      if (o.bag) parca.push(`<path d="M${cx} ${yu(o.s) - 8} L${cx + 1} ${cy - 13}" stroke="${CZ_MUREKKEP}" stroke-width="1.4" stroke-dasharray="2 3"/>`);
      parca.push(czYildiz(cx, cy, 13));
      if (o.no) parca.push(czMetin(cx, cy + 4, String(o.no), { boy: 11, hiza: 'middle' }));
      if (o.etiket) parca.push(czMetin(cx + 18, cy + 6, o.etiket));
    }
    if (o.tip === 'nokta') {
      parca.push(`<circle cx="${cx}" cy="${cy}" r="10" fill="${CZ_TURUNCU}" stroke="${CZ_MUREKKEP}" stroke-width="1.6"/>`);
      if (o.bitti) parca.push(`<path d="M${cx - 5} ${cy} l4 4 l7 -8" fill="none" stroke="${CZ_MUREKKEP}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`);
      else if (o.no) parca.push(czMetin(cx, cy + 5, String(o.no), { boy: 13, hiza: 'middle' }));
      if (o.etiket) parca.push(o.alt ? czMetin(cx, cy + 32, o.etiket, { hiza: 'middle' }) : czMetin(cx + 16, cy + 6, o.etiket));
    }
  }
  parca.push(`<path d="M${X(sim)} ${ust - 14} L${X(sim) + 2} ${eksenY - 4}" stroke="${CZ_MUREKKEP}" stroke-width="3" stroke-linecap="round"/>`);
  parca.push(czEksen(sol, sag, eksenY));
  parca.push(czMetin(X(sim) + 2, eksenY + 18, 'şimdi', { boy: 14, hiza: 'middle' }));
  if (sim > 25) parca.push(czMetin(sol + 2, eksenY + 18, 'geçmiş', { boy: 13, renk: CZ_IKINCIL }));
  if (sim < 70) parca.push(czMetin(sag - 6, eksenY + 18, 'gelecek', { boy: 13, renk: CZ_IKINCIL, hiza: 'end' }));
  return `<svg class="cizgi-svg" viewBox="0 0 340 ${boy}" role="img" aria-label="${esc(x.aciklama || x.zaman || '')}">${parca.join('')}</svg>`;
}
// Cümlede renk: ==sarı== süren iş, ++pembe++ ani olay, ^^turuncu^^ önce olan.
const czIsle = m => isle(m).replace(/\+\+(.+?)\+\+/g, '<span class="isaret pembe">$1</span>').replace(/\^\^(.+?)\^\^/g, '<span class="isaret turuncu">$1</span>');
const czDuz = m => duzMetin(String(m || '').replace(/\+\+|\^\^/g, ''));
function cizgiHtml(x) {
  return `<figure class="cizgi"><figcaption class="cizgi-ad" lang="en">${esc(x.zaman)}</figcaption>${cizgiSvg(x)}
    ${x.cumleler?.length ? `<ul class="cizgi-cumleler">${x.cumleler.map(c => `<li><p class="en" lang="en">${czIsle(c.en)}<button class="ses-dugme" data-eylem="dinle" data-metin="${esc(czDuz(c.en))}" aria-label="Cümleyi dinle">${ikon.ses}</button></p>${c.tr ? `<p class="tr">${isle(c.tr)}</p>` : ''}</li>`).join('')}</ul>` : ''}
    ${x.not ? `<p class="ek">${isle(x.not)}</p>` : ''}</figure>`;
}
// Zamanlar haritası: her zaman için küçük simge, yapı, ipucu sözcükler, kısa Türkçe anlam; dokununca o zamanın dersi açılır.
function miniSvg(ogeler, ad) {
  const X = v => 6 + 86 * v / 100, p = [];
  for (const o of ogeler.filter(o => o.tip === 'serit')) p.push(czSerit(X(o.bas), X(o.son), 14, 29));
  p.push(`<path d="M4 22 Q30 20 50 22.5 T92 21.5" fill="none" stroke="${CZ_MUREKKEP}" stroke-width="1.8" stroke-linecap="round"/><path d="M89 18 L95 21.5 L89 25" fill="none" stroke="${CZ_MUREKKEP}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M50 10 L51 31" stroke="${CZ_MUREKKEP}" stroke-width="2.6" stroke-linecap="round"/>`);
  for (const o of ogeler) {
    if (o.tip === 'noktalar') o.xs.forEach(v => p.push(`<circle cx="${X(v)}" cy="21.5" r="4" fill="${CZ_PEMBE}" stroke="${CZ_MUREKKEP}"/>`));
    if (o.tip === 'ok') p.push(`<path d="M${X(o.bas)} 21.5 L44 21.5" stroke="${CZ_TURUNCU}" stroke-width="5" stroke-linecap="round"/><path d="M40 16 L48 21.5 L40 27" fill="${CZ_TURUNCU}"/><circle cx="${X(o.bas)}" cy="21.5" r="3.5" fill="${CZ_MUREKKEP}"/>`);
    if (o.tip === 'sinir') p.push(`<path d="M${X(o.x)} 9 L${X(o.x)} 32" stroke="${CZ_MUREKKEP}" stroke-width="1.6" stroke-dasharray="3 2.5"/>${czMetin(X(o.x), 7, 'by', { boy: 8, hiza: 'middle' })}`);
    if (o.tip === 'an') p.push(`<path d="M${X(o.x)} 12 L${X(o.x)} 31" stroke="${CZ_MUREKKEP}" stroke-width="1.4" stroke-dasharray="2 2.5"/>`);
    if (o.tip === 'nokta') p.push(`<circle cx="${X(o.x)}" cy="21.5" r="4.5" fill="${CZ_TURUNCU}" stroke="${CZ_MUREKKEP}"/>${o.no ? czMetin(X(o.x), 10, String(o.no), { boy: 9, hiza: 'middle' }) : ''}`);
    if (o.tip === 'yildiz') p.push(`${czYildiz(X(o.x), 21.5, o.r || 8.5)}${o.no ? czMetin(X(o.x), 9, String(o.no), { boy: 9, hiza: 'middle' }) : ''}`);
  }
  return `<svg viewBox="0 0 100 34" role="img" aria-label="${esc(ad)}">${p.join('')}</svg>`;
}
function haritaHtml(x) {
  const hucre = z => {
    const d = z.bolum && KB.dersBul(z.bolum, z.ders);
    const ic = `${miniSvg(z.mini || [], z.ad)}<span class="ad" lang="en">${esc(z.ad)}</span><span class="yapi" lang="en">${esc(z.yapi)}</span><span class="ipucu" lang="en">${esc(z.ipucu)}</span><span class="h-anlam">${esc(z.tr)}</span>`;
    return d ? `<a class="harita-hucre" href="#/${blokBaglami === 'oturum' ? 'oturum/' : ''}${KB.kok}/${z.bolum}/${z.ders}">${ic}</a>` : `<div class="harita-hucre">${ic}</div>`;
  };
  return `<div class="harita">${x.baslik ? `<p class="harita-baslik">${isle(x.baslik)}</p>` : ''}${x.metin ? `<p class="harita-metin">${isle(x.metin)}</p>` : ''}
    ${x.gruplar.map(g => `<p class="harita-grup">${esc(g.ad)}</p><div class="harita-izgara">${g.ogeler.map(hucre).join('')}</div>`).join('')}
    <p class="harita-anahtar"><span><svg width="22" height="12" viewBox="0 0 22 12"><path d="M1 2 L21 1 L21 11 L0 11 Z" fill="${CZ_SARI}" stroke="${CZ_MUREKKEP}" stroke-width=".6"/></svg>süren iş</span><span><svg width="14" height="14" viewBox="0 0 14 14">${czYildiz(7, 7.5, 6.5)}</svg>ani olay</span><span><svg width="12" height="12" viewBox="0 0 12 12"><circle cx="6" cy="6" r="5" fill="${CZ_TURUNCU}" stroke="${CZ_MUREKKEP}"/></svg>önce olan</span></p></div>`;
}
function blokHtml(x, a) {
  switch (x.tur) {
    case 'cizgi': return cizgiHtml(x);
    case 'harita': return haritaHtml(x);
    case 'metinde': return metindeHtml(x);
    case 'cozumlu': return cozumluHtml(x, a);
    case 'hataBul': return hataBulHtml(x, a);
    case 'hatirlat': return hatirlatHtml(x);
    case 'metin': return `<p class="metin">${isle(x.metin)}</p>`;
    case 'kural': return `<p class="kural">${isle(x.metin)}</p>`;
    case 'tablo': return `${x.baslik ? `<p class="tablo-baslik">${isle(x.baslik)}</p>` : ''}<div class="tablo-kap"><table><thead><tr>${x.sutunlar.map(c => `<th>${isle(c)}</th>`).join('')}</tr></thead><tbody>${x.satirlar.map(r => `<tr>${r.map(c => `<td>${isle(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>${x.not ? `<p class="not">${isle(x.not)}</p>` : ''}`;
    case 'ornekler': return `<ul class="ornekler">${x.liste.map(o => `<li><p class="en" lang="en">${isle(o.en)}<button class="ses-dugme" data-eylem="dinle" data-metin="${esc(duzMetin(o.en))}" aria-label="Örneği dinle">${ikon.ses}</button></p>${o.tr ? `<p class="tr">${isle(o.tr)}</p>` : ''}${o.not ? `<p class="ek">${isle(o.not)}</p>` : ''}</li>`).join('')}</ul>`;
    case 'turkce': case 'sinavda': case 'ipucu': return `<div class="kutu"><span class="kutu-ad">${KUTU_ADI[x.tur]}</span><p>${isle(x.metin)}</p></div>`;
    case 'dikkat': return `<div class="kutu dikkat"><span class="kutu-ad">Sık hata</span><p class="yanlis-cumle"><span class="im">Yanlış</span><s lang="en">${isle(x.yanlis)}</s></p><p class="dogru-cumle"><span class="im">Doğru</span><span lang="en">${isle(x.dogru)}</span></p>${x.not ? `<p class="ek">${isle(x.not)}</p>` : ''}</div>`;
    case 'dene': return deneHtml(x, a);
    case 'dogruMu': return dogruMuHtml(x, a);
    case 'duy': return duyHtml(x);
    default: return '';
  }
}
function dersBloklari(b, d, baglam = 'kitap') {
  blokBaglami = baglam;
  const html = d.bloklar.map((x, j) => blokHtml(x, `${KB.onek}${b.id}/${d.id}/${j}`)).join('');
  blokBaglami = 'kitap';
  return html;
}

function kitapEkrani() {
  const sira = KB.siradaki();
  const sb = sira && KB.BOLUM.get(sira.bolum);
  const sd = sira && KB.dersBul(sira.bolum, sira.ders);
  const toplamDers = KB.YAZILI.reduce((t, b) => t + b.dersler.length, 0);
  const bolumSatiri = b => {
    if (!b.dersler?.length) return satir({ href: `#/${KB.kok}/${b.id}`, renk: 'bos', etiket: b.no, ad: b.title, alt: `Yazılacak · ${isle(b.kapsam || '')}`, sag: KB.ucret(b) });
    const p = KB.bolumIlerleme(b);
    const bitti = p.okunan === p.toplam;
    return satir({ href: `#/${KB.kok}/${b.id}`, renk: bitti ? 'bos' : 'kraft', etiket: b.no, ad: b.title,
      alt: `${p.toplam} ders · ${b.sure} dk · ${esc(b.seviye)}${p.okunan && !bitti ? ` · ${p.okunan} / ${p.toplam} okundu` : ''}${bitti ? ' · okundu' : ''}${p.test ? ` · test ${p.test.dogru}/${p.test.n}` : ''}`, sag: KB.ucret(b) });
  };
  const altYazi = KB === DERS_KB ? `Kural yolu · ${esc(KB.K.ad || 'Başlangıç Kitabı')} · ${esc(KB.K.seviye || 'A1')} · ${KB.BOLUMLER.length} bölüm` : `YDS ve YÖKDİL için dil bilgisi ve sınav becerileri · ${KB.BOLUMLER.length} bölüm`;
  const yazilacak = KB.BOLUMLER.length - KB.YAZILI.length;
  return ekran({
    kabuk: kabukUst({ renk: 'kraft', geri: '#/calis', baslik: 'Çalış', yapiskan: false, ek: `${idilResim('ogretmen', 'idil kitap-idil')}<h1 style="font:700 34px/41px system-ui;letter-spacing:-.02em;margin-top:4px">${KB.ad}</h1><p class="alt">${altYazi}</p>` }),
    govde: `${sd ? `${baslikSatiri(KB.okunanSayisi() ? 'Kaldığın yer' : 'Buradan başla')}${satir({ href: `#/${KB.kok}/${sb.id}/${sd.id}`, renk: 'kraft', etiket: sd.id.toUpperCase(), ad: sd.baslik, alt: `Bölüm ${sb.no} · ${esc(sb.title)}`, sag: `${sd.sure || 4} dk` })}` : ''}
      ${KB === DERS_KB ? '<p class="not">Her dersin sonunda “Bunu bir de duy” bağlantısı seni Yolculuk’ta o yapının geçtiği sayfaya götürür.</p>' : ''}
      ${KB.K.kisimlar.map(k => `${baslikSatiri(`${k.id}. ${k.ad}`)}${k.bolumler.map(id => bolumSatiri(KB.BOLUM.get(id))).join('')}`).join('')}
      ${paketNotu(KB.paket)}
      ${KB.K.yontem?.length ? `${baslikSatiri('Kitap hakkında')}${satir({ href: `#/${KB.kok}/yontem`, renk: 'bos', etiket: '?', ad: 'Bu kitap nasıl yazıldı?', alt: 'Dünyanın ve Türkiye\'nin en çok kullanılan dil bilgisi kitaplarından alınan yöntemler' })}` : ''}
      <p class="not">${yazilacak ? `${KB.YAZILI.length} bölüm yazıldı; öteki ${yazilacak} bölümün kapsamı belli, yazılacak. ` : ''}${KB.okunanSayisi()} / ${toplamDers} ders okundu. Taslak içerik: İngilizce öğretmeninin onayını bekliyor.</p>`,
    sekme: 'calis',
  });
}
function yontemEkrani() {
  return ekran({
    kabuk: kabukUst({ renk: 'kraft', geri: '#/kitap', baslik: 'Sınav Kitabı', yapiskan: false, ek: '<h1 style="font:700 28px/34px system-ui;letter-spacing:-.01em;margin-top:6px">Bu kitap nasıl yazıldı?</h1>' }),
    govde: `${(KITAP.yontem || []).map(y => `${baslikSatiri(y.baslik)}${y.metin ? `<p class="metin">${isle(y.metin)}</p>` : ''}${y.maddeler?.length ? `<ul class="maddeler">${y.maddeler.map(m => `<li>${isle(m)}</li>`).join('')}</ul>` : ''}`).join('')}`,
    sekme: 'calis',
  });
}
function bolumKabugu(b, { bilgi = '' } = {}) {
  return kabukUst({ renk: 'kraft', geri: `#/${KB.kok}`, baslik: KB.ad, bilgi, yapiskan: false,
    ek: `<div class="bolum-kapak"><span class="no"><small>Bölüm</small><b class="kalem">${b.no}</b></span><div><h1>${esc(b.title)}</h1><p class="en" lang="en">${esc(b.en || '')}</p></div></div>` });
}
function bolumEkrani(b) {
  if (!b.dersler?.length) {
    return ekran({
      kabuk: bolumKabugu(b, { bilgi: 'yazılacak' }),
      govde: `<p class="metin">Bu bölüm henüz yazılmadı. Kapsamı belli; yazılınca öteki bölümler gibi kısa derslere, tablolara, örneklere ve alıştırmalara bölünecek.</p>
        ${b.kapsam ? `${baslikSatiri('Kapsam')}<p class="metin">${isle(b.kapsam)}</p>` : ''}
        ${b.sinavda ? `<div class="kutu"><span class="kutu-ad">Sınavda</span><p>${isle(b.sinavda)}</p></div>` : ''}`,
      sekme: 'calis',
    });
  }
  const K = kitap();
  const p = KB.bolumIlerleme(b);
  const ilk = b.dersler.find(d => !KB.okunduMu(b.id, d.id));
  const yokla = b.yokla || [];
  const yoklandi = yokla.length && yokla.every((_, j) => K.dene[`${KB.onek}${b.id}/yokla/${j}`]);
  // Ders'in bölüm sonu testi kendi sorularıdır (b.test, Görev 5); Sınav Kitabı'nın testi soru havuzundan (bolumSorulari).
  const testN = KB === DERS_KB ? 0 : Math.min(10, bolumSorulari(b).length);
  const dTest = KB === DERS_KB ? bolumTesti(b) : [];
  const alisAlt = d => { const n = KB === DERS_KB ? dersAlistirmalari(d).length : 0; if (!n) return ''; const a = dAlistirmaIlerleme(b.id, d.id, n); return a.durum === 'baslanmadi' ? ` · ${n} alıştırma` : ` · alıştırma ${a.dogru} / ${n}`; };
  return ekran({
    kabuk: bolumKabugu(b, { bilgi: `${esc(b.seviye)} · ${b.sure} dk` }),
    govde: `${b.sinavda ? `<div class="kutu"><span class="kutu-ad">Sınavda</span><p>${isle(b.sinavda)}</p></div>` : ''}
      ${b.hedefler?.length ? `${baslikSatiri('Bu bölümde')}<ul class="maddeler">${b.hedefler.map(h => `<li>${isle(h)}</li>`).join('')}</ul>` : ''}
      ${yokla.length ? `${baslikSatiri('Başlamadan')}${satir({ href: `#/${KB.kok}/${b.id}/yokla`, renk: yoklandi ? 'bos' : 'kraft', etiket: yokla.length, ad: 'Kendini yokla', alt: yoklandi ? 'Yaptın · sonucu görmek için dokun' : 'Kısa ön test: hangi derslere ağırlık vereceğini gösterir' })}` : ''}
      ${baslikSatiri('Dersler', `<span>${p.okunan} / ${p.toplam} okundu</span>`)}
      ${b.dersler.map(d => { const ok = KB.okunduMu(b.id, d.id); return satir({ href: `#/${KB.kok}/${b.id}/${d.id}`, renk: ok ? 'bos' : 'kraft', etiket: d.id.toUpperCase(), ad: d.baslik, alt: `${d.sure || 4} dk${ok ? ' · okundu' : ''}${alisAlt(d)}`, sag: ok ? `<span class="tamam">${ikon.onay}</span>` : '' }); }).join('')}
      ${baslikSatiri('Bölüm sonu')}
      ${satir({ href: `#/${KB.kok}/${b.id}/ozet`, renk: 'kraft', etiket: '·', ad: 'Özet', alt: 'Bölümün kuralları tek sayfada' })}
      ${testN ? satir({ eylem: 'bolum-test', veri: { b: b.id }, renk: 'sari', etiket: testN, ad: 'Bölüm testi', alt: p.test ? `Son sonucun ${p.test.dogru} / ${p.test.n} · yeniden çöz` : 'ÖSYM biçiminde sorular; her sorudan sonra açıklama' }) : ''}
      ${dTest.length ? satir({ href: `#/${KB.kok}/${b.id}/test`, renk: 'sari', etiket: dTest.length, ad: 'Bölüm sonu testi', alt: p.test ? `Son sonucun ${p.test.dogru} / ${p.test.n} · yeniden çöz` : 'Bütün derslerden sorular; yanlışların hangi derse döneceğini gösterir' }) : ''}`,
    alt: `<div class="alt-eylem">${ilk ? `<a class="birincil" href="#/${KB.kok}/${b.id}/${ilk.id}">${p.okunan ? `Devam et: ${ilk.id.toUpperCase()}. ders` : 'Başla'}${ikon.ileri}</a>` : testN ? `<button class="birincil" data-eylem="bolum-test" data-b="${b.id}">Bölüm testini çöz${ikon.ileri}</button>` : dTest.length ? `<a class="birincil" href="#/${KB.kok}/${b.id}/test">Bölüm sonu testini çöz${ikon.ileri}</a>` : ''}</div>`,
    sekme: 'calis',
  });
}
function dersEkrani(b, d, { oturumda = false } = {}) {
  const i = b.dersler.indexOf(d);
  const sonraki = b.dersler[i + 1];
  // Kalam'ın 1 rakamı tek çizgidir ("11" çift çizgi gibi okunur): üst çubukta keçeli yazıyla yalnız dersin harfi, bölüm numarası sistem yazısıyla.
  const kabuk = kabukUst({ renk: 'kraft', ...(oturumda ? { geri: '#/oturum' } : { geri: `#/${KB.kok}/${b.id}` }), kac: d.id.toUpperCase(), baslik: `${b.no}. ${b.title}`, bilgi: `${d.sure || 4} dk`,
    ilerleme: oturumda ? null : (100 * (i + 1)) / b.dersler.length });
  const donus = oturum?.adimlar[oturum.i]?.tip === 'ders' ? 'Derse dön' : 'Soruya dön';
  const alt = oturumda
    ? `<div class="alt-eylem"><a class="birincil" href="#/oturum">${donus}</a></div>`
    : `<div class="alt-eylem"><button class="birincil" data-eylem="ders-bitti" data-k="${KB.id}" data-b="${b.id}" data-d="${d.id}">${sonraki ? `Sonraki ders: ${sonraki.id.toUpperCase()}` : 'Bölümün özeti'}${ikon.ileri}</button></div>`;
  const alistirma = KB === DERS_KB && !oturumda ? alistirmaBolumu(b, d) : '';
  return ekran({ kabuk, govde: `<h2 class="ders-baslik">${esc(d.baslik)}</h2>${dersBloklari(b, d, oturumda ? 'oturum' : 'kitap')}${alistirma}`, alt });
}
function yoklaEkrani(b) {
  const K = kitap();
  const cevaplar = b.yokla.map((_, j) => K.dene[`${KB.onek}${b.id}/yokla/${j}`]);
  const yapilan = cevaplar.filter(Boolean).length;
  let sonuc = '';
  if (yapilan === b.yokla.length) {
    const zayif = [...new Set(b.yokla.filter((_, j) => !cevaplar[j].d).map(x => x.ders))].map(id => KB.dersBul(b.id, id)).filter(Boolean);
    sonuc = `${baslikSatiri('Sonuç', `<span>${cevaplar.filter(c => c.d).length} / ${b.yokla.length} doğru</span>`)}
      ${zayif.length ? `<p class="metin">Şu derslere özellikle dikkat et:</p>${zayif.map(d => satir({ href: `#/${KB.kok}/${b.id}/${d.id}`, renk: 'kraft', etiket: d.id.toUpperCase(), ad: d.baslik, alt: `${d.sure || 4} dk` })).join('')}`
        : `<p class="metin">Hepsi doğru. Dersleri hızlıca gözden geçirip ${KB === DERS_KB ? 'sonraki bölüme' : 'bölüm testine'} geçebilirsin.</p>`}`;
  }
  return ekran({
    kabuk: kabukUst({ renk: 'kraft', geri: `#/${KB.kok}/${b.id}`, baslik: `Kendini yokla · Bölüm ${b.no}`, bilgi: `${yapilan} / ${b.yokla.length}`, ilerleme: (100 * yapilan) / b.yokla.length }),
    govde: `<p class="metin">Başlamadan önce ne bildiğine bak. Yanlış yaptığın sorular hangi derse ağırlık vereceğini gösterir.</p>${b.yokla.map((x, j) => deneHtml(x, `${KB.onek}${b.id}/yokla/${j}`)).join('')}${sonuc}`,
    alt: yapilan === b.yokla.length ? `<div class="alt-eylem"><a class="birincil" href="#/${KB.kok}/${b.id}">Bölüme dön${ikon.ileri}</a></div>` : '',
  });
}
// Ders'in bölüm sonu testi (#/ders/<bölüm>/test, Görev 5): yoklaEkrani kalıbı. Bütün sorular tek sayfada; hepsi cevaplanınca
// sonuç (dTestKaydet) ve yanlış cevapların dersleri bağlantıyla. "Yeniden çöz" cevapları siler, son sonuç kalır.
function testEkrani(b) {
  const T = bolumTesti(b);
  const C = dTestCevaplari(b.id);
  const yapilan = T.filter((_, j) => C[j]).length;
  const bitti = yapilan === T.length;
  const once = dTestSonuc(b.id);
  let sonuc = '';
  if (bitti) {
    const zayif = yanlisDersler(T, C).map(id => KB.dersBul(b.id, id)).filter(Boolean);
    sonuc = `${baslikSatiri('Sonuç', `<span>${T.filter((_, j) => C[j].d).length} / ${T.length} doğru</span>`)}
      ${zayif.length ? `<p class="metin">Yanlışların şu derslerden; dönüp bir daha bak:</p>${zayif.map(d => satir({ href: `#/${KB.kok}/${b.id}/${d.id}`, renk: 'kraft', etiket: d.id.toUpperCase(), ad: d.baslik, alt: `${d.sure || 4} dk${dersAlistirmalari(d).length ? ` · ${dersAlistirmalari(d).length} alıştırma` : ''}` })).join('')}`
        : '<p class="metin">Hepsi doğru. Sonraki bölüme geçebilirsin.</p>'}`;
  }
  const sonrakiBolum = KB.YAZILI[KB.YAZILI.indexOf(b) + 1];
  return ekran({
    kabuk: kabukUst({ renk: 'kraft', geri: `#/${KB.kok}/${b.id}`, baslik: `Bölüm sonu testi · Bölüm ${b.no}`, bilgi: `${yapilan} / ${T.length}`, ilerleme: (100 * yapilan) / T.length }),
    govde: `<p class="metin">Bölümün bütün derslerinden ${T.length} soru. Yanlış yaptığın sorular hangi derse döneceğini gösterir.${once && !bitti ? ` Son sonucun ${once.dogru} / ${once.n}.` : ''}</p>${T.map((x, j) => alisHtml(x, `at:${b.id}/${j}`, C[j] || null, j + 1)).join('')}${sonuc}`,
    alt: bitti ? `<div class="alt-eylem"><button class="ikinci" data-eylem="test-yeniden" data-b="${esc(b.id)}">Yeniden çöz</button><a class="birincil" href="#/${KB.kok}${sonrakiBolum ? `/${sonrakiBolum.id}` : ''}">${sonrakiBolum ? 'Sonraki bölüm' : 'Bölümlere dön'}${ikon.ileri}</a></div>` : '',
  });
}
function ozetEkrani(b) {
  const haplar = (b.hap || []).map(id => HAPK.get(id)).filter(Boolean);
  const testN = KB === DERS_KB ? 0 : Math.min(10, bolumSorulari(b).length);
  const dTestN = KB === DERS_KB ? bolumTesti(b).length : 0;
  const sonrakiBolum = KB.YAZILI[KB.YAZILI.indexOf(b) + 1];
  return ekran({
    kabuk: kabukUst({ renk: 'kraft', geri: `#/${KB.kok}/${b.id}`, baslik: `${b.no}. ${b.title}`, yapiskan: false, ek: '<h1 style="font:700 28px/34px system-ui;letter-spacing:-.01em;margin-top:6px">Bölümün özeti</h1>' }),
    govde: `${b.ozet?.maddeler?.length ? `<ul class="maddeler">${b.ozet.maddeler.map(m => `<li>${isle(m)}</li>`).join('')}</ul>` : ''}
      ${b.ozet?.tablo ? blokHtml({ tur: 'tablo', ...b.ozet.tablo }) : ''}
      ${haplar.length ? `${baslikSatiri('Hap kartında da var')}${haplar.map(k => satir({ href: `#/calis/hap/${k.id}`, renk: 'sari', etiket: '·', ad: k.title, alt: esc(k.hap) })).join('')}` : ''}`,
    alt: testN ? `<div class="alt-eylem"><button class="birincil" data-eylem="bolum-test" data-b="${b.id}">Bölüm testini çöz${ikon.ileri}</button></div>`
      : dTestN ? `<div class="alt-eylem"><a class="birincil" href="#/${KB.kok}/${b.id}/test">Bölüm sonu testini çöz${ikon.ileri}</a></div>`
      : KB === DERS_KB ? `<div class="alt-eylem"><a class="birincil" href="#/${KB.kok}${sonrakiBolum ? `/${sonrakiBolum.id}` : ''}">${sonrakiBolum ? `Sonraki bölüm: ${esc(sonrakiBolum.title)}` : 'Bölümlere dön'}${ikon.ileri}</a></div>` : '',
    sekme: 'calis',
  });
}

// ==================== KELİMELER ====================
let kelimeSuzgec = 'tumu';
let kelimeAra = '';
let kelimeSinir = 40;
let notFormu = false;
const KART_SIRASI = new Map(KARTLAR.map((k, i) => [k.key, i]));
function kutuEtiketi(key) {
  const s = kartDurumu(key);
  return !s || !s.gorulme ? '·' : s.kutu;
}
function kelimeListesi() {
  const t = bugun();
  const q = kelimeAra.trim().toLocaleLowerCase('tr');
  let l = tumKartlar();
  if (kelimeSuzgec === 'bugun') l = l.filter(k => { const s = kartDurumu(k.key); return s && s.sonraki <= t; });
  else if (kelimeSuzgec === 'yeni') l = l.filter(k => !kartDurumu(k.key)?.gorulme);
  else if (kelimeSuzgec === 'ogrenilen') l = l.filter(k => (kartDurumu(k.key)?.kutu || 0) >= 3);
  if (q) l = l.filter(k => k.code.toLowerCase().includes(q) || k.title.toLocaleLowerCase('tr').includes(q));
  if (!l.length) return `<p class="not">${q ? `"${esc(kelimeAra)}" ile eşleşen kart yok.` : 'Bu süzgeçte kart yok.'}</p>`;
  // Paket işareti (bilgi): içerik sırasıyla ilk 300 kart ücretsiz; kendi notların işaretsiz.
  return l.slice(0, kelimeSinir).map(k => satir({ href: `#/kelimeler/kart/${encodeURIComponent(k.key)}`, renk: k.not ? 'sari' : 'pembe', etiket: kutuEtiketi(k.key), ad: k.code, alt: `${esc(k.title)}${k.unit ? ` · ${esc(k.unit.title)}` : ' · Notlarım'}`, sag: !k.not && KART_SIRASI.get(k.key) >= UCRETSIZ_KART ? ucret('paket') : '' })).join('')
    + (l.length > kelimeSinir ? `<div class="dugme-alani"><button class="ikinci" data-eylem="daha-fazla">${l.length - kelimeSinir} kart daha göster</button></div>` : '');
}
function kelimelerEkrani() {
  const D = durum();
  const vade = vadesiGelen().length;
  const toplam = tumKartlar().length;
  const { yeni, say } = kutuSayilari();
  const ek = `<div class="puan"><span class="yeni kalem">${vade}</span><p><b>${vade ? 'kart bugün tekrar bekliyor' : 'Bugünlük tekrar bitti'}</b>Toplam ${toplam} · öğrenilen ${ogrenilenSayisi()}</p></div>`;
  const dugme = vade ? `<button class="birincil" data-eylem="kelime-calis">Tekrara başla · ${Math.min(vade, 20)} kart${ikon.ileri}</button>`
    : `<button class="birincil" data-eylem="kelime-yeni">10 yeni kart öğren${ikon.ileri}</button>`;
  const notlar = D.notlar.map(n => satir({ href: `#/kelimeler/kart/${encodeURIComponent(`not/${n.id}`)}`, renk: 'sari', etiket: kutuEtiketi(`not/${n.id}`), ad: n.en, alt: `${esc(n.tr)} · ${n.isaretli ? 'kitapta işaretledin' : 'elle ekledin'}` })).join('');
  const form = notFormu ? `<form id="not-formu" onsubmit="return false" style="padding-bottom:6px">
      <label class="alan"><span>İngilizce sözcük ya da öbek</span><input name="en" required maxlength="40" lang="en" autocomplete="off"></label>
      <label class="alan"><span>Türkçe anlamı</span><input name="tr" required maxlength="80" autocomplete="off"></label>
      <label class="alan"><span>Örnek cümle (isteğe bağlı)</span><input name="ornek" maxlength="160" lang="en" autocomplete="off"></label>
      <div class="dugme-alani" style="display:flex;gap:10px"><button type="button" class="ikinci" data-eylem="not-iptal">Vazgeç</button><button type="button" class="birincil" data-eylem="not-kaydet">Karta dönüştür</button></div></form>` : '';
  return ekran({
    kabuk: kabukSekme({ renk: 'pembe', h1: 'Kelimeler', ek, karakter: vade ? 'not-aliyor' : 'ifade-cok-mutlu' }),
    govde: `<div class="dugme-alani">${dugme}</div>
      ${baslikSatiri('Kutular', '<span>bildikçe üst kutuya</span>')}
      <div class="kutular" role="list">${[['Yeni', yeni], ...say.slice(1).map((n, i) => [`${i + 1}. kutu`, n])].map(([a, n]) => `<div role="listitem"><b class="kalem">${n}</b><span>${a}</span></div>`).join('')}</div>
      <p class="not">Bildiğin kart ${ARALIK.slice(1).join(', ')} gün arayla yeniden gelir; ${3}. kutuya çıkan kart öğrenilmiş sayılır.</p>
      <p class="not">${ucret('ucretsiz')} İlk ${UCRETSIZ_KART} kart ve bütün tekrarlar ücretsiz; sonraki kartlar “Paket” işaretli.</p>
      ${baslikSatiri('Notlarım', notFormu ? '' : '<button data-eylem="not-form">Sözcük ekle</button>')}
      <p class="not" style="padding-top:0">Kitapta fosforla işaretlediğin sözcük buraya düşer ve karta döner. Tanıtımda elle ekleyebilirsin.</p>
      ${form}${notlar || `<div class="idil-kart">${idilResim('bos')}<p class="not">Henüz not yok. Kitapta işaretlediğin ya da elle eklediğin sözcükler burada toplanır.</p></div>`}
      ${baslikSatiri('Bütün kartlar', `<span>${toplam}</span>`)}
      <label class="ara">${ikon.ara}<span class="gizli">Kartlarda ara</span><input type="search" data-eylem="ara" placeholder="Sözcük ya da anlam ara" value="${esc(kelimeAra)}" autocomplete="off"></label>
      <div class="cipler" role="group" aria-label="Süzgeç">${[['tumu', 'Tümü'], ['bugun', 'Bugün tekrar'], ['yeni', 'Yeni'], ['ogrenilen', 'Öğrenilen']].map(([k, a]) => `<button class="cip" data-eylem="suzgec" data-deger="${k}" aria-pressed="${kelimeSuzgec === k}">${a}</button>`).join('')}</div>
      <div id="kelime-listesi">${kelimeListesi()}</div>`,
    sekme: 'kelimeler',
  });
}
function kartAyrintisi(k, s) {
  const ornek = k.example ? esc(k.example).replace(kokDeseni(k.code), '<span class="isaret">$1</span>') : '';
  const kutu = s?.gorulme ? `${s.kutu}. kutu · sıradaki tekrar ${s.sonraki <= bugun() ? 'bugün' : esc(tarihYaz(s.sonraki, false))}` : 'Henüz çalışmadın';
  return `<p class="anlam">${esc(k.title)}</p>
    ${GORSEL[k.code] ? `<figure class="kart-gorsel-kap">${sahneSvg(GORSEL[k.code])}</figure>` : ''}
    ${KOK_SOZCUK[k.code] ? kokEtiketi(k.code) : ''}
    ${ornek ? `<p class="ornek-cumle" lang="en">${ornek} <button class="simge-dugme" style="display:inline-grid;vertical-align:middle;width:36px;height:36px" data-eylem="dinle" data-metin="${esc(k.example)}" aria-label="Örnek cümleyi dinle">${ikon.ses}</button></p>` : ''}
    ${k.exampleTr ? `<p class="ceviri">${esc(k.exampleTr)}</p>` : ''}
    <dl class="tanim">
      ${k.synonyms?.length ? `<div><dt>Eş anlamlı</dt><dd lang="en">${k.synonyms.map(esc).join(', ')}</dd></div>` : ''}
      <div><dt>Sınav notu</dt><dd>${esc(k.text)}</dd></div>
      ${k.family?.length ? `<div><dt>Sözcük ailesi</dt><dd lang="en">${k.family.map(esc).join(', ')}</dd></div>` : ''}
      <div><dt>Kaynak</dt><dd>${k.unit ? (k.unit.deste ? esc(k.unit.title) : `${esc(k.unit.title)} ünitesi`) : k.not?.isaretli ? 'Notlarım · kitapta işaretledin' : 'Notlarım · elle ekledin'}</dd></div>
      ${SES[k.code] ? `<div><dt>Ses</dt><dd>${esc(SES_SANATCI)}</dd></div>` : ''}
      <div><dt>Kutu</dt><dd>${kutu}</dd></div>
    </dl>`;
}
// Kök etiketi: kartta kök ve kısa açıklama; dokununca kök sayfası (aynı kökten gelen bütün kartlar).
function kokEtiketi(code) {
  const id = KOK_SOZCUK[code], kk = KOKLER[id];
  return `<a class="kok-etiket" href="#/kelimeler/kok/${encodeURIComponent(id)}"><span class="kok-ad" lang="la">${esc(kk.bicim)}</span><span class="kok-anlam">${esc(kk.dil)}: ${esc(kk.anlam)}</span><span class="kok-ac">${esc(kk.sozcukler[code])}</span><span class="kok-git">${Object.keys(kk.sozcukler).length} sözcüklük aile${ikon.ileri}</span></a>`;
}
function kokEkrani(id) {
  const kk = KOKLER[id];
  const satirlar = Object.entries(kk.sozcukler).map(([s, ac]) => {
    const kart = KARTLAR.find(x => x.code === s);
    return kart ? satir({ href: `#/kelimeler/kart/${encodeURIComponent(kart.key)}`, renk: 'pembe', etiket: kutuEtiketi(kart.key), ad: s, alt: `${esc(kart.title)} · ${esc(ac)}` }) : '';
  }).join('');
  return ekran({
    kabuk: kabukUst({ renk: 'pembe', geri: '#/kelimeler', baslik: 'Sözcük kökü', yapiskan: false, ek: `<h1 style="font:700 34px/41px system-ui;letter-spacing:-.02em;margin-top:4px" lang="la">${esc(kk.bicim)}</h1><p class="alt">${esc(kk.dil)} ${esc(kk.kaynak)}: <b>${esc(kk.anlam)}</b></p>` }),
    govde: `<p class="metin">${esc(kk.aciklama)}</p>${baslikSatiri('Aynı kökten', `<span>${Object.keys(kk.sozcukler).length}</span>`)}${satirlar}
      ${kk.dikkat ? `<div class="kutu dikkat-kok"><span class="kutu-ad">Benzer ama akraba değil</span><p>${esc(kk.dikkat)}</p></div>` : ''}
      <p class="not">Kökler en az iki köken kaynağı ve birbirinden bağımsız yapay zekâ denetimleriyle doğrulandı; emin olunmayan sözcüğe kök yazılmadı. Taslak: İngilizce öğretmeninin onayını bekliyor.</p>`,
    sekme: 'kelimeler',
  });
}
function kartBasligi(k) {
  return `<div class="sozcuk"><h1 class="${k.code.length > 9 ? 'uzun' : ''}" lang="en">${esc(k.code)}</h1><button class="simge-dugme" data-eylem="dinle" data-metin="${esc(k.code)}" aria-label="Dinle">${ikon.ses}</button></div>
    <p class="bilgi-satiri">${k.ipa ? `<b lang="en">${esc(k.ipa)}</b> · ` : ''}${esc(k.pos)}${k.cefr ? ` · ${esc(k.cefr)}` : ''}</p>`;
}
function kartEkrani(key) {
  const k = kartBul(key);
  if (!k) return kelimelerEkrani();
  return ekran({
    kabuk: kabukUst({ renk: 'pembe', geri: '#/kelimeler', baslik: 'Kelime kartı', bilgi: esc(k.unit ? k.unit.title : 'Notlarım'), yapiskan: false, ek: kartBasligi(k) }),
    govde: kartAyrintisi(k, kartDurumu(key)),
    alt: `<div class="alt-eylem">${k.not ? `<button class="ikinci" data-eylem="not-sil" data-id="${esc(k.not.id)}">Notu sil</button>` : ''}<button class="birincil" data-eylem="kart-calis" data-key="${esc(key)}">Bu kartı çalış</button></div>`,
    sekme: 'kelimeler',
  });
}

// ==================== OTURUM (soru, kart, günün turu, deneme) ====================
let oturum = null;
const soruAdimi = s => ({ tip: 'soru', s, sira: s.tur === 'bozan' || TURLER[s.tur]?.karistir === false ? [0, 1, 2, 3, 4] : karisik(5), secilen: null });
const kartAdimi = key => ({ tip: 'kart', key, acik: false, sonuc: null });
const dersAdimi = ({ bolum, ders }) => ({ tip: 'ders', bolum, ders, okundu: false });
const yapilanSay = o => o.adimlar.filter(x => (x.tip === 'kart' ? x.sonuc : x.tip === 'ders' ? x.okundu : x.secilen !== null)).length;
function oturumBaslat({ ad, renk = 'sari', adimlar, mod = 'pratik', sure = 0, geri = '#/bugun', tur = 'alistirma', bolum = null, denemeId = null }) {
  if (!adimlar.length) { bildir('Burada çalışılacak bir şey kalmadı.'); return; }
  oturum = { ad, renk, mod, sure, geri, tur, bolum, denemeId, adimlar, i: 0, bas: Date.now(), bitis: null, bitti: false, xp: 0, biten: [], tahminOnce: tahminiPuan(), ligOnce: ligSiram() };
  if (location.hash === '#/oturum') ciz(); else location.hash = '#/oturum';
}
function oturumXp(r) {
  oturum.xp += r.xp;
  oturum.biten.push(...r.biten);
  gorevHaberi(r.biten);
}
const adimRengi = p => (oturum.renk !== 'sari' ? oturum.renk : p.tip === 'kart' ? 'pembe' : turRengi(p.s.tur));
const ALAN_KISA = { genel: 'Genel', saglik: 'Sağlık', fen: 'Fen', sosyal: 'Sosyal' };
// Üst çubukta: kartta oturumun adı, soruda taslaktaki gibi "tür · alan" (ör. "Okuma · Sağlık").
const adimAdi = p => (p.tip === 'kart' ? (oturum.tur === 'gunluk' ? 'Kelime tekrarı' : oturum.ad)
  : p.not ? `${p.not} · ${KISA_AD[p.s.tur] || TURLER[p.s.tur].ad}` : `${KISA_AD[p.s.tur] || TURLER[p.s.tur].ad} · ${ALAN_KISA[p.s.unit.course] || ''}`);
function kalanSure(o) {
  const kalan = Math.max(0, o.sure - Math.floor((Date.now() - o.bas) / 1000));
  return `${Math.floor(kalan / 3600)}:${iki(Math.floor(kalan / 60) % 60)}:${iki(kalan % 60)}`;
}
function oturumEkrani() {
  if (!oturum) return null;
  if (oturum.bitti) return sonucEkrani();
  const p = oturum.adimlar[oturum.i];
  return p.tip === 'kart' ? kartAdimEkrani(p) : p.tip === 'ders' ? dersAdimEkrani(p) : soruAdimEkrani(p);
}
// Günün turundaki ders: okunur, içindeki alıştırmalar çözülür; "Okudum" deyince ders okunmuş sayılır (+3 XP).
function dersAdimEkrani(p) {
  const o = oturum;
  const b = BOLUM.get(p.bolum);
  const d = dersBul(p.bolum, p.ders);
  const n = o.adimlar.length;
  const kabuk = kabukUst({ renk: 'kraft', kapat: true, kac: `${o.i + 1} / ${n}`, baslik: `Bugünün dersi · ${dersKodu(b, d)}`, ilerleme: (100 * yapilanSay(o)) / n });
  return ekran({ kabuk, govde: `<h2 class="ders-baslik">${esc(d.baslik)}</h2><p class="ders-yeri">Bölüm ${b.no} · ${esc(b.title)}</p>${dersBloklari(b, d, 'oturum')}`,
    alt: `<div class="alt-eylem"><button class="birincil" data-eylem="ders-tamam">Okudum, devam${ikon.ileri}</button></div>` });
}

// Soru gövdesi (oturum ve düello ortak): yönerge, parça, kök, şıklar.
function soruGovdesi(s, p, { geriBildirim, disabled = geriBildirim }) {
  const t = TURLER[s.tur];
  let govde = `<p class="yonerge">${esc(t.yonerge)}</p>`;
  if (s.it.type === 'pratik') govde += `<div class="parca"><span class="parca-baslik">${esc(s.it.title)}</span>${bosHtml(s.it.text, s.tur === 'bosluklu' ? s.k + 1 : null)}</div>`;
  if (s.tur === 'bozan') {
    govde += `<ol class="parca cumleler">${s.it.sentences.map((x, k) => `<li><b>(${ROMA[k]})</b> ${esc(x)}</li>`).join('')}</ol><p class="kok duz">Parçanın akışını bozan cümle hangisi?</p>`;
  } else if (s.tur === 'diyalog') {
    govde += `<div class="parca diyalog">${s.q.split('\n').map(l => { const j = l.indexOf(': '); return `<p><b>${esc(l.slice(0, j))}:</b> ${bosHtml(l.slice(j + 2))}</p>`; }).join('')}</div><p class="kok duz">Konuşmadaki boşluğa hangisi gelir?</p>`;
  } else if (s.tur === 'paragraf-tamamlama') {
    govde += `<p class="parca">${bosHtml(s.q)}</p><p class="kok duz">Paragraftaki boşluğa hangisi gelir?</p>`;
  } else {
    govde += `<p class="kok">${bosHtml(s.q)}</p>`;
  }
  const siklar = p.sira.map((oi, k) => {
    let cls = 'sik';
    let durumu = '';
    if (geriBildirim) {
      if (oi === s.answer) { cls += ' dogru'; durumu = 'Doğru'; } else if (oi === p.secilen) { cls += ' yanlis'; durumu = 'Senin cevabın'; }
    } else if (oi === p.secilen) { cls += ' secili'; durumu = 'İşaretledin'; }
    const metin = s.tur === 'bozan' ? `${ROMA[oi]}. cümle` : esc(s.options[oi]);
    return `<li><button class="${cls}" data-eylem="sec" data-sik="${oi}"${disabled ? ' disabled' : ''}><span class="h">${HARF[k]}</span><span>${metin}</span>${durumu ? `<span class="durumu">${durumu}</span>` : ''}</button></li>`;
  }).join('');
  return `${govde}<ol class="siklar">${siklar}</ol>`;
}
const harfi = (p, oi) => (p.s.tur === 'bozan' ? ROMA[oi] : HARF[p.sira.indexOf(oi)]);
const hapOneri = id => {
  const k = HAPK.get(id);
  return `<a class="hap-oneri" href="#/oturum/hap/${id}"><span class="ad"><span class="isaret">Şuna dikkat:</span> ${esc(k.title)}</span><span class="hap">${esc(k.hap)}</span><span class="git">Hap kartını aç${ikon.ileri}</span></a>`;
};

function soruAdimEkrani(p) {
  const o = oturum;
  const s = p.s;
  const n = o.adimlar.length;
  const son = o.i === n - 1;
  const cevaplandi = p.secilen !== null;
  const geriBildirim = o.mod === 'pratik' && cevaplandi;
  const yapilan = yapilanSay(o);
  const sinav = o.mod === 'sinav';
  const kabuk = kabukUst({
    renk: adimRengi(p), kapat: true, kac: `${o.i + 1} / ${n}`, baslik: adimAdi(p),
    bilgi: sinav ? `${ikon.saat}<span id="sayac">${kalanSure(o)}</span>` : '', ilerleme: (100 * yapilan) / n,
  });
  let alt = '';
  if (sinav) {
    alt = `<div class="alt-eylem"><button class="ikinci" data-eylem="onceki"${o.i === 0 ? ' disabled' : ''}>Önceki</button><button class="birincil" data-eylem="${son ? 'bitir' : 'sonraki'}">${son ? 'Sınavı bitir' : 'Sonraki'}${ikon.ileri}</button></div>`;
  } else if (geriBildirim) {
    const dogru = p.secilen === s.answer;
    const oneri = dogru ? [] : hapIcin(s).slice(0, 1);
    // Yanlışta önce konunun anlatıldığı ders, sonra tek sayfalık hap kartı.
    const ders = dogru ? null : dersIcin(s);
    const dersOneri = ders ? `<a class="hap-oneri" href="#/oturum/kitap/${ders.b.id}/${ders.d.id}"><span class="ad"><span class="isaret">Ders kitabında:</span> ${dersKodu(ders.b, ders.d)}. ${esc(ders.d.baslik)}</span><span class="hap">Bölüm ${ders.b.no} · ${esc(ders.b.title)}</span><span class="git">Dersi aç${ikon.ileri}</span></a>` : '';
    alt = `<section class="sayfa" aria-live="polite"><div class="gb-ust">${idilResim(dogru ? 'dogru' : 'hay-aksi')}<h2><span>${dogru ? '' : '<span class="gb-baslik yanlis">Hay aksi.</span>'}<span class="gb-alt">${dogru ? `Doğru. Neden ${harfi(p, s.answer)}?` : `Doğru cevap ${harfi(p, s.answer)}`}</span></span><span class="kalem">+${dogru ? XP.dogru : XP.yanlis} XP</span></h2></div>
      <p>${esc(s.explain)}</p>${dersOneri}${oneri.map(hapOneri).join('')}
      <div class="eylem"><button class="ikinci kare" data-eylem="bildir" aria-label="Soruyu bildir">${ikon.bayrak}</button><button class="birincil" data-eylem="devam">${son ? 'Sonucu gör' : 'Devam'}${ikon.ileri}</button></div></section>`;
  } else {
    alt = `<div class="alt-eylem"><button class="ikinci" data-eylem="atla">${son ? 'Bitir' : 'Atla'}</button></div>`;
  }
  return ekran({ kabuk, govde: soruGovdesi(s, p, { geriBildirim, disabled: geriBildirim }), alt });
}

function kartAdimEkrani(p) {
  const o = oturum;
  const k = kartBul(p.key);
  const n = o.adimlar.length;
  const yapilan = yapilanSay(o);
  const kabuk = kabukUst({ renk: 'pembe', kapat: true, kac: `${o.i + 1} / ${n}`, baslik: adimAdi(p), bilgi: p.tekrar ? 'yeniden' : '', ilerleme: (100 * yapilan) / n, ek: kartBasligi(k) });
  if (!p.acik) {
    return ekran({ kabuk, govde: `<div class="idil-kart">${idilResim('dinliyor')}<p class="metin" style="color:var(--ikincil)">Anlamını hatırlamaya çalış, sonra kartı çevir. Sözcüğü dinlemek için hoparlöre dokun.</p></div>`,
      alt: '<div class="alt-eylem"><button class="ikinci" data-eylem="kart-cevir">Anlamı göster</button></div>' });
  }
  const gunN = sonrakiAralik(p.key);
  const sonraYazi = gunN === 1 ? 'yarın' : `${gunN} gün sonra`;
  return ekran({ kabuk, govde: kartAyrintisi(k, kartDurumu(p.key)),
    alt: `<div class="cevap3"><button data-eylem="kart" data-sonuc="bilmedim">Bilmedim<small>bugün yine</small></button><button data-eylem="kart" data-sonuc="zor">Zor geldi<small>yarın</small></button><button class="bildim" data-eylem="kart" data-sonuc="bildim">Bildim<small>${sonraYazi}</small></button></div>` });
}

function oturumBitir() {
  const o = oturum;
  o.bitti = true;
  o.bitis = Date.now();
  const D = durum();
  const sorular = o.adimlar.filter(p => p.tip === 'soru');
  if (o.mod === 'sinav') {
    let dogru = 0;
    for (const p of sorular) if (p.secilen !== null) { const d = p.secilen === p.s.answer; dogru += d; cevapKaydet(p.s, d, { xp: false }); }
    o.puan = dogru * 1.25;
    D.denemeler.unshift({ tarih: bugun(), puan: o.puan, dogru, n: sorular.length, ...(o.denemeId ? { id: o.denemeId } : {}) });
    oturumXp({ xp: dogru * XP.deneme, biten: xpEkle(dogru * XP.deneme) });
  } else if (sorular.length >= 5 && sorular.every(p => p.secilen === p.s.answer)) {
    oturumXp({ xp: XP.kusursuz, biten: xpEkle(XP.kusursuz) });
    bildir('Kusursuz tur', XP.kusursuz);
  }
  if (o.bolum && sorular.some(p => p.secilen !== null)) bolumTestiKaydet(o.bolum, sorular.filter(p => p.secilen === p.s.answer).length, sorular.length);
  if (o.tur === 'gunluk' && D.plan) D.plan.bitti = true;
  if (o.tur === 'seviye') {
    const dogruSay = SEVIYE_TESTI.basamaklar.map((_, k) => sorular.filter(p => p.basamak === k && p.secilen === p.s.answer).length);
    D.seviye = { duzey: seviyeBul(dogruSay), dogruSay, tarih: bugun() };
  }
  kaydet();
  ciz();
}

// Seviye testi teklifi (girişten sonra ya da Çalış'tan): 18 soru, atlanabilir. İçerik: ../icerik/seviye-testi.js.
function seviyeEkrani() {
  const D = durum();
  const once = D.seviye ? `<p class="metin">Son sonucun: <b>${esc(SEVIYE_TESTI.sonuclar[D.seviye.duzey].ad)}</b> (${esc(tarihYaz(D.seviye.tarih))}).</p>` : '';
  return ekran({
    kabuk: kabukUst({ renk: 'sari', geri: '#/bugun', baslik: 'Seviye testi', yapiskan: false, ek: '<h1 style="font:700 28px/34px system-ui;margin-top:6px">Seviyeni ölçelim mi?</h1><p class="alt">18 soru · yaklaşık 12 dakika · atlayabilirsin</p>' }),
    govde: `<div class="idil-kart">${idilResim('dusunuyor')}<p class="metin">Kolaydan zora üç basamak: B1, B2, C1. Sonuca göre ilk haftanın planı ve tahmini başlangıç puanın çıkar.</p></div>${once}`,
    alt: '<div class="alt-eylem"><button class="ikinci" data-eylem="seviye-atla">Şimdi değil</button><button class="birincil" data-eylem="seviye-basla">Başla</button></div>',
  });
}

function sonucEkrani() {
  const o = oturum;
  const D = durum();
  const sorular = o.adimlar.filter(p => p.tip === 'soru');
  const kartlar = o.adimlar.filter(p => p.tip === 'kart' && p.sonuc);
  const dogru = sorular.filter(p => p.secilen === p.s.answer);
  const yanlis = sorular.filter(p => p.secilen !== null && p.secilen !== p.s.answer);
  const bos = sorular.filter(p => p.secilen === null);
  const dk = Math.max(1, Math.round((o.bitis - o.bas) / 60000));
  const simdi = tahminiPuan();
  let ek;
  if (o.tur === 'seviye' && D.seviye) {
    const x = SEVIYE_TESTI.sonuclar[D.seviye.duzey];
    ek = `<p class="dev kalem">${esc(x.ad)}</p><p class="alt"><b>Başlangıç seviyen</b> · ${D.seviye.dogruSay.map((d, k) => `${SEVIYE_TESTI.basamaklar[k].ad} ${d}/6`).join(' · ')}</p>`;
  } else if (o.mod === 'sinav') {
    ek = `<p class="dev kalem">${sayi(o.puan, 2)}<small> / 100</small></p><p class="alt"><b>${dogru.length} doğru</b> · ${yanlis.length} yanlış · ${bos.length} boş · yanlış doğruyu götürmez</p>`;
  } else if (o.tur === 'gunluk') {
    ek = `<div class="puan">${o.tahminOnce !== simdi ? cizik(o.tahminOnce, `tur-${o.bas}`) : ''}<span class="yeni kalem">${simdi}</span><p><b>Tahmini puan</b>${simdi - o.tahminOnce ? `bu turda ${simdi > o.tahminOnce ? '+' : ''}${simdi - o.tahminOnce}` : 'değişmedi'}</p></div>`;
  } else if (sorular.length) {
    ek = `<p class="dev kalem">${dogru.length}<small> / ${sorular.length}</small></p>`;
  } else {
    ek = `<p class="dev kalem">${kartlar.length}<small> kart</small></p>`;
  }
  const oran = sorular.length ? dogru.length / sorular.length : 1;
  const kusursuz = sorular.length >= 5 && dogru.length === sorular.length;
  const poz = !sorular.length ? 'ifade-cok-mutlu' : kusursuz ? 'kusursuz' : oran >= 0.8 ? 'kutlama'
    : o.tur === 'gunluk' && oran >= 0.5 ? 'seri' : oran >= 0.5 ? 'dogru' : 'hay-aksi';
  ek = `<div class="sonuc-ust"><div>${ek}</div>${idilResim(poz)}</div>`;
  const baslik = o.mod === 'sinav' ? 'Deneme bitti' : o.tur === 'gunluk' ? 'Tur bitti' : sorular.length ? (yanlis.length + bos.length ? 'Bitti' : 'Hepsi doğru') : 'Tekrar bitti';
  ek += `<div class="sonuc-baslik"><span>${baslik}</span><span class="kalem">+${o.xp} XP</span></div>`;
  const okunanDersler = o.adimlar.filter(p => p.tip === 'ders' && p.okundu);
  const dersOzeti = okunanDersler.length ? `<p class="metin">Ders: ${okunanDersler.map(p => { const b = BOLUM.get(p.bolum); const d = dersBul(p.bolum, p.ders); return `${dersKodu(b, d)}. ${esc(d.baslik)}`; }).join(', ')}.</p>` : '';
  const kartOzeti = kartlar.length ? `<p class="metin">${kartlar.length} kart: ${['bildim', 'zor', 'bilmedim'].map(x => `${kartlar.filter(p => p.sonuc === x).length} ${{ bildim: 'bildim', zor: 'zor geldi', bilmedim: 'bilmedim' }[x]}`).join(' · ')}.</p>` : '';
  const seviyeOzeti = o.tur === 'seviye' && D.seviye ? `<p class="metin">Tahmini başlangıç puanı ${SEVIYE_TESTI.sonuclar[D.seviye.duzey].aralik.join('–')} arası; bu yalnız bir yön, çalıştıkça güncellenir. ${esc(SEVIYE_TESTI.sonuclar[D.seviye.duzey].plan)}</p>` : '';
  const soruOzeti = sorular.length && o.mod !== 'sinav' ? `<p class="metin">${sorular.length} soru: ${dogru.length} doğru, ${yanlis.length} yanlış${bos.length ? `, ${bos.length} atlandı` : ''}.</p>` : '';
  const gorevler = o.biten.length ? `${baslikSatiri('Görevler')}${o.biten.map(m => `<div class="gorev bitti"><span class="onay">${ikon.onay}</span><span>${esc(m.ad)}</span><span class="durumu">+${XP.gorev} XP</span></div>`).join('')}` : '';
  const hapSay = new Map();
  for (const p of [...yanlis, ...bos]) { const id = hapIcin(p.s)[0]; if (id) hapSay.set(id, (hapSay.get(id) || 0) + 1); }
  // Yanlış ve boş soruların konusunu anlatan dersler (bölüm testinden sonra "geçilemeyen" ders tekrar edilir).
  const dersSay = new Map();
  for (const p of [...yanlis, ...bos]) { const x = dersIcin(p.s); if (x) { const k = `${x.b.id}/${x.d.id}`; dersSay.set(k, { ...x, n: (dersSay.get(k)?.n || 0) + 1 }); } }
  const dersTekrar = dersSay.size ? `${baslikSatiri('Dersi tekrar oku')}${[...dersSay.values()].sort((a, b) => b.n - a.n).slice(0, 3).map(x => satir({ href: `#/kitap/${x.b.id}/${x.d.id}`, renk: 'kraft', etiket: x.d.id.toUpperCase(), ad: x.d.baslik, alt: `Bölüm ${x.b.no} · ${x.n} soru bu dersin konusundan` })).join('')}` : '';
  const tekrar = hapSay.size ? `${baslikSatiri('Şunları tekrar et')}${[...hapSay].sort((a, b) => b[1] - a[1]).slice(0, 4).map(([id, c]) => satir({ href: `#/calis/hap/${id}`, renk: 'sari', etiket: c, ad: HAPK.get(id).title, alt: esc(HAPK.get(id).hap) })).join('')}` : '';
  let turTablosu = '';
  if (o.mod === 'sinav') {
    const st = {};
    for (const p of sorular) { const x = (st[p.s.tur] ||= { n: 0, d: 0 }); x.n++; x.d += p.secilen === p.s.answer; }
    turTablosu = `${baslikSatiri('Türe göre')}<table><thead><tr><th>Tür</th><th class="sag">Doğru</th></tr></thead><tbody>${Object.entries(st).map(([t, x]) => `<tr><td>${esc(KISA_AD[t] || TURLER[t].ad)}</td><td class="sag">${x.d} / ${x.n}</td></tr>`).join('')}</tbody></table>`;
  }
  return ekran({
    kabuk: kabukUst({ renk: o.renk === 'sari' && o.tur !== 'gunluk' ? 'sari' : o.renk, kapat: true, baslik: o.ad, bilgi: `${dk} dk`, yapiskan: false, ek }),
    govde: `${dk >= 25 ? `<div class="idil-kart">${idilResim('mola')}<p class="metin">${dk} dakika çalıştın. Kısa bir çay molası iyi gelir; sonra kaldığın yerden devam.</p></div>` : ''}${seviyeOzeti}${dersOzeti}${soruOzeti}${kartOzeti}${gorevler}${turTablosu}${dersTekrar}${tekrar}`,
    alt: `<div class="alt-eylem">${yanlis.length + bos.length ? '<button class="ikinci" data-eylem="yanlislari-coz">Yanlışları çöz</button>' : ''}<button class="birincil" data-eylem="kapat">${o.tur === 'gunluk' ? "Bugün'e dön" : 'Bitti'}</button></div>`,
  });
}

// ==================== DÜELLO ====================
let duello = null;
const DUELLO_SURE = 20;
function duelloBaslat(rakipAd) {
  const D = durum();
  const r = RAKIPLER.find(x => x.ad === rakipAd) || RAKIPLER[0];
  const konu = D.ayar.konu;
  const aday = SORULAR.filter(s => TURLER[s.tur]?.duello && (konu === 'karisik' || s.tur === konu));
  const liste = rastgele(aday, 5);
  duello = {
    rakip: r, konu, i: 0, bitti: false, sonuc: null, ligOnce: ligSiram(), soruBas: Date.now(),
    adimlar: liste.map(s => {
      const botDogru = Math.random() < r.isabet;
      return { s, sira: s.tur === 'bozan' ? [0, 1, 2, 3, 4] : karisik(5), secilen: undefined, sure: null, bot: { dogru: botDogru, sure: Math.round(botDogru ? 5 + Math.random() * 11 : 8 + Math.random() * 11) } };
    }),
  };
  if (location.hash === '#/duello') ciz(); else location.hash = '#/duello';
}
const konuAdi = k => (k === 'karisik' ? 'Karışık' : KISA_AD[k] || TURLER[k].ad);
function duelloSkoru(d, sinir = d.adimlar.length) {
  const l = d.adimlar.slice(0, sinir).filter(p => p.secilen !== undefined);
  return { ben: l.filter(p => p.secilen === p.s.answer).length, o: l.filter(p => p.bot.dogru).length };
}
function duelloEkrani() {
  if (!duello) return null;
  if (duello.bitti) return duelloSonucu();
  const d = duello;
  const p = d.adimlar[d.i];
  const cevaplandi = p.secilen !== undefined;
  const skor = duelloSkoru(d);
  const gecen = (Date.now() - d.soruBas) / 1000;
  const kalan = Math.max(0, Math.ceil(DUELLO_SURE - gecen));
  const ek = `<div class="skor ufak"><span class="kisi">Sen</span><span class="sayi kalem" aria-label="Skor ${skor.ben} – ${skor.o}">${skor.ben} – ${skor.o}</span><span class="kisi">${esc(d.rakip.ad)}</span></div>
    <p class="rakip-durumu" id="rakip-durumu">${cevaplandi ? '' : gecen >= p.bot.sure ? `${esc(d.rakip.ad)} cevapladı` : `${esc(d.rakip.ad)} düşünüyor…`}</p>`;
  const kabuk = kabukUst({ renk: 'turuncu', kapat: true, kac: `${d.i + 1} / ${d.adimlar.length}`, baslik: `Düello · ${konuAdi(d.konu)}`,
    bilgi: cevaplandi ? '' : `${ikon.saat}<span id="sayac">0:${iki(kalan)}</span>`, ilerleme: (100 * d.adimlar.filter(x => x.secilen !== undefined).length) / d.adimlar.length, ek });
  let alt = '';
  if (cevaplandi) {
    const dogru = p.secilen === p.s.answer;
    const son = d.i === d.adimlar.length - 1;
    const bot = p.bot.dogru ? `<span class="d">${ikon.onay}${p.bot.sure} sn</span>` : `<span class="y">${ikon.kapat}yanlış</span>`;
    alt = `<section class="sayfa" aria-live="polite"><h2><span>${p.secilen === null ? 'Süre doldu' : dogru ? 'Doğru' : 'Yanlış'}${p.sure !== null ? ` · ${p.sure} sn` : ''}</span><span>Doğru cevap ${harfi(p, p.s.answer)}</span></h2>
      <p class="rakip-satiri">${esc(d.rakip.ad)}: ${bot}</p>
      <details><summary style="min-height:36px;display:flex;align-items:center;font:600 15px system-ui;cursor:pointer">Neden?</summary><p>${esc(p.s.explain)}</p></details>
      <div class="eylem"><button class="birincil" data-eylem="duello-devam">${son ? 'Sonucu gör' : 'Sonraki soru'}${ikon.ileri}</button></div></section>`;
  }
  return ekran({ kabuk, govde: soruGovdesi(p.s, { ...p, secilen: p.secilen ?? null }, { geriBildirim: cevaplandi, disabled: cevaplandi }), alt });
}
function duelloCevap(oi) {
  const d = duello;
  const p = d.adimlar[d.i];
  if (!d || d.bitti || p.secilen !== undefined) return;
  p.secilen = oi;
  p.sure = oi === null ? null : Math.max(1, Math.round((Date.now() - d.soruBas) / 1000));
  ciz({ kaydir: false });
  app.querySelector('.sik.dogru')?.scrollIntoView({ block: 'nearest' });
}
function duelloBitir() {
  const d = duello;
  d.bitti = true;
  const { ben, o } = duelloSkoru(d);
  d.sonuc = ben > o ? 'kazandi' : ben < o ? 'kaybetti' : 'berabere';
  for (const p of d.adimlar) cevapKaydet(p.s, p.secilen === p.s.answer, { xp: false });
  const r = duelloKaydet({ rakip: d.rakip.ad, ben, o, sonuc: d.sonuc });
  d.xp = r.xp;
  d.ligSonra = ligSiram();
  gorevHaberi(r.biten);
  ciz();
}
function duelloSonucu() {
  const d = duello;
  const { ben, o } = duelloSkoru(d);
  const benSure = d.adimlar.reduce((a, p) => a + (p.sure || DUELLO_SURE), 0);
  const oSure = d.adimlar.reduce((a, p) => a + p.bot.sure, 0);
  const baslik = { kazandi: 'Kazandın', kaybetti: 'Kaybettin', berabere: 'Berabere' }[d.sonuc];
  const hucre = (dogru, sure) => (dogru ? `<span class="d">${ikon.onay}${sure} sn</span>` : `<span class="y">${ikon.kapat}${sure === null ? 'süre' : 'yanlış'}</span>`);
  const kalan = ustLigeKalan();
  const ek = `<div class="skor"><span class="kisi">Sen</span><span class="sayi kalem">${ben} – ${o}</span><span class="kisi">${esc(d.rakip.ad)}</span></div>
    <div class="sonuc-ust"><div style="flex:1"><div class="sonuc-baslik"><span>${baslik}</span><span class="kalem">+${d.xp} XP</span></div>
    <p class="alt">Toplam süren ${benSure} sn, ${esc(d.rakip.ad)}'in ${oSure} sn.</p></div>${idilResim({ kazandi: 'duello-zafer', kaybetti: 'duello-yenilgi', berabere: 'ifade-kararli' }[d.sonuc])}</div>`;
  return ekran({
    kabuk: kabukUst({ renk: 'turuncu', kapat: true, baslik: 'Düello', bilgi: `${konuAdi(d.konu)} · ${d.adimlar.length} soru`, yapiskan: false, ek }),
    govde: `<table><thead><tr><th>Soru türü</th><th class="sag">Sen</th><th class="sag">${esc(d.rakip.ad)}</th></tr></thead><tbody>
      ${d.adimlar.map(p => `<tr><td>${esc(KISA_AD[p.s.tur] || TURLER[p.s.tur].ad)}</td><td class="sag">${hucre(p.secilen === p.s.answer, p.secilen === null ? null : p.sure)}</td><td class="sag">${hucre(p.bot.dogru, p.bot.sure)}</td></tr>`).join('')}
      </tbody></table>
      <div class="lig-satiri"><span class="yer kalem">${d.ligOnce !== d.ligSonra ? `${cizik(`${d.ligOnce}.`, `lig-${d.ligOnce}-${d.ligSonra}-${d.xp}`).replace('class="eski kalem cizik', 'class="cizik')}` : ''}${d.ligSonra}.</span>
        <p><b>Haftalık lig sıran</b>${kalan ? `Üst lige çıkmak için ${kalan} XP daha.` : 'Üst lige çıkma bölgesindesin.'}</p></div>`,
    alt: `<div class="alt-eylem">${d.adimlar.some(p => p.secilen !== p.s.answer) ? '<button class="ikinci" data-eylem="duello-yanlis">Yanlışı çalış</button>' : ''}<button class="birincil" data-eylem="rovans">Rövanş iste</button></div>`,
  });
}

// ==================== ARENA ====================
function arenaEkrani() {
  const D = durum();
  const davet = davetGuncelle();
  const sira = ligSiram();
  const sabah = sabahSirasi();
  const kalan = ustLigeKalan();
  const tablo = ligTablosu();
  const ek = `<div class="lig-satiri" style="margin:14px 0 0;border:0;padding:12px 0 0;border-top:2px solid var(--murekkep)"><span class="yer kalem" style="font-size:64px;line-height:.85">${sabah !== sira ? cizik(`${sabah}.`, `arena-${sabah}-${sira}`).replace('class="eski kalem cizik', 'class="cizik').replace('class="cizik', 'class="cizik" style="font-size:36px;color:var(--turuncu-ikincil)') : ''}${sira}.</span>
    <p style="color:var(--turuncu-ikincil)"><b>${LIG_ADI} · bu hafta ${buHaftaXp()} XP</b>${kalan ? `Üst lige çıkmak için ${kalan} XP daha` : 'Üst lige çıkma bölgesindesin'}</p></div>`;
  const satirlar = tablo.map((x, i) => {
    let s = `<tr class="${x.ben ? 'ben' : ''}"><td class="sira">${x.sira}</td><td><span>${esc(x.ad)}${x.ben ? ' (sen)' : ''}</span></td><td class="sag">${x.xp} XP</td></tr>`;
    if (i === 2) s += '<tr class="bolge"><td colspan="3">Buraya kadar olanlar üst lige çıkar</td></tr>';
    if (i === tablo.length - 3) s += '<tr class="bolge"><td colspan="3">Bundan sonrakiler alt lige düşer</td></tr>';
    return s;
  }).join('');
  const konular = ['karisik', ...DUELLO_TURLERI];
  return ekran({
    kabuk: kabukSekme({ renk: 'turuncu', h1: 'Arena', ek, karakter: 'savasci' }),
    govde: `${davet ? `<div class="davet">${idilResim('meydan-okuma', 'idil davet-idil')}<span class="govde"><b>${esc(davet.rakip)} seni düelloya çağırdı</b>5 soru · ${24 - new Date().getHours()} saat kaldı</span><button class="ikinci" data-eylem="davet-kabul">Kabul et</button></div>` : ''}
      ${baslikSatiri('Düello', '<span>5 soru · soru başına 20 sn</span>')}
      <div class="cipler" role="group" aria-label="Düello konusu">${konular.map(k => `<button class="cip" data-eylem="konu" data-konu="${k}" aria-pressed="${D.ayar.konu === k}">${esc(konuAdi(k))}</button>`).join('')}</div>
      ${satir({ eylem: 'duello', veri: { rakip: 'Elif' }, renk: 'turuncu', etiket: ikon.arena, ad: "Antrenman · Elif'e karşı", alt: 'Bot · çevrim dışı da olur · kazanana 40 XP' })}
      ${satir({ eylem: 'rakip-bul', renk: 'turuncu', etiket: ikon.ara, ad: 'Rakip bul', alt: 'Ligden rastgele biri · tanıtımda rakipleri bot oynar' })}
      <p class="not">${ucret('ucretsiz')} Günlük düello ücretsiz.</p>
      ${baslikSatiri('Haftalık lig', `<span>${ligSonunaGun()} gün kaldı</span>`)}
      <table><thead><tr><th>Sıra</th><th>Ad</th><th class="sag">Bu hafta</th></tr></thead><tbody>${satirlar}</tbody></table>
      <p class="not">Lig her pazartesi yenilenir. Öteki oyuncular tanıtım için kurgusaldır.</p>
      ${D.duellolar.length ? `${baslikSatiri('Son düellolar')}${D.duellolar.slice(0, 5).map(x => satir({ eylem: 'duello', veri: { rakip: x.rakip }, renk: x.sonuc === 'kazandi' ? 'turuncu' : 'bos', etiket: `${x.ben}–${x.o}`, ad: `${x.rakip} · ${{ kazandi: 'kazandın', kaybetti: 'kaybettin', berabere: 'berabere' }[x.sonuc]}`, alt: `${esc(gecenZaman(x.tarih))} · dokun, rövanş iste`, sag: `+${x.xp} XP` })).join('')}` : ''}`,
    sekme: 'arena',
  });
}

// ==================== ARKADAŞLAR ====================
function arkadaslarEkrani() {
  const D = durum();
  const tablo = ligTablosu();
  const xpOf = ad => tablo.find(x => x.ad === ad)?.xp ?? 0;
  const arkadaslar = RAKIPLER.slice(0, ARKADAS_SAYISI);
  const etkinlik = [
    ...D.duellolar.slice(0, 3).map(x => ({ metin: x.sonuc === 'kazandi' ? `${x.rakip}'i düelloda ${x.ben}–${x.o} yendin` : x.sonuc === 'kaybetti' ? `${x.rakip} seni düelloda ${x.o}–${x.ben} yendi` : `${x.rakip} ile ${x.ben}–${x.o} berabere kaldınız`, zaman: gecenZaman(x.tarih) })),
    { metin: 'Zeynep 31 günlük seriye ulaştı', zaman: 'bugün' },
    { metin: 'Elif 20 kart tekrarladı', zaman: 'bugün' },
    { metin: 'Ece bir deneme sınavı bitirdi: 66,25 puan', zaman: 'dün' },
  ];
  return ekran({
    kabuk: kabukSekme({ renk: 'turuncu', h1: 'Arkadaşlar', karakter: 'davet', alt: 'Örnek arkadaşlar: tanıtımda gerçek hesap yok' }),
    govde: `<div class="dugme-alani"><button class="ikinci" data-eylem="davet-et">${ikon.davet}Arkadaşını davet et</button></div>
      ${baslikSatiri('Arkadaşların', `<span>${arkadaslar.length}</span>`)}
      ${arkadaslar.map(r => `<div class="satir"><span class="harf" aria-hidden="true">${esc(r.ad[0])}</span><span class="govde"><span class="ad">${esc(r.ad)}</span><span class="alt">${esc(r.sinav)} · ${r.seri} günlük seri · bu hafta ${xpOf(r.ad)} XP</span></span><button class="ikinci kucuk" data-eylem="duello" data-rakip="${esc(r.ad)}">Düello</button></div>`).join('')}
      ${baslikSatiri('Son etkinlik')}
      ${etkinlik.map(e => `<div class="satir" style="min-height:52px"><span class="govde"><span class="ad" style="font-weight:400">${esc(e.metin)}</span></span><span class="sag">${esc(e.zaman)}</span></div>`).join('')}`,
    sekme: 'arkadaslar',
  });
}

// ==================== GENEL İNGİLİZCE ====================
// İki kanat (IKI_KANAT.md §3): Yolculuk duyum kanadını, Ders anlam kanadını işler; ikisi tek hafızada (kanatOku/kanatYaz).
const DUYUMLU = new Set(['duyum', 'tam']);
const TUM_BIRIMLER = [...new Set(DURAKLAR.flatMap(durakBirimleri))];
function kanatOzeti() {
  const h = kanatOku();
  const say = { tam: 0, duyum: 0, kural: 0, yeni: 0 };
  for (const b of TUM_BIRIMLER) say[kanatDurumu(h, b)]++;
  return say;
}
const kanatKutulari = s => `<div class="kutular dort" role="list">${[['İki kanat ✓✓', s.tam], ['Yalnız duyum', s.duyum], ['Yalnız kural', s.kural], ['Yeni', s.yeni]].map(([a, n]) => `<div role="listitem"><b class="kalem">${n}</b><span>${a}</span></div>`).join('')}</div>`;
const durakUcreti = d => (d.no <= UCRETSIZ_DURAK ? ucret('ucretsiz') : ucret('paket'));
function durakIlerleme(d, h = kanatOku()) {
  const birimler = durakBirimleri(d);
  return { duyulan: birimler.filter(b => DUYUMLU.has(kanatDurumu(h, b))).length, toplam: birimler.length };
}
// Yolculuk'ta sıradaki yer: oynatıcıda en son açılan ekran (D.yolculuk); kural icerik/seviye/ilerleme.js yolculukSirasi'nda
// (Görev 3'ün kuralı, Görev 7'de Buradasın kartıyla ortak olsun diye taşındı). Döner: { d, konum, bitti } (konum: akis.js).
// Adres (yolculukAdresi) ve konum yazısı (konumYazisi) da oradan: sahne #/yolculuk/<id>/<no>; pratik …/pratik/<k>; hikâye
// …/hikaye/<h>/<sayfa> ya da …/hikaye/<h>/soru/<j>.
const ILK = { parca: 'sahne', no: 0 };
const yolculukSirasi = () => yolculukSirasiSaf(durum()?.yolculuk, kanatOku(), DURAKLAR);
const buyukHarf = m => m.charAt(0).toLocaleUpperCase('tr') + m.slice(1);
// #/yolculuk durak satırının altındaki üç parça (Sahne, Pratik, Hikâye): durum ve ekran sayısı. Pratik ya da hikâye yoksa o satır yok.
// "yapıldı" = en az bir kez doğru cevaplanmış ekran; hızlı turda anahtar oyun başına tek olduğu için ekran düzeyinde kesin değildir,
// bu yüzden "doğru" değil "ekran yapıldı" yazılır.
const PARCA_DURUM = { tamam: 'Tamam', yarim: 'Yarım', baslanmadi: 'Başlanmadı' };
function durakParcalari(d, h) {
  const p = durakIlerleme(d, h), pd = parcaDurumu(d, h);
  const sahneDurum = p.toplam && p.duyulan === p.toplam ? 'tamam' : p.duyulan > 0 ? 'yarim' : 'baslanmadi';
  return [
    { ad: 'Sahne', harf: 'S', durum: sahneDurum, href: `#/yolculuk/${d.id}/0`, alt: `${pd.sahne.ekran} ekran · ${p.duyulan} / ${p.toplam} birim duyuldu` },
    pd.pratik && { ad: 'Pratik', harf: 'P', durum: pd.pratik.durum, href: `#/yolculuk/${d.id}/pratik/0`, alt: `${pd.pratik.yapilan} / ${pd.pratik.ekran} ekran yapıldı` },
    pd.hikaye && { ad: 'Hikâye', harf: 'H', durum: pd.hikaye.durum, href: `#/yolculuk/${d.id}/hikaye/0/0`, alt: `${d.hikayeler.length} hikâye · ${pd.hikaye.ekran} ekran · ${pd.hikaye.yapilan} / ${pd.hikaye.etkilesim} soru yapıldı` },
  ].filter(Boolean);
}
const parcaSatiri = x => satir({ href: x.href, renk: x.durum === 'yarim' ? 'pembe' : x.durum === 'tamam' ? 'parca-bitti' : 'bos', etiket: x.durum === 'tamam' ? ikon.onay : x.harf, ad: x.ad, alt: x.alt,
  sag: `<span class="parca-durum ${x.durum}">${PARCA_DURUM[x.durum]}</span>` });
const yoklamaBekliyor = () => durum().genel?.baslangic === 'okul' && !durum().genel?.yoklandi;

// ---------- İlerleme, kazanım ve eksik haritası (Görev 7, tasarım ICERIK_GENISLEME §4.5 ve §4.6) ----------
// Bütün sayılar icerik/seviye/ilerleme.js'ten (saf); tek kaynak kanat hafızası (kanatOku) ile D.yolculuk ve D.ders kayıtlarıdır.
// Ayrı sayaç tutulmaz. Eski ya da boş kayıtta işlevler 0 ve "başlanmadı" döndürür.
// Seviye sonu sınavı (A1 sonu sınavı) sonraki dalgada gelecek; o gelene kadar sonuç yok, kapı sınav şartında kapalı kalır.
const seviyeSinavi = () => null;
// Tanıtımda kapı "tanıtımda aç" ile geçilir (tasarım §4.5): D.genel.kapiTanitim yalnız görünümü açar, ilerleme yazmaz.
const kapiTanitimda = () => !!durum()?.genel?.kapiTanitim;
function seviyeAcikMi(s, h) {
  const kilit = seviyeKilidi(h, s, seviyeSinavi());
  return { kilit, acik: !kilit || kilit.acik, tanitim: !!kilit && !kilit.acik && kapiTanitimda() };
}
// Uygulamanın durak ve bölüm listesi (?ornek=1 ile örnek durak ve bölüm eklenmiş olabilir); kart ve satırlar aynı listeyle hesaplansın.
const KAYNAK = { duraklar: DURAKLAR, bolumler: B_BOLUMLER };
const buradaNe = () => buradasin({ h: kanatOku(), yolculuk: durum()?.yolculuk, ders: durum()?.ders }, KAYNAK);
const kalinCubuk = (yuzde, etiket) => `<div class="kalin-cubuk" role="progressbar" aria-label="${esc(etiket)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${yuzde}"><b style="width:${yuzde}%"></b></div>`;
// Buradasın kartı (Bugün'ün başında tek kart; Yolum'un başında da): seviye ve yüzdesi, şu anki yer (durak ya da ders, parça),
// tek "sıradaki" düğmesi. Sıradaki adım Yolculuk satırıyla aynı kuraldan gelir (yolculukSirasi).
function buradasinKarti(bs, { yolumda = false } = {}) {
  const basla = !bs.yer.baslandi;
  const eksik = yolumda ? 0 : eksikler(kanatOku(), bs.seviye.id, KAYNAK).length;
  return `<section class="buradasin" aria-labelledby="bs-baslik">
      <div class="bs-ust"><h2 id="bs-baslik" class="bs-etiket">Buradasın</h2><span class="bs-seviye">${esc(bs.seviye.id)} · ${esc(bs.seviye.ad)}</span></div>
      <div class="bs-yuzde"><b class="kalem">%${bs.yuzde}</b><span>${bs.tam} / ${bs.toplam} ${esc(bs.seviye.id)} birimi iki kanatla tam</span></div>
      ${kalinCubuk(bs.yuzde, `${bs.seviye.id} seviyesi ilerlemesi`)}
      <p class="bs-yer"><b>${esc(bs.yer.metin)}</b><span>${esc(bs.yer.ayrinti)}</span></p>
      <a class="birincil bs-sonraki" href="${bs.sonraki.href}">${basla ? 'Başla' : 'Sırada'}: ${esc(bs.sonraki.ad)}${ikon.ileri}</a>
      ${yolumda ? '' : `<a class="bs-yolum" href="#/yolum">${eksik ? `Yolum · ${eksik} yarım kazanım` : 'Yolum · kazanımlar ve eksikler'}${ikon.ileri}</a>`}
    </section>`;
}

// Yolum ekranı (#/yolum, #/yolum/<seviye>): A1 ve A2 çubuğu, kilitli seviyenin şartları, Eksiklerin, durak ve bölüm listesi,
// kazanımlar. Kilitli seviyeye doğrudan bağlantı ilk seviyeyi açar (kırılmaz); yazılmamış öğe "Yazılacak" etiketiyle tıklanamaz.
let yolumDonus = '#/bugun';
const KAZANIM_DURUM = { kazanildi: 'Kazanıldı', yarim: 'Yarım', yok: 'Yok' };
const durumYazisi = d => `<span class="parca-durum ${d}">${PARCA_DURUM[d]}</span>`;
const yazilacakSatiri = ({ etiket, ad, alt = '' }) => `<div class="satir yazilacak" aria-disabled="true"><span class="etiket bos kalem">${etiket}</span><span class="govde"><span class="ad">${esc(ad)}</span>${alt ? `<span class="alt">${alt}</span>` : ''}</span><span class="sag"><span class="yazilacak-etiket">Yazılacak</span></span></div>`;
const yuzdeYaz = x => `%${Math.round(x * 100)}`;
function kapiSartlari(k) {
  const sart = (tamam, metin, ek = '') => `<li class="${tamam ? 'sart-tamam' : 'sart-eksik'}"><span class="sart-isaret" aria-hidden="true">${tamam ? '✓' : '✗'}</span><span>${metin}${ek}<span class="gizli">${tamam ? ' · sağlandı' : ' · henüz sağlanmadı'}</span></span></li>`;
  const sinavMetni = `${esc(k.seviye)} sonu sınavı: ${k.sinav.son === null ? 'henüz yok' : yuzdeYaz(k.sinav.son)} (≥ ${yuzdeYaz(k.sinav.gerekli)} gerekli)`;
  const birimMetni = `${esc(k.seviye)} birimleri: ${k.birim.tam} / ${k.birim.toplam} tam (≥ ${yuzdeYaz(k.birim.gerekli)} gerekli)`;
  const oran = Math.min(100, Math.round(k.birim.oran * 100));
  return `<ul class="kapi-sartlari">${sart(k.sinav.tamam, sinavMetni)}${sart(k.birim.tamam, birimMetni, `<span class="sart-cubuk" aria-hidden="true"><b style="width:${oran}%"></b><i style="left:${Math.round(k.birim.gerekli * 100)}%"></i></span>`)}</ul>`;
}
function seviyeKarti(s, h, secili) {
  const y = seviyeYuzdesi(h, s), a = seviyeAcikMi(s, h);
  const yazili = s.duraklar.filter(d => durakDurumu(h, d, KAYNAK).yazili).length;
  const ust = `<span class="sk-ust"><span class="sk-ad">${esc(s.id)} · ${esc(s.ad)}</span>${a.acik ? `<b class="sk-yuzde kalem">%${y.yuzde}</b>` : `<span class="kilit-rozet">${a.tanitim ? 'Tanıtımda açık' : 'Kilitli'}</span>`}</span>`;
  const alt = `<span class="sk-alt">${y.tam} / ${y.toplam} birim iki kanatla tam · ${yazili} / ${s.duraklar.length} durak yazıldı</span>`;
  if (a.acik) return `<a class="seviye-kart${secili ? ' secili' : ''}" href="#/yolum/${s.id}"${secili ? ' aria-current="page"' : ''}>${ust}${kalinCubuk(y.yuzde, `${s.id} seviyesi ilerlemesi`)}${alt}</a>`;
  // Dürüst satır (düzeltme 1): önceki seviyenin ne kadarı henüz yazılmadı; %80 şartı neden şimdilik karşılanamıyor.
  const pay = yaziliPay(a.kilit.seviye, KAYNAK);
  const payNotu = pay.yazilmamisYuzde > 0
    ? `<p class="sk-pay">${esc(a.kilit.seviye)}’in henüz yazılmamış kısmı: %${pay.yazilmamisYuzde} (yazılı duraklarda ${pay.yazili} / ${pay.toplam} birim)${pay.yazili * 100 < pay.toplam * Math.round(a.kilit.birim.gerekli * 100) ? `. ${yuzdeYaz(a.kilit.birim.gerekli)} şartı, kalan duraklar yazılınca karşılanabilir.` : '.'}</p>` : '';
  const sartlar = `<p class="sk-kilit">${esc(s.id)} şu iki şart birlikte sağlanınca açılır:</p>${kapiSartlari(a.kilit)}${payNotu}`;
  if (a.tanitim) {
    return `<div class="seviye-kart tanitim${secili ? ' secili' : ''}">${ust}${alt}${sartlar}
      <p class="sk-not">Tanıtımda içine bakabilmen için açıldı; şartlar henüz sağlanmadı, ilerlemen değişmedi.</p>
      <div class="sk-dugmeler">${secili ? '' : `<a class="ikinci kucuk" href="#/yolum/${s.id}">${esc(s.id)}'yi gör</a>`}<button class="ikinci kucuk" data-eylem="kapi-tanitim" data-ac="0">Kilidi geri koy</button></div></div>`;
  }
  return `<div class="seviye-kart kilitli">${ust}${alt}${sartlar}
    <p class="sk-not">Bu bir bilgi kilidi, ücret kilidi değil: ${esc(a.kilit.seviye)}’in temeli olmadan ${esc(s.id)} zor gelir. ${esc(a.kilit.seviye)} sonu sınavı sonraki sürümde gelecek.</p>
    <div class="sk-dugmeler"><button class="ikinci kucuk" data-eylem="kapi-tanitim" data-ac="1">Tanıtımda aç</button></div></div>`;
}
function eksiklerHtml(s, h) {
  const E = eksikler(h, s, KAYNAK);
  if (!E.length) {
    const basladi = kazanimListesi(h, s).some(k => k.durum !== 'yok');
    return `<p class="not">${basladi ? 'Yarım kalan kazanım yok: başladığın her kazanımın bütün birimleri iki kanatla tam.' : 'Henüz eksik yok. Bir kazanıma başlayıp yarım bıraktığında burada görünür; en zayıfı en üstte.'}</p>`;
  }
  // Satırın altı: önce gideceği yer (görünür kalsın), sonra kaç birimin zayıf olduğu ve adları.
  return `<div class="eksik-listesi">${E.map(e => {
    const adlar = e.zayif.slice(0, 4).map(birimAdi).join(', ') + (e.zayif.length > 4 ? ' …' : '');
    const alt = `<b class="eksik-hedef">→ ${esc(e.git.ad)}</b>${e.zayif.length} / ${e.toplam} birim zayıf: <span lang="en">${esc(adlar)}</span>`;
    return e.git.href ? satir({ href: e.git.href, renk: 'pembe', etiket: e.zayif.length, ad: e.metin, alt, sag: '<b>Çalış</b>' }) : yazilacakSatiri({ etiket: e.zayif.length, ad: e.metin, alt });
  }).join('')}</div>`;
}
function seviyeAyrintisi(s, h) {
  const duraklar = s.duraklar.map(sd => {
    const st = durakDurumu(h, sd, KAYNAK), d = durakBul(sd.id);
    if (!st.yazili || !d) return yazilacakSatiri({ etiket: sd.no, ad: sd.ad, alt: `${st.toplam} birim · ${esc(sd.konu)}` });
    return satir({ href: `#/yolculuk/${d.id}/0`, renk: st.durum === 'tamam' ? 'bos' : 'pembe', etiket: sd.no, ad: sd.ad, alt: `${st.duyulan} / ${st.toplam} duyuldu · ${st.tam} iki kanatla tam`, sag: durumYazisi(st.durum) })
      + `<div class="durak-parcalar" role="group" aria-label="${esc(sd.ad)}: parçalar">${durakParcalari(d, h).map(parcaSatiri).join('')}</div>`;
  }).join('');
  // Bölümün durumu yazılı derslerinin öğrettiği birimlere göre (ders birim öğretmiyorsa biten derslere göre); müfredatta olup henüz
  // hiçbir dersin öğretmediği birimler ikinci satırda "sonraki derslerde" diye yazılır (ilerleme.js bolumDurumu, düzeltme 1).
  const ders = durum()?.ders;
  const bolumler = s.bolumler.map(sb => {
    const st = bolumDurumu(h, sb, ders, KAYNAK), b = B_BOLUM.get(sb.id);
    if (!st.yazili || !b) return yazilacakSatiri({ etiket: sb.no, ad: sb.ad, alt: `${st.toplam} birim · ${esc(sb.konu)}` });
    const p = dBolumIlerleme(b);
    const ilk = st.olcu === 'birim' ? `${st.anlam} / ${st.toplam} birimin kuralı · ${p.okunan} / ${p.toplam} ders okundu` : `${st.yapilan} / ${st.toplam} ders bitti`;
    const alt = `${ilk}${st.bekleyen ? `<span class="bekleyen">${st.bekleyen} birim sonraki derslerde</span>` : ''}`;
    return satir({ href: `#/ders/${b.id}`, renk: st.durum === 'tamam' ? 'bos' : 'kraft', etiket: sb.no, ad: sb.ad, alt, sag: durumYazisi(st.durum) });
  }).join('');
  const K = kazanimListesi(h, s);
  const kazanimlar = K.map(k => {
    const renk = k.durum === 'kazanildi' ? 'parca-bitti' : k.durum === 'yarim' ? 'pembe' : 'bos';
    const isaret = k.durum === 'kazanildi' ? ikon.onay : k.durum === 'yarim' ? '½' : '·';
    const sinif = k.durum === 'kazanildi' ? 'tamam' : k.durum === 'yarim' ? 'yarim' : 'baslanmadi';
    return `<div class="satir kazanim"><span class="etiket ${renk} kalem">${isaret}</span><span class="govde"><span class="ad">${esc(k.metin)}</span><span class="alt">${k.tam} / ${k.toplam} birim iki kanatla tam</span></span><span class="sag"><span class="parca-durum ${sinif}">${KAZANIM_DURUM[k.durum]}</span></span></div>`;
  }).join('');
  const eksikSay = eksikler(h, s, KAYNAK).length;
  return `${baslikSatiri(`Eksiklerin · ${s.id}`, `<span>${eksikSay ? `${eksikSay} yarım kazanım` : 'yok'}</span>`)}${eksiklerHtml(s, h)}
    ${baslikSatiri('Duraklar · Yolculuk', `<span>${s.duraklar.filter(d => durakDurumu(h, d, KAYNAK).yazili).length} / ${s.duraklar.length} yazıldı</span>`)}${duraklar}
    ${baslikSatiri('Bölümler · Ders', `<span>${s.bolumler.filter(b => bolumDurumu(h, b, ders, KAYNAK).yazili).length} / ${s.bolumler.length} yazıldı</span>`)}<div class="bolum-listesi">${bolumler}</div>
    ${baslikSatiri('Kazanımlar', `<span>${K.filter(k => k.durum === 'kazanildi').length} / ${K.length} kazanıldı</span>`)}${kazanimlar}`;
}
function yolumEkrani(sid) {
  const h = kanatOku(), bs = buradaNe();
  const istenen = seviyeTanimi(sid) || seviyeTanimi(bs.seviye.id) || SEVIYELER[0];
  const a = seviyeAcikMi(istenen, h);
  const secili = a.acik || a.tanitim ? istenen : SEVIYELER[0];
  const profilden = yolumDonus === '#/profil';
  return ekran({
    kabuk: kabukUst({ renk: 'sari', geri: yolumDonus, baslik: profilden ? 'Profil' : 'Bugün', yapiskan: false,
      ek: '<h1 style="font:700 34px/41px system-ui;letter-spacing:-.02em;margin-top:4px">Yolum</h1><p class="alt">Neredesin, neyi bitirdin, neyi eksik</p>' }),
    govde: `${buradasinKarti(bs, { yolumda: true })}
      ${baslikSatiri('Seviyeler')}<div class="seviyeler">${SEVIYELER.map(s => seviyeKarti(s, h, s === secili)).join('')}</div>
      <p class="not">Seviye yüzdesi ve kazanım iki kanadı birlikte sayar: Yolculuk’ta duydun, Ders’te kuralını öğrendin. Durak kendi kanadıyla (duyum), bölüm yazılı derslerinin öğrettiği birimlerin kuralıyla tamam olur; bölümün öteki birimleri sonraki derslerde gelir.</p>
      ${seviyeAyrintisi(secili, h)}`,
    sekme: profilden ? 'profil' : 'bugun',
  });
}

// Başta tek "Buradasın" kartı (Görev 7): seviye, yer ve tek sıradaki adım. Altında yalnız kartın göstermediği öbür yol
// (kart Yolculuk'u gösteriyorsa Ders, Ders'i gösteriyorsa Yolculuk), aynı satır iki kez görünmez.
function bugunGenelEkrani() {
  const ys = yolculukSirasi();
  const sira = dSiradaki();
  const sb = sira && B_BOLUM.get(sira.bolum);
  const sd = sira && bDersBul(sira.bolum, sira.ders);
  const s = kanatOzeti();
  const bs = buradaNe();
  const yolculukSatiri = satir({ href: yolculukAdresi(ys.d, ys.konum), renk: 'pembe', etiket: ys.d.no, ad: `Yolculuk · ${ys.d.ad}`, alt: `Durak ${ys.d.no} · ${konumYazisi(ys.d, ys.konum)} · doğal yol: bak, dinle, anla`, sag: durakUcreti(ys.d) });
  const dersSatiri = sd ? satir({ href: `#/ders/${sb.id}/${sd.id}`, renk: 'kraft', etiket: `${sb.no}${sd.id.toUpperCase()}`, ad: `Ders · ${sd.baslik}`, alt: `Bölüm ${sb.no} · ${esc(sb.title)} · kural yolu`, sag: sb.no <= UCRETSIZ_DERS_BOLUM ? ucret('ucretsiz') : ucret('paket') })
    : satir({ href: '#/ders', renk: 'bos', etiket: ikon.onay, ad: 'Ders · bütün dersler okundu', alt: 'Bölümlere dönüp alıştırmaları tekrar edebilirsin' });
  const kartDersi = bs.sonraki.href.startsWith('#/ders/');
  const oteki = !kartDersi ? dersSatiri : bs.yer.bitti ? '' : yolculukSatiri;
  const yoklama = yoklamaBekliyor() ? satir({ href: '#/yolculuk/yoklama', renk: 'pembe', etiket: ikon.ses, ad: 'Dinleme yoklaması', alt: 'Bildiğin durakları hızlı geç: duyduğunun resmine dokun', sag: '3 dk' }) : '';
  return ekran({
    kabuk: kabukSekme({ renk: 'sari', h1: 'Bugün', karakter: bugunPozu(), buyuk: true }),
    govde: `${buradasinKarti(bs)}
      ${yoklama || oteki ? `${baslikSatiri('Öbür yol')}${yoklama}${oteki}` : ''}
      ${baslikSatiri('Ortak hafıza', `<span>yazılı duraklarda ${TUM_BIRIMLER.length} birim</span>`)}
      ${kanatKutulari(s)}
      <p class="not">Bir birim iki kanatla öğrenilir: Yolculuk’ta duyup anlarsın (duyum), Ders’te nedenini öğrenirsin (kural). İkisi birlikte olunca “öğrenildi” sayılır. Hangi yoldan gidersen git, öbürü bildiğini görür.</p>
      <div class="dugme-alani"><a class="ikinci" href="#/calis">İki yolu gör${ikon.ileri}</a></div>`,
    sekme: 'bugun',
  });
}

function calisGenelEkrani() {
  const ys = yolculukSirasi();
  const sira = dSiradaki();
  const sb = sira && B_BOLUM.get(sira.bolum);
  const sd = sira && bDersBul(sira.bolum, sira.ders);
  const toplamDers = B_YAZILI.reduce((t, b) => t + b.dersler.length, 0);
  return ekran({
    kabuk: kabukSekme({ renk: 'sari', h1: 'Çalış', karakter: 'gorev', alt: `Genel İngilizce · ${DURAKLAR.length} durak · ${B_BOLUMLER.length} bölüm · ${toplamDers} ders` }),
    govde: `<div class="iki-yol">
        <a class="yol-kart yolculuk" href="#/yolculuk"><span class="yol-baslik kalem">Yolculuk</span><small>doğal yol</small>
          <p>Yurt dışına giden birinin dili sıfırdan edinmesi: resim ve ses, yazı en son.</p><span class="git">${DURAKLAR.length} durak${ikon.ileri}</span></a>
        <a class="yol-kart ders" href="#/ders"><span class="yol-baslik kalem">Ders</span><small>kural yolu</small>
          <p>Duyduğunun nedeni: kısa dersler, Türkçe karşılaştırma, alıştırma.</p><span class="git">${B_BOLUMLER.length} bölüm${ikon.ileri}</span></a>
      </div>
      <p class="gec-notu"><span aria-hidden="true">⇄</span> İstediğin an geç: iki yol aynı hafızayı kullanır, bildiğin şey öbür yolda “biliyorsun” diye görünür.</p>
      ${baslikSatiri('Kaldığın yer')}
      ${satir({ href: yolculukAdresi(ys.d, ys.konum), renk: 'pembe', etiket: ys.d.no, ad: `Yolculuk · ${ys.d.ad}`, alt: buyukHarf(konumYazisi(ys.d, ys.konum)), sag: durakUcreti(ys.d) })}
      ${sd ? satir({ href: `#/ders/${sb.id}/${sd.id}`, renk: 'kraft', etiket: `${sb.no}${sd.id.toUpperCase()}`, ad: `Ders · ${sd.baslik}`, alt: `Bölüm ${sb.no} · ${esc(sb.title)}`, sag: sb.no <= UCRETSIZ_DERS_BOLUM ? ucret('ucretsiz') : ucret('paket') }) : ''}
      ${baslikSatiri('Ücretsiz kısım')}
      <p class="not">${ucret('ucretsiz')} Yolculuk durak 1–${UCRETSIZ_DURAK} ve Ders bölüm 1–${UCRETSIZ_DERS_BOLUM}.</p>
      ${paketNotu('genel')}`,
    sekme: 'calis',
  });
}

function yolculukListesi() {
  const h = kanatOku();
  const ys = yolculukSirasi();
  return ekran({
    kabuk: kabukUst({ renk: 'pembe', geri: '#/calis', baslik: 'Çalış', yapiskan: false, ek: `<h1 style="font:700 34px/41px system-ui;letter-spacing:-.02em;margin-top:4px">Yolculuk</h1><p class="alt">Doğal yol: önce ses ve resim, yazı en son · ${DURAKLAR.length} durak</p>` }),
    govde: `${baslikSatiri('Kaldığın yer')}${satir({ href: yolculukAdresi(ys.d, ys.konum), renk: 'pembe', etiket: ys.d.no, ad: ys.d.ad, alt: `Durak ${ys.d.no} · ${konumYazisi(ys.d, ys.konum)}`, sag: durakUcreti(ys.d) })}
      ${baslikSatiri('Duraklar')}
      ${DURAKLAR.map(d => {
        const p = durakIlerleme(d, h), parcalar = durakParcalari(d, h), pd = parcaDurumu(d, h);
        const ekranSayisi = pd.sahne.ekran + (pd.pratik?.ekran ?? 0) + (pd.hikaye?.ekran ?? 0);
        return satir({ href: `#/yolculuk/${d.id}/0`, renk: parcalar.every(x => x.durum === 'tamam') ? 'bos' : 'pembe', etiket: d.no, ad: d.ad, alt: `${ekranSayisi} ekran · ${p.duyulan} / ${p.toplam} birim duyuldu`, sag: durakUcreti(d) })
          + `<div class="durak-parcalar" role="group" aria-label="${esc(d.ad)}: parçalar">${parcalar.map(parcaSatiri).join('')}</div>`;
      }).join('')}
      ${paketNotu('genel')}
      ${baslikSatiri('Biliyor musun?')}
      ${satir({ href: '#/yolculuk/yoklama', renk: 'bos', etiket: ikon.ses, ad: 'Dinleme yoklaması', alt: 'Okulda öğrendiysen: her duraktan üç soru; bildiğin duraklar duyumda tamam sayılır' })}`,
    sekme: 'calis',
  });
}

// Yolculuk oynatıcısı uygulamanın içinde: tasarim/filiz oynatıcısı çerçevesiz kipte (?gom=1) iframe'de açılır; adres ve hafıza
// postMessage ile eşlenir (dinleyici aşağıda). Geri: Ders'ten gelindiyse derse, yoksa durak listesine.
let yolculukDonus = null;
function yolculukEkrani(id, konum = ILK) {
  const yoklama = id === 'yoklama';
  const d = yoklama ? null : durakBul(id);
  const ic = yoklama ? '#/yoklama-basla' : oynaticiAdresi(d.id, konum);
  const geri = yolculukDonus || '#/yolculuk';
  const bilgi = yoklama ? 'Dinleme yoklaması' : `Durak ${d.no} · ${esc(d.ad)}`;
  return `<div class="yolculuk-kap">${kabukUst({ renk: 'pembe', geri, baslik: yolculukDonus ? 'Derse dön' : 'Yolculuk', bilgi, bilgiId: 'yolculuk-bilgi' })}
    <iframe class="yolculuk-cerceve" src="../tasarim/filiz/index.html?gom=1${ORNEK ? '&ornek=1' : ''}${ic}" title="Yolculuk oynatıcısı" allow="autoplay"></iframe></div>`;
}
window.addEventListener('message', e => {
  if (e.origin !== location.origin || e.data?.tur !== 'idil-yolculuk' || !durum()) return;
  const m = e.data;
  const D = durum();
  if (m.parca === 'pratik' || m.parca === 'hikaye') {
    // Oynatıcıda pratik ya da hikâye ekranı açıldı (bildir({ durak, sayfa, parca })): adres ve kaldığın yer, sahnedeki gibi.
    const d = durakBul(m.durak), konum = d && konumCoz(d, m.parca, m.sayfa);
    if (!konum || !location.hash.startsWith('#/yolculuk/')) return;
    history.replaceState(null, '', yolculukAdresi(d, konum));
    if (!yolculukDonus) { D.yolculuk = { durak: d.id, sayfa: konumKuyrugu(konum), parca: m.parca }; kaydet(); }
    const el = document.getElementById('yolculuk-bilgi');
    if (el) el.textContent = `Durak ${d.no} · ${d.ad}`;
  } else if (m.sayfa) {
    // Oynatıcıda sayfa değişti: adres güncellenir (sayfa yeniden çizilmez), kaldığın yer kaydedilir.
    const d = durakBul(m.sayfa.durak);
    if (!d || !location.hash.startsWith('#/yolculuk/')) return;
    history.replaceState(null, '', `#/yolculuk/${d.id}/${m.sayfa.no}`);
    // Ders'in "Bunu bir de duy" bağlantısıyla gelinen ara ziyaret kaldığın yeri değiştirmez.
    if (!yolculukDonus) { D.yolculuk = { durak: d.id, sayfa: m.sayfa.no }; kaydet(); }
    const el = document.getElementById('yolculuk-bilgi');
    if (el) el.textContent = `Durak ${d.no} · ${d.ad}`;
  } else if (m.yoklama) {
    D.genel = { ...(D.genel || { baslangic: 'okul' }), yoklandi: true };
    if (durakBul(m.yoklama)) D.yolculuk = { durak: m.yoklama, sayfa: 0 };
    kaydet();
  } else if (m.git === 'ders') {
    location.hash = '#/ders';
  } else if (m.git === 'liste') {
    location.hash = yolculukDonus || '#/yolculuk';
  }
});

// Ders bitince anlam kanadı (IKI_KANAT.md §3.3): ders okunmuş ve alıştırmalarından en az biri doğru (alıştırmasız derste okumak yeter).
// Dersin birimleri `birimler` alanından; alan boşsa dersin `duy` bloğunun gösterdiği Yolculuk sayfasının birimlerinden türetilir
// (gor: yeni, sec/yazi: birimler). Kural icerik/seviye/ilerleme.js dersBirimleri'nde (Görev 7'de taşındı; Eksiklerin de aynı kuralla
// "bu birimi hangi ders öğretir" sorusunu cevaplar). Döner: anlam kanadı yeni tamamlanan birim sayısı.
const ALISTIRMA = new Set(['dene', 'dogruMu', 'hataBul']);
// Görev 5: `alistirmalar`ı olan derste kural değişir: alıştırmaların en az %80'i doğruysa (okundu gerekmez) anlam kanadı işlenir.
// Bu derslerde birimler yalnız dersin `birimler` alanından gelir (duy bloğundan türetilmez); alan boşsa anlamIsle çağrılmaz.
function anlamKanadiIsle(bId, dId) {
  const d = bDersBul(bId, dId);
  if (!d) return 0;
  const L = dersAlistirmalari(d);
  let birimler;
  if (L.length) {
    if (!dAlistirmaIlerleme(bId, dId, L.length).gecti) return 0;
    birimler = Array.isArray(d.birimler) ? d.birimler.filter(x => typeof x === 'string' && x) : [];
    if (!birimler.length) { console.info(`Ders ${bId}/${dId}: birimler alanı boş; anlam kanadı işlenmedi.`); return 0; }
  } else {
    if (!dOkunduMu(bId, dId)) return 0;
    const ali = d.bloklar.map((x, j) => [x, j]).filter(([x]) => ALISTIRMA.has(x.tur));
    if (ali.length && !ali.some(([, j]) => kitap().dene[`ders:${bId}/${dId}/${j}`]?.d)) return 0;
    birimler = dersBirimleri(d);
    if (!birimler.length) return 0;
  }
  let h = kanatOku();
  const once = birimler.filter(b => ['kural', 'tam'].includes(kanatDurumu(h, b))).length;
  const g = bugun();
  for (const b of birimler) h = anlamIsle(h, b, `${bId}/${dId}`, true, g);
  kanatYaz(h);
  return birimler.filter(b => ['kural', 'tam'].includes(kanatDurumu(h, b))).length - once;
}
function duyHtml(x) {
  const d = durakBul(x.durak);
  if (!d) return '';
  return `<a class="duy-dugme" href="#/yolculuk/${d.id}/${x.sayfa}">${ikon.ses}<span><b>Bunu bir de duy</b>→ Yolculuk, ${esc(d.ad)} · sayfa ${x.sayfa + 1}</span>${ikon.ileri}</a>`;
}

// Yol seçimi (Profil → Yolu değiştir)
function yolEkrani() {
  return ekran({
    kabuk: kabukUst({ renk: 'sari', geri: '#/profil', baslik: 'Profil', yapiskan: false, ek: '<h1 style="font:700 34px/41px system-ui;letter-spacing:-.02em;margin-top:4px">Yolu değiştir</h1><p class="alt">İlerlemen silinmez; döndüğünde kaldığın yerden devam edersin.</p>' }),
    govde: yolKartlari({ secili: yol(), eylem: true }),
    sekme: 'profil',
  });
}

// ==================== PROFİL ====================
function profilEkrani() {
  const D = durum();
  const st = turIsabeti();
  const toplamN = Object.values(st).reduce((a, x) => a + x.n, 0);
  const toplamD = Object.values(st).reduce((a, x) => a + x.d, 0);
  const cozulen = Object.keys(D.cevaplar).length;
  const rz = rozetler();
  const ek = `<div class="puan"><span class="yeni kalem" style="font-size:${String(D.xp).length > 3 ? 84 : 106}px">${sayi(D.xp, 0)}</span><p><b>toplam XP</b>en uzun seri ${D.seri.enUzun} gün</p></div>`;
  const y = yol();
  const yolHtml = `${baslikSatiri('Yolun')}${satir({ href: '#/yol', renk: 'sari', etiket: ikon.bayrak, ad: YOL_ADI[y], alt: y === 'genel' ? 'Yolculuk ve Ders' : 'YDS ve YÖKDİL', sag: '<b>Yolu değiştir</b>' })}`;
  const ayarlar = `${baslikSatiri('Ayarlar')}
      <label class="anahtar"><span>Telaffuz sesi</span><input type="checkbox" data-eylem="ses"${D.ayar.ses ? ' checked' : ''}></label>`;
  const sonNot = `<div class="dugme-alani"><button class="ikinci" data-eylem="sifirla">İlerlemeyi sıfırla</button></div>
      <p class="not">Bu bir tanıtım sürümüdür; uygulamanın kendisi değil. İlerlemen yalnız bu tarayıcıda tutulur. İçerik taslaktır,
        İngilizce öğretmeninin onayını bekliyor. Oyun kuralları kardeş uygulama iLaw'dan gelir.</p>`;
  if (y === 'genel') {
    const okunan = dOkunanSayisi();
    const toplamDers = B_YAZILI.reduce((t, b) => t + b.dersler.length, 0);
    return ekran({
      kabuk: kabukSekme({ renk: 'sari', h1: adim() === 'Sen' ? 'Profil' : adim(), karakter: 'prenses', alt: 'Genel İngilizce · Yolculuk ve Ders', ek }),
      govde: `<form id="profil-genel" onsubmit="return false"><label class="alan"><span>Adın</span><input name="ad" value="${esc(D.ad)}" maxlength="20" autocomplete="given-name"></label></form>
        ${yolHtml}
        ${(() => { const bs = buradaNe(); return satir({ href: '#/yolum', renk: 'sari', etiket: esc(bs.seviye.id), ad: 'Yolum', alt: `%${bs.yuzde} · ${bs.tam} / ${bs.toplam} ${esc(bs.seviye.id)} birimi iki kanatla tam · kazanımlar ve eksikler`, sag: '<b>Aç</b>' }); })()}
        ${baslikSatiri('Ortak hafıza', `<span>yazılı duraklarda ${TUM_BIRIMLER.length} birim</span>`)}${kanatKutulari(kanatOzeti())}
        <p class="not">${okunan} / ${toplamDers} ders okundu · ${DURAKLAR.filter(d => { const p = durakIlerleme(d); return p.toplam && p.duyulan === p.toplam; }).length} / ${DURAKLAR.length} durak duyumda tamam</p>
        ${baslikSatiri('Ücretsiz ve paket')}${paketNotu('genel')}
        ${ayarlar}${sonNot}`,
      sekme: 'profil',
    });
  }
  return ekran({
    kabuk: kabukSekme({ renk: 'sari', h1: adim() === 'Sen' ? 'Profil' : adim(), karakter: 'prenses', alt: `${esc(D.sinav.tur)} · ${esc(tarihYaz(D.sinav.tarih, false))} · hedef ${esc(D.sinav.hedef)}`, ek }),
    govde: `${yolHtml}<div class="gorev-ust">${idilResim('takvim')}${baslikSatiri('Sınavın')}</div>
      <form id="profil" onsubmit="return false">
        <label class="alan"><span>Adın</span><input name="ad" value="${esc(D.ad)}" maxlength="20" autocomplete="given-name"></label>
        <label class="alan"><span>Sınavın</span><select name="sinav">${SINAVLAR.map(s => `<option${s === D.sinav.tur ? ' selected' : ''}>${s}</option>`).join('')}</select></label>
        <label class="alan"><span>Sınav tarihin</span><input name="tarih" type="date" value="${esc(D.sinav.tarih)}"></label>
        <label class="alan"><span>Hedef puanın</span><input name="hedef" type="number" value="${esc(D.sinav.hedef)}" min="40" max="100" step="5" inputmode="numeric"></label>
      </form>
      ${baslikSatiri('İstatistik', `<span>${cozulen} soru · ${toplamN ? `%${Math.round((100 * toplamD) / toplamN)} doğru` : 'henüz yok'}</span>`)}
      ${toplamN ? `<table><thead><tr><th>Tür</th><th class="sag">Çözülen</th><th class="sag">Doğru</th></tr></thead><tbody>${Object.keys(TURLER).filter(t => st[t]).map(t => `<tr><td>${esc(KISA_AD[t] || TURLER[t].ad)}</td><td class="sag">${st[t].cozulen}</td><td class="sag">%${Math.round((100 * st[t].d) / st[t].n)}</td></tr>`).join('')}</tbody></table>` : '<p class="not">Soru çözdükçe türe göre isabetin burada görünür.</p>'}
      <p class="not">${ogrenilenSayisi()} kart öğrenildi · ${D.duellolar.length} düello · ${D.denemeler.length} deneme sınavı</p>
      ${baslikSatiri('Rozetler', `<span>${rz.filter(x => x.tamam).length} / ${rz.length}</span>`)}
      ${rz.map(x => `<div class="rozet-satiri${x.tamam ? ' kazanildi' : ''}"><span class="simge">${x.tamam ? ikon.odul : ikon.odul}</span><span><span class="ad">${esc(x.ad)}</span><span class="alt" style="display:block">${esc(x.alt)}${x.tamam ? ' · kazandın' : ''}</span></span></div>`).join('')}
      ${baslikSatiri('Ücretsiz ve paket')}
      <p class="not">${ucret('ucretsiz')} Seviye testi ve bir tanı denemesi, Sınav Kitabı bölüm 1–${UCRETSIZ_SINAV_BOLUM}, ilk ${UCRETSIZ_KART} kelime kartı, her soru türünden bir set, günlük düello.</p>
      ${paketNotu('sinav')}
      ${baslikSatiri('Ayarlar')}
      <label class="anahtar"><span>Telaffuz sesi</span><input type="checkbox" data-eylem="ses"${D.ayar.ses ? ' checked' : ''}></label>
      <a class="satir" href="../oynatici/" style="min-height:56px"><span class="govde"><span class="ad" style="font-weight:400">İçerik oynatıcısı</span><span class="alt">Öğretmen görünümüyle bütün sorular ve cevap anahtarı</span></span>${ikon.ileri}</a>
      <div class="dugme-alani"><button class="ikinci" data-eylem="sifirla">İlerlemeyi sıfırla</button></div>
      <p class="not">Bu bir tanıtım sürümüdür; uygulamanın kendisi değil. İlerlemen yalnız bu tarayıcıda tutulur. Sorular ve kartlar taslaktır,
        İngilizce öğretmeninin onayını bekliyor. Oyun kuralları kardeş uygulama iLaw'dan gelir.</p>`,
    sekme: 'profil',
  });
}

// ==================== YÖNLENDİRME ====================
let saat = null;
let sonRota = '';
function ciz({ kaydir = true } = {}) {
  clearInterval(saat);
  saat = null;
  const eskiKaydirma = document.getElementById('kaydir')?.scrollTop || 0;
  const [a, b, c, d] = location.hash.replace(/^#\/?/, '').split('/').map(decodeURIComponent);
  let html = null;
  // Kitap okuyucu: #/ders Başlangıç Kitabı'nı (Genel İngilizce), öteki her adres Sınav Kitabı'nı okur.
  KB = a === 'ders' ? DERS_KB : SINAV_KB;
  // Yolculuk'a bir dersin "Bunu bir de duy" bağlantısıyla gelindiyse geri düğmesi o derse döner.
  if (a === 'yolculuk' && c !== undefined) { if (sonRota.startsWith('#/ders/')) yolculukDonus = sonRota; } else yolculukDonus = null;
  // Yolum'a Profil'den gelindiyse geri Profil'e, öteki her yerden Bugün'e (Yolum içinde seviye değiştirmek dönüşü değiştirmez).
  if (a === 'yolum' && !sonRota.startsWith('#/yolum')) yolumDonus = sonRota.startsWith('#/profil') ? '#/profil' : '#/bugun';
  sonRota = location.hash;
  if (!durum()) {
    html = baslangicEkrani(a === 'baslangic' ? b : null);
  } else if (a === 'yol') {
    html = yolEkrani();
  } else if (a === 'yolculuk' && b === 'yoklama') {
    html = yolculukEkrani('yoklama');
  } else if (a === 'yolculuk' && durakBul(b)) {
    // #/yolculuk/<id>/<no> · …/pratik/<k> · …/hikaye/<h>/<sayfa> · …/hikaye/<h>/soru/<j>; geçersiz numara durağın ilk sayfasına.
    const kuyruk = location.hash.replace(/^#\/?/, '').split('/').map(decodeURIComponent).slice(2);
    const parca = kuyruk[0] === 'pratik' || kuyruk[0] === 'hikaye' ? kuyruk[0] : 'sahne';
    html = yolculukEkrani(b, konumCoz(durakBul(b), parca, (parca === 'sahne' ? kuyruk : kuyruk.slice(1)).join('/')) || ILK);
  } else if (a === 'yolculuk') {
    html = yolculukListesi();
  } else if (a === 'ders' && DERS_KB.BOLUM.has(b) && c === 'yokla' && DERS_KB.BOLUM.get(b).yokla?.length) {
    html = yoklaEkrani(DERS_KB.BOLUM.get(b));
  } else if (a === 'ders' && DERS_KB.BOLUM.has(b) && c === 'ozet' && DERS_KB.BOLUM.get(b).dersler?.length) {
    html = ozetEkrani(DERS_KB.BOLUM.get(b));
  } else if (a === 'ders' && DERS_KB.BOLUM.has(b) && c === 'test' && bolumTesti(DERS_KB.BOLUM.get(b)).length) {
    html = testEkrani(DERS_KB.BOLUM.get(b));
  } else if (a === 'ders' && DERS_KB.BOLUM.has(b) && c && bDersBul(b, c)) {
    html = dersEkrani(DERS_KB.BOLUM.get(b), bDersBul(b, c));
  } else if (a === 'ders' && DERS_KB.BOLUM.has(b)) {
    html = bolumEkrani(DERS_KB.BOLUM.get(b));
  } else if (a === 'ders' && DERS_KB.BOLUMLER.length) {
    html = kitapEkrani();
  } else if (a === 'oturum' && b === 'hap' && HAPK.has(c) && oturum) {
    html = hapKarti(HAPK.get(c), { oturumda: true });
  } else if (a === 'oturum' && b === 'kitap' && oturum && dersBul(c, d)) {
    html = dersEkrani(BOLUM.get(c), dersBul(c, d), { oturumda: true });
  } else if (a === 'kitap' && b === 'yontem') {
    html = yontemEkrani();
  } else if (a === 'kitap' && BOLUM.has(b) && c === 'yokla' && BOLUM.get(b).yokla?.length) {
    html = yoklaEkrani(BOLUM.get(b));
  } else if (a === 'kitap' && BOLUM.has(b) && c === 'ozet' && BOLUM.get(b).dersler?.length) {
    html = ozetEkrani(BOLUM.get(b));
  } else if (a === 'kitap' && BOLUM.has(b) && c && dersBul(b, c)) {
    html = dersEkrani(BOLUM.get(b), dersBul(b, c));
  } else if (a === 'kitap' && BOLUM.has(b)) {
    html = bolumEkrani(BOLUM.get(b));
  } else if (a === 'kitap' && BOLUMLER.length) {
    html = kitapEkrani();
  } else if (a === 'seviye' && durum() && SEVIYE_TESTI) {
    html = seviyeEkrani();
  } else if (a === 'oturum') {
    html = oturumEkrani();
  } else if (a === 'duello') {
    html = duelloEkrani();
  } else if (a === 'konu' && yol() === 'sinav' && Object.hasOwn(KONULAR, b ?? '')) {
    html = konuEkrani(b);
  } else if (a === 'konu') {
    // Geçersiz konu (ya da Genel İngilizce yolu): Çalış'a döner.
    history.replaceState(null, '', '#/calis');
    html = yol() === 'genel' ? calisGenelEkrani() : calisEkrani();
  } else if (a === 'calis' && b === 'unite' && UNITE.has(c)) {
    html = uniteEkrani(UNITE.get(c));
  } else if (a === 'calis' && b === 'hap' && !c) {
    html = hapListesi();
  } else if (a === 'calis' && b === 'hap' && HAPK.has(c)) {
    html = hapKarti(HAPK.get(c));
  } else if (a === 'calis') {
    html = yol() === 'genel' ? calisGenelEkrani() : calisEkrani();
  } else if (a === 'kelimeler' && b === 'kok' && KOKLER[c]) {
    html = kokEkrani(c);
  } else if (a === 'kelimeler' && b === 'kart' && c) {
    html = kartEkrani(location.hash.split('/kart/')[1] ? decodeURIComponent(location.hash.split('/kart/')[1]) : c);
  } else if (a === 'kelimeler') {
    html = kelimelerEkrani();
  } else if (a === 'arena') {
    html = arenaEkrani();
  } else if (a === 'arkadaslar') {
    html = arkadaslarEkrani();
  } else if (a === 'profil') {
    html = profilEkrani();
  } else if (a === 'yolum' && yol() === 'genel') {
    html = yolumEkrani(b);
  }
  if (!html) {
    if (durum() && a !== 'bugun') { history.replaceState(null, '', '#/bugun'); }
    html = !durum() ? baslangicEkrani() : yol() === 'genel' ? bugunGenelEkrani() : bugunEkrani();
  }
  app.innerHTML = html;
  const k = document.getElementById('kaydir');
  if (k && !kaydir) k.scrollTop = eskiKaydirma;
  const h1 = app.querySelector('h1');
  document.title = `${(h1?.textContent || app.querySelector('.bar .baslik')?.textContent || 'iDil').trim()} · iDil tanıtım`;
  bildirimCiz();
  zamanlayicilar();
}

// Deneme sınavı geri sayımı ve düello saati: yalnız metni günceller, sayfayı yeniden çizmez.
function zamanlayicilar() {
  const yol = location.hash;
  if (yol === '#/oturum' && oturum?.mod === 'sinav' && !oturum.bitti) {
    saat = setInterval(() => {
      const el = document.getElementById('sayac');
      if (el) el.textContent = kalanSure(oturum);
      if (oturum.sure - (Date.now() - oturum.bas) / 1000 <= 0) oturumBitir();
    }, 1000);
  } else if (yol === '#/duello' && duello && !duello.bitti && duello.adimlar[duello.i].secilen === undefined) {
    saat = setInterval(() => {
      const d = duello;
      const p = d.adimlar[d.i];
      const gecen = (Date.now() - d.soruBas) / 1000;
      const kalan = Math.max(0, Math.ceil(DUELLO_SURE - gecen));
      const el = document.getElementById('sayac');
      if (el) el.textContent = `0:${iki(kalan)}`;
      const rd = document.getElementById('rakip-durumu');
      if (rd) rd.textContent = gecen >= p.bot.sure ? `${d.rakip.ad} cevapladı` : `${d.rakip.ad} düşünüyor…`;
      if (gecen >= DUELLO_SURE) duelloCevap(null);
    }, 250);
  }
}

// ==================== EYLEMLER ====================
// Ders alıştırmasına ya da bölüm sonu testi sorusuna cevap (Görev 5). cevap: şık dizini ya da yazılan metin. Her öğe bir kez.
function alisCevapla(a, cevap) {
  const [bId, x2, x3] = String(a || '').slice(3).split('/');
  if (a.startsWith('al:')) {
    const x = dersAlistirmalari(bDersBul(bId, x2))[x3];
    if (!x || dAlistirmaCevap(bId, x2, x3)) return;
    const r = dAlistirmaKaydet(bId, x2, Number(x3), cevapDogruMu(x, cevap), cevap);
    gorevHaberi(r.biten);
    const n = anlamKanadiIsle(bId, x2);
    if (n) bildir(`Anlam kanadı: ${n} birim`);
  } else if (a.startsWith('at:')) {
    const T = bolumTesti(B_BOLUM.get(bId));
    const x = T[x2];
    // Tasarım gereği bölüm sonu testi XP vermez (yalnız sonuç kaydı); XP alıştırma ve ön testtedir.
    if (!x || !dTestCevapla(bId, Number(x2), cevap, cevapDogruMu(x, cevap))) return;
    const C = dTestCevaplari(bId);
    if (T.every((_, j) => C[j])) dTestKaydet(bId, T.filter((_, j) => C[j].d).length, T.length);
  } else return;
  ciz({ kaydir: false });
  app.querySelector(`[data-dene="${CSS.escape(a)}"] .dene-aciklama`)?.scrollIntoView({ block: 'nearest' });
}
app.addEventListener('submit', e => {
  const f = e.target.closest?.('form.yaz-form');
  if (!f) return;
  e.preventDefault();
  const v = String(new FormData(f).get('cevap') || '');
  if (!v.trim()) { f.querySelector('input')?.focus(); return; }
  alisCevapla(f.dataset.a, v);
});
function turuBaslat() {
  const plan = gunPlani();
  const okuma = parcalar('okuma').get(plan.parca) || [];
  oturumBaslat({
    ad: 'Bugünün turu', tur: 'gunluk', geri: '#/bugun',
    // Yarıda bırakılıp yeniden başlanan turda bugün zaten tekrarlanmış kartlar atlanır.
    // Tur önce bugünün dersiyle açılır (okunmadıysa): önce öğren, sonra kelime, soru ve okuma.
    adimlar: [
      ...(plan.ders && !okunduMu(plan.ders.bolum, plan.ders.ders) && dersBul(plan.ders.bolum, plan.ders.ders) ? [dersAdimi(plan.ders)] : []),
      ...(plan.tekrar || []).map(id => SORU.get(id)).filter(Boolean).map(s => ({ ...soruAdimi(s), not: 'Dersten tekrar' })),
      ...plan.kartlar.filter(key => kartBul(key) && (!kartDurumu(key)?.gorulme || kartDurumu(key).sonraki <= bugun())).map(kartAdimi),
      ...plan.sorular.map(id => SORU.get(id)).filter(Boolean).map(soruAdimi), ...okuma.map(soruAdimi),
    ],
  });
}
function turAlistirma(t) {
  if (parcaliMi(t)) {
    const m = parcalar(t);
    const cozulmemis = [...m.entries()].sort((x, y) => x[1].filter(s => durum().cevaplar[s.id]).length - y[1].filter(s => durum().cevaplar[s.id]).length);
    const [, adimlar] = cozulmemis[Math.floor(Math.random() * Math.min(3, cozulmemis.length))];
    oturumBaslat({ ad: TURLER[t].ad, geri: '#/calis', adimlar: adimlar.map(soruAdimi) });
  } else {
    oturumBaslat({ ad: TURLER[t].ad, geri: '#/calis', adimlar: havuz(SORULAR.filter(s => s.tur === t), 10).map(soruAdimi) });
  }
}

app.addEventListener('click', e => {
  const b = e.target.closest('[data-eylem]');
  if (!b || b.matches('input, select')) return;
  const ey = b.dataset.eylem;
  const D = durum();
  switch (ey) {
    case 'baslat': {
      const f = new FormData(document.getElementById('baslangic'));
      baslat({ ad: f.get('ad') || '', sinav: f.get('sinav'), tarih: f.get('tarih') || gunEkle(bugun(), 35), hedef: Math.max(40, Math.min(100, Number(f.get('hedef')) || 70)), ornek: !!b.dataset.ornek, yol: 'sinav' });
      location.hash = !b.dataset.ornek && SEVIYE_TESTI ? '#/seviye' : '#/bugun';
      ciz();
      bildir(b.dataset.ornek ? 'Örnek ilerleme yüklendi' : 'Hoş geldin; ilk turun hazır');
      return;
    }
    case 'baslat-genel': {
      // Genel İngilizce: sınav alanları varsayılanla dolar (yol sonra Sınav'a çevrilirse form hazır olsun).
      const f = new FormData(document.getElementById('baslangic-genel'));
      const bilgi = f.get('bilgi') === 'okul' ? 'okul' : 'hic';
      baslat({ ad: f.get('ad') || '', sinav: SINAVLAR[0], tarih: gunEkle(bugun(), 35), hedef: 70, ornek: false, yol: 'genel', genel: { baslangic: bilgi } });
      location.hash = bilgi === 'okul' ? '#/yolculuk/yoklama' : '#/bugun';
      ciz();
      bildir(bilgi === 'okul' ? 'Hoş geldin; önce kısa bir dinleme yoklaması' : 'Hoş geldin; Yolculuk ilk duraktan başlıyor');
      return;
    }
    case 'yol-sec': {
      const y = b.dataset.yol;
      if (y !== yol()) { yolDegistir(y); bildir(`Yolun: ${YOL_ADI[yol()]}. İlerlemen yerinde.`); }
      location.hash = '#/bugun';
      return;
    }
    case 'kapi-tanitim': {
      // Tanıtımda seviye kilidini görünümde açar ya da geri koyar (tasarım §4.5); kanat hafızasına ve ilerlemeye dokunmaz.
      const ac = b.dataset.ac === '1';
      D.genel = { ...(D.genel && typeof D.genel === 'object' && !Array.isArray(D.genel) ? D.genel : { baslangic: 'hic' }), kapiTanitim: ac };
      kaydet();
      const hedef = ac ? `#/yolum/${SEVIYELER[1]?.id || ''}` : '#/yolum';
      if (location.hash === hedef) ciz({ kaydir: false }); else location.hash = hedef;
      bildir(ac ? 'Tanıtımda açıldı; ilerlemen değişmedi' : 'Kilit geri kondu');
      return;
    }
    case 'dinle': dinle(b.dataset.metin); return;
    case 'tura-basla': turuBaslat(); return;
    case 'tur-yeni': gunPlani(true); turuBaslat(); return;
    case 'davet-kabul': { const dv = davetGuncelle(); if (dv) duelloBaslat(dv.rakip); return; }
    case 'tur-calis': turAlistirma(b.dataset.tur); return;
    case 'seviye-basla': oturumBaslat({ ad: 'Seviye testi', renk: 'sari', tur: 'seviye', geri: '#/bugun', adimlar: seviyeTestiKur().map(x => ({ ...soruAdimi(x.s), basamak: x.k })) }); return;
    case 'seviye-atla': location.hash = '#/bugun'; return;
    case 'deneme-tam': { const d = DENEMELER.find(x => x.id === b.dataset.id); if (!d) return; oturumBaslat({ ad: d.ad, renk: 'turuncu', mod: 'sinav', sure: 180 * 60, tur: 'deneme', geri: '#/calis', denemeId: d.id, adimlar: d.sorular.map(soruAdimi) }); return; }
    case 'deneme': oturumBaslat({ ad: 'Deneme sınavı', renk: 'turuncu', mod: 'sinav', sure: 180 * 60, tur: 'deneme', geri: '#/calis', adimlar: denemeKur(D.sinav.tur).map(soruAdimi) }); return;
    case 'konu-seti': { const id = b.dataset.konu; if (!Object.hasOwn(KONULAR, id)) return; oturumBaslat({ ad: KONULAR[id].ad, geri: `#/konu/${id}`, adimlar: konuSeti(id, SORULAR, D.cevaplar, 10).map(soruAdimi) }); return; }
    case 'yanlislar': oturumBaslat({ ad: 'Yanlışlarım', geri: '#/calis', adimlar: rastgele(yanlislar(), 10).map(soruAdimi) }); return;
    case 'unite-kart': { const u = UNITE.get(b.dataset.id); oturumBaslat({ ad: u.title, geri: `#/calis/unite/${u.id}`, adimlar: u.cards.map(c => kartAdimi(`${u.id}/${c.code}`)) }); return; }
    case 'unite-soru': { const u = UNITE.get(b.dataset.id); oturumBaslat({ ad: u.title, geri: `#/calis/unite/${u.id}`, adimlar: UNITE_SORULARI.get(u.id).map(soruAdimi) }); return; }
    case 'parca': { const s = SORULAR.find(x => x.it.id === b.dataset.id); oturumBaslat({ ad: s.it.title, geri: `#/calis/unite/${s.unit.id}`, adimlar: SORULAR.filter(x => x.it === s.it).map(soruAdimi) }); return; }
    case 'hap-coz': oturumBaslat({ ad: HAPK.get(b.dataset.id).title, geri: `#/calis/hap/${b.dataset.id}`, adimlar: rastgele(HAP_BAGLI.get(b.dataset.id), 10).map(soruAdimi) }); return;
    case 'kelime-calis': oturumBaslat({ ad: 'Kelime tekrarı', renk: 'pembe', geri: '#/kelimeler', adimlar: vadesiGelen().slice(0, 20).map(k => kartAdimi(k.key)) }); return;
    case 'kelime-yeni': oturumBaslat({ ad: 'Yeni kartlar', renk: 'pembe', geri: '#/kelimeler', adimlar: yeniKartlar().slice(0, 10).map(k => kartAdimi(k.key)) }); return;
    case 'kart-calis': oturumBaslat({ ad: 'Kelime kartı', renk: 'pembe', geri: location.hash, adimlar: [kartAdimi(b.dataset.key)] }); return;
    case 'not-form': notFormu = true; ciz({ kaydir: false }); document.querySelector('#not-formu input')?.focus(); return;
    case 'not-iptal': notFormu = false; ciz({ kaydir: false }); return;
    case 'not-kaydet': {
      const f = new FormData(document.getElementById('not-formu'));
      const en = String(f.get('en') || '').trim();
      const tr = String(f.get('tr') || '').trim();
      if (!en || !tr) { bildir('Sözcüğü ve Türkçe anlamını yaz.'); return; }
      notEkle({ en, tr, ornek: f.get('ornek') });
      notFormu = false;
      ciz({ kaydir: false });
      bildir(`"${en}" karta döndü; bugün tekrar gelecek`);
      return;
    }
    case 'not-sil': notSil(b.dataset.id); location.hash = '#/kelimeler'; bildir('Not silindi'); return;
    case 'suzgec': kelimeSuzgec = b.dataset.deger; kelimeSinir = 40; ciz({ kaydir: false }); return;
    case 'daha-fazla': kelimeSinir += 60; document.getElementById('kelime-listesi').innerHTML = kelimeListesi(); return;
    case 'konu': D.ayar.konu = b.dataset.konu; kaydet(); ciz({ kaydir: false }); return;
    case 'duello': duelloBaslat(b.dataset.rakip); return;
    case 'rakip-bul': duelloBaslat(RAKIPLER[Math.floor(Math.random() * RAKIPLER.length)].ad); return;
    case 'davet-et': bildir('Tanıtım sürümünde davet gönderilmez; uygulamada bağlantı paylaşılır.'); return;
    case 'sifirla':
      if (confirm('Bütün ilerleme silinsin mi? Bu tarayıcıdaki kayıt geri gelmez.')) { sifirla(); oturum = null; duello = null; location.hash = '#/baslangic'; ciz(); }
      return;
    case 'bildir': bildir('Teşekkürler; soru öğretmene iletilecek (tanıtımda kaydedilmez).'); return;
    // Ders kitabı: dersin içindeki alıştırmalar (ders ekranında, ön testte ve günün turundaki derste aynı).
    case 'cozum-adim': cozumAdimi.set(b.dataset.a, (cozumAdimi.get(b.dataset.a) || 0) + 1); ciz({ kaydir: false }); return;
    case 'dene': case 'dogrumu': case 'hatabul': {
      const a = b.dataset.a;
      if (kitap().dene[a]) return;
      const kb = kbAnahtar(a); // 'ders:' ön ekli anahtar Ders yolunun (Başlangıç Kitabı) alıştırmasıdır
      const [bId, dId, j] = a.slice(kb.onek.length).split('/');
      const blok = dId === 'yokla' ? kb.BOLUM.get(bId)?.yokla?.[j] : kb.dersBul(bId, dId)?.bloklar[j];
      if (!blok) return;
      const secilen = ey === 'dogrumu' ? b.dataset.v === '1' : Number(b.dataset.i);
      const r = deneKaydet(a, secilen, secilen === (ey === 'hatabul' ? blok.yanlis : blok.dogru));
      if (oturum && location.hash === '#/oturum') oturumXp(r); else gorevHaberi(r.biten);
      if (kb === DERS_KB && dId !== 'yokla') { const n = anlamKanadiIsle(bId, dId); if (n) bildir(`Anlam kanadı: ${n} birim`); }
      ciz({ kaydir: false });
      app.querySelector(`[data-dene="${CSS.escape(a)}"] .dene-aciklama`)?.scrollIntoView({ block: 'nearest' });
      return;
    }
    // Ders alıştırması ve bölüm sonu testi (Görev 5): şıklı türler tıklamayla, yaz türü formla (submit dinleyicisi aşağıda).
    case 'alis': alisCevapla(b.dataset.a, Number(b.dataset.i)); return;
    case 'alis-yeniden': dAlistirmaSifirla(b.dataset.b, b.dataset.d); ciz({ kaydir: false }); document.getElementById('alistirma')?.scrollIntoView({ block: 'start' }); return;
    case 'test-yeniden': dTestSifirla(b.dataset.b); ciz(); return;
    case 'ders-bitti': {
      const kb = b.dataset.k === DERS_KB.id ? DERS_KB : SINAV_KB;
      const bolum = kb.BOLUM.get(b.dataset.b);
      const r = kb === DERS_KB ? dDersOkundu(bolum.id, b.dataset.d) : dersOkundu(bolum.id, b.dataset.d);
      const n = kb === DERS_KB ? anlamKanadiIsle(bolum.id, b.dataset.d) : 0;
      if (r.xp || n) bildir(`Ders okundu${n ? ` · anlam kanadı: ${n} birim` : ''}`, r.xp);
      gorevHaberi(r.biten);
      const sonraki = bolum.dersler[bolum.dersler.findIndex(x => x.id === b.dataset.d) + 1];
      location.hash = sonraki ? `#/${kb.kok}/${bolum.id}/${sonraki.id}` : `#/${kb.kok}/${bolum.id}/ozet`;
      return;
    }
    case 'bolum-test': {
      const bolum = BOLUM.get(b.dataset.b);
      oturumBaslat({ ad: `Bölüm ${bolum.no} testi`, geri: `#/kitap/${bolum.id}`, bolum: bolum.id, adimlar: havuz(bolumSorulari(bolum), 10).map(soruAdimi) });
      return;
    }
    default: break;
  }
  // Oturum eylemleri
  if (oturum && location.hash.startsWith('#/oturum')) {
    const o = oturum;
    const p = o.adimlar[o.i];
    if (ey === 'kapat') {
      if (o.mod === 'sinav' && !o.bitti && !confirm('Deneme sınavından çıkılsın mı? Cevapların kaydedilmez.')) return;
      const geri = o.geri;
      oturum = null;
      location.hash = geri;
      return;
    }
    if (ey === 'sec' && p?.tip === 'soru') {
      if (o.mod === 'pratik' && p.secilen !== null) return;
      p.secilen = Number(b.dataset.sik);
      if (o.mod === 'pratik') oturumXp(cevapKaydet(p.s, p.secilen === p.s.answer));
      ciz({ kaydir: false });
      // Açıklama sayfası alttan açılınca doğru şık görünür kalsın.
      app.querySelector('.sik.dogru')?.scrollIntoView({ block: 'nearest' });
      return;
    }
    if (ey === 'devam' || ey === 'atla' || ey === 'sonraki') {
      if (o.i < o.adimlar.length - 1) { o.i++; ciz(); } else oturumBitir();
      return;
    }
    if (ey === 'onceki') { if (o.i > 0) { o.i--; ciz(); } return; }
    if (ey === 'bitir') {
      const bos = o.adimlar.filter(x => x.tip === 'soru' && x.secilen === null).length;
      if (bos && !confirm(`${bos} soru boş. Sınav bitirilsin mi?`)) return;
      oturumBitir();
      return;
    }
    if (ey === 'ders-tamam' && p?.tip === 'ders') {
      p.okundu = true;
      const r = dersOkundu(p.bolum, p.ders);
      oturumXp(r);
      if (r.xp) bildir('Ders okundu', r.xp);
      if (o.i < o.adimlar.length - 1) { o.i++; ciz(); } else oturumBitir();
      return;
    }
    if (ey === 'kart-cevir') { p.acik = true; dinle(kartBul(p.key)?.code); ciz({ kaydir: false }); return; }
    if (ey === 'kart' && p?.tip === 'kart') {
      p.sonuc = b.dataset.sonuc;
      oturumXp(kartCevap(p.key, p.sonuc));
      if (p.sonuc === 'bilmedim' && !p.tekrar) o.adimlar.push({ ...kartAdimi(p.key), tekrar: true });
      if (o.i < o.adimlar.length - 1) { o.i++; ciz(); } else oturumBitir();
      return;
    }
    if (ey === 'yanlislari-coz') {
      const tekrar = o.adimlar.filter(x => x.tip === 'soru' && x.secilen !== x.s.answer).map(x => x.s);
      oturumBaslat({ ad: 'Yanlışlar', geri: o.geri, adimlar: tekrar.map(soruAdimi) });
      return;
    }
  }
  // Düello eylemleri
  if (duello && location.hash === '#/duello') {
    if (ey === 'kapat') {
      if (!duello.bitti && !confirm('Düellodan çıkılsın mı? Bu düello sayılmaz.')) return;
      duello = null;
      location.hash = '#/arena';
      return;
    }
    if (ey === 'sec') { duelloCevap(Number(b.dataset.sik)); return; }
    if (ey === 'duello-devam') {
      if (duello.i < duello.adimlar.length - 1) { duello.i++; duello.soruBas = Date.now(); ciz(); } else duelloBitir();
      return;
    }
    if (ey === 'rovans') { duelloBaslat(duello.rakip.ad); return; }
    if (ey === 'duello-yanlis') {
      const tekrar = duello.adimlar.filter(p => p.secilen !== p.s.answer).map(p => p.s);
      duello = null;
      oturumBaslat({ ad: 'Düellodaki yanlışlar', geri: '#/arena', adimlar: tekrar.map(soruAdimi) });
    }
  }
});

app.addEventListener('input', e => {
  if (e.target.dataset.eylem === 'ara') {
    kelimeAra = e.target.value;
    kelimeSinir = 40;
    document.getElementById('kelime-listesi').innerHTML = kelimeListesi();
  }
});
app.addEventListener('change', e => {
  const D = durum();
  if (!D) return;
  if (e.target.dataset.eylem === 'ses') { D.ayar.ses = e.target.checked; kaydet(); return; }
  const fg = e.target.closest('#profil-genel');
  if (fg) {
    D.ad = String(new FormData(fg).get('ad') || '').trim();
    kaydet();
    ciz({ kaydir: false });
    bildir('Kaydedildi');
    return;
  }
  const f = e.target.closest('#profil');
  if (f) {
    const v = new FormData(f);
    D.ad = String(v.get('ad') || '').trim();
    D.sinav = { tur: v.get('sinav'), tarih: v.get('tarih') || D.sinav.tarih, hedef: Math.max(40, Math.min(100, Number(v.get('hedef')) || D.sinav.hedef)) };
    kaydet();
    ciz({ kaydir: false });
    bildir('Kaydedildi');
  }
});
// Klavye (masaüstünde gösterirken): A–E ya da 1–5 şık seçer; Enter ilerler; Esc kapatır.
document.addEventListener('keydown', e => {
  if (e.metaKey || e.ctrlKey || e.altKey || e.target.closest('input, textarea, select')) return;
  const yol = location.hash;
  if (!(yol === '#/oturum' || yol === '#/duello')) return;
  const k = HARF.indexOf(e.key.toUpperCase()) >= 0 ? HARF.indexOf(e.key.toUpperCase()) : ['1', '2', '3', '4', '5'].indexOf(e.key);
  if (k >= 0) { app.querySelectorAll('[data-eylem="sec"]:not([disabled])')[k]?.click(); return; }
  if (e.key === 'Enter' && !e.target.closest('button, a')) app.querySelector('[data-eylem="devam"], [data-eylem="duello-devam"], [data-eylem="sonraki"], [data-eylem="kart-cevir"], [data-eylem="ders-tamam"]')?.click();
  else if (e.key === 'Escape') app.querySelector('[data-eylem="kapat"]')?.click();
});
window.addEventListener('hashchange', () => ciz());
if ('speechSynthesis' in window) speechSynthesis.getVoices();
yukle();
if (!location.hash) history.replaceState(null, '', durum() ? '#/bugun' : '#/baslangic');
ciz();
