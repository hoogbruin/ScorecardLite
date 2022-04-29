function setupTees() {
    // Header
    var header = document.createElement('div')
    header.className = 'header'
    header.innerText = 'ScorecardLite'

    // Title
    var title = document.createElement('div')
    title.className = 'title'
    title.innerText = 'Välj Tee'

    // Content
    var form = document.createElement('form')
    form.className = 'content'
    form.id = 'form-tee'
    
    scorecard.players.forEach(player => {
        var tee_item = document.createElement('div')
        // tee_item.className = 'tee_item'
        tee_item.className = 'tee-item'

        var player_name = document.createElement('div')
        player_name.innerText = player.fname + " " + player.lname

        var tee_list = document.createElement('div')
        // tees.id = 'tees'
        tee_list.className = 'tee-list'

        course.tees.forEach(tee => {
            if(tee.hasOwnProperty(player.gender)) {
                var radio = document.createElement('input')
                radio.type = 'radio'
                radio.id = player.id + tee.name
                radio.name = player.id
                radio.value = tee.name
                radio.required = true

                var label = document.createElement('label')
                label.setAttribute('for', player.id + tee.name)
                label.innerText = tee.name

                var div = document.createElement('div')
                div.appendChild(radio)
                div.appendChild(label)
                tee_list.appendChild(div)

            }
            tee_item.appendChild(player_name)
            tee_item.appendChild(tee_list)
        })    
        form.appendChild(tee_item)
    })

    // Footer
    var footer = document.createElement('div')
    footer.className = 'footer'

    var btn_cancel = document.createElement('button')
    btn_cancel.type = 'button'
    btn_cancel.className = 'btn'
    // btn_cancel.id = 'btn_cancel'
    btn_cancel.innerText = 'Avbryt'
    btn_cancel.addEventListener('click', function () {
        startPage()
    })

    var btn_start = document.createElement('button')
    btn_start.type = 'submit'
    btn_start.className = 'btn'
    // btn_start.id = 'btn_tee'
    // btn_start.setAttribute('form', 'form_setupTees')
    btn_start.setAttribute('form', 'form-tee')
    btn_start.innerText = 'Slå ut!'

    form.addEventListener('submit', function (e) {
        e.preventDefault()

        // Iterera genom formuläret
        scorecard.players.forEach(player => {
            // var selected_tee = document.querySelector("input[name=" + CSS.escape(player.fname + player.lname) + "]:checked")
            var selected_tee = document.querySelector('input[name=" + player.id + "]:checked')
            player.tee = selected_tee.value
            
            // Hämta tee data från course
            var tee_data = course.tees.find(t => t.name == selected_tee.value)[player.gender]

            // Beräkna och spara shcp
            player.shcp = Math.round(player.hcp * (tee_data.slope_rating / 113) + (tee_data.course_rating - course.par))
        })

        saveScorecard(scorecard)
        holeInput(1)
    })

    footer.appendChild(btn_cancel)
    footer.appendChild(btn_start)

    // Koppla samman
    var app = document.getElementById('app')
    app.innerHTML = ''

    app.appendChild(header)
    app.appendChild(title)
    app.appendChild(form)
    app.appendChild(footer)
}