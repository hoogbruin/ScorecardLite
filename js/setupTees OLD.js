function setupTees() {
    // Skapa grundlayouten
    createSetupLayout()

    // Sätt titeln
    setup_title.innerText = 'Välj Tee'
    
    // Content
    var form = document.createElement('form')
    form.id = 'form_setupTees'

    scorecard.players.forEach(player => {
        var tee_item = document.createElement('div')
        tee_item.className = 'tee_item'

        var player_name = document.createElement('div')
        player_name.innerText = player.fname + " " + player.lname

        var tees = document.createElement('div')
        tees.id = 'tees'

        course.tees.forEach(tee => {
            if(tee.hasOwnProperty(player.gender)) {
                var radio = document.createElement('input')
                radio.type = 'radio'
                radio.id = player.fname + player.lname + tee.name
                radio.name = player.fname + player.lname
                radio.value = tee.name
                radio.required = "true"

                var lbl_tee = document.createElement('label')
                lbl_tee.setAttribute('for', player.fname + player.lname + tee.name)
                lbl_tee.innerText = tee.name

                tees.appendChild(radio)
                tees.appendChild(lbl_tee)

            }
            tee_item.appendChild(player_name)
            tee_item.appendChild(tees)
        })    
        form.appendChild(tee_item)
    })

    setup_content.appendChild(form)

    // Footern

    // Starta knappen
    var btn_start = document.createElement('button')
    btn_start.type = 'submit'
    btn_start.className = 'btn'
    btn_start.id = 'btn_selectTee'
    btn_start.setAttribute('form', 'form_setupTees')
    btn_start.innerText = 'Starta'
    
    form.addEventListener('submit', function (event) {
        event.preventDefault()

        // Iterera genom formuläret
        scorecard.players.forEach(player => {
            // Läs in vald tee
            var selected_tee = document.querySelector("input[name=" + CSS.escape(player.fname + player.lname) + "]:checked")
            player.tee = selected_tee.value
            
            // Hämta tee data från course
            var tee_data = course.tees.find((e) => e.name == selected_tee.value)[player.gender]

            // Beräkna och spara shcp
            player.shcp = Math.round(player.hcp * (tee_data.slope_rating / 113) + (tee_data.course_rating - course.par));
        })

        // Spara 'scorecardä och starta rundan
        saveScorecard(scorecard)
        holeInput(1)
    })

    // Avbryt knappen
    var btn_cancel = document.createElement('button')
    btn_cancel.type = 'button'
    btn_cancel.className = 'btn'
    btn_cancel.id = 'btn_cancel'
    btn_cancel.innerText = 'Avbryt'

    btn_cancel.addEventListener('click', function (event) {
        startPage()
    });

    // Koppla knappar
    footer.appendChild(btn_cancel)
    footer.appendChild(btn_start)
}