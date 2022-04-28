// function showHolePage(hole_number = 1) {

//     // Rensa sidan helt
//     var app = document.getElementById('app');
//     app.innerHTML = "";

//     // Skapa Headern
//     var header = createHeaderSection('header', 'GolfBuddies');

//     // Skapa Bansektion
//     var section_course = createTitleSection('section_course');

//     var par_info = document.createElement('div');
//     var par_heading = document.createElement('span');
//     par_heading.innerText = 'Par';
//     var par_value = document.createElement('span');
//     par_value.innerText = course.par;
//     par_info.appendChild(par_heading);
//     par_info.appendChild(par_value);

//     var course_name = document.createElement('p');
//     course_name.innerHTML = course.name;
    
//     var tee_info = document.createElement('div');
//     var tee_heading = document.createElement('span');
//     tee_heading.innerText = 'Tee';
//     var tee_value = document.createElement('span');
//     tee_value.innerText = tee.id;
//     tee_info.appendChild(tee_heading);
//     tee_info.appendChild(tee_value);

//     section_course.appendChild(par_info);
//     section_course.appendChild(course_name);
//     section_course.appendChild(tee_info);

//     // Skapa Contetsektion
//     var content = createContentSection('hole_content')

//     // Skapa Footern
//     var footer = createFooterSection('footer');

//     // Koppla samman
//     app.appendChild(header);
//     app.appendChild(section_course);
//     app.appendChild(content);
//     app.appendChild(footer);

//     showHole(hole_number);
// }

// course           Skapa vid laddning
// tee              Skapa vid laddning
// round            Skapa såklart
// participants

