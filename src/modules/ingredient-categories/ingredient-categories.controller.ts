import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IngredientCategoriesService } from './ingredient-categories.service';
import { CreateIngredientCategoryDto } from './dto/create-ingredient-category.dto';
import { UpdateIngredientCategoryDto } from './dto/update-ingredient-category.dto';

@Controller('ingredient-categories')
export class IngredientCategoriesController {
  constructor(private readonly ingredientCategoriesService: IngredientCategoriesService) {}

  @Post()
  create(@Body() createIngredientCategoryDto: CreateIngredientCategoryDto) {
    return this.ingredientCategoriesService.create(createIngredientCategoryDto);
  }

  @Get()
  findAll() {
    return this.ingredientCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientCategoriesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIngredientCategoryDto: UpdateIngredientCategoryDto
  ) {
    return this.ingredientCategoriesService.update(id, updateIngredientCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientCategoriesService.remove(id);
  }
}
