// --- HISTORICAL DATA FOR THE LEARNING HUB ---

const timelineEvents = [
  {
    year: "28. Juni 1914",
    title: "Das Attentat von Sarajevo",
    category: "politisch",
    summary: "Der österreichische Thronfolger Franz Ferdinand und seine Frau werden in Sarajevo von serbischen Nationalisten (Gavrilo Princip) ermordet.",
    details: [
      "Dieses Ereignis war der direkte **Anlass** (der zündende Funke), nicht jedoch die tiefere Ursache des Krieges.",
      "Es löste die sogenannte **Julikrise** aus, eine vierwöchige diplomatische Kettenreaktion der europäischen Großmächte.",
      "**Blankoscheck:** Deutschland versicherte Österreich-Ungarn am 5. Juli bedingungslose Bündnistreue für ein hartes Vorgehen gegen Serbien."
    ],
    tip: "Unterscheide in deiner Analyse strikt zwischen dem **Anlass** (Sarajevo) und den **strukturellen Ursachen** (Imperialismus, Nationalismus, Bündnissysteme, Wettrüsten)."
  },
  {
    year: "August 1914",
    title: "Kriegsausbruch & Schlieffen-Plan",
    category: "militarisch",
    summary: "Deutschland erklärt Russland und Frankreich den Krieg und marschiert völkerrechtswidrig durch das neutrale Belgien.",
    details: [
      "**Schlieffen-Plan:** Strategie der deutschen Heeresleitung, um einen Zweifrontenkrieg zu verhindern. Frankreich sollte in einem schnellen 'Blitzfeldzug' im Westen niedergeworfen werden, bevor Russland im Osten voll mobilisieren konnte.",
      "**Belgische Neutralität:** Der Einmarsch in Belgien zwang Großbritannien zum Kriegseintritt gegen Deutschland.",
      "**Augusterlebnis:** Mythos einer landesweiten, allseitigen Kriegsbegeisterung. Tatsächlich gab es diese vor allem in den Städten und im Bürgertum, auf dem Land und bei der Arbeiterschaft herrschte oft tiefe Sorge."
    ],
    tip: "Das Scheitern des Schlieffen-Plans bereits im September 1914 (Wunder an der Marne) besiegelte die strategische Niederlage Deutschlands, da ein langer Abnutzungskrieg an zwei Fronten wirtschaftlich nicht zu gewinnen war."
  },
  {
    year: "1914 - 1918",
    title: "Vom Bewegungs- zum Stellungskrieg",
    category: "militarisch",
    summary: "Die Fronten im Westen erstarren. Der Krieg wandelt sich in einen grausamen Abnutzungskrieg in den Schützengräben.",
    details: [
      "**Stellungskrieg:** Hunderte Kilometer lange Graben- und Festungssysteme. Keine der Parteien kann nennenswerte Geländegewinne erzielen.",
      "**Materialschlacht:** Der Krieg wird durch den massiven Einsatz von Industrieerzeugnissen entschieden (Granaten, Maschinengewehre, Giftgas, Panzer und Flugzeuge). Die Schlachten von **Verdun** und an der **Somme** (1916) forderten Millionen Opfer ohne strategisches Ergebnis.",
      "Der einzelne Soldat verliert an Bedeutung – er wird zum 'Menschenmaterial' in der industrialisierten Tötungsmaschinerie."
    ],
    tip: "Der Begriff **'Materialschlacht'** ist ein zentraler Schlüsselbegriff der Moderne. Er zeigt den Wandel zum technisierten, entpersonalisierten Krieg."
  },
  {
    year: "1916 / 1917",
    title: "Die totalisierte Heimatfront & Hunger",
    category: "heimatfront",
    summary: "Der Krieg erfasst die gesamte Gesellschaft und Wirtschaft. Die Zivilbevölkerung leidet unter extremem Mangel.",
    details: [
      "**Steckrübenwinter 1916/17:** Wegen der britischen Seeblockade kollabiert die deutsche Lebensmittelversorgung. Steckrüben werden zum Hauptnahrungsmittel. Hunger und Kälte fordern Hunderttausende zivile Todesopfer.",
      "**Frauenarbeit:** Da Millionen Männer an der Front kämpfen, übernehmen Frauen die Arbeit in Rüstungsfabriken, Post und Nahverkehr. Dies stärkt langfristig das weibliche Selbstbewusstsein und ebnet den Weg zum Frauenwahlrecht 1918.",
      "**Hindenburg-Programm (1916):** Totale Mobilisierung aller wirtschaftlichen und menschlichen Ressourcen für die Rüstung unter der De-facto-Militärdiktatur der OHL (Oberste Heeresleitung)."
    ],
    tip: "Für AFB I: Stelle dar, dass der Erste Weltkrieg ein **'Totaler Krieg'** war, weil die Grenze zwischen Front (Soldaten) und Heimatfront (Zivilisten) fast vollständig aufgelöst wurde."
  },
  {
    year: "April 1917",
    title: "Das Epochenjahr 1917 (USA-Eintritt)",
    category: "politisch",
    summary: "Zwei weltgeschichtliche Ereignisse verändern das globale Machtgefüge fundamental.",
    details: [
      "**Kriegseintritt der USA:** Nach der Verkündung des uneingeschränkten U-Boot-Krieges durch die deutsche OHL treten die USA im April 1917 aufseiten der Entente ein. Dies bringt den Alliierten unerschöpfliche frische Truppen und wirtschaftliche Überlegenheiten.",
      "**Russische Revolution:** Im März 1917 stürzt der Zar, im November übernehmen die bolschewistischen Kommunisten unter Lenin in der Oktoberrevolution die Macht. Russland scheidet als Kriegsgegner aus."
    ],
    tip: "Das Jahr 1917 wird als **Zäsur** oder **Epochenjahr** bezeichnet, da es den Aufstieg der USA und Sowjetrusslands zu den dominierenden Weltmächten des 20. Jahrhunderts einleitet."
  },
  {
    year: "März 1918",
    title: "Diktatfriede von Brest-Litovsk",
    category: "politisch",
    summary: "Das revolutionäre Sowjetrussland kapituliert im Osten und muss einem extrem harten deutschen Friedensvertrag zustimmen.",
    details: [
      "Russland verliert riesige Territorien (Ukraine, Baltikum, Polen) und ein Drittel seiner Bevölkerung.",
      "Die deutsche OHL demonstrierte hier, welchen brutalen Annexionsfrieden sie auch im Westen diktiert hätte, wenn sie gesiegt hätte."
    ],
    tip: "Historiker nutzen den Vertrag von Brest-Litovsk oft als Argument gegen die deutsche Opferrolle von 1919: Wer selbst einen derartigen Gewaltfrieden diktiert, konnte 1919 schwerlich über mangelnde Härte der Alliierten klagen."
  },
  {
    year: "Oktober / November 1918",
    title: "Novemberrevolution & Zusammenbruch",
    category: "politisch",
    summary: "Das Kaiserreich stürzt. Die Unzufriedenheit und der drohende militärische Zusammenbruch führen zur Revolution.",
    details: [
      "**OHL-Eingeständnis:** Im September 1918 fordert Ludendorff (OHL) überraschend sofortige Waffenstillstandsverhandlungen, da die Front vor dem Kollaps steht. Gleichzeitig fordert er die Parlamentarisierung, um die Schuld für die Niederlage den demokratischen Politikern zuzuschieben (Grundstein der **Dolchstoßlegende**).",
      "**Kieler Matrosenaufstand:** Als die Seekriegsleitung die Flotte Ende Oktober zu einer sinnlosen 'letzten Schlacht' opfern will, meutern die Matrosen in Kiel. Dies löst eine landesweite Revolution aus (Arbeiter- und Soldatenräte entstehen).",
      "**9. November 1918:** Reichskanzler Max von Baden verkündet eigenmächtig die Abdikation des Kaisers Wilhelm II. Philipp Scheidemann (SPD) und Karl Liebknecht (Spartakusbund) rufen unabhängig voneinander die Republik aus."
    ],
    tip: "In AFB III wird die Novemberrevolution oft bewertet. War es eine 'unvollendete' Revolution? Ja, denn zwar wurde die Monarchie gestürzt, aber alte elitäre Strukturen in Justiz, Militär und Verwaltung blieben unberührt."
  },
  {
    year: "11. November 1918",
    title: "Waffenstillstand von Compiègne",
    category: "politisch",
    summary: "In einem Eisenbahnwaggon bei Compiègne wird der Waffenstillstand unterzeichnet. Die Waffen schweigen.",
    details: [
      "Unterzeichnet wird der Vertrag auf deutscher Seite nicht vom Militär (OHL), sondern von dem Zentrumspolitiker Matthias Erzberger.",
      "Dies war ein taktisches Manöver der Generäle Hindenburg und Ludendorff, um die eigene Verantwortung für die Niederlage zu verschleiern."
    ],
    tip: "Für Erzberger endete diese Unterschrift tödlich: Er wurde 1921 von rechtsradikalen Terroristen als 'Erfüllungspolitiker' und 'Vaterlandsverräter' ermordet."
  },
  {
    year: "28. Juni 1919",
    title: "Der Versailler Vertrag",
    category: "politisch",
    summary: "Der Friedensvertrag wird von den Alliierten diktiert. Im Deutschen Reich wird er als ungerechter Schandvertrag empfunden.",
    details: [
      "**Harte Bestimmungen:** Deutschland verliert 13% seines Territoriums (u.a. Elsass-Lothringen, Danziger Korridor), alle Kolonien, muss sein Militär extrem verkleinern (100.000-Mann-Heer, keine Luftwaffe/U-Boote) und astronomische Reparationen leisten.",
      "**Artikel 231 (Kriegsschuldparagraph):** Schreibt Deutschland und seinen Verbündeten die alleinige Urheberschaft und Schuld für alle Verluste und Schäden des Krieges zu.",
      "**Auswirkung:** Der Vertrag wurde parteiübergreifend als **'Diktatfrieden'** wahrgenommen. Er belastete die junge Weimarer Demokratie psychologisch und ökonomisch schwer und wurde zur stärksten Waffe der rechtsextremen Propaganda."
    ],
    tip: "Verwende in der Diskussion (AFB II) das Kriterium der **Konstruktfähigkeit**: War Versailles zu hart für einen dauerhaften Frieden, aber zu weich, um Deutschland dauerhaft als Macht auszuschalten?"
  },
  {
    year: "1920 - 1922",
    title: "Rechter Terror & Putschversuche",
    category: "politisch",
    summary: "Rechtsradikale Kräfte versuchen die junge Republik gewaltsam zu stürzen. Fememorde erschüttern das Land.",
    details: [
      "**Kapp-Lüttwitz-Putsch (1920):** Freikorps-Truppen besetzen Berlin, um eine Militärdiktatur zu errichten. Die Regierung flieht. Der Putsch scheitert nach wenigen Tagen am geschlossenen Generalstreik der Arbeiterschaft.",
      "**Politischer Terror (Organisation Consul):** Die Geheimgruppe ermordet systematisch demokratische Politiker. Opfer sind unter anderem Finanzminister **Matthias Erzberger** (1921) und Außenminister **Walter Rathenau** (1922).",
      "**Justiz auf dem rechten Auge blind:** Richter verurteilen linke Straftäter drakonisch, während rechte Terroristen oft mit mildesten Strafen oder Freisprüchen davonkommen."
    ],
    tip: "Die Weimarer Republik war eine **'Demokratie ohne Demokraten'** – die tragenden Säulen des Staates (Militär, Richter, Beamte) sehnten sich meist nach dem alten Kaiserreich zurück."
  },
  {
    year: "Januar - November 1923",
    title: "Das Krisenjahr 1923 (Ruhrbesetzung & Inflation)",
    category: "heimatfront",
    summary: "Die Republik steht am Abgrund: Ruhrbesetzung, Hyperinflation und Putschversuche drohen das Land zu zerreißen.",
    details: [
      "**Ruhrbesetzung:** Weil Deutschland mit Reparationszahlungen im Rückstand ist, besetzen französische und belgische Truppen das Ruhrgebiet. Die Reichsregierung ruft zum **'passiven Widerstand'** auf (Streik).",
      "**Hyperinflation:** Um den Streik der Arbeiter und die Staatsausgaben zu finanzieren, druckt die Regierung Unmengen Geld. Die Mark verliert jeglichen Wert. Sparguthaben des Bürgertums werden vernichtet. Ein Brot kostet im November 1923 schließlich 200 Milliarden Mark.",
      "**Adolf Hitlers Putschversuch (9. November 1923):** Im tiefsten Chaos versucht Hitler in München den 'Marsch auf Berlin', um die Demokratie zu stürzen. Der Putsch scheitert kläglich im Feuer der bayerischen Landespolizei."
    ],
    tip: "Das Jahr 1923 ist das perfekte Thema für AFB III. Bewerte das Überleben der Republik: Stresemann beendete den Ruhrkampf, führte die **Rentenmark** ein und stabilisierte die Lage. Es war der Übergang in die 'Goldenen Zwanziger'."
  }
];

