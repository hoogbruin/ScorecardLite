function setupPlayers() {
// Header
    // var header = document.createElement('div')
    // header.className = 'header'
    // header.innerText = 'ScorecardLite'

    // Title
    var title = document.createElement('div')
    title.className = 'title'
    title.innerText = 'Välj Spelare'

    // Content
    var form = document.createElement('form')
    form.className = 'content'
    form.id = 'form-players'

    var Users = getUsers()

    Users.forEach(player => {
        var player_item = document.createElement('div')
        player_item.className = 'player-item'

        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.id = player.id
        checkbox.name = 'player'
        checkbox.value = player.id

        var label = document.createElement('label')
        label.setAttribute('for', player.id)
        label.innerText = player.fname + ' ' + player.lname

        player_item.appendChild(checkbox)
        player_item.appendChild(label)
        form.appendChild(player_item)
    })

    // Footer
    var footer = document.createElement('div')
    footer.className = 'footer'

    var btn_cancel = document.createElement('button')
    btn_cancel.type = 'button'
    btn_cancel.className = 'btn-menu-item'
    btn_cancel.innerHTML = '<i class="bi bi-x"></i>'
    btn_cancel.addEventListener('click', function (event) {
        startPage()
    })

    var btn_user = document.createElement('button')
    btn_user.type = 'button'
    btn_user.className = 'btn-menu-item'
    btn_user.innerHTML = '<i class="bi bi-person-plus"></i>'
    btn_user.addEventListener('click', function (event) {
        editPlayer()
    })







    var btn_next = document.createElement('button')
    btn_next.type = 'submit'
    btn_next.className = 'btn-menu-item'
    btn_next.setAttribute('form', 'form-players')
    btn_next.innerHTML = '<i class="bi bi-check"></i>'
 
    form.addEventListener('submit', function (e) {
        e.preventDefault()

        var selected_count = document.querySelectorAll('input[type="checkbox"]:checked').length

        if(selected_count >= 1 && selected_count <= 4) {
            this.elements.player.forEach(element => {
                if(element.checked) {
                    var p = Users.find(o => o.id == element.value)
                    scorecard.players.push(new Player(p.id, p.fname, p.lname, p.gender, p.hcp))
                }
            })

            setupHandicaps()
        } else {
            alertModal('Observera', 'Välj 1-4 spelare')
        }
    })

    footer.appendChild(btn_cancel)
    footer.appendChild(btn_user)
    footer.appendChild(btn_next)    

    // Koppla samman
    var app = document.getElementById('app')
    app.innerHTML = ''

    // app.appendChild(header)
    app.appendChild(title)
    app.appendChild(form)
    app.appendChild(footer)
}