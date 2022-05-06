function scorecardModal(player) {
    var app = document.getElementById('app')

    // Modal
    var modal = document.createElement('div')
    modal.id = 'modal-card-modal'

    // Modal header
    var header = document.createElement('div')
    header.id = 'modal-card-header'
    header.innerText = player.fname + ' ' + player.lname
    modal.appendChild(header)

    // Card
    var card = document.createElement('div')
    card.id = 'modal-card'

    for(var x = 0; x <= 9; x += 9) {
        var row = document.createElement('div')
        row.className = 'modal-card-row'

        var col = document.createElement('div')

        var div = document.createElement('div')
        div.innerText = 'Hål'
        col.appendChild(div)

        var div = document.createElement('div')
        div.innerText = 'Index'
        col.appendChild(div)

        var div = document.createElement('div')
        div.innerText = 'Par'
        col.appendChild(div)

        var div = document.createElement('div')
        div.innerText = 'Slag'
        col.appendChild(div)

        var div = document.createElement('div')
        div.innerText = 'Poäng'
        col.appendChild(div)

        row.appendChild(col)

        var parCounter = 0
        var strokesCounter = 0
        var pointsCounter = 0

        for (var i = 1; i <= 9; i++) {
            var col = document.createElement('div')

            // Hitta course.holes och scorecard.player.score
            var holeInfo = course.holes.find(h => h.number == (i + x))
            var holeScore = player.score.find(s => s.hole == (i + x))

            var div = document.createElement('div')
            div.innerText = (i + x)
            col.appendChild(div)

            var div = document.createElement('div')
            div.innerText = holeInfo.index
            col.appendChild(div)

            var div = document.createElement('div')
            div.innerText = holeInfo.par
            col.appendChild(div)

            parCounter += holeInfo.par

            if (holeScore !== undefined) {
                var div = document.createElement('div')
                    if(holeScore.strokes - holeInfo.par < 0) {
                        if(holeScore.strokes - holeInfo.par == -1) {
                            div.className = 'birdie'
                        } else {
                            div.className = 'eagle'
                        }
                    } else if(holeScore.strokes - holeInfo.par > 0) {
                        if(holeScore.strokes - holeInfo.par == 1) {
                            div.className = 'bogey'
                        } else if(holeScore.strokes - holeInfo.par == 2) {
                            div.className = 'double-bogey'
                        } else {
                            div.className = 'trippel-bogey'
                        }
                    }

                    div.innerText = holeScore.strokes
                col.appendChild(div)

                var div = document.createElement('div')
                    div.innerText = holeScore.points == 0 ? '-' : holeScore.points
                col.appendChild(div)

                strokesCounter += parseInt(holeScore.strokes)
                pointsCounter += holeScore.points
            } else {
                var div = document.createElement('div')
                div.innerHTML = '&nbsp;'
                col.appendChild(div)

                var div = document.createElement('div')
                div.innerHTML = '&nbsp;'
                col.appendChild(div)

                strokesCounter += 0
                pointsCounter += 0
            }

            row.appendChild(col)
        }

        var col = document.createElement('div')

        var div = document.createElement('div')
        div.innerText = 'UT'
        col.appendChild(div)

        var div = document.createElement('div')
        div.innerHTML = '&nbsp;'
        col.appendChild(div)

        var div = document.createElement('div')
        div.innerText = parCounter
        col.appendChild(div)

        var div = document.createElement('div')
        div.innerText = strokesCounter
        col.appendChild(div)

        var div = document.createElement('div')
        div.innerText = pointsCounter
        col.appendChild(div)

        row.appendChild(col)
        card.appendChild(row)
    }

    // TOT Summary
    var summary = document.createElement('div')
    summary.id = 'modal-card-summary'

    var div = document.createElement('div')
    div.innerText = player.total_strokes + ' slag' 
    summary.appendChild(div)

    var div = document.createElement('div')
    div.innerText = player.total_stableford + ' poäng'
    summary.appendChild(div)

    card.appendChild(summary)

    modal.appendChild(card)

    // // Todo
    // var div = document.createElement('div')
    // div.innerText = 'Brutto Slag, Netto Slag, Tot Poäng, Hcp-resultat, Justerad bruttoscore '
    // summary.appendChild(div)

    app.appendChild(modal)

    // Events
    modal.addEventListener('click', function (e) {
        app.removeChild(modal)
    })
}