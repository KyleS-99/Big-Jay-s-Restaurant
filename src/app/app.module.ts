import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './menu/list/list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuItemService } from './shared/menu-items.service';
import { ShortenPipe } from './shared/shorten.pipe';
import { FooterComponent } from './footer/footer.component';
import { ToggleService } from './shared/toggle-modal.service';
import { ModalComponent } from './modal/modal.component';
import { BookComponent } from './modal/book/book.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    MenuComponent,
    ListComponent,
    AboutUsComponent,
    ContactUsComponent,
    ShortenPipe,
    FooterComponent,
    ModalComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [MenuItemService, ToggleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
