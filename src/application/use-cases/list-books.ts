import { Injectable } from '@nestjs/common';
import { BookRepository } from '../repositories/book-repository';
import { BookViewModel } from '@infra/http/view-models/book-view-model';
import { Book } from '@app/entities/book';

export interface ListBooksResponse {
  books: Book[];
}

@Injectable()
export class ListBooks {
  constructor(private bookRepository: BookRepository) {}

  async execute(): Promise<ListBooksResponse> {
    const books = await this.bookRepository.findMany();

    return {
      books: BookViewModel.toHTTPList(books),
    };
  }
}
