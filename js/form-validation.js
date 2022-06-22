const placeholder = document.querySelectorAll(".placeholder");
const required = document.getElementsByClassName("required");
const confirm = document.querySelector(".button");

confirm.onclick = () => {
  for (let i = 0; i < placeholder.length; i++) {
    const element = placeholder[i];
    if (element.value === "") {
      requiredValidation(i)
    }
    else {
      confirmedValidation(i)
    }

  }
}

function requiredValidation(i) {
  placeholder[i].style.border = '1px solid red';
  required[i].style.display = 'block'
}

function confirmedValidation(i) {
  placeholder[i].style.border = '1px solid green';
  required[i].style.display = 'none'
}

