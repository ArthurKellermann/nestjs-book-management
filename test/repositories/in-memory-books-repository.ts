import { BookRepository } from 'src/application/repositories/book-repository';
import { Book } from 'src/application/entities/book';
import { CreateBookBody } from '@infra/http/dtos/create-book-body';

export class InMemoryBooksRepository implements BookRepository {
  public books: Book[] = [];

  async findById(bookId: string): Promise<Book> {
    const book = this.books.find((item) => item.id === bookId) || null;

    return book;
  }

  async create(book: Book): Promise<void> {
    this.books.push(book);
  }

  async findMany(): Promise<Book[]> {
    return this.books;
  }

  async update(bookId: string, data: CreateBookBody): Promise<Book> {
    const book = this.books.find((b) => b.id === bookId);
    if (!book) {
      throw new Error('Book not found.');
    }

    book.title = data.title;
    book.description = data.description;
    book.bar_code = data.bar_code;

    return book;
  }

  async delete(bookId: string): Promise<void> {
    const index = this.books.findIndex((book) => book.id === bookId);

    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }
}
