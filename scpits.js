

var str = "Some string with phone number 8-01-215-612-0113";

console.log('String = ' + str);

var numb = str.getNumbers();

console.log('Numb in string = ' + numb);

var allNumb = str.getAllNumbers();

console.log('All numb in string = ' + allNumb);


console.log('--------------------------------------');

var arrayOfNumbers = [1,2,3,45,611,151,-10,1];


console.log('arrayOfNumbers = ' + arrayOfNumbers);

var ave = arrayOfNumbers.average();

console.log('Average = ' + ave);

var sortedArray = arrayOfNumbers.sortArray();

console.log('Sorted array = ' + sortedArray);

console.log('--------------------------------------');
var arrayOfWords = str.toArray();


console.log('array Of Words = ' + arrayOfWords);

var ave = arrayOfWords.average();

console.log('Average length = ' + ave);

var sortedArray = arrayOfWords.sortArray();

console.log('Sorted array = ' + sortedArray);

console.log('------------Test with lib (str)--------------------------');

var myLib = L$(str);

console.log(myLib);

console.log('All numbers : ' + myLib.getAllNumbers());

console.log('Integer : '  + myLib.getNumbers());


console.log('Sort and display...');

myLib.sort().display();

console.log('Average length of words : '  + myLib.average());

var newStr = "Added";

console.log('Adding string "Added"' );

myLib.add(newStr).display();;


console.log('------------Test with lib (array)--------------------------');


var array = [1,2,3,45,611,151,-10,1];

 myLib = L$(array);

console.log(myLib);

console.log('All numbers : ' + myLib.getAllNumbers());

console.log('Integer : '  + myLib.getNumbers());

console.log('Sort and display...');


myLib.sort().display();

console.log('Average : '  + myLib.average());

console.log('Adding array [1,51]' );

var newArr = [1,51];


myLib.add(newArr).display();;





