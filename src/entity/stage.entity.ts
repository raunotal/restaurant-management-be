import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { PreparationInstructions } from './preparation-instructions.entity';

@Entity('stages')
export class Stage extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(
    () => PreparationInstructions,
    (preparationInstructions) => preparationInstructions.stage
  )
  preparationInstructions: PreparationInstructions[];

  constructor(partial: Partial<Stage>) {
    super();
    Object.assign(this, partial);
  }
}
