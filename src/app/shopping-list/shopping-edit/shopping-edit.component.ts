import {
  Component,
  OnInit,
  ElementRef,
  ViewChild, OnDestroy,
} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../../services/shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy{
  //@ViewChild('nameInput', { static: false }) nameInputRef!: ElementRef;
  //@ViewChild('amountInput', { static: false }) amountInputRef!: ElementRef;
subscription!: Subscription;
editMode= false;
editedItemIndex!: number;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription= this.slService.startedEditing.subscribe(
      (index:number)=>{
        this.editMode=true;
        this.editedItemIndex=index;
      }
    );
  }
  //5555555555555555555
ngOnDestroy(){
    this.subscription.unsubscribe();
}
  onAddItem(form:NgForm) {
    const value=  form.value;
    //const ingName = this.nameInputRef.nativeElement.value;
    //const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.slService.addIngredient(newIngredient);
  }
}