function showHole(hole_number) {
 
    // Baninformation - Titel / Section Courseinfo - Prova: Byt id/class på befintliga sektioner
    // var section_course = document.getElementById('section_course');
    // section_course.innerHTML = "";

    // var par_info = document.createElement('div');
    // var par_heading = document.createElement('span');
    // par_heading.innerText = 'Par';
    // var par_value = document.createElement('span');
    // par_value.innerText = course.par;
    // par_info.appendChild(par_heading);
    // par_info.appendChild(par_value);

    // var course_name = document.createElement('p');
    // course_name.innerHTML = course.name;
    
    // var tee_info = document.createElement('div');
    // var tee_heading = document.createElement('span');
    // tee_heading.innerText = 'Tee';
    // var tee_value = document.createElement('span');
    // tee_value.innerText = tee.id;
    // tee_info.appendChild(tee_heading);
    // tee_info.appendChild(tee_value);

    // section_course.appendChild(par_info);
    // section_course.appendChild(course_name);
    // section_course.appendChild(tee_info);

    // // Content
    // var content = document.getElementById('hole_content');
    // content.innerHTML = "";

    // // Hålinformation
    // var holeInfo = document.createElement('div');
    // holeInfo.id = 'holeInfo';

    // var holePar = document.createElement('div');
    // var holePar_heading = document.createElement('span');
    // holePar_heading.className = "holeInfo_header";
    // holePar_heading.innerText = 'Par';
    // var holePar_value = document.createElement('span');
    // holePar_value.innerText = course.holes.find(o => o.id == hole_number).par; //////////////////// .find(obj => obj.id == selected_tee)
    // holePar.appendChild(holePar_heading);
    // holePar.appendChild(holePar_value);

    // var holeNumber = document.createElement('p');
    // holeNumber.innerHTML = hole_number;
    
    // var holeIndex = document.createElement('div');
    // var holeindex_heading = document.createElement('span');

    // holeindex_heading.className = 'holeInfo_header';
    // holeindex_heading.innerText = 'Index';
    // var holeIndex_value = document.createElement('span');
    // holeIndex_value.innerText = course.holes.find(o => o.id == hole_number).index;
    // holeIndex.appendChild(holeindex_heading);
    // holeIndex.appendChild(holeIndex_value);

    // holeInfo.appendChild(holePar);
    // holeInfo.appendChild(holeNumber);
    // holeInfo.appendChild(holeIndex);

    // content.appendChild(holeInfo);

    //====================================================== Fortsätt här!

    // Lista spelare
    var form = document.createElement('form');
    form.id = 'form_hole_results';
    
    round.scores.forEach(score => {
        var player_item = document.createElement('div');
        player_item.className = 'player_widget';

        var span_name = document.createElement('span');
        span_name.innerText = score.fname;

        var span_roundScore = document.createElement('span');
        span_roundScore.innerText = 'xxx';
        span_roundScore.style.display = 'none'; ////////////////////////////////

        var span_roundPoints = document.createElement('span');
        span_roundPoints.innerText = 'yyy';
        span_roundPoints.style.display = 'none'; ////////////////////////////////




        var text_strokes = document.createElement('input');
        text_strokes.setAttribute("type", "text");
        text_strokes.setAttribute("id", score.fname + " " + score.lname);
        text_strokes.setAttribute("class", 'input_strokes');
        text_strokes.setAttribute("readonly", true);

        
        
        
        
        // if(hole_number in score.holes) {
        // if(score.holes.some(e => e.id == hole_number)) {
        if(hole_number in score.stats) {
            text_strokes.setAttribute("value", score.stats[hole_number].strokes);
        } else {
            text_strokes.value = '-';
        }

        // text_strokes.addEventListener('click', getUserInput);

        text_strokes.addEventListener('click', function() {
            getUserInput(this, score, hole_number);
        });

        


        var span_holeHcp = document.createElement('span');
        span_holeHcp.innerText = 'Hcp ' + calculateHoleHcp(course.holes.find(o => o.id == hole_number).index, score.shcp);

        var span_holePoints = document.createElement('span');
        span_holePoints.innerText = 'zzz';
        span_holePoints.style.display = 'none'; ////////////////////////////////
        




        // var p_hcp = document.createElement('p');
        // var holeHcp = calculateHoleHcp(course.holes[hole_number].index, score.shcp);
        // p_hcp.innerText = "Hcp: " + holeHcp;

        
            // var pb = calculatePoints(course.holes[hole_number].par, holeHcp, this.value);
            // p_pb.innerHTML = 'PB: ' + pb;
 
 
            


        // scores_form.appendChild(label);
        // scores_form.appendChild(input);
        // scores_form.appendChild(p_hcp);
        // scores_form.appendChild(p_pb);
        // scores_form.appendChild(hr);
        player_item.appendChild(span_name);
        player_item.appendChild(span_roundScore);
        player_item.appendChild(span_roundPoints);
        player_item.appendChild(text_strokes);
        player_item.appendChild(span_holeHcp);
        player_item.appendChild(span_holePoints);

        form.appendChild(player_item);
    });
        
        
    //     // .addEventListener('input', function() {
    //     //     document.getElementById('pb_' + score.player).innerHTML = calculatePoints(par, hcp, strokes);
    //     // });

    // });



    content.appendChild(form);

    // Fyll footern
    var footer = document.getElementById('footer');
    footer.innerHTML = "";

    number_of_holes = Object.keys(course.holes).length;

    var btn_previous = document.createElement('button');
    btn_previous.type = 'submit';
    btn_previous.id = 'btn_previous';
    // btn_previous.setAttribute('form', 'form_hole_results');
    btn_previous.innerText= "🡄";
    btn_previous.addEventListener('click', function() {
        saveRound(round);
        showHole(hole_number - 1)
    });
    footer.appendChild(btn_previous);
    
    if(hole_number - 1 < 1)
        btn_previous.style.visibility = 'hidden';

    var btn_summary = document.createElement('button');
    btn_summary.type = 'submit';
    btn_summary.id = 'btn_summary';
    // btn_summary.setAttribute('form', 'form_course');
    btn_summary.innerText = 'Scorekort';

    btn_summary.addEventListener('click', function() {
        saveRound(round);
        showScorecard(hole_number);
    });
    
    footer.appendChild(btn_summary);

    
    var btn_next = document.createElement('button');
    btn_next.type = 'submit';
    btn_next.id = 'btn_next';
    // btn_previous.setAttribute('form', 'form_hole_results');
    btn_next.innerText= "🡆";
    btn_next.addEventListener('click', function() {
        saveRound(round);
        showHole(hole_number + 1)
    });
    footer.appendChild(btn_next);
    if(hole_number + 1 > number_of_holes)
        btn_next.style.visibility = 'hidden';



   
}

// function updatePoints(player, par, hcp) {
//     console.log(player);
//     console.log(par);
//     console.log(hcp);
//     console.log(event);

//     document.getElementById('pb_' + player).innerHTML = calculatePoints(par, hcp, this.value);
// }


// function calculateHoleHcp(index, shcp) {
//     var hcp = Math.trunc(shcp/18)

//     if(index <= shcp % 18) {
//         hcp += 1
//     }

//     return hcp
// }

// function calculatePoints(par, holeHcp, strokes) {
//     var points = par + holeHcp - strokes + 2

//     if(strokes < 1 || points < 0) {
//         points = 0
//     }

//     return points
// }