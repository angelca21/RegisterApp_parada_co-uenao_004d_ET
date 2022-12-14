import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { AsistenciaService } from 'src/app/services/asistencia.service';

@Component({
  selector: 'app-listardatos',
  templateUrl: './listardatos.page.html',
  styleUrls: ['./listardatos.page.scss'],
})
export class ListardatosPage implements OnInit {

  datos:[];

  constructor(private asisservice:AsistenciaService, private loadCtrl:LoadingController ) { }

  ngOnInit() {
    this.loaddatos();
  }

  async loaddatos(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadCtrl.create({
      message : "Cargando..", 
      spinner: "bubbles"
    });
    await loading.present();

    this.asisservice.listardatos().subscribe(
      (resp)=>{
        loading.dismiss();
        let listString = JSON.stringify(resp)     //debemos convertir a string el json que recibimos para el arreglo animalitos
        this.datos = JSON.parse(listString)
        event?.target.complete();
        console.log(this.datos);
      }, 
      (err) =>{
        console.log(err.message)
        loading.dismiss();
      }
    )
  }

}
