//Each button function adds the value of the button to an array.
//The array is evaluated when = is pressed.
//This returns an output value which is printed in the screen.

$(document).ready(function() {
    // all custom jQuery will go here
    var calculationArr = Array();
    var numberConcat = Array();
    var value;

    $('#AC').click(function(){
        calculationArr = [];
        numberConcat = [];
        $( "#output" ).text("0");

    });

    $('#1').click(function(){
        value = $(this).val();
        number(value);

    });

    $('#2').click(function(){
        value = $(this).val();
        number(value);
    });

    $('#3').click(function(){
        value = $(this).val();
        number(value);
    });

    $('#4').click(function(){
        value = $(this).val();
        number(value);
    });

    $('#5').click(function(){
        value = $(this).val();
        number(value);
    });

    $('#6').click(function(){
        value = $(this).val();
        number(value);
    });

    $('#7').click(function(){
        value = $(this).val();
        number(value);
    });

    $('#8').click(function(){
        value = $(this).val();
        number(value);
    });

    $('#9').click(function(){
        value = $(this).val();
        number(value);
    });

    $('#0').click(function(){
        value = $(this).val();
        number(value);
    });

    $('#plus').click(function(){
        value = $(this).val();
        operator(value);
    });

    $('#minus').click(function(){
        value = $(this).val();
        operator(value);
    });

    $('#divide').click(function(){
        value = $(this).val();
        operator(value);
    });

    $('#times').click(function(){
        value = $(this).val();
        operator(value);
    });

    $('#is').click(function(){
        var resultS = calculationArr.join('');
        resultS = eval(resultS);
        resultS = Math.round(resultS * 100) / 100;
        var output = String(resultS);
        if (output > 999999999) {
            $( "#output" ).text('Error!');

        } else {
            $( "#output" ).text(output);
        }
    });

    function number(value) {
        calculationArr.push(value);
        numberConcat.push(value);
        if (numberConcat.length > 8) {
            $( "#output" ).text('Error!');
        } else {
            var Result = numberConcat.join('');
            var output = String(Result);
            $( "#output" ).text(output);
        }

    }

    function operator() {
        calculationArr.push(value);
        numberConcat = [];
        $( "#output" ).text(value);
    }
});



