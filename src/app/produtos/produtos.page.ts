import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Post } from '../services/post.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
  lista : any = [];
  url_site_img : string;
  limit : number = 10;
  start : number = 0;
  id: number;
  total_itens : number = 0;
  cpf : string;

  total_carrinho : string;
  dadosLogin : any;
  constructor(private provider: Post, public toast: ToastController, private router: Router) { }

  ngOnInit() {
  }

  logout(){

  }

  ionViewWillEnter(){
    this.listarProdutos();
    this.url_site_img = this.provider.url_site_img_produtos;
  }

  listarProdutos(){
    return new Promise(resolve => {

    let dados = {
      requisicao : 'listar-produtos',
      limit : this.limit,
      start : this.start,
      id_cat :this.id, 
      };

      this.provider.dadosApi(dados, 'apiProdutos.php').subscribe(data => {

        if(data['result'] == '0') {
          this.ionViewWillEnter();
        }else{
          this.lista = [];
          for(let item of data['result']){
            this.lista.push(item);
            this.total_itens = data['total'];
            
          }
        }
         
        resolve(true);
        
    });

  });
    
  }

  loadData(event) {

    this.start += this.limit;
  
    setTimeout(() => {
      this.listarProdutos().then(()=>{ 
        event.target.complete();
       });
     
    }, 3000);
    
  
  }

  categorias(){
    this.router.navigate(['/categorias']);
  }

}
