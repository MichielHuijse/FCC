
function updateInventory(arr1, arr2) {

  // arr1 plus arr2 must return the updated inventory.
  // All the 2d arrays in arr1 and arr2 with the same string (inventory), the number must be added.
  // If arr2 has a new (or different) string (inventory) than arr1, the 2d array (thus [int, 'string'] must be pushed to updatedArr.

  var updatedArr;
  var z =0;

  // This is a copy of arr1.
  updatedArr = arr1.map(function(e){return e.slice()});
//Loops over every array X from the New Inventory and checks if current Inventory
//contains an array Y such that X[1] === Y[1]. If such array is found, add value Y[0]
//to the Updated Inventory. If it is not found add X to the Updated Inventory.

  for (var j = 0; j < arr2.length; j++) {
    //found will be -1 if there is no item i in arr1 such that i[1]===arr2[j][1] is not true.
    //else it will hold the index of i
    var found = arr1.findIndex(function(i){return i[1] === arr2[j][1]});
    if (found === -1) {
      updatedArr.push(arr2[j]);
    }
    else {
      updatedArr[found][0] += arr2[j][0];
    }
  }

  // sort the array alphabetically.
  var sortedArr = updatedArr.sort((function(index){
    return function(a, b){
      return (a[index] === b[index] ? 0 : (a[index] < b[index] ? -1 : 1));
    };
  })(1));

  return sortedArr;

}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);


