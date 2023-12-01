/* Write a function called "addFive".
Given a number, "addFive" returns 5 added to that number. */

function addFive(num) {
	return num + 5;
}
//     var result = addFive(num)
//     console.log(result)

/*
Lines For TestCase
*/
addFive(5)
addFive(0)
addFive(-5)

//==============================================================

/* Write a function called "getOpposite".
If the given value is an integer, return its opposite value, otherwise return -1 */

function getOpposite(num) {
	
	if (Number.isInteger(num)) {
		return num * (-1);
	} else {
		return -1
	}
	
}
/*
Lines For TestCase
*/
console.log(getOpposite(5))
console.log(getOpposite(0));
console.log(getOpposite(-5));
console.log(getOpposite("5a"));
console.log(getOpposite(5.5));

//=====================================================

/* Fill in your code that takes an number minutes and converts it to seconds. */

function toSeconds(min) {
	///Your code Starts here 
	return min * 60;
	///Your code Ends here
}
/*
Lines For TestCase
*/
toSeconds(5);
toSeconds(3);
toSeconds(2);

//========================================================

/* Create a function that takes a string and returns it as an integer. */

function toInteger(mystr) {
	///Your code Starts here 
	return parseInt(mystr);
	///Your code Ends here
}
/*
Lines For TestCase
*/
console.log(toInteger("6"));
console.log(toInteger("1000"));
console.log(toInteger("12"));

//========================================================

/* Create a function that takes a number as an argument, increments the number by +1 and returns the result. */

function nextNumber(myint) {
	///Your code Starts here 
	return myint + 1
	///Your code Ends here
}
/*
Lines For TestCase
nextNumber(0);
nextNumber(9);
nextNumber(-3);
*/

//========================================================

/* Create a function that takes an array and returns the first element. */

function getFirstElement(arr) {
	///Your code Starts here 
	return arr[0];
	///Your code Ends here
}
/*
Lines For TestCase
getFirstElement([1, 2, 3]);
getFirstElement([80, 5, 100]);
getFirstElement([-500, 0, 50]);
*/

//======================================================

/* Write a function that converts hours into seconds. */

function hourToSeconds(hours) {
	///Your code Starts here 
	
	hours = 3600 * hours;
	return hours
}
///Your code Ends here
/*
Lines For TestCase
*/
console.log(hourToSeconds(24))
console.log(hourToSeconds(10))
console.log(hourToSeconds(2))

//======================================================

/* Create a function that takes height and width and finds the perimeter of a rectangle. */

function findPerimeter(num1, num2) {
	///Your code Starts here 
	return 2 * (num1 + num2)
	///Your code Ends here
}
/*
Lines For TestCase
*/
findPerimeter(6, 7);
findPerimeter(20, 10);
findPerimeter(2, 9);

//======================================================

/* Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false. */

function lessThan100(num1, num2) {
	///Your code Starts here 
	if (num1 + num2 < 100) {
		return true
	} else {
		return false
	}
	///Your code Ends here
}
/*
Lines For TestCase
*/
lessThan100(22, 15);
lessThan100(83, 34);
lessThan100(50, 50);

//=============================================================

/* MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:turkey = 2 legshorse = 4 legspigs = 4 legsThe farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals. */

function CountLegs(turkey, horse, pigs) {
	///Your code Starts here 
	var a = 2 * turkey;
	var b = 4 * (horse + pigs);
	return a + b
}
///Your code Ends here
/*
Lines For TestCase
*/
CountLegs(2, 3, 5);
CountLegs(1, 2, 3);
CountLegs(5, 2, 8);

//==============================================================

/* Create a function that returns true if an integer is evenly divisible by 5, and false otherwise. */

function divisibleByFive(num1) {
	///Your code Starts here 
	if (num1 % 5 === 0) {
		return true
	} else {
		return false
	}
	///Your code Ends here
}
/*
Lines For TestCase
*/
divisibleByFive(5);
divisibleByFive(-55);
divisibleByFive(37);

