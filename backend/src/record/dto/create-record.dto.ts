import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateRecordDto {
  @IsInt()
  @IsNotEmpty()
  monster_id: number;

  @IsString()
  @IsNotEmpty()
  weapon_category: string;

  @IsString()
  @IsNotEmpty()
  weapon_name: string;

  @IsString()
  @IsNotEmpty()
  time: string;

  @IsString()
  @IsNotEmpty()
  skill: string;

  @IsString()
  @IsNotEmpty()
  food: string;

  @IsString()
  @IsNotEmpty()
  handle_name: string;

  @IsString()
  @IsNotEmpty()
  image: string;
}
