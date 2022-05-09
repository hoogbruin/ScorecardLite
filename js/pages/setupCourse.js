function setupCourse() {
    // Header
    var header = document.createElement('div')
    header.className = 'header'
    header.innerText = 'Välj Bana'

    // Content
    var form = document.createElement('form')
    form.className = 'content'
    form.id = 'form-course'

    Courses.forEach(course => {
        var course_item = document.createElement('div')
        course_item.className = "course-item"

        var radio = document.createElement('input')
        radio.type = 'radio'
        radio.id = course.name
        radio.name = 'course'
        radio.value = course.name
        radio.required = true

        var label = document.createElement('label')
        label.setAttribute('for', course.name)
        label.innerText = course.club + ' - ' + course.name

        course_item.appendChild(radio)
        course_item.appendChild(label)
        form.appendChild(course_item)
    })

    // Footer
    var footer = document.createElement('div')
    footer.className = 'footer'

    var btn_cancel = document.createElement('button')
    btn_cancel.type = 'button'
    btn_cancel.className = 'btn-menu-item'
    // btn_cancel.id = 'btn_cancel'
    btn_cancel.innerHTML = '<i class="bi bi-x"></i>'
    btn_cancel.addEventListener('click', function () {
        startPage()
    })

    var btn_next = document.createElement('button')
    btn_next.type = 'submit'
    btn_next.className = 'btn-menu-item'
    btn_next.setAttribute('form', 'form-course')
    btn_next.innerHTML = '<i class="bi bi-check"></i>'

    form.addEventListener('submit', function (e) {
        e.preventDefault()

        var selected_course = this.elements.course.value
        course = Courses.find(c => c.name == selected_course)
        
        scorecard.course_id = course.id
        scorecard.club_name = course.club
        scorecard.course_name = course.name

        setupPlayers()
    })

    footer.appendChild(btn_cancel)
    footer.appendChild(btn_next)

    // Koppla samman
    var app = document.getElementById('app')
    app.innerHTML = ''

    app.appendChild(header)
    app.appendChild(form)
    app.appendChild(footer)
}