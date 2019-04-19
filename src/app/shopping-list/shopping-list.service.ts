import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients() {
        return this.ingredients;
    }

    addIngredient(ing: Ingredient) {
        this.ingredients.push(ing);
    }
    addIngredients(ings: Ingredient[]) {
        this.ingredients.push(...ings);
    }
}