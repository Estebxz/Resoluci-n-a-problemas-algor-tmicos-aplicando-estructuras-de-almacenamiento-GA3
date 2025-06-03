import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = createInterface({ input, output });

async function main() {
  const agesArray = [];

  function validateAge(age) {
    return age >= 1 && age <= 120;
  }

  for (let i = 0; i < 10; i++) {
    let age;
    while (true) {
      const inputText = await rl.question(
        `Ingrese la edad de la persona ${i + 1}: `
      );
      age = parseInt(inputText);

      if (!isNaN(age) && validateAge(age)) {
        agesArray.push(age);
        break;
      } else {
        console.log("Edad no válida. Debe estar entre 1 y 120 años.");
      }
    }
  }
  rl.close();

  const functionsAge = {
    countMinorsAge: (arr) => arr.filter((age) => age < 18).length,
    countAdultAge: (arr) => arr.filter((age) => age >= 18 && age < 60).length,
    countSeniorAge: (arr) => arr.filter((age) => age >= 60).length,
    minAge: (arr) => Math.min(...arr),
    maxAge: (arr) => Math.max(...arr),
    averageAge: (arr) => arr.reduce((acc, age) => acc + age, 0) / arr.length,
  };

  console.log(`Resultados:
- Menores de edad: ${functionsAge.countMinorsAge(agesArray)}
- Mayores de edad: ${functionsAge.countAdultAge(agesArray)}
- Adultos mayores: ${functionsAge.countSeniorAge(agesArray)}
- Edad mínima: ${functionsAge.minAge(agesArray)}
- Edad máxima: ${functionsAge.maxAge(agesArray)}
- Promedio de edades: ${functionsAge.averageAge(agesArray).toFixed(1)}
`);
}
main();
