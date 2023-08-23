import { IsNotEmpty } from 'class-validator';

export class FindBooksByCategoryBody {
  @IsNotEmpty()
  category: string;
}
