//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
//try your own
//Ctrl+F -> Search for a specific problem
//Vowel Count
function getCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    )
      count += 1;
  }
  return count;
}
//Even or Odd

function evenOrOdd(number) {
  return number % 2 == 0 ? "Even" : "Odd";
}
//Get the Middle Character

function getMiddle(s) {
  return s.length % 2 == 0
    ? s[s.length / 2 - 1] + s[s.length / 2]
    : s[s.length / 2 - 0.5];
}
console.log(getMiddle("test"));
//Opposite number

function opposite(number) {
  return -number;
}
//Mumbling

function accum(s) {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (i == 0) {
      str += s[0].toUpperCase();
    } else {
      let j = i;
      str += "-" + s[i].toUpperCase();
      while (j > 0) {
        str += s[i].toLowerCase();
        j--;
      }
    }
  }
  return str;
}
//You're a square!

var isSquare = function (n) {
  if (n == -1) return false;
  else if (n == 0) return true;
  else {
    let k = Math.sqrt(n);
    return Number.isInteger(k) ? true : false;
  }
};
//Disemvowel Trolls

function disemvowel(str) {
  let newstr = "";
  let i = 0;
  while (i < str.length) {
    if (
      str[i].toLowerCase() != "a" &&
      str[i].toLowerCase() != "e" &&
      str[i].toLowerCase() != "i" &&
      str[i].toLowerCase() != "o" &&
      str[i].toLowerCase() != "u"
    ) {
      newstr += str[i];
    }
    i++;
  }
  return newstr;
}

console.log(disemvowel("This website is for losers LOL!"));
//Highest and Lowest

function highAndLow(numbers) {
  let arr = numbers.split(/(\s+)/).filter((c) => c != " ");
  let lowest = parseInt(arr[0]),
    highest = parseInt(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) > highest) {
      highest = parseInt(arr[i]);
    }
    if (parseInt(arr[i]) < lowest) {
      lowest = parseInt(arr[i]);
    }
  }
  return "" + highest + " " + lowest;
}
//Exes and Ohs

function XO(str) {
  let countO = 0,
    countX = 0;
  str = str.split("");
  for (let item of str) {
    countO += item.toLowerCase() == "o" ? 1 : 0;
    countX += item.toLowerCase() == "x" ? 1 : 0;
    console.log(countX, countO, item, item.toLowerCase());
  }
  return countX == countO;
}

console.log(XO("OXXxo"));
//Square Every Digit

function squareDigits(num) {
  let arr = num.toString().split("");
  arr = arr.map((item) => parseInt(item) * parseInt(item)).join("");
  return parseInt(arr);
}
console.log(squareDigits(2154));

//Shortest Word

function findShort(s) {
  let arrOfCount = [];
  let arrOfWord = s.split(" ");
  for (item of arrOfWord) {
    let i = 0;
    item.split("").map(() => i++);
    arrOfCount.push(i);
  }
  return Math.min(...arrOfCount);
}

console.log(findShort("2154 qsd qsd dqsdqsd"));

//Complementary DNA

function DNAStrand(dna) {
  return dna
    .split("")
    .map((c) => (c == "A" ? "T" : c == "T" ? "A" : c == "G" ? "C" : "G"))
    .join("");
}

console.log(DNAStrand("GTAT"));

//Descending Order
function descendingOrder(n) {
  let arr9 = ("" + n).split("").filter((c) => parseInt(c) == 9);
  let arr8 = ("" + n).split("").filter((c) => parseInt(c) == 8);
  let arr7 = ("" + n).split("").filter((c) => parseInt(c) == 7);
  let arr6 = ("" + n).split("").filter((c) => parseInt(c) == 6);
  let arr5 = ("" + n).split("").filter((c) => parseInt(c) == 5);
  let arr4 = ("" + n).split("").filter((c) => parseInt(c) == 4);
  let arr3 = ("" + n).split("").filter((c) => parseInt(c) == 3);
  let arr2 = ("" + n).split("").filter((c) => parseInt(c) == 2);
  let arr1 = ("" + n).split("").filter((c) => parseInt(c) == 1);
  let arr0 = ("" + n).split("").filter((c) => parseInt(c) == 0);
  return parseInt(
    [
      ...arr9,
      ...arr8,
      ...arr7,
      ...arr6,
      ...arr5,
      ...arr4,
      ...arr3,
      ...arr2,
      ...arr1,
      ...arr0,
    ].join("")
  );
}

console.log(descendingOrder(45689));
//Sum of positive
function positiveSum(arr) {
  return arr.filter((n) => n > 0).reduce((accum, curr) => accum + curr, 0);
}

console.log(positiveSum([]));

//Isograms
function isIsogram(str) {
  let o = {};
  str
    .split("")
    .forEach((e) => (o[e.toLowerCase()] = (o[e.toLowerCase()] || 0) + 1));
  for (let item in o) {
    if (o[item] > 1) return false;
  }
  return true;
}
console.log(isIsogram("moOse"));

