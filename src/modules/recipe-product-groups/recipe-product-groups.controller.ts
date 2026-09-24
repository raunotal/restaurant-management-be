import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipeProductGroupsService } from './recipe-product-groups.service';
import { CreateRecipeProductGroupDto } from './dto/create-recipe-product-group.dto';
import { UpdateRecipeProductGroupDto } from './dto/update-recipe-product-group.dto';

@Controller('recipe-product-groups')
export class RecipeProductGroupsController {
  constructor(private readonly recipeProductGroupsService: RecipeProductGroupsService) {}

  @Post()
  create(@Body() createRecipeProductGroupDto: CreateRecipeProductGroupDto) {
    return this.recipeProductGroupsService.create(createRecipeProductGroupDto);
  }

  @Get()
  findAll() {
    return this.recipeProductGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipeProductGroupsService.findOneById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRecipeProductGroupDto: UpdateRecipeProductGroupDto
  ) {
    return this.recipeProductGroupsService.update(id, updateRecipeProductGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipeProductGroupsService.remove(id);
  }
}
