let userIcon = document.getElementById('userIcon');
let loginContainer = document.getElementById('loginContainer');
let loginForm = document.getElementById('loginForm');

userIcon.addEventListener('click', () => {
    if (loginContainer.style.display === 'block') {
        loginContainer.style.display = 'none';
    } else {
        loginContainer.style.display = 'block';
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username === 'mahjoub' && password === 'mahjoub123') {
        alert('Login Successful!');
        window.location.href = 'admin.html';
    } else {
        alert('Invalid Credentials');
    }
});