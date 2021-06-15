import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item.model';

@Pipe({
  name: 'uniqueCategory'
})
export class UniqueCategoryPipe implements PipeTransform {

  transform(items: Item[]): string[] {
    return items.map(item => item.category) // ["camera","vein","camera","vein","camera",camera"]
      .filter((value, index, array) =>
        array.indexOf(value) == index);
  };

  // [{ese},{title:"asda",category:"midagi"},{ese}]
  // näide: [1,2,3].map(number => number*2)
  // saan massiivi [2,4,6]

  // näide2: [{ese},{title:"asda",category:"midagi"},{ese}]
  // .map(item => item.title)
  // saan massiivi pealkirjadest

  // näide3: [{ese},{title:"asda",category:"midagi"},{ese}]
  // .map(item => ({...item, isActive: true}))
  // ühel esemel: title,price,category,imgSrc
  // pärast mapi on title,price,category,imgSrc,isActive

  // .filter((element, järjekorranumber, massiiv) => {})
  // ["camera","vein","camera","vein","camera","koer"] 
  // element       järjekorranumber        massiiv
  //1."camera"           0                 ["camera","vein","camera","vein","camera",camera"] 
  //2."vein"             1                 ["camera","vein","camera","vein","camera",camera"] 
  //3."camera"           2                 ["camera","vein","camera","vein","camera",camera"] 
  //4."vein"             3                 ["camera","vein","camera","vein","camera",camera"] 
  //5."camera"           4                 ["camera","vein","camera","vein","camera",camera"] 
  //6."koer"             5                 ["camera","vein","camera","vein","camera",camera"] 

// indexOf tähendab tagastatakse esimese leitava indeks massiivis
// massiiv.indexOf(camera) ----- 0
// massiiv.indexOf(vein) ----- 1
// massiiv.indexOf(camera) ----- 0
// massiiv.indexOf(vein) ----- 1
// massiiv.indexOf(camera) ----- 0
// massiiv.indexOf(koer) ----- 5






  // .map abil muudetakse massiivi
  // .filter abil jäetakse kindlad väärtused alles
  // .indexOf küsib järjekorranumbrit

}
