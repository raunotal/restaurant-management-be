import { Injectable } from '@nestjs/common';
import { CreateIngredientWarehouseDto } from './dto/create-ingredient-warehouse.dto';
import { UpdateIngredientWarehouseDto } from './dto/update-ingredient-warehouse.dto';

@Injectable()
export class IngredientWarehousesService {
  create(createIngredientWarehouseDto: CreateIngredientWarehouseDto) {
    return 'This action adds a new ingredientWarehouse';
  }

  findAll() {
    return `This action returns all ingredientWarehouses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ingredientWarehouse`;
  }

  update(id: number, updateIngredientWarehouseDto: UpdateIngredientWarehouseDto) {
    return `This action updates a #${id} ingredientWarehouse`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingredientWarehouse`;
  }
}
