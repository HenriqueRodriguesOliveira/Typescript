// null (nulo) => representa ausência de valor
// undefined (não definido) => nem um valor foi atribuido

function hello(value: string | null | undefined) {
  if (value) {
    console.log("Hello, " + value.toUpperCase());
  }
}

hello(null);
