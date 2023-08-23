import { Book } from 'src/application/entities/book';
import { Book as RawBook } from '@prisma/client';

export class PrismaBookMapper {
  static toPrisma(book: Book) {
    return {
      id: book.id,
      title: book.title,
      description: book.description,
      category: book.category,
      bar_code: book.bar_code,
    };
  }

  static toDomain({
    id,
    title,
    description,
    category,
    bar_code,
  }: RawBook): Book {
    return new Book(
      {
        title,
        description,
        category,
        bar_code,
      },
      id,
    );
  }
}
