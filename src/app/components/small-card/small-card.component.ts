import { ContainerComponent } from './../../pages/shared/container/container.component';
import { NewsService } from './../../services/news.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleModel } from 'src/app/pages/home/home.component';
import { PageContainerModel } from 'src/app/pages/shared/container/container.component';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss'],
})
export class SmallCardComponent {
  @Input() article?: ArticleModel | PageContainerModel;
  constructor(private newsService: NewsService) {}

  openNews() {
    this.newsService.setNew(this.article);
  }
}
