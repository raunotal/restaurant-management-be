import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { RecipeCategoriesModule } from './modules/recipe-categories/recipe-categories.module';
import { UnitsModule } from './modules/units/units.module';
import { SuppliersModule } from './modules/suppliers/suppliers.module';
import { IngredientCategoriesModule } from './modules/ingredient-categories/ingredient-categories.module';
import { RecipeModule } from './modules/recipes/recipes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    UnitsModule,
    RecipeCategoriesModule,
    SuppliersModule,
    IngredientCategoriesModule,
    RecipeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
