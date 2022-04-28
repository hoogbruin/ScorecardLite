function setupPlayers() {
    // Skapa grundlayouten
    createSetupLayout()

    // Headern
    setup_title.innerText = 'Välj Spelare'

    // Content
    var form = document.createElement('form')
    form.id = 'form_setupPlayers'

    var Users = getUsers()

    Users.forEach(player => {
        var player_item = document.createElement('div')
        player_item.className = "player_item"

        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.id = player.fname + player.lname
        checkbox.name = 'player'
        checkbox.value = player.fname + " " + player.lname;

        var label = document.createElement('label');
        label.setAttribute('for', player.fname + player.lname)
        label.innerText = player.fname + " " + player.lname;

        player_item.appendChild(checkbox);
        player_item.appendChild(label);
        form.appendChild(player_item);
    })

    setup_content.appendChild(form)

    // Footern
    // Nästa knappen
    var btn_next = document.createElement('button')
    btn_next.type = 'submit'
    btn_next.className = 'btn'
    btn_next.id = 'btn_setupPlayers'
    btn_next.setAttribute('form', 'form_setupPlayers')
    btn_next.innerText = 'Nästa'
 
    form.addEventListener('submit', function (event) {
        event.preventDefault()

        var selected_count = document.querySelectorAll('input[type="checkbox"]:checked').length

        if(selected_count >= 1 && selected_count <= 4) {
            this.elements.player.forEach(element => {
                if(element.checked) {
                    var p = Users.find(obj => (obj.fname + " " + obj.lname) == element.value)
                    scorecard.players.push(new Player(p.id, p.fname, p.lname, p.gender, p.hcp));
                }
            });

            setupHandicaps()
        } else {
            alert('Välj 1-4 spelare')
        }
    })

    // Avbryt knappen
    var btn_cancel = document.createElement('button');
    btn_cancel.type = 'button';
    btn_cancel.className = 'btn'
    btn_cancel.id = 'btn_cancel';
    btn_cancel.innerText = 'Avbryt';

    btn_cancel.addEventListener('click', function (event) {
        startPage()
    })

    // Koppla knappar
    footer.appendChild(btn_cancel)
    footer.appendChild(btn_next)
}