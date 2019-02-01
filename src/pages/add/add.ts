import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { PostProvider } from '../../providers/post-provider';

//import { AddPage } from '../add/add';
import {HttpClientModule} from '@angular/common/http';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  alive: boolean;

  nome: string = "";
  telefone: string = "";
  telefone2: string = "";
  celular: string = "";
  email: string = "";


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private PstPvdr: PostProvider,
    private appCtrl: App,
    private http: HttpClient
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');

  }

  backHome() {
    this.navCtrl.push(HomePage);
  }
  
  add() {
    let body = {
      nome: this.nome,
      telefone: this.telefone,
      telefone2: this.telefone2,
      celular: this.celular,
      email: this.email,
      add: "add_contact"
    };
    this.PstPvdr.postData(body, 'index.php')
    .subscribe((data)=>{
      this.appCtrl.getRootNav().setRoot(AddPage);
      alert("Cadastro realizado com sucesso");
    },
    (err)=>{
      console.log(err);
    }
    );
  }

}
