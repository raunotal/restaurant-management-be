import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateRecipeProductGroupDto } from './dto/create-recipe-product-group.dto';
import { UpdateRecipeProductGroupDto } from './dto/update-recipe-product-group.dto';
import { RecipeProductGroupRepository } from 'src/repositories/recipe-product-group.repository';
import { IRecipeProductGroupRepository } from 'src/repositories/interfaces/recipe-product-group.interface';

@Injectable()
export class RecipeProductGroupsService {
  private readonly logger: Logger = new Logger(RecipeProductGroupsService.name);

  constructor(
    @Inject(RecipeProductGroupRepository)
    private readonly recipeProductGroupRepository: IRecipeProductGroupRepository
  ) {}

  async create(createRecipeProductGroupDto: CreateRecipeProductGroupDto) {
    this.logger.log(`Creating recipe product group ${createRecipeProductGroupDto.name}`, {
      createRecipeProductGroupDto,
    });

    return await this.recipeProductGroupRepository.create(createRecipeProductGroupDto);
  }

  async findAll() {
    this.logger.log('Finding all recipe product groups');

    return await this.recipeProductGroupRepository.findAll();
  }

  async findOneById(id: string) {
    this.logger.log(`Finding recipe product group ${id}`);

    return await this.recipeProductGroupRepository.findOneById(id);
  }

  async update(id: string, updateRecipeProductGroupDto: UpdateRecipeProductGroupDto) {
    this.logger.log(`Updating recipe product group ${id}`, { updateRecipeProductGroupDto });

    return await this.recipeProductGroupRepository.update(id, updateRecipeProductGroupDto);
  }

  remove(id: string) {
    this.logger.log(`Removing recipe product group ${id}`);

    return this.recipeProductGroupRepository.remove(id);
  }
}
