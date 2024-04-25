const singleButton = document.getElementById('singleButton');
const doubleButton = document.getElementById('doubleButton');

const singleList = document.getElementById('single');
const doubleList = document.getElementById('double');

singleButton.addEventListener('click', ()=> {
    singleButton.style.backgroundColor = 'rgb(158, 158, 241)';
    doubleButton.style.backgroundColor = 'white';

    singleList.style.display = 'flex';
    doubleList.style.display = 'none';
})

doubleButton.addEventListener('click', ()=> {
    singleButton.style.backgroundColor = 'white';
    doubleButton.style.backgroundColor = 'rgb(158, 158, 241)';

    singleList.style.display = 'none';
    doubleList.style.display = 'flex';
} )