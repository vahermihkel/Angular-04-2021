import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarouselService } from '../admin/carousel-settings/carousel.service';
import { CartService } from '../cart/cart.service';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // images1 = [700, 533, 807, 124, 545, 131].map((n) => `https://picsum.photos/id/${n}/900/500`);
  // *ngFor="let image of images"   1. image = https://picsum.photos/id/700/900/500 2. https://picsum.photos/id/533/900/500
  // src=""     1.   src="https://picsum.photos/id/700/900/500"   2. src="https://picsum.photos/id/533/900/500"

  // alumise kujul images = [{},{}]
  // *ngFor="let image of images"  1. { url: "https://picsum.photos/id/700/900/500", text: "Esimene pildi tekst", header: "Pildi pealkiri", alt: "Siin on esimene pilt" }
  // src=""    1. src="{ url: "https://picsum.photos/id/700/900/500", text: "Esimene pildi tekst", header: "Pildi pealkiri", alt: "Siin on esimene pilt" }"
  // src="{{image}}" (siin nüüd terve objekt)   ----> 
  // src="{{image.url}}" (võtme kaudu saan objektist väärtuse)     src="https://picsum.photos/id/700/900/500"

  // texts = ["dasda", "nr 2-e tekst", "", "", "", ""]
  // headers = ["dasda", "nr 2-e pealkiri", "", "", "", ""]
  // alts = ["dasda", "nr 2-e pealkiri", "", "", "", ""]

  images: any[] = [];

  // pean tõstma images välja Service-sse juhtudel, kus kasutan seda teises Componendis
  // 1. lisan pilte
  // 2. muudan, kustutan pilte
  // 3. kuvan teises Componendis ka välja
  // 4. küsin teises Componendis mitu pilti mul on

  items: Item[] = [];
  pauseOnHover = false;
  // kuupaev = new Date();
  // arv = 0.5;
  // suurarv = 5000000;

  constructor(private cartService: CartService,
    private itemService: ItemService,
    private config: NgbCarouselConfig,
    private carouselService: CarouselService) {
  }

  // KAKS COMPONENTI EI SAA OMAVAHEL OTSE SUHELDA

  ngOnInit(): void {
    // võtame Service-i seest andmed alles siis,
    // kui meil neid vaja läheb

    // vaja läheb siis, kui kasutaja tuleb siia
    // componenti ja ilmub HTML ehk siis läheb
    // ngOnInit() käima
    this.images = this.carouselService.images;
    this.items = this.itemService.items;
    this.config.interval = 10000;
    this.config.wrap = true;
    this.config.keyboard = true;
    this.config.pauseOnHover = true;
  }

  // onChangePauseOnHover() {
  //   this.pauseOnHover = !this.pauseOnHover;
  //   console.log(this.pauseOnHover);
  // }

  onAddToCart(item: any) {
    // this.items = [];
    // this.items.push(item);
    this.cartService.addToCart(item);
    console.log("lisasin ostukorvi");
    this.cartService.cartChanged.next();
  }

}
