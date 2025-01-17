import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { Ingredient } from './ingredient.entity';
import { Recipe } from './recipe.entity';
import { Unit } from './unit.entity';

@Entity('recipe_ingredients')
export class RecipeIngredient extends BaseEntity {
  @Column()
  quantity: number;

  @Column({ nullable: true })
  comments: string;

  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients)
  recipe: Recipe;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.recipes)
  ingredient: Ingredient;

  @ManyToOne(() => Unit, (unit) => unit.recipeIngredients)
  unit: Unit;

  constructor(partial: Partial<RecipeIngredient>) {
    super();
    Object.assign(this, partial);
  }
}
