let promise = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            let promptAnswer = confirm(`Do you want to get money?`);
            promptAnswer ? resolve() : reject();
        }, 1000)
    }
);

promise
    .then(
        () => {
            let moneyAmount = prompt(`Enter amount`);
            return moneyAmount;
        },
        () => {
            let languageInfo = prompt(`Choose language for info: Ukrainian, German, English`);
            return Promise.reject(languageInfo);
        }
    )
    .then(
        (moneyAmount) => {
            let moneyCurrency = prompt(`Choose currency: USD, EUR, UAH`);
            return { moneyAmount, moneyCurrency };
        },
        (languageInfo) => {
            let userEmail = prompt(`Enter email`);
            return Promise.reject({ languageInfo, userEmail })
        }
    )
    .then(
        (data) => {
            console.log(`Take your ${data.moneyAmount} ${data.moneyCurrency}, please`)
        },
        (data) => {
            console.log(`Information about the account was sent to the ${data.userEmail} in ${data.languageInfo}`)
        }
    )
    .then(
        () => {
            console.log(`Goodbye and have a good day!`)
        }
    )