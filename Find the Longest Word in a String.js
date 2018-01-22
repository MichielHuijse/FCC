
function findLongestWord(str) {

  var arr = str.split(" ");

  var longest = arr.sort(function (a, b) { return b.length - a.length; })[0];
  return longest.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

/*
Return the length of the longest word in the provided sentence.

    Your response should be a number.

    Remember to use Read-Search-Ask if you get stuck. Write your own code.

    Here are some helpful links:

    String.prototype.split()
String.length*/
