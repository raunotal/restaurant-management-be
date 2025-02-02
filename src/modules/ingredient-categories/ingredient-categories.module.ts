import { Module } from '@nestjs/common';
import { IngredientCategoriesService } from './ingredient-categories.service';
import { IngredientCategoriesController } from './ingredient-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientCategory } from 'src/entity/ingredient-category.entity';
import { IngredientCategoryRepository } from 'src/repositories/ingredient-categories.repository';

@Module({
  imports: [TypeOrmModule.forFeature([IngredientCategory])],
  controllers: [IngredientCategoriesController],
  providers: [IngredientCategoriesService, IngredientCategoryRepository],
})
export class IngredientCategoriesModule {}
