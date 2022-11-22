import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-listaasis',
  templateUrl: './listaasis.page.html',
  styleUrls: ['./listaasis.page.scss'],
})
export class ListaasisPage implements OnInit {

  constructor(private navController:NavController,private alert:AlertController) { }

  ngOnInit() {
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
