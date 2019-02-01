import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { AddPage } from '../add/add';
import { InfoContactPage } from '../info-contact/info-contact';
import { PostProvider } from '../../providers/post-provider';
import { getComponentViewDefinitionFactory } from '@angular/core/src/view';
import { HttpClient } from '@angular/common/http';
import { UpdatePage } from "../update/update";



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

  openAddPage() {
    this.navCtrl.push(AddPage);
  }

  ionViewDidLoad() {
    this.users = [];
    this.load();

  }

  apiUrl = 'http://localhost/crud/get.php';
 
  load() {

    let body = {
      load: "get_contact"
    };
    this.PstPvdr.postData(body, 'get.php')
      .subscribe((data: any) => {
        for (let user of JSON.parse(data).result) {
          this.users.push(user);
        }
      },
       (err) => {
          console.log(err);
        }
      );
  }

  OpenInfoContact(id){
    this.navCtrl.push(InfoContactPage, {
      'id' : id
    });
  }

  editContact(id,nome,telefone,telefone2,celular,email){
    this.navCtrl.push(UpdatePage, {
      'id' : id,
      'nome' : nome,
      'telefone' : telefone,
      'telefone2' : telefone2,
      'celular' : celular,
      'email' : email
    });
  }

  deleteContact(id){
    let body = {
      id : id,
      add: "delete_contact"
    };
    this.PstPvdr.postData(body, 'delete.php')
      .subscribe((data) => {
        this.appCtrl.getRootNav().setRoot(HomePage);
      });
  }
  
}


