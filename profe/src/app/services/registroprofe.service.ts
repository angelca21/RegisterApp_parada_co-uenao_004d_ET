import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Profe {
  nombreprofe: String;
  correoprofe: string;
  contraprofe: string;
  recontraprofe: string;

}

const USERS_KEY = 'my-profes';

@Injectable({
  providedIn: 'root'
})
export class RegistroprofeService {

  private _storage: Storage;
 

  constructor(private storage: Storage) {
    this.init();
  }
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async Ingresardatos(dato: Profe): Promise<any> {
    return this.storage.get(USERS_KEY).then((datos: Profe[]) => {
      if (datos) {
        datos.push(dato);
        return this.storage.set(USERS_KEY, datos);
      } else {
        return this.storage.set(USERS_KEY, [dato]);
      }
    })

  }
  async getdatos():Promise<Profe[]>{
    return this.storage.get(USERS_KEY);
  }

}
