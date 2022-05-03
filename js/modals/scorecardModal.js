function scorecardModal(player) {
    var app = document.getElementById('app')

    // Modal
    var modal = document.createElement('div')
    modal.id = 'modal-card'

    // Window
    // var modalWindow = document.createElement('div')
    // modalWindow.id = 'modal-card-window'

    // // Title
    // var modalTitle = document.createElement('div')
    // modalTitle.id = 'modal-card-title'
    // modalTitle.innerText = player.fname + ' ' + player.lname

    // // Content
    // var content = document.createElement('div')
    // content.id = 'modal-card-content'

    // Card
    var card = document.createElement('div')
    card.id = 'modal-card-window'

    // Card header
    var header = document.createElement('div')
    header.className = 'modal-card-header'
    header.innerText = player.fname + ' ' + player.lname
    card.appendChild(header)

    // OUT scores
    var scoresRow = document.createElement('div')
    scoresRow.className = 'modal-card-row'

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
    for (var i = 1; i <= 9; i++) {
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

        if (holeScore !== undefined) {
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
    scoresRow.className = 'modal-card-row'

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
    for (var i = 10; i <= 18; i++) {
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

        if (holeScore !== undefined) {
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

    // // Card summary
    // var summary = document.createElement('div')
    // summary.className = 'card-summary'
    // summary.innerText = 'Summary'

    // // Todo
    // var div = document.createElement('div')
    // div.innerText = 'Brutto Slag, Netto Slag, Tot Poäng, Hcp-resultat, Justerad bruttoscore '
    // summary.appendChild(div)



    // card.appendChild(summary)
    modal.appendChild(card)
    app.appendChild(modal)






    // var row = document.createElement('div')
    // var button = document.createElement('div')
    // button.innerText = '1'
    // row.appendChild(button)
    // var button = document.createElement('div')
    // button.innerText = '2'
    // row.appendChild(button)
    // var button = document.createElement('div')
    // button.innerText = '3'
    // row.appendChild(button)
    // content.appendChild(row)

    // var row = document.createElement('div')
    // var button = document.createElement('div')
    // button.innerText = '4'
    // row.appendChild(button)
    // var button = document.createElement('div')
    // button.innerText = '5'
    // row.appendChild(button)
    // var button = document.createElement('div')
    // button.innerText = '6'
    // row.appendChild(button)
    // content.appendChild(row)

    // var row = document.createElement('div')
    // var button = document.createElement('div')
    // button.innerText = '7'
    // row.appendChild(button)
    // var button = document.createElement('div')
    // button.innerText = '8'
    // row.appendChild(button)
    // var button = document.createElement('div')
    // button.innerText = '9'
    // row.appendChild(button)
    // content.appendChild(row)

    // // Actions
    // var modalActions = document.createElement('div')
    // modalActions.id = 'modal-card-actions'

    // var button = document.createElement('div')
    // button.innerText = 'Rensa'
    // modalActions.appendChild(button)
    // var button = document.createElement('div')
    // button.innerText = 'Strecka'
    // modalActions.appendChild(button)
    // var button = document.createElement('div')
    // button.innerText = 'Avbryt'
    // modalActions.appendChild(button)

    // Koppla samman
    // modalWindow.appendChild(modalTitle)
    // modalWindow.appendChild(content)
    // modalWindow.appendChild(modalActions)
    // modal.appendChild(modalWindow)
    

    // Events
    modal.addEventListener('click', function (e) {
        // var strokes = e.target.innerText

        // strokes = strokes > (hole.par + 5) ? hole.par + 5 : strokes 

        // saveInput(player, hole, strokes)
        // callback()

        app.removeChild(modal)
    })

    // modalActions.addEventListener('click', function(e) {
    //     var action = e.target.innerText

    //     if(action == 'Strecka') {
    //         var strokes = hole.par + 5

    //         saveInput(player, hole, strokes)
    //         callback()
    //     } else if(action == 'Rensa') {
    //         removeScore(player, hole)
    //         recalculateScore(player)
    //         callback()
    //     }

    //     app.removeChild(modal)
    // })
}