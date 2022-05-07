function homeMenuModal() {
    var app = document.getElementById('app')

    // Modal
    var modal = document.createElement('div')
    modal.id = 'menu-modal'

    // Mina Scorekort
    var btn = document.createElement('button')
    btn.className = 'btn-modal-menu-item'
    btn.innerText = 'Mina Scorekort'
    btn.addEventListener('click', function() {
        scorecardList()
    })
    modal.appendChild(btn)

    // Hantera Spelare
    var btn = document.createElement('button')
    btn.className = 'btn-modal-menu-item'
    btn.innerText = 'Hantera Spelare'
    btn.addEventListener('click', function() {
        userList()
    })
    modal.appendChild(btn)

    // Rensa LocalStorage
    var btn = document.createElement('button')
    btn.className = 'btn-modal-menu-item'
    btn.innerText = 'Töm LocalStorage'
    btn.addEventListener('click', function() {
        if(confirm('Är du säker!?'))
            localStorage.clear()
            
        app.removeChild(modal)
    })
    modal.appendChild(btn)

    // Meny
    var btn = document.createElement('button')
    btn.className = 'btn-modal-menu-item'
    btn.innerHTML = '<i class="bi bi-list" style="font-size:2.5rem"></i>'
    btn.addEventListener('click', function() {
        app.removeChild(modal)
    })
    modal.appendChild(btn)

    // Stäng vid klick utanför menyalternativen
    modal.addEventListener('click', function(e) {
        if(e.target == modal)
            app.removeChild(modal)
    })

    // Koppla samman
    app.appendChild(modal)
}