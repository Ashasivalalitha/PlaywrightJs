let intersectionArr1 = [1, 2, 3, 4]
let intersectionArr2 = [2, 4, 5]
let resultArr = []

function intersection(intersectionArr1, intersectionArr2) {
    intersectionArr1.forEach(element1 => {
        intersectionArr2.forEach(element2 => {
            if (element1 == element2)
                resultArr.push(element1)
        });
    });
    console.log(intersectionArr1);
    console.log(intersectionArr2);
    console.log(`Intersection array : ${resultArr}`);
}


intersection(intersectionArr1, intersectionArr2)