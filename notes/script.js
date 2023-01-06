num = [2, 7, 6, 3, 5, 9]

// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }

let change = 0

for (let i = 1; i < num.length; i++) {
    change = num[i] - num[i - 1];
    console.log("This is the change: " + change);
}


num2 = [['jan', 4], ['feb', 6], ['mar', 3], ['apr', 9], ['may', -1], ['jun', -5]]

let difference = 0;

for (let i = 1; i < num2.length; i++) {
    difference = num2[i][1] - num2[i - 1][1];
    console.log("this is the difference: " + difference);
}
console.log(num2[0][0])


// for (let i = -1; i < num2.length; i++) {
//     let month = num2[i + 1];
//     console.log("this should only be the months: " + month);
// }

let month = num2[0][0]

// for (let i = 0; i < num2.length; i++) {
//     month = num2[i][0] + num2[i + 1][0];
// }

// for (let i = 0; i < num2.length; i++) {
//     console.log(num2[i + 1][0]);
// }

for (let i = 0; i < num2.length; i++) {
    console.log(num2[i + 1][0]);
}



// num2[i][0] +
// console.log(month, difference)
