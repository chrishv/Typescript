/// <reference path="typings/jquery.d.ts" />

class RecipeLoader {
    constructor(public url: string) {}

    load() {
        $.getJSON(this.url,(data) => {
            this.mapData(data);        
        });
    }

    mapData(data) {
        if (data) {
            var categories: any[] = data.recipeCategories;
            
            //Pass IRecipeCategory as the type - recipeCategories defined using generics
            recipeCategories = new RecipeCategories<Interfaces.IRecipeCategory>();
                        
            //Defined to pass IRecipeCategorySummary as the generic value.
            var recipeCategoriesSummary = new RecipeCategories<Interfaces.IRecipeCategorySummary>();
            
            categories.forEach((category) => {
                var recipeCategory = new RecipeDetails.RecipeCategory({
                    name: category.title,
                    foodGroups: this.getFoodGroups(category),
                    description: category.details,
                    examples: this.getExamples(category)
                });
                //Each RecipeCategory object created with the captured data add it, using the "push" function
                //to the recipeCategories object which is just an array of objects
                recipeCategories.items.push(recipeCategory);

                //As we are still looping round set-up a recipe summary object and add it to the 
                //recipecategorysummary object, which is also an array of objects.  Use the push function
                //Render function builds HTML code
                    var recipeCategorySummary = new RecipeCategorySummary({
                         
                        title: category.details,
                        text: category.title
                     });
                    recipeCategoriesSummary.items.push(recipeCategorySummary);
                 
            });
            
            //Render the categories into the select
            renderer.renderCategories(recipeCategoriesSummary);
        }
        else {
            renderer.renderError();
        }
    }

    getFoodGroups(category) : Recipe.FoodGroups.FoodGroup[] {
        //Map foodgroups data to TS object
        return category.foodGroups.map((foodGroup) => {
            var group = new Recipe.FoodGroups.FoodGroup(foodGroup.title);
            return group;
        });
    }

    getExamples(category) : Interfaces.IExample[] {
        return category.examples.map((example) => { 
            return new Example({
                name: example.name,
                ingredients: this.getIngredients(example),
                prepTime: example.prepTime
            });
        });
    }

    getIngredients(example): Ingredient[] {
        return example.ingredients.map((value) => {
            return new Ingredient(value);
        });
    }
} 