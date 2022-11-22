import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

 

  
  constructor(private navController:NavController) {
    
  }
 
    componentesalum: Componente[] = [ 
    {
      icon: 'information-outline',
      name: 'Inicio',
      redirecTo: '/inicio',
    },
    {
      icon: 'qr-code-outline',
      name: 'Escanear codigo',
      redirecTo: '/escanearco',
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
 
  ];
  cerrarsesion(){
    localStorage.setItem('ingresado','false');
    this.navController.navigateRoot('eleccion');
    console.log('sesion cerrada');
  }
}
