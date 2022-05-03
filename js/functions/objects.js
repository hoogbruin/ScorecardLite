function User(id) {
    this.id = id
    this.fname
    this.lname
    this.gender
    this.hcp
}

function Scorecard(date) {
    this.date = date
    this.course_id
    this.course_name
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