import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listaasis',
  templateUrl: './listaasis.page.html',
  styleUrls: ['./listaasis.page.scss'],
})
export class ListaasisPage implements OnInit {

  constructor(private navController:NavController) { }

  ngOnInit() {
  }

  cerrarsesion(){
    localStorage.setItem('ingresado','false');
    this.navController.navigateRoot('eleccion');
    console.log('sesion cerrada');
  }

}
