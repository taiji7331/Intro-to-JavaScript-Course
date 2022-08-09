class Dish {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    getPriceWithTax(tax) {
        return this.price + (this.price * tax);
    }
}

let pasta = new Dish("Italian pasta", 9.55);
let rice = new Dish("Rice with veggies", 8.65);
let chicken = new Dish("Chicken with potatoes", 15.55);
let pizza = new Dish("Vegetarian pizza", 6.45);

function printMenu(withTax) {
    let menu = [pasta, rice, chicken, pizza];
    const headerTax = "Prices with 20% tax:";
    const headerNoTax = "Prices without tax:";
    let header;
    if(withTax) {
        header = headerTax;
    } else {
        header = headerNoTax;
    }
    console.log(header);
    for(dish of menu) {
        if(withTax) {
            console.log(`Dish: ${dish.name} Price (incl. tax): \$${dish.getPriceWithTax(0.2)}`);
        } else {
            console.log(`Dish: ${dish.name} Price (before tax): \$${dish.price}`);
        }
    }
}

printMenu(true);
printMenu(false);