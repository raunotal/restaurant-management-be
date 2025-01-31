import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateUnitDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  displayName: string;

  @IsNumber({ maxDecimalPlaces: 6 })
  @IsOptional()
  ratio: number;

  @IsString()
  @IsOptional()
  parentUnitId?: string;
}
