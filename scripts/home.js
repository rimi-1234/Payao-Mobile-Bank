let bankNumber = "";
let tranctionData = [];
function getValue(Id) {
  bankNumber = document.getElementById(Id).value;
  return bankNumber;
}
function getParseIntValue(Id) {
  const bankNumber = parseInt(document.getElementById(Id).value);
  return bankNumber;
}
function getInnerText(Id) {
  const ammount = parseInt(document.getElementById(Id).innerText);
  return ammount;
}
function setInnerText(id, ammuntTotal) {
  const ammount = document.getElementById(id);
  ammount.innerText = ammuntTotal;
}

let bankNumberChck = "";
const btnAddMoney = document.getElementById("btnAddMoney");
btnAddMoney.addEventListener("click", function (event) {
  event.preventDefault();

  bankNumberChck = getValue("js-bank-number");

  const validPinCheck = getParseIntValue("js-pin-number");

  let ammuntTotal = getInnerText("js-intial-one");

  const ammuntTake = getParseIntValue("js-ammunt");

  if (bankNumber.length > 11) {
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

  setInnerText("js-intial-one", ammuntTotal);
  const now = new Date();
  const options = { hour: "2-digit", minute: "2-digit", hour12: true };
  const time = now.toLocaleTimeString("en-US", options);
  let data = {
    name: "Add Money",
    date: time
  };
  tranctionData.push(data);

  
});

const tranferMoney = document.getElementById("btnTranfermoney");

tranferMoney.addEventListener("click", function (event) {
  event.preventDefault();

  const accountNumber = getValue("js-account-number");

  const validPinCheck = getParseIntValue("js-pin-number");
  const ammuntTranferTake = getParseIntValue("js-ammunt-transfer");

  let ammuntTotal = getInnerText("js-intial-one");

  if (accountNumber !== bankNumberChck) {
    alert("invalid bank number");
    return;
  }

  if (validPinCheck.length > 4) {
    alert("invalid pin number");
    return;
  }

  ammuntTotal = ammuntTotal - ammuntTranferTake;
  if (ammuntTotal < 0) {
    alert("invalid ammunt");
    return;
  }

  setInnerText("js-intial-one", ammuntTotal);
});
const btnPayBill = document.getElementById("btnPayBill");

btnPayBill.addEventListener("click", function (event) {
  event.preventDefault();

  const accountNumber = getValue("js-biller-account-number");

  const validPinCheck = getParseIntValue("js-pin-number");
  let ammuntTotal = getInnerText("js-intial-one");

  const ammuntTake = getParseIntValue("js-pay-ammunt");

  if (accountNumber !== bankNumberChck) {
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

  setInnerText("js-intial-one", ammuntTotal);
});
const btnbonusMoney = document.getElementById("btnbonusMoney");
const validCopun = "b4un4";
btnbonusMoney.addEventListener("click", function (event) {
  event.preventDefault();

  const copun = getValue("js-copun");

  let ammuntTotal = getInnerText("js-intial-one");

  if (copun !== validCopun) {
    alert("invalid cupon number");
    return;
  }

  ammuntTotal = ammuntTotal + 1000;
  if (ammuntTotal < 0) {
    alert("invalid ammunt");
    return;
  }

  setInnerText("js-intial-one", ammuntTotal);
});

const btnWuthdrawMoney = document.getElementById("btnWuthdrawMoney");

btnWuthdrawMoney.addEventListener("click", function (event) {
  event.preventDefault();

  const agentNumber = getValue("js-agent-number");

  const validPinCheck = getParseIntValue("js-pin-number");
  const ammuntWithdrawTake = getParseIntValue("js-ammunt-withdraw");

  let ammuntTotal = getInnerText("js-intial-one");

  if (agentNumber.length > 11) {
    alert("invalid bank number");
    return;
  }

  if (validPinCheck.length > 4) {
    alert("invalid pin number");
    return;
  }

  ammuntTotal = ammuntTotal - ammuntWithdrawTake;
  if (ammuntTotal < 0) {
    alert("invalid ammunt");
    return;
  }
  const now = new Date();
  const options = { hour: "2-digit", minute: "2-digit", hour12: true };
  const time = now.toLocaleTimeString("en-US", options);
  setInnerText("js-intial-one", ammuntTotal);
    let data = {
    name: "withdraw",
    date: time
  };
  tranctionData.push(data);
});

function handleToggle(formId) {
  const forms = document.getElementsByClassName("froms");

  // Hide all forms
  for (const form of forms) {
    form.style.display = "none";
  }

  // Show the selected form
  document.getElementById(formId).style.display = "block";
}

// const withdrawMoneyFrom = document.getElementById("js-withdraw-money-from");
document.getElementById("js-add-money").addEventListener("click", function () {
  handleToggle("js-add-parent");
});
document.getElementById("js-Cashout").addEventListener("click", function () {
  handleToggle("js-withdraw-parent");
});
document.getElementById("js-tranfer").addEventListener("click", function () {
  handleToggle("js-transfer-parent");
});
document.getElementById("js-bonus").addEventListener("click", function () {
  handleToggle("js-bonus-parent");
});
document.getElementById("js-tranction").addEventListener("click", function () {
  handleToggle("js-transaction-parent");
});
document.getElementById("js-pay-bill").addEventListener("click", function () {
  handleToggle("js-payBil-parent");
});

document.getElementById('all-section').addEventListener('click', function(e){
    const div=document.createElement('div');
    
    const container= document.getElementById('container');
   
if (e.target.tagName.toLowerCase() === 'button') {
     for(const data of tranctionData){
      console.log(data);
      

   
      div.innerHTML=`          <div class="flex bg-white items-center p-4 w-full rounded-xl mb-3">
            <div class="flex justify-between w-full items-center">
              <div class="flex justify-between items-center">
                <div
                  class=" p-2 rounded-full bg-[#f4f5f7] mr-2"
                >
                  <img src="./assets/wallet1.png" alt="" />
                </div>

                <div>
                  <h2 class="font-bold text-gray-600">${data.name}</h2>
                  <p>Today ${data.date}</p>
                </div>
              </div>
               
                <i class="fa-solid fa-ellipsis-vertical"></i>
     `
      
    }
}
    
   
    
   container.appendChild(div);
  

})