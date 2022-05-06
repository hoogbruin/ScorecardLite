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


    var div = document.createElement('div')
        div.innerText = 'Scorefördelning'
    modal.appendChild(div)

    var bar_chart = document.createElement('canvas')
        bar_chart.id = 'bar-chart'
    modal.appendChild(bar_chart)

    var z = { 'Eagle-': 1, Birdie: 2, Par: 4, Bogey: 3, DBogey: 2, 'TBogey+': 0 }

    var c1 = new Chart(bar_chart, {
        type: 'bar',
        data: {
            datasets: [{
                data: z,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)"
                ],
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            scales: {
                y: {
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    })

    var div = document.createElement('div')
        div.innerText = 'Scoreutveckling'
    modal.appendChild(div)

    var line_chart = document.createElement('canvas')
        line_chart.id = 'line-chart'
    modal.appendChild(bar_chart)

    // Events
    modal.addEventListener('click', function (e) {
        app.removeChild(modal)
    })

    app.appendChild(modal)
}