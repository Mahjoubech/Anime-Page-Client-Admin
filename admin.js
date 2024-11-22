let logout = document.getElementById('logout')
logout.addEventListener('click',()=>{
    window.location.href = 'client.html';
})
let addAnimeBtn = document.querySelector('#anime-button');
let addAnimeForm = document.querySelector('.add-anime-form');
let cancelBtn = document.querySelector('.cancel-btn');

addAnimeBtn.addEventListener('click', () => {
  addAnimeForm.classList.remove('hidden');
  console.log("hhhhhhhhhhhhhhh");
  
});

cancelBtn.addEventListener('click', () => {
  addAnimeForm.classList.add('hidden');

});


let titleinpt = document.getElementById('title')
let genreinpt = document.getElementById('genre')
let eposideinpt = document.getElementById('episode')
let imageinpt = document.getElementById('image')
let linkinpt = document.getElementById('link')
let clickadd = document.querySelector('.submit-btn')

let animes = JSON.parse(localStorage.getItem('anim')) || [];

clickadd.addEventListener('click',(e)=>{
  e.preventDefault();
  console.log('Submit button clicked');
  let file = imageinpt.files[0];
  if (file) {
      let reader = new FileReader();

      reader.onload = function (event) {
          let newanime = {
              title: titleinpt.value,
              genre: genreinpt.value,
              eposide: eposideinpt.value,
              image: event.target.result, 
              link: linkinpt.value,
          };

          animes.push(newanime);
          localStorage.setItem('anim', JSON.stringify(animes));
          alert('Anime added successfully!');
          console.log('Anime List:', animes);
          titleinpt.value = "";
          genreinpt.value = "";
          eposideinpt.value = "";
          imageinpt.value = "";
          linkinpt.value = "";
          show(); 
      };

      reader.readAsDataURL(file); 
  } else {
      alert('please add photo the anime');
  }
});
let tbodys = document.querySelector('tbody')
function show(){
   tbodys.innerHTML = ''
  for (let i = 0; i < animes.length; i++) {
    let contnt = `
      <tr>
  <td>${animes[i].title}</td>
  <td>${animes[i].genre}</td>
  <td>${animes[i].eposide}</td>
  <td>
      <a href="#" id="editanime" onclick ="edit(${i})" class="btn">Edit</a>
      <a href="#" onclick ="delet(${i})" class="btn">Delete</a>
  </td>
</tr>
    `
    tbodys.innerHTML += contnt; 
  }

}
let edits = document.getElementById('editanime')
  let formedt = document.getElementById('formedit')
function edit(i){
  formedt.classList.remove('hidden')
  alert('bda khedma')
}
 //edit
// let edits = document.getElementById('editanime')
// let formedt = document.getElementById('formedit')
//  edits.addEventListener("click",()=>{
//   alert("this my fuuckinnnng");
//  });


function delet(i){
  animes.splice(i, 1); 
  localStorage.anim = JSON.stringify(animes);
  show(); 
}

show()
