import { Book } from 'src/app/entities/book';

export class BookViewModel {
  static toHTTP({ id, title, description, bar_code }: Book) {
    return {
      id,
      title,
      description,
      bar_code,
    };
  }
}
