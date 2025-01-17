import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { RecipeCategoriesModule } from './modules/recipe-categories/recipe-categories.module';
import { UnitsModule } from './modules/units/units.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    UnitsModule,
    RecipeCategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
