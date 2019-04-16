import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','Test','https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_960_720.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
