import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[ ] = [
    new Recipe('Test Recipe', 'This is a test', 'https://www.simplyrecipes.com/thmb/DsilH2DEHQT3--lndEHMfO--Low=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Roasted-Broccoli-LEAD-7-d70f6e016c214a0e9ce9a69c4647d664.JPG' ),

    new Recipe('Another Test Recipe', 'This is a test', 'https://www.simplyrecipes.com/thmb/DsilH2DEHQT3--lndEHMfO--Low=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Roasted-Broccoli-LEAD-7-d70f6e016c214a0e9ce9a69c4647d664.JPG' )
  ];

  constructor( ) { }

  ngOnInit( ): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
