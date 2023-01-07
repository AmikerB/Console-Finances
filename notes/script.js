///////////// Practice code

// basic array

num = [2, 7, 6, 3, 5, 9]

// loop to find change 

let change = [];

for (let i = 1; i < num.length; i++) {
    change.push(num[i] - num[i - 1]);
}

console.log(change)

// nested array

num2 = [['jan', 4], ['feb', 6], ['mar', 3], ['apr', 9], ['may', -1], ['jun', -5]]

// difference of profits within nested array

let difference = [];

for (let i = 1; i < num2.length; i++) {
    difference.push(num2[i][1] - num2[i - 1][1]);
}

console.log(difference);
// create variable that holds just the months within num2

let months = [];

for (let i = 1; i < num2.length; i++) {
    months.push(num2[i][0]);
}

console.log(months);


// merge difference variable and months variable

let merge = [];

for (let i = 0; i < months.length; i++) {
    merge.push([months[i], difference[i]]);
}

console.log(merge);

///////////// LEFT OFF HERE /////////////

// find the biggest number and display both the month and the number

let largest = merge[0][0];

for (let i = 1; i < merge.length; i++) {
    for (let j = 0; j < merge[i].length; j++) {
        if (merge[i][j] > largest) {
            largest = merge[i][j];
        }
    }
}

console.log(largest)

// for (let i = 0; i < num2.length; i++) {
//     for (let j = 0; j < num2[i].length; j++) {
//         change = num2[i][j] + num2[i + 1][j];
//         console.log(change)
//     }
// }

// let month = [0][0]

// for (let i = -1; i < num2.length; i++) {
//     month = num2[i] + num2[i + 1];
// }

// console.log(month)



// for (let i = -1; i < num2.length; i++) {
//     let month = num2[i + 1];
//     console.log("this should only be the months: " + month);
// }

// for (let i = 0; i < num2.length; i++) {
//     month = num2[i][0] + num2[i + 1][0];
// }

// num2[i][0] +
// console.log(month, difference)




// find the smallest number and display both the month and the number


