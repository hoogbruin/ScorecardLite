function summaryView() {
    // Header
    var header = document.createElement('div')
    header.className = 'header'
    header.innerText = 'Summary'

    // Title
    var title = document.createElement('div')
    title.className = 'title'
    title.innerText = 'VSummary'

    // Content
    var content = document.createElement('form')
    content.className = 'content'
    content.id = 'content-course'

    // Courses.forEach(course => {
    //     var course_item = document.createElement('div')
    //     course_item.className = "course-item"

    //     var radio = document.createElement('input')
    //     radio.type = 'radio'
    //     radio.id = course.name
    //     radio.name = 'course'
    //     radio.value = course.name
    //     radio.required = true

    //     var label = document.createElement('label')
    //     label.setAttribute('for', course.name)
    //     label.innerText = course.name

    //     course_item.appendChild(radio)
    //     course_item.appendChild(label)
    //     form.appendChild(course_item)
    // })

    // Footer
    var footer = document.createElement('div')
    footer.className = 'footer'

    var btn_cancel = document.createElement('button')
    btn_cancel.type = 'button'
    btn_cancel.className = 'btn'
    // btn_cancel.id = 'btn_cancel'
    btn_cancel.innerText = 'Avbryt'
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

    app.appendChild(header)
    app.appendChild(title)
    app.appendChild(content)
    app.appendChild(footer)
}