import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {RegistroserviceService , Usuario } from '../../services/registroservice.service';
import { ToastController } from '@ionic/angular';


import{
 FormGroup,
 FormControl,
 Validators,
 FormBuilder
} from '@angular/forms'

@Component({
  selector: 'app-reg',
  templateUrl: './reg.page.html',
  styleUrls: ['./reg.page.scss'],
})
export class RegPage implements OnInit {

  formularioRegistro : FormGroup;
  newRegistro: Usuario = <Usuario>{};
  usuarios:Usuario[]=[];

  constructor(private alertController: AlertController, 
              private registroService: RegistroserviceService, 
              private toastController: ToastController, 
              private fb: FormBuilder) { 
                  this.formularioRegistro = fb.group({ 
                    'nombre' : new FormControl("",[ Validators.required,Validators.minLength(3),Validators.maxLength(13)]),
                    'correo' : new FormControl("",[ Validators.required,Validators.maxLength(30)]),
                    'password': new FormControl("", [Validators.required,Validators.minLength(5),Validators.maxLength(13)]),
                    'confirmaPass': new FormControl("", Validators.required)
                  })
               }

  ngOnInit() {
  }



  async CrearUsuario(){
    var form = this.formularioRegistro.value;
    var existe=0;
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header : 'Error..', 
        message: 'Debe ingresar todos los datos', 
        buttons: ['Aceptar']
      })
      await alert.present();
      return;
    }
    else if(form.password != form.confirmaPass){
      const alert = await this.alertController.create({
        header : 'Passwords Diferentes', 
        message: 'Debe confirmar con las mismas contraseñas', 
        buttons: ['Aceptar']
      })
      await alert.present();
      return;
    }
    else{
      this.newRegistro.nombre = form.nombre;
      this.newRegistro.correo = form.correo;
      this.newRegistro.contra = form.password; 
      this.newRegistro.recontra = form.confirmaPass;
      this.registroService.getdatos().then(datos=>{ 
        this.usuarios = datos; 
      if (!datos || datos.length==0){
        this.registroService.Ingresardatos(this.newRegistro).then(dato =>{
          this.newRegistro = <Usuario>{};
          this.showToast('Usuario Creado con éxito!');
      });
      this.formularioRegistro.reset();
      }else{
      for (let obj of this.usuarios){
        if (this.newRegistro.nombre == obj.nombre){
          existe = 1;
        }
      }
      if (existe == 1){
        this.alertCorreoDuplicado();
        this.formularioRegistro.reset();
      } 
      else{
        this.registroService.Ingresardatos(this.newRegistro).then(dato=>{ 
          this.newRegistro=<Usuario>{};
          this.showToast('Usuario Creado con éxito');
        });
        this.formularioRegistro.reset();
      }
    }
    })
    }//findelelse
  }//findelmetodo


  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    })
    toast.present();
  }
  async alertCorreoDuplicado(){
    const alert = await this.alertController.create({ 
      header: '¡Error!',
      message: 'El nombre ingresado ya existe',
      buttons: ['Aceptar']
    })
    await alert.present();
  }


}
