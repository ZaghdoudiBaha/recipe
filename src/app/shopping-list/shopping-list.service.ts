
import { Ingredient } from '../sharing/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{

    newIngredient = new Subject<Ingredient>();
    startedEditing = new Subject<number>();

    private ingredients : Ingredient[] = [
        new Ingredient('Tomatoes',10),
        new Ingredient('Appels',5)
      ];
    constructor(){}

    addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient);
    }

    getIngredients(){
        return this.ingredients;
    }

    getIngredient(index: number){
        return this.ingredients[index];
    }
    addIngredients(ingredients : Ingredient[]){
        this.ingredients.push(...ingredients);
    } 
    updateIngredient(index: number, newIngredient : Ingredient){
        this.ingredients[index] = newIngredient;

    }
    deleteIngredient(index: number){
        this.ingredients.splice(index,1);
    }
}