import { validateEmail, validatePassword, validateConfirmPass } from './utils.js';

const SForm = (evt) => {
    evt.preventDefault();
    let signupEmailSpan = document.querySelector('#signupEmailError');
    let signupPasswordSpan = document.querySelector('#signupPasswordError');
    let confirmpasswordSpan = document.querySelector('#signupConfirmPasswordError');

    let signupEmail = window.signupForm.email.value;
    let signupPassword = window.signupForm.password.value;
    let confirmPassword = window.signupForm.confirmPassword.value;

    // Validate signupPassword
    if (validateEmail(signupEmail)){
        signupEmailSpan.classList.remove('hideError');
        signupEmailSpan.classList.add('displayError');
        signupEmailSpan.innerHTML = validateEmail(signupEmail);
    }else{
        signupEmailSpan.classList.remove('displayError');
        signupEmailSpan.classList.add('hideError');
        signupEmailSpan.innerHTML = validateEmail(signupEmail);
    }

    // Validate signupPassword
    if (validatePassword(signupPassword)){
        signupPasswordSpan.classList.remove('hideError');
        signupPasswordSpan.classList.add('displayError');
        signupPasswordSpan.innerHTML = validatePassword(signupPassword);
    }else{
        signupPasswordSpan.classList.remove('displayError');
        signupPasswordSpan.classList.add('hideError');
        signupPasswordSpan.innerHTML = validatePassword(signupPassword);
    }
    
    // Validate confirm signupPassword
    if (validateConfirmPass(confirmPassword, signupPassword)){
        confirmpasswordSpan.classList.remove('hideError');
        confirmpasswordSpan.classList.add('displayError');
        confirmpasswordSpan.innerHTML = validateConfirmPass(confirmPassword, signupPassword);
    }else{
        confirmpasswordSpan.classList.remove('displayError');
        confirmpasswordSpan.classList.add('hideError');
        confirmpasswordSpan.innerHTML = validateConfirmPass(confirmPassword, signupPassword);
    }

    if (!validateEmail(signupEmail) && !validatePassword(signupPassword) && !validateConfirmPass(confirmPassword, signupPassword)){
        window.signupForm.reset();
        window.location.replace('#/');
    }     
}

window.addEventListener('load', () => {
    if(location.hash === '#/signup'){
        window.signupForm = document.getElementById('signupForm');
        window.signupForm.addEventListener('submit', SForm);
    }
})

window.addEventListener('hashchange', () => {
    if(location.hash === '#/signup'){
        window.signupForm = document.getElementById('signupForm');
        window.signupForm.addEventListener('submit', SForm);
    }
})


