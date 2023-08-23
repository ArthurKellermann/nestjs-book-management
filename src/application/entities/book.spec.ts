import { Book } from './book';

describe('Book', () => {
  it('should be able to create a book', () => {
    const book = new Book({
      title: 'Harry Potter',
      description: 'Great book!',
      bar_code: 'example-bar-code',
    });

    expect(book).toBeTruthy;
  });
});
