import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { Ingredient } from './ingredient.entity';

@Entity('suppliers')
export class Supplier extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  address: string;

  @OneToMany(() => Ingredient, (ingredient) => ingredient.supplier)
  ingredients: Ingredient[];

  constructor(partial: Partial<Supplier>) {
    super();
    Object.assign(this, partial);
  }
}
