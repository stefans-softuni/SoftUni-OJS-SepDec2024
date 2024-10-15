function solve(arr) {
    let firstGroup = Number(arr[0]);
    let secondGroup = Number(arr[1]);
    let thirdGroup = Number(arr[2]);
    let totalStudents = Number(arr[3]);

    let totalHours = 0;
    while (totalStudents > 0) {
        totalHours++;
        totalStudents -= (firstGroup + secondGroup + thirdGroup);
        if (totalHours % 4 == 0) {
            totalHours++;
        }
    }
    console.log(`Time needed: ${totalHours}h.`);
}

solve(['5','6','4','20']);
solve(['1','2','3','45']);