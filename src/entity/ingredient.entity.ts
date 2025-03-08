import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { IngredientCategory } from './ingredient-category.entity';
import { Supplier } from './supplier.entity';
import { RecipeIngredient } from './recipe-ingredient.entity';
import { Unit } from './unit.entity';
import { IngredientWarehouse } from './ingredient-warehouse.entity';

@Entity('ingredients')
export class Ingredient extends BaseEntity {
  @Column()
  name: string;

  @Column('float', { nullable: true })
  grossQuantity: number;

  @Column('float', { nullable: true })
  netQuantity: number;

  @Column('float', { nullable: true })
  warehouseMinQuantity: number;

  @ManyToOne(() => Unit, (unit) => unit.ingredients, { nullable: true })
  unit: Unit;

  @Column('float', { nullable: true })
  purchasePrice: number;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ nullable: true })
  comments: string;

  @Column()
  isActive: boolean;

  @ManyToOne(() => IngredientCategory, (category) => category.ingredients, { nullable: true })
  category: IngredientCategory | null;

  @ManyToOne(() => Supplier, (supplier) => supplier.ingredients, { nullable: true })
  supplier: Supplier | null;

  @ManyToOne(() => IngredientWarehouse, (warehouse) => warehouse.ingredients, { nullable: true })
  warehouse: IngredientWarehouse | null;

  @OneToMany(() => RecipeIngredient, (recipeIngredient) => recipeIngredient.ingredient)
  recipes: RecipeIngredient[];

  constructor(partial: Partial<Ingredient>) {
    super();
    Object.assign(this, partial);
  }
}
