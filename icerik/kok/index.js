// Sözcük kökleri (18 Kasım 2026): pilotun 10 ailesi bu dosyada, genişlemenin 153 ailesi aileler-1..3.js'te.
// Pilot: 10 Latince kök ailesi, 70 kart sözcüğü (55 + genişlemede uzlaşıyla eklenen 15). Ayrıntı ve denetim: ./README.md.
// Her sözcük üç bağımsız denetimden geçti ve 70 adayın 70'inde aynı karar çıktı. Denetimler: (1) kökü bilerek yazan ajan, iki
// kaynakla (Wiktionary + American Heritage); (2) kökü bilmeden çalışan kör ajan (Wiktionary); (3) Gemini, kör. Codex'in kotası
// doldu; incelemesi sonra yapılacak. Ses benzerliğiyle yanıltan 15 aday elendi; her ailenin `dikkat` alanında yazılı.
// Açıklamalar kendi Türkçemizle yazıldı; kaynak metni kopyalanmadı.
// Biçim: KOKLER[id] = { bicim, dil, kaynak (Latince fiil), anlam, aciklama, dikkat?, sozcukler: { kart sözcüğü: kısa yol } }.

import { AILELER_1 } from './aileler-1.js';
import { AILELER_2 } from './aileler-2.js';
import { AILELER_3 } from './aileler-3.js';

