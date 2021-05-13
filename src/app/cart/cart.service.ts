import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsInCart: { title: string, price: number, imgSrc: string, category: string }[] = [];

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
