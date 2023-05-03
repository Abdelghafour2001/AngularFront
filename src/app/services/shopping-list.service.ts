import {Ingredient} from "../shared/ingredient.model";
//import {EventEmitter} from "@angular/core";

import {Subject} from "rxjs";
export class ShoppingListService{
  //ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>()
  ingredients: Ingredient[]=[
    new Ingredient('Apples',4),
    new Ingredient('Tomatoes',6)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient){
  this.ingredients.push(ingredient);
 // this.ingredientsChanged.emit(this.getIngredients());
    this.ingredientsChanged.next(this.getIngredients());

  }
  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    //this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
