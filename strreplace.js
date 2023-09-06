const str = "  Bijay Singh  ";
const regex = /\s+/g;

console.log(str.match(regex));
console.log(regex.test(str));

const trimmedString = str.replace(/\s+/g, "");

console.log(trimmedString);


