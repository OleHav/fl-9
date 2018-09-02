function userCard(key) {
    let balance = 100,
        transactionLimit = 100,
        historyLogs = []; /*array of objects which contains information about card`s operations and transactions*/
    const tax = 0.5;
    const totalPercent = 100;
  
    return {
        getCardOptions() {
            return {key, balance, transactionLimit, historyLogs};
        },
             
        putCredits(amountOfCredits) {
            balance = balance + amountOfCredits;
  
            historyLogs.push({
                operationType: 'Received credits',
                credits: amountOfCredits,
                operationTime: new Date().toLocaleString('en-GB')
            });
        },
              
        takeCredits(amountOfCredits) {
            balance = balance - amountOfCredits;
  
            historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: amountOfCredits,
                operationTime: new Date().toLocaleString('en-GB')
            });
        },
            
        setTransactionLimit(amountOfCredits) {
            transactionLimit = amountOfCredits;
  
            historyLogs.push({
                operationType: 'Transaction limit change',
                credits: amountOfCredits,
                operationTime: new Date().toLocaleString('en-GB')
            });
        },
            
        transferCredits(amountOfCredits, card) {
            const totalAmount = amountOfCredits * tax / totalPercent + amountOfCredits;
            
            if (totalAmount > balance || totalAmount > transactionLimit) {
                console.log(`Transaction denied! Sum of credit is bigger than remaining balance or transaction limit.`);
            } else {
                this.takeCredits(totalAmount);
                card.putCredits(amountOfCredits);
            }
        }
    };
}

function UserAccount(userName) {
    this.name = userName;
    this.cardsForUser = [];
    
    this.addCard = function() {
        const maxCardsForUser = 3;
            if (this.cardsForUser.length < maxCardsForUser) {
                this.cardsForUser.push(userCard(this.cardsForUser.length + 1));
            }
    };
    this.getCardByKey = function(key) { 
        this.cardsForUser[key - 1]; 
    }
}