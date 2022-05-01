function setupHandicaps() {
    // // Header
    // var header = document.createElement('div')
    // header.className = 'header'
    // header.innerText = 'ScorecardLite'

    // Title
    var title = document.createElement('div')
    title.className = 'title'
    title.innerText = 'Justera Handicap'

    // Content
    var form = document.createElement('form')
    form.className = 'content'
    form.id = 'form-handicap'

    scorecard.players.forEach(player => {
        var handicap_item = document.createElement('div')
        handicap_item.className = 'handicap-item'

        var label = document.createElement('label')
        label.setAttribute('for', player.id)
        label.innerText = player.fname + ' ' + player.lname

        var spinner = document.createElement('div')
        spinner.className = 'handicap-spinner'

        var input = document.createElement('input')
        input.type = 'text'
        input.id = player.id
        input.className = 'handicap-input'
        input.value = player.hcp
        input.required = true
        input.readOnly = true

        var add = document.createElement('div')
        add.innerText = '＋'
        add.onclick = function() {
            input.value = (parseFloat(input.value) + 0.1).toFixed(1)
        }

        var subtract = document.createElement('div')
        subtract.innerText = '-'
        subtract.onclick = function() {
            input.value = (parseFloat(input.value) - 0.1).toFixed(1)
        }

        spinner.appendChild(subtract)
        spinner.appendChild(input)
        spinner.appendChild(add)

        handicap_item.appendChild(label)
        handicap_item.appendChild(spinner)
        form.appendChild(handicap_item)
    })

    // Footer
    var footer = document.createElement('div')
    footer.className = 'footer'

    var btn_cancel = document.createElement('button')
    btn_cancel.type = 'button'
    btn_cancel.className = 'btn-menu-item'
    btn_cancel.innerHTML = '<i class="bi bi-x"></i>'
    btn_cancel.addEventListener('click', function () {
        startPage()
    })

    var btn_next = document.createElement('button')
    btn_next.type = 'submit'
    btn_next.className = 'btn-menu-item'
    btn_next.setAttribute('form', 'form-handicap')
    btn_next.innerHTML = '<i class="bi bi-check"></i>'
    form.addEventListener('submit', function (e) {
        e.preventDefault()

        scorecard.players.forEach(player => {
            player.hcp = this.elements[player.id].value // this = form-taggen
        })

        updatePlayersHcp(scorecard.players) // Skicka varje spelare i föregående iteration istället kanske?
        setupTees()
    })

    footer.appendChild(btn_cancel)
    footer.appendChild(btn_next)

    // Koppla samman
    var app = document.getElementById('app')
    app.innerHTML = ''

    // app.appendChild(header)
    app.appendChild(title)
    app.appendChild(form)
    app.appendChild(footer)
}