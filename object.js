var Person1 = 
{
    firstName:"Damon",
    lastName:"Salvatore",
    officeAddress:"Mystic Falls, Virgina",
}
var Person2 =
{
    firstName:"Klaus",
    lastName:"Mikaelson",
    officeAddress:"New Orleans, Louisiana",
}
var Person3 =
{
    firstName:"Katherin",
    lastName:"Pierce",
    officeAddress:"Bulgaria",
}

console.log(Person1);
console.log(Person2);
console.log(Person3);

console.log("Full Name Of Person 1 is "+Person1.firstName + " " +Person1.lastName);
console.log("Full Name Of Person 2 is "+Person2.firstName + " " +Person2.lastName);
console.log("Full Name Of Person 3 is "+Person3.firstName + " " +Person3.lastName);

function print(person)
{
    console.log(person);
    console.log("First name is "+person.firstName);
    console.log("Last name is "+person.lastName);
    console.log("Office Address is "+person.officeAddress);
}
print(Person1);
print(Person2);
print(Person3);
