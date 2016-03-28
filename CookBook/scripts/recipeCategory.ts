//FROM MODULE 7&8:
//Fill out the body of this class so it extends BaseRecipeCategory
//and implements IRecipeCategory

class RecipeCategory extends BaseRecipeCategory implements IBaseRecipeCategory{
    description: string;
    examples: Example[];

    constructor(recipeCategory: IRecipeCategory) {
        super(recipeCategory);
        this.description = recipeCategory.description;
        this.examples = recipeCategory.examples;
    }
} 