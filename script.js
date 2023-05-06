
const images = document.querySelectorAll('.project-img-cont');
images.forEach(function(image) {
  image.addEventListener('click', ()=>{
    image.classList.toggle('enlarge');
   });
});