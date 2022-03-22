import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Produtos', url: '/produtos', icon: 'fast-food' },
    { title: 'Carrinho', url: '/carrinho', icon: 'cart' },
    { title: 'Categorias', url: '/categorias', icon: 'list-circle' },
    { title: 'Empresas Vinculadas', url: '/valorgasto', icon: 'Cart' },
    
  ];

  constructor() {}
}
