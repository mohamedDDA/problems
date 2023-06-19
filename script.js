// Problem 1
let nums = [3, 4];

function compareNumbers(nums) {
    let num1 = nums[0];
    let num2 = nums[1];

    if (num1 > num2) {
        console.log(num1 + " is bigger");
    } else if (num1 < num2) {
        console.log(num2 + " is bigger");
    } else {
        console.log("They are equal");
    }
}

compareNumbers(nums);

// Problem 2 
function checkIfNumber(numb) {
    if (typeof input === 'number' && !isNaN(input)) {
        console.log("this is a number")
    } else {
        console.log("this is not a number")
    }
}

numb = "ssss"
checkIfNumber(numb)





// Problem 3
function getEvenNumbers(numbers) {
    let even = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            even.push(numbers[i]);
        }
    }

    return even;
}
let numbers = [2, 3, 4, 5, 6, 7, 8];
let evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers);


// Problem 4
function getDate() {
    let currentDateObj = new Date();
    return currentDateObj;
}
let currentDateResult = getDate();
console.log(currentDateResult);



// Problem 5
function getCurrentDate() {
    let currentDate = new Date();

    let year = currentDate.getFullYear();
    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    let day = currentDate.getDate().toString().padStart(2, '0');

    let formattedDate = `${year}/${month}/${day}`;

    return formattedDate;
}

let currentDate = getCurrentDate();
console.log(currentDate);
//
