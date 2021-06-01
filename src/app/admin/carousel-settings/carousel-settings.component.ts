import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { CarouselImage } from 'src/app/models/carousel-image.model';
import { CarouselService } from './carousel.service';

@Component({
  selector: 'app-carousel-settings',
  templateUrl: './carousel-settings.component.html',
  styleUrls: ['./carousel-settings.component.css']
})
export class CarouselSettingsComponent implements OnInit {
  images: CarouselImage[] = [];
  changeSettingsForm!: FormGroup;

  constructor(private carouselService: CarouselService) { }

  ngOnInit(): void {
    this.images = this.carouselService.images;
    this.changeSettingsForm = new FormGroup({
      interval: new FormControl(this.carouselService.carouselSettings.interval),
      wrap: new FormControl(this.carouselService.carouselSettings.wrap),
      keyboard: new FormControl(this.carouselService.carouselSettings.keyboard),
      pauseOnHover: new FormControl(this.carouselService.carouselSettings.pauseOnHover),
    });
  }

  onChangeSettings() {
    this.carouselService.carouselSettings = this.changeSettingsForm.value;
    alert("Seaded uuendatud!");
  }

  onDeleteImage(i: number) {
    this.carouselService.images.splice(i, 1);
  }

  onAddImage(form: NgForm) {
    this.carouselService.images.push(form.value);
    form.reset();
  }

}
