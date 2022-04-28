function setupHandicaps() {
    // Skapa grundlayouten
    createSetupLayout()

    // Headern
    setup_title.innerText = 'Ange handicap';

    // Content
    var form = document.createElement('form');
    form.id = 'form_setupHcp';

    scorecard.players.forEach(player => {
        var hcp_item = document.createElement('div');
        hcp_item.className = "hcp_item";

        var label = document.createElement('label');
        label.setAttribute('for', player.fname + player.lname)
        label.innerText = player.fname + " " + player.lname;

        var spinner = document.createElement('div');
        spinner.className = 'hcp_spinner';

        var input = document.createElement('input');
        input.type = 'text';
        input.id = player.fname + player.lname;
        input.className = 'input_hcp';
        input.value = player.hcp;
        input.required = true;

        var add = document.createElement('span');
        add.innerText = "＋";
        add.onclick = function() {
            input.value = (parseFloat(input.value) + 0.1).toFixed(1);
        };

        var sub = document.createElement('span');
        sub.innerText = "−";
        sub.onclick = function() {
            input.value = (parseFloat(input.value) - 0.1).toFixed(1);
        };

        spinner.appendChild(sub);
        spinner.appendChild(input);
        spinner.appendChild(add);

        hcp_item.appendChild(label);
        hcp_item.appendChild(spinner);
        form.appendChild(hcp_item);
    });

    setup_content.appendChild(form);

    // Footern
    // Nästa knappen
    var btn_next = document.createElement('button');
    btn_next.type = 'submit';
    btn_next.className = 'btn'
    btn_next.id = 'btn_setupHcp';
    btn_next.setAttribute('form', 'form_setupHcp');
    btn_next.innerText = 'Nästa';

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        scorecard.players.forEach(player => {
            player.hcp = this.elements[player.fname + player.lname].value
        });

        updatePlayersHcp(scorecard.players)
        setupTees()
    });

    // Avbryt knappen
    var btn_cancel = document.createElement('button');
    btn_cancel.type = 'button';
    btn_cancel.className = 'btn'
    btn_cancel.id = 'btn_cancel';
    btn_cancel.innerText = 'Avbryt';

    btn_cancel.addEventListener('click', function (event) {
        startPage()
    });

    // Koppla knappar
    footer.appendChild(btn_cancel);
    footer.appendChild(btn_next);
    
}