const PILOT = {
  spect: { bicim: 'spect · spic', dil: 'Latince', kaynak: 'specere / spectare', anlam: 'bakmak',
    aciklama: 'Latincede "bakmak" anlamındaki specere fiilinden gelir. Önüne gelen ek, bakışın yönünü söyler: ileri (pro-), geri (re-), içinden (per-).',
    sozcukler: {
      spectator: 'spectare (seyretmek) → seyreden kişi',
      perspective: 'perspicere (içinden bakmak) → bakış açısı',
      prospect: 'prospicere (ileriye bakmak) → beklenti, olasılık',
      respectful: 'respicere (dönüp bakmak, gözetmek) → saygı → saygılı',
      respectively: 'respicere (dönüp bakmak) → her birine ayrı bakarak → sırasıyla',
      conspicuous: 'conspicere (dikkatle bakmak) → göze çarpan',
      species: 'species (görünüş, biçim) → tür',
      specimen: 'specimen (göze görünen işaret, örnek) → örnek, numune',
      specifically: 'species (tür) + facere (yapmak) → specificus (türe özgü) → özellikle',
      speculation: 'specula (gözetleme yeri) → speculari (gözetlemek) → tahmin yürütme, spekülasyon',
    } },
  dict: { bicim: 'dict', dil: 'Latince', kaynak: 'dicere', anlam: 'söylemek',
    aciklama: 'Latincede "söylemek" anlamındaki dicere fiilinden gelir. Önceden söylemek tahmin etmek, karşı söylemek çelişmek olur. Aynı kökten gelen dicare ("ilan etmek, adamak") fiili de bu aileye girer: dedicate, indicator.',
    sozcukler: {
      predict: 'praedicere (önceden söylemek) → tahmin etmek',
      contradict: 'contradicere (karşı söylemek) → çelişmek',
      addictive: 'addicere (hüküm vererek teslim etmek) → kendini bir şeye teslim etmiş → bağımlılık yapan',
      dedicate: 'dedicare (ilan ederek adamak; dicare) → adamak',
      indicator: 'indicare (işaret etmek, göstermek; dicare) → gösterge',
      predicament: 'praedicare (açıkça ilan etmek) → praedicamentum (hakkında söylenen şey) → çıkmaz, zor durum',
    } },
  port: { bicim: 'port', dil: 'Latince', kaynak: 'portare', anlam: 'taşımak',
    aciklama: 'Latincede "taşımak" anlamındaki portare fiilinden gelir. Dışarı taşımak ihracat, öbür yana taşımak nakliye olur.',
    dikkat: 'portion, proportion "pay" anlamındaki portio sözcüğünden gelir; portrait ve portray ise "öne çekmek, çizmek" anlamındaki protrahere fiilinden (tract ailesi). Başlarındaki "port" yalnız bir harf benzerliği.',
    sozcukler: {
      export: 'exportare (dışarı taşımak) → ihraç etmek',
      transport: 'transportare (öbür yana taşımak) → taşımak, nakletmek',
      reportedly: 'reportare (geri taşımak, haber getirmek) → söylendiğine göre',
    } },
  struct: { bicim: 'struct', dil: 'Latince', kaynak: 'struere', anlam: 'kurmak, yığmak',
    aciklama: 'Latincede "kurmak, üst üste yığmak" anlamındaki struere fiilinden gelir. Yapı (structure) bu kökün en bilinen sözcüğüdür.',
    sozcukler: {
      infrastructure: 'infra (alt) + structura (yapı) → altyapı',
      obstruct: 'obstruere (önüne yığmak, set kurmak) → engellemek',
    } },
  duc: { bicim: 'duc · duct', dil: 'Latince', kaynak: 'ducere', anlam: 'götürmek, yönetmek',
    aciklama: 'Latincede "götürmek, yol göstermek" anlamındaki ducere fiilinden gelir. Öne götürmek üretmek, içeri götürmek yol açmak olur.',
    sozcukler: {
      conductor: 'conducere (bir araya götürmek, yönetmek) → şef; iletken',
      deduce: 'deducere (aşağı götürmek, türetmek) → sonuç çıkarmak',
      induce: 'inducere (içeri götürmek) → yol açmak',
      reproduce: 'producere (ortaya çıkarmak) + re- → yeniden üretmek, çoğalmak',
      'mass-produce': 'producere (ortaya çıkarmak) → üretmek; mass "kitle" ayrı bir sözcük',
    } },
  ject: { bicim: 'ject', dil: 'Latince', kaynak: 'iacere', anlam: 'atmak',
    aciklama: 'Latincede "atmak, fırlatmak" anlamındaki iacere fiilinden gelir. İçeri atmak enjekte etmek, ileri atmak yansıtmak olur.',
    sozcukler: {
      inject: 'inicere (içeri atmak) → içine sokmak',
      projection: 'proicere (ileri atmak) → yansıtma, tahmin',
      trajectory: 'traicere (öbür yana atmak) → atılan cismin yolu',
    } },
  tract: { bicim: 'tract', dil: 'Latince', kaynak: 'trahere', anlam: 'çekmek',
    aciklama: 'Latincede "çekmek, sürüklemek" anlamındaki trahere fiilinden gelir. Dışarı çekmek çıkarmak, ayrı yönlere çekmek dikkat dağıtmak olur.',
    sozcukler: {
      extract: 'extrahere (dışarı çekmek) → çıkarmak',
      abstract: 'abstrahere (çekip ayırmak) → soyut',
      distraction: 'distrahere (ayrı yönlere çekmek) → dikkat dağınıklığı',
      portrait: 'protrahere (öne çekmek, ortaya çıkarmak) → portre',
      trace: 'tractus (çekilen çizgi) → iz, iz sürmek',
      trait: 'tractus (çekiş, çizgi) → özellik, nitelik',
      treaty: 'tractare (ele alıp işlemek) → tractatus (görüşülen şey) → antlaşma',
    } },
  scrib: { bicim: 'scrib · script', dil: 'Latince', kaynak: 'scribere', anlam: 'yazmak',
    aciklama: 'Latincede "yazmak" anlamındaki scribere fiilinden gelir. Önceden yazmak reçete etmek, üzerine yazmak yazıt olur.',
    sozcukler: {
      scribe: 'scriba (kâtip) → yazıcı',
      manuscript: 'manu scriptus (elle yazılmış) → el yazması',
      transcribe: 'transcribere (başka yere yazmak) → yazıya geçirmek',
      prescribe: 'praescribere (önceden yazmak, yazılı buyurmak) → reçete etmek',
      inscription: 'inscribere (üzerine yazmak) → yazıt',
      ascribe: 'ascribere (yanına yazmak) → bir nedene bağlamak',
      proscribe: 'proscribere (adını açıkça yazıp ilan etmek) → yasaklamak',
    } },
  vert: { bicim: 'vert · vers', dil: 'Latince', kaynak: 'vertere', anlam: 'çevirmek, döndürmek',
    aciklama: 'Latincede "çevirmek, döndürmek" anlamındaki vertere fiilinden gelir. Ayrı yöne çevrilmiş olan farklıdır (diverse), tamamen çevirmek dönüştürmektir (convert).',
    dikkat: 'overt (Lat. aperire "açmak"), poverty (pauper "yoksul"), overturn (turn: Lat. tornare), overtake, oversight ve nevertheless (Germen kökenli) bu aileden değil.',
    sozcukler: {
      convert: 'convertere (tamamen çevirmek) → dönüştürmek',
      divert: 'divertere (yana çevirmek) → saptırmak',
      diverse: 'diversus (ayrı yönlere dönmüş) → çeşitli',
      biodiversity: 'bio (yaşam) + diversitas (çeşitlilik) → biyolojik çeşitlilik',
      adverse: 'adversus (karşıya dönmüş) → olumsuz, ters',
      aversion: 'avertere (yüz çevirmek) → isteksizlik, tiksinti',
      avert: 'avertere (başka yöne çevirmek) → önlemek',
      controversial: 'controversus (karşıya çevrilmiş) → tartışmalı',
      conversely: 'conversus (ters çevrilmiş) → tersine',
      inadvertently: 'in- (değil) + advertere (dikkatini çevirmek) → farkında olmadan',
      invertebrate: 'in- (yok) + vertebra (dönen eklem, omur) → omurgasız',
      irreversibly: 'ir- (değil) + revertere (geri çevirmek) → geri döndürülemez biçimde',
      universal: 'universus (bire çevrilmiş, bütün) → evrensel',
      versatile: 'versare (döndürüp durmak) → çok yönlü',
    } },
  mit: { bicim: 'mit · miss', dil: 'Latince', kaynak: 'mittere', anlam: 'göndermek, bırakmak',
    aciklama: 'Latincede "göndermek, salıvermek" anlamındaki mittere fiilinden gelir. Dışarı göndermek yaymak (emit), öbür yana göndermek iletmek (transmit) olur.',
    dikkat: 'summit (summus "en yüksek"), mitigate (mitis "yumuşak"), imitate (imitari "taklit etmek"), limitation (limes "sınır") ve proximity (proximus "en yakın") bu aileden değil.',
    sozcukler: {
      transmit: 'transmittere (öbür yana göndermek) → iletmek',
      emit: 'emittere (dışarı göndermek) → yaymak, salmak',
      omit: 'omittere (bırakıp geçmek) → atlamak',
      dismiss: 'dimittere (uzağa göndermek) → kovmak, reddetmek',
      admittedly: 'admittere (içeri bırakmak, kabul etmek) → kabul etmek gerekirse',
      commitment: 'committere (emanet etmek, bağlamak) → bağlılık, taahhüt',
      commission: 'committere (görev vermek) → görev, kurul',
      remission: 'remittere (geri göndermek, gevşetmek) → hafifleme',
      intermittently: 'intermittere (araya boşluk bırakmak) → aralıklı olarak',
      compromise: 'compromittere (karşılıklı söz vermek) → compromissum → uzlaşma',
      demise: 'dimittere (bırakıp göndermek) → devir, sona eriş → ölüm, çöküş',
      premise: 'praemittere (önden göndermek) → praemissa (önce konan) → öncül',
      promising: 'promittere (ileri göndermek, söz vermek) → söz vermek → umut verici',
    } },
};

// Genişleme (18 Kasım 2026): 153 aile daha, üç bağımsız kaynağın uzlaşısıyla (README.md, "Genişleme").
export const KOKLER = { ...PILOT, ...AILELER_1, ...AILELER_2, ...AILELER_3 };
