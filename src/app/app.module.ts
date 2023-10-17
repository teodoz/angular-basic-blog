import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BaseTitleComponent } from './components/base-title/base-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContainerComponent } from './pages/shared/container/container.component';
import { NewComponent } from './pages/new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BaseTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    AboutComponent,
    ContainerComponent,
    NewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ContainerComponent, HomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
