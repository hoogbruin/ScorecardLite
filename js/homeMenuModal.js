function homeMenuModal() {
    var app = document.getElementById('app')

    // Modal
    var modal = document.createElement('div')
    modal.id = 'menu-modal'

    // Mina Scorekort
    var div = document.createElement('div')
    div.className = 'menu-modal-item'
    div.innerText = 'Mina Scorekort'
    div.addEventListener('click', function() {
        scorecardList()
    })
    modal.appendChild(div)

    // Hantera Spelare
    var div = document.createElement('div')
    div.className = 'menu-modal-item'
    div.innerText = 'Hantera Spelare'
    div.addEventListener('click', function() {
        userList()
    })
    modal.appendChild(div)

    // Meny
    var div = document.createElement('div')
    div.className = 'menu-modal-item'
    div.innerHTML = '<i class="bi bi-list" style="font-size:2.5rem"></i>'
    div.addEventListener('click', function() {
        app.removeChild(modal)
    })
    modal.appendChild(div)

    // Stäng vid klick utanför menyalternativen
    modal.addEventListener('click', function(e) {
        if(e.target == modal)
            app.removeChild(modal)
    })

    // Koppla samman
    app.appendChild(modal)
}