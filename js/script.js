const STORE = {
    questions: {
        accessibility: [
            {
                question: "Wofür wird die lang Eigenschaft verwendet?",
                code: `&lt;html lang="en"&gt;`,
                answers: [
                    "So legen Sie fest, welche HTML-Version die Seite verwendet",
                    "So bestimmen Sie den linearen Winkel für CSS-Eigenschaften",
                    "So beschränken Sie die Seite, sodass sie nur in bestimmten Regionen angezeigt wird",
                    "Zur Verwendung durch Suchmaschinen, um sprachspezifische Ergebnisse zurückzugeben"
                ],
                correctAnswer: "Zur Verwendung durch Suchmaschinen, um sprachspezifische Ergebnisse zurückzugeben"
            }, {
                question: "Warum sollte jemand die role Eigenschaft verwenden?",
                code: `&lt;div role="progressbar"&gt;&lt;/div&gt;`,
                answers: [
                    "So ersetzen Sie semantisches Markup",
                    "So fügen Sie einem Abschnitt eine Überschrift oder Beschriftung hinzu",
                    "So definieren Sie, mit welchem übergeordneten Element ein Element in Beziehung steht",
                    "So fügen Sie zusätzliche Informationen hinzu, wenn kein natives Element geeignet ist"
                ],
                correctAnswer: "So fügen Sie zusätzliche Informationen hinzu, wenn kein natives Element geeignet ist"
            }, {
                question: "Was ist Barrierefreiheit auf einer Website?",
                code: ``,
                answers: [
                    "Die Verwendung von sem Attributs zum Definieren der Muttersprache einer Seite",
                    "Hinzufügen zusätzlicher Attribute für Screenreader (alt, role, etc.)",
                    "Alle diese Antworten sind Best Practices für die Barrierefreiheit"
                ],
                correctAnswer: "Alle diese Antworten sind Best Practices für die Barrierefreiheit"
            }, {
                question: "Wofür steht ARIA?",
                code: ``,
                answers: [
                    "Applied Responsive Interactive Attributes",
                    "Assumed Rendering of Included Articles",
                    "Accrued Resource Immersive Anchors",
                    "Accessible Rich Internet Applications"
                ],
                correctAnswer: "Accessible Rich Internet Applications"
            }, {
                question: "Was ist eine zugängliche Methode, um über die Tastatur navigierbare Bildsymbole zu erstellen?",
                code: ``,
                answers: [
                    "&lt;img src='test.jpg' access='keyboard' ...&gt;",
                    "&lt;nav keyboard='tab'&gt;&lt;img ...&gt;&lt;/nav&gt;",
                    "&lt;img src='test.jpg' nav='true' ...&gt;",
                    "&lt;input type='image' src='test.jpg' ...&gt;"
                ],
                correctAnswer: "&lt;input type='image' src='test.jpg' ...&gt;"
            }
        ],
        arrays: [
            {
                question: "Welche Methode würdest du verwenden, um den Wert 4 zurückzugeben?",
                code: `let arr = [2,4,6,8,10]`,
                answers: [
                    "arr[4]",
                    "arr[2]",
                    "arr[3]",
                    "arr[1]"
                ],
                correctAnswer: "arr[1]"
            }, {
                question: "Wie würden wir einen Wert am Ende des Arrays hinzufügen?",
                code: `let arr = 
['a','b','c','d','e']`,
                answers: [
                    "arr.pop('f')",
                    "arr.append('f')",
                    "arr.add('f')",
                    "arr.push('f')"
                ],
                correctAnswer: "arr.push('f')"
            }, {
                question: "Was würden wir verwenden, um den letzten Wert des Arrays zu entfernen und zurückzugeben?",
                code: `let arr = 
[3,1,4,1,5,9]`,
                answers: [
                    "arr.remove(9)",
                    "arr.grep('9')",
                    "arr.shift()",
                    "arr.pop()"
                ],
                correctAnswer: "arr.pop()"
            }, {
                question: "Wie würden wir die Länge des folgenden Arrays ermitteln?",
                code: `let arr = 
[23,1,943,81,-52,3.14159]`,
                answers: [
                    "arr.depth()",
                    "arr.index",
                    "arr.shift()",
                    "arr.length"
                ],
                correctAnswer: "arr.length"
            }, {
                question: "Bei welchem Index befindet sich der Wert 9 im folgenden Array?",
                code: `let arr = 
[23,1,943,81,9,3.14159]`,
                answers: [
                    "2",
                    "3",
                    "5",
                    "4"
                ],
                correctAnswer: "4"
            }
        ],
        elements: [
            {
                question: "Was sind die 3 grundlegenden erforderlichen Elemente für eine HTML-Seite?",
                code: ``,
                answers: [
                    "&lt;header&gt;, &lt;main&gt;, &lt;footer&gt;",
                    "&lt;start&gt;, &lt;middle&gt;, &lt;end&gt;",
                    "&lt;html&gt;, &lt;body&gt;, &lt;script&gt;",
                    "&lt;html&gt;, &lt;head&gt;, &lt;body&gt;"
                ],
                correctAnswer: "&lt;html&gt;, &lt;head&gt;, &lt;body&gt;"
            }, {
                question: "Welches HTML-Element ist die größte Überschrift und sollte generell nur einmal verwendet werden?",
                code: ``,
                answers: [
                    "&lt;heading&gt;",
                    "&lt;title&gt;",
                    "&lt;h6&gt;",
                    "&lt;h1&gt;"
                ],
                correctAnswer: "&lt;h1&gt;"
            }, {
                question: "Welches HTML-Element erzeugt einen Zeilenumbruch?",
                code: `
&lt;p&gt;The quick brown fox... 
&lt;tag&gt;jumped over the lazy dogs&lt;/p&gt;`,
                answers: [
                    "&lt;break&gt;",
                    "&lt;hr&gt;",
                    "&lt;lb&gt;",
                    "&lt;br&gt;"
                ],
                correctAnswer: "&lt;br&gt;"
            }, {
                question: "Wie erstellt man einen HTML-Link?",
                code: ``,
                answers: [
                    "&lt;link href='test.com'&gt;Test.com&lt;/link&gt;",
                    "&lt;a src='test.com'&gt;Test.com&lt;/a&gt;",
                    "&lt;href url='test.com'&gt;Test.com&lt;/href&gt;",
                    "&lt;a href='test.com'&gt;Test.com&lt;/a&gt;"
                ],
                correctAnswer: "&lt;a href='test.com'&gt;Test.com&lt;/a&gt;"
            }, {
                question: "Welche dieser Elemente sind alle &lt;table&gt; Elemente?",
                code:
                    `&lt;table&gt;
 ... 
&lt;/table&gt;`,
                answers: [
                    "&lt;thead&gt;, &lt;th&gt;, &lt;cell&gt;",
                    "&lt;thead&gt;, &lt;tbody&gt;, &lt;row&gt;",
                    "&lt;tbody&gt;, &lt;tr&gt;, &lt;cell&gt;",
                    "&lt;thead&gt;, &lt;tr&gt;, &lt;td&gt;"
                ],
                correctAnswer: "&lt;thead&gt;, &lt;tr&gt;, &lt;td&gt;"
            }
        ],
        flexbox: [
            {
                question: "Was ist Flexbox?",
                code: ``,
                answers: [
                    "Eine JavaScript-Bibliothek für responsives Design",
                    "Ein HTML-Markup, das flexible Inhalte ermöglicht",
                    "Ein Entwicklungsansatz zur Erstellung von semantischem HTML",
                    "Eine Sammlung von CSS-Eigenschaften zur Vereinfachung von Seitenlayouts"
                ],
                correctAnswer: "Eine Sammlung von CSS-Eigenschaften zur Vereinfachung von Seitenlayouts"
            }, {
                question: "Um Flexbox zu verwenden, definieren wir einen Container als Flexbox. Was ist das CSS, um dies zu tun?",
                code:
                    `.flex-container {
 ...
}`,
                answers: [
                    "position: flex",
                    "display: flexbox",
                    "float: flexbox",
                    "display: flex"
                ],
                correctAnswer: "display: flex"
            }, {
                question: "flex-basis definiert was...?",
                code:
                    `.flex-item {
 flex-basis: 20px;
}`,
                answers: [
                    "Die Basis des Flexelements",
                    "Der Rand des Flex-Elements",
                    "Die Boldness des Flex-Elements",
                    "Die Anfangsgröße des Flexelements"
                ],
                correctAnswer: "Die Anfangsgröße des Flexelements"
            }, {
                question: "Welche Werte können wir für die Flex-Richtung verwenden?",
                code:
                    `.flex-container {
 flex-direction: ...
}`,
                answers: [
                    "flex-start, flex-end, space-between, space-around",
                    "start, center, end, space-evenly",
                    "horizontal, vertical, reverse-horizontal, reverse-vertical",
                    "row, row-reverse, column, column-reverse"
                ],
                correctAnswer: "row, row-reverse, column, column-reverse"
            }, {
                question: "Was können Sie mit der CSS-Eigenschaftsreihenfolge für Flex-Elemente tun?",
                code:
                    `.flex-item {
 order: ...
}`,
                answers: [
                    "Geben Sie die Richtung an, in der Flex-Elemente angezeigt werden",
                    "Definieren, wann jedes Flex-Element geladen wird",
                    "Flex-Elemente nach verschiedenen Werten sortieren (alphabetisch, numerisch)",
                    "Geben Sie an, in welcher Reihenfolge die Flex-Elemente angezeigt werden"
                ],
                correctAnswer: "Geben Sie an, in welcher Reihenfolge die Flex-Elemente angezeigt werden"
            }
        ],
        forms: [
            {
                question: "Was sind die beiden wichtigsten Attribute für ein Formular?",
                code: `
&lt;form ...&gt;
&lt;/form&gt;`,
                answers: [
                    "lang, process",
                    "before, after",
                    "id, class",
                    "method, action"
                ],
                correctAnswer: "method, action"
            }, {
                question: "Was sind einige der beliebtesten Arten von &lt;input&gt;",
                code: `&lt;input type='...'&gt;`,
                answers: [
                    "css, target, label",
                    "auto, keyboard, mouse",
                    "text, include, exclude",
                    "text, checkbox, button"
                ],
                correctAnswer: "text, checkbox, button"
            }, {
                question: "Auf welches Attribut einer Eingabe bezieht sich die Beschriftung für das Attribut?",
                code:
                    `&lt;label for=...&gt;&lt;/label&gt;
&lt;input ...&gt;`,
                answers: [
                    "role",
                    "value",
                    "type",
                    "id"
                ],
                correctAnswer: "id"
            }, {
                question: "Welches Attribut eines Optionsfeldtyps verknüpft sie miteinander, um sicherzustellen, dass nur eines ausgewählt ist?",
                code: `&lt;input type='radio' ...&gt;`,
                answers: [
                    "role",
                    "value",
                    "id",
                    "name"
                ],
                correctAnswer: "name"
            }, {
                question: "Was ist der Unterschied zwischen der GET- und der POST-Methode?",
                code: `
&lt;form method='get'&gt;
&lt;form method='post'&gt;`,
                answers: [
                    "Die GET-Methode ruft einfach Daten ab, während POST senden und empfangen kann",
                    "Die POST-Methode sendet einfach Daten, während GET senden und empfangen kann",
                    "Die POST-Methode wird für verschiedene Datenbanktypen verwendet",
                    "Die GET-Methode sendet alle Informationen in der URL"
                ],
                correctAnswer: "Die GET-Methode sendet alle Informationen in der URL"
            }
        ],
        loops: [
            {
                question: "Welche zwei Arten von JavaScript-Schleifen gibt es?",
                code: ``,
                answers: [
                    "loop, cycle",
                    "inclusive, exclusive",
                    "anonymous, declared",
                    "for, while"
                ],
                correctAnswer: "for, while"
            }, {
                question: "In welcher Reihenfolge bestehen die 3 Bedingungen einer for-Schleife?",
                code: `for(...;...;...){`,
                answers: [
                    "variables; start condition; final expression",
                    "variables; counter; function",
                    "iteration; initialization; condition",
                    "initialization; condition; final expression"
                ],
                correctAnswer: "initialization; condition; final expression"
            }, {
                question: "Welche Bedingung würden wir verwenden, um diese Schleife 5 Mal auszuführen?",
                code: `for(let i=0;...; i++){`,
                answers: [
                    "i===5",
                    "5",
                    "i&lt;=5",
                    "i&lt;5"
                ],
                correctAnswer: "i&lt;5"
            }, {
                question: "Was passiert, wenn die Bedingung einer while-Schleife immer wahr ist?",
                code: `while(5===5){ ... }`,
                answers: [
                    "Der Ausführungscode wird nie ausgeführt",
                    "Der Ausführungscode wird einmal ausgeführt",
                    "Ein Syntaxfehler wird die Seite zur Laufzeit anhalten",
                    "Der Ausführungscode wird unbegrenzt ausgeführt"
                ],
                correctAnswer: "Der Ausführungscode wird unbegrenzt ausgeführt"
            }, {
                question: "Wie groß ist die Anzahl der Variablen am Ende dieser Schleife?",
                code: `
let count = 0;
for(let i=0; i&lt;3; i++){
 count+=1;
}
return count;`,
                answers: [
                    "1",
                    "2",
                    "0",
                    "3"
                ],
                correctAnswer: "3"
            }
        ],
        methods: [
            {
                question: "Wie wandeln wir diese Wortfolge in ein Array der ganzen Wörter um?",
                code: `let str = 
"The quick brown fox 
jumped over the lazy dogs"`,
                answers: [
                    "str.split()",
                    "str.words('')",
                    "str.convert('')",
                    "str.split(' ')"
                ],
                correctAnswer: "str.split(' ')"
            }, {
                question: "Wie würden wir das zweite Wort in dieser Zeichenkette durch das Wort 'will' ersetzen?",
                code: `let str = "I cannot code well"`,
                answers: [
                    "str.replace('will', 'cannot')",
                    "str.convert('cannot', 'will')",
                    "str.mask('will', 'cannot')",
                    "str.replace('cannot', 'will')"
                ],
                correctAnswer: "str.replace('cannot', 'will')"
            }, {
                question: "Wie rufen Sie die Methode dieses Objekts auf?",
                code: `
let obj = {
 car: 'Car',
 sayCar: function(){
  console.log(this.car);
 }
}`,
                answers: [
                    "function sayCar(obj)",
                    "obj.function(sayCar)",
                    "sayCar()",
                    "obj.sayCar()"
                ],
                correctAnswer: "obj.sayCar()"
            }, {
                question: "Was ist eine JavaScript-Methode?",
                code: ``,
                answers: [
                    "Ein Stil, Code auf lesbare Weise zu schreiben",
                    "Das HTML-Tag, mit dem Sie JavaScript inline schreiben können",
                    "Ein Variablentyp, der es ermöglicht, veränderlich zu sein",
                    "Eine Eigenschaft eines Objekts, das eine Funktion ausführt"
                ],
                correctAnswer: "Eine Eigenschaft eines Objekts, das eine Funktion ausführt"
            }, {
                question: "Warum sollten wir keine ES6-Pfeilfunktionen in Objektmethodendeklarationen verwenden?",
                code: `
let obj = {
 car: "Audi",
 callCar: () =&gt; {
  return this.car 
 }
}`,
                answers: [
                    "Pfeilfunktionen bieten zusätzliche Eigenschaften, die für das Objekt irrelevant sind",
                    "Pfeilfunktionen benötigen Parameter",
                    "Pfeilfunktionen sind immer anonym",
                    "Pfeilfunktionen haben einen anderen Anwendungsbereich als das Objekt"
                ],
                correctAnswer: "Pfeilfunktionen haben einen anderen Anwendungsbereich als das Objekt"
            }
        ],
        CSS: [
            {
                question: "Wofür steht CSS?",
                code: ``,
                answers: [
                    "Creative Standard Solution",
                    "Color, Style, Scale",
                    "Compressed Specific Structure",
                    "Cascading Style Sheets"
                ],
                correctAnswer: "Cascading Style Sheets"
            }, {
                question: "Wie würden Sie eine Hintergrundfarbe auf Rot setzen?",
                code: ``,
                answers: [
                    "backgroundcolor: red",
                    "color: red",
                    "bg-color: red",
                    "background-color: red"
                ],
                correctAnswer: "background-color: red"
            }, {
                question: "Was macht box-sizing: border box?",
                code: `box-sizing: border-box;`,
                answers: [
                    "Fügt dem Element einen Rahmen hinzu",
                    "Zwingt das Element, die rechteckige Form beizubehalten",
                    "Beseitigt alle Eigenschaften eines vorhandenen Rahmens",
                    "Erzwingt, dass die Rand-, Abstands- und Rahmenabmessungen die Breite einschließen"
                ],
                correctAnswer: "Erzwingt, dass die Rand-, Abstands- und Rahmenabmessungen die Breite einschließen"
            }, {
                question: "Was ist der Unterschied zwischen position: inline und position: inline-block?",
                code: `
position: inline;
position: inline-block;`,
                answers: [
                    "inline wird nur verwendet, um exklusives Padding und Margin zu definieren",
                    "Der Inline-Block wird nur verwendet, um zusätzliche Ränder zu definieren",
                    "Inline wird verwendet, um zu vermeiden, dass Elemente auf großen Bildschirmen in verschiedene Zeilen umgebrochen werden",
                    "Der Inline-Block ermöglicht es dem Benutzer, eine Breite und Höhe zu definieren"
                ],
                correctAnswer: "Der Inline-Block ermöglicht es dem Benutzer, eine Breite und Höhe zu definieren"
            }, {
                question: "Welche Farbe hätte der Absatz &lt;p id='foo' class='para'&gt;?",
                code:
                    `* { color: cyan; }
#foo { color: yellow; }
.para { color: red; }
p.para { color: blue; }`,
                answers: [
                    "cyan",
                    "red",
                    "blue",
                    "yellow"
                ],
                correctAnswer: "yellow"
            }
        ],
        conditionals: [
            {
                question: "Was sind zwei Arten von bedingten Anweisungen in JavaScript?",
                code: ``,
                answers: [
                    "if, when",
                    "choice, determined",
                    "switch, then",
                    "if, switch"
                ],
                correctAnswer: "if, switch"
            }, {
                question: "Worauf wird diese bedingte Aussage ausgewertet?",
                code:
                    `if(5&lt;=2){ return true; } 
else { return false; }`,
                answers: [
                    "5 &gt; 2",
                    "true",
                    "5 &lt;= 2",
                    "false"
                ],
                correctAnswer: "false"
            }, {
                question: "Wann würden Sie eine switch-Anweisung verwenden?",
                code: ``,
                answers: [
                    "Wenn Sie ein zufälliges Ergebnis erzielen wollen",
                    "Wenn es eine Variable gibt, die sich ändern kann",
                    "Wenn Sie einen booleschen Wert auf wahr oder falsch umschalten müssen",
                    "Wenn Sie viele unterschiedliche Maßnahmen für viele spezifische Auswertungen benötigen"
                ],
                correctAnswer: "Wenn Sie viele unterschiedliche Maßnahmen für viele spezifische Auswertungen benötigen"
            }, {
                question: "Worauf wird diese bedingte Aussage ausgewertet?",
                code:
                    `let foo = 1;
if(foo){ return true; }
else { return false; }`,
                answers: [
                    "1",
                    "false",
                    "foo",
                    "true"
                ],
                correctAnswer: "true"
            }, {
                question: "Worauf wird diese bedingte Aussage ausgewertet?",
                code:
                    `let foo = 0;
if(foo && foo &lt; 5){
 return 1; }
else if(foo &lt; 5){ 
 return 2; }
else { 
 return 3; }`,
                answers: [
                    "1",
                    "3",
                    "false",
                    "2"
                ],
                correctAnswer: "2"
            }
        ],
        objects: [
            {
                question: "Wie console.log wir den Wert der Marke dieses Autos?",
                code:
                    `let car = {
 year: 2018,
 make: "Audi",
 model: "S4"
}`,
                answers: [
                    "console.log(obj.car(make))",
                    "console.log(car(make))",
                    "console.log(make)",
                    "console.log(car.make)"
                ],
                correctAnswer: "console.log(car.make)"
            }, {
                question: "Wie schieben wir alle keys eines Objekts in ein neues Array namens carProps?",
                code:
                    `let car = {
 year: 2018,
 make: "Audi",
 model: "S4"
}`,
                answers: [
                    "let carProps = car.keys(all)",
                    "let carProps = [Object(car).keys()]",
                    "let carProps = car.Object.keys()",
                    "let carProps = Object.keys(car)"
                ],
                correctAnswer: "let carProps = Object.keys(car)"
            }, {
                question: "Wie nennt man eine Eigenschaft eines Objekts, das eine Funktion ist?",
                code:
                    `let car = {
 year: 2018,
 make: "Audi",
 model: "S4",
 displayName: function(){
  return this.year +
      + " "
      + this.make 
      + " "
      + this.model
 }
}`,
                answers: [
                    "Object function",
                    "Return function",
                    "Function property",
                    "Object method"
                ],
                correctAnswer: "Object method"
            }, {
                question: "Was unterscheidet ein Objekt von einem Array?",
                code: ``,
                answers: [
                    "Objekte können jede beliebige Datenstruktur enthalten, während Arrays dies nicht können",
                    "Arrays sind nur als Speichermedium nützlich, während Objekte Funktionen enthalten können",
                    "Arrays sind auf eine einzige Dimension beschränkt, während Objekte verschachtelt werden können",
                    "Objekte verknüpfen Schlüssel und Werte, während Arrays einfach eine Liste von Daten sind"
                ],
                correctAnswer: "Objekte verknüpfen Schlüssel und Werte, während Arrays einfach eine Liste von Daten sind"
            }, {
                question: "Was würde der folgende Code console.log?",
                code:
                    `let obj = {
 total: 5,
 multiplier: 4,
 multiply: function(){
  return 
   this.total *
   this.multiplier;
 }
}
console.log(obj.multiply()*2);`,
                answers: [
                    "10",
                    "8",
                    "80",
                    "40"
                ],
                correctAnswer: "40"
            }
        ]
    }
};


