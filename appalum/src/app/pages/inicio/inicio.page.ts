import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService,Usuario } from '../../services/registroservice.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

    
    nombre;


  constructor(private menuController: MenuController, private navController:NavController, private alertController:AlertController,
              private registroService:RegistroserviceService,private alert:AlertController) {
               }

  ngOnInit() {

     this.nombre=localStorage.getItem('nombre');

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
            this.navController.navigateRoot('inciarse');

            console.log('Sesión Cerrada');
          }
        }
      ]
    });
    await alert.present();
  }



}
