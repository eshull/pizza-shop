function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
}



function Toppings(topping1, topping2, topping3, topping4){
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.topping4 = topping4;
}

// pizza.prototype.customersToppings = function(topping1, topping2, topping3, topping4) {
//   this.toppings = topping1, + topping2, + topping3, + topping4;
// }

Toppings.prototype.customersToppings = function() {
    return this.topping1 + ", " + this.topping2 + ", " + this.topping3 + ", " + this.topping4;
}

function checkIfUndefined(one, two, three, four) {
  toppingsChecked = [];
  if (one === undefined) {
    one = "";
  } else if (two === undefined) {
    two = "";
  } else if (three === undefined) {
    three = "";
  } else if (four === undefined) {
    four = "";
  }
  toppingsChecked.push([one, two, three, four])
  return toppingsChecked;
}


$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("input:radio[name=pizzaSize]:checked").val();

    var topping1 = $('input:checkbox[name=pepperoni]:checked').val();
    var topping2 = $('input:checkbox[name=olives]:checked').val();
    var topping3 = $('input:checkbox[name=mushroom]:checked').val();
    var topping4 = $('input:checkbox[name=sausage]:checked').val();

    var toppingsChecked = checkIfUndefined(topping1, topping2, topping3, topping4);
    console.log(toppingsChecked);
    customersPizza = new Pizza(pizzaSize);
    toppingsOrdered = new Toppings(topping1, topping2, topping3, topping4)

    customersPizza.toppings.push(toppingsOrdered);
    // customersPizza.toppings.push(toppingsOrdered);

    console.log(customersPizza);

     $(".results").html("<li>" + customersPizza.size + "</li>" + "<li>" + customersPizza.toppings[0].customersToppings() + "</li>");


  });
});
