// Oyunlu örnek durak: pratik (altı oyun türü) ve hikâyecik içerir. iyi.js (no 3) önceki durak olarak verilir.
// Bu durakta tanıtılan: box, thank-you. Önceki durakta tanıtılan: apple, red, take-the.
const S = { boy: 180, o: [] };
const paz = metin => ({ rol: 'pazarci', metin });
const sen = metin => ({ rol: 'sen', metin });
const anl = metin => ({ rol: 'anlatici', metin });
const sec = (soru, dogruMetin, dogru, birimler) => ({
  tur: 'sec', ses: [paz(soru)], dogruSes: [paz(dogruMetin)], secenek: [S, S, S], dogru, birimler,
});

export default {
  dil: 'en', id: 'oyunlu', no: 4, ad: 'Oyunlu',
  yoklama: [
    sec('Show me the box.', 'Yes, the box.', 0, ['en:s:box']),
    sec('Show me the red box.', 'Yes, the red box.', 1, ['en:s:box', 'en:s:red']),
    sec('Take the box.', 'Yes, the box.', 2, ['en:s:box', 'en:k:take-the']),
  ],
  sayfalar: [
    { tur: 'gor', ses: [paz('Box. A box.')], S, yeni: 'en:s:box' },
    { tur: 'gor', ses: [paz('Take the box.'), sen('Thank you.')], S, yeni: 'en:k:thank-you', degisen: 'eylem' },
    sec('Take the box.', 'Yes. The box.', 1, ['en:s:box']),
    { tur: 'yazi', birimler: ['en:s:box', 'en:k:thank-you'] },
  ],
  pratik: [
    sec('Take the red apple.', 'Yes. The red apple.', 2, ['en:s:apple', 'en:s:red']),
    {
      tur: 'eslestir',
      ciftler: [
        { ses: [anl('Apple.')], S, birim: 'en:s:apple' },
        { ses: [anl('Red.')], S, birim: 'en:s:red' },
        { ses: [anl('Box.')], S, birim: 'en:s:box' },
        { ses: [anl('Thank you.')], S, birim: 'en:k:thank-you' },
      ],
    },
    {
      tur: 'sirala', ses: [paz('Take the red apple.')],
      parcalar: ['Take', 'the', 'red', 'apple.'], birimler: ['en:k:take-the', 'en:s:red', 'en:s:apple'],
    },
    {
      tur: 'bosluk', ses: [paz('Take the red apple.')], metin: 'Take the red ___.',
      secenek: [S, S, S], dogru: 0, birimler: ['en:s:apple'],
    },
    {
      tur: 'nederdin', S, secenekSes: [[paz('Take the box.')], [sen('Thank you.')], [anl('Red.')]],
      dogru: 1, birimler: ['en:k:thank-you'],
    },
    {
      tur: 'hizli', sure: 60,
      sorular: [
        sec('Apple.', 'Apple.', 0, ['en:s:apple']),
        sec('Red.', 'Red.', 1, ['en:s:red']),
        sec('Box.', 'Box.', 2, ['en:s:box']),
        sec('Thank you.', 'Thank you.', 0, ['en:k:thank-you']),
        sec('Take the apple.', 'Take the apple.', 1, ['en:k:take-the', 'en:s:apple']),
        sec('A red box.', 'A red box.', 2, ['en:s:red', 'en:s:box']),
        sec('Take the red box.', 'Take the red box.', 0, ['en:k:take-the', 'en:s:red', 'en:s:box']),
        sec('The red apple.', 'The red apple.', 1, ['en:s:red', 'en:s:apple']),
      ],
    },
  ],
  hikayeler: [
    {
      id: 'kutu', ad: 'The box',
      sayfalar: [
        { tur: 'gor', ses: [paz('A box. A red box.')], S },
        { tur: 'gor', ses: [paz('Take the box.'), sen('Thank you.')], S },
        sec('Take the red box.', 'Yes. The red box.', 0, ['en:s:red', 'en:s:box', 'en:k:take-the']),
      ],
      sorular: [
        sec('The red box?', 'Yes. The red box.', 1, ['en:s:red', 'en:s:box']),
        sec('Take the apple.', 'Yes. The apple.', 2, ['en:k:take-the', 'en:s:apple']),
        sec('Thank you.', 'Thank you.', 0, ['en:k:thank-you']),
      ],
    },
  ],
};
