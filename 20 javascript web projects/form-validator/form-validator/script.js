const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show error messege inside small element
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// make the input border green
const showSucess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// validate the email
function checkEmail(email) {
     const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (re.test(email.value.trim())) {
      showSucess(email);
    } else {
      showError(email, 'Email  is not valid')
    }
}


// return the input name with frist letter capital
const getFieldName = input => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


const checkRequired = (inputArr) => {
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSucess(input)
    }
  });
} 

// check legnth of input 
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} should has at least ${min} charcters`)
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} should be less than ${max} charcters`)
  }
}

const checkPassMatch = (password, password2) => {
  if (password.value !== password2.value) {
    showError(password2, 'passowrd not match')
  }
}


form.addEventListener('submit', function(ev) {
  ev.preventDefault(); //to prevent click flash (function work only when click)

  checkRequired([username, email, password, password2]);
  checkLength(username, 4, 16);
  checkLength(password, 3, 15);
  checkEmail(email);
  checkPassMatch(password, password2)
})