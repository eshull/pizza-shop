var pizza = function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

pizza.prototype.topping = function(){
  this.toppings = toppingInput;
}


$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("input:radio[name=pizzaSize]:checked").val();

    toppings = "pineapple"

    customersPizza = new pizza(pizzaSize, toppings);
    console.log(customersPizza);



  });
});
