(function () {
    if (sessionStorage.getItem("login") != null) {
        document.querySelector("#welcomeMsg").innerHTML = "Welcome" + " " + sessionStorage.getItem("login")
    } else {
        window.location.href = '../index.html'
    }
})()