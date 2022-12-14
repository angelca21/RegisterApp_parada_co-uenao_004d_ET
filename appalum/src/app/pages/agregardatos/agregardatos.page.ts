import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asis2 } from 'src/app/interfaces/asis2';
import { AsistenciaService } from 'src/app/services/asistencia.service';

@Component({
  selector: 'app-agregardatos',
  templateUrl: './agregardatos.page.html',
  styleUrls: ['./agregardatos.page.scss'],
})
export class AgregardatosPage implements OnInit {

  newdatos: Asis2 = {
    nombre: "", 
    datosasis:""
  }

  constructor(private asisservice:AsistenciaService,private router:Router) { }

  ngOnInit() {
  }

  creardato(){
    this.asisservice.creardatos(this.newdatos).subscribe();
    this.router.navigateByUrl("/listardatos");
  }

}
