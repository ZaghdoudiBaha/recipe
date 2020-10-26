
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/Operators';
import { Recipe } from '../recipes/recipe.model';
import { RecipeSerice } from '../recipes/recipe.service';



@Injectable({providedIn : 'root'})
export class DataStorageService{


    constructor(private http : HttpClient, private recipeSerice : RecipeSerice){}

    storeRecipes(){
        const recipes = this.recipeSerice.getRecipes();
        this.http.put('https://recipebook-ded33.firebaseio.com/recipes.json',recipes).subscribe(response =>{
            console.log(response);
            
        });

    }

    fetchRecipes(){
        const recipesArray : Recipe[] = []
        return this.http.get<Recipe[]>('https://recipebook-ded33.firebaseio.com/recipes.json').pipe(
            map(recipes =>{
                //map here is just a method for the java script array like foreach() 
               return recipes.map(recipe =>{
                   return {...recipe, ingredients :recipe.ingredients ? recipe.ingredients:[] };

                })
            }),// tap is execute some code without changing the content of data
            tap(data =>{
                this.recipeSerice.setRecipes(data)
            }))
    }
 

}