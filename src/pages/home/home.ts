import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { AddPage } from '../add/add';
import { InfoContactPage } from '../info-contact/info-contact';
import { PostProvider } from '../../providers/post-provider';
import { getComponentViewDefinitionFactory } from '@angular/core/src/view';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public contacts;

  users: any;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private PstPvdr: PostProvider,
    private appCtrl: App,
    private http: HttpClient
  ) {

  }

  OpenInfoContact() {
    this.navCtrl.push(InfoContactPage);
  }

  openAddPage() {
    this.navCtrl.push(AddPage);
  }

  ionViewDidLoad() {
    this.users = [];
    this.load();


  }

  apiUrl = 'http://localhost/crud/get.php';
  /*
   load(){
      let body = {
        load: "get_contact"
      };
      this.http.post(this.apiUrl, JSON.stringify(body))
      .subscribe((data:Response) =>{
        this.users=data.text();
        console.log(this.users);
        console.log("res", data);
        console.log("body", body);
  
  
      }
      );
    }*/


  load() {

    let body = {
      load: "get_contact"
    };
    this.PstPvdr.postData(body, 'get.php')
      .subscribe((data: any) => {
        console.log("console home printa data:", data);
        console.log(JSON.parse(data));
        for (let user of JSON.parse(data).result) {
          this.users.push(user);
          console.log("users", this.users);
          console.log(JSON.parse(data).result);
        }
      },
       (err) => {
          console.log(err);
        }
      );
  }
}
