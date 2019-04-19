import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Meat',
            'Meat tastes good',
            'https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Vegetables', 3)
            ]),
        new Recipe('Chicken',
        'Chicken taste better',
        'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?cs=srgb&dl=barbecue-bbq-chicken-106343.jpg&fm=jpg',
        [
            new Ingredient('chicken', 1)
        ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

}