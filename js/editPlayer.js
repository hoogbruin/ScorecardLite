function editPlayer(player = null) {
    var isNew = (player == null)

    // Header
    var header = document.createElement('div')
    header.className = 'header'
    header.innerText = 'ScorecardLite'

    // Title
    var title = document.createElement('div')
    title.className = 'title'
    title.innerText = isNew ? 'Skapa Spelare' : 'Redigera Spelare'

    // Content
    var form = document.createElement('form')
    form.className = 'content'
    form.id = 'form-new-player'

    var label = document.createElement('label')
    label.setAttribute('for', 'fname')
    label.innerText = 'Förnamn'
    form.appendChild(label)
    var input = document.createElement('input')
    input.type = 'text'
    input.id = 'fname'
    input.name = 'fname'
    input.required = true
    input.value = isNew ? '' : player.fname
    form.appendChild(input)

    var label = document.createElement('label')
    label.setAttribute('for', 'lname')
    label.innerText = 'Efternamn'
    form.appendChild(label)
    var input = document.createElement('input')
    input.type = 'text'
    input.id = 'lname'
    input.name = 'lname'
    input.required = true
    input.value = isNew ? '' : player.lname
    form.appendChild(input)

    var label = document.createElement('label')
    label.innerText = 'Kön'
    form.appendChild(label)

    var label = document.createElement('label')
    label.setAttribute('for', 'male')
    label.innerText = 'Herr'
    form.appendChild(label)
    var radio = document.createElement('input')
    radio.type = 'radio'
    radio.id = 'male'
    radio.name = 'gender'
    radio.value = 'male'
    radio.required = true
    if(!isNew)
        radio.checked = (player.gender) == 'male' ? true : false
    form.appendChild(radio)

    var label = document.createElement('label')
    label.setAttribute('for', 'female')
    label.innerText = 'Dam'
    form.appendChild(label)
    var radio = document.createElement('input')
    radio.type = 'radio'
    radio.id = 'female'
    radio.name = 'gender'
    radio.value = 'female'
    radio.required = true
    if(!isNew)
        radio.checked = (player.gender) == 'female' ? true : false
    form.appendChild(radio)

    var label = document.createElement('label')
    label.setAttribute('for', 'hcp')
    label.innerText = 'Handicap'
    form.appendChild(label)
    var input = document.createElement('input')
    input.type = 'number'
    input.id = 'hcp'
    input.name = 'hcp'
    input.min = -4
    input.max = 36
    input.step = 0.1
    input.required = 
    input.value = isNew ? '' : player.hcp
    form.appendChild(input)
    
    // Footer
    var footer = document.createElement('div')
    footer.className = 'footer'

    if(!isNew) {
        var btn_delete = document.createElement('button')
        btn_delete.type = 'button'
        btn_delete.className = 'btn-menu-item'
        btn_delete.innerHTML = '<i class="bi bi-trash3"></i>'
        btn_delete.addEventListener('click', function () {
            if(confirm('Är du säker?')) {
                deleteUser(player)
                userList()
            }
        })
        footer.appendChild(btn_delete)
    }

    var btn_cancel = document.createElement('button')
    btn_cancel.type = 'button'
    btn_cancel.className = 'btn-menu-item'
    btn_cancel.innerHTML = '<i class="bi bi-x"></i>'
    btn_cancel.addEventListener('click', function (event) {
        isNew ? setupPlayers() : userList()
    })
    footer.appendChild(btn_cancel)

    var btn_save = document.createElement('button')
    btn_save.type = 'submit'
    btn_save.className = 'btn-menu-item'
    btn_save.setAttribute('form', 'form-new-player')
    btn_save.innerHTML = '<i class="bi bi-save"></i>'
    form.addEventListener('submit', function (e) {
        e.preventDefault()

        var fname = form.elements['fname'].value
        var lname = form.elements['lname'].value
        var gender = form.elements['gender'].value
        var hcp = form.elements['hcp'].value

        if(isNew) {
            createUser(fname, lname, gender, hcp)
            setupPlayers()
        } else {
            updateUser(player.id, fname, lname, gender, hcp)
            userList()
        }
    })
    footer.appendChild(btn_save)

    // Koppla samman
    var app = document.getElementById('app')
    app.innerHTML = ''

    app.appendChild(header)
    app.appendChild(title)
    app.appendChild(form)
    app.appendChild(footer)
}