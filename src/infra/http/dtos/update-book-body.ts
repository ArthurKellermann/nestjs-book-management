import { MaxLength } from 'class-validator';

export class UpdateBookBody {
  title?: string;

  @MaxLength(240)
  description?: string;

  @MaxLength(100)
  bar_code?: string;
}
