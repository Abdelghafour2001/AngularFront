import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
recipes!:Recipe[];
  @Output() recipeWasSelected =  new EventEmitter<Recipe>();
  ngOnInit(){
    this.recipes=this.recipeService.getRecipes();
  }
constructor(private  recipeService:RecipeService) {
}
onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
}
}
