/*
Jason = (Javan script notation) data-integration format used for exchanging data between a server and 
    a web application JASON files {key:value} or [value1,value2,value3]

    // JASON.stringify()=converts a JS object to a JSON string.
    // JASON.parse() = converts a JSON string to a JS object.
 */

const names = ["patrick","sponge","squid","sandy"];
console.log(names)
const jsonString = JSON.stringify(names)
console.log(jsonString)