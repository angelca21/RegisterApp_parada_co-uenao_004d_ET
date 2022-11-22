import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cambiarpas',
  templateUrl: './cambiarpas.page.html',
  styleUrls: ['./cambiarpas.page.scss'],
})
export class CambiarpasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  contra={
    password1:'',
    password2:'',
  }
  onSubmit(){
    console.log('submit');
    console.log(this.contra);
  }

}


