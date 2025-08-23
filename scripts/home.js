const bankNumber = document.getElementById("js-bank-number");
const agentNumber = document.getElementById("js-agent-number");
const ammunt = document.getElementById("js-ammunt");
const ammuntWithdraw = document.getElementById("js-ammunt-withdraw");
const ammuntPrimary = document.getElementById("js-intial-one");
const pinNumber = document.getElementById("js-pin-number");
const addMoney = document.getElementById("js-add-money");
const cashout = document.getElementById("js-Cashout");

const btnAddMoney = document.getElementById("btnAddMoney");
btnAddMoney.addEventListener("click", function (event) {
  event.preventDefault();

  const validBankNumberCheck = bankNumber.value;
  const validPinCheck = parseInt(pinNumber.value);
  let ammuntTake = parseInt(ammunt.value);

  let ammuntTotal = parseInt(ammuntPrimary.innerText);

  if (validBankNumberCheck.length > 11) {
    alert("invalid bank number");
    return;
  }

  if (validPinCheck.length > 4) {
    alert("invalid pin number");
    return;
  }

  ammuntTotal = ammuntTotal + ammuntTake;
   if (ammuntTotal < 0) {
    alert("invalid ammunt");
    return;
  }

  ammuntPrimary.innerText = ammuntTotal;
});
const btnWuthdrawMoney = document.getElementById("btnWuthdrawMoney");

btnWuthdrawMoney.addEventListener("click", function (event) {
  event.preventDefault();

  const validagentNumberCheck = agentNumber.value;
  const validPinCheck = parseInt(pinNumber.value);
  let ammuntTake = parseInt(ammuntWithdraw.value);

  let ammuntTotal = parseInt(ammuntPrimary.innerText);

  if (validagentNumberCheck.length > 11) {
    alert("invalid bank number");
    return;
  }

  if (validPinCheck.length > 4) {
    alert("invalid pin number");
    return;
  }

  ammuntTotal = ammuntTotal - ammuntTake;
  if (ammuntTotal < 0) {
    alert("invalid ammunt");
    return;
  }
  ammuntPrimary.innerText = ammuntTotal;
});
const addMoneyfrom = document.getElementById("js-add-money-from");
const withdrawMoneyFrom = document.getElementById("js-withdraw-money-from");
addMoney.addEventListener("click", function () {
  addMoneyfrom.style.display = "block";
  withdrawMoneyFrom.style.display = "none";
});
cashout.addEventListener("click", function () {
  addMoneyfrom.style.display = "none";
  withdrawMoneyFrom.style.display = "block";
});
