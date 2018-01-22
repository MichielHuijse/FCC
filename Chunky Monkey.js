
function chunkArrayInGroups(arr, size) {

  // Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


  var a = arr.length/size; //intervals of the loop
  var newArray;
  var finalArray= [];
  var arrEnd = size;
  var arrBegin = 0; //Array begin first slice
  //array end first slice


  for (var i=0; i<a; i++){

    newArray = arr.slice(arrBegin, arrEnd); // slices the right fraction of the Array
    finalArray.push(newArray); // puts it behind the last newArray

    arrEnd = arrEnd + size;
    arrBegin = arrBegin + size;

  }

  return finalArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);


/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

    Remember to use Read-Search-Ask if you get stuck. Write your own code.

    Here are some helpful links:

    Array.prototype.push()
Array.prototype.slice()*/
