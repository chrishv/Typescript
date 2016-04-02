var Recipe;
(function (Recipe) {
    var FoodGroups;
    (function (FoodGroups) {
        var FoodGroup = (function () {
            function FoodGroup(name) {
                //Capture and hold the food name
                this.name = name;
            }
            return FoodGroup;
        })();
        FoodGroups.FoodGroup = FoodGroup;
    })(FoodGroups = Recipe.FoodGroups || (Recipe.FoodGroups = {}));
})(Recipe || (Recipe = {}));
//# sourceMappingURL=foodGroup.js.map