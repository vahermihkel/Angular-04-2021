import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarouselService } from '../admin/carousel-settings/carousel.service';
import { CartService } from '../cart/cart.service';
import { CarouselImage } from '../models/carousel-image.model';
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

  images: CarouselImage[] = [];

  // pean tõstma images välja Service-sse juhtudel, kus kasutan seda teises Componendis
  // 1. lisan pilte
  // 2. muudan, kustutan pilte
  // 3. kuvan teises Componendis ka välja
  // 4. küsin teises Componendis mitu pilti mul on

  itemsOriginal: Item[] = [];
  itemsShown: Item[] = [];
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
    // this.items = this.itemService.items;
    this.itemService.getItemsFromDatabase().subscribe(itemsFromDb => {
      this.itemService.items = [];
      for (const key in itemsFromDb) {
        //     this.items.push(itemsFromDb[key]);
        this.itemService.items.push(itemsFromDb[key]);
      }
      this.itemsOriginal = this.itemService.items;
      this.itemsShown = this.itemsOriginal;
      // this.items = itemsFromDb;
      // this.itemService.items = itemsFromDb;
      console.log("esemed võetud");
      // this.items'ga tahan ngOnInit sees midagi teha, siis pean tegema subscribe sees,
      // kuna this.items täidetakse andmebaasist võttes, mis võtab veidi aega
      // subscribe on asünkroone, kood läheb edasi, subscribe sisu tehakse siis,
      // kui funktsioon on tehtud (praegusel juhul andmebaasist esemed võetud)
    });
    console.log("siin hakkan nende esemetega midagi tegema, siis saab errori");
    this.config.interval = this.carouselService.carouselSettings.interval;
    this.config.wrap = this.carouselService.carouselSettings.wrap;
    this.config.keyboard = this.carouselService.carouselSettings.keyboard;
    this.config.pauseOnHover = this.carouselService.carouselSettings.pauseOnHover;
  }

  // "0"==0  true
  // "0"===0 false
  // "true"==true     true
  // "true"===true     false

  onCategorySelected(category: string) {
    this.itemsShown = this.itemsOriginal.filter(item => item.category === category)

    // .filter((item,index,array)=>{})
    // .filter(item=>{})
    // .filter(()=>{})
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
