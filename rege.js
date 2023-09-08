const str = "I have a fat cat in a hut who eat many rat cat cat";
const regex = /CaT/gi

// /caT/i here 'i' is a flag for case insensitivity
// /cat/g here 'g' is a flag meaning global

// const regex = new RegExp(/cat/);
const matchFound = regex.test(str); // test method is used to check if match is found or not, it will simply return true or false
// console.log(matchFound)
const rerurned = str.match(regex);
// console.log(rerurned)


const regexforA = /.a./g
const res1 = str.match(regexforA);
// console.log(res1);

const str2 = "hut hum hug hog"
const regex1 = /hu./g
// console.log(str2.match(regex1))

const big = "big";
const bag = "bag";
const bug = "bug";
const bat = "bog";
const regex2 = /b[aiu]g/;
// console.log(regex2.test(big));
// console.log(regex2.test(bag));
// console.log(regex2.test(bug));
// console.log(regex2.test(bat));

const petString = "My friend Raj has a pet cat, Sita has a pet dog, Ravi has fish";
const petRegex = /cat|dog|turtel|fish/gi
const res2 = petString.match(petRegex);
// console.log(res2);

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let atRegex = /[a-e]at/g // [a-e] this means from a to e, known as character set
// console.log(catStr.match(atRegex));
// console.log(batStr.match(atRegex));
// console.log(matStr.match(atRegex));

let bijayNumber = "bijay_123";
// let myRegex = /[a-z0-9]/ig;
let alphaNumSrtct = /\w/; // Regex \w is shortcut for /[A-Za-z0-9_]/
// console.log(bijayNumber.match(myRegex));
// console.log(alphaNumSrtct.test(bijayNumber));

let river = "Mississippi";
let sRegex = /s+/gi // + => one or more
// console.log(river.match(sRegex))

let goalWord = "goooooooal!";
let gutPhrase = "gut feeling";
let goRegex = /go*/; // * => zero or more
// console.log(goalWord.match(goRegex));
// console.log(gutPhrase.match(goRegex));

// const arr = "1,1,1,2,2,,3,3,4,5,6,6";
// const numPattern = /[0-9]/g
// console.log(arr.match(numPattern));


let firstString = "Ricky is first and can be found";
let firstRegex = /^Ricky/; // ^ means search only at the start of txt or string
// console.log(firstRegex.test(firstString));
let notFirst = "You can't find Ricky now.";
// console.log(firstRegex.test(notFirst));

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
// console.log(storyRegex.test(theEnding));
let noEnding = "Sometimes a story will have to end";
// console.log(storyRegex.test(noEnding));

let simpleStr = "3 blind mice";
let mRegex = /[^aeiou^0-9]/gi;
// console.log(mRegex.test(simpleStr));

let password = "abbbbbc";
let limitRegex = /ab{3,5}c/gi
console.log(limitRegex.test(password))



// [0-9] shortcut for this is \d
// opposite of \d, where you want to search for non-digits character \D
// \s shortcut for checking spaces, tabs return
// opp of \s for matching non white spaces \S
// inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched].
// Outside of a character set, the caret is used to search for patterns at the beginning of strings.

// Grouping is a powerful feature of regular expressions that 
// can simplify a complex pattern. For example, you can use 
// grouping to match repeated sequences of characters
// In regex, any subpattern enclosed within the parentheses () 
// is considered a group. For example, (xyz) creates a group 
// that matches the exact sequence "xyz".

const inputStr = "xyz yz xyzx xzy"
const regexPattern = /(xyz)/g
console.log(inputStr.match(regexPattern));

// Positive Lookahead
// Positive lookahead matches the pattern only if it's followed
// or preceded by another pattern. They are denoted by the 
// syntax x(?=y), wherein it says find x that is followed by y pattern.
// You can think of it as a "followed by" pattern.

const ipStr = "xyzabyxzbxyab";
const plRegex = /x(?=y)/g
console.log(ipStr.match(plRegex));

// Negative Lookahead
// Negative lookahead is the opposite of positive lookahead. It matches the
// pattern only if it's not followed or preceded by another pattern. They are
// denoted by the syntax x(?!y), wherein it says to find x that is not 
// followed by y pattern.
//You can think of it as a "not followed by" pattern.
const nlStr = "xyzabyxzbxyab";
const ngRegex = /x(?!y)/g
console.log(nlStr.match(ngRegex));

// 1. You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.
// 2. Usernames can only use alpha-numeric characters.
// 3. The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
// 4. Username letters can be lowercase and uppercase.
// 5. Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
