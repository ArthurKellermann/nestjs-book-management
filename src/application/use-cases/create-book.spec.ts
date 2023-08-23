import { InMemoryBooksRepository } from '@test/repositories/in-memory-books-repository';
import { describe } from 'node:test';
import { CreateBook } from './create-book';

describe('Create a book', () => {
  it('should be able to create a book', async () => {
    const BookRepository = new InMemoryBooksRepository();
    const createBook = new CreateBook(BookRepository);

    const { book } = await createBook.execute({
      title: 'Harry Potter',
      description: 'Great book!',
      bar_code: 'example-bar-code',
    });

    expect(BookRepository.books).toHaveLength(1);
    expect(BookRepository.books[0]).toEqual(book);
  });
});
