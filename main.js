const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//form is submitted, prevent default//
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get the value from the inputs & remove white space//
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === '') {
    //if empty, show error & add error class//
    setErrorFor(username, 'Username cannot be empty!');
  } else {
    //add sucess class//
    setSuccessFor(username);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be empty!');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    //if empty, show error & add error class//
    setErrorFor(password, 'Password cannot be empty!');
  } else {
    //add sucess class//
    setSuccessFor(password);
  }

  if (password2Value === '') {
    setErrorFor(password2, 'Password cannot be blank!');
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, 'Password does not match!');
  } else {
    //add sucess class//
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  //.form-control class//
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  //add error message inside the .small tag//
  small.innerText = message;
  //add error class//
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
