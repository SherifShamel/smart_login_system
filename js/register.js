// variables
var usernameInput = document.querySelector('#username');
var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');

var regex = {
    email: /^\w{3,15}@(gmail|yahoo|outlook|hotmail)(.com|.net)$/,
    password: /^\w{5,}$/,
    username: /^[a-z]{3,8}[0-9]{0,4}$/i
}

var accounts = JSON.parse(localStorage.getItem('accounts')) ?? [];
// var accounts = [];

document.querySelector("#submitBtn").addEventListener('click', function () {
    if (usernameInput.value == "" || passwordInput.value == "" || emailInput.value == "") {
        document.querySelector(".my-alert").classList.add('text-danger')
        document.querySelector(".my-alert").classList.remove('text-success')
        document.querySelector(".my-alert").classList.remove('d-none')
    } else {
        for (var i = 0; i < accounts.length; i++) {
            if (emailInput.value == accounts[i].email) {
                document.querySelector(".my-alert").classList.add('text-danger')
                document.querySelector(".my-alert").classList.remove('text-success')
                document.querySelector(".my-alert").innerHTML = "This Email is taken"
                return;
            }
        }
        var account = {
            username: usernameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
        }
        accounts.push(account);
        localStorage.setItem('accounts', JSON.stringify(accounts))
        document.querySelector(".my-alert").classList.remove('d-none')
        document.querySelector(".my-alert").classList.remove('text-danger')
        document.querySelector(".my-alert").classList.add('text-success')
        document.querySelector(".my-alert").innerHTML = "Email Created!"
    }
})


document.getElementById("email").addEventListener('input', function () {

    if (regex.email.test(emailInput.value) == true) {
        emailInput.classList.add("is-valid")
        emailInput.classList.remove("is-invalid")
    } else {
        emailInput.classList.remove("is-valid")
        emailInput.classList.add("is-invalid")
    }
})

document.getElementById("password").addEventListener('input', function () {

    if (regex.password.test(passwordInput.value) == true) {
        passwordInput.classList.add("is-valid")
        passwordInput.classList.remove("is-invalid")
    } else {
        passwordInput.classList.remove("is-valid")
        passwordInput.classList.add("is-invalid")
    }
})
document.getElementById("username").addEventListener('input', function () {

    if (regex.password.test(usernameInput.value) == true) {
        usernameInput.classList.add("is-valid")
        usernameInput.classList.remove("is-invalid")
    } else {
        usernameInput.classList.remove("is-valid")
        usernameInput.classList.add("is-invalid")
    }
})

document.getElementById("email").addEventListener('input', function () {

    if (regex.email.test(emailInput.value) == true) {
        emailInput.classList.add("is-valid")
        emailInput.classList.remove("is-invalid")
    } else {
        emailInput.classList.remove("is-valid")
        emailInput.classList.add("is-invalid")
    }
})

document.getElementById("password").addEventListener('input', function () {

    if (regex.password.test(passwordInput.value) == true) {
        passwordInput.classList.add("is-valid")
        passwordInput.classList.remove("is-invalid")
    } else {
        passwordInput.classList.remove("is-valid")
        passwordInput.classList.add("is-invalid")
    }
})
document.getElementById("username").addEventListener('input', function () {

    if (regex.username.test(usernameInput.value) == true) {
        usernameInput.classList.add("is-valid")
        usernameInput.classList.remove("is-invalid")
    } else {
        usernameInput.classList.remove("is-valid")
        usernameInput.classList.add("is-invalid")
    }
})