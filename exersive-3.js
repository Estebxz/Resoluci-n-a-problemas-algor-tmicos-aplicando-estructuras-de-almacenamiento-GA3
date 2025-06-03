import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = createInterface({ input, output });

async function intercalation(name) {
  const vectorArray = [];
  console.log(`Ingrese los numeros para el vector ${name}`);
  for (let i = 0; i < 5; i++) {
    let number;
    do {
      const inputStr = await rl.question(`Ingrese el numero ${i + 1}: `);
      number = parseInt(inputStr);
    } while (isNaN(number) || (i > 0 && number < vectorArray[i - 1]));
    vectorArray.push(number);
  }
  return vectorArray;
}

function mergedVectors(vectorArray1, vectorArray2) {
  const result = [];
  let i = 0;
  let j = 0;
  
  while(i < vectorArray1.length && j < vectorArray2.length) {
    if (vectorArray1[i] < vectorArray2[j]) {
      result.push(vectorArray1[i]);
      i++;
    } else if (vectorArray1[i] > vectorArray2[j]) {
      result.push(vectorArray2[j]);
      j++;
    } else {
      result.push(vectorArray1[i]);
      i++;
      j++;
    }
  }
  while (i < vectorArray1.length) {
    result.push(vectorArray1[i]);
    i++;
  }
  while (j < vectorArray2.length) {
    result.push(vectorArray2[j]);
    j++;
  }
  return result;
}

(async function () {
  try {
    const vectorArray1 = await intercalation("n1: ");
    const vectorArray2 = await intercalation("n2:");
    const result = mergedVectors(vectorArray1, vectorArray2);
    console.log(result.join(" "));
  } catch (error) {
    console.error("Error:", error);
  } finally {
    rl.close();
  }
})();