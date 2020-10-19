import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeSerice } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id : number;
  edit_mode= false;
  form : FormGroup;

  constructor(private route : ActivatedRoute, private recipeService : RecipeSerice, private router : Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.edit_mode = params['id'] != null;
      this.initForm();
    })
  }

  onAddIngredient(){
    (<FormArray>this.form.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(null,Validators.required),
        'amount' : new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );

  }

  initForm(){
    let recipeName = '';
    let recipeImage = '';
    let recipeDescrition = '';
    let recipeIngredience = new FormArray([]);

    if(this.edit_mode){
      const recipe = this.recipeService.findRecipeById(this.id);
      recipeName = recipe.name;
      recipeImage = recipe.imagePath;
      recipeDescrition = recipe.description;
      
      if(recipe['ingredients']){
        for (let ing of recipe.ingredients) {
          recipeIngredience.push(
            new FormGroup({
              'name': new FormControl(ing.name,Validators.required),
              'amount' : new FormControl(ing.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
      
    }

    this.form = new FormGroup({
      'name' : new FormControl(recipeName, Validators.required),
      'imagePath' : new FormControl(recipeImage,Validators.required),
      'description' : new FormControl(recipeDescrition,Validators.required),
      'ingredients':  recipeIngredience
    })
      
  }

  onSubmit(){
    // 1st way to pass the data from the form to ts
    // const newRecipe = new Recipe(
    //   this.form.value['name'],this.form.value['imagePath'],
    //   this.form.value['description'],
    //   this.form.value['ingredients']);

    if (this.edit_mode) {
      // 2nd way is to put the value of the form directly
      this.recipeService.UpdateRecipe(this.id,this.form.value);
    } else {
      this.recipeService.addRecipe(this.form.value);
    }
    this.onCancel();
  }
  deleteIngeredient(index : number){
    (<FormArray>this.form.get('ingredients')).removeAt(index);
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo : this.route})
  }
}
