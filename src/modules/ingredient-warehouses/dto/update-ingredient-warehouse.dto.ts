import { PartialType } from '@nestjs/mapped-types';
import { CreateIngredientWarehouseDto } from './create-ingredient-warehouse.dto';

export class UpdateIngredientWarehouseDto extends PartialType(CreateIngredientWarehouseDto) {}
