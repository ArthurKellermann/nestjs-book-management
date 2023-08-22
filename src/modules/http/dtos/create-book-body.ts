import { IsNotEmpty } from 'class-validator';

export class CreateBookBody {
  id?: string;

  @IsNotEmpty()
  title: string;

  description: string;

  @IsNotEmpty()
  bar_code: string;
}
