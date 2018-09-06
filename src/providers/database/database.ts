import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
declare var firebase ;

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  message;
  constructor(public http: HttpClient,public alertCtrl: AlertController,public toastCtrl: ToastController) {
    console.log('Hello DatabaseProvider Provider');
  }



  register(email , password){ 
    return new Promise((resolve, reject)=>{
      firebase.auth().createUserWithEmailAndPassword(email , password) .then(()=>{

        const toast = this.toastCtrl.create({
          message: 'Successfully Registered',
          duration: 3000,
          position: 'middle'
        });
        toast.present();
      } , (error)=>{
         
        const alert = this.alertCtrl.create({
          title: 'warning!',
          subTitle:error.message,
          buttons: ['OK']
        });
        alert.present();

      });
  

 })

 }

 login(email , password){
  return new Promise((resolve, reject)=>{
    firebase.auth().signInWithEmailAndPassword(email , password).then(()=>{

      resolve();
    } , (error)=>{
      reject(error);


    });


})
}

forgetPassword(email){
  return new Promise((resolve, reject)=>{
    firebase.auth().sendPasswordResetEmail(email ) ;
    resolve();

})

}

}
