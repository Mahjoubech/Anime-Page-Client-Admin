let logout = document.getElementById('logout')
logout.addEventListener('click',()=>{
    window.location.href = 'client.html';
})
const addAnimeBtn = document.querySelector('#anime-button');
const addAnimeForm = document.querySelector('.add-anime-form');
const cancelBtn = document.querySelector('.cancel-btn');

addAnimeBtn.addEventListener('click', () => {
  addAnimeForm.classList.remove('hidden');
});

cancelBtn.addEventListener('click', () => {
  addAnimeForm.classList.add('hidden');
});