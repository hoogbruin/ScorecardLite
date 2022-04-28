// Globala varibler
var scorecard
var course

function startPage() {

    // Rensa sidan helt
    var app = document.getElementById('app');
    app.innerHTML = ''

    // Skapa Headern
    var header = document.createElement('div')
    header.id = 'start_header';
    header.innerText = 'ScorecardLite'

    // Skapa Sidtitel
    var title = document.createElement('div');
    title.id = 'start_title';
    title.innerText = 'Mina scorekort';

    // Skapa history_content
    var content = document.createElement('div');
    content.id = 'start_content'

    var scorecards = getScorecards()

    if(scorecards != undefined) {
        scorecards.forEach(s => {
            var cardBox = document.createElement('div')
            cardBox.className = 'cardBox'
            cardBox.id = s.date
            
            var div = document.createElement('div')
            div.innerText = new Date(s.date).toLocaleString()
            cardBox.appendChild(div)

            var div = document.createElement('div')
            div.innerText = s.course
            cardBox.appendChild(div)

            var div = document.createElement('div')
            div.innerText = s.status
            cardBox.appendChild(div)

            cardBox.addEventListener('click', function(e) {
                console.log(this)
                scorecard = getScorecard(this.id)
                course = getCourse(scorecard.course)
                viewScorecard(18)
            })

            content.appendChild(cardBox)
        })
    } 
    // Lista skapade scorekort
    // Läs in scorekort från localstorage
    // var scorecards = loadScorecards()
    
    // if(scorecards !== null) {
    //     alert('Scorecards exists!')
    //     // Se kod nedan
    // }

    // Skapa Footer
    var footer = document.createElement('div');
    footer.id = 'footer';

    // Ny runda-knapp
    var btn_new = document.createElement('button');
    btn_new.className = "btn"
    btn_new.id = 'btn_new'
    btn_new.innerText = 'Nytt scorekort'
    btn_new.type = 'button'
    
    btn_new.addEventListener('click', function() {
        scorecard = new Scorecard(Date.now())
        setupCourse()
    })
    footer.appendChild(btn_new);

    // Koppla samman
    app.appendChild(header);
    app.appendChild(title);
    app.appendChild(content);
    app.appendChild(footer);

    // listRounds(content);
}

// Lista spelade rundor
function listRounds(container) {
    
    var rounds = loadRounds();

    // console.log(rounds);

    if(rounds) {
        var ul = document.createElement('ul');

        for (prop in rounds) {
            //console.log(rounds[prop].course);

            var li = document.createElement('li');    

            var span = document.createElement('span');
            var d = new Date(rounds[prop].date);
            span.innerText = d.getDate() + "/" + (d.getMonth() + 1) + "   " + d.getHours() + ":" + d.getMinutes() + "     ";
            li.appendChild(span);

            var span = document.createElement('span');
            span.innerText =  rounds[prop].course;
            li.appendChild(span);
            
            li.addEventListener('click', function() {
                // Sätt globala variabler
                round =  rounds[prop];
                course = courses.find(c => c.name == round.course);
                tee = course.tees.find(t => t.id ==  round.scores[0].tee);
                showScorecard(99);
            });
            ul.appendChild(li)
        }


        // rounds.forEach(r => {
        //     var li = document.createElement('li');    

        //     var span = document.createElement('span');
        //     span.innerText = r.date;
        //     li.appendChild(span);

        //     var span = document.createElement('span');
        //     span.innerText = r.course;
        //     li.appendChild(span);
            
        //     li.addEventListener('click', function() {
        //         // Sätt globala variabler
        //         round = r;
        //         course = courses.find(c => c.name == round.course);
        //         tee = course.tees.find(t => t.id == r.scores[0].tee);
        //         showScorecard(99);
        //     });
        //     ul.appendChild(li)
        // });

        container.appendChild(ul);
    }
}

// function roundLoader(round) {

    
//     // Ta vald round och hämt information från första spelare/score om tee och skapa objectet



//     // Ta vald round och hämta information om vilken bana som spelats.


//     showHolePage(99);
// }



window.onload = startPage()