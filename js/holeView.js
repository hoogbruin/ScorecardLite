function holeView(hole_number) {
    // Lagra hålobjekt från 'course'
    var hole = course.holes.find(h => h.number == hole_number)

    // Header
    var header = document.createElement('div')
    header.className = 'header'
    header.id = 'hole-header'
    // course_section.id = 'course_section'

    var course_name = document.createElement('div')
    var par = document.createElement('div')

    course_name.innerText = course.name
    par.innerText = 'Par ' + course.par

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
    div.innerText = hole.number

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
        player_box.className = 'player-box'

        var p_b_header = document.createElement('div')
        p_b_header.className = 'p-b-header'
        p_b_header.innerText = player.fname + ' ' + player.lname
        player_box.appendChild(p_b_header)

        var p_b_content = document.createElement('div')
        p_b_content.className = 'p-b-content'

        // SHCP, Slag - Div 1
        var div1 = document.createElement('div')

        var p_b_shcp = document.createElement('div')
        p_b_shcp.className = 'p-b-tee'
        p_b_shcp.innerText = 'SHCP ' + player.shcp
        div1.appendChild(p_b_shcp)

        var hcp = calculateHoleHcp(hole.index, player.shcp)

        var p_b_hcp = document.createElement('div')
        p_b_hcp.className = 'p-b-hcp'
        p_b_hcp.innerText = 'Slag ' + (hcp == 0 ? '-' : hcp)
        div1.appendChild(p_b_hcp)
        div1.addEventListener('click', function(e) {
            cardModal(player)
        })
        p_b_content.appendChild(div1)

        // Slaginmatning - Div 2
        var div2 = document.createElement('div')

        var p_b_input = document.createElement('input')
        p_b_input.className = 'p-b-input'
        p_b_input.setAttribute('type', 'text')
        p_b_input.setAttribute('readonly', true)
        div2.appendChild(p_b_input)
        p_b_content.appendChild(div2)

        // Scratch, Stableford och hålpoäng - Div 3
        var div3 = document.createElement('div')

        // var p_b_scratch = document.createElement('div')     // Ännu ej beräknad
        // p_b_scratch.id = 'p-b-scratch'
        // div3.appendChild(p_b_scratch)

        var p_b_stableford = document.createElement('div')
        p_b_stableford.className = 'p-b-stableford'
        div3.appendChild(p_b_stableford)

        var p_b_points = document.createElement('div')
        p_b_points.className = 'p-b-points'
        div3.appendChild(p_b_points)

        p_b_content.appendChild(div3)
        player_box.appendChild(p_b_content)

        updatePlayerBox(player, hole, p_b_stableford, p_b_points, p_b_input)          //p_b_scratch

        // Event Scoreinput
        p_b_input.addEventListener('click', function(e) {
            strokesModal(player, hole, function() {
                updatePlayerBox(player, hole, p_b_stableford, p_b_points, p_b_input)      //p_b_scratch
            })
        })

        
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

function updatePlayerBox(player, hole, p_b_stableford, p_b_points, p_b_input) {   // Skall detta ligga nestlat i holeView() p_b_scratch
    // Slaggolf och Poängbogey skall visas oavsett om det finns ett HoleScore objekt för det aktuella hålet
    if(player.total_strokes == 0) {
        // pb_scratch_score.innerText = '-'
        p_b_stableford.innerText = '-'
    } else {
        // pb_scratch_score.innerText = 'X'
        p_b_stableford.innerText = 'PB ' + calculateTotalStablefordNet(player)
    }

    // Kolla om det finns ett HoleScore objekt
    var holeScore = player.score.find(o => o.hole == hole.number)

    if(holeScore !== undefined) {
        p_b_input.value = holeScore.strokes
        p_b_points.innerText = 'Hål ' + holeScore.points + 'p'
    } else {
        p_b_input.value = ''
        p_b_points.innerText =  'Hål -'
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
