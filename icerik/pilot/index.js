// iDil pilot üniteleri (12 Kasım 2026). 13 Kasım'da 3 üniteden 12'ye (../analiz/cogaltma-plani.md), aynı gün 21'e
// (../analiz/cogaltma-2-plani.md) çoğaltıldı. 17 Kasım: üçüncü tur, iki dalgada 33 ünite (../analiz/cogaltma-3-plani.md).
// Yeni ünite: bu klasöre dosya ekle ve buraya yaz. Sıra: genel, sağlık, fen, sosyal; alan içinde `order`. Biçim: ../README.md.
import genelAliskanlik from './genel-aliskanlik.js';
import genelKervansaray from './genel-kervansaray.js';
import genelGoc from './genel-goc.js';
import genelIsiAdalari from './genel-isi-adalari.js';
import genelMatbaa from './genel-matbaa.js';
import genelDikkat from './genel-dikkat.js';
import genelBellek from './genel-bellek.js';
import genelKahve from './genel-kahve.js';
import genelPlastik from './genel-plastik.js';
import genelTuring from './genel-turing.js';
import genelAri from './genel-ari.js';
import genelMaraton from './genel-maraton.js';
import genelGulme from './genel-gulme.js';
import genelHarita from './genel-harita.js';
import genelMasal from './genel-masal.js';
// Görev 11 (S1, 22 Kasım 2026): tür dengesi üniteleri (yakın anlam, diyalog, paragraf tamamlama, akışı bozan).
import genelIsHayati from './genel-is-hayati.js';
import genelSeyahat from './genel-seyahat.js';
import genelMutfak from './genel-mutfak.js';
import genelIletisim from './genel-iletisim.js';
import saglikUyku from './saglik-uyku.js';
import saglikAntibiyotik from './saglik-antibiyotik.js';
import saglikMikrobiyota from './saglik-mikrobiyota.js';
import saglikKalp from './saglik-kalp.js';
import saglikAsi from './saglik-asi.js';
import saglikDiyabet from './saglik-diyabet.js';
import saglikAnestezi from './saglik-anestezi.js';
import saglikAlerji from './saglik-alerji.js';
import fenMercan from './fen-mercan.js';
import fenPil from './fen-pil.js';
import fenOtegezegen from './fen-otegezegen.js';
import fenDeprem from './fen-deprem.js';
import fenTohum from './fen-tohum.js';
import fenCrispr from './fen-crispr.js';
import fenCip from './fen-cip.js';
import fenAritma from './fen-aritma.js';
import sosyalGobeklitepe from './sosyal-gobeklitepe.js';
import sosyalBaski from './sosyal-baski.js';
import sosyalDiller from './sosyal-diller.js';
import sosyalEkonomi from './sosyal-ekonomi.js';
import sosyalMagara from './sosyal-magara.js';
import sosyalIpekyolu from './sosyal-ipekyolu.js';
import sosyalDilEdinimi from './sosyal-dil-edinimi.js';
import sosyalKentlesme from './sosyal-kentlesme.js';

import { ALAN_SETLERI } from '../set/index.js';

// Dersler (üniteler) ve 4. turdan beri alan setleri (set: true; ../set/index.js). Yalnız dersler: PILOT_UNITS.filter(u => !u.set).
export const PILOT_UNITS = [
  genelAliskanlik, genelKervansaray, genelGoc, genelIsiAdalari, genelMatbaa, genelDikkat, genelBellek, genelKahve, genelPlastik,
  genelTuring, genelAri, genelMaraton, genelGulme, genelHarita, genelMasal, genelIsHayati, genelSeyahat, genelMutfak, genelIletisim,
  saglikUyku, saglikAntibiyotik, saglikMikrobiyota, saglikKalp, saglikAsi, saglikDiyabet, saglikAnestezi, saglikAlerji,
  fenMercan, fenPil, fenOtegezegen, fenDeprem, fenTohum, fenCrispr, fenCip, fenAritma,
  sosyalGobeklitepe, sosyalBaski, sosyalDiller, sosyalEkonomi, sosyalMagara, sosyalIpekyolu, sosyalDilEdinimi, sosyalKentlesme,
  ...ALAN_SETLERI,
];
