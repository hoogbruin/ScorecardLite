function summaryMenuModal() {
    var app = document.getElementById('app')

    // Modal
    var modal = document.createElement('div')
    modal.id = 'menu-modal'

    // Redigera
    var btn = document.createElement('button')
    btn.className = 'btn-modal-menu-item'
    btn.innerText = 'Redigera'
    btn.addEventListener('click', function() {
        holeView(1)
    })
    modal.appendChild(btn)

    // Radera
    var btn = document.createElement('button')
    btn.className = 'btn-modal-menu-item'
    btn.innerText = 'Radera'
    btn.addEventListener('click', function() {
        console.log(scorecard.date)
        if(confirm('Är du säker?')) {
            
            deleteScorecard(scorecard)
            scorecardList()
        }
    })
    modal.appendChild(btn)

    // Mina Scorekort
    var btn = document.createElement('button')
    btn.className = 'btn-modal-menu-item'
    btn.innerText = 'Scorekort'
    btn.addEventListener('click', function() {
        scorecardList()
    })
    modal.appendChild(btn)

    // Avsluta
    var btn = document.createElement('button')
    btn.className = 'btn-modal-menu-item'
    btn.innerText = 'Avsluta'
    btn.addEventListener('click', function() {
        startPage()
    })
    modal.appendChild(btn)

    // Menu
    var btn = document.createElement('button')
    btn.className = 'btn-modal-menu-item'
    btn.innerHTML = '<i class="bi bi-chevron-down" style="font-size:2.5rem"></i>'
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