import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients() {
        return this.ingredients;
    }
    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ing: Ingredient) {
        this.ingredients.push(ing);
    }
    addIngredients(ings: Ingredient[]) {
        this.ingredients.push(...ings);
    }
    updateIngredient(index: number, newIng: Ingredient) {
        this.ingredients[index] = newIng;
    }
    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
    }

}
