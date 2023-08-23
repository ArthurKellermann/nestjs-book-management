import { Injectable } from '@nestjs/common';
import { Book } from '../entities/book';
import { BookRepository } from '../repositories/book-repository';

interface CreateBookRequest {
  title: string;
  description: string;
  category: string;
  bar_code: string;
}

interface CreateBookResponse {
  book: Book;
}

@Injectable()
export class CreateBook {
  constructor(private bookRepository: BookRepository) {}

  async execute(request: CreateBookRequest): Promise<CreateBookResponse> {
    const { title, description, category, bar_code } = request;
    const book = new Book({
      title,
      description,
      category,
      bar_code,
    });

    await this.bookRepository.create(book);

    return {
      book,
    };
  }
}
