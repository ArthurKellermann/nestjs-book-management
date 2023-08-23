import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateBook } from 'src/application/use-cases/create-book';
import { CreateBookBody } from '../dtos/create-book-body';
import { BookViewModel } from '../view-models/book-view-model';
import { ListBooks } from 'src/application/use-cases/list-books';
import { GetBookById } from 'src/application/use-cases/get-book-by-id';
import { UpdateBookBody } from '../dtos/update-book-body';
import { UpdateBookById } from 'src/application/use-cases/update-book-by-id';
import { DeleteBookById } from 'src/application/use-cases/delete-book-by-id';
import { FindBooksByCategory } from '@app/use-cases/find-books-by-category';
import { FindBooksByCategoryBody } from '../dtos/find-book-by-category-body';

@Controller('books')
export class BookController {
  constructor(
    private createBook: CreateBook,
    private listBooks: ListBooks,
    private getBookById: GetBookById,
    private updateBook: UpdateBookById,
    private deleteBook: DeleteBookById,
    private findByCategory: FindBooksByCategory,
  ) {}

  @Post()
  async create(@Body() body: CreateBookBody) {
    const { title, description, category, bar_code } = body;
    const { book } = await this.createBook.execute({
      title,
      description,
      category,
      bar_code,
    });

    return {
      book: BookViewModel.toHTTP(book),
    };
  }

  @Get()
  async list() {
    const { books } = await this.listBooks.execute();

    return books;
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

  @Post('/categories')
  async findBookByCategory(@Body() { category }: FindBooksByCategoryBody) {
    const { book } = await this.findByCategory.execute({
      category,
    });

    return {
      book: BookViewModel.toHTTPList(book),
    };
  }

  @Patch(':bookId')
  async updateBookById(
    @Param('bookId') bookId: string,
    @Body() body: UpdateBookBody,
  ) {
    const { title, description, category, bar_code } = body;
    const { book } = await this.updateBook.execute({
      bookId,
      data: {
        title,
        description,
        category,
        bar_code,
      },
    });

    return {
      book: BookViewModel.toHTTP(book),
    };
  }

  @Delete(':bookId')
  async DeleteBookById(@Param('bookId') bookId: string) {
    await this.deleteBook.execute({
      bookId,
    });

    return;
  }
}
