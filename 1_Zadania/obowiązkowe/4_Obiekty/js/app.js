//zad 0 a
const city={
    capital:"string",
    population:"number",
    president:"string",
    primeMinisters:"tablica stringów"
    }
    console.log(city.capital);
    console.log(city.population);
    console.log(city.president);
    console.log(city.primeMinisters);
    //zad 0 b
    const timeMachine={
    shape:"string",
    model:"string",
    run( data, place){
        console.log("działa");
    }
    }
    console.log(timeMachine.shape);
    console.log(timeMachine.model);
    console.log(timeMachine.run());
    
    //zad 1
    const boook={
        title:"aaa",
        author:"bbb",
        numberOfPages:"18"
    }
    console.log(boook.title);
    console.log(boook.author);
    console.log(boook.numberOfPages);
    //zad 2
    const person={
        name:"aaa",
        age:"16",
        sayHellow(){
            console.log("hello");
        }
    }
    console.log(person.name);
    console.log(person.age);
    console.log(person.sayHellow());
    
    //zad 3
    var recipe={
        title:"barszcz",
        servings:"5",
        ingredient 
    }
    var ingredient=[2];
     ingredient[0]="woda";
    ingredient[1]="nic";
    console.log(recipe.title);
    console.log(recipe.servings);
    console.log(recipe.ingredient);
    //zad 4
    var movie = {
        director: "Peter Jackson",
        writers: [" J.R.R. Tolkien ", "Fran Walsh", "Philippa Boyens", "Peter Jackson"],
        stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
        country: "New Zealand | USA",
        budget: "$93,000,000",
        imdbPoints: 8.8,
        year: 2001,
        time: "2h 58 min",
        category: " Adventure, Drama, Fantasy"
    }
    for (const property in movie){
    console.log(`movie.${property} =${movie[property]}`);
    }
    
    // zad 5
    var animals = [
        {
            type: "cat",
            breed: "persian",
            name: "Tiberius",
            health: [
                {
                    date: "2012-03-03",
                    visitType: "grafting"
                },
                {
                    date: "2015-06-23",
                    visitType: "bowel surgery"
                }
            ]
        },
    
        {
            type: "Guinea pig",
            breed: "The Rex",
            name: "Marko",
            health: [
                {
                    date: "2015-12-04",
                    visitType: "grafting"
                },
                {
                    date: "2016-03-15",
                    visitType: "ear cleaning"
                }
            ]
        }
    
    ]


    // zad 6
   console.log("Zadanie 6:");

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon);
//isExist = false, łyżka nie istnieje
