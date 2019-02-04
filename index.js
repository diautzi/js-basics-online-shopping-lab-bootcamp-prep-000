var cart = [];
var price = (Math.floor(Math.random() * Math.floor(100)))

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // var price = (Math.floor(Math.random() * Math.floor(100)))
 // write your code here
 var price = (Math.floor(Math.random() * 100));
 var obj = {
 itemName: item,
 itemPrice: price }

 cart.push(obj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here

  if ( cart.length === 0)
      return `Your shopping cart is empty.`;
 
      var newArr = [];
      for(let key in obj) {
          newArr.push(obj["itemName"] + " at $" + obj["itemPrice"]);
        }
      var myString = "In your cart, you have ";
      if (newArr.length === 1 ) {
        myString+= newArr + ".";
      }
      else if (newArr.length === 2) {
        myString+= newArr[0] + " and " + newArr[1] + ".";
      }
      else if (newArr.length >2 ) {
        var lastElement = newArr.pop();
        var otherItems = newArr.join(", ");
        myString += otherItems + ", and " + lastElement + ".";
      }
      console.log(myString);
}


function total() {
  // write your code here
  var total =0;
  for( var i=0; i< cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here

  if ( cart.length > 0) {
    for( let i=0; i< cart.length; i++) {
      if ( cart[i].hasOwnProperty(item) === true) {
        cart.splice(i, 1);
        console.log(cart);
      }
  
  if ( cart[i].hasOwnProperty(item) === false) {
    console.log( "That item is not in your cart.")
  }
  }
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
  return cart;
}
