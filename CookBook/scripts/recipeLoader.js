/// <reference path="typings/jquery.d.ts" />
var RecipeLoader = (function () {
    function RecipeLoader(url) {
        this.url = url;
    }
    RecipeLoader.prototype.load = function () {
        var _this = this;
        $.getJSON(this.url, function (data) {
            _this.mapData(data);
        });
    };
    RecipeLoader.prototype.mapData = function (data) {
        var _this = this;
        if (data) {
            var categories = data.recipeCategories;
            //Pass IRecipeCategory as the type - recipeCategories defined using generics
            recipeCategories = new RecipeCategories();
            //Defined to pass IRecipeCategorySummary as the generic value.
            var recipeCategoriesSummary = new RecipeCategories();
            categories.forEach(function (category) {
                var recipeCategory = new RecipeDetails.RecipeCategory({
                    name: category.title,
                    foodGroups: _this.getFoodGroups(category),
                    description: category.details,
                    examples: _this.getExamples(category)
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
    };
    RecipeLoader.prototype.getFoodGroups = function (category) {
        //Map foodgroups data to TS object
        return category.foodGroups.map(function (foodGroup) {
            var group = new Recipe.FoodGroups.FoodGroup(foodGroup.title);
            return group;
        });
    };
    RecipeLoader.prototype.getExamples = function (category) {
        var _this = this;
        return category.examples.map(function (example) {
            return new Example({
                name: example.name,
                ingredients: _this.getIngredients(example),
                prepTime: example.prepTime
            });
        });
    };
    RecipeLoader.prototype.getIngredients = function (example) {
        return example.ingredients.map(function (value) {
            return new Ingredient(value);
        });
    };
    return RecipeLoader;
})();
//# sourceMappingURL=recipeLoader.js.map