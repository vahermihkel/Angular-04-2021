import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: string[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    // this.categories = this.categoryService.categories;
    this.categoryService.getCategories().subscribe(categoriesFromDb => {
      this.categoryService.categories = [];
      for (const key in categoriesFromDb) {
        this.categories.push(categoriesFromDb[key].category);
        this.categoryService.categories.push({ id: key, category: categoriesFromDb[key].category });
      }
    });
  }

  onCategoryDelete(i: number) {
    this.categoryService.categories.splice(i, 1);
    this.categories.splice(i, 1);
    this.categoryService.saveCategories().subscribe(() => alert("Kustutatud!"));
  }

  onSubmit(form: NgForm) {
    this.categories.push(form.value.category);
    this.categoryService.categories.push(form.value.category);
    this.categoryService.addCategory(form.value.category).subscribe();
    form.reset();
  }
}
