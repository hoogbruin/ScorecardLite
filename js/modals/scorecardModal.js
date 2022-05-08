function scorecardModal(player) {
    var app = document.getElementById('app')

    // Modal
    var modal = document.createElement('div')
    modal.id = 'modal-card-modal'

    // Modal header
    var header = document.createElement('div')
    header.className = 'modal-card-header'
    header.innerText = player.fname + ' ' + player.lname
    modal.appendChild(header)

    // Card
    var card = document.createElement('div')
    card.id = 'modal-card'

    var score_dist = {
        'Eagle-': 0,
        Birdie: 0,
        Par: 0,
        Bogey: 0,
        DB: 0,
        'TB+': 0
    }

    for (var x = 0; x <= 9; x += 9) {
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
                if (holeScore.strokes - holeInfo.par < 0) {
                    if (holeScore.strokes - holeInfo.par == -1) {
                        div.className = 'birdie'
                        score_dist.Birdie += 1
                    } else {
                        div.className = 'eagle'
                        score_dist['Eagle-'] += 1
                    }
                } else if (holeScore.strokes - holeInfo.par > 0) {
                    if (holeScore.strokes - holeInfo.par == 1) {
                        div.className = 'bogey'
                        score_dist.Bogey += 1
                    } else if (holeScore.strokes - holeInfo.par == 2) {
                        div.className = 'double-bogey'
                        score_dist.DB += 1
                    } else {
                        div.className = 'trippel-bogey'
                        score_dist['TB+'] += 1
                    }
                } else {
                    score_dist.Par += 1
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

    // var div = document.createElement('div')
    // div.className = 'paragraph-heading'
    // div.innerText = 'Scorefördelning'
    // modal.appendChild(div)

    var bar_chart = document.createElement('canvas')
    bar_chart.id = 'bar-chart'
    modal.appendChild(bar_chart)

    var score_dist_chart = new Chart(bar_chart, {
        type: 'bar',
        plugins: [ChartDataLabels],
        data: {
            labels: Object.keys(score_dist),
            datasets: [{
                data: Object.values(score_dist),
                backgroundColor: [
                    "#0b5c38",
                    "#50bd61",
                    "#555555",
                    "#03b7f5",
                    "#01688c",
                    "#003446"
                ]
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                },
                datalabels: {
                    align: 'end',
                    anchor: 'start',
                    labels: {
                        value: {
                            color: '#eee'
                        }
                    },
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
            },
            scales: {
                y: {
                    grid: {
                        drawBorder: false,
                        borderDash: [1, 1],
                        drawTicks: false
                    },
                    ticks: {
                        display: false,
                        stepSize: 1
                    }
                },
                x: {
                    grid: {
                        borderColor: '#555',
                        display: false,
                    },
                    ticks: {
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                }
            }
        }
    })

    // Events
    modal.addEventListener('click', function (e) {
        app.removeChild(modal)
    })

    app.appendChild(modal)
}