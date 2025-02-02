import { CreateRecipeDto } from './create-recipe.dto';
import { IsString } from 'class-validator';

export class UpdateRecipeDto extends CreateRecipeDto {
  @IsString()
  id: string;
}
