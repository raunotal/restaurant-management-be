import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from './base/base.abstract.repository';
import { IngredientCategory } from 'src/entity/ingredient-category.entity';

@Injectable()
export class IngredientCategoriesRepository extends BaseRepository<IngredientCategory> {
  constructor(
    @InjectRepository(IngredientCategory)
    private readonly ingredientsCategoryRepository: Repository<IngredientCategory>
  ) {
    super(ingredientsCategoryRepository);
  }
}
