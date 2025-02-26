import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { RecipeCategoriesModule } from './modules/recipe-categories/recipe-categories.module';
import { UnitsModule } from './modules/units/units.module';
import { SuppliersModule } from './modules/suppliers/suppliers.module';
import { IngredientCategoriesModule } from './modules/ingredient-categories/ingredient-categories.module';
import { RecipeModule } from './modules/recipes/recipes.module';
import { IngredientsModule } from './modules/ingredients/ingredients.module';
import { TokenExtractorMiddleware } from './common/middleware/token-extractor.middleware';
import { CommonModule } from './common/modules/common.module';
import { IngredientWarehousesModule } from './modules/ingredient-warehouses/ingredient-warehouses.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CommonModule,
    DatabaseModule,
    UnitsModule,
    RecipeCategoriesModule,
    SuppliersModule,
    IngredientCategoriesModule,
    RecipeModule,
    IngredientsModule,
    IngredientWarehousesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenExtractorMiddleware).forRoutes('*');
  }
}
