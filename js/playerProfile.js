const singlesButton = document.getElementById('singlesButton');
const doublesButton = document.getElementById('doublesButton');

const singlesItem = document.getElementById('singles');
const doublesItem = document.getElementById('doubles');

singlesButton.addEventListener('click', ()=>{
    singlesItem.style.display = 'flex';
    doublesItem.style.display = 'none';

    singlesButton.style.cssText = 'background-color: rgba(126, 126, 223, 0.555)';
    doublesButton.style.cssText = 'background-color: white';
})

doublesButton.addEventListener('click', ()=>{
    singlesItem.style.display = 'none';
    doublesItem.style.display = 'flex';

    doublesButton.style.cssText = 'background-color: rgba(126, 126, 223, 0.555)';
    singlesButton.style.cssText = 'background-color: white';
})


const firstItem = document.getElementById('first');
const secondItem = document.getElementById('second');
const thirdItem = document.getElementById('third');

const firstItemBar = document.getElementById('firstBar');
const secondItemBar = document.getElementById('secondBar');
const thirdItemBar = document.getElementById('thirdBar');

const previous = document.getElementById('previous');
const next = document.getElementById('next');

const itemsArr = [firstItem,secondItem,thirdItem];
const itemsBarArr = [firstItemBar,secondItemBar,thirdItemBar];

let previousItemNum = 2;
let activeItemNum = 0;


previous.addEventListener('click', ()=>{
    if(activeItemNum === 0) {
        activeItemNum = 2;
        previousItemNum = 0;
        slider();
    }else {
        previousItemNum = activeItemNum;
        activeItemNum -= 1;
        slider();
    }
})

next.addEventListener('click', ()=>{
    if(activeItemNum === 2) {
        activeItemNum = 0;
        previousItemNum = 2;
        slider('next');
    }else {
        previousItemNum = activeItemNum;
        activeItemNum += 1;
        slider('next');
    }
})


function slider(button) {
    if(button === 'next') {
        itemsArr[previousItemNum].style.display = 'none';
        itemsArr[activeItemNum].style.display = 'flex';
        itemsBarArr[activeItemNum].style.cssText = 'background-color: blue';
        itemsBarArr[previousItemNum].style.cssText = 'background-color: rgba(0, 0, 0, 0.281)';
    }else {
        itemsArr[previousItemNum].style.display = 'none';
        itemsArr[activeItemNum].style.display = 'flex';
        itemsBarArr[activeItemNum].style.cssText = 'background-color: blue';
        itemsBarArr[previousItemNum].style.cssText = 'background-color: rgba(0, 0, 0, 0.281)';
    }
}