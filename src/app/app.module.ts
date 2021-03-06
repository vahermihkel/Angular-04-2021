import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ItemAddComponent } from './admin/item-add/item-add.component';
import { ItemEditComponent } from './admin/item-edit/item-edit.component';
import { ItemListComponent } from './admin/item-list/item-list.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ViewComponent } from './home/view/view.component';
import { ItemPricePipe } from './pipes/item-price.pipe';
import { ShortenTitlePipe } from './pipes/shorten-title.pipe';
import { CarouselSettingsComponent } from './admin/carousel-settings/carousel-settings.component';
import { CategoryComponent } from './admin/category/category.component';
import { UniqueCategoryPipe } from './pipes/unique-category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CartComponent,
    ItemAddComponent,
    ItemEditComponent,
    ItemListComponent,
    AdminHomeComponent,
    ViewComponent,
    ItemPricePipe,
    ShortenTitlePipe,
    CarouselSettingsComponent,
    CategoryComponent,
    UniqueCategoryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
