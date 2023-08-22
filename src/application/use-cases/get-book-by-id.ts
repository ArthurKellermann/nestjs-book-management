import { Injectable } from '@nestjs/common';
import { Book } from '../entities/book';
import { BookRepository } from '../repositories/book-repository';

interface GetBookByIdRequest {
  bookId: string;
}

export interface GetBookByIdResponse {
  book: Book;
}

@Injectable()
export class GetBookById {
  constructor(private bookRepository: BookRepository) {}

  async execute(request: GetBookByIdRequest): Promise<GetBookByIdResponse> {
    const { bookId } = request;

    const book = await this.bookRepository.findById(bookId);

    return {
      book,
    };
  }
}
