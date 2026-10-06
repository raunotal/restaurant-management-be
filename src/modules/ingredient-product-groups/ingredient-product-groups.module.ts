import { Module } from '@nestjs/common';
import { IngredientProductGroupsService } from './ingredient-product-groups.service';
import { IngredientProductGroupsController } from './ingredient-product-groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientProductGroup } from 'src/entity/ingredient-product-group.entity';
import { IngredientProductGroupRepository } from 'src/repositories/ingredient-product-group.repository';

@Module({
  imports: [TypeOrmModule.forFeature([IngredientProductGroup])],
  controllers: [IngredientProductGroupsController],
  providers: [IngredientProductGroupsService, IngredientProductGroupRepository],
})
export class IngredientProductGroupsModule {}
