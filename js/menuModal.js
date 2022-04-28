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
    modalWindow.appendChild(div)

    var div = document.createElement('div')
    div.className = 'menu-modal-item'
    div.innerText = 'Rensa LocalStorage'
    modalWindow.appendChild(div)

    // Koppla samman
    modal.appendChild(modalWindow)
    app.appendChild(modal)

    // Events
    // modalNumpad.addEventListener('click', function(e) {
    //     var strokes = e.target.innerText
 
    //     strokes = strokes > (hole.par + 5) ? hole.par + 5 : strokes 

    //     saveInput(player, hole, strokes)
    //     callback()

    //     app.removeChild(modal)
    // })

    // modalActions.addEventListener('click', function(e) {
    //     var action = e.target.innerText

    //     if(action == 'Strecka') {
    //         var strokes = hole.par + 5

    //         saveInput(player, hole, strokes)
    //         callback()
    //     } else if(action == 'Rensa') {
    //         removeScore(player, hole)
    //         recalculateScore(player)
    //         callback()
    //     }

    //     app.removeChild(modal)
    // })
}