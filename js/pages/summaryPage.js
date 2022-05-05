function summaryPage() {
    
    // Header
    var header = document.createElement('div')
    header.className = 'header'
    header.id = 'summary-header'
    var course_name = document.createElement('div')
    course_name.innerText = course.name
    var date = document.createElement('div')
    date.innerText = scorecard.date
    header.appendChild(course_name)
    header.appendChild(date)

    // Content
    var content = document.createElement('div')
    content.className = 'content'
    content.id = 'summary-content'

    scorecard.players.forEach(player => {
        var box = document.createElement('div')
        box.className = 'summary-box'

        // var box_data = document.createElement('div')
        // box_data.className = 'summary-box-data'

        var box_name = document.createElement('div')
        box_name.className = 'summary-box-name'
        box_name.innerText = player.fname + ' ' + player.lname

        box.appendChild(box_name)     

        var box_conditions = document.createElement('div')
        box_conditions.className = 'summary-box-conditions'

        var div = document.createElement('div')
        div.innerText = 'Tee'
        box_conditions.appendChild(div)

        var div = document.createElement('div')
        div.innerText = player.tee
        box_conditions.appendChild(div)

        var div = document.createElement('div')
        div.innerText = 'Hcp'
        box_conditions.appendChild(div)

        var div = document.createElement('div')
        div.innerText = player.hcp
        box_conditions.appendChild(div)

        var div = document.createElement('div')
        div.innerText = 'SHcp'
        box_conditions.appendChild(div)

        var div = document.createElement('div')
        div.innerText = player.shcp
        box_conditions.appendChild(div)

        box.appendChild(box_conditions)

        // 
        var box_calc = document.createElement('div')
        box_calc.className = 'summary-box-calculations'

        var div1 = document.createElement('div')
        div1.className = 'summary-box-div1'
            var div = document.createElement('div')
            div.innerText = 'Slag'
            div1.appendChild(div)

            var div = document.createElement('div')
            div.innerText = 'Z'
            div1.appendChild(div)

            // var div = document.createElement('div')
            //     var div_header = document.createElement('div')
            //     div_header.innerText = 'Brutto'
            //     div.appendChild(div_header)    

            //     var div_value = document.createElement('div')
            //     div_value.innerText = 'X'
            //     div.appendChild(div_value)
            // div1.appendChild(div)

            // var div = document.createElement('div')
            //     var div_header = document.createElement('div')
            //     div_header.innerText = 'Netto'
            //     div.appendChild(div_header)    

            //     var div_value = document.createElement('div')
            //     div_value.innerText = 'Y'
            //     div.appendChild(div_value)
            // div1.appendChild(div)
        box_calc.appendChild(div1)
        
        var div2 = document.createElement('div')
        div2.className = 'summary-box-div2'
            var div = document.createElement('div')
            div.innerText = 'Hcp-res'
            div2.appendChild(div)

            var div = document.createElement('div')
            div.innerText = 'Z'
            div2.appendChild(div)
        box_calc.appendChild(div2)

        var div3 = document.createElement('div')
        div3.className = 'summary-box-div3'
            var div = document.createElement('div')
            div.innerText = 'Poäng'
            div3.appendChild(div)

            var div = document.createElement('div')
            div.innerText = 'X'
            div3.appendChild(div)
        box_calc.appendChild(div3)

        // 
        
        box.addEventListener('click', function(e) {
            scorecardModal(player)
        })

        box.appendChild(box_calc)
        content.appendChild(box)
    })

    // Footer
    var footer = document.createElement('div')
    footer.className = 'footer'

    var btn_edit = document.createElement('button')
    btn_edit.type = 'button'
    btn_edit.className = 'btn-menu-item'
    btn_edit.innerHTML = '<i class="bi bi-pencil"></i>'
    btn_edit.addEventListener('click', function () {
        holeView(1)
    })

    var btn_menu = document.createElement('button')
    btn_menu.type = 'button'
    btn_menu.className = 'btn-menu-item'
    btn_menu.innerHTML = '<i class="bi bi-list"></i>'
    btn_menu.addEventListener('click', function () {
        summaryMenuModal()
    })

    var btn_exit = document.createElement('button')
    btn_exit.type = 'button'
    btn_exit.className = 'btn-menu-item'
    btn_exit.innerHTML = '<i class="bi bi-box-arrow-right"></i>'
    btn_exit.addEventListener('click', function () {
        startPage()
    })

    footer.appendChild(btn_edit)
    footer.appendChild(btn_menu)
    footer.appendChild(btn_exit)

    // Koppla samman
    var app = document.getElementById('app')
    app.innerHTML = ''

    app.appendChild(header)
    app.appendChild(content)
    app.appendChild(footer)
}