const flashcardsData = [
  {
    term: "Imperialismus",
    definition: "Das Streben von Großmächten nach territorialer, wirtschaftlicher und politischer Expansion außerhalb der eigenen Staatsgrenzen (z. B. Kolonialismus zwischen 1880 und 1914). Führte zu globalen Spannungen."
  },
  {
    term: "Militarismus",
    definition: "Eine gesellschaftliche Haltung, bei der militärische Verhaltensweisen (Gehorsam, Uniformen, Parade) das zivile Leben dominieren und der Krieg als legitimes Mittel der Politik angesehen wird. Besonders ausgeprägt im deutschen Kaiserreich."
  },
  {
    term: "Schlieffen-Plan",
    definition: "Deutscher Militärplan für einen Zweifrontenkrieg. Sah vor, Frankreich rasch im Westen durch einen Einmarsch über das neutrale Belgien zu besiegen, um danach die gesamte Armee gegen das langsamer mobilisierende Russland im Osten zu werfen. Scheiterte im September 1914."
  },
  {
    term: "Stellungskrieg",
    definition: "Eine defensive Kriegsform, bei der sich die verfeindeten Armeen in tief gestaffelten Schützengräben gegenüberliegen und keine Partei Geländegewinne erzielen kann. Kennzeichnend für die Westfront von 1914 bis 1918."
  },
  {
    term: "Materialschlacht",
    definition: "Kriegsführung, bei der nicht taktische Manöver, sondern der schiere, massenhafte Einsatz von Waffen, Munition und industriellen Ressourcen (Granaten, Giftgas, Flugzeuge) über Sieg oder Niederlage entscheiden (z. B. Schlacht um Verdun)."
  },
  {
    term: "Burgfrieden",
    definition: "Der parteiübergreifende Konsens im Deutschen Reich bei Kriegsausbruch 1914. Alle politischen Parteien (insbesondere auch die SPD) stellten innenpolitische Streitigkeiten ein und stimmten geschlossen den Kriegskrediten zu."
  },
  {
    term: "Epochenjahr 1917",
    definition: "Bezeichnung für das Jahr 1917 aufgrund zweier weltgeschichtlicher Wendepunkte: Der Kriegseintritt der USA (Entscheidung des Krieges) und die Russische Oktoberrevolution (Aufstieg des Kommunismus)."
  },
  {
    term: "Dolchstoßlegende",
    definition: "Eine rechtsextreme Verschwörungstheorie der deutschen Heeresleitung (OHL). Sie besagt, das deutsche Heer sei an der Front 'im Felde unbesiegt' geblieben, aber von Sozialdemokraten und Juden aus der Heimat durch Streiks und Revolution 'von hinten erdolcht' worden."
  },
  {
    term: "Kriegsschuldparagraph 231",
    definition: "Zentraler Artikel des Versailler Friedensvertrags von 1919. Er wies dem Deutschen Reich und seinen Verbündeten die alleinige Schuld für den Ausbruch des Ersten Weltkriegs zu und diente als juristische Rechtfertigung für die Reparationen."
  },
  {
    term: "Diktatfrieden",
    definition: "Begriff, mit dem in Deutschland fast alle politischen Lager den Versailler Vertrag bezeichneten. Er verweist darauf, dass die deutschen Abgesandten nicht an den Verhandlungen teilnehmen durften und den Vertrag unter Androhung des Wiedereinmarsches unterzeichnen mussten."
  },
  {
    term: "Ruhrbesetzung 1923",
    definition: "Die Besetzung des industriellen Herzens Deutschlands (Ruhrgebiet) durch französische und belgische Truppen im Januar 1923, da Deutschland mit den Holz- und Kohle-Reparationen im Verzug war. Löste den passiven Widerstand aus."
  },
  {
    term: "Rentenmark",
    definition: "Eine provisorische Währung, die im November 1923 zur Beendigung der Hyperinflation eingeführt wurde. Sie war durch Grundbesitz und Sachwerte gedeckt. Sie stellte das Vertrauen in das Geld wieder her und rettete die Währung."
  },
  {
    term: "Zweifrontenkrieg",
    definition: "Ein Krieg, der gleichzeitig an zwei räumlich getrennten Grenzen (Fronten) geführt werden muss. Im Ersten Weltkrieg musste Deutschland zeitgleich im Westen (Frankreich/UK) und Osten (Russland) kämpfen."
  },
  {
    term: "Steckrübenwinter 1916/17",
    definition: "Der katastrophale Hungerwinter in Deutschland, ausgelöst durch Missernten und die britische Seeblockade. Die Bevölkerung ernährte sich notgedrungen fast ausschließlich von Steckrüben, was zu Hunderttausenden Opfern führte."
  },
  {
    term: "Novemberrevolution",
    definition: "Der Umsturz im November 1918, der zum Ende der Monarchie (Abdankung des Kaisers) und zur Ausrufung der ersten deutschen Republik führte, ausgehend vom Kieler Matrosenaufstand."
  },
  {
    term: "Ebert-Groener-Pakt",
    definition: "Geheimbündnis vom 10. November 1918 zwischen dem SPD-Vorsitzenden Friedrich Ebert und General Wilhelm Groener (OHL). Sichert der neuen Regierung die Unterstützung des Militärs gegen linke Rätekräfte."
  },
  {
    term: "Hyperinflation 1923",
    definition: "Der völlige Wertverlust der Mark durch massives Gelddrucken zur Finanzierung des passiven Widerstands gegen die Ruhrbesetzung. Vernichtete die Ersparnisse des Mittelstands komplett."
  },
  {
    term: "Goldene Zwanziger",
    definition: "Die Phase relativer wirtschaftlicher und politischer Stabilisierung sowie kultureller Blüte in der Weimarer Republik zwischen 1924 und 1929, eingeleitet durch die Währungsreform von 1923."
  },
  {
    term: "Kapp-Putsch 1920",
    definition: "Ein rechtsradikaler Putschversuch unter Wolfgang Kapp und General Lüttwitz gegen die Weimarer Regierung. Scheiterte nach wenigen Tagen am historischen Generalstreik der Gewerkschaften."
  },
  {
    term: "Weimarer Koalition",
    definition: "Das tragende Bündnis demokratischer Parteien (SPD, Zentrum, DDP) in der Anfangsphase der Weimarer Republik, das die demokratische Verfassung ausarbeitete und stützte."
  }
];

