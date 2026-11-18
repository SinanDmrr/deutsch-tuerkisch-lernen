/* Deutsch ⇄ Türkçe – App-Logik (Vanilla JS, keine Abhängigkeiten).
 * Fortschritt wird pro Profil im localStorage gespeichert (Schlüssel „kopru.v1“).
 */
(function () {
  'use strict';
  var K = window.KOPRU;
  var STORE = 'dt-data';            // Hauptspeicher (eigener Präfix „dt-“, gleiche Domain wie andere GitHub-Pages-Seiten)
  var BACKUP = 'dt-backup';          // Kopie vor jedem App-Update / jeder Migration
  var LEGACY_KEYS = ['kopru.v1'];    // frühere Schlüssel, werden einmalig übernommen
  var SCHEMA = 2;                    // Version des Speicherformats
  var APP_VERSION = '2026-11-18.1';  // bei jedem Release erhöhen (auch in index.html ?v=…)
  var LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  var app = document.getElementById('app');

  /* ================= Texte der Oberfläche (de = deutsche UI, tr = türkische UI) ================= */
  var T = {
    dashboard: ['Dashboard', 'Panel'],
    lessons: ['Lektionen', 'Dersler'],
    gaps: ['Meine Lücken', 'Eksiklerim'],
    overview: ['Gesamtüberblick', 'Genel bakış'],
    settings: ['Einstellungen', 'Ayarlar'],
    hello: ['Hallo', 'Merhaba'],
    dashIntro: ['Hier siehst du, wie weit du auf jedem Niveau bist.', 'Her seviyede ne kadar ilerlediğini burada görürsün.'],
    levelProgress: ['Fortschritt nach Niveau', 'Seviyelere göre ilerleme'],
    continueLearning: ['Weiterlernen', 'Devam et'],
    startHere: ['Hier geht es los', 'Buradan başla'],
    start: ['Starten', 'Başla'],
    allDone: ['Alle verfügbaren Themen sind erledigt – stark! Neue Inhalte folgen.', 'Mevcut tüm konular tamam – harika! Yeni içerikler geliyor.'],
    tasks: ['Aufgaben', 'alıştırma'],
    solved: ['richtig gelöst', 'doğru çözüldü'],
    accuracy: ['Trefferquote 1. Versuch', 'İlk denemede başarı'],
    openMistakes: ['Offene Fehler', 'Açık hatalar'],
    correct: ['richtig', 'doğru'],
    wrong: ['falsch', 'yanlış'],
    open: ['offen', 'açık'],
    comingSoon: ['Inhalte folgen', 'İçerik yakında'],
    planned: ['in Vorbereitung', 'hazırlanıyor'],
    explanation: ['Erklärung', 'Konu anlatımı'],
    exercises: ['Übungen', 'Alıştırmalar'],
    review: ['Fehler wiederholen', 'Hataları tekrarla'],
    vocab: ['Wortschatz', 'Kelimeler'],
    examples: ['Beispiele', 'Örnekler'],
    toExercises: ['Zu den Übungen →', 'Alıştırmalara geç →'],
    check: ['Lösung prüfen', 'Cevabı kontrol et'],
    next: ['Weiter →', 'Devam →'],
    finish: ['Abschließen', 'Bitir'],
    skip: ['Überspringen', 'Atla'],
    yourAnswer: ['Deine Antwort', 'Senin cevabın'],
    rightAnswer: ['Richtige Lösung', 'Doğru cevap'],
    whyWrong: ['Warum ist deine Antwort falsch?', 'Cevabın neden yanlış?'],
    whyRight: ['Warum ist das die richtige Lösung?', 'Doğru cevap neden bu?'],
    great: ['Richtig! 🎉', 'Doğru! 🎉'],
    notQuite: ['Leider falsch', 'Maalesef yanlış'],
    specialChars: ['Fast! Achte auf die türkischen Sonderzeichen (ı, ş, ç, ğ, ö, ü) und den Apostroph.', 'Neredeyse! Almancadaki özel harflere dikkat et (ä, ö, ü, ß).'],
    caseHint: ['Fast! Achte auf Groß- und Kleinschreibung.', 'Neredeyse! Büyük-küçük harfe dikkat et.'],
    genericWrong: ['Deine Antwort passt nicht zur Regel – lies die Erklärung darunter genau.', 'Cevabın kurala uymuyor – aşağıdaki açıklamayı dikkatlice oku.'],
    typeHere: ['Antwort …', 'Cevap …'],
    orderHint: ['Tippe die Wörter in der richtigen Reihenfolge an. Antippen im Feld entfernt ein Wort wieder.', 'Kelimelere doğru sırayla dokun. Kutudaki kelimeye dokunursan geri alınır.'],
    orderEmpty: ['Hier entsteht dein Satz …', 'Cümlen burada oluşacak …'],
    matchHint: ['Wähle zu jedem Begriff die passende Übersetzung.', 'Her kelime için doğru karşılığı seç.'],
    choose: ['– wählen –', '– seç –'],
    question: ['Aufgabe', 'Alıştırma'],
    of: ['von', '/'],
    summaryTitle: ['Kapitel abgeschlossen', 'Bölüm tamamlandı'],
    reviewDoneTitle: ['Wiederholung beendet', 'Tekrar tamamlandı'],
    summaryText: ['{c} von {n} Aufgaben sind richtig.', '{n} alıştırmadan {c} tanesi doğru.'],
    stillOpen: ['{n} Fehler sind noch offen.', '{n} hata hâlâ açık.'],
    reviewNow: ['Fehler jetzt wiederholen', 'Hataları şimdi tekrarla'],
    redoAll: ['Alle Aufgaben nochmal', 'Hepsini tekrar çöz'],
    backToLessons: ['Zur Lektionsübersicht', 'Ders listesine dön'],
    nextTopic: ['Nächstes Thema →', 'Sonraki konu →'],
    noMistakes: ['Keine offenen Fehler – super! 💪', 'Açık hata yok – harika! 💪'],
    noMistakesTopic: ['In diesem Kapitel gibt es keine offenen Fehler.', 'Bu bölümde açık hata yok.'],
    gapsIntro: ['Hier landet jede Aufgabe, die du falsch beantwortet hast – mit deiner Antwort und der richtigen Lösung. Sobald du sie richtig löst, verschwindet sie.', 'Yanlış cevapladığın her alıştırma burada toplanır – senin cevabın ve doğru cevapla birlikte. Doğru çözdüğünde listeden kalkar.'],
    practiceAll: ['Alle Fehler üben', 'Tüm hataları çalış'],
    practiceTopic: ['Üben', 'Çalış'],
    problemAreas: ['Deine Problemstellen', 'Zorlandığın konular'],
    problemIntro: ['Themen, bei denen du beim ersten Versuch am häufigsten falsch lagst.', 'İlk denemede en çok hata yaptığın konular.'],
    errorRate: ['Fehlerquote', 'Hata oranı'],
    lastWrong: ['Zuletzt', 'Son cevabın'],
    solution: ['Lösung', 'Doğrusu'],
    times: ['× falsch', '× yanlış'],
    overviewIntro: ['Alle Themen auf einen Blick: wie viel davon ist richtig, falsch oder noch offen.', 'Tüm konular bir bakışta: ne kadarı doğru, yanlış ya da açık.'],
    topic: ['Thema', 'Konu'],
    total: ['Gesamt', 'Toplam'],
    totalProgress: ['Gesamtfortschritt (A1–C2)', 'Genel ilerleme (A1–C2)'],
    theme: ['Darstellung', 'Görünüm'],
    light: ['☀️ Hell', '☀️ Açık'],
    dark: ['🌙 Dunkel', '🌙 Koyu'],
    system: ['🖥️ System', '🖥️ Sistem'],
    course: ['Kurs', 'Kurs'],
    profiles: ['Profile auf diesem Gerät', 'Bu cihazdaki profiller'],
    profilesIntro: ['Jedes Profil hat seinen eigenen Fortschritt – praktisch, wenn mehrere Personen dasselbe Gerät nutzen.', 'Her profilin kendi ilerlemesi vardır – aynı cihazı birden fazla kişi kullanıyorsa pratik.'],
    newProfile: ['Neues Profil', 'Yeni profil'],
    namePh: ['Name', 'İsim'],
    create: ['Anlegen', 'Oluştur'],
    switchTo: ['Wechseln', 'Geç'],
    del: ['Löschen', 'Sil'],
    active: ['aktiv', 'aktif'],
    data: ['Daten & Sicherung', 'Veriler ve yedek'],
    storageNote: ['Dein Fortschritt wird nur lokal in diesem Browser gespeichert. Mit Export/Import kannst du ihn auf ein anderes Gerät mitnehmen.', 'İlerlemen sadece bu tarayıcıda saklanır. Dışa/içe aktar ile başka bir cihaza taşıyabilirsin.'],
    exportBtn: ['⬇️ Exportieren', '⬇️ Dışa aktar'],
    importBtn: ['⬆️ Importieren', '⬆️ İçe aktar'],
    resetCourse: ['Fortschritt dieses Kurses löschen', 'Bu kursun ilerlemesini sil'],
    confirmReset: ['Wirklich den gesamten Fortschritt dieses Kurses löschen?', 'Bu kurstaki tüm ilerleme silinsin mi?'],
    confirmDelete: ['Profil „{n}“ wirklich löschen?', '“{n}” profili silinsin mi?'],
    clickAgain: ['→ zum Bestätigen nochmal klicken', '→ onaylamak için tekrar tıkla'],
    imported: ['Fortschritt importiert ✔', 'İlerleme içe aktarıldı ✔'],
    importFail: ['Datei konnte nicht gelesen werden.', 'Dosya okunamadı.'],
    switched: ['Kurs gewechselt', 'Kurs değiştirildi'],
    listen: ['Anhören', 'Dinle'],
    themeToggle: ['Hell/Dunkel umschalten', 'Açık/koyu tema'],
    courseToggle: ['Kurs wechseln', 'Kursu değiştir'],
    newBadge: ['neu', 'yeni'],
    doneBadge: ['fertig', 'bitti'],
    mistakesBadge: ['Fehler', 'hata'],
    footer: ['Türkisch lernen · Dein Fortschritt bleibt in deinem Browser', 'Almanca Öğren · İlerlemen tarayıcında kalır'],
    fromAllTopics: ['Fehler aus allen Themen', 'Tüm konulardan hatalar'],
    mixedPractice: ['Fehlertraining', 'Hata çalışması'],
    goLessons: ['Zu den Lektionen', 'Derslere git'],
    // Deutsche Texte (Kurs „Türkisch lernen“) und türkische Texte (Kurs „Almanca Öğren“) – bewusst frei formuliert, nicht 1:1 übersetzt
    mascotNew: ['Hallo, ich bin Lingo! Schön, dass du da bist – lass uns mit der ersten Lektion starten. Türkisch, wir kommen!',
      'Merhaba, ben Lingo! Hoş geldin – hadi ilk dersle başlayalım. Almanca seni bekliyor!'],
    mascotToday: ['Du hast heute schon gelernt – klasse! Wenn du so weitermachst, sprichst du Türkisch im Handumdrehen. 👍',
      'Bugün de çalıştın, helal olsun! Böyle devam edersen Almancayı su gibi konuşacaksın. 👍'],
    mascotYesterday: ['Du hast gestern schon gelernt – super, dass du heute wieder da bist! Weiter so, dann kannst du Türkisch im Handumdrehen. 👍',
      'Dün de çalışmışsın, bugün yine buradasın – süpersin! Bu tempoyla Almancayı kısa sürede kaparsın. 👍'],
    mascotDays: ['Hi, schön, dich wieder hier zu sehen! Dein letztes Training ist {n} Tage her – super, dass du weiterlernen willst. Bleib dran, dann lernst du ganz schnell Türkisch.',
      'Selam, seni yeniden görmek ne güzel! Son çalışmanın üzerinden {n} gün geçti. Devam etmek istemen harika – azimle sürdür, Almancayı çok çabuk öğreneceksin.'],
    mascotSad: ['Oh … da bist du ja wieder. Dein letztes Training ist schon {n} Tage her – ich hab dich echt vermisst! 🥺 Lass uns heute wenigstens eine kleine Runde machen, sonst rostet dein Türkisch ein.',
      'Ah, sonunda geldin… Son çalışmanın üzerinden tam {n} gün geçmiş, seni çok özledim! 🥺 Hadi bugün küçük bir tur yapalım, yoksa Almancan paslanacak.'],
    lastLearned: ['Zuletzt gelernt', 'Son çalışma'],
    voiceTitle: ['Vorlesen', 'Sesli okuma'],
    voiceFor: ['Stimme für Türkisch', 'Almanca için ses'],
    voiceTip: ['★ = automatisch gewählt (die natürlichste gefundene Stimme). Am besten klingen „Natural/Online“-Stimmen in Microsoft Edge oder Google-Stimmen in Chrome.', '★ = otomatik seçilen (bulunan en doğal ses). En iyi sonucu Microsoft Edge’deki “Natural/Online” sesler veya Chrome’daki Google sesleri verir.'],
    voiceMissing: ['Keine türkische Stimme gefunden', 'Almanca ses bulunamadı'],
    noSpeech: ['Dieser Browser kann nicht vorlesen.', 'Bu tarayıcı sesli okuma desteklemiyor.'],
    test: ['Testen', 'Dene'],
    speakQ: ['Sprich den Satz laut nach.', 'Cümleyi yüksek sesle tekrarla.'],
    speakNow: ['Jetzt sprechen', 'Şimdi konuş'],
    listening: ['Ich höre zu …', 'Dinliyorum …'],
    recognized: ['Erkannt', 'Algılanan'],
    micDenied: ['Mikrofon nicht erlaubt – bitte im Browser freigeben.', 'Mikrofona izin verilmedi – lütfen tarayıcıdan izin ver.'],
    micNoSpeech: ['Nichts gehört – versuch es noch einmal, etwas lauter.', 'Bir şey duyamadım – biraz daha yüksek sesle tekrar dene.'],
    noMic: ['Dein Browser kann keine Sprache erkennen (z. B. Firefox). Sprich den Satz trotzdem laut nach und bestätige.', 'Tarayıcın konuşmayı algılayamıyor (ör. Firefox). Cümleyi yine de yüksek sesle söyle ve onayla.'],
    saidAloud: ['Ich habe es laut gesagt', 'Yüksek sesle söyledim'],
    speakAlmost: ['Fast! Hör dir die Aussprache noch einmal an und sprich langsam und deutlich.', 'Neredeyse! Telaffuzu bir kez daha dinle, yavaş ve net konuş.'],
    speakRetry: ['Das wurde noch nicht erkannt. Hör zuerst zu (🐢 hilft) und versuche es noch einmal.', 'Henüz algılanmadı. Önce dinle (🐢 yardımcı olur) ve tekrar dene.'],
    tryAgain: ['Nochmal sprechen', 'Tekrar konuş'],
    playDialog: ['Ganzen Dialog anhören', 'Tüm diyaloğu dinle'],
    translation: ['Übersetzung', 'Çeviri'],
    dialogTip: ['Tipp: Erst anhören und mitlesen, dann die Übersetzung einblenden. Mit 🔊 hörst du jede Zeile einzeln.', 'İpucu: Önce dinleyip takip et, sonra çeviriyi aç. 🔊 ile her satırı ayrı dinleyebilirsin.'],
    toQuestions: ['Zu den Fragen →', 'Sorulara geç →'],
    dialogsTitle: ['Alltagsdialoge', 'Günlük diyaloglar'],
    dialogTab: ['Dialog', 'Diyalog'],
    play: ['Anhören', 'Dinle'],
    slow: ['Langsam', 'Yavaş'],
    listenQ: ['Was hörst du?', 'Ne duyuyorsun?'],
    dictationQ: ['Hör zu und schreib, was du hörst.', 'Dinle ve duyduğunu yaz.'],
    typeWhatYouHear: ['Was hörst du?', 'Duyduğunu yaz …'],
    heard: ['Zu hören war', 'Okunan'],
    voiceAuto: ['Automatisch', 'Otomatik'],
    piperInfo: ['Beispiele, Vokabeln und Lösungen werden mit Open-Source-Stimmen (Piper) vorgelesen – auf jedem Gerät gleich:', 'Örnekler, kelimeler ve cevaplar açık kaynak seslerle (Piper) okunur – her cihazda aynı:'],
    piperMissing: ['Die Open-Source-Audiodateien werden gerade erzeugt oder sind nicht erreichbar – bis dahin wird die Gerätestimme genutzt.', 'Açık kaynak ses dosyaları şu an hazırlanıyor veya erişilemiyor – o zamana kadar cihaz sesi kullanılır.'],
    samples: ['Hörproben', 'Ses örnekleri'],
    deviceVoice: ['Gerätestimme (für alles andere)', 'Cihaz sesi (diğer her şey için)'],
    female: ['Weiblich', 'Kadın'],
    male: ['Männlich', 'Erkek'],
    notInstalled: ['Auf diesem Gerät nicht installiert', 'Bu cihazda yüklü değil'],
    genderMissing: ['Für dieses Geschlecht ist hier keine passende Stimme installiert – es wird die beste verfügbare genutzt.', 'Bu cinsiyet için uygun ses yüklü değil – mevcut en iyi ses kullanılıyor.'],
    testSentence: ['Merhaba! Her gün biraz Türkçe öğreniyorum.', 'Guten Tag! Ich lerne jeden Tag ein bisschen Deutsch.']
  };

  /* ================= Speicher ================= */
  /* ---------- Aufgaben-Index: feste ID → Thema/Aufgabe ---------- */
  // Alltagsdialoge werden wie Themen behandelt (eigene Statistik, Fehlerwiederholung, Überblick)
  Object.keys(K.dialogs || {}).forEach(function (id) {
    var d = K.dialogs[id];
    K.content[id] = { kind: 'dialog', dialog: d, exercises: d.questions || [] };
  });
  var EXI = {};
  Object.keys(K.content).forEach(function (tid) {
    (K.content[tid].exercises || []).forEach(function (ex, i) {
      if (!ex.id) { ex.id = tid + '#' + i; if (window.console) console.warn('Aufgabe ohne feste ID:', tid, i); }
      if (EXI[ex.id] && window.console) console.error('Doppelte Aufgaben-ID:', ex.id);
      EXI[ex.id] = { topicId: tid, idx: i, ex: ex };
    });
  });

  /* ---------- Laden, Migrieren, Sichern ----------
   * Grundsatz: Gespeicherter Fortschritt wird NIE gelöscht oder überschrieben, nur ergänzt bzw. umbenannt.
   * Einträge zu Aufgaben, die es (noch) nicht gibt, bleiben erhalten und werden nur nicht gezählt. */
  function rawGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function rawSet(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } }
  var storageBroken = false;
  var db = load();
  function emptyDb() { return { v: SCHEMA, app: APP_VERSION, theme: 'system', active: null, profiles: {} }; }
  function load() {
    var raw = rawGet(STORE), d = null, migrated = false;
    if (raw) {
      try { d = JSON.parse(raw); } catch (e) {
        // Beschädigte Daten nicht überschreiben, sondern beiseitelegen
        rawSet('dt-corrupt-' + Date.now(), raw); storageBroken = true;
      }
    }
    if (!d) {
      for (var i = 0; i < LEGACY_KEYS.length && !d; i++) {
        var old = rawGet(LEGACY_KEYS[i]);
        if (old) { try { d = JSON.parse(old); migrated = true; } catch (e) { /* ignore */ } }
      }
    }
    if (!d || !d.profiles) return emptyDb();
    if ((d.v || 1) < SCHEMA || d.app !== APP_VERSION) rawSet(BACKUP, JSON.stringify(d));  // Sicherung vor Änderungen
    d = migrate(d);
    d.app = APP_VERSION;
    if (migrated || raw !== JSON.stringify(d)) rawSet(STORE, JSON.stringify(d));
    return d;
  }
  function migrate(d) {
    var v = d.v || 1;
    if (v < 2) {
      // v1 → v2: Fortschritt war an der Position („thema#3“) gespeichert, jetzt an der festen Aufgaben-ID
      Object.keys(d.profiles || {}).forEach(function (pid) {
        var pr = d.profiles[pid].prog || {};
        Object.keys(pr).forEach(function (cid) {
          var src = pr[cid] || {}, dst = {};
          Object.keys(src).forEach(function (key) {
            // Die IDs wurden beim Umstieg genau als „thema.(position+1)“ vergeben – die Zuordnung ist also fest
            // und hängt NICHT von der aktuellen Reihenfolge ab (auch wenn jemand erst nach vielen Updates zurückkommt).
            var m = /^([a-z]{2}-[a-z0-9]{2}-\d{2})#(\d+)$/.exec(key);
            dst[m ? m[1] + '.' + (+m[2] + 1) : key] = src[key];
          });
          pr[cid] = dst;
        });
      });
      v = 2;
    }
    // künftige Migrationen hier anhängen: if (v < 3) { … v = 3; }
    d.v = v;
    return d;
  }
  function save() {
    if (storageBroken && !db.active) return;
    db.v = SCHEMA; db.app = APP_VERSION;
    rawSet(STORE, JSON.stringify(db));
  }
  function askPersist() {
    try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) { /* ignore */ }
  }
  function prof() { return db.profiles[db.active]; }
  function courseId() { return prof().course; }
  function course() { return K.courses[courseId()]; }
  function uiLang() { return course().ui; }
  function prog() {
    var p = prof();
    if (!p.prog) p.prog = {};
    if (!p.prog[p.course]) p.prog[p.course] = {};
    return p.prog[p.course];
  }
  function t(key, vars) {
    var pair = T[key]; if (!pair) return key;
    var s = pair[uiLang() === 'de' ? 0 : 1];
    if (vars) Object.keys(vars).forEach(function (k) { s = s.replace('{' + k + '}', vars[k]); });
    return s;
  }

  /* ================= Hilfsfunktionen ================= */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function md(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/_{3,}/g, '<span class="blank"></span>');
  }
  function plain(s) { return String(s || '').replace(/\*\*|\*/g, ''); }
  function pct(a, b) { return b ? Math.round(a / b * 100) : 0; }
  function locale(l) { return l === 'tr' ? 'tr-TR' : 'de-DE'; }
  function norm(s, lang, cs) {
    s = String(s || '').replace(/[’‘`´ʼ]/g, "'").replace(/[.,!?;:¿¡"«»„“”]/g, ' ').replace(/\s+/g, ' ').trim();
    return cs ? s : s.toLocaleLowerCase(locale(lang));
  }
  function fold(s) {
    return String(s).toLocaleLowerCase('tr-TR').replace(/'/g, '')
      .replace(/\u0307/g, '').replace(/[çć]/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ş/g, 's')
      .replace(/ü/g, 'u').replace(/ä/g, 'a').replace(/ß/g, 'ss');
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; }
    return a;
  }
  function shuffleNotIdentity(arr) {
    if (arr.length < 2) return arr.slice();
    var a, tries = 0;
    do { a = shuffle(arr); tries++; } while (tries < 10 && a.every(function (v, i) { return v === arr[i]; }));
    return a;
  }
  function toast(msg) {
    var el = document.createElement('div'); el.className = 'toast'; el.textContent = msg;
    document.body.appendChild(el); setTimeout(function () { el.remove(); }, 2200);
  }
  /* ---------- Vorlesen: echte deutsche/türkische Stimme wählen, nie eine fremde Stimme ---------- */
  var canSpeak = 'speechSynthesis' in window;
  var voicesCache = [];
  function loadVoices() { try { voicesCache = speechSynthesis.getVoices() || []; } catch (e) { voicesCache = []; } }
  if (canSpeak) {
    loadVoices();
    var onVoices = function () { loadVoices(); if (parseHash().page === 'settings' && db.active) render(); };
    if (speechSynthesis.addEventListener) speechSynthesis.addEventListener('voiceschanged', onVoices); else speechSynthesis.onvoiceschanged = onVoices;
  }
  function vLang(v) { return String(v.lang || '').replace('_', '-').toLowerCase(); }
  function voicesFor(lang) {
    var l = lang.toLowerCase(), pfx = l.slice(0, 2) + '-';
    return voicesCache.filter(function (v) { var x = vLang(v); return x === l || x.indexOf(pfx) === 0 || x === l.slice(0, 2); });
  }
  function voiceScore(v, lang) {
    var n = v.name || '', s = 0;
    if (vLang(v) === lang.toLowerCase()) s += 50;                       // genau tr-TR / de-DE
    if (/natural|neural|premium|enhanced|wavenet|hd/i.test(n)) s += 40; // neuronale, natürlich klingende Stimmen
    if (/google/i.test(n)) s += 25;
    if (/online/i.test(n)) s += 10;
    if (/multilingual/i.test(n)) s -= 30;                               // Mehrsprachige Stimmen haben oft Akzent
    if (/espeak|compact/i.test(n)) s -= 40;                             // roboterhaft
    return s;
  }
  // Geschlecht ist in der Web-Speech-API nicht angegeben → bekannte Stimmennamen (Windows/Edge, Apple, Google)
  var FEMALE = /\b(katja|hedda|amala|louisa|seraphina|elke|gisela|klarissa|maja|tanja|ingrid|anna|petra|helena|marlene|vicki|emel|seda|yelda|filiz|zeynep|aylin)\b/i;
  var MALE = /\b(conrad|stefan|killian|florian|bernd|christoph|kasper|klaus|ralf|markus|yannick|hans|reed|ahmet|tolga|cem|fettah|fahrettin|murat|emre)\b/i;
  function voiceGender(v) { var n = v.name || ''; return FEMALE.test(n) ? 'f' : (MALE.test(n) ? 'm' : ''); }
  function sortedVoices(lang) { return voicesFor(lang).sort(function (a, b) { return voiceScore(b, lang) - voiceScore(a, lang); }); }
  function bestVoice(lang) {
    var list = sortedVoices(lang), pref = db.voices && db.voices[lang], g = db.voiceGender || '';
    if (pref) { var f = list.filter(function (v) { return v.name === pref; })[0]; if (f) return f; }
    if (g) { var byG = list.filter(function (v) { return voiceGender(v) === g; })[0]; if (byG) return byG; }
    return list[0] || null;
  }
  /* ---------- Piper-Audio (Open Source, in GitHub Actions erzeugt: audio/manifest.json) ---------- */
  var AUDIO = null, curAudio = null;
  function loadAudioManifest() {
    if (!window.fetch) return;
    fetch('audio/manifest.json?v=' + APP_VERSION, { cache: 'no-cache' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) { AUDIO = j; if (db.active && parseHash().page === 'settings') render(); })
      .catch(function () { /* offline oder lokal geöffnet → Gerätestimme */ });
  }
  function piperVoices(lang2) { return (AUDIO && AUDIO.voices && AUDIO.voices[lang2]) || {}; }
  var slowNext = false;   // nächste Wiedergabe langsamer (🐢)
  var seqToken = 0;   // jede neue Wiedergabe beendet eine laufende Dialog-Kette
  function playUrl(url, onFail, onEnd) {
    try {
      if (canSpeak) speechSynthesis.cancel();
      if (curAudio) curAudio.pause();
      curAudio = new Audio(url);
      if (slowNext) { curAudio.playbackRate = 0.72; try { curAudio.preservesPitch = true; } catch (e) { /* alt */ } }
      if (onEnd) curAudio.onended = onEnd;
      var p = curAudio.play();
      if (p && p.catch) p.catch(function () { if (onFail) onFail(); });
    } catch (e) { if (onFail) onFail(); }
  }
  // Reihenfolge der Quellen je nach Wunsch: Automatisch → Piper ♀, Piper ♂, Gerät; ♀/♂ → Piper gewünscht, Gerät gewünscht, Rest
  function speak(text, lang, voiceName, retried, forceGender, onEnd) {
    if (!onEnd) seqToken++;
    var key = plain(text).trim(), lang2 = lang.slice(0, 2), g = forceGender || db.voiceGender || '';
    if (!voiceName && AUDIO) {
      var pv = piperVoices(lang2), order = g === 'm' ? ['male', 'female'] : ['female', 'male'];
      var deviceHasG = g && sortedVoices(lang).some(function (v) { return voiceGender(v) === g; });
      for (var i = 0; i < order.length; i++) {
        var vk = pv[order[i]];
        if (i > 0 && deviceHasG) break;  // gewünschtes Geschlecht lieber von der Gerätestimme als falsches Geschlecht
        var fid = vk && AUDIO.files && AUDIO.files[vk] && AUDIO.files[vk][key];
        if (fid) { playUrl('audio/' + vk + '/' + fid + '.mp3', function () { deviceSpeak(text, lang, null, retried, onEnd, g); }, onEnd); return; }
      }
    }
    deviceSpeak(text, lang, voiceName, retried, onEnd, g);
  }
  function deviceSpeak(text, lang, voiceName, retried, onEnd, g) {
    if (!canSpeak) { showVoiceHelp(lang); return; }
    if (!voicesCache.length) loadVoices();
    var v = voiceName ? voicesFor(lang).filter(function (x) { return x.name === voiceName; })[0] : null;
    if (!v && g) v = sortedVoices(lang).filter(function (x) { return voiceGender(x) === g; })[0] || null;
    if (!v) v = bestVoice(lang);
    if (!v) {
      if (!voicesCache.length && !retried) { setTimeout(function () { loadVoices(); deviceSpeak(text, lang, voiceName, true, onEnd, g); }, 700); return; }
      showVoiceHelp(lang); return;   // lieber gar nicht vorlesen als mit falscher (z. B. englischer) Stimme
    }
    try {
      if (curAudio) curAudio.pause();
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(plain(text));
      u.voice = v; u.lang = v.lang || lang; u.rate = slowNext ? 0.65 : 0.92;
      if (onEnd) u.onend = onEnd;
      speechSynthesis.speak(u);
    } catch (e) { /* ignore */ }
  }
  function osName() {
    var ua = navigator.userAgent || '';
    if (/android/i.test(ua)) return 'android';
    if (/iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && 'ontouchend' in document)) return 'ios';
    if (/windows/i.test(ua)) return 'windows';
    if (/macintosh|mac os/i.test(ua)) return 'mac';
    return 'other';
  }
  function voiceHelpHtml() {
    var os = osName(), de = uiLang() === 'de';
    var L = de ? 'Türkisch' : 'Almanca';
    var steps = {
      windows: de ? 'Am natürlichsten klingt es in <b>Microsoft Edge</b> (Online-Stimmen, z. B. „Emel“). Oder in Windows: <b>Einstellungen → Zeit und Sprache → Sprache & Region → Sprache hinzufügen → ' + L + '</b> und dabei „Sprachausgabe/Text-to-Speech“ anhaken.'
        : 'En doğal ses <b>Microsoft Edge</b> tarayıcısında (çevrim içi sesler, ör. “Katja”). Ya da Windows’ta: <b>Ayarlar → Saat ve dil → Dil ve bölge → Dil ekle → ' + L + '</b> ve “Metin okuma (Text-to-Speech)” seçeneğini işaretle.',
      android: de ? '<b>Einstellungen → Text-in-Sprache-Ausgabe → Google-Sprachdienste → Sprachdaten installieren → ' + L + '</b>.'
        : '<b>Ayarlar → Metin okuma çıkışı → Google konuşma hizmetleri → Ses verilerini yükle → ' + L + '</b>.',
      ios: de ? '<b>Einstellungen → Bedienungshilfen → Gesprochene Inhalte → Stimmen → ' + L + '</b> und eine Stimme (am besten „Premium“/„Erweitert“) laden.'
        : '<b>Ayarlar → Erişilebilirlik → Seslendirilen İçerik → Sesler → ' + L + '</b> ve bir ses indir (tercihen “Gelişmiş/Premium”).',
      mac: de ? '<b>Systemeinstellungen → Bedienungshilfen → Gesprochene Inhalte → Systemstimme → Stimmen verwalten → ' + L + '</b>.'
        : '<b>Sistem Ayarları → Erişilebilirlik → Seslendirilen İçerik → Sistem sesi → Sesleri yönet → ' + L + '</b>.',
      other: de ? 'Installiere eine ' + L + '-Stimme in den Sprach-/Vorlese-Einstellungen deines Geräts oder nutze Chrome bzw. Edge.'
        : 'Cihazının dil/sesli okuma ayarlarından bir ' + L + ' sesi yükle ya da Chrome veya Edge kullan.'
    };
    return '<p>' + (de ? 'Auf diesem Gerät ist keine <b>türkische</b> Vorlese-Stimme installiert. Damit die Aussprache stimmt, lese ich nicht mit einer fremden Stimme vor.'
      : 'Bu cihazda <b>Almanca</b> bir okuma sesi yüklü değil. Telaffuz yanlış olmasın diye yabancı bir sesle okumuyorum.') + '</p><p>' + steps[os] + '</p>';
  }
  function showVoiceHelp() {
    var old = document.getElementById('voice-help'); if (old) old.remove();
    var el = document.createElement('div'); el.id = 'voice-help'; el.className = 'help-pop'; el.setAttribute('role', 'dialog');
    el.innerHTML = '<div class="card"><h3>🔊 ' + esc(t('voiceMissing')) + '</h3>' + voiceHelpHtml() +
      '<div class="btn-row"><a class="btn" href="#/settings">' + esc(t('settings')) + '</a><button class="btn primary" data-close>OK</button></div></div>';
    el.addEventListener('click', function (e) { if (e.target === el || e.target.hasAttribute('data-close') || e.target.closest('a')) el.remove(); });
    document.body.appendChild(el);
  }
  function prettyVoice(key) {   // „tr_TR-fahrettin-medium“ → „Fahrettin“
    var n = (key.split('-')[1] || key).replace(/_/g, ' ');
    return n.charAt(0).toUpperCase() + n.slice(1);
  }
  function voiceSettingsHtml() {
    var lang = course().tts, lang2 = lang.slice(0, 2), list = canSpeak ? sortedVoices(lang) : [], cur = bestVoice(lang);
    var pv = piperVoices(lang2), g = db.voiceGender || '';
    var hasF = !!pv.female || list.some(function (v) { return voiceGender(v) === 'f'; });
    var hasM = !!pv.male || list.some(function (v) { return voiceGender(v) === 'm'; });
    var seg = '<div class="seg" style="margin:4px 0 10px">' + [['', t('voiceAuto')], ['f', '♀ ' + t('female')], ['m', '♂ ' + t('male')]].map(function (x) {
      var dis = (x[0] === 'f' && !hasF) || (x[0] === 'm' && !hasM);
      return '<button data-act="voice-gender" data-v="' + x[0] + '" class="' + (g === x[0] ? 'on' : '') + '"' + (dis ? ' disabled title="' + esc(t('notInstalled')) + '"' : '') + '>' + esc(x[1]) + '</button>';
    }).join('') + '</div>' + ((g === 'f' && !hasF) || (g === 'm' && !hasM) ? '<p class="muted small">' + esc(t('genderMissing')) + '</p>' : '');
    var piper = '';
    if (pv.female || pv.male) {
      var samples = (AUDIO.samples && AUDIO.samples[lang2]) || {};
      piper = '<p class="small" style="margin:6px 0 8px">' + esc(t('piperInfo')) + ' ' +
        ['female', 'male'].filter(function (x) { return pv[x]; }).map(function (x) { return (x === 'female' ? '♀ ' : '♂ ') + esc(prettyVoice(pv[x])); }).join(' · ') + '</p>' +
        (Object.keys(samples).length ? '<div class="btn-row" style="margin-bottom:12px"><span class="small muted">' + esc(t('samples')) + ':</span>' + Object.keys(samples).map(function (k) {
          return '<button class="btn small" data-act="play-sample" data-url="audio/' + esc(samples[k]) + '">▶ ' + esc(prettyVoice(k)) + '</button>';
        }).join('') + '</div>' : '');
    } else {
      piper = '<p class="muted small">' + esc(t('piperMissing')) + '</p>';
    }
    var device;
    if (!canSpeak) device = '<p class="muted small">' + esc(t('noSpeech')) + '</p>';
    else if (!list.length) device = voiceHelpHtml();
    else device = '<div class="inline-form" style="margin-top:6px">' +
      '<select id="voice-sel" class="input" data-act="voice" style="max-width:420px">' + list.map(function (v, i) {
        var vg = voiceGender(v);
        return '<option value="' + esc(v.name) + '"' + (cur && cur.name === v.name ? ' selected' : '') + '>' + (vg === 'f' ? '♀ ' : vg === 'm' ? '♂ ' : '') + esc(v.name) + (i === 0 ? ' ★' : '') + '</option>';
      }).join('') + '</select><button class="btn" data-act="voice-test">▶ ' + esc(t('test')) + '</button></div>' +
      '<p class="muted small" style="margin-top:8px">' + esc(t('voiceTip')) + '</p>';
    return seg + piper + '<h3 style="margin:14px 0 4px;font-size:.95rem">' + esc(t('deviceVoice')) + '</h3>' + device;
  }
  /* ---------- Sprechen: Spracherkennung (Chrome, Edge, Safari) ---------- */
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  var recog = null;
  function levRatio(a, b) {
    if (a === b) return 1;
    var m = a.length, n = b.length, prev = [], cur, i, j;
    if (!m || !n) return 0;
    for (j = 0; j <= n; j++) prev[j] = j;
    for (i = 1; i <= m; i++) {
      cur = [i];
      for (j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return 1 - prev[n] / Math.max(m, n);
  }
  function startListening(onText, onError) {
    if (!SR) { onError('unsupported'); return; }
    try { if (recog) recog.abort(); } catch (e) { /* ignore */ }
    recog = new SR();
    recog.lang = course().tts; recog.interimResults = false; recog.maxAlternatives = 3;
    var got = false;
    recog.onresult = function (e) {
      got = true;
      var alts = []; for (var i = 0; i < e.results[0].length; i++) alts.push(e.results[0][i].transcript);
      onText(alts);
    };
    recog.onerror = function (e) { if (!got) onError(e.error || 'error'); };
    recog.onend = function () { if (!got) onError('no-speech'); };
    try { if (curAudio) curAudio.pause(); if (canSpeak) speechSynthesis.cancel(); recog.start(); } catch (e) { onError('error'); }
  }
  function speakSlow(text, lang, g) { slowNext = true; speak(text, lang, null, false, g); setTimeout(function () { slowNext = false; }, 50); }
  function audioBar(say) {
    return '<div class="audio-bar"><button class="btn primary audio-main" data-act="play-say" data-say="' + esc(say) + '">🔊 ' + esc(t('play')) + '</button>' +
      '<button class="btn" data-act="play-say" data-slow="1" data-say="' + esc(say) + '" title="' + esc(t('slow')) + '">🐢 ' + esc(t('slow')) + '</button></div>';
  }
  function speakBtn(text) {
    if (!canSpeak) return '';
    return '<button class="speak" data-speak="' + esc(plain(text)) + '" title="' + esc(t('listen')) + '" aria-label="' + esc(t('listen')) + '">🔊</button>';
  }
  var FLAGS = {
    de: '<svg class="flag-ico" viewBox="0 0 5 3" aria-hidden="true"><rect width="5" height="3" fill="#FFCE00"/><rect width="5" height="2" fill="#DD0000"/><rect width="5" height="1" fill="#000"/></svg>',
    tr: '<svg class="flag-ico" viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="20" fill="#E30A17"/><circle cx="10.6" cy="10" r="5" fill="#fff"/><circle cx="11.9" cy="10" r="4" fill="#E30A17"/><polygon fill="#fff" points="13.80,10.00 15.55,9.38 15.60,7.53 16.72,9.00 18.50,8.47 17.45,10.00 18.50,11.53 16.72,11.00 15.60,12.47 15.55,10.62"/></svg>'
  };
  function flag(cid) { return FLAGS[cid] || ''; }
  var LOGO = '<svg class="logo" aria-hidden="true" viewBox="0 0 64 64"><rect width="64" height="64" rx="15" fill="#3b5bdb"/><path d="M11 14h26a5 5 0 0 1 5 5v13a5 5 0 0 1-5 5H24l-7 6v-6h-6a5 5 0 0 1-5-5V19a5 5 0 0 1 5-5z" fill="#fff"/><path d="M53 26H30a5 5 0 0 0-5 5v12a5 5 0 0 0 5 5h12l7 6v-6h4a5 5 0 0 0 5-5V31a5 5 0 0 0-5-5z" fill="#fcc419"/><path d="M14 22h18M14 28h12" stroke="#3b5bdb" stroke-width="3" stroke-linecap="round"/><path d="M32 35h18M32 41h12" stroke="#3b5bdb" stroke-width="3" stroke-linecap="round"/></svg>';

  /* ================= Lehrplan-Zugriff ================= */
  function topicsOf(cid) {
    var c = K.courses[cid], list = [];
    LEVELS.forEach(function (lv) {
      (c.levels[lv] || []).forEach(function (row, i) {
        var data = K.content[row[0]];
        list.push({ id: row[0], level: lv, num: i + 1, title: row[1], sub: row[2], data: data, avail: !!(data && data.exercises && data.exercises.length) });
      });
      Object.keys(K.dialogs || {}).filter(function (id) { return id.indexOf(cid + '-') === 0 && K.dialogs[id].level === lv; }).sort()
        .forEach(function (id, i) {
          var d = K.dialogs[id];
          list.push({ id: id, level: lv, num: 'D' + (i + 1), title: d.title, sub: d.sub, kind: 'dialog', data: K.content[id], avail: true });
        });
    });
    return list;
  }
  function allTopics() { return topicsOf(courseId()); }
  function topicById(id) { return allTopics().filter(function (x) { return x.id === id; })[0]; }
  function exId(topicId, i) { return K.content[topicId].exercises[i].id; }
  function exById(id) {
    var e = EXI[id]; if (!e) return null;
    var tp = topicById(e.topicId);
    if (!tp || !tp.avail) return null;
    return { topic: tp, ex: e.ex, idx: e.idx, id: id };
  }
  function topicStats(tp) {
    var s = { n: 0, c: 0, w: 0, o: 0, first: 0, firstW: 0, answered: 0 };
    if (!tp.avail) return s;
    var p = prog();
    tp.data.exercises.forEach(function (_, i) {
      var r = p[exId(tp.id, i)]; s.n++;
      if (!r) { s.o++; return; }
      s.answered++;
      if (r.s === 'c') s.c++; else s.w++;
      if (r.f === 'c') s.first++; else s.firstW++;
    });
    return s;
  }
  function sumStats(list) {
    var s = { n: 0, c: 0, w: 0, o: 0, first: 0, firstW: 0, answered: 0, topics: 0, avail: 0 };
    list.forEach(function (tp) {
      var x = topicStats(tp); s.topics++; if (tp.avail) s.avail++;
      ['n', 'c', 'w', 'o', 'first', 'firstW', 'answered'].forEach(function (k) { s[k] += x[k]; });
    });
    return s;
  }
  function levelTopics(lv) { return allTopics().filter(function (x) { return x.level === lv; }); }
  function wrongIds(filterTopic) {
    var p = prog(), out = [];
    allTopics().forEach(function (tp) {
      if (!tp.avail || (filterTopic && tp.id !== filterTopic)) return;
      tp.data.exercises.forEach(function (_, i) { var id = exId(tp.id, i); if (p[id] && p[id].s === 'w') out.push(id); });
    });
    return out;
  }
  function nextTopic() {
    var list = allTopics().filter(function (x) { return x.avail; });
    for (var i = 0; i < list.length; i++) { var s = topicStats(list[i]); if (s.c < s.n) return list[i]; }
    return null;
  }
  function levelName(lv) { return K.levelNames[lv][uiLang()]; }

  /* ================= Fortschritt speichern ================= */
  function record(id, ok, given) {
    var p = prog(), r = p[id] || {};
    if (!r.f) r.f = ok ? 'c' : 'w';
    r.s = ok ? 'c' : 'w';
    r.n = (r.n || 0) + 1;
    if (!ok) { r.w = (r.w || 0) + 1; r.a = given; }
    r.t = Date.now();
    p[id] = r;
    var pr = prof(); pr.last = pr.last || {}; pr.last[courseId()] = r.t;   // letzter Lerntag je Kurs
    save();
  }

  /* ================= Theme ================= */
  function applyTheme() {
    var th = db.theme || 'system';
    if (th === 'system') th = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', th);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', th === 'dark' ? '#161b24' : '#ffffff');
  }
  if (window.matchMedia) {
    var mq = matchMedia('(prefers-color-scheme: dark)');
    var onMq = function () { if ((db.theme || 'system') === 'system') { applyTheme(); render(); } };
    if (mq.addEventListener) mq.addEventListener('change', onMq); else if (mq.addListener) mq.addListener(onMq);
  }
  function currentThemeIsDark() { return document.documentElement.getAttribute('data-theme') === 'dark'; }

  /* ================= Router ================= */
  function parseHash() {
    var h = (location.hash || '').replace(/^#\/?/, '');
    var parts = h.split('/').filter(Boolean).map(decodeURIComponent);
    return { page: parts[0] || 'dashboard', a: parts[1], b: parts[2] };
  }
  function go(hash) { if (location.hash === hash) render(); else location.hash = hash; }
  window.addEventListener('hashchange', function () { render(); window.scrollTo(0, 0); });

  /* ================= Grundgerüst ================= */
  function shell(active, inner) {
    var c = course(), other = courseId() === 'de' ? K.courses.tr : K.courses.de;
    var wrongN = wrongIds().length;
    var tabs = [
      ['dashboard', '🏠', t('dashboard')],
      ['lessons', '📚', t('lessons')],
      ['gaps', '🎯', t('gaps') + (wrongN ? ' <span class="badge bad">' + wrongN + '</span>' : '')],
      ['overview', '📊', t('overview')],
      ['settings', '⚙️', t('settings')]
    ];
    document.documentElement.lang = uiLang();
    document.title = c.label + ' · Deutsch ⇄ Türkçe';
    return '' +
      '<header class="topbar"><div class="topbar-inner">' +
        '<div class="toprow">' +
          '<a class="brand" href="#/dashboard">' + LOGO + '<span>' + esc(c.label) + '<small>Deutsch ⇄ Türkçe</small></span></a>' +
          '<span class="spacer"></span>' +
          '<button class="pill-btn" data-act="toggle-course" title="' + esc(t('courseToggle')) + ' → ' + esc(other.label) + '">' +
            '<span aria-hidden="true">⇄</span>' + flag(other.id) + '<span class="pb-label">' + esc(other.label) + '</span></button>' +
          '<button class="icon-btn" data-act="toggle-theme" title="' + esc(t('themeToggle')) + '" aria-label="' + esc(t('themeToggle')) + '">' + (currentThemeIsDark() ? '☀️' : '🌙') + '</button>' +
        '</div>' +
        '<nav class="tabs" aria-label="Navigation">' + tabs.map(function (x) {
          return '<a class="tab' + (x[0] === active ? ' active' : '') + '" href="#/' + x[0] + '"' + (x[0] === active ? ' aria-current="page"' : '') + '><span aria-hidden="true">' + x[1] + '</span>' + x[2] + '</a>';
        }).join('') + '</nav>' +
      '</div></header>' +
      '<main id="main">' + inner + '</main>' +
      '<footer class="foot">' + esc(t('footer')) + '</footer>';
  }

  /* ================= Onboarding ================= */
  var obChoice = 'de', obName = '';
  function viewOnboarding() {
    var cards = ['de', 'tr'].map(function (cid) {
      var c = K.courses[cid];
      return '<button class="course-card' + (obChoice === cid ? ' selected' : '') + '" data-act="ob-choose" data-c="' + cid + '">' +
        '<span class="flag">' + flag(cid) + '</span><b>' + esc(cid === 'de' ? 'Almanca öğrenmek istiyorum' : 'Ich möchte Türkisch lernen') + '</b>' +
        '<span class="muted">' + esc(c.sublabel) + ' · A1 → C2</span></button>';
    }).join('');
    return '<main><div class="onboard">' + LOGO +
      '<h1>Deutsch ⇄ Türkçe</h1><p class="muted">Willkommen! · Hoş geldin!</p>' +
      '<div class="course-cards">' + cards + '</div>' +
      '<div class="field"><label for="ob-name">Name / İsim <span class="muted">(optional / isteğe bağlı)</span></label>' +
      '<input id="ob-name" class="input" maxlength="30" autocomplete="nickname" value="' + esc(obName) + '"></div>' +
      '<button class="btn primary" data-act="ob-start">Los geht’s · Başlayalım →</button>' +
      '<p class="muted small" style="margin-top:18px">Dein Fortschritt bleibt in diesem Browser. · İlerlemen bu tarayıcıda saklanır.</p>' +
      '</div></main>';
  }
  function createProfile(name, cid) {
    var id = 'p' + Date.now().toString(36);
    db.profiles[id] = { id: id, name: (name || '').trim(), course: cid, prog: { de: {}, tr: {} }, created: Date.now() };
    db.active = id; save(); askPersist();
  }

  /* ================= Maskottchen „Lingo“ ================= */
  function lastLearned() {
    var pr = prof(), ts = (pr.last && pr.last[courseId()]) || 0;
    if (!ts) { var p = prog(); Object.keys(p).forEach(function (k) { if (p[k] && p[k].t > ts) ts = p[k].t; }); }
    return ts || null;
  }
  function daysSince(ts) {
    var a = new Date(ts), b = new Date();
    var d0 = new Date(a.getFullYear(), a.getMonth(), a.getDate()), d1 = new Date(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.max(0, Math.round((d1 - d0) / 86400000));   // Kalendertage (sommerzeitfest)
  }
  function mascotSvg(mood) {
    var B = '#4263eb', eyes, mouth, extra = '', arm;
    if (mood === 'happy') {
      eyes = '<path d="M37 50q8-10 16 0M65 50q8-10 16 0" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>';
      mouth = '<path d="M46 62q13 16 26 0z" fill="#fff"/><path d="M52 68q7 5 14 0" fill="#ff8fab"/>';
      extra = '<ellipse cx="34" cy="62" rx="6" ry="4" fill="#ff8fab" opacity=".6"/><ellipse cx="84" cy="62" rx="6" ry="4" fill="#ff8fab" opacity=".6"/>' +
        '<path d="M88 4l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#fcc419"/><path d="M12 30l1.5 3.5 3.5 1.5-3.5 1.5-1.5 3.5-1.5-3.5-3.5-1.5 3.5-1.5z" fill="#fcc419"/>';
      // Arm nach oben + gelbe Hand mit Daumen hoch 👍
      arm = '<path d="M98 66L110 52" stroke="' + B + '" stroke-width="10" stroke-linecap="round"/>' +
        '<g stroke="#d9480f" stroke-width="2" stroke-linejoin="round"><rect x="104" y="17" width="9" height="22" rx="4.5" fill="#fcc419"/>' +
        '<rect x="100" y="33" width="22" height="19" rx="6" fill="#fcc419"/></g>' +
        '<path d="M108 39.5h12M108 45.5h12" stroke="#d9480f" stroke-width="1.8" stroke-linecap="round"/>';
    } else if (mood === 'sad') {
      eyes = '<circle cx="45" cy="50" r="8" fill="#fff"/><circle cx="73" cy="50" r="8" fill="#fff"/><circle cx="45" cy="53" r="4" fill="#1b1f2a"/><circle cx="73" cy="53" r="4" fill="#1b1f2a"/>' +
        '<path d="M36 40l14-5M82 40l-14-5" stroke="#1b1f2a" stroke-width="3.5" stroke-linecap="round"/>';
      mouth = '<path d="M49 74q10-9 20 0" stroke="#fff" stroke-width="4.5" fill="none" stroke-linecap="round"/>';
      extra = '<path d="M80 58q5 8 0 11q-5-3 0-11z" fill="#74c0fc"/>';
      arm = '';   // ohne Arm
    } else {
      eyes = '<circle cx="45" cy="48" r="8" fill="#fff"/><circle cx="73" cy="48" r="8" fill="#fff"/><circle cx="46" cy="49" r="4" fill="#1b1f2a"/><circle cx="74" cy="49" r="4" fill="#1b1f2a"/>';
      mouth = '<path d="M50 67q9 4 18 0" stroke="#fff" stroke-width="4.5" fill="none" stroke-linecap="round"/>';
      arm = '';   // ohne Arm
    }
    return '<svg class="mascot ' + mood + '" viewBox="0 0 128 120" role="img" aria-label="Lingo">' +
      '<ellipse cx="60" cy="112" rx="34" ry="5" fill="currentColor" opacity=".12"/>' +
      '<g class="m-body">' + arm +
      '<path d="M34 84L27 104L52 86Z" fill="' + B + '"/><rect x="16" y="20" width="86" height="68" rx="24" fill="' + B + '"/>' +
      '<rect x="22" y="24" width="40" height="10" rx="5" fill="#fff" opacity=".18"/>' + eyes + mouth + extra + '</g></svg>';
  }
  function mascotCard() {
    var ts = lastLearned(), mood, msg;
    if (!ts) { mood = 'neutral'; msg = t('mascotNew'); }
    else {
      var d = daysSince(ts);
      if (d === 0) { mood = 'happy'; msg = t('mascotToday'); }
      else if (d === 1) { mood = 'happy'; msg = t('mascotYesterday'); }
      else if (d <= 5) { mood = 'neutral'; msg = t('mascotDays', { n: d }); }
      else { mood = 'sad'; msg = t('mascotSad', { n: d }); }
    }
    var when = ts ? '<span class="muted small">' + esc(t('lastLearned')) + ': ' + new Date(ts).toLocaleDateString(locale(uiLang()), { weekday: 'long', day: 'numeric', month: 'long' }) + '</span>' : '';
    return '<div class="card mascot-card">' + mascotSvg(mood) + '<div class="m-bubble"><b>' + esc(msg) + '</b>' + when + '</div></div>';
  }

  /* ================= Dashboard ================= */
  function levelRow(lv, linkBase) {
    var list = levelTopics(lv), s = sumStats(list);
    var has = s.n > 0, p = pct(s.c, s.n);
    return '<a class="level-row' + (has ? '' : ' disabled') + '" href="#/lessons/' + lv + '" style="color:inherit;text-decoration:none">' +
      '<span class="lvl lvl-' + lv + '">' + lv + '</span>' +
      '<div><div class="lr-title"><span>' + esc(levelName(lv)) + '</span><span class="muted small">' +
        (has ? s.c + ' / ' + s.n + ' ' + esc(t('tasks')) : esc(t('comingSoon'))) + '</span></div>' +
        '<div class="bar"><span class="fill-' + lv + '" style="width:' + p + '%"></span></div></div>' +
      '<span class="pct">' + (has ? p + '%' : '–') + '</span></a>';
  }
  function viewDashboard() {
    var p = prof(), all = allTopics(), s = sumStats(all), wrongN = wrongIds().length;
    var nt = nextTopic();
    var cont;
    if (nt) {
      var ns = topicStats(nt);
      cont = '<div class="card continue-card"><div><span class="lvl lvl-' + nt.level + '">' + nt.level + '</span> ' +
        '<span class="muted small">' + esc(ns.answered ? t('continueLearning') : t('startHere')) + '</span>' +
        '<h2>' + esc(nt.title) + '</h2><div class="muted">' + esc(nt.sub) + '</div></div>' +
        '<a class="btn primary" href="#/topic/' + nt.id + '/' + (ns.answered ? 'exercises' : 'learn') + '">' + esc(ns.answered ? t('continueLearning') : t('start')) + ' →</a></div>';
    } else {
      cont = '<div class="card continue-card"><div><h2>🏆</h2><p>' + esc(t('allDone')) + '</p></div></div>';
    }
    var levels = LEVELS.map(function (lv) { return levelRow(lv); }).join('');

    // Problemstellen (Top 3)
    var probs = all.filter(function (x) { return x.avail; }).map(function (x) { var st = topicStats(x); return { tp: x, st: st, rate: st.answered ? st.firstW / st.answered : 0 }; })
      .filter(function (x) { return x.st.firstW > 0; }).sort(function (a, b) { return b.rate - a.rate; }).slice(0, 3);
    var probHtml = probs.length ? '<div class="card section"><div class="section-head"><h2>' + esc(t('problemAreas')) + '</h2><a href="#/gaps">' + esc(t('gaps')) + ' →</a></div>' +
      probs.map(function (x) {
        return '<div class="problem"><a href="#/topic/' + x.tp.id + '/review">' + esc(x.tp.title) + ' <span class="muted small">· ' + x.tp.level + '</span></a>' +
          '<div class="bar thin"><span class="bad" style="width:' + Math.round(x.rate * 100) + '%"></span></div><span class="small" style="text-align:right">' + Math.round(x.rate * 100) + '%</span></div>';
      }).join('') + '</div>' : '';

    return '<div class="hero"><div><h1>' + esc(t('hello')) + (p.name ? ', ' + esc(p.name) : '') + ' 👋</h1>' +
      '<p class="muted" style="margin:4px 0 0">' + flag(courseId()) + ' ' + esc(course().label) + ' · ' + esc(t('dashIntro')) + '</p></div></div>' +
      '<div class="section">' + mascotCard() + '</div>' +
      '<div class="section">' + cont + '</div>' +
      '<div class="grid grid-3 section">' +
        '<div class="card stat"><span class="num">' + s.c + '<span class="muted" style="font-size:1rem"> / ' + s.n + '</span></span><span class="lbl">' + esc(t('tasks')) + ' ' + esc(t('solved')) + '</span></div>' +
        '<div class="card stat"><span class="num">' + (s.answered ? pct(s.first, s.answered) + '%' : '–') + '</span><span class="lbl">' + esc(t('accuracy')) + '</span></div>' +
        '<a class="card stat" href="#/gaps" style="color:inherit;text-decoration:none"><span class="num" style="color:' + (wrongN ? 'var(--bad)' : 'var(--ok)') + '">' + wrongN + '</span><span class="lbl">' + esc(t('openMistakes')) + ' →</span></a>' +
      '</div>' +
      '<div class="card section"><div class="section-head"><h2>' + esc(t('levelProgress')) + '</h2><span class="muted small">' + esc(t('totalProgress')) + ': <b>' + pct(s.c, s.n) + '%</b></span></div>' + levels + '</div>' +
      probHtml;
  }

  /* ================= Lektionen ================= */
  function topicCard(tp) {
    var s = topicStats(tp);
    if (!tp.avail) {
      return '<div class="topic-card planned"><span class="tc-num">' + tp.level + ' · ' + tp.num + '</span><span class="tc-title">' + esc(tp.title) + '</span>' +
        '<span class="tc-sub">' + esc(tp.sub) + '</span><div class="tc-foot"><span class="badge">' + esc(t('planned')) + '</span></div></div>';
    }
    var badge = s.answered === 0 ? '<span class="badge primary">' + esc(t('newBadge')) + '</span>'
      : (s.c === s.n ? '<span class="badge ok">✓ ' + esc(t('doneBadge')) + '</span>'
      : (s.w ? '<span class="badge bad">' + s.w + ' ' + esc(t('mistakesBadge')) + '</span>' : ''));
    return '<a class="topic-card" href="#/topic/' + tp.id + '/' + (s.answered ? 'exercises' : 'learn') + '">' +
      '<span class="tc-num">' + tp.level + ' · ' + tp.num + '</span><span class="tc-title">' + esc(tp.title) + '</span>' +
      '<span class="tc-sub">' + esc(tp.sub) + '</span>' +
      '<div class="bar thin"><span class="ok" style="width:' + pct(s.c, s.n) + '%"></span><span class="bad" style="width:' + pct(s.w, s.n) + '%"></span></div>' +
      '<div class="tc-foot"><span>' + s.c + ' / ' + s.n + ' ' + esc(t('correct')) + '</span>' + badge + '</div></a>';
  }
  function viewLessons(focusLevel) {
    var html = LEVELS.map(function (lv) {
      var list = levelTopics(lv), s = sumStats(list);
      return '<section class="level-section" id="lv-' + lv + '"><div class="level-head"><span class="lvl lvl-' + lv + '">' + lv + '</span><h2>' + esc(levelName(lv)) + '</h2>' +
        (s.n ? '<div class="bar"><span class="fill-' + lv + '" style="width:' + pct(s.c, s.n) + '%"></span></div><b>' + pct(s.c, s.n) + '%</b>' : '<span class="badge">' + esc(t('comingSoon')) + '</span>') +
        '</div><div class="topic-grid">' + list.filter(function (x) { return x.kind !== 'dialog'; }).map(topicCard).join('') + '</div>' +
        (list.some(function (x) { return x.kind === 'dialog'; }) ? '<h3 class="sub-head">💬 ' + esc(t('dialogsTitle')) + '</h3><div class="topic-grid">' + list.filter(function (x) { return x.kind === 'dialog'; }).map(topicCard).join('') + '</div>' : '') +
        '</section>';
    }).join('');
    setTimeout(function () { if (focusLevel) { var el = document.getElementById('lv-' + focusLevel); if (el) el.scrollIntoView({ block: 'start' }); } }, 0);
    return '<h1>' + esc(t('lessons')) + '</h1><p class="muted">' + flag(courseId()) + ' ' + esc(course().label) + ' · ' + esc(course().sublabel) + '</p>' + html;
  }

  /* ================= Thema: Erklärung ================= */
  function renderDialog(tp) {
    var d = tp.data.dialog, tgt = course().target;
    var lines = d.lines.map(function (l, i) {
      return '<div class="dl-line g-' + (l.g || 'x') + '" data-line="' + i + '">' +
        '<button class="speak" data-act="play-say" data-say="' + esc(plain(l.t)) + '" data-g="' + (l.g || '') + '" aria-label="' + esc(t('listen')) + '">🔊</button>' +
        '<div class="dl-body"><span class="dl-who" lang="' + tgt + '">' + esc(l.s) + '</span><div class="tgt" lang="' + tgt + '">' + md(l.t) + '</div><div class="nat">' + md(l.n) + '</div></div></div>';
    }).join('');
    return '<div class="card dialog' + (dialogShowTr ? ' show-tr' : '') + '">' +
      '<div class="btn-row" style="margin-bottom:14px"><button class="btn primary" data-act="dl-play">▶ ' + esc(t('playDialog')) + '</button>' +
      '<button class="btn" data-act="dl-play" data-slow="1">🐢 ' + esc(t('slow')) + '</button>' +
      '<button class="btn" data-act="dl-tr" aria-pressed="' + dialogShowTr + '">🌐 ' + esc(t('translation')) + '</button></div>' +
      '<p class="muted small">' + esc(t('dialogTip')) + '</p>' +
      '<div class="dl-lines">' + lines + '</div>' +
      '<div class="btn-row" style="margin-top:18px"><a class="btn primary" href="#/topic/' + tp.id + '/exercises">' + esc(t('toQuestions')) + '</a></div></div>';
  }
  var dialogShowTr = false;
  function playDialog(tp, slow) {
    var d = tp.data.dialog, my = ++seqToken, i = 0;
    function step() {
      if (my !== seqToken) return;
      document.querySelectorAll('.dl-line.playing').forEach(function (x) { x.classList.remove('playing'); });
      if (i >= d.lines.length) return;
      var el = document.querySelector('.dl-line[data-line="' + i + '"]'); if (el) el.classList.add('playing');
      var l = d.lines[i++];
      slowNext = !!slow;
      speak(l.t, course().tts, null, false, l.g || '', function () { setTimeout(step, 350); });
      setTimeout(function () { slowNext = false; }, 50);
    }
    step();
  }
  function renderLesson(tp) {
    if (tp.data.kind === 'dialog') return renderDialog(tp);
    var tgt = course().tts, out = '';
    (tp.data.lesson || []).forEach(function (b) {
      if (b.h) out += '<h3>' + md(b.h) + '</h3>';
      if (b.p) out += '<p>' + md(b.p) + '</p>';
      if (b.tip) out += '<div class="callout tip">' + md(b.tip) + '</div>';
      if (b.warn) out += '<div class="callout warn">' + md(b.warn) + '</div>';
      if (b.table) {
        out += '<div class="tbl-wrap"><table><thead><tr>' + b.table.head.map(function (h) { return '<th>' + md(h) + '</th>'; }).join('') + '</tr></thead><tbody>' +
          b.table.rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + md(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
      }
      if (b.ex) {
        out += '<h3>' + esc(t('examples')) + '</h3><div class="examples">' + b.ex.map(function (e) {
          return '<div class="example">' + speakBtn(e[0]) + '<div><div class="tgt" lang="' + tgt.slice(0, 2) + '">' + md(e[0]) + '</div><div class="nat">' + md(e[1]) + '</div></div></div>';
        }).join('') + '</div>';
      }
      if (b.vocab) {
        out += '<h3>' + esc(t('vocab')) + '</h3><div class="tbl-wrap"><table><tbody>' + b.vocab.map(function (v) {
          return '<tr><td style="width:44px">' + speakBtn(v[0]) + '</td><td lang="' + tgt.slice(0, 2) + '"><b>' + md(v[0]) + '</b></td><td class="muted">' + md(v[1]) + '</td></tr>';
        }).join('') + '</tbody></table></div>';
      }
    });
    return '<div class="card lesson">' + out + '<div class="btn-row" style="margin-top:18px"><a class="btn primary" href="#/topic/' + tp.id + '/exercises">' + esc(t('toExercises')) + '</a></div></div>';
  }

  /* ================= Übungs-Player ================= */
  var player = null;
  function newPlayer(key, mode, queue, topicId) {
    var p = prog(), start = 0;
    if (mode === 'all') {
      var firstOpen = queue.findIndex(function (id) { return !p[id] || p[id].s !== 'c'; });
      start = firstOpen < 0 ? 0 : firstOpen;
    }
    player = { key: key, mode: mode, queue: queue, idx: start, checked: false, cur: null, topicId: topicId, done: false, session: {} };
    return player;
  }
  function curEx() { return exById(player.queue[player.idx]); }
  function initCur(ex) {
    var c = { sel: null, input: '', picked: [], choice: [] };
    if (ex.t === 'order') c.pool = shuffleNotIdentity(ex.w.map(function (_, i) { return i; }));
    if (ex.t === 'match') { c.right = shuffle(ex.p.map(function (x) { return x[1]; })); c.choice = ex.p.map(function () { return ''; }); }
    return c;
  }

  function renderPlayer() {
    if (player.done || player.idx >= player.queue.length) return renderSummary();
    var item = curEx();
    if (!item) { player.idx++; return renderPlayer(); }
    var ex = item.ex, p = prog();
    if (!player.cur) player.cur = initCur(ex);
    var c = player.cur, checked = player.checked, res = player.result;
    var dots = '<div class="dots" role="list">' + player.queue.map(function (id, i) {
      var r = p[id], cls = r ? (r.s === 'c' ? ' c' : ' w') : '';
      if (player.mode !== 'all') cls = player.session[id] === true ? ' c' : (player.session[id] === false ? ' w' : '');
      return '<button class="dot' + cls + (i === player.idx ? ' cur' : '') + '" data-act="jump" data-i="' + i + '" role="listitem" aria-label="' + esc(t('question')) + ' ' + (i + 1) + '">' + (i + 1) + '</button>';
    }).join('') + '</div>';

    var body = '', qtext = '', hint = '';
    var target = course().target;
    if (ex.t === 'mc' || ex.t === 'listen') {
      qtext = md(ex.q || t('listenQ'));
      body = (ex.t === 'listen' ? audioBar(ex.say) : '') + '<div class="options" role="radiogroup">' + ex.o.map(function (o, i) {
        var cls = '';
        if (checked) { if (i === ex.a) cls = ' right'; else if (i === c.sel) cls = ' wrong'; }
        else if (i === c.sel) cls = ' sel';
        return '<button class="opt' + cls + '" data-act="mc" data-i="' + i + '" role="radio" aria-checked="' + (i === c.sel) + '"' + (checked ? ' disabled' : '') + '>' +
          '<span class="key">' + 'ABCDEFG'[i] + '</span><span>' + md(o) + '</span></button>';
      }).join('') + '</div>';
    } else if (ex.t === 'speak') {
      qtext = md(ex.q || t('speakQ'));
      var scls = checked ? (res.ok ? ' right' : ' wrong') : '';
      body = '<div class="say-box' + scls + '" lang="' + target + '">' + md(ex.say) + '</div>' + audioBar(ex.say);
      if (SR) {
        body += '<button class="btn mic-btn' + (c.listening ? ' on' : '') + '" data-act="mic"' + (checked ? ' disabled' : '') + '>🎤 ' + esc(c.listening ? t('listening') : t('speakNow')) + '</button>' +
          (c.heard && !checked ? '<p class="small" style="margin-top:10px">' + esc(t('recognized')) + ': <b>' + esc(c.heard) + '</b></p>' : '') +
          (c.micError ? '<p class="small" style="color:var(--bad);margin-top:10px">' + esc(t(c.micError === 'not-allowed' ? 'micDenied' : 'micNoSpeech')) + '</p>' : '');
      } else {
        body += '<p class="muted small">' + esc(t('noMic')) + '</p>' +
          (checked ? '' : '<button class="btn" data-act="self-ok">✓ ' + esc(t('saidAloud')) + '</button>');
      }
    } else if (ex.t === 'dictation') {
      qtext = md(ex.q || t('dictationQ'));
      var dcls = checked ? (res.ok ? ' right' : ' wrong') : '';
      body = audioBar(ex.say) + '<input class="gap-input dict-input' + dcls + '" id="gap-input" autocomplete="off" autocapitalize="off" spellcheck="false" lang="' + target + '" placeholder="' + esc(t('typeWhatYouHear')) + '" value="' + esc(c.input) + '"' + (checked ? ' disabled' : '') + '>';
      if (!checked) body += '<div class="charbar">' + course().chars.map(function (ch) { return '<button data-act="char" data-ch="' + esc(ch) + '" tabindex="-1">' + esc(ch) + '</button>'; }).join('') + '</div>';
    } else if (ex.t === 'gap') {
      var parts = ex.q.split(/_{3,}/);
      var inputCls = checked ? (res.ok ? ' right' : ' wrong') : '';
      var input = '<input class="gap-input' + inputCls + '" id="gap-input" autocomplete="off" autocapitalize="off" spellcheck="false" lang="' + target + '" placeholder="' + esc(t('typeHere')) + '" value="' + esc(c.input) + '"' + (checked ? ' disabled' : '') + ' size="' + Math.max(8, (ex.a[0] || '').length + 2) + '">';
      if (parts.length > 1) body = '<div class="gapline">' + md(parts[0]) + input + md(parts.slice(1).join('___')) + '</div>';
      else body = '<div class="gapline">' + md(ex.q) + '<br>' + input + '</div>';
      if (!checked) body += '<div class="charbar">' + course().chars.map(function (ch) { return '<button data-act="char" data-ch="' + esc(ch) + '" tabindex="-1">' + esc(ch) + '</button>'; }).join('') + '</div>';
    } else if (ex.t === 'order') {
      qtext = md(ex.q);
      hint = t('orderHint');
      var tcls = checked ? (res.ok ? ' right' : ' wrong') : '';
      body = '<div class="order-target' + tcls + '">' + (c.picked.length ? c.picked.map(function (wi, k) {
        return '<button class="chip" data-act="unpick" data-k="' + k + '"' + (checked ? ' disabled' : '') + '>' + esc(ex.w[wi]) + '</button>';
      }).join('') : '<span class="placeholder">' + esc(t('orderEmpty')) + '</span>') + '</div>' +
        '<div class="order-pool">' + c.pool.map(function (wi) {
          var used = c.picked.indexOf(wi) >= 0;
          return '<button class="chip' + (used ? ' used' : '') + '" data-act="pick" data-w="' + wi + '"' + (checked || used ? ' disabled' : '') + '>' + esc(ex.w[wi]) + '</button>';
        }).join('') + '</div>';
    } else if (ex.t === 'match') {
      qtext = md(ex.q);
      hint = t('matchHint');
      body = ex.p.map(function (pair, i) {
        var cls = checked ? (c.choice[i] === pair[1] ? ' right' : ' wrong') : '';
        return '<div class="match-row"><span class="left" lang="' + target + '">' + md(pair[0]) + '</span><select data-act="match" data-i="' + i + '" class="' + cls + '"' + (checked ? ' disabled' : '') + '>' +
          '<option value="">' + esc(t('choose')) + '</option>' + c.right.map(function (r) {
            return '<option value="' + esc(r) + '"' + (c.choice[i] === r ? ' selected' : '') + '>' + esc(r) + '</option>';
          }).join('') + '</select></div>';
      }).join('');
    }

    var meta = '<div class="qmeta"><span>' + esc(t('question')) + ' ' + (player.idx + 1) + ' ' + esc(t('of')) + ' ' + player.queue.length + '</span>' +
      (player.mode === 'gaps' ? '<span>' + esc(item.topic.level + ' · ' + item.topic.title) + '</span>' : '') + '</div>';
    var fb = checked ? feedbackHtml(ex, res) : '';
    var isLast = player.idx >= player.queue.length - 1;
    var actions = '<div class="qactions">' +
      (checked ? '<span></span><button class="btn primary" data-act="next" id="next-btn">' + esc(isLast ? t('finish') : t('next')) + '</button>'
        : '<button class="btn small" data-act="skip">' + esc(t('skip')) + '</button><button class="btn primary" data-act="check" id="check-btn"' + (canCheck(ex, c) ? '' : ' disabled') + '>' + esc(t('check')) + '</button>') +
      '</div>';

    return dots + '<div class="card qcard">' + meta + (qtext ? '<div class="qtext">' + qtext + '</div>' : '') +
      (hint ? '<p class="qhint">' + esc(hint) + '</p>' : '') + body + '<div aria-live="polite">' + fb + '</div>' + actions + '</div>';
  }
  function canCheck(ex, c) {
    if (ex.t === 'mc' || ex.t === 'listen') return c.sel !== null;
    if (ex.t === 'gap' || ex.t === 'dictation') return String(c.input).trim().length > 0;
    if (ex.t === 'speak') return !!c.heardAlts || !!c.selfOk;
    if (ex.t === 'order') return c.picked.length > 0;
    if (ex.t === 'match') return c.choice.every(function (x) { return x; });
    return false;
  }
  function evaluate(ex, c) {
    var lang = course().target;
    if (ex.t === 'mc' || ex.t === 'listen') {
      return { ok: c.sel === ex.a, given: ex.o[c.sel], correct: ex.o[ex.a], hint: ex.why && ex.why[c.sel] };
    }
    if (ex.t === 'gap' || ex.t === 'dictation') {
      var val = c.input, nv = norm(val, lang, ex.cs);
      var ok = ex.a.some(function (a) { return norm(a, lang, ex.cs) === nv; });
      var hint = null;
      if (!ok) {
        var nvl = norm(val, lang, false);
        if (ex.wrong) Object.keys(ex.wrong).forEach(function (k) { if (!hint && norm(k, lang, false) === nvl) hint = ex.wrong[k]; });
        if (!hint && ex.cs && ex.a.some(function (a) { return norm(a, lang, false) === nvl; })) hint = t('caseHint');
        if (!hint && ex.a.some(function (a) { return fold(norm(a, lang)) === fold(nvl); })) hint = t('specialChars');
      }
      return { ok: ok, given: val, correct: ex.a[0], hint: hint };
    }
    if (ex.t === 'speak') {
      if (c.selfOk) return { ok: true, given: '', correct: ex.say };
      var target = norm(ex.say, lang), best = 0;
      (c.heardAlts || []).forEach(function (h) { best = Math.max(best, levRatio(norm(h, lang), target)); });
      return { ok: best >= 0.8, given: c.heard, correct: ex.say, hint: best >= 0.6 ? t('speakAlmost') : t('speakRetry') };
    }
    if (ex.t === 'order') {
      var sent = c.picked.map(function (i) { return ex.w[i]; }).join(' ');
      var ok2 = ex.a.some(function (a) { return norm(a, lang) === norm(sent, lang); });
      return { ok: ok2, given: sent, correct: ex.a[0], hint: null };
    }
    if (ex.t === 'match') {
      var ok3 = ex.p.every(function (pair, i) { return c.choice[i] === pair[1]; });
      var given = ex.p.map(function (pair, i) { return pair[0] + ' = ' + (c.choice[i] || '–'); }).join(' · ');
      return { ok: ok3, given: given, correct: ex.p.map(function (x) { return x[0] + ' = ' + x[1]; }).join(' · '), hint: null, match: true };
    }
    return { ok: false };
  }
  function feedbackHtml(ex, res) {
    var e = ex.e ? '<div class="fb-sec"><h4>' + esc(t('whyRight')) + '</h4><p>' + md(ex.e) + '</p></div>' : '';
    if (res.ok) {
      return '<div class="fb ok"><div class="fb-title">' + esc(t('great')) + '</div>' + (ex.say ? '<p style="margin:0 0 6px"><b lang="' + course().target + '">' + md(ex.say) + '</b> ' + speakBtn(ex.say) + '</p>' : '') + (ex.e ? '<p style="margin:0">' + md(ex.e) + '</p>' : '') + '</div>';
    }
    var correctHtml;
    if (res.match) {
      correctHtml = '<ul class="pairs">' + ex.p.map(function (x, i) {
        var mine = player.cur.choice[i];
        return '<li>' + (mine === x[1] ? '✅' : '❌') + ' <b>' + md(x[0]) + '</b> = ' + md(x[1]) + (mine !== x[1] ? ' <span class="muted">(' + esc(t('yourAnswer')) + ': <s>' + esc(mine || '–') + '</s>)</span>' : '') + '</li>';
      }).join('') + '</ul>';
      return '<div class="fb bad"><div class="fb-title">' + esc(t('notQuite')) + '</div>' + correctHtml + e + '</div>';
    }
    var why = res.hint || t('genericWrong');
    if (ex.t === 'speak') {
      return '<div class="fb bad"><div class="fb-title">' + esc(t('notQuite')) + '</div>' +
        '<div class="fb-row"><span class="k">' + esc(t('recognized')) + ':</span><s>' + esc(res.given || '–') + '</s></div>' +
        '<div class="fb-row"><span class="k">' + esc(t('rightAnswer')) + ':</span><b>' + md(ex.say) + '</b> ' + speakBtn(ex.say) + '</div>' +
        '<div class="fb-sec"><p>' + esc(why) + '</p></div>' + e +
        '<div class="btn-row" style="margin-top:10px"><button class="btn" data-act="retry">🎤 ' + esc(t('tryAgain')) + '</button></div></div>';
    }
    var heard = ex.say ? '<div class="fb-row"><span class="k">' + esc(t('heard')) + ':</span><b lang="' + course().target + '">' + md(ex.say) + '</b> ' + speakBtn(ex.say) + '</div>' : '';
    return '<div class="fb bad"><div class="fb-title">' + esc(t('notQuite')) + '</div>' + heard +
      '<div class="fb-row"><span class="k">' + esc(t('yourAnswer')) + ':</span><s>' + md(res.given || '–') + '</s></div>' +
      (ex.t === 'dictation' ? '' : '<div class="fb-row"><span class="k">' + esc(t('rightAnswer')) + ':</span><b>' + md(res.correct) + '</b> ' + ((ex.t === 'gap' || ex.t === 'order') ? speakBtn(res.correct) : '') + '</div>') +
      '<div class="fb-sec"><h4>' + esc(t('whyWrong')) + '</h4><p>' + md(why) + '</p></div>' + e + '</div>';
  }
  function renderSummary() {
    var tp = player.topicId ? topicById(player.topicId) : null;
    var title, n, c, open;
    if (player.mode === 'all' && tp) {
      var s = topicStats(tp); n = s.n; c = s.c; open = s.w;
      title = t('summaryTitle');
    } else {
      n = player.queue.length;
      c = player.queue.filter(function (id) { return player.session[id] === true; }).length;
      open = player.topicId ? wrongIds(player.topicId).length : wrongIds().length;
      title = t('reviewDoneTitle');
    }
    var p = pct(c, n);
    var emoji = p === 100 ? '🏆' : (p >= 70 ? '💪' : '📘');
    var btns = '';
    if (open) btns += '<a class="btn primary" href="' + (player.topicId ? '#/topic/' + player.topicId + '/review' : '#/practice') + '" data-act="restart-review">' + esc(t('reviewNow')) + ' (' + open + ')</a>';
    if (tp) btns += '<button class="btn" data-act="redo-all">' + esc(t('redoAll')) + '</button>';
    var nt = nextTopic();
    if (nt && (!tp || nt.id !== tp.id)) btns += '<a class="btn' + (open ? '' : ' primary') + '" href="#/topic/' + nt.id + '/learn">' + esc(t('nextTopic')) + '</a>';
    btns += '<a class="btn" href="#/lessons">' + esc(t('backToLessons')) + '</a>';
    return '<div class="card summary"><div style="font-size:2.6rem">' + emoji + '</div><h2>' + esc(title) + '</h2>' +
      '<div class="big">' + p + '%</div><p>' + esc(t('summaryText', { c: c, n: n })) + '</p>' +
      (open ? '<p class="muted">' + esc(t('stillOpen', { n: open })) + '</p>' : '<p class="muted">' + esc(t('noMistakes')) + '</p>') +
      '<div class="btn-row">' + btns + '</div></div>';
  }

  /* ================= Thema-Seite ================= */
  function viewTopic(id, tab) {
    var tp = topicById(id);
    if (!tp || !tp.avail) return '<div class="empty"><div class="big">🧭</div><p>' + esc(t('comingSoon')) + '</p><a class="btn" href="#/lessons">' + esc(t('backToLessons')) + '</a></div>';
    tab = tab || 'learn';
    var s = topicStats(tp), wN = wrongIds(tp.id).length;
    var subtabs = [
      ['learn', tp.kind === 'dialog' ? '💬 ' + t('dialogTab') : '📖 ' + t('explanation')],
      ['exercises', '✏️ ' + t('exercises') + ' (' + s.c + '/' + s.n + ')'],
      ['review', '🔁 ' + t('review') + (wN ? ' (' + wN + ')' : '')]
    ];
    var content;
    if (tab === 'learn') content = renderLesson(tp);
    else if (tab === 'exercises') {
      var key = tp.id + ':all';
      if (!player || player.key !== key) newPlayer(key, 'all', tp.data.exercises.map(function (_, i) { return exId(tp.id, i); }), tp.id);
      content = renderPlayer();
    } else {
      var rkey = tp.id + ':review';
      if (!player || player.key !== rkey) {
        var q = wrongIds(tp.id);
        if (!q.length) { player = null; content = '<div class="card empty"><div class="big">✅</div><p>' + esc(t('noMistakesTopic')) + '</p><a class="btn" href="#/topic/' + tp.id + '/exercises">' + esc(t('exercises')) + '</a></div>'; }
        else newPlayer(rkey, 'review', q, tp.id);
      }
      if (player && player.key === rkey) content = renderPlayer();
    }
    return '<div class="crumbs"><a href="#/lessons">' + esc(t('lessons')) + '</a> › <a href="#/lessons/' + tp.level + '">' + tp.level + ' · ' + esc(levelName(tp.level)) + '</a></div>' +
      '<div class="topic-header"><div><h1>' + esc(tp.title) + '</h1><div class="muted">' + esc(tp.sub) + '</div></div>' +
      '<span class="lvl lvl-' + tp.level + '">' + tp.level + '</span></div>' +
      '<nav class="subtabs">' + subtabs.map(function (x) {
        return '<a class="subtab' + (x[0] === tab ? ' active' : '') + '" href="#/topic/' + tp.id + '/' + x[0] + '">' + esc(x[1]) + '</a>';
      }).join('') + '</nav>' + content;
  }

  /* ================= Meine Lücken ================= */
  function viewGaps() {
    var ids = wrongIds(), p = prog();
    var head = '<h1>🎯 ' + esc(t('gaps')) + '</h1><p class="muted">' + esc(t('gapsIntro')) + '</p>';
    var list;
    if (!ids.length) {
      list = '<div class="card empty"><div class="big">🌟</div><p>' + esc(t('noMistakes')) + '</p><a class="btn" href="#/lessons">' + esc(t('goLessons')) + '</a></div>';
    } else {
      var groups = {};
      ids.forEach(function (id) { var tid = EXI[id].topicId; (groups[tid] = groups[tid] || []).push(id); });
      list = '<div class="btn-row" style="margin:6px 0 18px"><a class="btn primary" href="#/practice">▶ ' + esc(t('practiceAll')) + ' (' + ids.length + ')</a></div>' +
        Object.keys(groups).map(function (tid) {
          var tp = topicById(tid);
          return '<div class="card gap-group"><div class="gap-group-head"><div><span class="lvl lvl-' + tp.level + '">' + tp.level + '</span> <b>' + esc(tp.title) + '</b> <span class="muted small">· ' + esc(tp.sub) + '</span></div>' +
            '<a class="btn small" href="#/topic/' + tid + '/review">' + esc(t('practiceTopic')) + ' (' + groups[tid].length + ')</a></div>' +
            groups[tid].map(function (id) {
              var it = exById(id), r = p[id]; if (!it) return ''; var ex = it.ex;
              var q = ex.t === 'match' ? ex.q + ' ' + ex.p.map(function (x) { return x[0]; }).join(', ') : ex.q;
              var sol = ex.t === 'mc' ? ex.o[ex.a] : (ex.t === 'match' ? ex.p.map(function (x) { return x[0] + ' = ' + x[1]; }).join(' · ') : ex.a[0]);
              return '<div class="gap-item"><span class="gi-q">' + md(q) + '</span><span class="badge bad">' + (r.w || 1) + esc(t('times')) + '</span>' +
                '<div class="gi-meta"><span>' + esc(t('lastWrong')) + ': <s>' + md(r.a || '–') + '</s></span><span>' + esc(t('solution')) + ': <b>' + md(sol) + '</b></span></div></div>';
            }).join('') + '</div>';
        }).join('');
    }
    // Problemstellen
    var probs = allTopics().filter(function (x) { return x.avail; }).map(function (x) { var st = topicStats(x); return { tp: x, st: st, rate: st.answered ? st.firstW / st.answered : 0 }; })
      .filter(function (x) { return x.st.firstW > 0; }).sort(function (a, b) { return b.rate - a.rate; });
    var probHtml = probs.length ? '<div class="card section"><h2>' + esc(t('problemAreas')) + '</h2><p class="muted small">' + esc(t('problemIntro')) + '</p>' +
      probs.map(function (x) {
        return '<div class="problem"><a href="#/topic/' + x.tp.id + '/learn">' + esc(x.tp.title) + ' <span class="muted small">· ' + x.tp.level + '</span></a>' +
          '<div class="bar thin" title="' + esc(t('errorRate')) + '"><span class="bad" style="width:' + Math.round(x.rate * 100) + '%"></span></div><span class="small" style="text-align:right">' + Math.round(x.rate * 100) + '%</span></div>';
      }).join('') + '</div>' : '';
    return head + list + probHtml;
  }
  function viewPractice() {
    if (!player || player.key !== 'gaps') {
      var q = wrongIds();
      if (!q.length) return '<h1>' + esc(t('mixedPractice')) + '</h1><div class="card empty"><div class="big">🌟</div><p>' + esc(t('noMistakes')) + '</p></div>';
      newPlayer('gaps', 'gaps', shuffle(q), null);
    }
    return '<div class="crumbs"><a href="#/gaps">' + esc(t('gaps')) + '</a></div><h1>🔁 ' + esc(t('mixedPractice')) + '</h1><p class="muted">' + esc(t('fromAllTopics')) + '</p>' + renderPlayer();
  }

  /* ================= Gesamtüberblick ================= */
  function viewOverview() {
    var all = allTopics(), tot = sumStats(all);
    var legend = '<div class="legend"><span><i style="background:var(--ok)"></i>' + esc(t('correct')) + '</span><span><i style="background:var(--bad)"></i>' + esc(t('wrong')) + '</span><span><i style="background:var(--surface-3)"></i>' + esc(t('open')) + '</span></div>';
    var html = LEVELS.map(function (lv) {
      var list = levelTopics(lv), s = sumStats(list);
      var rows = list.map(function (tp) {
        var x = topicStats(tp);
        if (!tp.avail) return '<div class="ov-row planned"><div><div class="t-title">' + esc(tp.title) + '</div><div class="t-sub">' + esc(tp.sub) + '</div></div><div class="ov-bar"><span class="badge">' + esc(t('planned')) + '</span></div><span class="num">–</span><span class="num">–</span><span class="num">–</span></div>';
        return '<div class="ov-row"><div><a class="t-title" href="#/topic/' + tp.id + '/' + (x.answered ? 'exercises' : 'learn') + '">' + esc(tp.title) + '</a><div class="t-sub">' + esc(tp.sub) + ' · ' + x.n + ' ' + esc(t('tasks')) + '</div></div>' +
          '<div class="ov-bar"><div class="bar"><span class="ok" style="width:' + pct(x.c, x.n) + '%"></span><span class="bad" style="width:' + pct(x.w, x.n) + '%"></span></div></div>' +
          '<span class="num ok">' + pct(x.c, x.n) + '%</span><span class="num bad">' + pct(x.w, x.n) + '%</span><span class="num">' + pct(x.o, x.n) + '%</span></div>';
      }).join('');
      return '<div class="card section"><div class="level-head"><span class="lvl lvl-' + lv + '">' + lv + '</span><h2>' + esc(levelName(lv)) + '</h2>' +
        (s.n ? '<span class="muted small">' + esc(t('total')) + ': <b style="color:var(--ok)">' + pct(s.c, s.n) + '% ' + esc(t('correct')) + '</b> · <b style="color:var(--bad)">' + pct(s.w, s.n) + '% ' + esc(t('wrong')) + '</b> · ' + pct(s.o, s.n) + '% ' + esc(t('open')) + '</span>' : '<span class="badge">' + esc(t('comingSoon')) + '</span>') + '</div>' +
        '<div class="ov-row head"><span>' + esc(t('topic')) + '</span><span class="ov-bar"></span><span class="num">✓</span><span class="num">✗</span><span class="num">○</span></div>' + rows + '</div>';
    }).join('');
    return '<div class="section-head"><h1>📊 ' + esc(t('overview')) + '</h1>' + legend + '</div><p class="muted">' + esc(t('overviewIntro')) + '</p>' +
      '<div class="card"><div class="section-head"><b>' + esc(t('totalProgress')) + '</b><span><b style="color:var(--ok)">' + tot.c + '</b> ✓ · <b style="color:var(--bad)">' + tot.w + '</b> ✗ · ' + tot.o + ' ○ / ' + tot.n + '</span></div>' +
      '<div class="bar thick"><span class="ok" style="width:' + pct(tot.c, tot.n) + '%"></span><span class="bad" style="width:' + pct(tot.w, tot.n) + '%"></span></div></div>' + html;
  }

  /* ================= Einstellungen ================= */
  function viewSettings() {
    var th = db.theme || 'system';
    var themeSeg = '<div class="seg">' + [['light', t('light')], ['dark', t('dark')], ['system', t('system')]].map(function (x) {
      return '<button data-act="set-theme" data-v="' + x[0] + '" class="' + (th === x[0] ? 'on' : '') + '">' + esc(x[1]) + '</button>';
    }).join('') + '</div>';
    var courseSeg = '<div class="seg">' + ['de', 'tr'].map(function (cid) {
      var c = K.courses[cid];
      return '<button data-act="set-course" data-v="' + cid + '" class="' + (courseId() === cid ? 'on' : '') + '">' + flag(cid) + ' ' + esc(c.label) + '</button>';
    }).join('') + '</div>';
    var profiles = Object.keys(db.profiles).map(function (id) {
      var p = db.profiles[id], isA = id === db.active;
      return '<div class="profile-row"><div><b>' + esc(p.name || '—') + '</b> ' + (isA ? '<span class="badge ok">' + esc(t('active')) + '</span>' : '') +
        ' <span class="muted small">' + flag(p.course) + ' ' + esc(K.courses[p.course].label) + '</span></div><div class="btn-row">' +
        (isA ? '' : '<button class="btn small" data-act="switch-profile" data-id="' + id + '">' + esc(t('switchTo')) + '</button>') +
        (Object.keys(db.profiles).length > 1 ? '<button class="btn small danger" data-act="delete-profile" data-id="' + id + '">' + esc(t('del')) + '</button>' : '') + '</div></div>';
    }).join('');
    return '<h1>⚙️ ' + esc(t('settings')) + '</h1>' +
      '<div class="card section"><h2>' + esc(t('theme')) + '</h2>' + themeSeg + '</div>' +
      '<div class="card section"><h2>' + esc(t('course')) + '</h2>' + courseSeg + '</div>' +
      '<div class="card section"><h2>' + esc(t('profiles')) + '</h2><p class="muted small">' + esc(t('profilesIntro')) + '</p>' + profiles +
        '<form class="inline-form" data-form="new-profile"><input class="input" name="name" maxlength="30" placeholder="' + esc(t('namePh')) + '" required><button class="btn" type="submit">+ ' + esc(t('newProfile')) + '</button></form></div>' +
      '<div class="card section"><h2>🔊 ' + esc(t('voiceTitle')) + '</h2>' + voiceSettingsHtml() + '</div>' +
      '<div class="card section"><h2>' + esc(t('data')) + '</h2><p class="muted small">' + esc(t('storageNote')) + '</p><div class="btn-row">' +
        '<button class="btn" data-act="export">' + esc(t('exportBtn')) + '</button>' +
        '<label class="btn" style="cursor:pointer">' + esc(t('importBtn')) + '<input type="file" accept="application/json,.json" data-act="import" hidden></label>' +
        '<button class="btn danger" data-act="reset-course">' + esc(t('resetCourse')) + '</button></div></div>';
  }

  /* ================= Render ================= */
  function render() {
    applyTheme();
    if (!db.active || !db.profiles[db.active]) {
      var ids = Object.keys(db.profiles);
      if (ids.length) { db.active = ids[0]; save(); }
      else { document.documentElement.lang = 'de'; document.title = 'Deutsch ⇄ Türkçe'; app.innerHTML = viewOnboarding(); return; }
    }
    var r = parseHash(), active = r.page, inner;
    // Player zurücksetzen, wenn man die Übungsansicht verlässt
    var inPlayer = (r.page === 'topic' && (r.b === 'exercises' || r.b === 'review')) || r.page === 'practice';
    if (!inPlayer) player = null;
    switch (r.page) {
      case 'lessons': inner = viewLessons(r.a); break;
      case 'topic': inner = viewTopic(r.a, r.b); active = 'lessons'; break;
      case 'gaps': inner = viewGaps(); break;
      case 'practice': inner = viewPractice(); active = 'gaps'; break;
      case 'overview': inner = viewOverview(); break;
      case 'settings': inner = viewSettings(); break;
      default: inner = viewDashboard(); active = 'dashboard';
    }
    app.innerHTML = shell(active, inner);
    afterRender();
  }
  function rerenderPlayerOnly() {
    // Rendert die Seite neu, behält aber Scrollposition und Fokus sinnvoll bei
    var y = window.scrollY; render(); window.scrollTo(0, y);
  }
  function afterRender() {
    if (player && !player.done && !player.checked) {
      var it = curEx();
      if (it && it.ex.say && (it.ex.t === 'listen' || it.ex.t === 'dictation') && player.autoKey !== it.id) {
        player.autoKey = it.id; setTimeout(function () { speak(it.ex.say, course().tts); }, 250);
      }
    }
    var gi = document.getElementById('gap-input');
    if (gi && !gi.disabled) { gi.focus({ preventScroll: true }); var v = gi.value; gi.value = ''; gi.value = v; }
    var nb = document.getElementById('next-btn');
    if (nb) nb.focus({ preventScroll: true });
  }

  /* ================= Events ================= */
  app.addEventListener('click', function (ev) {
    var sp = ev.target.closest('[data-speak]');
    if (sp) { ev.preventDefault(); speak(sp.getAttribute('data-speak'), course().tts); return; }
    var el = ev.target.closest('[data-act]');
    if (!el) return;
    var act = el.getAttribute('data-act');
    switch (act) {
      case 'ob-choose': obName = (document.getElementById('ob-name') || {}).value || ''; obChoice = el.getAttribute('data-c'); app.innerHTML = viewOnboarding(); break;
      case 'ob-start': {
        var nm = (document.getElementById('ob-name') || {}).value || '';
        createProfile(nm, obChoice); location.hash = '#/dashboard'; render(); break;
      }
      case 'toggle-theme': db.theme = currentThemeIsDark() ? 'light' : 'dark'; save(); render(); break;
      case 'set-theme': db.theme = el.getAttribute('data-v'); save(); render(); break;
      case 'toggle-course': switchCourse(courseId() === 'de' ? 'tr' : 'de'); break;
      case 'set-course': switchCourse(el.getAttribute('data-v')); break;
      case 'mc': if (player && !player.checked) { player.cur.sel = +el.getAttribute('data-i'); rerenderPlayerOnly(); } break;
      case 'char': {
        var inp = document.getElementById('gap-input'); if (!inp) break;
        var ch = el.getAttribute('data-ch'), s0 = inp.selectionStart || inp.value.length, s1 = inp.selectionEnd || inp.value.length;
        inp.value = inp.value.slice(0, s0) + ch + inp.value.slice(s1); player.cur.input = inp.value;
        inp.focus(); inp.setSelectionRange(s0 + ch.length, s0 + ch.length);
        var cb = document.getElementById('check-btn'); if (cb) cb.disabled = !inp.value.trim();
        break;
      }
      case 'pick': if (player && !player.checked) { player.cur.picked.push(+el.getAttribute('data-w')); rerenderPlayerOnly(); } break;
      case 'unpick': if (player && !player.checked) { player.cur.picked.splice(+el.getAttribute('data-k'), 1); rerenderPlayerOnly(); } break;
      case 'check': doCheck(); break;
      case 'mic': if (player && !player.checked) {
        var pc = player.cur; pc.listening = true; pc.micError = null; rerenderPlayerOnly();
        startListening(function (alts) { pc.listening = false; pc.heardAlts = alts; pc.heard = alts[0]; doCheck(); },
          function (err) { pc.listening = false; pc.micError = err; rerenderPlayerOnly(); });
      } break;
      case 'self-ok': if (player && !player.checked) { player.cur.selfOk = true; doCheck(); } break;
      case 'retry': if (player) { player.cur = null; player.checked = false; player.result = null; rerenderPlayerOnly(); } break;
      case 'next': doNext(); break;
      case 'skip': if (player) { player.idx++; player.cur = null; player.checked = false; if (player.idx >= player.queue.length) player.done = true; rerenderPlayerOnly(); } break;
      case 'jump': if (player) { player.idx = +el.getAttribute('data-i'); player.cur = null; player.checked = false; player.done = false; rerenderPlayerOnly(); } break;
      case 'redo-all': if (player && player.topicId) { var tid = player.topicId; player = null; newPlayer(tid + ':all', 'all', topicById(tid).data.exercises.map(function (_, i) { return exId(tid, i); }), tid); player.idx = 0; rerenderPlayerOnly(); } break;
      case 'restart-review': ev.preventDefault(); player = null; go(el.getAttribute('href')); break;
      case 'switch-profile': db.active = el.getAttribute('data-id'); save(); player = null; render(); break;
      case 'delete-profile': {
        var pid = el.getAttribute('data-id'), pn = db.profiles[pid].name || '—';
        if (armed(el, t('confirmDelete', { n: pn }))) { delete db.profiles[pid]; if (db.active === pid) db.active = Object.keys(db.profiles)[0]; save(); render(); }
        break;
      }
      case 'export': doExport(); break;
      case 'voice-gender': if (!el.disabled) {
        db.voiceGender = el.getAttribute('data-v'); db.voices = db.voices || {}; delete db.voices[course().tts]; save(); render();
        var pvx = piperVoices(course().target), gk = db.voiceGender === 'm' ? pvx.male : (pvx.female || (db.voiceGender ? null : pvx.male));
        var smp = gk && AUDIO && AUDIO.samples && AUDIO.samples[course().target] && AUDIO.samples[course().target][gk];
        if (smp) playUrl('audio/' + smp); else deviceSpeak(t('testSentence'), course().tts);
      } break;
      case 'play-sample': playUrl(el.getAttribute('data-url')); break;
      case 'dl-play': { var tpd = topicById(parseHash().a); if (tpd) playDialog(tpd, !!el.getAttribute('data-slow')); break; }
      case 'dl-tr': { dialogShowTr = !dialogShowTr; var box = document.querySelector('.dialog'); if (box) box.classList.toggle('show-tr', dialogShowTr); el.setAttribute('aria-pressed', dialogShowTr); break; }
      case 'play-say': if (el.getAttribute('data-slow')) speakSlow(el.getAttribute('data-say'), course().tts, el.getAttribute('data-g') || ''); else speak(el.getAttribute('data-say'), course().tts, null, false, el.getAttribute('data-g') || ''); break;
      case 'voice-test': { var sel = document.getElementById('voice-sel'); speak(t('testSentence'), course().tts, sel ? sel.value : null); break; }
      case 'reset-course': if (armed(el, t('confirmReset'))) { prof().prog[courseId()] = {}; save(); player = null; render(); } break;
    }
  });
  app.addEventListener('input', function (ev) {
    if (ev.target.id === 'gap-input' && player) {
      player.cur.input = ev.target.value;
      var cb = document.getElementById('check-btn'); if (cb) cb.disabled = !ev.target.value.trim();
    }
  });
  app.addEventListener('change', function (ev) {
    var el = ev.target;
    if (el.matches('select[data-act="match"]') && player) {
      player.cur.choice[+el.getAttribute('data-i')] = el.value;
      var cb = document.getElementById('check-btn'); if (cb) cb.disabled = !canCheck(curEx().ex, player.cur);
    }
    if (el.matches('input[data-act="import"]')) doImport(el.files && el.files[0]);
    if (el.matches('select[data-act="voice"]')) { db.voices = db.voices || {}; db.voices[course().tts] = el.value; save(); speak(t('testSentence'), course().tts, el.value); }
  });
  app.addEventListener('keydown', function (ev) {
    if (ev.key === 'Enter' && ev.target.id === 'gap-input') { ev.preventDefault(); doCheck(); }
    if (ev.key === 'Enter' && ev.target.id === 'ob-name') { ev.preventDefault(); var b = app.querySelector('[data-act="ob-start"]'); if (b) b.click(); }
  });
  document.addEventListener('keydown', function (ev) {
    if (!player || ev.target.tagName === 'INPUT' || ev.target.tagName === 'SELECT' || ev.altKey || ev.ctrlKey || ev.metaKey) return;
    var item = player.done ? null : curEx(); if (!item) return;
    if (!player.checked && (item.ex.t === 'mc' || item.ex.t === 'listen') && /^[1-7a-gA-G]$/.test(ev.key)) {
      var i = /\d/.test(ev.key) ? +ev.key - 1 : 'abcdefg'.indexOf(ev.key.toLowerCase());
      if (i < item.ex.o.length) { player.cur.sel = i; rerenderPlayerOnly(); }
    }
  });
  app.addEventListener('submit', function (ev) {
    var f = ev.target;
    if (f.getAttribute('data-form') === 'new-profile') {
      ev.preventDefault();
      var name = f.elements.name.value.trim(); if (!name) return;
      createProfile(name, courseId()); player = null; render();
    }
  });

  /* Zweistufige Bestätigung im Button selbst (confirm() ist in manchen Einbettungen blockiert) */
  function armed(el, question) {
    if (el.getAttribute('data-armed') === '1') return true;
    el.setAttribute('data-armed', '1'); var old = el.innerHTML;
    el.innerHTML = '⚠️ ' + esc(question) + ' ' + esc(t('clickAgain'));
    setTimeout(function () { if (el.isConnected) { el.removeAttribute('data-armed'); el.innerHTML = old; } }, 4000);
    return false;
  }
  function switchCourse(cid) {
    if (cid === courseId()) return;
    prof().course = cid; save(); player = null;
    var r = parseHash();
    if (r.page === 'topic' || r.page === 'practice') location.hash = '#/dashboard';
    render(); toast(K.courses[cid].label);
  }
  function doCheck() {
    if (!player || player.checked) return;
    var item = curEx(); if (!item) return;
    if (!canCheck(item.ex, player.cur)) return;
    var res = evaluate(item.ex, player.cur);
    player.result = res; player.checked = true;
    player.session[item.id] = res.ok;
    record(item.id, res.ok, res.given);
    rerenderPlayerOnly();
  }
  function doNext() {
    if (!player) return;
    player.idx++; player.cur = null; player.checked = false; player.result = null;
    if (player.idx >= player.queue.length) player.done = true;
    rerenderPlayerOnly();
    var card = document.querySelector('.qcard, .summary');
    if (card && card.getBoundingClientRect().top < 70) card.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
  function doExport() {
    var p = prof();
    var data = { app: 'deutsch-tuerkce', v: 1, exported: new Date().toISOString(), profile: { name: p.name, course: p.course, prog: p.prog } };
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = 'fortschritt-ilerleme-' + (p.name || 'profil').replace(/[^\wäöüßçğışı-]+/gi, '_') + '.json';
    document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }
  function doImport(file) {
    if (!file) return;
    var rd = new FileReader();
    rd.onload = function () {
      try {
        var d = JSON.parse(rd.result);
        if (!d || !d.profile || !d.profile.prog) throw new Error('bad');
        var p = prof();
        ['de', 'tr'].forEach(function (cid) {
          var src = d.profile.prog[cid] || {}; p.prog[cid] = p.prog[cid] || {};
          Object.keys(src).forEach(function (k) {
            var cur = p.prog[cid][k];
            if (!cur || (src[k].t || 0) > (cur.t || 0)) p.prog[cid][k] = src[k];
          });
        });
        save(); toast(t('imported')); render();
      } catch (e) { toast(t('importFail')); }
    };
    rd.readAsText(file);
  }

  loadAudioManifest();
  render();
})();
