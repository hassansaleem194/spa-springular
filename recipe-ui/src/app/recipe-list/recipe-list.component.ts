import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  //TODO: Replace with backend data using Spring
  recipes = [
    { id: 1, name: 'Chocolate Chip Cookies', description: 'sugar, flour, chocolate chips, etc.'},
    { id: 2, name: 'Wheat Bread', description: 'yeast, flour, water, etc.'},
    { id: 3, name: 'Apple Pie', description: 'apple pie filling, pie crust, water, etc.'}
  ];

  selectedRecipe?: any;

  ngOnInit(): void {
  }

  onSelect(recipe: any): void {
    this.selectedRecipe = recipe;
  }

}
