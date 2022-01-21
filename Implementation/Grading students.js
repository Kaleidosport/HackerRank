function gradingStudents(grades) {
    return grades.map(x => x > 37 && x % 5 > 2 ? (x + 5 - (x % 5)) : x)
}