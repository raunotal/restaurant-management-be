import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IngredientProductGroupsService } from './ingredient-product-groups.service';
import { CreateIngredientProductGroupDto } from './dto/create-ingredient-product-group.dto';
import { UpdateIngredientProductGroupDto } from './dto/update-ingredient-product-group.dto';

@Controller('ingredient-product-groups')
export class IngredientProductGroupsController {
  constructor(private readonly ingredientProductGroupsService: IngredientProductGroupsService) {}

  @Post()
  create(@Body() createIngredientProductGroupDto: CreateIngredientProductGroupDto) {
    return this.ingredientProductGroupsService.create(createIngredientProductGroupDto);
  }

  @Get()
  findAll() {
    return this.ingredientProductGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientProductGroupsService.findOneById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIngredientProductGroupDto: UpdateIngredientProductGroupDto
  ) {
    return this.ingredientProductGroupsService.update(id, updateIngredientProductGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientProductGroupsService.remove(id);
  }
}
