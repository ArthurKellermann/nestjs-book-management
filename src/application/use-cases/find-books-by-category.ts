import { Injectable } from '@nestjs/common';
import { Book } from '../entities/book';
import { BookRepository } from '../repositories/book-repository';

interface FindBooksByCategoryRequest {
  category: string;
}

export interface FindBooksByCategoryResponse {
  book: Book[];
}

@Injectable()
export class FindBooksByCategory {
  constructor(private bookRepository: BookRepository) {}

  async execute(
    request: FindBooksByCategoryRequest,
  ): Promise<FindBooksByCategoryResponse> {
    const { category } = request;

    const book = await this.bookRepository.findByCategory(category);

    return {
      book,
    };
  }
}
