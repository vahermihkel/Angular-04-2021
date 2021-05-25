import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenTitle'
})
export class ShortenTitlePipe implements PipeTransform {

  transform(value: string, wordCount?: number): string { // ? - vabatahtlik muutuja
    if (!wordCount) { // ! - ei ole antud - ei ole olemas
      wordCount = 3;
    }
    return value.split(" ").slice(0, wordCount).join(" ");
  }

  // Elas metsas mutionu, keset metsa -- .split(" ")
  // ['Elas', 'metsas', 'mutionu,', 'keset', 'metsa'] -- .slice(0,3)
  // ['Elas', 'metsas', 'mutionu,'] -- .join("::")
  // Elas::metsas::mutionu,    -- .replace(',',"")

}
