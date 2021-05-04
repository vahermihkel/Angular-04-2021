import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsInCart: { title: string, price: string, imgSrc: string, category: string }[] = [];

  constructor() { }
}
