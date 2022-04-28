function scorecardList() {
    // Header
    var header = document.createElement('div')
    header.className = 'header'
    header.innerText = 'ScorecardLite'

    // Title
    var title = document.createElement('div')
    title.className = 'title'
    title.innerText = 'Lagrade Scorekort'

    // Content
    var content = document.createElement('div')
    content.className = 'content'

    //// Scorecard list
    var scorecards = getScorecards()

    if(scorecards != undefined) {
        scorecards.forEach(scorecard => {
            var scorecard_item = document.createElement('div')
            scorecard_item.className = 'scorecard_item'
            scorecard_item.id = scorecard.date
            
            var div = document.createElement('div')
            div.innerText = new Date(scorecard.date).toLocaleString()
            scorecard_item.appendChild(div)

            var div = document.createElement('div')
            div.innerText = scorecard.course
            scorecard_item.appendChild(div)

            scorecard_item.addEventListener('click', function() {
                // console.log(this)
                var selected_scorecard = getScorecard(this.id)
                alert('Bingo')
                // scorecardView(selected_scorecard)
            })

            content.appendChild(scorecard_item)
        })
    } 

    // Footer
    var footer = document.createElement('div')
    footer.className = 'footer'

    var btn_cancel = document.createElement('button')
    btn_cancel.type = 'button'
    btn_cancel.className = 'btn'
    btn_cancel.id = 'btn_cancel'
    btn_cancel.innerText = 'Avbryt'

    btn_cancel.addEventListener('click', function () {
        startPage()
    })

    footer.appendChild(btn_cancel)

    // Koppla samman
    var app = document.getElementById('app')
    app.innerHTML = ''

    app.appendChild(header)
    app.appendChild(title)
    app.appendChild(content)
    app.appendChild(footer)
}