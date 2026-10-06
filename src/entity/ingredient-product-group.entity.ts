import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { Ingredient } from './ingredient.entity';

@Entity('ingredient_product_groups')
export class IngredientProductGroup extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Ingredient, (ingredient) => ingredient.productGroup)
  ingredients: Ingredient[];

  constructor(partial: Partial<IngredientProductGroup>) {
    super();
    Object.assign(this, partial);
  }
}
