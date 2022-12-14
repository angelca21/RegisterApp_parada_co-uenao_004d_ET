import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-escanearco',
  templateUrl: './escanearco.page.html',
  styleUrls: ['./escanearco.page.scss'],
})
export class EscanearcoPage implements OnInit {

  code: any;
  nombre;

  constructor(private menuController: MenuController,private navController:NavController,private alert:AlertController,private barcodescanner:BarcodeScanner) { }

  ngOnInit() {
    this.nombre=localStorage.getItem('nombre');
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
  scan(){
    this.barcodescanner.scan().then(barcodeData => {
      alert("barcode data="+barcodeData.text)
      this.code=barcodeData.text;
     }).catch(err => {
         console.log('Error', err);
     });
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
