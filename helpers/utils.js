function generateRandomDigit(n) {
    // Generate a random number between 1 and 9 for the first digit
    const firstDigit = Math.floor(Math.random() * 9) + 1;
    
     // Generate the remaining 15 digits (0-9)
    let remainingDigits = '';
    for (let i = 0; i < n; i++) {
        remainingDigits += Math.floor(Math.random() * 10);
    }
    
    // Combine the first digit with the remaining digits to form the full 16-digit number as a string
    return (firstDigit + remainingDigits).toString();
}

function generateRandomAlphanumeric() {
    const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}


console.log(generateRandomAlphanumeric());

document.addEventListener('keydown', (e) => {
    e = e || window.event;
    if(e.keyCode == 116){
        e.preventDefault();
    }
});
