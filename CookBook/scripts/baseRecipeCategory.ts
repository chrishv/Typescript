//FROM MODULES 6-8: 
//Copy your BaseRecipeCategory class code

class BaseRecipeCategory implements IBaseRecipeCategory{
    name: string;
    foodGroups: FoodGroup[] = [];

    //FROM MODULE 6:
    //Add constructor using the variable names above
    //as the parameters (so you'll have two parameters). 
    //Assign the parameter value to the associated member variables.
    constructor(baseRecipeCategory: IBaseRecipeCategory) {
        this.name = baseRecipeCategory.name;
        this.foodGroups = baseRecipeCategory.foodGroups;
    }

} 