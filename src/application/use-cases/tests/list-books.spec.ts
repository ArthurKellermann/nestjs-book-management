import { InMemoryBooksRepository } from '@test/repositories/in-memory-books-repository';
import { ListBooks } from '../list-books';
import { CreateBook } from '../create-book';

describe('List all the books', () => {
  let bookRepository: InMemoryBooksRepository;
  let listBooks: ListBooks;
  let createBook: CreateBook;

  beforeEach(() => {
    bookRepository = new InMemoryBooksRepository();
    listBooks = new ListBooks(bookRepository);
    createBook = new CreateBook(bookRepository);
  });

  it('should be able to list all the books', async () => {
    const { book } = await createBook.execute({
      title: 'Harry Potter',
      description: 'Great book!',
      bar_code: 'example-bar-code',
    });

    const { books } = await listBooks.execute();

    expect(books).toHaveLength(1);
    expect(books[0].id).toEqual(book.id);
  });
});
