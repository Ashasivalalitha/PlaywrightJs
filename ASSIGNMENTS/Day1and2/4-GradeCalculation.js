let score = 18

function getGrade(score){

    if (score > 100 || score < 0) {
        console.log(score + " - Invalid score");
        return; // Stop the function if the score is invalid
    }
    let grade
        if ((score>=90)&&(score<=100))
            grade = 1
        else if ((score>=70)&&(score<90))
            grade = 2
        else if ((score>=40)&&(score<70))
            grade = 3
        else if ((score>=0)&&(score<40))
            grade = 4
        // else
        //     console.log(score + " - Invalid score");
            

    switch (grade) {
        case 1:
            console.log(score + " is Grade 1");
            break;
        case 2:
            console.log(score + " is Grade 2");
            break;
        case 3:
            console.log(score + " is Grade 3");
            break;
        case 4:
            console.log(score + " is Grade 4");
            break;
        default:
            console.log("Grade not applicable for invalid score");
            break;
    }
}


getGrade(score)