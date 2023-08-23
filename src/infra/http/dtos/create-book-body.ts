import { IsNotEmpty } from 'class-validator';

export class CreateBookBody {
  id?: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  bar_code: string;
}
