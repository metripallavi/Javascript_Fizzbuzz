function reverseString(str) {
    if(!str)
    {
        return ;
    }
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Test the function
let originalString = undefined
let reversedString = reverseString(originalString);
console.log(reversedString);
