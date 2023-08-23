import { Injectable } from '@nestjs/common';
import { Book } from '../entities/book';
import { BookRepository } from '../repositories/book-repository';
import { UpdateBookBody } from 'src/infra/http/dtos/update-book-body';

interface UpdateBookByIdRequest {
  bookId: string;
  data: UpdateBookBody;
}

export interface UpdateBookByIdResponse {
  book: Book;
}

@Injectable()
export class UpdateBookById {
  constructor(private bookRepository: BookRepository) {}

  async execute(
    request: UpdateBookByIdRequest,
  ): Promise<UpdateBookByIdResponse> {
    const { bookId, data } = request;
    const { title, description, category, bar_code } = data;

    const book = await this.bookRepository.update(bookId, {
      title,
      description,
      category,
      bar_code,
    });

    return {
      book,
    };
  }
}
