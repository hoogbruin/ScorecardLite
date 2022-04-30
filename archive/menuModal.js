function menuModal() {
    var app = document.getElementById('app')

    // Modal
    var modal = document.createElement('div')
    modal.id = 'menu-modal'

    // Window
    var modalWindow = document.createElement('div')
    modalWindow.id = 'menu-modal-window'

    // Title
    // var modalTitle = document.createElement('div')
    // modalTitle.id = 'menu-modal-title'
    // modalTitle.innerText = Meny

    var div = document.createElement('div')
    div.className = 'menu-modal-item'
    div.innerText = 'Meny'
    modalWindow.appendChild(div)

    var div = document.createElement('div')
    div.className = 'menu-modal-item'
    div.innerText = 'Lagrade Scorekort'
    div.addEventListener('click', function() {
        scorecardList()
    })
    modalWindow.appendChild(div)

    var div = document.createElement('div')
    div.className = 'menu-modal-item'
    div.innerText = 'Hantera Spelare'
    div.addEventListener('click', function() {
        userList()
    })
    modalWindow.appendChild(div)

    var div = document.createElement('div')
    div.className = 'menu-modal-item'
    div.innerText = 'Rensa LocalStorage'
    modalWindow.appendChild(div)

    modal.addEventListener('click', function(e) {
        // console.log(e.target)
        // console.log(modal)
        if(e.target == modal)
            app.removeChild(modal)
    })

    // Koppla samman
    modal.appendChild(modalWindow)
    app.appendChild(modal)
}