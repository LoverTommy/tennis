const prev = document.getElementById('prev');
const next = document.getElementById('next');

const slider = document.getElementById('slider');
const sliderItem = document.getElementById('playerItem');

const scrollbar1 = document.getElementById('scrollBar1');
const scrollbar2 = document.getElementById('scrollBar2');

const sliderItems = slider.children;

console.log(sliderItems.length)

let sliderStep = 0;


prev.addEventListener('click', ()=>{
    sliderFunc('prev');
})

next.addEventListener('click', ()=>{
    sliderFunc('next');
})

setTimeout(() => {
    console.log((sliderItems.length-1)*sliderItem.offsetWidth)
    
}, 1000);

function sliderFunc(button) {

    if(button === 'prev') {
        if(sliderStep <= 0) {
            slider.style.left = `${sliderStep + sliderItem.offsetWidth}` + 'px';
            sliderStep += sliderItem.offsetWidth;
        }
    }

    if(button === 'next') {
        if(sliderStep > -(sliderItems.length-3)*sliderItem.offsetWidth) {
            slider.style.left = `${sliderStep - sliderItem.offsetWidth}` + 'px';
            sliderStep -= sliderItem.offsetWidth;
            console.log(sliderStep)
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