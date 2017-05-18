import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class GlobalVars {

  constructor(
    private storage: Storage) {
    console.log('Hello GlobalVars Provider');
  }

  setVar(val) {
    this.storage.set('age', val);
  }

  getVar() {
    this.storage.get('age').then((val) => {
      console.log('Your age is', val);
    });
  }
}
