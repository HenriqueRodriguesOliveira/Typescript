// Generics (genéricos) - Capacidade de criar códigos (função, classe, tipos)
// que funcionam em uma variedade de tipos ao em vez de um.

// type variable - variável do tipo
function identity<Type>(arg: Type): Type {
  return arg;
}

const value = identity("value");
const value2 = identity(4);
