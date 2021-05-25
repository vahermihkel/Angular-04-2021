export class Item {
    constructor(
        public title: string,
        public price: number,
        public imgSrc: string,
        public category: string,
    ) { }
}

// koondada kokku need kohad kus kirjutasime pikalt objekti välja

// {title: string, price: number, imgSrc: string, category: string}
// Item

// {title: string, price: number, imgSrc: string, category: string}[]
// Item[]

// 1. Kui teeme muutuse, siis muutub kõikjal korraga
// 2. Ei riiva silma pikalt välja kirjutatud objekt - kui on 20 väärtust, siis on väga pikk
// 3. Näeme kohe esimese pilguga, et on täpselt samad objektid