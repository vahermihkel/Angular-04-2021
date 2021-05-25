import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsInCart: Item[] = [];
  cartChanged = new Subject<Item[]>();

  constructor() { }

  addToCart(item: any) {
    this.itemsInCart.push(item);
  }

  emptyCart() {
    this.itemsInCart = [];
  }

  removeFromCart(i: number) {
    this.itemsInCart.splice(i, 1);
  }

  getItemsInCart() {
    return this.itemsInCart;
  }
}
