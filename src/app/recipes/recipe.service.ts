import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

    // recipeSelected = new EventEmitter<Recipe>();

    recipesChanged = new Subject<Recipe[]>();

    /* private recipes: Recipe[] = [
        new Recipe(
            'T-Bone Steak', 
            'Delicious Taste- Awesome', 
            '../assets/images/steak.jpg',
            [
                new Ingredient('Meat',1),
                new Ingredient('Salad', 2)
            ]),
        new Recipe(
            'Big Boy Burger', 
            'A treat for your tummy', 
            '../assets/images/burger.jpg',
            [
                new Ingredient('Buns',2),
                new Ingredient('Meat', 1),
                new Ingredient('French Fries',20)
            ]),
    ]; */

    private recipes: Recipe[] = [];

    constructor(private slService: ShoppingListService) { }

    setRecipes(recipes: Recipe[]): any {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(): any {
        return this.recipes.slice();
    }

    getRecipe(index: number): any {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]): any {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe): any {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe): any {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number): any {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}