const quizQuestions = [
  {
    question: "Was war der direkte Anlass (Auslöser) für den Ersten Weltkrieg?",
    options: [
      { text: "Der Einmarsch deutscher Truppen in das neutrale Belgien", correct: false },
      { text: "Das Attentat von Sarajevo auf den österreichischen Thronfolger am 28. Juni 1914", correct: true },
      { text: "Die Verkündung des uneingeschränkten U-Boot-Krieges durch die deutsche OHL", correct: false },
      { text: "Das deutsch-britische Flottenwettrüsten", correct: false }
    ],
    explanation: "Das Attentat von Sarajevo war der direkte ANLASS. Die tieferen URSACHEN lagen jedoch im Imperialismus, dem Bündnissystem, dem Wettrüsten und dem extremen Nationalismus der Großmächte."
  },
  {
    question: "Was besagte der deutsche 'Blankoscheck' vom 5. Juli 1914?",
    options: [
      { text: "Eine Zusage von unbegrenzten Krediten an die deutsche Rüstungsindustrie", correct: false },
      { text: "Die Zusage Großbritanniens, im Falle eines Krieges neutral zu bleiben", correct: false },
      { text: "Die bedingungslose Unterstützung Österreich-Ungarns durch das Deutsche Reich in der Julikrise", correct: true },
      { text: "Der Verzicht auf Reparationszahlungen seitens Russlands", correct: false }
    ],
    explanation: "Mit dem Blankoscheck sicherte Kaiser Wilhelm II. Österreich-Ungarn bedingungslose Bündnistreue zu. Dies ermutigte Wien zu einem extrem harten Ultimatum an Serbien, was die Julikrise eskalieren ließ."
  },
  {
    question: "Welches strategische Ziel verfolgte der berüchtigte 'Schlieffen-Plan'?",
    options: [
      { text: "Die vollständige Blockade der britischen Inseln mit U-Booten", correct: false },
      { text: "Die Vermeidung eines Zweifrontenkrieges durch einen schnellen Sieg über Frankreich im Westen", correct: true },
      { text: "Ein Defensivbündnis mit Russland und Frankreich gegen Großbritannien", correct: false },
      { text: "Der Bau einer Eisenbahnlinie von Berlin nach Bagdad zur Umgehung von Seewegen", correct: false }
    ],
    explanation: "Der Schlieffen-Plan sollte einen Zweifrontenkrieg verhindern: Zuerst Frankreich im Westen schnell schlagen, während Russland noch mobilisiert, und danach die Truppen in den Osten verlegen. Der Plan scheiterte an der Marne im September 1914."
  },
  {
    question: "Welcher Begriff beschreibt den grausamen Wandel des Krieges an der Westfront ab Herbst 1914?",
    options: [
      { text: "Blitzkrieg", correct: false },
      { text: "Bewegungskrieg", correct: false },
      { text: "Stellungskrieg (oder Grabenkrieg)", correct: true },
      { text: "Kalter Krieg", correct: false }
    ],
    explanation: "Nach der Marne-Schlacht erstarrten die Fronten im Westen. Es entwickelte sich ein jahrelanger Stellungskrieg in Schützengräben ohne nennenswerte Geländegewinne für beide Seiten."
  },
  {
    question: "Was versteht man unter dem Begriff 'Materialschlacht'?",
    options: [
      { text: "Die Plünderung von Fabriken in besetzten Gebieten zur Rohstoffgewinnung", correct: false },
      { text: "Kriegführung, bei der der massenhafte Einsatz von Waffen und Industrieerzeugnissen entscheidet", correct: true },
      { text: "Ein Boykott ausländischer Handelsgüter zur Stärkung der Kriegswirtschaft", correct: false },
      { text: "Der Kampf um Kolonien in Afrika zur Erbeutung von Bodenschätzen", correct: false }
    ],
    explanation: "Die Materialschlacht (z.B. in Verdun oder an der Somme) zeichnete sich durch einen astronomischen Einsatz von Artillerie, Giftgas, Panzern und Flugzeugen aus. Der Soldat verkam zum reinen 'Material'."
  },
  {
    question: "Was bedeutete die 'Heimatfront' während des Ersten Weltkriegs?",
    options: [
      { text: "Die Grenzbefestigung an der deutschen Heimatgrenze", correct: false },
      { text: "Die totale Einbindung der Zivilbevölkerung und Wirtschaft in den Dienst des Krieges", correct: true },
      { text: "Der bewaffnete Widerstand von Zivilisten gegen feindliche Truppen im Inland", correct: false },
      { text: "Die Rekrutierung von Jugendlichen direkt aus den Schulen", correct: false }
    ],
    explanation: "Der Erste Weltkrieg war ein 'Totaler Krieg', weil auch die 'Heimatfront' (Zivilbevölkerung, Wirtschaft, Frauen in den Fabriken) vollständig für die Kriegsproduktion mobilisiert wurde."
  },
  {
    question: "Warum bezeichnet man das Jahr 1917 als das weltgeschichtliche 'Epochenjahr'?",
    options: [
      { text: "Wegen des Friedensvertrags von Versailles und dem Ende des Kaiserreiches", correct: false },
      { text: "Wegen des Kriegseintritts der USA und der kommunistischen Revolution in Russland", correct: true },
      { text: "Weil in diesem Jahr der Schlieffen-Plan erfolgreich beendet wurde", correct: false },
      { text: "Wegen der Erfindung des Panzers und des ersten Giftgaseinsatzes", correct: false }
    ],
    explanation: "1917 traten die USA in den Krieg ein (militärische Entscheidung) und in Russland übernahmen die Bolschewiki in der Oktoberrevolution die Macht. Dies begründete die bipolare Weltordnung des 20. Jahrhunderts."
  },
  {
    question: "Welchen Charakter hatte der Frieden von Brest-Litovsk (März 1918) zwischen Deutschland und Russland?",
    options: [
      { text: "Es war ein gerechter Ausgleichsfriede ohne gegenseitige Forderungen", correct: false },
      { text: "Es war ein harter deutscher Diktatfriede mit enormen Gebietsverlusten für Russland", correct: true },
      { text: "Es handelte sich um ein geheimes Militärbündnis gegen Frankreich", correct: false },
      { text: "Russland annektierte große Gebiete im Osten Preußens", correct: false }
    ],
    explanation: "Der Friede von Brest-Litovsk war ein brutaler Diktatfrieden der deutschen OHL. Russland verlor ein Drittel seiner Bevölkerung und wichtige Agrar- und Industriegebiete. Dies widerlegt das deutsche Argument, man habe 1919 ein solches Vorgehen nicht gekannt."
  },
  {
    question: "Wer forderte im September 1918 überraschend die Einleitung von Waffenstillstandsverhandlungen?",
    options: [
      { text: "Die sozialdemokratische Opposition im Reichstag", correct: false },
      { text: "Die Oberste Heeresleitung (OHL) unter Hindenburg und Ludendorff", correct: true },
      { text: "Der deutsche Kaiser Wilhelm II. gegen den Willen seiner Generäle", correct: false },
      { text: "Die alliierten Mächte aufgrund ihrer Erschöpfung", correct: false }
    ],
    explanation: "Die Generäle Hindenburg und Ludendorff (OHL) erkannten das militärische Ende und forderten die Verhandlungen. Perfiderweise schoben sie die politische Verantwortung auf die demokratischen Parteien ab."
  },
  {
    question: "Was besagt die von rechtskonservativen Kräften verbreitete 'Dolchstoßlegende'?",
    options: [
      { text: "Das deutsche Heer sei von russischen Agenten an der Front infiltriert worden", correct: false },
      { text: "Die kaiserliche Marine habe die Armee durch Befehlsverweigerung im Stich gelassen", correct: false },
      { text: "Das an der Front unbesiegte Heer sei durch Revolutionäre in der Heimat von hinten erdolcht worden", correct: true },
      { text: "Die Alliierten hätten Deutschland durch den Einsatz von Geheimwaffen besiegt", correct: false }
    ],
    explanation: "Die Dolchstoßlegende war eine extrem wirksame Propagandalüge der Rechten. Sie gab den Sozialisten, Demokraten und Juden ('Heimat') die Schuld an der Niederlage, um die Generäle reinzuwaschen."
  },
  {
    question: "Welches Ereignis löste Anfang November 1918 die deutsche Novemberrevolution aus?",
    options: [
      { text: "Der Kieler Matrosenaufstand gegen einen sinnlosen letzten Flottenbefehl", correct: true },
      { text: "Die Unterzeichnung des Versailler Vertrags", correct: false },
      { text: "Die Ermordung von Karl Liebknecht und Rosa Luxemburg", correct: false },
      { text: "Die Erstürmung des Reichstags durch hungernde Zivilisten", correct: false }
    ],
    explanation: "Als die Seekriegsleitung die Flotte Ende Oktober in eine sinnlose Schlacht opfern wollte, meuterten die Kieler Matrosen. Ihr Aufstand weitete sich binnen Tagen zur Revolution im ganzen Reich aus."
  },
  {
    question: "Warum stieß der Artikel 231 des Versailler Vertrags in Deutschland auf radikale Ablehnung?",
    options: [
      { text: "Weil er Deutschland zur sofortigen Einführung des Kommunismus zwang", correct: false },
      { text: "Weil er Deutschland und seinen Verbündeten die alleinige Schuld am Krieg zuschrieb", correct: true },
      { text: "Weil er die vollständige Auflösung des deutschen Staates vorsah", correct: false },
      { text: "Weil er das Frauenwahlrecht wieder abschaffen wollte", correct: false }
    ],
    explanation: "Artikel 231 wies Deutschland die alleinige Kriegsschuld zu. Dies verletzte den Nationalstolz aller Parteien zutiefst und wurde als ungerechter moralischer Pranger empfunden."
  },
  {
    question: "Was war die Ursache für die dramatische Hyperinflation im Krisenjahr 1923?",
    options: [
      { text: "Der plötzliche Ausfall aller Fabriken durch eine Seuche", correct: false },
      { text: "Der unbegrenzte Druck von Papiergeld zur Finanzierung des passiven Widerstands im Ruhrkampf", correct: true },
      { text: "Der Raub der deutschen Goldreserven durch französische Besatzungstruppen", correct: false },
      { text: "Die Weigerung des Volkes, Steuern in Mark zu bezahlen", correct: false }
    ],
    explanation: "Um den Generalstreik an der Ruhr (passiver Widerstand gegen französische Besatzung) und die Staatsausgaben zu finanzieren, druckte die Reichsregierung gigantische Mengen Papiergeld, was zum Totalverlust des Geldwerts führte."
  },
  {
    question: "Wie wurde die Existenzkrise der Hyperinflation im November 1923 erfolgreich gelöst?",
    options: [
      { text: "Durch den Verkauf der Kolonien an die USA", correct: false },
      { text: "Durch die Einführung der sachwertgedeckten Rentenmark und Stresemanns Reformen", correct: true },
      { text: "Durch den vollständigen Erlass aller Reparationen durch Frankreich", correct: false },
      { text: "Durch die Einführung von Lebensmittelmarken als dauerhaftem Geldersatz", correct: false }
    ],
    explanation: "Unter Reichskanzler Stresemann wurde die Rentenmark eingeführt (gedeckt durch Hypotheken auf Grundbesitz). Zusammen mit dem Ende des Ruhrkampfs stellte dies das Vertrauen wieder her."
  },
  {
    question: "Welchen Umsturzversuch erlebte die Weimarer Republik im November 1923 in München?",
    options: [
      { text: "Den kommunistischen Spartakusaufstand", correct: false },
      { text: "Den Kapp-Lüttwitz-Putsch von unzufriedenen Soldaten", correct: false },
      { text: "Den Hitler-Ludendorff-Putsch (Bürgerbräu-Putsch) der Nationalsozialisten", correct: true },
      { text: "Die Ausrufung einer Räterepublik nach sowjetischem Vorbild", correct: false }
    ],
    explanation: "Am 8./9. November 1923 versuchte Adolf Hitler gemeinsam mit General Ludendorff durch einen Putsch in München die Regierung zu stürzen. Der Versuch scheiterte im Kugelhagel der Polizei an der Feldherrnhalle."
  },
  {
    question: "Welches Bündnis stand dem Deutschen Reich und Österreich-Ungarn (Mittelmächte) vor 1914 gegenüber?",
    options: [
      { text: "Der Warschauer Pakt", correct: false },
      { text: "Die Triple Entente (Großbritannien, Frankreich, Russland)", correct: true },
      { text: "Die Heilige Allianz", correct: false },
      { text: "Der Völkerbund", correct: false }
    ],
    explanation: "Die **Triple Entente** bestand aus Großbritannien, Frankreich und Russland. Dieses Bündnis verstärkte im Deutschen Reich die Furcht vor einer militärischen **Einkreisung** und einem Zweifrontenkrieg."
  },
  {
    question: "Was versteht man unter der 'Burgfriedenspolitik' bei Kriegsbeginn 1914?",
    options: [
      { text: "Die Befestigung von Burgen an den Landesgrenzen", correct: false },
      { text: "Der parteiübergreifende Verzicht auf politische Konflikte im Reichstag für die Kriegsdauer", correct: true },
      { text: "Ein Friedensangebot der alliierten Mächte an Deutschland", correct: false },
      { text: "Der Schutz historischer Gebäude vor Fliegerangriffen", correct: false }
    ],
    explanation: "Die **Burgfriedenspolitik** einte die politischen Parteien. Kaiser Wilhelm II. prägte den Satz: 'Ich kenne keine Parteien mehr, ich kenne nur noch Deutsche'. Sogar die SPD stimmte den **Kriegskrediten** zu."
  },
  {
    question: "Welche schwerwiegende Folge hatte die Zustimmung zu den Kriegskrediten für die deutsche Arbeiterbewegung?",
    options: [
      { text: "Die sofortige Auflösung aller Gewerkschaften", correct: false },
      { text: "Die Abspaltung der USPD (Unabhängige SPD) von der Mehrheits-SPD (MSPD) im Jahr 1917", correct: true },
      { text: "Das Verbot von Streiks bis zum Jahr 1933", correct: false },
      { text: "Die Enteignung aller SPD-Parteigelder durch die Regierung", correct: false }
    ],
    explanation: "Der Streit über die Kriegskredite spaltete die Arbeiterbewegung. 1917 gründete sich die kriegskritische **USPD** als Abspaltung der SPD, was zur dauerhaften Polarisierung der Linken führte."
  },
  {
    question: "Welche militärische Neuerung bei der Zweiten Flandernschlacht (Ypern) im April 1915 erschütterte die Welt?",
    options: [
      { text: "Der erste großflächige Einsatz von tödlichem Chlorgas als chemische Waffe", correct: true },
      { text: "Der erste Einsatz von Kampfflugzeugen zur Bombardierung von Städten", correct: false },
      { text: "Die Einführung von Funkgeräten zur Koordinierung von Angriffen", correct: false },
      { text: "Der Einsatz von Panzern zur Durchbrechung von Schützengräben", correct: false }
    ],
    explanation: "Bei Ypern setzte das deutsche Heer erstmals **Giftgas** (Chlorgas) im großen Stil ein. Dies markiert den Beginn der **chemischen Kriegführung** und löste weltweites Entsetzen aus."
  },
  {
    question: "Wer besaß ab 1916 im Deutschen Reich die faktische Regierungsgewalt?",
    options: [
      { text: "Der Reichskanzler Theobald von Bethmann Hollweg", correct: false },
      { text: "Die Oberste Heeresleitung (OHL) unter Paul von Hindenburg und Erich Ludendorff", correct: true },
      { text: "Kaiser Wilhelm II. allein durch kaiserliche Dekrete", correct: false },
      { text: "Der Reichstagspräsident als gewählter Vertreter", correct: false }
    ],
    explanation: "Ab 1916 etablierte die dritte **OHL** unter Hindenburg und Ludendorff eine de-facto **Militärdiktatur**. Sie bestimmten die Wirtschaft, Politik und Kriegsführung, während der Kaiser und Kanzler machtlos wurden."
  },
  {
    question: "Was war der Kern von US-Präsident Wilsons 14-Punkte-Plan im Januar 1918?",
    options: [
      { text: "Die Aufteilung des Deutschen Reiches in Besatzungszonen", correct: false },
      { text: "Ein Programm zur Friedensordnung nach dem Krieg, inklusive des Selbstbestimmungsrechts der Völker", correct: true },
      { text: "Ein strenger Strafkatalog für Kriegsverbrechen", correct: false },
      { text: "Der Plan zur wirtschaftlichen Abschnürung Sowjetrusslands", correct: false }
    ],
    explanation: "Wilsons **14-Punkte-Plan** basierte auf Gerechtigkeit, Demokratie und dem **Selbstbestimmungsrecht der Völker**. Er regte zudem die Gründung eines **Völkerbundes** an, um künftige Kriege zu verhindern."
  },
  {
    question: "Was geschah am 9. November 1918 bei der 'doppelten Ausrufung der Republik'?",
    options: [
      { text: "Zwei Generäle der OHL riefen eine Militärrepublik aus", correct: false },
      { text: "Scheidemann rief die demokratische und Liebknecht die sozialistische Räterepublik aus", correct: true },
      { text: "Der Kaiser rief in Berlin und München zeitgleich zwei Republiken aus", correct: false },
      { text: "Die Alliierten teilten Deutschland in eine Nord- und Südrepublik", correct: false }
    ],
    explanation: "Am 9. November rief Philipp Scheidemann (SPD) die **parlamentarische Republik** aus. Nur zwei Stunden später proklamierte Karl Liebknecht (Spartakusbund) eine **freie sozialistische Republik** (Räterepublik)."
  },
  {
    question: "Wer wurde 1919 der erste Reichspräsident der Weimarer Republik?",
    options: [
      { text: "Gustav Stresemann (DVP)", correct: false },
      { text: "Friedrich Ebert (SPD)", correct: true },
      { text: "Paul von Hindenburg (parteilos)", correct: false },
      { text: "Philipp Scheidemann (SPD)", correct: false }
    ],
    explanation: "Die Weimarer Nationalversammlung wählte **Friedrich Ebert** (SPD) 1919 zum ersten **Reichspräsidenten**. Um die öffentliche Ordnung zu sichern, ging er den umstrittenen **Ebert-Groener-Pakt** mit der alten Armeeführung ein."
  },
  {
    question: "Welches Ereignis überschattete den Januar 1919 in Berlin und schwächte die Linke dauerhaft?",
    options: [
      { text: "Die Unterzeichnung des Waffenstillstands", correct: false },
      { text: "Der Spartakusaufstand und die Morde an Karl Liebknecht und Rosa Luxemburg durch Freikorps", correct: true },
      { text: "Der Ausbruch der Spanischen Grippe im Reichstag", correct: false },
      { text: "Die Auflösung der Nationalversammlung", correct: false }
    ],
    explanation: "Der **Spartakusaufstand** der Kommunisten wurde von rechten **Freikorps** (Paramilitärs) mit Billigung der SPD-Führung blutig niedergeschlagen. Dabei wurden die Anführer **Rosa Luxemburg** und **Karl Liebknecht** ermordet."
  },
  {
    question: "Welcher Artikel der Weimarer Verfassung verlieh dem Reichspräsidenten gefährliche Machtbefugnisse?",
    options: [
      { text: "Artikel 48 (Notverordnungsrecht)", correct: true },
      { text: "Artikel 109 (Gleichheit vor dem Gesetz)", correct: false },
      { text: "Artikel 231 (Kriegsschuldparagraph)", correct: false },
      { text: "Artikel 1 (Die Würde des Menschen ist unantastbar)", correct: false }
    ],
    explanation: "Der **Artikel 48** erlaubte es dem Reichspräsidenten, bei Gefährdung der Ordnung Grundrechte außer Kraft zu setzen und per **Notverordnung** am Parlament vorbei zu regieren ('Ersatzkaiser')."
  },
  {
    question: "Welcher Artikel ergänzte Artikel 48 und erlaubte dem Reichspräsidenten, das Parlament aufzulösen?",
    options: [
      { text: "Artikel 17 (Wahlrecht)", correct: false },
      { text: "Artikel 25 (Recht zur Parlamentsauflösung)", correct: true },
      { text: "Artikel 54 (Kanzlersturz)", correct: false },
      { text: "Artikel 102 (Abschaffung der Todesstrafe)", correct: false }
    ],
    explanation: "Durch **Artikel 25** konnte der Reichspräsident den Reichstag auflösen. Die Kombination aus Artikel 48 (Notverordnung) und Artikel 25 (Auflösung) zerstörte ab 1930 die parlamentarische Demokratie."
  },
  {
    question: "Wie reagierten die Bürger und Gewerkschaften 1920 auf den rechtsgerichteten Kapp-Lüttwitz-Putsch?",
    options: [
      { text: "Sie flohen aus dem Land und überließen den Putschisten die Macht", correct: false },
      { text: "Sie riefen einen historischen Generalstreik aus, der Berlin und die Verwaltung komplett lahmlegte", correct: true },
      { text: "Sie forderten das Eingreifen französischer Truppen", correct: false },
      { text: "Sie unterstützten die Putschisten durch Lebensmittelspenden", correct: false }
    ],
    explanation: "Gegen den **Kapp-Lüttwitz-Putsch** riefen Gewerkschaften und Parteien zum **Generalstreik** auf. Millionen streikten. Ohne Wasser, Strom und Bahn brach der Putsch der rechten Soldaten nach nur 100 Stunden zusammen."
  },
  {
    question: "Wer war das prominente Opfer eines rechtsterroristischen Attentats im August 1921?",
    options: [
      { text: "Walther Rathenau", correct: false },
      { text: "Matthias Erzberger (Unterzeichner des Waffenstillstands)", correct: true },
      { text: "Philipp Scheidemann", correct: false },
      { text: "Friedrich Ebert", correct: false }
    ],
    explanation: "Die rechtsextreme **Organisation Consul** ermordete **Matthias Erzberger**. Als Unterzeichner des Waffenstillstands von 1918 wurde er von Rechten als 'Erfüllungspolitiker' und 'Vaterlandsverräter' verleumdet."
  },
  {
    question: "Welches Motiv stand hinter der Ermordung des Außenministers Walther Rathenau im Juni 1922?",
    options: [
      { text: "Er wollte die Monarchie unter Kaiser Wilhelm II. wieder einführen", correct: false },
      { text: "Er war Jude, vertrat die Verständigungspolitik und schloss den Vertrag von Rapallo", correct: true },
      { text: "Er hatte geheime Kriegspläne an Frankreich verkauft", correct: false },
      { text: "Er plante einen Militärputsch gegen Reichspräsident Ebert", correct: false }
    ],
    explanation: "Der liberale Außenminister **Walther Rathenau** wurde von der **Organisation Consul** erschossen. Die Tat löste Millionen-Demonstrationen für den Schutz der Republik aus. Reichskanzler Wirth warnte im Reichstag: 'Der Feind steht rechts!'"
  },
  {
    question: "Was vereinbarten Deutschland und Sowjetrussland im Vertrag von Rapallo (April 1922)?",
    options: [
      { text: "Ein gemeinsames Angriffsbündnis gegen Polen und Frankreich", correct: false },
      { text: "Die gegenseitige Anerkennung, den Verzicht auf Reparationen und diplomatische Annäherung", correct: true },
      { text: "Den Beitritt Sowjetrusslands zum Völkerbund auf deutsches Betreiben", correct: false },
      { text: "Die Lieferung von Panzern und U-Booten an die Rote Armee", correct: false }
    ],
    explanation: "Im **Vertrag von Rapallo** näherten sich die beiden internationalen Außenseiter an. Sie verzichteten auf Reparationsansprüche und nahmen diplomatische Beziehungen auf, was die Alliierten zutiefst misstrauisch machte."
  },
  {
    question: "Was beschreibt das geflügelte Wort von der 'auf dem rechten Auge blinden Justiz' in der Weimarer Zeit?",
    options: [
      { text: "Dass Richter vor Gericht eine schwarze Augenklappe tragen mussten", correct: false },
      { text: "Rechtsextreme Attentäter und Putschisten wurden extrem milde bestraft, während linke Täter drakonische Strafen erhielten", correct: true },
      { text: "Dass nur Richter eingestellt wurden, die politisch rechts orientiert waren", correct: false },
      { text: "Die Einführung der Zensur für rechte Zeitungen durch das Justizministerium", correct: false }
    ],
    explanation: "Die Richter stammten meist aus der Kaiserzeit und hassten die Republik. Während der linke Spartakusaufstand drakonisch bestraft wurde, bekamen rechte Putschisten wie Adolf Hitler nach seinem Putschversuch lächerlich milde Mindeststrafen."
  },
  {
    question: "Warum gilt die erste Schlacht an der Marne im September 1914 als der entscheidende Wendepunkt an der Westfront?",
    options: [
      { text: "Weil dort der erste Friedensvertrag des Krieges unterzeichnet wurde", correct: false },
      { text: "Weil sie den deutschen Vormarsch stoppte und das Scheitern des Schlieffen-Plans besiegelte", correct: true },
      { text: "Weil dort die Alliierten kapitulierten und Deutschland freien Lauf ließen", correct: false },
      { text: "Weil Frankreich dort erstmals Panzer im Kampf einsetzte", correct: false }
    ],
    explanation: "Die Schlacht an der Marne stoppte den deutschen Vormarsch auf Paris. Dadurch scheiterte der Schlieffen-Plan endgültig. Der Krieg erstarrte im jahrelangen, verlustreichen Stellungskrieg."
  },
  {
    question: "Welches strategische Ziel verfolgte die OHL mit der Wiederaufnahme des uneingeschränkten U-Boot-Kriegs im Februar 1917?",
    options: [
      { text: "Die Entdeckung neuer Handelsrouten im Atlantik", correct: false },
      { text: "Großbritannien durch Aushungern binnen Monaten zur Kapitulation zu zwingen, bevor die USA militärisch eingreifen konnten", correct: true },
      { text: "Den Seetransport russischer Truppen über die Ostsee zu verhindern", correct: false },
      { text: "Die Errichtung deutscher Militärbasen in Südamerika", correct: false }
    ],
    explanation: "Die OHL wusste, dass dies den Kriegseintritt der USA provozieren würde, spekulierte aber darauf, England durch die totale Versenkung aller Versorgungsschiffe schnell in die Knie zu zwingen. Eine fatale Fehlkalkulation."
  },
  {
    question: "Was war der Hauptgrund für den katastrophalen 'Steckrübenwinter' 1916/17 in Deutschland?",
    options: [
      { text: "Ein Verbot des Staates, Kartoffeln anzubauen", correct: false },
      { text: "Die alliierte Seeblockade und eine schlechte Kartoffelernte durch Krautfäule", correct: true },
      { text: "Der Export aller deutschen Lebensmittel an die verbündete Türkei", correct: false },
      { text: "Eine künstliche Verknappung durch die Rüstungskonzerne", correct: false }
    ],
    explanation: "Durch die britische Blockade war Deutschland von Rohstoff- und Lebensmittelimporten abgeschnitten. Als die Kartoffelernte 1916 durch Nässe und Fäule verdarb, mussten die Menschen auf minderwertige Futtersteckrüben ausweichen."
  },
  {
    question: "Welchen Meilenstein der Gleichberechtigung brachte die Novemberrevolution 1918 in Deutschland?",
    options: [
      { text: "Die Abschaffung des Adels und der Monarchie in ganz Europa", correct: false },
      { text: "Die Einführung des allgemeinen aktiven und passiven Wahlrechts für Frauen ab 20 Jahren", correct: true },
      { text: "Das Recht für Frauen, in der Reichswehr als Offiziere zu dienen", correct: false },
      { text: "Die Verstaatlichung aller Großbetriebe und Rüstungsfirmen", correct: false }
    ],
    explanation: "Der Rat der Volksbeauftragten verkündete im November 1918 das allgemeine Wahlrecht für alle Bürger ab 20 Jahren – explizit auch für Frauen. Bei der Wahl zur Nationalversammlung 1919 stimmten Frauen erstmals."
  },
  {
    question: "Was vereinbarten Friedrich Ebert und General Wilhelm Groener im geheimen Ebert-Groener-Pakt vom 10. November 1918?",
    options: [
      { text: "Die Einberufung einer gemeinsamen Regierung aus Generälen und SPD-Politikern", correct: false },
      { text: "Das Militär stützt die neue Regierung; im Gegenzug bleiben die alten militärischen Strukturen und die OHL unangetastet", correct: true },
      { text: "Die sofortige Verhaftung des Kaisers Wilhelm II. durch die Reichswehr", correct: false },
      { text: "Ein geheimes Angriffsbündnis gegen die neu entstandene Republik Polen", correct: false }
    ],
    explanation: "Der Pakt sicherte der neuen Regierung militärischen Schutz gegen linke Rätekräfte. Kritiker bemängeln jedoch, dass dadurch die demokratiefeindlichen kaiserlichen Militäreliten ihre Macht im neuen Staat behielten."
  },
  {
    question: "Warum tagte die verfassungsgebende Nationalversammlung ab Februar 1919 in Weimar statt in Berlin?",
    options: [
      { text: "Weil Berlin durch feindliche alliierte Truppen besetzt war", correct: false },
      { text: "Wegen der bürgerkriegsähnlichen Unruhen, Streiks und Kämpfe im revolutionären Berlin", correct: true },
      { text: "Weil Weimar geografisch exakt im Mittelpunkt des neuen Reiches lag", correct: false },
      { text: "Weil die Abgeordneten die Nähe zu Goethes Kulturstätten suchten", correct: false }
    ],
    explanation: "In Berlin tobten heftige Machtkämpfe und bürgerkriegsähnliche Unruhen (wie der Spartakusaufstand). Um eine sichere, ungestörte Ausarbeitung der Verfassung zu gewährleisten, wich man in das ruhige Weimar aus."
  },
  {
    question: "Welchen gravierenden territorialen Verlust musste Deutschland laut dem Versailler Vertrag hinnehmen?",
    options: [
      { text: "Die Abtrennung Bayerns als eigenständiges Königreich", correct: false },
      { text: "Die Rückgabe von Elsass-Lothringen an Frankreich und die Schaffung des Polnischen Korridors", correct: true },
      { text: "Die Besetzung und Abtrennung des gesamten Gebiets östlich der Elbe", correct: false },
      { text: "Die Abtretung Helgolands an Dänemark", correct: false }
    ],
    explanation: "Deutschland verlor etwa 13% seines Staatsgebiets. Besonders schmerzhaft war die Rückgabe von Elsass-Lothringen an Frankreich sowie der Polnische Korridor, der Ostpreußen territorial vom Reich abschnitt."
  },
  {
    question: "Welche militärische Beschränkung sah der Versailler Vertrag von 1919 für Deutschland vor?",
    options: [
      { text: "Das vollständige Verbot jeglicher eigener Polizeikräfte", correct: false },
      { text: "Die Begrenzung des Heeres auf 100.000 Soldaten, Verbot von Panzern und Kampfflugzeugen sowie Entmilitarisierung des Rheinlands", correct: true },
      { text: "Die Verpflichtung, alle deutschen Kriegsschiffe an Frankreich abzutreten", correct: false },
      { text: "Die Pflicht zur Stationierung von US-Truppen in allen Großstädten", correct: false }
    ],
    explanation: "Um Deutschland dauerhaft militärisch unschädlich zu machen, wurde die Reichswehr auf ein Berufsheer von 100.000 Mann geschrumpft. Schwere Waffen waren verboten, das strategisch wichtige Rheinland wurde entmilitarisiert."
  },
  {
    question: "Wer trug durch eine Verlesung vor dem Untersuchungsausschuss 1919 maßgeblich zur Verbreitung der Dolchstoßlegende bei?",
    options: [
      { text: "Adolf Hitler als junger Gefreiter der Armee", correct: false },
      { text: "Generalfeldmarschall Paul von Hindenburg", correct: true },
      { text: "Kaiser Wilhelm II. aus seinem Exil in den Niederlanden", correct: false },
      { text: "Der SPD-Politiker Philipp Scheidemann", correct: false }
    ],
    explanation: "Hindenburg verlas im November 1919 vor dem Untersuchungsausschuss der Nationalversammlung eine Erklärung, in der er behauptete, ein englisches Zitat belege, dass das deutsche Heer 'von hinten erdolcht' wurde. Dies gab der Lüge enormen Auftrieb."
  },
  {
    question: "Wie reagierte die Reichsregierung auf den französisch-belgischen Einmarsch ins Ruhrgebiet im Januar 1923?",
    options: [
      { text: "Sie erklärte Frankreich sofort den Krieg und mobilisierte die Reichswehr", correct: false },
      { text: "Sie rief die Bevölkerung zum passiven Widerstand (Generalstreik) bei vollem Lohnersatz durch den Staat auf", correct: true },
      { text: "Sie trat geschlossen zurück und überließ den Franzosen die Verwaltung", correct: false },
      { text: "Sie schloss ein geheimes Bündnis mit Großbritannien gegen Frankreich", correct: false }
    ],
    explanation: "Da Deutschland militärisch machtlos war, rief Kanzler Cuno zum passiven Widerstand auf. Millionen Arbeiter streikten. Der Staat bezahlte ihre Löhne durch massiven Gelddruck, was direkt in die Hyperinflation führte."
  },
  {
    question: "Was verbarg sich hinter der sogenannten 'Schwarzen Reichswehr' in der frühen Weimarer Zeit?",
    options: [
      { text: "Ein Geheimbund von afrikanischen Soldaten im Rheinland", correct: false },
      { text: "Illegale, geheime Truppenverbände, die unter Umgehung des Versailler Vertrags von Militärs aufgestellt wurden", correct: true },
      { text: "Die persönliche Leibgarde des Reichspräsidenten Friedrich Ebert", correct: false },
      { text: "Ein paramilitärischer Arm der Kommunistischen Partei", correct: false }
    ],
    explanation: "Die Reichswehrführung unterhielt heimlich bewaffnete Einheiten, die offiziell nicht existierten, um die Beschränkungen des Versailler Vertrags (100.000 Mann) zu umgehen. Sie waren oft extrem republikfeindlich gesinnt."
  },
  {
    question: "Welche direkte Konsequenz folgte aus dem scheiternden Hitler-Ludendorff-Putsch im November 1923?",
    options: [
      { text: "Adolf Hitler wurde sofort aus Deutschland nach Österreich ausgewiesen", correct: false },
      { text: "Die NSDAP wurde reichsweit verboten und Hitler verfasste in milder Festungshaft in Landsberg sein Buch 'Mein Kampf'", correct: true },
      { text: "Ludendorff wurde zum neuen Kanzler ernannt, um die Rechten zu beruhigen", correct: false },
      { text: "Der Reichstag beschloss die sofortige Auflösung der bürgerlichen Justiz", correct: false }
    ],
    explanation: "Hitler wurde zu einer sehr milden Festungshaft in Landsberg verurteilt. Dort diktierte er 'Mein Kampf' und änderte seine Taktik: Statt eines gewaltsamen Umsturzes wollte er die Macht künftig auf scheinbar legalem Weg erringen."
  },
  {
    question: "Was meint die historische Charakterisierung der Weimarer Republik als eine 'Demokratie ohne Demokraten'?",
    options: [
      { text: "Dass es in der Republik verboten war, demokratische Parteien zu gründen", correct: false },
      { text: "Dass tragende Säulen wie Justiz, Verwaltung und Militär dem Kaiserreich anhingen und die Republik ablehnten oder untergruben", correct: true },
      { text: "Dass bei den Wahlen kaum Bürger von ihrem Stimmrecht Gebrauch machten", correct: false },
      { text: "Dass die Verfassung die Gründung einer Monarchie vorsah", correct: false }
    ],
    explanation: "Obwohl Weimar eine moderne, demokratische Verfassung hatte, blieben die alten Eliten (Richter, Beamte, Offiziere) im Amt. Sie verachteten die Demokratie zutiefst und schützten rechtsradikale Feinde des Staates."
  },
  {
    question: "Welche entscheidende politische Maßnahme ergriff Gustav Stresemann als Reichskanzler im Herbst 1923, um Deutschland zu retten?",
    options: [
      { text: "Er trat dem Völkerbund bei und trat das Ruhrgebiet formell ab", correct: false },
      { text: "Er beendete trotz massiver Proteste von rechts und links den passiven Ruhrkampf, um die Staatsfinanzen zu sanieren", correct: true },
      { text: "Er verbot alle Gewerkschaften und fror alle Löhne ein", correct: false },
      { text: "Er setzte das Frauenwahlrecht aus, um konservative Wähler zu beruhigen", correct: false }
    ],
    explanation: "Stresemann erkannte, dass der passive Ruhrwiderstand den Staat ruinierte. Gegen heftigste Widerstände und Putschdrohungen brach er den Ruhrstreik ab. Dies war die Voraussetzung für die anschließende Währungsreform."
  }
];

