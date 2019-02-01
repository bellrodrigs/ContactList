import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';

/**
 * Generated class for the InfoContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-contact',
  templateUrl: 'info-contact.html',
})
export class InfoContactPage {

  id:number;
  nome:string;
  telefone:string;
  telefone2:string;
  celular:string;
  email:string;

  users:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private PstPvdr: PostProvider,
    private appCtrl: App
    ) {
  }

  ionViewDidLoad() {
    this.users = [];
    this.id = this.navParams.get('id');
    this.single();
    
    console.log('ionViewDidLoad InfoContactPage');
  }

  single(){
    let body = {
      id: this.id,
      load: "show_contact"
    };
    this.PstPvdr.postData(body, 'show.php')
      .subscribe((data:any) => {
        for (let user of JSON.parse(data).result) {
          this.users.push(user);
          console.log(JSON.parse(data).result);
        }
      });
  }

 

}
