import * as ShoppingListActions from './shopping-list.actions';
import { Ingredient } from '../../shared/ingredient.model';


export interface State {
    ingredients: Ingredient[];
    editedIng: Ingredient;
    editedIngIndex: number;
}

const initialState: State = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ],
    editedIng: null,
    editedIngIndex: -1
};

export function ShoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [
                    ...state.ingredients, action.payload
                ]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [
                    ...state.ingredients, ...action.payload
                ]
            };
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[state.editedIngIndex];
            const updatedIng = {
                ...ingredient,
                ...action.payload.ingredient
            };
            const ings = [...state.ingredients];
            ings[state.editedIngIndex] = updatedIng;
            return {
                ...state,
                ingredients: ings,
                editedIng: null,
                editedIngIndex: -1
            };
        case ShoppingListActions.DELETE_INGREDIENT:
            const delIngs = [...state.ingredients];
            delIngs.splice(state.editedIngIndex, 1);
            return {
                ...state,
                ingredients: delIngs,
                editedIng: null,
                editedIngIndex: -1
            };
        case ShoppingListActions.START_EDIT:
            const editedIngredient = { ...state.ingredients[action.payload] };
            return {
                ...state,
                editedIng: editedIngredient,
                editedIngIndex: action.payload
            };
        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIng: null,
                editedIngIndex: -1
            };

        default:
            return state;
    }
}
