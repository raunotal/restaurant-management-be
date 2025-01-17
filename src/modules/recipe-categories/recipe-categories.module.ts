import { Module } from '@nestjs/common';
import { RecipeCategoriesService } from './recipe-categories.service';
import { RecipeCategoriesController } from './recipe-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeCategory } from 'src/entity/recipe-category.entity';
import { RecipeCategoriesRepository } from 'src/repositories/recipe-categories.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RecipeCategory])],
  controllers: [RecipeCategoriesController],
  providers: [
    RecipeCategoriesService,
    {
      provide: RecipeCategoriesRepository.name,
      useClass: RecipeCategoriesRepository,
    },
  ],
})
export class RecipeCategoriesModule {}
