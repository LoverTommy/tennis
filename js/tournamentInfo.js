const prev = document.getElementById('prev');
const next = document.getElementById('next');

const slider = document.getElementById('slider');
const sliderItem = document.getElementById('playerItem');

const scrollbar1 = document.getElementById('scrollBar1');
const scrollbar2 = document.getElementById('scrollBar2');

const sliderItems = slider.children;

let sliderStep = 0;

const media1 = window.matchMedia('(max-width: 900px)')
const media2 = window.matchMedia('(max-width: 700px)')
const media3 = window.matchMedia('(max-width: 500px)');


prev.addEventListener('click', ()=>{
    sliderFunc('prev');
})

next.addEventListener('click', ()=>{
    sliderFunc('next');
})

function sliderFunc(button) {
    if(button === 'prev') {
        if(sliderStep <= -sliderItem.offsetWidth) {
            slider.style.left = `${sliderStep + sliderItem.offsetWidth}` + 'px';
            sliderStep += sliderItem.offsetWidth;
        }
    }

    if(button === 'next') {
        if(media3.matches) {
            if(sliderStep > -(sliderItems.length-1)*sliderItem.offsetWidth) {
                slider.style.left = `${sliderStep - sliderItem.offsetWidth}` + 'px';
                sliderStep -= sliderItem.offsetWidth;
            }
        }else if(media2.matches){
            if(sliderStep > -(sliderItems.length-2)*sliderItem.offsetWidth) {
                slider.style.left = `${sliderStep - sliderItem.offsetWidth}` + 'px';
                sliderStep -= sliderItem.offsetWidth;
            }
        }else if(media1.matches){
            if(sliderStep > -(sliderItems.length-3)*sliderItem.offsetWidth) {
                slider.style.left = `${sliderStep - sliderItem.offsetWidth}` + 'px';
                sliderStep -= sliderItem.offsetWidth;
            }
        }else {
            if(sliderStep > -(sliderItems.length-4)*sliderItem.offsetWidth) {
                slider.style.left = `${sliderStep - sliderItem.offsetWidth}` + 'px';
                sliderStep -= sliderItem.offsetWidth;
            }
        }
    }
}


const singleFilter = document.getElementById('single');
const singleHr = document.getElementById('singleHr');
const singleList = document.getElementById('singleList');
const singleMatches = document.getElementById('singleMatches');

const doubleFilter = document.getElementById('double');
const doubleHr = document.getElementById('doubleHr');
const doubleList = document.getElementById('doubleList');
const doubleMatches = document.getElementById('doubleMatches');

singleFilter.addEventListener('click', ()=>{
    singleFilter.style.color = 'blue';
    singleHr.style.backgroundColor = 'blue';
    singleHr.style.display = 'flex';
    singleList.style.display = 'flex';
    singleMatches.style.display = 'flex';

    doubleFilter.style.color = 'rgba(0, 0, 0, 0.432)';
    doubleHr.style.display = 'none';
    doubleList.style.display = 'none';
    doubleMatches.style.display = 'none';
});

doubleFilter.addEventListener('click', ()=>{
    singleFilter.style.color = 'rgba(0, 0, 0, 0.432)';
    singleHr.style.display = 'none';
    singleList.style.display = 'none';
    singleMatches.style.display = 'none';

    doubleFilter.style.color = 'blue';
    doubleHr.style.display = 'flex';
    doubleHr.style.backgroundColor = 'blue';
    doubleList.style.display = 'flex';
    doubleMatches.style.display = 'flex';
});