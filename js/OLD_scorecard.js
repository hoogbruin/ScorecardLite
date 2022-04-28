function showScorecard(source_hole = 1) {

    // Rensa sidan helt
    var app = document.getElementById('app');
    app.innerHTML = "";

    // Skapa Headern
    var header = createHeaderSection('header', 'GolfBuddies');

    // Skapa Sidtitel
    var title = createTitleSection('title');
    title.innerText = 'Scorekort';

    // Skapa Scorecard_content
    var content = createContentSection('scorecard_content');

    // Skapa Footer
    var footer = createFooterSection('footer');

    // Avlsuta-knapp
    var btn_exit = createButton('btn_exit', 'Avsluta');
    btn_exit.addEventListener('click', function() {
        startPage();   // Fixa något bättre sen
    });
    footer.appendChild(btn_exit);

    // Tillbaka-knapp / Ändra-knapp
    if(source_hole == 99) { // Inte snyggt
        var btn = createButton('btn_edit', 'Ändra');
        source_hole = 1;
    } else {
        var btn = createButton('btn_back', 'Tillbaka');
    }
    btn.addEventListener('click', function() {
        showHolePage(source_hole);
    });
    footer.appendChild(btn);

    // Placeholder-knapp        // Fixa något bättre sen                                
    var btn_placeholder = createButton('btn_placeholder');
    btn_placeholder.style.visibility = 'hidden';
    footer.appendChild(btn_placeholder);

    // Koppla till DOM - KANSKE INTE BRA OM MAN BEHÖVER ACCESSA DOMEN I DENNA FUNKTIONEN? TESTA!
    app.appendChild(header);
    app.appendChild(title);
    app.appendChild(content);
    app.appendChild(footer);

    createScorecard(content);
}

function createScorecard(content_element) {
    // var p_count = round.scores.length;
    // console.log(p_count);    
    
    // Element variabler
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    var td = document.createElement('td');
    var tbody = document.createElement('tbody');

    // Hål
    th.innerText = "Hål";
    tr.appendChild(th);

    // Par
    th = document.createElement('th');
    th.innerText = 'Par';
    tr.appendChild(th);

    // Hcp
    th = document.createElement('th');
    th.innerText = 'Hcp';
    tr.appendChild(th);

    // Spelare 1 - 4
    round.scores.forEach(s => {
        th = document.createElement('th');
        th.setAttribute('colspan', '2');
        th.innerText = s.fname.charAt(0) + ' ' + s.lname.charAt(0);
        tr.appendChild(th);
    });

    thead.appendChild(tr);

    // För varje hål på banan
    course.holes.forEach(hole => {
        var tr = document.createElement('tr');

        // Hålnummer
        var td = document.createElement('td');
        td.innerText = hole.id;
        tr.appendChild(td);

        // Hålpar
        var td = document.createElement('td');
        td.innerText = hole.par;
        tr.appendChild(td);
        
        // Hålindex
        var td = document.createElement('td');
        td.innerText = hole.index;
        tr.appendChild(td);

        // För varje spelare        
        round.scores.forEach(score => {
            var td = document.createElement('td');
            // Kontollera om undefined
            if(score.stats[hole.id] && score.stats[hole.id].strokes)
                td.innerText = score.stats[hole.id].strokes;
            tr.appendChild(td);

            var td = document.createElement('td');
            // Kontollera om undefined
            if(score.stats[hole.id] && score.stats[hole.id].points)
                td.innerText = score.stats[hole.id].points;
            tr.appendChild(td);
        });
        
        tbody.appendChild(tr);

        if(hole.id == 9 && course.holes.length == 18) {
            var tr = tableSumRow(score, 'UT', 1, 9);
            tbody.appendChild(tr);
        }
    });

    var tr = tableSumRow(score, 'IN', 10, 18);
    tbody.appendChild(tr);
    // var tr = tableSumRow(score, 'UT', 1, 9);
    // tbody.appendChild(tr);
    var tr = tableSumRow(score, 'TOT', 1, 18);
    tbody.appendChild(tr);

    // Koppla samman tabellen till content

    table.appendChild(thead);
    table.appendChild(tbody);
    content_element.appendChild(table);
}

// Om 18-håls bana och hole.id == 9 så infoga summering
function tableSumRow(score, text, start_hole, end_hole) {
    var tr = document.createElement('tr');

    var td = document.createElement('td');
    td.innerText = text;
    tr.appendChild(td);

    var td = document.createElement('td');
    td.innerText = sumHolesPar(start_hole, end_hole);
    tr.appendChild(td);

    var td = document.createElement('td');
    td.innerText = text;
    tr.appendChild(td);

    // För varje spelare - summera slag och poäng för första 9 hålen
    round.scores.forEach(score => {
        var td = document.createElement('td');
        td.innerText = sumStrokes(score, start_hole, end_hole);
        tr.appendChild(td);

        var td = document.createElement('td');
        td.innerText = sumPoints(score, start_hole, end_hole);
        tr.appendChild(td);
    });

    return tr;
}

function clearApp() {
    var app = document.getElementById('app');
    app.innerHTML = "";
    return app;
}

function createHeaderSection(id, text = "")  {
    var header = document.createElement('div');
    header.id = id;
    
    if(text !== "")
        header.innerText = text;
    
    return header;
}

function createTitleSection(id)  {
    var title = document.createElement('div');
    title.id = id;
    return title;
}

function createContentSection(id)  {
    var content = document.createElement('div');
    content.id = id;
    return content;
}

function createFooterSection(id)  {
    var footer = document.createElement('div');
    footer.id = id;
    return footer;
}

function createButton(id, label = "", type = 'submit', ) {
    var button = document.createElement('button');
    button.id = id;
    button.innerText = label;
    button.type = type;
    return button;
}

function sumHolesPar(start_hole, end_hole) {
    var sum = 0;

    for(i = start_hole; i <= end_hole; i++) {
        sum += parseInt(course.holes.find(h => h.id == i).par);        
    }

    return sum;
}

function sumStrokes(score, start_hole, end_hole) {
    var sum = 0;

    for(i = start_hole; i <= end_hole; i++) {
        if(score.stats[i] && score.stats[i].strokes)
            sum += parseInt(score.stats[i].strokes);        
    }

    return sum;
}

function sumPoints(score, start_hole, end_hole) {
    var sum = 0;

    for(i = start_hole; i <= end_hole; i++) {
        if(score.stats[i] && score.stats[i].points)
            sum += parseInt(score.stats[i].points);        
    }

    return sum;
}


// // Banans namn
// th.colspan = '5';
// th.innerText = round.course;
// tr.appendChild(th);

// // Tee
// th = document.createElement('th');
// tr.colspan = '2';
// tr.innerText = round.scores[0].tee;     // Inte optimalt
// tr.appendChild(th);

// // Datum
// th = document.createElement('th');
// tr.colspan = '2';
// tr.innerText = round.date;
// tr.appendChild(th);

function test() {
    round = dummy;
    course = courses.find(c => c.name == round.course);
    showScorecard();
}