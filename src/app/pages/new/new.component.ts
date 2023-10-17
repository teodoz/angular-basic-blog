import { NewsService } from './../../services/news.service';
import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { PageContainerModel } from '../shared/container/container.component';
import { ArticleModel, HomeComponent } from '../home/home.component';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit, AfterViewInit {
  @Input() data: PageContainerModel | ArticleModel | undefined;
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private home: HomeComponent,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.newsService.new.subscribe((n) => (this.data = n));
  }

  ngAfterViewInit(): void {
    const path = this.route.snapshot.params['path'];
    if (path === 'avancos-na-inteligencia-artificial') {
      this.newsService.setNew(this.home.bigArticle);
    } else {
      const article = this.returnArticle(path);
      this.newsService.setNew(article);
    }
    this.cdRef.detectChanges();
  }

  returnArticle(path: string) {
    return this.home.articles.filter((a) => a.path === path)[0];
  }
}
