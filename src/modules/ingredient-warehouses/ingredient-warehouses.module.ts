import { Module } from '@nestjs/common';
import { IngredientWarehousesService } from './ingredient-warehouses.service';
import { IngredientWarehousesController } from './ingredient-warehouses.controller';

@Module({
  controllers: [IngredientWarehousesController],
  providers: [IngredientWarehousesService],
})
export class IngredientWarehousesModule {}