// --- DYNAMIC RENDERING LOGIC ---

// Helper to parse Markdown bold (**text**) and italic (*text*) syntax to HTML tags safely
function formatText(text) {
  if (typeof text !== 'string') return text;
  let formatted = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  formatted = formatted.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return formatted;
}

// Fisher-Yates array shuffling utility
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Globals for Gamification State
let gameState = {
  xp: 0,
  level: 1,
  unlockedTrophies: [],
  timelineClicked: [],
  flashcardsClicked: [],
  trainerCompareClicked: [],
  decisionStep: 0,
  quizStreak: 0,
  currentQuizIndex: 0,
  quizScore: 0,
  shuffledQuestions: [],
  cheatUnlocked: false
};

// Web Audio API Sound Generator (100% Offline-Synthesized, No downloads!)
const AudioEngine = {
  ctx: null,
  rainSource: null,
  rainFilter: null,
  rainLFO: null,
  isRainPlaying: false,

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },

  playTick() {
    this.init();
    if (!this.ctx) return;
    
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.type = 'sine';
    // Random high-frequency click mimicking mechanical typewriter keys
    osc.frequency.setValueAtTime(1600 + Math.random() * 1200, now);
    gain.gain.setValueAtTime(0.015, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);
    
    osc.start(now);
    osc.stop(now + 0.02);
  },

  playTimerTick() {
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.type = 'sine';
    // Deep, double-tick clock sound
    osc.frequency.setValueAtTime(800, now);
    gain.gain.setValueAtTime(0.03, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.01);

    osc.start(now);
    osc.stop(now + 0.015);
  },

  playSuccess(streak = 0) {
    this.init();
    if (!this.ctx) return;
    
    const now = this.ctx.currentTime;
    // Ascending pitch arpeggio scales slightly higher with active streak!
    const baseFreq = 523.25 * Math.pow(1.05946, Math.min(6, streak)); 
    
    const playTone = (freq, delay, vol, dur) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + delay);
      gain.gain.setValueAtTime(vol, now + delay);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + dur);
      
      osc.start(now + delay);
      osc.stop(now + delay + dur + 0.05);
    };

    playTone(baseFreq, 0, 0.12, 0.35); // C5
    playTone(baseFreq * 1.25, 0.07, 0.12, 0.35); // E5
    playTone(baseFreq * 1.5, 0.14, 0.12, 0.35); // G5
    playTone(baseFreq * 2.0, 0.21, 0.16, 0.5); // C6
  },

  playError() {
    this.init();
    if (!this.ctx) return;
    
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(130, now); // Low unpleasant buzz
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.linearRampToValueAtTime(0.0001, now + 0.2);
    
    osc.start(now);
    osc.stop(now + 0.25);
  },

  playLevelUp() {
    this.init();
    if (!this.ctx) return;
    
    const now = this.ctx.currentTime;
    
    const playTriumphantTone = (freq, delay, dur) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + delay);
      gain.gain.setValueAtTime(0.12, now + delay);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + dur);
      
      osc.start(now + delay);
      osc.stop(now + delay + dur + 0.05);
    };

    // Epic level up fanfare chord
    playTriumphantTone(261.63, 0, 0.4);   // C4
    playTriumphantTone(329.63, 0.08, 0.4); // E4
    playTriumphantTone(392.00, 0.16, 0.4); // G4
    playTriumphantTone(523.25, 0.24, 0.7); // C5
    playTriumphantTone(659.25, 0.32, 0.7); // E5
    playTriumphantTone(783.99, 0.40, 0.7); // G5
    playTriumphantTone(1046.50, 0.48, 1.2); // C6 (glorious top note)
  },

  toggleFocusAudio() {
    this.init();
    if (!this.ctx) return false;

    if (this.isRainPlaying) {
      this.stopFocusAudio();
      return false;
    } else {
      this.startFocusAudio();
      return true;
    }
  },

  startFocusAudio() {
    if (this.isRainPlaying) return;
    
    // Synthesize full white noise using AudioBuffer
    const bufferSize = 2 * this.ctx.sampleRate;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    
    this.rainSource = this.ctx.createBufferSource();
    this.rainSource.buffer = noiseBuffer;
    this.rainSource.loop = true;
    
    // Lowpass filter for smooth wind/rain simulation
    this.rainFilter = this.ctx.createBiquadFilter();
    this.rainFilter.type = 'lowpass';
    this.rainFilter.frequency.value = 550; // Center frequency
    
    // Create LFO to gently sweep filter frequency between 400Hz and 700Hz
    this.rainLFO = this.ctx.createOscillator();
    this.rainLFO.frequency.value = 0.15; // Gust every ~6.6 seconds
    
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = 150; // Sweep radius (+/- 150Hz)
    
    // Dedicated volume gain set to a clear, soothing level of 0.15
    this.rainGain = this.ctx.createGain();
    this.rainGain.gain.value = 0.15;
    
    this.rainLFO.connect(lfoGain);
    lfoGain.connect(this.rainFilter.frequency);
    
    this.rainSource.connect(this.rainFilter);
    this.rainFilter.connect(this.rainGain);
    this.rainGain.connect(this.ctx.destination);
    
    this.rainLFO.start();
    this.rainSource.start();
    this.isRainPlaying = true;
  },

  stopFocusAudio() {
    if (!this.isRainPlaying) return;
    
    try {
      this.rainSource.stop();
      this.rainLFO.stop();
      
      // Clean disconnect of all nodes
      this.rainSource.disconnect();
      this.rainLFO.disconnect();
      this.rainFilter.disconnect();
      if (this.rainGain) {
        this.rainGain.disconnect();
      }
    } catch(e) {
      console.warn("Error stopping audio:", e);
    }
    
    this.isRainPlaying = false;
  }
};

