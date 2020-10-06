import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeSerice } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe : Recipe;
  id : number;
 

  constructor(private recipeSerice : RecipeSerice,private route : ActivatedRoute, private router:Router) { }

  ngOnInit(){
    this.route.params.subscribe((params : Params)=>{
        this.id = +params['id'];
        this.recipe = this.recipeSerice.findRecipeById(this.id);  
      });
    
  }

  onAddToSoppingList(){
    this.recipeSerice.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  toEditComponent(){
    this.router.navigate(['../',this.id,'edit'],{relativeTo : this.route})
  }

}
