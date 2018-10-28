function primeNum(Number) {
    let i;
    for ( i = 2; i <= 100; i++) {

        if (Number % i === 0) {
            break;
        }
    }
    if (i === Number) {
        return true;
    }
    else {
        return false;
    }
}
for (i = 2; i <= 100; i++){
    if (primeNum(i)){
        console.log(i); 
    }
}

function getFocus() {           
  document.querySelector("input").focus();
}
function mySubmitFunction() {
	return false;
}
