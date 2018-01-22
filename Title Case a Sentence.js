
function titleCase(str) {

  return str.toLowerCase().split(" ").map(function(item){
    return item.charAt(0).toUpperCase() + item.substr(1);
  }).join(" ");

}

titleCase("I'm a little tea pot");


/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

    Remember to use Read-Search-Ask if you get stuck. Write your own code.

    Here are some helpful links:

    String.prototype.split()*/
