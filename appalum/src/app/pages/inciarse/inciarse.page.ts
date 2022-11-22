import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService,Usuario } from '../../services/registroservice.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
  } from '@angular/forms'

@Component({
  selector: 'app-inciarse',
  templateUrl: './inciarse.page.html',
  styleUrls: ['./inciarse.page.scss'],
})
export class InciarsePage implements OnInit {

  handlerMessage='';
  formularioLogin :FormGroup;
  usuarios : Usuario[] = [];

  constructor( private alertController: AlertController,
               private navController: NavController,
               private registroService: RegistroserviceService,
               private fb: FormBuilder) {
                this.formularioLogin = this.fb.group({
                  'nombre': new FormControl("",Validators.required),
                  'password': new FormControl("",Validators.required)
                })
                }

  ngOnInit() {
  }


  async Ingreso(){
    var f= this.formularioLogin.value;
    var a=0;
    this.registroService.getdatos().then(datos=>{
      this.usuarios = datos;
      if(!datos || datos.length==0)
      {
        return null;
      }
      for (let obj of this.usuarios){
        if (obj.nombre == f.nombre && obj.contra==f.password){
          a=1;
          console.log('ingresado');
          localStorage.setItem('ingresado', 'true');
          localStorage.setItem('nombre', f.nombre);
            this.navController.navigateRoot('inicio');
        }
       }
       if (a==0){
        this.alertMsg();
      }
    });
  }
  
  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'error...',
      message: '¡El usuario ingresado no existe',
      buttons: ['Aceptar'],
    });
    await alert.present();

  }

      
  }



