/*1.	Desarrollar un programa que permita calcular el área o perímetro de algunas figuras planas según la siguiente tabla*/

class AgendaDeContactos {
  constructor() {
    this.listaDeContactos = [];
  }

  agregarContacto(nombre) {
    if (typeof nombre !== "string" || nombre.trim() === "") {
      console.error("El nombre no es válido");
      return;
    }

    if (this.listaDeContactos.includes(nombre)) {
      console.error(`${nombre} ya está en la lista`);
      return;
    }

    this.listaDeContactos.push(nombre);
    console.info(`${nombre} fue agregado`);
  }

  eliminarContacto(nombre) {
    const indice = this.listaDeContactos.indexOf(nombre);
    if (indice !== -1) {
      this.listaDeContactos.splice(indice, 1);
      console.info(`${nombre} fue eliminado`);
    } else {
      console.error(`${nombre} no se encuentra en la lista`);
    }
  }

  actualizarContacto(nombreAnterior, nuevoNombre) {
    if (!nombreAnterior || !nuevoNombre) {
      console.error("Ambos nombres son necesarios para la actualización");
      return;
    }

    const indice = this.listaDeContactos.indexOf(nombreAnterior);
    if (indice !== -1) {
      this.listaDeContactos[indice] = nuevoNombre;
      console.info(`${nombreAnterior} fue actualizado a ${nuevoNombre}`);
    } else {
      console.error(`${nombreAnterior} no se encuentra en la lista`);
    }
  }

  listarContactos() {
    console.log("Lista de contactos:");
    const contactosTabla = this.listaDeContactos.map((nombre, index) => ({
      "#": index + 1,
      Nombre: nombre,
    }));
    console.table(contactosTabla);
  }
}

const agenda = new AgendaDeContactos();

agenda.agregarContacto("Wilmer");
agenda.agregarContacto("Eva");
agenda.agregarContacto("Jose");
agenda.agregarContacto("Camila");
agenda.actualizarContacto("Eva", "Caro");
agenda.eliminarContacto("Jose");

agenda.listarContactos();
