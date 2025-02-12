import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { RecipeIngredient } from './recipe-ingredient.entity';
import { RecipeRecipe } from './recipe-recipe.entity';
import { IsNotEmpty } from 'class-validator';
import { Ingredient } from './ingredient.entity';

@Entity('units')
export class Unit extends BaseEntity {
  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  displayName: string;

  @Column('float', { nullable: true })
  ratio: number;

  @ManyToOne(() => Unit, (unit) => unit.childUnits, { nullable: true })
  parentUnit: Unit | null;

  @OneToMany(() => Unit, (unit) => unit.parentUnit)
  childUnits: Unit[];

  @OneToMany(() => RecipeIngredient, (recipeIngredient) => recipeIngredient.unit)
  recipeIngredients: RecipeIngredient[];

  @OneToMany(() => RecipeRecipe, (recipeRecipe) => recipeRecipe.unit)
  recipeRecipes: RecipeRecipe[];

  @OneToMany(() => Ingredient, (ingredient) => ingredient.unit)
  ingredients: Ingredient[];

  constructor(partial: Partial<Unit>) {
    super();
    Object.assign(this, partial);
  }
}
