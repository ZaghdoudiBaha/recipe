import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../sharing/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[] = [
    new Ingredient('Tomatoes',10),
    new Ingredient('Appels',5)
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onReceiveIngredient(event : Ingredient){
    this.ingredients.push(event);
  }

}
