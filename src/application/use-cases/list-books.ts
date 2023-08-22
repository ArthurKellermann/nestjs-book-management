import { Injectable } from '@nestjs/common';
import { Book } from '../entities/book';
import { BookRepository } from '../repositories/book-repository';

export interface ListBooksResponse {
  books: Book[];
}

@Injectable()
export class ListBooks {
  constructor(private bookRepository: BookRepository) {}

  async execute(): Promise<ListBooksResponse> {
    const books = await this.bookRepository.findMany();

    return { books };
  }
}
