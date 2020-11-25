const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show success outline
function showSuccess(input) {
  input.parentElement.classList.remove('error');
  input.parentElement.classList.add('success');
}

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  formControl.classList.remove('success');
  formControl.classList.add('error');
  small.textContent = message;
}

//Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not vaild');
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, minLen, maxLen) {
  if (input.value.length < minLen) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${minLen} characters`
    );
  } else if (input.value.length > maxLen) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${maxLen} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check passwords match
function checkPaswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}

// Get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listners
form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 15);
  checkEmail(email);
  checkPaswordsMatch(password, password2);
});
