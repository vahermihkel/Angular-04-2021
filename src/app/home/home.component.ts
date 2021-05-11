import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: { title: string, price: number, imgSrc: string, category: string }[] = [];

  constructor(private cartService: CartService,
    private itemService: ItemService) { }

  // KAKS COMPONENTI EI SAA OMAVAHEL OTSE SUHELDA

  ngOnInit(): void {
    this.items = this.itemService.items;
  }

  onAddToCart(item: any) {
    // this.items = [];
    // this.items.push(item);
    this.cartService.itemsInCart.push(item);
  }

}
