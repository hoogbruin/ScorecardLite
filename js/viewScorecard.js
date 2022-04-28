function viewScorecard(current_hole = 0) {
    // Header
    var header = document.createElement('div')
    header.id = 'scorecard-header'
    header.innerText = 'Scorekort'

    // Content
    var content = document.createElement('div')
    content.id = 'scorecard-content'

    // Cards for each player
    scorecard.players.forEach(player => {

        var card = document.createElement('div')
        card.className = 'card'

        // Card header
        var header = document.createElement('div')
        header.className = 'card-header'
        header.innerText = player.fname + ' ' + player.lname
        card.appendChild(header)

        // OUT scores
        var scoresRow = document.createElement('div')
        scoresRow.className = 'card-row'

        var scoresColumn = document.createElement('div')

        var div = document.createElement('div')
        div.innerText = 'Hål'
        scoresColumn.appendChild(div)

        var div = document.createElement('div')
        div.innerText = 'Index'
        scoresColumn.appendChild(div)

        var div = document.createElement('div')
        div.innerText = 'Par'
        scoresColumn.appendChild(div)

        var div = document.createElement('div')
        div.innerText = 'Slag'
        scoresColumn.appendChild(div)

        var div = document.createElement('div')
        div.innerText = 'Poäng'
        scoresColumn.appendChild(div)

        scoresRow.appendChild(scoresColumn)

        var parCounter = 0
        var strokesCounter = 0
        var pointsCounter = 0

        // Holes
        for(var i = 1; i <= 9; i++) {
            var scoresColumn = document.createElement('div')

            // Hitta course.holes och scorecard.player.score
            var holeInfo = course.holes.find(h => h.number == i)
            var holeScore = player.score.find(s => s.hole == i)

            var div = document.createElement('div')
            div.innerText = i
            scoresColumn.appendChild(div)

            var div = document.createElement('div')
            div.innerText = holeInfo.index
            scoresColumn.appendChild(div)

            var div = document.createElement('div')
            div.innerText = holeInfo.par
            scoresColumn.appendChild(div)

            parCounter += holeInfo.par

            if(holeScore !== undefined) {
                var div = document.createElement('div')
                div.innerText = holeScore.strokes
                scoresColumn.appendChild(div)

                var div = document.createElement('div')
                div.innerText = holeScore.points
                scoresColumn.appendChild(div)

                strokesCounter += parseInt(holeScore.strokes)
                pointsCounter += holeScore.points
            } else {
                var div = document.createElement('div')
                div.innerHTML = '&nbsp;'
                scoresColumn.appendChild(div)

                var div = document.createElement('div')
                div.innerHTML = '&nbsp;'
                scoresColumn.appendChild(div)

                strokesCounter += 0
                pointsCounter += 0
            }

            scoresRow.appendChild(scoresColumn)
        }

        // OUT summary
        var scoresColumn = document.createElement('div')

        var div = document.createElement('div')
        div.innerText = 'UT'
        scoresColumn.appendChild(div)

        var div = document.createElement('div')
        div.innerHTML = '&nbsp;'
        scoresColumn.appendChild(div)

        var div = document.createElement('div')
        div.innerText = parCounter
        scoresColumn.appendChild(div)

        var div = document.createElement('div')
        div.innerText = strokesCounter
        scoresColumn.appendChild(div)

        var div = document.createElement('div')
        div.innerText = pointsCounter
        scoresColumn.appendChild(div)

        scoresRow.appendChild(scoresColumn)
        card.appendChild(scoresRow)

        // IN scores
        var scoresRow = document.createElement('div')
        scoresRow.className = 'card-row'

        var scoresColumn = document.createElement('div')

        var div = document.createElement('div')
        div.innerText = 'Hål'
        scoresColumn.appendChild(div)

        var div = document.createElement('div')
        div.innerText = 'Index'
        scoresColumn.appendChild(div)

        var div = document.createElement('div')
        div.innerText = 'Par'
        scoresColumn.appendChild(div)

        var div = document.createElement('div')
        div.innerText = 'Slag'
        scoresColumn.appendChild(div)

        var div = document.createElement('div')
        div.innerText = 'Poäng'
        scoresColumn.appendChild(div)

        scoresRow.appendChild(scoresColumn)

        var parCounter = 0
        var strokesCounter = 0
        var pointsCounter = 0

        // Holes
        for(var i = 10; i <= 18; i++) {
            var scoresColumn = document.createElement('div')

            // Hitta course.holes och scorecard.player.score
            var holeInfo = course.holes.find(h => h.number == i)
            var holeScore = player.score.find(s => s.hole == i)

            var div = document.createElement('div')
            div.innerText = i
            scoresColumn.appendChild(div)

            var div = document.createElement('div')
            div.innerText = holeInfo.index
            scoresColumn.appendChild(div)

            var div = document.createElement('div')
            div.innerText = holeInfo.par
            scoresColumn.appendChild(div)

            parCounter += holeInfo.par

            if(holeScore !== undefined) {
                var div = document.createElement('div')
                div.innerText = holeScore.strokes
                scoresColumn.appendChild(div)

                var div = document.createElement('div')
                div.innerText = holeScore.points
                scoresColumn.appendChild(div)

                strokesCounter += parseInt(holeScore.strokes)
                pointsCounter += holeScore.points
            } else {
                var div = document.createElement('div')
                div.innerHTML = '&nbsp;'
                scoresColumn.appendChild(div)

                var div = document.createElement('div')
                div.innerHTML = '&nbsp;'
                scoresColumn.appendChild(div)

                strokesCounter += 0
                pointsCounter += 0
            }

            scoresRow.appendChild(scoresColumn)
        }

        // IN summary
        var scoresColumn = document.createElement('div')

        var div = document.createElement('div')
        div.innerText = 'IN'
        scoresColumn.appendChild(div)

        var div = document.createElement('div')
        div.innerHTML = '&nbsp;'
        scoresColumn.appendChild(div)

        var div = document.createElement('div')
        div.innerText = parCounter
        scoresColumn.appendChild(div)

        var div = document.createElement('div')
        div.innerText = strokesCounter
        scoresColumn.appendChild(div)

        var div = document.createElement('div')
        div.innerText = pointsCounter
        scoresColumn.appendChild(div)

        scoresRow.appendChild(scoresColumn)
        card.appendChild(scoresRow)

        // Card summary
        var summary = document.createElement('div')
        summary.className = 'card-summary'
        summary.innerText = 'Summary'

        // Todo
        var div = document.createElement('div')
        div.innerText = 'Brutto Slag, Netto Slag, Tot Poäng, Hcp-resultat, Justerad bruttoscore '
        summary.appendChild(div)



        card.appendChild(summary)
        content.appendChild(card)
    })

    // Footern
    var footer = document.createElement('div')
    footer.id = 'scorecard-footer'

    // Nästa knappen
    // var btn_next = document.createElement('button')
    // btn_next.type = 'submit'
    // btn_next.className = 'btn'
    // btn_next.id = 'btn_setupCourse'
    // btn_next.setAttribute('form', 'form_setupCourse')
    // btn_next.innerText = 'Nästa'

    // form.addEventListener('submit', function (event) {
    //     event.preventDefault()
    //     var selected_course = this.elements.course.value

    //     // Spara vald bana i globala variablen 'course' samt namn i 'scorecard'
    //     course = Courses.find(obj => obj.name == selected_course)
    //     // console.log(course) // Temp
    //     scorecard.course = course.name

    //     setupPlayers()
    // })

    // Tillbaka knappen
    var btn_back = document.createElement('button')
    btn_back.type = 'button'
    btn_back.className = 'btn'
    btn_back.id = 'btn_back'
    btn_back.innerText = 'Tillbaka'

    btn_back.addEventListener('click', function (event) {
        holeInput(current_hole)
    })

    // Koppla knappar
    footer.appendChild(btn_back)
    // footer.appendChild(btn_next)

    // Koppla samman
    var app = document.getElementById('app')        // Behövs denna?
    app.innerHTML = ''
    app.appendChild(header)
    app.appendChild(content)
    app.appendChild(footer)
}