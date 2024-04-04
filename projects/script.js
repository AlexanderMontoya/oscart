let cont_scroll = 0;
let area = 'LUDIGO';
const sections = document.querySelectorAll('.project');
const projects = document.querySelectorAll('.project__content');
const numbers = document.querySelectorAll('.number');

function triggerAnimation(entries){
    entries.forEach((entry,index)=>{
        const pro =entry.target.querySelector('.project__item');
        pro.classList.toggle('unset',entry.isIntersecting) 
        if(entry.isIntersecting){
            const dat =entry.target.querySelector('.item')
            
            ponerHidden(dat.value)
            window.scrollTo({
                top:sections[dat.value].offsetTop,
                behavior:'smooth'
            })
            console.log(sections[dat.value].offsetTop)
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




document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.project');
    
    window.addEventListener('scroll', function () {
        /* let current = '';

        const sectionTop = sections[cont_scroll + 1].offsetTop;
        const sectionHeight = sections[0].clientHeight;
        const tolerancia = (sectionHeight*20) / 100

        if(this.pageYOffset >= tolerancia){
            console.log("w")
            window.scrollTo({
                top:sectionTop,
                behavior:'smooth'
            })
        }         */

        /* sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            console.log(section.id + "\nsection top: "+sectionTop+", client height: "+sectionHeight)
            console.log(pageYOffset >= 350)
            if(sectionTop!= 0 && pageYOffset >= 350){
                window.scrollTo({
                    top:sectionTop,
                    behavior:'smooth'
                })
            }
            
        }); */

        
    });
}); 
 