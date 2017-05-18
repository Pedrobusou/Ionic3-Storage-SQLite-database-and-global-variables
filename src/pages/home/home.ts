import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalVars } from "../../providers/global-vars";
import { Database } from "../../providers/database";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myAge;

  constructor(public navCtrl: NavController, private vars:GlobalVars, private db:Database) { }

  setVar() {
    this.vars.setVar(this.myAge);
  }

  getVar() {
    this.vars.getVar();
  }

  setVarDB() {
    this.db.setDb(this.myAge);
  }

  getVarDB() {
    this.db.getDb();
  }
}