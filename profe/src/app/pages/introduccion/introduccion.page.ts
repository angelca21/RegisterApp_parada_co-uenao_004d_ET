import { Component, OnInit } from '@angular/core';
import { AlertButton, AlertController, MenuController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.page.html',
  styleUrls: ['./introduccion.page.scss'],
})
export class IntroduccionPage implements OnInit {

  constructor(private navController:NavController, private menuController: MenuController,private alert:AlertController) { }

  ngOnInit() {
  }
  mostrarMenu()
  {
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
            this.navController.navigateRoot('loginprofe');

            console.log('Sesión Cerrada');
          }
        }
      ]
    });
    await alert.present();
  }

}
