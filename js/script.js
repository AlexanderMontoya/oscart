
const nav=document.querySelector('.header__nav');
    window.addEventListener('scroll',function(){
    nav.classList.toggle('active',window.scrollY >0)
})