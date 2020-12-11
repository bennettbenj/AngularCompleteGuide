import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://delightfuladventures.com/wp-content/uploads/2019/11/vegan-fried-rice-recipe.jpg') 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
