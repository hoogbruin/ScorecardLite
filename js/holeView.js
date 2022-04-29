function holeView(hole_number) {
    // Lagra hålobjekt från 'course'
    var hole = course.holes.find(h => h.number == hole_number)

    // Header
    var header = document.createElement('div')
    header.className = 'header'
    header.id = 'hole-header'
    // course_section.id = 'course_section'

    var date = document.createElement('div')
    var course_name = document.createElement('div')
    var par = document.createElement('div')

    date.innerText = new Date(scorecard.date).toLocaleDateString()
    course_name.innerText = course.name
    par.innerText = 'Par ' + course.par

    header.appendChild(date)
    header.appendChild(course_name)
    header.appendChild(par)

    // Title
    var title = document.createElement('div')
    title.className = 'title'
    title.id = 'hole-title'
    // hole_section.id = 'hole_section'

    // Par
    var div = document.createElement('div')

    var par_header = document.createElement('div')
    par_header.innerText = 'Par'
    div.appendChild(par_header)

    var par_value = document.createElement('div')
    par_value.innerText = hole.par
    div.appendChild(par_value)

    title.appendChild(div)

    // Hole
    var div = document.createElement('div')

    var hole_header = document.createElement('div')
    hole_header.innerText = 'Hål'
    div.appendChild(hole_header)

    var hole_value = document.createElement('div')
    hole_value.innerText = hole.number
    div.appendChild(hole_value)

    title.appendChild(div)

    // Index
    var div = document.createElement('div')

    var index_header = document.createElement('div')
    index_header.innerText = 'Index'
    div.appendChild(index_header)

    var index_value = document.createElement('div')
    index_value.innerText = hole.index
    div.appendChild(index_value)

    title.appendChild(div)

    // Content
    var content = document.createElement('form')
    content.className = 'content'
    content.id = 'hole-form'
    // players_section.id = 'players_section'
    
    scorecard.players.forEach(player => {
        var player_box = document.createElement('div')
        player_box.className = 'player_box'

        // Namn, Tee och Hcp
        var div = document.createElement('div')

        var pb_name = document.createElement('div')
        pb_name.id = 'pb-name'
        pb_name.innerText = player.fname + ' ' + player.lname
        div.appendChild(pb_name)

        var pb_tee = document.createElement('div')
        pb_tee.id = 'pb-tee'
        pb_tee.innerText = 'Tee ' + player.tee
        div.appendChild(pb_tee)

        var pb_hcp = document.createElement('div')
        pb_hcp.id = 'pb-hcp'
        pb_hcp.innerText = 'HCP ' + calculateHoleHcp(hole.index, player.shcp)
        div.appendChild(pb_hcp)

        div.addEventListener('click', function(e) {
            cardModal(player)
        })

        player_box.appendChild(div)

        // Slaggolf !!!
        var div = document.createElement('div')

        var pb_scratch_header = document.createElement('div')
        pb_scratch_header.id = 'pb-scratch-header'
        // pb_scratch_header.innerText = 'Slaggolf'
        div.appendChild(pb_scratch_header)

        var pb_scratch_score = document.createElement('div')
        pb_scratch_score.id = 'pb-scratch-score'
        div.appendChild(pb_scratch_score)

        player_box.appendChild(div)

        // Poängbogey
        var div = document.createElement('div')

        var pb_pb_header = document.createElement('div')
        pb_pb_header.id = 'pb-pb-header'
        pb_pb_header.innerText = 'Poängbogey'
        div.appendChild(pb_pb_header)

        var pb_pb_score = document.createElement('div')
        pb_pb_score.id = 'pb-pb-score'
        div.appendChild(pb_pb_score)

        player_box.appendChild(div)

        // Hålpoäng
        var pb_hole_points = document.createElement('div')
        pb_hole_points.id = 'pb-hole-points'
        player_box.appendChild(pb_hole_points)

        // Slaginmatning
        var div = document.createElement('div')

        var pb_input = document.createElement('input')
        pb_input.id = 'pb-input'
        pb_input.setAttribute('type', 'text')
        pb_input.setAttribute('readonly', true)

        updatePlayerBox(player, hole, pb_scratch_score, pb_pb_score, pb_hole_points, pb_input)

        // Event Scoreinput
        pb_input.addEventListener('click', function(e) {
            strokesModal(player, hole, function() {
                updatePlayerBox(player, hole, pb_scratch_score, pb_pb_score, pb_hole_points, pb_input)
            })
        })

        div.appendChild(pb_input)
        player_box.appendChild(div)
        content.appendChild(player_box)    
    })

    // Footer
    var footer = document.createElement('div')
    footer.className = 'footer'
    footer.id = 'hole-footer'
    // footer_section.id = 'footer_section'

    var number_of_holes = Object.keys(course.holes).length

    var btn_previous = document.createElement('button')
    btn_previous.type = 'button'
    btn_previous.className = 'btn'
    // btn_previous.id = 'btn_previous'
    // btn_previous.setAttribute('form', 'players_section')
    btn_previous.innerText = 'Föregående'
    if(hole.number - 1 < 1)
        btn_previous.style.visibility = 'hidden'
    btn_previous.addEventListener('click', function() {
        saveScorecard(scorecard)
        holeView(hole.number - 1)
    })
    
    var btn_menu = document.createElement('button')
    btn_menu.type = 'button'
    btn_menu.className = 'btn'
    // btn_menu.id = 'btn_menu'
    // btn_menu.setAttribute('form', 'form_course');
    btn_menu.innerText = 'Meny'
    btn_menu.addEventListener('click', function() {
        saveScorecard(scorecard)        // Behövs kanske inte här?
        // viewScorecard(hole.number)
    })

    var btn_next = document.createElement('button')
    btn_next.type = 'button'
    btn_next.className = 'btn'
    btn_next.id = 'btn_next'
    // btn_next.setAttribute('form', 'players_section')
    btn_next.innerText= 'Nästa'
    if(hole.number + 1 > number_of_holes) {
        btn_next.innerText= 'Färdig!'
        btn_next.disabled = true
    // btn_next.style.visibility = 'hidden'
    }
    btn_next.addEventListener('click', function() {
        saveScorecard(scorecard)
        holeView(hole.number + 1)
    })

    footer.appendChild(btn_previous)
    footer.appendChild(btn_menu)
    footer.appendChild(btn_next)

    // Koppla samman
    var app = document.getElementById('app')
    app.innerHTML = ''

    app.appendChild(header)
    app.appendChild(title)
    app.appendChild(content)
    app.appendChild(footer)
}

