import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-asistiempo',
  templateUrl: './asistiempo.page.html',
  styleUrls: ['./asistiempo.page.scss'],
})
export class AsistiempoPage implements OnInit {

  constructor(private navController:NavController) { }

  ngOnInit() {
  }
  cerrarsesion(){
    localStorage.setItem('ingresado','false');
    this.navController.navigateRoot('eleccion');
    console.log('sesion cerrada');
  }

}
