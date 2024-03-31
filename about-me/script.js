const content__adobe = document.getElementById('section__adobe');

function triggerAnimation(entries){
    entries.forEach(entry=>{
        console.log(entry.isIntersecting)
        if(entry.isIntersecting){
            document.querySelectorAll('.percentage__content').forEach(perce=>{
                perce.classList.toggle('animado', entry.isIntersecting)
            })
        }
    })
}

const options = {
    root:null,
    rootMargin:"0px",
    threshold: .3
}

const observer = new IntersectionObserver(triggerAnimation, options);

observer.observe(content__adobe)
