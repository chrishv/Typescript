//FROM MODULE 7&8:
//Fill out the body of this class so it extends BaseRecipeCategory
//and implements IRecipeCategory
module RecipeDetails {

    export class RecipeCategory extends BaseRecipeCategory implements RecipeData.Interfaces.IBaseRecipeCategory {
        description: string;
        examples: Example[];

        constructor(recipeCategory: RecipeData.Interfaces.IRecipeCategory) {
            super(recipeCategory);
            this.description = recipeCategory.description;
            this.examples = recipeCategory.examples;
        }
    }
}