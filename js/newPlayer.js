function newPlayer() {
    // Header
    var header = document.createElement('div')
    header.className = 'header'
    header.innerText = 'ScorecardLite'

    // Title
    var title = document.createElement('div')
    title.className = 'title'
    title.innerText = 'Skapa Spelare'

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
    input.required = true
    form.appendChild(input)
    
    // Footer
    var footer = document.createElement('div')
    footer.className = 'footer'

    var btn_cancel = document.createElement('button')
    btn_cancel.type = 'button'
    btn_cancel.className = 'btn'
    btn_cancel.innerText = 'Avbryt'
    btn_cancel.addEventListener('click', function (event) {
        setupPlayers()
    })

    var btn_save = document.createElement('button')
    btn_save.type = 'submit'
    btn_save.className = 'btn'
    btn_save.setAttribute('form', 'form-new-player')
    btn_save.innerText = 'Spara'
 
    form.addEventListener('submit', function (e) {
        e.preventDefault()

        var fname = form.elements['fname'].value
        var lname = form.elements['lname'].value
        var gender = form.elements['gender'].value
        var hcp = form.elements['hcp'].value

        createUser(fname, lname, gender, hcp)
        setupPlayers()
    })

    footer.appendChild(btn_cancel)
    footer.appendChild(btn_save)

    // Koppla samman
    var app = document.getElementById('app')
    app.innerHTML = ''

    app.appendChild(header)
    app.appendChild(title)
    app.appendChild(form)
    app.appendChild(footer)
}