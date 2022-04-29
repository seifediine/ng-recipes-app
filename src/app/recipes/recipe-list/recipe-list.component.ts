import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Poulet à la crème',
      'Recette de poulet ou escalope à la crème',
      'https://assets.afcdn.com/recipe/20200219/107900_w1024h1024c1cx6750cy2987.jpg'
    ),
    new Recipe(
      'Djadj Mechwi b Chladha',
      'Recette de Djadj mechwi b chladha',
      'https://previews.123rf.com/images/maxsheb/maxsheb1109/maxsheb110900307/10460571-cuisse-de-poulet-r%C3%B4ti-avec-de-la-salade.jpg'
    ),
    new Recipe(
      'La3desss',
      '3dess bel Begri',
      'https://lesucresale-doumsouhaib.com/wp-content/uploads/2021/11/soupe-de-lentilles-algerienne-avec-ou-sans-viande.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
