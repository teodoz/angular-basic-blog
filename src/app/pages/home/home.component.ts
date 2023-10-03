import { Component } from '@angular/core';


export interface ArticleModel {
  date: string;
  title: string;
  text: string;
  image: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  articles: ArticleModel[] = [
    {date: '10/12/1990',
  title: 'Notícia 01',
text: 'Nova notícia de hoje',
image: 'https://picsum.photos/seed/picsum/200'},
{date: '10/12/1990',
title: 'Notícia 01',
text: 'Nova notícia de hoje',
image: 'https://picsum.photos/seed/picsum/200'},
  ]
}
