import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/sharing/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingName: string;
  ingAmount : number;

  @ViewChild('InputName') InputName : ElementRef;
  @ViewChild('InputAmount') InputAmount : ElementRef;

  constructor(private shoppingService : ShoppingListService) { }

  ngOnInit(){ 
  }


  saveIngredient(){
    this.ingName = this.InputName.nativeElement.value;
    this.ingAmount = this.InputAmount.nativeElement.value;  
    this.shoppingService.addIngredient(new Ingredient(this.ingName, this.ingAmount));
  }
}
