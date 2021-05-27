import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  images = [
    { url: "https://picsum.photos/id/700/900/500", text: "Esimene pildi tekst", header: "Pildi pealkiri", alt: "Siin on esimene pilt" },
    { url: "https://picsum.photos/id/533/900/500", text: "Teise pildi tekst", header: "Teise pildi pealkiri", alt: "Siin on teine pilt" },
    { url: "https://picsum.photos/id/807/900/500", text: "Kolmanda pildi tekst", header: "Kolmanda pildi pealkiri", alt: "Siin on kolmas pilt" },
    { url: "https://picsum.photos/id/124/900/500", text: "Neljanda pildi tekst", header: "Neljanda pildi pealkiri", alt: "Siin on neljas pilt" },
  ]

  constructor() { }
}
