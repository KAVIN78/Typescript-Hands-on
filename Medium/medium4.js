function findPersonName(array) {
    for (var i = 0; i < array.length; i++) {
        var person = array[i];
        if (person.age < 18) {
            var multipliedAge = person.age * 2;
            if (multipliedAge > 30) {
                return person.name;
            }
        }
    }
    return undefined;
}
var members = [
    { name: "Kavin", age: 12 },
    { name: "Manoj", age: 20 },
    { name: "Akash", age: 17 },
    { name: "Bhavi", age: 25 },
    { name: "Sajeev", age: 15 },
];
var personName = findPersonName(members);
console.log(personName);
