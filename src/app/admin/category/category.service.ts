import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: { id: string, category: string }[] = [];
  url = "https://webshop-04-2021-default-rtdb.europe-west1.firebasedatabase.app/categories.json";

  constructor(private http: HttpClient) { }

  saveCategories() {
    return this.http.put(this.url, this.categories);
  }

  // firebase = [{ "-MbpQR_XmV-Fvvbv1odT": { category: "vein" } }, { "-MbpQR_XmV-Fvvbv1odT": { category: "auto" } }]
  // for (const key in firebase) {
  // firebase[key] ------  firebase["-MbpQR_XmV-Fvvbv1odT"] 
  // annab mulle: { category: "vein" }
  // .category ------ "vein"
  // }

  getCategories() {
    return this.http.get<{ category: string }[]>(this.url);
  }

  addCategory(category: string) {
    return this.http.post(this.url, { "category": category });
  }

}