// Make the quiz. Create a model for our app's state
function makeQuiz() {
    // Creating an object to store the app's state when beginning the quiz
    return {
        // Gathering a random question out of the available questions for each category
        questions: helpers.getRandomQuestions(STORE),
        // Boolean for if the quiz is in progress or not
        midQuiz: false,
        // Array of correct/incorrect answers to use for our progress bar
        progress: {
            progressBar: [],
            incorrectCategories: []
        },
        // Boolean to determine if the end state should display
        completed: false,
        // Monitoring which question we are currently on
        currentQuestion: 0,
        // Keeps track of total correct answers
        correctAnswers: 0,
        // Keeps current selected answer
        currentAnswer: "",
        // Keeps track of % completed
        percCorrect: 0
    }
}

// Apply fadeOut animations and set the stage for DOM text/element changes
function $fade(appState) {

    // This is the completed state of of a quiz
    if (appState.completed) {

        // Fade out elements with a promise to avoid choppy behavior
        $.when($('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(500))
            .done(function () {

                // Display results of the quiz
                $showResults(appState);
                $('.results-wrapper').hide().removeClass('hide');
                $('.question-answer-wrapper, .results-wrapper').fadeIn(500);
            });

        // This is if the app is just starting
    } else if (appState.midQuiz === false) {

        // Set a flag that the app has begun
        appState.midQuiz = true;
        // Fade out elements with a promise to avoid choppy behavior
        $.when($('.question-answer-wrapper, .question-wrapper, .code, .answer-wrapper, .start-quiz, .quit-quiz, .results-wrapper, .progress, .progress-bar').fadeOut(500))
            .done(function () {
                // Remove any progress from a previous quiz (if any);
                helpers.updateProgressBar(appState);
                $('.progress-count').html('1 / 10');
                $('.progress-perc').html('');
                // Kill previous results
                $('.failures').remove();
                // Lots to do... mostly just setting up a new environment for a new quiz
                $updateQuestion(appState);
                $('progress-bar').empty();
                $('progress-fill').html('Progress: <span class="progress-count">1 / 10</span><span class="progress-perc"></span>');
                $('.question-answer-wrapper, .answer-wrapper').removeClass('begin');
                $('.submit-btn, .progress, .progress-bar').removeClass('hide');
                $('.progress, .progress-bar').hide();
                $('.question-answer-wrapper, .question-wrapper, .answer-wrapper, .progress, .progress-bar').fadeIn(500);
                if (!$('.code').hasClass('hide')) { $('.code').fadeIn(500) };
            });

        // This is if the app is in the middle of execution
    } else if (appState.midQuiz) {
        $.when($('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(500))
            .done(function () {
                $updateQuestion(appState);
                $('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeIn(500);
            });
    }
}

// Work in progress...
function $showResults(appState) {
    if (appState.correctAnswers === 10) {
        let endMsg = `You got ${appState.percCorrect}% correct!
I have nothing else to teach you. Move on and prosper!
`;
    } else {
        $('.answer-btn').remove();
        let endMsg = `You got ${appState.percCorrect}% correct!`
        let endFeedback = ``;
        if (appState.progress.incorrectCategories.length === 0) {
            endFeedback = `You aced it! Good job!`;
        } else {
            endFeedback = `You may want to study up on the following categories:`;
        }

        $('.quiz-end-score').html(endMsg);
        let $failList = $('<ul class="failures"></ul>');
        appState.progress.incorrectCategories.map((cat => {
            $failList.append("<li class='category'>" + cat + "</li>");
        }));
        $('.quiz-end-feedback-p').html(endFeedback);
        $('.quiz-end-categories').append($failList);
        $('.results-wrapper').removeClass('hide').css('display', 'flex');
        $('.question-answer-wrapper, .results-wrapper, .quiz-end-feedback, .quiz-end-score, .retry-btn').css('display', 'flex').fadeIn(500);
    }

}

// Update the question, code, answers, buttons in the DOM while we're in a faded out state
function $updateQuestion(appState) {
    $('.answer-btn').remove();

    // Update the question and code text with the current question
    $('.question').html(appState.questions[appState.currentQuestion].question);

    // This is a hack to hide/show the code portion
    // Only 1/3 of the questions contain code so we hide it if they aren't present
    if (appState.questions[appState.currentQuestion].code == ``) {
        $('.code').addClass('hide');
    } else {
        $('.code').removeClass('hide');
        $('.code').html(`<pre>${appState.questions[appState.currentQuestion].code}</pre>`);
    }

    // Change continue back to submit
    $('.continue-btn')
        .val("Submit")
        .removeClass('continue-btn')
        .addClass('submit-btn')
        .prop('disabled', true);

    // Add in available answers for the question
    let $answers = [];

    // Adding the answers to a temporary array
    for (let i = 0; i < appState.questions[appState.currentQuestion].answers.length; i++) {

        // Add current question answers to an array
        let $answer = $('<button class="answer-btn" type="button"></button>');
        $answer.html(appState.questions[appState.currentQuestion].answers[i]);
        $answers.push($answer);
    }

    // Shuffle the answers
    helpers.shuffleAnswers($answers)

    // Push answers to the DOM
    $answers.forEach((answer) => {
        $('.answer-wrapper').prepend(answer);
    });
}

// Simple class and enable/disable DOM selection when answer is selected
function selectAnswer(answer) {
    $('.answer-btn').removeClass('selected');
    answer.addClass('selected');
    $('.submit-btn').prop('disabled', false);
}

// Answer is selected and submitted
// Push a feedback state
function submitAnswer(appState) {

    // This will be returned true or false based on their answer
    let correct;

    // Add styles to the answers to show if their answer was correct or not
    $('.answer-btn').each(function () {
        if ($(this).html() === appState.questions[appState.currentQuestion].correctAnswer) {
            $(this).addClass('pass');
            // If answer is correct and selected...
            if ($(this).hasClass('selected')) {
                correct = "pass";
                appState.correctAnswers++;
                appState.questions[appState.currentQuestion];
            }

            // Handle correct answer if selected answer is incorrect
        } else if ($(this).hasClass('selected')) {
            $(this).addClass('fail dim-answer');
            correct = "fail";
            appState.progress.incorrectCategories.push(appState.questions[appState.currentQuestion].category);

            // Dim the other answers to make the correct one more prevalent
        } else {
            $(this).addClass('dim-answer');
        }
    });

    // Add a progress bar indicator to our appState object
    appState.progress.progressBar.push(`<div class="progress-indicator ${correct}"></div>`);

    // Update our percent correct (parse a float and set it to a fixed percentage)
    appState.percCorrect = parseFloat(appState.correctAnswers / (appState.currentQuestion + 1) * 100).toFixed();

    // Update our current question VS total quiz length
    $('.progress-count').html(`
		${appState.currentQuestion + 1} / ${appState.questions.length}
	`);

    // Update our current correct percentage
    $('.progress-perc').html(`
		 // ${(appState.percCorrect)}% Correct
	`)

    // Change submit back to continue
    $('.submit-btn')
        .val("Continue")
        .removeClass('submit-btn')
        .addClass('continue-btn')

    // Disable selecting answers
    $('.answer-btn').prop("disabled", true);

    // Update our progress-bar DOM
    helpers.updateProgressBar(appState);

    // Continue to next question
    appState.currentQuestion++;

    // Verify if we're done or not
    if (appState.currentQuestion === appState.questions.length) {
        appState.completed = true;
    }

}

// Silly easter egg for saying you don't want to do the quiz
function killQuiz() {
    $('.start-quiz, .quit-quiz').hide();
    let failureMsg = "You didn't grow. You didn't improve. You took a shortcut and gained nothing. You experienced a hollow victory. Nothing was risked and nothing was gained. It's sad you don't know the difference..."
    let msgSplit = failureMsg.split(" ");
    let counter = 0;
    $('.question').empty();
    let startTroll = setInterval(function () {
        $('.question').append(msgSplit[counter] + " ");
        counter++;
        if (counter > msgSplit.length - 1) {
            clearInterval(startTroll);
            $('.start-quiz').text('You can do it! Start Quiz').fadeIn(500);
        }
    }, 250);
}

// These are simple algorithms to modify data that don't need an individual function
let helpers = {
    // Pick a random question from the available ones
    pickRandomQ: function (obj, section) {
        return Math.floor(Math.random() * obj.questions[section].length);
    },
    // Gather a random question from every category
    getRandomQuestions: function (obj) {
        let questions = [];
        let categories = Object.keys(obj.questions);
        categories.forEach((cat) => {
            let randomQ = this.pickRandomQ(obj, cat);
            let question = obj.questions[cat][randomQ];
            question.category = cat;
            questions.push(question);
        });
        return questions;
    },
    // Shuffle the answers so they don't appear in the same order
    shuffleAnswers: function (arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    },
    // Update progress bar DOM element
    updateProgressBar: function (appState) {
        $('.progress-bar').empty();
        appState.progress.progressBar.forEach((progInd => {
            $('.progress-bar').append(progInd);
        }))
    }
}

// Lets start the show
$(function () {

    // Kill any form refresh
    $('.answer-wrapper').on('submit', function (e) {
        e.preventDefault();
    });

    // Storage for quiz app state
    let quizData;

    // Start quiz
    $('.start-quiz, .retry-btn').on('click', function () {
        quizData = makeQuiz();
        $fade(quizData);
    });

    // Select an answer
    $('.question-answer-wrapper').on('click', '.answer-btn', function () {
        selectAnswer($(this));
    })

    // Submit your answer to display feedback and advance question counter
    $('.question-answer-wrapper').on('click', '.submit-btn', function (e) {
        submitAnswer(quizData);
    });

    // Submit your answer to display feedback and advance question counter
    $('.question-answer-wrapper').on('click', '.continue-btn', function () {
        $fade(quizData);
    });

    // Easter egg to chastize the user
    $('.quit-quiz').on('click', function () {
        killQuiz();
    })
})
