const prev = document.getElementById('prev');
const next = document.getElementById('next');

const list1 = document.getElementById('list1');
const list2 = document.getElementById('list2');

const scrollbar1 = document.getElementById('scrollBar1');
const scrollbar2 = document.getElementById('scrollBar2');

const itemsArr = [list1,list2];
const itemsBarArr = [scrollbar1,scrollbar2];

let previousItemNum = 0;
let activeItemNum = 0;


prev.addEventListener('click', ()=>{
    if(activeItemNum === 0) {
        activeItemNum = 1;
        previousItemNum = 0;
        slider();
    }else {
        activeItemNum = 0;
        previousItemNum = 1;
        slider();
    }
})

next.addEventListener('click', ()=>{
    if(activeItemNum === 0) {
        activeItemNum = 1;
        previousItemNum = 0;
        slider();
    }else {
        activeItemNum = 0;
        previousItemNum = 1;
        slider();
    }
})


function slider(button) {
    itemsArr[activeItemNum].style.display = 'flex';
    itemsArr[previousItemNum].style.display = 'none';
    itemsBarArr[activeItemNum].style.cssText = 'background-color: blue';
    itemsBarArr[previousItemNum].style.cssText = 'background-color: rgba(0, 0, 0, 0.274)';
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