// Canvas Confetti Particle Engine (TikTok level-up rewards!)
const ConfettiEngine = {
  canvas: null,
  ctx: null,
  particles: [],
  active: false,

  init() {
    this.canvas = document.getElementById("confettiCanvas");
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    
    this.resizeCanvas();
    window.addEventListener("resize", () => this.resizeCanvas());
  },

  resizeCanvas() {
    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  },

  burst(count = 120) {
    this.init();
    if (!this.canvas) return;

    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: -20 - Math.random() * 50,
        size: 5 + Math.random() * 8,
        color: `hsl(${Math.random() * 360}, 85%, 60%)`,
        shape: Math.random() > 0.5 ? 'circle' : 'square',
        vx: -3 + Math.random() * 6,
        vy: 2 + Math.random() * 6,
        rotation: Math.random() * Math.PI,
        rotationSpeed: -0.05 + Math.random() * 0.1
      });
    }

    if (!this.active) {
      this.active = true;
      this.loop();
    }
  },

  loop() {
    if (!this.active) return;
    
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    let livingParticles = 0;
    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotationSpeed;
      p.vy += 0.05; // Gravity
      
      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);
      this.ctx.fillStyle = p.color;
      
      if (p.shape === 'circle') {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      }
      
      this.ctx.restore();

      if (p.y < this.canvas.height + 20) {
        livingParticles++;
      }
    });

    if (livingParticles > 0) {
      requestAnimationFrame(() => this.loop());
    } else {
      this.active = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
};

// Dramatic Typewriter effect supporting mechanical audio ticks and markdown formatting
function typewriter(element, text, speed = 25, onComplete = null) {
  element.innerHTML = "";
  let index = 0;
  
  function type() {
    if (index < text.length) {
      index++;
      element.innerHTML = formatText(text.substring(0, index));
      
      const char = text.charAt(index - 1);
      if (char !== " ") {
        AudioEngine.playTick();
      }
      
      setTimeout(type, speed + (Math.random() * speed - speed / 2));
    } else {
      if (onComplete) onComplete();
    }
  }
  
  type();
}

// 4 scenarios for the Decision Theatre (Schicksalstheater)
const decisionScenarios = [
  {
    year: "1914",
    role: "Reichskanzler Bethmann-Hollweg",
    desc: "Juli 1914. Nach dem Attentat von Sarajevo steht Österreich-Ungarn unter Schock. Wien drängt auf ein hartes Vorgehen gegen Serbien und riskiert den Krieg mit Russland. Kaiser Wilhelm fordert dich auf, Wien die absolute Loyalität zu versichern. Triffst du die folgenschwere Weichenstellung?",
    options: [
      {
        title: "Blankoscheck ausstellen",
        text: "Du versicherst Österreich-Ungarn die bedingungslose Bündnistreue des Reiches für ein kompromissloses Vorgehen gegen Serbien.",
        historical: true,
        header: "📜 Historischer Blankoscheck (Julikrise)",
        consequence: "Du stellst den Blankoscheck aus. Bestärkt durch Berlin stellt Österreich-Ungarn ein unannehmbares Ultimatum. Russland mobilisiert zum Schutz Serbiens. Die Kettenreaktion der Julikrise gerät außer Kontrolle: Es kommt zum Ausbruch des Ersten Weltkriegs. **Geschichtliche Einordnung:** Dies ist das Kernargument für Deutschlands Hauptverantwortung beim Kriegsausbruch (Kriegsschuldfrage Art. 231)."
      },
      {
        title: "Internationale Konferenz fordern",
        text: "Du verweigerst den Blankoscheck und schlägst stattdessen eine Friedenskonferenz der europäischen Großmächte in London vor.",
        historical: false,
        header: "⚠️ Alternatives Deeskalations-Szenario",
        consequence: "Du bremst Wien aus. Ohne deutsche Rückendeckung weicht Österreich-Ungarn zurück und akzeptiert diplomatische Vermittlung. Der Krieg wird abgewendet, doch die imperialistischen Spannungen und das extreme Wettrüsten schwelen im Hintergrund weiter. Der Frieden bleibt extrem fragil."
      }
    ]
  },
  {
    year: "1916",
    role: "General Erich von Falkenhayn (OHL)",
    desc: "Februar 1916. Die Westfront ist komplett erstarrt. Du musst eine Entscheidung treffen, um die militärische Pattsituation zu brechen. Deine Stabsmitglieder schlagen eine verheerende Großoffensive an der geschichtsträchtigen Festung Verdun vor, um das französische Heer im Abnutzungskampf zu zermürben...",
    options: [
      {
        title: "Offensive auf Verdun starten",
        text: "Du startest den Angriff auf Verdun. Ziel ist es, Frankreich durch massive Materialüberlegenheit systematisch ausbluten zu lassen.",
        historical: true,
        header: "💀 Die Materialschlacht ('Ausbluten von Verdun')",
        consequence: "Du befiehlst den Angriff. Es entbrennt die grausamste Materialschlacht der Geschichte. Über 300.000 französische und deutsche Soldaten sterben im 'Mahlstrom von Verdun' – ohne jeden Geländegewinn. **Geschichtliche Einordnung:** Verdun wird zum Symbol des industrialisierten Todes, in dem der einzelne Soldat entpersönlicht und zum bloßen 'Menschenmaterial' in Schützengräben degradiert wird."
      },
      {
        title: "Heimliche Friedenssondierung einleiten",
        text: "Du verweigerst die Offensive, sparst deine Ressourcen und drängst die Regierung zu geheimen Friedensverhandlungen über neutrale Länder.",
        historical: false,
        header: "⚠️ Alternatives Verhandlungs-Szenario",
        consequence: "Du verzichtest auf das grausame Sterben vor Verdun. Zwar lehnen Frankreich und Großbritannien deine Friedensfühler ab, da sie auf einen Gesamtsieg spekulieren, aber du bewahrst Hunderttausende Soldaten vor dem industrialisierten Tod und schonst deine Kräfte für spätere Jahre."
      }
    ]
  },
  {
    year: "1918 (Okt.)",
    role: "Admiral Franz von Hipper (Seekriegsleitung)",
    desc: "Oktober 1918. Die deutsche OHL hat bereits die Niederlage eingestanden und Friedensverhandlungen eingeleitet. Doch die Seekriegsleitung will die Flotte zu einer letzten, aussichtslosen Schlacht gegen die britische Royal Navy schicken – einen 'ehrenvollen Opfergang'. In Wilhelmshaven und Kiel weigern sich die Matrosen, für diesen sinnlosen Tod auszulaufen. Triffst du die folgenschwere Weichenstellung?",
    options: [
      {
        title: "Flottenbefehl mit Gewalt erzwingen",
        text: "Du bestehst auf dem Gehorsam, lässt meuternde Matrosen verhaften und drohst mit Waffengewalt.",
        historical: true,
        header: "⚓ Der Kieler Matrosenaufstand & Die Revolution",
        consequence: "Du versuchst, den Befehl durchzusetzen, doch das bricht den letzten Funken Loyalität. Aus dem Protest wird ein bewaffneter Aufstand: Matrosen und Arbeiter schließen sich zusammen, besetzen Kiel und tragen die Revolution binnen weniger Tage durch ganz Deutschland. Das Kaiserreich bricht zusammen. **Geschichtliche Einordnung:** Der Matrosenaufstand war der unmittelbare Zünder der Novemberrevolution, die zum Sturz der Monarchie führte."
      },
      {
        title: "Flottenbefehl absagen",
        text: "Du erkennst die Sinnlosigkeit des 'Opfergangs', verweigerst den Flottenbefehl und schützt das Leben deiner Männer.",
        historical: false,
        header: "⚠️ Alternatives Deeskalations-Szenario",
        consequence: "Du sagst die letzte Schlacht ab. Die Matrosen kehren friedlich in ihre Kasernen zurück. Es kommt nicht zum Kieler Aufstand. Zwar bleibt Deutschland militärisch besiegt, doch das Kaiserreich gewinnt wertvolle Zeit. Ohne den revolutionären Zündfunken aus Kiel verzögert sich der Sturz der Monarchie, und ein geordneter Übergang zu einer parlamentarischen Monarchie unter Max von Baden wird wahrscheinlicher."
      }
    ]
  },
  {
    year: "1918 (9. Nov.)",
    role: "Philipp Scheidemann (SPD-Vorstand)",
    desc: "9. November 1918. Das Kaiserreich bricht zusammen, die Fronten kapitulieren. In Berlin herrscht revolutionäres Chaos. Du stehst am Fenster des Reichstags. Du erfährst, dass der radikale Kommunist Karl Liebknecht in zwei Stunden die sozialistische Räterepublik nach russischem Vorbild ausrufen will. Das Schicksal der Demokratie steht auf dem Spiel...",
    options: [
      {
        title: "Republik eigenmächtig ausrufen",
        text: "Du trittst sofort ans Fenster und rufst um 14:00 Uhr die parlamentarisch-demokratische deutsche Republik aus.",
        historical: true,
        header: "🏛️ Die doppelte Ausrufung der Republik",
        consequence: "Du rufst die Republik aus. Die Menschenmenge jubelt frenetisch. Du kommst Karl Liebknecht (der um 16:00 Uhr die sozialistische Räterepublik verkündet) knapp zuvor. Die bürgerliche Ordnung bleibt bestehen. **Geschichtliche Einordnung:** Dies markiert die Geburtsstunde der Weimarer Republik, schafft aber auch eine tiefe, dauerhafte Spaltung der deutschen Arbeiterschaft."
      },
      {
        title: "Nationalversammlung abwarten",
        text: "Du schweigst, um verfassungsrechtliche Abläufe einzuhalten, und überlässt die Ausrufung einer gewählten Nationalversammlung.",
        historical: false,
        header: "⚠️ Alternatives Räte-Szenario",
        consequence: "Du wartest ab. Karl Liebknecht ruft ungehindert um 16:00 Uhr die Räterepublik aus. Berlin gerät in einen bürgerkriegsähnlichen Zustand. Es bildet sich ein radikales Rätesystem nach Vorbild der Bolschewiki. Die bürgerliche Demokratie scheitert schon vor ihrer Geburt, Deutschland driftet nach links."
      }
    ]
  },
  {
    year: "1918 (10. Nov.)",
    role: "Friedrich Ebert (Rat der Volksbeauftragten)",
    desc: "10. November 1918. Der Kaiser ist abgedankt, die Republik ausgerufen. Doch die Lage ist extrem instabil: Radikale linke Gruppen fordern eine Räterepublik nach sowjetischem Vorbild. General Wilhelm Groener von der Obersten Heeresleitung bietet dir am Telefon ein geheimes Bündnis an: Die Armee garantiert der neuen Regierung Loyalität und militärischen Schutz vor Aufständen, wenn du im Gegenzug die bestehende Offiziershierarchie unangetastet lässt und ein Rätesystem verhinderst. Gehst du diesen folgenschweren Pakt ein?",
    options: [
      {
        title: "Bündnis mit dem Militär schließen",
        text: "Du nimmst das Angebot der OHL an, um die öffentliche Ordnung zu sichern und eine radikale Revolution abzuwehren.",
        historical: true,
        header: "🤝 Der Ebert-Groener-Pakt (Pakt mit den alten Eliten)",
        consequence: "Du gehst das Bündnis ein. Mit Hilfe des Militärs und rechter Freikorps werden linke Aufstände (wie der Spartakusaufstand) blutig niedergeschlagen. Die Ordnung ist gesichert und der Weg zur Weimarer Verfassung frei. **Geschichtliche Einordnung:** Dieser Pakt sicherte das Überleben der Republik, schuf jedoch eine schwere Hypothek: Die alten, republikfeindlichen Militäreliten behielten ihre Macht und die deutsche Arbeiterschaft spaltete sich unüberbrückbar."
      },
      {
        title: "Pakt ablehnen & Allianz mit Rätegruppen suchen",
        text: "Du lehnst das Bündnis ab und stützt dich stattdessen auf die revolutionäre Arbeiter- und Soldatenräte zur Demokratisierung von Wirtschaft und Militär.",
        historical: false,
        header: "⚠️ Alternatives Räterepublik-Szenario",
        consequence: "Du verweigerst den Pakt mit der Generalität. Ohne militärischen Schutz bricht die staatliche Ordnung weiter zusammen. Die Rätegruppen drängen auf eine grundlegende Entmachtung der kaiserlichen Eliten. Es droht ein offener Bürgerkrieg mit unvorhersehbarem Ausgang – Deutschland steht am Rande einer sozialistischen Räterepublik, ähnlich der sowjetischen Entwicklung."
      }
    ]
  },
  {
    year: "1923",
    role: "Reichskanzler Gustav Stresemann",
    desc: "September 1923. Wegen ausstehender Holzreparationen haben französische Truppen das Ruhrgebiet besetzt. Der passive Widerstand (Generalstreik) kostet den Staat täglich Unmengen. Um die Streikenden zu bezahlen, druckt die Reichsbank pausenlos Geld. Die Hyperinflation vernichtet alle Ersparnisse, Adolf Hitler plant den Staatsumsturz in München. Was tust du?",
    options: [
      {
        title: "Widerstand abbrechen & Rentenmark einführen",
        text: "Du brichst den ruinösen Ruhrstreik sofort ab und führst die durch Grundbesitz gedeckte Rentenmark ein.",
        historical: true,
        header: "🪙 Das Überlebenswunder (Rentenmark)",
        consequence: "Du beendest den Ruhrkampf, was dich zur Zielscheibe rechter Hetze macht, aber die Staatsfinanzen rettet. Die neue Rentenmark stoppt die Inflation im November schlagartig. Du meisterst das Krisenjahr 1923 und leitest die 'Goldenen Zwanziger' ein. **Geschichtliche Einordnung:** Stresemanns Währungsstabilisierung rettete kurzfristig die Demokratie, doch die Traumata des Vermögensverlustes trieben den bürgerlichen Mittelstand später in die Arme der NSDAP."
      },
      {
        title: "Generalstreik fortsetzen & Boykott verschärfen",
        text: "Du hältst den passiven Widerstand aufrecht. Das Geld wird im astronomischen Tempo weitergedruckt, um den Kampf zu gewinnen.",
        historical: false,
        header: "⚠️ Alternatives Hyperinflations-Chaos",
        consequence: "Die Inflation gerät ins Unendliche. Die Währung kollabiert vollständig, Geld wird als Brennholz benutzt, Hungersnöte brechen aus. Die Staatsgewalt bricht zusammen. Adolf Hitlers NSDAP-Putschisten nutzen die Apokalypse, marschieren erfolgreich auf Berlin und errichten eine frühe rechtsradikale Diktatur."
      }
    ]
  }
];

