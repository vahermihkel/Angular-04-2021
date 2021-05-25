import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sumOfCart = 0;

  constructor(private translate: TranslateService,
    private cartService: CartService) { }

  ngOnInit(): void {
    console.log("ngOnInit navbaris läks käima");

    this.cartService.cartChanged.subscribe(() => {

      this.sumOfCart = 0;
      this.cartService.getItemsInCart().forEach(cartItem => {
        this.sumOfCart = this.sumOfCart + cartItem.price;
      });

    })
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
