  const bankNumber = document.getElementById('js-bank-number');
  const ammunt =document.getElementById('js-ammunt');
  const ammuntPrimary =document.getElementById('js-intial-one');
  const pinNumber =document.getElementById('js-pin-number');

const btnAddMoney = document.getElementById("btnAddMoney");
btnAddMoney.addEventListener("click", function (event) {
  event.preventDefault();

    const validBankNumberCheck=bankNumber.value;
    const validPinCheck= parseInt(pinNumber.value);
    let ammuntTake=parseInt(ammunt.value);

    
    let ammuntTotal=parseInt(ammuntPrimary.innerText);

 
  if (validBankNumberCheck.length>11) {
    alert("invalid bank number");
    return;
  }

  if ( validPinCheck.length>4) {
    alert("invalid pin number");
    return;
  }
  ammuntTotal=ammuntTotal+ammuntTake;

  ammuntPrimary.innerText=ammuntTotal;
  

   
});
