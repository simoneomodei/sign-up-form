const pswInput = document.getElementById("password");
const confirmPswInput = document.getElementById("confimr_password");

const pswValidity = pswInput.validity;

const checkPsw = () => {
  if (pswValidity.valueMissing) {
    pswInput.setCustomValidity("Prova");
  }
};
