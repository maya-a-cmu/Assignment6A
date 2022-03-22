

function deleteListCourse(item) {
    console.log(item);
    item.parentNode.removeChild(item);
}

function selectListCourse(item) {
    if (item.checked) {
        item.parentNode.style.textDecoration = "red underline";
    } else {
        item.parentNode.style.textDecoration = "none";
    }
}


var courses = 0
function addCourseToSchedule(item) {
    if (item.selected) {
        course = courses + 1
    }
}
