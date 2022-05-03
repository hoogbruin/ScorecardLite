function alertModal(title, text) {
    var app = document.getElementById('app')

    // Modal
    var modal = document.createElement('div')
    modal.id = 'alert-modal'

    // Window
    var modalWindow = document.createElement('div')
    modalWindow.id = 'alert-modal-window'

    // Title
    var modalTitle = document.createElement('div')
    modalTitle.id = 'alert-modal-title'
    modalTitle.innerText = title

    // Content
    var modalText = document.createElement('div')
    modalText.id = 'alert-modal-text'
    modalText.innerText = text

    // Buttons
    var modalButtons = document.createElement('div')
    modalButtons.id = 'alert-modal-buttons'

    var button = document.createElement('button')
    button.innerText = 'OK'
    button.addEventListener('click', function() {
        app.removeChild(modal)
    })
    modalButtons.appendChild(button)

    modal.addEventListener('click', function(e) {
        if(e.target == modal)
            app.removeChild(modal)
    })

    // Koppla samman
    modalWindow.appendChild(modalTitle)
    modalWindow.appendChild(modalText)
    modalWindow.appendChild(modalButtons)
    modal.appendChild(modalWindow)
    app.appendChild(modal)
}