//===========================================================

/* Write a function called "isEven". "isEven" Should return whether it is even or not. Return -1 for invalid input. */

function isEven(num) {
	///Your code Starts here 
	if (parseInt(num) == num) {
		if (num % 2 === 0) {
			return true
		} else {
			return false
		}
	} else {
		return -1
	}
}
///Your code Ends here
/*
Lines For TestCase
*/
isEven(12);
isEven(0);
isEven(11);
isEven("11h");

//==============================================================

/* Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space. */

function getFullName(firstName, lastName) {
	///Your code Starts here 
	firstName = firstName != null ? firstName : "";
	lastName = lastName != null ? lastName : "";
	return (firstName + " " + lastName).trim();
}
/*
Lines For TestCase
*/
console.log(getFullName("GUVI", "GEEK"));
console.log(getFullName("GUVI", ));
console.log(getFullName("GEEK"));
console.log(getFullName("", ""));

//================================================================

/* Given two words, "isSameLength" returns whether the given words have the same length. */

function isSameLength(word1, word2) {
	///Your code Starts here 
	if (word1.length === word2.length) {
		return true;
	} else {
		return false;
	}
	///Your code Ends here
}
/*
Lines For TestCase
*/
isSameLength("GUVI", "GEEK");
isSameLength("GUVI", "ZEN");
isSameLength("Hello", "GUVI");

//===============================================================

/* Create a function to calculate the distance between two points defined by their x, y coordinates. */

function getDistance(x1, y1, x2, y2) {
	///Your code Starts here 
	///Your code Ends here
	return Math.floor(Math.sqrt(Math.pow(x2 - x1, 2) +
		Math.pow(y2 - y1, 2) * 1.0));
}
/*
Lines For TestCase
*/
console.log(getDistance(100, 100, 400, 300));
console.log(getDistance(1, 2, 4, 6));

//===============================================================

/* Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’. */

function getNthElement(array, n) {
	///Your code Starts here 
	if (array.length == 0) {
		return undefined
	} else {
		return array[n]
	}
	///Your code Ends here
}
/*
Lines For TestCase
*/
getNthElement([1, 3, 5], 1);
getNthElement([1, 3, 5], 2);
getNthElement([], 2);

//================================================================

/* Given an array, "getLastElement" returns the last element of the given array. If the given array has a length of 0, it should return '-1'. */

function getLastElement(array) {
	///Your code Starts here 
	if (array.length == 0) {
		return -1
	} else {
		return array[array.length - 1]
	}
	///Your code Ends here
}
/*
Lines For TestCase
*/
getLastElement([1, 2, 3, 4]);
getLastElement([1, 2, 3, 4, 5, 6, 7]);
getLastElement([]);

//===========================================================

/* Given an object and a key, "getProperty" returns the value of the property at the given key. If there is no property at the given key, it should return null. */

var obj = {
	mykey: 'value'
}

function getProperty(obj, key) {
	///Your code Starts here 
	return obj[key]
	///Your code Ends here
}
/*
Lines For TestCase
*/
getProperty(obj, 'mykey');
getProperty(obj, 'dummykey');

//==========================================================

/* Given an object and a key, "addProperty" adds a new property on the given object with a value of true. */

var obj = {}

function addProperty(obj, key) {
	///Your code Starts here 
	obj[key] = true;
	return obj
	///Your code Ends here
}
addProperty(obj, "mykey");
/*
Lines For TestCase
*/
obj.mykey

//========================================================

/* Given an object and a key, "removeProperty" removes the given key from the given object. */

var obj = {
	"mykey": "value"
}

function removeProperty(obj, key) {
	///Your code Starts here 
	delete obj[key];
	///Your code Ends here
}
removeProperty(obj, "mykey");
/*
Lines For TestCase
*/
obj.mykey === undefined;