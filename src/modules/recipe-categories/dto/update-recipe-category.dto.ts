import { CreateRecipeCategoryDto } from './create-recipe-category.dto';
import { IsString } from 'class-validator';

export class UpdateRecipeCategoryDto extends CreateRecipeCategoryDto {
  @IsString()
  id: string;
}
