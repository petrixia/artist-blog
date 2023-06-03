import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articlesContent: any;
  router(router: any, arg1: string) {
    throw new Error('Method not implemented.');
  }

}
