import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateRecipeCategoryDto } from './dto/create-recipe-category.dto';
import { UpdateRecipeCategoryDto } from './dto/update-recipe-category.dto';
import { RecipeCategoriesRepository } from 'src/repositories/recipe-categories.repository';
import { IRecipeCategoriesRepository } from 'src/repositories/interfaces/recipe-category.interface';

@Injectable()
export class RecipeCategoriesService {
  private readonly logger: Logger = new Logger(RecipeCategoriesService.name);

  constructor(
    @Inject(RecipeCategoriesRepository.name)
    private readonly recipeCategoryRepository: IRecipeCategoriesRepository
  ) {}

  async create(createRecipeCategoryDto: CreateRecipeCategoryDto) {
    this.logger.log(`Creating recipe category ${createRecipeCategoryDto.name}`, {
      createRecipeCategoryDto,
    });

    return await this.recipeCategoryRepository.create(createRecipeCategoryDto);
  }

  async findAll() {
    this.logger.log('Finding all recipe categories');

    return await this.recipeCategoryRepository.findAll();
  }

  async findOneById(id: string) {
    this.logger.log(`Finding recipe category ${id}`);

    return await this.recipeCategoryRepository.findOneById(id);
  }

  async update(id: string, updateRecipeCategoryDto: UpdateRecipeCategoryDto) {
    this.logger.log(`Updating recipe category ${id}`, { updateRecipeCategoryDto });

    return await this.recipeCategoryRepository.update(id, updateRecipeCategoryDto);
  }

  remove(id: string) {
    this.logger.log(`Removing recipe category ${id}`);

    return this.recipeCategoryRepository.remove(id);
  }
}
