import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {user} from '../model/user'
import {DatabaseProvider} from '../../providers/database/database' ;
import { RegisterPage } from '../register/register';
import {HomePage} from '../home/home';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as user ;
  errmessg;
  constructor(public navCtrl: NavController, public navParams: NavParams , private db:DatabaseProvider,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Login(user:user){
    this.db.login(user.email ,user.password).then(()=>{

      this.navCtrl.setRoot(HomePage);
      alert("sucess")
    } ,(error)=>{ 
      
           
    })


  }

  forgetPassword(user:user){
    this.db.forgetPassword(user.email).then(()=>{
      alert("success")
    } , (error)=>{

    })
  }
  Register(){
    this.navCtrl.push(RegisterPage);
  }
}
