import { Component, OnInit } from '@angular/core';


interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  componentesalum: Componente[] = [ 
    {
      icon: 'information-outline',
      name: 'Inicio',
      redirecTo: '/inicio',
    },
    {
      icon: 'scan-outline',
      name: 'escanear codigo',
      redirecTo: '/codigo',
    },
    {
      icon: 'help-circle-outline',
      name: 'Introducción',
      redirecTo: '/introduccion',
    },
    {
      icon: 'book',
      name: 'Articulos',
      redirecTo: '/articulos',
    },
    {
      icon: 'log-out-outline',
      name: 'Cerrar sesión',
      redirecTo: '/eleccion',
    }, 
  ];

}
