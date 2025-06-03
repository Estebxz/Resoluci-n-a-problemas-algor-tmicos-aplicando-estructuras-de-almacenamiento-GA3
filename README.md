# 📐 Calculadora de Área y Perímetro (CLI)
Este script de Node.js permite al usuario **calcular el área o el perímetro** de diversas figuras geométricas a través de la línea de comandos.

---
## 🧩 Tecnologías utilizadas
- Node.js
- Módulo nativo `readline` para entrada de datos desde consola
---
## ✅ Funcionalidades
- Permite elegir entre **área** o **perímetro**.
- Permite seleccionar una figura geométrica entre:
  - Triángulo
  - Rectángulo
  - Cuadrado
  - Círculo
- Solicita los datos necesarios según la figura y operación elegida.
- Calcula y muestra el resultado con dos decimales.
---
## 🧠 Lógica del Programa
### 1. Inicio del Programa
El usuario ve un mensaje de bienvenida y se le pregunta si desea calcular el **área** o el **perímetro**.
```js
console.info("Hola, ¿qué desea calcular?");
console.info("1. Área");
console.info("2. Perímetro");
```
---
### 2. Validación de Opción
Se valida si el usuario ingresó `1` o `2`. Si no, el programa se cierra.
```js
if (chooseOption !== "1" && chooseOption !== "2") {
  console.info("Opción no válida");
  rl.close();
  return;
}
```
---
### 3. Selección de Figura
Se ofrece un menú para elegir una figura geométrica:
```js
console.info("1. Triángulo");
console.info("2. Rectángulo");
console.info("3. Cuadrado");
console.info("4. Circunferencia");
```
Se mapea el número ingresado a una clave del objeto `figures` para acceder a los métodos correspondientes.

---
### 4. Recolección de Datos
Cada figura tiene un método `required_data(type, callback)` que solicita por consola los datos necesarios según el cálculo elegido.
#### Ejemplo para triángulo:
- Área: base y altura
- Perímetro: tres lados
---
### 5. Cálculo y Resultado
Una vez recolectados los datos, se llama al método correspondiente (`area` o `perimetro`) y se muestra el resultado:
```js
const result = figure[type](...args);
console.log(`La ${type} de ${figureKey} es: ${result.toFixed(2)} cm`);
```
---
## 🧮 Fórmulas Usadas

| Figura     | Área                             | Perímetro                                    |
|------------|----------------------------------|----------------------------------------------|
| Triángulo  | `(base * altura) / 2`            | `a + b + c`                                  |
| Rectángulo | `base * altura`                  | `2 * (base + altura)`                        |
| Cuadrado   | `lado * lado`                    | `4 * lado`                                   |
| Círculo    | `π * radio²`                     | `2 * π * radio`                              |

---
## 📁 Estructura del Objeto `figures`
Cada figura contiene:
- `area`: función que calcula el área
- `perimetro`: función que calcula el perímetro
- `required_data`: función que solicita los datos necesarios vía CLI

