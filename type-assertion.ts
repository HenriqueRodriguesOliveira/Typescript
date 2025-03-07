type Person = {
  firstName: string;
  lastName: string;
  email: string;
  address: {
    zipCode: string;
  };
};

const value = { firstName: "Henrique" } as Person; // recomendo usarem o "as"
// const value = <Person>();

// 1 - algo que acontece em tempo de execução ou fator externo

// 2 - criando mocks para testes automatizados

console.log(value.address.zipCode);