//List Filtering
function filter_list(l) {
  return l.filter(Number.isFinite);
}
console.log(filter_list([1, 2, 4, "3a", "b"]));
//Find the smallest integer in the array
function findSmallestInt(args) {
  let small = args[0];
  args.forEach((n) => (small = n < small ? n : small));
  return small;
}

console.log(findSmallestInt([34, -345, -1, 100]));

//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
  let small1 = Math.min(...numbers);
  numbers = numbers.filter((n) => n != small1);
  return small1 + Math.min(...numbers);
}
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));

//Growth of a Population
function nbYear(p0, percent, aug, p) {
  let yrs = 0;
  while (p0 < p) {
    p0 = p0 + parseInt((p0 * percent) / 100) + aug;
    yrs++;
  }
  console.log(p0);
  return yrs;
}
console.log(nbYear(1500000, 2.5, 10000, 2000000));
//String repeat
function repeatStr(n, s) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += s;
  }
  return str == "" ? s : str;
}
console.log(repeatStr(0, "I"));
function repeatStr(n, s) {
  return s.repeat(n);
}
console.log(repeatStr(6, "I"));

//Is this a triangle?
function isTriangle(a, b, c) {
  if (a < 0 || b < 0 || c < 0) return false;
  let s = (a + b + c) / 2;
  let area =
    s * (s - a) * (s - b) * (s - c) > 0
      ? Math.sqrt(s * (s - a) * (s - b) * (s - c))
      : 0; //calculating the area of a triangle uses Heron's formula
  return area > 0;
}
console.log(isTriangle(4, 4, -2));
//Find the next perfect square!
function findNextSquare(sq) {
  if (!Number.isInteger(Math.sqrt(sq))) return -1;
  do {
    sq++;
  } while (!Number.isInteger(Math.sqrt(sq)));
  return sq;
}
console.log(findNextSquare(4));
//Credit Card Mask
function maskify(cc) {
  return cc.length > 4
    ? cc
        .split("")
        .map((item, index) => (index > cc.length - 5 ? item : "#"))
        .join("")
    : cc;
}
console.log(maskify("Whadqsdqqsdqs"));
//Sum of odd numbers
function rowSumOddNumbers(n) {
  let sum = 0,
    k = n,
    first = n * (n - 1) + 1;
  if (n == 1) {
    return 1;
  }
  while (k > 0) {
    if (first % 2 != 0) {
      sum += first;
      k--;
    }
    first++;
  }
  return sum;
}
//Find the divisors!
function divisors(integer) {
  let arr = [];
  for (let i = 2; i < integer / 2 + 1; i++) {
    if (integer % i == 0) {
      arr.push(i);
    }
  }
  return arr.length ? `${integer} is prime` : arr;
}
console.log(divisors(15));
//Return Negative
function makeNegative(num) {
  return (num==0)?0:(num>0)?-num:num;
}
console.log(makeNegative(0));
//Remove First and Last Character
function removeChar(str){
  return str.split("").map((item,index,arr)=>(index>0&&index<arr.length-1)?item:'').join('');
  
  };//str.slice(1,-1);//str.substring(1, str.length-1);//str.substr(1,str.length-2)
    console.log(removeChar('eloquent'));
//Remove String Spaces
function noSpace(x){
  return x.split('').filter(item=>item!=' ').join('');
}
  console.log(noSpace('elo que nt'));
  //Convert boolean values to strings 'Yes' or 'No'.
  function boolToWord( bool ){
    return (bool==true)?"Yes":"No"
  }
    console.log(boolToWord(false));
    //Convert a Number to a String!
    function numberToString(num) {
      return num.toString();
    }
      console.log(numberToString(1234));
      //Basic Mathematical Operations
function basicOp(operation, value1, value2)
{
 return (operation=='+')?value1+value2:(operation=="-")?value1-value2:(operation=="*")?value1*value2:value1/value2;
}
  console.log(basicOp('/', 4, 7));
//Sum of the first nth term of Series
function SeriesSum(n)
{
  if (n==0) return "0.00";
  let i=1,sum=1;
  for (let k=1;i<n;i++)
    {
      sum+=1.00/(k=k+3.00);
      
    }
  return sum.toFixed(2)
}
  console.log(SeriesSum(3));
  //Keep Hydrated!
  function litres(time) {
    return Math.floor(time*0.5);
  }
    console.log(litres(3));
