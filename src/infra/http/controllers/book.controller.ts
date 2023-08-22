import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { CreateBook } from 'src/application/use-cases/create-book';
import { CreateBookBody } from '../dtos/create-book-body';
import { BookViewModel } from '../view-models/book-view-model';
import { ListBooks } from 'src/application/use-cases/list-books';
import { ListBooksResponse } from 'src/application/use-cases/list-books';
import { GetBookById } from 'src/application/use-cases/get-book-by-id';

@Controller('books')
export class BookController {
  constructor(
    private createBook: CreateBook,
    private listBooks: ListBooks,
    private getBookById: GetBookById,
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
    const { books } = await this.listBooks.execute();

    return { books };
  }

  @Get(':bookId')
  async getUniqueBook(@Param('bookId') bookId: string) {
    const { book } = await this.getBookById.execute({
      bookId,
    });

    return {
      book: BookViewModel.toHTTP(book),
    };
  }
}
