let name = "Pizza Party";

const getPizza = () => {
    let qty = 2;
    let seasoningQty = getSeasoning(qty);
    return {
        pizza_quantity: qty,
        seasoning_quantity: seasoningQty
    };
}

function getSeasoning(qty) {
    if(qty === 1) return 1;
    else if(qty >=2) {
        return qty + 1;
    }
}

const pizzaOrder = getPizza(); 

console.log(pizzaOrder);

// {
//     pizza_quantity: qty,
//     seasoning_quantity: seasoningQty
// }