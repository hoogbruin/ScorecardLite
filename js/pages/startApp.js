// Globala varibler
var scorecard
var course

function startPage() {
    // Headern
    var header = document.createElement('div')
    header.className = 'header'
    header.id = 'home-header'
    header.innerText = 'ScorecardLite'

    // Content
    var content = document.createElement('div')
    content.className = 'content'
    content.id = 'home-content'

    // New scorecard button
    var btn_new = document.createElement('button')
    btn_new.type = 'button'
    btn_new.id = 'btn-new-scorecard'
    btn_new.innerHTML = '<i class="bi bi-plus-circle"></i>'
    btn_new.addEventListener('click', function() {
        scorecard = new Scorecard(Date.now())
        setupCourse()
    })
    content.appendChild(btn_new)

    // Footer
    var footer = document.createElement('div')
    footer.className = 'footer single-btn'
    footer.id = 'home-footer'

    var btn_menu = document.createElement('button')
    btn_menu.type = 'button'
    btn_menu.className = 'btn-menu-item'
    btn_menu.innerHTML = '<i class="bi bi-list"></i>'
    btn_menu.addEventListener('click', function() {
        homeMenuModal()
    })
    footer.appendChild(btn_menu)

    // Koppla samman
    var app = document.getElementById('app')
    app.innerHTML = ''

    app.appendChild(header)
    app.appendChild(content)
    app.appendChild(footer)
}

window.onload = startPage()