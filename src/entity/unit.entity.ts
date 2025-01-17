import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { RecipeIngredient } from './recipe-ingredient.entity';
import { RecipeRecipe } from './recipe-recipe.entity';

@Entity('units')
export class Unit extends BaseEntity {
  @Column()
  name: string;

  @Column()
  displayName: string;

  @Column()
  ratio: number;

  @ManyToOne(() => Unit, (unit) => unit.childUnits, { nullable: true })
  parentUnit: Unit | null;

  @OneToMany(() => Unit, (unit) => unit.parentUnit)
  childUnits: Unit[];

  @OneToMany(() => RecipeIngredient, (recipeIngredient) => recipeIngredient.unit)
  recipeIngredients: RecipeIngredient[];

  @OneToMany(() => RecipeRecipe, (recipeRecipe) => recipeRecipe.unit)
  recipeRecipes: RecipeRecipe[];

  constructor(partial: Partial<Unit>) {
    super();
    Object.assign(this, partial);
  }
}
