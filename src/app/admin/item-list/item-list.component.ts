import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    // this.items = this.itemService.items;
    console.log("hakkan esemeid andmebaasist võtma");
    this.itemService.getItemsFromDatabase().subscribe(itemsFromDb => {
      console.log("esemed andmebaasist võetud");
      this.itemService.items = [];
      for (const key in itemsFromDb) {
        this.items.push(itemsFromDb[key]);
        this.itemService.items.push(itemsFromDb[key]);
      }
      // console.log(itemsFromDb);
      // this.items = itemsFromDb;
      // this.itemService.items = itemsFromDb;
    });
  }

  onDeleteItem(id: number) {
    let i = this.itemService.items.findIndex(item => item.id == id);
    this.items.splice(i, 1);
    this.itemService.items.splice(i, 1);
    this.onSaveItemsToDatabase();
  }

  onSaveItemsToDatabase() {
    this.itemService.saveItemsToDatabase().subscribe();
  }

  // service-i sees funktsioon käima panna
  // ma ei saa otse HTMLst service-i sees olevat funktsiooni käima panna

  // miks - HTML on seotud AINULT oma component.ts failiga

  // lahendus: HTML kutsub component.ts failis funktsiooni välja
  // component.ts kutsub service-i sees oleva funktsiooni välja 

}
