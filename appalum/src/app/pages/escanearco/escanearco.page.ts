import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-escanearco',
  templateUrl: './escanearco.page.html',
  styleUrls: ['./escanearco.page.scss'],
})
export class EscanearcoPage implements OnInit {

  constructor(private menuController: MenuController,private navController:NavController,private alert:AlertController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
  async cerrarsesion(){
    const alert = await this.alert.create({
      header: 'Desea Cerrar Sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('La sesión activa');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            localStorage.setItem('ingresado', 'false');
            this.navController.navigateRoot('inciarse');

            console.log('Sesión Cerrada');
          }
        }
      ]
    });
    await alert.present();
  }
}
