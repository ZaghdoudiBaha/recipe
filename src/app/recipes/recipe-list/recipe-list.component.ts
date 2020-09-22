import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [new Recipe("Some food","this is a food","https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_1280,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg"),
                        new Recipe("Spagetti","this is a spagetti","https://www.framboizeinthekitchen.com/wp-content/uploads/2020/03/pates-sauce-bolognaise-et-parmesan-5-1280x554.jpg"),
                        new Recipe("kouskous","this is  atraditional tunisian food","https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/102627415/original/9686a70f2a1178a4754decb238efe4c625568631/moroccan-food-how-to-cook-a-traditional-kouskous.jpg")
                       ]
  constructor() { }

  ngOnInit(): void {
  }

}