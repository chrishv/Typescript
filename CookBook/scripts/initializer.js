var recipeCategories;
var renderer = null;
window.onload = function () {
    var categoriesSelect = document.getElementById('RecipeCategory');
    //The () => is known as a lambda function 
    //When a category is selected (change is noted through on.change) then the loadRecipes function is called
    //which loads up the details 
    categoriesSelect.onchange = function () { return loadRecipes(); };
    //Call the loader object's load() function ("loader" is the object) 
    //Get the receipe data from the json file "recipeTypes.json"
    //The constructor of the RecipeLoader expectes a string parameter and the URL is passed in as one
    var loader = new RecipeLoader("/JSON/recipeTypes.json");
    loader.load();
    renderer = new Renderer();
};
function loadRecipes() {
    var el = document.getElementById('RecipeCategory');
    try {
        var category = recipeCategories.items
            .filter(function (item) { return item.name === el.value; })
            .reduce(function (item) { return new RecipeDetails.RecipeCategory({
            name: el.value,
            foodGroups: item.foodGroups,
            description: item.description,
            examples: item.examples
        }); });
        renderer.renderCategory(category);
    }
    catch (ex) {
        alert(ex.message);
    }
}
//# sourceMappingURL=initializer.js.map