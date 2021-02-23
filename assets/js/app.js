const images = document.querySelectorAll(".slideImg");
let cnt = 0;
showSlides();
function showSlides() {
    const nxt = (cnt + 1) % images.length
    images[cnt].style.display = 'block';
    setTimeout(function(){
        images[nxt].style.display = 'block';
        images[nxt].style.transform = 'translateY(-100%)'
        
        images[nxt].classList.add('slide-transition')
        images[cnt].classList.add('slide-transition')
        
        requestAnimationFrame(()=>{
            requestAnimationFrame(()=>{
                requestAnimationFrame(()=>{
                    images[cnt].style.transform = 'translateY(100%)'
                    images[nxt].style.transform = ''
                })
            })
        })

        const transitionHandler = function(){   
            images[cnt].classList.remove('slide-transition')
            images[nxt].classList.remove('slide-transition')
            
            images[cnt].style.display = '';
            images[cnt].style.transform = ''
            images[cnt].removeEventListener('transitionend', transitionHandler)
            cnt = nxt
            showSlides()
        }
        images[cnt].addEventListener('transitionend', transitionHandler)
    }, 2400);
}
