import { Book } from '../entities/book';

export abstract class BookRepository {
  abstract create(book: Book): Promise<void>;
  abstract findMany();
  abstract findById(bookId: string): Promise<Book> | null;
}
