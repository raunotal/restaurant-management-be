import { Recipe } from 'src/entity/recipe.entity';
import { IBaseRepository } from '../base/base.interface.repository';

export type IRecipeRepository = IBaseRepository<Recipe>;
