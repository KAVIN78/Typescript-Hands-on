interface Person {
name: string;
age: number;
}

function findPersonName(Array: Person[]):void {
const people = Array.filter(person => person.age < 18);
console.log(people);
const mappedarray = people.map(person => ({age: person.age * 2 }));
console.log(mappedarray);
const Person= mappedarray.find(person => person.age > 30);
console.log(`${Person} is the first person whose age is greater than 30 after multiplication`)
}
const people: Person[] = [
  { name: 'Kavin', age: 13 },
  { name: 'Vijay', age: 13 },
  { name: 'bhavi', age: 16 },
  { name: 'sajeev', age: 35 },
  ];
console.log(findPersonName(people));



