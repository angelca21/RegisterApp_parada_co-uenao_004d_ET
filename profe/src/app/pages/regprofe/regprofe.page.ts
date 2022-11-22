import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroprofeService,Profe } from '../../services/registroprofe.service';
import { ToastController } from '@ionic/angular';


import{
 FormGroup,
 FormControl,
 Validators,
 FormBuilder
} from '@angular/forms'

@Component({
  selector: 'app-regprofe',
  templateUrl: './regprofe.page.html',
  styleUrls: ['./regprofe.page.scss'],
})
export class RegprofePage implements OnInit {

  formularioRegistroprofe : FormGroup;
  newRegistro: Profe = <Profe>{};
  usuarios:Profe[]=[];

  constructor(private alertController: AlertController, 
              private registroService: RegistroprofeService, 
              private toastController: ToastController, 
              private fb: FormBuilder) { 
                  this.formularioRegistroprofe = fb.group({ 
                    'nombreprofe' : new FormControl("",[ Validators.required,Validators.minLength(3),Validators.maxLength(13)]),
                    'correoprofe' : new FormControl("",[ Validators.required,Validators.maxLength(30)]),
                    'passwordprofe': new FormControl("", [Validators.required,Validators.minLength(5),Validators.maxLength(13)]),
                    'confirmaPassprofe': new FormControl("", Validators.required)
                  })
               }

  ngOnInit() {
  }



  async CrearUsuarioprofe(){
    var form = this.formularioRegistroprofe.value;
    var existe=0;
    if(this.formularioRegistroprofe.invalid){
      const alert = await this.alertController.create({
        header : 'Error..', 
        message: 'Debe ingresar todos los datos', 
        buttons: ['Aceptar']
      })
      await alert.present();
      return;
    }
    else if(form.passwordprofe != form.confirmaPassprofe){
      const alert = await this.alertController.create({
        header : 'Passwords Diferentes', 
        message: 'Debe confirmar con las mismas contraseñas', 
        buttons: ['Aceptar']
      })
      await alert.present();
      return;
    }
    else{
      this.newRegistro.nombreprofe = form.nombreprofe;
      this.newRegistro.correoprofe = form.correoprofe;
      this.newRegistro.contraprofe = form.passwordprofe; 
      this.newRegistro.recontraprofe = form.confirmaPassprofe;
      this.registroService.getdatos().then(datos=>{ 
        this.usuarios = datos; 
      if (!datos || datos.length==0){
        this.registroService.Ingresardatos(this.newRegistro).then(dato =>{
          this.newRegistro = <Profe>{};
          this.showToast('Usuario Creado con éxito!');
      });
      this.formularioRegistroprofe.reset();
      }else{
      for (let obj of this.usuarios){
        if (this.newRegistro.nombreprofe == obj.nombreprofe){
          existe = 1;
        }
      }
      if (existe == 1){
        this.alertCorreoDuplicado();
        this.formularioRegistroprofe.reset();
      } 
      else{
        this.registroService.Ingresardatos(this.newRegistro).then(dato=>{ 
          this.newRegistro=<Profe>{};
          this.showToast('Usuario Creado con éxito');
        });
        this.formularioRegistroprofe.reset();
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
