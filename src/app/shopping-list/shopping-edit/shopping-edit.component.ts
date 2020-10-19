import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/sharing/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') form : NgForm;

  subscription : Subscription;
  editMode = false;
  editedItemIndex:number;
  editedItem : Ingredient;
  


  constructor(private shoppingService : ShoppingListService) { }

  ngOnInit(){ 
    this.subscription = this.shoppingService.startedEditing.subscribe(
      (index) =>{
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingService.getIngredient(index);
        this.form.setValue({
          name: this.editedItem.name,
          amount : this.editedItem.amount
        })
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


  onSubmit(form : NgForm){
    let value = form.value;
    
    if(this.editMode){
      this.shoppingService.updateIngredient(this.editedItemIndex,value);
    }else{
      this.shoppingService.addIngredient(new Ingredient(value.name, value.amount));
    }
    this.editMode = false;
    this.form.reset();
  }

  onClear(){
    this.form.reset();
    this.editMode = false;
  }

  onDelete(){
    if (this.editMode) {
      this.shoppingService.deleteIngredient(this.editedItemIndex);
      this.form.reset();
      this.editMode = false;
    } else {
      
    }
  }
}
