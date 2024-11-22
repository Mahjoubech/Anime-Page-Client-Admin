let logout = document.getElementById('logout')
logout.addEventListener('click',()=>{
    window.location.href = 'client.html';
})
let addAnimeBtn = document.querySelector('#anime-button');
let addAnimeForm = document.querySelector('.add-anime-form');
let cancelBtn = document.querySelector('.cancel-btn');

addAnimeBtn.addEventListener('click', () => {
  addAnimeForm.classList.remove('hidden');
 
});

cancelBtn.addEventListener('click', () => {
  addAnimeForm.classList.add('hidden');

});
let titleinpt = document.getElementById('title')
let genreinpt = document.getElementById('genre')
let eposideinpt = document.getElementById('episode')
let imageinpt = document.getElementById('image')
let linkinpt = document.getElementById('link')
let clickadd = document.getElementById('submit-btn')
let animes = JSON.parse(localStorage.getItem('anime')) || [];

clickadd.addEventListener('click',(e)=>{
  e.preventDefault();
       
  let newanime = {
    title : titleinpt.value,
    genre : genreinpt.value,
    eposide : eposideinpt.value,
    image : imageinpt.value,
    link : linkinpt.value
  }
  animes.push(newanime)
  localStorage.setItem('anime', JSON.stringify(animes));
  alert('anime succesfull')
  console.log(animes)

  titleinpt.value = "";
  genreinpt.value = "";
  eposideinpt.value = "";
  imageinpt.value = "";
  linkinpt.value = "";
})