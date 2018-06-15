var pizza = function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
}

pizza.prototype.combineToppings = function(1,2,3,4){

  this.toppings = slice(1,4);
  })
}




$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
    // toppings = document.getElementById("pepperoni").value;
    // var toppings = [];


    var topping1 = $('input:checkbox[name=pepperoni]:checked').val();
    var topping2 = $('input:checkbox[name=olives]:checked').val();
    var topping3 = $('input:checkbox[name=mushroom]:checked').val();
    var topping4 = $('input:checkbox[name=sausage]:checked').val();
    var toppings = combineToppings(topping1, topping2, topping3, topping4);
console.log(topping1, topping2, topping3, topping4);
customersPizza = new pizza(pizzaSize, toppings);



    console.log(customersPizza);
    allToppings = checkbox(toppings);

    console.log(allToppings);


  });
});
