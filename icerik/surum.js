// iDil sürüm numarası ve sürüm notları (kurucu isteği, 23 Kasım 2026): tek kaynak. Uygulama (durum çubuğu, Profil, #/surum) ve
// Yolculuk oynatıcısı buradan okur. Kural icerik/README.md "Sürüm" bölümünde: v0.x test dönemi; ortadaki hane ciddi yeni özellik
// ya da büyük içerik, son hane düzeltme ve küçük iyileştirme. Siteye giden her yüklemeden önce numara artırılır ve notu yazılır.
// Notlar kullanıcının anlayacağı dille, kısa; en yeni sürüm başta.
export const SURUM = '0.2.0';
export const SURUM_TARIHI = '2026-11-23';
export const SURUM_NOTLARI = [
  {
    surum: '0.2.0', tarih: '2026-11-23', notlar: [
      'Öğretmen yönlendirmesi: Bugün ekranında tek bir "şimdi" adımı, parça sonlarında "Şimdi: …" geçişi.',
      'Yolculuk’ta yazılış ve okunuş balonu; istersen "Aa" ile kapatırsın.',
      'Yanlış seçtiğin cevap kırmızı çerçeveyle görünür.',
      'Kelime kartının arka yüzü: anlam, sözcük ailesi, kısa soru ve ses.',
      'A1 sonu sınavı ekranı ve A2 kapısı.',
      'Barınma ve Pazar duraklarında pratik oyunları ve hikâyecikler.',
      'Ders bölüm 2–12’de alıştırmalar ve bölüm testleri.',
      'Tam deneme 6–9.',
      'Sürüm numarası ve "Neler değişti" sayfası.',
    ],
  },
  {
    surum: '0.1.0', tarih: '2026-11-22', notlar: [
      'İlk deneme sürümü: Genel İngilizce pilotu ve Sınav hazırlığının ilk adımı.',
      'Varış durağı, pratik oyunları ve hikâyecikleriyle.',
      'Ders Bölüm 1 alıştırmaları.',
      'Yolum ekranı ve ilerleme.',
      'Sınavda zayıf nokta haritası.',
      'Tam deneme 1–5.',
      '750 yeni kelime kartı.',
      'Soru türlerini dengeleyen üniteler.',
    ],
  },
];
export const surumYazisi = () => `v${SURUM}`;
