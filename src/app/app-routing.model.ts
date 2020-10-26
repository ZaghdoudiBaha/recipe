
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeResolverService } from './sharing/recipe-resolver.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const appRoutes : Routes =[
    {path:"",redirectTo: "/recipes" , pathMatch:"full"},
    {path:"recipes",component:RecipesComponent, 
            children :[
                {path:"", component: RecipeStartComponent},
                {path:"new", component: RecipeEditComponent},
                {path:":id", component: RecipeDetailComponent, resolve : [RecipeResolverService]},
                {path:":id/edit", component: RecipeEditComponent, resolve : [RecipeResolverService]},
            ]},
    {path:"shopping-List",component:ShoppingListComponent}
]

@NgModule({
    // Toconfigre our routes 
    imports:[RouterModule.forRoot(appRoutes)],
    // Exports our routerModuls to appModule to make it known to angular
    exports : [RouterModule]
})
export class AppRoutingModule{

    

}