import { ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(){
    const ingrName = this.nameInput.nativeElement.value;
    const ingrAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingrName, ingrAmount);
    console.log(newIngredient);
    
    this.ingredientAdded.emit(newIngredient);
    console.log("Add button clicked");
    
  }

  deleteIngredient(){

  }

  clearIngredients(){

  }
}
