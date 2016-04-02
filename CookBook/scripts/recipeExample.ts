
//Example class holds the details of each menu item
import Interfaces = RecipeData.Interfaces;
class Example implements Interfaces.IExample{
    name: string;
    ingredients: Ingredient[] = [];
    prepTime: string; 
                  
    constructor(example: Interfaces.IExample) { 
        this.name = example.name;
        this.ingredients = example.ingredients;
        this.prepTime = example.prepTime;
    }             
}


