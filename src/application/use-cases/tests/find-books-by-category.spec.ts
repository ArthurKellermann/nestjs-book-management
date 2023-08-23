import { InMemoryBooksRepository } from '@test/repositories/in-memory-books-repository';
import { Book } from '@app/entities/book';
import { makeBook } from '@test/factories/book-factory';
import { FindBooksByCategory } from '../find-books-by-category';

describe('Find a book by category', () => {
  let bookRepository: InMemoryBooksRepository;
  let findByCategory: FindBooksByCategory;

  beforeEach(() => {
    bookRepository = new InMemoryBooksRepository();
    findByCategory = new FindBooksByCategory(bookRepository);
  });

  it('should be able to find a book by category', async () => {
    const exampleBook = new Book(
      makeBook({
        bar_code: 'example-bar-code-1',
      }),
    );

    await bookRepository.create(exampleBook);

    await bookRepository.create(
      new Book(
        makeBook({
          bar_code: 'example-bar-code-2',
        }),
      ),
    );

    await bookRepository.create(
      new Book(
        makeBook({
          bar_code: 'example-bar-code-3',
        }),
      ),
    );

    const { book } = await findByCategory.execute({
      category: exampleBook.category,
    });

    expect(book).toBeTruthy();
    expect(book[0].category).toEqual(exampleBook.category);
  });
});
