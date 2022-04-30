function User(id) {
    this.id = id
    this.fname
    this.lname
    this.gender
    this.hcp
}

function Scorecard(date) {
    this.date = date
    this.status = 'open'
    this.course     //coursename NOT entire course eobject
    this.players = []
}

function Player(id, fname, lname, gender, hcp) {
    this.id = id
    this.fname = fname
    this.lname = lname
    this.gender = gender
    this.tee
    this.hcp = hcp
    this.shcp
    this.total_strokes = 0
    this.total_stableford = 0
    this.score = []
}

function HoleScore(hole, strokes) {
    this.hole = hole
    this.strokes = strokes
    this.points
}

// function Round(date, course) {
//     this.date = date;
//     this.course = course;
//     this.scores = [];
// }

// var round = {
//     "date"      : "20201501",       // Hitta lämpligt format
//     "course"    : "Österlens GK - Lilla Vik",
//     "scores"    : [
//         {
//             "fname"     : "Nils-Jakob",
//             "lname"     : "Olsson",
//             "tee"       : 58,
//             "hcp"       : 10.3,
//             "shcp"      : 10,
//             "stats"     : {     // Hålnummer som egenskap eller del av objektet i arrayn?
//                 "1"     : {
//                     "strokes"   : 4,
//                     "points"    : 2,
//                     "par_putt"  : true,
//                     "fir"       : true,
//                     "gir"       : false,
//                     "putts"     : 2,
//                     "sandy_save": null,
//                     "up_and_down": null,
//                     "penalty"   : null,
//                     "hole_par"  : 4,
//                     "hole_index": 11

//                 }
//             }
//         },
//         {
//             "fname"     : "Nils-Jakob",
//             "lname"     : "Olsson",
//             "tee"       : 58,
//             "hcp"       : 10.3,
//             "shcp"      : 10,
//             "stats"     : {     // Hålnummer som egenskap eller del av objektet i arrayn?
//                 "1"     : {
//                     "strokes"   : 4,
//                     "points"    : 2,
//                     "par_putt"  : true,
//                     "fir"       : true,
//                     "gir"       : false,
//                     "putts"     : 2,
//                     "sandy_save": null,
//                     "up_and_down": null,
//                     "penalty"   : null,
//                     "hole_par"  : 4,
//                     "hole_index": 11
//                 }
//             }
//         }
//     ] 
// }


// function Score(fname, lname, tee, hcp, shcp) {
//     this.fname = fname;
//     this.lname = lname;
//     this.tee = tee;
//     this.hcp = hcp;
//     this.shcp = shcp;
//     this.stats = {};
// }

// // En individuell spelares score
// var score = {
//     "fname"     : "Nils-Jakob",
//     "lname"     : "Olsson",
//     "tee"       : 58,
//     "hcp"       : 10.3,
//     "shcp"      : 10,
//     "stats"     : {     // Hålnummer som egenskap eller del av objektet i arrayn?
//         "1"     : {
//             "points"    : 2,
//             "par_putt"  : true,
//             "fir"       : true,
//             "gir"       : false,
//             "putts"     : 2,
//             "sandy_save": null,
//             "up_and_down": null,
//             "penalty"   : null,
//             "hole_par"  : 4,
//             "hole_index": 11
//         }
//     }
// }

