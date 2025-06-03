import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = createInterface({ input, output });
const people = [];

class PersonProps {
  constructor(name, cedula, birthDate, email, cityResidence, cityOrigin) {
    this.name = name;
    this.cedula = cedula;
    this.birthDate = birthDate;
    this.email = email;
    this.cityResidence = cityResidence;
    this.cityOrigin = cityOrigin;
    this.favoriteSongs = [];
  }

  addFavoriteSong(song, artist) {
    if (this.favoriteSongs.length < 3) {
      this.favoriteSongs.push({ song, artist });
    } else {
      console.log("Solo puedes agregar 3 canciones");
    }
  }
}

async function getUserOption() {
  let option = (
    await rl.question("Seleccione una opcion (a (agregar)/b (mostrar)): ")
  ).toLowerCase();
  const optionsCase = {
    a: async () => {
      if (people.length >= 6) {
        console.log("No se pueden agregar mas personas");
      } else {
        const person = await createPerson();
        people.push(person);
        console.log("Persona agregada exitosamente");
      }
    },
    b: async () => {
      await showPersonByIndex();
      await getUserOption();
    },
    c: () => {
      console.log("Programa finalizado");
      rl.close();
    },
    default: async () => {
      console.log("Opción inválida");
      await getUserOption();
    },
  };

  if (optionsCase[option]) {
    await optionsCase[option]();
  } else {
    await optionsCase.default();
  }
}

async function createPerson() {
  const name = await rl.question("Nombre: ");
  const cedula = await rl.question("Cedula: ");
  const birthDate = await rl.question("Fecha de nacimiento: ");
  const email = await rl.question("Correo electronico: ");
  const cityResidence = await rl.question("Ciudad de residencia: ");
  const cityOrigin = await rl.question("Ciudad de origen: ");
  const person = new PersonProps(
    name,
    cedula,
    birthDate,
    email,
    cityResidence,
    cityOrigin
  );

  for (let i = 0; i < 3; i++) {
    const song = await rl.question("Titulo de la cancion: ");
    const artist = await rl.question("Artista: ");
    person.addFavoriteSong(song, artist);

    const addOtherSong = await rl.question("Desea agregar otra cancion? (s/n)");
    if (addOtherSong.toLowerCase() !== "s") break;
  }
  console.log("Persona agregada exitosamente");
  return person;
}

async function showPersonByIndex() {
  if (people.length === 0) {
    console.log("No hay personas registradas");
    return;
  }
  const indexInput = await rl.question("Ingrese el indice de la persona");
  const index = parseInt(indexInput);
  if (isNaN(index) || index < 0 || index >= people.length) {
    console.log("Indice no valido");
    return;
  }
  const personData = people[index].getUserOption();
  console.log("Informacion de la persona: ");
  console.log(personData);
}

getUserOption();
