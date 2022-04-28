function setupCourse() {
    // Skapa grundlayouten
    createSetupLayout()

    // Headern
    setup_title.innerText = 'Välj Bana'

    // Content 
    var form = document.createElement('form')
    form.id = 'form_setupCourse'

    Courses.forEach(course => {
        var course_item = document.createElement('div')
        course_item.className = "course_item"

        var radio = document.createElement('input')
        radio.type = 'radio'
        radio.id = course.name
        radio.name = 'course'
        radio.value = course.name
        radio.required = "true"

        var label = document.createElement('label')
        label.setAttribute('for', course.name)
        label.innerText = course.name

        course_item.appendChild(radio)
        course_item.appendChild(label)
        form.appendChild(course_item)
    })

    setup_content.appendChild(form)

    // Footern
    // Nästa knappen
    var btn_next = document.createElement('button')
    btn_next.type = 'submit'
    btn_next.className = 'btn'
    btn_next.id = 'btn_setupCourse'
    btn_next.setAttribute('form', 'form_setupCourse')
    btn_next.innerText = 'Nästa'

    form.addEventListener('submit', function (event) {
        event.preventDefault()
        var selected_course = this.elements.course.value

        // Spara vald bana i globala variablen 'course' samt namn i 'scorecard'
        course = Courses.find(obj => obj.name == selected_course)
        // console.log(course) // Temp
        scorecard.course = course.name

        setupPlayers()
    })

    // Avbryt knappen
    var btn_cancel = document.createElement('button')
    btn_cancel.type = 'button'
    btn_cancel.className = 'btn'
    btn_cancel.id = 'btn_cancel'
    btn_cancel.innerText = 'Avbryt'

    btn_cancel.addEventListener('click', function (event) {
        startPage()
    })

    // Koppla knappar
    footer.appendChild(btn_cancel)
    footer.appendChild(btn_next)
}