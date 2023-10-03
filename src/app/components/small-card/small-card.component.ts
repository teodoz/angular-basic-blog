import { Component, Input } from '@angular/core';
import { ArticleModel } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent {
@Input() article: ArticleModel | undefined;
constructor() {

}
}
