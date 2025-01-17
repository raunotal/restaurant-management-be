import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base/base.abstract.repository';
import { RecipeCategory } from 'src/entity/recipe-category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecipeCategoriesRepository extends BaseRepository<RecipeCategory> {
  constructor(
    @InjectRepository(RecipeCategory)
    private readonly RecipeCategory: Repository<RecipeCategory>
  ) {
    super(RecipeCategory);
  }
}
