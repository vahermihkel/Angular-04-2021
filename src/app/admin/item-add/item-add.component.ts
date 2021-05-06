import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    alert(form);
    console.log(form);
    console.log(form.value);
    console.log(form.value.title);
    console.log(form.value.price);
  }

}
