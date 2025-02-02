import { Module } from '@nestjs/common';
import { IngredientCategoriesService } from './ingredient-categories.service';
import { IngredientCategoriesController } from './ingredient-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientCategory } from 'src/entity/ingredient-category.entity';
import { IngredientCategoriesRepository } from 'src/repositories/ingredient-categories.repository';

@Module({
  imports: [TypeOrmModule.forFeature([IngredientCategory])],
  controllers: [IngredientCategoriesController],
  providers: [
    IngredientCategoriesService,
    {
      provide: IngredientCategoriesRepository.name,
      useClass: IngredientCategoriesRepository,
    },
  ],
})
export class IngredientCategoriesModule {}
