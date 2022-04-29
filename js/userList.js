function userList() {
    // Header
    var header = document.createElement('div')
    header.className = 'header'
    header.innerText = 'ScorecardLite'

    // Title
    var title = document.createElement('div')
    title.className = 'title'
    title.innerText = 'Registrerade Spelare'

    // Content
    var content = document.createElement('div')
    content.className = 'content'

    //// User list
    var users = getUsers()

    if(users != undefined) {
        users.forEach(user => {
            var user_item = document.createElement('div')
            user_item.className = 'user_item'
            user_item.id = user.id
            
            var div = document.createElement('div')
            div.innerText = user.fname + ' ' + user.lname
            user_item.appendChild(div)

            var div = document.createElement('div')
            div.innerText = user.hcp
            user_item.appendChild(div)

            user_item.addEventListener('click', function() {
                console.log(user)
                // console.log(this)
                // var selected_user = getUser(this.id)             Onödig funktion? 
                alert('Bingo')
                //   userView(selected_user)
            })

            content.appendChild(user_item)
        })
    } 

    // Footer
    var footer = document.createElement('div')
    footer.className = 'footer'

    var btn_cancel = document.createElement('button')
    btn_cancel.type = 'button'
    btn_cancel.className = 'btn'
    btn_cancel.id = 'btn_cancel'
    btn_cancel.innerText = 'Avbryt'
    btn_cancel.addEventListener('click', function () {
        startPage()
    })
    footer.appendChild(btn_cancel)

    // Koppla samman
    var app = document.getElementById('app')
    app.innerHTML = ''

    app.appendChild(header)
    app.appendChild(title)
    app.appendChild(content)
    app.appendChild(footer)
}