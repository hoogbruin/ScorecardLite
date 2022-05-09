function holeSelectModal() {
    var app = document.getElementById('app')

    // Modal
    var modal = document.createElement('div')
    modal.id = 'hole-select-modal'

    // Window
    var modalWindow = document.createElement('div')
    modalWindow.id = 'hole-select-modal-window'

    // Title
    var modalTitle = document.createElement('div')
    modalTitle.id = 'hole-select-modal-title'
    modalTitle.innerText = 'Välj Hål'

    // Numpad
    var modalNumpad = document.createElement('div')
    modalNumpad.id = 'hole-select-modal-numpad'

    // Kolla antal hål för aktiv bana

    // Iterera



    var row = document.createElement('div')
    var button = document.createElement('div')
    button.innerText = '1'
    row.appendChild(button)
    var button = document.createElement('div')
    button.innerText = '2'
    row.appendChild(button)
    var button = document.createElement('div')
    button.innerText = '3'
    row.appendChild(button)
    modalNumpad.appendChild(row)
    
    var row = document.createElement('div')
    var button = document.createElement('div')
    button.innerText = '4'
    row.appendChild(button)
    var button = document.createElement('div')
    button.innerText = '5'
    row.appendChild(button)
    var button = document.createElement('div')
    button.innerText = '6'
    row.appendChild(button)
    modalNumpad.appendChild(row)
    
    var row = document.createElement('div')
    var button = document.createElement('div')
    button.innerText = '7'
    row.appendChild(button)
    var button = document.createElement('div')
    button.innerText = '8'
    row.appendChild(button)
    var button = document.createElement('div')
    button.innerText = '9'
    row.appendChild(button)
    modalNumpad.appendChild(row)

    // Actions
    var modalActions = document.createElement('div')
    modalActions.id = 'hole-select-modal-actions'

    var button = document.createElement('div')
    button.innerText = 'Rensa'
    modalActions.appendChild(button)
    var button = document.createElement('div')
    button.innerText = 'Strecka'
    modalActions.appendChild(button)
    var button = document.createElement('div')
    button.innerText = 'Avbryt'
    modalActions.appendChild(button)

    // Koppla samman
    modalWindow.appendChild(modalTitle)
    modalWindow.appendChild(modalNumpad)
    modalWindow.appendChild(modalActions)
    modal.appendChild(modalWindow)
    app.appendChild(modal)

    // Events
    modalNumpad.addEventListener('click', function(e) {
        var strokes = e.target.innerText
 
        strokes = strokes > (hole.par + 5) ? hole.par + 5 : strokes 

        saveInput(player, hole, strokes)
        callback()

        app.removeChild(modal)
    })

    modalActions.addEventListener('click', function(e) {
        var action = e.target.innerText

        if(action == 'Strecka') {
            var strokes = hole.par + 5

            saveInput(player, hole, strokes)
            callback()
        } else if(action == 'Rensa') {
            removeScore(player, hole)
            recalculateScore(player)
            callback()
        }

        app.removeChild(modal)
    })
}