import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.page.html',
  styleUrls: ['./codigo.page.scss'],
})
export class CodigoPage  {

  qrCodeString= 'Introduzca los datos de la clase'; 
  scannedResult:any;
  currentDate;
  fecha;
  hora;

  constructor(private menuController: MenuController,private navController:NavController,private alert:AlertController) {
    this.currentDate = new Date()
   }
   ngOnInit() {
    setTimeout(() => {
      this.fecha = new Date().toLocaleDateString();
      this.hora = new Date().toLocaleTimeString();
    });
  }

  usuario={
    seccion:'',
    modulo:'',
  }

  generaScan(){
    this.qrCodeString= this.usuario.modulo+'-'+this.usuario.seccion+'-'+this.hora+'-'+this.fecha
  }

  verScan(){
    this.scannedResult=this.qrCodeString;
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
