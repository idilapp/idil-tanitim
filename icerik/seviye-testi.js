// iDil seviye testi (3. çoğaltma turu, 17 Kasım 2026; plan: analiz/cogaltma-3-plani.md §6.2).
// Girişte 18 soru, yaklaşık 12 dakika, atlanabilir. Sorular havuzdan seçildi (pilot/*.js kimlikleri), yeni soru yazılmadı;
// hepsi taslak ve kör denetimden geçti. Yalnız tek sorular (parça yok): kelime, dil bilgisi, cümle tamamlama, çeviri, yakın
// anlam, paragraf tamamlama. Her basamakta altı soru; alanlar ve türler dağıtıldı.
//
// Puanlama (basamaklı): bir basamakta 6 sorudan en az 4'ü doğruysa o basamak geçilmiş sayılır; seviye, alttan başlayarak
// kesintisiz geçilen en yüksek basamaktır. B1 geçilemezse "B1'in altı". Tahmini puan aralığı yalnız yön göstermek içindir;
// ÖSYM'nin puanlamasıyla bir bağı yoktur ve uygulamada gerçek çalışma verisiyle hemen güncellenir.
export const SEVIYE_TESTI = {
  basamaklar: [
    { cefr: 'B1', ad: 'B1', sorular: ['gb-k2', 'gc-g2', 'fy-g2', 'gp-t2', 'st-t2', 'sl-c4'] },
    { cefr: 'B2', ad: 'B2', sorular: ['gb-k3', 'si-g1', 'fa-t1', 'fc-c1', 'sc-y1', 'gc-p1'] },
    { cefr: 'C1', ad: 'C1', sorular: ['sc-k1', 'sn-g3', 'sh-t4', 'si-c6', 'gb-y1', 'fy-p2'] },
  ],
  gecme: 4,
  sonuclar: {
    alti: { ad: "B1'in altı", aralik: [20, 40], plan: 'Önce temel dil bilgisi: Ders Kitabı\'nın ilk bölümleri ve günlük kelime tekrarı.' },
    B1: { ad: 'B1', aralik: [40, 55], plan: 'Dil bilgisi ve cümle tamamlama ağırlıklı; okumaya kısa parçalarla başla.' },
    B2: { ad: 'B2', aralik: [55, 75], plan: 'Okuma, çeviri ve paragraf soruları ağırlıklı; zayıf dil bilgisi konularını tekrar et.' },
    C1: { ad: 'C1', aralik: [75, 90], plan: 'Deneme sınavları ve süre çalışması; yanlışlarını hap kartlarıyla kapat.' },
  },
};

// dogruSay: basamak sırasıyla doğru sayıları, ör. [6, 4, 2]. Dönüş: sonuç anahtarı ('alti', 'B1', 'B2', 'C1').
export function seviyeBul(dogruSay, { gecme = SEVIYE_TESTI.gecme } = {}) {
  let sonuc = 'alti';
  for (const [k, b] of SEVIYE_TESTI.basamaklar.entries()) {
    if ((dogruSay[k] || 0) >= gecme) sonuc = b.cefr; else break;
  }
  return sonuc;
}
