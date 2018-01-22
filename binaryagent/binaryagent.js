function binaryAgent(str) {
  // str is a string divided with spaces.
  // 1) make the str an array arr1 (divide per space)
  // 2) convert each element of the arr1 (the binary number) into a number and put it in arr2
  // 3) convert each number of arr2 into an alphabetical character using: String.fromCharCode()
  // 4) convert the array to a string using: .join('')

  // 1)
  var arr1 = str.split(' ');


  // 2)
  var arr2 =[];

  arr1.forEach(function(element) {
    arr2.push(parseInt(element, 2));
  });


  // 3)
  var arr3 = [];
  for (var i=0; i<arr2.length; i++) {
    var strElement = String.fromCharCode(arr2[i]);
    arr3.push(strElement);
  }

  // 4)
  str = arr3.join('');

  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");