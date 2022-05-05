function scorecardList() {
    // Header
    var header = document.createElement('div')
    header.className = 'header'
    header.innerText = 'Mina Scorekort'

    // Content
    var content = document.createElement('div')
    content.className = 'content'

    //// Scorecard list
    var scorecards = getScorecards()

    if(scorecards != undefined) {
        var length = scorecards.length

        for(var i = length - 1; i >= 0; i--) {
            var scorecard_item = document.createElement('div')
            scorecard_item.className = 'scorecard_item'
            scorecard_item.id = scorecards[i].date
            
            var div = document.createElement('div')
            div.innerText = scorecards[i].course_name
            scorecard_item.appendChild(div)

            var div = document.createElement('div')
            div.innerText = new Date(scorecards[i].date).toLocaleDateString()
            scorecard_item.appendChild(div)

            scorecard_item.addEventListener('click', function() {
                scorecard = getScorecard(this.id)
                course = Courses.find(c => c.id == scorecard.course_id)
                summaryPage()
            })

            content.appendChild(scorecard_item)
        }
    } else {
        // Meddeleande om niga rundor, centrerat vettivalt och horisontellt

    }

    // Footer
    var footer = document.createElement('div')
    footer.className = 'footer single-btn'

    var btn_cancel = document.createElement('button')
    btn_cancel.type = 'button'
    btn_cancel.className = 'btn-menu-item'
    btn_cancel.id = 'btn_cancel'
    btn_cancel.innerHTML = '<i class="bi bi-x"></i>'
    btn_cancel.addEventListener('click', function () {
        startPage()
    })
    footer.appendChild(btn_cancel)

    // Koppla samman
    var app = document.getElementById('app')
    app.innerHTML = ''

    app.appendChild(header)
    app.appendChild(content)
    app.appendChild(footer)
}