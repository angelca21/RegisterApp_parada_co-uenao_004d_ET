import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroprofeService,Profe } from '../../services/registroprofe.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
  } from '@angular/forms'

@Component({
  selector: 'app-loginprofe',
  templateUrl: './loginprofe.page.html',
  styleUrls: ['./loginprofe.page.scss'],
})
export class LoginprofePage implements OnInit {

  formularioLoginprofe :FormGroup;
  usuarios : Profe[] = [];

  constructor( private alertController: AlertController,
               private navController: NavController,
               private registroService: RegistroprofeService,
               private fb: FormBuilder, private menucontroller:MenuController) {
                this.formularioLoginprofe = this.fb.group({
                  'nombreprofe': new FormControl("",Validators.required),
                  'passwordprofe': new FormControl("",Validators.required)
                })
                }

  ngOnInit() {
  }

  mostrarmenu(){
    this.menucontroller.enable(false);
  }


  async Ingresoprofe(){
    var f= this.formularioLoginprofe.value;
    var a=0;
    this.registroService.getdatos().then(datos=>{
      this.usuarios = datos;
      if(!datos || datos.length==0)
      {
        return null;
      }
      for (let obj of this.usuarios){
        if (obj.nombreprofe == f.nombreprofe && obj.contraprofe==f.passwordprofe){
          a=1;
          console.log('ingresado');
          localStorage.setItem('ingresado', 'true');
          localStorage.setItem('nombreprofe', f.nombreprofe);  
            this.navController.navigateRoot('inicioprofe');
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



