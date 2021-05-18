import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  item!: { title: string, imgSrc: string, price: number, category: string };
  editItemForm!: FormGroup;
  id: number = 0;
  // siin üleval on klassi muutujad 
  // (vastand sellele on lokaalsed muutujad, mis on 
  // funktsioonide sees "let" algusega)
  // me võime kõik muutujad teha klassimuutjaks kui tahame
  // (midagi ei juhtu sellest)
  // viisakas/ilus/korrektne kood on selline, kui kasutame
  // muutujat vaid ühes funktsioonis ja mitte HTML-s, tõstame
  // selle lokaalseks muutujaks

  // klassimuutujat kasutame HTMLs ja/või kahes funktsioonis

  constructor(private route: ActivatedRoute,
    private itemService: ItemService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("itemId"));
    this.item = this.itemService.items[this.id];

    this.editItemForm = new FormGroup({
      title: new FormControl(this.item.title),
      price: new FormControl(this.item.price),
      imgSrc: new FormControl(this.item.imgSrc),
      category: new FormControl(this.item.category)
    })
  }

  // NgForm - Template-driven form: tavaline vorm
  // FormGroup - ReactiveForm: sinna saab väärtusi sisse panna

  onSubmit(form: FormGroup) {
    console.log(form);
    console.log(form.value);
    if (form.valid) {
      // this.itemService.items.push(form.value);
      this.itemService.items[this.id] = form.value;
      this.router.navigateByUrl("/admin/esemete-list");
    }
  }


}
