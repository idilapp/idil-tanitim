// iDil pilot üniteleri (12 Kasım 2026). 13 Kasım'da 3 üniteden 12'ye (../analiz/cogaltma-plani.md), aynı gün 21'e
// (../analiz/cogaltma-2-plani.md) çoğaltıldı.
// Yeni ünite: bu klasöre dosya ekle ve buraya yaz. Sıra: genel, sağlık, fen, sosyal; alan içinde `order`. Biçim: ../README.md.
import genelAliskanlik from './genel-aliskanlik.js';
import genelKervansaray from './genel-kervansaray.js';
import genelGoc from './genel-goc.js';
import genelIsiAdalari from './genel-isi-adalari.js';
import genelMatbaa from './genel-matbaa.js';
import genelDikkat from './genel-dikkat.js';
import saglikUyku from './saglik-uyku.js';
import saglikAntibiyotik from './saglik-antibiyotik.js';
import saglikMikrobiyota from './saglik-mikrobiyota.js';
import saglikKalp from './saglik-kalp.js';
import saglikAsi from './saglik-asi.js';
import fenMercan from './fen-mercan.js';
import fenPil from './fen-pil.js';
import fenOtegezegen from './fen-otegezegen.js';
import fenDeprem from './fen-deprem.js';
import fenTohum from './fen-tohum.js';
import sosyalGobeklitepe from './sosyal-gobeklitepe.js';
import sosyalBaski from './sosyal-baski.js';
import sosyalDiller from './sosyal-diller.js';
import sosyalEkonomi from './sosyal-ekonomi.js';
import sosyalMagara from './sosyal-magara.js';

export const PILOT_UNITS = [
  genelAliskanlik, genelKervansaray, genelGoc, genelIsiAdalari, genelMatbaa, genelDikkat,
  saglikUyku, saglikAntibiyotik, saglikMikrobiyota, saglikKalp, saglikAsi,
  fenMercan, fenPil, fenOtegezegen, fenDeprem, fenTohum,
  sosyalGobeklitepe, sosyalBaski, sosyalDiller, sosyalEkonomi, sosyalMagara,
];
