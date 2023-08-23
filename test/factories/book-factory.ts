import { Book, BookProps } from '@app/entities/book';

type Override = Partial<BookProps>;

export function makeBook(override: Override = {}) {
  return new Book({
    title: 'Harry Potter',
    description: 'example-description',
    category: 'romance',
    bar_code: 'example-bar-code',
    ...override,
  });
}
