import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../sharing/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeSerice{
    recipeChanged =  new Subject<Recipe[]>();

    recipeSelected = new EventEmitter<Recipe>();
    
/*     private recipes : Recipe[] = [new Recipe("Some food",
                        "this is a food",
                        "https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_1280,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg",
                        [
                            new Ingredient("some ingredient",1),
                            new Ingredient("other ingredient",2)])
                            ,
    new Recipe("Spagetti","this is a spagetti",
    "https://www.framboizeinthekitchen.com/wp-content/uploads/2020/03/pates-sauce-bolognaise-et-parmesan-5-1280x554.jpg",
    [
        new Ingredient("Spagetti",1),
        new Ingredient("Tomatoes",2)]),
    new Recipe("kouskous","this is  atraditional tunisian food",
    "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/102627415/original/9686a70f2a1178a4754decb238efe4c625568631/moroccan-food-how-to-cook-a-traditional-kouskous.jpg",
    [
        new Ingredient("kouskous",1),
        new Ingredient("Tomatoes",2)])  
   ]; */
   private recipes : Recipe[] =[];

    constructor(private slService: ShoppingListService){

    }
    getRecipes(){
        return this.recipes.slice(); // slice to make a copy of recipes 
    }

    findRecipeById(id : number){
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]){
        this.slService.addIngredients(ingredients);
        
    }
    addRecipe(recipe : Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    UpdateRecipe(index: number, newRecipe : Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
    }

    setRecipes(recipes : Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice())
    }
}