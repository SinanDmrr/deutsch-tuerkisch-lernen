/* TEST-FIXTURE (nicht in index.html, nicht im Inhalt): Rollenspiel-Dialoge mit Wahlzeilen für Validator-/Browsertests von Schritt 6 (ADR-12.6).
 * Browsertest: per page.route in index.html vor js/app.js einfügen (Vorbild tools/fixtures/cloze-sort-test.js).
 * IDs d91 liegen absichtlich außerhalb des echten Inhalts. Erklärungen/why/n/role stehen in der Erklärsprache (de-Kurs: Türkisch, tr-Kurs: Deutsch).
 * Format Wahlzeile: { me:true, id:'<dialogId>.c<n>', o:[2–4 Optionen in der Zielsprache], a:Index, why:{ Index: warum falsch – für JEDE falsche Option }, e, n:'Übersetzung der richtigen Zeile' }
 * (kein t – gesprochen wird o[a]); Dialog braucht role (Erklärsprache), optional roleG; 3–4 Wahlzeilen; normale Zeilen brauchen s, g, t, n. */
(function (K) {
  K.addDialog('de-a2-d91', { level: 'A2', title: 'Termin beim Arzt verschieben', sub: 'Doktor randevusunu ertelemek', role: 'Hasta', roleG: 'f', lines: [
    { s: 'Praxis', g: 'f', t: 'Praxis Dr. Weber, guten Tag.', n: 'Dr. Weber muayenehanesi, iyi günler.' },
    { me: true, id: 'de-a2-d91.c1', o: ['Guten Tag, hier ist Yılmaz. Ich möchte meinen Termin verschieben.', 'Hallo, ich will meinen Termin weg.', 'Guten Tag, Sie verschieben meinen Termin.'], a: 0,
      why: { 1: 'Telefonda çok kaba ve belirsiz: „weg“ burada anlamsız, „will“ de emir gibi durur.', 2: '„Sie verschieben“ = karşıdaki kişi randevuyu erteliyor. Kendi isteğini „ich möchte … verschieben“ ile söylersin.' },
      e: 'Telefonda önce kendini tanıt, sonra nazik kal: „Ich möchte …“ (istiyorum, kibar form).', n: 'İyi günler, ben Yılmaz. Randevumu ertelemek istiyorum.' },
    { s: 'Praxis', g: 'f', t: 'Gern. Passt Ihnen Donnerstag um zehn Uhr?', n: 'Tabii. Perşembe saat ona uyar mı?' },
    { me: true, id: 'de-a2-d91.c2', o: ['Ja, das passt mir gut. Vielen Dank.', 'Nee, Donnerstag geht gar nicht.', 'Ja, das passt dich gut.'], a: 0,
      why: { 1: 'Cevap mümkün ama burada kibarlık eksik ve alternatif de sunmuyor; „gar nicht“ sert kaçıyor.', 2: '„passen“ Dativ ister: „mir“, „dich“ değil.' },
      e: '„Das passt mir“ – passen + Dativ. „Vielen Dank“ ile kibar bir son.', n: 'Evet, bana uyar. Çok teşekkürler.' },
    { s: 'Praxis', g: 'f', t: 'Sehr gut. Bitte bringen Sie Ihre Versichertenkarte mit.', n: 'Çok iyi. Lütfen sigorta kartınızı getirin.' },
    { me: true, id: 'de-a2-d91.c3', o: ['Mach ich, danke. Auf Wiederhören!', 'Ja, ich bringe sie mit. Auf Wiederhören!', 'Ja, ich bringe sie mit. Auf Wiedersehen!'], a: 1,
      why: { 0: '„Mach ich“ arkadaş arasında olur; muayenehaneyle konuşurken fazla rahat.', 2: 'Telefonu kapatırken „Auf Wiedersehen“ yerine „Auf Wiederhören“ denir (görüşme yok, sadece duyuş).' },
      e: 'Telefonda vedalaşma: „Auf Wiederhören“. Kibar cevap: tam cümle.', n: 'Evet, getiririm. Hoşça kalın!' }
  ], questions: [
    { id: 'de-a2-d91.1', t: 'mc', q: 'Was will die Patientin?', o: ['Einen Termin verschieben', 'Einen Termin absagen', 'Ein Rezept holen'], a: 0, why: { 1: 'Sie sagt nicht ab, sie verschiebt.', 2: 'Von einem Rezept ist keine Rede.' }, e: 'Sie möchte den Termin verschieben.' }
  ] });
  K.addDialog('tr-a2-d91', { level: 'A2', title: 'Im Café bestellen', sub: 'Kafede sipariş vermek', role: 'Gast', roleG: 'm', lines: [
    { s: 'Kellner', g: 'm', t: 'Hoş geldiniz, ne arzu edersiniz?', n: 'Willkommen, was darf es sein?' },
    { me: true, id: 'tr-a2-d91.c1', o: ['Bir çay ve bir su alabilir miyim?', 'Bana çay ver, su da.', 'Bir çay istiyorsun.'], a: 0,
      why: { 1: 'Befehlsform „ver“ ist zu direkt – beim Kellner wirkt das unhöflich.', 2: '„istiyorsun“ ist die Form für „du willst“; du sprichst von dir: „istiyorum“.' },
      e: 'Höflich bestellen: „… alabilir miyim?“ (Darf ich … haben?).', n: 'Darf ich einen Tee und ein Wasser haben?' },
    { s: 'Kellner', g: 'm', t: 'Tabii. Şekerli mi olsun?', n: 'Gern. Mit Zucker?' },
    { me: true, id: 'tr-a2-d91.c2', o: ['Hayır, şekersiz olsun, teşekkür ederim.', 'Hayır, şeker yok senin.', 'Hayır, şekersiz ol.'], a: 0,
      why: { 1: 'Das ist grammatisch und im Ton falsch („senin“ gehört hier nicht hin).', 2: '„ol“ ist ein Befehl an eine Person; für die Bestellung braucht man „olsun“ (soll sein).' },
      e: '„-siz“ = ohne. „olsun“ = es soll sein; so bestellt man höflich.', n: 'Nein, bitte ohne Zucker, danke.' },
    { s: 'Kellner', g: 'm', t: 'Başka bir şey ister misiniz?', n: 'Möchten Sie noch etwas?' },
    { me: true, id: 'tr-a2-d91.c3', o: ['Hayır, hesabı alabilir miyim?', 'Hayır, hesap ver.', 'Hayır, hesabı alırım sen.'], a: 0,
      why: { 1: 'Zu direkt als Befehl; höflich fragt man mit „alabilir miyim?“.', 2: 'Satzbau falsch: „sen“ steht hier nicht am Ende.' },
      e: 'Zum Bezahlen: „Hesabı alabilir miyim?“ – freundlich und üblich.', n: 'Nein, könnte ich bitte die Rechnung haben?' }
  ], questions: [
    { id: 'tr-a2-d91.1', t: 'mc', q: 'Was bestellt der Gast?', o: ['Tee und Wasser', 'Kaffee', 'Nur Wasser'], a: 0, why: { 1: 'Kaffee wird nicht erwähnt.', 2: 'Er bestellt Tee und Wasser.' }, e: 'Çay ve su.' }
  ] });
})(window.KOPRU);
