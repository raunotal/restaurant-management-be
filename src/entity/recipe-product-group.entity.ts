import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { Recipe } from './recipe.entity';

@Entity('recipe_product_groups')
export class RecipeProductGroup extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Recipe, (recipe) => recipe.productGroup)
  recipes: Recipe[];

  constructor(partial: Partial<RecipeProductGroup>) {
    super();
    Object.assign(this, partial);
  }
}
