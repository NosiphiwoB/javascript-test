var groceryList = [{name:'hfhg', price:20 , quantity: 2}]
var total= 0

// Create a function that adds to groceryList:
const addToGroceryList = (item) => {
    groceryList.push(item)
};
console.log(addToGroceryList({name:'Pap', price:20 , quantity: 1}))
console.log("added item",groceryList)



// Create a function that removes items based on index groceryList:
const removeBasedOnIndex = (item) => {
  groceryList.splice(0,1) 
}
console.log(removeBasedOnIndex(0))
// output: groceryList must be [{name:'Pap', price:20 , quantity: 1}]


// Create a function to calculate the total price of items based on price and quantity:
const calculateTotal = () => {

return total + price * quantity

}

// function must return 20
console.log(calculateTotal())


// console.log(groceryList)