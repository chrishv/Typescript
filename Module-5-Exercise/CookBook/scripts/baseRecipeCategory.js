var BaseRecipeCategory = (function () {
    function BaseRecipeCategory() {
        this._foodGroups = [];
    }
    Object.defineProperty(BaseRecipeCategory.prototype, "name", {
        //get and set blocks for each of the name and foodGroups variables.
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRecipeCategory.prototype, "foodGroups", {
        get: function () {
            return this._foodGroups;
        },
        set: function (foodGroup) {
            this._foodGroups = foodGroup;
        },
        enumerable: true,
        configurable: true
    });
    return BaseRecipeCategory;
})();
//# sourceMappingURL=baseRecipeCategory.js.map