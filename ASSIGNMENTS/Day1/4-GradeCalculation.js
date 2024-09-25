let score = 180

function getGrade(score){
    let grade
        if ((score>=90)&&(score<=100))
            grade = 1
        else if ((score>=70)&&(score<90))
            grade = 2
        else if ((score>=40)&&(score<70))
            grade = 3
        else if ((score>=0)&&(score<40))
            grade = 4
        else
            console.log(score + " - Invalid score");
            

    switch (grade) {
        case grade=1:
            console.log(score + " is Grade 1");
            break;
        case grade=2:
            console.log(score + " is Grade 2");
            break;
        case grade=3:
            console.log(score + " is Grade 3");
            break;
        case grade=4:
            console.log(score + " is Grade 4");
            break;
        default:
            console.log("Grade not applicable for invalid score");
            break;
    }
}


getGrade(score)