import { Component, Input, OnInit } from '@angular/core';

export interface PageContainerModel {
  title: string;
  text: string;
  image: string;
  date?: string;
  description?: string;
  path?: string;
}

@Component({
  selector: 'app-page-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  @Input() content?: PageContainerModel;
  constructor() {}

  ngOnInit() {
    document.body.scrollTop = 0;
  }

  goBack() {
    history.back();
  }
}
