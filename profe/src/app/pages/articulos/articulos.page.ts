import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/interfaces';
import { ApiService } from '../../services/api.service';
import { AlertController, MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.page.html',
  styleUrls: ['./articulos.page.scss'],
})
export class ArticulosPage implements OnInit {

  api: Article[] = [];

  constructor(private navController:NavController,private apiService:ApiService,private menuController: MenuController,
    private alert:AlertController  ) {

   }

  ngOnInit() {
    this.apiService.getTopHeadlines().subscribe(resp =>{
      console.log('api',resp);
      this.api.push(...resp.articles);
    });
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
            this.navController.navigateRoot('loginprofe');

            console.log('Sesión Cerrada');
          }
        }
      ]
    });
    await alert.present();
  }

}
