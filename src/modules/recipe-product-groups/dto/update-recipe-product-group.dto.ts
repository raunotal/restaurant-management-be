import { CreateRecipeProductGroupDto } from './create-recipe-product-group.dto';
import { IsString } from 'class-validator';

export class UpdateRecipeProductGroupDto extends CreateRecipeProductGroupDto {
  @IsString()
  id: string;
}
