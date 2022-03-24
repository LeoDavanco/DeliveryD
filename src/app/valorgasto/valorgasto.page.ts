import { ToastController, AlertController } from '@ionic/angular';
import { Post } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-valorgasto',
  templateUrl: './valorgasto.page.html',
  styleUrls: ['./valorgasto.page.scss'],
})
export class ValorgastoPage implements OnInit {

  lista : any = [];
  url_site_img : string;
  limit : number = 10;
  start : number = 0;
  id: number;
  total_itens : number = 0;
  cpf : string;

  total_carrinho : string;
  dadosLogin : any;
  checkbox : boolean;
  checkbox1 : boolean;
  checkbox2 : boolean;
  constructor(public alertController: AlertController, private storage: NativeStorage, private actRouter: ActivatedRoute, private router: Router, private provider:Post, public toast: ToastController) { }

  ngOnInit() {
    this.checkbox = JSON.parse(localStorage.getItem('checkbox'));
    this.checkbox1 = JSON.parse(localStorage.getItem('checkbox1'));
    this.checkbox2 = JSON.parse(localStorage.getItem('checkbox2'));

  }

  logout(){
    //this.storage.clear();
    this.router.navigate(['/produtos']);
  }

  saveCheckbox(){
    localStorage.setItem('checkbox', JSON.stringify(this.checkbox));
  }
  saveCheckbox1(){
    localStorage.setItem('checkbox1', JSON.stringify(this.checkbox1));
  }
  saveCheckbox2(){
    localStorage.setItem('checkbox2', JSON.stringify(this.checkbox2));
  }

}
