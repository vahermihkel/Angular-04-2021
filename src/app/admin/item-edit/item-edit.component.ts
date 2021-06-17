import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  editItemForm!: FormGroup;
  item!: Item;
  categories: string[] = [];
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
    private router: Router,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categoriesFromDb => {
      this.categoryService.categories = [];
      for (const key in categoriesFromDb) {
        this.categories.push(categoriesFromDb[key].category);
        this.categoryService.categories.push({ id: key, category: categoriesFromDb[key].category });
      }
    });

    this.itemService.getItemsFromDatabase().subscribe(itemsFromDb => {
      this.itemService.items = [];
      for (const key in itemsFromDb) {
        this.itemService.items.push(itemsFromDb[key]);
      }

      let id = Number(this.route.snapshot.paramMap.get("itemId"));
      let item = this.itemService.items.find(item => item.id == id);

      if (item) {
        this.item = item;
        this.editItemForm = new FormGroup({
          title: new FormControl(this.item.title),
          price: new FormControl(this.item.price),
          id: new FormControl(this.item.id),
          imgSrc: new FormControl(this.item.imgSrc),
          category: new FormControl(this.item.category)
        })
      }

    });

  }

  // NgForm - Template-driven form: tavaline vorm
  // FormGroup - ReactiveForm: sinna saab väärtusi sisse panna

  onSubmit(form: FormGroup) {
    console.log(form);
    console.log(form.value);
    if (form.valid) {
      // this.itemService.items.push(form.value);
      let index = this.itemService.items.findIndex(item => item.id == this.item.id);
      this.itemService.items[index] = form.value;
      this.itemService.saveItemsToDatabase().subscribe(() => {
        console.log("ese muudetud ja andmebaasis");
        this.router.navigateByUrl("/admin/esemete-list");
        console.log("url muudetud");
      });
      // subscribe sisu tehakse alles siis kui päring on tehtud
    }
  }


}
