function Pizza(name, size) {
  this.name = name;
  this.size = size;
  this.toppings = [];
  this.cost = [];
}



function Toppings(topping1, topping2, topping3, topping4){
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.topping4 = topping4;
}

function Cost(first, second, third, fourth) {

  this.first = 2;
  this.second = 2;
  this.third = 2;
  this.fourth = 2;
}

// Cost.prototype.extraToppings = function() {
//   return customersPizza.cost = this.first + this.second + this.third + this.fourth + 10
// }

Toppings.prototype.customersToppings = function() {
    return this.topping1 + " " + this.topping2 + " " + this.topping3 + " " + this.topping4;
}

function Name(customer) {
  this.name = customer;
}

Name.prototype.customerName = function() {
  return this.name;
}

function calculateBasePrice(pizza) {
  if (pizza === "Small") {
    return 14;
  } else if (pizza === "Medium") {
    return 16;
  } else if (pizza === "Large") {
    return 18;
  }
}

function checkIfToppingIsOrdered(one) {
    // toppingsChecked = [];
    if (one === undefined) {
      one = "";
      return one;
    } else {
        return one;
      }
  }

  function checkToppingCost(x){
    if (x === undefined) {
      return 0;
    } else {
      return 2;
    }
  }

  function pizzaCostCalculator(a,b,c,d,e) {
    return (a + b + c + d + e);
  }



$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    var customer = $("#customer").val();
    console.log(customer);
    var pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
    var basePrice = calculateBasePrice(pizzaSize);
    console.log(basePrice);
    var topping1 = checkIfToppingIsOrdered($('input:checkbox[name=pepperoni]:checked').val());
    var topping2 = checkIfToppingIsOrdered($('input:checkbox[name=olives]:checked').val());
    var topping3 = checkIfToppingIsOrdered($('input:checkbox[name=mushroom]:checked').val());
    var topping4 = checkIfToppingIsOrdered($('input:checkbox[name=sausage]:checked').val());
    console.log(topping1, topping2, topping3, topping4);
    var topping1Cost = checkToppingCost($('input:checkbox[name=pepperoni]:checked').val());
    var topping2Cost = checkToppingCost($('input:checkbox[name=olives]:checked').val());
    var topping3Cost = checkToppingCost($('input:checkbox[name=mushroom]:checked').val());
    var topping4Cost = checkToppingCost($('input:checkbox[name=sausage]:checked').val());
    console.log(topping1Cost, topping2Cost, topping3Cost, topping4Cost);
    var pizzaTotal = pizzaCostCalculator(basePrice, topping1Cost, topping2Cost, topping3Cost, topping4Cost);
    console.log(pizzaTotal);

    customerNew = new Name(customer);
    customersPizza = new Pizza(customerNew, pizzaSize);

    toppingsOrdered = new Toppings(topping1, topping2, topping3, topping4);
    console.log(topping1, topping2, topping3, topping4);


    customersPizza.toppings.push(toppingsOrdered);
    customersPizza.cost.push(pizzaTotal);

    console.log(customersPizza);
    console.log();

     $(".results").html("<h1>" + "ORDER FOR: " + customersPizza.name.customerName() + "</h1>" +"<h3>" + "Pizza Size:" + "</h3>" + "<li>" + customersPizza.size + "</li>" + "<h3>" + "Pizza Toppings:" + "</h3>" + "<li>" + customersPizza.toppings[0].customersToppings() + "</li>" + "<h3>" + "Pizza Cost:" + "</h3>"  + "<li>" + "$"+ customersPizza.cost + "</li>");


  });
});
