import { InMemoryBooksRepository } from '@test/repositories/in-memory-books-repository';
import { Book } from '@app/entities/book';
import { DeleteBookById } from '../delete-book-by-id';
import { GetBookById } from '../get-book-by-id';
import { makeBook } from '@test/factories/book-factory';

describe('Delete a book by id', () => {
  let bookRepository: InMemoryBooksRepository;
  let deleteById: DeleteBookById;
  let getById: GetBookById;

  beforeEach(() => {
    bookRepository = new InMemoryBooksRepository();
    deleteById = new DeleteBookById(bookRepository);
    getById = new GetBookById(bookRepository);
  });

  it('should be able to delete a book by id', async () => {
    const exampleBook = new Book(makeBook());

    await bookRepository.create(exampleBook);

    await deleteById.execute({
      bookId: exampleBook.id,
    });

    const { book } = await getById.execute({
      bookId: exampleBook.id,
    });

    expect(book).toBeNull();
  });
});
