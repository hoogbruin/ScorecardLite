class Scorecard {
    constructor(date) {
        this.status = 'open'
        this.date = date
        this.courseName
        this.players = []
    }
}

class Users {
    constructor() {
        this.users = []
    }
}

class User {
    constructor() {
        this.firstName
        this.lastName
        this.gender
        this.hcp
    }

    updateHcp(hcp) {
        this.hcp = hcp
    }
}