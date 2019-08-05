import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import * as RecipeActions from './recipe.actions';
import * as fromRecipe from './recipe.reducer';
import { Recipe } from '../recipe.model';

@Injectable()
export class RecipeEffects {
    @Effect()
    recipeFetch = this.actions$
        .pipe(ofType(RecipeActions.FETCH_RECIPES))
        .pipe(switchMap((action: RecipeActions.FetchRecipes) => {
            return this.http.get<Recipe[]>('https://ng-recipe-book-9f06f.firebaseio.com/recipes.json', {
            });
        })).pipe(map((recipes) => {
            for (const recipe of recipes) {
                if (!recipe.ingredients) {
                    recipe.ingredients = [];
                }
            }
            return {
                type: RecipeActions.SET_RECIPES,
                payload: recipes
            };
        }));
    @Effect({dispatch: false})
    recipeStore = this.actions$
        .pipe(ofType(RecipeActions.STORE_RECIPES))
        .pipe(withLatestFrom(this.store.select('recipes')))
        .pipe(switchMap(([action, state]) => {
            return this.http.put('https://ng-recipe-book-9f06f.firebaseio.com/recipes.json', state.recipes);
        }));


    constructor(private actions$: Actions, private http: HttpClient,
                private store: Store<fromRecipe.FeatureState>) { }
}
