import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipeCategoriesService } from './recipe-categories.service';
import { CreateRecipeCategoryDto } from './dto/create-recipe-category.dto';
import { UpdateRecipeCategoryDto } from './dto/update-recipe-category.dto';

@Controller('recipe-categories')
export class RecipeCategoriesController {
  constructor(private readonly recipeCategoriesService: RecipeCategoriesService) {}

  @Post()
  create(@Body() createRecipeCategoryDto: CreateRecipeCategoryDto) {
    return this.recipeCategoriesService.create(createRecipeCategoryDto);
  }

  @Get()
  findAll() {
    return this.recipeCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipeCategoriesService.findOneById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecipeCategoryDto: UpdateRecipeCategoryDto) {
    return this.recipeCategoriesService.update(id, updateRecipeCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipeCategoriesService.remove(id);
  }
}
