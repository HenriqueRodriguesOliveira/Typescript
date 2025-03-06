//type Person = { firstName: string; lastName: string };

type Person = {
  firstName: string;
  lastName: string;
};

interface User extends Person {
  email: string;
}

function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}

// Structural type system => Sistema de tipo estrutural
const person: User = {
  firstName: "Henrique",
  lastName: "Rodrigues",
  email: "teste@teste.com",
};

const fullName = getFullName(person);
console.log(fullName);