// --- GAMIFICATION SYSTEMS ---

function loadGameState() {
  const savedState = localStorage.getItem("wwi_hub_game_state");
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      gameState.xp = parsed.xp || 0;
      gameState.level = parsed.level || 1;
      gameState.unlockedTrophies = parsed.unlockedTrophies || [];
      gameState.timelineClicked = parsed.timelineClicked || [];
      gameState.flashcardsClicked = parsed.flashcardsClicked || [];
      gameState.trainerCompareClicked = parsed.trainerCompareClicked || [];
      gameState.decisionStep = parsed.decisionStep || 0;
      gameState.cheatUnlocked = parsed.cheatUnlocked || false;
    } catch (e) {
      console.error("Fehler beim Laden des Spielstands", e);
    }
  }
  updateXpBarUI(false);
  updateTrophyCabinetUI();
  updateSpickzettelUI();
}

function saveGameState() {
  localStorage.setItem("wwi_hub_game_state", JSON.stringify({
    xp: gameState.xp,
    level: gameState.level,
    unlockedTrophies: gameState.unlockedTrophies,
    timelineClicked: gameState.timelineClicked,
    flashcardsClicked: gameState.flashcardsClicked,
    trainerCompareClicked: gameState.trainerCompareClicked,
    decisionStep: gameState.decisionStep,
    cheatUnlocked: gameState.cheatUnlocked
  }));
}

function addXp(amount) {
  gameState.xp += amount;
  
  // Show floating XP toast
  const xpNotification = document.getElementById("xpNotification");
  if (xpNotification) {
    xpNotification.innerText = `+${amount} XP`;
    xpNotification.style.display = "block";
    
    // Clear previous timeout if multiple clicks happen
    if (window.xpToastTimeout) clearTimeout(window.xpToastTimeout);
    window.xpToastTimeout = setTimeout(() => {
      xpNotification.style.display = "none";
    }, 1800);
  }

  // Check Level-Up (Each level requires level * 200 XP. Level 1 needs 200, Level 2 needs 400, Level 3 needs 600, etc.)
  let didLevelUp = false;
  while (gameState.xp >= gameState.level * 200 && gameState.level < 5) {
    gameState.level++;
    didLevelUp = true;
  }

  if (didLevelUp) {
    triggerLevelUp();
  }

  updateXpBarUI(true);
  updateSpickzettelUI();
  saveGameState();
}

function triggerLevelUp() {
  AudioEngine.playLevelUp();
  ConfettiEngine.burst(150);
  
  // Custom styled level-up modal inside DOM to WOW the user
  const levelUpModal = document.createElement("div");
  levelUpModal.style.position = "fixed";
  levelUpModal.style.top = "0";
  levelUpModal.style.left = "0";
  levelUpModal.style.width = "100%";
  levelUpModal.style.height = "100%";
  levelUpModal.style.background = "rgba(15, 14, 13, 0.9)";
  levelUpModal.style.zIndex = "10000";
  levelUpModal.style.display = "flex";
  levelUpModal.style.alignItems = "center";
  levelUpModal.style.justifyContent = "center";
  levelUpModal.style.animation = "fadeIn 0.4s ease";
  
  const levelNames = {
    1: "Rekrut (Anfänger)",
    2: "Zeitzeuge (Fortgeschritten)",
    3: "Historiker (Experte)",
    4: "Staatsrat (Meister)",
    5: "Geschichts-Genie (Legende)"
  };

  levelUpModal.innerHTML = `
    <div class="glass-card text-center" style="max-width: 500px; padding: 3rem; border: 2px solid var(--accent-gold); box-shadow: 0 0 40px var(--accent-gold-glow);">
      <span style="font-size: 4.5rem; display: block; margin-bottom: 1.5rem; animation: bounce 1s infinite alternate;">🏆</span>
      <h2 style="font-size: 2.2rem; color: var(--accent-gold); margin-bottom: 0.8rem; font-family: 'Playfair Display', serif;">LEVEL UP!</h2>
      <p style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px;">
        Erfolgreich befördert zu Stufe ${gameState.level}
      </p>
      <h3 style="font-family: 'Playfair Display', serif; font-size: 1.6rem; color: #fff; margin-bottom: 2rem;">
        ${levelNames[gameState.level]}
      </h3>
      ${gameState.level === 4 ? `
        <div style="background: rgba(212, 175, 55, 0.15); border: 1px solid var(--accent-gold); border-radius: 8px; padding: 1rem; margin-bottom: 2rem;">
          <p style="font-size: 0.95rem; margin-bottom: 0; color: var(--accent-gold); font-weight: 700;">
            🔓 Sensationell! Du hast das Geheime Staatsarchiv freigeschaltet! Der Experten-Spickzettel ist nun weiter unten komplett lesbar!
          </p>
        </div>
      ` : ""}
      <button class="btn btn-primary" id="levelUpDismissBtn" style="padding: 0.8rem 2.5rem; font-weight: 700;">Weiterlernen</button>
    </div>
  `;

  document.body.appendChild(levelUpModal);
  
  document.getElementById("levelUpDismissBtn").addEventListener("click", () => {
    levelUpModal.style.animation = "fadeOut 0.3s ease";
    setTimeout(() => levelUpModal.remove(), 250);
  });
}

function updateXpBarUI(animate = true) {
  const levelBadge = document.getElementById("dashboardLevelBadge");
  const levelText = document.getElementById("levelText");
  const xpText = document.getElementById("xpText");
  const xpFill = document.getElementById("dashboardXpFill");

  if (!levelBadge) return;

  const levelNames = {
    1: "Rekrut",
    2: "Zeitzeuge",
    3: "Historiker",
    4: "Staatsrat",
    5: "Legende"
  };

  levelBadge.innerText = gameState.level;
  levelText.innerText = levelNames[gameState.level];

  // XP Progress Calculation
  const nextLevelXp = gameState.level * 200;
  const currentLevelXp = (gameState.level - 1) * 200;
  const levelProgressXp = gameState.xp - currentLevelXp;
  const levelRangeXp = nextLevelXp - currentLevelXp;
  
  let percentage = (levelProgressXp / levelRangeXp) * 100;
  if (gameState.level === 5) {
    percentage = 100;
    xpText.innerText = `${gameState.xp} XP (Max-Level erreicht)`;
  } else {
    xpText.innerText = `${gameState.xp} / ${nextLevelXp} XP`;
  }

  xpFill.style.width = `${Math.max(0, Math.min(100, percentage))}%`;
}

function updateSpickzettelUI() {
  const spickLocked = document.getElementById("spickzettelLocked");
  const spickUnlocked = document.getElementById("spickzettelUnlocked");
  const unlockProgress = document.getElementById("spickzettelUnlockProgress");
  const unlockText = document.getElementById("spickzettelUnlockText");

  if (!spickLocked) return;

  if (gameState.cheatUnlocked || gameState.level >= 4) {
    spickLocked.style.display = "none";
    spickUnlocked.style.display = "block";
  } else {
    spickLocked.style.display = "flex";
    spickUnlocked.style.display = "none";
    
    // Unlock percentage is based on XP progress towards level 4 (800 XP)
    const progressPercent = Math.min(100, (gameState.xp / 800) * 100);
    unlockProgress.style.width = `${progressPercent}%`;
    unlockText.innerText = `Benötigt: Level 4 (800 XP) | Aktuell: Level ${gameState.level} (${gameState.xp} XP)`;
  }
}

function unlockTrophy(trophyId) {
  if (gameState.unlockedTrophies.includes(trophyId)) return;
  
  gameState.unlockedTrophies.push(trophyId);
  saveGameState();
  updateTrophyCabinetUI();
  
  // Satisfying real-time achievement popup
  const cardName = document.getElementById(trophyId)?.querySelector(".trophy-title")?.innerText || "Achievement";
  
  const trophyToast = document.createElement("div");
  trophyToast.className = "glass-card";
  trophyToast.style.position = "fixed";
  trophyToast.style.bottom = "100px";
  trophyToast.style.right = "20px";
  trophyToast.style.zIndex = "1005";
  trophyToast.style.border = "2px solid var(--accent-gold)";
  trophyToast.style.background = "rgba(var(--card-bg-rgb), 0.95)";
  trophyToast.style.boxShadow = "0 10px 30px var(--accent-gold-glow)";
  trophyToast.style.display = "flex";
  trophyToast.style.alignItems = "center";
  trophyToast.style.gap = "1rem";
  trophyToast.style.padding = "1rem 1.5rem";
  trophyToast.style.borderRadius = "12px";
  trophyToast.style.animation = "slideInRight 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards";
  
  trophyToast.innerHTML = `
    <div style="font-size: 2.2rem;">🏆</div>
    <div>
      <h4 style="font-family: 'Playfair Display', serif; font-size: 1rem; margin-bottom: 0.1rem; color: var(--accent-gold); font-weight: 700;">TROPHÄE FREIGESCHALTET!</h4>
      <p style="font-size: 0.85rem; margin-bottom: 0; font-weight: 600; color: #fff;">${cardName}</p>
    </div>
  `;
  
  document.body.appendChild(trophyToast);
  
  // Ascending scale sound for achievements
  AudioEngine.playSuccess(3);

  setTimeout(() => {
    trophyToast.style.animation = "slideOutRight 0.4s ease forwards";
    setTimeout(() => trophyToast.remove(), 400);
  }, 4000);
}

function updateTrophyCabinetUI() {
  gameState.unlockedTrophies.forEach(tId => {
    const card = document.getElementById(tId);
    if (card) {
      card.classList.add("unlocked");
      // Add a glowing checkmark
      if (!card.querySelector(".trophy-check")) {
        const check = document.createElement("span");
        check.className = "trophy-check";
        check.innerHTML = "✓";
        check.style.position = "absolute";
        check.style.top = "10px";
        check.style.right = "10px";
        check.style.color = "var(--accent-gold)";
        check.style.fontWeight = "700";
        check.style.fontSize = "1.1rem";
        card.appendChild(check);
      }
    }
  });
}

// Keyframes styles injected dynamically to support the achievements toasters
const dynamicStyles = document.createElement("style");
dynamicStyles.innerHTML = `
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
  @keyframes slideInRight { from { transform: translateX(120%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
  @keyframes slideOutRight { from { transform: translateX(0); opacity: 1; } to { transform: translateX(120%); opacity: 0; } }
  @keyframes slideDown { from { transform: translateY(-20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
  @keyframes pulseTimer { from { box-shadow: 0 0 5px rgba(180, 40, 40, 0.4); } to { box-shadow: 0 0 15px rgba(180, 40, 40, 0.9); } }
  .trophy-card { position: relative; opacity: 0.6; filter: grayscale(1); transition: all 0.5s ease; }
  .trophy-card.unlocked { opacity: 1; filter: grayscale(0); border-color: var(--accent-gold); box-shadow: 0 0 15px var(--accent-gold-glow); }
`;
document.head.appendChild(dynamicStyles);

// --- DECISIONS SIMULATOR ENGINE (Schicksalstheater) ---

function initDecisionsSimulator() {
  renderDecisionScene();
  
  const nextBtn = document.getElementById("decisionNextBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      gameState.decisionStep++;
      if (gameState.decisionStep === decisionScenarios.length) {
        unlockTrophy("trophy-resilienz");
      }
      saveGameState();
      renderDecisionScene();
    });
  }
}

function renderDecisionScene() {
  const yr = document.getElementById("decisionYear");
  const role = document.getElementById("decisionRole");
  const desc = document.getElementById("decisionDescription");
  const optionsContainer = document.getElementById("decisionOptionsContainer");
  const consequenceCard = document.getElementById("consequenceCard");
  const nextBtn = document.getElementById("decisionNextBtn");

  if (!yr) return;

  // Reset UI elements
  consequenceCard.classList.remove("active");
  optionsContainer.innerHTML = "";
  nextBtn.style.display = "none";

  if (gameState.decisionStep >= decisionScenarios.length) {
    // Show completion screen!
    yr.innerText = "FINALE";
    role.innerText = "Theater-Meister";
    
    // Play celebratory sound if available, burst confetti
    if (typeof ConfettiEngine !== 'undefined' && ConfettiEngine.burst) {
      ConfettiEngine.burst(150);
    }
    if (typeof AudioEngine !== 'undefined' && AudioEngine.playLevelUp) {
      AudioEngine.playLevelUp();
    }
    
    desc.innerHTML = `
      <div class="completion-message" style="text-align: center; padding: 1.5rem 0;">
        <h3 style="color: var(--accent-gold); font-size: 1.6rem; margin-bottom: 1rem; font-family: 'Playfair Display', serif;">🎭 Vorhang fällt!</h3>
        <p style="font-size: 1.05rem; line-height: 1.6; margin-bottom: 1.5rem;">
          Du hast alle 6 historischen Entscheidungsszenarien des Schicksalstheaters erfolgreich durchlebt! Von den militarisierten Spannungen der Julikrise 1914 über die Grauen von Verdun 1916 bis hin zu den bürgerkriegsähnlichen Stürmen und der Währungsstabilisierung von 1923.
        </p>
        <p style="font-size: 1.05rem; line-height: 1.6; font-weight: bold; color: var(--accent-gold); margin-bottom: 1.5rem;">
          Deine Entscheidungen haben den Lauf der Geschichte geprägt. Du kannst das Theater jederzeit neu starten, um alternative Pfade zu erkunden und weiterhin XP (+50 XP pro Entscheidung) zu sammeln!
        </p>
      </div>
    `;
    
    const restartBtn = document.createElement("button");
    restartBtn.className = "btn btn-primary pulse-glow";
    restartBtn.style.marginTop = "1rem";
    restartBtn.style.display = "inline-flex";
    restartBtn.style.alignItems = "center";
    restartBtn.style.gap = "0.5rem";
    restartBtn.innerHTML = "🎭 Theater neu starten";
    restartBtn.addEventListener("click", () => {
      gameState.decisionStep = 0;
      saveGameState();
      renderDecisionScene();
    });
    optionsContainer.appendChild(restartBtn);
    return;
  }

  const scene = decisionScenarios[gameState.decisionStep];
  
  yr.innerText = scene.year;
  role.innerText = scene.role;

  // Run vivid typewriter effect with tick audio sounds
  typewriter(desc, scene.desc, 15, () => {
    // Reveal choices only AFTER typewriter animation finishes to force reading!
    scene.options.forEach((opt, idx) => {
      const card = document.createElement("div");
      card.className = "decision-option-card glass-card";
      card.innerHTML = `
        <div>
          <h4 class="decision-option-title">${formatText(opt.title)}</h4>
          <p>${formatText(opt.text)}</p>
        </div>
      `;
      card.addEventListener("click", () => handleDecisionSelection(opt, idx));
      optionsContainer.appendChild(card);
    });
  });
}

