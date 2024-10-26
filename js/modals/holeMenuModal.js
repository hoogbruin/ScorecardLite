function holeMenuModal() {
    var app = document.getElementById('app')

    // Modal
    var modal = document.createElement('div')
    modal.id = 'menu-modal'

    // Avsluta rundan
    var btn = document.createElement('button')
    btn.className = 'btn-modal-menu-item'
    btn.innerText = 'Avsluta'
    btn.addEventListener('click', function() {
        saveScorecard(scorecard)
        summaryPage()
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