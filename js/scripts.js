var pizza = function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

pizza.prototype.topping = function(each){

  this.toppings.forEach(function(each){
    return each;
  })
}




$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
    // toppings = document.getElementById("pepperoni").value;
    var toppings = [];
    toppings = $("input:checkbox[name=toppings]:checked").val();
    allToppings = topping(toppings);


    // toppings = "pineapple"

    customersPizza = new pizza(pizzaSize, toppings);
    console.log(customersPizza);
    allToppings = checkbox(toppings);

    console.log(allToppings);


  });
});