function handleDecisionSelection(option, index) {
  const optionsContainer = document.getElementById("decisionOptionsContainer");
  const consequenceCard = document.getElementById("consequenceCard");
  const consequenceHeader = document.getElementById("consequenceHeader");
  const consequenceText = document.getElementById("consequenceText");
  const nextBtn = document.getElementById("decisionNextBtn");

  // Disable further selections
  optionsContainer.innerHTML = "";

  // Render Consequence Card
  consequenceText.innerHTML = formatText(option.consequence);
  
  if (option.historical) {
    consequenceHeader.innerText = option.header;
    consequenceHeader.className = "consequence-header historical";
  } else {
    consequenceHeader.innerText = option.header;
    consequenceHeader.className = "consequence-header alternative";
  }

  consequenceCard.classList.add("active");
  nextBtn.style.display = "inline-flex";

  // Award XP
  addXp(50);
  
  // Trophies Unlock
  if (gameState.decisionStep === 0) {
    unlockTrophy("trophy-julikrise");
  }
}

// --- QUIZ SIMULATOR ENGINE (BLITZ-MODUS & STREAK UPGRADES) ---

let quizTimerInterval = null;
let quizTimeRemaining = 15;
let isBlitzActive = false;

function initQuizEngine() {
  const blitzToggle = document.getElementById("blitzToggle");
  blitzToggle.addEventListener("change", (e) => {
    isBlitzActive = e.target.checked;
    
    // Toggle visual structures in real-time
    const timerBar = document.getElementById("quizTimerBar");
    if (isBlitzActive) {
      timerBar.style.display = "block";
      AudioEngine.playTick();
    } else {
      timerBar.style.display = "none";
      if (quizTimerInterval) clearInterval(quizTimerInterval);
    }
  });

  gameState.shuffledQuestions = shuffleArray([...quizQuestions]);
  gameState.currentQuizIndex = 0;
  gameState.quizScore = 0;
  gameState.quizStreak = 0;

  const nextBtn = document.getElementById("quizNextBtn");
  const restartBtn = document.getElementById("quizRestartBtn");

  nextBtn.addEventListener("click", showNextQuizQuestion);
  restartBtn.addEventListener("click", restartQuizEngine);

  loadQuizQuestion();
}

function loadQuizQuestion() {
  if (quizTimerInterval) clearInterval(quizTimerInterval);
  
  const currentQ = gameState.shuffledQuestions[gameState.currentQuizIndex];
  
  const qNumText = document.getElementById("quizQuestionNum");
  const scoreText = document.getElementById("quizScoreBadge");
  const qText = document.getElementById("quizQuestionText");
  const optionsContainer = document.getElementById("quizOptionsContainer");
  const expBox = document.getElementById("quizExplanationBox");
  const nextBtn = document.getElementById("quizNextBtn");
  const progressFill = document.getElementById("quizProgressFill");
  const timerFill = document.getElementById("quizTimerFill");

  // Reset UI
  expBox.classList.remove("active");
  nextBtn.classList.remove("active");
  optionsContainer.innerHTML = "";

  const progressPercent = (gameState.currentQuizIndex / gameState.shuffledQuestions.length) * 100;
  progressFill.style.width = `${progressPercent}%`;

  qNumText.innerText = `Frage ${gameState.currentQuizIndex + 1} von ${gameState.shuffledQuestions.length}`;
  scoreText.innerText = `Richtige Antworten: ${gameState.quizScore}`;
  qText.innerHTML = formatText(currentQ.question);

  // Shuffled options
  const shuffledOpts = shuffleArray([...currentQ.options]);

  shuffledOpts.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option-btn";
    btn.innerHTML = `
      <span>${formatText(opt.text)}</span>
      <span class="icon"></span>
    `;
    btn.addEventListener("click", () => handleQuizAnswer(btn, opt, currentQ));
    optionsContainer.appendChild(btn);
  });

  // Start Timer if Blitz Mode is active
  if (isBlitzActive) {
    quizTimeRemaining = 15;
    timerFill.style.width = "100%";
    timerFill.style.backgroundColor = "var(--success-green)";
    timerFill.style.animation = "none";
    
    quizTimerInterval = setInterval(() => {
      quizTimeRemaining--;
      const percentLeft = (quizTimeRemaining / 15) * 100;
      timerFill.style.width = `${percentLeft}%`;

      // Visual warn signals changing colors dynamically
      if (quizTimeRemaining > 10) {
        timerFill.style.backgroundColor = "var(--success-green)";
      } else if (quizTimeRemaining > 5) {
        timerFill.style.backgroundColor = "#b8860b"; // Warm gold warning
      } else {
        timerFill.style.backgroundColor = "var(--war-red)";
        timerFill.style.animation = "pulseTimer 0.5s infinite alternate";
      }

      // Metronom metered ticks ticking down pressure! Ticks double-tempo at <5 seconds!
      if (quizTimeRemaining <= 5) {
        AudioEngine.playTimerTick();
        setTimeout(() => AudioEngine.playTimerTick(), 250);
      } else {
        AudioEngine.playTimerTick();
      }

      if (quizTimeRemaining <= 0) {
        clearInterval(quizTimerInterval);
        handleQuizTimeout(currentQ);
      }
    }, 1000);
  }
}

function handleQuizTimeout(questionObj) {
  AudioEngine.playError();
  
  const optionsContainer = document.getElementById("quizOptionsContainer");
  const optionButtons = optionsContainer.querySelectorAll(".quiz-option-btn");
  const expBox = document.getElementById("quizExplanationBox");
  const expText = document.getElementById("quizExplanationText");
  const nextBtn = document.getElementById("quizNextBtn");

  // Disable options
  optionButtons.forEach(btn => btn.disabled = true);

  // Reset streak
  resetQuizStreak();

  // Find correct answer and show in green
  const correctIdx = questionObj.options.findIndex(o => o.correct);
  if (correctIdx !== -1) {
    optionButtons[correctIdx].classList.add("correct");
    optionButtons[correctIdx].querySelector(".icon").innerHTML = `✓`;
  }

  expText.innerHTML = `<strong style="color:var(--war-red);">⚠️ ZEIT ABGELAUFEN!</strong><br><br>${formatText(questionObj.explanation)}`;
  expBox.classList.add("active");

  nextBtn.classList.add("active");
  nextBtn.innerText = gameState.currentQuizIndex === gameState.shuffledQuestions.length - 1 ? "Ergebnisse anzeigen" : "Nächste Frage";
}

function handleQuizAnswer(clickedBtn, selectedOption, questionObj) {
  if (quizTimerInterval) clearInterval(quizTimerInterval);
  
  const optionsContainer = document.getElementById("quizOptionsContainer");
  const optionButtons = optionsContainer.querySelectorAll(".quiz-option-btn");
  const expBox = document.getElementById("quizExplanationBox");
  const expText = document.getElementById("quizExplanationText");
  const nextBtn = document.getElementById("quizNextBtn");

  optionButtons.forEach(btn => btn.disabled = true);

  if (selectedOption.correct) {
    clickedBtn.classList.add("correct");
    clickedBtn.querySelector(".icon").innerHTML = `✓`;
    
    gameState.quizScore++;
    gameState.quizStreak++;
    
    document.getElementById("quizScoreBadge").innerText = `Richtige Antworten: ${gameState.quizScore}`;
    
    // Play ascending success arpeggio based on streak count
    AudioEngine.playSuccess(gameState.quizStreak);
    
    // Calculate and trigger XP with streak multipliers
    triggerXpForCorrectAnswer();
  } else {
    clickedBtn.classList.add("wrong");
    clickedBtn.querySelector(".icon").innerHTML = `✗`;
    
    AudioEngine.playError();
    resetQuizStreak();
    
    // Highlight correct option
    const correctIdx = questionObj.options.findIndex(o => o.correct);
    if (correctIdx !== -1) {
      optionButtons[correctIdx].classList.add("correct");
      optionButtons[correctIdx].querySelector(".icon").innerHTML = `✓`;
    }
  }

  // Show detailed history explanation (Expert historical narrative)
  expText.innerHTML = formatText(questionObj.explanation);
  expBox.classList.add("active");

  nextBtn.classList.add("active");
  nextBtn.innerText = gameState.currentQuizIndex === gameState.shuffledQuestions.length - 1 ? "Ergebnisse anzeigen" : "Nächste Frage";
}

function triggerXpForCorrectAnswer() {
  const streakBadge = document.getElementById("quizStreakBadge");
  const streakCount = document.getElementById("streakCount");
  const streakMult = document.getElementById("streakMult");

  let baseVal = 15;
  let multiplier = 1.0;

  // Streak Multipliers
  if (gameState.quizStreak >= 5) {
    multiplier = 2.0;
  } else if (gameState.quizStreak >= 3) {
    multiplier = 1.5;
  } else if (gameState.quizStreak >= 2) {
    multiplier = 1.2;
  }

  // Blitz mode bonus (+50% addition)
  if (isBlitzActive) {
    multiplier += 0.5;
  }

  // Calculate final value
  const finalXp = Math.round(baseVal * multiplier);

  // Update Streak UI Badge dynamically
  if (gameState.quizStreak >= 2) {
    streakBadge.style.display = "inline-flex";
    streakCount.innerText = gameState.quizStreak;
    streakMult.innerText = `(${multiplier.toFixed(1)}x XP)`;
    
    // Animate badge
    streakBadge.style.animation = "none";
    setTimeout(() => {
      streakBadge.style.animation = "bounce 0.5s ease, pulseStreak 1.5s infinite alternate";
    }, 20);
  } else {
    streakBadge.style.display = "none";
  }

  // Award XP
  addXp(finalXp);
}

function resetQuizStreak() {
  gameState.quizStreak = 0;
  document.getElementById("quizStreakBadge").style.display = "none";
}

function showNextQuizQuestion() {
  gameState.currentQuizIndex++;
  
  if (gameState.currentQuizIndex < gameState.shuffledQuestions.length) {
    loadQuizQuestion();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  if (quizTimerInterval) clearInterval(quizTimerInterval);
  
  const playScreen = document.getElementById("quizPlayScreen");
  const resultsScreen = document.getElementById("quizResultsScreen");
  const progressFill = document.getElementById("quizProgressFill");
  
  playScreen.style.display = "none";
  resultsScreen.classList.add("active");
  progressFill.style.width = "100%";

  const scoreNum = document.getElementById("resultsScoreNumber");
  scoreNum.innerText = `${gameState.quizScore}/${gameState.shuffledQuestions.length}`;

  const resTitle = document.getElementById("resultsTitle");
  const resText = document.getElementById("resultsText");

  const percentage = (gameState.quizScore / gameState.shuffledQuestions.length) * 100;

  // Dynamic feedback copy (Expert learning feedback style)
  if (percentage >= 85) {
    resTitle.innerText = "🏆 Herausragend! Du bist ein absolutes Geschichts-Genie!";
    resText.innerText = `Unglaublich! Mit ${gameState.quizScore} von ${gameState.shuffledQuestions.length} Punkten hast du bewiesen, dass du die komplexen Dynamiken von der Julikrise über die blutigen Materialschlachten bis hin zur Währungsstabilisierung 1923 verinnerlicht hast. Mit diesem profunden Wissen bist du hervorragend aufgestellt, um historische Zusammenhänge differenziert zu analysieren und zu bewerten!`;
    unlockTrophy("trophy-genius");
    ConfettiEngine.burst(150);
  } else if (percentage >= 60) {
    resTitle.innerText = "👍 Starke Leistung! Solides Fundament.";
    resText.innerText = `Du hast ${gameState.quizScore} von ${gameState.shuffledQuestions.length} Fragen richtig beantwortet. Damit verstehst du die zentralen Wendepunkte der Epoche sehr gut. Schau dir zur Vertiefung einfach noch einmal den exklusiven Spickzettel (ab Stufe 4 freigeschaltet) an, um auch komplexe Fragestellungen absolut souverän zu meistern!`;
  } else {
    resTitle.innerText = "📖 Ein kleiner Trainingslauf...";
    resText.innerText = `Du hast ${gameState.quizScore} von ${gameState.shuffledQuestions.length} Punkten erzielt. Nutze diese Gelegenheit für einen weiteren Trainingslauf! Lies dir am besten die Zeitleiste aufmerksam durch, triff andere Entscheidungen im Schicksalstheater und wiederhole das Quiz einfach noch einmal. Jedes Beantworten festigt dein Wissen. Bleib dran, du wirst zum Geschichts-Experten!`;
  }
}

function restartQuizEngine() {
  const playScreen = document.getElementById("quizPlayScreen");
  const resultsScreen = document.getElementById("quizResultsScreen");
  
  resultsScreen.classList.remove("active");
  playScreen.style.display = "block";
  
  gameState.shuffledQuestions = shuffleArray([...quizQuestions]);
  gameState.currentQuizIndex = 0;
  gameState.quizScore = 0;
  resetQuizStreak();
  
  loadQuizQuestion();
}

// --- SYSTEM INITIALIZATION ---

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial System Setup
  loadGameState();
  initTheme();
  initScrollTracker();
  renderTimeline("all");
  renderFlashcards();
  initTrainerTabs();
  initSandboxPractice();
  initDecisionsSimulator();
  initQuizEngine();
  setupNavigationHighlighting();
  initCrashkursPlayer();

  // 2. Interactive Focus Rain Audio Button
  const focusBtn = document.getElementById("audioFocusBtn");
  if (focusBtn) {
    focusBtn.addEventListener("click", () => {
      const isPlaying = AudioEngine.toggleFocusAudio();
      if (isPlaying) {
        focusBtn.classList.add("active");
        focusBtn.querySelector("span") ? focusBtn.querySelector("span").innerText = "Focus Rain AN" : null;
      } else {
        focusBtn.classList.remove("active");
        focusBtn.querySelector("span") ? focusBtn.querySelector("span").innerText = "Focus Audio" : null;
      }
    });
  }

  // 3. Audio clicks bindings for interactive components (for sensory typing clicks)
  document.querySelectorAll("nav a, .btn, .filter-btn, .trainer-tab-btn").forEach(el => {
    el.addEventListener("click", () => AudioEngine.playTick());
  });

  // 4. Flashcard flip XP logic
  document.querySelectorAll(".flashcard").forEach((card, idx) => {
    card.addEventListener("click", () => {
      AudioEngine.playTick();
      if (!gameState.flashcardsClicked.includes(idx)) {
        gameState.flashcardsClicked.push(idx);
        addXp(10); // +10 XP per flipped card once
        
        if (gameState.flashcardsClicked.length === flashcardsData.length) {
          unlockTrophy("trophy-flashcards");
        }
      }
    });
  });

  // 5. Timeline details click XP logic
  document.querySelectorAll(".timeline-card").forEach((card, idx) => {
    card.addEventListener("click", () => {
      AudioEngine.playTick();
      if (!gameState.timelineClicked.includes(idx)) {
        gameState.timelineClicked.push(idx);
        addXp(20); // +20 XP for details read once
      }
    });
  });

  // 6. Schreibtrainer check XP logic
  document.querySelectorAll(".sandbox-compare-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      if (!gameState.trainerCompareClicked.includes(target)) {
        gameState.trainerCompareClicked.push(target);
        addXp(30); // +30 XP for musterlösung comparison
        unlockTrophy("trophy-writer");
      }
    });
  });
});

