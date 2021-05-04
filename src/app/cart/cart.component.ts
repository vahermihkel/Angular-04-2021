import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // kooloniga annan tüüpi - objekti massiiv ehk {}[]
  // võrdusmärgiga annan väärtust ehk tühi massiiv alguses
  cartItems: { title: string, price: string, imgSrc: string, category: string }[] = [];

  // LÄHEB KÄIMA SIIS, KUI KOMPILEERITAKSE
  constructor(private cartService: CartService) { }
  // DEPENDENCY INJECTION - SÕLTUVUSE SÜSTIMINE

  // LÄHEB KÄIMA SIIS, KUI KASUTAJA LÄHEB HTMLI PEALE
  ngOnInit(): void {
    this.cartItems = this.cartService.itemsInCart;
  }

  onEmptyCart() {
    this.cartService.itemsInCart = [];
    this.cartItems = this.cartService.itemsInCart;
  }

  onRemoveFromCart(i: number) {
    this.cartService.itemsInCart.splice(i, 1);
  }

}

// home.ts:  items = [{item}]  
// home.html:   ngFor
// (click) - mis kutsub funktsiooni välja home.ts ja saadab selle eseme millel klikkisin sinna funktsiooni
// home.ts: funktsioon mida välja kutsuti ja võtab vastu eseme millel klikiti
// home.ts-s on loodud ühendus service-ga
// funktsioon loodud ühenduse kaudu annab selle eseme mis ta vastu võttis service'i sisse

// ANDMISE POOL TEHTUD - SERVICE's on olemas pärast igat vajutust sobivad esemed
// CART'S VÄLJA KUVAMISE POOL

// cart.ts ngOnInit võtab Service'i seest kõik mis funktsiooni kaudu lisati
// cart.html kuvab selle ngFor abil välja