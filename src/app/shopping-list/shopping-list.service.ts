import { EventEmitter } from '@angular/core';
import { Ingredient } from '../sharing/ingredient.model';

export class ShoppingListService{

    newIngredient = new EventEmitter<Ingredient>();

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
}