// 1. Theme Toggle & Dark Mode Sync
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  
  // Select display matching document attribute set in HTML prevention script
  updateToggleIcon(document.documentElement.getAttribute('data-theme'));

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem("color-scheme", newTheme);
    
    const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
    if (metaColorScheme) {
      metaColorScheme.content = newTheme;
    }
    
    updateToggleIcon(newTheme);
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("color-scheme")) {
      const newTheme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      updateToggleIcon(newTheme);
    }
  });
}

function updateToggleIcon(theme) {
  const themeIcon = document.getElementById("themeIcon");
  if (!themeIcon) return;
  
  if (theme === 'dark') {
    themeIcon.innerHTML = `<path d="M12 3c.132 0 .263 0 .393.007a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 3z"/>`;
  } else {
    themeIcon.innerHTML = `<path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2 12h2m16 0h2M12 2v2m0 16v2m-5.636-16.364l1.414 1.414m8.486 8.486l1.414 1.414M6.364 17.636l1.414-1.414m8.486-8.486l1.414-1.414"/>`;
  }
}

// 2. Scroll Progress Tracker & Header Shrink
function initScrollTracker() {
  const scrollProgress = document.getElementById("scrollProgress");
  const mainHeader = document.getElementById("mainHeader");

  window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    if (scrollProgress) {
      scrollProgress.style.width = scrolled + "%";
    }

    if (mainHeader) {
      if (winScroll > 50) {
        mainHeader.classList.add("scrolled");
      } else {
        mainHeader.classList.remove("scrolled");
      }
    }
  });
}

// 3. Navigation Links Active State Highlight on Scroll
function setupNavigationHighlighting() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  window.addEventListener("scroll", () => {
    let currentSectionId = "";
    const scrollPos = window.scrollY + 220; // Offset for header

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });

    mobileNavLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });
}

// 4. Render Timeline with Filtering & Accordions
function renderTimeline(filter) {
  const container = document.getElementById("timelineContainer");
  if (!container) return;
  container.innerHTML = "";

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-filter") === filter) {
      btn.classList.add("active");
    }
  });

  timelineEvents.forEach((ev, index) => {
    if (filter !== "all" && ev.category !== filter) {
      return;
    }

    const item = document.createElement("div");
    item.className = `timeline-item ${ev.category}`;

    const detailsListHTML = ev.details.map(d => `<li>${formatText(d)}</li>`).join("");

    item.innerHTML = `
      <div class="timeline-badge"></div>
      <div class="timeline-date">${ev.year} <span class="timeline-category">${getGermanCategoryName(ev.category)}</span></div>
      <div class="timeline-card glass-card" id="timeline-card-${index}">
        <h3>${formatText(ev.title)}</h3>
        <p class="timeline-summary">${formatText(ev.summary)}</p>
        <div class="timeline-details">
          <ul>
            ${detailsListHTML}
          </ul>
          <div class="timeline-exam-tip">
            <strong>💡 Geschichts-Analyse-Tipp:</strong> ${formatText(ev.tip)}
          </div>
        </div>
      </div>
    `;

    container.appendChild(item);

    const card = item.querySelector(".timeline-card");
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });

  if (!window.filtersInitialized) {
    const filters = document.querySelector(".timeline-filters");
    if (filters) {
      filters.addEventListener("click", (e) => {
        if (e.target.classList.contains("filter-btn")) {
          const filterVal = e.target.getAttribute("data-filter");
          renderTimeline(filterVal);
        }
      });
    }
    window.filtersInitialized = true;
  }
}

function getGermanCategoryName(cat) {
  switch (cat) {
    case "militarisch": return "Militär";
    case "politisch": return "Politik";
    case "heimatfront": return "Heimatfront";
    default: return cat;
  }
}

// 5. Render Interactive 3D Flashcards
function renderFlashcards() {
  const container = document.getElementById("flashcardsContainer");
  if (!container) return;
  container.innerHTML = "";

  flashcardsData.forEach((card, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "flashcard-wrapper";

    wrapper.innerHTML = `
      <div class="flashcard" id="card-${index}">
        <div class="flashcard-front">
          <span class="card-index">Karte ${index + 1}</span>
          <h3>${formatText(card.term)}</h3>
          <span class="card-hint">Umdrehen zum Lernen ↻</span>
        </div>
        <div class="flashcard-back">
          <span class="card-index">Definition</span>
          <p>${formatText(card.definition)}</p>
          <span class="card-hint">Zurückdrehen ↻</span>
        </div>
      </div>
    `;

    container.appendChild(wrapper);

    const flashcardEl = wrapper.querySelector(".flashcard");
    flashcardEl.addEventListener("click", () => {
      flashcardEl.classList.toggle("flipped");
    });
  });
}

// 6. Geschichts-Trainer Tabs switching
function initTrainerTabs() {
  const tabs = document.querySelectorAll(".trainer-tab-btn");
  const panes = document.querySelectorAll(".trainer-content-pane");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetTab = tab.getAttribute("data-tab");

      tabs.forEach(t => t.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));

      tab.classList.add("active");
      const pane = document.getElementById(`pane-${targetTab}`);
      if (pane) pane.classList.add("active");
    });
  });
}

// 7. Interactive writing sandbox
function initSandboxPractice() {
  const textareas = {
    afb1: document.getElementById("textarea-afb1"),
    afb2: document.getElementById("textarea-afb2"),
    afb3: document.getElementById("textarea-afb3")
  };

  const selects = {
    afb1: document.getElementById("select-afb1"),
    afb2: document.getElementById("select-afb2"),
    afb3: document.getElementById("select-afb3")
  };

  const feedbackBoxes = {
    afb1: document.getElementById("feedback-afb1"),
    afb2: document.getElementById("feedback-afb2"),
    afb3: document.getElementById("feedback-afb3")
  };

  Object.keys(selects).forEach(key => {
    const sel = selects[key];
    if (sel) {
      sel.addEventListener("change", (e) => {
        const val = e.target.value;
        if (val) {
          const textarea = textareas[key];
          const startPos = textarea.selectionStart;
          const endPos = textarea.selectionEnd;
          const text = textarea.value;

          textarea.value = text.substring(0, startPos) + val + text.substring(endPos, text.length);
          textarea.focus();
          sel.selectedIndex = 0;
        }
      });
    }
  });

  document.querySelectorAll(".sandbox-compare-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      const fb = feedbackBoxes[target];
      if (fb) {
        fb.classList.add("active");
      }
    });
  });
}

const crashkursData = [
  {
    title: "1. Das Pulverfass & Der Funke (1914)",
    text: "Willkommen zum Crashkurs! Vor 1914 brodelte Europa. Der Grund? **Aggressiver Imperialismus** und das heftige **Flottenwettrüsten** zwischen Deutschland und England. Europa war geteilt: Triple Entente (GB, FR, RU) gegen Mittelmächte (DE, AT). Das Attentat von Sarajevo am 28. Juni 1914 war dann der Funke im Pulverfass. Mit dem deutschen **Blankoscheck** eskalierte die Julikrise.",
    points: [
      "Imperialismus und Wettrüsten schufen extreme Spannungen.",
      "Sarajevo war der Auslöser, nicht die tiefere Ursache.",
      "Der Blankoscheck gave Österreich freie Hand für ein hartes Ultimatum."
    ],
    gold: "Zur historischen Einordnung: Trenne immer den Anlass (Sarajevo) von den strukturellen Kriegsursachen (Imperialismus, Bündnisse)."
  },
  {
    title: "2. Die Hölle der Materialschlacht (1914-1918)",
    text: "Der Schlieffen-Plan scheiterte sofort. Der Krieg erstarrte im **Stellungskrieg**. Statt schnellem Sieg gab es die grausame **Materialschlacht** mit Giftgas und Panzern. An der **Heimatfront** hungerten die Menschen im Steckrübenwinter 1916/17 durch die britische Seeblockade. Frauen übernahmen die Fabrikarbeit - die Basis für das spätere Frauenwahlrecht.",
    points: [
      "Stellungs- und Grabenkrieg im Westen statt Bewegungskrieg.",
      "Hunderttausende Tote bei Verdun durch industrielle Massenvernichtung.",
      "Totale Mobilisierung von Zivilbevölkerung und Wirtschaft."
    ],
    gold: "Zur historischen Einordnung: Der 'Totale Krieg' hob die Grenze zwischen kämpfender Front und ziviler Heimatfront fast völlig auf."
  },
  {
    title: "3. Das Epochenjahr 1917",
    text: "1917 brachte die Wende. Deutschlands uneingeschränkter **U-Boot-Krieg** zog die **USA** in den Konflikt. Gleichzeitig stürzte in Russland das Zarenreich. Die Bolschewiki unter Lenin übernahmen in der **Oktoberrevolution** die Macht. Russland schied durch einen Sonderfrieden im Osten aus dem Krieg aus.",
    points: [
      "Kriegseintritt der USA brachte den Alliierten unbegrenzte Ressourcen.",
      "Zusammenbruch der Ostfront nach Russlands sozialistischer Revolution.",
      "Die USA und Sowjetrussland betreten als neue Mächte die Weltbühne."
    ],
    gold: "Zur historischen Einordnung: Das Jahr 1917 markiert als Zäsur das Ende des rein europäisch dominierten Zeitalters."
  },
  {
    title: "4. Sturz des Kaisers & Neue Republik (1918-1919)",
    text: "Herbst 1918: Die OHL fordert Waffenstillstand. Die Novemberrevolution bricht nach dem **Kieler Matrosenaufstand** los. Am 9. November dankt der Kaiser ab. Scheidemann und Liebknecht rufen am selben Tag die Republik aus. Die Rechte hetzt mit der **Dolchstoßlegende**, während der **Versailler Vertrag** als Schandfrieden empfunden wird.",
    points: [
      "Matrosen weigern sich im Oktober, ein sinnloses Selbstopfer zu bringen.",
      "Doppelte Ausrufung der Republik: Demokratisch vs. Sozialistisch.",
      "Kriegsschuldparagraph 231 belastete die junge Demokratie schwer."
    ],
    gold: "Zur historischen Einordnung: Die Dolchstoßlegende war eine manipulative Verschwörungserzählung, die der Weimarer Demokratie von Beginn an die Legitimität entziehen sollte."
  },
  {
    title: "5. Das Krisenjahr 1923",
    text: "1923 stand Weimar kurz vor dem Ruin. Wegen Verzugs bei Reparationen besetzten Franzosen das Ruhrgebiet. Die Folge: Passiver Widerstand und **Hyperinflation** - Geld wurde wertlos! Im Chaos putschte Adolf Hitler am 9. November in München. Radikale Parteien bekamen massiven Zulauf, weil Existenzangst das Vertrauen in die Demokratie zerstörte.",
    points: [
      "Ruhrbesetzung ruinierte die Wirtschaft vollständig.",
      "Hyperinflation enteignete den bürgerlichen Mittelstand.",
      "Hass auf das System trieb Wähler an die extremen Ränder (KPD/NSDAP)."
    ],
    gold: "Zur historischen Einordnung: Erst die Währungsreform (Rentenmark) unter Stresemann beendete das inflationäre Chaos und stabilisierte die Republik."
  }
];

let activeCrashkursStep = 0;

function initCrashkursPlayer() {
  const startBtn = document.getElementById("startCrashkursBtn");
  const modal = document.getElementById("crashkursModal");
  const closeBtn = document.getElementById("closeCrashkursBtn");
  const prevBtn = document.getElementById("crashkursPrevBtn");
  const nextBtn = document.getElementById("crashkursNextBtn");
  const cheatBtn = document.getElementById("cheatUnlockSpickzettelBtn");

  if (!modal) return;

  // Open Crashkurs
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      AudioEngine.init();
      AudioEngine.playTick();
      modal.style.display = "flex";
      activeCrashkursStep = 0;
      renderCrashkursStep();
    });
  }

  // Close Crashkurs
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      AudioEngine.playTick();
      modal.style.display = "none";
    });
  }

  // Prev step
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (activeCrashkursStep > 0) {
        activeCrashkursStep--;
        AudioEngine.playTick();
        renderCrashkursStep();
      }
    });
  }

  // Next step
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      AudioEngine.playTick();
      if (nextBtn.innerText === "Starten") {
        activeCrashkursStep = 0;
        renderCrashkursStep();
      } else if (activeCrashkursStep < crashkursData.length - 1) {
        activeCrashkursStep++;
        renderCrashkursStep();
      } else {
        // Completed!
        modal.style.display = "none";
        addXp(100); // 100 XP Bonus!
        ConfettiEngine.burst(80);
        unlockTrophy("trophy-writer"); // Treat them with an achievement
      }
    });
  }

  // Cheat unlock Spickzettel
  if (cheatBtn) {
    cheatBtn.addEventListener("click", () => {
      AudioEngine.init();
      AudioEngine.playSuccess(2);
      gameState.cheatUnlocked = true;
      saveGameState();
      updateSpickzettelUI();
    });
  }
}

function renderCrashkursStep() {
  const step = crashkursData[activeCrashkursStep];
  
  const narratorText = document.getElementById("crashkursNarratorText");
  const contentBox = document.getElementById("crashkursContentBox");
  const prevBtn = document.getElementById("crashkursPrevBtn");
  const nextBtn = document.getElementById("crashkursNextBtn");
  
  // Update step dots
  const dots = document.querySelectorAll(".step-dot");
  dots.forEach((dot, idx) => {
    dot.className = "step-dot";
    if (idx === activeCrashkursStep) {
      dot.classList.add("active");
    } else if (idx < activeCrashkursStep) {
      dot.classList.add("completed");
      dot.innerHTML = "✓";
    } else {
      dot.innerHTML = idx + 1;
    }
  });

  if (prevBtn) {
    prevBtn.style.display = activeCrashkursStep > 0 ? "inline-flex" : "none";
  }
  if (nextBtn) {
    nextBtn.innerText = activeCrashkursStep === crashkursData.length - 1 ? "Kurs abschließen (+100 XP)" : "Weiter";
  }

  // Narrator typewriter
  if (contentBox) {
    contentBox.style.display = "none";
  }
  const introBubble = `Dein Geschichts-Trainer sagt: "Schauen wir uns Thema ${activeCrashkursStep + 1} an: ${step.title}..."`;
  
  if (narratorText) {
    typewriter(narratorText, introBubble, 10, () => {
      // Show step details
      if (contentBox) {
        contentBox.innerHTML = `
          <h3>${formatText(step.title)}</h3>
          <p>${formatText(step.text)}</p>
          <ul>
            ${step.points.map(p => `<li>${formatText(p)}</li>`).join("")}
          </ul>
          <div class="crashkurs-gold-box">
            <h5>💡 GESCHICHTS-GOLD</h5>
            <p>${formatText(step.gold)}</p>
          </div>
        `;
        contentBox.style.display = "block";
      }
    });
  }
}

