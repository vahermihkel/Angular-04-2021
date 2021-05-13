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
  cartItems: { title: string, price: number, imgSrc: string, category: string }[] = [];
  sumOfCart = 0;

  // LÄHEB KÄIMA SIIS, KUI KOMPILEERITAKSE
  constructor(private cartService: CartService) { }
  // DEPENDENCY INJECTION - SÕLTUVUSE SÜSTIMINE

  // LÄHEB KÄIMA SIIS, KUI KASUTAJA LÄHEB HTMLI PEALE
  ngOnInit(): void {
    this.cartItems = this.cartService.getItemsInCart();
    this.calculateSumOfCart();
  }

  onEmptyCart() {
    this.cartService.emptyCart();
    this.cartItems = this.cartService.getItemsInCart();
    this.calculateSumOfCart();
  }

  onRemoveFromCart(i: number) {
    this.cartService.removeFromCart(i);
    this.calculateSumOfCart();
  }

  calculateSumOfCart() {
    this.sumOfCart = 0;
    this.cartItems.forEach(cartItem => {
      this.sumOfCart = this.sumOfCart + cartItem.price;
    });
    //[{ title: "..", price: 20 }, { title: "..", price: 30 }]
    // cartItem = { title: "..", price: 20 }
    //    20    = 0 + 20
    // cartItem = { title: "..", price: 30 }
    //    50    = 20 + 30
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