//Century From Year
function century(year) {
  return (((year/100)%1)==0)?year/100:year/100-(year/100)%1+1;
}
  console.log(century(1601));
  //Beginner - Lost Without a Map
  function maps(x){
    return x.map(n=>n*2)
    }
      console.log(maps([1, 2, 3]));
      //Reversed Strings
      function solution(str){
        return str.split('').reverse().join('')
      }
        console.log(solution('world'));  
  //String ends with?
  function solution(str, ending){
    return ending==''?true:str.slice(-(ending.length))==ending;
  }
    console.log(solution('abc', ''));
    //Do I get a bonus?
    function bonusTime(salary, bonus) {
      return bonus?`£${salary*10}`:`£${salary}`
      }
        console.log(bonusTime(10000, false));
//Abbreviate a Two Word Name
function abbrevName(name){

  return name.split(" ").map(item=>item[0].toUpperCase()).join(".")

}
console.log(abbrevName("patrick Feenan"));
//DNA to RNA Conversion
function DNAtoRNA(dna) {
  return dna.split('').map(c=>(c=="T")?"U":c).join('')
}
  console.log(DNAtoRNA("TTTu"));
  //Counting sheep...
  function countSheeps(arrayOfSheep) {
    let count=0;
    arrayOfSheep.map(b=>count+=b?1:0);
    return count;
  }
    console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));
    //Ones and Zeros
    const binaryArrayToNumber = arr => {
      return parseInt(arr.join(''),2)
    };
 console.log(binaryArrayToNumber([1, 0, 1, 1]));
//    A Needle in the Haystack
function findNeedle(haystack) {
return (haystack.indexOf("needle")!=-1)?`found the needle at position ${haystack.indexOf("needle")}`:undefined;
}
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
//Remove the minimum
function removeSmallest(numbers) {
  return (numbers==[])?[]:numbers.filter((nb,index)=>index!=numbers.indexOf(Math.min(...numbers)));
}
  console.log(removeSmallest([2, 2, 1, 2, 1]));
//Convert number to reversed array of digits
function digitize(n) {
  return (""+n).split("").map(item=>Number(item)).reverse();
}
  console.log(digitize(35231));
//Make a function that does arithmetic!
function arithmetic(a, b, operator){
  let operators={
    "add":a+b,
    "subtract":a-b,
    "multiply":a*b,
    "divide":a/b
  }
  return operators[operator]
}
console.log(arithmetic(8, 2, "subtract"));
//Regular Ball Super Ball
var Ball = function(ballType) {
  return {ballType: (ballType!=undefined)?ballType:"regular"}
};
//Make them bark!
class Dog {
  constructor(name, breed, sex, age) {    
    this.name  = name;
    this.breed = breed;
    this.sex   = sex;
    this.age   = age;
  };
	
}//don't write these lines 

Dog.prototype.bark = function(){
  return 'Woof!'
}
var apollo = new Dog('Apollo', 'Dobermann', 'male', '4');
var zeus = new Dog('Zeus', 'Dobermann', 'male', '4');
  console.log(zeus);
//Add property to every object in array
questions.forEach(item=>item.usersAnswer=null);
//FIXME: Get Full Name
class Dinglemouse{

  constructor( firstName, lastName ){
    this.firstName=firstName;
    this.lastName=lastName;
  }
  
getFullName(){
    return (this.firstName=="")?this.lastName:(this.lastName=="")?this.firstName:this.firstName+" "+this.lastName
  }
  
}

  console.log(new Dinglemouse("", "").getFullName());
//Grasshopper - Summation
var summation = function (num) {
  let sum=0;
  for(let i=1;i<=num;i++){
    sum+=i
  }
  return sum
}

  console.log( summation(3));
//Jenny's secret message
function greet(name){
  if(name == "Johnny")
    return "Hello, my love!";
  return "Hello, " + name + "!";
}
//Function 1 - hello world
let greet=()=>"hello world!"
//Count the Monkeys!
function monkeyCount(n) {
  return Array(n).fill().map((_, idx) => 1 + idx)
  }
  
    console.log( monkeyCount(3));
//Are You Playing Banjo?
function areYouPlayingBanjo(name) {
  return (name.slice(0,1).toLowerCase()=="r")?`${name} plays banjo`:`${name} does not play banjo`;
}
  console.log( areYouPlayingBanjo("ali"));
//Find the capitals
var capitals = function (word) {
	return word.split("").map((item,index)=>(item==item.toUpperCase())?index:item).filter(Number.isInteger);
};
  console.log( capitals('CodEWaRs'));
//Plural
function plural(n) {
  return (n!=1)?true:false;
}
console.log( plural(Infinity));
//Drink about
function peopleWithAgeDrink(old) {
  let dontdrink=["drink toddy","drink coke","drink beer","drink whisky"]
  return (old<14)?dontdrink[0]:(old<18)?dontdrink[1]:(old<21)?dontdrink[2]:dontdrink[3];
};
  console.log( peopleWithAgeDrink(21));
