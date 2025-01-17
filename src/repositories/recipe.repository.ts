import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base/base.abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from 'src/entity/recipe.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecipeRepository extends BaseRepository<Recipe> {
  constructor(
    @InjectRepository(Recipe)
    private readonly RecipeRepository: Repository<Recipe>
  ) {
    super(RecipeRepository);
  }
}
