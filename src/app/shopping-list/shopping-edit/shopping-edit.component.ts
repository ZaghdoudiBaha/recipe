import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/sharing/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredientAdded = new EventEmitter<Ingredient>() ;
  @ViewChild('InputName') InputName : ElementRef;
  @ViewChild('InputAmount') InputAmount : ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  receiveIngredient(){
    const ingName = this.InputName.nativeElement.value;
    const ingAmount = this.InputAmount.nativeElement.value;
    this.ingredientAdded.emit(new Ingredient(ingName,ingAmount));
    
  }
}
