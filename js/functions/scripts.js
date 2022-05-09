// function getCourse(name) {
//     return Courses.find(c => c.name == name)
// }

function getHoleScore(player, holescore) {
}

function addDecimal(spinner) {
    spinner.value = (parseFloat(spinner.value) + 0.1).toFixed(1);
}

function subDecimal(spinner) {
    spinner.value = (parseFloat(spinner.value) - 0.1).toFixed(1);
}

// function calculateHcpResult(course_rating, slope_rating, par, shcp, points, pcc = 0) {
//     var result = (113 / slope_rating) * (par + shcp - (points - 36) - course_rating - pcc)
//     return result.toFixed(1)
// }
function calculateHcpResult(player, course, tee, pcc = 0) {
    var unplayed_holes = 18 - player.score.length
    var points = player.total_stableford + unplayed_holes * 2

    if(unplayed_holes > 4)
        points -= 1

    // (113 / slope_rating) * (par + shcp - (points - 36) - course_rating - pcc)
    var result = (113 / tee[player.gender].slope_rating) * (course.par + player.shcp - (points - 36) - tee[player.gender].course_rating - pcc)
    return result.toFixed(1)
}