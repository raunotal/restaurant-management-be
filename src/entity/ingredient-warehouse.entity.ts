import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { Ingredient } from './ingredient.entity';

@Entity('ingredient_warehouses')
export class IngredientWarehouse extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Ingredient, (ingredient) => ingredient.warehouse)
  ingredients: Ingredient[];

  constructor(partial: Partial<IngredientWarehouse>) {
    super();
    Object.assign(this, partial);
  }
}
