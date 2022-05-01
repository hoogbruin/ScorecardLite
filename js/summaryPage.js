function summaryPage() {
    
    // Title
    var title = document.createElement('div')
    title.className = 'title'
    title.id = 'summary-title'
    var course_name = document.createElement('div')
    course_name.innerText = course.name
    var date = document.createElement('div')
    date.innerText = scorecard.date
    title.appendChild(course_name)
    title.appendChild(date)

    // Content
    var content = document.createElement('div')
    content.className = 'content'
    content.id = 'summary-content'

    scorecard.players.forEach(player => {
        var box = document.createElement('div')
        box.className = 'summary-box'

        var box_image = document.createElement('div')
        box_image.className = 'summary-box-image'
            
        // Image
        // if(player.image !== undefined) {
        //     console.log(player.image)
        //     box_image.style.backgroundImage = 'url(../media/' + player.image + ')'
        // }

        box.appendChild(box_image)

        var box_data = document.createElement('div')
        box_data.className = 'summary-box-data'

        var box_name = document.createElement('div')
        box_name.className = 'summary-box-name'
        box_name.innerText = player.fname + ' ' + player.lname

        box_data.appendChild(box_name)     

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

        box_data.appendChild(box_conditions)

        var box_calc = document.createElement('div')
        box_calc.className = 'summary-box-calculations'

        var div1 = document.createElement('div')
        div1.className = 'summary-box-div1'
            var div = document.createElement('div')
            div.innerText = 'Slaggolf'
            div1.appendChild(div)

            var div = document.createElement('div')
                var div_header = document.createElement('div')
                div_header.innerText = 'Brutto'
                div.appendChild(div_header)    

                var div_value = document.createElement('div')
                div_value.innerText = 'X'
                div.appendChild(div_value)
            div1.appendChild(div)

            var div = document.createElement('div')
                var div_header = document.createElement('div')
                div_header.innerText = 'Netto'
                div.appendChild(div_header)    

                var div_value = document.createElement('div')
                div_value.innerText = 'Y'
                div.appendChild(div_value)
            div1.appendChild(div)
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

        box_data.appendChild(box_calc)
        box.appendChild(box_data)
        content.appendChild(box)
    })

    // Footer
    var footer = document.createElement('div')
    footer.className = 'footer'

    var btn_cancel = document.createElement('button')
    btn_cancel.type = 'button'
    btn_cancel.className = 'btn-menu-item'
    btn_cancel.innerHTML = '<i class="bi bi-x"></i>'
    btn_cancel.addEventListener('click', function () {
        startPage()
    })

    // var btn_next = document.createElement('button')
    // btn_next.type = 'submit'
    // btn_next.className = 'btn'
    // btn_next.setAttribute('form', 'form-course')
    // btn_next.innerText = 'Fortsätt'

    // form.addEventListener('submit', function (e) {
    //     e.preventDefault()

    //     var selected_course = this.elements.course.value
    //     course = Courses.find(c => c.name == selected_course)
    //     scorecard.course = course.name

    //     setupPlayers()
    // })

    footer.appendChild(btn_cancel)
    // footer.appendChild(btn_next)

    // Koppla samman
    var app = document.getElementById('app')
    app.innerHTML = ''

    app.appendChild(title)
    app.appendChild(content)
    app.appendChild(footer)
}