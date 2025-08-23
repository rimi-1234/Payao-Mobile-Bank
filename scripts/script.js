  const mobileNumber = document.getElementById('js-number-phone');
  const pinNumber =document.getElementById('js-pin-number');

const btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", function (event) {
  event.preventDefault();

    const validMobileCheck=mobileNumber.value;
    const validPinCheck= parseInt(pinNumber.value);

  
  const validPhn = "01783540888";
  const validPinNumber = 1234;

  if (validMobileCheck  !== validPhn) {
    alert("invalid phn number");
    return;
  }

  if (validPinNumber !== validPinCheck) {
    alert("invalid pin number");
    return;
  }
  window.location.href = "./home.html";
   
});
