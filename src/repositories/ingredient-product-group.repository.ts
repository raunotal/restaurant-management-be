import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base/base.abstract.repository';
import { IngredientProductGroup } from 'src/entity/ingredient-product-group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class IngredientProductGroupRepository extends BaseRepository<IngredientProductGroup> {
  constructor(
    @InjectRepository(IngredientProductGroup)
    private readonly ingredientProductGroupRepository: Repository<IngredientProductGroup>
  ) {
    super(ingredientProductGroupRepository);
  }
}
