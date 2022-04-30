function holeMenuModal() {
    var app = document.getElementById('app')

    // Modal
    var modal = document.createElement('div')
    modal.id = 'menu-modal'

    // Item
    var div = document.createElement('div')
    div.className = 'menu-modal-item'
    div.innerText = 'Avsluta Rundan'
    div.addEventListener('click', function() {
        summaryView()
    })
    modal.appendChild(div)

    // Item
    // var div = document.createElement('div')
    // div.className = 'menu-modal-item'
    // div.innerText = 'Hantera Spelare'
    // div.addEventListener('click', function() {
    //     userList()
    // })
    // modal.appendChild(div)

    // Menu button
    var div = document.createElement('div')
    div.className = 'menu-modal-item'
    div.innerHTML = '<i class="bi bi-list" style="font-size:2.5rem"></i>'
    div.addEventListener('click', function() {
        app.removeChild(modal)
    })
    modal.appendChild(div)

    modal.addEventListener('click', function(e) {
        if(e.target == modal)
            app.removeChild(modal)
    })

    // Koppla samman
    app.appendChild(modal)
}