const form = document.getElementById('form');
const username = document.getElementById('phone');
const email = document.getElementById('email');
const phone =document.getElementById('phone');
const message=document.getElementById('message')

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// show success message
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//check email is valid
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Enail is not valid');
  }
}

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//check input lenght
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// check passwords match

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}

// check date is valid
function checkDate(input) {
    // Date regex pattern: YYYY-MM-DD
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (dateRegex.test(input.value.trim())) {
      if (isValidDate(input.value.trim())) {
        showSuccess(input);
      } else {
        showError(input, 'Invalid date');
      }
    } else {
      showError(input, 'Date format must be YYYY-MM-DD');
    }
  }
  
  // isValidDate function to check if a date is valid
  function isValidDate(dateString) {
    const date = new Date(dateString);
    return !isNaN(date);
  }
  

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([phone, email, password, password2]);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});

function showPopup() {
    // Get the form data
    const email = document.getElementById('email').value;
    // Get other form data here
  
    // Create the content to display in the popup
    const popupContent = `
      <h3>Form Data:</h3>
      <p><strong>Email:</strong> ${email}</p>
      <!-- Add other form data here -->
    `;
  
    // Set the content in the popup
    document.querySelector('.popup-content').innerHTML = popupContent;
  
    // Show the popup
    document.querySelector('.popup').style.display = 'block';
  }
  
  function hidePopup() {
    // Hide the popup
    document.querySelector('.popup').style.display = 'none';
  }
  