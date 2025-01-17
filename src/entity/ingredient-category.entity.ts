import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { Ingredient } from './ingredient.entity';

@Entity('ingredient_categories')
export class IngredientCategory extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Ingredient, (ingredient) => ingredient.category)
  ingredients: Ingredient[];

  constructor(partial: Partial<IngredientCategory>) {
    super();
    Object.assign(this, partial);
  }
}
