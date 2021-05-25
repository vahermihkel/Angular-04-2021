import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../cart/cart.service';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  items: Item[] = [];
  pauseOnHover = false;
  // kuupaev = new Date();
  // arv = 0.5;
  // suurarv = 5000000;

  constructor(private cartService: CartService,
    private itemService: ItemService,
    private config: NgbCarouselConfig) {
  }

  // KAKS COMPONENTI EI SAA OMAVAHEL OTSE SUHELDA

  ngOnInit(): void {
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
