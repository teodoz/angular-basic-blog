import { ContainerComponent } from './../pages/shared/container/container.component';
import { Injectable } from '@angular/core';
import { PageContainerModel } from '../pages/shared/container/container.component';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ArticleModel } from '../pages/home/home.component';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  new = new BehaviorSubject<PageContainerModel | undefined>(
    this.container.content
  );
  constructor(private router: Router, private container: ContainerComponent) {}

  setNew(n: PageContainerModel | ArticleModel | undefined) {
    this.new.next(n);
    this.router.navigateByUrl(`news/${n?.path}`);
  }
}
