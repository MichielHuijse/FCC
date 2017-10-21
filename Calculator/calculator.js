//@Todo Each button function adds the value of the button to an array.
//@The array is evaluated when = is pressed.
//This returns an output value which is printed in the screen.

$(document).ready(function() {
    // all custom jQuery will go here
    var calculationArr = Array();

    $('#1').click(function(){
        var value = $(this).val();
        calculationArr.push(value);

    });

    $('#2').click(function(){
        var value = $(this).val();
        calculationArr.push(value);

    });

    $('#3').click(function(){
        var value = $(this).val();
        calculationArr.push(value);

    });

    $('#4').click(function(){
        var value = $(this).val();
        calculationArr.push(value);

    });

    $('#5').click(function(){
        var value = $(this).val();
        calculationArr.push(value);

    });

    $('#6').click(function(){
        var value = $(this).val();
        calculationArr.push(value);

    });

    $('#7').click(function(){
        var value = $(this).val();
        calculationArr.push(value);

    });

    $('#8').click(function(){
        var value = $(this).val();
        calculationArr.push(value);

    });

    $('#9').click(function(){
        var value = $(this).val();
        calculationArr.push(value);

    });

    $('#is').click(function(){
        var value = $(this).val();
        calculationArr.push(value);
        alert(calculationArr);
    });


});



