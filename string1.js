// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

function remove(str){
    var newString = str.split(" ");
    return newString.join("");
}
console.log(remove(" Pl ayTha tF u nkyM usi c "))


// Get Digits
// Create a JavaScript function that given a string, 
// returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

// Examples:

// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

function getDigits(str){
    var string = str.split("");
    var newString = []
    for (var i = 0; i<=string.length-1; i++ ){
        if (isNaN(Number(string[i]))){
        }else{
            newString.push(string[i])
        }
    }
    return newString.join("")
}
console.log(getDigits("abc8c0d1ngd0j0!8"))


// Acronyms
// Create a function that, given a string, returns the string’s acronym 
// (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 
// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

function acronym(str){
    var newString= str.split(" ")
    var letters=[]
    for (var x=0;x<newString.length;x++){
        letters.push(newString[x][0])
    }
    var final = letters.join("")
    return final.toUpperCase()
}
console.log(acronym(" there's no free lunch - gotta pay yer way. "))
console.log(acronym("Live from New York, it's Saturday Night!"))


// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters 
// found in the string. 

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

function countNonSpaces(str){
    var splitString = str.split("")
    var count = 0
    for (var i=0;i<splitString.length;i++){
        if (splitString[i] != ' '){
            count = count+1
        }
    }
    return count
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"))
console.log(countNonSpaces("Hello world !"))


// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value,
//  returns an array that only contains strings longer than or equal to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']


function removeShorterStrings(str, val) {
    for (var x = str.length-1; x >= 0; x--) {
        if (str[x].length < val) {
            for (var i = x; i < str.length-1; i++){
                var temp = str[i];
                str[i] = str[i+1];
                str[i+1] = temp;
            }
            str.pop();
        }
    }
    return str;
}
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))