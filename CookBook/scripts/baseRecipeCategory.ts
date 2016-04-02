class BaseRecipeCategory implements RecipeData.Interfaces.IBaseRecipeCategory{
    name: string;
    foodGroups: Recipe.FoodGroups.FoodGroup[] = [];

    //Use IBaseRecipeCategory to define the expected parameters for the class constructor and member variables.
    constructor(baseRecipeCategory: RecipeData.Interfaces.IBaseRecipeCategory) {
        this.name = baseRecipeCategory.name;
        this.foodGroups = baseRecipeCategory.foodGroups; 
    }

} 