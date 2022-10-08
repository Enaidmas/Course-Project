import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable ({
  providedIn: 'root',
})

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[ ] = [
    new Recipe('Test Recipe', 'This is a test', 'https://www.simplyrecipes.com/thmb/DsilH2DEHQT3--lndEHMfO--Low=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Roasted-Broccoli-LEAD-7-d70f6e016c214a0e9ce9a69c4647d664.JPG' ),

    new Recipe('Another Test Recipe', 'This is a test', 'https://www.simplyrecipes.com/thmb/DsilH2DEHQT3--lndEHMfO--Low=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Roasted-Broccoli-LEAD-7-d70f6e016c214a0e9ce9a69c4647d664.JPG' )
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
