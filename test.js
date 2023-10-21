// Function to implement FizzBuzz logic
function fizzBuzz() {
    // Loop from 1 to 100
    for (let i = 1; i <= 100; i++) {
        // Check if the number is divisible by both 3 and 5
        if (i % 3 === 0 && i % 5 === 0 && i%7 === 0) {
            // Print 'FizzBuzz' if divisible by both 3 and 5
            console.log('FizzBuzz');
        }
        // Check if the number is divisible by 3
        else if (i % 3 === 0) {
            // Print 'Fizz' if divisible by 3
            console.log('Fizz');
        }
        // Check if the number is divisible by 5
        else if (i % 5 === 0) {
            // Print 'Buzz' if divisible by 5
            console.log('Buzz');

        }
        // Check if the number is divisble by 7 
        else if (i % 7 === 0) {
                // Print 'Bazz' if divisible by 7
                console.log('Bazz')
        }
         else {
            // Print the number itself for other cases
            console.log(i);
        }
    }
}

// Call the function to execute the FizzBuzz logic
fizzBuzz();
