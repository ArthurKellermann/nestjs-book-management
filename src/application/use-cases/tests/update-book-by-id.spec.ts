import { InMemoryBooksRepository } from '@test/repositories/in-memory-books-repository';
import { GetBookById } from '../get-book-by-id';
import { UpdateBookById } from '../update-book-by-id';
import { Book } from '@app/entities/book';

describe('Update a book by id', () => {
  let bookRepository: InMemoryBooksRepository;
  let getById: GetBookById;
  let updateBook: UpdateBookById;

  beforeEach(() => {
    bookRepository = new InMemoryBooksRepository();
    getById = new GetBookById(bookRepository);
    updateBook = new UpdateBookById(bookRepository);
  });

  it('should be able to update a book by id', async () => {
    const exampleBook = new Book({
      title: 'Harry Potter',
      description: 'Great book!',
      bar_code: 'example-bar-code-2',
    });

    await bookRepository.create(exampleBook);

    await updateBook.execute({
      bookId: exampleBook.id,
      data: {
        title: 'Harry Potter UPDATED',
      },
    });

    const { book } = await getById.execute({
      bookId: exampleBook.id,
    });

    expect(book).toBeTruthy();
    expect(book.title).toBe('Harry Potter UPDATED');
    expect(book.description).toBe('Great book!');
    expect(book.bar_code).toBe('example-bar-code-2');
  });
});
