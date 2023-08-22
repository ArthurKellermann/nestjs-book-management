import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateBookBody {
  id?: string;

  @IsNotEmpty()
  title: string;

  @MaxLength(240)
  description: string;

  @IsNotEmpty()
  @MaxLength(100)
  bar_code: string;
}
