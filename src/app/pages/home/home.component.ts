import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  articlesContent = [
    {
      id: 1,
      photo:
        'https://cdn.shopify.com/s/files/1/0525/9657/2351/products/irisno.173copy_943x.jpg?v=1665969096',
      title: "aquarelas you've never seen before",
    },
    {
      id: 2,
      photo:
        'https://fcs.mg.gov.br/wp-content/uploads/2021/10/Imagem-para-o-site-2-Tentacao-de-Santo-Antonio-Gilvan-Samico.jpg',
      title: 'xilogravura',
    },
  ];
}
