const input = document.querySelector('.loginInput');
const button = document.querySelector('.loginButton');

const validateInput = ({target}) => {
    if (target.value.length > 2){
        button.removeAttribute('disabled');  
    }else{
        button.setAttribute('disabled', '')
    }
}

input.addEventListener('input', validateInput)

