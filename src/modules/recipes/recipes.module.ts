import { Module } from '@nestjs/common';
import { RecipeService } from './recipes.service';
import { RecipeController } from './recipes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from 'src/entity/recipe.entity';
import { RecipeCategory } from 'src/entity/recipe-category.entity';
import { RecipeRepository } from 'src/repositories/recipe.repository';
import { RecipeCategoryRepository } from 'src/repositories/recipe-category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe, RecipeCategory])],
  controllers: [RecipeController],
  providers: [RecipeService, RecipeRepository, RecipeCategoryRepository],
})
export class RecipeModule {}
