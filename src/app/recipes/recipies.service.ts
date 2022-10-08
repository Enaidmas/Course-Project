import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable ({
  providedIn: 'root',
})

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[ ] = [
    new Recipe(
      'Apple Pie',
      'Cozy fall fav',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Small_apple_pie_8.jpg/800px-Small_apple_pie_8.jpg?20210309103845',
      [
        new Ingredient('Apples', 6),
        new Ingredient('Pie Crust', 1)
      ]),

    new Recipe(
      'Chocolate Ice Cream Cones',
      'Nothing like the basics',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Ice_cream_cone_%28cropped%29.jpg/410px-Ice_cream_cone_%28cropped%29.jpg?20190410225625',
      [
        new Ingredient('Cocoa Powder', 1),
        new Ingredient('Heavy Cream', 1),
      ])
  ];

  constructor(private shliService: ShoppingListService) {}

  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shliService.addIngredients(ingredients);
  }
}
