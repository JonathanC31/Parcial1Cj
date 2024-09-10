function login() {
    event.preventDefault();
    let username = document.querySelector('input[type="text"]').value;
    let password = document.querySelector('input[type="password"]').value;

    console.log("Usuario:", username);
    console.log("Contraseña:", password);
}

function signup() {
    window.location.href = "Signup.html";
}

function cancelar() {
    window.location.href = "Parcial1.html";
}

document.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const course = urlParams.get('course');
    if (course) {
        document.getElementById('course').value = course;
    }
});