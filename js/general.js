const openStatistic = document.getElementById('openStatistics');
const statistics = document.getElementById('statistics');
const media = window.matchMedia('(max-width: 1200px)')

openStatistic.addEventListener('click', (eo)=>{
    if(media.matches) {
        (statistics.style.display === 'none') ? statistics.style.display='grid' : statistics.style.display='none';
    }else {
        (statistics.style.display === 'none') ? statistics.style.display='flex' : statistics.style.display='none';
    }

})



const pastButtonFilter = document.getElementById('past');
const currentButtonFilter = document.getElementById('current');
const nextButtonFilter = document.getElementById('next');

const pastActive = document.getElementById('pastActive');
const currentActive = document.getElementById('currentActive');
const nextActive = document.getElementById('nextActive');

const pastList = document.getElementById('pastTournaments')
const currentList = document.getElementById('currentTournaments')
const nextList = document.getElementById('nextTournaments')

let filterButtonsArr = [pastButtonFilter, currentButtonFilter, nextButtonFilter];
let activeBarArr = [pastActive, currentActive, nextActive];
let listsArr = [pastList, currentList, nextList];


pastButtonFilter.addEventListener('click', (eo)=>{
    activeBarArr.splice(0,1);
    listsArr.splice(0,1);
    setActiveList(pastActive, pastList);
});
currentButtonFilter.addEventListener('click', (eo)=>{
    activeBarArr.splice(1,1);
    listsArr.splice(1,1);
    setActiveList(currentActive, currentList);
});
nextButtonFilter.addEventListener('click', (eo)=>{
    activeBarArr.splice(2,1);
    listsArr.splice(2,1);
    setActiveList(nextActive, nextList);
});

function setActiveList(activeBar, activeList) {
    activeBar.style.cssText = 'background-color: rgb(209, 206, 16)';
    activeList.style.display = 'flex';

    for(let i of activeBarArr) {
        i.style.cssText = 'background-color: rgba(0, 0, 0, 0.603)';
        activeBarArr = [pastActive, currentActive, nextActive];
    }

    for(let x of listsArr) {
        x.style.display = 'none';
        listsArr = [pastList, currentList, nextList];
    }
}
