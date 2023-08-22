import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateBook } from 'src/application/use-cases/create-book';
import { CreateBookBody } from '../dtos/create-book-body';
import { BookViewModel } from '../view-models/book-view-model';
import { ListBooks } from 'src/application/use-cases/list-books';
import { ListBooksResponse } from 'src/application/use-cases/list-books';

@Controller('books')
export class BookController {
  constructor(
    private createBook: CreateBook,
    private listBooks: ListBooks,
  ) {}

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

  @Get()
  async list(): Promise<ListBooksResponse> {
    const books = await this.listBooks.execute();

    return books;
  }
}
