const prompt = require("prompt-sync")();

const deposit = () => {

    while(true){
        const depositAmount = prompt("Enter the deposit amount : ")
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) ||  numberDepositAmount <= 0){
            console.log("Invalid amount")
        }else{
            return numberDepositAmount;
        }
    }
};

const depositAmount = deposit();
console.log(depositAmount);