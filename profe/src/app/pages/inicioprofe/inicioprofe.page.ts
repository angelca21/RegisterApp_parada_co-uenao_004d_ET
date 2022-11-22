import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { RegistroprofeService,Profe } from '../../services/registroprofe.service';



@Component({
  selector: 'app-inicioprofe',
  templateUrl: './inicioprofe.page.html',
  styleUrls: ['./inicioprofe.page.scss'],
})
export class InicioprofePage implements OnInit {

  nombreprofe;

  constructor( private navController:NavController,private menucontroller:MenuController,private storage: Storage, 
    private serviceprofe:RegistroprofeService,private alert:AlertController) { }

  ngOnInit() {

     this.nombreprofe=localStorage.getItem('nombreprofe')
      
    }


  mostrarMenu()
  {
    this.menucontroller.open('first');
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
