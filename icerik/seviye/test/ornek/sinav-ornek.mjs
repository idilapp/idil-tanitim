// Geçici örnek seviye sınavı (Dalga 1 Görev 2, 23 Kasım 2026): 5 soru, A1. Yalnız testler ve tanıtımın ?ornek=1 anahtarı yükler;
// uygulamada başka hiçbir yerde görünmez. Gerçek 40 soruluk A1 sonu sınavını Görev 15 yazar (icerik/seviye/index.js sinav alanı).
// Biçim: icerik/seviye/sinav.js SinavSorusu (Ders alıştırması + birimler). Bütün metin özgündür.
// Cevap anahtarı (tarayıcı denemesi için): 1 → B (A ticket.), 2 → "a", 3 → A (This is my room.), 4 → C (I am Ali.), 5 → B (Where is the door?).
export default [
  { tur: 'dinle', ses: 'A ticket, please.', secenekler: ['A passport, please.', 'A ticket, please.', 'A bag, please.'], dogru: 1,
    aciklama: 'Duyduğun *a ticket, please*: bir bilet, lütfen.', birimler: ['en:s:ticket', 'en:s:please'] },
  { tur: 'yaz', soru: 'This is ---- bag.', cevaplar: ['a'], aciklama: 'Tek bir çanta: *a bag*.', birimler: ['en:y:a'] },
  { tur: 'dinle', ses: 'This is my room.', secenekler: ['This is my room.', 'This is your room.', 'This is my door.'], dogru: 0,
    aciklama: 'Duyduğun *this is my room*: burası benim odam.', birimler: ['en:s:my', 'en:s:room'] },
  { tur: 'cevir', tr: 'Ben Ali’yim.', secenekler: ['I is Ali.', 'I are Ali.', 'I am Ali.'], dogru: 2,
    aciklama: '*I* ile *am* gelir: *I am Ali.*', birimler: ['en:y:am-are'] },
  { tur: 'sec', soru: 'Kapıyı arıyorsun. Ne sorarsın?', secenekler: ['Where the door is?', 'Where is the door?', 'Is where the door?'], dogru: 1,
    aciklama: 'Soruda *is* öznenin önüne geçer: *Where is the door?*', birimler: ['en:s:where', 'en:s:door'] },
];
