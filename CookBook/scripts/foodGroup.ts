module Recipe.FoodGroups {

    export class FoodGroup implements RecipeData.Interfaces.IFoodGroup {
        name: string;

        constructor(name: string) {
            //Capture and hold the food name
            this.name = name;
        }

    }
}