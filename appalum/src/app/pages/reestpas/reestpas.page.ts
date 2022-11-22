import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reestpas',
  templateUrl: './reestpas.page.html',
  styleUrls: ['./reestpas.page.scss'],
})
export class ReestpasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  datos={
    correo:'',
    user:'',
  }
  onSubmit(){
    console.log('submit');
    console.log(this.datos);
  }


}
