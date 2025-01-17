import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { RecipeCategory } from './recipe-category.entity';
import { BaseEntity } from './base/base.entity';
import { RecipeIngredient } from './recipe-ingredient.entity';
import { RecipeRecipe } from './recipe-recipe.entity';
import { PreparationInstructions } from './preparation-instructions.entity';

@Entity('recipes')
export class Recipe extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ nullable: true })
  comments: string;

  @Column({ nullable: true })
  preparationTime: number;

  @Column({ default: false })
  isActive: boolean;

  @ManyToOne(() => RecipeCategory, (category) => category.recipes, { nullable: true })
  category: RecipeCategory | null;

  @OneToMany(() => RecipeIngredient, (recipeIngredient) => recipeIngredient.recipe)
  ingredients: RecipeIngredient[];

  @OneToMany(() => RecipeRecipe, (recipeRecipe) => recipeRecipe.recipe)
  recipes: RecipeRecipe[];

  @OneToMany(() => RecipeRecipe, (recipeRecipe) => recipeRecipe.inRecipe)
  inRecipes: RecipeRecipe[];

  @OneToMany(
    () => PreparationInstructions,
    (preparationInstructions) => preparationInstructions.recipe
  )
  preparationInstructions: PreparationInstructions[];

  constructor(partial: Partial<Recipe>) {
    super();
    Object.assign(this, partial);
  }
}
