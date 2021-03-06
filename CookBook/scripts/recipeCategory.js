var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//FROM MODULE 7&8:
//Fill out the body of this class so it extends BaseRecipeCategory
//and implements IRecipeCategory
var RecipeDetails;
(function (RecipeDetails) {
    var RecipeCategory = (function (_super) {
        __extends(RecipeCategory, _super);
        function RecipeCategory(recipeCategory) {
            _super.call(this, recipeCategory);
            this.description = recipeCategory.description;
            this.examples = recipeCategory.examples;
        }
        return RecipeCategory;
    })(BaseRecipeCategory);
    RecipeDetails.RecipeCategory = RecipeCategory;
})(RecipeDetails || (RecipeDetails = {}));
//# sourceMappingURL=recipeCategory.js.map