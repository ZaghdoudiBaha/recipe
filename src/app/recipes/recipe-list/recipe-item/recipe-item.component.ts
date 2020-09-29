import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeSerice } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  providers :[]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : Recipe;
 

  constructor(private recipeSerice:RecipeSerice) { }

  ngOnInit(): void {
  }

  onSendRecipe(){
    this.recipeSerice.recipeSelected.emit(this.recipe); 
  }

}
