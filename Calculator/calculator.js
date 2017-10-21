//@Todo Each button function adds the value of the button to an array.
//@The array is evaluated when = is pressed.
//This returns an output value which is printed in the screen.

$(document).ready(function() {
    // all custom jQuery will go here
    var calculationArr = Array();

    $('#AC').click(function(){

        calculationArr = [];
        $( "#output" ).text("0");

    });

    $('#1').click(function(){
        var value = $(this).val();
        calculationArr.push(value);
        $( "#output" ).text(value);

    });

    $('#2').click(function(){
        var value = $(this).val();
        calculationArr.push(value);
        $( "#output" ).text(value);
    });

    $('#3').click(function(){
        var value = $(this).val();
        calculationArr.push(value);
        $( "#output" ).text(value);
    });

    $('#4').click(function(){
        var value = $(this).val();
        calculationArr.push(value);
        $( "#output" ).text(value);
    });

    $('#5').click(function(){
        var value = $(this).val();
        calculationArr.push(value);
        $( "#output" ).text(value);
    });

    $('#6').click(function(){
        var value = $(this).val();
        calculationArr.push(value);
        $( "#output" ).text(value);
    });

    $('#7').click(function(){
        var value = $(this).val();
        calculationArr.push(value);
        $( "#output" ).text(value);
    });

    $('#8').click(function(){
        var value = $(this).val();
        calculationArr.push(value);
        $( "#output" ).text(value);
    });

    $('#9').click(function(){
        var value = $(this).val();
        calculationArr.push(value);
        $( "#output" ).text(value);
    });

    $('#0').click(function(){
        var value = $(this).val();
        calculationArr.push(value);
        $( "#output" ).text(value);
    });

    $('#plus').click(function(){
        var value = $(this).val();
        calculationArr.push(value);
        $( "#output" ).text(value);
    });

    $('#minus').click(function(){
        var value = $(this).val();
        calculationArr.push(value);
        $( "#output" ).text(value);
    });

    $('#divide').click(function(){
        var value = $(this).val();
        calculationArr.push(value);
        $( "#output" ).text(value);
    });

    $('#times').click(function(){
        var value = $(this).val();
        calculationArr.push(value);
        $( "#output" ).text(value);
    });

    $('#is').click(function(){

        var resultS = calculationArr.join('');
        resultS = eval(resultS);
        var output = String(resultS);
        $( "#output" ).text(output);



    });
});



