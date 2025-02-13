import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientCategory } from 'src/entity/ingredient-category.entity';
import { Ingredient } from 'src/entity/ingredient.entity';
import { Supplier } from 'src/entity/supplier.entity';
import { IngredientCategoryRepository } from 'src/repositories/ingredient-categories.repository';
import { SupplierRepository } from 'src/repositories/supplier.repository';
import { IngredientRepository } from 'src/repositories/ingredient.repository';
import { UnitRepository } from 'src/repositories/unit.repository';
import { Unit } from 'src/entity/unit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredient, IngredientCategory, Supplier, Unit])],
  controllers: [IngredientsController],
  providers: [
    IngredientsService,
    IngredientRepository,
    IngredientCategoryRepository,
    SupplierRepository,
    UnitRepository,
  ],
})
export class IngredientsModule {}
