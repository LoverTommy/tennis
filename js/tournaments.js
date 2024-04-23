const openClose1 = document.getElementById('openCloseList1');
const list1 = document.getElementById('list1')
list1.style.height = '10px';

openClose1.addEventListener('click', ()=>{
    if(list1.style.height === '10px') {
        list1.style.height = 'max-content';
        openClose1.style.cssText = 'transform: scaleY(1)';
    }else {
        list1.style.height = '10px';
        openClose1.style.cssText = 'transform: scaleY(-1)';
    }
})

const openClose2 = document.getElementById('openCloseList2');
const list2 = document.getElementById('list2')
list2.style.height = '10px';

openClose2.addEventListener('click', ()=>{
    if(list2.style.height === '10px') {
        list2.style.height = 'max-content';
        openClose2.style.cssText = 'transform: scaleY(1)';
    }else {
        list2.style.height = '10px';
        openClose2.style.cssText = 'transform: scaleY(-1)';
    }
})

const openClose3 = document.getElementById('openCloseList3');
const list3 = document.getElementById('list3')
list3.style.height = '10px';

openClose3.addEventListener('click', ()=>{
    if(list3.style.height === '10px') {
        list3.style.height = 'max-content';
        openClose3.style.cssText = 'transform: scaleY(1)';
    }else {
        list3.style.height = '10px';
        openClose3.style.cssText = 'transform: scaleY(-1)';
    }
})

const openClose4 = document.getElementById('openCloseList4');
const list4 = document.getElementById('list4')
list4.style.height = '10px';

openClose4.addEventListener('click', ()=>{
    if(list4.style.height === '10px') {
        list4.style.height = 'max-content';
        openClose4.style.cssText = 'transform: scaleY(1)';
    }else {
        list4.style.height = '10px';
        openClose4.style.cssText = 'transform: scaleY(-1)';
    }
})
