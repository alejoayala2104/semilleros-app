import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/domain/usuario';
import { UsuarioService } from 'src/app/services/usuarioservice';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [UsuarioService]
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[];
  selectedUsuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) {

  }

  ngOnInit() {

    this.usuarioService.getUsuarios().then((data) => (this.usuarios = data))
    setTimeout(() => {
      console.log("this.usuarios", this.usuarios);
    }, 100);
  }

  queryUsuario(usuario: any) {

  }

  editUsuario(usuario: any) {

  }

  deleteUsuario(usuario: any) {

  }
}
