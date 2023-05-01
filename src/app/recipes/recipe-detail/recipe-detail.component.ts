import {Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import {RecipeService} from "../../services/recipe.service";

// @ts-ignore
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
