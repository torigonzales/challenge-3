// elements
const password = document.querySelector('#password');
const button = document.querySelector('#generate');

// password data
let characters = '0123456789abcdefghijklmnopqestuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}=?/<>';
let passwordLength = 8;
let passwordValue = '';

//create password
const createPassword = () => {
    passwordValue = '';

    for (let i = 0; i < passwordLength; i++) {
        let number = Math.floor(Math.random() * characters.length);
        passwordValue += characters.substring(number, number + 1);
    }

    password.value = passwordValue;
}

//events
button.addEventListener('click', createPassword);