let checker = true;
let p = new String();
let principle = new String();
let interestrate = new String();
let term = new String();

while(checker) {
    p = prompt('Enter a valid principal:');
    if (typeof parseInt(p) === 'number' && !isNaN(parseInt(p))) {
        principle = parseInt(p);
        checker = false;
    }
}

checker = true;
while(checker) {
    p = prompt('Enter a valid interest rate:');
    if (typeof parseInt(p) === 'number' && !isNaN(parseInt(p))) {
        interestrate = parseInt(p);
        checker = false;
    }
}

checker = true;
while(checker) {
    p = prompt('Enter a valid term:');
    if (typeof parseInt(p) === 'number' && !isNaN(parseInt(p))) {
        term = parseInt(p);
        checker = false;
    }
}

document.getElementById('principal').value = principle;
document.getElementById('rate').value = interestrate;
document.getElementById('term').value = term;
