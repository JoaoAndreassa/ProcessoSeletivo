function isFibonacci(number) {
    let a = 0;
    let b = 1;
    let fibonacci = [];
  
    while (b <= number) {
      fibonacci.push(b);
      const nextNumber = a + b;
      a = b;
      b = nextNumber;
    }
  
    if (fibonacci.includes(number)) {
      console.log(`${number} pertence à sequência de Fibonacci`);
    } else {
      console.log(`${number} não pertence à sequência de Fibonacci`);
    }
  }
  
  const input = prompt("Digite um número:");
  const number = parseInt(input);
  
  if (isNaN(number)) {
    console.log("Entrada inválida. Por favor, digite um número.");
  } else {
    isFibonacci(number);
  }
 

