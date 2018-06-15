var pizza = function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
}

var toppings = function Toppings(topping1, topping2, topping3, topping4) {
  this.toppings = topping1, + topping2, + topping3, + topping4;
}

var toppings = function Toppings(topping1, topping2, topping3, topping4){
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.topping4 = topping4;
}




$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("input:radio[name=pizzaSize]:checked").val();

    var topping1 = $('input:checkbox[name=pepperoni]:checked').val();
    var topping2 = $('input:checkbox[name=olives]:checked').val();
    var topping3 = $('input:checkbox[name=mushroom]:checked').val();
    var topping4 = $('input:checkbox[name=sausage]:checked').val();

    console.log(topping1, topping2, topping3, topping4);
    customersPizza = new pizza(pizzaSize);
    customersToppings = new toppings(topping1, topping2, topping3, topping4)

    customersPizza.toppings.push(customersToppings);

        console.log(customersPizza);

  });
});
