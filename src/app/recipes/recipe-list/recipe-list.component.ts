import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeService} from "../../services/recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy{
recipes!:Recipe[];
subscription!:Subscription;
  ngOnInit(){
    this.recipes=this.recipeService.getRecipes();
    this.subscription=this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[])=>{
        this.recipes=recipes;
      }
    )
  }
constructor(private  recipeService:RecipeService,private router: Router,private route:ActivatedRoute) {
}

  onNewRecipe() {
    this.router.navigate(['new'],{relativeTo:this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
