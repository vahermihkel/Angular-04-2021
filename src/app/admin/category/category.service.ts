import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories = ["camera", "mobile", "laptop"];

  constructor() { }
}
