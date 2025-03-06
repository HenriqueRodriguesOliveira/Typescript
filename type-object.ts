//type Person = { firstName: string; lastName: string };

interface Person {
  firstName: string;
  lastName: string;
}

function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}

// Structural type system => Sistema de tipo estrutural
const person: Person = {
  firstName: "Henrique",
  lastName: "Rodrigues",
};

const fullName = getFullName(person);
console.log(fullName);
