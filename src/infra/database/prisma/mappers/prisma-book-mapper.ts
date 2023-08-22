import { Book } from 'src/application/entities/book';
import { Book as RawBook } from '@prisma/client';

export class PrismaBookMapper {
  static toPrisma(book: Book) {
    return {
      id: book.id,
      title: book.title,
      description: book.description,
      bar_code: book.bar_code,
    };
  }

  static toDomain({ id, title, description, bar_code }: RawBook): Book {
    return new Book(
      {
        title,
        description,
        bar_code,
      },
      id,
    );
  }
}
