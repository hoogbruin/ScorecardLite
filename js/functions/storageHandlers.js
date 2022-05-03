// Users
function getUsers() {
    var users

    if(localStorage.hasOwnProperty('Users'))
        users = JSON.parse(localStorage.getItem('Users'))
    else
        users = baseUsers
        localStorage.setItem('Users', JSON.stringify(users))

    return users
}

// function getUser(id) { // Kanske borde lägga till kontroll
//     var users = getUsers()
//     var user = users.find(u => u.id == id)

//     return user
// }

function createUser(fname, lname, gender, hcp) {
    var newUser = new User(Date.now())

    newUser.fname = fname
    newUser.lname = lname
    newUser.gender = gender
    newUser.hcp = hcp

    var users

    if(localStorage.hasOwnProperty('Users'))
        users = JSON.parse(localStorage.getItem('Users'))
    else
        users = []

    users.push(newUser)
    localStorage.setItem('Users', JSON.stringify(users))
}

function deleteUser(user) {
    if(localStorage.hasOwnProperty('Users')) {
        var users = JSON.parse(localStorage.getItem('Users'))
        var existing = users.find(u => u.id == user.id)
        var index = users.indexOf(existing)

        if(index > -1) {
            users.splice(index, 1)
            localStorage.setItem('Users', JSON.stringify(users))
        }
    }
}

function updateUser(id, fname, lname, gender, hcp) {
    
    if(localStorage.hasOwnProperty('Users')) {
        var users = JSON.parse(localStorage.getItem('Users'))
        var user = users.find(u => u.id == id)

        user.fname = fname
        user.lname = lname
        user.gender = gender
        user.hcp = hcp

        localStorage.setItem('Users', JSON.stringify(users))
    }
}

function updatePlayersHcp(players) {
    var users = JSON.parse(localStorage.getItem('Users'))

    players.forEach(player => {
        var user = users.find(u => u.id == player.id)
        user.hcp = player.hcp
    })

    localStorage.setItem('Users', JSON.stringify(users))
}

// Scorecards
function saveScorecard(scorecard) {
    var scorecards

    if(localStorage.hasOwnProperty('Scorecards'))
        scorecards = JSON.parse(localStorage.getItem('Scorecards'))
    else
        scorecards = []    

    // Kolla om den redan existerar annars lägg till
    var current = scorecards.find(s => s.date == scorecard.date)
    var index = scorecards.indexOf(current)

    if(current !== undefined) {
        scorecards[index] = scorecard
    } else {
        scorecards.push(scorecard)
    }

    // Spara på nytt i localStorage
    localStorage.setItem('Scorecards', JSON.stringify(scorecards))     
}

function getScorecard(date) { // Kanske borde lägga till kontroll
    var scorecards = getScorecards()
    var scorecard = scorecards.find(s => s.date == date)

    return scorecard
}

function getScorecards() {
    if(localStorage.hasOwnProperty('Scorecards'))
        return JSON.parse(localStorage.getItem('Scorecards'))
}

function deleteScorecard(scorecard) {
    alert(scorecard.date)
}