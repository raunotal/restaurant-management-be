import { Ingredient } from 'src/entity/ingredient.entity';
import { IBaseRepository } from '../base/base.interface.repository';

export type IIngredientRepository = IBaseRepository<Ingredient>;
