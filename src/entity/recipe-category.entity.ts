import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { Recipe } from './recipe.entity';

@Entity('recipe_categories')
export class RecipeCategory extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => Recipe, (recipe) => recipe.category)
  recipes: Recipe[];

  constructor(partial: Partial<RecipeCategory>) {
    super();
    Object.assign(this, partial);
  }
}
