import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { Recipe } from './recipe.entity';
import { Stage } from './stage.entity';

@Entity('preparation_instructions')
export class PreparationInstructions extends BaseEntity {
  @Column()
  instructions: string;

  @Column()
  stepNumber: number;

  @ManyToOne(() => Recipe, (recipe) => recipe.preparationInstructions)
  recipe: Recipe;

  @ManyToOne(() => Stage, (stage) => stage.preparationInstructions)
  stage: Stage;

  constructor(partial: Partial<PreparationInstructions>) {
    super();
    Object.assign(this, partial);
  }
}
