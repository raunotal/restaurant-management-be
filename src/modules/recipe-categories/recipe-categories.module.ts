import { Module } from '@nestjs/common';
import { RecipeCategoriesService } from './recipe-categories.service';
import { RecipeCategoriesController } from './recipe-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeCategory } from 'src/entity/recipe-category.entity';
import { RecipeCategoryRepository } from 'src/repositories/recipe-category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RecipeCategory])],
  controllers: [RecipeCategoriesController],
  providers: [RecipeCategoriesService, RecipeCategoryRepository],
})
export class RecipeCategoriesModule {}
