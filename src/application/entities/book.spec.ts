import { makeBook } from '@test/factories/book-factory';
import { Book } from './book';

describe('Book', () => {
  it('should be able to create a book', () => {
    const book = new Book(makeBook());

    expect(book).toBeTruthy();
  });
});