//Leonardo Dicaprio and Oscars
function leo(oscar){
  return (oscar==88)?"Leo finally won the oscar! Leo is happy":
  (oscar==86)?"Not even for Wolf of wallstreet?!":
  (oscar<88)?"When will you give Leo an Oscar?":
  "Leo got one already!";
}
  console.log( leo(12));
//Switch/Case - Bug Fixing #6
function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': return result = value.a + value.b;//add return to each line.
    case'-': return result = value.a - value.b;
    case'/': return result = value.a / value.b;
    case'*': return result = value.a * value.b;
    case'%': return result = value.a % value.b;
    case'^': return result = Math.pow(value.a, value.b);
  }

}

//Sentence Smash
function smash (words) {
  return words.join(" ")
};
 console.log( smash(['hello', 'world', 'this', 'is', 'great'] ));
//If you can't sleep, just count sheep!!
var countSheep = function (num){
  return Array(num).fill().map((_, idx) => 1 + idx).map(item=>item+" sheep...").join("")
}
console.log( countSheep(3));
//Double Char
function doubleChar(str) {
  return str.split("").map(c=>c+c).join("")
}
console.log( doubleChar("String" ));
//Unfinished Loop - Bug Fixing #1
function createArray(number){
  var newArray = [];
  
  for(var counter = 0; counter++ < number;){//this line counter=0 and counter++
    newArray.push(counter);
  }
  
  return newArray;
}
console.log( createArray(3));
//Sum of numbers from 0 to N
function counts(count) {
  return  (count<0)?`${count}<0`:
          (count==0)?`0=0`:
          "0+"+Array(count).fill().map((_,index)=>1+index).join("+")+" = "+((count*(count+1))/2)
    };
  console.log( counts(3));
//Multiples of 3 or 5
function solution(number){
  return (number<=0)?0:(Array(number-1).fill().
  map((_,index)=>1+index).
  filter(nb=>(nb%3==0)||(nb%5==0)).length==0)?0:
  Array(number-1).fill().
  map((_,index)=>1+index).
  filter(nb=>(nb%3==0)||(nb%5==0)).reduce((acc,curr)=>acc+=curr);
}
console.log( solution(3));
//Sum of Digits / Digital Root
function digitalRoot(n) {
  if (n<10) return n;
  return digitalRoot((""+n).split("").map(c=>Number(c)).reduce((acc,curr)=>acc+=curr))
}
console.log( digitalRoot(132189));
//Who likes it?
function likes(names) {
  return (names.length==0)?`no one likes this`:
         (names.length==1)?`${names[0]} likes this`:
         (names.length==2)?`${names[0]} and ${names[1]} like this`:
         (names.length==3)?`${names[0]}, ${names[1]} and ${names[2]} like this`:
          `${names[0]}, ${names[1]} and ${names.length-2} others like this`
}
console.log( likes(["Alex", "Jacob", "Mark", "Max"] ));
//Find The Parity Outlier
function findOutlier(integers){
  return (Number(integers[0]%2==0)+Number(integers[1]%2==0)+Number(integers[2]%2==0)>=2)?
    integers.filter(nb=>nb%2!=0).reduce((acc,curr)=>acc+=curr):integers.filter(nb=>nb%2==0).reduce((acc,curr)=>acc+=curr)
}
console.log( findOutlier([160, 3, 1719, 19, 11, 13, -21]));
//Stop gninnipS My sdroW!
function spinWords(string){
  return string.split(" ").map(word=>(word.length)>4?word.split("").reverse().join(""):word).join(" ")
}
console.log( spinWords("Hey fellow warriors"));
//Bit Counting
var countBits = function(n) {
  console.log(Number(n).toString(2));
  return n.toString(2).split('').map(Number).filter(nb=>nb==1).length
};
console.log( countBits(1234));
//Duplicate Encoder
function duplicateEncode(word){
  let countChar = elem => word.split('').filter(e=>e.toLowerCase()==elem.toLowerCase()).length;
return word.split('').map(elem=>(countChar(elem)>1)?')':'(').join("");
}

console.log(duplicateEncode("Success"));
//Persistent Bugger.
function persistence(num) {
  return (num<10)?0:1+persistence((""+num).split("").reduce((acc,curr)=>acc*=Number(curr)))
}
 console.log(persistence(39));
//Your order, please//I should devise the function but this complexity is just for fun
function order(words){
  let arrWords=[];
  words.split("").filter(Number).sort().map(elem=>(words.split(" ").map(word=>(word.indexOf(elem)!=-1)?arrWords.push(word):0)))
  return arrWords.join(" ")
}
  console.log(order(""));
//Strip Comments
function solution(input, markers) {
  let lines=input.split('\n');
for (let marker of markers){
  let i=0;
  for (let line of lines){
  lines[i]=(line.indexOf(marker)==-1)?line:
  line.slice(0,line.indexOf(marker)).trim();
  i++;
   }
  }
return lines.join('\n')
};

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));



