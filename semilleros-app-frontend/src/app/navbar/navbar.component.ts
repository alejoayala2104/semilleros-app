import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems: MenuItem[]

  constructor() {
  }

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Usuarios'
      },
      {
        label: 'Semilleros'
      },
      {
        label: 'Coordinadores'
      },
      {
        label: 'Proyectos'
      },
      {
        label: 'Eventos'
      },
      {
        label: 'Estudiantes'
      },
    ];
  }
}
