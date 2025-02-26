import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IngredientWarehouse } from 'src/entity/ingredient-warehouse.entity';
import { Repository } from 'typeorm';
import { BaseRepository } from './base/base.abstract.repository';

@Injectable()
export class IngredientWarehouseRepository extends BaseRepository<IngredientWarehouse> {
  constructor(
    @InjectRepository(IngredientWarehouse)
    private readonly ingredientWarehouseRepository: Repository<IngredientWarehouse>
  ) {
    super(ingredientWarehouseRepository);
  }
}
