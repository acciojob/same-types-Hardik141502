function isSameType(value1, value2) {
  //your js code here
	if (isNaN(value1) && isNaN(value2)) {
    return true;
  }

  // If one value is NaN but the other is not, return false
  if (isNaN(value1) || isNaN(value2)) {
    return false;
  }

  // Check if the types of the values are the same
  return typeof value1 === typeof value2;
}
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
