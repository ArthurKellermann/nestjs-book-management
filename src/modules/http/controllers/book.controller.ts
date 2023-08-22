import { Body, Controller, Post } from '@nestjs/common';
import { CreateBook } from 'src/app/use-cases/create-book';
import { CreateBookBody } from '../dtos/create-book-body';
import { BookViewModel } from '../view-models/book-view-model';

@Controller('books')
export class BookController {
  constructor(private createBook: CreateBook) {}

  @Post()
  async create(@Body() body: CreateBookBody) {
    const { title, description, bar_code } = body;
    const { book } = await this.createBook.execute({
      title,
      description,
      bar_code,
    });

    return {
      book: BookViewModel.toHTTP(book),
    };
  }
}
