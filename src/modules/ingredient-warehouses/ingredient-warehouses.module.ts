import { Module } from '@nestjs/common';
import { IngredientWarehousesService } from './ingredient-warehouses.service';
import { IngredientWarehousesController } from './ingredient-warehouses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientWarehouse } from 'src/entity/ingredient-warehouse.entity';
import { IngredientWarehouseRepository } from 'src/repositories/ingredient-warehouse.repository';

@Module({
  imports: [TypeOrmModule.forFeature([IngredientWarehouse])],
  controllers: [IngredientWarehousesController],
  providers: [IngredientWarehousesService, IngredientWarehouseRepository],
})
export class IngredientWarehousesModule {}