function removeScore(player, hole) {
    var holescore = player.score.find(o => o.hole == hole.number)

    if(holescore !== undefined) {
        var index = player.score.indexOf(holescore)
        console.log(index)
        console.log(player.score[index])
        if(index > -1)
            player.score.splice(index, 1)
    }
}

function updatePlayerBox(player, hole, pb_scratch_score, pb_pb_score, pb_hole_points, pb_input) {   // Skall detta ligga nestlat i holeView()
    // Slaggolf och Poängbogey skall visas oavsett om det finns ett HoleScore objekt för det aktuella hålet
    if(player.total_strokes == 0) {
        // pb_scratch_score.innerText = '-'
        pb_pb_score.innerText = '-'
    } else {
        // pb_scratch_score.innerText = 'X'
        pb_pb_score.innerText = calculateTotalStablefordNet(player)
    }

    // Kolla om det finns ett HoleScore objekt
    var holeScore = player.score.find(o => o.hole == hole.number)

    if(holeScore !== undefined) {
        pb_input.value = holeScore.strokes
        pb_hole_points.innerText =  holeScore.points + 'p'
    } else {
        pb_input.value = ''
        pb_hole_points.innerText =  ''
    }
}

function calculateHoleHcp(index, sHcp) {
    var hcp = Math.trunc(sHcp/18)

    if(index <= sHcp % 18) {
        hcp += 1
    }

    return hcp
}

function calculatePoints(par, holehcp, strokes) {
    var points = par + holehcp - strokes + 2

    if(strokes < 1 || points < 0) {
        points = 0
    }

    return points
}

function calculateTotalStablefordNet(player) {
    var basePoints = player.score.length * 2
    
    if(basePoints == 0)
        return '-'

    var score = player.total_stableford - basePoints

    if(score > 0)
        return '+' + score + 'p'
    else if(score < 0)
        return score + 'p'
    else
        return 'E'
}

function saveInput(player, hole, strokes) {   // Slag på hål, Poäng på hål, Slaggolf total, Stableford total
    // Kolla i player.score om det finns ett objekt för aktuellt hål
    var holescore = player.score.find(o => o.hole == hole.number)

    if(holescore !== undefined) { // Om så antalet slag på hålet
        holescore.strokes = strokes
    } else { // Annars skapa nytt HoleScore objekt
        holescore = new HoleScore(hole.number, strokes)
        player.score.push(holescore)
    }

    // Uppdatera poäng på hål
    var holeHcp = calculateHoleHcp(hole.index, player.shcp)
    holescore.points = calculatePoints(hole.par, holeHcp, strokes)

    recalculateScore(player)
}

function recalculateScore(player) {
    // Uppdatera totala antalet slag och poäng
    player.total_strokes = 0
    player.total_stableford = 0

    player.score.forEach(s => {
        player.total_strokes += parseInt(s.strokes)
        player.total_stableford += parseInt(s.points)
    })
}
