import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { Recipe } from './recipe.entity';
import { Unit } from './unit.entity';

@Entity('recipe_recipes')
export class RecipeRecipe extends BaseEntity {
  @Column()
  quantity: number;

  @Column({ nullable: true })
  comments: string;

  @ManyToOne(() => Recipe, (recipe) => recipe.recipes)
  recipe: Recipe;

  @ManyToOne(() => Recipe, (recipe) => recipe.inRecipes)
  inRecipe: Recipe;

  @ManyToOne(() => Unit, (unit) => unit.recipeRecipes)
  unit: Unit;

  constructor(partial: Partial<RecipeRecipe>) {
    super();
    Object.assign(this, partial);
  }
}
