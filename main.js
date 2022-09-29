const closeBtn = document.getElementById('btn-close'); 
const openBtn = document.getElementById('btn-open'); 
const navbar = document.getElementById('nav');
const contactBtn = document.getElementById('btn-contact'); 
const toggleBtn = document.querySelector('.btn-toggle')
 
toggleBtn.addEventListener('click', () => {
    const check = navbar.classList.contains('open'); 

    if(!check){
       openBtn.classList.add('toggle'); 
       closeBtn.classList.remove('toggle'); 
       navbar.classList.add('open');
    } else {
        openBtn.classList.remove('toggle');
       closeBtn.classList.add('toggle'); 
       navbar.classList.remove('open');
    }
});
 

contactBtn.addEventListener('click', () => {
    navbar.classList.remove('open');
    closeBtn.classList.add('toggle'); 
    openBtn.classList.remove('toggle');
});    