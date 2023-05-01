import {Component, OnInit} from '@angular/core';
import {Recipe} from "./recipe-list/recipe.model";
import {RecipeService} from "../services/recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit{
  selectedRecipe!: Recipe;
  constructor() {
  }
ngOnInit() {
}
}
