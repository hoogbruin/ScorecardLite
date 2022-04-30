// Globala varibler
var scorecard
var course

function startPage() {
    // Headern
    var header = document.createElement('div')
    header.className = 'header'
    header.id = 'home-header'
    header.innerText = 'Scorekortet'

    // Hero
    // var hero = document.createElement('div')
    // hero.id = 'home-hero'
    // // hero.innerText = 'fddsf'

    // Title
    var title = document.createElement('div')
    title.className = 'title'
    // title.id = 'start_title'
    title.innerText = 'Senaste Scorekorten'

    // Content
    var content = document.createElement('div')
    content.className = 'content'
    content.id = 'home-content'

    //// Scorecard list
    var scorecards = getScorecards()

    if(scorecards != undefined) {
        scorecards.forEach(scorecard => {
            var scorecard_item = document.createElement('div')
            scorecard_item.className = 'scorecard_item'
            scorecard_item.id = scorecard.date
            
            var div = document.createElement('div')
            div.innerText = new Date(scorecard.date).toLocaleDateString()
            scorecard_item.appendChild(div)

            var div = document.createElement('div')
            div.innerText = scorecard.course
            scorecard_item.appendChild(div)

            scorecard_item.addEventListener('click', function() {
                // console.log(this)
                var selected_scorecard = getScorecard(this.id)
                summaryView()
                // scorecardView(selected_scorecard)
            })

            content.appendChild(scorecard_item)
        })
    } 

    // Footer
    var footer = document.createElement('div')
    footer.className = 'footer'
    // footer.id = 'footer'

    var btn_menu = document.createElement('button')
    btn_menu.type = 'button'
    btn_menu.className = "btn"
    // btn_menu.id = 'btn_menu'
    btn_menu.innerText = 'Meny'
    btn_menu.addEventListener('click', function() {
        // menuModal()
        menuModal2()
    })
    footer.appendChild(btn_menu)

    var btn_new = document.createElement('button')
    btn_new.type = 'button'
    btn_new.className = 'btn'
    // btn_new.id = 'btn_new'
    btn_new.innerText = 'Nytt scorekort'
    btn_new.addEventListener('click', function() {
        scorecard = new Scorecard(Date.now())
        setupCourse()
    })
    footer.appendChild(btn_new)

    // Koppla samman
    var app = document.getElementById('app')
    app.innerHTML = ''

    app.appendChild(header)
    // app.appendChild(hero)
    app.appendChild(title)
    app.appendChild(content)
    app.appendChild(footer)
}

window.onload = startPage()