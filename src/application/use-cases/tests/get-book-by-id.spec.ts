import { InMemoryBooksRepository } from '@test/repositories/in-memory-books-repository';
import { GetBookById } from '../get-book-by-id';
import { Book } from '@app/entities/book';

describe('Get book by id', () => {
  let bookRepository: InMemoryBooksRepository;
  let getById: GetBookById;

  beforeEach(() => {
    bookRepository = new InMemoryBooksRepository();
    getById = new GetBookById(bookRepository);
  });

  it('should be able to get a book by id', async () => {
    const exampleBook = new Book({
      title: 'Harry Potter',
      description: 'Great book!',
      bar_code: 'example-bar-code-2',
    });

    await bookRepository.create(exampleBook);

    await bookRepository.create(
      new Book({
        title: 'Harry Potter',
        description: 'Great book!',
        bar_code: 'example-bar-code-1',
      }),
    );

    await bookRepository.create(
      new Book({
        title: 'Harry Potter',
        description: 'Great book!',
        bar_code: 'example-bar-code-3',
      }),
    );

    const { book } = await getById.execute({
      bookId: exampleBook.id,
    });

    expect(book).toBeTruthy();
    expect(book).toEqual(exampleBook);
  });
});
