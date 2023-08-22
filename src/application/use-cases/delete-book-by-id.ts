import { Injectable } from '@nestjs/common';
import { BookRepository } from '../repositories/book-repository';

interface DeleteBookByIdRequest {
  bookId: string;
}

@Injectable()
export class DeleteBookById {
  constructor(private bookRepository: BookRepository) {}

  async execute(request: DeleteBookByIdRequest): Promise<void> {
    const { bookId } = request;

    await this.bookRepository.delete(bookId);

    return;
  }
}
