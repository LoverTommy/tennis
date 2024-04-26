const logInForm = document.forms['logInForm'];

const numberInput = logInForm.elements.number;

const numberError = document.getElementById('error');

logInForm.addEventListener('submit', (eo)=>{

    if(numberError.style.display === 'inline') {
        eo.preventDefault();
    }
})

numberInput.addEventListener('change', ()=>{
    if(numberInput.value.length != 9) {
        numberError.style.display = 'inline';
    }else {
        numberError.style.display = 'none';
    }
})