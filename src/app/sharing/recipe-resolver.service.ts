import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Recipe } from '../recipes/recipe.model';
import { RecipeSerice } from '../recipes/recipe.service';
import { DataStorageService } from './data-storage.service';

@Injectable({providedIn: 'root'})
export class RecipeResolverService implements Resolve<Recipe[]>{

    constructor(private dsService : DataStorageService, private recipeSerice : RecipeSerice ){}

    resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot){
        const recipes= this.recipeSerice.getRecipes();
        if(recipes.length === 0){
            return this.dsService.fetchRecipes();
        }else{
            return recipes;
        }
    }
}