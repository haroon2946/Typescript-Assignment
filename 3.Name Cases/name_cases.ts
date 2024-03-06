// storing a person in a variable

let personName2 : string = "Haroon Afridi";

// lowercase

console.log(personName2.toLowerCase());

// uppercase

console.log(personName2.toUpperCase());

// titlecase

console.log(personName2.replace(/\b\w/g , c => c.toUpperCase()));