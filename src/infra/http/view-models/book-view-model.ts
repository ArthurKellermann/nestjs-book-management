import { Book } from 'src/application/entities/book';

export class BookViewModel {
  static toHTTP({ id, title, description, category, bar_code }: Book) {
    return {
      id,
      title,
      description,
      category,
      bar_code,
    };
  }
  static toHTTPList(books: Book[]): Book[] {
    const mappedBooks = [];
    for (const book of books) {
      mappedBooks.push(this.toHTTP(book));
    }

    return mappedBooks;
  }
}
