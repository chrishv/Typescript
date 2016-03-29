class BaseRecipeCategory {
    private _name: string;
    private _foodGroups: FoodGroup[] = [];

    //get and set blocks for each of the name and foodGroups variables.

    get name() {
        return this._name;

    }

    set name(name: string) {

        this._name = name;
    }

    get foodGroups() {

        return this._foodGroups;
    }

    set foodGroups(foodGroup: FoodGroup[]) {

        this._foodGroups = foodGroup;
    }


} 