import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateMonsterDto {
  @IsInt()
  @IsNotEmpty()
  monster_id: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}
