function getCourse(name) {
    return Courses.find(c => c.name == name)
}

function getHoleScore(player, holescore) {
}

function addDecimal(spinner) {
    spinner.value = (parseFloat(spinner.value) + 0.1).toFixed(1);
}

function subDecimal(spinner) {
    spinner.value = (parseFloat(spinner.value) - 0.1).toFixed(1);
}

function calculateHcpResult(course_rating, slope_rating, par, shcp, points, pcc = 0) {
    var result = (113 / slope_rating) * (par + shcp - (points - 36) - course_rating - pcc)
    return result.toFixed(1)
}