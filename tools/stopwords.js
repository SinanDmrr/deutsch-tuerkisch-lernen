/* Stoppwörter für die Abdeckungsmessung im Validator (tools/validate.js).
 * Funktionswörter und häufige Flexionsformen, die im Wortschatz nicht einzeln stehen, aber auf A1/A2 selbstverständlich sind.
 * Bewusst klein und pragmatisch – kein Wörterbuch. Ergänzen, wenn die Liste „unbekannter Wörter“ im Validator immer dieselben
 * Funktionswörter zeigt. Alles kleingeschrieben (TR: İ → i). */
const words = s => s.split(/\s+/).filter(Boolean);
module.exports = {
  de: new Set(words(`
    der die das den dem des ein eine einen einem einer eines kein keine keinen keinem keiner keines
    mein meine meinen meinem meiner meines dein deine deinen deinem deiner sein seine seinen seinem seiner ihr ihre ihren ihrem ihrer
    unser unsere unseren unserem unserer euer eure euren eurem eurer dieser diese dieses diesen diesem jeder jede jedes jeden jedem
    ich du er sie es wir ihr mich dich ihn uns euch mir dir ihm ihnen man sich selbst
    im am zum zur vom beim ins aufs ans fürs ums übers unterm vorm
    in an auf mit von zu bei nach aus für über unter neben zwischen hinter vor durch gegen ohne um bis seit während wegen ab entlang
    und oder aber denn weil dass ob wenn als wie dann doch auch noch nur schon sehr mal ja nein nicht kein nichts nie immer oft
    hier dort da wo wer was wann warum wie wohin woher welche welcher welches viel viele mehr wenig wenige alle alles etwas
    bin bist ist sind seid war waren warst wart wäre wären gewesen sein
    habe hast hat haben habt hatte hatten hättest hätte hätten gehabt
    werde wirst wird werden werdet wurde wurden geworden
    kann kannst können könnt konnte konnten könnte könnten muss musst müssen müsst musste mussten
    will willst wollen wollt wollte wollten soll sollst sollen sollt sollte sollten darf darfst dürfen dürft durfte durften
    mag magst mögen möchte möchtest möchten möchtet
    zum heute morgen gestern jetzt bald dann danach vorher später immer bitte danke gern gerne
    erste ersten zweite zweiten dritte dritten
  `)),
  tr: new Set(words(`
    ben sen o biz siz onlar beni seni onu bizi sizi onları bana sana ona bize size onlara bende sende onda bizde sizde onlarda
    benden senden ondan bizden sizden onlardan benim senin onun bizim sizin onların bu şu bunu şunu bunun şunun buna şuna bunda şunda bundan şundan
    bunlar şunlar bunları şunları bir iki her hiç bütün tüm bazı hepsi herkes kimse hiçbir birkaç
    ve ile ama fakat ancak çünkü yani veya ya da de ki mi mı mu mü değil için gibi kadar sonra önce göre karşı rağmen beri dolayı
    var yok çok az daha en pek biraz ne neden niçin nasıl nerede nereye nereden kim kime kimi kimin hangi kaç kaçta zaman
    evet hayır belki tamam lütfen teşekkürler şimdi bugün yarın dün artık henüz hâlâ zaten sadece yalnız bile hem
    idi imiş ise iken olarak olan olur olursa olsun olacak olmak oldu olduğu olduğunu olmuş olmaz olmuyor oluyor olabilir olabilirim olduk oldum olduğum
    mısın misin misiniz müsün müsünüz mıyım miyim muyuz müyüz miyiz mıyız mıyız
    onda önce ayın
  `)),
};
