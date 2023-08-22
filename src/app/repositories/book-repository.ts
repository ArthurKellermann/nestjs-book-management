import { Book } from '../entities/book';

export abstract class BookRepository {
  abstract create(book: Book): Promise<void>;
}
