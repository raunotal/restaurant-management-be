import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base/base.abstract.repository';
import { RecipeProductGroup } from 'src/entity/recipe-product-group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecipeProductGroupRepository extends BaseRepository<RecipeProductGroup> {
  constructor(
    @InjectRepository(RecipeProductGroup)
    private readonly recipeProductGroupRepository: Repository<RecipeProductGroup>
  ) {
    super(recipeProductGroupRepository);
  }
}
