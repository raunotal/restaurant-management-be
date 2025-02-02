import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from './base/base.abstract.repository';
import { IngredientCategory } from 'src/entity/ingredient-category.entity';

@Injectable()
export class IngredientCategoryRepository extends BaseRepository<IngredientCategory> {
  constructor(
    @InjectRepository(IngredientCategory)
    private readonly ingredientCategoryRepository: Repository<IngredientCategory>
  ) {
    super(ingredientCategoryRepository);
  }
}
