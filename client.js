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

let panls = document.getElementById('panels');
let animes = JSON.parse(localStorage.getItem('anim')) || [];

function showCards() {
  panls.innerHTML = ''; 
  animes.forEach((anime) => {
    let cliont = `
      <div class="card">
       <a href="${anime.link}"> <img src="${anime.image}" alt="${anime.title}"></a>
       
        <div class="card-content">
          <span class="tag">Now showing</span>
          <h3>${anime.title}</h3>
          <p>${anime.eposide}</p>
        </div>
      </div>`;
    panls.innerHTML += cliont;
  });
}

showCards();
