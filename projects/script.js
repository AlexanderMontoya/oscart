let cont_scroll = 1;

const projects = document.querySelectorAll('.project__content');
const numbers = document.querySelectorAll('.number');

function triggerAnimation(entries){
    entries.forEach((entry,index)=>{
        const pro =entry.target.querySelector('.project__item');
        pro.classList.toggle('unset',entry.isIntersecting) 
        if(entry.isIntersecting){
            const dat =entry.target.querySelector('.item')
            ponerHidden(dat.value)
        }

    })
}

const options = {
    root:null,
    rootMargin:"0px",
    threshold: .7
}

const observer = new IntersectionObserver(triggerAnimation, options);

projects.forEach(project=>{
    observer.observe(project)
})

function ponerHidden(number){
    numbers.forEach((num,index)=>{
        if(index==number){
            num.classList.toggle('hidden')
        }else{
            num.classList.add('hidden')
        }
    })
}

/* 
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.project');
    
    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                console.log("first")
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('a').forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });
}); 
 */