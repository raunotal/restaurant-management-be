import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base/base.abstract.repository';
import { Ingredient } from 'src/entity/ingredient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class IngredientRepository extends BaseRepository<Ingredient> {
  constructor(
    @InjectRepository(Ingredient)
    private readonly IngredientRepository: Repository<Ingredient>
  ) {
    super(IngredientRepository);
  }
}
