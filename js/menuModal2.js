function menuModal2() {
    var app = document.getElementById('app')

    // Modal
    var modal = document.createElement('div')
    modal.id = 'menu-modal'

    // Window
    // var modalWindow = document.createElement('div')
    // modalWindow.id = 'menu-modal-window'

    // Title
    // var modalTitle = document.createElement('div')
    // modalTitle.id = 'menu-modal-title'
    // modalTitle.innerText = Meny

    // var div = document.createElement('div')
    // div.className = 'menu-modal-item'
    // div.innerText = 'Meny'
    // modal.appendChild(div)

    var div = document.createElement('div')
    div.className = 'menu-modal-item'
    div.innerText = 'Lagrade Scorekort'
    div.addEventListener('click', function() {
        scorecardList()
    })
    modal.appendChild(div)

    var div = document.createElement('div')
    div.className = 'menu-modal-item'
    div.innerText = 'Hantera Spelare'
    div.addEventListener('click', function() {
        userList()
    })
    modal.appendChild(div)

    var div = document.createElement('div')
    div.className = 'menu-modal-item'
    div.innerText = 'Rensa LocalStorage'
    modal.appendChild(div)

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
    // modal.appendChild(modalWindow)
    app.appendChild(modal)
}