import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {
  id: number;
  nome: string;
  telefone: string;
  telefone2: string;
  celular: string;
  email: string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private PstPvdr: PostProvider, 
    private appCtrl: App
    ) {
  }
  ionViewDidLoad() {
    this.id = this.navParams.get('id');
    this.nome = this.navParams.get('nome');
    this.telefone = this.navParams.get('telefone');
    this.telefone2 = this.navParams.get('telefone2');
    this.celular = this.navParams.get('celular');
    this.email = this.navParams.get('email');
    console.log('ionViewDidLoad UpdatePage');
  }
  editar() {
    let body = {
      id: this.id,
      nome: this.nome,
      telefone: this.telefone,
      telefone2: this.telefone2,
      celular: this.celular,
      email: this.email,
      add: "edit_contact"
    };
    this.PstPvdr.postData(body, 'update.php')
      .subscribe((data) => {
        this.appCtrl.getRootNav().setRoot(UpdatePage);
        alert("Contato editado com sucesso");
      }, (err) => {
        console.log(err);
      });
  }
}
