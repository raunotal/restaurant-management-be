import { RecipeCategory } from 'src/entity/recipe-category.entity';
import { IBaseRepository } from '../base/base.interface.repository';

export type IRecipeCategoryRepository = IBaseRepository<RecipeCategory>;
