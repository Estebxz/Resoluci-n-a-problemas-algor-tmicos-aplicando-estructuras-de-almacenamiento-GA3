const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

console.info("Hola, ¿qué desea calcular?");
console.info("1. Área");
console.info("2. Perímetro");

rl.question("Elige una opción (1 o 2): ", (chooseOption) => {
  if (chooseOption !== "1" && chooseOption !== "2") {
    console.info("Opción no válida");
    rl.close();
    return;
  }

  let type = chooseOption === "1" ? "area" : "perimetro";
  console.info(`Elegiste calcular el ${type}`);

  console.info("Elige una figura:");
  console.info("1. Triángulo");
  console.info("2. Rectángulo");
  console.info("3. Cuadrado");
  console.info("4. Circunferencia");

  rl.question("Ingresa el número de la figura (1 al 4): ", (figureChoice) => {
    const figureMap = {
      1: "triangulo",
      2: "rectangulo",
      3: "cuadrado",
      4: "circulo",
    };

    const figureKey = figureMap[figureChoice];
    if (!figureKey) {
      console.log("Figura no válida o no implementada");
      rl.close();
      return;
    }

    const figure = figures[figureKey];
    figure.required_data(type, (...args) => {
      const result = figure[type](...args);
      console.log(`La ${type} de ${figureKey} es: ${result.toFixed(2)} cm`);
      rl.close();
    });
  });
});

const figures = {
  triangulo: {
    area: (base, altura) => (base * altura) / 2,
    perimetro: (a, b, c) => a + b + c,
    required_data: (type, callback) => {
        if (type === "area") {
            rl.question("Ingresa el tamaño de la altura en cm", (altura) => {
                rl.question("Ingrese el tamaña base en cm", (base) => {
                    const b = parseFloat(base)
                    const h = parseFloat(altura)
                    callback(b, h)
                })
            })
        } else {
            rl.question("Ingrese el primer lado en cm", (firstLng) => {
                rl.question("ingrese el segundo lado en cm", (secondLng) => {
                    rl.question("Ingrese el tercer lado en cm", (thirdLng) => {
                        const a = parseFloat(firstLng)
                        const b = parseFloat(secondLng)
                        const c = parseFloat(thirdLng)
                        callback(a, b, c)
                    })
                })
            })
        }
    }
  },
  rectangulo: {
    area: (base, altura) => base * altura,
    perimetro: (base, altura) => 2 * (base + altura),
    required_data: (type, callback) => {
      rl.question("Ingresa el tamaño de la base en cm: ", (base) => {
        rl.question("Ingresa el tamaño de la altura en cm: ", (altura) => {
          const b = parseFloat(base);
          const h = parseFloat(altura);
          callback(b, h);
        });
      });
    },
  },
  cuadrado: {
    area: (lado) => lado * lado,
    perimetro: (lado) => 4 * lado,
    required_data: (type, callback) => {
      rl.question("Ingresa el valor del lado del cuadrado en cm: ", (lado) => {
        const l = parseFloat(lado);
        callback(l);
      });
    },
  },
  circulo: {
    area: (radio) => Math.PI * radio * radio,
    perimetro: (radio) => 2 * Math.PI * radio,
    required_data: (type, callback) => {
      rl.question("Ingresa el tamaño del radio en cm: ", (radio) => {
        const r = parseFloat(radio);
        callback(r);
      });
    },
  },
};
