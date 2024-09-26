function solve(arr) {
    let result = [], currArray = [];
    for (let i = 0; i < arr.length; i++) {
        currArray.push(arr[i]);
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] == arr[i]) {
                currArray.push(arr[j]);
            } else {
                break;
            }
        }
        if (currArray.length > result.length) {
            result = currArray;
        }
        currArray = [];
    }
    console.log(result.join(" "));
}


solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);








/*
result = []
currArray = []

Za svaki element:
    Popunjavamo currArray od tog elementa i svih susednih sa desne strane koji su jednaki tom elementu
    Proveri da li je duzina currArray veca od duzine result
    Ako jeste, result postaje currArray

a = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1]

a[0] = 2  =>  currArray = [2]        =>  result = [2]
a[1] = 1  =>  currArray = [1, 1]     =>  result = [1, 1]
a[2] = 1  =>  currArray = [1]
a[3] = 2  =>  currArray = [2]
a[4] = 3  =>  currArray = [3, 3]
a[5] = 3  =>  currArray = [3]
a[6] = 2  =>  currArray = [2, 2, 2]  =>  result = [2, 2, 2]
a[7] = 2  =>  currArray = [2, 2]
a[8] = 2  =>  currArray = [2]
a[9] = 1  =>  currArray = [1]
*/