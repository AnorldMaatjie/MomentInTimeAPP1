import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {user} from '../model/user'
import {DatabaseProvider} from '../../providers/database/database' ;

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  [x: string]: any;
  user = {} as user ;

  constructor(public navCtrl: NavController, public navParams: NavParams ,private db:DatabaseProvider,public alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  Register(user:user){
    if(this.user.email !=null  && this.user.password){
    this.db.register(user.email ,user.password).then(()=>{
      alert("sucess");
    } , (error)=>{
      alert("unsucess");

    }) 
  }else{
    const alert = this.alertCtrl.create({
      title: 'warning!',
      subTitle:  'Please enter email and password' ,
      buttons: ['OK']
    });
    alert.present();
  }
  }

}
