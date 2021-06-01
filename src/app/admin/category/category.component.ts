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
    this.categories = this.categoryService.categories;
  }

  onCategoryDelete(i: number) {
    this.categoryService.categories.splice(i, 1);
  }

  onSubmit(form: NgForm) {
    this.categoryService.categories.push(form.value.category);
  }
}
