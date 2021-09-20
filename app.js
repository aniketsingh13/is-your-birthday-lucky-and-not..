const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box")

checkNumber.addEventListener("click", isYourBirthdayLucky);

function compareValue(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        outputBox.innerText = "your birthday is lucky 🔥🔥";
    } else {
        outputBox.innerText = "you are not lucky man 😔"
    }
}



function isYourBirthdayLucky() {
    const dob = birthDate.value;
    const sum = calculateSum(dob);
    const lucky1 = Number(luckyNumber.value);
    if(lucky1 < 0)
    {
        outputBox.innerText = "please enter positive value"
    }
    else if(lucky1 == ""){
        outputBox.innerText = "please input both the boxes"
    }
    else{
    if (sum && dob)
        compareValue(sum, lucky1)
    else
        outputBox.innerText = "please enter both the boxes 👿 "
}
}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;

}