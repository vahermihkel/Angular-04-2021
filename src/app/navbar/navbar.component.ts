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

    // ngOnInit läheb ainult ühe korra käima (vt console.log tulemist)
    this.cartService.cartChanged.subscribe(() => {

      this.sumOfCart = 0;
      this.cartService.getItemsInCart().forEach(cartItem => {
        this.sumOfCart = this.sumOfCart + cartItem.price;
      });

      // uuendada saamiseks peab minema funktsioon käima, mis uuesti arvutaks
      // ostukorvi kogusummma

      // ülalolev funktsioon peab minema siin componendis käima
      // aga peab käima minema vajutades nuppu teises componendis
      // (click) - htmls         funktsioon() - .ts

      // seda võimaldab Subject
      // Subject peab olema Service-i sees ehk Subject peab ühendama kahte componenti

      // Subjecti kasutamiseks esmalt ühendama Componendi Service'ga
      // seejärel Componendi sees Service kaudu Subjecti käimapanek (subscribe) 
      // ja sisend (next)

    })
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
