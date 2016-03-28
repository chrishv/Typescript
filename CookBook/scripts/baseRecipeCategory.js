//FROM MODULES 6-8: 
//Copy your BaseRecipeCategory class code
var BaseRecipeCategory = (function () {
    //FROM MODULE 6:
    //Add constructor using the variable names above
    //as the parameters (so you'll have two parameters). 
    //Assign the parameter value to the associated member variables.
    function BaseRecipeCategory(baseRecipeCategory) {
        this.foodGroups = [];
        this.name = baseRecipeCategory.name;
        this.foodGroups = baseRecipeCategory.foodGroups;
    }
    return BaseRecipeCategory;
})();
//# sourceMappingURL=baseRecipeCategory.js.map