import {Recipe} from "../recipes/recipe-list/recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService{
  private recipes: Recipe[] = [
    new Recipe('A test recipe','idk what to type here ',"https://www.cnet.com/a/img/resize/69256d2623afcbaa911f08edc45fb2d3f6a8e172/hub/2023/02/03/afedd3ee-671d-4189-bf39-4f312248fb27/gettyimages-1042132904.jpg?auto=webp&fit=crop&height=675&width=1200"),
    new Recipe('A test recipe 2','idk what to type here 2 ',"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80")
  ];
  recipeSelected =  new EventEmitter<Recipe>();
  getRecipes(){
    return this.recipes.slice();
  }
}
