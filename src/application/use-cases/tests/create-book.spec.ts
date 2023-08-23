import { InMemoryBooksRepository } from '@test/repositories/in-memory-books-repository';
import { CreateBook } from '../create-book';
import { makeBook } from '@test/factories/book-factory';

describe('Create a book', () => {
  it('should be able to create a book', async () => {
    const BookRepository = new InMemoryBooksRepository();
    const createBook = new CreateBook(BookRepository);

    const { book } = await createBook.execute(makeBook());

    expect(BookRepository.books).toHaveLength(1);
    expect(BookRepository.books[0]).toEqual(book);
  });
});
