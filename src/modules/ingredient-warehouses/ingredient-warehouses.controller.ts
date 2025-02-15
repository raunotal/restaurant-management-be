import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IngredientWarehousesService } from './ingredient-warehouses.service';
import { CreateIngredientWarehouseDto } from './dto/create-ingredient-warehouse.dto';
import { UpdateIngredientWarehouseDto } from './dto/update-ingredient-warehouse.dto';

@Controller('ingredient-warehouses')
export class IngredientWarehousesController {
  constructor(private readonly ingredientWarehousesService: IngredientWarehousesService) {}

  @Post()
  create(@Body() createIngredientWarehouseDto: CreateIngredientWarehouseDto) {
    return this.ingredientWarehousesService.create(createIngredientWarehouseDto);
  }

  @Get()
  findAll() {
    return this.ingredientWarehousesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientWarehousesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIngredientWarehouseDto: UpdateIngredientWarehouseDto) {
    return this.ingredientWarehousesService.update(+id, updateIngredientWarehouseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientWarehousesService.remove(+id);
  }
}
