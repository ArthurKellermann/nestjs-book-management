import { Book } from 'src/app/entities/book';

export class PrismaBookMapper {
  static toPrisma(book: Book) {
    return {
      id: book.id,
      title: book.title,
      description: book.description,
      bar_code: book.bar_code,
    };
  }
}
