import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarouselService } from './carousel.service';

@Component({
  selector: 'app-carousel-settings',
  templateUrl: './carousel-settings.component.html',
  styleUrls: ['./carousel-settings.component.css']
})
export class CarouselSettingsComponent implements OnInit {
  images: any[] = [];

  constructor(private carouselService: CarouselService) { }

  ngOnInit(): void {
    this.images = this.carouselService.images;
  }

  onDeleteImage(i: number) {
    this.carouselService.images.splice(i, 1);
  }

  onSubmit(form: NgForm) {
    this.carouselService.images.push(form.value);
    form.reset();
  }

}
