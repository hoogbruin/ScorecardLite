function userList() {
    // Header
    var header = document.createElement('div')
    header.className = 'header'
    header.innerText = 'Spelare'

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
                // console.log(user)
                editPlayer(function() {
                    userList()
                }, user)
                // editPlayer(user)
            })

            content.appendChild(user_item)
        })
    } 

    // Footer
    var footer = document.createElement('div')
    footer.className = 'footer'

    var btn_cancel = document.createElement('button')
    btn_cancel.type = 'button'
    btn_cancel.className = 'btn-menu-item'
    btn_cancel.id = 'btn_cancel'
    btn_cancel.innerHTML = '<i class="bi bi-x"></i>'
    btn_cancel.addEventListener('click', function () {
        startPage()
    })
    footer.appendChild(btn_cancel)

    var btn_add_user = document.createElement('button')
    btn_add_user.type = 'button'
    btn_add_user.className = 'btn-menu-item'
    btn_add_user.innerHTML = '<i class="bi bi-person-plus"></i>'
    btn_add_user.addEventListener('click', function () {
        editPlayer(function() {
            userList()
        })
    })
    footer.appendChild(btn_add_user)

    // Koppla samman
    var app = document.getElementById('app')
    app.innerHTML = ''

    app.appendChild(header)
    app.appendChild(content)
    app.appendChild(footer)
}