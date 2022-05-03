function strokesModal(player, hole, callback) {
    var app = document.getElementById('app')

    // Modal
    var modal = document.createElement('div')
    modal.id = 'strokes-modal'

    // Window
    var modalWindow = document.createElement('div')
    modalWindow.id = 'strokes-modal-window'

    // Title
    var modalTitle = document.createElement('div')
    modalTitle.id = 'strokes-modal-title'
    modalTitle.innerText = player.fname + ' ' + player.lname

    // Numpad
    var modalNumpad = document.createElement('div')
    modalNumpad.id = 'strokes-modal-numpad'

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
    modalActions.id = 'strokes-modal-actions'

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

function strokesModalInputAction() {
}


    // window.addEventListener('click', function(e) {
    //     if (e.target == modal) {
    //         app.removeChild(modal)
    //     }
    // })

    // window.onclick = function(e) {
    //     if (e.target == modal) {
    //         // ta bort modal från DOM
    //         app.removeChild(modal)
    //         // modal.style.display = 'none'
    //     }
    // } 


    // Bygg upp html

    // <div id="modal" style="display:none">
    //     <div id="modal_box">
        //     <div id="modal_title">Nils-Jakob Olsson</div>
        //     <div id="modal_numpad">
        //         <div>   
        //             <div>1</div>
        //             <div>2</div>
        //             <div>3</div>
        //         </div>
        //         <div> 
        //             <div>4</div>
        //             <div>5</div>
        //             <div>6</div>
        //         </div>
        //         <div> 
        //             <div>7</div>
        //             <div>8</div>
        //             <div>9</div>
        //         </div>
        //         <div> 
        //             <div>-</div>
        //         </div>
        //     </div>    
//          </div>
    // </div>



// function getUserInput(input_strokes, score, hole_number) {

//     console.log(input_strokes);
//     console.log(score);

//     var modal = document.createElement('div');
//     modal.id = 'modal';
//     var numpad = document.createElement('div');
//     numpad.id = 'numpad';

//     var r = document.createElement('div');
//     var b = document.createElement('div');
//     b.onclick = eventButtonClick;
//     var s = document.createElement('span');
//     s.innerText = 1;
//     b.appendChild(s);
//     r.appendChild(b);
//     var b = document.createElement('div');
//     b.onclick = eventButtonClick;
//     var s = document.createElement('span');
//     s.innerText = 2;
//     b.appendChild(s);
//     r.appendChild(b);
//     var b = document.createElement('div');
//     b.onclick = eventButtonClick;
//     var s = document.createElement('span');
//     s.innerText = 3;
//     b.appendChild(s);
//     r.appendChild(b);
//     numpad.appendChild(r);
    
//     var r = document.createElement('div');
//     var b = document.createElement('div');
//     b.onclick = eventButtonClick;
//     var s = document.createElement('span');
//     s.innerText = 4;
//     b.appendChild(s);
//     r.appendChild(b);
//     var b = document.createElement('div');
//     b.onclick = eventButtonClick;
//     var s = document.createElement('span');
//     s.innerText = 5;
//     b.appendChild(s);
//     r.appendChild(b);
//     var b = document.createElement('div');
//     b.onclick = eventButtonClick;
//     var s = document.createElement('span');
//     s.innerText = 6;
//     b.appendChild(s);
//     r.appendChild(b);
//     numpad.appendChild(r);
    
//     var r = document.createElement('div');
//     var b = document.createElement('div');
//     b.onclick = eventButtonClick;
//     var s = document.createElement('span');
//     s.innerText = 7;
//     b.appendChild(s);
//     r.appendChild(b);
//     var b = document.createElement('div');
//     b.onclick = eventButtonClick;
//     var s = document.createElement('span');
//     s.innerText = 8;
//     b.appendChild(s);
//     r.appendChild(b);
//     var b = document.createElement('div');
//     b.onclick = eventButtonClick;
//     var s = document.createElement('span');
//     s.innerText = 9;
//     b.appendChild(s);
//     r.appendChild(b);
//     numpad.appendChild(r);

//     var r = document.createElement('div');

//     var b = document.createElement('div');
//     var manual_input = document.createElement('input');
//     manual_input.onchange = eventInputChange;
//     manual_input.id = "manual_input";
//     manual_input.type = "number";
//     manual_input.min = "0";
//     manual_input.max = "20";
//     manual_input.step = "1";
//     b.appendChild(manual_input);
//     r.appendChild(b);

//     var b = document.createElement('div');
//     b.onclick = eventGiveupInput;
//     var s = document.createElement('span');
//     s.innerText = 'Strecka';
//     b.appendChild(s);
//     r.appendChild(b);

//     var b = document.createElement('div');
//     b.onclick = eventCancelInput;
//     var s = document.createElement('span');
//     s.innerText = 'Tillbaka';
//     b.appendChild(s);
//     r.appendChild(b);
//     numpad.appendChild(r);

//     modal.appendChild(numpad);
//     document.getElementById('app').appendChild(modal);

//     // Nestlade functioner - Undersök för/nackdelar
//     function eventButtonClick() {
//         input_strokes.value = this.innerText;
//         updateScore();
//         document.getElementById('app').removeChild(document.getElementById('modal'));
        
//     }

//     function eventInputChange() {
//         input_strokes.value = this.value;
//         updateScore();
//         document.getElementById('app').removeChild(document.getElementById('modal'));
        
//     }

//     function eventGiveupInput() {
//         input_strokes.value = '-';
//         document.getElementById('app').removeChild(document.getElementById('modal'));
//     }


//     function eventCancelInput() {
//         document.getElementById('app').removeChild(document.getElementById('modal'));

//     }
//     function updateScore() {
//         score.stats[hole_number] = {"strokes" : input_strokes.value, "points" : null};
//     }
    
// }