```js
const figures = {
  triangulo: { area, perimetro, required_data },
  rectangulo: { area, perimetro, required_data },
  cuadrado: { area, perimetro, required_data },
  circulo: { area, perimetro, required_data },
};
```
---
## 🚀 Ejecución
```bash
node exersive-1.js

---

## ⚠️ Consideraciones
- Los valores ingresados se convierten con `parseFloat()` para asegurar el uso numérico.
- Las operaciones son síncronas usando callbacks, sin `async/await`.
---

---
# 📊 Análisis de Edades - Node.js CLI
Este script de Node.js permite ingresar las edades de 10 personas a través de la línea de comandos (CLI) y luego analiza y muestra estadísticas como cuántas personas son menores, adultas, adultos mayores, así como la edad mínima, máxima y el promedio.
---
## 🚀 Tecnologías utilizadas
- Node.js
- Módulo nativo `readline/promises` para entrada de datos asíncrona desde consola
---

## ✅ Funcionalidades

- Solicita al usuario ingresar la edad de 10 personas.
- Valida que cada edad esté entre 1 y 120 años.
- Clasifica las edades en:
  - Menores de edad: < 18 años
  - Adultos: 18 a 59 años
  - Adultos mayores: ≥ 60 años
- Calcula:
  - Edad mínima
  - Edad máxima
  - Promedio de edades
---

## 🧠 Lógica del Programa
### 1. Inicialización del CLI
- Node.js
- Módulo nativo `readline/promises` para entrada de datos asincrónica desde consola

```js
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = createInterface({ input, output });
```
---

### 2. Recolección de Datos
Se pide al usuario ingresar 10 edades, una por una. Cada edad se valida:

```js
function validateAge(age) {
  return age >= 1 && age <= 120;
}
```
---

### 3. Almacenamiento de las Edades
Se guarda cada edad válida en un arreglo `agesArray`.

---

### 4. Análisis de Datos
Se utilizan funciones de orden superior (`filter`, `reduce`, etc.) para obtener estadísticas:

```js
const functionsAge = {
  countMinorsAge: (arr) => arr.filter((age) => age < 18).length,
  countAdultAge: (arr) => arr.filter((age) => age >= 18 && age < 60).length,
  countSeniorAge: (arr) => arr.filter((age) => age >= 60).length,
  minAge: (arr) => Math.min(...arr),
  maxAge: (arr) => Math.max(...arr),
  averageAge: (arr) => arr.reduce((acc, age) => acc + age, 0) / arr.length,
};
```
---

### 5. Resultados

Se muestran los resultados con una salida amigable:

```bash
Resultados:
- Menores de edad: X
- Mayores de edad: Y
- Adultos mayores: Z
- Edad mínima: X
- Edad máxima: Y
- Promedio de edades: Z
```

---

## 📁 Estructura del Código

- `main()`: Función principal que orquesta todo el flujo.
- `agesArray`: Arreglo que almacena las edades ingresadas.
- `functionsAge`: Objeto con funciones estadísticas.

---

## 🧪 Ejecución

```bash
node edades.js
```

---

## ⚠️ Consideraciones

- Solo se aceptan números entre 1 y 120.
- El ingreso se hace de forma interactiva por consola.
- Utiliza `parseInt` para convertir entradas de texto a número.


# 🔀 Intercalación de Vectores Ordenados - Node.js CLI

Este script permite al usuario ingresar dos vectores ordenados y luego los **fusiona en un solo vector ordenado**. Desde la linea de comandos.
---

## 🚀 Tecnologías utilizadas

- Node.js
- Módulo nativo `readline/promises` para entrada de datos asincrónica desde consola

---

## ✅ Funcionalidades

- Permite ingresar dos vectores ordenados (de 5 elementos cada uno).
- Cada número ingresado debe ser **mayor o igual al anterior**, asegurando el orden.
- Fusiona los dos vectores en uno solo **ordenado y sin duplicados**.
- Muestra el vector resultado en consola.

---

## 🧠 Lógica del Programa

### 1. Función `intercalation(name)`

Solicita al usuario ingresar 5 números ordenados crecientemente para formar un vector:

```js
const inputStr = await rl.question(`Ingrese el numero ${i + 1}: `);
```

Valida que:
- Cada número sea un entero válido.
- Esté en orden creciente con respecto al anterior.

---

### 📁 Estructura del Código

- `intercalation(name)`: Función que recopila un vector ordenado por consola.
- `mergedVectors(v1, v2)`: Función que fusiona y ordena dos vectores.
- `main()`: Flujo principal que orquesta todo.

---

### 2. Función `mergedVectors(v1, v2)`

Intercala los dos vectores ordenados en un solo vector también ordenado:

```js
while(i < v1.length && j < v2.length) {
}
```

---

### 3. Ejecución Principal

La función principal asincrónica ejecuta todo el flujo:

```js
(async function () {
  const vectorArray1 = await intercalation("n1: ");
  const vectorArray2 = await intercalation("n2:");
  const result = mergedVectors(vectorArray1, vectorArray2);
  console.log(result.join(" "));
})();
```

---

## 🧪 Ejecución

```bash
node intercalacion.js
```
---

## 💡 Ejemplo de Uso

```bash
Ingrese los numeros para el vector n1:
Ingrese el numero 1: 2
Ingrese el numero 2: 4
Ingrese el numero 3: 6
Ingrese el numero 4: 8
Ingrese el numero 5: 10

Ingrese los numeros para el vector n2:
Ingrese el numero 1: 1
Ingrese el numero 2: 3
Ingrese el numero 3: 6
Ingrese el numero 4: 9
Ingrese el numero 5: 12

# Resultado:
1 2 3 4 6 8 9 10 12
```
---
## ⚠️ Consideraciones
- Solo acepta números en orden creciente (de lo contrario, vuelve a preguntar).


# 👤 Registro y Consulta de Personas - Node.js CLI
Este script permite registrar, almacenando información básica y sus canciones favoritas. También permite consultar los datos por índice.
---

## 📦 Tecnologías utilizadas
- Node.js
- Módulo `readline/promises`
---
## 🧩 Estructura del Código

### 1. Clase `PersonProps`
Representa a una persona con las siguientes propiedades:

- `name`: Nombre completo
- `cedula`: Documento de identidad
- `birthDate`: Fecha de nacimiento
- `email`: Correo electrónico
- `cityResidence`: Ciudad de residencia
- `cityOrigin`: Ciudad de origen
- `favoriteSongs`: Arreglo de canciones favoritas (máx. 3)

Método:
```js
addFavoriteSong(song, artist)
```
---

### 2. Función `createPerson()`
Solicita al usuario ingresar la información de una persona y hasta 3 canciones favoritas. Retorna una instancia de `PersonProps`.
---
### 3. Función `getUserOption()`
Muestra el menú principal al usuario:
- `a`: Agregar persona (máx. 6)
- `b`: Mostrar persona por índice
- `c`: Salir del programa

Maneja validaciones y llamadas a funciones correspondientes.

---
### 4. Función `showPersonByIndex()`
Solicita un índice y muestra la información de la persona almacenada en esa posición del arreglo `people`.

---

## 📋 Flujo del Programa
1. El usuario selecciona una opción del menú.
2. Si elige agregar, se le solicita:
   - Datos personales
   - Hasta 3 canciones favoritas
3. Si elige mostrar, se le solicita el índice y se muestra la persona correspondiente.
---

## 🧪 Ejemplo de uso
```bash
Seleccione una opcion (a (agregar)/b (mostrar)): a
Nombre: Juan
Cedula: 123456789
...
Titulo de la cancion: Imagine
Artista: John Lennon
Desea agregar otra cancion? (s/n): s
...

Seleccione una opcion (a (agregar)/b (mostrar)): b
Ingrese el indice de la persona: 0
Informacion de la persona:
{
  name: 'Juan',
  cedula: '123456789',
  ...
}
```
---
## ⚠️ Consideraciones
- Máximo 3 canciones por persona.
---