import { IsString } from 'class-validator';
import { CreateIngredientDto } from './create-ingredient.dto';

export class UpdateIngredientDto extends CreateIngredientDto {
  @IsString()
  id: string;
}
