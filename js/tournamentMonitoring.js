const prev = document.getElementById('prev');
const next = document.getElementById('next');

const slider = document.getElementById('sliderItems');
const sliderItem = document.getElementById('sliderItem');

const sliderItems = slider.children;

let sliderStep = 0;

const media1 = window.matchMedia('(max-width: 1000px)')
const media2 = window.matchMedia('(max-width: 600px)')
const media3 = window.matchMedia('(max-width: 500px)');


prev.addEventListener('click', ()=>{
    sliderFunc('prev');
})

next.addEventListener('click', ()=>{
    sliderFunc('next');
})

function sliderFunc(button) {
    if(button === 'prev') {
        if(media3.matches) {
            if(sliderStep <= -sliderItem.offsetWidth) {
                slider.style.left = `${sliderStep + sliderItem.offsetWidth + 20}` + 'px';
                sliderStep += sliderItem.offsetWidth + 20;
            }
        }else {
            if(sliderStep <= -sliderItem.offsetWidth) {
                slider.style.left = `${sliderStep + sliderItem.offsetWidth}` + 'px';
                sliderStep += sliderItem.offsetWidth;
            }
        }
    }

    if(button === 'next') {
        if(media3.matches) {
            if(sliderStep > -(sliderItems.length - 1)*sliderItem.offsetWidth) {
                slider.style.left = `${sliderStep - sliderItem.offsetWidth - 20}` + 'px';
                sliderStep -= sliderItem.offsetWidth + 20;
            }
        }else if(media2.matches){
            if(sliderStep > -(sliderItems.length)*sliderItem.offsetWidth) {
                slider.style.left = `${sliderStep - sliderItem.offsetWidth}` + 'px';
                sliderStep -= sliderItem.offsetWidth;
            }
        }else if(media1.matches){
            if(sliderStep > -(sliderItems.length-1)*sliderItem.offsetWidth) {
                slider.style.left = `${sliderStep - sliderItem.offsetWidth}` + 'px';
                sliderStep -= sliderItem.offsetWidth;
            }
        }else {
            if(sliderStep > -(sliderItems.length-3)*sliderItem.offsetWidth) {
                slider.style.left = `${sliderStep - sliderItem.offsetWidth}` + 'px';
                sliderStep -= sliderItem.offsetWidth;
            }
        }
    }
}