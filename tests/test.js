function calculateGPA(courses) {
    var totalPoints = 0, totalCredits = 0, i;
    for (i = 0; i < courses.length; i++) {
        totalPoints = totalPoints + gradeToPoints(courses[i].grade) * courses[i].credits;
        totalCredits = totalCredits + courses[i].credits;
    }
    return totalPoints / totalCredits;
}

function gradeToPoints(letterGrade){
    if(letterGrade === 'A+') {
        return 9;
    }
    else if (letterGrade === 'A'){
        return 8;
    }
    else if (letterGrade === 'B+'){
        return 7;
    }
    else if (letterGrade === 'B'){
        return 6;
    }
    else if (letterGrade === 'C+'){
        return 5;
    }
    else if (letterGrade === 'C'){
        return 4;
    }
    else if (letterGrade === 'D+'){
        return 3;
    }
    else if (letterGrade === 'D'){
        return 2;
    }
    else if (letterGrade === 'E'){
        return 1;
    }
    else if (letterGrade === 'F'){
        return 0;
    }
    else {
        return -1;
    }
}

var courses = [
    {id: 'EECS 2030', grade: 'A+', credits: 3}, 
    {id: 'EECS 2040', grade: 'A+', credits: 3}, 
    {id: 'EECS 2050', grade: 'A+', credits: 3}, 
    {id: 'EECS 2060', grade: 'A+', credits: 3}, 
    {id: 'EECS 2070', grade: 'A+', credits: 3}, 
    {id: 'EECS 2080', grade: 'B+', credits: 3}
];

var answer = calculateGPA(courses)

var x;

console.log(answer);