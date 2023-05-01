import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[]=[
    new Ingredient('Apples',4),
    new Ingredient('Tomatoes',6)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient){
  this.ingredients.push(ingredient);
  this.ingredientsChanged.emit(this.getIngredients())
  }
  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}
