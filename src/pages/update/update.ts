import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ToastController } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';
import {HomePage} from '../home/home';

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
  endereco: string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private PstPvdr: PostProvider, 
    private appCtrl: App,
    public toastCtrl :ToastController
    ) {
  }
  ionViewDidLoad() {
    this.id = this.navParams.get('id');
    this.nome = this.navParams.get('nome');
    this.telefone = this.navParams.get('telefone');
    this.telefone2 = this.navParams.get('telefone2');
    this.celular = this.navParams.get('celular');
    this.email = this.navParams.get('email');
    this.endereco = this.navParams.get('endereco');
    console.log(this.endereco);
  }
  editar() {
    let body = {
      id: this.id,
      nome: this.nome,
      telefone: this.telefone,
      telefone2: this.telefone2,
      celular: this.celular,
      email: this.email,
      endereco: this.endereco,
      add: "edit_contact"
    };
    this.PstPvdr.postData(body, 'update.php')
      .subscribe((data) => {
        this.appCtrl.getRootNav().setRoot(UpdatePage);
        const toast = this.toastCtrl.create({
          message: 'Contato editado com sucesso',
          duration: 3000
        });
        toast.present();
      }, (err) => {
        console.log(err);
      });
  }

  backHome() {
    this.navCtrl.push(HomePage);
  }

}
