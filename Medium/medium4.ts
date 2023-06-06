interface Person {
    name: string;
    age: number;
  }
  
  function findPersonName(array: Person[]): string | undefined {
    for (let i = 0; i < array.length; i++) {
      const person = array[i];
  
      if (person.age < 18) {
        const Age = person.age * 2;
  
        if (Age > 30) {
          return person.name;
        }
      }
    }
  }
  const members: Person[] = [
    { name: "Kavin",age: 12 },
    { name: "Manoj", age: 20 },
    { name: "Akash", age: 17 },
    { name: "Bhavi", age: 25 },
    { name: "Sajeev", age: 15 },
  ];
  
  const personName: string | undefined = findPersonName(members);
  console.log(personName);  
  