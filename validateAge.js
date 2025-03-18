// validateAge.js
export function validateAge(age) {
    age = parseInt(prompt("Enter your age: "), age);
    if(age < 18){
    console.log('Not eligible for voting\n\n');
    } else {
    console.log('Eligible for voting\n\n');
    }
    }
    