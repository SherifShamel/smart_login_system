// variables
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var accounts = JSON.parse(localStorage.getItem("accounts"));

var regex = {
    email: /^\w{3,15}@(gmail|yahoo|outlook|hotmail)(.com|.net)$/,
    password: /^\w{5,}$/
}

var accounts = JSON.parse(localStorage.getItem('accounts')) ?? [];

document.getElementById("loginBtn").addEventListener('click', function () {
    if (emailInput.value == "" || passwordInput.value == "") {
        document.querySelector(".my-alert").classList.remove('d-none')
    } else {
        var found;
        for (var i = 0; i < accounts.length; i++) {
            if (accounts[i].email == emailInput.value) {
                if (accounts[i].password == passwordInput.value) {
                    found = true;

                    sessionStorage.setItem("login", `${accounts[i].username}`)
                    document.location.href = './home.html'
                } else {
                    document.querySelector(".my-alert").innerHTML = "Creditials aare wrong"
                    document.querySelector(".my-alert").classList.remove('d-none');
                    return;
                }
            }
        }
        if (found != true) {
            document.querySelector(".my-alert").innerHTML = "Account Not Found"
            document.querySelector(".my-alert").classList.remove('d-none');
        }
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
