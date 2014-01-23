window.onload = function() {

  GSpreadsheet.load("0ArtYn0CJ_Ik8dDl0bGtHUE1vbVNBR3Y5TjMtZWhLU3c", { index: 'element' }, function(gs) {

    var row = gs.select('header');
    document.getElementById("header_1").innerHTML = row.one;

    var row = gs.select('header');
    document.getElementById("header_2").innerHTML = row.two;

    var row = gs.select('header');
    document.getElementById("header_3").innerHTML = row.three;

    var row = gs.select('header');
    document.getElementById("header_4").innerHTML = row.four;

    var row = gs.select('header');
    document.getElementById("header_5").innerHTML = row.five;

    var row = gs.select('menu_intro');
    document.getElementById("menu_intro_1").innerHTML = row.one;

    var row = gs.select('menu_intro');
    document.getElementById("menu_intro_2").innerHTML = row.two;

    var row = gs.select('menu_intro');
    document.getElementById("menu_intro_3").innerHTML = row.three;

    var row = gs.select('menu_intro');
    document.getElementById("menu_intro_4").innerHTML = row.four;

    var row = gs.select('menu_intro');
    document.getElementById("menu_intro_5").innerHTML = row.five;

    var row = gs.select('menu_intro');
    document.getElementById("menu_intro_6").innerHTML = row.six;

    var row = gs.select('menu_intro');
    document.getElementById("menu_intro_7").innerHTML = row.seven;

    var row = gs.select('menu_intro');
    document.getElementById("menu_intro_8").innerHTML = row.eight;

    var row = gs.select('menu_intro');
    document.getElementById("menu_intro_9").innerHTML = row.nine;

    var row = gs.select('menu_item');
    document.getElementById("menu_item_1").innerHTML = row.one;

    var row = gs.select('menu_item_price');
    document.getElementById("menu_item_price_1").innerHTML = row.one;

    var row = gs.select('menu_item');
    document.getElementById("menu_item_2").innerHTML = row.two;

    var row = gs.select('menu_item_price');
    document.getElementById("menu_item_price_2").innerHTML = row.two;

    var row = gs.select('menu_item');
    document.getElementById("menu_item_3").innerHTML = row.three;

    var row = gs.select('menu_item_price');
    document.getElementById("menu_item_price_3").innerHTML = row.three;

    var row = gs.select('menu_item');
    document.getElementById("menu_item_4").innerHTML = row.four;

    var row = gs.select('menu_item_price');
    document.getElementById("menu_item_price_4").innerHTML = row.four;

    var row = gs.select('menu_item');
    document.getElementById("menu_item_5").innerHTML = row.five;

    var row = gs.select('menu_item_price');
    document.getElementById("menu_item_price_5").innerHTML = row.five;

    var row = gs.select('menu_item');
    document.getElementById("menu_item_6").innerHTML = row.six;

    var row = gs.select('menu_item_price');
    document.getElementById("menu_item_price_6").innerHTML = row.six;

    var row = gs.select('menu_item');
    document.getElementById("menu_item_7").innerHTML = row.seven;

    var row = gs.select('menu_item_price');
    document.getElementById("menu_item_price_7").innerHTML = row.seven;

    var row = gs.select('menu_item');
    document.getElementById("menu_item_8").innerHTML = row.eight;

    var row = gs.select('menu_item_price');
    document.getElementById("menu_item_price_8").innerHTML = row.eight;

    var row = gs.select('topping');
    document.getElementById("topping_1").innerHTML = row.one;

    var row = gs.select('topping');
    document.getElementById("topping_2").innerHTML = row.two;

    var row = gs.select('topping');
    document.getElementById("topping_3").innerHTML = row.three;

    var row = gs.select('topping');
    document.getElementById("topping_4").innerHTML = row.four;

    var row = gs.select('topping');
    document.getElementById("topping_5").innerHTML = row.five;

    var row = gs.select('topping');
    document.getElementById("topping_6").innerHTML = row.six;

    var row = gs.select('topping');
    document.getElementById("topping_7").innerHTML = row.seven;

    var row = gs.select('topping');
    document.getElementById("topping_8").innerHTML = row.eight;

    var row = gs.select('topping');
    document.getElementById("topping_9").innerHTML = row.nine;

    var row = gs.select('salsa');
    document.getElementById("salsa_1").innerHTML = row.one;

    var row = gs.select('salsa');
    document.getElementById("salsa_2").innerHTML = row.two;

    var row = gs.select('salsa');
    document.getElementById("salsa_3").innerHTML = row.three;

    var row = gs.select('salsa');
    document.getElementById("salsa_4").innerHTML = row.four;

    var row = gs.select('salsa');
    document.getElementById("salsa_5").innerHTML = row.five;

    var row = gs.select('salsa');
    document.getElementById("salsa_6").innerHTML = row.six;

    var row = gs.select('salsa');
    document.getElementById("salsa_7").innerHTML = row.seven;

    var row = gs.select('salsa');
    document.getElementById("salsa_8").innerHTML = row.eight;

    var row = gs.select('salsa');
    document.getElementById("salsa_9").innerHTML = row.nine;

    var row = gs.select('drink');
    document.getElementById("drink_1").innerHTML = row.one;

    var row = gs.select('drink');
    document.getElementById("drink_2").innerHTML = row.two;

    var row = gs.select('drink');
    document.getElementById("drink_3").innerHTML = row.three;

    var row = gs.select('drink');
    document.getElementById("drink_4").innerHTML = row.four;

    var row = gs.select('drink');
    document.getElementById("drink_5").innerHTML = row.five;

    var row = gs.select('drink');
    document.getElementById("drink_6").innerHTML = row.six;

    var row = gs.select('drink');
    document.getElementById("drink_7").innerHTML = row.seven;

    var row = gs.select('drink');
    document.getElementById("drink_8").innerHTML = row.eight;

    var row = gs.select('drink_price');
    document.getElementById("drink_price_1").innerHTML = row.one;

    var row = gs.select('drink_price');
    document.getElementById("drink_price_2").innerHTML = row.two;

    var row = gs.select('drink_price');
    document.getElementById("drink_price_3").innerHTML = row.three;

    var row = gs.select('drink_price');
    document.getElementById("drink_price_4").innerHTML = row.four;

    var row = gs.select('drink_price');
    document.getElementById("drink_price_5").innerHTML = row.five;

    var row = gs.select('drink_price');
    document.getElementById("drink_price_6").innerHTML = row.six;

    var row = gs.select('drink_price');
    document.getElementById("drink_price_7").innerHTML = row.seven;

    var row = gs.select('drink_price');
    document.getElementById("drink_price_8").innerHTML = row.eight;
  });
}

function timedRefresh(timeoutPeriod) {
  setTimeout("location.reload(true);",timeoutPeriod);
}
