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
```
---
## ⚠️ Consideraciones
- Los valores ingresados se convierten con `parseFloat()` para asegurar el uso numérico.
- Las operaciones son síncronas usando callbacks, sin `async/await`.
---