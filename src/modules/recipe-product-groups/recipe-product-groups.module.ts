import { Module } from '@nestjs/common';
import { RecipeProductGroupsService } from './recipe-product-groups.service';
import { RecipeProductGroupsController } from './recipe-product-groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeProductGroup } from 'src/entity/recipe-product-group.entity';
import { RecipeProductGroupRepository } from 'src/repositories/recipe-product-group.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RecipeProductGroup])],
  controllers: [RecipeProductGroupsController],
  providers: [RecipeProductGroupsService, RecipeProductGroupRepository],
})
export class RecipeProductGroupsModule {}
