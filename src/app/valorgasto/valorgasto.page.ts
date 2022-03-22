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
  constructor(public alertController: AlertController, private storage: NativeStorage, private actRouter: ActivatedRoute, private router: Router, private provider:Post, public toast: ToastController) { }

  ngOnInit() {

  }

  logout(){
    //this.storage.clear();
    this.router.navigate(['/produtos']);
  }


}
