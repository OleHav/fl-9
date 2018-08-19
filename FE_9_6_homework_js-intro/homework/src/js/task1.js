let amountOfMoney = prompt(`Input amount of money, please (use dot for non-integer values)`,``);
let discount = prompt(`Input discount, please (> or =0)`,``);

let priceWithDiscount = amountOfMoney - amountOfMoney * discount/100;
let savedMoney = amountOfMoney - priceWithDiscount;

if(amountOfMoney >= 0 && amountOfMoney !== `` && amountOfMoney !== null &&
    discount >= 0 && discount <= 100 && discount !== `` && discount !== null) {    
        console.log(
        ` Price without discount:`, amountOfMoney, `\n`,
        `Discount:`, discount+`%`, `\n`,
        `Price with discount:`, Math.round(priceWithDiscount*100)/100, `\n`,
        `Saved:`, Math.round(savedMoney*100)/100); 
    } else {
    console.log(`Invalid data`);
}