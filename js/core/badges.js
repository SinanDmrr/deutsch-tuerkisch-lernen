/* Abzeichen (ADR-9) – reine Logik ohne DOM, in Node testbar.
 * IDs sind fest wie Inhalts-IDs: nie ändern, nie wiederverwenden.
 * Verliehen = p.badges[schlüssel] = Zeitstempel; wird NIE entzogen (auch wenn neue Inhalte Prozente senken).
 * scope 'course': pro Kurs (Schlüssel „<kurs>:<id>“), scope 'all': kursübergreifend (Schlüssel „<id>“). */
(function (DT) {
  'use strict';

  // title/hint: [deutsche Oberfläche, türkische Oberfläche] – jeweils frei formuliert, nicht 1:1 übersetzt
  var LIST = [
    { id: 'first-step', scope: 'course', icon: '🌱', test: function (c) { return c.answered >= 1; },
      title: ['Erster Schritt', 'İlk adım'], hint: ['Beantworte deine erste Aufgabe.', 'İlk alıştırmanı çöz.'] },
    { id: 'first-topic', scope: 'course', icon: '📗', test: function (c) { return c.topicsDone >= 1; },
      title: ['Erstes Thema geschafft', 'İlk konu tamam'], hint: ['Löse alle Aufgaben eines Themas richtig.', 'Bir konunun bütün alıştırmalarını doğru çöz.'] },
    { id: 'topics-5', scope: 'course', icon: '📚', test: function (c) { return c.topicsDone >= 5; },
      title: ['Fünf Themen', 'Beş konu'], hint: ['Schließe fünf Themen ab.', 'Beş konuyu bitir.'] },
    { id: 'fixer-10', scope: 'course', icon: '🔧', test: function (c) { return c.fixed >= 10; },
      title: ['Fehler-Profi', 'Hata avcısı'], hint: ['Verbessere zehn Aufgaben, die du zuerst falsch hattest.', 'İlk seferde yanlış yaptığın on alıştırmayı düzelt.'] },
    { id: 'dialog-1', scope: 'course', icon: '💬', test: function (c) { return c.dialogsDone >= 1; },
      title: ['Erstes Gespräch', 'İlk sohbet'], hint: ['Beantworte alle Fragen zu einem Dialog richtig.', 'Bir diyaloğun bütün sorularını doğru cevapla.'] },
    { id: 'dialogs-all', scope: 'course', icon: '🗣️', test: function (c) { return c.dialogsAll > 0 && c.dialogsDone >= c.dialogsAll; },
      title: ['Alltag gemeistert', 'Gündelik hayat cepte'], hint: ['Schließe alle Alltagsdialoge ab.', 'Bütün günlük diyalogları bitir.'] },
    { id: 'words-50', scope: 'course', icon: '🧩', test: function (c) { return c.wordsKnown >= 50; },
      title: ['50 Wörter sicher', '50 kelime oturdu'], hint: ['Bringe 50 Wörter ins Fach „sicher“.', '50 kelimeyi “oturdu” kutusuna taşı.'] },
    { id: 'words-150', scope: 'course', icon: '🧠', test: function (c) { return c.wordsKnown >= 150; },
      title: ['150 Wörter sicher', '150 kelime oturdu'], hint: ['Bringe 150 Wörter ins Fach „sicher“.', '150 kelimeyi “oturdu” kutusuna taşı.'] },
    { id: 'words-a1', scope: 'course', icon: '🏅', test: function (c) { return c.wordsTotal > 0 && c.wordsKnown >= c.wordsTotal; },
      title: ['Alle A1-Wörter', 'Bütün A1 kelimeleri'], hint: ['Alle A1-Wörter sitzen sicher.', 'A1’in bütün kelimeleri otursun.'] },
    { id: 'streak-3', scope: 'all', icon: '🔥', test: function (c) { return c.streak >= 3; },
      title: ['3 Tage am Stück', '3 gün üst üste'], hint: ['Erreiche dein Tagesziel an 3 Tagen in Folge.', 'Günlük hedefine 3 gün üst üste ulaş.'] },
    { id: 'streak-7', scope: 'all', icon: '⭐', test: function (c) { return c.streak >= 7; },
      title: ['Eine ganze Woche', 'Koca bir hafta'], hint: ['7 Tage in Folge – Pausentag inklusive.', '7 gün üst üste – mola günü dahil.'] },
    { id: 'streak-30', scope: 'all', icon: '🏆', test: function (c) { return c.streak >= 30; },
      title: ['Ein Monat dabei', 'Bir ay boyunca'], hint: ['30 Tage in Folge.', '30 gün üst üste.'] },
    { id: 'goal-10', scope: 'all', icon: '🎯', test: function (c) { return c.goalDays >= 10; },
      title: ['Zehn Zieltage', 'On hedef günü'], hint: ['Erreiche an 10 Tagen dein Tagesziel (egal wann).', '10 gün günlük hedefine ulaş (ne zaman olursa).'] },
    { id: 'cert-A1', scope: 'course', icon: '🎓', test: function (c) { return !!(c.cert && c.cert.A1); },
      title: ['A1 abgeschlossen', 'A1 tamamlandı'], hint: ['Erfülle die Bedingungen für das A1-Zertifikat.', 'A1 sertifikasının koşullarını yerine getir.'] }
  ];

  function key(b, cid) { return b.scope === 'course' ? cid + ':' + b.id : b.id; }

  /** Neue Abzeichen vergeben. Gibt die Liste der neu verliehenen Abzeichen-Definitionen zurück. */
  function award(p, cid, ctx, now) {
    p.badges = p.badges || {};
    var fresh = [];
    LIST.forEach(function (b) {
      var k = key(b, cid);
      if (p.badges[k]) return;
      var ok = false;
      try { ok = !!b.test(ctx || {}); } catch (e) { ok = false; }
      if (ok) { p.badges[k] = now || Date.now(); fresh.push(b); }
    });
    return fresh;
  }

  /** Alle Abzeichen mit Status für die Anzeige. */
  function list(p, cid) {
    var have = (p && p.badges) || {};
    return LIST.map(function (b) { return { def: b, at: have[key(b, cid)] || 0 }; });
  }

  DT.badges = { LIST: LIST, key: key, award: award, list: list };
})(window.DT = window.DT || {});
