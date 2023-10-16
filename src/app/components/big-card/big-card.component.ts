import { Component, Input } from '@angular/core';
import { ArticleModel } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss'],
})
export class BigCardComponent {
  @Input() article: ArticleModel | undefined;
}
