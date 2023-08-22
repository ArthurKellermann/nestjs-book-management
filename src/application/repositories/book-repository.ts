import { CreateBookBody } from 'src/infra/http/dtos/create-book-body';
import { Book } from '../entities/book';

export abstract class BookRepository {
  abstract create(book: Book): Promise<void>;
  abstract findMany(): Promise<Book[]>;
  abstract findById(bookId: string): Promise<Book> | null;
  abstract update(bookId: string, data: CreateBookBody): Promise<Book>;
}
