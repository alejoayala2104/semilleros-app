import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {
  getUsuariosData() {
    return [
      {
        id: 1234,
        nombre: 'Alejandro Ayala',
        identificacion: "1233191315",
        direccion: "CONJ RES MONTERCARLO",
        correo: "alejoayala@gmail.com",
        telefono: "3226240407",
        fechaNacimiento: "29/01/1998",
        genero: 1
      },
      {
        id: 1234,
        nombre: 'Maria Salas',
        identificacion: "132187546",
        direccion: "MIRAFLORES",
        correo: "mariasalas12@gmail.com",
        telefono: "30412356874",
        fechaNacimiento: "12/02/2002",
        genero: 2
      }
    ]
  }

  getUsuarios() {
    return Promise.resolve(this.getUsuariosData());
  }

};
