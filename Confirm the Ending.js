
function confirmEnding(str, target) {

  // "Never give up and good luck will find you."
  // -- Falcor

  var res = str.split(" ");
  var a = res.length -1; //indexOfLastWord
  var b = target.length; //letters in target
  var c = res[a].length; //length of last word

  var lastWord = res[a];

  var lastPartWord = lastWord.substring(c-b,c);


  if (target == lastPartWord){

    return true;
  }



  return false;



}

confirmEnding("Bastian", "n");

/*Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

    Remember to use Read-Search-Ask if you get stuck. Write your own code.

    Here are some helpful links:

    String.prototype.substr()
String.prototype.substring()*/
