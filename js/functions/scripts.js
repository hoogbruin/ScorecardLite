// Globala variabler
// var scorecard
// var course
// var tee;
// var participants;
// var scores;
// var round;

function createSetupLayout() {
    var header = document.createElement('div');
    header.id = 'setup_header';
    header.innerText = 'ScorecardLite'

    var title = document.createElement('div');
    title.id = 'setup_title';

    var content = document.createElement('div');
    content.id = 'setup_content';

    var footer = document.createElement('div');
    footer.id = 'footer';

    var app = document.getElementById('app');
    app.innerHTML = ""

    app.appendChild(header);
    app.appendChild(title);
    app.appendChild(content);
    app.appendChild(footer);
}

function getCourse(name) {
    return Courses.find(c => c.name == name)
}

// function calculateHandicaps() {
    // Beräkna shcp och skapa ett Score object för varje spelare och spara i Scores
    
    // round = new Round(Date.parse(new Date()), course.name);

    // participants.forEach(player => {
    //     var shcp = Math.round(player.hcp * (tee.sr / 113) + (tee.cr - course.par));
    //     round.scores.push(new Score(player.fname, player.lname, tee.id, player.hcp, shcp));
    // });


    
    // console.log(round.scores);

    // BÖR JAG ÄVEN SKAPA HELA SCORKORTET FÖR VARJE SPELARW HÄR OCH TA FRAM SHCP PER HÅL???
// }

// function clearSection(section) {
//     document.getElementById(section).innerHTML = "";
// }
function getHoleScore(player, holescore) {
    
}



function addDecimal(spinner) {
    spinner.value = (parseFloat(spinner.value) + 0.1).toFixed(1);
}

function subDecimal(spinner) {
    spinner.value = (parseFloat(spinner.value) - 0.1).toFixed(1);
}
